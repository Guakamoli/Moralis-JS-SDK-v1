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
var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));
var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));
var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _ParseUser = _interopRequireDefault(require("./ParseUser"));
var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));
var _ParseObject = _interopRequireDefault(require("./ParseObject"));
var _ParseACL = _interopRequireDefault(require("./ParseACL"));
var _createSigningData = _interopRequireDefault(require("./createSigningData"));
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
    var _context9;
    _forEachInstanceProperty(_context9 = ["next", "throw", "return"]).call(_context9, function (method) {
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
      var _context10;
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, _forEachInstanceProperty(_context10 = this.tryEntries).call(_context10, resetTryEntry), !skipTempReset) for (var name in this) {
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
var INIT_ERROR = 'Could not initialise ledger app, make sure Elrond app is open';
function getErdJs() {
  return MoralisErd.getErdJs();
}
var MoralisErd = /*#__PURE__*/function () {
  function MoralisErd() {
    (0, _classCallCheck2.default)(this, MoralisErd);
  }
  (0, _createClass2.default)(MoralisErd, null, [{
    key: "getErdJs",
    value: function () {
      if (typeof window !== 'undefined' && window.erdjs) return window.erdjs;
      throw new Error('Please add erdjs scripts');
    }
  }, {
    key: "gatewayAddress",
    value: function () {
      return 'https://gateway.elrond.com';
    }
  }, {
    key: "hwProxy",
    value: function () {
      var _hwProxy = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _getErdJs, ProxyProvider, proxy;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!MoralisErd._proxy) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return", MoralisErd._proxy);
              case 2:
                _getErdJs = getErdJs(), ProxyProvider = _getErdJs.ProxyProvider;
                proxy = new ProxyProvider(MoralisErd.gatewayAddress());
                MoralisErd._proxy = proxy;
                return _context.abrupt("return", MoralisErd._proxy);
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function () {
        return _hwProxy.apply(this, arguments);
      };
    }()
  }, {
    key: "hwProvider",
    value: function () {
      return MoralisErd._hw;
    }
  }, {
    key: "enable",
    value: function () {
      var _enable = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _getErdJs2, HWProvider, proxy, hw, success;
        return _regeneratorRuntime().wrap(function (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _getErdJs2 = getErdJs(), HWProvider = _getErdJs2.HWProvider;
                _context2.next = 3;
                return MoralisErd.hwProxy();
              case 3:
                proxy = _context2.sent;
                hw = new HWProvider(proxy);
                _context2.next = 7;
                return hw.init();
              case 7:
                success = _context2.sent;
                if (success) {
                  _context2.next = 10;
                  break;
                }
                throw new Error(INIT_ERROR);
              case 10:
                MoralisErd._hw = hw;
                return _context2.abrupt("return", hw);
              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return function () {
        return _enable.apply(this, arguments);
      };
    }()
  }, {
    key: "authenticate",
    value: function () {
      var _authenticate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _context3, _user$get;
        var hw, address, erdAddress, accounts, message, data, signature, authData, user;
        return _regeneratorRuntime().wrap(function (_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return MoralisErd.enable();
              case 2:
                hw = _context4.sent;
                _context4.next = 5;
                return hw.login();
              case 5:
                address = _context4.sent;
                // const account = await proxy.getAccount(address);
                erdAddress = address.toLowerCase();
                accounts = [erdAddress];
                message = MoralisErd.getSigningData();
                _context4.next = 11;
                return (0, _createSigningData.default)(message);
              case 11:
                data = _context4.sent;
                _context4.next = 14;
                return MoralisErd.sign(data);
              case 14:
                signature = _context4.sent;
                authData = {
                  id: erdAddress,
                  signature: signature,
                  data: data
                };
                _context4.next = 18;
                return _ParseUser.default.logInWith('moralisErd', {
                  authData: authData
                });
              case 18:
                user = _context4.sent;
                _context4.next = 21;
                return user.setACL(new _ParseACL.default(user));
              case 21:
                if (user) {
                  _context4.next = 23;
                  break;
                }
                throw new Error('Could not get user');
              case 23:
                user.set('erdAccounts', uniq((0, _concat.default)(_context3 = []).call(_context3, accounts, (_user$get = user.get('erdAccounts')) !== null && _user$get !== void 0 ? _user$get : [])));
                user.set('erdAddress', erdAddress);
                _context4.next = 27;
                return user.save();
              case 27:
                return _context4.abrupt("return", user);
              case 28:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3);
      }));
      return function () {
        return _authenticate.apply(this, arguments);
      };
    }()
  }, {
    key: "link",
    value: function () {
      var _link = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(account) {
        var _context5, _user$get2;
        var user, erdAddress, ErdAddress, query, erdAddressRecord, data, signature, authData;
        return _regeneratorRuntime().wrap(function (_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _ParseUser.default.current();
              case 2:
                user = _context6.sent;
                erdAddress = account.toLowerCase();
                ErdAddress = _ParseObject.default.extend('_ErdAddress');
                query = new _ParseQuery.default(ErdAddress);
                _context6.next = 8;
                return query.get(erdAddress).catch(function () {
                  return null;
                });
              case 8:
                erdAddressRecord = _context6.sent;
                if (erdAddressRecord) {
                  _context6.next = 17;
                  break;
                }
                data = MoralisErd.getSigningData();
                _context6.next = 13;
                return MoralisErd.sign(data);
              case 13:
                signature = _context6.sent;
                authData = {
                  id: erdAddress,
                  signature: signature,
                  data: data
                };
                _context6.next = 17;
                return user.linkWith('moralisErd', {
                  authData: authData
                });
              case 17:
                user.set('erdAccounts', uniq((0, _concat.default)(_context5 = [erdAddress]).call(_context5, (_user$get2 = user.get('erdAccounts')) !== null && _user$get2 !== void 0 ? _user$get2 : [])));
                user.set('erdAddress', erdAddress);
                _context6.next = 21;
                return user.save();
              case 21:
                return _context6.abrupt("return", user);
              case 22:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee4);
      }));
      return function () {
        return _link.apply(this, arguments);
      };
    }()
  }, {
    key: "unlink",
    value: function () {
      var _unlink = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(account) {
        var _user$get3;
        var accountsLower, ErdAddress, query, erdAddressRecord, user, accounts, nextAccounts;
        return _regeneratorRuntime().wrap(function (_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                accountsLower = account.toLowerCase();
                ErdAddress = _ParseObject.default.extend('_EthAddress');
                query = new _ParseQuery.default(ErdAddress);
                _context7.next = 5;
                return query.get(accountsLower);
              case 5:
                erdAddressRecord = _context7.sent;
                _context7.next = 8;
                return erdAddressRecord.destroy();
              case 8:
                _context7.next = 10;
                return _ParseUser.default.current();
              case 10:
                user = _context7.sent;
                accounts = (_user$get3 = user.get('erdAccounts')) !== null && _user$get3 !== void 0 ? _user$get3 : [];
                nextAccounts = (0, _filter.default)(accounts).call(accounts, function (v) {
                  return v !== accountsLower;
                });
                user.set('erdAccounts', nextAccounts);
                user.set('erdAddress', nextAccounts[0]);
                _context7.next = 17;
                return user._unlinkFrom('moralisErd');
              case 17:
                _context7.next = 19;
                return user.save();
              case 19:
                return _context7.abrupt("return", user);
              case 20:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee5);
      }));
      return function () {
        return _unlink.apply(this, arguments);
      };
    }()
  }, {
    key: "sign",
    value: function () {
      var _sign = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
        return _regeneratorRuntime().wrap(function (_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", data);
              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee6);
      }));
      return function () {
        return _sign.apply(this, arguments);
      };
    }()
  }, {
    key: "getSigningData",
    value: function () {
      return 'Moralis Authentication';
    }
  }]);
  return MoralisErd;
}();
function uniq(arr) {
  return (0, _filter.default)(arr).call(arr, function (v, i) {
    return (0, _indexOf.default)(arr).call(arr, v) === i;
  });
}
var _default = MoralisErd;
exports.default = _default;