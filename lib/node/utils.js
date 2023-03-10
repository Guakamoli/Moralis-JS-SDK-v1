"use strict";

var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const DEEP_INDEX_API_HOST = 'deep-index.moralis.io';
const DEEP_INDEX_SWAGGER_PATH = '/api-docs/v2/swagger.json';
const fetchSwaggerJson = async () => {
  const http = await _axios.default.create({
    baseURL: `https://${DEEP_INDEX_API_HOST}`
  });
  const response = await http.get(DEEP_INDEX_SWAGGER_PATH);
  const result = response.data;
  return result;
};
const getPathByTag = swaggerJSON => {
  const pathByTag = {};
  const pathDetails = {};
  Object.entries(swaggerJSON.paths).map(([pathName, requestData]) => {
    return Object.entries(requestData).forEach(([method, data]) => {
      const {
        tags
      } = data;
      if (tags.length > 0) {
        if (!pathByTag[tags[0]]) {
          pathByTag[tags[0]] = [];
        }
        pathByTag[tags[0]].push(data.operationId);
        pathDetails[data.operationId] = {
          method,
          pathName,
          data
        };
      }
    });
  });
  return {
    pathByTag,
    pathDetails
  };
};
const fetchEndpoints = async () => {
  const swaggerJSON = await fetchSwaggerJson();
  const {
    pathDetails
  } = await getPathByTag(swaggerJSON);
  const data = [];
  Object.keys(pathDetails).forEach(x => {
    const item = pathDetails[x];
    const endpoint = {
      method: item.method.toUpperCase(),
      group: item.data.tags[0],
      name: x,
      url: item.pathName.split('{').join(':').split('}').join('')
    };
    data.push(endpoint);
  });
  return data;
};
module.exports = {
  fetchSwaggerJson,
  getPathByTag,
  fetchEndpoints
};