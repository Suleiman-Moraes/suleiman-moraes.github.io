(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "HXl5":
/*!******************************************************************!*\
  !*** ./src/app/pages/pages-shared/services/permissao.service.ts ***!
  \******************************************************************/
/*! exports provided: PermissaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissaoService", function() { return PermissaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_components_base_resource_service_base_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/base-resource-service/base-resource.service */ "yVcJ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");




class PermissaoService extends src_app_shared_components_base_resource_service_base_resource_service__WEBPACK_IMPORTED_MODULE_1__["BaseResourceService"] {
    constructor(injector) {
        super(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/api/permissao`, injector);
        this.injector = injector;
        this.route = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/api/permissao`;
    }
}
PermissaoService.ɵfac = function PermissaoService_Factory(t) { return new (t || PermissaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
PermissaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PermissaoService, factory: PermissaoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissaoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map