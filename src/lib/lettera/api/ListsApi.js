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

var _ListArticle = require('../model/ListArticle');

var _ListArticle2 = _interopRequireDefault(_ListArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Lists service.
* @module api/ListsApi
* @version 2.0.0
*/
var ListsApi = function () {

  /**
  * Constructs a new ListsApi. 
  * @alias module:api/ListsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ListsApi(apiClient) {
    _classCallCheck(this, ListsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the frontpageGet operation.
   * @callback module:api/ListsApi~frontpageGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/ListArticle>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list for a front page
   * @param {Object} opts Optional parameters
   * @param {Number} opts.start 
   * @param {Number} opts.limit 
   * @param {String} opts.category 
   * @param {module:model/String} opts.paper 
   * @param {module:api/ListsApi~frontpageGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/ListArticle>}
   */


  _createClass(ListsApi, [{
    key: 'frontpageGet',
    value: function frontpageGet(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
        'category': opts['category'],
        'paper': opts['paper']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [_ListArticle2.default];
      return this.apiClient.callApi('/frontpage', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the latestGet operation.
     * @callback module:api/ListsApi~latestGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ListArticle>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of latest articles
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start 
     * @param {Number} opts.limit 
     * @param {module:model/String} opts.paper 
     * @param {module:api/ListsApi~latestGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ListArticle>}
     */

  }, {
    key: 'latestGet',
    value: function latestGet(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
        'paper': opts['paper']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [_ListArticle2.default];
      return this.apiClient.callApi('/latest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the mostreadGet operation.
     * @callback module:api/ListsApi~mostreadGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ListArticle>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of most read articles
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start 
     * @param {Number} opts.limit 
     * @param {String} opts.category 
     * @param {module:model/String} opts.paper 
     * @param {Boolean} opts.onlySubscribers 
     * @param {module:api/ListsApi~mostreadGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ListArticle>}
     */

  }, {
    key: 'mostreadGet',
    value: function mostreadGet(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
        'category': opts['category'],
        'paper': opts['paper'],
        'onlySubscribers': opts['onlySubscribers']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [_ListArticle2.default];
      return this.apiClient.callApi('/mostread', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchGet operation.
     * @callback module:api/ListsApi~searchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ListArticle>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of search results
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start 
     * @param {Number} opts.limit 
     * @param {module:model/String} opts.paper 
     * @param {String} opts.contentQuery 
     * @param {module:api/ListsApi~searchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ListArticle>}
     */

  }, {
    key: 'searchGet',
    value: function searchGet(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
        'paper': opts['paper'],
        'contentQuery': opts['contentQuery']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [_ListArticle2.default];
      return this.apiClient.callApi('/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ListsApi;
}();

exports.default = ListsApi;