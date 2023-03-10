var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _web = _interopRequireDefault(require("web3"));
var WARNING = 'Non ethereum enabled browser';
function getWeb3FromBrowser() {
  var _window$web;
  var MWeb3, provider, _window, ethereum, web3;
  return _regenerator.default.async(function (_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          MWeb3 = typeof _web.default === 'function' ? _web.default : window.Web3;
          provider = (_window$web = window.web3) == null ? void 0 : _window$web.currentProvider;
          _window = window, ethereum = _window.ethereum;
          if (!(provider != null && provider.isTrust)) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", new MWeb3(provider));
        case 5:
          if (!ethereum) {
            _context.next = 10;
            break;
          }
          web3 = new MWeb3(ethereum);
          _context.next = 9;
          return _regenerator.default.awrap(ethereum.enable());
        case 9:
          return _context.abrupt("return", web3);
        case 10:
          if (!provider) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", new MWeb3(provider));
        case 12:
          throw new Error(WARNING);
        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}
var MoralisInjectedProvider = function () {
  function MoralisInjectedProvider() {
    (0, _classCallCheck2.default)(this, MoralisInjectedProvider);
  }
  (0, _createClass2.default)(MoralisInjectedProvider, [{
    key: "type",
    get: function () {
      return 'injected';
    }
  }, {
    key: "activate",
    value: function () {
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _regenerator.default.awrap(getWeb3FromBrowser());
            case 2:
              this.web3 = _context2.sent;
              this.isActivated = true;
              return _context2.abrupt("return", this.web3);
            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "deactivate",
    value: function () {
      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.isActivated = false;
              this.web3 = null;
            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }]);
  return MoralisInjectedProvider;
}();
var _default = MoralisInjectedProvider;
exports.default = _default;