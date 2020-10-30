"use strict";

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

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Enum class ArticleType.
* @enum {}
* @readonly
*/
var ArticleType = function () {
    function ArticleType() {
        _classCallCheck(this, ArticleType);

        this["NyhetStor"] = "NyhetStor";
        this["NyhetLiten"] = "NyhetLiten";
        this["NyhetRelaterade"] = "NyhetRelaterade";
        this["Opinion"] = "Opinion";
        this["KatastrofStor"] = "KatastrofStor";
        this["KatastrofLiten"] = "KatastrofLiten";
        this["Advertorial"] = "Advertorial";
    }

    /**
     * value: "NyhetStor"
     * @const
     */


    /**
     * value: "NyhetLiten"
     * @const
     */


    /**
     * value: "NyhetRelaterade"
     * @const
     */


    /**
     * value: "Opinion"
     * @const
     */


    /**
     * value: "KatastrofStor"
     * @const
     */


    /**
     * value: "KatastrofLiten"
     * @const
     */


    /**
     * value: "Advertorial"
     * @const
     */


    _createClass(ArticleType, null, [{
        key: "constructFromObject",


        /**
        * Returns a <code>ArticleType</code> enum value from a Javascript object name.
        * @param {Object} data The plain JavaScript object containing the name of the enum value.
        * @return {module:model/ArticleType} The enum <code>ArticleType</code> value.
        */
        value: function constructFromObject(object) {
            return object;
        }
    }]);

    return ArticleType;
}();

exports.default = ArticleType;