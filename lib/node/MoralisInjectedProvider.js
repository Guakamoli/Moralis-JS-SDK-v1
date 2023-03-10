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

const WARNING = 'Non ethereum enabled browser';
async function getWeb3FromBrowser() {
  var _window$web;
  const MWeb3 = typeof _web.default === 'function' ? _web.default : window.Web3;
  const provider = (_window$web = window.web3) === null || _window$web === void 0 ? void 0 : _window$web.currentProvider;
  const {
    ethereum
  } = window;
  if (provider !== null && provider !== void 0 && provider.isTrust) {
    return new MWeb3(provider);
  }
  if (ethereum) {
    const web3 = new MWeb3(ethereum);
    await ethereum.enable();
    return web3;
  }
  if (provider) {
    return new MWeb3(provider);
  }
  throw new Error(WARNING);
}
class MoralisInjectedProvider {
  get type() {
    return 'injected';
  }
  async activate() {
    this.web3 = await getWeb3FromBrowser();
    this.isActivated = true;
    return this.web3;
  }
  async deactivate() {
    this.isActivated = false;
    this.web3 = null;
  }
}
var _default = MoralisInjectedProvider;
exports.default = _default;