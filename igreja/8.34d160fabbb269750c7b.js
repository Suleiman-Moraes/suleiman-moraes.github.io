(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{B9Yq:function(n,l){n.exports=function(){throw new Error("define cannot be used indirect")}},QHUG:function(n,l,o){"use strict";o.r(l);var e=o("CcnG"),t=function(){return function(){}}(),u=o("pMnS"),i=o("20Yz"),r=o("gIcY"),a=o("jdFL"),s=function(){function n(n,l){this.login=n,this.password=l}return n.fromJson=function(l){return Object.assign(new n,l)},n}(),d=o("P6uZ"),c=o("hUol"),m=o.n(c),p=function(){function n(n,l,o,e){this.formBuilder=n,this.router=l,this.authenticationService=o,this.titleService=e,this.descricaoModal="",this.user=new s,this.imaskConfig={mask:[{mask:"a**************************************************"},{mask:"000.000.000-00"},{mask:"00.000.00000/00"},{mask:"00.000.000/0000-00"}]},this.titleService.setTitle("Login")}return n.prototype.ngOnInit=function(){this.buildResourceForm(),this.authenticationService.currentUserValue&&(this.authenticationService.logout(),location.reload())},n.prototype.onSubmit=function(){var n=this;this.loginForm.invalid||(this.returnUrl="pages",this.authenticationService.login(this.loginForm.value).pipe(Object(d.a)()).subscribe(function(l){n.router.navigate([n.returnUrl])},function(l){n.actionsForError('Usu\xe1rio e/ou senha inv\xe1lidos.<br>Tente novamente. Caso tenha esquecido a senha, clique em "<a href="#cadastrounico/recuperarsenha" title="Recuperar senha">Esqueceu sua senha?</a>" para redefini-la.')}))},n.prototype.getModalLarge=function(){return this.descricaoModal.length>200},n.prototype.actionsForError=function(n){m.a.error(n,{debug:!1,positionClass:"toast-top-right",onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"})},n.prototype.buildResourceForm=function(){this.loginForm=this.formBuilder.group({login:[null,[r.Validators.required,r.Validators.maxLength(255)]],password:[null,[r.Validators.required,r.Validators.maxLength(255)]]})},n}(),g=o("ZYCi"),f=o("ZYjt"),v=e["\u0275crt"]({encapsulation:0,styles:[["form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#7fffd4}"]],data:{}});function h(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,40,"form",[["class","was-validated"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,o){var t=!0,u=n.component;return"submit"===l&&(t=!1!==e["\u0275nov"](n,2).onSubmit(o)&&t),"reset"===l&&(t=!1!==e["\u0275nov"](n,2).onReset()&&t),"submit"===l&&(t=!1!==u.onSubmit()&&t),t},null,null)),e["\u0275did"](1,16384,null,0,r["\u0275angular_packages_forms_forms_bh"],[],null,null),e["\u0275did"](2,540672,null,0,r.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),e["\u0275prd"](2048,null,r.ControlContainer,null,[r.FormGroupDirective]),e["\u0275did"](4,16384,null,0,r.NgControlStatusGroup,[[4,r.ControlContainer]],null,null),(n()(),e["\u0275eld"](5,0,null,null,35,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,0,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,32,"div",[["class","form-group col-md-6"]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,null,31,"div",[["class","card"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,2,"h4",[["class","card-header"]],null,null,null,null,null)),(n()(),e["\u0275eld"](10,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Login"])),(n()(),e["\u0275eld"](12,0,null,null,27,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,26,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](14,0,null,null,10,"div",[["class","form-group col-md-12"]],null,null,null,null,null)),(n()(),e["\u0275eld"](15,0,null,null,1,"label",[["for","login"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Login"])),(n()(),e["\u0275eld"](17,0,null,null,7,"input",[["class","form-control"],["formControlName","login"],["id","login"],["placeholder","Login"],["required",""],["title","Login"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0;return"input"===l&&(t=!1!==e["\u0275nov"](n,18)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==e["\u0275nov"](n,18).onTouched()&&t),"compositionstart"===l&&(t=!1!==e["\u0275nov"](n,18)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e["\u0275nov"](n,18)._compositionEnd(o.target.value)&&t),t},null,null)),e["\u0275did"](18,16384,null,0,r.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275did"](19,16384,null,0,r.RequiredValidator,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,r.NG_VALIDATORS,function(n){return[n]},[r.RequiredValidator]),e["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),e["\u0275did"](22,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[6,r.NG_VALIDATORS],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),e["\u0275did"](24,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(n()(),e["\u0275eld"](25,0,null,null,10,"div",[["class","form-group col-md-12"]],null,null,null,null,null)),(n()(),e["\u0275eld"](26,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Senha"])),(n()(),e["\u0275eld"](28,0,null,null,7,"input",[["class","form-control"],["formControlName","password"],["id","password"],["placeholder","Senha"],["required",""],["title","Senha"],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0;return"input"===l&&(t=!1!==e["\u0275nov"](n,29)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==e["\u0275nov"](n,29).onTouched()&&t),"compositionstart"===l&&(t=!1!==e["\u0275nov"](n,29)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e["\u0275nov"](n,29)._compositionEnd(o.target.value)&&t),t},null,null)),e["\u0275did"](29,16384,null,0,r.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275did"](30,16384,null,0,r.RequiredValidator,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,r.NG_VALIDATORS,function(n){return[n]},[r.RequiredValidator]),e["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),e["\u0275did"](33,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[6,r.NG_VALIDATORS],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),e["\u0275did"](35,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(n()(),e["\u0275eld"](36,0,null,null,3,"div",[["align","right"],["class","form-group col-md-12"]],null,null,null,null,null)),(n()(),e["\u0275eld"](37,0,null,null,2,"button",[["class","btn btn-secondary"],["title","Entrar"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),e["\u0275eld"](38,0,null,null,0,"i",[["class","pi pi-sign-in"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Entrar"])),(n()(),e["\u0275eld"](40,0,null,null,0,"div",[["class","form-group col-md-3"]],null,null,null,null,null))],function(n,l){n(l,2,0,l.component.loginForm),n(l,19,0,""),n(l,22,0,"login"),n(l,30,0,""),n(l,33,0,"password")},function(n,l){var o=l.component;n(l,0,0,e["\u0275nov"](l,4).ngClassUntouched,e["\u0275nov"](l,4).ngClassTouched,e["\u0275nov"](l,4).ngClassPristine,e["\u0275nov"](l,4).ngClassDirty,e["\u0275nov"](l,4).ngClassValid,e["\u0275nov"](l,4).ngClassInvalid,e["\u0275nov"](l,4).ngClassPending),n(l,17,0,e["\u0275nov"](l,19).required?"":null,e["\u0275nov"](l,24).ngClassUntouched,e["\u0275nov"](l,24).ngClassTouched,e["\u0275nov"](l,24).ngClassPristine,e["\u0275nov"](l,24).ngClassDirty,e["\u0275nov"](l,24).ngClassValid,e["\u0275nov"](l,24).ngClassInvalid,e["\u0275nov"](l,24).ngClassPending),n(l,28,0,e["\u0275nov"](l,30).required?"":null,e["\u0275nov"](l,35).ngClassUntouched,e["\u0275nov"](l,35).ngClassTouched,e["\u0275nov"](l,35).ngClassPristine,e["\u0275nov"](l,35).ngClassDirty,e["\u0275nov"](l,35).ngClassValid,e["\u0275nov"](l,35).ngClassInvalid,e["\u0275nov"](l,35).ngClassPending),n(l,37,0,o.loginForm.invalid)})}function C(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,h,v)),e["\u0275did"](1,114688,null,0,p,[r.FormBuilder,g.Router,a.a,f.i],null,null)],function(n,l){n(l,1,0)},null)}var M=e["\u0275ccf"]("app-login",p,C,{},{},[]),b=o("Ip0R"),_=o("mEXF"),w=o("oygf"),O=o("sy7D"),S=o("VSng"),D=o("7LN8"),T=o("KB/w"),E=o("atAv"),k=o("3GNW"),F=o("G5kV"),R=o("2bbZ"),y=o("66nc"),N=o("Itiq"),V=o("T+K8"),I=o("Fzqc"),B=o("dWZg"),L=o("qAlS"),A=o("nciF"),q=o("mU/a"),P=o("No4M"),x=o("Qe1B"),H=o("WCEg"),U=o("K1wh"),G=o("lMDG"),j=o("1A4Q"),Y=o("Z+Mw"),Z=o("g4HV"),z=o("pODc"),Q=o("rmC/"),J=o("mz28"),K=o("HQi4"),W=o("PCNd"),X=function(){return function(){}}();o.d(l,"SecurityModuleNgFactory",function(){return $});var $=e["\u0275cmf"](t,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,i.a,M]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[e.LOCALE_ID,[2,b["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,r.FormBuilder,r.FormBuilder,[]),e["\u0275mpd"](4608,r["\u0275angular_packages_forms_forms_j"],r["\u0275angular_packages_forms_forms_j"],[]),e["\u0275mpd"](4608,_.b,_.b,[]),e["\u0275mpd"](4608,w.ConfirmationService,w.ConfirmationService,[]),e["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),e["\u0275mpd"](1073742336,r["\u0275angular_packages_forms_forms_bc"],r["\u0275angular_packages_forms_forms_bc"],[]),e["\u0275mpd"](1073742336,r.ReactiveFormsModule,r.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,g.RouterModule,g.RouterModule,[[2,g["\u0275angular_packages_router_router_a"]],[2,g.Router]]),e["\u0275mpd"](1073742336,O.RadioButtonModule,O.RadioButtonModule,[]),e["\u0275mpd"](1073742336,S.ButtonModule,S.ButtonModule,[]),e["\u0275mpd"](1073742336,D.SharedModule,D.SharedModule,[]),e["\u0275mpd"](1073742336,T.CalendarModule,T.CalendarModule,[]),e["\u0275mpd"](1073742336,E.a,E.a,[]),e["\u0275mpd"](1073742336,k.ConfirmDialogModule,k.ConfirmDialogModule,[]),e["\u0275mpd"](1073742336,_.a,_.a,[]),e["\u0275mpd"](1073742336,F.ToastModule,F.ToastModule,[]),e["\u0275mpd"](1073742336,R.DynamicDialogModule,R.DynamicDialogModule,[]),e["\u0275mpd"](1073742336,y.DialogModule,y.DialogModule,[]),e["\u0275mpd"](1073742336,N.AccordionModule,N.AccordionModule,[]),e["\u0275mpd"](1073742336,V.CheckboxModule,V.CheckboxModule,[]),e["\u0275mpd"](1073742336,I.a,I.a,[]),e["\u0275mpd"](1073742336,B.b,B.b,[]),e["\u0275mpd"](1073742336,L.ScrollingModule,L.ScrollingModule,[]),e["\u0275mpd"](1073742336,A.DropdownModule,A.DropdownModule,[]),e["\u0275mpd"](1073742336,r.FormsModule,r.FormsModule,[]),e["\u0275mpd"](1073742336,q.PaginatorModule,q.PaginatorModule,[]),e["\u0275mpd"](1073742336,P.MultiSelectModule,P.MultiSelectModule,[]),e["\u0275mpd"](1073742336,x.SplitButtonModule,x.SplitButtonModule,[]),e["\u0275mpd"](1073742336,H.ToggleButtonModule,H.ToggleButtonModule,[]),e["\u0275mpd"](1073742336,U.PickListModule,U.PickListModule,[]),e["\u0275mpd"](1073742336,G.EditorModule,G.EditorModule,[]),e["\u0275mpd"](1073742336,j.a,j.a,[]),e["\u0275mpd"](1073742336,Y.b,Y.b,[]),e["\u0275mpd"](1073742336,Z.TooltipModule,Z.TooltipModule,[]),e["\u0275mpd"](1073742336,z.TabViewModule,z.TabViewModule,[]),e["\u0275mpd"](1073742336,Q.ListboxModule,Q.ListboxModule,[]),e["\u0275mpd"](1073742336,J.ScrollPanelModule,J.ScrollPanelModule,[]),e["\u0275mpd"](1073742336,K.OverlayPanelModule,K.OverlayPanelModule,[]),e["\u0275mpd"](1073742336,W.a,W.a,[]),e["\u0275mpd"](1073742336,X,X,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](256,Y.a,{modules:Y.c},[]),e["\u0275mpd"](1024,g.ROUTES,function(){return[[{path:"",component:p},{path:":token/logar/:destino",component:p}]]},[])])})},hUol:function(n,l,o){var e,t;o("B9Yq"),e=[o("EVdn")],void 0===(t=(function(n){return function(){var l,o,e,t=0,u={clear:function(o,e){var t=d();l||i(t),r(o,t,e)||function(o){for(var e=l.children(),t=e.length-1;t>=0;t--)r(n(e[t]),o)}(t)},remove:function(o){var e=d();l||i(e),o&&0===n(":focus",o).length?c(o):l.children().length&&l.remove()},error:function(n,l,o){return s({type:"error",iconClass:d().iconClasses.error,message:n,optionsOverride:o,title:l})},getContainer:i,info:function(n,l,o){return s({type:"info",iconClass:d().iconClasses.info,message:n,optionsOverride:o,title:l})},options:{},subscribe:function(n){o=n},success:function(n,l,o){return s({type:"success",iconClass:d().iconClasses.success,message:n,optionsOverride:o,title:l})},version:"2.1.4",warning:function(n,l,o){return s({type:"warning",iconClass:d().iconClasses.warning,message:n,optionsOverride:o,title:l})}};return u;function i(o,e){return o||(o=d()),(l=n("#"+o.containerId)).length?l:(e&&(l=function(o){return(l=n("<div/>").attr("id",o.containerId).addClass(o.positionClass)).appendTo(n(o.target)),l}(o)),l)}function r(l,o,e){return!(!l||!(e&&e.force&&e.force||0===n(":focus",l).length)||(l[o.hideMethod]({duration:o.hideDuration,easing:o.hideEasing,complete:function(){c(l)}}),0))}function a(n){o&&o(n)}function s(o){var u=d(),r=o.iconClass||u.iconClass;if(void 0!==o.optionsOverride&&(u=n.extend(u,o.optionsOverride),r=o.optionsOverride.iconClass||r),!function(n,l){if(n.preventDuplicates){if(l.message===e)return!0;e=l.message}return!1}(u,o)){t++,l=i(u,!0);var s=null,m=n("<div/>"),p=n("<div/>"),g=n("<div/>"),f=n("<div/>"),v=n(u.closeHtml),h={intervalId:null,hideEta:null,maxHideTime:null},C={toastId:t,state:"visible",startTime:new Date,options:u,map:o};return o.iconClass&&m.addClass(u.toastClass).addClass(r),function(){if(o.title){var n=o.title;u.escapeHtml&&(n=M(o.title)),p.append(n).addClass(u.titleClass),m.append(p)}}(),function(){if(o.message){var n=o.message;u.escapeHtml&&(n=M(o.message)),g.append(n).addClass(u.messageClass),m.append(g)}}(),u.closeButton&&(v.addClass(u.closeClass).attr("role","button"),m.prepend(v)),u.progressBar&&(f.addClass(u.progressClass),m.prepend(f)),u.rtl&&m.addClass("rtl"),u.newestOnTop?l.prepend(m):l.append(m),function(){var n="";switch(o.iconClass){case"toast-success":case"toast-info":n="polite";break;default:n="assertive"}m.attr("aria-live",n)}(),m.hide(),m[u.showMethod]({duration:u.showDuration,easing:u.showEasing,complete:u.onShown}),u.timeOut>0&&(s=setTimeout(b,u.timeOut),h.maxHideTime=parseFloat(u.timeOut),h.hideEta=(new Date).getTime()+h.maxHideTime,u.progressBar&&(h.intervalId=setInterval(function(){var n=(h.hideEta-(new Date).getTime())/h.maxHideTime*100;f.width(n+"%")},10))),u.closeOnHover&&m.hover(function(){clearTimeout(s),h.hideEta=0,m.stop(!0,!0)[u.showMethod]({duration:u.showDuration,easing:u.showEasing})},function(){(u.timeOut>0||u.extendedTimeOut>0)&&(s=setTimeout(b,u.extendedTimeOut),h.maxHideTime=parseFloat(u.extendedTimeOut),h.hideEta=(new Date).getTime()+h.maxHideTime)}),!u.onclick&&u.tapToDismiss&&m.click(b),u.closeButton&&v&&v.click(function(n){n.stopPropagation?n.stopPropagation():void 0!==n.cancelBubble&&!0!==n.cancelBubble&&(n.cancelBubble=!0),u.onCloseClick&&u.onCloseClick(n),b(!0)}),u.onclick&&m.click(function(n){u.onclick(n),b()}),a(C),u.debug&&console&&console.log(C),m}function M(n){return null==n&&(n=""),n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function b(l){var o=l&&!1!==u.closeMethod?u.closeMethod:u.hideMethod,e=l&&!1!==u.closeDuration?u.closeDuration:u.hideDuration,t=l&&!1!==u.closeEasing?u.closeEasing:u.hideEasing;if(!n(":focus",m).length||l)return clearTimeout(h.intervalId),m[o]({duration:e,easing:t,complete:function(){c(m),clearTimeout(s),u.onHidden&&"hidden"!==C.state&&u.onHidden(),C.state="hidden",C.endTime=new Date,a(C)}})}}function d(){return n.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1},u.options)}function c(n){l||(l=i()),n.is(":visible")||(n.remove(),n=null,0===l.children().length&&(l.remove(),e=void 0))}}()}).apply(l,e))||(n.exports=t)}}]);