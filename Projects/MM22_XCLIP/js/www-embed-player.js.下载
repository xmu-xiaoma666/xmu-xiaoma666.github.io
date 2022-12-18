(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=da(this);function n(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ja(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||la});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}qa=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=qa;
function u(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
function wa(){this.v=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.o=0;this.s=this.j=null}
function xa(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
wa.prototype.M=function(a){this.i=a};
function ya(a,b){a.j={Yb:b,fc:!0};a.h=a.o||a.m}
wa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function v(a,b,c){a.h=c;return{value:b}}
wa.prototype.u=function(a){this.h=a};
function za(a,b,c){a.o=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.o=0}
function Ba(a){a.o=0;var b=a.j.Yb;a.j=null;return b}
function Ca(a){a.s=[a.j];a.o=0;a.m=0}
function Da(a){var b=a.s.splice(0)[0];(b=a.j=a.j||b)?b.fc?a.h=a.o||a.m:void 0!=b.u&&a.m<b.u?(a.h=b.u,a.j=null):a.h=a.m:a.h=0}
function Ea(a){this.h=new wa;this.i=a}
function Fa(a,b){xa(a.h);var c=a.h.l;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.l=null,ya(a.h,g),Ha(a)}a.h.l=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.fc)throw b.Yb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l.next,b,a.h.M):(a.h.M(b),b=Ha(a));return b};
this.throw=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l["throw"],b,a.h.M):(ya(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ea(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return pa});
n("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.m)}};
b.prototype.K=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.P(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.o(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.T(h,g):this.o(g)};
b.prototype.m=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.O();this.s()};
b.prototype.O=function(){var g=this;e(function(){if(g.F()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.s=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.P=function(g){var h=this.l();g.eb(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(w,t){return"function"==typeof w?function(z){try{m(w(z))}catch(D){q(D)}}:t}
var m,q,r=new b(function(w,t){m=w;q=t});
this.eb(k(g,m),k(h,q));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.eb=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).eb(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function r(z){return function(D){w[z]=D;t--;0==t&&m(w)}}
var w=[],t=0;do w.push(void 0),t++,d(k.value).eb(r(w.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ka(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return ha(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ka(h.data_,m))for(h=0;h<q.length;h++){var r=q[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:m,list:q,index:h,entry:r}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
n("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
function Na(a){return a?a:Array.prototype.fill}
n("Int8Array.prototype.fill",Na);n("Uint8Array.prototype.fill",Na);n("Uint8ClampedArray.prototype.fill",Na);n("Int16Array.prototype.fill",Na);n("Uint16Array.prototype.fill",Na);n("Int32Array.prototype.fill",Na);n("Uint32Array.prototype.fill",Na);n("Float32Array.prototype.fill",Na);n("Float64Array.prototype.fill",Na);n("Object.setPrototypeOf",function(a){return a||va});
n("Set",function(a){function b(c){this.h=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||fa});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Oa=Oa||{},y=this||self;function A(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){a.zb=void 0;a.getInstance=function(){return a.zb?a.zb:a.zb=new a}}
function Qa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ra(a){var b=Qa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ta(a){return Object.prototype.hasOwnProperty.call(a,Va)&&a[Va]||(a[Va]=++Wa)}
var Va="closure_uid_"+(1E9*Math.random()>>>0),Wa=0;function Xa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ya(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Za=Xa:Za=Ya;return Za.apply(null,arguments)}
function $a(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function ab(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.xr=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function bb(a){return a}
;function cb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,cb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
ab(cb,Error);cb.prototype.name="CustomError";function db(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function eb(){}
function fb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var gb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},hb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ib=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},jb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},kb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
hb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function lb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function mb(a,b){b=gb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function nb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ob(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function pb(a){var b=rb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function sb(a){for(var b in a)return!1;return!0}
function tb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ub(a){return null!==a&&"privembed"in a?a.privembed:!1}
function vb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function wb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function xb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=xb(a[c]);return b}
var yb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<yb.length;f++)c=yb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ab;function Bb(){if(void 0===Ab){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:bb,createScript:bb,createScriptURL:bb})}catch(c){y.console&&y.console.error(c.message)}Ab=a}else Ab=a}return Ab}
;function Cb(a,b){this.j=a===Db&&b||""}
Cb.prototype.i=!0;Cb.prototype.h=function(){return this.j};
function Eb(a){return new Cb(Db,a)}
var Db={};Eb("");var Fb={};function Gb(a,b){this.j=b===Fb?a:"";this.i=!0}
Gb.prototype.toString=function(){return this.j.toString()};
Gb.prototype.h=function(){return this.j.toString()};function Hb(a,b){this.j=b===Kb?a:""}
Hb.prototype.toString=function(){return this.j+""};
Hb.prototype.i=!0;Hb.prototype.h=function(){return this.j.toString()};
function Lb(a){if(a instanceof Hb&&a.constructor===Hb)return a.j;Qa(a);return"type_error:TrustedResourceUrl"}
var Kb={};function Mb(a){var b=Bb();a=b?b.createScriptURL(a):a;return new Hb(a,Kb)}
;var Nb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ob(a,b){return a<b?-1:a>b?1:0}
;function Pb(a,b){this.j=b===Qb?a:""}
Pb.prototype.toString=function(){return this.j.toString()};
Pb.prototype.i=!0;Pb.prototype.h=function(){return this.j.toString()};
function Rb(a){if(a instanceof Pb&&a.constructor===Pb)return a.j;Qa(a);return"type_error:SafeUrl"}
var Sb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Qb={},Tb=new Pb("about:invalid#zClosurez",Qb);function Ub(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Ub().indexOf(a)}
;function Vb(){return C("Trident")||C("MSIE")}
function Wb(){return C("Firefox")||C("FxiOS")}
function Xb(){return C("Safari")&&!(Yb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Wb()||C("Silk")||C("Android"))}
function Yb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Zb(){return C("Android")&&!(Yb()||Wb()||C("Opera")||C("Silk"))}
function bc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function cc(a){var b=Ub();if("Internet Explorer"===a){if(Vb())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=bc(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Yb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Wb()||"Safari"===a&&Xb()||"Android Browser"===a&&Zb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function dc(a){a=cc(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var ec={};function fc(a){this.j=ec===ec?a:"";this.i=!0}
fc.prototype.h=function(){return this.j.toString()};
fc.prototype.toString=function(){return this.j.toString()};function gc(a,b){b instanceof Pb||b instanceof Pb||(b="object"==typeof b&&b.i?b.h():String(b),Sb.test(b)||(b="about:invalid#zClosurez"),b=new Pb(b,Qb));a.href=Rb(b)}
function hc(a,b){a.rel="stylesheet";a.href=Lb(b).toString();(b=ic('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function jc(){return ic("script[nonce]")}
var kc=/^[\w+/_-]+[=]{0,2}$/;function ic(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&kc.test(a)?a:"":""}
;function lc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var mc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nc(a){return a?decodeURI(a):a}
function oc(a,b){return b.match(mc)[a]||null}
function pc(a){return nc(oc(3,a))}
function qc(a){var b=a.match(mc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function rc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function sc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)sc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function tc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)sc(a[b],a[b+1],c);return c.join("&")}
function uc(a){var b=[],c;for(c in a)sc(c,a[c],b);return b.join("&")}
function vc(a,b){var c=2==arguments.length?tc(arguments[1],0):tc(arguments,1);return rc(a,c)}
function wc(a,b){b=uc(b);return rc(a,b)}
function xc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return rc(a,b+c)}
function yc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var zc=/#|$/,Dc=/[?&]($|#)/;function Ec(a,b){for(var c=a.search(zc),d=0,e,f=[];0<=(e=yc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Dc,"$1")}
;function Fc(a){y.setTimeout(function(){throw a;},0)}
;function Gc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Hc(){var a=Ub(),b="";C("Windows")?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Gc()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):-1!=Ub().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
b=(a=b.exec(a))&&a[1]);a=0;b=Nb(String(b||"")).split(".");for(var c=Nb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Ob(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Ob(0==f[2].length,0==g[2].length)||Ob(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Ic(a){Ic[" "](a);return a}
Ic[" "]=function(){};var Jc=C("Opera"),Kc=Vb(),Lc=C("Edge"),Mc=C("Gecko")&&!(-1!=Ub().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Nc=-1!=Ub().toLowerCase().indexOf("webkit")&&!C("Edge"),Oc=C("Android");function Pc(){var a=y.document;return a?a.documentMode:void 0}
var Qc;a:{var Rc="",Sc=function(){var a=Ub();if(Mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Lc)return/Edge\/([\d\.]+)/.exec(a);if(Kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nc)return/WebKit\/(\S+)/.exec(a);if(Jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sc&&(Rc=Sc?Sc[1]:"");if(Kc){var Tc=Pc();if(null!=Tc&&Tc>parseFloat(Rc)){Qc=String(Tc);break a}}Qc=Rc}var Uc=Qc,Vc;if(y.document&&Kc){var Wc=Pc();Vc=Wc?Wc:parseInt(Uc,10)||void 0}else Vc=void 0;var Xc=Vc;var Yc=Gc()||C("iPod"),Zc=C("iPad");Zb();Yb();var $c=Xb()&&!(Gc()||C("iPad")||C("iPod"));var ad={},bd=null;function cd(a,b){Ra(a);void 0===b&&(b=0);dd();b=ad[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+m+g+h+k}m=0;k=d;switch(a.length-e){case 2:m=a[e+1],k=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+k+d}return c.join("")}
function ed(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;fd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function fd(a,b){function c(k){for(;d<a.length;){var m=a.charAt(d++),q=bd[m];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return k}
dd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function dd(){if(!bd){bd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ad[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===bd[f]&&(bd[f]=e)}}}}
;var gd="undefined"!==typeof Uint8Array;function hd(a){return gd&&null!=a&&a instanceof Uint8Array}
var id={};var jd;function kd(a){if(a!==id)throw Error("illegal external caller");}
function ld(a,b){kd(b);this.ba=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
function md(){return jd||(jd=new ld(null,id))}
ld.prototype.Na=function(){return null==this.ba};
ld.prototype.sizeBytes=function(){kd(id);var a=this.ba;null==a||hd(a)||("string"===typeof a?a=ed(a):(Qa(a),a=null));return(a=null==a?a:this.ba=a)?a.length:0};var nd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function od(a,b){if(nd)return a[nd]|=b;if(void 0!==a.fa)return a.fa|=b;Object.defineProperties(a,{fa:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function pd(a,b){var c=qd(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),rd(a,c|b));return a}
function sd(a,b){nd?a[nd]&&(a[nd]&=~b):void 0!==a.fa&&(a.fa&=~b)}
function qd(a){var b;nd?b=a[nd]:b=a.fa;return null==b?0:b}
function rd(a,b){nd?a[nd]=b:void 0!==a.fa?a.fa=b:Object.defineProperties(a,{fa:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function td(a){od(a,1);return a}
function yd(a){return!!(qd(a)&2)}
function zd(a){od(a,16);return a}
function Ad(a,b){rd(b,(a|0)&-51)}
function Bd(a,b){rd(b,(a|18)&-41)}
;var Cd={};function Dd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Ed,Fd,Gd=[];rd(Gd,23);Fd=Object.freeze(Gd);function Hd(a){if(yd(a.B))throw Error("Cannot mutate an immutable Message");}
function Id(a){var b=a.length;(b=b?a[b-1]:void 0)&&Dd(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;var Jd;function Kd(a){return a.displayName||a.name||"unknown type name"}
function Ld(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Kd(b)+" but got "+(a&&Kd(a.constructor)));return a}
;function Md(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(qd(a)&128))return a=Array.prototype.slice.call(a),Id(a),a}else{if(hd(a))return cd(a);if(a instanceof ld){var b=a.ba;return null==b?"":"string"===typeof b?b:a.ba=cd(b)}}}return a}
;function Nd(a,b,c,d){if(null!=a){if(Array.isArray(a))a=Od(a,b,c,void 0!==d);else if(Dd(a)){var e={},f;for(f in a)e[f]=Nd(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function Od(a,b,c,d){var e=qd(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=Nd(a[f],b,c,d);c(e,a);return a}
function Pd(a){return a.jb===Cd?a.toJSON():Md(a)}
function Qd(a){if(!a)return a;if("object"===typeof a){if(hd(a))return new Uint8Array(a);if(a.jb===Cd)return a.clone()}return a}
function Rd(a,b){a&128&&Id(b)}
;function Sd(a){var b=a.j+a.va;return a.X||(a.X=a.B[b]={})}
function Td(a,b,c){return-1===b?null:b>=a.j?a.X?a.X[b]:void 0:c&&a.X&&(c=a.X[b],null!=c)?c:a.B[b+a.va]}
function F(a,b,c,d){Hd(a);return Ud(a,b,c,d)}
function Ud(a,b,c,d){a.l&&(a.l=void 0);if(b>=a.j||d)return Sd(a)[b]=c,a;a.B[b+a.va]=c;(c=a.X)&&b in c&&delete c[b];return a}
function Vd(a,b){a&&yd(b.B)&&yd(a.B);return a}
function Wd(a,b,c,d,e){var f=Td(a,b,d);Array.isArray(f)||(f=Fd);var g=qd(f);g&1||td(f);if(e)g&2||od(f,2),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&sd(f,16):(f=td(Array.prototype.slice.call(f)),Ud(a,b,f,d))}return f}
function Xd(a,b,c,d){Hd(a);(c=Yd(a,c))&&c!==b&&null!=d&&Ud(a,c,void 0,!1);return Ud(a,b,d)}
function Yd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Td(a,e)&&(0!==c&&Ud(a,c,void 0,!1),c=e)}return c}
function Zd(a,b,c,d){var e=d=void 0===d?!1:d,f=Td(a,c,e);var g=!1;var h=null==f||"object"!==typeof f||(g=Array.isArray(f))||f.jb!==Cd?g?new b(f):void 0:f;h!==f&&null!=h&&(Ud(a,c,h,e),od(h.B,qd(a.B)&18));b=Vd(h,a);if(null==b)return b;yd(a.B)||(e=$d(b),e!==b&&(b=e,Ud(a,c,b,d)));return Vd(b,a)}
function ae(a,b,c,d,e,f){a.h||(a.h={});var g=a.h[c],h=Wd(a,c,3,d,f);if(!g){var k=h;g=[];var m=!!(qd(a.B)&16);h=yd(k);var q=k;!f&&h&&(k=Array.prototype.slice.call(k));for(var r=h,w=0;w<k.length;w++){var t=k[w];var z=b,D=!1;D=void 0===D?!1:D;t=Array.isArray(t)?new z(t):D?new z:void 0;if(void 0!==t){z=t.B;var E=D=qd(z);h&&(E|=2);m&&(E|=16);E!=D&&rd(z,E);z=E;r=r||!!(2&z);g.push(t)}}a.h[c]=g;b=k;k=!r;m=qd(b);r=m|33;r=k?r|8:r&-9;m!=r&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),rd(b,r));k=b;
q!==k&&Ud(a,c,k,d);(f||e&&h)&&od(g,2);e&&Object.freeze(g);return g}d=g;f||(Object.isFrozen(d)?e||(g=Array.prototype.slice.call(g),a.h[c]=g):e&&Object.freeze(d));return g}
function be(a,b,c,d){var e=yd(a.B);b=ae(a,b,c,d,e,e);a=Wd(a,c,3,d,e);if(!(e||qd(a)&8)){for(e=0;e<b.length;e++)c=b[e],d=$d(c),c!==d&&(b[e]=d,a[e]=d.B);od(a,8)}return b}
function G(a,b,c,d){Hd(a);null!=d?Ld(d,b):d=void 0;return Ud(a,c,d)}
function ce(a,b,c,d,e){Hd(a);null!=e?Ld(e,b):e=void 0;Xd(a,c,d,e)}
function de(a,b,c,d,e){Hd(a);var f=null==d?Fd:td([]);if(null!=d){for(var g=!1,h=0;h<d.length;h++){var k=d[h];Ld(k,b);g=g||yd(k.B);f[h]=k.B}f=pd(f,(g?0:8)|1);a.h||(a.h={});a.h[c]=d}else a.h&&(a.h[c]=void 0);return Ud(a,c,f,e)}
function ee(a,b,c,d){Hd(a);var e=ae(a,c,b,void 0,!1,!1);c=null!=d?Ld(d,c):new c;a=Wd(a,b,2,void 0,!1);e.push(c);a.push(c.B);yd(c.B)&&sd(a,8)}
function fe(a,b){return Td(a,b)}
function ge(a,b){return null==a?b:a}
;function he(a,b,c){c=void 0===c?Bd:c;if(null!=a){if(gd&&a instanceof Uint8Array)return a.length?new ld(new Uint8Array(a),id):md();if(Array.isArray(a)){var d=qd(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return rd(a,d|2),a;a=Od(a,he,c,!0);b=qd(a);b&4&&b&2&&Object.freeze(a);return a}return a.jb===Cd?ie(a):a}}
function je(a,b,c,d,e,f,g){(a=a.h&&a.h[c])?(d=0<a.length?a[0].constructor:void 0,f=qd(a),f&2||(a=jb(a,ie),Bd(f,a),Object.freeze(a)),de(b,d,c,a,e)):F(b,c,he(d,f,g),e)}
function ie(a){if(yd(a.B))return a;a=ke(a,!0);od(a.B,2);return a}
function ke(a,b){var c=a.B,d=zd([]),e=a.constructor.h;e&&d.push(e);e=a.X;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var f={};d[d.length-1]=f}0!==(qd(c)&128)&&Id(d);b=b||yd(a.B)?Bd:Ad;var g=a.constructor;qd(d);Jd=d;d=new g(d);Jd=void 0;a.Ma&&(d.Ma=a.Ma.slice());g=!!(qd(c)&16);for(var h=e?c.length-1:c.length,k=0;k<h;k++)je(a,d,k-a.va,c[k],!1,g,b);if(e)for(var m in e)c=e[m],h=+m,Number.isNaN(h)?f[h]=c:je(a,d,h,c,!0,g,b);return d}
function $d(a){if(!yd(a.B))return a;var b=ke(a,!1);b.l=a;return b}
;function H(a,b,c){null==a&&(a=Jd);Jd=void 0;var d=this.constructor.i||0,e=0<d,f=this.constructor.h,g=!1;if(null==a){a=f?[f]:[];var h=!0;rd(a,48)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();var k=od(a,0),m=k;if(h=0!==(16&m))(g=0!==(32&m))||(m|=32);if(e)if(128&m)d=0;else{if(0<a.length){var q=a[a.length-1];if(Dd(q)&&"g"in q){d=0;m|=128;delete q.g;var r=!0,w;for(w in q){r=!1;break}r&&a.pop()}}}else if(128&m)throw Error();k!==m&&rd(a,m)}this.va=(f?0:-1)-d;this.h=void 0;this.B=
a;a:{f=this.B.length;d=f-1;if(f&&(f=this.B[d],Dd(f))){this.X=f;this.j=d-this.va;break a}void 0!==b&&-1<b?(this.j=Math.max(b,d+1-this.va),this.X=void 0):this.j=Number.MAX_VALUE}if(!e&&this.X&&"g"in this.X)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=h&&!g&&!0;e=this.j;var t;for(h=0;h<c.length;h++)g=c[h],g<e?(g+=this.va,(d=a[g])?le(d,b):a[g]=Fd):(t||(t=Sd(this)),(d=t[g])?le(d,b):t[g]=Fd)}}
H.prototype.toJSON=function(){var a=this.B,b;Ed?b=a:b=Od(a,Pd,Rd);return b};
function me(a){Ed=!0;try{return JSON.stringify(a.toJSON(),ne)}finally{Ed=!1}}
H.prototype.clone=function(){var a=Od(this.B,Qd,Ad);zd(a);Jd=a;a=new this.constructor(a);Jd=void 0;oe(a,this);return a};
function le(a,b){if(Array.isArray(a)){var c=qd(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&rd(a,c|d)}}
H.prototype.jb=Cd;H.prototype.toString=function(){return this.B.toString()};
function ne(a,b){return Md(b)}
function oe(a,b){b.Ma&&(a.Ma=b.Ma.slice());var c=b.h;if(c){b=b.X;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=be(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)oe(f[g],e[g])}else throw Error("unexpected object: type: "+Qa(e)+": "+e);}}}}
;function pe(a){var b=this.h,c=this.i;return this.isRepeated?be(a,b,c,!0):Zd(a,b,c,!0)}
;function qe(a){this.Tb=a}
;function re(a,b,c){this.i=a;this.l=b;this.h=c||[];this.Aa=new Map}
l=re.prototype;l.Ec=function(a){var b=Ka.apply(1,arguments),c=this.ub(b);c?c.push(new qe(a)):this.qc(a,b)};
l.qc=function(a){this.Aa.set(this.Zb(Ka.apply(1,arguments)),[new qe(a)])};
l.ub=function(){var a=this.Zb(Ka.apply(0,arguments));return this.Aa.has(a)?this.Aa.get(a):void 0};
l.Qc=function(){var a=this.ub(Ka.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.Aa.clear()};
l.Zb=function(){var a=Ka.apply(0,arguments);return a?a.join(","):"key"};function se(a,b){re.call(this,a,3,b)}
u(se,re);se.prototype.j=function(a){var b=Ka.apply(1,arguments),c=0,d=this.Qc(b);d&&(c=d.Tb);this.qc(c+a,b)};function te(a,b){re.call(this,a,2,b)}
u(te,re);te.prototype.j=function(a){this.Ec(a,Ka.apply(1,arguments))};function ue(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function ve(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ra(d)?ve.apply(null,d):ue(d)}}
;function J(){this.M=this.M;this.v=this.v}
J.prototype.M=!1;J.prototype.h=function(){return this.M};
J.prototype.dispose=function(){this.M||(this.M=!0,this.C())};
function we(a,b){xe(a,$a(ue,b))}
function xe(a,b){a.M?b():(a.v||(a.v=[]),a.v.push(b))}
J.prototype.C=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function ye(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
ye.prototype.stopPropagation=function(){this.j=!0};
ye.prototype.preventDefault=function(){this.defaultPrevented=!0};function ze(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ae(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Be[c])c=Be[c];else{c=String(c);if(!Be[c]){var f=/function\s+([^\(]+)/m.exec(c);Be[c]=f?f[1]:"[Anonymous]"}c=Be[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Ae(a,b){b||(b={});b[Ce(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ce(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ae(a,b));return c}
function Ce(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Be={};var De=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function Ee(a,b){ye.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ab(Ee,ye);var Fe={2:"touch",3:"pen",4:"mouse"};
Ee.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Mc){a:{try{Ic(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Fe[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Ee.Y.preventDefault.call(this)};
Ee.prototype.stopPropagation=function(){Ee.Y.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ee.prototype.preventDefault=function(){Ee.Y.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ge="closure_listenable_"+(1E6*Math.random()|0);var Me=0;function Ne(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.hb=e;this.key=++Me;this.Oa=this.cb=!1}
function Oe(a){a.Oa=!0;a.listener=null;a.proxy=null;a.src=null;a.hb=null}
;function Pe(a){this.src=a;this.listeners={};this.h=0}
Pe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Qe(a,b,d,e);-1<g?(b=a[g],c||(b.cb=!1)):(b=new Ne(b,this.src,f,!!d,e),b.cb=c,a.push(b));return b};
Pe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Qe(e,b,c,d);return-1<b?(Oe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Re(a,b){var c=b.type;c in a.listeners&&mb(a.listeners[c],b)&&(Oe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Qe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Oa&&f.listener==b&&f.capture==!!c&&f.hb==d)return e}return-1}
;var Se="closure_lm_"+(1E6*Math.random()|0),Te={},Ue=0;function Ve(a,b,c,d,e){if(d&&d.once)We(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ve(a,b[f],c,d,e);else c=Xe(c),a&&a[Ge]?a.ia(b,c,Sa(d)?!!d.capture:!!d,e):Ye(a,b,c,!1,d,e)}
function Ye(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Sa(e)?!!e.capture:!!e,h=Ze(a);h||(a[Se]=h=new Pe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=$e();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)De||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(af(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ue++}}
function $e(){function a(c){return b.call(a.src,a.listener,c)}
var b=bf;return a}
function We(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)We(a,b[f],c,d,e);else c=Xe(c),a&&a[Ge]?a.l.add(String(b),c,!0,Sa(d)?!!d.capture:!!d,e):Ye(a,b,c,!0,d,e)}
function cf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)cf(a,b[f],c,d,e);else(d=Sa(d)?!!d.capture:!!d,c=Xe(c),a&&a[Ge])?a.l.remove(String(b),c,d,e):a&&(a=Ze(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Qe(b,c,d,e)),(c=-1<a?b[a]:null)&&df(c))}
function df(a){if("number"!==typeof a&&a&&!a.Oa){var b=a.src;if(b&&b[Ge])Re(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(af(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ue--;(c=Ze(b))?(Re(c,a),0==c.h&&(c.src=null,b[Se]=null)):Oe(a)}}}
function af(a){return a in Te?Te[a]:Te[a]="on"+a}
function bf(a,b){if(a.Oa)a=!0;else{b=new Ee(b,this);var c=a.listener,d=a.hb||a.src;a.cb&&df(a);a=c.call(d,b)}return a}
function Ze(a){a=a[Se];return a instanceof Pe?a:null}
var ef="__closure_events_fn_"+(1E9*Math.random()>>>0);function Xe(a){if("function"===typeof a)return a;a[ef]||(a[ef]=function(b){return a.handleEvent(b)});
return a[ef]}
;function ff(){J.call(this);this.l=new Pe(this);this.Bc=this;this.ka=null}
ab(ff,J);ff.prototype[Ge]=!0;ff.prototype.addEventListener=function(a,b,c,d){Ve(this,a,b,c,d)};
ff.prototype.removeEventListener=function(a,b,c,d){cf(this,a,b,c,d)};
function gf(a,b){var c=a.ka;if(c){var d=[];for(var e=1;c;c=c.ka)d.push(c),++e}a=a.Bc;c=b.type||b;"string"===typeof b?b=new ye(b,a):b instanceof ye?b.target=b.target||a:(e=b,b=new ye(c,a),zb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=hf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=hf(g,c,!0,b)&&e,b.j||(e=hf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=hf(g,c,!1,b)&&e}
ff.prototype.C=function(){ff.Y.C.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Oe(d[e]);delete a.listeners[c];a.h--}}this.ka=null};
ff.prototype.ia=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function hf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Oa&&g.capture==c){var h=g.listener,k=g.hb||g.src;g.cb&&Re(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function jf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
jf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function kf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function lf(a,b){return a+Math.random()*(b-a)}
;function mf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=mf.prototype;l.clone=function(){return new mf(this.x,this.y)};
l.equals=function(a){return a instanceof mf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function nf(a,b){this.width=a;this.height=b}
l=nf.prototype;l.clone=function(){return new nf(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.Na=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function of(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function pf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function qf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var rf;function sf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=pf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Za(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Sb;c.Sb=null;e()}};
return function(e){d.next={Sb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function tf(){this.i=this.h=null}
tf.prototype.add=function(a,b){var c=uf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
tf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var uf=new jf(function(){return new vf},function(a){return a.reset()});
function vf(){this.next=this.scope=this.h=null}
vf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
vf.prototype.reset=function(){this.next=this.scope=this.h=null};var wf,xf=!1,yf=new tf;function zf(a,b){wf||Af();xf||(wf(),xf=!0);yf.add(a,b)}
function Af(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);wf=function(){a.then(Bf)}}else wf=function(){var b=Bf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(rf||(rf=sf()),rf(b)):y.setImmediate(b)}}
function Bf(){for(var a;a=yf.remove();){try{a.h.call(a.scope)}catch(b){Fc(b)}kf(uf,a)}xf=!1}
;function Cf(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=eb)try{var b=this;a.call(void 0,function(c){Df(b,2,c)},function(c){Df(b,3,c)})}catch(c){Df(this,3,c)}}
function Ef(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
Ef.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var Ff=new jf(function(){return new Ef},function(a){a.reset()});
function Gf(a,b,c){var d=Ff.get();d.j=a;d.i=b;d.context=c;return d}
function Hf(a){return new Cf(function(b,c){c(a)})}
Cf.prototype.then=function(a,b,c){return If(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Cf.prototype.$goog_Thenable=!0;l=Cf.prototype;l.qb=function(a,b){return If(this,null,a,b)};
l.catch=Cf.prototype.qb;l.cancel=function(a){if(0==this.h){var b=new Jf(a);zf(function(){Kf(this,b)},this)}};
function Kf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Kf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Lf(c),Mf(c,e,3,b)))}a.j=null}else Df(a,3,b)}
function Nf(a,b){a.i||2!=a.h&&3!=a.h||Of(a);a.l?a.l.next=b:a.i=b;a.l=b}
function If(a,b,c,d){var e=Gf(null,null,null);e.h=new Cf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Jf?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;Nf(a,e);return e.h}
l.zd=function(a){this.h=0;Df(this,2,a)};
l.Ad=function(a){this.h=0;Df(this,3,a)};
function Df(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.zd,f=a.Ad;if(d instanceof Cf){Nf(d,Gf(e||eb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Sa(d))try{var k=d.then;if("function"===typeof k){Pf(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,Of(a),3!=b||c instanceof Jf||Qf(a,c))}}
function Pf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Of(a){a.o||(a.o=!0,zf(a.Oc,a))}
function Lf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
l.Oc=function(){for(var a;a=Lf(this);)Mf(this,a,this.h,this.v);this.o=!1};
function Mf(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Rf(b,c,d);else try{b.l?b.j.call(b.context):Rf(b,c,d)}catch(e){Sf.call(null,e)}kf(Ff,b)}
function Rf(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function Qf(a,b){a.m=!0;zf(function(){a.m&&Sf.call(null,b)})}
var Sf=Fc;function Jf(a){cb.call(this,a)}
ab(Jf,cb);Jf.prototype.name="cancel";function Tf(a,b){ff.call(this);this.j=a||1;this.i=b||y;this.m=Za(this.xd,this);this.o=Date.now()}
ab(Tf,ff);l=Tf.prototype;l.enabled=!1;l.aa=null;function Uf(a,b){a.j=b;a.aa&&a.enabled?(a.stop(),a.start()):a.aa&&a.stop()}
l.xd=function(){if(this.enabled){var a=Date.now()-this.o;0<a&&a<.8*this.j?this.aa=this.i.setTimeout(this.m,this.j-a):(this.aa&&(this.i.clearTimeout(this.aa),this.aa=null),gf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.aa||(this.aa=this.i.setTimeout(this.m,this.j),this.o=Date.now())};
l.stop=function(){this.enabled=!1;this.aa&&(this.i.clearTimeout(this.aa),this.aa=null)};
l.C=function(){Tf.Y.C.call(this);this.stop();delete this.i};
function Vf(a,b,c){if("function"===typeof a)c&&(a=Za(a,c));else if(a&&"function"==typeof a.handleEvent)a=Za(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Wf(a){this.v=a;this.h=new Map;this.o=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.i=new Tf(this.flushInterval);this.i.ia("tick",this.sb,!1,this);this.m=!1}
l=Wf.prototype;l.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function Xf(a){a.i.enabled||a.i.start();a.j++;a.j>=a.l&&a.sb()}
l.sb=function(){var a=this.h.values();a=[].concat(ja(a)).filter(function(b){return b.Aa.size});
a.length&&this.v.flush(a,this.m);Yf(a);this.j=0;this.i.enabled&&this.i.stop()};
l.Pb=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new se(a,b))};
l.Qb=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new te(a,b))};
function Zf(a,b){return a.o.has(b)?void 0:a.h.get(b)}
l.Wa=function(a){this.zc.apply(this,[a,1].concat(ja(Ka.apply(1,arguments))))};
l.zc=function(a,b){var c=Ka.apply(2,arguments),d=Zf(this,a);d&&d instanceof se&&(d.j(b,c),Xf(this))};
l.rb=function(a,b){var c=Ka.apply(2,arguments),d=Zf(this,a);d&&d instanceof te&&(d.j(b,c),Xf(this))};
function Yf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function $f(a){this.h=a;this.h.Pb("/client_streamz/bg/fiec",{La:3,Ka:"rk"},{La:2,Ka:"ec"})}
function ag(a){this.h=a;this.h.Qb("/client_streamz/bg/fil",{La:3,Ka:"rk"})}
function bg(a){this.h=a;this.h.Pb("/client_streamz/bg/fsc",{La:3,Ka:"rk"})}
function cg(a){this.h=a;this.h.Qb("/client_streamz/bg/fsl",{La:3,Ka:"rk"})}
;var dg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function eg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=fg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=gg(a,h),d+=gg(a,h+4),e+=gg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return dg.toString(e)}
function fg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function gg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function hg(a){H.call(this,a,-1,ig)}
u(hg,H);function jg(a){H.call(this,a,-1,kg)}
u(jg,H);function lg(a){H.call(this,a)}
u(lg,H);function mg(a){H.call(this,a)}
u(mg,H);var ig=[3,6,4],kg=[1],ng=[1,2,3],og=[1,2,3];function pg(a){H.call(this,a,-1,qg)}
u(pg,H);var qg=[1];function rg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function sg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(r){for(var w=g,t=0;64>t;t+=4)w[t/4]=r[t]<<24|r[t+1]<<16|r[t+2]<<8|r[t+3];for(t=16;80>t;t++)r=w[t-3]^w[t-8]^w[t-14]^w[t-16],w[t]=(r<<1|r>>>31)&4294967295;r=e[0];var z=e[1],D=e[2],E=e[3],O=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var N=E^z&(D^E);var R=1518500249}else N=z^D^E,R=1859775393;else 60>t?(N=z&D|E&(z|D),R=2400959708):(N=z^D^E,R=3395469782);N=((r<<5|r>>>27)&4294967295)+N+O+R+w[t]&4294967295;O=E;E=D;D=(z<<30|z>>>2)&4294967295;z=r;r=N}e[0]=e[0]+r&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+O&4294967295}
function c(r,w){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var t=[],z=0,D=r.length;z<D;++z)t.push(r.charCodeAt(z));r=t}w||(w=r.length);t=0;if(0==m)for(;t+64<w;)b(r.slice(t,t+64)),t+=64,q+=64;for(;t<w;)if(f[m++]=r[t++],q++,64==m)for(m=0,b(f);t+64<w;)b(r.slice(t,t+64)),t+=64,q+=64}
function d(){var r=[],w=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var t=63;56<=t;t--)f[t]=w&255,w>>>=8;b(f);for(t=w=0;5>t;t++)for(var z=24;0<=z;z-=8)r[w++]=e[t]>>z&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Lc:function(){for(var r=d(),w="",t=0;t<r.length;t++)w+="0123456789ABCDEF".charAt(Math.floor(r[t]/16))+"0123456789ABCDEF".charAt(r[t]%16);return w}}}
;function tg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,ug(rg(d),a,c||null)].join(" "):null}
function ug(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],hb(d,function(h){e.push(h)}),vg(e.join(" "));
var f=[],g=[];hb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];hb(d,function(h){e.push(h)});
a=vg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function vg(a){var b=sg();b.update(a);return b.Lc().toLowerCase()}
;var wg={};function xg(a){this.h=a||{cookie:""}}
l=xg.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.Na())return!0;this.set("TESTCOOKIESENABLED","1",{ib:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Pr;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ib}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Nb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ib:0,path:b,domain:c});return d};
l.xb=function(){return yg(this).keys};
l.Na=function(){return!this.h.cookie};
l.clear=function(){for(var a=yg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function yg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Nb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var zg=new xg("undefined"==typeof document?null:document);function Ag(a){return!!wg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Bg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Ag(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new xg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");Ag(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Cg(a,b,c,d){(a=y[a])||(a=(new xg(document)).get(b));return a?tg(a,c,d):null}
function Dg(a,b){b=void 0===b?!1:b;var c=rg(String(y.location.href)),d=[];if(Bg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new xg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?tg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ag(b)&&((b=Cg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Cg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Eg(a){H.call(this,a,-1,Fg)}
u(Eg,H);var Fg=[2];function Gg(a){this.h=this.i=this.j=a}
Gg.prototype.reset=function(){this.h=this.i=this.j};
Gg.prototype.getValue=function(){return this.i};function Hg(a){var b=[];Ig(new Jg,a,b);return b.join("")}
function Jg(){}
function Ig(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ig(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Kg(d,c),c.push(":"),Ig(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Kg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Lg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Mg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Kg(a,b){b.push('"',a.replace(Mg,function(c){var d=Lg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Lg[c]=d);return d}),'"')}
;function Ng(){}
Ng.prototype.h=null;Ng.prototype.getOptions=function(){var a;(a=this.h)||(a={},Og(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Pg;function Qg(){}
ab(Qg,Ng);function Rg(a){return(a=Og(a))?new ActiveXObject(a):new XMLHttpRequest}
function Og(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Pg=new Qg;function Sg(a){ff.call(this);this.headers=new Map;this.K=a||null;this.i=!1;this.J=this.A=null;this.m=this.T="";this.j=this.P=this.s=this.O=!1;this.o=0;this.F=null;this.ca="";this.V=this.W=!1}
ab(Sg,ff);var Tg=/^https?$/i,Ug=["POST","PUT"],Vg=[];function Wg(a,b,c,d,e,f,g){var h=new Sg;Vg.push(h);b&&h.ia("complete",b);h.l.add("ready",h.Jc,!0,void 0,void 0);f&&(h.o=Math.max(0,f));g&&(h.W=g);h.send(a,c,d,e)}
l=Sg.prototype;l.Jc=function(){this.dispose();mb(Vg,this)};
l.send=function(a,b,c,d){if(this.A)throw Error("[goog.net.XhrIo] Object is active with another request="+this.T+"; newUri="+a);b=b?b.toUpperCase():"GET";this.T=a;this.m="";this.O=!1;this.i=!0;this.A=this.K?Rg(this.K):Rg(Pg);this.J=this.K?this.K.getOptions():Pg.getOptions();this.A.onreadystatechange=Za(this.ic,this);try{this.getStatus(),this.P=!0,this.A.open(b,String(a),!0),this.P=!1}catch(g){this.getStatus();Zg(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=gb(Ug,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.A.setRequestHeader(d,c);this.ca&&(this.A.responseType=this.ca);"withCredentials"in this.A&&this.A.withCredentials!==this.W&&(this.A.withCredentials=this.W);try{$g(this),0<this.o&&(this.V=ah(this.A),this.getStatus(),this.V?(this.A.timeout=this.o,this.A.ontimeout=Za(this.uc,this)):
this.F=Vf(this.uc,this.o,this)),this.getStatus(),this.s=!0,this.A.send(a),this.s=!1}catch(g){this.getStatus(),Zg(this,g)}};
function ah(a){return Kc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.uc=function(){"undefined"!=typeof Oa&&this.A&&(this.m="Timed out after "+this.o+"ms, aborting",this.getStatus(),gf(this,"timeout"),this.abort(8))};
function Zg(a,b){a.i=!1;a.A&&(a.j=!0,a.A.abort(),a.j=!1);a.m=b;bh(a);ch(a)}
function bh(a){a.O||(a.O=!0,gf(a,"complete"),gf(a,"error"))}
l.abort=function(){this.A&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.A.abort(),this.j=!1,gf(this,"complete"),gf(this,"abort"),ch(this))};
l.C=function(){this.A&&(this.i&&(this.i=!1,this.j=!0,this.A.abort(),this.j=!1),ch(this,!0));Sg.Y.C.call(this)};
l.ic=function(){this.h()||(this.P||this.s||this.j?dh(this):this.bd())};
l.bd=function(){dh(this)};
function dh(a){if(a.i&&"undefined"!=typeof Oa)if(a.J[1]&&4==eh(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==eh(a))Vf(a.ic,0,a);else if(gf(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(fh(a))gf(a,"complete"),gf(a,"success");else{try{var b=2<eh(a)?a.A.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";bh(a)}}finally{ch(a)}}}
function ch(a,b){if(a.A){$g(a);var c=a.A,d=a.J[0]?function(){}:null;
a.A=null;a.J=null;b||gf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function $g(a){a.A&&a.V&&(a.A.ontimeout=null);a.F&&(y.clearTimeout(a.F),a.F=null)}
l.isActive=function(){return!!this.A};
l.isComplete=function(){return 4==eh(this)};
function fh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=oc(1,String(a.T)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Tg.test(a?a.toLowerCase():"");c=b}return c}
function eh(a){return a.A?a.A.readyState:0}
l.getStatus=function(){try{return 2<eh(this)?this.A.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function gh(a){H.call(this,a)}
u(gh,H);function hh(a){H.call(this,a,-1,ih)}
u(hh,H);var ih=[1];var jh=["platform","platformVersion","architecture","model","uaFullVersion"];new hh;function kh(a){H.call(this,a)}
u(kh,H);function lh(a){H.call(this,a,31,mh)}
u(lh,H);var mh=[3,20,27];function nh(a){H.call(this,a,17,oh)}
u(nh,H);var oh=[3,5];function ph(a){H.call(this,a,6,qh)}
u(ph,H);var qh=[5];function rh(a){H.call(this,a)}
u(rh,H);var sh;sh=new function(a,b,c){this.i=a;this.fieldName=b;this.h=c;this.isRepeated=0;this.j=pe}(175237375,{Fr:0},rh);function th(a,b,c,d,e,f,g,h,k,m,q){ff.call(this);var r=this;this.O="";this.j=[];this.Nb="";this.Ob=this.ta=-1;this.Ya=!1;this.J=this.m=null;this.F=0;this.Cc=1;this.timeoutMillis=0;this.ca=!1;ff.call(this);this.Za=b||function(){};
this.s=new uh(a,f);this.Ac=d;this.Xa=q;this.Dc=$a(lf,0,1);this.T=e||null;this.K=c||null;this.V=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Ha=f||!1;!this.Ha&&(65<=dc("Chromium")||45<=dc("Firefox")||12<=dc("Safari")||(Gc()||C("iPad")||C("iPod"))&&Hc());a=F(new kh,1,1);vh(this.s,a);this.o=new Gg(1E4);this.i=new Tf(this.o.getValue());we(this,this.i);m=wh(this,m);Ve(this.i,"tick",m,!1,this);this.P=new Tf(6E5);we(this,this.P);Ve(this.P,"tick",m,!1,this);this.V||this.P.start();
this.Ha||(Ve(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.W()}),Ve(document,"pagehide",this.W,!1,this))}
u(th,ff);function wh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
th.prototype.C=function(){this.W();ff.prototype.C.call(this)};
function xh(a){a.T||(a.T=.01>a.Dc()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.T}
function yh(a,b){a.o=new Gg(1>b?1:b);Uf(a.i,a.o.getValue())}
th.prototype.log=function(a){a=a.clone();var b=this.Cc++;F(a,21,b);this.O&&F(a,26,this.O);if(!Td(a,1)){b=a;var c=Date.now().toString();F(b,1,c)}null==Td(a,15)&&F(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),G(a,Eg,16,b));for(;1E3<=this.j.length;)this.j.shift(),++this.F;this.j.push(a);gf(this,new zh(a));this.V||this.i.enabled||this.i.start()};
th.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.ca)Ah(this);else{var d=Date.now();if(this.Ob>d&&this.ta<d)b&&b("throttled");else{var e=Bh(this.s,this.j,this.F);d={};var f=this.Za();f&&(d.Authorization=f);var g=xh(this);this.K&&(d["X-Goog-AuthUser"]=this.K,g=xc(g,"authuser",this.K));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=xc(g,"pageId",this.pageId));if(f&&this.Nb===f)b&&b("stale-auth-token");else{this.j=[];this.i.enabled&&this.i.stop();this.F=0;var h=me(e),
k;this.J&&this.J.isSupported(h.length)&&(k=this.J.compress(h));var m={url:g,body:h,Hc:1,Hb:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(t){c.o.reset();Uf(c.i,c.o.getValue());if(t){var z=null;try{var D=JSON.parse(t.replace(")]}'\n",""));z=new ph(D)}catch(E){}z&&(t=Number(ge(Td(z,1),"-1")),0<t&&(c.ta=Date.now(),c.Ob=c.ta+t),z=sh.j(z))&&(z=ge(Td(z,1),-1),-1!=z&&(c.Ya||yh(c,z)))}a&&a()},r=function(t,z){var D=be(e,lh,3),E=c.o;
E.h=Math.min(3E5,2*E.h);E.i=Math.min(3E5,E.h+Math.round(.2*(Math.random()-.5)*E.h));Uf(c.i,c.o.getValue());401===t&&f&&(c.Nb=f);void 0===z&&(z=500<=t&&600>t||401===t||0===t);z&&(c.j=D.concat(c.j),c.V||c.i.enabled||c.i.start());b&&b("net-send-failed",t)},w=function(){c.Xa?c.Xa.send(m,q,r):c.Ac(m,q,r)};
k?k.then(function(t){m.Hb["Content-Encoding"]="gzip";m.Hb["Content-Type"]="application/binary";m.body=t;m.Hc=2;w()},function(){w()}):w()}}}};
th.prototype.W=function(){this.flush()};
function Ah(a){Ch(a,function(b,c){b=xc(b,"format","json");b=window.navigator.sendBeacon(b,me(c));a.ca&&!b&&(a.ca=!1);return b})}
function Ch(a,b){if(0!==a.j.length){var c=Ec(xh(a),"format");c=vc(c,"auth",a.Za(),"authuser",a.K||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=Bh(a.s,e,a.F);if(!b(c,f))break;a.F=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function zh(){ye.call(this,"event-logged",void 0)}
u(zh,ye);function uh(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new nh;F(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));vh(this,new kh)}
function vh(a,b){G(a.h,kh,1,b);Td(b,1)||F(b,1,1);a.i||(b=Dh(a),Td(b,5)||F(b,5,a.locale));a.uach&&(b=Dh(a),Zd(b,hh,9)||G(b,hh,9,a.uach))}
function Eh(a,b){var c=void 0===c?jh:c;b(window,c).then(function(d){a.uach=d;d=Dh(a);G(d,hh,9,a.uach);return!0}).catch(function(){return!1})}
function Dh(a){a=Zd(a.h,kh,1);var b=Zd(a,gh,11);b||(b=new gh,G(a,gh,11,b));return b}
function Bh(a,b,c){c=void 0===c?0:c;a=a.h.clone();var d=Date.now().toString();a=F(a,4,d);b=de(a,lh,3,b);c&&F(b,14,c);return b}
;function Fh(a,b,c){Wg(a.url,function(d){d=d.target;if(fh(d)){try{var e=d.A?d.A.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Hb,a.timeoutMillis,a.withCredentials)}
;function Gh(){this.j="https://play.google.com/log?format=json&hasfast=true";this.s=!1;this.m=Fh;this.h=""}
;function Hh(){var a=void 0===a?"":a;var b=void 0===b?"":b;var c=new Gh;c.h="";""!=a&&(c.j=a);b&&(c.i=b);a=new th(1828,c.J?c.J:Dg,"0",c.m,c.j,c.s,!1,c.P,void 0,void 0,c.o?c.o:void 0);c.M&&vh(a.s,c.M);if(c.i){b=c.i;var d=Dh(a.s);F(d,7,b)}c.l&&(a.J=c.l);c.h&&(a.O=c.h);c.v&&((b=c.v)?(a.m||(a.m=new Eg),b=me(b),F(a.m,4,b)):a.m&&F(a.m,4,void 0,!1));c.K&&(d=c.K,a.m||(a.m=new Eg),b=a.m,d=null==d?Fd:pd(d,1),F(b,2,d));c.F&&(b=c.F,a.Ya=!0,yh(a,b));c.O&&Eh(a.s,c.O);this.h=a}
Hh.prototype.flush=function(a){var b=a||[];if(b.length){a=new pg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new hg;var h=F(g,1,f.i);var k=f;g=[];for(var m=0;m<k.h.length;m++)g.push(k.h[m].Ka);if(null==g)g=F(h,3,Fd);else{k=qd(g);if(!(k&4)){if(k&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];rd(g,k|5)}g=F(h,3,g)}h=[];k=[];m=p(f.Aa.keys());for(var q=m.next();!q.done;q=m.next())k.push(q.value.split(","));for(m=0;m<k.length;m++){q=k[m];var r=f.l;for(var w=
f.ub(q)||[],t=[],z=0;z<w.length;z++){var D=w[z],E=D&&D.Tb;D=new mg;switch(r){case 3:Xd(D,1,og,Number(E));break;case 2:var O=D;E=Number(E);var N=og;if(null!=E&&"number"!==typeof E)throw Error("Value of double field must be a number|null|undefined, found "+typeof E+": "+E);Xd(O,2,N,E)}t.push(D)}r=t;for(w=0;w<r.length;w++){t=r[w];z=new jg;t=G(z,mg,2,t);z=q;D=[];O=f;E=[];for(N=0;N<O.h.length;N++)E.push(O.h[N].La);O=E;for(E=0;E<O.length;E++){N=O[E];var R=z[E],ca=new lg;switch(N){case 3:Xd(ca,1,ng,String(R));
break;case 2:Xd(ca,2,ng,Number(R));break;case 1:Xd(ca,3,ng,"true"==R)}D.push(ca)}de(t,lg,1,D);h.push(t)}}de(g,jg,4,h);c.push(g);e.clear()}de(a,hg,1,c);b=this.h;a instanceof lh?b.log(a):(c=new lh,a=me(a),a=F(c,8,a),b.log(a));this.h.flush()}};function Ih(a){this.v=Jh();this.m=new Hh;this.h=new Wf(this.m);this.o=new ag(this.h);this.j=new bg(this.h);this.l=new cg(this.h);this.i=new $f(this.h);this.oa=eg(a)}
function Jh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Kh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Lh(a){var b=this;this.i=!1;var c=a.program;var d=a.Sc;if(a.fd){var e;this.ga=null!=(e=a.ga)?e:new Ih(d)}var f=new Kh;this.j=f.promise;if(!y[d]){var g;null!=(g=this.ga)&&g.i.h.Wa("/client_streamz/bg/fiec",g.oa,1)}else if(!y[d].a){var h;null!=(h=this.ga)&&h.i.h.Wa("/client_streamz/bg/fiec",h.oa,2)}this.l=p((0,y[d].a)(c,function(k,m){Promise.resolve().then(function(){var q;if(null!=(q=b.ga)){var r=Jh()-q.v;q.o.h.rb("/client_streamz/bg/fil",r,q.oa)}f.resolve({Fc:k,td:m})})},!0)).next().value;
this.sd=f.promise.then(function(){})}
Lh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=Jh(),d;null!=(d=this.ga)&&d.j.h.Wa("/client_streamz/bg/fsc",d.oa);return this.j.then(function(e){var f=e.Fc;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.ga)){var m=Jh()-c;k.l.h.rb("/client_streamz/bg/fsl",m,k.oa)}g(h)},[a.Vb,
a.ud])})})};
Lh.prototype.sc=function(a){if(this.i)throw Error("Already disposed");var b=Jh(),c;null!=(c=this.ga)&&c.j.h.Wa("/client_streamz/bg/fsc",c.oa);a=this.l([a.Vb,a.ud]);null!=(c=this.ga)&&(b=Jh()-b,c.l.h.rb("/client_streamz/bg/fsl",b,c.oa));return a};
Lh.prototype.dispose=function(){var a;null!=(a=this.ga)&&a.h.sb();this.i=!0;this.j.then(function(b){(b=b.td)&&b()})};
Lh.prototype.h=function(){return this.i};var Mh=window;Eb("csi.gstatic.com");Eb("googleads.g.doubleclick.net");Eb("partner.googleadservices.com");Eb("pubads.g.doubleclick.net");Eb("securepubads.g.doubleclick.net");Eb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Nh;try{new URL("s://g"),Nh=!0}catch(a){Nh=!1}var Oh=Nh;var Ph={};function Qh(){}
function Rh(a){this.h=a}
u(Rh,Qh);Rh.prototype.toString=function(){return this.h};function Sh(a){var b="true".toString(),c=[new Rh(Th[0].toLowerCase(),Ph)];if(0===c.length)throw Error("No prefixes are provided");if(c.map(function(d){if(d instanceof Rh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Uh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Vh(a,b){a.src=Lb(b);Uh(a)}
;function Wh(a){this.Xc=a}
function Xh(a){return new Wh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Yh=[Xh("data"),Xh("http"),Xh("https"),Xh("mailto"),Xh("ftp"),new Wh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Zh(a){var b=$h;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ai(){var a=[];Zh(function(b){a.push(b)});
return a}
var $h={Od:"allow-forms",Pd:"allow-modals",Qd:"allow-orientation-lock",Rd:"allow-pointer-lock",Sd:"allow-popups",Td:"allow-popups-to-escape-sandbox",Ud:"allow-presentation",Vd:"allow-same-origin",Wd:"allow-scripts",Xd:"allow-top-navigation",Yd:"allow-top-navigation-by-user-activation"},bi=fb(function(){return ai()});
function ci(){var a=di(),b={};hb(bi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function di(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function ei(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var fi=(new Date).getTime();var gi="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ja(gi);function hi(a){ff.call(this);var b=this;this.s=this.j=0;this.Z=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
ea:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return v(e,ii(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.s||ji(this)}
u(hi,ff);function ki(){var a=li;hi.h||(hi.h=new hi(a));return hi.h}
hi.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Z.ea(this.s);delete hi.h};
hi.prototype.U=function(){return this.i};
function ji(a){a.s=a.Z.S(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.u(3):v(c,ii(a),3):v(c,ii(a),3);ji(a);c.h=0})},3E4)}
function ii(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Z.S(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.o=void 0;a.j&&(a.Z.ea(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?gf(a,"networkstatus-online"):gf(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.u(3)}})})}
;function mi(){this.data_=[];this.h=-1}
mi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
mi.prototype.get=function(a){return!!this.data_[a]};
function ni(a){-1===a.h&&(a.h=kb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function oi(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
oi.prototype[Symbol.iterator]=function(){return this};
oi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function pi(a,b){return new oi(a,b)}
;function qi(){this.blockSize=-1}
;function ri(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
ab(ri,qi);ri.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function si(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
ri.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)si(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){si(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){si(this,e);f=0;break}}this.i=f;this.l+=b}};
ri.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;si(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function ti(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function ui(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function vi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:ti(a).match(/\S+/g)||[],b=0<=gb(a,b));return b}
function wi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):vi(a,"inverted-hdpi")&&ui(a,Array.prototype.filter.call(a.classList?a.classList:ti(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function xi(){}
xi.prototype.next=function(){return yi};
var yi={done:!0,value:void 0};function zi(a){return{value:a,done:!1}}
xi.prototype.da=function(){return this};function Ai(a){if(a instanceof Bi||a instanceof Ci||a instanceof Di)return a;if("function"==typeof a.next)return new Bi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Bi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.da)return new Bi(function(){return a.da()});
throw Error("Not an iterator or iterable.");}
function Bi(a){this.i=a}
Bi.prototype.da=function(){return new Ci(this.i())};
Bi.prototype[Symbol.iterator]=function(){return new Di(this.i())};
Bi.prototype.h=function(){return new Di(this.i())};
function Ci(a){this.i=a}
u(Ci,xi);Ci.prototype.next=function(){return this.i.next()};
Ci.prototype[Symbol.iterator]=function(){return new Di(this.i)};
Ci.prototype.h=function(){return new Di(this.i)};
function Di(a){Bi.call(this,function(){return a});
this.j=a}
u(Di,Bi);Di.prototype.next=function(){return this.j.next()};function Ei(a,b){this.i={};this.h=[];this.qa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ei)for(c=a.xb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Ei.prototype;l.xb=function(){Fi(this);return this.h.concat()};
l.has=function(a){return Gi(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Hi;Fi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Hi(a,b){return a===b}
l.Na=function(){return 0==this.size};
l.clear=function(){this.i={};this.qa=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Gi(this.i,a)?(delete this.i[a],--this.size,this.qa++,this.h.length>2*this.size&&Fi(this),!0):!1};
function Fi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Gi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Gi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Gi(this.i,a)?this.i[a]:b};
l.set=function(a,b){Gi(this.i,a)||(this.size+=1,this.h.push(a),this.qa++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.xb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Ei(this)};
l.keys=function(){return Ai(this.da(!0)).h()};
l.values=function(){return Ai(this.da(!1)).h()};
l.entries=function(){var a=this;return pi(this.keys(),function(b){return[b,a.get(b)]})};
l.da=function(a){Fi(this);var b=0,c=this.qa,d=this,e=new xi;e.next=function(){if(c!=d.qa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return yi;var f=d.h[b++];return zi(a?f:d.i[f])};
return e};
function Gi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.s=!!a}
ab(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function Ii(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Ga(b)}}
l.Ga=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&mb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.sa=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Ji(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Ga(c)}}return 0!=e}return!1};
function Ji(a,b,c){zf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Ga,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.C=function(){K.Y.C.call(this);this.clear();this.l.length=0};function Ki(a){this.h=a}
Ki.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Hg(b))};
Ki.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ki.prototype.remove=function(a){this.h.remove(a)};function Li(a){this.h=a}
ab(Li,Ki);function Mi(a){this.data=a}
function Ni(a){return void 0===a||a instanceof Mi?a:new Mi(a)}
Li.prototype.set=function(a,b){Li.Y.set.call(this,a,Ni(b))};
Li.prototype.i=function(a){a=Li.Y.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Li.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Oi(a){this.h=a}
ab(Oi,Li);Oi.prototype.set=function(a,b,c){if(b=Ni(b)){if(c){if(c<Date.now()){Oi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Oi.Y.set.call(this,a,b)};
Oi.prototype.i=function(a){var b=Oi.Y.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Oi.prototype.remove.call(this,a);else return b}};function Pi(){}
;function Qi(){}
ab(Qi,Pi);Qi.prototype[Symbol.iterator]=function(){return Ai(this.da(!0)).h()};
Qi.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ri(a){this.h=a}
ab(Ri,Qi);l=Ri.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.da=function(a){var b=0,c=this.h,d=new xi;d.next=function(){if(b>=c.length)return yi;var e=c.key(b++);if(a)return zi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return zi(e)};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function Si(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
ab(Si,Ri);function Ti(a,b){this.i=a;this.h=null;var c;if(c=Kc)c=!(9<=Number(Xc));if(c){Ui||(Ui=new Ei);this.h=Ui.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Ui.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
ab(Ti,Qi);var Vi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ui=null;function Wi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Vi[b]})}
l=Ti.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(Wi(a),b);Xi(this)};
l.get=function(a){a=this.h.getAttribute(Wi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(Wi(a));Xi(this)};
l.da=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new xi;d.next=function(){if(b>=c.length)return yi;var e=c[b++];if(a)return zi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return zi(e)};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Xi(this)};
function Xi(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Yi(a,b){this.i=a;this.h=b+"::"}
ab(Yi,Qi);Yi.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Yi.prototype.get=function(a){return this.i.get(this.h+a)};
Yi.prototype.remove=function(a){this.i.remove(this.h+a)};
Yi.prototype.da=function(a){var b=this.i[Symbol.iterator](),c=this,d=new xi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return zi(a?e.slice(c.h.length):c.i.get(e))};
return d};function Zi(a){return Mb(null===a?"null":void 0===a?"undefined":a)}
;function $i(a){this.name=a}
;var aj=new $i("rawColdConfigGroup");var bj=new $i("rawHotConfigGroup");function cj(a){H.call(this,a)}
u(cj,H);function dj(a){H.call(this,a)}
u(dj,H);dj.prototype.getKey=function(){return Td(this,1)};
dj.prototype.getValue=function(){return fe(this,2===Yd(this,ej)?2:-1)};
var ej=[2,3,4,5,6];function fj(a){H.call(this,a)}
u(fj,H);function gj(a){H.call(this,a)}
u(gj,H);function hj(a){H.call(this,a,-1,ij)}
u(hj,H);var ij=[2];function jj(a){H.call(this,a,-1,kj)}
u(jj,H);jj.prototype.getPlayerType=function(){return Td(this,36)};
jj.prototype.setHomeGroupInfo=function(a){return G(this,hj,81,a)};
jj.prototype.clearLocationPlayabilityToken=function(){return F(this,89,void 0,!1)};
var kj=[9,66,24,32,86,100,101];function lj(a){H.call(this,a,-1,mj)}
u(lj,H);var mj=[15,26,28];function nj(a){H.call(this,a,-1,oj)}
u(nj,H);var oj=[5];function pj(a){H.call(this,a)}
u(pj,H);function qj(a){H.call(this,a,-1,rj)}
u(qj,H);qj.prototype.setSafetyMode=function(a){return F(this,5,a)};
var rj=[12];function sj(a){H.call(this,a,-1,tj)}
u(sj,H);sj.prototype.i=function(a){return G(this,jj,1,a)};
var tj=[12];var uj=new $i("continuationCommand");var vj=new $i("webCommandMetadata");var wj=new $i("signalServiceEndpoint");var xj={xi:"EMBEDDED_PLAYER_MODE_UNKNOWN",ti:"EMBEDDED_PLAYER_MODE_DEFAULT",wi:"EMBEDDED_PLAYER_MODE_PFP",vi:"EMBEDDED_PLAYER_MODE_PFL"};var yj=new $i("feedbackEndpoint");var zj={Wq:"WEB_DISPLAY_MODE_UNKNOWN",Sq:"WEB_DISPLAY_MODE_BROWSER",Uq:"WEB_DISPLAY_MODE_MINIMAL_UI",Vq:"WEB_DISPLAY_MODE_STANDALONE",Tq:"WEB_DISPLAY_MODE_FULLSCREEN"};function Aj(a){H.call(this,a,-1,Bj)}
u(Aj,H);function Cj(a){H.call(this,a)}
u(Cj,H);Cj.prototype.getKey=function(){return ge(Td(this,1),"")};
Cj.prototype.getValue=function(){return ge(Td(this,2),"")};
var Bj=[4,5];function Dj(a){H.call(this,a)}
u(Dj,H);function Ej(a){H.call(this,a)}
u(Ej,H);var Fj=[2,3,4];function Gj(a){H.call(this,a)}
u(Gj,H);Gj.prototype.getMessage=function(){return ge(Td(this,1),"")};function Hj(a){H.call(this,a)}
u(Hj,H);function Ij(a){H.call(this,a)}
u(Ij,H);function Jj(a){H.call(this,a,-1,Kj)}
u(Jj,H);var Kj=[10,17];function Lj(a){H.call(this,a)}
u(Lj,H);function Mj(a){H.call(this,a)}
u(Mj,H);function Nj(a){H.call(this,a)}
u(Nj,H);function Oj(a){H.call(this,a)}
u(Oj,H);function Pj(a){H.call(this,a)}
u(Pj,H);function Qj(a){H.call(this,a,-1,Rj)}
u(Qj,H);Qj.prototype.getVideoData=function(){return Zd(this,Pj,15)};
var Rj=[4];function Sj(a){H.call(this,a)}
u(Sj,H);function Tj(a,b){return G(a,Nj,1,b)}
Sj.prototype.i=function(a){return F(this,2,a)};
function Uj(a){H.call(this,a)}
u(Uj,H);function Vj(a,b){G(a,Nj,1,b)}
;function Wj(a){H.call(this,a,-1,Xj)}
u(Wj,H);Wj.prototype.i=function(a){return F(this,1,a)};
function Yj(a,b){return G(a,Nj,2,b)}
var Xj=[3];function Zj(a){H.call(this,a)}
u(Zj,H);Zj.prototype.i=function(a){return F(this,1,a)};function ak(a){H.call(this,a)}
u(ak,H);ak.prototype.i=function(a){return F(this,1,a)};function bk(a){H.call(this,a)}
u(bk,H);bk.prototype.i=function(a){return F(this,1,a)};function ck(a){H.call(this,a)}
u(ck,H);ck.prototype.i=function(a){return F(this,1,a)};function dk(a){H.call(this,a)}
u(dk,H);function ek(a){H.call(this,a)}
u(ek,H);function fk(a){H.call(this,a,-1,gk)}
u(fk,H);fk.prototype.getPlayerType=function(){var a=Td(this,7);return null==a?0:a};
fk.prototype.setVideoId=function(a){return F(this,19,a)};
function Bk(a,b){ee(a,68,Ck,b)}
function Ck(a){H.call(this,a)}
u(Ck,H);Ck.prototype.getId=function(){return ge(Td(this,2),"")};
var gk=[83,68];function Dk(a){H.call(this,a)}
u(Dk,H);function Ek(a){H.call(this,a)}
u(Ek,H);function Fk(a){H.call(this,a)}
u(Fk,H);function Gk(a){H.call(this,a,459)}
u(Gk,H);
var Hk=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,444,176,222,383,177,178,179,458,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,
351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441,448];var Ik={wj:0,hj:1,nj:2,oj:4,tj:8,pj:16,qj:32,vj:64,uj:128,jj:256,lj:512,sj:1024,kj:2048,mj:4096,ij:8192,rj:16384};function Jk(a){H.call(this,a)}
u(Jk,H);function Kk(a){H.call(this,a)}
u(Kk,H);Kk.prototype.setVideoId=function(a){return Xd(this,1,Lk,a)};
Kk.prototype.getPlaylistId=function(){return fe(this,2===Yd(this,Lk)?2:-1)};
var Lk=[1,2];function Mk(a){H.call(this,a,-1,Nk)}
u(Mk,H);var Nk=[3];var Ok=new $i("webPlayerShareEntityServiceEndpoint");var Pk=new $i("playlistEditEndpoint");var Qk=new $i("modifyChannelNotificationPreferenceEndpoint");var Rk=new $i("unsubscribeEndpoint");var Sk=new $i("subscribeEndpoint");function Tk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Uk=y.window,Vk,Wk,Xk=(null==Uk?void 0:null==(Vk=Uk.yt)?void 0:Vk.config_)||(null==Uk?void 0:null==(Wk=Uk.ytcfg)?void 0:Wk.data_)||{};A("yt.config_",Xk);function Yk(){Tk(Xk,arguments)}
function L(a,b){return a in Xk?Xk[a]:b}
function Zk(){var a=Xk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=$k(a);return"string"===typeof a&&"false"===a?!1:!!a}
function al(a,b){a=$k(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function bl(){return L("EXPERIMENTS_TOKEN","")}
function $k(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function cl(){for(var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{}),c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=L("EXPERIMENT_FLAGS",{});var e=p(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function dl(){var a=el;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a)}
function fl(a){A("yt.ads.biscotti.lastId_",a)}
;var gl=[];function hl(a){gl.forEach(function(b){return b(a)})}
function il(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){jl(b)}}:a}
function jl(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Yk("ERRORS",e));hl(a)}
function kl(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Yk("ERRORS",e))}
;var ll=/^[\w.]*$/,ml={q:!0,search_query:!0};function nl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ol(f[0]||""),h=ol(f[1]||"");g in c?Array.isArray(c[g])?nb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,m=f[0],q=String(nl);k.args=[{key:m,value:f[1],query:a,method:pl==q?"unchanged":q}];ml.hasOwnProperty(m)||kl(k)}}return c}
var pl=String(nl);function ql(a){var b=[];ob(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];hb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function rl(a){"?"==a.charAt(0)&&(a=a.substr(1));return nl(a,"&")}
function sl(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),rl(1<a.length?a[1]:a[0])):{}}
function tl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=rl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return wc(a,e)+d}
function ul(a){if(!b)var b=window.location.href;var c=oc(1,a),d=pc(a);c&&d?(a=a.match(mc),b=b.match(mc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?pc(b)==d&&(Number(oc(4,b))||null)==(Number(oc(4,a))||null):!0;return a}
function ol(a){return a&&a.match(ll)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function vl(a){var b=wl;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=fi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ea){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Mh:g;try{var h=g.history.length}catch(ea){h=0}e.u_his=h;var k;e.u_h=null==(k=Mh.screen)?void 0:k.height;var m;e.u_w=null==(m=Mh.screen)?void 0:m.width;var q;e.u_ah=null==(q=Mh.screen)?void 0:q.availHeight;var r;e.u_aw=
null==(r=Mh.screen)?void 0:r.availWidth;var w;e.u_cd=null==(w=Mh.screen)?void 0:w.colorDepth}catch(ea){}h=b.h;try{var t=h.screenX;var z=h.screenY}catch(ea){}try{var D=h.outerWidth;var E=h.outerHeight}catch(ea){}try{var O=h.innerWidth;var N=h.innerHeight}catch(ea){}try{var R=h.screenLeft;var ca=h.screenTop}catch(ea){}try{O=h.innerWidth,N=h.innerHeight}catch(ea){}try{var U=h.screen.availWidth;var qb=h.screen.availTop}catch(ea){}t=[R,ca,t,z,U,qb,D,E,O,N];try{var Ua=(b.h.top||window).document,oa="CSS1Compat"==
Ua.compatMode?Ua.documentElement:Ua.body;var I=(new nf(oa.clientWidth,oa.clientHeight)).round()}catch(ea){I=new nf(-12245933,-12245933)}Ua=I;I={};var na=void 0===na?y:na;oa=new mi;na.SVGElement&&na.document.createElementNS&&oa.set(0);z=ci();z["allow-top-navigation-by-user-activation"]&&oa.set(1);z["allow-popups-to-escape-sandbox"]&&oa.set(2);na.crypto&&na.crypto.subtle&&oa.set(3);na.TextDecoder&&na.TextEncoder&&oa.set(4);na=ni(oa);I.bc=na;I.bih=Ua.height;I.biw=Ua.width;I.brdim=t.join();b=b.i;b=(I.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,I.wgl=!!Mh.WebGLRenderingContext,I);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var wl=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return ql(vl(a))});Date.now();var xl="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function yl(){if(!xl)return null;var a=xl();return"open"in a?a:null}
function zl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Al(a,b){"function"===typeof a&&(a=il(a));return window.setTimeout(a,b)}
;var Bl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Cl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(gi)),Dl=!1;
function El(a,b){b=void 0===b?{}:b;var c=ul(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in Bl){var f=L(Bl[e]);"X-Goog-Visitor-Id"!==e||f||(f=L("VISITOR_DATA"));!f||!c&&pc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!pc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!pc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&pc(a)||(b["X-YouTube-Ad-Signals"]=ql(vl()));return b}
function Fl(a){var b=window.location.search,c=pc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ul(a)&&(c=document.location.hostname);var d=nc(oc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=rl(b),f={};hb(Cl,function(g){e[g]&&(f[g]=e[g])});
return tl(a,f||{},!1)}
function Gl(a,b){var c=b.format||"JSON";a=Hl(a,b);var d=Il(a,b),e=!1,f=Jl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var m=zl(k),q=null,r=400<=k.status&&500>k.status,w=500<=k.status&&600>k.status;if(m||r||w)q=Kl(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};r=b.context||y;m?b.onSuccess&&b.onSuccess.call(r,k,q):b.onError&&b.onError.call(r,k,q);b.onFinish&&b.onFinish.call(r,
k,q)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Al(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},d)}return f}
function Hl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=tl(a,b||{},!0);return a}
function Il(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||pc(a)&&!b.withCredentials&&pc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(M("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=rl(e),zb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):uc(e));f=e||f&&!sb(f);!Dl&&f&&"POST"!=b.method&&(Dl=!0,jl(Error("AJAX request with postData should use POST")));return e}
function Kl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,kl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ll(a):null)e={},hb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ml(g)})}d&&Nl(e);
return e}
function Nl(a){if(Sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=Bb();d=e?e.createHTML(d):d;a[c]=new fc(d)}else Nl(a[b])}}
function Ll(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ml(a){var b="";hb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Jl(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&il(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=yl();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=Fl(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=El(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ol=Yc||Zc;function Pl(a){var b=Ub();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Ql=[{Cb:function(a){return"Cannot read property '"+a.key+"'"},
kb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Cb:function(a){return"Cannot call '"+a.key+"'"},
kb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Cb:function(a){return a.key+" is not defined"},
kb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Sl={na:[],la:[{callback:Rl,weight:500}]};function Rl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Tl(){this.la=[];this.na=[]}
var Ul;function Vl(){if(!Ul){var a=Ul=new Tl;a.na.length=0;a.la.length=0;Sl.na&&a.na.push.apply(a.na,Sl.na);Sl.la&&a.la.push.apply(a.la,Sl.la)}return Ul}
;var Wl=new K;function Xl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Yl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Yl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Yl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Yl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Zl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=$l(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Xl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?$l(e+".ve",f,g,h):0;d+=g;d+=$l(e,a[e],b,c);if(500<d)break}}else c[b]=am(a),d+=c[b].length;else c[b]=am(a),d+=c[b].length;return d}
function $l(a,b,c,d){c+="."+a;a=am(b);d[c]=a;return c.length+a.length}
function am(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function bm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function cm(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function dm(a,b,c,d,e){zg.set(""+a,b,{ib:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function em(a,b,c){zg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function fm(){if(!zg.isEnabled())return!1;if(!zg.Na())return!0;zg.set("TESTCOOKIESENABLED","1",{ib:60});if("1"!==zg.get("TESTCOOKIESENABLED"))return!1;zg.remove("TESTCOOKIESENABLED");return!0}
;var gm=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",gm);function hm(){this.h=L("ALT_PREF_COOKIE_NAME","PREF");this.i=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=zg.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(gm[d]=c.toString())}}}
hm.prototype.get=function(a,b){im(a);jm(a);a=void 0!==gm[a]?gm[a].toString():null;return null!=a?a:b?b:""};
hm.prototype.set=function(a,b){im(a);jm(a);if(null==b)throw Error("ExpectedNotNull");gm[a]=b.toString()};
function km(a){return!!((lm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
hm.prototype.remove=function(a){im(a);jm(a);delete gm[a]};
hm.prototype.clear=function(){for(var a in gm)delete gm[a]};
function jm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function im(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function lm(a){a=void 0!==gm[a]?gm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Pa(hm);var mm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},nm={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},om={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},pm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function qm(){var a=y.navigator;return a?a.connection:void 0}
function rm(){var a=qm();if(a){var b=mm[a.type||"unknown"]||"CONN_UNKNOWN";a=mm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function sm(){var a=qm();if(null!=a&&a.effectiveType)return pm.hasOwnProperty(a.effectiveType)?pm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function tm(){}
function um(a,b){return vm(a,0,b)}
tm.prototype.S=function(a,b){return vm(a,1,b)};
function wm(a,b){vm(a,2,b)}
function xm(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function ym(){tm.apply(this,arguments)}
u(ym,tm);function zm(){ym.h||(ym.h=new ym);return ym.h}
function vm(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Al(a,c||0)}
ym.prototype.ea=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
ym.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
ym.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var li=zm();function P(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
u(P,Error);function Am(){try{return Bm(),!0}catch(a){return!1}}
function Bm(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new P("Datasync ID not set",void 0===a?"unknown":a);}
;function Cm(a){var b=new Si;(b=b.isAvailable()?a?new Yi(b,a):b:null)||(a=new Ti(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Oi(a):null;this.i=document.domain||window.location.hostname}
Cm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Hg(b))}catch(f){return}else e=escape(b);dm(a,e,c,this.i)};
Cm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=zg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Cm.prototype.remove=function(a){this.h&&this.h.remove(a);em(a,"/",this.i)};var Dm=function(){var a;return function(){a||(a=new Cm("ytidb"));return a}}();
function Em(){var a;return null==(a=Dm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Fm=[],Gm,Hm=!1;function Im(){var a={};for(Gm=new Jm(void 0===a.handleError?Km:a.handleError,void 0===a.logEvent?Lm:a.logEvent);0<Fm.length;)switch(a=Fm.shift(),a.type){case "ERROR":Gm.handleError(a.payload);break;case "EVENT":Gm.logEvent(a.eventType,a.payload)}}
function Mm(a){Hm||(Gm?Gm.handleError(a):(Fm.push({type:"ERROR",payload:a}),10<Fm.length&&Fm.shift()))}
function Nm(a,b){Hm||(Gm?Gm.logEvent(a,b):(Fm.push({type:"EVENT",eventType:a,payload:b}),10<Fm.length&&Fm.shift()))}
;function Om(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Pm(a){return a.substr(0,a.indexOf(":"))||a}
;var Qm={},Rm=(Qm.AUTH_INVALID="No user identifier specified.",Qm.EXPLICIT_ABORT="Transaction was explicitly aborted.",Qm.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Qm.MISSING_INDEX="Index not created.",Qm.MISSING_OBJECT_STORES="Object stores not created.",Qm.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Qm.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Qm.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Qm.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Qm.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Qm.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Qm.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Qm),Sm={},Tm=(Sm.AUTH_INVALID="ERROR",Sm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Sm.EXPLICIT_ABORT="IGNORED",Sm.IDB_NOT_SUPPORTED="ERROR",Sm.MISSING_INDEX=
"WARNING",Sm.MISSING_OBJECT_STORES="ERROR",Sm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Sm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Sm.QUOTA_EXCEEDED="WARNING",Sm.QUOTA_MAYBE_EXCEEDED="WARNING",Sm.UNKNOWN_ABORT="WARNING",Sm.INCOMPATIBLE_DB_VERSION="WARNING",Sm),Um={},Vm=(Um.AUTH_INVALID=!1,Um.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Um.EXPLICIT_ABORT=!1,Um.IDB_NOT_SUPPORTED=!1,Um.MISSING_INDEX=!1,Um.MISSING_OBJECT_STORES=!1,Um.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Um.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Um.QUOTA_EXCEEDED=!1,Um.QUOTA_MAYBE_EXCEEDED=!0,Um.UNKNOWN_ABORT=!0,Um.INCOMPATIBLE_DB_VERSION=!1,Um);function Wm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Rm[a]:c;d=void 0===d?Tm[a]:d;e=void 0===e?Vm[a]:e;P.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Wm.prototype)}
u(Wm,P);function Xm(a,b){Wm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Rm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Xm.prototype)}
u(Xm,Wm);function Ym(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ym.prototype)}
u(Ym,Error);var Zm=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function $m(a,b,c,d){b=Pm(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Wm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Wm("QUOTA_EXCEEDED",a);if($c&&"UnknownError"===e.name)return new Wm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ym)return new Wm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Zm.some(function(f){return e.message.includes(f)}))return new Wm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Wm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",jc:e.name})];e.level="WARNING";return e}
function an(a,b,c){var d=Em();return new Wm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function bn(a){if(!a)throw Error();throw a;}
function cn(a){return a}
function dn(a){this.h=a}
function en(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
en.all=function(a){return new en(new dn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={za:0};f.za<a.length;f={za:f.za},++f.za)en.resolve(a[f.za]).then(function(g){return function(h){d[g.za]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
en.resolve=function(a){return new en(new dn(function(b,c){a instanceof en?a.then(b,c):b(a)}))};
en.reject=function(a){return new en(new dn(function(b,c){c(a)}))};
en.prototype.then=function(a,b){var c=this,d=null!=a?a:cn,e=null!=b?b:bn;return new en(new dn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){fn(c,c,d,f,g)}),c.i.push(function(){gn(c,c,e,f,g)})):"FULFILLED"===c.state.status?fn(c,c,d,f,g):"REJECTED"===c.state.status&&gn(c,c,e,f,g)}))};
en.prototype.catch=function(a){return this.then(void 0,a)};
function fn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof en?hn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function gn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof en?hn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function hn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof en?hn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function jn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function kn(a){return new Promise(function(b,c){jn(a,b,c)})}
function ln(a){return new en(new dn(function(b,c){jn(a,b,c)}))}
;function mn(a,b){return new en(new dn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var nn=window,Q=nn.ytcsi&&nn.ytcsi.now?nn.ytcsi.now:nn.performance&&nn.performance.timing&&nn.performance.now&&nn.performance.timing.navigationStart?function(){return nn.performance.timing.navigationStart+nn.performance.now()}:function(){return(new Date).getTime()};function on(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
l=on.prototype;l.add=function(a,b,c){return pn(this,[a],{mode:"readwrite",R:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return pn(this,[a],{mode:"readwrite",R:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return pn(this,[a],{mode:"readonly",R:!0},function(c){return c.objectStore(a).count(b)})};
function qn(a,b,c){a=a.h.createObjectStore(b,c);return new rn(a)}
l.delete=function(a,b){return pn(this,[a],{mode:"readwrite",R:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return pn(this,[a],{mode:"readonly",R:!0},function(c){return c.objectStore(a).get(b)})};
function sn(a,b,c){return pn(a,[b],{mode:"readwrite",R:!0},function(d){d=d.objectStore(b);return ln(d.h.put(c,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function pn(a,b,c,d){var e,f,g,h,k,m,q,r,w,t,z,D;return x(function(E){switch(E.h){case 1:var O={mode:"readonly",R:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.R?3:1;g=0;case 2:if(h){E.u(3);break}g++;k=Math.round(Q());za(E,4);m=a.h.transaction(b,e.mode);O=new tn(m);O=un(O,d);return v(E,O,6);case 6:return q=E.i,r=Math.round(Q()),vn(a,k,r,g,void 0,b.join(),e),E.return(q);case 4:w=Ba(E);t=Math.round(Q());z=$m(w,a.h.name,b.join(),a.h.version);
if((D=z instanceof Wm&&!z.h)||g>=f)vn(a,k,t,g,z,b.join(),e),h=z;E.u(2);break;case 3:return E.return(Promise.reject(h))}})}
function vn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Wm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Nm("QUOTA_EXCEEDED",{dbName:Pm(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Wm&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Nm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),wn(a,!1,d,f,b,g.tag),Mm(e)):wn(a,!0,d,f,b,g.tag)}
function wn(a,b,c,d,e,f){Nm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function rn(a){this.h=a}
l=rn.prototype;l.add=function(a,b){return ln(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return ln(this.h.clear()).then(function(){})};
function xn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
l.count=function(a){return ln(this.h.count(a))};
function yn(a,b){return zn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?yn(this,a):ln(this.h.delete(a))};
l.get=function(a){return ln(this.h.get(a))};
l.index=function(a){try{return new An(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ym(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function zn(a,b,c){a=a.h.openCursor(b.query,b.direction);return Bn(a).then(function(d){return mn(d,c)})}
function tn(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Wm;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function un(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
tn.prototype.abort=function(){this.h.abort();this.i=!0;throw new Wm("EXPLICIT_ABORT");};
tn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new rn(a),this.j.set(a,b));return b};
function An(a){this.h=a}
l=An.prototype;l.count=function(a){return ln(this.h.count(a))};
l.delete=function(a){return Cn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return ln(this.h.get(a))};
l.getKey=function(a){return ln(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function Cn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Bn(a).then(function(d){return mn(d,c)})}
function Dn(a,b){this.request=a;this.cursor=b}
function Bn(a){return ln(a).then(function(b){return b?new Dn(a,b):null})}
l=Dn.prototype;l.advance=function(a){this.cursor.advance(a);return Bn(this.request)};
l.continue=function(a){this.cursor.continue(a);return Bn(this.request)};
l.delete=function(){return ln(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return ln(this.cursor.update(a))};function En(a,b,c){return new Promise(function(d,e){function f(){w||(w=new on(g.result,{closed:r}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Gc,k=c.blocking,m=c.wd,q=c.upgrade,r=c.closed,w;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&Nm("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Pm(a)});var z=f(),D=new tn(g.transaction);
q&&q(z,function(E){return t.oldVersion<E&&t.newVersion>=E},D);
D.done.catch(function(E){e(E)})}catch(E){e(E)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Nm("IDB_UNEXPECTEDLY_CLOSED",{dbName:Pm(a),dbVersion:t.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Fn(a,b,c){c=void 0===c?{}:c;return En(a,b,c)}
function Gn(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Gc)&&c.addEventListener("blocked",function(){e()}),v(g,kn(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw $m(f,a,"",-1);})}
;function Hn(a){return new Promise(function(b){wm(function(){b()},a)})}
function In(a,b){this.name=a;this.options=b;this.l=!0;this.o=this.m=0;this.i=500}
In.prototype.j=function(a,b,c){c=void 0===c?{}:c;return Fn(a,b,c)};
In.prototype.delete=function(a){a=void 0===a?{}:a;return Gn(this.name,a)};
function Jn(a,b){return new Wm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Kn(a,b){if(!b)throw an("openWithToken",Pm(a.name));return Ln(a)}
function Ln(a){function b(){var f,g,h,k,m,q,r,w,t,z;return x(function(D){switch(D.h){case 1:return g=null!=(f=Error().stack)?f:"",za(D,2),v(D,a.j(a.name,a.options.version,d),4);case 4:h=D.i;for(var E=a.options,O=[],N=p(Object.keys(E.Da)),R=N.next();!R.done;R=N.next()){R=R.value;var ca=E.Da[R],U=void 0===ca.gd?Number.MAX_VALUE:ca.gd;!(h.h.version>=ca.Ia)||h.h.version>=U||h.h.objectStoreNames.contains(R)||O.push(R)}k=O;if(0===k.length){D.u(5);break}m=Object.keys(a.options.Da);q=h.objectStoreNames();
if(a.o<al("ytidb_reopen_db_retries",0))return a.o++,h.close(),Mm(new Wm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),D.return(b());if(!(a.m<al("ytidb_remake_db_retries",1))){D.u(6);break}a.m++;if(!M("ytidb_remake_db_enable_backoff_delay")){D.u(7);break}return v(D,Hn(a.i),8);case 8:a.i*=2;case 7:return v(D,a.delete(),9);case 9:return Mm(new Wm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),D.return(b());
case 6:throw new Xm(q,m);case 5:return D.return(h);case 2:r=Ba(D);if(r instanceof DOMException?"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){D.u(10);break}return v(D,a.j(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:w=D.i;t=w.h.version;if(void 0!==a.options.version&&t>a.options.version+1)throw w.close(),
a.l=!1,Jn(a,t);return D.return(w);case 10:throw c(),r instanceof Error&&!M("ytidb_async_stack_killswitch")&&(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),$m(r,a.name,"",null!=(z=a.options.version)?z:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.l)throw Jn(a);if(a.h)return a.h;var d={blocking:function(f){f.close()},
closed:c,wd:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var Mn=new In("YtIdbMeta",{Da:{databases:{Ia:1}},upgrade:function(a,b){b(1)&&qn(a,"databases",{keyPath:"actualName"})}});
function Nn(a,b){var c;return x(function(d){if(1==d.h)return v(d,Kn(Mn,b),2);c=d.i;return d.return(pn(c,["databases"],{R:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return ln(f.h.put(a,void 0)).then(function(){})})}))})}
function On(a,b){var c;return x(function(d){if(1==d.h)return a?v(d,Kn(Mn,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Pn(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],v(e,Kn(Mn,b),2)):3!=e.h?(d=e.i,v(e,pn(d,["databases"],{R:!0,mode:"readonly"},function(f){c.length=0;return zn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Qn(a){return Pn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Rn(a,b,c){return Pn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Sn(a){var b,c;return x(function(d){if(1==d.h)return b=Bm("YtIdbMeta hasAnyMeta other"),v(d,Pn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Tn,Un=new function(){}(new function(){});
function Vn(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=Em();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ol)f=/WebKit\/([0-9]+)/.exec(Ub()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ub()),f=!(f&&602<=parseInt(f[1],10)));if(f||Lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,Nn(d,Un),4);case 4:return v(e,On("yt-idb-test-do-not-use",Un),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Wn(){if(void 0!==Tn)return Tn;Hm=!0;return Tn=Vn().then(function(a){Hm=!1;var b;if(null!=(b=Dm())&&b.h){var c;b={hasSucceededOnce:(null==(c=Em())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Dm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Xn(){return B("ytglobal.idbToken_")||void 0}
function Yn(){var a=Xn();return a?Promise.resolve(a):Wn().then(function(b){(b=b?Un:void 0)&&A("ytglobal.idbToken_",b);return b})}
;var Zn=0;function $n(a,b){Zn||(Zn=li.S(function(){var c,d,e,f,g;return x(function(h){switch(h.h){case 1:return v(h,Yn(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return v(h,Rn(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.u(6);break}f=e[0];return v(h,Gn(f.actualName),7);case 7:return v(h,On(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),Mm(g),d=!1;case 4:li.ea(Zn),Zn=0,d&&$n(a,b),h.h=0}})}))}
function ao(){var a;return x(function(b){return 1==b.h?v(b,Yn(),2):(a=b.i)?b.return(Sn(a)):b.return(!1)})}
new Kh;function bo(a){if(!Am())throw a=new Wm("AUTH_INVALID",{dbName:a}),Mm(a),a;var b=Bm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function co(a,b,c,d){var e,f,g,h,k,m;return x(function(q){switch(q.h){case 1:return f=null!=(e=Error().stack)?e:"",v(q,Yn(),2);case 2:g=q.i;if(!g)throw h=an("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Mm(h),h;Om(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:bo(a);za(q,3);return v(q,Nn(k,g),5);case 5:return v(q,Fn(k.actualName,b,d),6);case 6:return q.return(q.i);case 3:return m=Ba(q),za(q,7),v(q,On(k.actualName,g),9);case 9:Aa(q,
8);break;case 7:Ba(q);case 8:throw m;}})}
function eo(a,b,c){c=void 0===c?{}:c;return co(a,b,!1,c)}
function fo(a,b,c){c=void 0===c?{}:c;return co(a,b,!0,c)}
function go(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return v(e,Yn(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Om(a);d=bo(a);return v(e,Gn(d.actualName,b),3)}return v(e,On(d.actualName,c),0)})}
function ho(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?v(e,Gn(d.actualName,b),2):v(e,On(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function io(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return v(d,Yn(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Om("LogsDatabaseV2");return v(d,Qn(b),3)}c=d.i;return v(d,ho(c,a,b),0)})}
function jo(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return v(d,Yn(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Om(a);return v(d,Gn(a,b),3)}return v(d,On(a,c),0)})}
;function ko(a,b){In.call(this,a,b);this.options=b;Om(a)}
u(ko,In);function lo(a,b){var c;return function(){c||(c=new ko(a,b));return c}}
ko.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.pb?fo:eo)(a,b,Object.assign({},c))};
ko.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.pb?jo:go)(this.name,a)};
function mo(a,b){return lo(a,b)}
;var no={},oo=mo("ytGcfConfig",{Da:(no.coldConfigStore={Ia:1},no.hotConfigStore={Ia:1},no),pb:!1,upgrade:function(a,b){b(1)&&(xn(qn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),xn(qn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function po(a){return Kn(oo(),a)}
function qo(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:Q()},v(g,po(c),2);case 2:return e=g.i,v(g,e.clear("hotConfigStore"),3);case 3:return v(g,sn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function ro(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:Q()},v(h,po(d),2);case 2:return f=h.i,v(h,f.clear("coldConfigStore"),3);case 3:return v(h,sn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function so(a){var b,c;return x(function(d){return 1==d.h?v(d,po(a),2):3!=d.h?(b=d.i,c=void 0,v(d,pn(b,["coldConfigStore"],{mode:"readwrite",R:!0},function(e){return Cn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function to(a){var b,c;return x(function(d){return 1==d.h?v(d,po(a),2):3!=d.h?(b=d.i,c=void 0,v(d,pn(b,["hotConfigStore"],{mode:"readwrite",R:!0},function(e){return Cn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function uo(){}
function vo(a,b,c){var d,e,f;return x(function(g){if(1==g.h){if(!M("update_log_event_config"))return g.u(0);c&&(a.h=c,A("yt.gcf.config.hotConfigGroup",a.h));a.hotHashData=b;A("yt.gcf.config.hotHashData",a.hotHashData);return(d=Xn())?c?g.u(4):v(g,to(d),5):g.u(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return v(g,qo(c,b,d),0)})}
function wo(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!M("update_log_event_config"))return h.u(0);a.coldHashData=b;A("yt.gcf.config.coldHashData",a.coldHashData);return(d=Xn())?c?h.u(4):v(h,so(d),5):h.u(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.u(0);g=c.configData;return v(h,ro(c,b,g,d),0)})}
;function xo(){return"INNERTUBE_API_KEY"in Xk&&"INNERTUBE_API_VERSION"in Xk}
function yo(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),yb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),cc:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Tc:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),ec:L("INNERTUBE_CONTEXT_HL"),dc:L("INNERTUBE_CONTEXT_GL"),Uc:L("INNERTUBE_HOST_OVERRIDE")||"",Wc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Vc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function zo(a){var b={client:{hl:a.ec,gl:a.dc,clientName:a.cc,clientVersion:a.innertubeContextClientVersion,configInfo:a.yb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=bl();""!==c&&(b.client.experimentsToken=c);c=cl();0<c.length&&(b.request={internalExperimentFlags:c});Ao(a,void 0,b);M("enable_third_party_info")&&Bo(void 0,b);Co(void 0,b);Do(a,void 0,b);Eo(void 0,b);M("start_sending_config_hash")&&
Fo(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(rl(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,
e);return b}
function Go(a){var b=new sj,c=new jj;F(c,1,a.ec);F(c,2,a.dc);F(c,16,a.Tc);F(c,17,a.innertubeContextClientVersion);if(a.yb){var d=a.yb,e=new fj;d.coldConfigData&&F(e,1,d.coldConfigData);d.appInstallData&&F(e,6,d.appInstallData);d.coldHashData&&F(e,3,d.coldHashData);d.hotHashData&&F(e,5,d.hotHashData);G(c,fj,62,e)}if((d=y.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float field must be a number|null|undefined, found "+typeof d+": "+d);F(c,65,d)}d=bl();""!==d&&F(c,54,
d);d=cl();if(0<d.length){e=new lj;for(var f=0;f<d.length;f++){var g=new dj;F(g,1,d[f].key);Xd(g,2,ej,d[f].value);ee(e,15,dj,g)}G(b,lj,5,e)}Ao(a,c);M("enable_third_party_info")&&Bo(b);Co(c);Do(a,c);Eo(c);M("start_sending_config_hash")&&Fo(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new qj,F(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(rl(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?F(c,12,e):"cmodel"===d?F(c,
13,e):"cbr"===d?F(c,87,e):"cbrver"===d?F(c,88,e):"cos"===d?F(c,18,e):"cosver"===d?F(c,19,e):"cplatform"===d&&F(c,42,e);b.i(c);return b}
function Ao(a,b,c){a=a.cc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Zd(b,gj,96)||new gj;var d=cm();d=Object.keys(zj).indexOf(d);d=-1===d?null:d;null!==d&&F(c,3,d);G(b,gj,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=cm())}
function Bo(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=Zd(a,nj,7)||new nj,F(b,4,c),G(a,nj,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Co(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?F(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Do(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Zd(b,fj,62))?d:new fj;F(c,6,a.appInstallData);G(b,fj,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Eo(a,b){var c=rm();c&&(a?F(a,61,nm[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=sm())&&(a?F(a,94,om[c]):b&&(b.client.effectiveConnectionType=c))}
function Ho(a,b,c){c=void 0===c?{}:c;var d={};L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.wr||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().vr:b=Dg([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
function Fo(a,b){uo.h||(uo.h=new uo);var c=B("yt.gcf.config.coldConfigData");var d=B("yt.gcf.config.hotHashData");var e=B("yt.gcf.config.coldHashData");if(c&&e&&d)if(a){var f;b=null!=(f=Zd(a,fj,62))?f:new fj;F(b,1,c);F(b,3,e);F(b,5,d);G(a,fj,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=e,b.client.configInfo.hotHashData=d)}
;function Io(a){a=Object.assign({},a);delete a.Authorization;var b=Dg();if(b){var c=new ri;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=cd(c.digest(),3)}return a}
;var Jo;function Ko(){Jo||(Jo=new Cm("yt.innertube"));return Jo}
function Lo(a,b,c,d){if(d)return null;d=Ko().get("nextId",!0)||1;var e=Ko().get("requests",!0)||{};e[d]={method:a,request:b,authState:Io(c),requestTime:Math.round(Q())};Ko().set("nextId",d+1,86400,!0);Ko().set("requests",e,86400,!0);return d}
function Mo(a){var b=Ko().get("requests",!0)||{};delete b[a];Ko().set("requests",b,86400,!0)}
function No(a){var b=Ko().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=Io(Ho(!1));vb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),Oo(a,d.method,e,{}));delete b[c]}}Ko().set("requests",b,86400,!0)}}
;function Po(a){this.bb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Ca=function(){};
this.now=Date.now;this.Ja=!1;var b;this.tc=null!=(b=a.tc)?b:100;var c;this.oc=null!=(c=a.oc)?c:1;var d;this.mc=null!=(d=a.mc)?d:2592E6;var e;this.kc=null!=(e=a.kc)?e:12E4;var f;this.nc=null!=(f=a.nc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.gb=!!a.gb;var h;this.fb=null!=(h=a.fb)?h:.1;var k;this.lb=null!=(k=a.lb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ca&&(this.Ca=a.Ca);a.Ja&&(this.Ja=a.Ja);a.bb&&(this.bb=a.bb);this.G=a.G;this.Z=a.Z;this.N=a.N;this.L=a.L;this.ja=a.ja;this.Eb=
a.Eb;this.Db=a.Db;Qo(this)&&(!this.G||this.G("networkless_logging"))&&Ro(this)}
function Ro(a){Qo(a)&&!a.Ja&&(a.h=!0,a.gb&&Math.random()<=a.fb&&a.N.Ic(a.I),So(a),a.L.U()&&a.Qa(),a.L.ia(a.Eb,a.Qa.bind(a)),a.L.ia(a.Db,a.Rb.bind(a)))}
l=Po.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Qo(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.L.U()&&To(c,d)}).catch(function(e){To(c,d);
Uo(c,e)})}else this.ja(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Qo(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.G&&this.G("nwl_skip_retry")&&(e.skipRetry=c);if(this.L.U()||this.G&&this.G("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return v(k,d.N.set(e,d.I).catch(function(m){Uo(d,m)}),2);
f(g,h);k.h=0})}}this.ja(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.ja(a,b,e.skipRetry);
Uo(d,g)})}else this.ja(a,b,this.G&&this.G("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Qo(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Ba(d.id,c.I):e=!0;c.L.wa&&c.G&&c.G("vss_network_hint")&&c.L.wa(!0);f(g,h)};
this.ja(d.url,d.options);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Ba(d.id,c.I)}).catch(function(g){Uo(c,g)})}else this.ja(a,b)};
l.Qa=function(){var a=this;if(!Qo(this))throw an("throttleSend");this.i||(this.i=this.Z.S(function(){var b;return x(function(c){if(1==c.h)return v(c,a.N.ac("NEW",a.I),2);if(3!=c.h)return b=c.i,b?v(c,To(a,b),3):(a.Rb(),c.return());a.i&&(a.i=0,a.Qa());c.h=0})},this.tc))};
l.Rb=function(){this.Z.ea(this.i);this.i=0};
function To(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!Qo(a))throw c=an("immediateSend"),c;if(void 0===b.id){e.u(2);break}return v(e,a.N.Yc(b.id,a.I),3);case 3:if(d=e.i){if(a.G&&!a.G("nwl_send_from_memory_when_online")||void 0===a.G)b=d}else a.Ca(Error("The request cannot be found in the database."));case 2:if(Vo(a,b,a.mc)){e.u(4);break}a.Ca(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return v(e,a.N.Ba(b.id,a.I),5);case 5:return e.return();
case 4:b.skipRetry||(b=Wo(a,b));if(!b){e.u(0);break}if(!b.skipRetry||void 0===b.id){e.u(8);break}return v(e,a.N.Ba(b.id,a.I),8);case 8:a.ja(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Wo(a,b){if(!Qo(a))throw an("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(m){switch(m.h){case 1:g=Xo(f);if(!(a.G&&a.G("nwl_consider_error_code")&&g||a.G&&!a.G("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.lb)){m.u(2);break}if(!a.L.ob){m.u(3);break}return v(m,a.L.ob(),3);case 3:if(a.L.U()){m.u(2);break}c(e,f);if(!a.G||!a.G("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return v(m,a.N.Ib(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.G&&a.G("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.lb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.oc?v(m,a.N.Ib(b.id,a.I),12):v(m,a.N.Ba(b.id,a.I),8);case 12:a.Z.S(function(){a.L.U()&&a.Qa()},a.nc);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):v(h,a.N.Ba(b.id,a.I),2);a.L.wa&&a.G&&a.G("vss_network_hint")&&a.L.wa(!0);d(e,f);h.h=0})};
return b}
function Vo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function So(a){if(!Qo(a))throw an("retryQueuedRequests");a.N.ac("QUEUED",a.I).then(function(b){b&&!Vo(a,b,a.kc)?a.Z.S(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.u(2):v(c,a.N.Ib(b.id,a.I),2);So(a);c.h=0})}):a.L.U()&&a.Qa()})}
function Uo(a,b){a.yc&&!a.L.U()?a.yc(b):a.handleError(b)}
function Qo(a){return!!a.I||a.bb}
function Xo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Yo(a,b){this.version=a;this.args=b}
;function Zo(a,b){this.topic=a;this.h=b}
Zo.prototype.toString=function(){return this.topic};var $o=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ga;K.prototype.publish=K.prototype.sa;K.prototype.clear=K.prototype.clear;A("ytPubsub2Pubsub2Instance",$o);var ap=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",ap);var bp=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",bp);var cp=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",cp);
A("ytPubsub2Pubsub2SkipSubKey",null);function dp(a,b){var c=ep();c&&c.publish.call(c,a.toString(),a,b)}
function fp(a){var b=gp,c=ep();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(ap[d])try{if(f&&b instanceof Zo&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.qa){var m=new h;h.qa=m.version}var q=h.qa}catch(E){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var r=q.construct;
var w=k.args,t=w.length;if(0<t){var z=Array(t);for(k=0;k<t;k++)z[k]=w[k];var D=z}else D=[];f=r.call(q,h,D)}catch(E){throw E.message="yt.pubsub2.Data.deserialize(): "+E.message,E;}}catch(E){throw E.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+E.message,E;}a.call(window,f)}catch(E){jl(E)}},cp[b.toString()]?B("yt.scheduler.instance")?li.S(g):Al(g,0):g())});
ap[d]=!0;bp[b.toString()]||(bp[b.toString()]=[]);bp[b.toString()].push(d);return d}
function hp(){var a=ip,b=fp(function(c){a.apply(void 0,arguments);jp(b)});
return b}
function jp(a){var b=ep();b&&("number"===typeof a&&(a=[a]),hb(a,function(c){b.unsubscribeByKey(c);delete ap[c]}))}
function ep(){return B("ytPubsub2Pubsub2Instance")}
;var kp;
function lp(){if(kp)return kp();var a={};kp=mo("LogsDatabaseV2",{Da:(a.LogsRequestsStore={Ia:2},a),pb:!1,upgrade:function(b,c,d){c(2)&&qn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),xn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return kp()}
;function mp(a){return Kn(lp(),a)}
function np(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,mp(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,sn(d,"LogsRequestsStore",e),3);f=g.i;c.yd=Q();op(c);return g.return(f)})}
function pp(a,b){var c,d,e,f,g,h,k;return x(function(m){if(1==m.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(m,mp(b),2);if(3!=m.h)return d=m.i,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Q()],h=IDBKeyRange.bound(f,g),k=void 0,v(m,pn(d,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(q){return Cn(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===a&&(k.status="QUEUED",
r.update(k)))})}),3);
c.yd=Q();op(c);return m.return(k)})}
function qp(a,b){var c;return x(function(d){if(1==d.h)return v(d,mp(b),2);c=d.i;return d.return(pn(c,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",ln(f.h.put(g,void 0)).then(function(){return g})})}))})}
function rp(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return v(e,mp(b),2);d=e.i;return e.return(pn(d,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),ln(g.h.put(h,void 0)).then(function(){return h})):en.resolve(void 0)})}))})}
function sp(a,b){var c;return x(function(d){if(1==d.h)return v(d,mp(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function tp(a){var b,c;return x(function(d){if(1==d.h)return v(d,mp(a),2);b=d.i;c=Q()-2592E6;return v(d,pn(b,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(e){return zn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function up(){x(function(a){return v(a,io(),0)})}
function op(a){M("nwl_csi_killswitch")||.01>=Math.random()&&dp("nwl_transaction_latency_payload",a)}
;var vp={},wp=mo("ServiceWorkerLogsDatabase",{Da:(vp.SWHealthLog={Ia:1},vp),pb:!0,upgrade:function(a,b){b(1)&&xn(qn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function xp(a){return Kn(wp(),a)}
function yp(a){var b,c;x(function(d){if(1==d.h)return v(d,xp(a),2);b=d.i;c=Q()-2592E6;return v(d,pn(b,["SWHealthLog"],{mode:"readwrite",R:!0},function(e){return zn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function zp(a){var b;return x(function(c){if(1==c.h)return v(c,xp(a),2);b=c.i;return v(c,b.clear("SWHealthLog"),0)})}
;var Ap={},Bp=0;function Cp(a){var b=new Image,c=""+Bp++;Ap[c]=b;b.onload=b.onerror=function(){delete Ap[c]};
b.src=a}
;function Dp(){this.h=new Map;this.i=!1}
function Rp(){if(!Dp.h){var a=B("yt.networkRequestMonitor.instance")||new Dp;A("yt.networkRequestMonitor.instance",a);Dp.h=a}return Dp.h}
Dp.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Dp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Dp.prototype.removeParams=function(a){return a.split("?")[0]};
Dp.prototype.removeParams=Dp.prototype.removeParams;Dp.prototype.isEndpointCFR=Dp.prototype.isEndpointCFR;Dp.prototype.requestComplete=Dp.prototype.requestComplete;Dp.getInstance=Rp;var pq;function qq(){pq||(pq=new Cm("yt.offline"));return pq}
function rq(a){if(M("offline_error_handling")){var b=qq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);qq().set("errors",b,2592E3,!0)}}
;function sq(){ff.call(this);var a=this;this.j=!1;this.i=ki();this.i.ia("networkstatus-online",function(){if(a.j&&M("offline_error_handling")){var b=qq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new P(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;jl(d)}qq().set("errors",{},2592E3,!0)}}})}
u(sq,ff);function tq(){if(!sq.h){var a=B("yt.networkStatusManager.instance")||new sq;A("yt.networkStatusManager.instance",a);sq.h=a}return sq.h}
l=sq.prototype;l.U=function(){return this.i.U()};
l.wa=function(a){this.i.i=a};
l.Rc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Mc=function(){this.j=!0};
l.ia=function(a,b){return this.i.ia(a,b)};
l.ob=function(a){a=ii(this.i,a);a.then(function(b){M("use_cfr_monitor")&&Rp().requestComplete("generate_204",b)});
return a};
sq.prototype.sendNetworkCheckRequest=sq.prototype.ob;sq.prototype.listen=sq.prototype.ia;sq.prototype.enableErrorFlushing=sq.prototype.Mc;sq.prototype.getWindowStatus=sq.prototype.Rc;sq.prototype.networkStatusHint=sq.prototype.wa;sq.prototype.isNetworkAvailable=sq.prototype.U;sq.getInstance=tq;function uq(a){a=void 0===a?{}:a;ff.call(this);var b=this;this.i=this.o=0;this.j=tq();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.nb?(this.nb=a.nb,c("networkstatus-online",function(){vq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){vq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){gf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){gf(b,"publicytnetworkstatus-offline")})))}
u(uq,ff);uq.prototype.U=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
uq.prototype.wa=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
uq.prototype.ob=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return M("skip_network_check_if_cfr")&&Rp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.wa((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.U())})):c?d.return(c(a)):d.return(!0)})};
function vq(a,b){a.nb?a.i?(li.ea(a.o),a.o=li.S(function(){a.m!==b&&(gf(a,b),a.m=b,a.i=Q())},a.nb-(Q()-a.i))):(gf(a,b),a.m=b,a.i=Q()):gf(a,b)}
;var wq;function xq(){var a=Po.call;wq||(wq=new uq({Ir:!0,Cr:!0}));a.call(Po,this,{N:{Ic:tp,Ba:sp,ac:pp,Yc:qp,Ib:rp,set:np},L:wq,handleError:jl,Ca:kl,ja:yq,now:Q,yc:rq,Z:zm(),Eb:"publicytnetworkstatus-online",Db:"publicytnetworkstatus-offline",gb:!0,fb:.1,lb:al("potential_esf_error_limit",10),G:M,Ja:!(Am()&&zq())});this.j=new Kh;M("networkless_immediately_drop_all_requests")&&up();jo("LogsDatabaseV2")}
u(xq,Po);function Aq(){var a=B("yt.networklessRequestController.instance");a||(a=new xq,A("yt.networklessRequestController.instance",a),M("networkless_logging")&&Yn().then(function(b){a.I=b;Ro(a);a.j.resolve();a.gb&&Math.random()<=a.fb&&a.I&&yp(a.I);M("networkless_immediately_drop_sw_health_store")&&Bq(a)}));
return a}
xq.prototype.writeThenSend=function(a,b){b||(b={});Am()||(this.h=!1);Po.prototype.writeThenSend.call(this,a,b)};
xq.prototype.sendThenWrite=function(a,b,c){b||(b={});Am()||(this.h=!1);Po.prototype.sendThenWrite.call(this,a,b,c)};
xq.prototype.sendAndWrite=function(a,b){b||(b={});Am()||(this.h=!1);Po.prototype.sendAndWrite.call(this,a,b)};
xq.prototype.awaitInitialization=function(){return this.j.promise};
function Bq(a){var b;x(function(c){if(!a.I)throw b=an("clearSWHealthLogsDb"),b;return c.return(zp(a.I).catch(function(d){a.handleError(d)}))})}
function yq(a,b,c){M("use_cfr_monitor")&&Cq(a,b);if(M("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Q())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Q())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Jl(a,void 0,"POST",e);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Jl(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new db({url:a});if(g.j&&g.i||
g.l){var h=nc(oc(5,a)),k;if(!(k=!h||!h.endsWith("/aclk"))){var m=a.search(zc),q=yc(a,0,"ri",m);if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>m)w=m;r=decodeURIComponent(a.slice(q+3,-1!==w?w:0).replace(/\+/g," "))}k="1"!==r}var t=!k;break b}}catch(D){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(D){}z=!1}c=z?!0:!1}else c=!1;c||Cp(a)}}else Gl(a,b)}
function Cq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Rp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Rp().requestComplete(a,!0);d(e,f)}}
function zq(){return"www.youtube-nocookie.com"!==pc(document.location.toString())}
;var Dq=!1,Eq=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Dq};A("ytNetworklessLoggingInitializationOptions",Eq);function Fq(){var a;x(function(b){if(1==b.h)return v(b,Yn(),2);a=b.i;if(!a||!Am()&&!M("nwl_init_require_datasync_id_killswitch")||!zq())return b.u(0);Dq=!0;Eq.isNwlInitialized=Dq;return v(b,Aq().awaitInitialization(),0)})}
;function Gq(a){var b=this;this.config_=null;a?this.config_=a:xo()&&(this.config_=yo());um(function(){No(b)},5E3)}
Gq.prototype.isReady=function(){!this.config_&&xo()&&(this.config_=yo());return!!this.config_};
function Oo(a,b,c,d){function e(z){z=void 0===z?!1:z;var D;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(D=Lo(b,c,m,k)),D)){var E=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(N,R){Mo(D);E(N,R)};
c.onFetchSuccess=function(N,R){Mo(D);O(N,R)}}try{z&&d.retry&&!d.hc.bypassNetworkless?(g.method="POST",d.hc.writeThenSend?Aq().writeThenSend(t,g):Aq().sendAndWrite(t,g)):M("web_all_payloads_via_jspb")?Gl(t,g):(g.method="POST",g.postParams||(g.postParams={}),Gl(t,g))}catch(N){if("InvalidAccessError"==N.name)D&&(Mo(D),D=0),kl(Error("An extension is blocking network request."));
else throw N;}D&&um(function(){No(a)},5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&kl(new P("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new P("innertube xhrclient not ready",b,c,d);jl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,D){if(d.onSuccess)d.onSuccess(D)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,D){if(d.onError)d.onError(D)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Uc)&&(h=f);var k=a.config_.Wc||!1,m=Ho(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},w=a.config_.Vc&&f;w=w&&f.startsWith("Bearer");w||(r.key=a.config_.innertubeApiKey);var t=tl(""+h+q,r||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
Eq.isNwlInitialized:Dq)?Wn().then(function(z){e(z)}):e(!1)}
;var Hq=0,Iq=Nc?"webkit":Mc?"moz":Kc?"ms":Jc?"o":"";A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Hq});var Jq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Kq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Jq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Lq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Kq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Kq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Kq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var rb=y.ytEventsEventsListeners||{};A("ytEventsEventsListeners",rb);var Mq=y.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",Mq);
function Nq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return pb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Sa(e[4])&&Sa(d)&&vb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Oq=fb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Pq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Nq(a,b,c,d);if(e)return e;e=++Mq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Kq(h);if(!qf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Kq(h);
h.currentTarget=a;return c.call(a,h)};
g=il(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Oq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);rb[e]=[a,b,c,g,d];return e}
function Qq(a){a&&("string"==typeof a&&(a=[a]),hb(a,function(b){if(b in rb){var c=rb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Oq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete rb[b]}}))}
;var Rq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Sq(a){this.F=a;this.i=null;this.m=0;this.s=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.K=Pq(window,"mousemove",Za(this.O,this));a=Za(this.J,this);"function"===typeof a&&(a=il(a));this.P=window.setInterval(a,25)}
ab(Sq,J);Sq.prototype.O=function(a){void 0===a.h&&Lq(a);var b=a.h;void 0===a.i&&Lq(a);this.i=new mf(b,a.i)};
Sq.prototype.J=function(){if(this.i){var a=Rq();if(0!=this.m){var b=this.s,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.F();this.o=d}this.m=a;this.s=this.i;this.l=(this.l+1)%4}};
Sq.prototype.C=function(){window.clearInterval(this.P);Qq(this.K)};var Tq={};
function Uq(a){var b=void 0===a?{}:a;a=void 0===b.dd?!1:b.dd;b=void 0===b.Nc?!0:b.Nc;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Vq();Pq(document,"keydown",Vq);Pq(document,"keyup",Vq);Pq(document,"mousedown",Vq);Pq(document,"mouseup",Vq);a?Pq(window,"touchmove",function(){Wq("touchmove",200)},{passive:!0}):(Pq(window,"resize",function(){Wq("resize",200)}),b&&Pq(window,"scroll",function(){Wq("scroll",200)}));
new Sq(function(){Wq("mouse",100)});
Pq(document,"touchstart",Vq,{passive:!0});Pq(document,"touchend",Vq,{passive:!0})}}
function Wq(a,b){Tq[a]||(Tq[a]=!0,li.S(function(){Vq();Tq[a]=!1},b))}
function Vq(){null==B("_lact",window)&&Uq();var a=Date.now();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Xq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Yq=y.ytPubsubPubsubInstance||new K,Zq=y.ytPubsubPubsubSubscribedKeys||{},$q=y.ytPubsubPubsubTopicToKeys||{},ar=y.ytPubsubPubsubIsSynchronous||{};function br(a,b){var c=cr();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Zq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{ar[a]?f():Al(f,0)}catch(g){jl(g)}},void 0);
Zq[d]=!0;$q[a]||($q[a]=[]);$q[a].push(d);return d}return 0}
function dr(a){var b=cr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),hb(a,function(c){b.unsubscribeByKey(c);delete Zq[c]}))}
function er(a,b){var c=cr();c&&c.publish.apply(c,arguments)}
function fr(a){var b=cr();if(b)if(b.clear(a),a)gr(a);else for(var c in $q)gr(c)}
function cr(){return y.ytPubsubPubsubInstance}
function gr(a){$q[a]&&(a=$q[a],hb(a,function(b){Zq[b]&&delete Zq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ga;K.prototype.publish=K.prototype.sa;K.prototype.clear=K.prototype.clear;A("ytPubsubPubsubInstance",Yq);A("ytPubsubPubsubTopicToKeys",$q);A("ytPubsubPubsubIsSynchronous",ar);A("ytPubsubPubsubSubscribedKeys",Zq);var hr=Symbol("injectionDeps");function ir(a){this.name=a}
ir.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function jr(){this.key=kr}
function lr(){this.h=new Map;this.i=new Map}
lr.prototype.resolve=function(a){return a instanceof jr?mr(this,a.key,[],!0):mr(this,a,[])};
function mr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(d.wc)var e=d.wc;else if(d.Bd)e=d[hr]?nr(a,d[hr],c):[],e=d.Bd.apply(d,ja(e));else if(d.vc){e=d.vc;var f=e[hr]?nr(a,e[hr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Sr||a.i.set(b,e);return e}
function nr(a,b,c){return b?b.map(function(d){return d instanceof jr?mr(a,d.key,c,!0):mr(a,d,c)}):[]}
;var or;function pr(){or||(or=new lr);return or}
;function qr(){this.store={};this.h={}}
qr.prototype.storePayload=function(a,b){a=rr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
qr.prototype.extractMatchingEntries=function(a){a=sr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
qr.prototype.getSequenceCount=function(a){a=sr(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function sr(a,b){var c=rr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&rr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(tr(b.auth,g[0])){var h=b.isJspb;tr(void 0===h?"undefined":h?"true":"false",g[1])&&tr(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function tr(a,b){return void 0===a||"undefined"===a?!0:a===b}
qr.prototype.getSequenceCount=qr.prototype.getSequenceCount;qr.prototype.extractMatchingEntries=qr.prototype.extractMatchingEntries;qr.prototype.storePayload=qr.prototype.storePayload;function rr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;function ur(a,b){if(a)return a[b.name]}
;var vr=al("initial_gel_batch_timeout",2E3),wr=al("gel_queue_timeout_max_ms",6E4),xr=Math.pow(2,16)-1,yr=void 0;function zr(){this.j=this.h=this.i=0}
var Ar=new zr,Br=new zr,Cr,Dr=!0,Er=y.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Er);var Fr=y.ytLoggingTransportGELProtoQueue_||new Map;A("ytLoggingTransportGELProtoQueue_",Fr);var Gr=y.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Gr);var Hr=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};A("ytLoggingTransportTokensToJspbCttTargetIds_",Hr);var Ir={};function Jr(){var a=B("yt.logging.ims");a||(a=new qr,A("yt.logging.ims",a));return a}
function Kr(a,b){M("web_all_payloads_via_jspb")&&kl(new P("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Lr(a);var c=Mr(a);if(M("use_new_in_memory_storage")){Ir[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Jr().storePayload(d,a.payload);Nr(b,[],c,!1,d)}else d=Er.get(c)||[],Er.set(c,d),d.push(a.payload),Nr(b,d,c)}}
function Or(a,b){if("log_event"===a.endpoint){Lr(void 0,a);var c=Mr(a,!0);if(M("use_new_in_memory_storage")){Ir[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Jr().storePayload(d,a.payload.toJSON());Nr(b,[],c,!0,d)}else d=Fr.get(c)||[],Fr.set(c,d),a=a.payload.toJSON(),d.push(a),Nr(b,d,c,!0)}}
function Nr(a,b,c,d,e){d=void 0===d?!1:d;a&&(yr=new a);a=al("tvhtml5_logging_max_batch_ads_fork")||al("tvhtml5_logging_max_batch")||al("web_logging_max_batch")||100;var f=Q(),g=d?Br.j:Ar.j;b=b.length;e&&(b=Jr().getSequenceCount(e));b>=a?Cr||(Cr=Pr(function(){Qr({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d);Cr=void 0},0)):10<=f-g&&(Rr(d),d?Br.j=f:Ar.j=f)}
function Sr(a,b){M("web_all_payloads_via_jspb")&&kl(new P("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Lr(a);var c=Mr(a),d=new Map;d.set(c,[a.payload]);b&&(yr=new b);return new Cf(function(e,f){yr&&yr.isReady()?Tr(d,yr,e,f,{bypassNetworkless:!0},!0):e()})}}
function Ur(a,b){if("log_event"===a.endpoint){Lr(void 0,a);var c=Mr(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(yr=new b);return new Cf(function(e){yr&&yr.isReady()?Vr(d,yr,e,{bypassNetworkless:!0},!0):e()})}}
function Mr(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Kk;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Xd(d,2,Lk,c.playlistId);Hr[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Gr[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Qr(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&M("web_all_payloads_via_jspb")&&kl(new P("transport.flushLogs called for JSON in JSPB only experiment"));new Cf(function(d,e){c?(Wr(Br.i),Wr(Br.h),Br.h=0):(Wr(Ar.i),Wr(Ar.h),Ar.h=0);if(yr&&yr.isReady())if(M("use_new_in_memory_storage")){var f=a,g=c,h=yr;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=Jr().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),Vr(k,h,d,f)):(k=Jr().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),m.set(b,k),Tr(m,h,d,e,f));else if(g){e=p(Object.keys(Ir));for(g=e.next();!g.done;g=e.next())m=g.value,g=Jr().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),delete Ir[m];Vr(k,h,d,f)}else{k=p(Object.keys(Ir));for(g=k.next();!g.done;g=k.next()){g=g.value;var q=Jr().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<q.length&&m.set(g,q);delete Ir[g]}Tr(m,h,d,e,f)}}else f=a,k=c,h=yr,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Fr.get(b)||[],e.set(b,
k),Vr(e,h,d,f),Fr.delete(b)):(k=new Map,m=Er.get(b)||[],k.set(b,m),Tr(k,h,d,e,f),Er.delete(b)):k?(Vr(Fr,h,d,f),Fr.clear()):(Tr(Er,h,d,e,f),Er.clear());else Rr(c),d()})}
function Rr(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Ar.h||a&&!Br.h)){var b=Pr(function(){Qr({writeThenSend:!0},void 0,a)},wr);
a?Br.h=b:Ar.h=b}Wr(a?Br.i:Ar.i);b=L("LOGGING_BATCH_TIMEOUT",al("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Dr&&(b=vr);b=Pr(function(){Qr({writeThenSend:!0},void 0,a)},b);
a?Br.i=b:Ar.i=b}
function Tr(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(Q()),h=a.size,k={};a=p(a);for(var m=a.next();!m.done;k={Ta:k.Ta,ra:k.ra,Ea:k.Ea,Va:k.Va,Ua:k.Ua},m=a.next()){var q=p(m.value);m=q.next().value;q=q.next().value;k.ra=xb({context:zo(b.config_||yo())});if(!Ra(q)&&!M("throw_err_when_logevent_malformed_killswitch")){d();break}k.ra.events=q;(q=Gr[m])&&Xr(k.ra,m,q);delete Gr[m];k.Ea="visitorOnlyApprovedKey"===m;Yr(k.ra,g,k.Ea);Zr(e);k.Va=function(r){M("update_log_event_config")&&li.S(function(){return x(function(w){return v(w,
$r(r),0)})});
h--;h||c()};
k.Ta=0;k.Ua=function(r){return function(){r.Ta++;if(e.bypassNetworkless&&1===r.Ta)try{Oo(b,"log_event",r.ra,as({writeThenSend:!0},r.Ea,r.Va,r.Ua,f)),Dr=!1}catch(w){jl(w),d()}h--;h||c()}}(k);
try{Oo(b,"log_event",k.ra,as(e,k.Ea,k.Va,k.Ua,f)),Dr=!1}catch(r){jl(r),d()}}}
function Vr(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(Q()),g=a.size,h=new Map([].concat(ja(a)));h=p(h);for(var k=h.next();!k.done;k=h.next()){var m=p(k.value).next().value,q=a.get(m);k=new Mk;var r=Go(b.config_||yo());G(k,sj,1,r);q=q?bs(q):[];q=p(q);for(r=q.next();!r.done;r=q.next())ee(k,3,Gk,r.value);(q=Hr[m])&&cs(k,m,q);delete Hr[m];m="visitorOnlyApprovedKey"===m;ds(k,f,m);Zr(d);k=me(k);m=as(d,m,function(w){M("update_log_event_config")&&li.S(function(){return x(function(t){return v(t,$r(w),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;Oo(b,"log_event","",m);Dr=!1}}
function Zr(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function as(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,hc:a,dangerousLogToVisitorSession:b,yr:!!e,headers:{},postBodyFormat:"",postBody:""};es()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Q())));return a}
function Yr(a,b,c){es()||(a.requestTimeMs=String(b));M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=fs(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ds(a,b,c){es()||F(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=fs();var d=new Jk;F(d,1,b);F(d,2,c);G(a,Jk,5,d)}}
function fs(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*xr/2));a++;a>xr&&(a=1);Yk("BATCH_CLIENT_COUNTER",a);return a}
function Xr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function cs(a,b,c){if(fe(c,1===Yd(c,Lk)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,Kk,4,c);a=Zd(a,sj,1)||new sj;c=Zd(a,qj,3)||new qj;var e=new pj;F(e,2,b);F(e,1,d);ee(c,12,pj,e);G(a,qj,3,c)}
function bs(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Gk(a[c]))}catch(d){jl(new P("Transport failed to deserialize "+String(a[c])))}return b}
function Lr(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);A("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function es(){return M("use_request_time_ms_header")||M("lr_use_request_time_ms_header")}
function Pr(a,b){return M("transport_use_scheduler")?um(a,b):Al(a,b)}
function Wr(a){M("transport_use_scheduler")?li.ea(a):window.clearTimeout(a)}
function $r(a){var b,c,d,e,f,g,h,k,m,q;return x(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=ur(d,bj),g=null==(f=d)?void 0:f.hotHashData,h=ur(d,aj),m=null==(k=d)?void 0:k.coldHashData,q=pr().resolve(uo),g?e?v(r,vo(q,g,e),2):v(r,vo(q,g),2):r.u(2)):m?h?v(r,wo(q,m,h),0):v(r,wo(q,m),0):r.u(0)})}
;var gs=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",gs);
function hs(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;M("enable_unknown_lact_fix_on_html5")&&Uq();a=Xq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:is(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete gs[d.sequenceGroup]);(d.sendIsolatedPayload?Sr:Kr)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function js(a){Qr(void 0,void 0,void 0===a?!1:a)}
function is(a){gs[a]=a in gs?gs[a]+1:0;return gs[a]}
;var ks=[];function Lm(a,b,c){c=void 0===c?{}:c;var d=Gq;L("ytLoggingEventsDefaultDisabled",!1)&&Gq===Gq&&(d=null);M("web_all_payloads_via_jspb")?ks.push({Fb:a,payload:b,options:c}):hs(a,b,d,c)}
;var ls=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",ls);
function ms(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||Q());F(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Xq();d=new Fk;F(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;var f=is(e),g=new Ek;F(g,2,f);F(g,1,e);G(d,Ek,3,g);c.endOfSequence&&delete ls[c.sequenceGroup]}G(a,Fk,33,d);(c.sendIsolatedPayload?Ur:Or)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function ns(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);ms(a,c?null:Gq,b)}
;function os(a,b,c){var d=new Gk;ce(d,bk,72,Hk,a);c?ms(d,c,b):ns(d,b)}
function ps(a,b,c){var d=new Gk;ce(d,ak,73,Hk,a);c?ms(d,c,b):ns(d,b)}
function qs(a,b,c){var d=new Gk;ce(d,Zj,78,Hk,a);c?ms(d,c,b):ns(d,b)}
function rs(a,b,c){var d=new Gk;ce(d,ck,208,Hk,a);c?ms(d,c,b):ns(d,b)}
function ss(a,b,c){var d=new Gk;ce(d,Sj,156,Hk,a);c?ms(d,c,b):ns(d,b)}
function ts(a,b,c){var d=new Gk;ce(d,Wj,215,Hk,a);c?ms(d,c,b):ns(d,b)}
;var us=new Set,vs=0,ws=0,xs=0,ys=[],zs=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Km(a){As(a)}
function Bs(a){As(a,"WARNING")}
function As(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=vs)){var m=ys,q=ze(a),r=q.message||"Unknown Error",w=q.name||"UnknownError",t=q.stack||a.i||"Not available";if(t.startsWith(w+": "+r)){var z=t.split("\n");z.shift();t=z.join("\n")}var D=q.lineNumber||"Not available",E=q.fileName||"Not available",O=t,N=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var R=0;R<a.args.length&&!(N=Zl(a.args[R],"params."+R,g,N),500<=N);R++);else if(a.hasOwnProperty("params")&&
a.params){var ca=a.params;if("object"===typeof a.params)for(var U in ca){if(ca[U]){var qb="params."+U,Ua=am(ca[U]);g[qb]=Ua;N+=qb.length+Ua.length;if(500<N)break}}else g.params=am(ca)}if(m.length)for(var oa=0;oa<m.length&&!(N=Zl(m[oa],"params.context."+oa,g,N),500<=N);oa++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var I={message:r,name:w,lineNumber:D,fileName:E,stack:O,params:g,sampleWeight:1},na=Number(a.columnNumber);isNaN(na)||(I.lineNumber=I.lineNumber+
":"+na);if("IGNORED"===a.level)var ea=0;else a:{for(var He=Vl(),Ie=p(He.na),ud=Ie.next();!ud.done;ud=Ie.next()){var ra=ud.value;if(I.message&&I.message.match(ra.Jr)){ea=ra.weight;break a}}for(var Ep=p(He.la),hk=Ep.next();!hk.done;hk=Ep.next()){var Fp=hk.value;if(Fp.callback(I)){ea=Fp.weight;break a}}ea=1}I.sampleWeight=ea;for(var Gp=p(Ql),ik=Gp.next();!ik.done;ik=Gp.next()){var jk=ik.value;if(jk.kb[I.name])for(var Hp=p(jk.kb[I.name]),kk=Hp.next();!kk.done;kk=Hp.next()){var Ip=kk.value,Xg=I.message.match(Ip.regexp);
if(Xg){I.params["params.error.original"]=Xg[0];for(var lk=Ip.groups,Jp={},vd=0;vd<lk.length;vd++)Jp[lk[vd]]=Xg[vd+1],I.params["params.error."+lk[vd]]=Xg[vd+1];I.message=jk.Cb(Jp);break}}}I.params||(I.params={});var Kp=Vl();I.params["params.errorServiceSignature"]="msg="+Kp.na.length+"&cb="+Kp.la.length;I.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(I.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Eb("sample").constructor!==
Cb&&(I.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(I);if(0!==I.sampleWeight&&!us.has(I.message)){if("ERROR"===h){Wl.sa("handleError",I);if(M("record_app_crashed_web")&&0===xs&&1===I.sampleWeight)if(xs++,M("errors_via_jspb")){var mk=new Lj;F(mk,1,1);if(!M("report_client_error_with_app_crash_ks")){var Lp=new Gj;F(Lp,1,I.message);var Mp=new Hj;G(Mp,Gj,3,Lp);var Np=new Ij;G(Np,Hj,5,Mp);var Op=new Jj;G(Op,Ij,9,Np);G(mk,Jj,4,Op)}var Pp=new Gk;ce(Pp,Lj,20,
Hk,mk);ns(Pp)}else{var Qp={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Qp.systemHealth={crashData:{clientError:{logMessage:{message:I.message}}}});Lm("appCrashed",Qp)}ws++}else"WARNING"===h&&Wl.sa("handleWarning",I);if(M("kevlar_gel_error_routing"))a:{var Je=h;if(M("errors_via_jspb")){if(Cs())var Sp=void 0;else{var wd=new Dj;F(wd,1,I.stack);I.fileName&&F(wd,4,I.fileName);var Ib=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Ib.length&&(1!==
Ib.length||isNaN(Number(Ib[0]))?2!==Ib.length||isNaN(Number(Ib[0]))||isNaN(Number(Ib[1]))||(F(wd,2,Number(Ib[0])),F(wd,3,Number(Ib[1]))):F(wd,2,Number(Ib[0])));var Ac=new Gj;F(Ac,1,I.message);F(Ac,3,I.name);F(Ac,6,I.sampleWeight);"ERROR"===Je?F(Ac,2,2):"WARNING"===Je?F(Ac,2,1):F(Ac,2,0);var nk=new Ej;F(nk,1,!0);ce(nk,Dj,3,Fj,wd);var $b=new Aj;F($b,3,window.location.href);for(var Tp=L("FEXP_EXPERIMENTS",[]),ok=0;ok<Tp.length;ok++){var vw=Tp[ok];Hd($b);Wd($b,5,2,!1,!1).push(vw)}var pk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!Zk()&&pk)for(var Up=p(Object.keys(pk)),Bc=Up.next();!Bc.done;Bc=Up.next()){var Vp=Bc.value,qk=new Cj;F(qk,1,Vp);F(qk,2,String(pk[Vp]));ee($b,4,Cj,qk)}var rk=I.params;if(rk){var Wp=p(Object.keys(rk));for(Bc=Wp.next();!Bc.done;Bc=Wp.next()){var Xp=Bc.value,sk=new Cj;F(sk,1,"client."+Xp);F(sk,2,String(rk[Xp]));ee($b,4,Cj,sk)}}var Yp=L("SERVER_NAME"),Zp=L("SERVER_VERSION");if(Yp&&Zp){var tk=new Cj;F(tk,1,"server.name");F(tk,2,Yp);ee($b,4,Cj,tk);var uk=new Cj;F(uk,1,"server.version");F(uk,2,Zp);ee($b,
4,Cj,uk)}var Yg=new Hj;G(Yg,Aj,1,$b);G(Yg,Ej,2,nk);G(Yg,Gj,3,Ac);Sp=Yg}var $p=Sp;if(!$p)break a;var aq=new Gk;ce(aq,Hj,163,Hk,$p);ns(aq)}else{if(Cs())var bq=void 0;else{var Ke={stackTrace:I.stack};I.fileName&&(Ke.filename=I.fileName);var Jb=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Jb.length&&(1!==Jb.length||isNaN(Number(Jb[0]))?2!==Jb.length||isNaN(Number(Jb[0]))||isNaN(Number(Jb[1]))||(Ke.lineNumber=Number(Jb[0]),Ke.columnNumber=Number(Jb[1])):Ke.lineNumber=Number(Jb[0]));
var vk={level:"ERROR_LEVEL_UNKNOWN",message:I.message,errorClassName:I.name,sampleWeight:I.sampleWeight};"ERROR"===Je?vk.level="ERROR_LEVEL_ERROR":"WARNING"===Je&&(vk.level="ERROR_LEVEL_WARNNING");var ww={isObfuscated:!0,browserStackInfo:Ke},xd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(xd.experimentIds=L("FEXP_EXPERIMENTS"));var wk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Zk()&&wk)for(var cq=p(Object.keys(wk)),Cc=cq.next();!Cc.done;Cc=cq.next()){var dq=Cc.value;xd.kvPairs.push({key:dq,
value:String(wk[dq])})}var xk=I.params;if(xk){var eq=p(Object.keys(xk));for(Cc=eq.next();!Cc.done;Cc=eq.next()){var fq=Cc.value;xd.kvPairs.push({key:"client."+fq,value:String(xk[fq])})}}var gq=L("SERVER_NAME"),hq=L("SERVER_VERSION");gq&&hq&&(xd.kvPairs.push({key:"server.name",value:gq}),xd.kvPairs.push({key:"server.version",value:hq}));bq={errorMetadata:xd,stackTrace:ww,logMessage:vk}}var iq=bq;if(!iq)break a;Lm("clientError",iq)}if("ERROR"===Je||M("errors_flush_gel_always_killswitch"))b:{if(M("web_fp_via_jspb")&&
(js(!0),!M("web_fp_via_jspb_and_json")))break b;js()}}if(!M("suppress_error_204_logging")){var Le=I.params||{},ac={urlParams:{a:"logerror",t:"jserror",type:I.name,msg:I.message.substr(0,250),line:I.lineNumber,level:h,"client.name":Le.name},postParams:{url:L("PAGE_NAME",window.location.href),file:I.fileName},method:"POST"};Le.version&&(ac["client.version"]=Le.version);if(ac.postParams){I.stack&&(ac.postParams.stack=I.stack);for(var jq=p(Object.keys(Le)),yk=jq.next();!yk.done;yk=jq.next()){var kq=yk.value;
ac.postParams["client."+kq]=Le[kq]}var zk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(zk)for(var lq=p(Object.keys(zk)),Ak=lq.next();!Ak.done;Ak=lq.next()){var mq=Ak.value;ac.postParams[mq]=zk[mq]}var nq=L("SERVER_NAME"),oq=L("SERVER_VERSION");nq&&oq&&(ac.postParams["server.name"]=nq,ac.postParams["server.version"]=oq)}Gl(L("ECATCHER_REPORT_HOST","")+"/error_204",ac)}try{us.add(I.message)}catch(Yx){}vs++}}}}
function Cs(){for(var a=p(zs),b=a.next();!b.done;b=a.next())if(Pl(b.value.toLowerCase()))return!0;return!1}
function Ds(a){var b=Ka.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ja(b))}
;function Es(){this.register=new Map}
function Fs(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Nr("ABORTED")}
Es.prototype.clear=function(){Fs(this);this.register.clear()};
var Gs=new Es;var Hs=Date.now().toString();
function Is(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Hs)for(a=1,b=0;b<Hs.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Hs.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Js=y.ytLoggingDocDocumentNonce_;Js||(Js=Is(),A("ytLoggingDocDocumentNonce_",Js));var Ks=Js;var Ls={gi:0,ye:1,Ie:2,fm:3,ii:4,Jq:5,Vm:6,No:7,co:8,Bo:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Ms(a){this.H=a}
function Ns(a){return new Ms({trackingParams:a})}
Ms.prototype.getAsJson=function(){var a={};void 0!==this.H.trackingParams?a.trackingParams=this.H.trackingParams:(a.veType=this.H.veType,void 0!==this.H.veCounter&&(a.veCounter=this.H.veCounter),void 0!==this.H.elementIndex&&(a.elementIndex=this.H.elementIndex));void 0!==this.H.dataElement&&(a.dataElement=this.H.dataElement.getAsJson());void 0!==this.H.youtubeData&&(a.youtubeData=this.H.youtubeData);return a};
Ms.prototype.getAsJspb=function(){var a=new Nj;if(void 0!==this.H.trackingParams){var b=this.H.trackingParams;if(null!=b)if("string"===typeof b)b=b?new ld(b,id):md();else if(b.constructor!==ld)if(hd(b))b=b.length?new ld(new Uint8Array(b),id):md();else throw Error();F(a,1,b)}else void 0!==this.H.veType&&F(a,2,this.H.veType),void 0!==this.H.veCounter&&F(a,6,this.H.veCounter),void 0!==this.H.elementIndex&&F(a,3,this.H.elementIndex);void 0!==this.H.dataElement&&(b=this.H.dataElement.getAsJspb(),G(a,Nj,
7,b));void 0!==this.H.youtubeData&&G(a,cj,8,this.H.jspbYoutubeData);return a};
Ms.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Ms.prototype.isClientVe=function(){return!this.H.trackingParams&&!!this.H.veType};function Os(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Ps(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Qs(a){return L(Ps(void 0===a?0:a))}
A("yt_logging_screen.getRootVeType",Qs);function Rs(a){return(a=Qs(void 0===a?0:a))?new Ms({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Ss(){var a=L("csn-to-ctt-auth-info");a||(a={},Yk("csn-to-ctt-auth-info",a));return a}
function Ts(a){a=L(Os(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
A("yt_logging_screen.getCurrentCsn",Ts);function Us(a,b,c){var d=Ss();(c=Ts(c))&&delete d[c];b&&(d[a]=b)}
function Vs(a){return Ss()[a]}
A("yt_logging_screen.getCttAuthInfo",Vs);function Ws(a,b,c,d){c=void 0===c?0:c;if(a!==L(Os(c))||b!==L(Ps(c)))if(Us(a,d,c),Yk(Os(c),a),Yk(Ps(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new Oj;F(e,1,Ks);F(e,2,a);var f=new Gk;ce(f,Oj,111,Hk,e);ns(f)}else Lm("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ks,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
A("yt_logging_screen.setCurrentScreen",Ws);var Xs=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Xs);function Ys(a){Tk(Xs,arguments)}
;var Zs={xe:3611,Cd:27686,Dd:85013,Ed:23462,Gd:157557,Hd:42016,Id:62407,Jd:26926,Fd:43781,Kd:51236,Ld:79148,Md:50160,Nd:77504,Zd:153587,ae:87907,be:18630,ce:54445,de:80935,ee:152172,ge:105675,he:150723,ie:37521,je:147285,ke:47786,le:98349,me:168271,ne:168954,oe:168277,pe:168273,qe:168270,re:123695,se:6827,te:29434,ue:7282,we:124448,Ae:32276,ze:76278,Be:147868,Ce:147869,De:93911,Ee:106531,Fe:27259,Ge:27262,He:27263,Je:21759,Ke:27107,Le:62936,Me:160866,Ne:49568,Oe:160789,Pe:38408,Qe:80637,Re:68727,Se:68728,
Te:80353,Ue:80356,Ve:74610,We:45707,Xe:83962,Ye:83970,Ze:46713,af:166591,bf:89711,cf:74612,df:155792,ef:93265,ff:74611,gf:131380,jf:128979,kf:139311,lf:128978,hf:131391,mf:105350,pf:139312,qf:134800,nf:131392,sf:113533,tf:93252,uf:99357,wf:94521,xf:114252,yf:113532,zf:94522,vf:94583,Af:88E3,Bf:139580,Cf:93253,Df:93254,Ef:94387,Ff:94388,Gf:93255,Hf:97424,rf:72502,If:110111,Jf:76019,Lf:117092,Mf:117093,Kf:89431,Nf:110466,Of:77240,Pf:60508,Qf:148123,Rf:148124,Sf:137401,Tf:137402,Uf:137046,Vf:73393,Wf:113534,
Xf:92098,Yf:131381,Zf:84517,ag:83759,cg:162711,dg:162712,eg:80357,fg:86113,gg:72598,hg:168413,ig:72733,jg:107349,kg:124275,lg:118203,mg:133275,ng:160157,og:152569,pg:156651,qg:133274,rg:160159,sg:160158,tg:133272,ug:133273,vg:133276,wg:144507,xg:143247,yg:156652,zg:143248,Ag:143249,Bg:143250,Cg:143251,Dg:156653,Eg:144401,Gg:117431,Fg:133797,Hg:153964,Ig:128572,Jg:133405,Kg:117429,Lg:117430,Mg:117432,Ng:120080,Og:117259,Pg:156655,Qg:156654,Rg:121692,Sg:145656,Tg:156656,Ug:145655,Vg:145653,Wg:145654,
Xg:145657,Yg:132972,Zg:133051,ah:133658,bh:132971,dh:97615,fh:143359,eh:143356,hh:143361,gh:143358,jh:143360,ih:143357,kh:142303,lh:143353,mh:143354,nh:144479,oh:143355,ph:31402,rh:133624,sh:146477,th:133623,uh:133622,qh:133621,vh:84774,xh:160801,wh:95117,yh:150497,zh:98930,Ah:98931,Bh:98932,Ch:153320,Dh:153321,Eh:43347,Fh:129889,Gh:149123,Hh:45474,Ih:100352,Jh:84758,Kh:98443,Lh:117985,Mh:74613,Nh:155911,Oh:74614,Ph:64502,Qh:136032,Rh:74615,Sh:74616,Th:122224,Uh:74617,Vh:77820,Wh:74618,Xh:93278,Yh:93274,
Zh:93275,ai:93276,bi:22110,ci:29433,di:133798,fi:132295,hi:120541,ji:82047,ki:113550,li:75836,mi:75837,ni:42352,oi:84512,ri:76065,si:75989,yi:51879,zi:16623,Ai:32594,Bi:27240,Ci:32633,Di:74858,Ei:156999,Gi:3945,Fi:16989,Hi:45520,Ii:25488,Ji:25492,Ki:25494,Li:55760,Mi:14057,Ni:18451,Oi:57204,Pi:57203,Qi:17897,Ri:57205,Si:18198,Ti:17898,Ui:17909,Vi:43980,Wi:46220,Xi:11721,Yi:147994,Zi:49954,aj:96369,bj:3854,cj:151633,dj:56251,ej:159108,fj:25624,gj:152036,xj:16906,yj:99999,zj:68172,Aj:27068,Bj:47973,
Cj:72773,Dj:26970,Ej:26971,Fj:96805,Gj:17752,Hj:73233,Ij:109512,Jj:22256,Kj:14115,Lj:22696,Mj:89278,Nj:89277,Oj:109513,Pj:43278,Qj:43459,Rj:43464,Sj:89279,Tj:43717,Uj:55764,Vj:22255,Wj:147912,Xj:89281,Yj:40963,Zj:43277,ak:167701,bk:43442,ck:91824,dk:120137,ek:96367,fk:36850,gk:72694,hk:37414,ik:36851,kk:124863,jk:121343,lk:73491,mk:54473,nk:166861,pk:43375,qk:46674,rk:143815,sk:139095,tk:144402,uk:149968,vk:149969,wk:32473,xk:72901,yk:72906,zk:50947,Ak:50612,Bk:50613,Ck:50942,Dk:84938,Ek:84943,Fk:84939,
Gk:84941,Hk:84944,Ik:84940,Jk:84942,Kk:35585,Lk:51926,Mk:79983,Nk:63238,Ok:18921,Pk:63241,Qk:57893,Rk:41182,Sk:135732,Tk:33424,Uk:22207,Vk:42993,Wk:36229,Xk:22206,Yk:22205,Zk:18993,al:19001,bl:18990,dl:18991,fl:18997,il:18725,jl:19003,kl:36874,ll:44763,ml:33427,nl:67793,ol:22182,pl:37091,ql:34650,rl:50617,sl:47261,ul:22287,vl:25144,wl:97917,xl:62397,yl:150871,zl:150874,Al:125598,Bl:137935,Cl:36961,Dl:108035,El:27426,Fl:27857,Gl:27846,Hl:27854,Il:69692,Jl:61411,Kl:39299,Ll:38696,Ml:62520,Nl:36382,
Ol:108701,Pl:50663,Ql:36387,Rl:14908,Sl:37533,Tl:105443,Ul:61635,Vl:62274,Wl:161670,Xl:133818,Yl:65702,Zl:65703,am:65701,bm:76256,cm:166382,dm:37671,em:49953,gm:36216,hm:28237,im:39553,jm:29222,km:26107,lm:38050,mm:26108,om:120745,nm:26109,pm:26110,qm:66881,rm:28236,sm:14586,tm:160598,um:57929,vm:74723,wm:44098,xm:44099,Am:23528,Bm:61699,ym:134104,zm:134103,Cm:59149,Dm:101951,Em:97346,Fm:118051,Gm:95102,Hm:64882,Im:119505,Jm:63595,Km:63349,Lm:95101,Mm:75240,Nm:27039,Om:68823,Pm:21537,Qm:83464,Rm:75707,
Sm:83113,Tm:101952,Um:101953,Wm:79610,Xm:125755,Ym:24402,Zm:24400,an:32925,cn:57173,bn:156421,dn:122502,en:145268,fn:138480,gn:64423,hn:64424,jn:33986,kn:100828,ln:129089,mn:21409,rn:135155,sn:135156,tn:135157,un:135158,vn:158225,wn:135159,xn:135160,yn:167651,zn:135161,Bn:135162,Cn:135163,An:158226,Dn:158227,En:135164,Fn:135165,Gn:135166,nn:11070,pn:11074,qn:17880,Hn:14001,Jn:30709,Kn:30707,Ln:30711,Mn:30710,Nn:30708,In:26984,On:146143,Pn:63648,Qn:63649,Rn:111059,Sn:5754,Tn:20445,Un:151308,Vn:151152,
Yn:130975,Xn:130976,Wn:167637,Zn:110386,ao:113746,bo:66557,eo:17310,fo:28631,ho:21589,jo:164817,ko:168011,lo:154946,mo:68012,no:162617,oo:60480,po:138664,qo:141121,ro:164502,so:31571,to:141978,uo:150105,vo:150106,wo:150107,xo:150108,yo:76980,zo:41577,Ao:45469,Co:38669,Do:13768,Eo:13777,Fo:141842,Go:62985,Ho:4724,Io:59369,Jo:43927,Ko:43928,Lo:12924,Mo:100355,Po:56219,Qo:27669,Ro:10337,Oo:47896,So:122629,Uo:139723,To:139722,Vo:121258,Wo:107598,Xo:127991,Yo:96639,Zo:107536,ap:130169,bp:96661,cp:145188,
ep:96658,fp:116646,gp:159428,hp:121122,ip:96660,jp:127738,kp:127083,lp:155281,mp:162959,np:163566,qp:147842,rp:104443,sp:96659,tp:147595,up:106442,vp:162776,wp:134840,xp:63667,yp:63668,zp:63669,Ap:130686,Bp:147036,Cp:78314,Dp:147799,Ep:148649,Fp:55761,Gp:127098,Hp:134841,Ip:96368,Jp:67374,Kp:48992,Lp:146176,Mp:49956,Np:31961,Op:26388,Pp:23811,Qp:5E4,Rp:126250,Sp:96370,Tp:47355,Up:47356,Vp:37935,Wp:45521,Xp:21760,Yp:83769,Zp:49977,aq:49974,bq:93497,cq:93498,fq:34325,gq:140759,hq:115803,iq:123707,jq:100081,
kq:35309,lq:68314,mq:25602,nq:100339,oq:143516,pq:59018,qq:18248,rq:50625,sq:9729,tq:37168,uq:37169,wq:21667,xq:16749,yq:18635,zq:39305,Aq:18046,Bq:53969,Cq:8213,Dq:93926,Eq:102852,Fq:110099,Gq:22678,Hq:69076,Iq:137575,Kq:139224,Lq:100856,Mq:154430,Nq:17736,Oq:3832,Pq:147111,Qq:55759,Rq:64031,Xq:93044,Yq:93045,br:34388,Zq:167841,dr:17657,er:17655,fr:39579,gr:39578,hr:77448,ir:8196,jr:11357,kr:69877,lr:8197,mr:168501,pr:156512,qr:161613,rr:156509,sr:161612,tr:161614,ur:82039};function $s(){var a=wb(at),b;return(new Cf(function(c,d){a.onSuccess=function(e){zl(e)?c(new bt(e)):d(new ct("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ct("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new ct("Request timed out","net.timeout",e))};
b=Gl("//googleads.g.doubleclick.net/pagead/id",a)})).qb(function(c){c instanceof Jf&&b.abort();
return Hf(c)})}
function ct(a,b,c){cb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
u(ct,cb);function bt(a){this.xhr=a}
;function dt(){this.h=0;this.ba=null}
dt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.ba))&&"function"===typeof a.then?a:et(a):2===this.h&&b?(a=b.call(c,this.ba))&&"function"===typeof a.then?a:ft(a):this};
dt.prototype.getValue=function(){return this.ba};
dt.prototype.$goog_Thenable=!0;function ft(a){var b=new dt;a=void 0===a?null:a;b.h=2;b.ba=void 0===a?null:a;return b}
function et(a){var b=new dt;a=void 0===a?null:a;b.h=1;b.ba=void 0===a?null:a;return b}
;function gt(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:ul(a)?"same-origin":"cors",credentials:ul(a)?"same-origin":"include"};b={};for(var d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function ht(){return Bg()||Ol&&Pl("applewebkit")&&!Pl("version")&&(!Pl("safari")||Pl("gsa/"))||Oc&&Pl("version/")?!0:L("EOM_VISITOR_DATA")?!1:!0}
;function jt(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in xj)if(xj[c]==b.embeddedPlayerMode){b=xj[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function kt(a){cb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof lt;this.isTimeout=a instanceof ct&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Jf}
u(kt,cb);kt.prototype.name="BiscottiError";function lt(){cb.call(this,"Biscotti ID is missing from server")}
u(lt,cb);lt.prototype.name="BiscottiMissingError";var at={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},mt=null;function nt(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!ht())return Error("User has not consented - not fetching biscotti id.");var a=L("PLAYER_VARS",{});if("1"==ub(a))return Error("Biscotti ID is not available in private embed mode");if(jt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function el(){var a=nt();if(void 0!==a)return Hf(a);mt||(mt=$s().then(ot).qb(function(b){return pt(2,b)}));
return mt}
function ot(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new lt;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new lt;a=a.id;fl(a);mt=et(a);qt(18E5,2);return a}
function pt(a,b){b=new kt(b);fl("");mt=ft(b);0<a&&qt(12E4,a-1);throw b;}
function qt(a,b){Al(function(){$s().then(ot,function(c){return pt(b,c)}).qb(eb)},a)}
function rt(){try{var a=B("yt.ads.biscotti.getId_");return a?a():el()}catch(b){return Hf(b)}}
;function st(a){if("1"!=ub(L("PLAYER_VARS",{}))){a&&dl();try{rt().then(function(){},function(){}),Al(st,18E5)}catch(b){jl(b)}}}
;function tt(){var a=hm.getInstance(),b=km(119),c=1<window.devicePixelRatio;if(document.body&&vi(document.body,"exp-invert-logo"))if(c&&!vi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!vi(d,"inverted-hdpi")){var e=ti(d);ui(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&vi(document.body,"inverted-hdpi")&&wi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=lm(b)||0;d=c?d|67108864:d&-67108865;0==d?delete gm[b]:(c=d.toString(16),gm[b]=
c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in gm)d.push(f+"="+encodeURIComponent(String(gm[f])));dm(b,d.join("&"),63072E3,a.i,c)}}
;function ut(){this.vd=!0}
function vt(a){var b={},c=Dg([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Xk||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Xk&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var wt={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var xt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function zt(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;nc(oc(5,a));try{var b=sl(a).theme;return xt.get(b)||null}catch(c){}return null}
;function At(){this.h={};if(this.i=fm()){var a=zg.get("CONSISTENCY",void 0);a&&Bt(this,{encryptedTokenJarContents:a})}}
At.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ha.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Bt(this,a)}};
function Bt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&dm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Ct=window.location.hostname.split(".").slice(-2).join(".");function Dt(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.h=Et(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Ft;Dt.getInstance=function(){Ft=B("yt.clientLocationService.instance");Ft||(Ft=new Dt,A("yt.clientLocationService.instance",Ft));return Ft};
l=Dt.prototype;l.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
l.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.h=Et(this))&&this.h.set("yt-location-playability-token",a,15552E3):dm("YT_CL",JSON.stringify({loctok:a}),15552E3,Ct,!0))};
function Et(a){return void 0===a.h?new Cm("yt-client-location"):a.h}
l.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Et(this))&&this.h.remove("yt-location-playability-token"):em("YT_CL")};
l.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===L("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
l.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Gt(a,b){var c,d=null==(c=ur(a,wj))?void 0:c.signal;if(d&&b.Pa&&(c=b.Pa[d]))return c();var e;if((c=null==(e=ur(a,uj))?void 0:e.request)&&b.Kc&&(e=b.Kc[c]))return e();for(var f in a)if(b.Ub[f]&&(a=b.Ub[f]))return a()}
;function Ht(a){return function(){return new a}}
;var It={},Jt=(It.WEB_UNPLUGGED="^unplugged/",It.WEB_UNPLUGGED_ONBOARDING="^unplugged/",It.WEB_UNPLUGGED_OPS="^unplugged/",It.WEB_UNPLUGGED_PUBLIC="^unplugged/",It.WEB_CREATOR="^creator/",It.WEB_KIDS="^kids/",It.WEB_EXPERIMENTS="^experiments/",It.WEB_MUSIC="^music/",It.WEB_REMIX="^music/",It.WEB_MUSIC_EMBEDDED_PLAYER="^music/",It.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",It);
function Kt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Jt[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Jt).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Lt(){}
Lt.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?wt:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=xb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;hm.getInstance();var m="USER_INTERFACE_THEME_LIGHT";km(165)?m="USER_INTERFACE_THEME_DARK":km(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:zt()||m;h.userInterfaceTheme=k;if(!f){if(k=
rm())h.connectionType=k;M("web_log_effective_connection_type")&&(k=sm())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var r;q=null==(r=y.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}r=sl(y.location.href);!M("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
bm.h&&(r=bm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=cm(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(r=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:r}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var w=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(qb){}w=void 0}w&&(h.timeZone=w)}(w=bl())?h.experimentsToken=w:delete h.experimentsToken;w=cl();At.h||(At.h=new At);h=At.h.h;r=[];q=0;for(var t in h)r[q++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:w,consistencyTokenJars:r});!M("web_prequest_context_killswitch")&&(t=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=t);w=hm.getInstance();t=km(58);w=w.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);w&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=Ts())&&(g.clientScreenNonce=f):!f&&(f=Ts())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Dt.getInstance().setLocationOnInnerTubeContext(g);try{var z=vl(),D=z.bid;delete z.bid;g.adSignalsInfo={params:[],bid:D};var E=
p(Object.entries(z));for(var O=E.next();!O.done;O=E.next()){var N=p(O.value),R=N.next().value,ca=N.next().value;z=R;D=ca;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:z,value:""+D})}}catch(qb){As(qb)}E=g}else As(Error("Error: No InnerTubeContext shell provided in ytconfig.")),E={};E={context:E};if(O=this.h(a)){this.i(E,O,b);var U;b="/youtubei/v1/"+Kt(this.j());(O=null==(U=ur(a.commandMetadata,vj))?void 0:U.apiUrl)&&(b=O);U=b;(b=L("INNERTUBE_HOST_OVERRIDE"))&&(U=String(b)+String(qc(U)));b=
{};b.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(b.prettyPrint="false");U=tl(U,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:U,xa:gt(U),ha:E,config:a};a.config.ab?a.config.ab.identity=c:a.config.ab={identity:c};return a}As(new P("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(Lt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Mt(){}
u(Mt,Lt);Mt.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",xa:gt("/getDatasyncIdsEndpoint","GET"),ha:{}}};
Mt.prototype.j=function(){return[]};
Mt.prototype.h=function(){};
Mt.prototype.i=function(){};var Nt={},Ot=(Nt.GET_DATASYNC_IDS=Ht(Mt),Nt);function Pt(a){var b=Ka.apply(1,arguments);if(!Qt(a)||b.some(function(d){return!Qt(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())Rt(a,c.value);return a}
function Rt(a,b){for(var c in b)if(Qt(b[c])){if(c in a&&!Qt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Rt(a[c],b[c])}else if(St(b[c])){if(c in a&&!St(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Tt(a[c],b[c])}else a[c]=b[c];return a}
function Tt(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Qt(c)?a.push(Rt({},c)):St(c)?a.push(Tt([],c)):a.push(c);return a}
function Qt(a){return"object"===typeof a&&!Array.isArray(a)}
function St(a){return"object"===typeof a&&Array.isArray(a)}
;function Ut(a,b){Yo.call(this,1,arguments);this.timer=b}
u(Ut,Yo);var Vt=new Zo("aft-recorded",Ut);var Wt=window;function Xt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=Wt.performance||Wt.mozPerformance||Wt.msPerformance||Wt.webkitPerformance||new Xt;var Yt=!1,Zt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Za(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||eb,S);function $t(a){var b=au("aft",a);if(b)return b;b=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=au(b[d],a);if(e)return e}return NaN}
function bu(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=cu(e.requestStart),e.responseEnd=cu(e.responseEnd),e.redirectStart=cu(e.redirectStart),e.redirectEnd=cu(e.redirectEnd),e.domainLookupEnd=cu(e.domainLookupEnd),e.connectStart=cu(e.connectStart),e.connectEnd=
cu(e.connectEnd),e.responseStart=cu(e.responseStart),e.secureConnectionStart=cu(e.secureConnectionStart),e.domainLookupStart=cu(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function du(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function cu(a){return Math.round(du()+a)}
function eu(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},A("ytcsi."+(a||"")+"data_",b));return b}
function fu(a){a=eu(a);a.info||(a.info={});return a.info}
function gu(a){a=eu(a);a.metadata||(a.metadata={});return a.metadata}
function hu(a){a=eu(a);a.tick||(a.tick={});return a.tick}
function au(a,b){if(a=hu(b)[a])return"number"===typeof a?a:a[a.length-1]}
function iu(a){a=eu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function ju(a){a=iu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ku(a){var b=eu(a).nonce;b||(b=Is(),eu(a).nonce=b);return b}
function lu(a){var b=au("_start",a),c=$t(a);b&&c&&!Yt&&(dp(Vt,new Ut(Math.round(c-b),a)),Yt=!0)}
function mu(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!mu(a[d],b[d]))return!1;return!0}
function nu(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=lb(a,function(b){return"first-paint"===b.name}))return cu(a.startTime)}a=S.timing;
return a.Zc?Math.max(0,a.Zc):0}
;function ou(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a),A("ytcsi.reference",{}));return a}
function pu(a){a=a||"";var b=B("ytcsi.reference");b||(ou(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=ou(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},qu=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",
T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home=
"LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",T["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",T["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",T["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",T["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",T["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
T["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",T["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",T["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",T["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",T["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",
T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",T.search_ui="LATENCY_ACTION_SEARCH_UI",
T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]=
"LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",
T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),V={},ru=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",
V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",
V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",
V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs=
"tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",
V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),su="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),tu={},uu=(tu.ccs="CANARY_STATE_",
tu.mver="MEASUREMENT_VERSION_",tu.pis="PLAYER_INITIALIZED_STATE_",tu.yt_pt="LATENCY_PLAYER_",tu.pa="LATENCY_ACTION_",tu.ctop="TOP_ENTITY_TYPE_",tu.yt_vst="VIDEO_STREAM_TYPE_",tu),vu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function wu(a){return qu[a]||"LATENCY_ACTION_UNKNOWN"}
function xu(a,b,c){c=iu(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in ru){c=ru[a];0<=gb(su,c)&&(b=!!b);a in uu&&"string"===typeof b&&(b=uu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Pt({},d)}0<=gb(vu,a)||Bs(new P("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,
LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,
LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,
LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,
LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,
LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,
LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,
LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,
LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,
LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,LATENCY_ACTION_CREATOR_CMS_REPORTS:201,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_ASSETS:195,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,
LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,
LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,
LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";
W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";
W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";W[W.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";
W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";
W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";
W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";
W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";
W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";
W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";
W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";
W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";
W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";W[W.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";W[W.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";
W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";W[W.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";
W[W.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";W[W.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";W[W.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";
W[W.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";
W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";
W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";
W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";
W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";
W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";
W[W.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";W[W.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var yu={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};yu[yu.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";yu[yu.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";yu[yu.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var zu={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};zu[zu.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
zu[zu.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";zu[zu.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";zu[zu.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";zu[zu.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";zu[zu.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";zu[zu.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";zu[zu.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Au={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Au[Au.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Au[Au.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Au[Au.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Au[Au.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Bu={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Bu[Bu.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Bu[Bu.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Cu={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Cu[Cu.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Cu[Cu.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Cu[Cu.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Cu[Cu.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Cu[Cu.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Cu[Cu.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Du={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Du[Du.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Du[Du.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Du[Du.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Du[Du.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Eu={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Eu[Eu.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Eu[Eu.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Eu[Eu.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Fu={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Fu[Fu.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Fu[Fu.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Fu[Fu.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Gu="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var Hu=y.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",Hu);function Iu(){this.h=0}
function Ju(){Iu.h||(Iu.h=new Iu);return Iu.h}
Iu.prototype.tick=function(a,b,c,d){Ku(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Dk,F(d,1,a),F(d,2,b),a=new Gk,ce(a,Dk,5,Hk,d),ns(a,c)):Lm("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Iu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Ku(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Lm("latencyActionInfo",a,{cttAuthInfo:c}))};
Iu.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Ku(this,"info_"+d+"_"+b)||(F(a,2,b),b={cttAuthInfo:c},c=new Gk,ce(c,fk,7,Hk,a),ns(c,b))};
Iu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Ku(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Lm("latencyActionSpan",a,{cttAuthInfo:c}))};
function Ku(a,b){Hu[b]=Hu[b]||{count:0};var c=Hu[b];c.count++;c.time=Q();a.h||(a.h=um(function(){var d=Q(),e;for(e in Hu)Hu[e]&&6E4<d-Hu[e].time&&delete Hu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new P("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Bs(c)),!0):!1}
;function Lu(){var a=["ol"];pu("").info.actionType="embed";a&&Yk("TIMING_AFT_KEYS",a);Yk("TIMING_ACTION","embed");if(M("web_csi_via_jspb")){a=L("TIMING_INFO",{});var b=new fk;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Ck;F(e,1,c);F(e,2,String(d));Bk(b,e);break;case "GetGuide_rid":e=new Ck;F(e,1,c);F(e,2,String(d));Bk(b,e);break;case "GetHome_rid":e=new Ck;F(e,1,c);F(e,2,String(d));Bk(b,e);
break;case "GetPlayer_rid":e=new Ck;F(e,1,c);F(e,2,String(d));Bk(b,e);break;case "GetSearch_rid":e=new Ck;F(e,1,c);F(e,2,String(d));Bk(b,e);break;case "GetSettings_rid":e=new Ck;F(e,1,c);F(e,2,String(d));Bk(b,e);break;case "GetTrending_rid":e=new Ck;F(e,1,c);F(e,2,String(d));Bk(b,e);break;case "GetWatchNext_rid":e=new Ck;F(e,1,c);F(e,2,String(d));Bk(b,e);break;case "yt_red":F(b,14,!!d);break;case "yt_ad":F(b,9,!!d)}}Mu(b);b=new fk;b=F(b,25,!0);b=F(b,1,W[wu(L("TIMING_ACTION"))]);(a=L("PREVIOUS_ACTION"))&&
F(b,13,W[wu(a)]);(a=L("CLIENT_PROTOCOL"))&&F(b,33,a);(a=L("CLIENT_TRANSPORT"))&&F(b,34,a);(a=Ts())&&"UNDEFINED_CSN"!==a&&F(b,4,a);a=Nu();1!==a&&-1!==a||F(b,6,!0);a=fu();M("skip_setting_info_in_csi_data_object")&&gu();F(b,3,"cold");Ou(a);a=Pu();if(0<a.length)for(a=p(a),c=a.next();!c.done;c=a.next())c=c.value,d=new ek,F(d,1,c),ee(b,83,ek,d);Mu(b)}else{a=L("TIMING_INFO",{});for(b in a)a.hasOwnProperty(b)&&Qu(b,a[b]);b={isNavigation:!0,actionType:wu(L("TIMING_ACTION"))};if(a=L("PREVIOUS_ACTION"))b.previousAction=
wu(a);if(a=L("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=L("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=Ts())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=Nu();if(1===a||-1===a)b.isVisible=!0;M("skip_setting_info_in_csi_data_object")&&gu();fu();b.loadType="cold";Ou(fu());a=Pu();if(0<a.length)for(b.resourceInfo=[],a=p(a),c=a.next();!c.done;c=a.next())b.resourceInfo.push({resourceCache:c.value});Ru(b)}b=fu();a=ju();if(!(M("skip_setting_info_in_csi_data_object")&&"cold"!==gu().loadType||"cold"!==b.yt_lt&&
"cold"!==a.loadType)){c=hu();d=iu();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var f in c)if(!(f in d))if("number"===typeof c[f])Z(f,au(f));else if(M("log_repeated_ytcsi_ticks")){e=p(c[f]);for(var g=e.next();!g.done;g=e.next())Z(f.slice(1),g.value)}f={};c=!1;d=p(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,(e=xu(e,b[e]))&&!mu(ju(),e)&&(Pt(a,e),Pt(f,e),c=!0);c&&Ru(f)}A("ytglobal.timingready_",!0);f=L("TIMING_ACTION");B("ytglobal.timingready_")&&f&&"_start"in hu()&&$t()&&lu()}
function Qu(a,b,c,d){if(null!==b){var e=fu(c);M("skip_setting_info_in_csi_data_object")?"yt_lt"===a&&(e="string"===typeof b?b:""+b,gu(c).loadType=e):e[a]=b;(a=xu(a,b,c))&&Ru(a,c,d)}}
function Ru(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=pu(b||""),Pt(c.info,a),M("skip_setting_info_in_csi_data_object")&&a.loadType&&(c=a.loadType,gu(b).loadType=c),Pt(ju(b),a),c=ku(b),b=eu(b).cttAuthInfo,Ju().info(a,c,b);else{c=new fk;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":F(c,1,W[a[e]]);break;case "clientActionNonce":F(c,2,a[e]);break;case "clientScreenNonce":F(c,4,a[e]);break;case "loadType":F(c,3,a[e]);break;case "isPrewarmedLaunch":F(c,
92,a[e]);break;case "isFirstInstall":F(c,55,a[e]);break;case "networkType":F(c,5,yu[a[e]]);break;case "connectionType":F(c,26,X[a[e]]);break;case "detailedConnectionType":F(c,27,Y[a[e]]);break;case "isVisible":F(c,6,a[e]);break;case "playerType":F(c,7,zu[a[e]]);break;case "clientPlaybackNonce":F(c,8,a[e]);break;case "adClientPlaybackNonce":F(c,28,a[e]);break;case "previousCpn":F(c,77,a[e]);break;case "targetCpn":F(c,76,a[e]);break;case "isMonetized":F(c,9,a[e]);break;case "isPrerollAllowed":F(c,16,
a[e]);break;case "isPrerollShown":F(c,17,a[e]);break;case "adType":F(c,12,a[e]);break;case "adTypesAllowed":F(c,36,a[e]);break;case "adNetworks":F(c,37,a[e]);break;case "previousAction":F(c,13,W[a[e]]);break;case "isRedSubscriber":F(c,14,a[e]);break;case "serverTimeMs":F(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":F(c,20,a[e]);break;case "targetVideoId":F(c,78,a[e]);break;case "adBreakType":F(c,21,Au[a[e]]);break;case "isNavigation":F(c,25,a[e]);break;case "viewportHeight":F(c,
29,a[e]);break;case "viewportWidth":F(c,30,a[e]);break;case "screenHeight":F(c,84,a[e]);break;case "screenWidth":F(c,85,a[e]);break;case "browseId":F(c,31,a[e]);break;case "isCacheHit":F(c,32,a[e]);break;case "httpProtocol":F(c,33,a[e]);break;case "transportProtocol":F(c,34,a[e]);break;case "searchQuery":F(c,41,a[e]);break;case "isContinuation":F(c,42,a[e]);break;case "availableProcessors":F(c,43,a[e]);break;case "sdk":F(c,44,a[e]);break;case "isLocalStream":F(c,45,a[e]);break;case "navigationRequestedSameUrl":F(c,
64,a[e]);break;case "shellStartupDurationMs":F(c,70,a[e]);break;case "appInstallDataAgeMs":F(c,73,a[e]);break;case "latencyActionError":F(c,71,Bu[a[e]]);break;case "actionStep":F(c,79,a[e]);break;case "jsHeapSizeLimit":F(c,80,a[e]);break;case "totalJsHeapSize":F(c,81,a[e]);break;case "usedJsHeapSize":F(c,82,a[e]);break;case "sourceVideoDurationMs":F(c,90,a[e]);break;case "videoOutputFrames":F(c,93,a[e]);break;case "isResume":F(c,104,a[e]);break;case "debugTicksExcluded":F(c,105,a[e]);break;case "adPrebufferedTimeSecs":F(c,
39,a[e]);break;case "isLivestream":F(c,47,a[e]);break;case "liveStreamMode":F(c,91,Cu[a[e]]);break;case "adCpn2":F(c,48,a[e]);break;case "adDaiDriftMillis":F(c,49,a[e]);break;case "videoStreamType":F(c,53,Du[a[e]]);break;case "playbackRequiresTap":F(c,56,a[e]);break;case "performanceNavigationTiming":F(c,67,a[e]);break;case "transactionType":F(c,74,Eu[a[e]]);break;case "playerRotationType":F(c,101,Fu[a[e]]);break;case "allowedPreroll":F(c,10,a[e]);break;case "shownPreroll":F(c,11,a[e]);break;case "getHomeRequestId":F(c,
57,a[e]);break;case "getSearchRequestId":F(c,60,a[e]);break;case "getPlayerRequestId":F(c,61,a[e]);break;case "getWatchNextRequestId":F(c,62,a[e]);break;case "getBrowseRequestId":F(c,63,a[e]);break;case "getLibraryRequestId":F(c,66,a[e]);break;case "isTransformerEnabledForFeature":F(c,106,a[e]);break;default:Gu.includes(f)&&jl(new P("Codegen laipb translator asked to translate message field",""+f))}}catch(g){jl(Error("Codegen laipb translator failed to set "+f))}}Mu(c,b)}}
function Mu(a,b){if(M("skip_setting_info_in_csi_data_object")){var c=ge(Td(a,3),"");c&&(gu(b).loadType=c)}else c=iu(b),c.jspbInfos||(c.jspbInfos=[]),c.jspbInfos.push(me(a));pu(b||"").jspbInfo.push(a);c=ku(b);b=eu(b).cttAuthInfo;Ju().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=pu(c||"");d.tick[a]=b||Q();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=iu(c);d.gelTicks&&(d.gelTicks[a]=!0);e=hu(c);d=b||Q();M("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=ku(c);var f=eu(c).cttAuthInfo;"_start"===a?(a=Ju(),Ku(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(a=new dk,
F(a,1,e),e=new Gk,ce(e,dk,6,Hk,a),ns(e,b)):Lm("latencyActionBaselined",{clientActionNonce:e},b))):Ju().tick(a,e,b,f);lu(c);return d}
function Su(){var a=ku();requestAnimationFrame(function(){setTimeout(function(){a===ku()&&Z("ol",void 0,void 0)},0)})}
function Nu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Iq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Ou(a){var b=bu(),c=du(),d=L("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!M("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Z("srt",b.responseStart),1!==a.prerender&&Z("_start",c,void 0));a=nu();0<a&&Z("fpt",a);a=bu();a.isPerformanceNavigationTiming&&Ru({performanceNavigationTiming:!0});Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<
a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=du()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));S&&"getEntriesByType"in S&&Tu()}
function Uu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);jc()&&a.setAttribute("nonce",jc());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=du(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Pu(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in Zt)if(Zt.hasOwnProperty(b)){var c=Zt[b];Uu(b,c)&&a.push(c)}return a}
function Tu(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=ib(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=kb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",cu(b.startTime)),Z("wffe",cu(b.responseEnd)))}
var Vu=window;Vu.ytcsi&&(Vu.ytcsi.info=Qu,Vu.ytcsi.tick=Z);var Wu="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Xu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Yu(a,b,c,d){this.m=a;this.L=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Pa||(a.Pa={});a.Pa=Object.assign({},Ot,a.Pa)}
function Zu(a,b,c,d){if(void 0!==Yu.h){if(d=Yu.h,a=[a!==d.m,b!==d.L,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new P("InnerTubeTransportService is already initialized",a);
}else Yu.h=new Yu(a,b,c,d)}
function $u(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?wt:c;var d=Gt(b,a.m);if(!d)return Hf(new P("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Cf(function(f){var g,h,k;return x(function(m){if(1==m.h){h="cors"===(null==(g=e.xa)?void 0:g.mode)?"cors":void 0;if(a.l.vd){var q=e.config,r;q=null==q?void 0:null==(r=q.ab)?void 0:r.sessionIndex;r=vt({sessionIndex:q});k=Object.assign({},av(h),r);return m.u(2)}return v(m,bv(e.config,
h),3)}2!=m.h&&(k=m.i);f(cv(a,e,k));m.h=0})}):Hf(new P("Error: Failed to build request for command.",b))}
function dv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Qr)?0:d.Tr)&&a.j){d=p(Wu);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function cv(a,b,c){var d,e,f,g,h,k,m,q,r,w,t,z,D,E,O,N,R,ca,U,qb,Ua,oa,I,na,ea,He,Ie,ud;return x(function(ra){switch(ra.h){case 1:ra.u(2);break;case 3:if((d=ra.i)&&!d.isExpired())return ra.return(Promise.resolve(d.h()));case 2:if(null==(e=b)?0:null==(f=e.ha)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())k=h.value,k.Mr(b.ha.context);if(null==(m=a.i)||!m.Rr(b.input,b.ha)){ra.u(4);break}return v(ra,a.i.Hr(b.input,b.ha),5);case 5:return q=ra.i,M("kevlar_process_local_innertube_responses_killswitch")||
dv(a,q,b),ra.return(q);case 4:return(t=null==(w=b.config)?void 0:w.oa)&&a.h.has(t)&&M("web_memoize_inflight_requests")?r=a.h.get(t):(z=JSON.stringify(b.ha),O=null!=(E=null==(D=b.xa)?void 0:D.headers)?E:{},b.xa=Object.assign({},b.xa,{headers:Object.assign({},O,c)}),N=Object.assign({},b.xa),"POST"===b.xa.method&&(N=Object.assign({},N,{body:z})),(null==(R=b.config)?0:R.hd)&&Z(b.config.hd),ca=function(){return a.L.fetch(b.input,N,b.config)},r=ca(),t&&a.h.set(t,r)),v(ra,r,6);
case 6:if((U=ra.i)&&"error"in U&&(null==(qb=U)?0:null==(Ua=qb.error)?0:Ua.details))for(oa=U.error.details,I=p(oa),na=I.next();!na.done;na=I.next())ea=na.value,(He=ea["@type"])&&-1<Xu.indexOf(He)&&(delete ea["@type"],U=ea);t&&a.h.has(t)&&a.h.delete(t);(null==(Ie=b.config)?0:Ie.jd)&&Z(b.config.jd);if(U||null==(ud=a.i)||!ud.zr(b.input,b.ha)){ra.u(7);break}return v(ra,a.i.Gr(b.input,b.ha),8);case 8:U=ra.i;case 7:return dv(a,U,b),ra.return(U||void 0)}})}
function bv(a,b){var c,d,e,f;return x(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.ab)?void 0:d.sessionIndex;var h=vt({sessionIndex:e});if(!(h instanceof Cf)){var k=new Cf(eb);Df(k,2,h);h=k}return v(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},av(b),f)))})}
function av(a){var b={"Content-Type":"application/json"};L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1);"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=L("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var ev=new ir("INNERTUBE_TRANSPORT_TOKEN");var fv=["share/get_web_player_share_panel"],gv=["feedback"],hv=["notification/modify_channel_preference"],iv=["browse/edit_playlist"],jv=["subscription/subscribe"],kv=["subscription/unsubscribe"];function lv(){}
u(lv,Lt);lv.prototype.j=function(){return jv};
lv.prototype.h=function(a){return ur(a,Sk)||void 0};
lv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(lv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function mv(){}
u(mv,Lt);mv.prototype.j=function(){return kv};
mv.prototype.h=function(a){return ur(a,Rk)||void 0};
mv.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(mv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function nv(){}
u(nv,Lt);nv.prototype.j=function(){return gv};
nv.prototype.h=function(a){return ur(a,yj)||void 0};
nv.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(nv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ov(){}
u(ov,Lt);ov.prototype.j=function(){return hv};
ov.prototype.h=function(a){return ur(a,Qk)||void 0};
ov.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function pv(){}
u(pv,Lt);pv.prototype.j=function(){return iv};
pv.prototype.h=function(a){return ur(a,Pk)||void 0};
pv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function qv(){}
u(qv,Lt);qv.prototype.j=function(){return fv};
qv.prototype.h=function(a){return ur(a,Ok)};
qv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var kr=new ir("NETWORK_SLI_TOKEN");function rv(a){this.h=a}
rv.prototype.fetch=function(a,b){var c=this,d,e;return x(function(f){c.h&&(d=nc(oc(5,Ec(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Bs(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Bs(g)}))})};
rv.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Dr(),b=b.then(function(c){Bs(new P("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
rv[hr]=[new jr];var sv=new ir("NETWORK_MANAGER_TOKEN");var tv;function uv(a){Yo.call(this,1,arguments);this.csn=a}
u(uv,Yo);var gp=new Zo("screen-created",uv),vv=[],xv=wv,yv=0;function zv(a,b,c,d,e,f,g){function h(){Bs(new P("newScreen() parent element does not have a VE - rootVe",b))}
var k=xv(),m=new Ms({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:k};e&&(f.cttAuthInfo=e);M("il_via_jspb")?(e=Tj((new Sj).i(k),m.getAsJspb()),c&&c.visualElement?(m=new Uj,c.clientScreenNonce&&F(m,2,c.clientScreenNonce),Vj(m,c.visualElement.getAsJspb()),g&&F(m,4,Ik[g]),G(e,Uj,5,m)):c&&h(),d&&F(e,3,d),ss(e,f,a)):(e={csn:k,pageVe:m.getAsJson()},c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=
g)):c&&h(),d&&(e.cloneCsn=d),a?hs("screenCreated",e,a,f):Lm("screenCreated",e,f));dp(gp,new uv(k));return k}
function Av(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:Vs(b)||void 0,
sequenceGroup:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(sb(g)||!g.trackingParams&&!g.veType)&&Bs(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=Yj((new Wj).i(b),c.getAsJspb());jb(e,function(k){k=k.getAsJspb();ee(h,3,Nj,k)});
"UNDEFINED_CSN"===b?Bv("visualElementAttached",f,void 0,h):ts(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:jb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"===b?Bv("visualElementAttached",f,c):a?hs("visualElementAttached",c,a,f):Lm("visualElementAttached",c,f)}
function Cv(a,b,c,d,e,f){Dv(a,b,c,e,f)}
function Dv(a,b,c,d,e){var f={cttAuthInfo:Vs(b)||void 0,sequenceGroup:b};M("il_via_jspb")?(d=(new bk).i(b),c=c.getAsJspb(),c=G(d,Nj,2,c),c=F(c,4,1),e&&G(c,Qj,3,e),"UNDEFINED_CSN"===b?Bv("visualElementShown",f,void 0,c):os(c,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"===b?Bv("visualElementShown",f,e):a?hs("visualElementShown",e,a,f):Lm("visualElementShown",e,f))}
function wv(){if(M("enable_web_96_bit_csn"))var a=Is();else{a=Math.random()+"";for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=cd(b,3)}return a}
function Bv(a,b,c,d){vv.push({Fb:a,payload:c,ma:d,options:b});yv||(yv=hp())}
function ip(a){if(vv){for(var b=p(vv),c=b.next();!c.done;c=b.next())if(c=c.value,M("il_via_jspb")&&c.ma)switch(c.ma.i(a.csn),c.Fb){case "screenCreated":ss(c.ma,c.options);break;case "visualElementAttached":ts(c.ma,c.options);break;case "visualElementShown":os(c.ma,c.options);break;case "visualElementHidden":ps(c.ma,c.options);break;case "visualElementGestured":qs(c.ma,c.options);break;case "visualElementStateChanged":rs(c.ma,c.options);break;default:Bs(new P("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,Lm(c.Fb,c.payload,c.options));vv.length=0}yv=0}
;function Ev(){this.l=new Set;this.h=new Set;this.m=new Map;this.client=Gq;this.csn=null}
function Fv(){Ev.h||(Ev.h=new Ev);return Ev.h}
Ev.prototype.i=function(a){this.client=a};
Ev.prototype.j=function(){this.clear();this.csn=Ts()};
Ev.prototype.clear=function(){this.l.clear();this.h.clear();this.m.clear();this.csn=null};function Gv(){this.j=new Set;this.h=new Set;this.l=new Map;this.client=void 0;this.csn=null}
function Hv(){Gv.h||(Gv.h=new Gv);return Gv.h}
Gv.prototype.i=function(a){M("safe_logging_library_killswitch")?this.client=a:il(Fv().i).bind(Fv())(a)};
Gv.prototype.clear=function(){M("safe_logging_library_killswitch")?(this.j.clear(),this.h.clear(),this.l.clear(),this.csn=null):il(Fv().clear).bind(Fv())()};function Iv(){this.j=new Set;this.h=new Set;this.l=new Map}
Iv.prototype.i=function(a){M("use_ts_visibilitylogger")&&Hv().i(a)};
Iv.prototype.clear=function(){M("use_ts_visibilitylogger")?Hv().clear():(this.j.clear(),this.h.clear(),this.l.clear())};
Pa(Iv);function Jv(){this.o=[];this.v=[];this.h=[];this.m=[];this.M=[];this.j=new Set;this.s=new Map}
Jv.prototype.i=function(a){this.client=a};
function Kv(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=Ts(c),f=Rs(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Av(a.client,e,f,[Ns(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Av(a.client,e,f,[Ns(d.playerResponse.trackingParams)])}})}
function Lv(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.o.push([b,c]);else{var e=Ts(d);c=c||Rs(d);e&&c&&Av(a.client,e,c,[b])}}
Jv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Ts(void 0===c?0:c)){a=this.client;var e=Ns(d);d={cttAuthInfo:Vs(c)||void 0,sequenceGroup:c};M("il_via_jspb")?(b=(new Zj).i(c),e=e.getAsJspb(),b=G(b,Nj,2,e),F(b,4,Ik.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?Bv("visualElementGestured",d,void 0,b):qs(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===
c?Bv("visualElementGestured",d,e):a?hs("visualElementGestured",e,a,d):Lm("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
Jv.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.j.has(c)?this.v.push([a,b]):Mv(this,a,b,c)};
function Mv(a,b,c,d){d=void 0===d?0:d;var e=Ts(d);d=b||Rs(d);e&&d&&(a=a.client,b={cttAuthInfo:Vs(e)||void 0,sequenceGroup:e},M("il_via_jspb")?(c=new ck,c.i(e),d=d.getAsJspb(),G(c,Nj,2,d),"UNDEFINED_CSN"===e?Bv("visualElementStateChanged",b,void 0,c):rs(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?Bv("visualElementStateChanged",b,c):a?hs("visualElementStateChanged",c,a,b):Lm("visualElementStateChanged",c,b)))}
function Nv(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){Ov(a,b,c);var f=Rs(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,Lv(a,h[0],h[1]||f,c.layer);f=p(a.v);for(g=f.next();!g.done;g=f.next())g=g.value,Mv(a,g[0],g[1])}};
Ts(c.layer)||a.l();if(c.Xb)for(var d=p(c.Xb),e=d.next();!e.done;e=d.next())Kv(a,e.value,c.layer);else As(Error("Delayed screen needs a data promise."))}
function Ov(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.cd?c.cd:c.layer;var e=Ts(d);d=Rs(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=zv(a.client,b,f,c.Wb,c.cttAuthInfo,g,c.Er)}catch(m){Ds(m,{Or:b,rootVe:d,Lr:void 0,Ar:e,Kr:f,Wb:c.Wb});As(m);return}Ws(k,b,c.layer,c.cttAuthInfo);
if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(Ls));for(f=b.next();!f.done;f=b.next())if(Ts(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:Vs(e)||void 0,sequenceGroup:e,endOfSequence:g},M("il_via_jspb")?(h=(new ak).i(e),d=d.getAsJspb(),d=G(h,Nj,2,d),F(d,4,g?16:8),"UNDEFINED_CSN"===e?Bv("visualElementHidden",f,void 0,d):ps(d,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"===e?Bv("visualElementHidden",f,d):b?hs("visualElementHidden",
d,b,f):Lm("visualElementHidden",d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Ru({clientScreenNonce:k});d=Iv.getInstance();M("use_ts_visibilitylogger")?(d=Hv(),M("safe_logging_library_killswitch")?(d.clear(),d.csn=Ts()):il(Fv().j).bind(Fv())()):d.clear();d=Rs(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,M("safe_logging_library_killswitch")?Dv(void 0,e,d):il(Cv)(void 0,e,d,void 0,void 0,void 0));a.j.delete(c.layer||
0);a.l=void 0;e=p(a.s);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Lv(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){As(m)}}for(c=a.m.length=0;c<a.M.length;c++){e=a.M[c];try{e()}catch(m){As(m)}}}
;function Pv(){var a,b,c;return x(function(d){if(1==d.h)return a=pr().resolve(ev),a?v(d,$u(a),2):(Bs(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Bs(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Br;return d.return(c)}Bs(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Qv=y.caches,Rv;function Sv(a){var b=a.indexOf(":");return-1===b?{jc:a}:{jc:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Tv(){return x(function(a){if(void 0!==Rv)return a.return(Rv);Rv=new Promise(function(b){var c;return x(function(d){switch(d.h){case 1:return za(d,2),v(d,Qv.open("test-only"),4);case 4:return v(d,Qv.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Rv)})}
function Uv(a){var b,c,d,e,f,g,h;x(function(k){if(1==k.h)return v(k,Tv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return v(k,Qv.keys(),3)}c=k.i;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Sv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Qv.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function Vv(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.h)return v(h,Tv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Bm("cache contains other");return v(h,Qv.keys(),3)}b=h.i;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Sv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Wv(){try{return!!self.localStorage}catch(a){return!1}}
;function Xv(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Yv(a){if(Wv()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Xv(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Zv(){if(!Wv())return!1;var a=Bm(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=Xv(c.value),void 0!==c&&c!==a)return!0;return!1}
;function $v(){Pv().then(function(a){a&&($n(a),Uv(a),Yv(a))})}
function aw(){var a=new uq;li.S(function(){var b,c,d,e;return x(function(f){switch(f.h){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=Bm("clear");if(b.startsWith("V")){var g=[b];$n(g);Uv(g);Yv(g);return f.return()}c=Zv();return v(f,Vv(),3);case 3:return d=f.i,v(f,ao(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.U()?$v():a.l.add("publicytnetworkstatus-online",$v,!0,void 0,void 0),f.h=0}})})}
;var Th=ia(["data-"]);function bw(a){a&&(a.dataset?a.dataset[cw("loaded")]="true":Sh(a))}
function dw(a,b){return a?a.dataset?a.dataset[cw(b)]:a.getAttribute("data-"+b):null}
var ew={};function cw(a){return ew[a]||(ew[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var fw=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,gw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function hw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(fw,""),c=c.replace(gw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else iw(a,b,c)}
function iw(a,b,c){c=void 0===c?null:c;var d=jw(a),e=document.getElementById(d),f=e&&dw(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=br(d,b),b=""+Ta(b),kw[b]=f),g||(e=lw(a,d,function(){dw(e,"loaded")||(bw(e),er(d),Al($a(fr,d),0))},c)))}
function lw(a,b,c,d){d=void 0===d?null:d;var e=pf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Vh(e,Zi(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function mw(a){a=jw(a);var b=document.getElementById(a);b&&(fr(a),b.parentNode.removeChild(b))}
function nw(a,b){a&&b&&(a=""+Ta(b),(a=kw[a])&&dr(a))}
function jw(a){var b=document.createElement("a");gc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+lc(a)}
var kw={};var ow=[],pw=!1;function qw(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&ht()){var a=L("PLAYER_VARS",{});if("1"!=ub(a)&&!jt(a)){var b=function(){pw=!0;"google_ad_status"in window?Yk("DCLKSTAT",1):Yk("DCLKSTAT",2)};
try{hw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ow.push(li.S(function(){if(!(pw||"google_ad_status"in window)){try{nw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}pw=!0;Yk("DCLKSTAT",3)}},5E3))}}}
function rw(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function sw(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?zm():d;this.l=c;this.j=d;this.i=new Kh;this.h=a;a={};c=p(this.h.entries());for(d=c.next();!d.done;a={Fa:a.Fa,Ra:a.Ra},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Ra=d;a.Fa=e;d=function(f){return function(){f.Fa.Bb();b.h[f.Ra].mb=!0;b.h.every(function(g){return!0===g.mb})&&b.i.resolve()}}(a);
e=vm(d,tw(this,a.Fa));this.h[a.Ra]=Object.assign({},a.Fa,{Bb:d,jobId:e})}}
function uw(a){var b=Array.from(a.h.keys()).sort(function(d,e){return tw(a,a.h[e])-tw(a,a.h[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.mb||(a.j.ea(c.jobId),vm(c.Bb,10))}
sw.prototype.cancel=function(){for(var a=p(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.mb||this.j.ea(b.jobId),b.mb=!0;this.i.resolve()};
function tw(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function xw(a){this.state=a;this.plugins=[];this.o=void 0}
xw.prototype.install=function(){this.plugins.push.apply(this.plugins,ja(Ka.apply(0,arguments)))};
xw.prototype.uninstall=function(){var a=this;Ka.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
xw.prototype.transition=function(a,b){var c=this,d=this.v.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.D===a}):f.from===c.state&&f.D===a});
if(d){this.j&&(uw(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(yw(this,e,this.o),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function yw(a,b,c){return function(){var d=Ka.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
zm();var g={};e=p(e);for(var h=e.next();!h.done;g={Sa:g.Sa},h=e.next())g.Sa=h.value,xm(function(k){return function(){k.Sa.callback.apply(k.Sa,ja(d))}}(g));
f=f.map(function(k){var m;return{Bb:function(){k.callback.apply(k,ja(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.j=new sw(f))}}
fa.Object.defineProperties(xw.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function zw(a){xw.call(this,void 0===a?"document_active":a);var b=this;this.o=10;this.h=new Map;this.v=[{from:"document_active",D:"document_disposed_preventable",action:this.M},{from:"document_active",D:"document_disposed",action:this.l},{from:"document_disposed_preventable",D:"document_disposed",action:this.l},{from:"document_disposed_preventable",D:"flush_logs",action:this.m},{from:"document_disposed_preventable",D:"document_active",action:this.i},{from:"document_disposed",D:"flush_logs",action:this.m},
{from:"document_disposed",D:"document_active",action:this.i},{from:"document_disposed",D:"document_disposed",action:function(){}},
{from:"flush_logs",D:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
u(zw,xw);zw.prototype.M=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
zw.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
zw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
zw.prototype.i=function(){this.h=new Map};function Aw(a){xw.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.v=[{from:"document_visibility_unknown",D:"document_visible",action:this.i},{from:"document_visibility_unknown",D:"document_hidden",action:this.h},{from:"document_visibility_unknown",D:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",D:"document_backgrounded",action:this.l},{from:"document_visible",D:"document_hidden",action:this.h},{from:"document_visible",D:"document_foregrounded",action:this.m},
{from:"document_visible",D:"document_visible",action:this.i},{from:"document_foregrounded",D:"document_visible",action:this.i},{from:"document_foregrounded",D:"document_hidden",action:this.h},{from:"document_foregrounded",D:"document_foregrounded",action:this.m},{from:"document_hidden",D:"document_visible",action:this.i},{from:"document_hidden",D:"document_backgrounded",action:this.l},{from:"document_hidden",D:"document_hidden",action:this.h},{from:"document_backgrounded",D:"document_hidden",action:this.h},
{from:"document_backgrounded",D:"document_backgrounded",action:this.l},{from:"document_backgrounded",D:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
u(Aw,xw);Aw.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Aw.prototype.h=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Aw.prototype.l=function(a,b){a(null==b?void 0:b.event)};
Aw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Bw(){this.h=new zw;this.i=new Aw}
Bw.prototype.install=function(){var a=Ka.apply(0,arguments);this.h.install.apply(this.h,ja(a));this.i.install.apply(this.i,ja(a))};function Cw(){Bw.call(this);var a={};this.install((a.document_disposed={callback:this.j},a));a={};this.install((a.flush_logs={callback:this.l},a))}
var Dw;u(Cw,Bw);Cw.prototype.l=function(){if(M("web_fp_via_jspb")){var a=new Mj,b=Ts();b&&F(a,1,b);b=new Gk;ce(b,Mj,380,Hk,a);ns(b);M("web_fp_via_jspb_and_json")&&Lm("finalPayload",{csn:Ts()})}else Lm("finalPayload",{csn:Ts()})};
Cw.prototype.j=function(){Fs(Gs)};function Ew(){}
Ew.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new Ew,A("ytglobal.storage_",a));return a};
Ew.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Fw()):d.return()})};
function Fw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
A("ytglobal.storageClass_",Ew);function Jm(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=al("ytidb_transaction_ended_event_rate_limit_session",.2)}
Jm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Gw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=al("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Gw(a,b){Ew.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Hw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Hw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Hw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Iw(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.i="widget";this.J=!!a;this.F=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.J&&(d.sessionId&&d.sessionId!=f.id||d.i&&d.i!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.s||0<=gb(d.s,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.s=this.j=this.o=null;window.addEventListener("message",this.F)}
u(Iw,J);Iw.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.i&&(a.channel=this.i);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){kl(d)}}};
Iw.prototype.C=function(){window.removeEventListener("message",this.F);J.prototype.C.call(this)};function Jw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Iw(!!L("WIDGET_ID_ENFORCE")),b=this.ed.bind(this);a.o=b;a.s=null;this.h.i="widget";if(a=L("WIDGET_ID"))this.h.sessionId=a}
l=Jw.prototype;l.ed=function(a,b,c){"addEventListener"===a&&b?this.Ab(b[0],c):this.Lb(a,b,c)};
l.Lb=function(){};
l.tb=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
l.Ab=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.tb(a,b)),this.j[a]=!0)};
l.addEventListener=function(){};
l.Pc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.wb());this.sendMessage("onReady");hb(this.i,this.pc,this);this.i=[]};
l.wb=function(){return null};
function Kw(a,b){a.sendMessage("infoDelivery",b)}
l.pc=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.pc({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};var Lw={},Mw=(Lw["api.invalidparam"]=2,Lw.auth=150,Lw["drm.auth"]=150,Lw["heartbeat.net"]=150,Lw["heartbeat.servererror"]=150,Lw["heartbeat.stop"]=150,Lw["html5.unsupportedads"]=5,Lw["fmt.noneavailable"]=5,Lw["fmt.decode"]=5,Lw["fmt.unplayable"]=5,Lw["html5.missingapi"]=5,Lw["html5.unsupportedlive"]=5,Lw["drm.unavailable"]=5,Lw["mrm.blocked"]=151,Lw);var Nw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Ow(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Pw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=p(Nw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Qw(a,b,c,d){if(Sa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Rw(a){Jw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.pd.bind(this));this.addEventListener("onVolumeChange",this.qd.bind(this));this.addEventListener("onApiChange",this.kd.bind(this));this.addEventListener("onPlaybackQualityChange",this.md.bind(this));this.addEventListener("onPlaybackRateChange",this.nd.bind(this));this.addEventListener("onStateChange",this.od.bind(this));this.addEventListener("onWebglSettingsChanged",
this.rd.bind(this))}
u(Rw,Jw);l=Rw.prototype;
l.Lb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Ow(a)){var d=b;if(Sa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Pw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Pw(e);break;case "loadPlaylist":case "cuePlaylist":e=Qw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Ow(a)&&Kw(this,this.wb())}};
l.Ab=function(a,b){("onReady"===a||"onError"===a&&this.l)&&this.api.logApiCall(a+" invocation",b);this.api.logApiCall(a+" registration",b);Jw.prototype.Ab.call(this,a,b)};
l.tb=function(a,b){var c=this,d=Jw.prototype.tb.call(this,a,b);return function(e){c.api.logApiCall(a+" invocation",b);d(e)}};
l.onReady=function(){var a=this.Pc.bind(this);this.h.j=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.sendMessage("onError",(a?Mw[a]||b:b).toString())}};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.wb=function(){if(!this.api)return null;var a=this.api.getApiInterface();mb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.od=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Kw(this,a)};
l.md=function(a){Kw(this,{playbackQuality:a})};
l.nd=function(a){Kw(this,{playbackRate:a})};
l.kd=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.qd=function(){Kw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.pd=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Kw(this,a)};
l.rd=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Kw(this,a)};
l.dispose=function(){Jw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Sw(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.lc,this)}
u(Sw,J);l=Sw.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.ya("RECEIVING"))};
l.ya=function(a,b){this.started&&!this.h()&&this.connection.ya(a,b)};
l.lc=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Tw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Uw(a,c))&&this.ya(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.ld.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.ld=function(a,b){this.started&&!this.h()&&this.connection.ya(a,this.vb(a,b))};
l.vb=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.C=function(){var a=this.connection;a.h()||Ii(a.i,"command",this.lc,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.C.call(this)};function Vw(a,b){Sw.call(this,b);this.api=a;this.start()}
u(Vw,Sw);Vw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Vw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Tw(a,b){switch(a){case "loadVideoById":return a=Pw(b),[a];case "cueVideoById":return a=Pw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Qw(b),[a];case "cuePlaylist":return a=Qw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Uw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Vw.prototype.vb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Sw.prototype.vb.call(this,a,b)};
Vw.prototype.C=function(){Sw.prototype.C.call(this);delete this.api};function Ww(a){a=void 0===a?!1:a;J.call(this);this.i=new K(a);we(this,this.i)}
ab(Ww,J);Ww.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Ww.prototype.m=function(a,b){this.h()||this.i.sa.apply(this.i,arguments)};function Xw(a,b,c){Ww.call(this);this.l=a;this.j=b;this.id=c}
u(Xw,Ww);Xw.prototype.ya=function(a,b){this.h()||this.l.ya(this.j,this.id,a,b)};
Xw.prototype.C=function(){this.j=this.l=null;Ww.prototype.C.call(this)};function Yw(a,b,c){J.call(this);this.i=a;this.origin=c;this.j=Pq(window,"message",this.l.bind(this));this.connection=new Xw(this,a,b);we(this,this.connection)}
u(Yw,J);Yw.prototype.ya=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Yw.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Yw.prototype.C=function(){Qq(this.j);this.i=null;J.prototype.C.call(this)};function Zw(){this.state=1;this.h=null}
l=Zw.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript;Eb("From proto message. b/166824318");d=d.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=Bb();d=f?f.createScript(d):d;d=new Gb(d,Fb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Eb("From proto message. b/166824318"),e=Mb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());$w(this,d,e,
a.program,b,c)}else Bs(Error("Cannot initialize botguard without program"))};
function $w(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,hw(c,function(){window[g]?ax(a,d,g,e):(a.state=3,mw(c),Bs(new P("Unable to load Botguard","from "+c)))},f)):b?(f=pf("SCRIPT"),b instanceof Gb?(b instanceof Gb&&b.constructor===Gb?b=b.j:(Qa(b),b="type_error:SafeScript"),f.textContent=b,Uh(f)):f.textContent=b,f.nonce=jc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?ax(a,d,g,e):(a.state=4,Bs(new P("Unable to load Botguard from JS")))):Bs(new P("Unable to load VM; no url or JS provided"))}
function ax(a,b,c,d){a.state=5;try{var e=new Lh({program:b,Sc:c,fd:M("att_web_record_metrics")});e.sd.then(function(){a.state=6;d&&d(b)});
a.Jb(e)}catch(f){a.state=7,f instanceof Error&&Bs(f)}}
l.invoke=function(a){a=void 0===a?{}:a;return this.Kb()?this.xc({Vb:a}):null};
l.dispose=function(){this.Mb()};
l.Mb=function(){this.Jb(null);this.state=8};
l.Kb=function(){return!!this.h};
l.xc=function(a){return this.h.sc(a)};
l.Jb=function(a){ue(this.h);this.h=a};function bx(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function cx(){Zw.apply(this,arguments)}
u(cx,Zw);cx.prototype.Mb=function(){this.state=8};
cx.prototype.Jb=function(a){var b;null==(b=bx())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.sc.bind(a)},A("yt.abuse.playerAttLoader",b),A("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(A("yt.abuse.playerAttLoader",null),A("yt.abuse.playerAttLoaderRun",null))};
cx.prototype.Kb=function(){return!!bx()};
cx.prototype.xc=function(a){return bx().bgvmc(a)};var dx=new cx;function ex(){return dx.Kb()}
function fx(a){a=void 0===a?{}:a;return dx.invoke(a)}
;function gx(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||wb(b);this.assets=a.assets||{};this.attrs=a.attrs||wb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
gx.prototype.clone=function(){var a=new gx,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Qa(c)?a[b]=wb(c):a[b]=c}return a};var hx=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ix(a){a=a||"";if(window.spf){var b=a.match(hx);spf.style.load(a,b?b[1]:"",void 0)}else jx(a)}
function jx(a){var b=kx(a),c=document.getElementById(b),d=c&&dw(c,"loaded");d||c&&!d||(c=lx(a,b,function(){dw(c,"loaded")||(bw(c),er(b),Al($a(fr,b),0))}))}
function lx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Zi(a);hc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function kx(a){var b=pf("A");gc(b,new Pb(a,Qb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+lc(a)}
;function mx(){J.call(this);this.i=[]}
u(mx,J);mx.prototype.C=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.C.call(this)};function nx(){mx.apply(this,arguments)}
u(nx,mx);function ox(a,b,c,d,e){J.call(this);var f=this;this.s=b;this.webPlayerContextConfig=d;this.Xa=e;this.ca=!1;this.api={};this.V=this.o=null;this.K=new K;this.i={};this.P=this.W=this.elementId=this.ta=this.config=null;this.O=!1;this.l=this.F=null;this.ka={};this.Ya=["onReady"];this.lastError=null;this.Ha=NaN;this.J={};this.Za=new nx(this);this.T=0;this.j=this.m=a;we(this,this.K);px(this);qx(this);we(this,this.Za);c?this.T=Al(function(){f.loadNewVideoConfig(c)},0):d&&(rx(this),sx(this))}
u(ox,J);l=ox.prototype;l.getId=function(){return this.s};
l.loadNewVideoConfig=function(a){if(!this.h()){this.T&&(window.clearTimeout(this.T),this.T=0);var b=a||{};b instanceof gx||(b=new gx(b));this.config=b;this.setConfig(a);sx(this);this.isReady()&&tx(this)}};
function rx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.s,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.s:a.config.attrs.id=a.s);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.ta=a;this.config=ux(a);rx(this);if(!this.W){var b;this.W=vx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=ei(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=ei(Number(a)||a))};
function tx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function wx(a){var b=!0,c=xx(a);c&&a.config&&(a=yx(a),b=dw(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function sx(a){if(!a.h()&&!a.O){var b=wx(a);if(b&&"html5"===(xx(a)?"html5":null))a.P="html5",a.isReady()||zx(a);else if(Ax(a),a.P="html5",b&&a.l&&a.m)a.m.appendChild(a.l),zx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.F=function(){c=!0;var d=Bx(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?ux(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Xa);zx(a)};
a.O=!0;b?a.F():(hw(yx(a),a.F),(b=Cx(a))&&ix(b),Dx(a)&&!c&&A("yt.player.Application.create",null))}}}
function xx(a){var b=of(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function zx(a){if(!a.h()){var b=xx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.O=!1;if(!Bx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Ex(a)}else a.Ha=Al(function(){zx(a)},50)}}
function Ex(a){px(a);a.ca=!0;var b=xx(a);if(b){a.o=Fx(a,b,"addEventListener");a.V=Fx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Fx(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.o&&a.o(g,a.i[g]);tx(a);a.W&&a.W(a.api);a.K.sa("onReady",a.api)}
function Fx(a,b,c){var d=b[c];return function(){var e=Ka.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Bs(f))}}}
function px(a){a.ca=!1;if(a.V)for(var b in a.i)a.i.hasOwnProperty(b)&&a.V(b,a.i[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.J={};a.o=null;a.V=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ta};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.ca};
function qx(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){er("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){er("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=vx(this,b);d&&(0<=gb(this.Ya,a)||this.i[a]||(b=Gx(this,a),this.o&&this.o(a,b)),this.K.subscribe(a,d),"onReady"===a&&this.isReady()&&Al(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=vx(this,b))&&Ii(this.K,a,b)};
function vx(a,b){var c=b;if("string"===typeof b){if(a.ka[b])return a.ka[b];c=function(){var d=Ka.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){As(f)}};
a.ka[b]=c}return c?c:null}
function Gx(a,b){var c="ytPlayer"+b+a.s;a.i[b]=c;y[c]=function(d){var e=Al(function(){if(!a.h()){try{a.K.sa(b,null!=d?d:void 0)}catch(h){Bs(new P("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.s,data:d}))}var f=a.J,g=String(e);g in f&&delete f[g]}},0);
tb(a.J,String(e))};
return c}
l.getPlayerType=function(){return this.P||(xx(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Ax(a){a.cancel();px(a);a.P=null;a.config&&(a.config.loaded=!1);var b=xx(a);b&&(wx(a)||!Dx(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.F&&nw(yx(this),this.F);window.clearTimeout(this.Ha);this.O=!1};
l.C=function(){Ax(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){As(b)}this.ka=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.ta=this.config=this.api=null;delete this.m;delete this.j;J.prototype.C.call(this)};
function Dx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function yx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Cx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Bx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===nl(c||"","&")[b]}
function ux(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?wb(e):e}return b}
;var Hx={},Ix="player_uid_"+(1E9*Math.random()>>>0);function Jx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?of(c):c;var e=Ix+"_"+Ta(c),f=Hx[e];if(f&&d)return Kx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new ox(c,e,a,b,void 0);Hx[e]=f;er("player-added",f.api);xe(f,function(){delete Hx[f.getId()]});
return f.api}
function Kx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Lx=null,Mx=null,Nx=null;function Ox(){Px()}
function Qx(){Px()}
function Px(){var a=Lx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Rx(){Lx&&Lx.sendAbandonmentPing&&Lx.sendAbandonmentPing();L("PL_ATT")&&dx.dispose();for(var a=li,b=0,c=ow.length;b<c;b++)a.ea(ow[b]);ow.length=0;mw("//static.doubleclick.net/instream/ad_status.js");pw=!1;Yk("DCLKSTAT",0);ve(Nx,Mx);Lx&&(Lx.removeEventListener("onVideoDataChange",Ox),Lx.destroy())}
;function Sx(a,b,c){a="ST-"+lc(a).toString(36);b=b?uc(b):"";c=c||5;ht()&&dm(a,b,c)}
;function Tx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=pc(window.location.href);g&&f.push(g);g=pc(d);if(0<=gb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),gc(f,d),d=f.href),d&&(d=qc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ts()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Sx(d,b,h)}else Sx(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=wc(a,k)+m;var r=void 0===r?Yh:r;a:{r=void 0===r?Yh:r;for(k=0;k<r.length;++k)if(m=r[k],m instanceof Wh&&m.Xc(a)){r=new Pb(a,Qb);break a}r=void 0}r=r||Tb;if(r instanceof Pb)var w=Rb(r);else{b:if(Oh){try{w=new URL(r)}catch(t){w="https:";break b}w=w.protocol}else c:{w=document.createElement("a");try{w.href=r}catch(t){w=void 0;break c}w=
w.protocol;w=":"===w||""===w?"https:":w}w="javascript:"!==w?r:void 0}void 0!==w&&(c.href=w)}return!0}
;A("yt.setConfig",Yk);A("yt.config.set",Yk);A("yt.setMsg",Ys);A("yt.msgs.set",Ys);A("yt.logging.errors.log",As);
A("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}st(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Lu();c=L("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=sl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Lx=Jx(a,c);Lx.addEventListener("onVideoDataChange",Ox);Lx.addEventListener("onReady",Qx);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?Nx=new Rw(Lx):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Mx=new Yw(window.parent,a,b),Nx=new Vw(Lx,Mx.connection));qw();M("ytidb_create_logger_embed_killswitch")||M("embeds_web_disable_nwl")||Im();a={};Dw||(Dw=new Cw);Dw.install((a.flush_logs={callback:function(){Qr()}},
a));
M("embeds_web_disable_nwl")||Fq();M("ytidb_clear_embedded_player")&&li.S(function(){var e;if(!tv){var f=pr(),g={Gb:sv,vc:rv};f.h.set(g.Gb,g);g={Ub:{feedbackEndpoint:Ht(nv),modifyChannelNotificationPreferenceEndpoint:Ht(ov),playlistEditEndpoint:Ht(pv),subscribeEndpoint:Ht(lv),unsubscribeEndpoint:Ht(mv),webPlayerShareEntityServiceEndpoint:Ht(qv)}};var h=Dt.getInstance(),k={};h&&(k.client_location=h);if(void 0===m){ut.h||(ut.h=new ut);var m=ut.h}void 0===e&&(e=f.resolve(sv));Zu(g,e,m,k);m={Gb:ev,wc:Yu.h};
f.h.set(m.Gb,m);tv=f.resolve(ev)}aw()})});
var Ux=il(function(){Su();tt();Jv.h||(Jv.h=new Jv);var a=Jv.h;var b=16623;var c=void 0===c?{}:c;Object.values(Zs).includes(b)||(Bs(new P("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.o=[];a.v=[];c.Xb?Nv(a,b,c):Ov(a,b,c)}),Vx=il(function(a){M("embeds_web_enable_load_player_from_page_show")&&!a.persisted&&(Su(),tt())}),Wx=il(function(a){M("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Rx():a.persisted||(M("embeds_web_enable_load_player_from_page_show")?
Rx():$c?setTimeout(function(){Rx()},0):Rx())}),Xx=il(Rx);
window.addEventListener?(window.addEventListener("load",Ux),M("embeds_web_enable_load_player_from_page_show")?(window.addEventListener("pageshow",Vx),window.addEventListener("pagehide",Wx)):$c?window.addEventListener("beforeunload",Wx):window.addEventListener("pagehide",Wx)):window.attachEvent&&(window.attachEvent("onload",Ux),window.attachEvent("onunload",Xx));A("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||ex);
A("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||fx);A("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||rw);A("yt.player.exports.navigate",B("yt.player.exports.navigate")||Tx);A("yt.util.activity.init",B("yt.util.activity.init")||Uq);A("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Xq);A("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Vq);}).call(this);
