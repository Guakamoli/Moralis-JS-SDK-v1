var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var axios = require('axios');
var Web3Api = function () {
  function Web3Api() {
    (0, _classCallCheck2.default)(this, Web3Api);
  }
  (0, _createClass2.default)(Web3Api, null, [{
    key: "initialize",
    value: function (serverUrl) {
      var Moralis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.serverUrl = serverUrl;
      this.Moralis = Moralis;
    }
  }, {
    key: "apiCall",
    value: function (name, options) {
      var web3, http, response;
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.serverUrl) {
                _context.next = 2;
                break;
              }
              throw new Error('Web3Api not initialized, run Moralis.start() first');
            case 2:
              if (!this.Moralis) {
                _context.next = 12;
                break;
              }
              web3 = this.Moralis.web3;
              if (!(!options.address && web3)) {
                _context.next = 12;
                break;
              }
              _context.t0 = _regenerator.default;
              _context.next = 8;
              return _regenerator.default.awrap(web3.eth.getAccounts());
            case 8:
              _context.t1 = _context.sent[0];
              _context.next = 11;
              return _context.t0.awrap.call(_context.t0, _context.t1);
            case 11:
              options.address = _context.sent;
            case 12:
              _context.prev = 12;
              http = axios.create({
                baseURL: this.serverUrl
              });
              if (!options.chain) options.chain = 'eth';
              _context.next = 17;
              return _regenerator.default.awrap(http.post("/functions/" + name, options, {
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                }
              }));
            case 17:
              response = _context.sent;
              return _context.abrupt("return", response.data.result);
            case 21:
              _context.prev = 21;
              _context.t2 = _context["catch"](12);
              if (!_context.t2.response) {
                _context.next = 25;
                break;
              }
              throw _context.t2.response.data;
            case 25:
              throw _context.t2;
            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[12, 21]], Promise);
    }
  }]);
  return Web3Api;
}();
Web3Api.native = {
  getBlock: function () {
    var options,
      _args2 = arguments;
    return _regenerator.default.async(function (_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
            return _context2.abrupt("return", Web3Api.apiCall('getBlock', options));
          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getDateToBlock: function () {
    var options,
      _args3 = arguments;
    return _regenerator.default.async(function (_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
            return _context3.abrupt("return", Web3Api.apiCall('getDateToBlock', options));
          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getLogsByAddress: function () {
    var options,
      _args4 = arguments;
    return _regenerator.default.async(function (_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            options = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
            return _context4.abrupt("return", Web3Api.apiCall('getLogsByAddress', options));
          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getNFTTransfersByBlock: function () {
    var options,
      _args5 = arguments;
    return _regenerator.default.async(function (_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            options = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
            return _context5.abrupt("return", Web3Api.apiCall('getNFTTransfersByBlock', options));
          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getTransaction: function () {
    var options,
      _args6 = arguments;
    return _regenerator.default.async(function (_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
            return _context6.abrupt("return", Web3Api.apiCall('getTransaction', options));
          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getContractEvents: function () {
    var options,
      _args7 = arguments;
    return _regenerator.default.async(function (_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            options = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
            return _context7.abrupt("return", Web3Api.apiCall('getContractEvents', options));
          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, null, Promise);
  },
  runContractFunction: function () {
    var options,
      _args8 = arguments;
    return _regenerator.default.async(function (_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            options = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
            return _context8.abrupt("return", Web3Api.apiCall('runContractFunction', options));
          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, null, Promise);
  }
};
Web3Api.account = {
  getTransactions: function () {
    var options,
      _args9 = arguments;
    return _regenerator.default.async(function (_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            options = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {};
            return _context9.abrupt("return", Web3Api.apiCall('getTransactions', options));
          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getTransactionsVerbose: function () {
    var options,
      _args10 = arguments;
    return _regenerator.default.async(function (_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            options = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {};
            return _context10.abrupt("return", Web3Api.apiCall('getTransactionsVerbose', options));
          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getNativeBalance: function () {
    var options,
      _args11 = arguments;
    return _regenerator.default.async(function (_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            options = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : {};
            return _context11.abrupt("return", Web3Api.apiCall('getNativeBalance', options));
          case 2:
          case "end":
            return _context11.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getTokenBalances: function () {
    var options,
      _args12 = arguments;
    return _regenerator.default.async(function (_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            options = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {};
            return _context12.abrupt("return", Web3Api.apiCall('getTokenBalances', options));
          case 2:
          case "end":
            return _context12.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getTokenTransfers: function () {
    var options,
      _args13 = arguments;
    return _regenerator.default.async(function (_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            options = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {};
            return _context13.abrupt("return", Web3Api.apiCall('getTokenTransfers', options));
          case 2:
          case "end":
            return _context13.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getNFTs: function () {
    var options,
      _args14 = arguments;
    return _regenerator.default.async(function (_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            options = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {};
            return _context14.abrupt("return", Web3Api.apiCall('getNFTs', options));
          case 2:
          case "end":
            return _context14.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getNFTTransfers: function () {
    var options,
      _args15 = arguments;
    return _regenerator.default.async(function (_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            options = _args15.length > 0 && _args15[0] !== undefined ? _args15[0] : {};
            return _context15.abrupt("return", Web3Api.apiCall('getNFTTransfers', options));
          case 2:
          case "end":
            return _context15.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getWalletNFTCollections: function () {
    var options,
      _args16 = arguments;
    return _regenerator.default.async(function (_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            options = _args16.length > 0 && _args16[0] !== undefined ? _args16[0] : {};
            return _context16.abrupt("return", Web3Api.apiCall('getWalletNFTCollections', options));
          case 2:
          case "end":
            return _context16.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getNFTsForContract: function () {
    var options,
      _args17 = arguments;
    return _regenerator.default.async(function (_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            options = _args17.length > 0 && _args17[0] !== undefined ? _args17[0] : {};
            return _context17.abrupt("return", Web3Api.apiCall('getNFTsForContract', options));
          case 2:
          case "end":
            return _context17.stop();
        }
      }
    }, null, null, null, Promise);
  }
};
Web3Api.token = {
  getTokenMetadata: function () {
    var options,
      _args18 = arguments;
    return _regenerator.default.async(function (_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            options = _args18.length > 0 && _args18[0] !== undefined ? _args18[0] : {};
            return _context18.abrupt("return", Web3Api.apiCall('getTokenMetadata', options));
          case 2:
          case "end":
            return _context18.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getNFTTrades: function () {
    var options,
      _args19 = arguments;
    return _regenerator.default.async(function (_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            options = _args19.length > 0 && _args19[0] !== undefined ? _args19[0] : {};
            return _context19.abrupt("return", Web3Api.apiCall('getNFTTrades', options));
          case 2:
          case "end":
            return _context19.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getNFTLowestPrice: function () {
    var options,
      _args20 = arguments;
    return _regenerator.default.async(function (_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            options = _args20.length > 0 && _args20[0] !== undefined ? _args20[0] : {};
            return _context20.abrupt("return", Web3Api.apiCall('getNFTLowestPrice', options));
          case 2:
          case "end":
            return _context20.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getTokenMetadataBySymbol: function () {
    var options,
      _args21 = arguments;
    return _regenerator.default.async(function (_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            options = _args21.length > 0 && _args21[0] !== undefined ? _args21[0] : {};
            return _context21.abrupt("return", Web3Api.apiCall('getTokenMetadataBySymbol', options));
          case 2:
          case "end":
            return _context21.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getTokenPrice: function () {
    var options,
      _args22 = arguments;
    return _regenerator.default.async(function (_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            options = _args22.length > 0 && _args22[0] !== undefined ? _args22[0] : {};
            return _context22.abrupt("return", Web3Api.apiCall('getTokenPrice', options));
          case 2:
          case "end":
            return _context22.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getTokenAddressTransfers: function () {
    var options,
      _args23 = arguments;
    return _regenerator.default.async(function (_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            options = _args23.length > 0 && _args23[0] !== undefined ? _args23[0] : {};
            return _context23.abrupt("return", Web3Api.apiCall('getTokenAddressTransfers', options));
          case 2:
          case "end":
            return _context23.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getTokenAllowance: function () {
    var options,
      _args24 = arguments;
    return _regenerator.default.async(function (_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            options = _args24.length > 0 && _args24[0] !== undefined ? _args24[0] : {};
            return _context24.abrupt("return", Web3Api.apiCall('getTokenAllowance', options));
          case 2:
          case "end":
            return _context24.stop();
        }
      }
    }, null, null, null, Promise);
  },
  searchNFTs: function () {
    var options,
      _args25 = arguments;
    return _regenerator.default.async(function (_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            options = _args25.length > 0 && _args25[0] !== undefined ? _args25[0] : {};
            return _context25.abrupt("return", Web3Api.apiCall('searchNFTs', options));
          case 2:
          case "end":
            return _context25.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getNftTransfersFromToBlock: function () {
    var options,
      _args26 = arguments;
    return _regenerator.default.async(function (_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            options = _args26.length > 0 && _args26[0] !== undefined ? _args26[0] : {};
            return _context26.abrupt("return", Web3Api.apiCall('getNftTransfersFromToBlock', options));
          case 2:
          case "end":
            return _context26.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getAllTokenIds: function () {
    var options,
      _args27 = arguments;
    return _regenerator.default.async(function (_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            options = _args27.length > 0 && _args27[0] !== undefined ? _args27[0] : {};
            return _context27.abrupt("return", Web3Api.apiCall('getAllTokenIds', options));
          case 2:
          case "end":
            return _context27.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getMultipleNFTs: function () {
    var options,
      _args28 = arguments;
    return _regenerator.default.async(function (_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            options = _args28.length > 0 && _args28[0] !== undefined ? _args28[0] : {};
            return _context28.abrupt("return", Web3Api.apiCall('getMultipleNFTs', options));
          case 2:
          case "end":
            return _context28.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getContractNFTTransfers: function () {
    var options,
      _args29 = arguments;
    return _regenerator.default.async(function (_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            options = _args29.length > 0 && _args29[0] !== undefined ? _args29[0] : {};
            return _context29.abrupt("return", Web3Api.apiCall('getContractNFTTransfers', options));
          case 2:
          case "end":
            return _context29.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getNFTOwners: function () {
    var options,
      _args30 = arguments;
    return _regenerator.default.async(function (_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            options = _args30.length > 0 && _args30[0] !== undefined ? _args30[0] : {};
            return _context30.abrupt("return", Web3Api.apiCall('getNFTOwners', options));
          case 2:
          case "end":
            return _context30.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getNFTMetadata: function () {
    var options,
      _args31 = arguments;
    return _regenerator.default.async(function (_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            options = _args31.length > 0 && _args31[0] !== undefined ? _args31[0] : {};
            return _context31.abrupt("return", Web3Api.apiCall('getNFTMetadata', options));
          case 2:
          case "end":
            return _context31.stop();
        }
      }
    }, null, null, null, Promise);
  },
  reSyncMetadata: function () {
    var options,
      _args32 = arguments;
    return _regenerator.default.async(function (_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            options = _args32.length > 0 && _args32[0] !== undefined ? _args32[0] : {};
            return _context32.abrupt("return", Web3Api.apiCall('reSyncMetadata', options));
          case 2:
          case "end":
            return _context32.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getTokenIdMetadata: function () {
    var options,
      _args33 = arguments;
    return _regenerator.default.async(function (_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            options = _args33.length > 0 && _args33[0] !== undefined ? _args33[0] : {};
            return _context33.abrupt("return", Web3Api.apiCall('getTokenIdMetadata', options));
          case 2:
          case "end":
            return _context33.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getTokenIdOwners: function () {
    var options,
      _args34 = arguments;
    return _regenerator.default.async(function (_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            options = _args34.length > 0 && _args34[0] !== undefined ? _args34[0] : {};
            return _context34.abrupt("return", Web3Api.apiCall('getTokenIdOwners', options));
          case 2:
          case "end":
            return _context34.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getWalletTokenIdTransfers: function () {
    var options,
      _args35 = arguments;
    return _regenerator.default.async(function (_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            options = _args35.length > 0 && _args35[0] !== undefined ? _args35[0] : {};
            return _context35.abrupt("return", Web3Api.apiCall('getWalletTokenIdTransfers', options));
          case 2:
          case "end":
            return _context35.stop();
        }
      }
    }, null, null, null, Promise);
  }
};
Web3Api.contract = {
  syncNFTContract: function () {
    var options,
      _args36 = arguments;
    return _regenerator.default.async(function (_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            options = _args36.length > 0 && _args36[0] !== undefined ? _args36[0] : {};
            return _context36.abrupt("return", Web3Api.apiCall('syncNFTContract', options));
          case 2:
          case "end":
            return _context36.stop();
        }
      }
    }, null, null, null, Promise);
  }
};
Web3Api.resolve = {
  resolveDomain: function () {
    var options,
      _args37 = arguments;
    return _regenerator.default.async(function (_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            options = _args37.length > 0 && _args37[0] !== undefined ? _args37[0] : {};
            return _context37.abrupt("return", Web3Api.apiCall('resolveDomain', options));
          case 2:
          case "end":
            return _context37.stop();
        }
      }
    }, null, null, null, Promise);
  },
  resolveAddress: function () {
    var options,
      _args38 = arguments;
    return _regenerator.default.async(function (_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            options = _args38.length > 0 && _args38[0] !== undefined ? _args38[0] : {};
            return _context38.abrupt("return", Web3Api.apiCall('resolveAddress', options));
          case 2:
          case "end":
            return _context38.stop();
        }
      }
    }, null, null, null, Promise);
  }
};
Web3Api.defi = {
  getPairReserves: function () {
    var options,
      _args39 = arguments;
    return _regenerator.default.async(function (_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            options = _args39.length > 0 && _args39[0] !== undefined ? _args39[0] : {};
            return _context39.abrupt("return", Web3Api.apiCall('getPairReserves', options));
          case 2:
          case "end":
            return _context39.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getPairAddress: function () {
    var options,
      _args40 = arguments;
    return _regenerator.default.async(function (_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            options = _args40.length > 0 && _args40[0] !== undefined ? _args40[0] : {};
            return _context40.abrupt("return", Web3Api.apiCall('getPairAddress', options));
          case 2:
          case "end":
            return _context40.stop();
        }
      }
    }, null, null, null, Promise);
  }
};
Web3Api.storage = {
  uploadFolder: function () {
    var options,
      _args41 = arguments;
    return _regenerator.default.async(function (_context41) {
      while (1) {
        switch (_context41.prev = _context41.next) {
          case 0:
            options = _args41.length > 0 && _args41[0] !== undefined ? _args41[0] : {};
            return _context41.abrupt("return", Web3Api.apiCall('uploadFolder', options));
          case 2:
          case "end":
            return _context41.stop();
        }
      }
    }, null, null, null, Promise);
  }
};
Web3Api.info = {
  web3ApiVersion: function () {
    var options,
      _args42 = arguments;
    return _regenerator.default.async(function (_context42) {
      while (1) {
        switch (_context42.prev = _context42.next) {
          case 0:
            options = _args42.length > 0 && _args42[0] !== undefined ? _args42[0] : {};
            return _context42.abrupt("return", Web3Api.apiCall('web3ApiVersion', options));
          case 2:
          case "end":
            return _context42.stop();
        }
      }
    }, null, null, null, Promise);
  },
  endpointWeights: function () {
    var options,
      _args43 = arguments;
    return _regenerator.default.async(function (_context43) {
      while (1) {
        switch (_context43.prev = _context43.next) {
          case 0:
            options = _args43.length > 0 && _args43[0] !== undefined ? _args43[0] : {};
            return _context43.abrupt("return", Web3Api.apiCall('endpointWeights', options));
          case 2:
          case "end":
            return _context43.stop();
        }
      }
    }, null, null, null, Promise);
  }
};
var _default = Web3Api;
exports.default = _default;