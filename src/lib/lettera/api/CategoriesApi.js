'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Lettera
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * KSF Media's articles service
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The version of the OpenAPI document: 2.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Category = require('../model/Category');

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Categories service.
* @module api/CategoriesApi
* @version 2.0.0
*/
var CategoriesApi = function () {

  /**
  * Constructs a new CategoriesApi. 
  * @alias module:api/CategoriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CategoriesApi(apiClient) {
    _classCallCheck(this, CategoriesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the categoriesGet operation.
   * @callback module:api/CategoriesApi~categoriesGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Category>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Read categories
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.paper 
   * @param {module:api/CategoriesApi~categoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Category>}
   */


  _createClass(CategoriesApi, [{
    key: 'categoriesGet',
    value: function categoriesGet(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'paper': opts['paper']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [_Category2.default];
      return this.apiClient.callApi('/categories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CategoriesApi;
}();

exports.default = CategoriesApi;