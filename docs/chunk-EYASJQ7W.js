import{c as H,e as F,g as N,h as U,i as D,j as Q,k as j}from"./chunk-WQISBP22.js";import{U as I}from"./chunk-AWGQYCOF.js";import{h as T,i as E}from"./chunk-SYOHXA4C.js";import"./chunk-AESYL7IM.js";import{Ab as l,Bc as V,Eb as w,Gb as u,Lb as M,Mb as O,Nb as y,Pb as m,Sb as x,Tb as b,Ub as k,Va as f,Wa as S,Wb as C,Yb as P,ga as g,gb as v,ob as _,qa as c,ra as p,yb as n,zb as r}from"./chunk-UBDTWJD6.js";var W=["searchInput"],q=a=>({width:a}),A=(()=>{let i=class i{constructor(t,o){this.router=t,this.HandleUserSearchService=o,this.menuOpen=v(!0),this.searchOption="id"}ngOnInit(){}handleSideMenu(){this.menuOpen.update(t=>!t)}addAnimation(){let t=document.querySelector(".menuSwitch");t?.classList.add("pulse"),this.timeOut=setTimeout(()=>{t?.classList.remove("pulse")},1300)}back(){window.history.back()}searchType(t){this.searchInput.nativeElement.value="",this.HandleUserSearchService.searchValue.next(""),this.HandleUserSearchService.searchType.next(t.target.value)}searchValue(t){clearTimeout(this.timerOutforSearchValue),this.timerOutforSearchValue=setTimeout(()=>{this.HandleUserSearchService.searchValue.next(t.target.value),this.HandleUserSearchService.searchType.next(this.searchOption)},200)}ngOnDestroy(){clearTimeout(this.timeOut)}};i.\u0275fac=function(o){return new(o||i)(S(E),S(j))},i.\u0275cmp=g({type:i,selectors:[["app-side-menu"]],viewQuery:function(o,e){if(o&1&&M(W,5),o&2){let s;O(s=y())&&(e.searchInput=s.first)}},standalone:!0,features:[C],decls:28,vars:6,consts:[["searchInput",""],[1,"sideMenu"],[1,"mainContainer",3,"ngStyle"],[1,"text-center","mt-5","text-white",2,"cursor","pointer",3,"click"],[2,"white-space","nowrap"],[1,"fa-solid","fa-arrow-left"],[1,"mt-5"],[1,"px-2","text-white","text-uppercase"],[1,"px-2","inputContainer"],[1,"form-control",3,"keyup","type","placeholder"],["name","","id","",1,"selectOption",3,"change","ngModelChange","ngModel"],["value","id"],["value","name"],["value","email"],[1,"sideHeader","shadow-lg"],[1,"headerImg"],["src","https://cdn-icons-png.freepik.com/256/1077/1077114.png","alt",""],[1,"menuSwitch",3,"click"],[1,"fa-solid","fa-bars","fa-2x",2,"cursor","pointer"],[1,"fa-solid","fa-globe","d-block","mb-2",2,"cursor","pointer"],[1,"fa-solid","fa-share-nodes","d-block",2,"cursor","pointer"]],template:function(o,e){if(o&1){let s=w();n(0,"div",1)(1,"div",2)(2,"div",3),u("click",function(){return c(s),p(e.back())}),n(3,"h5",4),l(4,"i",5),m(5," Back"),r()(),n(6,"div",6)(7,"div",7)(8,"p",4),m(9,"user Search :"),r()(),n(10,"div",8)(11,"input",9,0),u("keyup",function(d){return c(s),p(e.searchValue(d))}),r(),n(13,"select",10),u("change",function(d){return c(s),p(e.searchType(d))}),k("ngModelChange",function(d){return c(s),b(e.searchOption,d)||(e.searchOption=d),p(d)}),n(14,"option",11),m(15,"id"),r(),n(16,"option",12),m(17,"name"),r(),n(18,"option",13),m(19,"email"),r()()()()(),n(20,"div",14)(21,"div",15),l(22,"img",16),r(),n(23,"div",17),u("click",function(){return c(s),e.handleSideMenu(),p(e.addAnimation())}),l(24,"i",18),r(),n(25,"div"),l(26,"i",19)(27,"i",20),r()()()}o&2&&(f(),_("ngStyle",P(4,q,e.menuOpen()?"190px":"0")),f(10),_("type",e.searchOption=="id"?"number":"text")("placeholder",e.searchOption=="id"?"Id":e.searchOption=="name"?"FirstName":e.searchOption=="email"?"email":""),f(2),x("ngModel",e.searchOption))},dependencies:[V,Q,U,D,N,H,F],styles:[".sideMenu[_ngcontent-%COMP%]{background-color:#000;height:100vh;position:sticky;top:0;display:flex}.mainContainer[_ngcontent-%COMP%]{width:190px;height:100%;transition:.5s;overflow-x:hidden}.sideHeader[_ngcontent-%COMP%]{width:60px;height:100%;padding:1.5em 0;display:flex;background-color:#fff;justify-content:space-between;align-items:center;flex-direction:column}.headerImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}.menuSwitch[_ngcontent-%COMP%]{width:28px;height:28px;border-radius:50%}.pulse[_ngcontent-%COMP%]{background-color:#0001;animation:_ngcontent-%COMP%_pulse-animation 2s infinite}@keyframes _ngcontent-%COMP%_pulse-animation{0%{transform:scale(.8);box-shadow:0 0 #3498dbb3}50%{transform:scale(1.2);box-shadow:0 0 0 10px #3498db00}to{transform:scale(.8);box-shadow:0 0 #3498db00}}.inputContainer[_ngcontent-%COMP%]{position:relative;overflow:hidden}.inputContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-inline-end:73px}.inputContainer[_ngcontent-%COMP%]   .selectOption[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:8px;height:100%;border-end-end-radius:4px;border-start-end-radius:5px;border-inline-start:2px solid black;padding-inline-start:5px}.inputContainer[_ngcontent-%COMP%]   .selectOption[_ngcontent-%COMP%]:focus{outline:none}"]});let a=i;return a})();var te=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=g({type:i,selectors:[["app-blank-layout"]],standalone:!0,features:[C],decls:6,vars:0,consts:[[1,"layout"],[1,"firstContainer"],[1,"secondContainer"],[1,"container"]],template:function(o,e){o&1&&(n(0,"div",0)(1,"div",1),l(2,"app-side-menu"),r(),n(3,"div",2)(4,"div",3),l(5,"router-outlet"),r()()())},dependencies:[A,I,T],styles:[".layout[_ngcontent-%COMP%]{display:flex;position:relative}.secondContainer[_ngcontent-%COMP%]{width:100%}.firstContainer[_ngcontent-%COMP%]{width:fit-content}@media (max-width: 700px){.firstContainer[_ngcontent-%COMP%]{position:fixed;z-index:999999999}}@media (max-width: 500px){.secondContainer[_ngcontent-%COMP%]{padding-inline-start:50px}}"]});let a=i;return a})();export{te as BlankLayoutComponent};
