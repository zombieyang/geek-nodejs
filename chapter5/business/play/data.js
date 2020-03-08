/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/page.data.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/page.data.js":
/*!**************************!*\
  !*** ./src/page.data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    column: {
        protocol: 'geek-rpc',

        ip: '127.0.0.1',

        port: 4000,

        protobufFile: __webpack_require__(/*! ./src/proto/detail.proto */ "./src/proto/detail.proto"),

        requestStruct: 'ColumnRequest',
        responseStruct: 'ColumnResponse',

        then(res) {
            return res.column;
        }
    },
    articleList: {
        protocol: 'http',

        url: 'http://127.0.0.1:4003',

        before: function (data) {
            return data;
        },

        then: function (res) {
            return JSON.parse(res).data.list;
        },

        catch: function () {

        }
    }
}

/***/ }),

/***/ "./src/proto/detail.proto":
/*!********************************!*\
  !*** ./src/proto/detail.proto ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "message Column {\n    required int32 id = 1;\n    required string column_cover = 2;\n    required string column_title = 3;\n    required string column_subtitle = 4;\n    required string author_name = 5;\n    required string author_intro = 6;\n    required string column_intro = 7;\n    required string column_unit = 8;\n    required uint32 sub_count = 9;\n    required string update_frequency = 10;\n    required uint32 column_price = 11;\n    optional uint32 column_price_market = 12;\n    repeated Article articles = 13;\n}\nmessage Article {\n    required uint32 id = 1;\n    required bool is_video_preview = 2;\n    required string article_title = 3;\n}\n\nmessage ColumnResponse {\n    required Column column = 1;\n    repeated Column recommendColumns = 2;\n}\nmessage ColumnRequest {\n    required int32 columnid = 1;\n}"

/***/ })

/******/ });