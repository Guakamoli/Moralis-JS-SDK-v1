var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _web = _interopRequireDefault(require("web3"));
var MWeb3 = typeof _web.default === 'function' ? _web.default : window.Web3;
var UnitConverter = function () {
  function UnitConverter() {
    (0, _classCallCheck2.default)(this, UnitConverter);
  }
  (0, _createClass2.default)(UnitConverter, null, [{
    key: "ETH",
    value: function (value) {
      return MWeb3.utils.toWei("" + value, 'ether');
    }
  }, {
    key: "Token",
    value: function (value, decimals) {
      return MWeb3.utils.toBN("0x" + (+value * Math.pow(10, decimals)).toString(16));
    }
  }, {
    key: "FromWei",
    value: function (value, decimals) {
      return +value / Math.pow(10, decimals != null ? decimals : 18);
    }
  }]);
  return UnitConverter;
}();
module.exports = UnitConverter;