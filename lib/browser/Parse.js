"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");
var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");
var _reverseInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reverse");
var _Promise2 = require("@babel/runtime-corejs3/core-js-stable/promise");
var _Object$setPrototypeOf = require("@babel/runtime-corejs3/core-js-stable/object/set-prototype-of");
var _typeof = require("@babel/runtime-corejs3/helpers/typeof");
var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");
var _Object$getPrototypeOf = require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of");
var _Object$create = require("@babel/runtime-corejs3/core-js-stable/object/create");
var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));
var _decode = _interopRequireDefault(require("./decode"));
var _encode = _interopRequireDefault(require("./encode"));
var _CoreManager = _interopRequireDefault(require("./CoreManager"));
var _CryptoController = _interopRequireDefault(require("./CryptoController"));
var _InstallationController = _interopRequireDefault(require("./InstallationController"));
var ParseOp = _interopRequireWildcard(require("./ParseOp"));
var _RESTController = _interopRequireDefault(require("./RESTController"));
var _MoralisWeb2 = _interopRequireDefault(require("./MoralisWeb3"));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof _WeakMap !== "function") return null;
  var cacheBabelInterop = new _WeakMap();
  var cacheNodeInterop = new _WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
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
    var _context2;
    _forEachInstanceProperty(_context2 = ["next", "throw", "return"]).call(_context2, function (method) {
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
    void 0 === PromiseImpl && (PromiseImpl = _Promise2);
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
      var _context3;
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, _forEachInstanceProperty(_context3 = this.tryEntries).call(_context3, resetTryEntry), !skipTempReset) for (var name in this) {
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
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function () {
    var Super = (0, _getPrototypeOf2.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * Contains all Moralis API classes and functions.
 *
 * @static
 * @global
 * @class
 * @hideconstructor
 */
var Moralis = /*#__PURE__*/function (_MoralisWeb) {
  (0, _inherits2.default)(Moralis, _MoralisWeb);
  var _super = _createSuper(Moralis);
  function Moralis() {
    (0, _classCallCheck2.default)(this, Moralis);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Moralis, null, [{
    key: "start",
    value:
    /**
     * Call this method to initialize all moralis instances (Moralis, Web3Api, plugins).
     *
     * @param {object} options Your Moralis Application ID and Server URL. Moralis.start({serverUrl,appId})
     * @static
     */
    function () {
      var _start = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(options) {
        var appId, serverUrl, plugins, javascriptKey, masterKey;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                appId = options.appId, serverUrl = options.serverUrl, plugins = options.plugins, javascriptKey = options.javascriptKey, masterKey = options.masterKey;
                if (serverUrl) {
                  _context.next = 3;
                  break;
                }
                throw new Error("Moralis.start failed: serverUrl is required");
              case 3:
                if (appId) {
                  _context.next = 5;
                  break;
                }
                throw new Error("Moralis.start failed: appId is required");
              case 5:
                this.initialize(appId, javascriptKey, masterKey);
                this.serverURL = serverUrl;
                this.Web3API.initialize(serverUrl, this);
                _context.next = 10;
                return this.initPlugins(plugins);
              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      return function () {
        return _start.apply(this, arguments);
      };
    }()
    /**
     * Call this method first to set up your authentication tokens for Moralis.
     *
     * @param {string} applicationId Your Moralis Application ID.
     * @param {string} [javaScriptKey] Your Moralis JavaScript Key (Not needed for moralis-server)
     * @param {string} [masterKey] Your Moralis Master Key. (Node.js only!)
     * @static
     */
  }, {
    key: "initialize",
    value: function (applicationId /*: string*/, javaScriptKey /*: string*/) {
      if ("browser" === 'browser' && _CoreManager.default.get('IS_NODE') && !process.env.SERVER_RENDERING) {
        /* eslint-disable no-console */
        console.log("It looks like you're using the browser version of the SDK in a " + "node.js environment. You should require('parse/node') instead.");
        /* eslint-enable no-console */
      }

      Moralis._initialize(applicationId, javaScriptKey);
    }
  }, {
    key: "_initialize",
    value: function (applicationId /*: string*/, javaScriptKey /*: string*/, masterKey /*: string*/) {
      _CoreManager.default.set('APPLICATION_ID', applicationId);
      _CoreManager.default.set('JAVASCRIPT_KEY', javaScriptKey);
      _CoreManager.default.set('MASTER_KEY', masterKey);
      _CoreManager.default.set('USE_MASTER_KEY', false);
    }

    /**
     * Call this method to set your AsyncStorage engine
     * Starting Parse@1.11, the ParseSDK do not provide a React AsyncStorage as the ReactNative module
     * is not provided at a stable path and changes over versions.
     *
     * @param {AsyncStorage} storage a react native async storage.
     * @static
     */
  }, {
    key: "setAsyncStorage",
    value: function (storage /*: any*/) {
      _CoreManager.default.setAsyncStorage(storage);
    }

    /**
     * Call this method to set your LocalDatastoreStorage engine
     * If using React-Native use {@link Moralis.setAsyncStorage Moralis.setAsyncStorage()}
     *
     * @param {LocalDatastoreController} controller a data storage.
     * @static
     */
  }, {
    key: "setLocalDatastoreController",
    value: function (controller /*: any*/) {
      _CoreManager.default.setLocalDatastoreController(controller);
    }

    /**
     * @member {string} Moralis.applicationId
     * @static
     */
  }, {
    key: "applicationId",
    get: function () {
      return _CoreManager.default.get('APPLICATION_ID');
    }

    /**
     * @member {string} Moralis.javaScriptKey
     * @static
     */,
    set: function (value) {
      _CoreManager.default.set('APPLICATION_ID', value);
    }
  }, {
    key: "javaScriptKey",
    get: function () {
      return _CoreManager.default.get('JAVASCRIPT_KEY');
    }

    /**
     * @member {string} Moralis.masterKey
     * @static
     */,
    set: function (value) {
      _CoreManager.default.set('JAVASCRIPT_KEY', value);
    }
  }, {
    key: "masterKey",
    get: function () {
      return _CoreManager.default.get('MASTER_KEY');
    }

    /**
     * @member {string} Moralis.serverURL
     * @static
     */,
    set: function (value) {
      _CoreManager.default.set('MASTER_KEY', value);
    }
  }, {
    key: "serverURL",
    get: function () {
      return _CoreManager.default.get('SERVER_URL');
    }

    /**
     * @member {string} Moralis.serverAuthToken
     * @static
     */,
    set: function (value) {
      _CoreManager.default.set('SERVER_URL', value);
    }
  }, {
    key: "serverAuthToken",
    get: function () {
      return _CoreManager.default.get('SERVER_AUTH_TOKEN');
    }

    /**
     * @member {string} Moralis.serverAuthType
     * @static
     */,
    set: function (value) {
      _CoreManager.default.set('SERVER_AUTH_TOKEN', value);
    }
  }, {
    key: "serverAuthType",
    get: function () {
      return _CoreManager.default.get('SERVER_AUTH_TYPE');
    }

    /**
     * @member {string} Moralis.liveQueryServerURL
     * @static
     */,
    set: function (value) {
      _CoreManager.default.set('SERVER_AUTH_TYPE', value);
    }
  }, {
    key: "liveQueryServerURL",
    get: function () {
      return _CoreManager.default.get('LIVEQUERY_SERVER_URL');
    }

    /**
     * @member {string} Moralis.encryptedUser
     * @static
     */,
    set: function (value) {
      _CoreManager.default.set('LIVEQUERY_SERVER_URL', value);
    }
  }, {
    key: "encryptedUser",
    get: function () {
      return _CoreManager.default.get('ENCRYPTED_USER');
    }

    /**
     * @member {string} Moralis.secret
     * @static
     */,
    set: function (value) {
      _CoreManager.default.set('ENCRYPTED_USER', value);
    }
  }, {
    key: "secret",
    get: function () {
      return _CoreManager.default.get('ENCRYPTED_KEY');
    }

    /**
     * @member {boolean} Moralis.idempotency
     * @static
     */,
    set: function (value) {
      _CoreManager.default.set('ENCRYPTED_KEY', value);
    }
  }, {
    key: "idempotency",
    get: function () {
      return _CoreManager.default.get('IDEMPOTENCY');
    },
    set: function (value) {
      _CoreManager.default.set('IDEMPOTENCY', value);
    }
  }]);
  return Moralis;
}(_MoralisWeb2.default);
Moralis.ACL = require('./ParseACL').default;
Moralis.Analytics = require('./Analytics');
Moralis.AnonymousUtils = require('./AnonymousUtils').default;
Moralis.Cloud = require('./Cloud');
Moralis.CLP = require('./ParseCLP').default;
Moralis.CoreManager = require('./CoreManager');
Moralis.Config = require('./ParseConfig').default;
Moralis.Error = require('./ParseError').default;
Moralis.FacebookUtils = require('./FacebookUtils').default;
Moralis.File = require('./ParseFile').default;
Moralis.GeoPoint = require('./ParseGeoPoint').default;
Moralis.Polygon = require('./ParsePolygon').default;
Moralis.Installation = require('./ParseInstallation').default;
Moralis.LocalDatastore = require('./LocalDatastore');
Moralis.Object = require('./ParseObject').default;
Moralis.Op = {
  Set: ParseOp.SetOp,
  Unset: ParseOp.UnsetOp,
  Increment: ParseOp.IncrementOp,
  Add: ParseOp.AddOp,
  Remove: ParseOp.RemoveOp,
  AddUnique: ParseOp.AddUniqueOp,
  Relation: ParseOp.RelationOp
};
Moralis.Web3API = require('./MoralisWeb3Api').default;
Moralis.Push = require('./Push');
Moralis.Query = require('./ParseQuery').default;
Moralis.Relation = require('./ParseRelation').default;
Moralis.Role = require('./ParseRole').default;
Moralis.Schema = require('./ParseSchema').default;
Moralis.Session = require('./ParseSession').default;
Moralis.Storage = require('./Storage');
Moralis.User = require('./ParseUser').default;
Moralis.LiveQuery = require('./ParseLiveQuery').default;
Moralis.LiveQueryClient = require('./LiveQueryClient').default;
Moralis.Web3 = Moralis;
Moralis.Units = require('./UnitConvert');
// Moralis.Web3 = require('./MoralisWeb3').default;
Moralis.Elrond = require('./MoralisErd').default;
Moralis.Erd = Moralis.Elrond;
Moralis.Dot = require('./MoralisDot').default;
Moralis.UI = require('./MoralisUI').default;
Moralis._request = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return _CoreManager.default.getRESTController().request.apply(null, args);
};
Moralis._ajax = function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return _CoreManager.default.getRESTController().ajax.apply(null, args);
};
// We attempt to match the signatures of the legacy versions of these methods
Moralis._decode = function (_, value) {
  return (0, _decode.default)(value);
};
Moralis._encode = function (value, _, disallowObjects) {
  return (0, _encode.default)(value, disallowObjects);
};
Moralis._getInstallationId = function () {
  return _CoreManager.default.getInstallationController().currentInstallationId();
};
/**
 * Enable pinning in your application.
 * This must be called before your application can use pinning.
 *
 * @static
 */
Moralis.enableLocalDatastore = function () {
  Moralis.LocalDatastore.isEnabled = true;
};
/**
 * Flag that indicates whether Local Datastore is enabled.
 *
 * @static
 * @returns {boolean}
 */
Moralis.isLocalDatastoreEnabled = function () {
  return Moralis.LocalDatastore.isEnabled;
};
/**
 * Gets all contents from Local Datastore
 *
 * <pre>
 * await Moralis.dumpLocalDatastore();
 * </pre>
 *
 * @static
 * @returns {object}
 */
Moralis.dumpLocalDatastore = function () {
  if (!Moralis.LocalDatastore.isEnabled) {
    console.log('Moralis.enableLocalDatastore() must be called first'); // eslint-disable-line no-console
    return _promise.default.resolve({});
  }
  return Moralis.LocalDatastore._getAllContents();
};

/**
 * Enable the current user encryption.
 * This must be called before login any user.
 *
 * @static
 */
Moralis.enableEncryptedUser = function () {
  Moralis.encryptedUser = true;
};

/**
 * Flag that indicates whether Encrypted User is enabled.
 *
 * @static
 * @returns {boolean}
 */
Moralis.isEncryptedUserEnabled = function () {
  return Moralis.encryptedUser;
};
_CoreManager.default.setCryptoController(_CryptoController.default);
_CoreManager.default.setInstallationController(_InstallationController.default);
_CoreManager.default.setRESTController(_RESTController.default);
Moralis.CoreManager = _CoreManager.default;
// For legacy requires, of the form `var Moralis = require('moralis').Moralis`
Moralis.Moralis = Moralis;
module.exports = Moralis;