(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
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
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    //window.scrollTo(0, this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }).subscribe(function (event) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]),
        __metadata("design:type", _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table-list/table-list.component */ "./src/app/table-list/table-list.component.ts");
/* harmony import */ var _table_list_candidate_element_candidate_element_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table-list/candidate-element/candidate-element.component */ "./src/app/table-list/candidate-element/candidate-element.component.ts");
/* harmony import */ var _services_api_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/api.services */ "./src/app/services/api.services.ts");
/* harmony import */ var _lib_FilterUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/FilterUtils */ "./src/app/lib/FilterUtils.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _circular_progress_circular_progress_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./circular-progress/circular-progress.component */ "./src/app/circular-progress/circular-progress.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var angularFire2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularFire2 */ "./node_modules/angularFire2/index.js");
/* harmony import */ var angularFire2__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angularFire2__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _table_list_candidate_details_candidate_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./table-list/candidate-details/candidate-details.component */ "./src/app/table-list/candidate-details/candidate-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
                _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_11__["TableListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _circular_progress_circular_progress_component__WEBPACK_IMPORTED_MODULE_18__["CircularProgressComponent"],
                _table_list_candidate_element_candidate_element_component__WEBPACK_IMPORTED_MODULE_12__["CandidateElementComponent"],
                _table_list_candidate_details_candidate_details_component__WEBPACK_IMPORTED_MODULE_25__["CandidateDetailsComponent"]
            ],
            entryComponents: [
                _table_list_candidate_details_candidate_details_component__WEBPACK_IMPORTED_MODULE_25__["CandidateDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_15__["ChartModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_23__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthModule"], angularFire2__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firbase)
            ],
            providers: [_services_api_services__WEBPACK_IMPORTED_MODULE_13__["ApiServices"], _lib_FilterUtils__WEBPACK_IMPORTED_MODULE_14__["FilterUtils"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] }, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-list/table-list.component */ "./src/app/table-list/table-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"] },
    { path: 'candidate-details', component: _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_5__["TableListComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/circular-progress/circular-progress.component.html":
/*!********************************************************************!*\
  !*** ./src/app/circular-progress/circular-progress.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"12vw\" height=\"12vw\" style=\"margin-top:0px\">\r\n    <circle cx=\"50%\" cy=\"50%\" r=\"45%\" fill=\"none\" stroke=\"#074D80\" stroke-width=\"7%\" />\r\n    <circle cx=\"50%\" cy=\"50%\" r=\"45%\" fill=\"none\" stroke=\"#D83F45\" stroke-width=\"7%\" [attr.stroke-dasharray]=\"totalFill+'vw'\"\r\n    [attr.stroke-dashoffset]=\"val1\" style=\"transition: .6s linear\"/>\r\n    <text x=\"50%\" y=\"50%\" font-family=\"Roboto\" font-size=\"2.5vw\" fill=\"#4A4A4A\" text-anchor=\"middle\" font-weight=\"500\">{{title}}</text>\r\n    <text x=\"50%\" y=\"60%\" font-family=\"Roboto\" font-size=\"1vw\" fill=\"#4A4A4A\" text-anchor=\"middle\">{{subtitle}}</text>\r\n</svg>"

/***/ }),

/***/ "./src/app/circular-progress/circular-progress.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/circular-progress/circular-progress.component.ts ***!
  \******************************************************************/
/*! exports provided: CircularProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularProgressComponent", function() { return CircularProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircularProgressComponent = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CircularProgressComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CircularProgressComponent.prototype, "subtitle", void 0);
    CircularProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-circular-progress',
            template: __webpack_require__(/*! ./circular-progress.component.html */ "./src/app/circular-progress/circular-progress.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CircularProgressComponent);
    return CircularProgressComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a routerLink=\"/candidate-details\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.gadsolutions.com/\">\r\n                        Company\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}} <a href=\"https://www.gadsolutions.com/\">gadgeon Solutions</a>\r\n        </p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.topnav {\r\n  overflow: auto;\r\n  background-color: #074D80;\r\n}\r\n\r\n.topnav a {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.topnav a:hover {\r\n  background-color: #074D80;\r\n  color: black;\r\n}\r\n\r\n.active {\r\n  background-color: #074D80;\r\n  color: white;\r\n}\r\n\r\n.topnav .icon {\r\n  display: none;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav a:not(:first-child) {display: none;}\r\n  .topnav a.icon {\r\n    float: right;\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav.responsive {position: relative;}\r\n  .topnav.responsive .icon {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  .topnav.responsive a {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\" id=\"myTopnav\">\r\n    <a class=\"active\">\r\n        <img src=\"../../../assets/img/image-gad.png\" height=\"50px\">\r\n    </a>\r\n    <a style=\"float: right!important;\" (click)=\"logout()\" >\r\n        <i class=\"material-icons\">person</i>\r\n        <label for=\"\"style=\"cursor: pointer;\">Logout</label>\r\n    </a>\r\n    <a class=\"icon\" (click)=\"myFunction()\">\r\n        <i class=\"material-icons click-icon\">{{icon}}</i>\r\n    </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.services */ "./src/app/services/api.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, apicall, router) {
        this.element = element;
        this.apicall = apicall;
        this.router = router;
        this.icon = 'menu';
        this.location = location;
        this.sidebarVisible = false;
        this.bindNotification();
    }
    NavbarComponent.prototype.readNotification = function (data) {
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
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
        if (this.icon == 'menu') {
            this.icon = 'close';
        }
        else {
            this.icon = 'menu';
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_api_services__WEBPACK_IMPORTED_MODULE_3__["ApiServices"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white path{\r\n        fill: white;\r\n}"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <li>\r\n                <p style=\"color: white;font-size: 15px;font-weight: 500;padding: 20%;\">\r\n                    Gadgeon\r\n                </p>\r\n            </li>\r\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} navbar-collapse\" >\r\n                <a [routerLink]=\"[menuItem.path]\" *ngIf=\"menuItem.iconFlag\">\r\n                    <br *ngIf=\"menuItem.iconFlag\">\r\n                    <i class=\"material-icons\" *ngIf=\"menuItem.iconFlag\">{{menuItem.icon}}</i>\r\n                    <br *ngIf=\"menuItem.iconFlag\">\r\n                    <p style=\"margin-top:2px;margin-bottom: 2px;font-size: 100%\" *ngIf=\"menuItem.iconFlag\">{{menuItem.title}}</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: '/candidate-details', title: 'Home', icon: 'home', class: '', imageWhite: '', imageDull: '', iconFlag: true },
    { path: '/user-profile', title: 'Register', icon: 'playlist_add', class: '', imageWhite: '', imageDull: '', iconFlag: localStorage.getItem("adminLoginGad") == "true" ? true : false }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/config/app.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/app.config.ts ***!
  \**************************************/
/*! exports provided: APP_CONFIG, AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('app.config');
var AppConfig = {
    endpoints: {
        serverIp: 'https://freshers.gadgeon.com'
    }
};


/***/ }),

/***/ "./src/app/lib/FilterUtils.ts":
/*!************************************!*\
  !*** ./src/app/lib/FilterUtils.ts ***!
  \************************************/
/*! exports provided: FilterUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUtils", function() { return FilterUtils; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterUtils = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FilterUtils);
    return FilterUtils;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n    min-width: 300px;\n    min-height: 430px;\n    width:300px;\n    background-color: white;\n   \n  }\n  @media screen and (max-width: 800px) {\n    .login-card{\n        position: fixed;\n        top: 0;\n        left: 0;\n        width:100%;\n        height: 100vh;\n        overflow:auto;\n        min-width: 100%;\n        min-height: 100vh;\n    }\n    \n    .login-container{\n        padding-right:4%;\n    }\n    .md-card-actions {\n        float:right;\n        padding-right: 4%;    \n    }\n}\n  @media screen and (min-width: 800px) {\n.login-card {\n    width:31%;\n    min-width: 400px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    border:0.1px solid rgba(0, 0, 0, 0.05);\n    \n}\n\n\n}\n  .login-header {\n    min-height: 65px;\n    padding-top:2%; \n}\n  .login-content {\n    min-height: 160px;\n    margin-top:5%;\n}\n  .login-fields {\n    margin-top: 5%;\n}\n  .main-div-header {\n  margin-top: 9%;\n}\n  .login-container{\n    margin-left: 2%;\n    margin-right:2%;\n    margin-top:2%;\n   \n\n}\n  .login-container > *{\n    width:100%;\n}\n  .login-right-align {\n    text-align: right;\n}\n  input.login-right-align::-webkit-outer-spin-button,\ninput.login-right-align::-webkit-inner-spin-button {\n    display: none;\n}\n  input.login-right-align {\n    -moz-appearance: textfield;\n}\n  .md-card-actions {\n    float:right;\n    margin-right: 2%;\n    \n}\n  .mat-card-image-size {\n    max-width: 121%;\n    margin-left: auto;\n}\n  .build-details{\n    position: absolute;\n    left:0;\n    bottom:0;\n}\n  .logo{\n    margin-top:4%;\n   margin:0 auto;\n\n  \n}\n  .mat-card-header-text{\n    padding-top:200px;\n    margin:0;\n}\n  .login-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  .login-full-width {\n    width: 100%;\n  }\n  .btn-signin {\n    background-color: #125688;\n    color: white;\n    width: 97%;\n    margin-left: 4%;\n  }\n  .btn-register {\n    background-color: #f48636;\n    color: white;\n    width: 97%;\n    margin-top: 3%;\n    margin-bottom: 3%;\n  }\n  "

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"login-card\">\r\n    <img src=\"../../assets/img/logo-login.png\" alt=\"\" width=\"170\" height=\"150\" style=\"margin-left:23%\">\r\n    <mat-card-content flex>\r\n            <div class=\"login-container\" >\r\n                <mat-form-field class=\"login-fields\">\r\n                  <input matInput placeholder=\"Email\" [formControl]=\"email\" #emailid required (keyup.enter)=\"login()\" autofocus pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$\">\r\n                  <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n                 </mat-form-field>\r\n                 <mat-form-field class=\"login-fields\">\r\n                      <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" [formControl]=\"password\" minlength=\"8\" #passwordfield required (keydown.enter)=\"login()\">\r\n                      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                      <mat-error *ngIf=\"password.invalid \">{{getPasswordErrorMessage()}}</mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n        </mat-card-content>\r\n            <mat-card-actions >\r\n                    <button mat-raised-button class=\"btn-signin\" style=\"margin-left:1%\" (click)=\"login()\">Login</button>\r\n                    <div fxFlex style=\"margin:2%\"></div>\r\n                    <button mat-button class=\"btn-register\" (click)=\"Register()\">Register</button>\r\n               </mat-card-actions>\r\n            \r\n            <div *ngIf=\"IsInvalidUser\" class=\"help-block\">\r\n                <label for=\"\" style=\"color:red\">{{message}}</label>\r\n            </div>\r\n            <div fxFlex style=\"margin:5%\"></div>\r\n\r\n    </mat-card>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, afAuth, snackBar, authenticationService) {
        this.route = route;
        this.router = router;
        this.afAuth = afAuth;
        this.snackBar = snackBar;
        this.authenticationService = authenticationService;
        this.model = {};
        this.hide = true;
        this.loading = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.loginFlag = false;
        this.IsInvalidUser = false;
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/candidate-details');
        }
    }
    /**
   * Method to prepare and send back the email error message
   */
    LoginComponent.prototype.getEmailErrorMessage = function () {
        if (this.email.hasError('required')) {
            return 'Please enter a valid email address';
        }
        if (this.email.hasError('email')) {
            return 'Please enter a valid email address';
        }
        if (this.email.hasError('pattern')) {
            return 'Please enter a valid email address';
        }
        return '';
    };
    /**
     * Method to prepare and send back to password error message
     */
    LoginComponent.prototype.getPasswordErrorMessage = function () {
        return 'Password must have at least eight character.';
    };
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
        // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(success =>{
        //this.router.naviga
        //});
        if (this.email.value == "" || this.password.value == "" || this.password.invalid || this.email.invalid) {
            this.snackBar.open('Please enter valid username & password', '', { duration: 1000 });
            if (this.email.value == "" || this.email.invalid) {
                this.emailid.nativeElement.focus();
            }
            else {
                this.passwordfield.nativeElement.focus();
            }
            return false;
        }
        if (this.email.value == "hr@gadgeon.com" && this.password.value == "Hr@Gad#2018") {
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
            this.authenticationService.login(this.email.value, this.password.value).subscribe(function (data) {
                console.log(data["body"]);
                if (data["body"]['succuss'] == true) {
                    console.log("Success");
                    localStorage.setItem('userLogin', 'true');
                    localStorage.setItem('username', _this.email.value);
                    _this.loading = true;
                    localStorage.setItem("gadLoginTocken", data["body"]["token"]);
                    _this.loginFlag = true;
                    _this.router.initialNavigation();
                    _this.router.navigateByUrl('/candidate-details');
                }
            }, function (error) {
                _this.IsInvalidUser = true;
                _this.snackBar.open('Invalid username or password', '', { duration: 2000 });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('emailid'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "emailid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('passwordfield'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "passwordfield", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/api.services.ts":
/*!******************************************!*\
  !*** ./src/app/services/api.services.ts ***!
  \******************************************/
/*! exports provided: ApiServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServices", function() { return ApiServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiServices = /** @class */ (function () {
    function ApiServices(http) {
        this.http = http;
        this.serverIp = _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].endpoints["serverIp"];
    }
    ApiServices.prototype.getCandidateList = function () {
        return this.http.get(this.serverIp + "/student/adminprovider");
    };
    ApiServices.prototype.getCandidateDetail = function () {
        var url = this.serverIp + '/student/result/' + localStorage.getItem("username") + '/' + localStorage.getItem("gadLoginTocken");
        return this.http.get(url);
    };
    ApiServices.prototype.updateStatus = function (data) {
        var url = this.serverIp + '/student';
        console.log("data", data);
        return this.http.put(url, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        });
    };
    ApiServices.prototype.submitCandidateRecord = function (userData) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        return this.http.post(this.serverIp + '/student', userData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        });
    };
    ApiServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiServices);
    return ApiServices;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app.config */ "./src/app/config/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.loginf = localStorage.getItem('userLogin') == "true" ? true : false;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var url = _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].endpoints["serverIp"] + "/login";
        var data = {
            "email": username,
            "password": password
        };
        var userlogin;
        return this.http.post(url, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        });
    };
    AuthenticationService.prototype.canActivate = function (route, state) {
        return this.loginf;
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('userLogin');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/table-list/candidate-details/candidate-details.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/table-list/candidate-details/candidate-details.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".update-select-fields {\n    padding-left: 5%!important;\n}\n"

/***/ }),

/***/ "./src/app/table-list/candidate-details/candidate-details.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/table-list/candidate-details/candidate-details.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\" border-radius: 20px; background-color: orange; text-align: center; \">\n  <h1 mat-dialog-title> {{data.name}}</h1>\n</div>\n<div mat-dialog-content>\n   <mat-list>\n     <table>\n       <tr>\n         <td>\n            <mat-list-item><i class=\"material-icons\">\n                email\n                </i>    {{data.email}}\n             </mat-list-item>\n         </td>\n         <td>\n            <mat-list-item><i class=\"material-icons\">\n                phone\n                </i>   {{data.mobile}}\n             </mat-list-item>\n         </td>\n       </tr>\n       <tr>\n         <td>\n            <mat-list-item><i class=\"material-icons\">\n                assignment\n                </i>   {{data.batch}}\n             </mat-list-item>\n         </td>\n         <td>\n                <mat-list-item><i class=\"material-icons\">\n                    school\n                    </i>   {{data.college}}</mat-list-item>\n        </td>\n         \n      <mat-divider></mat-divider>\n       </tr>\n     </table>\n      \n   </mat-list>\n   <mat-form-field class=\"update-select-fields\">\n     Written Test\n      <mat-select [(value)]=\"writingTestResult\" required>\n        <mat-option value=\"Pending\">Pending</mat-option>\n        <mat-option value=\"Pass\" color=\"red\">Passed</mat-option>\n        <mat-option value=\"Fail\">Failed</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"update-select-fields\">\n        Technical Round 1\n         <mat-select [(value)]=\"technicalRound1Result\" required>\n           <mat-option value=\"Pending\">Pending</mat-option>\n           <mat-option value=\"Pass\">Passed</mat-option>\n           <mat-option value=\"Fail\">Failed</mat-option>\n         </mat-select>\n       </mat-form-field>\n       <mat-form-field class=\"update-select-fields\" required>\n          Technical Round 2\n           <mat-select [(value)]=\"technicalRound2Result\">\n             <mat-option value=\"Pending\">Pending</mat-option>\n             <mat-option value=\"Pass\">Passed</mat-option>\n             <mat-option value=\"Fail\">Failed</mat-option>\n           </mat-select>\n         </mat-form-field>\n         <mat-form-field class=\"update-select-fields\" required>\n            HR Round\n             <mat-select [(value)]=\"hrRound2Result\">\n               <mat-option value=\"Pending\">Pending</mat-option>\n               <mat-option value=\"Pass\">Passed</mat-option>\n               <mat-option value=\"Fail\">Failed</mat-option>\n             </mat-select>\n           </mat-form-field>\n</div>\n<div mat-dialog-actions align=\"end\">\n   <button mat-raised-button style=\"background-color: #d42f2f;\" (click)=\"onNoClick()\">Cancel</button>\n   <button mat-raised-button style=\"background-color: green;\" (click)=\"updateStatus()\">Update Staus</button>\n   \n</div>\n\n<div style=\"color: green;padding-top: 3%;font-size: medium;text-align: center;\">\n  {{successMessage}}\n</div>\n<div style=\"color: red;padding-top: 3%;font-size: medium;text-align: center;\">\n  {{errorMessage}}\n</div>"

/***/ }),

/***/ "./src/app/table-list/candidate-details/candidate-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/table-list/candidate-details/candidate-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CandidateDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateDetailsComponent", function() { return CandidateDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.services */ "./src/app/services/api.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CandidateDetailsComponent = /** @class */ (function () {
    function CandidateDetailsComponent(dialogRef, apicall, data) {
        this.dialogRef = dialogRef;
        this.apicall = apicall;
        this.data = data;
        this.technicalRound1Result = this.data.technicalRound1Result;
        this.technicalRound2Result = this.data.technicalRound2Result;
        this.writingTestResult = this.data.writingTestResult;
        this.hrRound2Result = this.data.hrRound2Result;
        this.successMessage = "";
        this.errorMessage = "";
    }
    CandidateDetailsComponent.prototype.ngOnInit = function () {
        console.log(this.data.name);
    };
    CandidateDetailsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CandidateDetailsComponent.prototype.updateStatus = function () {
        var _this = this;
        this.apicall.updateStatus({
            "email": this.data.email,
            "writingTestResult": this.writingTestResult,
            "aptitudeTestResult": this.writingTestResult,
            "technicalRound1Result": this.technicalRound1Result,
            "technicalRound2Result": this.technicalRound2Result,
            "hrRound2Result": this.hrRound2Result,
        }).subscribe(function (data) {
            console.log(data);
            if (data.status == 200) {
                _this.successMessage = "status updated successfully";
                _this.errorMessage = "";
            }
            else {
                _this.successMessage = "";
                _this.errorMessage = "status updation failed";
            }
            //this.dialogRef.close();
        });
    };
    CandidateDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidate-details',
            template: __webpack_require__(/*! ./candidate-details.component.html */ "./src/app/table-list/candidate-details/candidate-details.component.html"),
            styles: [__webpack_require__(/*! ./candidate-details.component.css */ "./src/app/table-list/candidate-details/candidate-details.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _services_api_services__WEBPACK_IMPORTED_MODULE_2__["ApiServices"], Object])
    ], CandidateDetailsComponent);
    return CandidateDetailsComponent;
}());



/***/ }),

/***/ "./src/app/table-list/candidate-element/candidate-element.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/table-list/candidate-element/candidate-element.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".atol-element-lg{\r\n    color: gray;\r\n    margin-left:5%;\r\n    font-size: 200%;\r\n}\r\n.atol-element-sm{\r\n    color: gray;\r\n    margin-left:5%;\r\n    font-size: 150%;\r\n}"

/***/ }),

/***/ "./src/app/table-list/candidate-element/candidate-element.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/table-list/candidate-element/candidate-element.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section data-toggle=\"modal\" [attr.data-target]=\"'#'+candElement._id\">\r\n    <div class=\"row gadtablerow\">\r\n        <div class=\"col-md-1\">\r\n            {{slno+1}}\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            {{candElement.name}}\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            {{candElement.college}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            {{candElement.yop}}\r\n        </div>\r\n        \r\n        <div class=\"col-md-1\">\r\n            {{candElement.mobile}}\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            {{candElement.email}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            {{candElement.batch}}\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- Modal -->\r\n<div [attr.id]=\"candElement._id\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h5 class=\"card-title\">Update Status - {{candElement.name}}</h5>\r\n            </div>\r\n            <br>\r\n            <div class=\"container\">\r\n                    <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4\">\r\n                                    Written Test\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <select name=\"\" id=\"\" [(ngModel)]=\"writingTestResult\">\r\n                                            <option>Fail</option>\r\n                                            <option>Pass</option>\r\n                                            <option>Pending</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4\">\r\n                                    Tehnical Round1\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <select name=\"\" id=\"\"[(ngModel)]=\"technicalRound1Result\">\r\n                                            <option>Fail</option>\r\n                                            <option>Pass</option>\r\n                                            <option>Pending</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4\">\r\n                                    Tehnical Round2\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <select name=\"\" id=\"\"[(ngModel)]=\"technicalRound2Result\">\r\n                                            <option>Fail</option>\r\n                                            <option>Pass</option>\r\n                                            <option>Pending</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4\">\r\n                                    HR Round\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <select name=\"\" id=\"\"[(ngModel)]=\"hrRound2Result\">\r\n                                            <option>Fail</option>\r\n                                            <option>Pass</option>\r\n                                            <option>Pending</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <button type=\"button\" class=\"btn btn-sm gadbutton\" (click)=\"updateStatus()\">Update Status</button>\r\n                            </div>\r\n                        </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/table-list/candidate-element/candidate-element.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/table-list/candidate-element/candidate-element.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CandidateElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateElementComponent", function() { return CandidateElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.services */ "./src/app/services/api.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CandidateElementComponent = /** @class */ (function () {
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
            "hrRound2Result": this.hrRound2Result,
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CandidateElementComponent.prototype, "slno", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CandidateElementComponent.prototype, "candElement", void 0);
    CandidateElementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidate-element',
            template: __webpack_require__(/*! ./candidate-element.component.html */ "./src/app/table-list/candidate-element/candidate-element.component.html"),
            styles: [__webpack_require__(/*! ./candidate-element.component.css */ "./src/app/table-list/candidate-element/candidate-element.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_services__WEBPACK_IMPORTED_MODULE_1__["ApiServices"]])
    ], CandidateElementComponent);
    return CandidateElementComponent;
}());



/***/ }),

/***/ "./src/app/table-list/table-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/table-list/table-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expand_caret {\r\n    -webkit-transform: scale(1.6);\r\n            transform: scale(1.6);\r\n    margin-left: 8px;\r\n    margin-top: -4px;\r\n}\r\na[aria-expanded='false'] > .expand_caret {\r\n    -webkit-transform: scale(1.6) rotate(-90deg);\r\n            transform: scale(1.6) rotate(-90deg);\r\n}\r\ntable {\r\n    width: 100%;\r\n    font-family: sans-serif!important;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n.mat-row:hover {\r\n    background-color: orange;\r\n    cursor: pointer;\r\n  }"

/***/ }),

/***/ "./src/app/table-list/table-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/table-list/table-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-panel\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet></router-outlet>\r\n        <div style=\"overflow-x:scroll;margin:1%\">\r\n                <mat-form-field *ngIf=\"IsadminLogin\">\r\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search name, college, mobile no, email, batch\">\r\n                      </mat-form-field>\r\n                      \r\n                      <div *ngIf=\"IsadminLogin;else candidate\">\r\n                        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n                      \r\n                         \r\n                          <!-- Name Column -->\r\n                          <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                            <td mat-cell *matCellDef=\"let row\" (click)=\"openDialog(row)\" > {{row.name}} </td>\r\n                          </ng-container>\r\n                \r\n                          <!-- College Column -->\r\n                          <ng-container matColumnDef=\"college\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> College </th>\r\n                                <td mat-cell *matCellDef=\"let row\" (click)=\"openDialog(row)\"> {{row.college}} </td>\r\n                              </ng-container>\r\n                         <!-- Mobile Column -->\r\n                          <ng-container matColumnDef=\"mobile\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </th>\r\n                                <td mat-cell *matCellDef=\"let row\" (click)=\"openDialog(row)\"> {{row.mobile}} </td>\r\n                              </ng-container>\r\n                          <!-- Email Column -->\r\n                          <ng-container matColumnDef=\"email\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n                                <td mat-cell *matCellDef=\"let row\" (click)=\"openDialog(row)\"> {{row.email}} </td>\r\n                              </ng-container>\r\n                         <!-- Passout Column -->\r\n                          <ng-container matColumnDef=\"passout\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Passout </th>\r\n                                <td mat-cell *matCellDef=\"let row\" (click)=\"openDialog(row)\"> {{row.passout}} </td>\r\n                              </ng-container>\r\n                        <!-- Batch Column -->\r\n                        <ng-container matColumnDef=\"batch\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Batch </th>\r\n                                <td mat-cell *matCellDef=\"let row\" (click)=\"openDialog(row)\"> {{row.batch}} </td>\r\n                            </ng-container>\r\n                          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                          </tr>\r\n                        </table>\r\n                      \r\n                        <mat-paginator [pageSizeOptions]=\"[7, 10, 25, 100]\"></mat-paginator>\r\n                      </div>\r\n        </div>\r\n    <ng-template #candidate>\r\n        <div class=\"main-content\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-danger\">\r\n                    <h4 class=\"card-title\" style=\"color:white\">Gadgeon Recruitment 2018</h4>\r\n                    <p class=\"card-title\" style=\"color:white; font-size: 120%;color: silver\">Candidate Detail</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"container\">\r\n                        <div class=\"section\">\r\n                            <div class=\"gadgeon-content\">\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        <label for=\"\">\r\n                                            Name\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <p for=\"Name\">{{candidateDetail.name}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        <label for=\"\">Email</label>\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <p for=\"email\">{{candidateDetail.email}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        <label for=\"\">College</label>\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <p for=\"College\">{{candidateDetail.college}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        <label for=\"\">Batch</label>\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <p for=\"batch\">{{candidateDetail.batch}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\"\r\n                                        aria-expanded=\"false\" aria-controls=\"collapseExample\" (click)=\"rotate()\">\r\n                                        <label class=\"click-icon\">Status <i class=\"material-icons middle-icon\">{{expand}}</i></label>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <p for=\"overallstatus\">Pending</p>\r\n                                        <br>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"collapse tab\" id=\"collapseExample\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-4\">\r\n                                                        <label for=\"\">Written Test</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-6\">\r\n                                                        <p for=\"status\" [ngStyle]=\"{color: getColorW()}\">{{candidateDetail.writingTestResult}}</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <br>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-4\">\r\n                                                        <label for=\"\">Tehnical Round1</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-6\">\r\n                                                        <p for=\"status\" [ngStyle]=\"{color: getColorT1()}\">{{candidateDetail.technicalRound1Result}}</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <br>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-4\">\r\n                                                        <label for=\"\">Tehnical Round2</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-6\">\r\n                                                        <p for=\"status\" [ngStyle]=\"{color: getColorT2()}\">{{candidateDetail.technicalRound2Result}}</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <br>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-4\">\r\n                                                        <label for=\"\">HR Round</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-6\">\r\n                                                        <p for=\"status\" [ngStyle]=\"{color: getColorH()}\">{{candidateDetail.hrRound2Result}}</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\">\r\n                                        <label for=\"\">Date</label>\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">\r\n                                        <p for=\"batch\">{{candidateDetail.registrationDate}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/table-list/table-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/table-list/table-list.component.ts ***!
  \****************************************************/
/*! exports provided: TableListComponent, CandidateDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function() { return TableListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateDetailComponent", function() { return CandidateDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.services */ "./src/app/services/api.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _candidate_details_candidate_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./candidate-details/candidate-details.component */ "./src/app/table-list/candidate-details/candidate-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var TableListComponent = /** @class */ (function () {
    function TableListComponent(renderer, apicall, router, dialog) {
        this.renderer = renderer;
        this.apicall = apicall;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'college', 'email', 'mobile', 'batch'];
        this.candidateList = [];
        this.candidateDetail = {};
        this.IsadminLogin = localStorage.getItem("adminLoginGad") == "true" ? true : false;
        this.expand = 'expand_more';
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
    TableListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
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
            var list = [];
            _this.candidateList.forEach(function (element) {
                list.push({ "name": element.name, "college": element.college,
                    "mobile": element.mobile, "passout": element.yop,
                    "batch": element.batch, "email": element.email,
                    "technicalRound1Result": element.technicalRound1Result, "technicalRound2Result": element.technicalRound2Result,
                    "writingTestResult": element.writingTestResult, "hrRound2Result": element.hrRound2Result
                });
            });
            // Assign the data to the data source for the table to render
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](list);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    TableListComponent.prototype.getColorT1 = function () {
        if (this.candidateDetail["technicalRound1Result"] == 'Pass') {
            return "green";
        }
        if (this.candidateDetail["technicalRound1Result"] == 'Pending') {
            return "orange";
        }
        if (this.candidateDetail["technicalRound1Result"] == 'Fail') {
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
        if (this.candidateDetail["technicalRound2Result"] == 'Fail') {
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
        if (this.candidateDetail["writingTestResult"] == 'Fail') {
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
        if (this.candidateDetail["hrRound2Result"] == 'Fail') {
            return "red";
        }
        else {
            return 'blue';
        }
    };
    TableListComponent.prototype.rotate = function () {
        if (this.expand == 'expand_less') {
            this.expand = 'expand_more';
        }
        else {
            this.expand = 'expand_less';
        }
    };
    TableListComponent.prototype.openDialog = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(_candidate_details_candidate_details_component__WEBPACK_IMPORTED_MODULE_4__["CandidateDetailsComponent"], {
            width: '550px',
            data: { name: row.name, college: row.college, email: row.email,
                batch: row.batch, mobile: row.mobile, passout: row.passout,
                writingTestResult: row.writingTestResult, technicalRound1Result: row.technicalRound1Result,
                technicalRound2Result: row.technicalRound2Result, hrRound2Result: row.hrRound2Result
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.initdata();
            console.log('The dialog was closed');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TableListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TableListComponent.prototype, "sort", void 0);
    TableListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-list',
            template: __webpack_require__(/*! ./table-list.component.html */ "./src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__(/*! ./table-list.component.css */ "./src/app/table-list/table-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _services_api_services__WEBPACK_IMPORTED_MODULE_2__["ApiServices"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], TableListComponent);
    return TableListComponent;
}());

var CandidateDetailComponent = /** @class */ (function () {
    function CandidateDetailComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CandidateDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidate-details',
            template: __webpack_require__(/*! ./candidate-details/candidate-details.component.html */ "./src/app/table-list/candidate-details/candidate-details.component.html"),
            styles: [__webpack_require__(/*! ./candidate-details/candidate-details.component.css */ "./src/app/table-list/candidate-details/candidate-details.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], CandidateDetailComponent);
    return CandidateDetailComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\" style=\"color:white\">Register Candidate</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"container\">\r\n                            <div class=\"section\">\r\n                                <form *ngIf=\"!isRegSuccess\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"email\">Email address:</label>\r\n                                                <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"model.email\"\r\n                                                    name=\"email1\" [ngModelOptions]=\"{standalone: true}\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"pwd\">Password:</label>\r\n                                                <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"model.password\"\r\n                                                    name=\"password\">\r\n                                                <div *ngIf=\"!this.validateP()\" class=\"help-block\" style=\"color:red\">password should have minimum length of 8</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-5\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Name of the Candidate:</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"model.name\"\r\n                                                    name=\"name\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-5\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Name of the College</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"college\" [(ngModel)]=\"model.college\"\r\n                                                    name=\"college\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Year of Passing</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"yop\" [(ngModel)]=\"model.yop\"\r\n                                                    name=\"yop\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">B-Tech Marks (%)</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"degreePercentage\"\r\n                                                    [(ngModel)]=\"model.degreePercentage\" name=\"degreePercentage\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Plus Two Marks(%)</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"plusTwoPercentage\"\r\n                                                    [(ngModel)]=\"model.plusTwoPercentage\" name=\"plusTwoPercentage\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">SSLC Marks(%)</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"sslcPercentage\" [(ngModel)]=\"model.sslcPercentage\"\r\n                                                    name=\"sslcPercentage\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Mobile Number</label>\r\n                                                <input type=\"tel\" class=\"form-control\" id=\"mobile\" [(ngModel)]=\"model.mobile\"\r\n                                                    name=\"mobile\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"sel1\">Select Batch</label>\r\n                                                <select class=\"form-control\" id=\"batch\" [(ngModel)]=\"model.batch\"\r\n                                                name=\"batch\">\r\n                                                  <option>Morning</option>\r\n                                                  <option>Afternoon</option>\r\n                                                </select>\r\n                                              </div>\r\n                                            </div>\r\n                                    </div>\r\n                                </form>\r\n                                <div class=\"row\">\r\n                                    <label style=\"color: green;font-weight: 500\">{{message}}</label>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                        <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Register()\"*ngIf=\"!isRegSuccess\">Register</button>\r\n                                        <div class=\"clearfix\">\r\n                                        </div>\r\n                                    </div>\r\n                                <div class=\"row\">\r\n                                    <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Login()\" *ngIf=\"isRegSuccess\">Login</button>\r\n                                    <div class=\"clearfix\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.services */ "./src/app/services/api.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_services__WEBPACK_IMPORTED_MODULE_1__["ApiServices"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firbase: {
        apiKey: "AIzaSyCPSRtE-W7WCcEoXp6r4Njrtb0jr66D4Ds",
        authDomain: "gadrecruitment-3dfb4.firebaseapp.com",
        databaseURL: "https://gadrecruitment-3dfb4.firebaseio.com",
        projectId: "gadrecruitment-3dfb4",
        storageBucket: "gadrecruitment-3dfb4.appspot.com",
        messagingSenderId: "982344986094"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Gadgeon\RecruitmentSoftware\FE\UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map