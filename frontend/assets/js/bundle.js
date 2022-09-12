/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exercises/video-player/videoPlayer.ts":
/*!***************************************************!*\
  !*** ./src/exercises/video-player/videoPlayer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playBtn = videoPlayerElements.playBtn;
        this.stopBtn = videoPlayerElements.stopBtn;
        this.fscreenBtn = videoPlayerElements.fscreenBtn;
    }
    fullscreenAction() {
        //
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playBtn.innerHTML = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playBtn.innerHTML = 'Play';
        }
    }
    stop() { }
    initEvents() {
        this.playBtn.addEventListener('click', () => {
            this.playToggle();
        });
        this.stopBtn.addEventListener('click', () => {
            this.videoPlayer.pause();
            this.videoPlayer.currentTime = 0;
            this.playBtn.innerHTML = 'Play';
        });
    }
}
exports["default"] = VideoPlayer;
const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playBtn: document.querySelector('.play'),
    stopBtn: document.querySelector('.stop'),
    fscreenBtn: document.querySelector('.fullscreen'),
});
videoPlayer.initEvents();


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
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/webpack/index.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../exercises/video-player/videoPlayer */ "./src/exercises/video-player/videoPlayer.ts");
// import './validatingForm';

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map