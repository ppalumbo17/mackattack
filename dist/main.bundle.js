webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nheader {\n  text-align:center; \n  margin-top: 50px;\n}\n#upper-header a{\n  color: var(--blue); \n  font-size: 2.5rem; \n  text-transform: uppercase; \n  letter-spacing: 3px; \n  font-weight: 400; \n  line-height: 1.2em; \n  font-style: normal; \n  text-decoration: none;\n  cursor: default;\n}\n.navbar ul {\n  display: inline-block;\n  float: none;\n  vertical-align: top;\n  margin: auto;\n  padding-top: 20px;\n}\n.navbar li a span{\n  letter-spacing: 2px;\n  color: var(--grey);\n  text-transform: uppercase;\n  border-bottom: solid 2px transparent;\n  display: inline-block;\n  width: 100%;\n}\n\n.navbar li a:hover {\n  background-color: transparent;  \n}\n.navbar li a:hover span{\n  color: var(--blue);\n  border-bottom-color: var(--red);\n  outline: 0;\n}\n\n.navbar li.active a span{\n  color: var(--blue);\n  border-bottom-color: var(--grey);\n}\n\n#content {\n  width: 80%;\n  min-height: 800px;\n  margin: 0 auto;\n  border: solid 1px var(--grey);\n}\n.container .row {\n  height: 100%;\n}\n#left-content {\n  height: 100%;\n}\n#left-content img {\n  border-radius: 50%;\n  margin: 5em auto;\n  max-width: 90%;\n}\n#right-content{\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n  float: none;\n}\n#right-content p {\n  letter-spacing: 0.1px;\n  font-size: 1.75rem;\n  margin-top: 5em;\n  margin-right: 5em;\n}\nfooter {\n  margin-bottom: 100px;\n}\n/* #left-content {\n  margin: 20px;\n}\n#left-content img {\n  max-width: 200px;\n}\n\n#right-content {\n  margin: 20px;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <header>\n    <div id=\"upper-header\">\n      <a id=\"upper-logo\" href=\"#home\">McKenzie Broekstra</a>\n    </div>\n    <div id=\"lower-header\">\n      <div id=\"upper-nav\">\n        <nav class=\"navbar\" style=\"text-align:center;\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a routerLink=\"./\"><span>Home</span></a></li>\n            <li><a routerLink=\"/about\"><span>About</span></a></li>\n            <li><a routerLink=\"/portfolio\"><span>Portfolio</span></a></li>\n            <li><a routerLink=\"/resume\"><span>Resume</span></a></li>\n            <li><a routerLink=\"/blog\"><span>Blog</span></a></li>\n            <li><a routerLink=\"/contact\"><span>Contact</span></a></li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </header>\n\n  <body>\n    <div id=\"content\" class=\"container\">\n      <div class=\"row\">\n        <div id=\"left-content\" class=\"col-md-6 text-center\">\n           <img src=\"https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/240100_10151174488567645_1623675139_o.jpg?oh=f732f82293edce1fde9b355020eb4b03&oe=5A9AB1A9\"> \n        </div>\n        <div id=\"right-content\" class=\"col-md-6\">\n          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature\n            from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in\n            Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through\n            the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections\n            1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in\n            45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of\n            Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</p>\n        </div>\n      </div>\n    </div>\n  </body>\n\n  <footer>\n    <div id=\"upper-footer\">\n      <!--Insert links to professional pages  -->\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map