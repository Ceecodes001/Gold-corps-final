(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Jp={exports:{}},Wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function gE(){if(Av)return Wl;Av=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:h,ref:o!==void 0?o:null,props:c}}return Wl.Fragment=e,Wl.jsx=n,Wl.jsxs=n,Wl}var Nv;function yE(){return Nv||(Nv=1,Jp.exports=gE()),Jp.exports}var u=yE(),em={exports:{}},Le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function vE(){if(Rv)return Le;Rv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.iterator;function E(B){return B===null||typeof B!="object"?null:(B=w&&B[w]||B["@@iterator"],typeof B=="function"?B:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,V={};function M(B,ae,pe){this.props=B,this.context=ae,this.refs=V,this.updater=pe||R}M.prototype.isReactComponent={},M.prototype.setState=function(B,ae){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ae,"setState")},M.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function L(){}L.prototype=M.prototype;function z(B,ae,pe){this.props=B,this.context=ae,this.refs=V,this.updater=pe||R}var F=z.prototype=new L;F.constructor=z,N(F,M.prototype),F.isPureReactComponent=!0;var W=Array.isArray,ee={H:null,A:null,T:null,S:null,V:null},te=Object.prototype.hasOwnProperty;function O(B,ae,pe,q,G,de){return pe=de.ref,{$$typeof:r,type:B,key:ae,ref:pe!==void 0?pe:null,props:de}}function C(B,ae){return O(B.type,ae,void 0,void 0,void 0,B.props)}function j(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function k(B){var ae={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(pe){return ae[pe]})}var D=/\/+/g;function S(B,ae){return typeof B=="object"&&B!==null&&B.key!=null?k(""+B.key):ae.toString(36)}function I(){}function he(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(I,I):(B.status="pending",B.then(function(ae){B.status==="pending"&&(B.status="fulfilled",B.value=ae)},function(ae){B.status==="pending"&&(B.status="rejected",B.reason=ae)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function Ee(B,ae,pe,q,G){var de=typeof B;(de==="undefined"||de==="boolean")&&(B=null);var le=!1;if(B===null)le=!0;else switch(de){case"bigint":case"string":case"number":le=!0;break;case"object":switch(B.$$typeof){case r:case e:le=!0;break;case x:return le=B._init,Ee(le(B._payload),ae,pe,q,G)}}if(le)return G=G(B),le=q===""?"."+S(B,0):q,W(G)?(pe="",le!=null&&(pe=le.replace(D,"$&/")+"/"),Ee(G,ae,pe,"",function(Ie){return Ie})):G!=null&&(j(G)&&(G=C(G,pe+(G.key==null||B&&B.key===G.key?"":(""+G.key).replace(D,"$&/")+"/")+le)),ae.push(G)),1;le=0;var xe=q===""?".":q+":";if(W(B))for(var ye=0;ye<B.length;ye++)q=B[ye],de=xe+S(q,ye),le+=Ee(q,ae,pe,de,G);else if(ye=E(B),typeof ye=="function")for(B=ye.call(B),ye=0;!(q=B.next()).done;)q=q.value,de=xe+S(q,ye++),le+=Ee(q,ae,pe,de,G);else if(de==="object"){if(typeof B.then=="function")return Ee(he(B),ae,pe,q,G);throw ae=String(B),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return le}function X(B,ae,pe){if(B==null)return B;var q=[],G=0;return Ee(B,q,"","",function(de){return ae.call(pe,de,G++)}),q}function fe(B){if(B._status===-1){var ae=B._result;ae=ae(),ae.then(function(pe){(B._status===0||B._status===-1)&&(B._status=1,B._result=pe)},function(pe){(B._status===0||B._status===-1)&&(B._status=2,B._result=pe)}),B._status===-1&&(B._status=0,B._result=ae)}if(B._status===1)return B._result.default;throw B._result}var ge=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function Pe(){}return Le.Children={map:X,forEach:function(B,ae,pe){X(B,function(){ae.apply(this,arguments)},pe)},count:function(B){var ae=0;return X(B,function(){ae++}),ae},toArray:function(B){return X(B,function(ae){return ae})||[]},only:function(B){if(!j(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Le.Component=M,Le.Fragment=n,Le.Profiler=o,Le.PureComponent=z,Le.StrictMode=s,Le.Suspense=g,Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,Le.__COMPILER_RUNTIME={__proto__:null,c:function(B){return ee.H.useMemoCache(B)}},Le.cache=function(B){return function(){return B.apply(null,arguments)}},Le.cloneElement=function(B,ae,pe){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var q=N({},B.props),G=B.key,de=void 0;if(ae!=null)for(le in ae.ref!==void 0&&(de=void 0),ae.key!==void 0&&(G=""+ae.key),ae)!te.call(ae,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&ae.ref===void 0||(q[le]=ae[le]);var le=arguments.length-2;if(le===1)q.children=pe;else if(1<le){for(var xe=Array(le),ye=0;ye<le;ye++)xe[ye]=arguments[ye+2];q.children=xe}return O(B.type,G,void 0,void 0,de,q)},Le.createContext=function(B){return B={$$typeof:h,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},Le.createElement=function(B,ae,pe){var q,G={},de=null;if(ae!=null)for(q in ae.key!==void 0&&(de=""+ae.key),ae)te.call(ae,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(G[q]=ae[q]);var le=arguments.length-2;if(le===1)G.children=pe;else if(1<le){for(var xe=Array(le),ye=0;ye<le;ye++)xe[ye]=arguments[ye+2];G.children=xe}if(B&&B.defaultProps)for(q in le=B.defaultProps,le)G[q]===void 0&&(G[q]=le[q]);return O(B,de,void 0,void 0,null,G)},Le.createRef=function(){return{current:null}},Le.forwardRef=function(B){return{$$typeof:p,render:B}},Le.isValidElement=j,Le.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:fe}},Le.memo=function(B,ae){return{$$typeof:y,type:B,compare:ae===void 0?null:ae}},Le.startTransition=function(B){var ae=ee.T,pe={};ee.T=pe;try{var q=B(),G=ee.S;G!==null&&G(pe,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(Pe,ge)}catch(de){ge(de)}finally{ee.T=ae}},Le.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},Le.use=function(B){return ee.H.use(B)},Le.useActionState=function(B,ae,pe){return ee.H.useActionState(B,ae,pe)},Le.useCallback=function(B,ae){return ee.H.useCallback(B,ae)},Le.useContext=function(B){return ee.H.useContext(B)},Le.useDebugValue=function(){},Le.useDeferredValue=function(B,ae){return ee.H.useDeferredValue(B,ae)},Le.useEffect=function(B,ae,pe){var q=ee.H;if(typeof pe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(B,ae)},Le.useId=function(){return ee.H.useId()},Le.useImperativeHandle=function(B,ae,pe){return ee.H.useImperativeHandle(B,ae,pe)},Le.useInsertionEffect=function(B,ae){return ee.H.useInsertionEffect(B,ae)},Le.useLayoutEffect=function(B,ae){return ee.H.useLayoutEffect(B,ae)},Le.useMemo=function(B,ae){return ee.H.useMemo(B,ae)},Le.useOptimistic=function(B,ae){return ee.H.useOptimistic(B,ae)},Le.useReducer=function(B,ae,pe){return ee.H.useReducer(B,ae,pe)},Le.useRef=function(B){return ee.H.useRef(B)},Le.useState=function(B){return ee.H.useState(B)},Le.useSyncExternalStore=function(B,ae,pe){return ee.H.useSyncExternalStore(B,ae,pe)},Le.useTransition=function(){return ee.H.useTransition()},Le.version="19.1.1",Le}var Cv;function _i(){return Cv||(Cv=1,em.exports=vE()),em.exports}var P=_i();const aa=mE(P);var tm={exports:{}},Xl={},nm={exports:{}},rm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function xE(){return Iv||(Iv=1,(function(r){function e(X,fe){var ge=X.length;X.push(fe);e:for(;0<ge;){var Pe=ge-1>>>1,B=X[Pe];if(0<o(B,fe))X[Pe]=fe,X[ge]=B,ge=Pe;else break e}}function n(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var fe=X[0],ge=X.pop();if(ge!==fe){X[0]=ge;e:for(var Pe=0,B=X.length,ae=B>>>1;Pe<ae;){var pe=2*(Pe+1)-1,q=X[pe],G=pe+1,de=X[G];if(0>o(q,ge))G<B&&0>o(de,q)?(X[Pe]=de,X[G]=ge,Pe=G):(X[Pe]=q,X[pe]=ge,Pe=pe);else if(G<B&&0>o(de,ge))X[Pe]=de,X[G]=ge,Pe=G;else break e}}return fe}function o(X,fe){var ge=X.sortIndex-fe.sortIndex;return ge!==0?ge:X.id-fe.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var g=[],y=[],x=1,w=null,E=3,R=!1,N=!1,V=!1,M=!1,L=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function W(X){for(var fe=n(y);fe!==null;){if(fe.callback===null)s(y);else if(fe.startTime<=X)s(y),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=n(y)}}function ee(X){if(V=!1,W(X),!N)if(n(g)!==null)N=!0,te||(te=!0,S());else{var fe=n(y);fe!==null&&Ee(ee,fe.startTime-X)}}var te=!1,O=-1,C=5,j=-1;function k(){return M?!0:!(r.unstable_now()-j<C)}function D(){if(M=!1,te){var X=r.unstable_now();j=X;var fe=!0;try{e:{N=!1,V&&(V=!1,z(O),O=-1),R=!0;var ge=E;try{t:{for(W(X),w=n(g);w!==null&&!(w.expirationTime>X&&k());){var Pe=w.callback;if(typeof Pe=="function"){w.callback=null,E=w.priorityLevel;var B=Pe(w.expirationTime<=X);if(X=r.unstable_now(),typeof B=="function"){w.callback=B,W(X),fe=!0;break t}w===n(g)&&s(g),W(X)}else s(g);w=n(g)}if(w!==null)fe=!0;else{var ae=n(y);ae!==null&&Ee(ee,ae.startTime-X),fe=!1}}break e}finally{w=null,E=ge,R=!1}fe=void 0}}finally{fe?S():te=!1}}}var S;if(typeof F=="function")S=function(){F(D)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,he=I.port2;I.port1.onmessage=D,S=function(){he.postMessage(null)}}else S=function(){L(D,0)};function Ee(X,fe){O=L(function(){X(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_next=function(X){switch(E){case 1:case 2:case 3:var fe=3;break;default:fe=E}var ge=E;E=fe;try{return X()}finally{E=ge}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(X,fe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ge=E;E=X;try{return fe()}finally{E=ge}},r.unstable_scheduleCallback=function(X,fe,ge){var Pe=r.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?Pe+ge:Pe):ge=Pe,X){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ge+B,X={id:x++,callback:fe,priorityLevel:X,startTime:ge,expirationTime:B,sortIndex:-1},ge>Pe?(X.sortIndex=ge,e(y,X),n(g)===null&&X===n(y)&&(V?(z(O),O=-1):V=!0,Ee(ee,ge-Pe))):(X.sortIndex=B,e(g,X),N||R||(N=!0,te||(te=!0,S()))),X},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(X){var fe=E;return function(){var ge=E;E=fe;try{return X.apply(this,arguments)}finally{E=ge}}}})(rm)),rm}var jv;function bE(){return jv||(jv=1,nm.exports=xE()),nm.exports}var im={exports:{}},ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function _E(){if(Dv)return ln;Dv=1;var r=_i();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(g,y,x){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:g,containerInfo:y,implementation:x}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ln.createPortal=function(g,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return c(g,y,null,x)},ln.flushSync=function(g){var y=h.T,x=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=y,s.p=x,s.d.f()}},ln.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},ln.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},ln.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var x=y.as,w=p(x,y.crossOrigin),E=typeof y.integrity=="string"?y.integrity:void 0,R=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:w,integrity:E,fetchPriority:R}):x==="script"&&s.d.X(g,{crossOrigin:w,integrity:E,fetchPriority:R,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ln.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=p(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},ln.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,w=p(x,y.crossOrigin);s.d.L(g,x,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ln.preloadModule=function(g,y){if(typeof g=="string")if(y){var x=p(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},ln.requestFormReset=function(g){s.d.r(g)},ln.unstable_batchedUpdates=function(g,y){return g(y)},ln.useFormState=function(g,y,x){return h.H.useFormState(g,y,x)},ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},ln.version="19.1.1",ln}var kv;function eg(){if(kv)return im.exports;kv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),im.exports=_E(),im.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function wE(){if(Ov)return Xl;Ov=1;var r=bE(),e=_i(),n=eg();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function h(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function g(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return p(f),t;if(m===l)return p(f),i;m=m.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=m;else{for(var _=!1,T=f.child;T;){if(T===a){_=!0,a=f,l=m;break}if(T===l){_=!0,l=f,a=m;break}T=T.sibling}if(!_){for(T=m.child;T;){if(T===a){_=!0,a=m,l=f;break}if(T===l){_=!0,l=m,a=f;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var x=Object.assign,w=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),F=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function S(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case M:return"Profiler";case V:return"StrictMode";case ee:return"Suspense";case te:return"SuspenseList";case j:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case F:return(t.displayName||"Context")+".Provider";case z:return(t._context.displayName||"Context")+".Consumer";case W:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case C:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}var Ee=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},Pe=[],B=-1;function ae(t){return{current:t}}function pe(t){0>B||(t.current=Pe[B],Pe[B]=null,B--)}function q(t,i){B++,Pe[B]=t.current,t.current=i}var G=ae(null),de=ae(null),le=ae(null),xe=ae(null);function ye(t,i){switch(q(le,i),q(de,t),q(G,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?ev(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=ev(i),t=tv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}pe(G),q(G,t)}function Ie(){pe(G),pe(de),pe(le)}function Ve(t){t.memoizedState!==null&&q(xe,t);var i=G.current,a=tv(i,t.type);i!==a&&(q(de,t),q(G,a))}function Qt(t){de.current===t&&(pe(G),pe(de)),xe.current===t&&(pe(xe),Gl._currentValue=ge)}var Kt=Object.prototype.hasOwnProperty,Ln=r.unstable_scheduleCallback,Lr=r.unstable_cancelCallback,ws=r.unstable_shouldYield,Ta=r.unstable_requestPaint,ie=r.unstable_now,Ne=r.unstable_getCurrentPriorityLevel,je=r.unstable_ImmediatePriority,Ue=r.unstable_UserBlockingPriority,ut=r.unstable_NormalPriority,vn=r.unstable_LowPriority,Vn=r.unstable_IdlePriority,qo=r.log,Wc=r.unstable_setDisableYieldValue,bt=null,nt=null;function An(t){if(typeof qo=="function"&&Wc(t),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(bt,t)}catch{}}var an=Math.clz32?Math.clz32:Es,Xc=Math.log,ef=Math.LN2;function Es(t){return t>>>=0,t===0?32:31-(Xc(t)/ef|0)|0}var Ts=256,Ss=4194304;function tr(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Sa(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~m,l!==0?f=tr(l):(_&=T,_!==0?f=tr(_):a||(a=T&~t,a!==0&&(f=tr(a))))):(T=l&~m,T!==0?f=tr(T):_!==0?f=tr(_):a||(a=l&~t,a!==0&&(f=tr(a)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,a=i&-i,m>=a||m===32&&(a&4194048)!==0)?i:f}function As(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Go(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yo(){var t=Ts;return Ts<<=1,(Ts&4194048)===0&&(Ts=256),t}function $o(){var t=Ss;return Ss<<=1,(Ss&62914560)===0&&(Ss=4194304),t}function Vr(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Ur(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qo(t,i,a,l,f,m){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,U=t.expirationTimes,K=t.hiddenUpdates;for(a=_&~a;0<a;){var re=31-an(a),ce=1<<re;T[re]=0,U[re]=-1;var Z=K[re];if(Z!==null)for(K[re]=null,re=0;re<Z.length;re++){var J=Z[re];J!==null&&(J.lane&=-536870913)}a&=~ce}l!==0&&hr(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(_&~i))}function hr(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-an(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Ko(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-an(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}function Ni(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Aa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ri(){var t=fe.p;return t!==0?t:(t=window.event,t===void 0?32:bv(t.type))}function Zc(t,i){var a=fe.p;try{return fe.p=t,i()}finally{fe.p=a}}var pt=Math.random().toString(36).slice(2),Pt="__reactFiber$"+pt,Ct="__reactProps$"+pt,Un="__reactContainer$"+pt,Wo="__reactEvents$"+pt,tf="__reactListeners$"+pt,Ci="__reactHandles$"+pt,Jc="__reactResources$"+pt,Ns="__reactMarker$"+pt;function Ii(t){delete t[Pt],delete t[Ct],delete t[Wo],delete t[tf],delete t[Ci]}function zr(t){var i=t[Pt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Un]||a[Pt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=sv(t);t!==null;){if(a=t[Pt])return a;t=sv(t)}return i}t=a,a=t.parentNode}return null}function fr(t){if(t=t[Pt]||t[Un]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function pr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function fn(t){var i=t[Jc];return i||(i=t[Jc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Tt(t){t[Ns]=!0}var Xo=new Set,Na={};function nr(t,i){Br(t,i),Br(t+"Capture",i)}function Br(t,i){for(Na[t]=i,t=0;t<i.length;t++)Xo.add(i[t])}var eu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tu={},Rs={};function nu(t){return Kt.call(Rs,t)?!0:Kt.call(tu,t)?!1:eu.test(t)?Rs[t]=!0:(tu[t]=!0,!1)}function ji(t,i,a){if(nu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function mr(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Wt(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var Cs,ru;function Fr(t){if(Cs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Cs=i&&i[1]||"",ru=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cs+t+ru}var Ra=!1;function Ca(t,i){if(!t||Ra)return"";Ra=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ce=function(){throw Error()};if(Object.defineProperty(ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ce,[])}catch(J){var Z=J}Reflect.construct(t,[],ce)}else{try{ce.call()}catch(J){Z=J}t.call(ce.prototype)}}else{try{throw Error()}catch(J){Z=J}(ce=t())&&typeof ce.catch=="function"&&ce.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),_=m[0],T=m[1];if(_&&T){var U=_.split(`
`),K=T.split(`
`);for(f=l=0;l<U.length&&!U[l].includes("DetermineComponentFrameRoot");)l++;for(;f<K.length&&!K[f].includes("DetermineComponentFrameRoot");)f++;if(l===U.length||f===K.length)for(l=U.length-1,f=K.length-1;1<=l&&0<=f&&U[l]!==K[f];)f--;for(;1<=l&&0<=f;l--,f--)if(U[l]!==K[f]){if(l!==1||f!==1)do if(l--,f--,0>f||U[l]!==K[f]){var re=`
`+U[l].replace(" at new "," at ");return t.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",t.displayName)),re}while(1<=l&&0<=f);break}}}finally{Ra=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Fr(a):""}function Zo(t){switch(t.tag){case 26:case 27:case 5:return Fr(t.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 15:return Ca(t.type,!1);case 11:return Ca(t.type.render,!1);case 1:return Ca(t.type,!0);case 31:return Fr("Activity");default:return""}}function Ia(t){try{var i="";do i+=Zo(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jo(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nf(t){var i=Jo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(_){l=""+_,m.call(this,_)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ja(t){t._valueTracker||(t._valueTracker=nf(t))}function el(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Jo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Is(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rf=/[\n"\\]/g;function It(t){return t.replace(rf,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Nn(t,i,a,l,f,m,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),i!=null?_==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+pn(i)):t.value!==""+pn(i)&&(t.value=""+pn(i)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),i!=null?Di(t,_,pn(i)):a!=null?Di(t,_,pn(a)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+pn(T):t.removeAttribute("name")}function js(t,i,a,l,f,m,_,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;a=a!=null?""+pn(a):"",i=i!=null?""+pn(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function Di(t,i,a){i==="number"&&Is(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Hr(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+pn(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function st(t,i,a){if(i!=null&&(i=""+pn(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+pn(a):""}function Ds(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Ee(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=pn(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function zn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ks=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function iu(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||ks.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function tl(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&iu(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&iu(t,m,i[m])}function nl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),af=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Da(t){return af.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var qr=null;function Bn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gr=null,Yr=null;function rl(t){var i=fr(t);if(i&&(t=i.stateNode)){var a=t[Ct]||null;e:switch(t=i.stateNode,i.type){case"input":if(Nn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+It(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=l[Ct]||null;if(!f)throw Error(s(90));Nn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&el(l)}break e;case"textarea":st(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Hr(t,!!a.multiple,i,!1)}}}var gr=!1;function su(t,i,a){if(gr)return t(i,a);gr=!0;try{var l=t(i);return l}finally{if(gr=!1,(Gr!==null||Yr!==null)&&(Zu(),Gr&&(i=Gr,t=Yr,Yr=Gr=null,rl(i),t)))for(i=0;i<t.length;i++)rl(t[i])}}function Os(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Ct]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fn=!1;if(rr)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){Fn=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{Fn=!1}var yr=null,ki=null,$r=null;function il(){if($r)return $r;var t,i=ki,a=i.length,l,f="value"in yr?yr.value:yr.textContent,m=f.length;for(t=0;t<a&&i[t]===f[t];t++);var _=a-t;for(l=1;l<=_&&i[a-l]===f[m-l];l++);return $r=f.slice(t,1<l?1-l:void 0)}function vr(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function xr(){return!0}function sl(){return!1}function Ft(t){function i(a,l,f,m,_){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?xr:sl,this.isPropagationStopped=sl,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),i}var et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Ft(et),Ps=x({},et,{view:0,detail:0}),au=Ft(Ps),Oa,Ma,br,Ls=x({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==br&&(br&&t.type==="mousemove"?(Oa=t.screenX-br.screenX,Ma=t.screenY-br.screenY):Ma=Oa=0,br=t),Oa)},movementY:function(t){return"movementY"in t?t.movementY:Ma}}),Hn=Ft(Ls),ou=x({},Ls,{dataTransfer:0}),of=Ft(ou),Vs=x({},Ps,{relatedTarget:0}),Pa=Ft(Vs),al=x({},et,{animationName:0,elapsedTime:0,pseudoElement:0}),La=Ft(al),lu=x({},et,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Va=Ft(lu),lf=x({},et,{data:0}),ol=Ft(lf),Us={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ll(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=uu[t])?!!i[t]:!1}function zs(){return ll}var du=x({},Ps,{key:function(t){if(t.key){var i=Us[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=vr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(t){return t.type==="keypress"?vr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ua=Ft(du),hu=x({},Ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cl=Ft(hu),Qr=x({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),fu=Ft(Qr),pu=x({},et,{propertyName:0,elapsedTime:0,pseudoElement:0}),mu=Ft(pu),gu=x({},Ls,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),za=Ft(gu),mn=x({},et,{newState:0,oldState:0}),yu=Ft(mn),vu=[9,13,27,32],_r=rr&&"CompositionEvent"in window,d=null;rr&&"documentMode"in document&&(d=document.documentMode);var v=rr&&"TextEvent"in window&&!d,b=rr&&(!_r||d&&8<d&&11>=d),A=" ",$=!1;function ne(t,i){switch(t){case"keyup":return vu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function me(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $e=!1;function Lt(t,i){switch(t){case"compositionend":return me(i);case"keypress":return i.which!==32?null:($=!0,A);case"textInput":return t=i.data,t===A&&$?null:t;default:return null}}function Qe(t,i){if($e)return t==="compositionend"||!_r&&ne(t,i)?(t=il(),$r=ki=yr=null,$e=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return b&&i.locale!=="ko"?null:i.data;default:return null}}var Ht={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ht[t.type]:i==="textarea"}function Kr(t,i,a,l){Gr?Yr?Yr.push(l):Yr=[l]:Gr=l,i=id(i,"onChange"),0<i.length&&(a=new ka("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Xt=null,wr=null;function ul(t){Ky(t,0)}function xu(t){var i=pr(t);if(el(i))return t}function g0(t,i){if(t==="change")return i}var y0=!1;if(rr){var cf;if(rr){var uf="oninput"in document;if(!uf){var v0=document.createElement("div");v0.setAttribute("oninput","return;"),uf=typeof v0.oninput=="function"}cf=uf}else cf=!1;y0=cf&&(!document.documentMode||9<document.documentMode)}function x0(){Xt&&(Xt.detachEvent("onpropertychange",b0),wr=Xt=null)}function b0(t){if(t.propertyName==="value"&&xu(wr)){var i=[];Kr(i,wr,t,Bn(t)),su(ul,i)}}function G4(t,i,a){t==="focusin"?(x0(),Xt=i,wr=a,Xt.attachEvent("onpropertychange",b0)):t==="focusout"&&x0()}function Y4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(wr)}function $4(t,i){if(t==="click")return xu(i)}function Q4(t,i){if(t==="input"||t==="change")return xu(i)}function K4(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Rn=typeof Object.is=="function"?Object.is:K4;function dl(t,i){if(Rn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!Kt.call(i,f)||!Rn(t[f],i[f]))return!1}return!0}function _0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function w0(t,i){var a=_0(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_0(a)}}function E0(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?E0(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function T0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Is(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Is(t.document)}return i}function df(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var W4=rr&&"documentMode"in document&&11>=document.documentMode,Ba=null,hf=null,hl=null,ff=!1;function S0(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ff||Ba==null||Ba!==Is(l)||(l=Ba,"selectionStart"in l&&df(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),hl&&dl(hl,l)||(hl=l,l=id(hf,"onSelect"),0<l.length&&(i=new ka("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Ba)))}function Bs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Fa={animationend:Bs("Animation","AnimationEnd"),animationiteration:Bs("Animation","AnimationIteration"),animationstart:Bs("Animation","AnimationStart"),transitionrun:Bs("Transition","TransitionRun"),transitionstart:Bs("Transition","TransitionStart"),transitioncancel:Bs("Transition","TransitionCancel"),transitionend:Bs("Transition","TransitionEnd")},pf={},A0={};rr&&(A0=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function Fs(t){if(pf[t])return pf[t];if(!Fa[t])return t;var i=Fa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in A0)return pf[t]=i[a];return t}var N0=Fs("animationend"),R0=Fs("animationiteration"),C0=Fs("animationstart"),X4=Fs("transitionrun"),Z4=Fs("transitionstart"),J4=Fs("transitioncancel"),I0=Fs("transitionend"),j0=new Map,mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mf.push("scrollEnd");function ir(t,i){j0.set(t,i),nr(i,[t])}var D0=new WeakMap;function qn(t,i){if(typeof t=="object"&&t!==null){var a=D0.get(t);return a!==void 0?a:(i={value:t,source:i,stack:Ia(i)},D0.set(t,i),i)}return{value:t,source:i,stack:Ia(i)}}var Gn=[],Ha=0,gf=0;function bu(){for(var t=Ha,i=gf=Ha=0;i<t;){var a=Gn[i];Gn[i++]=null;var l=Gn[i];Gn[i++]=null;var f=Gn[i];Gn[i++]=null;var m=Gn[i];if(Gn[i++]=null,l!==null&&f!==null){var _=l.pending;_===null?f.next=f:(f.next=_.next,_.next=f),l.pending=f}m!==0&&k0(a,f,m)}}function _u(t,i,a,l){Gn[Ha++]=t,Gn[Ha++]=i,Gn[Ha++]=a,Gn[Ha++]=l,gf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function yf(t,i,a,l){return _u(t,i,a,l),wu(t)}function qa(t,i){return _u(t,null,null,i),wu(t)}function k0(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var f=!1,m=t.return;m!==null;)m.childLanes|=a,l=m.alternate,l!==null&&(l.childLanes|=a),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-an(a),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=a|536870912),m):null}function wu(t){if(50<Ll)throw Ll=0,Ep=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ga={};function ew(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,i,a,l){return new ew(t,i,a,l)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wr(t,i){var a=t.alternate;return a===null?(a=Cn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function O0(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Eu(t,i,a,l,f,m){var _=0;if(l=t,typeof t=="function")vf(t)&&(_=1);else if(typeof t=="string")_=nE(t,a,G.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case j:return t=Cn(31,a,i,f),t.elementType=j,t.lanes=m,t;case N:return Hs(a.children,f,m,i);case V:_=8,f|=24;break;case M:return t=Cn(12,a,i,f|2),t.elementType=M,t.lanes=m,t;case ee:return t=Cn(13,a,i,f),t.elementType=ee,t.lanes=m,t;case te:return t=Cn(19,a,i,f),t.elementType=te,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:case F:_=10;break e;case z:_=9;break e;case W:_=11;break e;case O:_=14;break e;case C:_=16,l=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=Cn(_,a,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Hs(t,i,a,l){return t=Cn(7,t,l,i),t.lanes=a,t}function xf(t,i,a){return t=Cn(6,t,null,i),t.lanes=a,t}function bf(t,i,a){return i=Cn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Ya=[],$a=0,Tu=null,Su=0,Yn=[],$n=0,qs=null,Xr=1,Zr="";function Gs(t,i){Ya[$a++]=Su,Ya[$a++]=Tu,Tu=t,Su=i}function M0(t,i,a){Yn[$n++]=Xr,Yn[$n++]=Zr,Yn[$n++]=qs,qs=t;var l=Xr;t=Zr;var f=32-an(l)-1;l&=~(1<<f),a+=1;var m=32-an(i)+f;if(30<m){var _=f-f%5;m=(l&(1<<_)-1).toString(32),l>>=_,f-=_,Xr=1<<32-an(i)+f|a<<f|l,Zr=m+t}else Xr=1<<m|a<<f|l,Zr=t}function _f(t){t.return!==null&&(Gs(t,1),M0(t,1,0))}function wf(t){for(;t===Tu;)Tu=Ya[--$a],Ya[$a]=null,Su=Ya[--$a],Ya[$a]=null;for(;t===qs;)qs=Yn[--$n],Yn[$n]=null,Zr=Yn[--$n],Yn[$n]=null,Xr=Yn[--$n],Yn[$n]=null}var gn=null,_t=null,Je=!1,Ys=null,Er=!1,Ef=Error(s(519));function $s(t){var i=Error(s(418,""));throw ml(qn(i,t)),Ef}function P0(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[Pt]=t,i[Ct]=l,a){case"dialog":He("cancel",i),He("close",i);break;case"iframe":case"object":case"embed":He("load",i);break;case"video":case"audio":for(a=0;a<Ul.length;a++)He(Ul[a],i);break;case"source":He("error",i);break;case"img":case"image":case"link":He("error",i),He("load",i);break;case"details":He("toggle",i);break;case"input":He("invalid",i),js(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ja(i);break;case"select":He("invalid",i);break;case"textarea":He("invalid",i),Ds(i,l.value,l.defaultValue,l.children),ja(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||Jy(i.textContent,a)?(l.popover!=null&&(He("beforetoggle",i),He("toggle",i)),l.onScroll!=null&&He("scroll",i),l.onScrollEnd!=null&&He("scrollend",i),l.onClick!=null&&(i.onclick=sd),i=!0):i=!1,i||$s(t)}function L0(t){for(gn=t.return;gn;)switch(gn.tag){case 5:case 13:Er=!1;return;case 27:case 3:Er=!0;return;default:gn=gn.return}}function fl(t){if(t!==gn)return!1;if(!Je)return L0(t),Je=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Up(t.type,t.memoizedProps)),a=!a),a&&_t&&$s(t),L0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){_t=ar(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}_t=null}}else i===27?(i=_t,Ki(t.type)?(t=Hp,Hp=null,_t=t):_t=i):_t=gn?ar(t.stateNode.nextSibling):null;return!0}function pl(){_t=gn=null,Je=!1}function V0(){var t=Ys;return t!==null&&(_n===null?_n=t:_n.push.apply(_n,t),Ys=null),t}function ml(t){Ys===null?Ys=[t]:Ys.push(t)}var Tf=ae(null),Qs=null,Jr=null;function Oi(t,i,a){q(Tf,i._currentValue),i._currentValue=a}function ei(t){t._currentValue=Tf.current,pe(Tf)}function Sf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Af(t,i,a,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var _=f.child;m=m.firstContext;e:for(;m!==null;){var T=m;m=f;for(var U=0;U<i.length;U++)if(T.context===i[U]){m.lanes|=a,T=m.alternate,T!==null&&(T.lanes|=a),Sf(m.return,a,t),l||(_=null);break e}m=T.next}}else if(f.tag===18){if(_=f.return,_===null)throw Error(s(341));_.lanes|=a,m=_.alternate,m!==null&&(m.lanes|=a),Sf(_,a,t),_=null}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===t){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}}function gl(t,i,a,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var _=f.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=f.type;Rn(f.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(f===xe.current){if(_=f.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Gl):t=[Gl])}f=f.return}t!==null&&Af(i,t,a,l),i.flags|=262144}function Au(t){for(t=t.firstContext;t!==null;){if(!Rn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ks(t){Qs=t,Jr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function on(t){return U0(Qs,t)}function Nu(t,i){return Qs===null&&Ks(t),U0(t,i)}function U0(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Jr===null){if(t===null)throw Error(s(308));Jr=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Jr=Jr.next=i;return a}var tw=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},nw=r.unstable_scheduleCallback,rw=r.unstable_NormalPriority,Ut={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nf(){return{controller:new tw,data:new Map,refCount:0}}function yl(t){t.refCount--,t.refCount===0&&nw(rw,function(){t.controller.abort()})}var vl=null,Rf=0,Qa=0,Ka=null;function iw(t,i){if(vl===null){var a=vl=[];Rf=0,Qa=Ip(),Ka={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Rf++,i.then(z0,z0),i}function z0(){if(--Rf===0&&vl!==null){Ka!==null&&(Ka.status="fulfilled");var t=vl;vl=null,Qa=0,Ka=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function sw(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var B0=X.S;X.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&iw(t,i),B0!==null&&B0(t,i)};var Ws=ae(null);function Cf(){var t=Ws.current;return t!==null?t:ht.pooledCache}function Ru(t,i){i===null?q(Ws,Ws.current):q(Ws,i.pool)}function F0(){var t=Cf();return t===null?null:{parent:Ut._currentValue,pool:t}}var xl=Error(s(460)),H0=Error(s(474)),Cu=Error(s(542)),If={then:function(){}};function q0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Iu(){}function G0(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Iu,Iu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,$0(t),t;default:if(typeof i.status=="string")i.then(Iu,Iu);else{if(t=ht,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,$0(t),t}throw bl=i,xl}}var bl=null;function Y0(){if(bl===null)throw Error(s(459));var t=bl;return bl=null,t}function $0(t){if(t===xl||t===Cu)throw Error(s(483))}var Mi=!1;function jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Li(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(rt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=wu(t),k0(t,null,a),i}return _u(t,l,i,a),wu(t)}function _l(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ko(t,a)}}function kf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?f=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Of=!1;function wl(){if(Of){var t=Ka;if(t!==null)throw t}}function El(t,i,a,l){Of=!1;var f=t.updateQueue;Mi=!1;var m=f.firstBaseUpdate,_=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var U=T,K=U.next;U.next=null,_===null?m=K:_.next=K,_=U;var re=t.alternate;re!==null&&(re=re.updateQueue,T=re.lastBaseUpdate,T!==_&&(T===null?re.firstBaseUpdate=K:T.next=K,re.lastBaseUpdate=U))}if(m!==null){var ce=f.baseState;_=0,re=K=U=null,T=m;do{var Z=T.lane&-536870913,J=Z!==T.lane;if(J?(Ke&Z)===Z:(l&Z)===Z){Z!==0&&Z===Qa&&(Of=!0),re!==null&&(re=re.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var De=t,Se=T;Z=i;var lt=a;switch(Se.tag){case 1:if(De=Se.payload,typeof De=="function"){ce=De.call(lt,ce,Z);break e}ce=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=Se.payload,Z=typeof De=="function"?De.call(lt,ce,Z):De,Z==null)break e;ce=x({},ce,Z);break e;case 2:Mi=!0}}Z=T.callback,Z!==null&&(t.flags|=64,J&&(t.flags|=8192),J=f.callbacks,J===null?f.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},re===null?(K=re=J,U=ce):re=re.next=J,_|=Z;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;J=T,T=J.next,J.next=null,f.lastBaseUpdate=J,f.shared.pending=null}}while(!0);re===null&&(U=ce),f.baseState=U,f.firstBaseUpdate=K,f.lastBaseUpdate=re,m===null&&(f.shared.lanes=0),Gi|=_,t.lanes=_,t.memoizedState=ce}}function Q0(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function K0(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Q0(a[t],i)}var Wa=ae(null),ju=ae(0);function W0(t,i){t=oi,q(ju,t),q(Wa,i),oi=t|i.baseLanes}function Mf(){q(ju,oi),q(Wa,Wa.current)}function Pf(){oi=ju.current,pe(Wa),pe(ju)}var Vi=0,ze=null,at=null,jt=null,Du=!1,Xa=!1,Xs=!1,ku=0,Tl=0,Za=null,aw=0;function St(){throw Error(s(321))}function Lf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Rn(t[a],i[a]))return!1;return!0}function Vf(t,i,a,l,f,m){return Vi=m,ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,X.H=t===null||t.memoizedState===null?k1:O1,Xs=!1,m=a(l,f),Xs=!1,Xa&&(m=Z0(i,a,l,f)),X0(t),m}function X0(t){X.H=Uu;var i=at!==null&&at.next!==null;if(Vi=0,jt=at=ze=null,Du=!1,Tl=0,Za=null,i)throw Error(s(300));t===null||qt||(t=t.dependencies,t!==null&&Au(t)&&(qt=!0))}function Z0(t,i,a,l){ze=t;var f=0;do{if(Xa&&(Za=null),Tl=0,Xa=!1,25<=f)throw Error(s(301));if(f+=1,jt=at=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}X.H=fw,m=i(a,l)}while(Xa);return m}function ow(){var t=X.H,i=t.useState()[0];return i=typeof i.then=="function"?Sl(i):i,t=t.useState()[0],(at!==null?at.memoizedState:null)!==t&&(ze.flags|=1024),i}function Uf(){var t=ku!==0;return ku=0,t}function zf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Bf(t){if(Du){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Du=!1}Vi=0,jt=at=ze=null,Xa=!1,Tl=ku=0,Za=null}function xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?ze.memoizedState=jt=t:jt=jt.next=t,jt}function Dt(){if(at===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var i=jt===null?ze.memoizedState:jt.next;if(i!==null)jt=i,at=t;else{if(t===null)throw ze.alternate===null?Error(s(467)):Error(s(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},jt===null?ze.memoizedState=jt=t:jt=jt.next=t}return jt}function Ff(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(t){var i=Tl;return Tl+=1,Za===null&&(Za=[]),t=G0(Za,t,i),i=ze,(jt===null?i.memoizedState:jt.next)===null&&(i=i.alternate,X.H=i===null||i.memoizedState===null?k1:O1),t}function Ou(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Sl(t);if(t.$$typeof===F)return on(t)}throw Error(s(438,String(t)))}function Hf(t){var i=null,a=ze.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=ze.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ff(),ze.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=k;return i.index++,a}function ti(t,i){return typeof i=="function"?i(t):i}function Mu(t){var i=Dt();return qf(i,at,t)}function qf(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var _=f.next;f.next=m.next,m.next=_}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var T=_=null,U=null,K=i,re=!1;do{var ce=K.lane&-536870913;if(ce!==K.lane?(Ke&ce)===ce:(Vi&ce)===ce){var Z=K.revertLane;if(Z===0)U!==null&&(U=U.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),ce===Qa&&(re=!0);else if((Vi&Z)===Z){K=K.next,Z===Qa&&(re=!0);continue}else ce={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},U===null?(T=U=ce,_=m):U=U.next=ce,ze.lanes|=Z,Gi|=Z;ce=K.action,Xs&&a(m,ce),m=K.hasEagerState?K.eagerState:a(m,ce)}else Z={lane:ce,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},U===null?(T=U=Z,_=m):U=U.next=Z,ze.lanes|=ce,Gi|=ce;K=K.next}while(K!==null&&K!==i);if(U===null?_=m:U.next=T,!Rn(m,t.memoizedState)&&(qt=!0,re&&(a=Ka,a!==null)))throw a;t.memoizedState=m,t.baseState=_,t.baseQueue=U,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Gf(t){var i=Dt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var _=f=f.next;do m=t(m,_.action),_=_.next;while(_!==f);Rn(m,i.memoizedState)||(qt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function J0(t,i,a){var l=ze,f=Dt(),m=Je;if(m){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!Rn((at||f).memoizedState,a);_&&(f.memoizedState=a,qt=!0),f=f.queue;var T=n1.bind(null,l,f,t);if(Al(2048,8,T,[t]),f.getSnapshot!==i||_||jt!==null&&jt.memoizedState.tag&1){if(l.flags|=2048,Ja(9,Pu(),t1.bind(null,l,f,a,i),null),ht===null)throw Error(s(349));m||(Vi&124)!==0||e1(l,i,a)}return a}function e1(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=ze.updateQueue,i===null?(i=Ff(),ze.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function t1(t,i,a,l){i.value=a,i.getSnapshot=l,r1(i)&&i1(t)}function n1(t,i,a){return a(function(){r1(i)&&i1(t)})}function r1(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Rn(t,a)}catch{return!0}}function i1(t){var i=qa(t,2);i!==null&&On(i,t,2)}function Yf(t){var i=xn();if(typeof t=="function"){var a=t;if(t=a(),Xs){An(!0);try{a()}finally{An(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:t},i}function s1(t,i,a,l){return t.baseState=a,qf(t,at,typeof l=="function"?l:ti)}function lw(t,i,a,l,f){if(Vu(t))throw Error(s(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){m.listeners.push(_)}};X.T!==null?a(!0):m.isTransition=!1,l(m),a=i.pending,a===null?(m.next=i.pending=m,a1(i,m)):(m.next=a.next,i.pending=a.next=m)}}function a1(t,i){var a=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=X.T,_={};X.T=_;try{var T=a(f,l),U=X.S;U!==null&&U(_,T),o1(t,i,T)}catch(K){$f(t,i,K)}finally{X.T=m}}else try{m=a(f,l),o1(t,i,m)}catch(K){$f(t,i,K)}}function o1(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){l1(t,i,l)},function(l){return $f(t,i,l)}):l1(t,i,a)}function l1(t,i,a){i.status="fulfilled",i.value=a,c1(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,a1(t,a)))}function $f(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,c1(i),i=i.next;while(i!==l)}t.action=null}function c1(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function u1(t,i){return i}function d1(t,i){if(Je){var a=ht.formState;if(a!==null){e:{var l=ze;if(Je){if(_t){t:{for(var f=_t,m=Er;f.nodeType!==8;){if(!m){f=null;break t}if(f=ar(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){_t=ar(f.nextSibling),l=f.data==="F!";break e}}$s(l)}l=!1}l&&(i=a[0])}}return a=xn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:u1,lastRenderedState:i},a.queue=l,a=I1.bind(null,ze,l),l.dispatch=a,l=Yf(!1),m=Zf.bind(null,ze,!1,l.queue),l=xn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,a=lw.bind(null,ze,f,m,a),f.dispatch=a,l.memoizedState=t,[i,a,!1]}function h1(t){var i=Dt();return f1(i,at,t)}function f1(t,i,a){if(i=qf(t,i,u1)[0],t=Mu(ti)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Sl(i)}catch(_){throw _===xl?Cu:_}else l=i;i=Dt();var f=i.queue,m=f.dispatch;return a!==i.memoizedState&&(ze.flags|=2048,Ja(9,Pu(),cw.bind(null,f,a),null)),[l,m,t]}function cw(t,i){t.action=i}function p1(t){var i=Dt(),a=at;if(a!==null)return f1(i,a,t);Dt(),i=i.memoizedState,a=Dt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Ja(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=ze.updateQueue,i===null&&(i=Ff(),ze.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function Pu(){return{destroy:void 0,resource:void 0}}function m1(){return Dt().memoizedState}function Lu(t,i,a,l){var f=xn();l=l===void 0?null:l,ze.flags|=t,f.memoizedState=Ja(1|i,Pu(),a,l)}function Al(t,i,a,l){var f=Dt();l=l===void 0?null:l;var m=f.memoizedState.inst;at!==null&&l!==null&&Lf(l,at.memoizedState.deps)?f.memoizedState=Ja(i,m,a,l):(ze.flags|=t,f.memoizedState=Ja(1|i,m,a,l))}function g1(t,i){Lu(8390656,8,t,i)}function y1(t,i){Al(2048,8,t,i)}function v1(t,i){return Al(4,2,t,i)}function x1(t,i){return Al(4,4,t,i)}function b1(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function _1(t,i,a){a=a!=null?a.concat([t]):null,Al(4,4,b1.bind(null,i,t),a)}function Qf(){}function w1(t,i){var a=Dt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Lf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function E1(t,i){var a=Dt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Lf(i,l[1]))return l[0];if(l=t(),Xs){An(!0);try{t()}finally{An(!1)}}return a.memoizedState=[l,i],l}function Kf(t,i,a){return a===void 0||(Vi&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=Ay(),ze.lanes|=t,Gi|=t,a)}function T1(t,i,a,l){return Rn(a,i)?a:Wa.current!==null?(t=Kf(t,a,l),Rn(t,i)||(qt=!0),t):(Vi&42)===0?(qt=!0,t.memoizedState=a):(t=Ay(),ze.lanes|=t,Gi|=t,i)}function S1(t,i,a,l,f){var m=fe.p;fe.p=m!==0&&8>m?m:8;var _=X.T,T={};X.T=T,Zf(t,!1,i,a);try{var U=f(),K=X.S;if(K!==null&&K(T,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var re=sw(U,l);Nl(t,i,re,kn(t))}else Nl(t,i,l,kn(t))}catch(ce){Nl(t,i,{then:function(){},status:"rejected",reason:ce},kn())}finally{fe.p=m,X.T=_}}function uw(){}function Wf(t,i,a,l){if(t.tag!==5)throw Error(s(476));var f=A1(t).queue;S1(t,f,i,ge,a===null?uw:function(){return N1(t),a(l)})}function A1(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:ge},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function N1(t){var i=A1(t).next.queue;Nl(t,i,{},kn())}function Xf(){return on(Gl)}function R1(){return Dt().memoizedState}function C1(){return Dt().memoizedState}function dw(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=kn();t=Pi(a);var l=Li(i,t,a);l!==null&&(On(l,i,a),_l(l,i,a)),i={cache:Nf()},t.payload=i;return}i=i.return}}function hw(t,i,a){var l=kn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Vu(t)?j1(i,a):(a=yf(t,i,a,l),a!==null&&(On(a,t,l),D1(a,i,l)))}function I1(t,i,a){var l=kn();Nl(t,i,a,l)}function Nl(t,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vu(t))j1(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,T=m(_,a);if(f.hasEagerState=!0,f.eagerState=T,Rn(T,_))return _u(t,i,f,0),ht===null&&bu(),!1}catch{}finally{}if(a=yf(t,i,f,l),a!==null)return On(a,t,l),D1(a,i,l),!0}return!1}function Zf(t,i,a,l){if(l={lane:2,revertLane:Ip(),action:l,hasEagerState:!1,eagerState:null,next:null},Vu(t)){if(i)throw Error(s(479))}else i=yf(t,a,l,2),i!==null&&On(i,t,2)}function Vu(t){var i=t.alternate;return t===ze||i!==null&&i===ze}function j1(t,i){Xa=Du=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function D1(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ko(t,a)}}var Uu={readContext:on,use:Ou,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St},k1={readContext:on,use:Ou,useCallback:function(t,i){return xn().memoizedState=[t,i===void 0?null:i],t},useContext:on,useEffect:g1,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Lu(4194308,4,b1.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Lu(4194308,4,t,i)},useInsertionEffect:function(t,i){Lu(4,2,t,i)},useMemo:function(t,i){var a=xn();i=i===void 0?null:i;var l=t();if(Xs){An(!0);try{t()}finally{An(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=xn();if(a!==void 0){var f=a(i);if(Xs){An(!0);try{a(i)}finally{An(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=hw.bind(null,ze,t),[l.memoizedState,t]},useRef:function(t){var i=xn();return t={current:t},i.memoizedState=t},useState:function(t){t=Yf(t);var i=t.queue,a=I1.bind(null,ze,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Qf,useDeferredValue:function(t,i){var a=xn();return Kf(a,t,i)},useTransition:function(){var t=Yf(!1);return t=S1.bind(null,ze,t.queue,!0,!1),xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=ze,f=xn();if(Je){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),ht===null)throw Error(s(349));(Ke&124)!==0||e1(l,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,g1(n1.bind(null,l,m,t),[t]),l.flags|=2048,Ja(9,Pu(),t1.bind(null,l,m,a,i),null),a},useId:function(){var t=xn(),i=ht.identifierPrefix;if(Je){var a=Zr,l=Xr;a=(l&~(1<<32-an(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=ku++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=aw++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Xf,useFormState:d1,useActionState:d1,useOptimistic:function(t){var i=xn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Zf.bind(null,ze,!0,a),a.dispatch=i,[t,i]},useMemoCache:Hf,useCacheRefresh:function(){return xn().memoizedState=dw.bind(null,ze)}},O1={readContext:on,use:Ou,useCallback:w1,useContext:on,useEffect:y1,useImperativeHandle:_1,useInsertionEffect:v1,useLayoutEffect:x1,useMemo:E1,useReducer:Mu,useRef:m1,useState:function(){return Mu(ti)},useDebugValue:Qf,useDeferredValue:function(t,i){var a=Dt();return T1(a,at.memoizedState,t,i)},useTransition:function(){var t=Mu(ti)[0],i=Dt().memoizedState;return[typeof t=="boolean"?t:Sl(t),i]},useSyncExternalStore:J0,useId:R1,useHostTransitionStatus:Xf,useFormState:h1,useActionState:h1,useOptimistic:function(t,i){var a=Dt();return s1(a,at,t,i)},useMemoCache:Hf,useCacheRefresh:C1},fw={readContext:on,use:Ou,useCallback:w1,useContext:on,useEffect:y1,useImperativeHandle:_1,useInsertionEffect:v1,useLayoutEffect:x1,useMemo:E1,useReducer:Gf,useRef:m1,useState:function(){return Gf(ti)},useDebugValue:Qf,useDeferredValue:function(t,i){var a=Dt();return at===null?Kf(a,t,i):T1(a,at.memoizedState,t,i)},useTransition:function(){var t=Gf(ti)[0],i=Dt().memoizedState;return[typeof t=="boolean"?t:Sl(t),i]},useSyncExternalStore:J0,useId:R1,useHostTransitionStatus:Xf,useFormState:p1,useActionState:p1,useOptimistic:function(t,i){var a=Dt();return at!==null?s1(a,at,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:C1},eo=null,Rl=0;function zu(t){var i=Rl;return Rl+=1,eo===null&&(eo=[]),G0(eo,t,i)}function Cl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Bu(t,i){throw i.$$typeof===w?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function M1(t){var i=t._init;return i(t._payload)}function P1(t){function i(Y,H){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[H],Y.flags|=16):Q.push(H)}}function a(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y){for(var H=new Map;Y!==null;)Y.key!==null?H.set(Y.key,Y):H.set(Y.index,Y),Y=Y.sibling;return H}function f(Y,H){return Y=Wr(Y,H),Y.index=0,Y.sibling=null,Y}function m(Y,H,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<H?(Y.flags|=67108866,H):Q):(Y.flags|=67108866,H)):(Y.flags|=1048576,H)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,H,Q,oe){return H===null||H.tag!==6?(H=xf(Q,Y.mode,oe),H.return=Y,H):(H=f(H,Q),H.return=Y,H)}function U(Y,H,Q,oe){var _e=Q.type;return _e===N?re(Y,H,Q.props.children,oe,Q.key):H!==null&&(H.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===C&&M1(_e)===H.type)?(H=f(H,Q.props),Cl(H,Q),H.return=Y,H):(H=Eu(Q.type,Q.key,Q.props,null,Y.mode,oe),Cl(H,Q),H.return=Y,H)}function K(Y,H,Q,oe){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=bf(Q,Y.mode,oe),H.return=Y,H):(H=f(H,Q.children||[]),H.return=Y,H)}function re(Y,H,Q,oe,_e){return H===null||H.tag!==7?(H=Hs(Q,Y.mode,oe,_e),H.return=Y,H):(H=f(H,Q),H.return=Y,H)}function ce(Y,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=xf(""+H,Y.mode,Q),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case E:return Q=Eu(H.type,H.key,H.props,null,Y.mode,Q),Cl(Q,H),Q.return=Y,Q;case R:return H=bf(H,Y.mode,Q),H.return=Y,H;case C:var oe=H._init;return H=oe(H._payload),ce(Y,H,Q)}if(Ee(H)||S(H))return H=Hs(H,Y.mode,Q,null),H.return=Y,H;if(typeof H.then=="function")return ce(Y,zu(H),Q);if(H.$$typeof===F)return ce(Y,Nu(Y,H),Q);Bu(Y,H)}return null}function Z(Y,H,Q,oe){var _e=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return _e!==null?null:T(Y,H,""+Q,oe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return Q.key===_e?U(Y,H,Q,oe):null;case R:return Q.key===_e?K(Y,H,Q,oe):null;case C:return _e=Q._init,Q=_e(Q._payload),Z(Y,H,Q,oe)}if(Ee(Q)||S(Q))return _e!==null?null:re(Y,H,Q,oe,null);if(typeof Q.then=="function")return Z(Y,H,zu(Q),oe);if(Q.$$typeof===F)return Z(Y,H,Nu(Y,Q),oe);Bu(Y,Q)}return null}function J(Y,H,Q,oe,_e){if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return Y=Y.get(Q)||null,T(H,Y,""+oe,_e);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case E:return Y=Y.get(oe.key===null?Q:oe.key)||null,U(H,Y,oe,_e);case R:return Y=Y.get(oe.key===null?Q:oe.key)||null,K(H,Y,oe,_e);case C:var Be=oe._init;return oe=Be(oe._payload),J(Y,H,Q,oe,_e)}if(Ee(oe)||S(oe))return Y=Y.get(Q)||null,re(H,Y,oe,_e,null);if(typeof oe.then=="function")return J(Y,H,Q,zu(oe),_e);if(oe.$$typeof===F)return J(Y,H,Q,Nu(H,oe),_e);Bu(H,oe)}return null}function De(Y,H,Q,oe){for(var _e=null,Be=null,we=H,Ae=H=0,Yt=null;we!==null&&Ae<Q.length;Ae++){we.index>Ae?(Yt=we,we=null):Yt=we.sibling;var Ze=Z(Y,we,Q[Ae],oe);if(Ze===null){we===null&&(we=Yt);break}t&&we&&Ze.alternate===null&&i(Y,we),H=m(Ze,H,Ae),Be===null?_e=Ze:Be.sibling=Ze,Be=Ze,we=Yt}if(Ae===Q.length)return a(Y,we),Je&&Gs(Y,Ae),_e;if(we===null){for(;Ae<Q.length;Ae++)we=ce(Y,Q[Ae],oe),we!==null&&(H=m(we,H,Ae),Be===null?_e=we:Be.sibling=we,Be=we);return Je&&Gs(Y,Ae),_e}for(we=l(we);Ae<Q.length;Ae++)Yt=J(we,Y,Ae,Q[Ae],oe),Yt!==null&&(t&&Yt.alternate!==null&&we.delete(Yt.key===null?Ae:Yt.key),H=m(Yt,H,Ae),Be===null?_e=Yt:Be.sibling=Yt,Be=Yt);return t&&we.forEach(function(es){return i(Y,es)}),Je&&Gs(Y,Ae),_e}function Se(Y,H,Q,oe){if(Q==null)throw Error(s(151));for(var _e=null,Be=null,we=H,Ae=H=0,Yt=null,Ze=Q.next();we!==null&&!Ze.done;Ae++,Ze=Q.next()){we.index>Ae?(Yt=we,we=null):Yt=we.sibling;var es=Z(Y,we,Ze.value,oe);if(es===null){we===null&&(we=Yt);break}t&&we&&es.alternate===null&&i(Y,we),H=m(es,H,Ae),Be===null?_e=es:Be.sibling=es,Be=es,we=Yt}if(Ze.done)return a(Y,we),Je&&Gs(Y,Ae),_e;if(we===null){for(;!Ze.done;Ae++,Ze=Q.next())Ze=ce(Y,Ze.value,oe),Ze!==null&&(H=m(Ze,H,Ae),Be===null?_e=Ze:Be.sibling=Ze,Be=Ze);return Je&&Gs(Y,Ae),_e}for(we=l(we);!Ze.done;Ae++,Ze=Q.next())Ze=J(we,Y,Ae,Ze.value,oe),Ze!==null&&(t&&Ze.alternate!==null&&we.delete(Ze.key===null?Ae:Ze.key),H=m(Ze,H,Ae),Be===null?_e=Ze:Be.sibling=Ze,Be=Ze);return t&&we.forEach(function(pE){return i(Y,pE)}),Je&&Gs(Y,Ae),_e}function lt(Y,H,Q,oe){if(typeof Q=="object"&&Q!==null&&Q.type===N&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:e:{for(var _e=Q.key;H!==null;){if(H.key===_e){if(_e=Q.type,_e===N){if(H.tag===7){a(Y,H.sibling),oe=f(H,Q.props.children),oe.return=Y,Y=oe;break e}}else if(H.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===C&&M1(_e)===H.type){a(Y,H.sibling),oe=f(H,Q.props),Cl(oe,Q),oe.return=Y,Y=oe;break e}a(Y,H);break}else i(Y,H);H=H.sibling}Q.type===N?(oe=Hs(Q.props.children,Y.mode,oe,Q.key),oe.return=Y,Y=oe):(oe=Eu(Q.type,Q.key,Q.props,null,Y.mode,oe),Cl(oe,Q),oe.return=Y,Y=oe)}return _(Y);case R:e:{for(_e=Q.key;H!==null;){if(H.key===_e)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(Y,H.sibling),oe=f(H,Q.children||[]),oe.return=Y,Y=oe;break e}else{a(Y,H);break}else i(Y,H);H=H.sibling}oe=bf(Q,Y.mode,oe),oe.return=Y,Y=oe}return _(Y);case C:return _e=Q._init,Q=_e(Q._payload),lt(Y,H,Q,oe)}if(Ee(Q))return De(Y,H,Q,oe);if(S(Q)){if(_e=S(Q),typeof _e!="function")throw Error(s(150));return Q=_e.call(Q),Se(Y,H,Q,oe)}if(typeof Q.then=="function")return lt(Y,H,zu(Q),oe);if(Q.$$typeof===F)return lt(Y,H,Nu(Y,Q),oe);Bu(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(Y,H.sibling),oe=f(H,Q),oe.return=Y,Y=oe):(a(Y,H),oe=xf(Q,Y.mode,oe),oe.return=Y,Y=oe),_(Y)):a(Y,H)}return function(Y,H,Q,oe){try{Rl=0;var _e=lt(Y,H,Q,oe);return eo=null,_e}catch(we){if(we===xl||we===Cu)throw we;var Be=Cn(29,we,null,Y.mode);return Be.lanes=oe,Be.return=Y,Be}finally{}}}var to=P1(!0),L1=P1(!1),Qn=ae(null),Tr=null;function Ui(t){var i=t.alternate;q(zt,zt.current&1),q(Qn,t),Tr===null&&(i===null||Wa.current!==null||i.memoizedState!==null)&&(Tr=t)}function V1(t){if(t.tag===22){if(q(zt,zt.current),q(Qn,t),Tr===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Tr=t)}}else zi()}function zi(){q(zt,zt.current),q(Qn,Qn.current)}function ni(t){pe(Qn),Tr===t&&(Tr=null),pe(zt)}var zt=ae(0);function Fu(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Fp(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Jf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:x({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ep={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=kn(),f=Pi(l);f.payload=i,a!=null&&(f.callback=a),i=Li(t,f,l),i!==null&&(On(i,t,l),_l(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=kn(),f=Pi(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Li(t,f,l),i!==null&&(On(i,t,l),_l(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=kn(),l=Pi(a);l.tag=2,i!=null&&(l.callback=i),i=Li(t,l,a),i!==null&&(On(i,t,a),_l(i,t,a))}};function U1(t,i,a,l,f,m,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,_):i.prototype&&i.prototype.isPureReactComponent?!dl(a,l)||!dl(f,m):!0}function z1(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&ep.enqueueReplaceState(i,i.state,null)}function Zs(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=x({},a));for(var f in t)a[f]===void 0&&(a[f]=t[f])}return a}var Hu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function B1(t){Hu(t)}function F1(t){console.error(t)}function H1(t){Hu(t)}function qu(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function q1(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function tp(t,i,a){return a=Pi(a),a.tag=3,a.payload={element:null},a.callback=function(){qu(t,i)},a}function G1(t){return t=Pi(t),t.tag=3,t}function Y1(t,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){q1(i,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){q1(i,a,l),typeof f!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function pw(t,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&gl(i,a,f,!0),a=Qn.current,a!==null){switch(a.tag){case 13:return Tr===null?Sp():a.alternate===null&&wt===0&&(wt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===If?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Np(t,l,f)),!1;case 22:return a.flags|=65536,l===If?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Np(t,l,f)),!1}throw Error(s(435,a.tag))}return Np(t,l,f),Sp(),!1}if(Je)return i=Qn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Ef&&(t=Error(s(422),{cause:l}),ml(qn(t,a)))):(l!==Ef&&(i=Error(s(423),{cause:l}),ml(qn(i,a))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=qn(l,a),f=tp(t.stateNode,l,f),kf(t,f),wt!==4&&(wt=2)),!1;var m=Error(s(520),{cause:l});if(m=qn(m,a),Pl===null?Pl=[m]:Pl.push(m),wt!==4&&(wt=2),i===null)return!0;l=qn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=f&-f,a.lanes|=t,t=tp(a.stateNode,l,t),kf(a,t),!1;case 1:if(i=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Yi===null||!Yi.has(m))))return a.flags|=65536,f&=-f,a.lanes|=f,f=G1(f),Y1(f,t,a,l),kf(a,f),!1}a=a.return}while(a!==null);return!1}var $1=Error(s(461)),qt=!1;function Zt(t,i,a,l){i.child=t===null?L1(i,null,a,l):to(i,t.child,a,l)}function Q1(t,i,a,l,f){a=a.render;var m=i.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return Ks(i),l=Vf(t,i,a,_,m,f),T=Uf(),t!==null&&!qt?(zf(t,i,f),ri(t,i,f)):(Je&&T&&_f(i),i.flags|=1,Zt(t,i,l,f),i.child)}function K1(t,i,a,l,f){if(t===null){var m=a.type;return typeof m=="function"&&!vf(m)&&m.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=m,W1(t,i,m,l,f)):(t=Eu(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!cp(t,f)){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:dl,a(_,l)&&t.ref===i.ref)return ri(t,i,f)}return i.flags|=1,t=Wr(m,l),t.ref=i.ref,t.return=i,i.child=t}function W1(t,i,a,l,f){if(t!==null){var m=t.memoizedProps;if(dl(m,l)&&t.ref===i.ref)if(qt=!1,i.pendingProps=l=m,cp(t,f))(t.flags&131072)!==0&&(qt=!0);else return i.lanes=t.lanes,ri(t,i,f)}return np(t,i,a,l,f)}function X1(t,i,a){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|a:a,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Z1(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ru(i,m!==null?m.cachePool:null),m!==null?W0(i,m):Mf(),V1(i);else return i.lanes=i.childLanes=536870912,Z1(t,i,m!==null?m.baseLanes|a:a,a)}else m!==null?(Ru(i,m.cachePool),W0(i,m),zi(),i.memoizedState=null):(t!==null&&Ru(i,null),Mf(),zi());return Zt(t,i,f,a),i.child}function Z1(t,i,a,l){var f=Cf();return f=f===null?null:{parent:Ut._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ru(i,null),Mf(),V1(i),t!==null&&gl(t,i,l,!0),null}function Gu(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function np(t,i,a,l,f){return Ks(i),a=Vf(t,i,a,l,void 0,f),l=Uf(),t!==null&&!qt?(zf(t,i,f),ri(t,i,f)):(Je&&l&&_f(i),i.flags|=1,Zt(t,i,a,f),i.child)}function J1(t,i,a,l,f,m){return Ks(i),i.updateQueue=null,a=Z0(i,l,a,f),X0(t),l=Uf(),t!==null&&!qt?(zf(t,i,m),ri(t,i,m)):(Je&&l&&_f(i),i.flags|=1,Zt(t,i,a,m),i.child)}function ey(t,i,a,l,f){if(Ks(i),i.stateNode===null){var m=Ga,_=a.contextType;typeof _=="object"&&_!==null&&(m=on(_)),m=new a(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=ep,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},jf(i),_=a.contextType,m.context=typeof _=="object"&&_!==null?on(_):Ga,m.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Jf(i,a,_,l),m.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(_=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),_!==m.state&&ep.enqueueReplaceState(m,m.state,null),El(i,l,m,f),wl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var T=i.memoizedProps,U=Zs(a,T);m.props=U;var K=m.context,re=a.contextType;_=Ga,typeof re=="object"&&re!==null&&(_=on(re));var ce=a.getDerivedStateFromProps;re=typeof ce=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||K!==_)&&z1(i,m,l,_),Mi=!1;var Z=i.memoizedState;m.state=Z,El(i,l,m,f),wl(),K=i.memoizedState,T||Z!==K||Mi?(typeof ce=="function"&&(Jf(i,a,ce,l),K=i.memoizedState),(U=Mi||U1(i,a,U,l,Z,K,_))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=K),m.props=l,m.state=K,m.context=_,l=U):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Df(t,i),_=i.memoizedProps,re=Zs(a,_),m.props=re,ce=i.pendingProps,Z=m.context,K=a.contextType,U=Ga,typeof K=="object"&&K!==null&&(U=on(K)),T=a.getDerivedStateFromProps,(K=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==ce||Z!==U)&&z1(i,m,l,U),Mi=!1,Z=i.memoizedState,m.state=Z,El(i,l,m,f),wl();var J=i.memoizedState;_!==ce||Z!==J||Mi||t!==null&&t.dependencies!==null&&Au(t.dependencies)?(typeof T=="function"&&(Jf(i,a,T,l),J=i.memoizedState),(re=Mi||U1(i,a,re,l,Z,J,U)||t!==null&&t.dependencies!==null&&Au(t.dependencies))?(K||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,J,U),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,J,U)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=J),m.props=l,m.state=J,m.context=U,l=re):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,Gu(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=to(i,t.child,null,f),i.child=to(i,null,a,f)):Zt(t,i,a,f),i.memoizedState=m.state,t=i.child):t=ri(t,i,f),t}function ty(t,i,a,l){return pl(),i.flags|=256,Zt(t,i,a,l),i.child}var rp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ip(t){return{baseLanes:t,cachePool:F0()}}function sp(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Kn),t}function ny(t,i,a){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,_;if((_=m)||(_=t!==null&&t.memoizedState===null?!1:(zt.current&2)!==0),_&&(f=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,t===null){if(Je){if(f?Ui(i):zi(),Je){var T=_t,U;if(U=T){e:{for(U=T,T=Er;U.nodeType!==8;){if(!T){T=null;break e}if(U=ar(U.nextSibling),U===null){T=null;break e}}T=U}T!==null?(i.memoizedState={dehydrated:T,treeContext:qs!==null?{id:Xr,overflow:Zr}:null,retryLane:536870912,hydrationErrors:null},U=Cn(18,null,null,0),U.stateNode=T,U.return=i,i.child=U,gn=i,_t=null,U=!0):U=!1}U||$s(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Fp(T)?i.lanes=32:i.lanes=536870912,null;ni(i)}return T=l.children,l=l.fallback,f?(zi(),f=i.mode,T=Yu({mode:"hidden",children:T},f),l=Hs(l,f,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,f=i.child,f.memoizedState=ip(a),f.childLanes=sp(t,_,a),i.memoizedState=rp,l):(Ui(i),ap(i,T))}if(U=t.memoizedState,U!==null&&(T=U.dehydrated,T!==null)){if(m)i.flags&256?(Ui(i),i.flags&=-257,i=op(t,i,a)):i.memoizedState!==null?(zi(),i.child=t.child,i.flags|=128,i=null):(zi(),f=l.fallback,T=i.mode,l=Yu({mode:"visible",children:l.children},T),f=Hs(f,T,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,to(i,t.child,null,a),l=i.child,l.memoizedState=ip(a),l.childLanes=sp(t,_,a),i.memoizedState=rp,i=f);else if(Ui(i),Fp(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var K=_.dgst;_=K,l=Error(s(419)),l.stack="",l.digest=_,ml({value:l,source:null,stack:null}),i=op(t,i,a)}else if(qt||gl(t,i,a,!1),_=(a&t.childLanes)!==0,qt||_){if(_=ht,_!==null&&(l=a&-a,l=(l&42)!==0?1:Ni(l),l=(l&(_.suspendedLanes|a))!==0?0:l,l!==0&&l!==U.retryLane))throw U.retryLane=l,qa(t,l),On(_,t,l),$1;T.data==="$?"||Sp(),i=op(t,i,a)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=U.treeContext,_t=ar(T.nextSibling),gn=i,Je=!0,Ys=null,Er=!1,t!==null&&(Yn[$n++]=Xr,Yn[$n++]=Zr,Yn[$n++]=qs,Xr=t.id,Zr=t.overflow,qs=i),i=ap(i,l.children),i.flags|=4096);return i}return f?(zi(),f=l.fallback,T=i.mode,U=t.child,K=U.sibling,l=Wr(U,{mode:"hidden",children:l.children}),l.subtreeFlags=U.subtreeFlags&65011712,K!==null?f=Wr(K,f):(f=Hs(f,T,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,T=t.child.memoizedState,T===null?T=ip(a):(U=T.cachePool,U!==null?(K=Ut._currentValue,U=U.parent!==K?{parent:K,pool:K}:U):U=F0(),T={baseLanes:T.baseLanes|a,cachePool:U}),f.memoizedState=T,f.childLanes=sp(t,_,a),i.memoizedState=rp,l):(Ui(i),a=t.child,t=a.sibling,a=Wr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(_=i.deletions,_===null?(i.deletions=[t],i.flags|=16):_.push(t)),i.child=a,i.memoizedState=null,a)}function ap(t,i){return i=Yu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Yu(t,i){return t=Cn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function op(t,i,a){return to(i,t.child,null,a),t=ap(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ry(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Sf(t.return,i,a)}function lp(t,i,a,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=f)}function iy(t,i,a){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Zt(t,i,l.children,a),l=zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ry(t,a,i);else if(t.tag===19)ry(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(q(zt,l),f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Fu(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),lp(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Fu(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}lp(i,!0,a,null,m);break;case"together":lp(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ri(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Gi|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(gl(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Wr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Wr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function cp(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Au(t)))}function mw(t,i,a){switch(i.tag){case 3:ye(i,i.stateNode.containerInfo),Oi(i,Ut,t.memoizedState.cache),pl();break;case 27:case 5:Ve(i);break;case 4:ye(i,i.stateNode.containerInfo);break;case 10:Oi(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ui(i),i.flags|=128,null):(a&i.child.childLanes)!==0?ny(t,i,a):(Ui(i),t=ri(t,i,a),t!==null?t.sibling:null);Ui(i);break;case 19:var f=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(gl(t,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return iy(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),q(zt,zt.current),l)break;return null;case 22:case 23:return i.lanes=0,X1(t,i,a);case 24:Oi(i,Ut,t.memoizedState.cache)}return ri(t,i,a)}function sy(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)qt=!0;else{if(!cp(t,a)&&(i.flags&128)===0)return qt=!1,mw(t,i,a);qt=(t.flags&131072)!==0}else qt=!1,Je&&(i.flags&1048576)!==0&&M0(i,Su,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")vf(l)?(t=Zs(l,t),i.tag=1,i=ey(null,i,l,t,a)):(i.tag=0,i=np(null,i,l,t,a));else{if(l!=null){if(f=l.$$typeof,f===W){i.tag=11,i=Q1(null,i,l,t,a);break e}else if(f===O){i.tag=14,i=K1(null,i,l,t,a);break e}}throw i=he(l)||l,Error(s(306,i,""))}}return i;case 0:return np(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=Zs(l,i.pendingProps),ey(t,i,l,f,a);case 3:e:{if(ye(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Df(t,i),El(i,l,null,a);var _=i.memoizedState;if(l=_.cache,Oi(i,Ut,l),l!==m.cache&&Af(i,[Ut],a,!0),wl(),l=_.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=ty(t,i,l,a);break e}else if(l!==f){f=qn(Error(s(424)),i),ml(f),i=ty(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(_t=ar(t.firstChild),gn=i,Je=!0,Ys=null,Er=!0,a=L1(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(pl(),l===f){i=ri(t,i,a);break e}Zt(t,i,l,a)}i=i.child}return i;case 26:return Gu(t,i),t===null?(a=cv(i.type,null,i.pendingProps,null))?i.memoizedState=a:Je||(a=i.type,t=i.pendingProps,l=ad(le.current).createElement(a),l[Pt]=i,l[Ct]=t,en(l,a,t),Tt(l),i.stateNode=l):i.memoizedState=cv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ve(i),t===null&&Je&&(l=i.stateNode=av(i.type,i.pendingProps,le.current),gn=i,Er=!0,f=_t,Ki(i.type)?(Hp=f,_t=ar(l.firstChild)):_t=f),Zt(t,i,i.pendingProps.children,a),Gu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Je&&((f=l=_t)&&(l=Hw(l,i.type,i.pendingProps,Er),l!==null?(i.stateNode=l,gn=i,_t=ar(l.firstChild),Er=!1,f=!0):f=!1),f||$s(i)),Ve(i),f=i.type,m=i.pendingProps,_=t!==null?t.memoizedProps:null,l=m.children,Up(f,m)?l=null:_!==null&&Up(f,_)&&(i.flags|=32),i.memoizedState!==null&&(f=Vf(t,i,ow,null,null,a),Gl._currentValue=f),Gu(t,i),Zt(t,i,l,a),i.child;case 6:return t===null&&Je&&((t=a=_t)&&(a=qw(a,i.pendingProps,Er),a!==null?(i.stateNode=a,gn=i,_t=null,t=!0):t=!1),t||$s(i)),null;case 13:return ny(t,i,a);case 4:return ye(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=to(i,null,l,a):Zt(t,i,l,a),i.child;case 11:return Q1(t,i,i.type,i.pendingProps,a);case 7:return Zt(t,i,i.pendingProps,a),i.child;case 8:return Zt(t,i,i.pendingProps.children,a),i.child;case 12:return Zt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Oi(i,i.type,l.value),Zt(t,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ks(i),f=on(f),l=l(f),i.flags|=1,Zt(t,i,l,a),i.child;case 14:return K1(t,i,i.type,i.pendingProps,a);case 15:return W1(t,i,i.type,i.pendingProps,a);case 19:return iy(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=Yu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Wr(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return X1(t,i,a);case 24:return Ks(i),l=on(Ut),t===null?(f=Cf(),f===null&&(f=ht,m=Nf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=a),f=m),i.memoizedState={parent:l,cache:f},jf(i),Oi(i,Ut,f)):((t.lanes&a)!==0&&(Df(t,i),El(i,null,null,a),wl()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Oi(i,Ut,l)):(l=m.cache,Oi(i,Ut,l),l!==f.cache&&Af(i,[Ut],a,!0))),Zt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ii(t){t.flags|=4}function ay(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!pv(i)){if(i=Qn.current,i!==null&&((Ke&4194048)===Ke?Tr!==null:(Ke&62914560)!==Ke&&(Ke&536870912)===0||i!==Tr))throw bl=If,H0;t.flags|=8192}}function $u(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?$o():536870912,t.lanes|=i,so|=i)}function Il(t,i){if(!Je)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function yt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function gw(t,i,a){var l=i.pendingProps;switch(wf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(i),null;case 1:return yt(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ei(Ut),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fl(i)?ii(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,V0())),yt(i),null;case 26:return a=i.memoizedState,t===null?(ii(i),a!==null?(yt(i),ay(i,a)):(yt(i),i.flags&=-16777217)):a?a!==t.memoizedState?(ii(i),yt(i),ay(i,a)):(yt(i),i.flags&=-16777217):(t.memoizedProps!==l&&ii(i),yt(i),i.flags&=-16777217),null;case 27:Qt(i),a=le.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ii(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return yt(i),null}t=G.current,fl(i)?P0(i):(t=av(f,l,a),i.stateNode=t,ii(i))}return yt(i),null;case 5:if(Qt(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ii(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return yt(i),null}if(t=G.current,fl(i))P0(i);else{switch(f=ad(le.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}t[Pt]=i,t[Ct]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(en(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ii(i)}}return yt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ii(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=le.current,fl(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,f=gn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[Pt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Jy(t.nodeValue,a)),t||$s(i)}else t=ad(t).createTextNode(l),t[Pt]=i,i.stateNode=t}return yt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=fl(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Pt]=i}else pl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yt(i),f=!1}else f=V0(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ni(i),i):(ni(i),null)}if(ni(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),$u(i,i.updateQueue),yt(i),null;case 4:return Ie(),t===null&&Op(i.stateNode.containerInfo),yt(i),null;case 10:return ei(i.type),yt(i),null;case 19:if(pe(zt),f=i.memoizedState,f===null)return yt(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)Il(f,!1);else{if(wt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Fu(t),m!==null){for(i.flags|=128,Il(f,!1),t=m.updateQueue,i.updateQueue=t,$u(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)O0(a,t),a=a.sibling;return q(zt,zt.current&1|2),i.child}t=t.sibling}f.tail!==null&&ie()>Wu&&(i.flags|=128,l=!0,Il(f,!1),i.lanes=4194304)}else{if(!l)if(t=Fu(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,$u(i,t),Il(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Je)return yt(i),null}else 2*ie()-f.renderingStartTime>Wu&&a!==536870912&&(i.flags|=128,l=!0,Il(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=ie(),i.sibling=null,t=zt.current,q(zt,l?t&1|2:t&1),i):(yt(i),null);case 22:case 23:return ni(i),Pf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(yt(i),i.subtreeFlags&6&&(i.flags|=8192)):yt(i),a=i.updateQueue,a!==null&&$u(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&pe(Ws),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ei(Ut),yt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function yw(t,i){switch(wf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ei(Ut),Ie(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Qt(i),null;case 13:if(ni(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));pl()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return pe(zt),null;case 4:return Ie(),null;case 10:return ei(i.type),null;case 22:case 23:return ni(i),Pf(),t!==null&&pe(Ws),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ei(Ut),null;case 25:return null;default:return null}}function oy(t,i){switch(wf(i),i.tag){case 3:ei(Ut),Ie();break;case 26:case 27:case 5:Qt(i);break;case 4:Ie();break;case 13:ni(i);break;case 19:pe(zt);break;case 10:ei(i.type);break;case 22:case 23:ni(i),Pf(),t!==null&&pe(Ws);break;case 24:ei(Ut)}}function jl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&t)===t){l=void 0;var m=a.create,_=a.inst;l=m(),_.destroy=l}a=a.next}while(a!==f)}}catch(T){dt(i,i.return,T)}}function Bi(t,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,f=i;var U=a,K=T;try{K()}catch(re){dt(f,U,re)}}}l=l.next}while(l!==m)}}catch(re){dt(i,i.return,re)}}function ly(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{K0(i,a)}catch(l){dt(t,t.return,l)}}}function cy(t,i,a){a.props=Zs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){dt(t,i,l)}}function Dl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(f){dt(t,i,f)}}function Sr(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){dt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){dt(t,i,f)}else a.current=null}function uy(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){dt(t,t.return,f)}}function up(t,i,a){try{var l=t.stateNode;Vw(l,t.type,a,i),l[Ct]=i}catch(f){dt(t,t.return,f)}}function dy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ki(t.type)||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ki(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hp(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=sd));else if(l!==4&&(l===27&&Ki(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(hp(t,i,a),t=t.sibling;t!==null;)hp(t,i,a),t=t.sibling}function Qu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Ki(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Qu(t,i,a),t=t.sibling;t!==null;)Qu(t,i,a),t=t.sibling}function hy(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);en(i,l,a),i[Pt]=t,i[Ct]=a}catch(m){dt(t,t.return,m)}}var si=!1,At=!1,fp=!1,fy=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function vw(t,i){if(t=t.containerInfo,Lp=hd,t=T0(t),df(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,T=-1,U=-1,K=0,re=0,ce=t,Z=null;t:for(;;){for(var J;ce!==a||f!==0&&ce.nodeType!==3||(T=_+f),ce!==m||l!==0&&ce.nodeType!==3||(U=_+l),ce.nodeType===3&&(_+=ce.nodeValue.length),(J=ce.firstChild)!==null;)Z=ce,ce=J;for(;;){if(ce===t)break t;if(Z===a&&++K===f&&(T=_),Z===m&&++re===l&&(U=_),(J=ce.nextSibling)!==null)break;ce=Z,Z=ce.parentNode}ce=J}a=T===-1||U===-1?null:{start:T,end:U}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vp={focusedElem:t,selectionRange:a},hd=!1,Gt=i;Gt!==null;)if(i=Gt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Gt=t;else for(;Gt!==null;){switch(i=Gt,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,a=i,f=m.memoizedProps,m=m.memoizedState,l=a.stateNode;try{var De=Zs(a.type,f,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(De,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(Se){dt(a,a.return,Se)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Bp(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bp(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Gt=t;break}Gt=i.return}}function py(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(t,a),l&4&&jl(5,a);break;case 1:if(Fi(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(_){dt(a,a.return,_)}else{var f=Zs(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(_){dt(a,a.return,_)}}l&64&&ly(a),l&512&&Dl(a,a.return);break;case 3:if(Fi(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{K0(t,i)}catch(_){dt(a,a.return,_)}}break;case 27:i===null&&l&4&&hy(a);case 26:case 5:Fi(t,a),i===null&&l&4&&uy(a),l&512&&Dl(a,a.return);break;case 12:Fi(t,a);break;case 13:Fi(t,a),l&4&&yy(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Nw.bind(null,a),Gw(t,a))));break;case 22:if(l=a.memoizedState!==null||si,!l){i=i!==null&&i.memoizedState!==null||At,f=si;var m=At;si=l,(At=i)&&!m?Hi(t,a,(a.subtreeFlags&8772)!==0):Fi(t,a),si=f,At=m}break;case 30:break;default:Fi(t,a)}}function my(t){var i=t.alternate;i!==null&&(t.alternate=null,my(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ii(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var mt=null,bn=!1;function ai(t,i,a){for(a=a.child;a!==null;)gy(t,i,a),a=a.sibling}function gy(t,i,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:At||Sr(a,i),ai(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:At||Sr(a,i);var l=mt,f=bn;Ki(a.type)&&(mt=a.stateNode,bn=!1),ai(t,i,a),Bl(a.stateNode),mt=l,bn=f;break;case 5:At||Sr(a,i);case 6:if(l=mt,f=bn,mt=null,ai(t,i,a),mt=l,bn=f,mt!==null)if(bn)try{(mt.nodeType===9?mt.body:mt.nodeName==="HTML"?mt.ownerDocument.body:mt).removeChild(a.stateNode)}catch(m){dt(a,i,m)}else try{mt.removeChild(a.stateNode)}catch(m){dt(a,i,m)}break;case 18:mt!==null&&(bn?(t=mt,iv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Kl(t)):iv(mt,a.stateNode));break;case 4:l=mt,f=bn,mt=a.stateNode.containerInfo,bn=!0,ai(t,i,a),mt=l,bn=f;break;case 0:case 11:case 14:case 15:At||Bi(2,a,i),At||Bi(4,a,i),ai(t,i,a);break;case 1:At||(Sr(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&cy(a,i,l)),ai(t,i,a);break;case 21:ai(t,i,a);break;case 22:At=(l=At)||a.memoizedState!==null,ai(t,i,a),At=l;break;default:ai(t,i,a)}}function yy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Kl(t)}catch(a){dt(i,i.return,a)}}function xw(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new fy),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new fy),i;default:throw Error(s(435,t.tag))}}function pp(t,i){var a=xw(t);i.forEach(function(l){var f=Rw.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}function In(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],m=t,_=i,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(Ki(T.type)){mt=T.stateNode,bn=!1;break e}break;case 5:mt=T.stateNode,bn=!1;break e;case 3:case 4:mt=T.stateNode.containerInfo,bn=!0;break e}T=T.return}if(mt===null)throw Error(s(160));gy(m,_,f),mt=null,bn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)vy(i,t),i=i.sibling}var sr=null;function vy(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(i,t),jn(t),l&4&&(Bi(3,t,t.return),jl(3,t),Bi(5,t,t.return));break;case 1:In(i,t),jn(t),l&512&&(At||a===null||Sr(a,a.return)),l&64&&si&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=sr;if(In(i,t),jn(t),l&512&&(At||a===null||Sr(a,a.return)),l&4){var m=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ns]||m[Pt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),en(m,l,a),m[Pt]=t,Tt(m),l=m;break e;case"link":var _=hv("link","href",f).get(l+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(m=_[T],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break t}}m=f.createElement(l),en(m,l,a),f.head.appendChild(m);break;case"meta":if(_=hv("meta","content",f).get(l+(a.content||""))){for(T=0;T<_.length;T++)if(m=_[T],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break t}}m=f.createElement(l),en(m,l,a),f.head.appendChild(m);break;default:throw Error(s(468,l))}m[Pt]=t,Tt(m),l=m}t.stateNode=l}else fv(f,t.type,t.stateNode);else t.stateNode=dv(f,l,t.memoizedProps);else m!==l?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,l===null?fv(f,t.type,t.stateNode):dv(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&up(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(i,t),jn(t),l&512&&(At||a===null||Sr(a,a.return)),a!==null&&l&4&&up(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(i,t),jn(t),l&512&&(At||a===null||Sr(a,a.return)),t.flags&32){f=t.stateNode;try{zn(f,"")}catch(J){dt(t,t.return,J)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,up(t,f,a!==null?a.memoizedProps:f)),l&1024&&(fp=!0);break;case 6:if(In(i,t),jn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(J){dt(t,t.return,J)}}break;case 3:if(cd=null,f=sr,sr=od(i.containerInfo),In(i,t),sr=f,jn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Kl(i.containerInfo)}catch(J){dt(t,t.return,J)}fp&&(fp=!1,xy(t));break;case 4:l=sr,sr=od(t.stateNode.containerInfo),In(i,t),jn(t),sr=l;break;case 12:In(i,t),jn(t);break;case 13:In(i,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bp=ie()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,pp(t,l)));break;case 22:f=t.memoizedState!==null;var U=a!==null&&a.memoizedState!==null,K=si,re=At;if(si=K||f,At=re||U,In(i,t),At=re,si=K,jn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||U||si||At||Js(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){U=a=i;try{if(m=U.stateNode,f)_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=U.stateNode;var ce=U.memoizedProps.style,Z=ce!=null&&ce.hasOwnProperty("display")?ce.display:null;T.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){dt(U,U.return,J)}}}else if(i.tag===6){if(a===null){U=i;try{U.stateNode.nodeValue=f?"":U.memoizedProps}catch(J){dt(U,U.return,J)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,pp(t,a))));break;case 19:In(i,t),jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,pp(t,l)));break;case 30:break;case 21:break;default:In(i,t),jn(t)}}function jn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(dy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,m=dp(t);Qu(t,m,f);break;case 5:var _=a.stateNode;a.flags&32&&(zn(_,""),a.flags&=-33);var T=dp(t);Qu(t,T,_);break;case 3:case 4:var U=a.stateNode.containerInfo,K=dp(t);hp(t,K,U);break;default:throw Error(s(161))}}catch(re){dt(t,t.return,re)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function xy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;xy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Fi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)py(t,i.alternate,i),i=i.sibling}function Js(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Bi(4,i,i.return),Js(i);break;case 1:Sr(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&cy(i,i.return,a),Js(i);break;case 27:Bl(i.stateNode);case 26:case 5:Sr(i,i.return),Js(i);break;case 22:i.memoizedState===null&&Js(i);break;case 30:Js(i);break;default:Js(i)}t=t.sibling}}function Hi(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,_=m.flags;switch(m.tag){case 0:case 11:case 15:Hi(f,m,a),jl(4,m);break;case 1:if(Hi(f,m,a),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(K){dt(l,l.return,K)}if(l=m,f=l.updateQueue,f!==null){var T=l.stateNode;try{var U=f.shared.hiddenCallbacks;if(U!==null)for(f.shared.hiddenCallbacks=null,f=0;f<U.length;f++)Q0(U[f],T)}catch(K){dt(l,l.return,K)}}a&&_&64&&ly(m),Dl(m,m.return);break;case 27:hy(m);case 26:case 5:Hi(f,m,a),a&&l===null&&_&4&&uy(m),Dl(m,m.return);break;case 12:Hi(f,m,a);break;case 13:Hi(f,m,a),a&&_&4&&yy(f,m);break;case 22:m.memoizedState===null&&Hi(f,m,a),Dl(m,m.return);break;case 30:break;default:Hi(f,m,a)}i=i.sibling}}function mp(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&yl(a))}function gp(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&yl(t))}function Ar(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)by(t,i,a,l),i=i.sibling}function by(t,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ar(t,i,a,l),f&2048&&jl(9,i);break;case 1:Ar(t,i,a,l);break;case 3:Ar(t,i,a,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&yl(t)));break;case 12:if(f&2048){Ar(t,i,a,l),t=i.stateNode;try{var m=i.memoizedProps,_=m.id,T=m.onPostCommit;typeof T=="function"&&T(_,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(U){dt(i,i.return,U)}}else Ar(t,i,a,l);break;case 13:Ar(t,i,a,l);break;case 23:break;case 22:m=i.stateNode,_=i.alternate,i.memoizedState!==null?m._visibility&2?Ar(t,i,a,l):kl(t,i):m._visibility&2?Ar(t,i,a,l):(m._visibility|=2,no(t,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&mp(_,i);break;case 24:Ar(t,i,a,l),f&2048&&gp(i.alternate,i);break;default:Ar(t,i,a,l)}}function no(t,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,_=i,T=a,U=l,K=_.flags;switch(_.tag){case 0:case 11:case 15:no(m,_,T,U,f),jl(8,_);break;case 23:break;case 22:var re=_.stateNode;_.memoizedState!==null?re._visibility&2?no(m,_,T,U,f):kl(m,_):(re._visibility|=2,no(m,_,T,U,f)),f&&K&2048&&mp(_.alternate,_);break;case 24:no(m,_,T,U,f),f&&K&2048&&gp(_.alternate,_);break;default:no(m,_,T,U,f)}i=i.sibling}}function kl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,f=l.flags;switch(l.tag){case 22:kl(a,l),f&2048&&mp(l.alternate,l);break;case 24:kl(a,l),f&2048&&gp(l.alternate,l);break;default:kl(a,l)}i=i.sibling}}var Ol=8192;function ro(t){if(t.subtreeFlags&Ol)for(t=t.child;t!==null;)_y(t),t=t.sibling}function _y(t){switch(t.tag){case 26:ro(t),t.flags&Ol&&t.memoizedState!==null&&iE(sr,t.memoizedState,t.memoizedProps);break;case 5:ro(t);break;case 3:case 4:var i=sr;sr=od(t.stateNode.containerInfo),ro(t),sr=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Ol,Ol=16777216,ro(t),Ol=i):ro(t));break;default:ro(t)}}function wy(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Ml(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Gt=l,Ty(l,t)}wy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ey(t),t=t.sibling}function Ey(t){switch(t.tag){case 0:case 11:case 15:Ml(t),t.flags&2048&&Bi(9,t,t.return);break;case 3:Ml(t);break;case 12:Ml(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ku(t)):Ml(t);break;default:Ml(t)}}function Ku(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Gt=l,Ty(l,t)}wy(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Bi(8,i,i.return),Ku(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Ku(i));break;default:Ku(i)}t=t.sibling}}function Ty(t,i){for(;Gt!==null;){var a=Gt;switch(a.tag){case 0:case 11:case 15:Bi(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:yl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Gt=l;else e:for(a=t;Gt!==null;){l=Gt;var f=l.sibling,m=l.return;if(my(l),l===a){Gt=null;break e}if(f!==null){f.return=m,Gt=f;break e}Gt=m}}}var bw={getCacheForType:function(t){var i=on(Ut),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},_w=typeof WeakMap=="function"?WeakMap:Map,rt=0,ht=null,Fe=null,Ke=0,it=0,Dn=null,qi=!1,io=!1,yp=!1,oi=0,wt=0,Gi=0,ea=0,vp=0,Kn=0,so=0,Pl=null,_n=null,xp=!1,bp=0,Wu=1/0,Xu=null,Yi=null,Jt=0,$i=null,ao=null,oo=0,_p=0,wp=null,Sy=null,Ll=0,Ep=null;function kn(){if((rt&2)!==0&&Ke!==0)return Ke&-Ke;if(X.T!==null){var t=Qa;return t!==0?t:Ip()}return Ri()}function Ay(){Kn===0&&(Kn=(Ke&536870912)===0||Je?Yo():536870912);var t=Qn.current;return t!==null&&(t.flags|=32),Kn}function On(t,i,a){(t===ht&&(it===2||it===9)||t.cancelPendingCommit!==null)&&(lo(t,0),Qi(t,Ke,Kn,!1)),Ur(t,a),((rt&2)===0||t!==ht)&&(t===ht&&((rt&2)===0&&(ea|=a),wt===4&&Qi(t,Ke,Kn,!1)),Nr(t))}function Ny(t,i,a){if((rt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||As(t,i),f=l?Tw(t,i):Ap(t,i,!0),m=l;do{if(f===0){io&&!l&&Qi(t,i,0,!1);break}else{if(a=t.current.alternate,m&&!ww(a)){f=Ap(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;e:{var T=t;f=Pl;var U=T.current.memoizedState.isDehydrated;if(U&&(lo(T,_).flags|=256),_=Ap(T,_,!1),_!==2){if(yp&&!U){T.errorRecoveryDisabledLanes|=m,ea|=m,f=4;break e}m=_n,_n=f,m!==null&&(_n===null?_n=m:_n.push.apply(_n,m))}f=_}if(m=!1,f!==2)continue}}if(f===1){lo(t,0),Qi(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Qi(l,i,Kn,!qi);break e;case 2:_n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=bp+300-ie(),10<f)){if(Qi(l,i,Kn,!qi),Sa(l,0,!0)!==0)break e;l.timeoutHandle=nv(Ry.bind(null,l,a,_n,Xu,xp,i,Kn,ea,so,qi,m,2,-0,0),f);break e}Ry(l,a,_n,Xu,xp,i,Kn,ea,so,qi,m,0,-0,0)}}break}while(!0);Nr(t)}function Ry(t,i,a,l,f,m,_,T,U,K,re,ce,Z,J){if(t.timeoutHandle=-1,ce=i.subtreeFlags,(ce&8192||(ce&16785408)===16785408)&&(ql={stylesheets:null,count:0,unsuspend:rE},_y(i),ce=sE(),ce!==null)){t.cancelPendingCommit=ce(My.bind(null,t,i,m,a,l,f,_,T,U,re,1,Z,J)),Qi(t,m,_,!K);return}My(t,i,m,a,l,f,_,T,U)}function ww(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],m=f.getSnapshot;f=f.value;try{if(!Rn(m(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Qi(t,i,a,l){i&=~vp,i&=~ea,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-an(f),_=1<<m;l[m]=-1,f&=~_}a!==0&&hr(t,a,i)}function Zu(){return(rt&6)===0?(Vl(0),!1):!0}function Tp(){if(Fe!==null){if(it===0)var t=Fe.return;else t=Fe,Jr=Qs=null,Bf(t),eo=null,Rl=0,t=Fe;for(;t!==null;)oy(t.alternate,t),t=t.return;Fe=null}}function lo(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,zw(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Tp(),ht=t,Fe=a=Wr(t.current,null),Ke=i,it=0,Dn=null,qi=!1,io=As(t,i),yp=!1,so=Kn=vp=ea=Gi=wt=0,_n=Pl=null,xp=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-an(l),m=1<<f;i|=t[f],l&=~m}return oi=i,bu(),a}function Cy(t,i){ze=null,X.H=Uu,i===xl||i===Cu?(i=Y0(),it=3):i===H0?(i=Y0(),it=4):it=i===$1?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Dn=i,Fe===null&&(wt=1,qu(t,qn(i,t.current)))}function Iy(){var t=X.H;return X.H=Uu,t===null?Uu:t}function jy(){var t=X.A;return X.A=bw,t}function Sp(){wt=4,qi||(Ke&4194048)!==Ke&&Qn.current!==null||(io=!0),(Gi&134217727)===0&&(ea&134217727)===0||ht===null||Qi(ht,Ke,Kn,!1)}function Ap(t,i,a){var l=rt;rt|=2;var f=Iy(),m=jy();(ht!==t||Ke!==i)&&(Xu=null,lo(t,i)),i=!1;var _=wt;e:do try{if(it!==0&&Fe!==null){var T=Fe,U=Dn;switch(it){case 8:Tp(),_=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(i=!0);var K=it;if(it=0,Dn=null,co(t,T,U,K),a&&io){_=0;break e}break;default:K=it,it=0,Dn=null,co(t,T,U,K)}}Ew(),_=wt;break}catch(re){Cy(t,re)}while(!0);return i&&t.shellSuspendCounter++,Jr=Qs=null,rt=l,X.H=f,X.A=m,Fe===null&&(ht=null,Ke=0,bu()),_}function Ew(){for(;Fe!==null;)Dy(Fe)}function Tw(t,i){var a=rt;rt|=2;var l=Iy(),f=jy();ht!==t||Ke!==i?(Xu=null,Wu=ie()+500,lo(t,i)):io=As(t,i);e:do try{if(it!==0&&Fe!==null){i=Fe;var m=Dn;t:switch(it){case 1:it=0,Dn=null,co(t,i,m,1);break;case 2:case 9:if(q0(m)){it=0,Dn=null,ky(i);break}i=function(){it!==2&&it!==9||ht!==t||(it=7),Nr(t)},m.then(i,i);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:q0(m)?(it=0,Dn=null,ky(i)):(it=0,Dn=null,co(t,i,m,7));break;case 5:var _=null;switch(Fe.tag){case 26:_=Fe.memoizedState;case 5:case 27:var T=Fe;if(!_||pv(_)){it=0,Dn=null;var U=T.sibling;if(U!==null)Fe=U;else{var K=T.return;K!==null?(Fe=K,Ju(K)):Fe=null}break t}}it=0,Dn=null,co(t,i,m,5);break;case 6:it=0,Dn=null,co(t,i,m,6);break;case 8:Tp(),wt=6;break e;default:throw Error(s(462))}}Sw();break}catch(re){Cy(t,re)}while(!0);return Jr=Qs=null,X.H=l,X.A=f,rt=a,Fe!==null?0:(ht=null,Ke=0,bu(),wt)}function Sw(){for(;Fe!==null&&!ws();)Dy(Fe)}function Dy(t){var i=sy(t.alternate,t,oi);t.memoizedProps=t.pendingProps,i===null?Ju(t):Fe=i}function ky(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=J1(a,i,i.pendingProps,i.type,void 0,Ke);break;case 11:i=J1(a,i,i.pendingProps,i.type.render,i.ref,Ke);break;case 5:Bf(i);default:oy(a,i),i=Fe=O0(i,oi),i=sy(a,i,oi)}t.memoizedProps=t.pendingProps,i===null?Ju(t):Fe=i}function co(t,i,a,l){Jr=Qs=null,Bf(i),eo=null,Rl=0;var f=i.return;try{if(pw(t,f,i,a,Ke)){wt=1,qu(t,qn(a,t.current)),Fe=null;return}}catch(m){if(f!==null)throw Fe=f,m;wt=1,qu(t,qn(a,t.current)),Fe=null;return}i.flags&32768?(Je||l===1?t=!0:io||(Ke&536870912)!==0?t=!1:(qi=t=!0,(l===2||l===9||l===3||l===6)&&(l=Qn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Oy(i,t)):Ju(i)}function Ju(t){var i=t;do{if((i.flags&32768)!==0){Oy(i,qi);return}t=i.return;var a=gw(i.alternate,i,oi);if(a!==null){Fe=a;return}if(i=i.sibling,i!==null){Fe=i;return}Fe=i=t}while(i!==null);wt===0&&(wt=5)}function Oy(t,i){do{var a=yw(t.alternate,t);if(a!==null){a.flags&=32767,Fe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Fe=t;return}Fe=t=a}while(t!==null);wt=6,Fe=null}function My(t,i,a,l,f,m,_,T,U){t.cancelPendingCommit=null;do ed();while(Jt!==0);if((rt&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(m=i.lanes|i.childLanes,m|=gf,Qo(t,a,m,_,T,U),t===ht&&(Fe=ht=null,Ke=0),ao=i,$i=t,oo=a,_p=m,wp=f,Sy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Cw(ut,function(){return zy(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=X.T,X.T=null,f=fe.p,fe.p=2,_=rt,rt|=4;try{vw(t,i,a)}finally{rt=_,fe.p=f,X.T=l}}Jt=1,Py(),Ly(),Vy()}}function Py(){if(Jt===1){Jt=0;var t=$i,i=ao,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=X.T,X.T=null;var l=fe.p;fe.p=2;var f=rt;rt|=4;try{vy(i,t);var m=Vp,_=T0(t.containerInfo),T=m.focusedElem,U=m.selectionRange;if(_!==T&&T&&T.ownerDocument&&E0(T.ownerDocument.documentElement,T)){if(U!==null&&df(T)){var K=U.start,re=U.end;if(re===void 0&&(re=K),"selectionStart"in T)T.selectionStart=K,T.selectionEnd=Math.min(re,T.value.length);else{var ce=T.ownerDocument||document,Z=ce&&ce.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),De=T.textContent.length,Se=Math.min(U.start,De),lt=U.end===void 0?Se:Math.min(U.end,De);!J.extend&&Se>lt&&(_=lt,lt=Se,Se=_);var Y=w0(T,Se),H=w0(T,lt);if(Y&&H&&(J.rangeCount!==1||J.anchorNode!==Y.node||J.anchorOffset!==Y.offset||J.focusNode!==H.node||J.focusOffset!==H.offset)){var Q=ce.createRange();Q.setStart(Y.node,Y.offset),J.removeAllRanges(),Se>lt?(J.addRange(Q),J.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),J.addRange(Q))}}}}for(ce=[],J=T;J=J.parentNode;)J.nodeType===1&&ce.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ce.length;T++){var oe=ce[T];oe.element.scrollLeft=oe.left,oe.element.scrollTop=oe.top}}hd=!!Lp,Vp=Lp=null}finally{rt=f,fe.p=l,X.T=a}}t.current=i,Jt=2}}function Ly(){if(Jt===2){Jt=0;var t=$i,i=ao,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=X.T,X.T=null;var l=fe.p;fe.p=2;var f=rt;rt|=4;try{py(t,i.alternate,i)}finally{rt=f,fe.p=l,X.T=a}}Jt=3}}function Vy(){if(Jt===4||Jt===3){Jt=0,Ta();var t=$i,i=ao,a=oo,l=Sy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Jt=5:(Jt=0,ao=$i=null,Uy(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Yi=null),Aa(a),i=i.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(bt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=X.T,f=fe.p,fe.p=2,X.T=null;try{for(var m=t.onRecoverableError,_=0;_<l.length;_++){var T=l[_];m(T.value,{componentStack:T.stack})}}finally{X.T=i,fe.p=f}}(oo&3)!==0&&ed(),Nr(t),f=t.pendingLanes,(a&4194090)!==0&&(f&42)!==0?t===Ep?Ll++:(Ll=0,Ep=t):Ll=0,Vl(0)}}function Uy(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,yl(i)))}function ed(t){return Py(),Ly(),Vy(),zy()}function zy(){if(Jt!==5)return!1;var t=$i,i=_p;_p=0;var a=Aa(oo),l=X.T,f=fe.p;try{fe.p=32>a?32:a,X.T=null,a=wp,wp=null;var m=$i,_=oo;if(Jt=0,ao=$i=null,oo=0,(rt&6)!==0)throw Error(s(331));var T=rt;if(rt|=4,Ey(m.current),by(m,m.current,_,a),rt=T,Vl(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(bt,m)}catch{}return!0}finally{fe.p=f,X.T=l,Uy(t,i)}}function By(t,i,a){i=qn(a,i),i=tp(t.stateNode,i,2),t=Li(t,i,2),t!==null&&(Ur(t,2),Nr(t))}function dt(t,i,a){if(t.tag===3)By(t,t,a);else for(;i!==null;){if(i.tag===3){By(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Yi===null||!Yi.has(l))){t=qn(a,t),a=G1(2),l=Li(i,a,2),l!==null&&(Y1(a,l,i,t),Ur(l,2),Nr(l));break}}i=i.return}}function Np(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new _w;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(yp=!0,f.add(a),t=Aw.bind(null,t,i,a),i.then(t,t))}function Aw(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ht===t&&(Ke&a)===a&&(wt===4||wt===3&&(Ke&62914560)===Ke&&300>ie()-bp?(rt&2)===0&&lo(t,0):vp|=a,so===Ke&&(so=0)),Nr(t)}function Fy(t,i){i===0&&(i=$o()),t=qa(t,i),t!==null&&(Ur(t,i),Nr(t))}function Nw(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Fy(t,a)}function Rw(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Fy(t,a)}function Cw(t,i){return Ln(t,i)}var td=null,uo=null,Rp=!1,nd=!1,Cp=!1,ta=0;function Nr(t){t!==uo&&t.next===null&&(uo===null?td=uo=t:uo=uo.next=t),nd=!0,Rp||(Rp=!0,jw())}function Vl(t,i){if(!Cp&&nd){Cp=!0;do for(var a=!1,l=td;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var _=l.suspendedLanes,T=l.pingedLanes;m=(1<<31-an(42|t)+1)-1,m&=f&~(_&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,Yy(l,m))}else m=Ke,m=Sa(l,l===ht?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||As(l,m)||(a=!0,Yy(l,m));l=l.next}while(a);Cp=!1}}function Iw(){Hy()}function Hy(){nd=Rp=!1;var t=0;ta!==0&&(Uw()&&(t=ta),ta=0);for(var i=ie(),a=null,l=td;l!==null;){var f=l.next,m=qy(l,i);m===0?(l.next=null,a===null?td=f:a.next=f,f===null&&(uo=a)):(a=l,(t!==0||(m&3)!==0)&&(nd=!0)),l=f}Vl(t)}function qy(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var _=31-an(m),T=1<<_,U=f[_];U===-1?((T&a)===0||(T&l)!==0)&&(f[_]=Go(T,i)):U<=i&&(t.expiredLanes|=T),m&=~T}if(i=ht,a=Ke,a=Sa(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(it===2||it===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Lr(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||As(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&Lr(l),Aa(a)){case 2:case 8:a=Ue;break;case 32:a=ut;break;case 268435456:a=Vn;break;default:a=ut}return l=Gy.bind(null,t),a=Ln(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&Lr(l),t.callbackPriority=2,t.callbackNode=null,2}function Gy(t,i){if(Jt!==0&&Jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ed()&&t.callbackNode!==a)return null;var l=Ke;return l=Sa(t,t===ht?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Ny(t,l,i),qy(t,ie()),t.callbackNode!=null&&t.callbackNode===a?Gy.bind(null,t):null)}function Yy(t,i){if(ed())return null;Ny(t,i,!0)}function jw(){Bw(function(){(rt&6)!==0?Ln(je,Iw):Hy()})}function Ip(){return ta===0&&(ta=Yo()),ta}function $y(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Da(""+t)}function Qy(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function Dw(t,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var m=$y((f[Ct]||null).action),_=l.submitter;_&&(i=(i=_[Ct]||null)?$y(i.formAction):_.getAttribute("formAction"),i!==null&&(m=i,_=null));var T=new ka("action","action",null,l,f);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ta!==0){var U=_?Qy(f,_):new FormData(f);Wf(a,{pending:!0,data:U,method:f.method,action:m},null,U)}}else typeof m=="function"&&(T.preventDefault(),U=_?Qy(f,_):new FormData(f),Wf(a,{pending:!0,data:U,method:f.method,action:m},m,U))},currentTarget:f}]})}}for(var jp=0;jp<mf.length;jp++){var Dp=mf[jp],kw=Dp.toLowerCase(),Ow=Dp[0].toUpperCase()+Dp.slice(1);ir(kw,"on"+Ow)}ir(N0,"onAnimationEnd"),ir(R0,"onAnimationIteration"),ir(C0,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(X4,"onTransitionRun"),ir(Z4,"onTransitionStart"),ir(J4,"onTransitionCancel"),ir(I0,"onTransitionEnd"),Br("onMouseEnter",["mouseout","mouseover"]),Br("onMouseLeave",["mouseout","mouseover"]),Br("onPointerEnter",["pointerout","pointerover"]),Br("onPointerLeave",["pointerout","pointerover"]),nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nr("onBeforeInput",["compositionend","keypress","textInput","paste"]),nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));function Ky(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var _=l.length-1;0<=_;_--){var T=l[_],U=T.instance,K=T.currentTarget;if(T=T.listener,U!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=K;try{m(f)}catch(re){Hu(re)}f.currentTarget=null,m=U}else for(_=0;_<l.length;_++){if(T=l[_],U=T.instance,K=T.currentTarget,T=T.listener,U!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=K;try{m(f)}catch(re){Hu(re)}f.currentTarget=null,m=U}}}}function He(t,i){var a=i[Wo];a===void 0&&(a=i[Wo]=new Set);var l=t+"__bubble";a.has(l)||(Wy(i,t,2,!1),a.add(l))}function kp(t,i,a){var l=0;i&&(l|=4),Wy(a,t,l,i)}var rd="_reactListening"+Math.random().toString(36).slice(2);function Op(t){if(!t[rd]){t[rd]=!0,Xo.forEach(function(a){a!=="selectionchange"&&(Mw.has(a)||kp(a,!1,t),kp(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[rd]||(i[rd]=!0,kp("selectionchange",!1,i))}}function Wy(t,i,a,l){switch(bv(i)){case 2:var f=lE;break;case 8:f=cE;break;default:f=Qp}a=f.bind(null,i,a,t),f=void 0,!Fn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function Mp(t,i,a,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===f)break;if(_===4)for(_=l.return;_!==null;){var U=_.tag;if((U===3||U===4)&&_.stateNode.containerInfo===f)return;_=_.return}for(;T!==null;){if(_=zr(T),_===null)return;if(U=_.tag,U===5||U===6||U===26||U===27){l=m=_;continue e}T=T.parentNode}}l=l.return}su(function(){var K=m,re=Bn(a),ce=[];e:{var Z=j0.get(t);if(Z!==void 0){var J=ka,De=t;switch(t){case"keypress":if(vr(a)===0)break e;case"keydown":case"keyup":J=Ua;break;case"focusin":De="focus",J=Pa;break;case"focusout":De="blur",J=Pa;break;case"beforeblur":case"afterblur":J=Pa;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=fu;break;case N0:case R0:case C0:J=La;break;case I0:J=mu;break;case"scroll":case"scrollend":J=au;break;case"wheel":J=za;break;case"copy":case"cut":case"paste":J=Va;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=cl;break;case"toggle":case"beforetoggle":J=yu}var Se=(i&4)!==0,lt=!Se&&(t==="scroll"||t==="scrollend"),Y=Se?Z!==null?Z+"Capture":null:Z;Se=[];for(var H=K,Q;H!==null;){var oe=H;if(Q=oe.stateNode,oe=oe.tag,oe!==5&&oe!==26&&oe!==27||Q===null||Y===null||(oe=Os(H,Y),oe!=null&&Se.push(zl(H,oe,Q))),lt)break;H=H.return}0<Se.length&&(Z=new J(Z,De,null,a,re),ce.push({event:Z,listeners:Se}))}}if((i&7)===0){e:{if(Z=t==="mouseover"||t==="pointerover",J=t==="mouseout"||t==="pointerout",Z&&a!==qr&&(De=a.relatedTarget||a.fromElement)&&(zr(De)||De[Un]))break e;if((J||Z)&&(Z=re.window===re?re:(Z=re.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(De=a.relatedTarget||a.toElement,J=K,De=De?zr(De):null,De!==null&&(lt=c(De),Se=De.tag,De!==lt||Se!==5&&Se!==27&&Se!==6)&&(De=null)):(J=null,De=K),J!==De)){if(Se=Hn,oe="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Se=cl,oe="onPointerLeave",Y="onPointerEnter",H="pointer"),lt=J==null?Z:pr(J),Q=De==null?Z:pr(De),Z=new Se(oe,H+"leave",J,a,re),Z.target=lt,Z.relatedTarget=Q,oe=null,zr(re)===K&&(Se=new Se(Y,H+"enter",De,a,re),Se.target=Q,Se.relatedTarget=lt,oe=Se),lt=oe,J&&De)t:{for(Se=J,Y=De,H=0,Q=Se;Q;Q=ho(Q))H++;for(Q=0,oe=Y;oe;oe=ho(oe))Q++;for(;0<H-Q;)Se=ho(Se),H--;for(;0<Q-H;)Y=ho(Y),Q--;for(;H--;){if(Se===Y||Y!==null&&Se===Y.alternate)break t;Se=ho(Se),Y=ho(Y)}Se=null}else Se=null;J!==null&&Xy(ce,Z,J,Se,!1),De!==null&&lt!==null&&Xy(ce,lt,De,Se,!0)}}e:{if(Z=K?pr(K):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var _e=g0;else if(Vt(Z))if(y0)_e=Q4;else{_e=Y4;var Be=G4}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?K&&nl(K.elementType)&&(_e=g0):_e=$4;if(_e&&(_e=_e(t,K))){Kr(ce,_e,a,re);break e}Be&&Be(t,Z,K),t==="focusout"&&K&&Z.type==="number"&&K.memoizedProps.value!=null&&Di(Z,"number",Z.value)}switch(Be=K?pr(K):window,t){case"focusin":(Vt(Be)||Be.contentEditable==="true")&&(Ba=Be,hf=K,hl=null);break;case"focusout":hl=hf=Ba=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,S0(ce,a,re);break;case"selectionchange":if(W4)break;case"keydown":case"keyup":S0(ce,a,re)}var we;if(_r)e:{switch(t){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else $e?ne(t,a)&&(Ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(b&&a.locale!=="ko"&&($e||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&$e&&(we=il()):(yr=re,ki="value"in yr?yr.value:yr.textContent,$e=!0)),Be=id(K,Ae),0<Be.length&&(Ae=new ol(Ae,t,null,a,re),ce.push({event:Ae,listeners:Be}),we?Ae.data=we:(we=me(a),we!==null&&(Ae.data=we)))),(we=v?Lt(t,a):Qe(t,a))&&(Ae=id(K,"onBeforeInput"),0<Ae.length&&(Be=new ol("onBeforeInput","beforeinput",null,a,re),ce.push({event:Be,listeners:Ae}),Be.data=we)),Dw(ce,t,K,a,re)}Ky(ce,i)})}function zl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function id(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Os(t,a),f!=null&&l.unshift(zl(t,f,m)),f=Os(t,i),f!=null&&l.push(zl(t,f,m))),t.tag===3)return l;t=t.return}return[]}function ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xy(t,i,a,l,f){for(var m=i._reactName,_=[];a!==null&&a!==l;){var T=a,U=T.alternate,K=T.stateNode;if(T=T.tag,U!==null&&U===l)break;T!==5&&T!==26&&T!==27||K===null||(U=K,f?(K=Os(a,m),K!=null&&_.unshift(zl(a,K,U))):f||(K=Os(a,m),K!=null&&_.push(zl(a,K,U)))),a=a.return}_.length!==0&&t.push({event:i,listeners:_})}var Pw=/\r\n?/g,Lw=/\u0000|\uFFFD/g;function Zy(t){return(typeof t=="string"?t:""+t).replace(Pw,`
`).replace(Lw,"")}function Jy(t,i){return i=Zy(i),Zy(t)===i}function sd(){}function ot(t,i,a,l,f,m){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||zn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&zn(t,""+l);break;case"className":mr(t,"class",l);break;case"tabIndex":mr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":mr(t,a,l);break;case"style":tl(t,l,m);break;case"data":if(i!=="object"){mr(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Da(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(i!=="input"&&ot(t,i,"name",f.name,f,null),ot(t,i,"formEncType",f.formEncType,f,null),ot(t,i,"formMethod",f.formMethod,f,null),ot(t,i,"formTarget",f.formTarget,f,null)):(ot(t,i,"encType",f.encType,f,null),ot(t,i,"method",f.method,f,null),ot(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Da(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=sd);break;case"onScroll":l!=null&&He("scroll",t);break;case"onScrollEnd":l!=null&&He("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Da(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":He("beforetoggle",t),He("toggle",t),ji(t,"popover",l);break;case"xlinkActuate":Wt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Wt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Wt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Wt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Wt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Wt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ji(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sf.get(a)||a,ji(t,a,l))}}function Pp(t,i,a,l,f,m){switch(a){case"style":tl(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?zn(t,l):(typeof l=="number"||typeof l=="bigint")&&zn(t,""+l);break;case"onScroll":l!=null&&He("scroll",t);break;case"onScrollEnd":l!=null&&He("scrollend",t);break;case"onClick":l!=null&&(t.onclick=sd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Na.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),m=t[Ct]||null,m=m!=null?m[a]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,f);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):ji(t,a,l)}}}function en(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",t),He("load",t);var l=!1,f=!1,m;for(m in a)if(a.hasOwnProperty(m)){var _=a[m];if(_!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:ot(t,i,m,_,a,null)}}f&&ot(t,i,"srcSet",a.srcSet,a,null),l&&ot(t,i,"src",a.src,a,null);return;case"input":He("invalid",t);var T=m=_=f=null,U=null,K=null;for(l in a)if(a.hasOwnProperty(l)){var re=a[l];if(re!=null)switch(l){case"name":f=re;break;case"type":_=re;break;case"checked":U=re;break;case"defaultChecked":K=re;break;case"value":m=re;break;case"defaultValue":T=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,i));break;default:ot(t,i,l,re,a,null)}}js(t,m,T,U,K,_,f,!1),ja(t);return;case"select":He("invalid",t),l=_=m=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:ot(t,i,f,T,a,null)}i=m,a=_,t.multiple=!!l,i!=null?Hr(t,!!l,i,!1):a!=null&&Hr(t,!!l,a,!0);return;case"textarea":He("invalid",t),m=f=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:ot(t,i,_,T,a,null)}Ds(t,l,f,m),ja(t);return;case"option":for(U in a)if(a.hasOwnProperty(U)&&(l=a[U],l!=null))switch(U){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ot(t,i,U,l,a,null)}return;case"dialog":He("beforetoggle",t),He("toggle",t),He("cancel",t),He("close",t);break;case"iframe":case"object":He("load",t);break;case"video":case"audio":for(l=0;l<Ul.length;l++)He(Ul[l],t);break;case"image":He("error",t),He("load",t);break;case"details":He("toggle",t);break;case"embed":case"source":case"link":He("error",t),He("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(l=a[K],l!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:ot(t,i,K,l,a,null)}return;default:if(nl(i)){for(re in a)a.hasOwnProperty(re)&&(l=a[re],l!==void 0&&Pp(t,i,re,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&ot(t,i,T,l,a,null))}function Vw(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,_=null,T=null,U=null,K=null,re=null;for(J in a){var ce=a[J];if(a.hasOwnProperty(J)&&ce!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":U=ce;default:l.hasOwnProperty(J)||ot(t,i,J,null,l,ce)}}for(var Z in l){var J=l[Z];if(ce=a[Z],l.hasOwnProperty(Z)&&(J!=null||ce!=null))switch(Z){case"type":m=J;break;case"name":f=J;break;case"checked":K=J;break;case"defaultChecked":re=J;break;case"value":_=J;break;case"defaultValue":T=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(s(137,i));break;default:J!==ce&&ot(t,i,Z,J,l,ce)}}Nn(t,_,T,U,K,re,m,f);return;case"select":J=_=T=Z=null;for(m in a)if(U=a[m],a.hasOwnProperty(m)&&U!=null)switch(m){case"value":break;case"multiple":J=U;default:l.hasOwnProperty(m)||ot(t,i,m,null,l,U)}for(f in l)if(m=l[f],U=a[f],l.hasOwnProperty(f)&&(m!=null||U!=null))switch(f){case"value":Z=m;break;case"defaultValue":T=m;break;case"multiple":_=m;default:m!==U&&ot(t,i,f,m,l,U)}i=T,a=_,l=J,Z!=null?Hr(t,!!a,Z,!1):!!l!=!!a&&(i!=null?Hr(t,!!a,i,!0):Hr(t,!!a,a?[]:"",!1));return;case"textarea":J=Z=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ot(t,i,T,null,l,f)}for(_ in l)if(f=l[_],m=a[_],l.hasOwnProperty(_)&&(f!=null||m!=null))switch(_){case"value":Z=f;break;case"defaultValue":J=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&ot(t,i,_,f,l,m)}st(t,Z,J);return;case"option":for(var De in a)if(Z=a[De],a.hasOwnProperty(De)&&Z!=null&&!l.hasOwnProperty(De))switch(De){case"selected":t.selected=!1;break;default:ot(t,i,De,null,l,Z)}for(U in l)if(Z=l[U],J=a[U],l.hasOwnProperty(U)&&Z!==J&&(Z!=null||J!=null))switch(U){case"selected":t.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:ot(t,i,U,Z,l,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in a)Z=a[Se],a.hasOwnProperty(Se)&&Z!=null&&!l.hasOwnProperty(Se)&&ot(t,i,Se,null,l,Z);for(K in l)if(Z=l[K],J=a[K],l.hasOwnProperty(K)&&Z!==J&&(Z!=null||J!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(s(137,i));break;default:ot(t,i,K,Z,l,J)}return;default:if(nl(i)){for(var lt in a)Z=a[lt],a.hasOwnProperty(lt)&&Z!==void 0&&!l.hasOwnProperty(lt)&&Pp(t,i,lt,void 0,l,Z);for(re in l)Z=l[re],J=a[re],!l.hasOwnProperty(re)||Z===J||Z===void 0&&J===void 0||Pp(t,i,re,Z,l,J);return}}for(var Y in a)Z=a[Y],a.hasOwnProperty(Y)&&Z!=null&&!l.hasOwnProperty(Y)&&ot(t,i,Y,null,l,Z);for(ce in l)Z=l[ce],J=a[ce],!l.hasOwnProperty(ce)||Z===J||Z==null&&J==null||ot(t,i,ce,Z,l,J)}var Lp=null,Vp=null;function ad(t){return t.nodeType===9?t:t.ownerDocument}function ev(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Up(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zp=null;function Uw(){var t=window.event;return t&&t.type==="popstate"?t===zp?!1:(zp=t,!0):(zp=null,!1)}var nv=typeof setTimeout=="function"?setTimeout:void 0,zw=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,Bw=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(t){return rv.resolve(null).then(t).catch(Fw)}:nv;function Fw(t){setTimeout(function(){throw t})}function Ki(t){return t==="head"}function iv(t,i){var a=i,l=0,f=0;do{var m=a.nextSibling;if(t.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<l&&8>l){a=l;var _=t.ownerDocument;if(a&1&&Bl(_.documentElement),a&2&&Bl(_.body),a&4)for(a=_.head,Bl(a),_=a.firstChild;_;){var T=_.nextSibling,U=_.nodeName;_[Ns]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&_.rel.toLowerCase()==="stylesheet"||a.removeChild(_),_=T}}if(f===0){t.removeChild(m),Kl(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=m}while(a);Kl(i)}function Bp(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bp(a),Ii(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Hw(t,i,a,l){for(;t.nodeType===1;){var f=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ns])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=ar(t.nextSibling),t===null)break}return null}function qw(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ar(t.nextSibling),t===null))return null;return t}function Fp(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Gw(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ar(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Hp=null;function sv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function av(t,i,a){switch(i=ad(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Bl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ii(t)}var Wn=new Map,ov=new Set;function od(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var li=fe.d;fe.d={f:Yw,r:$w,D:Qw,C:Kw,L:Ww,m:Xw,X:Jw,S:Zw,M:eE};function Yw(){var t=li.f(),i=Zu();return t||i}function $w(t){var i=fr(t);i!==null&&i.tag===5&&i.type==="form"?N1(i):li.r(t)}var fo=typeof document>"u"?null:document;function lv(t,i,a){var l=fo;if(l&&typeof i=="string"&&i){var f=It(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),ov.has(f)||(ov.add(f),t={rel:t,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),en(i,"link",t),Tt(i),l.head.appendChild(i)))}}function Qw(t){li.D(t),lv("dns-prefetch",t,null)}function Kw(t,i){li.C(t,i),lv("preconnect",t,i)}function Ww(t,i,a){li.L(t,i,a);var l=fo;if(l&&t&&i){var f='link[rel="preload"][as="'+It(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+It(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+It(a.imageSizes)+'"]')):f+='[href="'+It(t)+'"]';var m=f;switch(i){case"style":m=po(t);break;case"script":m=mo(t)}Wn.has(m)||(t=x({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Wn.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Fl(m))||i==="script"&&l.querySelector(Hl(m))||(i=l.createElement("link"),en(i,"link",t),Tt(i),l.head.appendChild(i)))}}function Xw(t,i){li.m(t,i);var a=fo;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+It(l)+'"][href="'+It(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=mo(t)}if(!Wn.has(m)&&(t=x({rel:"modulepreload",href:t},i),Wn.set(m,t),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Hl(m)))return}l=a.createElement("link"),en(l,"link",t),Tt(l),a.head.appendChild(l)}}}function Zw(t,i,a){li.S(t,i,a);var l=fo;if(l&&t){var f=fn(l).hoistableStyles,m=po(t);i=i||"default";var _=f.get(m);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(Fl(m)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Wn.get(m))&&qp(t,a);var U=_=l.createElement("link");Tt(U),en(U,"link",t),U._p=new Promise(function(K,re){U.onload=K,U.onerror=re}),U.addEventListener("load",function(){T.loading|=1}),U.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ld(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:T},f.set(m,_)}}}function Jw(t,i){li.X(t,i);var a=fo;if(a&&t){var l=fn(a).hoistableScripts,f=mo(t),m=l.get(f);m||(m=a.querySelector(Hl(f)),m||(t=x({src:t,async:!0},i),(i=Wn.get(f))&&Gp(t,i),m=a.createElement("script"),Tt(m),en(m,"link",t),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function eE(t,i){li.M(t,i);var a=fo;if(a&&t){var l=fn(a).hoistableScripts,f=mo(t),m=l.get(f);m||(m=a.querySelector(Hl(f)),m||(t=x({src:t,async:!0,type:"module"},i),(i=Wn.get(f))&&Gp(t,i),m=a.createElement("script"),Tt(m),en(m,"link",t),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function cv(t,i,a,l){var f=(f=le.current)?od(f):null;if(!f)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=po(a.href),a=fn(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=po(a.href);var m=fn(f).hoistableStyles,_=m.get(t);if(_||(f=f.ownerDocument||f,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,_),(m=f.querySelector(Fl(t)))&&!m._p&&(_.instance=m,_.state.loading=5),Wn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wn.set(t,a),m||tE(f,t,a,_.state))),i&&l===null)throw Error(s(528,""));return _}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=mo(a),a=fn(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function po(t){return'href="'+It(t)+'"'}function Fl(t){return'link[rel="stylesheet"]['+t+"]"}function uv(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function tE(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),en(i,"link",a),Tt(i),t.head.appendChild(i))}function mo(t){return'[src="'+It(t)+'"]'}function Hl(t){return"script[async]"+t}function dv(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+It(a.href)+'"]');if(l)return i.instance=l,Tt(l),l;var f=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Tt(l),en(l,"style",f),ld(l,a.precedence,t),i.instance=l;case"stylesheet":f=po(a.href);var m=t.querySelector(Fl(f));if(m)return i.state.loading|=4,i.instance=m,Tt(m),m;l=uv(a),(f=Wn.get(f))&&qp(l,f),m=(t.ownerDocument||t).createElement("link"),Tt(m);var _=m;return _._p=new Promise(function(T,U){_.onload=T,_.onerror=U}),en(m,"link",l),i.state.loading|=4,ld(m,a.precedence,t),i.instance=m;case"script":return m=mo(a.src),(f=t.querySelector(Hl(m)))?(i.instance=f,Tt(f),f):(l=a,(f=Wn.get(m))&&(l=x({},a),Gp(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),Tt(f),en(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,ld(l,a.precedence,t));return i.instance}function ld(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===i)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function qp(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Gp(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var cd=null;function hv(t,i,a){if(cd===null){var l=new Map,f=cd=new Map;f.set(a,l)}else f=cd,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),f=0;f<a.length;f++){var m=a[f];if(!(m[Ns]||m[Pt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var _=m.getAttribute(i)||"";_=t+_;var T=l.get(_);T?T.push(m):l.set(_,[m])}}return l}function fv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function nE(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function pv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ql=null;function rE(){}function iE(t,i,a){if(ql===null)throw Error(s(475));var l=ql;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=po(a.href),m=t.querySelector(Fl(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=ud.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,Tt(m);return}m=t.ownerDocument||t,a=uv(a),(f=Wn.get(f))&&qp(a,f),m=m.createElement("link"),Tt(m);var _=m;_._p=new Promise(function(T,U){_.onload=T,_.onerror=U}),en(m,"link",a),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=ud.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function sE(){if(ql===null)throw Error(s(475));var t=ql;return t.stylesheets&&t.count===0&&Yp(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&Yp(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ud(){if(this.count--,this.count===0){if(this.stylesheets)Yp(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var dd=null;function Yp(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,dd=new Map,i.forEach(aE,t),dd=null,ud.call(t))}function aE(t,i){if(!(i.state.loading&4)){var a=dd.get(t);if(a)var l=a.get(null);else{a=new Map,dd.set(t,a);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var _=f[m];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}f=i.instance,_=f.getAttribute("data-precedence"),m=a.get(_)||l,m===l&&a.set(null,f),a.set(_,f),this.count++,l=ud.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Gl={$$typeof:F,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function oE(t,i,a,l,f,m,_,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.hiddenUpdates=Vr(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function mv(t,i,a,l,f,m,_,T,U,K,re,ce){return t=new oE(t,i,a,_,T,U,K,ce),i=1,m===!0&&(i|=24),m=Cn(3,null,null,i),t.current=m,m.stateNode=t,i=Nf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:a,cache:i},jf(m),t}function gv(t){return t?(t=Ga,t):Ga}function yv(t,i,a,l,f,m){f=gv(f),l.context===null?l.context=f:l.pendingContext=f,l=Pi(i),l.payload={element:a},m=m===void 0?null:m,m!==null&&(l.callback=m),a=Li(t,l,i),a!==null&&(On(a,t,i),_l(a,t,i))}function vv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function $p(t,i){vv(t,i),(t=t.alternate)&&vv(t,i)}function xv(t){if(t.tag===13){var i=qa(t,67108864);i!==null&&On(i,t,67108864),$p(t,67108864)}}var hd=!0;function lE(t,i,a,l){var f=X.T;X.T=null;var m=fe.p;try{fe.p=2,Qp(t,i,a,l)}finally{fe.p=m,X.T=f}}function cE(t,i,a,l){var f=X.T;X.T=null;var m=fe.p;try{fe.p=8,Qp(t,i,a,l)}finally{fe.p=m,X.T=f}}function Qp(t,i,a,l){if(hd){var f=Kp(l);if(f===null)Mp(t,i,l,fd,a),_v(t,l);else if(dE(f,t,i,a,l))l.stopPropagation();else if(_v(t,l),i&4&&-1<uE.indexOf(t)){for(;f!==null;){var m=fr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var _=tr(m.pendingLanes);if(_!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var U=1<<31-an(_);T.entanglements[1]|=U,_&=~U}Nr(m),(rt&6)===0&&(Wu=ie()+500,Vl(0))}}break;case 13:T=qa(m,2),T!==null&&On(T,m,2),Zu(),$p(m,2)}if(m=Kp(l),m===null&&Mp(t,i,l,fd,a),m===f)break;f=m}f!==null&&l.stopPropagation()}else Mp(t,i,l,null,a)}}function Kp(t){return t=Bn(t),Wp(t)}var fd=null;function Wp(t){if(fd=null,t=zr(t),t!==null){var i=c(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=h(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return fd=t,null}function bv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ne()){case je:return 2;case Ue:return 8;case ut:case vn:return 32;case Vn:return 268435456;default:return 32}default:return 32}}var Xp=!1,Wi=null,Xi=null,Zi=null,Yl=new Map,$l=new Map,Ji=[],uE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _v(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Yl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(i.pointerId)}}function Ql(t,i,a,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=fr(i),i!==null&&xv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function dE(t,i,a,l,f){switch(i){case"focusin":return Wi=Ql(Wi,t,i,a,l,f),!0;case"dragenter":return Xi=Ql(Xi,t,i,a,l,f),!0;case"mouseover":return Zi=Ql(Zi,t,i,a,l,f),!0;case"pointerover":var m=f.pointerId;return Yl.set(m,Ql(Yl.get(m)||null,t,i,a,l,f)),!0;case"gotpointercapture":return m=f.pointerId,$l.set(m,Ql($l.get(m)||null,t,i,a,l,f)),!0}return!1}function wv(t){var i=zr(t.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){t.blockedOn=i,Zc(t.priority,function(){if(a.tag===13){var l=kn();l=Ni(l);var f=qa(a,l);f!==null&&On(f,a,l),$p(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pd(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Kp(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);qr=l,a.target.dispatchEvent(l),qr=null}else return i=fr(a),i!==null&&xv(i),t.blockedOn=a,!1;i.shift()}return!0}function Ev(t,i,a){pd(t)&&a.delete(i)}function hE(){Xp=!1,Wi!==null&&pd(Wi)&&(Wi=null),Xi!==null&&pd(Xi)&&(Xi=null),Zi!==null&&pd(Zi)&&(Zi=null),Yl.forEach(Ev),$l.forEach(Ev)}function md(t,i){t.blockedOn===i&&(t.blockedOn=null,Xp||(Xp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hE)))}var gd=null;function Tv(t){gd!==t&&(gd=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gd===t&&(gd=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Wp(l||a)===null)continue;break}var m=fr(a);m!==null&&(t.splice(i,3),i-=3,Wf(m,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function Kl(t){function i(U){return md(U,t)}Wi!==null&&md(Wi,t),Xi!==null&&md(Xi,t),Zi!==null&&md(Zi,t),Yl.forEach(i),$l.forEach(i);for(var a=0;a<Ji.length;a++){var l=Ji[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ji.length&&(a=Ji[0],a.blockedOn===null);)wv(a),a.blockedOn===null&&Ji.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],m=a[l+1],_=f[Ct]||null;if(typeof m=="function")_||Tv(a);else if(_){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,_=m[Ct]||null)T=_.formAction;else if(Wp(f)!==null)continue}else T=_.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),Tv(a)}}}function Zp(t){this._internalRoot=t}yd.prototype.render=Zp.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=kn();yv(a,l,t,i,null,null)},yd.prototype.unmount=Zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;yv(t.current,2,null,t,null,null),Zu(),i[Un]=null}};function yd(t){this._internalRoot=t}yd.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ri();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ji.length&&i!==0&&i<Ji[a].priority;a++);Ji.splice(a,0,t),a===0&&wv(t)}};var Sv=e.version;if(Sv!=="19.1.1")throw Error(s(527,Sv,"19.1.1"));fe.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var fE={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vd.isDisabled&&vd.supportsFiber)try{bt=vd.inject(fE),nt=vd}catch{}}return Xl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",f=B1,m=F1,_=H1,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=mv(t,1,!1,null,null,a,l,f,m,_,T,null),t[Un]=i.current,Op(t),new Zp(i)},Xl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,f="",m=B1,_=F1,T=H1,U=null,K=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(U=a.unstable_transitionCallbacks),a.formState!==void 0&&(K=a.formState)),i=mv(t,1,!0,i,a??null,l,f,m,_,T,U,K),i.context=gv(null),a=i.current,l=kn(),l=Ni(l),f=Pi(l),f.callback=null,Li(a,f,l),a=l,i.current.lanes=a,Ur(i,a),Nr(i),t[Un]=i.current,Op(t),new yd(i)},Xl.version="19.1.1",Xl}var Mv;function EE(){if(Mv)return tm.exports;Mv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),tm.exports=wE(),tm.exports}var TE=EE();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Pv="popstate";function SE(r={}){function e(o,c){let{pathname:h="/",search:p="",hash:g=""}=xa(o.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Sm("",{pathname:h,search:p,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let h=o.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let g=o.location.href,y=g.indexOf("#");p=y===-1?g:g.slice(0,y)}return p+"#"+(typeof c=="string"?c:mc(c))}function s(o,c){ur(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return NE(e,n,s,r)}function vt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ur(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AE(){return Math.random().toString(36).substring(2,10)}function Lv(r,e){return{usr:r.state,key:r.key,idx:e}}function Sm(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?xa(e):e,state:n,key:e&&e.key||s||AE()}}function mc({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function xa(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function NE(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:c=!1}=s,h=o.history,p="POP",g=null,y=x();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function x(){return(h.state||{idx:null}).idx}function w(){p="POP";let M=x(),L=M==null?null:M-y;y=M,g&&g({action:p,location:V.location,delta:L})}function E(M,L){p="PUSH";let z=Sm(V.location,M,L);n&&n(z,M),y=x()+1;let F=Lv(z,y),W=V.createHref(z);try{h.pushState(F,"",W)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;o.location.assign(W)}c&&g&&g({action:p,location:V.location,delta:1})}function R(M,L){p="REPLACE";let z=Sm(V.location,M,L);n&&n(z,M),y=x();let F=Lv(z,y),W=V.createHref(z);h.replaceState(F,"",W),c&&g&&g({action:p,location:V.location,delta:0})}function N(M){return RE(M)}let V={get action(){return p},get location(){return r(o,h)},listen(M){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Pv,w),g=M,()=>{o.removeEventListener(Pv,w),g=null}},createHref(M){return e(o,M)},createURL:N,encodeLocation(M){let L=N(M);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:E,replace:R,go(M){return h.go(M)}};return V}function RE(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),vt(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:mc(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function zx(r,e,n="/"){return CE(r,e,n,!1)}function CE(r,e,n,s){let o=typeof e=="string"?xa(e):e,c=mi(o.pathname||"/",n);if(c==null)return null;let h=Bx(r);IE(h);let p=null;for(let g=0;p==null&&g<h.length;++g){let y=BE(c);p=UE(h[g],y,s)}return p}function Bx(r,e=[],n=[],s="",o=!1){let c=(h,p,g=o,y)=>{let x={relativePath:y===void 0?h.path||"":y,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&g)return;vt(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let w=di([s,x.relativePath]),E=n.concat(x);h.children&&h.children.length>0&&(vt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Bx(h.children,e,E,w,g)),!(h.path==null&&!h.index)&&e.push({path:w,score:LE(w,h.index),routesMeta:E})};return r.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))c(h,p);else for(let g of Fx(h.path))c(h,p,!0,g)}),e}function Fx(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(s.length===0)return o?[c,""]:[c];let h=Fx(s.join("/")),p=[];return p.push(...h.map(g=>g===""?c:[c,g].join("/"))),o&&p.push(...h),p.map(g=>r.startsWith("/")&&g===""?"/":g)}function IE(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:VE(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var jE=/^:[\w-]+$/,DE=3,kE=2,OE=1,ME=10,PE=-2,Vv=r=>r==="*";function LE(r,e){let n=r.split("/"),s=n.length;return n.some(Vv)&&(s+=PE),e&&(s+=kE),n.filter(o=>!Vv(o)).reduce((o,c)=>o+(jE.test(c)?DE:c===""?OE:ME),s)}function VE(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function UE(r,e,n=!1){let{routesMeta:s}=r,o={},c="/",h=[];for(let p=0;p<s.length;++p){let g=s[p],y=p===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",w=th({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},x),E=g.route;if(!w&&y&&n&&!s[s.length-1].route.index&&(w=th({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},x)),!w)return null;Object.assign(o,w.params),h.push({params:o,pathname:di([c,w.pathname]),pathnameBase:GE(di([c,w.pathnameBase])),route:E}),w.pathnameBase!=="/"&&(c=di([c,w.pathnameBase]))}return h}function th(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=zE(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let c=o[0],h=c.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((y,{paramName:x,isOptional:w},E)=>{if(x==="*"){let N=p[E]||"";h=c.slice(0,c.length-N.length).replace(/(.)\/+$/,"$1")}const R=p[E];return w&&!R?y[x]=void 0:y[x]=(R||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:h,pattern:r}}function zE(r,e=!1,n=!0){ur(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function BE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ur(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function mi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function FE(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?xa(r):r;return{pathname:n?n.startsWith("/")?n:HE(n,e):e,search:YE(s),hash:$E(o)}}function HE(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function sm(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qE(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hx(r){let e=qE(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function qx(r,e,n,s=!1){let o;typeof r=="string"?o=xa(r):(o={...r},vt(!o.pathname||!o.pathname.includes("?"),sm("?","pathname","search",o)),vt(!o.pathname||!o.pathname.includes("#"),sm("#","pathname","hash",o)),vt(!o.search||!o.search.includes("#"),sm("#","search","hash",o)));let c=r===""||o.pathname==="",h=c?"/":o.pathname,p;if(h==null)p=n;else{let w=e.length-1;if(!s&&h.startsWith("..")){let E=h.split("/");for(;E[0]==="..";)E.shift(),w-=1;o.pathname=E.join("/")}p=w>=0?e[w]:"/"}let g=FE(o,p),y=h&&h!=="/"&&h.endsWith("/"),x=(c||h===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(y||x)&&(g.pathname+="/"),g}var di=r=>r.join("/").replace(/\/\/+/g,"/"),GE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),YE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,$E=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function QE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Gx=["POST","PUT","PATCH","DELETE"];new Set(Gx);var KE=["GET",...Gx];new Set(KE);var Oo=P.createContext(null);Oo.displayName="DataRouter";var Ah=P.createContext(null);Ah.displayName="DataRouterState";P.createContext(!1);var Yx=P.createContext({isTransitioning:!1});Yx.displayName="ViewTransition";var WE=P.createContext(new Map);WE.displayName="Fetchers";var XE=P.createContext(null);XE.displayName="Await";var Pr=P.createContext(null);Pr.displayName="Navigation";var jc=P.createContext(null);jc.displayName="Location";var wi=P.createContext({outlet:null,matches:[],isDataRoute:!1});wi.displayName="Route";var tg=P.createContext(null);tg.displayName="RouteError";function ZE(r,{relative:e}={}){vt(Dc(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=P.useContext(Pr),{hash:o,pathname:c,search:h}=kc(r,{relative:e}),p=c;return n!=="/"&&(p=c==="/"?n:di([n,c])),s.createHref({pathname:p,search:h,hash:o})}function Dc(){return P.useContext(jc)!=null}function ba(){return vt(Dc(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(jc).location}var $x="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qx(r){P.useContext(Pr).static||P.useLayoutEffect(r)}function vs(){let{isDataRoute:r}=P.useContext(wi);return r?dT():JE()}function JE(){vt(Dc(),"useNavigate() may be used only in the context of a <Router> component.");let r=P.useContext(Oo),{basename:e,navigator:n}=P.useContext(Pr),{matches:s}=P.useContext(wi),{pathname:o}=ba(),c=JSON.stringify(Hx(s)),h=P.useRef(!1);return Qx(()=>{h.current=!0}),P.useCallback((g,y={})=>{if(ur(h.current,$x),!h.current)return;if(typeof g=="number"){n.go(g);return}let x=qx(g,JSON.parse(c),o,y.relative==="path");r==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:di([e,x.pathname])),(y.replace?n.replace:n.push)(x,y.state,y)},[e,n,c,o,r])}P.createContext(null);function kc(r,{relative:e}={}){let{matches:n}=P.useContext(wi),{pathname:s}=ba(),o=JSON.stringify(Hx(n));return P.useMemo(()=>qx(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function eT(r,e){return Kx(r,e)}function Kx(r,e,n,s){vt(Dc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=P.useContext(Pr),{matches:c}=P.useContext(wi),h=c[c.length-1],p=h?h.params:{},g=h?h.pathname:"/",y=h?h.pathnameBase:"/",x=h&&h.route;{let L=x&&x.path||"";Wx(g,!x||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let w=ba(),E;if(e){let L=typeof e=="string"?xa(e):e;vt(y==="/"||L.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${L.pathname}" was given in the \`location\` prop.`),E=L}else E=w;let R=E.pathname||"/",N=R;if(y!=="/"){let L=y.replace(/^\//,"").split("/");N="/"+R.replace(/^\//,"").split("/").slice(L.length).join("/")}let V=zx(r,{pathname:N});ur(x||V!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),ur(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=sT(V&&V.map(L=>Object.assign({},L,{params:Object.assign({},p,L.params),pathname:di([y,o.encodeLocation?o.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?y:di([y,o.encodeLocation?o.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),c,n,s);return e&&M?P.createElement(jc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},M):M}function tT(){let r=uT(),e=QE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:c},"ErrorBoundary")," or"," ",P.createElement("code",{style:c},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:o},n):null,h)}var nT=P.createElement(tT,null),rT=class extends P.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?P.createElement(wi.Provider,{value:this.props.routeContext},P.createElement(tg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function iT({routeContext:r,match:e,children:n}){let s=P.useContext(Oo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),P.createElement(wi.Provider,{value:r},n)}function sT(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,c=n?.errors;if(c!=null){let g=o.findIndex(y=>y.route.id&&c?.[y.route.id]!==void 0);vt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let h=!1,p=-1;if(n)for(let g=0;g<o.length;g++){let y=o[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=g),y.route.id){let{loaderData:x,errors:w}=n,E=y.route.loader&&!x.hasOwnProperty(y.route.id)&&(!w||w[y.route.id]===void 0);if(y.route.lazy||E){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((g,y,x)=>{let w,E=!1,R=null,N=null;n&&(w=c&&y.route.id?c[y.route.id]:void 0,R=y.route.errorElement||nT,h&&(p<0&&x===0?(Wx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,N=null):p===x&&(E=!0,N=y.route.hydrateFallbackElement||null)));let V=e.concat(o.slice(0,x+1)),M=()=>{let L;return w?L=R:E?L=N:y.route.Component?L=P.createElement(y.route.Component,null):y.route.element?L=y.route.element:L=g,P.createElement(iT,{match:y,routeContext:{outlet:g,matches:V,isDataRoute:n!=null},children:L})};return n&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?P.createElement(rT,{location:n.location,revalidation:n.revalidation,component:R,error:w,children:M(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):M()},null)}function ng(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function aT(r){let e=P.useContext(Oo);return vt(e,ng(r)),e}function oT(r){let e=P.useContext(Ah);return vt(e,ng(r)),e}function lT(r){let e=P.useContext(wi);return vt(e,ng(r)),e}function rg(r){let e=lT(r),n=e.matches[e.matches.length-1];return vt(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function cT(){return rg("useRouteId")}function uT(){let r=P.useContext(tg),e=oT("useRouteError"),n=rg("useRouteError");return r!==void 0?r:e.errors?.[n]}function dT(){let{router:r}=aT("useNavigate"),e=rg("useNavigate"),n=P.useRef(!1);return Qx(()=>{n.current=!0}),P.useCallback(async(o,c={})=>{ur(n.current,$x),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...c}))},[r,e])}var Uv={};function Wx(r,e,n){!e&&!Uv[r]&&(Uv[r]=!0,ur(!1,n))}P.memo(hT);function hT({routes:r,future:e,state:n}){return Kx(r,void 0,n,e)}function Xn(r){vt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fT({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:c=!1}){vt(!Dc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=P.useMemo(()=>({basename:h,navigator:o,static:c,future:{}}),[h,o,c]);typeof n=="string"&&(n=xa(n));let{pathname:g="/",search:y="",hash:x="",state:w=null,key:E="default"}=n,R=P.useMemo(()=>{let N=mi(g,h);return N==null?null:{location:{pathname:N,search:y,hash:x,state:w,key:E},navigationType:s}},[h,g,y,x,w,E,s]);return ur(R!=null,`<Router basename="${h}"> is not able to match the URL "${g}${y}${x}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:P.createElement(Pr.Provider,{value:p},P.createElement(jc.Provider,{children:e,value:R}))}function pT({children:r,location:e}){return eT(Am(r),e)}function Am(r,e=[]){let n=[];return P.Children.forEach(r,(s,o)=>{if(!P.isValidElement(s))return;let c=[...e,o];if(s.type===P.Fragment){n.push.apply(n,Am(s.props.children,c));return}vt(s.type===Xn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),vt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Am(s.props.children,c)),n.push(h)}),n}var Fd="get",Hd="application/x-www-form-urlencoded";function Nh(r){return r!=null&&typeof r.tagName=="string"}function mT(r){return Nh(r)&&r.tagName.toLowerCase()==="button"}function gT(r){return Nh(r)&&r.tagName.toLowerCase()==="form"}function yT(r){return Nh(r)&&r.tagName.toLowerCase()==="input"}function vT(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function xT(r,e){return r.button===0&&(!e||e==="_self")&&!vT(r)}var bd=null;function bT(){if(bd===null)try{new FormData(document.createElement("form"),0),bd=!1}catch{bd=!0}return bd}var _T=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function am(r){return r!=null&&!_T.has(r)?(ur(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hd}"`),null):r}function wT(r,e){let n,s,o,c,h;if(gT(r)){let p=r.getAttribute("action");s=p?mi(p,e):null,n=r.getAttribute("method")||Fd,o=am(r.getAttribute("enctype"))||Hd,c=new FormData(r)}else if(mT(r)||yT(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||p.getAttribute("action");if(s=g?mi(g,e):null,n=r.getAttribute("formmethod")||p.getAttribute("method")||Fd,o=am(r.getAttribute("formenctype"))||am(p.getAttribute("enctype"))||Hd,c=new FormData(p,r),!bT()){let{name:y,type:x,value:w}=r;if(x==="image"){let E=y?`${y}.`:"";c.append(`${E}x`,"0"),c.append(`${E}y`,"0")}else y&&c.append(y,w)}}else{if(Nh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Fd,s=null,o=Hd,h=r}return c&&o==="text/plain"&&(h=c,c=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:c,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ig(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ET(r,e,n){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&mi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function TT(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ST(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function AT(r,e,n){let s=await Promise.all(r.map(async o=>{let c=e.routes[o.route.id];if(c){let h=await TT(c,n);return h.links?h.links():[]}return[]}));return IT(s.flat(1).filter(ST).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function zv(r,e,n,s,o,c){let h=(g,y)=>n[y]?g.route.id!==n[y].route.id:!0,p=(g,y)=>n[y].pathname!==g.pathname||n[y].route.path?.endsWith("*")&&n[y].params["*"]!==g.params["*"];return c==="assets"?e.filter((g,y)=>h(g,y)||p(g,y)):c==="data"?e.filter((g,y)=>{let x=s.routes[g.route.id];if(!x||!x.hasLoader)return!1;if(h(g,y)||p(g,y))return!0;if(g.route.shouldRevalidate){let w=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function NT(r,e,{includeHydrateFallback:n}={}){return RT(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function RT(r){return[...new Set(r)]}function CT(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function IT(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let c=JSON.stringify(CT(o));return n.has(c)||(n.add(c),s.push({key:c,link:o})),s},[])}function Xx(){let r=P.useContext(Oo);return ig(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function jT(){let r=P.useContext(Ah);return ig(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var sg=P.createContext(void 0);sg.displayName="FrameworkContext";function Zx(){let r=P.useContext(sg);return ig(r,"You must render this element inside a <HydratedRouter> element"),r}function DT(r,e){let n=P.useContext(sg),[s,o]=P.useState(!1),[c,h]=P.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:y,onMouseLeave:x,onTouchStart:w}=e,E=P.useRef(null);P.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let V=L=>{L.forEach(z=>{h(z.isIntersecting)})},M=new IntersectionObserver(V,{threshold:.5});return E.current&&M.observe(E.current),()=>{M.disconnect()}}},[r]),P.useEffect(()=>{if(s){let V=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(V)}}},[s]);let R=()=>{o(!0)},N=()=>{o(!1),h(!1)};return n?r!=="intent"?[c,E,{}]:[c,E,{onFocus:Zl(p,R),onBlur:Zl(g,N),onMouseEnter:Zl(y,R),onMouseLeave:Zl(x,N),onTouchStart:Zl(w,R)}]:[!1,E,{}]}function Zl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function kT({page:r,...e}){let{router:n}=Xx(),s=P.useMemo(()=>zx(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?P.createElement(MT,{page:r,matches:s,...e}):null}function OT(r){let{manifest:e,routeModules:n}=Zx(),[s,o]=P.useState([]);return P.useEffect(()=>{let c=!1;return AT(r,e,n).then(h=>{c||o(h)}),()=>{c=!0}},[r,e,n]),s}function MT({page:r,matches:e,...n}){let s=ba(),{manifest:o,routeModules:c}=Zx(),{basename:h}=Xx(),{loaderData:p,matches:g}=jT(),y=P.useMemo(()=>zv(r,e,g,o,s,"data"),[r,e,g,o,s]),x=P.useMemo(()=>zv(r,e,g,o,s,"assets"),[r,e,g,o,s]),w=P.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let N=new Set,V=!1;if(e.forEach(L=>{let z=o.routes[L.route.id];!z||!z.hasLoader||(!y.some(F=>F.route.id===L.route.id)&&L.route.id in p&&c[L.route.id]?.shouldRevalidate||z.hasClientLoader?V=!0:N.add(L.route.id))}),N.size===0)return[];let M=ET(r,h,"data");return V&&N.size>0&&M.searchParams.set("_routes",e.filter(L=>N.has(L.route.id)).map(L=>L.route.id).join(",")),[M.pathname+M.search]},[h,p,s,o,y,e,r,c]),E=P.useMemo(()=>NT(x,o),[x,o]),R=OT(x);return P.createElement(P.Fragment,null,w.map(N=>P.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...n})),E.map(N=>P.createElement("link",{key:N,rel:"modulepreload",href:N,...n})),R.map(({key:N,link:V})=>P.createElement("link",{key:N,nonce:n.nonce,...V})))}function PT(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Jx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jx&&(window.__reactRouterVersion="7.8.1")}catch{}function LT({basename:r,children:e,window:n}){let s=P.useRef();s.current==null&&(s.current=SE({window:n,v5Compat:!0}));let o=s.current,[c,h]=P.useState({action:o.action,location:o.location}),p=P.useCallback(g=>{P.startTransition(()=>h(g))},[h]);return P.useLayoutEffect(()=>o.listen(p),[o,p]),P.createElement(fT,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:o})}var eb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_a=P.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:c,replace:h,state:p,target:g,to:y,preventScrollReset:x,viewTransition:w,...E},R){let{basename:N}=P.useContext(Pr),V=typeof y=="string"&&eb.test(y),M,L=!1;if(typeof y=="string"&&V&&(M=y,Jx))try{let j=new URL(window.location.href),k=y.startsWith("//")?new URL(j.protocol+y):new URL(y),D=mi(k.pathname,N);k.origin===j.origin&&D!=null?y=D+k.search+k.hash:L=!0}catch{ur(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=ZE(y,{relative:o}),[F,W,ee]=DT(s,E),te=BT(y,{replace:h,state:p,target:g,preventScrollReset:x,relative:o,viewTransition:w});function O(j){e&&e(j),j.defaultPrevented||te(j)}let C=P.createElement("a",{...E,...ee,href:M||z,onClick:L||c?e:O,ref:PT(R,W),target:g,"data-discover":!V&&n==="render"?"true":void 0});return F&&!V?P.createElement(P.Fragment,null,C,P.createElement(kT,{page:z})):C});_a.displayName="Link";var VT=P.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:c,to:h,viewTransition:p,children:g,...y},x){let w=kc(h,{relative:y.relative}),E=ba(),R=P.useContext(Ah),{navigator:N,basename:V}=P.useContext(Pr),M=R!=null&&YT(w)&&p===!0,L=N.encodeLocation?N.encodeLocation(w).pathname:w.pathname,z=E.pathname,F=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;n||(z=z.toLowerCase(),F=F?F.toLowerCase():null,L=L.toLowerCase()),F&&V&&(F=mi(F,V)||F);const W=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let ee=z===L||!o&&z.startsWith(L)&&z.charAt(W)==="/",te=F!=null&&(F===L||!o&&F.startsWith(L)&&F.charAt(L.length)==="/"),O={isActive:ee,isPending:te,isTransitioning:M},C=ee?e:void 0,j;typeof s=="function"?j=s(O):j=[s,ee?"active":null,te?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let k=typeof c=="function"?c(O):c;return P.createElement(_a,{...y,"aria-current":C,className:j,ref:x,style:k,to:h,viewTransition:p},typeof g=="function"?g(O):g)});VT.displayName="NavLink";var UT=P.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:c,method:h=Fd,action:p,onSubmit:g,relative:y,preventScrollReset:x,viewTransition:w,...E},R)=>{let N=qT(),V=GT(p,{relative:y}),M=h.toLowerCase()==="get"?"get":"post",L=typeof p=="string"&&eb.test(p),z=F=>{if(g&&g(F),F.defaultPrevented)return;F.preventDefault();let W=F.nativeEvent.submitter,ee=W?.getAttribute("formmethod")||h;N(W||F.currentTarget,{fetcherKey:e,method:ee,navigate:n,replace:o,state:c,relative:y,preventScrollReset:x,viewTransition:w})};return P.createElement("form",{ref:R,method:M,action:V,onSubmit:s?g:z,...E,"data-discover":!L&&r==="render"?"true":void 0})});UT.displayName="Form";function zT(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tb(r){let e=P.useContext(Oo);return vt(e,zT(r)),e}function BT(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:c,viewTransition:h}={}){let p=vs(),g=ba(),y=kc(r,{relative:c});return P.useCallback(x=>{if(xT(x,e)){x.preventDefault();let w=n!==void 0?n:mc(g)===mc(y);p(r,{replace:w,state:s,preventScrollReset:o,relative:c,viewTransition:h})}},[g,p,y,n,s,e,r,o,c,h])}var FT=0,HT=()=>`__${String(++FT)}__`;function qT(){let{router:r}=tb("useSubmit"),{basename:e}=P.useContext(Pr),n=cT();return P.useCallback(async(s,o={})=>{let{action:c,method:h,encType:p,formData:g,body:y}=wT(s,e);if(o.navigate===!1){let x=o.fetcherKey||HT();await r.fetch(x,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function GT(r,{relative:e}={}){let{basename:n}=P.useContext(Pr),s=P.useContext(wi);vt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),c={...kc(r||".",{relative:e})},h=ba();if(r==null){c.search=h.search;let p=new URLSearchParams(c.search),g=p.getAll("index");if(g.some(x=>x==="")){p.delete("index"),g.filter(w=>w).forEach(w=>p.append("index",w));let x=p.toString();c.search=x?`?${x}`:""}}return(!r||r===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:di([n,c.pathname])),mc(c)}function YT(r,{relative:e}={}){let n=P.useContext(Yx);vt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=tb("useViewTransitionState"),o=kc(r,{relative:e});if(!n.isTransitioning)return!1;let c=mi(n.currentLocation.pathname,s)||n.currentLocation.pathname,h=mi(n.nextLocation.pathname,s)||n.nextLocation.pathname;return th(o.pathname,h)!=null||th(o.pathname,c)!=null}var gt={},_d={},wd={},Ed={},om,Bv;function $T(){if(Bv)return om;Bv=1;var r="Expected a function",e=NaN,n="[object Symbol]",s=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,h=/^0o[0-7]+$/i,p=parseInt,g=typeof xd=="object"&&xd&&xd.Object===Object&&xd,y=typeof self=="object"&&self&&self.Object===Object&&self,x=g||y||Function("return this")(),w=Object.prototype,E=w.toString,R=Math.max,N=Math.min,V=function(){return x.Date.now()};function M(te,O,C){var j,k,D,S,I,he,Ee=0,X=!1,fe=!1,ge=!0;if(typeof te!="function")throw new TypeError(r);O=ee(O)||0,z(C)&&(X=!!C.leading,fe="maxWait"in C,D=fe?R(ee(C.maxWait)||0,O):D,ge="trailing"in C?!!C.trailing:ge);function Pe(ye){var Ie=j,Ve=k;return j=k=void 0,Ee=ye,S=te.apply(Ve,Ie),S}function B(ye){return Ee=ye,I=setTimeout(q,O),X?Pe(ye):S}function ae(ye){var Ie=ye-he,Ve=ye-Ee,Qt=O-Ie;return fe?N(Qt,D-Ve):Qt}function pe(ye){var Ie=ye-he,Ve=ye-Ee;return he===void 0||Ie>=O||Ie<0||fe&&Ve>=D}function q(){var ye=V();if(pe(ye))return G(ye);I=setTimeout(q,ae(ye))}function G(ye){return I=void 0,ge&&j?Pe(ye):(j=k=void 0,S)}function de(){I!==void 0&&clearTimeout(I),Ee=0,j=he=k=I=void 0}function le(){return I===void 0?S:G(V())}function xe(){var ye=V(),Ie=pe(ye);if(j=arguments,k=this,he=ye,Ie){if(I===void 0)return B(he);if(fe)return I=setTimeout(q,O),Pe(he)}return I===void 0&&(I=setTimeout(q,O)),S}return xe.cancel=de,xe.flush=le,xe}function L(te,O,C){var j=!0,k=!0;if(typeof te!="function")throw new TypeError(r);return z(C)&&(j="leading"in C?!!C.leading:j,k="trailing"in C?!!C.trailing:k),M(te,O,{leading:j,maxWait:O,trailing:k})}function z(te){var O=typeof te;return!!te&&(O=="object"||O=="function")}function F(te){return!!te&&typeof te=="object"}function W(te){return typeof te=="symbol"||F(te)&&E.call(te)==n}function ee(te){if(typeof te=="number")return te;if(W(te))return e;if(z(te)){var O=typeof te.valueOf=="function"?te.valueOf():te;te=z(O)?O+"":O}if(typeof te!="string")return te===0?te:+te;te=te.replace(s,"");var C=c.test(te);return C||h.test(te)?p(te.slice(2),C?2:8):o.test(te)?e:+te}return om=L,om}var Jl={},Fv;function ag(){if(Fv)return Jl;Fv=1,Object.defineProperty(Jl,"__esModule",{value:!0}),Jl.addPassiveEventListener=function(n,s,o){var c=o.name;c||(c=s,console.warn("Listener must be a named function.")),r.has(s)||r.set(s,new Set);var h=r.get(s);if(!h.has(c)){var p=(function(){var g=!1;try{var y=Object.defineProperty({},"passive",{get:function(){g=!0}});window.addEventListener("test",null,y)}catch{}return g})();n.addEventListener(s,o,p?{passive:!0}:!1),h.add(c)}},Jl.removePassiveEventListener=function(n,s,o){n.removeEventListener(s,o),r.get(s).delete(o.name||s)};var r=new Map;return Jl}var Hv;function og(){if(Hv)return Ed;Hv=1,Object.defineProperty(Ed,"__esModule",{value:!0});var r=$T(),e=s(r),n=ag();function s(h){return h&&h.__esModule?h:{default:h}}var o=function(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,e.default)(p,g)},c={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(p,g){if(p){var y=o(function(x){c.scrollHandler(p)},g);return c.scrollSpyContainers.push(p),(0,n.addPassiveEventListener)(p,"scroll",y),function(){(0,n.removePassiveEventListener)(p,"scroll",y),c.scrollSpyContainers.splice(c.scrollSpyContainers.indexOf(p),1)}}return function(){}},isMounted:function(p){return c.scrollSpyContainers.indexOf(p)!==-1},currentPositionX:function(p){if(p===document){var g=window.scrollY!==void 0,y=(document.compatMode||"")==="CSS1Compat";return g?window.scrollX:y?document.documentElement.scrollLeft:document.body.scrollLeft}else return p.scrollLeft},currentPositionY:function(p){if(p===document){var g=window.scrollX!==void 0,y=(document.compatMode||"")==="CSS1Compat";return g?window.scrollY:y?document.documentElement.scrollTop:document.body.scrollTop}else return p.scrollTop},scrollHandler:function(p){var g=c.scrollSpyContainers[c.scrollSpyContainers.indexOf(p)].spyCallbacks||[];g.forEach(function(y){return y(c.currentPositionX(p),c.currentPositionY(p))})},addStateHandler:function(p){c.spySetState.push(p)},addSpyHandler:function(p,g){var y=c.scrollSpyContainers[c.scrollSpyContainers.indexOf(g)];y.spyCallbacks||(y.spyCallbacks=[]),y.spyCallbacks.push(p)},updateStates:function(){c.spySetState.forEach(function(p){return p()})},unmount:function(p,g){c.scrollSpyContainers.forEach(function(y){return y.spyCallbacks&&y.spyCallbacks.length&&y.spyCallbacks.indexOf(g)>-1&&y.spyCallbacks.splice(y.spyCallbacks.indexOf(g),1)}),c.spySetState&&c.spySetState.length&&c.spySetState.indexOf(p)>-1&&c.spySetState.splice(c.spySetState.indexOf(p),1),document.removeEventListener("scroll",c.scrollHandler)},update:function(){return c.scrollSpyContainers.forEach(function(p){return c.scrollHandler(p)})}};return Ed.default=c,Ed}var Td={},Sd={},qv;function Rh(){if(qv)return Sd;qv=1,Object.defineProperty(Sd,"__esModule",{value:!0});var r=function(p,g){var y=p.indexOf("#")===0?p.substring(1):p,x=y?"#"+y:"",w=window&&window.location,E=x?w.pathname+w.search+x:w.pathname+w.search;g?history.pushState(history.state,"",E):history.replaceState(history.state,"",E)},e=function(){return window.location.hash.replace(/^#/,"")},n=function(p){return function(g){return p.contains?p!=g&&p.contains(g):!!(p.compareDocumentPosition(g)&16)}},s=function(p){return getComputedStyle(p).position!=="static"},o=function(p,g){for(var y=p.offsetTop,x=p.offsetParent;x&&!g(x);)y+=x.offsetTop,x=x.offsetParent;return{offsetTop:y,offsetParent:x}},c=function(p,g,y){if(y)return p===document?g.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(p).position!=="static"?g.offsetLeft:g.offsetLeft-p.offsetLeft;if(p===document)return g.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(s(p)){if(g.offsetParent!==p){var x=function(M){return M===p||M===document},w=o(g,x),E=w.offsetTop,R=w.offsetParent;if(R!==p)throw new Error("Seems containerElement is not an ancestor of the Element");return E}return g.offsetTop}if(g.offsetParent===p.offsetParent)return g.offsetTop-p.offsetTop;var N=function(M){return M===document};return o(g,N).offsetTop-o(p,N).offsetTop};return Sd.default={updateHash:r,getHash:e,filterElementInContainer:n,scrollOffset:c},Sd}var Ad={},Nd={},Gv;function QT(){return Gv||(Gv=1,Object.defineProperty(Nd,"__esModule",{value:!0}),Nd.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),Nd}var Rd={},Yv;function KT(){if(Yv)return Rd;Yv=1,Object.defineProperty(Rd,"__esModule",{value:!0});var r=ag(),e=["mousedown","wheel","touchmove","keydown"];return Rd.default={subscribe:function(s){return typeof document<"u"&&e.forEach(function(o){return(0,r.addPassiveEventListener)(document,o,s)})}},Rd}var Cd={},$v;function lg(){if($v)return Cd;$v=1,Object.defineProperty(Cd,"__esModule",{value:!0});var r={registered:{},scrollEvent:{register:function(n,s){r.registered[n]=s},remove:function(n){r.registered[n]=null}}};return Cd.default=r,Cd}var Qv;function nb(){if(Qv)return Ad;Qv=1,Object.defineProperty(Ad,"__esModule",{value:!0});var r=Object.assign||function(k){for(var D=1;D<arguments.length;D++){var S=arguments[D];for(var I in S)Object.prototype.hasOwnProperty.call(S,I)&&(k[I]=S[I])}return k},e=Rh();g(e);var n=QT(),s=g(n),o=KT(),c=g(o),h=lg(),p=g(h);function g(k){return k&&k.__esModule?k:{default:k}}var y=function(D){return s.default[D.smooth]||s.default.defaultEasing},x=function(D){return typeof D=="function"?D:function(){return D}},w=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},E=(function(){return w()||function(k,D,S){window.setTimeout(k,S||1e3/60,new Date().getTime())}})(),R=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},N=function(D){var S=D.data.containerElement;if(S&&S!==document&&S!==document.body)return S.scrollLeft;var I=window.pageXOffset!==void 0,he=(document.compatMode||"")==="CSS1Compat";return I?window.pageXOffset:he?document.documentElement.scrollLeft:document.body.scrollLeft},V=function(D){var S=D.data.containerElement;if(S&&S!==document&&S!==document.body)return S.scrollTop;var I=window.pageXOffset!==void 0,he=(document.compatMode||"")==="CSS1Compat";return I?window.pageYOffset:he?document.documentElement.scrollTop:document.body.scrollTop},M=function(D){var S=D.data.containerElement;if(S&&S!==document&&S!==document.body)return S.scrollWidth-S.offsetWidth;var I=document.body,he=document.documentElement;return Math.max(I.scrollWidth,I.offsetWidth,he.clientWidth,he.scrollWidth,he.offsetWidth)},L=function(D){var S=D.data.containerElement;if(S&&S!==document&&S!==document.body)return S.scrollHeight-S.offsetHeight;var I=document.body,he=document.documentElement;return Math.max(I.scrollHeight,I.offsetHeight,he.clientHeight,he.scrollHeight,he.offsetHeight)},z=function k(D,S,I){var he=S.data;if(!S.ignoreCancelEvents&&he.cancel){p.default.registered.end&&p.default.registered.end(he.to,he.target,he.currentPositionY);return}if(he.delta=Math.round(he.targetPosition-he.startPosition),he.start===null&&(he.start=I),he.progress=I-he.start,he.percent=he.progress>=he.duration?1:D(he.progress/he.duration),he.currentPosition=he.startPosition+Math.ceil(he.delta*he.percent),he.containerElement&&he.containerElement!==document&&he.containerElement!==document.body?S.horizontal?he.containerElement.scrollLeft=he.currentPosition:he.containerElement.scrollTop=he.currentPosition:S.horizontal?window.scrollTo(he.currentPosition,0):window.scrollTo(0,he.currentPosition),he.percent<1){var Ee=k.bind(null,D,S);E.call(window,Ee);return}p.default.registered.end&&p.default.registered.end(he.to,he.target,he.currentPosition)},F=function(D){D.data.containerElement=D?D.containerId?document.getElementById(D.containerId):D.container&&D.container.nodeType?D.container:document:null},W=function(D,S,I,he){S.data=S.data||R(),window.clearTimeout(S.data.delayTimeout);var Ee=function(){S.data.cancel=!0};if(c.default.subscribe(Ee),F(S),S.data.start=null,S.data.cancel=!1,S.data.startPosition=S.horizontal?N(S):V(S),S.data.targetPosition=S.absolute?D:D+S.data.startPosition,S.data.startPosition===S.data.targetPosition){p.default.registered.end&&p.default.registered.end(S.data.to,S.data.target,S.data.currentPosition);return}S.data.delta=Math.round(S.data.targetPosition-S.data.startPosition),S.data.duration=x(S.duration)(S.data.delta),S.data.duration=isNaN(parseFloat(S.data.duration))?1e3:parseFloat(S.data.duration),S.data.to=I,S.data.target=he;var X=y(S),fe=z.bind(null,X,S);if(S&&S.delay>0){S.data.delayTimeout=window.setTimeout(function(){p.default.registered.begin&&p.default.registered.begin(S.data.to,S.data.target),E.call(window,fe)},S.delay);return}p.default.registered.begin&&p.default.registered.begin(S.data.to,S.data.target),E.call(window,fe)},ee=function(D){return D=r({},D),D.data=D.data||R(),D.absolute=!0,D},te=function(D){W(0,ee(D))},O=function(D,S){W(D,ee(S))},C=function(D){D=ee(D),F(D),W(D.horizontal?M(D):L(D),D)},j=function(D,S){S=ee(S),F(S);var I=S.horizontal?N(S):V(S);W(D+I,S)};return Ad.default={animateTopScroll:W,getAnimationType:y,scrollToTop:te,scrollToBottom:C,scrollTo:O,scrollMore:j},Ad}var Kv;function Ch(){if(Kv)return Td;Kv=1,Object.defineProperty(Td,"__esModule",{value:!0});var r=Object.assign||function(x){for(var w=1;w<arguments.length;w++){var E=arguments[w];for(var R in E)Object.prototype.hasOwnProperty.call(E,R)&&(x[R]=E[R])}return x},e=Rh(),n=p(e),s=nb(),o=p(s),c=lg(),h=p(c);function p(x){return x&&x.__esModule?x:{default:x}}var g={},y=void 0;return Td.default={unmount:function(){g={}},register:function(w,E){g[w]=E},unregister:function(w){delete g[w]},get:function(w){return g[w]||document.getElementById(w)||document.getElementsByName(w)[0]||document.getElementsByClassName(w)[0]},setActiveLink:function(w){return y=w},getActiveLink:function(){return y},scrollTo:function(w,E){var R=this.get(w);if(!R){console.warn("target Element not found");return}E=r({},E,{absolute:!1});var N=E.containerId,V=E.container,M=void 0;N?M=document.getElementById(N):V&&V.nodeType?M=V:M=document,E.absolute=!0;var L=E.horizontal,z=n.default.scrollOffset(M,R,L)+(E.offset||0);if(!E.smooth){h.default.registered.begin&&h.default.registered.begin(w,R),M===document?E.horizontal?window.scrollTo(z,0):window.scrollTo(0,z):M.scrollTop=z,h.default.registered.end&&h.default.registered.end(w,R);return}o.default.animateTopScroll(z,E,w,R)}},Td}var lm={exports:{}},cm,Wv;function WT(){if(Wv)return cm;Wv=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return cm=r,cm}var um,Xv;function XT(){if(Xv)return um;Xv=1;var r=WT();function e(){}function n(){}return n.resetWarningCache=e,um=function(){function s(h,p,g,y,x,w){if(w!==r){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}s.isRequired=s;function o(){return s}var c={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:e};return c.PropTypes=c,c},um}var Zv;function Ih(){return Zv||(Zv=1,lm.exports=XT()()),lm.exports}var Id={},Jv;function rb(){if(Jv)return Id;Jv=1,Object.defineProperty(Id,"__esModule",{value:!0}),ag();var r=Rh(),e=n(r);function n(o){return o&&o.__esModule?o:{default:o}}var s={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(c){this.scroller=c,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(c,h){this.containers[c]=h},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var c=this,h=this.getHash();h?window.setTimeout(function(){c.scrollTo(h,!0),c.initialized=!0},10):this.initialized=!0},scrollTo:function(c,h){var p=this.scroller,g=p.get(c);if(g&&(h||c!==p.getActiveLink())){var y=this.containers[c]||document;p.scrollTo(c,{container:y})}},getHash:function(){return e.default.getHash()},changeHash:function(c,h){this.isInitialized()&&e.default.getHash()!==c&&e.default.updateHash(c,h)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Id.default=s,Id}var e2;function cg(){if(e2)return wd;e2=1,Object.defineProperty(wd,"__esModule",{value:!0});var r=Object.assign||function(L){for(var z=1;z<arguments.length;z++){var F=arguments[z];for(var W in F)Object.prototype.hasOwnProperty.call(F,W)&&(L[W]=F[W])}return L},e=(function(){function L(z,F){for(var W=0;W<F.length;W++){var ee=F[W];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(z,ee.key,ee)}}return function(z,F,W){return F&&L(z.prototype,F),W&&L(z,W),z}})(),n=_i(),s=E(n),o=og(),c=E(o),h=Ch(),p=E(h),g=Ih(),y=E(g),x=rb(),w=E(x);function E(L){return L&&L.__esModule?L:{default:L}}function R(L,z){if(!(L instanceof z))throw new TypeError("Cannot call a class as a function")}function N(L,z){if(!L)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z&&(typeof z=="object"||typeof z=="function")?z:L}function V(L,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof z);L.prototype=Object.create(z&&z.prototype,{constructor:{value:L,enumerable:!1,writable:!0,configurable:!0}}),z&&(Object.setPrototypeOf?Object.setPrototypeOf(L,z):L.__proto__=z)}var M={to:y.default.string.isRequired,containerId:y.default.string,container:y.default.object,activeClass:y.default.string,activeStyle:y.default.object,spy:y.default.bool,horizontal:y.default.bool,smooth:y.default.oneOfType([y.default.bool,y.default.string]),offset:y.default.number,delay:y.default.number,isDynamic:y.default.bool,onClick:y.default.func,duration:y.default.oneOfType([y.default.number,y.default.func]),absolute:y.default.bool,onSetActive:y.default.func,onSetInactive:y.default.func,ignoreCancelEvents:y.default.bool,hashSpy:y.default.bool,saveHashHistory:y.default.bool,spyThrottle:y.default.number};return wd.default=function(L,z){var F=z||p.default,W=(function(te){V(O,te);function O(C){R(this,O);var j=N(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,C));return ee.call(j),j.state={active:!1},j.beforeUnmountCallbacks=[],j}return e(O,[{key:"getScrollSpyContainer",value:function(){var j=this.props.containerId,k=this.props.container;return j&&!k?document.getElementById(j):k&&k.nodeType?k:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var j=this.getScrollSpyContainer();if(!c.default.isMounted(j)){var k=c.default.mount(j,this.props.spyThrottle);this.beforeUnmountCallbacks.push(k)}this.props.hashSpy&&(w.default.isMounted()||w.default.mount(F),w.default.mapContainer(this.props.to,j)),c.default.addSpyHandler(this.spyHandler,j),this.setState({container:j})}}},{key:"componentWillUnmount",value:function(){c.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(j){return j()})}},{key:"render",value:function(){var j="";this.state&&this.state.active?j=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():j=this.props.className;var k={};this.state&&this.state.active?k=r({},this.props.style,this.props.activeStyle):k=r({},this.props.style);var D=r({},this.props);for(var S in M)D.hasOwnProperty(S)&&delete D[S];return D.className=j,D.style=k,D.onClick=this.handleClick,s.default.createElement(L,D)}}]),O})(s.default.PureComponent),ee=function(){var O=this;this.scrollTo=function(C,j){F.scrollTo(C,r({},O.state,j))},this.handleClick=function(C){O.props.onClick&&O.props.onClick(C),C.stopPropagation&&C.stopPropagation(),C.preventDefault&&C.preventDefault(),O.scrollTo(O.props.to,O.props)},this.spyHandler=function(C,j){var k=O.getScrollSpyContainer();if(!(w.default.isMounted()&&!w.default.isInitialized())){var D=O.props.horizontal,S=O.props.to,I=null,he=void 0,Ee=void 0;if(D){var X=0,fe=0,ge=0;if(k.getBoundingClientRect){var Pe=k.getBoundingClientRect();ge=Pe.left}if(!I||O.props.isDynamic){if(I=F.get(S),!I)return;var B=I.getBoundingClientRect();X=B.left-ge+C,fe=X+B.width}var ae=C-O.props.offset;he=ae>=Math.floor(X)&&ae<Math.floor(fe),Ee=ae<Math.floor(X)||ae>=Math.floor(fe)}else{var pe=0,q=0,G=0;if(k.getBoundingClientRect){var de=k.getBoundingClientRect();G=de.top}if(!I||O.props.isDynamic){if(I=F.get(S),!I)return;var le=I.getBoundingClientRect();pe=le.top-G+j,q=pe+le.height}var xe=j-O.props.offset;he=xe>=Math.floor(pe)&&xe<Math.floor(q),Ee=xe<Math.floor(pe)||xe>=Math.floor(q)}var ye=F.getActiveLink();if(Ee){if(S===ye&&F.setActiveLink(void 0),O.props.hashSpy&&w.default.getHash()===S){var Ie=O.props.saveHashHistory,Ve=Ie===void 0?!1:Ie;w.default.changeHash("",Ve)}O.props.spy&&O.state.active&&(O.setState({active:!1}),O.props.onSetInactive&&O.props.onSetInactive(S,I))}if(he&&(ye!==S||O.state.active===!1)){F.setActiveLink(S);var Qt=O.props.saveHashHistory,Kt=Qt===void 0?!1:Qt;O.props.hashSpy&&w.default.changeHash(S,Kt),O.props.spy&&(O.setState({active:!0}),O.props.onSetActive&&O.props.onSetActive(S,I))}}}};return W.propTypes=M,W.defaultProps={offset:0},W},wd}var t2;function ZT(){if(t2)return _d;t2=1,Object.defineProperty(_d,"__esModule",{value:!0});var r=_i(),e=o(r),n=cg(),s=o(n);function o(y){return y&&y.__esModule?y:{default:y}}function c(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")}function h(y,x){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:y}function p(y,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);y.prototype=Object.create(x&&x.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(y,x):y.__proto__=x)}var g=(function(y){p(x,y);function x(){var w,E,R,N;c(this,x);for(var V=arguments.length,M=Array(V),L=0;L<V;L++)M[L]=arguments[L];return N=(E=(R=h(this,(w=x.__proto__||Object.getPrototypeOf(x)).call.apply(w,[this].concat(M))),R),R.render=function(){return e.default.createElement("a",R.props,R.props.children)},E),h(R,N)}return x})(e.default.Component);return _d.default=(0,s.default)(g),_d}var jd={},n2;function JT(){if(n2)return jd;n2=1,Object.defineProperty(jd,"__esModule",{value:!0});var r=(function(){function x(w,E){for(var R=0;R<E.length;R++){var N=E[R];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(w,N.key,N)}}return function(w,E,R){return E&&x(w.prototype,E),R&&x(w,R),w}})(),e=_i(),n=c(e),s=cg(),o=c(s);function c(x){return x&&x.__esModule?x:{default:x}}function h(x,w){if(!(x instanceof w))throw new TypeError("Cannot call a class as a function")}function p(x,w){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:x}function g(x,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);x.prototype=Object.create(w&&w.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(x,w):x.__proto__=w)}var y=(function(x){g(w,x);function w(){return h(this,w),p(this,(w.__proto__||Object.getPrototypeOf(w)).apply(this,arguments))}return r(w,[{key:"render",value:function(){return n.default.createElement("button",this.props,this.props.children)}}]),w})(n.default.Component);return jd.default=(0,o.default)(y),jd}var Dd={},kd={},r2;function ib(){if(r2)return kd;r2=1,Object.defineProperty(kd,"__esModule",{value:!0});var r=Object.assign||function(R){for(var N=1;N<arguments.length;N++){var V=arguments[N];for(var M in V)Object.prototype.hasOwnProperty.call(V,M)&&(R[M]=V[M])}return R},e=(function(){function R(N,V){for(var M=0;M<V.length;M++){var L=V[M];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(N,L.key,L)}}return function(N,V,M){return V&&R(N.prototype,V),M&&R(N,M),N}})(),n=_i(),s=y(n),o=eg();y(o);var c=Ch(),h=y(c),p=Ih(),g=y(p);function y(R){return R&&R.__esModule?R:{default:R}}function x(R,N){if(!(R instanceof N))throw new TypeError("Cannot call a class as a function")}function w(R,N){if(!R)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return N&&(typeof N=="object"||typeof N=="function")?N:R}function E(R,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof N);R.prototype=Object.create(N&&N.prototype,{constructor:{value:R,enumerable:!1,writable:!0,configurable:!0}}),N&&(Object.setPrototypeOf?Object.setPrototypeOf(R,N):R.__proto__=N)}return kd.default=function(R){var N=(function(V){E(M,V);function M(L){x(this,M);var z=w(this,(M.__proto__||Object.getPrototypeOf(M)).call(this,L));return z.childBindings={domNode:null},z}return e(M,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(z){this.props.name!==z.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;h.default.unregister(this.props.name)}},{key:"registerElems",value:function(z){h.default.register(z,this.childBindings.domNode)}},{key:"render",value:function(){return s.default.createElement(R,r({},this.props,{parentBindings:this.childBindings}))}}]),M})(s.default.Component);return N.propTypes={name:g.default.string,id:g.default.string},N},kd}var i2;function e3(){if(i2)return Dd;i2=1,Object.defineProperty(Dd,"__esModule",{value:!0});var r=Object.assign||function(R){for(var N=1;N<arguments.length;N++){var V=arguments[N];for(var M in V)Object.prototype.hasOwnProperty.call(V,M)&&(R[M]=V[M])}return R},e=(function(){function R(N,V){for(var M=0;M<V.length;M++){var L=V[M];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(N,L.key,L)}}return function(N,V,M){return V&&R(N.prototype,V),M&&R(N,M),N}})(),n=_i(),s=g(n),o=ib(),c=g(o),h=Ih(),p=g(h);function g(R){return R&&R.__esModule?R:{default:R}}function y(R,N){if(!(R instanceof N))throw new TypeError("Cannot call a class as a function")}function x(R,N){if(!R)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return N&&(typeof N=="object"||typeof N=="function")?N:R}function w(R,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof N);R.prototype=Object.create(N&&N.prototype,{constructor:{value:R,enumerable:!1,writable:!0,configurable:!0}}),N&&(Object.setPrototypeOf?Object.setPrototypeOf(R,N):R.__proto__=N)}var E=(function(R){w(N,R);function N(){return y(this,N),x(this,(N.__proto__||Object.getPrototypeOf(N)).apply(this,arguments))}return e(N,[{key:"render",value:function(){var M=this,L=r({},this.props);return delete L.name,L.parentBindings&&delete L.parentBindings,s.default.createElement("div",r({},L,{ref:function(F){M.props.parentBindings.domNode=F}}),this.props.children)}}]),N})(s.default.Component);return E.propTypes={name:p.default.string,id:p.default.string},Dd.default=(0,c.default)(E),Dd}var dm,s2;function t3(){if(s2)return dm;s2=1;var r=Object.assign||function(E){for(var R=1;R<arguments.length;R++){var N=arguments[R];for(var V in N)Object.prototype.hasOwnProperty.call(N,V)&&(E[V]=N[V])}return E},e=(function(){function E(R,N){for(var V=0;V<N.length;V++){var M=N[V];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(R,M.key,M)}}return function(R,N,V){return N&&E(R.prototype,N),V&&E(R,V),R}})();function n(E,R){if(!(E instanceof R))throw new TypeError("Cannot call a class as a function")}function s(E,R){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R&&(typeof R=="object"||typeof R=="function")?R:E}function o(E,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof R);E.prototype=Object.create(R&&R.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),R&&(Object.setPrototypeOf?Object.setPrototypeOf(E,R):E.__proto__=R)}var c=_i();eg(),Rh();var h=og(),p=Ch(),g=Ih(),y=rb(),x={to:g.string.isRequired,containerId:g.string,container:g.object,activeClass:g.string,spy:g.bool,smooth:g.oneOfType([g.bool,g.string]),offset:g.number,delay:g.number,isDynamic:g.bool,onClick:g.func,duration:g.oneOfType([g.number,g.func]),absolute:g.bool,onSetActive:g.func,onSetInactive:g.func,ignoreCancelEvents:g.bool,hashSpy:g.bool,spyThrottle:g.number},w={Scroll:function(R,N){console.warn("Helpers.Scroll is deprecated since v1.7.0");var V=N||p,M=(function(z){o(F,z);function F(W){n(this,F);var ee=s(this,(F.__proto__||Object.getPrototypeOf(F)).call(this,W));return L.call(ee),ee.state={active:!1},ee}return e(F,[{key:"getScrollSpyContainer",value:function(){var ee=this.props.containerId,te=this.props.container;return ee?document.getElementById(ee):te&&te.nodeType?te:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var ee=this.getScrollSpyContainer();h.isMounted(ee)||h.mount(ee,this.props.spyThrottle),this.props.hashSpy&&(y.isMounted()||y.mount(V),y.mapContainer(this.props.to,ee)),this.props.spy&&h.addStateHandler(this.stateHandler),h.addSpyHandler(this.spyHandler,ee),this.setState({container:ee})}}},{key:"componentWillUnmount",value:function(){h.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var ee="";this.state&&this.state.active?ee=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():ee=this.props.className;var te=r({},this.props);for(var O in x)te.hasOwnProperty(O)&&delete te[O];return te.className=ee,te.onClick=this.handleClick,c.createElement(R,te)}}]),F})(c.Component),L=function(){var F=this;this.scrollTo=function(W,ee){V.scrollTo(W,r({},F.state,ee))},this.handleClick=function(W){F.props.onClick&&F.props.onClick(W),W.stopPropagation&&W.stopPropagation(),W.preventDefault&&W.preventDefault(),F.scrollTo(F.props.to,F.props)},this.stateHandler=function(){V.getActiveLink()!==F.props.to&&(F.state!==null&&F.state.active&&F.props.onSetInactive&&F.props.onSetInactive(),F.setState({active:!1}))},this.spyHandler=function(W){var ee=F.getScrollSpyContainer();if(!(y.isMounted()&&!y.isInitialized())){var te=F.props.to,O=null,C=0,j=0,k=0;if(ee.getBoundingClientRect){var D=ee.getBoundingClientRect();k=D.top}if(!O||F.props.isDynamic){if(O=V.get(te),!O)return;var S=O.getBoundingClientRect();C=S.top-k+W,j=C+S.height}var I=W-F.props.offset,he=I>=Math.floor(C)&&I<Math.floor(j),Ee=I<Math.floor(C)||I>=Math.floor(j),X=V.getActiveLink();if(Ee)return te===X&&V.setActiveLink(void 0),F.props.hashSpy&&y.getHash()===te&&y.changeHash(),F.props.spy&&F.state.active&&(F.setState({active:!1}),F.props.onSetInactive&&F.props.onSetInactive()),h.updateStates();if(he&&X!==te)return V.setActiveLink(te),F.props.hashSpy&&y.changeHash(te),F.props.spy&&(F.setState({active:!0}),F.props.onSetActive&&F.props.onSetActive(te)),h.updateStates()}}};return M.propTypes=x,M.defaultProps={offset:0},M},Element:function(R){console.warn("Helpers.Element is deprecated since v1.7.0");var N=(function(V){o(M,V);function M(L){n(this,M);var z=s(this,(M.__proto__||Object.getPrototypeOf(M)).call(this,L));return z.childBindings={domNode:null},z}return e(M,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(z){this.props.name!==z.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;p.unregister(this.props.name)}},{key:"registerElems",value:function(z){p.register(z,this.childBindings.domNode)}},{key:"render",value:function(){return c.createElement(R,r({},this.props,{parentBindings:this.childBindings}))}}]),M})(c.Component);return N.propTypes={name:g.string,id:g.string},N}};return dm=w,dm}var a2;function n3(){if(a2)return gt;a2=1,Object.defineProperty(gt,"__esModule",{value:!0}),gt.Helpers=gt.ScrollElement=gt.ScrollLink=gt.animateScroll=gt.scrollSpy=gt.Events=gt.scroller=gt.Element=gt.Button=gt.Link=void 0;var r=ZT(),e=W(r),n=JT(),s=W(n),o=e3(),c=W(o),h=Ch(),p=W(h),g=lg(),y=W(g),x=og(),w=W(x),E=nb(),R=W(E),N=cg(),V=W(N),M=ib(),L=W(M),z=t3(),F=W(z);function W(ee){return ee&&ee.__esModule?ee:{default:ee}}return gt.Link=e.default,gt.Button=s.default,gt.Element=c.default,gt.scroller=p.default,gt.Events=y.default,gt.scrollSpy=w.default,gt.animateScroll=R.default,gt.ScrollLink=V.default,gt.ScrollElement=L.default,gt.Helpers=F.default,gt.default={Link:e.default,Button:s.default,Element:c.default,scroller:p.default,Events:y.default,scrollSpy:w.default,animateScroll:R.default,ScrollLink:V.default,ScrollElement:L.default,Helpers:F.default},gt}var Zn=n3();function ug(){return P.useEffect(()=>{const r=document.getElementById("hamburger"),e=document.getElementById("nav-links"),n=document.getElementById("close-btn"),s=()=>e.classList.add("active"),o=()=>e.classList.remove("active"),c=h=>{e.classList.contains("active")&&!e.contains(h.target)&&!r.contains(h.target)&&e.classList.remove("active")};return r.addEventListener("click",s),n.addEventListener("click",o),document.addEventListener("click",c),()=>{r.removeEventListener("click",s),n.removeEventListener("click",o),document.removeEventListener("click",c)}},[]),u.jsx("div",{className:"header",children:u.jsxs("nav",{className:"navbar",children:[u.jsx("h1",{children:"Gold Corps Inc"}),u.jsxs("div",{className:"hamburger",id:"hamburger",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]}),u.jsxs("div",{className:"nav-links",id:"nav-links",children:[u.jsx("button",{className:"close-btn",id:"close-btn",children:"×"}),u.jsx("div",{className:"search-container",children:u.jsx("input",{placeholder:"Search...",className:"search-bar",type:"search"})}),u.jsx(Zn.Link,{className:"a",to:"home",smooth:!0,duration:500,offset:-70,children:"Home"}),u.jsx(Zn.Link,{className:"a",to:"about",smooth:!0,duration:500,offset:-70,children:"About us"}),u.jsx(Zn.Link,{className:"a",to:"contact",smooth:!0,duration:500,offset:-70,children:"Contact us"}),u.jsx(Zn.Link,{className:"a",to:"services",smooth:!0,duration:500,offset:-70,children:"Our services"}),u.jsx(Zn.Link,{className:"a",to:"team",smooth:!0,duration:500,offset:-70,children:"Our team"}),u.jsx(Zn.Link,{className:"a",to:"testimonial",smooth:!0,duration:500,offset:-70,children:"Testimonial"}),u.jsx(_a,{className:"a",to:"/stock",children:"Stock prices"})]})]})})}const r3=""+new URL("image-1-Picsart-AiImageEnhancer-BcMqKlvr.jpeg",import.meta.url).href,i3=""+new URL("image-2-BqTb_Qtz.jpeg",import.meta.url).href,s3=""+new URL("image-3-Mfy9IzQb.jpeg",import.meta.url).href,a3=""+new URL("image-4-BooAjJhm.jpeg",import.meta.url).href;function o3(){const r=[r3,i3,s3,a3],[e,n]=P.useState(0);return P.useEffect(()=>{const s=setInterval(()=>{n(o=>(o+1)%r.length)},5e3);return()=>clearInterval(s)},[r.length]),u.jsxs("div",{className:"hero",children:[u.jsx("div",{className:"hero-slide active",style:{backgroundImage:`url(${r[e]})`,backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 1s ease-in-out"}}),u.jsxs("div",{className:"hero-overlay",children:[u.jsx("h2",{children:"Gold Corps - Your Premium Investment Partner"}),u.jsx("p",{children:"Empowering you to grow wealth with confidence."}),u.jsx(_a,{to:"/signup",children:u.jsx("button",{className:"btn btn1",children:"Signup"})}),u.jsx("button",{className:"btn",children:"Subscribe to our newsletter"})]})]})}var sb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o2=aa.createContext&&aa.createContext(sb),l3=["attr","size","title"];function c3(r,e){if(r==null)return{};var n=u3(r,e),s,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(o=0;o<c.length;o++)s=c[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(n[s]=r[s])}return n}function u3(r,e){if(r==null)return{};var n={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;n[s]=r[s]}return n}function nh(){return nh=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},nh.apply(this,arguments)}function l2(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,s)}return n}function rh(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?l2(Object(n),!0).forEach(function(s){d3(r,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):l2(Object(n)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))})}return r}function d3(r,e,n){return e=h3(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function h3(r){var e=f3(r,"string");return typeof e=="symbol"?e:e+""}function f3(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var s=n.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function ab(r){return r&&r.map((e,n)=>aa.createElement(e.tag,rh({key:n},e.attr),ab(e.child)))}function ke(r){return e=>aa.createElement(p3,nh({attr:rh({},r.attr)},e),ab(r.child))}function p3(r){var e=n=>{var{attr:s,size:o,title:c}=r,h=c3(r,l3),p=o||n.size||"1em",g;return n.className&&(g=n.className),r.className&&(g=(g?g+" ":"")+r.className),aa.createElement("svg",nh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,h,{className:g,style:rh(rh({color:r.color||n.color},n.style),r.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&aa.createElement("title",null,c),r.children)};return o2!==void 0?aa.createElement(o2.Consumer,null,n=>e(n)):e(sb)}function m3(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M341.28 22.78L254 123.75l63.156-33.656 4.438-2.375 4.437 2.405 18.314 9.938-3.063-77.282zM129.814 46.563l24.375 130.407 88.718-47.282-113.094-83.125zM321.53 108.97L83.345 235.905 192.156 293.5l237.47-125.75-108.095-58.78zm42.75 44.686l25.595 13.03-197.313 103.94-66.875-35.688 25.344-13.407 41.532 22.19 171.72-90.064zm92.19 18.22l9.092 24.03 26.22-22.656-35.313-1.375zm-15.783 11.155L199.47 310.78l-5.782 83.376L465.75 249.344l-25.063-66.313zm-334.562 19.564L16.562 226.78l36.876 19.564 6.093-16.28 1.25-3.314 3.126-1.656 42.22-22.5zm-34.438 48.312l-28.812 77 131.844 70.156 6.155-89.375-109.188-57.78zm335.344 50.875l-174.25 92.75 54.907 103.44L325.5 358.093l142.47 26.625-60.94-82.94zm-300.717 81.064l-19.438 44.812L144 402.876l-37.688-20.032z"},child:[]}]})(r)}function g3(r){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(r)}function y3(r){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(r)}function v3(r){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(r)}function x3(r){return ke({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(r)}function b3(r){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(r)}function _3(r){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(r)}function ob(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(r)}function oa(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(r)}function bo(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(r)}function Od(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(r)}function w3(r){return ke({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(r)}function E3(r){return ke({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(r)}function So(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(r)}function lb(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(r)}function Ao(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"},child:[]}]})(r)}function T3(r){return ke({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(r)}function S3(r){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},child:[]}]})(r)}function A3(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(r)}function ac(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(r)}function dg(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(r)}function gc(r){return ke({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(r)}function hg(r){return ke({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(r)}function fg(r){return ke({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(r)}function N3(r){return ke({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"},child:[]}]})(r)}function cb(r){return ke({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(r)}function R3(r){return ke({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(r)}function ub(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(r)}function C3(r){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(r)}function db(r){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z"},child:[]}]})(r)}function Nm(r){return ke({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"},child:[]}]})(r)}function I3(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(r)}function j3(r){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function hb(r){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"},child:[]}]})(r)}function fb(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"},child:[]}]})(r)}function ih(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(r)}function yc(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(r)}function pb(r){return ke({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"},child:[]}]})(r)}function pg(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"},child:[]}]})(r)}function D3(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},child:[]}]})(r)}function qd(r){return ke({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function k3(r){return ke({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"},child:[]}]})(r)}function O3(r){return ke({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function c2(r){return ke({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"},child:[]}]})(r)}function M3(r){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function la(r){return ke({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(r)}function P3(r){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(r)}function L3(){return u.jsx("section",{id:"about",className:"about-section",children:u.jsxs("div",{className:"about-container",children:[u.jsxs("div",{className:"about-block",children:[u.jsx(m3,{className:"about-icon"}),u.jsx("h2",{children:"Our Business"}),u.jsxs("p",{children:["Gold Corps stands at the pinnacle of global investment, bridging ",u.jsx("strong",{children:"gold, copper, agriculture, and cryptocurrency"})," into one unmatched portfolio. We operate in the world’s most lucrative and resource-rich regions, strategically positioned for ",u.jsx("strong",{children:"maximum profitability and sustainable impact"}),". Our assets are not just high-margin — they are ",u.jsx("strong",{children:"legacy-grade"}),", designed to deliver value for decades."]})]}),u.jsxs("div",{className:"about-block",children:[u.jsx(oa,{className:"about-icon"}),u.jsx("h2",{children:"Our Strategy"}),u.jsxs("p",{children:["We think beyond quarters — ",u.jsx("strong",{children:"we think in generations"}),". Every move is backed by deep market intelligence, cutting-edge technology, and a relentless pursuit of excellence. From ",u.jsx("strong",{children:"exploring new mining frontiers"}),"to ",u.jsx("strong",{children:"pioneering next-generation crypto opportunities"}),", Goldvest invests where innovation meets stability. We build wealth that lasts, while ensuring our growth model is ",u.jsx("strong",{children:"ethical, sustainable, and future-proof"}),"."]})]}),u.jsxs("div",{className:"about-block",children:[u.jsx(la,{className:"about-icon"}),u.jsx("h2",{children:"Our Purpose"}),u.jsxs("p",{children:["Gold Corps is on a mission to become ",u.jsx("strong",{children:"the world’s most respected investment powerhouse"})," — measured not just by profits, but by the trust and prosperity we bring to our stakeholders. We are led by visionaries, powered by innovators, and grounded in principles that protect both people and the planet."]}),u.jsx("blockquote",{children:"Own the finest assets. Employ the brightest minds. Deliver unmatched returns. Leave a legacy worth its weight in gold."})]})]})})}const V3=[{icon:u.jsx(la,{}),label:"Trusted Users",value:3e3,sub:"Investors Worldwide",desc:"Thousands of satisfied clients entrust us with their gold, copper, and diversified investments every day."},{icon:u.jsx(_3,{}),label:"Employees",value:5e3,sub:"Global Workforce",desc:"Our dedicated professionals operate at the highest standards, driving innovation and performance."},{icon:u.jsx(N3,{}),label:"Countries",value:6,sub:"Active Markets",desc:"A truly global footprint, giving investors exposure to the world’s most lucrative mining and trading hubs."},{icon:u.jsx(oa,{}),label:"Growth",value:80,sub:"Annual Increase (%)",desc:"Sustained double-digit growth powered by strategic expansion and long-term asset value creation."}];function U3(){return P.useEffect(()=>{document.querySelectorAll(".stat-value").forEach(e=>{const n=+e.getAttribute("data-target");let s=0;const o=()=>{const c=n/60;s<n?(s+=c,e.innerText=Math.ceil(s)+(e.dataset.percent?"%":"+"),setTimeout(o,20)):e.innerText=n+(e.dataset.percent?"%":"+")};o()})},[]),u.jsxs("section",{className:"stats-section",id:"services",children:[u.jsxs("div",{className:"stats-header",children:[u.jsx("h1",{className:"stats-title",children:"A Legacy of Trust. A Future of Growth."}),u.jsxs("p",{className:"stats-intro",children:["At ",u.jsx("span",{className:"gold-text",children:"Gold Corps"}),", we don’t just invest — we shape industries. From precious metals and global commodities to cutting-edge crypto and sustainable agriculture, we are redefining wealth creation on a global scale. Our unmatched portfolio and elite team ensure exceptional returns for investors while building lasting value for communities worldwide."]})]}),u.jsx("div",{className:"stats-container",children:V3.map((r,e)=>u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon",children:r.icon}),u.jsx("h2",{className:"stat-value shimmer","data-target":r.value,"data-percent":r.label==="Growth"?"true":"",children:"0"}),u.jsx("p",{className:"stat-label",children:r.label}),u.jsx("span",{className:"stat-sub",children:r.sub}),u.jsx("p",{className:"stat-desc",children:r.desc})]},e))})]})}const z3=[{id:1,name:"BEGINNERS PLAN",profitPercent:5,min:200,max:19900,duration:7,description:"Perfect for beginners starting with gold investment",features:["Low minimum investment","Quick returns","Ideal for newcomers","24/7 Support"]},{id:2,name:"MASTERS PLAN",profitPercent:30,min:2e4,max:999999,duration:14,description:"Ideal for consistent wealth accumulation",features:["Higher returns","Medium-term investment","Portfolio tracking","Priority support"]},{id:3,name:"PREMIUM PLAN",profitPercent:50,min:1e6,max:1/0,duration:30,description:"For premium investors building a substantial portfolio",features:["Maximum returns","Long-term growth","VIP support","Portfolio management","Dedicated advisor"]}],B3=()=>{const r=vs(),[e,n]=P.useState(null),s=o=>{n(o),sessionStorage.setItem("selectedGoldPlan",JSON.stringify(o)),r("/signup")};return u.jsxs("section",{className:"gold-plans-section",id:"investment-plans",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{children:"Exclusive Gold Investment Plans"}),u.jsx("p",{children:"Build your legacy with our premium gold investment opportunities"})]}),u.jsx("div",{className:"gold-plans-container",children:z3.map(o=>u.jsxs("div",{className:"gold-plan-card",children:[u.jsxs("div",{className:"plan-badge",children:[u.jsx(Ao,{className:"plan-icon"}),u.jsxs("span",{className:"profit-badge",children:[o.profitPercent,"% Returns"]})]}),u.jsx("h3",{className:"plan-title",children:o.name}),u.jsxs("div",{className:"plan-price-range",children:["$",o.min.toLocaleString()," - ",o.max===1/0?"Custom":`$${o.max.toLocaleString()}`]}),u.jsxs("div",{className:"plan-duration",children:[u.jsx("span",{className:"duration-label",children:"Term:"})," ",o.duration," days"]}),u.jsx("p",{className:"plan-description",children:o.description}),u.jsx("div",{className:"plan-actions",children:u.jsxs("button",{className:"btn-primary plan-select-btn",onClick:()=>s(o),children:["Start Investing ",u.jsx(y3,{})]})})]},o.id))}),u.jsx("div",{className:"plans-footer",children:u.jsx("p",{children:"💎 All investments are backed by physical gold reserves"})})]}),u.jsx("style",{jsx:!0,children:`
        .gold-plans-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
        }

        .gold-plans-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #FFD700, transparent);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B, #FFD700);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShimmer 4s ease infinite;
          letter-spacing: 1px;
        }

        .section-header p {
          font-size: 1.3rem;
          color: #ccc;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @keyframes goldShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .gold-plans-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .gold-plan-card {
          background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: 50px 35px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          border: 1px solid rgba(255, 215, 0, 0.15);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .gold-plan-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
        }

        .gold-plan-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .gold-plan-card:hover {
          transform: translateY(-12px);
          border-color: #FFD700;
          box-shadow: 0 20px 50px rgba(255, 215, 0, 0.15);
        }

        .gold-plan-card:hover::after {
          left: 100%;
        }

        .plan-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 25px;
        }

        .plan-icon {
          font-size: 28px;
          color: #FFD700;
          filter: drop-shadow(0 2px 8px rgba(255, 215, 0, 0.3));
        }

        .profit-badge {
          background: linear-gradient(90deg, rgba(255, 215, 0, 0.15), rgba(218, 165, 32, 0.15));
          color: #FFD700;
          padding: 8px 18px;
          border-radius: 25px;
          font-size: 15px;
          font-weight: 600;
          border: 1px solid rgba(255, 215, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .plan-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #FFD700;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .plan-price-range {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 15px;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        }

        .plan-duration {
          color: #ccc;
          font-size: 1.1rem;
          margin-bottom: 25px;
          font-weight: 500;
        }

        .duration-label {
          color: #FFD700;
        }

        .plan-description {
          color: #aaa;
          margin-bottom: 30px;
          line-height: 1.6;
          font-size: 1.05rem;
        }

        .plan-features {
          margin-bottom: 40px;
          text-align: left;
        }

        .feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          color: #fff;
          font-weight: 500;
          font-size: 1rem;
        }

        .feature-icon {
          color: #27ae60;
          margin-right: 15px;
          font-size: 14px;
          flex-shrink: 0;
        }

        .plan-actions {
          display: flex;
          justify-content: center;
        }

        .btn-primary {
          padding: 16px 35px;
          background: linear-gradient(90deg, #FFD700, #DAA520);
          color: #1a1a1a;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 6px 25px rgba(255, 215, 0, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 35px rgba(255, 215, 0, 0.5);
          background: linear-gradient(90deg, #DAA520, #FFD700);
        }

        .plans-footer {
          text-align: center;
          padding: 25px;
          background: rgba(255, 215, 0, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(255, 215, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .plans-footer p {
          color: #FFD700;
          font-size: 1.1rem;
          margin: 0;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .gold-plans-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .section-header h2 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .gold-plans-section {
            padding: 80px 0;
          }

          .section-header h2 {
            font-size: 2.2rem;
          }

          .gold-plan-card {
            padding: 40px 25px;
          }

          .plan-price-range {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }

          .section-header h2 {
            font-size: 1.8rem;
          }

          .gold-plan-card {
            padding: 30px 20px;
          }

          .plan-price-range {
            font-size: 1.6rem;
          }

          .btn-primary {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})},F3=[{icon:u.jsx(la,{}),label:"Trusted Investors",value:3e3,suffix:"+",sub:"Global investor community placing trust in our strategy",desc:"Thousands of investors choose Gold corps for long-term capital growth, risk-controlled exposure, and diversified access across assets."},{icon:u.jsx(oa,{}),label:"Employees",value:5e3,suffix:"",sub:"Experienced professionals powering global operations",desc:"A world-class team of geologists, traders, engineers and compliance experts committed to delivering measurable results."},{icon:u.jsx(cb,{}),label:"Countries",value:6,suffix:"+",sub:"Strategic, jurisdiction-diverse footprint",desc:"Operations and partnerships across high-potential regions to capture premium resources and market access."},{icon:u.jsx(oa,{}),label:"Annual Growth",value:80,suffix:"%",sub:"Sustained expansion through disciplined execution",desc:"Strong historical performance driven by portfolio quality and careful capital allocation."}],H3=["Global Mining Consortium","Frontier Capital Partners","AgriGrowth International","CryptoBridge Labs","Sustainable Resources Alliance"],na=[{quote:"Gold corps helped me diversify into real assets and crypto with clarity and confidence. Their team is responsive and deeply knowledgeable.",name:"Maria J. Finck",title:"Business Owner"},{quote:"From first contact to steady returns, Gold corps delivered tangible results. Their approach is conservative where it must be, bold where it counts.",name:"Hajime Omuro",title:"Operations Manager"},{quote:"I recommend Gold corps for any investor looking to combine sustainability with performance—transparent and trustworthy.",name:"James G. Wyatt",title:"Entrepreneur"}];function q3(r=".stat-value",e=1200){P.useEffect(()=>{const n=document.querySelectorAll(r);n.length&&n.forEach(s=>{const o=parseFloat(s.getAttribute("data-target"))||0,c=s.getAttribute("data-suffix")||"",h=performance.now(),p=g=>{const y=Math.min((g-h)/e,1),x=Math.floor(y*o);s.textContent=`${x.toLocaleString()}${c}`,y<1?requestAnimationFrame(p):s.textContent=`${o.toLocaleString()}${c}`};requestAnimationFrame(p)})},[r,e])}function G3(){const[r,e]=P.useState(0);P.useEffect(()=>{const c=setInterval(()=>e(h=>(h+1)%na.length),6e3);return()=>clearInterval(c)},[]),q3(".stat-value",1200);const[n,s]=P.useState(""),o=c=>{c.preventDefault(),alert(`Thanks — we'll reach out to ${n}`),s("")};return u.jsxs("main",{className:"gold-landing",children:[u.jsx(B3,{}),u.jsx("section",{className:"partners-section",id:"about",children:u.jsxs("div",{className:"container",children:[u.jsxs("h2",{children:[u.jsx(x3,{className:"icon"})," Partner Companies & Recognitions"]}),u.jsx("p",{className:"muted",children:"Gold corps is recognized for innovation, transparency, and bridging traditional finance with the digital future. Our partners and award bodies span investment, sustainability and technology sectors."}),u.jsx("ul",{className:"partner-list",children:H3.map((c,h)=>u.jsxs("li",{className:"partner-item",children:[u.jsx("span",{className:"dot"})," ",c]},h))})]})}),u.jsx("section",{className:"why-section",id:"services",children:u.jsxs("div",{className:"container split",children:[u.jsxs("div",{className:"col",children:[u.jsxs("h2",{children:[u.jsx(R3,{className:"icon"})," Why Choose Gold corps"]}),u.jsx("p",{className:"muted",children:"We combine disciplined capital allocation, deep technical knowledge, and a relentless focus on risk management — all aimed at creating durable capital appreciation and measurable social benefit."}),u.jsxs("div",{className:"features-grid",children:[u.jsxs("div",{className:"feature",children:[u.jsx("h3",{children:"Tailored Solutions"}),u.jsx("p",{children:"Personalised investment strategies aligned with your objectives and timeline."})]}),u.jsxs("div",{className:"feature",children:[u.jsx("h3",{children:"Long-term Partnership"}),u.jsx("p",{children:"We invest alongside our clients and prioritize stability through cycles."})]}),u.jsxs("div",{className:"feature",children:[u.jsx("h3",{children:"Active Opportunity Sourcing"}),u.jsx("p",{children:"Proprietary pipelines and global partnerships deliver differentiated deal flow."})]}),u.jsxs("div",{className:"feature",children:[u.jsx("h3",{children:"24/7 Investor Support"}),u.jsx("p",{children:"Dedicated teams that act decisively whenever the market presents opportunity or risk."})]})]})]}),u.jsxs("aside",{className:"col panel",children:[u.jsx("h3",{children:"Tailored for You"}),u.jsx("p",{children:"The deeper we understand your goals and constraints, the smarter we can allocate capital on your behalf — harvesting superior returns while managing downside exposure."}),u.jsxs("div",{className:"panel-list",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"In Your Corner"}),u.jsx("p",{children:"We stand with investors through market cycles — protection and growth combined."})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"We Do the Work"}),u.jsx("p",{children:"Expert media buying and deal execution so your capital works efficiently."})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"Round-the-clock"}),u.jsx("p",{children:"Support across timezones and fast response for critical needs."})]})]})]})]})}),u.jsx("section",{className:"stats-section",id:"team",children:u.jsxs("div",{className:"container",children:[u.jsxs("h2",{children:[u.jsx(cb,{className:"icon"})," Key Metrics & Performance"]}),u.jsx("p",{className:"muted",children:"Performance that proves our strategy — clear metrics, transparent reporting."}),u.jsx("div",{className:"stats-grid",children:F3.map((c,h)=>u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon",children:c.icon}),u.jsx("div",{className:"stat-value shimmer","data-target":c.value,"data-suffix":c.suffix,"aria-label":`${c.value}${c.suffix}`,children:"0"}),u.jsx("div",{className:"stat-label",children:c.label}),u.jsx("div",{className:"stat-sub",children:c.sub}),u.jsx("div",{className:"stat-desc muted",children:c.desc})]},h))})]})}),u.jsx("header",{className:"hero-section",id:"home",children:u.jsxs("div",{className:"hero-inner",children:[u.jsx("h1",{className:"hero-title",children:"Gold Corps — Building Enduring Wealth Across Gold, Copper, Agriculture & Crypto"}),u.jsx("p",{className:"hero-sub",children:"Trusted by thousands across six countries, we blend resource expertise, trading precision, and sustainable practices to generate high-quality, long-term returns."}),u.jsx("div",{className:"hero-cta",children:u.jsxs("button",{className:"btn btn-outline",children:[u.jsx(j3,{})," Watch Overview"]})}),u.jsxs("div",{className:"hero-stats",children:[u.jsxs("div",{className:"stat-inline",children:[u.jsx("span",{className:"big",children:"6+"}),u.jsx("span",{className:"label",children:"Countries"})]}),u.jsxs("div",{className:"stat-inline",children:[u.jsx("span",{className:"big",children:"3,000+"}),u.jsx("span",{className:"label",children:"Investors"})]}),u.jsxs("div",{className:"stat-inline",children:[u.jsx("span",{className:"big",children:"80%"}),u.jsx("span",{className:"label",children:"Recent Growth"})]})]})]})}),u.jsx("section",{className:"miners-section",children:u.jsxs("div",{className:"container split",children:[u.jsxs("div",{className:"col",children:[u.jsx("h2",{children:"Our Miners — Reliability & Consistency"}),u.jsx("p",{className:"muted",children:"Since 2022, our mining and operations teams have consistently met investor obligations and optimized output across multiple sites."}),u.jsxs("ul",{className:"miner-list",children:[u.jsxs("li",{children:[u.jsx("strong",{children:"Operational Excellence"})," — Rigid maintenance and safety regimes ensure uptime and reliability."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Local Partnerships"})," — Working with communities and regulators to ensure sustainable outcomes."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Transparent Payments"})," — Reliable payouts and investor reporting are built into our processes."]})]})]}),u.jsxs("aside",{className:"col panel",children:[u.jsx("h3",{children:"Geographic Reach"}),u.jsxs("div",{className:"geo-grid",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"Latham"}),u.jsx("span",{className:"muted",children:" — Headquarters"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"Africa"}),u.jsx("span",{className:"muted",children:" — Resource operations"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"Asia"}),u.jsx("span",{className:"muted",children:" — Development & trading"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"Europe"}),u.jsx("span",{className:"muted",children:" — Finance & compliance"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"CIS"}),u.jsx("span",{className:"muted",children:" — Strategic partnerships"})]})]})]})]})}),u.jsx("section",{className:"testimonials-section",id:"testimonial",children:u.jsxs("div",{className:"container",children:[u.jsxs("h2",{children:[u.jsx(la,{className:"icon"})," Investor Testimonials"]}),u.jsxs("div",{className:"test-carousel",children:[u.jsx("button",{className:"carousel-arrow left",onClick:()=>e(c=>(c-1+na.length)%na.length),"aria-label":"Previous testimonial",children:u.jsx(w3,{})}),u.jsxs("article",{className:"testimonial-card","aria-live":"polite",children:[u.jsxs("blockquote",{children:["“",na[r].quote,"”"]}),u.jsxs("cite",{children:["— ",na[r].name,", ",u.jsx("span",{className:"muted",children:na[r].title})]})]}),u.jsx("button",{className:"carousel-arrow right",onClick:()=>e(c=>(c+1)%na.length),"aria-label":"Next testimonial",children:u.jsx(E3,{})})]})]})}),u.jsx("section",{className:"cta-section",id:"contact",children:u.jsxs("div",{className:"container cta-panel",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Let's Work Together"}),u.jsx("p",{className:"muted",children:"Our sustainability-driven business plan blends responsible mining, ethical trading, and long-term investor value. Join a select group of investors building something that lasts."})]}),u.jsxs("form",{className:"cta-form",onSubmit:o,children:[u.jsx("label",{htmlFor:"email",className:"visually-hidden",children:"Email address"}),u.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",value:n,required:!0,onChange:c=>s(c.target.value)}),u.jsx("button",{className:"btn btn-primary",type:"submit",children:"Get a Quote"})]})]})}),u.jsxs("footer",{className:"site-footer",children:[u.jsxs("div",{className:"container footer-grid",children:[u.jsxs("div",{children:[u.jsx("h4",{children:"Gold corps"}),u.jsx("p",{className:"muted small",children:"Multi-asset investing across gold, copper, agriculture & crypto."})]}),u.jsxs("div",{children:[u.jsx("h5",{children:"Company"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(Zn.Link,{to:"home",smooth:!0,duration:600,children:"Home"})}),u.jsx("li",{children:u.jsx(Zn.Link,{to:"about",smooth:!0,duration:600,children:"About"})}),u.jsx("li",{children:u.jsx(Zn.Link,{to:"services",smooth:!0,duration:600,children:"Services"})}),u.jsx("li",{children:u.jsx(Zn.Link,{to:"team",smooth:!0,duration:600,children:"Team"})}),u.jsx("li",{children:u.jsx(Zn.Link,{to:"testimonial",smooth:!0,duration:600,children:"Testimonials"})}),u.jsx("li",{children:u.jsx(Zn.Link,{to:"contact",smooth:!0,duration:600,children:"Contact"})})]})]}),u.jsx("div",{})]}),u.jsx("div",{className:"footer-bottom",children:u.jsxs("small",{children:["© ",new Date().getFullYear()," Gold corps. All rights reserved."]})})]})]})}const Y3=()=>{};var u2={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},$3=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];e[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],h=r[n++],p=r[n++],g=((o&7)<<18|(c&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const c=r[n++],h=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},gb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],h=o+1<r.length,p=h?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,x=c>>2,w=(c&3)<<4|p>>4;let E=(p&15)<<2|y>>6,R=y&63;g||(R=64,h||(E=64)),s.push(n[x],n[w],n[E],n[R])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(mb(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):$3(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],p=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const w=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||p==null||y==null||w==null)throw new Q3;const E=c<<2|p>>4;if(s.push(E),y!==64){const R=p<<4&240|y>>2;if(s.push(R),w!==64){const N=y<<6&192|w;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Q3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const K3=function(r){const e=mb(r);return gb.encodeByteArray(e,!0)},sh=function(r){return K3(r).replace(/\./g,"")},yb=function(r){try{return gb.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3=()=>W3().__FIREBASE_DEFAULTS__,Z3=()=>{if(typeof process>"u"||typeof u2>"u")return;const r=u2.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},J3=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&yb(r[1]);return e&&JSON.parse(e)},jh=()=>{try{return Y3()||X3()||Z3()||J3()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},vb=r=>jh()?.emulatorHosts?.[r],eS=r=>{const e=vb(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},xb=()=>jh()?.config,bb=r=>jh()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _b(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[sh(JSON.stringify(n)),sh(JSON.stringify(h)),""].join(".")}const oc={};function rS(){const r={prod:[],emulator:[]};for(const e of Object.keys(oc))oc[e]?r.emulator.push(e):r.prod.push(e);return r}function iS(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let d2=!1;function wb(r,e){if(typeof window>"u"||typeof document>"u"||!Mo(window.location.host)||oc[r]===e||oc[r]||d2)return;oc[r]=e;function n(E){return`__firebase__banner__${E}`}const s="__firebase__banner",c=rS().prod.length>0;function h(){const E=document.getElementById(s);E&&E.remove()}function p(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function g(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function y(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{d2=!0,h()},E}function x(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function w(){const E=iS(s),R=n("text"),N=document.getElementById(R)||document.createElement("span"),V=n("learnmore"),M=document.getElementById(V)||document.createElement("a"),L=n("preprendIcon"),z=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const F=E.element;p(F),x(M,V);const W=y();g(z,L),F.append(z,N,M,W),document.body.appendChild(F)}c?(N.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function aS(){const r=jh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lS(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function cS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uS(){const r=hn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function dS(){return!aS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hS(){try{return typeof indexedDB=="object"}catch{return!1}}function fS(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="FirebaseError";class Ei extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=pS,Object.setPrototypeOf(this,Ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oc.prototype.create)}}class Oc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?mS(c,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Ei(o,p,s)}}function mS(r,e){return r.replace(gS,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const gS=/\{\$([^}]+)}/g;function yS(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function da(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const c=r[o],h=e[o];if(h2(c)&&h2(h)){if(!da(c,h))return!1}else if(c!==h)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function h2(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ec(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,c]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function tc(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function vS(r,e){const n=new xS(r,e);return n.subscribe.bind(n)}class xS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");bS(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=hm),o.error===void 0&&(o.error=hm),o.complete===void 0&&(o.complete=hm);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bS(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function hm(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(r){return r&&r._delegate?r._delegate:r}class ha{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new tS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ES(e))try{this.getOrInitializeService({instanceIdentifier:ra})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(e=ra){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ra){return this.instances.has(e)}getOptions(e=ra){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&h.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&e(c,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:wS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ra){return this.component?this.component.multipleInstances?e:ra:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wS(r){return r===ra?void 0:r}function ES(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _S(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(qe||(qe={}));const SS={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},AS=qe.INFO,NS={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},RS=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=NS[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mg{constructor(e){this.name=e,this._logLevel=AS,this._logHandler=RS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const CS=(r,e)=>e.some(n=>r instanceof n);let f2,p2;function IS(){return f2||(f2=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jS(){return p2||(p2=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eb=new WeakMap,Rm=new WeakMap,Tb=new WeakMap,fm=new WeakMap,gg=new WeakMap;function DS(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",h)},c=()=>{n(as(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&Eb.set(n,r)}).catch(()=>{}),gg.set(e,r),e}function kS(r){if(Rm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",h),r.removeEventListener("abort",h)},c=()=>{n(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",h),r.addEventListener("abort",h)});Rm.set(r,e)}let Cm={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Rm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Tb.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return as(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function OS(r){Cm=r(Cm)}function MS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(pm(this),e,...n);return Tb.set(s,e.sort?e.sort():[e]),as(s)}:jS().includes(r)?function(...e){return r.apply(pm(this),e),as(Eb.get(this))}:function(...e){return as(r.apply(pm(this),e))}}function PS(r){return typeof r=="function"?MS(r):(r instanceof IDBTransaction&&kS(r),CS(r,IS())?new Proxy(r,Cm):r)}function as(r){if(r instanceof IDBRequest)return DS(r);if(fm.has(r))return fm.get(r);const e=PS(r);return e!==r&&(fm.set(r,e),gg.set(e,r)),e}const pm=r=>gg.get(r);function LS(r,e,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const h=indexedDB.open(r,e),p=as(h);return s&&h.addEventListener("upgradeneeded",g=>{s(as(h.result),g.oldVersion,g.newVersion,as(h.transaction),g)}),n&&h.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{c&&g.addEventListener("close",()=>c()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const VS=["get","getKey","getAll","getAllKeys","count"],US=["put","add","delete","clear"],mm=new Map;function m2(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(mm.get(e))return mm.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=US.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||VS.includes(n)))return;const c=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),o&&g.done]))[0]};return mm.set(e,c),c}OS(r=>({...r,get:(e,n,s)=>m2(e,n)||r.get(e,n,s),has:(e,n)=>!!m2(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function BS(r){return r.getComponent()?.type==="VERSION"}const Im="@firebase/app",g2="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new mg("@firebase/app"),FS="@firebase/app-compat",HS="@firebase/analytics-compat",qS="@firebase/analytics",GS="@firebase/app-check-compat",YS="@firebase/app-check",$S="@firebase/auth",QS="@firebase/auth-compat",KS="@firebase/database",WS="@firebase/data-connect",XS="@firebase/database-compat",ZS="@firebase/functions",JS="@firebase/functions-compat",e6="@firebase/installations",t6="@firebase/installations-compat",n6="@firebase/messaging",r6="@firebase/messaging-compat",i6="@firebase/performance",s6="@firebase/performance-compat",a6="@firebase/remote-config",o6="@firebase/remote-config-compat",l6="@firebase/storage",c6="@firebase/storage-compat",u6="@firebase/firestore",d6="@firebase/ai",h6="@firebase/firestore-compat",f6="firebase",p6="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="[DEFAULT]",m6={[Im]:"fire-core",[FS]:"fire-core-compat",[qS]:"fire-analytics",[HS]:"fire-analytics-compat",[YS]:"fire-app-check",[GS]:"fire-app-check-compat",[$S]:"fire-auth",[QS]:"fire-auth-compat",[KS]:"fire-rtdb",[WS]:"fire-data-connect",[XS]:"fire-rtdb-compat",[ZS]:"fire-fn",[JS]:"fire-fn-compat",[e6]:"fire-iid",[t6]:"fire-iid-compat",[n6]:"fire-fcm",[r6]:"fire-fcm-compat",[i6]:"fire-perf",[s6]:"fire-perf-compat",[a6]:"fire-rc",[o6]:"fire-rc-compat",[l6]:"fire-gcs",[c6]:"fire-gcs-compat",[u6]:"fire-fst",[h6]:"fire-fst-compat",[d6]:"fire-vertex","fire-js":"fire-js",[f6]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new Map,g6=new Map,Dm=new Map;function y2(r,e){try{r.container.addComponent(e)}catch(n){gi.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function No(r){const e=r.name;if(Dm.has(e))return gi.debug(`There were multiple attempts to register component ${e}.`),!1;Dm.set(e,r);for(const n of ah.values())y2(n,r);for(const n of g6.values())y2(n,r);return!0}function yg(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Mn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},os=new Oc("app","Firebase",y6);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ha("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw os.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=p6;function Sb(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:jm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw os.create("bad-app-name",{appName:String(o)});if(n||(n=xb()),!n)throw os.create("no-options");const c=ah.get(o);if(c){if(da(n,c.options)&&da(s,c.config))return c;throw os.create("duplicate-app",{appName:o})}const h=new TS(o);for(const g of Dm.values())h.addComponent(g);const p=new v6(n,s,h);return ah.set(o,p),p}function Ab(r=jm){const e=ah.get(r);if(!e&&r===jm&&xb())return Sb();if(!e)throw os.create("no-app",{appName:r});return e}function ls(r,e,n){let s=m6[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gi.warn(h.join(" "));return}No(new ha(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x6="firebase-heartbeat-database",b6=1,vc="firebase-heartbeat-store";let gm=null;function Nb(){return gm||(gm=LS(x6,b6,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(vc)}catch(n){console.warn(n)}}}}).catch(r=>{throw os.create("idb-open",{originalErrorMessage:r.message})})),gm}async function _6(r){try{const n=(await Nb()).transaction(vc),s=await n.objectStore(vc).get(Rb(r));return await n.done,s}catch(e){if(e instanceof Ei)gi.warn(e.message);else{const n=os.create("idb-get",{originalErrorMessage:e?.message});gi.warn(n.message)}}}async function v2(r,e){try{const s=(await Nb()).transaction(vc,"readwrite");await s.objectStore(vc).put(e,Rb(r)),await s.done}catch(n){if(n instanceof Ei)gi.warn(n.message);else{const s=os.create("idb-set",{originalErrorMessage:n?.message});gi.warn(s.message)}}}function Rb(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w6=1024,E6=30;class T6{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new A6(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=x2();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>E6){const o=N6(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){gi.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=x2(),{heartbeatsToSend:n,unsentEntries:s}=S6(this._heartbeatsCache.heartbeats),o=sh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return gi.warn(e),""}}}function x2(){return new Date().toISOString().substring(0,10)}function S6(r,e=w6){const n=[];let s=r.slice();for(const o of r){const c=n.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),b2(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),b2(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class A6{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hS()?fS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _6(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return v2(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return v2(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function b2(r){return sh(JSON.stringify({version:2,heartbeats:r})).length}function N6(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R6(r){No(new ha("platform-logger",e=>new zS(e),"PRIVATE")),No(new ha("heartbeat",e=>new T6(e),"PRIVATE")),ls(Im,g2,r),ls(Im,g2,"esm2020"),ls("fire-js","")}R6("");function Cb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C6=Cb,Ib=new Oc("auth","Firebase",Cb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new mg("@firebase/auth");function I6(r,...e){oh.logLevel<=qe.WARN&&oh.warn(`Auth (${Po}): ${r}`,...e)}function Gd(r,...e){oh.logLevel<=qe.ERROR&&oh.error(`Auth (${Po}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(r,...e){throw xg(r,...e)}function lr(r,...e){return xg(r,...e)}function vg(r,e,n){const s={...C6(),[e]:n};return new Oc("auth","Firebase",s).create(e,{appName:r.name})}function hi(r){return vg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function j6(r,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&er(r,"argument-error"),vg(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xg(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return Ib.create(r,...e)}function Re(r,e,...n){if(!r)throw xg(e,...n)}function ci(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Gd(e),new Error(e)}function yi(r,e){r||ci(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(){return typeof self<"u"&&self.location?.href||""}function D6(){return _2()==="http:"||_2()==="https:"}function _2(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(D6()||lS()||"connection"in navigator)?navigator.onLine:!0}function O6(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.shortDelay=e,this.longDelay=n,yi(n>e,"Short delay should be less than long delay!"),this.isMobile=sS()||cS()}get(){return k6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(r,e){yi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P6=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],L6=new Pc(3e4,6e4);function Ti(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Si(r,e,n,s,o={}){return Db(r,o,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const p=Mc({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:g,...c};return oS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Mo(r.emulatorConfig.host)&&(y.credentials="include"),jb.fetch()(await kb(r,r.config.apiHost,n,p),y)})}async function Db(r,e,n){r._canInitEmulator=!1;const s={...M6,...e};try{const o=new U6(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Md(r,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const p=c.ok?h.errorMessage:h.error.message,[g,y]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Md(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Md(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Md(r,"user-disabled",h);const x=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw vg(r,x,y);er(r,x)}}catch(o){if(o instanceof Ei)throw o;er(r,"network-request-failed",{message:String(o)})}}async function Lc(r,e,n,s,o={}){const c=await Si(r,e,n,s,o);return"mfaPendingCredential"in c&&er(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function kb(r,e,n,s){const o=`${e}${n}?${s}`,c=r,h=c.config.emulator?bg(r.config,o):`${r.config.apiScheme}://${o}`;return P6.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function V6(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U6{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(lr(this.auth,"network-request-failed")),L6.get())})}}function Md(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=lr(r,e,s);return o.customData._tokenResponse=n,o}function w2(r){return r!==void 0&&r.enterprise!==void 0}class z6{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return V6(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function B6(r,e){return Si(r,"GET","/v2/recaptchaConfig",Ti(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F6(r,e){return Si(r,"POST","/v1/accounts:delete",e)}async function lh(r,e){return Si(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function H6(r,e=!1){const n=Rt(r),s=await n.getIdToken(e),o=_g(s);Re(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c?.sign_in_provider;return{claims:o,token:s,authTime:lc(ym(o.auth_time)),issuedAtTime:lc(ym(o.iat)),expirationTime:lc(ym(o.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function ym(r){return Number(r)*1e3}function _g(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Gd("JWT malformed, contained fewer than 3 sections"),null;try{const o=yb(n);return o?JSON.parse(o):(Gd("Failed to decode base64 JWT payload"),null)}catch(o){return Gd("Caught error parsing JWT payload as JSON",o?.toString()),null}}function E2(r){const e=_g(r);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ei&&q6(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function q6({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lc(this.lastLoginAt),this.creationTime=lc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ch(r){const e=r.auth,n=await r.getIdToken(),s=await xc(r,lh(e,{idToken:n}));Re(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const c=o.providerUserInfo?.length?Ob(o.providerUserInfo):[],h=$6(r.providerData,c),p=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!h?.length,y=p?g:!1,x={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Om(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,x)}async function Y6(r){const e=Rt(r);await ch(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $6(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Ob(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q6(r,e){const n=await Db(r,{},async()=>{const s=Mc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,h=await kb(r,o,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&Mo(r.emulatorConfig.host)&&(g.credentials="include"),jb.fetch()(h,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function K6(r,e){return Si(r,"POST","/v2/accounts:revokeToken",Ti(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):E2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const n=E2(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await Q6(e,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,h=new _o;return s&&(Re(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Re(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(Re(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return ci("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(r,e){Re(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class or{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new G6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Om(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await xc(this,this.stsTokenManager.getToken(this.auth,e));return Re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return H6(this,e)}reload(){return Y6(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new or({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ch(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await xc(this,F6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,h=n.photoURL??void 0,p=n.tenantId??void 0,g=n._redirectEventId??void 0,y=n.createdAt??void 0,x=n.lastLoginAt??void 0,{uid:w,emailVerified:E,isAnonymous:R,providerData:N,stsTokenManager:V}=n;Re(w&&V,e,"internal-error");const M=_o.fromJSON(this.name,V);Re(typeof w=="string",e,"internal-error"),ts(s,e.name),ts(o,e.name),Re(typeof E=="boolean",e,"internal-error"),Re(typeof R=="boolean",e,"internal-error"),ts(c,e.name),ts(h,e.name),ts(p,e.name),ts(g,e.name),ts(y,e.name),ts(x,e.name);const L=new or({uid:w,auth:e,email:o,emailVerified:E,displayName:s,isAnonymous:R,photoURL:h,phoneNumber:c,tenantId:p,stsTokenManager:M,createdAt:y,lastLoginAt:x});return N&&Array.isArray(N)&&(L.providerData=N.map(z=>({...z}))),g&&(L._redirectEventId=g),L}static async _fromIdTokenResponse(e,n,s=!1){const o=new _o;o.updateFromServerResponse(n);const c=new or({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ch(c),c}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Re(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Ob(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!c?.length,p=new _o;p.updateFromIdToken(s);const g=new or({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Om(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=new Map;function ui(r){yi(r instanceof Function,"Expected a class definition");let e=T2.get(r);return e?(yi(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,T2.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mb.type="NONE";const S2=Mb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(r,e,n){return`firebase:${r}:${e}:${n}`}class wo{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=Yd(this.userKey,o.apiKey,c),this.fullPersistenceKey=Yd("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await lh(this.auth,{idToken:e}).catch(()=>{});return n?or._fromGetAccountInfoResponse(this.auth,n,e):null}return or._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new wo(ui(S2),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||ui(S2);const h=Yd(s,e.config.apiKey,e.name);let p=null;for(const y of n)try{const x=await y._get(h);if(x){let w;if(typeof x=="string"){const E=await lh(e,{idToken:x}).catch(()=>{});if(!E)break;w=await or._fromGetAccountInfoResponse(e,E,x)}else w=or._fromJSON(e,x);y!==c&&(p=w),c=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new wo(c,e,s):(c=g[0],p&&await c._set(h,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(h)}catch{}})),new wo(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ub(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bb(e))return"Blackberry";if(Fb(e))return"Webos";if(Lb(e))return"Safari";if((e.includes("chrome/")||Vb(e))&&!e.includes("edge/"))return"Chrome";if(zb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function Pb(r=hn()){return/firefox\//i.test(r)}function Lb(r=hn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vb(r=hn()){return/crios\//i.test(r)}function Ub(r=hn()){return/iemobile/i.test(r)}function zb(r=hn()){return/android/i.test(r)}function Bb(r=hn()){return/blackberry/i.test(r)}function Fb(r=hn()){return/webos/i.test(r)}function wg(r=hn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function W6(r=hn()){return wg(r)&&!!window.navigator?.standalone}function X6(){return uS()&&document.documentMode===10}function Hb(r=hn()){return wg(r)||zb(r)||Fb(r)||Bb(r)||/windows phone/i.test(r)||Ub(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(r,e=[]){let n;switch(r){case"Browser":n=A2(hn());break;case"Worker":n=`${A2(hn())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Po}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((h,p)=>{try{const g=e(c);h(g)}catch(g){p(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J6(r,e={}){return Si(r,"GET","/v2/passwordPolicy",Ti(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e5=6;class t5{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??e5,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new N2(this),this.idTokenSubscription=new N2(this),this.beforeStateQueue=new Z6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ib,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ui(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await wo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lh(this,{idToken:e}),s=await or._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Mn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&p?.user&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ch(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O6()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(hi(this));const n=e?Rt(e):null;return n&&Re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ui(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await J6(this),n=new t5(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oc("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await K6(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ui(e)||this._popupRedirectResolver;Re(n,this,"argument-error"),this.redirectPersistenceManager=await wo.create(this,[ui(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(p,this,"internal-error"),p.then(()=>{h||c(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(n);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&I6(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ai(r){return Rt(r)}class N2{constructor(e){this.auth=e,this.observer=null,this.addObserver=vS(n=>this.observer=n)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function r5(r){Dh=r}function Gb(r){return Dh.loadJS(r)}function i5(){return Dh.recaptchaEnterpriseScript}function s5(){return Dh.gapiScript}function a5(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class o5{constructor(){this.enterprise=new l5}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class l5{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const c5="recaptcha-enterprise",Yb="NO_RECAPTCHA";class u5{constructor(e){this.type=c5,this.auth=Ai(e)}async verify(e="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,p)=>{B6(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new z6(g);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,h(y.siteKey)}}).catch(g=>{p(g)})})}function o(c,h,p){const g=window.grecaptcha;w2(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:e}).then(y=>{h(y)}).catch(()=>{h(Yb)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new o5().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{s(this.auth).then(p=>{if(!n&&w2(window.grecaptcha))o(p,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=i5();g.length!==0&&(g+=p),Gb(g).then(()=>{o(p,c,h)}).catch(y=>{h(y)})}}).catch(p=>{h(p)})})}}async function R2(r,e,n,s=!1,o=!1){const c=new u5(r);let h;if(o)h=Yb;else try{h=await c.verify(n)}catch{h=await c.verify(n,!0)}const p={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,y=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function uh(r,e,n,s,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await R2(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await R2(r,e,n,n==="getOobCode");return s(r,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d5(r,e){const n=yg(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(da(c,e??{}))return o;er(o,"already-initialized")}return n.initialize({options:e})}function h5(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(ui);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function f5(r,e,n){const s=Ai(r);Re(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,c=$b(e),{host:h,port:p}=p5(e),g=p===null?"":`:${p}`,y={url:`${c}//${h}${g}/`},x=Object.freeze({host:h,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Re(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Re(da(y,s.config.emulator)&&da(x,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=x,s.settings.appVerificationDisabledForTesting=!0,Mo(h)?(_b(`${c}//${h}${g}`),wb("Auth",!0)):m5()}function $b(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function p5(r){const e=$b(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:C2(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:C2(h)}}}function C2(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function m5(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ci("not implemented")}_getIdTokenResponse(e){return ci("not implemented")}_linkToIdToken(e,n){return ci("not implemented")}_getReauthenticationResolver(e){return ci("not implemented")}}async function g5(r,e){return Si(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y5(r,e){return Lc(r,"POST","/v1/accounts:signInWithPassword",Ti(r,e))}async function v5(r,e){return Si(r,"POST","/v1/accounts:sendOobCode",Ti(r,e))}async function x5(r,e){return v5(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b5(r,e){return Lc(r,"POST","/v1/accounts:signInWithEmailLink",Ti(r,e))}async function _5(r,e){return Lc(r,"POST","/v1/accounts:signInWithEmailLink",Ti(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc extends Eg{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new bc(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new bc(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uh(e,n,"signInWithPassword",y5);case"emailLink":return b5(e,{email:this._email,oobCode:this._password});default:er(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uh(e,s,"signUpPassword",g5);case"emailLink":return _5(e,{idToken:n,email:this._email,oobCode:this._password});default:er(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(r,e){return Lc(r,"POST","/v1/accounts:signInWithIdp",Ti(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w5="http://localhost";class fa extends Eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):er("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...c}=n;if(!s||!o)return null;const h=new fa(s,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return Eo(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Eo(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Eo(e,n)}buildRequest(){const e={requestUri:w5,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E5(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T5(r){const e=ec(tc(r)).link,n=e?ec(tc(e)).deep_link_id:null,s=ec(tc(r)).deep_link_id;return(s?ec(tc(s)).link:null)||s||n||e||r}class Tg{constructor(e){const n=ec(tc(e)),s=n.apiKey??null,o=n.oobCode??null,c=E5(n.mode??null);Re(s&&o&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=T5(e);try{return new Tg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.providerId=Lo.PROVIDER_ID}static credential(e,n){return bc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Tg.parseLink(n);return Re(s,"argument-error"),bc._fromEmailAndCode(e,s.code,s.tenantId)}}Lo.PROVIDER_ID="password";Lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Sg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Vc{constructor(){super("facebook.com")}static credential(e){return fa._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch{return null}}}ns.FACEBOOK_SIGN_IN_METHOD="facebook.com";ns.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Vc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fa._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Cr.credential(n,s)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends Vc{constructor(){super("github.com")}static credential(e){return fa._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rs.credential(e.oauthAccessToken)}catch{return null}}}rs.GITHUB_SIGN_IN_METHOD="github.com";rs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Vc{constructor(){super("twitter.com")}static credential(e,n){return fa._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return is.credential(n,s)}catch{return null}}}is.TWITTER_SIGN_IN_METHOD="twitter.com";is.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S5(r,e){return Lc(r,"POST","/v1/accounts:signUp",Ti(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const c=await or._fromIdTokenResponse(e,s,o),h=I2(s);return new pa({user:c,providerId:h,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=I2(s);return new pa({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function I2(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends Ei{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,dh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new dh(e,n,s,o)}}function Qb(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?dh._fromErrorAndOperation(r,c,e,s):c})}async function A5(r,e,n=!1){const s=await xc(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return pa._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N5(r,e,n=!1){const{auth:s}=r;if(Mn(s.app))return Promise.reject(hi(s));const o="reauthenticate";try{const c=await xc(r,Qb(s,o,e,r),n);Re(c.idToken,s,"internal-error");const h=_g(c.idToken);Re(h,s,"internal-error");const{sub:p}=h;return Re(r.uid===p,s,"user-mismatch"),pa._forOperation(r,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&er(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(r,e,n=!1){if(Mn(r.app))return Promise.reject(hi(r));const s="signIn",o=await Qb(r,s,e),c=await pa._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(c.user),c}async function R5(r,e){return Kb(Ai(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(r){const e=Ai(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ag(r,e,n){const s=Ai(r);await uh(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",x5)}async function C5(r,e,n){if(Mn(r.app))return Promise.reject(hi(r));const s=Ai(r),h=await uh(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",S5).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Wb(r),g}),p=await pa._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function Xb(r,e,n){return Mn(r.app)?Promise.reject(hi(r)):R5(Rt(r),Lo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Wb(r),s})}function I5(r,e,n,s){return Rt(r).onIdTokenChanged(e,n,s)}function j5(r,e,n){return Rt(r).beforeAuthStateChanged(e,n)}function Zb(r,e,n,s){return Rt(r).onAuthStateChanged(e,n,s)}function Ng(r){return Rt(r).signOut()}const hh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hh,"1"),this.storage.removeItem(hh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D5=1e3,k5=10;class e_ extends Jb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!n&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);X6()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,k5):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},D5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e_.type="LOCAL";const O5=e_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends Jb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t_.type="SESSION";const n_=t_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M5(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new kh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:c}=n.data,h=this.handlersMap[o];if(!h?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async y=>y(n.origin,c)),g=await M5(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((p,g)=>{const y=Rg("",20);o.port1.start();const x=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(w){const E=w;if(E.data.eventId===y)switch(E.data.status){case"ack":clearTimeout(x),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(E.data.response);break;default:clearTimeout(x),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(){return window}function L5(r){Ir().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){return typeof Ir().WorkerGlobalScope<"u"&&typeof Ir().importScripts=="function"}async function V5(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U5(){return navigator?.serviceWorker?.controller||null}function z5(){return r_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="firebaseLocalStorageDb",B5=1,fh="firebaseLocalStorage",s_="fbase_key";class Uc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oh(r,e){return r.transaction([fh],e?"readwrite":"readonly").objectStore(fh)}function F5(){const r=indexedDB.deleteDatabase(i_);return new Uc(r).toPromise()}function Mm(){const r=indexedDB.open(i_,B5);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(fh,{keyPath:s_})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(fh)?e(s):(s.close(),await F5(),e(await Mm()))})})}async function j2(r,e,n){const s=Oh(r,!0).put({[s_]:e,value:n});return new Uc(s).toPromise()}async function H5(r,e){const n=Oh(r,!1).get(e),s=await new Uc(n).toPromise();return s===void 0?null:s.value}function D2(r,e){const n=Oh(r,!0).delete(e);return new Uc(n).toPromise()}const q5=800,G5=3;class a_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>G5)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kh._getInstance(z5()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await V5(),!this.activeServiceWorker)return;this.sender=new P5(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||U5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mm();return await j2(e,hh,"1"),await D2(e,hh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>j2(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>H5(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>D2(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Oh(o,!1).getAll();return new Uc(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a_.type="LOCAL";const Y5=a_;new Pc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(r,e){return e?ui(e):(Re(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg extends Eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Eo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $5(r){return Kb(r.auth,new Cg(r),r.bypassAuthState)}function Q5(r){const{auth:e,user:n}=r;return Re(n,e,"internal-error"),N5(n,new Cg(r),r.bypassAuthState)}async function K5(r){const{auth:e,user:n}=r;return Re(n,e,"internal-error"),A5(n,new Cg(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n,s,o,c=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $5;case"linkViaPopup":case"linkViaRedirect":return K5;case"reauthViaPopup":case"reauthViaRedirect":return Q5;default:er(this.auth,"internal-error")}}resolve(e){yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W5=new Pc(2e3,1e4);async function c_(r,e,n){if(Mn(r.app))return Promise.reject(lr(r,"operation-not-supported-in-this-environment"));const s=Ai(r);j6(r,e,Sg);const o=o_(s,n);return new ia(s,"signInViaPopup",e,o).executeNotNull()}class ia extends l_{constructor(e,n,s,o,c){super(e,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,ia.currentPopupAction&&ia.currentPopupAction.cancel(),ia.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){yi(this.filter.length===1,"Popup operations only handle one event");const e=Rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ia.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,W5.get())};e()}}ia.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X5="pendingRedirect",$d=new Map;class Z5 extends l_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=$d.get(this.auth._key());if(!e){try{const s=await J5(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}$d.set(this.auth._key(),e)}return this.bypassAuthState||$d.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function J5(r,e){const n=nA(e),s=tA(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function eA(r,e){$d.set(r._key(),e)}function tA(r){return ui(r._redirectPersistence)}function nA(r){return Yd(X5,r.config.apiKey,r.name)}async function rA(r,e,n=!1){if(Mn(r.app))return Promise.reject(hi(r));const s=Ai(r),o=o_(s,e),h=await new Z5(s,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=600*1e3;class sA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!u_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(lr(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iA&&this.cachedEventUids.clear(),this.cachedEventUids.has(k2(e))}saveEventToCache(e){this.cachedEventUids.add(k2(e)),this.lastProcessedEventTime=Date.now()}}function k2(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function u_({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function aA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(r,e={}){return Si(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cA=/^https?/;async function uA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await oA(r);for(const n of e)try{if(dA(n))return}catch{}er(r,"unauthorized-domain")}function dA(r){const e=km(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===s}if(!cA.test(n))return!1;if(lA.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new Pc(3e4,6e4);function O2(){const r=Ir().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function fA(r){return new Promise((e,n)=>{function s(){O2(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{O2(),n(lr(r,"network-request-failed"))},timeout:hA.get()})}if(Ir().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ir().gapi?.load)s();else{const o=a5("iframefcb");return Ir()[o]=()=>{gapi.load?s():n(lr(r,"network-request-failed"))},Gb(`${s5()}?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw Qd=null,e})}let Qd=null;function pA(r){return Qd=Qd||fA(r),Qd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new Pc(5e3,15e3),gA="__/auth/iframe",yA="emulator/auth/iframe",vA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bA(r){const e=r.config;Re(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?bg(e,yA):`https://${r.config.authDomain}/${gA}`,s={apiKey:e.apiKey,appName:r.name,v:Po},o=xA.get(r.config.apiHost);o&&(s.eid=o);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Mc(s).slice(1)}`}async function _A(r){const e=await pA(r),n=Ir().gapi;return Re(n,r,"internal-error"),e.open({where:document.body,url:bA(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vA,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const h=lr(r,"network-request-failed"),p=Ir().setTimeout(()=>{c(h)},mA.get());function g(){Ir().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EA=500,TA=600,SA="_blank",AA="http://localhost";class M2{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NA(r,e,n,s=EA,o=TA){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g={...wA,width:s.toString(),height:o.toString(),top:c,left:h},y=hn().toLowerCase();n&&(p=Vb(y)?SA:n),Pb(y)&&(e=e||AA,g.scrollbars="yes");const x=Object.entries(g).reduce((E,[R,N])=>`${E}${R}=${N},`,"");if(W6(y)&&p!=="_self")return RA(e||"",p),new M2(null);const w=window.open(e||"",p,x);Re(w,r,"popup-blocked");try{w.focus()}catch{}return new M2(w)}function RA(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="__/auth/handler",IA="emulator/auth/handler",jA=encodeURIComponent("fac");async function P2(r,e,n,s,o,c){Re(r.config.authDomain,r,"auth-domain-config-required"),Re(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Po,eventId:o};if(e instanceof Sg){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",yS(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[x,w]of Object.entries({}))h[x]=w}if(e instanceof Vc){const x=e.getScopes().filter(w=>w!=="");x.length>0&&(h.scopes=x.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const x of Object.keys(p))p[x]===void 0&&delete p[x];const g=await r._getAppCheckToken(),y=g?`#${jA}=${encodeURIComponent(g)}`:"";return`${DA(r)}?${Mc(p).slice(1)}${y}`}function DA({config:r}){return r.emulator?bg(r,IA):`https://${r.authDomain}/${CA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="webStorageSupport";class kA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n_,this._completeRedirectFn=rA,this._overrideRedirectResult=eA}async _openPopup(e,n,s,o){yi(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await P2(e,n,s,km(),o);return NA(e,c,Rg())}async _openRedirect(e,n,s,o){await this._originValidation(e);const c=await P2(e,n,s,km(),o);return L5(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(yi(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await _A(e),s=new sA(e);return n.register("authEvent",o=>(Re(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vm,{type:vm},o=>{const c=o?.[0]?.[vm];c!==void 0&&n(!!c),er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hb()||Lb()||wg()}}const OA=kA;var L2="@firebase/auth",V2="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LA(r){No(new ha("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;Re(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qb(r)},y=new n5(s,o,c,g);return h5(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),No(new ha("auth-internal",e=>{const n=Ai(e.getProvider("auth").getImmediate());return(s=>new MA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ls(L2,V2,PA(r)),ls(L2,V2,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=300,UA=bb("authIdTokenMaxAge")||VA;let U2=null;const zA=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>UA)return;const o=n?.token;U2!==o&&(U2=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function _c(r=Ab()){const e=yg(r,"auth");if(e.isInitialized())return e.getImmediate();const n=d5(r,{popupRedirectResolver:OA,persistence:[Y5,O5,n_]}),s=bb("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=zA(c.toString());j5(n,h,()=>h(n.currentUser)),I5(n,p=>h(p))}}const o=vb("auth");return o&&f5(n,`http://${o}`),n}function BA(){return document.getElementsByTagName("head")?.[0]??document}r5({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const c=lr("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",BA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LA("Browser");var z2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs,d_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,C){function j(){}j.prototype=C.prototype,O.D=C.prototype,O.prototype=new j,O.prototype.constructor=O,O.C=function(k,D,S){for(var I=Array(arguments.length-2),he=2;he<arguments.length;he++)I[he-2]=arguments[he];return C.prototype[D].apply(k,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,C,j){j||(j=0);var k=Array(16);if(typeof C=="string")for(var D=0;16>D;++D)k[D]=C.charCodeAt(j++)|C.charCodeAt(j++)<<8|C.charCodeAt(j++)<<16|C.charCodeAt(j++)<<24;else for(D=0;16>D;++D)k[D]=C[j++]|C[j++]<<8|C[j++]<<16|C[j++]<<24;C=O.g[0],j=O.g[1],D=O.g[2];var S=O.g[3],I=C+(S^j&(D^S))+k[0]+3614090360&4294967295;C=j+(I<<7&4294967295|I>>>25),I=S+(D^C&(j^D))+k[1]+3905402710&4294967295,S=C+(I<<12&4294967295|I>>>20),I=D+(j^S&(C^j))+k[2]+606105819&4294967295,D=S+(I<<17&4294967295|I>>>15),I=j+(C^D&(S^C))+k[3]+3250441966&4294967295,j=D+(I<<22&4294967295|I>>>10),I=C+(S^j&(D^S))+k[4]+4118548399&4294967295,C=j+(I<<7&4294967295|I>>>25),I=S+(D^C&(j^D))+k[5]+1200080426&4294967295,S=C+(I<<12&4294967295|I>>>20),I=D+(j^S&(C^j))+k[6]+2821735955&4294967295,D=S+(I<<17&4294967295|I>>>15),I=j+(C^D&(S^C))+k[7]+4249261313&4294967295,j=D+(I<<22&4294967295|I>>>10),I=C+(S^j&(D^S))+k[8]+1770035416&4294967295,C=j+(I<<7&4294967295|I>>>25),I=S+(D^C&(j^D))+k[9]+2336552879&4294967295,S=C+(I<<12&4294967295|I>>>20),I=D+(j^S&(C^j))+k[10]+4294925233&4294967295,D=S+(I<<17&4294967295|I>>>15),I=j+(C^D&(S^C))+k[11]+2304563134&4294967295,j=D+(I<<22&4294967295|I>>>10),I=C+(S^j&(D^S))+k[12]+1804603682&4294967295,C=j+(I<<7&4294967295|I>>>25),I=S+(D^C&(j^D))+k[13]+4254626195&4294967295,S=C+(I<<12&4294967295|I>>>20),I=D+(j^S&(C^j))+k[14]+2792965006&4294967295,D=S+(I<<17&4294967295|I>>>15),I=j+(C^D&(S^C))+k[15]+1236535329&4294967295,j=D+(I<<22&4294967295|I>>>10),I=C+(D^S&(j^D))+k[1]+4129170786&4294967295,C=j+(I<<5&4294967295|I>>>27),I=S+(j^D&(C^j))+k[6]+3225465664&4294967295,S=C+(I<<9&4294967295|I>>>23),I=D+(C^j&(S^C))+k[11]+643717713&4294967295,D=S+(I<<14&4294967295|I>>>18),I=j+(S^C&(D^S))+k[0]+3921069994&4294967295,j=D+(I<<20&4294967295|I>>>12),I=C+(D^S&(j^D))+k[5]+3593408605&4294967295,C=j+(I<<5&4294967295|I>>>27),I=S+(j^D&(C^j))+k[10]+38016083&4294967295,S=C+(I<<9&4294967295|I>>>23),I=D+(C^j&(S^C))+k[15]+3634488961&4294967295,D=S+(I<<14&4294967295|I>>>18),I=j+(S^C&(D^S))+k[4]+3889429448&4294967295,j=D+(I<<20&4294967295|I>>>12),I=C+(D^S&(j^D))+k[9]+568446438&4294967295,C=j+(I<<5&4294967295|I>>>27),I=S+(j^D&(C^j))+k[14]+3275163606&4294967295,S=C+(I<<9&4294967295|I>>>23),I=D+(C^j&(S^C))+k[3]+4107603335&4294967295,D=S+(I<<14&4294967295|I>>>18),I=j+(S^C&(D^S))+k[8]+1163531501&4294967295,j=D+(I<<20&4294967295|I>>>12),I=C+(D^S&(j^D))+k[13]+2850285829&4294967295,C=j+(I<<5&4294967295|I>>>27),I=S+(j^D&(C^j))+k[2]+4243563512&4294967295,S=C+(I<<9&4294967295|I>>>23),I=D+(C^j&(S^C))+k[7]+1735328473&4294967295,D=S+(I<<14&4294967295|I>>>18),I=j+(S^C&(D^S))+k[12]+2368359562&4294967295,j=D+(I<<20&4294967295|I>>>12),I=C+(j^D^S)+k[5]+4294588738&4294967295,C=j+(I<<4&4294967295|I>>>28),I=S+(C^j^D)+k[8]+2272392833&4294967295,S=C+(I<<11&4294967295|I>>>21),I=D+(S^C^j)+k[11]+1839030562&4294967295,D=S+(I<<16&4294967295|I>>>16),I=j+(D^S^C)+k[14]+4259657740&4294967295,j=D+(I<<23&4294967295|I>>>9),I=C+(j^D^S)+k[1]+2763975236&4294967295,C=j+(I<<4&4294967295|I>>>28),I=S+(C^j^D)+k[4]+1272893353&4294967295,S=C+(I<<11&4294967295|I>>>21),I=D+(S^C^j)+k[7]+4139469664&4294967295,D=S+(I<<16&4294967295|I>>>16),I=j+(D^S^C)+k[10]+3200236656&4294967295,j=D+(I<<23&4294967295|I>>>9),I=C+(j^D^S)+k[13]+681279174&4294967295,C=j+(I<<4&4294967295|I>>>28),I=S+(C^j^D)+k[0]+3936430074&4294967295,S=C+(I<<11&4294967295|I>>>21),I=D+(S^C^j)+k[3]+3572445317&4294967295,D=S+(I<<16&4294967295|I>>>16),I=j+(D^S^C)+k[6]+76029189&4294967295,j=D+(I<<23&4294967295|I>>>9),I=C+(j^D^S)+k[9]+3654602809&4294967295,C=j+(I<<4&4294967295|I>>>28),I=S+(C^j^D)+k[12]+3873151461&4294967295,S=C+(I<<11&4294967295|I>>>21),I=D+(S^C^j)+k[15]+530742520&4294967295,D=S+(I<<16&4294967295|I>>>16),I=j+(D^S^C)+k[2]+3299628645&4294967295,j=D+(I<<23&4294967295|I>>>9),I=C+(D^(j|~S))+k[0]+4096336452&4294967295,C=j+(I<<6&4294967295|I>>>26),I=S+(j^(C|~D))+k[7]+1126891415&4294967295,S=C+(I<<10&4294967295|I>>>22),I=D+(C^(S|~j))+k[14]+2878612391&4294967295,D=S+(I<<15&4294967295|I>>>17),I=j+(S^(D|~C))+k[5]+4237533241&4294967295,j=D+(I<<21&4294967295|I>>>11),I=C+(D^(j|~S))+k[12]+1700485571&4294967295,C=j+(I<<6&4294967295|I>>>26),I=S+(j^(C|~D))+k[3]+2399980690&4294967295,S=C+(I<<10&4294967295|I>>>22),I=D+(C^(S|~j))+k[10]+4293915773&4294967295,D=S+(I<<15&4294967295|I>>>17),I=j+(S^(D|~C))+k[1]+2240044497&4294967295,j=D+(I<<21&4294967295|I>>>11),I=C+(D^(j|~S))+k[8]+1873313359&4294967295,C=j+(I<<6&4294967295|I>>>26),I=S+(j^(C|~D))+k[15]+4264355552&4294967295,S=C+(I<<10&4294967295|I>>>22),I=D+(C^(S|~j))+k[6]+2734768916&4294967295,D=S+(I<<15&4294967295|I>>>17),I=j+(S^(D|~C))+k[13]+1309151649&4294967295,j=D+(I<<21&4294967295|I>>>11),I=C+(D^(j|~S))+k[4]+4149444226&4294967295,C=j+(I<<6&4294967295|I>>>26),I=S+(j^(C|~D))+k[11]+3174756917&4294967295,S=C+(I<<10&4294967295|I>>>22),I=D+(C^(S|~j))+k[2]+718787259&4294967295,D=S+(I<<15&4294967295|I>>>17),I=j+(S^(D|~C))+k[9]+3951481745&4294967295,O.g[0]=O.g[0]+C&4294967295,O.g[1]=O.g[1]+(D+(I<<21&4294967295|I>>>11))&4294967295,O.g[2]=O.g[2]+D&4294967295,O.g[3]=O.g[3]+S&4294967295}s.prototype.u=function(O,C){C===void 0&&(C=O.length);for(var j=C-this.blockSize,k=this.B,D=this.h,S=0;S<C;){if(D==0)for(;S<=j;)o(this,O,S),S+=this.blockSize;if(typeof O=="string"){for(;S<C;)if(k[D++]=O.charCodeAt(S++),D==this.blockSize){o(this,k),D=0;break}}else for(;S<C;)if(k[D++]=O[S++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=C},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var C=1;C<O.length-8;++C)O[C]=0;var j=8*this.o;for(C=O.length-8;C<O.length;++C)O[C]=j&255,j/=256;for(this.u(O),O=Array(16),C=j=0;4>C;++C)for(var k=0;32>k;k+=8)O[j++]=this.g[C]>>>k&255;return O};function c(O,C){var j=p;return Object.prototype.hasOwnProperty.call(j,O)?j[O]:j[O]=C(O)}function h(O,C){this.h=C;for(var j=[],k=!0,D=O.length-1;0<=D;D--){var S=O[D]|0;k&&S==C||(j[D]=S,k=!1)}this.g=j}var p={};function g(O){return-128<=O&&128>O?c(O,function(C){return new h([C|0],0>C?-1:0)}):new h([O|0],0>O?-1:0)}function y(O){if(isNaN(O)||!isFinite(O))return w;if(0>O)return M(y(-O));for(var C=[],j=1,k=0;O>=j;k++)C[k]=O/j|0,j*=4294967296;return new h(C,0)}function x(O,C){if(O.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(O.charAt(0)=="-")return M(x(O.substring(1),C));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var j=y(Math.pow(C,8)),k=w,D=0;D<O.length;D+=8){var S=Math.min(8,O.length-D),I=parseInt(O.substring(D,D+S),C);8>S?(S=y(Math.pow(C,S)),k=k.j(S).add(y(I))):(k=k.j(j),k=k.add(y(I)))}return k}var w=g(0),E=g(1),R=g(16777216);r=h.prototype,r.m=function(){if(V(this))return-M(this).m();for(var O=0,C=1,j=0;j<this.g.length;j++){var k=this.i(j);O+=(0<=k?k:4294967296+k)*C,C*=4294967296}return O},r.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(N(this))return"0";if(V(this))return"-"+M(this).toString(O);for(var C=y(Math.pow(O,6)),j=this,k="";;){var D=W(j,C).g;j=L(j,D.j(C));var S=((0<j.g.length?j.g[0]:j.h)>>>0).toString(O);if(j=D,N(j))return S+k;for(;6>S.length;)S="0"+S;k=S+k}},r.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function N(O){if(O.h!=0)return!1;for(var C=0;C<O.g.length;C++)if(O.g[C]!=0)return!1;return!0}function V(O){return O.h==-1}r.l=function(O){return O=L(this,O),V(O)?-1:N(O)?0:1};function M(O){for(var C=O.g.length,j=[],k=0;k<C;k++)j[k]=~O.g[k];return new h(j,~O.h).add(E)}r.abs=function(){return V(this)?M(this):this},r.add=function(O){for(var C=Math.max(this.g.length,O.g.length),j=[],k=0,D=0;D<=C;D++){var S=k+(this.i(D)&65535)+(O.i(D)&65535),I=(S>>>16)+(this.i(D)>>>16)+(O.i(D)>>>16);k=I>>>16,S&=65535,I&=65535,j[D]=I<<16|S}return new h(j,j[j.length-1]&-2147483648?-1:0)};function L(O,C){return O.add(M(C))}r.j=function(O){if(N(this)||N(O))return w;if(V(this))return V(O)?M(this).j(M(O)):M(M(this).j(O));if(V(O))return M(this.j(M(O)));if(0>this.l(R)&&0>O.l(R))return y(this.m()*O.m());for(var C=this.g.length+O.g.length,j=[],k=0;k<2*C;k++)j[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<O.g.length;D++){var S=this.i(k)>>>16,I=this.i(k)&65535,he=O.i(D)>>>16,Ee=O.i(D)&65535;j[2*k+2*D]+=I*Ee,z(j,2*k+2*D),j[2*k+2*D+1]+=S*Ee,z(j,2*k+2*D+1),j[2*k+2*D+1]+=I*he,z(j,2*k+2*D+1),j[2*k+2*D+2]+=S*he,z(j,2*k+2*D+2)}for(k=0;k<C;k++)j[k]=j[2*k+1]<<16|j[2*k];for(k=C;k<2*C;k++)j[k]=0;return new h(j,0)};function z(O,C){for(;(O[C]&65535)!=O[C];)O[C+1]+=O[C]>>>16,O[C]&=65535,C++}function F(O,C){this.g=O,this.h=C}function W(O,C){if(N(C))throw Error("division by zero");if(N(O))return new F(w,w);if(V(O))return C=W(M(O),C),new F(M(C.g),M(C.h));if(V(C))return C=W(O,M(C)),new F(M(C.g),C.h);if(30<O.g.length){if(V(O)||V(C))throw Error("slowDivide_ only works with positive integers.");for(var j=E,k=C;0>=k.l(O);)j=ee(j),k=ee(k);var D=te(j,1),S=te(k,1);for(k=te(k,2),j=te(j,2);!N(k);){var I=S.add(k);0>=I.l(O)&&(D=D.add(j),S=I),k=te(k,1),j=te(j,1)}return C=L(O,D.j(C)),new F(D,C)}for(D=w;0<=O.l(C);){for(j=Math.max(1,Math.floor(O.m()/C.m())),k=Math.ceil(Math.log(j)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),S=y(j),I=S.j(C);V(I)||0<I.l(O);)j-=k,S=y(j),I=S.j(C);N(S)&&(S=E),D=D.add(S),O=L(O,I)}return new F(D,O)}r.A=function(O){return W(this,O).h},r.and=function(O){for(var C=Math.max(this.g.length,O.g.length),j=[],k=0;k<C;k++)j[k]=this.i(k)&O.i(k);return new h(j,this.h&O.h)},r.or=function(O){for(var C=Math.max(this.g.length,O.g.length),j=[],k=0;k<C;k++)j[k]=this.i(k)|O.i(k);return new h(j,this.h|O.h)},r.xor=function(O){for(var C=Math.max(this.g.length,O.g.length),j=[],k=0;k<C;k++)j[k]=this.i(k)^O.i(k);return new h(j,this.h^O.h)};function ee(O){for(var C=O.g.length+1,j=[],k=0;k<C;k++)j[k]=O.i(k)<<1|O.i(k-1)>>>31;return new h(j,O.h)}function te(O,C){var j=C>>5;C%=32;for(var k=O.g.length-j,D=[],S=0;S<k;S++)D[S]=0<C?O.i(S+j)>>>C|O.i(S+j+1)<<32-C:O.i(S+j);return new h(D,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,d_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=x,cs=h}).apply(typeof z2<"u"?z2:typeof self<"u"?self:typeof window<"u"?window:{});var Pd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h_,nc,f_,Kd,Pm,p_,m_,g_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(d,v,b){return d==Array.prototype||d==Object.prototype||(d[v]=b.value),d};function n(d){d=[typeof globalThis=="object"&&globalThis,d,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pd=="object"&&Pd];for(var v=0;v<d.length;++v){var b=d[v];if(b&&b.Math==Math)return b}throw Error("Cannot find global object")}var s=n(this);function o(d,v){if(v)e:{var b=s;d=d.split(".");for(var A=0;A<d.length-1;A++){var $=d[A];if(!($ in b))break e;b=b[$]}d=d[d.length-1],A=b[d],v=v(A),v!=A&&v!=null&&e(b,d,{configurable:!0,writable:!0,value:v})}}function c(d,v){d instanceof String&&(d+="");var b=0,A=!1,$={next:function(){if(!A&&b<d.length){var ne=b++;return{value:v(ne,d[ne]),done:!1}}return A=!0,{done:!0,value:void 0}}};return $[Symbol.iterator]=function(){return $},$}o("Array.prototype.values",function(d){return d||function(){return c(this,function(v,b){return b})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(d){var v=typeof d;return v=v!="object"?v:d?Array.isArray(d)?"array":v:"null",v=="array"||v=="object"&&typeof d.length=="number"}function y(d){var v=typeof d;return v=="object"&&d!=null||v=="function"}function x(d,v,b){return d.call.apply(d.bind,arguments)}function w(d,v,b){if(!d)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var $=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply($,A),d.apply(v,$)}}return function(){return d.apply(v,arguments)}}function E(d,v,b){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?x:w,E.apply(null,arguments)}function R(d,v){var b=Array.prototype.slice.call(arguments,1);return function(){var A=b.slice();return A.push.apply(A,arguments),d.apply(this,A)}}function N(d,v){function b(){}b.prototype=v.prototype,d.aa=v.prototype,d.prototype=new b,d.prototype.constructor=d,d.Qb=function(A,$,ne){for(var me=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)me[$e-2]=arguments[$e];return v.prototype[$].apply(A,me)}}function V(d){const v=d.length;if(0<v){const b=Array(v);for(let A=0;A<v;A++)b[A]=d[A];return b}return[]}function M(d,v){for(let b=1;b<arguments.length;b++){const A=arguments[b];if(g(A)){const $=d.length||0,ne=A.length||0;d.length=$+ne;for(let me=0;me<ne;me++)d[$+me]=A[me]}else d.push(A)}}class L{constructor(v,b){this.i=v,this.j=b,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function z(d){return/^[\s\xa0]*$/.test(d)}function F(){var d=p.navigator;return d&&(d=d.userAgent)?d:""}function W(d){return W[" "](d),d}W[" "]=function(){};var ee=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function te(d,v,b){for(const A in d)v.call(b,d[A],A,d)}function O(d,v){for(const b in d)v.call(void 0,d[b],b,d)}function C(d){const v={};for(const b in d)v[b]=d[b];return v}const j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(d,v){let b,A;for(let $=1;$<arguments.length;$++){A=arguments[$];for(b in A)d[b]=A[b];for(let ne=0;ne<j.length;ne++)b=j[ne],Object.prototype.hasOwnProperty.call(A,b)&&(d[b]=A[b])}}function D(d){var v=1;d=d.split(":");const b=[];for(;0<v&&d.length;)b.push(d.shift()),v--;return d.length&&b.push(d.join(":")),b}function S(d){p.setTimeout(()=>{throw d},0)}function I(){var d=Pe;let v=null;return d.g&&(v=d.g,d.g=d.g.next,d.g||(d.h=null),v.next=null),v}class he{constructor(){this.h=this.g=null}add(v,b){const A=Ee.get();A.set(v,b),this.h?this.h.next=A:this.g=A,this.h=A}}var Ee=new L(()=>new X,d=>d.reset());class X{constructor(){this.next=this.g=this.h=null}set(v,b){this.h=v,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,ge=!1,Pe=new he,B=()=>{const d=p.Promise.resolve(void 0);fe=()=>{d.then(ae)}};var ae=()=>{for(var d;d=I();){try{d.h.call(d.g)}catch(b){S(b)}var v=Ee;v.j(d),100>v.h&&(v.h++,d.next=v.g,v.g=d)}ge=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function q(d,v){this.type=d,this.g=this.target=v,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var G=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var d=!1,v=Object.defineProperty({},"passive",{get:function(){d=!0}});try{const b=()=>{};p.addEventListener("test",b,v),p.removeEventListener("test",b,v)}catch{}return d})();function de(d,v){if(q.call(this,d?d.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,d){var b=this.type=d.type,A=d.changedTouches&&d.changedTouches.length?d.changedTouches[0]:null;if(this.target=d.target||d.srcElement,this.g=v,v=d.relatedTarget){if(ee){e:{try{W(v.nodeName);var $=!0;break e}catch{}$=!1}$||(v=null)}}else b=="mouseover"?v=d.fromElement:b=="mouseout"&&(v=d.toElement);this.relatedTarget=v,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0),this.button=d.button,this.key=d.key||"",this.ctrlKey=d.ctrlKey,this.altKey=d.altKey,this.shiftKey=d.shiftKey,this.metaKey=d.metaKey,this.pointerId=d.pointerId||0,this.pointerType=typeof d.pointerType=="string"?d.pointerType:le[d.pointerType]||"",this.state=d.state,this.i=d,d.defaultPrevented&&de.aa.h.call(this)}}N(de,q);var le={2:"touch",3:"pen",4:"mouse"};de.prototype.h=function(){de.aa.h.call(this);var d=this.i;d.preventDefault?d.preventDefault():d.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),ye=0;function Ie(d,v,b,A,$){this.listener=d,this.proxy=null,this.src=v,this.type=b,this.capture=!!A,this.ha=$,this.key=++ye,this.da=this.fa=!1}function Ve(d){d.da=!0,d.listener=null,d.proxy=null,d.src=null,d.ha=null}function Qt(d){this.src=d,this.g={},this.h=0}Qt.prototype.add=function(d,v,b,A,$){var ne=d.toString();d=this.g[ne],d||(d=this.g[ne]=[],this.h++);var me=Ln(d,v,A,$);return-1<me?(v=d[me],b||(v.fa=!1)):(v=new Ie(v,this.src,ne,!!A,$),v.fa=b,d.push(v)),v};function Kt(d,v){var b=v.type;if(b in d.g){var A=d.g[b],$=Array.prototype.indexOf.call(A,v,void 0),ne;(ne=0<=$)&&Array.prototype.splice.call(A,$,1),ne&&(Ve(v),d.g[b].length==0&&(delete d.g[b],d.h--))}}function Ln(d,v,b,A){for(var $=0;$<d.length;++$){var ne=d[$];if(!ne.da&&ne.listener==v&&ne.capture==!!b&&ne.ha==A)return $}return-1}var Lr="closure_lm_"+(1e6*Math.random()|0),ws={};function Ta(d,v,b,A,$){if(Array.isArray(v)){for(var ne=0;ne<v.length;ne++)Ta(d,v[ne],b,A,$);return null}return b=Wc(b),d&&d[xe]?d.K(v,b,y(A)?!!A.capture:!1,$):ie(d,v,b,!1,A,$)}function ie(d,v,b,A,$,ne){if(!v)throw Error("Invalid event type");var me=y($)?!!$.capture:!!$,$e=Vn(d);if($e||(d[Lr]=$e=new Qt(d)),b=$e.add(v,b,A,me,ne),b.proxy)return b;if(A=Ne(),b.proxy=A,A.src=d,A.listener=b,d.addEventListener)G||($=me),$===void 0&&($=!1),d.addEventListener(v.toString(),A,$);else if(d.attachEvent)d.attachEvent(ut(v.toString()),A);else if(d.addListener&&d.removeListener)d.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return b}function Ne(){function d(b){return v.call(d.src,d.listener,b)}const v=vn;return d}function je(d,v,b,A,$){if(Array.isArray(v))for(var ne=0;ne<v.length;ne++)je(d,v[ne],b,A,$);else A=y(A)?!!A.capture:!!A,b=Wc(b),d&&d[xe]?(d=d.i,v=String(v).toString(),v in d.g&&(ne=d.g[v],b=Ln(ne,b,A,$),-1<b&&(Ve(ne[b]),Array.prototype.splice.call(ne,b,1),ne.length==0&&(delete d.g[v],d.h--)))):d&&(d=Vn(d))&&(v=d.g[v.toString()],d=-1,v&&(d=Ln(v,b,A,$)),(b=-1<d?v[d]:null)&&Ue(b))}function Ue(d){if(typeof d!="number"&&d&&!d.da){var v=d.src;if(v&&v[xe])Kt(v.i,d);else{var b=d.type,A=d.proxy;v.removeEventListener?v.removeEventListener(b,A,d.capture):v.detachEvent?v.detachEvent(ut(b),A):v.addListener&&v.removeListener&&v.removeListener(A),(b=Vn(v))?(Kt(b,d),b.h==0&&(b.src=null,v[Lr]=null)):Ve(d)}}}function ut(d){return d in ws?ws[d]:ws[d]="on"+d}function vn(d,v){if(d.da)d=!0;else{v=new de(v,this);var b=d.listener,A=d.ha||d.src;d.fa&&Ue(d),d=b.call(A,v)}return d}function Vn(d){return d=d[Lr],d instanceof Qt?d:null}var qo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wc(d){return typeof d=="function"?d:(d[qo]||(d[qo]=function(v){return d.handleEvent(v)}),d[qo])}function bt(){pe.call(this),this.i=new Qt(this),this.M=this,this.F=null}N(bt,pe),bt.prototype[xe]=!0,bt.prototype.removeEventListener=function(d,v,b,A){je(this,d,v,b,A)};function nt(d,v){var b,A=d.F;if(A)for(b=[];A;A=A.F)b.push(A);if(d=d.M,A=v.type||v,typeof v=="string")v=new q(v,d);else if(v instanceof q)v.target=v.target||d;else{var $=v;v=new q(A,d),k(v,$)}if($=!0,b)for(var ne=b.length-1;0<=ne;ne--){var me=v.g=b[ne];$=An(me,A,!0,v)&&$}if(me=v.g=d,$=An(me,A,!0,v)&&$,$=An(me,A,!1,v)&&$,b)for(ne=0;ne<b.length;ne++)me=v.g=b[ne],$=An(me,A,!1,v)&&$}bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var d=this.i,v;for(v in d.g){for(var b=d.g[v],A=0;A<b.length;A++)Ve(b[A]);delete d.g[v],d.h--}}this.F=null},bt.prototype.K=function(d,v,b,A){return this.i.add(String(d),v,!1,b,A)},bt.prototype.L=function(d,v,b,A){return this.i.add(String(d),v,!0,b,A)};function An(d,v,b,A){if(v=d.i.g[String(v)],!v)return!0;v=v.concat();for(var $=!0,ne=0;ne<v.length;++ne){var me=v[ne];if(me&&!me.da&&me.capture==b){var $e=me.listener,Lt=me.ha||me.src;me.fa&&Kt(d.i,me),$=$e.call(Lt,A)!==!1&&$}}return $&&!A.defaultPrevented}function an(d,v,b){if(typeof d=="function")b&&(d=E(d,b));else if(d&&typeof d.handleEvent=="function")d=E(d.handleEvent,d);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:p.setTimeout(d,v||0)}function Xc(d){d.g=an(()=>{d.g=null,d.i&&(d.i=!1,Xc(d))},d.l);const v=d.h;d.h=null,d.m.apply(null,v)}class ef extends pe{constructor(v,b){super(),this.m=v,this.l=b,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:Xc(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(d){pe.call(this),this.h=d,this.g={}}N(Es,pe);var Ts=[];function Ss(d){te(d.g,function(v,b){this.g.hasOwnProperty(b)&&Ue(v)},d),d.g={}}Es.prototype.N=function(){Es.aa.N.call(this),Ss(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tr=p.JSON.stringify,Sa=p.JSON.parse,As=class{stringify(d){return p.JSON.stringify(d,void 0)}parse(d){return p.JSON.parse(d,void 0)}};function Go(){}Go.prototype.h=null;function Yo(d){return d.h||(d.h=d.i())}function $o(){}var Vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ur(){q.call(this,"d")}N(Ur,q);function Qo(){q.call(this,"c")}N(Qo,q);var hr={},Ko=null;function Ni(){return Ko=Ko||new bt}hr.La="serverreachability";function Aa(d){q.call(this,hr.La,d)}N(Aa,q);function Ri(d){const v=Ni();nt(v,new Aa(v))}hr.STAT_EVENT="statevent";function Zc(d,v){q.call(this,hr.STAT_EVENT,d),this.stat=v}N(Zc,q);function pt(d){const v=Ni();nt(v,new Zc(v,d))}hr.Ma="timingevent";function Pt(d,v){q.call(this,hr.Ma,d),this.size=v}N(Pt,q);function Ct(d,v){if(typeof d!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){d()},v)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function Wo(d,v,b,A,$,ne){d.info(function(){if(d.g)if(ne)for(var me="",$e=ne.split("&"),Lt=0;Lt<$e.length;Lt++){var Qe=$e[Lt].split("=");if(1<Qe.length){var Ht=Qe[0];Qe=Qe[1];var Vt=Ht.split("_");me=2<=Vt.length&&Vt[1]=="type"?me+(Ht+"="+Qe+"&"):me+(Ht+"=redacted&")}}else me=null;else me=ne;return"XMLHTTP REQ ("+A+") [attempt "+$+"]: "+v+`
`+b+`
`+me})}function tf(d,v,b,A,$,ne,me){d.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+$+"]: "+v+`
`+b+`
`+ne+" "+me})}function Ci(d,v,b,A){d.info(function(){return"XMLHTTP TEXT ("+v+"): "+Ns(d,b)+(A?" "+A:"")})}function Jc(d,v){d.info(function(){return"TIMEOUT: "+v})}Un.prototype.info=function(){};function Ns(d,v){if(!d.g)return v;if(!v)return null;try{var b=JSON.parse(v);if(b){for(d=0;d<b.length;d++)if(Array.isArray(b[d])){var A=b[d];if(!(2>A.length)){var $=A[1];if(Array.isArray($)&&!(1>$.length)){var ne=$[0];if(ne!="noop"&&ne!="stop"&&ne!="close")for(var me=1;me<$.length;me++)$[me]=""}}}}return tr(b)}catch{return v}}var Ii={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fr;function pr(){}N(pr,Go),pr.prototype.g=function(){return new XMLHttpRequest},pr.prototype.i=function(){return{}},fr=new pr;function fn(d,v,b,A){this.j=d,this.i=v,this.l=b,this.R=A||1,this.U=new Es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tt}function Tt(){this.i=null,this.g="",this.h=!1}var Xo={},Na={};function nr(d,v,b){d.L=1,d.v=Ds(Nn(v)),d.m=b,d.P=!0,Br(d,null)}function Br(d,v){d.F=Date.now(),Rs(d),d.A=Nn(d.v);var b=d.A,A=d.R;Array.isArray(A)||(A=[String(A)]),rl(b.i,"t",A),d.C=0,b=d.j.J,d.h=new Tt,d.g=mu(d.j,b?v:null,!d.m),0<d.O&&(d.M=new ef(E(d.Y,d,d.g),d.O)),v=d.U,b=d.g,A=d.ca;var $="readystatechange";Array.isArray($)||($&&(Ts[0]=$.toString()),$=Ts);for(var ne=0;ne<$.length;ne++){var me=Ta(b,$[ne],A||v.handleEvent,!1,v.h||v);if(!me)break;v.g[me.key]=me}v=d.H?C(d.H):{},d.m?(d.u||(d.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",d.g.ea(d.A,d.u,d.m,v)):(d.u="GET",d.g.ea(d.A,d.u,null,v)),Ri(),Wo(d.i,d.u,d.A,d.l,d.R,d.m)}fn.prototype.ca=function(d){d=d.target;const v=this.M;v&&Hn(d)==3?v.j():this.Y(d)},fn.prototype.Y=function(d){try{if(d==this.g)e:{const Vt=Hn(this.g);var v=this.g.Ba();const Kr=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||ou(this.g)))){this.J||Vt!=4||v==7||(v==8||0>=Kr?Ri(3):Ri(2)),ji(this);var b=this.g.Z();this.X=b;t:if(eu(this)){var A=ou(this.g);d="";var $=A.length,ne=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),mr(this);var me="";break t}this.h.i=new p.TextDecoder}for(v=0;v<$;v++)this.h.h=!0,d+=this.h.i.decode(A[v],{stream:!(ne&&v==$-1)});A.length=0,this.h.g+=d,this.C=0,me=this.h.g}else me=this.g.oa();if(this.o=b==200,tf(this.i,this.u,this.A,this.l,this.R,Vt,b),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,Lt=this.g;if(($e=Lt.g?Lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z($e)){var Qe=$e;break t}}Qe=null}if(b=Qe)Ci(this.i,this.l,b,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cs(this,b);else{this.o=!1,this.s=3,pt(12),Wt(this),mr(this);break e}}if(this.P){b=!0;let Xt;for(;!this.J&&this.C<me.length;)if(Xt=tu(this,me),Xt==Na){Vt==4&&(this.s=4,pt(14),b=!1),Ci(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Xo){this.s=4,pt(15),Ci(this.i,this.l,me,"[Invalid Chunk]"),b=!1;break}else Ci(this.i,this.l,Xt,null),Cs(this,Xt);if(eu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||me.length!=0||this.h.h||(this.s=1,pt(16),b=!1),this.o=this.o&&b,!b)Ci(this.i,this.l,me,"[Invalid Chunked Response]"),Wt(this),mr(this);else if(0<me.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+me.length),zs(Ht),Ht.M=!0,pt(11))}}else Ci(this.i,this.l,me,null),Cs(this,me);Vt==4&&Wt(this),this.o&&!this.J&&(Vt==4?hu(this.j,this):(this.o=!1,Rs(this)))}else of(this.g),b==400&&0<me.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Wt(this),mr(this)}}}catch{}finally{}};function eu(d){return d.g?d.u=="GET"&&d.L!=2&&d.j.Ca:!1}function tu(d,v){var b=d.C,A=v.indexOf(`
`,b);return A==-1?Na:(b=Number(v.substring(b,A)),isNaN(b)?Xo:(A+=1,A+b>v.length?Na:(v=v.slice(A,A+b),d.C=A+b,v)))}fn.prototype.cancel=function(){this.J=!0,Wt(this)};function Rs(d){d.S=Date.now()+d.I,nu(d,d.I)}function nu(d,v){if(d.B!=null)throw Error("WatchDog timer not null");d.B=Ct(E(d.ba,d),v)}function ji(d){d.B&&(p.clearTimeout(d.B),d.B=null)}fn.prototype.ba=function(){this.B=null;const d=Date.now();0<=d-this.S?(Jc(this.i,this.A),this.L!=2&&(Ri(),pt(17)),Wt(this),this.s=2,mr(this)):nu(this,this.S-d)};function mr(d){d.j.G==0||d.J||hu(d.j,d)}function Wt(d){ji(d);var v=d.M;v&&typeof v.ma=="function"&&v.ma(),d.M=null,Ss(d.U),d.g&&(v=d.g,d.g=null,v.abort(),v.ma())}function Cs(d,v){try{var b=d.j;if(b.G!=0&&(b.g==d||Zo(b.h,d))){if(!d.K&&Zo(b.h,d)&&b.G==3){try{var A=b.Da.g.parse(v)}catch{A=null}if(Array.isArray(A)&&A.length==3){var $=A;if($[0]==0){e:if(!b.u){if(b.g)if(b.g.F+3e3<d.F)Ua(b),La(b);else break e;ll(b),pt(18)}}else b.za=$[1],0<b.za-b.T&&37500>$[2]&&b.F&&b.v==0&&!b.C&&(b.C=Ct(E(b.Za,b),6e3));if(1>=Ca(b.h)&&b.ca){try{b.ca()}catch{}b.ca=void 0}}else Qr(b,11)}else if((d.K||b.g==d)&&Ua(b),!z(v))for($=b.Da.g.parse(v),v=0;v<$.length;v++){let Qe=$[v];if(b.T=Qe[0],Qe=Qe[1],b.G==2)if(Qe[0]=="c"){b.K=Qe[1],b.ia=Qe[2];const Ht=Qe[3];Ht!=null&&(b.la=Ht,b.j.info("VER="+b.la));const Vt=Qe[4];Vt!=null&&(b.Aa=Vt,b.j.info("SVER="+b.Aa));const Kr=Qe[5];Kr!=null&&typeof Kr=="number"&&0<Kr&&(A=1.5*Kr,b.L=A,b.j.info("backChannelRequestTimeoutMs_="+A)),A=b;const Xt=d.g;if(Xt){const wr=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wr){var ne=A.h;ne.g||wr.indexOf("spdy")==-1&&wr.indexOf("quic")==-1&&wr.indexOf("h2")==-1||(ne.j=ne.l,ne.g=new Set,ne.h&&(Ia(ne,ne.h),ne.h=null))}if(A.D){const ul=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;ul&&(A.ya=ul,st(A.I,A.D,ul))}}b.G=3,b.l&&b.l.ua(),b.ba&&(b.R=Date.now()-d.F,b.j.info("Handshake RTT: "+b.R+"ms")),A=b;var me=d;if(A.qa=pu(A,A.J?A.ia:null,A.W),me.K){pn(A.h,me);var $e=me,Lt=A.L;Lt&&($e.I=Lt),$e.B&&(ji($e),Rs($e)),A.g=me}else uu(A);0<b.i.length&&Va(b)}else Qe[0]!="stop"&&Qe[0]!="close"||Qr(b,7);else b.G==3&&(Qe[0]=="stop"||Qe[0]=="close"?Qe[0]=="stop"?Qr(b,7):al(b):Qe[0]!="noop"&&b.l&&b.l.ta(Qe),b.v=0)}}Ri(4)}catch{}}var ru=class{constructor(d,v){this.g=d,this.map=v}};function Fr(d){this.l=d||10,p.PerformanceNavigationTiming?(d=p.performance.getEntriesByType("navigation"),d=0<d.length&&(d[0].nextHopProtocol=="hq"||d[0].nextHopProtocol=="h2")):d=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=d?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ra(d){return d.h?!0:d.g?d.g.size>=d.j:!1}function Ca(d){return d.h?1:d.g?d.g.size:0}function Zo(d,v){return d.h?d.h==v:d.g?d.g.has(v):!1}function Ia(d,v){d.g?d.g.add(v):d.h=v}function pn(d,v){d.h&&d.h==v?d.h=null:d.g&&d.g.has(v)&&d.g.delete(v)}Fr.prototype.cancel=function(){if(this.i=Jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const d of this.g.values())d.cancel();this.g.clear()}};function Jo(d){if(d.h!=null)return d.i.concat(d.h.D);if(d.g!=null&&d.g.size!==0){let v=d.i;for(const b of d.g.values())v=v.concat(b.D);return v}return V(d.i)}function nf(d){if(d.V&&typeof d.V=="function")return d.V();if(typeof Map<"u"&&d instanceof Map||typeof Set<"u"&&d instanceof Set)return Array.from(d.values());if(typeof d=="string")return d.split("");if(g(d)){for(var v=[],b=d.length,A=0;A<b;A++)v.push(d[A]);return v}v=[],b=0;for(A in d)v[b++]=d[A];return v}function ja(d){if(d.na&&typeof d.na=="function")return d.na();if(!d.V||typeof d.V!="function"){if(typeof Map<"u"&&d instanceof Map)return Array.from(d.keys());if(!(typeof Set<"u"&&d instanceof Set)){if(g(d)||typeof d=="string"){var v=[];d=d.length;for(var b=0;b<d;b++)v.push(b);return v}v=[],b=0;for(const A in d)v[b++]=A;return v}}}function el(d,v){if(d.forEach&&typeof d.forEach=="function")d.forEach(v,void 0);else if(g(d)||typeof d=="string")Array.prototype.forEach.call(d,v,void 0);else for(var b=ja(d),A=nf(d),$=A.length,ne=0;ne<$;ne++)v.call(void 0,A[ne],b&&b[ne],d)}var Is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rf(d,v){if(d){d=d.split("&");for(var b=0;b<d.length;b++){var A=d[b].indexOf("="),$=null;if(0<=A){var ne=d[b].substring(0,A);$=d[b].substring(A+1)}else ne=d[b];v(ne,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function It(d){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,d instanceof It){this.h=d.h,js(this,d.j),this.o=d.o,this.g=d.g,Di(this,d.s),this.l=d.l;var v=d.i,b=new qr;b.i=v.i,v.g&&(b.g=new Map(v.g),b.h=v.h),Hr(this,b),this.m=d.m}else d&&(v=String(d).match(Is))?(this.h=!1,js(this,v[1]||"",!0),this.o=zn(v[2]||""),this.g=zn(v[3]||"",!0),Di(this,v[4]),this.l=zn(v[5]||"",!0),Hr(this,v[6]||"",!0),this.m=zn(v[7]||"")):(this.h=!1,this.i=new qr(null,this.h))}It.prototype.toString=function(){var d=[],v=this.j;v&&d.push(ks(v,tl,!0),":");var b=this.g;return(b||v=="file")&&(d.push("//"),(v=this.o)&&d.push(ks(v,tl,!0),"@"),d.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b=this.s,b!=null&&d.push(":",String(b))),(b=this.l)&&(this.g&&b.charAt(0)!="/"&&d.push("/"),d.push(ks(b,b.charAt(0)=="/"?sf:nl,!0))),(b=this.i.toString())&&d.push("?",b),(b=this.m)&&d.push("#",ks(b,Da)),d.join("")};function Nn(d){return new It(d)}function js(d,v,b){d.j=b?zn(v,!0):v,d.j&&(d.j=d.j.replace(/:$/,""))}function Di(d,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);d.s=v}else d.s=null}function Hr(d,v,b){v instanceof qr?(d.i=v,su(d.i,d.h)):(b||(v=ks(v,af)),d.i=new qr(v,d.h))}function st(d,v,b){d.i.set(v,b)}function Ds(d){return st(d,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),d}function zn(d,v){return d?v?decodeURI(d.replace(/%25/g,"%2525")):decodeURIComponent(d):""}function ks(d,v,b){return typeof d=="string"?(d=encodeURI(d).replace(v,iu),b&&(d=d.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d):null}function iu(d){return d=d.charCodeAt(0),"%"+(d>>4&15).toString(16)+(d&15).toString(16)}var tl=/[#\/\?@]/g,nl=/[#\?:]/g,sf=/[#\?]/g,af=/[#\?@]/g,Da=/#/g;function qr(d,v){this.h=this.g=null,this.i=d||null,this.j=!!v}function Bn(d){d.g||(d.g=new Map,d.h=0,d.i&&rf(d.i,function(v,b){d.add(decodeURIComponent(v.replace(/\+/g," ")),b)}))}r=qr.prototype,r.add=function(d,v){Bn(this),this.i=null,d=gr(this,d);var b=this.g.get(d);return b||this.g.set(d,b=[]),b.push(v),this.h+=1,this};function Gr(d,v){Bn(d),v=gr(d,v),d.g.has(v)&&(d.i=null,d.h-=d.g.get(v).length,d.g.delete(v))}function Yr(d,v){return Bn(d),v=gr(d,v),d.g.has(v)}r.forEach=function(d,v){Bn(this),this.g.forEach(function(b,A){b.forEach(function($){d.call(v,$,A,this)},this)},this)},r.na=function(){Bn(this);const d=Array.from(this.g.values()),v=Array.from(this.g.keys()),b=[];for(let A=0;A<v.length;A++){const $=d[A];for(let ne=0;ne<$.length;ne++)b.push(v[A])}return b},r.V=function(d){Bn(this);let v=[];if(typeof d=="string")Yr(this,d)&&(v=v.concat(this.g.get(gr(this,d))));else{d=Array.from(this.g.values());for(let b=0;b<d.length;b++)v=v.concat(d[b])}return v},r.set=function(d,v){return Bn(this),this.i=null,d=gr(this,d),Yr(this,d)&&(this.h-=this.g.get(d).length),this.g.set(d,[v]),this.h+=1,this},r.get=function(d,v){return d?(d=this.V(d),0<d.length?String(d[0]):v):v};function rl(d,v,b){Gr(d,v),0<b.length&&(d.i=null,d.g.set(gr(d,v),V(b)),d.h+=b.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const d=[],v=Array.from(this.g.keys());for(var b=0;b<v.length;b++){var A=v[b];const ne=encodeURIComponent(String(A)),me=this.V(A);for(A=0;A<me.length;A++){var $=ne;me[A]!==""&&($+="="+encodeURIComponent(String(me[A]))),d.push($)}}return this.i=d.join("&")};function gr(d,v){return v=String(v),d.j&&(v=v.toLowerCase()),v}function su(d,v){v&&!d.j&&(Bn(d),d.i=null,d.g.forEach(function(b,A){var $=A.toLowerCase();A!=$&&(Gr(this,A),rl(this,$,b))},d)),d.j=v}function Os(d,v){const b=new Un;if(p.Image){const A=new Image;A.onload=R(Fn,b,"TestLoadImage: loaded",!0,v,A),A.onerror=R(Fn,b,"TestLoadImage: error",!1,v,A),A.onabort=R(Fn,b,"TestLoadImage: abort",!1,v,A),A.ontimeout=R(Fn,b,"TestLoadImage: timeout",!1,v,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=d}else v(!1)}function rr(d,v){const b=new Un,A=new AbortController,$=setTimeout(()=>{A.abort(),Fn(b,"TestPingServer: timeout",!1,v)},1e4);fetch(d,{signal:A.signal}).then(ne=>{clearTimeout($),ne.ok?Fn(b,"TestPingServer: ok",!0,v):Fn(b,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout($),Fn(b,"TestPingServer: error",!1,v)})}function Fn(d,v,b,A,$){try{$&&($.onload=null,$.onerror=null,$.onabort=null,$.ontimeout=null),A(b)}catch{}}function Ms(){this.g=new As}function yr(d,v,b){const A=b||"";try{el(d,function($,ne){let me=$;y($)&&(me=tr($)),v.push(A+ne+"="+encodeURIComponent(me))})}catch($){throw v.push(A+"type="+encodeURIComponent("_badmap")),$}}function ki(d){this.l=d.Ub||null,this.j=d.eb||!1}N(ki,Go),ki.prototype.g=function(){return new $r(this.l,this.j)},ki.prototype.i=(function(d){return function(){return d}})({});function $r(d,v){bt.call(this),this.D=d,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N($r,bt),r=$r.prototype,r.open=function(d,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=d,this.A=v,this.readyState=1,xr(this)},r.send=function(d){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};d&&(v.body=d),(this.D||p).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},r.Sa=function(d){if(this.g&&(this.l=d,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=d.headers,this.readyState=2,xr(this)),this.g&&(this.readyState=3,xr(this),this.g)))if(this.responseType==="arraybuffer")d.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in d){if(this.j=d.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;il(this)}else d.text().then(this.Ra.bind(this),this.ga.bind(this))};function il(d){d.j.read().then(d.Pa.bind(d)).catch(d.ga.bind(d))}r.Pa=function(d){if(this.g){if(this.o&&d.value)this.response.push(d.value);else if(!this.o){var v=d.value?d.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!d.done}))&&(this.response=this.responseText+=v)}d.done?vr(this):xr(this),this.readyState==3&&il(this)}},r.Ra=function(d){this.g&&(this.response=this.responseText=d,vr(this))},r.Qa=function(d){this.g&&(this.response=d,vr(this))},r.ga=function(){this.g&&vr(this)};function vr(d){d.readyState=4,d.l=null,d.j=null,d.v=null,xr(d)}r.setRequestHeader=function(d,v){this.u.append(d,v)},r.getResponseHeader=function(d){return this.h&&this.h.get(d.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const d=[],v=this.h.entries();for(var b=v.next();!b.done;)b=b.value,d.push(b[0]+": "+b[1]),b=v.next();return d.join(`\r
`)};function xr(d){d.onreadystatechange&&d.onreadystatechange.call(d)}Object.defineProperty($r.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(d){this.m=d?"include":"same-origin"}});function sl(d){let v="";return te(d,function(b,A){v+=A,v+=":",v+=b,v+=`\r
`}),v}function Ft(d,v,b){e:{for(A in b){var A=!1;break e}A=!0}A||(b=sl(b),typeof d=="string"?b!=null&&encodeURIComponent(String(b)):st(d,v,b))}function et(d){bt.call(this),this.headers=new Map,this.o=d||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(et,bt);var ka=/^https?$/i,Ps=["POST","PUT"];r=et.prototype,r.Ha=function(d){this.J=d},r.ea=function(d,v,b,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+d);v=v?v.toUpperCase():"GET",this.D=d,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fr.g(),this.v=this.o?Yo(this.o):Yo(fr),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(v,String(d),!0),this.B=!1}catch(ne){au(this,ne);return}if(d=b||"",b=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var $ in A)b.set($,A[$]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const ne of A.keys())b.set(ne,A.get(ne));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(b.keys()).find(ne=>ne.toLowerCase()=="content-type"),$=p.FormData&&d instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Ps,v,void 0))||A||$||b.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ne,me]of b)this.g.setRequestHeader(ne,me);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ls(this),this.u=!0,this.g.send(d),this.u=!1}catch(ne){au(this,ne)}};function au(d,v){d.h=!1,d.g&&(d.j=!0,d.g.abort(),d.j=!1),d.l=v,d.m=5,Oa(d),br(d)}function Oa(d){d.A||(d.A=!0,nt(d,"complete"),nt(d,"error"))}r.abort=function(d){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=d||7,nt(this,"complete"),nt(this,"abort"),br(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),et.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ma(this):this.bb())},r.bb=function(){Ma(this)};function Ma(d){if(d.h&&typeof h<"u"&&(!d.v[1]||Hn(d)!=4||d.Z()!=2)){if(d.u&&Hn(d)==4)an(d.Ea,0,d);else if(nt(d,"readystatechange"),Hn(d)==4){d.h=!1;try{const me=d.Z();e:switch(me){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var b;if(!(b=v)){var A;if(A=me===0){var $=String(d.D).match(Is)[1]||null;!$&&p.self&&p.self.location&&($=p.self.location.protocol.slice(0,-1)),A=!ka.test($?$.toLowerCase():"")}b=A}if(b)nt(d,"complete"),nt(d,"success");else{d.m=6;try{var ne=2<Hn(d)?d.g.statusText:""}catch{ne=""}d.l=ne+" ["+d.Z()+"]",Oa(d)}}finally{br(d)}}}}function br(d,v){if(d.g){Ls(d);const b=d.g,A=d.v[0]?()=>{}:null;d.g=null,d.v=null,v||nt(d,"ready");try{b.onreadystatechange=A}catch{}}}function Ls(d){d.I&&(p.clearTimeout(d.I),d.I=null)}r.isActive=function(){return!!this.g};function Hn(d){return d.g?d.g.readyState:0}r.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(d){if(this.g){var v=this.g.responseText;return d&&v.indexOf(d)==0&&(v=v.substring(d.length)),Sa(v)}};function ou(d){try{if(!d.g)return null;if("response"in d.g)return d.g.response;switch(d.H){case"":case"text":return d.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in d.g)return d.g.mozResponseArrayBuffer}return null}catch{return null}}function of(d){const v={};d=(d.g&&2<=Hn(d)&&d.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<d.length;A++){if(z(d[A]))continue;var b=D(d[A]);const $=b[0];if(b=b[1],typeof b!="string")continue;b=b.trim();const ne=v[$]||[];v[$]=ne,ne.push(b)}O(v,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(d,v,b){return b&&b.internalChannelParams&&b.internalChannelParams[d]||v}function Pa(d){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,d),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,d),this.cb=Vs("retryDelaySeedMs",1e4,d),this.Wa=Vs("forwardChannelMaxRetries",2,d),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,d),this.pa=d&&d.xmlHttpFactory||void 0,this.Xa=d&&d.Tb||void 0,this.Ca=d&&d.useFetchStreams||!1,this.L=void 0,this.J=d&&d.supportsCrossDomainXhr||!1,this.K="",this.h=new Fr(d&&d.concurrentRequestLimit),this.Da=new Ms,this.P=d&&d.fastHandshake||!1,this.O=d&&d.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=d&&d.Rb||!1,d&&d.xa&&this.j.xa(),d&&d.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&d&&d.detectBufferingProxy||!1,this.ja=void 0,d&&d.longPollingTimeout&&0<d.longPollingTimeout&&(this.ja=d.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Pa.prototype,r.la=8,r.G=1,r.connect=function(d,v,b,A){pt(0),this.W=d,this.H=v||{},b&&A!==void 0&&(this.H.OSID=b,this.H.OAID=A),this.F=this.X,this.I=pu(this,null,this.W),Va(this)};function al(d){if(lu(d),d.G==3){var v=d.U++,b=Nn(d.I);if(st(b,"SID",d.K),st(b,"RID",v),st(b,"TYPE","terminate"),Us(d,b),v=new fn(d,d.j,v),v.L=2,v.v=Ds(Nn(b)),b=!1,p.navigator&&p.navigator.sendBeacon)try{b=p.navigator.sendBeacon(v.v.toString(),"")}catch{}!b&&p.Image&&(new Image().src=v.v,b=!0),b||(v.g=mu(v.j,null),v.g.ea(v.v)),v.F=Date.now(),Rs(v)}fu(d)}function La(d){d.g&&(zs(d),d.g.cancel(),d.g=null)}function lu(d){La(d),d.u&&(p.clearTimeout(d.u),d.u=null),Ua(d),d.h.cancel(),d.s&&(typeof d.s=="number"&&p.clearTimeout(d.s),d.s=null)}function Va(d){if(!Ra(d.h)&&!d.s){d.s=!0;var v=d.Ga;fe||B(),ge||(fe(),ge=!0),Pe.add(v,d),d.B=0}}function lf(d,v){return Ca(d.h)>=d.h.j-(d.s?1:0)?!1:d.s?(d.i=v.D.concat(d.i),!0):d.G==1||d.G==2||d.B>=(d.Va?0:d.Wa)?!1:(d.s=Ct(E(d.Ga,d,v),cl(d,d.B)),d.B++,!0)}r.Ga=function(d){if(this.s)if(this.s=null,this.G==1){if(!d){this.U=Math.floor(1e5*Math.random()),d=this.U++;const $=new fn(this,this.j,d);let ne=this.o;if(this.S&&(ne?(ne=C(ne),k(ne,this.S)):ne=this.S),this.m!==null||this.O||($.H=ne,ne=null),this.P)e:{for(var v=0,b=0;b<this.i.length;b++){t:{var A=this.i[b];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(v+=A,4096<v){v=b;break e}if(v===4096||b===this.i.length-1){v=b+1;break e}}v=1e3}else v=1e3;v=cu(this,$,v),b=Nn(this.I),st(b,"RID",d),st(b,"CVER",22),this.D&&st(b,"X-HTTP-Session-Id",this.D),Us(this,b),ne&&(this.O?v="headers="+encodeURIComponent(String(sl(ne)))+"&"+v:this.m&&Ft(b,this.m,ne)),Ia(this.h,$),this.Ua&&st(b,"TYPE","init"),this.P?(st(b,"$req",v),st(b,"SID","null"),$.T=!0,nr($,b,null)):nr($,b,v),this.G=2}}else this.G==3&&(d?ol(this,d):this.i.length==0||Ra(this.h)||ol(this))};function ol(d,v){var b;v?b=v.l:b=d.U++;const A=Nn(d.I);st(A,"SID",d.K),st(A,"RID",b),st(A,"AID",d.T),Us(d,A),d.m&&d.o&&Ft(A,d.m,d.o),b=new fn(d,d.j,b,d.B+1),d.m===null&&(b.H=d.o),v&&(d.i=v.D.concat(d.i)),v=cu(d,b,1e3),b.I=Math.round(.5*d.wa)+Math.round(.5*d.wa*Math.random()),Ia(d.h,b),nr(b,A,v)}function Us(d,v){d.H&&te(d.H,function(b,A){st(v,A,b)}),d.l&&el({},function(b,A){st(v,A,b)})}function cu(d,v,b){b=Math.min(d.i.length,b);var A=d.l?E(d.l.Na,d.l,d):null;e:{var $=d.i;let ne=-1;for(;;){const me=["count="+b];ne==-1?0<b?(ne=$[0].g,me.push("ofs="+ne)):ne=0:me.push("ofs="+ne);let $e=!0;for(let Lt=0;Lt<b;Lt++){let Qe=$[Lt].g;const Ht=$[Lt].map;if(Qe-=ne,0>Qe)ne=Math.max(0,$[Lt].g-100),$e=!1;else try{yr(Ht,me,"req"+Qe+"_")}catch{A&&A(Ht)}}if($e){A=me.join("&");break e}}}return d=d.i.splice(0,b),v.D=d,A}function uu(d){if(!d.g&&!d.u){d.Y=1;var v=d.Fa;fe||B(),ge||(fe(),ge=!0),Pe.add(v,d),d.v=0}}function ll(d){return d.g||d.u||3<=d.v?!1:(d.Y++,d.u=Ct(E(d.Fa,d),cl(d,d.v)),d.v++,!0)}r.Fa=function(){if(this.u=null,du(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var d=2*this.R;this.j.info("BP detection timer enabled: "+d),this.A=Ct(E(this.ab,this),d)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),La(this),du(this))};function zs(d){d.A!=null&&(p.clearTimeout(d.A),d.A=null)}function du(d){d.g=new fn(d,d.j,"rpc",d.Y),d.m===null&&(d.g.H=d.o),d.g.O=0;var v=Nn(d.qa);st(v,"RID","rpc"),st(v,"SID",d.K),st(v,"AID",d.T),st(v,"CI",d.F?"0":"1"),!d.F&&d.ja&&st(v,"TO",d.ja),st(v,"TYPE","xmlhttp"),Us(d,v),d.m&&d.o&&Ft(v,d.m,d.o),d.L&&(d.g.I=d.L);var b=d.g;d=d.ia,b.L=1,b.v=Ds(Nn(v)),b.m=null,b.P=!0,Br(b,d)}r.Za=function(){this.C!=null&&(this.C=null,La(this),ll(this),pt(19))};function Ua(d){d.C!=null&&(p.clearTimeout(d.C),d.C=null)}function hu(d,v){var b=null;if(d.g==v){Ua(d),zs(d),d.g=null;var A=2}else if(Zo(d.h,v))b=v.D,pn(d.h,v),A=1;else return;if(d.G!=0){if(v.o)if(A==1){b=v.m?v.m.length:0,v=Date.now()-v.F;var $=d.B;A=Ni(),nt(A,new Pt(A,b)),Va(d)}else uu(d);else if($=v.s,$==3||$==0&&0<v.X||!(A==1&&lf(d,v)||A==2&&ll(d)))switch(b&&0<b.length&&(v=d.h,v.i=v.i.concat(b)),$){case 1:Qr(d,5);break;case 4:Qr(d,10);break;case 3:Qr(d,6);break;default:Qr(d,2)}}}function cl(d,v){let b=d.Ta+Math.floor(Math.random()*d.cb);return d.isActive()||(b*=2),b*v}function Qr(d,v){if(d.j.info("Error code "+v),v==2){var b=E(d.fb,d),A=d.Xa;const $=!A;A=new It(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||js(A,"https"),Ds(A),$?Os(A.toString(),b):rr(A.toString(),b)}else pt(2);d.G=0,d.l&&d.l.sa(v),fu(d),lu(d)}r.fb=function(d){d?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function fu(d){if(d.G=0,d.ka=[],d.l){const v=Jo(d.h);(v.length!=0||d.i.length!=0)&&(M(d.ka,v),M(d.ka,d.i),d.h.i.length=0,V(d.i),d.i.length=0),d.l.ra()}}function pu(d,v,b){var A=b instanceof It?Nn(b):new It(b);if(A.g!="")v&&(A.g=v+"."+A.g),Di(A,A.s);else{var $=p.location;A=$.protocol,v=v?v+"."+$.hostname:$.hostname,$=+$.port;var ne=new It(null);A&&js(ne,A),v&&(ne.g=v),$&&Di(ne,$),b&&(ne.l=b),A=ne}return b=d.D,v=d.ya,b&&v&&st(A,b,v),st(A,"VER",d.la),Us(d,A),A}function mu(d,v,b){if(v&&!d.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=d.Ca&&!d.pa?new et(new ki({eb:b})):new et(d.pa),v.Ha(d.J),v}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function gu(){}r=gu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function za(){}za.prototype.g=function(d,v){return new mn(d,v)};function mn(d,v){bt.call(this),this.g=new Pa(v),this.l=d,this.h=v&&v.messageUrlParams||null,d=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(d?d["X-Client-Protocol"]="webchannel":d={"X-Client-Protocol":"webchannel"}),this.g.o=d,d=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(d?d["X-WebChannel-Content-Type"]=v.messageContentType:d={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(d?d["X-WebChannel-Client-Profile"]=v.va:d={"X-WebChannel-Client-Profile":v.va}),this.g.S=d,(d=v&&v.Sb)&&!z(d)&&(this.g.m=d),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!z(v)&&(this.g.D=v,d=this.h,d!==null&&v in d&&(d=this.h,v in d&&delete d[v])),this.j=new _r(this)}N(mn,bt),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){al(this.g)},mn.prototype.o=function(d){var v=this.g;if(typeof d=="string"){var b={};b.__data__=d,d=b}else this.u&&(b={},b.__data__=tr(d),d=b);v.i.push(new ru(v.Ya++,d)),v.G==3&&Va(v)},mn.prototype.N=function(){this.g.l=null,delete this.j,al(this.g),delete this.g,mn.aa.N.call(this)};function yu(d){Ur.call(this),d.__headers__&&(this.headers=d.__headers__,this.statusCode=d.__status__,delete d.__headers__,delete d.__status__);var v=d.__sm__;if(v){e:{for(const b in v){d=b;break e}d=void 0}(this.i=d)&&(d=this.i,v=v!==null&&d in v?v[d]:void 0),this.data=v}else this.data=d}N(yu,Ur);function vu(){Qo.call(this),this.status=1}N(vu,Qo);function _r(d){this.g=d}N(_r,gu),_r.prototype.ua=function(){nt(this.g,"a")},_r.prototype.ta=function(d){nt(this.g,new yu(d))},_r.prototype.sa=function(d){nt(this.g,new vu)},_r.prototype.ra=function(){nt(this.g,"b")},za.prototype.createWebChannel=za.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,g_=function(){return new za},m_=function(){return Ni()},p_=hr,Pm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ii.NO_ERROR=0,Ii.TIMEOUT=8,Ii.HTTP_ERROR=6,Kd=Ii,zr.COMPLETE="complete",f_=zr,$o.EventType=Vr,Vr.OPEN="a",Vr.CLOSE="b",Vr.ERROR="c",Vr.MESSAGE="d",bt.prototype.listen=bt.prototype.K,nc=$o,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,h_=et}).apply(typeof Pd<"u"?Pd:typeof self<"u"?self:typeof window<"u"?window:{});const B2="@firebase/firestore",F2="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}un.UNAUTHENTICATED=new un(null),un.GOOGLE_CREDENTIALS=new un("google-credentials-uid"),un.FIRST_PARTY=new un("first-party-uid"),un.MOCK_USER=new un("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new mg("@firebase/firestore");function go(){return ma.logLevel}function be(r,...e){if(ma.logLevel<=qe.DEBUG){const n=e.map(Ig);ma.debug(`Firestore (${Vo}): ${r}`,...n)}}function vi(r,...e){if(ma.logLevel<=qe.ERROR){const n=e.map(Ig);ma.error(`Firestore (${Vo}): ${r}`,...n)}}function Ro(r,...e){if(ma.logLevel<=qe.WARN){const n=e.map(Ig);ma.warn(`Firestore (${Vo}): ${r}`,...n)}}function Ig(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,y_(r,s,n)}function y_(r,e,n){let s=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw vi(s),new Error(s)}function tt(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||y_(e,o,s)}function Me(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends Ei{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(un.UNAUTHENTICATED)))}shutdown(){}}class HA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class qA{constructor(e){this.t=e,this.currentUser=un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){tt(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let c=new fi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new fi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=c;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},p=g=>{be("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(be("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new fi)}}),0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(be("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(tt(typeof s.accessToken=="string",31837,{l:s}),new v_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string",2055,{h:e}),new un(e)}}class GA{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=un.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class YA{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new GA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(un.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class H2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $A{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){tt(this.o===void 0,3512);const s=c=>{c.error!=null&&be("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,be("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const o=c=>{be("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):be("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new H2(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(tt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new H2(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=QA(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=e.charAt(o[c]%62))}return s}}function Ge(r,e){return r<e?-1:r>e?1:0}function Lm(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),c=e.charAt(s);if(o!==c)return xm(o)===xm(c)?Ge(o,c):xm(o)?1:-1}return Ge(r.length,e.length)}const KA=55296,WA=57343;function xm(r){const e=r.charCodeAt(0);return e>=KA&&e<=WA}function Co(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="__name__";class Rr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ce(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ce(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Rr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rr?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const c=Rr.compareSegments(e.get(o),n.get(o));if(c!==0)return c}return Ge(e.length,n.length)}static compareSegments(e,n){const s=Rr.isNumericId(e),o=Rr.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Rr.extractNumericId(e).compare(Rr.extractNumericId(n)):Lm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cs.fromString(e.substring(4,e.length-2))}}class ft extends Rr{construct(e,n,s){return new ft(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ve(se.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new ft(n)}static emptyPath(){return new ft([])}}const XA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends Rr{construct(e,n,s){return new nn(e,n,s)}static isValidIdentifier(e){return XA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===q2}static keyField(){return new nn([q2])}static fromServerFormat(e){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new ve(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ve(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ve(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(c(),o++)}if(c(),h)throw new ve(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(n)}static emptyPath(){return new nn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(ft.fromString(e))}static fromName(e){return new Te(ft.fromString(e).popFirst(5))}static empty(){return new Te(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ft.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new ft(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(r,e,n){if(!n)throw new ve(se.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function ZA(r,e,n,s){if(e===!0&&s===!0)throw new ve(se.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function G2(r){if(!Te.isDocumentKey(r))throw new ve(se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Y2(r){if(Te.isDocumentKey(r))throw new ve(se.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function b_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Mh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ce(12329,{type:typeof r})}function Tn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ve(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mh(r);throw new ve(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(r,e){const n={typeString:r};return e&&(n.value=e),n}function zc(r,e){if(!b_(r))throw new ve(se.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&h!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new ve(se.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=-62135596800,Q2=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Q2);return new ct(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ve(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ve(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<$2)throw new ve(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Q2}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zc(e,ct._jsonSchema))return new ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$2;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ct._jsonSchemaVersion="firestore/timestamp/1.0",ct._jsonSchema={type:Mt("string",ct._jsonSchemaVersion),seconds:Mt("number"),nanoseconds:Mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{static fromTimestamp(e){return new Oe(e)}static min(){return new Oe(new ct(0,0))}static max(){return new Oe(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=-1;function JA(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Oe.fromTimestamp(s===1e9?new ct(n+1,0):new ct(n,s));return new ds(o,Te.empty(),e)}function e8(r){return new ds(r.readTime,r.key,wc)}class ds{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ds(Oe.min(),Te.empty(),wc)}static max(){return new ds(Oe.max(),Te.empty(),wc)}}function t8(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=Te.comparator(r.documentKey,e.documentKey),n!==0?n:Ge(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n8="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class r8{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(r){if(r.code!==se.FAILED_PRECONDITION||r.message!==n8)throw r;be("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ue(((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof ue?n:ue.resolve(n)}catch(n){return ue.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):ue.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):ue.reject(n)}static resolve(e){return new ue(((n,s)=>{n(e)}))}static reject(e){return new ue(((n,s)=>{s(e)}))}static waitFor(e){return new ue(((n,s)=>{let o=0,c=0,h=!1;e.forEach((p=>{++o,p.next((()=>{++c,h&&c===o&&n()}),(g=>s(g)))})),h=!0,c===o&&n()}))}static or(e){let n=ue.resolve(!1);for(const s of e)n=n.next((o=>o?ue.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,c)=>{s.push(n.call(this,o,c))})),this.waitFor(s)}static mapArray(e,n){return new ue(((s,o)=>{const c=e.length,h=new Array(c);let p=0;for(let g=0;g<c;g++){const y=g;n(e[y]).next((x=>{h[y]=x,++p,p===c&&s(h)}),(x=>o(x)))}}))}static doWhile(e,n){return new ue(((s,o)=>{const c=()=>{e()===!0?n().next((()=>{c()}),o):s()};c()}))}}function i8(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ph.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=-1;function Lh(r){return r==null}function ph(r){return r===0&&1/r==-1/0}function s8(r){return typeof r=="number"&&Number.isInteger(r)&&!ph(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="";function a8(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=K2(e)),e=o8(r.get(n),e);return K2(e)}function o8(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":n+="";break;case __:n+="";break;default:n+=c}}return n}function K2(r){return r+__+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function xs(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function w_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.comparator=e,this.root=n||tn.EMPTY}insert(e,n){return new xt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ld(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ld(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ld(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ld(this.root,e,this.comparator,!0)}}class Ld{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&o&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,n,s,o,c){this.key=e,this.value=n,this.color=s??tn.RED,this.left=o??tn.EMPTY,this.right=c??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,c){return new tn(e??this.key,n??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const c=s(e,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(e,n,s),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return tn.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ce(27949);return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ce(57766)}get value(){throw Ce(16141)}get color(){throw Ce(16727)}get left(){throw Ce(29726)}get right(){throw Ce(36894)}copy(e,n,s,o,c){return this}insert(e,n,s){return new tn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e,this.data=new xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new X2(this.data.getIterator())}getIteratorFrom(e){return new X2(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Bt(this.comparator);return n.data=e,n}}class X2{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new Pn([])}unionWith(e){let n=new Bt(nn.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new E_("Invalid base64 string: "+c):c}})(e);return new sn(n)}static fromUint8Array(e){const n=(function(o){let c="";for(let h=0;h<o.length;++h)c+=String.fromCharCode(o[h]);return c})(e);return new sn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const l8=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hs(r){if(tt(!!r,39018),typeof r=="string"){let e=0;const n=l8.exec(r);if(tt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Nt(r.seconds),nanos:Nt(r.nanos)}}function Nt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function fs(r){return typeof r=="string"?sn.fromBase64String(r):sn.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="server_timestamp",S_="__type__",A_="__previous_value__",N_="__local_write_time__";function kg(r){return(r?.mapValue?.fields||{})[S_]?.stringValue===T_}function Vh(r){const e=r.mapValue.fields[A_];return kg(e)?Vh(e):e}function Ec(r){const e=hs(r.mapValue.fields[N_].timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c8{constructor(e,n,s,o,c,h,p,g,y,x){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=x}}const mh="(default)";class Tc{constructor(e,n){this.projectId=e,this.database=n||mh}static empty(){return new Tc("","")}get isDefaultDatabase(){return this.database===mh}isEqual(e){return e instanceof Tc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="__type__",u8="__max__",Vd={mapValue:{}},C_="__vector__",gh="value";function ps(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?kg(r)?4:h8(r)?9007199254740991:d8(r)?10:11:Ce(28295,{value:r})}function Mr(r,e){if(r===e)return!0;const n=ps(r);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ec(r).isEqual(Ec(e));case 3:return(function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const h=hs(o.timestampValue),p=hs(c.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,c){return fs(o.bytesValue).isEqual(fs(c.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,c){return Nt(o.geoPointValue.latitude)===Nt(c.geoPointValue.latitude)&&Nt(o.geoPointValue.longitude)===Nt(c.geoPointValue.longitude)})(r,e);case 2:return(function(o,c){if("integerValue"in o&&"integerValue"in c)return Nt(o.integerValue)===Nt(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const h=Nt(o.doubleValue),p=Nt(c.doubleValue);return h===p?ph(h)===ph(p):isNaN(h)&&isNaN(p)}return!1})(r,e);case 9:return Co(r.arrayValue.values||[],e.arrayValue.values||[],Mr);case 10:case 11:return(function(o,c){const h=o.mapValue.fields||{},p=c.mapValue.fields||{};if(W2(h)!==W2(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!Mr(h[g],p[g])))return!1;return!0})(r,e);default:return Ce(52216,{left:r})}}function Sc(r,e){return(r.values||[]).find((n=>Mr(n,e)))!==void 0}function Io(r,e){if(r===e)return 0;const n=ps(r),s=ps(e);if(n!==s)return Ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ge(r.booleanValue,e.booleanValue);case 2:return(function(c,h){const p=Nt(c.integerValue||c.doubleValue),g=Nt(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,e);case 3:return Z2(r.timestampValue,e.timestampValue);case 4:return Z2(Ec(r),Ec(e));case 5:return Lm(r.stringValue,e.stringValue);case 6:return(function(c,h){const p=fs(c),g=fs(h);return p.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(c,h){const p=c.split("/"),g=h.split("/");for(let y=0;y<p.length&&y<g.length;y++){const x=Ge(p[y],g[y]);if(x!==0)return x}return Ge(p.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(c,h){const p=Ge(Nt(c.latitude),Nt(h.latitude));return p!==0?p:Ge(Nt(c.longitude),Nt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return J2(r.arrayValue,e.arrayValue);case 10:return(function(c,h){const p=c.fields||{},g=h.fields||{},y=p[gh]?.arrayValue,x=g[gh]?.arrayValue,w=Ge(y?.values?.length||0,x?.values?.length||0);return w!==0?w:J2(y,x)})(r.mapValue,e.mapValue);case 11:return(function(c,h){if(c===Vd.mapValue&&h===Vd.mapValue)return 0;if(c===Vd.mapValue)return 1;if(h===Vd.mapValue)return-1;const p=c.fields||{},g=Object.keys(p),y=h.fields||{},x=Object.keys(y);g.sort(),x.sort();for(let w=0;w<g.length&&w<x.length;++w){const E=Lm(g[w],x[w]);if(E!==0)return E;const R=Io(p[g[w]],y[x[w]]);if(R!==0)return R}return Ge(g.length,x.length)})(r.mapValue,e.mapValue);default:throw Ce(23264,{he:n})}}function Z2(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ge(r,e);const n=hs(r),s=hs(e),o=Ge(n.seconds,s.seconds);return o!==0?o:Ge(n.nanos,s.nanos)}function J2(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const c=Io(n[o],s[o]);if(c)return c}return Ge(n.length,s.length)}function jo(r){return Vm(r)}function Vm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=hs(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return fs(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return Te.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const c of n.values||[])o?o=!1:s+=",",s+=Vm(c);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const h of s)c?c=!1:o+=",",o+=`${h}:${Vm(n.fields[h])}`;return o+"}"})(r.mapValue):Ce(61005,{value:r})}function Wd(r){switch(ps(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vh(r);return e?16+Wd(e):16;case 5:return 2*r.stringValue.length;case 6:return fs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,c)=>o+Wd(c)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return xs(s.fields,((c,h)=>{o+=c.length+Wd(h)})),o})(r.mapValue);default:throw Ce(13486,{value:r})}}function ex(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Um(r){return!!r&&"integerValue"in r}function Og(r){return!!r&&"arrayValue"in r}function tx(r){return!!r&&"nullValue"in r}function nx(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Xd(r){return!!r&&"mapValue"in r}function d8(r){return(r?.mapValue?.fields||{})[R_]?.stringValue===C_}function cc(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return xs(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=cc(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cc(r.arrayValue.values[n]);return e}return{...r}}function h8(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===u8}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Xd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cc(n)}setAll(e){let n=nn.emptyPath(),s={},o=[];e.forEach(((h,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=p.popLast()}h?s[p.lastSegment()]=cc(h):o.push(p.lastSegment())}));const c=this.getFieldsMap(n);this.applyChanges(c,s,o)}delete(e){const n=this.field(e.popLast());Xd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];Xd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){xs(n,((o,c)=>e[o]=c));for(const o of s)delete e[o]}clone(){return new En(cc(this.value))}}function I_(r){const e=[];return xs(r.fields,((n,s)=>{const o=new nn([n]);if(Xd(s)){const c=I_(s.mapValue).fields;if(c.length===0)e.push(o);else for(const h of c)e.push(o.child(h))}else e.push(o)})),new Pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n,s,o,c,h,p){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=c,this.data=h,this.documentState=p}static newInvalidDocument(e){return new dn(e,0,Oe.min(),Oe.min(),Oe.min(),En.empty(),0)}static newFoundDocument(e,n,s,o){return new dn(e,1,n,Oe.min(),s,o,0)}static newNoDocument(e,n){return new dn(e,2,n,Oe.min(),Oe.min(),En.empty(),0)}static newUnknownDocument(e,n){return new dn(e,3,n,Oe.min(),Oe.min(),En.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n){this.position=e,this.inclusive=n}}function rx(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const c=e[o],h=r.position[o];if(c.field.isKeyField()?s=Te.comparator(Te.fromName(h.referenceValue),n.key):s=Io(h,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function ix(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Mr(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n="asc"){this.field=e,this.dir=n}}function f8(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{}class Ot extends j_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new m8(e,n,s):n==="array-contains"?new v8(e,s):n==="in"?new x8(e,s):n==="not-in"?new b8(e,s):n==="array-contains-any"?new _8(e,s):new Ot(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new g8(e,s):new y8(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Io(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(Io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends j_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new dr(e,n)}matches(e){return D_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function D_(r){return r.op==="and"}function k_(r){return p8(r)&&D_(r)}function p8(r){for(const e of r.filters)if(e instanceof dr)return!1;return!0}function zm(r){if(r instanceof Ot)return r.field.canonicalString()+r.op.toString()+jo(r.value);if(k_(r))return r.filters.map((e=>zm(e))).join(",");{const e=r.filters.map((n=>zm(n))).join(",");return`${r.op}(${e})`}}function O_(r,e){return r instanceof Ot?(function(s,o){return o instanceof Ot&&s.op===o.op&&s.field.isEqual(o.field)&&Mr(s.value,o.value)})(r,e):r instanceof dr?(function(s,o){return o instanceof dr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((c,h,p)=>c&&O_(h,o.filters[p])),!0):!1})(r,e):void Ce(19439)}function M_(r){return r instanceof Ot?(function(n){return`${n.field.canonicalString()} ${n.op} ${jo(n.value)}`})(r):r instanceof dr?(function(n){return n.op.toString()+" {"+n.getFilters().map(M_).join(" ,")+"}"})(r):"Filter"}class m8 extends Ot{constructor(e,n,s){super(e,n,s),this.key=Te.fromName(s.referenceValue)}matches(e){const n=Te.comparator(e.key,this.key);return this.matchesComparison(n)}}class g8 extends Ot{constructor(e,n){super(e,"in",n),this.keys=P_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class y8 extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=P_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function P_(r,e){return(e.arrayValue?.values||[]).map((n=>Te.fromName(n.referenceValue)))}class v8 extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Og(n)&&Sc(n.arrayValue,this.value)}}class x8 extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Sc(this.value.arrayValue,n)}}class b8 extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Sc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Sc(this.value.arrayValue,n)}}class _8 extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Og(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Sc(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w8{constructor(e,n=null,s=[],o=[],c=null,h=null,p=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=h,this.endAt=p,this.Te=null}}function sx(r,e=null,n=[],s=[],o=null,c=null,h=null){return new w8(r,e,n,s,o,c,h)}function Mg(r){const e=Me(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>zm(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),Lh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>jo(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>jo(s))).join(",")),e.Te=n}return e.Te}function Pg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!f8(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!O_(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ix(r.startAt,e.startAt)&&ix(r.endAt,e.endAt)}function Bm(r){return Te.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n=null,s=[],o=[],c=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=h,this.startAt=p,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function E8(r,e,n,s,o,c,h,p){return new Bo(r,e,n,s,o,c,h,p)}function Uh(r){return new Bo(r)}function ax(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function L_(r){return r.collectionGroup!==null}function uc(r){const e=Me(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Bt(nn.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(p=p.add(y.field))}))})),p})(e).forEach((c=>{n.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new Ac(c,s))})),n.has(nn.keyField().canonicalString())||e.Ie.push(new Ac(nn.keyField(),s))}return e.Ie}function jr(r){const e=Me(r);return e.Ee||(e.Ee=T8(e,uc(r))),e.Ee}function T8(r,e){if(r.limitType==="F")return sx(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const c=o.dir==="desc"?"asc":"desc";return new Ac(o.field,c)}));const n=r.endAt?new yh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new yh(r.startAt.position,r.startAt.inclusive):null;return sx(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Fm(r,e){const n=r.filters.concat([e]);return new Bo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function Hm(r,e,n){return new Bo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function zh(r,e){return Pg(jr(r),jr(e))&&r.limitType===e.limitType}function V_(r){return`${Mg(jr(r))}|lt:${r.limitType}`}function yo(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>M_(o))).join(", ")}]`),Lh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>jo(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>jo(o))).join(",")),`Target(${s})`})(jr(r))}; limitType=${r.limitType})`}function Bh(r,e){return e.isFoundDocument()&&(function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):Te.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(r,e)&&(function(s,o){for(const c of uc(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,p,g){const y=rx(h,p,g);return h.inclusive?y<=0:y<0})(s.startAt,uc(s),o)||s.endAt&&!(function(h,p,g){const y=rx(h,p,g);return h.inclusive?y>=0:y>0})(s.endAt,uc(s),o))})(r,e)}function S8(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function U_(r){return(e,n)=>{let s=!1;for(const o of uc(r)){const c=A8(o,e,n);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function A8(r,e,n){const s=r.field.isKeyField()?Te.comparator(e.key,n.key):(function(c,h,p){const g=h.data.field(c),y=p.data.field(c);return g!==null&&y!==null?Io(g,y):Ce(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ce(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],e))return void(o[c]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,((n,s)=>{for(const[o,c]of s)e(o,c)}))}isEmpty(){return w_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N8=new xt(Te.comparator);function xi(){return N8}const z_=new xt(Te.comparator);function rc(...r){let e=z_;for(const n of r)e=e.insert(n.key,n);return e}function B_(r){let e=z_;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function sa(){return dc()}function F_(){return dc()}function dc(){return new wa((r=>r.toString()),((r,e)=>r.isEqual(e)))}const R8=new xt(Te.comparator),C8=new Bt(Te.comparator);function Ye(...r){let e=C8;for(const n of r)e=e.add(n);return e}const I8=new Bt(Ge);function j8(){return I8}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ph(e)?"-0":e}}function H_(r){return{integerValue:""+r}}function D8(r,e){return s8(e)?H_(e):Lg(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this._=void 0}}function k8(r,e,n){return r instanceof Nc?(function(o,c){const h={fields:{[S_]:{stringValue:T_},[N_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&kg(c)&&(c=Vh(c)),c&&(h.fields[A_]=c),{mapValue:h}})(n,e):r instanceof Rc?G_(r,e):r instanceof Cc?Y_(r,e):(function(o,c){const h=q_(o,c),p=ox(h)+ox(o.Ae);return Um(h)&&Um(o.Ae)?H_(p):Lg(o.serializer,p)})(r,e)}function O8(r,e,n){return r instanceof Rc?G_(r,e):r instanceof Cc?Y_(r,e):n}function q_(r,e){return r instanceof vh?(function(s){return Um(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class Nc extends Fh{}class Rc extends Fh{constructor(e){super(),this.elements=e}}function G_(r,e){const n=$_(e);for(const s of r.elements)n.some((o=>Mr(o,s)))||n.push(s);return{arrayValue:{values:n}}}class Cc extends Fh{constructor(e){super(),this.elements=e}}function Y_(r,e){let n=$_(e);for(const s of r.elements)n=n.filter((o=>!Mr(o,s)));return{arrayValue:{values:n}}}class vh extends Fh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function ox(r){return Nt(r.integerValue||r.doubleValue)}function $_(r){return Og(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M8{constructor(e,n){this.field=e,this.transform=n}}function P8(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Rc&&o instanceof Rc||s instanceof Cc&&o instanceof Cc?Co(s.elements,o.elements,Mr):s instanceof vh&&o instanceof vh?Mr(s.Ae,o.Ae):s instanceof Nc&&o instanceof Nc})(r.transform,e.transform)}class L8{constructor(e,n){this.version=e,this.transformResults=n}}class Sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zd(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Hh{}function Q_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Vg(r.key,Sn.none()):new Bc(r.key,r.data,Sn.none());{const n=r.data,s=En.empty();let o=new Bt(nn.comparator);for(let c of e.fields)if(!o.has(c)){let h=n.field(c);h===null&&c.length>1&&(c=c.popLast(),h=n.field(c)),h===null?s.delete(c):s.set(c,h),o=o.add(c)}return new bs(r.key,s,new Pn(o.toArray()),Sn.none())}}function V8(r,e,n){r instanceof Bc?(function(o,c,h){const p=o.value.clone(),g=cx(o.fieldTransforms,c,h.transformResults);p.setAll(g),c.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(r,e,n):r instanceof bs?(function(o,c,h){if(!Zd(o.precondition,c))return void c.convertToUnknownDocument(h.version);const p=cx(o.fieldTransforms,c,h.transformResults),g=c.data;g.setAll(K_(o)),g.setAll(p),c.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,n):(function(o,c,h){c.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,n)}function hc(r,e,n,s){return r instanceof Bc?(function(c,h,p,g){if(!Zd(c.precondition,h))return p;const y=c.value.clone(),x=ux(c.fieldTransforms,g,h);return y.setAll(x),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof bs?(function(c,h,p,g){if(!Zd(c.precondition,h))return p;const y=ux(c.fieldTransforms,g,h),x=h.data;return x.setAll(K_(c)),x.setAll(y),h.convertToFoundDocument(h.version,x).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((w=>w.field)))})(r,e,n,s):(function(c,h,p){return Zd(c.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p})(r,e,n)}function U8(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),c=q_(s.transform,o||null);c!=null&&(n===null&&(n=En.empty()),n.set(s.field,c))}return n||null}function lx(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Co(s,o,((c,h)=>P8(c,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Bc extends Hh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class bs extends Hh{constructor(e,n,s,o,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function K_(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function cx(r,e,n){const s=new Map;tt(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const c=r[o],h=c.transform,p=e.data.field(c.field);s.set(c.field,O8(h,p,n[o]))}return s}function ux(r,e,n){const s=new Map;for(const o of r){const c=o.transform,h=n.data.field(o.field);s.set(o.field,k8(c,h,e))}return s}class Vg extends Hh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z8 extends Hh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B8{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(e.key)&&V8(c,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=hc(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=hc(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=F_();return this.mutations.forEach((o=>{const c=e.get(o.key),h=c.overlayedDocument;let p=this.applyToLocalView(h,c.mutatedFields);p=n.has(o.key)?null:p;const g=Q_(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Oe.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ye())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,((n,s)=>lx(n,s)))&&Co(this.baseMutations,e.baseMutations,((n,s)=>lx(n,s)))}}class Ug{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){tt(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return R8})();const c=e.mutations;for(let h=0;h<c.length;h++)o=o.insert(c[h].key,s[h].version);return new Ug(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F8{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H8{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt,We;function q8(r){switch(r){case se.OK:return Ce(64938);case se.CANCELLED:case se.UNKNOWN:case se.DEADLINE_EXCEEDED:case se.RESOURCE_EXHAUSTED:case se.INTERNAL:case se.UNAVAILABLE:case se.UNAUTHENTICATED:return!1;case se.INVALID_ARGUMENT:case se.NOT_FOUND:case se.ALREADY_EXISTS:case se.PERMISSION_DENIED:case se.FAILED_PRECONDITION:case se.ABORTED:case se.OUT_OF_RANGE:case se.UNIMPLEMENTED:case se.DATA_LOSS:return!0;default:return Ce(15467,{code:r})}}function W_(r){if(r===void 0)return vi("GRPC error has no .code"),se.UNKNOWN;switch(r){case kt.OK:return se.OK;case kt.CANCELLED:return se.CANCELLED;case kt.UNKNOWN:return se.UNKNOWN;case kt.DEADLINE_EXCEEDED:return se.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return se.RESOURCE_EXHAUSTED;case kt.INTERNAL:return se.INTERNAL;case kt.UNAVAILABLE:return se.UNAVAILABLE;case kt.UNAUTHENTICATED:return se.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return se.INVALID_ARGUMENT;case kt.NOT_FOUND:return se.NOT_FOUND;case kt.ALREADY_EXISTS:return se.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return se.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return se.FAILED_PRECONDITION;case kt.ABORTED:return se.ABORTED;case kt.OUT_OF_RANGE:return se.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return se.UNIMPLEMENTED;case kt.DATA_LOSS:return se.DATA_LOSS;default:return Ce(39323,{code:r})}}(We=kt||(kt={}))[We.OK=0]="OK",We[We.CANCELLED=1]="CANCELLED",We[We.UNKNOWN=2]="UNKNOWN",We[We.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",We[We.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",We[We.NOT_FOUND=5]="NOT_FOUND",We[We.ALREADY_EXISTS=6]="ALREADY_EXISTS",We[We.PERMISSION_DENIED=7]="PERMISSION_DENIED",We[We.UNAUTHENTICATED=16]="UNAUTHENTICATED",We[We.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",We[We.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",We[We.ABORTED=10]="ABORTED",We[We.OUT_OF_RANGE=11]="OUT_OF_RANGE",We[We.UNIMPLEMENTED=12]="UNIMPLEMENTED",We[We.INTERNAL=13]="INTERNAL",We[We.UNAVAILABLE=14]="UNAVAILABLE",We[We.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G8(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y8=new cs([4294967295,4294967295],0);function dx(r){const e=G8().encode(r),n=new d_;return n.update(e),new Uint8Array(n.digest())}function hx(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new cs([n,s],0),new cs([o,c],0)]}class zg{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ic(`Invalid padding: ${n}`);if(s<0)throw new ic(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ic(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ic(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=cs.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(cs.fromNumber(s)));return o.compare(Y8)===1&&(o=new cs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=dx(e),[s,o]=hx(n);for(let c=0;c<this.hashCount;c++){const h=this.ye(s,o,c);if(!this.we(h))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),h=new zg(c,o,n);return s.forEach((p=>h.insert(p))),h}insert(e){if(this.ge===0)return;const n=dx(e),[s,o]=hx(n);for(let c=0;c<this.hashCount;c++){const h=this.ye(s,o,c);this.Se(h)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ic extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n,s,o,c){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Fc.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new qh(Oe.min(),o,new xt(Ge),xi(),Ye())}}class Fc{constructor(e,n,s,o,c){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Fc(s,n,Ye(),Ye(),Ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class X_{constructor(e,n){this.targetId=e,this.Ce=n}}class Z_{constructor(e,n,s=sn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class fx{constructor(){this.ve=0,this.Fe=px(),this.Me=sn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ye(),n=Ye(),s=Ye();return this.Fe.forEach(((o,c)=>{switch(c){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Ce(38017,{changeType:c})}})),new Fc(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=px()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,tt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class $8{constructor(e){this.Ge=e,this.ze=new Map,this.je=xi(),this.Je=Ud(),this.He=Ud(),this.Ye=new xt(Ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:Ce(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const c=o.target;if(Bm(c))if(s===0){const h=new Te(c.path);this.et(n,h,dn.newNoDocument(h,Oe.min()))}else tt(s===1,20013,{expectedCount:s});else{const h=this._t(n);if(h!==s){const p=this.ut(e),g=p?this.ct(p,e,h):1;if(g!==0){this.it(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=n;let h,p;try{h=fs(s).toUint8Array()}catch(g){if(g instanceof E_)return Ro("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new zg(h,o,c)}catch(g){return Ro(g instanceof ic?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.ge===0?null:p}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((c=>{const h=this.Ge.ht(),p=`projects/${h.projectId}/databases/${h.database}/documents/${c.path.canonicalString()}`;e.mightContain(p)||(this.et(n,c,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((c,h)=>{const p=this.ot(h);if(p){if(c.current&&Bm(p.target)){const g=new Te(p.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,dn.newNoDocument(g,e))}c.Be&&(n.set(h,c.ke()),c.qe())}}));let s=Ye();this.He.forEach(((c,h)=>{let p=!0;h.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(c))})),this.je.forEach(((c,h)=>h.setReadTime(e)));const o=new qh(e,n,this.Ye,this.je,s);return this.je=xi(),this.Je=Ud(),this.He=Ud(),this.Ye=new xt(Ge),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new fx,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Bt(Ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Bt(Ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||be("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fx),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ud(){return new xt(Te.comparator)}function px(){return new xt(Te.comparator)}const Q8={asc:"ASCENDING",desc:"DESCENDING"},K8={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},W8={and:"AND",or:"OR"};class X8{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qm(r,e){return r.useProto3Json||Lh(e)?e:{value:e}}function xh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function J_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Z8(r,e){return xh(r,e.toTimestamp())}function Dr(r){return tt(!!r,49232),Oe.fromTimestamp((function(n){const s=hs(n);return new ct(s.seconds,s.nanos)})(r))}function Bg(r,e){return Gm(r,e).canonicalString()}function Gm(r,e){const n=(function(o){return new ft(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function e4(r){const e=ft.fromString(r);return tt(s4(e),10190,{key:e.toString()}),e}function Ym(r,e){return Bg(r.databaseId,e.path)}function bm(r,e){const n=e4(e);if(n.get(1)!==r.databaseId.projectId)throw new ve(se.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ve(se.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new Te(n4(n))}function t4(r,e){return Bg(r.databaseId,e)}function J8(r){const e=e4(r);return e.length===4?ft.emptyPath():n4(e)}function $m(r){return new ft(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function n4(r){return tt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function mx(r,e,n){return{name:Ym(r,e),fields:n.value.mapValue.fields}}function eN(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ce(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],c=(function(y,x){return y.useProto3Json?(tt(x===void 0||typeof x=="string",58123),sn.fromBase64String(x||"")):(tt(x===void 0||x instanceof Buffer||x instanceof Uint8Array,16193),sn.fromUint8Array(x||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&(function(y){const x=y.code===void 0?se.UNKNOWN:W_(y.code);return new ve(x,y.message||"")})(h);n=new Z_(s,o,c,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=bm(r,s.document.name),c=Dr(s.document.updateTime),h=s.document.createTime?Dr(s.document.createTime):Oe.min(),p=new En({mapValue:{fields:s.document.fields}}),g=dn.newFoundDocument(o,c,h,p),y=s.targetIds||[],x=s.removedTargetIds||[];n=new Jd(y,x,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=bm(r,s.document),c=s.readTime?Dr(s.readTime):Oe.min(),h=dn.newNoDocument(o,c),p=s.removedTargetIds||[];n=new Jd([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=bm(r,s.document),c=s.removedTargetIds||[];n=new Jd([],c,o,null)}else{if(!("filter"in e))return Ce(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,h=new H8(o,c),p=s.targetId;n=new X_(p,h)}}return n}function tN(r,e){let n;if(e instanceof Bc)n={update:mx(r,e.key,e.value)};else if(e instanceof Vg)n={delete:Ym(r,e.key)};else if(e instanceof bs)n={update:mx(r,e.key,e.data),updateMask:uN(e.fieldMask)};else{if(!(e instanceof z8))return Ce(16599,{Vt:e.type});n={verify:Ym(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(c,h){const p=h.transform;if(p instanceof Nc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Rc)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Cc)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof vh)return{fieldPath:h.field.canonicalString(),increment:p.Ae};throw Ce(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(o,c){return c.updateTime!==void 0?{updateTime:Z8(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Ce(27497)})(r,e.precondition)),n}function nN(r,e){return r&&r.length>0?(tt(e!==void 0,14353),r.map((n=>(function(o,c){let h=o.updateTime?Dr(o.updateTime):Dr(c);return h.isEqual(Oe.min())&&(h=Dr(c)),new L8(h,o.transformResults||[])})(n,e)))):[]}function rN(r,e){return{documents:[t4(r,e.path)]}}function iN(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=t4(r,o);const c=(function(y){if(y.length!==0)return i4(dr.create(y,"and"))})(e.filters);c&&(n.structuredQuery.where=c);const h=(function(y){if(y.length!==0)return y.map((x=>(function(E){return{field:vo(E.field),direction:oN(E.dir)}})(x)))})(e.orderBy);h&&(n.structuredQuery.orderBy=h);const p=qm(r,e.limit);return p!==null&&(n.structuredQuery.limit=p),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:o}}function sN(r){let e=J8(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){tt(s===1,65062);const x=n.from[0];x.allDescendants?o=x.collectionId:e=e.child(x.collectionId)}let c=[];n.where&&(c=(function(w){const E=r4(w);return E instanceof dr&&k_(E)?E.getFilters():[E]})(n.where));let h=[];n.orderBy&&(h=(function(w){return w.map((E=>(function(N){return new Ac(xo(N.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(E)))})(n.orderBy));let p=null;n.limit&&(p=(function(w){let E;return E=typeof w=="object"?w.value:w,Lh(E)?null:E})(n.limit));let g=null;n.startAt&&(g=(function(w){const E=!!w.before,R=w.values||[];return new yh(R,E)})(n.startAt));let y=null;return n.endAt&&(y=(function(w){const E=!w.before,R=w.values||[];return new yh(R,E)})(n.endAt)),E8(e,o,h,c,p,"F",g,y)}function aN(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ce(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function r4(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=xo(n.unaryFilter.field);return Ot.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=xo(n.unaryFilter.field);return Ot.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=xo(n.unaryFilter.field);return Ot.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=xo(n.unaryFilter.field);return Ot.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ce(61313);default:return Ce(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Ot.create(xo(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ce(58110);default:return Ce(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return dr.create(n.compositeFilter.filters.map((s=>r4(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ce(1026)}})(n.compositeFilter.op))})(r):Ce(30097,{filter:r})}function oN(r){return Q8[r]}function lN(r){return K8[r]}function cN(r){return W8[r]}function vo(r){return{fieldPath:r.canonicalString()}}function xo(r){return nn.fromServerFormat(r.fieldPath)}function i4(r){return r instanceof Ot?(function(n){if(n.op==="=="){if(nx(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NAN"}};if(tx(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(nx(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NOT_NAN"}};if(tx(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(n.field),op:lN(n.op),value:n.value}}})(r):r instanceof dr?(function(n){const s=n.getFilters().map((o=>i4(o)));return s.length===1?s[0]:{compositeFilter:{op:cN(n.op),filters:s}}})(r):Ce(54877,{filter:r})}function uN(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function s4(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,s,o,c=Oe.min(),h=Oe.min(),p=sn.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new ss(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.yt=e}}function hN(r){const e=sN({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Hm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this.Cn=new pN}addToCollectionParentIndex(e,n){return this.Cn.add(n),ue.resolve()}getCollectionParents(e,n){return ue.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ue.resolve()}deleteFieldIndex(e,n){return ue.resolve()}deleteAllFieldIndexes(e){return ue.resolve()}createTargetIndexes(e,n){return ue.resolve()}getDocumentsMatchingTarget(e,n){return ue.resolve(null)}getIndexType(e,n){return ue.resolve(0)}getFieldIndexes(e,n){return ue.resolve([])}getNextCollectionGroupToUpdate(e){return ue.resolve(null)}getMinOffset(e,n){return ue.resolve(ds.min())}getMinOffsetFromCollectionGroup(e,n){return ue.resolve(ds.min())}updateCollectionGroup(e,n,s){return ue.resolve()}updateIndexEntries(e,n){return ue.resolve()}}class pN{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Bt(ft.comparator),c=!o.has(s);return this.index[n]=o.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Bt(ft.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},a4=41943040;class wn{static withCacheSize(e){return new wn(e,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn.DEFAULT_COLLECTION_PERCENTILE=10,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wn.DEFAULT=new wn(a4,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wn.DISABLED=new wn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Do(0)}static cr(){return new Do(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx="LruGarbageCollector",mN=1048576;function vx([r,e],[n,s]){const o=Ge(r,n);return o===0?Ge(e,s):o}class gN{constructor(e){this.Ir=e,this.buffer=new Bt(vx),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();vx(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yN{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){be(yx,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zo(n)?be(yx,"Ignoring IndexedDB error during garbage collection: ",n):await Uo(n)}await this.Vr(3e5)}))}}class vN{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return ue.resolve(Ph.ce);const s=new gN(n);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(be("LruGarbageCollector","Garbage collection skipped; disabled"),ue.resolve(gx)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(be("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gx):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,c,h,p,g,y;const x=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(be("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,h=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(s=w,p=Date.now(),this.removeTargets(e,s,n)))).next((w=>(c=w,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((w=>(y=Date.now(),go()<=qe.DEBUG&&be("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-x}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${c} targets in `+(g-p)+`ms
	Removed ${w} documents in `+(y-g)+`ms
Total Duration: ${y-x}ms`),ue.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:w}))))}}function xN(r,e){return new vN(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(){this.changes=new wa((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ue.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&hc(s.mutation,o,Pn.empty(),ct.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Ye()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Ye()){const o=sa();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((c=>{let h=rc();return c.forEach(((p,g)=>{h=h.insert(p,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,n){const s=sa();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Ye())))}populateOverlays(e,n,s){const o=[];return s.forEach((c=>{n.has(c)||o.push(c)})),this.documentOverlayCache.getOverlays(e,o).next((c=>{c.forEach(((h,p)=>{n.set(h,p)}))}))}computeViews(e,n,s,o){let c=xi();const h=dc(),p=(function(){return dc()})();return n.forEach(((g,y)=>{const x=s.get(y.key);o.has(y.key)&&(x===void 0||x.mutation instanceof bs)?c=c.insert(y.key,y):x!==void 0?(h.set(y.key,x.mutation.getFieldMask()),hc(x.mutation,y,x.mutation.getFieldMask(),ct.now())):h.set(y.key,Pn.empty())})),this.recalculateAndSaveOverlays(e,c).next((g=>(g.forEach(((y,x)=>h.set(y,x))),n.forEach(((y,x)=>p.set(y,new _N(x,h.get(y)??null)))),p)))}recalculateAndSaveOverlays(e,n){const s=dc();let o=new xt(((h,p)=>h-p)),c=Ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((h=>{for(const p of h)p.keys().forEach((g=>{const y=n.get(g);if(y===null)return;let x=s.get(g)||Pn.empty();x=p.applyToLocalView(y,x),s.set(g,x);const w=(o.get(p.batchId)||Ye()).add(g);o=o.insert(p.batchId,w)}))})).next((()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),y=g.key,x=g.value,w=F_();x.forEach((E=>{if(!c.has(E)){const R=Q_(n.get(E),s.get(E));R!==null&&w.set(E,R),c=c.add(E)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,w))}return ue.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return(function(h){return Te.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):L_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((c=>{const h=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-c.size):ue.resolve(sa());let p=wc,g=c;return h.next((y=>ue.forEach(y,((x,w)=>(p<w.largestBatchId&&(p=w.largestBatchId),c.get(x)?ue.resolve():this.remoteDocumentCache.getEntry(e,x).next((E=>{g=g.insert(x,E)}))))).next((()=>this.populateOverlays(e,y,c))).next((()=>this.computeViews(e,g,y,Ye()))).next((x=>({batchId:p,changes:B_(x)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Te(n)).next((s=>{let o=rc();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const c=n.collectionGroup;let h=rc();return this.indexManager.getCollectionParents(e,c).next((p=>ue.forEach(p,(g=>{const y=(function(w,E){return new Bo(E,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(n,g.child(c));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((x=>{x.forEach(((w,E)=>{h=h.insert(w,E)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((h=>(c=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,o)))).next((h=>{c.forEach(((g,y)=>{const x=y.getKey();h.get(x)===null&&(h=h.insert(x,dn.newInvalidDocument(x)))}));let p=rc();return h.forEach(((g,y)=>{const x=c.get(g);x!==void 0&&hc(x.mutation,y,Pn.empty(),ct.now()),Bh(n,y)&&(p=p.insert(g,y))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ue.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:Dr(o.createTime)}})(n)),ue.resolve()}getNamedQuery(e,n){return ue.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:hN(o.bundledQuery),readTime:Dr(o.readTime)}})(n)),ue.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.overlays=new xt(Te.comparator),this.qr=new Map}getOverlay(e,n){return ue.resolve(this.overlays.get(n))}getOverlays(e,n){const s=sa();return ue.forEach(n,(o=>this.getOverlay(e,o).next((c=>{c!==null&&s.set(o,c)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,c)=>{this.St(e,n,c)})),ue.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(s)),ue.resolve()}getOverlaysForCollection(e,n,s){const o=sa(),c=n.length+1,h=new Te(n.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&g.largestBatchId>s&&o.set(g.getKey(),g)}return ue.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let c=new xt(((y,x)=>y-x));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let x=c.get(y.largestBatchId);x===null&&(x=sa(),c=c.insert(y.largestBatchId,x)),x.set(y.getKey(),y)}}const p=sa(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,x)=>p.set(y,x))),!(p.size()>=o)););return ue.resolve(p)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new F8(n,s));let c=this.qr.get(n);c===void 0&&(c=Ye(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(){this.sessionToken=sn.EMPTY_BYTE_STRING}getSessionToken(e){return ue.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ue.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.Qr=new Bt($t.$r),this.Ur=new Bt($t.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new $t(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new $t(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new Te(new ft([])),s=new $t(n,e),o=new $t(n,e+1),c=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),c.push(h.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Te(new ft([])),s=new $t(n,e),o=new $t(n,e+1);let c=Ye();return this.Ur.forEachInRange([s,o],(h=>{c=c.add(h.key)})),c}containsKey(e){const n=new $t(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class $t{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Te.comparator(e.key,n.key)||Ge(e.Yr,n.Yr)}static Kr(e,n){return Ge(e.Yr,n.Yr)||Te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Bt($t.$r)}checkEmpty(e){return ue.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new B8(c,n,s,o);this.mutationQueue.push(h);for(const p of o)this.Zr=this.Zr.add(new $t(p.key,c)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return ue.resolve(h)}lookupMutationBatch(e,n){return ue.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),c=o<0?0:o;return ue.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return ue.resolve(this.mutationQueue.length===0?Dg:this.tr-1)}getAllMutationBatches(e){return ue.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new $t(n,0),o=new $t(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,o],(h=>{const p=this.Xr(h.Yr);c.push(p)})),ue.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Bt(Ge);return n.forEach((o=>{const c=new $t(o,0),h=new $t(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,h],(p=>{s=s.add(p.Yr)}))})),ue.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let c=s;Te.isDocumentKey(c)||(c=c.child(""));const h=new $t(new Te(c),0);let p=new Bt(Ge);return this.Zr.forEachWhile((g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(p=p.add(g.Yr)),!0)}),h),ue.resolve(this.ti(p))}ti(e){const n=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){tt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ue.forEach(n.mutations,(o=>{const c=new $t(o.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new $t(n,0),o=this.Zr.firstAfterOrEqual(s);return ue.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ue.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.ri=e,this.docs=(function(){return new xt(Te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),c=o?o.size:0,h=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:h}),this.size+=h-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ue.resolve(s?s.document.mutableCopy():dn.newInvalidDocument(n))}getEntries(e,n){let s=xi();return n.forEach((o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():dn.newInvalidDocument(o))})),ue.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let c=xi();const h=n.path,p=new Te(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:y,value:{document:x}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||t8(e8(x),s)<=0||(o.has(x.key)||Bh(n,x))&&(c=c.insert(x.key,x.mutableCopy()))}return ue.resolve(c)}getAllFromCollectionGroup(e,n,s,o){Ce(9500)}ii(e,n){return ue.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new RN(this)}getSize(e){return ue.resolve(this.size)}}class RN extends bN{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),ue.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.persistence=e,this.si=new wa((n=>Mg(n)),Pg),this.lastRemoteSnapshotVersion=Oe.min(),this.highestTargetId=0,this.oi=0,this._i=new Fg,this.targetCount=0,this.ai=Do.ur()}forEachTarget(e,n){return this.si.forEach(((s,o)=>n(o))),ue.resolve()}getLastRemoteSnapshotVersion(e){return ue.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ue.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ue.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),ue.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Do(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ue.resolve()}updateTargetData(e,n){return this.Pr(n),ue.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ue.resolve()}removeTargets(e,n,s){let o=0;const c=[];return this.si.forEach(((h,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.si.delete(h),c.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),ue.waitFor(c).next((()=>o))}getTargetCount(e){return ue.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return ue.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),ue.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach((h=>{c.push(o.markPotentiallyOrphaned(e,h))})),ue.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ue.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return ue.resolve(s)}containsKey(e,n){return ue.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ph(0),this.li=!1,this.li=!0,this.hi=new SN,this.referenceDelegate=e(this),this.Pi=new CN(this),this.indexManager=new fN,this.remoteDocumentCache=(function(o){return new NN(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new dN(n),this.Ii=new EN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new AN(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){be("MemoryPersistence","Starting transaction:",e);const o=new IN(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((c=>this.referenceDelegate.di(o).next((()=>c)))).toPromise().then((c=>(o.raiseOnCommittedEvent(),c)))}Ai(e,n){return ue.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class IN extends r8{constructor(e){super(),this.currentSequenceNumber=e}}class Hg{constructor(e){this.persistence=e,this.Ri=new Fg,this.Vi=null}static mi(e){return new Hg(e)}get fi(){if(this.Vi)return this.Vi;throw Ce(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),ue.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),ue.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ue.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((c=>this.fi.add(c.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ue.forEach(this.fi,(s=>{const o=Te.fromPath(s);return this.gi(e,o).next((c=>{c||n.removeEntry(o,Oe.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return ue.or([()=>ue.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class bh{constructor(e,n){this.persistence=e,this.pi=new wa((s=>a8(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=xN(this,n)}static mi(e,n){return new bh(e,n)}Ei(){}di(e){return ue.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return ue.forEach(this.pi,((s,o)=>this.br(e,s,o).next((c=>c?ue.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,n).next((p=>{p||(s++,c.removeEntry(h,Oe.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ue.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ue.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ue.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ue.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wd(e.data.value)),n}br(e,n,s){return ue.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return ue.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Ye(),o=Ye();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new qg(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return dS()?8:i8(hn())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const c={result:null};return this.ys(e,n).next((h=>{c.result=h})).next((()=>{if(!c.result)return this.ws(e,n,o,s).next((h=>{c.result=h}))})).next((()=>{if(c.result)return;const h=new jN;return this.Ss(e,n,h).next((p=>{if(c.result=p,this.Vs)return this.bs(e,n,h,p.size)}))})).next((()=>c.result))}bs(e,n,s,o){return s.documentReadCount<this.fs?(go()<=qe.DEBUG&&be("QueryEngine","SDK will not create cache indexes for query:",yo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ue.resolve()):(go()<=qe.DEBUG&&be("QueryEngine","Query:",yo(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(go()<=qe.DEBUG&&be("QueryEngine","The SDK decides to create cache indexes for query:",yo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jr(n))):ue.resolve())}ys(e,n){if(ax(n))return ue.resolve(null);let s=jr(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Hm(n,null,"F"),s=jr(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const h=Ye(...c);return this.ps.getDocuments(e,h).next((p=>this.indexManager.getMinOffset(e,s).next((g=>{const y=this.Ds(n,p);return this.Cs(n,y,h,g.readTime)?this.ys(e,Hm(n,null,"F")):this.vs(e,y,n,g)}))))})))))}ws(e,n,s,o){return ax(n)||o.isEqual(Oe.min())?ue.resolve(null):this.ps.getDocuments(e,s).next((c=>{const h=this.Ds(n,c);return this.Cs(n,h,s,o)?ue.resolve(null):(go()<=qe.DEBUG&&be("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),yo(n)),this.vs(e,h,n,JA(o,wc)).next((p=>p)))}))}Ds(e,n){let s=new Bt(U_(e));return n.forEach(((o,c)=>{Bh(e,c)&&(s=s.add(c))})),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(e,n,s){return go()<=qe.DEBUG&&be("QueryEngine","Using full collection scan to execute query:",yo(n)),this.ps.getDocumentsMatchingQuery(e,n,ds.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((c=>(n.forEach((h=>{c=c.insert(h.key,h)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="LocalStore",kN=3e8;class ON{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new xt(Ge),this.xs=new wa((c=>Mg(c)),Pg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function MN(r,e,n,s){return new ON(r,e,n,s)}async function l4(r,e){const n=Me(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((c=>(o=c,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((c=>{const h=[],p=[];let g=Ye();for(const y of o){h.push(y.batchId);for(const x of y.mutations)g=g.add(x.key)}for(const y of c){p.push(y.batchId);for(const x of y.mutations)g=g.add(x.key)}return n.localDocuments.getDocuments(s,g).next((y=>({Ls:y,removedBatchIds:h,addedBatchIds:p})))}))}))}function PN(r,e){const n=Me(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,g,y,x){const w=y.batch,E=w.keys();let R=ue.resolve();return E.forEach((N=>{R=R.next((()=>x.getEntry(g,N))).next((V=>{const M=y.docVersions.get(N);tt(M!==null,48541),V.version.compareTo(M)<0&&(w.applyToRemoteDocument(V,y),V.isValidDocument()&&(V.setReadTime(y.commitVersion),x.addEntry(V)))}))})),R.next((()=>p.mutationQueue.removeMutationBatch(g,w)))})(n,s,e,c).next((()=>c.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let g=Ye();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(g=g.add(p.batch.mutations[y].key));return g})(e)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function c4(r){const e=Me(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function LN(r,e){const n=Me(r),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const h=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const p=[];e.targetChanges.forEach(((x,w)=>{const E=o.get(w);if(!E)return;p.push(n.Pi.removeMatchingKeys(c,x.removedDocuments,w).next((()=>n.Pi.addMatchingKeys(c,x.addedDocuments,w))));let R=E.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(w)!==null?R=R.withResumeToken(sn.EMPTY_BYTE_STRING,Oe.min()).withLastLimboFreeSnapshotVersion(Oe.min()):x.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(x.resumeToken,s)),o=o.insert(w,R),(function(V,M,L){return V.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=kN?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(E,R,x)&&p.push(n.Pi.updateTargetData(c,R))}));let g=xi(),y=Ye();if(e.documentUpdates.forEach((x=>{e.resolvedLimboDocuments.has(x)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(c,x))})),p.push(VN(c,h,e.documentUpdates).next((x=>{g=x.ks,y=x.qs}))),!s.isEqual(Oe.min())){const x=n.Pi.getLastRemoteSnapshotVersion(c).next((w=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s)));p.push(x)}return ue.waitFor(p).next((()=>h.apply(c))).next((()=>n.localDocuments.getLocalViewOfDocuments(c,g,y))).next((()=>g))})).then((c=>(n.Ms=o,c)))}function VN(r,e,n){let s=Ye(),o=Ye();return n.forEach((c=>s=s.add(c))),e.getEntries(r,s).next((c=>{let h=xi();return n.forEach(((p,g)=>{const y=c.get(p);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(Oe.min())?(e.removeEntry(p,g.readTime),h=h.insert(p,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(p,g)):be(Gg,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function UN(r,e){const n=Me(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Dg),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function zN(r,e){const n=Me(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,e).next((c=>c?(o=c,ue.resolve(o)):n.Pi.allocateTargetId(s).next((h=>(o=new ss(e,h,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Qm(r,e,n){const s=Me(r),o=s.Ms.get(e),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!zo(h))throw h;be(Gg,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function xx(r,e,n){const s=Me(r);let o=Oe.min(),c=Ye();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,y,x){const w=Me(g),E=w.xs.get(x);return E!==void 0?ue.resolve(w.Ms.get(E)):w.Pi.getTargetData(y,x)})(s,h,jr(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,p.targetId).next((g=>{c=g}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,n?o:Oe.min(),n?c:Ye()))).next((p=>(BN(s,S8(e),p),{documents:p,Qs:c})))))}function BN(r,e,n){let s=r.Os.get(e)||Oe.min();n.forEach(((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),r.Os.set(e,s)}class bx{constructor(){this.activeTargetIds=j8()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FN{constructor(){this.Mo=new bx,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new bx,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x="ConnectivityMonitor";class wx{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){be(_x,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){be(_x,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zd=null;function Km(){return zd===null?zd=(function(){return 268435456+Math.round(2147483648*Math.random())})():zd++,"0x"+zd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="RestConnection",qN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class GN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===mh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,c){const h=Km(),p=this.zo(e,n.toUriEncodedString());be(_m,`Sending RPC '${e}' ${h}:`,p,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,c);const{host:y}=new URL(p),x=Mo(y);return this.Jo(e,p,g,s,x).then((w=>(be(_m,`Received RPC '${e}' ${h}: `,w),w)),(w=>{throw Ro(_m,`RPC '${e}' ${h} failed with error: `,w,"url: ",p,"request:",s),w}))}Ho(e,n,s,o,c,h){return this.Go(e,n,s,o,c)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Vo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,c)=>e[c]=o)),s&&s.headers.forEach(((o,c)=>e[c]=o))}zo(e,n){const s=qN[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="WebChannelConnection";class $N extends GN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,c){const h=Km();return new Promise(((p,g)=>{const y=new h_;y.setWithCredentials(!0),y.listenOnce(f_.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Kd.NO_ERROR:const w=y.getResponseJson();be(cn,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(w)),p(w);break;case Kd.TIMEOUT:be(cn,`RPC '${e}' ${h} timed out`),g(new ve(se.DEADLINE_EXCEEDED,"Request time out"));break;case Kd.HTTP_ERROR:const E=y.getStatus();if(be(cn,`RPC '${e}' ${h} failed with status:`,E,"response text:",y.getResponseText()),E>0){let R=y.getResponseJson();Array.isArray(R)&&(R=R[0]);const N=R?.error;if(N&&N.status&&N.message){const V=(function(L){const z=L.toLowerCase().replace(/_/g,"-");return Object.values(se).indexOf(z)>=0?z:se.UNKNOWN})(N.status);g(new ve(V,N.message))}else g(new ve(se.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ve(se.UNAVAILABLE,"Connection failed."));break;default:Ce(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{be(cn,`RPC '${e}' ${h} completed.`)}}));const x=JSON.stringify(o);be(cn,`RPC '${e}' ${h} sending request:`,o),y.send(n,"POST",x,s,15)}))}T_(e,n,s){const o=Km(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=g_(),p=m_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const x=c.join("");be(cn,`Creating RPC '${e}' stream ${o}: ${x}`,g);const w=h.createWebChannel(x,g);this.I_(w);let E=!1,R=!1;const N=new YN({Yo:M=>{R?be(cn,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(E||(be(cn,`Opening RPC '${e}' stream ${o} transport.`),w.open(),E=!0),be(cn,`RPC '${e}' stream ${o} sending:`,M),w.send(M))},Zo:()=>w.close()}),V=(M,L,z)=>{M.listen(L,(F=>{try{z(F)}catch(W){setTimeout((()=>{throw W}),0)}}))};return V(w,nc.EventType.OPEN,(()=>{R||(be(cn,`RPC '${e}' stream ${o} transport opened.`),N.o_())})),V(w,nc.EventType.CLOSE,(()=>{R||(R=!0,be(cn,`RPC '${e}' stream ${o} transport closed`),N.a_(),this.E_(w))})),V(w,nc.EventType.ERROR,(M=>{R||(R=!0,Ro(cn,`RPC '${e}' stream ${o} transport errored. Name:`,M.name,"Message:",M.message),N.a_(new ve(se.UNAVAILABLE,"The operation could not be completed")))})),V(w,nc.EventType.MESSAGE,(M=>{if(!R){const L=M.data[0];tt(!!L,16349);const z=L,F=z?.error||z[0]?.error;if(F){be(cn,`RPC '${e}' stream ${o} received error:`,F);const W=F.status;let ee=(function(C){const j=kt[C];if(j!==void 0)return W_(j)})(W),te=F.message;ee===void 0&&(ee=se.INTERNAL,te="Unknown error status: "+W+" with message "+F.message),R=!0,N.a_(new ve(ee,te)),w.close()}else be(cn,`RPC '${e}' stream ${o} received:`,L),N.u_(L)}})),V(p,p_.STAT_EVENT,(M=>{M.stat===Pm.PROXY?be(cn,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===Pm.NOPROXY&&be(cn,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function wm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(r){return new X8(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e,n,s=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&be("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex="PersistentStream";class d4{constructor(e,n,s,o,c,h,p,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=c,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new u4(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===se.RESOURCE_EXHAUSTED?(vi(n.toString()),vi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===se.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new ve(se.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return be(Ex,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(be(Ex,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class QN extends d4{constructor(e,n,s,o,c,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,h),this.serializer=c}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=eN(this.serializer,e),s=(function(c){if(!("targetChange"in c))return Oe.min();const h=c.targetChange;return h.targetIds&&h.targetIds.length?Oe.min():h.readTime?Dr(h.readTime):Oe.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=$m(this.serializer),n.addTarget=(function(c,h){let p;const g=h.target;if(p=Bm(g)?{documents:rN(c,g)}:{query:iN(c,g).ft},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=J_(c,h.resumeToken);const y=qm(c,h.expectedCount);y!==null&&(p.expectedCount=y)}else if(h.snapshotVersion.compareTo(Oe.min())>0){p.readTime=xh(c,h.snapshotVersion.toTimestamp());const y=qm(c,h.expectedCount);y!==null&&(p.expectedCount=y)}return p})(this.serializer,e);const s=aN(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=$m(this.serializer),n.removeTarget=e,this.q_(n)}}class KN extends d4{constructor(e,n,s,o,c,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,h),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return tt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,tt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){tt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=nN(e.writeResults,e.commitTime),s=Dr(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=$m(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>tN(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{}class XN extends WN{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ve(se.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,h])=>this.connection.Go(e,Gm(n,s),o,c,h))).catch((c=>{throw c.name==="FirebaseError"?(c.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ve(se.UNKNOWN,c.toString())}))}Ho(e,n,s,o,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,p])=>this.connection.Ho(e,Gm(n,s),o,h,p,c))).catch((h=>{throw h.name==="FirebaseError"?(h.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ve(se.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class ZN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(vi(n),this.aa=!1):be("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="RemoteStore";class JN{constructor(e,n,s,o,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{Ea(this)&&(be(ga,"Restarting streams for network reachability change."),await(async function(g){const y=Me(g);y.Ea.add(4),await Hc(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Yh(y)})(this))}))})),this.Ra=new ZN(s,o)}}async function Yh(r){if(Ea(r))for(const e of r.da)await e(!0)}async function Hc(r){for(const e of r.da)await e(!1)}function h4(r,e){const n=Me(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Kg(n)?Qg(n):Fo(n).O_()&&$g(n,e))}function Yg(r,e){const n=Me(r),s=Fo(n);n.Ia.delete(e),s.O_()&&f4(n,e),n.Ia.size===0&&(s.O_()?s.L_():Ea(n)&&n.Ra.set("Unknown"))}function $g(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Oe.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fo(r).Y_(e)}function f4(r,e){r.Va.Ue(e),Fo(r).Z_(e)}function Qg(r){r.Va=new $8({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Fo(r).start(),r.Ra.ua()}function Kg(r){return Ea(r)&&!Fo(r).x_()&&r.Ia.size>0}function Ea(r){return Me(r).Ea.size===0}function p4(r){r.Va=void 0}async function eR(r){r.Ra.set("Online")}async function tR(r){r.Ia.forEach(((e,n)=>{$g(r,e)}))}async function nR(r,e){p4(r),Kg(r)?(r.Ra.ha(e),Qg(r)):r.Ra.set("Unknown")}async function rR(r,e,n){if(r.Ra.set("Online"),e instanceof Z_&&e.state===2&&e.cause)try{await(async function(o,c){const h=c.cause;for(const p of c.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ia.delete(p),o.Va.removeTarget(p))})(r,e)}catch(s){be(ga,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _h(r,s)}else if(e instanceof Jd?r.Va.Ze(e):e instanceof X_?r.Va.st(e):r.Va.tt(e),!n.isEqual(Oe.min()))try{const s=await c4(r.localStore);n.compareTo(s)>=0&&await(function(c,h){const p=c.Va.Tt(h);return p.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const x=c.Ia.get(y);x&&c.Ia.set(y,x.withResumeToken(g.resumeToken,h))}})),p.targetMismatches.forEach(((g,y)=>{const x=c.Ia.get(g);if(!x)return;c.Ia.set(g,x.withResumeToken(sn.EMPTY_BYTE_STRING,x.snapshotVersion)),f4(c,g);const w=new ss(x.target,g,y,x.sequenceNumber);$g(c,w)})),c.remoteSyncer.applyRemoteEvent(p)})(r,n)}catch(s){be(ga,"Failed to raise snapshot:",s),await _h(r,s)}}async function _h(r,e,n){if(!zo(e))throw e;r.Ea.add(1),await Hc(r),r.Ra.set("Offline"),n||(n=()=>c4(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{be(ga,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await Yh(r)}))}function m4(r,e){return e().catch((n=>_h(r,n,e)))}async function $h(r){const e=Me(r),n=ms(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Dg;for(;iR(e);)try{const o=await UN(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,sR(e,o)}catch(o){await _h(e,o)}g4(e)&&y4(e)}function iR(r){return Ea(r)&&r.Ta.length<10}function sR(r,e){r.Ta.push(e);const n=ms(r);n.O_()&&n.X_&&n.ea(e.mutations)}function g4(r){return Ea(r)&&!ms(r).x_()&&r.Ta.length>0}function y4(r){ms(r).start()}async function aR(r){ms(r).ra()}async function oR(r){const e=ms(r);for(const n of r.Ta)e.ea(n.mutations)}async function lR(r,e,n){const s=r.Ta.shift(),o=Ug.from(s,e,n);await m4(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await $h(r)}async function cR(r,e){e&&ms(r).X_&&await(async function(s,o){if((function(h){return q8(h)&&h!==se.ABORTED})(o.code)){const c=s.Ta.shift();ms(s).B_(),await m4(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o))),await $h(s)}})(r,e),g4(r)&&y4(r)}async function Tx(r,e){const n=Me(r);n.asyncQueue.verifyOperationInProgress(),be(ga,"RemoteStore received new credentials");const s=Ea(n);n.Ea.add(3),await Hc(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Yh(n)}async function uR(r,e){const n=Me(r);e?(n.Ea.delete(2),await Yh(n)):e||(n.Ea.add(2),await Hc(n),n.Ra.set("Unknown"))}function Fo(r){return r.ma||(r.ma=(function(n,s,o){const c=Me(n);return c.sa(),new QN(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:eR.bind(null,r),t_:tR.bind(null,r),r_:nR.bind(null,r),H_:rR.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Kg(r)?Qg(r):r.Ra.set("Unknown")):(await r.ma.stop(),p4(r))}))),r.ma}function ms(r){return r.fa||(r.fa=(function(n,s,o){const c=Me(n);return c.sa(),new KN(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:aR.bind(null,r),r_:cR.bind(null,r),ta:oR.bind(null,r),na:lR.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await $h(r)):(await r.fa.stop(),r.Ta.length>0&&(be(ga,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n,s,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,c){const h=Date.now()+s,p=new Wg(e,n,h,o,c);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(se.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xg(r,e){if(vi("AsyncQueue",`${e}: ${r}`),zo(r))return new ve(se.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{static emptySet(e){return new To(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||Te.comparator(n.key,s.key):(n,s)=>Te.comparator(n.key,s.key),this.keyedMap=rc(),this.sortedSet=new xt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof To)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new To;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this.ga=new xt(Te.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ce(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class ko{constructor(e,n,s,o,c,h,p,g,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,c){const h=[];return n.forEach((p=>{h.push({type:0,doc:p})})),new ko(e,n,To.emptySet(n),h,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class hR{constructor(){this.queries=Ax(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Me(n),c=o.queries;o.queries=Ax(),c.forEach(((h,p)=>{for(const g of p.Sa)g.onError(s)}))})(this,new ve(se.ABORTED,"Firestore shutting down"))}}function Ax(){return new wa((r=>V_(r)),zh)}async function Zg(r,e){const n=Me(r);let s=3;const o=e.query;let c=n.queries.get(o);c?!c.ba()&&e.Da()&&(s=2):(c=new dR,s=e.Da()?0:1);try{switch(s){case 0:c.wa=await n.onListen(o,!0);break;case 1:c.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(h){const p=Xg(h,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(p)}n.queries.set(o,c),c.Sa.push(e),e.va(n.onlineState),c.wa&&e.Fa(c.wa)&&e0(n)}async function Jg(r,e){const n=Me(r),s=e.query;let o=3;const c=n.queries.get(s);if(c){const h=c.Sa.indexOf(e);h>=0&&(c.Sa.splice(h,1),c.Sa.length===0?o=e.Da()?0:1:!c.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function fR(r,e){const n=Me(r);let s=!1;for(const o of e){const c=o.query,h=n.queries.get(c);if(h){for(const p of h.Sa)p.Fa(o)&&(s=!0);h.wa=o}}s&&e0(n)}function pR(r,e,n){const s=Me(r),o=s.queries.get(e);if(o)for(const c of o.Sa)c.onError(n);s.queries.delete(e)}function e0(r){r.Ca.forEach((e=>{e.next()}))}var Wm,Nx;(Nx=Wm||(Wm={})).Ma="default",Nx.Cache="cache";class t0{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new ko(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Wm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e){this.key=e}}class x4{constructor(e){this.key=e}}class mR{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ye(),this.mutatedKeys=Ye(),this.eu=U_(e),this.tu=new To(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new Sx,o=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,h=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((x,w)=>{const E=o.get(x),R=Bh(this.query,w)?w:null,N=!!E&&this.mutatedKeys.has(E.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let M=!1;E&&R?E.data.isEqual(R.data)?N!==V&&(s.track({type:3,doc:R}),M=!0):this.su(E,R)||(s.track({type:2,doc:R}),M=!0,(g&&this.eu(R,g)>0||y&&this.eu(R,y)<0)&&(p=!0)):!E&&R?(s.track({type:0,doc:R}),M=!0):E&&!R&&(s.track({type:1,doc:E}),M=!0,(g||y)&&(p=!0)),M&&(R?(h=h.add(R),c=V?c.add(x):c.delete(x)):(h=h.delete(x),c=c.delete(x)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const x=this.query.limitType==="F"?h.last():h.first();h=h.delete(x.key),c=c.delete(x.key),s.track({type:1,doc:x})}return{tu:h,iu:s,Cs:p,mutatedKeys:c}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((x,w)=>(function(R,N){const V=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ce(20277,{Rt:M})}};return V(R)-V(N)})(x.type,w.type)||this.eu(x.doc,w.doc))),this.ou(s),o=o??!1;const p=n&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,y=g!==this.Za;return this.Za=g,h.length!==0||y?{snapshot:new ko(this.query,e.tu,c,h,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Sx,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ye(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new x4(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new v4(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ko.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const n0="SyncEngine";class gR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class yR{constructor(e){this.key=e,this.hu=!1}}class vR{constructor(e,n,s,o,c,h){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new wa((p=>V_(p)),zh),this.Iu=new Map,this.Eu=new Set,this.du=new xt(Te.comparator),this.Au=new Map,this.Ru=new Fg,this.Vu={},this.mu=new Map,this.fu=Do.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xR(r,e,n=!0){const s=S4(r);let o;const c=s.Tu.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.lu()):o=await b4(s,e,n,!0),o}async function bR(r,e){const n=S4(r);await b4(n,e,!0,!1)}async function b4(r,e,n,s){const o=await zN(r.localStore,jr(e)),c=o.targetId,h=r.sharedClientState.addLocalQueryTarget(c,n);let p;return s&&(p=await _R(r,e,c,h==="current",o.resumeToken)),r.isPrimaryClient&&n&&h4(r.remoteStore,o),p}async function _R(r,e,n,s,o){r.pu=(w,E,R)=>(async function(V,M,L,z){let F=M.view.ru(L);F.Cs&&(F=await xx(V.localStore,M.query,!1).then((({documents:O})=>M.view.ru(O,F))));const W=z&&z.targetChanges.get(M.targetId),ee=z&&z.targetMismatches.get(M.targetId)!=null,te=M.view.applyChanges(F,V.isPrimaryClient,W,ee);return Cx(V,M.targetId,te.au),te.snapshot})(r,w,E,R);const c=await xx(r.localStore,e,!0),h=new mR(e,c.Qs),p=h.ru(c.documents),g=Fc.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=h.applyChanges(p,r.isPrimaryClient,g);Cx(r,n,y.au);const x=new gR(e,n,h);return r.Tu.set(e,x),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),y.snapshot}async function wR(r,e,n){const s=Me(r),o=s.Tu.get(e),c=s.Iu.get(o.targetId);if(c.length>1)return s.Iu.set(o.targetId,c.filter((h=>!zh(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Qm(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Yg(s.remoteStore,o.targetId),Xm(s,o.targetId)})).catch(Uo)):(Xm(s,o.targetId),await Qm(s.localStore,o.targetId,!0))}async function ER(r,e){const n=Me(r),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Yg(n.remoteStore,s.targetId))}async function TR(r,e,n){const s=jR(r);try{const o=await(function(h,p){const g=Me(h),y=ct.now(),x=p.reduce(((R,N)=>R.add(N.key)),Ye());let w,E;return g.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let N=xi(),V=Ye();return g.Ns.getEntries(R,x).next((M=>{N=M,N.forEach(((L,z)=>{z.isValidDocument()||(V=V.add(L))}))})).next((()=>g.localDocuments.getOverlayedDocuments(R,N))).next((M=>{w=M;const L=[];for(const z of p){const F=U8(z,w.get(z.key).overlayedDocument);F!=null&&L.push(new bs(z.key,F,I_(F.value.mapValue),Sn.exists(!0)))}return g.mutationQueue.addMutationBatch(R,y,L,p)})).next((M=>{E=M;const L=M.applyToLocalDocumentSet(w,V);return g.documentOverlayCache.saveOverlays(R,M.batchId,L)}))})).then((()=>({batchId:E.batchId,changes:B_(w)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,p,g){let y=h.Vu[h.currentUser.toKey()];y||(y=new xt(Ge)),y=y.insert(p,g),h.Vu[h.currentUser.toKey()]=y})(s,o.batchId,n),await qc(s,o.changes),await $h(s.remoteStore)}catch(o){const c=Xg(o,"Failed to persist write");n.reject(c)}}async function _4(r,e){const n=Me(r);try{const s=await LN(n.localStore,e);e.targetChanges.forEach(((o,c)=>{const h=n.Au.get(c);h&&(tt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?tt(h.hu,14607):o.removedDocuments.size>0&&(tt(h.hu,42227),h.hu=!1))})),await qc(n,s,e)}catch(s){await Uo(s)}}function Rx(r,e,n){const s=Me(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((c,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(h,p){const g=Me(h);g.onlineState=p;let y=!1;g.queries.forEach(((x,w)=>{for(const E of w.Sa)E.va(p)&&(y=!0)})),y&&e0(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function SR(r,e,n){const s=Me(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),c=o&&o.key;if(c){let h=new xt(Te.comparator);h=h.insert(c,dn.newNoDocument(c,Oe.min()));const p=Ye().add(c),g=new qh(Oe.min(),new Map,new xt(Ge),h,p);await _4(s,g),s.du=s.du.remove(c),s.Au.delete(e),r0(s)}else await Qm(s.localStore,e,!1).then((()=>Xm(s,e,n))).catch(Uo)}async function AR(r,e){const n=Me(r),s=e.batch.batchId;try{const o=await PN(n.localStore,e);E4(n,s,null),w4(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await qc(n,o)}catch(o){await Uo(o)}}async function NR(r,e,n){const s=Me(r);try{const o=await(function(h,p){const g=Me(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let x;return g.mutationQueue.lookupMutationBatch(y,p).next((w=>(tt(w!==null,37113),x=w.keys(),g.mutationQueue.removeMutationBatch(y,w)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,x,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,x))).next((()=>g.localDocuments.getDocuments(y,x)))}))})(s.localStore,e);E4(s,e,n),w4(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await qc(s,o)}catch(o){await Uo(o)}}function w4(r,e){(r.mu.get(e)||[]).forEach((n=>{n.resolve()})),r.mu.delete(e)}function E4(r,e,n){const s=Me(r);let o=s.Vu[s.currentUser.toKey()];if(o){const c=o.get(e);c&&(n?c.reject(n):c.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Xm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||T4(r,s)}))}function T4(r,e){r.Eu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(Yg(r.remoteStore,n),r.du=r.du.remove(e),r.Au.delete(n),r0(r))}function Cx(r,e,n){for(const s of n)s instanceof v4?(r.Ru.addReference(s.key,e),RR(r,s)):s instanceof x4?(be(n0,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||T4(r,s.key)):Ce(19791,{wu:s})}function RR(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(be(n0,"New document in limbo: "+n),r.Eu.add(s),r0(r))}function r0(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new Te(ft.fromString(e)),s=r.fu.next();r.Au.set(s,new yR(n)),r.du=r.du.insert(n,s),h4(r.remoteStore,new ss(jr(Uh(n.path)),s,"TargetPurposeLimboResolution",Ph.ce))}}async function qc(r,e,n){const s=Me(r),o=[],c=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((p,g)=>{h.push(s.pu(g,e,n).then((y=>{if((y||n)&&s.isPrimaryClient){const x=y?!y.fromCache:n?.targetChanges.get(g.targetId)?.current;s.sharedClientState.updateQueryState(g.targetId,x?"current":"not-current")}if(y){o.push(y);const x=qg.As(g.targetId,y);c.push(x)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(g,y){const x=Me(g);try{await x.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>ue.forEach(y,(E=>ue.forEach(E.Es,(R=>x.persistence.referenceDelegate.addReference(w,E.targetId,R))).next((()=>ue.forEach(E.ds,(R=>x.persistence.referenceDelegate.removeReference(w,E.targetId,R)))))))))}catch(w){if(!zo(w))throw w;be(Gg,"Failed to update sequence numbers: "+w)}for(const w of y){const E=w.targetId;if(!w.fromCache){const R=x.Ms.get(E),N=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(N);x.Ms=x.Ms.insert(E,V)}}})(s.localStore,c))}async function CR(r,e){const n=Me(r);if(!n.currentUser.isEqual(e)){be(n0,"User change. New user:",e.toKey());const s=await l4(n.localStore,e);n.currentUser=e,(function(c,h){c.mu.forEach((p=>{p.forEach((g=>{g.reject(new ve(se.CANCELLED,h))}))})),c.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await qc(n,s.Ls)}}function IR(r,e){const n=Me(r),s=n.Au.get(e);if(s&&s.hu)return Ye().add(s.key);{let o=Ye();const c=n.Iu.get(e);if(!c)return o;for(const h of c){const p=n.Tu.get(h);o=o.unionWith(p.view.nu)}return o}}function S4(r){const e=Me(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=_4.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SR.bind(null,e),e.Pu.H_=fR.bind(null,e.eventManager),e.Pu.yu=pR.bind(null,e.eventManager),e}function jR(r){const e=Me(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NR.bind(null,e),e}class wh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return MN(this.persistence,new DN,e.initialUser,this.serializer)}Cu(e){return new o4(Hg.mi,this.serializer)}Du(e){return new FN}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wh.provider={build:()=>new wh};class DR extends wh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){tt(this.persistence.referenceDelegate instanceof bh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new yN(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?wn.withCacheSize(this.cacheSizeBytes):wn.DEFAULT;return new o4((s=>bh.mi(s,n)),this.serializer)}}class Zm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rx(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=CR.bind(null,this.syncEngine),await uR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new hR})()}createDatastore(e){const n=Gh(e.databaseInfo.databaseId),s=(function(c){return new $N(c)})(e.databaseInfo);return(function(c,h,p,g){return new XN(c,h,p,g)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,c,h,p){return new JN(s,o,c,h,p)})(this.localStore,this.datastore,e.asyncQueue,(n=>Rx(this.syncEngine,n,0)),(function(){return wx.v()?new wx:new HN})())}createSyncEngine(e,n){return(function(o,c,h,p,g,y,x){const w=new vR(o,c,h,p,g,y);return x&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Me(n);be(ga,"RemoteStore shutting down."),s.Ea.add(5),await Hc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Zm.provider={build:()=>new Zm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):vi("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="FirestoreClient";class kR{constructor(e,n,s,o,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=un.UNAUTHENTICATED,this.clientId=jg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async h=>{be(gs,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(be(gs,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Xg(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Em(r,e){r.asyncQueue.verifyOperationInProgress(),be(gs,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await l4(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Ix(r,e){r.asyncQueue.verifyOperationInProgress();const n=await OR(r);be(gs,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>Tx(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Tx(e.remoteStore,o))),r._onlineComponents=e}async function OR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){be(gs,"Using user provided OfflineComponentProvider");try{await Em(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===se.FAILED_PRECONDITION||o.code===se.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;Ro("Error using user provided cache. Falling back to memory cache: "+n),await Em(r,new wh)}}else be(gs,"Using default OfflineComponentProvider"),await Em(r,new DR(void 0));return r._offlineComponents}async function A4(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(be(gs,"Using user provided OnlineComponentProvider"),await Ix(r,r._uninitializedComponentsProvider._online)):(be(gs,"Using default OnlineComponentProvider"),await Ix(r,new Zm))),r._onlineComponents}function MR(r){return A4(r).then((e=>e.syncEngine))}async function Eh(r){const e=await A4(r),n=e.eventManager;return n.onListen=xR.bind(null,e.syncEngine),n.onUnlisten=wR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=bR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ER.bind(null,e.syncEngine),n}function PR(r,e,n={}){const s=new fi;return r.asyncQueue.enqueueAndForget((async()=>(function(c,h,p,g,y){const x=new i0({next:E=>{x.Nu(),h.enqueueAndForget((()=>Jg(c,w)));const R=E.docs.has(p);!R&&E.fromCache?y.reject(new ve(se.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&E.fromCache&&g&&g.source==="server"?y.reject(new ve(se.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(E)},error:E=>y.reject(E)}),w=new t0(Uh(p.path),x,{includeMetadataChanges:!0,qa:!0});return Zg(c,w)})(await Eh(r),r.asyncQueue,e,n,s))),s.promise}function LR(r,e,n={}){const s=new fi;return r.asyncQueue.enqueueAndForget((async()=>(function(c,h,p,g,y){const x=new i0({next:E=>{x.Nu(),h.enqueueAndForget((()=>Jg(c,w))),E.fromCache&&g.source==="server"?y.reject(new ve(se.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(E)},error:E=>y.reject(E)}),w=new t0(p,x,{includeMetadataChanges:!0,qa:!0});return Zg(c,w)})(await Eh(r),r.asyncQueue,e,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N4(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R4="firestore.googleapis.com",Dx=!0;class kx{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ve(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=R4,this.ssl=Dx}else this.host=e.host,this.ssl=e.ssl??Dx;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=a4;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mN)throw new ve(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=N4(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ve(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ve(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ve(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qh{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kx({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ve(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kx(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new FA;switch(s.type){case"firstParty":return new YA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ve(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=jx.get(n);s&&(be("ComponentProvider","Removing Datastore"),jx.delete(n),s.terminate())})(this),Promise.resolve()}}function VR(r,e,n,s={}){r=Tn(r,Qh);const o=Mo(e),c=r._getSettings(),h={...c,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${n}`;o&&(_b(`https://${p}`),wb("Firestore",!0)),c.host!==R4&&c.host!==p&&Ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...c,host:p,ssl:o,emulatorOptions:s};if(!da(g,h)&&(r._setSettings(g),s.mockUserToken)){let y,x;if(typeof s.mockUserToken=="string")y=s.mockUserToken,x=un.MOCK_USER;else{y=nS(s.mockUserToken,r._app?.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new ve(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new un(w)}r._authCredentials=new HA(new v_(y,x))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _s(this.firestore,e,this._query)}}class Et{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new us(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}toJSON(){return{type:Et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(zc(n,Et._jsonSchema))return new Et(e,s||null,new Te(ft.fromString(n.referencePath)))}}Et._jsonSchemaVersion="firestore/documentReference/1.0",Et._jsonSchema={type:Mt("string",Et._jsonSchemaVersion),referencePath:Mt("string")};class us extends _s{constructor(e,n,s){super(e,n,Uh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new Te(e))}withConverter(e){return new us(this.firestore,e,this._path)}}function yn(r,e,...n){if(r=Rt(r),x_("collection","path",e),r instanceof Qh){const s=ft.fromString(e,...n);return Y2(s),new us(r,null,s)}{if(!(r instanceof Et||r instanceof us))throw new ve(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ft.fromString(e,...n));return Y2(s),new us(r.firestore,null,s)}}function rn(r,e,...n){if(r=Rt(r),arguments.length===1&&(e=jg.newId()),x_("doc","path",e),r instanceof Qh){const s=ft.fromString(e,...n);return G2(s),new Et(r,null,new Te(s))}{if(!(r instanceof Et||r instanceof us))throw new ve(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ft.fromString(e,...n));return G2(s),new Et(r.firestore,r instanceof us?r.converter:null,new Te(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="AsyncQueue";class Mx{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new u4(this,"async_queue_retry"),this._c=()=>{const s=wm();s&&be(Ox,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=wm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=wm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new fi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!zo(e))throw e;be(Ox,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,vi("INTERNAL UNHANDLED ERROR: ",Px(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=Wg.createAndSchedule(this,e,n,s,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&Ce(47125,{Pc:Px(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Px(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const c of s)if(c in o&&typeof o[c]=="function")return!0;return!1})(r,["next","error","complete"])}class bi extends Qh{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new Mx,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mx(e),this._firestoreClient=void 0,await e}}}function UR(r,e){const n=typeof r=="object"?r:Ab(),s=typeof r=="string"?r:mh,o=yg(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=eS("firestore");c&&VR(o,...c)}return o}function Gc(r){if(r._terminated)throw new ve(se.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||zR(r),r._firestoreClient}function zR(r){const e=r._freezeSettings(),n=(function(o,c,h,p){return new c8(o,c,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,N4(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new kR(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const c=o?._online.build();return{_offline:o?._offline.build(c),_online:c}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(sn.fromBase64String(e))}catch(n){throw new ve(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jn(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zc(e,Jn._jsonSchema))return Jn.fromBase64String(e.bytes)}}Jn._jsonSchemaVersion="firestore/bytes/1.0",Jn._jsonSchema={type:Mt("string",Jn._jsonSchemaVersion),bytes:Mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ve(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ve(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ve(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kr._jsonSchemaVersion}}static fromJSON(e){if(zc(e,kr._jsonSchema))return new kr(e.latitude,e.longitude)}}kr._jsonSchemaVersion="firestore/geoPoint/1.0",kr._jsonSchema={type:Mt("string",kr._jsonSchemaVersion),latitude:Mt("number"),longitude:Mt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Or._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zc(e,Or._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Or(e.vectorValues);throw new ve(se.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Or._jsonSchemaVersion="firestore/vectorValue/1.0",Or._jsonSchema={type:Mt("string",Or._jsonSchemaVersion),vectorValues:Mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=/^__.*__$/;class FR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new bs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bc(e,this.data,n,this.fieldTransforms)}}class C4{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new bs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function I4(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ce(40011,{Ac:r})}}class s0{constructor(e,n,s,o,c,h){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new s0({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Th(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(I4(this.Ac)&&BR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class HR{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Gh(e)}Cc(e,n,s,o=!1){return new s0({Ac:e,methodName:n,Dc:s,path:nn.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $c(r){const e=r._freezeSettings(),n=Gh(r._databaseId);return new HR(r._databaseId,!!e.ignoreUndefinedProperties,n)}function a0(r,e,n,s,o,c={}){const h=r.Cc(c.merge||c.mergeFields?2:0,e,n,o);l0("Data must be an object, but it was:",h,s);const p=k4(s,h);let g,y;if(c.merge)g=new Pn(h.fieldMask),y=h.fieldTransforms;else if(c.mergeFields){const x=[];for(const w of c.mergeFields){const E=Jm(e,w,n);if(!h.contains(E))throw new ve(se.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);M4(x,E)||x.push(E)}g=new Pn(x),y=h.fieldTransforms.filter((w=>g.covers(w.field)))}else g=null,y=h.fieldTransforms;return new FR(new En(p),g,y)}class Wh extends Kh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wh}}class o0 extends Kh{_toFieldTransform(e){return new M8(e.path,new Nc)}isEqual(e){return e instanceof o0}}function j4(r,e,n,s){const o=r.Cc(1,e,n);l0("Data must be an object, but it was:",o,s);const c=[],h=En.empty();xs(s,((g,y)=>{const x=c0(e,g,n);y=Rt(y);const w=o.yc(x);if(y instanceof Wh)c.push(x);else{const E=Qc(y,w);E!=null&&(c.push(x),h.set(x,E))}}));const p=new Pn(c);return new C4(h,p,o.fieldTransforms)}function D4(r,e,n,s,o,c){const h=r.Cc(1,e,n),p=[Jm(e,s,n)],g=[o];if(c.length%2!=0)throw new ve(se.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<c.length;E+=2)p.push(Jm(e,c[E])),g.push(c[E+1]);const y=[],x=En.empty();for(let E=p.length-1;E>=0;--E)if(!M4(y,p[E])){const R=p[E];let N=g[E];N=Rt(N);const V=h.yc(R);if(N instanceof Wh)y.push(R);else{const M=Qc(N,V);M!=null&&(y.push(R),x.set(R,M))}}const w=new Pn(y);return new C4(x,w,h.fieldTransforms)}function qR(r,e,n,s=!1){return Qc(n,r.Cc(s?4:3,e))}function Qc(r,e){if(O4(r=Rt(r)))return l0("Unsupported field value:",e,r),k4(r,e);if(r instanceof Kh)return(function(s,o){if(!I4(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const c=[];let h=0;for(const p of s){let g=Qc(p,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),h++}return{arrayValue:{values:c}}})(r,e)}return(function(s,o){if((s=Rt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return D8(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=ct.fromDate(s);return{timestampValue:xh(o.serializer,c)}}if(s instanceof ct){const c=new ct(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:xh(o.serializer,c)}}if(s instanceof kr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Jn)return{bytesValue:J_(o.serializer,s._byteString)};if(s instanceof Et){const c=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(c))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Bg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Or)return(function(h,p){return{mapValue:{fields:{[R_]:{stringValue:C_},[gh]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw p.Sc("VectorValues must only contain numeric values.");return Lg(p.serializer,y)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${Mh(s)}`)})(r,e)}function k4(r,e){const n={};return w_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(r,((s,o)=>{const c=Qc(o,e.mc(s));c!=null&&(n[s]=c)})),{mapValue:{fields:n}}}function O4(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ct||r instanceof kr||r instanceof Jn||r instanceof Et||r instanceof Kh||r instanceof Or)}function l0(r,e,n){if(!O4(n)||!b_(n)){const s=Mh(n);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function Jm(r,e,n){if((e=Rt(e))instanceof Yc)return e._internalPath;if(typeof e=="string")return c0(r,e);throw Th("Field path arguments must be of type string or ",r,!1,void 0,n)}const GR=new RegExp("[~\\*/\\[\\]]");function c0(r,e,n){if(e.search(GR)>=0)throw Th(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Yc(...e.split("."))._internalPath}catch{throw Th(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Th(r,e,n,s,o){const c=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(c||h)&&(g+=" (found",c&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ve(se.INVALID_ARGUMENT,p+r+g)}function M4(r,e){return r.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e,n,s,o,c){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YR extends P4{data(){return super.data()}}function Xh(r,e){return typeof e=="string"?c0(r,e):e instanceof Yc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L4(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ve(se.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class u0{}class V4 extends u0{}function pi(r,e,...n){let s=[];e instanceof u0&&s.push(e),s=s.concat(n),(function(c){const h=c.filter((g=>g instanceof d0)).length,p=c.filter((g=>g instanceof Zh)).length;if(h>1||h>0&&p>0)throw new ve(se.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Zh extends V4{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Zh(e,n,s)}_apply(e){const n=this._parse(e);return U4(e._query,n),new _s(e.firestore,e.converter,Fm(e._query,n))}_parse(e){const n=$c(e.firestore);return(function(c,h,p,g,y,x,w){let E;if(y.isKeyField()){if(x==="array-contains"||x==="array-contains-any")throw new ve(se.INVALID_ARGUMENT,`Invalid Query. You can't perform '${x}' queries on documentId().`);if(x==="in"||x==="not-in"){Ux(w,x);const N=[];for(const V of w)N.push(Vx(g,c,V));E={arrayValue:{values:N}}}else E=Vx(g,c,w)}else x!=="in"&&x!=="not-in"&&x!=="array-contains-any"||Ux(w,x),E=qR(p,h,w,x==="in"||x==="not-in");return Ot.create(y,x,E)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fc(r,e,n){const s=e,o=Xh("where",r);return Zh._create(o,s,n)}class d0 extends u0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new d0(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:dr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(o,c){let h=o;const p=c.getFlattenedFilters();for(const g of p)U4(h,g),h=Fm(h,g)})(e._query,n),new _s(e.firestore,e.converter,Fm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class h0 extends V4{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new h0(e,n)}_apply(e){const n=(function(o,c,h){if(o.startAt!==null)throw new ve(se.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ve(se.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ac(c,h)})(e._query,this._field,this._direction);return new _s(e.firestore,e.converter,(function(o,c){const h=o.explicitOrderBy.concat([c]);return new Bo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,n))}}function ya(r,e="asc"){const n=e,s=Xh("orderBy",r);return h0._create(s,n)}function Vx(r,e,n){if(typeof(n=Rt(n))=="string"){if(n==="")throw new ve(se.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!L_(e)&&n.indexOf("/")!==-1)throw new ve(se.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ft.fromString(n));if(!Te.isDocumentKey(s))throw new ve(se.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ex(r,new Te(s))}if(n instanceof Et)return ex(r,n._key);throw new ve(se.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mh(n)}.`)}function Ux(r,e){if(!Array.isArray(r)||r.length===0)throw new ve(se.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function U4(r,e){const n=(function(o,c){for(const h of o)for(const p of h.getFlattenedFilters())if(c.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ve(se.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ve(se.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class $R{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return xs(e,((o,c)=>{s[o]=this.convertValue(c,n)})),s}convertVectorValue(e){const n=e.fields?.[gh].arrayValue?.values?.map((s=>Nt(s.doubleValue)));return new Or(n)}convertGeoPoint(e){return new kr(Nt(e.latitude),Nt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Vh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ec(e));default:return null}}convertTimestamp(e){const n=hs(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ft.fromString(e);tt(s4(s),9688,{name:e});const o=new Tc(s.get(1),s.get(3)),c=new Te(s.popFirst(5));return o.isEqual(n)||vi(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(r,e,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,s}class sc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ca extends P4{constructor(e,n,s,o,c,h){super(e,n,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new eh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Xh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ve(se.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ca._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ca._jsonSchemaVersion="firestore/documentSnapshot/1.0",ca._jsonSchema={type:Mt("string",ca._jsonSchemaVersion),bundleSource:Mt("string","DocumentSnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class eh extends ca{data(e={}){return super.data(e)}}class ua{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new sc(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new eh(this._firestore,this._userDataWriter,s.key,s,new sc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ve(se.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,c){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((p=>{const g=new eh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new sc(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>c||p.type!==3)).map((p=>{const g=new eh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new sc(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,x=-1;return p.type!==0&&(y=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),x=h.indexOf(p.doc.key)),{type:QR(p.type),doc:g,oldIndex:y,newIndex:x}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ve(se.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ua._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function QR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ce(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(r){r=Tn(r,Et);const e=Tn(r.firestore,bi);return PR(Gc(e),r._key).then((n=>z4(e,r,n)))}ua._jsonSchemaVersion="firestore/querySnapshot/1.0",ua._jsonSchema={type:Mt("string",ua._jsonSchemaVersion),bundleSource:Mt("string","QuerySnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class p0 extends $R{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function Ic(r){r=Tn(r,_s);const e=Tn(r.firestore,bi),n=Gc(e),s=new p0(e);return L4(r._query),LR(n,r._query).then((o=>new ua(e,s,r,o)))}function Sh(r,e,n){r=Tn(r,Et);const s=Tn(r.firestore,bi),o=f0(r.converter,e,n);return Jh(s,[a0($c(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Sn.none())])}function pc(r,e,n,...s){r=Tn(r,Et);const o=Tn(r.firestore,bi),c=$c(o);let h;return h=typeof(e=Rt(e))=="string"||e instanceof Yc?D4(c,"updateDoc",r._key,e,n,s):j4(c,"updateDoc",r._key,e),Jh(o,[h.toMutation(r._key,Sn.exists(!0))])}function Ho(r,e){const n=Tn(r.firestore,bi),s=rn(r),o=f0(r.converter,e);return Jh(n,[a0($c(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Sn.exists(!1))]).then((()=>s))}function Kc(r,...e){r=Rt(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Lx(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Lx(e[s])){const g=e[s];e[s]=g.next?.bind(g),e[s+1]=g.error?.bind(g),e[s+2]=g.complete?.bind(g)}let c,h,p;if(r instanceof Et)h=Tn(r.firestore,bi),p=Uh(r._key.path),c={next:g=>{e[s]&&e[s](z4(h,r,g))},error:e[s+1],complete:e[s+2]};else{const g=Tn(r,_s);h=Tn(g.firestore,bi),p=g._query;const y=new p0(h);c={next:x=>{e[s]&&e[s](new ua(h,y,g,x))},error:e[s+1],complete:e[s+2]},L4(r._query)}return(function(y,x,w,E){const R=new i0(E),N=new t0(x,R,w);return y.asyncQueue.enqueueAndForget((async()=>Zg(await Eh(y),N))),()=>{R.Nu(),y.asyncQueue.enqueueAndForget((async()=>Jg(await Eh(y),N)))}})(Gc(h),p,o,c)}function Jh(r,e){return(function(s,o){const c=new fi;return s.asyncQueue.enqueueAndForget((async()=>TR(await MR(s),o,c))),c.promise})(Gc(r),e)}function z4(r,e,n){const s=n.docs.get(e._key),o=new p0(r);return new ca(r,o,e._key,s,new sc(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=$c(e)}set(e,n,s){this._verifyNotCommitted();const o=Tm(e,this._firestore),c=f0(o.converter,n,s),h=a0(this._dataReader,"WriteBatch.set",o._key,c,o.converter!==null,s);return this._mutations.push(h.toMutation(o._key,Sn.none())),this}update(e,n,s,...o){this._verifyNotCommitted();const c=Tm(e,this._firestore);let h;return h=typeof(n=Rt(n))=="string"||n instanceof Yc?D4(this._dataReader,"WriteBatch.update",c._key,n,s,o):j4(this._dataReader,"WriteBatch.update",c._key,n),this._mutations.push(h.toMutation(c._key,Sn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Tm(e,this._firestore);return this._mutations=this._mutations.concat(new Vg(n._key,Sn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ve(se.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Tm(r,e){if((r=Rt(r)).firestore!==e)throw new ve(se.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}function ys(){return new o0("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(r){return Gc(r=Tn(r,bi)),new KR(r,(e=>Jh(r,e)))}(function(e,n=!0){(function(o){Vo=o})(Po),No(new ha("firestore",((s,{instanceIdentifier:o,options:c})=>{const h=s.getProvider("app").getImmediate(),p=new bi(new qA(s.getProvider("auth-internal")),new $A(h,s.getProvider("app-check-internal")),(function(y,x){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ve(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tc(y.options.projectId,x)})(h,o),h);return c={useFetchStreams:n,...c},p._setSettings(c),p}),"PUBLIC").setMultipleInstances(!0)),ls(B2,F2,e),ls(B2,F2,"esm2020")})();var WR="firebase",XR="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ls(WR,XR,"app");const ZR={apiKey:"AIzaSyAwNVpI9pwh7lCsh1C53JH8w991gmeUbKI",authDomain:"goldinc-7ed2f.firebaseapp.com",projectId:"goldinc-7ed2f",storageBucket:"goldinc-7ed2f.firebasestorage.app",messagingSenderId:"336738370359",appId:"1:336738370359:web:27be8e3965dac5215dd0b2"},B4=Sb(ZR),cr=_c(B4),Xe=UR(B4),JR=({user:r})=>{const[e,n]=P.useState(!1),[s,o]=P.useState([]),[c,h]=P.useState(""),[p,g]=P.useState(!1),[y,x]=P.useState(null);P.useEffect(()=>{if(!r||!e)return;const R=pi(yn(Xe,"chats"),fc("userId","==",r.uid),ya("timestamp","asc")),N=Kc(R,V=>{const M=[];V.forEach(L=>{M.push({id:L.id,...L.data()})}),o(M),setTimeout(()=>{const L=document.getElementById("chat-messages");L&&(L.scrollTop=L.scrollHeight)},100)},V=>{console.error("Error loading messages:",V),x("Failed to load messages")});return()=>N()},[r,e]);const w=async R=>{if(R.preventDefault(),!!c.trim()){g(!0);try{await Ho(yn(Xe,"chats"),{userId:r.uid,userName:r.displayName||r.email,message:c.trim(),isAdmin:!1,timestamp:ys(),read:!1}),h("")}catch(N){console.error("Error sending message:",N),x("Failed to send message")}finally{g(!1)}}},E=R=>R?R.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:`chat-button ${e?"chat-button-hidden":""}`,onClick:()=>n(!0),children:[u.jsx(T3,{size:20}),u.jsx("span",{children:"Support"})]}),e&&u.jsxs("div",{className:"chat-window",children:[u.jsxs("div",{className:"chat-header",children:[u.jsx("h3",{children:"Customer Support"}),u.jsx("button",{className:"chat-close-btn",onClick:()=>n(!1),children:u.jsx(D3,{})})]}),u.jsx("div",{id:"chat-messages",className:"chat-messages",children:s.length===0?u.jsxs("div",{className:"chat-empty",children:[u.jsx("p",{children:"Start a conversation with our support team!"}),u.jsx("p",{children:"We're here to help you with any questions."})]}):s.map(R=>u.jsx("div",{className:`message ${R.isAdmin?"admin-message":"user-message"}`,children:u.jsxs("div",{className:"message-content",children:[u.jsx("p",{children:R.message}),u.jsx("span",{className:"message-time",children:R.timestamp?E(R.timestamp):"Sending..."})]})},R.id))}),u.jsxs("form",{onSubmit:w,className:"chat-input-form",children:[y&&u.jsx("div",{className:"chat-error",children:y}),u.jsxs("div",{className:"chat-input-container",children:[u.jsx("input",{type:"text",value:c,onChange:R=>h(R.target.value),placeholder:"Type your message here...",disabled:p}),u.jsx("button",{type:"submit",disabled:p||!c.trim(),className:"chat-send-btn",children:u.jsx(I3,{})})]})]})]})]})},e9=[{id:1,name:"BEGINNERS PLAN",profitPercent:5,min:200,max:19999,duration:7,description:"Perfect for beginners starting with gold investment"},{id:2,name:"MASTERS PLAN",profitPercent:30,min:2e4,max:999999,duration:14,description:"Ideal for consistent wealth accumulation"},{id:3,name:"PREMIUM PLAN",profitPercent:50,min:1e6,max:1/0,duration:30,description:"For premium investors building a substantial portfolio"}],F4=[{type:"USDT (ERC20)",address:"0x2F549207342b44ADF00d25893580b23902f3137B"},{type:"TRON",address:"TNyKcnXh9GhANHaCgQyRdnXGmMc72ykQFC"},{type:"DOGECOIN",address:"D7whXjWwZzsXqnfZdy3rSkBtvTbyefr4d4"}],t9=({user:r})=>{const e=vs(),[n,s]=P.useState({}),[o,c]=P.useState(!0),[h,p]=P.useState(null);return P.useEffect(()=>{(async()=>{if(r)try{const y=rn(Xe,"users",r.uid),x=await va(y);x.exists()?s(x.data()):p("Profile data not found.")}catch(y){p("Failed to fetch profile data."),console.error(y)}c(!1)})()},[r]),o?u.jsx("div",{className:"loading",children:"Loading profile..."}):h?u.jsx("div",{className:"error-message",children:h}):u.jsxs("div",{className:"profile-container",children:[u.jsx("h2",{className:"section-title",children:"User Profile"}),u.jsxs("div",{className:"profile-grid",children:[u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Full Name:"})," ",u.jsx("span",{children:n.fullName||"N/A"})]}),u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Email:"})," ",u.jsx("span",{children:r.email})]}),u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Username:"})," ",u.jsx("span",{children:n.username||"N/A"})]}),u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Phone:"})," ",u.jsx("span",{children:n.phone||"N/A"})]}),u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Location:"})," ",u.jsx("span",{children:n.location||"N/A"})]}),u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Occupation:"})," ",u.jsx("span",{children:n.occupation||"N/A"})]})]}),u.jsxs("div",{className:"bio-card",children:[u.jsx("strong",{children:"Bio:"}),u.jsx("p",{children:n.bio||"No bio provided."})]}),u.jsx("button",{className:"btn-primary",onClick:()=>e("/edit-profile"),children:"Edit Profile"})]})},n9=({user:r})=>{const[e,n]=P.useState(null),[s,o]=P.useState(!1),c=async()=>{if(!r||!r.email){n("error");return}o(!0),n(null);try{await Ag(cr,r.email),n("success")}catch(h){console.error("Password reset error:",h),n("error")}finally{o(!1)}};return u.jsxs("div",{className:"settings-container",children:[u.jsxs("div",{className:"settings-card",children:[u.jsx("h2",{className:"section-title",children:"Account Settings"}),u.jsxs("div",{className:"setting-item",children:[u.jsx("h3",{children:"Password & Security"}),u.jsx("p",{children:"Request a password reset link to be sent to your email."}),u.jsx("button",{className:"btn-primary",onClick:c,disabled:s,children:s?"Sending...":"Reset Password"}),e==="success"&&u.jsxs("span",{className:"success-message",children:[u.jsx(bo,{style:{marginRight:"5px"}})," Password reset email sent! Check your inbox."]}),e==="error"&&u.jsxs("span",{className:"error-message",children:[u.jsx(dg,{style:{marginRight:"5px"}})," Failed to send reset email. Please try again."]})]})]}),u.jsxs("div",{className:"settings-card",children:[u.jsx("h2",{className:"section-title",children:"Notification Preferences"}),u.jsxs("div",{className:"setting-item",children:[u.jsx("p",{children:"Manage how you receive updates and alerts."}),u.jsx("button",{className:"btn-secondary",onClick:()=>alert("Notification settings update coming soon!"),children:"Configure Notifications"})]})]})]})},r9=({user:r,updateBalance:e,goldPrice:n})=>{const[s,o]=P.useState(null),[c,h]=P.useState(""),[p,g]=P.useState(null),[y,x]=P.useState(!1),[w,E]=P.useState(!1),[R,N]=P.useState(!1),[V,M]=P.useState(null),[L,z]=P.useState(0),[F,W]=P.useState(!1),ee=S=>{o(S),h(""),g(null),x(!1),E(!1),N(!1),M(null),z(1)},te=()=>{const S=parseFloat(c);if(isNaN(S)||S<=0){M("Please enter a valid amount greater than 0");return}if(S<s.min||s.max!==1/0&&S>s.max){M(`Please enter a valid amount between $${s.min} and $${s.max===1/0?"unlimited":s.max}`);return}M(null),z(2)},O=S=>{g(S),z(3)},C=()=>{x(!0),z(4)},j=async()=>{if(!(!s||!c||!n)){M(null);try{const S=parseFloat(c),I=s.profitPercent,he=(S*I/100).toFixed(0),Ee=new Date,X=new Date;X.setDate(Ee.getDate()+s.duration);const fe=S/n,ge={userId:r.uid,type:"deposit",amount:S,goldAmount:fe,profitPercent:`${I}%`,plan:s.name,planId:s.id,interest:`$${he}`,duration:s.duration,description:s.description,status:"pending",timestamp:ys(),startDate:ct.fromDate(Ee),nextPaymentDate:ct.fromDate(X),interestEarned:0,totalInterestEarned:0,walletType:p.type,goldPriceAtPurchase:n};await Ho(yn(Xe,"transactions"),ge),N(!0),z(0),o(null),x(!1),E(!1)}catch(S){M("Failed to process transaction. Please try again."),console.error(S)}}},k=async S=>{S.target.files[0]&&(E(!0),await j())},D=()=>{p?.address&&(navigator.clipboard.writeText(p.address),W(!0),setTimeout(()=>W(!1),2e3))};return u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"Purchase Gold"}),u.jsxs("div",{className:"gold-price-info",children:["Current Gold Price: ",u.jsxs("strong",{children:["$",n?n.toFixed(2):"Loading...","/g"]})]}),V&&u.jsxs("span",{className:"error-message",children:[u.jsx(dg,{style:{marginRight:"5px"}})," ",V]}),R?u.jsxs("div",{children:[u.jsx("h3",{children:"Transaction Submitted for Approval!"}),u.jsxs("span",{className:"success-message",children:[u.jsx(bo,{style:{marginRight:"5px"}})," Your deposit has been submitted and is awaiting admin approval."]}),u.jsx("button",{className:"btn-secondary",onClick:()=>N(!1),children:"Back to Plans"})]}):L===0?u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"Select a gold plan to purchase:"}),u.jsx("div",{className:"gold-plans-container",children:e9.map(S=>u.jsxs("div",{className:`gold-plan-card ${s?.id===S.id?"selected-plan":""}`,onClick:()=>ee(S),children:[u.jsx(Ao,{size:36,color:"#D4AF37"}),u.jsx("h3",{className:"plan-title",children:S.name}),u.jsxs("p",{className:"plan-price",children:["$",S.min,"  - ",S.max===1/0?"and above":S.max," USD"]}),u.jsxs("p",{className:"plan-description",children:[u.jsx("strong",{children:"Profit:"})," ",S.profitPercent,"% every ",S.duration," days"]}),u.jsx("p",{className:"plan-description",children:S.description})]},S.id))})]}):L===1?u.jsxs(u.Fragment,{children:[u.jsxs("h3",{children:["Selected Plan: ",s.name]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"deposit-amount",children:"Enter Deposit Amount:"}),u.jsx("input",{id:"deposit-amount",type:"number",value:c,onChange:S=>h(S.target.value),placeholder:`Enter amount between $${s.min} and $${s.max===1/0?"unlimited":s.max}`})]}),c&&n&&u.jsxs("div",{className:"gold-calculation",children:[u.jsxs("p",{children:["At current gold price ($",n.toFixed(2),"/g), you will receive:"]}),u.jsxs("p",{className:"gold-amount",children:[(parseFloat(c)/n).toFixed(4),"g of gold"]})]}),u.jsx("button",{className:"btn-primary",onClick:te,children:"Proceed"}),u.jsx("button",{className:"btn-secondary",onClick:()=>z(0),children:"Back"})]}):L===2?u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Select a Wallet"}),u.jsx("div",{className:"gold-plans-container",children:F4.map((S,I)=>u.jsxs("div",{className:`gold-plan-card ${p?.type===S.type?"selected-plan":""}`,onClick:()=>O(S),children:[u.jsx(Ao,{size:36,color:"#D4AF37"}),u.jsx("h3",{className:"plan-title",children:S.type})]},I))}),u.jsx("button",{className:"btn-secondary",onClick:()=>z(1),children:"Back"})]}):L===3?u.jsxs(u.Fragment,{children:[u.jsxs("h3",{children:["Selected Plan: ",s.name]}),u.jsxs("p",{children:["Amount: $",c]}),n&&u.jsxs("p",{children:["Gold Allocation: ",(parseFloat(c)/n).toFixed(4),"g"]}),u.jsxs("p",{children:["Please send exactly ",u.jsxs("strong",{children:["$",c]})," to the following address:"]}),u.jsxs("div",{className:"deposit-address",children:[u.jsx("p",{children:u.jsxs("strong",{children:[p.type," Address:"]})}),u.jsx("p",{children:p.address}),u.jsxs("button",{className:"btn-secondary",onClick:D,children:[F?"Copied!":"Copy Address"," ",u.jsx(S3,{style:{marginLeft:"5px"}})]})]}),u.jsx("p",{children:"After completing your transfer, click the button below to confirm."}),u.jsx("button",{className:"btn-primary",onClick:C,children:"I've Sent the Payment"}),u.jsx("button",{className:"btn-secondary",onClick:()=>z(2),children:"Choose Different Wallet"})]}):L===4?u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Confirm Deposit"}),u.jsx("p",{children:"Upload a screenshot of the transaction (for verification):"}),u.jsx("input",{type:"file",accept:"image/*",onChange:k}),u.jsx("button",{className:"btn-secondary",onClick:()=>z(3),children:"Back"})]}):null]})},i9=({user:r,balance:e,goldBalance:n,updateBalance:s,goldPrice:o})=>{const[c,h]=P.useState(""),[p,g]=P.useState("usd"),[y,x]=P.useState(""),[w,E]=P.useState(""),[R,N]=P.useState(!1),[V,M]=P.useState({text:"",type:""}),L=async()=>{if(M({text:"",type:""}),!c||!y||!w){M({text:"Please fill all fields",type:"error"});return}const z=parseFloat(c);if(isNaN(z)||z<=0){M({text:"Please enter a valid amount",type:"error"});return}const F=p==="usd"?50:1;if(z<F){M({text:`Minimum withdrawal is $${F} USD or ${F}g Gold`,type:"error"});return}if(p==="usd"&&z>e){M({text:"Insufficient USD balance",type:"error"});return}if(p==="gold"&&z>n){M({text:"Insufficient gold balance",type:"error"});return}N(!0);try{const W=p==="usd"?z:z*(o||65),ee={userId:r.uid,type:"withdrawal",amount:W,goldAmount:p==="gold"?z:0,status:"pending",walletType:y,walletAddress:w,timestamp:ys()};await Ho(yn(Xe,"transactions"),ee),M({text:"Withdrawal request submitted successfully! It will be processed within 24 hours.",type:"success"}),h(""),x(""),E("")}catch(W){console.error("Error processing withdrawal:",W),M({text:"Failed to process withdrawal. Please try again.",type:"error"})}finally{N(!1)}};return u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"Withdraw Funds"}),u.jsxs("div",{className:"balance-info",children:[u.jsxs("p",{children:["Available Balance: ",u.jsxs("strong",{children:["$",e.toLocaleString()," USD"]})," | ",u.jsxs("strong",{children:[n.toFixed(2),"g Gold"]})]}),o&&u.jsxs("p",{children:["Current Gold Price: ",u.jsxs("strong",{children:["$",o.toFixed(2),"/g"]})]})]}),u.jsxs("div",{className:"withdraw-form",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"withdraw-type",children:"Withdraw Type:"}),u.jsxs("select",{id:"withdraw-type",value:p,onChange:z=>{g(z.target.value),h(""),x(""),E("")},children:[u.jsx("option",{value:"usd",children:"USD"}),u.jsx("option",{value:"gold",children:"Gold"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"withdraw-amount",children:["Amount to Withdraw ",p==="gold"?"(in grams)":"(in USD)",":"]}),u.jsx("input",{id:"withdraw-amount",type:"number",value:c,onChange:z=>h(z.target.value),placeholder:p==="usd"?"Enter USD amount":"Enter gold amount in grams"}),p==="gold"&&o&&c&&u.jsxs("p",{className:"withdraw-conversion",children:["≈ $",(parseFloat(c)*o).toFixed(2)," USD"]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"destination-wallet",children:"Destination Wallet Type:"}),u.jsxs("select",{id:"destination-wallet",value:y,onChange:z=>x(z.target.value),children:[u.jsx("option",{value:"",children:"Select a wallet type"}),F4.map((z,F)=>u.jsx("option",{value:z.type,children:z.type},F))]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"destination-address",children:"Destination Wallet Address:"}),u.jsx("input",{id:"destination-address",type:"text",value:w,onChange:z=>E(z.target.value),placeholder:"Enter your wallet address"})]}),V.text&&u.jsxs("div",{className:V.type==="success"?"success-message":"error-message",children:[V.type==="success"?u.jsx(bo,{style:{marginRight:"5px"}}):u.jsx(dg,{style:{marginRight:"5px"}}),V.text]}),u.jsx("button",{className:"btn-primary",onClick:L,disabled:R||!c||!y||!w,children:R?"Processing...":"Request Withdrawal"})]}),u.jsxs("div",{className:"withdrawal-info",children:[u.jsx("h4",{children:"Withdrawal Information:"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Withdrawals are processed within 24 hours"}),u.jsx("li",{children:"Gold withdrawals are converted to USD at current market rates"}),u.jsx("li",{children:"Minimum withdrawal: $50 USD or 1g Gold"}),u.jsx("li",{children:"Network fees may apply"}),u.jsx("li",{children:"All withdrawals require admin approval"})]})]})]})},s9=({user:r})=>{const[e,n]=P.useState([]),[s,o]=P.useState(!0),[c,h]=P.useState(null);P.useEffect(()=>{if(!r)return;const g=pi(yn(Xe,"transactions"),fc("userId","==",r.uid),ya("timestamp","desc")),y=Kc(g,x=>{const w=[];x.forEach(E=>{w.push({id:E.id,...E.data()})}),n(w),o(!1)},x=>{h("Failed to load transaction history."),console.error(x),o(!1)});return()=>y()},[r]);const p=g=>{switch(g){case"completed":return"status-completed";case"processing":return"status-processing";case"pending":return"status-pending";case"rejected":return"status-rejected";default:return"status-pending"}};return s?u.jsx("div",{className:"section-card",children:"Loading transaction history..."}):c?u.jsx("div",{className:"section-card error-message",children:c}):u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"Transaction History"}),e.length===0?u.jsx("p",{children:"No transactions yet."}):u.jsx("div",{className:"table-container",children:u.jsxs("table",{className:"transactions-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Type"}),u.jsx("th",{children:"Amount"}),u.jsx("th",{children:"Gold Amount"}),u.jsx("th",{children:"Date"}),u.jsx("th",{children:"Status"})]})}),u.jsx("tbody",{children:e.map(g=>u.jsxs("tr",{children:[u.jsxs("td",{children:[g.type==="deposit"?u.jsx(hb,{className:"icon-deposit"}):u.jsx(db,{className:"icon-withdraw"}),g.type.charAt(0).toUpperCase()+g.type.slice(1),g.plan&&` (${g.plan})`]}),u.jsxs("td",{children:["$",g.amount?.toLocaleString()||"N/A"]}),u.jsx("td",{children:g.goldAmount?`${g.goldAmount.toFixed(4)}g`:"N/A"}),u.jsx("td",{children:g.timestamp?.toDate().toLocaleString()||"N/A"}),u.jsx("td",{children:u.jsx("span",{className:`status-indicator ${p(g.status)}`,children:g.status?.charAt(0).toUpperCase()+g.status?.slice(1)||"Pending"})})]},g.id))})]})})]})},a9=({user:r})=>{const e="goldcorps.org",[n,s]=P.useState(!1),o=()=>{navigator.clipboard.writeText(e),s(!0),setTimeout(()=>s(!1),2e3)};return u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"Referral Program"}),u.jsx("p",{children:"Invite friends and earn rewards! Share your unique referral link."}),u.jsxs("div",{className:"referral-container",children:[u.jsx("strong",{children:"Your Referral Link:"}),u.jsx("p",{className:"referral-link",children:e}),u.jsx("button",{className:"btn-primary",onClick:o,children:n?"Copied!":"Copy Link"})]}),u.jsxs("div",{className:"referral-info",children:[u.jsx("h4",{children:"How It Works:"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Share your link with friends"}),u.jsx("li",{children:"Earn 5% bonus on their first deposit"}),u.jsx("li",{children:"Track your referrals in your dashboard"})]})]})]})},o9=({user:r,updateBalance:e,goldPrice:n})=>{const[s,o]=P.useState([]),[c,h]=P.useState(!0),[p,g]=P.useState(null),[y,x]=P.useState(!1);P.useEffect(()=>{if(!r)return;const N=pi(yn(Xe,"transactions"),fc("userId","==",r.uid),fc("type","==","deposit"),fc("status","==","completed"),ya("timestamp","desc")),V=Kc(N,M=>{const L=[];M.forEach(z=>{L.push({id:z.id,...z.data()})}),o(L),h(!1)},M=>{g("Failed to load investments."),console.error(M),h(!1)});return()=>V()},[r]);const w=N=>{if(!N.startDate||!N.nextPaymentDate)return 0;const V=new Date,M=N.nextPaymentDate.toDate();return V>=M?N.amount*parseFloat(N.profitPercent)/100:0},E=async N=>{x(!0);try{const V=w(N);if(V<=0){g("No interest available to claim yet.");return}const M=rn(Xe,"users",r.uid),L=await va(M);if(L.exists()){const W=L.data().balance||0,ee=L.data().goldBalance||0,te=V/(n||65);await pc(M,{balance:W+V,goldBalance:ee+te}),e(W+V,ee+te)}const z=rn(Xe,"transactions",N.id),F=new Date;F.setDate(F.getDate()+N.duration),await pc(z,{nextPaymentDate:ct.fromDate(F),interestEarned:V,totalInterestEarned:(N.totalInterestEarned||0)+V}),await Ho(yn(Xe,"transactions"),{userId:r.uid,type:"interest",amount:V,description:`Interest from ${N.plan}`,status:"completed",timestamp:ys()}),g(null)}catch(V){g("Failed to claim interest. Please try again."),console.error(V)}finally{x(!1)}},R=N=>N?N.toDate().toLocaleDateString():"N/A";return c?u.jsx("div",{className:"section-card",children:"Loading investments..."}):p?u.jsx("div",{className:"section-card error-message",children:p}):u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"My Investments"}),s.length===0?u.jsx("p",{children:"No active investments yet."}):u.jsx("div",{className:"investments-container",children:s.map(N=>{const V=w(N),M=N.nextPaymentDate?N.nextPaymentDate.toDate():null,L=M?Math.ceil((M-new Date)/(1e3*60*60*24)):0;return u.jsxs("div",{className:"investment-card",children:[u.jsxs("div",{className:"investment-header",children:[u.jsx("h3",{children:N.plan}),u.jsxs("span",{className:"investment-amount",children:["$",N.amount.toLocaleString()]})]}),u.jsxs("div",{className:"investment-details",children:[u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Gold Allocation:"}),u.jsxs("span",{className:"detail-value",children:[N.goldAmount?.toFixed(4),"g"]})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Profit Rate:"}),u.jsx("span",{className:"detail-value",children:N.profitPercent})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Duration:"}),u.jsxs("span",{className:"detail-value",children:[N.duration," days"]})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Start Date:"}),u.jsx("span",{className:"detail-value",children:R(N.startDate)})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Next Payment:"}),u.jsx("span",{className:"detail-value",children:R(N.nextPaymentDate)})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Days Until Payment:"}),u.jsx("span",{className:"detail-value",children:L>0?L:0})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Interest Available:"}),u.jsxs("span",{className:"detail-value",children:["$",V.toFixed(2)]})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Total Interest Earned:"}),u.jsxs("span",{className:"detail-value",children:["$",(N.totalInterestEarned||0).toFixed(2)]})]})]}),V>0&&u.jsx("button",{className:"btn-primary",onClick:()=>E(N),disabled:y,children:y?"Processing...":"Claim Interest"})]},N.id)})})]})},l9=()=>{const r=vs(),[e,n]=P.useState(null),[s,o]=P.useState(null),[c,h]=P.useState("dashboard"),[p,g]=P.useState(0),[y,x]=P.useState(0),[w,E]=P.useState(!1),[R,N]=P.useState(!0),[V,M]=P.useState(null),[L,z]=P.useState(null),[F,W]=P.useState(null),ee="f369cba8b4f18e797805679cfb09562b",te="USD",O=async()=>{try{const D=localStorage.getItem("goldPriceData");if(D){const{price:he,timestamp:Ee}=JSON.parse(D),X=new Date().getTime(),fe=720*60*1e3;if(X-Ee<fe){z(he);return}}const S=await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${ee}&base=XAU&currencies=${te}`);if(!S.ok)throw new Error("Failed to fetch gold price");const I=await S.json();if(I.rates&&I.rates[te]){const he=I.rates[te]/28.3495;z(he),localStorage.setItem("goldPriceData",JSON.stringify({price:he,timestamp:new Date().getTime()})),W(null)}else throw new Error("Invalid API response format")}catch(D){console.error("Error fetching gold price:",D),W("Failed to fetch current gold price. Using default value.");const S=localStorage.getItem("goldPriceData");if(S){const{price:I}=JSON.parse(S);z(I)}else z(119.5)}};P.useEffect(()=>{O();const D=setInterval(O,720*60*1e3);return()=>clearInterval(D)},[]),P.useEffect(()=>{const D=Zb(cr,S=>{if(S){n(S);const I=rn(Xe,"users",S.uid),he=Kc(I,Ee=>{if(Ee.exists()){const X=Ee.data();o(X),g(X.balance||0),x(X.goldBalance||0),N(!1)}else M("User data not found."),N(!1)},Ee=>{M("Failed to load user data."),console.error(Ee),N(!1)});return()=>he()}else r("/login")});return()=>D()},[r]);const C=(D,S)=>{g(D),x(S)},j=async()=>{try{await Ng(cr),r("/login")}catch(D){console.error("Logout error:",D.message),M("Failed to logout. Please try again.")}};if(R)return u.jsx("div",{className:"loading",children:"Loading..."});if(V||!e||!s)return u.jsx("div",{className:"error-message",children:V||"Failed to load dashboard."});const k=()=>{switch(c){case"dashboard":return u.jsxs("div",{className:"overview-container",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Account Balance"}),u.jsxs("p",{className:"metric",children:["$",p.toLocaleString()]}),u.jsx("p",{className:"subtext",children:"Available USD"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Gold Holdings"}),u.jsxs("p",{className:"metric",children:[y.toFixed(2),"g"]}),u.jsx("p",{className:"subtext",children:"Pure Gold"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Total Value"}),u.jsxs("p",{className:"metric",children:["$",(p+y*(L||65)).toLocaleString()]}),u.jsx("p",{className:"subtext",children:"Based on current gold prices"})]}),u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"Recent Activity"}),u.jsxs("ul",{className:"activity-list",children:[u.jsxs("li",{children:[u.jsx(bo,{className:"activity-icon"})," Account created ",u.jsx("span",{className:"activity-time",children:"1 week ago"})]}),p>0&&u.jsxs("li",{children:[u.jsx(bo,{className:"activity-icon"})," Deposit of $",p.toLocaleString()," ",u.jsx("span",{className:"activity-time",children:"Recently"})]}),y>0&&u.jsxs("li",{children:[u.jsx(bo,{className:"activity-icon"})," Purchased ",y.toFixed(2),"g of gold ",u.jsx("span",{className:"activity-time",children:"Recently"})]})]})]})]});case"deposit":return u.jsx(r9,{user:e,updateBalance:C,goldPrice:L});case"withdraw":return u.jsx(i9,{user:e,balance:p,goldBalance:y,updateBalance:C,goldPrice:L});case"history":return u.jsx(s9,{user:e});case"investments":return u.jsx(o9,{user:e,updateBalance:C,goldPrice:L});case"referral":return u.jsx(a9,{user:e});case"profile":return u.jsx(t9,{user:e});case"settings":return u.jsx(n9,{user:e});default:return null}};return u.jsxs("div",{className:"dashboard-container",children:[u.jsx(JR,{user:e}),u.jsxs("div",{className:`sidebar ${w?"mobile-open":""}`,children:[u.jsxs("div",{className:"sidebar-header",children:[u.jsx(P3,{size:24,className:"sidebar-icon"}),u.jsx("h2",{className:"gold-text",children:"MyWallet"})]}),u.jsx("button",{className:"mobile-close-btn",onClick:()=>E(!1),children:u.jsx(qd,{})}),u.jsxs("ul",{className:"nav-list",children:[u.jsxs("li",{className:`nav-item ${c==="dashboard"?"nav-item-active":""}`,onClick:()=>{h("dashboard"),E(!1)},children:[u.jsx(ob,{})," ",u.jsx("span",{children:"Dashboard"})]}),u.jsxs("li",{className:`nav-item ${c==="deposit"?"nav-item-active":""}`,onClick:()=>{h("deposit"),E(!1)},children:[u.jsx(hb,{})," ",u.jsx("span",{children:"Buy Gold"})]}),u.jsxs("li",{className:`nav-item ${c==="withdraw"?"nav-item-active":""}`,onClick:()=>{h("withdraw"),E(!1)},children:[u.jsx(db,{})," ",u.jsx("span",{children:"Withdraw"})]}),u.jsxs("li",{className:`nav-item ${c==="investments"?"nav-item-active":""}`,onClick:()=>{h("investments"),E(!1)},children:[u.jsx(Ao,{})," ",u.jsx("span",{children:"My Investments"})]}),u.jsxs("li",{className:`nav-item ${c==="history"?"nav-item-active":""}`,onClick:()=>{h("history"),E(!1)},children:[u.jsx(ub,{})," ",u.jsx("span",{children:"History"})]}),u.jsxs("li",{className:`nav-item ${c==="referral"?"nav-item-active":""}`,onClick:()=>{h("referral"),E(!1)},children:[u.jsx(O3,{})," ",u.jsx("span",{children:"Referral"})]}),u.jsxs("li",{className:`nav-item ${c==="profile"?"nav-item-active":""}`,onClick:()=>{h("profile"),E(!1)},children:[u.jsx(M3,{})," ",u.jsx("span",{children:"Profile"})]}),u.jsxs("li",{className:`nav-item ${c==="settings"?"nav-item-active":""}`,onClick:()=>{h("settings"),E(!1)},children:[u.jsx(lb,{})," ",u.jsx("span",{children:"Settings"})]})]}),u.jsxs("div",{className:"logout-btn",onClick:j,children:[u.jsx(yc,{})," ",u.jsx("span",{children:"Logout"})]})]}),u.jsxs("div",{className:"main-content",children:[u.jsxs("div",{className:"header",children:[u.jsxs("div",{className:"header-left",children:[u.jsx("button",{className:"mobile-menu-btn",onClick:()=>E(!0),children:u.jsx(b3,{})}),u.jsx("h1",{className:"title",children:c==="dashboard"?"Dashboard":c==="deposit"?"Buy Gold":c.charAt(0).toUpperCase()+c.slice(1)})]}),u.jsxs("span",{className:"user-info",children:["Balance: ",u.jsxs("strong",{children:["$",p.toLocaleString()]})," | Gold: ",u.jsxs("strong",{children:[y.toFixed(2),"g"]}),L&&u.jsxs("span",{className:"gold-price-header",children:[" | Gold Price: $",L.toFixed(2),"/g"]}),F&&u.jsx("span",{className:"error-message",style:{marginLeft:"10px"},children:F})]})]}),u.jsx("div",{className:"content-area",children:k()})]}),u.jsx("style",{jsx:!0,children:`
        /* Dashboard Styles */
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
        }

        /* Sidebar */
        .sidebar {
          width: 280px;
          background: linear-gradient(180deg, #2c3e50 0%, #1a2530 100%);
          color: #ecf0f1;
          padding: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 5px 0 15px rgba(0,0,0,0.1);
          position: relative;
          z-index: 100;
          overflow: hidden;
        }

        .sidebar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          padding: 25px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.1);
        }

        .sidebar-icon {
          margin-right: 12px;
          font-size: 24px;
          color: #FFD700;
        }

        .gold-text {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(90deg, #FFD700, #DAA520, #FFD700);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShimmer 3s ease infinite;
          letter-spacing: 0.5px;
        }

        @keyframes goldShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .nav-list {
          list-style: none;
          padding: 20px 0;
          margin: 0;
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          padding: 14px 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 4px 10px;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background: #FFD700;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-item:hover {
          background: rgba(255,255,255,0.05);
          transform: translateX(5px);
        }

        .nav-item:hover::before {
          opacity: 1;
        }

        .nav-item-active {
          background: linear-gradient(90deg, rgba(255,215,0,0.15) 0%, transparent 100%);
          color: #FFD700;
        }

        .nav-item-active::before {
          opacity: 1;
        }

        .nav-item svg {
          margin-right: 12px;
          font-size: 18px;
          min-width: 20px;
          transition: transform 0.3s ease;
        }

        .nav-item:hover svg {
          transform: scale(1.1);
        }

        .logout-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 20px;
          cursor: pointer;
          background: linear-gradient(90deg, #e74c3c 0%, #c0392b 100%);
          margin: 20px;
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 极 15px rgba(231, 76, 60, 0.3);
        }

        .logout-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
        }

        .logout-btn svg {
          margin-right: 10px;
          font-size: 18px;
        }

        /* Mobile Menu */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          color: #2c3e50;
          cursor: pointer;
          margin-right: 15极;
          padding: 8px;
          border-radius: 8px;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1001;
        }

        .mobile-close-btn {
          display: none;
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 24px;
          color: white;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          background: rgba(0,0,0,0.2);
        }

        /* Main Content */
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 0;
          width: 100%;
          overflow: hidden;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background: white;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z极: 90;
        }

        .header-left {
          display: flex;
          align-items: center;
        }

        .title {
          font-size: 28px;
          font-weight: 700;
          color: #2c3e50;
          margin: 0;
          background: linear-gradient(90deg, #2c3e50 0%, #4a6580 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .user-info {
          font-size: 14px;
          font-weight: 500;
          color: #7f8c8d;
          background: #f8f9fa;
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid #e9ecef;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gold-price-header {
          color: #D4AF37;
          font-weight: 600;
        }

        .content-area {
          flex: 1;
          padding: 30px;
          overflow-y: auto;
        }

        /* Cards and Layout */
        .overview-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-bottom: 30px;
        }

        .card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          border: 1px solid rgba(255,255,255,0.5);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .metric {
          font-size: 32px;
          font-weight: 800;
          color: #0080ffff;
          margin: 15px 0;
          background: linear-gradient(90deg, #2c3e50 0%, #4a6580 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtext {
          color: #7f8c8d;
          font-size: 14px;
          font-weight: 500;
        }

        .section-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 5px 25px rgba(0,0,0,0.06);
          margin-bottom: 30px;
          border: 1px solid #f1f3f4;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 25px;
          color: #2c3e50;
          position: relative;
          padding-bottom极 15px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #FFD700, #DAA520);
          border-radius: 3px;
        }

        /* Gold Price Info */
        .gold-price-info {
          padding: 12px 16px;
          background: #f8f9fa;
          border-radius: 8px;
          margin-bottom: 20px;
          border: 1px solid #e9ecef;
          font-size: 16px;
          color: #2c3e50;
        }

        .gold-calculation {
          margin: 15px 0;
          padding: 12px;
          background: #f0f8ff;
          border-radius: 8px;
          border: 1px solid #cce5ff;
        }

        .gold-amount {
          font-size: 18px;
          font-weight: 700;
          color: #D4AF37;
          margin-top: 5px;
        }

        /* Profile Section */
        .profile-container {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 5px 25px rgba(0,0,0,0.06);
        }

        .profile-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .profile-card {
          padding: 20px;
          background: #f8f9fa;
          border-radius: 12px;
          border-left: 4px solid #3498db;
        }

        .bio-card {
          padding: 20px;
          background: #f8f9fa;
          border-radius: 12px;
          border-left: 4px solid #27ae60;
          margin-bottom: 25px;
        }

        .wallet-info {
          padding: 25px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 16px;
          border: 1px solid #e9ecef;
        }

        .wallet-list {
          list-style: none;
          padding: 0;
          margin: 15px 0 0 0;
        }

        .wallet-list li {
          margin-bottom: 12px;
          padding: 12px;
          background: white;
          border-radius: 8px;
          border: 1px极 #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .link {
          color: #3498db;
          cursor: pointer;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .link:hover {
          color: #2980b9;
          text-decoration: underline;
        }

        /* Settings Section */
        .settings-container {
          display: grid;
          gap: 25px;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }

        .settings-card {
          padding: 25px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0极0,0,0.05);
          border: 1px solid #f1极3f4;
        }

        .setting-item {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        /* Buttons */
        .btn-primary {
          padding: 12px 24px;
          background: linear-gradient(90deg, #3498db 0%, #2980b9 100%);
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
        }

        .btn-primary:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
          box-shadow: none;
        }

        .btn-secondary {
          padding: 12px 24px;
          background: white;
          color: #2c3e50;
          border: 1px solid #bdc3c7;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 14px;
        }

        .btn-secondary:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        /* Messages */
        .success-message {
          color: #27ae60;
          display: flex;
          align-items: center;
          margin-top: 12px;
          padding: 10px 15px;
          background: #d4edda;
          border-radius: 8px;
          border: 1px solid #c3e6cb;
        }

        .error-message {
          color: #e74c3c;
          display: flex;
          align-items: center;
          margin-top: 12px;
          padding: 10px 15px;
          background: #f8d7da;
          border-radius: 8px;
          border: 1px solid #f5c6cb;
        }

        /* Gold Plans */
        .gold-plans-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-bottom: 30px;
        }

        .gold-plan-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 30px 25px;
          border-radius: 20px;
          box-shadow: 0 5px 25px rgba(0,0,0,0.08);
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .gold-plan-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
        }

        .gold-plan-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          border-color: #FFD700;
        }

        .selected-plan {
          border-color: #D4AF37;
          background: linear-gradient(135deg, #FFF9C4 0%, #FFFDE7 100%);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.2);
        }

        .plan-title {
          font-size: 20px;
          font-weight: 700;
          color: #D4AF37;
          margin: 15px 0;
        }

        .plan-price {
          font-size: 28px;
          font-weight: 800;
          color: #2c3e50;
          margin: 15px 0;
        }

        .极lan-description {
          color: 7f8c8d;
          margin: 12px 0;
          line-height: 1.5;
        }

        /* Deposit Section */
        .deposit-address {
          padding: 20px;
          background: #f8f9fa;
          border-radius: 12px;
          border: 1px solid #e9ecef;
          margin: 20px 0;
          text-align: center;
          word-break: break-all;
          font-family: 'Courier New', monospace;
        }

        .deposit-address button {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .receipt-container {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 16px;
          margin: 25px 0;
          border: 1px solid #e9ecef;
        }

        .status-success {
          color: #27ae60;
          font-weight: 600;
        }

        /* Withdraw Section */
        .balance-info {
          margin-bottom: 25px;
          padding: 15px 20px;
          background: #极8f9fa;
          border-radius: 12px;
          border: 1px solid #e9ecef;
        }

        .withdraw-form {
          display: grid;
          gap: 20px;
          margin-bottom: 25px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-weight: 600;
          color: #2c3e50;
          font-size: 14px;
        }

        .form-group input, .form-group select {
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid #ddd;
          font-size: 16px;
          transition: all 0.3s ease;
          background: white;
        }

        .form-group input:focus, .form-group select:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }

        .withdraw-conversion {
          font-size: 14px;
          color: #7f8c8d;
          margin-top: 5px;
        }

        .withdrawal-info {
          padding: 20px;
          background: #f8f9fa;
          border-radius: 12px;
          border: 1px solid #e9ecef;
        }

        .withdrawal-info ul {
          margin: 15px 0 0 0;
          padding-left: 20px;
        }

        .withdrawal-info li {
          margin-bottom: 8极;
          color: #7f8c8d;
        }

        /* History Section */
        .table-container {
          overflow-x: auto;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-top: 20px;
        }

        .transactions-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: white;
          border-radius: 12px;
          overflow: hidden;
        }

        .transactions-table th {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 16px;
          text-align: left;
          font-weight: 600;
          color: #2c3e50;
          border-bottom: 1px solid #e9ecef;
        }

        .transactions-table td {
          padding: 16px;
          border-bottom: 1px solid #f1f3f4;
          color: #2c3e50;
        }

        .transactions-table tr:last-child td {
          border-bottom: none;
        }

        .transactions-table tr:hover {
          background: #f8f9fa;
        }

        .icon-deposit {
          color: #27ae60;
          margin-right: 8px;
          font-size: 16px;
        }

        .icon-withdraw {
          color: #e74c3c;
          margin-right: 8px;
          font-size: 16px;
        }

        .status-indicator {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-pending {
          background: #FFF3CD;
          color: #856404;
        }

        .status-completed {
          background: #D4EDDA;
          color极 #155724;
        }

        .status-processing {
          background: #CCE5FF;
          color: #004085;
        }

        .status-rejected {
          background: #F8D7DA;
          color: #721C24;
        }

        .next-payment {
          display: flex;
          align-items: center;
          color: #3498db;
          font-size: 14px;
        }

        /* Investments Section */
        .investments-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .investment-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          border: 1px solid rgba(255,255,255,0.5);
          transition: all 0.3s ease;
        }

        .investment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }

        .investment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e9ecef;
        }

        .investment-header h3 {
          margin: 0;
          color: #2c3e50;
          font-size: 18px;
        }

        .investment-amount {
          font-size: 20px;
          font-weight: 700;
          color: #27ae60;
        }

        .investment-details {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        .investment-detail {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-label {
          font-weight: 600;
          color: #7f8c8d;
        }

        .detail-value {
          font-weight: 600;
          color: #2c3e50;
        }

        /* Referral Section */
        .referral-container {
          padding: 25px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 16极;
          border: 1px dashed #bdc3c7;
          margin-top: 25px;
          text-align: center;
        }

        .referral-link {
          overflow-wrap: break-word;
          margin: 15px 0;
          color: #3498db;
          font-family: 'Courier New', monospace;
          padding: 12px;
          background: white;
          border-radius: 8px;
          border: 1px solid #e9ecef;
        }

        .referral-info {
          margin-top: 20px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 12px;
          border: 1px solid #e9ecef;
        }

        .referral-info ul {
          margin: 15px 极 0 0;
          padding-left: 20px;
        }

        .referral-info li {
          margin-bottom: 8px;
          color: #7f8c8d;
        }

        /* Activity List */
        .activity-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .activity-list li {
          display: flex;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #f1f3f4;
          transition: background 0.3s ease;
        }

        .activity-list li:hover {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 15px;
        }

        .activity-icon {
          margin-right: 12px;
          color: #27ae60;
          font-size: 16px;
        }

        .activity-time {
          font-size: 12px;
          color: #95a5a6;
          margin-left: auto;
          background: #f1f3f4;
          padding: 4px 8px;
          border-radius: 12px;
        }

        /* Loading */
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
          font-size: 16px;
          color: #7f8c8d;
        }

        /* Chat Window Styles */
        .chat-button {
          position: fixed;
          bottom: 25px;
          right: 25px;
          background: linear-gradient(90deg, #3498db 0%, #2980b9 100%);
          color: white;
          padding: 15px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
          z-index: 999;
          transition: all 0.3s ease;
        }

        .chat-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(52, 152, 219, 0.4);
        }

        .chat-button-hidden {
          display: none;
        }

        .chat-window {
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 350px;
          height: 450px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 5px 25px rgba(0,0,0,极.15);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          overflow: hidden;
        }

        .chat-header {
          padding: 15px 20px;
          background: linear-gradient(90deg, #2c3e50 0%, #4a6580 极00%);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-header h3 {
          margin: 0;
          font-size: 16px;
        }

        .chat-close-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-messages {
          flex: 1;
          padding: 15px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chat-empty {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          text-align: center;
          color: #7f8c8d;
        }

        .message {
          display: flex;
          max-width: 80%;
        }

        .user-message {
          align-self: flex-end;
        }

        .admin-message {
          align-self: flex-start;
        }

        .message-content {
          padding: 10px 15px;
          border-radius: 18px;
          position: relative;
        }

        .user-message .message-content {
          background: #3498db;
          color: white;
          border-bottom-right-radius: 5px;
        }

        .admin-message .message-content {
          background: #f1f3f4;
          color: #2c3e50;
          border-bottom-left-radius: 5px;
        }

        .message-time {
          font-size: 10px;
          opacity: 0.8;
          display: block;
          margin-top: 5px;
        }

        .chat-input-form {
          padding: 15px;
          border-top: 1px solid #e9ecef;
        }

        .chat-error {
          color: #e74c3c;
          font-size: 12px;
          margin-bottom: 10px;
         极ext-align: center;
        }

        .chat-input-container {
          display: flex;
          gap: 10px;
        }

        .chat-input-container input {
          flex: 1;
          padding: 12px 15px;
          border-radius: 20px;
          border: 1px solid #ddd;
          outline: none;
        }

        .chat-input-container input:focus {
          border-color: #3498db;
        }

        .chat-send-btn {
          background: #3498db;
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .chat-send-btn:hover:not(:disabled) {
          background: #2980b9;
        }

        .chat-send-btn:极isabled {
          background: #bdc3c7;
          cursor: not-allowed;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .sidebar {
            width: 250px;
          }
          
          .content-area {
            padding: 25px;
          }
        }

        @media (max-width: 992px) {
          .sidebar {
            width: 220px;
          }
          
          .gold-text {
            font-size: 22px;
          }
          
          .title {
            font-size: 24px;
          }
          
          .overview-container {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .dashboard-container {
            position: relative;
          }
          
          .sidebar {
            position: fixed;
            left: -100%;
            top: 0;
            bottom: 0;
            width: 85%;
            max-width: 320px;
            z-index: 1000;
            transition: left 0.3s ease;
            box-shadow: 5px 0 25px rgba(0,0,0,0.2);
          }
          
          .sidebar.mobile-open {
            left: 0;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .mobile-close-btn {
            display: block;
          }
          
          .header {
            padding: 15px 20px;
          }
          
          .content-area {
            padding: 20px;
          }
          
          .overview-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .settings-container {
            grid-template-columns: 1极;
          }
          
          .gold-plans-container {
            grid-template-columns: 1fr;
          }
          
          .investments-container {
            grid-template-columns: 1fr;
          }
          
          .profile-grid {
            grid-template-columns: 1fr;
          }
          
          .title {
            font-size: 22px;
          }
          
          .user-info {
            font-size: 13px;
            padding: 6px 12px;
          }
        }

        @media (max-width: 576px) {
          .header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .header-left {
            width: 100%;
          }
          
          .content-area {
            padding: 15px;
          }
          
          .card, .section-card, .profile-container, .settings-container {
            padding: 20px;
          }
          
          .metric {
            font-size: 28px;
          }
          
          .section-title {
            font-size: 20px;
          }
          
          .gold-plan-card {
            padding: 20px 15px;
          }
          
          .plan-title {
            font-size: 18px;
          }
          
          .plan-price {
            font-size: 24px;
          }
          
          .btn-primary, .btn-secondary {
            width: 100%;
            margin: 5px 0;
          }
          
          .transactions-table {
            font-size: 14px;
          }
          
          .transactions-table th,
          .transactions-table td {
            padding: 12px 8px;
          }
          
          .investment-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        /* Animation for page transitions */
        .content-area > * {
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Scrollbar styling */
        .content-area::-webkit-scrollbar {
          width: 8px;
        }

        .content-area::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .content-area::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }

        .content-area::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `})]})};function H4(r){return ke({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(r)}const c9=()=>{const[r,e]=P.useState(""),[n,s]=P.useState(""),[o,c]=P.useState(""),[h,p]=P.useState(""),[g,y]=P.useState(!1),[x,w]=P.useState(!1),E=vs(),R=z=>z&&typeof z.fullName=="string"&&z.fullName.trim().length>1&&Array.isArray(z.wallets)&&z.wallets.length>0,N=async z=>{const F=rn(Xe,"users",z.uid),W=await va(F),ee=W.exists()?W.data():{};R(ee)?E("/dashboard"):E("/profile")},V=async z=>{z.preventDefault(),c("");try{const F=await Xb(cr,r,n);await N(F.user)}catch{c("Invalid email or password")}},M=async()=>{try{const z=new Cr,W=(await c_(cr,z)).user,ee=rn(Xe,"users",W.uid);(await va(ee)).exists()||await Sh(ee,{fullName:W.displayName||"",email:W.email,createdAt:new Date,wallets:[]}),await N(W)}catch{c("Google login failed")}},L=async z=>{if(z.preventDefault(),c(""),p(""),!r){c("Enter your email first");return}try{await Ag(cr,r),p("Password reset email sent")}catch{c("Failed to send reset email")}};return u.jsxs("div",{className:"body",children:[u.jsx(ug,{}),u.jsxs("div",{className:"page",children:[u.jsx("h1",{className:"h1",children:x?"Reset Password":"Login"}),u.jsx("div",{className:"auth-card",children:x?u.jsxs("form",{onSubmit:L,className:"login-form",children:[u.jsx("input",{className:"input",type:"email",placeholder:"Enter your email",value:r,onChange:z=>e(z.target.value),required:!0}),u.jsx("button",{className:"btn btn1",type:"submit",children:"Send Reset Link"}),u.jsx("span",{className:"forgot",onClick:()=>w(!1),children:"← Back to login"}),o&&u.jsx("span",{className:"error-text",children:o}),h&&u.jsx("span",{className:"success-text",children:h})]}):u.jsxs("form",{onSubmit:V,className:"login-form",children:[u.jsx("input",{className:"input",type:"email",placeholder:"Email",value:r,required:!0,onChange:z=>e(z.target.value)}),u.jsxs("div",{className:"password-wrapper",children:[u.jsx("input",{className:"input",type:g?"text":"password",placeholder:"Password",value:n,required:!0,onChange:z=>s(z.target.value)}),u.jsx("span",{className:"eye",onClick:()=>y(!g),children:g?u.jsx(hg,{}):u.jsx(fg,{})})]}),u.jsx("button",{className:"btn btn1",type:"submit",children:"Login"}),u.jsxs("button",{type:"button",className:"google-btn",onClick:M,children:[u.jsx(H4,{})," Continue with Google"]}),u.jsx("span",{className:"forgot",onClick:()=>w(!0),children:"Forgot password?"}),u.jsxs("p",{children:["Don’t have an account?"," ",u.jsx(_a,{to:"/signup",className:"Login-txt",children:"Signup"})]}),o&&u.jsx("span",{className:"error-text",children:o})]})})]})]})},u9=()=>{const[r,e]=P.useState("signup"),[n,s]=P.useState(!1),[o,c]=P.useState(""),[h,p]=P.useState(""),[g,y]=P.useState(""),[x,w]=P.useState(""),[E,R]=P.useState(""),N=vs(),V=()=>{w(""),R("")},M=async F=>{if(F.preventDefault(),V(),g.length<6){w("Password must be at least 6 characters");return}try{s(!0);const ee=(await C5(cr,o,g)).user;await Sh(rn(Xe,"users",ee.uid),{fullName:h,email:o,createdAt:new Date,wallets:[]}),sessionStorage.setItem("newSignup","true"),N("/profile")}catch(W){console.error(W.message),w("Signup failed. Try again.")}finally{s(!1)}},L=async()=>{V();try{s(!0);const F=new Cr,ee=(await c_(cr,F)).user;await Sh(rn(Xe,"users",ee.uid),{fullName:ee.displayName||"",email:ee.email,createdAt:new Date,wallets:[]},{merge:!0}),sessionStorage.setItem("newSignup","true"),N("/profile")}catch(F){console.error(F.message),w("Google signup failed. Try again.")}finally{s(!1)}},z=async F=>{if(F.preventDefault(),V(),!o){w("Enter your email address");return}try{s(!0),await Ag(cr,o),R("Password reset link sent to your email ✔")}catch(W){console.error(W.message),w("Failed to send reset email")}finally{s(!1)}};return u.jsxs("div",{className:"body",children:[u.jsx(ug,{}),u.jsx("div",{className:"page",children:u.jsxs("form",{onSubmit:r==="signup"?M:z,children:[u.jsx("h1",{className:"h1",children:r==="signup"?"Create Account":"Reset Password"}),u.jsx("input",{className:"input",type:"email",placeholder:"Email address",required:!0,value:o,onChange:F=>c(F.target.value),disabled:n}),r==="signup"&&u.jsxs(u.Fragment,{children:[u.jsx("input",{className:"input",type:"text",placeholder:"Full name",required:!0,value:h,onChange:F=>p(F.target.value),disabled:n}),u.jsx("input",{className:"input",type:"password",placeholder:"Password",required:!0,value:g,onChange:F=>y(F.target.value),disabled:n})]}),u.jsx("button",{type:"submit",className:"btn btn1",disabled:n,children:n?"Processing...":r==="signup"?"Sign Up":"Send Reset Link"}),r==="signup"&&u.jsxs("button",{type:"button",className:"google-btn",onClick:L,disabled:n,children:[u.jsx(H4,{className:"google-icon"}),"Continue with Google"]}),r==="signup"?u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:["Already have an account?"," ",u.jsx(_a,{to:"/login",className:"Login-txt",children:"Login"})]}),u.jsx("p",{className:"Login-txt",style:{cursor:"pointer"},onClick:()=>{V(),e("reset")},children:"Forgotten password?"})]}):u.jsx("p",{className:"Login-txt",style:{cursor:"pointer"},onClick:()=>{V(),e("signup")},children:"← Back to signup"}),x&&u.jsx("span",{className:"error-text",children:x}),E&&u.jsx("span",{style:{color:"#2ecc71",textAlign:"center"},children:E})]})})]})},d9=()=>{const[r,e]=P.useState(null),[n,s]=P.useState(null),[o,c]=P.useState(!0),[h,p]=P.useState(null),[g,y]=P.useState("USD"),[x,w]=P.useState([]),[E,R]=P.useState(null),N=P.useRef(),V=P.useRef(),M="f369cba8b4f18e797805679cfb09562b",L=async()=>{try{c(!0),p(null);const W=await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${M}&base=XAU&currencies=${g}`);if(!W.ok)throw new Error(`API Error: ${W.status}`);const te=(await W.json()).rates[g];N.current?(N.current.classList.add("price-updating"),setTimeout(()=>{r!==null&&s(r),e(te),R(new Date),N.current.classList.remove("price-updating")},500)):(e(te),R(new Date)),w(O=>[...O,{price:te,timestamp:new Date}].slice(-20))}catch(W){p("Failed to fetch gold prices. Try again later."),console.error("Error fetching gold price:",W),V.current&&clearTimeout(V.current),V.current=setTimeout(()=>L(),1e4)}finally{c(!1)}};P.useEffect(()=>{L();const W=setInterval(L,432e5);return()=>{clearInterval(W),V.current&&clearTimeout(V.current)}},[g]);const z=()=>!n||r===null?0:((r-n)/n*100).toFixed(2),F=W=>W===null?"--":new Intl.NumberFormat("en-US",{style:"currency",currency:g,minimumFractionDigits:2}).format(W);return u.jsxs("div",{children:[u.jsx("style",{children:`
        body {
          background: #f9f9f9;
          font-family: "Poppins", sans-serif;
          display: flex;
          justify-content: center;
          padding: 20px;
        }

        .gold-card {
          background: white;
          border: 1px solid #e6c200;
          border-radius: 12px;
          padding: 24px;
          max-width: 420px;
          text-align: center;
          box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
          margin: auto;
        }

        .gold-card:hover {
          transform: translateY(-4px);
          box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.12);
        }

        .title {
          color: #333;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .price {
          font-size: 2.4rem;
          font-weight: bold;
          color: #b8860b; /* Darker premium gold */
          transition: all 0.4s ease;
        }

        .price-updating {
          transform: scale(1.08);
          color: #e6c200;
        }

        .change {
          font-size: 1rem;
          margin: 12px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .change.up {
          color: #1a8f3b;
        }

        .change.down {
          color: #c0392b;
        }

        .timestamp {
          font-size: 0.85rem;
          color: #666;
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .refresh-btn {
          margin-top: 18px;
          padding: 10px 16px;
          background: #b8860b;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .refresh-btn:hover {
          background: #e6c200;
        }

        .error {
          color: #c0392b;
          font-weight: 500;
        }

        .loading {
          color: #b8860b;
          font-weight: 500;
        }
      `}),u.jsxs("div",{className:"gold-card",children:[u.jsx("h2",{className:"title",children:"Gold Price Tracker"}),o&&u.jsx("p",{className:"loading",children:"Loading..."}),h&&u.jsx("p",{className:"error",children:h}),!o&&r!==null&&u.jsxs("div",{children:[u.jsx("h3",{ref:N,className:"price",children:F(r)}),n!==null&&u.jsxs("p",{className:`change ${r>=n?"up":"down"}`,children:[r>=n?u.jsx(v3,{}):u.jsx(g3,{}),F(Math.abs(r-n))," (",z(),"%)"]}),u.jsxs("p",{className:"timestamp",children:[u.jsx(So,{})," ",E&&E.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})]})]})},h9=()=>{const r=vs(),[e,n]=P.useState({fullName:"",username:"",location:"",dob:"",phone:"",gender:"",occupation:"",bio:"",btcWallet:"",ethWallet:"",usdtWallet:""}),[s,o]=P.useState(!0),[c,h]=P.useState(!1),[p,g]=P.useState(""),[y,x]=P.useState(""),[w,E]=P.useState(null),[R,N]=P.useState(!1),V=z=>{const{name:F,value:W}=z.target;n(ee=>({...ee,[F]:W}))};P.useEffect(()=>{N(!0);const z=Zb(cr,async F=>{if(!F){r("/login");return}E(F);try{const W=rn(Xe,"users",F.uid),ee=await va(W);if(ee.exists()){const te=ee.data(),O=te.wallets&&te.wallets.find(k=>k.type==="btc")?.address||"",C=te.wallets&&te.wallets.find(k=>k.type==="eth")?.address||"",j=te.wallets&&te.wallets.find(k=>k.type==="usdt")?.address||"";n(k=>({...k,...te,btcWallet:O,ethWallet:C,usdtWallet:j}))}}catch(W){console.error("Failed to load profile:",W),g("Failed to load profile. Please try again.")}finally{o(!1)}});return()=>z()},[r]);const M=()=>e.fullName.trim().length>1&&e.username.trim().length>1&&e.phone.trim().length>=10&&e.dob,L=async z=>{if(z.preventDefault(),!!w){if(!M()){g("Please fill in all required fields.");return}h(!0),g(""),x("");try{const F=rn(Xe,"users",w.uid),W=[];e.btcWallet&&W.push({type:"btc",address:e.btcWallet}),e.ethWallet&&W.push({type:"eth",address:e.ethWallet}),e.usdtWallet&&W.push({type:"usdt",address:e.usdtWallet});const ee={...e,email:w.email,wallets:W,updatedAt:ys()};delete ee.btcWallet,delete ee.ethWallet,delete ee.usdtWallet,(await va(F)).data()?.createdAt||(ee.createdAt=ys()),await Sh(F,ee,{merge:!0}),x("Profile updated successfully!"),setTimeout(()=>r("/dashboard"),1200)}catch(F){console.error("Save failed:",F),g("Could not save profile. Please try again.")}finally{h(!1)}}};return s?u.jsxs("div",{className:"loader-container",children:[u.jsx("div",{className:"spinner"}),u.jsx("p",{children:"Loading Profile..."})]}):u.jsxs("div",{className:"profile-page",children:[u.jsxs("div",{className:`profile-container ${R?"mounted":""}`,children:[u.jsx("h1",{className:"profile-title",children:"Complete Your Profile"}),u.jsx("form",{onSubmit:L,className:"profile-form",children:u.jsxs("div",{className:"form-grid",children:[["fullName","username"].map((z,F)=>u.jsx("div",{className:"form-group animated-item",style:{animationDelay:`${F*.1}s`},children:u.jsx("input",{name:z,type:"text",placeholder:z==="fullName"?"Full Name *":"Username *",value:e[z],onChange:V,required:!0,className:"form-input"})},z)),u.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.2s"},children:u.jsx("input",{name:"location",type:"text",placeholder:"Location",value:e.location,onChange:V,className:"form-input"})}),u.jsxs("div",{className:"form-group animated-item",style:{animationDelay:"0.3s"},children:[u.jsx("label",{className:"input-label",children:"Date of Birth *"}),u.jsx("input",{name:"dob",type:"date",value:e.dob,onChange:V,className:"form-input",required:!0})]}),u.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.4s"},children:u.jsx("input",{name:"phone",type:"tel",placeholder:"Phone Number *",value:e.phone,onChange:V,required:!0,className:"form-input"})}),u.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.5s"},children:u.jsxs("select",{name:"gender",value:e.gender,onChange:V,className:"form-select",children:[u.jsx("option",{value:"",children:"Select Gender"}),u.jsx("option",{value:"Male",children:"Male"}),u.jsx("option",{value:"Female",children:"Female"}),u.jsx("option",{value:"Other",children:"Other"})]})}),u.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.6s"},children:u.jsx("input",{name:"occupation",type:"text",placeholder:"Occupation",value:e.occupation,onChange:V,className:"form-input"})}),u.jsx("div",{className:"form-group full-width animated-item",style:{animationDelay:"0.7s"},children:u.jsx("textarea",{name:"bio",placeholder:"Bio (Tell us about yourself)",value:e.bio,onChange:V,rows:3,className:"form-textarea"})}),u.jsxs("div",{className:"wallet-section full-width animated-item",style:{animationDelay:"0.8s"},children:[u.jsx("h3",{className:"wallet-title",children:"Wallet Addresses"}),["btcWallet","ethWallet","usdtWallet"].map((z,F)=>u.jsx("div",{className:"form-group",children:u.jsx("input",{name:z,type:"text",placeholder:z==="btcWallet"?"BTC Wallet Address":z==="ethWallet"?"ETH Wallet Address":"USDT Wallet Address",value:e[z],onChange:V,className:"form-input"})},z))]}),p&&u.jsx("div",{className:"error-message full-width animated-item",children:p}),y&&u.jsx("div",{className:"success-message full-width animated-item",children:y}),u.jsxs("div",{className:"form-actions full-width animated-item",style:{animationDelay:"0.9s"},children:[u.jsx("button",{type:"button",onClick:()=>r("/dashboard"),className:"btn-secondary",children:"Cancel"}),u.jsx("button",{type:"submit",className:"btn-primary",disabled:c||!M(),children:c?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"btn-spinner"}),"Saving..."]}):"Save Profile"})]})]})})]}),u.jsx("style",{jsx:!0,children:`
        /* Profile Page Styles */
        .profile-page {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
          padding: 16px;
          padding-top: 60px;
        }

        .profile-container {
          background: white;
          border-radius: 20px;
          padding: 24px;
          width: 100%;
          max-width: 600px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
        }

        .profile-container.mounted {
          opacity: 1;
          transform: translateY(0);
        }

        .profile-title {
          text-align: center;
          margin-bottom: 24px;
          font-weight: 700;
          font-size: 24px;
          color: #2c3e50;
          position: relative;
          padding-bottom: 12px;
        }

        .profile-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520);
          border-radius: 2px;
        }

        .profile-form {
          width: 100%;
        }

        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.5s ease forwards;
        }

        .animated-item {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.5s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .full-width {
          width: 100%;
        }

        .input-label {
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .form-input, .form-select, .form-textarea {
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid #e1e5e9;
          background: #f8f9fa;
          font-size: 16px;
          transition: all 0.3s ease;
          font-family: inherit;
          width: 100%;
          box-sizing: border-box;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: #3498db;
          background: white;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
          transform: translateY(-2px);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .wallet-section {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e1e5e9;
        }

        .wallet-title {
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 12px;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e1e5e9;
        }

        .btn-primary {
          padding: 12px 24px;
          background: linear-gradient(90deg, #FFD700 0%, #DAA520 100%);
          color: #2c3e50;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 120px;
          justify-content: center;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .btn-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid #2c3e50;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .btn-secondary {
          padding: 12px 24px;
          background: white;
          color: #2c3e50;
          border: 1px solid #bdc3c7;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .error-message {
          padding: 12px 16px;
          background: #f8d7da;
          color: #721c24;
          border-radius: 8px;
          border: 1px solid #f5c6cb;
          text-align: center;
          margin: 8px 0;
          animation: shake 0.5s ease;
        }

        .success-message {
          padding: 12px 16px;
          background: #d4edda;
          color: #155724;
          border-radius: 8px;
          border: 1px solid #c3e6cb;
          text-align: center;
          margin: 8px 0;
          animation: pulse 0.5s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #FFD700;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }

        /* Responsive Styles */
        @media (max-width: 640px) {
          .profile-page {
            padding: 12px;
            padding-top: 40px;
            align-items: flex-start;
          }

          .profile-container {
            padding: 20px;
            border-radius: 16px;
          }

          .profile-title {
            font-size: 22px;
            margin-bottom: 20px;
          }

          .form-grid {
            gap: 12px;
          }

          .form-input, .form-select, .form-textarea {
            padding: 10px 14px;
            font-size: 16px; /* Prevents zoom on iOS */
          }

          .form-actions {
            flex-direction: column-reverse;
            gap: 10px;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            text-align: center;
            padding: 14px;
          }

          .wallet-section {
            margin-top: 12px;
            padding-top: 12px;
          }
        }

        @media (max-width: 400px) {
          .profile-container {
            padding: 16px;
          }

          .profile-title {
            font-size: 20px;
          }

          .form-input, .form-select, .form-textarea {
            padding: 12px; /* Larger touch targets */
          }
        }

        /* Prevent zoom on iOS input focus */
        @media screen and (max-width: 767px) {
          input, select, textarea {
            font-size: 16px !important;
          }
        }

        /* Height adjustments for very small screens */
        @media (max-height: 600px) {
          .profile-page {
            padding-top: 20px;
            padding-bottom: 20px;
          }
        }
      `})]})},f9=()=>u.jsxs("div",{style:Bd.container,children:[u.jsx("h1",{style:Bd.heading,children:"404 - Page Not Found"}),u.jsx("p",{style:Bd.text,children:"The page you are looking for doesn't exist."}),u.jsx(_a,{to:"/",style:Bd.button,children:"Go Home"})]}),Bd={container:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#f8f9fa",color:"#333",textAlign:"center"},heading:{fontSize:"2.5rem",marginBottom:"10px"},text:{fontSize:"1.2rem",marginBottom:"20px"},button:{padding:"10px 20px",background:"#007bff",color:"#fff",borderRadius:"5px",textDecoration:"none",fontWeight:"bold"}},q4=()=>{const[r,e]=P.useState("pending"),[n,s]=P.useState([]),[o,c]=P.useState([]),[h,p]=P.useState(""),[g,y]=P.useState("all"),[x,w]=P.useState({start:"",end:""}),[E,R]=P.useState(null),[N,V]=P.useState(!0),[M,L]=P.useState(null),[z,F]=P.useState(null),[W,ee]=P.useState(!1),[te,O]=P.useState({pending:0,approved:0,rejected:0,total:0,totalAmount:0});P.useEffect(()=>{C(),j()},[]),P.useEffect(()=>{if(N)return;const q=pi(yn(Xe,"transactions"),ya("timestamp","desc")),G=Kc(q,de=>{const le=[];de.forEach(xe=>{le.push({id:xe.id,...xe.data()})}),s(le),k(le),ee(!1)},de=>{console.error("Error listening to transactions:",de),L("Failed to load real-time transactions. Please refresh.")});return()=>G()},[N]);const C=async()=>{try{V(!0),L(null);const q=pi(yn(Xe,"transactions"),ya("timestamp","desc")),G=await Ic(q),de=[];G.forEach(le=>{de.push({id:le.id,...le.data()})}),s(de),k(de)}catch(q){console.error("Error fetching transactions:",q),L("Failed to load transactions. Please check your connection.")}finally{V(!1)}},j=async()=>{try{const q=pi(yn(Xe,"users")),G=await Ic(q),de=[];G.forEach(le=>{de.push({id:le.id,...le.data()})}),c(de)}catch(q){console.error("Error fetching users:",q)}},k=q=>{const G=q.filter(Ie=>Ie.status==="pending").length,de=q.filter(Ie=>Ie.status==="completed").length,le=q.filter(Ie=>Ie.status==="rejected").length,xe=q.length,ye=q.reduce((Ie,Ve)=>Ie+(Ve.amount||0),0);O({pending:G,approved:de,rejected:le,total:xe,totalAmount:ye})},D=async q=>{try{L(null);const G=rn(Xe,"transactions",q.id);if(await pc(G,{status:"completed",approvedAt:new Date,approvedBy:"admin",processedAt:new Date}),q.type==="deposit"){const de=rn(Xe,"users",q.userId),le=await va(de);if(le.exists()){const xe=le.data(),ye=(xe.balance||0)+q.amount,Ie=(xe.goldBalance||0)+(q.goldAmount||0);await pc(de,{balance:ye,goldBalance:Ie})}}F({...q,status:"completed"})}catch(G){console.error("Error approving transaction:",G),L("Failed to approve transaction. Please try again.")}},S=async q=>{try{L(null);const G=prompt("Please enter reason for rejection:","Transaction rejected by admin");if(G===null)return;const de=rn(Xe,"transactions",q.id);await pc(de,{status:"rejected",rejectedAt:new Date,rejectedBy:"admin",rejectionReason:G,processedAt:new Date}),F({...q,status:"rejected"})}catch(G){console.error("Error rejecting transaction:",G),L("Failed to reject transaction. Please try again.")}},I=async q=>{try{if(L(null),!window.confirm(`Are you sure you want to approve ${q.length} transactions?`))return;const G=m0(Xe);for(const de of q){const le=rn(Xe,"transactions",de.id);G.update(le,{status:"completed",approvedAt:new Date,approvedBy:"admin",processedAt:new Date})}await G.commit()}catch(G){console.error("Error bulk approving transactions:",G),L("Failed to bulk approve transactions. Please try again.")}},he=n.filter(q=>{if(r!=="all"&&q.status!==r)return!1;if(h){const G=h.toLowerCase();return q.userId&&q.userId.toLowerCase().includes(G)||q.userName&&q.userName.toLowerCase().includes(G)||q.type&&q.type.toLowerCase().includes(G)||q.amount&&q.amount.toString().includes(G)||q.id&&q.id.toLowerCase().includes(G)}if(g!=="all"&&q.type!==g)return!1;if(x.start&&q.timestamp)try{const G=q.timestamp.toDate(),de=new Date(x.start);de.setHours(0,0,0,0);const le=x.end?new Date(x.end):new Date;if(le.setHours(23,59,59,999),G<de||G>le)return!1}catch(G){return console.error("Error parsing date:",G),!0}return!0}),Ee=q=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(q||0),X=q=>{if(!q)return"";try{const G=q.toDate(),le=(new Date-G)/(1e3*60*60);return le<24?`Today, ${G.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:le<48?`Yesterday, ${G.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:G.toLocaleDateString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return""}},fe=q=>o.find(G=>G.id===q)||{},ge=q=>!q||q==="Unknown User"?"U":q.split(" ").map(G=>G[0]).join("").toUpperCase().substring(0,2),Pe=()=>{ee(!0),C(),j()},B=q=>{F(q);const G=fe(q.userId);R(G)},ae=()=>{const q=he.map(Ve=>({ID:Ve.id,User:Ve.userName||"Unknown",Type:Ve.type,Amount:Ve.amount,Gold:Ve.goldAmount||0,Status:Ve.status,Date:X(Ve.timestamp),UserID:Ve.userId})),G=Object.keys(q[0]||{}).join(","),de=q.map(Ve=>Object.values(Ve).join(",")),le=[G,...de].join(`
`),xe=new Blob([le],{type:"text/csv"}),ye=window.URL.createObjectURL(xe),Ie=document.createElement("a");Ie.href=ye,Ie.download=`transactions_${new Date().toISOString().split("T")[0]}.csv`,Ie.click(),window.URL.revokeObjectURL(ye)},pe=()=>{p(""),y("all"),w({start:"",end:""})};return N&&n.length===0?u.jsxs("div",{className:"loading-container",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("p",{children:"Loading transactions..."})]}):u.jsxs("div",{className:"transaction-approval-dashboard",children:[u.jsxs("div",{className:"dashboard-header",children:[u.jsxs("div",{className:"header-content",children:[u.jsx("h1",{children:"Transaction Approval Dashboard"}),u.jsx("p",{children:"Manage and approve user transactions in real-time"})]}),u.jsxs("div",{className:"header-actions",children:[u.jsxs("button",{className:"btn-refresh",onClick:Pe,disabled:W,children:[u.jsx(pg,{className:W?"spinning":""}),W?"Refreshing...":"Refresh"]}),u.jsxs("button",{className:"btn-export",onClick:ae,disabled:he.length===0,children:[u.jsx(A3,{})," Export CSV"]})]})]}),M&&u.jsxs("div",{className:"error-banner",children:[u.jsx(gc,{}),u.jsx("span",{children:M}),u.jsx("button",{onClick:()=>L(null),children:"×"})]}),u.jsxs("div",{className:"stats-grid",children:[u.jsxs("div",{className:"stat-card pending",children:[u.jsx("div",{className:"stat-icon",children:u.jsx(So,{})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("h3",{children:te.pending}),u.jsx("p",{children:"Pending"})]})]}),u.jsxs("div",{className:"stat-card approved",children:[u.jsx("div",{className:"stat-icon",children:u.jsx(Od,{})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("h3",{children:te.approved}),u.jsx("p",{children:"Approved"})]})]}),u.jsxs("div",{className:"stat-card rejected",children:[u.jsx("div",{className:"stat-icon",children:u.jsx(qd,{})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("h3",{children:te.rejected}),u.jsx("p",{children:"Rejected"})]})]}),u.jsxs("div",{className:"stat-card total",children:[u.jsx("div",{className:"stat-icon",children:u.jsx(Nm,{})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("h3",{children:te.total}),u.jsx("p",{children:"Total"})]})]}),u.jsxs("div",{className:"stat-card amount",children:[u.jsx("div",{className:"stat-icon",children:u.jsx(Ao,{})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("h3",{children:Ee(te.totalAmount)}),u.jsx("p",{children:"Total Amount"})]})]})]}),u.jsxs("div",{className:"controls-card",children:[u.jsxs("div",{className:"controls-header",children:[u.jsx("h3",{children:"Filters & Search"}),u.jsx("button",{className:"btn-clear",onClick:pe,children:"Clear Filters"})]}),u.jsxs("div",{className:"controls-content",children:[u.jsxs("div",{className:"search-box",children:[u.jsx(ih,{}),u.jsx("input",{type:"text",placeholder:"Search by user, amount, ID...",value:h,onChange:q=>p(q.target.value)})]}),u.jsxs("div",{className:"filter-group",children:[u.jsxs("div",{className:"filter-item",children:[u.jsx("label",{children:"Transaction Type:"}),u.jsxs("select",{value:g,onChange:q=>y(q.target.value),children:[u.jsx("option",{value:"all",children:"All Types"}),u.jsx("option",{value:"deposit",children:"Deposits"}),u.jsx("option",{value:"withdrawal",children:"Withdrawals"})]})]}),u.jsxs("div",{className:"filter-item",children:[u.jsx("label",{children:"Date Range:"}),u.jsxs("div",{className:"date-inputs",children:[u.jsx("input",{type:"date",value:x.start,onChange:q=>w({...x,start:q.target.value}),placeholder:"Start date"}),u.jsx("span",{children:"to"}),u.jsx("input",{type:"date",value:x.end,onChange:q=>w({...x,end:q.target.value}),placeholder:"End date"})]})]})]})]})]}),u.jsx("div",{className:"tabs-container",children:u.jsxs("div",{className:"tabs",children:[u.jsxs("button",{className:`tab ${r==="pending"?"active":""}`,onClick:()=>e("pending"),children:[u.jsx(So,{})," Pending ",u.jsx("span",{className:"tab-count",children:te.pending})]}),u.jsxs("button",{className:`tab ${r==="completed"?"active":""}`,onClick:()=>e("completed"),children:[u.jsx(Od,{})," Approved ",u.jsx("span",{className:"tab-count",children:te.approved})]}),u.jsxs("button",{className:`tab ${r==="rejected"?"active":""}`,onClick:()=>e("rejected"),children:[u.jsx(qd,{})," Rejected ",u.jsx("span",{className:"tab-count",children:te.rejected})]}),u.jsxs("button",{className:`tab ${r==="all"?"active":""}`,onClick:()=>e("all"),children:[u.jsx(ub,{})," All ",u.jsx("span",{className:"tab-count",children:te.total})]})]})}),u.jsxs("div",{className:"content-container",children:[u.jsxs("div",{className:"transactions-card",children:[u.jsxs("div",{className:"card-header",children:[u.jsxs("h2",{children:[r.charAt(0).toUpperCase()+r.slice(1)," Transactions"]}),u.jsxs("div",{className:"card-info",children:[u.jsxs("span",{className:"count-badge",children:[he.length," transactions"]}),r==="pending"&&he.length>0&&u.jsxs("button",{className:"btn-bulk-approve",onClick:()=>I(he),children:[u.jsx(Od,{})," Bulk Approve All"]})]})]}),he.length===0?u.jsxs("div",{className:"empty-state",children:[u.jsx(Nm,{size:48}),u.jsx("p",{children:"No transactions found"}),u.jsx("span",{children:"Try adjusting your search or filters"}),u.jsx("button",{className:"btn-clear",onClick:pe,children:"Clear All Filters"})]}):u.jsx("div",{className:"table-container",children:u.jsxs("table",{className:"transactions-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"User"}),u.jsx("th",{children:"Type"}),u.jsx("th",{children:"Amount"}),u.jsx("th",{children:"Date"}),u.jsx("th",{children:"Status"}),u.jsx("th",{children:"Actions"})]})}),u.jsx("tbody",{children:he.map(q=>u.jsxs("tr",{className:`transaction-row ${z?.id===q.id?"selected":""}`,onClick:()=>B(q),children:[u.jsx("td",{children:u.jsxs("div",{className:"user-cell",children:[u.jsx("div",{className:"user-avatar",children:ge(q.userName)}),u.jsxs("div",{className:"user-info",children:[u.jsx("div",{className:"user-name",children:q.userName||"Unknown User"}),u.jsxs("div",{className:"user-id",children:[q.userId?.substring(0,8),"..."]})]})]})}),u.jsx("td",{children:u.jsxs("span",{className:`transaction-type ${q.type}`,children:[q.type,q.type==="withdrawal"&&q.status==="pending"&&u.jsx("span",{className:"urgent-badge",children:"!"})]})}),u.jsx("td",{children:u.jsxs("div",{className:"amount-cell",children:[u.jsx("span",{className:"amount",children:Ee(q.amount)}),q.goldAmount>0&&u.jsxs("span",{className:"gold-amount",children:[q.goldAmount.toFixed(4),"g"]})]})}),u.jsx("td",{children:u.jsx("div",{className:"date-cell",children:X(q.timestamp)})}),u.jsx("td",{children:u.jsx("span",{className:`status status-${q.status}`,children:q.status})}),u.jsx("td",{children:q.status==="pending"?u.jsxs("div",{className:"action-buttons",children:[u.jsx("button",{className:"btn-action btn-approve",onClick:G=>{G.stopPropagation(),D(q)},title:"Approve Transaction",children:u.jsx(Od,{})}),u.jsx("button",{className:"btn-action btn-reject",onClick:G=>{G.stopPropagation(),S(q)},title:"Reject Transaction",children:u.jsx(qd,{})})]}):u.jsx("span",{className:"processed-info",children:q.processedAt?"Processed":"Completed"})})]},q.id))})]})})]}),u.jsxs("div",{className:"details-card",children:[u.jsx("div",{className:"card-header",children:u.jsx("h2",{children:"Transaction Details"})}),z?u.jsx("div",{className:"details-content",children:u.jsxs("div",{className:"transaction-details",children:[u.jsxs("div",{className:"detail-section",children:[u.jsx("h3",{children:"Transaction Information"}),u.jsxs("div",{className:"detail-grid",children:[u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Transaction ID:"}),u.jsx("span",{className:"detail-value",children:z.id})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Type:"}),u.jsx("span",{className:`detail-value type-${z.type}`,children:z.type})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Amount:"}),u.jsx("span",{className:"detail-value amount-large",children:Ee(z.amount)})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Gold Amount:"}),u.jsx("span",{className:"detail-value",children:z.goldAmount?`${z.goldAmount.toFixed(4)}g`:"N/A"})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Status:"}),u.jsx("span",{className:`detail-value status-${z.status}`,children:z.status})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Date:"}),u.jsx("span",{className:"detail-value",children:X(z.timestamp)})]})]})]}),E&&u.jsxs("div",{className:"detail-section",children:[u.jsx("h3",{children:"User Information"}),u.jsxs("div",{className:"user-header",children:[u.jsx("div",{className:"user-avatar-large",children:ge(E.fullName||E.email)}),u.jsxs("div",{className:"user-info-large",children:[u.jsx("div",{className:"user-name-large",children:E.fullName||"Unknown User"}),u.jsx("div",{className:"user-email",children:E.email||"No email"}),u.jsxs("div",{className:"user-id",children:["ID: ",E.id?.substring(0,12),"..."]})]})]}),u.jsxs("div",{className:"user-stats",children:[u.jsxs("div",{className:"user-stat",children:[u.jsx("span",{className:"stat-label",children:"Balance:"}),u.jsx("span",{className:"stat-value",children:Ee(E.balance||0)})]}),u.jsxs("div",{className:"user-stat",children:[u.jsx("span",{className:"stat-label",children:"Gold Balance:"}),u.jsx("span",{className:"stat-value",children:E.goldBalance?`${E.goldBalance.toFixed(4)}g`:"0g"})]}),u.jsxs("div",{className:"user-stat",children:[u.jsx("span",{className:"stat-label",children:"Joined:"}),u.jsx("span",{className:"stat-value",children:E.createdAt?X(E.createdAt):"N/A"})]}),u.jsxs("div",{className:"user-stat",children:[u.jsx("span",{className:"stat-label",children:"Last Active:"}),u.jsx("span",{className:"stat-value",children:E.lastActive?X(E.lastActive):"N/A"})]})]})]})]})}):u.jsxs("div",{className:"select-prompt",children:[u.jsx(fg,{size:48}),u.jsx("p",{children:"Select a transaction to view details"}),u.jsx("span",{children:"Click on any transaction row to see detailed information"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .transaction-approval-dashboard {
          padding: 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }
        
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          padding: 24px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .header-content h1 {
          margin: 0;
          color: #2c3e50;
          font-size: 28px;
          font-weight: 700;
        }
        
        .header-content p {
          margin: 8px 0 0;
          color: #7f8c8d;
          font-size: 15px;
        }
        
        .header-actions {
          display: flex;
          gap: 12px;
        }
        
        .btn-refresh, .btn-export {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .btn-refresh {
          background: #3498db;
          color: white;
        }
        
        .btn-refresh:hover:not(:disabled) {
          background: #2980b9;
          transform: translateY(-1px);
        }
        
        .btn-refresh:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .btn-export {
          background: #27ae60;
          color: white;
        }
        
        .btn-export:hover:not(:disabled) {
          background: #219653;
          transform: translateY(-1px);
        }
        
        .btn-export:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .spinning {
          animation: spin 1s linear infinite;
        }
        
        .error-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: linear-gradient(135deg, #ff6b6b 0%, #c0392b 100%);
          color: white;
          border-radius: 12px;
          margin-bottom: 24px;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
        }
        
        .error-banner button {
          margin-left: auto;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: white;
          opacity: 0.8;
        }
        
        .error-banner button:hover {
          opacity: 1;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        
        .stat-card.pending {
          border-color: #ffc107;
        }
        
        .stat-card.approved {
          border-color: #28a745;
        }
        
        .stat-card.rejected {
          border-color: #dc3545;
        }
        
        .stat-card.total {
          border-color: #17a2b8;
        }
        
        .stat-card.amount {
          border-color: #6f42c1;
        }
        
        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          font-size: 24px;
          color: white;
        }
        
        .stat-card.pending .stat-icon {
          background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
        }
        
        .stat-card.approved .stat-icon {
          background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
        }
        
        .stat-card.rejected .stat-icon {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
        }
        
        .stat-card.total .stat-icon {
          background: linear-gradient(135deg, #17a2b8 0%, #117a8b 100%);
        }
        
        .stat-card.amount .stat-icon {
          background: linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%);
        }
        
        .stat-content h3 {
          margin: 0;
          font-size: 28px;
          color: #2c3e50;
          font-weight: 700;
        }
        
        .stat-content p {
          margin: 8px 0 0;
          color: #7f8c8d;
          font-size: 14px;
          font-weight: 500;
        }
        
        .controls-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .controls-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .controls-header h3 {
          margin: 0;
          color: #2c3e50;
          font-size: 18px;
          font-weight: 600;
        }
        
        .btn-clear {
          padding: 8px 16px;
          background: #e9ecef;
          color: #495057;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .btn-clear:hover {
          background: #dee2e6;
          transform: translateY(-1px);
        }
        
        .search-box {
          position: relative;
          margin-bottom: 20px;
        }
        
        .search-box svg {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #7f8c8d;
          font-size: 16px;
        }
        
        .search-box input {
          width: 100%;
          padding: 14px 14px 14px 48px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.3s ease;
        }
        
        .search-box input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        .filter-group {
          display: flex;
          gap: 24px;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .filter-item {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 200px;
        }
        
        .filter-item label {
          font-size: 14px;
          color: #2c3e50;
          font-weight: 600;
          min-width: 120px;
        }
        
        .filter-item select {
          flex: 1;
          padding: 12px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 14px;
          background: white;
          transition: all 0.3s ease;
        }
        
        .filter-item select:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        .date-inputs {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }
        
        .date-inputs input {
          flex: 1;
          padding: 12px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .date-inputs input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        .date-inputs span {
          color: #7f8c8d;
          font-size: 14px;
        }
        
        .tabs-container {
          margin-bottom: 24px;
        }
        
        .tabs {
          display: flex;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .tab {
          padding: 16px 24px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          color: #7f8c8d;
          flex: 1;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .tab:hover {
          background: #f8f9fa;
        }
        
        .tab.active {
          background: #3498db;
          color: white;
        }
        
        .tab-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .content-container {
          display: flex;
          gap: 24px;
        }
        
        .transactions-card, .details-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          overflow: hidden;
        }
        
        .transactions-card {
          flex: 1;
        }
        
        .details-card {
          width: 400px;
        }
        
        .card-header {
          padding: 24px;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-header h2 {
          margin: 0;
          color: #2c3e50;
          font-size: 20px;
          font-weight: 600;
        }
        
        .card-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .count-badge {
          background: #e3f2fd;
          color: #1976d2;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .btn-bulk-approve {
          padding: 8px 16px;
          background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
        }
        
        .btn-bulk-approve:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 24px;
          color: #7f8c8d;
          text-align: center;
        }
        
        .empty-state svg {
          margin-bottom: 20px;
          opacity: 0.3;
        }
        
        .empty-state p {
          margin: 0 0 8px;
          font-size: 18px;
          font-weight: 500;
          color: #2c3e50;
        }
        
        .empty-state span {
          margin-bottom: 20px;
          font-size: 14px;
        }
        
        .table-container {
          overflow-x: auto;
          max-height: 600px;
          overflow-y: auto;
        }
        
        .transactions-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .transactions-table th {
          background: #f8f9fa;
          padding: 16px;
          text-align: left;
          font-weight: 600;
          color: #2c3e50;
          border-bottom: 1px solid #e9ecef;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        
        .transactions-table td {
          padding: 16px;
          border-bottom: 1px solid #f1f3f4;
          color: #2c3e50;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .transaction-row:hover {
          background: #f8f9fa;
        }
        
        .transaction-row.selected {
          background: #e3f2fd;
          border-left: 4px solid #3498db;
        }
        
        .user-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          flex-shrink: 0;
        }
        
        .user-info {
          display: flex;
          flex-direction: column;
        }
        
        .user-name {
          font-weight: 500;
          color: #2c3e50;
        }
        
        .user-id {
          font-size: 12px;
          color: #7f8c8d;
        }
        
        .transaction-type {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        
        .transaction-type.deposit {
          background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
          color: #155724;
        }
        
        .transaction-type.withdrawal {
          background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
          color: #721c24;
        }
        
        .urgent-badge {
          background: #dc3545;
          color: white;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          margin-left: 4px;
        }
        
        .amount-cell {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .amount {
          font-weight: 600;
          color: #2c3e50;
          font-size: 15px;
        }
        
        .gold-amount {
          font-size: 12px;
          color: #f39c12;
          background: #fef9e7;
          padding: 2px 6px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .date-cell {
          font-size: 13px;
          color: #7f8c8d;
        }
        
        .status {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .status-pending {
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
          color: #856404;
        }
        
        .status-completed {
          background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
          color: #155724;
        }
        
        .status-rejected {
          background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
          color: #721c24;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-action {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .btn-approve {
          background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
          color: white;
        }
        
        .btn-approve:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
        }
        
        .btn-reject {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
          color: white;
        }
        
        .btn-reject:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
        }
        
        .processed-info {
          font-size: 12px;
          color: #7f8c8d;
          font-style: italic;
        }
        
        .details-content {
          padding: 24px;
          max-height: 600px;
          overflow-y: auto;
        }
        
        .detail-section {
          margin-bottom: 32px;
        }
        
        .detail-section:last-child {
          margin-bottom: 0;
        }
        
        .detail-section h3 {
          margin: 0 0 20px;
          color: #2c3e50;
          font-size: 16px;
          font-weight: 600;
          padding-bottom: 12px;
          border-bottom: 2px solid #e9ecef;
        }
        
        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        
        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .detail-label {
          font-size: 13px;
          color: #7f8c8d;
          font-weight: 500;
        }
        
        .detail-value {
          font-size: 15px;
          color: #2c3e50;
          font-weight: 500;
        }
        
        .type-deposit {
          color: #28a745;
          background: #d4edda;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .type-withdrawal {
          color: #dc3545;
          background: #f8d7da;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .amount-large {
          font-size: 20px;
          font-weight: 700;
          color: #2c3e50;
        }
        
        .status-pending {
          color: #856404;
          background: #fff3cd;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .status-completed {
          color: #155724;
          background: #d4edda;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .status-rejected {
          color: #721c24;
          background: #f8d7da;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .user-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .user-avatar-large {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
          flex-shrink: 0;
        }
        
        .user-info-large {
          flex: 1;
        }
        
        .user-name-large {
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 4px;
        }
        
        .user-email {
          font-size: 14px;
          color: #7f8c8d;
          margin-bottom: 4px;
        }
        
        .user-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        
        .user-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-label {
          font-size: 13px;
          color: #7f8c8d;
          font-weight: 500;
        }
        
        .stat-value {
          font-size: 15px;
          color: #2c3e50;
          font-weight: 500;
        }
        
        .select-prompt {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 400px;
          color: #7f8c8d;
          text-align: center;
          padding: 40px;
        }
        
        .select-prompt svg {
          margin-bottom: 20px;
          opacity: 0.3;
        }
        
        .select-prompt p {
          margin: 0 0 8px;
          font-size: 16px;
          font-weight: 500;
          color: #2c3e50;
        }
        
        .select-prompt span {
          font-size: 14px;
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 400px;
          color: #7f8c8d;
        }
        
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 1200px) {
          .content-container {
            flex-direction: column;
          }
          
          .details-card {
            width: 100%;
          }
          
          .filter-group {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .filter-item {
            width: 100%;
          }
        }
        
        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            gap: 16px;
          }
          
          .header-actions {
            width: 100%;
            justify-content: flex-end;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .tabs {
            flex-wrap: wrap;
          }
          
          .tab {
            flex: 1 0 calc(50% - 2px);
          }
          
          .card-header {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }
          
          .card-info {
            width: 100%;
            justify-content: space-between;
          }
          
          .detail-grid, .user-stats {
            grid-template-columns: 1fr;
          }
        }
      `})]})},p9="tSkkQjMfTMNhpqK92TxjvGVPUWa2",m9=()=>{const[r,e]=P.useState("users"),[n,s]=P.useState([]),[o,c]=P.useState(null),[h,p]=P.useState(""),[g,y]=P.useState(""),[x,w]=P.useState(!1),[E,R]=P.useState(!1),[N,V]=P.useState("newest"),[M,L]=P.useState("all"),[z,F]=P.useState(!1),[W,ee]=P.useState(null),[te,O]=P.useState(!1),[C,j]=P.useState(!1),[k,D]=P.useState(!0),[S,I]=P.useState(new Date),[he,Ee]=P.useState([]),[X,fe]=P.useState([]),[ge,Pe]=P.useState({totalUsers:0,activeToday:0,totalDeposits:0,totalWithdrawals:0,pendingTransactions:0,totalRevenue:0}),B=P.useRef(null);P.useEffect(()=>{const Ne=_c().onAuthStateChanged(je=>{je&&je.uid===p9?(O(!0),j(!0),pe(),q()):(O(!1),j(!0),ee("Access denied. Admin privileges required."))});return()=>Ne()},[]),P.useEffect(()=>(te&&k&&(B.current=setInterval(()=>{pe(),q()},1e4)),()=>{B.current&&clearInterval(B.current)}),[te,k]);const ae=()=>{const ie=_c();Ng(ie).catch(Ne=>{console.error("Error signing out:",Ne),ee("Failed to sign out.")})};P.useEffect(()=>{te&&pe()},[N,te]);const pe=async()=>{if(te)try{F(!0),ee(null);const ie=pi(yn(Xe,"chats"),ya("timestamp","desc")),Ne=await Ic(ie),je=[];Ne.forEach(vn=>{je.push({id:vn.id,...vn.data()})});const Ue=de(je),ut=le(Ue,N);if(s(ut),I(new Date),o){const vn=ut.find(Vn=>Vn.userId===o.userId);vn&&c(vn)}}catch(ie){console.error("Error fetching conversations:",ie),ee("Failed to load conversations. Please check your permissions.")}finally{F(!1)}},q=async()=>{if(te)try{const ie=pi(yn(Xe,"users")),Ne=await Ic(ie),je=[];Ne.forEach(Ue=>{je.push({id:Ue.id,...Ue.data()})}),fe(je),G(je)}catch(ie){console.error("Error fetching users:",ie),ee("Failed to load users.")}},G=(ie=X)=>{if(!te)return;const Ne=ie.length,je=Math.round(ie.length*.3);Pe({totalUsers:Ne,activeToday:je,totalDeposits:0,totalWithdrawals:0,pendingTransactions:0,totalRevenue:0})},de=ie=>{const Ne={};return ie.forEach(je=>{const Ue=je.userId;Ne[Ue]||(Ne[Ue]={userId:Ue,userName:je.userName||"Unknown User",userEmail:je.userEmail||"No email",messages:[],unreadCount:0,lastMessage:je.timestamp,hasUnreadAdminMessages:!1}),Ne[Ue].messages.push(je),!je.read&&je.isAdmin&&(Ne[Ue].hasUnreadAdminMessages=!0,Ne[Ue].unreadCount++),je.timestamp&&(!Ne[Ue].lastMessage||je.timestamp.toDate()>Ne[Ue].lastMessage.toDate())&&(Ne[Ue].lastMessage=je.timestamp)}),Object.values(Ne)},le=(ie,Ne)=>{const je=[...ie];switch(Ne){case"newest":return je.sort((Ue,ut)=>{const vn=Ue.lastMessage?Ue.lastMessage.toDate():new Date(0);return(ut.lastMessage?ut.lastMessage.toDate():new Date(0))-vn});case"oldest":return je.sort((Ue,ut)=>{const vn=Ue.lastMessage?Ue.lastMessage.toDate():new Date(0),Vn=ut.lastMessage?ut.lastMessage.toDate():new Date(0);return vn-Vn});case"unread":return je.sort((Ue,ut)=>ut.unreadCount-Ue.unreadCount);case"name":return je.sort((Ue,ut)=>Ue.userName.localeCompare(ut.userName));default:return je}},xe=n.filter(ie=>{if(M==="unread"&&ie.unreadCount===0||M==="read"&&ie.unreadCount>0)return!1;if(g){const Ne=g.toLowerCase();return ie.userName.toLowerCase().includes(Ne)||ie.userId.toLowerCase().includes(Ne)||ie.userEmail.toLowerCase().includes(Ne)||ie.messages.some(je=>je.message&&je.message.toLowerCase().includes(Ne))}return!0}),ye=async ie=>{if(!te)return;c(ie);const Ne=ie.messages.filter(je=>!je.read&&je.isAdmin);if(Ne.length>0)try{const je=m0(Xe);Ne.forEach(Ue=>{const ut=rn(Xe,"chats",Ue.id);je.update(ut,{read:!0})}),await je.commit(),s(Ue=>Ue.map(ut=>ut.userId===ie.userId?{...ut,unreadCount:0,hasUnreadAdminMessages:!1}:ut))}catch(je){console.error("Error marking messages as read:",je),ee("Failed to mark messages as read.")}},Ie=async ie=>{if(ie.preventDefault(),!(!h.trim()||!o||!te)){R(!0);try{await Ho(yn(Xe,"chats"),{userId:o.userId,userName:o.userName,userEmail:o.userEmail,message:h.trim(),isAdmin:!0,timestamp:ys(),read:!1}),p(""),pe()}catch(Ne){console.error("Error sending reply:",Ne),ee("Failed to send message. Please check your permissions.")}finally{R(!1)}}},Ve=ie=>{if(!ie)return"";try{const Ne=ie.toDate();return(new Date-Ne)/(1e3*60*60)<24?Ne.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):Ne.toLocaleDateString([],{month:"short",day:"numeric"})}catch{return""}},Qt=ie=>ie.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Kt=ie=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(ie||0),Ln=ie=>!ie||ie==="Unknown User"?"U":ie.split(" ").map(Ne=>Ne[0]).join("").toUpperCase().substring(0,2),Lr=()=>{D(!k)},ws=ie=>{alert(`View user: ${ie.email}`)},Ta=ie=>{alert(`Edit user: ${ie.email}`)};return C?te?u.jsxs("div",{className:"admin-dashboard",children:[u.jsxs("div",{className:"admin-header",children:[u.jsxs("div",{className:"header-title",children:[u.jsx("h1",{children:"Admin Dashboard"}),u.jsx("p",{children:"Manage users, conversations, and system analytics"})]}),u.jsxs("div",{className:"header-actions",children:[u.jsxs("div",{className:"refresh-controls",children:[u.jsxs("button",{className:`btn-refresh ${k?"active":""}`,onClick:()=>{pe(),q()},children:[u.jsx(pg,{className:z?"spinning":""}),z?"Refreshing...":"Refresh Now"]}),u.jsxs("button",{className:`btn-auto-refresh ${k?"active":""}`,onClick:Lr,children:[u.jsx(So,{}),k?"Auto: ON":"Auto: OFF"]})]}),u.jsxs("button",{onClick:ae,className:"btn-signout",children:[u.jsx(yc,{})," Sign Out"]})]})]}),W&&u.jsxs("div",{className:"error-banner",children:[u.jsx(gc,{}),u.jsx("span",{children:W}),u.jsx("button",{onClick:()=>ee(null),children:"×"})]}),u.jsxs("div",{className:"header-stats",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:ge.totalUsers}),u.jsx("span",{className:"stat-label",children:"Total Users"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:ge.activeToday}),u.jsx("span",{className:"stat-label",children:"Active Today"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:Kt(ge.totalDeposits)}),u.jsx("span",{className:"stat-label",children:"Total Deposits"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:Kt(ge.totalWithdrawals)}),u.jsx("span",{className:"stat-label",children:"Total Withdrawals"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:ge.pendingTransactions}),u.jsx("span",{className:"stat-label",children:"Pending Transactions"})]}),u.jsxs("div",{className:"stat-item revenue",children:[u.jsx("span",{className:"stat-number",children:Kt(ge.totalRevenue)}),u.jsx("span",{className:"stat-label",children:"Platform Revenue"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:Qt(S)}),u.jsx("span",{className:"stat-label",children:"Last Refresh"})]})]}),u.jsxs("div",{className:"admin-tabs",children:[u.jsxs("button",{className:`tab-button ${r==="users"?"active":""}`,onClick:()=>e("users"),children:[u.jsx(la,{})," Users"]}),u.jsx("button",{className:`tab-button ${r==="transactions"?"active":""}`,onClick:()=>e("transactions"),children:"Transaction Approval"}),u.jsxs("button",{className:`tab-button ${r==="chat"?"active":""}`,onClick:()=>e("chat"),children:[u.jsx(ac,{})," Support Chat"]}),u.jsxs("button",{className:`tab-button ${r==="analytics"?"active":""}`,onClick:()=>e("analytics"),children:[u.jsx(oa,{})," Analytics"]})]}),u.jsxs("div",{className:"admin-content",children:[r==="users"&&u.jsxs("div",{className:"users-tab",children:[u.jsx("h2",{children:"User Management"}),u.jsxs("div",{className:"user-filters",children:[u.jsxs("div",{className:"search-box",children:[u.jsx(ih,{}),u.jsx("input",{type:"text",placeholder:"Search users...",value:g,onChange:ie=>y(ie.target.value)})]}),u.jsx("div",{className:"filter-controls",children:u.jsxs("div",{className:"filter-buttons",children:[u.jsx("button",{className:M==="all"?"active":"",onClick:()=>L("all"),children:"All"}),u.jsx("button",{className:M==="active"?"active":"",onClick:()=>L("active"),children:"Active"}),u.jsx("button",{className:M==="new"?"active":"",onClick:()=>L("new"),children:"New"})]})})]}),u.jsxs("div",{className:"users-table-container",children:[u.jsxs("table",{className:"users-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"User"}),u.jsx("th",{children:"Email"}),u.jsx("th",{children:"Balance"}),u.jsx("th",{children:"Gold"}),u.jsx("th",{children:"Status"}),u.jsx("th",{children:"Joined"}),u.jsx("th",{children:"Last Active"}),u.jsx("th",{children:"Actions"})]})}),u.jsx("tbody",{children:X.filter(ie=>{if(!g)return!0;const Ne=g.toLowerCase();return ie.fullName&&ie.fullName.toLowerCase().includes(Ne)||ie.email&&ie.email.toLowerCase().includes(Ne)||ie.id&&ie.id.toLowerCase().includes(Ne)}).map(ie=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsxs("div",{className:"user-cell",children:[u.jsx("div",{className:"user-avatar-sm",children:Ln(ie.fullName||ie.email)}),u.jsxs("div",{children:[u.jsx("div",{className:"user-name",children:ie.fullName||"Unknown User"}),u.jsxs("div",{className:"user-id",children:["ID: ",ie.id.substring(0,8),"..."]})]})]})}),u.jsx("td",{children:ie.email||"N/A"}),u.jsx("td",{children:Kt(ie.balance||0)}),u.jsx("td",{children:ie.goldBalance?`${ie.goldBalance.toFixed(4)}g`:"0g"}),u.jsx("td",{children:u.jsx("span",{className:`status-indicator ${ie.isOnline?"online":"offline"}`,children:ie.isOnline?"Online":"Offline"})}),u.jsx("td",{children:ie.createdAt?Ve(ie.createdAt):"N/A"}),u.jsx("td",{children:ie.lastActive?Ve(ie.lastActive):"N/A"}),u.jsx("td",{children:u.jsxs("div",{className:"action-buttons",children:[u.jsxs("button",{className:"btn-view",onClick:()=>ws(ie),children:[u.jsx(fg,{})," View"]}),u.jsxs("button",{className:"btn-edit",onClick:()=>Ta(ie),children:[u.jsx(lb,{})," Edit"]})]})})]},ie.id))})]}),X.length===0&&u.jsxs("div",{className:"no-data",children:[u.jsx(la,{size:48}),u.jsx("p",{children:"No users found"})]})]})]}),r==="transactions"&&u.jsx("div",{className:"transactions-tab",children:u.jsx(q4,{})}),r==="chat"&&u.jsxs("div",{className:"admin-conversation-container",children:[u.jsxs("div",{className:"conversation-list",children:[u.jsxs("div",{className:"conversation-filters",children:[u.jsxs("div",{className:"search-box",children:[u.jsx(ih,{}),u.jsx("input",{type:"text",placeholder:"Search conversations...",value:g,onChange:ie=>y(ie.target.value)})]}),u.jsxs("div",{className:"filter-controls",children:[u.jsxs("div",{className:"filter-buttons",children:[u.jsx("button",{className:M==="all"?"active":"",onClick:()=>L("all"),children:"All"}),u.jsx("button",{className:M==="unread"?"active":"",onClick:()=>L("unread"),children:"Unread"})]}),u.jsxs("div",{className:"sort-dropdown",children:[u.jsxs("select",{value:N,onChange:ie=>V(ie.target.value),children:[u.jsx("option",{value:"newest",children:"Newest First"}),u.jsx("option",{value:"oldest",children:"Oldest First"}),u.jsx("option",{value:"unread",children:"Unread First"}),u.jsx("option",{value:"name",children:"By Name"})]}),u.jsx(pb,{})]})]})]}),u.jsx("div",{className:"conversations",children:xe.length===0?u.jsxs("div",{className:"no-conversations",children:[u.jsx(ac,{size:48}),u.jsx("p",{children:"No conversations found"}),u.jsx("span",{children:"Try adjusting your search or filters"})]}):xe.map(ie=>u.jsxs("div",{className:`conversation-item ${o&&o.userId===ie.userId?"active":""} ${ie.hasUnreadAdminMessages?"unread":""}`,onClick:()=>ye(ie),children:[u.jsx("div",{className:"conversation-avatar",children:Ln(ie.userName)}),u.jsxs("div",{className:"conversation-details",children:[u.jsxs("div",{className:"conversation-header",children:[u.jsx("h4",{children:ie.userName}),u.jsx("span",{className:"conversation-time",children:Ve(ie.lastMessage)})]}),u.jsx("p",{className:"conversation-email",children:ie.userEmail}),u.jsx("p",{className:"conversation-preview",children:ie.messages.length>0&&ie.messages[ie.messages.length-1]?.message?ie.messages[ie.messages.length-1].message.substring(0,70)+"...":"No messages"})]}),ie.unreadCount>0&&u.jsx("span",{className:"unread-badge",children:ie.unreadCount})]},ie.userId))})]}),u.jsx("div",{className:"conversation-view",children:o?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"conversation-header",children:u.jsxs("div",{className:"user-info",children:[u.jsx("div",{className:"user-avatar",children:Ln(o.userName)}),u.jsxs("div",{children:[u.jsx("h3",{children:o.userName}),u.jsx("p",{className:"user-email",children:o.userEmail}),u.jsxs("p",{className:"user-id",children:["User ID: ",o.userId]})]})]})}),u.jsx("div",{className:"message-list",children:o.messages.sort((ie,Ne)=>{const je=ie.timestamp?ie.timestamp.toDate():new Date(0),Ue=Ne.timestamp?Ne.timestamp.toDate():new Date(0);return je-Ue}).map(ie=>u.jsxs("div",{className:`message ${ie.isAdmin?"admin-message":"user-message"} ${ie.read?"read":"unread"}`,children:[u.jsx("div",{className:"message-avatar",children:ie.isAdmin?"A":Ln(o.userName)}),u.jsxs("div",{className:"message-content",children:[u.jsxs("div",{className:"message-header",children:[u.jsx("span",{className:"message-sender",children:ie.isAdmin?"Admin":o.userName}),u.jsx("span",{className:"message-time",children:Ve(ie.timestamp)})]}),u.jsx("p",{children:ie.message||"No message content"}),!ie.read&&ie.isAdmin&&u.jsxs("span",{className:"unread-indicator",children:[u.jsx(hg,{})," Unread"]})]})]},ie.id))}),u.jsx("form",{onSubmit:Ie,className:"message-input-form",children:u.jsxs("div",{className:"input-container",children:[u.jsx("input",{type:"text",value:h,onChange:ie=>p(ie.target.value),placeholder:"Type your response..."}),u.jsxs("button",{type:"submit",className:"btn-send",children:[u.jsx(fb,{})," Send"]})]})})]}):u.jsxs("div",{className:"no-conversation-selected",children:[u.jsx(ac,{size:64}),u.jsx("h3",{children:"Select a conversation"}),u.jsx("p",{children:"Choose a conversation from the list to view messages and respond to users."})]})})]}),r==="analytics"&&u.jsxs("div",{className:"analytics-tab",children:[u.jsx("h2",{children:"Platform Analytics"}),u.jsxs("div",{className:"analytics-grid",children:[u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"User Growth"}),u.jsx(la,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:ge.totalUsers}),u.jsx("div",{className:"stat-label",children:"Total Registered Users"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-up",children:"+12% this month"})})]})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"Active Users"}),u.jsx(k3,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:ge.activeToday}),u.jsx("div",{className:"stat-label",children:"Active Today"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-up",children:"+5% from yesterday"})})]})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"Revenue"}),u.jsx(Ao,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:Kt(ge.totalDeposits)}),u.jsx("div",{className:"stat-label",children:"Total Deposits"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-up",children:"+8% this week"})})]})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"Withdrawals"}),u.jsx(Nm,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:Kt(ge.totalWithdrawals)}),u.jsx("div",{className:"stat-label",children:"Total Withdrawals"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-down",children:"-3% this week"})})]})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"Net Revenue"}),u.jsx(oa,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:Kt(ge.totalRevenue)}),u.jsx("div",{className:"stat-label",children:"Platform Profit"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-up",children:"+15% this month"})})]})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"Pending Actions"}),u.jsx(So,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:ge.pendingTransactions}),u.jsx("div",{className:"stat-label",children:"Pending Transactions"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-neutral",children:"No change"})})]})]})]}),u.jsxs("div",{className:"charts-container",children:[u.jsxs("div",{className:"chart-card",children:[u.jsx("h3",{children:"User Growth Over Time"}),u.jsxs("div",{className:"chart-placeholder",children:[u.jsx(ob,{size:48}),u.jsx("p",{children:"User growth chart will be displayed here"})]})]}),u.jsxs("div",{className:"chart-card",children:[u.jsx("h3",{children:"Revenue vs Withdrawals"}),u.jsxs("div",{className:"chart-placeholder",children:[u.jsx(oa,{size:48}),u.jsx("p",{children:"Revenue comparison chart will be displayed here"})]})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .admin-dashboard {
          padding: 20px;
          background: #f5f7fa;
          min-height: 100vh;
        }
        
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          padding: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .header-title h1 {
          margin: 0;
          color: #2c3e50;
        }
        
        .header-title p {
          margin: 5px 0 0;
          color: #7f8c8d;
        }
        
        .header-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
        }
        
        .refresh-controls {
          display: flex;
          gap: 10px;
        }
        
        .btn-refresh, .btn-auto-refresh {
          padding: 10px 15px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .btn-refresh:hover, .btn-auto-refresh:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }
        
        .btn-refresh.active, .btn-auto-refresh.active {
          background: #27ae60;
        }
        
        .btn-auto-refresh {
          background: #95a5a6;
        }
        
        .btn-auto-refresh:hover {
          background: #7f8c8d;
        }
        
        .btn-signout {
          padding: 10px 15px;
          background: #e74c3c;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .btn-signout:hover {
          background: #c0392b;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
        }
        
        .spinning {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .error-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          background: #ffebee;
          color: #c62828;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        
        .error-banner button {
          margin-left: auto;
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #c62828;
        }
        
        .access-denied {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #f5f7fa;
        }
        
        .access-denied-content {
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          max-width: 500px;
        }
        
        .access-denied-content h2 {
          color: #e74c3c;
          margin: 20px 0 10px;
        }
        
        .access-denied-content p {
          color: #7f8c8d;
          margin-bottom: 20px;
        }
        
        .header-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px;
          background: white;
          border-radius: 8px;
          min-width: 120px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .stat-item.revenue {
          background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
          color: white;
        }
        
        .stat-item.revenue .stat-number,
        .stat-item.revenue .stat-label {
          color: white;
        }
        
        .stat-number {
          font-size: 18px;
          font-weight: bold;
          color: #3498db;
        }
        
        .stat-label {
          font-size: 12px;
          color: #7f8c8d;
          text-align: center;
        }
        
        .admin-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          background: white;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .tab-button {
          padding: 12px 20px;
          background: none;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #7f8c8d;
          transition: all 0.3s ease;
        }
        
        .tab-button:hover {
          background: #f8f9fa;
        }
        
        .tab-button.active {
          background: #3498db;
          color: white;
        }
        
        .admin-content {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          min-height: 500px;
        }
        
        .admin-content h2 {
          margin-top: 0;
          color: #2c3e50;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .transactions-tab {
          min-height: 500px;
        }
        
        .user-filters {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          gap: 15px;
        }
        
        .search-box {
          position: relative;
          flex: 1;
        }
        
        .search-box svg {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #7f8c8d;
        }
        
        .search-box input {
          width: 100%;
          padding: 10px 10px 10px 40px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .search-box input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        .filter-buttons {
          display: flex;
          gap: 5px;
        }
        
        .filter-buttons button {
          padding: 6px 12px;
          background: #f8f9fa;
          border: 1px solid #eee;
          border-radius: 5px;
          cursor: pointer;
          font-size: 13px;
          transition: all 0.3s ease;
        }
        
        .filter-buttons button:hover {
          background: #e9ecef;
        }
        
        .filter-buttons button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        .users-table-container {
          overflow-x: auto;
          border-radius: 8px;
          border: 1px solid #eee;
        }
        
        .users-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .users-table th {
          background: #f8f9fa;
          padding: 12px 15px;
          text-align: left;
          font-weight: 600;
          color: #2c3e50;
          border-bottom: 1px solid #eee;
        }
        
        .users-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #f1f3f4;
          color: #2c3e50;
        }
        
        .users-table tr:hover {
          background: #f8f9fa;
        }
        
        .user-cell {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .user-avatar-sm {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          flex-shrink: 0;
        }
        
        .user-name {
          font-weight: 500;
        }
        
        .user-id {
          font-size: 12px;
          color: #7f8c8d;
        }
        
        .status-indicator {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .status-indicator.online {
          background: #d4edda;
          color: #155724;
        }
        
        .status-indicator.offline {
          background: #f8d7da;
          color: #721c24;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-view, .btn-edit {
          padding: 6px 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.3s ease;
        }
        
        .btn-view {
          background: #3498db;
          color: white;
        }
        
        .btn-view:hover {
          background: #2980b9;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(52, 152, 219, 0.2);
        }
        
        .btn-edit {
          background: #6c757d;
          color: white;
        }
        
        .btn-edit:hover {
          background: #545b62;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(108, 117, 125, 0.2);
        }
        
        .no-data {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          color: #7f8c8d;
          text-align: center;
        }
        
        .no-data svg {
          margin-bottom: 15px;
          opacity: 0.5;
        }
        
        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .analytics-card {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        
        .analytics-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .analytics-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .analytics-header h3 {
          margin: 0;
          color: #2c3e50;
          font-size: 16px;
        }
        
        .analytics-icon {
          color: #3498db;
          font-size: 20px;
        }
        
        .analytics-content {
          text-align: center;
        }
        
        .stat-big {
          font-size: 32px;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 14px;
          color: #7f8c8d;
          margin-bottom: 10px;
        }
        
        .stat-trend {
          font-size: 12px;
        }
        
        .trend-up {
          color: #28a745;
        }
        
        .trend-down {
          color: #dc3545;
        }
        
        .trend-neutral {
          color: #6c757d;
        }
        
        .charts-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 20px;
        }
        
        .chart-card {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .chart-card h3 {
          margin-top: 0;
          color: #2c3e50;
        }
        
        .chart-placeholder {
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 8px;
          color: #7f8c8d;
        }
        
        .chart-placeholder svg {
          margin-bottom: 15px;
          opacity: 0.5;
        }
        
        /* Chat styles */
        .admin-conversation-container {
          display: flex;
          gap: 20px;
          height: calc(100vh - 240px);
        }
        
        .conversation-list {
          width: 400px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        
        .conversation-filters {
          padding: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .conversations {
          flex: 1;
          overflow-y: auto;
        }
        
        .conversation-item {
          display: flex;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #f1f3f4;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .conversation-item:hover {
          background: #f8f9fa;
          transform: translateX(2px);
        }
        
        .conversation-item.active {
          background: #e3f2fd;
          border-left: 3px solid #3498db;
        }
        
        .conversation-item.unread {
          background: #fff8e1;
          border-left: 3px solid #ffc107;
        }
        
        .conversation-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
          font-weight: bold;
          font-size: 14px;
        }
        
        .conversation-details {
          flex: 1;
          min-width: 0;
        }
        
        .conversation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        
        .conversation-header h4 {
          margin: 0;
          font-size: 14px;
          color: #2c3e50;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .conversation-time {
          font-size: 11px;
          color: #7f8c8d;
          white-space: nowrap;
          margin-left: 10px;
        }
        
        .conversation-email {
          margin: 0 0 5px 0;
          font-size: 12px;
          color: #7f8c8d;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .conversation-preview {
          margin: 0;
          font-size: 13px;
          color: #7f8c8d;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .unread-badge {
          background: #e74c3c;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          flex-shrink: 0;
          margin: 0 10px;
        }
        
        .no-conversations {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;
          color: #7f8c8d;
          text-align: center;
          padding: 20px;
        }
        
        .no-conversations svg {
          margin-bottom: 10px;
          opacity: 0.5;
        }
        
        .no-conversations span {
          font-size: 13px;
          margin-top: 5px;
        }
        
        .conversation-view {
          flex: 1;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        
        .conversation-header {
          padding: 20px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .user-info {
          display: flex;
          align-items: center;
        }
        
        .user-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          font-weight: bold;
          font-size: 18px;
        }
        
        .user-email, .user-id {
          margin: 2px 0;
          font-size: 13px;
          color: #7f8c8d;
        }
        
        .message-list {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .message {
          display: flex;
          gap: 10px;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .user-message {
          align-self: flex-start;
        }
        
        .admin-message {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        
        .message-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 12px;
          flex-shrink: 0;
        }
        
        .admin-message .message-avatar {
          background: #3498db;
          color: white;
        }
        
        .message-content {
          max-width: 70%;
          padding: 12px 16px;
          border-radius: 18px;
          position: relative;
          animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .user-message .message-content {
          background: #f1f3f4;
          color: #2c3e50;
          border-bottom-left-radius: 5px;
        }
        
        .admin-message .message-content {
          background: #3498db;
          color: white;
          border-bottom-right-radius: 5px;
        }
        
        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        
        .message-sender {
          font-size: 12px;
          font-weight: bold;
        }
        
        .message-time {
          font-size: 11px;
          opacity: 0.8;
        }
        
        .unread-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          margin-top: 5px;
          opacity: 0.8;
        }
        
        .message-input-form {
          padding: 20px;
          border-top: 1px solid #eee;
        }
        
        .input-container {
          display: flex;
          gap: 10px;
        }
        
        .input-container input {
          flex: 1;
          padding: 12px 15px;
          border-radius: 20px;
          border: 1px solid #ddd;
          outline: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .input-container input:focus {
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        .btn-send {
          padding: 10px 20px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .btn-send:hover {
          background: #2980b9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }
        
        .btn-send:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        
        .no-conversation-selected {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #7f8c8d;
          text-align: center;
          padding: 20px;
        }
        
        .no-conversation-selected svg {
          margin-bottom: 15px;
          opacity: 0.5;
        }
        
        .no-conversation-selected h3 {
          margin: 0 0 10px 0;
          color: #2c3e50;
        }
        
        .no-conversation-selected p {
          margin: 0;
          max-width: 300px;
          line-height: 1.5;
        }
        
        .admin-loading {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 200px;
          color: #7f8c8d;
        }
        
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 15px;
        }
        
        @media (max-width: 992px) {
          .admin-conversation-container {
            flex-direction: column;
            height: auto;
          }
          
          .conversation-list {
            width: 100%;
            height: 300px;
          }
          
          .admin-header {
            flex-direction: column;
            gap: 15px;
          }
          
          .header-stats {
            flex-wrap: wrap;
          }
          
          .header-actions {
            width: 100%;
            justify-content: flex-end;
          }
          
          .admin-tabs {
            overflow-x: auto;
            white-space: nowrap;
          }
          
          .user-filters {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .action-buttons {
            flex-direction: column;
          }
          
          .charts-container {
            grid-template-columns: 1fr;
          }
        }
      `})]}):u.jsx("div",{className:"access-denied",children:u.jsxs("div",{className:"access-denied-content",children:[u.jsx(gc,{size:48}),u.jsx("h2",{children:"Access Denied"}),u.jsx("p",{children:"You need administrator privileges to access this page."}),u.jsxs("button",{onClick:ae,className:"btn-signout",children:[u.jsx(yc,{})," Sign Out"]})]})}):u.jsxs("div",{className:"admin-loading",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("p",{children:"Checking permissions..."})]})},g9="tSkkQjMfTMNhpqK92TxjvGVPUWa2",y9=()=>{const[r,e]=P.useState([]),[n,s]=P.useState(null),[o,c]=P.useState(""),[h,p]=P.useState(""),[g,y]=P.useState(!0),[x,w]=P.useState(!1),[E,R]=P.useState("newest"),[N,V]=P.useState("all"),[M,L]=P.useState(!1),[z,F]=P.useState(null),[W,ee]=P.useState(!1),[te,O]=P.useState(!1),[C,j]=P.useState(!0),[k,D]=P.useState(new Date),S=P.useRef(null);P.useEffect(()=>{const de=_c().onAuthStateChanged(le=>{le&&le.uid===g9?(ee(!0),O(!0),he()):(ee(!1),O(!0),F("Access denied. Admin privileges required."))});return()=>de()},[]),P.useEffect(()=>(W&&C&&(S.current=setInterval(()=>{he()},5e3)),()=>{S.current&&clearInterval(S.current)}),[W,C]);const I=()=>{const G=_c();Ng(G).catch(de=>{console.error("Error signing out:",de),F("Failed to sign out.")})};P.useEffect(()=>{W&&(y(!0),he())},[E,W]);const he=async()=>{if(W)try{L(!0),F(null);const G=pi(yn(Xe,"chats"),ya("timestamp","desc")),de=await Ic(G),le=[];de.forEach(Ie=>{le.push({id:Ie.id,...Ie.data()})});const xe=Ee(le),ye=X(xe,E);if(e(ye),D(new Date),n){const Ie=ye.find(Ve=>Ve.userId===n.userId);Ie&&s(Ie)}}catch(G){console.error("Error fetching conversations:",G),F("Failed to load conversations. Please check your permissions.")}finally{y(!1),L(!1)}},Ee=G=>{const de={};return G.forEach(le=>{const xe=le.userId;de[xe]||(de[xe]={userId:xe,userName:le.userName||"Unknown User",userEmail:le.userEmail||"No email",messages:[],unreadCount:0,lastMessage:le.timestamp,hasUnreadAdminMessages:!1}),de[xe].messages.push(le),!le.read&&le.isAdmin&&(de[xe].hasUnreadAdminMessages=!0,de[xe].unreadCount++),le.timestamp&&(!de[xe].lastMessage||le.timestamp.toDate()>de[xe].lastMessage.toDate())&&(de[xe].lastMessage=le.timestamp)}),Object.values(de)},X=(G,de)=>{const le=[...G];switch(de){case"newest":return le.sort((xe,ye)=>{const Ie=xe.lastMessage?xe.lastMessage.toDate():new Date(0);return(ye.lastMessage?ye.lastMessage.toDate():new Date(0))-Ie});case"oldest":return le.sort((xe,ye)=>{const Ie=xe.lastMessage?xe.lastMessage.toDate():new Date(0),Ve=ye.lastMessage?ye.lastMessage.toDate():new Date(0);return Ie-Ve});case"unread":return le.sort((xe,ye)=>ye.unreadCount-xe.unreadCount);case"name":return le.sort((xe,ye)=>xe.userName.localeCompare(ye.userName));default:return le}},fe=r.filter(G=>{if(N==="unread"&&G.unreadCount===0||N==="read"&&G.unreadCount>0)return!1;if(h){const de=h.toLowerCase();return G.userName.toLowerCase().includes(de)||G.userId.toLowerCase().includes(de)||G.userEmail.toLowerCase().includes(de)||G.messages.some(le=>le.message&&le.message.toLowerCase().includes(de))}return!0}),ge=async G=>{if(!W)return;s(G);const de=G.messages.filter(le=>!le.read&&le.isAdmin);if(de.length>0)try{const le=m0(Xe);de.forEach(xe=>{const ye=rn(Xe,"chats",xe.id);le.update(ye,{read:!0})}),await le.commit(),e(xe=>xe.map(ye=>ye.userId===G.userId?{...ye,unreadCount:0,hasUnreadAdminMessages:!1}:ye))}catch(le){console.error("Error marking messages as read:",le),F("Failed to mark messages as read.")}},Pe=async G=>{if(G.preventDefault(),!(!o.trim()||!n||!W)){w(!0);try{await Ho(yn(Xe,"chats"),{userId:n.userId,userName:n.userName,userEmail:n.userEmail,message:o.trim(),isAdmin:!0,timestamp:ys(),read:!1}),c(""),he()}catch(de){console.error("Error sending reply:",de),F("Failed to send message. Please check your permissions.")}finally{w(!1)}}},B=G=>{if(!G)return"";try{const de=G.toDate();return(new Date-de)/(1e3*60*60)<24?de.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):de.toLocaleDateString([],{month:"short",day:"numeric"})}catch{return""}},ae=G=>G.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),pe=G=>!G||G==="Unknown User"?"U":G.split(" ").map(de=>de[0]).join("").toUpperCase().substring(0,2),q=()=>{j(!C)};return te?W?g?u.jsxs("div",{className:"admin-loading",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("p",{children:"Loading conversations..."})]}):u.jsxs("div",{className:"admin-chat-management",children:[u.jsxs("div",{className:"admin-header",children:[u.jsxs("div",{className:"header-title",children:[u.jsx("h1",{children:"Customer Support Management"}),u.jsx("p",{children:"Manage and respond to user inquiries"})]}),u.jsxs("div",{className:"header-actions",children:[u.jsxs("div",{className:"refresh-controls",children:[u.jsxs("button",{className:`btn-refresh ${C?"active":""}`,onClick:he,disabled:M,children:[u.jsx(pg,{className:M?"spinning":""}),M?"Refreshing...":"Refresh Now"]}),u.jsxs("button",{className:`btn-auto-refresh ${C?"active":""}`,onClick:q,children:[u.jsx(So,{}),C?"Auto: ON":"Auto: OFF"]})]}),u.jsxs("button",{onClick:I,className:"btn-signout",children:[u.jsx(yc,{})," Sign Out"]})]})]}),z&&u.jsxs("div",{className:"error-banner",children:[u.jsx(gc,{}),u.jsx("span",{children:z}),u.jsx("button",{onClick:()=>F(null),children:"×"})]}),u.jsxs("div",{className:"header-stats",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:r.length}),u.jsx("span",{className:"stat-label",children:"Total Conversations"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:r.filter(G=>G.unreadCount>0).length}),u.jsx("span",{className:"stat-label",children:"Unread Conversations"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:r.reduce((G,de)=>G+de.messages.length,0)}),u.jsx("span",{className:"stat-label",children:"Total Messages"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:C?"ON":"OFF"}),u.jsx("span",{className:"stat-label",children:"Auto Refresh"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:ae(k)}),u.jsx("span",{className:"stat-label",children:"Last Refresh"})]})]}),u.jsxs("div",{className:"admin-conversation-container",children:[u.jsxs("div",{className:"conversation-list",children:[u.jsxs("div",{className:"conversation-filters",children:[u.jsxs("div",{className:"search-box",children:[u.jsx(ih,{}),u.jsx("input",{type:"text",placeholder:"Search conversations...",value:h,onChange:G=>p(G.target.value)})]}),u.jsxs("div",{className:"filter-controls",children:[u.jsxs("div",{className:"filter-buttons",children:[u.jsx("button",{className:N==="all"?"active":"",onClick:()=>V("all"),children:"All"}),u.jsx("button",{className:N==="unread"?"active":"",onClick:()=>V("unread"),children:"Unread"})]}),u.jsxs("div",{className:"sort-dropdown",children:[u.jsxs("select",{value:E,onChange:G=>R(G.target.value),children:[u.jsx("option",{value:"newest",children:"Newest First"}),u.jsx("option",{value:"oldest",children:"Oldest First"}),u.jsx("option",{value:"unread",children:"Unread First"}),u.jsx("option",{value:"name",children:"By Name"})]}),u.jsx(pb,{})]})]})]}),u.jsx("div",{className:"conversations",children:fe.length===0?u.jsxs("div",{className:"no-conversations",children:[u.jsx(ac,{size:48}),u.jsx("p",{children:"No conversations found"}),u.jsx("span",{children:"Try adjusting your search or filters"})]}):fe.map(G=>u.jsxs("div",{className:`conversation-item ${n&&n.userId===G.userId?"active":""} ${G.hasUnreadAdminMessages?"unread":""}`,onClick:()=>ge(G),children:[u.jsx("div",{className:"conversation-avatar",children:pe(G.userName)}),u.jsxs("div",{className:"conversation-details",children:[u.jsxs("div",{className:"conversation-header",children:[u.jsx("h4",{children:G.userName}),u.jsx("span",{className:"conversation-time",children:B(G.lastMessage)})]}),u.jsx("p",{className:"conversation-email",children:G.userEmail}),u.jsx("p",{className:"conversation-preview",children:G.messages.length>0&&G.messages[G.messages.length-1]?.message?G.messages[G.messages.length-1].message.substring(0,70)+"...":"No messages"})]}),G.unreadCount>0&&u.jsx("span",{className:"unread-badge",children:G.unreadCount})]},G.userId))})]}),u.jsx("div",{className:"conversation-view",children:n?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"conversation-header",children:u.jsxs("div",{className:"user-info",children:[u.jsx("div",{className:"user-avatar",children:pe(n.userName)}),u.jsxs("div",{children:[u.jsx("h3",{children:n.userName}),u.jsx("p",{className:"user-email",children:n.userEmail}),u.jsxs("p",{className:"user-id",children:["User ID: ",n.userId]})]})]})}),u.jsx("div",{className:"message-list",children:n.messages.sort((G,de)=>{const le=G.timestamp?G.timestamp.toDate():new Date(0),xe=de.timestamp?de.timestamp.toDate():new Date(0);return le-xe}).map(G=>u.jsxs("div",{className:`message ${G.isAdmin?"admin-message":"user-message"} ${G.read?"read":"unread"}`,children:[u.jsx("div",{className:"message-avatar",children:G.isAdmin?"A":pe(n.userName)}),u.jsxs("div",{className:"message-content",children:[u.jsxs("div",{className:"message-header",children:[u.jsx("span",{className:"message-sender",children:G.isAdmin?"Admin":n.userName}),u.jsx("span",{className:"message-time",children:B(G.timestamp)})]}),u.jsx("p",{children:G.message||"No message content"}),!G.read&&G.isAdmin&&u.jsxs("span",{className:"unread-indicator",children:[u.jsx(hg,{})," Unread"]})]})]},G.id))}),u.jsx("form",{onSubmit:Pe,className:"message-input-form",children:u.jsxs("div",{className:"input-container",children:[u.jsx("input",{type:"text",value:o,onChange:G=>c(G.target.value),placeholder:"Type your response...",disabled:x}),u.jsx("button",{type:"submit",disabled:x||!o.trim(),className:"btn-send",children:x?"Sending...":u.jsxs(u.Fragment,{children:[u.jsx(fb,{})," Send"]})})]})})]}):u.jsxs("div",{className:"no-conversation-selected",children:[u.jsx(ac,{size:64}),u.jsx("h3",{children:"Select a conversation"}),u.jsx("p",{children:"Choose a conversation from the list to view messages and respond to users."})]})})]}),u.jsx("style",{jsx:!0,children:`
        .admin-chat-management {
          padding: 20px;
          background: #f5f7fa;
          min-height: 100vh;
        }
        
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          padding: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .header-title h1 {
          margin: 0;
          color: #2c3e50;
        }
        
        .header-title p {
          margin: 5px 0 极;
          color: #7f8c8d;
        }
        
        .header-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
        }
        
        .refresh-controls {
          display: flex;
          gap: 10px;
        }
        
        .btn-refresh, .btn-auto-refresh {
          padding: 10px 15px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 5极;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        
        .btn-refresh.active, .btn-auto-refresh.active {
          background: #27ae60;
        }
        
        .btn-auto-refresh {
          background: #95a5a6;
        }
        
        .btn-signout {
          padding: 10px 15px;
          background: #e74c3c;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        
        .btn-refresh:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
        }
        
        .spinning {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .error-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          background: #ffebee;
          color: #c62828;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        
        .error-banner button {
          margin-left: auto;
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #c62828;
        }
        
        .access-denied {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #f5f7fa;
        }
        
        .access-denied-content {
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          max-width: 500px;
        }
        
        .access-denied-content h2 {
          color: #e74c3c;
          margin: 20px 0 10px;
        }
        
        .access-denied-content p {
          color: #7极8c8d;
          margin-bottom: 20px;
        }
        
        .header-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px;
          background: white;
          border-radius: 8px;
          min-width: 120px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .stat-number {
          font-size: 18px;
          font-weight: bold;
          color: #3498db;
        }
        
        .stat-label {
          font-size: 12px;
          color: #7f8c8d;
          text-align: center;
        }
        
        .admin-conversation-container {
          display: flex;
          gap: 20px;
          height: calc(100vh - 240px);
        }
        
        .conversation-list {
          width: 400px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        
        .conversation-filters {
          padding: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .search-box {
          position: relative;
          margin-bottom: 15px;
        }
        
        .search-box svg {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #7f8c8d;
        }
        
        .search-box input {
          width: 100%;
          padding: 10px 10极 10px 40px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 14px;
        }
        
        .filter-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }
        
        .filter-b极ttons {
          display: flex;
          gap: 5px;
        }
        
        .filter-buttons button {
          padding: 6px 12px;
          background: #f8f9fa;
          border: 1px solid #eee;
          border-radius: 5px;
          cursor: pointer;
          font-size: 13px;
        }
        
        .filter-buttons button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        .sort-dropdown {
          position: relative;
        }
        
        .sort-dropdown select {
          padding: 6px 30px 6px 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 13极;
          appearance: none;
          background: white;
        }
        
        .sort-dropdown svg {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #7f8c8d;
        }
        
        .conversations {
          flex: 1;
          overflow-y: auto;
        }
        
        .conversation-item {
          display: flex;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #f1f3f4;
          cursor: pointer;
          transition: background 0.2s;
          position: relative;
        }
        
        .conversation-item:hover {
          background: #f8f9fa;
        }
        
        .conversation-item.active {
          background: #e3f2fd;
        }
        
        .conversation-item.unread {
          background: #fff8e1;
          border-left: 3px solid #ffc107;
        }
        
        .conversation-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
          font-weight: bold;
          font-size: 14px;
        }
        
        .conversation-details {
          flex: 1;
          min-width: 0;
        }
        
        .conversation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        
        .conversation-header h极 {
          margin: 0;
          font-size: 14px;
          color: #2c3e50;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .极onversation-time {
          font-size: 11px;
          color: #7f8c8d;
          white-space: nowrap;
          margin-left: 10px;
        }
        
        .conversation-email {
          margin: 0 0 5px 0;
          font-size: 12px;
          color: #7f8c8d;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .conversation-preview {
          margin: 0;
          font-size: 13px;
          color: #7f8c8d;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .unread-badge {
          background: #e74c3c;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          flex-shrink: 0;
          margin: 0 10px;
        }
        
        .no-conversations {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;
          color: #7f8c8d;
          text-align: center;
          padding: 20px;
        }
        
        .no-conversations svg {
          margin-bottom: 10px;
          opacity: 0.5;
        }
        
        .no-conversations span {
          font-size: 13px;
          margin-top: 5px;
        }
        
        .conversation-view {
          flex: 1;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        
        .conversation-header {
          padding: 20px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .user-info {
          display: flex;
          align-items: center;
        }
        
        .user-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          font-weight: bold;
          font-size: 18px;
        }
        
        .user-email, .user-id {
          margin: 2px 0;
          font-size: 13px;
          color: #7f8c8d;
        }
        
        .message-list {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .message {
          display: flex;
          gap: 10px;
        }
        
        .user-message {
          align-self: flex-start;
        }
        
        .admin-message {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        
        .message-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 12px;
          flex-shrink: 0;
        }
        
        .admin-message .message-avatar {
          background: #3498db;
          color: white;
        }
        
        .message-content {
          max-width: 70%;
          padding: 12px 16px;
          border-radius: 18px;
          position: relative;
        }
        
        .user-message .message-content {
          background: #f1f3f4;
          color: #2c3e50;
          border-bottom-left-radius: 5px;
        }
        
        .admin-message .message-content {
          background: #3498db;
          color: white;
          border-bottom-right-radius: 5px;
        }
        
        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        
        .message-sender {
          font-size: 12px;
          font-weight: bold;
        }
        
        .message-time {
          font-size: 11px;
          opacity: 0.8;
        }
        
        .unread-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          margin-top: 5px;
          opacity: 0.8;
        }
        
        .message-input-form {
          padding: 20px;
          border-top: 1px solid #eee;
        }
        
        .input-container {
          display: flex;
          gap: 10px;
        }
        
        .input-container input {
          flex: 1;
          padding: 12px 15px;
          border-radius: 20px;
          border: 1px solid #ddd;
          outline: none;
          font-size: 14px;
        }
        
        .input-container input:focus {
          border-color: #3498db;
        }
        
        .btn-send {
          padding: 10px 20px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 14px;
        }
        
        .btn-send:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
        }
        
        .no-conversation-selected {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #7f8c8d;
          text-align: center;
          padding: 20px;
        }
        
        .极o-conversation-selected svg {
          margin-bottom: 15px;
          opacity: 0.5;
        }
        
        .no-conversation-selected h3 {
          margin: 0 0 10px 0;
          color: #2c3e50;
        }
        
        .no-conversation-selected p {
          margin: 0;
          max-width: 300px;
          line-height: 1.5;
        }
        
        .admin-loading {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 200px;
          color: #7f8c8d;
        }
        
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 15px;
        }
        
        @media (max-width: 992px) {
          .admin-conversation-container {
            flex-direction: column;
            height: auto;
          }
          
          .conversation-list {
            width: 100%;
            height: 300px;
          }
          
          .admin-header {
            flex-direction: column;
            gap: 15px;
          }
          
          .header-stats {
            flex-wrap: wrap;
          }
          
          .header-actions {
            width: 100%;
            justify-content: flex-end;
          }
        }
      `})]}):u.jsx("div",{className:"access-denied",children:u.jsxs("div",{className:"access-denied-content",children:[u.jsx(gc,{size:48}),u.jsx("h2",{children:"Access Denied"}),u.jsx("p",{children:"You need administrator privileges to access this page."}),u.jsxs("button",{onClick:I,className:"btn-signout",children:[u.jsx(yc,{})," Sign Out"]})]})}):u.jsxs("div",{className:"admin-loading",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("p",{children:"Checking permissions..."})]})},v9=()=>{const[r,e]=P.useState(""),[n,s]=P.useState(""),[o,c]=P.useState(""),h=vs(),p=async g=>{g.preventDefault(),c("");try{(await Xb(cr,r,n)).user.email==="admin@goldcorps.org"?h("/admin"):c("❌ Unauthorized: You are not the admin.")}catch(y){c("⚠️ Login failed: "+y.message)}};return u.jsxs("div",{className:"admin-login-container",children:[u.jsxs("form",{onSubmit:p,className:"admin-login-form",children:[u.jsxs("div",{className:"form-header",children:[u.jsx(c2,{className:"shield-icon"}),u.jsx("h2",{children:"Admin Access"})]}),o&&u.jsx("div",{className:"error-box",children:o}),u.jsxs("div",{className:"input-group",children:[u.jsx(c2,{className:"input-icon"}),u.jsx("input",{type:"email",placeholder:"Admin Email",value:r,onChange:g=>e(g.target.value),required:!0})]}),u.jsxs("div",{className:"input-group",children:[u.jsx(C3,{className:"input-icon"}),u.jsx("input",{type:"password",placeholder:"Admin Password",value:n,onChange:g=>s(g.target.value),required:!0})]}),u.jsx("button",{type:"submit",className:"login-btn",children:"Login"})]}),u.jsx("style",{children:`
        .admin-login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #fff 0%, #fdfdfd 100%);
        }

        .admin-login-form {
          width: 380px;
          padding: 40px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 215, 0, 0.3);
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          text-align: center;
          animation: fadeIn 1s ease forwards;
        }

        .form-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 25px;
        }

        .form-header h2 {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(90deg, #FFD700, #DAA520);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-top: 10px;
        }

        .shield-icon {
          font-size: 3rem;
          color: #FFD700;
          filter: drop-shadow(0 0 6px rgba(255,215,0,0.5));
        }

        .input-group {
          position: relative;
          margin-bottom: 20px;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #DAA520;
          font-size: 1.2rem;
        }

        input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          border-radius: 10px;
          border: 1px solid rgba(255, 215, 0, 0.3);
          background: rgba(255,255,255,0.08);
          color: #111;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        input:focus {
          outline: none;
          border-color: #FFD700;
          background: rgba(255,255,255,0.2);
          box-shadow: 0 0 10px rgba(255,215,0,0.3);
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          background: linear-gradient(90deg, #FFD700, #DAA520);
          color: #111;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(255,215,0,0.35);
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(255,215,0,0.5);
        }

        .error-box {
          margin-bottom: 15px;
          padding: 10px;
          border-radius: 8px;
          font-size: 0.9rem;
          background: rgba(255,0,0,0.1);
          color: #b71c1c;
          border: 1px solid rgba(255,0,0,0.2);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `})]})};function x9(){return u.jsxs(u.Fragment,{children:[u.jsx(ug,{}),u.jsx(o3,{}),u.jsx(L3,{}),u.jsx(U3,{}),u.jsx(G3,{})]})}function b9(){return u.jsxs(pT,{children:[u.jsx(Xn,{path:"/",element:u.jsx(x9,{})}),u.jsx(Xn,{path:"/login",element:u.jsx(c9,{})}),u.jsx(Xn,{path:"/signup",element:u.jsx(u9,{})}),u.jsx(Xn,{path:"/dashboard",element:u.jsx(l9,{})}),u.jsx(Xn,{path:"/profile",element:u.jsx(h9,{})}),u.jsx(Xn,{path:"/messages",element:u.jsx(y9,{})}),u.jsx(Xn,{path:"/management",element:u.jsx(q4,{})}),u.jsx(Xn,{path:"/stock",element:u.jsx(d9,{})}),u.jsx(Xn,{path:"/admin",element:u.jsx(m9,{})}),u.jsx(Xn,{path:"/admin-login",element:u.jsx(v9,{})}),u.jsx(Xn,{path:"*",element:u.jsx(f9,{})})," "]})}TE.createRoot(document.getElementById("root")).render(u.jsx(P.StrictMode,{children:u.jsx(LT,{children:u.jsx(b9,{})})}));
