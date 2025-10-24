(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Xp={exports:{}},Xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function uw(){if(yv)return Xl;yv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:h,ref:o!==void 0?o:null,props:c}}return Xl.Fragment=e,Xl.jsx=n,Xl.jsxs=n,Xl}var vv;function dw(){return vv||(vv=1,Xp.exports=uw()),Xp.exports}var u=dw(),Zp={exports:{}},Le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function hw(){if(xv)return Le;xv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),E=Symbol.iterator;function w(z){return z===null||typeof z!="object"?null:(z=E&&z[E]||z["@@iterator"],typeof z=="function"?z:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,U={};function M(z,oe,he){this.props=z,this.context=oe,this.refs=U,this.updater=he||I}M.prototype.isReactComponent={},M.prototype.setState=function(z,oe){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,oe,"setState")},M.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function L(){}L.prototype=M.prototype;function B(z,oe,he){this.props=z,this.context=oe,this.refs=U,this.updater=he||I}var q=B.prototype=new L;q.constructor=B,N(q,M.prototype),q.isPureReactComponent=!0;var X=Array.isArray,ee={H:null,A:null,T:null,S:null,V:null},ne=Object.prototype.hasOwnProperty;function k(z,oe,he,de,J,pe){return he=pe.ref,{$$typeof:r,type:z,key:oe,ref:he!==void 0?he:null,props:pe}}function C(z,oe){return k(z.type,oe,void 0,void 0,void 0,z.props)}function j(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function O(z){var oe={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(he){return oe[he]})}var D=/\/+/g;function A(z,oe){return typeof z=="object"&&z!==null&&z.key!=null?O(""+z.key):oe.toString(36)}function T(){}function re(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(T,T):(z.status="pending",z.then(function(oe){z.status==="pending"&&(z.status="fulfilled",z.value=oe)},function(oe){z.status==="pending"&&(z.status="rejected",z.reason=oe)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function xe(z,oe,he,de,J){var pe=typeof z;(pe==="undefined"||pe==="boolean")&&(z=null);var fe=!1;if(z===null)fe=!0;else switch(pe){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(z.$$typeof){case r:case e:fe=!0;break;case x:return fe=z._init,xe(fe(z._payload),oe,he,de,J)}}if(fe)return J=J(z),fe=de===""?"."+A(z,0):de,X(J)?(he="",fe!=null&&(he=fe.replace(D,"$&/")+"/"),xe(J,oe,he,"",function(Ge){return Ge})):J!=null&&(j(J)&&(J=C(J,he+(J.key==null||z&&z.key===J.key?"":(""+J.key).replace(D,"$&/")+"/")+fe)),oe.push(J)),1;fe=0;var we=de===""?".":de+":";if(X(z))for(var ve=0;ve<z.length;ve++)de=z[ve],pe=we+A(de,ve),fe+=xe(de,oe,he,pe,J);else if(ve=w(z),typeof ve=="function")for(z=ve.call(z),ve=0;!(de=z.next()).done;)de=de.value,pe=we+A(de,ve++),fe+=xe(de,oe,he,pe,J);else if(pe==="object"){if(typeof z.then=="function")return xe(re(z),oe,he,de,J);throw oe=String(z),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.")}return fe}function Y(z,oe,he){if(z==null)return z;var de=[],J=0;return xe(z,de,"","",function(pe){return oe.call(he,pe,J++)}),de}function ue(z){if(z._status===-1){var oe=z._result;oe=oe(),oe.then(function(he){(z._status===0||z._status===-1)&&(z._status=1,z._result=he)},function(he){(z._status===0||z._status===-1)&&(z._status=2,z._result=he)}),z._status===-1&&(z._status=0,z._result=oe)}if(z._status===1)return z._result.default;throw z._result}var ye=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var oe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(oe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function Re(){}return Le.Children={map:Y,forEach:function(z,oe,he){Y(z,function(){oe.apply(this,arguments)},he)},count:function(z){var oe=0;return Y(z,function(){oe++}),oe},toArray:function(z){return Y(z,function(oe){return oe})||[]},only:function(z){if(!j(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Le.Component=M,Le.Fragment=n,Le.Profiler=o,Le.PureComponent=B,Le.StrictMode=s,Le.Suspense=g,Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,Le.__COMPILER_RUNTIME={__proto__:null,c:function(z){return ee.H.useMemoCache(z)}},Le.cache=function(z){return function(){return z.apply(null,arguments)}},Le.cloneElement=function(z,oe,he){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var de=N({},z.props),J=z.key,pe=void 0;if(oe!=null)for(fe in oe.ref!==void 0&&(pe=void 0),oe.key!==void 0&&(J=""+oe.key),oe)!ne.call(oe,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&oe.ref===void 0||(de[fe]=oe[fe]);var fe=arguments.length-2;if(fe===1)de.children=he;else if(1<fe){for(var we=Array(fe),ve=0;ve<fe;ve++)we[ve]=arguments[ve+2];de.children=we}return k(z.type,J,void 0,void 0,pe,de)},Le.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},Le.createElement=function(z,oe,he){var de,J={},pe=null;if(oe!=null)for(de in oe.key!==void 0&&(pe=""+oe.key),oe)ne.call(oe,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(J[de]=oe[de]);var fe=arguments.length-2;if(fe===1)J.children=he;else if(1<fe){for(var we=Array(fe),ve=0;ve<fe;ve++)we[ve]=arguments[ve+2];J.children=we}if(z&&z.defaultProps)for(de in fe=z.defaultProps,fe)J[de]===void 0&&(J[de]=fe[de]);return k(z,pe,void 0,void 0,null,J)},Le.createRef=function(){return{current:null}},Le.forwardRef=function(z){return{$$typeof:p,render:z}},Le.isValidElement=j,Le.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:ue}},Le.memo=function(z,oe){return{$$typeof:y,type:z,compare:oe===void 0?null:oe}},Le.startTransition=function(z){var oe=ee.T,he={};ee.T=he;try{var de=z(),J=ee.S;J!==null&&J(he,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(Re,ye)}catch(pe){ye(pe)}finally{ee.T=oe}},Le.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},Le.use=function(z){return ee.H.use(z)},Le.useActionState=function(z,oe,he){return ee.H.useActionState(z,oe,he)},Le.useCallback=function(z,oe){return ee.H.useCallback(z,oe)},Le.useContext=function(z){return ee.H.useContext(z)},Le.useDebugValue=function(){},Le.useDeferredValue=function(z,oe){return ee.H.useDeferredValue(z,oe)},Le.useEffect=function(z,oe,he){var de=ee.H;if(typeof he=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return de.useEffect(z,oe)},Le.useId=function(){return ee.H.useId()},Le.useImperativeHandle=function(z,oe,he){return ee.H.useImperativeHandle(z,oe,he)},Le.useInsertionEffect=function(z,oe){return ee.H.useInsertionEffect(z,oe)},Le.useLayoutEffect=function(z,oe){return ee.H.useLayoutEffect(z,oe)},Le.useMemo=function(z,oe){return ee.H.useMemo(z,oe)},Le.useOptimistic=function(z,oe){return ee.H.useOptimistic(z,oe)},Le.useReducer=function(z,oe,he){return ee.H.useReducer(z,oe,he)},Le.useRef=function(z){return ee.H.useRef(z)},Le.useState=function(z){return ee.H.useState(z)},Le.useSyncExternalStore=function(z,oe,he){return ee.H.useSyncExternalStore(z,oe,he)},Le.useTransition=function(){return ee.H.useTransition()},Le.version="19.1.1",Le}var _v;function Ei(){return _v||(_v=1,Zp.exports=hw()),Zp.exports}var P=Ei();const aa=cw(P);var Jp={exports:{}},Zl={},em={exports:{}},tm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function fw(){return bv||(bv=1,(function(r){function e(Y,ue){var ye=Y.length;Y.push(ue);e:for(;0<ye;){var Re=ye-1>>>1,z=Y[Re];if(0<o(z,ue))Y[Re]=ue,Y[ye]=z,ye=Re;else break e}}function n(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ue=Y[0],ye=Y.pop();if(ye!==ue){Y[0]=ye;e:for(var Re=0,z=Y.length,oe=z>>>1;Re<oe;){var he=2*(Re+1)-1,de=Y[he],J=he+1,pe=Y[J];if(0>o(de,ye))J<z&&0>o(pe,de)?(Y[Re]=pe,Y[J]=ye,Re=J):(Y[Re]=de,Y[he]=ye,Re=he);else if(J<z&&0>o(pe,ye))Y[Re]=pe,Y[J]=ye,Re=J;else break e}}return ue}function o(Y,ue){var ye=Y.sortIndex-ue.sortIndex;return ye!==0?ye:Y.id-ue.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var g=[],y=[],x=1,E=null,w=3,I=!1,N=!1,U=!1,M=!1,L=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function X(Y){for(var ue=n(y);ue!==null;){if(ue.callback===null)s(y);else if(ue.startTime<=Y)s(y),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=n(y)}}function ee(Y){if(U=!1,X(Y),!N)if(n(g)!==null)N=!0,ne||(ne=!0,A());else{var ue=n(y);ue!==null&&xe(ee,ue.startTime-Y)}}var ne=!1,k=-1,C=5,j=-1;function O(){return M?!0:!(r.unstable_now()-j<C)}function D(){if(M=!1,ne){var Y=r.unstable_now();j=Y;var ue=!0;try{e:{N=!1,U&&(U=!1,B(k),k=-1),I=!0;var ye=w;try{t:{for(X(Y),E=n(g);E!==null&&!(E.expirationTime>Y&&O());){var Re=E.callback;if(typeof Re=="function"){E.callback=null,w=E.priorityLevel;var z=Re(E.expirationTime<=Y);if(Y=r.unstable_now(),typeof z=="function"){E.callback=z,X(Y),ue=!0;break t}E===n(g)&&s(g),X(Y)}else s(g);E=n(g)}if(E!==null)ue=!0;else{var oe=n(y);oe!==null&&xe(ee,oe.startTime-Y),ue=!1}}break e}finally{E=null,w=ye,I=!1}ue=void 0}}finally{ue?A():ne=!1}}}var A;if(typeof q=="function")A=function(){q(D)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,re=T.port2;T.port1.onmessage=D,A=function(){re.postMessage(null)}}else A=function(){L(D,0)};function xe(Y,ue){k=L(function(){Y(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var ue=3;break;default:ue=w}var ye=w;w=ue;try{return Y()}finally{w=ye}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(Y,ue){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ye=w;w=Y;try{return ue()}finally{w=ye}},r.unstable_scheduleCallback=function(Y,ue,ye){var Re=r.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?Re+ye:Re):ye=Re,Y){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=ye+z,Y={id:x++,callback:ue,priorityLevel:Y,startTime:ye,expirationTime:z,sortIndex:-1},ye>Re?(Y.sortIndex=ye,e(y,Y),n(g)===null&&Y===n(y)&&(U?(B(k),k=-1):U=!0,xe(ee,ye-Re))):(Y.sortIndex=z,e(g,Y),N||I||(N=!0,ne||(ne=!0,A()))),Y},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(Y){var ue=w;return function(){var ye=w;w=ue;try{return Y.apply(this,arguments)}finally{w=ye}}}})(tm)),tm}var Ev;function pw(){return Ev||(Ev=1,em.exports=fw()),em.exports}var nm={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function mw(){if(wv)return on;wv=1;var r=Ei();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(g,y,x){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:g,containerInfo:y,implementation:x}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,on.createPortal=function(g,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return c(g,y,null,x)},on.flushSync=function(g){var y=h.T,x=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=y,s.p=x,s.d.f()}},on.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},on.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},on.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var x=y.as,E=p(x,y.crossOrigin),w=typeof y.integrity=="string"?y.integrity:void 0,I=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:E,integrity:w,fetchPriority:I}):x==="script"&&s.d.X(g,{crossOrigin:E,integrity:w,fetchPriority:I,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},on.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=p(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},on.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,E=p(x,y.crossOrigin);s.d.L(g,x,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},on.preloadModule=function(g,y){if(typeof g=="string")if(y){var x=p(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},on.requestFormReset=function(g){s.d.r(g)},on.unstable_batchedUpdates=function(g,y){return g(y)},on.useFormState=function(g,y,x){return h.H.useFormState(g,y,x)},on.useFormStatus=function(){return h.H.useHostTransitionStatus()},on.version="19.1.1",on}var Tv;function Zm(){if(Tv)return nm.exports;Tv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),nm.exports=mw(),nm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function gw(){if(Sv)return Zl;Sv=1;var r=pw(),e=Ei(),n=Zm();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function h(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function g(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return p(f),t;if(m===l)return p(f),i;m=m.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=m;else{for(var b=!1,S=f.child;S;){if(S===a){b=!0,a=f,l=m;break}if(S===l){b=!0,l=f,a=m;break}S=S.sibling}if(!b){for(S=m.child;S;){if(S===a){b=!0,a=m,l=f;break}if(S===l){b=!0,l=m,a=f;break}S=S.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var x=Object.assign,E=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),q=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function A(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var T=Symbol.for("react.client.reference");function re(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===T?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case M:return"Profiler";case U:return"StrictMode";case ee:return"Suspense";case ne:return"SuspenseList";case j:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case I:return"Portal";case q:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case X:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return i=t.displayName||null,i!==null?i:re(t.type)||"Memo";case C:i=t._payload,t=t._init;try{return re(t(i))}catch{}}return null}var xe=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},Re=[],z=-1;function oe(t){return{current:t}}function he(t){0>z||(t.current=Re[z],Re[z]=null,z--)}function de(t,i){z++,Re[z]=t.current,t.current=i}var J=oe(null),pe=oe(null),fe=oe(null),we=oe(null);function ve(t,i){switch(de(fe,i),de(pe,t),de(J,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?G1(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=G1(i),t=Y1(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}he(J),de(J,t)}function Ge(){he(J),he(pe),he(fe)}function pt(t){t.memoizedState!==null&&de(we,t);var i=J.current,a=Y1(i,t.type);i!==a&&(de(pe,t),de(J,a))}function Kt(t){pe.current===t&&(he(J),he(pe)),we.current===t&&(he(we),Yl._currentValue=ye)}var tr=Object.prototype.hasOwnProperty,Nn=r.unstable_scheduleCallback,Vr=r.unstable_cancelCallback,vn=r.unstable_shouldYield,hr=r.unstable_requestPaint,xn=r.unstable_now,te=r.unstable_getCurrentPriorityLevel,Ee=r.unstable_ImmediatePriority,Ae=r.unstable_UserBlockingPriority,Me=r.unstable_NormalPriority,ft=r.unstable_LowPriority,Pt=r.unstable_IdlePriority,Vn=r.log,Ta=r.unstable_setDisableYieldValue,Ye=null,Xe=null;function Rn(t){if(typeof Vn=="function"&&Ta(t),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(Ye,t)}catch{}}var sn=Math.clz32?Math.clz32:Ts,Xc=Math.log,Zh=Math.LN2;function Ts(t){return t>>>=0,t===0?32:31-(Xc(t)/Zh|0)|0}var Ss=256,As=4194304;function nr(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Sa(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var S=l&134217727;return S!==0?(l=S&~m,l!==0?f=nr(l):(b&=S,b!==0?f=nr(b):a||(a=S&~t,a!==0&&(f=nr(a))))):(S=l&~m,S!==0?f=nr(S):b!==0?f=nr(b):a||(a=l&~t,a!==0&&(f=nr(a)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,a=i&-i,m>=a||m===32&&(a&4194048)!==0)?i:f}function Ns(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Yo(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $o(){var t=Ss;return Ss<<=1,(Ss&4194048)===0&&(Ss=256),t}function Qo(){var t=As;return As<<=1,(As&62914560)===0&&(As=4194304),t}function Ur(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function zr(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ko(t,i,a,l,f,m){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var S=t.entanglements,V=t.expirationTimes,Q=t.hiddenUpdates;for(a=b&~a;0<a;){var ie=31-sn(a),le=1<<ie;S[ie]=0,V[ie]=-1;var K=Q[ie];if(K!==null)for(Q[ie]=null,ie=0;ie<K.length;ie++){var W=K[ie];W!==null&&(W.lane&=-536870913)}a&=~le}l!==0&&fr(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(b&~i))}function fr(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-sn(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Wo(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-sn(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}function Ni(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Aa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ri(){var t=ue.p;return t!==0?t:(t=window.event,t===void 0?32:dv(t.type))}function Zc(t,i){var a=ue.p;try{return ue.p=t,i()}finally{ue.p=a}}var mt=Math.random().toString(36).slice(2),Lt="__reactFiber$"+mt,Ct="__reactProps$"+mt,Un="__reactContainer$"+mt,Xo="__reactEvents$"+mt,Jh="__reactListeners$"+mt,Ci="__reactHandles$"+mt,Jc="__reactResources$"+mt,Rs="__reactMarker$"+mt;function Ii(t){delete t[Lt],delete t[Ct],delete t[Xo],delete t[Jh],delete t[Ci]}function Br(t){var i=t[Lt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Un]||a[Lt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=W1(t);t!==null;){if(a=t[Lt])return a;t=W1(t)}return i}t=a,a=t.parentNode}return null}function pr(t){if(t=t[Lt]||t[Un]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function mr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function hn(t){var i=t[Jc];return i||(i=t[Jc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Tt(t){t[Rs]=!0}var Zo=new Set,Na={};function rr(t,i){Fr(t,i),Fr(t+"Capture",i)}function Fr(t,i){for(Na[t]=i,t=0;t<i.length;t++)Zo.add(i[t])}var eu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tu={},Cs={};function nu(t){return tr.call(Cs,t)?!0:tr.call(tu,t)?!1:eu.test(t)?Cs[t]=!0:(tu[t]=!0,!1)}function ji(t,i,a){if(nu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function gr(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Wt(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var Is,ru;function qr(t){if(Is===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Is=i&&i[1]||"",ru=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Is+t+ru}var Ra=!1;function Ca(t,i){if(!t||Ra)return"";Ra=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(W){var K=W}Reflect.construct(t,[],le)}else{try{le.call()}catch(W){K=W}t.call(le.prototype)}}else{try{throw Error()}catch(W){K=W}(le=t())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(W){if(W&&K&&typeof W.stack=="string")return[W.stack,K.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],S=m[1];if(b&&S){var V=b.split(`
`),Q=S.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<Q.length&&!Q[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===Q.length)for(l=V.length-1,f=Q.length-1;1<=l&&0<=f&&V[l]!==Q[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==Q[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==Q[f]){var ie=`
`+V[l].replace(" at new "," at ");return t.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",t.displayName)),ie}while(1<=l&&0<=f);break}}}finally{Ra=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qr(a):""}function Jo(t){switch(t.tag){case 26:case 27:case 5:return qr(t.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 15:return Ca(t.type,!1);case 11:return Ca(t.type.render,!1);case 1:return Ca(t.type,!0);case 31:return qr("Activity");default:return""}}function Ia(t){try{var i="";do i+=Jo(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function el(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ef(t){var i=el(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){l=""+b,m.call(this,b)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ja(t){t._valueTracker||(t._valueTracker=ef(t))}function tl(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=el(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function js(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var tf=/[\n"\\]/g;function It(t){return t.replace(tf,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Cn(t,i,a,l,f,m,b,S){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+fn(i)):t.value!==""+fn(i)&&(t.value=""+fn(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?Di(t,b,fn(i)):a!=null?Di(t,b,fn(a)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.name=""+fn(S):t.removeAttribute("name")}function Ds(t,i,a,l,f,m,b,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;a=a!=null?""+fn(a):"",i=i!=null?""+fn(i):a,S||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=S?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b)}function Di(t,i,a){i==="number"&&js(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Hr(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+fn(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function st(t,i,a){if(i!=null&&(i=""+fn(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+fn(a):""}function Os(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(xe(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=fn(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function zn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ks=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function iu(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||ks.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function nl(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&iu(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&iu(t,m,i[m])}function rl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Da(t){return rf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Gr=null;function Bn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yr=null,$r=null;function il(t){var i=pr(t);if(i&&(t=i.stateNode)){var a=t[Ct]||null;e:switch(t=i.stateNode,i.type){case"input":if(Cn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+It(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=l[Ct]||null;if(!f)throw Error(s(90));Cn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&tl(l)}break e;case"textarea":st(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Hr(t,!!a.multiple,i,!1)}}}var yr=!1;function su(t,i,a){if(yr)return t(i,a);yr=!0;try{var l=t(i);return l}finally{if(yr=!1,(Yr!==null||$r!==null)&&(Zu(),Yr&&(i=Yr,t=$r,$r=Yr=null,il(i),t)))for(i=0;i<t.length;i++)il(t[i])}}function Ms(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Ct]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fn=!1;if(ir)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Fn=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Fn=!1}var vr=null,Oi=null,Qr=null;function sl(){if(Qr)return Qr;var t,i=Oi,a=i.length,l,f="value"in vr?vr.value:vr.textContent,m=f.length;for(t=0;t<a&&i[t]===f[t];t++);var b=a-t;for(l=1;l<=b&&i[a-l]===f[m-l];l++);return Qr=f.slice(t,1<l?1-l:void 0)}function xr(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function _r(){return!0}function al(){return!1}function qt(t){function i(a,l,f,m,b){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var S in t)t.hasOwnProperty(S)&&(a=t[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_r:al,this.isPropagationStopped=al,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),i}var tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oa=qt(tt),Ls=x({},tt,{view:0,detail:0}),au=qt(Ls),ka,Ma,br,Vs=x({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==br&&(br&&t.type==="mousemove"?(ka=t.screenX-br.screenX,Ma=t.screenY-br.screenY):Ma=ka=0,br=t),ka)},movementY:function(t){return"movementY"in t?t.movementY:Ma}}),qn=qt(Vs),ou=x({},Vs,{dataTransfer:0}),sf=qt(ou),Us=x({},Ls,{relatedTarget:0}),Pa=qt(Us),ol=x({},tt,{animationName:0,elapsedTime:0,pseudoElement:0}),La=qt(ol),lu=x({},tt,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Va=qt(lu),af=x({},tt,{data:0}),ll=qt(af),zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cl(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=uu[t])?!!i[t]:!1}function Bs(){return cl}var du=x({},Ls,{key:function(t){if(t.key){var i=zs[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=xr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(t){return t.type==="keypress"?xr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ua=qt(du),hu=x({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ul=qt(hu),Kr=x({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),fu=qt(Kr),pu=x({},tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),mu=qt(pu),gu=x({},Vs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),za=qt(gu),pn=x({},tt,{newState:0,oldState:0}),yu=qt(pn),vu=[9,13,27,32],Er=ir&&"CompositionEvent"in window,d=null;ir&&"documentMode"in document&&(d=document.documentMode);var v=ir&&"TextEvent"in window&&!d,_=ir&&(!Er||d&&8<d&&11>=d),R=" ",G=!1;function Z(t,i){switch(t){case"keyup":return vu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function me(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $e=!1;function Vt(t,i){switch(t){case"compositionend":return me(i);case"keypress":return i.which!==32?null:(G=!0,R);case"textInput":return t=i.data,t===R&&G?null:t;default:return null}}function Qe(t,i){if($e)return t==="compositionend"||!Er&&Z(t,i)?(t=sl(),Qr=Oi=vr=null,$e=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Ht={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ut(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ht[t.type]:i==="textarea"}function Wr(t,i,a,l){Yr?$r?$r.push(l):$r=[l]:Yr=l,i=id(i,"onChange"),0<i.length&&(a=new Oa("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Xt=null,wr=null;function dl(t){z1(t,0)}function xu(t){var i=mr(t);if(tl(i))return t}function o0(t,i){if(t==="change")return i}var l0=!1;if(ir){var of;if(ir){var lf="oninput"in document;if(!lf){var c0=document.createElement("div");c0.setAttribute("oninput","return;"),lf=typeof c0.oninput=="function"}of=lf}else of=!1;l0=of&&(!document.documentMode||9<document.documentMode)}function u0(){Xt&&(Xt.detachEvent("onpropertychange",d0),wr=Xt=null)}function d0(t){if(t.propertyName==="value"&&xu(wr)){var i=[];Wr(i,wr,t,Bn(t)),su(dl,i)}}function U4(t,i,a){t==="focusin"?(u0(),Xt=i,wr=a,Xt.attachEvent("onpropertychange",d0)):t==="focusout"&&u0()}function z4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(wr)}function B4(t,i){if(t==="click")return xu(i)}function F4(t,i){if(t==="input"||t==="change")return xu(i)}function q4(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var In=typeof Object.is=="function"?Object.is:q4;function hl(t,i){if(In(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!tr.call(i,f)||!In(t[f],i[f]))return!1}return!0}function h0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function f0(t,i){var a=h0(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=h0(a)}}function p0(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?p0(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function m0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=js(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=js(t.document)}return i}function cf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var H4=ir&&"documentMode"in document&&11>=document.documentMode,Ba=null,uf=null,fl=null,df=!1;function g0(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;df||Ba==null||Ba!==js(l)||(l=Ba,"selectionStart"in l&&cf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fl&&hl(fl,l)||(fl=l,l=id(uf,"onSelect"),0<l.length&&(i=new Oa("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Ba)))}function Fs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Fa={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionrun:Fs("Transition","TransitionRun"),transitionstart:Fs("Transition","TransitionStart"),transitioncancel:Fs("Transition","TransitionCancel"),transitionend:Fs("Transition","TransitionEnd")},hf={},y0={};ir&&(y0=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function qs(t){if(hf[t])return hf[t];if(!Fa[t])return t;var i=Fa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in y0)return hf[t]=i[a];return t}var v0=qs("animationend"),x0=qs("animationiteration"),_0=qs("animationstart"),G4=qs("transitionrun"),Y4=qs("transitionstart"),$4=qs("transitioncancel"),b0=qs("transitionend"),E0=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function sr(t,i){E0.set(t,i),rr(i,[t])}var w0=new WeakMap;function Hn(t,i){if(typeof t=="object"&&t!==null){var a=w0.get(t);return a!==void 0?a:(i={value:t,source:i,stack:Ia(i)},w0.set(t,i),i)}return{value:t,source:i,stack:Ia(i)}}var Gn=[],qa=0,pf=0;function _u(){for(var t=qa,i=pf=qa=0;i<t;){var a=Gn[i];Gn[i++]=null;var l=Gn[i];Gn[i++]=null;var f=Gn[i];Gn[i++]=null;var m=Gn[i];if(Gn[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}m!==0&&T0(a,f,m)}}function bu(t,i,a,l){Gn[qa++]=t,Gn[qa++]=i,Gn[qa++]=a,Gn[qa++]=l,pf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function mf(t,i,a,l){return bu(t,i,a,l),Eu(t)}function Ha(t,i){return bu(t,null,null,i),Eu(t)}function T0(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var f=!1,m=t.return;m!==null;)m.childLanes|=a,l=m.alternate,l!==null&&(l.childLanes|=a),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-sn(a),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=a|536870912),m):null}function Eu(t){if(50<Vl)throw Vl=0,bp=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ga={};function Q4(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,a,l){return new Q4(t,i,a,l)}function gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xr(t,i){var a=t.alternate;return a===null?(a=jn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function S0(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function wu(t,i,a,l,f,m){var b=0;if(l=t,typeof t=="function")gf(t)&&(b=1);else if(typeof t=="string")b=WE(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case j:return t=jn(31,a,i,f),t.elementType=j,t.lanes=m,t;case N:return Hs(a.children,f,m,i);case U:b=8,f|=24;break;case M:return t=jn(12,a,i,f|2),t.elementType=M,t.lanes=m,t;case ee:return t=jn(13,a,i,f),t.elementType=ee,t.lanes=m,t;case ne:return t=jn(19,a,i,f),t.elementType=ne,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:case q:b=10;break e;case B:b=9;break e;case X:b=11;break e;case k:b=14;break e;case C:b=16,l=null;break e}b=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=jn(b,a,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Hs(t,i,a,l){return t=jn(7,t,l,i),t.lanes=a,t}function yf(t,i,a){return t=jn(6,t,null,i),t.lanes=a,t}function vf(t,i,a){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Ya=[],$a=0,Tu=null,Su=0,Yn=[],$n=0,Gs=null,Zr=1,Jr="";function Ys(t,i){Ya[$a++]=Su,Ya[$a++]=Tu,Tu=t,Su=i}function A0(t,i,a){Yn[$n++]=Zr,Yn[$n++]=Jr,Yn[$n++]=Gs,Gs=t;var l=Zr;t=Jr;var f=32-sn(l)-1;l&=~(1<<f),a+=1;var m=32-sn(i)+f;if(30<m){var b=f-f%5;m=(l&(1<<b)-1).toString(32),l>>=b,f-=b,Zr=1<<32-sn(i)+f|a<<f|l,Jr=m+t}else Zr=1<<m|a<<f|l,Jr=t}function xf(t){t.return!==null&&(Ys(t,1),A0(t,1,0))}function _f(t){for(;t===Tu;)Tu=Ya[--$a],Ya[$a]=null,Su=Ya[--$a],Ya[$a]=null;for(;t===Gs;)Gs=Yn[--$n],Yn[$n]=null,Jr=Yn[--$n],Yn[$n]=null,Zr=Yn[--$n],Yn[$n]=null}var mn=null,bt=null,Je=!1,$s=null,Tr=!1,bf=Error(s(519));function Qs(t){var i=Error(s(418,""));throw gl(Hn(i,t)),bf}function N0(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[Lt]=t,i[Ct]=l,a){case"dialog":Be("cancel",i),Be("close",i);break;case"iframe":case"object":case"embed":Be("load",i);break;case"video":case"audio":for(a=0;a<zl.length;a++)Be(zl[a],i);break;case"source":Be("error",i);break;case"img":case"image":case"link":Be("error",i),Be("load",i);break;case"details":Be("toggle",i);break;case"input":Be("invalid",i),Ds(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ja(i);break;case"select":Be("invalid",i);break;case"textarea":Be("invalid",i),Os(i,l.value,l.defaultValue,l.children),ja(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||H1(i.textContent,a)?(l.popover!=null&&(Be("beforetoggle",i),Be("toggle",i)),l.onScroll!=null&&Be("scroll",i),l.onScrollEnd!=null&&Be("scrollend",i),l.onClick!=null&&(i.onclick=sd),i=!0):i=!1,i||Qs(t)}function R0(t){for(mn=t.return;mn;)switch(mn.tag){case 5:case 13:Tr=!1;return;case 27:case 3:Tr=!0;return;default:mn=mn.return}}function pl(t){if(t!==mn)return!1;if(!Je)return R0(t),Je=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lp(t.type,t.memoizedProps)),a=!a),a&&bt&&Qs(t),R0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){bt=or(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}bt=null}}else i===27?(i=bt,Ki(t.type)?(t=Bp,Bp=null,bt=t):bt=i):bt=mn?or(t.stateNode.nextSibling):null;return!0}function ml(){bt=mn=null,Je=!1}function C0(){var t=$s;return t!==null&&(En===null?En=t:En.push.apply(En,t),$s=null),t}function gl(t){$s===null?$s=[t]:$s.push(t)}var Ef=oe(null),Ks=null,ei=null;function ki(t,i,a){de(Ef,i._currentValue),i._currentValue=a}function ti(t){t._currentValue=Ef.current,he(Ef)}function wf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Tf(t,i,a,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var V=0;V<i.length;V++)if(S.context===i[V]){m.lanes|=a,S=m.alternate,S!==null&&(S.lanes|=a),wf(m.return,a,t),l||(b=null);break e}m=S.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(s(341));b.lanes|=a,m=b.alternate,m!==null&&(m.lanes|=a),wf(b,a,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function yl(t,i,a,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var S=f.type;In(f.pendingProps.value,b.value)||(t!==null?t.push(S):t=[S])}}else if(f===we.current){if(b=f.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Yl):t=[Yl])}f=f.return}t!==null&&Tf(i,t,a,l),i.flags|=262144}function Au(t){for(t=t.firstContext;t!==null;){if(!In(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ws(t){Ks=t,ei=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function an(t){return I0(Ks,t)}function Nu(t,i){return Ks===null&&Ws(t),I0(t,i)}function I0(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ei===null){if(t===null)throw Error(s(308));ei=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ei=ei.next=i;return a}var K4=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},W4=r.unstable_scheduleCallback,X4=r.unstable_NormalPriority,zt={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new K4,data:new Map,refCount:0}}function vl(t){t.refCount--,t.refCount===0&&W4(X4,function(){t.controller.abort()})}var xl=null,Af=0,Qa=0,Ka=null;function Z4(t,i){if(xl===null){var a=xl=[];Af=0,Qa=Rp(),Ka={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Af++,i.then(j0,j0),i}function j0(){if(--Af===0&&xl!==null){Ka!==null&&(Ka.status="fulfilled");var t=xl;xl=null,Qa=0,Ka=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function J4(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var D0=Y.S;Y.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Z4(t,i),D0!==null&&D0(t,i)};var Xs=oe(null);function Nf(){var t=Xs.current;return t!==null?t:dt.pooledCache}function Ru(t,i){i===null?de(Xs,Xs.current):de(Xs,i.pool)}function O0(){var t=Nf();return t===null?null:{parent:zt._currentValue,pool:t}}var _l=Error(s(460)),k0=Error(s(474)),Cu=Error(s(542)),Rf={then:function(){}};function M0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Iu(){}function P0(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Iu,Iu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,V0(t),t;default:if(typeof i.status=="string")i.then(Iu,Iu);else{if(t=dt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,V0(t),t}throw bl=i,_l}}var bl=null;function L0(){if(bl===null)throw Error(s(459));var t=bl;return bl=null,t}function V0(t){if(t===_l||t===Cu)throw Error(s(483))}var Mi=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function If(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Li(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(rt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Eu(t),T0(t,null,a),i}return bu(t,l,i,a),Eu(t)}function El(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Wo(t,a)}}function jf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Df=!1;function wl(){if(Df){var t=Ka;if(t!==null)throw t}}function Tl(t,i,a,l){Df=!1;var f=t.updateQueue;Mi=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var V=S,Q=V.next;V.next=null,b===null?m=Q:b.next=Q,b=V;var ie=t.alternate;ie!==null&&(ie=ie.updateQueue,S=ie.lastBaseUpdate,S!==b&&(S===null?ie.firstBaseUpdate=Q:S.next=Q,ie.lastBaseUpdate=V))}if(m!==null){var le=f.baseState;b=0,ie=Q=V=null,S=m;do{var K=S.lane&-536870913,W=K!==S.lane;if(W?(Ke&K)===K:(l&K)===K){K!==0&&K===Qa&&(Df=!0),ie!==null&&(ie=ie.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var De=t,Ne=S;K=i;var lt=a;switch(Ne.tag){case 1:if(De=Ne.payload,typeof De=="function"){le=De.call(lt,le,K);break e}le=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=Ne.payload,K=typeof De=="function"?De.call(lt,le,K):De,K==null)break e;le=x({},le,K);break e;case 2:Mi=!0}}K=S.callback,K!==null&&(t.flags|=64,W&&(t.flags|=8192),W=f.callbacks,W===null?f.callbacks=[K]:W.push(K))}else W={lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ie===null?(Q=ie=W,V=le):ie=ie.next=W,b|=K;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;W=S,S=W.next,W.next=null,f.lastBaseUpdate=W,f.shared.pending=null}}while(!0);ie===null&&(V=le),f.baseState=V,f.firstBaseUpdate=Q,f.lastBaseUpdate=ie,m===null&&(f.shared.lanes=0),Gi|=b,t.lanes=b,t.memoizedState=le}}function U0(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function z0(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)U0(a[t],i)}var Wa=oe(null),ju=oe(0);function B0(t,i){t=li,de(ju,t),de(Wa,i),li=t|i.baseLanes}function Of(){de(ju,li),de(Wa,Wa.current)}function kf(){li=ju.current,he(Wa),he(ju)}var Vi=0,Ve=null,at=null,jt=null,Du=!1,Xa=!1,Zs=!1,Ou=0,Sl=0,Za=null,eE=0;function St(){throw Error(s(321))}function Mf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!In(t[a],i[a]))return!1;return!0}function Pf(t,i,a,l,f,m){return Vi=m,Ve=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Y.H=t===null||t.memoizedState===null?Ty:Sy,Zs=!1,m=a(l,f),Zs=!1,Xa&&(m=q0(i,a,l,f)),F0(t),m}function F0(t){Y.H=Uu;var i=at!==null&&at.next!==null;if(Vi=0,jt=at=Ve=null,Du=!1,Sl=0,Za=null,i)throw Error(s(300));t===null||Gt||(t=t.dependencies,t!==null&&Au(t)&&(Gt=!0))}function q0(t,i,a,l){Ve=t;var f=0;do{if(Xa&&(Za=null),Sl=0,Xa=!1,25<=f)throw Error(s(301));if(f+=1,jt=at=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=oE,m=i(a,l)}while(Xa);return m}function tE(){var t=Y.H,i=t.useState()[0];return i=typeof i.then=="function"?Al(i):i,t=t.useState()[0],(at!==null?at.memoizedState:null)!==t&&(Ve.flags|=1024),i}function Lf(){var t=Ou!==0;return Ou=0,t}function Vf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Uf(t){if(Du){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Du=!1}Vi=0,jt=at=Ve=null,Xa=!1,Sl=Ou=0,Za=null}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ve.memoizedState=jt=t:jt=jt.next=t,jt}function Dt(){if(at===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var i=jt===null?Ve.memoizedState:jt.next;if(i!==null)jt=i,at=t;else{if(t===null)throw Ve.alternate===null?Error(s(467)):Error(s(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},jt===null?Ve.memoizedState=jt=t:jt=jt.next=t}return jt}function zf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Al(t){var i=Sl;return Sl+=1,Za===null&&(Za=[]),t=P0(Za,t,i),i=Ve,(jt===null?i.memoizedState:jt.next)===null&&(i=i.alternate,Y.H=i===null||i.memoizedState===null?Ty:Sy),t}function ku(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Al(t);if(t.$$typeof===q)return an(t)}throw Error(s(438,String(t)))}function Bf(t){var i=null,a=Ve.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ve.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=zf(),Ve.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=O;return i.index++,a}function ni(t,i){return typeof i=="function"?i(t):i}function Mu(t){var i=Dt();return Ff(i,at,t)}function Ff(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var S=b=null,V=null,Q=i,ie=!1;do{var le=Q.lane&-536870913;if(le!==Q.lane?(Ke&le)===le:(Vi&le)===le){var K=Q.revertLane;if(K===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),le===Qa&&(ie=!0);else if((Vi&K)===K){Q=Q.next,K===Qa&&(ie=!0);continue}else le={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},V===null?(S=V=le,b=m):V=V.next=le,Ve.lanes|=K,Gi|=K;le=Q.action,Zs&&a(m,le),m=Q.hasEagerState?Q.eagerState:a(m,le)}else K={lane:le,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},V===null?(S=V=K,b=m):V=V.next=K,Ve.lanes|=le,Gi|=le;Q=Q.next}while(Q!==null&&Q!==i);if(V===null?b=m:V.next=S,!In(m,t.memoizedState)&&(Gt=!0,ie&&(a=Ka,a!==null)))throw a;t.memoizedState=m,t.baseState=b,t.baseQueue=V,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function qf(t){var i=Dt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var b=f=f.next;do m=t(m,b.action),b=b.next;while(b!==f);In(m,i.memoizedState)||(Gt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function H0(t,i,a){var l=Ve,f=Dt(),m=Je;if(m){if(a===void 0)throw Error(s(407));a=a()}else a=i();var b=!In((at||f).memoizedState,a);b&&(f.memoizedState=a,Gt=!0),f=f.queue;var S=$0.bind(null,l,f,t);if(Nl(2048,8,S,[t]),f.getSnapshot!==i||b||jt!==null&&jt.memoizedState.tag&1){if(l.flags|=2048,Ja(9,Pu(),Y0.bind(null,l,f,a,i),null),dt===null)throw Error(s(349));m||(Vi&124)!==0||G0(l,i,a)}return a}function G0(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ve.updateQueue,i===null?(i=zf(),Ve.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Y0(t,i,a,l){i.value=a,i.getSnapshot=l,Q0(i)&&K0(t)}function $0(t,i,a){return a(function(){Q0(i)&&K0(t)})}function Q0(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!In(t,a)}catch{return!0}}function K0(t){var i=Ha(t,2);i!==null&&Pn(i,t,2)}function Hf(t){var i=_n();if(typeof t=="function"){var a=t;if(t=a(),Zs){Rn(!0);try{a()}finally{Rn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:t},i}function W0(t,i,a,l){return t.baseState=a,Ff(t,at,typeof l=="function"?l:ni)}function nE(t,i,a,l,f){if(Vu(t))throw Error(s(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};Y.T!==null?a(!0):m.isTransition=!1,l(m),a=i.pending,a===null?(m.next=i.pending=m,X0(i,m)):(m.next=a.next,i.pending=a.next=m)}}function X0(t,i){var a=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=Y.T,b={};Y.T=b;try{var S=a(f,l),V=Y.S;V!==null&&V(b,S),Z0(t,i,S)}catch(Q){Gf(t,i,Q)}finally{Y.T=m}}else try{m=a(f,l),Z0(t,i,m)}catch(Q){Gf(t,i,Q)}}function Z0(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){J0(t,i,l)},function(l){return Gf(t,i,l)}):J0(t,i,a)}function J0(t,i,a){i.status="fulfilled",i.value=a,ey(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,X0(t,a)))}function Gf(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,ey(i),i=i.next;while(i!==l)}t.action=null}function ey(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ty(t,i){return i}function ny(t,i){if(Je){var a=dt.formState;if(a!==null){e:{var l=Ve;if(Je){if(bt){t:{for(var f=bt,m=Tr;f.nodeType!==8;){if(!m){f=null;break t}if(f=or(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){bt=or(f.nextSibling),l=f.data==="F!";break e}}Qs(l)}l=!1}l&&(i=a[0])}}return a=_n(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ty,lastRenderedState:i},a.queue=l,a=by.bind(null,Ve,l),l.dispatch=a,l=Hf(!1),m=Wf.bind(null,Ve,!1,l.queue),l=_n(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,a=nE.bind(null,Ve,f,m,a),f.dispatch=a,l.memoizedState=t,[i,a,!1]}function ry(t){var i=Dt();return iy(i,at,t)}function iy(t,i,a){if(i=Ff(t,i,ty)[0],t=Mu(ni)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Al(i)}catch(b){throw b===_l?Cu:b}else l=i;i=Dt();var f=i.queue,m=f.dispatch;return a!==i.memoizedState&&(Ve.flags|=2048,Ja(9,Pu(),rE.bind(null,f,a),null)),[l,m,t]}function rE(t,i){t.action=i}function sy(t){var i=Dt(),a=at;if(a!==null)return iy(i,a,t);Dt(),i=i.memoizedState,a=Dt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Ja(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Ve.updateQueue,i===null&&(i=zf(),Ve.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function Pu(){return{destroy:void 0,resource:void 0}}function ay(){return Dt().memoizedState}function Lu(t,i,a,l){var f=_n();l=l===void 0?null:l,Ve.flags|=t,f.memoizedState=Ja(1|i,Pu(),a,l)}function Nl(t,i,a,l){var f=Dt();l=l===void 0?null:l;var m=f.memoizedState.inst;at!==null&&l!==null&&Mf(l,at.memoizedState.deps)?f.memoizedState=Ja(i,m,a,l):(Ve.flags|=t,f.memoizedState=Ja(1|i,m,a,l))}function oy(t,i){Lu(8390656,8,t,i)}function ly(t,i){Nl(2048,8,t,i)}function cy(t,i){return Nl(4,2,t,i)}function uy(t,i){return Nl(4,4,t,i)}function dy(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function hy(t,i,a){a=a!=null?a.concat([t]):null,Nl(4,4,dy.bind(null,i,t),a)}function Yf(){}function fy(t,i){var a=Dt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Mf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function py(t,i){var a=Dt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Mf(i,l[1]))return l[0];if(l=t(),Zs){Rn(!0);try{t()}finally{Rn(!1)}}return a.memoizedState=[l,i],l}function $f(t,i,a){return a===void 0||(Vi&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=y1(),Ve.lanes|=t,Gi|=t,a)}function my(t,i,a,l){return In(a,i)?a:Wa.current!==null?(t=$f(t,a,l),In(t,i)||(Gt=!0),t):(Vi&42)===0?(Gt=!0,t.memoizedState=a):(t=y1(),Ve.lanes|=t,Gi|=t,i)}function gy(t,i,a,l,f){var m=ue.p;ue.p=m!==0&&8>m?m:8;var b=Y.T,S={};Y.T=S,Wf(t,!1,i,a);try{var V=f(),Q=Y.S;if(Q!==null&&Q(S,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ie=J4(V,l);Rl(t,i,ie,Mn(t))}else Rl(t,i,l,Mn(t))}catch(le){Rl(t,i,{then:function(){},status:"rejected",reason:le},Mn())}finally{ue.p=m,Y.T=b}}function iE(){}function Qf(t,i,a,l){if(t.tag!==5)throw Error(s(476));var f=yy(t).queue;gy(t,f,i,ye,a===null?iE:function(){return vy(t),a(l)})}function yy(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:ye},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function vy(t){var i=yy(t).next.queue;Rl(t,i,{},Mn())}function Kf(){return an(Yl)}function xy(){return Dt().memoizedState}function _y(){return Dt().memoizedState}function sE(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=Mn();t=Pi(a);var l=Li(i,t,a);l!==null&&(Pn(l,i,a),El(l,i,a)),i={cache:Sf()},t.payload=i;return}i=i.return}}function aE(t,i,a){var l=Mn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Vu(t)?Ey(i,a):(a=mf(t,i,a,l),a!==null&&(Pn(a,t,l),wy(a,i,l)))}function by(t,i,a){var l=Mn();Rl(t,i,a,l)}function Rl(t,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vu(t))Ey(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,S=m(b,a);if(f.hasEagerState=!0,f.eagerState=S,In(S,b))return bu(t,i,f,0),dt===null&&_u(),!1}catch{}finally{}if(a=mf(t,i,f,l),a!==null)return Pn(a,t,l),wy(a,i,l),!0}return!1}function Wf(t,i,a,l){if(l={lane:2,revertLane:Rp(),action:l,hasEagerState:!1,eagerState:null,next:null},Vu(t)){if(i)throw Error(s(479))}else i=mf(t,a,l,2),i!==null&&Pn(i,t,2)}function Vu(t){var i=t.alternate;return t===Ve||i!==null&&i===Ve}function Ey(t,i){Xa=Du=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function wy(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Wo(t,a)}}var Uu={readContext:an,use:ku,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St},Ty={readContext:an,use:ku,useCallback:function(t,i){return _n().memoizedState=[t,i===void 0?null:i],t},useContext:an,useEffect:oy,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Lu(4194308,4,dy.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Lu(4194308,4,t,i)},useInsertionEffect:function(t,i){Lu(4,2,t,i)},useMemo:function(t,i){var a=_n();i=i===void 0?null:i;var l=t();if(Zs){Rn(!0);try{t()}finally{Rn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=_n();if(a!==void 0){var f=a(i);if(Zs){Rn(!0);try{a(i)}finally{Rn(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=aE.bind(null,Ve,t),[l.memoizedState,t]},useRef:function(t){var i=_n();return t={current:t},i.memoizedState=t},useState:function(t){t=Hf(t);var i=t.queue,a=by.bind(null,Ve,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Yf,useDeferredValue:function(t,i){var a=_n();return $f(a,t,i)},useTransition:function(){var t=Hf(!1);return t=gy.bind(null,Ve,t.queue,!0,!1),_n().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Ve,f=_n();if(Je){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),dt===null)throw Error(s(349));(Ke&124)!==0||G0(l,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,oy($0.bind(null,l,m,t),[t]),l.flags|=2048,Ja(9,Pu(),Y0.bind(null,l,m,a,i),null),a},useId:function(){var t=_n(),i=dt.identifierPrefix;if(Je){var a=Jr,l=Zr;a=(l&~(1<<32-sn(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Ou++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=eE++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Kf,useFormState:ny,useActionState:ny,useOptimistic:function(t){var i=_n();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Wf.bind(null,Ve,!0,a),a.dispatch=i,[t,i]},useMemoCache:Bf,useCacheRefresh:function(){return _n().memoizedState=sE.bind(null,Ve)}},Sy={readContext:an,use:ku,useCallback:fy,useContext:an,useEffect:ly,useImperativeHandle:hy,useInsertionEffect:cy,useLayoutEffect:uy,useMemo:py,useReducer:Mu,useRef:ay,useState:function(){return Mu(ni)},useDebugValue:Yf,useDeferredValue:function(t,i){var a=Dt();return my(a,at.memoizedState,t,i)},useTransition:function(){var t=Mu(ni)[0],i=Dt().memoizedState;return[typeof t=="boolean"?t:Al(t),i]},useSyncExternalStore:H0,useId:xy,useHostTransitionStatus:Kf,useFormState:ry,useActionState:ry,useOptimistic:function(t,i){var a=Dt();return W0(a,at,t,i)},useMemoCache:Bf,useCacheRefresh:_y},oE={readContext:an,use:ku,useCallback:fy,useContext:an,useEffect:ly,useImperativeHandle:hy,useInsertionEffect:cy,useLayoutEffect:uy,useMemo:py,useReducer:qf,useRef:ay,useState:function(){return qf(ni)},useDebugValue:Yf,useDeferredValue:function(t,i){var a=Dt();return at===null?$f(a,t,i):my(a,at.memoizedState,t,i)},useTransition:function(){var t=qf(ni)[0],i=Dt().memoizedState;return[typeof t=="boolean"?t:Al(t),i]},useSyncExternalStore:H0,useId:xy,useHostTransitionStatus:Kf,useFormState:sy,useActionState:sy,useOptimistic:function(t,i){var a=Dt();return at!==null?W0(a,at,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bf,useCacheRefresh:_y},eo=null,Cl=0;function zu(t){var i=Cl;return Cl+=1,eo===null&&(eo=[]),P0(eo,t,i)}function Il(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Bu(t,i){throw i.$$typeof===E?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Ay(t){var i=t._init;return i(t._payload)}function Ny(t){function i(H,F){if(t){var $=H.deletions;$===null?(H.deletions=[F],H.flags|=16):$.push(F)}}function a(H,F){if(!t)return null;for(;F!==null;)i(H,F),F=F.sibling;return null}function l(H){for(var F=new Map;H!==null;)H.key!==null?F.set(H.key,H):F.set(H.index,H),H=H.sibling;return F}function f(H,F){return H=Xr(H,F),H.index=0,H.sibling=null,H}function m(H,F,$){return H.index=$,t?($=H.alternate,$!==null?($=$.index,$<F?(H.flags|=67108866,F):$):(H.flags|=67108866,F)):(H.flags|=1048576,F)}function b(H){return t&&H.alternate===null&&(H.flags|=67108866),H}function S(H,F,$,ae){return F===null||F.tag!==6?(F=yf($,H.mode,ae),F.return=H,F):(F=f(F,$),F.return=H,F)}function V(H,F,$,ae){var be=$.type;return be===N?ie(H,F,$.props.children,ae,$.key):F!==null&&(F.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===C&&Ay(be)===F.type)?(F=f(F,$.props),Il(F,$),F.return=H,F):(F=wu($.type,$.key,$.props,null,H.mode,ae),Il(F,$),F.return=H,F)}function Q(H,F,$,ae){return F===null||F.tag!==4||F.stateNode.containerInfo!==$.containerInfo||F.stateNode.implementation!==$.implementation?(F=vf($,H.mode,ae),F.return=H,F):(F=f(F,$.children||[]),F.return=H,F)}function ie(H,F,$,ae,be){return F===null||F.tag!==7?(F=Hs($,H.mode,ae,be),F.return=H,F):(F=f(F,$),F.return=H,F)}function le(H,F,$){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=yf(""+F,H.mode,$),F.return=H,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case w:return $=wu(F.type,F.key,F.props,null,H.mode,$),Il($,F),$.return=H,$;case I:return F=vf(F,H.mode,$),F.return=H,F;case C:var ae=F._init;return F=ae(F._payload),le(H,F,$)}if(xe(F)||A(F))return F=Hs(F,H.mode,$,null),F.return=H,F;if(typeof F.then=="function")return le(H,zu(F),$);if(F.$$typeof===q)return le(H,Nu(H,F),$);Bu(H,F)}return null}function K(H,F,$,ae){var be=F!==null?F.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return be!==null?null:S(H,F,""+$,ae);if(typeof $=="object"&&$!==null){switch($.$$typeof){case w:return $.key===be?V(H,F,$,ae):null;case I:return $.key===be?Q(H,F,$,ae):null;case C:return be=$._init,$=be($._payload),K(H,F,$,ae)}if(xe($)||A($))return be!==null?null:ie(H,F,$,ae,null);if(typeof $.then=="function")return K(H,F,zu($),ae);if($.$$typeof===q)return K(H,F,Nu(H,$),ae);Bu(H,$)}return null}function W(H,F,$,ae,be){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return H=H.get($)||null,S(F,H,""+ae,be);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case w:return H=H.get(ae.key===null?$:ae.key)||null,V(F,H,ae,be);case I:return H=H.get(ae.key===null?$:ae.key)||null,Q(F,H,ae,be);case C:var Ue=ae._init;return ae=Ue(ae._payload),W(H,F,$,ae,be)}if(xe(ae)||A(ae))return H=H.get($)||null,ie(F,H,ae,be,null);if(typeof ae.then=="function")return W(H,F,$,zu(ae),be);if(ae.$$typeof===q)return W(H,F,$,Nu(F,ae),be);Bu(F,ae)}return null}function De(H,F,$,ae){for(var be=null,Ue=null,Te=F,Ce=F=0,$t=null;Te!==null&&Ce<$.length;Ce++){Te.index>Ce?($t=Te,Te=null):$t=Te.sibling;var Ze=K(H,Te,$[Ce],ae);if(Ze===null){Te===null&&(Te=$t);break}t&&Te&&Ze.alternate===null&&i(H,Te),F=m(Ze,F,Ce),Ue===null?be=Ze:Ue.sibling=Ze,Ue=Ze,Te=$t}if(Ce===$.length)return a(H,Te),Je&&Ys(H,Ce),be;if(Te===null){for(;Ce<$.length;Ce++)Te=le(H,$[Ce],ae),Te!==null&&(F=m(Te,F,Ce),Ue===null?be=Te:Ue.sibling=Te,Ue=Te);return Je&&Ys(H,Ce),be}for(Te=l(Te);Ce<$.length;Ce++)$t=W(Te,H,Ce,$[Ce],ae),$t!==null&&(t&&$t.alternate!==null&&Te.delete($t.key===null?Ce:$t.key),F=m($t,F,Ce),Ue===null?be=$t:Ue.sibling=$t,Ue=$t);return t&&Te.forEach(function(es){return i(H,es)}),Je&&Ys(H,Ce),be}function Ne(H,F,$,ae){if($==null)throw Error(s(151));for(var be=null,Ue=null,Te=F,Ce=F=0,$t=null,Ze=$.next();Te!==null&&!Ze.done;Ce++,Ze=$.next()){Te.index>Ce?($t=Te,Te=null):$t=Te.sibling;var es=K(H,Te,Ze.value,ae);if(es===null){Te===null&&(Te=$t);break}t&&Te&&es.alternate===null&&i(H,Te),F=m(es,F,Ce),Ue===null?be=es:Ue.sibling=es,Ue=es,Te=$t}if(Ze.done)return a(H,Te),Je&&Ys(H,Ce),be;if(Te===null){for(;!Ze.done;Ce++,Ze=$.next())Ze=le(H,Ze.value,ae),Ze!==null&&(F=m(Ze,F,Ce),Ue===null?be=Ze:Ue.sibling=Ze,Ue=Ze);return Je&&Ys(H,Ce),be}for(Te=l(Te);!Ze.done;Ce++,Ze=$.next())Ze=W(Te,H,Ce,Ze.value,ae),Ze!==null&&(t&&Ze.alternate!==null&&Te.delete(Ze.key===null?Ce:Ze.key),F=m(Ze,F,Ce),Ue===null?be=Ze:Ue.sibling=Ze,Ue=Ze);return t&&Te.forEach(function(lw){return i(H,lw)}),Je&&Ys(H,Ce),be}function lt(H,F,$,ae){if(typeof $=="object"&&$!==null&&$.type===N&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case w:e:{for(var be=$.key;F!==null;){if(F.key===be){if(be=$.type,be===N){if(F.tag===7){a(H,F.sibling),ae=f(F,$.props.children),ae.return=H,H=ae;break e}}else if(F.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===C&&Ay(be)===F.type){a(H,F.sibling),ae=f(F,$.props),Il(ae,$),ae.return=H,H=ae;break e}a(H,F);break}else i(H,F);F=F.sibling}$.type===N?(ae=Hs($.props.children,H.mode,ae,$.key),ae.return=H,H=ae):(ae=wu($.type,$.key,$.props,null,H.mode,ae),Il(ae,$),ae.return=H,H=ae)}return b(H);case I:e:{for(be=$.key;F!==null;){if(F.key===be)if(F.tag===4&&F.stateNode.containerInfo===$.containerInfo&&F.stateNode.implementation===$.implementation){a(H,F.sibling),ae=f(F,$.children||[]),ae.return=H,H=ae;break e}else{a(H,F);break}else i(H,F);F=F.sibling}ae=vf($,H.mode,ae),ae.return=H,H=ae}return b(H);case C:return be=$._init,$=be($._payload),lt(H,F,$,ae)}if(xe($))return De(H,F,$,ae);if(A($)){if(be=A($),typeof be!="function")throw Error(s(150));return $=be.call($),Ne(H,F,$,ae)}if(typeof $.then=="function")return lt(H,F,zu($),ae);if($.$$typeof===q)return lt(H,F,Nu(H,$),ae);Bu(H,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,F!==null&&F.tag===6?(a(H,F.sibling),ae=f(F,$),ae.return=H,H=ae):(a(H,F),ae=yf($,H.mode,ae),ae.return=H,H=ae),b(H)):a(H,F)}return function(H,F,$,ae){try{Cl=0;var be=lt(H,F,$,ae);return eo=null,be}catch(Te){if(Te===_l||Te===Cu)throw Te;var Ue=jn(29,Te,null,H.mode);return Ue.lanes=ae,Ue.return=H,Ue}finally{}}}var to=Ny(!0),Ry=Ny(!1),Qn=oe(null),Sr=null;function Ui(t){var i=t.alternate;de(Bt,Bt.current&1),de(Qn,t),Sr===null&&(i===null||Wa.current!==null||i.memoizedState!==null)&&(Sr=t)}function Cy(t){if(t.tag===22){if(de(Bt,Bt.current),de(Qn,t),Sr===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Sr=t)}}else zi()}function zi(){de(Bt,Bt.current),de(Qn,Qn.current)}function ri(t){he(Qn),Sr===t&&(Sr=null),he(Bt)}var Bt=oe(0);function Fu(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||zp(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Xf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:x({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zf={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Mn(),f=Pi(l);f.payload=i,a!=null&&(f.callback=a),i=Li(t,f,l),i!==null&&(Pn(i,t,l),El(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Mn(),f=Pi(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Li(t,f,l),i!==null&&(Pn(i,t,l),El(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Mn(),l=Pi(a);l.tag=2,i!=null&&(l.callback=i),i=Li(t,l,a),i!==null&&(Pn(i,t,a),El(i,t,a))}};function Iy(t,i,a,l,f,m,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,b):i.prototype&&i.prototype.isPureReactComponent?!hl(a,l)||!hl(f,m):!0}function jy(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Zf.enqueueReplaceState(i,i.state,null)}function Js(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=x({},a));for(var f in t)a[f]===void 0&&(a[f]=t[f])}return a}var qu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Dy(t){qu(t)}function Oy(t){console.error(t)}function ky(t){qu(t)}function Hu(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function My(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Jf(t,i,a){return a=Pi(a),a.tag=3,a.payload={element:null},a.callback=function(){Hu(t,i)},a}function Py(t){return t=Pi(t),t.tag=3,t}function Ly(t,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){My(i,a,l)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){My(i,a,l),typeof f!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var S=l.stack;this.componentDidCatch(l.value,{componentStack:S!==null?S:""})})}function lE(t,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&yl(i,a,f,!0),a=Qn.current,a!==null){switch(a.tag){case 13:return Sr===null?wp():a.alternate===null&&Et===0&&(Et=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Rf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Sp(t,l,f)),!1;case 22:return a.flags|=65536,l===Rf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Sp(t,l,f)),!1}throw Error(s(435,a.tag))}return Sp(t,l,f),wp(),!1}if(Je)return i=Qn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==bf&&(t=Error(s(422),{cause:l}),gl(Hn(t,a)))):(l!==bf&&(i=Error(s(423),{cause:l}),gl(Hn(i,a))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Hn(l,a),f=Jf(t.stateNode,l,f),jf(t,f),Et!==4&&(Et=2)),!1;var m=Error(s(520),{cause:l});if(m=Hn(m,a),Ll===null?Ll=[m]:Ll.push(m),Et!==4&&(Et=2),i===null)return!0;l=Hn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=f&-f,a.lanes|=t,t=Jf(a.stateNode,l,t),jf(a,t),!1;case 1:if(i=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Yi===null||!Yi.has(m))))return a.flags|=65536,f&=-f,a.lanes|=f,f=Py(f),Ly(f,t,a,l),jf(a,f),!1}a=a.return}while(a!==null);return!1}var Vy=Error(s(461)),Gt=!1;function Zt(t,i,a,l){i.child=t===null?Ry(i,null,a,l):to(i,t.child,a,l)}function Uy(t,i,a,l,f){a=a.render;var m=i.ref;if("ref"in l){var b={};for(var S in l)S!=="ref"&&(b[S]=l[S])}else b=l;return Ws(i),l=Pf(t,i,a,b,m,f),S=Lf(),t!==null&&!Gt?(Vf(t,i,f),ii(t,i,f)):(Je&&S&&xf(i),i.flags|=1,Zt(t,i,l,f),i.child)}function zy(t,i,a,l,f){if(t===null){var m=a.type;return typeof m=="function"&&!gf(m)&&m.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=m,By(t,i,m,l,f)):(t=wu(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!op(t,f)){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:hl,a(b,l)&&t.ref===i.ref)return ii(t,i,f)}return i.flags|=1,t=Xr(m,l),t.ref=i.ref,t.return=i,i.child=t}function By(t,i,a,l,f){if(t!==null){var m=t.memoizedProps;if(hl(m,l)&&t.ref===i.ref)if(Gt=!1,i.pendingProps=l=m,op(t,f))(t.flags&131072)!==0&&(Gt=!0);else return i.lanes=t.lanes,ii(t,i,f)}return ep(t,i,a,l,f)}function Fy(t,i,a){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|a:a,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return qy(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ru(i,m!==null?m.cachePool:null),m!==null?B0(i,m):Of(),Cy(i);else return i.lanes=i.childLanes=536870912,qy(t,i,m!==null?m.baseLanes|a:a,a)}else m!==null?(Ru(i,m.cachePool),B0(i,m),zi(),i.memoizedState=null):(t!==null&&Ru(i,null),Of(),zi());return Zt(t,i,f,a),i.child}function qy(t,i,a,l){var f=Nf();return f=f===null?null:{parent:zt._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ru(i,null),Of(),Cy(i),t!==null&&yl(t,i,l,!0),null}function Gu(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function ep(t,i,a,l,f){return Ws(i),a=Pf(t,i,a,l,void 0,f),l=Lf(),t!==null&&!Gt?(Vf(t,i,f),ii(t,i,f)):(Je&&l&&xf(i),i.flags|=1,Zt(t,i,a,f),i.child)}function Hy(t,i,a,l,f,m){return Ws(i),i.updateQueue=null,a=q0(i,l,a,f),F0(t),l=Lf(),t!==null&&!Gt?(Vf(t,i,m),ii(t,i,m)):(Je&&l&&xf(i),i.flags|=1,Zt(t,i,a,m),i.child)}function Gy(t,i,a,l,f){if(Ws(i),i.stateNode===null){var m=Ga,b=a.contextType;typeof b=="object"&&b!==null&&(m=an(b)),m=new a(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Zf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Cf(i),b=a.contextType,m.context=typeof b=="object"&&b!==null?an(b):Ga,m.state=i.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Xf(i,a,b,l),m.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Zf.enqueueReplaceState(m,m.state,null),Tl(i,l,m,f),wl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var S=i.memoizedProps,V=Js(a,S);m.props=V;var Q=m.context,ie=a.contextType;b=Ga,typeof ie=="object"&&ie!==null&&(b=an(ie));var le=a.getDerivedStateFromProps;ie=typeof le=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=i.pendingProps!==S,ie||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||Q!==b)&&jy(i,m,l,b),Mi=!1;var K=i.memoizedState;m.state=K,Tl(i,l,m,f),wl(),Q=i.memoizedState,S||K!==Q||Mi?(typeof le=="function"&&(Xf(i,a,le,l),Q=i.memoizedState),(V=Mi||Iy(i,a,V,l,K,Q,b))?(ie||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=Q),m.props=l,m.state=Q,m.context=b,l=V):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,If(t,i),b=i.memoizedProps,ie=Js(a,b),m.props=ie,le=i.pendingProps,K=m.context,Q=a.contextType,V=Ga,typeof Q=="object"&&Q!==null&&(V=an(Q)),S=a.getDerivedStateFromProps,(Q=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==le||K!==V)&&jy(i,m,l,V),Mi=!1,K=i.memoizedState,m.state=K,Tl(i,l,m,f),wl();var W=i.memoizedState;b!==le||K!==W||Mi||t!==null&&t.dependencies!==null&&Au(t.dependencies)?(typeof S=="function"&&(Xf(i,a,S,l),W=i.memoizedState),(ie=Mi||Iy(i,a,ie,l,K,W,V)||t!==null&&t.dependencies!==null&&Au(t.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,W,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,W,V)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===t.memoizedProps&&K===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&K===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=W),m.props=l,m.state=W,m.context=V,l=ie):(typeof m.componentDidUpdate!="function"||b===t.memoizedProps&&K===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&K===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,Gu(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=to(i,t.child,null,f),i.child=to(i,null,a,f)):Zt(t,i,a,f),i.memoizedState=m.state,t=i.child):t=ii(t,i,f),t}function Yy(t,i,a,l){return ml(),i.flags|=256,Zt(t,i,a,l),i.child}var tp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function np(t){return{baseLanes:t,cachePool:O0()}}function rp(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Kn),t}function $y(t,i,a){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=t!==null&&t.memoizedState===null?!1:(Bt.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(Je){if(f?Ui(i):zi(),Je){var S=bt,V;if(V=S){e:{for(V=S,S=Tr;V.nodeType!==8;){if(!S){S=null;break e}if(V=or(V.nextSibling),V===null){S=null;break e}}S=V}S!==null?(i.memoizedState={dehydrated:S,treeContext:Gs!==null?{id:Zr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},V=jn(18,null,null,0),V.stateNode=S,V.return=i,i.child=V,mn=i,bt=null,V=!0):V=!1}V||Qs(i)}if(S=i.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return zp(S)?i.lanes=32:i.lanes=536870912,null;ri(i)}return S=l.children,l=l.fallback,f?(zi(),f=i.mode,S=Yu({mode:"hidden",children:S},f),l=Hs(l,f,a,null),S.return=i,l.return=i,S.sibling=l,i.child=S,f=i.child,f.memoizedState=np(a),f.childLanes=rp(t,b,a),i.memoizedState=tp,l):(Ui(i),ip(i,S))}if(V=t.memoizedState,V!==null&&(S=V.dehydrated,S!==null)){if(m)i.flags&256?(Ui(i),i.flags&=-257,i=sp(t,i,a)):i.memoizedState!==null?(zi(),i.child=t.child,i.flags|=128,i=null):(zi(),f=l.fallback,S=i.mode,l=Yu({mode:"visible",children:l.children},S),f=Hs(f,S,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,to(i,t.child,null,a),l=i.child,l.memoizedState=np(a),l.childLanes=rp(t,b,a),i.memoizedState=tp,i=f);else if(Ui(i),zp(S)){if(b=S.nextSibling&&S.nextSibling.dataset,b)var Q=b.dgst;b=Q,l=Error(s(419)),l.stack="",l.digest=b,gl({value:l,source:null,stack:null}),i=sp(t,i,a)}else if(Gt||yl(t,i,a,!1),b=(a&t.childLanes)!==0,Gt||b){if(b=dt,b!==null&&(l=a&-a,l=(l&42)!==0?1:Ni(l),l=(l&(b.suspendedLanes|a))!==0?0:l,l!==0&&l!==V.retryLane))throw V.retryLane=l,Ha(t,l),Pn(b,t,l),Vy;S.data==="$?"||wp(),i=sp(t,i,a)}else S.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,bt=or(S.nextSibling),mn=i,Je=!0,$s=null,Tr=!1,t!==null&&(Yn[$n++]=Zr,Yn[$n++]=Jr,Yn[$n++]=Gs,Zr=t.id,Jr=t.overflow,Gs=i),i=ip(i,l.children),i.flags|=4096);return i}return f?(zi(),f=l.fallback,S=i.mode,V=t.child,Q=V.sibling,l=Xr(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,Q!==null?f=Xr(Q,f):(f=Hs(f,S,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,S=t.child.memoizedState,S===null?S=np(a):(V=S.cachePool,V!==null?(Q=zt._currentValue,V=V.parent!==Q?{parent:Q,pool:Q}:V):V=O0(),S={baseLanes:S.baseLanes|a,cachePool:V}),f.memoizedState=S,f.childLanes=rp(t,b,a),i.memoizedState=tp,l):(Ui(i),a=t.child,t=a.sibling,a=Xr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=a,i.memoizedState=null,a)}function ip(t,i){return i=Yu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Yu(t,i){return t=jn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function sp(t,i,a){return to(i,t.child,null,a),t=ip(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Qy(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),wf(t.return,i,a)}function ap(t,i,a,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=f)}function Ky(t,i,a){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Zt(t,i,l.children,a),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qy(t,a,i);else if(t.tag===19)Qy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(de(Bt,l),f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Fu(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),ap(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Fu(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}ap(i,!0,a,null,m);break;case"together":ap(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ii(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Gi|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(yl(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Xr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Xr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function op(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Au(t)))}function cE(t,i,a){switch(i.tag){case 3:ve(i,i.stateNode.containerInfo),ki(i,zt,t.memoizedState.cache),ml();break;case 27:case 5:pt(i);break;case 4:ve(i,i.stateNode.containerInfo);break;case 10:ki(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ui(i),i.flags|=128,null):(a&i.child.childLanes)!==0?$y(t,i,a):(Ui(i),t=ii(t,i,a),t!==null?t.sibling:null);Ui(i);break;case 19:var f=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(yl(t,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return Ky(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),de(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,Fy(t,i,a);case 24:ki(i,zt,t.memoizedState.cache)}return ii(t,i,a)}function Wy(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Gt=!0;else{if(!op(t,a)&&(i.flags&128)===0)return Gt=!1,cE(t,i,a);Gt=(t.flags&131072)!==0}else Gt=!1,Je&&(i.flags&1048576)!==0&&A0(i,Su,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")gf(l)?(t=Js(l,t),i.tag=1,i=Gy(null,i,l,t,a)):(i.tag=0,i=ep(null,i,l,t,a));else{if(l!=null){if(f=l.$$typeof,f===X){i.tag=11,i=Uy(null,i,l,t,a);break e}else if(f===k){i.tag=14,i=zy(null,i,l,t,a);break e}}throw i=re(l)||l,Error(s(306,i,""))}}return i;case 0:return ep(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=Js(l,i.pendingProps),Gy(t,i,l,f,a);case 3:e:{if(ve(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,If(t,i),Tl(i,l,null,a);var b=i.memoizedState;if(l=b.cache,ki(i,zt,l),l!==m.cache&&Tf(i,[zt],a,!0),wl(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Yy(t,i,l,a);break e}else if(l!==f){f=Hn(Error(s(424)),i),gl(f),i=Yy(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(bt=or(t.firstChild),mn=i,Je=!0,$s=null,Tr=!0,a=Ry(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ml(),l===f){i=ii(t,i,a);break e}Zt(t,i,l,a)}i=i.child}return i;case 26:return Gu(t,i),t===null?(a=ev(i.type,null,i.pendingProps,null))?i.memoizedState=a:Je||(a=i.type,t=i.pendingProps,l=ad(fe.current).createElement(a),l[Lt]=i,l[Ct]=t,en(l,a,t),Tt(l),i.stateNode=l):i.memoizedState=ev(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return pt(i),t===null&&Je&&(l=i.stateNode=X1(i.type,i.pendingProps,fe.current),mn=i,Tr=!0,f=bt,Ki(i.type)?(Bp=f,bt=or(l.firstChild)):bt=f),Zt(t,i,i.pendingProps.children,a),Gu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Je&&((f=l=bt)&&(l=LE(l,i.type,i.pendingProps,Tr),l!==null?(i.stateNode=l,mn=i,bt=or(l.firstChild),Tr=!1,f=!0):f=!1),f||Qs(i)),pt(i),f=i.type,m=i.pendingProps,b=t!==null?t.memoizedProps:null,l=m.children,Lp(f,m)?l=null:b!==null&&Lp(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=Pf(t,i,tE,null,null,a),Yl._currentValue=f),Gu(t,i),Zt(t,i,l,a),i.child;case 6:return t===null&&Je&&((t=a=bt)&&(a=VE(a,i.pendingProps,Tr),a!==null?(i.stateNode=a,mn=i,bt=null,t=!0):t=!1),t||Qs(i)),null;case 13:return $y(t,i,a);case 4:return ve(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=to(i,null,l,a):Zt(t,i,l,a),i.child;case 11:return Uy(t,i,i.type,i.pendingProps,a);case 7:return Zt(t,i,i.pendingProps,a),i.child;case 8:return Zt(t,i,i.pendingProps.children,a),i.child;case 12:return Zt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ki(i,i.type,l.value),Zt(t,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ws(i),f=an(f),l=l(f),i.flags|=1,Zt(t,i,l,a),i.child;case 14:return zy(t,i,i.type,i.pendingProps,a);case 15:return By(t,i,i.type,i.pendingProps,a);case 19:return Ky(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=Yu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Xr(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Fy(t,i,a);case 24:return Ws(i),l=an(zt),t===null?(f=Nf(),f===null&&(f=dt,m=Sf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=a),f=m),i.memoizedState={parent:l,cache:f},Cf(i),ki(i,zt,f)):((t.lanes&a)!==0&&(If(t,i),Tl(i,null,null,a),wl()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ki(i,zt,l)):(l=m.cache,ki(i,zt,l),l!==f.cache&&Tf(i,[zt],a,!0))),Zt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function si(t){t.flags|=4}function Xy(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!sv(i)){if(i=Qn.current,i!==null&&((Ke&4194048)===Ke?Sr!==null:(Ke&62914560)!==Ke&&(Ke&536870912)===0||i!==Sr))throw bl=Rf,k0;t.flags|=8192}}function $u(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Qo():536870912,t.lanes|=i,so|=i)}function jl(t,i){if(!Je)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function vt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function uE(t,i,a){var l=i.pendingProps;switch(_f(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(i),null;case 1:return vt(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ti(zt),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(pl(i)?si(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,C0())),vt(i),null;case 26:return a=i.memoizedState,t===null?(si(i),a!==null?(vt(i),Xy(i,a)):(vt(i),i.flags&=-16777217)):a?a!==t.memoizedState?(si(i),vt(i),Xy(i,a)):(vt(i),i.flags&=-16777217):(t.memoizedProps!==l&&si(i),vt(i),i.flags&=-16777217),null;case 27:Kt(i),a=fe.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&si(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return vt(i),null}t=J.current,pl(i)?N0(i):(t=X1(f,l,a),i.stateNode=t,si(i))}return vt(i),null;case 5:if(Kt(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&si(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return vt(i),null}if(t=J.current,pl(i))N0(i);else{switch(f=ad(fe.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}t[Lt]=i,t[Ct]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(en(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&si(i)}}return vt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&si(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=fe.current,pl(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,f=mn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[Lt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||H1(t.nodeValue,a)),t||Qs(i)}else t=ad(t).createTextNode(l),t[Lt]=i,i.stateNode=t}return vt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=pl(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Lt]=i}else ml(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vt(i),f=!1}else f=C0(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ri(i),i):(ri(i),null)}if(ri(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),$u(i,i.updateQueue),vt(i),null;case 4:return Ge(),t===null&&Dp(i.stateNode.containerInfo),vt(i),null;case 10:return ti(i.type),vt(i),null;case 19:if(he(Bt),f=i.memoizedState,f===null)return vt(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)jl(f,!1);else{if(Et!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Fu(t),m!==null){for(i.flags|=128,jl(f,!1),t=m.updateQueue,i.updateQueue=t,$u(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)S0(a,t),a=a.sibling;return de(Bt,Bt.current&1|2),i.child}t=t.sibling}f.tail!==null&&xn()>Wu&&(i.flags|=128,l=!0,jl(f,!1),i.lanes=4194304)}else{if(!l)if(t=Fu(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,$u(i,t),jl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Je)return vt(i),null}else 2*xn()-f.renderingStartTime>Wu&&a!==536870912&&(i.flags|=128,l=!0,jl(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=xn(),i.sibling=null,t=Bt.current,de(Bt,l?t&1|2:t&1),i):(vt(i),null);case 22:case 23:return ri(i),kf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(vt(i),i.subtreeFlags&6&&(i.flags|=8192)):vt(i),a=i.updateQueue,a!==null&&$u(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&he(Xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ti(zt),vt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function dE(t,i){switch(_f(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ti(zt),Ge(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Kt(i),null;case 13:if(ri(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ml()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return he(Bt),null;case 4:return Ge(),null;case 10:return ti(i.type),null;case 22:case 23:return ri(i),kf(),t!==null&&he(Xs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ti(zt),null;case 25:return null;default:return null}}function Zy(t,i){switch(_f(i),i.tag){case 3:ti(zt),Ge();break;case 26:case 27:case 5:Kt(i);break;case 4:Ge();break;case 13:ri(i);break;case 19:he(Bt);break;case 10:ti(i.type);break;case 22:case 23:ri(i),kf(),t!==null&&he(Xs);break;case 24:ti(zt)}}function Dl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&t)===t){l=void 0;var m=a.create,b=a.inst;l=m(),b.destroy=l}a=a.next}while(a!==f)}}catch(S){ut(i,i.return,S)}}function Bi(t,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var b=l.inst,S=b.destroy;if(S!==void 0){b.destroy=void 0,f=i;var V=a,Q=S;try{Q()}catch(ie){ut(f,V,ie)}}}l=l.next}while(l!==m)}}catch(ie){ut(i,i.return,ie)}}function Jy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{z0(i,a)}catch(l){ut(t,t.return,l)}}}function e1(t,i,a){a.props=Js(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){ut(t,i,l)}}function Ol(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(f){ut(t,i,f)}}function Ar(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){ut(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){ut(t,i,f)}else a.current=null}function t1(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){ut(t,t.return,f)}}function lp(t,i,a){try{var l=t.stateNode;DE(l,t.type,a,i),l[Ct]=i}catch(f){ut(t,t.return,f)}}function n1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ki(t.type)||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ki(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function up(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=sd));else if(l!==4&&(l===27&&Ki(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(up(t,i,a),t=t.sibling;t!==null;)up(t,i,a),t=t.sibling}function Qu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Ki(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Qu(t,i,a),t=t.sibling;t!==null;)Qu(t,i,a),t=t.sibling}function r1(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);en(i,l,a),i[Lt]=t,i[Ct]=a}catch(m){ut(t,t.return,m)}}var ai=!1,At=!1,dp=!1,i1=typeof WeakSet=="function"?WeakSet:Set,Yt=null;function hE(t,i){if(t=t.containerInfo,Mp=hd,t=m0(t),cf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,S=-1,V=-1,Q=0,ie=0,le=t,K=null;t:for(;;){for(var W;le!==a||f!==0&&le.nodeType!==3||(S=b+f),le!==m||l!==0&&le.nodeType!==3||(V=b+l),le.nodeType===3&&(b+=le.nodeValue.length),(W=le.firstChild)!==null;)K=le,le=W;for(;;){if(le===t)break t;if(K===a&&++Q===f&&(S=b),K===m&&++ie===l&&(V=b),(W=le.nextSibling)!==null)break;le=K,K=le.parentNode}le=W}a=S===-1||V===-1?null:{start:S,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pp={focusedElem:t,selectionRange:a},hd=!1,Yt=i;Yt!==null;)if(i=Yt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Yt=t;else for(;Yt!==null;){switch(i=Yt,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,a=i,f=m.memoizedProps,m=m.memoizedState,l=a.stateNode;try{var De=Js(a.type,f,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(De,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(Ne){ut(a,a.return,Ne)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Up(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Up(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Yt=t;break}Yt=i.return}}function s1(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(t,a),l&4&&Dl(5,a);break;case 1:if(Fi(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(b){ut(a,a.return,b)}else{var f=Js(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){ut(a,a.return,b)}}l&64&&Jy(a),l&512&&Ol(a,a.return);break;case 3:if(Fi(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{z0(t,i)}catch(b){ut(a,a.return,b)}}break;case 27:i===null&&l&4&&r1(a);case 26:case 5:Fi(t,a),i===null&&l&4&&t1(a),l&512&&Ol(a,a.return);break;case 12:Fi(t,a);break;case 13:Fi(t,a),l&4&&l1(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=bE.bind(null,a),UE(t,a))));break;case 22:if(l=a.memoizedState!==null||ai,!l){i=i!==null&&i.memoizedState!==null||At,f=ai;var m=At;ai=l,(At=i)&&!m?qi(t,a,(a.subtreeFlags&8772)!==0):Fi(t,a),ai=f,At=m}break;case 30:break;default:Fi(t,a)}}function a1(t){var i=t.alternate;i!==null&&(t.alternate=null,a1(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ii(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,bn=!1;function oi(t,i,a){for(a=a.child;a!==null;)o1(t,i,a),a=a.sibling}function o1(t,i,a){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Ye,a)}catch{}switch(a.tag){case 26:At||Ar(a,i),oi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:At||Ar(a,i);var l=gt,f=bn;Ki(a.type)&&(gt=a.stateNode,bn=!1),oi(t,i,a),Fl(a.stateNode),gt=l,bn=f;break;case 5:At||Ar(a,i);case 6:if(l=gt,f=bn,gt=null,oi(t,i,a),gt=l,bn=f,gt!==null)if(bn)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(a.stateNode)}catch(m){ut(a,i,m)}else try{gt.removeChild(a.stateNode)}catch(m){ut(a,i,m)}break;case 18:gt!==null&&(bn?(t=gt,K1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Wl(t)):K1(gt,a.stateNode));break;case 4:l=gt,f=bn,gt=a.stateNode.containerInfo,bn=!0,oi(t,i,a),gt=l,bn=f;break;case 0:case 11:case 14:case 15:At||Bi(2,a,i),At||Bi(4,a,i),oi(t,i,a);break;case 1:At||(Ar(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&e1(a,i,l)),oi(t,i,a);break;case 21:oi(t,i,a);break;case 22:At=(l=At)||a.memoizedState!==null,oi(t,i,a),At=l;break;default:oi(t,i,a)}}function l1(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wl(t)}catch(a){ut(i,i.return,a)}}function fE(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new i1),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new i1),i;default:throw Error(s(435,t.tag))}}function hp(t,i){var a=fE(t);i.forEach(function(l){var f=EE.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}function Dn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],m=t,b=i,S=b;e:for(;S!==null;){switch(S.tag){case 27:if(Ki(S.type)){gt=S.stateNode,bn=!1;break e}break;case 5:gt=S.stateNode,bn=!1;break e;case 3:case 4:gt=S.stateNode.containerInfo,bn=!0;break e}S=S.return}if(gt===null)throw Error(s(160));o1(m,b,f),gt=null,bn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)c1(i,t),i=i.sibling}var ar=null;function c1(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Dn(i,t),On(t),l&4&&(Bi(3,t,t.return),Dl(3,t),Bi(5,t,t.return));break;case 1:Dn(i,t),On(t),l&512&&(At||a===null||Ar(a,a.return)),l&64&&ai&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=ar;if(Dn(i,t),On(t),l&512&&(At||a===null||Ar(a,a.return)),l&4){var m=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Rs]||m[Lt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),en(m,l,a),m[Lt]=t,Tt(m),l=m;break e;case"link":var b=rv("link","href",f).get(l+(a.href||""));if(b){for(var S=0;S<b.length;S++)if(m=b[S],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(S,1);break t}}m=f.createElement(l),en(m,l,a),f.head.appendChild(m);break;case"meta":if(b=rv("meta","content",f).get(l+(a.content||""))){for(S=0;S<b.length;S++)if(m=b[S],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(S,1);break t}}m=f.createElement(l),en(m,l,a),f.head.appendChild(m);break;default:throw Error(s(468,l))}m[Lt]=t,Tt(m),l=m}t.stateNode=l}else iv(f,t.type,t.stateNode);else t.stateNode=nv(f,l,t.memoizedProps);else m!==l?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,l===null?iv(f,t.type,t.stateNode):nv(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&lp(t,t.memoizedProps,a.memoizedProps)}break;case 27:Dn(i,t),On(t),l&512&&(At||a===null||Ar(a,a.return)),a!==null&&l&4&&lp(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Dn(i,t),On(t),l&512&&(At||a===null||Ar(a,a.return)),t.flags&32){f=t.stateNode;try{zn(f,"")}catch(W){ut(t,t.return,W)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,lp(t,f,a!==null?a.memoizedProps:f)),l&1024&&(dp=!0);break;case 6:if(Dn(i,t),On(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(W){ut(t,t.return,W)}}break;case 3:if(cd=null,f=ar,ar=od(i.containerInfo),Dn(i,t),ar=f,On(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Wl(i.containerInfo)}catch(W){ut(t,t.return,W)}dp&&(dp=!1,u1(t));break;case 4:l=ar,ar=od(t.stateNode.containerInfo),Dn(i,t),On(t),ar=l;break;case 12:Dn(i,t),On(t);break;case 13:Dn(i,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vp=xn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,hp(t,l)));break;case 22:f=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,Q=ai,ie=At;if(ai=Q||f,At=ie||V,Dn(i,t),At=ie,ai=Q,On(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||V||ai||At||ea(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){V=a=i;try{if(m=V.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{S=V.stateNode;var le=V.memoizedProps.style,K=le!=null&&le.hasOwnProperty("display")?le.display:null;S.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(W){ut(V,V.return,W)}}}else if(i.tag===6){if(a===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(W){ut(V,V.return,W)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,hp(t,a))));break;case 19:Dn(i,t),On(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,hp(t,l)));break;case 30:break;case 21:break;default:Dn(i,t),On(t)}}function On(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(n1(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,m=cp(t);Qu(t,m,f);break;case 5:var b=a.stateNode;a.flags&32&&(zn(b,""),a.flags&=-33);var S=cp(t);Qu(t,S,b);break;case 3:case 4:var V=a.stateNode.containerInfo,Q=cp(t);up(t,Q,V);break;default:throw Error(s(161))}}catch(ie){ut(t,t.return,ie)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function u1(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;u1(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Fi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)s1(t,i.alternate,i),i=i.sibling}function ea(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Bi(4,i,i.return),ea(i);break;case 1:Ar(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&e1(i,i.return,a),ea(i);break;case 27:Fl(i.stateNode);case 26:case 5:Ar(i,i.return),ea(i);break;case 22:i.memoizedState===null&&ea(i);break;case 30:ea(i);break;default:ea(i)}t=t.sibling}}function qi(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:qi(f,m,a),Dl(4,m);break;case 1:if(qi(f,m,a),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Q){ut(l,l.return,Q)}if(l=m,f=l.updateQueue,f!==null){var S=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)U0(V[f],S)}catch(Q){ut(l,l.return,Q)}}a&&b&64&&Jy(m),Ol(m,m.return);break;case 27:r1(m);case 26:case 5:qi(f,m,a),a&&l===null&&b&4&&t1(m),Ol(m,m.return);break;case 12:qi(f,m,a);break;case 13:qi(f,m,a),a&&b&4&&l1(f,m);break;case 22:m.memoizedState===null&&qi(f,m,a),Ol(m,m.return);break;case 30:break;default:qi(f,m,a)}i=i.sibling}}function fp(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&vl(a))}function pp(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&vl(t))}function Nr(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)d1(t,i,a,l),i=i.sibling}function d1(t,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Nr(t,i,a,l),f&2048&&Dl(9,i);break;case 1:Nr(t,i,a,l);break;case 3:Nr(t,i,a,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&vl(t)));break;case 12:if(f&2048){Nr(t,i,a,l),t=i.stateNode;try{var m=i.memoizedProps,b=m.id,S=m.onPostCommit;typeof S=="function"&&S(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){ut(i,i.return,V)}}else Nr(t,i,a,l);break;case 13:Nr(t,i,a,l);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?Nr(t,i,a,l):kl(t,i):m._visibility&2?Nr(t,i,a,l):(m._visibility|=2,no(t,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&fp(b,i);break;case 24:Nr(t,i,a,l),f&2048&&pp(i.alternate,i);break;default:Nr(t,i,a,l)}}function no(t,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,b=i,S=a,V=l,Q=b.flags;switch(b.tag){case 0:case 11:case 15:no(m,b,S,V,f),Dl(8,b);break;case 23:break;case 22:var ie=b.stateNode;b.memoizedState!==null?ie._visibility&2?no(m,b,S,V,f):kl(m,b):(ie._visibility|=2,no(m,b,S,V,f)),f&&Q&2048&&fp(b.alternate,b);break;case 24:no(m,b,S,V,f),f&&Q&2048&&pp(b.alternate,b);break;default:no(m,b,S,V,f)}i=i.sibling}}function kl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,f=l.flags;switch(l.tag){case 22:kl(a,l),f&2048&&fp(l.alternate,l);break;case 24:kl(a,l),f&2048&&pp(l.alternate,l);break;default:kl(a,l)}i=i.sibling}}var Ml=8192;function ro(t){if(t.subtreeFlags&Ml)for(t=t.child;t!==null;)h1(t),t=t.sibling}function h1(t){switch(t.tag){case 26:ro(t),t.flags&Ml&&t.memoizedState!==null&&ZE(ar,t.memoizedState,t.memoizedProps);break;case 5:ro(t);break;case 3:case 4:var i=ar;ar=od(t.stateNode.containerInfo),ro(t),ar=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Ml,Ml=16777216,ro(t),Ml=i):ro(t));break;default:ro(t)}}function f1(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Pl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Yt=l,m1(l,t)}f1(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)p1(t),t=t.sibling}function p1(t){switch(t.tag){case 0:case 11:case 15:Pl(t),t.flags&2048&&Bi(9,t,t.return);break;case 3:Pl(t);break;case 12:Pl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ku(t)):Pl(t);break;default:Pl(t)}}function Ku(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Yt=l,m1(l,t)}f1(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Bi(8,i,i.return),Ku(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Ku(i));break;default:Ku(i)}t=t.sibling}}function m1(t,i){for(;Yt!==null;){var a=Yt;switch(a.tag){case 0:case 11:case 15:Bi(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:vl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Yt=l;else e:for(a=t;Yt!==null;){l=Yt;var f=l.sibling,m=l.return;if(a1(l),l===a){Yt=null;break e}if(f!==null){f.return=m,Yt=f;break e}Yt=m}}}var pE={getCacheForType:function(t){var i=an(zt),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},mE=typeof WeakMap=="function"?WeakMap:Map,rt=0,dt=null,ze=null,Ke=0,it=0,kn=null,Hi=!1,io=!1,mp=!1,li=0,Et=0,Gi=0,ta=0,gp=0,Kn=0,so=0,Ll=null,En=null,yp=!1,vp=0,Wu=1/0,Xu=null,Yi=null,Jt=0,$i=null,ao=null,oo=0,xp=0,_p=null,g1=null,Vl=0,bp=null;function Mn(){if((rt&2)!==0&&Ke!==0)return Ke&-Ke;if(Y.T!==null){var t=Qa;return t!==0?t:Rp()}return Ri()}function y1(){Kn===0&&(Kn=(Ke&536870912)===0||Je?$o():536870912);var t=Qn.current;return t!==null&&(t.flags|=32),Kn}function Pn(t,i,a){(t===dt&&(it===2||it===9)||t.cancelPendingCommit!==null)&&(lo(t,0),Qi(t,Ke,Kn,!1)),zr(t,a),((rt&2)===0||t!==dt)&&(t===dt&&((rt&2)===0&&(ta|=a),Et===4&&Qi(t,Ke,Kn,!1)),Rr(t))}function v1(t,i,a){if((rt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||Ns(t,i),f=l?vE(t,i):Tp(t,i,!0),m=l;do{if(f===0){io&&!l&&Qi(t,i,0,!1);break}else{if(a=t.current.alternate,m&&!gE(a)){f=Tp(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var S=t;f=Ll;var V=S.current.memoizedState.isDehydrated;if(V&&(lo(S,b).flags|=256),b=Tp(S,b,!1),b!==2){if(mp&&!V){S.errorRecoveryDisabledLanes|=m,ta|=m,f=4;break e}m=En,En=f,m!==null&&(En===null?En=m:En.push.apply(En,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){lo(t,0),Qi(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Qi(l,i,Kn,!Hi);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=vp+300-xn(),10<f)){if(Qi(l,i,Kn,!Hi),Sa(l,0,!0)!==0)break e;l.timeoutHandle=$1(x1.bind(null,l,a,En,Xu,yp,i,Kn,ta,so,Hi,m,2,-0,0),f);break e}x1(l,a,En,Xu,yp,i,Kn,ta,so,Hi,m,0,-0,0)}}break}while(!0);Rr(t)}function x1(t,i,a,l,f,m,b,S,V,Q,ie,le,K,W){if(t.timeoutHandle=-1,le=i.subtreeFlags,(le&8192||(le&16785408)===16785408)&&(Gl={stylesheets:null,count:0,unsuspend:XE},h1(i),le=JE(),le!==null)){t.cancelPendingCommit=le(A1.bind(null,t,i,m,a,l,f,b,S,V,ie,1,K,W)),Qi(t,m,b,!Q);return}A1(t,i,m,a,l,f,b,S,V)}function gE(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],m=f.getSnapshot;f=f.value;try{if(!In(m(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Qi(t,i,a,l){i&=~gp,i&=~ta,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-sn(f),b=1<<m;l[m]=-1,f&=~b}a!==0&&fr(t,a,i)}function Zu(){return(rt&6)===0?(Ul(0),!1):!0}function Ep(){if(ze!==null){if(it===0)var t=ze.return;else t=ze,ei=Ks=null,Uf(t),eo=null,Cl=0,t=ze;for(;t!==null;)Zy(t.alternate,t),t=t.return;ze=null}}function lo(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,kE(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ep(),dt=t,ze=a=Xr(t.current,null),Ke=i,it=0,kn=null,Hi=!1,io=Ns(t,i),mp=!1,so=Kn=gp=ta=Gi=Et=0,En=Ll=null,yp=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-sn(l),m=1<<f;i|=t[f],l&=~m}return li=i,_u(),a}function _1(t,i){Ve=null,Y.H=Uu,i===_l||i===Cu?(i=L0(),it=3):i===k0?(i=L0(),it=4):it=i===Vy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,kn=i,ze===null&&(Et=1,Hu(t,Hn(i,t.current)))}function b1(){var t=Y.H;return Y.H=Uu,t===null?Uu:t}function E1(){var t=Y.A;return Y.A=pE,t}function wp(){Et=4,Hi||(Ke&4194048)!==Ke&&Qn.current!==null||(io=!0),(Gi&134217727)===0&&(ta&134217727)===0||dt===null||Qi(dt,Ke,Kn,!1)}function Tp(t,i,a){var l=rt;rt|=2;var f=b1(),m=E1();(dt!==t||Ke!==i)&&(Xu=null,lo(t,i)),i=!1;var b=Et;e:do try{if(it!==0&&ze!==null){var S=ze,V=kn;switch(it){case 8:Ep(),b=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(i=!0);var Q=it;if(it=0,kn=null,co(t,S,V,Q),a&&io){b=0;break e}break;default:Q=it,it=0,kn=null,co(t,S,V,Q)}}yE(),b=Et;break}catch(ie){_1(t,ie)}while(!0);return i&&t.shellSuspendCounter++,ei=Ks=null,rt=l,Y.H=f,Y.A=m,ze===null&&(dt=null,Ke=0,_u()),b}function yE(){for(;ze!==null;)w1(ze)}function vE(t,i){var a=rt;rt|=2;var l=b1(),f=E1();dt!==t||Ke!==i?(Xu=null,Wu=xn()+500,lo(t,i)):io=Ns(t,i);e:do try{if(it!==0&&ze!==null){i=ze;var m=kn;t:switch(it){case 1:it=0,kn=null,co(t,i,m,1);break;case 2:case 9:if(M0(m)){it=0,kn=null,T1(i);break}i=function(){it!==2&&it!==9||dt!==t||(it=7),Rr(t)},m.then(i,i);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:M0(m)?(it=0,kn=null,T1(i)):(it=0,kn=null,co(t,i,m,7));break;case 5:var b=null;switch(ze.tag){case 26:b=ze.memoizedState;case 5:case 27:var S=ze;if(!b||sv(b)){it=0,kn=null;var V=S.sibling;if(V!==null)ze=V;else{var Q=S.return;Q!==null?(ze=Q,Ju(Q)):ze=null}break t}}it=0,kn=null,co(t,i,m,5);break;case 6:it=0,kn=null,co(t,i,m,6);break;case 8:Ep(),Et=6;break e;default:throw Error(s(462))}}xE();break}catch(ie){_1(t,ie)}while(!0);return ei=Ks=null,Y.H=l,Y.A=f,rt=a,ze!==null?0:(dt=null,Ke=0,_u(),Et)}function xE(){for(;ze!==null&&!vn();)w1(ze)}function w1(t){var i=Wy(t.alternate,t,li);t.memoizedProps=t.pendingProps,i===null?Ju(t):ze=i}function T1(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=Hy(a,i,i.pendingProps,i.type,void 0,Ke);break;case 11:i=Hy(a,i,i.pendingProps,i.type.render,i.ref,Ke);break;case 5:Uf(i);default:Zy(a,i),i=ze=S0(i,li),i=Wy(a,i,li)}t.memoizedProps=t.pendingProps,i===null?Ju(t):ze=i}function co(t,i,a,l){ei=Ks=null,Uf(i),eo=null,Cl=0;var f=i.return;try{if(lE(t,f,i,a,Ke)){Et=1,Hu(t,Hn(a,t.current)),ze=null;return}}catch(m){if(f!==null)throw ze=f,m;Et=1,Hu(t,Hn(a,t.current)),ze=null;return}i.flags&32768?(Je||l===1?t=!0:io||(Ke&536870912)!==0?t=!1:(Hi=t=!0,(l===2||l===9||l===3||l===6)&&(l=Qn.current,l!==null&&l.tag===13&&(l.flags|=16384))),S1(i,t)):Ju(i)}function Ju(t){var i=t;do{if((i.flags&32768)!==0){S1(i,Hi);return}t=i.return;var a=uE(i.alternate,i,li);if(a!==null){ze=a;return}if(i=i.sibling,i!==null){ze=i;return}ze=i=t}while(i!==null);Et===0&&(Et=5)}function S1(t,i){do{var a=dE(t.alternate,t);if(a!==null){a.flags&=32767,ze=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){ze=t;return}ze=t=a}while(t!==null);Et=6,ze=null}function A1(t,i,a,l,f,m,b,S,V){t.cancelPendingCommit=null;do ed();while(Jt!==0);if((rt&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(m=i.lanes|i.childLanes,m|=pf,Ko(t,a,m,b,S,V),t===dt&&(ze=dt=null,Ke=0),ao=i,$i=t,oo=a,xp=m,_p=f,g1=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,wE(Me,function(){return j1(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,f=ue.p,ue.p=2,b=rt,rt|=4;try{hE(t,i,a)}finally{rt=b,ue.p=f,Y.T=l}}Jt=1,N1(),R1(),C1()}}function N1(){if(Jt===1){Jt=0;var t=$i,i=ao,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null;var l=ue.p;ue.p=2;var f=rt;rt|=4;try{c1(i,t);var m=Pp,b=m0(t.containerInfo),S=m.focusedElem,V=m.selectionRange;if(b!==S&&S&&S.ownerDocument&&p0(S.ownerDocument.documentElement,S)){if(V!==null&&cf(S)){var Q=V.start,ie=V.end;if(ie===void 0&&(ie=Q),"selectionStart"in S)S.selectionStart=Q,S.selectionEnd=Math.min(ie,S.value.length);else{var le=S.ownerDocument||document,K=le&&le.defaultView||window;if(K.getSelection){var W=K.getSelection(),De=S.textContent.length,Ne=Math.min(V.start,De),lt=V.end===void 0?Ne:Math.min(V.end,De);!W.extend&&Ne>lt&&(b=lt,lt=Ne,Ne=b);var H=f0(S,Ne),F=f0(S,lt);if(H&&F&&(W.rangeCount!==1||W.anchorNode!==H.node||W.anchorOffset!==H.offset||W.focusNode!==F.node||W.focusOffset!==F.offset)){var $=le.createRange();$.setStart(H.node,H.offset),W.removeAllRanges(),Ne>lt?(W.addRange($),W.extend(F.node,F.offset)):($.setEnd(F.node,F.offset),W.addRange($))}}}}for(le=[],W=S;W=W.parentNode;)W.nodeType===1&&le.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<le.length;S++){var ae=le[S];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}hd=!!Mp,Pp=Mp=null}finally{rt=f,ue.p=l,Y.T=a}}t.current=i,Jt=2}}function R1(){if(Jt===2){Jt=0;var t=$i,i=ao,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Y.T,Y.T=null;var l=ue.p;ue.p=2;var f=rt;rt|=4;try{s1(t,i.alternate,i)}finally{rt=f,ue.p=l,Y.T=a}}Jt=3}}function C1(){if(Jt===4||Jt===3){Jt=0,hr();var t=$i,i=ao,a=oo,l=g1;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Jt=5:(Jt=0,ao=$i=null,I1(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Yi=null),Aa(a),i=i.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Ye,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Y.T,f=ue.p,ue.p=2,Y.T=null;try{for(var m=t.onRecoverableError,b=0;b<l.length;b++){var S=l[b];m(S.value,{componentStack:S.stack})}}finally{Y.T=i,ue.p=f}}(oo&3)!==0&&ed(),Rr(t),f=t.pendingLanes,(a&4194090)!==0&&(f&42)!==0?t===bp?Vl++:(Vl=0,bp=t):Vl=0,Ul(0)}}function I1(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,vl(i)))}function ed(t){return N1(),R1(),C1(),j1()}function j1(){if(Jt!==5)return!1;var t=$i,i=xp;xp=0;var a=Aa(oo),l=Y.T,f=ue.p;try{ue.p=32>a?32:a,Y.T=null,a=_p,_p=null;var m=$i,b=oo;if(Jt=0,ao=$i=null,oo=0,(rt&6)!==0)throw Error(s(331));var S=rt;if(rt|=4,p1(m.current),d1(m,m.current,b,a),rt=S,Ul(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Ye,m)}catch{}return!0}finally{ue.p=f,Y.T=l,I1(t,i)}}function D1(t,i,a){i=Hn(a,i),i=Jf(t.stateNode,i,2),t=Li(t,i,2),t!==null&&(zr(t,2),Rr(t))}function ut(t,i,a){if(t.tag===3)D1(t,t,a);else for(;i!==null;){if(i.tag===3){D1(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Yi===null||!Yi.has(l))){t=Hn(a,t),a=Py(2),l=Li(i,a,2),l!==null&&(Ly(a,l,i,t),zr(l,2),Rr(l));break}}i=i.return}}function Sp(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new mE;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(mp=!0,f.add(a),t=_E.bind(null,t,i,a),i.then(t,t))}function _E(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,dt===t&&(Ke&a)===a&&(Et===4||Et===3&&(Ke&62914560)===Ke&&300>xn()-vp?(rt&2)===0&&lo(t,0):gp|=a,so===Ke&&(so=0)),Rr(t)}function O1(t,i){i===0&&(i=Qo()),t=Ha(t,i),t!==null&&(zr(t,i),Rr(t))}function bE(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),O1(t,a)}function EE(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),O1(t,a)}function wE(t,i){return Nn(t,i)}var td=null,uo=null,Ap=!1,nd=!1,Np=!1,na=0;function Rr(t){t!==uo&&t.next===null&&(uo===null?td=uo=t:uo=uo.next=t),nd=!0,Ap||(Ap=!0,SE())}function Ul(t,i){if(!Np&&nd){Np=!0;do for(var a=!1,l=td;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var b=l.suspendedLanes,S=l.pingedLanes;m=(1<<31-sn(42|t)+1)-1,m&=f&~(b&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,L1(l,m))}else m=Ke,m=Sa(l,l===dt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ns(l,m)||(a=!0,L1(l,m));l=l.next}while(a);Np=!1}}function TE(){k1()}function k1(){nd=Ap=!1;var t=0;na!==0&&(OE()&&(t=na),na=0);for(var i=xn(),a=null,l=td;l!==null;){var f=l.next,m=M1(l,i);m===0?(l.next=null,a===null?td=f:a.next=f,f===null&&(uo=a)):(a=l,(t!==0||(m&3)!==0)&&(nd=!0)),l=f}Ul(t)}function M1(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var b=31-sn(m),S=1<<b,V=f[b];V===-1?((S&a)===0||(S&l)!==0)&&(f[b]=Yo(S,i)):V<=i&&(t.expiredLanes|=S),m&=~S}if(i=dt,a=Ke,a=Sa(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(it===2||it===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Vr(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ns(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&Vr(l),Aa(a)){case 2:case 8:a=Ae;break;case 32:a=Me;break;case 268435456:a=Pt;break;default:a=Me}return l=P1.bind(null,t),a=Nn(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&Vr(l),t.callbackPriority=2,t.callbackNode=null,2}function P1(t,i){if(Jt!==0&&Jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ed()&&t.callbackNode!==a)return null;var l=Ke;return l=Sa(t,t===dt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(v1(t,l,i),M1(t,xn()),t.callbackNode!=null&&t.callbackNode===a?P1.bind(null,t):null)}function L1(t,i){if(ed())return null;v1(t,i,!0)}function SE(){ME(function(){(rt&6)!==0?Nn(Ee,TE):k1()})}function Rp(){return na===0&&(na=$o()),na}function V1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Da(""+t)}function U1(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function AE(t,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var m=V1((f[Ct]||null).action),b=l.submitter;b&&(i=(i=b[Ct]||null)?V1(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var S=new Oa("action","action",null,l,f);t.push({event:S,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(na!==0){var V=b?U1(f,b):new FormData(f);Qf(a,{pending:!0,data:V,method:f.method,action:m},null,V)}}else typeof m=="function"&&(S.preventDefault(),V=b?U1(f,b):new FormData(f),Qf(a,{pending:!0,data:V,method:f.method,action:m},m,V))},currentTarget:f}]})}}for(var Cp=0;Cp<ff.length;Cp++){var Ip=ff[Cp],NE=Ip.toLowerCase(),RE=Ip[0].toUpperCase()+Ip.slice(1);sr(NE,"on"+RE)}sr(v0,"onAnimationEnd"),sr(x0,"onAnimationIteration"),sr(_0,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(G4,"onTransitionRun"),sr(Y4,"onTransitionStart"),sr($4,"onTransitionCancel"),sr(b0,"onTransitionEnd"),Fr("onMouseEnter",["mouseout","mouseover"]),Fr("onMouseLeave",["mouseout","mouseover"]),Fr("onPointerEnter",["pointerout","pointerover"]),Fr("onPointerLeave",["pointerout","pointerover"]),rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rr("onBeforeInput",["compositionend","keypress","textInput","paste"]),rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zl));function z1(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var b=l.length-1;0<=b;b--){var S=l[b],V=S.instance,Q=S.currentTarget;if(S=S.listener,V!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=Q;try{m(f)}catch(ie){qu(ie)}f.currentTarget=null,m=V}else for(b=0;b<l.length;b++){if(S=l[b],V=S.instance,Q=S.currentTarget,S=S.listener,V!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=Q;try{m(f)}catch(ie){qu(ie)}f.currentTarget=null,m=V}}}}function Be(t,i){var a=i[Xo];a===void 0&&(a=i[Xo]=new Set);var l=t+"__bubble";a.has(l)||(B1(i,t,2,!1),a.add(l))}function jp(t,i,a){var l=0;i&&(l|=4),B1(a,t,l,i)}var rd="_reactListening"+Math.random().toString(36).slice(2);function Dp(t){if(!t[rd]){t[rd]=!0,Zo.forEach(function(a){a!=="selectionchange"&&(CE.has(a)||jp(a,!1,t),jp(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[rd]||(i[rd]=!0,jp("selectionchange",!1,i))}}function B1(t,i,a,l){switch(dv(i)){case 2:var f=nw;break;case 8:f=rw;break;default:f=Yp}a=f.bind(null,i,a,t),f=void 0,!Fn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function Op(t,i,a,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var S=l.stateNode.containerInfo;if(S===f)break;if(b===4)for(b=l.return;b!==null;){var V=b.tag;if((V===3||V===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;S!==null;){if(b=Br(S),b===null)return;if(V=b.tag,V===5||V===6||V===26||V===27){l=m=b;continue e}S=S.parentNode}}l=l.return}su(function(){var Q=m,ie=Bn(a),le=[];e:{var K=E0.get(t);if(K!==void 0){var W=Oa,De=t;switch(t){case"keypress":if(xr(a)===0)break e;case"keydown":case"keyup":W=Ua;break;case"focusin":De="focus",W=Pa;break;case"focusout":De="blur",W=Pa;break;case"beforeblur":case"afterblur":W=Pa;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=qn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=fu;break;case v0:case x0:case _0:W=La;break;case b0:W=mu;break;case"scroll":case"scrollend":W=au;break;case"wheel":W=za;break;case"copy":case"cut":case"paste":W=Va;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=ul;break;case"toggle":case"beforetoggle":W=yu}var Ne=(i&4)!==0,lt=!Ne&&(t==="scroll"||t==="scrollend"),H=Ne?K!==null?K+"Capture":null:K;Ne=[];for(var F=Q,$;F!==null;){var ae=F;if($=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||$===null||H===null||(ae=Ms(F,H),ae!=null&&Ne.push(Bl(F,ae,$))),lt)break;F=F.return}0<Ne.length&&(K=new W(K,De,null,a,ie),le.push({event:K,listeners:Ne}))}}if((i&7)===0){e:{if(K=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",K&&a!==Gr&&(De=a.relatedTarget||a.fromElement)&&(Br(De)||De[Un]))break e;if((W||K)&&(K=ie.window===ie?ie:(K=ie.ownerDocument)?K.defaultView||K.parentWindow:window,W?(De=a.relatedTarget||a.toElement,W=Q,De=De?Br(De):null,De!==null&&(lt=c(De),Ne=De.tag,De!==lt||Ne!==5&&Ne!==27&&Ne!==6)&&(De=null)):(W=null,De=Q),W!==De)){if(Ne=qn,ae="onMouseLeave",H="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Ne=ul,ae="onPointerLeave",H="onPointerEnter",F="pointer"),lt=W==null?K:mr(W),$=De==null?K:mr(De),K=new Ne(ae,F+"leave",W,a,ie),K.target=lt,K.relatedTarget=$,ae=null,Br(ie)===Q&&(Ne=new Ne(H,F+"enter",De,a,ie),Ne.target=$,Ne.relatedTarget=lt,ae=Ne),lt=ae,W&&De)t:{for(Ne=W,H=De,F=0,$=Ne;$;$=ho($))F++;for($=0,ae=H;ae;ae=ho(ae))$++;for(;0<F-$;)Ne=ho(Ne),F--;for(;0<$-F;)H=ho(H),$--;for(;F--;){if(Ne===H||H!==null&&Ne===H.alternate)break t;Ne=ho(Ne),H=ho(H)}Ne=null}else Ne=null;W!==null&&F1(le,K,W,Ne,!1),De!==null&&lt!==null&&F1(le,lt,De,Ne,!0)}}e:{if(K=Q?mr(Q):window,W=K.nodeName&&K.nodeName.toLowerCase(),W==="select"||W==="input"&&K.type==="file")var be=o0;else if(Ut(K))if(l0)be=F4;else{be=z4;var Ue=U4}else W=K.nodeName,!W||W.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?Q&&rl(Q.elementType)&&(be=o0):be=B4;if(be&&(be=be(t,Q))){Wr(le,be,a,ie);break e}Ue&&Ue(t,K,Q),t==="focusout"&&Q&&K.type==="number"&&Q.memoizedProps.value!=null&&Di(K,"number",K.value)}switch(Ue=Q?mr(Q):window,t){case"focusin":(Ut(Ue)||Ue.contentEditable==="true")&&(Ba=Ue,uf=Q,fl=null);break;case"focusout":fl=uf=Ba=null;break;case"mousedown":df=!0;break;case"contextmenu":case"mouseup":case"dragend":df=!1,g0(le,a,ie);break;case"selectionchange":if(H4)break;case"keydown":case"keyup":g0(le,a,ie)}var Te;if(Er)e:{switch(t){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else $e?Z(t,a)&&(Ce="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(_&&a.locale!=="ko"&&($e||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&$e&&(Te=sl()):(vr=ie,Oi="value"in vr?vr.value:vr.textContent,$e=!0)),Ue=id(Q,Ce),0<Ue.length&&(Ce=new ll(Ce,t,null,a,ie),le.push({event:Ce,listeners:Ue}),Te?Ce.data=Te:(Te=me(a),Te!==null&&(Ce.data=Te)))),(Te=v?Vt(t,a):Qe(t,a))&&(Ce=id(Q,"onBeforeInput"),0<Ce.length&&(Ue=new ll("onBeforeInput","beforeinput",null,a,ie),le.push({event:Ue,listeners:Ce}),Ue.data=Te)),AE(le,t,Q,a,ie)}z1(le,i)})}function Bl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function id(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ms(t,a),f!=null&&l.unshift(Bl(t,f,m)),f=Ms(t,i),f!=null&&l.push(Bl(t,f,m))),t.tag===3)return l;t=t.return}return[]}function ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function F1(t,i,a,l,f){for(var m=i._reactName,b=[];a!==null&&a!==l;){var S=a,V=S.alternate,Q=S.stateNode;if(S=S.tag,V!==null&&V===l)break;S!==5&&S!==26&&S!==27||Q===null||(V=Q,f?(Q=Ms(a,m),Q!=null&&b.unshift(Bl(a,Q,V))):f||(Q=Ms(a,m),Q!=null&&b.push(Bl(a,Q,V)))),a=a.return}b.length!==0&&t.push({event:i,listeners:b})}var IE=/\r\n?/g,jE=/\u0000|\uFFFD/g;function q1(t){return(typeof t=="string"?t:""+t).replace(IE,`
`).replace(jE,"")}function H1(t,i){return i=q1(i),q1(t)===i}function sd(){}function ot(t,i,a,l,f,m){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||zn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&zn(t,""+l);break;case"className":gr(t,"class",l);break;case"tabIndex":gr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":gr(t,a,l);break;case"style":nl(t,l,m);break;case"data":if(i!=="object"){gr(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Da(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(i!=="input"&&ot(t,i,"name",f.name,f,null),ot(t,i,"formEncType",f.formEncType,f,null),ot(t,i,"formMethod",f.formMethod,f,null),ot(t,i,"formTarget",f.formTarget,f,null)):(ot(t,i,"encType",f.encType,f,null),ot(t,i,"method",f.method,f,null),ot(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Da(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=sd);break;case"onScroll":l!=null&&Be("scroll",t);break;case"onScrollEnd":l!=null&&Be("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Da(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Be("beforetoggle",t),Be("toggle",t),ji(t,"popover",l);break;case"xlinkActuate":Wt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Wt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Wt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Wt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Wt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Wt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ji(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=nf.get(a)||a,ji(t,a,l))}}function kp(t,i,a,l,f,m){switch(a){case"style":nl(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?zn(t,l):(typeof l=="number"||typeof l=="bigint")&&zn(t,""+l);break;case"onScroll":l!=null&&Be("scroll",t);break;case"onScrollEnd":l!=null&&Be("scrollend",t);break;case"onClick":l!=null&&(t.onclick=sd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Na.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),m=t[Ct]||null,m=m!=null?m[a]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,f);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):ji(t,a,l)}}}function en(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",t),Be("load",t);var l=!1,f=!1,m;for(m in a)if(a.hasOwnProperty(m)){var b=a[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:ot(t,i,m,b,a,null)}}f&&ot(t,i,"srcSet",a.srcSet,a,null),l&&ot(t,i,"src",a.src,a,null);return;case"input":Be("invalid",t);var S=m=b=f=null,V=null,Q=null;for(l in a)if(a.hasOwnProperty(l)){var ie=a[l];if(ie!=null)switch(l){case"name":f=ie;break;case"type":b=ie;break;case"checked":V=ie;break;case"defaultChecked":Q=ie;break;case"value":m=ie;break;case"defaultValue":S=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,i));break;default:ot(t,i,l,ie,a,null)}}Ds(t,m,S,V,Q,b,f,!1),ja(t);return;case"select":Be("invalid",t),l=b=m=null;for(f in a)if(a.hasOwnProperty(f)&&(S=a[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":b=S;break;case"multiple":l=S;default:ot(t,i,f,S,a,null)}i=m,a=b,t.multiple=!!l,i!=null?Hr(t,!!l,i,!1):a!=null&&Hr(t,!!l,a,!0);return;case"textarea":Be("invalid",t),m=f=l=null;for(b in a)if(a.hasOwnProperty(b)&&(S=a[b],S!=null))switch(b){case"value":l=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:ot(t,i,b,S,a,null)}Os(t,l,f,m),ja(t);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(l=a[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ot(t,i,V,l,a,null)}return;case"dialog":Be("beforetoggle",t),Be("toggle",t),Be("cancel",t),Be("close",t);break;case"iframe":case"object":Be("load",t);break;case"video":case"audio":for(l=0;l<zl.length;l++)Be(zl[l],t);break;case"image":Be("error",t),Be("load",t);break;case"details":Be("toggle",t);break;case"embed":case"source":case"link":Be("error",t),Be("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(l=a[Q],l!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:ot(t,i,Q,l,a,null)}return;default:if(rl(i)){for(ie in a)a.hasOwnProperty(ie)&&(l=a[ie],l!==void 0&&kp(t,i,ie,l,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(l=a[S],l!=null&&ot(t,i,S,l,a,null))}function DE(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,S=null,V=null,Q=null,ie=null;for(W in a){var le=a[W];if(a.hasOwnProperty(W)&&le!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":V=le;default:l.hasOwnProperty(W)||ot(t,i,W,null,l,le)}}for(var K in l){var W=l[K];if(le=a[K],l.hasOwnProperty(K)&&(W!=null||le!=null))switch(K){case"type":m=W;break;case"name":f=W;break;case"checked":Q=W;break;case"defaultChecked":ie=W;break;case"value":b=W;break;case"defaultValue":S=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,i));break;default:W!==le&&ot(t,i,K,W,l,le)}}Cn(t,b,S,V,Q,ie,m,f);return;case"select":W=b=S=K=null;for(m in a)if(V=a[m],a.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":W=V;default:l.hasOwnProperty(m)||ot(t,i,m,null,l,V)}for(f in l)if(m=l[f],V=a[f],l.hasOwnProperty(f)&&(m!=null||V!=null))switch(f){case"value":K=m;break;case"defaultValue":S=m;break;case"multiple":b=m;default:m!==V&&ot(t,i,f,m,l,V)}i=S,a=b,l=W,K!=null?Hr(t,!!a,K,!1):!!l!=!!a&&(i!=null?Hr(t,!!a,i,!0):Hr(t,!!a,a?[]:"",!1));return;case"textarea":W=K=null;for(S in a)if(f=a[S],a.hasOwnProperty(S)&&f!=null&&!l.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ot(t,i,S,null,l,f)}for(b in l)if(f=l[b],m=a[b],l.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":K=f;break;case"defaultValue":W=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&ot(t,i,b,f,l,m)}st(t,K,W);return;case"option":for(var De in a)if(K=a[De],a.hasOwnProperty(De)&&K!=null&&!l.hasOwnProperty(De))switch(De){case"selected":t.selected=!1;break;default:ot(t,i,De,null,l,K)}for(V in l)if(K=l[V],W=a[V],l.hasOwnProperty(V)&&K!==W&&(K!=null||W!=null))switch(V){case"selected":t.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:ot(t,i,V,K,l,W)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ne in a)K=a[Ne],a.hasOwnProperty(Ne)&&K!=null&&!l.hasOwnProperty(Ne)&&ot(t,i,Ne,null,l,K);for(Q in l)if(K=l[Q],W=a[Q],l.hasOwnProperty(Q)&&K!==W&&(K!=null||W!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:ot(t,i,Q,K,l,W)}return;default:if(rl(i)){for(var lt in a)K=a[lt],a.hasOwnProperty(lt)&&K!==void 0&&!l.hasOwnProperty(lt)&&kp(t,i,lt,void 0,l,K);for(ie in l)K=l[ie],W=a[ie],!l.hasOwnProperty(ie)||K===W||K===void 0&&W===void 0||kp(t,i,ie,K,l,W);return}}for(var H in a)K=a[H],a.hasOwnProperty(H)&&K!=null&&!l.hasOwnProperty(H)&&ot(t,i,H,null,l,K);for(le in l)K=l[le],W=a[le],!l.hasOwnProperty(le)||K===W||K==null&&W==null||ot(t,i,le,K,l,W)}var Mp=null,Pp=null;function ad(t){return t.nodeType===9?t:t.ownerDocument}function G1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y1(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Lp(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vp=null;function OE(){var t=window.event;return t&&t.type==="popstate"?t===Vp?!1:(Vp=t,!0):(Vp=null,!1)}var $1=typeof setTimeout=="function"?setTimeout:void 0,kE=typeof clearTimeout=="function"?clearTimeout:void 0,Q1=typeof Promise=="function"?Promise:void 0,ME=typeof queueMicrotask=="function"?queueMicrotask:typeof Q1<"u"?function(t){return Q1.resolve(null).then(t).catch(PE)}:$1;function PE(t){setTimeout(function(){throw t})}function Ki(t){return t==="head"}function K1(t,i){var a=i,l=0,f=0;do{var m=a.nextSibling;if(t.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<l&&8>l){a=l;var b=t.ownerDocument;if(a&1&&Fl(b.documentElement),a&2&&Fl(b.body),a&4)for(a=b.head,Fl(a),b=a.firstChild;b;){var S=b.nextSibling,V=b.nodeName;b[Rs]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&b.rel.toLowerCase()==="stylesheet"||a.removeChild(b),b=S}}if(f===0){t.removeChild(m),Wl(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=m}while(a);Wl(i)}function Up(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Up(a),Ii(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function LE(t,i,a,l){for(;t.nodeType===1;){var f=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Rs])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=or(t.nextSibling),t===null)break}return null}function VE(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=or(t.nextSibling),t===null))return null;return t}function zp(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function UE(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function or(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Bp=null;function W1(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function X1(t,i,a){switch(i=ad(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Fl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ii(t)}var Wn=new Map,Z1=new Set;function od(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ci=ue.d;ue.d={f:zE,r:BE,D:FE,C:qE,L:HE,m:GE,X:$E,S:YE,M:QE};function zE(){var t=ci.f(),i=Zu();return t||i}function BE(t){var i=pr(t);i!==null&&i.tag===5&&i.type==="form"?vy(i):ci.r(t)}var fo=typeof document>"u"?null:document;function J1(t,i,a){var l=fo;if(l&&typeof i=="string"&&i){var f=It(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),Z1.has(f)||(Z1.add(f),t={rel:t,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),en(i,"link",t),Tt(i),l.head.appendChild(i)))}}function FE(t){ci.D(t),J1("dns-prefetch",t,null)}function qE(t,i){ci.C(t,i),J1("preconnect",t,i)}function HE(t,i,a){ci.L(t,i,a);var l=fo;if(l&&t&&i){var f='link[rel="preload"][as="'+It(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+It(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+It(a.imageSizes)+'"]')):f+='[href="'+It(t)+'"]';var m=f;switch(i){case"style":m=po(t);break;case"script":m=mo(t)}Wn.has(m)||(t=x({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Wn.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(ql(m))||i==="script"&&l.querySelector(Hl(m))||(i=l.createElement("link"),en(i,"link",t),Tt(i),l.head.appendChild(i)))}}function GE(t,i){ci.m(t,i);var a=fo;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+It(l)+'"][href="'+It(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=mo(t)}if(!Wn.has(m)&&(t=x({rel:"modulepreload",href:t},i),Wn.set(m,t),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Hl(m)))return}l=a.createElement("link"),en(l,"link",t),Tt(l),a.head.appendChild(l)}}}function YE(t,i,a){ci.S(t,i,a);var l=fo;if(l&&t){var f=hn(l).hoistableStyles,m=po(t);i=i||"default";var b=f.get(m);if(!b){var S={loading:0,preload:null};if(b=l.querySelector(ql(m)))S.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Wn.get(m))&&Fp(t,a);var V=b=l.createElement("link");Tt(V),en(V,"link",t),V._p=new Promise(function(Q,ie){V.onload=Q,V.onerror=ie}),V.addEventListener("load",function(){S.loading|=1}),V.addEventListener("error",function(){S.loading|=2}),S.loading|=4,ld(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:S},f.set(m,b)}}}function $E(t,i){ci.X(t,i);var a=fo;if(a&&t){var l=hn(a).hoistableScripts,f=mo(t),m=l.get(f);m||(m=a.querySelector(Hl(f)),m||(t=x({src:t,async:!0},i),(i=Wn.get(f))&&qp(t,i),m=a.createElement("script"),Tt(m),en(m,"link",t),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function QE(t,i){ci.M(t,i);var a=fo;if(a&&t){var l=hn(a).hoistableScripts,f=mo(t),m=l.get(f);m||(m=a.querySelector(Hl(f)),m||(t=x({src:t,async:!0,type:"module"},i),(i=Wn.get(f))&&qp(t,i),m=a.createElement("script"),Tt(m),en(m,"link",t),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function ev(t,i,a,l){var f=(f=fe.current)?od(f):null;if(!f)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=po(a.href),a=hn(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=po(a.href);var m=hn(f).hoistableStyles,b=m.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,b),(m=f.querySelector(ql(t)))&&!m._p&&(b.instance=m,b.state.loading=5),Wn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wn.set(t,a),m||KE(f,t,a,b.state))),i&&l===null)throw Error(s(528,""));return b}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=mo(a),a=hn(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function po(t){return'href="'+It(t)+'"'}function ql(t){return'link[rel="stylesheet"]['+t+"]"}function tv(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function KE(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),en(i,"link",a),Tt(i),t.head.appendChild(i))}function mo(t){return'[src="'+It(t)+'"]'}function Hl(t){return"script[async]"+t}function nv(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+It(a.href)+'"]');if(l)return i.instance=l,Tt(l),l;var f=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Tt(l),en(l,"style",f),ld(l,a.precedence,t),i.instance=l;case"stylesheet":f=po(a.href);var m=t.querySelector(ql(f));if(m)return i.state.loading|=4,i.instance=m,Tt(m),m;l=tv(a),(f=Wn.get(f))&&Fp(l,f),m=(t.ownerDocument||t).createElement("link"),Tt(m);var b=m;return b._p=new Promise(function(S,V){b.onload=S,b.onerror=V}),en(m,"link",l),i.state.loading|=4,ld(m,a.precedence,t),i.instance=m;case"script":return m=mo(a.src),(f=t.querySelector(Hl(m)))?(i.instance=f,Tt(f),f):(l=a,(f=Wn.get(m))&&(l=x({},a),qp(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),Tt(f),en(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,ld(l,a.precedence,t));return i.instance}function ld(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,b=0;b<l.length;b++){var S=l[b];if(S.dataset.precedence===i)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function Fp(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function qp(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var cd=null;function rv(t,i,a){if(cd===null){var l=new Map,f=cd=new Map;f.set(a,l)}else f=cd,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),f=0;f<a.length;f++){var m=a[f];if(!(m[Rs]||m[Lt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=t+b;var S=l.get(b);S?S.push(m):l.set(b,[m])}}return l}function iv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function WE(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function sv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Gl=null;function XE(){}function ZE(t,i,a){if(Gl===null)throw Error(s(475));var l=Gl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=po(a.href),m=t.querySelector(ql(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=ud.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,Tt(m);return}m=t.ownerDocument||t,a=tv(a),(f=Wn.get(f))&&Fp(a,f),m=m.createElement("link"),Tt(m);var b=m;b._p=new Promise(function(S,V){b.onload=S,b.onerror=V}),en(m,"link",a),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=ud.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function JE(){if(Gl===null)throw Error(s(475));var t=Gl;return t.stylesheets&&t.count===0&&Hp(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&Hp(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ud(){if(this.count--,this.count===0){if(this.stylesheets)Hp(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var dd=null;function Hp(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,dd=new Map,i.forEach(ew,t),dd=null,ud.call(t))}function ew(t,i){if(!(i.state.loading&4)){var a=dd.get(t);if(a)var l=a.get(null);else{a=new Map,dd.set(t,a);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),l=b)}l&&a.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),m=a.get(b)||l,m===l&&a.set(null,f),a.set(b,f),this.count++,l=ud.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Yl={$$typeof:q,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function tw(t,i,a,l,f,m,b,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ur(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.hiddenUpdates=Ur(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function av(t,i,a,l,f,m,b,S,V,Q,ie,le){return t=new tw(t,i,a,b,S,V,Q,le),i=1,m===!0&&(i|=24),m=jn(3,null,null,i),t.current=m,m.stateNode=t,i=Sf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:a,cache:i},Cf(m),t}function ov(t){return t?(t=Ga,t):Ga}function lv(t,i,a,l,f,m){f=ov(f),l.context===null?l.context=f:l.pendingContext=f,l=Pi(i),l.payload={element:a},m=m===void 0?null:m,m!==null&&(l.callback=m),a=Li(t,l,i),a!==null&&(Pn(a,t,i),El(a,t,i))}function cv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Gp(t,i){cv(t,i),(t=t.alternate)&&cv(t,i)}function uv(t){if(t.tag===13){var i=Ha(t,67108864);i!==null&&Pn(i,t,67108864),Gp(t,67108864)}}var hd=!0;function nw(t,i,a,l){var f=Y.T;Y.T=null;var m=ue.p;try{ue.p=2,Yp(t,i,a,l)}finally{ue.p=m,Y.T=f}}function rw(t,i,a,l){var f=Y.T;Y.T=null;var m=ue.p;try{ue.p=8,Yp(t,i,a,l)}finally{ue.p=m,Y.T=f}}function Yp(t,i,a,l){if(hd){var f=$p(l);if(f===null)Op(t,i,l,fd,a),hv(t,l);else if(sw(f,t,i,a,l))l.stopPropagation();else if(hv(t,l),i&4&&-1<iw.indexOf(t)){for(;f!==null;){var m=pr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=nr(m.pendingLanes);if(b!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;b;){var V=1<<31-sn(b);S.entanglements[1]|=V,b&=~V}Rr(m),(rt&6)===0&&(Wu=xn()+500,Ul(0))}}break;case 13:S=Ha(m,2),S!==null&&Pn(S,m,2),Zu(),Gp(m,2)}if(m=$p(l),m===null&&Op(t,i,l,fd,a),m===f)break;f=m}f!==null&&l.stopPropagation()}else Op(t,i,l,null,a)}}function $p(t){return t=Bn(t),Qp(t)}var fd=null;function Qp(t){if(fd=null,t=Br(t),t!==null){var i=c(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=h(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return fd=t,null}function dv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(te()){case Ee:return 2;case Ae:return 8;case Me:case ft:return 32;case Pt:return 268435456;default:return 32}default:return 32}}var Kp=!1,Wi=null,Xi=null,Zi=null,$l=new Map,Ql=new Map,Ji=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hv(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":$l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(i.pointerId)}}function Kl(t,i,a,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=pr(i),i!==null&&uv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function sw(t,i,a,l,f){switch(i){case"focusin":return Wi=Kl(Wi,t,i,a,l,f),!0;case"dragenter":return Xi=Kl(Xi,t,i,a,l,f),!0;case"mouseover":return Zi=Kl(Zi,t,i,a,l,f),!0;case"pointerover":var m=f.pointerId;return $l.set(m,Kl($l.get(m)||null,t,i,a,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Ql.set(m,Kl(Ql.get(m)||null,t,i,a,l,f)),!0}return!1}function fv(t){var i=Br(t.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){t.blockedOn=i,Zc(t.priority,function(){if(a.tag===13){var l=Mn();l=Ni(l);var f=Ha(a,l);f!==null&&Pn(f,a,l),Gp(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pd(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=$p(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Gr=l,a.target.dispatchEvent(l),Gr=null}else return i=pr(a),i!==null&&uv(i),t.blockedOn=a,!1;i.shift()}return!0}function pv(t,i,a){pd(t)&&a.delete(i)}function aw(){Kp=!1,Wi!==null&&pd(Wi)&&(Wi=null),Xi!==null&&pd(Xi)&&(Xi=null),Zi!==null&&pd(Zi)&&(Zi=null),$l.forEach(pv),Ql.forEach(pv)}function md(t,i){t.blockedOn===i&&(t.blockedOn=null,Kp||(Kp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,aw)))}var gd=null;function mv(t){gd!==t&&(gd=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gd===t&&(gd=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Qp(l||a)===null)continue;break}var m=pr(a);m!==null&&(t.splice(i,3),i-=3,Qf(m,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function Wl(t){function i(V){return md(V,t)}Wi!==null&&md(Wi,t),Xi!==null&&md(Xi,t),Zi!==null&&md(Zi,t),$l.forEach(i),Ql.forEach(i);for(var a=0;a<Ji.length;a++){var l=Ji[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ji.length&&(a=Ji[0],a.blockedOn===null);)fv(a),a.blockedOn===null&&Ji.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],m=a[l+1],b=f[Ct]||null;if(typeof m=="function")b||mv(a);else if(b){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[Ct]||null)S=b.formAction;else if(Qp(f)!==null)continue}else S=b.action;typeof S=="function"?a[l+1]=S:(a.splice(l,3),l-=3),mv(a)}}}function Wp(t){this._internalRoot=t}yd.prototype.render=Wp.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Mn();lv(a,l,t,i,null,null)},yd.prototype.unmount=Wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;lv(t.current,2,null,t,null,null),Zu(),i[Un]=null}};function yd(t){this._internalRoot=t}yd.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ri();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ji.length&&i!==0&&i<Ji[a].priority;a++);Ji.splice(a,0,t),a===0&&fv(t)}};var gv=e.version;if(gv!=="19.1.1")throw Error(s(527,gv,"19.1.1"));ue.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var ow={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vd.isDisabled&&vd.supportsFiber)try{Ye=vd.inject(ow),Xe=vd}catch{}}return Zl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",f=Dy,m=Oy,b=ky,S=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(S=i.unstable_transitionCallbacks)),i=av(t,1,!1,null,null,a,l,f,m,b,S,null),t[Un]=i.current,Dp(t),new Wp(i)},Zl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,f="",m=Dy,b=Oy,S=ky,V=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(V=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),i=av(t,1,!0,i,a??null,l,f,m,b,S,V,Q),i.context=ov(null),a=i.current,l=Mn(),l=Ni(l),f=Pi(l),f.callback=null,Li(a,f,l),a=l,i.current.lanes=a,zr(i,a),Rr(i),t[Un]=i.current,Dp(t),new yd(i)},Zl.version="19.1.1",Zl}var Av;function yw(){if(Av)return Jp.exports;Av=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Jp.exports=gw(),Jp.exports}var vw=yw();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Nv="popstate";function xw(r={}){function e(o,c){let{pathname:h="/",search:p="",hash:g=""}=xa(o.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),wm("",{pathname:h,search:p,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let h=o.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let g=o.location.href,y=g.indexOf("#");p=y===-1?g:g.slice(0,y)}return p+"#"+(typeof c=="string"?c:yc(c))}function s(o,c){cr(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return bw(e,n,s,r)}function xt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function cr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _w(){return Math.random().toString(36).substring(2,10)}function Rv(r,e){return{usr:r.state,key:r.key,idx:e}}function wm(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?xa(e):e,state:n,key:e&&e.key||s||_w()}}function yc({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function xa(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function bw(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:c=!1}=s,h=o.history,p="POP",g=null,y=x();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function x(){return(h.state||{idx:null}).idx}function E(){p="POP";let M=x(),L=M==null?null:M-y;y=M,g&&g({action:p,location:U.location,delta:L})}function w(M,L){p="PUSH";let B=wm(U.location,M,L);n&&n(B,M),y=x()+1;let q=Rv(B,y),X=U.createHref(B);try{h.pushState(q,"",X)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;o.location.assign(X)}c&&g&&g({action:p,location:U.location,delta:1})}function I(M,L){p="REPLACE";let B=wm(U.location,M,L);n&&n(B,M),y=x();let q=Rv(B,y),X=U.createHref(B);h.replaceState(q,"",X),c&&g&&g({action:p,location:U.location,delta:0})}function N(M){return Ew(M)}let U={get action(){return p},get location(){return r(o,h)},listen(M){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Nv,E),g=M,()=>{o.removeEventListener(Nv,E),g=null}},createHref(M){return e(o,M)},createURL:N,encodeLocation(M){let L=N(M);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:w,replace:I,go(M){return h.go(M)}};return U}function Ew(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),xt(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:yc(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function Dx(r,e,n="/"){return ww(r,e,n,!1)}function ww(r,e,n,s){let o=typeof e=="string"?xa(e):e,c=gi(o.pathname||"/",n);if(c==null)return null;let h=Ox(r);Tw(h);let p=null;for(let g=0;p==null&&g<h.length;++g){let y=Mw(c);p=Ow(h[g],y,s)}return p}function Ox(r,e=[],n=[],s="",o=!1){let c=(h,p,g=o,y)=>{let x={relativePath:y===void 0?h.path||"":y,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&g)return;xt(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let E=hi([s,x.relativePath]),w=n.concat(x);h.children&&h.children.length>0&&(xt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Ox(h.children,e,w,E,g)),!(h.path==null&&!h.index)&&e.push({path:E,score:jw(E,h.index),routesMeta:w})};return r.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))c(h,p);else for(let g of kx(h.path))c(h,p,!0,g)}),e}function kx(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(s.length===0)return o?[c,""]:[c];let h=kx(s.join("/")),p=[];return p.push(...h.map(g=>g===""?c:[c,g].join("/"))),o&&p.push(...h),p.map(g=>r.startsWith("/")&&g===""?"/":g)}function Tw(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:Dw(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var Sw=/^:[\w-]+$/,Aw=3,Nw=2,Rw=1,Cw=10,Iw=-2,Cv=r=>r==="*";function jw(r,e){let n=r.split("/"),s=n.length;return n.some(Cv)&&(s+=Iw),e&&(s+=Nw),n.filter(o=>!Cv(o)).reduce((o,c)=>o+(Sw.test(c)?Aw:c===""?Rw:Cw),s)}function Dw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Ow(r,e,n=!1){let{routesMeta:s}=r,o={},c="/",h=[];for(let p=0;p<s.length;++p){let g=s[p],y=p===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",E=Jd({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},x),w=g.route;if(!E&&y&&n&&!s[s.length-1].route.index&&(E=Jd({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},x)),!E)return null;Object.assign(o,E.params),h.push({params:o,pathname:hi([c,E.pathname]),pathnameBase:Uw(hi([c,E.pathnameBase])),route:w}),E.pathnameBase!=="/"&&(c=hi([c,E.pathnameBase]))}return h}function Jd(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=kw(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let c=o[0],h=c.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((y,{paramName:x,isOptional:E},w)=>{if(x==="*"){let N=p[w]||"";h=c.slice(0,c.length-N.length).replace(/(.)\/+$/,"$1")}const I=p[w];return E&&!I?y[x]=void 0:y[x]=(I||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:h,pattern:r}}function kw(r,e=!1,n=!0){cr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Mw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function gi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function Pw(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?xa(r):r;return{pathname:n?n.startsWith("/")?n:Lw(n,e):e,search:zw(s),hash:Bw(o)}}function Lw(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function rm(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vw(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mx(r){let e=Vw(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function Px(r,e,n,s=!1){let o;typeof r=="string"?o=xa(r):(o={...r},xt(!o.pathname||!o.pathname.includes("?"),rm("?","pathname","search",o)),xt(!o.pathname||!o.pathname.includes("#"),rm("#","pathname","hash",o)),xt(!o.search||!o.search.includes("#"),rm("#","search","hash",o)));let c=r===""||o.pathname==="",h=c?"/":o.pathname,p;if(h==null)p=n;else{let E=e.length-1;if(!s&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),E-=1;o.pathname=w.join("/")}p=E>=0?e[E]:"/"}let g=Pw(o,p),y=h&&h!=="/"&&h.endsWith("/"),x=(c||h===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(y||x)&&(g.pathname+="/"),g}var hi=r=>r.join("/").replace(/\/\/+/g,"/"),Uw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),zw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Bw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Fw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Lx=["POST","PUT","PATCH","DELETE"];new Set(Lx);var qw=["GET",...Lx];new Set(qw);var Po=P.createContext(null);Po.displayName="DataRouter";var wh=P.createContext(null);wh.displayName="DataRouterState";P.createContext(!1);var Vx=P.createContext({isTransitioning:!1});Vx.displayName="ViewTransition";var Hw=P.createContext(new Map);Hw.displayName="Fetchers";var Gw=P.createContext(null);Gw.displayName="Await";var Lr=P.createContext(null);Lr.displayName="Navigation";var Oc=P.createContext(null);Oc.displayName="Location";var wi=P.createContext({outlet:null,matches:[],isDataRoute:!1});wi.displayName="Route";var Jm=P.createContext(null);Jm.displayName="RouteError";function Yw(r,{relative:e}={}){xt(kc(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=P.useContext(Lr),{hash:o,pathname:c,search:h}=Mc(r,{relative:e}),p=c;return n!=="/"&&(p=c==="/"?n:hi([n,c])),s.createHref({pathname:p,search:h,hash:o})}function kc(){return P.useContext(Oc)!=null}function _a(){return xt(kc(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(Oc).location}var Ux="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zx(r){P.useContext(Lr).static||P.useLayoutEffect(r)}function xs(){let{isDataRoute:r}=P.useContext(wi);return r?sT():$w()}function $w(){xt(kc(),"useNavigate() may be used only in the context of a <Router> component.");let r=P.useContext(Po),{basename:e,navigator:n}=P.useContext(Lr),{matches:s}=P.useContext(wi),{pathname:o}=_a(),c=JSON.stringify(Mx(s)),h=P.useRef(!1);return zx(()=>{h.current=!0}),P.useCallback((g,y={})=>{if(cr(h.current,Ux),!h.current)return;if(typeof g=="number"){n.go(g);return}let x=Px(g,JSON.parse(c),o,y.relative==="path");r==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:hi([e,x.pathname])),(y.replace?n.replace:n.push)(x,y.state,y)},[e,n,c,o,r])}P.createContext(null);function Mc(r,{relative:e}={}){let{matches:n}=P.useContext(wi),{pathname:s}=_a(),o=JSON.stringify(Mx(n));return P.useMemo(()=>Px(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Qw(r,e){return Bx(r,e)}function Bx(r,e,n,s){xt(kc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=P.useContext(Lr),{matches:c}=P.useContext(wi),h=c[c.length-1],p=h?h.params:{},g=h?h.pathname:"/",y=h?h.pathnameBase:"/",x=h&&h.route;{let L=x&&x.path||"";Fx(g,!x||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let E=_a(),w;if(e){let L=typeof e=="string"?xa(e):e;xt(y==="/"||L.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${L.pathname}" was given in the \`location\` prop.`),w=L}else w=E;let I=w.pathname||"/",N=I;if(y!=="/"){let L=y.replace(/^\//,"").split("/");N="/"+I.replace(/^\//,"").split("/").slice(L.length).join("/")}let U=Dx(r,{pathname:N});cr(x||U!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),cr(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Jw(U&&U.map(L=>Object.assign({},L,{params:Object.assign({},p,L.params),pathname:hi([y,o.encodeLocation?o.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?y:hi([y,o.encodeLocation?o.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),c,n,s);return e&&M?P.createElement(Oc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},M):M}function Kw(){let r=iT(),e=Fw(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:c},"ErrorBoundary")," or"," ",P.createElement("code",{style:c},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:o},n):null,h)}var Ww=P.createElement(Kw,null),Xw=class extends P.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?P.createElement(wi.Provider,{value:this.props.routeContext},P.createElement(Jm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Zw({routeContext:r,match:e,children:n}){let s=P.useContext(Po);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),P.createElement(wi.Provider,{value:r},n)}function Jw(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,c=n?.errors;if(c!=null){let g=o.findIndex(y=>y.route.id&&c?.[y.route.id]!==void 0);xt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let h=!1,p=-1;if(n)for(let g=0;g<o.length;g++){let y=o[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=g),y.route.id){let{loaderData:x,errors:E}=n,w=y.route.loader&&!x.hasOwnProperty(y.route.id)&&(!E||E[y.route.id]===void 0);if(y.route.lazy||w){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((g,y,x)=>{let E,w=!1,I=null,N=null;n&&(E=c&&y.route.id?c[y.route.id]:void 0,I=y.route.errorElement||Ww,h&&(p<0&&x===0?(Fx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,N=null):p===x&&(w=!0,N=y.route.hydrateFallbackElement||null)));let U=e.concat(o.slice(0,x+1)),M=()=>{let L;return E?L=I:w?L=N:y.route.Component?L=P.createElement(y.route.Component,null):y.route.element?L=y.route.element:L=g,P.createElement(Zw,{match:y,routeContext:{outlet:g,matches:U,isDataRoute:n!=null},children:L})};return n&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?P.createElement(Xw,{location:n.location,revalidation:n.revalidation,component:I,error:E,children:M(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):M()},null)}function eg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eT(r){let e=P.useContext(Po);return xt(e,eg(r)),e}function tT(r){let e=P.useContext(wh);return xt(e,eg(r)),e}function nT(r){let e=P.useContext(wi);return xt(e,eg(r)),e}function tg(r){let e=nT(r),n=e.matches[e.matches.length-1];return xt(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function rT(){return tg("useRouteId")}function iT(){let r=P.useContext(Jm),e=tT("useRouteError"),n=tg("useRouteError");return r!==void 0?r:e.errors?.[n]}function sT(){let{router:r}=eT("useNavigate"),e=tg("useNavigate"),n=P.useRef(!1);return zx(()=>{n.current=!0}),P.useCallback(async(o,c={})=>{cr(n.current,Ux),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...c}))},[r,e])}var Iv={};function Fx(r,e,n){!e&&!Iv[r]&&(Iv[r]=!0,cr(!1,n))}P.memo(aT);function aT({routes:r,future:e,state:n}){return Bx(r,void 0,n,e)}function Xn(r){xt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function oT({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:c=!1}){xt(!kc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=P.useMemo(()=>({basename:h,navigator:o,static:c,future:{}}),[h,o,c]);typeof n=="string"&&(n=xa(n));let{pathname:g="/",search:y="",hash:x="",state:E=null,key:w="default"}=n,I=P.useMemo(()=>{let N=gi(g,h);return N==null?null:{location:{pathname:N,search:y,hash:x,state:E,key:w},navigationType:s}},[h,g,y,x,E,w,s]);return cr(I!=null,`<Router basename="${h}"> is not able to match the URL "${g}${y}${x}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:P.createElement(Lr.Provider,{value:p},P.createElement(Oc.Provider,{children:e,value:I}))}function lT({children:r,location:e}){return Qw(Tm(r),e)}function Tm(r,e=[]){let n=[];return P.Children.forEach(r,(s,o)=>{if(!P.isValidElement(s))return;let c=[...e,o];if(s.type===P.Fragment){n.push.apply(n,Tm(s.props.children,c));return}xt(s.type===Xn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Tm(s.props.children,c)),n.push(h)}),n}var Bd="get",Fd="application/x-www-form-urlencoded";function Th(r){return r!=null&&typeof r.tagName=="string"}function cT(r){return Th(r)&&r.tagName.toLowerCase()==="button"}function uT(r){return Th(r)&&r.tagName.toLowerCase()==="form"}function dT(r){return Th(r)&&r.tagName.toLowerCase()==="input"}function hT(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function fT(r,e){return r.button===0&&(!e||e==="_self")&&!hT(r)}var _d=null;function pT(){if(_d===null)try{new FormData(document.createElement("form"),0),_d=!1}catch{_d=!0}return _d}var mT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function im(r){return r!=null&&!mT.has(r)?(cr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fd}"`),null):r}function gT(r,e){let n,s,o,c,h;if(uT(r)){let p=r.getAttribute("action");s=p?gi(p,e):null,n=r.getAttribute("method")||Bd,o=im(r.getAttribute("enctype"))||Fd,c=new FormData(r)}else if(cT(r)||dT(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||p.getAttribute("action");if(s=g?gi(g,e):null,n=r.getAttribute("formmethod")||p.getAttribute("method")||Bd,o=im(r.getAttribute("formenctype"))||im(p.getAttribute("enctype"))||Fd,c=new FormData(p,r),!pT()){let{name:y,type:x,value:E}=r;if(x==="image"){let w=y?`${y}.`:"";c.append(`${w}x`,"0"),c.append(`${w}y`,"0")}else y&&c.append(y,E)}}else{if(Th(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Bd,s=null,o=Fd,h=r}return c&&o==="text/plain"&&(h=c,c=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:c,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ng(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function yT(r,e,n){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&gi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function vT(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xT(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function _T(r,e,n){let s=await Promise.all(r.map(async o=>{let c=e.routes[o.route.id];if(c){let h=await vT(c,n);return h.links?h.links():[]}return[]}));return TT(s.flat(1).filter(xT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function jv(r,e,n,s,o,c){let h=(g,y)=>n[y]?g.route.id!==n[y].route.id:!0,p=(g,y)=>n[y].pathname!==g.pathname||n[y].route.path?.endsWith("*")&&n[y].params["*"]!==g.params["*"];return c==="assets"?e.filter((g,y)=>h(g,y)||p(g,y)):c==="data"?e.filter((g,y)=>{let x=s.routes[g.route.id];if(!x||!x.hasLoader)return!1;if(h(g,y)||p(g,y))return!0;if(g.route.shouldRevalidate){let E=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function bT(r,e,{includeHydrateFallback:n}={}){return ET(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function ET(r){return[...new Set(r)]}function wT(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function TT(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let c=JSON.stringify(wT(o));return n.has(c)||(n.add(c),s.push({key:c,link:o})),s},[])}function qx(){let r=P.useContext(Po);return ng(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function ST(){let r=P.useContext(wh);return ng(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var rg=P.createContext(void 0);rg.displayName="FrameworkContext";function Hx(){let r=P.useContext(rg);return ng(r,"You must render this element inside a <HydratedRouter> element"),r}function AT(r,e){let n=P.useContext(rg),[s,o]=P.useState(!1),[c,h]=P.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:y,onMouseLeave:x,onTouchStart:E}=e,w=P.useRef(null);P.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let U=L=>{L.forEach(B=>{h(B.isIntersecting)})},M=new IntersectionObserver(U,{threshold:.5});return w.current&&M.observe(w.current),()=>{M.disconnect()}}},[r]),P.useEffect(()=>{if(s){let U=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(U)}}},[s]);let I=()=>{o(!0)},N=()=>{o(!1),h(!1)};return n?r!=="intent"?[c,w,{}]:[c,w,{onFocus:Jl(p,I),onBlur:Jl(g,N),onMouseEnter:Jl(y,I),onMouseLeave:Jl(x,N),onTouchStart:Jl(E,I)}]:[!1,w,{}]}function Jl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function NT({page:r,...e}){let{router:n}=qx(),s=P.useMemo(()=>Dx(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?P.createElement(CT,{page:r,matches:s,...e}):null}function RT(r){let{manifest:e,routeModules:n}=Hx(),[s,o]=P.useState([]);return P.useEffect(()=>{let c=!1;return _T(r,e,n).then(h=>{c||o(h)}),()=>{c=!0}},[r,e,n]),s}function CT({page:r,matches:e,...n}){let s=_a(),{manifest:o,routeModules:c}=Hx(),{basename:h}=qx(),{loaderData:p,matches:g}=ST(),y=P.useMemo(()=>jv(r,e,g,o,s,"data"),[r,e,g,o,s]),x=P.useMemo(()=>jv(r,e,g,o,s,"assets"),[r,e,g,o,s]),E=P.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let N=new Set,U=!1;if(e.forEach(L=>{let B=o.routes[L.route.id];!B||!B.hasLoader||(!y.some(q=>q.route.id===L.route.id)&&L.route.id in p&&c[L.route.id]?.shouldRevalidate||B.hasClientLoader?U=!0:N.add(L.route.id))}),N.size===0)return[];let M=yT(r,h,"data");return U&&N.size>0&&M.searchParams.set("_routes",e.filter(L=>N.has(L.route.id)).map(L=>L.route.id).join(",")),[M.pathname+M.search]},[h,p,s,o,y,e,r,c]),w=P.useMemo(()=>bT(x,o),[x,o]),I=RT(x);return P.createElement(P.Fragment,null,E.map(N=>P.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...n})),w.map(N=>P.createElement("link",{key:N,rel:"modulepreload",href:N,...n})),I.map(({key:N,link:U})=>P.createElement("link",{key:N,nonce:n.nonce,...U})))}function IT(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Gx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gx&&(window.__reactRouterVersion="7.8.1")}catch{}function jT({basename:r,children:e,window:n}){let s=P.useRef();s.current==null&&(s.current=xw({window:n,v5Compat:!0}));let o=s.current,[c,h]=P.useState({action:o.action,location:o.location}),p=P.useCallback(g=>{P.startTransition(()=>h(g))},[h]);return P.useLayoutEffect(()=>o.listen(p),[o,p]),P.createElement(oT,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:o})}var Yx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ba=P.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:c,replace:h,state:p,target:g,to:y,preventScrollReset:x,viewTransition:E,...w},I){let{basename:N}=P.useContext(Lr),U=typeof y=="string"&&Yx.test(y),M,L=!1;if(typeof y=="string"&&U&&(M=y,Gx))try{let j=new URL(window.location.href),O=y.startsWith("//")?new URL(j.protocol+y):new URL(y),D=gi(O.pathname,N);O.origin===j.origin&&D!=null?y=D+O.search+O.hash:L=!0}catch{cr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=Yw(y,{relative:o}),[q,X,ee]=AT(s,w),ne=MT(y,{replace:h,state:p,target:g,preventScrollReset:x,relative:o,viewTransition:E});function k(j){e&&e(j),j.defaultPrevented||ne(j)}let C=P.createElement("a",{...w,...ee,href:M||B,onClick:L||c?e:k,ref:IT(I,X),target:g,"data-discover":!U&&n==="render"?"true":void 0});return q&&!U?P.createElement(P.Fragment,null,C,P.createElement(NT,{page:B})):C});ba.displayName="Link";var DT=P.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:c,to:h,viewTransition:p,children:g,...y},x){let E=Mc(h,{relative:y.relative}),w=_a(),I=P.useContext(wh),{navigator:N,basename:U}=P.useContext(Lr),M=I!=null&&zT(E)&&p===!0,L=N.encodeLocation?N.encodeLocation(E).pathname:E.pathname,B=w.pathname,q=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(B=B.toLowerCase(),q=q?q.toLowerCase():null,L=L.toLowerCase()),q&&U&&(q=gi(q,U)||q);const X=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let ee=B===L||!o&&B.startsWith(L)&&B.charAt(X)==="/",ne=q!=null&&(q===L||!o&&q.startsWith(L)&&q.charAt(L.length)==="/"),k={isActive:ee,isPending:ne,isTransitioning:M},C=ee?e:void 0,j;typeof s=="function"?j=s(k):j=[s,ee?"active":null,ne?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let O=typeof c=="function"?c(k):c;return P.createElement(ba,{...y,"aria-current":C,className:j,ref:x,style:O,to:h,viewTransition:p},typeof g=="function"?g(k):g)});DT.displayName="NavLink";var OT=P.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:c,method:h=Bd,action:p,onSubmit:g,relative:y,preventScrollReset:x,viewTransition:E,...w},I)=>{let N=VT(),U=UT(p,{relative:y}),M=h.toLowerCase()==="get"?"get":"post",L=typeof p=="string"&&Yx.test(p),B=q=>{if(g&&g(q),q.defaultPrevented)return;q.preventDefault();let X=q.nativeEvent.submitter,ee=X?.getAttribute("formmethod")||h;N(X||q.currentTarget,{fetcherKey:e,method:ee,navigate:n,replace:o,state:c,relative:y,preventScrollReset:x,viewTransition:E})};return P.createElement("form",{ref:I,method:M,action:U,onSubmit:s?g:B,...w,"data-discover":!L&&r==="render"?"true":void 0})});OT.displayName="Form";function kT(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $x(r){let e=P.useContext(Po);return xt(e,kT(r)),e}function MT(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:c,viewTransition:h}={}){let p=xs(),g=_a(),y=Mc(r,{relative:c});return P.useCallback(x=>{if(fT(x,e)){x.preventDefault();let E=n!==void 0?n:yc(g)===yc(y);p(r,{replace:E,state:s,preventScrollReset:o,relative:c,viewTransition:h})}},[g,p,y,n,s,e,r,o,c,h])}var PT=0,LT=()=>`__${String(++PT)}__`;function VT(){let{router:r}=$x("useSubmit"),{basename:e}=P.useContext(Lr),n=rT();return P.useCallback(async(s,o={})=>{let{action:c,method:h,encType:p,formData:g,body:y}=gT(s,e);if(o.navigate===!1){let x=o.fetcherKey||LT();await r.fetch(x,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function UT(r,{relative:e}={}){let{basename:n}=P.useContext(Lr),s=P.useContext(wi);xt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),c={...Mc(r||".",{relative:e})},h=_a();if(r==null){c.search=h.search;let p=new URLSearchParams(c.search),g=p.getAll("index");if(g.some(x=>x==="")){p.delete("index"),g.filter(E=>E).forEach(E=>p.append("index",E));let x=p.toString();c.search=x?`?${x}`:""}}return(!r||r===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:hi([n,c.pathname])),yc(c)}function zT(r,{relative:e}={}){let n=P.useContext(Vx);xt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=$x("useViewTransitionState"),o=Mc(r,{relative:e});if(!n.isTransitioning)return!1;let c=gi(n.currentLocation.pathname,s)||n.currentLocation.pathname,h=gi(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Jd(o.pathname,h)!=null||Jd(o.pathname,c)!=null}var yt={},bd={},Ed={},wd={},sm,Dv;function BT(){if(Dv)return sm;Dv=1;var r="Expected a function",e=NaN,n="[object Symbol]",s=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,h=/^0o[0-7]+$/i,p=parseInt,g=typeof xd=="object"&&xd&&xd.Object===Object&&xd,y=typeof self=="object"&&self&&self.Object===Object&&self,x=g||y||Function("return this")(),E=Object.prototype,w=E.toString,I=Math.max,N=Math.min,U=function(){return x.Date.now()};function M(ne,k,C){var j,O,D,A,T,re,xe=0,Y=!1,ue=!1,ye=!0;if(typeof ne!="function")throw new TypeError(r);k=ee(k)||0,B(C)&&(Y=!!C.leading,ue="maxWait"in C,D=ue?I(ee(C.maxWait)||0,k):D,ye="trailing"in C?!!C.trailing:ye);function Re(ve){var Ge=j,pt=O;return j=O=void 0,xe=ve,A=ne.apply(pt,Ge),A}function z(ve){return xe=ve,T=setTimeout(de,k),Y?Re(ve):A}function oe(ve){var Ge=ve-re,pt=ve-xe,Kt=k-Ge;return ue?N(Kt,D-pt):Kt}function he(ve){var Ge=ve-re,pt=ve-xe;return re===void 0||Ge>=k||Ge<0||ue&&pt>=D}function de(){var ve=U();if(he(ve))return J(ve);T=setTimeout(de,oe(ve))}function J(ve){return T=void 0,ye&&j?Re(ve):(j=O=void 0,A)}function pe(){T!==void 0&&clearTimeout(T),xe=0,j=re=O=T=void 0}function fe(){return T===void 0?A:J(U())}function we(){var ve=U(),Ge=he(ve);if(j=arguments,O=this,re=ve,Ge){if(T===void 0)return z(re);if(ue)return T=setTimeout(de,k),Re(re)}return T===void 0&&(T=setTimeout(de,k)),A}return we.cancel=pe,we.flush=fe,we}function L(ne,k,C){var j=!0,O=!0;if(typeof ne!="function")throw new TypeError(r);return B(C)&&(j="leading"in C?!!C.leading:j,O="trailing"in C?!!C.trailing:O),M(ne,k,{leading:j,maxWait:k,trailing:O})}function B(ne){var k=typeof ne;return!!ne&&(k=="object"||k=="function")}function q(ne){return!!ne&&typeof ne=="object"}function X(ne){return typeof ne=="symbol"||q(ne)&&w.call(ne)==n}function ee(ne){if(typeof ne=="number")return ne;if(X(ne))return e;if(B(ne)){var k=typeof ne.valueOf=="function"?ne.valueOf():ne;ne=B(k)?k+"":k}if(typeof ne!="string")return ne===0?ne:+ne;ne=ne.replace(s,"");var C=c.test(ne);return C||h.test(ne)?p(ne.slice(2),C?2:8):o.test(ne)?e:+ne}return sm=L,sm}var ec={},Ov;function ig(){if(Ov)return ec;Ov=1,Object.defineProperty(ec,"__esModule",{value:!0}),ec.addPassiveEventListener=function(n,s,o){var c=o.name;c||(c=s,console.warn("Listener must be a named function.")),r.has(s)||r.set(s,new Set);var h=r.get(s);if(!h.has(c)){var p=(function(){var g=!1;try{var y=Object.defineProperty({},"passive",{get:function(){g=!0}});window.addEventListener("test",null,y)}catch{}return g})();n.addEventListener(s,o,p?{passive:!0}:!1),h.add(c)}},ec.removePassiveEventListener=function(n,s,o){n.removeEventListener(s,o),r.get(s).delete(o.name||s)};var r=new Map;return ec}var kv;function sg(){if(kv)return wd;kv=1,Object.defineProperty(wd,"__esModule",{value:!0});var r=BT(),e=s(r),n=ig();function s(h){return h&&h.__esModule?h:{default:h}}var o=function(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,e.default)(p,g)},c={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(p,g){if(p){var y=o(function(x){c.scrollHandler(p)},g);return c.scrollSpyContainers.push(p),(0,n.addPassiveEventListener)(p,"scroll",y),function(){(0,n.removePassiveEventListener)(p,"scroll",y),c.scrollSpyContainers.splice(c.scrollSpyContainers.indexOf(p),1)}}return function(){}},isMounted:function(p){return c.scrollSpyContainers.indexOf(p)!==-1},currentPositionX:function(p){if(p===document){var g=window.scrollY!==void 0,y=(document.compatMode||"")==="CSS1Compat";return g?window.scrollX:y?document.documentElement.scrollLeft:document.body.scrollLeft}else return p.scrollLeft},currentPositionY:function(p){if(p===document){var g=window.scrollX!==void 0,y=(document.compatMode||"")==="CSS1Compat";return g?window.scrollY:y?document.documentElement.scrollTop:document.body.scrollTop}else return p.scrollTop},scrollHandler:function(p){var g=c.scrollSpyContainers[c.scrollSpyContainers.indexOf(p)].spyCallbacks||[];g.forEach(function(y){return y(c.currentPositionX(p),c.currentPositionY(p))})},addStateHandler:function(p){c.spySetState.push(p)},addSpyHandler:function(p,g){var y=c.scrollSpyContainers[c.scrollSpyContainers.indexOf(g)];y.spyCallbacks||(y.spyCallbacks=[]),y.spyCallbacks.push(p)},updateStates:function(){c.spySetState.forEach(function(p){return p()})},unmount:function(p,g){c.scrollSpyContainers.forEach(function(y){return y.spyCallbacks&&y.spyCallbacks.length&&y.spyCallbacks.indexOf(g)>-1&&y.spyCallbacks.splice(y.spyCallbacks.indexOf(g),1)}),c.spySetState&&c.spySetState.length&&c.spySetState.indexOf(p)>-1&&c.spySetState.splice(c.spySetState.indexOf(p),1),document.removeEventListener("scroll",c.scrollHandler)},update:function(){return c.scrollSpyContainers.forEach(function(p){return c.scrollHandler(p)})}};return wd.default=c,wd}var Td={},Sd={},Mv;function Sh(){if(Mv)return Sd;Mv=1,Object.defineProperty(Sd,"__esModule",{value:!0});var r=function(p,g){var y=p.indexOf("#")===0?p.substring(1):p,x=y?"#"+y:"",E=window&&window.location,w=x?E.pathname+E.search+x:E.pathname+E.search;g?history.pushState(history.state,"",w):history.replaceState(history.state,"",w)},e=function(){return window.location.hash.replace(/^#/,"")},n=function(p){return function(g){return p.contains?p!=g&&p.contains(g):!!(p.compareDocumentPosition(g)&16)}},s=function(p){return getComputedStyle(p).position!=="static"},o=function(p,g){for(var y=p.offsetTop,x=p.offsetParent;x&&!g(x);)y+=x.offsetTop,x=x.offsetParent;return{offsetTop:y,offsetParent:x}},c=function(p,g,y){if(y)return p===document?g.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(p).position!=="static"?g.offsetLeft:g.offsetLeft-p.offsetLeft;if(p===document)return g.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(s(p)){if(g.offsetParent!==p){var x=function(M){return M===p||M===document},E=o(g,x),w=E.offsetTop,I=E.offsetParent;if(I!==p)throw new Error("Seems containerElement is not an ancestor of the Element");return w}return g.offsetTop}if(g.offsetParent===p.offsetParent)return g.offsetTop-p.offsetTop;var N=function(M){return M===document};return o(g,N).offsetTop-o(p,N).offsetTop};return Sd.default={updateHash:r,getHash:e,filterElementInContainer:n,scrollOffset:c},Sd}var Ad={},Nd={},Pv;function FT(){return Pv||(Pv=1,Object.defineProperty(Nd,"__esModule",{value:!0}),Nd.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),Nd}var Rd={},Lv;function qT(){if(Lv)return Rd;Lv=1,Object.defineProperty(Rd,"__esModule",{value:!0});var r=ig(),e=["mousedown","wheel","touchmove","keydown"];return Rd.default={subscribe:function(s){return typeof document<"u"&&e.forEach(function(o){return(0,r.addPassiveEventListener)(document,o,s)})}},Rd}var Cd={},Vv;function ag(){if(Vv)return Cd;Vv=1,Object.defineProperty(Cd,"__esModule",{value:!0});var r={registered:{},scrollEvent:{register:function(n,s){r.registered[n]=s},remove:function(n){r.registered[n]=null}}};return Cd.default=r,Cd}var Uv;function Qx(){if(Uv)return Ad;Uv=1,Object.defineProperty(Ad,"__esModule",{value:!0});var r=Object.assign||function(O){for(var D=1;D<arguments.length;D++){var A=arguments[D];for(var T in A)Object.prototype.hasOwnProperty.call(A,T)&&(O[T]=A[T])}return O},e=Sh();g(e);var n=FT(),s=g(n),o=qT(),c=g(o),h=ag(),p=g(h);function g(O){return O&&O.__esModule?O:{default:O}}var y=function(D){return s.default[D.smooth]||s.default.defaultEasing},x=function(D){return typeof D=="function"?D:function(){return D}},E=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},w=(function(){return E()||function(O,D,A){window.setTimeout(O,A||1e3/60,new Date().getTime())}})(),I=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},N=function(D){var A=D.data.containerElement;if(A&&A!==document&&A!==document.body)return A.scrollLeft;var T=window.pageXOffset!==void 0,re=(document.compatMode||"")==="CSS1Compat";return T?window.pageXOffset:re?document.documentElement.scrollLeft:document.body.scrollLeft},U=function(D){var A=D.data.containerElement;if(A&&A!==document&&A!==document.body)return A.scrollTop;var T=window.pageXOffset!==void 0,re=(document.compatMode||"")==="CSS1Compat";return T?window.pageYOffset:re?document.documentElement.scrollTop:document.body.scrollTop},M=function(D){var A=D.data.containerElement;if(A&&A!==document&&A!==document.body)return A.scrollWidth-A.offsetWidth;var T=document.body,re=document.documentElement;return Math.max(T.scrollWidth,T.offsetWidth,re.clientWidth,re.scrollWidth,re.offsetWidth)},L=function(D){var A=D.data.containerElement;if(A&&A!==document&&A!==document.body)return A.scrollHeight-A.offsetHeight;var T=document.body,re=document.documentElement;return Math.max(T.scrollHeight,T.offsetHeight,re.clientHeight,re.scrollHeight,re.offsetHeight)},B=function O(D,A,T){var re=A.data;if(!A.ignoreCancelEvents&&re.cancel){p.default.registered.end&&p.default.registered.end(re.to,re.target,re.currentPositionY);return}if(re.delta=Math.round(re.targetPosition-re.startPosition),re.start===null&&(re.start=T),re.progress=T-re.start,re.percent=re.progress>=re.duration?1:D(re.progress/re.duration),re.currentPosition=re.startPosition+Math.ceil(re.delta*re.percent),re.containerElement&&re.containerElement!==document&&re.containerElement!==document.body?A.horizontal?re.containerElement.scrollLeft=re.currentPosition:re.containerElement.scrollTop=re.currentPosition:A.horizontal?window.scrollTo(re.currentPosition,0):window.scrollTo(0,re.currentPosition),re.percent<1){var xe=O.bind(null,D,A);w.call(window,xe);return}p.default.registered.end&&p.default.registered.end(re.to,re.target,re.currentPosition)},q=function(D){D.data.containerElement=D?D.containerId?document.getElementById(D.containerId):D.container&&D.container.nodeType?D.container:document:null},X=function(D,A,T,re){A.data=A.data||I(),window.clearTimeout(A.data.delayTimeout);var xe=function(){A.data.cancel=!0};if(c.default.subscribe(xe),q(A),A.data.start=null,A.data.cancel=!1,A.data.startPosition=A.horizontal?N(A):U(A),A.data.targetPosition=A.absolute?D:D+A.data.startPosition,A.data.startPosition===A.data.targetPosition){p.default.registered.end&&p.default.registered.end(A.data.to,A.data.target,A.data.currentPosition);return}A.data.delta=Math.round(A.data.targetPosition-A.data.startPosition),A.data.duration=x(A.duration)(A.data.delta),A.data.duration=isNaN(parseFloat(A.data.duration))?1e3:parseFloat(A.data.duration),A.data.to=T,A.data.target=re;var Y=y(A),ue=B.bind(null,Y,A);if(A&&A.delay>0){A.data.delayTimeout=window.setTimeout(function(){p.default.registered.begin&&p.default.registered.begin(A.data.to,A.data.target),w.call(window,ue)},A.delay);return}p.default.registered.begin&&p.default.registered.begin(A.data.to,A.data.target),w.call(window,ue)},ee=function(D){return D=r({},D),D.data=D.data||I(),D.absolute=!0,D},ne=function(D){X(0,ee(D))},k=function(D,A){X(D,ee(A))},C=function(D){D=ee(D),q(D),X(D.horizontal?M(D):L(D),D)},j=function(D,A){A=ee(A),q(A);var T=A.horizontal?N(A):U(A);X(D+T,A)};return Ad.default={animateTopScroll:X,getAnimationType:y,scrollToTop:ne,scrollToBottom:C,scrollTo:k,scrollMore:j},Ad}var zv;function Ah(){if(zv)return Td;zv=1,Object.defineProperty(Td,"__esModule",{value:!0});var r=Object.assign||function(x){for(var E=1;E<arguments.length;E++){var w=arguments[E];for(var I in w)Object.prototype.hasOwnProperty.call(w,I)&&(x[I]=w[I])}return x},e=Sh(),n=p(e),s=Qx(),o=p(s),c=ag(),h=p(c);function p(x){return x&&x.__esModule?x:{default:x}}var g={},y=void 0;return Td.default={unmount:function(){g={}},register:function(E,w){g[E]=w},unregister:function(E){delete g[E]},get:function(E){return g[E]||document.getElementById(E)||document.getElementsByName(E)[0]||document.getElementsByClassName(E)[0]},setActiveLink:function(E){return y=E},getActiveLink:function(){return y},scrollTo:function(E,w){var I=this.get(E);if(!I){console.warn("target Element not found");return}w=r({},w,{absolute:!1});var N=w.containerId,U=w.container,M=void 0;N?M=document.getElementById(N):U&&U.nodeType?M=U:M=document,w.absolute=!0;var L=w.horizontal,B=n.default.scrollOffset(M,I,L)+(w.offset||0);if(!w.smooth){h.default.registered.begin&&h.default.registered.begin(E,I),M===document?w.horizontal?window.scrollTo(B,0):window.scrollTo(0,B):M.scrollTop=B,h.default.registered.end&&h.default.registered.end(E,I);return}o.default.animateTopScroll(B,w,E,I)}},Td}var am={exports:{}},om,Bv;function HT(){if(Bv)return om;Bv=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return om=r,om}var lm,Fv;function GT(){if(Fv)return lm;Fv=1;var r=HT();function e(){}function n(){}return n.resetWarningCache=e,lm=function(){function s(h,p,g,y,x,E){if(E!==r){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}s.isRequired=s;function o(){return s}var c={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:e};return c.PropTypes=c,c},lm}var qv;function Nh(){return qv||(qv=1,am.exports=GT()()),am.exports}var Id={},Hv;function Kx(){if(Hv)return Id;Hv=1,Object.defineProperty(Id,"__esModule",{value:!0}),ig();var r=Sh(),e=n(r);function n(o){return o&&o.__esModule?o:{default:o}}var s={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(c){this.scroller=c,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(c,h){this.containers[c]=h},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var c=this,h=this.getHash();h?window.setTimeout(function(){c.scrollTo(h,!0),c.initialized=!0},10):this.initialized=!0},scrollTo:function(c,h){var p=this.scroller,g=p.get(c);if(g&&(h||c!==p.getActiveLink())){var y=this.containers[c]||document;p.scrollTo(c,{container:y})}},getHash:function(){return e.default.getHash()},changeHash:function(c,h){this.isInitialized()&&e.default.getHash()!==c&&e.default.updateHash(c,h)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Id.default=s,Id}var Gv;function og(){if(Gv)return Ed;Gv=1,Object.defineProperty(Ed,"__esModule",{value:!0});var r=Object.assign||function(L){for(var B=1;B<arguments.length;B++){var q=arguments[B];for(var X in q)Object.prototype.hasOwnProperty.call(q,X)&&(L[X]=q[X])}return L},e=(function(){function L(B,q){for(var X=0;X<q.length;X++){var ee=q[X];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(B,ee.key,ee)}}return function(B,q,X){return q&&L(B.prototype,q),X&&L(B,X),B}})(),n=Ei(),s=w(n),o=sg(),c=w(o),h=Ah(),p=w(h),g=Nh(),y=w(g),x=Kx(),E=w(x);function w(L){return L&&L.__esModule?L:{default:L}}function I(L,B){if(!(L instanceof B))throw new TypeError("Cannot call a class as a function")}function N(L,B){if(!L)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return B&&(typeof B=="object"||typeof B=="function")?B:L}function U(L,B){if(typeof B!="function"&&B!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof B);L.prototype=Object.create(B&&B.prototype,{constructor:{value:L,enumerable:!1,writable:!0,configurable:!0}}),B&&(Object.setPrototypeOf?Object.setPrototypeOf(L,B):L.__proto__=B)}var M={to:y.default.string.isRequired,containerId:y.default.string,container:y.default.object,activeClass:y.default.string,activeStyle:y.default.object,spy:y.default.bool,horizontal:y.default.bool,smooth:y.default.oneOfType([y.default.bool,y.default.string]),offset:y.default.number,delay:y.default.number,isDynamic:y.default.bool,onClick:y.default.func,duration:y.default.oneOfType([y.default.number,y.default.func]),absolute:y.default.bool,onSetActive:y.default.func,onSetInactive:y.default.func,ignoreCancelEvents:y.default.bool,hashSpy:y.default.bool,saveHashHistory:y.default.bool,spyThrottle:y.default.number};return Ed.default=function(L,B){var q=B||p.default,X=(function(ne){U(k,ne);function k(C){I(this,k);var j=N(this,(k.__proto__||Object.getPrototypeOf(k)).call(this,C));return ee.call(j),j.state={active:!1},j.beforeUnmountCallbacks=[],j}return e(k,[{key:"getScrollSpyContainer",value:function(){var j=this.props.containerId,O=this.props.container;return j&&!O?document.getElementById(j):O&&O.nodeType?O:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var j=this.getScrollSpyContainer();if(!c.default.isMounted(j)){var O=c.default.mount(j,this.props.spyThrottle);this.beforeUnmountCallbacks.push(O)}this.props.hashSpy&&(E.default.isMounted()||E.default.mount(q),E.default.mapContainer(this.props.to,j)),c.default.addSpyHandler(this.spyHandler,j),this.setState({container:j})}}},{key:"componentWillUnmount",value:function(){c.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(j){return j()})}},{key:"render",value:function(){var j="";this.state&&this.state.active?j=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():j=this.props.className;var O={};this.state&&this.state.active?O=r({},this.props.style,this.props.activeStyle):O=r({},this.props.style);var D=r({},this.props);for(var A in M)D.hasOwnProperty(A)&&delete D[A];return D.className=j,D.style=O,D.onClick=this.handleClick,s.default.createElement(L,D)}}]),k})(s.default.PureComponent),ee=function(){var k=this;this.scrollTo=function(C,j){q.scrollTo(C,r({},k.state,j))},this.handleClick=function(C){k.props.onClick&&k.props.onClick(C),C.stopPropagation&&C.stopPropagation(),C.preventDefault&&C.preventDefault(),k.scrollTo(k.props.to,k.props)},this.spyHandler=function(C,j){var O=k.getScrollSpyContainer();if(!(E.default.isMounted()&&!E.default.isInitialized())){var D=k.props.horizontal,A=k.props.to,T=null,re=void 0,xe=void 0;if(D){var Y=0,ue=0,ye=0;if(O.getBoundingClientRect){var Re=O.getBoundingClientRect();ye=Re.left}if(!T||k.props.isDynamic){if(T=q.get(A),!T)return;var z=T.getBoundingClientRect();Y=z.left-ye+C,ue=Y+z.width}var oe=C-k.props.offset;re=oe>=Math.floor(Y)&&oe<Math.floor(ue),xe=oe<Math.floor(Y)||oe>=Math.floor(ue)}else{var he=0,de=0,J=0;if(O.getBoundingClientRect){var pe=O.getBoundingClientRect();J=pe.top}if(!T||k.props.isDynamic){if(T=q.get(A),!T)return;var fe=T.getBoundingClientRect();he=fe.top-J+j,de=he+fe.height}var we=j-k.props.offset;re=we>=Math.floor(he)&&we<Math.floor(de),xe=we<Math.floor(he)||we>=Math.floor(de)}var ve=q.getActiveLink();if(xe){if(A===ve&&q.setActiveLink(void 0),k.props.hashSpy&&E.default.getHash()===A){var Ge=k.props.saveHashHistory,pt=Ge===void 0?!1:Ge;E.default.changeHash("",pt)}k.props.spy&&k.state.active&&(k.setState({active:!1}),k.props.onSetInactive&&k.props.onSetInactive(A,T))}if(re&&(ve!==A||k.state.active===!1)){q.setActiveLink(A);var Kt=k.props.saveHashHistory,tr=Kt===void 0?!1:Kt;k.props.hashSpy&&E.default.changeHash(A,tr),k.props.spy&&(k.setState({active:!0}),k.props.onSetActive&&k.props.onSetActive(A,T))}}}};return X.propTypes=M,X.defaultProps={offset:0},X},Ed}var Yv;function YT(){if(Yv)return bd;Yv=1,Object.defineProperty(bd,"__esModule",{value:!0});var r=Ei(),e=o(r),n=og(),s=o(n);function o(y){return y&&y.__esModule?y:{default:y}}function c(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")}function h(y,x){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:y}function p(y,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);y.prototype=Object.create(x&&x.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(y,x):y.__proto__=x)}var g=(function(y){p(x,y);function x(){var E,w,I,N;c(this,x);for(var U=arguments.length,M=Array(U),L=0;L<U;L++)M[L]=arguments[L];return N=(w=(I=h(this,(E=x.__proto__||Object.getPrototypeOf(x)).call.apply(E,[this].concat(M))),I),I.render=function(){return e.default.createElement("a",I.props,I.props.children)},w),h(I,N)}return x})(e.default.Component);return bd.default=(0,s.default)(g),bd}var jd={},$v;function $T(){if($v)return jd;$v=1,Object.defineProperty(jd,"__esModule",{value:!0});var r=(function(){function x(E,w){for(var I=0;I<w.length;I++){var N=w[I];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(E,N.key,N)}}return function(E,w,I){return w&&x(E.prototype,w),I&&x(E,I),E}})(),e=Ei(),n=c(e),s=og(),o=c(s);function c(x){return x&&x.__esModule?x:{default:x}}function h(x,E){if(!(x instanceof E))throw new TypeError("Cannot call a class as a function")}function p(x,E){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:x}function g(x,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);x.prototype=Object.create(E&&E.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(x,E):x.__proto__=E)}var y=(function(x){g(E,x);function E(){return h(this,E),p(this,(E.__proto__||Object.getPrototypeOf(E)).apply(this,arguments))}return r(E,[{key:"render",value:function(){return n.default.createElement("button",this.props,this.props.children)}}]),E})(n.default.Component);return jd.default=(0,o.default)(y),jd}var Dd={},Od={},Qv;function Wx(){if(Qv)return Od;Qv=1,Object.defineProperty(Od,"__esModule",{value:!0});var r=Object.assign||function(I){for(var N=1;N<arguments.length;N++){var U=arguments[N];for(var M in U)Object.prototype.hasOwnProperty.call(U,M)&&(I[M]=U[M])}return I},e=(function(){function I(N,U){for(var M=0;M<U.length;M++){var L=U[M];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(N,L.key,L)}}return function(N,U,M){return U&&I(N.prototype,U),M&&I(N,M),N}})(),n=Ei(),s=y(n),o=Zm();y(o);var c=Ah(),h=y(c),p=Nh(),g=y(p);function y(I){return I&&I.__esModule?I:{default:I}}function x(I,N){if(!(I instanceof N))throw new TypeError("Cannot call a class as a function")}function E(I,N){if(!I)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return N&&(typeof N=="object"||typeof N=="function")?N:I}function w(I,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof N);I.prototype=Object.create(N&&N.prototype,{constructor:{value:I,enumerable:!1,writable:!0,configurable:!0}}),N&&(Object.setPrototypeOf?Object.setPrototypeOf(I,N):I.__proto__=N)}return Od.default=function(I){var N=(function(U){w(M,U);function M(L){x(this,M);var B=E(this,(M.__proto__||Object.getPrototypeOf(M)).call(this,L));return B.childBindings={domNode:null},B}return e(M,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(B){this.props.name!==B.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;h.default.unregister(this.props.name)}},{key:"registerElems",value:function(B){h.default.register(B,this.childBindings.domNode)}},{key:"render",value:function(){return s.default.createElement(I,r({},this.props,{parentBindings:this.childBindings}))}}]),M})(s.default.Component);return N.propTypes={name:g.default.string,id:g.default.string},N},Od}var Kv;function QT(){if(Kv)return Dd;Kv=1,Object.defineProperty(Dd,"__esModule",{value:!0});var r=Object.assign||function(I){for(var N=1;N<arguments.length;N++){var U=arguments[N];for(var M in U)Object.prototype.hasOwnProperty.call(U,M)&&(I[M]=U[M])}return I},e=(function(){function I(N,U){for(var M=0;M<U.length;M++){var L=U[M];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(N,L.key,L)}}return function(N,U,M){return U&&I(N.prototype,U),M&&I(N,M),N}})(),n=Ei(),s=g(n),o=Wx(),c=g(o),h=Nh(),p=g(h);function g(I){return I&&I.__esModule?I:{default:I}}function y(I,N){if(!(I instanceof N))throw new TypeError("Cannot call a class as a function")}function x(I,N){if(!I)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return N&&(typeof N=="object"||typeof N=="function")?N:I}function E(I,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof N);I.prototype=Object.create(N&&N.prototype,{constructor:{value:I,enumerable:!1,writable:!0,configurable:!0}}),N&&(Object.setPrototypeOf?Object.setPrototypeOf(I,N):I.__proto__=N)}var w=(function(I){E(N,I);function N(){return y(this,N),x(this,(N.__proto__||Object.getPrototypeOf(N)).apply(this,arguments))}return e(N,[{key:"render",value:function(){var M=this,L=r({},this.props);return delete L.name,L.parentBindings&&delete L.parentBindings,s.default.createElement("div",r({},L,{ref:function(q){M.props.parentBindings.domNode=q}}),this.props.children)}}]),N})(s.default.Component);return w.propTypes={name:p.default.string,id:p.default.string},Dd.default=(0,c.default)(w),Dd}var cm,Wv;function KT(){if(Wv)return cm;Wv=1;var r=Object.assign||function(w){for(var I=1;I<arguments.length;I++){var N=arguments[I];for(var U in N)Object.prototype.hasOwnProperty.call(N,U)&&(w[U]=N[U])}return w},e=(function(){function w(I,N){for(var U=0;U<N.length;U++){var M=N[U];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(I,M.key,M)}}return function(I,N,U){return N&&w(I.prototype,N),U&&w(I,U),I}})();function n(w,I){if(!(w instanceof I))throw new TypeError("Cannot call a class as a function")}function s(w,I){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return I&&(typeof I=="object"||typeof I=="function")?I:w}function o(w,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);w.prototype=Object.create(I&&I.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(w,I):w.__proto__=I)}var c=Ei();Zm(),Sh();var h=sg(),p=Ah(),g=Nh(),y=Kx(),x={to:g.string.isRequired,containerId:g.string,container:g.object,activeClass:g.string,spy:g.bool,smooth:g.oneOfType([g.bool,g.string]),offset:g.number,delay:g.number,isDynamic:g.bool,onClick:g.func,duration:g.oneOfType([g.number,g.func]),absolute:g.bool,onSetActive:g.func,onSetInactive:g.func,ignoreCancelEvents:g.bool,hashSpy:g.bool,spyThrottle:g.number},E={Scroll:function(I,N){console.warn("Helpers.Scroll is deprecated since v1.7.0");var U=N||p,M=(function(B){o(q,B);function q(X){n(this,q);var ee=s(this,(q.__proto__||Object.getPrototypeOf(q)).call(this,X));return L.call(ee),ee.state={active:!1},ee}return e(q,[{key:"getScrollSpyContainer",value:function(){var ee=this.props.containerId,ne=this.props.container;return ee?document.getElementById(ee):ne&&ne.nodeType?ne:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var ee=this.getScrollSpyContainer();h.isMounted(ee)||h.mount(ee,this.props.spyThrottle),this.props.hashSpy&&(y.isMounted()||y.mount(U),y.mapContainer(this.props.to,ee)),this.props.spy&&h.addStateHandler(this.stateHandler),h.addSpyHandler(this.spyHandler,ee),this.setState({container:ee})}}},{key:"componentWillUnmount",value:function(){h.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var ee="";this.state&&this.state.active?ee=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():ee=this.props.className;var ne=r({},this.props);for(var k in x)ne.hasOwnProperty(k)&&delete ne[k];return ne.className=ee,ne.onClick=this.handleClick,c.createElement(I,ne)}}]),q})(c.Component),L=function(){var q=this;this.scrollTo=function(X,ee){U.scrollTo(X,r({},q.state,ee))},this.handleClick=function(X){q.props.onClick&&q.props.onClick(X),X.stopPropagation&&X.stopPropagation(),X.preventDefault&&X.preventDefault(),q.scrollTo(q.props.to,q.props)},this.stateHandler=function(){U.getActiveLink()!==q.props.to&&(q.state!==null&&q.state.active&&q.props.onSetInactive&&q.props.onSetInactive(),q.setState({active:!1}))},this.spyHandler=function(X){var ee=q.getScrollSpyContainer();if(!(y.isMounted()&&!y.isInitialized())){var ne=q.props.to,k=null,C=0,j=0,O=0;if(ee.getBoundingClientRect){var D=ee.getBoundingClientRect();O=D.top}if(!k||q.props.isDynamic){if(k=U.get(ne),!k)return;var A=k.getBoundingClientRect();C=A.top-O+X,j=C+A.height}var T=X-q.props.offset,re=T>=Math.floor(C)&&T<Math.floor(j),xe=T<Math.floor(C)||T>=Math.floor(j),Y=U.getActiveLink();if(xe)return ne===Y&&U.setActiveLink(void 0),q.props.hashSpy&&y.getHash()===ne&&y.changeHash(),q.props.spy&&q.state.active&&(q.setState({active:!1}),q.props.onSetInactive&&q.props.onSetInactive()),h.updateStates();if(re&&Y!==ne)return U.setActiveLink(ne),q.props.hashSpy&&y.changeHash(ne),q.props.spy&&(q.setState({active:!0}),q.props.onSetActive&&q.props.onSetActive(ne)),h.updateStates()}}};return M.propTypes=x,M.defaultProps={offset:0},M},Element:function(I){console.warn("Helpers.Element is deprecated since v1.7.0");var N=(function(U){o(M,U);function M(L){n(this,M);var B=s(this,(M.__proto__||Object.getPrototypeOf(M)).call(this,L));return B.childBindings={domNode:null},B}return e(M,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(B){this.props.name!==B.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;p.unregister(this.props.name)}},{key:"registerElems",value:function(B){p.register(B,this.childBindings.domNode)}},{key:"render",value:function(){return c.createElement(I,r({},this.props,{parentBindings:this.childBindings}))}}]),M})(c.Component);return N.propTypes={name:g.string,id:g.string},N}};return cm=E,cm}var Xv;function WT(){if(Xv)return yt;Xv=1,Object.defineProperty(yt,"__esModule",{value:!0}),yt.Helpers=yt.ScrollElement=yt.ScrollLink=yt.animateScroll=yt.scrollSpy=yt.Events=yt.scroller=yt.Element=yt.Button=yt.Link=void 0;var r=YT(),e=X(r),n=$T(),s=X(n),o=QT(),c=X(o),h=Ah(),p=X(h),g=ag(),y=X(g),x=sg(),E=X(x),w=Qx(),I=X(w),N=og(),U=X(N),M=Wx(),L=X(M),B=KT(),q=X(B);function X(ee){return ee&&ee.__esModule?ee:{default:ee}}return yt.Link=e.default,yt.Button=s.default,yt.Element=c.default,yt.scroller=p.default,yt.Events=y.default,yt.scrollSpy=E.default,yt.animateScroll=I.default,yt.ScrollLink=U.default,yt.ScrollElement=L.default,yt.Helpers=q.default,yt.default={Link:e.default,Button:s.default,Element:c.default,scroller:p.default,Events:y.default,scrollSpy:E.default,animateScroll:I.default,ScrollLink:U.default,ScrollElement:L.default,Helpers:q.default},yt}var Zn=WT();function lg(){return P.useEffect(()=>{const r=document.getElementById("hamburger"),e=document.getElementById("nav-links"),n=document.getElementById("close-btn"),s=()=>e.classList.add("active"),o=()=>e.classList.remove("active"),c=h=>{e.classList.contains("active")&&!e.contains(h.target)&&!r.contains(h.target)&&e.classList.remove("active")};return r.addEventListener("click",s),n.addEventListener("click",o),document.addEventListener("click",c),()=>{r.removeEventListener("click",s),n.removeEventListener("click",o),document.removeEventListener("click",c)}},[]),u.jsx("div",{className:"header",children:u.jsxs("nav",{className:"navbar",children:[u.jsx("h1",{children:"Gold Corps Inc"}),u.jsxs("div",{className:"hamburger",id:"hamburger",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]}),u.jsxs("div",{className:"nav-links",id:"nav-links",children:[u.jsx("button",{className:"close-btn",id:"close-btn",children:"×"}),u.jsx("div",{className:"search-container",children:u.jsx("input",{placeholder:"Search...",className:"search-bar",type:"search"})}),u.jsx(Zn.Link,{className:"a",to:"home",smooth:!0,duration:500,offset:-70,children:"Home"}),u.jsx(Zn.Link,{className:"a",to:"about",smooth:!0,duration:500,offset:-70,children:"About us"}),u.jsx(Zn.Link,{className:"a",to:"contact",smooth:!0,duration:500,offset:-70,children:"Contact us"}),u.jsx(Zn.Link,{className:"a",to:"services",smooth:!0,duration:500,offset:-70,children:"Our services"}),u.jsx(Zn.Link,{className:"a",to:"team",smooth:!0,duration:500,offset:-70,children:"Our team"}),u.jsx(Zn.Link,{className:"a",to:"testimonial",smooth:!0,duration:500,offset:-70,children:"Testimonial"}),u.jsx(ba,{className:"a",to:"/stock",children:"Stock prices"})]})]})})}const XT=""+new URL("image-1-Picsart-AiImageEnhancer-BcMqKlvr.jpeg",import.meta.url).href,ZT=""+new URL("image-2-BqTb_Qtz.jpeg",import.meta.url).href,JT=""+new URL("image-3-Mfy9IzQb.jpeg",import.meta.url).href,e3=""+new URL("image-4-BooAjJhm.jpeg",import.meta.url).href;function t3(){const r=[XT,ZT,JT,e3],[e,n]=P.useState(0);return P.useEffect(()=>{const s=setInterval(()=>{n(o=>(o+1)%r.length)},5e3);return()=>clearInterval(s)},[r.length]),u.jsxs("div",{className:"hero",children:[u.jsx("div",{className:"hero-slide active",style:{backgroundImage:`url(${r[e]})`,backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 1s ease-in-out"}}),u.jsxs("div",{className:"hero-overlay",children:[u.jsx("h2",{children:"Gold Corps - Your Premium Investment Partner"}),u.jsx("p",{children:"Empowering you to grow wealth with confidence."}),u.jsx(ba,{to:"/signup",children:u.jsx("button",{className:"btn btn1",children:"Signup"})}),u.jsx("button",{className:"btn",children:"Subscribe to our newsletter"})]})]})}var Xx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Zv=aa.createContext&&aa.createContext(Xx),n3=["attr","size","title"];function r3(r,e){if(r==null)return{};var n=i3(r,e),s,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(o=0;o<c.length;o++)s=c[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(n[s]=r[s])}return n}function i3(r,e){if(r==null)return{};var n={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;n[s]=r[s]}return n}function eh(){return eh=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},eh.apply(this,arguments)}function Jv(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,s)}return n}function th(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jv(Object(n),!0).forEach(function(s){s3(r,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):Jv(Object(n)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))})}return r}function s3(r,e,n){return e=a3(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function a3(r){var e=o3(r,"string");return typeof e=="symbol"?e:e+""}function o3(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var s=n.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Zx(r){return r&&r.map((e,n)=>aa.createElement(e.tag,th({key:n},e.attr),Zx(e.child)))}function Oe(r){return e=>aa.createElement(l3,eh({attr:th({},r.attr)},e),Zx(r.child))}function l3(r){var e=n=>{var{attr:s,size:o,title:c}=r,h=r3(r,n3),p=o||n.size||"1em",g;return n.className&&(g=n.className),r.className&&(g=(g?g+" ":"")+r.className),aa.createElement("svg",eh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,h,{className:g,style:th(th({color:r.color||n.color},n.style),r.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&aa.createElement("title",null,c),r.children)};return Zv!==void 0?aa.createElement(Zv.Consumer,null,n=>e(n)):e(Xx)}function c3(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M341.28 22.78L254 123.75l63.156-33.656 4.438-2.375 4.437 2.405 18.314 9.938-3.063-77.282zM129.814 46.563l24.375 130.407 88.718-47.282-113.094-83.125zM321.53 108.97L83.345 235.905 192.156 293.5l237.47-125.75-108.095-58.78zm42.75 44.686l25.595 13.03-197.313 103.94-66.875-35.688 25.344-13.407 41.532 22.19 171.72-90.064zm92.19 18.22l9.092 24.03 26.22-22.656-35.313-1.375zm-15.783 11.155L199.47 310.78l-5.782 83.376L465.75 249.344l-25.063-66.313zm-334.562 19.564L16.562 226.78l36.876 19.564 6.093-16.28 1.25-3.314 3.126-1.656 42.22-22.5zm-34.438 48.312l-28.812 77 131.844 70.156 6.155-89.375-109.188-57.78zm335.344 50.875l-174.25 92.75 54.907 103.44L325.5 358.093l142.47 26.625-60.94-82.94zm-300.717 81.064l-19.438 44.812L144 402.876l-37.688-20.032z"},child:[]}]})(r)}function u3(r){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(r)}function d3(r){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(r)}function h3(r){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(r)}function f3(r){return Oe({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(r)}function p3(r){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(r)}function m3(r){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(r)}function Jx(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(r)}function oa(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(r)}function Eo(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(r)}function e2(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(r)}function g3(r){return Oe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(r)}function y3(r){return Oe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(r)}function vc(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(r)}function e_(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(r)}function Ro(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"},child:[]}]})(r)}function v3(r){return Oe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(r)}function x3(r){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},child:[]}]})(r)}function oc(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(r)}function cg(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(r)}function nh(r){return Oe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(r)}function t_(r){return Oe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(r)}function _3(r){return Oe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(r)}function b3(r){return Oe({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"},child:[]}]})(r)}function n_(r){return Oe({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(r)}function E3(r){return Oe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(r)}function w3(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(r)}function T3(r){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(r)}function r_(r){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z"},child:[]}]})(r)}function lc(r){return Oe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"},child:[]}]})(r)}function S3(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(r)}function A3(r){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function i_(r){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"},child:[]}]})(r)}function s_(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"},child:[]}]})(r)}function cc(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(r)}function xc(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(r)}function a_(r){return Oe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"},child:[]}]})(r)}function o_(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"},child:[]}]})(r)}function N3(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},child:[]}]})(r)}function Sm(r){return Oe({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function R3(r){return Oe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"},child:[]}]})(r)}function C3(r){return Oe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function t2(r){return Oe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"},child:[]}]})(r)}function l_(r){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function la(r){return Oe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(r)}function I3(r){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(r)}function j3(){return u.jsx("section",{id:"about",className:"about-section",children:u.jsxs("div",{className:"about-container",children:[u.jsxs("div",{className:"about-block",children:[u.jsx(c3,{className:"about-icon"}),u.jsx("h2",{children:"Our Business"}),u.jsxs("p",{children:["Gold Corps stands at the pinnacle of global investment, bridging ",u.jsx("strong",{children:"gold, copper, agriculture, and cryptocurrency"})," into one unmatched portfolio. We operate in the world’s most lucrative and resource-rich regions, strategically positioned for ",u.jsx("strong",{children:"maximum profitability and sustainable impact"}),". Our assets are not just high-margin — they are ",u.jsx("strong",{children:"legacy-grade"}),", designed to deliver value for decades."]})]}),u.jsxs("div",{className:"about-block",children:[u.jsx(oa,{className:"about-icon"}),u.jsx("h2",{children:"Our Strategy"}),u.jsxs("p",{children:["We think beyond quarters — ",u.jsx("strong",{children:"we think in generations"}),". Every move is backed by deep market intelligence, cutting-edge technology, and a relentless pursuit of excellence. From ",u.jsx("strong",{children:"exploring new mining frontiers"}),"to ",u.jsx("strong",{children:"pioneering next-generation crypto opportunities"}),", Goldvest invests where innovation meets stability. We build wealth that lasts, while ensuring our growth model is ",u.jsx("strong",{children:"ethical, sustainable, and future-proof"}),"."]})]}),u.jsxs("div",{className:"about-block",children:[u.jsx(la,{className:"about-icon"}),u.jsx("h2",{children:"Our Purpose"}),u.jsxs("p",{children:["Gold Corps is on a mission to become ",u.jsx("strong",{children:"the world’s most respected investment powerhouse"})," — measured not just by profits, but by the trust and prosperity we bring to our stakeholders. We are led by visionaries, powered by innovators, and grounded in principles that protect both people and the planet."]}),u.jsx("blockquote",{children:"Own the finest assets. Employ the brightest minds. Deliver unmatched returns. Leave a legacy worth its weight in gold."})]})]})})}const D3=[{icon:u.jsx(la,{}),label:"Trusted Users",value:3e3,sub:"Investors Worldwide",desc:"Thousands of satisfied clients entrust us with their gold, copper, and diversified investments every day."},{icon:u.jsx(m3,{}),label:"Employees",value:5e3,sub:"Global Workforce",desc:"Our dedicated professionals operate at the highest standards, driving innovation and performance."},{icon:u.jsx(b3,{}),label:"Countries",value:6,sub:"Active Markets",desc:"A truly global footprint, giving investors exposure to the world’s most lucrative mining and trading hubs."},{icon:u.jsx(oa,{}),label:"Growth",value:80,sub:"Annual Increase (%)",desc:"Sustained double-digit growth powered by strategic expansion and long-term asset value creation."}];function O3(){return P.useEffect(()=>{document.querySelectorAll(".stat-value").forEach(e=>{const n=+e.getAttribute("data-target");let s=0;const o=()=>{const c=n/60;s<n?(s+=c,e.innerText=Math.ceil(s)+(e.dataset.percent?"%":"+"),setTimeout(o,20)):e.innerText=n+(e.dataset.percent?"%":"+")};o()})},[]),u.jsxs("section",{className:"stats-section",id:"services",children:[u.jsxs("div",{className:"stats-header",children:[u.jsx("h1",{className:"stats-title",children:"A Legacy of Trust. A Future of Growth."}),u.jsxs("p",{className:"stats-intro",children:["At ",u.jsx("span",{className:"gold-text",children:"Gold Corps"}),", we don’t just invest — we shape industries. From precious metals and global commodities to cutting-edge crypto and sustainable agriculture, we are redefining wealth creation on a global scale. Our unmatched portfolio and elite team ensure exceptional returns for investors while building lasting value for communities worldwide."]})]}),u.jsx("div",{className:"stats-container",children:D3.map((r,e)=>u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon",children:r.icon}),u.jsx("h2",{className:"stat-value shimmer","data-target":r.value,"data-percent":r.label==="Growth"?"true":"",children:"0"}),u.jsx("p",{className:"stat-label",children:r.label}),u.jsx("span",{className:"stat-sub",children:r.sub}),u.jsx("p",{className:"stat-desc",children:r.desc})]},e))})]})}const k3=[{id:1,name:"BEGINNERS PLAN",profitPercent:5,min:200,max:19900,duration:7,description:"Perfect for beginners starting with gold investment",features:["Low minimum investment","Quick returns","Ideal for newcomers","24/7 Support"]},{id:2,name:"MASTERS PLAN",profitPercent:30,min:2e4,max:99999,duration:14,description:"Ideal for consistent wealth accumulation",features:["Higher returns","Medium-term investment","Portfolio tracking","Priority support"]},{id:3,name:"PREMIUM PLAN",profitPercent:50,min:1e6,max:1/0,duration:30,description:"For premium investors building a substantial portfolio",features:["Maximum returns","Long-term growth","VIP support","Portfolio management","Dedicated advisor"]}],M3=()=>{const r=xs(),[e,n]=P.useState(null),s=o=>{n(o),sessionStorage.setItem("selectedGoldPlan",JSON.stringify(o)),r("/signup")};return u.jsxs("section",{className:"gold-plans-section",id:"investment-plans",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{children:"Exclusive Gold Investment Plans"}),u.jsx("p",{children:"Build your legacy with our premium gold investment opportunities"})]}),u.jsx("div",{className:"gold-plans-container",children:k3.map(o=>u.jsxs("div",{className:"gold-plan-card",children:[u.jsxs("div",{className:"plan-badge",children:[u.jsx(Ro,{className:"plan-icon"}),u.jsxs("span",{className:"profit-badge",children:[o.profitPercent,"% Returns"]})]}),u.jsx("h3",{className:"plan-title",children:o.name}),u.jsxs("div",{className:"plan-price-range",children:["$",o.min.toLocaleString()," - ",o.max===1/0?"Custom":`$${o.max.toLocaleString()}`]}),u.jsxs("div",{className:"plan-duration",children:[u.jsx("span",{className:"duration-label",children:"Term:"})," ",o.duration," days"]}),u.jsx("p",{className:"plan-description",children:o.description}),u.jsx("div",{className:"plan-actions",children:u.jsxs("button",{className:"btn-primary plan-select-btn",onClick:()=>s(o),children:["Start Investing ",u.jsx(d3,{})]})})]},o.id))}),u.jsx("div",{className:"plans-footer",children:u.jsx("p",{children:"💎 All investments are backed by physical gold reserves"})})]}),u.jsx("style",{jsx:!0,children:`
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
      `})]})},P3=[{icon:u.jsx(la,{}),label:"Trusted Investors",value:3e3,suffix:"+",sub:"Global investor community placing trust in our strategy",desc:"Thousands of investors choose Gold corps for long-term capital growth, risk-controlled exposure, and diversified access across assets."},{icon:u.jsx(oa,{}),label:"Employees",value:5e3,suffix:"",sub:"Experienced professionals powering global operations",desc:"A world-class team of geologists, traders, engineers and compliance experts committed to delivering measurable results."},{icon:u.jsx(n_,{}),label:"Countries",value:6,suffix:"+",sub:"Strategic, jurisdiction-diverse footprint",desc:"Operations and partnerships across high-potential regions to capture premium resources and market access."},{icon:u.jsx(oa,{}),label:"Annual Growth",value:80,suffix:"%",sub:"Sustained expansion through disciplined execution",desc:"Strong historical performance driven by portfolio quality and careful capital allocation."}],L3=["Global Mining Consortium","Frontier Capital Partners","AgriGrowth International","CryptoBridge Labs","Sustainable Resources Alliance"],ra=[{quote:"Gold corps helped me diversify into real assets and crypto with clarity and confidence. Their team is responsive and deeply knowledgeable.",name:"Maria J. Finck",title:"Business Owner"},{quote:"From first contact to steady returns, Gold corps delivered tangible results. Their approach is conservative where it must be, bold where it counts.",name:"Hajime Omuro",title:"Operations Manager"},{quote:"I recommend Gold corps for any investor looking to combine sustainability with performance—transparent and trustworthy.",name:"James G. Wyatt",title:"Entrepreneur"}];function V3(r=".stat-value",e=1200){P.useEffect(()=>{const n=document.querySelectorAll(r);n.length&&n.forEach(s=>{const o=parseFloat(s.getAttribute("data-target"))||0,c=s.getAttribute("data-suffix")||"",h=performance.now(),p=g=>{const y=Math.min((g-h)/e,1),x=Math.floor(y*o);s.textContent=`${x.toLocaleString()}${c}`,y<1?requestAnimationFrame(p):s.textContent=`${o.toLocaleString()}${c}`};requestAnimationFrame(p)})},[r,e])}function U3(){const[r,e]=P.useState(0);P.useEffect(()=>{const c=setInterval(()=>e(h=>(h+1)%ra.length),6e3);return()=>clearInterval(c)},[]),V3(".stat-value",1200);const[n,s]=P.useState(""),o=c=>{c.preventDefault(),alert(`Thanks — we'll reach out to ${n}`),s("")};return u.jsxs("main",{className:"gold-landing",children:[u.jsx(M3,{}),u.jsx("section",{className:"partners-section",id:"about",children:u.jsxs("div",{className:"container",children:[u.jsxs("h2",{children:[u.jsx(f3,{className:"icon"})," Partner Companies & Recognitions"]}),u.jsx("p",{className:"muted",children:"Gold corps is recognized for innovation, transparency, and bridging traditional finance with the digital future. Our partners and award bodies span investment, sustainability and technology sectors."}),u.jsx("ul",{className:"partner-list",children:L3.map((c,h)=>u.jsxs("li",{className:"partner-item",children:[u.jsx("span",{className:"dot"})," ",c]},h))})]})}),u.jsx("section",{className:"why-section",id:"services",children:u.jsxs("div",{className:"container split",children:[u.jsxs("div",{className:"col",children:[u.jsxs("h2",{children:[u.jsx(E3,{className:"icon"})," Why Choose Gold corps"]}),u.jsx("p",{className:"muted",children:"We combine disciplined capital allocation, deep technical knowledge, and a relentless focus on risk management — all aimed at creating durable capital appreciation and measurable social benefit."}),u.jsxs("div",{className:"features-grid",children:[u.jsxs("div",{className:"feature",children:[u.jsx("h3",{children:"Tailored Solutions"}),u.jsx("p",{children:"Personalised investment strategies aligned with your objectives and timeline."})]}),u.jsxs("div",{className:"feature",children:[u.jsx("h3",{children:"Long-term Partnership"}),u.jsx("p",{children:"We invest alongside our clients and prioritize stability through cycles."})]}),u.jsxs("div",{className:"feature",children:[u.jsx("h3",{children:"Active Opportunity Sourcing"}),u.jsx("p",{children:"Proprietary pipelines and global partnerships deliver differentiated deal flow."})]}),u.jsxs("div",{className:"feature",children:[u.jsx("h3",{children:"24/7 Investor Support"}),u.jsx("p",{children:"Dedicated teams that act decisively whenever the market presents opportunity or risk."})]})]})]}),u.jsxs("aside",{className:"col panel",children:[u.jsx("h3",{children:"Tailored for You"}),u.jsx("p",{children:"The deeper we understand your goals and constraints, the smarter we can allocate capital on your behalf — harvesting superior returns while managing downside exposure."}),u.jsxs("div",{className:"panel-list",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"In Your Corner"}),u.jsx("p",{children:"We stand with investors through market cycles — protection and growth combined."})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"We Do the Work"}),u.jsx("p",{children:"Expert media buying and deal execution so your capital works efficiently."})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"Round-the-clock"}),u.jsx("p",{children:"Support across timezones and fast response for critical needs."})]})]})]})]})}),u.jsx("section",{className:"stats-section",id:"team",children:u.jsxs("div",{className:"container",children:[u.jsxs("h2",{children:[u.jsx(n_,{className:"icon"})," Key Metrics & Performance"]}),u.jsx("p",{className:"muted",children:"Performance that proves our strategy — clear metrics, transparent reporting."}),u.jsx("div",{className:"stats-grid",children:P3.map((c,h)=>u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon",children:c.icon}),u.jsx("div",{className:"stat-value shimmer","data-target":c.value,"data-suffix":c.suffix,"aria-label":`${c.value}${c.suffix}`,children:"0"}),u.jsx("div",{className:"stat-label",children:c.label}),u.jsx("div",{className:"stat-sub",children:c.sub}),u.jsx("div",{className:"stat-desc muted",children:c.desc})]},h))})]})}),u.jsx("header",{className:"hero-section",id:"home",children:u.jsxs("div",{className:"hero-inner",children:[u.jsx("h1",{className:"hero-title",children:"Gold Corps — Building Enduring Wealth Across Gold, Copper, Agriculture & Crypto"}),u.jsx("p",{className:"hero-sub",children:"Trusted by thousands across six countries, we blend resource expertise, trading precision, and sustainable practices to generate high-quality, long-term returns."}),u.jsx("div",{className:"hero-cta",children:u.jsxs("button",{className:"btn btn-outline",children:[u.jsx(A3,{})," Watch Overview"]})}),u.jsxs("div",{className:"hero-stats",children:[u.jsxs("div",{className:"stat-inline",children:[u.jsx("span",{className:"big",children:"6+"}),u.jsx("span",{className:"label",children:"Countries"})]}),u.jsxs("div",{className:"stat-inline",children:[u.jsx("span",{className:"big",children:"3,000+"}),u.jsx("span",{className:"label",children:"Investors"})]}),u.jsxs("div",{className:"stat-inline",children:[u.jsx("span",{className:"big",children:"80%"}),u.jsx("span",{className:"label",children:"Recent Growth"})]})]})]})}),u.jsx("section",{className:"miners-section",children:u.jsxs("div",{className:"container split",children:[u.jsxs("div",{className:"col",children:[u.jsx("h2",{children:"Our Miners — Reliability & Consistency"}),u.jsx("p",{className:"muted",children:"Since 2022, our mining and operations teams have consistently met investor obligations and optimized output across multiple sites."}),u.jsxs("ul",{className:"miner-list",children:[u.jsxs("li",{children:[u.jsx("strong",{children:"Operational Excellence"})," — Rigid maintenance and safety regimes ensure uptime and reliability."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Local Partnerships"})," — Working with communities and regulators to ensure sustainable outcomes."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Transparent Payments"})," — Reliable payouts and investor reporting are built into our processes."]})]})]}),u.jsxs("aside",{className:"col panel",children:[u.jsx("h3",{children:"Geographic Reach"}),u.jsxs("div",{className:"geo-grid",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"Latham"}),u.jsx("span",{className:"muted",children:" — Headquarters"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"Africa"}),u.jsx("span",{className:"muted",children:" — Resource operations"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"Asia"}),u.jsx("span",{className:"muted",children:" — Development & trading"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"Europe"}),u.jsx("span",{className:"muted",children:" — Finance & compliance"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"CIS"}),u.jsx("span",{className:"muted",children:" — Strategic partnerships"})]})]})]})]})}),u.jsx("section",{className:"testimonials-section",id:"testimonial",children:u.jsxs("div",{className:"container",children:[u.jsxs("h2",{children:[u.jsx(la,{className:"icon"})," Investor Testimonials"]}),u.jsxs("div",{className:"test-carousel",children:[u.jsx("button",{className:"carousel-arrow left",onClick:()=>e(c=>(c-1+ra.length)%ra.length),"aria-label":"Previous testimonial",children:u.jsx(g3,{})}),u.jsxs("article",{className:"testimonial-card","aria-live":"polite",children:[u.jsxs("blockquote",{children:["“",ra[r].quote,"”"]}),u.jsxs("cite",{children:["— ",ra[r].name,", ",u.jsx("span",{className:"muted",children:ra[r].title})]})]}),u.jsx("button",{className:"carousel-arrow right",onClick:()=>e(c=>(c+1)%ra.length),"aria-label":"Next testimonial",children:u.jsx(y3,{})})]})]})}),u.jsx("section",{className:"cta-section",id:"contact",children:u.jsxs("div",{className:"container cta-panel",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Let's Work Together"}),u.jsx("p",{className:"muted",children:"Our sustainability-driven business plan blends responsible mining, ethical trading, and long-term investor value. Join a select group of investors building something that lasts."})]}),u.jsxs("form",{className:"cta-form",onSubmit:o,children:[u.jsx("label",{htmlFor:"email",className:"visually-hidden",children:"Email address"}),u.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",value:n,required:!0,onChange:c=>s(c.target.value)}),u.jsx("button",{className:"btn btn-primary",type:"submit",children:"Get a Quote"})]})]})}),u.jsxs("footer",{className:"site-footer",children:[u.jsxs("div",{className:"container footer-grid",children:[u.jsxs("div",{children:[u.jsx("h4",{children:"Gold corps"}),u.jsx("p",{className:"muted small",children:"Multi-asset investing across gold, copper, agriculture & crypto."})]}),u.jsxs("div",{children:[u.jsx("h5",{children:"Company"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(Zn.Link,{to:"home",smooth:!0,duration:600,children:"Home"})}),u.jsx("li",{children:u.jsx(Zn.Link,{to:"about",smooth:!0,duration:600,children:"About"})}),u.jsx("li",{children:u.jsx(Zn.Link,{to:"services",smooth:!0,duration:600,children:"Services"})}),u.jsx("li",{children:u.jsx(Zn.Link,{to:"team",smooth:!0,duration:600,children:"Team"})}),u.jsx("li",{children:u.jsx(Zn.Link,{to:"testimonial",smooth:!0,duration:600,children:"Testimonials"})}),u.jsx("li",{children:u.jsx(Zn.Link,{to:"contact",smooth:!0,duration:600,children:"Contact"})})]})]}),u.jsx("div",{})]}),u.jsx("div",{className:"footer-bottom",children:u.jsxs("small",{children:["© ",new Date().getFullYear()," Gold corps. All rights reserved."]})})]})]})}const z3=()=>{};var n2={};/**
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
 */const c_=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},B3=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];e[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],h=r[n++],p=r[n++],g=((o&7)<<18|(c&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const c=r[n++],h=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},u_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],h=o+1<r.length,p=h?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,x=c>>2,E=(c&3)<<4|p>>4;let w=(p&15)<<2|y>>6,I=y&63;g||(I=64,h||(w=64)),s.push(n[x],n[E],n[w],n[I])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(c_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):B3(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],p=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const E=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||p==null||y==null||E==null)throw new F3;const w=c<<2|p>>4;if(s.push(w),y!==64){const I=p<<4&240|y>>2;if(s.push(I),E!==64){const N=y<<6&192|E;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class F3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q3=function(r){const e=c_(r);return u_.encodeByteArray(e,!0)},rh=function(r){return q3(r).replace(/\./g,"")},d_=function(r){try{return u_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function H3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const G3=()=>H3().__FIREBASE_DEFAULTS__,Y3=()=>{if(typeof process>"u"||typeof n2>"u")return;const r=n2.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},$3=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&d_(r[1]);return e&&JSON.parse(e)},Rh=()=>{try{return z3()||G3()||Y3()||$3()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},h_=r=>Rh()?.emulatorHosts?.[r],Q3=r=>{const e=h_(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},f_=()=>Rh()?.config,p_=r=>Rh()?.[`_${r}`];/**
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
 */class K3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Lo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function m_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function W3(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[rh(JSON.stringify(n)),rh(JSON.stringify(h)),""].join(".")}const uc={};function X3(){const r={prod:[],emulator:[]};for(const e of Object.keys(uc))uc[e]?r.emulator.push(e):r.prod.push(e);return r}function Z3(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let r2=!1;function g_(r,e){if(typeof window>"u"||typeof document>"u"||!Lo(window.location.host)||uc[r]===e||uc[r]||r2)return;uc[r]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",c=X3().prod.length>0;function h(){const w=document.getElementById(s);w&&w.remove()}function p(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function g(w,I){w.setAttribute("width","24"),w.setAttribute("id",I),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function y(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{r2=!0,h()},w}function x(w,I){w.setAttribute("id",I),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function E(){const w=Z3(s),I=n("text"),N=document.getElementById(I)||document.createElement("span"),U=n("learnmore"),M=document.getElementById(U)||document.createElement("a"),L=n("preprendIcon"),B=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const q=w.element;p(q),x(M,U);const X=y();g(B,L),q.append(B,N,M,X),document.body.appendChild(q)}c?(N.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function J3(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function eS(){const r=Rh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nS(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function rS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iS(){const r=dn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function sS(){return!eS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aS(){try{return typeof indexedDB=="object"}catch{return!1}}function oS(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const lS="FirebaseError";class Ti extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lS,Object.setPrototypeOf(this,Ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pc.prototype.create)}}class Pc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?cS(c,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Ti(o,p,s)}}function cS(r,e){return r.replace(uS,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const uS=/\{\$([^}]+)}/g;function dS(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function da(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const c=r[o],h=e[o];if(i2(c)&&i2(h)){if(!da(c,h))return!1}else if(c!==h)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function i2(r){return r!==null&&typeof r=="object"}/**
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
 */function Lc(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function tc(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,c]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function nc(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function hS(r,e){const n=new fS(r,e);return n.subscribe.bind(n)}class fS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");pS(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=um),o.error===void 0&&(o.error=um),o.complete===void 0&&(o.complete=um);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pS(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function um(){}/**
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
 */const ia="[DEFAULT]";/**
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
 */class mS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new K3;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yS(e))try{this.getOrInitializeService({instanceIdentifier:ia})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(e=ia){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ia){return this.instances.has(e)}getOptions(e=ia){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&h.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&e(c,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ia){return this.component?this.component.multipleInstances?e:ia:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gS(r){return r===ia?void 0:r}function yS(r){return r.instantiationMode==="EAGER"}/**
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
 */class vS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Fe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Fe||(Fe={}));const xS={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},_S=Fe.INFO,bS={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},ES=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=bS[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ug{constructor(e){this.name=e,this._logLevel=_S,this._logHandler=ES,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const wS=(r,e)=>e.some(n=>r instanceof n);let s2,a2;function TS(){return s2||(s2=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SS(){return a2||(a2=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const y_=new WeakMap,Am=new WeakMap,v_=new WeakMap,dm=new WeakMap,dg=new WeakMap;function AS(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",h)},c=()=>{n(os(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&y_.set(n,r)}).catch(()=>{}),dg.set(e,r),e}function NS(r){if(Am.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",h),r.removeEventListener("abort",h)},c=()=>{n(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",h),r.addEventListener("abort",h)});Am.set(r,e)}let Nm={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Am.get(r);if(e==="objectStoreNames")return r.objectStoreNames||v_.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return os(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function RS(r){Nm=r(Nm)}function CS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(hm(this),e,...n);return v_.set(s,e.sort?e.sort():[e]),os(s)}:SS().includes(r)?function(...e){return r.apply(hm(this),e),os(y_.get(this))}:function(...e){return os(r.apply(hm(this),e))}}function IS(r){return typeof r=="function"?CS(r):(r instanceof IDBTransaction&&NS(r),wS(r,TS())?new Proxy(r,Nm):r)}function os(r){if(r instanceof IDBRequest)return AS(r);if(dm.has(r))return dm.get(r);const e=IS(r);return e!==r&&(dm.set(r,e),dg.set(e,r)),e}const hm=r=>dg.get(r);function jS(r,e,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const h=indexedDB.open(r,e),p=os(h);return s&&h.addEventListener("upgradeneeded",g=>{s(os(h.result),g.oldVersion,g.newVersion,os(h.transaction),g)}),n&&h.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{c&&g.addEventListener("close",()=>c()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const DS=["get","getKey","getAll","getAllKeys","count"],OS=["put","add","delete","clear"],fm=new Map;function o2(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(fm.get(e))return fm.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=OS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||DS.includes(n)))return;const c=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),o&&g.done]))[0]};return fm.set(e,c),c}RS(r=>({...r,get:(e,n,s)=>o2(e,n)||r.get(e,n,s),has:(e,n)=>!!o2(e,n)||r.has(e,n)}));/**
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
 */class kS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function MS(r){return r.getComponent()?.type==="VERSION"}const Rm="@firebase/app",l2="0.14.1";/**
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
 */const yi=new ug("@firebase/app"),PS="@firebase/app-compat",LS="@firebase/analytics-compat",VS="@firebase/analytics",US="@firebase/app-check-compat",zS="@firebase/app-check",BS="@firebase/auth",FS="@firebase/auth-compat",qS="@firebase/database",HS="@firebase/data-connect",GS="@firebase/database-compat",YS="@firebase/functions",$S="@firebase/functions-compat",QS="@firebase/installations",KS="@firebase/installations-compat",WS="@firebase/messaging",XS="@firebase/messaging-compat",ZS="@firebase/performance",JS="@firebase/performance-compat",e6="@firebase/remote-config",t6="@firebase/remote-config-compat",n6="@firebase/storage",r6="@firebase/storage-compat",i6="@firebase/firestore",s6="@firebase/ai",a6="@firebase/firestore-compat",o6="firebase",l6="12.1.0";/**
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
 */const Cm="[DEFAULT]",c6={[Rm]:"fire-core",[PS]:"fire-core-compat",[VS]:"fire-analytics",[LS]:"fire-analytics-compat",[zS]:"fire-app-check",[US]:"fire-app-check-compat",[BS]:"fire-auth",[FS]:"fire-auth-compat",[qS]:"fire-rtdb",[HS]:"fire-data-connect",[GS]:"fire-rtdb-compat",[YS]:"fire-fn",[$S]:"fire-fn-compat",[QS]:"fire-iid",[KS]:"fire-iid-compat",[WS]:"fire-fcm",[XS]:"fire-fcm-compat",[ZS]:"fire-perf",[JS]:"fire-perf-compat",[e6]:"fire-rc",[t6]:"fire-rc-compat",[n6]:"fire-gcs",[r6]:"fire-gcs-compat",[i6]:"fire-fst",[a6]:"fire-fst-compat",[s6]:"fire-vertex","fire-js":"fire-js",[o6]:"fire-js-all"};/**
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
 */const ih=new Map,u6=new Map,Im=new Map;function c2(r,e){try{r.container.addComponent(e)}catch(n){yi.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Co(r){const e=r.name;if(Im.has(e))return yi.debug(`There were multiple attempts to register component ${e}.`),!1;Im.set(e,r);for(const n of ih.values())c2(n,r);for(const n of u6.values())c2(n,r);return!0}function hg(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Jn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const d6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ls=new Pc("app","Firebase",d6);/**
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
 */class h6{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ha("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ls.create("app-deleted",{appName:this._name})}}/**
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
 */const Vo=l6;function x_(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:Cm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ls.create("bad-app-name",{appName:String(o)});if(n||(n=f_()),!n)throw ls.create("no-options");const c=ih.get(o);if(c){if(da(n,c.options)&&da(s,c.config))return c;throw ls.create("duplicate-app",{appName:o})}const h=new vS(o);for(const g of Im.values())h.addComponent(g);const p=new h6(n,s,h);return ih.set(o,p),p}function __(r=Cm){const e=ih.get(r);if(!e&&r===Cm&&f_())return x_();if(!e)throw ls.create("no-app",{appName:r});return e}function cs(r,e,n){let s=c6[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yi.warn(h.join(" "));return}Co(new ha(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const f6="firebase-heartbeat-database",p6=1,_c="firebase-heartbeat-store";let pm=null;function b_(){return pm||(pm=jS(f6,p6,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(_c)}catch(n){console.warn(n)}}}}).catch(r=>{throw ls.create("idb-open",{originalErrorMessage:r.message})})),pm}async function m6(r){try{const n=(await b_()).transaction(_c),s=await n.objectStore(_c).get(E_(r));return await n.done,s}catch(e){if(e instanceof Ti)yi.warn(e.message);else{const n=ls.create("idb-get",{originalErrorMessage:e?.message});yi.warn(n.message)}}}async function u2(r,e){try{const s=(await b_()).transaction(_c,"readwrite");await s.objectStore(_c).put(e,E_(r)),await s.done}catch(n){if(n instanceof Ti)yi.warn(n.message);else{const s=ls.create("idb-set",{originalErrorMessage:n?.message});yi.warn(s.message)}}}function E_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const g6=1024,y6=30;class v6{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _6(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=d2();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>y6){const o=b6(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){yi.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=d2(),{heartbeatsToSend:n,unsentEntries:s}=x6(this._heartbeatsCache.heartbeats),o=rh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return yi.warn(e),""}}}function d2(){return new Date().toISOString().substring(0,10)}function x6(r,e=g6){const n=[];let s=r.slice();for(const o of r){const c=n.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),h2(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),h2(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _6{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aS()?oS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await m6(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return u2(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return u2(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function h2(r){return rh(JSON.stringify({version:2,heartbeats:r})).length}function b6(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function E6(r){Co(new ha("platform-logger",e=>new kS(e),"PRIVATE")),Co(new ha("heartbeat",e=>new v6(e),"PRIVATE")),cs(Rm,l2,r),cs(Rm,l2,"esm2020"),cs("fire-js","")}E6("");function w_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w6=w_,T_=new Pc("auth","Firebase",w_());/**
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
 */const sh=new ug("@firebase/auth");function T6(r,...e){sh.logLevel<=Fe.WARN&&sh.warn(`Auth (${Vo}): ${r}`,...e)}function qd(r,...e){sh.logLevel<=Fe.ERROR&&sh.error(`Auth (${Vo}): ${r}`,...e)}/**
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
 */function ur(r,...e){throw fg(r,...e)}function Ir(r,...e){return fg(r,...e)}function S_(r,e,n){const s={...w6(),[e]:n};return new Pc("auth","Firebase",s).create(e,{appName:r.name})}function fi(r){return S_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fg(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return T_.create(r,...e)}function Ie(r,e,...n){if(!r)throw fg(e,...n)}function ui(r){const e="INTERNAL ASSERTION FAILED: "+r;throw qd(e),new Error(e)}function vi(r,e){r||ui(e)}/**
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
 */function jm(){return typeof self<"u"&&self.location?.href||""}function S6(){return f2()==="http:"||f2()==="https:"}function f2(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function A6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S6()||nS()||"connection"in navigator)?navigator.onLine:!0}function N6(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Vc{constructor(e,n){this.shortDelay=e,this.longDelay=n,vi(n>e,"Short delay should be less than long delay!"),this.isMobile=J3()||rS()}get(){return A6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pg(r,e){vi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class A_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ui("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ui("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ui("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const R6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const C6=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],I6=new Vc(3e4,6e4);function Si(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ai(r,e,n,s,o={}){return N_(r,o,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const p=Lc({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:g,...c};return tS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Lo(r.emulatorConfig.host)&&(y.credentials="include"),A_.fetch()(await R_(r,r.config.apiHost,n,p),y)})}async function N_(r,e,n){r._canInitEmulator=!1;const s={...R6,...e};try{const o=new D6(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw kd(r,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const p=c.ok?h.errorMessage:h.error.message,[g,y]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw kd(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw kd(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw kd(r,"user-disabled",h);const x=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw S_(r,x,y);ur(r,x)}}catch(o){if(o instanceof Ti)throw o;ur(r,"network-request-failed",{message:String(o)})}}async function Uc(r,e,n,s,o={}){const c=await Ai(r,e,n,s,o);return"mfaPendingCredential"in c&&ur(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function R_(r,e,n,s){const o=`${e}${n}?${s}`,c=r,h=c.config.emulator?pg(r.config,o):`${r.config.apiScheme}://${o}`;return C6.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function j6(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class D6{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ir(this.auth,"network-request-failed")),I6.get())})}}function kd(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Ir(r,e,s);return o.customData._tokenResponse=n,o}function p2(r){return r!==void 0&&r.enterprise!==void 0}class O6{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return j6(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function k6(r,e){return Ai(r,"GET","/v2/recaptchaConfig",Si(r,e))}/**
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
 */async function M6(r,e){return Ai(r,"POST","/v1/accounts:delete",e)}async function ah(r,e){return Ai(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function dc(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P6(r,e=!1){const n=Rt(r),s=await n.getIdToken(e),o=mg(s);Ie(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c?.sign_in_provider;return{claims:o,token:s,authTime:dc(mm(o.auth_time)),issuedAtTime:dc(mm(o.iat)),expirationTime:dc(mm(o.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function mm(r){return Number(r)*1e3}function mg(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return qd("JWT malformed, contained fewer than 3 sections"),null;try{const o=d_(n);return o?JSON.parse(o):(qd("Failed to decode base64 JWT payload"),null)}catch(o){return qd("Caught error parsing JWT payload as JSON",o?.toString()),null}}function m2(r){const e=mg(r);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bc(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ti&&L6(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function L6({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class V6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=dc(this.lastLoginAt),this.creationTime=dc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oh(r){const e=r.auth,n=await r.getIdToken(),s=await bc(r,ah(e,{idToken:n}));Ie(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const c=o.providerUserInfo?.length?C_(o.providerUserInfo):[],h=z6(r.providerData,c),p=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!h?.length,y=p?g:!1,x={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Dm(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,x)}async function U6(r){const e=Rt(r);await oh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function z6(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function C_(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function B6(r,e){const n=await N_(r,{},async()=>{const s=Lc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,h=await R_(r,o,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&Lo(r.emulatorConfig.host)&&(g.credentials="include"),A_.fetch()(h,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function F6(r,e){return Ai(r,"POST","/v2/accounts:revokeToken",Si(r,e))}/**
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
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):m2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const n=m2(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await B6(e,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,h=new wo;return s&&(Ie(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Ie(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(Ie(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return ui("not implemented")}}/**
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
 */function ts(r,e){Ie(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class lr{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new V6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Dm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await bc(this,this.stsTokenManager.getToken(this.auth,e));return Ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return P6(this,e)}reload(){return U6(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await oh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jn(this.auth.app))return Promise.reject(fi(this.auth));const e=await this.getIdToken();return await bc(this,M6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,h=n.photoURL??void 0,p=n.tenantId??void 0,g=n._redirectEventId??void 0,y=n.createdAt??void 0,x=n.lastLoginAt??void 0,{uid:E,emailVerified:w,isAnonymous:I,providerData:N,stsTokenManager:U}=n;Ie(E&&U,e,"internal-error");const M=wo.fromJSON(this.name,U);Ie(typeof E=="string",e,"internal-error"),ts(s,e.name),ts(o,e.name),Ie(typeof w=="boolean",e,"internal-error"),Ie(typeof I=="boolean",e,"internal-error"),ts(c,e.name),ts(h,e.name),ts(p,e.name),ts(g,e.name),ts(y,e.name),ts(x,e.name);const L=new lr({uid:E,auth:e,email:o,emailVerified:w,displayName:s,isAnonymous:I,photoURL:h,phoneNumber:c,tenantId:p,stsTokenManager:M,createdAt:y,lastLoginAt:x});return N&&Array.isArray(N)&&(L.providerData=N.map(B=>({...B}))),g&&(L._redirectEventId=g),L}static async _fromIdTokenResponse(e,n,s=!1){const o=new wo;o.updateFromServerResponse(n);const c=new lr({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await oh(c),c}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Ie(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?C_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!c?.length,p=new wo;p.updateFromIdToken(s);const g=new lr({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Dm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(g,y),g}}/**
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
 */const g2=new Map;function di(r){vi(r instanceof Function,"Expected a class definition");let e=g2.get(r);return e?(vi(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,g2.set(r,e),e)}/**
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
 */class I_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}I_.type="NONE";const y2=I_;/**
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
 */function Hd(r,e,n){return`firebase:${r}:${e}:${n}`}class To{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=Hd(this.userKey,o.apiKey,c),this.fullPersistenceKey=Hd("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ah(this.auth,{idToken:e}).catch(()=>{});return n?lr._fromGetAccountInfoResponse(this.auth,n,e):null}return lr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new To(di(y2),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||di(y2);const h=Hd(s,e.config.apiKey,e.name);let p=null;for(const y of n)try{const x=await y._get(h);if(x){let E;if(typeof x=="string"){const w=await ah(e,{idToken:x}).catch(()=>{});if(!w)break;E=await lr._fromGetAccountInfoResponse(e,w,x)}else E=lr._fromJSON(e,x);y!==c&&(p=E),c=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new To(c,e,s):(c=g[0],p&&await c._set(h,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(h)}catch{}})),new To(c,e,s))}}/**
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
 */function v2(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(k_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(P_(e))return"Blackberry";if(L_(e))return"Webos";if(D_(e))return"Safari";if((e.includes("chrome/")||O_(e))&&!e.includes("edge/"))return"Chrome";if(M_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function j_(r=dn()){return/firefox\//i.test(r)}function D_(r=dn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function O_(r=dn()){return/crios\//i.test(r)}function k_(r=dn()){return/iemobile/i.test(r)}function M_(r=dn()){return/android/i.test(r)}function P_(r=dn()){return/blackberry/i.test(r)}function L_(r=dn()){return/webos/i.test(r)}function gg(r=dn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function q6(r=dn()){return gg(r)&&!!window.navigator?.standalone}function H6(){return iS()&&document.documentMode===10}function V_(r=dn()){return gg(r)||M_(r)||L_(r)||P_(r)||/windows phone/i.test(r)||k_(r)}/**
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
 */function U_(r,e=[]){let n;switch(r){case"Browser":n=v2(dn());break;case"Worker":n=`${v2(dn())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vo}/${s}`}/**
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
 */class G6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((h,p)=>{try{const g=e(c);h(g)}catch(g){p(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Y6(r,e={}){return Ai(r,"GET","/v2/passwordPolicy",Si(r,e))}/**
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
 */const $6=6;class Q6{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$6,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class K6{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new x2(this),this.idTokenSubscription=new x2(this),this.beforeStateQueue=new G6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=di(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await To.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ah(this,{idToken:e}),s=await lr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Jn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&p?.user&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oh(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N6()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jn(this.app))return Promise.reject(fi(this));const n=e?Rt(e):null;return n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jn(this.app)?Promise.reject(fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jn(this.app)?Promise.reject(fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(di(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Y6(this),n=new Q6(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pc("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await F6(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&di(e)||this._popupRedirectResolver;Ie(n,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[di(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(p,this,"internal-error"),p.then(()=>{h||c(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(n);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=U_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&T6(`Error while retrieving App Check token: ${e.error}`),e?.token}}function _s(r){return Rt(r)}class x2{constructor(e){this.auth=e,this.observer=null,this.addObserver=hS(n=>this.observer=n)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function W6(r){Ch=r}function z_(r){return Ch.loadJS(r)}function X6(){return Ch.recaptchaEnterpriseScript}function Z6(){return Ch.gapiScript}function J6(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class e5{constructor(){this.enterprise=new t5}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class t5{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const n5="recaptcha-enterprise",B_="NO_RECAPTCHA";class r5{constructor(e){this.type=n5,this.auth=_s(e)}async verify(e="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,p)=>{k6(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new O6(g);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,h(y.siteKey)}}).catch(g=>{p(g)})})}function o(c,h,p){const g=window.grecaptcha;p2(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:e}).then(y=>{h(y)}).catch(()=>{h(B_)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new e5().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{s(this.auth).then(p=>{if(!n&&p2(window.grecaptcha))o(p,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=X6();g.length!==0&&(g+=p),z_(g).then(()=>{o(p,c,h)}).catch(y=>{h(y)})}}).catch(p=>{h(p)})})}}async function _2(r,e,n,s=!1,o=!1){const c=new r5(r);let h;if(o)h=B_;else try{h=await c.verify(n)}catch{h=await c.verify(n,!0)}const p={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,y=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function lh(r,e,n,s,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await _2(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await _2(r,e,n,n==="getOobCode");return s(r,h)}else return Promise.reject(c)})}/**
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
 */function i5(r,e){const n=hg(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(da(c,e??{}))return o;ur(o,"already-initialized")}return n.initialize({options:e})}function s5(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(di);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function a5(r,e,n){const s=_s(r);Ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,c=F_(e),{host:h,port:p}=o5(e),g=p===null?"":`:${p}`,y={url:`${c}//${h}${g}/`},x=Object.freeze({host:h,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ie(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ie(da(y,s.config.emulator)&&da(x,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=x,s.settings.appVerificationDisabledForTesting=!0,Lo(h)?(m_(`${c}//${h}${g}`),g_("Auth",!0)):l5()}function F_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function o5(r){const e=F_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:b2(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:b2(h)}}}function b2(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function l5(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class yg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ui("not implemented")}_getIdTokenResponse(e){return ui("not implemented")}_linkToIdToken(e,n){return ui("not implemented")}_getReauthenticationResolver(e){return ui("not implemented")}}async function c5(r,e){return Ai(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function u5(r,e){return Uc(r,"POST","/v1/accounts:signInWithPassword",Si(r,e))}async function d5(r,e){return Ai(r,"POST","/v1/accounts:sendOobCode",Si(r,e))}async function h5(r,e){return d5(r,e)}/**
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
 */async function f5(r,e){return Uc(r,"POST","/v1/accounts:signInWithEmailLink",Si(r,e))}async function p5(r,e){return Uc(r,"POST","/v1/accounts:signInWithEmailLink",Si(r,e))}/**
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
 */class Ec extends yg{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Ec(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ec(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lh(e,n,"signInWithPassword",u5);case"emailLink":return f5(e,{email:this._email,oobCode:this._password});default:ur(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lh(e,s,"signUpPassword",c5);case"emailLink":return p5(e,{idToken:n,email:this._email,oobCode:this._password});default:ur(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function So(r,e){return Uc(r,"POST","/v1/accounts:signInWithIdp",Si(r,e))}/**
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
 */const m5="http://localhost";class fa extends yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ur("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...c}=n;if(!s||!o)return null;const h=new fa(s,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return So(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,So(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,So(e,n)}buildRequest(){const e={requestUri:m5,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lc(n)}return e}}/**
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
 */function g5(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function y5(r){const e=tc(nc(r)).link,n=e?tc(nc(e)).deep_link_id:null,s=tc(nc(r)).deep_link_id;return(s?tc(nc(s)).link:null)||s||n||e||r}class vg{constructor(e){const n=tc(nc(e)),s=n.apiKey??null,o=n.oobCode??null,c=g5(n.mode??null);Ie(s&&o&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=y5(e);try{return new vg(n)}catch{return null}}}/**
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
 */class Uo{constructor(){this.providerId=Uo.PROVIDER_ID}static credential(e,n){return Ec._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=vg.parseLink(n);return Ie(s,"argument-error"),Ec._fromEmailAndCode(e,s.code,s.tenantId)}}Uo.PROVIDER_ID="password";Uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class q_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zc extends q_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ns extends zc{constructor(){super("facebook.com")}static credential(e){return fa._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch{return null}}}ns.FACEBOOK_SIGN_IN_METHOD="facebook.com";ns.PROVIDER_ID="facebook.com";/**
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
 */class rs extends zc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fa._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rs.credential(n,s)}catch{return null}}}rs.GOOGLE_SIGN_IN_METHOD="google.com";rs.PROVIDER_ID="google.com";/**
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
 */class is extends zc{constructor(){super("github.com")}static credential(e){return fa._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return is.credential(e.oauthAccessToken)}catch{return null}}}is.GITHUB_SIGN_IN_METHOD="github.com";is.PROVIDER_ID="github.com";/**
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
 */class ss extends zc{constructor(){super("twitter.com")}static credential(e,n){return fa._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ss.credential(n,s)}catch{return null}}}ss.TWITTER_SIGN_IN_METHOD="twitter.com";ss.PROVIDER_ID="twitter.com";/**
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
 */async function v5(r,e){return Uc(r,"POST","/v1/accounts:signUp",Si(r,e))}/**
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
 */class pa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const c=await lr._fromIdTokenResponse(e,s,o),h=E2(s);return new pa({user:c,providerId:h,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=E2(s);return new pa({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function E2(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ch extends Ti{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ch.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new ch(e,n,s,o)}}function H_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?ch._fromErrorAndOperation(r,c,e,s):c})}async function x5(r,e,n=!1){const s=await bc(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return pa._forOperation(r,"link",s)}/**
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
 */async function _5(r,e,n=!1){const{auth:s}=r;if(Jn(s.app))return Promise.reject(fi(s));const o="reauthenticate";try{const c=await bc(r,H_(s,o,e,r),n);Ie(c.idToken,s,"internal-error");const h=mg(c.idToken);Ie(h,s,"internal-error");const{sub:p}=h;return Ie(r.uid===p,s,"user-mismatch"),pa._forOperation(r,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&ur(s,"user-mismatch"),c}}/**
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
 */async function G_(r,e,n=!1){if(Jn(r.app))return Promise.reject(fi(r));const s="signIn",o=await H_(r,s,e),c=await pa._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(c.user),c}async function b5(r,e){return G_(_s(r),e)}/**
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
 */async function Y_(r){const e=_s(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function E5(r,e,n){const s=_s(r);await lh(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",h5)}async function w5(r,e,n){if(Jn(r.app))return Promise.reject(fi(r));const s=_s(r),h=await lh(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",v5).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Y_(r),g}),p=await pa._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function $_(r,e,n){return Jn(r.app)?Promise.reject(fi(r)):b5(Rt(r),Uo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Y_(r),s})}function T5(r,e,n,s){return Rt(r).onIdTokenChanged(e,n,s)}function S5(r,e,n){return Rt(r).beforeAuthStateChanged(e,n)}function Q_(r,e,n,s){return Rt(r).onAuthStateChanged(e,n,s)}function xg(r){return Rt(r).signOut()}const uh="__sak";/**
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
 */class K_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uh,"1"),this.storage.removeItem(uh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const A5=1e3,N5=10;class W_ extends K_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=V_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!n&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);H6()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,N5):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},A5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}W_.type="LOCAL";const R5=W_;/**
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
 */class X_ extends K_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X_.type="SESSION";const Z_=X_;/**
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
 */function C5(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Ih(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:c}=n.data,h=this.handlersMap[o];if(!h?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async y=>y(n.origin,c)),g=await C5(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
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
 */function _g(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class I5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((p,g)=>{const y=_g("",20);o.port1.start();const x=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(E){const w=E;if(w.data.eventId===y)switch(w.data.status){case"ack":clearTimeout(x),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(w.data.response);break;default:clearTimeout(x),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function jr(){return window}function j5(r){jr().location.href=r}/**
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
 */function J_(){return typeof jr().WorkerGlobalScope<"u"&&typeof jr().importScripts=="function"}async function D5(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O5(){return navigator?.serviceWorker?.controller||null}function k5(){return J_()?self:null}/**
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
 */const eb="firebaseLocalStorageDb",M5=1,dh="firebaseLocalStorage",tb="fbase_key";class Bc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jh(r,e){return r.transaction([dh],e?"readwrite":"readonly").objectStore(dh)}function P5(){const r=indexedDB.deleteDatabase(eb);return new Bc(r).toPromise()}function Om(){const r=indexedDB.open(eb,M5);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(dh,{keyPath:tb})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(dh)?e(s):(s.close(),await P5(),e(await Om()))})})}async function w2(r,e,n){const s=jh(r,!0).put({[tb]:e,value:n});return new Bc(s).toPromise()}async function L5(r,e){const n=jh(r,!1).get(e),s=await new Bc(n).toPromise();return s===void 0?null:s.value}function T2(r,e){const n=jh(r,!0).delete(e);return new Bc(n).toPromise()}const V5=800,U5=3;class nb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Om(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>U5)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return J_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance(k5()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await D5(),!this.activeServiceWorker)return;this.sender=new I5(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Om();return await w2(e,uh,"1"),await T2(e,uh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>w2(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>L5(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T2(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=jh(o,!1).getAll();return new Bc(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nb.type="LOCAL";const z5=nb;new Vc(3e4,6e4);/**
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
 */function B5(r,e){return e?di(e):(Ie(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class bg extends yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,n){return So(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function F5(r){return G_(r.auth,new bg(r),r.bypassAuthState)}function q5(r){const{auth:e,user:n}=r;return Ie(n,e,"internal-error"),_5(n,new bg(r),r.bypassAuthState)}async function H5(r){const{auth:e,user:n}=r;return Ie(n,e,"internal-error"),x5(n,new bg(r),r.bypassAuthState)}/**
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
 */class rb{constructor(e,n,s,o,c=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F5;case"linkViaPopup":case"linkViaRedirect":return H5;case"reauthViaPopup":case"reauthViaRedirect":return q5;default:ur(this.auth,"internal-error")}}resolve(e){vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const G5=new Vc(2e3,1e4);class _o extends rb{constructor(e,n,s,o,c){super(e,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,_o.currentPopupAction&&_o.currentPopupAction.cancel(),_o.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){vi(this.filter.length===1,"Popup operations only handle one event");const e=_g();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_o.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,G5.get())};e()}}_o.currentPopupAction=null;/**
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
 */const Y5="pendingRedirect",Gd=new Map;class $5 extends rb{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Gd.get(this.auth._key());if(!e){try{const s=await Q5(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Gd.set(this.auth._key(),e)}return this.bypassAuthState||Gd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q5(r,e){const n=X5(e),s=W5(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function K5(r,e){Gd.set(r._key(),e)}function W5(r){return di(r._redirectPersistence)}function X5(r){return Hd(Y5,r.config.apiKey,r.name)}async function Z5(r,e,n=!1){if(Jn(r.app))return Promise.reject(fi(r));const s=_s(r),o=B5(s,e),h=await new $5(s,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const J5=600*1e3;class eA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!ib(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Ir(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=J5&&this.cachedEventUids.clear(),this.cachedEventUids.has(S2(e))}saveEventToCache(e){this.cachedEventUids.add(S2(e)),this.lastProcessedEventTime=Date.now()}}function S2(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function ib({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function tA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ib(r);default:return!1}}/**
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
 */async function nA(r,e={}){return Ai(r,"GET","/v1/projects",e)}/**
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
 */const rA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iA=/^https?/;async function sA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await nA(r);for(const n of e)try{if(aA(n))return}catch{}ur(r,"unauthorized-domain")}function aA(r){const e=jm(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===s}if(!iA.test(n))return!1;if(rA.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const oA=new Vc(3e4,6e4);function A2(){const r=jr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function lA(r){return new Promise((e,n)=>{function s(){A2(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{A2(),n(Ir(r,"network-request-failed"))},timeout:oA.get()})}if(jr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(jr().gapi?.load)s();else{const o=J6("iframefcb");return jr()[o]=()=>{gapi.load?s():n(Ir(r,"network-request-failed"))},z_(`${Z6()}?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw Yd=null,e})}let Yd=null;function cA(r){return Yd=Yd||lA(r),Yd}/**
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
 */const uA=new Vc(5e3,15e3),dA="__/auth/iframe",hA="emulator/auth/iframe",fA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mA(r){const e=r.config;Ie(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?pg(e,hA):`https://${r.config.authDomain}/${dA}`,s={apiKey:e.apiKey,appName:r.name,v:Vo},o=pA.get(r.config.apiHost);o&&(s.eid=o);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Lc(s).slice(1)}`}async function gA(r){const e=await cA(r),n=jr().gapi;return Ie(n,r,"internal-error"),e.open({where:document.body,url:mA(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fA,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const h=Ir(r,"network-request-failed"),p=jr().setTimeout(()=>{c(h)},uA.get());function g(){jr().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{c(h)})}))}/**
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
 */const yA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vA=500,xA=600,_A="_blank",bA="http://localhost";class N2{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EA(r,e,n,s=vA,o=xA){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g={...yA,width:s.toString(),height:o.toString(),top:c,left:h},y=dn().toLowerCase();n&&(p=O_(y)?_A:n),j_(y)&&(e=e||bA,g.scrollbars="yes");const x=Object.entries(g).reduce((w,[I,N])=>`${w}${I}=${N},`,"");if(q6(y)&&p!=="_self")return wA(e||"",p),new N2(null);const E=window.open(e||"",p,x);Ie(E,r,"popup-blocked");try{E.focus()}catch{}return new N2(E)}function wA(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const TA="__/auth/handler",SA="emulator/auth/handler",AA=encodeURIComponent("fac");async function R2(r,e,n,s,o,c){Ie(r.config.authDomain,r,"auth-domain-config-required"),Ie(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Vo,eventId:o};if(e instanceof q_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",dS(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[x,E]of Object.entries({}))h[x]=E}if(e instanceof zc){const x=e.getScopes().filter(E=>E!=="");x.length>0&&(h.scopes=x.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const x of Object.keys(p))p[x]===void 0&&delete p[x];const g=await r._getAppCheckToken(),y=g?`#${AA}=${encodeURIComponent(g)}`:"";return`${NA(r)}?${Lc(p).slice(1)}${y}`}function NA({config:r}){return r.emulator?pg(r,SA):`https://${r.authDomain}/${TA}`}/**
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
 */const gm="webStorageSupport";class RA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z_,this._completeRedirectFn=Z5,this._overrideRedirectResult=K5}async _openPopup(e,n,s,o){vi(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await R2(e,n,s,jm(),o);return EA(e,c,_g())}async _openRedirect(e,n,s,o){await this._originValidation(e);const c=await R2(e,n,s,jm(),o);return j5(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(vi(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await gA(e),s=new eA(e);return n.register("authEvent",o=>(Ie(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gm,{type:gm},o=>{const c=o?.[0]?.[gm];c!==void 0&&n(!!c),ur(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return V_()||D_()||gg()}}const CA=RA;var C2="@firebase/auth",I2="1.11.0";/**
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
 */class IA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DA(r){Co(new ha("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;Ie(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:U_(r)},y=new K6(s,o,c,g);return s5(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Co(new ha("auth-internal",e=>{const n=_s(e.getProvider("auth").getImmediate());return(s=>new IA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cs(C2,I2,jA(r)),cs(C2,I2,"esm2020")}/**
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
 */const OA=300,kA=p_("authIdTokenMaxAge")||OA;let j2=null;const MA=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>kA)return;const o=n?.token;j2!==o&&(j2=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function wc(r=__()){const e=hg(r,"auth");if(e.isInitialized())return e.getImmediate();const n=i5(r,{popupRedirectResolver:CA,persistence:[z5,R5,Z_]}),s=p_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=MA(c.toString());S5(n,h,()=>h(n.currentUser)),T5(n,p=>h(p))}}const o=h_("auth");return o&&a5(n,`http://${o}`),n}function PA(){return document.getElementsByTagName("head")?.[0]??document}W6({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const c=Ir("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",PA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DA("Browser");var D2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var us,sb;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,C){function j(){}j.prototype=C.prototype,k.D=C.prototype,k.prototype=new j,k.prototype.constructor=k,k.C=function(O,D,A){for(var T=Array(arguments.length-2),re=2;re<arguments.length;re++)T[re-2]=arguments[re];return C.prototype[D].apply(O,T)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,C,j){j||(j=0);var O=Array(16);if(typeof C=="string")for(var D=0;16>D;++D)O[D]=C.charCodeAt(j++)|C.charCodeAt(j++)<<8|C.charCodeAt(j++)<<16|C.charCodeAt(j++)<<24;else for(D=0;16>D;++D)O[D]=C[j++]|C[j++]<<8|C[j++]<<16|C[j++]<<24;C=k.g[0],j=k.g[1],D=k.g[2];var A=k.g[3],T=C+(A^j&(D^A))+O[0]+3614090360&4294967295;C=j+(T<<7&4294967295|T>>>25),T=A+(D^C&(j^D))+O[1]+3905402710&4294967295,A=C+(T<<12&4294967295|T>>>20),T=D+(j^A&(C^j))+O[2]+606105819&4294967295,D=A+(T<<17&4294967295|T>>>15),T=j+(C^D&(A^C))+O[3]+3250441966&4294967295,j=D+(T<<22&4294967295|T>>>10),T=C+(A^j&(D^A))+O[4]+4118548399&4294967295,C=j+(T<<7&4294967295|T>>>25),T=A+(D^C&(j^D))+O[5]+1200080426&4294967295,A=C+(T<<12&4294967295|T>>>20),T=D+(j^A&(C^j))+O[6]+2821735955&4294967295,D=A+(T<<17&4294967295|T>>>15),T=j+(C^D&(A^C))+O[7]+4249261313&4294967295,j=D+(T<<22&4294967295|T>>>10),T=C+(A^j&(D^A))+O[8]+1770035416&4294967295,C=j+(T<<7&4294967295|T>>>25),T=A+(D^C&(j^D))+O[9]+2336552879&4294967295,A=C+(T<<12&4294967295|T>>>20),T=D+(j^A&(C^j))+O[10]+4294925233&4294967295,D=A+(T<<17&4294967295|T>>>15),T=j+(C^D&(A^C))+O[11]+2304563134&4294967295,j=D+(T<<22&4294967295|T>>>10),T=C+(A^j&(D^A))+O[12]+1804603682&4294967295,C=j+(T<<7&4294967295|T>>>25),T=A+(D^C&(j^D))+O[13]+4254626195&4294967295,A=C+(T<<12&4294967295|T>>>20),T=D+(j^A&(C^j))+O[14]+2792965006&4294967295,D=A+(T<<17&4294967295|T>>>15),T=j+(C^D&(A^C))+O[15]+1236535329&4294967295,j=D+(T<<22&4294967295|T>>>10),T=C+(D^A&(j^D))+O[1]+4129170786&4294967295,C=j+(T<<5&4294967295|T>>>27),T=A+(j^D&(C^j))+O[6]+3225465664&4294967295,A=C+(T<<9&4294967295|T>>>23),T=D+(C^j&(A^C))+O[11]+643717713&4294967295,D=A+(T<<14&4294967295|T>>>18),T=j+(A^C&(D^A))+O[0]+3921069994&4294967295,j=D+(T<<20&4294967295|T>>>12),T=C+(D^A&(j^D))+O[5]+3593408605&4294967295,C=j+(T<<5&4294967295|T>>>27),T=A+(j^D&(C^j))+O[10]+38016083&4294967295,A=C+(T<<9&4294967295|T>>>23),T=D+(C^j&(A^C))+O[15]+3634488961&4294967295,D=A+(T<<14&4294967295|T>>>18),T=j+(A^C&(D^A))+O[4]+3889429448&4294967295,j=D+(T<<20&4294967295|T>>>12),T=C+(D^A&(j^D))+O[9]+568446438&4294967295,C=j+(T<<5&4294967295|T>>>27),T=A+(j^D&(C^j))+O[14]+3275163606&4294967295,A=C+(T<<9&4294967295|T>>>23),T=D+(C^j&(A^C))+O[3]+4107603335&4294967295,D=A+(T<<14&4294967295|T>>>18),T=j+(A^C&(D^A))+O[8]+1163531501&4294967295,j=D+(T<<20&4294967295|T>>>12),T=C+(D^A&(j^D))+O[13]+2850285829&4294967295,C=j+(T<<5&4294967295|T>>>27),T=A+(j^D&(C^j))+O[2]+4243563512&4294967295,A=C+(T<<9&4294967295|T>>>23),T=D+(C^j&(A^C))+O[7]+1735328473&4294967295,D=A+(T<<14&4294967295|T>>>18),T=j+(A^C&(D^A))+O[12]+2368359562&4294967295,j=D+(T<<20&4294967295|T>>>12),T=C+(j^D^A)+O[5]+4294588738&4294967295,C=j+(T<<4&4294967295|T>>>28),T=A+(C^j^D)+O[8]+2272392833&4294967295,A=C+(T<<11&4294967295|T>>>21),T=D+(A^C^j)+O[11]+1839030562&4294967295,D=A+(T<<16&4294967295|T>>>16),T=j+(D^A^C)+O[14]+4259657740&4294967295,j=D+(T<<23&4294967295|T>>>9),T=C+(j^D^A)+O[1]+2763975236&4294967295,C=j+(T<<4&4294967295|T>>>28),T=A+(C^j^D)+O[4]+1272893353&4294967295,A=C+(T<<11&4294967295|T>>>21),T=D+(A^C^j)+O[7]+4139469664&4294967295,D=A+(T<<16&4294967295|T>>>16),T=j+(D^A^C)+O[10]+3200236656&4294967295,j=D+(T<<23&4294967295|T>>>9),T=C+(j^D^A)+O[13]+681279174&4294967295,C=j+(T<<4&4294967295|T>>>28),T=A+(C^j^D)+O[0]+3936430074&4294967295,A=C+(T<<11&4294967295|T>>>21),T=D+(A^C^j)+O[3]+3572445317&4294967295,D=A+(T<<16&4294967295|T>>>16),T=j+(D^A^C)+O[6]+76029189&4294967295,j=D+(T<<23&4294967295|T>>>9),T=C+(j^D^A)+O[9]+3654602809&4294967295,C=j+(T<<4&4294967295|T>>>28),T=A+(C^j^D)+O[12]+3873151461&4294967295,A=C+(T<<11&4294967295|T>>>21),T=D+(A^C^j)+O[15]+530742520&4294967295,D=A+(T<<16&4294967295|T>>>16),T=j+(D^A^C)+O[2]+3299628645&4294967295,j=D+(T<<23&4294967295|T>>>9),T=C+(D^(j|~A))+O[0]+4096336452&4294967295,C=j+(T<<6&4294967295|T>>>26),T=A+(j^(C|~D))+O[7]+1126891415&4294967295,A=C+(T<<10&4294967295|T>>>22),T=D+(C^(A|~j))+O[14]+2878612391&4294967295,D=A+(T<<15&4294967295|T>>>17),T=j+(A^(D|~C))+O[5]+4237533241&4294967295,j=D+(T<<21&4294967295|T>>>11),T=C+(D^(j|~A))+O[12]+1700485571&4294967295,C=j+(T<<6&4294967295|T>>>26),T=A+(j^(C|~D))+O[3]+2399980690&4294967295,A=C+(T<<10&4294967295|T>>>22),T=D+(C^(A|~j))+O[10]+4293915773&4294967295,D=A+(T<<15&4294967295|T>>>17),T=j+(A^(D|~C))+O[1]+2240044497&4294967295,j=D+(T<<21&4294967295|T>>>11),T=C+(D^(j|~A))+O[8]+1873313359&4294967295,C=j+(T<<6&4294967295|T>>>26),T=A+(j^(C|~D))+O[15]+4264355552&4294967295,A=C+(T<<10&4294967295|T>>>22),T=D+(C^(A|~j))+O[6]+2734768916&4294967295,D=A+(T<<15&4294967295|T>>>17),T=j+(A^(D|~C))+O[13]+1309151649&4294967295,j=D+(T<<21&4294967295|T>>>11),T=C+(D^(j|~A))+O[4]+4149444226&4294967295,C=j+(T<<6&4294967295|T>>>26),T=A+(j^(C|~D))+O[11]+3174756917&4294967295,A=C+(T<<10&4294967295|T>>>22),T=D+(C^(A|~j))+O[2]+718787259&4294967295,D=A+(T<<15&4294967295|T>>>17),T=j+(A^(D|~C))+O[9]+3951481745&4294967295,k.g[0]=k.g[0]+C&4294967295,k.g[1]=k.g[1]+(D+(T<<21&4294967295|T>>>11))&4294967295,k.g[2]=k.g[2]+D&4294967295,k.g[3]=k.g[3]+A&4294967295}s.prototype.u=function(k,C){C===void 0&&(C=k.length);for(var j=C-this.blockSize,O=this.B,D=this.h,A=0;A<C;){if(D==0)for(;A<=j;)o(this,k,A),A+=this.blockSize;if(typeof k=="string"){for(;A<C;)if(O[D++]=k.charCodeAt(A++),D==this.blockSize){o(this,O),D=0;break}}else for(;A<C;)if(O[D++]=k[A++],D==this.blockSize){o(this,O),D=0;break}}this.h=D,this.o+=C},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var C=1;C<k.length-8;++C)k[C]=0;var j=8*this.o;for(C=k.length-8;C<k.length;++C)k[C]=j&255,j/=256;for(this.u(k),k=Array(16),C=j=0;4>C;++C)for(var O=0;32>O;O+=8)k[j++]=this.g[C]>>>O&255;return k};function c(k,C){var j=p;return Object.prototype.hasOwnProperty.call(j,k)?j[k]:j[k]=C(k)}function h(k,C){this.h=C;for(var j=[],O=!0,D=k.length-1;0<=D;D--){var A=k[D]|0;O&&A==C||(j[D]=A,O=!1)}this.g=j}var p={};function g(k){return-128<=k&&128>k?c(k,function(C){return new h([C|0],0>C?-1:0)}):new h([k|0],0>k?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return E;if(0>k)return M(y(-k));for(var C=[],j=1,O=0;k>=j;O++)C[O]=k/j|0,j*=4294967296;return new h(C,0)}function x(k,C){if(k.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(k.charAt(0)=="-")return M(x(k.substring(1),C));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var j=y(Math.pow(C,8)),O=E,D=0;D<k.length;D+=8){var A=Math.min(8,k.length-D),T=parseInt(k.substring(D,D+A),C);8>A?(A=y(Math.pow(C,A)),O=O.j(A).add(y(T))):(O=O.j(j),O=O.add(y(T)))}return O}var E=g(0),w=g(1),I=g(16777216);r=h.prototype,r.m=function(){if(U(this))return-M(this).m();for(var k=0,C=1,j=0;j<this.g.length;j++){var O=this.i(j);k+=(0<=O?O:4294967296+O)*C,C*=4294967296}return k},r.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(N(this))return"0";if(U(this))return"-"+M(this).toString(k);for(var C=y(Math.pow(k,6)),j=this,O="";;){var D=X(j,C).g;j=L(j,D.j(C));var A=((0<j.g.length?j.g[0]:j.h)>>>0).toString(k);if(j=D,N(j))return A+O;for(;6>A.length;)A="0"+A;O=A+O}},r.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function N(k){if(k.h!=0)return!1;for(var C=0;C<k.g.length;C++)if(k.g[C]!=0)return!1;return!0}function U(k){return k.h==-1}r.l=function(k){return k=L(this,k),U(k)?-1:N(k)?0:1};function M(k){for(var C=k.g.length,j=[],O=0;O<C;O++)j[O]=~k.g[O];return new h(j,~k.h).add(w)}r.abs=function(){return U(this)?M(this):this},r.add=function(k){for(var C=Math.max(this.g.length,k.g.length),j=[],O=0,D=0;D<=C;D++){var A=O+(this.i(D)&65535)+(k.i(D)&65535),T=(A>>>16)+(this.i(D)>>>16)+(k.i(D)>>>16);O=T>>>16,A&=65535,T&=65535,j[D]=T<<16|A}return new h(j,j[j.length-1]&-2147483648?-1:0)};function L(k,C){return k.add(M(C))}r.j=function(k){if(N(this)||N(k))return E;if(U(this))return U(k)?M(this).j(M(k)):M(M(this).j(k));if(U(k))return M(this.j(M(k)));if(0>this.l(I)&&0>k.l(I))return y(this.m()*k.m());for(var C=this.g.length+k.g.length,j=[],O=0;O<2*C;O++)j[O]=0;for(O=0;O<this.g.length;O++)for(var D=0;D<k.g.length;D++){var A=this.i(O)>>>16,T=this.i(O)&65535,re=k.i(D)>>>16,xe=k.i(D)&65535;j[2*O+2*D]+=T*xe,B(j,2*O+2*D),j[2*O+2*D+1]+=A*xe,B(j,2*O+2*D+1),j[2*O+2*D+1]+=T*re,B(j,2*O+2*D+1),j[2*O+2*D+2]+=A*re,B(j,2*O+2*D+2)}for(O=0;O<C;O++)j[O]=j[2*O+1]<<16|j[2*O];for(O=C;O<2*C;O++)j[O]=0;return new h(j,0)};function B(k,C){for(;(k[C]&65535)!=k[C];)k[C+1]+=k[C]>>>16,k[C]&=65535,C++}function q(k,C){this.g=k,this.h=C}function X(k,C){if(N(C))throw Error("division by zero");if(N(k))return new q(E,E);if(U(k))return C=X(M(k),C),new q(M(C.g),M(C.h));if(U(C))return C=X(k,M(C)),new q(M(C.g),C.h);if(30<k.g.length){if(U(k)||U(C))throw Error("slowDivide_ only works with positive integers.");for(var j=w,O=C;0>=O.l(k);)j=ee(j),O=ee(O);var D=ne(j,1),A=ne(O,1);for(O=ne(O,2),j=ne(j,2);!N(O);){var T=A.add(O);0>=T.l(k)&&(D=D.add(j),A=T),O=ne(O,1),j=ne(j,1)}return C=L(k,D.j(C)),new q(D,C)}for(D=E;0<=k.l(C);){for(j=Math.max(1,Math.floor(k.m()/C.m())),O=Math.ceil(Math.log(j)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),A=y(j),T=A.j(C);U(T)||0<T.l(k);)j-=O,A=y(j),T=A.j(C);N(A)&&(A=w),D=D.add(A),k=L(k,T)}return new q(D,k)}r.A=function(k){return X(this,k).h},r.and=function(k){for(var C=Math.max(this.g.length,k.g.length),j=[],O=0;O<C;O++)j[O]=this.i(O)&k.i(O);return new h(j,this.h&k.h)},r.or=function(k){for(var C=Math.max(this.g.length,k.g.length),j=[],O=0;O<C;O++)j[O]=this.i(O)|k.i(O);return new h(j,this.h|k.h)},r.xor=function(k){for(var C=Math.max(this.g.length,k.g.length),j=[],O=0;O<C;O++)j[O]=this.i(O)^k.i(O);return new h(j,this.h^k.h)};function ee(k){for(var C=k.g.length+1,j=[],O=0;O<C;O++)j[O]=k.i(O)<<1|k.i(O-1)>>>31;return new h(j,k.h)}function ne(k,C){var j=C>>5;C%=32;for(var O=k.g.length-j,D=[],A=0;A<O;A++)D[A]=0<C?k.i(A+j)>>>C|k.i(A+j+1)<<32-C:k.i(A+j);return new h(D,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,sb=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=x,us=h}).apply(typeof D2<"u"?D2:typeof self<"u"?self:typeof window<"u"?window:{});var Md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ab,rc,ob,$d,km,lb,cb,ub;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(d,v,_){return d==Array.prototype||d==Object.prototype||(d[v]=_.value),d};function n(d){d=[typeof globalThis=="object"&&globalThis,d,typeof window=="object"&&window,typeof self=="object"&&self,typeof Md=="object"&&Md];for(var v=0;v<d.length;++v){var _=d[v];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(d,v){if(v)e:{var _=s;d=d.split(".");for(var R=0;R<d.length-1;R++){var G=d[R];if(!(G in _))break e;_=_[G]}d=d[d.length-1],R=_[d],v=v(R),v!=R&&v!=null&&e(_,d,{configurable:!0,writable:!0,value:v})}}function c(d,v){d instanceof String&&(d+="");var _=0,R=!1,G={next:function(){if(!R&&_<d.length){var Z=_++;return{value:v(Z,d[Z]),done:!1}}return R=!0,{done:!0,value:void 0}}};return G[Symbol.iterator]=function(){return G},G}o("Array.prototype.values",function(d){return d||function(){return c(this,function(v,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(d){var v=typeof d;return v=v!="object"?v:d?Array.isArray(d)?"array":v:"null",v=="array"||v=="object"&&typeof d.length=="number"}function y(d){var v=typeof d;return v=="object"&&d!=null||v=="function"}function x(d,v,_){return d.call.apply(d.bind,arguments)}function E(d,v,_){if(!d)throw Error();if(2<arguments.length){var R=Array.prototype.slice.call(arguments,2);return function(){var G=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(G,R),d.apply(v,G)}}return function(){return d.apply(v,arguments)}}function w(d,v,_){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?x:E,w.apply(null,arguments)}function I(d,v){var _=Array.prototype.slice.call(arguments,1);return function(){var R=_.slice();return R.push.apply(R,arguments),d.apply(this,R)}}function N(d,v){function _(){}_.prototype=v.prototype,d.aa=v.prototype,d.prototype=new _,d.prototype.constructor=d,d.Qb=function(R,G,Z){for(var me=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)me[$e-2]=arguments[$e];return v.prototype[G].apply(R,me)}}function U(d){const v=d.length;if(0<v){const _=Array(v);for(let R=0;R<v;R++)_[R]=d[R];return _}return[]}function M(d,v){for(let _=1;_<arguments.length;_++){const R=arguments[_];if(g(R)){const G=d.length||0,Z=R.length||0;d.length=G+Z;for(let me=0;me<Z;me++)d[G+me]=R[me]}else d.push(R)}}class L{constructor(v,_){this.i=v,this.j=_,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function B(d){return/^[\s\xa0]*$/.test(d)}function q(){var d=p.navigator;return d&&(d=d.userAgent)?d:""}function X(d){return X[" "](d),d}X[" "]=function(){};var ee=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ne(d,v,_){for(const R in d)v.call(_,d[R],R,d)}function k(d,v){for(const _ in d)v.call(void 0,d[_],_,d)}function C(d){const v={};for(const _ in d)v[_]=d[_];return v}const j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(d,v){let _,R;for(let G=1;G<arguments.length;G++){R=arguments[G];for(_ in R)d[_]=R[_];for(let Z=0;Z<j.length;Z++)_=j[Z],Object.prototype.hasOwnProperty.call(R,_)&&(d[_]=R[_])}}function D(d){var v=1;d=d.split(":");const _=[];for(;0<v&&d.length;)_.push(d.shift()),v--;return d.length&&_.push(d.join(":")),_}function A(d){p.setTimeout(()=>{throw d},0)}function T(){var d=Re;let v=null;return d.g&&(v=d.g,d.g=d.g.next,d.g||(d.h=null),v.next=null),v}class re{constructor(){this.h=this.g=null}add(v,_){const R=xe.get();R.set(v,_),this.h?this.h.next=R:this.g=R,this.h=R}}var xe=new L(()=>new Y,d=>d.reset());class Y{constructor(){this.next=this.g=this.h=null}set(v,_){this.h=v,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ye=!1,Re=new re,z=()=>{const d=p.Promise.resolve(void 0);ue=()=>{d.then(oe)}};var oe=()=>{for(var d;d=T();){try{d.h.call(d.g)}catch(_){A(_)}var v=xe;v.j(d),100>v.h&&(v.h++,d.next=v.g,v.g=d)}ye=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(d,v){this.type=d,this.g=this.target=v,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var J=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var d=!1,v=Object.defineProperty({},"passive",{get:function(){d=!0}});try{const _=()=>{};p.addEventListener("test",_,v),p.removeEventListener("test",_,v)}catch{}return d})();function pe(d,v){if(de.call(this,d?d.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,d){var _=this.type=d.type,R=d.changedTouches&&d.changedTouches.length?d.changedTouches[0]:null;if(this.target=d.target||d.srcElement,this.g=v,v=d.relatedTarget){if(ee){e:{try{X(v.nodeName);var G=!0;break e}catch{}G=!1}G||(v=null)}}else _=="mouseover"?v=d.fromElement:_=="mouseout"&&(v=d.toElement);this.relatedTarget=v,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0),this.button=d.button,this.key=d.key||"",this.ctrlKey=d.ctrlKey,this.altKey=d.altKey,this.shiftKey=d.shiftKey,this.metaKey=d.metaKey,this.pointerId=d.pointerId||0,this.pointerType=typeof d.pointerType=="string"?d.pointerType:fe[d.pointerType]||"",this.state=d.state,this.i=d,d.defaultPrevented&&pe.aa.h.call(this)}}N(pe,de);var fe={2:"touch",3:"pen",4:"mouse"};pe.prototype.h=function(){pe.aa.h.call(this);var d=this.i;d.preventDefault?d.preventDefault():d.returnValue=!1};var we="closure_listenable_"+(1e6*Math.random()|0),ve=0;function Ge(d,v,_,R,G){this.listener=d,this.proxy=null,this.src=v,this.type=_,this.capture=!!R,this.ha=G,this.key=++ve,this.da=this.fa=!1}function pt(d){d.da=!0,d.listener=null,d.proxy=null,d.src=null,d.ha=null}function Kt(d){this.src=d,this.g={},this.h=0}Kt.prototype.add=function(d,v,_,R,G){var Z=d.toString();d=this.g[Z],d||(d=this.g[Z]=[],this.h++);var me=Nn(d,v,R,G);return-1<me?(v=d[me],_||(v.fa=!1)):(v=new Ge(v,this.src,Z,!!R,G),v.fa=_,d.push(v)),v};function tr(d,v){var _=v.type;if(_ in d.g){var R=d.g[_],G=Array.prototype.indexOf.call(R,v,void 0),Z;(Z=0<=G)&&Array.prototype.splice.call(R,G,1),Z&&(pt(v),d.g[_].length==0&&(delete d.g[_],d.h--))}}function Nn(d,v,_,R){for(var G=0;G<d.length;++G){var Z=d[G];if(!Z.da&&Z.listener==v&&Z.capture==!!_&&Z.ha==R)return G}return-1}var Vr="closure_lm_"+(1e6*Math.random()|0),vn={};function hr(d,v,_,R,G){if(Array.isArray(v)){for(var Z=0;Z<v.length;Z++)hr(d,v[Z],_,R,G);return null}return _=Ta(_),d&&d[we]?d.K(v,_,y(R)?!!R.capture:!1,G):xn(d,v,_,!1,R,G)}function xn(d,v,_,R,G,Z){if(!v)throw Error("Invalid event type");var me=y(G)?!!G.capture:!!G,$e=Pt(d);if($e||(d[Vr]=$e=new Kt(d)),_=$e.add(v,_,R,me,Z),_.proxy)return _;if(R=te(),_.proxy=R,R.src=d,R.listener=_,d.addEventListener)J||(G=me),G===void 0&&(G=!1),d.addEventListener(v.toString(),R,G);else if(d.attachEvent)d.attachEvent(Me(v.toString()),R);else if(d.addListener&&d.removeListener)d.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return _}function te(){function d(_){return v.call(d.src,d.listener,_)}const v=ft;return d}function Ee(d,v,_,R,G){if(Array.isArray(v))for(var Z=0;Z<v.length;Z++)Ee(d,v[Z],_,R,G);else R=y(R)?!!R.capture:!!R,_=Ta(_),d&&d[we]?(d=d.i,v=String(v).toString(),v in d.g&&(Z=d.g[v],_=Nn(Z,_,R,G),-1<_&&(pt(Z[_]),Array.prototype.splice.call(Z,_,1),Z.length==0&&(delete d.g[v],d.h--)))):d&&(d=Pt(d))&&(v=d.g[v.toString()],d=-1,v&&(d=Nn(v,_,R,G)),(_=-1<d?v[d]:null)&&Ae(_))}function Ae(d){if(typeof d!="number"&&d&&!d.da){var v=d.src;if(v&&v[we])tr(v.i,d);else{var _=d.type,R=d.proxy;v.removeEventListener?v.removeEventListener(_,R,d.capture):v.detachEvent?v.detachEvent(Me(_),R):v.addListener&&v.removeListener&&v.removeListener(R),(_=Pt(v))?(tr(_,d),_.h==0&&(_.src=null,v[Vr]=null)):pt(d)}}}function Me(d){return d in vn?vn[d]:vn[d]="on"+d}function ft(d,v){if(d.da)d=!0;else{v=new pe(v,this);var _=d.listener,R=d.ha||d.src;d.fa&&Ae(d),d=_.call(R,v)}return d}function Pt(d){return d=d[Vr],d instanceof Kt?d:null}var Vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ta(d){return typeof d=="function"?d:(d[Vn]||(d[Vn]=function(v){return d.handleEvent(v)}),d[Vn])}function Ye(){he.call(this),this.i=new Kt(this),this.M=this,this.F=null}N(Ye,he),Ye.prototype[we]=!0,Ye.prototype.removeEventListener=function(d,v,_,R){Ee(this,d,v,_,R)};function Xe(d,v){var _,R=d.F;if(R)for(_=[];R;R=R.F)_.push(R);if(d=d.M,R=v.type||v,typeof v=="string")v=new de(v,d);else if(v instanceof de)v.target=v.target||d;else{var G=v;v=new de(R,d),O(v,G)}if(G=!0,_)for(var Z=_.length-1;0<=Z;Z--){var me=v.g=_[Z];G=Rn(me,R,!0,v)&&G}if(me=v.g=d,G=Rn(me,R,!0,v)&&G,G=Rn(me,R,!1,v)&&G,_)for(Z=0;Z<_.length;Z++)me=v.g=_[Z],G=Rn(me,R,!1,v)&&G}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var d=this.i,v;for(v in d.g){for(var _=d.g[v],R=0;R<_.length;R++)pt(_[R]);delete d.g[v],d.h--}}this.F=null},Ye.prototype.K=function(d,v,_,R){return this.i.add(String(d),v,!1,_,R)},Ye.prototype.L=function(d,v,_,R){return this.i.add(String(d),v,!0,_,R)};function Rn(d,v,_,R){if(v=d.i.g[String(v)],!v)return!0;v=v.concat();for(var G=!0,Z=0;Z<v.length;++Z){var me=v[Z];if(me&&!me.da&&me.capture==_){var $e=me.listener,Vt=me.ha||me.src;me.fa&&tr(d.i,me),G=$e.call(Vt,R)!==!1&&G}}return G&&!R.defaultPrevented}function sn(d,v,_){if(typeof d=="function")_&&(d=w(d,_));else if(d&&typeof d.handleEvent=="function")d=w(d.handleEvent,d);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:p.setTimeout(d,v||0)}function Xc(d){d.g=sn(()=>{d.g=null,d.i&&(d.i=!1,Xc(d))},d.l);const v=d.h;d.h=null,d.m.apply(null,v)}class Zh extends he{constructor(v,_){super(),this.m=v,this.l=_,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:Xc(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ts(d){he.call(this),this.h=d,this.g={}}N(Ts,he);var Ss=[];function As(d){ne(d.g,function(v,_){this.g.hasOwnProperty(_)&&Ae(v)},d),d.g={}}Ts.prototype.N=function(){Ts.aa.N.call(this),As(this)},Ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nr=p.JSON.stringify,Sa=p.JSON.parse,Ns=class{stringify(d){return p.JSON.stringify(d,void 0)}parse(d){return p.JSON.parse(d,void 0)}};function Yo(){}Yo.prototype.h=null;function $o(d){return d.h||(d.h=d.i())}function Qo(){}var Ur={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zr(){de.call(this,"d")}N(zr,de);function Ko(){de.call(this,"c")}N(Ko,de);var fr={},Wo=null;function Ni(){return Wo=Wo||new Ye}fr.La="serverreachability";function Aa(d){de.call(this,fr.La,d)}N(Aa,de);function Ri(d){const v=Ni();Xe(v,new Aa(v))}fr.STAT_EVENT="statevent";function Zc(d,v){de.call(this,fr.STAT_EVENT,d),this.stat=v}N(Zc,de);function mt(d){const v=Ni();Xe(v,new Zc(v,d))}fr.Ma="timingevent";function Lt(d,v){de.call(this,fr.Ma,d),this.size=v}N(Lt,de);function Ct(d,v){if(typeof d!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){d()},v)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function Xo(d,v,_,R,G,Z){d.info(function(){if(d.g)if(Z)for(var me="",$e=Z.split("&"),Vt=0;Vt<$e.length;Vt++){var Qe=$e[Vt].split("=");if(1<Qe.length){var Ht=Qe[0];Qe=Qe[1];var Ut=Ht.split("_");me=2<=Ut.length&&Ut[1]=="type"?me+(Ht+"="+Qe+"&"):me+(Ht+"=redacted&")}}else me=null;else me=Z;return"XMLHTTP REQ ("+R+") [attempt "+G+"]: "+v+`
`+_+`
`+me})}function Jh(d,v,_,R,G,Z,me){d.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+G+"]: "+v+`
`+_+`
`+Z+" "+me})}function Ci(d,v,_,R){d.info(function(){return"XMLHTTP TEXT ("+v+"): "+Rs(d,_)+(R?" "+R:"")})}function Jc(d,v){d.info(function(){return"TIMEOUT: "+v})}Un.prototype.info=function(){};function Rs(d,v){if(!d.g)return v;if(!v)return null;try{var _=JSON.parse(v);if(_){for(d=0;d<_.length;d++)if(Array.isArray(_[d])){var R=_[d];if(!(2>R.length)){var G=R[1];if(Array.isArray(G)&&!(1>G.length)){var Z=G[0];if(Z!="noop"&&Z!="stop"&&Z!="close")for(var me=1;me<G.length;me++)G[me]=""}}}}return nr(_)}catch{return v}}var Ii={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Br={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pr;function mr(){}N(mr,Yo),mr.prototype.g=function(){return new XMLHttpRequest},mr.prototype.i=function(){return{}},pr=new mr;function hn(d,v,_,R){this.j=d,this.i=v,this.l=_,this.R=R||1,this.U=new Ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tt}function Tt(){this.i=null,this.g="",this.h=!1}var Zo={},Na={};function rr(d,v,_){d.L=1,d.v=Os(Cn(v)),d.m=_,d.P=!0,Fr(d,null)}function Fr(d,v){d.F=Date.now(),Cs(d),d.A=Cn(d.v);var _=d.A,R=d.R;Array.isArray(R)||(R=[String(R)]),il(_.i,"t",R),d.C=0,_=d.j.J,d.h=new Tt,d.g=mu(d.j,_?v:null,!d.m),0<d.O&&(d.M=new Zh(w(d.Y,d,d.g),d.O)),v=d.U,_=d.g,R=d.ca;var G="readystatechange";Array.isArray(G)||(G&&(Ss[0]=G.toString()),G=Ss);for(var Z=0;Z<G.length;Z++){var me=hr(_,G[Z],R||v.handleEvent,!1,v.h||v);if(!me)break;v.g[me.key]=me}v=d.H?C(d.H):{},d.m?(d.u||(d.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",d.g.ea(d.A,d.u,d.m,v)):(d.u="GET",d.g.ea(d.A,d.u,null,v)),Ri(),Xo(d.i,d.u,d.A,d.l,d.R,d.m)}hn.prototype.ca=function(d){d=d.target;const v=this.M;v&&qn(d)==3?v.j():this.Y(d)},hn.prototype.Y=function(d){try{if(d==this.g)e:{const Ut=qn(this.g);var v=this.g.Ba();const Wr=this.g.Z();if(!(3>Ut)&&(Ut!=3||this.g&&(this.h.h||this.g.oa()||ou(this.g)))){this.J||Ut!=4||v==7||(v==8||0>=Wr?Ri(3):Ri(2)),ji(this);var _=this.g.Z();this.X=_;t:if(eu(this)){var R=ou(this.g);d="";var G=R.length,Z=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),gr(this);var me="";break t}this.h.i=new p.TextDecoder}for(v=0;v<G;v++)this.h.h=!0,d+=this.h.i.decode(R[v],{stream:!(Z&&v==G-1)});R.length=0,this.h.g+=d,this.C=0,me=this.h.g}else me=this.g.oa();if(this.o=_==200,Jh(this.i,this.u,this.A,this.l,this.R,Ut,_),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,Vt=this.g;if(($e=Vt.g?Vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B($e)){var Qe=$e;break t}}Qe=null}if(_=Qe)Ci(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Is(this,_);else{this.o=!1,this.s=3,mt(12),Wt(this),gr(this);break e}}if(this.P){_=!0;let Xt;for(;!this.J&&this.C<me.length;)if(Xt=tu(this,me),Xt==Na){Ut==4&&(this.s=4,mt(14),_=!1),Ci(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Zo){this.s=4,mt(15),Ci(this.i,this.l,me,"[Invalid Chunk]"),_=!1;break}else Ci(this.i,this.l,Xt,null),Is(this,Xt);if(eu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ut!=4||me.length!=0||this.h.h||(this.s=1,mt(16),_=!1),this.o=this.o&&_,!_)Ci(this.i,this.l,me,"[Invalid Chunked Response]"),Wt(this),gr(this);else if(0<me.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+me.length),Bs(Ht),Ht.M=!0,mt(11))}}else Ci(this.i,this.l,me,null),Is(this,me);Ut==4&&Wt(this),this.o&&!this.J&&(Ut==4?hu(this.j,this):(this.o=!1,Cs(this)))}else sf(this.g),_==400&&0<me.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Wt(this),gr(this)}}}catch{}finally{}};function eu(d){return d.g?d.u=="GET"&&d.L!=2&&d.j.Ca:!1}function tu(d,v){var _=d.C,R=v.indexOf(`
`,_);return R==-1?Na:(_=Number(v.substring(_,R)),isNaN(_)?Zo:(R+=1,R+_>v.length?Na:(v=v.slice(R,R+_),d.C=R+_,v)))}hn.prototype.cancel=function(){this.J=!0,Wt(this)};function Cs(d){d.S=Date.now()+d.I,nu(d,d.I)}function nu(d,v){if(d.B!=null)throw Error("WatchDog timer not null");d.B=Ct(w(d.ba,d),v)}function ji(d){d.B&&(p.clearTimeout(d.B),d.B=null)}hn.prototype.ba=function(){this.B=null;const d=Date.now();0<=d-this.S?(Jc(this.i,this.A),this.L!=2&&(Ri(),mt(17)),Wt(this),this.s=2,gr(this)):nu(this,this.S-d)};function gr(d){d.j.G==0||d.J||hu(d.j,d)}function Wt(d){ji(d);var v=d.M;v&&typeof v.ma=="function"&&v.ma(),d.M=null,As(d.U),d.g&&(v=d.g,d.g=null,v.abort(),v.ma())}function Is(d,v){try{var _=d.j;if(_.G!=0&&(_.g==d||Jo(_.h,d))){if(!d.K&&Jo(_.h,d)&&_.G==3){try{var R=_.Da.g.parse(v)}catch{R=null}if(Array.isArray(R)&&R.length==3){var G=R;if(G[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<d.F)Ua(_),La(_);else break e;cl(_),mt(18)}}else _.za=G[1],0<_.za-_.T&&37500>G[2]&&_.F&&_.v==0&&!_.C&&(_.C=Ct(w(_.Za,_),6e3));if(1>=Ca(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Kr(_,11)}else if((d.K||_.g==d)&&Ua(_),!B(v))for(G=_.Da.g.parse(v),v=0;v<G.length;v++){let Qe=G[v];if(_.T=Qe[0],Qe=Qe[1],_.G==2)if(Qe[0]=="c"){_.K=Qe[1],_.ia=Qe[2];const Ht=Qe[3];Ht!=null&&(_.la=Ht,_.j.info("VER="+_.la));const Ut=Qe[4];Ut!=null&&(_.Aa=Ut,_.j.info("SVER="+_.Aa));const Wr=Qe[5];Wr!=null&&typeof Wr=="number"&&0<Wr&&(R=1.5*Wr,_.L=R,_.j.info("backChannelRequestTimeoutMs_="+R)),R=_;const Xt=d.g;if(Xt){const wr=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wr){var Z=R.h;Z.g||wr.indexOf("spdy")==-1&&wr.indexOf("quic")==-1&&wr.indexOf("h2")==-1||(Z.j=Z.l,Z.g=new Set,Z.h&&(Ia(Z,Z.h),Z.h=null))}if(R.D){const dl=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;dl&&(R.ya=dl,st(R.I,R.D,dl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-d.F,_.j.info("Handshake RTT: "+_.R+"ms")),R=_;var me=d;if(R.qa=pu(R,R.J?R.ia:null,R.W),me.K){fn(R.h,me);var $e=me,Vt=R.L;Vt&&($e.I=Vt),$e.B&&(ji($e),Cs($e)),R.g=me}else uu(R);0<_.i.length&&Va(_)}else Qe[0]!="stop"&&Qe[0]!="close"||Kr(_,7);else _.G==3&&(Qe[0]=="stop"||Qe[0]=="close"?Qe[0]=="stop"?Kr(_,7):ol(_):Qe[0]!="noop"&&_.l&&_.l.ta(Qe),_.v=0)}}Ri(4)}catch{}}var ru=class{constructor(d,v){this.g=d,this.map=v}};function qr(d){this.l=d||10,p.PerformanceNavigationTiming?(d=p.performance.getEntriesByType("navigation"),d=0<d.length&&(d[0].nextHopProtocol=="hq"||d[0].nextHopProtocol=="h2")):d=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=d?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ra(d){return d.h?!0:d.g?d.g.size>=d.j:!1}function Ca(d){return d.h?1:d.g?d.g.size:0}function Jo(d,v){return d.h?d.h==v:d.g?d.g.has(v):!1}function Ia(d,v){d.g?d.g.add(v):d.h=v}function fn(d,v){d.h&&d.h==v?d.h=null:d.g&&d.g.has(v)&&d.g.delete(v)}qr.prototype.cancel=function(){if(this.i=el(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const d of this.g.values())d.cancel();this.g.clear()}};function el(d){if(d.h!=null)return d.i.concat(d.h.D);if(d.g!=null&&d.g.size!==0){let v=d.i;for(const _ of d.g.values())v=v.concat(_.D);return v}return U(d.i)}function ef(d){if(d.V&&typeof d.V=="function")return d.V();if(typeof Map<"u"&&d instanceof Map||typeof Set<"u"&&d instanceof Set)return Array.from(d.values());if(typeof d=="string")return d.split("");if(g(d)){for(var v=[],_=d.length,R=0;R<_;R++)v.push(d[R]);return v}v=[],_=0;for(R in d)v[_++]=d[R];return v}function ja(d){if(d.na&&typeof d.na=="function")return d.na();if(!d.V||typeof d.V!="function"){if(typeof Map<"u"&&d instanceof Map)return Array.from(d.keys());if(!(typeof Set<"u"&&d instanceof Set)){if(g(d)||typeof d=="string"){var v=[];d=d.length;for(var _=0;_<d;_++)v.push(_);return v}v=[],_=0;for(const R in d)v[_++]=R;return v}}}function tl(d,v){if(d.forEach&&typeof d.forEach=="function")d.forEach(v,void 0);else if(g(d)||typeof d=="string")Array.prototype.forEach.call(d,v,void 0);else for(var _=ja(d),R=ef(d),G=R.length,Z=0;Z<G;Z++)v.call(void 0,R[Z],_&&_[Z],d)}var js=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tf(d,v){if(d){d=d.split("&");for(var _=0;_<d.length;_++){var R=d[_].indexOf("="),G=null;if(0<=R){var Z=d[_].substring(0,R);G=d[_].substring(R+1)}else Z=d[_];v(Z,G?decodeURIComponent(G.replace(/\+/g," ")):"")}}}function It(d){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,d instanceof It){this.h=d.h,Ds(this,d.j),this.o=d.o,this.g=d.g,Di(this,d.s),this.l=d.l;var v=d.i,_=new Gr;_.i=v.i,v.g&&(_.g=new Map(v.g),_.h=v.h),Hr(this,_),this.m=d.m}else d&&(v=String(d).match(js))?(this.h=!1,Ds(this,v[1]||"",!0),this.o=zn(v[2]||""),this.g=zn(v[3]||"",!0),Di(this,v[4]),this.l=zn(v[5]||"",!0),Hr(this,v[6]||"",!0),this.m=zn(v[7]||"")):(this.h=!1,this.i=new Gr(null,this.h))}It.prototype.toString=function(){var d=[],v=this.j;v&&d.push(ks(v,nl,!0),":");var _=this.g;return(_||v=="file")&&(d.push("//"),(v=this.o)&&d.push(ks(v,nl,!0),"@"),d.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&d.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&d.push("/"),d.push(ks(_,_.charAt(0)=="/"?nf:rl,!0))),(_=this.i.toString())&&d.push("?",_),(_=this.m)&&d.push("#",ks(_,Da)),d.join("")};function Cn(d){return new It(d)}function Ds(d,v,_){d.j=_?zn(v,!0):v,d.j&&(d.j=d.j.replace(/:$/,""))}function Di(d,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);d.s=v}else d.s=null}function Hr(d,v,_){v instanceof Gr?(d.i=v,su(d.i,d.h)):(_||(v=ks(v,rf)),d.i=new Gr(v,d.h))}function st(d,v,_){d.i.set(v,_)}function Os(d){return st(d,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),d}function zn(d,v){return d?v?decodeURI(d.replace(/%25/g,"%2525")):decodeURIComponent(d):""}function ks(d,v,_){return typeof d=="string"?(d=encodeURI(d).replace(v,iu),_&&(d=d.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d):null}function iu(d){return d=d.charCodeAt(0),"%"+(d>>4&15).toString(16)+(d&15).toString(16)}var nl=/[#\/\?@]/g,rl=/[#\?:]/g,nf=/[#\?]/g,rf=/[#\?@]/g,Da=/#/g;function Gr(d,v){this.h=this.g=null,this.i=d||null,this.j=!!v}function Bn(d){d.g||(d.g=new Map,d.h=0,d.i&&tf(d.i,function(v,_){d.add(decodeURIComponent(v.replace(/\+/g," ")),_)}))}r=Gr.prototype,r.add=function(d,v){Bn(this),this.i=null,d=yr(this,d);var _=this.g.get(d);return _||this.g.set(d,_=[]),_.push(v),this.h+=1,this};function Yr(d,v){Bn(d),v=yr(d,v),d.g.has(v)&&(d.i=null,d.h-=d.g.get(v).length,d.g.delete(v))}function $r(d,v){return Bn(d),v=yr(d,v),d.g.has(v)}r.forEach=function(d,v){Bn(this),this.g.forEach(function(_,R){_.forEach(function(G){d.call(v,G,R,this)},this)},this)},r.na=function(){Bn(this);const d=Array.from(this.g.values()),v=Array.from(this.g.keys()),_=[];for(let R=0;R<v.length;R++){const G=d[R];for(let Z=0;Z<G.length;Z++)_.push(v[R])}return _},r.V=function(d){Bn(this);let v=[];if(typeof d=="string")$r(this,d)&&(v=v.concat(this.g.get(yr(this,d))));else{d=Array.from(this.g.values());for(let _=0;_<d.length;_++)v=v.concat(d[_])}return v},r.set=function(d,v){return Bn(this),this.i=null,d=yr(this,d),$r(this,d)&&(this.h-=this.g.get(d).length),this.g.set(d,[v]),this.h+=1,this},r.get=function(d,v){return d?(d=this.V(d),0<d.length?String(d[0]):v):v};function il(d,v,_){Yr(d,v),0<_.length&&(d.i=null,d.g.set(yr(d,v),U(_)),d.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const d=[],v=Array.from(this.g.keys());for(var _=0;_<v.length;_++){var R=v[_];const Z=encodeURIComponent(String(R)),me=this.V(R);for(R=0;R<me.length;R++){var G=Z;me[R]!==""&&(G+="="+encodeURIComponent(String(me[R]))),d.push(G)}}return this.i=d.join("&")};function yr(d,v){return v=String(v),d.j&&(v=v.toLowerCase()),v}function su(d,v){v&&!d.j&&(Bn(d),d.i=null,d.g.forEach(function(_,R){var G=R.toLowerCase();R!=G&&(Yr(this,R),il(this,G,_))},d)),d.j=v}function Ms(d,v){const _=new Un;if(p.Image){const R=new Image;R.onload=I(Fn,_,"TestLoadImage: loaded",!0,v,R),R.onerror=I(Fn,_,"TestLoadImage: error",!1,v,R),R.onabort=I(Fn,_,"TestLoadImage: abort",!1,v,R),R.ontimeout=I(Fn,_,"TestLoadImage: timeout",!1,v,R),p.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=d}else v(!1)}function ir(d,v){const _=new Un,R=new AbortController,G=setTimeout(()=>{R.abort(),Fn(_,"TestPingServer: timeout",!1,v)},1e4);fetch(d,{signal:R.signal}).then(Z=>{clearTimeout(G),Z.ok?Fn(_,"TestPingServer: ok",!0,v):Fn(_,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(G),Fn(_,"TestPingServer: error",!1,v)})}function Fn(d,v,_,R,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),R(_)}catch{}}function Ps(){this.g=new Ns}function vr(d,v,_){const R=_||"";try{tl(d,function(G,Z){let me=G;y(G)&&(me=nr(G)),v.push(R+Z+"="+encodeURIComponent(me))})}catch(G){throw v.push(R+"type="+encodeURIComponent("_badmap")),G}}function Oi(d){this.l=d.Ub||null,this.j=d.eb||!1}N(Oi,Yo),Oi.prototype.g=function(){return new Qr(this.l,this.j)},Oi.prototype.i=(function(d){return function(){return d}})({});function Qr(d,v){Ye.call(this),this.D=d,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Qr,Ye),r=Qr.prototype,r.open=function(d,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=d,this.A=v,this.readyState=1,_r(this)},r.send=function(d){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};d&&(v.body=d),(this.D||p).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},r.Sa=function(d){if(this.g&&(this.l=d,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=d.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")d.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in d){if(this.j=d.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sl(this)}else d.text().then(this.Ra.bind(this),this.ga.bind(this))};function sl(d){d.j.read().then(d.Pa.bind(d)).catch(d.ga.bind(d))}r.Pa=function(d){if(this.g){if(this.o&&d.value)this.response.push(d.value);else if(!this.o){var v=d.value?d.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!d.done}))&&(this.response=this.responseText+=v)}d.done?xr(this):_r(this),this.readyState==3&&sl(this)}},r.Ra=function(d){this.g&&(this.response=this.responseText=d,xr(this))},r.Qa=function(d){this.g&&(this.response=d,xr(this))},r.ga=function(){this.g&&xr(this)};function xr(d){d.readyState=4,d.l=null,d.j=null,d.v=null,_r(d)}r.setRequestHeader=function(d,v){this.u.append(d,v)},r.getResponseHeader=function(d){return this.h&&this.h.get(d.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const d=[],v=this.h.entries();for(var _=v.next();!_.done;)_=_.value,d.push(_[0]+": "+_[1]),_=v.next();return d.join(`\r
`)};function _r(d){d.onreadystatechange&&d.onreadystatechange.call(d)}Object.defineProperty(Qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(d){this.m=d?"include":"same-origin"}});function al(d){let v="";return ne(d,function(_,R){v+=R,v+=":",v+=_,v+=`\r
`}),v}function qt(d,v,_){e:{for(R in _){var R=!1;break e}R=!0}R||(_=al(_),typeof d=="string"?_!=null&&encodeURIComponent(String(_)):st(d,v,_))}function tt(d){Ye.call(this),this.headers=new Map,this.o=d||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(tt,Ye);var Oa=/^https?$/i,Ls=["POST","PUT"];r=tt.prototype,r.Ha=function(d){this.J=d},r.ea=function(d,v,_,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+d);v=v?v.toUpperCase():"GET",this.D=d,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pr.g(),this.v=this.o?$o(this.o):$o(pr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(v,String(d),!0),this.B=!1}catch(Z){au(this,Z);return}if(d=_||"",_=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var G in R)_.set(G,R[G]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const Z of R.keys())_.set(Z,R.get(Z));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(_.keys()).find(Z=>Z.toLowerCase()=="content-type"),G=p.FormData&&d instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Ls,v,void 0))||R||G||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Z,me]of _)this.g.setRequestHeader(Z,me);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vs(this),this.u=!0,this.g.send(d),this.u=!1}catch(Z){au(this,Z)}};function au(d,v){d.h=!1,d.g&&(d.j=!0,d.g.abort(),d.j=!1),d.l=v,d.m=5,ka(d),br(d)}function ka(d){d.A||(d.A=!0,Xe(d,"complete"),Xe(d,"error"))}r.abort=function(d){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=d||7,Xe(this,"complete"),Xe(this,"abort"),br(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),tt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ma(this):this.bb())},r.bb=function(){Ma(this)};function Ma(d){if(d.h&&typeof h<"u"&&(!d.v[1]||qn(d)!=4||d.Z()!=2)){if(d.u&&qn(d)==4)sn(d.Ea,0,d);else if(Xe(d,"readystatechange"),qn(d)==4){d.h=!1;try{const me=d.Z();e:switch(me){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var _;if(!(_=v)){var R;if(R=me===0){var G=String(d.D).match(js)[1]||null;!G&&p.self&&p.self.location&&(G=p.self.location.protocol.slice(0,-1)),R=!Oa.test(G?G.toLowerCase():"")}_=R}if(_)Xe(d,"complete"),Xe(d,"success");else{d.m=6;try{var Z=2<qn(d)?d.g.statusText:""}catch{Z=""}d.l=Z+" ["+d.Z()+"]",ka(d)}}finally{br(d)}}}}function br(d,v){if(d.g){Vs(d);const _=d.g,R=d.v[0]?()=>{}:null;d.g=null,d.v=null,v||Xe(d,"ready");try{_.onreadystatechange=R}catch{}}}function Vs(d){d.I&&(p.clearTimeout(d.I),d.I=null)}r.isActive=function(){return!!this.g};function qn(d){return d.g?d.g.readyState:0}r.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(d){if(this.g){var v=this.g.responseText;return d&&v.indexOf(d)==0&&(v=v.substring(d.length)),Sa(v)}};function ou(d){try{if(!d.g)return null;if("response"in d.g)return d.g.response;switch(d.H){case"":case"text":return d.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in d.g)return d.g.mozResponseArrayBuffer}return null}catch{return null}}function sf(d){const v={};d=(d.g&&2<=qn(d)&&d.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<d.length;R++){if(B(d[R]))continue;var _=D(d[R]);const G=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const Z=v[G]||[];v[G]=Z,Z.push(_)}k(v,function(R){return R.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Us(d,v,_){return _&&_.internalChannelParams&&_.internalChannelParams[d]||v}function Pa(d){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Us("failFast",!1,d),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Us("baseRetryDelayMs",5e3,d),this.cb=Us("retryDelaySeedMs",1e4,d),this.Wa=Us("forwardChannelMaxRetries",2,d),this.wa=Us("forwardChannelRequestTimeoutMs",2e4,d),this.pa=d&&d.xmlHttpFactory||void 0,this.Xa=d&&d.Tb||void 0,this.Ca=d&&d.useFetchStreams||!1,this.L=void 0,this.J=d&&d.supportsCrossDomainXhr||!1,this.K="",this.h=new qr(d&&d.concurrentRequestLimit),this.Da=new Ps,this.P=d&&d.fastHandshake||!1,this.O=d&&d.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=d&&d.Rb||!1,d&&d.xa&&this.j.xa(),d&&d.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&d&&d.detectBufferingProxy||!1,this.ja=void 0,d&&d.longPollingTimeout&&0<d.longPollingTimeout&&(this.ja=d.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Pa.prototype,r.la=8,r.G=1,r.connect=function(d,v,_,R){mt(0),this.W=d,this.H=v||{},_&&R!==void 0&&(this.H.OSID=_,this.H.OAID=R),this.F=this.X,this.I=pu(this,null,this.W),Va(this)};function ol(d){if(lu(d),d.G==3){var v=d.U++,_=Cn(d.I);if(st(_,"SID",d.K),st(_,"RID",v),st(_,"TYPE","terminate"),zs(d,_),v=new hn(d,d.j,v),v.L=2,v.v=Os(Cn(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(v.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=v.v,_=!0),_||(v.g=mu(v.j,null),v.g.ea(v.v)),v.F=Date.now(),Cs(v)}fu(d)}function La(d){d.g&&(Bs(d),d.g.cancel(),d.g=null)}function lu(d){La(d),d.u&&(p.clearTimeout(d.u),d.u=null),Ua(d),d.h.cancel(),d.s&&(typeof d.s=="number"&&p.clearTimeout(d.s),d.s=null)}function Va(d){if(!Ra(d.h)&&!d.s){d.s=!0;var v=d.Ga;ue||z(),ye||(ue(),ye=!0),Re.add(v,d),d.B=0}}function af(d,v){return Ca(d.h)>=d.h.j-(d.s?1:0)?!1:d.s?(d.i=v.D.concat(d.i),!0):d.G==1||d.G==2||d.B>=(d.Va?0:d.Wa)?!1:(d.s=Ct(w(d.Ga,d,v),ul(d,d.B)),d.B++,!0)}r.Ga=function(d){if(this.s)if(this.s=null,this.G==1){if(!d){this.U=Math.floor(1e5*Math.random()),d=this.U++;const G=new hn(this,this.j,d);let Z=this.o;if(this.S&&(Z?(Z=C(Z),O(Z,this.S)):Z=this.S),this.m!==null||this.O||(G.H=Z,Z=null),this.P)e:{for(var v=0,_=0;_<this.i.length;_++){t:{var R=this.i[_];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break t}R=void 0}if(R===void 0)break;if(v+=R,4096<v){v=_;break e}if(v===4096||_===this.i.length-1){v=_+1;break e}}v=1e3}else v=1e3;v=cu(this,G,v),_=Cn(this.I),st(_,"RID",d),st(_,"CVER",22),this.D&&st(_,"X-HTTP-Session-Id",this.D),zs(this,_),Z&&(this.O?v="headers="+encodeURIComponent(String(al(Z)))+"&"+v:this.m&&qt(_,this.m,Z)),Ia(this.h,G),this.Ua&&st(_,"TYPE","init"),this.P?(st(_,"$req",v),st(_,"SID","null"),G.T=!0,rr(G,_,null)):rr(G,_,v),this.G=2}}else this.G==3&&(d?ll(this,d):this.i.length==0||Ra(this.h)||ll(this))};function ll(d,v){var _;v?_=v.l:_=d.U++;const R=Cn(d.I);st(R,"SID",d.K),st(R,"RID",_),st(R,"AID",d.T),zs(d,R),d.m&&d.o&&qt(R,d.m,d.o),_=new hn(d,d.j,_,d.B+1),d.m===null&&(_.H=d.o),v&&(d.i=v.D.concat(d.i)),v=cu(d,_,1e3),_.I=Math.round(.5*d.wa)+Math.round(.5*d.wa*Math.random()),Ia(d.h,_),rr(_,R,v)}function zs(d,v){d.H&&ne(d.H,function(_,R){st(v,R,_)}),d.l&&tl({},function(_,R){st(v,R,_)})}function cu(d,v,_){_=Math.min(d.i.length,_);var R=d.l?w(d.l.Na,d.l,d):null;e:{var G=d.i;let Z=-1;for(;;){const me=["count="+_];Z==-1?0<_?(Z=G[0].g,me.push("ofs="+Z)):Z=0:me.push("ofs="+Z);let $e=!0;for(let Vt=0;Vt<_;Vt++){let Qe=G[Vt].g;const Ht=G[Vt].map;if(Qe-=Z,0>Qe)Z=Math.max(0,G[Vt].g-100),$e=!1;else try{vr(Ht,me,"req"+Qe+"_")}catch{R&&R(Ht)}}if($e){R=me.join("&");break e}}}return d=d.i.splice(0,_),v.D=d,R}function uu(d){if(!d.g&&!d.u){d.Y=1;var v=d.Fa;ue||z(),ye||(ue(),ye=!0),Re.add(v,d),d.v=0}}function cl(d){return d.g||d.u||3<=d.v?!1:(d.Y++,d.u=Ct(w(d.Fa,d),ul(d,d.v)),d.v++,!0)}r.Fa=function(){if(this.u=null,du(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var d=2*this.R;this.j.info("BP detection timer enabled: "+d),this.A=Ct(w(this.ab,this),d)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),La(this),du(this))};function Bs(d){d.A!=null&&(p.clearTimeout(d.A),d.A=null)}function du(d){d.g=new hn(d,d.j,"rpc",d.Y),d.m===null&&(d.g.H=d.o),d.g.O=0;var v=Cn(d.qa);st(v,"RID","rpc"),st(v,"SID",d.K),st(v,"AID",d.T),st(v,"CI",d.F?"0":"1"),!d.F&&d.ja&&st(v,"TO",d.ja),st(v,"TYPE","xmlhttp"),zs(d,v),d.m&&d.o&&qt(v,d.m,d.o),d.L&&(d.g.I=d.L);var _=d.g;d=d.ia,_.L=1,_.v=Os(Cn(v)),_.m=null,_.P=!0,Fr(_,d)}r.Za=function(){this.C!=null&&(this.C=null,La(this),cl(this),mt(19))};function Ua(d){d.C!=null&&(p.clearTimeout(d.C),d.C=null)}function hu(d,v){var _=null;if(d.g==v){Ua(d),Bs(d),d.g=null;var R=2}else if(Jo(d.h,v))_=v.D,fn(d.h,v),R=1;else return;if(d.G!=0){if(v.o)if(R==1){_=v.m?v.m.length:0,v=Date.now()-v.F;var G=d.B;R=Ni(),Xe(R,new Lt(R,_)),Va(d)}else uu(d);else if(G=v.s,G==3||G==0&&0<v.X||!(R==1&&af(d,v)||R==2&&cl(d)))switch(_&&0<_.length&&(v=d.h,v.i=v.i.concat(_)),G){case 1:Kr(d,5);break;case 4:Kr(d,10);break;case 3:Kr(d,6);break;default:Kr(d,2)}}}function ul(d,v){let _=d.Ta+Math.floor(Math.random()*d.cb);return d.isActive()||(_*=2),_*v}function Kr(d,v){if(d.j.info("Error code "+v),v==2){var _=w(d.fb,d),R=d.Xa;const G=!R;R=new It(R||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Ds(R,"https"),Os(R),G?Ms(R.toString(),_):ir(R.toString(),_)}else mt(2);d.G=0,d.l&&d.l.sa(v),fu(d),lu(d)}r.fb=function(d){d?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function fu(d){if(d.G=0,d.ka=[],d.l){const v=el(d.h);(v.length!=0||d.i.length!=0)&&(M(d.ka,v),M(d.ka,d.i),d.h.i.length=0,U(d.i),d.i.length=0),d.l.ra()}}function pu(d,v,_){var R=_ instanceof It?Cn(_):new It(_);if(R.g!="")v&&(R.g=v+"."+R.g),Di(R,R.s);else{var G=p.location;R=G.protocol,v=v?v+"."+G.hostname:G.hostname,G=+G.port;var Z=new It(null);R&&Ds(Z,R),v&&(Z.g=v),G&&Di(Z,G),_&&(Z.l=_),R=Z}return _=d.D,v=d.ya,_&&v&&st(R,_,v),st(R,"VER",d.la),zs(d,R),R}function mu(d,v,_){if(v&&!d.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=d.Ca&&!d.pa?new tt(new Oi({eb:_})):new tt(d.pa),v.Ha(d.J),v}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function gu(){}r=gu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function za(){}za.prototype.g=function(d,v){return new pn(d,v)};function pn(d,v){Ye.call(this),this.g=new Pa(v),this.l=d,this.h=v&&v.messageUrlParams||null,d=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(d?d["X-Client-Protocol"]="webchannel":d={"X-Client-Protocol":"webchannel"}),this.g.o=d,d=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(d?d["X-WebChannel-Content-Type"]=v.messageContentType:d={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(d?d["X-WebChannel-Client-Profile"]=v.va:d={"X-WebChannel-Client-Profile":v.va}),this.g.S=d,(d=v&&v.Sb)&&!B(d)&&(this.g.m=d),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!B(v)&&(this.g.D=v,d=this.h,d!==null&&v in d&&(d=this.h,v in d&&delete d[v])),this.j=new Er(this)}N(pn,Ye),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){ol(this.g)},pn.prototype.o=function(d){var v=this.g;if(typeof d=="string"){var _={};_.__data__=d,d=_}else this.u&&(_={},_.__data__=nr(d),d=_);v.i.push(new ru(v.Ya++,d)),v.G==3&&Va(v)},pn.prototype.N=function(){this.g.l=null,delete this.j,ol(this.g),delete this.g,pn.aa.N.call(this)};function yu(d){zr.call(this),d.__headers__&&(this.headers=d.__headers__,this.statusCode=d.__status__,delete d.__headers__,delete d.__status__);var v=d.__sm__;if(v){e:{for(const _ in v){d=_;break e}d=void 0}(this.i=d)&&(d=this.i,v=v!==null&&d in v?v[d]:void 0),this.data=v}else this.data=d}N(yu,zr);function vu(){Ko.call(this),this.status=1}N(vu,Ko);function Er(d){this.g=d}N(Er,gu),Er.prototype.ua=function(){Xe(this.g,"a")},Er.prototype.ta=function(d){Xe(this.g,new yu(d))},Er.prototype.sa=function(d){Xe(this.g,new vu)},Er.prototype.ra=function(){Xe(this.g,"b")},za.prototype.createWebChannel=za.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,ub=function(){return new za},cb=function(){return Ni()},lb=fr,km={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ii.NO_ERROR=0,Ii.TIMEOUT=8,Ii.HTTP_ERROR=6,$d=Ii,Br.COMPLETE="complete",ob=Br,Qo.EventType=Ur,Ur.OPEN="a",Ur.CLOSE="b",Ur.ERROR="c",Ur.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,rc=Qo,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,ab=tt}).apply(typeof Md<"u"?Md:typeof self<"u"?self:typeof window<"u"?window:{});const O2="@firebase/firestore",k2="4.9.0";/**
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
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
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
 */let zo="12.0.0";/**
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
 */const ma=new ug("@firebase/firestore");function go(){return ma.logLevel}function _e(r,...e){if(ma.logLevel<=Fe.DEBUG){const n=e.map(Eg);ma.debug(`Firestore (${zo}): ${r}`,...n)}}function xi(r,...e){if(ma.logLevel<=Fe.ERROR){const n=e.map(Eg);ma.error(`Firestore (${zo}): ${r}`,...n)}}function Io(r,...e){if(ma.logLevel<=Fe.WARN){const n=e.map(Eg);ma.warn(`Firestore (${zo}): ${r}`,...n)}}function Eg(r){if(typeof r=="string")return r;try{/**
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
 */function je(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,db(r,s,n)}function db(r,e,n){let s=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw xi(s),new Error(s)}function nt(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||db(e,o,s)}function Pe(r,e){return r}/**
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
 */const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends Ti{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pi{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class hb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(cn.UNAUTHENTICATED)))}shutdown(){}}class VA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class UA{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){nt(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let c=new pi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new pi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=c;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},p=g=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new pi)}}),0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(nt(typeof s.accessToken=="string",31837,{l:s}),new hb(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return nt(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class zA{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class BA{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new zA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(cn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class M2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){nt(this.o===void 0,3512);const s=c=>{c.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,_e("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const o=c=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new M2(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(nt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new M2(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class wg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=qA(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=e.charAt(o[c]%62))}return s}}function qe(r,e){return r<e?-1:r>e?1:0}function Mm(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),c=e.charAt(s);if(o!==c)return ym(o)===ym(c)?qe(o,c):ym(o)?1:-1}return qe(r.length,e.length)}const HA=55296,GA=57343;function ym(r){const e=r.charCodeAt(0);return e>=HA&&e<=GA}function jo(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
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
 */const P2="__name__";class Cr{constructor(e,n,s){n===void 0?n=0:n>e.length&&je(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&je(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Cr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cr?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const c=Cr.compareSegments(e.get(o),n.get(o));if(c!==0)return c}return qe(e.length,n.length)}static compareSegments(e,n){const s=Cr.isNumericId(e),o=Cr.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Cr.extractNumericId(e).compare(Cr.extractNumericId(n)):Mm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return us.fromString(e.substring(4,e.length-2))}}class ht extends Cr{construct(e,n,s){return new ht(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ge(se.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new ht(n)}static emptyPath(){return new ht([])}}const YA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends Cr{construct(e,n,s){return new nn(e,n,s)}static isValidIdentifier(e){return YA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===P2}static keyField(){return new nn([P2])}static fromServerFormat(e){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new ge(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ge(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ge(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(c(),o++)}if(c(),h)throw new ge(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(n)}static emptyPath(){return new nn([])}}/**
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
 */class Se{constructor(e){this.path=e}static fromPath(e){return new Se(ht.fromString(e))}static fromName(e){return new Se(ht.fromString(e).popFirst(5))}static empty(){return new Se(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ht.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ht.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Se(new ht(e.slice()))}}/**
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
 */function fb(r,e,n){if(!n)throw new ge(se.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function $A(r,e,n,s){if(e===!0&&s===!0)throw new ge(se.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function L2(r){if(!Se.isDocumentKey(r))throw new ge(se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function V2(r){if(Se.isDocumentKey(r))throw new ge(se.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function pb(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Dh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":je(12329,{type:typeof r})}function Sn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ge(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dh(r);throw new ge(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
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
 */function Mt(r,e){const n={typeString:r};return e&&(n.value=e),n}function Fc(r,e){if(!pb(r))throw new ge(se.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&h!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new ge(se.INVALID_ARGUMENT,n);return!0}/**
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
 */const U2=-62135596800,z2=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*z2);return new ct(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ge(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ge(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<U2)throw new ge(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/z2}_compareTo(e){return this.seconds===e.seconds?qe(this.nanoseconds,e.nanoseconds):qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fc(e,ct._jsonSchema))return new ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-U2;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ct._jsonSchemaVersion="firestore/timestamp/1.0",ct._jsonSchema={type:Mt("string",ct._jsonSchemaVersion),seconds:Mt("number"),nanoseconds:Mt("number")};/**
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
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new ct(0,0))}static max(){return new ke(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Tc=-1;function QA(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ke.fromTimestamp(s===1e9?new ct(n+1,0):new ct(n,s));return new hs(o,Se.empty(),e)}function KA(r){return new hs(r.readTime,r.key,Tc)}class hs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new hs(ke.min(),Se.empty(),Tc)}static max(){return new hs(ke.max(),Se.empty(),Tc)}}function WA(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=Se.comparator(r.documentKey,e.documentKey),n!==0?n:qe(r.largestBatchId,e.largestBatchId))}/**
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
 */const XA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Bo(r){if(r.code!==se.FAILED_PRECONDITION||r.message!==XA)throw r;_e("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ce{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&je(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ce(((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof ce?n:ce.resolve(n)}catch(n){return ce.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):ce.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):ce.reject(n)}static resolve(e){return new ce(((n,s)=>{n(e)}))}static reject(e){return new ce(((n,s)=>{s(e)}))}static waitFor(e){return new ce(((n,s)=>{let o=0,c=0,h=!1;e.forEach((p=>{++o,p.next((()=>{++c,h&&c===o&&n()}),(g=>s(g)))})),h=!0,c===o&&n()}))}static or(e){let n=ce.resolve(!1);for(const s of e)n=n.next((o=>o?ce.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,c)=>{s.push(n.call(this,o,c))})),this.waitFor(s)}static mapArray(e,n){return new ce(((s,o)=>{const c=e.length,h=new Array(c);let p=0;for(let g=0;g<c;g++){const y=g;n(e[y]).next((x=>{h[y]=x,++p,p===c&&s(h)}),(x=>o(x)))}}))}static doWhile(e,n){return new ce(((s,o)=>{const c=()=>{e()===!0?n().next((()=>{c()}),o):s()};c()}))}}function JA(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Oh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Oh.ce=-1;/**
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
 */const Tg=-1;function kh(r){return r==null}function hh(r){return r===0&&1/r==-1/0}function eN(r){return typeof r=="number"&&Number.isInteger(r)&&!hh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const mb="";function tN(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=B2(e)),e=nN(r.get(n),e);return B2(e)}function nN(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":n+="";break;case mb:n+="";break;default:n+=c}}return n}function B2(r){return r+mb+""}/**
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
 */function F2(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function bs(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function gb(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class _t{constructor(e,n){this.comparator=e,this.root=n||tn.EMPTY}insert(e,n){return new _t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pd(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pd(this.root,e,this.comparator,!0)}}class Pd{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&o&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,n,s,o,c){this.key=e,this.value=n,this.color=s??tn.RED,this.left=o??tn.EMPTY,this.right=c??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,c){return new tn(e??this.key,n??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const c=s(e,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(e,n,s),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return tn.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw je(43730,{key:this.key,value:this.value});if(this.right.isRed())throw je(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw je(27949);return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw je(57766)}get value(){throw je(16141)}get color(){throw je(16727)}get left(){throw je(29726)}get right(){throw je(36894)}copy(e,n,s,o,c){return this}insert(e,n,s){return new tn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ft{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new q2(this.data.getIterator())}getIteratorFrom(e){return new q2(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ft(this.comparator);return n.data=e,n}}class q2{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ln{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new Ln([])}unionWith(e){let n=new Ft(nn.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class yb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new yb("Invalid base64 string: "+c):c}})(e);return new rn(n)}static fromUint8Array(e){const n=(function(o){let c="";for(let h=0;h<o.length;++h)c+=String.fromCharCode(o[h]);return c})(e);return new rn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rn.EMPTY_BYTE_STRING=new rn("");const rN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fs(r){if(nt(!!r,39018),typeof r=="string"){let e=0;const n=rN.exec(r);if(nt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Nt(r.seconds),nanos:Nt(r.nanos)}}function Nt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ps(r){return typeof r=="string"?rn.fromBase64String(r):rn.fromUint8Array(r)}/**
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
 */const vb="server_timestamp",xb="__type__",_b="__previous_value__",bb="__local_write_time__";function Sg(r){return(r?.mapValue?.fields||{})[xb]?.stringValue===vb}function Mh(r){const e=r.mapValue.fields[_b];return Sg(e)?Mh(e):e}function Sc(r){const e=fs(r.mapValue.fields[bb].timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class iN{constructor(e,n,s,o,c,h,p,g,y,x){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=x}}const fh="(default)";class Ac{constructor(e,n){this.projectId=e,this.database=n||fh}static empty(){return new Ac("","")}get isDefaultDatabase(){return this.database===fh}isEqual(e){return e instanceof Ac&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Eb="__type__",sN="__max__",Ld={mapValue:{}},wb="__vector__",ph="value";function ms(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Sg(r)?4:oN(r)?9007199254740991:aN(r)?10:11:je(28295,{value:r})}function Pr(r,e){if(r===e)return!0;const n=ms(r);if(n!==ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Sc(r).isEqual(Sc(e));case 3:return(function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const h=fs(o.timestampValue),p=fs(c.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,c){return ps(o.bytesValue).isEqual(ps(c.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,c){return Nt(o.geoPointValue.latitude)===Nt(c.geoPointValue.latitude)&&Nt(o.geoPointValue.longitude)===Nt(c.geoPointValue.longitude)})(r,e);case 2:return(function(o,c){if("integerValue"in o&&"integerValue"in c)return Nt(o.integerValue)===Nt(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const h=Nt(o.doubleValue),p=Nt(c.doubleValue);return h===p?hh(h)===hh(p):isNaN(h)&&isNaN(p)}return!1})(r,e);case 9:return jo(r.arrayValue.values||[],e.arrayValue.values||[],Pr);case 10:case 11:return(function(o,c){const h=o.mapValue.fields||{},p=c.mapValue.fields||{};if(F2(h)!==F2(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!Pr(h[g],p[g])))return!1;return!0})(r,e);default:return je(52216,{left:r})}}function Nc(r,e){return(r.values||[]).find((n=>Pr(n,e)))!==void 0}function Do(r,e){if(r===e)return 0;const n=ms(r),s=ms(e);if(n!==s)return qe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return qe(r.booleanValue,e.booleanValue);case 2:return(function(c,h){const p=Nt(c.integerValue||c.doubleValue),g=Nt(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,e);case 3:return H2(r.timestampValue,e.timestampValue);case 4:return H2(Sc(r),Sc(e));case 5:return Mm(r.stringValue,e.stringValue);case 6:return(function(c,h){const p=ps(c),g=ps(h);return p.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(c,h){const p=c.split("/"),g=h.split("/");for(let y=0;y<p.length&&y<g.length;y++){const x=qe(p[y],g[y]);if(x!==0)return x}return qe(p.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(c,h){const p=qe(Nt(c.latitude),Nt(h.latitude));return p!==0?p:qe(Nt(c.longitude),Nt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return G2(r.arrayValue,e.arrayValue);case 10:return(function(c,h){const p=c.fields||{},g=h.fields||{},y=p[ph]?.arrayValue,x=g[ph]?.arrayValue,E=qe(y?.values?.length||0,x?.values?.length||0);return E!==0?E:G2(y,x)})(r.mapValue,e.mapValue);case 11:return(function(c,h){if(c===Ld.mapValue&&h===Ld.mapValue)return 0;if(c===Ld.mapValue)return 1;if(h===Ld.mapValue)return-1;const p=c.fields||{},g=Object.keys(p),y=h.fields||{},x=Object.keys(y);g.sort(),x.sort();for(let E=0;E<g.length&&E<x.length;++E){const w=Mm(g[E],x[E]);if(w!==0)return w;const I=Do(p[g[E]],y[x[E]]);if(I!==0)return I}return qe(g.length,x.length)})(r.mapValue,e.mapValue);default:throw je(23264,{he:n})}}function H2(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return qe(r,e);const n=fs(r),s=fs(e),o=qe(n.seconds,s.seconds);return o!==0?o:qe(n.nanos,s.nanos)}function G2(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const c=Do(n[o],s[o]);if(c)return c}return qe(n.length,s.length)}function Oo(r){return Pm(r)}function Pm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=fs(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return ps(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return Se.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const c of n.values||[])o?o=!1:s+=",",s+=Pm(c);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const h of s)c?c=!1:o+=",",o+=`${h}:${Pm(n.fields[h])}`;return o+"}"})(r.mapValue):je(61005,{value:r})}function Qd(r){switch(ms(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mh(r);return e?16+Qd(e):16;case 5:return 2*r.stringValue.length;case 6:return ps(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,c)=>o+Qd(c)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return bs(s.fields,((c,h)=>{o+=c.length+Qd(h)})),o})(r.mapValue);default:throw je(13486,{value:r})}}function Y2(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Lm(r){return!!r&&"integerValue"in r}function Ag(r){return!!r&&"arrayValue"in r}function $2(r){return!!r&&"nullValue"in r}function Q2(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Kd(r){return!!r&&"mapValue"in r}function aN(r){return(r?.mapValue?.fields||{})[Eb]?.stringValue===wb}function hc(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return bs(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=hc(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hc(r.arrayValue.values[n]);return e}return{...r}}function oN(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===sN}/**
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
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Kd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hc(n)}setAll(e){let n=nn.emptyPath(),s={},o=[];e.forEach(((h,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=p.popLast()}h?s[p.lastSegment()]=hc(h):o.push(p.lastSegment())}));const c=this.getFieldsMap(n);this.applyChanges(c,s,o)}delete(e){const n=this.field(e.popLast());Kd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];Kd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){bs(n,((o,c)=>e[o]=c));for(const o of s)delete e[o]}clone(){return new Tn(hc(this.value))}}function Tb(r){const e=[];return bs(r.fields,((n,s)=>{const o=new nn([n]);if(Kd(s)){const c=Tb(s.mapValue).fields;if(c.length===0)e.push(o);else for(const h of c)e.push(o.child(h))}else e.push(o)})),new Ln(e)}/**
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
 */class un{constructor(e,n,s,o,c,h,p){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=c,this.data=h,this.documentState=p}static newInvalidDocument(e){return new un(e,0,ke.min(),ke.min(),ke.min(),Tn.empty(),0)}static newFoundDocument(e,n,s,o){return new un(e,1,n,ke.min(),s,o,0)}static newNoDocument(e,n){return new un(e,2,n,ke.min(),ke.min(),Tn.empty(),0)}static newUnknownDocument(e,n){return new un(e,3,n,ke.min(),ke.min(),Tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof un&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new un(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mh{constructor(e,n){this.position=e,this.inclusive=n}}function K2(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const c=e[o],h=r.position[o];if(c.field.isKeyField()?s=Se.comparator(Se.fromName(h.referenceValue),n.key):s=Do(h,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function W2(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Pr(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class Rc{constructor(e,n="asc"){this.field=e,this.dir=n}}function lN(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Sb{}class kt extends Sb{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new uN(e,n,s):n==="array-contains"?new fN(e,s):n==="in"?new pN(e,s):n==="not-in"?new mN(e,s):n==="array-contains-any"?new gN(e,s):new kt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new dN(e,s):new hN(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Do(n,this.value)):n!==null&&ms(this.value)===ms(n)&&this.matchesComparison(Do(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return je(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends Sb{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new dr(e,n)}matches(e){return Ab(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ab(r){return r.op==="and"}function Nb(r){return cN(r)&&Ab(r)}function cN(r){for(const e of r.filters)if(e instanceof dr)return!1;return!0}function Vm(r){if(r instanceof kt)return r.field.canonicalString()+r.op.toString()+Oo(r.value);if(Nb(r))return r.filters.map((e=>Vm(e))).join(",");{const e=r.filters.map((n=>Vm(n))).join(",");return`${r.op}(${e})`}}function Rb(r,e){return r instanceof kt?(function(s,o){return o instanceof kt&&s.op===o.op&&s.field.isEqual(o.field)&&Pr(s.value,o.value)})(r,e):r instanceof dr?(function(s,o){return o instanceof dr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((c,h,p)=>c&&Rb(h,o.filters[p])),!0):!1})(r,e):void je(19439)}function Cb(r){return r instanceof kt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Oo(n.value)}`})(r):r instanceof dr?(function(n){return n.op.toString()+" {"+n.getFilters().map(Cb).join(" ,")+"}"})(r):"Filter"}class uN extends kt{constructor(e,n,s){super(e,n,s),this.key=Se.fromName(s.referenceValue)}matches(e){const n=Se.comparator(e.key,this.key);return this.matchesComparison(n)}}class dN extends kt{constructor(e,n){super(e,"in",n),this.keys=Ib("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class hN extends kt{constructor(e,n){super(e,"not-in",n),this.keys=Ib("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Ib(r,e){return(e.arrayValue?.values||[]).map((n=>Se.fromName(n.referenceValue)))}class fN extends kt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ag(n)&&Nc(n.arrayValue,this.value)}}class pN extends kt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Nc(this.value.arrayValue,n)}}class mN extends kt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Nc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Nc(this.value.arrayValue,n)}}class gN extends kt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ag(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Nc(this.value.arrayValue,s)))}}/**
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
 */class yN{constructor(e,n=null,s=[],o=[],c=null,h=null,p=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=h,this.endAt=p,this.Te=null}}function X2(r,e=null,n=[],s=[],o=null,c=null,h=null){return new yN(r,e,n,s,o,c,h)}function Ng(r){const e=Pe(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Vm(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),kh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Oo(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Oo(s))).join(",")),e.Te=n}return e.Te}function Rg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!lN(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!Rb(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!W2(r.startAt,e.startAt)&&W2(r.endAt,e.endAt)}function Um(r){return Se.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class qo{constructor(e,n=null,s=[],o=[],c=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=h,this.startAt=p,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function vN(r,e,n,s,o,c,h,p){return new qo(r,e,n,s,o,c,h,p)}function Ph(r){return new qo(r)}function Z2(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function jb(r){return r.collectionGroup!==null}function fc(r){const e=Pe(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Ft(nn.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(p=p.add(y.field))}))})),p})(e).forEach((c=>{n.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new Rc(c,s))})),n.has(nn.keyField().canonicalString())||e.Ie.push(new Rc(nn.keyField(),s))}return e.Ie}function Dr(r){const e=Pe(r);return e.Ee||(e.Ee=xN(e,fc(r))),e.Ee}function xN(r,e){if(r.limitType==="F")return X2(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const c=o.dir==="desc"?"asc":"desc";return new Rc(o.field,c)}));const n=r.endAt?new mh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new mh(r.startAt.position,r.startAt.inclusive):null;return X2(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function zm(r,e){const n=r.filters.concat([e]);return new qo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function Bm(r,e,n){return new qo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Lh(r,e){return Rg(Dr(r),Dr(e))&&r.limitType===e.limitType}function Db(r){return`${Ng(Dr(r))}|lt:${r.limitType}`}function yo(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>Cb(o))).join(", ")}]`),kh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>Oo(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>Oo(o))).join(",")),`Target(${s})`})(Dr(r))}; limitType=${r.limitType})`}function Vh(r,e){return e.isFoundDocument()&&(function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):Se.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(r,e)&&(function(s,o){for(const c of fc(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,p,g){const y=K2(h,p,g);return h.inclusive?y<=0:y<0})(s.startAt,fc(s),o)||s.endAt&&!(function(h,p,g){const y=K2(h,p,g);return h.inclusive?y>=0:y>0})(s.endAt,fc(s),o))})(r,e)}function _N(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ob(r){return(e,n)=>{let s=!1;for(const o of fc(r)){const c=bN(o,e,n);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function bN(r,e,n){const s=r.field.isKeyField()?Se.comparator(e.key,n.key):(function(c,h,p){const g=h.data.field(c),y=p.data.field(c);return g!==null&&y!==null?Do(g,y):je(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return je(19790,{direction:r.dir})}}/**
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
 */class Ea{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],e))return void(o[c]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,((n,s)=>{for(const[o,c]of s)e(o,c)}))}isEmpty(){return gb(this.inner)}size(){return this.innerSize}}/**
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
 */const EN=new _t(Se.comparator);function _i(){return EN}const kb=new _t(Se.comparator);function ic(...r){let e=kb;for(const n of r)e=e.insert(n.key,n);return e}function Mb(r){let e=kb;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function sa(){return pc()}function Pb(){return pc()}function pc(){return new Ea((r=>r.toString()),((r,e)=>r.isEqual(e)))}const wN=new _t(Se.comparator),TN=new Ft(Se.comparator);function He(...r){let e=TN;for(const n of r)e=e.add(n);return e}const SN=new Ft(qe);function AN(){return SN}/**
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
 */function Cg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hh(e)?"-0":e}}function Lb(r){return{integerValue:""+r}}function NN(r,e){return eN(e)?Lb(e):Cg(r,e)}/**
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
 */class Uh{constructor(){this._=void 0}}function RN(r,e,n){return r instanceof Cc?(function(o,c){const h={fields:{[xb]:{stringValue:vb},[bb]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&Sg(c)&&(c=Mh(c)),c&&(h.fields[_b]=c),{mapValue:h}})(n,e):r instanceof Ic?Ub(r,e):r instanceof jc?zb(r,e):(function(o,c){const h=Vb(o,c),p=J2(h)+J2(o.Ae);return Lm(h)&&Lm(o.Ae)?Lb(p):Cg(o.serializer,p)})(r,e)}function CN(r,e,n){return r instanceof Ic?Ub(r,e):r instanceof jc?zb(r,e):n}function Vb(r,e){return r instanceof gh?(function(s){return Lm(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class Cc extends Uh{}class Ic extends Uh{constructor(e){super(),this.elements=e}}function Ub(r,e){const n=Bb(e);for(const s of r.elements)n.some((o=>Pr(o,s)))||n.push(s);return{arrayValue:{values:n}}}class jc extends Uh{constructor(e){super(),this.elements=e}}function zb(r,e){let n=Bb(e);for(const s of r.elements)n=n.filter((o=>!Pr(o,s)));return{arrayValue:{values:n}}}class gh extends Uh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function J2(r){return Nt(r.integerValue||r.doubleValue)}function Bb(r){return Ag(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class IN{constructor(e,n){this.field=e,this.transform=n}}function jN(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Ic&&o instanceof Ic||s instanceof jc&&o instanceof jc?jo(s.elements,o.elements,Pr):s instanceof gh&&o instanceof gh?Pr(s.Ae,o.Ae):s instanceof Cc&&o instanceof Cc})(r.transform,e.transform)}class DN{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wd(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class zh{}function Fb(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ig(r.key,An.none()):new qc(r.key,r.data,An.none());{const n=r.data,s=Tn.empty();let o=new Ft(nn.comparator);for(let c of e.fields)if(!o.has(c)){let h=n.field(c);h===null&&c.length>1&&(c=c.popLast(),h=n.field(c)),h===null?s.delete(c):s.set(c,h),o=o.add(c)}return new Es(r.key,s,new Ln(o.toArray()),An.none())}}function ON(r,e,n){r instanceof qc?(function(o,c,h){const p=o.value.clone(),g=tx(o.fieldTransforms,c,h.transformResults);p.setAll(g),c.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(r,e,n):r instanceof Es?(function(o,c,h){if(!Wd(o.precondition,c))return void c.convertToUnknownDocument(h.version);const p=tx(o.fieldTransforms,c,h.transformResults),g=c.data;g.setAll(qb(o)),g.setAll(p),c.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,n):(function(o,c,h){c.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,n)}function mc(r,e,n,s){return r instanceof qc?(function(c,h,p,g){if(!Wd(c.precondition,h))return p;const y=c.value.clone(),x=nx(c.fieldTransforms,g,h);return y.setAll(x),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof Es?(function(c,h,p,g){if(!Wd(c.precondition,h))return p;const y=nx(c.fieldTransforms,g,h),x=h.data;return x.setAll(qb(c)),x.setAll(y),h.convertToFoundDocument(h.version,x).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((E=>E.field)))})(r,e,n,s):(function(c,h,p){return Wd(c.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p})(r,e,n)}function kN(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),c=Vb(s.transform,o||null);c!=null&&(n===null&&(n=Tn.empty()),n.set(s.field,c))}return n||null}function ex(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&jo(s,o,((c,h)=>jN(c,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class qc extends zh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Es extends zh{constructor(e,n,s,o,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function qb(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function tx(r,e,n){const s=new Map;nt(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const c=r[o],h=c.transform,p=e.data.field(c.field);s.set(c.field,CN(h,p,n[o]))}return s}function nx(r,e,n){const s=new Map;for(const o of r){const c=o.transform,h=n.data.field(o.field);s.set(o.field,RN(c,h,e))}return s}class Ig extends zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MN extends zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class PN{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(e.key)&&ON(c,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=mc(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=mc(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Pb();return this.mutations.forEach((o=>{const c=e.get(o.key),h=c.overlayedDocument;let p=this.applyToLocalView(h,c.mutatedFields);p=n.has(o.key)?null:p;const g=Fb(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ke.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),He())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,((n,s)=>ex(n,s)))&&jo(this.baseMutations,e.baseMutations,((n,s)=>ex(n,s)))}}class jg{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){nt(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return wN})();const c=e.mutations;for(let h=0;h<c.length;h++)o=o.insert(c[h].key,s[h].version);return new jg(e,n,s,o)}}/**
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
 */class LN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class VN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ot,We;function UN(r){switch(r){case se.OK:return je(64938);case se.CANCELLED:case se.UNKNOWN:case se.DEADLINE_EXCEEDED:case se.RESOURCE_EXHAUSTED:case se.INTERNAL:case se.UNAVAILABLE:case se.UNAUTHENTICATED:return!1;case se.INVALID_ARGUMENT:case se.NOT_FOUND:case se.ALREADY_EXISTS:case se.PERMISSION_DENIED:case se.FAILED_PRECONDITION:case se.ABORTED:case se.OUT_OF_RANGE:case se.UNIMPLEMENTED:case se.DATA_LOSS:return!0;default:return je(15467,{code:r})}}function Hb(r){if(r===void 0)return xi("GRPC error has no .code"),se.UNKNOWN;switch(r){case Ot.OK:return se.OK;case Ot.CANCELLED:return se.CANCELLED;case Ot.UNKNOWN:return se.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return se.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return se.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return se.INTERNAL;case Ot.UNAVAILABLE:return se.UNAVAILABLE;case Ot.UNAUTHENTICATED:return se.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return se.INVALID_ARGUMENT;case Ot.NOT_FOUND:return se.NOT_FOUND;case Ot.ALREADY_EXISTS:return se.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return se.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return se.FAILED_PRECONDITION;case Ot.ABORTED:return se.ABORTED;case Ot.OUT_OF_RANGE:return se.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return se.UNIMPLEMENTED;case Ot.DATA_LOSS:return se.DATA_LOSS;default:return je(39323,{code:r})}}(We=Ot||(Ot={}))[We.OK=0]="OK",We[We.CANCELLED=1]="CANCELLED",We[We.UNKNOWN=2]="UNKNOWN",We[We.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",We[We.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",We[We.NOT_FOUND=5]="NOT_FOUND",We[We.ALREADY_EXISTS=6]="ALREADY_EXISTS",We[We.PERMISSION_DENIED=7]="PERMISSION_DENIED",We[We.UNAUTHENTICATED=16]="UNAUTHENTICATED",We[We.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",We[We.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",We[We.ABORTED=10]="ABORTED",We[We.OUT_OF_RANGE=11]="OUT_OF_RANGE",We[We.UNIMPLEMENTED=12]="UNIMPLEMENTED",We[We.INTERNAL=13]="INTERNAL",We[We.UNAVAILABLE=14]="UNAVAILABLE",We[We.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zN(){return new TextEncoder}/**
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
 */const BN=new us([4294967295,4294967295],0);function rx(r){const e=zN().encode(r),n=new sb;return n.update(e),new Uint8Array(n.digest())}function ix(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new us([n,s],0),new us([o,c],0)]}class Dg{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new sc(`Invalid padding: ${n}`);if(s<0)throw new sc(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new sc(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new sc(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=us.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(us.fromNumber(s)));return o.compare(BN)===1&&(o=new us([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=rx(e),[s,o]=ix(n);for(let c=0;c<this.hashCount;c++){const h=this.ye(s,o,c);if(!this.we(h))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),h=new Dg(c,o,n);return s.forEach((p=>h.insert(p))),h}insert(e){if(this.ge===0)return;const n=rx(e),[s,o]=ix(n);for(let c=0;c<this.hashCount;c++){const h=this.ye(s,o,c);this.Se(h)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class sc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bh{constructor(e,n,s,o,c){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Hc.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Bh(ke.min(),o,new _t(qe),_i(),He())}}class Hc{constructor(e,n,s,o,c){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Hc(s,n,He(),He(),He())}}/**
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
 */class Xd{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class Gb{constructor(e,n){this.targetId=e,this.Ce=n}}class Yb{constructor(e,n,s=rn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class sx{constructor(){this.ve=0,this.Fe=ax(),this.Me=rn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=He(),n=He(),s=He();return this.Fe.forEach(((o,c)=>{switch(c){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:je(38017,{changeType:c})}})),new Hc(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=ax()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,nt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class FN{constructor(e){this.Ge=e,this.ze=new Map,this.je=_i(),this.Je=Vd(),this.He=Vd(),this.Ye=new _t(qe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:je(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const c=o.target;if(Um(c))if(s===0){const h=new Se(c.path);this.et(n,h,un.newNoDocument(h,ke.min()))}else nt(s===1,20013,{expectedCount:s});else{const h=this._t(n);if(h!==s){const p=this.ut(e),g=p?this.ct(p,e,h):1;if(g!==0){this.it(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=n;let h,p;try{h=ps(s).toUint8Array()}catch(g){if(g instanceof yb)return Io("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Dg(h,o,c)}catch(g){return Io(g instanceof sc?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.ge===0?null:p}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((c=>{const h=this.Ge.ht(),p=`projects/${h.projectId}/databases/${h.database}/documents/${c.path.canonicalString()}`;e.mightContain(p)||(this.et(n,c,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((c,h)=>{const p=this.ot(h);if(p){if(c.current&&Um(p.target)){const g=new Se(p.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,un.newNoDocument(g,e))}c.Be&&(n.set(h,c.ke()),c.qe())}}));let s=He();this.He.forEach(((c,h)=>{let p=!0;h.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(c))})),this.je.forEach(((c,h)=>h.setReadTime(e)));const o=new Bh(e,n,this.Ye,this.je,s);return this.je=_i(),this.Je=Vd(),this.He=Vd(),this.Ye=new _t(qe),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new sx,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ft(qe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ft(qe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||_e("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new sx),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Vd(){return new _t(Se.comparator)}function ax(){return new _t(Se.comparator)}const qN={asc:"ASCENDING",desc:"DESCENDING"},HN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GN={and:"AND",or:"OR"};class YN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fm(r,e){return r.useProto3Json||kh(e)?e:{value:e}}function yh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $b(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function $N(r,e){return yh(r,e.toTimestamp())}function Or(r){return nt(!!r,49232),ke.fromTimestamp((function(n){const s=fs(n);return new ct(s.seconds,s.nanos)})(r))}function Og(r,e){return qm(r,e).canonicalString()}function qm(r,e){const n=(function(o){return new ht(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function Qb(r){const e=ht.fromString(r);return nt(Jb(e),10190,{key:e.toString()}),e}function Hm(r,e){return Og(r.databaseId,e.path)}function vm(r,e){const n=Qb(e);if(n.get(1)!==r.databaseId.projectId)throw new ge(se.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ge(se.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new Se(Wb(n))}function Kb(r,e){return Og(r.databaseId,e)}function QN(r){const e=Qb(r);return e.length===4?ht.emptyPath():Wb(e)}function Gm(r){return new ht(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Wb(r){return nt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function ox(r,e,n){return{name:Hm(r,e),fields:n.value.mapValue.fields}}function KN(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:je(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],c=(function(y,x){return y.useProto3Json?(nt(x===void 0||typeof x=="string",58123),rn.fromBase64String(x||"")):(nt(x===void 0||x instanceof Buffer||x instanceof Uint8Array,16193),rn.fromUint8Array(x||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&(function(y){const x=y.code===void 0?se.UNKNOWN:Hb(y.code);return new ge(x,y.message||"")})(h);n=new Yb(s,o,c,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=vm(r,s.document.name),c=Or(s.document.updateTime),h=s.document.createTime?Or(s.document.createTime):ke.min(),p=new Tn({mapValue:{fields:s.document.fields}}),g=un.newFoundDocument(o,c,h,p),y=s.targetIds||[],x=s.removedTargetIds||[];n=new Xd(y,x,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=vm(r,s.document),c=s.readTime?Or(s.readTime):ke.min(),h=un.newNoDocument(o,c),p=s.removedTargetIds||[];n=new Xd([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=vm(r,s.document),c=s.removedTargetIds||[];n=new Xd([],c,o,null)}else{if(!("filter"in e))return je(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,h=new VN(o,c),p=s.targetId;n=new Gb(p,h)}}return n}function WN(r,e){let n;if(e instanceof qc)n={update:ox(r,e.key,e.value)};else if(e instanceof Ig)n={delete:Hm(r,e.key)};else if(e instanceof Es)n={update:ox(r,e.key,e.data),updateMask:sR(e.fieldMask)};else{if(!(e instanceof MN))return je(16599,{Vt:e.type});n={verify:Hm(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(c,h){const p=h.transform;if(p instanceof Cc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Ic)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof jc)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof gh)return{fieldPath:h.field.canonicalString(),increment:p.Ae};throw je(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(o,c){return c.updateTime!==void 0?{updateTime:$N(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:je(27497)})(r,e.precondition)),n}function XN(r,e){return r&&r.length>0?(nt(e!==void 0,14353),r.map((n=>(function(o,c){let h=o.updateTime?Or(o.updateTime):Or(c);return h.isEqual(ke.min())&&(h=Or(c)),new DN(h,o.transformResults||[])})(n,e)))):[]}function ZN(r,e){return{documents:[Kb(r,e.path)]}}function JN(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Kb(r,o);const c=(function(y){if(y.length!==0)return Zb(dr.create(y,"and"))})(e.filters);c&&(n.structuredQuery.where=c);const h=(function(y){if(y.length!==0)return y.map((x=>(function(w){return{field:vo(w.field),direction:nR(w.dir)}})(x)))})(e.orderBy);h&&(n.structuredQuery.orderBy=h);const p=Fm(r,e.limit);return p!==null&&(n.structuredQuery.limit=p),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:o}}function eR(r){let e=QN(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){nt(s===1,65062);const x=n.from[0];x.allDescendants?o=x.collectionId:e=e.child(x.collectionId)}let c=[];n.where&&(c=(function(E){const w=Xb(E);return w instanceof dr&&Nb(w)?w.getFilters():[w]})(n.where));let h=[];n.orderBy&&(h=(function(E){return E.map((w=>(function(N){return new Rc(xo(N.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(w)))})(n.orderBy));let p=null;n.limit&&(p=(function(E){let w;return w=typeof E=="object"?E.value:E,kh(w)?null:w})(n.limit));let g=null;n.startAt&&(g=(function(E){const w=!!E.before,I=E.values||[];return new mh(I,w)})(n.startAt));let y=null;return n.endAt&&(y=(function(E){const w=!E.before,I=E.values||[];return new mh(I,w)})(n.endAt)),vN(e,o,h,c,p,"F",g,y)}function tR(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return je(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xb(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=xo(n.unaryFilter.field);return kt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=xo(n.unaryFilter.field);return kt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=xo(n.unaryFilter.field);return kt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=xo(n.unaryFilter.field);return kt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return je(61313);default:return je(60726)}})(r):r.fieldFilter!==void 0?(function(n){return kt.create(xo(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return je(58110);default:return je(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return dr.create(n.compositeFilter.filters.map((s=>Xb(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return je(1026)}})(n.compositeFilter.op))})(r):je(30097,{filter:r})}function nR(r){return qN[r]}function rR(r){return HN[r]}function iR(r){return GN[r]}function vo(r){return{fieldPath:r.canonicalString()}}function xo(r){return nn.fromServerFormat(r.fieldPath)}function Zb(r){return r instanceof kt?(function(n){if(n.op==="=="){if(Q2(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NAN"}};if($2(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Q2(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NOT_NAN"}};if($2(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(n.field),op:rR(n.op),value:n.value}}})(r):r instanceof dr?(function(n){const s=n.getFilters().map((o=>Zb(o)));return s.length===1?s[0]:{compositeFilter:{op:iR(n.op),filters:s}}})(r):je(54877,{filter:r})}function sR(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Jb(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class as{constructor(e,n,s,o,c=ke.min(),h=ke.min(),p=rn.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new as(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class aR{constructor(e){this.yt=e}}function oR(r){const e=eR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Bm(e,e.limit,"L"):e}/**
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
 */class lR{constructor(){this.Cn=new cR}addToCollectionParentIndex(e,n){return this.Cn.add(n),ce.resolve()}getCollectionParents(e,n){return ce.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ce.resolve()}deleteFieldIndex(e,n){return ce.resolve()}deleteAllFieldIndexes(e){return ce.resolve()}createTargetIndexes(e,n){return ce.resolve()}getDocumentsMatchingTarget(e,n){return ce.resolve(null)}getIndexType(e,n){return ce.resolve(0)}getFieldIndexes(e,n){return ce.resolve([])}getNextCollectionGroupToUpdate(e){return ce.resolve(null)}getMinOffset(e,n){return ce.resolve(hs.min())}getMinOffsetFromCollectionGroup(e,n){return ce.resolve(hs.min())}updateCollectionGroup(e,n,s){return ce.resolve()}updateIndexEntries(e,n){return ce.resolve()}}class cR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Ft(ht.comparator),c=!o.has(s);return this.index[n]=o.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ft(ht.comparator)).toArray()}}/**
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
 */const lx={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},e4=41943040;class wn{static withCacheSize(e){return new wn(e,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */wn.DEFAULT_COLLECTION_PERCENTILE=10,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wn.DEFAULT=new wn(e4,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wn.DISABLED=new wn(-1,0,0);/**
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
 */class ko{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ko(0)}static cr(){return new ko(-1)}}/**
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
 */const cx="LruGarbageCollector",uR=1048576;function ux([r,e],[n,s]){const o=qe(r,n);return o===0?qe(e,s):o}class dR{constructor(e){this.Ir=e,this.buffer=new Ft(ux),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();ux(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class hR{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){_e(cx,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fo(n)?_e(cx,"Ignoring IndexedDB error during garbage collection: ",n):await Bo(n)}await this.Vr(3e5)}))}}class fR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return ce.resolve(Oh.ce);const s=new dR(n);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(_e("LruGarbageCollector","Garbage collection skipped; disabled"),ce.resolve(lx)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(_e("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lx):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,c,h,p,g,y;const x=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(_e("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,h=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(s=E,p=Date.now(),this.removeTargets(e,s,n)))).next((E=>(c=E,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((E=>(y=Date.now(),go()<=Fe.DEBUG&&_e("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-x}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${c} targets in `+(g-p)+`ms
	Removed ${E} documents in `+(y-g)+`ms
Total Duration: ${y-x}ms`),ce.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:E}))))}}function pR(r,e){return new fR(r,e)}/**
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
 */class mR{constructor(){this.changes=new Ea((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,un.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ce.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class yR{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&mc(s.mutation,o,Ln.empty(),ct.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,He()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=He()){const o=sa();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((c=>{let h=ic();return c.forEach(((p,g)=>{h=h.insert(p,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,n){const s=sa();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,He())))}populateOverlays(e,n,s){const o=[];return s.forEach((c=>{n.has(c)||o.push(c)})),this.documentOverlayCache.getOverlays(e,o).next((c=>{c.forEach(((h,p)=>{n.set(h,p)}))}))}computeViews(e,n,s,o){let c=_i();const h=pc(),p=(function(){return pc()})();return n.forEach(((g,y)=>{const x=s.get(y.key);o.has(y.key)&&(x===void 0||x.mutation instanceof Es)?c=c.insert(y.key,y):x!==void 0?(h.set(y.key,x.mutation.getFieldMask()),mc(x.mutation,y,x.mutation.getFieldMask(),ct.now())):h.set(y.key,Ln.empty())})),this.recalculateAndSaveOverlays(e,c).next((g=>(g.forEach(((y,x)=>h.set(y,x))),n.forEach(((y,x)=>p.set(y,new gR(x,h.get(y)??null)))),p)))}recalculateAndSaveOverlays(e,n){const s=pc();let o=new _t(((h,p)=>h-p)),c=He();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((h=>{for(const p of h)p.keys().forEach((g=>{const y=n.get(g);if(y===null)return;let x=s.get(g)||Ln.empty();x=p.applyToLocalView(y,x),s.set(g,x);const E=(o.get(p.batchId)||He()).add(g);o=o.insert(p.batchId,E)}))})).next((()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),y=g.key,x=g.value,E=Pb();x.forEach((w=>{if(!c.has(w)){const I=Fb(n.get(w),s.get(w));I!==null&&E.set(w,I),c=c.add(w)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,E))}return ce.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return(function(h){return Se.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((c=>{const h=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-c.size):ce.resolve(sa());let p=Tc,g=c;return h.next((y=>ce.forEach(y,((x,E)=>(p<E.largestBatchId&&(p=E.largestBatchId),c.get(x)?ce.resolve():this.remoteDocumentCache.getEntry(e,x).next((w=>{g=g.insert(x,w)}))))).next((()=>this.populateOverlays(e,y,c))).next((()=>this.computeViews(e,g,y,He()))).next((x=>({batchId:p,changes:Mb(x)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Se(n)).next((s=>{let o=ic();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const c=n.collectionGroup;let h=ic();return this.indexManager.getCollectionParents(e,c).next((p=>ce.forEach(p,(g=>{const y=(function(E,w){return new qo(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(n,g.child(c));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((x=>{x.forEach(((E,w)=>{h=h.insert(E,w)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((h=>(c=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,o)))).next((h=>{c.forEach(((g,y)=>{const x=y.getKey();h.get(x)===null&&(h=h.insert(x,un.newInvalidDocument(x)))}));let p=ic();return h.forEach(((g,y)=>{const x=c.get(g);x!==void 0&&mc(x.mutation,y,Ln.empty(),ct.now()),Vh(n,y)&&(p=p.insert(g,y))})),p}))}}/**
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
 */class vR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ce.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:Or(o.createTime)}})(n)),ce.resolve()}getNamedQuery(e,n){return ce.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:oR(o.bundledQuery),readTime:Or(o.readTime)}})(n)),ce.resolve()}}/**
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
 */class xR{constructor(){this.overlays=new _t(Se.comparator),this.qr=new Map}getOverlay(e,n){return ce.resolve(this.overlays.get(n))}getOverlays(e,n){const s=sa();return ce.forEach(n,(o=>this.getOverlay(e,o).next((c=>{c!==null&&s.set(o,c)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,c)=>{this.St(e,n,c)})),ce.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(s)),ce.resolve()}getOverlaysForCollection(e,n,s){const o=sa(),c=n.length+1,h=new Se(n.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&g.largestBatchId>s&&o.set(g.getKey(),g)}return ce.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let c=new _t(((y,x)=>y-x));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let x=c.get(y.largestBatchId);x===null&&(x=sa(),c=c.insert(y.largestBatchId,x)),x.set(y.getKey(),y)}}const p=sa(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,x)=>p.set(y,x))),!(p.size()>=o)););return ce.resolve(p)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new LN(n,s));let c=this.qr.get(n);c===void 0&&(c=He(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
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
 */class _R{constructor(){this.sessionToken=rn.EMPTY_BYTE_STRING}getSessionToken(e){return ce.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ce.resolve()}}/**
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
 */class kg{constructor(){this.Qr=new Ft(Qt.$r),this.Ur=new Ft(Qt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Qt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Qt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new Se(new ht([])),s=new Qt(n,e),o=new Qt(n,e+1),c=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),c.push(h.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Se(new ht([])),s=new Qt(n,e),o=new Qt(n,e+1);let c=He();return this.Ur.forEachInRange([s,o],(h=>{c=c.add(h.key)})),c}containsKey(e){const n=new Qt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Qt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Se.comparator(e.key,n.key)||qe(e.Yr,n.Yr)}static Kr(e,n){return qe(e.Yr,n.Yr)||Se.comparator(e.key,n.key)}}/**
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
 */class bR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ft(Qt.$r)}checkEmpty(e){return ce.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new PN(c,n,s,o);this.mutationQueue.push(h);for(const p of o)this.Zr=this.Zr.add(new Qt(p.key,c)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return ce.resolve(h)}lookupMutationBatch(e,n){return ce.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),c=o<0?0:o;return ce.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return ce.resolve(this.mutationQueue.length===0?Tg:this.tr-1)}getAllMutationBatches(e){return ce.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Qt(n,0),o=new Qt(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,o],(h=>{const p=this.Xr(h.Yr);c.push(p)})),ce.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ft(qe);return n.forEach((o=>{const c=new Qt(o,0),h=new Qt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,h],(p=>{s=s.add(p.Yr)}))})),ce.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let c=s;Se.isDocumentKey(c)||(c=c.child(""));const h=new Qt(new Se(c),0);let p=new Ft(qe);return this.Zr.forEachWhile((g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(p=p.add(g.Yr)),!0)}),h),ce.resolve(this.ti(p))}ti(e){const n=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){nt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ce.forEach(n.mutations,(o=>{const c=new Qt(o.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Qt(n,0),o=this.Zr.firstAfterOrEqual(s);return ce.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ce.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ER{constructor(e){this.ri=e,this.docs=(function(){return new _t(Se.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),c=o?o.size:0,h=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:h}),this.size+=h-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ce.resolve(s?s.document.mutableCopy():un.newInvalidDocument(n))}getEntries(e,n){let s=_i();return n.forEach((o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():un.newInvalidDocument(o))})),ce.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let c=_i();const h=n.path,p=new Se(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:y,value:{document:x}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||WA(KA(x),s)<=0||(o.has(x.key)||Vh(n,x))&&(c=c.insert(x.key,x.mutableCopy()))}return ce.resolve(c)}getAllFromCollectionGroup(e,n,s,o){je(9500)}ii(e,n){return ce.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new wR(this)}getSize(e){return ce.resolve(this.size)}}class wR extends mR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),ce.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class TR{constructor(e){this.persistence=e,this.si=new Ea((n=>Ng(n)),Rg),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.oi=0,this._i=new kg,this.targetCount=0,this.ai=ko.ur()}forEachTarget(e,n){return this.si.forEach(((s,o)=>n(o))),ce.resolve()}getLastRemoteSnapshotVersion(e){return ce.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ce.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ce.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),ce.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ko(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ce.resolve()}updateTargetData(e,n){return this.Pr(n),ce.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ce.resolve()}removeTargets(e,n,s){let o=0;const c=[];return this.si.forEach(((h,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.si.delete(h),c.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),ce.waitFor(c).next((()=>o))}getTargetCount(e){return ce.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return ce.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),ce.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach((h=>{c.push(o.markPotentiallyOrphaned(e,h))})),ce.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ce.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return ce.resolve(s)}containsKey(e,n){return ce.resolve(this._i.containsKey(n))}}/**
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
 */class t4{constructor(e,n){this.ui={},this.overlays={},this.ci=new Oh(0),this.li=!1,this.li=!0,this.hi=new _R,this.referenceDelegate=e(this),this.Pi=new TR(this),this.indexManager=new lR,this.remoteDocumentCache=(function(o){return new ER(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new aR(n),this.Ii=new vR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new bR(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){_e("MemoryPersistence","Starting transaction:",e);const o=new SR(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((c=>this.referenceDelegate.di(o).next((()=>c)))).toPromise().then((c=>(o.raiseOnCommittedEvent(),c)))}Ai(e,n){return ce.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class SR extends ZA{constructor(e){super(),this.currentSequenceNumber=e}}class Mg{constructor(e){this.persistence=e,this.Ri=new kg,this.Vi=null}static mi(e){return new Mg(e)}get fi(){if(this.Vi)return this.Vi;throw je(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),ce.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),ce.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ce.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((c=>this.fi.add(c.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ce.forEach(this.fi,(s=>{const o=Se.fromPath(s);return this.gi(e,o).next((c=>{c||n.removeEntry(o,ke.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return ce.or([()=>ce.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class vh{constructor(e,n){this.persistence=e,this.pi=new Ea((s=>tN(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=pR(this,n)}static mi(e,n){return new vh(e,n)}Ei(){}di(e){return ce.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return ce.forEach(this.pi,((s,o)=>this.br(e,s,o).next((c=>c?ce.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,n).next((p=>{p||(s++,c.removeEntry(h,ke.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ce.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ce.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ce.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ce.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qd(e.data.value)),n}br(e,n,s){return ce.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return ce.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Pg{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=He(),o=He();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new Pg(e,n.fromCache,s,o)}}/**
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
 */class AR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class NR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return sS()?8:JA(dn())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const c={result:null};return this.ys(e,n).next((h=>{c.result=h})).next((()=>{if(!c.result)return this.ws(e,n,o,s).next((h=>{c.result=h}))})).next((()=>{if(c.result)return;const h=new AR;return this.Ss(e,n,h).next((p=>{if(c.result=p,this.Vs)return this.bs(e,n,h,p.size)}))})).next((()=>c.result))}bs(e,n,s,o){return s.documentReadCount<this.fs?(go()<=Fe.DEBUG&&_e("QueryEngine","SDK will not create cache indexes for query:",yo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ce.resolve()):(go()<=Fe.DEBUG&&_e("QueryEngine","Query:",yo(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(go()<=Fe.DEBUG&&_e("QueryEngine","The SDK decides to create cache indexes for query:",yo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dr(n))):ce.resolve())}ys(e,n){if(Z2(n))return ce.resolve(null);let s=Dr(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Bm(n,null,"F"),s=Dr(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const h=He(...c);return this.ps.getDocuments(e,h).next((p=>this.indexManager.getMinOffset(e,s).next((g=>{const y=this.Ds(n,p);return this.Cs(n,y,h,g.readTime)?this.ys(e,Bm(n,null,"F")):this.vs(e,y,n,g)}))))})))))}ws(e,n,s,o){return Z2(n)||o.isEqual(ke.min())?ce.resolve(null):this.ps.getDocuments(e,s).next((c=>{const h=this.Ds(n,c);return this.Cs(n,h,s,o)?ce.resolve(null):(go()<=Fe.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),yo(n)),this.vs(e,h,n,QA(o,Tc)).next((p=>p)))}))}Ds(e,n){let s=new Ft(Ob(e));return n.forEach(((o,c)=>{Vh(e,c)&&(s=s.add(c))})),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(e,n,s){return go()<=Fe.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",yo(n)),this.ps.getDocumentsMatchingQuery(e,n,hs.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((c=>(n.forEach((h=>{c=c.insert(h.key,h)})),c)))}}/**
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
 */const Lg="LocalStore",RR=3e8;class CR{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new _t(qe),this.xs=new Ea((c=>Ng(c)),Rg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function IR(r,e,n,s){return new CR(r,e,n,s)}async function n4(r,e){const n=Pe(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((c=>(o=c,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((c=>{const h=[],p=[];let g=He();for(const y of o){h.push(y.batchId);for(const x of y.mutations)g=g.add(x.key)}for(const y of c){p.push(y.batchId);for(const x of y.mutations)g=g.add(x.key)}return n.localDocuments.getDocuments(s,g).next((y=>({Ls:y,removedBatchIds:h,addedBatchIds:p})))}))}))}function jR(r,e){const n=Pe(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,g,y,x){const E=y.batch,w=E.keys();let I=ce.resolve();return w.forEach((N=>{I=I.next((()=>x.getEntry(g,N))).next((U=>{const M=y.docVersions.get(N);nt(M!==null,48541),U.version.compareTo(M)<0&&(E.applyToRemoteDocument(U,y),U.isValidDocument()&&(U.setReadTime(y.commitVersion),x.addEntry(U)))}))})),I.next((()=>p.mutationQueue.removeMutationBatch(g,E)))})(n,s,e,c).next((()=>c.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let g=He();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(g=g.add(p.batch.mutations[y].key));return g})(e)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function r4(r){const e=Pe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function DR(r,e){const n=Pe(r),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const h=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const p=[];e.targetChanges.forEach(((x,E)=>{const w=o.get(E);if(!w)return;p.push(n.Pi.removeMatchingKeys(c,x.removedDocuments,E).next((()=>n.Pi.addMatchingKeys(c,x.addedDocuments,E))));let I=w.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(E)!==null?I=I.withResumeToken(rn.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):x.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(x.resumeToken,s)),o=o.insert(E,I),(function(U,M,L){return U.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=RR?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(w,I,x)&&p.push(n.Pi.updateTargetData(c,I))}));let g=_i(),y=He();if(e.documentUpdates.forEach((x=>{e.resolvedLimboDocuments.has(x)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(c,x))})),p.push(OR(c,h,e.documentUpdates).next((x=>{g=x.ks,y=x.qs}))),!s.isEqual(ke.min())){const x=n.Pi.getLastRemoteSnapshotVersion(c).next((E=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s)));p.push(x)}return ce.waitFor(p).next((()=>h.apply(c))).next((()=>n.localDocuments.getLocalViewOfDocuments(c,g,y))).next((()=>g))})).then((c=>(n.Ms=o,c)))}function OR(r,e,n){let s=He(),o=He();return n.forEach((c=>s=s.add(c))),e.getEntries(r,s).next((c=>{let h=_i();return n.forEach(((p,g)=>{const y=c.get(p);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(ke.min())?(e.removeEntry(p,g.readTime),h=h.insert(p,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(p,g)):_e(Lg,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function kR(r,e){const n=Pe(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Tg),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function MR(r,e){const n=Pe(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,e).next((c=>c?(o=c,ce.resolve(o)):n.Pi.allocateTargetId(s).next((h=>(o=new as(e,h,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Ym(r,e,n){const s=Pe(r),o=s.Ms.get(e),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Fo(h))throw h;_e(Lg,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function dx(r,e,n){const s=Pe(r);let o=ke.min(),c=He();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,y,x){const E=Pe(g),w=E.xs.get(x);return w!==void 0?ce.resolve(E.Ms.get(w)):E.Pi.getTargetData(y,x)})(s,h,Dr(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,p.targetId).next((g=>{c=g}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,n?o:ke.min(),n?c:He()))).next((p=>(PR(s,_N(e),p),{documents:p,Qs:c})))))}function PR(r,e,n){let s=r.Os.get(e)||ke.min();n.forEach(((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),r.Os.set(e,s)}class hx{constructor(){this.activeTargetIds=AN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LR{constructor(){this.Mo=new hx,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new hx,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class VR{Oo(e){}shutdown(){}}/**
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
 */const fx="ConnectivityMonitor";class px{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){_e(fx,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){_e(fx,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ud=null;function $m(){return Ud===null?Ud=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ud++,"0x"+Ud.toString(16)}/**
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
 */const xm="RestConnection",UR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===fh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,c){const h=$m(),p=this.zo(e,n.toUriEncodedString());_e(xm,`Sending RPC '${e}' ${h}:`,p,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,c);const{host:y}=new URL(p),x=Lo(y);return this.Jo(e,p,g,s,x).then((E=>(_e(xm,`Received RPC '${e}' ${h}: `,E),E)),(E=>{throw Io(xm,`RPC '${e}' ${h} failed with error: `,E,"url: ",p,"request:",s),E}))}Ho(e,n,s,o,c,h){return this.Go(e,n,s,o,c)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+zo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,c)=>e[c]=o)),s&&s.headers.forEach(((o,c)=>e[c]=o))}zo(e,n){const s=UR[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class BR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ln="WebChannelConnection";class FR extends zR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,c){const h=$m();return new Promise(((p,g)=>{const y=new ab;y.setWithCredentials(!0),y.listenOnce(ob.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case $d.NO_ERROR:const E=y.getResponseJson();_e(ln,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(E)),p(E);break;case $d.TIMEOUT:_e(ln,`RPC '${e}' ${h} timed out`),g(new ge(se.DEADLINE_EXCEEDED,"Request time out"));break;case $d.HTTP_ERROR:const w=y.getStatus();if(_e(ln,`RPC '${e}' ${h} failed with status:`,w,"response text:",y.getResponseText()),w>0){let I=y.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I?.error;if(N&&N.status&&N.message){const U=(function(L){const B=L.toLowerCase().replace(/_/g,"-");return Object.values(se).indexOf(B)>=0?B:se.UNKNOWN})(N.status);g(new ge(U,N.message))}else g(new ge(se.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ge(se.UNAVAILABLE,"Connection failed."));break;default:je(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{_e(ln,`RPC '${e}' ${h} completed.`)}}));const x=JSON.stringify(o);_e(ln,`RPC '${e}' ${h} sending request:`,o),y.send(n,"POST",x,s,15)}))}T_(e,n,s){const o=$m(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=ub(),p=cb(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const x=c.join("");_e(ln,`Creating RPC '${e}' stream ${o}: ${x}`,g);const E=h.createWebChannel(x,g);this.I_(E);let w=!1,I=!1;const N=new BR({Yo:M=>{I?_e(ln,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(w||(_e(ln,`Opening RPC '${e}' stream ${o} transport.`),E.open(),w=!0),_e(ln,`RPC '${e}' stream ${o} sending:`,M),E.send(M))},Zo:()=>E.close()}),U=(M,L,B)=>{M.listen(L,(q=>{try{B(q)}catch(X){setTimeout((()=>{throw X}),0)}}))};return U(E,rc.EventType.OPEN,(()=>{I||(_e(ln,`RPC '${e}' stream ${o} transport opened.`),N.o_())})),U(E,rc.EventType.CLOSE,(()=>{I||(I=!0,_e(ln,`RPC '${e}' stream ${o} transport closed`),N.a_(),this.E_(E))})),U(E,rc.EventType.ERROR,(M=>{I||(I=!0,Io(ln,`RPC '${e}' stream ${o} transport errored. Name:`,M.name,"Message:",M.message),N.a_(new ge(se.UNAVAILABLE,"The operation could not be completed")))})),U(E,rc.EventType.MESSAGE,(M=>{if(!I){const L=M.data[0];nt(!!L,16349);const B=L,q=B?.error||B[0]?.error;if(q){_e(ln,`RPC '${e}' stream ${o} received error:`,q);const X=q.status;let ee=(function(C){const j=Ot[C];if(j!==void 0)return Hb(j)})(X),ne=q.message;ee===void 0&&(ee=se.INTERNAL,ne="Unknown error status: "+X+" with message "+q.message),I=!0,N.a_(new ge(ee,ne)),E.close()}else _e(ln,`RPC '${e}' stream ${o} received:`,L),N.u_(L)}})),U(p,lb.STAT_EVENT,(M=>{M.stat===km.PROXY?_e(ln,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===km.NOPROXY&&_e(ln,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function _m(){return typeof document<"u"?document:null}/**
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
 */function Fh(r){return new YN(r,!0)}/**
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
 */class i4{constructor(e,n,s=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&_e("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const mx="PersistentStream";class s4{constructor(e,n,s,o,c,h,p,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=c,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new i4(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===se.RESOURCE_EXHAUSTED?(xi(n.toString()),xi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===se.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new ge(se.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return _e(mx,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(_e(mx,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qR extends s4{constructor(e,n,s,o,c,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,h),this.serializer=c}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=KN(this.serializer,e),s=(function(c){if(!("targetChange"in c))return ke.min();const h=c.targetChange;return h.targetIds&&h.targetIds.length?ke.min():h.readTime?Or(h.readTime):ke.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Gm(this.serializer),n.addTarget=(function(c,h){let p;const g=h.target;if(p=Um(g)?{documents:ZN(c,g)}:{query:JN(c,g).ft},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=$b(c,h.resumeToken);const y=Fm(c,h.expectedCount);y!==null&&(p.expectedCount=y)}else if(h.snapshotVersion.compareTo(ke.min())>0){p.readTime=yh(c,h.snapshotVersion.toTimestamp());const y=Fm(c,h.expectedCount);y!==null&&(p.expectedCount=y)}return p})(this.serializer,e);const s=tR(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Gm(this.serializer),n.removeTarget=e,this.q_(n)}}class HR extends s4{constructor(e,n,s,o,c,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,h),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return nt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,nt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){nt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=XN(e.writeResults,e.commitTime),s=Or(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Gm(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>WN(this.serializer,s)))};this.q_(n)}}/**
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
 */class GR{}class YR extends GR{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ge(se.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,h])=>this.connection.Go(e,qm(n,s),o,c,h))).catch((c=>{throw c.name==="FirebaseError"?(c.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ge(se.UNKNOWN,c.toString())}))}Ho(e,n,s,o,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,p])=>this.connection.Ho(e,qm(n,s),o,h,p,c))).catch((h=>{throw h.name==="FirebaseError"?(h.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ge(se.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class $R{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xi(n),this.aa=!1):_e("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ga="RemoteStore";class QR{constructor(e,n,s,o,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{wa(this)&&(_e(ga,"Restarting streams for network reachability change."),await(async function(g){const y=Pe(g);y.Ea.add(4),await Gc(y),y.Ra.set("Unknown"),y.Ea.delete(4),await qh(y)})(this))}))})),this.Ra=new $R(s,o)}}async function qh(r){if(wa(r))for(const e of r.da)await e(!0)}async function Gc(r){for(const e of r.da)await e(!1)}function a4(r,e){const n=Pe(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Bg(n)?zg(n):Ho(n).O_()&&Ug(n,e))}function Vg(r,e){const n=Pe(r),s=Ho(n);n.Ia.delete(e),s.O_()&&o4(n,e),n.Ia.size===0&&(s.O_()?s.L_():wa(n)&&n.Ra.set("Unknown"))}function Ug(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ho(r).Y_(e)}function o4(r,e){r.Va.Ue(e),Ho(r).Z_(e)}function zg(r){r.Va=new FN({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Ho(r).start(),r.Ra.ua()}function Bg(r){return wa(r)&&!Ho(r).x_()&&r.Ia.size>0}function wa(r){return Pe(r).Ea.size===0}function l4(r){r.Va=void 0}async function KR(r){r.Ra.set("Online")}async function WR(r){r.Ia.forEach(((e,n)=>{Ug(r,e)}))}async function XR(r,e){l4(r),Bg(r)?(r.Ra.ha(e),zg(r)):r.Ra.set("Unknown")}async function ZR(r,e,n){if(r.Ra.set("Online"),e instanceof Yb&&e.state===2&&e.cause)try{await(async function(o,c){const h=c.cause;for(const p of c.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ia.delete(p),o.Va.removeTarget(p))})(r,e)}catch(s){_e(ga,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await xh(r,s)}else if(e instanceof Xd?r.Va.Ze(e):e instanceof Gb?r.Va.st(e):r.Va.tt(e),!n.isEqual(ke.min()))try{const s=await r4(r.localStore);n.compareTo(s)>=0&&await(function(c,h){const p=c.Va.Tt(h);return p.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const x=c.Ia.get(y);x&&c.Ia.set(y,x.withResumeToken(g.resumeToken,h))}})),p.targetMismatches.forEach(((g,y)=>{const x=c.Ia.get(g);if(!x)return;c.Ia.set(g,x.withResumeToken(rn.EMPTY_BYTE_STRING,x.snapshotVersion)),o4(c,g);const E=new as(x.target,g,y,x.sequenceNumber);Ug(c,E)})),c.remoteSyncer.applyRemoteEvent(p)})(r,n)}catch(s){_e(ga,"Failed to raise snapshot:",s),await xh(r,s)}}async function xh(r,e,n){if(!Fo(e))throw e;r.Ea.add(1),await Gc(r),r.Ra.set("Offline"),n||(n=()=>r4(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{_e(ga,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await qh(r)}))}function c4(r,e){return e().catch((n=>xh(r,n,e)))}async function Hh(r){const e=Pe(r),n=gs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Tg;for(;JR(e);)try{const o=await kR(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,e8(e,o)}catch(o){await xh(e,o)}u4(e)&&d4(e)}function JR(r){return wa(r)&&r.Ta.length<10}function e8(r,e){r.Ta.push(e);const n=gs(r);n.O_()&&n.X_&&n.ea(e.mutations)}function u4(r){return wa(r)&&!gs(r).x_()&&r.Ta.length>0}function d4(r){gs(r).start()}async function t8(r){gs(r).ra()}async function n8(r){const e=gs(r);for(const n of r.Ta)e.ea(n.mutations)}async function r8(r,e,n){const s=r.Ta.shift(),o=jg.from(s,e,n);await c4(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Hh(r)}async function i8(r,e){e&&gs(r).X_&&await(async function(s,o){if((function(h){return UN(h)&&h!==se.ABORTED})(o.code)){const c=s.Ta.shift();gs(s).B_(),await c4(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o))),await Hh(s)}})(r,e),u4(r)&&d4(r)}async function gx(r,e){const n=Pe(r);n.asyncQueue.verifyOperationInProgress(),_e(ga,"RemoteStore received new credentials");const s=wa(n);n.Ea.add(3),await Gc(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await qh(n)}async function s8(r,e){const n=Pe(r);e?(n.Ea.delete(2),await qh(n)):e||(n.Ea.add(2),await Gc(n),n.Ra.set("Unknown"))}function Ho(r){return r.ma||(r.ma=(function(n,s,o){const c=Pe(n);return c.sa(),new qR(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:KR.bind(null,r),t_:WR.bind(null,r),r_:XR.bind(null,r),H_:ZR.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Bg(r)?zg(r):r.Ra.set("Unknown")):(await r.ma.stop(),l4(r))}))),r.ma}function gs(r){return r.fa||(r.fa=(function(n,s,o){const c=Pe(n);return c.sa(),new HR(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:t8.bind(null,r),r_:i8.bind(null,r),ta:n8.bind(null,r),na:r8.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Hh(r)):(await r.fa.stop(),r.Ta.length>0&&(_e(ga,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Fg{constructor(e,n,s,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new pi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,c){const h=Date.now()+s,p=new Fg(e,n,h,o,c);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(se.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qg(r,e){if(xi("AsyncQueue",`${e}: ${r}`),Fo(r))return new ge(se.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||Se.comparator(n.key,s.key):(n,s)=>Se.comparator(n.key,s.key),this.keyedMap=ic(),this.sortedSet=new _t(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class yx{constructor(){this.ga=new _t(Se.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):je(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Mo{constructor(e,n,s,o,c,h,p,g,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,c){const h=[];return n.forEach((p=>{h.push({type:0,doc:p})})),new Mo(e,n,Ao.emptySet(n),h,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class a8{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class o8{constructor(){this.queries=vx(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Pe(n),c=o.queries;o.queries=vx(),c.forEach(((h,p)=>{for(const g of p.Sa)g.onError(s)}))})(this,new ge(se.ABORTED,"Firestore shutting down"))}}function vx(){return new Ea((r=>Db(r)),Lh)}async function Hg(r,e){const n=Pe(r);let s=3;const o=e.query;let c=n.queries.get(o);c?!c.ba()&&e.Da()&&(s=2):(c=new a8,s=e.Da()?0:1);try{switch(s){case 0:c.wa=await n.onListen(o,!0);break;case 1:c.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(h){const p=qg(h,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(p)}n.queries.set(o,c),c.Sa.push(e),e.va(n.onlineState),c.wa&&e.Fa(c.wa)&&Yg(n)}async function Gg(r,e){const n=Pe(r),s=e.query;let o=3;const c=n.queries.get(s);if(c){const h=c.Sa.indexOf(e);h>=0&&(c.Sa.splice(h,1),c.Sa.length===0?o=e.Da()?0:1:!c.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function l8(r,e){const n=Pe(r);let s=!1;for(const o of e){const c=o.query,h=n.queries.get(c);if(h){for(const p of h.Sa)p.Fa(o)&&(s=!0);h.wa=o}}s&&Yg(n)}function c8(r,e,n){const s=Pe(r),o=s.queries.get(e);if(o)for(const c of o.Sa)c.onError(n);s.queries.delete(e)}function Yg(r){r.Ca.forEach((e=>{e.next()}))}var Qm,xx;(xx=Qm||(Qm={})).Ma="default",xx.Cache="cache";class $g{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Mo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qm.Cache}}/**
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
 */class h4{constructor(e){this.key=e}}class f4{constructor(e){this.key=e}}class u8{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=He(),this.mutatedKeys=He(),this.eu=Ob(e),this.tu=new Ao(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new yx,o=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,h=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((x,E)=>{const w=o.get(x),I=Vh(this.query,E)?E:null,N=!!w&&this.mutatedKeys.has(w.key),U=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let M=!1;w&&I?w.data.isEqual(I.data)?N!==U&&(s.track({type:3,doc:I}),M=!0):this.su(w,I)||(s.track({type:2,doc:I}),M=!0,(g&&this.eu(I,g)>0||y&&this.eu(I,y)<0)&&(p=!0)):!w&&I?(s.track({type:0,doc:I}),M=!0):w&&!I&&(s.track({type:1,doc:w}),M=!0,(g||y)&&(p=!0)),M&&(I?(h=h.add(I),c=U?c.add(x):c.delete(x)):(h=h.delete(x),c=c.delete(x)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const x=this.query.limitType==="F"?h.last():h.first();h=h.delete(x.key),c=c.delete(x.key),s.track({type:1,doc:x})}return{tu:h,iu:s,Cs:p,mutatedKeys:c}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((x,E)=>(function(I,N){const U=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return je(20277,{Rt:M})}};return U(I)-U(N)})(x.type,E.type)||this.eu(x.doc,E.doc))),this.ou(s),o=o??!1;const p=n&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,y=g!==this.Za;return this.Za=g,h.length!==0||y?{snapshot:new Mo(this.query,e.tu,c,h,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yx,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=He(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new f4(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new h4(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=He();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Mo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Qg="SyncEngine";class d8{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class h8{constructor(e){this.key=e,this.hu=!1}}class f8{constructor(e,n,s,o,c,h){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Ea((p=>Db(p)),Lh),this.Iu=new Map,this.Eu=new Set,this.du=new _t(Se.comparator),this.Au=new Map,this.Ru=new kg,this.Vu={},this.mu=new Map,this.fu=ko.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function p8(r,e,n=!0){const s=x4(r);let o;const c=s.Tu.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.lu()):o=await p4(s,e,n,!0),o}async function m8(r,e){const n=x4(r);await p4(n,e,!0,!1)}async function p4(r,e,n,s){const o=await MR(r.localStore,Dr(e)),c=o.targetId,h=r.sharedClientState.addLocalQueryTarget(c,n);let p;return s&&(p=await g8(r,e,c,h==="current",o.resumeToken)),r.isPrimaryClient&&n&&a4(r.remoteStore,o),p}async function g8(r,e,n,s,o){r.pu=(E,w,I)=>(async function(U,M,L,B){let q=M.view.ru(L);q.Cs&&(q=await dx(U.localStore,M.query,!1).then((({documents:k})=>M.view.ru(k,q))));const X=B&&B.targetChanges.get(M.targetId),ee=B&&B.targetMismatches.get(M.targetId)!=null,ne=M.view.applyChanges(q,U.isPrimaryClient,X,ee);return bx(U,M.targetId,ne.au),ne.snapshot})(r,E,w,I);const c=await dx(r.localStore,e,!0),h=new u8(e,c.Qs),p=h.ru(c.documents),g=Hc.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=h.applyChanges(p,r.isPrimaryClient,g);bx(r,n,y.au);const x=new d8(e,n,h);return r.Tu.set(e,x),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),y.snapshot}async function y8(r,e,n){const s=Pe(r),o=s.Tu.get(e),c=s.Iu.get(o.targetId);if(c.length>1)return s.Iu.set(o.targetId,c.filter((h=>!Lh(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Ym(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Vg(s.remoteStore,o.targetId),Km(s,o.targetId)})).catch(Bo)):(Km(s,o.targetId),await Ym(s.localStore,o.targetId,!0))}async function v8(r,e){const n=Pe(r),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Vg(n.remoteStore,s.targetId))}async function x8(r,e,n){const s=A8(r);try{const o=await(function(h,p){const g=Pe(h),y=ct.now(),x=p.reduce(((I,N)=>I.add(N.key)),He());let E,w;return g.persistence.runTransaction("Locally write mutations","readwrite",(I=>{let N=_i(),U=He();return g.Ns.getEntries(I,x).next((M=>{N=M,N.forEach(((L,B)=>{B.isValidDocument()||(U=U.add(L))}))})).next((()=>g.localDocuments.getOverlayedDocuments(I,N))).next((M=>{E=M;const L=[];for(const B of p){const q=kN(B,E.get(B.key).overlayedDocument);q!=null&&L.push(new Es(B.key,q,Tb(q.value.mapValue),An.exists(!0)))}return g.mutationQueue.addMutationBatch(I,y,L,p)})).next((M=>{w=M;const L=M.applyToLocalDocumentSet(E,U);return g.documentOverlayCache.saveOverlays(I,M.batchId,L)}))})).then((()=>({batchId:w.batchId,changes:Mb(E)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,p,g){let y=h.Vu[h.currentUser.toKey()];y||(y=new _t(qe)),y=y.insert(p,g),h.Vu[h.currentUser.toKey()]=y})(s,o.batchId,n),await Yc(s,o.changes),await Hh(s.remoteStore)}catch(o){const c=qg(o,"Failed to persist write");n.reject(c)}}async function m4(r,e){const n=Pe(r);try{const s=await DR(n.localStore,e);e.targetChanges.forEach(((o,c)=>{const h=n.Au.get(c);h&&(nt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?nt(h.hu,14607):o.removedDocuments.size>0&&(nt(h.hu,42227),h.hu=!1))})),await Yc(n,s,e)}catch(s){await Bo(s)}}function _x(r,e,n){const s=Pe(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((c,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(h,p){const g=Pe(h);g.onlineState=p;let y=!1;g.queries.forEach(((x,E)=>{for(const w of E.Sa)w.va(p)&&(y=!0)})),y&&Yg(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _8(r,e,n){const s=Pe(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),c=o&&o.key;if(c){let h=new _t(Se.comparator);h=h.insert(c,un.newNoDocument(c,ke.min()));const p=He().add(c),g=new Bh(ke.min(),new Map,new _t(qe),h,p);await m4(s,g),s.du=s.du.remove(c),s.Au.delete(e),Kg(s)}else await Ym(s.localStore,e,!1).then((()=>Km(s,e,n))).catch(Bo)}async function b8(r,e){const n=Pe(r),s=e.batch.batchId;try{const o=await jR(n.localStore,e);y4(n,s,null),g4(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Yc(n,o)}catch(o){await Bo(o)}}async function E8(r,e,n){const s=Pe(r);try{const o=await(function(h,p){const g=Pe(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let x;return g.mutationQueue.lookupMutationBatch(y,p).next((E=>(nt(E!==null,37113),x=E.keys(),g.mutationQueue.removeMutationBatch(y,E)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,x,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,x))).next((()=>g.localDocuments.getDocuments(y,x)))}))})(s.localStore,e);y4(s,e,n),g4(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Yc(s,o)}catch(o){await Bo(o)}}function g4(r,e){(r.mu.get(e)||[]).forEach((n=>{n.resolve()})),r.mu.delete(e)}function y4(r,e,n){const s=Pe(r);let o=s.Vu[s.currentUser.toKey()];if(o){const c=o.get(e);c&&(n?c.reject(n):c.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Km(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||v4(r,s)}))}function v4(r,e){r.Eu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(Vg(r.remoteStore,n),r.du=r.du.remove(e),r.Au.delete(n),Kg(r))}function bx(r,e,n){for(const s of n)s instanceof h4?(r.Ru.addReference(s.key,e),w8(r,s)):s instanceof f4?(_e(Qg,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||v4(r,s.key)):je(19791,{wu:s})}function w8(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(_e(Qg,"New document in limbo: "+n),r.Eu.add(s),Kg(r))}function Kg(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new Se(ht.fromString(e)),s=r.fu.next();r.Au.set(s,new h8(n)),r.du=r.du.insert(n,s),a4(r.remoteStore,new as(Dr(Ph(n.path)),s,"TargetPurposeLimboResolution",Oh.ce))}}async function Yc(r,e,n){const s=Pe(r),o=[],c=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((p,g)=>{h.push(s.pu(g,e,n).then((y=>{if((y||n)&&s.isPrimaryClient){const x=y?!y.fromCache:n?.targetChanges.get(g.targetId)?.current;s.sharedClientState.updateQueryState(g.targetId,x?"current":"not-current")}if(y){o.push(y);const x=Pg.As(g.targetId,y);c.push(x)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(g,y){const x=Pe(g);try{await x.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>ce.forEach(y,(w=>ce.forEach(w.Es,(I=>x.persistence.referenceDelegate.addReference(E,w.targetId,I))).next((()=>ce.forEach(w.ds,(I=>x.persistence.referenceDelegate.removeReference(E,w.targetId,I)))))))))}catch(E){if(!Fo(E))throw E;_e(Lg,"Failed to update sequence numbers: "+E)}for(const E of y){const w=E.targetId;if(!E.fromCache){const I=x.Ms.get(w),N=I.snapshotVersion,U=I.withLastLimboFreeSnapshotVersion(N);x.Ms=x.Ms.insert(w,U)}}})(s.localStore,c))}async function T8(r,e){const n=Pe(r);if(!n.currentUser.isEqual(e)){_e(Qg,"User change. New user:",e.toKey());const s=await n4(n.localStore,e);n.currentUser=e,(function(c,h){c.mu.forEach((p=>{p.forEach((g=>{g.reject(new ge(se.CANCELLED,h))}))})),c.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Yc(n,s.Ls)}}function S8(r,e){const n=Pe(r),s=n.Au.get(e);if(s&&s.hu)return He().add(s.key);{let o=He();const c=n.Iu.get(e);if(!c)return o;for(const h of c){const p=n.Tu.get(h);o=o.unionWith(p.view.nu)}return o}}function x4(r){const e=Pe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=m4.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=S8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_8.bind(null,e),e.Pu.H_=l8.bind(null,e.eventManager),e.Pu.yu=c8.bind(null,e.eventManager),e}function A8(r){const e=Pe(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=b8.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=E8.bind(null,e),e}class _h{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return IR(this.persistence,new NR,e.initialUser,this.serializer)}Cu(e){return new t4(Mg.mi,this.serializer)}Du(e){return new LR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_h.provider={build:()=>new _h};class N8 extends _h{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){nt(this.persistence.referenceDelegate instanceof vh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new hR(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?wn.withCacheSize(this.cacheSizeBytes):wn.DEFAULT;return new t4((s=>vh.mi(s,n)),this.serializer)}}class Wm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>_x(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=T8.bind(null,this.syncEngine),await s8(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new o8})()}createDatastore(e){const n=Fh(e.databaseInfo.databaseId),s=(function(c){return new FR(c)})(e.databaseInfo);return(function(c,h,p,g){return new YR(c,h,p,g)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,c,h,p){return new QR(s,o,c,h,p)})(this.localStore,this.datastore,e.asyncQueue,(n=>_x(this.syncEngine,n,0)),(function(){return px.v()?new px:new VR})())}createSyncEngine(e,n){return(function(o,c,h,p,g,y,x){const E=new f8(o,c,h,p,g,y);return x&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Pe(n);_e(ga,"RemoteStore shutting down."),s.Ea.add(5),await Gc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Wm.provider={build:()=>new Wm};/**
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
 */class Wg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xi("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const ys="FirestoreClient";class R8{constructor(e,n,s,o,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=cn.UNAUTHENTICATED,this.clientId=wg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async h=>{_e(ys,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(_e(ys,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=qg(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function bm(r,e){r.asyncQueue.verifyOperationInProgress(),_e(ys,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await n4(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Ex(r,e){r.asyncQueue.verifyOperationInProgress();const n=await C8(r);_e(ys,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>gx(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>gx(e.remoteStore,o))),r._onlineComponents=e}async function C8(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){_e(ys,"Using user provided OfflineComponentProvider");try{await bm(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===se.FAILED_PRECONDITION||o.code===se.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;Io("Error using user provided cache. Falling back to memory cache: "+n),await bm(r,new _h)}}else _e(ys,"Using default OfflineComponentProvider"),await bm(r,new N8(void 0));return r._offlineComponents}async function _4(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(_e(ys,"Using user provided OnlineComponentProvider"),await Ex(r,r._uninitializedComponentsProvider._online)):(_e(ys,"Using default OnlineComponentProvider"),await Ex(r,new Wm))),r._onlineComponents}function I8(r){return _4(r).then((e=>e.syncEngine))}async function bh(r){const e=await _4(r),n=e.eventManager;return n.onListen=p8.bind(null,e.syncEngine),n.onUnlisten=y8.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=m8.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=v8.bind(null,e.syncEngine),n}function j8(r,e,n={}){const s=new pi;return r.asyncQueue.enqueueAndForget((async()=>(function(c,h,p,g,y){const x=new Wg({next:w=>{x.Nu(),h.enqueueAndForget((()=>Gg(c,E)));const I=w.docs.has(p);!I&&w.fromCache?y.reject(new ge(se.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&w.fromCache&&g&&g.source==="server"?y.reject(new ge(se.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(w)},error:w=>y.reject(w)}),E=new $g(Ph(p.path),x,{includeMetadataChanges:!0,qa:!0});return Hg(c,E)})(await bh(r),r.asyncQueue,e,n,s))),s.promise}function D8(r,e,n={}){const s=new pi;return r.asyncQueue.enqueueAndForget((async()=>(function(c,h,p,g,y){const x=new Wg({next:w=>{x.Nu(),h.enqueueAndForget((()=>Gg(c,E))),w.fromCache&&g.source==="server"?y.reject(new ge(se.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(w)},error:w=>y.reject(w)}),E=new $g(p,x,{includeMetadataChanges:!0,qa:!0});return Hg(c,E)})(await bh(r),r.asyncQueue,e,n,s))),s.promise}/**
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
 */function b4(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const wx=new Map;/**
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
 */const E4="firestore.googleapis.com",Tx=!0;class Sx{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ge(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=E4,this.ssl=Tx}else this.host=e.host,this.ssl=e.ssl??Tx;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=e4;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uR)throw new ge(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$A("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=b4(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ge(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ge(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ge(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gh{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sx({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sx(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new LA;switch(s.type){case"firstParty":return new BA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ge(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=wx.get(n);s&&(_e("ComponentProvider","Removing Datastore"),wx.delete(n),s.terminate())})(this),Promise.resolve()}}function O8(r,e,n,s={}){r=Sn(r,Gh);const o=Lo(e),c=r._getSettings(),h={...c,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${n}`;o&&(m_(`https://${p}`),g_("Firestore",!0)),c.host!==E4&&c.host!==p&&Io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...c,host:p,ssl:o,emulatorOptions:s};if(!da(g,h)&&(r._setSettings(g),s.mockUserToken)){let y,x;if(typeof s.mockUserToken=="string")y=s.mockUserToken,x=cn.MOCK_USER;else{y=W3(s.mockUserToken,r._app?.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new ge(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new cn(E)}r._authCredentials=new VA(new hb(y,x))}}/**
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
 */class ws{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ws(this.firestore,e,this._query)}}class wt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}toJSON(){return{type:wt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Fc(n,wt._jsonSchema))return new wt(e,s||null,new Se(ht.fromString(n.referencePath)))}}wt._jsonSchemaVersion="firestore/documentReference/1.0",wt._jsonSchema={type:Mt("string",wt._jsonSchemaVersion),referencePath:Mt("string")};class ds extends ws{constructor(e,n,s){super(e,n,Ph(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new Se(e))}withConverter(e){return new ds(this.firestore,e,this._path)}}function gn(r,e,...n){if(r=Rt(r),fb("collection","path",e),r instanceof Gh){const s=ht.fromString(e,...n);return V2(s),new ds(r,null,s)}{if(!(r instanceof wt||r instanceof ds))throw new ge(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ht.fromString(e,...n));return V2(s),new ds(r.firestore,null,s)}}function yn(r,e,...n){if(r=Rt(r),arguments.length===1&&(e=wg.newId()),fb("doc","path",e),r instanceof Gh){const s=ht.fromString(e,...n);return L2(s),new wt(r,null,new Se(s))}{if(!(r instanceof wt||r instanceof ds))throw new ge(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ht.fromString(e,...n));return L2(s),new wt(r.firestore,r instanceof ds?r.converter:null,new Se(s))}}/**
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
 */const Ax="AsyncQueue";class Nx{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new i4(this,"async_queue_retry"),this._c=()=>{const s=_m();s&&_e(Ax,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=_m();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=_m();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new pi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Fo(e))throw e;_e(Ax,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,xi("INTERNAL UNHANDLED ERROR: ",Rx(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=Fg.createAndSchedule(this,e,n,s,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&je(47125,{Pc:Rx(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Rx(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function Cx(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const c of s)if(c in o&&typeof o[c]=="function")return!0;return!1})(r,["next","error","complete"])}class bi extends Gh{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new Nx,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nx(e),this._firestoreClient=void 0,await e}}}function k8(r,e){const n=typeof r=="object"?r:__(),s=typeof r=="string"?r:fh,o=hg(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=Q3("firestore");c&&O8(o,...c)}return o}function $c(r){if(r._terminated)throw new ge(se.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||M8(r),r._firestoreClient}function M8(r){const e=r._freezeSettings(),n=(function(o,c,h,p){return new iN(o,c,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,b4(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new R8(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const c=o?._online.build();return{_offline:o?._offline.build(c),_online:c}})(r._componentsProvider))}/**
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
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(rn.fromBase64String(e))}catch(n){throw new ge(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:er._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fc(e,er._jsonSchema))return er.fromBase64String(e.bytes)}}er._jsonSchemaVersion="firestore/bytes/1.0",er._jsonSchema={type:Mt("string",er._jsonSchemaVersion),bytes:Mt("string")};/**
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
 */class Qc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ge(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Yh{constructor(e){this._methodName=e}}/**
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
 */class kr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ge(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ge(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return qe(this._lat,e._lat)||qe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kr._jsonSchemaVersion}}static fromJSON(e){if(Fc(e,kr._jsonSchema))return new kr(e.latitude,e.longitude)}}kr._jsonSchemaVersion="firestore/geoPoint/1.0",kr._jsonSchema={type:Mt("string",kr._jsonSchemaVersion),latitude:Mt("number"),longitude:Mt("number")};/**
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
 */class Mr{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Mr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fc(e,Mr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Mr(e.vectorValues);throw new ge(se.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mr._jsonSchemaVersion="firestore/vectorValue/1.0",Mr._jsonSchema={type:Mt("string",Mr._jsonSchemaVersion),vectorValues:Mt("object")};/**
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
 */const P8=/^__.*__$/;class L8{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Es(e,this.data,this.fieldMask,n,this.fieldTransforms):new qc(e,this.data,n,this.fieldTransforms)}}class w4{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Es(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function T4(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw je(40011,{Ac:r})}}class Xg{constructor(e,n,s,o,c,h){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Xg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Eh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(T4(this.Ac)&&P8.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class V8{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Fh(e)}Cc(e,n,s,o=!1){return new Xg({Ac:e,methodName:n,Dc:s,path:nn.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kc(r){const e=r._freezeSettings(),n=Fh(r._databaseId);return new V8(r._databaseId,!!e.ignoreUndefinedProperties,n)}function Zg(r,e,n,s,o,c={}){const h=r.Cc(c.merge||c.mergeFields?2:0,e,n,o);e0("Data must be an object, but it was:",h,s);const p=N4(s,h);let g,y;if(c.merge)g=new Ln(h.fieldMask),y=h.fieldTransforms;else if(c.mergeFields){const x=[];for(const E of c.mergeFields){const w=Xm(e,E,n);if(!h.contains(w))throw new ge(se.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);C4(x,w)||x.push(w)}g=new Ln(x),y=h.fieldTransforms.filter((E=>g.covers(E.field)))}else g=null,y=h.fieldTransforms;return new L8(new Tn(p),g,y)}class $h extends Yh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $h}}class Jg extends Yh{_toFieldTransform(e){return new IN(e.path,new Cc)}isEqual(e){return e instanceof Jg}}function S4(r,e,n,s){const o=r.Cc(1,e,n);e0("Data must be an object, but it was:",o,s);const c=[],h=Tn.empty();bs(s,((g,y)=>{const x=t0(e,g,n);y=Rt(y);const E=o.yc(x);if(y instanceof $h)c.push(x);else{const w=Wc(y,E);w!=null&&(c.push(x),h.set(x,w))}}));const p=new Ln(c);return new w4(h,p,o.fieldTransforms)}function A4(r,e,n,s,o,c){const h=r.Cc(1,e,n),p=[Xm(e,s,n)],g=[o];if(c.length%2!=0)throw new ge(se.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<c.length;w+=2)p.push(Xm(e,c[w])),g.push(c[w+1]);const y=[],x=Tn.empty();for(let w=p.length-1;w>=0;--w)if(!C4(y,p[w])){const I=p[w];let N=g[w];N=Rt(N);const U=h.yc(I);if(N instanceof $h)y.push(I);else{const M=Wc(N,U);M!=null&&(y.push(I),x.set(I,M))}}const E=new Ln(y);return new w4(x,E,h.fieldTransforms)}function U8(r,e,n,s=!1){return Wc(n,r.Cc(s?4:3,e))}function Wc(r,e){if(R4(r=Rt(r)))return e0("Unsupported field value:",e,r),N4(r,e);if(r instanceof Yh)return(function(s,o){if(!T4(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const c=[];let h=0;for(const p of s){let g=Wc(p,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),h++}return{arrayValue:{values:c}}})(r,e)}return(function(s,o){if((s=Rt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return NN(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=ct.fromDate(s);return{timestampValue:yh(o.serializer,c)}}if(s instanceof ct){const c=new ct(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:yh(o.serializer,c)}}if(s instanceof kr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof er)return{bytesValue:$b(o.serializer,s._byteString)};if(s instanceof wt){const c=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(c))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Og(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Mr)return(function(h,p){return{mapValue:{fields:{[Eb]:{stringValue:wb},[ph]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw p.Sc("VectorValues must only contain numeric values.");return Cg(p.serializer,y)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${Dh(s)}`)})(r,e)}function N4(r,e){const n={};return gb(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(r,((s,o)=>{const c=Wc(o,e.mc(s));c!=null&&(n[s]=c)})),{mapValue:{fields:n}}}function R4(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ct||r instanceof kr||r instanceof er||r instanceof wt||r instanceof Yh||r instanceof Mr)}function e0(r,e,n){if(!R4(n)||!pb(n)){const s=Dh(n);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function Xm(r,e,n){if((e=Rt(e))instanceof Qc)return e._internalPath;if(typeof e=="string")return t0(r,e);throw Eh("Field path arguments must be of type string or ",r,!1,void 0,n)}const z8=new RegExp("[~\\*/\\[\\]]");function t0(r,e,n){if(e.search(z8)>=0)throw Eh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Qc(...e.split("."))._internalPath}catch{throw Eh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Eh(r,e,n,s,o){const c=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(c||h)&&(g+=" (found",c&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ge(se.INVALID_ARGUMENT,p+r+g)}function C4(r,e){return r.some((n=>n.isEqual(e)))}/**
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
 */class I4{constructor(e,n,s,o,c){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new B8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class B8 extends I4{data(){return super.data()}}function Qh(r,e){return typeof e=="string"?t0(r,e):e instanceof Qc?e._internalPath:e._delegate._internalPath}/**
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
 */function j4(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ge(se.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class n0{}class D4 extends n0{}function mi(r,e,...n){let s=[];e instanceof n0&&s.push(e),s=s.concat(n),(function(c){const h=c.filter((g=>g instanceof r0)).length,p=c.filter((g=>g instanceof Kh)).length;if(h>1||h>0&&p>0)throw new ge(se.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Kh extends D4{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Kh(e,n,s)}_apply(e){const n=this._parse(e);return O4(e._query,n),new ws(e.firestore,e.converter,zm(e._query,n))}_parse(e){const n=Kc(e.firestore);return(function(c,h,p,g,y,x,E){let w;if(y.isKeyField()){if(x==="array-contains"||x==="array-contains-any")throw new ge(se.INVALID_ARGUMENT,`Invalid Query. You can't perform '${x}' queries on documentId().`);if(x==="in"||x==="not-in"){jx(E,x);const N=[];for(const U of E)N.push(Ix(g,c,U));w={arrayValue:{values:N}}}else w=Ix(g,c,E)}else x!=="in"&&x!=="not-in"&&x!=="array-contains-any"||jx(E,x),w=U8(p,h,E,x==="in"||x==="not-in");return kt.create(y,x,w)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gc(r,e,n){const s=e,o=Qh("where",r);return Kh._create(o,s,n)}class r0 extends n0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new r0(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:dr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(o,c){let h=o;const p=c.getFlattenedFilters();for(const g of p)O4(h,g),h=zm(h,g)})(e._query,n),new ws(e.firestore,e.converter,zm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class i0 extends D4{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new i0(e,n)}_apply(e){const n=(function(o,c,h){if(o.startAt!==null)throw new ge(se.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ge(se.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Rc(c,h)})(e._query,this._field,this._direction);return new ws(e.firestore,e.converter,(function(o,c){const h=o.explicitOrderBy.concat([c]);return new qo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,n))}}function ya(r,e="asc"){const n=e,s=Qh("orderBy",r);return i0._create(s,n)}function Ix(r,e,n){if(typeof(n=Rt(n))=="string"){if(n==="")throw new ge(se.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jb(e)&&n.indexOf("/")!==-1)throw new ge(se.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ht.fromString(n));if(!Se.isDocumentKey(s))throw new ge(se.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Y2(r,new Se(s))}if(n instanceof wt)return Y2(r,n._key);throw new ge(se.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dh(n)}.`)}function jx(r,e){if(!Array.isArray(r)||r.length===0)throw new ge(se.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function O4(r,e){const n=(function(o,c){for(const h of o)for(const p of h.getFlattenedFilters())if(c.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ge(se.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ge(se.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class F8{convertValue(e,n="none"){switch(ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw je(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return bs(e,((o,c)=>{s[o]=this.convertValue(c,n)})),s}convertVectorValue(e){const n=e.fields?.[ph].arrayValue?.values?.map((s=>Nt(s.doubleValue)));return new Mr(n)}convertGeoPoint(e){return new kr(Nt(e.latitude),Nt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Mh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Sc(e));default:return null}}convertTimestamp(e){const n=fs(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ht.fromString(e);nt(Jb(s),9688,{name:e});const o=new Ac(s.get(1),s.get(3)),c=new Se(s.popFirst(5));return o.isEqual(n)||xi(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
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
 */function s0(r,e,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,s}class ac{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ca extends I4{constructor(e,n,s,o,c,h){super(e,n,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Qh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(se.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ca._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ca._jsonSchemaVersion="firestore/documentSnapshot/1.0",ca._jsonSchema={type:Mt("string",ca._jsonSchemaVersion),bundleSource:Mt("string","DocumentSnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class Zd extends ca{data(e={}){return super.data(e)}}class ua{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new ac(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Zd(this._firestore,this._userDataWriter,s.key,s,new ac(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ge(se.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,c){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((p=>{const g=new Zd(o._firestore,o._userDataWriter,p.doc.key,p.doc,new ac(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>c||p.type!==3)).map((p=>{const g=new Zd(o._firestore,o._userDataWriter,p.doc.key,p.doc,new ac(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,x=-1;return p.type!==0&&(y=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),x=h.indexOf(p.doc.key)),{type:q8(p.type),doc:g,oldIndex:y,newIndex:x}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(se.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ua._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function q8(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return je(61501,{type:r})}}/**
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
 */function Dc(r){r=Sn(r,wt);const e=Sn(r.firestore,bi);return j8($c(e),r._key).then((n=>M4(e,r,n)))}ua._jsonSchemaVersion="firestore/querySnapshot/1.0",ua._jsonSchema={type:Mt("string",ua._jsonSchemaVersion),bundleSource:Mt("string","QuerySnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class a0 extends F8{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function No(r){r=Sn(r,ws);const e=Sn(r.firestore,bi),n=$c(e),s=new a0(e);return j4(r._query),D8(n,r._query).then((o=>new ua(e,s,r,o)))}function k4(r,e,n){r=Sn(r,wt);const s=Sn(r.firestore,bi),o=s0(r.converter,e,n);return Xh(s,[Zg(Kc(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,An.none())])}function bo(r,e,n,...s){r=Sn(r,wt);const o=Sn(r.firestore,bi),c=Kc(o);let h;return h=typeof(e=Rt(e))=="string"||e instanceof Qc?A4(c,"updateDoc",r._key,e,n,s):S4(c,"updateDoc",r._key,e),Xh(o,[h.toMutation(r._key,An.exists(!0))])}function Go(r,e){const n=Sn(r.firestore,bi),s=yn(r),o=s0(r.converter,e);return Xh(n,[Zg(Kc(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,An.exists(!1))]).then((()=>s))}function Wh(r,...e){r=Rt(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Cx(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Cx(e[s])){const g=e[s];e[s]=g.next?.bind(g),e[s+1]=g.error?.bind(g),e[s+2]=g.complete?.bind(g)}let c,h,p;if(r instanceof wt)h=Sn(r.firestore,bi),p=Ph(r._key.path),c={next:g=>{e[s]&&e[s](M4(h,r,g))},error:e[s+1],complete:e[s+2]};else{const g=Sn(r,ws);h=Sn(g.firestore,bi),p=g._query;const y=new a0(h);c={next:x=>{e[s]&&e[s](new ua(h,y,g,x))},error:e[s+1],complete:e[s+2]},j4(r._query)}return(function(y,x,E,w){const I=new Wg(w),N=new $g(x,I,E);return y.asyncQueue.enqueueAndForget((async()=>Hg(await bh(y),N))),()=>{I.Nu(),y.asyncQueue.enqueueAndForget((async()=>Gg(await bh(y),N)))}})($c(h),p,o,c)}function Xh(r,e){return(function(s,o){const c=new pi;return s.asyncQueue.enqueueAndForget((async()=>x8(await I8(s),o,c))),c.promise})($c(r),e)}function M4(r,e,n){const s=n.docs.get(e._key),o=new a0(r);return new ca(r,o,e._key,s,new ac(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class H8{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Kc(e)}set(e,n,s){this._verifyNotCommitted();const o=Em(e,this._firestore),c=s0(o.converter,n,s),h=Zg(this._dataReader,"WriteBatch.set",o._key,c,o.converter!==null,s);return this._mutations.push(h.toMutation(o._key,An.none())),this}update(e,n,s,...o){this._verifyNotCommitted();const c=Em(e,this._firestore);let h;return h=typeof(n=Rt(n))=="string"||n instanceof Qc?A4(this._dataReader,"WriteBatch.update",c._key,n,s,o):S4(this._dataReader,"WriteBatch.update",c._key,n),this._mutations.push(h.toMutation(c._key,An.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Em(e,this._firestore);return this._mutations=this._mutations.concat(new Ig(n._key,An.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ge(se.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Em(r,e){if((r=Rt(r)).firestore!==e)throw new ge(se.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}function vs(){return new Jg("serverTimestamp")}/**
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
 */function P4(r){return $c(r=Sn(r,bi)),new H8(r,(e=>Xh(r,e)))}(function(e,n=!0){(function(o){zo=o})(Vo),Co(new ha("firestore",((s,{instanceIdentifier:o,options:c})=>{const h=s.getProvider("app").getImmediate(),p=new bi(new UA(s.getProvider("auth-internal")),new FA(h,s.getProvider("app-check-internal")),(function(y,x){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ge(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ac(y.options.projectId,x)})(h,o),h);return c={useFetchStreams:n,...c},p._setSettings(c),p}),"PUBLIC").setMultipleInstances(!0)),cs(O2,k2,e),cs(O2,k2,"esm2020")})();var G8="firebase",Y8="12.1.0";/**
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
 */cs(G8,Y8,"app");const $8={apiKey:"AIzaSyAwNVpI9pwh7lCsh1C53JH8w991gmeUbKI",authDomain:"goldinc-7ed2f.firebaseapp.com",projectId:"goldinc-7ed2f",storageBucket:"goldinc-7ed2f.firebasestorage.app",messagingSenderId:"336738370359",appId:"1:336738370359:web:27be8e3965dac5215dd0b2"},L4=x_($8),va=wc(L4),et=k8(L4),Q8=({user:r})=>{const[e,n]=P.useState(!1),[s,o]=P.useState([]),[c,h]=P.useState(""),[p,g]=P.useState(!1),[y,x]=P.useState(null);P.useEffect(()=>{if(!r||!e)return;const I=mi(gn(et,"chats"),gc("userId","==",r.uid),ya("timestamp","asc")),N=Wh(I,U=>{const M=[];U.forEach(L=>{M.push({id:L.id,...L.data()})}),o(M),setTimeout(()=>{const L=document.getElementById("chat-messages");L&&(L.scrollTop=L.scrollHeight)},100)},U=>{console.error("Error loading messages:",U),x("Failed to load messages")});return()=>N()},[r,e]);const E=async I=>{if(I.preventDefault(),!!c.trim()){g(!0);try{await Go(gn(et,"chats"),{userId:r.uid,userName:r.displayName||r.email,message:c.trim(),isAdmin:!1,timestamp:vs(),read:!1}),h("")}catch(N){console.error("Error sending message:",N),x("Failed to send message")}finally{g(!1)}}},w=I=>I?I.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:`chat-button ${e?"chat-button-hidden":""}`,onClick:()=>n(!0),children:[u.jsx(v3,{size:20}),u.jsx("span",{children:"Support"})]}),e&&u.jsxs("div",{className:"chat-window",children:[u.jsxs("div",{className:"chat-header",children:[u.jsx("h3",{children:"Customer Support"}),u.jsx("button",{className:"chat-close-btn",onClick:()=>n(!1),children:u.jsx(N3,{})})]}),u.jsx("div",{id:"chat-messages",className:"chat-messages",children:s.length===0?u.jsxs("div",{className:"chat-empty",children:[u.jsx("p",{children:"Start a conversation with our support team!"}),u.jsx("p",{children:"We're here to help you with any questions."})]}):s.map(I=>u.jsx("div",{className:`message ${I.isAdmin?"admin-message":"user-message"}`,children:u.jsxs("div",{className:"message-content",children:[u.jsx("p",{children:I.message}),u.jsx("span",{className:"message-time",children:I.timestamp?w(I.timestamp):"Sending..."})]})},I.id))}),u.jsxs("form",{onSubmit:E,className:"chat-input-form",children:[y&&u.jsx("div",{className:"chat-error",children:y}),u.jsxs("div",{className:"chat-input-container",children:[u.jsx("input",{type:"text",value:c,onChange:I=>h(I.target.value),placeholder:"Type your message here...",disabled:p}),u.jsx("button",{type:"submit",disabled:p||!c.trim(),className:"chat-send-btn",children:u.jsx(S3,{})})]})]})]})]})},K8=[{id:1,name:"BEGINNERS PLAN",profitPercent:5,min:200,max:19900,duration:7,description:"Perfect for beginners starting with gold investment"},{id:2,name:"MASTERS PLAN",profitPercent:30,min:2e4,max:99999,duration:14,description:"Ideal for consistent wealth accumulation"},{id:3,name:"PREMIUM PLAN",profitPercent:50,min:1e6,max:1/0,duration:30,description:"For premium investors building a substantial portfolio"}],V4=[{type:"USDT (ERC20)",address:"0x2F549207342b44ADF00d25893580b23902f3137B"},{type:"TRON",address:"TNyKcnXh9GhANHaCgQyRdnXGmMc72ykQFC"},{type:"DOGECOIN",address:"D7whXjWwZzsXqnfZdy3rSkBtvTbyefr4d4"}],W8=({user:r})=>{const e=xs(),[n,s]=P.useState({}),[o,c]=P.useState(!0),[h,p]=P.useState(null);return P.useEffect(()=>{(async()=>{if(r)try{const y=yn(et,"users",r.uid),x=await Dc(y);x.exists()?s(x.data()):p("Profile data not found.")}catch(y){p("Failed to fetch profile data."),console.error(y)}c(!1)})()},[r]),o?u.jsx("div",{className:"loading",children:"Loading profile..."}):h?u.jsx("div",{className:"error-message",children:h}):u.jsxs("div",{className:"profile-container",children:[u.jsx("h2",{className:"section-title",children:"User Profile"}),u.jsxs("div",{className:"profile-grid",children:[u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Full Name:"})," ",u.jsx("span",{children:n.fullName||"N/A"})]}),u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Email:"})," ",u.jsx("span",{children:r.email})]}),u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Username:"})," ",u.jsx("span",{children:n.username||"N/A"})]}),u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Phone:"})," ",u.jsx("span",{children:n.phone||"N/A"})]}),u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Location:"})," ",u.jsx("span",{children:n.location||"N/A"})]}),u.jsxs("div",{className:"profile-card",children:[u.jsx("strong",{children:"Occupation:"})," ",u.jsx("span",{children:n.occupation||"N/A"})]})]}),u.jsxs("div",{className:"bio-card",children:[u.jsx("strong",{children:"Bio:"}),u.jsx("p",{children:n.bio||"No bio provided."})]}),u.jsx("button",{className:"btn-primary",onClick:()=>e("/edit-profile"),children:"Edit Profile"})]})},X8=({user:r})=>{const[e,n]=P.useState(null),[s,o]=P.useState(!1),c=async()=>{if(!r||!r.email){n("error");return}o(!0),n(null);try{await E5(va,r.email),n("success")}catch(h){console.error("Password reset error:",h),n("error")}finally{o(!1)}};return u.jsxs("div",{className:"settings-container",children:[u.jsxs("div",{className:"settings-card",children:[u.jsx("h2",{className:"section-title",children:"Account Settings"}),u.jsxs("div",{className:"setting-item",children:[u.jsx("h3",{children:"Password & Security"}),u.jsx("p",{children:"Request a password reset link to be sent to your email."}),u.jsx("button",{className:"btn-primary",onClick:c,disabled:s,children:s?"Sending...":"Reset Password"}),e==="success"&&u.jsxs("span",{className:"success-message",children:[u.jsx(Eo,{style:{marginRight:"5px"}})," Password reset email sent! Check your inbox."]}),e==="error"&&u.jsxs("span",{className:"error-message",children:[u.jsx(cg,{style:{marginRight:"5px"}})," Failed to send reset email. Please try again."]})]})]}),u.jsxs("div",{className:"settings-card",children:[u.jsx("h2",{className:"section-title",children:"Notification Preferences"}),u.jsxs("div",{className:"setting-item",children:[u.jsx("p",{children:"Manage how you receive updates and alerts."}),u.jsx("button",{className:"btn-secondary",onClick:()=>alert("Notification settings update coming soon!"),children:"Configure Notifications"})]})]})]})},Z8=({user:r,updateBalance:e,goldPrice:n})=>{const[s,o]=P.useState(null),[c,h]=P.useState(""),[p,g]=P.useState(null),[y,x]=P.useState(!1),[E,w]=P.useState(!1),[I,N]=P.useState(!1),[U,M]=P.useState(null),[L,B]=P.useState(0),[q,X]=P.useState(!1),ee=A=>{o(A),h(""),g(null),x(!1),w(!1),N(!1),M(null),B(1)},ne=()=>{const A=parseFloat(c);if(isNaN(A)||A<=0){M("Please enter a valid amount greater than 0");return}if(A<s.min||s.max!==1/0&&A>s.max){M(`Please enter a valid amount between $${s.min} and $${s.max===1/0?"unlimited":s.max}`);return}M(null),B(2)},k=A=>{g(A),B(3)},C=()=>{x(!0),B(4)},j=async()=>{if(!(!s||!c||!n)){M(null);try{const A=parseFloat(c),T=s.profitPercent,re=(A*T/100).toFixed(0),xe=new Date,Y=new Date;Y.setDate(xe.getDate()+s.duration);const ue=A/n,ye={userId:r.uid,type:"deposit",amount:A,goldAmount:ue,profitPercent:`${T}%`,plan:s.name,planId:s.id,interest:`$${re}`,duration:s.duration,description:s.description,status:"pending",timestamp:vs(),startDate:ct.fromDate(xe),nextPaymentDate:ct.fromDate(Y),interestEarned:0,totalInterestEarned:0,walletType:p.type,goldPriceAtPurchase:n};await Go(gn(et,"transactions"),ye),N(!0),B(0),o(null),x(!1),w(!1)}catch(A){M("Failed to process transaction. Please try again."),console.error(A)}}},O=async A=>{A.target.files[0]&&(w(!0),await j())},D=()=>{p?.address&&(navigator.clipboard.writeText(p.address),X(!0),setTimeout(()=>X(!1),2e3))};return u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"Purchase Gold"}),u.jsxs("div",{className:"gold-price-info",children:["Current Gold Price: ",u.jsxs("strong",{children:["$",n?n.toFixed(2):"Loading...","/g"]})]}),U&&u.jsxs("span",{className:"error-message",children:[u.jsx(cg,{style:{marginRight:"5px"}})," ",U]}),I?u.jsxs("div",{children:[u.jsx("h3",{children:"Transaction Submitted for Approval!"}),u.jsxs("span",{className:"success-message",children:[u.jsx(Eo,{style:{marginRight:"5px"}})," Your deposit has been submitted and is awaiting admin approval."]}),u.jsx("button",{className:"btn-secondary",onClick:()=>N(!1),children:"Back to Plans"})]}):L===0?u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"Select a gold plan to purchase:"}),u.jsx("div",{className:"gold-plans-container",children:K8.map(A=>u.jsxs("div",{className:`gold-plan-card ${s?.id===A.id?"selected-plan":""}`,onClick:()=>ee(A),children:[u.jsx(Ro,{size:36,color:"#D4AF37"}),u.jsx("h3",{className:"plan-title",children:A.name}),u.jsxs("p",{className:"plan-price",children:["$",A.min,"  - ",A.max===1/0?"and above":A.max," USD"]}),u.jsxs("p",{className:"plan-description",children:[u.jsx("strong",{children:"Profit:"})," ",A.profitPercent,"% every ",A.duration," days"]}),u.jsx("p",{className:"plan-description",children:A.description})]},A.id))})]}):L===1?u.jsxs(u.Fragment,{children:[u.jsxs("h3",{children:["Selected Plan: ",s.name]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"deposit-amount",children:"Enter Deposit Amount:"}),u.jsx("input",{id:"deposit-amount",type:"number",value:c,onChange:A=>h(A.target.value),placeholder:`Enter amount between $${s.min} and $${s.max===1/0?"unlimited":s.max}`})]}),c&&n&&u.jsxs("div",{className:"gold-calculation",children:[u.jsxs("p",{children:["At current gold price ($",n.toFixed(2),"/g), you will receive:"]}),u.jsxs("p",{className:"gold-amount",children:[(parseFloat(c)/n).toFixed(4),"g of gold"]})]}),u.jsx("button",{className:"btn-primary",onClick:ne,children:"Proceed"}),u.jsx("button",{className:"btn-secondary",onClick:()=>B(0),children:"Back"})]}):L===2?u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Select a Wallet"}),u.jsx("div",{className:"gold-plans-container",children:V4.map((A,T)=>u.jsxs("div",{className:`gold-plan-card ${p?.type===A.type?"selected-plan":""}`,onClick:()=>k(A),children:[u.jsx(Ro,{size:36,color:"#D4AF37"}),u.jsx("h3",{className:"plan-title",children:A.type})]},T))}),u.jsx("button",{className:"btn-secondary",onClick:()=>B(1),children:"Back"})]}):L===3?u.jsxs(u.Fragment,{children:[u.jsxs("h3",{children:["Selected Plan: ",s.name]}),u.jsxs("p",{children:["Amount: $",c]}),n&&u.jsxs("p",{children:["Gold Allocation: ",(parseFloat(c)/n).toFixed(4),"g"]}),u.jsxs("p",{children:["Please send exactly ",u.jsxs("strong",{children:["$",c]})," to the following address:"]}),u.jsxs("div",{className:"deposit-address",children:[u.jsx("p",{children:u.jsxs("strong",{children:[p.type," Address:"]})}),u.jsx("p",{children:p.address}),u.jsxs("button",{className:"btn-secondary",onClick:D,children:[q?"Copied!":"Copy Address"," ",u.jsx(x3,{style:{marginLeft:"5px"}})]})]}),u.jsx("p",{children:"After completing your transfer, click the button below to confirm."}),u.jsx("button",{className:"btn-primary",onClick:C,children:"I've Sent the Payment"}),u.jsx("button",{className:"btn-secondary",onClick:()=>B(2),children:"Choose Different Wallet"})]}):L===4?u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Confirm Deposit"}),u.jsx("p",{children:"Upload a screenshot of the transaction (for verification):"}),u.jsx("input",{type:"file",accept:"image/*",onChange:O}),u.jsx("button",{className:"btn-secondary",onClick:()=>B(3),children:"Back"})]}):null]})},J8=({user:r,balance:e,goldBalance:n,updateBalance:s,goldPrice:o})=>{const[c,h]=P.useState(""),[p,g]=P.useState("usd"),[y,x]=P.useState(""),[E,w]=P.useState(""),[I,N]=P.useState(!1),[U,M]=P.useState({text:"",type:""}),L=async()=>{if(M({text:"",type:""}),!c||!y||!E){M({text:"Please fill all fields",type:"error"});return}const B=parseFloat(c);if(isNaN(B)||B<=0){M({text:"Please enter a valid amount",type:"error"});return}const q=p==="usd"?50:1;if(B<q){M({text:`Minimum withdrawal is $${q} USD or ${q}g Gold`,type:"error"});return}if(p==="usd"&&B>e){M({text:"Insufficient USD balance",type:"error"});return}if(p==="gold"&&B>n){M({text:"Insufficient gold balance",type:"error"});return}N(!0);try{const X=p==="usd"?B:B*(o||65),ee={userId:r.uid,type:"withdrawal",amount:X,goldAmount:p==="gold"?B:0,status:"pending",walletType:y,walletAddress:E,timestamp:vs()};await Go(gn(et,"transactions"),ee),M({text:"Withdrawal request submitted successfully! It will be processed within 24 hours.",type:"success"}),h(""),x(""),w("")}catch(X){console.error("Error processing withdrawal:",X),M({text:"Failed to process withdrawal. Please try again.",type:"error"})}finally{N(!1)}};return u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"Withdraw Funds"}),u.jsxs("div",{className:"balance-info",children:[u.jsxs("p",{children:["Available Balance: ",u.jsxs("strong",{children:["$",e.toLocaleString()," USD"]})," | ",u.jsxs("strong",{children:[n.toFixed(2),"g Gold"]})]}),o&&u.jsxs("p",{children:["Current Gold Price: ",u.jsxs("strong",{children:["$",o.toFixed(2),"/g"]})]})]}),u.jsxs("div",{className:"withdraw-form",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"withdraw-type",children:"Withdraw Type:"}),u.jsxs("select",{id:"withdraw-type",value:p,onChange:B=>{g(B.target.value),h(""),x(""),w("")},children:[u.jsx("option",{value:"usd",children:"USD"}),u.jsx("option",{value:"gold",children:"Gold"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"withdraw-amount",children:["Amount to Withdraw ",p==="gold"?"(in grams)":"(in USD)",":"]}),u.jsx("input",{id:"withdraw-amount",type:"number",value:c,onChange:B=>h(B.target.value),placeholder:p==="usd"?"Enter USD amount":"Enter gold amount in grams"}),p==="gold"&&o&&c&&u.jsxs("p",{className:"withdraw-conversion",children:["≈ $",(parseFloat(c)*o).toFixed(2)," USD"]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"destination-wallet",children:"Destination Wallet Type:"}),u.jsxs("select",{id:"destination-wallet",value:y,onChange:B=>x(B.target.value),children:[u.jsx("option",{value:"",children:"Select a wallet type"}),V4.map((B,q)=>u.jsx("option",{value:B.type,children:B.type},q))]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"destination-address",children:"Destination Wallet Address:"}),u.jsx("input",{id:"destination-address",type:"text",value:E,onChange:B=>w(B.target.value),placeholder:"Enter your wallet address"})]}),U.text&&u.jsxs("div",{className:U.type==="success"?"success-message":"error-message",children:[U.type==="success"?u.jsx(Eo,{style:{marginRight:"5px"}}):u.jsx(cg,{style:{marginRight:"5px"}}),U.text]}),u.jsx("button",{className:"btn-primary",onClick:L,disabled:I||!c||!y||!E,children:I?"Processing...":"Request Withdrawal"})]}),u.jsxs("div",{className:"withdrawal-info",children:[u.jsx("h4",{children:"Withdrawal Information:"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Withdrawals are processed within 24 hours"}),u.jsx("li",{children:"Gold withdrawals are converted to USD at current market rates"}),u.jsx("li",{children:"Minimum withdrawal: $50 USD or 1g Gold"}),u.jsx("li",{children:"Network fees may apply"}),u.jsx("li",{children:"All withdrawals require admin approval"})]})]})]})},eC=({user:r})=>{const[e,n]=P.useState([]),[s,o]=P.useState(!0),[c,h]=P.useState(null);P.useEffect(()=>{if(!r)return;const g=mi(gn(et,"transactions"),gc("userId","==",r.uid),ya("timestamp","desc")),y=Wh(g,x=>{const E=[];x.forEach(w=>{E.push({id:w.id,...w.data()})}),n(E),o(!1)},x=>{h("Failed to load transaction history."),console.error(x),o(!1)});return()=>y()},[r]);const p=g=>{switch(g){case"completed":return"status-completed";case"processing":return"status-processing";case"pending":return"status-pending";case"rejected":return"status-rejected";default:return"status-pending"}};return s?u.jsx("div",{className:"section-card",children:"Loading transaction history..."}):c?u.jsx("div",{className:"section-card error-message",children:c}):u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"Transaction History"}),e.length===0?u.jsx("p",{children:"No transactions yet."}):u.jsx("div",{className:"table-container",children:u.jsxs("table",{className:"transactions-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Type"}),u.jsx("th",{children:"Amount"}),u.jsx("th",{children:"Gold Amount"}),u.jsx("th",{children:"Date"}),u.jsx("th",{children:"Status"})]})}),u.jsx("tbody",{children:e.map(g=>u.jsxs("tr",{children:[u.jsxs("td",{children:[g.type==="deposit"?u.jsx(i_,{className:"icon-deposit"}):u.jsx(r_,{className:"icon-withdraw"}),g.type.charAt(0).toUpperCase()+g.type.slice(1),g.plan&&` (${g.plan})`]}),u.jsxs("td",{children:["$",g.amount?.toLocaleString()||"N/A"]}),u.jsx("td",{children:g.goldAmount?`${g.goldAmount.toFixed(4)}g`:"N/A"}),u.jsx("td",{children:g.timestamp?.toDate().toLocaleString()||"N/A"}),u.jsx("td",{children:u.jsx("span",{className:`status-indicator ${p(g.status)}`,children:g.status?.charAt(0).toUpperCase()+g.status?.slice(1)||"Pending"})})]},g.id))})]})})]})},tC=({user:r})=>{const e="goldcorps.org",[n,s]=P.useState(!1),o=()=>{navigator.clipboard.writeText(e),s(!0),setTimeout(()=>s(!1),2e3)};return u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"Referral Program"}),u.jsx("p",{children:"Invite friends and earn rewards! Share your unique referral link."}),u.jsxs("div",{className:"referral-container",children:[u.jsx("strong",{children:"Your Referral Link:"}),u.jsx("p",{className:"referral-link",children:e}),u.jsx("button",{className:"btn-primary",onClick:o,children:n?"Copied!":"Copy Link"})]}),u.jsxs("div",{className:"referral-info",children:[u.jsx("h4",{children:"How It Works:"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Share your link with friends"}),u.jsx("li",{children:"Earn 5% bonus on their first deposit"}),u.jsx("li",{children:"Track your referrals in your dashboard"})]})]})]})},nC=({user:r,updateBalance:e,goldPrice:n})=>{const[s,o]=P.useState([]),[c,h]=P.useState(!0),[p,g]=P.useState(null),[y,x]=P.useState(!1);P.useEffect(()=>{if(!r)return;const N=mi(gn(et,"transactions"),gc("userId","==",r.uid),gc("type","==","deposit"),gc("status","==","completed"),ya("timestamp","desc")),U=Wh(N,M=>{const L=[];M.forEach(B=>{L.push({id:B.id,...B.data()})}),o(L),h(!1)},M=>{g("Failed to load investments."),console.error(M),h(!1)});return()=>U()},[r]);const E=N=>{if(!N.startDate||!N.nextPaymentDate)return 0;const U=new Date,M=N.nextPaymentDate.toDate();return U>=M?N.amount*parseFloat(N.profitPercent)/100:0},w=async N=>{x(!0);try{const U=E(N);if(U<=0){g("No interest available to claim yet.");return}const M=yn(et,"users",r.uid),L=await Dc(M);if(L.exists()){const X=L.data().balance||0,ee=L.data().goldBalance||0,ne=U/(n||65);await bo(M,{balance:X+U,goldBalance:ee+ne}),e(X+U,ee+ne)}const B=yn(et,"transactions",N.id),q=new Date;q.setDate(q.getDate()+N.duration),await bo(B,{nextPaymentDate:ct.fromDate(q),interestEarned:U,totalInterestEarned:(N.totalInterestEarned||0)+U}),await Go(gn(et,"transactions"),{userId:r.uid,type:"interest",amount:U,description:`Interest from ${N.plan}`,status:"completed",timestamp:vs()}),g(null)}catch(U){g("Failed to claim interest. Please try again."),console.error(U)}finally{x(!1)}},I=N=>N?N.toDate().toLocaleDateString():"N/A";return c?u.jsx("div",{className:"section-card",children:"Loading investments..."}):p?u.jsx("div",{className:"section-card error-message",children:p}):u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"My Investments"}),s.length===0?u.jsx("p",{children:"No active investments yet."}):u.jsx("div",{className:"investments-container",children:s.map(N=>{const U=E(N),M=N.nextPaymentDate?N.nextPaymentDate.toDate():null,L=M?Math.ceil((M-new Date)/(1e3*60*60*24)):0;return u.jsxs("div",{className:"investment-card",children:[u.jsxs("div",{className:"investment-header",children:[u.jsx("h3",{children:N.plan}),u.jsxs("span",{className:"investment-amount",children:["$",N.amount.toLocaleString()]})]}),u.jsxs("div",{className:"investment-details",children:[u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Gold Allocation:"}),u.jsxs("span",{className:"detail-value",children:[N.goldAmount?.toFixed(4),"g"]})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Profit Rate:"}),u.jsx("span",{className:"detail-value",children:N.profitPercent})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Duration:"}),u.jsxs("span",{className:"detail-value",children:[N.duration," days"]})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Start Date:"}),u.jsx("span",{className:"detail-value",children:I(N.startDate)})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Next Payment:"}),u.jsx("span",{className:"detail-value",children:I(N.nextPaymentDate)})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Days Until Payment:"}),u.jsx("span",{className:"detail-value",children:L>0?L:0})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Interest Available:"}),u.jsxs("span",{className:"detail-value",children:["$",U.toFixed(2)]})]}),u.jsxs("div",{className:"investment-detail",children:[u.jsx("span",{className:"detail-label",children:"Total Interest Earned:"}),u.jsxs("span",{className:"detail-value",children:["$",(N.totalInterestEarned||0).toFixed(2)]})]})]}),U>0&&u.jsx("button",{className:"btn-primary",onClick:()=>w(N),disabled:y,children:y?"Processing...":"Claim Interest"})]},N.id)})})]})},rC=()=>{const r=xs(),[e,n]=P.useState(null),[s,o]=P.useState(null),[c,h]=P.useState("dashboard"),[p,g]=P.useState(0),[y,x]=P.useState(0),[E,w]=P.useState(!1),[I,N]=P.useState(!0),[U,M]=P.useState(null),[L,B]=P.useState(null),[q,X]=P.useState(null),ee="f369cba8b4f18e797805679cfb09562b",ne="USD",k=async()=>{try{const D=localStorage.getItem("goldPriceData");if(D){const{price:re,timestamp:xe}=JSON.parse(D),Y=new Date().getTime(),ue=720*60*1e3;if(Y-xe<ue){B(re);return}}const A=await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${ee}&base=XAU&currencies=${ne}`);if(!A.ok)throw new Error("Failed to fetch gold price");const T=await A.json();if(T.rates&&T.rates[ne]){const re=T.rates[ne]/28.3495;B(re),localStorage.setItem("goldPriceData",JSON.stringify({price:re,timestamp:new Date().getTime()})),X(null)}else throw new Error("Invalid API response format")}catch(D){console.error("Error fetching gold price:",D),X("Failed to fetch current gold price. Using default value.");const A=localStorage.getItem("goldPriceData");if(A){const{price:T}=JSON.parse(A);B(T)}else B(119.5)}};P.useEffect(()=>{k();const D=setInterval(k,720*60*1e3);return()=>clearInterval(D)},[]),P.useEffect(()=>{const D=Q_(va,A=>{if(A){n(A);const T=yn(et,"users",A.uid),re=Wh(T,xe=>{if(xe.exists()){const Y=xe.data();o(Y),g(Y.balance||0),x(Y.goldBalance||0),N(!1)}else M("User data not found."),N(!1)},xe=>{M("Failed to load user data."),console.error(xe),N(!1)});return()=>re()}else r("/login")});return()=>D()},[r]);const C=(D,A)=>{g(D),x(A)},j=async()=>{try{await xg(va),r("/login")}catch(D){console.error("Logout error:",D.message),M("Failed to logout. Please try again.")}};if(I)return u.jsx("div",{className:"loading",children:"Loading..."});if(U||!e||!s)return u.jsx("div",{className:"error-message",children:U||"Failed to load dashboard."});const O=()=>{switch(c){case"dashboard":return u.jsxs("div",{className:"overview-container",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Account Balance"}),u.jsxs("p",{className:"metric",children:["$",p.toLocaleString()]}),u.jsx("p",{className:"subtext",children:"Available USD"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Gold Holdings"}),u.jsxs("p",{className:"metric",children:[y.toFixed(2),"g"]}),u.jsx("p",{className:"subtext",children:"Pure Gold"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Total Value"}),u.jsxs("p",{className:"metric",children:["$",(p+y*(L||65)).toLocaleString()]}),u.jsx("p",{className:"subtext",children:"Based on current gold prices"})]}),u.jsxs("div",{className:"section-card",children:[u.jsx("h2",{className:"section-title",children:"Recent Activity"}),u.jsxs("ul",{className:"activity-list",children:[u.jsxs("li",{children:[u.jsx(Eo,{className:"activity-icon"})," Account created ",u.jsx("span",{className:"activity-time",children:"1 week ago"})]}),p>0&&u.jsxs("li",{children:[u.jsx(Eo,{className:"activity-icon"})," Deposit of $",p.toLocaleString()," ",u.jsx("span",{className:"activity-time",children:"Recently"})]}),y>0&&u.jsxs("li",{children:[u.jsx(Eo,{className:"activity-icon"})," Purchased ",y.toFixed(2),"g of gold ",u.jsx("span",{className:"activity-time",children:"Recently"})]})]})]})]});case"deposit":return u.jsx(Z8,{user:e,updateBalance:C,goldPrice:L});case"withdraw":return u.jsx(J8,{user:e,balance:p,goldBalance:y,updateBalance:C,goldPrice:L});case"history":return u.jsx(eC,{user:e});case"investments":return u.jsx(nC,{user:e,updateBalance:C,goldPrice:L});case"referral":return u.jsx(tC,{user:e});case"profile":return u.jsx(W8,{user:e});case"settings":return u.jsx(X8,{user:e});default:return null}};return u.jsxs("div",{className:"dashboard-container",children:[u.jsx(Q8,{user:e}),u.jsxs("div",{className:`sidebar ${E?"mobile-open":""}`,children:[u.jsxs("div",{className:"sidebar-header",children:[u.jsx(I3,{size:24,className:"sidebar-icon"}),u.jsx("h2",{className:"gold-text",children:"MyWallet"})]}),u.jsx("button",{className:"mobile-close-btn",onClick:()=>w(!1),children:u.jsx(Sm,{})}),u.jsxs("ul",{className:"nav-list",children:[u.jsxs("li",{className:`nav-item ${c==="dashboard"?"nav-item-active":""}`,onClick:()=>{h("dashboard"),w(!1)},children:[u.jsx(Jx,{})," ",u.jsx("span",{children:"Dashboard"})]}),u.jsxs("li",{className:`nav-item ${c==="deposit"?"nav-item-active":""}`,onClick:()=>{h("deposit"),w(!1)},children:[u.jsx(i_,{})," ",u.jsx("span",{children:"Buy Gold"})]}),u.jsxs("li",{className:`nav-item ${c==="withdraw"?"nav-item-active":""}`,onClick:()=>{h("withdraw"),w(!1)},children:[u.jsx(r_,{})," ",u.jsx("span",{children:"Withdraw"})]}),u.jsxs("li",{className:`nav-item ${c==="investments"?"nav-item-active":""}`,onClick:()=>{h("investments"),w(!1)},children:[u.jsx(Ro,{})," ",u.jsx("span",{children:"My Investments"})]}),u.jsxs("li",{className:`nav-item ${c==="history"?"nav-item-active":""}`,onClick:()=>{h("history"),w(!1)},children:[u.jsx(w3,{})," ",u.jsx("span",{children:"History"})]}),u.jsxs("li",{className:`nav-item ${c==="referral"?"nav-item-active":""}`,onClick:()=>{h("referral"),w(!1)},children:[u.jsx(C3,{})," ",u.jsx("span",{children:"Referral"})]}),u.jsxs("li",{className:`nav-item ${c==="profile"?"nav-item-active":""}`,onClick:()=>{h("profile"),w(!1)},children:[u.jsx(l_,{})," ",u.jsx("span",{children:"Profile"})]}),u.jsxs("li",{className:`nav-item ${c==="settings"?"nav-item-active":""}`,onClick:()=>{h("settings"),w(!1)},children:[u.jsx(e_,{})," ",u.jsx("span",{children:"Settings"})]})]}),u.jsxs("div",{className:"logout-btn",onClick:j,children:[u.jsx(xc,{})," ",u.jsx("span",{children:"Logout"})]})]}),u.jsxs("div",{className:"main-content",children:[u.jsxs("div",{className:"header",children:[u.jsxs("div",{className:"header-left",children:[u.jsx("button",{className:"mobile-menu-btn",onClick:()=>w(!0),children:u.jsx(p3,{})}),u.jsx("h1",{className:"title",children:c==="dashboard"?"Dashboard":c==="deposit"?"Buy Gold":c.charAt(0).toUpperCase()+c.slice(1)})]}),u.jsxs("span",{className:"user-info",children:["Balance: ",u.jsxs("strong",{children:["$",p.toLocaleString()]})," | Gold: ",u.jsxs("strong",{children:[y.toFixed(2),"g"]}),L&&u.jsxs("span",{className:"gold-price-header",children:[" | Gold Price: $",L.toFixed(2),"/g"]}),q&&u.jsx("span",{className:"error-message",style:{marginLeft:"10px"},children:q})]})]}),u.jsx("div",{className:"content-area",children:O()})]}),u.jsx("style",{jsx:!0,children:`
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
      `})]})},iC=()=>{const[r,e]=P.useState(""),[n,s]=P.useState(""),[o,c]=P.useState(""),h=xs(),p=x=>x&&typeof x.fullName=="string"&&x.fullName.trim().length>1&&Array.isArray(x.wallets)&&x.wallets.length>0,g=async x=>{const E=yn(et,"users",x.uid),w=await Dc(E),I=w.exists()?w.data():{};p(I)?h("/dashboard"):h("/profile")},y=async x=>{x.preventDefault();try{const w=(await $_(va,n,o)).user;await g(w)}catch(E){console.error("Login error:",E.message),e("Login failed. Check your credentials.")}};return u.jsxs("div",{className:"body",children:[u.jsx(lg,{}),u.jsxs("div",{className:"page",children:[u.jsx("h1",{className:"h1",children:"Login"}),u.jsxs("form",{onSubmit:y,className:"login-form",children:[u.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:x=>s(x.target.value),placeholder:"Enter your email"}),u.jsx("input",{className:"input",required:!0,type:"password",value:o,onChange:x=>c(x.target.value),placeholder:"Enter your password"}),u.jsx("button",{type:"submit",className:"btn btn1",children:"Login"}),u.jsxs("p",{children:["Don't have an account? ",u.jsx(ba,{to:"/signup",className:"Login-txt",children:"Signup"})]}),r&&u.jsx("span",{className:"error-text",children:r})]})]})]})},sC=()=>{const[r,e]=P.useState(""),[n,s]=P.useState(""),[o,c]=P.useState(""),[h,p]=P.useState(""),g=xs(),y=async x=>{if(x.preventDefault(),h.length<6){e("Password must be at least 6 characters");return}try{const w=(await w5(va,n,h)).user;await k4(yn(et,"users",w.uid),{fullName:o,email:n,createdAt:new Date,wallets:[]}),sessionStorage.setItem("newSignup","true"),g("/profile")}catch(E){console.error("Signup error:",E.message),e("Signup failed. Try again.")}};return u.jsxs("div",{className:"body",children:[u.jsx(lg,{}),u.jsxs("div",{className:"page",children:[u.jsx("h1",{className:"h1",children:"Signup"}),u.jsxs("form",{onSubmit:y,className:"signup-form",children:[u.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:x=>s(x.target.value),placeholder:"Enter your email"}),u.jsx("input",{className:"input",required:!0,type:"text",value:o,onChange:x=>c(x.target.value),placeholder:"Enter your name"}),u.jsx("input",{className:"input",required:!0,type:"password",value:h,onChange:x=>p(x.target.value),placeholder:"Enter your password"}),u.jsx("button",{type:"submit",className:"btn btn1",children:"Sign Up"}),u.jsxs("p",{children:["Already have an account? ",u.jsx(ba,{to:"/login",className:"Login-txt",children:"Login"})]}),r&&u.jsx("span",{className:"error-text",children:r})]})]})]})},aC=()=>{const[r,e]=P.useState(null),[n,s]=P.useState(null),[o,c]=P.useState(!0),[h,p]=P.useState(null),[g,y]=P.useState("USD"),[x,E]=P.useState([]),[w,I]=P.useState(null),N=P.useRef(),U=P.useRef(),M="f369cba8b4f18e797805679cfb09562b",L=async()=>{try{c(!0),p(null);const X=await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${M}&base=XAU&currencies=${g}`);if(!X.ok)throw new Error(`API Error: ${X.status}`);const ne=(await X.json()).rates[g];N.current?(N.current.classList.add("price-updating"),setTimeout(()=>{r!==null&&s(r),e(ne),I(new Date),N.current.classList.remove("price-updating")},500)):(e(ne),I(new Date)),E(k=>[...k,{price:ne,timestamp:new Date}].slice(-20))}catch(X){p("Failed to fetch gold prices. Try again later."),console.error("Error fetching gold price:",X),U.current&&clearTimeout(U.current),U.current=setTimeout(()=>L(),1e4)}finally{c(!1)}};P.useEffect(()=>{L();const X=setInterval(L,432e5);return()=>{clearInterval(X),U.current&&clearTimeout(U.current)}},[g]);const B=()=>!n||r===null?0:((r-n)/n*100).toFixed(2),q=X=>X===null?"--":new Intl.NumberFormat("en-US",{style:"currency",currency:g,minimumFractionDigits:2}).format(X);return u.jsxs("div",{children:[u.jsx("style",{children:`
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
      `}),u.jsxs("div",{className:"gold-card",children:[u.jsx("h2",{className:"title",children:"Gold Price Tracker"}),o&&u.jsx("p",{className:"loading",children:"Loading..."}),h&&u.jsx("p",{className:"error",children:h}),!o&&r!==null&&u.jsxs("div",{children:[u.jsx("h3",{ref:N,className:"price",children:q(r)}),n!==null&&u.jsxs("p",{className:`change ${r>=n?"up":"down"}`,children:[r>=n?u.jsx(h3,{}):u.jsx(u3,{}),q(Math.abs(r-n))," (",B(),"%)"]}),u.jsxs("p",{className:"timestamp",children:[u.jsx(vc,{})," ",w&&w.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})]})]})},oC=()=>{const r=xs(),[e,n]=P.useState({fullName:"",username:"",location:"",dob:"",phone:"",gender:"",occupation:"",bio:"",btcWallet:"",ethWallet:"",usdtWallet:""}),[s,o]=P.useState(!0),[c,h]=P.useState(!1),[p,g]=P.useState(""),[y,x]=P.useState(""),[E,w]=P.useState(null),[I,N]=P.useState(!1),U=B=>{const{name:q,value:X}=B.target;n(ee=>({...ee,[q]:X}))};P.useEffect(()=>{N(!0);const B=Q_(va,async q=>{if(!q){r("/login");return}w(q);try{const X=yn(et,"users",q.uid),ee=await Dc(X);if(ee.exists()){const ne=ee.data(),k=ne.wallets&&ne.wallets.find(O=>O.type==="btc")?.address||"",C=ne.wallets&&ne.wallets.find(O=>O.type==="eth")?.address||"",j=ne.wallets&&ne.wallets.find(O=>O.type==="usdt")?.address||"";n(O=>({...O,...ne,btcWallet:k,ethWallet:C,usdtWallet:j}))}}catch(X){console.error("Failed to load profile:",X),g("Failed to load profile. Please try again.")}finally{o(!1)}});return()=>B()},[r]);const M=()=>e.fullName.trim().length>1&&e.username.trim().length>1&&e.phone.trim().length>=10&&e.dob,L=async B=>{if(B.preventDefault(),!!E){if(!M()){g("Please fill in all required fields.");return}h(!0),g(""),x("");try{const q=yn(et,"users",E.uid),X=[];e.btcWallet&&X.push({type:"btc",address:e.btcWallet}),e.ethWallet&&X.push({type:"eth",address:e.ethWallet}),e.usdtWallet&&X.push({type:"usdt",address:e.usdtWallet});const ee={...e,email:E.email,wallets:X,updatedAt:vs()};delete ee.btcWallet,delete ee.ethWallet,delete ee.usdtWallet,(await Dc(q)).data()?.createdAt||(ee.createdAt=vs()),await k4(q,ee,{merge:!0}),x("Profile updated successfully!"),setTimeout(()=>r("/dashboard"),1200)}catch(q){console.error("Save failed:",q),g("Could not save profile. Please try again.")}finally{h(!1)}}};return s?u.jsxs("div",{className:"loader-container",children:[u.jsx("div",{className:"spinner"}),u.jsx("p",{children:"Loading Profile..."})]}):u.jsxs("div",{className:"profile-page",children:[u.jsxs("div",{className:`profile-container ${I?"mounted":""}`,children:[u.jsx("h1",{className:"profile-title",children:"Complete Your Profile"}),u.jsx("form",{onSubmit:L,className:"profile-form",children:u.jsxs("div",{className:"form-grid",children:[["fullName","username"].map((B,q)=>u.jsx("div",{className:"form-group animated-item",style:{animationDelay:`${q*.1}s`},children:u.jsx("input",{name:B,type:"text",placeholder:B==="fullName"?"Full Name *":"Username *",value:e[B],onChange:U,required:!0,className:"form-input"})},B)),u.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.2s"},children:u.jsx("input",{name:"location",type:"text",placeholder:"Location",value:e.location,onChange:U,className:"form-input"})}),u.jsxs("div",{className:"form-group animated-item",style:{animationDelay:"0.3s"},children:[u.jsx("label",{className:"input-label",children:"Date of Birth *"}),u.jsx("input",{name:"dob",type:"date",value:e.dob,onChange:U,className:"form-input",required:!0})]}),u.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.4s"},children:u.jsx("input",{name:"phone",type:"tel",placeholder:"Phone Number *",value:e.phone,onChange:U,required:!0,className:"form-input"})}),u.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.5s"},children:u.jsxs("select",{name:"gender",value:e.gender,onChange:U,className:"form-select",children:[u.jsx("option",{value:"",children:"Select Gender"}),u.jsx("option",{value:"Male",children:"Male"}),u.jsx("option",{value:"Female",children:"Female"}),u.jsx("option",{value:"Other",children:"Other"})]})}),u.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.6s"},children:u.jsx("input",{name:"occupation",type:"text",placeholder:"Occupation",value:e.occupation,onChange:U,className:"form-input"})}),u.jsx("div",{className:"form-group full-width animated-item",style:{animationDelay:"0.7s"},children:u.jsx("textarea",{name:"bio",placeholder:"Bio (Tell us about yourself)",value:e.bio,onChange:U,rows:3,className:"form-textarea"})}),u.jsxs("div",{className:"wallet-section full-width animated-item",style:{animationDelay:"0.8s"},children:[u.jsx("h3",{className:"wallet-title",children:"Wallet Addresses"}),["btcWallet","ethWallet","usdtWallet"].map((B,q)=>u.jsx("div",{className:"form-group",children:u.jsx("input",{name:B,type:"text",placeholder:B==="btcWallet"?"BTC Wallet Address":B==="ethWallet"?"ETH Wallet Address":"USDT Wallet Address",value:e[B],onChange:U,className:"form-input"})},B))]}),p&&u.jsx("div",{className:"error-message full-width animated-item",children:p}),y&&u.jsx("div",{className:"success-message full-width animated-item",children:y}),u.jsxs("div",{className:"form-actions full-width animated-item",style:{animationDelay:"0.9s"},children:[u.jsx("button",{type:"button",onClick:()=>r("/dashboard"),className:"btn-secondary",children:"Cancel"}),u.jsx("button",{type:"submit",className:"btn-primary",disabled:c||!M(),children:c?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"btn-spinner"}),"Saving..."]}):"Save Profile"})]})]})})]}),u.jsx("style",{jsx:!0,children:`
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
      `})]})},lC=()=>u.jsxs("div",{style:zd.container,children:[u.jsx("h1",{style:zd.heading,children:"404 - Page Not Found"}),u.jsx("p",{style:zd.text,children:"The page you are looking for doesn't exist."}),u.jsx(ba,{to:"/",style:zd.button,children:"Go Home"})]}),zd={container:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#f8f9fa",color:"#333",textAlign:"center"},heading:{fontSize:"2.5rem",marginBottom:"10px"},text:{fontSize:"1.2rem",marginBottom:"20px"},button:{padding:"10px 20px",background:"#007bff",color:"#fff",borderRadius:"5px",textDecoration:"none",fontWeight:"bold"}},cC="tSkkQjMfTMNhpqK92TxjvGVPUWa2",uC=()=>{const[r,e]=P.useState("users"),[n,s]=P.useState([]),[o,c]=P.useState(null),[h,p]=P.useState(""),[g,y]=P.useState(""),[x,E]=P.useState(!0),[w,I]=P.useState(!1),[N,U]=P.useState("newest"),[M,L]=P.useState("all"),[B,q]=P.useState(!1),[X,ee]=P.useState(null),[ne,k]=P.useState(!1),[C,j]=P.useState(!1),[O,D]=P.useState(!0),[A,T]=P.useState(new Date),[re,xe]=P.useState([]),[Y,ue]=P.useState([]),[ye,Re]=P.useState([]),[z,oe]=P.useState({totalUsers:0,activeToday:0,totalDeposits:0,totalWithdrawals:0,pendingTransactions:0,totalRevenue:0}),he=P.useRef(null);P.useEffect(()=>{const Ee=wc().onAuthStateChanged(Ae=>{Ae&&Ae.uid===cC?(k(!0),j(!0),J(),pe(),fe(),we()):(k(!1),j(!0),ee("Access denied. Admin privileges required."))});return()=>Ee()},[]),P.useEffect(()=>(ne&&O&&(he.current=setInterval(()=>{J(),pe(),fe()},1e4)),()=>{he.current&&clearInterval(he.current)}),[ne,O]);const de=()=>{const te=wc();xg(te).catch(Ee=>{console.error("Error signing out:",Ee),ee("Failed to sign out.")})};P.useEffect(()=>{ne&&(E(!0),J())},[N,ne]);const J=async()=>{if(ne)try{q(!0),ee(null);const te=mi(gn(et,"chats"),ya("timestamp","desc")),Ee=await No(te),Ae=[];Ee.forEach(Pt=>{Ae.push({id:Pt.id,...Pt.data()})});const Me=ve(Ae),ft=Ge(Me,N);if(s(ft),T(new Date),o){const Pt=ft.find(Vn=>Vn.userId===o.userId);Pt&&c(Pt)}}catch(te){console.error("Error fetching conversations:",te),ee("Failed to load conversations. Please check your permissions.")}finally{q(!1)}},pe=async()=>{if(ne)try{const te=mi(gn(et,"transactions"),ya("timestamp","desc")),Ee=await No(te),Ae=[];Ee.forEach(Me=>{Ae.push({id:Me.id,...Me.data()})}),xe(Ae)}catch(te){console.error("Error fetching transactions:",te),ee("Failed to load transactions.")}},fe=async()=>{if(ne)try{const te=mi(gn(et,"users")),Ee=await No(te),Ae=[];Ee.forEach(Me=>{Ae.push({id:Me.id,...Me.data()})}),ue(Ae),we(Ae,re)}catch(te){console.error("Error fetching users:",te),ee("Failed to load users.")}},we=(te=Y,Ee=re)=>{if(!ne)return;const Ae=te.length,Me=Math.round(te.length*.3),ft=Ee.filter(Ye=>Ye.type==="deposit"&&Ye.status==="completed").reduce((Ye,Xe)=>Ye+(Xe.amount||0),0),Pt=Ee.filter(Ye=>Ye.type==="withdrawal"&&Ye.status==="completed").reduce((Ye,Xe)=>Ye+(Xe.amount||0),0),Vn=Ee.filter(Ye=>Ye.status==="pending").length,Ta=ft-Pt;oe({totalUsers:Ae,activeToday:Me,totalDeposits:ft,totalWithdrawals:Pt,pendingTransactions:Vn,totalRevenue:Ta})},ve=te=>{const Ee={};return te.forEach(Ae=>{const Me=Ae.userId;Ee[Me]||(Ee[Me]={userId:Me,userName:Ae.userName||"Unknown User",userEmail:Ae.userEmail||"No email",messages:[],unreadCount:0,lastMessage:Ae.timestamp,hasUnreadAdminMessages:!1}),Ee[Me].messages.push(Ae),!Ae.read&&Ae.isAdmin&&(Ee[Me].hasUnreadAdminMessages=!0,Ee[Me].unreadCount++),Ae.timestamp&&(!Ee[Me].lastMessage||Ae.timestamp.toDate()>Ee[Me].lastMessage.toDate())&&(Ee[Me].lastMessage=Ae.timestamp)}),Object.values(Ee)},Ge=(te,Ee)=>{const Ae=[...te];switch(Ee){case"newest":return Ae.sort((Me,ft)=>{const Pt=Me.lastMessage?Me.lastMessage.toDate():new Date(0);return(ft.lastMessage?ft.lastMessage.toDate():new Date(0))-Pt});case"oldest":return Ae.sort((Me,ft)=>{const Pt=Me.lastMessage?Me.lastMessage.toDate():new Date(0),Vn=ft.lastMessage?ft.lastMessage.toDate():new Date(0);return Pt-Vn});case"unread":return Ae.sort((Me,ft)=>ft.unreadCount-Me.unreadCount);case"name":return Ae.sort((Me,ft)=>Me.userName.localeCompare(ft.userName));default:return Ae}},pt=n.filter(te=>{if(M==="unread"&&te.unreadCount===0||M==="read"&&te.unreadCount>0)return!1;if(g){const Ee=g.toLowerCase();return te.userName.toLowerCase().includes(Ee)||te.userId.toLowerCase().includes(Ee)||te.userEmail.toLowerCase().includes(Ee)||te.messages.some(Ae=>Ae.message&&Ae.message.toLowerCase().includes(Ee))}return!0}),Kt=async te=>{if(!ne)return;c(te);const Ee=te.messages.filter(Ae=>!Ae.read&&Ae.isAdmin);if(Ee.length>0)try{const Ae=P4(et);Ee.forEach(Me=>{const ft=yn(et,"chats",Me.id);Ae.update(ft,{read:!0})}),await Ae.commit(),s(Me=>Me.map(ft=>ft.userId===te.userId?{...ft,unreadCount:0,hasUnreadAdminMessages:!1}:ft))}catch(Ae){console.error("Error marking messages as read:",Ae),ee("Failed to mark messages as read.")}},tr=async te=>{if(te.preventDefault(),!(!h.trim()||!o||!ne)){I(!0);try{await Go(gn(et,"chats"),{userId:o.userId,userName:o.userName,userEmail:o.userEmail,message:h.trim(),isAdmin:!0,timestamp:vs(),read:!1}),p(""),J()}catch(Ee){console.error("Error sending reply:",Ee),ee("Failed to send message. Please check your permissions.")}finally{I(!1)}}},Nn=te=>{if(!te)return"";try{const Ee=te.toDate();return(new Date-Ee)/(1e3*60*60)<24?Ee.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):Ee.toLocaleDateString([],{month:"short",day:"numeric"})}catch{return""}},Vr=te=>te.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),vn=te=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(te||0),hr=te=>!te||te==="Unknown User"?"U":te.split(" ").map(Ee=>Ee[0]).join("").toUpperCase().substring(0,2),xn=()=>{D(!O)};return C?ne?u.jsxs("div",{className:"admin-dashboard",children:[u.jsxs("div",{className:"admin-header",children:[u.jsxs("div",{className:"header-title",children:[u.jsx("h1",{children:"Admin Dashboard"}),u.jsx("p",{children:"Manage users, transactions, and customer support"})]}),u.jsxs("div",{className:"header-actions",children:[u.jsxs("div",{className:"refresh-controls",children:[u.jsxs("button",{className:`btn-refresh ${O?"active":""}`,onClick:()=>{J(),pe(),fe()},disabled:B,children:[u.jsx(o_,{className:B?"spinning":""}),B?"Refreshing...":"Refresh Now"]}),u.jsxs("button",{className:`btn-auto-refresh ${O?"active":""}`,onClick:xn,children:[u.jsx(vc,{}),O?"Auto: ON":"Auto: OFF"]})]}),u.jsxs("button",{onClick:de,className:"btn-signout",children:[u.jsx(xc,{})," Sign Out"]})]})]}),X&&u.jsxs("div",{className:"error-banner",children:[u.jsx(nh,{}),u.jsx("span",{children:X}),u.jsx("button",{onClick:()=>ee(null),children:"×"})]}),u.jsxs("div",{className:"header-stats",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:z.totalUsers}),u.jsx("span",{className:"stat-label",children:"Total Users"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:z.activeToday}),u.jsx("span",{className:"stat-label",children:"Active Today"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:vn(z.totalDeposits)}),u.jsx("span",{className:"stat-label",children:"Total Deposits"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:vn(z.totalWithdrawals)}),u.jsx("span",{className:"stat-label",children:"Total Withdrawals"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:z.pendingTransactions}),u.jsx("span",{className:"stat-label",children:"Pending Transactions"})]}),u.jsxs("div",{className:"stat-item revenue",children:[u.jsx("span",{className:"stat-number",children:vn(z.totalRevenue)}),u.jsx("span",{className:"stat-label",children:"Platform Revenue"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:Vr(A)}),u.jsx("span",{className:"stat-label",children:"Last Refresh"})]})]}),u.jsxs("div",{className:"admin-tabs",children:[u.jsxs("button",{className:`tab-button ${r==="users"?"active":""}`,onClick:()=>e("users"),children:[u.jsx(la,{})," Users"]}),u.jsxs("button",{className:`tab-button ${r==="transactions"?"active":""}`,onClick:()=>e("transactions"),children:[u.jsx(lc,{})," Transactions"]}),u.jsxs("button",{className:`tab-button ${r==="chat"?"active":""}`,onClick:()=>e("chat"),children:[u.jsx(oc,{})," Support Chat"]}),u.jsxs("button",{className:`tab-button ${r==="analytics"?"active":""}`,onClick:()=>e("analytics"),children:[u.jsx(oa,{})," Analytics"]})]}),u.jsxs("div",{className:"admin-content",children:[r==="users"&&u.jsxs("div",{className:"users-tab",children:[u.jsx("h2",{children:"User Management"}),u.jsxs("div",{className:"user-filters",children:[u.jsxs("div",{className:"search-box",children:[u.jsx(cc,{}),u.jsx("input",{type:"text",placeholder:"Search users...",value:g,onChange:te=>y(te.target.value)})]}),u.jsx("div",{className:"filter-controls",children:u.jsxs("div",{className:"filter-buttons",children:[u.jsx("button",{className:M==="all"?"active":"",onClick:()=>L("all"),children:"All"}),u.jsx("button",{className:M==="active"?"active":"",onClick:()=>L("active"),children:"Active"}),u.jsx("button",{className:M==="new"?"active":"",onClick:()=>L("new"),children:"New"})]})})]}),u.jsxs("div",{className:"users-table-container",children:[u.jsxs("table",{className:"users-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"User"}),u.jsx("th",{children:"Email"}),u.jsx("th",{children:"Balance"}),u.jsx("th",{children:"Gold"}),u.jsx("th",{children:"Status"}),u.jsx("th",{children:"Joined"}),u.jsx("th",{children:"Last Active"}),u.jsx("th",{children:"Actions"})]})}),u.jsx("tbody",{children:Y.filter(te=>{if(!g)return!0;const Ee=g.toLowerCase();return te.fullName&&te.fullName.toLowerCase().includes(Ee)||te.email&&te.email.toLowerCase().includes(Ee)||te.id&&te.id.toLowerCase().includes(Ee)}).map(te=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsxs("div",{className:"user-cell",children:[u.jsx("div",{className:"user-avatar-sm",children:hr(te.fullName||te.email)}),u.jsxs("div",{children:[u.jsx("div",{className:"user-name",children:te.fullName||"Unknown User"}),u.jsxs("div",{className:"user-id",children:["ID: ",te.id.substring(0,8),"..."]})]})]})}),u.jsx("td",{children:te.email||"N/A"}),u.jsx("td",{children:vn(te.balance||0)}),u.jsx("td",{children:te.goldBalance?`${te.goldBalance.toFixed(4)}g`:"0g"}),u.jsx("td",{children:u.jsx("span",{className:`status-indicator ${te.isOnline?"online":"offline"}`,children:te.isOnline?"Online":"Offline"})}),u.jsx("td",{children:te.createdAt?Nn(te.createdAt):"N/A"}),u.jsx("td",{children:te.lastActive?Nn(te.lastActive):"N/A"}),u.jsx("td",{children:u.jsxs("div",{className:"action-buttons",children:[u.jsxs("button",{className:"btn-view",children:[u.jsx(_3,{})," View"]}),u.jsxs("button",{className:"btn-edit",children:[u.jsx(e_,{})," Edit"]})]})})]},te.id))})]}),Y.length===0&&u.jsxs("div",{className:"no-data",children:[u.jsx(la,{size:48}),u.jsx("p",{children:"No users found"})]})]})]}),r==="transactions"&&u.jsxs("div",{className:"transactions-tab",children:[u.jsx("h2",{children:"Transaction History"}),u.jsxs("div",{className:"transaction-filters",children:[u.jsxs("div",{className:"search-box",children:[u.jsx(cc,{}),u.jsx("input",{type:"text",placeholder:"Search transactions...",value:g,onChange:te=>y(te.target.value)})]}),u.jsx("div",{className:"filter-controls",children:u.jsxs("div",{className:"filter-buttons",children:[u.jsx("button",{className:M==="all"?"active":"",onClick:()=>L("all"),children:"All"}),u.jsx("button",{className:M==="deposit"?"active":"",onClick:()=>L("deposit"),children:"Deposits"}),u.jsx("button",{className:M==="withdrawal"?"active":"",onClick:()=>L("withdrawal"),children:"Withdrawals"})]})})]}),u.jsxs("div",{className:"transactions-table-container",children:[u.jsxs("table",{className:"transactions-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"User"}),u.jsx("th",{children:"Type"}),u.jsx("th",{children:"Amount"}),u.jsx("th",{children:"Gold"}),u.jsx("th",{children:"Date"}),u.jsx("th",{children:"Status"})]})}),u.jsx("tbody",{children:re.filter(te=>M==="all"?!0:te.type===M).filter(te=>{if(!g)return!0;const Ee=g.toLowerCase();return te.userId.toLowerCase().includes(Ee)||te.userName&&te.userName.toLowerCase().includes(Ee)||te.type.toLowerCase().includes(Ee)||te.amount&&te.amount.toString().includes(Ee)}).map(te=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsxs("div",{className:"user-cell",children:[u.jsx("div",{className:"user-avatar-sm",children:hr(te.userName||"Unknown User")}),u.jsxs("div",{children:[u.jsx("div",{className:"user-name",children:te.userName||"Unknown User"}),u.jsxs("div",{className:"user-id",children:["ID: ",te.userId.substring(0,8),"..."]})]})]})}),u.jsx("td",{children:u.jsx("span",{className:`transaction-type ${te.type}`,children:te.type})}),u.jsx("td",{children:vn(te.amount)}),u.jsx("td",{children:te.goldAmount?`${te.goldAmount.toFixed(4)}g`:"N/A"}),u.jsx("td",{children:Nn(te.timestamp)}),u.jsx("td",{children:u.jsx("span",{className:`status-indicator ${te.status}`,children:te.status})})]},te.id))})]}),re.length===0&&u.jsxs("div",{className:"no-data",children:[u.jsx(lc,{size:48}),u.jsx("p",{children:"No transactions found"})]})]})]}),r==="chat"&&u.jsxs("div",{className:"admin-conversation-container",children:[u.jsxs("div",{className:"conversation-list",children:[u.jsxs("div",{className:"conversation-filters",children:[u.jsxs("div",{className:"search-box",children:[u.jsx(cc,{}),u.jsx("input",{type:"text",placeholder:"Search conversations...",value:g,onChange:te=>y(te.target.value)})]}),u.jsxs("div",{className:"filter-controls",children:[u.jsxs("div",{className:"filter-buttons",children:[u.jsx("button",{className:M==="all"?"active":"",onClick:()=>L("all"),children:"All"}),u.jsx("button",{className:M==="unread"?"active":"",onClick:()=>L("unread"),children:"Unread"})]}),u.jsxs("div",{className:"sort-dropdown",children:[u.jsxs("select",{value:N,onChange:te=>U(te.target.value),children:[u.jsx("option",{value:"newest",children:"Newest First"}),u.jsx("option",{value:"oldest",children:"Oldest First"}),u.jsx("option",{value:"unread",children:"Unread First"}),u.jsx("option",{value:"name",children:"By Name"})]}),u.jsx(a_,{})]})]})]}),u.jsx("div",{className:"conversations",children:pt.length===0?u.jsxs("div",{className:"no-conversations",children:[u.jsx(oc,{size:48}),u.jsx("p",{children:"No conversations found"}),u.jsx("span",{children:"Try adjusting your search or filters"})]}):pt.map(te=>u.jsxs("div",{className:`conversation-item ${o&&o.userId===te.userId?"active":""} ${te.hasUnreadAdminMessages?"unread":""}`,onClick:()=>Kt(te),children:[u.jsx("div",{className:"conversation-avatar",children:hr(te.userName)}),u.jsxs("div",{className:"conversation-details",children:[u.jsxs("div",{className:"conversation-header",children:[u.jsx("h4",{children:te.userName}),u.jsx("span",{className:"conversation-time",children:Nn(te.lastMessage)})]}),u.jsx("p",{className:"conversation-email",children:te.userEmail}),u.jsx("p",{className:"conversation-preview",children:te.messages.length>0&&te.messages[te.messages.length-1]?.message?te.messages[te.messages.length-1].message.substring(0,70)+"...":"No messages"})]}),te.unreadCount>0&&u.jsx("span",{className:"unread-badge",children:te.unreadCount})]},te.userId))})]}),u.jsx("div",{className:"conversation-view",children:o?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"conversation-header",children:u.jsxs("div",{className:"user-info",children:[u.jsx("div",{className:"user-avatar",children:hr(o.userName)}),u.jsxs("div",{children:[u.jsx("h3",{children:o.userName}),u.jsx("p",{className:"user-email",children:o.userEmail}),u.jsxs("p",{className:"user-id",children:["User ID: ",o.userId]})]})]})}),u.jsx("div",{className:"message-list",children:o.messages.sort((te,Ee)=>{const Ae=te.timestamp?te.timestamp.toDate():new Date(0),Me=Ee.timestamp?Ee.timestamp.toDate():new Date(0);return Ae-Me}).map(te=>u.jsxs("div",{className:`message ${te.isAdmin?"admin-message":"user-message"} ${te.read?"read":"unread"}`,children:[u.jsx("div",{className:"message-avatar",children:te.isAdmin?"A":hr(o.userName)}),u.jsxs("div",{className:"message-content",children:[u.jsxs("div",{className:"message-header",children:[u.jsx("span",{className:"message-sender",children:te.isAdmin?"Admin":o.userName}),u.jsx("span",{className:"message-time",children:Nn(te.timestamp)})]}),u.jsx("p",{children:te.message||"No message content"}),!te.read&&te.isAdmin&&u.jsxs("span",{className:"unread-indicator",children:[u.jsx(t_,{})," Unread"]})]})]},te.id))}),u.jsx("form",{onSubmit:tr,className:"message-input-form",children:u.jsxs("div",{className:"input-container",children:[u.jsx("input",{type:"text",value:h,onChange:te=>p(te.target.value),placeholder:"Type your response...",disabled:w}),u.jsx("button",{type:"submit",disabled:w||!h.trim(),className:"btn-send",children:w?"Sending...":u.jsxs(u.Fragment,{children:[u.jsx(s_,{})," Send"]})})]})})]}):u.jsxs("div",{className:"no-conversation-selected",children:[u.jsx(oc,{size:64}),u.jsx("h3",{children:"Select a conversation"}),u.jsx("p",{children:"Choose a conversation from the list to view messages and respond to users."})]})})]}),r==="analytics"&&u.jsxs("div",{className:"analytics-tab",children:[u.jsx("h2",{children:"Platform Analytics"}),u.jsxs("div",{className:"analytics-grid",children:[u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"User Growth"}),u.jsx(la,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:z.totalUsers}),u.jsx("div",{className:"stat-label",children:"Total Registered Users"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-up",children:"+12% this month"})})]})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"Active Users"}),u.jsx(R3,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:z.activeToday}),u.jsx("div",{className:"stat-label",children:"Active Today"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-up",children:"+5% from yesterday"})})]})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"Revenue"}),u.jsx(Ro,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:vn(z.totalDeposits)}),u.jsx("div",{className:"stat-label",children:"Total Deposits"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-up",children:"+8% this week"})})]})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"Withdrawals"}),u.jsx(lc,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:vn(z.totalWithdrawals)}),u.jsx("div",{className:"stat-label",children:"Total Withdrawals"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-down",children:"-3% this week"})})]})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"Net Revenue"}),u.jsx(oa,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:vn(z.totalRevenue)}),u.jsx("div",{className:"stat-label",children:"Platform Profit"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-up",children:"+15% this month"})})]})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsx("h3",{children:"Pending Actions"}),u.jsx(vc,{className:"analytics-icon"})]}),u.jsxs("div",{className:"analytics-content",children:[u.jsx("div",{className:"stat-big",children:z.pendingTransactions}),u.jsx("div",{className:"stat-label",children:"Pending Transactions"}),u.jsx("div",{className:"stat-trend",children:u.jsx("span",{className:"trend-neutral",children:"No change"})})]})]})]}),u.jsxs("div",{className:"charts-container",children:[u.jsxs("div",{className:"chart-card",children:[u.jsx("h3",{children:"User Growth Over Time"}),u.jsxs("div",{className:"chart-placeholder",children:[u.jsx(Jx,{size:48}),u.jsx("p",{children:"User growth chart will be displayed here"})]})]}),u.jsxs("div",{className:"chart-card",children:[u.jsx("h3",{children:"Revenue vs Withdrawals"}),u.jsxs("div",{className:"chart-placeholder",children:[u.jsx(oa,{size:48}),u.jsx("p",{children:"Revenue comparison chart will be displayed here"})]})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
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
        
        .transaction-filters, .user-filters {
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
        }
        
        .filter-buttons button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        .transactions-table-container, .users-table-container {
          overflow-x: auto;
          border-radius: 8px;
          border: 1px solid #eee;
        }
        
        .transactions-table, .users-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .transactions-table th, .users-table th {
          background: #f8f9fa;
          padding: 12px 15px;
          text-align: left;
          font-weight: 600;
          color: #2c3e50;
          border-bottom: 1px solid #eee;
        }
        
        .transactions-table td, .users-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #f1f3f4;
          color: #2c3e50;
        }
        
        .transactions-table tr:hover, .users-table tr:hover {
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
        
        .transaction-type {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .transaction-type.deposit {
          background: #d4edda;
          color: #155724;
        }
        
        .transaction-type.withdrawal {
          background: #f8d7da;
          color: #721c24;
        }
        
        .status-indicator {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .status-indicator.pending {
          background: #fff3cd;
          color: #856404;
        }
        
        .status-indicator.completed {
          background: #d4edda;
          color: #155724;
        }
        
        .status-indicator.rejected {
          background: #f8d7da;
          color: #721c24;
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
        }
        
        .btn-view, .btn-edit {
          background: #e2e3e5;
          color: #383d41;
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
          font-size: 极4px;
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
          width: 50极;
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
         极ustify-content: center;
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
          padding: 10极 20px;
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
          border-top: 4px极 #3498db;
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
          
          .transaction-filters, .user-filters {
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
      `})]}):u.jsx("div",{className:"access-denied",children:u.jsxs("div",{className:"access-denied-content",children:[u.jsx(nh,{size:48}),u.jsx("h2",{children:"Access Denied"}),u.jsx("p",{children:"You need administrator privileges to access this page."}),u.jsxs("button",{onClick:de,className:"btn-signout",children:[u.jsx(xc,{})," Sign Out"]})]})}):u.jsxs("div",{className:"admin-loading",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("p",{children:"Checking permissions..."})]})},dC="tSkkQjMfTMNhpqK92TxjvGVPUWa2",hC=()=>{const[r,e]=P.useState([]),[n,s]=P.useState(null),[o,c]=P.useState(""),[h,p]=P.useState(""),[g,y]=P.useState(!0),[x,E]=P.useState(!1),[w,I]=P.useState("newest"),[N,U]=P.useState("all"),[M,L]=P.useState(!1),[B,q]=P.useState(null),[X,ee]=P.useState(!1),[ne,k]=P.useState(!1),[C,j]=P.useState(!0),[O,D]=P.useState(new Date),A=P.useRef(null);P.useEffect(()=>{const pe=wc().onAuthStateChanged(fe=>{fe&&fe.uid===dC?(ee(!0),k(!0),re()):(ee(!1),k(!0),q("Access denied. Admin privileges required."))});return()=>pe()},[]),P.useEffect(()=>(X&&C&&(A.current=setInterval(()=>{re()},5e3)),()=>{A.current&&clearInterval(A.current)}),[X,C]);const T=()=>{const J=wc();xg(J).catch(pe=>{console.error("Error signing out:",pe),q("Failed to sign out.")})};P.useEffect(()=>{X&&(y(!0),re())},[w,X]);const re=async()=>{if(X)try{L(!0),q(null);const J=mi(gn(et,"chats"),ya("timestamp","desc")),pe=await No(J),fe=[];pe.forEach(Ge=>{fe.push({id:Ge.id,...Ge.data()})});const we=xe(fe),ve=Y(we,w);if(e(ve),D(new Date),n){const Ge=ve.find(pt=>pt.userId===n.userId);Ge&&s(Ge)}}catch(J){console.error("Error fetching conversations:",J),q("Failed to load conversations. Please check your permissions.")}finally{y(!1),L(!1)}},xe=J=>{const pe={};return J.forEach(fe=>{const we=fe.userId;pe[we]||(pe[we]={userId:we,userName:fe.userName||"Unknown User",userEmail:fe.userEmail||"No email",messages:[],unreadCount:0,lastMessage:fe.timestamp,hasUnreadAdminMessages:!1}),pe[we].messages.push(fe),!fe.read&&fe.isAdmin&&(pe[we].hasUnreadAdminMessages=!0,pe[we].unreadCount++),fe.timestamp&&(!pe[we].lastMessage||fe.timestamp.toDate()>pe[we].lastMessage.toDate())&&(pe[we].lastMessage=fe.timestamp)}),Object.values(pe)},Y=(J,pe)=>{const fe=[...J];switch(pe){case"newest":return fe.sort((we,ve)=>{const Ge=we.lastMessage?we.lastMessage.toDate():new Date(0);return(ve.lastMessage?ve.lastMessage.toDate():new Date(0))-Ge});case"oldest":return fe.sort((we,ve)=>{const Ge=we.lastMessage?we.lastMessage.toDate():new Date(0),pt=ve.lastMessage?ve.lastMessage.toDate():new Date(0);return Ge-pt});case"unread":return fe.sort((we,ve)=>ve.unreadCount-we.unreadCount);case"name":return fe.sort((we,ve)=>we.userName.localeCompare(ve.userName));default:return fe}},ue=r.filter(J=>{if(N==="unread"&&J.unreadCount===0||N==="read"&&J.unreadCount>0)return!1;if(h){const pe=h.toLowerCase();return J.userName.toLowerCase().includes(pe)||J.userId.toLowerCase().includes(pe)||J.userEmail.toLowerCase().includes(pe)||J.messages.some(fe=>fe.message&&fe.message.toLowerCase().includes(pe))}return!0}),ye=async J=>{if(!X)return;s(J);const pe=J.messages.filter(fe=>!fe.read&&fe.isAdmin);if(pe.length>0)try{const fe=P4(et);pe.forEach(we=>{const ve=yn(et,"chats",we.id);fe.update(ve,{read:!0})}),await fe.commit(),e(we=>we.map(ve=>ve.userId===J.userId?{...ve,unreadCount:0,hasUnreadAdminMessages:!1}:ve))}catch(fe){console.error("Error marking messages as read:",fe),q("Failed to mark messages as read.")}},Re=async J=>{if(J.preventDefault(),!(!o.trim()||!n||!X)){E(!0);try{await Go(gn(et,"chats"),{userId:n.userId,userName:n.userName,userEmail:n.userEmail,message:o.trim(),isAdmin:!0,timestamp:vs(),read:!1}),c(""),re()}catch(pe){console.error("Error sending reply:",pe),q("Failed to send message. Please check your permissions.")}finally{E(!1)}}},z=J=>{if(!J)return"";try{const pe=J.toDate();return(new Date-pe)/(1e3*60*60)<24?pe.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):pe.toLocaleDateString([],{month:"short",day:"numeric"})}catch{return""}},oe=J=>J.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),he=J=>!J||J==="Unknown User"?"U":J.split(" ").map(pe=>pe[0]).join("").toUpperCase().substring(0,2),de=()=>{j(!C)};return ne?X?g?u.jsxs("div",{className:"admin-loading",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("p",{children:"Loading conversations..."})]}):u.jsxs("div",{className:"admin-chat-management",children:[u.jsxs("div",{className:"admin-header",children:[u.jsxs("div",{className:"header-title",children:[u.jsx("h1",{children:"Customer Support Management"}),u.jsx("p",{children:"Manage and respond to user inquiries"})]}),u.jsxs("div",{className:"header-actions",children:[u.jsxs("div",{className:"refresh-controls",children:[u.jsxs("button",{className:`btn-refresh ${C?"active":""}`,onClick:re,disabled:M,children:[u.jsx(o_,{className:M?"spinning":""}),M?"Refreshing...":"Refresh Now"]}),u.jsxs("button",{className:`btn-auto-refresh ${C?"active":""}`,onClick:de,children:[u.jsx(vc,{}),C?"Auto: ON":"Auto: OFF"]})]}),u.jsxs("button",{onClick:T,className:"btn-signout",children:[u.jsx(xc,{})," Sign Out"]})]})]}),B&&u.jsxs("div",{className:"error-banner",children:[u.jsx(nh,{}),u.jsx("span",{children:B}),u.jsx("button",{onClick:()=>q(null),children:"×"})]}),u.jsxs("div",{className:"header-stats",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:r.length}),u.jsx("span",{className:"stat-label",children:"Total Conversations"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:r.filter(J=>J.unreadCount>0).length}),u.jsx("span",{className:"stat-label",children:"Unread Conversations"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:r.reduce((J,pe)=>J+pe.messages.length,0)}),u.jsx("span",{className:"stat-label",children:"Total Messages"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:C?"ON":"OFF"}),u.jsx("span",{className:"stat-label",children:"Auto Refresh"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:oe(O)}),u.jsx("span",{className:"stat-label",children:"Last Refresh"})]})]}),u.jsxs("div",{className:"admin-conversation-container",children:[u.jsxs("div",{className:"conversation-list",children:[u.jsxs("div",{className:"conversation-filters",children:[u.jsxs("div",{className:"search-box",children:[u.jsx(cc,{}),u.jsx("input",{type:"text",placeholder:"Search conversations...",value:h,onChange:J=>p(J.target.value)})]}),u.jsxs("div",{className:"filter-controls",children:[u.jsxs("div",{className:"filter-buttons",children:[u.jsx("button",{className:N==="all"?"active":"",onClick:()=>U("all"),children:"All"}),u.jsx("button",{className:N==="unread"?"active":"",onClick:()=>U("unread"),children:"Unread"})]}),u.jsxs("div",{className:"sort-dropdown",children:[u.jsxs("select",{value:w,onChange:J=>I(J.target.value),children:[u.jsx("option",{value:"newest",children:"Newest First"}),u.jsx("option",{value:"oldest",children:"Oldest First"}),u.jsx("option",{value:"unread",children:"Unread First"}),u.jsx("option",{value:"name",children:"By Name"})]}),u.jsx(a_,{})]})]})]}),u.jsx("div",{className:"conversations",children:ue.length===0?u.jsxs("div",{className:"no-conversations",children:[u.jsx(oc,{size:48}),u.jsx("p",{children:"No conversations found"}),u.jsx("span",{children:"Try adjusting your search or filters"})]}):ue.map(J=>u.jsxs("div",{className:`conversation-item ${n&&n.userId===J.userId?"active":""} ${J.hasUnreadAdminMessages?"unread":""}`,onClick:()=>ye(J),children:[u.jsx("div",{className:"conversation-avatar",children:he(J.userName)}),u.jsxs("div",{className:"conversation-details",children:[u.jsxs("div",{className:"conversation-header",children:[u.jsx("h4",{children:J.userName}),u.jsx("span",{className:"conversation-time",children:z(J.lastMessage)})]}),u.jsx("p",{className:"conversation-email",children:J.userEmail}),u.jsx("p",{className:"conversation-preview",children:J.messages.length>0&&J.messages[J.messages.length-1]?.message?J.messages[J.messages.length-1].message.substring(0,70)+"...":"No messages"})]}),J.unreadCount>0&&u.jsx("span",{className:"unread-badge",children:J.unreadCount})]},J.userId))})]}),u.jsx("div",{className:"conversation-view",children:n?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"conversation-header",children:u.jsxs("div",{className:"user-info",children:[u.jsx("div",{className:"user-avatar",children:he(n.userName)}),u.jsxs("div",{children:[u.jsx("h3",{children:n.userName}),u.jsx("p",{className:"user-email",children:n.userEmail}),u.jsxs("p",{className:"user-id",children:["User ID: ",n.userId]})]})]})}),u.jsx("div",{className:"message-list",children:n.messages.sort((J,pe)=>{const fe=J.timestamp?J.timestamp.toDate():new Date(0),we=pe.timestamp?pe.timestamp.toDate():new Date(0);return fe-we}).map(J=>u.jsxs("div",{className:`message ${J.isAdmin?"admin-message":"user-message"} ${J.read?"read":"unread"}`,children:[u.jsx("div",{className:"message-avatar",children:J.isAdmin?"A":he(n.userName)}),u.jsxs("div",{className:"message-content",children:[u.jsxs("div",{className:"message-header",children:[u.jsx("span",{className:"message-sender",children:J.isAdmin?"Admin":n.userName}),u.jsx("span",{className:"message-time",children:z(J.timestamp)})]}),u.jsx("p",{children:J.message||"No message content"}),!J.read&&J.isAdmin&&u.jsxs("span",{className:"unread-indicator",children:[u.jsx(t_,{})," Unread"]})]})]},J.id))}),u.jsx("form",{onSubmit:Re,className:"message-input-form",children:u.jsxs("div",{className:"input-container",children:[u.jsx("input",{type:"text",value:o,onChange:J=>c(J.target.value),placeholder:"Type your response...",disabled:x}),u.jsx("button",{type:"submit",disabled:x||!o.trim(),className:"btn-send",children:x?"Sending...":u.jsxs(u.Fragment,{children:[u.jsx(s_,{})," Send"]})})]})})]}):u.jsxs("div",{className:"no-conversation-selected",children:[u.jsx(oc,{size:64}),u.jsx("h3",{children:"Select a conversation"}),u.jsx("p",{children:"Choose a conversation from the list to view messages and respond to users."})]})})]}),u.jsx("style",{jsx:!0,children:`
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
      `})]}):u.jsx("div",{className:"access-denied",children:u.jsxs("div",{className:"access-denied-content",children:[u.jsx(nh,{size:48}),u.jsx("h2",{children:"Access Denied"}),u.jsx("p",{children:"You need administrator privileges to access this page."}),u.jsxs("button",{onClick:T,className:"btn-signout",children:[u.jsx(xc,{})," Sign Out"]})]})}):u.jsxs("div",{className:"admin-loading",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("p",{children:"Checking permissions..."})]})},fC=()=>{const[r,e]=P.useState("pending"),[n,s]=P.useState([]),[o,c]=P.useState([]),[h,p]=P.useState(""),[g,y]=P.useState("all"),[x,E]=P.useState("all"),[w,I]=P.useState({start:"",end:""}),[N,U]=P.useState(null),[M,L]=P.useState(!0),[B,q]=P.useState({pending:0,approved:0,rejected:0,total:0,totalAmount:0});P.useEffect(()=>{X(),ee()},[]);const X=async()=>{try{L(!0);const T=mi(gn(et,"transactions"),ya("timestamp","desc")),re=await No(T),xe=[];re.forEach(Y=>{xe.push({id:Y.id,...Y.data()})}),s(xe),ne(xe)}catch(T){console.error("Error fetching transactions:",T)}finally{L(!1)}},ee=async()=>{try{const T=mi(gn(et,"users")),re=await No(T),xe=[];re.forEach(Y=>{xe.push({id:Y.id,...Y.data()})}),c(xe)}catch(T){console.error("Error fetching users:",T)}},ne=T=>{const re=T.filter(Re=>Re.status==="pending").length,xe=T.filter(Re=>Re.status==="completed").length,Y=T.filter(Re=>Re.status==="rejected").length,ue=T.length,ye=T.reduce((Re,z)=>Re+(z.amount||0),0);q({pending:re,approved:xe,rejected:Y,total:ue,totalAmount:ye})},k=async T=>{try{const re=yn(et,"transactions",T.id);if(await bo(re,{status:"completed",approvedAt:new Date,approvedBy:"admin"}),T.type==="deposit"){const xe=yn(et,"users",T.userId),Y=await getDoc(xe);if(Y.exists()){const ue=Y.data(),ye=(ue.balance||0)+T.amount,Re=(ue.goldBalance||0)+(T.goldAmount||0);await bo(xe,{balance:ye,goldBalance:Re})}}X()}catch(re){console.error("Error approving transaction:",re)}},C=async T=>{try{const re=yn(et,"transactions",T.id);if(await bo(re,{status:"rejected",rejectedAt:new Date,rejectedBy:"admin"}),T.type==="withdrawal"&&T.status==="pending"){const xe=yn(et,"users",T.userId),Y=await getDoc(xe);if(Y.exists()){const ye=(Y.data().balance||0)+T.amount;await bo(xe,{balance:ye})}}X()}catch(re){console.error("Error rejecting transaction:",re)}},j=n.filter(T=>{if(r!=="all"&&T.status!==r)return!1;if(h){const re=h.toLowerCase();return T.userId.toLowerCase().includes(re)||T.userName&&T.userName.toLowerCase().includes(re)||T.type.toLowerCase().includes(re)||T.amount&&T.amount.toString().includes(re)}if(x!=="all"&&T.type!==x)return!1;if(w.start&&T.timestamp){const re=T.timestamp.toDate(),xe=new Date(w.start),Y=w.end?new Date(w.end):new Date;if(re<xe||re>Y)return!1}return!0}),O=T=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(T||0),D=T=>{if(!T)return"";try{const re=T.toDate();return re.toLocaleDateString()+" "+re.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return""}},A=T=>T?T.split(" ").map(re=>re[0]).join("").toUpperCase().substring(0,2):"U";return M?u.jsxs("div",{className:"loading-container",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("p",{children:"Loading transactions..."})]}):u.jsxs("div",{className:"transaction-approval-dashboard",children:[u.jsxs("div",{className:"dashboard-header",children:[u.jsx("h1",{children:"Transaction Approval Dashboard"}),u.jsx("p",{children:"Manage and approve user transactions"})]}),u.jsxs("div",{className:"stats-grid",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon pending",children:u.jsx(vc,{})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("h3",{children:B.pending}),u.jsx("p",{children:"Pending Transactions"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon approved",children:u.jsx(e2,{})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("h3",{children:B.approved}),u.jsx("p",{children:"Approved Transactions"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon rejected",children:u.jsx(Sm,{})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("h3",{children:B.rejected}),u.jsx("p",{children:"Rejected Transactions"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon total",children:u.jsx(lc,{})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("h3",{children:B.total}),u.jsx("p",{children:"Total Transactions"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon amount",children:u.jsx(Ro,{})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("h3",{children:O(B.totalAmount)}),u.jsx("p",{children:"Total Amount"})]})]})]}),u.jsxs("div",{className:"controls-row",children:[u.jsxs("div",{className:"search-box",children:[u.jsx(cc,{}),u.jsx("input",{type:"text",placeholder:"Search transactions...",value:h,onChange:T=>p(T.target.value)})]}),u.jsxs("div",{className:"filter-group",children:[u.jsxs("div",{className:"filter-item",children:[u.jsx("label",{children:"Type:"}),u.jsxs("select",{value:x,onChange:T=>E(T.target.value),children:[u.jsx("option",{value:"all",children:"All Types"}),u.jsx("option",{value:"deposit",children:"Deposits"}),u.jsx("option",{value:"withdrawal",children:"Withdrawals"})]})]}),u.jsxs("div",{className:"filter-item",children:[u.jsx("label",{children:"From:"}),u.jsx("input",{type:"date",value:w.start,onChange:T=>I({...w,start:T.target.value})})]}),u.jsxs("div",{className:"filter-item",children:[u.jsx("label",{children:"To:"}),u.jsx("input",{type:"date",value:w.end,onChange:T=>I({...w,end:T.target.value})})]})]})]}),u.jsx("div",{className:"tabs-container",children:u.jsxs("div",{className:"tabs",children:[u.jsxs("button",{className:`tab ${r==="pending"?"active":""}`,onClick:()=>e("pending"),children:["Pending (",B.pending,")"]}),u.jsxs("button",{className:`tab ${r==="completed"?"active":""}`,onClick:()=>e("completed"),children:["Approved (",B.approved,")"]}),u.jsxs("button",{className:`tab ${r==="rejected"?"active":""}`,onClick:()=>e("rejected"),children:["Rejected (",B.rejected,")"]}),u.jsx("button",{className:`tab ${r==="all"?"active":""}`,onClick:()=>e("all"),children:"All Transactions"})]})}),u.jsxs("div",{className:"transactions-container",children:[u.jsxs("div",{className:"transactions-list",children:[u.jsxs("h2",{children:[r.charAt(0).toUpperCase()+r.slice(1)," Transactions"]}),j.length===0?u.jsxs("div",{className:"empty-state",children:[u.jsx(lc,{size:48}),u.jsx("p",{children:"No transactions found"}),u.jsx("span",{children:"Try adjusting your search or filters"})]}):u.jsxs("table",{className:"transactions-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"User"}),u.jsx("th",{children:"Type"}),u.jsx("th",{children:"Amount"}),u.jsx("th",{children:"Gold"}),u.jsx("th",{children:"Date"}),u.jsx("th",{children:"Status"}),u.jsx("th",{children:"Actions"})]})}),u.jsx("tbody",{children:j.map(T=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsxs("div",{className:"user-cell",children:[u.jsx("div",{className:"user-avatar",children:A(T.userName)}),u.jsxs("div",{children:[u.jsx("div",{className:"user-name",children:T.userName||"Unknown User"}),u.jsxs("div",{className:"user-id",children:["ID: ",T.userId]})]})]})}),u.jsx("td",{children:u.jsx("span",{className:`transaction-type ${T.type}`,children:T.type})}),u.jsx("td",{children:O(T.amount)}),u.jsx("td",{children:T.goldAmount?`${T.goldAmount.toFixed(4)}g`:"N/A"}),u.jsx("td",{children:D(T.timestamp)}),u.jsx("td",{children:u.jsx("span",{className:`status status-${T.status}`,children:T.status})}),u.jsxs("td",{children:[T.status==="pending"&&u.jsxs("div",{className:"action-buttons",children:[u.jsxs("button",{className:"btn-approve",onClick:()=>k(T),children:[u.jsx(e2,{})," Approve"]}),u.jsxs("button",{className:"btn-reject",onClick:()=>C(T),children:[u.jsx(Sm,{})," Reject"]})]}),T.status!=="pending"&&u.jsx("span",{className:"processed-info",children:"Processed by Admin"})]})]},T.id))})]})]}),u.jsxs("div",{className:"user-details-panel",children:[u.jsx("h2",{children:"User Details"}),N?u.jsxs("div",{className:"user-details",children:[u.jsxs("div",{className:"user-header",children:[u.jsx("div",{className:"user-avatar-large",children:A(N.fullName||N.email)}),u.jsxs("div",{children:[u.jsx("h3",{children:N.fullName||"Unknown User"}),u.jsx("p",{children:N.email||"No email"})]})]}),u.jsxs("div",{className:"user-stats",children:[u.jsxs("div",{className:"user-stat",children:[u.jsx("span",{className:"stat-label",children:"Balance:"}),u.jsx("span",{className:"stat-value",children:O(N.balance||0)})]}),u.jsxs("div",{className:"user-stat",children:[u.jsx("span",{className:"stat-label",children:"Gold Balance:"}),u.jsx("span",{className:"stat-value",children:N.goldBalance?`${N.goldBalance.toFixed(4)}g`:"0g"})]}),u.jsxs("div",{className:"user-stat",children:[u.jsx("span",{className:"stat-label",children:"Joined:"}),u.jsx("span",{className:"stat-value",children:N.createdAt?D(N.createdAt):"N/A"})]}),u.jsxs("div",{className:"user-stat",children:[u.jsx("span",{className:"stat-label",children:"Last Active:"}),u.jsx("span",{className:"stat-value",children:N.lastActive?D(N.lastActive):"N/A"})]})]}),u.jsxs("div",{className:"user-transactions",children:[u.jsx("h4",{children:"Recent Transactions"}),n.filter(T=>T.userId===N.id).slice(0,5).map(T=>u.jsxs("div",{className:"user-transaction",children:[u.jsxs("div",{className:"transaction-info",children:[u.jsx("span",{className:`type ${T.type}`,children:T.type}),u.jsx("span",{className:"amount",children:O(T.amount)})]}),u.jsxs("div",{className:"transaction-meta",children:[u.jsx("span",{className:"date",children:D(T.timestamp)}),u.jsx("span",{className:`status status-${T.status}`,children:T.status})]})]},T.id))]})]}):u.jsxs("div",{className:"select-user-prompt",children:[u.jsx(l_,{size:48}),u.jsx("p",{children:"Select a user to view details"}),u.jsx("span",{children:"Click on a transaction to view user information"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .transaction-approval-dashboard {
          padding: 20px;
          background: #f5f7fa;
          min-height: 100vh;
        }
        
        .dashboard-header {
          margin-bottom: 20px;
        }
        
        .dashboard-header h1 {
          margin: 0;
          color: #2c3e50;
        }
        
        .dashboard-header p {
          margin: 5px 0 0;
          color: #7f8c8d;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .stat-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          display: flex;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          font-size: 20px;
          color: white;
        }
        
        .stat-icon.pending {
          background: #ffc107;
        }
        
        .stat-icon.approved {
          background: #28a745;
        }
        
        .stat-icon.rejected {
          background: #dc3545;
        }
        
        .stat-icon.total {
          background: #17a2b8;
        }
        
        .stat-icon.amount {
          background: #6f42c1;
        }
        
        .stat-content h3 {
          margin: 0;
          font-size: 24px;
          color: #2c3e50;
        }
        
        .stat-content p {
          margin: 5px 0 0;
          color: #7f8c8d;
          font-size: 14px;
        }
        
        .controls-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          gap: 15px;
          flex-wrap: wrap;
        }
        
        .search-box {
          position: relative;
          flex: 1;
          min-width: 250px;
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
        }
        
        .filter-group {
          display: flex;
          gap: 15px;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .filter-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .filter-item label {
          font-size: 14px;
          color: #2c3e50;
          font-weight: 500;
        }
        
        .filter-item select, .filter-item input {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 14px;
        }
        
        .tabs-container {
          margin-bottom: 20px;
        }
        
        .tabs {
          display: flex;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .tab {
          padding: 12px 20px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: #7f8c8d;
          flex: 1;
          transition: all 0.3s ease;
        }
        
        .tab.active {
          background: #3498db;
          color: white;
        }
        
        .transactions-container {
          display: flex;
          gap: 20px;
        }
        
        .transactions-list {
          flex: 1;
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .transactions-list h2 {
          margin-top: 0;
          color: #2c3e50;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .transactions-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .transactions-table th {
          background: #f8f9fa;
          padding: 12px 15px;
          text-align: left;
          font-weight: 600;
          color: #2c3e50;
          border-bottom: 1px solid #eee;
        }
        
        .transactions-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #f1f3f4;
          color: #2c3e50;
        }
        
        .transactions-table tr:hover {
          background: #f8f9fa;
        }
        
        .user-cell {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .user-avatar {
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
        
        .transaction-type {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .transaction-type.deposit {
          background: #d4edda;
          color: #155724;
        }
        
        .transaction-type.withdrawal {
          background: #f8d7da;
          color: #721c24;
        }
        
        .status {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .status-pending {
          background: #fff3cd;
          color: #856404;
        }
        
        .status-completed {
          background: #d4edda;
          color: #155724;
        }
        
        .status-rejected {
          background: #f8d7da;
          color: #721c24;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-approve, .btn-reject {
          padding: 6px 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .btn-approve {
          background: #d4edda;
          color: #155724;
        }
        
        .btn-reject {
          background: #f8d7da;
          color: #721c24;
        }
        
        .processed-info {
          font-size: 12px;
          color: #7f8c8d;
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          color: #7f8c8d;
          text-align: center;
        }
        
        .empty-state svg {
          margin-bottom: 15px;
          opacity: 0.5;
        }
        
        .user-details-panel {
          width: 350px;
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .user-details-panel h2 {
          margin-top: 0;
          color: #2c3e50;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .user-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .user-avatar-large {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
          flex-shrink: 0;
        }
        
        .user-header h3 {
          margin: 0;
          color: #2c3e50;
        }
        
        .user-header p {
          margin: 5px 0 0;
          color: #7f8c8d;
        }
        
        .user-stats {
          margin-bottom: 20px;
        }
        
        .user-stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f1f3f4;
        }
        
        .user-stat:last-child {
          border-bottom: none;
        }
        
        .stat-label {
          font-weight: 500;
          color: #2c3e50;
        }
        
        .stat-value {
          color: #7f8c8d;
        }
        
        .user-transactions h4 {
          margin: 0 0 15px;
          color: #2c3e50;
        }
        
        .user-transaction {
          padding: 10px 0;
          border-bottom: 1px solid #f1f3f4;
        }
        
        .user-transaction:last-child {
          border-bottom: none;
        }
        
        .transaction-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        
        .transaction-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #7f8c8d;
        }
        
        .select-user-prompt {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 300px;
          color: #7f8c8d;
          text-align: center;
        }
        
        .select-user-prompt svg {
          margin-bottom: 15px;
          opacity: 0.5;
        }
        
        .loading-container {
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
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 992px) {
          .transactions-container {
            flex-direction: column;
          }
          
          .user-details-panel {
            width: 100%;
          }
          
          .controls-row {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .search-box {
            width: 100%;
          }
        }
      `})]})},pC=()=>{const[r,e]=P.useState(""),[n,s]=P.useState(""),[o,c]=P.useState(""),h=xs(),p=async g=>{g.preventDefault(),c("");try{(await $_(va,r,n)).user.email==="admin@goldcorps.org"?h("/admin"):c("❌ Unauthorized: You are not the admin.")}catch(y){c("⚠️ Login failed: "+y.message)}};return u.jsxs("div",{className:"admin-login-container",children:[u.jsxs("form",{onSubmit:p,className:"admin-login-form",children:[u.jsxs("div",{className:"form-header",children:[u.jsx(t2,{className:"shield-icon"}),u.jsx("h2",{children:"Admin Access"})]}),o&&u.jsx("div",{className:"error-box",children:o}),u.jsxs("div",{className:"input-group",children:[u.jsx(t2,{className:"input-icon"}),u.jsx("input",{type:"email",placeholder:"Admin Email",value:r,onChange:g=>e(g.target.value),required:!0})]}),u.jsxs("div",{className:"input-group",children:[u.jsx(T3,{className:"input-icon"}),u.jsx("input",{type:"password",placeholder:"Admin Password",value:n,onChange:g=>s(g.target.value),required:!0})]}),u.jsx("button",{type:"submit",className:"login-btn",children:"Login"})]}),u.jsx("style",{children:`
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
      `})]})};function mC(){return u.jsxs(u.Fragment,{children:[u.jsx(lg,{}),u.jsx(t3,{}),u.jsx(j3,{}),u.jsx(O3,{}),u.jsx(U3,{})]})}function gC(){return u.jsxs(lT,{children:[u.jsx(Xn,{path:"/",element:u.jsx(mC,{})}),u.jsx(Xn,{path:"/login",element:u.jsx(iC,{})}),u.jsx(Xn,{path:"/signup",element:u.jsx(sC,{})}),u.jsx(Xn,{path:"/dashboard",element:u.jsx(rC,{})}),u.jsx(Xn,{path:"/profile",element:u.jsx(oC,{})}),u.jsx(Xn,{path:"/messages",element:u.jsx(hC,{})}),u.jsx(Xn,{path:"/management",element:u.jsx(fC,{})}),u.jsx(Xn,{path:"/stock",element:u.jsx(aC,{})}),u.jsx(Xn,{path:"/admin",element:u.jsx(uC,{})}),u.jsx(Xn,{path:"/admin-login",element:u.jsx(pC,{})}),u.jsx(Xn,{path:"*",element:u.jsx(lC,{})})," "]})}vw.createRoot(document.getElementById("root")).render(u.jsx(P.StrictMode,{children:u.jsx(jT,{children:u.jsx(gC,{})})}));
