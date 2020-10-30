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

var _ArticleTypeDetails = require('./ArticleTypeDetails');

var _ArticleTypeDetails2 = _interopRequireDefault(_ArticleTypeDetails);

var _ImageInfo = require('./ImageInfo');

var _ImageInfo2 = _interopRequireDefault(_ImageInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The RelatedArticle model module.
 * @module model/RelatedArticle
 * @version 2.0.0
 */
var RelatedArticle = function () {
  /**
   * Constructs a new <code>RelatedArticle</code>.
   * @alias module:model/RelatedArticle
   * @param uuid {String} 
   * @param title {String} 
   * @param publishingTime {String} 
   * @param premium {Boolean} 
   * @param tags {Array.<String>} 
   */
  function RelatedArticle(uuid, title, publishingTime, premium, tags) {
    _classCallCheck(this, RelatedArticle);

    RelatedArticle.initialize(this, uuid, title, publishingTime, premium, tags);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelatedArticle, null, [{
    key: 'initialize',
    value: function initialize(obj, uuid, title, publishingTime, premium, tags) {
      obj['uuid'] = uuid;
      obj['title'] = title;
      obj['publishingTime'] = publishingTime;
      obj['premium'] = premium;
      obj['tags'] = tags;
    }

    /**
     * Constructs a <code>RelatedArticle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedArticle} obj Optional instance to populate.
     * @return {module:model/RelatedArticle} The populated <code>RelatedArticle</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelatedArticle();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient2.default.convertToType(data['uuid'], 'String');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('preamble')) {
          obj['preamble'] = _ApiClient2.default.convertToType(data['preamble'], 'String');
        }
        if (data.hasOwnProperty('listImage')) {
          obj['listImage'] = _ImageInfo2.default.constructFromObject(data['listImage']);
        }
        if (data.hasOwnProperty('publishingTime')) {
          obj['publishingTime'] = _ApiClient2.default.convertToType(data['publishingTime'], 'String');
        }
        if (data.hasOwnProperty('premium')) {
          obj['premium'] = _ApiClient2.default.convertToType(data['premium'], 'Boolean');
        }
        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient2.default.convertToType(data['tags'], ['String']);
        }
        if (data.hasOwnProperty('articleTypeDetails')) {
          obj['articleTypeDetails'] = _ArticleTypeDetails2.default.constructFromObject(data['articleTypeDetails']);
        }
      }
      return obj;
    }
  }]);

  return RelatedArticle;
}();

/**
 * @member {String} uuid
 */


RelatedArticle.prototype['uuid'] = undefined;

/**
 * @member {String} title
 */
RelatedArticle.prototype['title'] = undefined;

/**
 * @member {String} preamble
 */
RelatedArticle.prototype['preamble'] = undefined;

/**
 * @member {module:model/ImageInfo} listImage
 */
RelatedArticle.prototype['listImage'] = undefined;

/**
 * @member {String} publishingTime
 */
RelatedArticle.prototype['publishingTime'] = undefined;

/**
 * @member {Boolean} premium
 */
RelatedArticle.prototype['premium'] = undefined;

/**
 * @member {Array.<String>} tags
 */
RelatedArticle.prototype['tags'] = undefined;

/**
 * @member {module:model/ArticleTypeDetails} articleTypeDetails
 */
RelatedArticle.prototype['articleTypeDetails'] = undefined;

exports.default = RelatedArticle;