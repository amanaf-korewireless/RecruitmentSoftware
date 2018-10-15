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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
        this.login = localStorage.getItem('userLogin') == 'true' ? false : true;
    }
    AppComponent.prototype.ngOnChanges = function () {
        this.login = localStorage.getItem('userLogin') == 'true' ? false : true;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.init();
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            //this.navbar.sidebarClose();
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    //window.scrollTo(0, this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            //elemMainPanel.scrollTop = 0;
            // elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            //let ps = new PerfectScrollbar(elemMainPanel);
            //ps = new PerfectScrollbar(elemSidebar);
        }
        this.login = localStorage.getItem('userLogin') == 'true' ? false : true;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
        this.login = localStorage.getItem('userLogin') == 'true' ? false : true;
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            //const ps = new PerfectScrollbar(elemMainPanel);
            // ps.update();
        }
        this.login = localStorage.getItem('userLogin') == 'true' ? false : true;
    };
    AppComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AppComponent.prototype.getColorB = function () {
        if (this.login) {
            return '#063A61';
        }
        else {
            return 'transparent';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__table_list_candidate_element_candidate_element_component__ = __webpack_require__("../../../../../src/app/table-list/candidate-element/candidate-element.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_google_map_services__ = __webpack_require__("../../../../../src/app/services/google-map.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lib_FilterUtils__ = __webpack_require__("../../../../../src/app/lib/FilterUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__circular_progress_circular_progress_component__ = __webpack_require__("../../../../../src/app/circular-progress/circular-progress.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__table_list_table_list_component__["a" /* TableListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__circular_progress_circular_progress_component__["a" /* CircularProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_13__table_list_candidate_element_candidate_element_component__["a" /* CandidateElementComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular_highcharts__["a" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_google_map_services__["a" /* GoogleAPIService */], __WEBPACK_IMPORTED_MODULE_15__services_api_services__["a" /* ApiServices */], __WEBPACK_IMPORTED_MODULE_16__lib_FilterUtils__["a" /* FilterUtils */], { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["h" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_19__services_index__["b" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_19__services_index__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'candidate-details', component: __WEBPACK_IMPORTED_MODULE_5__table_list_table_list_component__["a" /* TableListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/circular-progress/circular-progress.component.html":
/***/ (function(module, exports) {

module.exports = "<svg width=\"12vw\" height=\"12vw\" style=\"margin-top:0px\">\r\n    <circle cx=\"50%\" cy=\"50%\" r=\"45%\" fill=\"none\" stroke=\"#074D80\" stroke-width=\"7%\" />\r\n    <circle cx=\"50%\" cy=\"50%\" r=\"45%\" fill=\"none\" stroke=\"#D83F45\" stroke-width=\"7%\" [attr.stroke-dasharray]=\"totalFill+'vw'\"\r\n    [attr.stroke-dashoffset]=\"val1\" style=\"transition: .6s linear\"/>\r\n    <text x=\"50%\" y=\"50%\" font-family=\"Roboto\" font-size=\"2.5vw\" fill=\"#4A4A4A\" text-anchor=\"middle\" font-weight=\"500\">{{title}}</text>\r\n    <text x=\"50%\" y=\"60%\" font-family=\"Roboto\" font-size=\"1vw\" fill=\"#4A4A4A\" text-anchor=\"middle\">{{subtitle}}</text>\r\n</svg>"

/***/ }),

/***/ "../../../../../src/app/circular-progress/circular-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircularProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircularProgressComponent = (function () {
    function CircularProgressComponent() {
        this.totalFill = 34;
    }
    CircularProgressComponent.prototype.ngOnInit = function () {
        this.init();
    };
    CircularProgressComponent.prototype.init = function () {
        this.circle = this.calculateStrokeValue(50, 100);
    };
    CircularProgressComponent.prototype.calculateStrokeValue = function (value, total) {
        this.val1 = (((value / total)) * this.totalFill) + 'vw';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CircularProgressComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CircularProgressComponent.prototype, "subtitle", void 0);
    CircularProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-circular-progress',
            template: __webpack_require__("../../../../../src/app/circular-progress/circular-progress.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CircularProgressComponent);
    return CircularProgressComponent;
}());

//# sourceMappingURL=circular-progress.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a routerLink=\"/candidate-details\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.atollsolutions.com/\">\r\n                        Company\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}} <a href=\"https://www.atollsolutions.com/\">gadgeon Solutions</a>\r\n        </p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.topnav {\r\n  overflow: hidden;\r\n  background-color: #074D80;\r\n}\r\n\r\n.topnav a {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.topnav a:hover {\r\n  background-color: #074D80;\r\n  color: black;\r\n}\r\n\r\n.active {\r\n  background-color: #074D80;\r\n  color: white;\r\n}\r\n\r\n.topnav .icon {\r\n  display: none;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav a:not(:first-child) {display: none;}\r\n  .topnav a.icon {\r\n    float: right;\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav.responsive {position: relative;}\r\n  .topnav.responsive .icon {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  .topnav.responsive a {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\" id=\"myTopnav\">\r\n    <a class=\"active\">\r\n        Gadgeon\r\n    </a>\r\n    <a class=\"\" (click)=\"logout()\" ><label for=\"\"style=\"cursor: pointer;\">Logout</label></a>\r\n    <a class=\"icon\" (click)=\"myFunction()\">\r\n        <i class=\"material-icons\">format_list</i>\r\n    </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(location, element, apicall, router) {
        this.element = element;
        this.apicall = apicall;
        this.router = router;
        this.location = location;
        this.sidebarVisible = false;
        this.bindNotification();
    }
    NavbarComponent.prototype.readNotification = function (data) {
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.username = localStorage.getItem("username");
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.bindNotification();
    };
    NavbarComponent.prototype.bindNotification = function () {
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            //this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem('userLogin');
        localStorage.removeItem('adminLoginGad');
        localStorage.removeItem('gadLoginTocken');
        this.router.navigateByUrl('/');
        location.reload();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_services__["a" /* ApiServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]) === "function" && _d || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white path{\r\n        fill: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <li>\r\n                <p style=\"color: white;font-size: 15px;font-weight: 500;padding: 20%;\">\r\n                    Gadgeon\r\n                </p>\r\n            </li>\r\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} navbar-collapse\" >\r\n                <a [routerLink]=\"[menuItem.path]\" *ngIf=\"menuItem.iconFlag\">\r\n                    <br *ngIf=\"menuItem.iconFlag\">\r\n                    <i class=\"material-icons\" *ngIf=\"menuItem.iconFlag\">{{menuItem.icon}}</i>\r\n                    <br *ngIf=\"menuItem.iconFlag\">\r\n                    <p style=\"margin-top:2px;margin-bottom: 2px;font-size: 100%\" *ngIf=\"menuItem.iconFlag\">{{menuItem.title}}</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: '/candidate-details', title: 'Home', icon: 'home', class: '', imageWhite: '', imageDull: '', iconFlag: true },
    { path: '/user-profile', title: 'Register', icon: 'playlist_add', class: '', imageWhite: '', imageDull: '', iconFlag: localStorage.getItem("adminLoginGad") == "true" ? true : false }
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/config/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_CONFIG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('app.config');
var AppConfig = {
    endpoints: {
        atollEndpoint: 'http://freshers.gadgeon.com/',
        serverIp: 'http://Freshers.gadgeon.com/student'
    }
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".low-header{\r\n    vertical-align: 0px!important;\r\n    bottom: 0px!important;;\r\n    padding: 0px!important;;\r\n    margin: 0px!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content gadgeon-dashboard gadgeon-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-8\" style=\"margin:0px!important\">\r\n            <h5>Gadgeon Home</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <section class=\"row gadgeon-widget\">\r\n            <div class=\"panel panel-collapse \">\r\n                <header class=\"panel-heading\">\r\n                    <label class=\"panel-title\">Recruitment Details</label>\r\n                </header>\r\n                <section class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <p class=\"text-primary\" style=\"color:#074D80\">{{global.totalproduction}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <a href=\"#/candidate-details\" class=\"text-gray\">\r\n                                        <label>Selected</label>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <p class=\"text-primary\" style=\"color:#F6AE2C\">{{global.totalStorage}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <a href=\"#/candidate-details\" class=\"text-gray \">\r\n                                        <label>Pending</label>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <p class=\"text-primary\" style=\"color:#86BBD8\">{{global.totalRepair}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <a href=\"/#/candidate-details\" class=\"text-gray \">\r\n                                        <label>Rejected</label>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <p class=\"text-primary\" style=\"color:#F2641A\">{{global.totalMissing}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <a href=\"#/candidate-details\" class=\"text-gray \">\r\n                                        <label>Kore Pending</label>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <p class=\"text-primary\" style=\"color:#429EA6\">{{global.totalunassigned}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <a href=\"#/candidate-details\" class=\"text-gray \">\r\n                                        <label>Kore Accepted</label>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"global.totalCount > 0\">\r\n                        <div class=\"row\" style=\"width: 96%;margin: 2%;height: 2vh;\">\r\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"background:#074D80;\" [ngStyle]=\"{width: global.prodPercent}\">\r\n                            </div>\r\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"background: #F6AE2C\" [ngStyle]=\"{width: global.storePercent}\">\r\n                            </div>\r\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"background:#86BBD8\" [ngStyle]=\"{width: global.repPercent}\">\r\n                            </div>\r\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"background:#F2641A\" [ngStyle]=\"{width: global.missingPercent}\">\r\n                            </div>\r\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"background: #429EA6\" [ngStyle]=\"{width: global.unUsPercent}\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-8\">\r\n            <section class=\"row gadgeon-widget\" style=\"margin:0px!important\">\r\n                <div class=\"panel panel-collapse\">\r\n                    <header class=\"panel-heading\">\r\n                        <label class=\"panel-title\">Candidate Details Overview Gadgeon</label>\r\n                    </header>\r\n                    <section class=\"panel-body gadgeon-section\">\r\n                        <div class=\"row\" style=\"margin-left:7%\">\r\n                            <div class=\"col-xs-6\">\r\n                                <app-circular-progress [title]=\"'05'\" [subtitle]=\"'vendors'\"></app-circular-progress>\r\n                            </div>\r\n                            <div class=\"col-xs-6\">\r\n                                <svg width=\"100%\" height=\"15%\">\r\n                                    <rect x=\"1vw\" y=\"2vh\" width=\"2vw\" height=\"2vw\" style=\"fill:#074D80;stroke:#074D80;stroke-width:2;\" />\r\n                                    <rect x=\"1vw\" y=\"10vh\" width=\"2vw\" height=\"2vw\" style=\"fill:#D83F45;stroke:#D83F45;stroke-width:2;\" />\r\n                                    <text x=\"5vw\" y=\"4.5vh\" font-family=\"Roboto\" font-size=\"1vw\" fill=\"gray\">Selected</text>\r\n                                    <text x=\"5vw\" y=\"12.5vh\" font-family=\"Roboto\" font-size=\"1vw\" fill=\"gray\">Pending</text>\r\n                                </svg>\r\n                            </div>\r\n                            <div class=\"col-xs-6\">\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n            </section>\r\n        </div>\r\n        <section class=\"col-xs-4 gadgeon-widget\" style=\"margin:0px!important\">\r\n            <div class=\"panel panel-collapse\">\r\n                <header class=\"panel-heading\">\r\n                    <label class=\"panel-title\">Candidate Details Overview Kore</label>\r\n                </header>\r\n                <div class=\"row\">\r\n                    <section class=\"panel-body text-center gadgeon-section\" id=\"DivDailyRTUsageChart\">\r\n                        <app-circular-progress [title]=\"'14'\" [subtitle]=\"'parts'\"></app-circular-progress>\r\n                    </section>\r\n                </div>\r\n                <div class=\"row\" style=\"margin-left:5vw\">\r\n                    <svg width=\"100%\" height=\"15%\">\r\n                        <rect x=\"1vw\" y=\"2vh\" width=\"2vw\" height=\"2vw\" style=\"fill:#074D80;stroke:#074D80;stroke-width:2;\" />\r\n                        <rect x=\"1vw\" y=\"10vh\" width=\"2vw\" height=\"2vw\" style=\"fill:#D83F45;stroke:#D83F45;stroke-width:2;\" />\r\n                        <text x=\"5vw\" y=\"4.5vh\" font-family=\"Roboto\" font-size=\"1vw\" fill=\"gray\">Selected</text>\r\n                        <text x=\"5vw\" y=\"12.5vh\" font-family=\"Roboto\" font-size=\"1vw\" fill=\"gray\">Pending</text>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(apicall, router, global) {
        this.apicall = apicall;
        this.router = router;
        this.global = global;
        this.storageAddedValue = 3;
        this.prodAddedValue = 5;
        this.repairAddedValue = 10;
        this.isRepairAdded = true;
        this.isStorageAdded = true;
        this.isProdAdded = true;
        this.radius = 54;
        this.totalFill = 124;
        localStorage.setItem('selectedTab', 'Production');
        if (localStorage.getItem('userLogin') == 'true') {
            this.init();
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    DashboardComponent.prototype.UpdateTab = function (data) {
        console.log('Emitting', data.target.textContent);
        localStorage.setItem('selectedTab', data.target.textContent);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.init();
    };
    DashboardComponent.prototype.init = function () {
        this.circle1 = this.calculateStrokeValue(80, 100);
        this.circle2 = this.calculateStrokeValue(50, 100);
    };
    DashboardComponent.prototype.calculateStrokeValue = function (value, total) {
        return ({ dasharray: this.totalFill * (value / total), dashoffset: this.totalFill - (this.totalFill * (value / total)) });
    };
    DashboardComponent.prototype.setTab = function (val) {
        this.global.activeTab = val;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "selectedOut", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */]) === "function" && _c || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/lib/FilterUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterUtils = (function () {
    function FilterUtils() {
        this.returnval = [];
    }
    FilterUtils.prototype.FilterProductionData = function (data, type, value) {
        var _this = this;
        data.forEach(function (element) {
            switch (type) {
                case 'toolId':
                    if (element.toolId == value) {
                        _this.returnval.push(element);
                    }
                    break;
                case 'partNumber':
                    if (element.partNumber == value) {
                        _this.returnval.push(element);
                    }
                    break;
                case 'nodeId':
                    if (element.nodeId.toString() == value) {
                        _this.returnval.push(element);
                    }
                    break;
                case 'prodStatusCount':
                    if (element.prodStatusCount.toString() == value) {
                        _this.returnval.push(element);
                    }
                    break;
                case 'vendorName':
                    if (element.vendorName == value) {
                        _this.returnval.push(element);
                    }
                    break;
                case 'date':
                    if (element.date == value) {
                        _this.returnval.push(element);
                    }
                    break;
            }
            return _this.returnval;
        });
    };
    FilterUtils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FilterUtils);
    return FilterUtils;
}());

//# sourceMappingURL=FilterUtils.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loginFlag\" class=\"container\" style=\"margin-top: 4% ;overflow: hidden!important;\">\r\n    <section class=\"container\" style=\"background: white;height: 540px;width: 360px\">\r\n        <div class=\"row\">\r\n            <img src=\"../../assets/img/logo-login.png\" alt=\"\" style=\"margin-left: 20%\" width=\"50%\" height=\"50%\">\r\n        </div>\r\n        <div class=\"row\" style=\"margin:2%\">\r\n            <form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\"\r\n                        required style=\"color:#074D80!important;font-weight: 300!important;\" />\r\n                    <div *ngIf=\"!this.validate()\" class=\"help-block\" style=\"color:red\">Username is required</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n                        required style=\"color:#074D80!important;font-weight: 300!important;\" />\r\n                    <div *ngIf=\"!this.validate()\" class=\"help-block\" style=\"color:red\">Password is required</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-xs-6\">\r\n                        <button [disabled]=\"loading\" class=\"btn btn-sm btn-github\" style=\"background:#074D80;text-transform: unset!important;font-size: 100%\">\r\n                            Sign In\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"col-xs-5\">\r\n                        <button class=\"btn btn-sm btn-github navbar-right\" style=\"background:#074D80;text-transform: unset!important;font-size: 100%\"\r\n                            (click)=\"Register()\">\r\n                            Register\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.loginFlag = false;
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/candidate-details');
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/candidate-details');
        }
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.Register = function () {
        this.router.navigateByUrl('/user-profile');
    };
    LoginComponent.prototype.validate = function () {
        if (this.model.name == undefined || this.model.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.model.username == "hr@gadgeon.com" && this.model.password == "Hr@Gad#2018") {
            localStorage.setItem("adminLoginGad", "true");
            localStorage.setItem('userLogin', 'true');
            localStorage.setItem('username', this.model.username);
            this.loginFlag = true;
            this.loading = true;
            this.router.initialNavigation();
            this.router.navigateByUrl('/candidate-details');
            location.reload();
        }
        else {
            this.authenticationService.login(this.model.username, this.model.password).subscribe(function (data) {
                console.log(data["body"]);
                if (data["body"]['succuss'] == true) {
                    console.log("Success");
                    localStorage.setItem('userLogin', 'true');
                    localStorage.setItem('username', _this.model.username);
                    _this.loading = true;
                    localStorage.setItem("gadLoginTocken", data["body"]["token"]);
                    _this.loginFlag = true;
                    _this.router.initialNavigation();
                    _this.router.navigateByUrl('/candidate-details');
                }
            }, function (error) {
                _this.message = "Invalid username or password";
                alert(_this.message);
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object])
    ], AlertService);
    return AlertService;
    var _a;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiServices = (function () {
    function ApiServices(http) {
        this.http = http;
        this.serviceUrl = __WEBPACK_IMPORTED_MODULE_2__config_app_config__["a" /* AppConfig */].endpoints["atollEndpoint"];
        this.serverIp = __WEBPACK_IMPORTED_MODULE_2__config_app_config__["a" /* AppConfig */].endpoints["serverIp"];
    }
    ApiServices.prototype.getCandidateList = function () {
        return this.http.get(this.serverIp + "/adminprovider");
    };
    ApiServices.prototype.getCandidateDetail = function () {
        var url = this.serverIp + '/result/' + localStorage.getItem("username") + '/' + localStorage.getItem("gadLoginTocken");
        return this.http.get(url);
    };
    ApiServices.prototype.updateStatus = function (data) {
        var url = this.serverIp;
        console.log("data", data);
        return this.http.put(url, data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        });
    };
    ApiServices.prototype.submitCandidateRecord = function (userData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.serverIp, userData, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        });
    };
    ApiServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ApiServices);
    return ApiServices;
    var _a;
}());

//# sourceMappingURL=api.services.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var url = "http://freshers.gadgeon.com/login";
        var data = {
            "email": username,
            "password": password
        };
        var userlogin;
        return this.http.post(url, data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('userLogin');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/global.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events__ = __webpack_require__("../../../../events/events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_events__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalService = (function () {
    function GlobalService(apicall) {
        this.apicall = apicall;
        this.activeTab = 'production';
        this.dropdownChanged = new __WEBPACK_IMPORTED_MODULE_2_events__["EventEmitter"]();
        this.dropdownPeriods = ['Last 24 Hours', 'Last Week', 'Last Month', 'Last Year'];
        this.selectedPeriod = this.dropdownPeriods[0];
        this.totalCount = 0;
        this.totalproduction = 0;
        this.totalStorage = 0;
        this.totalRepair = 0;
        this.totalMissing = 0;
        this.totalunassigned = 0;
        this.init();
    }
    GlobalService.prototype.selectSortPeridDropdown = function (period) {
        this.selectedPeriod = period;
    };
    GlobalService.prototype.init = function () {
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */]) === "function" && _a || Object])
    ], GlobalService);
    return GlobalService;
    var _a;
}());

//# sourceMappingURL=global.services.js.map

/***/ }),

/***/ "../../../../../src/app/services/google-map.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleAPIService = (function () {
    function GoogleAPIService(jsonp) {
        var _this = this;
        this.jsonp = jsonp;
        this.googleReadyObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.jsonp
            .get("https://maps.googleapis.com/maps/api/js?key=AIzaSyAWoCHGzZmNSFKhEbDjsughQ4x8BXmNvT4&callback=JSONP_CALLBACK")
            .retry()
            .subscribe(function (res) {
            if (res.status === 200) {
                _this.googleReadyObservable.complete();
            }
        });
    }
    ;
    GoogleAPIService.prototype.googleReady = function () {
        return this.googleReadyObservable;
    };
    ;
    GoogleAPIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */]) === "function" && _a || Object])
    ], GoogleAPIService);
    return GoogleAPIService;
    var _a;
}());

//# sourceMappingURL=google-map.services.js.map

/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services__ = __webpack_require__("../../../../../src/app/services/global.services.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__global_services__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/table-list/candidate-element/candidate-element.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".atol-element-lg{\r\n    color: gray;\r\n    margin-left:5%;\r\n    font-size: 200%;\r\n}\r\n.atol-element-sm{\r\n    color: gray;\r\n    margin-left:5%;\r\n    font-size: 150%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-list/candidate-element/candidate-element.component.html":
/***/ (function(module, exports) {

module.exports = "<section data-toggle=\"modal\" data-target=\"#myModal\">\r\n    <div class=\"row atolltablerow\">\r\n        <div class=\"col-md-2\">\r\n            {{candElement.name}}\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            {{candElement.college}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            {{candElement.yop}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            {{candElement.degreePercentage}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            {{candElement.plusTwoPercentage}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            {{candElement.sslcPercentage}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            {{candElement.mobile}}\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            {{candElement.email}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            {{candElement.batch}}\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Update Status - {{candElement.name}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        Written Test\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <input [(ngModel)]=\"writingTestResult\" />\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        Tehnical Round1\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <input [(ngModel)]=\"technicalRound1Result\" />\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        Tehnical Round2\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <input [(ngModel)]=\"technicalRound2Result\" />\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        HR Round\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <input [(ngModel)]=\"hrRound2Result\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"updateStatus()\">Update Status</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/table-list/candidate-element/candidate-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateElementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CandidateElementComponent = (function () {
    function CandidateElementComponent(apicall) {
        this.apicall = apicall;
        //this.initmap();
    }
    CandidateElementComponent.prototype.ngOnInit = function () {
    };
    CandidateElementComponent.prototype.ngOnChanges = function (changes) {
    };
    CandidateElementComponent.prototype.updateStatus = function () {
        this.apicall.updateStatus({
            "email": this.candElement.email,
            "writingTestResult": this.writingTestResult,
            "aptitudeTestResult": this.writingTestResult,
            "technicalRound1Result": this.technicalRound1Result,
            "technicalRound2Result": this.technicalRound2Result,
            "hrRound2Result": this.hrRound2Result
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CandidateElementComponent.prototype, "globalopenflag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CandidateElementComponent.prototype, "candElement", void 0);
    CandidateElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-candidate-element',
            template: __webpack_require__("../../../../../src/app/table-list/candidate-element/candidate-element.component.html"),
            styles: [__webpack_require__("../../../../../src/app/table-list/candidate-element/candidate-element.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */]) === "function" && _a || Object])
    ], CandidateElementComponent);
    return CandidateElementComponent;
    var _a;
}());

//# sourceMappingURL=candidate-element.component.js.map

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".click-progress {\r\n    cursor: pointer;\r\n}\r\n.atol_tab{\r\n    width: 20%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-panel\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet *ngIf=\"login\"></router-outlet>\r\n    <div *ngIf=\"IsadminLogin;else candidate\">\r\n        <div class=\"main-content gadgeon-content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-9\">\r\n                    <h5>Candidate List (Gadgeon Recruitment 2018)</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"row atollsearchrow\">\r\n                <button type=\"button\" class=\"btn btn-sm atollbutton\" data-toggle=\"collapse\" data-target=\"#searchprod\">Search Candidate</button>\r\n            </div>\r\n            <br>\r\n            <div class=\"section table-section\">\r\n                <div class=\"row\">\r\n                    <div id=\"searchprod\" class=\"collapse searchbar2\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-2\">\r\n                                <input class=\"col-md-12\" type=\"search\" id=\"email_s\" placeholder=\"Email\">\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <input class=\"col-md-12\" type=\"search\" id=\"name_s\" placeholder=\"Name\">\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <input class=\"col-md-12\" type=\"search\" id=\"batch_s\" placeholder=\"Batch\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <section>\r\n                    <div class=\"row atolltablerow\">\r\n                        <div class=\"col-md-2\">\r\n                            Name\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            College\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                            Passout\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                            BTech %\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                            12th %\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                            10th %\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                            Mobile\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            Email\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                            Batch\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n                <app-candidate-element *ngFor=\"let item of candidateList\" [candElement]=\"item\">\r\n                </app-candidate-element>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <ng-template #candidate>\r\n        <div class=\"main-content\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-danger\">\r\n                    <h4 class=\"card-title\" style=\"color:white\">Gadgeon Recruitment 2018</h4>\r\n                    <label class=\"card-title\" style=\"color:white; font-size: 120%;color: silver\">Candidate Detail</label>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"container\">\r\n                        <div class=\"section\">\r\n                            <div class=\"gadgeon-content\">\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        <label for=\"\">Candidate Name</label>\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <label for=\"Name\">{{candidateDetail.name}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        Email\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <label for=\"email\">{{candidateDetail.email}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        College\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <label for=\"College\">{{candidateDetail.college}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        Batch\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <label for=\"batch\">{{candidateDetail.batch}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        Written Test\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <label for=\"status\" [ngStyle]=\"{color: getColorW()}\">{{candidateDetail.writingTestResult}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        Tehnical Round1\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <label for=\"status\" [ngStyle]=\"{color: getColorT1()}\">{{candidateDetail.technicalRound1Result}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        Tehnical Round2\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <label for=\"status\" [ngStyle]=\"{color: getColorT2()}\">{{candidateDetail.technicalRound2Result}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        HR Round\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <label for=\"status\" [ngStyle]=\"{color: getColorH()}\">{{candidateDetail.hrRound2Result}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        Date\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <label for=\"batch\">{{candidateDetail.registrationDate}}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableListComponent = (function () {
    function TableListComponent(renderer, apicall, router, global) {
        this.renderer = renderer;
        this.apicall = apicall;
        this.router = router;
        this.global = global;
        this.candidateList = [];
        this.candidateDetail = {};
        this.IsadminLogin = localStorage.getItem("adminLoginGad") == "true" ? true : false;
        if (localStorage.getItem('userLogin') == 'true') {
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    TableListComponent.prototype.ngOnInit = function () {
        this.initdata();
    };
    TableListComponent.prototype.ngOnChanges = function () {
        this.initdata();
    };
    TableListComponent.prototype.initdata = function () {
        var _this = this;
        //console.log(localStorage.getItem("adminLoginGad"))
        if (localStorage.getItem("adminLoginGad") == "true") {
            this.IsadminLogin = true;
        }
        else {
            this.IsadminLogin = false;
        }
        this.apicall.getCandidateDetail().subscribe(function (data) {
            console.log((data["data"]));
            _this.candidateDetail = data["data"];
        });
        this.candidateList = [];
        this.apicall.getCandidateList().subscribe(function (data) {
            _this.candidateList = data["data"];
        });
    };
    TableListComponent.prototype.getColorT1 = function () {
        if (this.candidateDetail["technicalRound1Result"] == 'Pass') {
            return "green";
        }
        if (this.candidateDetail["technicalRound1Result"] == 'Pending') {
            return "orange";
        }
        if (this.candidateDetail["technicalRound1Result"] == 'Failed') {
            return "red";
        }
        else {
            return 'blue';
        }
    };
    TableListComponent.prototype.getColorT2 = function () {
        if (this.candidateDetail["technicalRound2Result"] == 'Pass') {
            return "green";
        }
        if (this.candidateDetail["technicalRound2Result"] == 'Pending') {
            return "orange";
        }
        if (this.candidateDetail["technicalRound2Result"] == 'Failed') {
            return "red";
        }
        else {
            return 'blue';
        }
    };
    TableListComponent.prototype.getColorW = function () {
        if (this.candidateDetail["writingTestResult"] == 'Pass') {
            return "green";
        }
        if (this.candidateDetail["writingTestResult"] == 'Pending') {
            return "orange";
        }
        if (this.candidateDetail["writingTestResult"] == 'Failed') {
            return "red";
        }
        else {
            return 'blue';
        }
    };
    TableListComponent.prototype.getColorH = function () {
        if (this.candidateDetail["hrRound2Result"] == 'Pass') {
            return "green";
        }
        if (this.candidateDetail["hrRound2Result"] == 'Pending') {
            return "orange";
        }
        if (this.candidateDetail["hrRound2Result"] == 'Failed') {
            return "red";
        }
        else {
            return 'blue';
        }
    };
    TableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-table-list',
            template: __webpack_require__("../../../../../src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/table-list/table-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */]) === "function" && _d || Object])
    ], TableListComponent);
    return TableListComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=table-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\" style=\"color:white\">Register Candidate</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"container\">\r\n                            <div class=\"section\">\r\n                                <form *ngIf=\"!isRegSuccess\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"email\">Email address:</label>\r\n                                                <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"model.email\"\r\n                                                    name=\"email1\" [ngModelOptions]=\"{standalone: true}\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"pwd\">Password:</label>\r\n                                                <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"model.password\"\r\n                                                    name=\"password\">\r\n                                                <div *ngIf=\"!this.validate()\" class=\"help-block\" style=\"color:red\">password should have minimum length of 8</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-5\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Name of the Candidate:</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"model.name\"\r\n                                                    name=\"name\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-5\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Name of the College</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"college\" [(ngModel)]=\"model.college\"\r\n                                                    name=\"college\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Year of Passing</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"yop\" [(ngModel)]=\"model.yop\"\r\n                                                    name=\"yop\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">B-Tech Marks (%)</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"degreePercentage\"\r\n                                                    [(ngModel)]=\"model.degreePercentage\" name=\"degreePercentage\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Plus Two Marks(%)</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"plusTwoPercentage\"\r\n                                                    [(ngModel)]=\"model.plusTwoPercentage\" name=\"plusTwoPercentage\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">SSLC Marks(%)</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"sslcPercentage\" [(ngModel)]=\"model.sslcPercentage\"\r\n                                                    name=\"sslcPercentage\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Mobile Number</label>\r\n                                                <input type=\"tel\" class=\"form-control\" id=\"mobile\" [(ngModel)]=\"model.mobile\"\r\n                                                    name=\"mobile\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"sel1\">Select Batch</label>\r\n                                                <select class=\"form-control\" id=\"batch\" [(ngModel)]=\"model.batch\"\r\n                                                name=\"batch\">\r\n                                                  <option>Oct 13 Morning</option>\r\n                                                  <option>Oct 13 Afternoon</option>\r\n                                                </select>\r\n                                              </div>\r\n                                            </div>\r\n                                    </div>\r\n                                </form>\r\n                                <div class=\"row\">\r\n                                    <label style=\"color: green;font-weight: 500\">{{message}}</label>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                        <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Register()\"*ngIf=\"!isRegSuccess\">Register</button>\r\n                                        <div class=\"clearfix\">\r\n                                        </div>\r\n                                    </div>\r\n                                <div class=\"row\">\r\n                                    <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Login()\" *ngIf=\"isRegSuccess\">Login</button>\r\n                                    <div class=\"clearfix\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = (function () {
    function UserProfileComponent(apicall, router) {
        this.apicall = apicall;
        this.router = router;
        this.model = {};
        this.isRegSuccess = false;
        this.message = "";
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        console.log(this.model);
    };
    UserProfileComponent.prototype.validate = function () {
        if (this.model.email == undefined) {
            this.message = "Enter your Email";
            return false;
        }
        else if (this.model.password == undefined) {
            this.message = "Enter your Password";
            return false;
        }
        else if (this.model.name == undefined) {
            this.message = "Enter your Name";
            return false;
        }
        else if (this.model.college == undefined) {
            this.message = "Enter your College Name";
            return false;
        }
        else if (this.model.yop == undefined) {
            this.message = "Enter User year of passing";
            return false;
        }
        else if (this.model.degreePercentage == undefined) {
            this.message = "Enter your BTech %";
            return false;
        }
        else if (this.model.plusTwoPercentage == undefined) {
            this.message = "Enter your 12th %";
            return false;
        }
        else if (this.model.sslcPercentage == undefined) {
            this.message = "Enter your 10th %";
            return false;
        }
        else if (this.model.mobile == undefined) {
            console.log("Enter User mobile number");
            return false;
        }
        else if (this.model.batch == undefined) {
            this.message = "Enter your batch";
            return false;
        }
        else {
            return true;
        }
    };
    UserProfileComponent.prototype.validateP = function () {
        if (this.model.password.length < 8) {
            return false;
        }
        else {
            return true;
        }
    };
    UserProfileComponent.prototype.Register = function () {
        var _this = this;
        if (this.validate()) {
            this.apicall.submitCandidateRecord(this.model).subscribe(function (resp) {
                _this.isRegSuccess = resp["body"]["succuss"];
                _this.message = "Registration Completed";
                _this.isRegSuccess = true;
                console.log(_this.isRegSuccess, _this.message);
            }, function (err) {
                var errorMessage = _this.getErrorMessage(JSON.parse(err["error"])["errorCode"]);
                _this.message = errorMessage;
                console.log(JSON.parse(err["error"]));
                _this.router.navigateByUrl("/user-profile");
                //this.message = this.message = err["error"]["errorCode"];
                console.log("Server Error");
            });
        }
    };
    UserProfileComponent.prototype.getErrorMessage = function (errorCode) {
        this.Login();
        var msg = "Invalid Operation";
        switch (errorCode) {
            case "ER001":
                msg = "Server Error...Please contact admin";
                break;
            case "ER002":
                msg = "Server Error...Please contact admin";
                break;
            case "ER003":
                msg = "Candidate already exist..!!";
                break;
        }
        return msg;
    };
    UserProfileComponent.prototype.Login = function () {
        localStorage.setItem('userLogin', "false");
        this.router.navigateByUrl('/login');
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _b || Object])
    ], UserProfileComponent);
    return UserProfileComponent;
    var _a, _b;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map