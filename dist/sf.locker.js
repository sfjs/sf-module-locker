!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require(void 0)):"function"==typeof define&&define.amd?define("sf-locker",[],t):"object"==typeof exports?exports["sf-locker"]=t(require("sf-core")):e["sf-locker"]=t(e[void 0])}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(t,r){t.exports=e},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r.n(o),s=r(2);n.a.registerInstanceType(s.a),e.exports=s.a}).call(t,r(3)(e))},function(e,t,r){"use strict";var o=r(0),n=r.n(o);r.d(t,"a",function(){return s});var s=function(e,t,r){this._construct(e,t,r)};s.prototype=n.a.createModulePrototype(),s.prototype.name="lock",s.prototype._construct=function(e,t,r){this.init(e,t,r),this.add(this.options.type,this.node)},s.prototype.add=function(e,t){if(!this.types.hasOwnProperty(e))return!1;var r=document.createElement("div");return r.className=this.types[e].className||"js-sf-lock",r.innerHTML=this.types[e].html,t.appendChild(r),t.classList.add("locked"),this.types[e].progress},s.prototype.die=function(){this.remove()},s.prototype.remove=function(){this.node.classList.remove("locked");var e=this.node.querySelector(".js-sf-lock");return e&&this.node.removeChild(e),!0},s.prototype.types={spinner:{html:'<div class="sf-spinner"></div>'},progress:{html:'<div class="sf-progress"><div class="progress-line"></div></div>',progress:function(e,t){this.context.getElementsByClassName("progress-line")[0].style.width=e/t*100+"%"}}},s.prototype.types.default=s.prototype.types.spinner},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,r){e.exports=r(1)}])});
//# sourceMappingURL=sf.locker.js.map