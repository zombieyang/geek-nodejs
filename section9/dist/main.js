/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib.js":
/*!****************!*\
  !*** ./lib.js ***!
  \****************/
/***/ ((module, exports) => {

console.log('this is module');

exports.geekbang = { 'hello': 'haha' }

exports.tencent = function () {
    console.log('good')
}

// 知识点1：对module.exports赋值，exports对象就不再是外面require所得到的结果了。
// 我在视频里采用的说法是“覆盖exports”其实不算非常严谨。
// 因为exports变量本身还是存在的
module.exports = function () {
    console.log('hello geekbang');
}

// 知识点2：外部拿到require调用的结果和这里的exports对象是同一个引用
setTimeout(()=> {
    // 验证index.js里加的additional属性是否生效
    // 用于确定外部require到的对象和此处的exports是否是同一个属性
    console.log(exports)
}, 2000)

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
console.log('start require');
var lib = __webpack_require__(/*! ./lib */ "./lib.js")

console.log('end require', lib);

// 参见lib.js注释里的知识点1
console.log(lib.tencent);

// 参见lib.js注释里的知识点2
// require返回的对象，和lib.js里的exports对象属于同一个引用
// 因此此处加的属性能在里面体现出来。
lib.additional = 'test'
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLGdCQUFnQixJQUFJOztBQUVwQixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsTzs7Ozs7O1VDcEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyx1QkFBTzs7QUFFekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ3RoaXMgaXMgbW9kdWxlJyk7XG5cbmV4cG9ydHMuZ2Vla2JhbmcgPSB7ICdoZWxsbyc6ICdoYWhhJyB9XG5cbmV4cG9ydHMudGVuY2VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnZ29vZCcpXG59XG5cbi8vIOefpeivhueCuTHvvJrlr7ltb2R1bGUuZXhwb3J0c+i1i+WAvO+8jGV4cG9ydHPlr7nosaHlsLHkuI3lho3mmK/lpJbpnaJyZXF1aXJl5omA5b6X5Yiw55qE57uT5p6c5LqG44CCXG4vLyDmiJHlnKjop4bpopHph4zph4fnlKjnmoTor7Tms5XmmK/igJzopobnm5ZleHBvcnRz4oCd5YW25a6e5LiN566X6Z2e5bi45Lil6LCo44CCXG4vLyDlm6DkuLpleHBvcnRz5Y+Y6YeP5pys6Lqr6L+Y5piv5a2Y5Zyo55qEXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gZ2Vla2JhbmcnKTtcbn1cblxuLy8g55+l6K+G54K5Mu+8muWklumDqOaLv+WIsHJlcXVpcmXosIPnlKjnmoTnu5Pmnpzlkozov5nph4znmoRleHBvcnRz5a+56LGh5piv5ZCM5LiA5Liq5byV55SoXG5zZXRUaW1lb3V0KCgpPT4ge1xuICAgIC8vIOmqjOivgWluZGV4Lmpz6YeM5Yqg55qEYWRkaXRpb25hbOWxnuaAp+aYr+WQpueUn+aViFxuICAgIC8vIOeUqOS6juehruWumuWklumDqHJlcXVpcmXliLDnmoTlr7nosaHlkozmraTlpITnmoRleHBvcnRz5piv5ZCm5piv5ZCM5LiA5Liq5bGe5oCnXG4gICAgY29uc29sZS5sb2coZXhwb3J0cylcbn0sIDIwMDApIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnNvbGUubG9nKCdzdGFydCByZXF1aXJlJyk7XG52YXIgbGliID0gcmVxdWlyZSgnLi9saWInKVxuXG5jb25zb2xlLmxvZygnZW5kIHJlcXVpcmUnLCBsaWIpO1xuXG4vLyDlj4Lop4FsaWIuanPms6jph4rph4znmoTnn6Xor4bngrkxXG5jb25zb2xlLmxvZyhsaWIudGVuY2VudCk7XG5cbi8vIOWPguingWxpYi5qc+azqOmHiumHjOeahOefpeivhueCuTJcbi8vIHJlcXVpcmXov5Tlm57nmoTlr7nosaHvvIzlkoxsaWIuanPph4znmoRleHBvcnRz5a+56LGh5bGe5LqO5ZCM5LiA5Liq5byV55SoXG4vLyDlm6DmraTmraTlpITliqDnmoTlsZ7mgKfog73lnKjph4zpnaLkvZPnjrDlh7rmnaXjgIJcbmxpYi5hZGRpdGlvbmFsID0gJ3Rlc3QnIl0sInNvdXJjZVJvb3QiOiIifQ==