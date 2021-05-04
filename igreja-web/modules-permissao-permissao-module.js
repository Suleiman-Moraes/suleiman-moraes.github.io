(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-permissao-permissao-module"],{

/***/ "5PvJ":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/modules/permissao/components/permissao-list/permissao-list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PermissaoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissaoListComponent", function() { return PermissaoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/base-resource-list/base-resource-list.component */ "ylx5");
/* harmony import */ var src_app_pages_pages_shared_services_permissao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/pages-shared/services/permissao.service */ "HXl5");
/* harmony import */ var primeng_lts_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng-lts/card */ "pxLX");
/* harmony import */ var primeng_lts_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng-lts/button */ "A1Yd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_lts_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng-lts/confirmdialog */ "3u2U");
/* harmony import */ var primeng_lts_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng-lts/paginator */ "tQ6G");
/* harmony import */ var _shared_pipes_value_or_trace_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/pipes/value-or-trace.pipe */ "rOmd");











function PermissaoListComponent_tbody_18_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "valueOrTrace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "valueOrTrace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r4.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, rowData_r4.nome), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, rowData_r4.descricao), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/pages/permissao/edit/" + rowData_r4.id);
} }
function PermissaoListComponent_tbody_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PermissaoListComponent_tbody_18_tr_1_Template, 11, 8, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.resources.content);
} }
const _c0 = function () { return { "background-color": "var(--surface-e)", "border": "1px solid var(--surface-e)" }; };
const _c1 = function () { return [5, 10, 20, 30, 50, 100]; };
function PermissaoListComponent_p_paginator_19_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function PermissaoListComponent_p_paginator_19_Template_p_paginator_onPageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.paginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r1.filterForm.value.size)("totalRecords", ctx_r1.resources ? ctx_r1.resources.totalElements : 0)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
} }
function PermissaoListComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nehum registro encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { width: "50vw" }; };
class PermissaoListComponent extends src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseResourceListComponent"] {
    constructor(service, injector) {
        super(service, injector);
        this.service = service;
        this.injector = injector;
    }
}
PermissaoListComponent.ɵfac = function PermissaoListComponent_Factory(t) { return new (t || PermissaoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_pages_shared_services_permissao_service__WEBPACK_IMPORTED_MODULE_2__["PermissaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
PermissaoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PermissaoListComponent, selectors: [["app-permissao-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 7, consts: [["header", "Listagem de Permiss\u00F5es"], [1, "form-row"], [1, "form-group", "col-md-12"], ["align", "right"], ["pButton", "", "pRipple", "", "type", "button", "routerLink", "/pages/permissao/new", "label", "Novo", "icon", "pi pi-plus"], ["id", "no-more-tables", 2, "word-wrap", "break-word"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-bootstrap-head"], [4, "ngIf"], [3, "rows", "style", "totalRecords", "rowsPerPageOptions", "onPageChange", 4, "ngIf"], [3, "baseZIndex"], ["class", "table-bootstrap-body", 4, "ngFor", "ngForOf"], [1, "table-bootstrap-body"], ["data-title", "C\u00F3digo"], ["data-title", "Nome"], ["data-title", "Descri\u00E7\u00E3o"], ["data-title", "A\u00E7\u00E3o"], ["title", "Editar", "pButton", "", "pRipple", "", "type", "button", "icon", "fa fa-edit", 1, "p-button-rounded", 3, "routerLink"], [3, "rows", "totalRecords", "rowsPerPageOptions", "onPageChange"]], template: function PermissaoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Descri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "A\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PermissaoListComponent_tbody_18_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PermissaoListComponent_p_paginator_19_Template, 1, 7, "p-paginator", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PermissaoListComponent_div_20_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p-confirmDialog", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resources);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resources && ctx.resources.totalElements != 0 && ctx.filterForm.value.size <= ctx.resources.totalElements);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.resources || ctx.resources.totalElements == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [primeng_lts_card__WEBPACK_IMPORTED_MODULE_3__["Card"], primeng_lts_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], primeng_lts_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], primeng_lts_paginator__WEBPACK_IMPORTED_MODULE_8__["Paginator"]], pipes: [_shared_pipes_value_or_trace_pipe__WEBPACK_IMPORTED_MODULE_9__["ValueOrTracePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZHVsZXMvcGVybWlzc2FvL2NvbXBvbmVudHMvcGVybWlzc2FvLWxpc3QvcGVybWlzc2FvLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissaoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-permissao-list',
                templateUrl: './permissao-list.component.html',
                styleUrls: ['./permissao-list.component.css']
            }]
    }], function () { return [{ type: src_app_pages_pages_shared_services_permissao_service__WEBPACK_IMPORTED_MODULE_2__["PermissaoService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "cbzj":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/modules/permissao/components/permissao-form/permissao-form.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PermissaoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissaoFormComponent", function() { return PermissaoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/base-resource-form/base-resource-form.component */ "xuCY");
/* harmony import */ var src_app_pages_pages_shared_services_permissao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/pages-shared/services/permissao.service */ "HXl5");
/* harmony import */ var primeng_lts_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng-lts/card */ "pxLX");
/* harmony import */ var primeng_lts_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng-lts/button */ "A1Yd");
/* harmony import */ var _shared_components_input_padrao_input_padrao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/input-padrao/input-padrao.component */ "evnt");
/* harmony import */ var _shared_components_input_area_padrao_input_area_padrao_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/input-area-padrao/input-area-padrao.component */ "ZT6d");










class PermissaoFormComponent extends src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseResourceFormComponent"] {
    constructor(injector, service) {
        super(injector, service);
        this.injector = injector;
        this.service = service;
    }
    //METHODS PRIVATE
    initForm() {
        this.formulario = this.formBuilder.group({
            id: [null],
            nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            descricao: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)]]
        });
    }
    posSubmitFormSucesso() {
        if (this.currentAction == 'new') {
            this.showSuccess('Permissão incluída com sucesso!');
        }
        else {
            this.showSuccess('Permissão atualizada com sucesso!');
        }
        this.location.back();
    }
    createPageTitle() {
        return 'Incluir Permissão';
    }
    editionPageTitle() {
        return 'Editar Permissão';
    }
}
PermissaoFormComponent.ɵfac = function PermissaoFormComponent_Factory(t) { return new (t || PermissaoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_pages_shared_services_permissao_service__WEBPACK_IMPORTED_MODULE_3__["PermissaoService"])); };
PermissaoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PermissaoFormComponent, selectors: [["app-permissao-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 4, consts: [[1, "form-row"], [1, "form-group", "col-md-6", "p-card-title"], [1, "form-group", "col-md-6"], ["pButton", "", "pRipple", "", "type", "button", "label", "Voltar", "icon", "pi pi-arrow-left", 2, "float", "right", 3, "click"], ["novalidate", "", 3, "formGroup"], ["for-name", "nome", "nome", "Nome", 1, "form-group", "col-md-12", 3, "formulario"], ["for-name", "descricao", "nome", "Descri\u00E7\u00E3o", 1, "form-group", "col-md-12", 3, "formulario"], [1, "form-group", "col-md-12"], ["align", "center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Salvar", "icon", "pi pi-save", 3, "click"]], template: function PermissaoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissaoFormComponent_Template_button_click_5_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-input-padrao", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-input-area-padrao", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissaoFormComponent_Template_button_click_14_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formulario", ctx.formulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formulario", ctx.formulario);
    } }, directives: [primeng_lts_card__WEBPACK_IMPORTED_MODULE_4__["Card"], primeng_lts_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_input_padrao_input_padrao_component__WEBPACK_IMPORTED_MODULE_6__["InputPadraoComponent"], _shared_components_input_area_padrao_input_area_padrao_component__WEBPACK_IMPORTED_MODULE_7__["InputAreaPadraoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZHVsZXMvcGVybWlzc2FvL2NvbXBvbmVudHMvcGVybWlzc2FvLWZvcm0vcGVybWlzc2FvLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissaoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-permissao-form',
                templateUrl: './permissao-form.component.html',
                styleUrls: ['./permissao-form.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: src_app_pages_pages_shared_services_permissao_service__WEBPACK_IMPORTED_MODULE_3__["PermissaoService"] }]; }, null); })();


/***/ }),

/***/ "iCbA":
/*!*************************************************************!*\
  !*** ./src/app/pages/modules/permissao/permissao.module.ts ***!
  \*************************************************************/
/*! exports provided: PermissaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissaoModule", function() { return PermissaoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _permissao_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissao-routing.module */ "kwPj");
/* harmony import */ var _components_permissao_form_permissao_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/permissao-form/permissao-form.component */ "cbzj");
/* harmony import */ var _components_permissao_list_permissao_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/permissao-list/permissao-list.component */ "5PvJ");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");






class PermissaoModule {
}
PermissaoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PermissaoModule });
PermissaoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PermissaoModule_Factory(t) { return new (t || PermissaoModule)(); }, imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _permissao_routing_module__WEBPACK_IMPORTED_MODULE_1__["PermissaoRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PermissaoModule, { declarations: [_components_permissao_form_permissao_form_component__WEBPACK_IMPORTED_MODULE_2__["PermissaoFormComponent"],
        _components_permissao_list_permissao_list_component__WEBPACK_IMPORTED_MODULE_3__["PermissaoListComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _permissao_routing_module__WEBPACK_IMPORTED_MODULE_1__["PermissaoRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissaoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_permissao_form_permissao_form_component__WEBPACK_IMPORTED_MODULE_2__["PermissaoFormComponent"],
                    _components_permissao_list_permissao_list_component__WEBPACK_IMPORTED_MODULE_3__["PermissaoListComponent"]
                ],
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _permissao_routing_module__WEBPACK_IMPORTED_MODULE_1__["PermissaoRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kwPj":
/*!*********************************************************************!*\
  !*** ./src/app/pages/modules/permissao/permissao-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PermissaoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissaoRoutingModule", function() { return PermissaoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/security/auth.guard */ "dR4o");
/* harmony import */ var src_app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/role.enum */ "zfSa");
/* harmony import */ var _components_permissao_form_permissao_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/permissao-form/permissao-form.component */ "cbzj");
/* harmony import */ var _components_permissao_list_permissao_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/permissao-list/permissao-list.component */ "5PvJ");








const routes = [
    { path: '', component: _components_permissao_list_permissao_list_component__WEBPACK_IMPORTED_MODULE_5__["PermissaoListComponent"], canActivate: [src_app_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: [src_app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_3__["Role"].ROLE_ROOT] } },
    { path: 'new', component: _components_permissao_form_permissao_form_component__WEBPACK_IMPORTED_MODULE_4__["PermissaoFormComponent"], canActivate: [src_app_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: [src_app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_3__["Role"].ROLE_ROOT] } },
    { path: 'edit/:id', component: _components_permissao_form_permissao_form_component__WEBPACK_IMPORTED_MODULE_4__["PermissaoFormComponent"], canActivate: [src_app_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: [src_app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_3__["Role"].ROLE_ROOT] } }
];
class PermissaoRoutingModule {
}
PermissaoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PermissaoRoutingModule });
PermissaoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PermissaoRoutingModule_Factory(t) { return new (t || PermissaoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PermissaoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissaoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-permissao-permissao-module.js.map