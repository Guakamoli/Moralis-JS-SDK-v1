var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EthereumEvents = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
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
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var EventEmitter = require('events');
var transferEvents = new EventEmitter();
var EthereumEvents = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  ACCOUNTS_CHANGED: 'accountsChanged',
  CHAIN_CHANGED: 'chainChanged'
};
exports.EthereumEvents = EthereumEvents;
var WARNING = 'Non ethereum enabled browser';
var ERROR_WEB3_MISSING = 'Missing web3 instance, make sure to call Moralis.enable() or Moralis.authenticate()';
function uniq(arr) {
  return arr.filter(function (v, i) {
    return arr.indexOf(v) === i;
  });
}
var MoralisWeb3 = function () {
  function MoralisWeb3() {
    (0, _classCallCheck2.default)(this, MoralisWeb3);
    var MWeb3 = typeof _web.default === 'function' ? _web.default : window.Web3;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (0, _construct2.default)(MWeb3, args);
  }
  (0, _createClass2.default)(MoralisWeb3, null, [{
    key: "enableWeb3",
    value: function (options) {
      return this._enable(options);
    }
  }, {
    key: "isWeb3Enabled",
    value: function () {
      return this.ensureWeb3IsInstalled();
    }
  }, {
    key: "enable",
    value: function (options) {
      var Web3Provider, web3Provider, web3;
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Web3Provider = MoralisWeb3.getWeb3Provider(options);
              web3Provider = new Web3Provider();
              _context.next = 4;
              return _regenerator.default.awrap(web3Provider.activate(options));
            case 4:
              web3 = _context.sent;
              this.activeWeb3Provider = web3Provider;
              return _context.abrupt("return", web3);
            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_enable",
    value: function (options) {
      var web3;
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _regenerator.default.awrap(this.enable(options));
            case 2:
              web3 = _context2.sent;
              this.web3 = web3;
              return _context2.abrupt("return", web3);
            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "isDotAuth",
    value: function (options) {
      switch (options == null ? void 0 : options.type) {
        case 'dot':
        case 'polkadot':
        case 'kusama':
          return true;
        default:
          return false;
      }
    }
  }, {
    key: "isElrondAuth",
    value: function (options) {
      switch (options == null ? void 0 : options.type) {
        case 'erd':
        case 'elrond':
          return true;
        default:
          return false;
      }
    }
  }, {
    key: "getWeb3Provider",
    value: function (options) {
      switch (options == null ? void 0 : options.provider) {
        case 'walletconnect':
        case 'walletConnect':
        case 'wc':
          return _MoralisWalletConnectProvider.default;
        default:
          return _MoralisInjectedProvider.default;
      }
    }
  }, {
    key: "cleanup",
    value: function () {
      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!this.activeWeb3Provider) {
                _context3.next = 3;
                break;
              }
              _context3.next = 3;
              return _regenerator.default.awrap(this.activeWeb3Provider.deactivate());
            case 3:
              _MoralisWalletConnectProvider.default.cleanupStaleData();
            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "authenticate",
    value: function (options) {
      var _user$get;
      var isLoggedIn, web3, message, accounts, accountsLower, _accountsLower, ethAddress, chainId, data, signature, variables, authData, user;
      return _regenerator.default.async(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _regenerator.default.awrap(_ParseUser.default.currentAsync());
            case 2:
              isLoggedIn = _context4.sent;
              if (!isLoggedIn) {
                _context4.next = 6;
                break;
              }
              _context4.next = 6;
              return _regenerator.default.awrap(_ParseUser.default.logOut());
            case 6:
              _context4.next = 8;
              return _regenerator.default.awrap(MoralisWeb3.cleanup());
            case 8:
              if (!MoralisWeb3.isDotAuth(options)) {
                _context4.next = 10;
                break;
              }
              return _context4.abrupt("return", _MoralisDot.default.authenticate(options));
            case 10:
              if (!MoralisWeb3.isElrondAuth(options)) {
                _context4.next = 12;
                break;
              }
              return _context4.abrupt("return", _MoralisErd.default.authenticate(options));
            case 12:
              _context4.next = 14;
              return _regenerator.default.awrap(this._enable(options));
            case 14:
              web3 = _context4.sent;
              message = (options == null ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
              _context4.next = 18;
              return _regenerator.default.awrap(web3.eth.getAccounts());
            case 18:
              accounts = _context4.sent;
              accountsLower = accounts.map(function (v) {
                return v.toLowerCase();
              });
              _accountsLower = (0, _slicedToArray2.default)(accountsLower, 1), ethAddress = _accountsLower[0];
              _context4.next = 23;
              return _regenerator.default.awrap(this.getChainId());
            case 23:
              chainId = _context4.sent;
              if (!(options != null && options.messageFetcher)) {
                _context4.next = 28;
                break;
              }
              _context4.next = 27;
              return _regenerator.default.awrap(options.messageFetcher({
                address: accountsLower[0],
                chain: parseInt(chainId, 10),
                networkType: 'evm'
              }));
            case 27:
              message = _context4.sent;
            case 28:
              if (message) {
                _context4.next = 30;
                break;
              }
              throw new Error('Message not found');
            case 30:
              _context4.next = 32;
              return _regenerator.default.awrap((0, _createSigningData.default)(message));
            case 32:
              data = _context4.sent;
              if (ethAddress) {
                _context4.next = 35;
                break;
              }
              throw new Error('Address not found');
            case 35:
              _context4.next = 37;
              return _regenerator.default.awrap(web3.eth.personal.sign(data, ethAddress, ''));
            case 37:
              signature = _context4.sent;
              if (signature) {
                _context4.next = 40;
                break;
              }
              throw new Error('Data not signed');
            case 40:
              variables = {
                signature: signature,
                data: data,
                networkType: 'evm'
              };
              authData = {
                variables: variables,
                address: ethAddress,
                signature: signature,
                data: data,
                chain: chainId,
                networkType: 'evm',
                operationName: options == null ? void 0 : options.operationName,
                query: options == null ? void 0 : options.query,
                headers: options == null ? void 0 : options.headers
              };
              _context4.next = 44;
              return _regenerator.default.awrap(_ParseUser.default.logInWith('moralisEth', {
                authData: authData
              }));
            case 44:
              user = _context4.sent;
              _context4.next = 47;
              return _regenerator.default.awrap(user.setACL(new _ParseACL.default(user)));
            case 47:
              if (user) {
                _context4.next = 49;
                break;
              }
              throw new Error('Could not get user');
            case 49:
              user.set('accounts', uniq([].concat(accountsLower, (_user$get = user.get('accounts')) != null ? _user$get : [])));
              user.set('ethAddress', ethAddress);
              _context4.next = 53;
              return _regenerator.default.awrap(user.save(null, options));
            case 53:
              return _context4.abrupt("return", user);
            case 54:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "link",
    value: function (account, options) {
      var _user$get2;
      var web3, data, user, ethAddress, EthAddress, query, ethAddressRecord, signature, authData;
      return _regenerator.default.async(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _regenerator.default.awrap(MoralisWeb3._enable(options));
            case 2:
              web3 = _context5.sent;
              data = (options == null ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
              _context5.next = 6;
              return _regenerator.default.awrap(_ParseUser.default.currentAsync());
            case 6:
              user = _context5.sent;
              ethAddress = account.toLowerCase();
              EthAddress = _ParseObject.default.extend('_EthAddress');
              query = new _ParseQuery.default(EthAddress);
              _context5.next = 12;
              return _regenerator.default.awrap(query.get(ethAddress).catch(function () {
                return null;
              }));
            case 12:
              ethAddressRecord = _context5.sent;
              if (ethAddressRecord) {
                _context5.next = 20;
                break;
              }
              _context5.next = 16;
              return _regenerator.default.awrap(web3.eth.personal.sign(data, account, ''));
            case 16:
              signature = _context5.sent;
              authData = {
                id: ethAddress,
                signature: signature,
                data: data
              };
              _context5.next = 20;
              return _regenerator.default.awrap(user.linkWith('moralisEth', {
                authData: authData
              }));
            case 20:
              user.set('accounts', uniq([ethAddress].concat((_user$get2 = user.get('accounts')) != null ? _user$get2 : [])));
              user.set('ethAddress', ethAddress);
              _context5.next = 24;
              return _regenerator.default.awrap(user.save(null, options));
            case 24:
              return _context5.abrupt("return", user);
            case 25:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "unlink",
    value: function (account) {
      var _user$get3;
      var accountsLower, EthAddress, query, ethAddressRecord, user, accounts, nextAccounts;
      return _regenerator.default.async(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              accountsLower = account.toLowerCase();
              EthAddress = _ParseObject.default.extend('_EthAddress');
              query = new _ParseQuery.default(EthAddress);
              _context6.next = 5;
              return _regenerator.default.awrap(query.get(accountsLower));
            case 5:
              ethAddressRecord = _context6.sent;
              _context6.next = 8;
              return _regenerator.default.awrap(ethAddressRecord.destroy());
            case 8:
              _context6.next = 10;
              return _regenerator.default.awrap(_ParseUser.default.currentAsync());
            case 10:
              user = _context6.sent;
              accounts = (_user$get3 = user.get('accounts')) != null ? _user$get3 : [];
              nextAccounts = accounts.filter(function (v) {
                return v !== accountsLower;
              });
              user.set('accounts', nextAccounts);
              user.set('ethAddress', nextAccounts[0]);
              _context6.next = 17;
              return _regenerator.default.awrap(user._unlinkFrom('moralisEth'));
            case 17:
              _context6.next = 19;
              return _regenerator.default.awrap(user.save());
            case 19:
              return _context6.abrupt("return", user);
            case 20:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "initPlugins",
    value: function (installedPlugins) {
      var specs, allPlugins;
      return _regenerator.default.async(function (_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.t0 = installedPlugins;
              if (_context8.t0) {
                _context8.next = 5;
                break;
              }
              _context8.next = 4;
              return _regenerator.default.awrap((0, _Cloud.run)('getPluginSpecs'));
            case 4:
              _context8.t0 = _context8.sent;
            case 5:
              specs = _context8.t0;
              if (!this.Plugins) this.Plugins = {};
              if (specs) {
                _context8.next = 9;
                break;
              }
              return _context8.abrupt("return");
            case 9:
              allPlugins = this.Plugins;
              specs.forEach(function (plugin) {
                allPlugins[plugin.name] = {};
                plugin.functions.forEach(function (f) {
                  allPlugins[plugin.name][f] = function (params, options) {
                    var response, error, triggerReturn;
                    return _regenerator.default.async(function (_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            if (!options) options = {};
                            _context7.next = 3;
                            return _regenerator.default.awrap((0, _Cloud.run)(plugin.name + "_" + f, params));
                          case 3:
                            response = _context7.sent;
                            if (response.data.success) {
                              _context7.next = 7;
                              break;
                            }
                            error = JSON.stringify(response.data.data, null, 2);
                            throw new Error("Something went wrong\n" + error);
                          case 7:
                            if (!(options.disableTriggers !== true)) {
                              _context7.next = 13;
                              break;
                            }
                            _context7.next = 10;
                            return _regenerator.default.awrap(this.handleTriggers(response.data.result.triggers, response.data.result.data));
                          case 10:
                            triggerReturn = _context7.sent;
                            if (!triggerReturn) {
                              _context7.next = 13;
                              break;
                            }
                            return _context7.abrupt("return", triggerReturn);
                          case 13:
                            return _context7.abrupt("return", response.data.result);
                          case 14:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, null, null, null, Promise);
                  };
                });
              });
              this.Plugins = allPlugins;
            case 12:
            case "end":
              return _context8.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "handleTriggers",
    value: function (triggersArray, payload) {
      var _triggersArray$i2, _triggersArray$i2$opt, _triggersArray$i3, _triggersArray$i3$opt, _triggersArray$i4, _triggersArray$i5, _triggersArray$i5$opt, _triggersArray$i6, _triggersArray$i7, _triggersArray$i8, _triggersArray$i9, _triggersArray$i10, _triggersArray$i11, _triggersArray$i12, _triggersArray$i13, _triggersArray$i14, _triggersArray$i15, _triggersArray$i16, _triggersArray$i17, _triggersArray$i18, _triggersArray$i19;
      var i, _triggersArray$i, response;
      return _regenerator.default.async(function (_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (triggersArray) {
                _context9.next = 2;
                break;
              }
              return _context9.abrupt("return");
            case 2:
              i = 0;
            case 3:
              if (!(i < triggersArray.length)) {
                _context9.next = 47;
                break;
              }
              response = void 0;
              _context9.t0 = (_triggersArray$i = triggersArray[i]) == null ? void 0 : _triggersArray$i.name;
              _context9.next = _context9.t0 === 'openUrl' ? 8 : _context9.t0 === 'web3Transaction' ? 15 : _context9.t0 === 'web3Sign' ? 27 : 43;
              break;
            case 8:
              if (((_triggersArray$i2 = triggersArray[i]) == null ? void 0 : (_triggersArray$i2$opt = _triggersArray$i2.options) == null ? void 0 : _triggersArray$i2$opt.newTab) === true || !((_triggersArray$i3 = triggersArray[i]) != null && (_triggersArray$i3$opt = _triggersArray$i3.options) != null && _triggersArray$i3$opt.hasOwnProperty('newTab'))) response = window.open((_triggersArray$i4 = triggersArray[i]) == null ? void 0 : _triggersArray$i4.data);
              if (((_triggersArray$i5 = triggersArray[i]) == null ? void 0 : (_triggersArray$i5$opt = _triggersArray$i5.options) == null ? void 0 : _triggersArray$i5$opt.newTab) === false) response = window.open((_triggersArray$i6 = triggersArray[i]) == null ? void 0 : _triggersArray$i6.data, '_self');
              if (!(((_triggersArray$i7 = triggersArray[i]) == null ? void 0 : _triggersArray$i7.shouldReturnPayload) === true)) {
                _context9.next = 12;
                break;
              }
              return _context9.abrupt("return", {
                payload: payload,
                response: response
              });
            case 12:
              if (!(((_triggersArray$i8 = triggersArray[i]) == null ? void 0 : _triggersArray$i8.shouldReturnResponse) === true)) {
                _context9.next = 14;
                break;
              }
              return _context9.abrupt("return", response);
            case 14:
              return _context9.abrupt("break", 44);
            case 15:
              if (this.ensureWeb3IsInstalled()) {
                _context9.next = 17;
                break;
              }
              throw new Error(ERROR_WEB3_MISSING);
            case 17:
              if (!(((_triggersArray$i9 = triggersArray[i]) == null ? void 0 : _triggersArray$i9.shouldAwait) === true)) {
                _context9.next = 21;
                break;
              }
              _context9.next = 20;
              return _regenerator.default.awrap(this.web3.eth.sendTransaction((_triggersArray$i10 = triggersArray[i]) == null ? void 0 : _triggersArray$i10.data));
            case 20:
              response = _context9.sent;
            case 21:
              if (((_triggersArray$i11 = triggersArray[i]) == null ? void 0 : _triggersArray$i11.shouldAwait) === false) response = this.web3.eth.sendTransaction((_triggersArray$i12 = triggersArray[i]) == null ? void 0 : _triggersArray$i12.data);
              if (!(((_triggersArray$i13 = triggersArray[i]) == null ? void 0 : _triggersArray$i13.shouldReturnPayload) === true)) {
                _context9.next = 24;
                break;
              }
              return _context9.abrupt("return", {
                payload: payload,
                response: response
              });
            case 24:
              if (!(((_triggersArray$i14 = triggersArray[i]) == null ? void 0 : _triggersArray$i14.shouldReturnResponse) === true)) {
                _context9.next = 26;
                break;
              }
              return _context9.abrupt("return", response);
            case 26:
              return _context9.abrupt("break", 44);
            case 27:
              if (this.ensureWeb3IsInstalled()) {
                _context9.next = 29;
                break;
              }
              throw new Error(ERROR_WEB3_MISSING);
            case 29:
              if (triggersArray[i].message) {
                _context9.next = 31;
                break;
              }
              throw new Error('web3Sign trigger does not have a message to sign');
            case 31:
              if (!(!triggersArray[i].signer || !this.web3.utils.isAddress(triggersArray[i].signer))) {
                _context9.next = 33;
                break;
              }
              throw new Error('web3Sign trigger signer address missing or invalid');
            case 33:
              if (!(((_triggersArray$i15 = triggersArray[i]) == null ? void 0 : _triggersArray$i15.shouldAwait) === true)) {
                _context9.next = 37;
                break;
              }
              _context9.next = 36;
              return _regenerator.default.awrap(this.web3.eth.personal.sign(triggersArray[i].message, triggersArray[i].signer));
            case 36:
              response = _context9.sent;
            case 37:
              if (((_triggersArray$i16 = triggersArray[i]) == null ? void 0 : _triggersArray$i16.shouldAwait) === false) response = this.web3.eth.personal.sign(triggersArray[i].message, triggersArray[i].signer);
              if (!(((_triggersArray$i17 = triggersArray[i]) == null ? void 0 : _triggersArray$i17.shouldReturnPayload) === true)) {
                _context9.next = 40;
                break;
              }
              return _context9.abrupt("return", {
                payload: payload,
                response: response
              });
            case 40:
              if (!(((_triggersArray$i18 = triggersArray[i]) == null ? void 0 : _triggersArray$i18.shouldReturnResponse) === true)) {
                _context9.next = 42;
                break;
              }
              return _context9.abrupt("return", response);
            case 42:
              return _context9.abrupt("break", 44);
            case 43:
              throw new Error("Unknown trigger: \"" + ((_triggersArray$i19 = triggersArray[i]) == null ? void 0 : _triggersArray$i19.name) + "\"");
            case 44:
              i++;
              _context9.next = 3;
              break;
            case 47:
            case "end":
              return _context9.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "getAllERC20",
    value: function () {
      var _ref,
        chain,
        address,
        result,
        _args10 = arguments;
      return _regenerator.default.async(function (_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _ref = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {}, chain = _ref.chain, address = _ref.address;
              _context10.next = 3;
              return _regenerator.default.awrap((0, _Cloud.run)('getAllERC20', {
                chain: chain,
                address: address
              }));
            case 3:
              result = _context10.sent;
              return _context10.abrupt("return", result);
            case 5:
            case "end":
              return _context10.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getERC20",
    value: function () {
      var _ref2,
        chain,
        address,
        symbol,
        tokenAddress,
        result,
        _args11 = arguments;
      return _regenerator.default.async(function (_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _ref2 = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : {}, chain = _ref2.chain, address = _ref2.address, symbol = _ref2.symbol, tokenAddress = _ref2.tokenAddress;
              result = (0, _Cloud.run)('getERC20', {
                chain: chain,
                address: address,
                symbol: symbol,
                tokenAddress: tokenAddress
              });
              return _context11.abrupt("return", result);
            case 3:
            case "end":
              return _context11.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getNFTs",
    value: function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$chain = _ref3.chain,
        chain = _ref3$chain === void 0 ? 'Eth' : _ref3$chain,
        _ref3$address = _ref3.address,
        address = _ref3$address === void 0 ? '' : _ref3$address;
      return (0, _Cloud.run)('getNFTs_old', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "getNFTsCount",
    value: function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref4$chain = _ref4.chain,
        chain = _ref4$chain === void 0 ? 'Eth' : _ref4$chain,
        _ref4$address = _ref4.address,
        address = _ref4$address === void 0 ? '' : _ref4$address;
      return (0, _Cloud.run)('getNFTsCount_old', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "getTransactions",
    value: function () {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref5$chain = _ref5.chain,
        chain = _ref5$chain === void 0 ? 'Eth' : _ref5$chain,
        _ref5$address = _ref5.address,
        address = _ref5$address === void 0 ? '' : _ref5$address,
        _ref5$order = _ref5.order,
        order = _ref5$order === void 0 ? 'desc' : _ref5$order;
      return (0, _Cloud.run)('getTransactions', {
        chain: chain,
        address: address,
        order: order
      });
    }
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref6$chain = _ref6.chain,
        chain = _ref6$chain === void 0 ? 'Eth' : _ref6$chain,
        _ref6$address = _ref6.address,
        address = _ref6$address === void 0 ? '' : _ref6$address;
      return (0, _Cloud.run)('getTransactionsCount', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "transfer",
    value: function () {
      var _ref7,
        _ref7$type,
        type,
        _ref7$receiver,
        receiver,
        _ref7$contractAddress,
        contractAddress,
        contract_address,
        _ref7$amount,
        amount,
        _ref7$tokenId,
        tokenId,
        token_id,
        _ref7$system,
        system,
        _ref7$awaitReceipt,
        awaitReceipt,
        options,
        web3,
        sender,
        transferOperation,
        customToken,
        _args12 = arguments;
      return _regenerator.default.async(function (_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _ref7 = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {}, _ref7$type = _ref7.type, type = _ref7$type === void 0 ? 'native' : _ref7$type, _ref7$receiver = _ref7.receiver, receiver = _ref7$receiver === void 0 ? '' : _ref7$receiver, _ref7$contractAddress = _ref7.contractAddress, contractAddress = _ref7$contractAddress === void 0 ? '' : _ref7$contractAddress, contract_address = _ref7.contract_address, _ref7$amount = _ref7.amount, amount = _ref7$amount === void 0 ? '' : _ref7$amount, _ref7$tokenId = _ref7.tokenId, tokenId = _ref7$tokenId === void 0 ? '' : _ref7$tokenId, token_id = _ref7.token_id, _ref7$system = _ref7.system, system = _ref7$system === void 0 ? 'evm' : _ref7$system, _ref7$awaitReceipt = _ref7.awaitReceipt, awaitReceipt = _ref7$awaitReceipt === void 0 ? true : _ref7$awaitReceipt;
              contractAddress = contractAddress || contract_address;
              tokenId = tokenId || token_id;
              options = {
                receiver: receiver,
                contractAddress: contractAddress,
                amount: amount,
                tokenId: tokenId,
                system: system,
                awaitReceipt: awaitReceipt
              };
              _TransferUtils.default.isSupportedType(type);
              _TransferUtils.default.validateInput(type, options);
              if (this.ensureWeb3IsInstalled()) {
                _context12.next = 8;
                break;
              }
              throw new Error(ERROR_WEB3_MISSING);
            case 8:
              web3 = this.web3;
              _context12.t0 = _regenerator.default;
              _context12.next = 12;
              return _regenerator.default.awrap(web3.eth.getAccounts());
            case 12:
              _context12.t1 = _context12.sent[0];
              _context12.next = 15;
              return _context12.t0.awrap.call(_context12.t0, _context12.t1);
            case 15:
              sender = _context12.sent;
              if (sender) {
                _context12.next = 18;
                break;
              }
              throw new Error('Sender address not found');
            case 18:
              if (type !== 'native') customToken = new web3.eth.Contract(_TransferUtils.default.abi[type], contractAddress);
              _context12.t2 = type;
              _context12.next = _context12.t2 === 'native' ? 22 : _context12.t2 === 'erc20' ? 24 : _context12.t2 === 'erc721' ? 26 : _context12.t2 === 'erc1155' ? 28 : 30;
              break;
            case 22:
              transferOperation = web3.eth.sendTransaction({
                from: sender,
                to: receiver,
                value: amount
              });
              return _context12.abrupt("break", 31);
            case 24:
              transferOperation = customToken.methods.transfer(receiver, amount).send({
                from: sender
              });
              return _context12.abrupt("break", 31);
            case 26:
              transferOperation = customToken.methods.safeTransferFrom(sender, receiver, tokenId).send({
                from: sender
              });
              return _context12.abrupt("break", 31);
            case 28:
              transferOperation = customToken.methods.safeTransferFrom(sender, receiver, tokenId, amount, '0x').send({
                from: sender
              });
              return _context12.abrupt("break", 31);
            case 30:
              throw new Error("Unknown transfer type: \"" + type + "\"");
            case 31:
              if (!awaitReceipt) {
                _context12.next = 33;
                break;
              }
              return _context12.abrupt("return", transferOperation);
            case 33:
              transferOperation.on('transactionHash', function (hash) {
                transferEvents.emit('transactionHash', hash);
              }).on('receipt', function (receipt) {
                transferEvents.emit('receipt', receipt);
              }).on('confirmation', function (confirmationNumber, receipt) {
                transferEvents.emit('confirmation', (confirmationNumber, receipt));
              }).on('error', function (error) {
                transferEvents.emit('error', error);
                throw error;
              });
              return _context12.abrupt("return", transferEvents);
            case 35:
            case "end":
              return _context12.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "executeFunction",
    value: function () {
      var _ref8,
        contractAddress,
        abi,
        functionName,
        msgValue,
        _ref8$params,
        params,
        web3,
        contractOptions,
        functionData,
        stateMutability,
        isReadFunction,
        currentAddress,
        errors,
        _iterator,
        _step,
        input,
        value,
        parsedInputs,
        contract,
        customFunction,
        response,
        _args13 = arguments;
      return _regenerator.default.async(function (_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _ref8 = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {}, contractAddress = _ref8.contractAddress, abi = _ref8.abi, functionName = _ref8.functionName, msgValue = _ref8.msgValue, _ref8$params = _ref8.params, params = _ref8$params === void 0 ? {} : _ref8$params;
              if (this.ensureWeb3IsInstalled()) {
                _context13.next = 3;
                break;
              }
              throw new Error(ERROR_WEB3_MISSING);
            case 3:
              web3 = this.web3;
              contractOptions = {};
              functionData = abi.find(function (x) {
                return x.name === functionName;
              });
              if (functionData) {
                _context13.next = 8;
                break;
              }
              throw new Error('Function does not exist in abi');
            case 8:
              stateMutability = functionData == null ? void 0 : functionData.stateMutability;
              isReadFunction = stateMutability === 'view' || stateMutability === 'pure';
              if (isReadFunction) {
                _context13.next = 22;
                break;
              }
              if (params.from) {
                _context13.next = 22;
                break;
              }
              _context13.t0 = _regenerator.default;
              _context13.next = 15;
              return _regenerator.default.awrap(web3.eth.getAccounts());
            case 15:
              _context13.t1 = _context13.sent[0];
              _context13.next = 18;
              return _context13.t0.awrap.call(_context13.t0, _context13.t1);
            case 18:
              currentAddress = _context13.sent;
              if (currentAddress) {
                _context13.next = 21;
                break;
              }
              throw new Error('From address is required');
            case 21:
              contractOptions.from = currentAddress;
            case 22:
              errors = [];
              for (_iterator = _createForOfIteratorHelperLoose(functionData.inputs); !(_step = _iterator()).done;) {
                input = _step.value;
                value = params[input.name];
                if (!(typeof value !== 'undefined' && value)) {
                  errors.push(input.name + " is required");
                }
              }
              if (!(errors.length > 0)) {
                _context13.next = 26;
                break;
              }
              throw errors;
            case 26:
              parsedInputs = functionData.inputs.map(function (x) {
                return params[x.name];
              });
              contract = new web3.eth.Contract(abi, contractAddress, contractOptions);
              customFunction = contract.methods[functionName];
              if (!isReadFunction) {
                _context13.next = 35;
                break;
              }
              _context13.next = 32;
              return _regenerator.default.awrap(customFunction.apply(void 0, (0, _toConsumableArray2.default)(Object.values(parsedInputs))).call());
            case 32:
              _context13.t2 = _context13.sent;
              _context13.next = 38;
              break;
            case 35:
              _context13.next = 37;
              return _regenerator.default.awrap(customFunction.apply(void 0, (0, _toConsumableArray2.default)(Object.values(parsedInputs))).send(msgValue ? {
                value: msgValue
              } : null));
            case 37:
              _context13.t2 = _context13.sent;
            case 38:
              response = _context13.t2;
              return _context13.abrupt("return", response);
            case 40:
            case "end":
              return _context13.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "getSigningData",
    value: function () {
      return "Moralis Authentication";
    }
  }, {
    key: "on",
    value: function (eventName, cb) {
      var _window = window,
        ethereum = _window.ethereum;
      if (!ethereum || !ethereum.on) {
        console.warn(WARNING);
        return function () {
          console.warn(WARNING);
        };
      }
      ethereum.on(eventName, cb);
      return function () {
        console.warn('UNSUB NOT SUPPORTED');
      };
    }
  }, {
    key: "getChainId",
    value: function () {
      return _regenerator.default.async(function (_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              if (!this.ensureWeb3IsInstalled()) {
                _context14.next = 4;
                break;
              }
              _context14.next = 3;
              return _regenerator.default.awrap(this.web3.eth.net.getId());
            case 3:
              return _context14.abrupt("return", _context14.sent);
            case 4:
              throw new Error(ERROR_WEB3_MISSING);
            case 5:
            case "end":
              return _context14.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "ensureWeb3IsInstalled",
    value: function () {
      return this.web3 ? true : false;
    }
  }, {
    key: "isMetaMaskInstalled",
    value: function () {
      return _regenerator.default.async(function (_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return _regenerator.default.awrap((0, _detectProvider.default)());
            case 2:
              if (!_context15.sent) {
                _context15.next = 6;
                break;
              }
              _context15.t0 = true;
              _context15.next = 7;
              break;
            case 6:
              _context15.t0 = false;
            case 7:
              return _context15.abrupt("return", _context15.t0);
            case 8:
            case "end":
              return _context15.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "switchNetwork",
    value: function (chainId) {
      var currentNetwork;
      return _regenerator.default.async(function (_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              chainId = verifyChainId(chainId);
              _context16.t0 = fromDecimalToHex;
              _context16.next = 4;
              return _regenerator.default.awrap(this.getChainId());
            case 4:
              _context16.t1 = _context16.sent;
              currentNetwork = (0, _context16.t0)(_context16.t1);
              if (!(currentNetwork === chainId)) {
                _context16.next = 8;
                break;
              }
              return _context16.abrupt("return");
            case 8:
              _context16.next = 10;
              return _regenerator.default.awrap(window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: chainId
                }]
              }));
            case 10:
            case "end":
              return _context16.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "addNetwork",
    value: function (chainId, chainName, currencyName, currencySymbol, rpcUrl, blockExplorerUrl) {
      return _regenerator.default.async(function (_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              chainId = verifyChainId(chainId);
              _context17.next = 3;
              return _regenerator.default.awrap(window.ethereum.request({
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
              }));
            case 3:
            case "end":
              return _context17.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);
  return MoralisWeb3;
}();
function fromDecimalToHex(number) {
  if (typeof number !== 'number') throw 'The input provided should be a number';
  return "0x" + number.toString(16);
}
function verifyChainId(chainId) {
  if (typeof chainId === 'number') chainId = fromDecimalToHex(chainId);
  return chainId;
}
MoralisWeb3.onConnect = MoralisWeb3.on.bind(MoralisWeb3, EthereumEvents.CONNECT);
MoralisWeb3.onDisconnect = MoralisWeb3.on.bind(MoralisWeb3, EthereumEvents.DISCONNECT);
MoralisWeb3.onChainChanged = MoralisWeb3.on.bind(MoralisWeb3, EthereumEvents.CHAIN_CHANGED);
MoralisWeb3.onAccountsChanged = MoralisWeb3.on.bind(MoralisWeb3, EthereumEvents.ACCOUNTS_CHANGED);
var _default = MoralisWeb3;
exports.default = _default;