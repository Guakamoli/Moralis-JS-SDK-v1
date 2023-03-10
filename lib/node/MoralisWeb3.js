"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EthereumEvents = void 0;
var _web = _interopRequireDefault(require("web3"));
var _ParseObject = _interopRequireDefault(require("./ParseObject"));
var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));
var _ParseUser = _interopRequireDefault(require("./ParseUser"));
var _ParseACL = _interopRequireDefault(require("./ParseACL"));
var _MoralisErd = _interopRequireDefault(require("./MoralisErd"));
var _MoralisDot = _interopRequireDefault(require("./MoralisDot"));
var _MoralisWalletConnectProvider = _interopRequireDefault(require("./MoralisWalletConnectProvider"));
var _MoralisInjectedProvider = _interopRequireDefault(require("./MoralisInjectedProvider"));
var _TransferUtils = _interopRequireDefault(require("./TransferUtils"));
var _Cloud = require("./Cloud");
var _detectProvider = _interopRequireDefault(require("@metamask/detect-provider"));
var _createSigningData = _interopRequireDefault(require("./createSigningData"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global window */

const EventEmitter = require('events');
const transferEvents = new EventEmitter();
const EthereumEvents = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  ACCOUNTS_CHANGED: 'accountsChanged',
  CHAIN_CHANGED: 'chainChanged'
};
exports.EthereumEvents = EthereumEvents;
const WARNING = 'Non ethereum enabled browser';
const ERROR_WEB3_MISSING = 'Missing web3 instance, make sure to call Moralis.enable() or Moralis.authenticate()';
function uniq(arr) {
  return arr.filter((v, i) => arr.indexOf(v) === i);
}
class MoralisWeb3 {
  constructor(...args) {
    const MWeb3 = typeof _web.default === 'function' ? _web.default : window.Web3;
    return new MWeb3(...args);
  }
  static enableWeb3(options) {
    return this._enable(options);
  }
  static isWeb3Enabled() {
    return this.ensureWeb3IsInstalled();
  }
  static async enable(options) {
    const Web3Provider = MoralisWeb3.getWeb3Provider(options);
    const web3Provider = new Web3Provider();
    const web3 = await web3Provider.activate(options);
    this.activeWeb3Provider = web3Provider;
    return web3;
  }
  static async _enable(options) {
    const web3 = await this.enable(options);
    this.web3 = web3;
    return web3;
  }
  static isDotAuth(options) {
    switch (options === null || options === void 0 ? void 0 : options.type) {
      case 'dot':
      case 'polkadot':
      case 'kusama':
        return true;
      default:
        return false;
    }
  }
  static isElrondAuth(options) {
    switch (options === null || options === void 0 ? void 0 : options.type) {
      case 'erd':
      case 'elrond':
        return true;
      default:
        return false;
    }
  }
  static getWeb3Provider(options) {
    switch (options === null || options === void 0 ? void 0 : options.provider) {
      case 'walletconnect':
      case 'walletConnect':
      case 'wc':
        return _MoralisWalletConnectProvider.default;
      default:
        return _MoralisInjectedProvider.default;
    }
  }
  static async cleanup() {
    if (this.activeWeb3Provider) {
      await this.activeWeb3Provider.deactivate();
    }

    // Prevent a bug when there is stale data active
    _MoralisWalletConnectProvider.default.cleanupStaleData();
  }
  static async authenticate(options) {
    var _user$get;
    const isLoggedIn = await _ParseUser.default.currentAsync();
    if (isLoggedIn) {
      await _ParseUser.default.logOut();
    }
    await MoralisWeb3.cleanup();
    if (MoralisWeb3.isDotAuth(options)) {
      return _MoralisDot.default.authenticate(options);
    }
    if (MoralisWeb3.isElrondAuth(options)) {
      return _MoralisErd.default.authenticate(options);
    }
    const web3 = await this._enable(options);
    let message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
    const accounts = await web3.eth.getAccounts();
    const accountsLower = accounts.map(v => v.toLowerCase());
    const [ethAddress] = accountsLower;
    const chainId = await this.getChainId();
    if (options !== null && options !== void 0 && options.messageFetcher) {
      message = await options.messageFetcher({
        address: accountsLower[0],
        chain: parseInt(chainId, 10),
        networkType: 'evm'
      });
    }
    if (!message) throw new Error('Message not found');
    const data = await (0, _createSigningData.default)(message);
    if (!ethAddress) throw new Error('Address not found');
    const signature = await web3.eth.personal.sign(data, ethAddress, '');
    if (!signature) throw new Error('Data not signed');
    const authData = {
      variables: {
        signature,
        data,
        networkType: 'evm'
      },
      address: ethAddress,
      signature,
      data,
      chain: chainId,
      networkType: 'evm',
      operationName: options === null || options === void 0 ? void 0 : options.operationName,
      query: options === null || options === void 0 ? void 0 : options.query,
      headers: options === null || options === void 0 ? void 0 : options.headers
    };
    const user = await _ParseUser.default.logInWith('moralisEth', {
      authData
    });
    await user.setACL(new _ParseACL.default(user));
    if (!user) throw new Error('Could not get user');
    user.set('accounts', uniq([].concat(accountsLower, (_user$get = user.get('accounts')) !== null && _user$get !== void 0 ? _user$get : [])));
    user.set('ethAddress', ethAddress);
    await user.save(null, options);
    return user;
  }
  static async link(account, options) {
    var _user$get2;
    const web3 = await MoralisWeb3._enable(options);
    const data = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
    const user = await _ParseUser.default.currentAsync();
    const ethAddress = account.toLowerCase();
    const EthAddress = _ParseObject.default.extend('_EthAddress');
    const query = new _ParseQuery.default(EthAddress);
    const ethAddressRecord = await query.get(ethAddress).catch(() => null);
    if (!ethAddressRecord) {
      const signature = await web3.eth.personal.sign(data, account, '');
      await user.linkWith('moralisEth', {
        authData: {
          id: ethAddress,
          signature,
          data
        }
      });
    }
    user.set('accounts', uniq([ethAddress].concat((_user$get2 = user.get('accounts')) !== null && _user$get2 !== void 0 ? _user$get2 : [])));
    user.set('ethAddress', ethAddress);
    await user.save(null, options);
    return user;
  }
  static async unlink(account) {
    var _user$get3;
    const accountsLower = account.toLowerCase();
    const EthAddress = _ParseObject.default.extend('_EthAddress');
    const query = new _ParseQuery.default(EthAddress);
    const ethAddressRecord = await query.get(accountsLower);
    await ethAddressRecord.destroy();
    const user = await _ParseUser.default.currentAsync();
    const accounts = (_user$get3 = user.get('accounts')) !== null && _user$get3 !== void 0 ? _user$get3 : [];
    const nextAccounts = accounts.filter(v => v !== accountsLower);
    user.set('accounts', nextAccounts);
    user.set('ethAddress', nextAccounts[0]);
    await user._unlinkFrom('moralisEth');
    await user.save();
    return user;
  }
  static async initPlugins(installedPlugins) {
    const specs = installedPlugins || (await (0, _Cloud.run)('getPluginSpecs'));
    if (!this.Plugins) this.Plugins = {};
    if (!specs) return;
    const allPlugins = this.Plugins;
    specs.forEach(plugin => {
      allPlugins[plugin.name] = {};
      plugin.functions.forEach(f => {
        allPlugins[plugin.name][f] = async (params, options) => {
          if (!options) options = {};
          const response = await (0, _Cloud.run)(`${plugin.name}_${f}`, params);
          if (!response.data.success) {
            const error = JSON.stringify(response.data.data, null, 2);
            throw new Error(`Something went wrong\n${error}`);
          }
          if (options.disableTriggers !== true) {
            const triggerReturn = await this.handleTriggers(response.data.result.triggers, response.data.result.data);
            if (triggerReturn) return triggerReturn;
          }
          return response.data.result;
        };
      });
    });
    this.Plugins = allPlugins;
  }
  static async handleTriggers(triggersArray, payload) {
    var _triggersArray$i2, _triggersArray$i2$opt, _triggersArray$i3, _triggersArray$i3$opt, _triggersArray$i4, _triggersArray$i5, _triggersArray$i5$opt, _triggersArray$i6, _triggersArray$i7, _triggersArray$i8, _triggersArray$i9, _triggersArray$i10, _triggersArray$i11, _triggersArray$i12, _triggersArray$i13, _triggersArray$i14, _triggersArray$i15, _triggersArray$i16, _triggersArray$i17, _triggersArray$i18, _triggersArray$i19;
    if (!triggersArray) return;
    for (let i = 0; i < triggersArray.length; i++) {
      var _triggersArray$i;
      let response;
      switch ((_triggersArray$i = triggersArray[i]) === null || _triggersArray$i === void 0 ? void 0 : _triggersArray$i.name) {
        // Handles `openUrl` trigger
        case 'openUrl':
          if (((_triggersArray$i2 = triggersArray[i]) === null || _triggersArray$i2 === void 0 ? void 0 : (_triggersArray$i2$opt = _triggersArray$i2.options) === null || _triggersArray$i2$opt === void 0 ? void 0 : _triggersArray$i2$opt.newTab) === true || !((_triggersArray$i3 = triggersArray[i]) !== null && _triggersArray$i3 !== void 0 && (_triggersArray$i3$opt = _triggersArray$i3.options) !== null && _triggersArray$i3$opt !== void 0 && _triggersArray$i3$opt.hasOwnProperty('newTab'))) response = window.open((_triggersArray$i4 = triggersArray[i]) === null || _triggersArray$i4 === void 0 ? void 0 : _triggersArray$i4.data);
          if (((_triggersArray$i5 = triggersArray[i]) === null || _triggersArray$i5 === void 0 ? void 0 : (_triggersArray$i5$opt = _triggersArray$i5.options) === null || _triggersArray$i5$opt === void 0 ? void 0 : _triggersArray$i5$opt.newTab) === false) response = window.open((_triggersArray$i6 = triggersArray[i]) === null || _triggersArray$i6 === void 0 ? void 0 : _triggersArray$i6.data, '_self');
          if (((_triggersArray$i7 = triggersArray[i]) === null || _triggersArray$i7 === void 0 ? void 0 : _triggersArray$i7.shouldReturnPayload) === true) return {
            payload: payload,
            response: response
          };
          if (((_triggersArray$i8 = triggersArray[i]) === null || _triggersArray$i8 === void 0 ? void 0 : _triggersArray$i8.shouldReturnResponse) === true) return response;
          break;
        // Handles `web3Transaction` trigger
        case 'web3Transaction':
          if (!this.ensureWeb3IsInstalled()) throw new Error(ERROR_WEB3_MISSING);
          if (((_triggersArray$i9 = triggersArray[i]) === null || _triggersArray$i9 === void 0 ? void 0 : _triggersArray$i9.shouldAwait) === true) response = await this.web3.eth.sendTransaction((_triggersArray$i10 = triggersArray[i]) === null || _triggersArray$i10 === void 0 ? void 0 : _triggersArray$i10.data);
          if (((_triggersArray$i11 = triggersArray[i]) === null || _triggersArray$i11 === void 0 ? void 0 : _triggersArray$i11.shouldAwait) === false) response = this.web3.eth.sendTransaction((_triggersArray$i12 = triggersArray[i]) === null || _triggersArray$i12 === void 0 ? void 0 : _triggersArray$i12.data);
          if (((_triggersArray$i13 = triggersArray[i]) === null || _triggersArray$i13 === void 0 ? void 0 : _triggersArray$i13.shouldReturnPayload) === true) return {
            payload: payload,
            response: response
          };
          if (((_triggersArray$i14 = triggersArray[i]) === null || _triggersArray$i14 === void 0 ? void 0 : _triggersArray$i14.shouldReturnResponse) === true) return response;
          break;
        // Handles `web3Sign` trigger
        case 'web3Sign':
          if (!this.ensureWeb3IsInstalled()) throw new Error(ERROR_WEB3_MISSING);
          if (!triggersArray[i].message) throw new Error('web3Sign trigger does not have a message to sign');
          if (!triggersArray[i].signer || !this.web3.utils.isAddress(triggersArray[i].signer)) throw new Error('web3Sign trigger signer address missing or invalid');
          if (((_triggersArray$i15 = triggersArray[i]) === null || _triggersArray$i15 === void 0 ? void 0 : _triggersArray$i15.shouldAwait) === true) response = await this.web3.eth.personal.sign(triggersArray[i].message, triggersArray[i].signer);
          if (((_triggersArray$i16 = triggersArray[i]) === null || _triggersArray$i16 === void 0 ? void 0 : _triggersArray$i16.shouldAwait) === false) response = this.web3.eth.personal.sign(triggersArray[i].message, triggersArray[i].signer);
          if (((_triggersArray$i17 = triggersArray[i]) === null || _triggersArray$i17 === void 0 ? void 0 : _triggersArray$i17.shouldReturnPayload) === true) return {
            payload: payload,
            response: response
          };
          if (((_triggersArray$i18 = triggersArray[i]) === null || _triggersArray$i18 === void 0 ? void 0 : _triggersArray$i18.shouldReturnResponse) === true) return response;
          break;
        default:
          throw new Error(`Unknown trigger: "${(_triggersArray$i19 = triggersArray[i]) === null || _triggersArray$i19 === void 0 ? void 0 : _triggersArray$i19.name}"`);
      }
    }
  }
  static async getAllERC20({
    chain,
    address
  } = {}) {
    const result = await (0, _Cloud.run)('getAllERC20', {
      chain,
      address
    });
    return result;
  }
  static async getERC20({
    chain,
    address,
    symbol,
    tokenAddress
  } = {}) {
    const result = (0, _Cloud.run)('getERC20', {
      chain,
      address,
      symbol,
      tokenAddress
    });
    return result;
  }
  static getNFTs({
    chain = 'Eth',
    address = ''
  } = {}) {
    return (0, _Cloud.run)('getNFTs_old', {
      chain,
      address
    });
  }
  static getNFTsCount({
    chain = 'Eth',
    address = ''
  } = {}) {
    return (0, _Cloud.run)('getNFTsCount_old', {
      chain,
      address
    });
  }
  static getTransactions({
    chain = 'Eth',
    address = '',
    order = 'desc'
  } = {}) {
    return (0, _Cloud.run)('getTransactions', {
      chain,
      address,
      order
    });
  }
  static getTransactionsCount({
    chain = 'Eth',
    address = ''
  } = {}) {
    return (0, _Cloud.run)('getTransactionsCount', {
      chain,
      address
    });
  }
  static async transfer({
    type = 'native',
    receiver = '',
    contractAddress = '',
    // eslint-disable-next-line camelcase
    contract_address,
    amount = '',
    tokenId = '',
    // eslint-disable-next-line camelcase
    token_id,
    system = 'evm',
    awaitReceipt = true
  } = {}) {
    // Allow snake-case for backwards compatibility
    // eslint-disable-next-line camelcase
    contractAddress = contractAddress || contract_address;
    // eslint-disable-next-line camelcase
    tokenId = tokenId || token_id;
    const options = {
      receiver,
      contractAddress,
      amount,
      tokenId,
      system,
      awaitReceipt
    };
    _TransferUtils.default.isSupportedType(type);
    _TransferUtils.default.validateInput(type, options);
    if (!this.ensureWeb3IsInstalled()) throw new Error(ERROR_WEB3_MISSING);
    const {
      web3
    } = this;
    const sender = await (await web3.eth.getAccounts())[0];
    if (!sender) throw new Error('Sender address not found');
    let transferOperation;
    let customToken;
    if (type !== 'native') customToken = new web3.eth.Contract(_TransferUtils.default.abi[type], contractAddress);
    switch (type) {
      case 'native':
        transferOperation = web3.eth.sendTransaction({
          from: sender,
          to: receiver,
          value: amount
        });
        break;
      case 'erc20':
        transferOperation = customToken.methods.transfer(receiver, amount).send({
          from: sender
        });
        break;
      case 'erc721':
        transferOperation = customToken.methods.safeTransferFrom(sender, receiver, tokenId).send({
          from: sender
        });
        break;
      case 'erc1155':
        transferOperation = customToken.methods.safeTransferFrom(sender, receiver, tokenId, amount, '0x').send({
          from: sender
        });
        break;
      default:
        throw new Error(`Unknown transfer type: "${type}"`);
    }
    if (awaitReceipt) return transferOperation;
    transferOperation.on('transactionHash', hash => {
      transferEvents.emit('transactionHash', hash);
    }).on('receipt', receipt => {
      transferEvents.emit('receipt', receipt);
    }).on('confirmation', (confirmationNumber, receipt) => {
      transferEvents.emit('confirmation', (confirmationNumber, receipt));
    }).on('error', error => {
      transferEvents.emit('error', error);
      throw error;
    });
    return transferEvents;
  }
  static async executeFunction({
    contractAddress,
    abi,
    functionName,
    msgValue,
    params = {}
  } = {}) {
    if (!this.ensureWeb3IsInstalled()) throw new Error(ERROR_WEB3_MISSING);
    const {
      web3
    } = this;
    const contractOptions = {};
    const functionData = abi.find(x => x.name === functionName);
    if (!functionData) throw new Error('Function does not exist in abi');
    const stateMutability = functionData === null || functionData === void 0 ? void 0 : functionData.stateMutability;
    const isReadFunction = stateMutability === 'view' || stateMutability === 'pure';
    if (!isReadFunction) {
      if (!params.from) {
        const currentAddress = await (await web3.eth.getAccounts())[0];
        if (!currentAddress) throw new Error('From address is required');
        contractOptions.from = currentAddress;
      }
    }
    const errors = [];
    for (const input of functionData.inputs) {
      const value = params[input.name];
      if (!(typeof value !== 'undefined' && value)) {
        errors.push(`${input.name} is required`);
      }
    }
    if (errors.length > 0) {
      throw errors;
    }
    const parsedInputs = functionData.inputs.map(x => {
      return params[x.name];
    });
    const contract = new web3.eth.Contract(abi, contractAddress, contractOptions);
    const customFunction = contract.methods[functionName];
    const response = isReadFunction ? await customFunction(...Object.values(parsedInputs)).call() : await customFunction(...Object.values(parsedInputs)).send(msgValue ? {
      value: msgValue
    } : null);
    return response;
  }
  static getSigningData() {
    return `Moralis Authentication`;
    // const data = `Moralis Authentication`;
    // return data;
  }

  static on(eventName, cb) {
    const {
      ethereum
    } = window;
    if (!ethereum || !ethereum.on) {
      // eslint-disable-next-line no-console
      console.warn(WARNING);
      return () => {
        // eslint-disable-next-line no-console
        console.warn(WARNING);
      };
    }
    ethereum.on(eventName, cb);
    return () => {
      // eslint-disable-next-line no-console
      console.warn('UNSUB NOT SUPPORTED');
    };
  }
  static async getChainId() {
    if (this.ensureWeb3IsInstalled()) return await this.web3.eth.net.getId();
    throw new Error(ERROR_WEB3_MISSING);
  }
  static ensureWeb3IsInstalled() {
    return this.web3 ? true : false;
  }
  static async isMetaMaskInstalled() {
    return (await (0, _detectProvider.default)()) ? true : false;
  }
  static async switchNetwork(chainId) {
    chainId = verifyChainId(chainId);
    // Check if the user wallet is already on `chainId`
    const currentNetwork = fromDecimalToHex(await this.getChainId());
    if (currentNetwork === chainId) return;
    // Trigger network switch
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: chainId
      }]
    });
  }
  static async addNetwork(chainId, chainName, currencyName, currencySymbol, rpcUrl, blockExplorerUrl) {
    chainId = verifyChainId(chainId);
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: chainId,
        chainName: chainName,
        nativeCurrency: {
          name: currencyName,
          symbol: currencySymbol,
          decimals: 18
        },
        rpcUrls: [rpcUrl],
        blockExplorerUrls: [blockExplorerUrl]
      }]
    });
  }
}
function fromDecimalToHex(number) {
  if (typeof number !== 'number') throw 'The input provided should be a number';
  return `0x${number.toString(16)}`;
}
function verifyChainId(chainId) {
  // Check if chainId is a number, in that case convert to hex
  if (typeof chainId === 'number') chainId = fromDecimalToHex(chainId);
  return chainId;
}
MoralisWeb3.onConnect = MoralisWeb3.on.bind(MoralisWeb3, EthereumEvents.CONNECT);
MoralisWeb3.onDisconnect = MoralisWeb3.on.bind(MoralisWeb3, EthereumEvents.DISCONNECT);
MoralisWeb3.onChainChanged = MoralisWeb3.on.bind(MoralisWeb3, EthereumEvents.CHAIN_CHANGED);
MoralisWeb3.onAccountsChanged = MoralisWeb3.on.bind(MoralisWeb3, EthereumEvents.ACCOUNTS_CHANGED);
var _default = MoralisWeb3;
exports.default = _default;