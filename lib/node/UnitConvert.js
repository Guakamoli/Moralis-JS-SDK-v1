"use strict";

var _web = _interopRequireDefault(require("web3"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global window */
const MWeb3 = typeof _web.default === 'function' ? _web.default : window.Web3;
class UnitConverter {
  static ETH(value) {
    return MWeb3.utils.toWei(`${value}`, 'ether');
  }
  static Token(value, decimals) {
    return MWeb3.utils.toBN(`0x${(+value * 10 ** decimals).toString(16)}`);
  }
  static FromWei(value, decimals) {
    return +value / Math.pow(10, decimals !== null && decimals !== void 0 ? decimals : 18);
  }
}
module.exports = UnitConverter;