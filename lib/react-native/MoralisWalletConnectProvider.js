var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _web = _interopRequireDefault(require("web3"));
var MORALIS_RPCS = {
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
var MoralisWalletConnectProvider = function () {
  function MoralisWalletConnectProvider() {
    (0, _classCallCheck2.default)(this, MoralisWalletConnectProvider);
  }
  (0, _createClass2.default)(MoralisWalletConnectProvider, [{
    key: "type",
    get: function () {
      return 'WalletConnect';
    }
  }, {
    key: "activate",
    value: function () {
      var options,
        WalletConnectProvider,
        MWeb3,
        _args = arguments;
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              if (!this.provider) {
                try {
                  WalletConnectProvider = require('@walletconnect/web3-provider');
                } catch (error) {}
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
              _context.next = 4;
              return _regenerator.default.awrap(this.provider.enable());
            case 4:
              MWeb3 = typeof _web.default === 'function' ? _web.default : window.Web3;
              this.web3 = new MWeb3(this.provider);
              this.isActivated = true;
              return _context.abrupt("return", this.web3);
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "deactivate",
    value: function () {
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.isActivated = false;
              this.web3 = null;
              if (!this.provider) {
                _context2.next = 10;
                break;
              }
              _context2.prev = 3;
              _context2.next = 6;
              return _regenerator.default.awrap(this.provider.close());
            case 6:
              _context2.next = 10;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](3);
            case 10:
              MoralisWalletConnectProvider.cleanupStaleData();
              this.provider = null;
            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[3, 8]], Promise);
    }
  }], [{
    key: "cleanupStaleData",
    value: function () {
      if (window) {
        try {
          window.localStorage.removeItem('walletconnect');
        } catch (error) {}
      }
    }
  }]);
  return MoralisWalletConnectProvider;
}();
var _default = MoralisWalletConnectProvider;
exports.default = _default;