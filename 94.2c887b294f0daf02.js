"use strict";(self.webpackChunkAngularApp=self.webpackChunkAngularApp||[]).push([[94],{3094:(x,d,l)=>{l.r(d),l.d(d,{AuthModule:()=>_});var r=l(3075),u=l(3257),m=l(4466),t=l(5e3);let g=(()=>{class n{constructor(){this.close=new t.vpe}onClose(){this.close.emit()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return o.onClose()}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"button",3),t.NdJ("click",function(){return o.onClose()}),t._uU(6,"Close"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Oqu(o.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:white;box-shadow:0 2px 8px #00000042}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),n})(),p=(()=>{class n{constructor(e){this.viewContainerRef=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b))},n.\u0275dir=t.lG2({type:n,selectors:[["","appPlaceholder",""]]}),n})();var c=l(4256),h=l(5620),f=l(9808);let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-loading-spinner"]],decls:4,vars:0,consts:[[1,"lds-facebook"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div"),t._UZ(2,"div"),t._UZ(3,"div"),t.qZA())},styles:[".lds-facebook[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:inline-block;position:absolute;left:8px;width:16px;background:rgb(3,16,73);animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){left:8px;animation-delay:-.24s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:32px;animation-delay:-.12s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:56px;animation-delay:0}@keyframes lds-facebook{0%{top:8px;height:64px}50%,to{top:24px;height:32px}}"]}),n})();function v(n,i){}function C(n,i){1&n&&(t.TgZ(0,"div",6),t._UZ(1,"app-loading-spinner"),t.qZA())}function A(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",7,8),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.MAs(1);return t.oxw().onSubmit(s)}),t.TgZ(2,"div",9),t.TgZ(3,"div"),t.TgZ(4,"div",10),t.TgZ(5,"label",11),t._uU(6,"E-Mail"),t.qZA(),t._UZ(7,"input",12),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",13),t.TgZ(9,"div"),t.TgZ(10,"div",10),t.TgZ(11,"label",14),t._uU(12,"Password"),t.qZA(),t._UZ(13,"input",15),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",16),t.TgZ(15,"button",17),t._uU(16),t.qZA(),t._uU(17," | "),t.TgZ(18,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSwitchMode()}),t._uU(19),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.MAs(1),o=t.oxw();t.xp6(15),t.Q6J("disabled",!e.valid),t.xp6(1),t.hij(" ",o.isLoginMode?"Login":"Sign Up",""),t.xp6(3),t.hij("Switch to ",o.isLoginMode?"Sign Up":"Login","")}}let Z=(()=>{class n{constructor(e,o){this.componentFactoryResolver=e,this.store=o,this.isLoginMode=!0,this.isLoading=!1,this.error=null}ngOnInit(){this.storeSub=this.store.select("auth").subscribe(e=>{this.isLoading=e.loading,this.error=e.authError,this.error&&this.showErrorAlert(this.error)})}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(e){if(!e.valid)return;const o=e.value.email,s=e.value.password;this.store.dispatch(this.isLoginMode?new c.IR({email:o,password:s}):new c.mm({email:o,password:s})),e.reset()}handleError(){this.store.dispatch(new c.PH)}showErrorAlert(e){const o=this.componentFactoryResolver.resolveComponentFactory(g),s=this.alertHost.viewContainerRef;s.clear();const a=s.createComponent(o);a.instance.message=e,this.closeSub=a.instance.close.subscribe(()=>{this.closeSub.unsubscribe(),s.clear()})}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe(),this.storeSub&&this.storeSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t._Vd),t.Y36(h.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],viewQuery:function(e,o){if(1&e&&t.Gf(p,5),2&e){let s;t.iGM(s=t.CRH())&&(o.alertHost=s.first)}},decls:6,vars:2,consts:[["appPlaceholder",""],[1,"container"],[1,"row"],[1,"col-md-12","col-xs-12","col-md-offset-3","center","align-items-center"],["style","text-align: center;",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"row","mt-2"],[1,"form-group"],["for","email"],["type","email","id","email","placeholder","Enter your email","ngModel","","name","email","required","","email","",1,"form-control"],[1,"row","mt-4"],["for","password"],["type","password","id","password","placeholder","Enter your password","ngModel","","name","password","required","","minlength","6",1,"form-control"],[1,"mt-4"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.YNc(0,v,0,0,"ng-template",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.YNc(4,C,2,0,"div",4),t.YNc(5,A,20,3,"form",5),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("ngIf",!o.isLoading))},directives:[p,f.O5,b,r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,r.Q7,r.on,r.wO],styles:["label[_ngcontent-%COMP%]{font-size:17px;font-weight:500}.center[_ngcontent-%COMP%]{display:block;width:70%;margin:0 auto;padding-top:50px}input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),n})(),_=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.u5,m.m,u.Bz.forChild([{path:"",component:Z}])]]}),n})()}}]);