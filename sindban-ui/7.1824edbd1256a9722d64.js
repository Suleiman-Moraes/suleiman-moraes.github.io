(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/XD6":function(o,r,a){"use strict";a.r(r),a.d(r,"AgenciaModule",(function(){return Y}));var t=a("tyNb"),i=a("SD5G"),e=a("ylx5"),n=a("fXoL"),b=a("xDRI"),l=a("ofXK"),u=a("xuCY"),m=a("3Pt+"),c=a("evnt"),d=a("BGwN"),p=a("R5y+"),f=a("dIwc");let s=(()=>{class o extends u.a{constructor(o,r){super(o,r),this.injector=o,this.service=r,this.id=0,this.action=new n.o}get possuiId(){return this.resource&&this.resource.id&&this.resource.id>0}ngOnInit(){this.id=this.id?this.id:0,super.ngOnInit()}ngOnChanges(o){o.id&&(this.id=o.id.currentValue,this.ngOnInit())}clear(){this.initForm(),this.resource=null,this.id=0,this.currentAction="new",this.setPageTitle(),this.action.emit("clear")}initForm(){this.formulario=this.formBuilder.group({id:[null],checked:[null],logradouro:[null],texto:[null],radio:[null],radio2:[null],radio3:[null],combo:[null]})}setCurrentAction(){this.currentAction=this.id>0?"edit":"new","edit"!=this.currentAction&&this.route.snapshot.url.length>0&&(this.currentAction="new"==this.route.snapshot.url[0].path?"new":"edit")}posSubmitFormSucesso(){this.showSuccess("new"==this.currentAction?"Ag\xeancia inclu\xedda com sucesso!":"Ag\xeancia atualizada com sucesso!")}createPageTitle(){return"Incluir Ag\xeancia"}editionPageTitle(){return"Editar Ag\xeancia"}}return o.\u0275fac=function(r){return new(r||o)(n.Lb(n.s),n.Lb(b.a))},o.\u0275cmp=n.Fb({type:o,selectors:[["app-agencia-form"]],inputs:{id:"id"},outputs:{action:"action"},features:[n.wb,n.xb],decls:114,vars:30,consts:[[1,"card"],[1,"card-body"],[1,"form-row"],[1,"form-group","col-md-9"],[3,"formGroup"],[1,"form-group","col-md-3"],["for-name","texto","nome","Cod. Banco",3,"formulario"],[1,"form-group","col-md-4"],["for-name","texto","nome","Banco",3,"formulario"],[1,"form-group","col-md-5"],["for-name","texto","nome","Compl. Banco",3,"formulario"],["for-name","texto","nome","Cod. Ag\xeancia",3,"formulario"],["for-name","texto","nome","Ag\xeancia",3,"formulario"],["for-name","texto","nome","CNPJ",3,"formulario"],[1,"form-group","col-md-7"],["for-name","texto","nome","Rota",3,"formulario"],["for-name","texto","nome","Ordem Rota",3,"formulario"],[1,"form-group","col-md-8"],["for-name","texto","nome","Logradouro",3,"formulario"],["for-name","texto","nome","Bairro",3,"formulario"],["for-name","texto","nome","Cidade",3,"formulario"],["for-name","texto","nome","UF",3,"formulario"],["for-name","texto","nome","CEP",3,"formulario"],["for-name","texto","nome","Fone 01",3,"formulario"],["for-name","texto","nome","Fone 02",3,"formulario"],["for-name","texto","nome","Fone 03",3,"formulario"],[1,"form-group","col-md-6"],["for-name","texto","nome","Fax 01",3,"formulario"],["for-name","texto","nome","Fax 02",3,"formulario"],["for-name","texto","nome","E-mail",3,"formulario"],[1,"titleLabel","font-padrao"],[1,"row"],[1,"col-md-6"],[1,"p-field-radiobutton"],["name","radio","value","Todos","formControlName","radio","inputId","todos"],["for","todos",1,"titleLabel","font-padrao","mt-2"],["name","radio","value","Sim","formControlName","radio","inputId","sim"],["for","sim",1,"titleLabel","font-padrao","mt-2"],["name","radio","value","N\xe3o","formControlName","radio","inputId","nao"],["for","nao",1,"titleLabel","font-padrao","mt-2"],["name","radio","value","Vinc. Departamento","formControlName","radio","inputId","vincdepartamento"],["for","vincdepartamento",1,"titleLabel","font-padrao","mt-2"],[1,"col-md-12"],[1,"p-field-checkbox",2,"float","right"],["binary","true","inputId","binary",3,"formControl"],["for","binary",1,"titleLabel","font-padrao","mt-2"],["for-name","texto","nome","Dt. Imp. BACEN",3,"formulario"],["for-name","texto","nome","Dt. In\xedcio BACEN",3,"formulario"],["for-name","texto","nome","Cod. Comp. BACEN",3,"formulario"],["for-name","texto","nome","Dig. Verif. C\xf3d. Comp.",3,"formulario"],["for-name","texto","nome","N\xba Funcion\xe1rios",3,"formulario"],["for-name","texto","nome","N\xba Associados",3,"formulario"],["for-name","texto","nome","Base Territorial",3,"formulario"],["for-name","texto","nome","Ut. Atualiza\xe7\xe3o",3,"formulario"],[1,"card-footer"],["align","left"],["type","button","title","Novo",1,"btn","btn-info",3,"click"],[1,"fa","fa-paint-brush"],["align","right"],["type","button","title","Salvar",1,"btn","btn-success"],[1,"fa","fa-save"]],template:function(o,r){1&o&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"div",2),n.Rb(3,"div",3),n.Rb(4,"h6"),n.Rb(5,"strong"),n.Bc(6),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(7,"form",4),n.Rb(8,"div",2),n.Rb(9,"div",5),n.Mb(10,"app-input-padrao",6),n.Qb(),n.Rb(11,"div",7),n.Mb(12,"app-input-padrao",8),n.Qb(),n.Rb(13,"div",9),n.Mb(14,"app-input-padrao",10),n.Qb(),n.Qb(),n.Rb(15,"div",2),n.Rb(16,"div",5),n.Mb(17,"app-input-padrao",11),n.Qb(),n.Rb(18,"div",9),n.Mb(19,"app-input-padrao",12),n.Qb(),n.Rb(20,"div",7),n.Mb(21,"app-input-padrao",13),n.Qb(),n.Qb(),n.Rb(22,"div",2),n.Rb(23,"div",14),n.Mb(24,"app-input-padrao",15),n.Qb(),n.Rb(25,"div",9),n.Mb(26,"app-input-padrao",16),n.Qb(),n.Qb(),n.Rb(27,"div",2),n.Rb(28,"div",17),n.Mb(29,"app-input-padrao",18),n.Qb(),n.Rb(30,"div",7),n.Mb(31,"app-input-padrao",19),n.Qb(),n.Qb(),n.Rb(32,"div",2),n.Rb(33,"div",9),n.Mb(34,"app-input-padrao",20),n.Qb(),n.Rb(35,"div",5),n.Mb(36,"app-input-padrao",21),n.Qb(),n.Rb(37,"div",7),n.Mb(38,"app-input-padrao",22),n.Qb(),n.Qb(),n.Rb(39,"div",2),n.Rb(40,"div",7),n.Mb(41,"app-input-padrao",23),n.Qb(),n.Rb(42,"div",7),n.Mb(43,"app-input-padrao",24),n.Qb(),n.Rb(44,"div",7),n.Mb(45,"app-input-padrao",25),n.Qb(),n.Qb(),n.Rb(46,"div",2),n.Rb(47,"div",26),n.Mb(48,"app-input-padrao",27),n.Qb(),n.Rb(49,"div",26),n.Mb(50,"app-input-padrao",28),n.Qb(),n.Qb(),n.Rb(51,"div",2),n.Rb(52,"div",26),n.Mb(53,"app-input-padrao",29),n.Qb(),n.Rb(54,"div",26),n.Rb(55,"label",30),n.Rb(56,"strong"),n.Bc(57,"Tipo de Ag\xeancia"),n.Qb(),n.Qb(),n.Rb(58,"div",31),n.Rb(59,"div",32),n.Rb(60,"div",33),n.Mb(61,"p-radioButton",34),n.Rb(62,"label",35),n.Bc(63,"Principal"),n.Qb(),n.Qb(),n.Qb(),n.Rb(64,"div",32),n.Rb(65,"div",33),n.Mb(66,"p-radioButton",36),n.Rb(67,"label",37),n.Bc(68,"Departamento"),n.Qb(),n.Qb(),n.Qb(),n.Rb(69,"div",32),n.Rb(70,"div",33),n.Mb(71,"p-radioButton",38),n.Rb(72,"label",39),n.Bc(73,"Vinc. a Principal"),n.Qb(),n.Qb(),n.Qb(),n.Rb(74,"div",32),n.Rb(75,"div",33),n.Mb(76,"p-radioButton",40),n.Rb(77,"label",41),n.Bc(78,"Vinc. Departamento"),n.Qb(),n.Qb(),n.Qb(),n.Rb(79,"div",42),n.Rb(80,"div",43),n.Mb(81,"p-checkbox",44),n.Rb(82,"label",45),n.Bc(83,"Fechada"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(84,"div",2),n.Rb(85,"div",5),n.Mb(86,"app-input-date-padrao",46),n.Qb(),n.Rb(87,"div",5),n.Mb(88,"app-input-date-padrao",47),n.Qb(),n.Rb(89,"div",5),n.Mb(90,"app-input-padrao",48),n.Qb(),n.Rb(91,"div",5),n.Mb(92,"app-input-padrao",49),n.Qb(),n.Qb(),n.Rb(93,"div",2),n.Rb(94,"div",5),n.Mb(95,"app-input-padrao",50),n.Qb(),n.Rb(96,"div",5),n.Mb(97,"app-input-padrao",51),n.Qb(),n.Rb(98,"div",5),n.Mb(99,"app-input-padrao",52),n.Qb(),n.Rb(100,"div",5),n.Mb(101,"app-input-date-padrao",53),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(102,"div",54),n.Rb(103,"div",2),n.Rb(104,"div",26),n.Rb(105,"div",55),n.Rb(106,"button",56),n.Yb("click",(function(){return r.clear()})),n.Bc(107,"Limpar "),n.Mb(108,"i",57),n.Qb(),n.Qb(),n.Qb(),n.Rb(109,"div",26),n.Rb(110,"div",58),n.Rb(111,"button",59),n.Bc(112,"Salvar "),n.Mb(113,"i",60),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&o&&(n.zb(6),n.Cc(r.pageTitle),n.zb(1),n.gc("formGroup",r.formulario),n.zb(3),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(3),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(3),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(3),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(3),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(3),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(3),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(3),n.gc("formulario",r.formulario),n.zb(28),n.gc("formControl",r.formulario.controls.checked),n.zb(5),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(3),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario),n.zb(2),n.gc("formulario",r.formulario))},directives:[m.s,m.n,m.h,c.a,d.a,m.m,m.f,p.a,m.e,f.a],styles:[""]}),o})();var g=a("arS9"),v=a("3u2U"),R=a("3JaC"),Q=a("+6/u"),h=a("L0Yd"),x=a("1SSY");const z=function(){return{width:"100%"}};let M=(()=>{class o{constructor(){this.disabled=!1,this.change=new n.o,this.itens=new Array}ngOnInit(){this.montarItens()}ngOnChanges(o){o.options?(this.options=o.options.currentValue,this.montarItens()):o.disabled&&(this.disabled=o.disabled.currentValue)}selectionChange(o){this.change.emit(o)}montarItens(){this.itens=[],this.options.forEach(o=>{this.itens.push({label:o[this.text],value:o[this.value]})})}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=n.Fb({type:o,selectors:[["app-combo"]],inputs:{forName:["for-name","forName"],nome:"nome",text:"text",value:"value",options:"options",formulario:"formulario",disabled:"disabled"},outputs:{change:"change"},features:[n.xb],decls:2,vars:10,consts:[[3,"formGroup"],["filter","true","emptyFilterMessage","Nenhum registro encontrado",3,"options","placeholder","showClear","id","formControlName","disabled","onChange"]],template:function(o,r){1&o&&(n.Rb(0,"form",0),n.Rb(1,"p-dropdown",1),n.Yb("onChange",(function(o){return r.selectionChange(o)})),n.Qb(),n.Qb()),2&o&&(n.gc("formGroup",r.formulario),n.zb(1),n.xc(n.ic(9,z)),n.gc("options",r.itens)("placeholder",r.nome)("showClear",!0)("id",r.forName)("formControlName",r.forName)("disabled",r.disabled))},directives:[m.s,m.n,m.h,x.a,m.m,m.f],styles:[""]}),o})();var C=a("dlay"),F=a("A1Yd"),B=a("tQ6G"),w=a("sJnu");function y(o,r){if(1&o&&(n.Rb(0,"form",28),n.Rb(1,"div",2),n.Rb(2,"div",19),n.Mb(3,"app-combo-box-padrao",29),n.Qb(),n.Rb(4,"div",19),n.Mb(5,"app-combo-box-padrao",30),n.Qb(),n.Qb(),n.Rb(6,"div",2),n.Rb(7,"div",31),n.Mb(8,"app-combo-box-padrao",32),n.Qb(),n.Qb(),n.Rb(9,"div",2),n.Rb(10,"div",31),n.Mb(11,"app-combo-com-check",33),n.Qb(),n.Qb(),n.Rb(12,"div",2),n.Rb(13,"div",34),n.Mb(14,"app-input-padrao",35),n.Qb(),n.Rb(15,"div",34),n.Mb(16,"app-input-padrao",36),n.Qb(),n.Rb(17,"div",34),n.Mb(18,"app-input-padrao",37),n.Qb(),n.Qb(),n.Rb(19,"div",2),n.Rb(20,"div",19),n.Mb(21,"app-input-padrao",38),n.Qb(),n.Rb(22,"div",19),n.Mb(23,"app-input-padrao",39),n.Qb(),n.Qb(),n.Rb(24,"div",2),n.Rb(25,"div",40),n.Mb(26,"app-input-com-check",41),n.Qb(),n.Rb(27,"div",42),n.Mb(28,"app-combo-box-padrao",43),n.Qb(),n.Rb(29,"div",34),n.Mb(30,"app-input-padrao",44),n.Qb(),n.Qb(),n.Rb(31,"div",2),n.Rb(32,"div",34),n.Mb(33,"app-input-padrao",45),n.Qb(),n.Rb(34,"div",34),n.Mb(35,"app-input-padrao",46),n.Qb(),n.Rb(36,"div",34),n.Mb(37,"app-input-padrao",47),n.Qb(),n.Qb(),n.Rb(38,"div",2),n.Rb(39,"div",42),n.Mb(40,"app-input-padrao",48),n.Qb(),n.Rb(41,"div",42),n.Mb(42,"app-combo-box-padrao",49),n.Qb(),n.Rb(43,"div",42),n.Mb(44,"app-combo-box-padrao",50),n.Qb(),n.Rb(45,"div",42),n.Mb(46,"app-combo-box-padrao",51),n.Qb(),n.Qb(),n.Rb(47,"div",2),n.Rb(48,"div",52),n.Rb(49,"label",53),n.Rb(50,"strong"),n.Bc(51,"N\xfamero de Funcion\xe1rios"),n.Qb(),n.Qb(),n.Rb(52,"div",54),n.Rb(53,"div",3),n.Mb(54,"app-combo",55),n.Qb(),n.Rb(55,"div",3),n.Mb(56,"input",56),n.Qb(),n.Qb(),n.Mb(57,"app-form-field-error",57),n.Qb(),n.Rb(58,"div",52),n.Rb(59,"label",53),n.Rb(60,"strong"),n.Bc(61,"N\xfamero de Associados"),n.Qb(),n.Qb(),n.Rb(62,"div",54),n.Rb(63,"div",3),n.Mb(64,"app-combo",55),n.Qb(),n.Rb(65,"div",3),n.Mb(66,"input",56),n.Qb(),n.Qb(),n.Mb(67,"app-form-field-error",57),n.Qb(),n.Qb(),n.Qb()),2&o){const o=n.ac();n.gc("formGroup",o.filterForm),n.zb(3),n.gc("formulario",o.filterForm)("options",o.sexoEnumOptions),n.zb(2),n.gc("formulario",o.filterForm)("options",o.sexoEnumOptions),n.zb(3),n.gc("formulario",o.filterForm)("options",o.sexoEnumOptions),n.zb(3),n.gc("formulario",o.filterForm)("options",o.sexoEnumOptions),n.zb(3),n.gc("formulario",o.filterForm),n.zb(2),n.gc("formulario",o.filterForm),n.zb(2),n.gc("formulario",o.filterForm),n.zb(3),n.gc("formulario",o.filterForm),n.zb(2),n.gc("formulario",o.filterForm),n.zb(3),n.gc("formulario",o.filterForm),n.zb(2),n.gc("formulario",o.filterForm)("options",o.sexoEnumOptions),n.zb(2),n.gc("formulario",o.filterForm),n.zb(3),n.gc("formulario",o.filterForm),n.zb(2),n.gc("formulario",o.filterForm),n.zb(2),n.gc("formulario",o.filterForm),n.zb(3),n.gc("formulario",o.filterForm),n.zb(2),n.gc("formulario",o.filterForm)("options",o.sexoEnumOptions),n.zb(2),n.gc("formulario",o.filterForm)("options",o.sexoEnumOptions),n.zb(2),n.gc("formulario",o.filterForm)("options",o.sexoEnumOptions),n.zb(8),n.gc("formulario",o.filterForm)("options",o.sexoEnumOptions),n.zb(3),n.gc("formulario",o.filterForm.get("texto")),n.zb(7),n.gc("formulario",o.filterForm)("options",o.sexoEnumOptions),n.zb(3),n.gc("formulario",o.filterForm.get("texto"))}}function A(o,r){if(1&o){const o=n.Sb();n.Rb(0,"button",61),n.Yb("click",(function(){n.sc(o);const r=n.ac().$implicit;return n.ac().deleteById(r.id)})),n.Qb()}}function I(o,r){if(1&o){const o=n.Sb();n.Rb(0,"tr",58),n.Rb(1,"td"),n.Bc(2),n.bc(3,"getValueOrTrace"),n.Qb(),n.Rb(4,"td"),n.Bc(5),n.bc(6,"getValueOrTrace"),n.Qb(),n.Rb(7,"td"),n.Rb(8,"button",59),n.Yb("click",(function(){n.sc(o);const a=r.$implicit;return n.ac().id=a.id})),n.Qb(),n.Bc(9," \xa0 "),n.zc(10,A,1,0,"button",60),n.Qb(),n.Qb()}if(2&o){const o=r.$implicit,a=n.ac();n.zb(2),n.Cc(n.cc(3,4,o.id)),n.zb(3),n.Cc(n.cc(6,6,o.nome)),n.zb(3),n.gc("disabled",a.id==o.id),n.zb(2),n.gc("ngIf",a.id!=o.id)}}const N=function(){return{"background-color":"white",border:"1px solid white"}},P=function(){return[5,10,20,30,50,100]};function k(o,r){if(1&o){const o=n.Sb();n.Rb(0,"p-paginator",62),n.Yb("onPageChange",(function(r){return n.sc(o),n.ac().paginate(r)})),n.Qb()}if(2&o){const o=n.ac();n.xc(n.ic(5,N)),n.gc("rows",o.filterForm.value.size)("totalRecords",o.resources?o.resources.totalElements:0)("rowsPerPageOptions",n.ic(6,P))}}function E(o,r){1&o&&(n.Rb(0,"div"),n.Bc(1,"Nehum registro encontrado"),n.Qb())}const O=function(){return[]},L=function(){return{width:"300px"}},D=[{path:"",component:(()=>{class o extends e.a{constructor(o,r){super(o,r),this.service=o,this.injector=r}onAction(o){"clear"==o&&(this.id=null)}buildForm(){this.filterForm=this.formBuilder.group({page:[this.page],size:[this.size],checked:[null],logradouro:[null],texto:[null],radio:[null],radio2:[null],radio3:[null],combo:[null]})}alterarTable(o){$("#"+o).tab("show")}}return o.\u0275fac=function(r){return new(r||o)(n.Lb(b.a),n.Lb(n.s))},o.\u0275cmp=n.Fb({type:o,selectors:[["app-agencia-list"]],features:[n.wb],decls:49,vars:10,consts:[[1,"card"],[1,"card-body"],[1,"form-row"],[1,"col-md-6"],[1,"nav","nav-tabs"],[1,"nav-item"],["id","camposParaConsulta-tab","data-toggle","tab","href","#camposParaConsulta","role","tab","aria-controls","camposParaConsulta","aria-selected","true",1,"nav-link","active"],["id","resultadoDaConsulta-tab","data-toggle","tab","href","#resultadoDaConsulta","role","tab","aria-controls","resultadoDaConsulta","aria-selected","false",1,"nav-link"],["id","myTabContent",1,"tab-content"],["id","camposParaConsulta","role","tabpanel","aria-labelledby","camposParaConsulta-tab",1,"tab-pane","fade","show","active"],[3,"formGroup",4,"ngIf"],["id","resultadoDaConsulta","role","tabpanel","aria-labelledby","resultadoDaConsulta-tab",1,"tab-pane","fade"],[1,"table-responsive"],[1,"table","table-hover"],[1,"table-bootstrap-head"],["scope","col"],["class","table-bootstrap-body",4,"ngFor","ngForOf"],[3,"rows","style","totalRecords","rowsPerPageOptions","onPageChange",4,"ngIf"],[4,"ngIf"],[1,"form-group","col-md-6"],["align","left"],["type","button","title","Limpar",1,"btn","btn-info",3,"click"],[1,"fa","fa-paint-brush"],["align","right"],["type","button","title","Pequisar",1,"btn","btn-success",3,"click"],[1,"fa","fa-search"],[3,"id","action"],[3,"baseZIndex"],[3,"formGroup"],["for-name","combo","nome","Banco","text","text","value","value",3,"formulario","options"],["for-name","combo","nome","Ag\xeancia","text","text","value","value",3,"formulario","options"],[1,"form-group","col-md-12"],["for-name","combo","nome","Rota","text","text","value","value",3,"formulario","options"],["for-name","combo","nome","Cidades Ag\xeancia Rota","for-name-check","checked","text","text","value","value",3,"formulario","options"],[1,"form-group","col-md-4"],["for-name","texto","nome","Banco",3,"formulario"],["for-name","texto","nome","Cod. Ag\xeancia",3,"formulario"],["for-name","texto","nome","Ag\xeancia",3,"formulario"],["for-name","texto","nome","Logradouro",3,"formulario"],["for-name","texto","nome","Bairro",3,"formulario"],[1,"form-group","col-md-5"],["for-name","texto","nome","Cidade Ag\xeancia","for-name-check","checked",3,"formulario"],[1,"form-group","col-md-3"],["for-name","combo","nome","UF","text","text","value","value",3,"formulario","options"],["for-name","texto","nome","CEP",3,"formulario"],["for-name","texto","nome","Fone",3,"formulario"],["for-name","texto","nome","Fax",3,"formulario"],["for-name","texto","nome","E-Mail",3,"formulario"],["for-name","texto","nome","CNPJ",3,"formulario"],["for-name","combo","nome","Ag. Fechada","text","text","value","value",3,"formulario","options"],["for-name","combo","nome","Ag. Principal","text","text","value","value",3,"formulario","options"],["for-name","combo","nome","Base Territorial","text","text","value","value",3,"formulario","options"],[1,"form-group","col-md-6",2,"border-width","1px","border-style","solid","border-radius","10px"],[1,"titleLabel","font-padrao"],[1,"row"],["for-name","combo","nome","Selecione","text","text","value","value",3,"formulario","options"],["type","text","id","texto","formControlName","texto",1,"form-control",2,"font-family","Euclid Circular B"],[3,"formulario"],[1,"table-bootstrap-body"],["title","Editar / Ver","pButton","","pRipple","","type","button","icon","fa fa-edit",1,"p-button-rounded","p-button-warning",3,"disabled","click"],["title","Apagar","pButton","","pRipple","","type","button","icon","fa fa-trash","class","p-button-rounded p-button-danger",3,"click",4,"ngIf"],["title","Apagar","pButton","","pRipple","","type","button","icon","fa fa-trash",1,"p-button-rounded","p-button-danger",3,"click"],[3,"rows","totalRecords","rowsPerPageOptions","onPageChange"]],template:function(o,r){1&o&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"div",2),n.Rb(3,"div",3),n.Rb(4,"h5"),n.Rb(5,"strong"),n.Bc(6,"Ag\xeancias"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(7,"div",2),n.Rb(8,"div",3),n.Rb(9,"ul",4),n.Rb(10,"li",5),n.Rb(11,"a",6),n.Bc(12,"Campos para Consulta"),n.Qb(),n.Qb(),n.Rb(13,"li",5),n.Rb(14,"a",7),n.Bc(15,"Resultado da Consulta"),n.Qb(),n.Qb(),n.Qb(),n.Rb(16,"div",8),n.Rb(17,"div",9),n.zc(18,y,68,34,"form",10),n.Qb(),n.Rb(19,"div",11),n.Rb(20,"div",12),n.Rb(21,"table",13),n.Rb(22,"thead"),n.Rb(23,"tr",14),n.Rb(24,"th",15),n.Bc(25,"Id"),n.Qb(),n.Rb(26,"th",15),n.Bc(27,"Nome"),n.Qb(),n.Rb(28,"th",15),n.Bc(29,"A\xe7\xe3o"),n.Qb(),n.Qb(),n.Qb(),n.Rb(30,"tbody"),n.zc(31,I,11,8,"tr",16),n.Qb(),n.Qb(),n.zc(32,k,1,7,"p-paginator",17),n.zc(33,E,2,0,"div",18),n.Qb(),n.Qb(),n.Qb(),n.Rb(34,"div",2),n.Rb(35,"div",19),n.Rb(36,"div",20),n.Rb(37,"button",21),n.Yb("click",(function(){return r.buildForm()})),n.Bc(38," Limpar "),n.Mb(39,"i",22),n.Qb(),n.Qb(),n.Qb(),n.Rb(40,"div",19),n.Rb(41,"div",23),n.Rb(42,"button",24),n.Yb("click",(function(){return r.paginate(),r.alterarTable("resultadoDaConsulta-tab")})),n.Bc(43," Pequisar "),n.Mb(44,"i",25),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(45,"div",3),n.Rb(46,"app-agencia-form",26),n.Yb("action",(function(o){return r.onAction(o)})),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Mb(47,"p-toast"),n.Mb(48,"p-confirmDialog",27)),2&o&&(n.zb(18),n.gc("ngIf",r.filterForm),n.zb(13),n.gc("ngForOf",r.resources?r.resources.content:n.ic(8,O)),n.zb(1),n.gc("ngIf",r.resources&&0!=r.resources.totalElements&&r.filterForm.value.size<=r.resources.totalElements),n.zb(1),n.gc("ngIf",!r.resources||0==r.resources.totalElements),n.zb(13),n.gc("id",r.id),n.zb(2),n.xc(n.ic(9,L)),n.gc("baseZIndex",1e4))},directives:[l.j,l.i,s,g.a,v.a,m.s,m.n,m.h,R.a,Q.a,c.a,h.a,M,m.b,m.m,m.f,C.a,F.a,B.a],pipes:[w.a],styles:[""]}),o})(),canActivate:[i.a]}];let S=(()=>{class o{}return o.\u0275mod=n.Jb({type:o}),o.\u0275inj=n.Ib({factory:function(r){return new(r||o)},imports:[[t.c.forChild(D)],t.c]}),o})();var T=a("PCNd");let Y=(()=>{class o{}return o.\u0275mod=n.Jb({type:o}),o.\u0275inj=n.Ib({factory:function(r){return new(r||o)},imports:[[T.a,S]]}),o})()}}]);