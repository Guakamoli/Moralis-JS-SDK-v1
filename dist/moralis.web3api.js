/**
 * Parse JavaScript SDK v0.0.99
 *
 * The source tree of this library can be found at
 *   https://github.com/ParsePlatform/Parse-SDK-JS
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Web3Api = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
"use strict";

var _interopRequireDefault = _dereq_("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _sliceInstanceProperty = _dereq_("@babel/runtime-corejs3/core-js-stable/instance/slice");
var _reverseInstanceProperty = _dereq_("@babel/runtime-corejs3/core-js-stable/instance/reverse");
var _Promise = _dereq_("@babel/runtime-corejs3/core-js-stable/promise");
var _Object$setPrototypeOf = _dereq_("@babel/runtime-corejs3/core-js-stable/object/set-prototype-of");
var _typeof = _dereq_("@babel/runtime-corejs3/helpers/typeof");
var _forEachInstanceProperty = _dereq_("@babel/runtime-corejs3/core-js-stable/instance/for-each");
var _Object$getPrototypeOf = _dereq_("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of");
var _Object$create = _dereq_("@babel/runtime-corejs3/core-js-stable/object/create");
var _Symbol = _dereq_("@babel/runtime-corejs3/core-js-stable/symbol");
var _Object$defineProperty = _dereq_("@babel/runtime-corejs3/core-js-stable/object/define-property");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _asyncToGenerator2 = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/helpers/defineProperty"));
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
var axios = _dereq_('axios');
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
},{"@babel/runtime-corejs3/core-js-stable/instance/for-each":2,"@babel/runtime-corejs3/core-js-stable/instance/reverse":3,"@babel/runtime-corejs3/core-js-stable/instance/slice":4,"@babel/runtime-corejs3/core-js-stable/object/create":5,"@babel/runtime-corejs3/core-js-stable/object/define-property":6,"@babel/runtime-corejs3/core-js-stable/object/get-prototype-of":7,"@babel/runtime-corejs3/core-js-stable/object/set-prototype-of":8,"@babel/runtime-corejs3/core-js-stable/promise":9,"@babel/runtime-corejs3/core-js-stable/symbol":10,"@babel/runtime-corejs3/helpers/asyncToGenerator":15,"@babel/runtime-corejs3/helpers/classCallCheck":16,"@babel/runtime-corejs3/helpers/createClass":17,"@babel/runtime-corejs3/helpers/defineProperty":18,"@babel/runtime-corejs3/helpers/interopRequireDefault":19,"@babel/runtime-corejs3/helpers/typeof":20,"axios":21}],2:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/instance/for-each");
},{"core-js-pure/stable/instance/for-each":274}],3:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/instance/reverse");
},{"core-js-pure/stable/instance/reverse":275}],4:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/instance/slice");
},{"core-js-pure/stable/instance/slice":276}],5:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/object/create");
},{"core-js-pure/stable/object/create":277}],6:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/object/define-property");
},{"core-js-pure/stable/object/define-property":278}],7:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/object/get-prototype-of");
},{"core-js-pure/stable/object/get-prototype-of":279}],8:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/object/set-prototype-of");
},{"core-js-pure/stable/object/set-prototype-of":280}],9:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/promise");
},{"core-js-pure/stable/promise":281}],10:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/symbol");
},{"core-js-pure/stable/symbol":282}],11:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/features/object/define-property");
},{"core-js-pure/features/object/define-property":67}],12:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/features/promise");
},{"core-js-pure/features/promise":68}],13:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/features/symbol");
},{"core-js-pure/features/symbol":69}],14:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/features/symbol/iterator");
},{"core-js-pure/features/symbol/iterator":70}],15:[function(_dereq_,module,exports){
var _Promise = _dereq_("@babel/runtime-corejs3/core-js/promise");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{"@babel/runtime-corejs3/core-js/promise":12}],16:[function(_dereq_,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],17:[function(_dereq_,module,exports){
var _Object$defineProperty = _dereq_("@babel/runtime-corejs3/core-js/object/define-property");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{"@babel/runtime-corejs3/core-js/object/define-property":11}],18:[function(_dereq_,module,exports){
var _Object$defineProperty = _dereq_("@babel/runtime-corejs3/core-js/object/define-property");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{"@babel/runtime-corejs3/core-js/object/define-property":11}],19:[function(_dereq_,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],20:[function(_dereq_,module,exports){
var _Symbol$iterator = _dereq_("@babel/runtime-corejs3/core-js/symbol/iterator");

var _Symbol = _dereq_("@babel/runtime-corejs3/core-js/symbol");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{"@babel/runtime-corejs3/core-js/symbol":13,"@babel/runtime-corejs3/core-js/symbol/iterator":14}],21:[function(_dereq_,module,exports){
module.exports = _dereq_('./lib/axios');
},{"./lib/axios":23}],22:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');
var settle = _dereq_('./../core/settle');
var cookies = _dereq_('./../helpers/cookies');
var buildURL = _dereq_('./../helpers/buildURL');
var buildFullPath = _dereq_('../core/buildFullPath');
var parseHeaders = _dereq_('./../helpers/parseHeaders');
var isURLSameOrigin = _dereq_('./../helpers/isURLSameOrigin');
var createError = _dereq_('../core/createError');
var defaults = _dereq_('../defaults');
var Cancel = _dereq_('../cancel/Cancel');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

},{"../cancel/Cancel":24,"../core/buildFullPath":29,"../core/createError":30,"../defaults":36,"./../core/settle":34,"./../helpers/buildURL":39,"./../helpers/cookies":41,"./../helpers/isURLSameOrigin":44,"./../helpers/parseHeaders":46,"./../utils":49}],23:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./utils');
var bind = _dereq_('./helpers/bind');
var Axios = _dereq_('./core/Axios');
var mergeConfig = _dereq_('./core/mergeConfig');
var defaults = _dereq_('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = _dereq_('./cancel/Cancel');
axios.CancelToken = _dereq_('./cancel/CancelToken');
axios.isCancel = _dereq_('./cancel/isCancel');
axios.VERSION = _dereq_('./env/data').version;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = _dereq_('./helpers/spread');

// Expose isAxiosError
axios.isAxiosError = _dereq_('./helpers/isAxiosError');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./cancel/Cancel":24,"./cancel/CancelToken":25,"./cancel/isCancel":26,"./core/Axios":27,"./core/mergeConfig":33,"./defaults":36,"./env/data":37,"./helpers/bind":38,"./helpers/isAxiosError":43,"./helpers/spread":47,"./utils":49}],24:[function(_dereq_,module,exports){
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],25:[function(_dereq_,module,exports){
'use strict';

var Cancel = _dereq_('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":24}],26:[function(_dereq_,module,exports){
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],27:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');
var buildURL = _dereq_('../helpers/buildURL');
var InterceptorManager = _dereq_('./InterceptorManager');
var dispatchRequest = _dereq_('./dispatchRequest');
var mergeConfig = _dereq_('./mergeConfig');
var validator = _dereq_('../helpers/validator');

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"../helpers/buildURL":39,"../helpers/validator":48,"./../utils":49,"./InterceptorManager":28,"./dispatchRequest":31,"./mergeConfig":33}],28:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":49}],29:[function(_dereq_,module,exports){
'use strict';

var isAbsoluteURL = _dereq_('../helpers/isAbsoluteURL');
var combineURLs = _dereq_('../helpers/combineURLs');

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

},{"../helpers/combineURLs":40,"../helpers/isAbsoluteURL":42}],30:[function(_dereq_,module,exports){
'use strict';

var enhanceError = _dereq_('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":32}],31:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');
var transformData = _dereq_('./transformData');
var isCancel = _dereq_('../cancel/isCancel');
var defaults = _dereq_('../defaults');
var Cancel = _dereq_('../cancel/Cancel');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"../cancel/Cancel":24,"../cancel/isCancel":26,"../defaults":36,"./../utils":49,"./transformData":35}],32:[function(_dereq_,module,exports){
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};

},{}],33:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};

},{"../utils":49}],34:[function(_dereq_,module,exports){
'use strict';

var createError = _dereq_('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":30}],35:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');
var defaults = _dereq_('./../defaults');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

},{"./../defaults":36,"./../utils":49}],36:[function(_dereq_,module,exports){
(function (process){(function (){
'use strict';

var utils = _dereq_('./utils');
var normalizeHeaderName = _dereq_('./helpers/normalizeHeaderName');
var enhanceError = _dereq_('./core/enhanceError');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = _dereq_('./adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = _dereq_('./adapters/http');
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

}).call(this)}).call(this,_dereq_('_process'))
},{"./adapters/http":22,"./adapters/xhr":22,"./core/enhanceError":32,"./helpers/normalizeHeaderName":45,"./utils":49,"_process":50}],37:[function(_dereq_,module,exports){
module.exports = {
  "version": "0.23.0"
};
},{}],38:[function(_dereq_,module,exports){
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],39:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":49}],40:[function(_dereq_,module,exports){
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],41:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":49}],42:[function(_dereq_,module,exports){
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],43:[function(_dereq_,module,exports){
'use strict';

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

},{}],44:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":49}],45:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":49}],46:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":49}],47:[function(_dereq_,module,exports){
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],48:[function(_dereq_,module,exports){
'use strict';

var VERSION = _dereq_('../env/data').version;

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};

},{"../env/data":37}],49:[function(_dereq_,module,exports){
'use strict';

var bind = _dereq_('./helpers/bind');

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

},{"./helpers/bind":38}],50:[function(_dereq_,module,exports){

},{}],51:[function(_dereq_,module,exports){
var parent = _dereq_('../../stable/object/define-property');

module.exports = parent;

},{"../../stable/object/define-property":278}],52:[function(_dereq_,module,exports){
var parent = _dereq_('../../stable/promise');

module.exports = parent;

},{"../../stable/promise":281}],53:[function(_dereq_,module,exports){
var parent = _dereq_('../../stable/symbol');

module.exports = parent;

},{"../../stable/symbol":282}],54:[function(_dereq_,module,exports){
var parent = _dereq_('../../stable/symbol/iterator');

module.exports = parent;

},{"../../stable/symbol/iterator":283}],55:[function(_dereq_,module,exports){
_dereq_('../../../modules/es.array.for-each');
var entryVirtual = _dereq_('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').forEach;

},{"../../../internals/entry-virtual":114,"../../../modules/es.array.for-each":217}],56:[function(_dereq_,module,exports){
_dereq_('../../../modules/es.array.reverse');
var entryVirtual = _dereq_('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').reverse;

},{"../../../internals/entry-virtual":114,"../../../modules/es.array.reverse":219}],57:[function(_dereq_,module,exports){
_dereq_('../../../modules/es.array.slice');
var entryVirtual = _dereq_('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').slice;

},{"../../../internals/entry-virtual":114,"../../../modules/es.array.slice":220}],58:[function(_dereq_,module,exports){
var isPrototypeOf = _dereq_('../../internals/object-is-prototype-of');
var method = _dereq_('../array/virtual/reverse');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reverse;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reverse) ? method : own;
};

},{"../../internals/object-is-prototype-of":169,"../array/virtual/reverse":56}],59:[function(_dereq_,module,exports){
var isPrototypeOf = _dereq_('../../internals/object-is-prototype-of');
var method = _dereq_('../array/virtual/slice');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.slice) ? method : own;
};

},{"../../internals/object-is-prototype-of":169,"../array/virtual/slice":57}],60:[function(_dereq_,module,exports){
_dereq_('../../modules/es.object.create');
var path = _dereq_('../../internals/path');

var Object = path.Object;

module.exports = function create(P, D) {
  return Object.create(P, D);
};

},{"../../internals/path":177,"../../modules/es.object.create":224}],61:[function(_dereq_,module,exports){
_dereq_('../../modules/es.object.define-property');
var path = _dereq_('../../internals/path');

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;

},{"../../internals/path":177,"../../modules/es.object.define-property":225}],62:[function(_dereq_,module,exports){
_dereq_('../../modules/es.object.get-prototype-of');
var path = _dereq_('../../internals/path');

module.exports = path.Object.getPrototypeOf;

},{"../../internals/path":177,"../../modules/es.object.get-prototype-of":227}],63:[function(_dereq_,module,exports){
_dereq_('../../modules/es.object.set-prototype-of');
var path = _dereq_('../../internals/path');

module.exports = path.Object.setPrototypeOf;

},{"../../internals/path":177,"../../modules/es.object.set-prototype-of":228}],64:[function(_dereq_,module,exports){
_dereq_('../../modules/es.aggregate-error');
_dereq_('../../modules/es.array.iterator');
_dereq_('../../modules/es.object.to-string');
_dereq_('../../modules/es.promise');
_dereq_('../../modules/es.promise.all-settled');
_dereq_('../../modules/es.promise.any');
_dereq_('../../modules/es.promise.finally');
_dereq_('../../modules/es.string.iterator');
var path = _dereq_('../../internals/path');

module.exports = path.Promise;

},{"../../internals/path":177,"../../modules/es.aggregate-error":215,"../../modules/es.array.iterator":218,"../../modules/es.object.to-string":229,"../../modules/es.promise":236,"../../modules/es.promise.all-settled":230,"../../modules/es.promise.any":232,"../../modules/es.promise.finally":235,"../../modules/es.string.iterator":241}],65:[function(_dereq_,module,exports){
_dereq_('../../modules/es.array.concat');
_dereq_('../../modules/es.object.to-string');
_dereq_('../../modules/es.symbol');
_dereq_('../../modules/es.symbol.async-iterator');
_dereq_('../../modules/es.symbol.description');
_dereq_('../../modules/es.symbol.has-instance');
_dereq_('../../modules/es.symbol.is-concat-spreadable');
_dereq_('../../modules/es.symbol.iterator');
_dereq_('../../modules/es.symbol.match');
_dereq_('../../modules/es.symbol.match-all');
_dereq_('../../modules/es.symbol.replace');
_dereq_('../../modules/es.symbol.search');
_dereq_('../../modules/es.symbol.species');
_dereq_('../../modules/es.symbol.split');
_dereq_('../../modules/es.symbol.to-primitive');
_dereq_('../../modules/es.symbol.to-string-tag');
_dereq_('../../modules/es.symbol.unscopables');
_dereq_('../../modules/es.json.to-string-tag');
_dereq_('../../modules/es.math.to-string-tag');
_dereq_('../../modules/es.reflect.to-string-tag');
var path = _dereq_('../../internals/path');

module.exports = path.Symbol;

},{"../../internals/path":177,"../../modules/es.array.concat":216,"../../modules/es.json.to-string-tag":222,"../../modules/es.math.to-string-tag":223,"../../modules/es.object.to-string":229,"../../modules/es.reflect.to-string-tag":240,"../../modules/es.symbol":249,"../../modules/es.symbol.async-iterator":242,"../../modules/es.symbol.description":244,"../../modules/es.symbol.has-instance":246,"../../modules/es.symbol.is-concat-spreadable":247,"../../modules/es.symbol.iterator":248,"../../modules/es.symbol.match":252,"../../modules/es.symbol.match-all":251,"../../modules/es.symbol.replace":253,"../../modules/es.symbol.search":254,"../../modules/es.symbol.species":255,"../../modules/es.symbol.split":256,"../../modules/es.symbol.to-primitive":257,"../../modules/es.symbol.to-string-tag":258,"../../modules/es.symbol.unscopables":259}],66:[function(_dereq_,module,exports){
_dereq_('../../modules/es.array.iterator');
_dereq_('../../modules/es.object.to-string');
_dereq_('../../modules/es.string.iterator');
_dereq_('../../modules/es.symbol.iterator');
var WrappedWellKnownSymbolModule = _dereq_('../../internals/well-known-symbol-wrapped');

module.exports = WrappedWellKnownSymbolModule.f('iterator');

},{"../../internals/well-known-symbol-wrapped":212,"../../modules/es.array.iterator":218,"../../modules/es.object.to-string":229,"../../modules/es.string.iterator":241,"../../modules/es.symbol.iterator":248}],67:[function(_dereq_,module,exports){
module.exports = _dereq_('../../full/object/define-property');

},{"../../full/object/define-property":71}],68:[function(_dereq_,module,exports){
module.exports = _dereq_('../../full/promise');

},{"../../full/promise":72}],69:[function(_dereq_,module,exports){
module.exports = _dereq_('../../full/symbol');

},{"../../full/symbol":73}],70:[function(_dereq_,module,exports){
module.exports = _dereq_('../../full/symbol/iterator');

},{"../../full/symbol/iterator":74}],71:[function(_dereq_,module,exports){
var parent = _dereq_('../../actual/object/define-property');

module.exports = parent;

},{"../../actual/object/define-property":51}],72:[function(_dereq_,module,exports){
var parent = _dereq_('../../actual/promise');
_dereq_('../../modules/esnext.aggregate-error');
// TODO: Remove from `core-js@4`
_dereq_('../../modules/esnext.promise.all-settled');
_dereq_('../../modules/esnext.promise.try');
_dereq_('../../modules/esnext.promise.any');

module.exports = parent;

},{"../../actual/promise":52,"../../modules/esnext.aggregate-error":260,"../../modules/esnext.promise.all-settled":261,"../../modules/esnext.promise.any":262,"../../modules/esnext.promise.try":263}],73:[function(_dereq_,module,exports){
var parent = _dereq_('../../actual/symbol');
_dereq_('../../modules/esnext.symbol.async-dispose');
_dereq_('../../modules/esnext.symbol.dispose');
_dereq_('../../modules/esnext.symbol.matcher');
_dereq_('../../modules/esnext.symbol.metadata-key');
_dereq_('../../modules/esnext.symbol.observable');
// TODO: Remove from `core-js@4`
_dereq_('../../modules/esnext.symbol.metadata');
_dereq_('../../modules/esnext.symbol.pattern-match');
_dereq_('../../modules/esnext.symbol.replace-all');

module.exports = parent;

},{"../../actual/symbol":53,"../../modules/esnext.symbol.async-dispose":264,"../../modules/esnext.symbol.dispose":265,"../../modules/esnext.symbol.matcher":266,"../../modules/esnext.symbol.metadata":268,"../../modules/esnext.symbol.metadata-key":267,"../../modules/esnext.symbol.observable":269,"../../modules/esnext.symbol.pattern-match":270,"../../modules/esnext.symbol.replace-all":271}],74:[function(_dereq_,module,exports){
var parent = _dereq_('../../actual/symbol/iterator');

module.exports = parent;

},{"../../actual/symbol/iterator":54}],75:[function(_dereq_,module,exports){
var isCallable = _dereq_('../internals/is-callable');
var tryToString = _dereq_('../internals/try-to-string');

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};

},{"../internals/is-callable":143,"../internals/try-to-string":205}],76:[function(_dereq_,module,exports){
var isConstructor = _dereq_('../internals/is-constructor');
var tryToString = _dereq_('../internals/try-to-string');

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a constructor');
};

},{"../internals/is-constructor":144,"../internals/try-to-string":205}],77:[function(_dereq_,module,exports){
var isCallable = _dereq_('../internals/is-callable');

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

},{"../internals/is-callable":143}],78:[function(_dereq_,module,exports){
module.exports = function () { /* empty */ };

},{}],79:[function(_dereq_,module,exports){
var isPrototypeOf = _dereq_('../internals/object-is-prototype-of');

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};

},{"../internals/object-is-prototype-of":169}],80:[function(_dereq_,module,exports){
var isObject = _dereq_('../internals/is-object');

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};

},{"../internals/is-object":147}],81:[function(_dereq_,module,exports){
'use strict';
var $forEach = _dereq_('../internals/array-iteration').forEach;
var arrayMethodIsStrict = _dereq_('../internals/array-method-is-strict');

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

},{"../internals/array-iteration":83,"../internals/array-method-is-strict":85}],82:[function(_dereq_,module,exports){
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var toAbsoluteIndex = _dereq_('../internals/to-absolute-index');
var lengthOfArrayLike = _dereq_('../internals/length-of-array-like');

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

},{"../internals/length-of-array-like":156,"../internals/to-absolute-index":196,"../internals/to-indexed-object":197}],83:[function(_dereq_,module,exports){
var bind = _dereq_('../internals/function-bind-context');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var IndexedObject = _dereq_('../internals/indexed-object');
var toObject = _dereq_('../internals/to-object');
var lengthOfArrayLike = _dereq_('../internals/length-of-array-like');
var arraySpeciesCreate = _dereq_('../internals/array-species-create');

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

},{"../internals/array-species-create":89,"../internals/function-bind-context":121,"../internals/function-uncurry-this":126,"../internals/indexed-object":137,"../internals/length-of-array-like":156,"../internals/to-object":200}],84:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var V8_VERSION = _dereq_('../internals/engine-v8-version');

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

},{"../internals/engine-v8-version":113,"../internals/fails":119,"../internals/well-known-symbol":213}],85:[function(_dereq_,module,exports){
'use strict';
var fails = _dereq_('../internals/fails');

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

},{"../internals/fails":119}],86:[function(_dereq_,module,exports){
var toAbsoluteIndex = _dereq_('../internals/to-absolute-index');
var lengthOfArrayLike = _dereq_('../internals/length-of-array-like');
var createProperty = _dereq_('../internals/create-property');

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

},{"../internals/create-property":98,"../internals/length-of-array-like":156,"../internals/to-absolute-index":196}],87:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');

module.exports = uncurryThis([].slice);

},{"../internals/function-uncurry-this":126}],88:[function(_dereq_,module,exports){
var isArray = _dereq_('../internals/is-array');
var isConstructor = _dereq_('../internals/is-constructor');
var isObject = _dereq_('../internals/is-object');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};

},{"../internals/is-array":142,"../internals/is-constructor":144,"../internals/is-object":147,"../internals/well-known-symbol":213}],89:[function(_dereq_,module,exports){
var arraySpeciesConstructor = _dereq_('../internals/array-species-constructor');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

},{"../internals/array-species-constructor":88}],90:[function(_dereq_,module,exports){
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

},{"../internals/well-known-symbol":213}],91:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this":126}],92:[function(_dereq_,module,exports){
var TO_STRING_TAG_SUPPORT = _dereq_('../internals/to-string-tag-support');
var isCallable = _dereq_('../internals/is-callable');
var classofRaw = _dereq_('../internals/classof-raw');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

},{"../internals/classof-raw":91,"../internals/is-callable":143,"../internals/to-string-tag-support":203,"../internals/well-known-symbol":213}],93:[function(_dereq_,module,exports){
var hasOwn = _dereq_('../internals/has-own-property');
var ownKeys = _dereq_('../internals/own-keys');
var getOwnPropertyDescriptorModule = _dereq_('../internals/object-get-own-property-descriptor');
var definePropertyModule = _dereq_('../internals/object-define-property');

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

},{"../internals/has-own-property":132,"../internals/object-define-property":163,"../internals/object-get-own-property-descriptor":164,"../internals/own-keys":176}],94:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":119}],95:[function(_dereq_,module,exports){
// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};

},{}],96:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var definePropertyModule = _dereq_('../internals/object-define-property');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"../internals/create-property-descriptor":97,"../internals/descriptors":101,"../internals/object-define-property":163}],97:[function(_dereq_,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],98:[function(_dereq_,module,exports){
'use strict';
var toPropertyKey = _dereq_('../internals/to-property-key');
var definePropertyModule = _dereq_('../internals/object-define-property');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

},{"../internals/create-property-descriptor":97,"../internals/object-define-property":163,"../internals/to-property-key":202}],99:[function(_dereq_,module,exports){
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
  return target;
};

},{"../internals/create-non-enumerable-property":96}],100:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};

},{"../internals/global":131}],101:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

},{"../internals/fails":119}],102:[function(_dereq_,module,exports){
var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};

},{}],103:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var isObject = _dereq_('../internals/is-object');

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":131,"../internals/is-object":147}],104:[function(_dereq_,module,exports){
var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};

},{}],105:[function(_dereq_,module,exports){
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

},{}],106:[function(_dereq_,module,exports){
var IS_DENO = _dereq_('../internals/engine-is-deno');
var IS_NODE = _dereq_('../internals/engine-is-node');

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';

},{"../internals/engine-is-deno":107,"../internals/engine-is-node":110}],107:[function(_dereq_,module,exports){
/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

},{}],108:[function(_dereq_,module,exports){
var userAgent = _dereq_('../internals/engine-user-agent');
var global = _dereq_('../internals/global');

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;

},{"../internals/engine-user-agent":112,"../internals/global":131}],109:[function(_dereq_,module,exports){
var userAgent = _dereq_('../internals/engine-user-agent');

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":112}],110:[function(_dereq_,module,exports){
var classof = _dereq_('../internals/classof-raw');
var global = _dereq_('../internals/global');

module.exports = classof(global.process) == 'process';

},{"../internals/classof-raw":91,"../internals/global":131}],111:[function(_dereq_,module,exports){
var userAgent = _dereq_('../internals/engine-user-agent');

module.exports = /web0s(?!.*chrome)/i.test(userAgent);

},{"../internals/engine-user-agent":112}],112:[function(_dereq_,module,exports){
var getBuiltIn = _dereq_('../internals/get-built-in');

module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":127}],113:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var userAgent = _dereq_('../internals/engine-user-agent');

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;

},{"../internals/engine-user-agent":112,"../internals/global":131}],114:[function(_dereq_,module,exports){
var path = _dereq_('../internals/path');

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};

},{"../internals/path":177}],115:[function(_dereq_,module,exports){
// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

},{}],116:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};

},{"../internals/function-uncurry-this":126}],117:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});

},{"../internals/create-property-descriptor":97,"../internals/fails":119}],118:[function(_dereq_,module,exports){
'use strict';
var global = _dereq_('../internals/global');
var apply = _dereq_('../internals/function-apply');
var uncurryThis = _dereq_('../internals/function-uncurry-this-clause');
var isCallable = _dereq_('../internals/is-callable');
var getOwnPropertyDescriptor = _dereq_('../internals/object-get-own-property-descriptor').f;
var isForced = _dereq_('../internals/is-forced');
var path = _dereq_('../internals/path');
var bind = _dereq_('../internals/function-bind-context');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var hasOwn = _dereq_('../internals/has-own-property');

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};

},{"../internals/create-non-enumerable-property":96,"../internals/function-apply":120,"../internals/function-bind-context":121,"../internals/function-uncurry-this-clause":125,"../internals/global":131,"../internals/has-own-property":132,"../internals/is-callable":143,"../internals/is-forced":145,"../internals/object-get-own-property-descriptor":164,"../internals/path":177}],119:[function(_dereq_,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

},{}],120:[function(_dereq_,module,exports){
var NATIVE_BIND = _dereq_('../internals/function-bind-native');

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

},{"../internals/function-bind-native":122}],121:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this-clause');
var aCallable = _dereq_('../internals/a-callable');
var NATIVE_BIND = _dereq_('../internals/function-bind-native');

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"../internals/a-callable":75,"../internals/function-bind-native":122,"../internals/function-uncurry-this-clause":125}],122:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

},{"../internals/fails":119}],123:[function(_dereq_,module,exports){
var NATIVE_BIND = _dereq_('../internals/function-bind-native');

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

},{"../internals/function-bind-native":122}],124:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var hasOwn = _dereq_('../internals/has-own-property');

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":101,"../internals/has-own-property":132}],125:[function(_dereq_,module,exports){
var classofRaw = _dereq_('../internals/classof-raw');
var uncurryThis = _dereq_('../internals/function-uncurry-this');

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

},{"../internals/classof-raw":91,"../internals/function-uncurry-this":126}],126:[function(_dereq_,module,exports){
var NATIVE_BIND = _dereq_('../internals/function-bind-native');

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};

},{"../internals/function-bind-native":122}],127:[function(_dereq_,module,exports){
var path = _dereq_('../internals/path');
var global = _dereq_('../internals/global');
var isCallable = _dereq_('../internals/is-callable');

var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

},{"../internals/global":131,"../internals/is-callable":143,"../internals/path":177}],128:[function(_dereq_,module,exports){
var classof = _dereq_('../internals/classof');
var getMethod = _dereq_('../internals/get-method');
var isNullOrUndefined = _dereq_('../internals/is-null-or-undefined');
var Iterators = _dereq_('../internals/iterators');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};

},{"../internals/classof":92,"../internals/get-method":130,"../internals/is-null-or-undefined":146,"../internals/iterators":155,"../internals/well-known-symbol":213}],129:[function(_dereq_,module,exports){
var call = _dereq_('../internals/function-call');
var aCallable = _dereq_('../internals/a-callable');
var anObject = _dereq_('../internals/an-object');
var tryToString = _dereq_('../internals/try-to-string');
var getIteratorMethod = _dereq_('../internals/get-iterator-method');

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};

},{"../internals/a-callable":75,"../internals/an-object":80,"../internals/function-call":123,"../internals/get-iterator-method":128,"../internals/try-to-string":205}],130:[function(_dereq_,module,exports){
var aCallable = _dereq_('../internals/a-callable');
var isNullOrUndefined = _dereq_('../internals/is-null-or-undefined');

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"../internals/a-callable":75,"../internals/is-null-or-undefined":146}],131:[function(_dereq_,module,exports){
(function (global){(function (){
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],132:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var toObject = _dereq_('../internals/to-object');

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":126,"../internals/to-object":200}],133:[function(_dereq_,module,exports){
module.exports = {};

},{}],134:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

},{"../internals/global":131}],135:[function(_dereq_,module,exports){
var getBuiltIn = _dereq_('../internals/get-built-in');

module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":127}],136:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var fails = _dereq_('../internals/fails');
var createElement = _dereq_('../internals/document-create-element');

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

},{"../internals/descriptors":101,"../internals/document-create-element":103,"../internals/fails":119}],137:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var fails = _dereq_('../internals/fails');
var classof = _dereq_('../internals/classof-raw');

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;

},{"../internals/classof-raw":91,"../internals/fails":119,"../internals/function-uncurry-this":126}],138:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var isCallable = _dereq_('../internals/is-callable');
var store = _dereq_('../internals/shared-store');

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":126,"../internals/is-callable":143,"../internals/shared-store":188}],139:[function(_dereq_,module,exports){
var isObject = _dereq_('../internals/is-object');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};

},{"../internals/create-non-enumerable-property":96,"../internals/is-object":147}],140:[function(_dereq_,module,exports){
var NATIVE_WEAK_MAP = _dereq_('../internals/weak-map-basic-detection');
var global = _dereq_('../internals/global');
var isObject = _dereq_('../internals/is-object');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var hasOwn = _dereq_('../internals/has-own-property');
var shared = _dereq_('../internals/shared-store');
var sharedKey = _dereq_('../internals/shared-key');
var hiddenKeys = _dereq_('../internals/hidden-keys');

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

},{"../internals/create-non-enumerable-property":96,"../internals/global":131,"../internals/has-own-property":132,"../internals/hidden-keys":133,"../internals/is-object":147,"../internals/shared-key":187,"../internals/shared-store":188,"../internals/weak-map-basic-detection":210}],141:[function(_dereq_,module,exports){
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var Iterators = _dereq_('../internals/iterators');

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"../internals/iterators":155,"../internals/well-known-symbol":213}],142:[function(_dereq_,module,exports){
var classof = _dereq_('../internals/classof-raw');

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};

},{"../internals/classof-raw":91}],143:[function(_dereq_,module,exports){
var $documentAll = _dereq_('../internals/document-all');

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

},{"../internals/document-all":102}],144:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var fails = _dereq_('../internals/fails');
var isCallable = _dereq_('../internals/is-callable');
var classof = _dereq_('../internals/classof');
var getBuiltIn = _dereq_('../internals/get-built-in');
var inspectSource = _dereq_('../internals/inspect-source');

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

},{"../internals/classof":92,"../internals/fails":119,"../internals/function-uncurry-this":126,"../internals/get-built-in":127,"../internals/inspect-source":138,"../internals/is-callable":143}],145:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');
var isCallable = _dereq_('../internals/is-callable');

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

},{"../internals/fails":119,"../internals/is-callable":143}],146:[function(_dereq_,module,exports){
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};

},{}],147:[function(_dereq_,module,exports){
var isCallable = _dereq_('../internals/is-callable');
var $documentAll = _dereq_('../internals/document-all');

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

},{"../internals/document-all":102,"../internals/is-callable":143}],148:[function(_dereq_,module,exports){
module.exports = true;

},{}],149:[function(_dereq_,module,exports){
var getBuiltIn = _dereq_('../internals/get-built-in');
var isCallable = _dereq_('../internals/is-callable');
var isPrototypeOf = _dereq_('../internals/object-is-prototype-of');
var USE_SYMBOL_AS_UID = _dereq_('../internals/use-symbol-as-uid');

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"../internals/get-built-in":127,"../internals/is-callable":143,"../internals/object-is-prototype-of":169,"../internals/use-symbol-as-uid":207}],150:[function(_dereq_,module,exports){
var bind = _dereq_('../internals/function-bind-context');
var call = _dereq_('../internals/function-call');
var anObject = _dereq_('../internals/an-object');
var tryToString = _dereq_('../internals/try-to-string');
var isArrayIteratorMethod = _dereq_('../internals/is-array-iterator-method');
var lengthOfArrayLike = _dereq_('../internals/length-of-array-like');
var isPrototypeOf = _dereq_('../internals/object-is-prototype-of');
var getIterator = _dereq_('../internals/get-iterator');
var getIteratorMethod = _dereq_('../internals/get-iterator-method');
var iteratorClose = _dereq_('../internals/iterator-close');

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};

},{"../internals/an-object":80,"../internals/function-bind-context":121,"../internals/function-call":123,"../internals/get-iterator":129,"../internals/get-iterator-method":128,"../internals/is-array-iterator-method":141,"../internals/iterator-close":151,"../internals/length-of-array-like":156,"../internals/object-is-prototype-of":169,"../internals/try-to-string":205}],151:[function(_dereq_,module,exports){
var call = _dereq_('../internals/function-call');
var anObject = _dereq_('../internals/an-object');
var getMethod = _dereq_('../internals/get-method');

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

},{"../internals/an-object":80,"../internals/function-call":123,"../internals/get-method":130}],152:[function(_dereq_,module,exports){
'use strict';
var IteratorPrototype = _dereq_('../internals/iterators-core').IteratorPrototype;
var create = _dereq_('../internals/object-create');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');
var setToStringTag = _dereq_('../internals/set-to-string-tag');
var Iterators = _dereq_('../internals/iterators');

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

},{"../internals/create-property-descriptor":97,"../internals/iterators":155,"../internals/iterators-core":154,"../internals/object-create":161,"../internals/set-to-string-tag":186}],153:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var call = _dereq_('../internals/function-call');
var IS_PURE = _dereq_('../internals/is-pure');
var FunctionName = _dereq_('../internals/function-name');
var isCallable = _dereq_('../internals/is-callable');
var createIteratorConstructor = _dereq_('../internals/iterator-create-constructor');
var getPrototypeOf = _dereq_('../internals/object-get-prototype-of');
var setPrototypeOf = _dereq_('../internals/object-set-prototype-of');
var setToStringTag = _dereq_('../internals/set-to-string-tag');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var defineBuiltIn = _dereq_('../internals/define-built-in');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var Iterators = _dereq_('../internals/iterators');
var IteratorsCore = _dereq_('../internals/iterators-core');

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};

},{"../internals/create-non-enumerable-property":96,"../internals/define-built-in":99,"../internals/export":118,"../internals/function-call":123,"../internals/function-name":124,"../internals/is-callable":143,"../internals/is-pure":148,"../internals/iterator-create-constructor":152,"../internals/iterators":155,"../internals/iterators-core":154,"../internals/object-get-prototype-of":168,"../internals/object-set-prototype-of":173,"../internals/set-to-string-tag":186,"../internals/well-known-symbol":213}],154:[function(_dereq_,module,exports){
'use strict';
var fails = _dereq_('../internals/fails');
var isCallable = _dereq_('../internals/is-callable');
var isObject = _dereq_('../internals/is-object');
var create = _dereq_('../internals/object-create');
var getPrototypeOf = _dereq_('../internals/object-get-prototype-of');
var defineBuiltIn = _dereq_('../internals/define-built-in');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var IS_PURE = _dereq_('../internals/is-pure');

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/define-built-in":99,"../internals/fails":119,"../internals/is-callable":143,"../internals/is-object":147,"../internals/is-pure":148,"../internals/object-create":161,"../internals/object-get-prototype-of":168,"../internals/well-known-symbol":213}],155:[function(_dereq_,module,exports){
arguments[4][133][0].apply(exports,arguments)
},{"dup":133}],156:[function(_dereq_,module,exports){
var toLength = _dereq_('../internals/to-length');

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};

},{"../internals/to-length":199}],157:[function(_dereq_,module,exports){
var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

},{}],158:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var bind = _dereq_('../internals/function-bind-context');
var getOwnPropertyDescriptor = _dereq_('../internals/object-get-own-property-descriptor').f;
var macrotask = _dereq_('../internals/task').set;
var IS_IOS = _dereq_('../internals/engine-is-ios');
var IS_IOS_PEBBLE = _dereq_('../internals/engine-is-ios-pebble');
var IS_WEBOS_WEBKIT = _dereq_('../internals/engine-is-webos-webkit');
var IS_NODE = _dereq_('../internals/engine-is-node');

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};

},{"../internals/engine-is-ios":109,"../internals/engine-is-ios-pebble":108,"../internals/engine-is-node":110,"../internals/engine-is-webos-webkit":111,"../internals/function-bind-context":121,"../internals/global":131,"../internals/object-get-own-property-descriptor":164,"../internals/task":195}],159:[function(_dereq_,module,exports){
'use strict';
var aCallable = _dereq_('../internals/a-callable');

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"../internals/a-callable":75}],160:[function(_dereq_,module,exports){
var toString = _dereq_('../internals/to-string');

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};

},{"../internals/to-string":204}],161:[function(_dereq_,module,exports){
/* global ActiveXObject -- old IE, WSH */
var anObject = _dereq_('../internals/an-object');
var definePropertiesModule = _dereq_('../internals/object-define-properties');
var enumBugKeys = _dereq_('../internals/enum-bug-keys');
var hiddenKeys = _dereq_('../internals/hidden-keys');
var html = _dereq_('../internals/html');
var documentCreateElement = _dereq_('../internals/document-create-element');
var sharedKey = _dereq_('../internals/shared-key');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

},{"../internals/an-object":80,"../internals/document-create-element":103,"../internals/enum-bug-keys":115,"../internals/hidden-keys":133,"../internals/html":135,"../internals/object-define-properties":162,"../internals/shared-key":187}],162:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var V8_PROTOTYPE_DEFINE_BUG = _dereq_('../internals/v8-prototype-define-bug');
var definePropertyModule = _dereq_('../internals/object-define-property');
var anObject = _dereq_('../internals/an-object');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var objectKeys = _dereq_('../internals/object-keys');

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

},{"../internals/an-object":80,"../internals/descriptors":101,"../internals/object-define-property":163,"../internals/object-keys":171,"../internals/to-indexed-object":197,"../internals/v8-prototype-define-bug":208}],163:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var IE8_DOM_DEFINE = _dereq_('../internals/ie8-dom-define');
var V8_PROTOTYPE_DEFINE_BUG = _dereq_('../internals/v8-prototype-define-bug');
var anObject = _dereq_('../internals/an-object');
var toPropertyKey = _dereq_('../internals/to-property-key');

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"../internals/an-object":80,"../internals/descriptors":101,"../internals/ie8-dom-define":136,"../internals/to-property-key":202,"../internals/v8-prototype-define-bug":208}],164:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var call = _dereq_('../internals/function-call');
var propertyIsEnumerableModule = _dereq_('../internals/object-property-is-enumerable');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var toPropertyKey = _dereq_('../internals/to-property-key');
var hasOwn = _dereq_('../internals/has-own-property');
var IE8_DOM_DEFINE = _dereq_('../internals/ie8-dom-define');

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"../internals/create-property-descriptor":97,"../internals/descriptors":101,"../internals/function-call":123,"../internals/has-own-property":132,"../internals/ie8-dom-define":136,"../internals/object-property-is-enumerable":172,"../internals/to-indexed-object":197,"../internals/to-property-key":202}],165:[function(_dereq_,module,exports){
/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = _dereq_('../internals/classof-raw');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var $getOwnPropertyNames = _dereq_('../internals/object-get-own-property-names').f;
var arraySlice = _dereq_('../internals/array-slice-simple');

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};

},{"../internals/array-slice-simple":86,"../internals/classof-raw":91,"../internals/object-get-own-property-names":166,"../internals/to-indexed-object":197}],166:[function(_dereq_,module,exports){
var internalObjectKeys = _dereq_('../internals/object-keys-internal');
var enumBugKeys = _dereq_('../internals/enum-bug-keys');

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/enum-bug-keys":115,"../internals/object-keys-internal":170}],167:[function(_dereq_,module,exports){
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],168:[function(_dereq_,module,exports){
var hasOwn = _dereq_('../internals/has-own-property');
var isCallable = _dereq_('../internals/is-callable');
var toObject = _dereq_('../internals/to-object');
var sharedKey = _dereq_('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = _dereq_('../internals/correct-prototype-getter');

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

},{"../internals/correct-prototype-getter":94,"../internals/has-own-property":132,"../internals/is-callable":143,"../internals/shared-key":187,"../internals/to-object":200}],169:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');

module.exports = uncurryThis({}.isPrototypeOf);

},{"../internals/function-uncurry-this":126}],170:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var hasOwn = _dereq_('../internals/has-own-property');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var indexOf = _dereq_('../internals/array-includes').indexOf;
var hiddenKeys = _dereq_('../internals/hidden-keys');

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

},{"../internals/array-includes":82,"../internals/function-uncurry-this":126,"../internals/has-own-property":132,"../internals/hidden-keys":133,"../internals/to-indexed-object":197}],171:[function(_dereq_,module,exports){
var internalObjectKeys = _dereq_('../internals/object-keys-internal');
var enumBugKeys = _dereq_('../internals/enum-bug-keys');

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/enum-bug-keys":115,"../internals/object-keys-internal":170}],172:[function(_dereq_,module,exports){
'use strict';
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],173:[function(_dereq_,module,exports){
/* eslint-disable no-proto -- safe */
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var anObject = _dereq_('../internals/an-object');
var aPossiblePrototype = _dereq_('../internals/a-possible-prototype');

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

},{"../internals/a-possible-prototype":77,"../internals/an-object":80,"../internals/function-uncurry-this":126}],174:[function(_dereq_,module,exports){
'use strict';
var TO_STRING_TAG_SUPPORT = _dereq_('../internals/to-string-tag-support');
var classof = _dereq_('../internals/classof');

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

},{"../internals/classof":92,"../internals/to-string-tag-support":203}],175:[function(_dereq_,module,exports){
var call = _dereq_('../internals/function-call');
var isCallable = _dereq_('../internals/is-callable');
var isObject = _dereq_('../internals/is-object');

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};

},{"../internals/function-call":123,"../internals/is-callable":143,"../internals/is-object":147}],176:[function(_dereq_,module,exports){
var getBuiltIn = _dereq_('../internals/get-built-in');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var getOwnPropertyNamesModule = _dereq_('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = _dereq_('../internals/object-get-own-property-symbols');
var anObject = _dereq_('../internals/an-object');

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"../internals/an-object":80,"../internals/function-uncurry-this":126,"../internals/get-built-in":127,"../internals/object-get-own-property-names":166,"../internals/object-get-own-property-symbols":167}],177:[function(_dereq_,module,exports){
arguments[4][133][0].apply(exports,arguments)
},{"dup":133}],178:[function(_dereq_,module,exports){
module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

},{}],179:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var NativePromiseConstructor = _dereq_('../internals/promise-native-constructor');
var isCallable = _dereq_('../internals/is-callable');
var isForced = _dereq_('../internals/is-forced');
var inspectSource = _dereq_('../internals/inspect-source');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var IS_BROWSER = _dereq_('../internals/engine-is-browser');
var IS_DENO = _dereq_('../internals/engine-is-deno');
var IS_PURE = _dereq_('../internals/is-pure');
var V8_VERSION = _dereq_('../internals/engine-v8-version');

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};

},{"../internals/engine-is-browser":106,"../internals/engine-is-deno":107,"../internals/engine-v8-version":113,"../internals/global":131,"../internals/inspect-source":138,"../internals/is-callable":143,"../internals/is-forced":145,"../internals/is-pure":148,"../internals/promise-native-constructor":180,"../internals/well-known-symbol":213}],180:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');

module.exports = global.Promise;

},{"../internals/global":131}],181:[function(_dereq_,module,exports){
var anObject = _dereq_('../internals/an-object');
var isObject = _dereq_('../internals/is-object');
var newPromiseCapability = _dereq_('../internals/new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"../internals/an-object":80,"../internals/is-object":147,"../internals/new-promise-capability":159}],182:[function(_dereq_,module,exports){
var NativePromiseConstructor = _dereq_('../internals/promise-native-constructor');
var checkCorrectnessOfIteration = _dereq_('../internals/check-correctness-of-iteration');
var FORCED_PROMISE_CONSTRUCTOR = _dereq_('../internals/promise-constructor-detection').CONSTRUCTOR;

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});

},{"../internals/check-correctness-of-iteration":90,"../internals/promise-constructor-detection":179,"../internals/promise-native-constructor":180}],183:[function(_dereq_,module,exports){
var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;

},{}],184:[function(_dereq_,module,exports){
var isNullOrUndefined = _dereq_('../internals/is-null-or-undefined');

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};

},{"../internals/is-null-or-undefined":146}],185:[function(_dereq_,module,exports){
'use strict';
var getBuiltIn = _dereq_('../internals/get-built-in');
var definePropertyModule = _dereq_('../internals/object-define-property');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var DESCRIPTORS = _dereq_('../internals/descriptors');

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

},{"../internals/descriptors":101,"../internals/get-built-in":127,"../internals/object-define-property":163,"../internals/well-known-symbol":213}],186:[function(_dereq_,module,exports){
var TO_STRING_TAG_SUPPORT = _dereq_('../internals/to-string-tag-support');
var defineProperty = _dereq_('../internals/object-define-property').f;
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var hasOwn = _dereq_('../internals/has-own-property');
var toString = _dereq_('../internals/object-to-string');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};

},{"../internals/create-non-enumerable-property":96,"../internals/has-own-property":132,"../internals/object-define-property":163,"../internals/object-to-string":174,"../internals/to-string-tag-support":203,"../internals/well-known-symbol":213}],187:[function(_dereq_,module,exports){
var shared = _dereq_('../internals/shared');
var uid = _dereq_('../internals/uid');

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":189,"../internals/uid":206}],188:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var defineGlobalProperty = _dereq_('../internals/define-global-property');

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;

},{"../internals/define-global-property":100,"../internals/global":131}],189:[function(_dereq_,module,exports){
var IS_PURE = _dereq_('../internals/is-pure');
var store = _dereq_('../internals/shared-store');

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.26.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

},{"../internals/is-pure":148,"../internals/shared-store":188}],190:[function(_dereq_,module,exports){
var anObject = _dereq_('../internals/an-object');
var aConstructor = _dereq_('../internals/a-constructor');
var isNullOrUndefined = _dereq_('../internals/is-null-or-undefined');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};

},{"../internals/a-constructor":76,"../internals/an-object":80,"../internals/is-null-or-undefined":146,"../internals/well-known-symbol":213}],191:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var toIntegerOrInfinity = _dereq_('../internals/to-integer-or-infinity');
var toString = _dereq_('../internals/to-string');
var requireObjectCoercible = _dereq_('../internals/require-object-coercible');

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

},{"../internals/function-uncurry-this":126,"../internals/require-object-coercible":184,"../internals/to-integer-or-infinity":198,"../internals/to-string":204}],192:[function(_dereq_,module,exports){
/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = _dereq_('../internals/engine-v8-version');
var fails = _dereq_('../internals/fails');

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":113,"../internals/fails":119}],193:[function(_dereq_,module,exports){
var call = _dereq_('../internals/function-call');
var getBuiltIn = _dereq_('../internals/get-built-in');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var defineBuiltIn = _dereq_('../internals/define-built-in');

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};

},{"../internals/define-built-in":99,"../internals/function-call":123,"../internals/get-built-in":127,"../internals/well-known-symbol":213}],194:[function(_dereq_,module,exports){
var NATIVE_SYMBOL = _dereq_('../internals/symbol-constructor-detection');

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;

},{"../internals/symbol-constructor-detection":192}],195:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var apply = _dereq_('../internals/function-apply');
var bind = _dereq_('../internals/function-bind-context');
var isCallable = _dereq_('../internals/is-callable');
var hasOwn = _dereq_('../internals/has-own-property');
var fails = _dereq_('../internals/fails');
var html = _dereq_('../internals/html');
var arraySlice = _dereq_('../internals/array-slice');
var createElement = _dereq_('../internals/document-create-element');
var validateArgumentsLength = _dereq_('../internals/validate-arguments-length');
var IS_IOS = _dereq_('../internals/engine-is-ios');
var IS_NODE = _dereq_('../internals/engine-is-node');

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};

},{"../internals/array-slice":87,"../internals/document-create-element":103,"../internals/engine-is-ios":109,"../internals/engine-is-node":110,"../internals/fails":119,"../internals/function-apply":120,"../internals/function-bind-context":121,"../internals/global":131,"../internals/has-own-property":132,"../internals/html":135,"../internals/is-callable":143,"../internals/validate-arguments-length":209}],196:[function(_dereq_,module,exports){
var toIntegerOrInfinity = _dereq_('../internals/to-integer-or-infinity');

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer-or-infinity":198}],197:[function(_dereq_,module,exports){
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = _dereq_('../internals/indexed-object');
var requireObjectCoercible = _dereq_('../internals/require-object-coercible');

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":137,"../internals/require-object-coercible":184}],198:[function(_dereq_,module,exports){
var trunc = _dereq_('../internals/math-trunc');

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

},{"../internals/math-trunc":157}],199:[function(_dereq_,module,exports){
var toIntegerOrInfinity = _dereq_('../internals/to-integer-or-infinity');

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":198}],200:[function(_dereq_,module,exports){
var requireObjectCoercible = _dereq_('../internals/require-object-coercible');

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":184}],201:[function(_dereq_,module,exports){
var call = _dereq_('../internals/function-call');
var isObject = _dereq_('../internals/is-object');
var isSymbol = _dereq_('../internals/is-symbol');
var getMethod = _dereq_('../internals/get-method');
var ordinaryToPrimitive = _dereq_('../internals/ordinary-to-primitive');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

},{"../internals/function-call":123,"../internals/get-method":130,"../internals/is-object":147,"../internals/is-symbol":149,"../internals/ordinary-to-primitive":175,"../internals/well-known-symbol":213}],202:[function(_dereq_,module,exports){
var toPrimitive = _dereq_('../internals/to-primitive');
var isSymbol = _dereq_('../internals/is-symbol');

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

},{"../internals/is-symbol":149,"../internals/to-primitive":201}],203:[function(_dereq_,module,exports){
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":213}],204:[function(_dereq_,module,exports){
var classof = _dereq_('../internals/classof');

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

},{"../internals/classof":92}],205:[function(_dereq_,module,exports){
var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};

},{}],206:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

},{"../internals/function-uncurry-this":126}],207:[function(_dereq_,module,exports){
/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = _dereq_('../internals/symbol-constructor-detection');

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

},{"../internals/symbol-constructor-detection":192}],208:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var fails = _dereq_('../internals/fails');

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

},{"../internals/descriptors":101,"../internals/fails":119}],209:[function(_dereq_,module,exports){
var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};

},{}],210:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var isCallable = _dereq_('../internals/is-callable');

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"../internals/global":131,"../internals/is-callable":143}],211:[function(_dereq_,module,exports){
var path = _dereq_('../internals/path');
var hasOwn = _dereq_('../internals/has-own-property');
var wrappedWellKnownSymbolModule = _dereq_('../internals/well-known-symbol-wrapped');
var defineProperty = _dereq_('../internals/object-define-property').f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};

},{"../internals/has-own-property":132,"../internals/object-define-property":163,"../internals/path":177,"../internals/well-known-symbol-wrapped":212}],212:[function(_dereq_,module,exports){
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

exports.f = wellKnownSymbol;

},{"../internals/well-known-symbol":213}],213:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var shared = _dereq_('../internals/shared');
var hasOwn = _dereq_('../internals/has-own-property');
var uid = _dereq_('../internals/uid');
var NATIVE_SYMBOL = _dereq_('../internals/symbol-constructor-detection');
var USE_SYMBOL_AS_UID = _dereq_('../internals/use-symbol-as-uid');

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

},{"../internals/global":131,"../internals/has-own-property":132,"../internals/shared":189,"../internals/symbol-constructor-detection":192,"../internals/uid":206,"../internals/use-symbol-as-uid":207}],214:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var isPrototypeOf = _dereq_('../internals/object-is-prototype-of');
var getPrototypeOf = _dereq_('../internals/object-get-prototype-of');
var setPrototypeOf = _dereq_('../internals/object-set-prototype-of');
var copyConstructorProperties = _dereq_('../internals/copy-constructor-properties');
var create = _dereq_('../internals/object-create');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');
var clearErrorStack = _dereq_('../internals/error-stack-clear');
var installErrorCause = _dereq_('../internals/install-error-cause');
var iterate = _dereq_('../internals/iterate');
var normalizeStringArgument = _dereq_('../internals/normalize-string-argument');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var ERROR_STACK_INSTALLABLE = _dereq_('../internals/error-stack-installable');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Error = Error;
var push = [].push;

var $AggregateError = function AggregateError(errors, message /* , options */) {
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = setPrototypeOf($Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create(AggregateErrorPrototype);
    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(that, 'stack', clearErrorStack(that.stack, 1));
  installErrorCause(that, options);
  var errorsArray = [];
  iterate(errors, push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);
else copyConstructorProperties($AggregateError, $Error, { name: true });

var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError),
  message: createPropertyDescriptor(1, ''),
  name: createPropertyDescriptor(1, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError
});

},{"../internals/copy-constructor-properties":93,"../internals/create-non-enumerable-property":96,"../internals/create-property-descriptor":97,"../internals/error-stack-clear":116,"../internals/error-stack-installable":117,"../internals/export":118,"../internals/install-error-cause":139,"../internals/iterate":150,"../internals/normalize-string-argument":160,"../internals/object-create":161,"../internals/object-get-prototype-of":168,"../internals/object-is-prototype-of":169,"../internals/object-set-prototype-of":173,"../internals/well-known-symbol":213}],215:[function(_dereq_,module,exports){
// TODO: Remove this module from `core-js@4` since it's replaced to module below
_dereq_('../modules/es.aggregate-error.constructor');

},{"../modules/es.aggregate-error.constructor":214}],216:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var fails = _dereq_('../internals/fails');
var isArray = _dereq_('../internals/is-array');
var isObject = _dereq_('../internals/is-object');
var toObject = _dereq_('../internals/to-object');
var lengthOfArrayLike = _dereq_('../internals/length-of-array-like');
var doesNotExceedSafeInteger = _dereq_('../internals/does-not-exceed-safe-integer');
var createProperty = _dereq_('../internals/create-property');
var arraySpeciesCreate = _dereq_('../internals/array-species-create');
var arrayMethodHasSpeciesSupport = _dereq_('../internals/array-method-has-species-support');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var V8_VERSION = _dereq_('../internals/engine-v8-version');

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

},{"../internals/array-method-has-species-support":84,"../internals/array-species-create":89,"../internals/create-property":98,"../internals/does-not-exceed-safe-integer":104,"../internals/engine-v8-version":113,"../internals/export":118,"../internals/fails":119,"../internals/is-array":142,"../internals/is-object":147,"../internals/length-of-array-like":156,"../internals/to-object":200,"../internals/well-known-symbol":213}],217:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var forEach = _dereq_('../internals/array-for-each');

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});

},{"../internals/array-for-each":81,"../internals/export":118}],218:[function(_dereq_,module,exports){
'use strict';
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var addToUnscopables = _dereq_('../internals/add-to-unscopables');
var Iterators = _dereq_('../internals/iterators');
var InternalStateModule = _dereq_('../internals/internal-state');
var defineProperty = _dereq_('../internals/object-define-property').f;
var defineIterator = _dereq_('../internals/iterator-define');
var createIterResultObject = _dereq_('../internals/create-iter-result-object');
var IS_PURE = _dereq_('../internals/is-pure');
var DESCRIPTORS = _dereq_('../internals/descriptors');

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

},{"../internals/add-to-unscopables":78,"../internals/create-iter-result-object":95,"../internals/descriptors":101,"../internals/internal-state":140,"../internals/is-pure":148,"../internals/iterator-define":153,"../internals/iterators":155,"../internals/object-define-property":163,"../internals/to-indexed-object":197}],219:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var isArray = _dereq_('../internals/is-array');

var nativeReverse = uncurryThis([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse(this);
  }
});

},{"../internals/export":118,"../internals/function-uncurry-this":126,"../internals/is-array":142}],220:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var isArray = _dereq_('../internals/is-array');
var isConstructor = _dereq_('../internals/is-constructor');
var isObject = _dereq_('../internals/is-object');
var toAbsoluteIndex = _dereq_('../internals/to-absolute-index');
var lengthOfArrayLike = _dereq_('../internals/length-of-array-like');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var createProperty = _dereq_('../internals/create-property');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var arrayMethodHasSpeciesSupport = _dereq_('../internals/array-method-has-species-support');
var nativeSlice = _dereq_('../internals/array-slice');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});

},{"../internals/array-method-has-species-support":84,"../internals/array-slice":87,"../internals/create-property":98,"../internals/export":118,"../internals/is-array":142,"../internals/is-constructor":144,"../internals/is-object":147,"../internals/length-of-array-like":156,"../internals/to-absolute-index":196,"../internals/to-indexed-object":197,"../internals/well-known-symbol":213}],221:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var getBuiltIn = _dereq_('../internals/get-built-in');
var apply = _dereq_('../internals/function-apply');
var call = _dereq_('../internals/function-call');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var fails = _dereq_('../internals/fails');
var isArray = _dereq_('../internals/is-array');
var isCallable = _dereq_('../internals/is-callable');
var isObject = _dereq_('../internals/is-object');
var isSymbol = _dereq_('../internals/is-symbol');
var arraySlice = _dereq_('../internals/array-slice');
var NATIVE_SYMBOL = _dereq_('../internals/symbol-constructor-detection');

var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = replacer;
  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
  if (!isArray(replacer)) replacer = function (key, value) {
    if (isCallable($replacer)) value = call($replacer, this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}

},{"../internals/array-slice":87,"../internals/export":118,"../internals/fails":119,"../internals/function-apply":120,"../internals/function-call":123,"../internals/function-uncurry-this":126,"../internals/get-built-in":127,"../internals/is-array":142,"../internals/is-callable":143,"../internals/is-object":147,"../internals/is-symbol":149,"../internals/symbol-constructor-detection":192}],222:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var setToStringTag = _dereq_('../internals/set-to-string-tag');

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);

},{"../internals/global":131,"../internals/set-to-string-tag":186}],223:[function(_dereq_,module,exports){
// empty

},{}],224:[function(_dereq_,module,exports){
// TODO: Remove from `core-js@4`
var $ = _dereq_('../internals/export');
var DESCRIPTORS = _dereq_('../internals/descriptors');
var create = _dereq_('../internals/object-create');

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});

},{"../internals/descriptors":101,"../internals/export":118,"../internals/object-create":161}],225:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var DESCRIPTORS = _dereq_('../internals/descriptors');
var defineProperty = _dereq_('../internals/object-define-property').f;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});

},{"../internals/descriptors":101,"../internals/export":118,"../internals/object-define-property":163}],226:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var NATIVE_SYMBOL = _dereq_('../internals/symbol-constructor-detection');
var fails = _dereq_('../internals/fails');
var getOwnPropertySymbolsModule = _dereq_('../internals/object-get-own-property-symbols');
var toObject = _dereq_('../internals/to-object');

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});

},{"../internals/export":118,"../internals/fails":119,"../internals/object-get-own-property-symbols":167,"../internals/symbol-constructor-detection":192,"../internals/to-object":200}],227:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var fails = _dereq_('../internals/fails');
var toObject = _dereq_('../internals/to-object');
var nativeGetPrototypeOf = _dereq_('../internals/object-get-prototype-of');
var CORRECT_PROTOTYPE_GETTER = _dereq_('../internals/correct-prototype-getter');

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});


},{"../internals/correct-prototype-getter":94,"../internals/export":118,"../internals/fails":119,"../internals/object-get-prototype-of":168,"../internals/to-object":200}],228:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var setPrototypeOf = _dereq_('../internals/object-set-prototype-of');

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});

},{"../internals/export":118,"../internals/object-set-prototype-of":173}],229:[function(_dereq_,module,exports){
arguments[4][223][0].apply(exports,arguments)
},{"dup":223}],230:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var call = _dereq_('../internals/function-call');
var aCallable = _dereq_('../internals/a-callable');
var newPromiseCapabilityModule = _dereq_('../internals/new-promise-capability');
var perform = _dereq_('../internals/perform');
var iterate = _dereq_('../internals/iterate');

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/a-callable":75,"../internals/export":118,"../internals/function-call":123,"../internals/iterate":150,"../internals/new-promise-capability":159,"../internals/perform":178}],231:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var call = _dereq_('../internals/function-call');
var aCallable = _dereq_('../internals/a-callable');
var newPromiseCapabilityModule = _dereq_('../internals/new-promise-capability');
var perform = _dereq_('../internals/perform');
var iterate = _dereq_('../internals/iterate');
var PROMISE_STATICS_INCORRECT_ITERATION = _dereq_('../internals/promise-statics-incorrect-iteration');

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/a-callable":75,"../internals/export":118,"../internals/function-call":123,"../internals/iterate":150,"../internals/new-promise-capability":159,"../internals/perform":178,"../internals/promise-statics-incorrect-iteration":182}],232:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var call = _dereq_('../internals/function-call');
var aCallable = _dereq_('../internals/a-callable');
var getBuiltIn = _dereq_('../internals/get-built-in');
var newPromiseCapabilityModule = _dereq_('../internals/new-promise-capability');
var perform = _dereq_('../internals/perform');
var iterate = _dereq_('../internals/iterate');

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn('AggregateError');
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/a-callable":75,"../internals/export":118,"../internals/function-call":123,"../internals/get-built-in":127,"../internals/iterate":150,"../internals/new-promise-capability":159,"../internals/perform":178}],233:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var IS_PURE = _dereq_('../internals/is-pure');
var FORCED_PROMISE_CONSTRUCTOR = _dereq_('../internals/promise-constructor-detection').CONSTRUCTOR;
var NativePromiseConstructor = _dereq_('../internals/promise-native-constructor');
var getBuiltIn = _dereq_('../internals/get-built-in');
var isCallable = _dereq_('../internals/is-callable');
var defineBuiltIn = _dereq_('../internals/define-built-in');

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

},{"../internals/define-built-in":99,"../internals/export":118,"../internals/get-built-in":127,"../internals/is-callable":143,"../internals/is-pure":148,"../internals/promise-constructor-detection":179,"../internals/promise-native-constructor":180}],234:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var IS_PURE = _dereq_('../internals/is-pure');
var IS_NODE = _dereq_('../internals/engine-is-node');
var global = _dereq_('../internals/global');
var call = _dereq_('../internals/function-call');
var defineBuiltIn = _dereq_('../internals/define-built-in');
var setPrototypeOf = _dereq_('../internals/object-set-prototype-of');
var setToStringTag = _dereq_('../internals/set-to-string-tag');
var setSpecies = _dereq_('../internals/set-species');
var aCallable = _dereq_('../internals/a-callable');
var isCallable = _dereq_('../internals/is-callable');
var isObject = _dereq_('../internals/is-object');
var anInstance = _dereq_('../internals/an-instance');
var speciesConstructor = _dereq_('../internals/species-constructor');
var task = _dereq_('../internals/task').set;
var microtask = _dereq_('../internals/microtask');
var hostReportErrors = _dereq_('../internals/host-report-errors');
var perform = _dereq_('../internals/perform');
var Queue = _dereq_('../internals/queue');
var InternalStateModule = _dereq_('../internals/internal-state');
var NativePromiseConstructor = _dereq_('../internals/promise-native-constructor');
var PromiseConstructorDetection = _dereq_('../internals/promise-constructor-detection');
var newPromiseCapabilityModule = _dereq_('../internals/new-promise-capability');

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

},{"../internals/a-callable":75,"../internals/an-instance":79,"../internals/define-built-in":99,"../internals/engine-is-node":110,"../internals/export":118,"../internals/function-call":123,"../internals/global":131,"../internals/host-report-errors":134,"../internals/internal-state":140,"../internals/is-callable":143,"../internals/is-object":147,"../internals/is-pure":148,"../internals/microtask":158,"../internals/new-promise-capability":159,"../internals/object-set-prototype-of":173,"../internals/perform":178,"../internals/promise-constructor-detection":179,"../internals/promise-native-constructor":180,"../internals/queue":183,"../internals/set-species":185,"../internals/set-to-string-tag":186,"../internals/species-constructor":190,"../internals/task":195}],235:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var IS_PURE = _dereq_('../internals/is-pure');
var NativePromiseConstructor = _dereq_('../internals/promise-native-constructor');
var fails = _dereq_('../internals/fails');
var getBuiltIn = _dereq_('../internals/get-built-in');
var isCallable = _dereq_('../internals/is-callable');
var speciesConstructor = _dereq_('../internals/species-constructor');
var promiseResolve = _dereq_('../internals/promise-resolve');
var defineBuiltIn = _dereq_('../internals/define-built-in');

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromiseConstructor && fails(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromisePrototype['finally'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'finally', method, { unsafe: true });
  }
}

},{"../internals/define-built-in":99,"../internals/export":118,"../internals/fails":119,"../internals/get-built-in":127,"../internals/is-callable":143,"../internals/is-pure":148,"../internals/promise-native-constructor":180,"../internals/promise-resolve":181,"../internals/species-constructor":190}],236:[function(_dereq_,module,exports){
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
_dereq_('../modules/es.promise.constructor');
_dereq_('../modules/es.promise.all');
_dereq_('../modules/es.promise.catch');
_dereq_('../modules/es.promise.race');
_dereq_('../modules/es.promise.reject');
_dereq_('../modules/es.promise.resolve');

},{"../modules/es.promise.all":231,"../modules/es.promise.catch":233,"../modules/es.promise.constructor":234,"../modules/es.promise.race":237,"../modules/es.promise.reject":238,"../modules/es.promise.resolve":239}],237:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var call = _dereq_('../internals/function-call');
var aCallable = _dereq_('../internals/a-callable');
var newPromiseCapabilityModule = _dereq_('../internals/new-promise-capability');
var perform = _dereq_('../internals/perform');
var iterate = _dereq_('../internals/iterate');
var PROMISE_STATICS_INCORRECT_ITERATION = _dereq_('../internals/promise-statics-incorrect-iteration');

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/a-callable":75,"../internals/export":118,"../internals/function-call":123,"../internals/iterate":150,"../internals/new-promise-capability":159,"../internals/perform":178,"../internals/promise-statics-incorrect-iteration":182}],238:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var call = _dereq_('../internals/function-call');
var newPromiseCapabilityModule = _dereq_('../internals/new-promise-capability');
var FORCED_PROMISE_CONSTRUCTOR = _dereq_('../internals/promise-constructor-detection').CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

},{"../internals/export":118,"../internals/function-call":123,"../internals/new-promise-capability":159,"../internals/promise-constructor-detection":179}],239:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var getBuiltIn = _dereq_('../internals/get-built-in');
var IS_PURE = _dereq_('../internals/is-pure');
var NativePromiseConstructor = _dereq_('../internals/promise-native-constructor');
var FORCED_PROMISE_CONSTRUCTOR = _dereq_('../internals/promise-constructor-detection').CONSTRUCTOR;
var promiseResolve = _dereq_('../internals/promise-resolve');

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});

},{"../internals/export":118,"../internals/get-built-in":127,"../internals/is-pure":148,"../internals/promise-constructor-detection":179,"../internals/promise-native-constructor":180,"../internals/promise-resolve":181}],240:[function(_dereq_,module,exports){
arguments[4][223][0].apply(exports,arguments)
},{"dup":223}],241:[function(_dereq_,module,exports){
'use strict';
var charAt = _dereq_('../internals/string-multibyte').charAt;
var toString = _dereq_('../internals/to-string');
var InternalStateModule = _dereq_('../internals/internal-state');
var defineIterator = _dereq_('../internals/iterator-define');
var createIterResultObject = _dereq_('../internals/create-iter-result-object');

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});

},{"../internals/create-iter-result-object":95,"../internals/internal-state":140,"../internals/iterator-define":153,"../internals/string-multibyte":191,"../internals/to-string":204}],242:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');

},{"../internals/well-known-symbol-define":211}],243:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var global = _dereq_('../internals/global');
var call = _dereq_('../internals/function-call');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var IS_PURE = _dereq_('../internals/is-pure');
var DESCRIPTORS = _dereq_('../internals/descriptors');
var NATIVE_SYMBOL = _dereq_('../internals/symbol-constructor-detection');
var fails = _dereq_('../internals/fails');
var hasOwn = _dereq_('../internals/has-own-property');
var isPrototypeOf = _dereq_('../internals/object-is-prototype-of');
var anObject = _dereq_('../internals/an-object');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var toPropertyKey = _dereq_('../internals/to-property-key');
var $toString = _dereq_('../internals/to-string');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');
var nativeObjectCreate = _dereq_('../internals/object-create');
var objectKeys = _dereq_('../internals/object-keys');
var getOwnPropertyNamesModule = _dereq_('../internals/object-get-own-property-names');
var getOwnPropertyNamesExternal = _dereq_('../internals/object-get-own-property-names-external');
var getOwnPropertySymbolsModule = _dereq_('../internals/object-get-own-property-symbols');
var getOwnPropertyDescriptorModule = _dereq_('../internals/object-get-own-property-descriptor');
var definePropertyModule = _dereq_('../internals/object-define-property');
var definePropertiesModule = _dereq_('../internals/object-define-properties');
var propertyIsEnumerableModule = _dereq_('../internals/object-property-is-enumerable');
var defineBuiltIn = _dereq_('../internals/define-built-in');
var shared = _dereq_('../internals/shared');
var sharedKey = _dereq_('../internals/shared-key');
var hiddenKeys = _dereq_('../internals/hidden-keys');
var uid = _dereq_('../internals/uid');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var wrappedWellKnownSymbolModule = _dereq_('../internals/well-known-symbol-wrapped');
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');
var defineSymbolToPrimitive = _dereq_('../internals/symbol-define-to-primitive');
var setToStringTag = _dereq_('../internals/set-to-string-tag');
var InternalStateModule = _dereq_('../internals/internal-state');
var $forEach = _dereq_('../internals/array-iteration').forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

},{"../internals/an-object":80,"../internals/array-iteration":83,"../internals/create-property-descriptor":97,"../internals/define-built-in":99,"../internals/descriptors":101,"../internals/export":118,"../internals/fails":119,"../internals/function-call":123,"../internals/function-uncurry-this":126,"../internals/global":131,"../internals/has-own-property":132,"../internals/hidden-keys":133,"../internals/internal-state":140,"../internals/is-pure":148,"../internals/object-create":161,"../internals/object-define-properties":162,"../internals/object-define-property":163,"../internals/object-get-own-property-descriptor":164,"../internals/object-get-own-property-names":166,"../internals/object-get-own-property-names-external":165,"../internals/object-get-own-property-symbols":167,"../internals/object-is-prototype-of":169,"../internals/object-keys":171,"../internals/object-property-is-enumerable":172,"../internals/set-to-string-tag":186,"../internals/shared":189,"../internals/shared-key":187,"../internals/symbol-constructor-detection":192,"../internals/symbol-define-to-primitive":193,"../internals/to-indexed-object":197,"../internals/to-property-key":202,"../internals/to-string":204,"../internals/uid":206,"../internals/well-known-symbol":213,"../internals/well-known-symbol-define":211,"../internals/well-known-symbol-wrapped":212}],244:[function(_dereq_,module,exports){
arguments[4][223][0].apply(exports,arguments)
},{"dup":223}],245:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var getBuiltIn = _dereq_('../internals/get-built-in');
var hasOwn = _dereq_('../internals/has-own-property');
var toString = _dereq_('../internals/to-string');
var shared = _dereq_('../internals/shared');
var NATIVE_SYMBOL_REGISTRY = _dereq_('../internals/symbol-registry-detection');

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});

},{"../internals/export":118,"../internals/get-built-in":127,"../internals/has-own-property":132,"../internals/shared":189,"../internals/symbol-registry-detection":194,"../internals/to-string":204}],246:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');

},{"../internals/well-known-symbol-define":211}],247:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');

},{"../internals/well-known-symbol-define":211}],248:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');

},{"../internals/well-known-symbol-define":211}],249:[function(_dereq_,module,exports){
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
_dereq_('../modules/es.symbol.constructor');
_dereq_('../modules/es.symbol.for');
_dereq_('../modules/es.symbol.key-for');
_dereq_('../modules/es.json.stringify');
_dereq_('../modules/es.object.get-own-property-symbols');

},{"../modules/es.json.stringify":221,"../modules/es.object.get-own-property-symbols":226,"../modules/es.symbol.constructor":243,"../modules/es.symbol.for":245,"../modules/es.symbol.key-for":250}],250:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var hasOwn = _dereq_('../internals/has-own-property');
var isSymbol = _dereq_('../internals/is-symbol');
var tryToString = _dereq_('../internals/try-to-string');
var shared = _dereq_('../internals/shared');
var NATIVE_SYMBOL_REGISTRY = _dereq_('../internals/symbol-registry-detection');

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});

},{"../internals/export":118,"../internals/has-own-property":132,"../internals/is-symbol":149,"../internals/shared":189,"../internals/symbol-registry-detection":194,"../internals/try-to-string":205}],251:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');

},{"../internals/well-known-symbol-define":211}],252:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');

},{"../internals/well-known-symbol-define":211}],253:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');

},{"../internals/well-known-symbol-define":211}],254:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');

},{"../internals/well-known-symbol-define":211}],255:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');

},{"../internals/well-known-symbol-define":211}],256:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');

},{"../internals/well-known-symbol-define":211}],257:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');
var defineSymbolToPrimitive = _dereq_('../internals/symbol-define-to-primitive');

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

},{"../internals/symbol-define-to-primitive":193,"../internals/well-known-symbol-define":211}],258:[function(_dereq_,module,exports){
var getBuiltIn = _dereq_('../internals/get-built-in');
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');
var setToStringTag = _dereq_('../internals/set-to-string-tag');

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag(getBuiltIn('Symbol'), 'Symbol');

},{"../internals/get-built-in":127,"../internals/set-to-string-tag":186,"../internals/well-known-symbol-define":211}],259:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');

},{"../internals/well-known-symbol-define":211}],260:[function(_dereq_,module,exports){
// TODO: Remove from `core-js@4`
_dereq_('../modules/es.aggregate-error');

},{"../modules/es.aggregate-error":215}],261:[function(_dereq_,module,exports){
// TODO: Remove from `core-js@4`
_dereq_('../modules/es.promise.all-settled.js');

},{"../modules/es.promise.all-settled.js":230}],262:[function(_dereq_,module,exports){
// TODO: Remove from `core-js@4`
_dereq_('../modules/es.promise.any');

},{"../modules/es.promise.any":232}],263:[function(_dereq_,module,exports){
'use strict';
// TODO: Remove from `core-js@4`
var $ = _dereq_('../internals/export');
var newPromiseCapabilityModule = _dereq_('../internals/new-promise-capability');
var perform = _dereq_('../internals/perform');

// `Promise.try` method
// https://github.com/tc39/proposal-promise-try
$({ target: 'Promise', stat: true, forced: true }, {
  'try': function (callbackfn) {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    var result = perform(callbackfn);
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});

},{"../internals/export":118,"../internals/new-promise-capability":159,"../internals/perform":178}],264:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');

},{"../internals/well-known-symbol-define":211}],265:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');

},{"../internals/well-known-symbol-define":211}],266:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.matcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('matcher');

},{"../internals/well-known-symbol-define":211}],267:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.metadataKey` well-known symbol
// https://github.com/tc39/proposal-decorator-metadata
defineWellKnownSymbol('metadataKey');

},{"../internals/well-known-symbol-define":211}],268:[function(_dereq_,module,exports){
// TODO: Remove from `core-js@4`
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.metadata` well-known symbol
// https://github.com/tc39/proposal-decorators
defineWellKnownSymbol('metadata');

},{"../internals/well-known-symbol-define":211}],269:[function(_dereq_,module,exports){
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');

},{"../internals/well-known-symbol-define":211}],270:[function(_dereq_,module,exports){
// TODO: remove from `core-js@4`
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');

},{"../internals/well-known-symbol-define":211}],271:[function(_dereq_,module,exports){
// TODO: remove from `core-js@4`
var defineWellKnownSymbol = _dereq_('../internals/well-known-symbol-define');

defineWellKnownSymbol('replaceAll');

},{"../internals/well-known-symbol-define":211}],272:[function(_dereq_,module,exports){
_dereq_('../modules/es.array.iterator');
var DOMIterables = _dereq_('../internals/dom-iterables');
var global = _dereq_('../internals/global');
var classof = _dereq_('../internals/classof');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var Iterators = _dereq_('../internals/iterators');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}

},{"../internals/classof":92,"../internals/create-non-enumerable-property":96,"../internals/dom-iterables":105,"../internals/global":131,"../internals/iterators":155,"../internals/well-known-symbol":213,"../modules/es.array.iterator":218}],273:[function(_dereq_,module,exports){
var parent = _dereq_('../../../es/array/virtual/for-each');

module.exports = parent;

},{"../../../es/array/virtual/for-each":55}],274:[function(_dereq_,module,exports){
_dereq_('../../modules/web.dom-collections.iterator');
var classof = _dereq_('../../internals/classof');
var hasOwn = _dereq_('../../internals/has-own-property');
var isPrototypeOf = _dereq_('../../internals/object-is-prototype-of');
var method = _dereq_('../array/virtual/for-each');

var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.forEach)
    || hasOwn(DOMIterables, classof(it)) ? method : own;
};

},{"../../internals/classof":92,"../../internals/has-own-property":132,"../../internals/object-is-prototype-of":169,"../../modules/web.dom-collections.iterator":272,"../array/virtual/for-each":273}],275:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/instance/reverse');

module.exports = parent;

},{"../../es/instance/reverse":58}],276:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/instance/slice');

module.exports = parent;

},{"../../es/instance/slice":59}],277:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/object/create');

module.exports = parent;

},{"../../es/object/create":60}],278:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/object/define-property');

module.exports = parent;

},{"../../es/object/define-property":61}],279:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/object/get-prototype-of');

module.exports = parent;

},{"../../es/object/get-prototype-of":62}],280:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/object/set-prototype-of');

module.exports = parent;

},{"../../es/object/set-prototype-of":63}],281:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/promise');
_dereq_('../../modules/web.dom-collections.iterator');

module.exports = parent;

},{"../../es/promise":64,"../../modules/web.dom-collections.iterator":272}],282:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/symbol');
_dereq_('../../modules/web.dom-collections.iterator');

module.exports = parent;

},{"../../es/symbol":65,"../../modules/web.dom-collections.iterator":272}],283:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/symbol/iterator');
_dereq_('../../modules/web.dom-collections.iterator');

module.exports = parent;

},{"../../es/symbol/iterator":66,"../../modules/web.dom-collections.iterator":272}]},{},[1])(1)
});
