(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3A3g":function(t,e,o){"use strict";o.r(e),o.d(e,"ItemMenuModule",(function(){return $}));var r=o("tyNb"),i=o("dR4o"),n=o("zfSa"),a=o("3Pt+"),c=o("xuCY"),s=o("fXoL"),u=o("lJxs"),l=o("JIr8"),b=o("yVcJ"),p=o("AytR");let d=(()=>{class t extends b.a{constructor(t){super(p.a.API_URL+"/api/itemmenu",t),this.injector=t,this.route=p.a.API_URL+"/api/itemmenu"}ativar(t){return this.http.put(`${this.apiPath}/ativar/${t}`,null).pipe(Object(u.a)(t=>t),Object(l.a)(this.handleError))}}return t.\u0275fac=function(e){return new(e||t)(s.Vb(s.s))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=o("ZFNV"),f=o("HXl5"),g=o("pxLX"),h=o("A1Yd"),v=o("evnt"),R=o("3JaC"),Q=o("ofXK"),y=o("+7Pr"),I=o("RtSl");function w(t,e){if(1&t&&(s.Rb(0,"div",15),s.Rb(1,"h5",16),s.Ac(2),s.Qb(),s.Qb()),2&t){const t=e.$implicit;s.zb(2),s.Bc(t.nome)}}function O(t,e){if(1&t&&(s.Rb(0,"div",0),s.Rb(1,"div",10),s.Rb(2,"p-pickList",13),s.yc(3,w,3,1,"ng-template",14),s.Qb(),s.Qb(),s.Qb()),2&t){const t=s.ac();s.zb(2),s.gc("source",t.permissoes)("target",t.selecionadas)("dragdrop",!0)("responsive",!0)}}let A=(()=>{class t extends c.a{constructor(t,e,o,r){super(t,e),this.injector=t,this.service=e,this.menuService=o,this.permissaoService=r,this.selecionadas=[]}initForm(){this.menuForm=this.formId(!0),this.formulario=this.formBuilder.group({id:[null],nome:[null,[a.q.required,a.q.maxLength(50)]],icon:[null,[a.q.required,a.q.maxLength(50)]],url:[null,[a.q.required,a.q.maxLength(100)]],ativo:[null],permissoes:[null],menu:this.menuForm})}posSubmitFormSucesso(){this.showSuccess("new"==this.currentAction?"Item de Menu inclu\xeddo com sucesso!":"Item de Menu atualizado com sucesso!"),this.location.back()}createPageTitle(){return"Incluir Item de Menu"}editionPageTitle(){return"Editar Item de Menu"}posLoadResource(){this.selecionadas=this.formulario.value.permissoes?this.formulario.value.permissoes:[],this.tratarPermissoes()}beforeSubmitForm(){this.formulario.get("permissoes").setValue(this.selecionadas)}posNgOnInit(){this.buscar(this.menuService.findBy(),"menus"),this.buscar(this.permissaoService.getAll(),"permissoes",()=>{this.tratarPermissoes()})}tratarPermissoes(){"edit"==this.currentAction&&this.permissoes&&(this.permissoes=this.permissoes.filter(t=>{for(let e=0;e<this.selecionadas.length;e++)if(this.selecionadas[e].id==t.id)return!1;return!0}))}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.s),s.Lb(d),s.Lb(m.a),s.Lb(f.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-item-menu-form"]],features:[s.wb],decls:18,vars:8,consts:[[1,"form-row"],[1,"form-group","col-md-6","p-card-title"],[1,"form-group","col-md-6"],["pButton","","pRipple","","type","button","label","Voltar","icon","pi pi-arrow-left",2,"float","right",3,"click"],["novalidate","",3,"formGroup"],["for-name","nome","nome","Nome",1,"form-group","col-md-6",3,"formulario"],["for-name","icon","nome","\xcdcone",1,"form-group","col-md-6",3,"formulario"],["for-name","url","nome","Url",1,"form-group","col-md-6",3,"formulario"],["for-name","id","nome","Menu","text","nome","value","id",1,"form-group","col-md-6",3,"formulario","options"],["class","form-row",4,"ngIf"],[1,"form-group","col-md-12"],["align","center"],["pButton","","pRipple","","type","button","label","Salvar","icon","pi pi-save",3,"click"],["filterBy","nome","sourceFilterPlaceholder","Filtrar por Nome","targetFilterPlaceholder","Filtrar por Nome","sourceHeader","Permiss\xf5es","targetHeader","Selecionadas",3,"source","target","dragdrop","responsive"],["pTemplate","item"],[1,"product-list-detail"],[1,"p-mb-2"]],template:function(t,e){1&t&&(s.Rb(0,"p-card"),s.Rb(1,"div",0),s.Rb(2,"div",1),s.Ac(3),s.Qb(),s.Rb(4,"div",2),s.Rb(5,"button",3),s.Yb("click",(function(){return e.back()})),s.Qb(),s.Qb(),s.Qb(),s.Rb(6,"form",4),s.Rb(7,"div",0),s.Mb(8,"app-input-padrao",5),s.Mb(9,"app-input-padrao",6),s.Qb(),s.Rb(10,"div",0),s.Mb(11,"app-input-padrao",7),s.Mb(12,"app-combo-box-padrao",8),s.Qb(),s.yc(13,O,4,4,"div",9),s.Rb(14,"div",0),s.Rb(15,"div",10),s.Rb(16,"div",11),s.Rb(17,"button",12),s.Yb("click",(function(){return e.submitForm()})),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&t&&(s.zb(3),s.Cc(" ",e.pageTitle," "),s.zb(3),s.gc("formGroup",e.formulario),s.zb(2),s.gc("formulario",e.formulario),s.zb(1),s.gc("formulario",e.formulario),s.zb(2),s.gc("formulario",e.formulario),s.zb(1),s.gc("formulario",e.menuForm)("options",e.menus),s.zb(1),s.gc("ngIf",e.permissoes))},directives:[g.a,h.b,a.r,a.m,a.g,v.a,R.a,Q.l,y.a,I.e],styles:[".product-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.5rem;width:100%}img[_ngcontent-%COMP%]{width:75px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-right:1rem}.product-list-detail[_ngcontent-%COMP%]{flex:1 1 0}.product-list-action[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.product-category-icon[_ngcontent-%COMP%]{vertical-align:middle;margin-right:.5rem}.product-category[_ngcontent-%COMP%]{vertical-align:middle;line-height:1}"]}),t})();var P=o("ylx5"),x=o("3u2U"),z=o("tQ6G"),k=o("rOmd");function C(t,e){if(1&t&&s.Mb(0,"button",23),2&t){const t=s.ac().$implicit;s.gc("routerLink","/pages/itemmenu/edit/"+t.id)}}function L(t,e){if(1&t){const t=s.Sb();s.Rb(0,"button",24),s.Yb("click",(function(){s.rc(t);const e=s.ac().$implicit;return s.ac(2).ativarOuInativar(e.id,!1)})),s.Qb()}}function M(t,e){if(1&t){const t=s.Sb();s.Rb(0,"button",25),s.Yb("click",(function(){s.rc(t);const e=s.ac().$implicit;return s.ac(2).ativarOuInativar(e.id,!0)})),s.Qb()}}function F(t,e){if(1&t&&(s.Rb(0,"tr",13),s.Rb(1,"td",14),s.Ac(2),s.Qb(),s.Rb(3,"td",15),s.Ac(4),s.bc(5,"valueOrTrace"),s.Qb(),s.Rb(6,"td",16),s.Ac(7),s.bc(8,"valueOrTrace"),s.Qb(),s.Rb(9,"td",17),s.Ac(10),s.bc(11,"valueOrTrace"),s.Qb(),s.Rb(12,"td",18),s.Ac(13),s.bc(14,"valueOrTrace"),s.Qb(),s.Rb(15,"td",19),s.yc(16,C,1,1,"button",20),s.Ac(17," \xa0 "),s.yc(18,L,1,0,"button",21),s.yc(19,M,1,0,"button",22),s.Qb(),s.Qb()),2&t){const t=e.$implicit;s.zb(2),s.Cc(" ",t.id," "),s.zb(2),s.Cc(" ",s.cc(5,8,t.menu.nome)," "),s.zb(3),s.Cc(" ",s.cc(8,10,t.nome)," "),s.zb(3),s.Cc(" ",s.cc(11,12,t.icon)," "),s.zb(3),s.Cc(" ",s.cc(14,14,t.url)," "),s.zb(3),s.gc("ngIf","ATIVO"==t.ativo),s.zb(2),s.gc("ngIf","ATIVO"==t.ativo),s.zb(1),s.gc("ngIf","INATIVO"==t.ativo)}}function S(t,e){if(1&t&&(s.Rb(0,"tbody"),s.yc(1,F,20,16,"tr",12),s.Qb()),2&t){const t=s.ac();s.zb(1),s.gc("ngForOf",t.resources.content)}}const T=function(){return{"background-color":"var(--surface-e)",border:"1px solid var(--surface-e)"}},B=function(){return[5,10,20,30,50,100]};function N(t,e){if(1&t){const t=s.Sb();s.Rb(0,"p-paginator",26),s.Yb("onPageChange",(function(e){return s.rc(t),s.ac().paginate(e)})),s.Qb()}if(2&t){const t=s.ac();s.wc(s.ic(5,T)),s.gc("rows",t.filterForm.value.size)("totalRecords",t.resources?t.resources.totalElements:0)("rowsPerPageOptions",s.ic(6,B))}}function E(t,e){1&t&&(s.Rb(0,"div"),s.Ac(1,"Nehum registro encontrado"),s.Qb())}const _=function(){return{width:"50vw"}},q=[{path:"",component:(()=>{class t extends P.a{constructor(t,e){super(t,e),this.service=t,this.injector=e}ativarOuInativar(t,e){this.openConfirmDialog(`Confirma ${e?"ativar":"inativar"} esse registro?`,()=>{this.tratarUpdateRegistro(e?this.service.ativar(t):this.service.delete(t))},()=>{})}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(d),s.Lb(s.s))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-item-menu-list"]],features:[s.wb],decls:26,vars:7,consts:[["header","Listagem de Itens de Menu"],[1,"form-row"],[1,"form-group","col-md-12"],["align","right"],["pButton","","pRipple","","type","button","routerLink","/pages/itemmenu/new","label","Novo","icon","pi pi-plus"],["id","no-more-tables",2,"word-wrap","break-word"],[1,"table-responsive"],[1,"table","table-hover"],[1,"table-bootstrap-head"],[4,"ngIf"],[3,"rows","style","totalRecords","rowsPerPageOptions","onPageChange",4,"ngIf"],[3,"baseZIndex"],["class","table-bootstrap-body",4,"ngFor","ngForOf"],[1,"table-bootstrap-body"],["data-title","C\xf3digo"],["data-title","Menu"],["data-title","Nome"],["data-title","\xcdcone"],["data-title","Url"],["data-title","A\xe7\xe3o"],["title","Editar","pButton","","pRipple","","type","button","icon","fa fa-edit","class","p-button-rounded",3,"routerLink",4,"ngIf"],["title","Inativar","pButton","","pRipple","","type","button","icon","pi pi-times","class","p-button-rounded p-button-danger",3,"click",4,"ngIf"],["title","Ativar","pButton","","pRipple","","type","button","icon","pi pi-check","class","p-button-rounded p-button-success",3,"click",4,"ngIf"],["title","Editar","pButton","","pRipple","","type","button","icon","fa fa-edit",1,"p-button-rounded",3,"routerLink"],["title","Inativar","pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-danger",3,"click"],["title","Ativar","pButton","","pRipple","","type","button","icon","pi pi-check",1,"p-button-rounded","p-button-success",3,"click"],[3,"rows","totalRecords","rowsPerPageOptions","onPageChange"]],template:function(t,e){1&t&&(s.Rb(0,"p-card",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"div",3),s.Mb(4,"button",4),s.Qb(),s.Qb(),s.Qb(),s.Rb(5,"section",5),s.Rb(6,"div",6),s.Rb(7,"table",7),s.Rb(8,"thead"),s.Rb(9,"tr",8),s.Rb(10,"th"),s.Ac(11,"C\xf3digo"),s.Qb(),s.Rb(12,"th"),s.Ac(13,"Menu"),s.Qb(),s.Rb(14,"th"),s.Ac(15,"Nome"),s.Qb(),s.Rb(16,"th"),s.Ac(17,"\xcdcone"),s.Qb(),s.Rb(18,"th"),s.Ac(19,"Url"),s.Qb(),s.Rb(20,"th"),s.Ac(21,"A\xe7\xf5es"),s.Qb(),s.Qb(),s.Qb(),s.yc(22,S,2,1,"tbody",9),s.Qb(),s.yc(23,N,1,7,"p-paginator",10),s.yc(24,E,2,0,"div",9),s.Qb(),s.Qb(),s.Qb(),s.Mb(25,"p-confirmDialog",11)),2&t&&(s.zb(22),s.gc("ngIf",e.resources),s.zb(1),s.gc("ngIf",e.resources&&0!=e.resources.totalElements&&e.filterForm.value.size<=e.resources.totalElements),s.zb(1),s.gc("ngIf",!e.resources||0==e.resources.totalElements),s.zb(1),s.wc(s.ic(6,_)),s.gc("baseZIndex",1e4))},directives:[g.a,h.b,r.c,Q.l,x.a,Q.k,z.a],pipes:[k.a],styles:[""]}),t})(),canActivate:[i.a],data:{roles:[n.a.ROLE_ROOT]}},{path:"new",component:A,canActivate:[i.a],data:{roles:[n.a.ROLE_ROOT]}},{path:"edit/:id",component:A,canActivate:[i.a],data:{roles:[n.a.ROLE_ROOT]}}];let J=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[r.f.forChild(q)],r.f]}),t})();var V=o("PCNd");let $=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[V.a,J,y.b]]}),t})()}}]);