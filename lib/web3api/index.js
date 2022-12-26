"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");
var _reverseInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reverse");
var _Promise = require("@babel/runtime-corejs3/core-js-stable/promise");
var _Object$setPrototypeOf = require("@babel/runtime-corejs3/core-js-stable/object/set-prototype-of");
var _typeof = require("@babel/runtime-corejs3/helpers/typeof");
var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");
var _Object$getPrototypeOf = require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of");
var _Object$create = require("@babel/runtime-corejs3/core-js-stable/object/create");
var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = _Object$defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof _Symbol ? _Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return _Object$defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = _Object$create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = _Object$getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    var _context44;
    _forEachInstanceProperty(_context44 = ["next", "throw", "return"]).call(_context44, function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], _forEachInstanceProperty(tryLocsList).call(tryLocsList, pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return _Object$setPrototypeOf ? _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = _Object$create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = _Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return _reverseInstanceProperty(keys).call(keys), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      var _context45;
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, _forEachInstanceProperty(_context45 = this.tryEntries).call(_context45, resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+_sliceInstanceProperty(name).call(name, 1)) && (this[name] = undefined);
      }
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
/**
 * Automatically generated code, via genWeb3API.js
 * Do not modify manually
 */
var axios = require('axios');
var Web3Api = /*#__PURE__*/function () {
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
    value: function () {
      var _apiCall = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name, options) {
        var web3, http, response;
        return _regeneratorRuntime().wrap(function (_context) {
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
                  _context.next = 10;
                  break;
                }
                web3 = this.Moralis.web3;
                if (!(!options.address && web3)) {
                  _context.next = 10;
                  break;
                }
                _context.next = 7;
                return web3.eth.getAccounts();
              case 7:
                _context.next = 9;
                return _context.sent[0];
              case 9:
                options.address = _context.sent;
              case 10:
                _context.prev = 10;
                http = axios.create({
                  baseURL: this.serverUrl
                });
                if (!options.chain) options.chain = 'eth';
                _context.next = 15;
                return http.post("/functions/".concat(name), options, {
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  }
                });
              case 15:
                response = _context.sent;
                return _context.abrupt("return", response.data.result);
              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](10);
                if (!_context.t0.response) {
                  _context.next = 23;
                  break;
                }
                throw _context.t0.response.data;
              case 23:
                throw _context.t0;
              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[10, 19]]);
      }));
      return function () {
        return _apiCall.apply(this, arguments);
      };
    }()
  }]);
  return Web3Api;
}();
(0, _defineProperty2.default)(Web3Api, "native", {
  getBlock: function () {
    var _getBlock = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var options,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function (_context2) {
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
      }, _callee2);
    }));
    return function () {
      return _getBlock.apply(this, arguments);
    };
  }(),
  getDateToBlock: function () {
    var _getDateToBlock = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var options,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function (_context3) {
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
      }, _callee3);
    }));
    return function () {
      return _getDateToBlock.apply(this, arguments);
    };
  }(),
  getLogsByAddress: function () {
    var _getLogsByAddress = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var options,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function (_context4) {
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
      }, _callee4);
    }));
    return function () {
      return _getLogsByAddress.apply(this, arguments);
    };
  }(),
  getNFTTransfersByBlock: function () {
    var _getNFTTransfersByBlock = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var options,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function (_context5) {
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
      }, _callee5);
    }));
    return function () {
      return _getNFTTransfersByBlock.apply(this, arguments);
    };
  }(),
  getTransaction: function () {
    var _getTransaction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var options,
        _args6 = arguments;
      return _regeneratorRuntime().wrap(function (_context6) {
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
      }, _callee6);
    }));
    return function () {
      return _getTransaction.apply(this, arguments);
    };
  }(),
  getContractEvents: function () {
    var _getContractEvents = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var options,
        _args7 = arguments;
      return _regeneratorRuntime().wrap(function (_context7) {
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
      }, _callee7);
    }));
    return function () {
      return _getContractEvents.apply(this, arguments);
    };
  }(),
  runContractFunction: function () {
    var _runContractFunction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var options,
        _args8 = arguments;
      return _regeneratorRuntime().wrap(function (_context8) {
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
      }, _callee8);
    }));
    return function () {
      return _runContractFunction.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "account", {
  getTransactions: function () {
    var _getTransactions = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var options,
        _args9 = arguments;
      return _regeneratorRuntime().wrap(function (_context9) {
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
      }, _callee9);
    }));
    return function () {
      return _getTransactions.apply(this, arguments);
    };
  }(),
  getTransactionsVerbose: function () {
    var _getTransactionsVerbose = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var options,
        _args10 = arguments;
      return _regeneratorRuntime().wrap(function (_context10) {
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
      }, _callee10);
    }));
    return function () {
      return _getTransactionsVerbose.apply(this, arguments);
    };
  }(),
  getNativeBalance: function () {
    var _getNativeBalance = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var options,
        _args11 = arguments;
      return _regeneratorRuntime().wrap(function (_context11) {
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
      }, _callee11);
    }));
    return function () {
      return _getNativeBalance.apply(this, arguments);
    };
  }(),
  getTokenBalances: function () {
    var _getTokenBalances = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var options,
        _args12 = arguments;
      return _regeneratorRuntime().wrap(function (_context12) {
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
      }, _callee12);
    }));
    return function () {
      return _getTokenBalances.apply(this, arguments);
    };
  }(),
  getTokenTransfers: function () {
    var _getTokenTransfers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var options,
        _args13 = arguments;
      return _regeneratorRuntime().wrap(function (_context13) {
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
      }, _callee13);
    }));
    return function () {
      return _getTokenTransfers.apply(this, arguments);
    };
  }(),
  getNFTs: function () {
    var _getNFTs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var options,
        _args14 = arguments;
      return _regeneratorRuntime().wrap(function (_context14) {
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
      }, _callee14);
    }));
    return function () {
      return _getNFTs.apply(this, arguments);
    };
  }(),
  getNFTTransfers: function () {
    var _getNFTTransfers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var options,
        _args15 = arguments;
      return _regeneratorRuntime().wrap(function (_context15) {
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
      }, _callee15);
    }));
    return function () {
      return _getNFTTransfers.apply(this, arguments);
    };
  }(),
  getWalletNFTCollections: function () {
    var _getWalletNFTCollections = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var options,
        _args16 = arguments;
      return _regeneratorRuntime().wrap(function (_context16) {
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
      }, _callee16);
    }));
    return function () {
      return _getWalletNFTCollections.apply(this, arguments);
    };
  }(),
  getNFTsForContract: function () {
    var _getNFTsForContract = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      var options,
        _args17 = arguments;
      return _regeneratorRuntime().wrap(function (_context17) {
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
      }, _callee17);
    }));
    return function () {
      return _getNFTsForContract.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "token", {
  getTokenMetadata: function () {
    var _getTokenMetadata = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
      var options,
        _args18 = arguments;
      return _regeneratorRuntime().wrap(function (_context18) {
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
      }, _callee18);
    }));
    return function () {
      return _getTokenMetadata.apply(this, arguments);
    };
  }(),
  getNFTTrades: function () {
    var _getNFTTrades = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      var options,
        _args19 = arguments;
      return _regeneratorRuntime().wrap(function (_context19) {
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
      }, _callee19);
    }));
    return function () {
      return _getNFTTrades.apply(this, arguments);
    };
  }(),
  getNFTLowestPrice: function () {
    var _getNFTLowestPrice = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var options,
        _args20 = arguments;
      return _regeneratorRuntime().wrap(function (_context20) {
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
      }, _callee20);
    }));
    return function () {
      return _getNFTLowestPrice.apply(this, arguments);
    };
  }(),
  getTokenMetadataBySymbol: function () {
    var _getTokenMetadataBySymbol = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      var options,
        _args21 = arguments;
      return _regeneratorRuntime().wrap(function (_context21) {
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
      }, _callee21);
    }));
    return function () {
      return _getTokenMetadataBySymbol.apply(this, arguments);
    };
  }(),
  getTokenPrice: function () {
    var _getTokenPrice = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
      var options,
        _args22 = arguments;
      return _regeneratorRuntime().wrap(function (_context22) {
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
      }, _callee22);
    }));
    return function () {
      return _getTokenPrice.apply(this, arguments);
    };
  }(),
  getTokenAddressTransfers: function () {
    var _getTokenAddressTransfers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
      var options,
        _args23 = arguments;
      return _regeneratorRuntime().wrap(function (_context23) {
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
      }, _callee23);
    }));
    return function () {
      return _getTokenAddressTransfers.apply(this, arguments);
    };
  }(),
  getTokenAllowance: function () {
    var _getTokenAllowance = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
      var options,
        _args24 = arguments;
      return _regeneratorRuntime().wrap(function (_context24) {
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
      }, _callee24);
    }));
    return function () {
      return _getTokenAllowance.apply(this, arguments);
    };
  }(),
  searchNFTs: function () {
    var _searchNFTs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
      var options,
        _args25 = arguments;
      return _regeneratorRuntime().wrap(function (_context25) {
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
      }, _callee25);
    }));
    return function () {
      return _searchNFTs.apply(this, arguments);
    };
  }(),
  getNftTransfersFromToBlock: function () {
    var _getNftTransfersFromToBlock = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
      var options,
        _args26 = arguments;
      return _regeneratorRuntime().wrap(function (_context26) {
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
      }, _callee26);
    }));
    return function () {
      return _getNftTransfersFromToBlock.apply(this, arguments);
    };
  }(),
  getAllTokenIds: function () {
    var _getAllTokenIds = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
      var options,
        _args27 = arguments;
      return _regeneratorRuntime().wrap(function (_context27) {
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
      }, _callee27);
    }));
    return function () {
      return _getAllTokenIds.apply(this, arguments);
    };
  }(),
  getMultipleNFTs: function () {
    var _getMultipleNFTs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
      var options,
        _args28 = arguments;
      return _regeneratorRuntime().wrap(function (_context28) {
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
      }, _callee28);
    }));
    return function () {
      return _getMultipleNFTs.apply(this, arguments);
    };
  }(),
  getContractNFTTransfers: function () {
    var _getContractNFTTransfers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
      var options,
        _args29 = arguments;
      return _regeneratorRuntime().wrap(function (_context29) {
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
      }, _callee29);
    }));
    return function () {
      return _getContractNFTTransfers.apply(this, arguments);
    };
  }(),
  getNFTOwners: function () {
    var _getNFTOwners = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
      var options,
        _args30 = arguments;
      return _regeneratorRuntime().wrap(function (_context30) {
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
      }, _callee30);
    }));
    return function () {
      return _getNFTOwners.apply(this, arguments);
    };
  }(),
  getNFTMetadata: function () {
    var _getNFTMetadata = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
      var options,
        _args31 = arguments;
      return _regeneratorRuntime().wrap(function (_context31) {
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
      }, _callee31);
    }));
    return function () {
      return _getNFTMetadata.apply(this, arguments);
    };
  }(),
  reSyncMetadata: function () {
    var _reSyncMetadata = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
      var options,
        _args32 = arguments;
      return _regeneratorRuntime().wrap(function (_context32) {
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
      }, _callee32);
    }));
    return function () {
      return _reSyncMetadata.apply(this, arguments);
    };
  }(),
  getTokenIdMetadata: function () {
    var _getTokenIdMetadata = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
      var options,
        _args33 = arguments;
      return _regeneratorRuntime().wrap(function (_context33) {
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
      }, _callee33);
    }));
    return function () {
      return _getTokenIdMetadata.apply(this, arguments);
    };
  }(),
  getTokenIdOwners: function () {
    var _getTokenIdOwners = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
      var options,
        _args34 = arguments;
      return _regeneratorRuntime().wrap(function (_context34) {
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
      }, _callee34);
    }));
    return function () {
      return _getTokenIdOwners.apply(this, arguments);
    };
  }(),
  getWalletTokenIdTransfers: function () {
    var _getWalletTokenIdTransfers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
      var options,
        _args35 = arguments;
      return _regeneratorRuntime().wrap(function (_context35) {
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
      }, _callee35);
    }));
    return function () {
      return _getWalletTokenIdTransfers.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "contract", {
  syncNFTContract: function () {
    var _syncNFTContract = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
      var options,
        _args36 = arguments;
      return _regeneratorRuntime().wrap(function (_context36) {
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
      }, _callee36);
    }));
    return function () {
      return _syncNFTContract.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "resolve", {
  resolveDomain: function () {
    var _resolveDomain = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
      var options,
        _args37 = arguments;
      return _regeneratorRuntime().wrap(function (_context37) {
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
      }, _callee37);
    }));
    return function () {
      return _resolveDomain.apply(this, arguments);
    };
  }(),
  resolveAddress: function () {
    var _resolveAddress = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
      var options,
        _args38 = arguments;
      return _regeneratorRuntime().wrap(function (_context38) {
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
      }, _callee38);
    }));
    return function () {
      return _resolveAddress.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "defi", {
  getPairReserves: function () {
    var _getPairReserves = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
      var options,
        _args39 = arguments;
      return _regeneratorRuntime().wrap(function (_context39) {
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
      }, _callee39);
    }));
    return function () {
      return _getPairReserves.apply(this, arguments);
    };
  }(),
  getPairAddress: function () {
    var _getPairAddress = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
      var options,
        _args40 = arguments;
      return _regeneratorRuntime().wrap(function (_context40) {
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
      }, _callee40);
    }));
    return function () {
      return _getPairAddress.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "storage", {
  uploadFolder: function () {
    var _uploadFolder = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
      var options,
        _args41 = arguments;
      return _regeneratorRuntime().wrap(function (_context41) {
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
      }, _callee41);
    }));
    return function () {
      return _uploadFolder.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "info", {
  web3ApiVersion: function () {
    var _web3ApiVersion = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
      var options,
        _args42 = arguments;
      return _regeneratorRuntime().wrap(function (_context42) {
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
      }, _callee42);
    }));
    return function () {
      return _web3ApiVersion.apply(this, arguments);
    };
  }(),
  endpointWeights: function () {
    var _endpointWeights = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
      var options,
        _args43 = arguments;
      return _regeneratorRuntime().wrap(function (_context43) {
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
      }, _callee43);
    }));
    return function () {
      return _endpointWeights.apply(this, arguments);
    };
  }()
});
var _default = Web3Api;
exports.default = _default;