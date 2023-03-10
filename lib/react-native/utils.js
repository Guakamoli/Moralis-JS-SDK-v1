var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _axios = _interopRequireDefault(require("axios"));
var DEEP_INDEX_API_HOST = 'deep-index.moralis.io';
var DEEP_INDEX_SWAGGER_PATH = '/api-docs/v2/swagger.json';
var fetchSwaggerJson = function () {
  var http, response, result;
  return _regenerator.default.async(function (_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator.default.awrap(_axios.default.create({
            baseURL: "https://" + DEEP_INDEX_API_HOST
          }));
        case 2:
          http = _context.sent;
          _context.next = 5;
          return _regenerator.default.awrap(http.get(DEEP_INDEX_SWAGGER_PATH));
        case 5:
          response = _context.sent;
          result = response.data;
          return _context.abrupt("return", result);
        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};
var getPathByTag = function (swaggerJSON) {
  var pathByTag = {};
  var pathDetails = {};
  Object.entries(swaggerJSON.paths).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      pathName = _ref2[0],
      requestData = _ref2[1];
    return Object.entries(requestData).forEach(function (_ref3) {
      var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        method = _ref4[0],
        data = _ref4[1];
      var tags = data.tags;
      if (tags.length > 0) {
        if (!pathByTag[tags[0]]) {
          pathByTag[tags[0]] = [];
        }
        pathByTag[tags[0]].push(data.operationId);
        pathDetails[data.operationId] = {
          method: method,
          pathName: pathName,
          data: data
        };
      }
    });
  });
  return {
    pathByTag: pathByTag,
    pathDetails: pathDetails
  };
};
var fetchEndpoints = function () {
  var swaggerJSON, _await$getPathByTag, pathDetails, data;
  return _regenerator.default.async(function (_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _regenerator.default.awrap(fetchSwaggerJson());
        case 2:
          swaggerJSON = _context2.sent;
          _context2.next = 5;
          return _regenerator.default.awrap(getPathByTag(swaggerJSON));
        case 5:
          _await$getPathByTag = _context2.sent;
          pathDetails = _await$getPathByTag.pathDetails;
          data = [];
          Object.keys(pathDetails).forEach(function (x) {
            var item = pathDetails[x];
            var endpoint = {
              method: item.method.toUpperCase(),
              group: item.data.tags[0],
              name: x,
              url: item.pathName.split('{').join(':').split('}').join('')
            };
            data.push(endpoint);
          });
          return _context2.abrupt("return", data);
        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};
module.exports = {
  fetchSwaggerJson: fetchSwaggerJson,
  getPathByTag: getPathByTag,
  fetchEndpoints: fetchEndpoints
};