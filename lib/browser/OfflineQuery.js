"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _Array$isArray2 = require("@babel/runtime-corejs3/core-js-stable/array/is-array");
var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");
var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");
var _Array$from = require("@babel/runtime-corejs3/core-js-stable/array/from");
var _sliceInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/slice");
var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));
var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));
var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));
var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];
  if (!it) {
    if (_Array$isArray2(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  var _context5;
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = _sliceInstanceProperty2(_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1);
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
/* eslint-disable no-loop-func */
var equalObjects = require('./equals').default;
var decode = require('./decode').default;
var ParseError = require('./ParseError').default;
var ParsePolygon = require('./ParsePolygon').default;
var ParseGeoPoint = require('./ParseGeoPoint').default;

/**
 * contains -- Determines if an object is contained in a list with special handling for Parse pointers.
 *
 * @param haystack
 * @param needle
 * @private
 * @returns {boolean}
 */
function contains(haystack, needle) {
  if (needle && needle.__type && (needle.__type === 'Pointer' || needle.__type === 'Object')) {
    for (var i in haystack) {
      var ptr = haystack[i];
      if (typeof ptr === 'string' && ptr === needle.objectId) {
        return true;
      }
      if (ptr.className === needle.className && ptr.objectId === needle.objectId) {
        return true;
      }
    }
    return false;
  }
  return (0, _indexOf.default)(haystack).call(haystack, needle) > -1;
}
function transformObject(object) {
  if (object._toFullJSON) {
    return object._toFullJSON();
  }
  return object;
}
/**
 * matchesQuery -- Determines if an object would be returned by a Parse Query
 * It's a lightweight, where-clause only implementation of a full query engine.
 * Since we find queries that match objects, rather than objects that match
 * queries, we can avoid building a full-blown query tool.
 *
 * @param className
 * @param object
 * @param objects
 * @param query
 * @private
 * @returns {boolean}
 */
function matchesQuery(className, object, objects, query) {
  if (object.className !== className) {
    return false;
  }
  var obj = object;
  var q = query;
  if (object.toJSON) {
    obj = object.toJSON();
  }
  if (query.toJSON) {
    q = query.toJSON().where;
  }
  obj.className = className;
  for (var field in q) {
    if (!matchesKeyConstraints(className, obj, objects, field, q[field])) {
      return false;
    }
  }
  return true;
}
function equalObjectsGeneric(obj, compareTo, eqlFn) {
  if ((0, _isArray.default)(obj)) {
    for (var i = 0; i < obj.length; i++) {
      if (eqlFn(obj[i], compareTo)) {
        return true;
      }
    }
    return false;
  }
  return eqlFn(obj, compareTo);
}

/**
 * Determines whether an object matches a single key's constraints
 *
 * @param className
 * @param object
 * @param objects
 * @param key
 * @param constraints
 * @private
 * @returns {boolean}
 */
function matchesKeyConstraints(className, object, objects, key, constraints) {
  if (constraints === null) {
    return false;
  }
  if ((0, _indexOf.default)(key).call(key, '.') >= 0) {
    // Key references a subobject
    var keyComponents = key.split('.');
    var subObjectKey = keyComponents[0];
    var keyRemainder = (0, _slice.default)(keyComponents).call(keyComponents, 1).join('.');
    return matchesKeyConstraints(className, object[subObjectKey] || {}, objects, keyRemainder, constraints);
  }
  var i;
  if (key === '$or') {
    for (i = 0; i < constraints.length; i++) {
      if (matchesQuery(className, object, objects, constraints[i])) {
        return true;
      }
    }
    return false;
  }
  if (key === '$and') {
    for (i = 0; i < constraints.length; i++) {
      if (!matchesQuery(className, object, objects, constraints[i])) {
        return false;
      }
    }
    return true;
  }
  if (key === '$nor') {
    for (i = 0; i < constraints.length; i++) {
      if (matchesQuery(className, object, objects, constraints[i])) {
        return false;
      }
    }
    return true;
  }
  if (key === '$relatedTo') {
    // Bail! We can't handle relational queries locally
    return false;
  }
  if (!/^[A-Za-z][0-9A-Za-z_]*$/.test(key)) {
    throw new ParseError(ParseError.INVALID_KEY_NAME, "Invalid Key: ".concat(key));
  }
  // Equality (or Array contains) cases
  if ((0, _typeof2.default)(constraints) !== 'object') {
    if ((0, _isArray.default)(object[key])) {
      var _context;
      return (0, _indexOf.default)(_context = object[key]).call(_context, constraints) > -1;
    }
    return object[key] === constraints;
  }
  var compareTo;
  if (constraints.__type) {
    if (constraints.__type === 'Pointer') {
      return equalObjectsGeneric(object[key], constraints, function (obj, ptr) {
        return typeof obj !== 'undefined' && ptr.className === obj.className && ptr.objectId === obj.objectId;
      });
    }
    return equalObjectsGeneric(decode(object[key]), decode(constraints), equalObjects);
  }
  // More complex cases
  for (var condition in constraints) {
    compareTo = constraints[condition];
    if (compareTo.__type) {
      compareTo = decode(compareTo);
    }
    // Compare Date Object or Date String
    if (toString.call(compareTo) === '[object Date]' || typeof compareTo === 'string' && new Date(compareTo) !== 'Invalid Date' && !isNaN(new Date(compareTo))) {
      object[key] = new Date(object[key].iso ? object[key].iso : object[key]);
    }
    switch (condition) {
      case '$lt':
        if (object[key] >= compareTo) {
          return false;
        }
        break;
      case '$lte':
        if (object[key] > compareTo) {
          return false;
        }
        break;
      case '$gt':
        if (object[key] <= compareTo) {
          return false;
        }
        break;
      case '$gte':
        if (object[key] < compareTo) {
          return false;
        }
        break;
      case '$ne':
        if (equalObjects(object[key], compareTo)) {
          return false;
        }
        break;
      case '$in':
        if (!contains(compareTo, object[key])) {
          return false;
        }
        break;
      case '$nin':
        if (contains(compareTo, object[key])) {
          return false;
        }
        break;
      case '$all':
        for (i = 0; i < compareTo.length; i++) {
          var _context2;
          if ((0, _indexOf.default)(_context2 = object[key]).call(_context2, compareTo[i]) < 0) {
            return false;
          }
        }
        break;
      case '$exists':
        {
          var propertyExists = typeof object[key] !== 'undefined';
          var existenceIsRequired = constraints.$exists;
          if (typeof constraints.$exists !== 'boolean') {
            // The SDK will never submit a non-boolean for $exists, but if someone
            // tries to submit a non-boolean for $exits outside the SDKs, just ignore it.
            break;
          }
          if (!propertyExists && existenceIsRequired || propertyExists && !existenceIsRequired) {
            return false;
          }
          break;
        }
      case '$regex':
        {
          if ((0, _typeof2.default)(compareTo) === 'object') {
            return compareTo.test(object[key]);
          }
          // JS doesn't support perl-style escaping
          var expString = '';
          var escapeEnd = -2;
          var escapeStart = (0, _indexOf.default)(compareTo).call(compareTo, '\\Q');
          while (escapeStart > -1) {
            // Add the unescaped portion
            expString += compareTo.substring(escapeEnd + 2, escapeStart);
            escapeEnd = (0, _indexOf.default)(compareTo).call(compareTo, '\\E', escapeStart);
            if (escapeEnd > -1) {
              expString += compareTo.substring(escapeStart + 2, escapeEnd).replace(/\\\\\\\\E/g, '\\E').replace(/\W/g, '\\$&');
            }
            escapeStart = (0, _indexOf.default)(compareTo).call(compareTo, '\\Q', escapeEnd);
          }
          expString += compareTo.substring(Math.max(escapeStart, escapeEnd + 2));
          var modifiers = constraints.$options || '';
          modifiers = modifiers.replace('x', '').replace('s', '');
          // Parse Server / Mongo support x and s modifiers but JS RegExp doesn't
          var exp = new RegExp(expString, modifiers);
          if (!exp.test(object[key])) {
            return false;
          }
          break;
        }
      case '$nearSphere':
        {
          if (!compareTo || !object[key]) {
            return false;
          }
          var distance = compareTo.radiansTo(object[key]);
          var max = constraints.$maxDistance || Infinity;
          return distance <= max;
        }
      case '$within':
        {
          if (!compareTo || !object[key]) {
            return false;
          }
          var southWest = compareTo.$box[0];
          var northEast = compareTo.$box[1];
          if (southWest.latitude > northEast.latitude || southWest.longitude > northEast.longitude) {
            // Invalid box, crosses the date line
            return false;
          }
          return object[key].latitude > southWest.latitude && object[key].latitude < northEast.latitude && object[key].longitude > southWest.longitude && object[key].longitude < northEast.longitude;
        }
      case '$options':
        // Not a query type, but a way to add options to $regex. Ignore and
        // avoid the default
        break;
      case '$maxDistance':
        // Not a query type, but a way to add a cap to $nearSphere. Ignore and
        // avoid the default
        break;
      case '$select':
        {
          var subQueryObjects = (0, _filter.default)(objects).call(objects, function (obj, index, arr) {
            return matchesQuery(compareTo.query.className, obj, arr, compareTo.query.where);
          });
          for (var _i = 0; _i < subQueryObjects.length; _i += 1) {
            var subObject = transformObject(subQueryObjects[_i]);
            return equalObjects(object[key], subObject[compareTo.key]);
          }
          return false;
        }
      case '$dontSelect':
        {
          var _subQueryObjects = (0, _filter.default)(objects).call(objects, function (obj, index, arr) {
            return matchesQuery(compareTo.query.className, obj, arr, compareTo.query.where);
          });
          for (var _i2 = 0; _i2 < _subQueryObjects.length; _i2 += 1) {
            var _subObject = transformObject(_subQueryObjects[_i2]);
            return !equalObjects(object[key], _subObject[compareTo.key]);
          }
          return false;
        }
      case '$inQuery':
        {
          var _subQueryObjects2 = (0, _filter.default)(objects).call(objects, function (obj, index, arr) {
            return matchesQuery(compareTo.className, obj, arr, compareTo.where);
          });
          for (var _i3 = 0; _i3 < _subQueryObjects2.length; _i3 += 1) {
            var _subObject2 = transformObject(_subQueryObjects2[_i3]);
            if (object[key].className === _subObject2.className && object[key].objectId === _subObject2.objectId) {
              return true;
            }
          }
          return false;
        }
      case '$notInQuery':
        {
          var _subQueryObjects3 = (0, _filter.default)(objects).call(objects, function (obj, index, arr) {
            return matchesQuery(compareTo.className, obj, arr, compareTo.where);
          });
          for (var _i4 = 0; _i4 < _subQueryObjects3.length; _i4 += 1) {
            var _subObject3 = transformObject(_subQueryObjects3[_i4]);
            if (object[key].className === _subObject3.className && object[key].objectId === _subObject3.objectId) {
              return false;
            }
          }
          return true;
        }
      case '$containedBy':
        {
          var _iterator = _createForOfIteratorHelper(object[key]),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var value = _step.value;
              if (!contains(compareTo, value)) {
                return false;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return true;
        }
      case '$geoWithin':
        {
          var _context3;
          var points = (0, _map.default)(_context3 = compareTo.$polygon).call(_context3, function (geoPoint) {
            return [geoPoint.latitude, geoPoint.longitude];
          });
          var polygon = new ParsePolygon(points);
          return polygon.containsPoint(object[key]);
        }
      case '$geoIntersects':
        {
          var _polygon = new ParsePolygon(object[key].coordinates);
          var point = new ParseGeoPoint(compareTo.$point);
          return _polygon.containsPoint(point);
        }
      default:
        return false;
    }
  }
  return true;
}
function validateQuery(query /*: any*/) {
  var _context4;
  var q = query;
  if (query.toJSON) {
    q = query.toJSON().where;
  }
  var specialQuerykeys = ['$and', '$or', '$nor', '_rperm', '_wperm', '_perishable_token', '_email_verify_token', '_email_verify_token_expires_at', '_account_lockout_expires_at', '_failed_login_count'];
  (0, _forEach.default)(_context4 = (0, _keys.default)(q)).call(_context4, function (key) {
    if (q && q[key] && q[key].$regex) {
      if (typeof q[key].$options === 'string') {
        if (!q[key].$options.match(/^[imxs]+$/)) {
          throw new ParseError(ParseError.INVALID_QUERY, "Bad $options value for query: ".concat(q[key].$options));
        }
      }
    }
    if ((0, _indexOf.default)(specialQuerykeys).call(specialQuerykeys, key) < 0 && !key.match(/^[a-zA-Z][a-zA-Z0-9_.]*$/)) {
      throw new ParseError(ParseError.INVALID_KEY_NAME, "Invalid key name: ".concat(key));
    }
  });
}
var OfflineQuery = {
  matchesQuery: matchesQuery,
  validateQuery: validateQuery
};
module.exports = OfflineQuery;