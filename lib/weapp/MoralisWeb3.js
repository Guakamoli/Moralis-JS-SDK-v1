"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _Array$isArray = require("@babel/runtime-corejs3/core-js-stable/array/is-array");
var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");
var _Array$from = require("@babel/runtime-corejs3/core-js-stable/array/from");
var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");
var _reverseInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reverse");
var _Promise = require("@babel/runtime-corejs3/core-js-stable/promise");
var _Object$setPrototypeOf = require("@babel/runtime-corejs3/core-js-stable/object/set-prototype-of");
var _typeof = require("@babel/runtime-corejs3/helpers/typeof");
var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");
var _Object$getPrototypeOf = require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of");
var _Object$create = require("@babel/runtime-corejs3/core-js-stable/object/create");
var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EthereumEvents = void 0;
var _bind = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/bind"));
var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));
var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));
var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));
var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));
var _construct2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/construct"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));
var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));
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
var _context23, _context24, _context25, _context26;
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];
  if (!it) {
    if (_Array$isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (_e2) {
      didErr = true;
      err = _e2;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  var _context29;
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = _sliceInstanceProperty(_context29 = Object.prototype.toString.call(o)).call(_context29, 8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
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
    var _context27;
    _forEachInstanceProperty2(_context27 = ["next", "throw", "return"]).call(_context27, function (method) {
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
    }], _forEachInstanceProperty2(tryLocsList).call(tryLocsList, pushTryEntry, this), this.reset(!0);
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
      var _context28;
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, _forEachInstanceProperty2(_context28 = this.tryEntries).call(_context28, resetTryEntry), !skipTempReset) for (var name in this) {
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
  return (0, _filter.default)(arr).call(arr, function (v, i) {
    return (0, _indexOf.default)(arr).call(arr, v) === i;
  });
}
var MoralisWeb3 = /*#__PURE__*/function () {
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
    value: function () {
      var _enable2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(options) {
        var Web3Provider, web3Provider, web3;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Web3Provider = MoralisWeb3.getWeb3Provider(options);
                web3Provider = new Web3Provider();
                _context.next = 4;
                return web3Provider.activate(options);
              case 4:
                web3 = _context.sent;
                this.activeWeb3Provider = web3Provider;
                return _context.abrupt("return", web3);
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      return function () {
        return _enable2.apply(this, arguments);
      };
    }()
  }, {
    key: "_enable",
    value: function () {
      var _enable3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(options) {
        var web3;
        return _regeneratorRuntime().wrap(function (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.enable(options);
              case 2:
                web3 = _context2.sent;
                this.web3 = web3;
                return _context2.abrupt("return", web3);
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      return function () {
        return _enable3.apply(this, arguments);
      };
    }()
  }, {
    key: "isDotAuth",
    value: function (options) {
      switch (options === null || options === void 0 ? void 0 : options.type) {
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
      switch (options === null || options === void 0 ? void 0 : options.type) {
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
      switch (options === null || options === void 0 ? void 0 : options.provider) {
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
      var _cleanup = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function (_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.activeWeb3Provider) {
                  _context3.next = 3;
                  break;
                }
                _context3.next = 3;
                return this.activeWeb3Provider.deactivate();
              case 3:
                // Prevent a bug when there is stale data active
                _MoralisWalletConnectProvider.default.cleanupStaleData();
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      return function () {
        return _cleanup.apply(this, arguments);
      };
    }()
  }, {
    key: "authenticate",
    value: function () {
      var _authenticate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(options) {
        var _context4, _user$get;
        var isLoggedIn, web3, message, accounts, accountsLower, _accountsLower, ethAddress, chainId, data, signature, variables, authData, user;
        return _regeneratorRuntime().wrap(function (_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _ParseUser.default.currentAsync();
              case 2:
                isLoggedIn = _context5.sent;
                if (!isLoggedIn) {
                  _context5.next = 6;
                  break;
                }
                _context5.next = 6;
                return _ParseUser.default.logOut();
              case 6:
                _context5.next = 8;
                return MoralisWeb3.cleanup();
              case 8:
                if (!MoralisWeb3.isDotAuth(options)) {
                  _context5.next = 10;
                  break;
                }
                return _context5.abrupt("return", _MoralisDot.default.authenticate(options));
              case 10:
                if (!MoralisWeb3.isElrondAuth(options)) {
                  _context5.next = 12;
                  break;
                }
                return _context5.abrupt("return", _MoralisErd.default.authenticate(options));
              case 12:
                _context5.next = 14;
                return this._enable(options);
              case 14:
                web3 = _context5.sent;
                message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
                _context5.next = 18;
                return web3.eth.getAccounts();
              case 18:
                accounts = _context5.sent;
                accountsLower = (0, _map.default)(accounts).call(accounts, function (v) {
                  return v.toLowerCase();
                });
                _accountsLower = (0, _slicedToArray2.default)(accountsLower, 1), ethAddress = _accountsLower[0];
                _context5.next = 23;
                return this.getChainId();
              case 23:
                chainId = _context5.sent;
                if (!(options !== null && options !== void 0 && options.messageFetcher)) {
                  _context5.next = 28;
                  break;
                }
                _context5.next = 27;
                return options.messageFetcher({
                  address: accountsLower[0],
                  chain: (0, _parseInt2.default)(chainId, 10),
                  networkType: 'evm'
                });
              case 27:
                message = _context5.sent;
              case 28:
                if (message) {
                  _context5.next = 30;
                  break;
                }
                throw new Error('Message not found');
              case 30:
                _context5.next = 32;
                return (0, _createSigningData.default)(message);
              case 32:
                data = _context5.sent;
                if (ethAddress) {
                  _context5.next = 35;
                  break;
                }
                throw new Error('Address not found');
              case 35:
                _context5.next = 37;
                return web3.eth.personal.sign(data, ethAddress, '');
              case 37:
                signature = _context5.sent;
                if (signature) {
                  _context5.next = 40;
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
                  operationName: options === null || options === void 0 ? void 0 : options.operationName,
                  query: options === null || options === void 0 ? void 0 : options.query
                };
                _context5.next = 44;
                return _ParseUser.default.logInWith('moralisEth', {
                  authData: authData
                });
              case 44:
                user = _context5.sent;
                _context5.next = 47;
                return user.setACL(new _ParseACL.default(user));
              case 47:
                if (user) {
                  _context5.next = 49;
                  break;
                }
                throw new Error('Could not get user');
              case 49:
                user.set('accounts', uniq((0, _concat.default)(_context4 = []).call(_context4, accountsLower, (_user$get = user.get('accounts')) !== null && _user$get !== void 0 ? _user$get : [])));
                user.set('ethAddress', ethAddress);
                _context5.next = 53;
                return user.save(null, options);
              case 53:
                return _context5.abrupt("return", user);
              case 54:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee4, this);
      }));
      return function () {
        return _authenticate.apply(this, arguments);
      };
    }()
  }, {
    key: "link",
    value: function () {
      var _link = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(account, options) {
        var _context6, _user$get2;
        var web3, data, user, ethAddress, EthAddress, query, ethAddressRecord, signature, authData;
        return _regeneratorRuntime().wrap(function (_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return MoralisWeb3._enable(options);
              case 2:
                web3 = _context7.sent;
                data = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
                _context7.next = 6;
                return _ParseUser.default.currentAsync();
              case 6:
                user = _context7.sent;
                ethAddress = account.toLowerCase();
                EthAddress = _ParseObject.default.extend('_EthAddress');
                query = new _ParseQuery.default(EthAddress);
                _context7.next = 12;
                return query.get(ethAddress).catch(function () {
                  return null;
                });
              case 12:
                ethAddressRecord = _context7.sent;
                if (ethAddressRecord) {
                  _context7.next = 20;
                  break;
                }
                _context7.next = 16;
                return web3.eth.personal.sign(data, account, '');
              case 16:
                signature = _context7.sent;
                authData = {
                  id: ethAddress,
                  signature: signature,
                  data: data
                };
                _context7.next = 20;
                return user.linkWith('moralisEth', {
                  authData: authData
                });
              case 20:
                user.set('accounts', uniq((0, _concat.default)(_context6 = [ethAddress]).call(_context6, (_user$get2 = user.get('accounts')) !== null && _user$get2 !== void 0 ? _user$get2 : [])));
                user.set('ethAddress', ethAddress);
                _context7.next = 24;
                return user.save(null, options);
              case 24:
                return _context7.abrupt("return", user);
              case 25:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee5);
      }));
      return function () {
        return _link.apply(this, arguments);
      };
    }()
  }, {
    key: "unlink",
    value: function () {
      var _unlink = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(account) {
        var _user$get3;
        var accountsLower, EthAddress, query, ethAddressRecord, user, accounts, nextAccounts;
        return _regeneratorRuntime().wrap(function (_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                accountsLower = account.toLowerCase();
                EthAddress = _ParseObject.default.extend('_EthAddress');
                query = new _ParseQuery.default(EthAddress);
                _context8.next = 5;
                return query.get(accountsLower);
              case 5:
                ethAddressRecord = _context8.sent;
                _context8.next = 8;
                return ethAddressRecord.destroy();
              case 8:
                _context8.next = 10;
                return _ParseUser.default.currentAsync();
              case 10:
                user = _context8.sent;
                accounts = (_user$get3 = user.get('accounts')) !== null && _user$get3 !== void 0 ? _user$get3 : [];
                nextAccounts = (0, _filter.default)(accounts).call(accounts, function (v) {
                  return v !== accountsLower;
                });
                user.set('accounts', nextAccounts);
                user.set('ethAddress', nextAccounts[0]);
                _context8.next = 17;
                return user._unlinkFrom('moralisEth');
              case 17:
                _context8.next = 19;
                return user.save();
              case 19:
                return _context8.abrupt("return", user);
              case 20:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee6);
      }));
      return function () {
        return _unlink.apply(this, arguments);
      };
    }()
  }, {
    key: "initPlugins",
    value: function () {
      var _initPlugins = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(installedPlugins) {
        var specs, allPlugins;
        return _regeneratorRuntime().wrap(function (_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.t0 = installedPlugins;
                if (_context12.t0) {
                  _context12.next = 5;
                  break;
                }
                _context12.next = 4;
                return (0, _Cloud.run)('getPluginSpecs');
              case 4:
                _context12.t0 = _context12.sent;
              case 5:
                specs = _context12.t0;
                if (!this.Plugins) this.Plugins = {};
                if (specs) {
                  _context12.next = 9;
                  break;
                }
                return _context12.abrupt("return");
              case 9:
                allPlugins = this.Plugins;
                (0, _forEach.default)(specs).call(specs, function (plugin) {
                  var _context9;
                  allPlugins[plugin.name] = {};
                  (0, _forEach.default)(_context9 = plugin.functions).call(_context9, function (f) {
                    allPlugins[plugin.name][f] = /*#__PURE__*/function () {
                      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(params, options) {
                        var _context10;
                        var response, error, triggerReturn;
                        return _regeneratorRuntime().wrap(function (_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                if (!options) options = {};
                                _context11.next = 3;
                                return (0, _Cloud.run)((0, _concat.default)(_context10 = "".concat(plugin.name, "_")).call(_context10, f), params);
                              case 3:
                                response = _context11.sent;
                                if (response.data.success) {
                                  _context11.next = 7;
                                  break;
                                }
                                error = (0, _stringify.default)(response.data.data, null, 2);
                                throw new Error("Something went wrong\n".concat(error));
                              case 7:
                                if (!(options.disableTriggers !== true)) {
                                  _context11.next = 13;
                                  break;
                                }
                                _context11.next = 10;
                                return this.handleTriggers(response.data.result.triggers, response.data.result.data);
                              case 10:
                                triggerReturn = _context11.sent;
                                if (!triggerReturn) {
                                  _context11.next = 13;
                                  break;
                                }
                                return _context11.abrupt("return", triggerReturn);
                              case 13:
                                return _context11.abrupt("return", response.data.result);
                              case 14:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee7);
                      }));
                      return function () {
                        return _ref.apply(this, arguments);
                      };
                    }();
                  });
                });
                this.Plugins = allPlugins;
              case 12:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee8, this);
      }));
      return function () {
        return _initPlugins.apply(this, arguments);
      };
    }()
  }, {
    key: "handleTriggers",
    value: function () {
      var _handleTriggers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(triggersArray, payload) {
        var _triggersArray$i2, _triggersArray$i2$opt, _triggersArray$i3, _triggersArray$i3$opt, _triggersArray$i4, _triggersArray$i5, _triggersArray$i5$opt, _triggersArray$i6, _triggersArray$i7, _triggersArray$i8, _triggersArray$i9, _triggersArray$i10, _triggersArray$i11, _triggersArray$i12, _triggersArray$i13, _triggersArray$i14, _triggersArray$i15, _triggersArray$i16, _triggersArray$i17, _triggersArray$i18, _triggersArray$i19;
        var i, _triggersArray$i, response;
        return _regeneratorRuntime().wrap(function (_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (triggersArray) {
                  _context13.next = 2;
                  break;
                }
                return _context13.abrupt("return");
              case 2:
                i = 0;
              case 3:
                if (!(i < triggersArray.length)) {
                  _context13.next = 47;
                  break;
                }
                response = void 0;
                _context13.t0 = (_triggersArray$i = triggersArray[i]) === null || _triggersArray$i === void 0 ? void 0 : _triggersArray$i.name;
                _context13.next = _context13.t0 === 'openUrl' ? 8 : _context13.t0 === 'web3Transaction' ? 15 : _context13.t0 === 'web3Sign' ? 27 : 43;
                break;
              case 8:
                if (((_triggersArray$i2 = triggersArray[i]) === null || _triggersArray$i2 === void 0 ? void 0 : (_triggersArray$i2$opt = _triggersArray$i2.options) === null || _triggersArray$i2$opt === void 0 ? void 0 : _triggersArray$i2$opt.newTab) === true || !((_triggersArray$i3 = triggersArray[i]) !== null && _triggersArray$i3 !== void 0 && (_triggersArray$i3$opt = _triggersArray$i3.options) !== null && _triggersArray$i3$opt !== void 0 && _triggersArray$i3$opt.hasOwnProperty('newTab'))) response = window.open((_triggersArray$i4 = triggersArray[i]) === null || _triggersArray$i4 === void 0 ? void 0 : _triggersArray$i4.data);
                if (((_triggersArray$i5 = triggersArray[i]) === null || _triggersArray$i5 === void 0 ? void 0 : (_triggersArray$i5$opt = _triggersArray$i5.options) === null || _triggersArray$i5$opt === void 0 ? void 0 : _triggersArray$i5$opt.newTab) === false) response = window.open((_triggersArray$i6 = triggersArray[i]) === null || _triggersArray$i6 === void 0 ? void 0 : _triggersArray$i6.data, '_self');
                if (!(((_triggersArray$i7 = triggersArray[i]) === null || _triggersArray$i7 === void 0 ? void 0 : _triggersArray$i7.shouldReturnPayload) === true)) {
                  _context13.next = 12;
                  break;
                }
                return _context13.abrupt("return", {
                  payload: payload,
                  response: response
                });
              case 12:
                if (!(((_triggersArray$i8 = triggersArray[i]) === null || _triggersArray$i8 === void 0 ? void 0 : _triggersArray$i8.shouldReturnResponse) === true)) {
                  _context13.next = 14;
                  break;
                }
                return _context13.abrupt("return", response);
              case 14:
                return _context13.abrupt("break", 44);
              case 15:
                if (this.ensureWeb3IsInstalled()) {
                  _context13.next = 17;
                  break;
                }
                throw new Error(ERROR_WEB3_MISSING);
              case 17:
                if (!(((_triggersArray$i9 = triggersArray[i]) === null || _triggersArray$i9 === void 0 ? void 0 : _triggersArray$i9.shouldAwait) === true)) {
                  _context13.next = 21;
                  break;
                }
                _context13.next = 20;
                return this.web3.eth.sendTransaction((_triggersArray$i10 = triggersArray[i]) === null || _triggersArray$i10 === void 0 ? void 0 : _triggersArray$i10.data);
              case 20:
                response = _context13.sent;
              case 21:
                if (((_triggersArray$i11 = triggersArray[i]) === null || _triggersArray$i11 === void 0 ? void 0 : _triggersArray$i11.shouldAwait) === false) response = this.web3.eth.sendTransaction((_triggersArray$i12 = triggersArray[i]) === null || _triggersArray$i12 === void 0 ? void 0 : _triggersArray$i12.data);
                if (!(((_triggersArray$i13 = triggersArray[i]) === null || _triggersArray$i13 === void 0 ? void 0 : _triggersArray$i13.shouldReturnPayload) === true)) {
                  _context13.next = 24;
                  break;
                }
                return _context13.abrupt("return", {
                  payload: payload,
                  response: response
                });
              case 24:
                if (!(((_triggersArray$i14 = triggersArray[i]) === null || _triggersArray$i14 === void 0 ? void 0 : _triggersArray$i14.shouldReturnResponse) === true)) {
                  _context13.next = 26;
                  break;
                }
                return _context13.abrupt("return", response);
              case 26:
                return _context13.abrupt("break", 44);
              case 27:
                if (this.ensureWeb3IsInstalled()) {
                  _context13.next = 29;
                  break;
                }
                throw new Error(ERROR_WEB3_MISSING);
              case 29:
                if (triggersArray[i].message) {
                  _context13.next = 31;
                  break;
                }
                throw new Error('web3Sign trigger does not have a message to sign');
              case 31:
                if (!(!triggersArray[i].signer || !this.web3.utils.isAddress(triggersArray[i].signer))) {
                  _context13.next = 33;
                  break;
                }
                throw new Error('web3Sign trigger signer address missing or invalid');
              case 33:
                if (!(((_triggersArray$i15 = triggersArray[i]) === null || _triggersArray$i15 === void 0 ? void 0 : _triggersArray$i15.shouldAwait) === true)) {
                  _context13.next = 37;
                  break;
                }
                _context13.next = 36;
                return this.web3.eth.personal.sign(triggersArray[i].message, triggersArray[i].signer);
              case 36:
                response = _context13.sent;
              case 37:
                if (((_triggersArray$i16 = triggersArray[i]) === null || _triggersArray$i16 === void 0 ? void 0 : _triggersArray$i16.shouldAwait) === false) response = this.web3.eth.personal.sign(triggersArray[i].message, triggersArray[i].signer);
                if (!(((_triggersArray$i17 = triggersArray[i]) === null || _triggersArray$i17 === void 0 ? void 0 : _triggersArray$i17.shouldReturnPayload) === true)) {
                  _context13.next = 40;
                  break;
                }
                return _context13.abrupt("return", {
                  payload: payload,
                  response: response
                });
              case 40:
                if (!(((_triggersArray$i18 = triggersArray[i]) === null || _triggersArray$i18 === void 0 ? void 0 : _triggersArray$i18.shouldReturnResponse) === true)) {
                  _context13.next = 42;
                  break;
                }
                return _context13.abrupt("return", response);
              case 42:
                return _context13.abrupt("break", 44);
              case 43:
                throw new Error("Unknown trigger: \"".concat((_triggersArray$i19 = triggersArray[i]) === null || _triggersArray$i19 === void 0 ? void 0 : _triggersArray$i19.name, "\""));
              case 44:
                i++;
                _context13.next = 3;
                break;
              case 47:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee9, this);
      }));
      return function () {
        return _handleTriggers.apply(this, arguments);
      };
    }()
  }, {
    key: "getAllERC20",
    value: function () {
      var _getAllERC = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var _ref2,
          chain,
          address,
          result,
          _args10 = arguments;
        return _regeneratorRuntime().wrap(function (_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _ref2 = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {}, chain = _ref2.chain, address = _ref2.address;
                _context14.next = 3;
                return (0, _Cloud.run)('getAllERC20', {
                  chain: chain,
                  address: address
                });
              case 3:
                result = _context14.sent;
                return _context14.abrupt("return", result);
              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee10);
      }));
      return function () {
        return _getAllERC.apply(this, arguments);
      };
    }()
  }, {
    key: "getERC20",
    value: function () {
      var _getERC = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var _ref3,
          chain,
          address,
          symbol,
          tokenAddress,
          result,
          _args11 = arguments;
        return _regeneratorRuntime().wrap(function (_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _ref3 = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : {}, chain = _ref3.chain, address = _ref3.address, symbol = _ref3.symbol, tokenAddress = _ref3.tokenAddress;
                result = (0, _Cloud.run)('getERC20', {
                  chain: chain,
                  address: address,
                  symbol: symbol,
                  tokenAddress: tokenAddress
                });
                return _context15.abrupt("return", result);
              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee11);
      }));
      return function () {
        return _getERC.apply(this, arguments);
      };
    }()
  }, {
    key: "getNFTs",
    value: function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref4$chain = _ref4.chain,
        chain = _ref4$chain === void 0 ? 'Eth' : _ref4$chain,
        _ref4$address = _ref4.address,
        address = _ref4$address === void 0 ? '' : _ref4$address;
      return (0, _Cloud.run)('getNFTs_old', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "getNFTsCount",
    value: function () {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref5$chain = _ref5.chain,
        chain = _ref5$chain === void 0 ? 'Eth' : _ref5$chain,
        _ref5$address = _ref5.address,
        address = _ref5$address === void 0 ? '' : _ref5$address;
      return (0, _Cloud.run)('getNFTsCount_old', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "getTransactions",
    value: function () {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref6$chain = _ref6.chain,
        chain = _ref6$chain === void 0 ? 'Eth' : _ref6$chain,
        _ref6$address = _ref6.address,
        address = _ref6$address === void 0 ? '' : _ref6$address,
        _ref6$order = _ref6.order,
        order = _ref6$order === void 0 ? 'desc' : _ref6$order;
      return (0, _Cloud.run)('getTransactions', {
        chain: chain,
        address: address,
        order: order
      });
    }
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref7$chain = _ref7.chain,
        chain = _ref7$chain === void 0 ? 'Eth' : _ref7$chain,
        _ref7$address = _ref7.address,
        address = _ref7$address === void 0 ? '' : _ref7$address;
      return (0, _Cloud.run)('getTransactionsCount', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "transfer",
    value: function () {
      var _transfer = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var _ref8,
          _ref8$type,
          type,
          _ref8$receiver,
          receiver,
          _ref8$contractAddress,
          contractAddress,
          contract_address,
          _ref8$amount,
          amount,
          _ref8$tokenId,
          tokenId,
          token_id,
          _ref8$system,
          system,
          _ref8$awaitReceipt,
          awaitReceipt,
          options,
          web3,
          sender,
          transferOperation,
          customToken,
          _args12 = arguments;
        return _regeneratorRuntime().wrap(function (_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _ref8 = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {}, _ref8$type = _ref8.type, type = _ref8$type === void 0 ? 'native' : _ref8$type, _ref8$receiver = _ref8.receiver, receiver = _ref8$receiver === void 0 ? '' : _ref8$receiver, _ref8$contractAddress = _ref8.contractAddress, contractAddress = _ref8$contractAddress === void 0 ? '' : _ref8$contractAddress, contract_address = _ref8.contract_address, _ref8$amount = _ref8.amount, amount = _ref8$amount === void 0 ? '' : _ref8$amount, _ref8$tokenId = _ref8.tokenId, tokenId = _ref8$tokenId === void 0 ? '' : _ref8$tokenId, token_id = _ref8.token_id, _ref8$system = _ref8.system, system = _ref8$system === void 0 ? 'evm' : _ref8$system, _ref8$awaitReceipt = _ref8.awaitReceipt, awaitReceipt = _ref8$awaitReceipt === void 0 ? true : _ref8$awaitReceipt;
                // Allow snake-case for backwards compatibility
                // eslint-disable-next-line camelcase
                contractAddress = contractAddress || contract_address;
                // eslint-disable-next-line camelcase
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
                  _context16.next = 8;
                  break;
                }
                throw new Error(ERROR_WEB3_MISSING);
              case 8:
                web3 = this.web3;
                _context16.next = 11;
                return web3.eth.getAccounts();
              case 11:
                _context16.next = 13;
                return _context16.sent[0];
              case 13:
                sender = _context16.sent;
                if (sender) {
                  _context16.next = 16;
                  break;
                }
                throw new Error('Sender address not found');
              case 16:
                if (type !== 'native') customToken = new web3.eth.Contract(_TransferUtils.default.abi[type], contractAddress);
                _context16.t0 = type;
                _context16.next = _context16.t0 === 'native' ? 20 : _context16.t0 === 'erc20' ? 22 : _context16.t0 === 'erc721' ? 24 : _context16.t0 === 'erc1155' ? 26 : 28;
                break;
              case 20:
                transferOperation = web3.eth.sendTransaction({
                  from: sender,
                  to: receiver,
                  value: amount
                });
                return _context16.abrupt("break", 29);
              case 22:
                transferOperation = customToken.methods.transfer(receiver, amount).send({
                  from: sender
                });
                return _context16.abrupt("break", 29);
              case 24:
                transferOperation = customToken.methods.safeTransferFrom(sender, receiver, tokenId).send({
                  from: sender
                });
                return _context16.abrupt("break", 29);
              case 26:
                transferOperation = customToken.methods.safeTransferFrom(sender, receiver, tokenId, amount, '0x').send({
                  from: sender
                });
                return _context16.abrupt("break", 29);
              case 28:
                throw new Error("Unknown transfer type: \"".concat(type, "\""));
              case 29:
                if (!awaitReceipt) {
                  _context16.next = 31;
                  break;
                }
                return _context16.abrupt("return", transferOperation);
              case 31:
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
                return _context16.abrupt("return", transferEvents);
              case 33:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee12, this);
      }));
      return function () {
        return _transfer.apply(this, arguments);
      };
    }()
  }, {
    key: "executeFunction",
    value: function () {
      var _executeFunction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var _context17;
        var _ref9,
          contractAddress,
          abi,
          functionName,
          msgValue,
          _ref9$params,
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
        return _regeneratorRuntime().wrap(function (_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _ref9 = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {}, contractAddress = _ref9.contractAddress, abi = _ref9.abi, functionName = _ref9.functionName, msgValue = _ref9.msgValue, _ref9$params = _ref9.params, params = _ref9$params === void 0 ? {} : _ref9$params;
                if (this.ensureWeb3IsInstalled()) {
                  _context18.next = 3;
                  break;
                }
                throw new Error(ERROR_WEB3_MISSING);
              case 3:
                web3 = this.web3;
                contractOptions = {};
                functionData = (0, _find.default)(abi).call(abi, function (x) {
                  return x.name === functionName;
                });
                if (functionData) {
                  _context18.next = 8;
                  break;
                }
                throw new Error('Function does not exist in abi');
              case 8:
                stateMutability = functionData === null || functionData === void 0 ? void 0 : functionData.stateMutability;
                isReadFunction = stateMutability === 'view' || stateMutability === 'pure';
                if (isReadFunction) {
                  _context18.next = 20;
                  break;
                }
                if (params.from) {
                  _context18.next = 20;
                  break;
                }
                _context18.next = 14;
                return web3.eth.getAccounts();
              case 14:
                _context18.next = 16;
                return _context18.sent[0];
              case 16:
                currentAddress = _context18.sent;
                if (currentAddress) {
                  _context18.next = 19;
                  break;
                }
                throw new Error('From address is required');
              case 19:
                contractOptions.from = currentAddress;
              case 20:
                errors = [];
                _iterator = _createForOfIteratorHelper(functionData.inputs);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    input = _step.value;
                    value = params[input.name];
                    if (!(typeof value !== 'undefined' && value)) {
                      errors.push("".concat(input.name, " is required"));
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                if (!(errors.length > 0)) {
                  _context18.next = 25;
                  break;
                }
                throw errors;
              case 25:
                parsedInputs = (0, _map.default)(_context17 = functionData.inputs).call(_context17, function (x) {
                  return params[x.name];
                });
                contract = new web3.eth.Contract(abi, contractAddress, contractOptions);
                customFunction = contract.methods[functionName];
                if (!isReadFunction) {
                  _context18.next = 34;
                  break;
                }
                _context18.next = 31;
                return customFunction.apply(void 0, (0, _toConsumableArray2.default)((0, _values.default)(parsedInputs))).call();
              case 31:
                _context18.t0 = _context18.sent;
                _context18.next = 37;
                break;
              case 34:
                _context18.next = 36;
                return customFunction.apply(void 0, (0, _toConsumableArray2.default)((0, _values.default)(parsedInputs))).send(msgValue ? {
                  value: msgValue
                } : null);
              case 36:
                _context18.t0 = _context18.sent;
              case 37:
                response = _context18.t0;
                return _context18.abrupt("return", response);
              case 39:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee13, this);
      }));
      return function () {
        return _executeFunction.apply(this, arguments);
      };
    }()
  }, {
    key: "getSigningData",
    value: function () {
      return "Moralis Authentication";
      // const data = `Moralis Authentication`;
      // return data;
    }
  }, {
    key: "on",
    value: function (eventName, cb) {
      var _window = window,
        ethereum = _window.ethereum;
      if (!ethereum || !ethereum.on) {
        // eslint-disable-next-line no-console
        console.warn(WARNING);
        return function () {
          // eslint-disable-next-line no-console
          console.warn(WARNING);
        };
      }
      ethereum.on(eventName, cb);
      return function () {
        // eslint-disable-next-line no-console
        console.warn('UNSUB NOT SUPPORTED');
      };
    }
  }, {
    key: "getChainId",
    value: function () {
      var _getChainId = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        return _regeneratorRuntime().wrap(function (_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!this.ensureWeb3IsInstalled()) {
                  _context19.next = 4;
                  break;
                }
                _context19.next = 3;
                return this.web3.eth.net.getId();
              case 3:
                return _context19.abrupt("return", _context19.sent);
              case 4:
                throw new Error(ERROR_WEB3_MISSING);
              case 5:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee14, this);
      }));
      return function () {
        return _getChainId.apply(this, arguments);
      };
    }()
  }, {
    key: "ensureWeb3IsInstalled",
    value: function () {
      return this.web3 ? true : false;
    }
  }, {
    key: "isMetaMaskInstalled",
    value: function () {
      var _isMetaMaskInstalled = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        return _regeneratorRuntime().wrap(function (_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return (0, _detectProvider.default)();
              case 2:
                if (!_context20.sent) {
                  _context20.next = 6;
                  break;
                }
                _context20.t0 = true;
                _context20.next = 7;
                break;
              case 6:
                _context20.t0 = false;
              case 7:
                return _context20.abrupt("return", _context20.t0);
              case 8:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee15);
      }));
      return function () {
        return _isMetaMaskInstalled.apply(this, arguments);
      };
    }()
  }, {
    key: "switchNetwork",
    value: function () {
      var _switchNetwork = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(chainId) {
        var currentNetwork;
        return _regeneratorRuntime().wrap(function (_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                chainId = verifyChainId(chainId);
                // Check if the user wallet is already on `chainId`
                _context21.t0 = fromDecimalToHex;
                _context21.next = 4;
                return this.getChainId();
              case 4:
                _context21.t1 = _context21.sent;
                currentNetwork = (0, _context21.t0)(_context21.t1);
                if (!(currentNetwork === chainId)) {
                  _context21.next = 8;
                  break;
                }
                return _context21.abrupt("return");
              case 8:
                _context21.next = 10;
                return window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{
                    chainId: chainId
                  }]
                });
              case 10:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee16, this);
      }));
      return function () {
        return _switchNetwork.apply(this, arguments);
      };
    }()
  }, {
    key: "addNetwork",
    value: function () {
      var _addNetwork = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(chainId, chainName, currencyName, currencySymbol, rpcUrl, blockExplorerUrl) {
        return _regeneratorRuntime().wrap(function (_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                chainId = verifyChainId(chainId);
                _context22.next = 3;
                return window.ethereum.request({
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
                });
              case 3:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee17);
      }));
      return function () {
        return _addNetwork.apply(this, arguments);
      };
    }()
  }]);
  return MoralisWeb3;
}();
function fromDecimalToHex(number) {
  if (typeof number !== 'number') throw 'The input provided should be a number';
  return "0x".concat(number.toString(16));
}
function verifyChainId(chainId) {
  // Check if chainId is a number, in that case convert to hex
  if (typeof chainId === 'number') chainId = fromDecimalToHex(chainId);
  return chainId;
}
MoralisWeb3.onConnect = (0, _bind.default)(_context23 = MoralisWeb3.on).call(_context23, MoralisWeb3, EthereumEvents.CONNECT);
MoralisWeb3.onDisconnect = (0, _bind.default)(_context24 = MoralisWeb3.on).call(_context24, MoralisWeb3, EthereumEvents.DISCONNECT);
MoralisWeb3.onChainChanged = (0, _bind.default)(_context25 = MoralisWeb3.on).call(_context25, MoralisWeb3, EthereumEvents.CHAIN_CHANGED);
MoralisWeb3.onAccountsChanged = (0, _bind.default)(_context26 = MoralisWeb3.on).call(_context26, MoralisWeb3, EthereumEvents.ACCOUNTS_CHANGED);
var _default = MoralisWeb3;
exports.default = _default;