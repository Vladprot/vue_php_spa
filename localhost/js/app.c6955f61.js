(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0743":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"test"},[t.showModal?o("div",[o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"formGroupExampleInput"}},[t._v("Example label")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ticket["name"],expression:"ticket['name']"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"Example input"},domProps:{value:t.ticket["name"]},on:{input:function(e){e.target.composing||t.$set(t.ticket,"name",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"formGroupExampleInput2"}},[t._v("Another label")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ticket["email"],expression:"ticket['email']"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput2",placeholder:"Another input"},domProps:{value:t.ticket["email"]},on:{input:function(e){e.target.composing||t.$set(t.ticket,"email",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("Example textarea")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ticket["textTicket"],expression:"ticket['textTicket']"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"},domProps:{value:t.ticket["textTicket"]},on:{input:function(e){e.target.composing||t.$set(t.ticket,"textTicket",e.target.value)}}})])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"modal-default-button",on:{click:t.clickAxiosPost}},[t._v(" Создать задачу ")]),o("button",{staticClass:"modal-default-button",on:{click:function(e){t.showModal=!1}}},[t._v(" Отмена ")])])])])])])],1):t._e(),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.clickAxiosGet}},[t._v("Проверка GET запроса")]),o("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.clickAxiosPost}},[t._v("Проверка POST запроса")]),o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.register}},[t._v("Создать задачу")]),o("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("Регистрация")]),o("hr"),t.showModal?o("div",[t._v(" 1 ")]):t._e(),t._v(" "+t._s(t.ticket["name"])+" "+t._s(t.ticket["email"])+" "+t._s(t.ticket["textTicket"])+" "),t._l(t.posts,(function(e){return o("div",{key:e.id},[t._v(" "+t._s(e.name)+" "+t._s(e.textTicket)+" "),o("hr")])}))],2)])},r=[],i=o("bc3a"),s=o.n(i),c={data:function(){return{showModal:!1,ticket:{name:null,email:null,textTicket:null},posts:{},resDataAxios:{}}},methods:{register:function(){this.showModal=!0},clickAxiosGet:function(){var t=this;s.a.get("http://localhost/index.php").then((function(e){return t.posts=e.data})).catch((function(t){alert(t)}))},clickAxiosPost:function(){var t=this;this.showModal=!1,s.a.post("http://localhost/index.php",this.ticket).then((function(e){return t.resDataAxios=e.data})).catch((function(t){alert(t)}))}},mounted:function(){var t=this;s.a.get("http://localhost/index.php").then((function(e){return t.posts=e.data})).catch((function(t){alert(t)}))}},l=c,u=(o("5fb7"),o("2877")),p=Object(u["a"])(l,a,r,!1,null,"4f7f9cbc",null),d=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(d)}}).$mount("#app")},"5fb7":function(t,e,o){"use strict";var n=o("0743"),a=o.n(n);a.a}});
//# sourceMappingURL=app.c6955f61.js.map