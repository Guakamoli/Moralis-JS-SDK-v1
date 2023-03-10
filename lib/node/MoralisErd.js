"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ParseUser = _interopRequireDefault(require("./ParseUser"));
var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));
var _ParseObject = _interopRequireDefault(require("./ParseObject"));
var _ParseACL = _interopRequireDefault(require("./ParseACL"));
var _createSigningData = _interopRequireDefault(require("./createSigningData"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global window */

const INIT_ERROR = 'Could not initialise ledger app, make sure Elrond app is open';
function getErdJs() {
  return MoralisErd.getErdJs();
}
class MoralisErd {
  static getErdJs() {
    if (typeof window !== 'undefined' && window.erdjs) return window.erdjs;
    throw new Error('Please add erdjs scripts');
  }
  static gatewayAddress() {
    return 'https://gateway.elrond.com';
  }
  static async hwProxy() {
    if (MoralisErd._proxy) return MoralisErd._proxy;
    const {
      ProxyProvider
    } = getErdJs();
    const proxy = new ProxyProvider(MoralisErd.gatewayAddress());
    MoralisErd._proxy = proxy;
    return MoralisErd._proxy;
  }
  static hwProvider() {
    return MoralisErd._hw;
  }
  static async enable() {
    const {
      HWProvider
    } = getErdJs();
    const proxy = await MoralisErd.hwProxy();
    const hw = new HWProvider(proxy);
    const success = await hw.init();
    if (!success) {
      throw new Error(INIT_ERROR);
    }
    MoralisErd._hw = hw;
    return hw;
  }
  static async authenticate() {
    var _user$get;
    // const proxy = new ProxyProvider();
    // const { Transaction } = getErdJs();
    const hw = await MoralisErd.enable();
    const address = await hw.login();
    // const account = await proxy.getAccount(address);
    const erdAddress = address.toLowerCase();
    const message = MoralisErd.getSigningData();
    const data = await (0, _createSigningData.default)(message);
    const signature = await MoralisErd.sign(data);
    const user = await _ParseUser.default.logInWith('moralisErd', {
      authData: {
        id: erdAddress,
        signature,
        data
      }
    });
    await user.setACL(new _ParseACL.default(user));
    if (!user) throw new Error('Could not get user');
    user.set('erdAccounts', uniq([].concat([erdAddress], (_user$get = user.get('erdAccounts')) !== null && _user$get !== void 0 ? _user$get : [])));
    user.set('erdAddress', erdAddress);
    await user.save();
    return user;
  }
  static async link(account) {
    var _user$get2;
    const user = await _ParseUser.default.current();
    const erdAddress = account.toLowerCase();
    const ErdAddress = _ParseObject.default.extend('_ErdAddress');
    const query = new _ParseQuery.default(ErdAddress);
    const erdAddressRecord = await query.get(erdAddress).catch(() => null);
    if (!erdAddressRecord) {
      const data = MoralisErd.getSigningData();
      const signature = await MoralisErd.sign(data);
      await user.linkWith('moralisErd', {
        authData: {
          id: erdAddress,
          signature,
          data
        }
      });
    }
    user.set('erdAccounts', uniq([erdAddress].concat((_user$get2 = user.get('erdAccounts')) !== null && _user$get2 !== void 0 ? _user$get2 : [])));
    user.set('erdAddress', erdAddress);
    await user.save();
    return user;
  }
  static async unlink(account) {
    var _user$get3;
    const accountsLower = account.toLowerCase();
    const ErdAddress = _ParseObject.default.extend('_EthAddress');
    const query = new _ParseQuery.default(ErdAddress);
    const erdAddressRecord = await query.get(accountsLower);
    await erdAddressRecord.destroy();
    const user = await _ParseUser.default.current();
    const accounts = (_user$get3 = user.get('erdAccounts')) !== null && _user$get3 !== void 0 ? _user$get3 : [];
    const nextAccounts = accounts.filter(v => v !== accountsLower);
    user.set('erdAccounts', nextAccounts);
    user.set('erdAddress', nextAccounts[0]);
    await user._unlinkFrom('moralisErd');
    await user.save();
    return user;
  }
  static async sign(data) {
    return data;
  }
  static getSigningData() {
    return 'Moralis Authentication';
  }
}
function uniq(arr) {
  return arr.filter((v, i) => arr.indexOf(v) === i);
}
var _default = MoralisErd;
exports.default = _default;