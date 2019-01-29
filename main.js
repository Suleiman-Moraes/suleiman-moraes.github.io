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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [hidden]=\"!showTemplate\"></app-header>\n<app-menu [hidden]=\"!showTemplate\"></app-menu>\n<!-- Content Wrapper. Contains page content -->\n<div [ngClass]=\"showContentWrapper()\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n  </section>\n  <!-- Main content -->\n  <section class=\"content\">\n    <router-outlet></router-outlet>\n  </section>\n</div>\n<app-footer [hidden]=\"!showTemplate\"></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showTemplate = false;
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.showTemplate.subscribe(function (show) { return _this.showTemplate = show; });
    };
    AppComponent.prototype.showContentWrapper = function () {
        return {
            'content-wrapper': this.shared.isLoggedIn()
        };
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/security/auth.guard */ "./src/app/components/security/auth.guard.ts");
/* harmony import */ var _components_security_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/security/auth.interceptor */ "./src/app/components/security/auth.interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/security/login/login.component */ "./src/app/components/security/login/login.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user-new/user-new.component */ "./src/app/components/user-new/user-new.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ticket-new/ticket-new.component */ "./src/app/components/ticket-new/ticket-new.component.ts");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/ticket-list/ticket-list.component */ "./src/app/components/ticket-list/ticket-list.component.ts");
/* harmony import */ var _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/ticket-detail/ticket-detail.component */ "./src/app/components/ticket-detail/ticket-detail.component.ts");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/components/summary/summary.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_18__["UserNewComponent"],
                _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"],
                _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_20__["TicketNewComponent"],
                _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_22__["TicketListComponent"],
                _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_23__["TicketDetailComponent"],
                _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_24__["SummaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_17__["routes"]
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
                _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
                _dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"],
                _services_ticket_service__WEBPACK_IMPORTED_MODULE_21__["TicketService"],
                _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _components_security_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/components/summary/summary.component.ts");
/* harmony import */ var _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ticket-detail/ticket-detail.component */ "./src/app/components/ticket-detail/ticket-detail.component.ts");
/* harmony import */ var _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ticket-list/ticket-list.component */ "./src/app/components/ticket-list/ticket-list.component.ts");
/* harmony import */ var _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ticket-new/ticket-new.component */ "./src/app/components/ticket-new/ticket-new.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-new/user-new.component */ "./src/app/components/user-new/user-new.component.ts");
/* harmony import */ var _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/security/login/login.component */ "./src/app/components/security/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/security/auth.guard */ "./src/app/components/security/auth.guard.ts");










var ROUTES = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'login', component: _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'user-new', component: _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_5__["UserNewComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'user-new/:id', component: _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_5__["UserNewComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'user-list', component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'ticket-new', component: _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_3__["TicketNewComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'ticket-new/:id', component: _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_3__["TicketNewComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'ticket-list', component: _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_2__["TicketListComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'ticket-detail/:id', component: _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_1__["TicketDetailComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'summary', component: _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__["SummaryComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] }
];
var routes = _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <b>Version</b> 2.4.0\n  </div>\n  <strong>Copyright &copy; 2019 <a href=\"https://adminlte.io\">Suleiman Moraes</a>.</strong> All rights\n  reserved.\n</footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n  <!-- Logo -->\n  <a [routerLink]=\"['/']\"  class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>Help</b></span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>Help Desk</b></span>\n  </a>\n\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n    <!-- Navbar Right Menu -->\n    <div class=\"navbar-custom-menu\">\n      <p style=\"color: white\">{{ shared.user.email }} - {{ shared.user.profileEnum }} | <button class=\"btn btn-link\" (click)=\"signOut()\"><font style=\"color: white\">Sign Out</font></button></p>\n    </div>\n\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/user.model */ "./src/app/model/user.model.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
        this.shared.user = new src_app_model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '');
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signOut = function () {
        this.shared.token = null;
        this.shared.user = null;
        window.location.href = '/login';
        window.location.reload();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Uai come!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\n<aside class=\"main-sidebar\">\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n    <!-- sidebar menu: : style can be found in sidebar.less -->\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\n      <li class=\"treeview\" *ngIf=\"shared.user.profileEnum == 'ADMIN'\">\n        <a href=\"#\">\n          <i class=\"fa fa-edit\"></i> <span>User</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a [routerLink]=\"['/user-list']\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n          <li><a [routerLink]=\"['/user-new']\"><i class=\"fa fa-circle-o\"></i> New User</a></li>\n        </ul>\n      </li>\n\n      <li class=\"treeview\" *ngIf=\"shared.user.profileEnum != 'ADMIN'\">\n        <a href=\"#\">\n          <i class=\"fa fa-edit\"></i> <span>Ticket</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a [routerLink]=\"['/ticket-list']\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n          <li *ngIf=\"shared.user.profileEnum == 'CUSTOMER'\"><a [routerLink]=\"['/ticket-new']\"><i class=\"fa fa-circle-o\"></i> New Ticket</a></li>\n        </ul>\n      </li>\n\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-edit\"></i> <span>Summary</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a [routerLink]=\"['/summary']\"><i class=\"fa fa-circle-o\"></i> To view</a></li>\n        </ul>\n      </li>\n    </ul>\n  </section>\n  <!-- /.sidebar -->\n</aside>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/security/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/components/security/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.shared.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/security/auth.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/security/auth.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authRequest;
        if (this.shared.isLoggedIn()) {
            authRequest = req.clone({
                setHeaders: {
                    'Authorization': this.shared.token
                }
            });
            return next.handle(authRequest);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/security/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/security/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdXJpdHkvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/security/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/security/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\" style=\"margin-left: 20%\">\n  <!-- Horizontal Form -->\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Help Desk | Login</h3>\n    </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"login()\">\n      <div class=\"alert alert-error\" role=\"alert\" *ngIf=\"message\">\n        <strong>E-mail ou senha são inválidos.</strong>\n      </div>\n      <div class=\"box-body\">\n        <div [ngClass]=\"getFormGroupClass(email.invalid, email.dirty)\">\n          <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email</label>\n\n          <div class=\"col-sm-10\">\n            <input type=\"email\" [(ngModel)]=\"user.email\" class=\"form-control\" name=\"email\" id=\"inputEmail\" #email=\"ngModel\"\n              placeholder=\"Email\" email>\n            <span class=\"help-block\" *ngIf=\"email.invalid && email.dirty\">E-mail é inválido</span>\n          </div>\n        </div>\n\n        <div [ngClass]=\"getFormGroupClass(password.invalid, password.dirty)\">\n          <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password</label>\n\n          <div class=\"col-sm-10\">\n            <input type=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"inputPassword\" name=\"password\"\n              #password=\"ngModel\" placeholder=\"Password\" required>\n            <span class=\"help-block\" *ngIf=\"password.invalid && password.dirty\">Password é requerido</span>\n          </div>\n        </div>\n      </div>\n      <!-- /.box-body -->\n      <div class=\"box-footer\">\n        <button type=\"submit\" (click)=\"cancelLogin()\" class=\"btn btn-default\">Cancel</button>\n        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info pull-right\">Sign in</button>\n      </div>\n      <!-- /.box-footer -->\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/components/security/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/security/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '');
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = '';
        this.userService.login(this.user).subscribe(function (userAuthentication) {
            _this.shared.token = userAuthentication.token;
            _this.shared.user = userAuthentication.user;
            _this.shared.user.profileEnum = _this.shared.user.profileEnum.substring(5);
            _this.shared.showTemplate.emit(true);
            _this.router.navigate(['/']);
        }, function (err) {
            _this.shared.token = null;
            _this.shared.user = null;
            _this.shared.showTemplate.emit(false);
            _this.message = 'Erro';
        });
    };
    LoginComponent.prototype.cancelLogin = function () {
        this.message = '';
        this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '');
        window.location.href = '/login';
        window.location.reload();
    };
    LoginComponent.prototype.getFormGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-sucess': !isInvalid && isDirty
        };
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/security/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/security/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/summary/summary.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/summary/summary.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/summary/summary.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/summary/summary.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10\" style=\"margin-left: 0%\">\n  <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n    <strong>{{ message.text }}</strong>\n  </div>\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3>Summary</h3>\n    </div>\n    <div class=\"box-body\">\n      <ul class=\"list-group list-group-unbordered\">\n        <li class=\"list-group-item\">\n          <b>New: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountNovo }}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Resolved: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountResolvido }}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Approved: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountAprovado }}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Disapproved: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountDesaprovado }}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Assigned: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountDesignado }}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Closed: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountFechado }}</span></span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/summary/summary.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/summary/summary.component.ts ***!
  \*********************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _model_summary_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../model/summary.model */ "./src/app/model/summary.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(ticketService) {
        this.ticketService = ticketService;
        this.summary = new _model_summary_model__WEBPACK_IMPORTED_MODULE_2__["Summary"]();
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ticketService.summary().subscribe(function (responseApi) {
            _this.summary = responseApi.data;
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    SummaryComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    SummaryComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/components/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/components/summary/summary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket-detail/ticket-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/ticket-detail/ticket-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LWRldGFpbC90aWNrZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ticket-detail/ticket-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/ticket-detail/ticket-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10\" style=\"margin-left: 0%\">\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3>Detail Ticket</h3>\n    </div>\n    <form class=\"form-horizontal\">\n      <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n        <strong>{{ message.text }}</strong>\n      </div>\n      <div class=\"box-body\">\n        <ul class=\"list-group list-group-unbordered\">\n          <li class=\"list-group-item\">\n            <b>Number: </b> <span>{{ ticket.numero }}</span>\n            <span class=\"pull-right\"><b>Title:</b><span>{{ ticket.titulo }}</span></span>\n          </li>\n          <li class=\"list-group-item\">\n            <b>Priority: </b> <span>{{ ticket.prioridadeEnum }}</span>\n            <span class=\"pull-right\"><b>Create By:</b><span>{{ ticket?.user?.email }}</span></span>\n          </li>\n          <li class=\"list-group-item\">\n            <b>Status: </b> <span>{{ ticket.statusEnum }}</span>\n            <span class=\"pull-right\"><b>Assigned To:</b><span>{{ ticket?.assignedUser?.email }}</span></span>\n          </li>\n          <li class=\"list-group-item\">\n            <b>Date: </b> <span>{{ ticket.data | date:'dd/MM/yyyy' }}</span>\n            <span class=\"pull-right\"><b>Description:</b><span>{{ ticket.descricao }}</span></span>\n          </li>\n          <li class=\"list-group-item\">\n            <span><img [src]=\"ticket.imagem\" width=\"450px\" height=\"370px\"></span>\n            <span class=\"pull-right\">\n              <table class=\"table table-bordered\">\n                <tr>\n                  <th>User Change</th>\n                  <th>Date Change Status</th>\n                  <th>Status</th>\n                </tr>\n                <tr *ngFor=\"let change of ticket.listaChangeStatus\">\n                  <td>{{ change?.userChange.email }}</td>\n                  <td>{{ change?.dataAlteracao | date:'dd/MM/yyyy HH:mm:ss' }}</td>\n                  <td>{{ change?.statusEnum }}</td>\n                </tr>\n              </table>\n            </span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"box-footer\">\n        <button *ngIf=\"shared.user.profileEnum == 'TECHNICIAN' && ticket.statusEnum == 'NOVO'\" \n          (click)=\"changeStatus('DESIGNADO')\"\n          class=\"btn btn-primary\">Accept</button>\n\n        <button *ngIf=\"shared.user.profileEnum == 'TECHNICIAN' && (ticket.statusEnum == 'DESIGNADO' || ticket.statusEnum == 'DESAPROVADO')\" \n          (click)=\"changeStatus('RESOLVIDO')\"\n          class=\"btn btn-primary\">Solve</button>\n\n        <button *ngIf=\"shared.user.profileEnum == 'CUSTOMER' && ticket.statusEnum == 'RESOLVIDO'\" \n          (click)=\"changeStatus('APROVADO')\"\n          class=\"btn btn-primary\">Approve</button>\n\n        <button *ngIf=\"shared.user.profileEnum == 'CUSTOMER' && ticket.statusEnum == 'RESOLVIDO'\" \n          (click)=\"changeStatus('DESAPROVADO')\"\n          class=\"btn btn-primary\">Disapprove</button>\n\n        <button *ngIf=\"shared.user.profileEnum == 'TECHNICIAN' && ticket.statusEnum == 'APROVADO'\" \n          (click)=\"changeStatus('FECHADO')\"\n          class=\"btn btn-primary\">Close</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ticket-detail/ticket-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/ticket-detail/ticket-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: TicketDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailComponent", function() { return TicketDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/ticket.model */ "./src/app/model/ticket.model.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ticket.service */ "./src/app/services/ticket.service.ts");






var TicketDetailComponent = /** @class */ (function () {
    function TicketDetailComponent(ticketService, route) {
        this.ticketService = ticketService;
        this.route = route;
        this.ticket = new src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_3__["Ticket"]('', '', 0, '', '', '', '', '', null, null, null);
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance();
    }
    TicketDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    TicketDetailComponent.prototype.findById = function (id) {
        var _this = this;
        this.ticketService.findById(id).subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
            _this.ticket.data = new Date(_this.ticket.data).toISOString();
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketDetailComponent.prototype.changeStatus = function (status) {
        var _this = this;
        this.ticketService.changeStatus(status, this.ticket).subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
            _this.ticket.data = new Date(_this.ticket.data).toISOString();
            _this.showMessage({
                type: 'success',
                text: 'Successfully changed status'
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketDetailComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketDetailComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-ticket-detail',
            template: __webpack_require__(/*! ./ticket-detail.component.html */ "./src/app/components/ticket-detail/ticket-detail.component.html"),
            styles: [__webpack_require__(/*! ./ticket-detail.component.css */ "./src/app/components/ticket-detail/ticket-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TicketDetailComponent);
    return TicketDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket-list/ticket-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/ticket-list/ticket-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LWxpc3QvdGlja2V0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/ticket-list/ticket-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/ticket-list/ticket-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n  <strong>{{ message.text }}</strong>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"box\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">Ticket List</h3>\n      </div>\n      <!-- /.box-header -->\n\n      <div class=\"box-body\">\n\n        <div class=\"form-group\" *ngIf=\"shared.user.profileEnum == 'TECHNICIAN'\">\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" [(ngModel)]=\"assignedToMe\" name=\"assignedToMe\" id=\"assignedToMe\">\n              <b>Assigned to me</b>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputNumber\" class=\"col-sm-2 control-label\">Number</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" [(ngModel)]=\"ticketFilter.numero\" class=\"form-control\" name=\"numero\" id=\"inputNumber\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputTitulo\" class=\"col-sm-2 control-label\">Título</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" [(ngModel)]=\"ticketFilter.titulo\" class=\"form-control\" name=\"titulo\" id=\"inputTitulo\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputStatus\" class=\"col-sm-2 control-label\">Status</label>\n          <div class=\"col-sm-10\">\n            <select [(ngModel)]=\"ticketFilter.statusEnum\" class=\"form-control select2\" id=\"inputStatus\" name=\"status\"\n              style=\"width: 100%\">\n              <option selected=\"selected\" disabled=\"disabled\" value>Selecione</option>\n              <option>NOVO</option>\n              <option>DESIGNADO</option>\n              <option>RESOLVIDO</option>\n              <option>APROVADO</option>\n              <option>DESAPROVADO</option>\n              <option>FECHADO</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"inputPrioridadeEnum\" class=\"col-sm-2 control-label\">Prioridade</label>\n            <div class=\"col-sm-10\">\n              <select [(ngModel)]=\"ticketFilter.prioridadeEnum\" class=\"form-control select2\" id=\"inputPrioridadeEnum\"\n                name=\"prioridadeEnum\" style=\"width: 100%\">\n                <option selected=\"selected\" disabled=\"disabled\" value>Selecione</option>\n                <option>ALTA</option>\n                <option>NORMAL</option>\n                <option>BAIXA</option>\n              </select>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"box-footer\">\n          <button class=\"btn btn-info pull-left\" (click)=\"cleanFilter()\">Clean Filter</button>\n          <button style=\"margin-left: 10px\" class=\"btn btn-info pull-right\" (click)=\"filter()\">Filter</button>\n        </div>\n\n        <div class=\"box-body\">\n          <table class=\"table table-bordered\">\n            <tr>\n              <th>Número</th>\n              <th>Título</th>\n              <th>Prioridade</th>\n              <th>Status</th>\n              <th>Owner</th>\n              <th style=\"width: 10px\" *ngIf=\"shared.user.profileEnum == 'CUSTOMER'\">&nbsp;</th>\n              <th style=\"width: 10px\" *ngIf=\"shared.user.profileEnum == 'CUSTOMER'\">&nbsp;</th>\n              <th style=\"width: 10px\">&nbsp;</th>\n            </tr>\n            <tr *ngFor=\"let ticket of listTicket\">\n              <td>{{ ticket.numero }}</td>\n              <td>{{ ticket.titulo }}</td>\n              <td>{{ ticket.prioridadeEnum }}</td>\n              <td>{{ ticket.statusEnum }}</td>\n              <td>{{ ticket.user.email }}</td>\n              <td *ngIf=\"shared.user.profileEnum == 'CUSTOMER'\">\n                <button class=\"btn btn-primary\" (click)=\"edit(ticket.id)\">Edit</button>\n              </td>\n              <td *ngIf=\"shared.user.profileEnum == 'CUSTOMER'\">\n                <button class=\"btn btn-danger\" (click)=\"delete(ticket.id)\">Delete</button>\n              </td>\n              <td><button class=\"btn btn-success\" (click)=\"detail(ticket.id)\">Detail</button></td>\n            </tr>\n          </table>\n        </div>\n        <!-- /.box-body -->\n        <div class=\"box-footer clearfix\">\n          <ul class=\"pagination pagination-sm no-margin pull-right\">\n            <li><a href=\"\" (click)=\"setPreviousPage($event)\">&laquo;</a></li>\n            <li *ngFor=\"let p of pages; let i = index\">\n              <a [ngClass]=\"{'pagination-focus': i == page}\" href=\"\" (click)=\"setPage(i, $event)\">{{ i+1 }}</a>\n            </li>\n            <li><a href=\"\" (click)=\"setNextPage($event)\">&raquo;</a></li>\n          </ul>\n        </div>\n      </div>\n      <!-- /.box -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/ticket-list/ticket-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/ticket-list/ticket-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: TicketListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketListComponent", function() { return TicketListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/ticket.model */ "./src/app/model/ticket.model.ts");







var TicketListComponent = /** @class */ (function () {
    function TicketListComponent(dialogService, ticketService, router) {
        this.dialogService = dialogService;
        this.ticketService = ticketService;
        this.router = router;
        this.assignedToMe = false;
        this.page = 0;
        this.count = 5;
        this.listTicket = [];
        this.ticketFilter = new src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_6__["Ticket"]('', '', 0, '', '', '', '', '', null, null, null);
        this.uninformed = 'uninformed';
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"].getInstance();
    }
    TicketListComponent.prototype.ngOnInit = function () {
        this.findAll(this.page, this.count);
    };
    TicketListComponent.prototype.findAll = function (page, count) {
        var _this = this;
        this.ticketService.findAll(page, count).subscribe(function (responseApi) {
            _this.listTicket = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketListComponent.prototype.filter = function () {
        var _this = this;
        this.page = 0;
        this.count = 5;
        this.ticketService.findByParams(this.page, this.count, this.assignedToMe, this.ticketFilter).subscribe(function (responseApi) {
            _this.ticketFilter.titulo = _this.ticketFilter.titulo == _this.uninformed ? '' : _this.ticketFilter.titulo;
            _this.listTicket = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketListComponent.prototype.cleanFilter = function () {
        this.assignedToMe = false;
        this.page = 0;
        this.count = 5;
        this.ticketFilter = new src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_6__["Ticket"]('', '', 0, '', '', '', '', '', null, null, null);
        this.findAll(this.page, this.count);
    };
    TicketListComponent.prototype.edit = function (id) {
        this.router.navigate(['/ticket-new', id]);
    };
    TicketListComponent.prototype.detail = function (id) {
        this.router.navigate(['/ticket-detail', id]);
    };
    TicketListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialogService.confirm(' Você realmente deseja deletar o Ticket? ').then(function (candelete) {
            if (candelete) {
                _this.message = {};
                _this.ticketService.delete(id).subscribe(function (responseApi) {
                    _this.showMessage({
                        type: 'success',
                        text: 'Record delete'
                    });
                    _this.findAll(_this.page, _this.count);
                }, function (err) {
                    _this.showMessage({
                        type: 'error',
                        text: err['error']['errors'][0]
                    });
                });
            }
        });
    };
    TicketListComponent.prototype.setNextPage = function (event) {
        event.preventDefault();
        if (this.page + 1 < this.pages.length) {
            this.page = this.page + 1;
            this.findAll(this.page, this.count);
        }
    };
    TicketListComponent.prototype.setPreviousPage = function (event) {
        event.preventDefault();
        if (this.page > 0) {
            this.page = this.page - 1;
            this.findAll(this.page, this.count);
        }
    };
    TicketListComponent.prototype.setPage = function (i, event) {
        event.preventDefault();
        this.page = i;
        this.findAll(this.page, this.count);
    };
    TicketListComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketListComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-ticket-list',
            template: __webpack_require__(/*! ./ticket-list.component.html */ "./src/app/components/ticket-list/ticket-list.component.html"),
            styles: [__webpack_require__(/*! ./ticket-list.component.css */ "./src/app/components/ticket-list/ticket-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TicketListComponent);
    return TicketListComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket-new/ticket-new.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/ticket-new/ticket-new.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LW5ldy90aWNrZXQtbmV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ticket-new/ticket-new.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/ticket-new/ticket-new.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\" style=\"margin-left: 0%\">\n  <!-- Horizontal Form -->\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">New Ticket</h3>\n    </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"register()\" novalidate>\n      <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n        <strong>{{ message.text }}</strong>\n      </div>\n      <div class=\"box-body\">\n\n        <!-- Título -->\n        <div [ngClass]=\"getFormGroupClass(titulo.invalid, titulo.dirty)\">\n          <label for=\"inputTitulo\" class=\"col-sm-2 control-label\">Título</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" [(ngModel)]=\"ticket.titulo\" class=\"form-control\" name=\"titulo\" id=\"inputTitulo\" #titulo=\"ngModel\"\n              placeholder=\"Titulo\" required>\n            <span class=\"help-block\" *ngIf=\"titulo.invalid && titulo.dirty\">Título é requerido</span>\n          </div>\n        </div>\n\n        <!-- prioridadeEnum -->\n        <div [ngClass]=\"getFormGroupClass(prioridadeEnum.invalid, prioridadeEnum.dirty)\">\n          <label for=\"inputPrioridadeEnum\" class=\"col-sm-2 control-label\">Prioridade</label>\n          <div class=\"col-sm-10\">\n            <select [(ngModel)]=\"ticket.prioridadeEnum\" class=\"form-control select2\" id=\"inputPrioridadeEnum\" name=\"prioridadeEnum\"\n              #prioridadeEnum=\"ngModel\" style=\"width: 100%\" required>\n              <option value>Selecione</option>\n              <option>ALTA</option>\n              <option>NORMAL</option>\n              <option>BAIXA</option>\n            </select>\n            <span class=\"help-block\" *ngIf=\"prioridadeEnum.invalid && prioridadeEnum.dirty\">Prioridade é requerido</span>\n          </div>\n        </div>\n\n        <!-- descricao -->\n        <div [ngClass]=\"getFormGroupClass(descricao.invalid, descricao.dirty)\">\n          <label for=\"inputDescricao\" class=\"col-sm-2 control-label\">Descrição</label>\n          <div class=\"col-sm-10\">\n            <textarea [(ngModel)]=\"ticket.descricao\" class=\"form-control\" name=\"descricao\" id=\"inputDescricao\"\n              #descricao=\"ngModel\" placeholder=\"Descrição\" required rows=\"3\"></textarea>\n            <span class=\"help-block\" *ngIf=\"descricao.invalid && descricao.dirty\">Descrição é requerido</span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputDescription\" class=\"col-sm-2 control-label\">Imagem</label>\n          <div class=\"col-sm-10\">\n            <img [src]=\"ticket.imagem\" width=\"50%\" height=\"50%\">\n            <input type=\"file\" id=\"image\" (change)=\"onFileChange($event)\">\n          </div>\n        </div>\n\n      </div>\n      <!-- /.box-body -->\n      <div class=\"box-footer\">\n        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info pull-right\">Submit</button>\n      </div>\n      <!-- /.box-footer -->\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ticket-new/ticket-new.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ticket-new/ticket-new.component.ts ***!
  \***************************************************************/
/*! exports provided: TicketNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketNewComponent", function() { return TicketNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _model_ticket_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../model/ticket.model */ "./src/app/model/ticket.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TicketNewComponent = /** @class */ (function () {
    function TicketNewComponent(ticketService, route) {
        this.ticketService = ticketService;
        this.route = route;
        this.ticket = new _model_ticket_model__WEBPACK_IMPORTED_MODULE_3__["Ticket"]('', '', 0, '', '', '', '', '', null, null, null);
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    TicketNewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    TicketNewComponent.prototype.findById = function (id) {
        var _this = this;
        this.ticketService.findById(id).subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketNewComponent.prototype.register = function () {
        var _this = this;
        this.message = {};
        this.ticketService.createOrUpdate(this.ticket).subscribe(function (responseApi) {
            _this.ticket = new _model_ticket_model__WEBPACK_IMPORTED_MODULE_3__["Ticket"]('', '', 0, '', '', '', '', '', null, null, null);
            var ticket = responseApi.data;
            _this.form.resetForm();
            _this.showMessage({
                type: 'success',
                text: "Registered " + ticket.titulo + " successfully"
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketNewComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (event.target.files[0].size > 2000000) {
            this.showMessage({
                type: 'error',
                text: 'Maximum image size is 2 MB'
            });
        }
        else {
            this.ticket.imagem = '';
            var reader = new FileReader();
            reader.onloadend = function (e) {
                _this.ticket.imagem = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    TicketNewComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketNewComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketNewComponent.prototype.getFormGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-sucess': !isInvalid && isDirty
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])("form"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], TicketNewComponent.prototype, "form", void 0);
    TicketNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-ticket-new',
            template: __webpack_require__(/*! ./ticket-new.component.html */ "./src/app/components/ticket-new/ticket-new.component.html"),
            styles: [__webpack_require__(/*! ./ticket-new.component.css */ "./src/app/components/ticket-new/ticket-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], TicketNewComponent);
    return TicketNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n  <strong>{{ message.text }}</strong>\n</div>  \n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"box\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">User List</h3>\n      </div>\n      <!-- /.box-header -->\n      <div class=\"box-body\">\n        <table class=\"table table-bordered\">\n          <tr>\n            <th>Email</th>\n            <th>Profile</th>\n            <th style=\"width: 10px\">&nbsp;</th>\n            <th style=\"width: 10px\">&nbsp;</th>\n          </tr>\n          <tr *ngFor=\"let user of listUser\">\n            <td>{{ user.email }}</td>\n            <td>{{ user.profileEnum }}</td>\n            <td><button class=\"btn btn-primary\" (click)=\"edit(user.id)\">Edit</button></td>\n            <td><button class=\"btn btn-danger\" (click)=\"delete(user.id)\">Delete</button></td>\n          </tr>\n        </table>\n      </div>\n      <!-- /.box-body -->\n      <div class=\"box-footer clearfix\">\n        <ul class=\"pagination pagination-sm no-margin pull-right\">\n          <li><a href=\"\" (click)=\"setPreviousPage($event)\">&laquo;</a></li>\n          <li *ngFor=\"let p of pages; let i = index\">\n            <a [ngClass]=\"{'pagination-focus': i == page}\" href=\"\" (click)=\"setPage(i, $event)\">{{ i+1 }}</a>\n          </li>\n          <li><a href=\"\" (click)=\"setNextPage($event)\">&raquo;</a></li>\n        </ul>\n      </div>\n    </div>\n    <!-- /.box -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var UserListComponent = /** @class */ (function () {
    function UserListComponent(dialogService, userService, router) {
        this.dialogService = dialogService;
        this.userService = userService;
        this.router = router;
        this.page = 0;
        this.count = 5;
        this.listUser = [];
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance();
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.findAll(this.page, this.count);
    };
    UserListComponent.prototype.findAll = function (page, count) {
        var _this = this;
        this.userService.findAll(page, count).subscribe(function (responseApi) {
            _this.listUser = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserListComponent.prototype.edit = function (id) {
        this.router.navigate(['/user-new', id]);
    };
    UserListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialogService.confirm(' Você realmente deseja deletar o Usuário? ').then(function (candelete) {
            if (candelete) {
                _this.message = {};
                _this.userService.delete(id).subscribe(function (responseApi) {
                    _this.showMessage({
                        type: 'success',
                        text: 'Record delete'
                    });
                    _this.findAll(_this.page, _this.count);
                }, function (err) {
                    _this.showMessage({
                        type: 'error',
                        text: err['error']['errors'][0]
                    });
                });
            }
        });
    };
    UserListComponent.prototype.setNextPage = function (event) {
        event.preventDefault();
        if (this.page + 1 < this.pages.length) {
            this.page = this.page + 1;
            this.findAll(this.page, this.count);
        }
    };
    UserListComponent.prototype.setPreviousPage = function (event) {
        event.preventDefault();
        if (this.page > 0) {
            this.page = this.page - 1;
            this.findAll(this.page, this.count);
        }
    };
    UserListComponent.prototype.setPage = function (i, event) {
        event.preventDefault();
        this.page = i;
        this.findAll(this.page, this.count);
    };
    UserListComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    UserListComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/components/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/user-new/user-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/user-new/user-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1uZXcvdXNlci1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user-new/user-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/user-new/user-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\" style=\"margin-left: 0%\">\n  <!-- Horizontal Form -->\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">New User</h3>\n    </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"register()\">\n      <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n        <strong>{{ message.text }}</strong>\n      </div>\n      <div class=\"box-body\">\n        <div [ngClass]=\"getFormGroupClass(email.invalid, email.dirty)\">\n          <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email</label>\n\n          <div class=\"col-sm-10\">\n            <input type=\"email\" [(ngModel)]=\"user.email\" class=\"form-control\" name=\"email\" id=\"inputEmail\" #email=\"ngModel\"\n              placeholder=\"Email\" email>\n            <span class=\"help-block\" *ngIf=\"email.invalid && email.dirty\">E-mail é inválido</span>\n          </div>\n        </div>\n\n        <div [ngClass]=\"getFormGroupClass(password.invalid, password.dirty)\">\n          <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password</label>\n\n          <div class=\"col-sm-10\">\n            <input type=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"inputPassword\" name=\"password\"\n              #password=\"ngModel\" placeholder=\"Password\" required>\n            <span class=\"help-block\" *ngIf=\"password.invalid && password.dirty\">Password é requerido</span>\n          </div>\n        </div>\n\n        <div [ngClass]=\"getFormGroupClass(profileEnum.invalid, profileEnum.dirty)\">\n          <label for=\"inputProfileEnum\" class=\"col-sm-2 control-label\">Profile</label>\n          <div class=\"col-sm-10\">\n            <select [(ngModel)]=\"user.profileEnum\"\n              class=\"form-control select2\" id=\"inputProfileEnum\" name=\"profileEnum\"\n              #profileEnum=\"ngModel\" style=\"width: 100%\" required>\n              <option>ROLE_ADMIN</option>\n              <option>ROLE_CUSTOMER</option>\n              <option>ROLE_TECHNICIAN</option>\n            </select>\n            <span class=\"help-block\" *ngIf=\"profileEnum.invalid && profileEnum.dirty\">Profile é requerido</span>\n          </div>\n        </div>\n\n      </div>\n      <!-- /.box-body -->\n      <div class=\"box-footer\">\n        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info pull-right\">Submit</button>\n      </div>\n      <!-- /.box-footer -->\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/components/user-new/user-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/user-new/user-new.component.ts ***!
  \***********************************************************/
/*! exports provided: UserNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNewComponent", function() { return UserNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var UserNewComponent = /** @class */ (function () {
    function UserNewComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.user = new src_app_model_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]('', '', '', '');
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    UserNewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    UserNewComponent.prototype.findById = function (id) {
        var _this = this;
        this.userService.findById(id).subscribe(function (responseApi) {
            _this.user = responseApi.data;
            _this.user.password = '';
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserNewComponent.prototype.register = function () {
        var _this = this;
        this.message = {};
        this.userService.createOrUpdate(this.user).subscribe(function (responseApi) {
            _this.user = new src_app_model_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]('', '', '', '');
            var userRet = responseApi.data;
            _this.form.resetForm();
            _this.showMessage({
                type: 'success',
                text: "Registered " + userRet.email + " successfully"
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserNewComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    UserNewComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    UserNewComponent.prototype.getFormGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-sucess': !isInvalid && isDirty
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("form"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], UserNewComponent.prototype, "form", void 0);
    UserNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-new',
            template: __webpack_require__(/*! ./user-new.component.html */ "./src/app/components/user-new/user-new.component.html"),
            styles: [__webpack_require__(/*! ./user-new.component.css */ "./src/app/components/user-new/user-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], UserNewComponent);
    return UserNewComponent;
}());



/***/ }),

/***/ "./src/app/dialog.service.ts":
/*!***********************************!*\
  !*** ./src/app/dialog.service.ts ***!
  \***********************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogService = /** @class */ (function () {
    function DialogService() {
    }
    DialogService.prototype.confirm = function (message) {
        return new Promise(function (resolve) {
            return resolve(window.confirm(message || 'Confirm ?'));
        });
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/model/summary.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/summary.model.ts ***!
  \****************************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
var Summary = /** @class */ (function () {
    function Summary() {
    }
    return Summary;
}());



/***/ }),

/***/ "./src/app/model/ticket.model.ts":
/*!***************************************!*\
  !*** ./src/app/model/ticket.model.ts ***!
  \***************************************/
/*! exports provided: Ticket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
var Ticket = /** @class */ (function () {
    function Ticket(id, data, numero, titulo, descricao, imagem, statusEnum, prioridadeEnum, user, assignedUser, listaChangeStatus) {
        this.id = id;
        this.data = data;
        this.numero = numero;
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.statusEnum = statusEnum;
        this.prioridadeEnum = prioridadeEnum;
        this.user = user;
        this.assignedUser = assignedUser;
        this.listaChangeStatus = listaChangeStatus;
    }
    return Ticket;
}());



/***/ }),

/***/ "./src/app/model/user.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, email, password, profileEnum) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.profileEnum = profileEnum;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/helpdesk.api.ts":
/*!******************************************!*\
  !*** ./src/app/services/helpdesk.api.ts ***!
  \******************************************/
/*! exports provided: HELP_DESK_API, HELP_DESK_API_AUTH, HELP_DESK_API_USER, HELP_DESK_API_TICKET, HELP_DESK_API_SUMMARY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELP_DESK_API", function() { return HELP_DESK_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELP_DESK_API_AUTH", function() { return HELP_DESK_API_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELP_DESK_API_USER", function() { return HELP_DESK_API_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELP_DESK_API_TICKET", function() { return HELP_DESK_API_TICKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELP_DESK_API_SUMMARY", function() { return HELP_DESK_API_SUMMARY; });
var HELP_DESK = 'https://helpdesk-web-service.herokuapp.com';
var HELP_DESK_API_COMPLEMENTO = '/api';
var HELP_DESK_API_AUTH_COMPLEMENTO = '/auth';
var HELP_DESK_API_USER_COMPLEMENTO = '/user';
var HELP_DESK_API_TICKET_COMPLEMENTO = '/ticket';
var HELP_DESK_API_SUMMARY_COMPLEMENTO = '/summary';
var HELP_DESK_API = "" + HELP_DESK + HELP_DESK_API_COMPLEMENTO;
var HELP_DESK_API_AUTH = "" + HELP_DESK + HELP_DESK_API_COMPLEMENTO + HELP_DESK_API_AUTH_COMPLEMENTO;
var HELP_DESK_API_USER = "" + HELP_DESK + HELP_DESK_API_COMPLEMENTO + HELP_DESK_API_USER_COMPLEMENTO;
var HELP_DESK_API_TICKET = "" + HELP_DESK + HELP_DESK_API_COMPLEMENTO + HELP_DESK_API_TICKET_COMPLEMENTO;
var HELP_DESK_API_SUMMARY = "" + HELP_DESK + HELP_DESK_API_COMPLEMENTO + HELP_DESK_API_TICKET_COMPLEMENTO + HELP_DESK_API_SUMMARY_COMPLEMENTO;


/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.showTemplate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return SharedService_1.instance = SharedService_1.instance || this;
    }
    SharedService_1 = SharedService;
    SharedService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SharedService_1();
        }
        return this.instance;
    };
    SharedService.prototype.isLoggedIn = function () {
        if (this.user == null) {
            return false;
        }
        return this.user.email.trim() != '';
    };
    var SharedService_1;
    SharedService.instance = null;
    SharedService = SharedService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/ticket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/ticket.service.ts ***!
  \********************************************/
/*! exports provided: TicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketService", function() { return TicketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _helpdesk_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpdesk.api */ "./src/app/services/helpdesk.api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var TicketService = /** @class */ (function () {
    function TicketService(http) {
        this.http = http;
    }
    TicketService.prototype.createOrUpdate = function (ticket) {
        if (ticket.id != null && ticket.id.trim() != '') {
            return this.http.put("" + _helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_TICKET"], ticket);
        }
        else {
            ticket.id = null;
            ticket.statusEnum = 'NOVO';
            return this.http.post("" + _helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_TICKET"], ticket);
        }
    };
    TicketService.prototype.findAll = function (page, count) {
        return this.http.get(_helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_TICKET"] + "/" + page + "/" + count);
    };
    TicketService.prototype.findById = function (id) {
        return this.http.get(_helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_TICKET"] + "/" + id);
    };
    TicketService.prototype.delete = function (id) {
        return this.http.delete(_helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_TICKET"] + "/" + id);
    };
    TicketService.prototype.changeStatus = function (status, ticket) {
        return this.http.put(_helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_TICKET"] + "/" + ticket.id + "/" + status, ticket);
    };
    TicketService.prototype.findByParams = function (page, count, assigned, ticket) {
        var naoInformado = 'uninformed';
        ticket.numero = ticket == null ? 0 : ticket.numero;
        ticket.titulo = ticket.titulo == '' ? naoInformado : ticket.titulo;
        ticket.statusEnum = ticket.statusEnum == '' ? naoInformado : ticket.statusEnum;
        ticket.prioridadeEnum = ticket.prioridadeEnum == '' ? naoInformado : ticket.prioridadeEnum;
        return this.http.get(_helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_TICKET"] + "/" + page + "/" + count + "/" + ticket.numero + "/" + ticket.titulo + "/" + ticket.statusEnum + "/" + ticket.prioridadeEnum + "/" + assigned);
    };
    TicketService.prototype.summary = function () {
        return this.http.get("" + _helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_SUMMARY"]);
    };
    TicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TicketService);
    return TicketService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _helpdesk_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpdesk.api */ "./src/app/services/helpdesk.api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (user) {
        return this.http.post("" + _helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_AUTH"], user);
    };
    UserService.prototype.createOrUpdate = function (user) {
        if (user.id != null && user.id.trim() != '') {
            return this.http.put("" + _helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_USER"], user);
        }
        else {
            user.id = null;
            return this.http.post("" + _helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_USER"], user);
        }
    };
    UserService.prototype.findAll = function (page, count) {
        return this.http.get(_helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_USER"] + "/" + page + "/" + count);
    };
    UserService.prototype.findById = function (id) {
        return this.http.get(_helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_USER"] + "/" + id);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_helpdesk_api__WEBPACK_IMPORTED_MODULE_1__["HELP_DESK_API_USER"] + "/" + id);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AreaTrabalho\Projetos\VisualStudioCode\helpdesk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map