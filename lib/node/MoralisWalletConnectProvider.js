"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _web = _interopRequireDefault(require("web3"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global window */

const MORALIS_RPCS = {
  1: 'https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/mainnet',
  3: 'https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/ropsten',
  4: 'https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/rinkeby',
  5: 'https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/goerli',
  42: 'https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/kovan',
  137: 'https://speedy-nodes-nyc.moralis.io/WalletConnect/polygon/mainnet',
  80001: 'https://speedy-nodes-nyc.moralis.io/WalletConnect/polygon/mumbai',
  56: 'https://speedy-nodes-nyc.moralis.io/WalletConnect/bsc/mainnet',
  97: 'https://speedy-nodes-nyc.moralis.io/WalletConnect/bsc/testnet'
};
class MoralisWalletConnectProvider {
  get type() {
    return 'WalletConnect';
  }
  async activate(options = {}) {
    if (!this.provider) {
      let WalletConnectProvider;
      try {
        WalletConnectProvider = require('@walletconnect/web3-provider');
      } catch (error) {
        // Do nothing. User might not need walletconnect
      }
      if (typeof WalletConnectProvider.default === 'function') {
        this.provider = new WalletConnectProvider.default({
          rpc: MORALIS_RPCS,
          chainId: options.chainId,
          qrcodeModalOptions: {
            mobileLinks: options.mobileLinks
          }
        });
      } else {
        this.provider = new window.WalletConnectProvider.default({
          rpc: MORALIS_RPCS,
          chainId: options.chainId,
          qrcodeModalOptions: {
            mobileLinks: options.mobileLinks
          }
        });
      }
    }
    await this.provider.enable();
    const MWeb3 = typeof _web.default === 'function' ? _web.default : window.Web3;
    this.web3 = new MWeb3(this.provider);
    this.isActivated = true;
    return this.web3;
  }
  static cleanupStaleData() {
    if (window) {
      try {
        window.localStorage.removeItem('walletconnect');
      } catch (error) {
        // Do nothing, might happen in react-native environment
      }
    }
  }
  async deactivate() {
    this.isActivated = false;
    this.web3 = null;
    if (this.provider) {
      try {
        await this.provider.close();
      } catch (_unused) {
        // Do nothing, might throw error if connection was not opened
      }
    }
    MoralisWalletConnectProvider.cleanupStaleData();
    this.provider = null;
  }
}
var _default = MoralisWalletConnectProvider;
exports.default = _default;