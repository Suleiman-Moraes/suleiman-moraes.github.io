(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{iCbA:function(t,e,o){"use strict";o.r(e),o.d(e,"PermissaoModule",(function(){return x}));var r=o("tyNb"),a=o("dR4o"),i=o("zfSa"),c=o("3Pt+"),n=o("xuCY"),s=o("fXoL"),b=o("HXl5"),u=o("pxLX"),l=o("A1Yd"),p=o("evnt"),d=o("ZT6d");let m=(()=>{class t extends n.a{constructor(t,e){super(t,e),this.injector=t,this.service=e}initForm(){this.formulario=this.formBuilder.group({id:[null],nome:[null,[c.q.required,c.q.maxLength(100)]],descricao:[null,[c.q.maxLength(300)]]})}posSubmitFormSucesso(){this.showSuccess("new"==this.currentAction?"Permiss\xe3o inclu\xedda com sucesso!":"Permiss\xe3o atualizada com sucesso!"),this.location.back()}createPageTitle(){return"Incluir Permiss\xe3o"}editionPageTitle(){return"Editar Permiss\xe3o"}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.s),s.Lb(b.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-permissao-form"]],features:[s.wb],decls:15,vars:4,consts:[[1,"form-row"],[1,"form-group","col-md-6","p-card-title"],[1,"form-group","col-md-6"],["pButton","","pRipple","","type","button","label","Voltar","icon","pi pi-arrow-left",2,"float","right",3,"click"],["novalidate","",3,"formGroup"],["for-name","nome","nome","Nome",1,"form-group","col-md-12",3,"formulario"],["for-name","descricao","nome","Descri\xe7\xe3o",1,"form-group","col-md-12",3,"formulario"],[1,"form-group","col-md-12"],["align","center"],["pButton","","pRipple","","type","button","label","Salvar","icon","pi pi-save",3,"click"]],template:function(t,e){1&t&&(s.Rb(0,"p-card"),s.Rb(1,"div",0),s.Rb(2,"div",1),s.Ac(3),s.Qb(),s.Rb(4,"div",2),s.Rb(5,"button",3),s.Yb("click",(function(){return e.back()})),s.Qb(),s.Qb(),s.Qb(),s.Rb(6,"form",4),s.Rb(7,"div",0),s.Mb(8,"app-input-padrao",5),s.Qb(),s.Rb(9,"div",0),s.Mb(10,"app-input-area-padrao",6),s.Qb(),s.Qb(),s.Rb(11,"div",0),s.Rb(12,"div",7),s.Rb(13,"div",8),s.Rb(14,"button",9),s.Yb("click",(function(){return e.submitForm()})),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&t&&(s.zb(3),s.Cc(" ",e.pageTitle," "),s.zb(3),s.gc("formGroup",e.formulario),s.zb(2),s.gc("formulario",e.formulario),s.zb(2),s.gc("formulario",e.formulario))},directives:[u.a,l.b,c.r,c.m,c.g,p.a,d.a],styles:[""]}),t})();var f=o("ylx5"),g=o("ofXK"),R=o("3u2U"),v=o("tQ6G"),Q=o("rOmd");function h(t,e){if(1&t&&(s.Rb(0,"tr",13),s.Rb(1,"td",14),s.Ac(2),s.Qb(),s.Rb(3,"td",15),s.Ac(4),s.bc(5,"valueOrTrace"),s.Qb(),s.Rb(6,"td",16),s.Ac(7),s.bc(8,"valueOrTrace"),s.Qb(),s.Rb(9,"td",17),s.Mb(10,"button",18),s.Qb(),s.Qb()),2&t){const t=e.$implicit;s.zb(2),s.Cc(" ",t.id," "),s.zb(2),s.Cc(" ",s.cc(5,4,t.nome)," "),s.zb(3),s.Cc(" ",s.cc(8,6,t.descricao)," "),s.zb(3),s.gc("routerLink","/pages/permissao/edit/"+t.id)}}function w(t,e){if(1&t&&(s.Rb(0,"tbody"),s.yc(1,h,11,8,"tr",12),s.Qb()),2&t){const t=s.ac();s.zb(1),s.gc("ngForOf",t.resources.content)}}const y=function(){return{"background-color":"var(--surface-e)",border:"1px solid var(--surface-e)"}},P=function(){return[5,10,20,30,50,100]};function z(t,e){if(1&t){const t=s.Sb();s.Rb(0,"p-paginator",19),s.Yb("onPageChange",(function(e){return s.rc(t),s.ac().paginate(e)})),s.Qb()}if(2&t){const t=s.ac();s.wc(s.ic(5,y)),s.gc("rows",t.filterForm.value.size)("totalRecords",t.resources?t.resources.totalElements:0)("rowsPerPageOptions",s.ic(6,P))}}function A(t,e){1&t&&(s.Rb(0,"div"),s.Ac(1,"Nehum registro encontrado"),s.Qb())}const O=function(){return{width:"50vw"}},L=[{path:"",component:(()=>{class t extends f.a{constructor(t,e){super(t,e),this.service=t,this.injector=e}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(b.a),s.Lb(s.s))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-permissao-list"]],features:[s.wb],decls:22,vars:7,consts:[["header","Listagem de Permiss\xf5es"],[1,"form-row"],[1,"form-group","col-md-12"],["align","right"],["pButton","","pRipple","","type","button","routerLink","/pages/permissao/new","label","Novo","icon","pi pi-plus"],["id","no-more-tables",2,"word-wrap","break-word"],[1,"table-responsive"],[1,"table","table-hover"],[1,"table-bootstrap-head"],[4,"ngIf"],[3,"rows","style","totalRecords","rowsPerPageOptions","onPageChange",4,"ngIf"],[3,"baseZIndex"],["class","table-bootstrap-body",4,"ngFor","ngForOf"],[1,"table-bootstrap-body"],["data-title","C\xf3digo"],["data-title","Nome"],["data-title","Descri\xe7\xe3o"],["data-title","A\xe7\xe3o"],["title","Editar","pButton","","pRipple","","type","button","icon","fa fa-edit",1,"p-button-rounded",3,"routerLink"],[3,"rows","totalRecords","rowsPerPageOptions","onPageChange"]],template:function(t,e){1&t&&(s.Rb(0,"p-card",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"div",3),s.Mb(4,"button",4),s.Qb(),s.Qb(),s.Qb(),s.Rb(5,"section",5),s.Rb(6,"div",6),s.Rb(7,"table",7),s.Rb(8,"thead"),s.Rb(9,"tr",8),s.Rb(10,"th"),s.Ac(11,"C\xf3digo"),s.Qb(),s.Rb(12,"th"),s.Ac(13,"Nome"),s.Qb(),s.Rb(14,"th"),s.Ac(15,"Descri\xe7\xe3o"),s.Qb(),s.Rb(16,"th"),s.Ac(17,"A\xe7\xf5es"),s.Qb(),s.Qb(),s.Qb(),s.yc(18,w,2,1,"tbody",9),s.Qb(),s.yc(19,z,1,7,"p-paginator",10),s.yc(20,A,2,0,"div",9),s.Qb(),s.Qb(),s.Qb(),s.Mb(21,"p-confirmDialog",11)),2&t&&(s.zb(18),s.gc("ngIf",e.resources),s.zb(1),s.gc("ngIf",e.resources&&0!=e.resources.totalElements&&e.filterForm.value.size<=e.resources.totalElements),s.zb(1),s.gc("ngIf",!e.resources||0==e.resources.totalElements),s.zb(1),s.wc(s.ic(6,O)),s.gc("baseZIndex",1e4))},directives:[u.a,l.b,r.c,g.l,R.a,g.k,v.a],pipes:[Q.a],styles:[""]}),t})(),canActivate:[a.a],data:{roles:[i.a.ROLE_ROOT]}},{path:"new",component:m,canActivate:[a.a],data:{roles:[i.a.ROLE_ROOT]}},{path:"edit/:id",component:m,canActivate:[a.a],data:{roles:[i.a.ROLE_ROOT]}}];let k=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[r.f.forChild(L)],r.f]}),t})();var C=o("PCNd");let x=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[C.a,k]]}),t})()}}]);