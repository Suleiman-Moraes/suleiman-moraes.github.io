(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/QYO":function(t,e,o){"use strict";o.r(e),o.d(e,"MenuModule",(function(){return L}));var r=o("tyNb"),n=o("dR4o"),a=o("zfSa"),c=o("3Pt+"),i=o("xuCY"),s=o("fXoL"),b=o("ZFNV"),u=o("pxLX"),l=o("A1Yd"),p=o("evnt");let d=(()=>{class t extends i.a{constructor(t,e){super(t,e),this.injector=t,this.service=e}initForm(){this.formulario=this.formBuilder.group({id:[null],nome:[null,[c.q.required,c.q.maxLength(50)]]})}posSubmitFormSucesso(){this.showSuccess("new"==this.currentAction?"Menu inclu\xeddo com sucesso!":"Menu atualizado com sucesso!"),this.location.back()}createPageTitle(){return"Incluir Menu"}editionPageTitle(){return"Editar Menu"}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.s),s.Lb(b.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-menu-form"]],features:[s.wb],decls:13,vars:3,consts:[[1,"form-row"],[1,"form-group","col-md-6","p-card-title"],[1,"form-group","col-md-6"],["pButton","","pRipple","","type","button","label","Voltar","icon","pi pi-arrow-left",2,"float","right",3,"click"],["novalidate","",3,"formGroup"],["for-name","nome","nome","Nome",1,"form-group","col-md-12",3,"formulario"],[1,"form-group","col-md-12"],["align","center"],["pButton","","pRipple","","type","button","label","Salvar","icon","pi pi-save",3,"click"]],template:function(t,e){1&t&&(s.Rb(0,"p-card"),s.Rb(1,"div",0),s.Rb(2,"div",1),s.Ac(3),s.Qb(),s.Rb(4,"div",2),s.Rb(5,"button",3),s.Yb("click",(function(){return e.back()})),s.Qb(),s.Qb(),s.Qb(),s.Rb(6,"form",4),s.Rb(7,"div",0),s.Mb(8,"app-input-padrao",5),s.Qb(),s.Rb(9,"div",0),s.Rb(10,"div",6),s.Rb(11,"div",7),s.Rb(12,"button",8),s.Yb("click",(function(){return e.submitForm()})),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&t&&(s.zb(3),s.Cc(" ",e.pageTitle," "),s.zb(3),s.gc("formGroup",e.formulario),s.zb(2),s.gc("formulario",e.formulario))},directives:[u.a,l.b,c.r,c.m,c.g,p.a],styles:[""]}),t})();var f=o("ylx5"),m=o("ofXK"),g=o("tQ6G"),R=o("rOmd");function v(t,e){if(1&t&&(s.Rb(0,"tr",12),s.Rb(1,"td",13),s.Ac(2),s.Qb(),s.Rb(3,"td",14),s.Ac(4),s.bc(5,"valueOrTrace"),s.Qb(),s.Rb(6,"td",15),s.Mb(7,"button",16),s.Qb(),s.Qb()),2&t){const t=e.$implicit;s.zb(2),s.Cc(" ",t.id," "),s.zb(2),s.Cc(" ",s.cc(5,3,t.nome)," "),s.zb(3),s.gc("routerLink","/pages/menu/edit/"+t.id)}}function Q(t,e){if(1&t&&(s.Rb(0,"tbody"),s.yc(1,v,8,5,"tr",11),s.Qb()),2&t){const t=s.ac();s.zb(1),s.gc("ngForOf",t.resources.content)}}const h=function(){return{"background-color":"var(--surface-e)",border:"1px solid var(--surface-e)"}},w=function(){return[5,10,20,30,50,100]};function y(t,e){if(1&t){const t=s.Sb();s.Rb(0,"p-paginator",17),s.Yb("onPageChange",(function(e){return s.rc(t),s.ac().paginate(e)})),s.Qb()}if(2&t){const t=s.ac();s.wc(s.ic(5,h)),s.gc("rows",t.filterForm.value.size)("totalRecords",t.resources?t.resources.totalElements:0)("rowsPerPageOptions",s.ic(6,w))}}function O(t,e){1&t&&(s.Rb(0,"div"),s.Ac(1,"Nehum registro encontrado"),s.Qb())}const k=[{path:"",component:(()=>{class t extends f.a{constructor(t,e){super(t,e),this.service=t,this.injector=e}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(b.a),s.Lb(s.s))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-menu-list"]],features:[s.wb],decls:19,vars:3,consts:[["header","Listagem de Menus"],[1,"form-row"],[1,"form-group","col-md-12"],["align","right"],["pButton","","pRipple","","type","button","routerLink","/pages/menu/new","label","Novo","icon","pi pi-plus"],["id","no-more-tables",2,"word-wrap","break-word"],[1,"table-responsive"],[1,"table","table-hover"],[1,"table-bootstrap-head"],[4,"ngIf"],[3,"rows","style","totalRecords","rowsPerPageOptions","onPageChange",4,"ngIf"],["class","table-bootstrap-body",4,"ngFor","ngForOf"],[1,"table-bootstrap-body"],["data-title","C\xf3digo"],["data-title","Nome"],["data-title","A\xe7\xe3o"],["title","Editar","pButton","","pRipple","","type","button","icon","fa fa-edit",1,"p-button-rounded",3,"routerLink"],[3,"rows","totalRecords","rowsPerPageOptions","onPageChange"]],template:function(t,e){1&t&&(s.Rb(0,"p-card",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"div",3),s.Mb(4,"button",4),s.Qb(),s.Qb(),s.Qb(),s.Rb(5,"section",5),s.Rb(6,"div",6),s.Rb(7,"table",7),s.Rb(8,"thead"),s.Rb(9,"tr",8),s.Rb(10,"th"),s.Ac(11,"C\xf3digo"),s.Qb(),s.Rb(12,"th"),s.Ac(13,"Nome"),s.Qb(),s.Rb(14,"th"),s.Ac(15,"A\xe7\xf5es"),s.Qb(),s.Qb(),s.Qb(),s.yc(16,Q,2,1,"tbody",9),s.Qb(),s.yc(17,y,1,7,"p-paginator",10),s.yc(18,O,2,0,"div",9),s.Qb(),s.Qb(),s.Qb()),2&t&&(s.zb(16),s.gc("ngIf",e.resources),s.zb(1),s.gc("ngIf",e.resources&&0!=e.resources.totalElements&&e.filterForm.value.size<=e.resources.totalElements),s.zb(1),s.gc("ngIf",!e.resources||0==e.resources.totalElements))},directives:[u.a,l.b,r.c,m.l,m.k,g.a],pipes:[R.a],styles:[""]}),t})(),canActivate:[n.a],data:{roles:[a.a.ROLE_ROOT]}},{path:"new",component:d,canActivate:[n.a],data:{roles:[a.a.ROLE_ROOT]}},{path:"edit/:id",component:d,canActivate:[n.a],data:{roles:[a.a.ROLE_ROOT]}}];let z=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[r.f.forChild(k)],r.f]}),t})();var A=o("PCNd");let L=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[A.a,z]]}),t})()}}]);