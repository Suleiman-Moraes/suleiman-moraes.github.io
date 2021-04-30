(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\areatrabalho\projetos\vscode\suleiman\igreja-web\src\main.ts */"zUnb");


/***/ }),

/***/ "3SYz":
/*!***********************************************************!*\
  !*** ./src/app/components/menu-bar/menu-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_pages_pages_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/pages-shared/services/usuario.service */ "4TNz");
/* harmony import */ var src_app_shared_services_side_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/side-bar.service */ "ywVv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_lts_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng-lts/button */ "A1Yd");
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../avatar/avatar.component */ "gi6I");
/* harmony import */ var primeng_lts_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng-lts/sidebar */ "QjAq");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../side-bar/side-bar.component */ "oUHS");









function MenuBarComponent_nav_0_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Meu Perfil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuBarComponent_nav_0_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Meu Perfil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuBarComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBarComponent_nav_0_Template_a_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openCloseSideBar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuBarComponent_nav_0_a_13_Template, 3, 0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MenuBarComponent_nav_0_label_14_Template, 3, 0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBarComponent_nav_0_Template_button_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.changeTheme($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Sair ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r0.user.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.login != "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.login == "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](!ctx_r0.isDark ? "pi pi-circle-on" : "pi pi-circle-off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ativar modo ", ctx_r0.isDark ? "Light" : "Dark", "");
} }
const _c0 = function () { return { padding: "0" }; };
function MenuBarComponent_p_sidebar_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-sidebar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function MenuBarComponent_p_sidebar_1_Template_p_sidebar_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.visibleSidebar = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx_r1.visibleSidebar)("baseZIndex", 10000);
} }
class MenuBarComponent {
    constructor(usuarioService, sideBarService) {
        this.usuarioService = usuarioService;
        this.sideBarService = sideBarService;
        this.visibleSidebar = false;
        this.themeDark = 'assets/css/themes/dark/theme.css';
        this.themeLight = 'assets/css/themes/light/theme.css';
        this.user = {};
        this.isDark = false;
    }
    ngOnInit() {
        this.user = this.usuarioService.getUsuario();
        let themeLink = document.getElementById('theme-css');
        this.isDark = themeLink.href.indexOf(this.themeDark) >= 0;
        if (sessionStorage.getItem('isDark') && sessionStorage.getItem('isDark') != this.isDark + '') {
            this.changeTheme();
        }
        else {
            sessionStorage.setItem('isDark', this.isDark + '');
        }
        this.subscription = this.sideBarService.getData().subscribe(res => {
            if (res) {
                if (res.close) {
                    this.visibleSidebar = false;
                }
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    get getShowTemplate() {
        return sessionStorage.getItem('token') != null;
    }
    openCloseSideBar(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        this.visibleSidebar = !this.visibleSidebar;
    }
    changeTheme(event) {
        // if (event) {
        //   event.stopPropagation();
        //   event.preventDefault();
        // }
        let themeLink = document.getElementById('theme-css');
        if (themeLink.href.indexOf(this.themeDark) >= 0) {
            themeLink.href = this.themeLight;
        }
        else {
            themeLink.href = this.themeDark;
        }
        this.isDark = !this.isDark;
        sessionStorage.setItem('isDark', this.isDark + '');
    }
    pesquisarMenu() { }
}
MenuBarComponent.showTemplate = true;
MenuBarComponent.ɵfac = function MenuBarComponent_Factory(t) { return new (t || MenuBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_pages_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_side_bar_service__WEBPACK_IMPORTED_MODULE_2__["SideBarService"])); };
MenuBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuBarComponent, selectors: [["app-menu-bar"]], decls: 2, vars: 2, consts: [["class", "navbar navbar-light font-padrao backgroundIgreja", 4, "ngIf"], ["styleClass", "p-sidebar-sm p-shadow-11", 3, "visible", "baseZIndex", "style", "visibleChange", 4, "ngIf"], [1, "navbar", "navbar-light", "font-padrao", "backgroundIgreja"], ["href", "#/pages", 1, "navbar-brand"], ["src", "assets/img/home-cafe.PNG", "height", "40", "loading", "lazy", 1, "p-mr-2"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", 2, "color", "white", 3, "click"], [1, "pi", "pi-fw", "pi-bars"], [1, "my-2", "my-lg-0"], [1, "btn-group"], ["type", "button", "pButton", "", "icon", "pi pi-fw pi-user", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 2, "background-color", "transparent", "border", "0", 3, "label"], ["btn", ""], ["align", "center", 1, "dropdown-menu", "dropdown-menu-right", 2, "margin-top", "0px", "border-top-width", "1px", "padding-top", "0px"], ["class", "dropdown-item", "href", "#/pages/pessoa/perfil", "style", "text-align: center; padding-top: 10px;", 4, "ngIf"], ["class", "dropdown-item", "style", "text-align: center; padding-top: 10px;", 4, "ngIf"], ["type", "button", 1, "dropdown-item", 2, "text-align", "center", 3, "click"], [1, "dropdown-divider"], ["href", "#/login", 1, "dropdown-item", 2, "text-align", "center"], [1, "pi", "pi-power-off"], ["href", "#/pages/pessoa/perfil", 1, "dropdown-item", 2, "text-align", "center", "padding-top", "10px"], [1, "pi", "pi-user-edit"], [1, "dropdown-item", 2, "text-align", "center", "padding-top", "10px"], ["styleClass", "p-sidebar-sm p-shadow-11", 3, "visible", "baseZIndex", "visibleChange"]], template: function MenuBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuBarComponent_nav_0_Template, 22, 6, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuBarComponent_p_sidebar_1_Template, 2, 5, "p-sidebar", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getShowTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getShowTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], primeng_lts_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_5__["AvatarComponent"], primeng_lts_sidebar__WEBPACK_IMPORTED_MODULE_6__["Sidebar"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__["SideBarComponent"]], styles: [".dropdown-menu.dropdown-menu-right[_ngcontent-%COMP%] {\r\n    background-color: var(--surface-b);\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:hover {\r\n    background-color: var(--surface-a) !important;\r\n    color: var(--text-color-secondary);\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n    color: var(--primary-color);\r\n    font-family: var(--font-padrao);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LWJhci9tZW51LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwrQkFBK0I7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUtYmFyL21lbnUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtYik7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtYSkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXBhZHJhbyk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-bar',
                templateUrl: './menu-bar.component.html',
                styleUrls: ['./menu-bar.component.css']
            }]
    }], function () { return [{ type: src_app_pages_pages_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"] }, { type: src_app_shared_services_side_bar_service__WEBPACK_IMPORTED_MODULE_2__["SideBarService"] }]; }, null); })();


/***/ }),

/***/ "4TNz":
/*!****************************************************************!*\
  !*** ./src/app/pages/pages-shared/services/usuario.service.ts ***!
  \****************************************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ts_sync_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-sync-request */ "lZba");
/* harmony import */ var ts_sync_request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_sync_request__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class UsuarioService {
    constructor(http) {
        this.http = http;
        this.route = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/api/usuario`;
    }
    findUsuarioLogadoDtoBy() {
        return this.http.get(`${this.route}/me`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    reset(id) {
        return this.http.put(`${this.route}/reset/${id}`, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getUsuario() {
        if (sessionStorage.getItem('user')) {
            return JSON.parse(sessionStorage.getItem('user'));
        }
        else {
            const user = new ts_sync_request__WEBPACK_IMPORTED_MODULE_4__["SyncRequestClient"]()
                .addHeader('Authorization', `Bearer ${atob(sessionStorage.getItem('token'))}`)
                .get(`${this.route}/me`);
            sessionStorage.setItem('user', JSON.stringify(user));
            return user;
        }
    }
    // PRIVATE METHODS
    handleError(error) {
        console.log("ERRO NA REQUISIÇÃO => ", error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AAie":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/base-resource-util/base-resource-util.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BaseResourceUtilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResourceUtilComponent", function() { return BaseResourceUtilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ "12jx");
/* harmony import */ var primeng_lts_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng-lts/api */ "RtSl");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! toastr */ "hUol");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/authentication.service */ "TTF2");











class BaseResourceUtilComponent {
    constructor(injector) {
        this.injector = injector;
        this.imaskTelefone = {
            mask: [
                {
                    mask: "(00) 0000-0000"
                },
                {
                    mask: "(00) 0 0000-0000"
                }
            ]
        };
        this.situacoes = {
            ATIVO: 'Ativo',
            INATIVO: 'Inativo'
        };
        this.simNaoEnum = {
            S: 'Sim',
            N: 'Não'
        };
        this.sexoEnum = {
            I: 'Indeterminado',
            M: 'Masculino',
            F: 'Feminino'
        };
        this.location = this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]);
        this.formBuilder = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]);
        this.confirmationService = this.injector.get(primeng_lts_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]);
        this.authenticationService = this.injector.get(_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]);
    }
    get situacaoOptions() {
        if (!this['situacaoOptionsVar']) {
            this['situacaoOptionsVar'] = this.getTypes(this.situacoes);
        }
        return this['situacaoOptionsVar'];
    }
    get simNaoEnumOptions() {
        if (!this['simNaoEnumOptionsVar']) {
            this['simNaoEnumOptionsVar'] = this.getTypes(this.simNaoEnum);
        }
        return this['simNaoEnumOptionsVar'];
    }
    get sexoEnumOptions() {
        if (!this['sexoEnumOptionsVar']) {
            this['sexoEnumOptionsVar'] = this.getTypes(this.sexoEnum);
        }
        return this['sexoEnumOptionsVar'];
    }
    convertToNumber(string) {
        return new Number(string).valueOf();
    }
    isNotNulAndNotEmpty(x) {
        return x && x != '';
    }
    back() {
        this.location.back();
    }
    openConfirmDialog(message, accept, reject) {
        this.confirmationService.confirm({
            message: message,
            header: 'Confirmação',
            icon: 'pi pi-info-circle',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            accept: accept,
            reject: reject
        });
    }
    temPermissao(role) {
        return this.authenticationService.temPermissao(role);
    }
    //PRIVATES METHODS
    tratarErro(err) {
        if (typeof err === 'string') {
            this.showError(err);
        }
        else if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpErrorResponse"]
            && err.status >= 400 && err.status <= 499) {
            if (err.status == 401) {
                this.erroServidor();
                window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].URL_LOGIN;
            }
            else if (err.status == 403) {
                this.showError('Operação não autorizada.');
            }
            else {
                try {
                    if (err.error.length > 0) {
                        err.error.forEach(er => this.showError(er.mensagemUsuario));
                    }
                }
                catch (e) { }
            }
        }
        else {
            this.erroServidor();
        }
        console.log(err);
        console.error('Ocorreu um erro', err);
        this.posTratarErro();
    }
    erroServidor() {
        this.showError('Ocorreu um erro ao processar a sua solicitação.');
    }
    getTypes(type) {
        return Object.entries(type).map(([value, text]) => {
            return {
                text: text,
                value: value
            };
        });
    }
    formId(required) {
        return this.formBuilder.group({
            id: [null, (required ? _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required : null)]
        });
    }
    markAsTouched(form) {
        Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]) {
                control.valueChanges.emit(control.value);
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                this.markAsTouched(control);
            }
        });
    }
    disableComponents(form, disable) {
        Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]) {
                if (disable) {
                    control.disabled;
                    control.disable();
                }
                else {
                    control.enabled;
                    control.enable();
                }
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                this.disableComponents(control, disable);
            }
        });
    }
    disableControls(form, name, disable) {
        if (disable) {
            form.get(name).disabled;
            form.get(name).disable();
            form.get(name).setValue(null);
        }
        else {
            form.get(name).enabled;
            form.get(name).enable();
        }
    }
    realizarRequisicaoSimples(metodo, atributo, func) {
        metodo.subscribe((responseApi) => {
            if (responseApi != null) {
                this[atributo] = responseApi;
                if (func != null) {
                    func();
                }
            }
            else { }
        }, err => {
            this.tratarErro(err);
        });
    }
    buscar(metodo, atributo, func) {
        metodo.subscribe(res => {
            this[atributo] = res;
            if (func != null) {
                func();
            }
        });
    }
    showError(detail) {
        toastr__WEBPACK_IMPORTED_MODULE_6___default.a.error(detail, 'Error Message', {
            timeOut: 5000
        });
    }
    showSuccess(detail) {
        toastr__WEBPACK_IMPORTED_MODULE_6___default.a.success(detail, 'Sucesso', {
            timeOut: 5000
        });
    }
    showWarning(detail) {
        toastr__WEBPACK_IMPORTED_MODULE_6___default.a.warning(detail, 'Atenção', {
            timeOut: 5000
        });
    }
    //OPICIONAIS
    posTratarErro() { }
}
BaseResourceUtilComponent.ɵfac = function BaseResourceUtilComponent_Factory(t) { return new (t || BaseResourceUtilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
BaseResourceUtilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BaseResourceUtilComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function BaseResourceUtilComponent_Template(rf, ctx) { }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])()
], BaseResourceUtilComponent.prototype, "blockUI", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BaseResourceUtilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }]; }, { blockUI: [] }); })();


/***/ }),

/***/ "AytR":
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
if (window.location.host.indexOf('localhost:') > -1) { }
const environment = {
    production: false,
    test: false,
    API_URL: 'http://localhost:8080',
    tokenAllowedDomains: [new RegExp('localhost:8080')],
    tokenDisallowedRoutes: [new RegExp('\/oauth\/token')],
    URL_LOGIN: 'http://localhost:4200/#/login'
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-block-ui */ "12jx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ "3SYz");






function AppComponent_app_menu_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-bar");
} }
class AppComponent {
    constructor() {
        this.title = 'Igreja';
    }
    get getShowTemplate() {
        return sessionStorage.getItem('token') != null;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[4, "ngIf"], [2, "margin", "5px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "block-ui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_menu_bar_1_Template, 1, 0, "app-menu-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getShowTemplate);
    } }, directives: [ng_block_ui__WEBPACK_IMPORTED_MODULE_1__["BlockUIComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__["MenuBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TTF2":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");






class AuthenticationService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.oauthTokenUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/oauth/token`;
        this.logoutUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/tokens/revoke`;
        this.carregarToken();
    }
    login(usuario, senha) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .append('Content-Type', 'application/x-www-form-urlencoded')
            .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
        const body = `username=${usuario}&password=${senha}&grant_type=password`;
        return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
            .toPromise()
            .then(response => {
            this.armazenarToken(response['access_token']);
        })
            .catch(response => {
            console.log(response);
            if (response.status === 400) {
                if (response.error.error === 'invalid_grant') {
                    return Promise.reject('Usuário ou senha inválida!');
                }
            }
            return Promise.reject(response);
        });
    }
    obterNovoAccessToken() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .append('Content-Type', 'application/x-www-form-urlencoded')
            .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
        const body = 'grant_type=refresh_token';
        return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
            .toPromise()
            .then(response => {
            this.armazenarToken(response['access_token']);
            console.log('Novo access token criado!');
            return Promise.resolve(null);
        })
            .catch(response => {
            console.error('Erro ao renovar token.', response);
            return Promise.resolve(null);
        });
    }
    isAccessTokenInvalido() {
        const token = this.getToken();
        return !token || this.jwtHelper.isTokenExpired(token);
    }
    agendarRenovacao() {
        // if (!this.isAccessTokenInvalido()) {
        //   const token = this.getToken();
        //   const tempo = this.jwtHelper.getTokenExpirationDate(token).getTime() - new Date().getTime();
        //   console.log(`Renovação agendada + ${(tempo && tempo > 120000 ? tempo - 120000 : tempo)}`);
        //   clearTimeout(AuthenticationService.timeRenovacao);
        //   AuthenticationService.timeRenovacao = setTimeout(() => {
        //     this.obterNovoAccessToken();
        //   }, (tempo && tempo > 120000 ? tempo - 120000 : tempo));
        // }
    }
    limparAccessToken() {
        // clearTimeout(AuthenticationService.timeRenovacao);
        sessionStorage.removeItem('token');
        this.jwtPayload = null;
    }
    temPermissao(permissao) {
        return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
    }
    temQualquerPermissao(roles) {
        for (const role of roles) {
            if (this.temPermissao(role)) {
                return true;
            }
        }
        return false;
    }
    armazenarToken(token) {
        this.jwtPayload = this.jwtHelper.decodeToken(token);
        sessionStorage.setItem('token', btoa(token));
        this.agendarRenovacao();
    }
    getToken() {
        const token = sessionStorage.getItem('token');
        if (token) {
            return atob(token);
        }
        else {
            return null;
        }
    }
    logout() {
        if (sessionStorage.getItem('token')) {
            this.http.delete(this.logoutUrl, { withCredentials: true })
                .toPromise()
                .then(() => {
                sessionStorage.clear();
                this.jwtPayload = null;
            }).catch(response => {
                sessionStorage.clear();
                return Promise.resolve(null);
            });
        }
    }
    carregarToken() {
        const token = this.getToken();
        if (token) {
            this.armazenarToken(token);
        }
    }
}
AuthenticationService.timeRenovacao = null;
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var primeng_lts_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng-lts/api */ "RtSl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-block-ui */ "12jx");
/* harmony import */ var _security_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./security/jwt.interceptor */ "hJb+");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./security/auth.guard */ "dR4o");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ "3SYz");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "oUHS");
/* harmony import */ var _components_side_bar_item_side_bar_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/side-bar-item/side-bar-item.component */ "wKXa");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_lts_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng-lts/button */ "A1Yd");
/* harmony import */ var primeng_lts_sidebar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng-lts/sidebar */ "QjAq");
/* harmony import */ var primeng_lts_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng-lts/card */ "pxLX");
/* harmony import */ var primeng_lts_tieredmenu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng-lts/tieredmenu */ "zUH4");
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/avatar/avatar.component */ "gi6I");

























function tokenGetter() {
    return atob(sessionStorage.getItem('token'));
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        primeng_lts_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
        _security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _security_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"],
            multi: true
        },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"].forRoot({
                message: 'Carregando',
                delayStop: 500
            }),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"].forRoot({
                config: {
                    tokenGetter,
                    allowedDomains: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].tokenAllowedDomains,
                    disallowedRoutes: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].tokenDisallowedRoutes
                }
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            primeng_lts_button__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"],
            primeng_lts_sidebar__WEBPACK_IMPORTED_MODULE_18__["SidebarModule"],
            primeng_lts_card__WEBPACK_IMPORTED_MODULE_19__["CardModule"],
            primeng_lts_tieredmenu__WEBPACK_IMPORTED_MODULE_20__["TieredMenuModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_13__["MenuBarComponent"],
        _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__["SideBarComponent"],
        _components_side_bar_item_side_bar_item_component__WEBPACK_IMPORTED_MODULE_15__["SideBarItemComponent"],
        _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_21__["AvatarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        primeng_lts_button__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"],
        primeng_lts_sidebar__WEBPACK_IMPORTED_MODULE_18__["SidebarModule"],
        primeng_lts_card__WEBPACK_IMPORTED_MODULE_19__["CardModule"],
        primeng_lts_tieredmenu__WEBPACK_IMPORTED_MODULE_20__["TieredMenuModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_13__["MenuBarComponent"],
                    _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__["SideBarComponent"],
                    _components_side_bar_item_side_bar_item_component__WEBPACK_IMPORTED_MODULE_15__["SideBarItemComponent"],
                    _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_21__["AvatarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"].forRoot({
                        message: 'Carregando',
                        delayStop: 500
                    }),
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"].forRoot({
                        config: {
                            tokenGetter,
                            allowedDomains: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].tokenAllowedDomains,
                            disallowedRoutes: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].tokenDisallowedRoutes
                        }
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    primeng_lts_button__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"],
                    primeng_lts_sidebar__WEBPACK_IMPORTED_MODULE_18__["SidebarModule"],
                    primeng_lts_card__WEBPACK_IMPORTED_MODULE_19__["CardModule"],
                    primeng_lts_tieredmenu__WEBPACK_IMPORTED_MODULE_20__["TieredMenuModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]
                ],
                providers: [
                    primeng_lts_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
                    _security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _security_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"],
                        multi: true
                    },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' },
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"]
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dR4o":
/*!****************************************!*\
  !*** ./src/app/security/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/authentication.service */ "TTF2");




class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        if (this.authenticationService.isAccessTokenInvalido()) {
            return this.authenticationService.obterNovoAccessToken().then(() => {
                if (this.authenticationService.isAccessTokenInvalido()) {
                    this.router.navigate(['/login']);
                    return false;
                }
                else {
                    return this.verificar(route);
                }
            });
        }
        else {
            return this.verificar(route);
        }
    }
    verificar(route) {
        if (route.data.roles && !this.authenticationService.temQualquerPermissao(route.data.roles)) {
            this.router.navigate(['/pages/404']);
            return false;
        }
        else {
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "gi6I":
/*!*******************************************************!*\
  !*** ./src/app/components/avatar/avatar.component.ts ***!
  \*******************************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_components_base_resource_util_base_resource_util_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/base-resource-util/base-resource-util.component */ "AAie");
/* harmony import */ var src_app_pages_pages_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/pages-shared/services/usuario.service */ "4TNz");




class AvatarComponent extends src_app_shared_components_base_resource_util_base_resource_util_component__WEBPACK_IMPORTED_MODULE_1__["BaseResourceUtilComponent"] {
    constructor(injector, usuarioService) {
        super(injector);
        this.injector = injector;
        this.usuarioService = usuarioService;
        this.user = {};
    }
    ngOnInit() {
        this.user = this.usuarioService.getUsuario();
    }
}
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) { return new (t || AvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_pages_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"])); };
AvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvatarComponent, selectors: [["app-avatar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 2, consts: [["align", "center", 2, "background-color", "var(--primary-color)"], ["href", "#/pages", 1, "navbar-brand"], ["src", "assets/img/avatar.jpg", "width", "150", "loading", "lazy", 1, "p-mr-2"], [2, "color", "var(--primary-color-text) !important"]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.igreja ? ctx.user.igreja : "-");
    } }, styles: ["img[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvatarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-avatar',
                templateUrl: './avatar.component.html',
                styleUrls: ['./avatar.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: src_app_pages_pages_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }]; }, null); })();


/***/ }),

/***/ "hJb+":
/*!*********************************************!*\
  !*** ./src/app/security/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: NotAuthenticatedError, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthenticatedError", function() { return NotAuthenticatedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/authentication.service */ "TTF2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class NotAuthenticatedError {
}
class JwtInterceptor {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    intercept(req, next) {
        if (!this.isConstemUrlSemToken(req.url) && this.authenticationService.isAccessTokenInvalido()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.authenticationService.obterNovoAccessToken())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => {
                if (this.authenticationService.isAccessTokenInvalido()) {
                    throw new NotAuthenticatedError();
                }
                req = this.getHeaders(req);
                return next.handle(req);
            }));
        }
        return next.handle(req);
    }
    getHeaders(request, token) {
        token = token ? token : sessionStorage.getItem('token');
        return request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + atob(token)
            }
        });
    }
    isConstemUrlSemToken(url) {
        return url.includes('https://viacep.com.br/ws/') || url.includes('/oauth/token');
    }
    // PROTECTED METHODS
    handleError(error) {
        console.log("ERRO NA REQUISIÇÃO => ", error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "oUHS":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../avatar/avatar.component */ "gi6I");
/* harmony import */ var _side_bar_item_side_bar_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-bar-item/side-bar-item.component */ "wKXa");




class SideBarComponent {
    constructor() {
        this.menus = [
            {
                id: 1,
                nome: 'Lançamentos',
                icon: 'pi pi-pencil',
                menuPai: null,
                itens: [
                    {
                        nome: 'Saídas',
                        icon: 'pi pi-pencil',
                        url: '#/pages/saida'
                    },
                    {
                        nome: 'Entradas',
                        icon: 'pi pi-pencil',
                        url: '#/pages/entrada'
                    }
                ]
            },
            {
                id: 1,
                nome: 'Gerência',
                icon: 'pi pi-pencil',
                menuPai: null,
                itens: [
                    {
                        nome: 'Pessoas',
                        icon: 'pi pi-pencil',
                        url: '#/pages/pessoa'
                    }
                ]
            },
        ];
    }
    ngOnInit() { }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 2, vars: 1, consts: [[3, "menus"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-bar-item", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menus", ctx.menus);
    } }, directives: [_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__["AvatarComponent"], _side_bar_item_side_bar_item_component__WEBPACK_IMPORTED_MODULE_2__["SideBarItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: 'login', loadChildren: () => Promise.all(/*! import() | security-security-module */[__webpack_require__.e("default~pages-pages-module~security-security-module"), __webpack_require__.e("security-security-module")]).then(__webpack_require__.bind(null, /*! ./security/security.module */ "SuQF")).then(m => m.SecurityModule) },
    { path: 'pages', loadChildren: () => Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("default~pages-pages-module~security-security-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesModule) },
    { path: '**', redirectTo: 'login' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', enableTracing: false, useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', enableTracing: false, useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wKXa":
/*!*********************************************************************!*\
  !*** ./src/app/components/side-bar-item/side-bar-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: SideBarItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarItemComponent", function() { return SideBarItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_side_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/side-bar.service */ "ywVv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SideBarItemComponent_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarItemComponent_div_3_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const filho_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.navegar(filho_r5.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filho_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](filho_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filho_r5.nome, " ");
} }
function SideBarItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarItemComponent_div_3_Template_h2_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r3 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clickExpand(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SideBarItemComponent_div_3_div_7_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "h2collapse" + i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#collapse" + i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pi " + (ctx_r0.ariaExpanded[i_r3] ? "pi-chevron-up" : "pi-chevron-down"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#collapse" + i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "collapse" + i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.itens);
} }
function SideBarItemComponent_app_side_bar_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-bar-item", 11);
} if (rf & 2) {
    const ifilho_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ifilho_r10);
} }
class SideBarItemComponent {
    constructor(router, sideBarService) {
        this.router = router;
        this.sideBarService = sideBarService;
        this.ariaExpanded = [];
        this.itemComFilhos = [];
    }
    ngOnInit() {
        for (let i = 0; i < this.menus.length; i++) {
            this.ariaExpanded.push(false);
        }
    }
    navegar(url, event) {
        this.sideBarService.sendData({ close: true });
        this.router.navigate([url.replace('#', '')]);
    }
    clickExpand(i) {
        this.ariaExpanded[i] = !this.ariaExpanded[i];
        for (let j = 0; j < this.menus.length; j++) {
            if (j != i) {
                this.ariaExpanded[j] = false;
            }
        }
    }
}
SideBarItemComponent.ɵfac = function SideBarItemComponent_Factory(t) { return new (t || SideBarItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_side_bar_service__WEBPACK_IMPORTED_MODULE_2__["SideBarService"])); };
SideBarItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarItemComponent, selectors: [["app-side-bar-item"]], inputs: { menus: "menus" }, decls: 5, vars: 2, consts: [["align", "center", 1, "text-muted", "mt-2"], ["id", "accordionExample", 1, "accordion"], ["class", "card", 4, "ngFor", "ngForOf"], [3, "item", 4, "ngFor", "ngForOf"], [1, "card"], ["id", "headingOne", 1, "card-header"], ["data-toggle", "collapse", 1, "mb-0", 3, "id", "click"], ["data-toggle", "collapse", 2, "float", "right"], ["aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse", 3, "id"], ["class", "card-body", 3, "click", 4, "ngFor", "ngForOf"], [1, "card-body", 3, "click"], [3, "item"]], template: function SideBarItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideBarItemComponent_div_3_Template, 8, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideBarItemComponent_app_side_bar_item_4_Template, 1, 1, "app-side-bar-item", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemComFilhos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], SideBarItemComponent], styles: ["h2[_ngcontent-%COMP%] {\r\n    background-color: var(--surface-d);\r\n    color: var(--text-color);\r\n    font-family: var(--font-padrao);\r\n    font-size: 17px;\r\n    cursor: pointer;\r\n    margin-top: 8px;\r\n}\r\n\r\ndiv.card[_ngcontent-%COMP%] {\r\n    margin-bottom: 1px;\r\n    background-color: var(--surface-b);\r\n}\r\n\r\ndiv.card-header[_ngcontent-%COMP%] {\r\n    background-color: var(--surface-d);\r\n    position: relative;\r\n    padding: 7px;\r\n}\r\n\r\ndiv.card-body[_ngcontent-%COMP%] {\r\n    background-color: var(--surface-b);\r\n    cursor: pointer;\r\n    position: relative;\r\n    padding: 5px;\r\n}\r\n\r\ndiv.card-body[_ngcontent-%COMP%]:hover {\r\n    background-color: var(--surface-a);\r\n    color: var(--text-color-secondary);\r\n    text-decoration: underline;\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n    color: var(--text-color);\r\n    font-family: var(--font-padrao);\r\n    font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci1pdGVtL3NpZGUtYmFyLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyLWl0ZW0vc2lkZS1iYXItaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1kKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXBhZHJhbyk7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbmRpdi5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtYik7XHJcbn1cclxuXHJcbmRpdi5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWQpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG59XHJcblxyXG5kaXYuY2FyZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtYik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmRpdi5jYXJkLWJvZHk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1hKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuaDYge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcGFkcmFvKTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar-item',
                templateUrl: './side-bar-item.component.html',
                styleUrls: ['./side-bar-item.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_shared_services_side_bar_service__WEBPACK_IMPORTED_MODULE_2__["SideBarService"] }]; }, { menus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ywVv":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/side-bar.service.ts ***!
  \*****************************************************/
/*! exports provided: SideBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarService", function() { return SideBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SideBarService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    sendData(data) {
        this.subject.next(data);
    }
    getData() {
        return this.subject;
    }
}
SideBarService.ɵfac = function SideBarService_Factory(t) { return new (t || SideBarService)(); };
SideBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SideBarService, factory: SideBarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map