'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotifiersApi = exports.ListsApi = exports.CategoriesApi = exports.ArticlesApi = exports.RelatedArticle = exports.Paper = exports.Notification = exports.ListArticle = exports.ImageInfo = exports.EventType = exports.Category = exports.BoxType = exports.BoxInfo = exports.Block = exports.Author = exports.ArticleTypeDetails = exports.ArticleType = exports.Article = exports.Alignment = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Alignment = require('./model/Alignment');

var _Alignment2 = _interopRequireDefault(_Alignment);

var _Article = require('./model/Article');

var _Article2 = _interopRequireDefault(_Article);

var _ArticleType = require('./model/ArticleType');

var _ArticleType2 = _interopRequireDefault(_ArticleType);

var _ArticleTypeDetails = require('./model/ArticleTypeDetails');

var _ArticleTypeDetails2 = _interopRequireDefault(_ArticleTypeDetails);

var _Author = require('./model/Author');

var _Author2 = _interopRequireDefault(_Author);

var _Block = require('./model/Block');

var _Block2 = _interopRequireDefault(_Block);

var _BoxInfo = require('./model/BoxInfo');

var _BoxInfo2 = _interopRequireDefault(_BoxInfo);

var _BoxType = require('./model/BoxType');

var _BoxType2 = _interopRequireDefault(_BoxType);

var _Category = require('./model/Category');

var _Category2 = _interopRequireDefault(_Category);

var _EventType = require('./model/EventType');

var _EventType2 = _interopRequireDefault(_EventType);

var _ImageInfo = require('./model/ImageInfo');

var _ImageInfo2 = _interopRequireDefault(_ImageInfo);

var _ListArticle = require('./model/ListArticle');

var _ListArticle2 = _interopRequireDefault(_ListArticle);

var _Notification = require('./model/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Paper = require('./model/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _RelatedArticle = require('./model/RelatedArticle');

var _RelatedArticle2 = _interopRequireDefault(_RelatedArticle);

var _ArticlesApi = require('./api/ArticlesApi');

var _ArticlesApi2 = _interopRequireDefault(_ArticlesApi);

var _CategoriesApi = require('./api/CategoriesApi');

var _CategoriesApi2 = _interopRequireDefault(_CategoriesApi);

var _ListsApi = require('./api/ListsApi');

var _ListsApi2 = _interopRequireDefault(_ListsApi);

var _NotifiersApi = require('./api/NotifiersApi');

var _NotifiersApi2 = _interopRequireDefault(_NotifiersApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* KSF_Medias_articles_service.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Lettera = require('index'); // See note below*.
* var xxxSvc = new Lettera.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Lettera.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Lettera.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Lettera.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0.0
*/
/**
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

exports.ApiClient = _ApiClient2.default;
exports.Alignment = _Alignment2.default;
exports.Article = _Article2.default;
exports.ArticleType = _ArticleType2.default;
exports.ArticleTypeDetails = _ArticleTypeDetails2.default;
exports.Author = _Author2.default;
exports.Block = _Block2.default;
exports.BoxInfo = _BoxInfo2.default;
exports.BoxType = _BoxType2.default;
exports.Category = _Category2.default;
exports.EventType = _EventType2.default;
exports.ImageInfo = _ImageInfo2.default;
exports.ListArticle = _ListArticle2.default;
exports.Notification = _Notification2.default;
exports.Paper = _Paper2.default;
exports.RelatedArticle = _RelatedArticle2.default;
exports.ArticlesApi = _ArticlesApi2.default;
exports.CategoriesApi = _CategoriesApi2.default;
exports.ListsApi = _ListsApi2.default;
exports.NotifiersApi = _NotifiersApi2.default;