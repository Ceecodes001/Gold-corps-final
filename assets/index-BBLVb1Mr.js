(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lw(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Vp={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function Uw(){if(W0)return Ll;W0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:i,type:a,key:f,ref:o!==void 0?o:null,props:c}}return Ll.Fragment=e,Ll.jsx=n,Ll.jsxs=n,Ll}var Z0;function zw(){return Z0||(Z0=1,Vp.exports=Uw()),Vp.exports}var y=zw(),jp={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function Bw(){if(J0)return De;J0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),T=Symbol.iterator;function w(L){return L===null||typeof L!="object"?null:(L=T&&L[T]||L["@@iterator"],typeof L=="function"?L:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,V={};function M(L,ne,ce){this.props=L,this.context=ne,this.refs=V,this.updater=ce||x}M.prototype.isReactComponent={},M.prototype.setState=function(L,ne){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ne,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function U(){}U.prototype=M.prototype;function Y(L,ne,ce){this.props=L,this.context=ne,this.refs=V,this.updater=ce||x}var q=Y.prototype=new U;q.constructor=Y,O(q,M.prototype),q.isPureReactComponent=!0;var te=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},J=Object.prototype.hasOwnProperty;function k(L,ne,ce,le,ge,Ne){return ce=Ne.ref,{$$typeof:i,type:L,key:ne,ref:ce!==void 0?ce:null,props:Ne}}function R(L,ne){return k(L.type,ne,void 0,void 0,void 0,L.props)}function N(L){return typeof L=="object"&&L!==null&&L.$$typeof===i}function P(L){var ne={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ce){return ne[ce]})}var I=/\/+/g;function C(L,ne){return typeof L=="object"&&L!==null&&L.key!=null?P(""+L.key):ne.toString(36)}function D(){}function ue(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(D,D):(L.status="pending",L.then(function(ne){L.status==="pending"&&(L.status="fulfilled",L.value=ne)},function(ne){L.status==="pending"&&(L.status="rejected",L.reason=ne)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function Re(L,ne,ce,le,ge){var Ne=typeof L;(Ne==="undefined"||Ne==="boolean")&&(L=null);var _e=!1;if(L===null)_e=!0;else switch(Ne){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(L.$$typeof){case i:case e:_e=!0;break;case _:return _e=L._init,Re(_e(L._payload),ne,ce,le,ge)}}if(_e)return ge=ge(L),_e=le===""?"."+C(L,0):le,te(ge)?(ce="",_e!=null&&(ce=_e.replace(I,"$&/")+"/"),Re(ge,ne,ce,"",function(ft){return ft})):ge!=null&&(N(ge)&&(ge=R(ge,ce+(ge.key==null||L&&L.key===ge.key?"":(""+ge.key).replace(I,"$&/")+"/")+_e)),ne.push(ge)),1;_e=0;var tt=le===""?".":le+":";if(te(L))for(var Te=0;Te<L.length;Te++)le=L[Te],Ne=tt+C(le,Te),_e+=Re(le,ne,ce,Ne,ge);else if(Te=w(L),typeof Te=="function")for(L=Te.call(L),Te=0;!(le=L.next()).done;)le=le.value,Ne=tt+C(le,Te++),_e+=Re(le,ne,ce,Ne,ge);else if(Ne==="object"){if(typeof L.then=="function")return Re(ue(L),ne,ce,le,ge);throw ne=String(L),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return _e}function Q(L,ne,ce){if(L==null)return L;var le=[],ge=0;return Re(L,le,"","",function(Ne){return ne.call(ce,Ne,ge++)}),le}function oe(L){if(L._status===-1){var ne=L._result;ne=ne(),ne.then(function(ce){(L._status===0||L._status===-1)&&(L._status=1,L._result=ce)},function(ce){(L._status===0||L._status===-1)&&(L._status=2,L._result=ce)}),L._status===-1&&(L._status=0,L._result=ne)}if(L._status===1)return L._result.default;throw L._result}var fe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Ie(){}return De.Children={map:Q,forEach:function(L,ne,ce){Q(L,function(){ne.apply(this,arguments)},ce)},count:function(L){var ne=0;return Q(L,function(){ne++}),ne},toArray:function(L){return Q(L,function(ne){return ne})||[]},only:function(L){if(!N(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},De.Component=M,De.Fragment=n,De.Profiler=o,De.PureComponent=Y,De.StrictMode=a,De.Suspense=m,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,De.__COMPILER_RUNTIME={__proto__:null,c:function(L){return Z.H.useMemoCache(L)}},De.cache=function(L){return function(){return L.apply(null,arguments)}},De.cloneElement=function(L,ne,ce){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var le=O({},L.props),ge=L.key,Ne=void 0;if(ne!=null)for(_e in ne.ref!==void 0&&(Ne=void 0),ne.key!==void 0&&(ge=""+ne.key),ne)!J.call(ne,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&ne.ref===void 0||(le[_e]=ne[_e]);var _e=arguments.length-2;if(_e===1)le.children=ce;else if(1<_e){for(var tt=Array(_e),Te=0;Te<_e;Te++)tt[Te]=arguments[Te+2];le.children=tt}return k(L.type,ge,void 0,void 0,Ne,le)},De.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},De.createElement=function(L,ne,ce){var le,ge={},Ne=null;if(ne!=null)for(le in ne.key!==void 0&&(Ne=""+ne.key),ne)J.call(ne,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(ge[le]=ne[le]);var _e=arguments.length-2;if(_e===1)ge.children=ce;else if(1<_e){for(var tt=Array(_e),Te=0;Te<_e;Te++)tt[Te]=arguments[Te+2];ge.children=tt}if(L&&L.defaultProps)for(le in _e=L.defaultProps,_e)ge[le]===void 0&&(ge[le]=_e[le]);return k(L,Ne,void 0,void 0,null,ge)},De.createRef=function(){return{current:null}},De.forwardRef=function(L){return{$$typeof:p,render:L}},De.isValidElement=N,De.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:oe}},De.memo=function(L,ne){return{$$typeof:g,type:L,compare:ne===void 0?null:ne}},De.startTransition=function(L){var ne=Z.T,ce={};Z.T=ce;try{var le=L(),ge=Z.S;ge!==null&&ge(ce,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(Ie,fe)}catch(Ne){fe(Ne)}finally{Z.T=ne}},De.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},De.use=function(L){return Z.H.use(L)},De.useActionState=function(L,ne,ce){return Z.H.useActionState(L,ne,ce)},De.useCallback=function(L,ne){return Z.H.useCallback(L,ne)},De.useContext=function(L){return Z.H.useContext(L)},De.useDebugValue=function(){},De.useDeferredValue=function(L,ne){return Z.H.useDeferredValue(L,ne)},De.useEffect=function(L,ne,ce){var le=Z.H;if(typeof ce=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return le.useEffect(L,ne)},De.useId=function(){return Z.H.useId()},De.useImperativeHandle=function(L,ne,ce){return Z.H.useImperativeHandle(L,ne,ce)},De.useInsertionEffect=function(L,ne){return Z.H.useInsertionEffect(L,ne)},De.useLayoutEffect=function(L,ne){return Z.H.useLayoutEffect(L,ne)},De.useMemo=function(L,ne){return Z.H.useMemo(L,ne)},De.useOptimistic=function(L,ne){return Z.H.useOptimistic(L,ne)},De.useReducer=function(L,ne,ce){return Z.H.useReducer(L,ne,ce)},De.useRef=function(L){return Z.H.useRef(L)},De.useState=function(L){return Z.H.useState(L)},De.useSyncExternalStore=function(L,ne,ce){return Z.H.useSyncExternalStore(L,ne,ce)},De.useTransition=function(){return Z.H.useTransition()},De.version="19.1.1",De}var e1;function si(){return e1||(e1=1,jp.exports=Bw()),jp.exports}var B=si();const Qa=Lw(B);var Lp={exports:{}},Ul={},Up={exports:{}},zp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1;function Hw(){return t1||(t1=1,(function(i){function e(Q,oe){var fe=Q.length;Q.push(oe);e:for(;0<fe;){var Ie=fe-1>>>1,L=Q[Ie];if(0<o(L,oe))Q[Ie]=oe,Q[fe]=L,fe=Ie;else break e}}function n(Q){return Q.length===0?null:Q[0]}function a(Q){if(Q.length===0)return null;var oe=Q[0],fe=Q.pop();if(fe!==oe){Q[0]=fe;e:for(var Ie=0,L=Q.length,ne=L>>>1;Ie<ne;){var ce=2*(Ie+1)-1,le=Q[ce],ge=ce+1,Ne=Q[ge];if(0>o(le,fe))ge<L&&0>o(Ne,le)?(Q[Ie]=Ne,Q[ge]=fe,Ie=ge):(Q[Ie]=le,Q[ce]=fe,Ie=ce);else if(ge<L&&0>o(Ne,fe))Q[Ie]=Ne,Q[ge]=fe,Ie=ge;else break e}}return oe}function o(Q,oe){var fe=Q.sortIndex-oe.sortIndex;return fe!==0?fe:Q.id-oe.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();i.unstable_now=function(){return f.now()-p}}var m=[],g=[],_=1,T=null,w=3,x=!1,O=!1,V=!1,M=!1,U=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function te(Q){for(var oe=n(g);oe!==null;){if(oe.callback===null)a(g);else if(oe.startTime<=Q)a(g),oe.sortIndex=oe.expirationTime,e(m,oe);else break;oe=n(g)}}function Z(Q){if(V=!1,te(Q),!O)if(n(m)!==null)O=!0,J||(J=!0,C());else{var oe=n(g);oe!==null&&Re(Z,oe.startTime-Q)}}var J=!1,k=-1,R=5,N=-1;function P(){return M?!0:!(i.unstable_now()-N<R)}function I(){if(M=!1,J){var Q=i.unstable_now();N=Q;var oe=!0;try{e:{O=!1,V&&(V=!1,Y(k),k=-1),x=!0;var fe=w;try{t:{for(te(Q),T=n(m);T!==null&&!(T.expirationTime>Q&&P());){var Ie=T.callback;if(typeof Ie=="function"){T.callback=null,w=T.priorityLevel;var L=Ie(T.expirationTime<=Q);if(Q=i.unstable_now(),typeof L=="function"){T.callback=L,te(Q),oe=!0;break t}T===n(m)&&a(m),te(Q)}else a(m);T=n(m)}if(T!==null)oe=!0;else{var ne=n(g);ne!==null&&Re(Z,ne.startTime-Q),oe=!1}}break e}finally{T=null,w=fe,x=!1}oe=void 0}}finally{oe?C():J=!1}}}var C;if(typeof q=="function")C=function(){q(I)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,ue=D.port2;D.port1.onmessage=I,C=function(){ue.postMessage(null)}}else C=function(){U(I,0)};function Re(Q,oe){k=U(function(){Q(i.unstable_now())},oe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Q){Q.callback=null},i.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Q?Math.floor(1e3/Q):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(Q){switch(w){case 1:case 2:case 3:var oe=3;break;default:oe=w}var fe=w;w=oe;try{return Q()}finally{w=fe}},i.unstable_requestPaint=function(){M=!0},i.unstable_runWithPriority=function(Q,oe){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var fe=w;w=Q;try{return oe()}finally{w=fe}},i.unstable_scheduleCallback=function(Q,oe,fe){var Ie=i.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?Ie+fe:Ie):fe=Ie,Q){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=fe+L,Q={id:_++,callback:oe,priorityLevel:Q,startTime:fe,expirationTime:L,sortIndex:-1},fe>Ie?(Q.sortIndex=fe,e(g,Q),n(m)===null&&Q===n(g)&&(V?(Y(k),k=-1):V=!0,Re(Z,fe-Ie))):(Q.sortIndex=L,e(m,Q),O||x||(O=!0,J||(J=!0,C()))),Q},i.unstable_shouldYield=P,i.unstable_wrapCallback=function(Q){var oe=w;return function(){var fe=w;w=oe;try{return Q.apply(this,arguments)}finally{w=fe}}}})(zp)),zp}var n1;function qw(){return n1||(n1=1,Up.exports=Hw()),Up.exports}var Bp={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function Fw(){if(r1)return Zt;r1=1;var i=si();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,g,_){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:""+T,children:m,containerInfo:g,implementation:_}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Zt.createPortal=function(m,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return c(m,g,null,_)},Zt.flushSync=function(m){var g=f.T,_=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=g,a.p=_,a.d.f()}},Zt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(m,g))},Zt.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Zt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var _=g.as,T=p(_,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:x}):_==="script"&&a.d.X(m,{crossOrigin:T,integrity:w,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Zt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=p(g.as,g.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(m)},Zt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,T=p(_,g.crossOrigin);a.d.L(m,_,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Zt.preloadModule=function(m,g){if(typeof m=="string")if(g){var _=p(g.as,g.crossOrigin);a.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(m)},Zt.requestFormReset=function(m){a.d.r(m)},Zt.unstable_batchedUpdates=function(m,g){return m(g)},Zt.useFormState=function(m,g,_){return f.H.useFormState(m,g,_)},Zt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Zt.version="19.1.1",Zt}var i1;function jm(){if(i1)return Bp.exports;i1=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Bp.exports=Fw(),Bp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1;function Gw(){if(a1)return Ul;a1=1;var i=qw(),e=si(),n=jm();function a(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var r=t,s=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(s=r.return),t=r.return;while(t)}return r.tag===3?s:null}function f(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function m(t){var r=t.alternate;if(!r){if(r=c(t),r===null)throw Error(a(188));return r!==t?null:t}for(var s=t,l=r;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return p(h),t;if(d===l)return p(h),r;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=d;else{for(var E=!1,S=h.child;S;){if(S===s){E=!0,s=h,l=d;break}if(S===l){E=!0,l=h,s=d;break}S=S.sibling}if(!E){for(S=d.child;S;){if(S===s){E=!0,s=d,l=h;break}if(S===l){E=!0,l=d,s=h;break}S=S.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:r}function g(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=g(t),r!==null)return r;t=t.sibling}return null}var _=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),q=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function C(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var D=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===D?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case M:return"Profiler";case V:return"StrictMode";case Z:return"Suspense";case J:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case x:return"Portal";case q:return(t.displayName||"Context")+".Provider";case Y:return(t._context.displayName||"Context")+".Consumer";case te:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return r=t.displayName||null,r!==null?r:ue(t.type)||"Memo";case R:r=t._payload,t=t._init;try{return ue(t(r))}catch{}}return null}var Re=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},Ie=[],L=-1;function ne(t){return{current:t}}function ce(t){0>L||(t.current=Ie[L],Ie[L]=null,L--)}function le(t,r){L++,Ie[L]=t.current,t.current=r}var ge=ne(null),Ne=ne(null),_e=ne(null),tt=ne(null);function Te(t,r){switch(le(_e,r),le(Ne,t),le(ge,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?x0(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=x0(r),t=A0(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ce(ge),le(ge,t)}function ft(){ce(ge),ce(Ne),ce(_e)}function $t(t){t.memoizedState!==null&&le(tt,t);var r=ge.current,s=A0(r,t.type);r!==s&&(le(Ne,t),le(ge,s))}function rn(t){Ne.current===t&&(ce(ge),ce(Ne)),tt.current===t&&(ce(tt),Pl._currentValue=fe)}var xr=Object.prototype.hasOwnProperty,la=i.unstable_scheduleCallback,ca=i.unstable_cancelCallback,No=i.unstable_shouldYield,Nc=i.unstable_requestPaint,xn=i.unstable_now,Vf=i.unstable_getCurrentPriorityLevel,Do=i.unstable_ImmediatePriority,ls=i.unstable_UserBlockingPriority,ua=i.unstable_NormalPriority,jf=i.unstable_LowPriority,cs=i.unstable_IdlePriority,Oo=i.log,Dc=i.unstable_setDisableYieldValue,dt=null,Qe=null;function mn(t){if(typeof Oo=="function"&&Dc(t),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(dt,t)}catch{}}var Xt=Math.clz32?Math.clz32:ha,Oc=Math.log,Lf=Math.LN2;function ha(t){return t>>>=0,t===0?32:31-(Oc(t)/Lf|0)|0}var fa=256,da=4194304;function Bn(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function us(t,r,s){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var S=l&134217727;return S!==0?(l=S&~d,l!==0?h=Bn(l):(E&=S,E!==0?h=Bn(E):s||(s=S&~t,s!==0&&(h=Bn(s))))):(S=l&~d,S!==0?h=Bn(S):E!==0?h=Bn(E):s||(s=l&~t,s!==0&&(h=Bn(s)))),h===0?0:r!==0&&r!==h&&(r&d)===0&&(d=h&-h,s=r&-r,d>=s||d===32&&(s&4194048)!==0)?r:h}function pa(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function Po(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ko(){var t=fa;return fa<<=1,(fa&4194048)===0&&(fa=256),t}function Mo(){var t=da;return da<<=1,(da&62914560)===0&&(da=4194304),t}function Ar(t){for(var r=[],s=0;31>s;s++)r.push(t);return r}function Rr(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Vo(t,r,s,l,h,d){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var S=t.entanglements,j=t.expirationTimes,K=t.hiddenUpdates;for(s=E&~s;0<s;){var ee=31-Xt(s),ae=1<<ee;S[ee]=0,j[ee]=-1;var $=K[ee];if($!==null)for(K[ee]=null,ee=0;ee<$.length;ee++){var X=$[ee];X!==null&&(X.lane&=-536870913)}s&=~ae}l!==0&&er(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~r))}function er(t,r,s){t.pendingLanes|=r,t.suspendedLanes&=~r;var l=31-Xt(r);t.entangledLanes|=r,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function jo(t,r){var s=t.entangledLanes|=r;for(t=t.entanglements;s;){var l=31-Xt(s),h=1<<l;h&r|t[l]&r&&(t[l]|=r),s&=~h}}function hi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function hs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fi(){var t=oe.p;return t!==0?t:(t=window.event,t===void 0?32:G0(t.type))}function Pc(t,r){var s=oe.p;try{return oe.p=t,r()}finally{oe.p=s}}var st=Math.random().toString(36).slice(2),It="__reactFiber$"+st,Et="__reactProps$"+st,An="__reactContainer$"+st,Lo="__reactEvents$"+st,Uf="__reactListeners$"+st,di="__reactHandles$"+st,kc="__reactResources$"+st,ma="__reactMarker$"+st;function pi(t){delete t[It],delete t[Et],delete t[Lo],delete t[Uf],delete t[di]}function Ir(t){var r=t[It];if(r)return r;for(var s=t.parentNode;s;){if(r=s[An]||s[It]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(t=N0(t);t!==null;){if(s=t[It])return s;t=N0(t)}return r}t=s,s=t.parentNode}return null}function tr(t){if(t=t[It]||t[An]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function nr(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(a(33))}function an(t){var r=t[kc];return r||(r=t[kc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function yt(t){t[ma]=!0}var Uo=new Set,fs={};function Hn(t,r){Cr(t,r),Cr(t+"Capture",r)}function Cr(t,r){for(fs[t]=r,t=0;t<r.length;t++)Uo.add(r[t])}var Mc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vc={},ga={};function jc(t){return xr.call(ga,t)?!0:xr.call(Vc,t)?!1:Mc.test(t)?ga[t]=!0:(Vc[t]=!0,!1)}function mi(t,r,s){if(jc(r))if(s===null)t.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+s)}}function rr(t,r,s){if(s===null)t.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+s)}}function Bt(t,r,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(r,s,""+l)}}var ya,Lc;function Nr(t){if(ya===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);ya=r&&r[1]||"",Lc=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ya+t+Lc}var ds=!1;function ps(t,r){if(!t||ds)return"";ds=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(X){var $=X}Reflect.construct(t,[],ae)}else{try{ae.call()}catch(X){$=X}t.call(ae.prototype)}}else{try{throw Error()}catch(X){$=X}(ae=t())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(X){if(X&&$&&typeof X.stack=="string")return[X.stack,$.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],S=d[1];if(E&&S){var j=E.split(`
`),K=S.split(`
`);for(h=l=0;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;for(;h<K.length&&!K[h].includes("DetermineComponentFrameRoot");)h++;if(l===j.length||h===K.length)for(l=j.length-1,h=K.length-1;1<=l&&0<=h&&j[l]!==K[h];)h--;for(;1<=l&&0<=h;l--,h--)if(j[l]!==K[h]){if(l!==1||h!==1)do if(l--,h--,0>h||j[l]!==K[h]){var ee=`
`+j[l].replace(" at new "," at ");return t.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",t.displayName)),ee}while(1<=l&&0<=h);break}}}finally{ds=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Nr(s):""}function zo(t){switch(t.tag){case 26:case 27:case 5:return Nr(t.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 15:return ps(t.type,!1);case 11:return ps(t.type.render,!1);case 1:return ps(t.type,!0);case 31:return Nr("Activity");default:return""}}function ms(t){try{var r="";do r+=zo(t),t=t.return;while(t);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function sn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bo(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function zf(t){var r=Bo(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,d=s.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(t,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function gs(t){t._valueTracker||(t._valueTracker=zf(t))}function Ho(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return t&&(l=Bo(t)?t.checked?"true":"false":t.value),t=l,t!==s?(r.setValue(t),!0):!1}function va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bf=/[\n"\\]/g;function Tt(t){return t.replace(Bf,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function gn(t,r,s,l,h,d,E,S){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),r!=null?E==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+sn(r)):t.value!==""+sn(r)&&(t.value=""+sn(r)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),r!=null?gi(t,E,sn(r)):s!=null?gi(t,E,sn(s)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.name=""+sn(S):t.removeAttribute("name")}function _a(t,r,s,l,h,d,E,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),r!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;s=s!=null?""+sn(s):"",r=r!=null?""+sn(r):s,S||r===t.value||(t.value=r),t.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=S?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function gi(t,r,s){r==="number"&&va(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Dr(t,r,s,l){if(t=t.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<t.length;s++)h=r.hasOwnProperty("$"+t[s].value),t[s].selected!==h&&(t[s].selected=h),h&&l&&(t[s].defaultSelected=!0)}else{for(s=""+sn(s),r=null,h=0;h<t.length;h++){if(t[h].value===s){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function Xe(t,r,s){if(r!=null&&(r=""+sn(r),r!==t.value&&(t.value=r),s==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=s!=null?""+sn(s):""}function ba(t,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(a(92));if(Re(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=sn(r),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function Rn(t,r){if(r){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=r;return}}t.textContent=r}var Ea=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uc(t,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":l?t.setProperty(r,s):typeof s!="number"||s===0||Ea.has(r)?r==="float"?t.cssFloat=s:t[r]=(""+s).trim():t[r]=s+"px"}function qo(t,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&s[h]!==l&&Uc(t,h,l)}else for(var d in r)r.hasOwnProperty(d)&&Uc(t,d,r[d])}function Fo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ys(t){return qf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Or=null;function In(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pr=null,kr=null;function Go(t){var r=tr(t);if(r&&(t=r.stateNode)){var s=t[Et]||null;e:switch(t=r.stateNode,r.type){case"input":if(gn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Tt(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==t&&l.form===t.form){var h=l[Et]||null;if(!h)throw Error(a(90));gn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===t.form&&Ho(l)}break e;case"textarea":Xe(t,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&Dr(t,!!s.multiple,r,!1)}}}var ir=!1;function zc(t,r,s){if(ir)return t(r,s);ir=!0;try{var l=t(r);return l}finally{if(ir=!1,(Pr!==null||kr!==null)&&(Pu(),Pr&&(r=Pr,t=kr,kr=Pr=null,Go(r),t)))for(r=0;r<t.length;r++)Go(t[r])}}function Ta(t,r){var s=t.stateNode;if(s===null)return null;var l=s[Et]||null;if(l===null)return null;s=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cn=!1;if(qn)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){Cn=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{Cn=!1}var ar=null,yi=null,Mr=null;function Yo(){if(Mr)return Mr;var t,r=yi,s=r.length,l,h="value"in ar?ar.value:ar.textContent,d=h.length;for(t=0;t<s&&r[t]===h[t];t++);var E=s-t;for(l=1;l<=E&&r[s-l]===h[d-l];l++);return Mr=h.slice(t,1<l?1-l:void 0)}function sr(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function or(){return!0}function Qo(){return!1}function Mt(t){function r(s,l,h,d,E){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var S in t)t.hasOwnProperty(S)&&(s=t[S],this[S]=s?s(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?or:Qo,this.isPropagationStopped=Qo,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),r}var Ge={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=Mt(Ge),Sa=_({},Ge,{view:0,detail:0}),Bc=Mt(Sa),_s,bs,lr,xa=_({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lr&&(lr&&t.type==="mousemove"?(_s=t.screenX-lr.screenX,bs=t.screenY-lr.screenY):bs=_s=0,lr=t),_s)},movementY:function(t){return"movementY"in t?t.movementY:bs}}),Nn=Mt(xa),Hc=_({},xa,{dataTransfer:0}),Ff=Mt(Hc),Aa=_({},Sa,{relatedTarget:0}),Es=Mt(Aa),Ko=_({},Ge,{animationName:0,elapsedTime:0,pseudoElement:0}),Ts=Mt(Ko),qc=_({},Ge,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ws=Mt(qc),Gf=_({},Ge,{data:0}),$o=Mt(Gf),Ra={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xo(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Gc[t])?!!r[t]:!1}function Ia(){return Xo}var Yc=_({},Sa,{key:function(t){if(t.key){var r=Ra[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=sr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fc[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(t){return t.type==="keypress"?sr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ss=Mt(Yc),Qc=_({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wo=Mt(Qc),Vr=_({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),Kc=Mt(Vr),$c=_({},Ge,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xc=Mt($c),Wc=_({},xa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xs=Mt(Wc),on=_({},Ge,{newState:0,oldState:0}),Zc=Mt(on),Jc=[9,13,27,32],cr=qn&&"CompositionEvent"in window,u=null;qn&&"documentMode"in document&&(u=document.documentMode);var v=qn&&"TextEvent"in window&&!u,b=qn&&(!cr||u&&8<u&&11>=u),A=" ",F=!1;function W(t,r){switch(t){case"keyup":return Jc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ue=!1;function Ct(t,r){switch(t){case"compositionend":return he(r);case"keypress":return r.which!==32?null:(F=!0,A);case"textInput":return t=r.data,t===A&&F?null:t;default:return null}}function ze(t,r){if(Ue)return t==="compositionend"||!cr&&W(t,r)?(t=Yo(),Mr=yi=ar=null,Ue=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return b&&r.locale!=="ko"?null:r.data;default:return null}}var Vt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nt(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Vt[t.type]:r==="textarea"}function jr(t,r,s,l){Pr?kr?kr.push(l):kr=[l]:Pr=l,r=Uu(r,"onChange"),0<r.length&&(s=new vs("onChange","change",null,s,l),t.push({event:s,listeners:r}))}var Ht=null,ur=null;function Zo(t){b0(t,0)}function eu(t){var r=nr(t);if(Ho(r))return t}function Bg(t,r){if(t==="change")return r}var Hg=!1;if(qn){var Yf;if(qn){var Qf="oninput"in document;if(!Qf){var qg=document.createElement("div");qg.setAttribute("oninput","return;"),Qf=typeof qg.oninput=="function"}Yf=Qf}else Yf=!1;Hg=Yf&&(!document.documentMode||9<document.documentMode)}function Fg(){Ht&&(Ht.detachEvent("onpropertychange",Gg),ur=Ht=null)}function Gg(t){if(t.propertyName==="value"&&eu(ur)){var r=[];jr(r,ur,t,In(t)),zc(Zo,r)}}function pT(t,r,s){t==="focusin"?(Fg(),Ht=r,ur=s,Ht.attachEvent("onpropertychange",Gg)):t==="focusout"&&Fg()}function mT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(ur)}function gT(t,r){if(t==="click")return eu(r)}function yT(t,r){if(t==="input"||t==="change")return eu(r)}function vT(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var yn=typeof Object.is=="function"?Object.is:vT;function Jo(t,r){if(yn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var s=Object.keys(t),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!xr.call(r,h)||!yn(t[h],r[h]))return!1}return!0}function Yg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qg(t,r){var s=Yg(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=r&&l>=r)return{node:s,offset:r-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Yg(s)}}function Kg(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Kg(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function $g(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=va(t.document);r instanceof t.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)t=r.contentWindow;else break;r=va(t.document)}return r}function Kf(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var _T=qn&&"documentMode"in document&&11>=document.documentMode,As=null,$f=null,el=null,Xf=!1;function Xg(t,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Xf||As==null||As!==va(l)||(l=As,"selectionStart"in l&&Kf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),el&&Jo(el,l)||(el=l,l=Uu($f,"onSelect"),0<l.length&&(r=new vs("onSelect","select",null,r,s),t.push({event:r,listeners:l}),r.target=As)))}function Ca(t,r){var s={};return s[t.toLowerCase()]=r.toLowerCase(),s["Webkit"+t]="webkit"+r,s["Moz"+t]="moz"+r,s}var Rs={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Wf={},Wg={};qn&&(Wg=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Na(t){if(Wf[t])return Wf[t];if(!Rs[t])return t;var r=Rs[t],s;for(s in r)if(r.hasOwnProperty(s)&&s in Wg)return Wf[t]=r[s];return t}var Zg=Na("animationend"),Jg=Na("animationiteration"),ey=Na("animationstart"),bT=Na("transitionrun"),ET=Na("transitionstart"),TT=Na("transitioncancel"),ty=Na("transitionend"),ny=new Map,Zf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zf.push("scrollEnd");function Fn(t,r){ny.set(t,r),Hn(r,[t])}var ry=new WeakMap;function Dn(t,r){if(typeof t=="object"&&t!==null){var s=ry.get(t);return s!==void 0?s:(r={value:t,source:r,stack:ms(r)},ry.set(t,r),r)}return{value:t,source:r,stack:ms(r)}}var On=[],Is=0,Jf=0;function tu(){for(var t=Is,r=Jf=Is=0;r<t;){var s=On[r];On[r++]=null;var l=On[r];On[r++]=null;var h=On[r];On[r++]=null;var d=On[r];if(On[r++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}d!==0&&iy(s,h,d)}}function nu(t,r,s,l){On[Is++]=t,On[Is++]=r,On[Is++]=s,On[Is++]=l,Jf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ed(t,r,s,l){return nu(t,r,s,l),ru(t)}function Cs(t,r){return nu(t,null,null,r),ru(t)}function iy(t,r,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var h=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&r!==null&&(h=31-Xt(s),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[r]:l.push(r),r.lane=s|536870912),d):null}function ru(t){if(50<xl)throw xl=0,sp=null,Error(a(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var Ns={};function wT(t,r,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,r,s,l){return new wT(t,r,s,l)}function td(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lr(t,r){var s=t.alternate;return s===null?(s=vn(t.tag,r,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=r,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,r=t.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function ay(t,r){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,r=s.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function iu(t,r,s,l,h,d){var E=0;if(l=t,typeof t=="function")td(t)&&(E=1);else if(typeof t=="string")E=xw(t,s,ge.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=vn(31,s,r,h),t.elementType=N,t.lanes=d,t;case O:return Da(s.children,h,d,r);case V:E=8,h|=24;break;case M:return t=vn(12,s,r,h|2),t.elementType=M,t.lanes=d,t;case Z:return t=vn(13,s,r,h),t.elementType=Z,t.lanes=d,t;case J:return t=vn(19,s,r,h),t.elementType=J,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:case q:E=10;break e;case Y:E=9;break e;case te:E=11;break e;case k:E=14;break e;case R:E=16,l=null;break e}E=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return r=vn(E,s,r,h),r.elementType=t,r.type=l,r.lanes=d,r}function Da(t,r,s,l){return t=vn(7,t,l,r),t.lanes=s,t}function nd(t,r,s){return t=vn(6,t,null,r),t.lanes=s,t}function rd(t,r,s){return r=vn(4,t.children!==null?t.children:[],t.key,r),r.lanes=s,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var Ds=[],Os=0,au=null,su=0,Pn=[],kn=0,Oa=null,Ur=1,zr="";function Pa(t,r){Ds[Os++]=su,Ds[Os++]=au,au=t,su=r}function sy(t,r,s){Pn[kn++]=Ur,Pn[kn++]=zr,Pn[kn++]=Oa,Oa=t;var l=Ur;t=zr;var h=32-Xt(l)-1;l&=~(1<<h),s+=1;var d=32-Xt(r)+h;if(30<d){var E=h-h%5;d=(l&(1<<E)-1).toString(32),l>>=E,h-=E,Ur=1<<32-Xt(r)+h|s<<h|l,zr=d+t}else Ur=1<<d|s<<h|l,zr=t}function id(t){t.return!==null&&(Pa(t,1),sy(t,1,0))}function ad(t){for(;t===au;)au=Ds[--Os],Ds[Os]=null,su=Ds[--Os],Ds[Os]=null;for(;t===Oa;)Oa=Pn[--kn],Pn[kn]=null,zr=Pn[--kn],Pn[kn]=null,Ur=Pn[--kn],Pn[kn]=null}var ln=null,pt=null,Fe=!1,ka=null,hr=!1,sd=Error(a(519));function Ma(t){var r=Error(a(418,""));throw rl(Dn(r,t)),sd}function oy(t){var r=t.stateNode,s=t.type,l=t.memoizedProps;switch(r[It]=t,r[Et]=l,s){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(s=0;s<Rl.length;s++)Me(Rl[s],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Me("invalid",r),_a(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),gs(r);break;case"select":Me("invalid",r);break;case"textarea":Me("invalid",r),ba(r,l.value,l.defaultValue,l.children),gs(r)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||S0(r.textContent,s)?(l.popover!=null&&(Me("beforetoggle",r),Me("toggle",r)),l.onScroll!=null&&Me("scroll",r),l.onScrollEnd!=null&&Me("scrollend",r),l.onClick!=null&&(r.onclick=zu),r=!0):r=!1,r||Ma(t)}function ly(t){for(ln=t.return;ln;)switch(ln.tag){case 5:case 13:hr=!1;return;case 27:case 3:hr=!0;return;default:ln=ln.return}}function tl(t){if(t!==ln)return!1;if(!Fe)return ly(t),Fe=!0,!1;var r=t.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Tp(t.type,t.memoizedProps)),s=!s),s&&pt&&Ma(t),ly(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(r===0){pt=Yn(t.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;t=t.nextSibling}pt=null}}else r===27?(r=pt,Pi(t.type)?(t=Ap,Ap=null,pt=t):pt=r):pt=ln?Yn(t.stateNode.nextSibling):null;return!0}function nl(){pt=ln=null,Fe=!1}function cy(){var t=ka;return t!==null&&(fn===null?fn=t:fn.push.apply(fn,t),ka=null),t}function rl(t){ka===null?ka=[t]:ka.push(t)}var od=ne(null),Va=null,Br=null;function vi(t,r,s){le(od,r._currentValue),r._currentValue=s}function Hr(t){t._currentValue=od.current,ce(od)}function ld(t,r,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===s)break;t=t.return}}function cd(t,r,s,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var E=h.child;d=d.firstContext;e:for(;d!==null;){var S=d;d=h;for(var j=0;j<r.length;j++)if(S.context===r[j]){d.lanes|=s,S=d.alternate,S!==null&&(S.lanes|=s),ld(d.return,s,t),l||(E=null);break e}d=S.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,d=E.alternate,d!==null&&(d.lanes|=s),ld(E,s,t),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===t){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function il(t,r,s,l){t=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var S=h.type;yn(h.pendingProps.value,E.value)||(t!==null?t.push(S):t=[S])}}else if(h===tt.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Pl):t=[Pl])}h=h.return}t!==null&&cd(r,t,s,l),r.flags|=262144}function ou(t){for(t=t.firstContext;t!==null;){if(!yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ja(t){Va=t,Br=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wt(t){return uy(Va,t)}function lu(t,r){return Va===null&&ja(t),uy(t,r)}function uy(t,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Br===null){if(t===null)throw Error(a(308));Br=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Br=Br.next=r;return s}var ST=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){r.aborted=!0,t.forEach(function(s){return s()})}},xT=i.unstable_scheduleCallback,AT=i.unstable_NormalPriority,Dt={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ud(){return{controller:new ST,data:new Map,refCount:0}}function al(t){t.refCount--,t.refCount===0&&xT(AT,function(){t.controller.abort()})}var sl=null,hd=0,Ps=0,ks=null;function RT(t,r){if(sl===null){var s=sl=[];hd=0,Ps=dp(),ks={status:"pending",value:void 0,then:function(l){s.push(l)}}}return hd++,r.then(hy,hy),r}function hy(){if(--hd===0&&sl!==null){ks!==null&&(ks.status="fulfilled");var t=sl;sl=null,Ps=0,ks=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function IT(t,r){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return t.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var fy=Q.S;Q.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&RT(t,r),fy!==null&&fy(t,r)};var La=ne(null);function fd(){var t=La.current;return t!==null?t:it.pooledCache}function cu(t,r){r===null?le(La,La.current):le(La,r.pool)}function dy(){var t=fd();return t===null?null:{parent:Dt._currentValue,pool:t}}var ol=Error(a(460)),py=Error(a(474)),uu=Error(a(542)),dd={then:function(){}};function my(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hu(){}function gy(t,r,s){switch(s=t[s],s===void 0?t.push(r):s!==r&&(r.then(hu,hu),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,vy(t),t;default:if(typeof r.status=="string")r.then(hu,hu);else{if(t=it,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=r,t.status="pending",t.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,vy(t),t}throw ll=r,ol}}var ll=null;function yy(){if(ll===null)throw Error(a(459));var t=ll;return ll=null,t}function vy(t){if(t===ol||t===uu)throw Error(a(483))}var _i=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function md(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function bi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ei(t,r,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ke&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=ru(t),iy(t,null,s),r}return nu(t,l,r,s),ru(t)}function cl(t,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=t.pendingLanes,s|=l,r.lanes=s,jo(t,s)}}function gd(t,r){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=E:d=d.next=E,s=s.next}while(s!==null);d===null?h=d=r:d=d.next=r}else h=d=r;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=r:t.next=r,s.lastBaseUpdate=r}var yd=!1;function ul(){if(yd){var t=ks;if(t!==null)throw t}}function hl(t,r,s,l){yd=!1;var h=t.updateQueue;_i=!1;var d=h.firstBaseUpdate,E=h.lastBaseUpdate,S=h.shared.pending;if(S!==null){h.shared.pending=null;var j=S,K=j.next;j.next=null,E===null?d=K:E.next=K,E=j;var ee=t.alternate;ee!==null&&(ee=ee.updateQueue,S=ee.lastBaseUpdate,S!==E&&(S===null?ee.firstBaseUpdate=K:S.next=K,ee.lastBaseUpdate=j))}if(d!==null){var ae=h.baseState;E=0,ee=K=j=null,S=d;do{var $=S.lane&-536870913,X=$!==S.lane;if(X?(Be&$)===$:(l&$)===$){$!==0&&$===Ps&&(yd=!0),ee!==null&&(ee=ee.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var xe=t,be=S;$=r;var Je=s;switch(be.tag){case 1:if(xe=be.payload,typeof xe=="function"){ae=xe.call(Je,ae,$);break e}ae=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=be.payload,$=typeof xe=="function"?xe.call(Je,ae,$):xe,$==null)break e;ae=_({},ae,$);break e;case 2:_i=!0}}$=S.callback,$!==null&&(t.flags|=64,X&&(t.flags|=8192),X=h.callbacks,X===null?h.callbacks=[$]:X.push($))}else X={lane:$,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ee===null?(K=ee=X,j=ae):ee=ee.next=X,E|=$;if(S=S.next,S===null){if(S=h.shared.pending,S===null)break;X=S,S=X.next,X.next=null,h.lastBaseUpdate=X,h.shared.pending=null}}while(!0);ee===null&&(j=ae),h.baseState=j,h.firstBaseUpdate=K,h.lastBaseUpdate=ee,d===null&&(h.shared.lanes=0),Ci|=E,t.lanes=E,t.memoizedState=ae}}function _y(t,r){if(typeof t!="function")throw Error(a(191,t));t.call(r)}function by(t,r){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)_y(s[t],r)}var Ms=ne(null),fu=ne(0);function Ey(t,r){t=$r,le(fu,t),le(Ms,r),$r=t|r.baseLanes}function vd(){le(fu,$r),le(Ms,Ms.current)}function _d(){$r=fu.current,ce(Ms),ce(fu)}var Ti=0,Oe=null,We=null,wt=null,du=!1,Vs=!1,Ua=!1,pu=0,fl=0,js=null,CT=0;function vt(){throw Error(a(321))}function bd(t,r){if(r===null)return!1;for(var s=0;s<r.length&&s<t.length;s++)if(!yn(t[s],r[s]))return!1;return!0}function Ed(t,r,s,l,h,d){return Ti=d,Oe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Q.H=t===null||t.memoizedState===null?iv:av,Ua=!1,d=s(l,h),Ua=!1,Vs&&(d=wy(r,s,l,h)),Ty(t),d}function Ty(t){Q.H=bu;var r=We!==null&&We.next!==null;if(Ti=0,wt=We=Oe=null,du=!1,fl=0,js=null,r)throw Error(a(300));t===null||jt||(t=t.dependencies,t!==null&&ou(t)&&(jt=!0))}function wy(t,r,s,l){Oe=t;var h=0;do{if(Vs&&(js=null),fl=0,Vs=!1,25<=h)throw Error(a(301));if(h+=1,wt=We=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Q.H=VT,d=r(s,l)}while(Vs);return d}function NT(){var t=Q.H,r=t.useState()[0];return r=typeof r.then=="function"?dl(r):r,t=t.useState()[0],(We!==null?We.memoizedState:null)!==t&&(Oe.flags|=1024),r}function Td(){var t=pu!==0;return pu=0,t}function wd(t,r,s){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~s}function Sd(t){if(du){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}du=!1}Ti=0,wt=We=Oe=null,Vs=!1,fl=pu=0,js=null}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Oe.memoizedState=wt=t:wt=wt.next=t,wt}function St(){if(We===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var r=wt===null?Oe.memoizedState:wt.next;if(r!==null)wt=r,We=t;else{if(t===null)throw Oe.alternate===null?Error(a(467)):Error(a(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},wt===null?Oe.memoizedState=wt=t:wt=wt.next=t}return wt}function xd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dl(t){var r=fl;return fl+=1,js===null&&(js=[]),t=gy(js,t,r),r=Oe,(wt===null?r.memoizedState:wt.next)===null&&(r=r.alternate,Q.H=r===null||r.memoizedState===null?iv:av),t}function mu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return dl(t);if(t.$$typeof===q)return Wt(t)}throw Error(a(438,String(t)))}function Ad(t){var r=null,s=Oe.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=xd(),Oe.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(t),l=0;l<t;l++)s[l]=P;return r.index++,s}function qr(t,r){return typeof r=="function"?r(t):r}function gu(t){var r=St();return Rd(r,We,t)}function Rd(t,r,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var E=h.next;h.next=d.next,d.next=E}r.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{r=h.next;var S=E=null,j=null,K=r,ee=!1;do{var ae=K.lane&-536870913;if(ae!==K.lane?(Be&ae)===ae:(Ti&ae)===ae){var $=K.revertLane;if($===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),ae===Ps&&(ee=!0);else if((Ti&$)===$){K=K.next,$===Ps&&(ee=!0);continue}else ae={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},j===null?(S=j=ae,E=d):j=j.next=ae,Oe.lanes|=$,Ci|=$;ae=K.action,Ua&&s(d,ae),d=K.hasEagerState?K.eagerState:s(d,ae)}else $={lane:ae,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},j===null?(S=j=$,E=d):j=j.next=$,Oe.lanes|=ae,Ci|=ae;K=K.next}while(K!==null&&K!==r);if(j===null?E=d:j.next=S,!yn(d,t.memoizedState)&&(jt=!0,ee&&(s=ks,s!==null)))throw s;t.memoizedState=d,t.baseState=E,t.baseQueue=j,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Id(t){var r=St(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,h=s.pending,d=r.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do d=t(d,E.action),E=E.next;while(E!==h);yn(d,r.memoizedState)||(jt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),s.lastRenderedState=d}return[d,l]}function Sy(t,r,s){var l=Oe,h=St(),d=Fe;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=r();var E=!yn((We||h).memoizedState,s);E&&(h.memoizedState=s,jt=!0),h=h.queue;var S=Ry.bind(null,l,h,t);if(pl(2048,8,S,[t]),h.getSnapshot!==r||E||wt!==null&&wt.memoizedState.tag&1){if(l.flags|=2048,Ls(9,yu(),Ay.bind(null,l,h,s,r),null),it===null)throw Error(a(349));d||(Ti&124)!==0||xy(l,r,s)}return s}function xy(t,r,s){t.flags|=16384,t={getSnapshot:r,value:s},r=Oe.updateQueue,r===null?(r=xd(),Oe.updateQueue=r,r.stores=[t]):(s=r.stores,s===null?r.stores=[t]:s.push(t))}function Ay(t,r,s,l){r.value=s,r.getSnapshot=l,Iy(r)&&Cy(t)}function Ry(t,r,s){return s(function(){Iy(r)&&Cy(t)})}function Iy(t){var r=t.getSnapshot;t=t.value;try{var s=r();return!yn(t,s)}catch{return!0}}function Cy(t){var r=Cs(t,2);r!==null&&wn(r,t,2)}function Cd(t){var r=un();if(typeof t=="function"){var s=t;if(t=s(),Ua){mn(!0);try{s()}finally{mn(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:t},r}function Ny(t,r,s,l){return t.baseState=s,Rd(t,We,typeof l=="function"?l:qr)}function DT(t,r,s,l,h){if(_u(t))throw Error(a(485));if(t=r.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};Q.T!==null?s(!0):d.isTransition=!1,l(d),s=r.pending,s===null?(d.next=r.pending=d,Dy(r,d)):(d.next=s.next,r.pending=s.next=d)}}function Dy(t,r){var s=r.action,l=r.payload,h=t.state;if(r.isTransition){var d=Q.T,E={};Q.T=E;try{var S=s(h,l),j=Q.S;j!==null&&j(E,S),Oy(t,r,S)}catch(K){Nd(t,r,K)}finally{Q.T=d}}else try{d=s(h,l),Oy(t,r,d)}catch(K){Nd(t,r,K)}}function Oy(t,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Py(t,r,l)},function(l){return Nd(t,r,l)}):Py(t,r,s)}function Py(t,r,s){r.status="fulfilled",r.value=s,ky(r),t.state=s,r=t.pending,r!==null&&(s=r.next,s===r?t.pending=null:(s=s.next,r.next=s,Dy(t,s)))}function Nd(t,r,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,ky(r),r=r.next;while(r!==l)}t.action=null}function ky(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function My(t,r){return r}function Vy(t,r){if(Fe){var s=it.formState;if(s!==null){e:{var l=Oe;if(Fe){if(pt){t:{for(var h=pt,d=hr;h.nodeType!==8;){if(!d){h=null;break t}if(h=Yn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){pt=Yn(h.nextSibling),l=h.data==="F!";break e}}Ma(l)}l=!1}l&&(r=s[0])}}return s=un(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:My,lastRenderedState:r},s.queue=l,s=tv.bind(null,Oe,l),l.dispatch=s,l=Cd(!1),d=Md.bind(null,Oe,!1,l.queue),l=un(),h={state:r,dispatch:null,action:t,pending:null},l.queue=h,s=DT.bind(null,Oe,h,d,s),h.dispatch=s,l.memoizedState=t,[r,s,!1]}function jy(t){var r=St();return Ly(r,We,t)}function Ly(t,r,s){if(r=Rd(t,r,My)[0],t=gu(qr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=dl(r)}catch(E){throw E===ol?uu:E}else l=r;r=St();var h=r.queue,d=h.dispatch;return s!==r.memoizedState&&(Oe.flags|=2048,Ls(9,yu(),OT.bind(null,h,s),null)),[l,d,t]}function OT(t,r){t.action=r}function Uy(t){var r=St(),s=We;if(s!==null)return Ly(r,s,t);St(),r=r.memoizedState,s=St();var l=s.queue.dispatch;return s.memoizedState=t,[r,l,!1]}function Ls(t,r,s,l){return t={tag:t,create:s,deps:l,inst:r,next:null},r=Oe.updateQueue,r===null&&(r=xd(),Oe.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,r.lastEffect=t),t}function yu(){return{destroy:void 0,resource:void 0}}function zy(){return St().memoizedState}function vu(t,r,s,l){var h=un();l=l===void 0?null:l,Oe.flags|=t,h.memoizedState=Ls(1|r,yu(),s,l)}function pl(t,r,s,l){var h=St();l=l===void 0?null:l;var d=h.memoizedState.inst;We!==null&&l!==null&&bd(l,We.memoizedState.deps)?h.memoizedState=Ls(r,d,s,l):(Oe.flags|=t,h.memoizedState=Ls(1|r,d,s,l))}function By(t,r){vu(8390656,8,t,r)}function Hy(t,r){pl(2048,8,t,r)}function qy(t,r){return pl(4,2,t,r)}function Fy(t,r){return pl(4,4,t,r)}function Gy(t,r){if(typeof r=="function"){t=t();var s=r(t);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Yy(t,r,s){s=s!=null?s.concat([t]):null,pl(4,4,Gy.bind(null,r,t),s)}function Dd(){}function Qy(t,r){var s=St();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&bd(r,l[1])?l[0]:(s.memoizedState=[t,r],t)}function Ky(t,r){var s=St();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&bd(r,l[1]))return l[0];if(l=t(),Ua){mn(!0);try{t()}finally{mn(!1)}}return s.memoizedState=[l,r],l}function Od(t,r,s){return s===void 0||(Ti&1073741824)!==0?t.memoizedState=r:(t.memoizedState=s,t=Wv(),Oe.lanes|=t,Ci|=t,s)}function $y(t,r,s,l){return yn(s,r)?s:Ms.current!==null?(t=Od(t,s,l),yn(t,r)||(jt=!0),t):(Ti&42)===0?(jt=!0,t.memoizedState=s):(t=Wv(),Oe.lanes|=t,Ci|=t,r)}function Xy(t,r,s,l,h){var d=oe.p;oe.p=d!==0&&8>d?d:8;var E=Q.T,S={};Q.T=S,Md(t,!1,r,s);try{var j=h(),K=Q.S;if(K!==null&&K(S,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var ee=IT(j,l);ml(t,r,ee,Tn(t))}else ml(t,r,l,Tn(t))}catch(ae){ml(t,r,{then:function(){},status:"rejected",reason:ae},Tn())}finally{oe.p=d,Q.T=E}}function PT(){}function Pd(t,r,s,l){if(t.tag!==5)throw Error(a(476));var h=Wy(t).queue;Xy(t,h,r,fe,s===null?PT:function(){return Zy(t),s(l)})}function Wy(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:fe},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:s},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function Zy(t){var r=Wy(t).next.queue;ml(t,r,{},Tn())}function kd(){return Wt(Pl)}function Jy(){return St().memoizedState}function ev(){return St().memoizedState}function kT(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var s=Tn();t=bi(s);var l=Ei(r,t,s);l!==null&&(wn(l,r,s),cl(l,r,s)),r={cache:ud()},t.payload=r;return}r=r.return}}function MT(t,r,s){var l=Tn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},_u(t)?nv(r,s):(s=ed(t,r,s,l),s!==null&&(wn(s,t,l),rv(s,r,l)))}function tv(t,r,s){var l=Tn();ml(t,r,s,l)}function ml(t,r,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(_u(t))nv(r,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var E=r.lastRenderedState,S=d(E,s);if(h.hasEagerState=!0,h.eagerState=S,yn(S,E))return nu(t,r,h,0),it===null&&tu(),!1}catch{}finally{}if(s=ed(t,r,h,l),s!==null)return wn(s,t,l),rv(s,r,l),!0}return!1}function Md(t,r,s,l){if(l={lane:2,revertLane:dp(),action:l,hasEagerState:!1,eagerState:null,next:null},_u(t)){if(r)throw Error(a(479))}else r=ed(t,s,l,2),r!==null&&wn(r,t,2)}function _u(t){var r=t.alternate;return t===Oe||r!==null&&r===Oe}function nv(t,r){Vs=du=!0;var s=t.pending;s===null?r.next=r:(r.next=s.next,s.next=r),t.pending=r}function rv(t,r,s){if((s&4194048)!==0){var l=r.lanes;l&=t.pendingLanes,s|=l,r.lanes=s,jo(t,s)}}var bu={readContext:Wt,use:mu,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useLayoutEffect:vt,useInsertionEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useSyncExternalStore:vt,useId:vt,useHostTransitionStatus:vt,useFormState:vt,useActionState:vt,useOptimistic:vt,useMemoCache:vt,useCacheRefresh:vt},iv={readContext:Wt,use:mu,useCallback:function(t,r){return un().memoizedState=[t,r===void 0?null:r],t},useContext:Wt,useEffect:By,useImperativeHandle:function(t,r,s){s=s!=null?s.concat([t]):null,vu(4194308,4,Gy.bind(null,r,t),s)},useLayoutEffect:function(t,r){return vu(4194308,4,t,r)},useInsertionEffect:function(t,r){vu(4,2,t,r)},useMemo:function(t,r){var s=un();r=r===void 0?null:r;var l=t();if(Ua){mn(!0);try{t()}finally{mn(!1)}}return s.memoizedState=[l,r],l},useReducer:function(t,r,s){var l=un();if(s!==void 0){var h=s(r);if(Ua){mn(!0);try{s(r)}finally{mn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=MT.bind(null,Oe,t),[l.memoizedState,t]},useRef:function(t){var r=un();return t={current:t},r.memoizedState=t},useState:function(t){t=Cd(t);var r=t.queue,s=tv.bind(null,Oe,r);return r.dispatch=s,[t.memoizedState,s]},useDebugValue:Dd,useDeferredValue:function(t,r){var s=un();return Od(s,t,r)},useTransition:function(){var t=Cd(!1);return t=Xy.bind(null,Oe,t.queue,!0,!1),un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,s){var l=Oe,h=un();if(Fe){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),it===null)throw Error(a(349));(Be&124)!==0||xy(l,r,s)}h.memoizedState=s;var d={value:s,getSnapshot:r};return h.queue=d,By(Ry.bind(null,l,d,t),[t]),l.flags|=2048,Ls(9,yu(),Ay.bind(null,l,d,s,r),null),s},useId:function(){var t=un(),r=it.identifierPrefix;if(Fe){var s=zr,l=Ur;s=(l&~(1<<32-Xt(l)-1)).toString(32)+s,r="«"+r+"R"+s,s=pu++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=CT++,r="«"+r+"r"+s.toString(32)+"»";return t.memoizedState=r},useHostTransitionStatus:kd,useFormState:Vy,useActionState:Vy,useOptimistic:function(t){var r=un();r.memoizedState=r.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=Md.bind(null,Oe,!0,s),s.dispatch=r,[t,r]},useMemoCache:Ad,useCacheRefresh:function(){return un().memoizedState=kT.bind(null,Oe)}},av={readContext:Wt,use:mu,useCallback:Qy,useContext:Wt,useEffect:Hy,useImperativeHandle:Yy,useInsertionEffect:qy,useLayoutEffect:Fy,useMemo:Ky,useReducer:gu,useRef:zy,useState:function(){return gu(qr)},useDebugValue:Dd,useDeferredValue:function(t,r){var s=St();return $y(s,We.memoizedState,t,r)},useTransition:function(){var t=gu(qr)[0],r=St().memoizedState;return[typeof t=="boolean"?t:dl(t),r]},useSyncExternalStore:Sy,useId:Jy,useHostTransitionStatus:kd,useFormState:jy,useActionState:jy,useOptimistic:function(t,r){var s=St();return Ny(s,We,t,r)},useMemoCache:Ad,useCacheRefresh:ev},VT={readContext:Wt,use:mu,useCallback:Qy,useContext:Wt,useEffect:Hy,useImperativeHandle:Yy,useInsertionEffect:qy,useLayoutEffect:Fy,useMemo:Ky,useReducer:Id,useRef:zy,useState:function(){return Id(qr)},useDebugValue:Dd,useDeferredValue:function(t,r){var s=St();return We===null?Od(s,t,r):$y(s,We.memoizedState,t,r)},useTransition:function(){var t=Id(qr)[0],r=St().memoizedState;return[typeof t=="boolean"?t:dl(t),r]},useSyncExternalStore:Sy,useId:Jy,useHostTransitionStatus:kd,useFormState:Uy,useActionState:Uy,useOptimistic:function(t,r){var s=St();return We!==null?Ny(s,We,t,r):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Ad,useCacheRefresh:ev},Us=null,gl=0;function Eu(t){var r=gl;return gl+=1,Us===null&&(Us=[]),gy(Us,t,r)}function yl(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function Tu(t,r){throw r.$$typeof===T?Error(a(525)):(t=Object.prototype.toString.call(r),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function sv(t){var r=t._init;return r(t._payload)}function ov(t){function r(H,z){if(t){var G=H.deletions;G===null?(H.deletions=[z],H.flags|=16):G.push(z)}}function s(H,z){if(!t)return null;for(;z!==null;)r(H,z),z=z.sibling;return null}function l(H){for(var z=new Map;H!==null;)H.key!==null?z.set(H.key,H):z.set(H.index,H),H=H.sibling;return z}function h(H,z){return H=Lr(H,z),H.index=0,H.sibling=null,H}function d(H,z,G){return H.index=G,t?(G=H.alternate,G!==null?(G=G.index,G<z?(H.flags|=67108866,z):G):(H.flags|=67108866,z)):(H.flags|=1048576,z)}function E(H){return t&&H.alternate===null&&(H.flags|=67108866),H}function S(H,z,G,re){return z===null||z.tag!==6?(z=nd(G,H.mode,re),z.return=H,z):(z=h(z,G),z.return=H,z)}function j(H,z,G,re){var me=G.type;return me===O?ee(H,z,G.props.children,re,G.key):z!==null&&(z.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===R&&sv(me)===z.type)?(z=h(z,G.props),yl(z,G),z.return=H,z):(z=iu(G.type,G.key,G.props,null,H.mode,re),yl(z,G),z.return=H,z)}function K(H,z,G,re){return z===null||z.tag!==4||z.stateNode.containerInfo!==G.containerInfo||z.stateNode.implementation!==G.implementation?(z=rd(G,H.mode,re),z.return=H,z):(z=h(z,G.children||[]),z.return=H,z)}function ee(H,z,G,re,me){return z===null||z.tag!==7?(z=Da(G,H.mode,re,me),z.return=H,z):(z=h(z,G),z.return=H,z)}function ae(H,z,G){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=nd(""+z,H.mode,G),z.return=H,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return G=iu(z.type,z.key,z.props,null,H.mode,G),yl(G,z),G.return=H,G;case x:return z=rd(z,H.mode,G),z.return=H,z;case R:var re=z._init;return z=re(z._payload),ae(H,z,G)}if(Re(z)||C(z))return z=Da(z,H.mode,G,null),z.return=H,z;if(typeof z.then=="function")return ae(H,Eu(z),G);if(z.$$typeof===q)return ae(H,lu(H,z),G);Tu(H,z)}return null}function $(H,z,G,re){var me=z!==null?z.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return me!==null?null:S(H,z,""+G,re);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case w:return G.key===me?j(H,z,G,re):null;case x:return G.key===me?K(H,z,G,re):null;case R:return me=G._init,G=me(G._payload),$(H,z,G,re)}if(Re(G)||C(G))return me!==null?null:ee(H,z,G,re,null);if(typeof G.then=="function")return $(H,z,Eu(G),re);if(G.$$typeof===q)return $(H,z,lu(H,G),re);Tu(H,G)}return null}function X(H,z,G,re,me){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return H=H.get(G)||null,S(z,H,""+re,me);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case w:return H=H.get(re.key===null?G:re.key)||null,j(z,H,re,me);case x:return H=H.get(re.key===null?G:re.key)||null,K(z,H,re,me);case R:var Pe=re._init;return re=Pe(re._payload),X(H,z,G,re,me)}if(Re(re)||C(re))return H=H.get(G)||null,ee(z,H,re,me,null);if(typeof re.then=="function")return X(H,z,G,Eu(re),me);if(re.$$typeof===q)return X(H,z,G,lu(z,re),me);Tu(z,re)}return null}function xe(H,z,G,re){for(var me=null,Pe=null,ye=z,Ee=z=0,Ut=null;ye!==null&&Ee<G.length;Ee++){ye.index>Ee?(Ut=ye,ye=null):Ut=ye.sibling;var qe=$(H,ye,G[Ee],re);if(qe===null){ye===null&&(ye=Ut);break}t&&ye&&qe.alternate===null&&r(H,ye),z=d(qe,z,Ee),Pe===null?me=qe:Pe.sibling=qe,Pe=qe,ye=Ut}if(Ee===G.length)return s(H,ye),Fe&&Pa(H,Ee),me;if(ye===null){for(;Ee<G.length;Ee++)ye=ae(H,G[Ee],re),ye!==null&&(z=d(ye,z,Ee),Pe===null?me=ye:Pe.sibling=ye,Pe=ye);return Fe&&Pa(H,Ee),me}for(ye=l(ye);Ee<G.length;Ee++)Ut=X(ye,H,Ee,G[Ee],re),Ut!==null&&(t&&Ut.alternate!==null&&ye.delete(Ut.key===null?Ee:Ut.key),z=d(Ut,z,Ee),Pe===null?me=Ut:Pe.sibling=Ut,Pe=Ut);return t&&ye.forEach(function(Li){return r(H,Li)}),Fe&&Pa(H,Ee),me}function be(H,z,G,re){if(G==null)throw Error(a(151));for(var me=null,Pe=null,ye=z,Ee=z=0,Ut=null,qe=G.next();ye!==null&&!qe.done;Ee++,qe=G.next()){ye.index>Ee?(Ut=ye,ye=null):Ut=ye.sibling;var Li=$(H,ye,qe.value,re);if(Li===null){ye===null&&(ye=Ut);break}t&&ye&&Li.alternate===null&&r(H,ye),z=d(Li,z,Ee),Pe===null?me=Li:Pe.sibling=Li,Pe=Li,ye=Ut}if(qe.done)return s(H,ye),Fe&&Pa(H,Ee),me;if(ye===null){for(;!qe.done;Ee++,qe=G.next())qe=ae(H,qe.value,re),qe!==null&&(z=d(qe,z,Ee),Pe===null?me=qe:Pe.sibling=qe,Pe=qe);return Fe&&Pa(H,Ee),me}for(ye=l(ye);!qe.done;Ee++,qe=G.next())qe=X(ye,H,Ee,qe.value,re),qe!==null&&(t&&qe.alternate!==null&&ye.delete(qe.key===null?Ee:qe.key),z=d(qe,z,Ee),Pe===null?me=qe:Pe.sibling=qe,Pe=qe);return t&&ye.forEach(function(jw){return r(H,jw)}),Fe&&Pa(H,Ee),me}function Je(H,z,G,re){if(typeof G=="object"&&G!==null&&G.type===O&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case w:e:{for(var me=G.key;z!==null;){if(z.key===me){if(me=G.type,me===O){if(z.tag===7){s(H,z.sibling),re=h(z,G.props.children),re.return=H,H=re;break e}}else if(z.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===R&&sv(me)===z.type){s(H,z.sibling),re=h(z,G.props),yl(re,G),re.return=H,H=re;break e}s(H,z);break}else r(H,z);z=z.sibling}G.type===O?(re=Da(G.props.children,H.mode,re,G.key),re.return=H,H=re):(re=iu(G.type,G.key,G.props,null,H.mode,re),yl(re,G),re.return=H,H=re)}return E(H);case x:e:{for(me=G.key;z!==null;){if(z.key===me)if(z.tag===4&&z.stateNode.containerInfo===G.containerInfo&&z.stateNode.implementation===G.implementation){s(H,z.sibling),re=h(z,G.children||[]),re.return=H,H=re;break e}else{s(H,z);break}else r(H,z);z=z.sibling}re=rd(G,H.mode,re),re.return=H,H=re}return E(H);case R:return me=G._init,G=me(G._payload),Je(H,z,G,re)}if(Re(G))return xe(H,z,G,re);if(C(G)){if(me=C(G),typeof me!="function")throw Error(a(150));return G=me.call(G),be(H,z,G,re)}if(typeof G.then=="function")return Je(H,z,Eu(G),re);if(G.$$typeof===q)return Je(H,z,lu(H,G),re);Tu(H,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,z!==null&&z.tag===6?(s(H,z.sibling),re=h(z,G),re.return=H,H=re):(s(H,z),re=nd(G,H.mode,re),re.return=H,H=re),E(H)):s(H,z)}return function(H,z,G,re){try{gl=0;var me=Je(H,z,G,re);return Us=null,me}catch(ye){if(ye===ol||ye===uu)throw ye;var Pe=vn(29,ye,null,H.mode);return Pe.lanes=re,Pe.return=H,Pe}finally{}}}var zs=ov(!0),lv=ov(!1),Mn=ne(null),fr=null;function wi(t){var r=t.alternate;le(Ot,Ot.current&1),le(Mn,t),fr===null&&(r===null||Ms.current!==null||r.memoizedState!==null)&&(fr=t)}function cv(t){if(t.tag===22){if(le(Ot,Ot.current),le(Mn,t),fr===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(fr=t)}}else Si()}function Si(){le(Ot,Ot.current),le(Mn,Mn.current)}function Fr(t){ce(Mn),fr===t&&(fr=null),ce(Ot)}var Ot=ne(0);function wu(t){for(var r=t;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||xp(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Vd(t,r,s,l){r=t.memoizedState,s=s(l,r),s=s==null?r:_({},r,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var jd={enqueueSetState:function(t,r,s){t=t._reactInternals;var l=Tn(),h=bi(l);h.payload=r,s!=null&&(h.callback=s),r=Ei(t,h,l),r!==null&&(wn(r,t,l),cl(r,t,l))},enqueueReplaceState:function(t,r,s){t=t._reactInternals;var l=Tn(),h=bi(l);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Ei(t,h,l),r!==null&&(wn(r,t,l),cl(r,t,l))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var s=Tn(),l=bi(s);l.tag=2,r!=null&&(l.callback=r),r=Ei(t,l,s),r!==null&&(wn(r,t,s),cl(r,t,s))}};function uv(t,r,s,l,h,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,E):r.prototype&&r.prototype.isPureReactComponent?!Jo(s,l)||!Jo(h,d):!0}function hv(t,r,s,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==t&&jd.enqueueReplaceState(r,r.state,null)}function za(t,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(t=t.defaultProps){s===r&&(s=_({},s));for(var h in t)s[h]===void 0&&(s[h]=t[h])}return s}var Su=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function fv(t){Su(t)}function dv(t){console.error(t)}function pv(t){Su(t)}function xu(t,r){try{var s=t.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function mv(t,r,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Ld(t,r,s){return s=bi(s),s.tag=3,s.payload={element:null},s.callback=function(){xu(t,r)},s}function gv(t){return t=bi(t),t.tag=3,t}function yv(t,r,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){mv(r,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){mv(r,s,l),typeof h!="function"&&(Ni===null?Ni=new Set([this]):Ni.add(this));var S=l.stack;this.componentDidCatch(l.value,{componentStack:S!==null?S:""})})}function jT(t,r,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&il(r,s,h,!0),s=Mn.current,s!==null){switch(s.tag){case 13:return fr===null?lp():s.alternate===null&&mt===0&&(mt=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===dd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),up(t,l,h)),!1;case 22:return s.flags|=65536,l===dd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),up(t,l,h)),!1}throw Error(a(435,s.tag))}return up(t,l,h),lp(),!1}if(Fe)return r=Mn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==sd&&(t=Error(a(422),{cause:l}),rl(Dn(t,s)))):(l!==sd&&(r=Error(a(423),{cause:l}),rl(Dn(r,s))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Dn(l,s),h=Ld(t.stateNode,l,h),gd(t,h),mt!==4&&(mt=2)),!1;var d=Error(a(520),{cause:l});if(d=Dn(d,s),Sl===null?Sl=[d]:Sl.push(d),mt!==4&&(mt=2),r===null)return!0;l=Dn(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,t=h&-h,s.lanes|=t,t=Ld(s.stateNode,l,t),gd(s,t),!1;case 1:if(r=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ni===null||!Ni.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=gv(h),yv(h,t,s,l),gd(s,h),!1}s=s.return}while(s!==null);return!1}var vv=Error(a(461)),jt=!1;function qt(t,r,s,l){r.child=t===null?lv(r,null,s,l):zs(r,t.child,s,l)}function _v(t,r,s,l,h){s=s.render;var d=r.ref;if("ref"in l){var E={};for(var S in l)S!=="ref"&&(E[S]=l[S])}else E=l;return ja(r),l=Ed(t,r,s,E,d,h),S=Td(),t!==null&&!jt?(wd(t,r,h),Gr(t,r,h)):(Fe&&S&&id(r),r.flags|=1,qt(t,r,l,h),r.child)}function bv(t,r,s,l,h){if(t===null){var d=s.type;return typeof d=="function"&&!td(d)&&d.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=d,Ev(t,r,d,l,h)):(t=iu(s.type,null,l,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(d=t.child,!Yd(t,h)){var E=d.memoizedProps;if(s=s.compare,s=s!==null?s:Jo,s(E,l)&&t.ref===r.ref)return Gr(t,r,h)}return r.flags|=1,t=Lr(d,l),t.ref=r.ref,t.return=r,r.child=t}function Ev(t,r,s,l,h){if(t!==null){var d=t.memoizedProps;if(Jo(d,l)&&t.ref===r.ref)if(jt=!1,r.pendingProps=l=d,Yd(t,h))(t.flags&131072)!==0&&(jt=!0);else return r.lanes=t.lanes,Gr(t,r,h)}return Ud(t,r,s,l,h)}function Tv(t,r,s){var l=r.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|s:s,t!==null){for(h=r.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return wv(t,r,l,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&cu(r,d!==null?d.cachePool:null),d!==null?Ey(r,d):vd(),cv(r);else return r.lanes=r.childLanes=536870912,wv(t,r,d!==null?d.baseLanes|s:s,s)}else d!==null?(cu(r,d.cachePool),Ey(r,d),Si(),r.memoizedState=null):(t!==null&&cu(r,null),vd(),Si());return qt(t,r,h,s),r.child}function wv(t,r,s,l){var h=fd();return h=h===null?null:{parent:Dt._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},t!==null&&cu(r,null),vd(),cv(r),t!==null&&il(t,r,l,!0),null}function Au(t,r){var s=r.ref;if(s===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(r.flags|=4194816)}}function Ud(t,r,s,l,h){return ja(r),s=Ed(t,r,s,l,void 0,h),l=Td(),t!==null&&!jt?(wd(t,r,h),Gr(t,r,h)):(Fe&&l&&id(r),r.flags|=1,qt(t,r,s,h),r.child)}function Sv(t,r,s,l,h,d){return ja(r),r.updateQueue=null,s=wy(r,l,s,h),Ty(t),l=Td(),t!==null&&!jt?(wd(t,r,d),Gr(t,r,d)):(Fe&&l&&id(r),r.flags|=1,qt(t,r,s,d),r.child)}function xv(t,r,s,l,h){if(ja(r),r.stateNode===null){var d=Ns,E=s.contextType;typeof E=="object"&&E!==null&&(d=Wt(E)),d=new s(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=jd,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},pd(r),E=s.contextType,d.context=typeof E=="object"&&E!==null?Wt(E):Ns,d.state=r.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Vd(r,s,E,l),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&jd.enqueueReplaceState(d,d.state,null),hl(r,l,d,h),ul(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(t===null){d=r.stateNode;var S=r.memoizedProps,j=za(s,S);d.props=j;var K=d.context,ee=s.contextType;E=Ns,typeof ee=="object"&&ee!==null&&(E=Wt(ee));var ae=s.getDerivedStateFromProps;ee=typeof ae=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,ee||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||K!==E)&&hv(r,d,l,E),_i=!1;var $=r.memoizedState;d.state=$,hl(r,l,d,h),ul(),K=r.memoizedState,S||$!==K||_i?(typeof ae=="function"&&(Vd(r,s,ae,l),K=r.memoizedState),(j=_i||uv(r,s,j,l,$,K,E))?(ee||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=K),d.props=l,d.state=K,d.context=E,l=j):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,md(t,r),E=r.memoizedProps,ee=za(s,E),d.props=ee,ae=r.pendingProps,$=d.context,K=s.contextType,j=Ns,typeof K=="object"&&K!==null&&(j=Wt(K)),S=s.getDerivedStateFromProps,(K=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==ae||$!==j)&&hv(r,d,l,j),_i=!1,$=r.memoizedState,d.state=$,hl(r,l,d,h),ul();var X=r.memoizedState;E!==ae||$!==X||_i||t!==null&&t.dependencies!==null&&ou(t.dependencies)?(typeof S=="function"&&(Vd(r,s,S,l),X=r.memoizedState),(ee=_i||uv(r,s,ee,l,$,X,j)||t!==null&&t.dependencies!==null&&ou(t.dependencies))?(K||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,X,j),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,X,j)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=X),d.props=l,d.state=X,d.context=j,l=ee):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(r.flags|=1024),l=!1)}return d=l,Au(t,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,t!==null&&l?(r.child=zs(r,t.child,null,h),r.child=zs(r,null,s,h)):qt(t,r,s,h),r.memoizedState=d.state,t=r.child):t=Gr(t,r,h),t}function Av(t,r,s,l){return nl(),r.flags|=256,qt(t,r,s,l),r.child}var zd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bd(t){return{baseLanes:t,cachePool:dy()}}function Hd(t,r,s){return t=t!==null?t.childLanes&~s:0,r&&(t|=Vn),t}function Rv(t,r,s){var l=r.pendingProps,h=!1,d=(r.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(Ot.current&2)!==0),E&&(h=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,t===null){if(Fe){if(h?wi(r):Si(),Fe){var S=pt,j;if(j=S){e:{for(j=S,S=hr;j.nodeType!==8;){if(!S){S=null;break e}if(j=Yn(j.nextSibling),j===null){S=null;break e}}S=j}S!==null?(r.memoizedState={dehydrated:S,treeContext:Oa!==null?{id:Ur,overflow:zr}:null,retryLane:536870912,hydrationErrors:null},j=vn(18,null,null,0),j.stateNode=S,j.return=r,r.child=j,ln=r,pt=null,j=!0):j=!1}j||Ma(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return xp(S)?r.lanes=32:r.lanes=536870912,null;Fr(r)}return S=l.children,l=l.fallback,h?(Si(),h=r.mode,S=Ru({mode:"hidden",children:S},h),l=Da(l,h,s,null),S.return=r,l.return=r,S.sibling=l,r.child=S,h=r.child,h.memoizedState=Bd(s),h.childLanes=Hd(t,E,s),r.memoizedState=zd,l):(wi(r),qd(r,S))}if(j=t.memoizedState,j!==null&&(S=j.dehydrated,S!==null)){if(d)r.flags&256?(wi(r),r.flags&=-257,r=Fd(t,r,s)):r.memoizedState!==null?(Si(),r.child=t.child,r.flags|=128,r=null):(Si(),h=l.fallback,S=r.mode,l=Ru({mode:"visible",children:l.children},S),h=Da(h,S,s,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,zs(r,t.child,null,s),l=r.child,l.memoizedState=Bd(s),l.childLanes=Hd(t,E,s),r.memoizedState=zd,r=h);else if(wi(r),xp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var K=E.dgst;E=K,l=Error(a(419)),l.stack="",l.digest=E,rl({value:l,source:null,stack:null}),r=Fd(t,r,s)}else if(jt||il(t,r,s,!1),E=(s&t.childLanes)!==0,jt||E){if(E=it,E!==null&&(l=s&-s,l=(l&42)!==0?1:hi(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==j.retryLane))throw j.retryLane=l,Cs(t,l),wn(E,t,l),vv;S.data==="$?"||lp(),r=Fd(t,r,s)}else S.data==="$?"?(r.flags|=192,r.child=t.child,r=null):(t=j.treeContext,pt=Yn(S.nextSibling),ln=r,Fe=!0,ka=null,hr=!1,t!==null&&(Pn[kn++]=Ur,Pn[kn++]=zr,Pn[kn++]=Oa,Ur=t.id,zr=t.overflow,Oa=r),r=qd(r,l.children),r.flags|=4096);return r}return h?(Si(),h=l.fallback,S=r.mode,j=t.child,K=j.sibling,l=Lr(j,{mode:"hidden",children:l.children}),l.subtreeFlags=j.subtreeFlags&65011712,K!==null?h=Lr(K,h):(h=Da(h,S,s,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,S=t.child.memoizedState,S===null?S=Bd(s):(j=S.cachePool,j!==null?(K=Dt._currentValue,j=j.parent!==K?{parent:K,pool:K}:j):j=dy(),S={baseLanes:S.baseLanes|s,cachePool:j}),h.memoizedState=S,h.childLanes=Hd(t,E,s),r.memoizedState=zd,l):(wi(r),s=t.child,t=s.sibling,s=Lr(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,t!==null&&(E=r.deletions,E===null?(r.deletions=[t],r.flags|=16):E.push(t)),r.child=s,r.memoizedState=null,s)}function qd(t,r){return r=Ru({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function Ru(t,r){return t=vn(22,t,null,r),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Fd(t,r,s){return zs(r,t.child,null,s),t=qd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Iv(t,r,s){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),ld(t.return,r,s)}function Gd(t,r,s,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=h)}function Cv(t,r,s){var l=r.pendingProps,h=l.revealOrder,d=l.tail;if(qt(t,r,l.children,s),l=Ot.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Iv(t,s,r);else if(t.tag===19)Iv(t,s,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(le(Ot,l),h){case"forwards":for(s=r.child,h=null;s!==null;)t=s.alternate,t!==null&&wu(t)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),Gd(r,!1,h,s,d);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&wu(t)===null){r.child=h;break}t=h.sibling,h.sibling=s,s=h,h=t}Gd(r,!0,s,null,d);break;case"together":Gd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Gr(t,r,s){if(t!==null&&(r.dependencies=t.dependencies),Ci|=r.lanes,(s&r.childLanes)===0)if(t!==null){if(il(t,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(a(153));if(r.child!==null){for(t=r.child,s=Lr(t,t.pendingProps),r.child=s,s.return=r;t.sibling!==null;)t=t.sibling,s=s.sibling=Lr(t,t.pendingProps),s.return=r;s.sibling=null}return r.child}function Yd(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&ou(t)))}function LT(t,r,s){switch(r.tag){case 3:Te(r,r.stateNode.containerInfo),vi(r,Dt,t.memoizedState.cache),nl();break;case 27:case 5:$t(r);break;case 4:Te(r,r.stateNode.containerInfo);break;case 10:vi(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(wi(r),r.flags|=128,null):(s&r.child.childLanes)!==0?Rv(t,r,s):(wi(r),t=Gr(t,r,s),t!==null?t.sibling:null);wi(r);break;case 19:var h=(t.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(il(t,r,s,!1),l=(s&r.childLanes)!==0),h){if(l)return Cv(t,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),le(Ot,Ot.current),l)break;return null;case 22:case 23:return r.lanes=0,Tv(t,r,s);case 24:vi(r,Dt,t.memoizedState.cache)}return Gr(t,r,s)}function Nv(t,r,s){if(t!==null)if(t.memoizedProps!==r.pendingProps)jt=!0;else{if(!Yd(t,s)&&(r.flags&128)===0)return jt=!1,LT(t,r,s);jt=(t.flags&131072)!==0}else jt=!1,Fe&&(r.flags&1048576)!==0&&sy(r,su,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")td(l)?(t=za(l,t),r.tag=1,r=xv(null,r,l,t,s)):(r.tag=0,r=Ud(null,r,l,t,s));else{if(l!=null){if(h=l.$$typeof,h===te){r.tag=11,r=_v(null,r,l,t,s);break e}else if(h===k){r.tag=14,r=bv(null,r,l,t,s);break e}}throw r=ue(l)||l,Error(a(306,r,""))}}return r;case 0:return Ud(t,r,r.type,r.pendingProps,s);case 1:return l=r.type,h=za(l,r.pendingProps),xv(t,r,l,h,s);case 3:e:{if(Te(r,r.stateNode.containerInfo),t===null)throw Error(a(387));l=r.pendingProps;var d=r.memoizedState;h=d.element,md(t,r),hl(r,l,null,s);var E=r.memoizedState;if(l=E.cache,vi(r,Dt,l),l!==d.cache&&cd(r,[Dt],s,!0),ul(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=Av(t,r,l,s);break e}else if(l!==h){h=Dn(Error(a(424)),r),rl(h),r=Av(t,r,l,s);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(pt=Yn(t.firstChild),ln=r,Fe=!0,ka=null,hr=!0,s=lv(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(nl(),l===h){r=Gr(t,r,s);break e}qt(t,r,l,s)}r=r.child}return r;case 26:return Au(t,r),t===null?(s=k0(r.type,null,r.pendingProps,null))?r.memoizedState=s:Fe||(s=r.type,t=r.pendingProps,l=Bu(_e.current).createElement(s),l[It]=r,l[Et]=t,Gt(l,s,t),yt(l),r.stateNode=l):r.memoizedState=k0(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return $t(r),t===null&&Fe&&(l=r.stateNode=D0(r.type,r.pendingProps,_e.current),ln=r,hr=!0,h=pt,Pi(r.type)?(Ap=h,pt=Yn(l.firstChild)):pt=h),qt(t,r,r.pendingProps.children,s),Au(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&Fe&&((h=l=pt)&&(l=fw(l,r.type,r.pendingProps,hr),l!==null?(r.stateNode=l,ln=r,pt=Yn(l.firstChild),hr=!1,h=!0):h=!1),h||Ma(r)),$t(r),h=r.type,d=r.pendingProps,E=t!==null?t.memoizedProps:null,l=d.children,Tp(h,d)?l=null:E!==null&&Tp(h,E)&&(r.flags|=32),r.memoizedState!==null&&(h=Ed(t,r,NT,null,null,s),Pl._currentValue=h),Au(t,r),qt(t,r,l,s),r.child;case 6:return t===null&&Fe&&((t=s=pt)&&(s=dw(s,r.pendingProps,hr),s!==null?(r.stateNode=s,ln=r,pt=null,t=!0):t=!1),t||Ma(r)),null;case 13:return Rv(t,r,s);case 4:return Te(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=zs(r,null,l,s):qt(t,r,l,s),r.child;case 11:return _v(t,r,r.type,r.pendingProps,s);case 7:return qt(t,r,r.pendingProps,s),r.child;case 8:return qt(t,r,r.pendingProps.children,s),r.child;case 12:return qt(t,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,vi(r,r.type,l.value),qt(t,r,l.children,s),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,ja(r),h=Wt(h),l=l(h),r.flags|=1,qt(t,r,l,s),r.child;case 14:return bv(t,r,r.type,r.pendingProps,s);case 15:return Ev(t,r,r.type,r.pendingProps,s);case 19:return Cv(t,r,s);case 31:return l=r.pendingProps,s=r.mode,l={mode:l.mode,children:l.children},t===null?(s=Ru(l,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Lr(t.child,l),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return Tv(t,r,s);case 24:return ja(r),l=Wt(Dt),t===null?(h=fd(),h===null&&(h=it,d=ud(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),r.memoizedState={parent:l,cache:h},pd(r),vi(r,Dt,h)):((t.lanes&s)!==0&&(md(t,r),hl(r,null,null,s),ul()),h=t.memoizedState,d=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),vi(r,Dt,l)):(l=d.cache,vi(r,Dt,l),l!==h.cache&&cd(r,[Dt],s,!0))),qt(t,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Yr(t){t.flags|=4}function Dv(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!U0(r)){if(r=Mn.current,r!==null&&((Be&4194048)===Be?fr!==null:(Be&62914560)!==Be&&(Be&536870912)===0||r!==fr))throw ll=dd,py;t.flags|=8192}}function Iu(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?Mo():536870912,t.lanes|=r,Fs|=r)}function vl(t,r){if(!Fe)switch(t.tailMode){case"hidden":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ct(t){var r=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(r)for(var h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=s,r}function UT(t,r,s){var l=r.pendingProps;switch(ad(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(r),null;case 1:return ct(r),null;case 3:return s=r.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Hr(Dt),ft(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(tl(r)?Yr(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,cy())),ct(r),null;case 26:return s=r.memoizedState,t===null?(Yr(r),s!==null?(ct(r),Dv(r,s)):(ct(r),r.flags&=-16777217)):s?s!==t.memoizedState?(Yr(r),ct(r),Dv(r,s)):(ct(r),r.flags&=-16777217):(t.memoizedProps!==l&&Yr(r),ct(r),r.flags&=-16777217),null;case 27:rn(r),s=_e.current;var h=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Yr(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return ct(r),null}t=ge.current,tl(r)?oy(r):(t=D0(h,l,s),r.stateNode=t,Yr(r))}return ct(r),null;case 5:if(rn(r),s=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Yr(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return ct(r),null}if(t=ge.current,tl(r))oy(r);else{switch(h=Bu(_e.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}t[It]=r,t[Et]=l;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=t;e:switch(Gt(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Yr(r)}}return ct(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==l&&Yr(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(t=_e.current,tl(r)){if(t=r.stateNode,s=r.memoizedProps,l=null,h=ln,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[It]=r,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||S0(t.nodeValue,s)),t||Ma(r)}else t=Bu(t).createTextNode(l),t[It]=r,r.stateNode=t}return ct(r),null;case 13:if(l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=tl(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[It]=r}else nl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ct(r),h=!1}else h=cy(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Fr(r),r):(Fr(r),null)}if(Fr(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return s!==t&&s&&(r.child.flags|=8192),Iu(r,r.updateQueue),ct(r),null;case 4:return ft(),t===null&&yp(r.stateNode.containerInfo),ct(r),null;case 10:return Hr(r.type),ct(r),null;case 19:if(ce(Ot),h=r.memoizedState,h===null)return ct(r),null;if(l=(r.flags&128)!==0,d=h.rendering,d===null)if(l)vl(h,!1);else{if(mt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(d=wu(t),d!==null){for(r.flags|=128,vl(h,!1),t=d.updateQueue,r.updateQueue=t,Iu(r,t),r.subtreeFlags=0,t=s,s=r.child;s!==null;)ay(s,t),s=s.sibling;return le(Ot,Ot.current&1|2),r.child}t=t.sibling}h.tail!==null&&xn()>Du&&(r.flags|=128,l=!0,vl(h,!1),r.lanes=4194304)}else{if(!l)if(t=wu(d),t!==null){if(r.flags|=128,l=!0,t=t.updateQueue,r.updateQueue=t,Iu(r,t),vl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Fe)return ct(r),null}else 2*xn()-h.renderingStartTime>Du&&s!==536870912&&(r.flags|=128,l=!0,vl(h,!1),r.lanes=4194304);h.isBackwards?(d.sibling=r.child,r.child=d):(t=h.last,t!==null?t.sibling=d:r.child=d,h.last=d)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=xn(),r.sibling=null,t=Ot.current,le(Ot,l?t&1|2:t&1),r):(ct(r),null);case 22:case 23:return Fr(r),_d(),l=r.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(ct(r),r.subtreeFlags&6&&(r.flags|=8192)):ct(r),s=r.updateQueue,s!==null&&Iu(r,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),t!==null&&ce(La),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Hr(Dt),ct(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function zT(t,r){switch(ad(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Hr(Dt),ft(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return rn(r),null;case 13:if(Fr(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(a(340));nl()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ce(Ot),null;case 4:return ft(),null;case 10:return Hr(r.type),null;case 22:case 23:return Fr(r),_d(),t!==null&&ce(La),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Hr(Dt),null;case 25:return null;default:return null}}function Ov(t,r){switch(ad(r),r.tag){case 3:Hr(Dt),ft();break;case 26:case 27:case 5:rn(r);break;case 4:ft();break;case 13:Fr(r);break;case 19:ce(Ot);break;case 10:Hr(r.type);break;case 22:case 23:Fr(r),_d(),t!==null&&ce(La);break;case 24:Hr(Dt)}}function _l(t,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&t)===t){l=void 0;var d=s.create,E=s.inst;l=d(),E.destroy=l}s=s.next}while(s!==h)}}catch(S){nt(r,r.return,S)}}function xi(t,r,s){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var E=l.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,h=r;var j=s,K=S;try{K()}catch(ee){nt(h,j,ee)}}}l=l.next}while(l!==d)}}catch(ee){nt(r,r.return,ee)}}function Pv(t){var r=t.updateQueue;if(r!==null){var s=t.stateNode;try{by(r,s)}catch(l){nt(t,t.return,l)}}}function kv(t,r,s){s.props=za(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){nt(t,r,l)}}function bl(t,r){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(h){nt(t,r,h)}}function dr(t,r){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){nt(t,r,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){nt(t,r,h)}else s.current=null}function Mv(t){var r=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){nt(t,t.return,h)}}function Qd(t,r,s){try{var l=t.stateNode;ow(l,t.type,s,r),l[Et]=r}catch(h){nt(t,t.return,h)}}function Vv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pi(t.type)||t.tag===4}function Kd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pi(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $d(t,r,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(t),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=zu));else if(l!==4&&(l===27&&Pi(t.type)&&(s=t.stateNode,r=null),t=t.child,t!==null))for($d(t,r,s),t=t.sibling;t!==null;)$d(t,r,s),t=t.sibling}function Cu(t,r,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?s.insertBefore(t,r):s.appendChild(t);else if(l!==4&&(l===27&&Pi(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Cu(t,r,s),t=t.sibling;t!==null;)Cu(t,r,s),t=t.sibling}function jv(t){var r=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Gt(r,l,s),r[It]=t,r[Et]=s}catch(d){nt(t,t.return,d)}}var Qr=!1,_t=!1,Xd=!1,Lv=typeof WeakSet=="function"?WeakSet:Set,Lt=null;function BT(t,r){if(t=t.containerInfo,bp=Qu,t=$g(t),Kf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var E=0,S=-1,j=-1,K=0,ee=0,ae=t,$=null;t:for(;;){for(var X;ae!==s||h!==0&&ae.nodeType!==3||(S=E+h),ae!==d||l!==0&&ae.nodeType!==3||(j=E+l),ae.nodeType===3&&(E+=ae.nodeValue.length),(X=ae.firstChild)!==null;)$=ae,ae=X;for(;;){if(ae===t)break t;if($===s&&++K===h&&(S=E),$===d&&++ee===l&&(j=E),(X=ae.nextSibling)!==null)break;ae=$,$=ae.parentNode}ae=X}s=S===-1||j===-1?null:{start:S,end:j}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ep={focusedElem:t,selectionRange:s},Qu=!1,Lt=r;Lt!==null;)if(r=Lt,t=r.child,(r.subtreeFlags&1024)!==0&&t!==null)t.return=r,Lt=t;else for(;Lt!==null;){switch(r=Lt,d=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=r,h=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var xe=za(s.type,h,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(xe,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(be){nt(s,s.return,be)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,s=t.nodeType,s===9)Sp(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sp(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=r.sibling,t!==null){t.return=r.return,Lt=t;break}Lt=r.return}}function Uv(t,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ai(t,s),l&4&&_l(5,s);break;case 1:if(Ai(t,s),l&4)if(t=s.stateNode,r===null)try{t.componentDidMount()}catch(E){nt(s,s.return,E)}else{var h=za(s.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(h,r,t.__reactInternalSnapshotBeforeUpdate)}catch(E){nt(s,s.return,E)}}l&64&&Pv(s),l&512&&bl(s,s.return);break;case 3:if(Ai(t,s),l&64&&(t=s.updateQueue,t!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{by(t,r)}catch(E){nt(s,s.return,E)}}break;case 27:r===null&&l&4&&jv(s);case 26:case 5:Ai(t,s),r===null&&l&4&&Mv(s),l&512&&bl(s,s.return);break;case 12:Ai(t,s);break;case 13:Ai(t,s),l&4&&Hv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=XT.bind(null,s),pw(t,s))));break;case 22:if(l=s.memoizedState!==null||Qr,!l){r=r!==null&&r.memoizedState!==null||_t,h=Qr;var d=_t;Qr=l,(_t=r)&&!d?Ri(t,s,(s.subtreeFlags&8772)!==0):Ai(t,s),Qr=h,_t=d}break;case 30:break;default:Ai(t,s)}}function zv(t){var r=t.alternate;r!==null&&(t.alternate=null,zv(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&pi(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ot=null,hn=!1;function Kr(t,r,s){for(s=s.child;s!==null;)Bv(t,r,s),s=s.sibling}function Bv(t,r,s){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(dt,s)}catch{}switch(s.tag){case 26:_t||dr(s,r),Kr(t,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:_t||dr(s,r);var l=ot,h=hn;Pi(s.type)&&(ot=s.stateNode,hn=!1),Kr(t,r,s),Cl(s.stateNode),ot=l,hn=h;break;case 5:_t||dr(s,r);case 6:if(l=ot,h=hn,ot=null,Kr(t,r,s),ot=l,hn=h,ot!==null)if(hn)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(s.stateNode)}catch(d){nt(s,r,d)}else try{ot.removeChild(s.stateNode)}catch(d){nt(s,r,d)}break;case 18:ot!==null&&(hn?(t=ot,C0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),jl(t)):C0(ot,s.stateNode));break;case 4:l=ot,h=hn,ot=s.stateNode.containerInfo,hn=!0,Kr(t,r,s),ot=l,hn=h;break;case 0:case 11:case 14:case 15:_t||xi(2,s,r),_t||xi(4,s,r),Kr(t,r,s);break;case 1:_t||(dr(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&kv(s,r,l)),Kr(t,r,s);break;case 21:Kr(t,r,s);break;case 22:_t=(l=_t)||s.memoizedState!==null,Kr(t,r,s),_t=l;break;default:Kr(t,r,s)}}function Hv(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{jl(t)}catch(s){nt(r,r.return,s)}}function HT(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new Lv),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new Lv),r;default:throw Error(a(435,t.tag))}}function Wd(t,r){var s=HT(t);r.forEach(function(l){var h=WT.bind(null,t,l);s.has(l)||(s.add(l),l.then(h,h))})}function _n(t,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],d=t,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(Pi(S.type)){ot=S.stateNode,hn=!1;break e}break;case 5:ot=S.stateNode,hn=!1;break e;case 3:case 4:ot=S.stateNode.containerInfo,hn=!0;break e}S=S.return}if(ot===null)throw Error(a(160));Bv(d,E,h),ot=null,hn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)qv(r,t),r=r.sibling}var Gn=null;function qv(t,r){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:_n(r,t),bn(t),l&4&&(xi(3,t,t.return),_l(3,t),xi(5,t,t.return));break;case 1:_n(r,t),bn(t),l&512&&(_t||s===null||dr(s,s.return)),l&64&&Qr&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=Gn;if(_n(r,t),bn(t),l&512&&(_t||s===null||dr(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ma]||d[It]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Gt(d,l,s),d[It]=t,yt(d),l=d;break e;case"link":var E=j0("link","href",h).get(l+(s.href||""));if(E){for(var S=0;S<E.length;S++)if(d=E[S],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(S,1);break t}}d=h.createElement(l),Gt(d,l,s),h.head.appendChild(d);break;case"meta":if(E=j0("meta","content",h).get(l+(s.content||""))){for(S=0;S<E.length;S++)if(d=E[S],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(S,1);break t}}d=h.createElement(l),Gt(d,l,s),h.head.appendChild(d);break;default:throw Error(a(468,l))}d[It]=t,yt(d),l=d}t.stateNode=l}else L0(h,t.type,t.stateNode);else t.stateNode=V0(h,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?L0(h,t.type,t.stateNode):V0(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Qd(t,t.memoizedProps,s.memoizedProps)}break;case 27:_n(r,t),bn(t),l&512&&(_t||s===null||dr(s,s.return)),s!==null&&l&4&&Qd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(_n(r,t),bn(t),l&512&&(_t||s===null||dr(s,s.return)),t.flags&32){h=t.stateNode;try{Rn(h,"")}catch(X){nt(t,t.return,X)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Qd(t,h,s!==null?s.memoizedProps:h)),l&1024&&(Xd=!0);break;case 6:if(_n(r,t),bn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(X){nt(t,t.return,X)}}break;case 3:if(Fu=null,h=Gn,Gn=Hu(r.containerInfo),_n(r,t),Gn=h,bn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{jl(r.containerInfo)}catch(X){nt(t,t.return,X)}Xd&&(Xd=!1,Fv(t));break;case 4:l=Gn,Gn=Hu(t.stateNode.containerInfo),_n(r,t),bn(t),Gn=l;break;case 12:_n(r,t),bn(t);break;case 13:_n(r,t),bn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(rp=xn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wd(t,l)));break;case 22:h=t.memoizedState!==null;var j=s!==null&&s.memoizedState!==null,K=Qr,ee=_t;if(Qr=K||h,_t=ee||j,_n(r,t),_t=ee,Qr=K,bn(t),l&8192)e:for(r=t.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||j||Qr||_t||Ba(t)),s=null,r=t;;){if(r.tag===5||r.tag===26){if(s===null){j=s=r;try{if(d=j.stateNode,h)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=j.stateNode;var ae=j.memoizedProps.style,$=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;S.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(X){nt(j,j.return,X)}}}else if(r.tag===6){if(s===null){j=r;try{j.stateNode.nodeValue=h?"":j.memoizedProps}catch(X){nt(j,j.return,X)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Wd(t,s))));break;case 19:_n(r,t),bn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wd(t,l)));break;case 30:break;case 21:break;default:_n(r,t),bn(t)}}function bn(t){var r=t.flags;if(r&2){try{for(var s,l=t.return;l!==null;){if(Vv(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,d=Kd(t);Cu(t,d,h);break;case 5:var E=s.stateNode;s.flags&32&&(Rn(E,""),s.flags&=-33);var S=Kd(t);Cu(t,S,E);break;case 3:case 4:var j=s.stateNode.containerInfo,K=Kd(t);$d(t,K,j);break;default:throw Error(a(161))}}catch(ee){nt(t,t.return,ee)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Fv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;Fv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function Ai(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Uv(t,r.alternate,r),r=r.sibling}function Ba(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:xi(4,r,r.return),Ba(r);break;case 1:dr(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&kv(r,r.return,s),Ba(r);break;case 27:Cl(r.stateNode);case 26:case 5:dr(r,r.return),Ba(r);break;case 22:r.memoizedState===null&&Ba(r);break;case 30:Ba(r);break;default:Ba(r)}t=t.sibling}}function Ri(t,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=t,d=r,E=d.flags;switch(d.tag){case 0:case 11:case 15:Ri(h,d,s),_l(4,d);break;case 1:if(Ri(h,d,s),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(K){nt(l,l.return,K)}if(l=d,h=l.updateQueue,h!==null){var S=l.stateNode;try{var j=h.shared.hiddenCallbacks;if(j!==null)for(h.shared.hiddenCallbacks=null,h=0;h<j.length;h++)_y(j[h],S)}catch(K){nt(l,l.return,K)}}s&&E&64&&Pv(d),bl(d,d.return);break;case 27:jv(d);case 26:case 5:Ri(h,d,s),s&&l===null&&E&4&&Mv(d),bl(d,d.return);break;case 12:Ri(h,d,s);break;case 13:Ri(h,d,s),s&&E&4&&Hv(h,d);break;case 22:d.memoizedState===null&&Ri(h,d,s),bl(d,d.return);break;case 30:break;default:Ri(h,d,s)}r=r.sibling}}function Zd(t,r){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&al(s))}function Jd(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&al(t))}function pr(t,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Gv(t,r,s,l),r=r.sibling}function Gv(t,r,s,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:pr(t,r,s,l),h&2048&&_l(9,r);break;case 1:pr(t,r,s,l);break;case 3:pr(t,r,s,l),h&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&al(t)));break;case 12:if(h&2048){pr(t,r,s,l),t=r.stateNode;try{var d=r.memoizedProps,E=d.id,S=d.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){nt(r,r.return,j)}}else pr(t,r,s,l);break;case 13:pr(t,r,s,l);break;case 23:break;case 22:d=r.stateNode,E=r.alternate,r.memoizedState!==null?d._visibility&2?pr(t,r,s,l):El(t,r):d._visibility&2?pr(t,r,s,l):(d._visibility|=2,Bs(t,r,s,l,(r.subtreeFlags&10256)!==0)),h&2048&&Zd(E,r);break;case 24:pr(t,r,s,l),h&2048&&Jd(r.alternate,r);break;default:pr(t,r,s,l)}}function Bs(t,r,s,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=t,E=r,S=s,j=l,K=E.flags;switch(E.tag){case 0:case 11:case 15:Bs(d,E,S,j,h),_l(8,E);break;case 23:break;case 22:var ee=E.stateNode;E.memoizedState!==null?ee._visibility&2?Bs(d,E,S,j,h):El(d,E):(ee._visibility|=2,Bs(d,E,S,j,h)),h&&K&2048&&Zd(E.alternate,E);break;case 24:Bs(d,E,S,j,h),h&&K&2048&&Jd(E.alternate,E);break;default:Bs(d,E,S,j,h)}r=r.sibling}}function El(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=t,l=r,h=l.flags;switch(l.tag){case 22:El(s,l),h&2048&&Zd(l.alternate,l);break;case 24:El(s,l),h&2048&&Jd(l.alternate,l);break;default:El(s,l)}r=r.sibling}}var Tl=8192;function Hs(t){if(t.subtreeFlags&Tl)for(t=t.child;t!==null;)Yv(t),t=t.sibling}function Yv(t){switch(t.tag){case 26:Hs(t),t.flags&Tl&&t.memoizedState!==null&&Rw(Gn,t.memoizedState,t.memoizedProps);break;case 5:Hs(t);break;case 3:case 4:var r=Gn;Gn=Hu(t.stateNode.containerInfo),Hs(t),Gn=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Tl,Tl=16777216,Hs(t),Tl=r):Hs(t));break;default:Hs(t)}}function Qv(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function wl(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Lt=l,$v(l,t)}Qv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kv(t),t=t.sibling}function Kv(t){switch(t.tag){case 0:case 11:case 15:wl(t),t.flags&2048&&xi(9,t,t.return);break;case 3:wl(t);break;case 12:wl(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,Nu(t)):wl(t);break;default:wl(t)}}function Nu(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Lt=l,$v(l,t)}Qv(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:xi(8,r,r.return),Nu(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Nu(r));break;default:Nu(r)}t=t.sibling}}function $v(t,r){for(;Lt!==null;){var s=Lt;switch(s.tag){case 0:case 11:case 15:xi(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:al(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Lt=l;else e:for(s=t;Lt!==null;){l=Lt;var h=l.sibling,d=l.return;if(zv(l),l===s){Lt=null;break e}if(h!==null){h.return=d,Lt=h;break e}Lt=d}}}var qT={getCacheForType:function(t){var r=Wt(Dt),s=r.data.get(t);return s===void 0&&(s=t(),r.data.set(t,s)),s}},FT=typeof WeakMap=="function"?WeakMap:Map,Ke=0,it=null,ke=null,Be=0,$e=0,En=null,Ii=!1,qs=!1,ep=!1,$r=0,mt=0,Ci=0,Ha=0,tp=0,Vn=0,Fs=0,Sl=null,fn=null,np=!1,rp=0,Du=1/0,Ou=null,Ni=null,Ft=0,Di=null,Gs=null,Ys=0,ip=0,ap=null,Xv=null,xl=0,sp=null;function Tn(){if((Ke&2)!==0&&Be!==0)return Be&-Be;if(Q.T!==null){var t=Ps;return t!==0?t:dp()}return fi()}function Wv(){Vn===0&&(Vn=(Be&536870912)===0||Fe?ko():536870912);var t=Mn.current;return t!==null&&(t.flags|=32),Vn}function wn(t,r,s){(t===it&&($e===2||$e===9)||t.cancelPendingCommit!==null)&&(Qs(t,0),Oi(t,Be,Vn,!1)),Rr(t,s),((Ke&2)===0||t!==it)&&(t===it&&((Ke&2)===0&&(Ha|=s),mt===4&&Oi(t,Be,Vn,!1)),mr(t))}function Zv(t,r,s){if((Ke&6)!==0)throw Error(a(327));var l=!s&&(r&124)===0&&(r&t.expiredLanes)===0||pa(t,r),h=l?QT(t,r):cp(t,r,!0),d=l;do{if(h===0){qs&&!l&&Oi(t,r,0,!1);break}else{if(s=t.current.alternate,d&&!GT(s)){h=cp(t,r,!1),d=!1;continue}if(h===2){if(d=r,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=t;h=Sl;var j=S.current.memoizedState.isDehydrated;if(j&&(Qs(S,E).flags|=256),E=cp(S,E,!1),E!==2){if(ep&&!j){S.errorRecoveryDisabledLanes|=d,Ha|=d,h=4;break e}d=fn,fn=h,d!==null&&(fn===null?fn=d:fn.push.apply(fn,d))}h=E}if(d=!1,h!==2)continue}}if(h===1){Qs(t,0),Oi(t,r,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Oi(l,r,Vn,!Ii);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=rp+300-xn(),10<h)){if(Oi(l,r,Vn,!Ii),us(l,0,!0)!==0)break e;l.timeoutHandle=R0(Jv.bind(null,l,s,fn,Ou,np,r,Vn,Ha,Fs,Ii,d,2,-0,0),h);break e}Jv(l,s,fn,Ou,np,r,Vn,Ha,Fs,Ii,d,0,-0,0)}}break}while(!0);mr(t)}function Jv(t,r,s,l,h,d,E,S,j,K,ee,ae,$,X){if(t.timeoutHandle=-1,ae=r.subtreeFlags,(ae&8192||(ae&16785408)===16785408)&&(Ol={stylesheets:null,count:0,unsuspend:Aw},Yv(r),ae=Iw(),ae!==null)){t.cancelPendingCommit=ae(s0.bind(null,t,r,d,s,l,h,E,S,j,ee,1,$,X)),Oi(t,d,E,!K);return}s0(t,r,d,s,l,h,E,S,j)}function GT(t){for(var r=t;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],d=h.getSnapshot;h=h.value;try{if(!yn(d(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Oi(t,r,s,l){r&=~tp,r&=~Ha,t.suspendedLanes|=r,t.pingedLanes&=~r,l&&(t.warmLanes|=r),l=t.expirationTimes;for(var h=r;0<h;){var d=31-Xt(h),E=1<<d;l[d]=-1,h&=~E}s!==0&&er(t,s,r)}function Pu(){return(Ke&6)===0?(Al(0),!1):!0}function op(){if(ke!==null){if($e===0)var t=ke.return;else t=ke,Br=Va=null,Sd(t),Us=null,gl=0,t=ke;for(;t!==null;)Ov(t.alternate,t),t=t.return;ke=null}}function Qs(t,r){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,cw(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),op(),it=t,ke=s=Lr(t.current,null),Be=r,$e=0,En=null,Ii=!1,qs=pa(t,r),ep=!1,Fs=Vn=tp=Ha=Ci=mt=0,fn=Sl=null,np=!1,(r&8)!==0&&(r|=r&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=r;0<l;){var h=31-Xt(l),d=1<<h;r|=t[h],l&=~d}return $r=r,tu(),s}function e0(t,r){Oe=null,Q.H=bu,r===ol||r===uu?(r=yy(),$e=3):r===py?(r=yy(),$e=4):$e=r===vv?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,En=r,ke===null&&(mt=1,xu(t,Dn(r,t.current)))}function t0(){var t=Q.H;return Q.H=bu,t===null?bu:t}function n0(){var t=Q.A;return Q.A=qT,t}function lp(){mt=4,Ii||(Be&4194048)!==Be&&Mn.current!==null||(qs=!0),(Ci&134217727)===0&&(Ha&134217727)===0||it===null||Oi(it,Be,Vn,!1)}function cp(t,r,s){var l=Ke;Ke|=2;var h=t0(),d=n0();(it!==t||Be!==r)&&(Ou=null,Qs(t,r)),r=!1;var E=mt;e:do try{if($e!==0&&ke!==null){var S=ke,j=En;switch($e){case 8:op(),E=6;break e;case 3:case 2:case 9:case 6:Mn.current===null&&(r=!0);var K=$e;if($e=0,En=null,Ks(t,S,j,K),s&&qs){E=0;break e}break;default:K=$e,$e=0,En=null,Ks(t,S,j,K)}}YT(),E=mt;break}catch(ee){e0(t,ee)}while(!0);return r&&t.shellSuspendCounter++,Br=Va=null,Ke=l,Q.H=h,Q.A=d,ke===null&&(it=null,Be=0,tu()),E}function YT(){for(;ke!==null;)r0(ke)}function QT(t,r){var s=Ke;Ke|=2;var l=t0(),h=n0();it!==t||Be!==r?(Ou=null,Du=xn()+500,Qs(t,r)):qs=pa(t,r);e:do try{if($e!==0&&ke!==null){r=ke;var d=En;t:switch($e){case 1:$e=0,En=null,Ks(t,r,d,1);break;case 2:case 9:if(my(d)){$e=0,En=null,i0(r);break}r=function(){$e!==2&&$e!==9||it!==t||($e=7),mr(t)},d.then(r,r);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:my(d)?($e=0,En=null,i0(r)):($e=0,En=null,Ks(t,r,d,7));break;case 5:var E=null;switch(ke.tag){case 26:E=ke.memoizedState;case 5:case 27:var S=ke;if(!E||U0(E)){$e=0,En=null;var j=S.sibling;if(j!==null)ke=j;else{var K=S.return;K!==null?(ke=K,ku(K)):ke=null}break t}}$e=0,En=null,Ks(t,r,d,5);break;case 6:$e=0,En=null,Ks(t,r,d,6);break;case 8:op(),mt=6;break e;default:throw Error(a(462))}}KT();break}catch(ee){e0(t,ee)}while(!0);return Br=Va=null,Q.H=l,Q.A=h,Ke=s,ke!==null?0:(it=null,Be=0,tu(),mt)}function KT(){for(;ke!==null&&!No();)r0(ke)}function r0(t){var r=Nv(t.alternate,t,$r);t.memoizedProps=t.pendingProps,r===null?ku(t):ke=r}function i0(t){var r=t,s=r.alternate;switch(r.tag){case 15:case 0:r=Sv(s,r,r.pendingProps,r.type,void 0,Be);break;case 11:r=Sv(s,r,r.pendingProps,r.type.render,r.ref,Be);break;case 5:Sd(r);default:Ov(s,r),r=ke=ay(r,$r),r=Nv(s,r,$r)}t.memoizedProps=t.pendingProps,r===null?ku(t):ke=r}function Ks(t,r,s,l){Br=Va=null,Sd(r),Us=null,gl=0;var h=r.return;try{if(jT(t,h,r,s,Be)){mt=1,xu(t,Dn(s,t.current)),ke=null;return}}catch(d){if(h!==null)throw ke=h,d;mt=1,xu(t,Dn(s,t.current)),ke=null;return}r.flags&32768?(Fe||l===1?t=!0:qs||(Be&536870912)!==0?t=!1:(Ii=t=!0,(l===2||l===9||l===3||l===6)&&(l=Mn.current,l!==null&&l.tag===13&&(l.flags|=16384))),a0(r,t)):ku(r)}function ku(t){var r=t;do{if((r.flags&32768)!==0){a0(r,Ii);return}t=r.return;var s=UT(r.alternate,r,$r);if(s!==null){ke=s;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=t}while(r!==null);mt===0&&(mt=5)}function a0(t,r){do{var s=zT(t.alternate,t);if(s!==null){s.flags&=32767,ke=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(t=t.sibling,t!==null)){ke=t;return}ke=t=s}while(t!==null);mt=6,ke=null}function s0(t,r,s,l,h,d,E,S,j){t.cancelPendingCommit=null;do Mu();while(Ft!==0);if((Ke&6)!==0)throw Error(a(327));if(r!==null){if(r===t.current)throw Error(a(177));if(d=r.lanes|r.childLanes,d|=Jf,Vo(t,s,d,E,S,j),t===it&&(ke=it=null,Be=0),Gs=r,Di=t,Ys=s,ip=d,ap=h,Xv=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ZT(ua,function(){return h0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=Q.T,Q.T=null,h=oe.p,oe.p=2,E=Ke,Ke|=4;try{BT(t,r,s)}finally{Ke=E,oe.p=h,Q.T=l}}Ft=1,o0(),l0(),c0()}}function o0(){if(Ft===1){Ft=0;var t=Di,r=Gs,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=Q.T,Q.T=null;var l=oe.p;oe.p=2;var h=Ke;Ke|=4;try{qv(r,t);var d=Ep,E=$g(t.containerInfo),S=d.focusedElem,j=d.selectionRange;if(E!==S&&S&&S.ownerDocument&&Kg(S.ownerDocument.documentElement,S)){if(j!==null&&Kf(S)){var K=j.start,ee=j.end;if(ee===void 0&&(ee=K),"selectionStart"in S)S.selectionStart=K,S.selectionEnd=Math.min(ee,S.value.length);else{var ae=S.ownerDocument||document,$=ae&&ae.defaultView||window;if($.getSelection){var X=$.getSelection(),xe=S.textContent.length,be=Math.min(j.start,xe),Je=j.end===void 0?be:Math.min(j.end,xe);!X.extend&&be>Je&&(E=Je,Je=be,be=E);var H=Qg(S,be),z=Qg(S,Je);if(H&&z&&(X.rangeCount!==1||X.anchorNode!==H.node||X.anchorOffset!==H.offset||X.focusNode!==z.node||X.focusOffset!==z.offset)){var G=ae.createRange();G.setStart(H.node,H.offset),X.removeAllRanges(),be>Je?(X.addRange(G),X.extend(z.node,z.offset)):(G.setEnd(z.node,z.offset),X.addRange(G))}}}}for(ae=[],X=S;X=X.parentNode;)X.nodeType===1&&ae.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<ae.length;S++){var re=ae[S];re.element.scrollLeft=re.left,re.element.scrollTop=re.top}}Qu=!!bp,Ep=bp=null}finally{Ke=h,oe.p=l,Q.T=s}}t.current=r,Ft=2}}function l0(){if(Ft===2){Ft=0;var t=Di,r=Gs,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=Q.T,Q.T=null;var l=oe.p;oe.p=2;var h=Ke;Ke|=4;try{Uv(t,r.alternate,r)}finally{Ke=h,oe.p=l,Q.T=s}}Ft=3}}function c0(){if(Ft===4||Ft===3){Ft=0,Nc();var t=Di,r=Gs,s=Ys,l=Xv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ft=5:(Ft=0,Gs=Di=null,u0(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Ni=null),hs(s),r=r.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(dt,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=Q.T,h=oe.p,oe.p=2,Q.T=null;try{for(var d=t.onRecoverableError,E=0;E<l.length;E++){var S=l[E];d(S.value,{componentStack:S.stack})}}finally{Q.T=r,oe.p=h}}(Ys&3)!==0&&Mu(),mr(t),h=t.pendingLanes,(s&4194090)!==0&&(h&42)!==0?t===sp?xl++:(xl=0,sp=t):xl=0,Al(0)}}function u0(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,al(r)))}function Mu(t){return o0(),l0(),c0(),h0()}function h0(){if(Ft!==5)return!1;var t=Di,r=ip;ip=0;var s=hs(Ys),l=Q.T,h=oe.p;try{oe.p=32>s?32:s,Q.T=null,s=ap,ap=null;var d=Di,E=Ys;if(Ft=0,Gs=Di=null,Ys=0,(Ke&6)!==0)throw Error(a(331));var S=Ke;if(Ke|=4,Kv(d.current),Gv(d,d.current,E,s),Ke=S,Al(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{oe.p=h,Q.T=l,u0(t,r)}}function f0(t,r,s){r=Dn(s,r),r=Ld(t.stateNode,r,2),t=Ei(t,r,2),t!==null&&(Rr(t,2),mr(t))}function nt(t,r,s){if(t.tag===3)f0(t,t,s);else for(;r!==null;){if(r.tag===3){f0(r,t,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ni===null||!Ni.has(l))){t=Dn(s,t),s=gv(2),l=Ei(r,s,2),l!==null&&(yv(s,l,r,t),Rr(l,2),mr(l));break}}r=r.return}}function up(t,r,s){var l=t.pingCache;if(l===null){l=t.pingCache=new FT;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(s)||(ep=!0,h.add(s),t=$T.bind(null,t,r,s),r.then(t,t))}function $T(t,r,s){var l=t.pingCache;l!==null&&l.delete(r),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,it===t&&(Be&s)===s&&(mt===4||mt===3&&(Be&62914560)===Be&&300>xn()-rp?(Ke&2)===0&&Qs(t,0):tp|=s,Fs===Be&&(Fs=0)),mr(t)}function d0(t,r){r===0&&(r=Mo()),t=Cs(t,r),t!==null&&(Rr(t,r),mr(t))}function XT(t){var r=t.memoizedState,s=0;r!==null&&(s=r.retryLane),d0(t,s)}function WT(t,r){var s=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(r),d0(t,s)}function ZT(t,r){return la(t,r)}var Vu=null,$s=null,hp=!1,ju=!1,fp=!1,qa=0;function mr(t){t!==$s&&t.next===null&&($s===null?Vu=$s=t:$s=$s.next=t),ju=!0,hp||(hp=!0,ew())}function Al(t,r){if(!fp&&ju){fp=!0;do for(var s=!1,l=Vu;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var E=l.suspendedLanes,S=l.pingedLanes;d=(1<<31-Xt(42|t)+1)-1,d&=h&~(E&~S),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,y0(l,d))}else d=Be,d=us(l,l===it?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||pa(l,d)||(s=!0,y0(l,d));l=l.next}while(s);fp=!1}}function JT(){p0()}function p0(){ju=hp=!1;var t=0;qa!==0&&(lw()&&(t=qa),qa=0);for(var r=xn(),s=null,l=Vu;l!==null;){var h=l.next,d=m0(l,r);d===0?(l.next=null,s===null?Vu=h:s.next=h,h===null&&($s=s)):(s=l,(t!==0||(d&3)!==0)&&(ju=!0)),l=h}Al(t)}function m0(t,r){for(var s=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Xt(d),S=1<<E,j=h[E];j===-1?((S&s)===0||(S&l)!==0)&&(h[E]=Po(S,r)):j<=r&&(t.expiredLanes|=S),d&=~S}if(r=it,s=Be,s=us(t,t===r?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===r&&($e===2||$e===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ca(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||pa(t,s)){if(r=s&-s,r===t.callbackPriority)return r;switch(l!==null&&ca(l),hs(s)){case 2:case 8:s=ls;break;case 32:s=ua;break;case 268435456:s=cs;break;default:s=ua}return l=g0.bind(null,t),s=la(s,l),t.callbackPriority=r,t.callbackNode=s,r}return l!==null&&l!==null&&ca(l),t.callbackPriority=2,t.callbackNode=null,2}function g0(t,r){if(Ft!==0&&Ft!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Mu()&&t.callbackNode!==s)return null;var l=Be;return l=us(t,t===it?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Zv(t,l,r),m0(t,xn()),t.callbackNode!=null&&t.callbackNode===s?g0.bind(null,t):null)}function y0(t,r){if(Mu())return null;Zv(t,r,!0)}function ew(){uw(function(){(Ke&6)!==0?la(Do,JT):p0()})}function dp(){return qa===0&&(qa=ko()),qa}function v0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ys(""+t)}function _0(t,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,t.id&&s.setAttribute("form",t.id),r.parentNode.insertBefore(s,r),t=new FormData(t),s.parentNode.removeChild(s),t}function tw(t,r,s,l,h){if(r==="submit"&&s&&s.stateNode===h){var d=v0((h[Et]||null).action),E=l.submitter;E&&(r=(r=E[Et]||null)?v0(r.formAction):E.getAttribute("formAction"),r!==null&&(d=r,E=null));var S=new vs("action","action",null,l,h);t.push({event:S,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qa!==0){var j=E?_0(h,E):new FormData(h);Pd(s,{pending:!0,data:j,method:h.method,action:d},null,j)}}else typeof d=="function"&&(S.preventDefault(),j=E?_0(h,E):new FormData(h),Pd(s,{pending:!0,data:j,method:h.method,action:d},d,j))},currentTarget:h}]})}}for(var pp=0;pp<Zf.length;pp++){var mp=Zf[pp],nw=mp.toLowerCase(),rw=mp[0].toUpperCase()+mp.slice(1);Fn(nw,"on"+rw)}Fn(Zg,"onAnimationEnd"),Fn(Jg,"onAnimationIteration"),Fn(ey,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(bT,"onTransitionRun"),Fn(ET,"onTransitionStart"),Fn(TT,"onTransitionCancel"),Fn(ty,"onTransitionEnd"),Cr("onMouseEnter",["mouseout","mouseover"]),Cr("onMouseLeave",["mouseout","mouseover"]),Cr("onPointerEnter",["pointerout","pointerover"]),Cr("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function b0(t,r){r=(r&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],h=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var E=l.length-1;0<=E;E--){var S=l[E],j=S.instance,K=S.currentTarget;if(S=S.listener,j!==d&&h.isPropagationStopped())break e;d=S,h.currentTarget=K;try{d(h)}catch(ee){Su(ee)}h.currentTarget=null,d=j}else for(E=0;E<l.length;E++){if(S=l[E],j=S.instance,K=S.currentTarget,S=S.listener,j!==d&&h.isPropagationStopped())break e;d=S,h.currentTarget=K;try{d(h)}catch(ee){Su(ee)}h.currentTarget=null,d=j}}}}function Me(t,r){var s=r[Lo];s===void 0&&(s=r[Lo]=new Set);var l=t+"__bubble";s.has(l)||(E0(r,t,2,!1),s.add(l))}function gp(t,r,s){var l=0;r&&(l|=4),E0(s,t,l,r)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function yp(t){if(!t[Lu]){t[Lu]=!0,Uo.forEach(function(s){s!=="selectionchange"&&(iw.has(s)||gp(s,!1,t),gp(s,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Lu]||(r[Lu]=!0,gp("selectionchange",!1,r))}}function E0(t,r,s,l){switch(G0(r)){case 2:var h=Dw;break;case 8:h=Ow;break;default:h=Dp}s=h.bind(null,r,s,t),h=void 0,!Cn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(r,s,{capture:!0,passive:h}):t.addEventListener(r,s,!0):h!==void 0?t.addEventListener(r,s,{passive:h}):t.addEventListener(r,s,!1)}function vp(t,r,s,l,h){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var S=l.stateNode.containerInfo;if(S===h)break;if(E===4)for(E=l.return;E!==null;){var j=E.tag;if((j===3||j===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;S!==null;){if(E=Ir(S),E===null)return;if(j=E.tag,j===5||j===6||j===26||j===27){l=d=E;continue e}S=S.parentNode}}l=l.return}zc(function(){var K=d,ee=In(s),ae=[];e:{var $=ny.get(t);if($!==void 0){var X=vs,xe=t;switch(t){case"keypress":if(sr(s)===0)break e;case"keydown":case"keyup":X=Ss;break;case"focusin":xe="focus",X=Es;break;case"focusout":xe="blur",X=Es;break;case"beforeblur":case"afterblur":X=Es;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Kc;break;case Zg:case Jg:case ey:X=Ts;break;case ty:X=Xc;break;case"scroll":case"scrollend":X=Bc;break;case"wheel":X=xs;break;case"copy":case"cut":case"paste":X=ws;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Wo;break;case"toggle":case"beforetoggle":X=Zc}var be=(r&4)!==0,Je=!be&&(t==="scroll"||t==="scrollend"),H=be?$!==null?$+"Capture":null:$;be=[];for(var z=K,G;z!==null;){var re=z;if(G=re.stateNode,re=re.tag,re!==5&&re!==26&&re!==27||G===null||H===null||(re=Ta(z,H),re!=null&&be.push(Il(z,re,G))),Je)break;z=z.return}0<be.length&&($=new X($,xe,null,s,ee),ae.push({event:$,listeners:be}))}}if((r&7)===0){e:{if($=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",$&&s!==Or&&(xe=s.relatedTarget||s.fromElement)&&(Ir(xe)||xe[An]))break e;if((X||$)&&($=ee.window===ee?ee:($=ee.ownerDocument)?$.defaultView||$.parentWindow:window,X?(xe=s.relatedTarget||s.toElement,X=K,xe=xe?Ir(xe):null,xe!==null&&(Je=c(xe),be=xe.tag,xe!==Je||be!==5&&be!==27&&be!==6)&&(xe=null)):(X=null,xe=K),X!==xe)){if(be=Nn,re="onMouseLeave",H="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(be=Wo,re="onPointerLeave",H="onPointerEnter",z="pointer"),Je=X==null?$:nr(X),G=xe==null?$:nr(xe),$=new be(re,z+"leave",X,s,ee),$.target=Je,$.relatedTarget=G,re=null,Ir(ee)===K&&(be=new be(H,z+"enter",xe,s,ee),be.target=G,be.relatedTarget=Je,re=be),Je=re,X&&xe)t:{for(be=X,H=xe,z=0,G=be;G;G=Xs(G))z++;for(G=0,re=H;re;re=Xs(re))G++;for(;0<z-G;)be=Xs(be),z--;for(;0<G-z;)H=Xs(H),G--;for(;z--;){if(be===H||H!==null&&be===H.alternate)break t;be=Xs(be),H=Xs(H)}be=null}else be=null;X!==null&&T0(ae,$,X,be,!1),xe!==null&&Je!==null&&T0(ae,Je,xe,be,!0)}}e:{if($=K?nr(K):window,X=$.nodeName&&$.nodeName.toLowerCase(),X==="select"||X==="input"&&$.type==="file")var me=Bg;else if(Nt($))if(Hg)me=yT;else{me=mT;var Pe=pT}else X=$.nodeName,!X||X.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?K&&Fo(K.elementType)&&(me=Bg):me=gT;if(me&&(me=me(t,K))){jr(ae,me,s,ee);break e}Pe&&Pe(t,$,K),t==="focusout"&&K&&$.type==="number"&&K.memoizedProps.value!=null&&gi($,"number",$.value)}switch(Pe=K?nr(K):window,t){case"focusin":(Nt(Pe)||Pe.contentEditable==="true")&&(As=Pe,$f=K,el=null);break;case"focusout":el=$f=As=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,Xg(ae,s,ee);break;case"selectionchange":if(_T)break;case"keydown":case"keyup":Xg(ae,s,ee)}var ye;if(cr)e:{switch(t){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Ue?W(t,s)&&(Ee="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ee="onCompositionStart");Ee&&(b&&s.locale!=="ko"&&(Ue||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ue&&(ye=Yo()):(ar=ee,yi="value"in ar?ar.value:ar.textContent,Ue=!0)),Pe=Uu(K,Ee),0<Pe.length&&(Ee=new $o(Ee,t,null,s,ee),ae.push({event:Ee,listeners:Pe}),ye?Ee.data=ye:(ye=he(s),ye!==null&&(Ee.data=ye)))),(ye=v?Ct(t,s):ze(t,s))&&(Ee=Uu(K,"onBeforeInput"),0<Ee.length&&(Pe=new $o("onBeforeInput","beforeinput",null,s,ee),ae.push({event:Pe,listeners:Ee}),Pe.data=ye)),tw(ae,t,K,s,ee)}b0(ae,r)})}function Il(t,r,s){return{instance:t,listener:r,currentTarget:s}}function Uu(t,r){for(var s=r+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Ta(t,s),h!=null&&l.unshift(Il(t,h,d)),h=Ta(t,r),h!=null&&l.push(Il(t,h,d))),t.tag===3)return l;t=t.return}return[]}function Xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function T0(t,r,s,l,h){for(var d=r._reactName,E=[];s!==null&&s!==l;){var S=s,j=S.alternate,K=S.stateNode;if(S=S.tag,j!==null&&j===l)break;S!==5&&S!==26&&S!==27||K===null||(j=K,h?(K=Ta(s,d),K!=null&&E.unshift(Il(s,K,j))):h||(K=Ta(s,d),K!=null&&E.push(Il(s,K,j)))),s=s.return}E.length!==0&&t.push({event:r,listeners:E})}var aw=/\r\n?/g,sw=/\u0000|\uFFFD/g;function w0(t){return(typeof t=="string"?t:""+t).replace(aw,`
`).replace(sw,"")}function S0(t,r){return r=w0(r),w0(t)===r}function zu(){}function Ze(t,r,s,l,h,d){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Rn(t,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Rn(t,""+l);break;case"className":rr(t,"class",l);break;case"tabIndex":rr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":rr(t,s,l);break;case"style":qo(t,l,d);break;case"data":if(r!=="object"){rr(t,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=ys(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(r!=="input"&&Ze(t,r,"name",h.name,h,null),Ze(t,r,"formEncType",h.formEncType,h,null),Ze(t,r,"formMethod",h.formMethod,h,null),Ze(t,r,"formTarget",h.formTarget,h,null)):(Ze(t,r,"encType",h.encType,h,null),Ze(t,r,"method",h.method,h,null),Ze(t,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=ys(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=zu);break;case"onScroll":l!=null&&Me("scroll",t);break;case"onScrollEnd":l!=null&&Me("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=ys(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Me("beforetoggle",t),Me("toggle",t),mi(t,"popover",l);break;case"xlinkActuate":Bt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Bt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Bt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Bt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Bt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Bt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mi(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Hf.get(s)||s,mi(t,s,l))}}function _p(t,r,s,l,h,d){switch(s){case"style":qo(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Rn(t,l):(typeof l=="number"||typeof l=="bigint")&&Rn(t,""+l);break;case"onScroll":l!=null&&Me("scroll",t);break;case"onScrollEnd":l!=null&&Me("scrollend",t);break;case"onClick":l!=null&&(t.onclick=zu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fs.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),d=t[Et]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(r,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(r,l,h);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):mi(t,s,l)}}}function Gt(t,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var l=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var E=s[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ze(t,r,d,E,s,null)}}h&&Ze(t,r,"srcSet",s.srcSet,s,null),l&&Ze(t,r,"src",s.src,s,null);return;case"input":Me("invalid",t);var S=d=E=h=null,j=null,K=null;for(l in s)if(s.hasOwnProperty(l)){var ee=s[l];if(ee!=null)switch(l){case"name":h=ee;break;case"type":E=ee;break;case"checked":j=ee;break;case"defaultChecked":K=ee;break;case"value":d=ee;break;case"defaultValue":S=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(a(137,r));break;default:Ze(t,r,l,ee,s,null)}}_a(t,d,S,j,K,E,h,!1),gs(t);return;case"select":Me("invalid",t),l=E=d=null;for(h in s)if(s.hasOwnProperty(h)&&(S=s[h],S!=null))switch(h){case"value":d=S;break;case"defaultValue":E=S;break;case"multiple":l=S;default:Ze(t,r,h,S,s,null)}r=d,s=E,t.multiple=!!l,r!=null?Dr(t,!!l,r,!1):s!=null&&Dr(t,!!l,s,!0);return;case"textarea":Me("invalid",t),d=h=l=null;for(E in s)if(s.hasOwnProperty(E)&&(S=s[E],S!=null))switch(E){case"value":l=S;break;case"defaultValue":h=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(a(91));break;default:Ze(t,r,E,S,s,null)}ba(t,l,h,d),gs(t);return;case"option":for(j in s)if(s.hasOwnProperty(j)&&(l=s[j],l!=null))switch(j){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ze(t,r,j,l,s,null)}return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(l=0;l<Rl.length;l++)Me(Rl[l],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in s)if(s.hasOwnProperty(K)&&(l=s[K],l!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ze(t,r,K,l,s,null)}return;default:if(Fo(r)){for(ee in s)s.hasOwnProperty(ee)&&(l=s[ee],l!==void 0&&_p(t,r,ee,l,s,void 0));return}}for(S in s)s.hasOwnProperty(S)&&(l=s[S],l!=null&&Ze(t,r,S,l,s,null))}function ow(t,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,E=null,S=null,j=null,K=null,ee=null;for(X in s){var ae=s[X];if(s.hasOwnProperty(X)&&ae!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":j=ae;default:l.hasOwnProperty(X)||Ze(t,r,X,null,l,ae)}}for(var $ in l){var X=l[$];if(ae=s[$],l.hasOwnProperty($)&&(X!=null||ae!=null))switch($){case"type":d=X;break;case"name":h=X;break;case"checked":K=X;break;case"defaultChecked":ee=X;break;case"value":E=X;break;case"defaultValue":S=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,r));break;default:X!==ae&&Ze(t,r,$,X,l,ae)}}gn(t,E,S,j,K,ee,d,h);return;case"select":X=E=S=$=null;for(d in s)if(j=s[d],s.hasOwnProperty(d)&&j!=null)switch(d){case"value":break;case"multiple":X=j;default:l.hasOwnProperty(d)||Ze(t,r,d,null,l,j)}for(h in l)if(d=l[h],j=s[h],l.hasOwnProperty(h)&&(d!=null||j!=null))switch(h){case"value":$=d;break;case"defaultValue":S=d;break;case"multiple":E=d;default:d!==j&&Ze(t,r,h,d,l,j)}r=S,s=E,l=X,$!=null?Dr(t,!!s,$,!1):!!l!=!!s&&(r!=null?Dr(t,!!s,r,!0):Dr(t,!!s,s?[]:"",!1));return;case"textarea":X=$=null;for(S in s)if(h=s[S],s.hasOwnProperty(S)&&h!=null&&!l.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Ze(t,r,S,null,l,h)}for(E in l)if(h=l[E],d=s[E],l.hasOwnProperty(E)&&(h!=null||d!=null))switch(E){case"value":$=h;break;case"defaultValue":X=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==d&&Ze(t,r,E,h,l,d)}Xe(t,$,X);return;case"option":for(var xe in s)if($=s[xe],s.hasOwnProperty(xe)&&$!=null&&!l.hasOwnProperty(xe))switch(xe){case"selected":t.selected=!1;break;default:Ze(t,r,xe,null,l,$)}for(j in l)if($=l[j],X=s[j],l.hasOwnProperty(j)&&$!==X&&($!=null||X!=null))switch(j){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Ze(t,r,j,$,l,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in s)$=s[be],s.hasOwnProperty(be)&&$!=null&&!l.hasOwnProperty(be)&&Ze(t,r,be,null,l,$);for(K in l)if($=l[K],X=s[K],l.hasOwnProperty(K)&&$!==X&&($!=null||X!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(a(137,r));break;default:Ze(t,r,K,$,l,X)}return;default:if(Fo(r)){for(var Je in s)$=s[Je],s.hasOwnProperty(Je)&&$!==void 0&&!l.hasOwnProperty(Je)&&_p(t,r,Je,void 0,l,$);for(ee in l)$=l[ee],X=s[ee],!l.hasOwnProperty(ee)||$===X||$===void 0&&X===void 0||_p(t,r,ee,$,l,X);return}}for(var H in s)$=s[H],s.hasOwnProperty(H)&&$!=null&&!l.hasOwnProperty(H)&&Ze(t,r,H,null,l,$);for(ae in l)$=l[ae],X=s[ae],!l.hasOwnProperty(ae)||$===X||$==null&&X==null||Ze(t,r,ae,$,l,X)}var bp=null,Ep=null;function Bu(t){return t.nodeType===9?t:t.ownerDocument}function x0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A0(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function Tp(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var wp=null;function lw(){var t=window.event;return t&&t.type==="popstate"?t===wp?!1:(wp=t,!0):(wp=null,!1)}var R0=typeof setTimeout=="function"?setTimeout:void 0,cw=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,uw=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(t){return I0.resolve(null).then(t).catch(hw)}:R0;function hw(t){setTimeout(function(){throw t})}function Pi(t){return t==="head"}function C0(t,r){var s=r,l=0,h=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<l&&8>l){s=l;var E=t.ownerDocument;if(s&1&&Cl(E.documentElement),s&2&&Cl(E.body),s&4)for(s=E.head,Cl(s),E=s.firstChild;E;){var S=E.nextSibling,j=E.nodeName;E[ma]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=S}}if(h===0){t.removeChild(d),jl(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=d}while(s);jl(r)}function Sp(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Sp(s),pi(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function fw(t,r,s,l){for(;t.nodeType===1;){var h=s;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ma])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Yn(t.nextSibling),t===null)break}return null}function dw(t,r,s){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Yn(t.nextSibling),t===null))return null;return t}function xp(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function pw(t,r){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Yn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}var Ap=null;function N0(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return t;r--}else s==="/$"&&r++}t=t.previousSibling}return null}function D0(t,r,s){switch(r=Bu(s),t){case"html":if(t=r.documentElement,!t)throw Error(a(452));return t;case"head":if(t=r.head,!t)throw Error(a(453));return t;case"body":if(t=r.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Cl(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);pi(t)}var jn=new Map,O0=new Set;function Hu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xr=oe.d;oe.d={f:mw,r:gw,D:yw,C:vw,L:_w,m:bw,X:Tw,S:Ew,M:ww};function mw(){var t=Xr.f(),r=Pu();return t||r}function gw(t){var r=tr(t);r!==null&&r.tag===5&&r.type==="form"?Zy(r):Xr.r(t)}var Ws=typeof document>"u"?null:document;function P0(t,r,s){var l=Ws;if(l&&typeof r=="string"&&r){var h=Tt(r);h='link[rel="'+t+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),O0.has(h)||(O0.add(h),t={rel:t,crossOrigin:s,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Gt(r,"link",t),yt(r),l.head.appendChild(r)))}}function yw(t){Xr.D(t),P0("dns-prefetch",t,null)}function vw(t,r){Xr.C(t,r),P0("preconnect",t,r)}function _w(t,r,s){Xr.L(t,r,s);var l=Ws;if(l&&t&&r){var h='link[rel="preload"][as="'+Tt(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Tt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Tt(s.imageSizes)+'"]')):h+='[href="'+Tt(t)+'"]';var d=h;switch(r){case"style":d=Zs(t);break;case"script":d=Js(t)}jn.has(d)||(t=_({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:t,as:r},s),jn.set(d,t),l.querySelector(h)!==null||r==="style"&&l.querySelector(Nl(d))||r==="script"&&l.querySelector(Dl(d))||(r=l.createElement("link"),Gt(r,"link",t),yt(r),l.head.appendChild(r)))}}function bw(t,r){Xr.m(t,r);var s=Ws;if(s&&t){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+Tt(l)+'"][href="'+Tt(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Js(t)}if(!jn.has(d)&&(t=_({rel:"modulepreload",href:t},r),jn.set(d,t),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Dl(d)))return}l=s.createElement("link"),Gt(l,"link",t),yt(l),s.head.appendChild(l)}}}function Ew(t,r,s){Xr.S(t,r,s);var l=Ws;if(l&&t){var h=an(l).hoistableStyles,d=Zs(t);r=r||"default";var E=h.get(d);if(!E){var S={loading:0,preload:null};if(E=l.querySelector(Nl(d)))S.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":r},s),(s=jn.get(d))&&Rp(t,s);var j=E=l.createElement("link");yt(j),Gt(j,"link",t),j._p=new Promise(function(K,ee){j.onload=K,j.onerror=ee}),j.addEventListener("load",function(){S.loading|=1}),j.addEventListener("error",function(){S.loading|=2}),S.loading|=4,qu(E,r,l)}E={type:"stylesheet",instance:E,count:1,state:S},h.set(d,E)}}}function Tw(t,r){Xr.X(t,r);var s=Ws;if(s&&t){var l=an(s).hoistableScripts,h=Js(t),d=l.get(h);d||(d=s.querySelector(Dl(h)),d||(t=_({src:t,async:!0},r),(r=jn.get(h))&&Ip(t,r),d=s.createElement("script"),yt(d),Gt(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function ww(t,r){Xr.M(t,r);var s=Ws;if(s&&t){var l=an(s).hoistableScripts,h=Js(t),d=l.get(h);d||(d=s.querySelector(Dl(h)),d||(t=_({src:t,async:!0,type:"module"},r),(r=jn.get(h))&&Ip(t,r),d=s.createElement("script"),yt(d),Gt(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function k0(t,r,s,l){var h=(h=_e.current)?Hu(h):null;if(!h)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=Zs(s.href),s=an(h).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Zs(s.href);var d=an(h).hoistableStyles,E=d.get(t);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=h.querySelector(Nl(t)))&&!d._p&&(E.instance=d,E.state.loading=5),jn.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},jn.set(t,s),d||Sw(h,t,s,E.state))),r&&l===null)throw Error(a(528,""));return E}if(r&&l!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Js(s),s=an(h).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Zs(t){return'href="'+Tt(t)+'"'}function Nl(t){return'link[rel="stylesheet"]['+t+"]"}function M0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Sw(t,r,s,l){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=t.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Gt(r,"link",s),yt(r),t.head.appendChild(r))}function Js(t){return'[src="'+Tt(t)+'"]'}function Dl(t){return"script[async]"+t}function V0(t,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=t.querySelector('style[data-href~="'+Tt(s.href)+'"]');if(l)return r.instance=l,yt(l),l;var h=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),yt(l),Gt(l,"style",h),qu(l,s.precedence,t),r.instance=l;case"stylesheet":h=Zs(s.href);var d=t.querySelector(Nl(h));if(d)return r.state.loading|=4,r.instance=d,yt(d),d;l=M0(s),(h=jn.get(h))&&Rp(l,h),d=(t.ownerDocument||t).createElement("link"),yt(d);var E=d;return E._p=new Promise(function(S,j){E.onload=S,E.onerror=j}),Gt(d,"link",l),r.state.loading|=4,qu(d,s.precedence,t),r.instance=d;case"script":return d=Js(s.src),(h=t.querySelector(Dl(d)))?(r.instance=h,yt(h),h):(l=s,(h=jn.get(d))&&(l=_({},s),Ip(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),yt(h),Gt(h,"link",l),t.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,qu(l,s.precedence,t));return r.instance}function qu(t,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,E=0;E<l.length;E++){var S=l[E];if(S.dataset.precedence===r)d=S;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(t,r.firstChild))}function Rp(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function Ip(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var Fu=null;function j0(t,r,s){if(Fu===null){var l=new Map,h=Fu=new Map;h.set(s,l)}else h=Fu,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),h=0;h<s.length;h++){var d=s[h];if(!(d[ma]||d[It]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(r)||"";E=t+E;var S=l.get(E);S?S.push(d):l.set(E,[d])}}return l}function L0(t,r,s){t=t.ownerDocument||t,t.head.insertBefore(s,r==="title"?t.querySelector("head > title"):null)}function xw(t,r,s){if(s===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function U0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ol=null;function Aw(){}function Rw(t,r,s){if(Ol===null)throw Error(a(475));var l=Ol;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Zs(s.href),d=t.querySelector(Nl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Gu.bind(l),t.then(l,l)),r.state.loading|=4,r.instance=d,yt(d);return}d=t.ownerDocument||t,s=M0(s),(h=jn.get(h))&&Rp(s,h),d=d.createElement("link"),yt(d);var E=d;E._p=new Promise(function(S,j){E.onload=S,E.onerror=j}),Gt(d,"link",s),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Gu.bind(l),t.addEventListener("load",r),t.addEventListener("error",r))}}function Iw(){if(Ol===null)throw Error(a(475));var t=Ol;return t.stylesheets&&t.count===0&&Cp(t,t.stylesheets),0<t.count?function(r){var s=setTimeout(function(){if(t.stylesheets&&Cp(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(s)}}:null}function Gu(){if(this.count--,this.count===0){if(this.stylesheets)Cp(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yu=null;function Cp(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yu=new Map,r.forEach(Cw,t),Yu=null,Gu.call(t))}function Cw(t,r){if(!(r.state.loading&4)){var s=Yu.get(t);if(s)var l=s.get(null);else{s=new Map,Yu.set(t,s);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var E=h[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}h=r.instance,E=h.getAttribute("data-precedence"),d=s.get(E)||l,d===l&&s.set(null,h),s.set(E,h),this.count++,l=Gu.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),r.state.loading|=4}}var Pl={$$typeof:q,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function Nw(t,r,s,l,h,d,E,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ar(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ar(0),this.hiddenUpdates=Ar(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function z0(t,r,s,l,h,d,E,S,j,K,ee,ae){return t=new Nw(t,r,s,E,S,j,K,ae),r=1,d===!0&&(r|=24),d=vn(3,null,null,r),t.current=d,d.stateNode=t,r=ud(),r.refCount++,t.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:r},pd(d),t}function B0(t){return t?(t=Ns,t):Ns}function H0(t,r,s,l,h,d){h=B0(h),l.context===null?l.context=h:l.pendingContext=h,l=bi(r),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Ei(t,l,r),s!==null&&(wn(s,t,r),cl(s,t,r))}function q0(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<r?s:r}}function Np(t,r){q0(t,r),(t=t.alternate)&&q0(t,r)}function F0(t){if(t.tag===13){var r=Cs(t,67108864);r!==null&&wn(r,t,67108864),Np(t,67108864)}}var Qu=!0;function Dw(t,r,s,l){var h=Q.T;Q.T=null;var d=oe.p;try{oe.p=2,Dp(t,r,s,l)}finally{oe.p=d,Q.T=h}}function Ow(t,r,s,l){var h=Q.T;Q.T=null;var d=oe.p;try{oe.p=8,Dp(t,r,s,l)}finally{oe.p=d,Q.T=h}}function Dp(t,r,s,l){if(Qu){var h=Op(l);if(h===null)vp(t,r,l,Ku,s),Y0(t,l);else if(kw(h,t,r,s,l))l.stopPropagation();else if(Y0(t,l),r&4&&-1<Pw.indexOf(t)){for(;h!==null;){var d=tr(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Bn(d.pendingLanes);if(E!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var j=1<<31-Xt(E);S.entanglements[1]|=j,E&=~j}mr(d),(Ke&6)===0&&(Du=xn()+500,Al(0))}}break;case 13:S=Cs(d,2),S!==null&&wn(S,d,2),Pu(),Np(d,2)}if(d=Op(l),d===null&&vp(t,r,l,Ku,s),d===h)break;h=d}h!==null&&l.stopPropagation()}else vp(t,r,l,null,s)}}function Op(t){return t=In(t),Pp(t)}var Ku=null;function Pp(t){if(Ku=null,t=Ir(t),t!==null){var r=c(t);if(r===null)t=null;else{var s=r.tag;if(s===13){if(t=f(r),t!==null)return t;t=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return Ku=t,null}function G0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vf()){case Do:return 2;case ls:return 8;case ua:case jf:return 32;case cs:return 268435456;default:return 32}default:return 32}}var kp=!1,ki=null,Mi=null,Vi=null,kl=new Map,Ml=new Map,ji=[],Pw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y0(t,r){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Mi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":kl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(r.pointerId)}}function Vl(t,r,s,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},r!==null&&(r=tr(r),r!==null&&F0(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function kw(t,r,s,l,h){switch(r){case"focusin":return ki=Vl(ki,t,r,s,l,h),!0;case"dragenter":return Mi=Vl(Mi,t,r,s,l,h),!0;case"mouseover":return Vi=Vl(Vi,t,r,s,l,h),!0;case"pointerover":var d=h.pointerId;return kl.set(d,Vl(kl.get(d)||null,t,r,s,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Ml.set(d,Vl(Ml.get(d)||null,t,r,s,l,h)),!0}return!1}function Q0(t){var r=Ir(t.target);if(r!==null){var s=c(r);if(s!==null){if(r=s.tag,r===13){if(r=f(s),r!==null){t.blockedOn=r,Pc(t.priority,function(){if(s.tag===13){var l=Tn();l=hi(l);var h=Cs(s,l);h!==null&&wn(h,s,l),Np(s,l)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var s=Op(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Or=l,s.target.dispatchEvent(l),Or=null}else return r=tr(s),r!==null&&F0(r),t.blockedOn=s,!1;r.shift()}return!0}function K0(t,r,s){$u(t)&&s.delete(r)}function Mw(){kp=!1,ki!==null&&$u(ki)&&(ki=null),Mi!==null&&$u(Mi)&&(Mi=null),Vi!==null&&$u(Vi)&&(Vi=null),kl.forEach(K0),Ml.forEach(K0)}function Xu(t,r){t.blockedOn===r&&(t.blockedOn=null,kp||(kp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Mw)))}var Wu=null;function $0(t){Wu!==t&&(Wu=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Wu===t&&(Wu=null);for(var r=0;r<t.length;r+=3){var s=t[r],l=t[r+1],h=t[r+2];if(typeof l!="function"){if(Pp(l||s)===null)continue;break}var d=tr(s);d!==null&&(t.splice(r,3),r-=3,Pd(d,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function jl(t){function r(j){return Xu(j,t)}ki!==null&&Xu(ki,t),Mi!==null&&Xu(Mi,t),Vi!==null&&Xu(Vi,t),kl.forEach(r),Ml.forEach(r);for(var s=0;s<ji.length;s++){var l=ji[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ji.length&&(s=ji[0],s.blockedOn===null);)Q0(s),s.blockedOn===null&&ji.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],d=s[l+1],E=h[Et]||null;if(typeof d=="function")E||$0(s);else if(E){var S=null;if(d&&d.hasAttribute("formAction")){if(h=d,E=d[Et]||null)S=E.formAction;else if(Pp(h)!==null)continue}else S=E.action;typeof S=="function"?s[l+1]=S:(s.splice(l,3),l-=3),$0(s)}}}function Mp(t){this._internalRoot=t}Zu.prototype.render=Mp.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,l=Tn();H0(s,l,t,r,null,null)},Zu.prototype.unmount=Mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;H0(t.current,2,null,t,null,null),Pu(),r[An]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var r=fi();t={blockedOn:null,target:t,priority:r};for(var s=0;s<ji.length&&r!==0&&r<ji[s].priority;s++);ji.splice(s,0,t),s===0&&Q0(t)}};var X0=e.version;if(X0!=="19.1.1")throw Error(a(527,X0,"19.1.1"));oe.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(r),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Vw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ju.isDisabled&&Ju.supportsFiber)try{dt=Ju.inject(Vw),Qe=Ju}catch{}}return Ul.createRoot=function(t,r){if(!o(t))throw Error(a(299));var s=!1,l="",h=fv,d=dv,E=pv,S=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=z0(t,1,!1,null,null,s,l,h,d,E,S,null),t[An]=r.current,yp(t),new Mp(r)},Ul.hydrateRoot=function(t,r,s){if(!o(t))throw Error(a(299));var l=!1,h="",d=fv,E=dv,S=pv,j=null,K=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(S=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(j=s.unstable_transitionCallbacks),s.formState!==void 0&&(K=s.formState)),r=z0(t,1,!0,r,s??null,l,h,d,E,S,j,K),r.context=B0(null),s=r.current,l=Tn(),l=hi(l),h=bi(l),h.callback=null,Ei(s,h,l),s=l,r.current.lanes=s,Rr(r,s),mr(r),t[An]=r.current,yp(t),new Zu(r)},Ul.version="19.1.1",Ul}var s1;function Yw(){if(s1)return Lp.exports;s1=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Lp.exports=Gw(),Lp.exports}var Qw=Yw();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var o1="popstate";function Kw(i={}){function e(o,c){let{pathname:f="/",search:p="",hash:m=""}=rs(o.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),om("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let f=o.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=o.location.href,g=m.indexOf("#");p=g===-1?m:m.slice(0,g)}return p+"#"+(typeof c=="string"?c:ec(c))}function a(o,c){Xn(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Xw(e,n,a,i)}function ut(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Xn(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $w(){return Math.random().toString(36).substring(2,10)}function l1(i,e){return{usr:i.state,key:i.key,idx:e}}function om(i,e,n=null,a){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?rs(e):e,state:n,key:e&&e.key||a||$w()}}function ec({pathname:i="/",search:e="",hash:n=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(i+=n.charAt(0)==="#"?n:"#"+n),i}function rs(i){let e={};if(i){let n=i.indexOf("#");n>=0&&(e.hash=i.substring(n),i=i.substring(0,n));let a=i.indexOf("?");a>=0&&(e.search=i.substring(a),i=i.substring(0,a)),i&&(e.pathname=i)}return e}function Xw(i,e,n,a={}){let{window:o=document.defaultView,v5Compat:c=!1}=a,f=o.history,p="POP",m=null,g=_();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function _(){return(f.state||{idx:null}).idx}function T(){p="POP";let M=_(),U=M==null?null:M-g;g=M,m&&m({action:p,location:V.location,delta:U})}function w(M,U){p="PUSH";let Y=om(V.location,M,U);n&&n(Y,M),g=_()+1;let q=l1(Y,g),te=V.createHref(Y);try{f.pushState(q,"",te)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;o.location.assign(te)}c&&m&&m({action:p,location:V.location,delta:1})}function x(M,U){p="REPLACE";let Y=om(V.location,M,U);n&&n(Y,M),g=_();let q=l1(Y,g),te=V.createHref(Y);f.replaceState(q,"",te),c&&m&&m({action:p,location:V.location,delta:0})}function O(M){return Ww(M)}let V={get action(){return p},get location(){return i(o,f)},listen(M){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(o1,T),m=M,()=>{o.removeEventListener(o1,T),m=null}},createHref(M){return e(o,M)},createURL:O,encodeLocation(M){let U=O(M);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:w,replace:x,go(M){return f.go(M)}};return V}function Ww(i,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ut(n,"No window.location.(origin|href) available to create URL");let a=typeof i=="string"?i:ec(i);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function u2(i,e,n="/"){return Zw(i,e,n,!1)}function Zw(i,e,n,a){let o=typeof e=="string"?rs(e):e,c=ti(o.pathname||"/",n);if(c==null)return null;let f=h2(i);Jw(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let g=uS(c);p=lS(f[m],g,a)}return p}function h2(i,e=[],n=[],a="",o=!1){let c=(f,p,m=o,g)=>{let _={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(a)&&m)return;ut(_.relativePath.startsWith(a),`Absolute route path "${_.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(a.length)}let T=Jr([a,_.relativePath]),w=n.concat(_);f.children&&f.children.length>0&&(ut(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),h2(f.children,e,w,T,m)),!(f.path==null&&!f.index)&&e.push({path:T,score:sS(T,f.index),routesMeta:w})};return i.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of f2(f.path))c(f,p,!0,m)}),e}function f2(i){let e=i.split("/");if(e.length===0)return[];let[n,...a]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(a.length===0)return o?[c,""]:[c];let f=f2(a.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),o&&p.push(...f),p.map(m=>i.startsWith("/")&&m===""?"/":m)}function Jw(i){i.sort((e,n)=>e.score!==n.score?n.score-e.score:oS(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var eS=/^:[\w-]+$/,tS=3,nS=2,rS=1,iS=10,aS=-2,c1=i=>i==="*";function sS(i,e){let n=i.split("/"),a=n.length;return n.some(c1)&&(a+=aS),e&&(a+=nS),n.filter(o=>!c1(o)).reduce((o,c)=>o+(eS.test(c)?tS:c===""?rS:iS),a)}function oS(i,e){return i.length===e.length&&i.slice(0,-1).every((a,o)=>a===e[o])?i[i.length-1]-e[e.length-1]:0}function lS(i,e,n=!1){let{routesMeta:a}=i,o={},c="/",f=[];for(let p=0;p<a.length;++p){let m=a[p],g=p===a.length-1,_=c==="/"?e:e.slice(c.length)||"/",T=Mh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},_),w=m.route;if(!T&&g&&n&&!a[a.length-1].route.index&&(T=Mh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!T)return null;Object.assign(o,T.params),f.push({params:o,pathname:Jr([c,T.pathname]),pathnameBase:pS(Jr([c,T.pathnameBase])),route:w}),T.pathnameBase!=="/"&&(c=Jr([c,T.pathnameBase]))}return f}function Mh(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[n,a]=cS(i.path,i.caseSensitive,i.end),o=e.match(n);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:a.reduce((g,{paramName:_,isOptional:T},w)=>{if(_==="*"){let O=p[w]||"";f=c.slice(0,c.length-O.length).replace(/(.)\/+$/,"$1")}const x=p[w];return T&&!x?g[_]=void 0:g[_]=(x||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:f,pattern:i}}function cS(i,e=!1,n=!0){Xn(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let a=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(a.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(a.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function uS(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xn(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function ti(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=i.charAt(n);return a&&a!=="/"?null:i.slice(n)||"/"}function hS(i,e="/"){let{pathname:n,search:a="",hash:o=""}=typeof i=="string"?rs(i):i;return{pathname:n?n.startsWith("/")?n:fS(n,e):e,search:mS(a),hash:gS(o)}}function fS(i,e){let n=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Hp(i,e,n,a){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dS(i){return i.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function d2(i){let e=dS(i);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function p2(i,e,n,a=!1){let o;typeof i=="string"?o=rs(i):(o={...i},ut(!o.pathname||!o.pathname.includes("?"),Hp("?","pathname","search",o)),ut(!o.pathname||!o.pathname.includes("#"),Hp("#","pathname","hash",o)),ut(!o.search||!o.search.includes("#"),Hp("#","search","hash",o)));let c=i===""||o.pathname==="",f=c?"/":o.pathname,p;if(f==null)p=n;else{let T=e.length-1;if(!a&&f.startsWith("..")){let w=f.split("/");for(;w[0]==="..";)w.shift(),T-=1;o.pathname=w.join("/")}p=T>=0?e[T]:"/"}let m=hS(o,p),g=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(g||_)&&(m.pathname+="/"),m}var Jr=i=>i.join("/").replace(/\/\/+/g,"/"),pS=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),mS=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,gS=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function yS(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var m2=["POST","PUT","PATCH","DELETE"];new Set(m2);var vS=["GET",...m2];new Set(vS);var bo=B.createContext(null);bo.displayName="DataRouter";var sf=B.createContext(null);sf.displayName="DataRouterState";B.createContext(!1);var g2=B.createContext({isTransitioning:!1});g2.displayName="ViewTransition";var _S=B.createContext(new Map);_S.displayName="Fetchers";var bS=B.createContext(null);bS.displayName="Await";var Sr=B.createContext(null);Sr.displayName="Navigation";var mc=B.createContext(null);mc.displayName="Location";var oi=B.createContext({outlet:null,matches:[],isDataRoute:!1});oi.displayName="Route";var Lm=B.createContext(null);Lm.displayName="RouteError";function ES(i,{relative:e}={}){ut(gc(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=B.useContext(Sr),{hash:o,pathname:c,search:f}=yc(i,{relative:e}),p=c;return n!=="/"&&(p=c==="/"?n:Jr([n,c])),a.createHref({pathname:p,search:f,hash:o})}function gc(){return B.useContext(mc)!=null}function is(){return ut(gc(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(mc).location}var y2="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function v2(i){B.useContext(Sr).static||B.useLayoutEffect(i)}function Eo(){let{isDataRoute:i}=B.useContext(oi);return i?kS():TS()}function TS(){ut(gc(),"useNavigate() may be used only in the context of a <Router> component.");let i=B.useContext(bo),{basename:e,navigator:n}=B.useContext(Sr),{matches:a}=B.useContext(oi),{pathname:o}=is(),c=JSON.stringify(d2(a)),f=B.useRef(!1);return v2(()=>{f.current=!0}),B.useCallback((m,g={})=>{if(Xn(f.current,y2),!f.current)return;if(typeof m=="number"){n.go(m);return}let _=p2(m,JSON.parse(c),o,g.relative==="path");i==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Jr([e,_.pathname])),(g.replace?n.replace:n.push)(_,g.state,g)},[e,n,c,o,i])}B.createContext(null);function yc(i,{relative:e}={}){let{matches:n}=B.useContext(oi),{pathname:a}=is(),o=JSON.stringify(d2(n));return B.useMemo(()=>p2(i,JSON.parse(o),a,e==="path"),[i,o,a,e])}function wS(i,e){return _2(i,e)}function _2(i,e,n,a){ut(gc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=B.useContext(Sr),{matches:c}=B.useContext(oi),f=c[c.length-1],p=f?f.params:{},m=f?f.pathname:"/",g=f?f.pathnameBase:"/",_=f&&f.route;{let U=_&&_.path||"";b2(m,!_||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let T=is(),w;if(e){let U=typeof e=="string"?rs(e):e;ut(g==="/"||U.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),w=U}else w=T;let x=w.pathname||"/",O=x;if(g!=="/"){let U=g.replace(/^\//,"").split("/");O="/"+x.replace(/^\//,"").split("/").slice(U.length).join("/")}let V=u2(i,{pathname:O});Xn(_||V!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Xn(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=IS(V&&V.map(U=>Object.assign({},U,{params:Object.assign({},p,U.params),pathname:Jr([g,o.encodeLocation?o.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:Jr([g,o.encodeLocation?o.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),c,n,a);return e&&M?B.createElement(mc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},M):M}function SS(){let i=PS(),e=yS(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),n=i instanceof Error?i.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",i),f=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:c},"ErrorBoundary")," or"," ",B.createElement("code",{style:c},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),n?B.createElement("pre",{style:o},n):null,f)}var xS=B.createElement(SS,null),AS=class extends B.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?B.createElement(oi.Provider,{value:this.props.routeContext},B.createElement(Lm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function RS({routeContext:i,match:e,children:n}){let a=B.useContext(bo);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(oi.Provider,{value:i},n)}function IS(i,e=[],n=null,a=null){if(i==null){if(!n)return null;if(n.errors)i=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)i=n.matches;else return null}let o=i,c=n?.errors;if(c!=null){let m=o.findIndex(g=>g.route.id&&c?.[g.route.id]!==void 0);ut(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let f=!1,p=-1;if(n)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:_,errors:T}=n,w=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||w){f=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,g,_)=>{let T,w=!1,x=null,O=null;n&&(T=c&&g.route.id?c[g.route.id]:void 0,x=g.route.errorElement||xS,f&&(p<0&&_===0?(b2("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,O=null):p===_&&(w=!0,O=g.route.hydrateFallbackElement||null)));let V=e.concat(o.slice(0,_+1)),M=()=>{let U;return T?U=x:w?U=O:g.route.Component?U=B.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=m,B.createElement(RS,{match:g,routeContext:{outlet:m,matches:V,isDataRoute:n!=null},children:U})};return n&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?B.createElement(AS,{location:n.location,revalidation:n.revalidation,component:x,error:T,children:M(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):M()},null)}function Um(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function CS(i){let e=B.useContext(bo);return ut(e,Um(i)),e}function NS(i){let e=B.useContext(sf);return ut(e,Um(i)),e}function DS(i){let e=B.useContext(oi);return ut(e,Um(i)),e}function zm(i){let e=DS(i),n=e.matches[e.matches.length-1];return ut(n.route.id,`${i} can only be used on routes that contain a unique "id"`),n.route.id}function OS(){return zm("useRouteId")}function PS(){let i=B.useContext(Lm),e=NS("useRouteError"),n=zm("useRouteError");return i!==void 0?i:e.errors?.[n]}function kS(){let{router:i}=CS("useNavigate"),e=zm("useNavigate"),n=B.useRef(!1);return v2(()=>{n.current=!0}),B.useCallback(async(o,c={})=>{Xn(n.current,y2),n.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...c}))},[i,e])}var u1={};function b2(i,e,n){!e&&!u1[i]&&(u1[i]=!0,Xn(!1,n))}B.memo(MS);function MS({routes:i,future:e,state:n}){return _2(i,void 0,n,e)}function zi(i){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function VS({basename:i="/",children:e=null,location:n,navigationType:a="POP",navigator:o,static:c=!1}){ut(!gc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=i.replace(/^\/*/,"/"),p=B.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof n=="string"&&(n=rs(n));let{pathname:m="/",search:g="",hash:_="",state:T=null,key:w="default"}=n,x=B.useMemo(()=>{let O=ti(m,f);return O==null?null:{location:{pathname:O,search:g,hash:_,state:T,key:w},navigationType:a}},[f,m,g,_,T,w,a]);return Xn(x!=null,`<Router basename="${f}"> is not able to match the URL "${m}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:B.createElement(Sr.Provider,{value:p},B.createElement(mc.Provider,{children:e,value:x}))}function jS({children:i,location:e}){return wS(lm(i),e)}function lm(i,e=[]){let n=[];return B.Children.forEach(i,(a,o)=>{if(!B.isValidElement(a))return;let c=[...e,o];if(a.type===B.Fragment){n.push.apply(n,lm(a.props.children,c));return}ut(a.type===zi,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=lm(a.props.children,c)),n.push(f)}),n}var Th="get",wh="application/x-www-form-urlencoded";function of(i){return i!=null&&typeof i.tagName=="string"}function LS(i){return of(i)&&i.tagName.toLowerCase()==="button"}function US(i){return of(i)&&i.tagName.toLowerCase()==="form"}function zS(i){return of(i)&&i.tagName.toLowerCase()==="input"}function BS(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function HS(i,e){return i.button===0&&(!e||e==="_self")&&!BS(i)}var th=null;function qS(){if(th===null)try{new FormData(document.createElement("form"),0),th=!1}catch{th=!0}return th}var FS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qp(i){return i!=null&&!FS.has(i)?(Xn(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wh}"`),null):i}function GS(i,e){let n,a,o,c,f;if(US(i)){let p=i.getAttribute("action");a=p?ti(p,e):null,n=i.getAttribute("method")||Th,o=qp(i.getAttribute("enctype"))||wh,c=new FormData(i)}else if(LS(i)||zS(i)&&(i.type==="submit"||i.type==="image")){let p=i.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=i.getAttribute("formaction")||p.getAttribute("action");if(a=m?ti(m,e):null,n=i.getAttribute("formmethod")||p.getAttribute("method")||Th,o=qp(i.getAttribute("formenctype"))||qp(p.getAttribute("enctype"))||wh,c=new FormData(p,i),!qS()){let{name:g,type:_,value:T}=i;if(_==="image"){let w=g?`${g}.`:"";c.append(`${w}x`,"0"),c.append(`${w}y`,"0")}else g&&c.append(g,T)}}else{if(of(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Th,a=null,o=wh,f=i}return c&&o==="text/plain"&&(f=c,c=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bm(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function YS(i,e,n){let a=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return a.pathname==="/"?a.pathname=`_root.${n}`:e&&ti(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function QS(i,e){if(i.id in e)return e[i.id];try{let n=await import(i.module);return e[i.id]=n,n}catch(n){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function KS(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function $S(i,e,n){let a=await Promise.all(i.map(async o=>{let c=e.routes[o.route.id];if(c){let f=await QS(c,n);return f.links?f.links():[]}return[]}));return JS(a.flat(1).filter(KS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function h1(i,e,n,a,o,c){let f=(m,g)=>n[g]?m.route.id!==n[g].route.id:!0,p=(m,g)=>n[g].pathname!==m.pathname||n[g].route.path?.endsWith("*")&&n[g].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,g)=>f(m,g)||p(m,g)):c==="data"?e.filter((m,g)=>{let _=a.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let T=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function XS(i,e,{includeHydrateFallback:n}={}){return WS(i.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function WS(i){return[...new Set(i)]}function ZS(i){let e={},n=Object.keys(i).sort();for(let a of n)e[a]=i[a];return e}function JS(i,e){let n=new Set;return new Set(e),i.reduce((a,o)=>{let c=JSON.stringify(ZS(o));return n.has(c)||(n.add(c),a.push({key:c,link:o})),a},[])}function E2(){let i=B.useContext(bo);return Bm(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function ex(){let i=B.useContext(sf);return Bm(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Hm=B.createContext(void 0);Hm.displayName="FrameworkContext";function T2(){let i=B.useContext(Hm);return Bm(i,"You must render this element inside a <HydratedRouter> element"),i}function tx(i,e){let n=B.useContext(Hm),[a,o]=B.useState(!1),[c,f]=B.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:_,onTouchStart:T}=e,w=B.useRef(null);B.useEffect(()=>{if(i==="render"&&f(!0),i==="viewport"){let V=U=>{U.forEach(Y=>{f(Y.isIntersecting)})},M=new IntersectionObserver(V,{threshold:.5});return w.current&&M.observe(w.current),()=>{M.disconnect()}}},[i]),B.useEffect(()=>{if(a){let V=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(V)}}},[a]);let x=()=>{o(!0)},O=()=>{o(!1),f(!1)};return n?i!=="intent"?[c,w,{}]:[c,w,{onFocus:zl(p,x),onBlur:zl(m,O),onMouseEnter:zl(g,x),onMouseLeave:zl(_,O),onTouchStart:zl(T,x)}]:[!1,w,{}]}function zl(i,e){return n=>{i&&i(n),n.defaultPrevented||e(n)}}function nx({page:i,...e}){let{router:n}=E2(),a=B.useMemo(()=>u2(n.routes,i,n.basename),[n.routes,i,n.basename]);return a?B.createElement(ix,{page:i,matches:a,...e}):null}function rx(i){let{manifest:e,routeModules:n}=T2(),[a,o]=B.useState([]);return B.useEffect(()=>{let c=!1;return $S(i,e,n).then(f=>{c||o(f)}),()=>{c=!0}},[i,e,n]),a}function ix({page:i,matches:e,...n}){let a=is(),{manifest:o,routeModules:c}=T2(),{basename:f}=E2(),{loaderData:p,matches:m}=ex(),g=B.useMemo(()=>h1(i,e,m,o,a,"data"),[i,e,m,o,a]),_=B.useMemo(()=>h1(i,e,m,o,a,"assets"),[i,e,m,o,a]),T=B.useMemo(()=>{if(i===a.pathname+a.search+a.hash)return[];let O=new Set,V=!1;if(e.forEach(U=>{let Y=o.routes[U.route.id];!Y||!Y.hasLoader||(!g.some(q=>q.route.id===U.route.id)&&U.route.id in p&&c[U.route.id]?.shouldRevalidate||Y.hasClientLoader?V=!0:O.add(U.route.id))}),O.size===0)return[];let M=YS(i,f,"data");return V&&O.size>0&&M.searchParams.set("_routes",e.filter(U=>O.has(U.route.id)).map(U=>U.route.id).join(",")),[M.pathname+M.search]},[f,p,a,o,g,e,i,c]),w=B.useMemo(()=>XS(_,o),[_,o]),x=rx(_);return B.createElement(B.Fragment,null,T.map(O=>B.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...n})),w.map(O=>B.createElement("link",{key:O,rel:"modulepreload",href:O,...n})),x.map(({key:O,link:V})=>B.createElement("link",{key:O,nonce:n.nonce,...V})))}function ax(...i){return e=>{i.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var w2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w2&&(window.__reactRouterVersion="7.8.1")}catch{}function sx({basename:i,children:e,window:n}){let a=B.useRef();a.current==null&&(a.current=Kw({window:n,v5Compat:!0}));let o=a.current,[c,f]=B.useState({action:o.action,location:o.location}),p=B.useCallback(m=>{B.startTransition(()=>f(m))},[f]);return B.useLayoutEffect(()=>o.listen(p),[o,p]),B.createElement(VS,{basename:i,children:e,location:c.location,navigationType:c.action,navigator:o})}var S2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ia=B.forwardRef(function({onClick:e,discover:n="render",prefetch:a="none",relative:o,reloadDocument:c,replace:f,state:p,target:m,to:g,preventScrollReset:_,viewTransition:T,...w},x){let{basename:O}=B.useContext(Sr),V=typeof g=="string"&&S2.test(g),M,U=!1;if(typeof g=="string"&&V&&(M=g,w2))try{let N=new URL(window.location.href),P=g.startsWith("//")?new URL(N.protocol+g):new URL(g),I=ti(P.pathname,O);P.origin===N.origin&&I!=null?g=I+P.search+P.hash:U=!0}catch{Xn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=ES(g,{relative:o}),[q,te,Z]=tx(a,w),J=ux(g,{replace:f,state:p,target:m,preventScrollReset:_,relative:o,viewTransition:T});function k(N){e&&e(N),N.defaultPrevented||J(N)}let R=B.createElement("a",{...w,...Z,href:M||Y,onClick:U||c?e:k,ref:ax(x,te),target:m,"data-discover":!V&&n==="render"?"true":void 0});return q&&!V?B.createElement(B.Fragment,null,R,B.createElement(nx,{page:Y})):R});ia.displayName="Link";var ox=B.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:a="",end:o=!1,style:c,to:f,viewTransition:p,children:m,...g},_){let T=yc(f,{relative:g.relative}),w=is(),x=B.useContext(sf),{navigator:O,basename:V}=B.useContext(Sr),M=x!=null&&mx(T)&&p===!0,U=O.encodeLocation?O.encodeLocation(T).pathname:T.pathname,Y=w.pathname,q=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(Y=Y.toLowerCase(),q=q?q.toLowerCase():null,U=U.toLowerCase()),q&&V&&(q=ti(q,V)||q);const te=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let Z=Y===U||!o&&Y.startsWith(U)&&Y.charAt(te)==="/",J=q!=null&&(q===U||!o&&q.startsWith(U)&&q.charAt(U.length)==="/"),k={isActive:Z,isPending:J,isTransitioning:M},R=Z?e:void 0,N;typeof a=="function"?N=a(k):N=[a,Z?"active":null,J?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let P=typeof c=="function"?c(k):c;return B.createElement(ia,{...g,"aria-current":R,className:N,ref:_,style:P,to:f,viewTransition:p},typeof m=="function"?m(k):m)});ox.displayName="NavLink";var lx=B.forwardRef(({discover:i="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:o,state:c,method:f=Th,action:p,onSubmit:m,relative:g,preventScrollReset:_,viewTransition:T,...w},x)=>{let O=dx(),V=px(p,{relative:g}),M=f.toLowerCase()==="get"?"get":"post",U=typeof p=="string"&&S2.test(p),Y=q=>{if(m&&m(q),q.defaultPrevented)return;q.preventDefault();let te=q.nativeEvent.submitter,Z=te?.getAttribute("formmethod")||f;O(te||q.currentTarget,{fetcherKey:e,method:Z,navigate:n,replace:o,state:c,relative:g,preventScrollReset:_,viewTransition:T})};return B.createElement("form",{ref:x,method:M,action:V,onSubmit:a?m:Y,...w,"data-discover":!U&&i==="render"?"true":void 0})});lx.displayName="Form";function cx(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function x2(i){let e=B.useContext(bo);return ut(e,cx(i)),e}function ux(i,{target:e,replace:n,state:a,preventScrollReset:o,relative:c,viewTransition:f}={}){let p=Eo(),m=is(),g=yc(i,{relative:c});return B.useCallback(_=>{if(HS(_,e)){_.preventDefault();let T=n!==void 0?n:ec(m)===ec(g);p(i,{replace:T,state:a,preventScrollReset:o,relative:c,viewTransition:f})}},[m,p,g,n,a,e,i,o,c,f])}var hx=0,fx=()=>`__${String(++hx)}__`;function dx(){let{router:i}=x2("useSubmit"),{basename:e}=B.useContext(Sr),n=OS();return B.useCallback(async(a,o={})=>{let{action:c,method:f,encType:p,formData:m,body:g}=GS(a,e);if(o.navigate===!1){let _=o.fetcherKey||fx();await i.fetch(_,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||f,formEncType:o.encType||p,flushSync:o.flushSync})}else await i.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||f,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,n])}function px(i,{relative:e}={}){let{basename:n}=B.useContext(Sr),a=B.useContext(oi);ut(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),c={...yc(i||".",{relative:e})},f=is();if(i==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(T=>T).forEach(T=>p.append("index",T));let _=p.toString();c.search=_?`?${_}`:""}}return(!i||i===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Jr([n,c.pathname])),ec(c)}function mx(i,{relative:e}={}){let n=B.useContext(g2);ut(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=x2("useViewTransitionState"),o=yc(i,{relative:e});if(!n.isTransitioning)return!1;let c=ti(n.currentLocation.pathname,a)||n.currentLocation.pathname,f=ti(n.nextLocation.pathname,a)||n.nextLocation.pathname;return Mh(o.pathname,f)!=null||Mh(o.pathname,c)!=null}var lt={},nh={},rh={},ih={},Fp,f1;function gx(){if(f1)return Fp;f1=1;var i="Expected a function",e=NaN,n="[object Symbol]",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,m=typeof eh=="object"&&eh&&eh.Object===Object&&eh,g=typeof self=="object"&&self&&self.Object===Object&&self,_=m||g||Function("return this")(),T=Object.prototype,w=T.toString,x=Math.max,O=Math.min,V=function(){return _.Date.now()};function M(J,k,R){var N,P,I,C,D,ue,Re=0,Q=!1,oe=!1,fe=!0;if(typeof J!="function")throw new TypeError(i);k=Z(k)||0,Y(R)&&(Q=!!R.leading,oe="maxWait"in R,I=oe?x(Z(R.maxWait)||0,k):I,fe="trailing"in R?!!R.trailing:fe);function Ie(Te){var ft=N,$t=P;return N=P=void 0,Re=Te,C=J.apply($t,ft),C}function L(Te){return Re=Te,D=setTimeout(le,k),Q?Ie(Te):C}function ne(Te){var ft=Te-ue,$t=Te-Re,rn=k-ft;return oe?O(rn,I-$t):rn}function ce(Te){var ft=Te-ue,$t=Te-Re;return ue===void 0||ft>=k||ft<0||oe&&$t>=I}function le(){var Te=V();if(ce(Te))return ge(Te);D=setTimeout(le,ne(Te))}function ge(Te){return D=void 0,fe&&N?Ie(Te):(N=P=void 0,C)}function Ne(){D!==void 0&&clearTimeout(D),Re=0,N=ue=P=D=void 0}function _e(){return D===void 0?C:ge(V())}function tt(){var Te=V(),ft=ce(Te);if(N=arguments,P=this,ue=Te,ft){if(D===void 0)return L(ue);if(oe)return D=setTimeout(le,k),Ie(ue)}return D===void 0&&(D=setTimeout(le,k)),C}return tt.cancel=Ne,tt.flush=_e,tt}function U(J,k,R){var N=!0,P=!0;if(typeof J!="function")throw new TypeError(i);return Y(R)&&(N="leading"in R?!!R.leading:N,P="trailing"in R?!!R.trailing:P),M(J,k,{leading:N,maxWait:k,trailing:P})}function Y(J){var k=typeof J;return!!J&&(k=="object"||k=="function")}function q(J){return!!J&&typeof J=="object"}function te(J){return typeof J=="symbol"||q(J)&&w.call(J)==n}function Z(J){if(typeof J=="number")return J;if(te(J))return e;if(Y(J)){var k=typeof J.valueOf=="function"?J.valueOf():J;J=Y(k)?k+"":k}if(typeof J!="string")return J===0?J:+J;J=J.replace(a,"");var R=c.test(J);return R||f.test(J)?p(J.slice(2),R?2:8):o.test(J)?e:+J}return Fp=U,Fp}var Bl={},d1;function qm(){if(d1)return Bl;d1=1,Object.defineProperty(Bl,"__esModule",{value:!0}),Bl.addPassiveEventListener=function(n,a,o){var c=o.name;c||(c=a,console.warn("Listener must be a named function.")),i.has(a)||i.set(a,new Set);var f=i.get(a);if(!f.has(c)){var p=(function(){var m=!1;try{var g=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("test",null,g)}catch{}return m})();n.addEventListener(a,o,p?{passive:!0}:!1),f.add(c)}},Bl.removePassiveEventListener=function(n,a,o){n.removeEventListener(a,o),i.get(a).delete(o.name||a)};var i=new Map;return Bl}var p1;function Fm(){if(p1)return ih;p1=1,Object.defineProperty(ih,"__esModule",{value:!0});var i=gx(),e=a(i),n=qm();function a(f){return f&&f.__esModule?f:{default:f}}var o=function(p){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,e.default)(p,m)},c={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(p,m){if(p){var g=o(function(_){c.scrollHandler(p)},m);return c.scrollSpyContainers.push(p),(0,n.addPassiveEventListener)(p,"scroll",g),function(){(0,n.removePassiveEventListener)(p,"scroll",g),c.scrollSpyContainers.splice(c.scrollSpyContainers.indexOf(p),1)}}return function(){}},isMounted:function(p){return c.scrollSpyContainers.indexOf(p)!==-1},currentPositionX:function(p){if(p===document){var m=window.scrollY!==void 0,g=(document.compatMode||"")==="CSS1Compat";return m?window.scrollX:g?document.documentElement.scrollLeft:document.body.scrollLeft}else return p.scrollLeft},currentPositionY:function(p){if(p===document){var m=window.scrollX!==void 0,g=(document.compatMode||"")==="CSS1Compat";return m?window.scrollY:g?document.documentElement.scrollTop:document.body.scrollTop}else return p.scrollTop},scrollHandler:function(p){var m=c.scrollSpyContainers[c.scrollSpyContainers.indexOf(p)].spyCallbacks||[];m.forEach(function(g){return g(c.currentPositionX(p),c.currentPositionY(p))})},addStateHandler:function(p){c.spySetState.push(p)},addSpyHandler:function(p,m){var g=c.scrollSpyContainers[c.scrollSpyContainers.indexOf(m)];g.spyCallbacks||(g.spyCallbacks=[]),g.spyCallbacks.push(p)},updateStates:function(){c.spySetState.forEach(function(p){return p()})},unmount:function(p,m){c.scrollSpyContainers.forEach(function(g){return g.spyCallbacks&&g.spyCallbacks.length&&g.spyCallbacks.indexOf(m)>-1&&g.spyCallbacks.splice(g.spyCallbacks.indexOf(m),1)}),c.spySetState&&c.spySetState.length&&c.spySetState.indexOf(p)>-1&&c.spySetState.splice(c.spySetState.indexOf(p),1),document.removeEventListener("scroll",c.scrollHandler)},update:function(){return c.scrollSpyContainers.forEach(function(p){return c.scrollHandler(p)})}};return ih.default=c,ih}var ah={},sh={},m1;function lf(){if(m1)return sh;m1=1,Object.defineProperty(sh,"__esModule",{value:!0});var i=function(p,m){var g=p.indexOf("#")===0?p.substring(1):p,_=g?"#"+g:"",T=window&&window.location,w=_?T.pathname+T.search+_:T.pathname+T.search;m?history.pushState(history.state,"",w):history.replaceState(history.state,"",w)},e=function(){return window.location.hash.replace(/^#/,"")},n=function(p){return function(m){return p.contains?p!=m&&p.contains(m):!!(p.compareDocumentPosition(m)&16)}},a=function(p){return getComputedStyle(p).position!=="static"},o=function(p,m){for(var g=p.offsetTop,_=p.offsetParent;_&&!m(_);)g+=_.offsetTop,_=_.offsetParent;return{offsetTop:g,offsetParent:_}},c=function(p,m,g){if(g)return p===document?m.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(p).position!=="static"?m.offsetLeft:m.offsetLeft-p.offsetLeft;if(p===document)return m.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(a(p)){if(m.offsetParent!==p){var _=function(M){return M===p||M===document},T=o(m,_),w=T.offsetTop,x=T.offsetParent;if(x!==p)throw new Error("Seems containerElement is not an ancestor of the Element");return w}return m.offsetTop}if(m.offsetParent===p.offsetParent)return m.offsetTop-p.offsetTop;var O=function(M){return M===document};return o(m,O).offsetTop-o(p,O).offsetTop};return sh.default={updateHash:i,getHash:e,filterElementInContainer:n,scrollOffset:c},sh}var oh={},lh={},g1;function yx(){return g1||(g1=1,Object.defineProperty(lh,"__esModule",{value:!0}),lh.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),lh}var ch={},y1;function vx(){if(y1)return ch;y1=1,Object.defineProperty(ch,"__esModule",{value:!0});var i=qm(),e=["mousedown","wheel","touchmove","keydown"];return ch.default={subscribe:function(a){return typeof document<"u"&&e.forEach(function(o){return(0,i.addPassiveEventListener)(document,o,a)})}},ch}var uh={},v1;function Gm(){if(v1)return uh;v1=1,Object.defineProperty(uh,"__esModule",{value:!0});var i={registered:{},scrollEvent:{register:function(n,a){i.registered[n]=a},remove:function(n){i.registered[n]=null}}};return uh.default=i,uh}var _1;function A2(){if(_1)return oh;_1=1,Object.defineProperty(oh,"__esModule",{value:!0});var i=Object.assign||function(P){for(var I=1;I<arguments.length;I++){var C=arguments[I];for(var D in C)Object.prototype.hasOwnProperty.call(C,D)&&(P[D]=C[D])}return P},e=lf();m(e);var n=yx(),a=m(n),o=vx(),c=m(o),f=Gm(),p=m(f);function m(P){return P&&P.__esModule?P:{default:P}}var g=function(I){return a.default[I.smooth]||a.default.defaultEasing},_=function(I){return typeof I=="function"?I:function(){return I}},T=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},w=(function(){return T()||function(P,I,C){window.setTimeout(P,C||1e3/60,new Date().getTime())}})(),x=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},O=function(I){var C=I.data.containerElement;if(C&&C!==document&&C!==document.body)return C.scrollLeft;var D=window.pageXOffset!==void 0,ue=(document.compatMode||"")==="CSS1Compat";return D?window.pageXOffset:ue?document.documentElement.scrollLeft:document.body.scrollLeft},V=function(I){var C=I.data.containerElement;if(C&&C!==document&&C!==document.body)return C.scrollTop;var D=window.pageXOffset!==void 0,ue=(document.compatMode||"")==="CSS1Compat";return D?window.pageYOffset:ue?document.documentElement.scrollTop:document.body.scrollTop},M=function(I){var C=I.data.containerElement;if(C&&C!==document&&C!==document.body)return C.scrollWidth-C.offsetWidth;var D=document.body,ue=document.documentElement;return Math.max(D.scrollWidth,D.offsetWidth,ue.clientWidth,ue.scrollWidth,ue.offsetWidth)},U=function(I){var C=I.data.containerElement;if(C&&C!==document&&C!==document.body)return C.scrollHeight-C.offsetHeight;var D=document.body,ue=document.documentElement;return Math.max(D.scrollHeight,D.offsetHeight,ue.clientHeight,ue.scrollHeight,ue.offsetHeight)},Y=function P(I,C,D){var ue=C.data;if(!C.ignoreCancelEvents&&ue.cancel){p.default.registered.end&&p.default.registered.end(ue.to,ue.target,ue.currentPositionY);return}if(ue.delta=Math.round(ue.targetPosition-ue.startPosition),ue.start===null&&(ue.start=D),ue.progress=D-ue.start,ue.percent=ue.progress>=ue.duration?1:I(ue.progress/ue.duration),ue.currentPosition=ue.startPosition+Math.ceil(ue.delta*ue.percent),ue.containerElement&&ue.containerElement!==document&&ue.containerElement!==document.body?C.horizontal?ue.containerElement.scrollLeft=ue.currentPosition:ue.containerElement.scrollTop=ue.currentPosition:C.horizontal?window.scrollTo(ue.currentPosition,0):window.scrollTo(0,ue.currentPosition),ue.percent<1){var Re=P.bind(null,I,C);w.call(window,Re);return}p.default.registered.end&&p.default.registered.end(ue.to,ue.target,ue.currentPosition)},q=function(I){I.data.containerElement=I?I.containerId?document.getElementById(I.containerId):I.container&&I.container.nodeType?I.container:document:null},te=function(I,C,D,ue){C.data=C.data||x(),window.clearTimeout(C.data.delayTimeout);var Re=function(){C.data.cancel=!0};if(c.default.subscribe(Re),q(C),C.data.start=null,C.data.cancel=!1,C.data.startPosition=C.horizontal?O(C):V(C),C.data.targetPosition=C.absolute?I:I+C.data.startPosition,C.data.startPosition===C.data.targetPosition){p.default.registered.end&&p.default.registered.end(C.data.to,C.data.target,C.data.currentPosition);return}C.data.delta=Math.round(C.data.targetPosition-C.data.startPosition),C.data.duration=_(C.duration)(C.data.delta),C.data.duration=isNaN(parseFloat(C.data.duration))?1e3:parseFloat(C.data.duration),C.data.to=D,C.data.target=ue;var Q=g(C),oe=Y.bind(null,Q,C);if(C&&C.delay>0){C.data.delayTimeout=window.setTimeout(function(){p.default.registered.begin&&p.default.registered.begin(C.data.to,C.data.target),w.call(window,oe)},C.delay);return}p.default.registered.begin&&p.default.registered.begin(C.data.to,C.data.target),w.call(window,oe)},Z=function(I){return I=i({},I),I.data=I.data||x(),I.absolute=!0,I},J=function(I){te(0,Z(I))},k=function(I,C){te(I,Z(C))},R=function(I){I=Z(I),q(I),te(I.horizontal?M(I):U(I),I)},N=function(I,C){C=Z(C),q(C);var D=C.horizontal?O(C):V(C);te(I+D,C)};return oh.default={animateTopScroll:te,getAnimationType:g,scrollToTop:J,scrollToBottom:R,scrollTo:k,scrollMore:N},oh}var b1;function cf(){if(b1)return ah;b1=1,Object.defineProperty(ah,"__esModule",{value:!0});var i=Object.assign||function(_){for(var T=1;T<arguments.length;T++){var w=arguments[T];for(var x in w)Object.prototype.hasOwnProperty.call(w,x)&&(_[x]=w[x])}return _},e=lf(),n=p(e),a=A2(),o=p(a),c=Gm(),f=p(c);function p(_){return _&&_.__esModule?_:{default:_}}var m={},g=void 0;return ah.default={unmount:function(){m={}},register:function(T,w){m[T]=w},unregister:function(T){delete m[T]},get:function(T){return m[T]||document.getElementById(T)||document.getElementsByName(T)[0]||document.getElementsByClassName(T)[0]},setActiveLink:function(T){return g=T},getActiveLink:function(){return g},scrollTo:function(T,w){var x=this.get(T);if(!x){console.warn("target Element not found");return}w=i({},w,{absolute:!1});var O=w.containerId,V=w.container,M=void 0;O?M=document.getElementById(O):V&&V.nodeType?M=V:M=document,w.absolute=!0;var U=w.horizontal,Y=n.default.scrollOffset(M,x,U)+(w.offset||0);if(!w.smooth){f.default.registered.begin&&f.default.registered.begin(T,x),M===document?w.horizontal?window.scrollTo(Y,0):window.scrollTo(0,Y):M.scrollTop=Y,f.default.registered.end&&f.default.registered.end(T,x);return}o.default.animateTopScroll(Y,w,T,x)}},ah}var Gp={exports:{}},Yp,E1;function _x(){if(E1)return Yp;E1=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Yp=i,Yp}var Qp,T1;function bx(){if(T1)return Qp;T1=1;var i=_x();function e(){}function n(){}return n.resetWarningCache=e,Qp=function(){function a(f,p,m,g,_,T){if(T!==i){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}a.isRequired=a;function o(){return a}var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:e};return c.PropTypes=c,c},Qp}var w1;function uf(){return w1||(w1=1,Gp.exports=bx()()),Gp.exports}var hh={},S1;function R2(){if(S1)return hh;S1=1,Object.defineProperty(hh,"__esModule",{value:!0}),qm();var i=lf(),e=n(i);function n(o){return o&&o.__esModule?o:{default:o}}var a={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(c){this.scroller=c,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(c,f){this.containers[c]=f},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var c=this,f=this.getHash();f?window.setTimeout(function(){c.scrollTo(f,!0),c.initialized=!0},10):this.initialized=!0},scrollTo:function(c,f){var p=this.scroller,m=p.get(c);if(m&&(f||c!==p.getActiveLink())){var g=this.containers[c]||document;p.scrollTo(c,{container:g})}},getHash:function(){return e.default.getHash()},changeHash:function(c,f){this.isInitialized()&&e.default.getHash()!==c&&e.default.updateHash(c,f)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return hh.default=a,hh}var x1;function Ym(){if(x1)return rh;x1=1,Object.defineProperty(rh,"__esModule",{value:!0});var i=Object.assign||function(U){for(var Y=1;Y<arguments.length;Y++){var q=arguments[Y];for(var te in q)Object.prototype.hasOwnProperty.call(q,te)&&(U[te]=q[te])}return U},e=(function(){function U(Y,q){for(var te=0;te<q.length;te++){var Z=q[te];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(Y,Z.key,Z)}}return function(Y,q,te){return q&&U(Y.prototype,q),te&&U(Y,te),Y}})(),n=si(),a=w(n),o=Fm(),c=w(o),f=cf(),p=w(f),m=uf(),g=w(m),_=R2(),T=w(_);function w(U){return U&&U.__esModule?U:{default:U}}function x(U,Y){if(!(U instanceof Y))throw new TypeError("Cannot call a class as a function")}function O(U,Y){if(!U)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Y&&(typeof Y=="object"||typeof Y=="function")?Y:U}function V(U,Y){if(typeof Y!="function"&&Y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof Y);U.prototype=Object.create(Y&&Y.prototype,{constructor:{value:U,enumerable:!1,writable:!0,configurable:!0}}),Y&&(Object.setPrototypeOf?Object.setPrototypeOf(U,Y):U.__proto__=Y)}var M={to:g.default.string.isRequired,containerId:g.default.string,container:g.default.object,activeClass:g.default.string,activeStyle:g.default.object,spy:g.default.bool,horizontal:g.default.bool,smooth:g.default.oneOfType([g.default.bool,g.default.string]),offset:g.default.number,delay:g.default.number,isDynamic:g.default.bool,onClick:g.default.func,duration:g.default.oneOfType([g.default.number,g.default.func]),absolute:g.default.bool,onSetActive:g.default.func,onSetInactive:g.default.func,ignoreCancelEvents:g.default.bool,hashSpy:g.default.bool,saveHashHistory:g.default.bool,spyThrottle:g.default.number};return rh.default=function(U,Y){var q=Y||p.default,te=(function(J){V(k,J);function k(R){x(this,k);var N=O(this,(k.__proto__||Object.getPrototypeOf(k)).call(this,R));return Z.call(N),N.state={active:!1},N.beforeUnmountCallbacks=[],N}return e(k,[{key:"getScrollSpyContainer",value:function(){var N=this.props.containerId,P=this.props.container;return N&&!P?document.getElementById(N):P&&P.nodeType?P:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var N=this.getScrollSpyContainer();if(!c.default.isMounted(N)){var P=c.default.mount(N,this.props.spyThrottle);this.beforeUnmountCallbacks.push(P)}this.props.hashSpy&&(T.default.isMounted()||T.default.mount(q),T.default.mapContainer(this.props.to,N)),c.default.addSpyHandler(this.spyHandler,N),this.setState({container:N})}}},{key:"componentWillUnmount",value:function(){c.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(N){return N()})}},{key:"render",value:function(){var N="";this.state&&this.state.active?N=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():N=this.props.className;var P={};this.state&&this.state.active?P=i({},this.props.style,this.props.activeStyle):P=i({},this.props.style);var I=i({},this.props);for(var C in M)I.hasOwnProperty(C)&&delete I[C];return I.className=N,I.style=P,I.onClick=this.handleClick,a.default.createElement(U,I)}}]),k})(a.default.PureComponent),Z=function(){var k=this;this.scrollTo=function(R,N){q.scrollTo(R,i({},k.state,N))},this.handleClick=function(R){k.props.onClick&&k.props.onClick(R),R.stopPropagation&&R.stopPropagation(),R.preventDefault&&R.preventDefault(),k.scrollTo(k.props.to,k.props)},this.spyHandler=function(R,N){var P=k.getScrollSpyContainer();if(!(T.default.isMounted()&&!T.default.isInitialized())){var I=k.props.horizontal,C=k.props.to,D=null,ue=void 0,Re=void 0;if(I){var Q=0,oe=0,fe=0;if(P.getBoundingClientRect){var Ie=P.getBoundingClientRect();fe=Ie.left}if(!D||k.props.isDynamic){if(D=q.get(C),!D)return;var L=D.getBoundingClientRect();Q=L.left-fe+R,oe=Q+L.width}var ne=R-k.props.offset;ue=ne>=Math.floor(Q)&&ne<Math.floor(oe),Re=ne<Math.floor(Q)||ne>=Math.floor(oe)}else{var ce=0,le=0,ge=0;if(P.getBoundingClientRect){var Ne=P.getBoundingClientRect();ge=Ne.top}if(!D||k.props.isDynamic){if(D=q.get(C),!D)return;var _e=D.getBoundingClientRect();ce=_e.top-ge+N,le=ce+_e.height}var tt=N-k.props.offset;ue=tt>=Math.floor(ce)&&tt<Math.floor(le),Re=tt<Math.floor(ce)||tt>=Math.floor(le)}var Te=q.getActiveLink();if(Re){if(C===Te&&q.setActiveLink(void 0),k.props.hashSpy&&T.default.getHash()===C){var ft=k.props.saveHashHistory,$t=ft===void 0?!1:ft;T.default.changeHash("",$t)}k.props.spy&&k.state.active&&(k.setState({active:!1}),k.props.onSetInactive&&k.props.onSetInactive(C,D))}if(ue&&(Te!==C||k.state.active===!1)){q.setActiveLink(C);var rn=k.props.saveHashHistory,xr=rn===void 0?!1:rn;k.props.hashSpy&&T.default.changeHash(C,xr),k.props.spy&&(k.setState({active:!0}),k.props.onSetActive&&k.props.onSetActive(C,D))}}}};return te.propTypes=M,te.defaultProps={offset:0},te},rh}var A1;function Ex(){if(A1)return nh;A1=1,Object.defineProperty(nh,"__esModule",{value:!0});var i=si(),e=o(i),n=Ym(),a=o(n);function o(g){return g&&g.__esModule?g:{default:g}}function c(g,_){if(!(g instanceof _))throw new TypeError("Cannot call a class as a function")}function f(g,_){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:g}function p(g,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);g.prototype=Object.create(_&&_.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(g,_):g.__proto__=_)}var m=(function(g){p(_,g);function _(){var T,w,x,O;c(this,_);for(var V=arguments.length,M=Array(V),U=0;U<V;U++)M[U]=arguments[U];return O=(w=(x=f(this,(T=_.__proto__||Object.getPrototypeOf(_)).call.apply(T,[this].concat(M))),x),x.render=function(){return e.default.createElement("a",x.props,x.props.children)},w),f(x,O)}return _})(e.default.Component);return nh.default=(0,a.default)(m),nh}var fh={},R1;function Tx(){if(R1)return fh;R1=1,Object.defineProperty(fh,"__esModule",{value:!0});var i=(function(){function _(T,w){for(var x=0;x<w.length;x++){var O=w[x];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(T,O.key,O)}}return function(T,w,x){return w&&_(T.prototype,w),x&&_(T,x),T}})(),e=si(),n=c(e),a=Ym(),o=c(a);function c(_){return _&&_.__esModule?_:{default:_}}function f(_,T){if(!(_ instanceof T))throw new TypeError("Cannot call a class as a function")}function p(_,T){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T&&(typeof T=="object"||typeof T=="function")?T:_}function m(_,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof T);_.prototype=Object.create(T&&T.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),T&&(Object.setPrototypeOf?Object.setPrototypeOf(_,T):_.__proto__=T)}var g=(function(_){m(T,_);function T(){return f(this,T),p(this,(T.__proto__||Object.getPrototypeOf(T)).apply(this,arguments))}return i(T,[{key:"render",value:function(){return n.default.createElement("button",this.props,this.props.children)}}]),T})(n.default.Component);return fh.default=(0,o.default)(g),fh}var dh={},ph={},I1;function I2(){if(I1)return ph;I1=1,Object.defineProperty(ph,"__esModule",{value:!0});var i=Object.assign||function(x){for(var O=1;O<arguments.length;O++){var V=arguments[O];for(var M in V)Object.prototype.hasOwnProperty.call(V,M)&&(x[M]=V[M])}return x},e=(function(){function x(O,V){for(var M=0;M<V.length;M++){var U=V[M];U.enumerable=U.enumerable||!1,U.configurable=!0,"value"in U&&(U.writable=!0),Object.defineProperty(O,U.key,U)}}return function(O,V,M){return V&&x(O.prototype,V),M&&x(O,M),O}})(),n=si(),a=g(n),o=jm();g(o);var c=cf(),f=g(c),p=uf(),m=g(p);function g(x){return x&&x.__esModule?x:{default:x}}function _(x,O){if(!(x instanceof O))throw new TypeError("Cannot call a class as a function")}function T(x,O){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O&&(typeof O=="object"||typeof O=="function")?O:x}function w(x,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof O);x.prototype=Object.create(O&&O.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),O&&(Object.setPrototypeOf?Object.setPrototypeOf(x,O):x.__proto__=O)}return ph.default=function(x){var O=(function(V){w(M,V);function M(U){_(this,M);var Y=T(this,(M.__proto__||Object.getPrototypeOf(M)).call(this,U));return Y.childBindings={domNode:null},Y}return e(M,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(Y){this.props.name!==Y.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;f.default.unregister(this.props.name)}},{key:"registerElems",value:function(Y){f.default.register(Y,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(x,i({},this.props,{parentBindings:this.childBindings}))}}]),M})(a.default.Component);return O.propTypes={name:m.default.string,id:m.default.string},O},ph}var C1;function wx(){if(C1)return dh;C1=1,Object.defineProperty(dh,"__esModule",{value:!0});var i=Object.assign||function(x){for(var O=1;O<arguments.length;O++){var V=arguments[O];for(var M in V)Object.prototype.hasOwnProperty.call(V,M)&&(x[M]=V[M])}return x},e=(function(){function x(O,V){for(var M=0;M<V.length;M++){var U=V[M];U.enumerable=U.enumerable||!1,U.configurable=!0,"value"in U&&(U.writable=!0),Object.defineProperty(O,U.key,U)}}return function(O,V,M){return V&&x(O.prototype,V),M&&x(O,M),O}})(),n=si(),a=m(n),o=I2(),c=m(o),f=uf(),p=m(f);function m(x){return x&&x.__esModule?x:{default:x}}function g(x,O){if(!(x instanceof O))throw new TypeError("Cannot call a class as a function")}function _(x,O){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O&&(typeof O=="object"||typeof O=="function")?O:x}function T(x,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof O);x.prototype=Object.create(O&&O.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),O&&(Object.setPrototypeOf?Object.setPrototypeOf(x,O):x.__proto__=O)}var w=(function(x){T(O,x);function O(){return g(this,O),_(this,(O.__proto__||Object.getPrototypeOf(O)).apply(this,arguments))}return e(O,[{key:"render",value:function(){var M=this,U=i({},this.props);return delete U.name,U.parentBindings&&delete U.parentBindings,a.default.createElement("div",i({},U,{ref:function(q){M.props.parentBindings.domNode=q}}),this.props.children)}}]),O})(a.default.Component);return w.propTypes={name:p.default.string,id:p.default.string},dh.default=(0,c.default)(w),dh}var Kp,N1;function Sx(){if(N1)return Kp;N1=1;var i=Object.assign||function(w){for(var x=1;x<arguments.length;x++){var O=arguments[x];for(var V in O)Object.prototype.hasOwnProperty.call(O,V)&&(w[V]=O[V])}return w},e=(function(){function w(x,O){for(var V=0;V<O.length;V++){var M=O[V];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(x,M.key,M)}}return function(x,O,V){return O&&w(x.prototype,O),V&&w(x,V),x}})();function n(w,x){if(!(w instanceof x))throw new TypeError("Cannot call a class as a function")}function a(w,x){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:w}function o(w,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);w.prototype=Object.create(x&&x.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(w,x):w.__proto__=x)}var c=si();jm(),lf();var f=Fm(),p=cf(),m=uf(),g=R2(),_={to:m.string.isRequired,containerId:m.string,container:m.object,activeClass:m.string,spy:m.bool,smooth:m.oneOfType([m.bool,m.string]),offset:m.number,delay:m.number,isDynamic:m.bool,onClick:m.func,duration:m.oneOfType([m.number,m.func]),absolute:m.bool,onSetActive:m.func,onSetInactive:m.func,ignoreCancelEvents:m.bool,hashSpy:m.bool,spyThrottle:m.number},T={Scroll:function(x,O){console.warn("Helpers.Scroll is deprecated since v1.7.0");var V=O||p,M=(function(Y){o(q,Y);function q(te){n(this,q);var Z=a(this,(q.__proto__||Object.getPrototypeOf(q)).call(this,te));return U.call(Z),Z.state={active:!1},Z}return e(q,[{key:"getScrollSpyContainer",value:function(){var Z=this.props.containerId,J=this.props.container;return Z?document.getElementById(Z):J&&J.nodeType?J:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var Z=this.getScrollSpyContainer();f.isMounted(Z)||f.mount(Z,this.props.spyThrottle),this.props.hashSpy&&(g.isMounted()||g.mount(V),g.mapContainer(this.props.to,Z)),this.props.spy&&f.addStateHandler(this.stateHandler),f.addSpyHandler(this.spyHandler,Z),this.setState({container:Z})}}},{key:"componentWillUnmount",value:function(){f.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var Z="";this.state&&this.state.active?Z=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():Z=this.props.className;var J=i({},this.props);for(var k in _)J.hasOwnProperty(k)&&delete J[k];return J.className=Z,J.onClick=this.handleClick,c.createElement(x,J)}}]),q})(c.Component),U=function(){var q=this;this.scrollTo=function(te,Z){V.scrollTo(te,i({},q.state,Z))},this.handleClick=function(te){q.props.onClick&&q.props.onClick(te),te.stopPropagation&&te.stopPropagation(),te.preventDefault&&te.preventDefault(),q.scrollTo(q.props.to,q.props)},this.stateHandler=function(){V.getActiveLink()!==q.props.to&&(q.state!==null&&q.state.active&&q.props.onSetInactive&&q.props.onSetInactive(),q.setState({active:!1}))},this.spyHandler=function(te){var Z=q.getScrollSpyContainer();if(!(g.isMounted()&&!g.isInitialized())){var J=q.props.to,k=null,R=0,N=0,P=0;if(Z.getBoundingClientRect){var I=Z.getBoundingClientRect();P=I.top}if(!k||q.props.isDynamic){if(k=V.get(J),!k)return;var C=k.getBoundingClientRect();R=C.top-P+te,N=R+C.height}var D=te-q.props.offset,ue=D>=Math.floor(R)&&D<Math.floor(N),Re=D<Math.floor(R)||D>=Math.floor(N),Q=V.getActiveLink();if(Re)return J===Q&&V.setActiveLink(void 0),q.props.hashSpy&&g.getHash()===J&&g.changeHash(),q.props.spy&&q.state.active&&(q.setState({active:!1}),q.props.onSetInactive&&q.props.onSetInactive()),f.updateStates();if(ue&&Q!==J)return V.setActiveLink(J),q.props.hashSpy&&g.changeHash(J),q.props.spy&&(q.setState({active:!0}),q.props.onSetActive&&q.props.onSetActive(J)),f.updateStates()}}};return M.propTypes=_,M.defaultProps={offset:0},M},Element:function(x){console.warn("Helpers.Element is deprecated since v1.7.0");var O=(function(V){o(M,V);function M(U){n(this,M);var Y=a(this,(M.__proto__||Object.getPrototypeOf(M)).call(this,U));return Y.childBindings={domNode:null},Y}return e(M,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(Y){this.props.name!==Y.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;p.unregister(this.props.name)}},{key:"registerElems",value:function(Y){p.register(Y,this.childBindings.domNode)}},{key:"render",value:function(){return c.createElement(x,i({},this.props,{parentBindings:this.childBindings}))}}]),M})(c.Component);return O.propTypes={name:m.string,id:m.string},O}};return Kp=T,Kp}var D1;function xx(){if(D1)return lt;D1=1,Object.defineProperty(lt,"__esModule",{value:!0}),lt.Helpers=lt.ScrollElement=lt.ScrollLink=lt.animateScroll=lt.scrollSpy=lt.Events=lt.scroller=lt.Element=lt.Button=lt.Link=void 0;var i=Ex(),e=te(i),n=Tx(),a=te(n),o=wx(),c=te(o),f=cf(),p=te(f),m=Gm(),g=te(m),_=Fm(),T=te(_),w=A2(),x=te(w),O=Ym(),V=te(O),M=I2(),U=te(M),Y=Sx(),q=te(Y);function te(Z){return Z&&Z.__esModule?Z:{default:Z}}return lt.Link=e.default,lt.Button=a.default,lt.Element=c.default,lt.scroller=p.default,lt.Events=g.default,lt.scrollSpy=T.default,lt.animateScroll=x.default,lt.ScrollLink=V.default,lt.ScrollElement=U.default,lt.Helpers=q.default,lt.default={Link:e.default,Button:a.default,Element:c.default,scroller:p.default,Events:g.default,scrollSpy:T.default,animateScroll:x.default,ScrollLink:V.default,ScrollElement:U.default,Helpers:q.default},lt}var Ln=xx();function Qm(){return B.useEffect(()=>{const i=document.getElementById("hamburger"),e=document.getElementById("nav-links"),n=document.getElementById("close-btn"),a=()=>e.classList.add("active"),o=()=>e.classList.remove("active"),c=f=>{e.classList.contains("active")&&!e.contains(f.target)&&!i.contains(f.target)&&e.classList.remove("active")};return i.addEventListener("click",a),n.addEventListener("click",o),document.addEventListener("click",c),()=>{i.removeEventListener("click",a),n.removeEventListener("click",o),document.removeEventListener("click",c)}},[]),y.jsx("div",{className:"header",children:y.jsxs("nav",{className:"navbar",children:[y.jsx("h1",{children:"Gold Corps Inc"}),y.jsxs("div",{className:"hamburger",id:"hamburger",children:[y.jsx("span",{}),y.jsx("span",{}),y.jsx("span",{})]}),y.jsxs("div",{className:"nav-links",id:"nav-links",children:[y.jsx("button",{className:"close-btn",id:"close-btn",children:"×"}),y.jsx("div",{className:"search-container",children:y.jsx("input",{placeholder:"Search...",className:"search-bar",type:"search"})}),y.jsx(Ln.Link,{className:"a",to:"home",smooth:!0,duration:500,offset:-70,children:"Home"}),y.jsx(Ln.Link,{className:"a",to:"about",smooth:!0,duration:500,offset:-70,children:"About us"}),y.jsx(Ln.Link,{className:"a",to:"contact",smooth:!0,duration:500,offset:-70,children:"Contact us"}),y.jsx(Ln.Link,{className:"a",to:"services",smooth:!0,duration:500,offset:-70,children:"Our services"}),y.jsx(Ln.Link,{className:"a",to:"team",smooth:!0,duration:500,offset:-70,children:"Our team"}),y.jsx(Ln.Link,{className:"a",to:"testimonial",smooth:!0,duration:500,offset:-70,children:"Testimonial"}),y.jsx(ia,{className:"a",to:"/stock",children:"Stock prices"})]})]})})}const Ax="/Gold-corps-final/assets/image-1-Picsart-AiImageEnhancer-BcMqKlvr.jpeg",Rx="/Gold-corps-final/assets/image-2-BqTb_Qtz.jpeg",Ix="/Gold-corps-final/assets/image-3-Mfy9IzQb.jpeg",Cx="/Gold-corps-final/assets/image-4-BooAjJhm.jpeg";function Nx(){const i=[Ax,Rx,Ix,Cx],[e,n]=B.useState(0);return B.useEffect(()=>{const a=setInterval(()=>{n(o=>(o+1)%i.length)},5e3);return()=>clearInterval(a)},[i.length]),y.jsxs("div",{className:"hero",children:[y.jsx("div",{className:"hero-slide active",style:{backgroundImage:`url(${i[e]})`,backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 1s ease-in-out"}}),y.jsxs("div",{className:"hero-overlay",children:[y.jsx("h2",{children:"Gold Corps - Your Premium Investment Partner"}),y.jsx("p",{children:"Empowering you to grow wealth with confidence."}),y.jsx(ia,{to:"/signup",children:y.jsx("button",{className:"btn btn1",children:"signup"})}),y.jsx("button",{className:"btn",children:"Subscribe to our newsletter"})]})]})}var C2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},O1=Qa.createContext&&Qa.createContext(C2),Dx=["attr","size","title"];function Ox(i,e){if(i==null)return{};var n=Px(i,e),a,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(i);for(o=0;o<c.length;o++)a=c[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(i,a)&&(n[a]=i[a])}return n}function Px(i,e){if(i==null)return{};var n={};for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a)){if(e.indexOf(a)>=0)continue;n[a]=i[a]}return n}function Vh(){return Vh=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])}return i},Vh.apply(this,arguments)}function P1(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),n.push.apply(n,a)}return n}function jh(i){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P1(Object(n),!0).forEach(function(a){kx(i,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):P1(Object(n)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(n,a))})}return i}function kx(i,e,n){return e=Mx(e),e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}function Mx(i){var e=Vx(i,"string");return typeof e=="symbol"?e:e+""}function Vx(i,e){if(typeof i!="object"||!i)return i;var n=i[Symbol.toPrimitive];if(n!==void 0){var a=n.call(i,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function N2(i){return i&&i.map((e,n)=>Qa.createElement(e.tag,jh({key:n},e.attr),N2(e.child)))}function rt(i){return e=>Qa.createElement(jx,Vh({attr:jh({},i.attr)},e),N2(i.child))}function jx(i){var e=n=>{var{attr:a,size:o,title:c}=i,f=Ox(i,Dx),p=o||n.size||"1em",m;return n.className&&(m=n.className),i.className&&(m=(m?m+" ":"")+i.className),Qa.createElement("svg",Vh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,f,{className:m,style:jh(jh({color:i.color||n.color},n.style),i.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&Qa.createElement("title",null,c),i.children)};return O1!==void 0?Qa.createElement(O1.Consumer,null,n=>e(n)):e(C2)}function Lx(i){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M341.28 22.78L254 123.75l63.156-33.656 4.438-2.375 4.437 2.405 18.314 9.938-3.063-77.282zM129.814 46.563l24.375 130.407 88.718-47.282-113.094-83.125zM321.53 108.97L83.345 235.905 192.156 293.5l237.47-125.75-108.095-58.78zm42.75 44.686l25.595 13.03-197.313 103.94-66.875-35.688 25.344-13.407 41.532 22.19 171.72-90.064zm92.19 18.22l9.092 24.03 26.22-22.656-35.313-1.375zm-15.783 11.155L199.47 310.78l-5.782 83.376L465.75 249.344l-25.063-66.313zm-334.562 19.564L16.562 226.78l36.876 19.564 6.093-16.28 1.25-3.314 3.126-1.656 42.22-22.5zm-34.438 48.312l-28.812 77 131.844 70.156 6.155-89.375-109.188-57.78zm335.344 50.875l-174.25 92.75 54.907 103.44L325.5 358.093l142.47 26.625-60.94-82.94zm-300.717 81.064l-19.438 44.812L144 402.876l-37.688-20.032z"},child:[]}]})(i)}function Ux(i){return rt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(i)}function zx(i){return rt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(i)}function Bx(i){return rt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(i)}function Hx(i){return rt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(i)}function qx(i){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(i)}function Lh(i){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(i)}function ao(i){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(i)}function Fx(i){return rt({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(i)}function Gx(i){return rt({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(i)}function Yx(i){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(i)}function cm(i){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"},child:[]}]})(i)}function Qx(i){return rt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},child:[]}]})(i)}function Km(i){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(i)}function Kx(i){return rt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"},child:[]}]})(i)}function D2(i){return rt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(i)}function $x(i){return rt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(i)}function Xx(i){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(i)}function O2(i){return rt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z"},child:[]}]})(i)}function Wx(i){return rt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(i)}function P2(i){return rt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"},child:[]}]})(i)}function Zx(i){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(i)}function Jx(i){return rt({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(i)}function e4(i){return rt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(i)}function t4(i){return rt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(i)}function hf(i){return rt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(i)}function n4(i){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(i)}function r4(){return y.jsx("section",{id:"about",className:"about-section",children:y.jsxs("div",{className:"about-container",children:[y.jsxs("div",{className:"about-block",children:[y.jsx(Lx,{className:"about-icon"}),y.jsx("h2",{children:"Our Business"}),y.jsxs("p",{children:["Gold Corps stands at the pinnacle of global investment, bridging ",y.jsx("strong",{children:"gold, copper, agriculture, and cryptocurrency"})," into one unmatched portfolio. We operate in the world’s most lucrative and resource-rich regions, strategically positioned for ",y.jsx("strong",{children:"maximum profitability and sustainable impact"}),". Our assets are not just high-margin — they are ",y.jsx("strong",{children:"legacy-grade"}),", designed to deliver value for decades."]})]}),y.jsxs("div",{className:"about-block",children:[y.jsx(Lh,{className:"about-icon"}),y.jsx("h2",{children:"Our Strategy"}),y.jsxs("p",{children:["We think beyond quarters — ",y.jsx("strong",{children:"we think in generations"}),". Every move is backed by deep market intelligence, cutting-edge technology, and a relentless pursuit of excellence. From ",y.jsx("strong",{children:"exploring new mining frontiers"}),"to ",y.jsx("strong",{children:"pioneering next-generation crypto opportunities"}),", Goldvest invests where innovation meets stability. We build wealth that lasts, while ensuring our growth model is ",y.jsx("strong",{children:"ethical, sustainable, and future-proof"}),"."]})]}),y.jsxs("div",{className:"about-block",children:[y.jsx(hf,{className:"about-icon"}),y.jsx("h2",{children:"Our Purpose"}),y.jsxs("p",{children:["Gold Corps is on a mission to become ",y.jsx("strong",{children:"the world’s most respected investment powerhouse"})," — measured not just by profits, but by the trust and prosperity we bring to our stakeholders. We are led by visionaries, powered by innovators, and grounded in principles that protect both people and the planet."]}),y.jsx("blockquote",{children:"Own the finest assets. Employ the brightest minds. Deliver unmatched returns. Leave a legacy worth its weight in gold."})]})]})})}const i4=[{icon:y.jsx(hf,{}),label:"Trusted Users",value:3e3,sub:"Investors Worldwide",desc:"Thousands of satisfied clients entrust us with their gold, copper, and diversified investments every day."},{icon:y.jsx(Bx,{}),label:"Employees",value:5e3,sub:"Global Workforce",desc:"Our dedicated professionals operate at the highest standards, driving innovation and performance."},{icon:y.jsx(Kx,{}),label:"Countries",value:6,sub:"Active Markets",desc:"A truly global footprint, giving investors exposure to the world’s most lucrative mining and trading hubs."},{icon:y.jsx(Lh,{}),label:"Growth",value:80,sub:"Annual Increase (%)",desc:"Sustained double-digit growth powered by strategic expansion and long-term asset value creation."}];function a4(){return B.useEffect(()=>{document.querySelectorAll(".stat-value").forEach(e=>{const n=+e.getAttribute("data-target");let a=0;const o=()=>{const c=n/60;a<n?(a+=c,e.innerText=Math.ceil(a)+(e.dataset.percent?"%":"+"),setTimeout(o,20)):e.innerText=n+(e.dataset.percent?"%":"+")};o()})},[]),y.jsxs("section",{className:"stats-section",id:"services",children:[y.jsxs("div",{className:"stats-header",children:[y.jsx("h1",{className:"stats-title",children:"A Legacy of Trust. A Future of Growth."}),y.jsxs("p",{className:"stats-intro",children:["At ",y.jsx("span",{className:"gold-text",children:"Gold Corps"}),", we don’t just invest — we shape industries. From precious metals and global commodities to cutting-edge crypto and sustainable agriculture, we are redefining wealth creation on a global scale. Our unmatched portfolio and elite team ensure exceptional returns for investors while building lasting value for communities worldwide."]})]}),y.jsx("div",{className:"stats-container",children:i4.map((i,e)=>y.jsxs("div",{className:"stat-card",children:[y.jsx("div",{className:"stat-icon",children:i.icon}),y.jsx("h2",{className:"stat-value shimmer","data-target":i.value,"data-percent":i.label==="Growth"?"true":"",children:"0"}),y.jsx("p",{className:"stat-label",children:i.label}),y.jsx("span",{className:"stat-sub",children:i.sub}),y.jsx("p",{className:"stat-desc",children:i.desc})]},e))})]})}const s4=[{icon:y.jsx(hf,{}),label:"Trusted Investors",value:3e3,suffix:"+",sub:"Global investor community placing trust in our strategy",desc:"Thousands of investors choose Gold corps for long-term capital growth, risk-controlled exposure, and diversified access across assets."},{icon:y.jsx(Lh,{}),label:"Employees",value:5e3,suffix:"",sub:"Experienced professionals powering global operations",desc:"A world-class team of geologists, traders, engineers and compliance experts committed to delivering measurable results."},{icon:y.jsx(D2,{}),label:"Countries",value:6,suffix:"+",sub:"Strategic, jurisdiction-diverse footprint",desc:"Operations and partnerships across high-potential regions to capture premium resources and market access."},{icon:y.jsx(Lh,{}),label:"Annual Growth",value:80,suffix:"%",sub:"Sustained expansion through disciplined execution",desc:"Strong historical performance driven by portfolio quality and careful capital allocation."}],o4=["Global Mining Consortium","Frontier Capital Partners","AgriGrowth International","CryptoBridge Labs","Sustainable Resources Alliance"],Fa=[{quote:"Gold corps helped me diversify into real assets and crypto with clarity and confidence. Their team is responsive and deeply knowledgeable.",name:"Maria J. Finck",title:"Business Owner"},{quote:"From first contact to steady returns, Gold corps delivered tangible results. Their approach is conservative where it must be, bold where it counts.",name:"Hajime Omuro",title:"Operations Manager"},{quote:"I recommend Gold corps for any investor looking to combine sustainability with performance—transparent and trustworthy.",name:"James G. Wyatt",title:"Entrepreneur"}];function l4(i=".stat-value",e=1200){B.useEffect(()=>{const n=document.querySelectorAll(i);n.length&&n.forEach(a=>{const o=parseFloat(a.getAttribute("data-target"))||0,c=a.getAttribute("data-suffix")||"",f=performance.now(),p=m=>{const g=Math.min((m-f)/e,1),_=Math.floor(g*o);a.textContent=`${_.toLocaleString()}${c}`,g<1?requestAnimationFrame(p):a.textContent=`${o.toLocaleString()}${c}`};requestAnimationFrame(p)})},[i,e])}function c4(){const[i,e]=B.useState(0);B.useEffect(()=>{const c=setInterval(()=>e(f=>(f+1)%Fa.length),6e3);return()=>clearInterval(c)},[]),l4(".stat-value",1200);const[n,a]=B.useState(""),o=c=>{c.preventDefault(),alert(`Thanks — we'll reach out to ${n}`),a("")};return y.jsxs("main",{className:"gold-landing",children:[y.jsx("header",{className:"hero-section",id:"home",children:y.jsxs("div",{className:"hero-inner",children:[y.jsx("h1",{className:"hero-title",children:"Gold Corps — Building Enduring Wealth Across Gold, Copper, Agriculture & Crypto"}),y.jsx("p",{className:"hero-sub",children:"Trusted by thousands across six countries, we blend resource expertise, trading precision, and sustainable practices to generate high-quality, long-term returns."}),y.jsxs("div",{className:"hero-cta",children:[y.jsx(ia,{to:"/signup",children:y.jsx("button",{className:"btn btn-primary",children:" Get Started"})}),y.jsxs("button",{className:"btn btn-outline",children:[y.jsx(Wx,{})," Watch Overview"]})]}),y.jsxs("div",{className:"hero-stats",children:[y.jsxs("div",{className:"stat-inline",children:[y.jsx("span",{className:"big",children:"6+"}),y.jsx("span",{className:"label",children:"Countries"})]}),y.jsxs("div",{className:"stat-inline",children:[y.jsx("span",{className:"big",children:"3,000+"}),y.jsx("span",{className:"label",children:"Investors"})]}),y.jsxs("div",{className:"stat-inline",children:[y.jsx("span",{className:"big",children:"80%"}),y.jsx("span",{className:"label",children:"Recent Growth"})]})]})]})}),y.jsx("section",{className:"partners-section",id:"about",children:y.jsxs("div",{className:"container",children:[y.jsxs("h2",{children:[y.jsx(Ux,{className:"icon"})," Partner Companies & Recognitions"]}),y.jsx("p",{className:"muted",children:"Gold corps is recognized for innovation, transparency, and bridging traditional finance with the digital future. Our partners and award bodies span investment, sustainability and technology sectors."}),y.jsx("ul",{className:"partner-list",children:o4.map((c,f)=>y.jsxs("li",{className:"partner-item",children:[y.jsx("span",{className:"dot"})," ",c]},f))})]})}),y.jsx("section",{className:"why-section",id:"services",children:y.jsxs("div",{className:"container split",children:[y.jsxs("div",{className:"col",children:[y.jsxs("h2",{children:[y.jsx($x,{className:"icon"})," Why Choose Gold corps"]}),y.jsx("p",{className:"muted",children:"We combine disciplined capital allocation, deep technical knowledge, and a relentless focus on risk management — all aimed at creating durable capital appreciation and measurable social benefit."}),y.jsxs("div",{className:"features-grid",children:[y.jsxs("div",{className:"feature",children:[y.jsx("h3",{children:"Tailored Solutions"}),y.jsx("p",{children:"Personalised investment strategies aligned with your objectives and timeline."})]}),y.jsxs("div",{className:"feature",children:[y.jsx("h3",{children:"Long-term Partnership"}),y.jsx("p",{children:"We invest alongside our clients and prioritize stability through cycles."})]}),y.jsxs("div",{className:"feature",children:[y.jsx("h3",{children:"Active Opportunity Sourcing"}),y.jsx("p",{children:"Proprietary pipelines and global partnerships deliver differentiated deal flow."})]}),y.jsxs("div",{className:"feature",children:[y.jsx("h3",{children:"24/7 Investor Support"}),y.jsx("p",{children:"Dedicated teams that act decisively whenever the market presents opportunity or risk."})]})]})]}),y.jsxs("aside",{className:"col panel",children:[y.jsx("h3",{children:"Tailored for You"}),y.jsx("p",{children:"The deeper we understand your goals and constraints, the smarter we can allocate capital on your behalf — harvesting superior returns while managing downside exposure."}),y.jsxs("div",{className:"panel-list",children:[y.jsxs("div",{children:[y.jsx("strong",{children:"In Your Corner"}),y.jsx("p",{children:"We stand with investors through market cycles — protection and growth combined."})]}),y.jsxs("div",{children:[y.jsx("strong",{children:"We Do the Work"}),y.jsx("p",{children:"Expert media buying and deal execution so your capital works efficiently."})]}),y.jsxs("div",{children:[y.jsx("strong",{children:"Round-the-clock"}),y.jsx("p",{children:"Support across timezones and fast response for critical needs."})]})]})]})]})}),y.jsx("section",{className:"stats-section",id:"team",children:y.jsxs("div",{className:"container",children:[y.jsxs("h2",{children:[y.jsx(D2,{className:"icon"})," Key Metrics & Performance"]}),y.jsx("p",{className:"muted",children:"Performance that proves our strategy — clear metrics, transparent reporting."}),y.jsx("div",{className:"stats-grid",children:s4.map((c,f)=>y.jsxs("div",{className:"stat-card",children:[y.jsx("div",{className:"stat-icon",children:c.icon}),y.jsx("div",{className:"stat-value shimmer","data-target":c.value,"data-suffix":c.suffix,"aria-label":`${c.value}${c.suffix}`,children:"0"}),y.jsx("div",{className:"stat-label",children:c.label}),y.jsx("div",{className:"stat-sub",children:c.sub}),y.jsx("div",{className:"stat-desc muted",children:c.desc})]},f))})]})}),y.jsx("section",{className:"miners-section",children:y.jsxs("div",{className:"container split",children:[y.jsxs("div",{className:"col",children:[y.jsx("h2",{children:"Our Miners — Reliability & Consistency"}),y.jsx("p",{className:"muted",children:"Since 2022, our mining and operations teams have consistently met investor obligations and optimized output across multiple sites."}),y.jsxs("ul",{className:"miner-list",children:[y.jsxs("li",{children:[y.jsx("strong",{children:"Operational Excellence"})," — Rigid maintenance and safety regimes ensure uptime and reliability."]}),y.jsxs("li",{children:[y.jsx("strong",{children:"Local Partnerships"})," — Working with communities and regulators to ensure sustainable outcomes."]}),y.jsxs("li",{children:[y.jsx("strong",{children:"Transparent Payments"})," — Reliable payouts and investor reporting are built into our processes."]})]})]}),y.jsxs("aside",{className:"col panel",children:[y.jsx("h3",{children:"Geographic Reach"}),y.jsxs("div",{className:"geo-grid",children:[y.jsxs("div",{children:[y.jsx("strong",{children:"Latham"}),y.jsx("span",{className:"muted",children:" — Headquarters"})]}),y.jsxs("div",{children:[y.jsx("strong",{children:"Africa"}),y.jsx("span",{className:"muted",children:" — Resource operations"})]}),y.jsxs("div",{children:[y.jsx("strong",{children:"Asia"}),y.jsx("span",{className:"muted",children:" — Development & trading"})]}),y.jsxs("div",{children:[y.jsx("strong",{children:"Europe"}),y.jsx("span",{className:"muted",children:" — Finance & compliance"})]}),y.jsxs("div",{children:[y.jsx("strong",{children:"CIS"}),y.jsx("span",{className:"muted",children:" — Strategic partnerships"})]})]})]})]})}),y.jsx("section",{className:"testimonials-section",id:"testimonial",children:y.jsxs("div",{className:"container",children:[y.jsxs("h2",{children:[y.jsx(hf,{className:"icon"})," Investor Testimonials"]}),y.jsxs("div",{className:"test-carousel",children:[y.jsx("button",{className:"carousel-arrow left",onClick:()=>e(c=>(c-1+Fa.length)%Fa.length),"aria-label":"Previous testimonial",children:y.jsx(Fx,{})}),y.jsxs("article",{className:"testimonial-card","aria-live":"polite",children:[y.jsxs("blockquote",{children:["“",Fa[i].quote,"”"]}),y.jsxs("cite",{children:["— ",Fa[i].name,", ",y.jsx("span",{className:"muted",children:Fa[i].title})]})]}),y.jsx("button",{className:"carousel-arrow right",onClick:()=>e(c=>(c+1)%Fa.length),"aria-label":"Next testimonial",children:y.jsx(Gx,{})})]})]})}),y.jsx("section",{className:"cta-section",id:"contact",children:y.jsxs("div",{className:"container cta-panel",children:[y.jsxs("div",{children:[y.jsx("h2",{children:"Let's Work Together"}),y.jsx("p",{className:"muted",children:"Our sustainability-driven business plan blends responsible mining, ethical trading, and long-term investor value. Join a select group of investors building something that lasts."})]}),y.jsxs("form",{className:"cta-form",onSubmit:o,children:[y.jsx("label",{htmlFor:"email",className:"visually-hidden",children:"Email address"}),y.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",value:n,required:!0,onChange:c=>a(c.target.value)}),y.jsx("button",{className:"btn btn-primary",type:"submit",children:"Get a Quote"})]})]})}),y.jsxs("footer",{className:"site-footer",children:[y.jsxs("div",{className:"container footer-grid",children:[y.jsxs("div",{children:[y.jsx("h4",{children:"Gold corps"}),y.jsx("p",{className:"muted small",children:"Multi-asset investing across gold, copper, agriculture & crypto."})]}),y.jsxs("div",{children:[y.jsx("h5",{children:"Company"}),y.jsxs("ul",{children:[y.jsx("li",{children:y.jsx(Ln.Link,{to:"home",smooth:!0,duration:600,children:"Home"})}),y.jsx("li",{children:y.jsx(Ln.Link,{to:"about",smooth:!0,duration:600,children:"About"})}),y.jsx("li",{children:y.jsx(Ln.Link,{to:"services",smooth:!0,duration:600,children:"Services"})}),y.jsx("li",{children:y.jsx(Ln.Link,{to:"team",smooth:!0,duration:600,children:"Team"})}),y.jsx("li",{children:y.jsx(Ln.Link,{to:"testimonial",smooth:!0,duration:600,children:"Testimonials"})}),y.jsx("li",{children:y.jsx(Ln.Link,{to:"contact",smooth:!0,duration:600,children:"Contact"})})]})]}),y.jsx("div",{})]}),y.jsx("div",{className:"footer-bottom",children:y.jsxs("small",{children:["© ",new Date().getFullYear()," Gold corps. All rights reserved."]})})]})]})}const u4=()=>{};var k1={};/**
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
 */const k2=function(i){const e=[];let n=0;for(let a=0;a<i.length;a++){let o=i.charCodeAt(a);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++a)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},h4=function(i){const e=[];let n=0,a=0;for(;n<i.length;){const o=i[n++];if(o<128)e[a++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[n++];e[a++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[n++],f=i[n++],p=i[n++],m=((o&7)<<18|(c&63)<<12|(f&63)<<6|p&63)-65536;e[a++]=String.fromCharCode(55296+(m>>10)),e[a++]=String.fromCharCode(56320+(m&1023))}else{const c=i[n++],f=i[n++];e[a++]=String.fromCharCode((o&15)<<12|(c&63)<<6|f&63)}}return e.join("")},M2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<i.length;o+=3){const c=i[o],f=o+1<i.length,p=f?i[o+1]:0,m=o+2<i.length,g=m?i[o+2]:0,_=c>>2,T=(c&3)<<4|p>>4;let w=(p&15)<<2|g>>6,x=g&63;m||(x=64,f||(w=64)),a.push(n[_],n[T],n[w],n[x])}return a.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(k2(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):h4(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<i.length;){const c=n[i.charAt(o++)],p=o<i.length?n[i.charAt(o)]:0;++o;const g=o<i.length?n[i.charAt(o)]:64;++o;const T=o<i.length?n[i.charAt(o)]:64;if(++o,c==null||p==null||g==null||T==null)throw new f4;const w=c<<2|p>>4;if(a.push(w),g!==64){const x=p<<4&240|g>>2;if(a.push(x),T!==64){const O=g<<6&192|T;a.push(O)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class f4 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d4=function(i){const e=k2(i);return M2.encodeByteArray(e,!0)},Uh=function(i){return d4(i).replace(/\./g,"")},V2=function(i){try{return M2.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function p4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const m4=()=>p4().__FIREBASE_DEFAULTS__,g4=()=>{if(typeof process>"u"||typeof k1>"u")return;const i=k1.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},y4=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&V2(i[1]);return e&&JSON.parse(e)},ff=()=>{try{return u4()||m4()||g4()||y4()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},j2=i=>ff()?.emulatorHosts?.[i],v4=i=>{const e=j2(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),a]:[e.substring(0,n),a]},L2=()=>ff()?.config,U2=i=>ff()?.[`_${i}`];/**
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
 */class _4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}/**
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
 */function To(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function z2(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function b4(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},a=e||"demo-project",o=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Uh(JSON.stringify(n)),Uh(JSON.stringify(f)),""].join(".")}const Kl={};function E4(){const i={prod:[],emulator:[]};for(const e of Object.keys(Kl))Kl[e]?i.emulator.push(e):i.prod.push(e);return i}function T4(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let M1=!1;function B2(i,e){if(typeof window>"u"||typeof document>"u"||!To(window.location.host)||Kl[i]===e||Kl[i]||M1)return;Kl[i]=e;function n(w){return`__firebase__banner__${w}`}const a="__firebase__banner",c=E4().prod.length>0;function f(){const w=document.getElementById(a);w&&w.remove()}function p(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,x){w.setAttribute("width","24"),w.setAttribute("id",x),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{M1=!0,f()},w}function _(w,x){w.setAttribute("id",x),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=T4(a),x=n("text"),O=document.getElementById(x)||document.createElement("span"),V=n("learnmore"),M=document.getElementById(V)||document.createElement("a"),U=n("preprendIcon"),Y=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const q=w.element;p(q),_(M,V);const te=g();m(Y,U),q.append(Y,O,M,te),document.body.appendChild(q)}c?(O.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function w4(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function S4(){const i=ff()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function x4(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function A4(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function R4(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I4(){const i=nn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function C4(){return!S4()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function N4(){try{return typeof indexedDB=="object"}catch{return!1}}function D4(){return new Promise((i,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(a),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const O4="FirebaseError";class li extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=O4,Object.setPrototypeOf(this,li.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vc.prototype.create)}}class vc{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],f=c?P4(c,a):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new li(o,p,a)}}function P4(i,e){return i.replace(k4,(n,a)=>{const o=e[a];return o!=null?String(o):`<${a}?>`})}const k4=/\{\$([^}]+)}/g;function M4(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function $a(i,e){if(i===e)return!0;const n=Object.keys(i),a=Object.keys(e);for(const o of n){if(!a.includes(o))return!1;const c=i[o],f=e[o];if(V1(c)&&V1(f)){if(!$a(c,f))return!1}else if(c!==f)return!1}for(const o of a)if(!n.includes(o))return!1;return!0}function V1(i){return i!==null&&typeof i=="object"}/**
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
 */function _c(i){const e=[];for(const[n,a]of Object.entries(i))Array.isArray(a)?a.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function Hl(i){const e={};return i.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,c]=a.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function ql(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}function V4(i,e){const n=new j4(i,e);return n.subscribe.bind(n)}class j4{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,a){let o;if(e===void 0&&n===void 0&&a===void 0)throw new Error("Missing Observer.");L4(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:a},o.next===void 0&&(o.next=$p),o.error===void 0&&(o.error=$p),o.complete===void 0&&(o.complete=$p);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L4(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function $p(){}/**
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
 */function kt(i){return i&&i._delegate?i._delegate:i}class Xa{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ga="[DEFAULT]";/**
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
 */class U4{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new _4;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(B4(e))try{this.getOrInitializeService({instanceIdentifier:Ga})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});a.resolve(c)}catch{}}}}clearInstance(e=Ga){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ga){return this.instances.has(e)}getOptions(e=Ga){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[c,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);a===p&&f.resolve(o)}return o}onInit(e,n){const a=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(a)??new Set;o.add(e),this.onInitCallbacks.set(a,o);const c=this.instances.get(a);return c&&e(c,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(a)for(const o of a)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:z4(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Ga){return this.component?this.component.multipleInstances?e:Ga:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function z4(i){return i===Ga?void 0:i}function B4(i){return i.instantiationMode==="EAGER"}/**
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
 */class H4{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new U4(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ve;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ve||(Ve={}));const q4={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},F4=Ve.INFO,G4={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},Y4=(i,e,...n)=>{if(e<i.logLevel)return;const a=new Date().toISOString(),o=G4[e];if(o)console[o](`[${a}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $m{constructor(e){this.name=e,this._logLevel=F4,this._logHandler=Y4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?q4[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const Q4=(i,e)=>e.some(n=>i instanceof n);let j1,L1;function K4(){return j1||(j1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $4(){return L1||(L1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H2=new WeakMap,um=new WeakMap,q2=new WeakMap,Xp=new WeakMap,Xm=new WeakMap;function X4(i){const e=new Promise((n,a)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",f)},c=()=>{n(Yi(i.result)),o()},f=()=>{a(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&H2.set(n,i)}).catch(()=>{}),Xm.set(e,i),e}function W4(i){if(um.has(i))return;const e=new Promise((n,a)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",f),i.removeEventListener("abort",f)},c=()=>{n(),o()},f=()=>{a(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",f),i.addEventListener("abort",f)});um.set(i,e)}let hm={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return um.get(i);if(e==="objectStoreNames")return i.objectStoreNames||q2.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yi(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Z4(i){hm=i(hm)}function J4(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const a=i.call(Wp(this),e,...n);return q2.set(a,e.sort?e.sort():[e]),Yi(a)}:$4().includes(i)?function(...e){return i.apply(Wp(this),e),Yi(H2.get(this))}:function(...e){return Yi(i.apply(Wp(this),e))}}function eA(i){return typeof i=="function"?J4(i):(i instanceof IDBTransaction&&W4(i),Q4(i,K4())?new Proxy(i,hm):i)}function Yi(i){if(i instanceof IDBRequest)return X4(i);if(Xp.has(i))return Xp.get(i);const e=eA(i);return e!==i&&(Xp.set(i,e),Xm.set(e,i)),e}const Wp=i=>Xm.get(i);function tA(i,e,{blocked:n,upgrade:a,blocking:o,terminated:c}={}){const f=indexedDB.open(i,e),p=Yi(f);return a&&f.addEventListener("upgradeneeded",m=>{a(Yi(f.result),m.oldVersion,m.newVersion,Yi(f.transaction),m)}),n&&f.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),p.then(m=>{c&&m.addEventListener("close",()=>c()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const nA=["get","getKey","getAll","getAllKeys","count"],rA=["put","add","delete","clear"],Zp=new Map;function U1(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Zp.get(e))return Zp.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,o=rA.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(o||nA.includes(n)))return;const c=async function(f,...p){const m=this.transaction(f,o?"readwrite":"readonly");let g=m.store;return a&&(g=g.index(p.shift())),(await Promise.all([g[n](...p),o&&m.done]))[0]};return Zp.set(e,c),c}Z4(i=>({...i,get:(e,n,a)=>U1(e,n)||i.get(e,n,a),has:(e,n)=>!!U1(e,n)||i.has(e,n)}));/**
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
 */class iA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aA(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function aA(i){return i.getComponent()?.type==="VERSION"}const fm="@firebase/app",z1="0.14.1";/**
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
 */const ni=new $m("@firebase/app"),sA="@firebase/app-compat",oA="@firebase/analytics-compat",lA="@firebase/analytics",cA="@firebase/app-check-compat",uA="@firebase/app-check",hA="@firebase/auth",fA="@firebase/auth-compat",dA="@firebase/database",pA="@firebase/data-connect",mA="@firebase/database-compat",gA="@firebase/functions",yA="@firebase/functions-compat",vA="@firebase/installations",_A="@firebase/installations-compat",bA="@firebase/messaging",EA="@firebase/messaging-compat",TA="@firebase/performance",wA="@firebase/performance-compat",SA="@firebase/remote-config",xA="@firebase/remote-config-compat",AA="@firebase/storage",RA="@firebase/storage-compat",IA="@firebase/firestore",CA="@firebase/ai",NA="@firebase/firestore-compat",DA="firebase",OA="12.1.0";/**
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
 */const dm="[DEFAULT]",PA={[fm]:"fire-core",[sA]:"fire-core-compat",[lA]:"fire-analytics",[oA]:"fire-analytics-compat",[uA]:"fire-app-check",[cA]:"fire-app-check-compat",[hA]:"fire-auth",[fA]:"fire-auth-compat",[dA]:"fire-rtdb",[pA]:"fire-data-connect",[mA]:"fire-rtdb-compat",[gA]:"fire-fn",[yA]:"fire-fn-compat",[vA]:"fire-iid",[_A]:"fire-iid-compat",[bA]:"fire-fcm",[EA]:"fire-fcm-compat",[TA]:"fire-perf",[wA]:"fire-perf-compat",[SA]:"fire-rc",[xA]:"fire-rc-compat",[AA]:"fire-gcs",[RA]:"fire-gcs-compat",[IA]:"fire-fst",[NA]:"fire-fst-compat",[CA]:"fire-vertex","fire-js":"fire-js",[DA]:"fire-js-all"};/**
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
 */const zh=new Map,kA=new Map,pm=new Map;function B1(i,e){try{i.container.addComponent(e)}catch(n){ni.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function ho(i){const e=i.name;if(pm.has(e))return ni.debug(`There were multiple attempts to register component ${e}.`),!1;pm.set(e,i);for(const n of zh.values())B1(n,i);for(const n of kA.values())B1(n,i);return!0}function Wm(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Un(i){return i==null?!1:i.settings!==void 0}/**
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
 */const MA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qi=new vc("app","Firebase",MA);/**
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
 */class VA{constructor(e,n,a){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Xa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qi.create("app-deleted",{appName:this._name})}}/**
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
 */const wo=OA;function F2(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const a={name:dm,automaticDataCollectionEnabled:!0,...e},o=a.name;if(typeof o!="string"||!o)throw Qi.create("bad-app-name",{appName:String(o)});if(n||(n=L2()),!n)throw Qi.create("no-options");const c=zh.get(o);if(c){if($a(n,c.options)&&$a(a,c.config))return c;throw Qi.create("duplicate-app",{appName:o})}const f=new H4(o);for(const m of pm.values())f.addComponent(m);const p=new VA(n,a,f);return zh.set(o,p),p}function G2(i=dm){const e=zh.get(i);if(!e&&i===dm&&L2())return F2();if(!e)throw Qi.create("no-app",{appName:i});return e}function Ki(i,e,n){let a=PA[i]??i;n&&(a+=`-${n}`);const o=a.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const f=[`Unable to register library "${a}" with version "${e}":`];o&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ni.warn(f.join(" "));return}ho(new Xa(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const jA="firebase-heartbeat-database",LA=1,tc="firebase-heartbeat-store";let Jp=null;function Y2(){return Jp||(Jp=tA(jA,LA,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(tc)}catch(n){console.warn(n)}}}}).catch(i=>{throw Qi.create("idb-open",{originalErrorMessage:i.message})})),Jp}async function UA(i){try{const n=(await Y2()).transaction(tc),a=await n.objectStore(tc).get(Q2(i));return await n.done,a}catch(e){if(e instanceof li)ni.warn(e.message);else{const n=Qi.create("idb-get",{originalErrorMessage:e?.message});ni.warn(n.message)}}}async function H1(i,e){try{const a=(await Y2()).transaction(tc,"readwrite");await a.objectStore(tc).put(e,Q2(i)),await a.done}catch(n){if(n instanceof li)ni.warn(n.message);else{const a=Qi.create("idb-set",{originalErrorMessage:n?.message});ni.warn(a.message)}}}function Q2(i){return`${i.name}!${i.options.appId}`}/**
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
 */const zA=1024,BA=30;class HA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FA(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=q1();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats.length>BA){const o=GA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ni.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=q1(),{heartbeatsToSend:n,unsentEntries:a}=qA(this._heartbeatsCache.heartbeats),o=Uh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ni.warn(e),""}}}function q1(){return new Date().toISOString().substring(0,10)}function qA(i,e=zA){const n=[];let a=i.slice();for(const o of i){const c=n.find(f=>f.agent===o.agent);if(c){if(c.dates.push(o.date),F1(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),F1(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class FA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N4()?D4().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await UA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return H1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return H1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function F1(i){return Uh(JSON.stringify({version:2,heartbeats:i})).length}function GA(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let a=1;a<i.length;a++)i[a].date<n&&(n=i[a].date,e=a);return e}/**
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
 */function YA(i){ho(new Xa("platform-logger",e=>new iA(e),"PRIVATE")),ho(new Xa("heartbeat",e=>new HA(e),"PRIVATE")),Ki(fm,z1,i),Ki(fm,z1,"esm2020"),Ki("fire-js","")}YA("");function K2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QA=K2,$2=new vc("auth","Firebase",K2());/**
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
 */const Bh=new $m("@firebase/auth");function KA(i,...e){Bh.logLevel<=Ve.WARN&&Bh.warn(`Auth (${wo}): ${i}`,...e)}function Sh(i,...e){Bh.logLevel<=Ve.ERROR&&Bh.error(`Auth (${wo}): ${i}`,...e)}/**
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
 */function Wn(i,...e){throw Zm(i,...e)}function yr(i,...e){return Zm(i,...e)}function X2(i,e,n){const a={...QA(),[e]:n};return new vc("auth","Firebase",a).create(e,{appName:i.name})}function ei(i){return X2(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zm(i,...e){if(typeof i!="string"){const n=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=i.name),i._errorFactory.create(n,...a)}return $2.create(i,...e)}function we(i,e,...n){if(!i)throw Zm(e,...n)}function Wr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Sh(e),new Error(e)}function ri(i,e){i||Wr(e)}/**
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
 */function mm(){return typeof self<"u"&&self.location?.href||""}function $A(){return G1()==="http:"||G1()==="https:"}function G1(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function XA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($A()||A4()||"connection"in navigator)?navigator.onLine:!0}function WA(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class bc{constructor(e,n){this.shortDelay=e,this.longDelay=n,ri(n>e,"Short delay should be less than long delay!"),this.isMobile=w4()||R4()}get(){return XA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jm(i,e){ri(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class W2{static initialize(e,n,a){this.fetchImpl=e,n&&(this.headersImpl=n),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const JA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],e6=new bc(3e4,6e4);function ci(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function ui(i,e,n,a,o={}){return Z2(i,o,async()=>{let c={},f={};a&&(e==="GET"?f=a:c={body:JSON.stringify(a)});const p=_c({key:i.config.apiKey,...f}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g={method:e,headers:m,...c};return x4()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&To(i.emulatorConfig.host)&&(g.credentials="include"),W2.fetch()(await J2(i,i.config.apiHost,n,p),g)})}async function Z2(i,e,n){i._canInitEmulator=!1;const a={...ZA,...e};try{const o=new n6(i),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw mh(i,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const p=c.ok?f.errorMessage:f.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw mh(i,"credential-already-in-use",f);if(m==="EMAIL_EXISTS")throw mh(i,"email-already-in-use",f);if(m==="USER_DISABLED")throw mh(i,"user-disabled",f);const _=a[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw X2(i,_,g);Wn(i,_)}}catch(o){if(o instanceof li)throw o;Wn(i,"network-request-failed",{message:String(o)})}}async function Ec(i,e,n,a,o={}){const c=await ui(i,e,n,a,o);return"mfaPendingCredential"in c&&Wn(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function J2(i,e,n,a){const o=`${e}${n}?${a}`,c=i,f=c.config.emulator?Jm(i.config,o):`${i.config.apiScheme}://${o}`;return JA.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}function t6(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class n6{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,a)=>{this.timer=setTimeout(()=>a(yr(this.auth,"network-request-failed")),e6.get())})}}function mh(i,e,n){const a={appName:i.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const o=yr(i,e,a);return o.customData._tokenResponse=n,o}function Y1(i){return i!==void 0&&i.enterprise!==void 0}class r6{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return t6(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function i6(i,e){return ui(i,"GET","/v2/recaptchaConfig",ci(i,e))}/**
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
 */async function a6(i,e){return ui(i,"POST","/v1/accounts:delete",e)}async function Hh(i,e){return ui(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function $l(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function s6(i,e=!1){const n=kt(i),a=await n.getIdToken(e),o=eg(a);we(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,f=c?.sign_in_provider;return{claims:o,token:a,authTime:$l(em(o.auth_time)),issuedAtTime:$l(em(o.iat)),expirationTime:$l(em(o.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function em(i){return Number(i)*1e3}function eg(i){const[e,n,a]=i.split(".");if(e===void 0||n===void 0||a===void 0)return Sh("JWT malformed, contained fewer than 3 sections"),null;try{const o=V2(n);return o?JSON.parse(o):(Sh("Failed to decode base64 JWT payload"),null)}catch(o){return Sh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Q1(i){const e=eg(i);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nc(i,e,n=!1){if(n)return e;try{return await e}catch(a){throw a instanceof li&&o6(a)&&i.auth.currentUser===i&&await i.auth.signOut(),a}}function o6({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class l6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$l(this.lastLoginAt),this.creationTime=$l(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qh(i){const e=i.auth,n=await i.getIdToken(),a=await nc(i,Hh(e,{idToken:n}));we(a?.users.length,e,"internal-error");const o=a.users[0];i._notifyReloadListener(o);const c=o.providerUserInfo?.length?eb(o.providerUserInfo):[],f=u6(i.providerData,c),p=i.isAnonymous,m=!(i.email&&o.passwordHash)&&!f?.length,g=p?m:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new gm(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(i,_)}async function c6(i){const e=kt(i);await qh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u6(i,e){return[...i.filter(a=>!e.some(o=>o.providerId===a.providerId)),...e]}function eb(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function h6(i,e){const n=await Z2(i,{},async()=>{const a=_c({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,f=await J2(i,o,"/v1/token",`key=${c}`),p=await i._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:a};return i.emulatorConfig&&To(i.emulatorConfig.host)&&(m.credentials="include"),W2.fetch()(f,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function f6(i,e){return ui(i,"POST","/v2/accounts:revokeToken",ci(i,e))}/**
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
 */class so{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Q1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){we(e.length!==0,"internal-error");const n=Q1(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:a,refreshToken:o,expiresIn:c}=await h6(e,n);this.updateTokensAndExpiration(a,o,Number(c))}updateTokensAndExpiration(e,n,a){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,n){const{refreshToken:a,accessToken:o,expirationTime:c}=n,f=new so;return a&&(we(typeof a=="string","internal-error",{appName:e}),f.refreshToken=a),o&&(we(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),c&&(we(typeof c=="number","internal-error",{appName:e}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new so,this.toJSON())}_performRefresh(){return Wr("not implemented")}}/**
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
 */function Ui(i,e){we(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Qn{constructor({uid:e,auth:n,stsTokenManager:a,...o}){this.providerId="firebase",this.proactiveRefresh=new l6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new gm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await nc(this,this.stsTokenManager.getToken(this.auth,e));return we(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return s6(this,e)}reload(){return c6(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),n&&await qh(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(ei(this.auth));const e=await this.getIdToken();return await nc(this,a6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const a=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,f=n.photoURL??void 0,p=n.tenantId??void 0,m=n._redirectEventId??void 0,g=n.createdAt??void 0,_=n.lastLoginAt??void 0,{uid:T,emailVerified:w,isAnonymous:x,providerData:O,stsTokenManager:V}=n;we(T&&V,e,"internal-error");const M=so.fromJSON(this.name,V);we(typeof T=="string",e,"internal-error"),Ui(a,e.name),Ui(o,e.name),we(typeof w=="boolean",e,"internal-error"),we(typeof x=="boolean",e,"internal-error"),Ui(c,e.name),Ui(f,e.name),Ui(p,e.name),Ui(m,e.name),Ui(g,e.name),Ui(_,e.name);const U=new Qn({uid:T,auth:e,email:o,emailVerified:w,displayName:a,isAnonymous:x,photoURL:f,phoneNumber:c,tenantId:p,stsTokenManager:M,createdAt:g,lastLoginAt:_});return O&&Array.isArray(O)&&(U.providerData=O.map(Y=>({...Y}))),m&&(U._redirectEventId=m),U}static async _fromIdTokenResponse(e,n,a=!1){const o=new so;o.updateFromServerResponse(n);const c=new Qn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:a});return await qh(c),c}static async _fromGetAccountInfoResponse(e,n,a){const o=n.users[0];we(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?eb(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!c?.length,p=new so;p.updateFromIdToken(a);const m=new Qn({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:f}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new gm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(m,g),m}}/**
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
 */const K1=new Map;function Zr(i){ri(i instanceof Function,"Expected a class definition");let e=K1.get(i);return e?(ri(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,K1.set(i,e),e)}/**
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
 */class tb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tb.type="NONE";const $1=tb;/**
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
 */function xh(i,e,n){return`firebase:${i}:${e}:${n}`}class oo{constructor(e,n,a){this.persistence=e,this.auth=n,this.userKey=a;const{config:o,name:c}=this.auth;this.fullUserKey=xh(this.userKey,o.apiKey,c),this.fullPersistenceKey=xh("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hh(this.auth,{idToken:e}).catch(()=>{});return n?Qn._fromGetAccountInfoResponse(this.auth,n,e):null}return Qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,a="authUser"){if(!n.length)return new oo(Zr($1),e,a);const o=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=o[0]||Zr($1);const f=xh(a,e.config.apiKey,e.name);let p=null;for(const g of n)try{const _=await g._get(f);if(_){let T;if(typeof _=="string"){const w=await Hh(e,{idToken:_}).catch(()=>{});if(!w)break;T=await Qn._fromGetAccountInfoResponse(e,w,_)}else T=Qn._fromJSON(e,_);g!==c&&(p=T),c=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new oo(c,e,a):(c=m[0],p&&await c._set(f,p.toJSON()),await Promise.all(n.map(async g=>{if(g!==c)try{await g._remove(f)}catch{}})),new oo(c,e,a))}}/**
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
 */function X1(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ab(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ob(e))return"Blackberry";if(lb(e))return"Webos";if(rb(e))return"Safari";if((e.includes("chrome/")||ib(e))&&!e.includes("edge/"))return"Chrome";if(sb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=i.match(n);if(a?.length===2)return a[1]}return"Other"}function nb(i=nn()){return/firefox\//i.test(i)}function rb(i=nn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ib(i=nn()){return/crios\//i.test(i)}function ab(i=nn()){return/iemobile/i.test(i)}function sb(i=nn()){return/android/i.test(i)}function ob(i=nn()){return/blackberry/i.test(i)}function lb(i=nn()){return/webos/i.test(i)}function tg(i=nn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function d6(i=nn()){return tg(i)&&!!window.navigator?.standalone}function p6(){return I4()&&document.documentMode===10}function cb(i=nn()){return tg(i)||sb(i)||lb(i)||ob(i)||/windows phone/i.test(i)||ab(i)}/**
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
 */function ub(i,e=[]){let n;switch(i){case"Browser":n=X1(nn());break;case"Worker":n=`${X1(nn())}-${i}`;break;default:n=i}const a=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wo}/${a}`}/**
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
 */class m6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const a=c=>new Promise((f,p)=>{try{const m=e(c);f(m)}catch(m){p(m)}});a.onAbort=n,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const a of this.queue)await a(e),a.onAbort&&n.push(a.onAbort)}catch(a){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
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
 */async function g6(i,e={}){return ui(i,"GET","/v2/passwordPolicy",ci(i,e))}/**
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
 */const y6=6;class v6{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??y6,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(n.meetsMinPasswordLength=e.length>=a),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let a;for(let o=0;o<e.length;o++)a=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,n,a,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class _6{constructor(e,n,a,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new W1(this),this.idTokenSubscription=new W1(this),this.beforeStateQueue=new m6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zr(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await oo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hh(this,{idToken:e}),a=await Qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(a)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Un(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let a=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,f=a?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&p?.user&&(a=p.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qh(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(ei(this));const n=e?kt(e):null;return n&&we(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(ei(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(ei(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await g6(this),n=new v6(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vc("auth","Firebase",e())}onAuthStateChanged(e,n,a){return this.registerStateListener(this.authStateSubscription,e,n,a)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,a){return this.registerStateListener(this.idTokenSubscription,e,n,a)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(a.tenantId=this.tenantId),await f6(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const a=await this.getOrInitRedirectPersistenceManager(n);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zr(e)||this._popupRedirectResolver;we(n,this,"argument-error"),this.redirectPersistenceManager=await oo.create(this,[Zr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,a,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(p,this,"internal-error"),p.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,a,o);return()=>{f=!0,m()}}else{const m=e.addObserver(n);return()=>{f=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ub(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&KA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function aa(i){return kt(i)}class W1{constructor(e){this.auth=e,this.observer=null,this.addObserver=V4(n=>this.observer=n)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let df={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function b6(i){df=i}function hb(i){return df.loadJS(i)}function E6(){return df.recaptchaEnterpriseScript}function T6(){return df.gapiScript}function w6(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class S6{constructor(){this.enterprise=new x6}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class x6{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const A6="recaptcha-enterprise",fb="NO_RECAPTCHA";class R6{constructor(e){this.type=A6,this.auth=aa(e)}async verify(e="verify",n=!1){async function a(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,p)=>{i6(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new r6(m);return c.tenantId==null?c._agentRecaptchaConfig=g:c._tenantRecaptchaConfigs[c.tenantId]=g,f(g.siteKey)}}).catch(m=>{p(m)})})}function o(c,f,p){const m=window.grecaptcha;Y1(m)?m.enterprise.ready(()=>{m.enterprise.execute(c,{action:e}).then(g=>{f(g)}).catch(()=>{f(fb)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new S6().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{a(this.auth).then(p=>{if(!n&&Y1(window.grecaptcha))o(p,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let m=E6();m.length!==0&&(m+=p),hb(m).then(()=>{o(p,c,f)}).catch(g=>{f(g)})}}).catch(p=>{f(p)})})}}async function Z1(i,e,n,a=!1,o=!1){const c=new R6(i);let f;if(o)f=fb;else try{f=await c.verify(n)}catch{f=await c.verify(n,!0)}const p={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return a?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Fh(i,e,n,a,o){if(i._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Z1(i,e,n,n==="getOobCode");return a(i,c)}else return a(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Z1(i,e,n,n==="getOobCode");return a(i,f)}else return Promise.reject(c)})}/**
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
 */function I6(i,e){const n=Wm(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if($a(c,e??{}))return o;Wn(o,"already-initialized")}return n.initialize({options:e})}function C6(i,e){const n=e?.persistence||[],a=(Array.isArray(n)?n:[n]).map(Zr);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(a,e?.popupRedirectResolver)}function N6(i,e,n){const a=aa(i);we(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const o=!1,c=db(e),{host:f,port:p}=D6(e),m=p===null?"":`:${p}`,g={url:`${c}//${f}${m}/`},_=Object.freeze({host:f,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){we(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),we($a(g,a.config.emulator)&&$a(_,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=g,a.emulatorConfig=_,a.settings.appVerificationDisabledForTesting=!0,To(f)?(z2(`${c}//${f}${m}`),B2("Auth",!0)):O6()}function db(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function D6(i){const e=db(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const c=o[1];return{host:c,port:J1(a.substr(c.length+1))}}else{const[c,f]=a.split(":");return{host:c,port:J1(f)}}}function J1(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function O6(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class ng{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wr("not implemented")}_getIdTokenResponse(e){return Wr("not implemented")}_linkToIdToken(e,n){return Wr("not implemented")}_getReauthenticationResolver(e){return Wr("not implemented")}}async function P6(i,e){return ui(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function k6(i,e){return Ec(i,"POST","/v1/accounts:signInWithPassword",ci(i,e))}async function M6(i,e){return ui(i,"POST","/v1/accounts:sendOobCode",ci(i,e))}async function V6(i,e){return M6(i,e)}/**
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
 */async function j6(i,e){return Ec(i,"POST","/v1/accounts:signInWithEmailLink",ci(i,e))}async function L6(i,e){return Ec(i,"POST","/v1/accounts:signInWithEmailLink",ci(i,e))}/**
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
 */class rc extends ng{constructor(e,n,a,o=null){super("password",a),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new rc(e,n,"password")}static _fromEmailAndCode(e,n,a=null){return new rc(e,n,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fh(e,n,"signInWithPassword",k6);case"emailLink":return j6(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const a={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fh(e,a,"signUpPassword",P6);case"emailLink":return L6(e,{idToken:n,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function lo(i,e){return Ec(i,"POST","/v1/accounts:signInWithIdp",ci(i,e))}/**
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
 */const U6="http://localhost";class Wa extends ng{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:o,...c}=n;if(!a||!o)return null;const f=new Wa(a,o);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return lo(e,n)}_linkToIdToken(e,n){const a=this.buildRequest();return a.idToken=n,lo(e,a)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lo(e,n)}buildRequest(){const e={requestUri:U6,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_c(n)}return e}}/**
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
 */function z6(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function B6(i){const e=Hl(ql(i)).link,n=e?Hl(ql(e)).deep_link_id:null,a=Hl(ql(i)).deep_link_id;return(a?Hl(ql(a)).link:null)||a||n||e||i}class rg{constructor(e){const n=Hl(ql(e)),a=n.apiKey??null,o=n.oobCode??null,c=z6(n.mode??null);we(a&&o&&c,"argument-error"),this.apiKey=a,this.operation=c,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=B6(e);try{return new rg(n)}catch{return null}}}/**
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
 */class So{constructor(){this.providerId=So.PROVIDER_ID}static credential(e,n){return rc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const a=rg.parseLink(n);return we(a,"argument-error"),rc._fromEmailAndCode(e,a.code,a.tenantId)}}So.PROVIDER_ID="password";So.EMAIL_PASSWORD_SIGN_IN_METHOD="password";So.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tc extends pb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bi extends Tc{constructor(){super("facebook.com")}static credential(e){return Wa._fromParams({providerId:Bi.PROVIDER_ID,signInMethod:Bi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bi.credentialFromTaggedObject(e)}static credentialFromError(e){return Bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bi.credential(e.oauthAccessToken)}catch{return null}}}Bi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bi.PROVIDER_ID="facebook.com";/**
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
 */class Hi extends Tc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wa._fromParams({providerId:Hi.PROVIDER_ID,signInMethod:Hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hi.credentialFromTaggedObject(e)}static credentialFromError(e){return Hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:a}=e;if(!n&&!a)return null;try{return Hi.credential(n,a)}catch{return null}}}Hi.GOOGLE_SIGN_IN_METHOD="google.com";Hi.PROVIDER_ID="google.com";/**
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
 */class qi extends Tc{constructor(){super("github.com")}static credential(e){return Wa._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qi.credentialFromTaggedObject(e)}static credentialFromError(e){return qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qi.credential(e.oauthAccessToken)}catch{return null}}}qi.GITHUB_SIGN_IN_METHOD="github.com";qi.PROVIDER_ID="github.com";/**
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
 */class Fi extends Tc{constructor(){super("twitter.com")}static credential(e,n){return Wa._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:a}=e;if(!n||!a)return null;try{return Fi.credential(n,a)}catch{return null}}}Fi.TWITTER_SIGN_IN_METHOD="twitter.com";Fi.PROVIDER_ID="twitter.com";/**
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
 */async function H6(i,e){return Ec(i,"POST","/v1/accounts:signUp",ci(i,e))}/**
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
 */class Za{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,a,o=!1){const c=await Qn._fromIdTokenResponse(e,a,o),f=e_(a);return new Za({user:c,providerId:f,_tokenResponse:a,operationType:n})}static async _forOperation(e,n,a){await e._updateTokensIfNecessary(a,!0);const o=e_(a);return new Za({user:e,providerId:o,_tokenResponse:a,operationType:n})}}function e_(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Gh extends li{constructor(e,n,a,o){super(n.code,n.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,Gh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,n,a,o){return new Gh(e,n,a,o)}}function mb(i,e,n,a){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Gh._fromErrorAndOperation(i,c,e,a):c})}async function q6(i,e,n=!1){const a=await nc(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Za._forOperation(i,"link",a)}/**
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
 */async function F6(i,e,n=!1){const{auth:a}=i;if(Un(a.app))return Promise.reject(ei(a));const o="reauthenticate";try{const c=await nc(i,mb(a,o,e,i),n);we(c.idToken,a,"internal-error");const f=eg(c.idToken);we(f,a,"internal-error");const{sub:p}=f;return we(i.uid===p,a,"user-mismatch"),Za._forOperation(i,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&Wn(a,"user-mismatch"),c}}/**
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
 */async function gb(i,e,n=!1){if(Un(i.app))return Promise.reject(ei(i));const a="signIn",o=await mb(i,a,e),c=await Za._fromIdTokenResponse(i,a,o);return n||await i._updateCurrentUser(c.user),c}async function G6(i,e){return gb(aa(i),e)}/**
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
 */async function yb(i){const e=aa(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Y6(i,e,n){const a=aa(i);await Fh(a,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",V6)}async function Q6(i,e,n){if(Un(i.app))return Promise.reject(ei(i));const a=aa(i),f=await Fh(a,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",H6).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&yb(i),m}),p=await Za._fromIdTokenResponse(a,"signIn",f);return await a._updateCurrentUser(p.user),p}function K6(i,e,n){return Un(i.app)?Promise.reject(ei(i)):G6(kt(i),So.credential(e,n)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&yb(i),a})}function $6(i,e,n,a){return kt(i).onIdTokenChanged(e,n,a)}function X6(i,e,n){return kt(i).beforeAuthStateChanged(e,n)}function vb(i,e,n,a){return kt(i).onAuthStateChanged(e,n,a)}function W6(i){return kt(i).signOut()}const Yh="__sak";/**
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
 */class _b{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yh,"1"),this.storage.removeItem(Yh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Z6=1e3,J6=10;class bb extends _b{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const a=this.storage.getItem(n),o=this.localCache[n];a!==o&&e(n,o,a)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,p,m)=>{this.notifyListeners(f,m)});return}const a=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(a);!n&&this.localCache[a]===f||this.notifyListeners(a,f)},c=this.storage.getItem(a);p6()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,J6):o()}notifyListeners(e,n){this.localCache[e]=n;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:a}),!0)})},Z6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bb.type="LOCAL";const eR=bb;/**
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
 */class Eb extends _b{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Eb.type="SESSION";const Tb=Eb;/**
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
 */function tR(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const a=new pf(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:a,eventType:o,data:c}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const p=Array.from(f).map(async g=>g(n.origin,c)),m=await tR(p);n.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pf.receivers=[];/**
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
 */function ig(i="",e=10){let n="";for(let a=0;a<e;a++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class nR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,f;return new Promise((p,m)=>{const g=ig("",20);o.port1.start();const _=setTimeout(()=>{m(new Error("unsupported_event"))},a);f={messageChannel:o,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(_),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(w.data.response);break;default:clearTimeout(_),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function vr(){return window}function rR(i){vr().location.href=i}/**
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
 */function wb(){return typeof vr().WorkerGlobalScope<"u"&&typeof vr().importScripts=="function"}async function iR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aR(){return navigator?.serviceWorker?.controller||null}function sR(){return wb()?self:null}/**
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
 */const Sb="firebaseLocalStorageDb",oR=1,Qh="firebaseLocalStorage",xb="fbase_key";class wc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mf(i,e){return i.transaction([Qh],e?"readwrite":"readonly").objectStore(Qh)}function lR(){const i=indexedDB.deleteDatabase(Sb);return new wc(i).toPromise()}function ym(){const i=indexedDB.open(Sb,oR);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const a=i.result;try{a.createObjectStore(Qh,{keyPath:xb})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const a=i.result;a.objectStoreNames.contains(Qh)?e(a):(a.close(),await lR(),e(await ym()))})})}async function t_(i,e,n){const a=mf(i,!0).put({[xb]:e,value:n});return new wc(a).toPromise()}async function cR(i,e){const n=mf(i,!1).get(e),a=await new wc(n).toPromise();return a===void 0?null:a.value}function n_(i,e){const n=mf(i,!0).delete(e);return new wc(n).toPromise()}const uR=800,hR=3;class Ab{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ym(),this.db)}async _withRetries(e){let n=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(n++>hR)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pf._getInstance(sR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await iR(),!this.activeServiceWorker)return;this.sender=new nR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ym();return await t_(e,Yh,"1"),await n_(e,Yh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(a=>t_(a,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(a=>cR(a,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>n_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=mf(o,!1).getAll();return new wc(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],a=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ab.type="LOCAL";const fR=Ab;new bc(3e4,6e4);/**
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
 */function dR(i,e){return e?Zr(e):(we(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class ag extends ng{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pR(i){return gb(i.auth,new ag(i),i.bypassAuthState)}function mR(i){const{auth:e,user:n}=i;return we(n,e,"internal-error"),F6(n,new ag(i),i.bypassAuthState)}async function gR(i){const{auth:e,user:n}=i;return we(n,e,"internal-error"),q6(n,new ag(i),i.bypassAuthState)}/**
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
 */class Rb{constructor(e,n,a,o,c=!1){this.auth=e,this.resolver=a,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:a,postBody:o,tenantId:c,error:f,type:p}=e;if(f){this.reject(f);return}const m={auth:this.auth,requestUri:n,sessionId:a,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pR;case"linkViaPopup":case"linkViaRedirect":return gR;case"reauthViaPopup":case"reauthViaRedirect":return mR;default:Wn(this.auth,"internal-error")}}resolve(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yR=new bc(2e3,1e4);class io extends Rb{constructor(e,n,a,o,c){super(e,n,o,c),this.provider=a,this.authWindow=null,this.pollId=null,io.currentPopupAction&&io.currentPopupAction.cancel(),io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){ri(this.filter.length===1,"Popup operations only handle one event");const e=ig();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(yr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,io.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yR.get())};e()}}io.currentPopupAction=null;/**
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
 */const vR="pendingRedirect",Ah=new Map;class _R extends Rb{constructor(e,n,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,a),this.eventId=null}async execute(){let e=Ah.get(this.auth._key());if(!e){try{const a=await bR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(n){e=()=>Promise.reject(n)}Ah.set(this.auth._key(),e)}return this.bypassAuthState||Ah.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bR(i,e){const n=wR(e),a=TR(i);if(!await a._isAvailable())return!1;const o=await a._get(n)==="true";return await a._remove(n),o}function ER(i,e){Ah.set(i._key(),e)}function TR(i){return Zr(i._redirectPersistence)}function wR(i){return xh(vR,i.config.apiKey,i.name)}async function SR(i,e,n=!1){if(Un(i.app))return Promise.reject(ei(i));const a=aa(i),o=dR(a,e),f=await new _R(a,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await a._persistUserIfCurrent(f.user),await a._setRedirectUser(null,e)),f}/**
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
 */const xR=600*1e3;class AR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(n=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Ib(e)){const a=e.error.code?.split("auth/")[1]||"internal-error";n.onError(yr(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const a=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xR&&this.cachedEventUids.clear(),this.cachedEventUids.has(r_(e))}saveEventToCache(e){this.cachedEventUids.add(r_(e)),this.lastProcessedEventTime=Date.now()}}function r_(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Ib({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function RR(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ib(i);default:return!1}}/**
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
 */async function IR(i,e={}){return ui(i,"GET","/v1/projects",e)}/**
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
 */const CR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NR=/^https?/;async function DR(i){if(i.config.emulator)return;const{authorizedDomains:e}=await IR(i);for(const n of e)try{if(OR(n))return}catch{}Wn(i,"unauthorized-domain")}function OR(i){const e=mm(),{protocol:n,hostname:a}=new URL(e);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&a===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===a}if(!NR.test(n))return!1;if(CR.test(i))return a===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
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
 */const PR=new bc(3e4,6e4);function i_(){const i=vr().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function kR(i){return new Promise((e,n)=>{function a(){i_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{i_(),n(yr(i,"network-request-failed"))},timeout:PR.get()})}if(vr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(vr().gapi?.load)a();else{const o=w6("iframefcb");return vr()[o]=()=>{gapi.load?a():n(yr(i,"network-request-failed"))},hb(`${T6()}?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw Rh=null,e})}let Rh=null;function MR(i){return Rh=Rh||kR(i),Rh}/**
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
 */const VR=new bc(5e3,15e3),jR="__/auth/iframe",LR="emulator/auth/iframe",UR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BR(i){const e=i.config;we(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Jm(e,LR):`https://${i.config.authDomain}/${jR}`,a={apiKey:e.apiKey,appName:i.name,v:wo},o=zR.get(i.config.apiHost);o&&(a.eid=o);const c=i._getFrameworks();return c.length&&(a.fw=c.join(",")),`${n}?${_c(a).slice(1)}`}async function HR(i){const e=await MR(i),n=vr().gapi;return we(n,i,"internal-error"),e.open({where:document.body,url:BR(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UR,dontclear:!0},a=>new Promise(async(o,c)=>{await a.restyle({setHideOnLeave:!1});const f=yr(i,"network-request-failed"),p=vr().setTimeout(()=>{c(f)},VR.get());function m(){vr().clearTimeout(p),o(a)}a.ping(m).then(m,()=>{c(f)})}))}/**
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
 */const qR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FR=500,GR=600,YR="_blank",QR="http://localhost";class a_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KR(i,e,n,a=FR,o=GR){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const m={...qR,width:a.toString(),height:o.toString(),top:c,left:f},g=nn().toLowerCase();n&&(p=ib(g)?YR:n),nb(g)&&(e=e||QR,m.scrollbars="yes");const _=Object.entries(m).reduce((w,[x,O])=>`${w}${x}=${O},`,"");if(d6(g)&&p!=="_self")return $R(e||"",p),new a_(null);const T=window.open(e||"",p,_);we(T,i,"popup-blocked");try{T.focus()}catch{}return new a_(T)}function $R(i,e){const n=document.createElement("a");n.href=i,n.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}/**
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
 */const XR="__/auth/handler",WR="emulator/auth/handler",ZR=encodeURIComponent("fac");async function s_(i,e,n,a,o,c){we(i.config.authDomain,i,"auth-domain-config-required"),we(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:a,v:wo,eventId:o};if(e instanceof pb){e.setDefaultLanguage(i.languageCode),f.providerId=e.providerId||"",M4(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,T]of Object.entries({}))f[_]=T}if(e instanceof Tc){const _=e.getScopes().filter(T=>T!=="");_.length>0&&(f.scopes=_.join(","))}i.tenantId&&(f.tid=i.tenantId);const p=f;for(const _ of Object.keys(p))p[_]===void 0&&delete p[_];const m=await i._getAppCheckToken(),g=m?`#${ZR}=${encodeURIComponent(m)}`:"";return`${JR(i)}?${_c(p).slice(1)}${g}`}function JR({config:i}){return i.emulator?Jm(i,WR):`https://${i.authDomain}/${XR}`}/**
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
 */const tm="webStorageSupport";class e3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tb,this._completeRedirectFn=SR,this._overrideRedirectResult=ER}async _openPopup(e,n,a,o){ri(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await s_(e,n,a,mm(),o);return KR(e,c,ig())}async _openRedirect(e,n,a,o){await this._originValidation(e);const c=await s_(e,n,a,mm(),o);return rR(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(ri(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch(()=>{delete this.eventManagers[n]}),a}async initAndGetManager(e){const n=await HR(e),a=new AR(e);return n.register("authEvent",o=>(we(o?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=n,a}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tm,{type:tm},o=>{const c=o?.[0]?.[tm];c!==void 0&&n(!!c),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cb()||rb()||tg()}}const t3=e3;var o_="@firebase/auth",l_="1.11.0";/**
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
 */class n3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function r3(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function i3(i){ho(new Xa("auth",(e,{options:n})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=a.options;we(f&&!f.includes(":"),"invalid-api-key",{appName:a.name});const m={apiKey:f,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ub(i)},g=new _6(a,o,c,m);return C6(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,a)=>{e.getProvider("auth-internal").initialize()})),ho(new Xa("auth-internal",e=>{const n=aa(e.getProvider("auth").getImmediate());return(a=>new n3(a))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ki(o_,l_,r3(i)),Ki(o_,l_,"esm2020")}/**
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
 */const a3=300,s3=U2("authIdTokenMaxAge")||a3;let c_=null;const o3=i=>async e=>{const n=e&&await e.getIdTokenResult(),a=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(a&&a>s3)return;const o=n?.token;c_!==o&&(c_=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function l3(i=G2()){const e=Wm(i,"auth");if(e.isInitialized())return e.getImmediate();const n=I6(i,{popupRedirectResolver:t3,persistence:[fR,eR,Tb]}),a=U2("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const f=o3(c.toString());X6(n,f,()=>f(n.currentUser)),$6(n,p=>f(p))}}const o=j2("auth");return o&&N6(n,`http://${o}`),n}function c3(){return document.getElementsByTagName("head")?.[0]??document}b6({loadJS(i){return new Promise((e,n)=>{const a=document.createElement("script");a.setAttribute("src",i),a.onload=e,a.onerror=o=>{const c=yr("internal-error");c.customData=o,n(c)},a.type="text/javascript",a.charset="UTF-8",c3().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});i3("Browser");var u_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $i,Cb;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,R){function N(){}N.prototype=R.prototype,k.D=R.prototype,k.prototype=new N,k.prototype.constructor=k,k.C=function(P,I,C){for(var D=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)D[ue-2]=arguments[ue];return R.prototype[I].apply(P,D)}}function n(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,n),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,R,N){N||(N=0);var P=Array(16);if(typeof R=="string")for(var I=0;16>I;++I)P[I]=R.charCodeAt(N++)|R.charCodeAt(N++)<<8|R.charCodeAt(N++)<<16|R.charCodeAt(N++)<<24;else for(I=0;16>I;++I)P[I]=R[N++]|R[N++]<<8|R[N++]<<16|R[N++]<<24;R=k.g[0],N=k.g[1],I=k.g[2];var C=k.g[3],D=R+(C^N&(I^C))+P[0]+3614090360&4294967295;R=N+(D<<7&4294967295|D>>>25),D=C+(I^R&(N^I))+P[1]+3905402710&4294967295,C=R+(D<<12&4294967295|D>>>20),D=I+(N^C&(R^N))+P[2]+606105819&4294967295,I=C+(D<<17&4294967295|D>>>15),D=N+(R^I&(C^R))+P[3]+3250441966&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(C^N&(I^C))+P[4]+4118548399&4294967295,R=N+(D<<7&4294967295|D>>>25),D=C+(I^R&(N^I))+P[5]+1200080426&4294967295,C=R+(D<<12&4294967295|D>>>20),D=I+(N^C&(R^N))+P[6]+2821735955&4294967295,I=C+(D<<17&4294967295|D>>>15),D=N+(R^I&(C^R))+P[7]+4249261313&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(C^N&(I^C))+P[8]+1770035416&4294967295,R=N+(D<<7&4294967295|D>>>25),D=C+(I^R&(N^I))+P[9]+2336552879&4294967295,C=R+(D<<12&4294967295|D>>>20),D=I+(N^C&(R^N))+P[10]+4294925233&4294967295,I=C+(D<<17&4294967295|D>>>15),D=N+(R^I&(C^R))+P[11]+2304563134&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(C^N&(I^C))+P[12]+1804603682&4294967295,R=N+(D<<7&4294967295|D>>>25),D=C+(I^R&(N^I))+P[13]+4254626195&4294967295,C=R+(D<<12&4294967295|D>>>20),D=I+(N^C&(R^N))+P[14]+2792965006&4294967295,I=C+(D<<17&4294967295|D>>>15),D=N+(R^I&(C^R))+P[15]+1236535329&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(I^C&(N^I))+P[1]+4129170786&4294967295,R=N+(D<<5&4294967295|D>>>27),D=C+(N^I&(R^N))+P[6]+3225465664&4294967295,C=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(C^R))+P[11]+643717713&4294967295,I=C+(D<<14&4294967295|D>>>18),D=N+(C^R&(I^C))+P[0]+3921069994&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(I^C&(N^I))+P[5]+3593408605&4294967295,R=N+(D<<5&4294967295|D>>>27),D=C+(N^I&(R^N))+P[10]+38016083&4294967295,C=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(C^R))+P[15]+3634488961&4294967295,I=C+(D<<14&4294967295|D>>>18),D=N+(C^R&(I^C))+P[4]+3889429448&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(I^C&(N^I))+P[9]+568446438&4294967295,R=N+(D<<5&4294967295|D>>>27),D=C+(N^I&(R^N))+P[14]+3275163606&4294967295,C=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(C^R))+P[3]+4107603335&4294967295,I=C+(D<<14&4294967295|D>>>18),D=N+(C^R&(I^C))+P[8]+1163531501&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(I^C&(N^I))+P[13]+2850285829&4294967295,R=N+(D<<5&4294967295|D>>>27),D=C+(N^I&(R^N))+P[2]+4243563512&4294967295,C=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(C^R))+P[7]+1735328473&4294967295,I=C+(D<<14&4294967295|D>>>18),D=N+(C^R&(I^C))+P[12]+2368359562&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(N^I^C)+P[5]+4294588738&4294967295,R=N+(D<<4&4294967295|D>>>28),D=C+(R^N^I)+P[8]+2272392833&4294967295,C=R+(D<<11&4294967295|D>>>21),D=I+(C^R^N)+P[11]+1839030562&4294967295,I=C+(D<<16&4294967295|D>>>16),D=N+(I^C^R)+P[14]+4259657740&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(N^I^C)+P[1]+2763975236&4294967295,R=N+(D<<4&4294967295|D>>>28),D=C+(R^N^I)+P[4]+1272893353&4294967295,C=R+(D<<11&4294967295|D>>>21),D=I+(C^R^N)+P[7]+4139469664&4294967295,I=C+(D<<16&4294967295|D>>>16),D=N+(I^C^R)+P[10]+3200236656&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(N^I^C)+P[13]+681279174&4294967295,R=N+(D<<4&4294967295|D>>>28),D=C+(R^N^I)+P[0]+3936430074&4294967295,C=R+(D<<11&4294967295|D>>>21),D=I+(C^R^N)+P[3]+3572445317&4294967295,I=C+(D<<16&4294967295|D>>>16),D=N+(I^C^R)+P[6]+76029189&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(N^I^C)+P[9]+3654602809&4294967295,R=N+(D<<4&4294967295|D>>>28),D=C+(R^N^I)+P[12]+3873151461&4294967295,C=R+(D<<11&4294967295|D>>>21),D=I+(C^R^N)+P[15]+530742520&4294967295,I=C+(D<<16&4294967295|D>>>16),D=N+(I^C^R)+P[2]+3299628645&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(I^(N|~C))+P[0]+4096336452&4294967295,R=N+(D<<6&4294967295|D>>>26),D=C+(N^(R|~I))+P[7]+1126891415&4294967295,C=R+(D<<10&4294967295|D>>>22),D=I+(R^(C|~N))+P[14]+2878612391&4294967295,I=C+(D<<15&4294967295|D>>>17),D=N+(C^(I|~R))+P[5]+4237533241&4294967295,N=I+(D<<21&4294967295|D>>>11),D=R+(I^(N|~C))+P[12]+1700485571&4294967295,R=N+(D<<6&4294967295|D>>>26),D=C+(N^(R|~I))+P[3]+2399980690&4294967295,C=R+(D<<10&4294967295|D>>>22),D=I+(R^(C|~N))+P[10]+4293915773&4294967295,I=C+(D<<15&4294967295|D>>>17),D=N+(C^(I|~R))+P[1]+2240044497&4294967295,N=I+(D<<21&4294967295|D>>>11),D=R+(I^(N|~C))+P[8]+1873313359&4294967295,R=N+(D<<6&4294967295|D>>>26),D=C+(N^(R|~I))+P[15]+4264355552&4294967295,C=R+(D<<10&4294967295|D>>>22),D=I+(R^(C|~N))+P[6]+2734768916&4294967295,I=C+(D<<15&4294967295|D>>>17),D=N+(C^(I|~R))+P[13]+1309151649&4294967295,N=I+(D<<21&4294967295|D>>>11),D=R+(I^(N|~C))+P[4]+4149444226&4294967295,R=N+(D<<6&4294967295|D>>>26),D=C+(N^(R|~I))+P[11]+3174756917&4294967295,C=R+(D<<10&4294967295|D>>>22),D=I+(R^(C|~N))+P[2]+718787259&4294967295,I=C+(D<<15&4294967295|D>>>17),D=N+(C^(I|~R))+P[9]+3951481745&4294967295,k.g[0]=k.g[0]+R&4294967295,k.g[1]=k.g[1]+(I+(D<<21&4294967295|D>>>11))&4294967295,k.g[2]=k.g[2]+I&4294967295,k.g[3]=k.g[3]+C&4294967295}a.prototype.u=function(k,R){R===void 0&&(R=k.length);for(var N=R-this.blockSize,P=this.B,I=this.h,C=0;C<R;){if(I==0)for(;C<=N;)o(this,k,C),C+=this.blockSize;if(typeof k=="string"){for(;C<R;)if(P[I++]=k.charCodeAt(C++),I==this.blockSize){o(this,P),I=0;break}}else for(;C<R;)if(P[I++]=k[C++],I==this.blockSize){o(this,P),I=0;break}}this.h=I,this.o+=R},a.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var R=1;R<k.length-8;++R)k[R]=0;var N=8*this.o;for(R=k.length-8;R<k.length;++R)k[R]=N&255,N/=256;for(this.u(k),k=Array(16),R=N=0;4>R;++R)for(var P=0;32>P;P+=8)k[N++]=this.g[R]>>>P&255;return k};function c(k,R){var N=p;return Object.prototype.hasOwnProperty.call(N,k)?N[k]:N[k]=R(k)}function f(k,R){this.h=R;for(var N=[],P=!0,I=k.length-1;0<=I;I--){var C=k[I]|0;P&&C==R||(N[I]=C,P=!1)}this.g=N}var p={};function m(k){return-128<=k&&128>k?c(k,function(R){return new f([R|0],0>R?-1:0)}):new f([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return M(g(-k));for(var R=[],N=1,P=0;k>=N;P++)R[P]=k/N|0,N*=4294967296;return new f(R,0)}function _(k,R){if(k.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(k.charAt(0)=="-")return M(_(k.substring(1),R));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=g(Math.pow(R,8)),P=T,I=0;I<k.length;I+=8){var C=Math.min(8,k.length-I),D=parseInt(k.substring(I,I+C),R);8>C?(C=g(Math.pow(R,C)),P=P.j(C).add(g(D))):(P=P.j(N),P=P.add(g(D)))}return P}var T=m(0),w=m(1),x=m(16777216);i=f.prototype,i.m=function(){if(V(this))return-M(this).m();for(var k=0,R=1,N=0;N<this.g.length;N++){var P=this.i(N);k+=(0<=P?P:4294967296+P)*R,R*=4294967296}return k},i.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(O(this))return"0";if(V(this))return"-"+M(this).toString(k);for(var R=g(Math.pow(k,6)),N=this,P="";;){var I=te(N,R).g;N=U(N,I.j(R));var C=((0<N.g.length?N.g[0]:N.h)>>>0).toString(k);if(N=I,O(N))return C+P;for(;6>C.length;)C="0"+C;P=C+P}},i.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function O(k){if(k.h!=0)return!1;for(var R=0;R<k.g.length;R++)if(k.g[R]!=0)return!1;return!0}function V(k){return k.h==-1}i.l=function(k){return k=U(this,k),V(k)?-1:O(k)?0:1};function M(k){for(var R=k.g.length,N=[],P=0;P<R;P++)N[P]=~k.g[P];return new f(N,~k.h).add(w)}i.abs=function(){return V(this)?M(this):this},i.add=function(k){for(var R=Math.max(this.g.length,k.g.length),N=[],P=0,I=0;I<=R;I++){var C=P+(this.i(I)&65535)+(k.i(I)&65535),D=(C>>>16)+(this.i(I)>>>16)+(k.i(I)>>>16);P=D>>>16,C&=65535,D&=65535,N[I]=D<<16|C}return new f(N,N[N.length-1]&-2147483648?-1:0)};function U(k,R){return k.add(M(R))}i.j=function(k){if(O(this)||O(k))return T;if(V(this))return V(k)?M(this).j(M(k)):M(M(this).j(k));if(V(k))return M(this.j(M(k)));if(0>this.l(x)&&0>k.l(x))return g(this.m()*k.m());for(var R=this.g.length+k.g.length,N=[],P=0;P<2*R;P++)N[P]=0;for(P=0;P<this.g.length;P++)for(var I=0;I<k.g.length;I++){var C=this.i(P)>>>16,D=this.i(P)&65535,ue=k.i(I)>>>16,Re=k.i(I)&65535;N[2*P+2*I]+=D*Re,Y(N,2*P+2*I),N[2*P+2*I+1]+=C*Re,Y(N,2*P+2*I+1),N[2*P+2*I+1]+=D*ue,Y(N,2*P+2*I+1),N[2*P+2*I+2]+=C*ue,Y(N,2*P+2*I+2)}for(P=0;P<R;P++)N[P]=N[2*P+1]<<16|N[2*P];for(P=R;P<2*R;P++)N[P]=0;return new f(N,0)};function Y(k,R){for(;(k[R]&65535)!=k[R];)k[R+1]+=k[R]>>>16,k[R]&=65535,R++}function q(k,R){this.g=k,this.h=R}function te(k,R){if(O(R))throw Error("division by zero");if(O(k))return new q(T,T);if(V(k))return R=te(M(k),R),new q(M(R.g),M(R.h));if(V(R))return R=te(k,M(R)),new q(M(R.g),R.h);if(30<k.g.length){if(V(k)||V(R))throw Error("slowDivide_ only works with positive integers.");for(var N=w,P=R;0>=P.l(k);)N=Z(N),P=Z(P);var I=J(N,1),C=J(P,1);for(P=J(P,2),N=J(N,2);!O(P);){var D=C.add(P);0>=D.l(k)&&(I=I.add(N),C=D),P=J(P,1),N=J(N,1)}return R=U(k,I.j(R)),new q(I,R)}for(I=T;0<=k.l(R);){for(N=Math.max(1,Math.floor(k.m()/R.m())),P=Math.ceil(Math.log(N)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),C=g(N),D=C.j(R);V(D)||0<D.l(k);)N-=P,C=g(N),D=C.j(R);O(C)&&(C=w),I=I.add(C),k=U(k,D)}return new q(I,k)}i.A=function(k){return te(this,k).h},i.and=function(k){for(var R=Math.max(this.g.length,k.g.length),N=[],P=0;P<R;P++)N[P]=this.i(P)&k.i(P);return new f(N,this.h&k.h)},i.or=function(k){for(var R=Math.max(this.g.length,k.g.length),N=[],P=0;P<R;P++)N[P]=this.i(P)|k.i(P);return new f(N,this.h|k.h)},i.xor=function(k){for(var R=Math.max(this.g.length,k.g.length),N=[],P=0;P<R;P++)N[P]=this.i(P)^k.i(P);return new f(N,this.h^k.h)};function Z(k){for(var R=k.g.length+1,N=[],P=0;P<R;P++)N[P]=k.i(P)<<1|k.i(P-1)>>>31;return new f(N,k.h)}function J(k,R){var N=R>>5;R%=32;for(var P=k.g.length-N,I=[],C=0;C<P;C++)I[C]=0<R?k.i(C+N)>>>R|k.i(C+N+1)<<32-R:k.i(C+N);return new f(I,k.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,Cb=a,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=_,$i=f}).apply(typeof u_<"u"?u_:typeof self<"u"?self:typeof window<"u"?window:{});var gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nb,Fl,Db,Ih,vm,Ob,Pb,kb;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,v,b){return u==Array.prototype||u==Object.prototype||(u[v]=b.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof gh=="object"&&gh];for(var v=0;v<u.length;++v){var b=u[v];if(b&&b.Math==Math)return b}throw Error("Cannot find global object")}var a=n(this);function o(u,v){if(v)e:{var b=a;u=u.split(".");for(var A=0;A<u.length-1;A++){var F=u[A];if(!(F in b))break e;b=b[F]}u=u[u.length-1],A=b[u],v=v(A),v!=A&&v!=null&&e(b,u,{configurable:!0,writable:!0,value:v})}}function c(u,v){u instanceof String&&(u+="");var b=0,A=!1,F={next:function(){if(!A&&b<u.length){var W=b++;return{value:v(W,u[W]),done:!1}}return A=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return c(this,function(v,b){return b})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},p=this||self;function m(u){var v=typeof u;return v=v!="object"?v:u?Array.isArray(u)?"array":v:"null",v=="array"||v=="object"&&typeof u.length=="number"}function g(u){var v=typeof u;return v=="object"&&u!=null||v=="function"}function _(u,v,b){return u.call.apply(u.bind,arguments)}function T(u,v,b){if(!u)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,A),u.apply(v,F)}}return function(){return u.apply(v,arguments)}}function w(u,v,b){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:T,w.apply(null,arguments)}function x(u,v){var b=Array.prototype.slice.call(arguments,1);return function(){var A=b.slice();return A.push.apply(A,arguments),u.apply(this,A)}}function O(u,v){function b(){}b.prototype=v.prototype,u.aa=v.prototype,u.prototype=new b,u.prototype.constructor=u,u.Qb=function(A,F,W){for(var he=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)he[Ue-2]=arguments[Ue];return v.prototype[F].apply(A,he)}}function V(u){const v=u.length;if(0<v){const b=Array(v);for(let A=0;A<v;A++)b[A]=u[A];return b}return[]}function M(u,v){for(let b=1;b<arguments.length;b++){const A=arguments[b];if(m(A)){const F=u.length||0,W=A.length||0;u.length=F+W;for(let he=0;he<W;he++)u[F+he]=A[he]}else u.push(A)}}class U{constructor(v,b){this.i=v,this.j=b,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function Y(u){return/^[\s\xa0]*$/.test(u)}function q(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function te(u){return te[" "](u),u}te[" "]=function(){};var Z=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function J(u,v,b){for(const A in u)v.call(b,u[A],A,u)}function k(u,v){for(const b in u)v.call(void 0,u[b],b,u)}function R(u){const v={};for(const b in u)v[b]=u[b];return v}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,v){let b,A;for(let F=1;F<arguments.length;F++){A=arguments[F];for(b in A)u[b]=A[b];for(let W=0;W<N.length;W++)b=N[W],Object.prototype.hasOwnProperty.call(A,b)&&(u[b]=A[b])}}function I(u){var v=1;u=u.split(":");const b=[];for(;0<v&&u.length;)b.push(u.shift()),v--;return u.length&&b.push(u.join(":")),b}function C(u){p.setTimeout(()=>{throw u},0)}function D(){var u=Ie;let v=null;return u.g&&(v=u.g,u.g=u.g.next,u.g||(u.h=null),v.next=null),v}class ue{constructor(){this.h=this.g=null}add(v,b){const A=Re.get();A.set(v,b),this.h?this.h.next=A:this.g=A,this.h=A}}var Re=new U(()=>new Q,u=>u.reset());class Q{constructor(){this.next=this.g=this.h=null}set(v,b){this.h=v,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,fe=!1,Ie=new ue,L=()=>{const u=p.Promise.resolve(void 0);oe=()=>{u.then(ne)}};var ne=()=>{for(var u;u=D();){try{u.h.call(u.g)}catch(b){C(b)}var v=Re;v.j(u),100>v.h&&(v.h++,u.next=v.g,v.g=u)}fe=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(u,v){this.type=u,this.g=this.target=v,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var ge=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,v=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const b=()=>{};p.addEventListener("test",b,v),p.removeEventListener("test",b,v)}catch{}return u})();function Ne(u,v){if(le.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var b=this.type=u.type,A=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=v,v=u.relatedTarget){if(Z){e:{try{te(v.nodeName);var F=!0;break e}catch{}F=!1}F||(v=null)}}else b=="mouseover"?v=u.fromElement:b=="mouseout"&&(v=u.toElement);this.relatedTarget=v,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:_e[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ne.aa.h.call(this)}}O(Ne,le);var _e={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var tt="closure_listenable_"+(1e6*Math.random()|0),Te=0;function ft(u,v,b,A,F){this.listener=u,this.proxy=null,this.src=v,this.type=b,this.capture=!!A,this.ha=F,this.key=++Te,this.da=this.fa=!1}function $t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function rn(u){this.src=u,this.g={},this.h=0}rn.prototype.add=function(u,v,b,A,F){var W=u.toString();u=this.g[W],u||(u=this.g[W]=[],this.h++);var he=la(u,v,A,F);return-1<he?(v=u[he],b||(v.fa=!1)):(v=new ft(v,this.src,W,!!A,F),v.fa=b,u.push(v)),v};function xr(u,v){var b=v.type;if(b in u.g){var A=u.g[b],F=Array.prototype.indexOf.call(A,v,void 0),W;(W=0<=F)&&Array.prototype.splice.call(A,F,1),W&&($t(v),u.g[b].length==0&&(delete u.g[b],u.h--))}}function la(u,v,b,A){for(var F=0;F<u.length;++F){var W=u[F];if(!W.da&&W.listener==v&&W.capture==!!b&&W.ha==A)return F}return-1}var ca="closure_lm_"+(1e6*Math.random()|0),No={};function Nc(u,v,b,A,F){if(Array.isArray(v)){for(var W=0;W<v.length;W++)Nc(u,v[W],b,A,F);return null}return b=Dc(b),u&&u[tt]?u.K(v,b,g(A)?!!A.capture:!1,F):xn(u,v,b,!1,A,F)}function xn(u,v,b,A,F,W){if(!v)throw Error("Invalid event type");var he=g(F)?!!F.capture:!!F,Ue=cs(u);if(Ue||(u[ca]=Ue=new rn(u)),b=Ue.add(v,b,A,he,W),b.proxy)return b;if(A=Vf(),b.proxy=A,A.src=u,A.listener=b,u.addEventListener)ge||(F=he),F===void 0&&(F=!1),u.addEventListener(v.toString(),A,F);else if(u.attachEvent)u.attachEvent(ua(v.toString()),A);else if(u.addListener&&u.removeListener)u.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return b}function Vf(){function u(b){return v.call(u.src,u.listener,b)}const v=jf;return u}function Do(u,v,b,A,F){if(Array.isArray(v))for(var W=0;W<v.length;W++)Do(u,v[W],b,A,F);else A=g(A)?!!A.capture:!!A,b=Dc(b),u&&u[tt]?(u=u.i,v=String(v).toString(),v in u.g&&(W=u.g[v],b=la(W,b,A,F),-1<b&&($t(W[b]),Array.prototype.splice.call(W,b,1),W.length==0&&(delete u.g[v],u.h--)))):u&&(u=cs(u))&&(v=u.g[v.toString()],u=-1,v&&(u=la(v,b,A,F)),(b=-1<u?v[u]:null)&&ls(b))}function ls(u){if(typeof u!="number"&&u&&!u.da){var v=u.src;if(v&&v[tt])xr(v.i,u);else{var b=u.type,A=u.proxy;v.removeEventListener?v.removeEventListener(b,A,u.capture):v.detachEvent?v.detachEvent(ua(b),A):v.addListener&&v.removeListener&&v.removeListener(A),(b=cs(v))?(xr(b,u),b.h==0&&(b.src=null,v[ca]=null)):$t(u)}}}function ua(u){return u in No?No[u]:No[u]="on"+u}function jf(u,v){if(u.da)u=!0;else{v=new Ne(v,this);var b=u.listener,A=u.ha||u.src;u.fa&&ls(u),u=b.call(A,v)}return u}function cs(u){return u=u[ca],u instanceof rn?u:null}var Oo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dc(u){return typeof u=="function"?u:(u[Oo]||(u[Oo]=function(v){return u.handleEvent(v)}),u[Oo])}function dt(){ce.call(this),this.i=new rn(this),this.M=this,this.F=null}O(dt,ce),dt.prototype[tt]=!0,dt.prototype.removeEventListener=function(u,v,b,A){Do(this,u,v,b,A)};function Qe(u,v){var b,A=u.F;if(A)for(b=[];A;A=A.F)b.push(A);if(u=u.M,A=v.type||v,typeof v=="string")v=new le(v,u);else if(v instanceof le)v.target=v.target||u;else{var F=v;v=new le(A,u),P(v,F)}if(F=!0,b)for(var W=b.length-1;0<=W;W--){var he=v.g=b[W];F=mn(he,A,!0,v)&&F}if(he=v.g=u,F=mn(he,A,!0,v)&&F,F=mn(he,A,!1,v)&&F,b)for(W=0;W<b.length;W++)he=v.g=b[W],F=mn(he,A,!1,v)&&F}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,v;for(v in u.g){for(var b=u.g[v],A=0;A<b.length;A++)$t(b[A]);delete u.g[v],u.h--}}this.F=null},dt.prototype.K=function(u,v,b,A){return this.i.add(String(u),v,!1,b,A)},dt.prototype.L=function(u,v,b,A){return this.i.add(String(u),v,!0,b,A)};function mn(u,v,b,A){if(v=u.i.g[String(v)],!v)return!0;v=v.concat();for(var F=!0,W=0;W<v.length;++W){var he=v[W];if(he&&!he.da&&he.capture==b){var Ue=he.listener,Ct=he.ha||he.src;he.fa&&xr(u.i,he),F=Ue.call(Ct,A)!==!1&&F}}return F&&!A.defaultPrevented}function Xt(u,v,b){if(typeof u=="function")b&&(u=w(u,b));else if(u&&typeof u.handleEvent=="function")u=w(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:p.setTimeout(u,v||0)}function Oc(u){u.g=Xt(()=>{u.g=null,u.i&&(u.i=!1,Oc(u))},u.l);const v=u.h;u.h=null,u.m.apply(null,v)}class Lf extends ce{constructor(v,b){super(),this.m=v,this.l=b,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:Oc(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ha(u){ce.call(this),this.h=u,this.g={}}O(ha,ce);var fa=[];function da(u){J(u.g,function(v,b){this.g.hasOwnProperty(b)&&ls(v)},u),u.g={}}ha.prototype.N=function(){ha.aa.N.call(this),da(this)},ha.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bn=p.JSON.stringify,us=p.JSON.parse,pa=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function Po(){}Po.prototype.h=null;function ko(u){return u.h||(u.h=u.i())}function Mo(){}var Ar={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rr(){le.call(this,"d")}O(Rr,le);function Vo(){le.call(this,"c")}O(Vo,le);var er={},jo=null;function hi(){return jo=jo||new dt}er.La="serverreachability";function hs(u){le.call(this,er.La,u)}O(hs,le);function fi(u){const v=hi();Qe(v,new hs(v))}er.STAT_EVENT="statevent";function Pc(u,v){le.call(this,er.STAT_EVENT,u),this.stat=v}O(Pc,le);function st(u){const v=hi();Qe(v,new Pc(v,u))}er.Ma="timingevent";function It(u,v){le.call(this,er.Ma,u),this.size=v}O(It,le);function Et(u,v){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},v)}function An(){this.g=!0}An.prototype.xa=function(){this.g=!1};function Lo(u,v,b,A,F,W){u.info(function(){if(u.g)if(W)for(var he="",Ue=W.split("&"),Ct=0;Ct<Ue.length;Ct++){var ze=Ue[Ct].split("=");if(1<ze.length){var Vt=ze[0];ze=ze[1];var Nt=Vt.split("_");he=2<=Nt.length&&Nt[1]=="type"?he+(Vt+"="+ze+"&"):he+(Vt+"=redacted&")}}else he=null;else he=W;return"XMLHTTP REQ ("+A+") [attempt "+F+"]: "+v+`
`+b+`
`+he})}function Uf(u,v,b,A,F,W,he){u.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+F+"]: "+v+`
`+b+`
`+W+" "+he})}function di(u,v,b,A){u.info(function(){return"XMLHTTP TEXT ("+v+"): "+ma(u,b)+(A?" "+A:"")})}function kc(u,v){u.info(function(){return"TIMEOUT: "+v})}An.prototype.info=function(){};function ma(u,v){if(!u.g)return v;if(!v)return null;try{var b=JSON.parse(v);if(b){for(u=0;u<b.length;u++)if(Array.isArray(b[u])){var A=b[u];if(!(2>A.length)){var F=A[1];if(Array.isArray(F)&&!(1>F.length)){var W=F[0];if(W!="noop"&&W!="stop"&&W!="close")for(var he=1;he<F.length;he++)F[he]=""}}}}return Bn(b)}catch{return v}}var pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ir={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tr;function nr(){}O(nr,Po),nr.prototype.g=function(){return new XMLHttpRequest},nr.prototype.i=function(){return{}},tr=new nr;function an(u,v,b,A){this.j=u,this.i=v,this.l=b,this.R=A||1,this.U=new ha(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}var Uo={},fs={};function Hn(u,v,b){u.L=1,u.v=ba(gn(v)),u.m=b,u.P=!0,Cr(u,null)}function Cr(u,v){u.F=Date.now(),ga(u),u.A=gn(u.v);var b=u.A,A=u.R;Array.isArray(A)||(A=[String(A)]),Go(b.i,"t",A),u.C=0,b=u.j.J,u.h=new yt,u.g=Xc(u.j,b?v:null,!u.m),0<u.O&&(u.M=new Lf(w(u.Y,u,u.g),u.O)),v=u.U,b=u.g,A=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(fa[0]=F.toString()),F=fa);for(var W=0;W<F.length;W++){var he=Nc(b,F[W],A||v.handleEvent,!1,v.h||v);if(!he)break;v.g[he.key]=he}v=u.H?R(u.H):{},u.m?(u.u||(u.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,v)):(u.u="GET",u.g.ea(u.A,u.u,null,v)),fi(),Lo(u.i,u.u,u.A,u.l,u.R,u.m)}an.prototype.ca=function(u){u=u.target;const v=this.M;v&&Nn(u)==3?v.j():this.Y(u)},an.prototype.Y=function(u){try{if(u==this.g)e:{const Nt=Nn(this.g);var v=this.g.Ba();const jr=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||Hc(this.g)))){this.J||Nt!=4||v==7||(v==8||0>=jr?fi(3):fi(2)),mi(this);var b=this.g.Z();this.X=b;t:if(Mc(this)){var A=Hc(this.g);u="";var F=A.length,W=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),rr(this);var he="";break t}this.h.i=new p.TextDecoder}for(v=0;v<F;v++)this.h.h=!0,u+=this.h.i.decode(A[v],{stream:!(W&&v==F-1)});A.length=0,this.h.g+=u,this.C=0,he=this.h.g}else he=this.g.oa();if(this.o=b==200,Uf(this.i,this.u,this.A,this.l,this.R,Nt,b),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Ct=this.g;if((Ue=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(Ue)){var ze=Ue;break t}}ze=null}if(b=ze)di(this.i,this.l,b,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,b);else{this.o=!1,this.s=3,st(12),Bt(this),rr(this);break e}}if(this.P){b=!0;let Ht;for(;!this.J&&this.C<he.length;)if(Ht=Vc(this,he),Ht==fs){Nt==4&&(this.s=4,st(14),b=!1),di(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==Uo){this.s=4,st(15),di(this.i,this.l,he,"[Invalid Chunk]"),b=!1;break}else di(this.i,this.l,Ht,null),ya(this,Ht);if(Mc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||he.length!=0||this.h.h||(this.s=1,st(16),b=!1),this.o=this.o&&b,!b)di(this.i,this.l,he,"[Invalid Chunked Response]"),Bt(this),rr(this);else if(0<he.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+he.length),Ia(Vt),Vt.M=!0,st(11))}}else di(this.i,this.l,he,null),ya(this,he);Nt==4&&Bt(this),this.o&&!this.J&&(Nt==4?Qc(this.j,this):(this.o=!1,ga(this)))}else Ff(this.g),b==400&&0<he.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Bt(this),rr(this)}}}catch{}finally{}};function Mc(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Vc(u,v){var b=u.C,A=v.indexOf(`
`,b);return A==-1?fs:(b=Number(v.substring(b,A)),isNaN(b)?Uo:(A+=1,A+b>v.length?fs:(v=v.slice(A,A+b),u.C=A+b,v)))}an.prototype.cancel=function(){this.J=!0,Bt(this)};function ga(u){u.S=Date.now()+u.I,jc(u,u.I)}function jc(u,v){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Et(w(u.ba,u),v)}function mi(u){u.B&&(p.clearTimeout(u.B),u.B=null)}an.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(kc(this.i,this.A),this.L!=2&&(fi(),st(17)),Bt(this),this.s=2,rr(this)):jc(this,this.S-u)};function rr(u){u.j.G==0||u.J||Qc(u.j,u)}function Bt(u){mi(u);var v=u.M;v&&typeof v.ma=="function"&&v.ma(),u.M=null,da(u.U),u.g&&(v=u.g,u.g=null,v.abort(),v.ma())}function ya(u,v){try{var b=u.j;if(b.G!=0&&(b.g==u||zo(b.h,u))){if(!u.K&&zo(b.h,u)&&b.G==3){try{var A=b.Da.g.parse(v)}catch{A=null}if(Array.isArray(A)&&A.length==3){var F=A;if(F[0]==0){e:if(!b.u){if(b.g)if(b.g.F+3e3<u.F)Ss(b),Ts(b);else break e;Xo(b),st(18)}}else b.za=F[1],0<b.za-b.T&&37500>F[2]&&b.F&&b.v==0&&!b.C&&(b.C=Et(w(b.Za,b),6e3));if(1>=ps(b.h)&&b.ca){try{b.ca()}catch{}b.ca=void 0}}else Vr(b,11)}else if((u.K||b.g==u)&&Ss(b),!Y(v))for(F=b.Da.g.parse(v),v=0;v<F.length;v++){let ze=F[v];if(b.T=ze[0],ze=ze[1],b.G==2)if(ze[0]=="c"){b.K=ze[1],b.ia=ze[2];const Vt=ze[3];Vt!=null&&(b.la=Vt,b.j.info("VER="+b.la));const Nt=ze[4];Nt!=null&&(b.Aa=Nt,b.j.info("SVER="+b.Aa));const jr=ze[5];jr!=null&&typeof jr=="number"&&0<jr&&(A=1.5*jr,b.L=A,b.j.info("backChannelRequestTimeoutMs_="+A)),A=b;const Ht=u.g;if(Ht){const ur=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ur){var W=A.h;W.g||ur.indexOf("spdy")==-1&&ur.indexOf("quic")==-1&&ur.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(ms(W,W.h),W.h=null))}if(A.D){const Zo=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Zo&&(A.ya=Zo,Xe(A.I,A.D,Zo))}}b.G=3,b.l&&b.l.ua(),b.ba&&(b.R=Date.now()-u.F,b.j.info("Handshake RTT: "+b.R+"ms")),A=b;var he=u;if(A.qa=$c(A,A.J?A.ia:null,A.W),he.K){sn(A.h,he);var Ue=he,Ct=A.L;Ct&&(Ue.I=Ct),Ue.B&&(mi(Ue),ga(Ue)),A.g=he}else Gc(A);0<b.i.length&&ws(b)}else ze[0]!="stop"&&ze[0]!="close"||Vr(b,7);else b.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?Vr(b,7):Ko(b):ze[0]!="noop"&&b.l&&b.l.ta(ze),b.v=0)}}fi(4)}catch{}}var Lc=class{constructor(u,v){this.g=u,this.map=v}};function Nr(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ds(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ps(u){return u.h?1:u.g?u.g.size:0}function zo(u,v){return u.h?u.h==v:u.g?u.g.has(v):!1}function ms(u,v){u.g?u.g.add(v):u.h=v}function sn(u,v){u.h&&u.h==v?u.h=null:u.g&&u.g.has(v)&&u.g.delete(v)}Nr.prototype.cancel=function(){if(this.i=Bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Bo(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let v=u.i;for(const b of u.g.values())v=v.concat(b.D);return v}return V(u.i)}function zf(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var v=[],b=u.length,A=0;A<b;A++)v.push(u[A]);return v}v=[],b=0;for(A in u)v[b++]=u[A];return v}function gs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var v=[];u=u.length;for(var b=0;b<u;b++)v.push(b);return v}v=[],b=0;for(const A in u)v[b++]=A;return v}}}function Ho(u,v){if(u.forEach&&typeof u.forEach=="function")u.forEach(v,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,v,void 0);else for(var b=gs(u),A=zf(u),F=A.length,W=0;W<F;W++)v.call(void 0,A[W],b&&b[W],u)}var va=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bf(u,v){if(u){u=u.split("&");for(var b=0;b<u.length;b++){var A=u[b].indexOf("="),F=null;if(0<=A){var W=u[b].substring(0,A);F=u[b].substring(A+1)}else W=u[b];v(W,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Tt(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Tt){this.h=u.h,_a(this,u.j),this.o=u.o,this.g=u.g,gi(this,u.s),this.l=u.l;var v=u.i,b=new Or;b.i=v.i,v.g&&(b.g=new Map(v.g),b.h=v.h),Dr(this,b),this.m=u.m}else u&&(v=String(u).match(va))?(this.h=!1,_a(this,v[1]||"",!0),this.o=Rn(v[2]||""),this.g=Rn(v[3]||"",!0),gi(this,v[4]),this.l=Rn(v[5]||"",!0),Dr(this,v[6]||"",!0),this.m=Rn(v[7]||"")):(this.h=!1,this.i=new Or(null,this.h))}Tt.prototype.toString=function(){var u=[],v=this.j;v&&u.push(Ea(v,qo,!0),":");var b=this.g;return(b||v=="file")&&(u.push("//"),(v=this.o)&&u.push(Ea(v,qo,!0),"@"),u.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b=this.s,b!=null&&u.push(":",String(b))),(b=this.l)&&(this.g&&b.charAt(0)!="/"&&u.push("/"),u.push(Ea(b,b.charAt(0)=="/"?Hf:Fo,!0))),(b=this.i.toString())&&u.push("?",b),(b=this.m)&&u.push("#",Ea(b,ys)),u.join("")};function gn(u){return new Tt(u)}function _a(u,v,b){u.j=b?Rn(v,!0):v,u.j&&(u.j=u.j.replace(/:$/,""))}function gi(u,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);u.s=v}else u.s=null}function Dr(u,v,b){v instanceof Or?(u.i=v,zc(u.i,u.h)):(b||(v=Ea(v,qf)),u.i=new Or(v,u.h))}function Xe(u,v,b){u.i.set(v,b)}function ba(u){return Xe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Rn(u,v){return u?v?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ea(u,v,b){return typeof u=="string"?(u=encodeURI(u).replace(v,Uc),b&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Uc(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var qo=/[#\/\?@]/g,Fo=/[#\?:]/g,Hf=/[#\?]/g,qf=/[#\?@]/g,ys=/#/g;function Or(u,v){this.h=this.g=null,this.i=u||null,this.j=!!v}function In(u){u.g||(u.g=new Map,u.h=0,u.i&&Bf(u.i,function(v,b){u.add(decodeURIComponent(v.replace(/\+/g," ")),b)}))}i=Or.prototype,i.add=function(u,v){In(this),this.i=null,u=ir(this,u);var b=this.g.get(u);return b||this.g.set(u,b=[]),b.push(v),this.h+=1,this};function Pr(u,v){In(u),v=ir(u,v),u.g.has(v)&&(u.i=null,u.h-=u.g.get(v).length,u.g.delete(v))}function kr(u,v){return In(u),v=ir(u,v),u.g.has(v)}i.forEach=function(u,v){In(this),this.g.forEach(function(b,A){b.forEach(function(F){u.call(v,F,A,this)},this)},this)},i.na=function(){In(this);const u=Array.from(this.g.values()),v=Array.from(this.g.keys()),b=[];for(let A=0;A<v.length;A++){const F=u[A];for(let W=0;W<F.length;W++)b.push(v[A])}return b},i.V=function(u){In(this);let v=[];if(typeof u=="string")kr(this,u)&&(v=v.concat(this.g.get(ir(this,u))));else{u=Array.from(this.g.values());for(let b=0;b<u.length;b++)v=v.concat(u[b])}return v},i.set=function(u,v){return In(this),this.i=null,u=ir(this,u),kr(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[v]),this.h+=1,this},i.get=function(u,v){return u?(u=this.V(u),0<u.length?String(u[0]):v):v};function Go(u,v,b){Pr(u,v),0<b.length&&(u.i=null,u.g.set(ir(u,v),V(b)),u.h+=b.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],v=Array.from(this.g.keys());for(var b=0;b<v.length;b++){var A=v[b];const W=encodeURIComponent(String(A)),he=this.V(A);for(A=0;A<he.length;A++){var F=W;he[A]!==""&&(F+="="+encodeURIComponent(String(he[A]))),u.push(F)}}return this.i=u.join("&")};function ir(u,v){return v=String(v),u.j&&(v=v.toLowerCase()),v}function zc(u,v){v&&!u.j&&(In(u),u.i=null,u.g.forEach(function(b,A){var F=A.toLowerCase();A!=F&&(Pr(this,A),Go(this,F,b))},u)),u.j=v}function Ta(u,v){const b=new An;if(p.Image){const A=new Image;A.onload=x(Cn,b,"TestLoadImage: loaded",!0,v,A),A.onerror=x(Cn,b,"TestLoadImage: error",!1,v,A),A.onabort=x(Cn,b,"TestLoadImage: abort",!1,v,A),A.ontimeout=x(Cn,b,"TestLoadImage: timeout",!1,v,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=u}else v(!1)}function qn(u,v){const b=new An,A=new AbortController,F=setTimeout(()=>{A.abort(),Cn(b,"TestPingServer: timeout",!1,v)},1e4);fetch(u,{signal:A.signal}).then(W=>{clearTimeout(F),W.ok?Cn(b,"TestPingServer: ok",!0,v):Cn(b,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(F),Cn(b,"TestPingServer: error",!1,v)})}function Cn(u,v,b,A,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),A(b)}catch{}}function wa(){this.g=new pa}function ar(u,v,b){const A=b||"";try{Ho(u,function(F,W){let he=F;g(F)&&(he=Bn(F)),v.push(A+W+"="+encodeURIComponent(he))})}catch(F){throw v.push(A+"type="+encodeURIComponent("_badmap")),F}}function yi(u){this.l=u.Ub||null,this.j=u.eb||!1}O(yi,Po),yi.prototype.g=function(){return new Mr(this.l,this.j)},yi.prototype.i=(function(u){return function(){return u}})({});function Mr(u,v){dt.call(this),this.D=u,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Mr,dt),i=Mr.prototype,i.open=function(u,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=v,this.readyState=1,or(this)},i.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(v.body=u),(this.D||p).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=0},i.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,or(this)),this.g&&(this.readyState=3,or(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}i.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var v=u.value?u.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!u.done}))&&(this.response=this.responseText+=v)}u.done?sr(this):or(this),this.readyState==3&&Yo(this)}},i.Ra=function(u){this.g&&(this.response=this.responseText=u,sr(this))},i.Qa=function(u){this.g&&(this.response=u,sr(this))},i.ga=function(){this.g&&sr(this)};function sr(u){u.readyState=4,u.l=null,u.j=null,u.v=null,or(u)}i.setRequestHeader=function(u,v){this.u.append(u,v)},i.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],v=this.h.entries();for(var b=v.next();!b.done;)b=b.value,u.push(b[0]+": "+b[1]),b=v.next();return u.join(`\r
`)};function or(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Qo(u){let v="";return J(u,function(b,A){v+=A,v+=":",v+=b,v+=`\r
`}),v}function Mt(u,v,b){e:{for(A in b){var A=!1;break e}A=!0}A||(b=Qo(b),typeof u=="string"?b!=null&&encodeURIComponent(String(b)):Xe(u,v,b))}function Ge(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Ge,dt);var vs=/^https?$/i,Sa=["POST","PUT"];i=Ge.prototype,i.Ha=function(u){this.J=u},i.ea=function(u,v,b,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);v=v?v.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tr.g(),this.v=this.o?ko(this.o):ko(tr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(v,String(u),!0),this.B=!1}catch(W){Bc(this,W);return}if(u=b||"",b=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var F in A)b.set(F,A[F]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const W of A.keys())b.set(W,A.get(W));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(b.keys()).find(W=>W.toLowerCase()=="content-type"),F=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Sa,v,void 0))||A||F||b.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,he]of b)this.g.setRequestHeader(W,he);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xa(this),this.u=!0,this.g.send(u),this.u=!1}catch(W){Bc(this,W)}};function Bc(u,v){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=v,u.m=5,_s(u),lr(u)}function _s(u){u.A||(u.A=!0,Qe(u,"complete"),Qe(u,"error"))}i.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Qe(this,"complete"),Qe(this,"abort"),lr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),lr(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?bs(this):this.bb())},i.bb=function(){bs(this)};function bs(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Nn(u)!=4||u.Z()!=2)){if(u.u&&Nn(u)==4)Xt(u.Ea,0,u);else if(Qe(u,"readystatechange"),Nn(u)==4){u.h=!1;try{const he=u.Z();e:switch(he){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var b;if(!(b=v)){var A;if(A=he===0){var F=String(u.D).match(va)[1]||null;!F&&p.self&&p.self.location&&(F=p.self.location.protocol.slice(0,-1)),A=!vs.test(F?F.toLowerCase():"")}b=A}if(b)Qe(u,"complete"),Qe(u,"success");else{u.m=6;try{var W=2<Nn(u)?u.g.statusText:""}catch{W=""}u.l=W+" ["+u.Z()+"]",_s(u)}}finally{lr(u)}}}}function lr(u,v){if(u.g){xa(u);const b=u.g,A=u.v[0]?()=>{}:null;u.g=null,u.v=null,v||Qe(u,"ready");try{b.onreadystatechange=A}catch{}}}function xa(u){u.I&&(p.clearTimeout(u.I),u.I=null)}i.isActive=function(){return!!this.g};function Nn(u){return u.g?u.g.readyState:0}i.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(u){if(this.g){var v=this.g.responseText;return u&&v.indexOf(u)==0&&(v=v.substring(u.length)),us(v)}};function Hc(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ff(u){const v={};u=(u.g&&2<=Nn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<u.length;A++){if(Y(u[A]))continue;var b=I(u[A]);const F=b[0];if(b=b[1],typeof b!="string")continue;b=b.trim();const W=v[F]||[];v[F]=W,W.push(b)}k(v,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Aa(u,v,b){return b&&b.internalChannelParams&&b.internalChannelParams[u]||v}function Es(u){this.Aa=0,this.i=[],this.j=new An,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Aa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Aa("baseRetryDelayMs",5e3,u),this.cb=Aa("retryDelaySeedMs",1e4,u),this.Wa=Aa("forwardChannelMaxRetries",2,u),this.wa=Aa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Nr(u&&u.concurrentRequestLimit),this.Da=new wa,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Es.prototype,i.la=8,i.G=1,i.connect=function(u,v,b,A){st(0),this.W=u,this.H=v||{},b&&A!==void 0&&(this.H.OSID=b,this.H.OAID=A),this.F=this.X,this.I=$c(this,null,this.W),ws(this)};function Ko(u){if(qc(u),u.G==3){var v=u.U++,b=gn(u.I);if(Xe(b,"SID",u.K),Xe(b,"RID",v),Xe(b,"TYPE","terminate"),Ra(u,b),v=new an(u,u.j,v),v.L=2,v.v=ba(gn(b)),b=!1,p.navigator&&p.navigator.sendBeacon)try{b=p.navigator.sendBeacon(v.v.toString(),"")}catch{}!b&&p.Image&&(new Image().src=v.v,b=!0),b||(v.g=Xc(v.j,null),v.g.ea(v.v)),v.F=Date.now(),ga(v)}Kc(u)}function Ts(u){u.g&&(Ia(u),u.g.cancel(),u.g=null)}function qc(u){Ts(u),u.u&&(p.clearTimeout(u.u),u.u=null),Ss(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function ws(u){if(!ds(u.h)&&!u.s){u.s=!0;var v=u.Ga;oe||L(),fe||(oe(),fe=!0),Ie.add(v,u),u.B=0}}function Gf(u,v){return ps(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=v.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Et(w(u.Ga,u,v),Wo(u,u.B)),u.B++,!0)}i.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new an(this,this.j,u);let W=this.o;if(this.S&&(W?(W=R(W),P(W,this.S)):W=this.S),this.m!==null||this.O||(F.H=W,W=null),this.P)e:{for(var v=0,b=0;b<this.i.length;b++){t:{var A=this.i[b];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(v+=A,4096<v){v=b;break e}if(v===4096||b===this.i.length-1){v=b+1;break e}}v=1e3}else v=1e3;v=Fc(this,F,v),b=gn(this.I),Xe(b,"RID",u),Xe(b,"CVER",22),this.D&&Xe(b,"X-HTTP-Session-Id",this.D),Ra(this,b),W&&(this.O?v="headers="+encodeURIComponent(String(Qo(W)))+"&"+v:this.m&&Mt(b,this.m,W)),ms(this.h,F),this.Ua&&Xe(b,"TYPE","init"),this.P?(Xe(b,"$req",v),Xe(b,"SID","null"),F.T=!0,Hn(F,b,null)):Hn(F,b,v),this.G=2}}else this.G==3&&(u?$o(this,u):this.i.length==0||ds(this.h)||$o(this))};function $o(u,v){var b;v?b=v.l:b=u.U++;const A=gn(u.I);Xe(A,"SID",u.K),Xe(A,"RID",b),Xe(A,"AID",u.T),Ra(u,A),u.m&&u.o&&Mt(A,u.m,u.o),b=new an(u,u.j,b,u.B+1),u.m===null&&(b.H=u.o),v&&(u.i=v.D.concat(u.i)),v=Fc(u,b,1e3),b.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ms(u.h,b),Hn(b,A,v)}function Ra(u,v){u.H&&J(u.H,function(b,A){Xe(v,A,b)}),u.l&&Ho({},function(b,A){Xe(v,A,b)})}function Fc(u,v,b){b=Math.min(u.i.length,b);var A=u.l?w(u.l.Na,u.l,u):null;e:{var F=u.i;let W=-1;for(;;){const he=["count="+b];W==-1?0<b?(W=F[0].g,he.push("ofs="+W)):W=0:he.push("ofs="+W);let Ue=!0;for(let Ct=0;Ct<b;Ct++){let ze=F[Ct].g;const Vt=F[Ct].map;if(ze-=W,0>ze)W=Math.max(0,F[Ct].g-100),Ue=!1;else try{ar(Vt,he,"req"+ze+"_")}catch{A&&A(Vt)}}if(Ue){A=he.join("&");break e}}}return u=u.i.splice(0,b),v.D=u,A}function Gc(u){if(!u.g&&!u.u){u.Y=1;var v=u.Fa;oe||L(),fe||(oe(),fe=!0),Ie.add(v,u),u.v=0}}function Xo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Et(w(u.Fa,u),Wo(u,u.v)),u.v++,!0)}i.Fa=function(){if(this.u=null,Yc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Et(w(this.ab,this),u)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Ts(this),Yc(this))};function Ia(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function Yc(u){u.g=new an(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var v=gn(u.qa);Xe(v,"RID","rpc"),Xe(v,"SID",u.K),Xe(v,"AID",u.T),Xe(v,"CI",u.F?"0":"1"),!u.F&&u.ja&&Xe(v,"TO",u.ja),Xe(v,"TYPE","xmlhttp"),Ra(u,v),u.m&&u.o&&Mt(v,u.m,u.o),u.L&&(u.g.I=u.L);var b=u.g;u=u.ia,b.L=1,b.v=ba(gn(v)),b.m=null,b.P=!0,Cr(b,u)}i.Za=function(){this.C!=null&&(this.C=null,Ts(this),Xo(this),st(19))};function Ss(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Qc(u,v){var b=null;if(u.g==v){Ss(u),Ia(u),u.g=null;var A=2}else if(zo(u.h,v))b=v.D,sn(u.h,v),A=1;else return;if(u.G!=0){if(v.o)if(A==1){b=v.m?v.m.length:0,v=Date.now()-v.F;var F=u.B;A=hi(),Qe(A,new It(A,b)),ws(u)}else Gc(u);else if(F=v.s,F==3||F==0&&0<v.X||!(A==1&&Gf(u,v)||A==2&&Xo(u)))switch(b&&0<b.length&&(v=u.h,v.i=v.i.concat(b)),F){case 1:Vr(u,5);break;case 4:Vr(u,10);break;case 3:Vr(u,6);break;default:Vr(u,2)}}}function Wo(u,v){let b=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(b*=2),b*v}function Vr(u,v){if(u.j.info("Error code "+v),v==2){var b=w(u.fb,u),A=u.Xa;const F=!A;A=new Tt(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||_a(A,"https"),ba(A),F?Ta(A.toString(),b):qn(A.toString(),b)}else st(2);u.G=0,u.l&&u.l.sa(v),Kc(u),qc(u)}i.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Kc(u){if(u.G=0,u.ka=[],u.l){const v=Bo(u.h);(v.length!=0||u.i.length!=0)&&(M(u.ka,v),M(u.ka,u.i),u.h.i.length=0,V(u.i),u.i.length=0),u.l.ra()}}function $c(u,v,b){var A=b instanceof Tt?gn(b):new Tt(b);if(A.g!="")v&&(A.g=v+"."+A.g),gi(A,A.s);else{var F=p.location;A=F.protocol,v=v?v+"."+F.hostname:F.hostname,F=+F.port;var W=new Tt(null);A&&_a(W,A),v&&(W.g=v),F&&gi(W,F),b&&(W.l=b),A=W}return b=u.D,v=u.ya,b&&v&&Xe(A,b,v),Xe(A,"VER",u.la),Ra(u,A),A}function Xc(u,v,b){if(v&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=u.Ca&&!u.pa?new Ge(new yi({eb:b})):new Ge(u.pa),v.Ha(u.J),v}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wc(){}i=Wc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function xs(){}xs.prototype.g=function(u,v){return new on(u,v)};function on(u,v){dt.call(this),this.g=new Es(v),this.l=u,this.h=v&&v.messageUrlParams||null,u=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(u?u["X-WebChannel-Content-Type"]=v.messageContentType:u={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(u?u["X-WebChannel-Client-Profile"]=v.va:u={"X-WebChannel-Client-Profile":v.va}),this.g.S=u,(u=v&&v.Sb)&&!Y(u)&&(this.g.m=u),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!Y(v)&&(this.g.D=v,u=this.h,u!==null&&v in u&&(u=this.h,v in u&&delete u[v])),this.j=new cr(this)}O(on,dt),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Ko(this.g)},on.prototype.o=function(u){var v=this.g;if(typeof u=="string"){var b={};b.__data__=u,u=b}else this.u&&(b={},b.__data__=Bn(u),u=b);v.i.push(new Lc(v.Ya++,u)),v.G==3&&ws(v)},on.prototype.N=function(){this.g.l=null,delete this.j,Ko(this.g),delete this.g,on.aa.N.call(this)};function Zc(u){Rr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var v=u.__sm__;if(v){e:{for(const b in v){u=b;break e}u=void 0}(this.i=u)&&(u=this.i,v=v!==null&&u in v?v[u]:void 0),this.data=v}else this.data=u}O(Zc,Rr);function Jc(){Vo.call(this),this.status=1}O(Jc,Vo);function cr(u){this.g=u}O(cr,Wc),cr.prototype.ua=function(){Qe(this.g,"a")},cr.prototype.ta=function(u){Qe(this.g,new Zc(u))},cr.prototype.sa=function(u){Qe(this.g,new Jc)},cr.prototype.ra=function(){Qe(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,kb=function(){return new xs},Pb=function(){return hi()},Ob=er,vm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pi.NO_ERROR=0,pi.TIMEOUT=8,pi.HTTP_ERROR=6,Ih=pi,Ir.COMPLETE="complete",Db=Ir,Mo.EventType=Ar,Ar.OPEN="a",Ar.CLOSE="b",Ar.ERROR="c",Ar.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Fl=Mo,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,Nb=Ge}).apply(typeof gh<"u"?gh:typeof self<"u"?self:typeof window<"u"?window:{});const h_="@firebase/firestore",f_="4.9.0";/**
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
 */class en{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
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
 */let xo="12.0.0";/**
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
 */const Ja=new $m("@firebase/firestore");function eo(){return Ja.logLevel}function pe(i,...e){if(Ja.logLevel<=Ve.DEBUG){const n=e.map(sg);Ja.debug(`Firestore (${xo}): ${i}`,...n)}}function ii(i,...e){if(Ja.logLevel<=Ve.ERROR){const n=e.map(sg);Ja.error(`Firestore (${xo}): ${i}`,...n)}}function fo(i,...e){if(Ja.logLevel<=Ve.WARN){const n=e.map(sg);Ja.warn(`Firestore (${xo}): ${i}`,...n)}}function sg(i){if(typeof i=="string")return i;try{/**
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
*/return(function(n){return JSON.stringify(n)})(i)}catch{return i}}/**
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
 */function Se(i,e,n){let a="Unexpected state";typeof e=="string"?a=e:n=e,Mb(i,a,n)}function Mb(i,e,n){let a=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{a+=" CONTEXT: "+JSON.stringify(n)}catch{a+=" CONTEXT: "+n}throw ii(a),new Error(a)}function Ye(i,e,n,a){let o="Unexpected state";typeof n=="string"?o=n:a=n,i||Mb(e,o,a)}function Ce(i,e){return i}/**
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
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends li{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xi{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class Vb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class u3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(en.UNAUTHENTICATED)))}shutdown(){}}class h3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class f3{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ye(this.o===void 0,42304);let a=this.i;const o=m=>this.i!==a?(a=this.i,n(m)):Promise.resolve();let c=new Xi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Xi,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const m=c;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Xi)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((a=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Ye(typeof a.accessToken=="string",31837,{l:a}),new Vb(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class d3{constructor(e,n,a){this.P=e,this.T=n,this.I=a,this.type="FirstParty",this.user=en.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class p3{constructor(e,n,a){this.P=e,this.T=n,this.I=a}getToken(){return Promise.resolve(new d3(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(en.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class d_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m3{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ye(this.o===void 0,3512);const a=c=>{c.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,pe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>a(c)))};const o=c=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new d_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new d_(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function g3(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let a=0;a<i;a++)n[a]=Math.floor(256*Math.random());return n}/**
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
 */class og{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=g3(40);for(let c=0;c<o.length;++c)a.length<20&&o[c]<n&&(a+=e.charAt(o[c]%62))}return a}}function je(i,e){return i<e?-1:i>e?1:0}function _m(i,e){const n=Math.min(i.length,e.length);for(let a=0;a<n;a++){const o=i.charAt(a),c=e.charAt(a);if(o!==c)return nm(o)===nm(c)?je(o,c):nm(o)?1:-1}return je(i.length,e.length)}const y3=55296,v3=57343;function nm(i){const e=i.charCodeAt(0);return e>=y3&&e<=v3}function po(i,e,n){return i.length===e.length&&i.every(((a,o)=>n(a,e[o])))}/**
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
 */const p_="__name__";class gr{constructor(e,n,a){n===void 0?n=0:n>e.length&&Se(637,{offset:n,range:e.length}),a===void 0?a=e.length-n:a>e.length-n&&Se(1746,{length:a,range:e.length-n}),this.segments=e,this.offset=n,this.len=a}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach((a=>{n.push(a)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,a=this.limit();n<a;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const a=Math.min(e.length,n.length);for(let o=0;o<a;o++){const c=gr.compareSegments(e.get(o),n.get(o));if(c!==0)return c}return je(e.length,n.length)}static compareSegments(e,n){const a=gr.isNumericId(e),o=gr.isNumericId(n);return a&&!o?-1:!a&&o?1:a&&o?gr.extractNumericId(e).compare(gr.extractNumericId(n)):_m(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $i.fromString(e.substring(4,e.length-2))}}class at extends gr{construct(e,n,a){return new at(e,n,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const a of e){if(a.indexOf("//")>=0)throw new de(ie.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);n.push(...a.split("/").filter((o=>o.length>0)))}return new at(n)}static emptyPath(){return new at([])}}const _3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends gr{construct(e,n,a){return new Qt(e,n,a)}static isValidIdentifier(e){return _3.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===p_}static keyField(){return new Qt([p_])}static fromServerFormat(e){const n=[];let a="",o=0;const c=()=>{if(a.length===0)throw new de(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(a),a=""};let f=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new de(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new de(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=m,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(a+=p,o++):(c(),o++)}if(c(),f)throw new de(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
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
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(at.fromString(e))}static fromName(e){return new ve(at.fromString(e).popFirst(5))}static empty(){return new ve(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&at.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return at.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new at(e.slice()))}}/**
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
 */function jb(i,e,n){if(!n)throw new de(ie.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function b3(i,e,n,a){if(e===!0&&a===!0)throw new de(ie.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function m_(i){if(!ve.isDocumentKey(i))throw new de(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function g_(i){if(ve.isDocumentKey(i))throw new de(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Lb(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function gf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(a){return a.constructor?a.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Se(12329,{type:typeof i})}function Kn(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new de(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gf(i);throw new de(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
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
 */function Rt(i,e){const n={typeString:i};return e&&(n.value=e),n}function Sc(i,e){if(!Lb(i))throw new de(ie.INVALID_ARGUMENT,"JSON must be an object");let n;for(const a in e)if(e[a]){const o=e[a].typeString,c="value"in e[a]?{value:e[a].value}:void 0;if(!(a in i)){n=`JSON missing required field: '${a}'`;break}const f=i[a];if(o&&typeof f!==o){n=`JSON field '${a}' must be a ${o}.`;break}if(c!==void 0&&f!==c.value){n=`Expected '${a}' field to equal '${c.value}'`;break}}if(n)throw new de(ie.INVALID_ARGUMENT,n);return!0}/**
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
 */const y_=-62135596800,v_=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),a=Math.floor((e-1e3*n)*v_);return new et(n,a)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<y_)throw new de(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/v_}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sc(e,et._jsonSchema))return new et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-y_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:Rt("string",et._jsonSchemaVersion),seconds:Rt("number"),nanoseconds:Rt("number")};/**
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
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new et(0,0))}static max(){return new Ae(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ic=-1;function E3(i,e){const n=i.toTimestamp().seconds,a=i.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(a===1e9?new et(n+1,0):new et(n,a));return new Zi(o,ve.empty(),e)}function T3(i){return new Zi(i.readTime,i.key,ic)}class Zi{constructor(e,n,a){this.readTime=e,this.documentKey=n,this.largestBatchId=a}static min(){return new Zi(Ae.min(),ve.empty(),ic)}static max(){return new Zi(Ae.max(),ve.empty(),ic)}}function w3(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=ve.comparator(i.documentKey,e.documentKey),n!==0?n:je(i.largestBatchId,e.largestBatchId))}/**
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
 */const S3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class x3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ao(i){if(i.code!==ie.FAILED_PRECONDITION||i.message!==S3)throw i;pe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class se{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new se(((a,o)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(a,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(a,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof se?n:se.resolve(n)}catch(n){return se.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):se.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):se.reject(n)}static resolve(e){return new se(((n,a)=>{n(e)}))}static reject(e){return new se(((n,a)=>{a(e)}))}static waitFor(e){return new se(((n,a)=>{let o=0,c=0,f=!1;e.forEach((p=>{++o,p.next((()=>{++c,f&&c===o&&n()}),(m=>a(m)))})),f=!0,c===o&&n()}))}static or(e){let n=se.resolve(!1);for(const a of e)n=n.next((o=>o?se.resolve(o):a()));return n}static forEach(e,n){const a=[];return e.forEach(((o,c)=>{a.push(n.call(this,o,c))})),this.waitFor(a)}static mapArray(e,n){return new se(((a,o)=>{const c=e.length,f=new Array(c);let p=0;for(let m=0;m<c;m++){const g=m;n(e[g]).next((_=>{f[g]=_,++p,p===c&&a(f)}),(_=>o(_)))}}))}static doWhile(e,n){return new se(((a,o)=>{const c=()=>{e()===!0?n().next((()=>{c()}),o):a()};c()}))}}function A3(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ro(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class yf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>n.writeSequenceNumber(a))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}yf.ce=-1;/**
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
 */const lg=-1;function vf(i){return i==null}function Kh(i){return i===0&&1/i==-1/0}function R3(i){return typeof i=="number"&&Number.isInteger(i)&&!Kh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ub="";function I3(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=__(e)),e=C3(i.get(n),e);return __(e)}function C3(i,e){let n=e;const a=i.length;for(let o=0;o<a;o++){const c=i.charAt(o);switch(c){case"\0":n+="";break;case Ub:n+="";break;default:n+=c}}return n}function __(i){return i+Ub+""}/**
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
 */function b_(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function sa(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function zb(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class ht{constructor(e,n){this.comparator=e,this.root=n||Yt.EMPTY}insert(e,n){return new ht(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const a=this.comparator(e,n.key);if(a===0)return n.value;a<0?n=n.left:a>0&&(n=n.right)}return null}indexOf(e){let n=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(e,a.key);if(o===0)return n+a.left.size;o<0?a=a.left:(n+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,a)=>(e(n,a),!1)))}toString(){const e=[];return this.inorderTraversal(((n,a)=>(e.push(`${n}:${a}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yh(this.root,e,this.comparator,!1)}getReverseIterator(){return new yh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yh(this.root,e,this.comparator,!0)}}class yh{constructor(e,n,a,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?a(e.key,n):1,n&&o&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yt{constructor(e,n,a,o,c){this.key=e,this.value=n,this.color=a??Yt.RED,this.left=o??Yt.EMPTY,this.right=c??Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,a,o,c){return new Yt(e??this.key,n??this.value,a??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,a){let o=this;const c=a(e,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(e,n,a),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let a,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Yt.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1;Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,n,a,o,c){return this}insert(e,n,a){return new Yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,a)=>(e(n),!1)))}forEachInRange(e,n){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let a;for(a=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new E_(this.data.getIterator())}getIteratorFrom(e){return new E_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((a=>{n=n.add(a)})),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),a=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=a.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class E_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Sn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new Sn([])}unionWith(e){let n=new Pt(Qt.comparator);for(const a of this.fields)n=n.add(a);for(const a of e)n=n.add(a);return new Sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,((n,a)=>n.isEqual(a)))}}/**
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
 */class Bb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Bb("Invalid base64 string: "+c):c}})(e);return new Kt(n)}static fromUint8Array(e){const n=(function(o){let c="";for(let f=0;f<o.length;++f)c+=String.fromCharCode(o[f]);return c})(e);return new Kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const a=new Uint8Array(n.length);for(let o=0;o<n.length;o++)a[o]=n.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const N3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ji(i){if(Ye(!!i,39018),typeof i=="string"){let e=0;const n=N3.exec(i);if(Ye(!!n,46558,{timestamp:i}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const a=new Date(i);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:bt(i.seconds),nanos:bt(i.nanos)}}function bt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ea(i){return typeof i=="string"?Kt.fromBase64String(i):Kt.fromUint8Array(i)}/**
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
 */const Hb="server_timestamp",qb="__type__",Fb="__previous_value__",Gb="__local_write_time__";function cg(i){return(i?.mapValue?.fields||{})[qb]?.stringValue===Hb}function _f(i){const e=i.mapValue.fields[Fb];return cg(e)?_f(e):e}function ac(i){const e=Ji(i.mapValue.fields[Gb].timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class D3{constructor(e,n,a,o,c,f,p,m,g,_){this.databaseId=e,this.appId=n,this.persistenceKey=a,this.host=o,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=_}}const $h="(default)";class sc{constructor(e,n){this.projectId=e,this.database=n||$h}static empty(){return new sc("","")}get isDefaultDatabase(){return this.database===$h}isEqual(e){return e instanceof sc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Yb="__type__",O3="__max__",vh={mapValue:{}},Qb="__vector__",Xh="value";function ta(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?cg(i)?4:k3(i)?9007199254740991:P3(i)?10:11:Se(28295,{value:i})}function wr(i,e){if(i===e)return!0;const n=ta(i);if(n!==ta(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return ac(i).isEqual(ac(e));case 3:return(function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const f=Ji(o.timestampValue),p=Ji(c.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,c){return ea(o.bytesValue).isEqual(ea(c.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,c){return bt(o.geoPointValue.latitude)===bt(c.geoPointValue.latitude)&&bt(o.geoPointValue.longitude)===bt(c.geoPointValue.longitude)})(i,e);case 2:return(function(o,c){if("integerValue"in o&&"integerValue"in c)return bt(o.integerValue)===bt(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const f=bt(o.doubleValue),p=bt(c.doubleValue);return f===p?Kh(f)===Kh(p):isNaN(f)&&isNaN(p)}return!1})(i,e);case 9:return po(i.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:case 11:return(function(o,c){const f=o.mapValue.fields||{},p=c.mapValue.fields||{};if(b_(f)!==b_(p))return!1;for(const m in f)if(f.hasOwnProperty(m)&&(p[m]===void 0||!wr(f[m],p[m])))return!1;return!0})(i,e);default:return Se(52216,{left:i})}}function oc(i,e){return(i.values||[]).find((n=>wr(n,e)))!==void 0}function mo(i,e){if(i===e)return 0;const n=ta(i),a=ta(e);if(n!==a)return je(n,a);switch(n){case 0:case 9007199254740991:return 0;case 1:return je(i.booleanValue,e.booleanValue);case 2:return(function(c,f){const p=bt(c.integerValue||c.doubleValue),m=bt(f.integerValue||f.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(i,e);case 3:return T_(i.timestampValue,e.timestampValue);case 4:return T_(ac(i),ac(e));case 5:return _m(i.stringValue,e.stringValue);case 6:return(function(c,f){const p=ea(c),m=ea(f);return p.compareTo(m)})(i.bytesValue,e.bytesValue);case 7:return(function(c,f){const p=c.split("/"),m=f.split("/");for(let g=0;g<p.length&&g<m.length;g++){const _=je(p[g],m[g]);if(_!==0)return _}return je(p.length,m.length)})(i.referenceValue,e.referenceValue);case 8:return(function(c,f){const p=je(bt(c.latitude),bt(f.latitude));return p!==0?p:je(bt(c.longitude),bt(f.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return w_(i.arrayValue,e.arrayValue);case 10:return(function(c,f){const p=c.fields||{},m=f.fields||{},g=p[Xh]?.arrayValue,_=m[Xh]?.arrayValue,T=je(g?.values?.length||0,_?.values?.length||0);return T!==0?T:w_(g,_)})(i.mapValue,e.mapValue);case 11:return(function(c,f){if(c===vh.mapValue&&f===vh.mapValue)return 0;if(c===vh.mapValue)return 1;if(f===vh.mapValue)return-1;const p=c.fields||{},m=Object.keys(p),g=f.fields||{},_=Object.keys(g);m.sort(),_.sort();for(let T=0;T<m.length&&T<_.length;++T){const w=_m(m[T],_[T]);if(w!==0)return w;const x=mo(p[m[T]],g[_[T]]);if(x!==0)return x}return je(m.length,_.length)})(i.mapValue,e.mapValue);default:throw Se(23264,{he:n})}}function T_(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return je(i,e);const n=Ji(i),a=Ji(e),o=je(n.seconds,a.seconds);return o!==0?o:je(n.nanos,a.nanos)}function w_(i,e){const n=i.values||[],a=e.values||[];for(let o=0;o<n.length&&o<a.length;++o){const c=mo(n[o],a[o]);if(c)return c}return je(n.length,a.length)}function go(i){return bm(i)}function bm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(n){const a=Ji(n);return`time(${a.seconds},${a.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(n){return ea(n).toBase64()})(i.bytesValue):"referenceValue"in i?(function(n){return ve.fromName(n).toString()})(i.referenceValue):"geoPointValue"in i?(function(n){return`geo(${n.latitude},${n.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(n){let a="[",o=!0;for(const c of n.values||[])o?o=!1:a+=",",a+=bm(c);return a+"]"})(i.arrayValue):"mapValue"in i?(function(n){const a=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const f of a)c?c=!1:o+=",",o+=`${f}:${bm(n.fields[f])}`;return o+"}"})(i.mapValue):Se(61005,{value:i})}function Ch(i){switch(ta(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_f(i);return e?16+Ch(e):16;case 5:return 2*i.stringValue.length;case 6:return ea(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,c)=>o+Ch(c)),0)})(i.arrayValue);case 10:case 11:return(function(a){let o=0;return sa(a.fields,((c,f)=>{o+=c.length+Ch(f)})),o})(i.mapValue);default:throw Se(13486,{value:i})}}function S_(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Em(i){return!!i&&"integerValue"in i}function ug(i){return!!i&&"arrayValue"in i}function x_(i){return!!i&&"nullValue"in i}function A_(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Nh(i){return!!i&&"mapValue"in i}function P3(i){return(i?.mapValue?.fields||{})[Yb]?.stringValue===Qb}function Xl(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return sa(i.mapValue.fields,((n,a)=>e.mapValue.fields[n]=Xl(a))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xl(i.arrayValue.values[n]);return e}return{...i}}function k3(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===O3}/**
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
 */class pn{constructor(e){this.value=e}static empty(){return new pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let a=0;a<e.length-1;++a)if(n=(n.mapValue.fields||{})[e.get(a)],!Nh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xl(n)}setAll(e){let n=Qt.emptyPath(),a={},o=[];e.forEach(((f,p)=>{if(!n.isImmediateParentOf(p)){const m=this.getFieldsMap(n);this.applyChanges(m,a,o),a={},o=[],n=p.popLast()}f?a[p.lastSegment()]=Xl(f):o.push(p.lastSegment())}));const c=this.getFieldsMap(n);this.applyChanges(c,a,o)}delete(e){const n=this.field(e.popLast());Nh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let a=0;a<e.length;++a){let o=n.mapValue.fields[e.get(a)];Nh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(a)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,a){sa(n,((o,c)=>e[o]=c));for(const o of a)delete e[o]}clone(){return new pn(Xl(this.value))}}function Kb(i){const e=[];return sa(i.fields,((n,a)=>{const o=new Qt([n]);if(Nh(a)){const c=Kb(a.mapValue).fields;if(c.length===0)e.push(o);else for(const f of c)e.push(o.child(f))}else e.push(o)})),new Sn(e)}/**
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
 */class tn{constructor(e,n,a,o,c,f,p){this.key=e,this.documentType=n,this.version=a,this.readTime=o,this.createTime=c,this.data=f,this.documentState=p}static newInvalidDocument(e){return new tn(e,0,Ae.min(),Ae.min(),Ae.min(),pn.empty(),0)}static newFoundDocument(e,n,a,o){return new tn(e,1,n,Ae.min(),a,o,0)}static newNoDocument(e,n){return new tn(e,2,n,Ae.min(),Ae.min(),pn.empty(),0)}static newUnknownDocument(e,n){return new tn(e,3,n,Ae.min(),Ae.min(),pn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wh{constructor(e,n){this.position=e,this.inclusive=n}}function R_(i,e,n){let a=0;for(let o=0;o<i.position.length;o++){const c=e[o],f=i.position[o];if(c.field.isKeyField()?a=ve.comparator(ve.fromName(f.referenceValue),n.key):a=mo(f,n.data.field(c.field)),c.dir==="desc"&&(a*=-1),a!==0)break}return a}function I_(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!wr(i.position[n],e.position[n]))return!1;return!0}/**
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
 */class lc{constructor(e,n="asc"){this.field=e,this.dir=n}}function M3(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class $b{}class At extends $b{constructor(e,n,a){super(),this.field=e,this.op=n,this.value=a}static create(e,n,a){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,a):new j3(e,n,a):n==="array-contains"?new z3(e,a):n==="in"?new B3(e,a):n==="not-in"?new H3(e,a):n==="array-contains-any"?new q3(e,a):new At(e,n,a)}static createKeyFieldInFilter(e,n,a){return n==="in"?new L3(e,a):new U3(e,a)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(mo(n,this.value)):n!==null&&ta(this.value)===ta(n)&&this.matchesComparison(mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends $b{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Zn(e,n)}matches(e){return Xb(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xb(i){return i.op==="and"}function Wb(i){return V3(i)&&Xb(i)}function V3(i){for(const e of i.filters)if(e instanceof Zn)return!1;return!0}function Tm(i){if(i instanceof At)return i.field.canonicalString()+i.op.toString()+go(i.value);if(Wb(i))return i.filters.map((e=>Tm(e))).join(",");{const e=i.filters.map((n=>Tm(n))).join(",");return`${i.op}(${e})`}}function Zb(i,e){return i instanceof At?(function(a,o){return o instanceof At&&a.op===o.op&&a.field.isEqual(o.field)&&wr(a.value,o.value)})(i,e):i instanceof Zn?(function(a,o){return o instanceof Zn&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((c,f,p)=>c&&Zb(f,o.filters[p])),!0):!1})(i,e):void Se(19439)}function Jb(i){return i instanceof At?(function(n){return`${n.field.canonicalString()} ${n.op} ${go(n.value)}`})(i):i instanceof Zn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Jb).join(" ,")+"}"})(i):"Filter"}class j3 extends At{constructor(e,n,a){super(e,n,a),this.key=ve.fromName(a.referenceValue)}matches(e){const n=ve.comparator(e.key,this.key);return this.matchesComparison(n)}}class L3 extends At{constructor(e,n){super(e,"in",n),this.keys=eE("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class U3 extends At{constructor(e,n){super(e,"not-in",n),this.keys=eE("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function eE(i,e){return(e.arrayValue?.values||[]).map((n=>ve.fromName(n.referenceValue)))}class z3 extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ug(n)&&oc(n.arrayValue,this.value)}}class B3 extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oc(this.value.arrayValue,n)}}class H3 extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(oc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!oc(this.value.arrayValue,n)}}class q3 extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ug(n)||!n.arrayValue.values)&&n.arrayValue.values.some((a=>oc(this.value.arrayValue,a)))}}/**
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
 */class F3{constructor(e,n=null,a=[],o=[],c=null,f=null,p=null){this.path=e,this.collectionGroup=n,this.orderBy=a,this.filters=o,this.limit=c,this.startAt=f,this.endAt=p,this.Te=null}}function C_(i,e=null,n=[],a=[],o=null,c=null,f=null){return new F3(i,e,n,a,o,c,f)}function hg(i){const e=Ce(i);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((a=>Tm(a))).join(","),n+="|ob:",n+=e.orderBy.map((a=>(function(c){return c.field.canonicalString()+c.dir})(a))).join(","),vf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((a=>go(a))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((a=>go(a))).join(",")),e.Te=n}return e.Te}function fg(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!M3(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!Zb(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!I_(i.startAt,e.startAt)&&I_(i.endAt,e.endAt)}function wm(i){return ve.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Io{constructor(e,n=null,a=[],o=[],c=null,f="F",p=null,m=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=a,this.filters=o,this.limit=c,this.limitType=f,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function G3(i,e,n,a,o,c,f,p){return new Io(i,e,n,a,o,c,f,p)}function bf(i){return new Io(i)}function N_(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function tE(i){return i.collectionGroup!==null}function Wl(i){const e=Ce(i);if(e.Ie===null){e.Ie=[];const n=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),n.add(c.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Pt(Qt.comparator);return f.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(p=p.add(g.field))}))})),p})(e).forEach((c=>{n.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new lc(c,a))})),n.has(Qt.keyField().canonicalString())||e.Ie.push(new lc(Qt.keyField(),a))}return e.Ie}function _r(i){const e=Ce(i);return e.Ee||(e.Ee=Y3(e,Wl(i))),e.Ee}function Y3(i,e){if(i.limitType==="F")return C_(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const c=o.dir==="desc"?"asc":"desc";return new lc(o.field,c)}));const n=i.endAt?new Wh(i.endAt.position,i.endAt.inclusive):null,a=i.startAt?new Wh(i.startAt.position,i.startAt.inclusive):null;return C_(i.path,i.collectionGroup,e,i.filters,i.limit,n,a)}}function Sm(i,e){const n=i.filters.concat([e]);return new Io(i.path,i.collectionGroup,i.explicitOrderBy.slice(),n,i.limit,i.limitType,i.startAt,i.endAt)}function xm(i,e,n){return new Io(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function Ef(i,e){return fg(_r(i),_r(e))&&i.limitType===e.limitType}function nE(i){return`${hg(_r(i))}|lt:${i.limitType}`}function to(i){return`Query(target=${(function(n){let a=n.path.canonicalString();return n.collectionGroup!==null&&(a+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(a+=`, filters: [${n.filters.map((o=>Jb(o))).join(", ")}]`),vf(n.limit)||(a+=", limit: "+n.limit),n.orderBy.length>0&&(a+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(a+=", startAt: ",a+=n.startAt.inclusive?"b:":"a:",a+=n.startAt.position.map((o=>go(o))).join(",")),n.endAt&&(a+=", endAt: ",a+=n.endAt.inclusive?"a:":"b:",a+=n.endAt.position.map((o=>go(o))).join(",")),`Target(${a})`})(_r(i))}; limitType=${i.limitType})`}function Tf(i,e){return e.isFoundDocument()&&(function(a,o){const c=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):ve.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)})(i,e)&&(function(a,o){for(const c of Wl(a))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0})(i,e)&&(function(a,o){for(const c of a.filters)if(!c.matches(o))return!1;return!0})(i,e)&&(function(a,o){return!(a.startAt&&!(function(f,p,m){const g=R_(f,p,m);return f.inclusive?g<=0:g<0})(a.startAt,Wl(a),o)||a.endAt&&!(function(f,p,m){const g=R_(f,p,m);return f.inclusive?g>=0:g>0})(a.endAt,Wl(a),o))})(i,e)}function Q3(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function rE(i){return(e,n)=>{let a=!1;for(const o of Wl(i)){const c=K3(o,e,n);if(c!==0)return c;a=a||o.field.isKeyField()}return 0}}function K3(i,e,n){const a=i.field.isKeyField()?ve.comparator(e.key,n.key):(function(c,f,p){const m=f.data.field(c),g=p.data.field(c);return m!==null&&g!==null?mo(m,g):Se(42886)})(i.field,e,n);switch(i.dir){case"asc":return a;case"desc":return-1*a;default:return Se(19790,{direction:i.dir})}}/**
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
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),a=this.inner[n];if(a!==void 0){for(const[o,c]of a)if(this.equalsFn(o,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const a=this.mapKeyFn(e),o=this.inner[a];if(o===void 0)return this.inner[a]=[[e,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],e))return void(o[c]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),a=this.inner[n];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return a.length===1?delete this.inner[n]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(e){sa(this.inner,((n,a)=>{for(const[o,c]of a)e(o,c)}))}isEmpty(){return zb(this.inner)}size(){return this.innerSize}}/**
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
 */const $3=new ht(ve.comparator);function ai(){return $3}const iE=new ht(ve.comparator);function Gl(...i){let e=iE;for(const n of i)e=e.insert(n.key,n);return e}function aE(i){let e=iE;return i.forEach(((n,a)=>e=e.insert(n,a.overlayedDocument))),e}function Ya(){return Zl()}function sE(){return Zl()}function Zl(){return new as((i=>i.toString()),((i,e)=>i.isEqual(e)))}const X3=new ht(ve.comparator),W3=new Pt(ve.comparator);function Le(...i){let e=W3;for(const n of i)e=e.add(n);return e}const Z3=new Pt(je);function J3(){return Z3}/**
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
 */function dg(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kh(e)?"-0":e}}function oE(i){return{integerValue:""+i}}function e5(i,e){return R3(e)?oE(e):dg(i,e)}/**
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
 */class wf{constructor(){this._=void 0}}function t5(i,e,n){return i instanceof cc?(function(o,c){const f={fields:{[qb]:{stringValue:Hb},[Gb]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&cg(c)&&(c=_f(c)),c&&(f.fields[Fb]=c),{mapValue:f}})(n,e):i instanceof uc?cE(i,e):i instanceof hc?uE(i,e):(function(o,c){const f=lE(o,c),p=D_(f)+D_(o.Ae);return Em(f)&&Em(o.Ae)?oE(p):dg(o.serializer,p)})(i,e)}function n5(i,e,n){return i instanceof uc?cE(i,e):i instanceof hc?uE(i,e):n}function lE(i,e){return i instanceof Zh?(function(a){return Em(a)||(function(c){return!!c&&"doubleValue"in c})(a)})(e)?e:{integerValue:0}:null}class cc extends wf{}class uc extends wf{constructor(e){super(),this.elements=e}}function cE(i,e){const n=hE(e);for(const a of i.elements)n.some((o=>wr(o,a)))||n.push(a);return{arrayValue:{values:n}}}class hc extends wf{constructor(e){super(),this.elements=e}}function uE(i,e){let n=hE(e);for(const a of i.elements)n=n.filter((o=>!wr(o,a)));return{arrayValue:{values:n}}}class Zh extends wf{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function D_(i){return bt(i.integerValue||i.doubleValue)}function hE(i){return ug(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class r5{constructor(e,n){this.field=e,this.transform=n}}function i5(i,e){return i.field.isEqual(e.field)&&(function(a,o){return a instanceof uc&&o instanceof uc||a instanceof hc&&o instanceof hc?po(a.elements,o.elements,wr):a instanceof Zh&&o instanceof Zh?wr(a.Ae,o.Ae):a instanceof cc&&o instanceof cc})(i.transform,e.transform)}class a5{constructor(e,n){this.version=e,this.transformResults=n}}class $n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Sf{}function fE(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new pE(i.key,$n.none()):new xc(i.key,i.data,$n.none());{const n=i.data,a=pn.empty();let o=new Pt(Qt.comparator);for(let c of e.fields)if(!o.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?a.delete(c):a.set(c,f),o=o.add(c)}return new oa(i.key,a,new Sn(o.toArray()),$n.none())}}function s5(i,e,n){i instanceof xc?(function(o,c,f){const p=o.value.clone(),m=P_(o.fieldTransforms,c,f.transformResults);p.setAll(m),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(i,e,n):i instanceof oa?(function(o,c,f){if(!Dh(o.precondition,c))return void c.convertToUnknownDocument(f.version);const p=P_(o.fieldTransforms,c,f.transformResults),m=c.data;m.setAll(dE(o)),m.setAll(p),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(i,e,n):(function(o,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function Jl(i,e,n,a){return i instanceof xc?(function(c,f,p,m){if(!Dh(c.precondition,f))return p;const g=c.value.clone(),_=k_(c.fieldTransforms,m,f);return g.setAll(_),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null})(i,e,n,a):i instanceof oa?(function(c,f,p,m){if(!Dh(c.precondition,f))return p;const g=k_(c.fieldTransforms,m,f),_=f.data;return _.setAll(dE(c)),_.setAll(g),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((T=>T.field)))})(i,e,n,a):(function(c,f,p){return Dh(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p})(i,e,n)}function o5(i,e){let n=null;for(const a of i.fieldTransforms){const o=e.data.field(a.field),c=lE(a.transform,o||null);c!=null&&(n===null&&(n=pn.empty()),n.set(a.field,c))}return n||null}function O_(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&po(a,o,((c,f)=>i5(c,f)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class xc extends Sf{constructor(e,n,a,o=[]){super(),this.key=e,this.value=n,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class oa extends Sf{constructor(e,n,a,o,c=[]){super(),this.key=e,this.data=n,this.fieldMask=a,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function dE(i){const e=new Map;return i.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const a=i.data.field(n);e.set(n,a)}})),e}function P_(i,e,n){const a=new Map;Ye(i.length===n.length,32656,{Re:n.length,Ve:i.length});for(let o=0;o<n.length;o++){const c=i[o],f=c.transform,p=e.data.field(c.field);a.set(c.field,n5(f,p,n[o]))}return a}function k_(i,e,n){const a=new Map;for(const o of i){const c=o.transform,f=n.data.field(o.field);a.set(o.field,t5(c,f,e))}return a}class pE extends Sf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class l5 extends Sf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class c5{constructor(e,n,a,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(e,n){const a=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(e.key)&&s5(c,e,a[o])}}applyToLocalView(e,n){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(n=Jl(a,e,n,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(n=Jl(a,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const a=sE();return this.mutations.forEach((o=>{const c=e.get(o.key),f=c.overlayedDocument;let p=this.applyToLocalView(f,c.mutatedFields);p=n.has(o.key)?null:p;const m=fE(f,p);m!==null&&a.set(o.key,m),f.isValidDocument()||f.convertToNoDocument(Ae.min())})),a}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Le())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,((n,a)=>O_(n,a)))&&po(this.baseMutations,e.baseMutations,((n,a)=>O_(n,a)))}}class pg{constructor(e,n,a,o){this.batch=e,this.commitVersion=n,this.mutationResults=a,this.docVersions=o}static from(e,n,a){Ye(e.mutations.length===a.length,58842,{me:e.mutations.length,fe:a.length});let o=(function(){return X3})();const c=e.mutations;for(let f=0;f<c.length;f++)o=o.insert(c[f].key,a[f].version);return new pg(e,n,a,o)}}/**
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
 */class u5{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class h5{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var xt,He;function f5(i){switch(i){case ie.OK:return Se(64938);case ie.CANCELLED:case ie.UNKNOWN:case ie.DEADLINE_EXCEEDED:case ie.RESOURCE_EXHAUSTED:case ie.INTERNAL:case ie.UNAVAILABLE:case ie.UNAUTHENTICATED:return!1;case ie.INVALID_ARGUMENT:case ie.NOT_FOUND:case ie.ALREADY_EXISTS:case ie.PERMISSION_DENIED:case ie.FAILED_PRECONDITION:case ie.ABORTED:case ie.OUT_OF_RANGE:case ie.UNIMPLEMENTED:case ie.DATA_LOSS:return!0;default:return Se(15467,{code:i})}}function mE(i){if(i===void 0)return ii("GRPC error has no .code"),ie.UNKNOWN;switch(i){case xt.OK:return ie.OK;case xt.CANCELLED:return ie.CANCELLED;case xt.UNKNOWN:return ie.UNKNOWN;case xt.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case xt.INTERNAL:return ie.INTERNAL;case xt.UNAVAILABLE:return ie.UNAVAILABLE;case xt.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case xt.NOT_FOUND:return ie.NOT_FOUND;case xt.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case xt.ABORTED:return ie.ABORTED;case xt.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case xt.DATA_LOSS:return ie.DATA_LOSS;default:return Se(39323,{code:i})}}(He=xt||(xt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function d5(){return new TextEncoder}/**
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
 */const p5=new $i([4294967295,4294967295],0);function M_(i){const e=d5().encode(i),n=new Cb;return n.update(e),new Uint8Array(n.digest())}function V_(i){const e=new DataView(i.buffer),n=e.getUint32(0,!0),a=e.getUint32(4,!0),o=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new $i([n,a],0),new $i([o,c],0)]}class mg{constructor(e,n,a){if(this.bitmap=e,this.padding=n,this.hashCount=a,n<0||n>=8)throw new Yl(`Invalid padding: ${n}`);if(a<0)throw new Yl(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new Yl(`Invalid hash count: ${a}`);if(e.length===0&&n!==0)throw new Yl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=$i.fromNumber(this.ge)}ye(e,n,a){let o=e.add(n.multiply($i.fromNumber(a)));return o.compare(p5)===1&&(o=new $i([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=M_(e),[a,o]=V_(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(a,o,c);if(!this.we(f))return!1}return!0}static create(e,n,a){const o=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),f=new mg(c,o,n);return a.forEach((p=>f.insert(p))),f}insert(e){if(this.ge===0)return;const n=M_(e),[a,o]=V_(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(a,o,c);this.Se(f)}}Se(e){const n=Math.floor(e/8),a=e%8;this.bitmap[n]|=1<<a}}class Yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xf{constructor(e,n,a,o,c){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,n,a){const o=new Map;return o.set(e,Ac.createSynthesizedTargetChangeForCurrentChange(e,n,a)),new xf(Ae.min(),o,new ht(je),ai(),Le())}}class Ac{constructor(e,n,a,o,c){this.resumeToken=e,this.current=n,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,n,a){return new Ac(a,n,Le(),Le(),Le())}}/**
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
 */class Oh{constructor(e,n,a,o){this.be=e,this.removedTargetIds=n,this.key=a,this.De=o}}class gE{constructor(e,n){this.targetId=e,this.Ce=n}}class yE{constructor(e,n,a=Kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=a,this.cause=o}}class j_{constructor(){this.ve=0,this.Fe=L_(),this.Me=Kt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),n=Le(),a=Le();return this.Fe.forEach(((o,c)=>{switch(c){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:a=a.add(o);break;default:Se(38017,{changeType:c})}})),new Ac(this.Me,this.xe,e,n,a)}qe(){this.Oe=!1,this.Fe=L_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class m5{constructor(e){this.Ge=e,this.ze=new Map,this.je=ai(),this.Je=_h(),this.He=_h(),this.Ye=new ht(je)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const a=this.nt(n);switch(e.state){case 0:this.rt(n)&&a.Le(e.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(e.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(a.We(),a.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),a.Le(e.resumeToken));break;default:Se(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((a,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,a=e.Ce.count,o=this.ot(n);if(o){const c=o.target;if(wm(c))if(a===0){const f=new ve(c.path);this.et(n,f,tn.newNoDocument(f,Ae.min()))}else Ye(a===1,20013,{expectedCount:a});else{const f=this._t(n);if(f!==a){const p=this.ut(e),m=p?this.ct(p,e,f):1;if(m!==0){this.it(n);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:c=0}=n;let f,p;try{f=ea(a).toUint8Array()}catch(m){if(m instanceof Bb)return fo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new mg(f,o,c)}catch(m){return fo(m instanceof Yl?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,n,a){return n.Ce.count===a-this.Pt(e,n.targetId)?0:2}Pt(e,n){const a=this.Ge.getRemoteKeysForTarget(n);let o=0;return a.forEach((c=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;e.mightContain(p)||(this.et(n,c,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((c,f)=>{const p=this.ot(f);if(p){if(c.current&&wm(p.target)){const m=new ve(p.target.path);this.It(m).has(f)||this.Et(f,m)||this.et(f,m,tn.newNoDocument(m,e))}c.Be&&(n.set(f,c.ke()),c.qe())}}));let a=Le();this.He.forEach(((c,f)=>{let p=!0;f.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(a=a.add(c))})),this.je.forEach(((c,f)=>f.setReadTime(e)));const o=new xf(e,n,this.Ye,this.je,a);return this.je=ai(),this.Je=_h(),this.He=_h(),this.Ye=new ht(je),o}Xe(e,n){if(!this.rt(e))return;const a=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,a),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,a){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),a&&(this.je=this.je.insert(n,a))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new j_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Pt(je),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Pt(je),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||pe("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new j_),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function _h(){return new ht(ve.comparator)}function L_(){return new ht(ve.comparator)}const g5={asc:"ASCENDING",desc:"DESCENDING"},y5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},v5={and:"AND",or:"OR"};class _5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Am(i,e){return i.useProto3Json||vf(e)?e:{value:e}}function Jh(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vE(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function b5(i,e){return Jh(i,e.toTimestamp())}function br(i){return Ye(!!i,49232),Ae.fromTimestamp((function(n){const a=Ji(n);return new et(a.seconds,a.nanos)})(i))}function gg(i,e){return Rm(i,e).canonicalString()}function Rm(i,e){const n=(function(o){return new at(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?n:n.child(e)}function _E(i){const e=at.fromString(i);return Ye(SE(e),10190,{key:e.toString()}),e}function Im(i,e){return gg(i.databaseId,e.path)}function rm(i,e){const n=_E(e);if(n.get(1)!==i.databaseId.projectId)throw new de(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+i.databaseId.projectId);if(n.get(3)!==i.databaseId.database)throw new de(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+i.databaseId.database);return new ve(EE(n))}function bE(i,e){return gg(i.databaseId,e)}function E5(i){const e=_E(i);return e.length===4?at.emptyPath():EE(e)}function Cm(i){return new at(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function EE(i){return Ye(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function U_(i,e,n){return{name:Im(i,e),fields:n.value.mapValue.fields}}function T5(i,e){let n;if("targetChange"in e){e.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Se(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],c=(function(g,_){return g.useProto3Json?(Ye(_===void 0||typeof _=="string",58123),Kt.fromBase64String(_||"")):(Ye(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Kt.fromUint8Array(_||new Uint8Array))})(i,e.targetChange.resumeToken),f=e.targetChange.cause,p=f&&(function(g){const _=g.code===void 0?ie.UNKNOWN:mE(g.code);return new de(_,g.message||"")})(f);n=new yE(a,o,c,p||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const o=rm(i,a.document.name),c=br(a.document.updateTime),f=a.document.createTime?br(a.document.createTime):Ae.min(),p=new pn({mapValue:{fields:a.document.fields}}),m=tn.newFoundDocument(o,c,f,p),g=a.targetIds||[],_=a.removedTargetIds||[];n=new Oh(g,_,m.key,m)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const o=rm(i,a.document),c=a.readTime?br(a.readTime):Ae.min(),f=tn.newNoDocument(o,c),p=a.removedTargetIds||[];n=new Oh([],p,f.key,f)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const o=rm(i,a.document),c=a.removedTargetIds||[];n=new Oh([],c,o,null)}else{if(!("filter"in e))return Se(11601,{Rt:e});{e.filter;const a=e.filter;a.targetId;const{count:o=0,unchangedNames:c}=a,f=new h5(o,c),p=a.targetId;n=new gE(p,f)}}return n}function w5(i,e){let n;if(e instanceof xc)n={update:U_(i,e.key,e.value)};else if(e instanceof pE)n={delete:Im(i,e.key)};else if(e instanceof oa)n={update:U_(i,e.key,e.data),updateMask:O5(e.fieldMask)};else{if(!(e instanceof l5))return Se(16599,{Vt:e.type});n={verify:Im(i,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((a=>(function(c,f){const p=f.transform;if(p instanceof cc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof uc)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof hc)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Zh)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw Se(20930,{transform:f.transform})})(0,a)))),e.precondition.isNone||(n.currentDocument=(function(o,c){return c.updateTime!==void 0?{updateTime:b5(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Se(27497)})(i,e.precondition)),n}function S5(i,e){return i&&i.length>0?(Ye(e!==void 0,14353),i.map((n=>(function(o,c){let f=o.updateTime?br(o.updateTime):br(c);return f.isEqual(Ae.min())&&(f=br(c)),new a5(f,o.transformResults||[])})(n,e)))):[]}function x5(i,e){return{documents:[bE(i,e.path)]}}function A5(i,e){const n={structuredQuery:{}},a=e.path;let o;e.collectionGroup!==null?(o=a,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=a.popLast(),n.structuredQuery.from=[{collectionId:a.lastSegment()}]),n.parent=bE(i,o);const c=(function(g){if(g.length!==0)return wE(Zn.create(g,"and"))})(e.filters);c&&(n.structuredQuery.where=c);const f=(function(g){if(g.length!==0)return g.map((_=>(function(w){return{field:no(w.field),direction:C5(w.dir)}})(_)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const p=Am(i,e.limit);return p!==null&&(n.structuredQuery.limit=p),e.startAt&&(n.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:n,parent:o}}function R5(i){let e=E5(i.parent);const n=i.structuredQuery,a=n.from?n.from.length:0;let o=null;if(a>0){Ye(a===1,65062);const _=n.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let c=[];n.where&&(c=(function(T){const w=TE(T);return w instanceof Zn&&Wb(w)?w.getFilters():[w]})(n.where));let f=[];n.orderBy&&(f=(function(T){return T.map((w=>(function(O){return new lc(ro(O.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(w)))})(n.orderBy));let p=null;n.limit&&(p=(function(T){let w;return w=typeof T=="object"?T.value:T,vf(w)?null:w})(n.limit));let m=null;n.startAt&&(m=(function(T){const w=!!T.before,x=T.values||[];return new Wh(x,w)})(n.startAt));let g=null;return n.endAt&&(g=(function(T){const w=!T.before,x=T.values||[];return new Wh(x,w)})(n.endAt)),G3(e,o,f,c,p,"F",m,g)}function I5(i,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function TE(i){return i.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const a=ro(n.unaryFilter.field);return At.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=ro(n.unaryFilter.field);return At.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=ro(n.unaryFilter.field);return At.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=ro(n.unaryFilter.field);return At.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}})(i):i.fieldFilter!==void 0?(function(n){return At.create(ro(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(n){return Zn.create(n.compositeFilter.filters.map((a=>TE(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se(1026)}})(n.compositeFilter.op))})(i):Se(30097,{filter:i})}function C5(i){return g5[i]}function N5(i){return y5[i]}function D5(i){return v5[i]}function no(i){return{fieldPath:i.canonicalString()}}function ro(i){return Qt.fromServerFormat(i.fieldPath)}function wE(i){return i instanceof At?(function(n){if(n.op==="=="){if(A_(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NAN"}};if(x_(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(A_(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NOT_NAN"}};if(x_(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:no(n.field),op:N5(n.op),value:n.value}}})(i):i instanceof Zn?(function(n){const a=n.getFilters().map((o=>wE(o)));return a.length===1?a[0]:{compositeFilter:{op:D5(n.op),filters:a}}})(i):Se(54877,{filter:i})}function O5(i){const e=[];return i.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function SE(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Gi{constructor(e,n,a,o,c=Ae.min(),f=Ae.min(),p=Kt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=n,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new Gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class P5{constructor(e){this.yt=e}}function k5(i){const e=R5({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?xm(e,e.limit,"L"):e}/**
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
 */class M5{constructor(){this.Cn=new V5}addToCollectionParentIndex(e,n){return this.Cn.add(n),se.resolve()}getCollectionParents(e,n){return se.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return se.resolve()}deleteFieldIndex(e,n){return se.resolve()}deleteAllFieldIndexes(e){return se.resolve()}createTargetIndexes(e,n){return se.resolve()}getDocumentsMatchingTarget(e,n){return se.resolve(null)}getIndexType(e,n){return se.resolve(0)}getFieldIndexes(e,n){return se.resolve([])}getNextCollectionGroupToUpdate(e){return se.resolve(null)}getMinOffset(e,n){return se.resolve(Zi.min())}getMinOffsetFromCollectionGroup(e,n){return se.resolve(Zi.min())}updateCollectionGroup(e,n,a){return se.resolve()}updateIndexEntries(e,n){return se.resolve()}}class V5{constructor(){this.index={}}add(e){const n=e.lastSegment(),a=e.popLast(),o=this.index[n]||new Pt(at.comparator),c=!o.has(a);return this.index[n]=o.add(a),c}has(e){const n=e.lastSegment(),a=e.popLast(),o=this.index[n];return o&&o.has(a)}getEntries(e){return(this.index[e]||new Pt(at.comparator)).toArray()}}/**
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
 */const z_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xE=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=a}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(xE,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class yo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new yo(0)}static cr(){return new yo(-1)}}/**
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
 */const B_="LruGarbageCollector",j5=1048576;function H_([i,e],[n,a]){const o=je(i,n);return o===0?je(e,a):o}class L5{constructor(e){this.Ir=e,this.buffer=new Pt(H_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const a=this.buffer.last();H_(n,a)<0&&(this.buffer=this.buffer.delete(a).add(n))}}get maxValue(){return this.buffer.last()[0]}}class U5{constructor(e,n,a){this.garbageCollector=e,this.asyncQueue=n,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){pe(B_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ro(n)?pe(B_,"Ignoring IndexedDB error during garbage collection: ",n):await Ao(n)}await this.Vr(3e5)}))}}class z5{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((a=>Math.floor(n/100*a)))}nthSequenceNumber(e,n){if(n===0)return se.resolve(yf.ce);const a=new L5(n);return this.mr.forEachTarget(e,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(e,n,a){return this.mr.removeTargets(e,n,a)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(pe("LruGarbageCollector","Garbage collection skipped; disabled"),se.resolve(z_)):this.getCacheSize(e).next((a=>a<this.params.cacheSizeCollectionThreshold?(pe("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),z_):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let a,o,c,f,p,m,g;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(pe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,f=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(a=T,p=Date.now(),this.removeTargets(e,a,n)))).next((T=>(c=T,m=Date.now(),this.removeOrphanedDocuments(e,a)))).next((T=>(g=Date.now(),eo()<=Ve.DEBUG&&pe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-_}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${c} targets in `+(m-p)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-_}ms`),se.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:T}))))}}function B5(i,e){return new z5(i,e)}/**
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
 */class H5{constructor(){this.changes=new as((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const a=this.changes.get(n);return a!==void 0?se.resolve(a):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class q5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class F5{constructor(e,n,a,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=a,this.indexManager=o}getDocument(e,n){let a=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(a=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(a!==null&&Jl(a.mutation,o,Sn.empty(),et.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((a=>this.getLocalViewOfDocuments(e,a,Le()).next((()=>a))))}getLocalViewOfDocuments(e,n,a=Le()){const o=Ya();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,a).next((c=>{let f=Gl();return c.forEach(((p,m)=>{f=f.insert(p,m.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const a=Ya();return this.populateOverlays(e,a,n).next((()=>this.computeViews(e,n,a,Le())))}populateOverlays(e,n,a){const o=[];return a.forEach((c=>{n.has(c)||o.push(c)})),this.documentOverlayCache.getOverlays(e,o).next((c=>{c.forEach(((f,p)=>{n.set(f,p)}))}))}computeViews(e,n,a,o){let c=ai();const f=Zl(),p=(function(){return Zl()})();return n.forEach(((m,g)=>{const _=a.get(g.key);o.has(g.key)&&(_===void 0||_.mutation instanceof oa)?c=c.insert(g.key,g):_!==void 0?(f.set(g.key,_.mutation.getFieldMask()),Jl(_.mutation,g,_.mutation.getFieldMask(),et.now())):f.set(g.key,Sn.empty())})),this.recalculateAndSaveOverlays(e,c).next((m=>(m.forEach(((g,_)=>f.set(g,_))),n.forEach(((g,_)=>p.set(g,new q5(_,f.get(g)??null)))),p)))}recalculateAndSaveOverlays(e,n){const a=Zl();let o=new ht(((f,p)=>f-p)),c=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const p of f)p.keys().forEach((m=>{const g=n.get(m);if(g===null)return;let _=a.get(m)||Sn.empty();_=p.applyToLocalView(g,_),a.set(m,_);const T=(o.get(p.batchId)||Le()).add(m);o=o.insert(p.batchId,T)}))})).next((()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,_=m.value,T=sE();_.forEach((w=>{if(!c.has(w)){const x=fE(n.get(w),a.get(w));x!==null&&T.set(w,x),c=c.add(w)}})),f.push(this.documentOverlayCache.saveOverlays(e,g,T))}return se.waitFor(f)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((a=>this.recalculateAndSaveOverlays(e,a)))}getDocumentsMatchingQuery(e,n,a,o){return(function(f){return ve.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,a,o):this.getDocumentsMatchingCollectionQuery(e,n,a,o)}getNextDocuments(e,n,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,a,o).next((c=>{const f=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,a.largestBatchId,o-c.size):se.resolve(Ya());let p=ic,m=c;return f.next((g=>se.forEach(g,((_,T)=>(p<T.largestBatchId&&(p=T.largestBatchId),c.get(_)?se.resolve():this.remoteDocumentCache.getEntry(e,_).next((w=>{m=m.insert(_,w)}))))).next((()=>this.populateOverlays(e,g,c))).next((()=>this.computeViews(e,m,g,Le()))).next((_=>({batchId:p,changes:aE(_)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ve(n)).next((a=>{let o=Gl();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,a,o){const c=n.collectionGroup;let f=Gl();return this.indexManager.getCollectionParents(e,c).next((p=>se.forEach(p,(m=>{const g=(function(T,w){return new Io(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(n,m.child(c));return this.getDocumentsMatchingCollectionQuery(e,g,a,o).next((_=>{_.forEach(((T,w)=>{f=f.insert(T,w)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,a,o){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,a.largestBatchId).next((f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,a,c,o)))).next((f=>{c.forEach(((m,g)=>{const _=g.getKey();f.get(_)===null&&(f=f.insert(_,tn.newInvalidDocument(_)))}));let p=Gl();return f.forEach(((m,g)=>{const _=c.get(m);_!==void 0&&Jl(_.mutation,g,Sn.empty(),et.now()),Tf(n,g)&&(p=p.insert(m,g))})),p}))}}/**
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
 */class G5{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return se.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:br(o.createTime)}})(n)),se.resolve()}getNamedQuery(e,n){return se.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:k5(o.bundledQuery),readTime:br(o.readTime)}})(n)),se.resolve()}}/**
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
 */class Y5{constructor(){this.overlays=new ht(ve.comparator),this.qr=new Map}getOverlay(e,n){return se.resolve(this.overlays.get(n))}getOverlays(e,n){const a=Ya();return se.forEach(n,(o=>this.getOverlay(e,o).next((c=>{c!==null&&a.set(o,c)})))).next((()=>a))}saveOverlays(e,n,a){return a.forEach(((o,c)=>{this.St(e,n,c)})),se.resolve()}removeOverlaysForBatchId(e,n,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(a)),se.resolve()}getOverlaysForCollection(e,n,a){const o=Ya(),c=n.length+1,f=new ve(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===c&&m.largestBatchId>a&&o.set(m.getKey(),m)}return se.resolve(o)}getOverlaysForCollectionGroup(e,n,a,o){let c=new ht(((g,_)=>g-_));const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>a){let _=c.get(g.largestBatchId);_===null&&(_=Ya(),c=c.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const p=Ya(),m=c.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,_)=>p.set(g,_))),!(p.size()>=o)););return se.resolve(p)}St(e,n,a){const o=this.overlays.get(a.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(a.key,new u5(n,a));let c=this.qr.get(n);c===void 0&&(c=Le(),this.qr.set(n,c)),this.qr.set(n,c.add(a.key))}}/**
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
 */class Q5{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(e){return se.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,se.resolve()}}/**
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
 */class yg{constructor(){this.Qr=new Pt(zt.$r),this.Ur=new Pt(zt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const a=new zt(e,n);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(e,n){e.forEach((a=>this.addReference(a,n)))}removeReference(e,n){this.Gr(new zt(e,n))}zr(e,n){e.forEach((a=>this.removeReference(a,n)))}jr(e){const n=new ve(new at([])),a=new zt(n,e),o=new zt(n,e+1),c=[];return this.Ur.forEachInRange([a,o],(f=>{this.Gr(f),c.push(f.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ve(new at([])),a=new zt(n,e),o=new zt(n,e+1);let c=Le();return this.Ur.forEachInRange([a,o],(f=>{c=c.add(f.key)})),c}containsKey(e){const n=new zt(e,0),a=this.Qr.firstAfterOrEqual(n);return a!==null&&e.isEqual(a.key)}}class zt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ve.comparator(e.key,n.key)||je(e.Yr,n.Yr)}static Kr(e,n){return je(e.Yr,n.Yr)||ve.comparator(e.key,n.key)}}/**
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
 */class K5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Pt(zt.$r)}checkEmpty(e){return se.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,a,o){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new c5(c,n,a,o);this.mutationQueue.push(f);for(const p of o)this.Zr=this.Zr.add(new zt(p.key,c)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return se.resolve(f)}lookupMutationBatch(e,n){return se.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const a=n+1,o=this.ei(a),c=o<0?0:o;return se.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return se.resolve(this.mutationQueue.length===0?lg:this.tr-1)}getAllMutationBatches(e){return se.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const a=new zt(n,0),o=new zt(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([a,o],(f=>{const p=this.Xr(f.Yr);c.push(p)})),se.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let a=new Pt(je);return n.forEach((o=>{const c=new zt(o,0),f=new zt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,f],(p=>{a=a.add(p.Yr)}))})),se.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(e,n){const a=n.path,o=a.length+1;let c=a;ve.isDocumentKey(c)||(c=c.child(""));const f=new zt(new ve(c),0);let p=new Pt(je);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)}),f),se.resolve(this.ti(p))}ti(e){const n=[];return e.forEach((a=>{const o=this.Xr(a);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){Ye(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return se.forEach(n.mutations,(o=>{const c=new zt(o.key,n.batchId);return a=a.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=a}))}ir(e){}containsKey(e,n){const a=new zt(n,0),o=this.Zr.firstAfterOrEqual(a);return se.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,se.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $5{constructor(e){this.ri=e,this.docs=(function(){return new ht(ve.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const a=n.key,o=this.docs.get(a),c=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(a,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const a=this.docs.get(n);return se.resolve(a?a.document.mutableCopy():tn.newInvalidDocument(n))}getEntries(e,n){let a=ai();return n.forEach((o=>{const c=this.docs.get(o);a=a.insert(o,c?c.document.mutableCopy():tn.newInvalidDocument(o))})),se.resolve(a)}getDocumentsMatchingQuery(e,n,a,o){let c=ai();const f=n.path,p=new ve(f.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:_}}=m.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||w3(T3(_),a)<=0||(o.has(_.key)||Tf(n,_))&&(c=c.insert(_.key,_.mutableCopy()))}return se.resolve(c)}getAllFromCollectionGroup(e,n,a,o){Se(9500)}ii(e,n){return se.forEach(this.docs,(a=>n(a)))}newChangeBuffer(e){return new X5(this)}getSize(e){return se.resolve(this.size)}}class X5 extends H5{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(a)})),se.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class W5{constructor(e){this.persistence=e,this.si=new as((n=>hg(n)),fg),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new yg,this.targetCount=0,this.ai=yo.ur()}forEachTarget(e,n){return this.si.forEach(((a,o)=>n(o))),se.resolve()}getLastRemoteSnapshotVersion(e){return se.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return se.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),se.resolve(this.highestTargetId)}setTargetsMetadata(e,n,a){return a&&(this.lastRemoteSnapshotVersion=a),n>this.oi&&(this.oi=n),se.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new yo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,se.resolve()}updateTargetData(e,n){return this.Pr(n),se.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,se.resolve()}removeTargets(e,n,a){let o=0;const c=[];return this.si.forEach(((f,p)=>{p.sequenceNumber<=n&&a.get(p.targetId)===null&&(this.si.delete(f),c.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),se.waitFor(c).next((()=>o))}getTargetCount(e){return se.resolve(this.targetCount)}getTargetData(e,n){const a=this.si.get(n)||null;return se.resolve(a)}addMatchingKeys(e,n,a){return this._i.Wr(n,a),se.resolve()}removeMatchingKeys(e,n,a){this._i.zr(n,a);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach((f=>{c.push(o.markPotentiallyOrphaned(e,f))})),se.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),se.resolve()}getMatchingKeysForTargetId(e,n){const a=this._i.Hr(n);return se.resolve(a)}containsKey(e,n){return se.resolve(this._i.containsKey(n))}}/**
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
 */class AE{constructor(e,n){this.ui={},this.overlays={},this.ci=new yf(0),this.li=!1,this.li=!0,this.hi=new Q5,this.referenceDelegate=e(this),this.Pi=new W5(this),this.indexManager=new M5,this.remoteDocumentCache=(function(o){return new $5(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new P5(n),this.Ii=new G5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Y5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let a=this.ui[e.toKey()];return a||(a=new K5(n,this.referenceDelegate),this.ui[e.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,a){pe("MemoryPersistence","Starting transaction:",e);const o=new Z5(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((c=>this.referenceDelegate.di(o).next((()=>c)))).toPromise().then((c=>(o.raiseOnCommittedEvent(),c)))}Ai(e,n){return se.or(Object.values(this.ui).map((a=>()=>a.containsKey(e,n))))}}class Z5 extends x3{constructor(e){super(),this.currentSequenceNumber=e}}class vg{constructor(e){this.persistence=e,this.Ri=new yg,this.Vi=null}static mi(e){return new vg(e)}get fi(){if(this.Vi)return this.Vi;throw Se(60996)}addReference(e,n,a){return this.Ri.addReference(a,n),this.fi.delete(a.toString()),se.resolve()}removeReference(e,n,a){return this.Ri.removeReference(a,n),this.fi.add(a.toString()),se.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),se.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((c=>this.fi.add(c.toString())))})).next((()=>a.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return se.forEach(this.fi,(a=>{const o=ve.fromPath(a);return this.gi(e,o).next((c=>{c||n.removeEntry(o,Ae.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((a=>{a?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return se.or([()=>se.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ef{constructor(e,n){this.persistence=e,this.pi=new as((a=>I3(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=B5(this,n)}static mi(e,n){return new ef(e,n)}Ei(){}di(e){return se.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((a=>n.next((o=>a+o))))}wr(e){let n=0;return this.pr(e,(a=>{n++})).next((()=>n))}pr(e,n){return se.forEach(this.pi,((a,o)=>this.br(e,a,o).next((c=>c?se.resolve():n(o)))))}removeTargets(e,n,a){return this.persistence.getTargetCache().removeTargets(e,n,a)}removeOrphanedDocuments(e,n){let a=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.ii(e,(f=>this.br(e,f,n).next((p=>{p||(a++,c.removeEntry(f,Ae.min()))})))).next((()=>c.apply(e))).next((()=>a))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),se.resolve()}removeTarget(e,n){const a=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,n,a){return this.pi.set(a,e.currentSequenceNumber),se.resolve()}removeReference(e,n,a){return this.pi.set(a,e.currentSequenceNumber),se.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),se.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ch(e.data.value)),n}br(e,n,a){return se.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return se.resolve(o!==void 0&&o>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class _g{constructor(e,n,a,o){this.targetId=e,this.fromCache=n,this.Es=a,this.ds=o}static As(e,n){let a=Le(),o=Le();for(const c of n.docChanges)switch(c.type){case 0:a=a.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new _g(e,n.fromCache,a,o)}}/**
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
 */class J5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return C4()?8:A3(nn())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,a,o){const c={result:null};return this.ys(e,n).next((f=>{c.result=f})).next((()=>{if(!c.result)return this.ws(e,n,o,a).next((f=>{c.result=f}))})).next((()=>{if(c.result)return;const f=new J5;return this.Ss(e,n,f).next((p=>{if(c.result=p,this.Vs)return this.bs(e,n,f,p.size)}))})).next((()=>c.result))}bs(e,n,a,o){return a.documentReadCount<this.fs?(eo()<=Ve.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",to(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),se.resolve()):(eo()<=Ve.DEBUG&&pe("QueryEngine","Query:",to(n),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(eo()<=Ve.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",to(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(n))):se.resolve())}ys(e,n){if(N_(n))return se.resolve(null);let a=_r(n);return this.indexManager.getIndexType(e,a).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=xm(n,null,"F"),a=_r(n)),this.indexManager.getDocumentsMatchingTarget(e,a).next((c=>{const f=Le(...c);return this.ps.getDocuments(e,f).next((p=>this.indexManager.getMinOffset(e,a).next((m=>{const g=this.Ds(n,p);return this.Cs(n,g,f,m.readTime)?this.ys(e,xm(n,null,"F")):this.vs(e,g,n,m)}))))})))))}ws(e,n,a,o){return N_(n)||o.isEqual(Ae.min())?se.resolve(null):this.ps.getDocuments(e,a).next((c=>{const f=this.Ds(n,c);return this.Cs(n,f,a,o)?se.resolve(null):(eo()<=Ve.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),to(n)),this.vs(e,f,n,E3(o,ic)).next((p=>p)))}))}Ds(e,n){let a=new Pt(rE(e));return n.forEach(((o,c)=>{Tf(e,c)&&(a=a.add(c))})),a}Cs(e,n,a,o){if(e.limit===null)return!1;if(a.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(e,n,a){return eo()<=Ve.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",to(n)),this.ps.getDocumentsMatchingQuery(e,n,Zi.min(),a)}vs(e,n,a,o){return this.ps.getDocumentsMatchingQuery(e,a,o).next((c=>(n.forEach((f=>{c=c.insert(f.key,f)})),c)))}}/**
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
 */const bg="LocalStore",tI=3e8;class nI{constructor(e,n,a,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new ht(je),this.xs=new as((c=>hg(c)),fg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(a)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new F5(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function rI(i,e,n,a){return new nI(i,e,n,a)}async function RE(i,e){const n=Ce(i);return await n.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return n.mutationQueue.getAllMutationBatches(a).next((c=>(o=c,n.Bs(e),n.mutationQueue.getAllMutationBatches(a)))).next((c=>{const f=[],p=[];let m=Le();for(const g of o){f.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}for(const g of c){p.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}return n.localDocuments.getDocuments(a,m).next((g=>({Ls:g,removedBatchIds:f,addedBatchIds:p})))}))}))}function iI(i,e){const n=Ce(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=e.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,m,g,_){const T=g.batch,w=T.keys();let x=se.resolve();return w.forEach((O=>{x=x.next((()=>_.getEntry(m,O))).next((V=>{const M=g.docVersions.get(O);Ye(M!==null,48541),V.version.compareTo(M)<0&&(T.applyToRemoteDocument(V,g),V.isValidDocument()&&(V.setReadTime(g.commitVersion),_.addEntry(V)))}))})),x.next((()=>p.mutationQueue.removeMutationBatch(m,T)))})(n,a,e,c).next((()=>c.apply(a))).next((()=>n.mutationQueue.performConsistencyCheck(a))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(a,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(p){let m=Le();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m})(e)))).next((()=>n.localDocuments.getDocuments(a,o)))}))}function IE(i){const e=Ce(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function aI(i,e){const n=Ce(i),a=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const p=[];e.targetChanges.forEach(((_,T)=>{const w=o.get(T);if(!w)return;p.push(n.Pi.removeMatchingKeys(c,_.removedDocuments,T).next((()=>n.Pi.addMatchingKeys(c,_.addedDocuments,T))));let x=w.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(Kt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):_.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(_.resumeToken,a)),o=o.insert(T,x),(function(V,M,U){return V.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=tI?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(w,x,_)&&p.push(n.Pi.updateTargetData(c,x))}));let m=ai(),g=Le();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(c,_))})),p.push(sI(c,f,e.documentUpdates).next((_=>{m=_.ks,g=_.qs}))),!a.isEqual(Ae.min())){const _=n.Pi.getLastRemoteSnapshotVersion(c).next((T=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,a)));p.push(_)}return se.waitFor(p).next((()=>f.apply(c))).next((()=>n.localDocuments.getLocalViewOfDocuments(c,m,g))).next((()=>m))})).then((c=>(n.Ms=o,c)))}function sI(i,e,n){let a=Le(),o=Le();return n.forEach((c=>a=a.add(c))),e.getEntries(i,a).next((c=>{let f=ai();return n.forEach(((p,m)=>{const g=c.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Ae.min())?(e.removeEntry(p,m.readTime),f=f.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),f=f.insert(p,m)):pe(bg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)})),{ks:f,qs:o}}))}function oI(i,e){const n=Ce(i);return n.persistence.runTransaction("Get next mutation batch","readonly",(a=>(e===void 0&&(e=lg),n.mutationQueue.getNextMutationBatchAfterBatchId(a,e))))}function lI(i,e){const n=Ce(i);return n.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return n.Pi.getTargetData(a,e).next((c=>c?(o=c,se.resolve(o)):n.Pi.allocateTargetId(a).next((f=>(o=new Gi(e,f,"TargetPurposeListen",a.currentSequenceNumber),n.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=n.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(a.targetId,a),n.xs.set(e,a.targetId)),a}))}async function Nm(i,e,n){const a=Ce(i),o=a.Ms.get(e),c=n?"readwrite":"readwrite-primary";try{n||await a.persistence.runTransaction("Release target",c,(f=>a.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!Ro(f))throw f;pe(bg,`Failed to update sequence numbers for target ${e}: ${f}`)}a.Ms=a.Ms.remove(e),a.xs.delete(o.target)}function q_(i,e,n){const a=Ce(i);let o=Ae.min(),c=Le();return a.persistence.runTransaction("Execute query","readwrite",(f=>(function(m,g,_){const T=Ce(m),w=T.xs.get(_);return w!==void 0?se.resolve(T.Ms.get(w)):T.Pi.getTargetData(g,_)})(a,f,_r(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(f,p.targetId).next((m=>{c=m}))})).next((()=>a.Fs.getDocumentsMatchingQuery(f,e,n?o:Ae.min(),n?c:Le()))).next((p=>(cI(a,Q3(e),p),{documents:p,Qs:c})))))}function cI(i,e,n){let a=i.Os.get(e)||Ae.min();n.forEach(((o,c)=>{c.readTime.compareTo(a)>0&&(a=c.readTime)})),i.Os.set(e,a)}class F_{constructor(){this.activeTargetIds=J3()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uI{constructor(){this.Mo=new F_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,a){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,a){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new F_,Promise.resolve()}handleUserChange(e,n,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hI{Oo(e){}shutdown(){}}/**
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
 */const G_="ConnectivityMonitor";class Y_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pe(G_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){pe(G_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bh=null;function Dm(){return bh===null?bh=(function(){return 268435456+Math.round(2147483648*Math.random())})():bh++,"0x"+bh.toString(16)}/**
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
 */const im="RestConnection",fI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===$h?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(e,n,a,o,c){const f=Dm(),p=this.zo(e,n.toUriEncodedString());pe(im,`Sending RPC '${e}' ${f}:`,p,a);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,c);const{host:g}=new URL(p),_=To(g);return this.Jo(e,p,m,a,_).then((T=>(pe(im,`Received RPC '${e}' ${f}: `,T),T)),(T=>{throw fo(im,`RPC '${e}' ${f} failed with error: `,T,"url: ",p,"request:",a),T}))}Ho(e,n,a,o,c,f){return this.Go(e,n,a,o,c)}jo(e,n,a){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,c)=>e[c]=o)),a&&a.headers.forEach(((o,c)=>e[c]=o))}zo(e,n){const a=fI[e];return`${this.Uo}/v1/${n}:${a}`}terminate(){}}/**
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
 */class pI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Jt="WebChannelConnection";class mI extends dI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,a,o,c){const f=Dm();return new Promise(((p,m)=>{const g=new Nb;g.setWithCredentials(!0),g.listenOnce(Db.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Ih.NO_ERROR:const T=g.getResponseJson();pe(Jt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(T)),p(T);break;case Ih.TIMEOUT:pe(Jt,`RPC '${e}' ${f} timed out`),m(new de(ie.DEADLINE_EXCEEDED,"Request time out"));break;case Ih.HTTP_ERROR:const w=g.getStatus();if(pe(Jt,`RPC '${e}' ${f} failed with status:`,w,"response text:",g.getResponseText()),w>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const O=x?.error;if(O&&O.status&&O.message){const V=(function(U){const Y=U.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(Y)>=0?Y:ie.UNKNOWN})(O.status);m(new de(V,O.message))}else m(new de(ie.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new de(ie.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{l_:e,streamId:f,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{pe(Jt,`RPC '${e}' ${f} completed.`)}}));const _=JSON.stringify(o);pe(Jt,`RPC '${e}' ${f} sending request:`,o),g.send(n,"POST",_,a,15)}))}T_(e,n,a){const o=Dm(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=kb(),p=Pb(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,n,a),m.encodeInitMessageHeaders=!0;const _=c.join("");pe(Jt,`Creating RPC '${e}' stream ${o}: ${_}`,m);const T=f.createWebChannel(_,m);this.I_(T);let w=!1,x=!1;const O=new pI({Yo:M=>{x?pe(Jt,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(w||(pe(Jt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),w=!0),pe(Jt,`RPC '${e}' stream ${o} sending:`,M),T.send(M))},Zo:()=>T.close()}),V=(M,U,Y)=>{M.listen(U,(q=>{try{Y(q)}catch(te){setTimeout((()=>{throw te}),0)}}))};return V(T,Fl.EventType.OPEN,(()=>{x||(pe(Jt,`RPC '${e}' stream ${o} transport opened.`),O.o_())})),V(T,Fl.EventType.CLOSE,(()=>{x||(x=!0,pe(Jt,`RPC '${e}' stream ${o} transport closed`),O.a_(),this.E_(T))})),V(T,Fl.EventType.ERROR,(M=>{x||(x=!0,fo(Jt,`RPC '${e}' stream ${o} transport errored. Name:`,M.name,"Message:",M.message),O.a_(new de(ie.UNAVAILABLE,"The operation could not be completed")))})),V(T,Fl.EventType.MESSAGE,(M=>{if(!x){const U=M.data[0];Ye(!!U,16349);const Y=U,q=Y?.error||Y[0]?.error;if(q){pe(Jt,`RPC '${e}' stream ${o} received error:`,q);const te=q.status;let Z=(function(R){const N=xt[R];if(N!==void 0)return mE(N)})(te),J=q.message;Z===void 0&&(Z=ie.INTERNAL,J="Unknown error status: "+te+" with message "+q.message),x=!0,O.a_(new de(Z,J)),T.close()}else pe(Jt,`RPC '${e}' stream ${o} received:`,U),O.u_(U)}})),V(p,Ob.STAT_EVENT,(M=>{M.stat===vm.PROXY?pe(Jt,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===vm.NOPROXY&&pe(Jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function am(){return typeof document<"u"?document:null}/**
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
 */function Af(i){return new _5(i,!0)}/**
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
 */class CE{constructor(e,n,a=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=n,this.d_=a,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-a);o>0&&pe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Q_="PersistentStream";class NE{constructor(e,n,a,o,c,f,p,m){this.Mi=e,this.S_=a,this.b_=o,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new CE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===ie.RESOURCE_EXHAUSTED?(ii(n.toString()),ii("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===n&&this.G_(a,o)}),(a=>{e((()=>{const o=new de(ie.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(e,n){const a=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return pe(Q_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(pe(Q_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gI extends NE{constructor(e,n,a,o,c,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,a,o,f),this.serializer=c}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=T5(this.serializer,e),a=(function(c){if(!("targetChange"in c))return Ae.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?Ae.min():f.readTime?br(f.readTime):Ae.min()})(e);return this.listener.H_(n,a)}Y_(e){const n={};n.database=Cm(this.serializer),n.addTarget=(function(c,f){let p;const m=f.target;if(p=wm(m)?{documents:x5(c,m)}:{query:A5(c,m).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=vE(c,f.resumeToken);const g=Am(c,f.expectedCount);g!==null&&(p.expectedCount=g)}else if(f.snapshotVersion.compareTo(Ae.min())>0){p.readTime=Jh(c,f.snapshotVersion.toTimestamp());const g=Am(c,f.expectedCount);g!==null&&(p.expectedCount=g)}return p})(this.serializer,e);const a=I5(this.serializer,e);a&&(n.labels=a),this.q_(n)}Z_(e){const n={};n.database=Cm(this.serializer),n.removeTarget=e,this.q_(n)}}class yI extends NE{constructor(e,n,a,o,c,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,a,o,f),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=S5(e.writeResults,e.commitTime),a=br(e.commitTime);return this.listener.na(a,n)}ra(){const e={};e.database=Cm(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((a=>w5(this.serializer,a)))};this.q_(n)}}/**
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
 */class vI{}class _I extends vI{constructor(e,n,a,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new de(ie.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Go(e,Rm(n,a),o,c,f))).catch((c=>{throw c.name==="FirebaseError"?(c.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new de(ie.UNKNOWN,c.toString())}))}Ho(e,n,a,o,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,p])=>this.connection.Ho(e,Rm(n,a),o,f,p,c))).catch((f=>{throw f.name==="FirebaseError"?(f.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new de(ie.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class bI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ii(n),this.aa=!1):pe("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const es="RemoteStore";class EI{constructor(e,n,a,o,c){this.localStore=e,this.datastore=n,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((f=>{a.enqueueAndForget((async()=>{ss(this)&&(pe(es,"Restarting streams for network reachability change."),await(async function(m){const g=Ce(m);g.Ea.add(4),await Rc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Rf(g)})(this))}))})),this.Ra=new bI(a,o)}}async function Rf(i){if(ss(i))for(const e of i.da)await e(!0)}async function Rc(i){for(const e of i.da)await e(!1)}function DE(i,e){const n=Ce(i);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Sg(n)?wg(n):Co(n).O_()&&Tg(n,e))}function Eg(i,e){const n=Ce(i),a=Co(n);n.Ia.delete(e),a.O_()&&OE(n,e),n.Ia.size===0&&(a.O_()?a.L_():ss(n)&&n.Ra.set("Unknown"))}function Tg(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const n=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Co(i).Y_(e)}function OE(i,e){i.Va.Ue(e),Co(i).Z_(e)}function wg(i){i.Va=new m5({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Co(i).start(),i.Ra.ua()}function Sg(i){return ss(i)&&!Co(i).x_()&&i.Ia.size>0}function ss(i){return Ce(i).Ea.size===0}function PE(i){i.Va=void 0}async function TI(i){i.Ra.set("Online")}async function wI(i){i.Ia.forEach(((e,n)=>{Tg(i,e)}))}async function SI(i,e){PE(i),Sg(i)?(i.Ra.ha(e),wg(i)):i.Ra.set("Unknown")}async function xI(i,e,n){if(i.Ra.set("Online"),e instanceof yE&&e.state===2&&e.cause)try{await(async function(o,c){const f=c.cause;for(const p of c.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.Ia.delete(p),o.Va.removeTarget(p))})(i,e)}catch(a){pe(es,"Failed to remove targets %s: %s ",e.targetIds.join(","),a),await tf(i,a)}else if(e instanceof Oh?i.Va.Ze(e):e instanceof gE?i.Va.st(e):i.Va.tt(e),!n.isEqual(Ae.min()))try{const a=await IE(i.localStore);n.compareTo(a)>=0&&await(function(c,f){const p=c.Va.Tt(f);return p.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const _=c.Ia.get(g);_&&c.Ia.set(g,_.withResumeToken(m.resumeToken,f))}})),p.targetMismatches.forEach(((m,g)=>{const _=c.Ia.get(m);if(!_)return;c.Ia.set(m,_.withResumeToken(Kt.EMPTY_BYTE_STRING,_.snapshotVersion)),OE(c,m);const T=new Gi(_.target,m,g,_.sequenceNumber);Tg(c,T)})),c.remoteSyncer.applyRemoteEvent(p)})(i,n)}catch(a){pe(es,"Failed to raise snapshot:",a),await tf(i,a)}}async function tf(i,e,n){if(!Ro(e))throw e;i.Ea.add(1),await Rc(i),i.Ra.set("Offline"),n||(n=()=>IE(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{pe(es,"Retrying IndexedDB access"),await n(),i.Ea.delete(1),await Rf(i)}))}function kE(i,e){return e().catch((n=>tf(i,n,e)))}async function If(i){const e=Ce(i),n=na(e);let a=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lg;for(;AI(e);)try{const o=await oI(e.localStore,a);if(o===null){e.Ta.length===0&&n.L_();break}a=o.batchId,RI(e,o)}catch(o){await tf(e,o)}ME(e)&&VE(e)}function AI(i){return ss(i)&&i.Ta.length<10}function RI(i,e){i.Ta.push(e);const n=na(i);n.O_()&&n.X_&&n.ea(e.mutations)}function ME(i){return ss(i)&&!na(i).x_()&&i.Ta.length>0}function VE(i){na(i).start()}async function II(i){na(i).ra()}async function CI(i){const e=na(i);for(const n of i.Ta)e.ea(n.mutations)}async function NI(i,e,n){const a=i.Ta.shift(),o=pg.from(a,e,n);await kE(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await If(i)}async function DI(i,e){e&&na(i).X_&&await(async function(a,o){if((function(f){return f5(f)&&f!==ie.ABORTED})(o.code)){const c=a.Ta.shift();na(a).B_(),await kE(a,(()=>a.remoteSyncer.rejectFailedWrite(c.batchId,o))),await If(a)}})(i,e),ME(i)&&VE(i)}async function K_(i,e){const n=Ce(i);n.asyncQueue.verifyOperationInProgress(),pe(es,"RemoteStore received new credentials");const a=ss(n);n.Ea.add(3),await Rc(n),a&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Rf(n)}async function OI(i,e){const n=Ce(i);e?(n.Ea.delete(2),await Rf(n)):e||(n.Ea.add(2),await Rc(n),n.Ra.set("Unknown"))}function Co(i){return i.ma||(i.ma=(function(n,a,o){const c=Ce(n);return c.sa(),new gI(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(i.datastore,i.asyncQueue,{Xo:TI.bind(null,i),t_:wI.bind(null,i),r_:SI.bind(null,i),H_:xI.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),Sg(i)?wg(i):i.Ra.set("Unknown")):(await i.ma.stop(),PE(i))}))),i.ma}function na(i){return i.fa||(i.fa=(function(n,a,o){const c=Ce(n);return c.sa(),new yI(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:II.bind(null,i),r_:DI.bind(null,i),ta:CI.bind(null,i),na:NI.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await If(i)):(await i.fa.stop(),i.Ta.length>0&&(pe(es,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class xg{constructor(e,n,a,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=a,this.op=o,this.removalCallback=c,this.deferred=new Xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,a,o,c){const f=Date.now()+a,p=new xg(e,n,f,o,c);return p.start(a),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ag(i,e){if(ii("AsyncQueue",`${e}: ${i}`),Ro(i))return new de(ie.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class co{static emptySet(e){return new co(e.comparator)}constructor(e){this.comparator=e?(n,a)=>e(n,a)||ve.comparator(n.key,a.key):(n,a)=>ve.comparator(n.key,a.key),this.keyedMap=Gl(),this.sortedSet=new ht(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,a)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=a.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const a=new co;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=n,a}}/**
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
 */class $_{constructor(){this.ga=new ht(ve.comparator)}track(e){const n=e.doc.key,a=this.ga.get(n);a?e.type!==0&&a.type===3?this.ga=this.ga.insert(n,e):e.type===3&&a.type!==1?this.ga=this.ga.insert(n,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.ga=this.ga.remove(n):e.type===1&&a.type===2?this.ga=this.ga.insert(n,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Se(63341,{Rt:e,pa:a}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,a)=>{e.push(a)})),e}}class vo{constructor(e,n,a,o,c,f,p,m,g){this.query=e,this.docs=n,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,n,a,o,c){const f=[];return n.forEach((p=>{f.push({type:0,doc:p})})),new vo(e,n,co.emptySet(n),f,a,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ef(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,a=e.docChanges;if(n.length!==a.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==a[o].type||!n[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
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
 */class PI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class kI{constructor(){this.queries=X_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,a){const o=Ce(n),c=o.queries;o.queries=X_(),c.forEach(((f,p)=>{for(const m of p.Sa)m.onError(a)}))})(this,new de(ie.ABORTED,"Firestore shutting down"))}}function X_(){return new as((i=>nE(i)),Ef)}async function jE(i,e){const n=Ce(i);let a=3;const o=e.query;let c=n.queries.get(o);c?!c.ba()&&e.Da()&&(a=2):(c=new PI,a=e.Da()?0:1);try{switch(a){case 0:c.wa=await n.onListen(o,!0);break;case 1:c.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const p=Ag(f,`Initialization of query '${to(e.query)}' failed`);return void e.onError(p)}n.queries.set(o,c),c.Sa.push(e),e.va(n.onlineState),c.wa&&e.Fa(c.wa)&&Rg(n)}async function LE(i,e){const n=Ce(i),a=e.query;let o=3;const c=n.queries.get(a);if(c){const f=c.Sa.indexOf(e);f>=0&&(c.Sa.splice(f,1),c.Sa.length===0?o=e.Da()?0:1:!c.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(a),n.onUnlisten(a,!0);case 1:return n.queries.delete(a),n.onUnlisten(a,!1);case 2:return n.onLastRemoteStoreUnlisten(a);default:return}}function MI(i,e){const n=Ce(i);let a=!1;for(const o of e){const c=o.query,f=n.queries.get(c);if(f){for(const p of f.Sa)p.Fa(o)&&(a=!0);f.wa=o}}a&&Rg(n)}function VI(i,e,n){const a=Ce(i),o=a.queries.get(e);if(o)for(const c of o.Sa)c.onError(n);a.queries.delete(e)}function Rg(i){i.Ca.forEach((e=>{e.next()}))}var Om,W_;(W_=Om||(Om={})).Ma="default",W_.Cache="cache";class UE{constructor(e,n,a){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(e){if(!this.options.includeMetadataChanges){const a=[];for(const o of e.docChanges)o.type!==3&&a.push(o);e=new vo(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const a=n!=="Offline";return(!this.options.qa||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Om.Cache}}/**
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
 */class zE{constructor(e){this.key=e}}class BE{constructor(e){this.key=e}}class jI{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=rE(e),this.tu=new co(this.eu)}get nu(){return this.Ya}ru(e,n){const a=n?n.iu:new $_,o=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,f=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,T)=>{const w=o.get(_),x=Tf(this.query,T)?T:null,O=!!w&&this.mutatedKeys.has(w.key),V=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let M=!1;w&&x?w.data.isEqual(x.data)?O!==V&&(a.track({type:3,doc:x}),M=!0):this.su(w,x)||(a.track({type:2,doc:x}),M=!0,(m&&this.eu(x,m)>0||g&&this.eu(x,g)<0)&&(p=!0)):!w&&x?(a.track({type:0,doc:x}),M=!0):w&&!x&&(a.track({type:1,doc:w}),M=!0,(m||g)&&(p=!0)),M&&(x?(f=f.add(x),c=V?c.add(_):c.delete(_)):(f=f.delete(_),c=c.delete(_)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const _=this.query.limitType==="F"?f.last():f.first();f=f.delete(_.key),c=c.delete(_.key),a.track({type:1,doc:_})}return{tu:f,iu:a,Cs:p,mutatedKeys:c}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,a,o){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((_,T)=>(function(x,O){const V=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{Rt:M})}};return V(x)-V(O)})(_.type,T.type)||this.eu(_.doc,T.doc))),this.ou(a),o=o??!1;const p=n&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,f.length!==0||g?{snapshot:new vo(this.query,e.tu,c,f,e.mutatedKeys,m===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const n=[];return e.forEach((a=>{this.Xa.has(a)||n.push(new BE(a))})),this.Xa.forEach((a=>{e.has(a)||n.push(new zE(a))})),n}cu(e){this.Ya=e.Qs,this.Xa=Le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return vo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ig="SyncEngine";class LI{constructor(e,n,a){this.query=e,this.targetId=n,this.view=a}}class UI{constructor(e){this.key=e,this.hu=!1}}class zI{constructor(e,n,a,o,c,f){this.localStore=e,this.remoteStore=n,this.eventManager=a,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new as((p=>nE(p)),Ef),this.Iu=new Map,this.Eu=new Set,this.du=new ht(ve.comparator),this.Au=new Map,this.Ru=new yg,this.Vu={},this.mu=new Map,this.fu=yo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function BI(i,e,n=!0){const a=QE(i);let o;const c=a.Tu.get(e);return c?(a.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.lu()):o=await HE(a,e,n,!0),o}async function HI(i,e){const n=QE(i);await HE(n,e,!0,!1)}async function HE(i,e,n,a){const o=await lI(i.localStore,_r(e)),c=o.targetId,f=i.sharedClientState.addLocalQueryTarget(c,n);let p;return a&&(p=await qI(i,e,c,f==="current",o.resumeToken)),i.isPrimaryClient&&n&&DE(i.remoteStore,o),p}async function qI(i,e,n,a,o){i.pu=(T,w,x)=>(async function(V,M,U,Y){let q=M.view.ru(U);q.Cs&&(q=await q_(V.localStore,M.query,!1).then((({documents:k})=>M.view.ru(k,q))));const te=Y&&Y.targetChanges.get(M.targetId),Z=Y&&Y.targetMismatches.get(M.targetId)!=null,J=M.view.applyChanges(q,V.isPrimaryClient,te,Z);return J_(V,M.targetId,J.au),J.snapshot})(i,T,w,x);const c=await q_(i.localStore,e,!0),f=new jI(e,c.Qs),p=f.ru(c.documents),m=Ac.createSynthesizedTargetChangeForCurrentChange(n,a&&i.onlineState!=="Offline",o),g=f.applyChanges(p,i.isPrimaryClient,m);J_(i,n,g.au);const _=new LI(e,n,f);return i.Tu.set(e,_),i.Iu.has(n)?i.Iu.get(n).push(e):i.Iu.set(n,[e]),g.snapshot}async function FI(i,e,n){const a=Ce(i),o=a.Tu.get(e),c=a.Iu.get(o.targetId);if(c.length>1)return a.Iu.set(o.targetId,c.filter((f=>!Ef(f,e)))),void a.Tu.delete(e);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await Nm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),n&&Eg(a.remoteStore,o.targetId),Pm(a,o.targetId)})).catch(Ao)):(Pm(a,o.targetId),await Nm(a.localStore,o.targetId,!0))}async function GI(i,e){const n=Ce(i),a=n.Tu.get(e),o=n.Iu.get(a.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(a.targetId),Eg(n.remoteStore,a.targetId))}async function YI(i,e,n){const a=JI(i);try{const o=await(function(f,p){const m=Ce(f),g=et.now(),_=p.reduce(((x,O)=>x.add(O.key)),Le());let T,w;return m.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let O=ai(),V=Le();return m.Ns.getEntries(x,_).next((M=>{O=M,O.forEach(((U,Y)=>{Y.isValidDocument()||(V=V.add(U))}))})).next((()=>m.localDocuments.getOverlayedDocuments(x,O))).next((M=>{T=M;const U=[];for(const Y of p){const q=o5(Y,T.get(Y.key).overlayedDocument);q!=null&&U.push(new oa(Y.key,q,Kb(q.value.mapValue),$n.exists(!0)))}return m.mutationQueue.addMutationBatch(x,g,U,p)})).next((M=>{w=M;const U=M.applyToLocalDocumentSet(T,V);return m.documentOverlayCache.saveOverlays(x,M.batchId,U)}))})).then((()=>({batchId:w.batchId,changes:aE(T)})))})(a.localStore,e);a.sharedClientState.addPendingMutation(o.batchId),(function(f,p,m){let g=f.Vu[f.currentUser.toKey()];g||(g=new ht(je)),g=g.insert(p,m),f.Vu[f.currentUser.toKey()]=g})(a,o.batchId,n),await Ic(a,o.changes),await If(a.remoteStore)}catch(o){const c=Ag(o,"Failed to persist write");n.reject(c)}}async function qE(i,e){const n=Ce(i);try{const a=await aI(n.localStore,e);e.targetChanges.forEach(((o,c)=>{const f=n.Au.get(c);f&&(Ye(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Ye(f.hu,14607):o.removedDocuments.size>0&&(Ye(f.hu,42227),f.hu=!1))})),await Ic(n,a,e)}catch(a){await Ao(a)}}function Z_(i,e,n){const a=Ce(i);if(a.isPrimaryClient&&n===0||!a.isPrimaryClient&&n===1){const o=[];a.Tu.forEach(((c,f)=>{const p=f.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(f,p){const m=Ce(f);m.onlineState=p;let g=!1;m.queries.forEach(((_,T)=>{for(const w of T.Sa)w.va(p)&&(g=!0)})),g&&Rg(m)})(a.eventManager,e),o.length&&a.Pu.H_(o),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function QI(i,e,n){const a=Ce(i);a.sharedClientState.updateQueryState(e,"rejected",n);const o=a.Au.get(e),c=o&&o.key;if(c){let f=new ht(ve.comparator);f=f.insert(c,tn.newNoDocument(c,Ae.min()));const p=Le().add(c),m=new xf(Ae.min(),new Map,new ht(je),f,p);await qE(a,m),a.du=a.du.remove(c),a.Au.delete(e),Cg(a)}else await Nm(a.localStore,e,!1).then((()=>Pm(a,e,n))).catch(Ao)}async function KI(i,e){const n=Ce(i),a=e.batch.batchId;try{const o=await iI(n.localStore,e);GE(n,a,null),FE(n,a),n.sharedClientState.updateMutationState(a,"acknowledged"),await Ic(n,o)}catch(o){await Ao(o)}}async function $I(i,e,n){const a=Ce(i);try{const o=await(function(f,p){const m=Ce(f);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let _;return m.mutationQueue.lookupMutationBatch(g,p).next((T=>(Ye(T!==null,37113),_=T.keys(),m.mutationQueue.removeMutationBatch(g,T)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,_,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_))).next((()=>m.localDocuments.getDocuments(g,_)))}))})(a.localStore,e);GE(a,e,n),FE(a,e),a.sharedClientState.updateMutationState(e,"rejected",n),await Ic(a,o)}catch(o){await Ao(o)}}function FE(i,e){(i.mu.get(e)||[]).forEach((n=>{n.resolve()})),i.mu.delete(e)}function GE(i,e,n){const a=Ce(i);let o=a.Vu[a.currentUser.toKey()];if(o){const c=o.get(e);c&&(n?c.reject(n):c.resolve(),o=o.remove(e)),a.Vu[a.currentUser.toKey()]=o}}function Pm(i,e,n=null){i.sharedClientState.removeLocalQueryTarget(e);for(const a of i.Iu.get(e))i.Tu.delete(a),n&&i.Pu.yu(a,n);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((a=>{i.Ru.containsKey(a)||YE(i,a)}))}function YE(i,e){i.Eu.delete(e.path.canonicalString());const n=i.du.get(e);n!==null&&(Eg(i.remoteStore,n),i.du=i.du.remove(e),i.Au.delete(n),Cg(i))}function J_(i,e,n){for(const a of n)a instanceof zE?(i.Ru.addReference(a.key,e),XI(i,a)):a instanceof BE?(pe(Ig,"Document no longer in limbo: "+a.key),i.Ru.removeReference(a.key,e),i.Ru.containsKey(a.key)||YE(i,a.key)):Se(19791,{wu:a})}function XI(i,e){const n=e.key,a=n.path.canonicalString();i.du.get(n)||i.Eu.has(a)||(pe(Ig,"New document in limbo: "+n),i.Eu.add(a),Cg(i))}function Cg(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const n=new ve(at.fromString(e)),a=i.fu.next();i.Au.set(a,new UI(n)),i.du=i.du.insert(n,a),DE(i.remoteStore,new Gi(_r(bf(n.path)),a,"TargetPurposeLimboResolution",yf.ce))}}async function Ic(i,e,n){const a=Ce(i),o=[],c=[],f=[];a.Tu.isEmpty()||(a.Tu.forEach(((p,m)=>{f.push(a.pu(m,e,n).then((g=>{if((g||n)&&a.isPrimaryClient){const _=g?!g.fromCache:n?.targetChanges.get(m.targetId)?.current;a.sharedClientState.updateQueryState(m.targetId,_?"current":"not-current")}if(g){o.push(g);const _=_g.As(m.targetId,g);c.push(_)}})))})),await Promise.all(f),a.Pu.H_(o),await(async function(m,g){const _=Ce(m);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>se.forEach(g,(w=>se.forEach(w.Es,(x=>_.persistence.referenceDelegate.addReference(T,w.targetId,x))).next((()=>se.forEach(w.ds,(x=>_.persistence.referenceDelegate.removeReference(T,w.targetId,x)))))))))}catch(T){if(!Ro(T))throw T;pe(bg,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const x=_.Ms.get(w),O=x.snapshotVersion,V=x.withLastLimboFreeSnapshotVersion(O);_.Ms=_.Ms.insert(w,V)}}})(a.localStore,c))}async function WI(i,e){const n=Ce(i);if(!n.currentUser.isEqual(e)){pe(Ig,"User change. New user:",e.toKey());const a=await RE(n.localStore,e);n.currentUser=e,(function(c,f){c.mu.forEach((p=>{p.forEach((m=>{m.reject(new de(ie.CANCELLED,f))}))})),c.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await Ic(n,a.Ls)}}function ZI(i,e){const n=Ce(i),a=n.Au.get(e);if(a&&a.hu)return Le().add(a.key);{let o=Le();const c=n.Iu.get(e);if(!c)return o;for(const f of c){const p=n.Tu.get(f);o=o.unionWith(p.view.nu)}return o}}function QE(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=qE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QI.bind(null,e),e.Pu.H_=MI.bind(null,e.eventManager),e.Pu.yu=VI.bind(null,e.eventManager),e}function JI(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$I.bind(null,e),e}class nf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Af(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return rI(this.persistence,new eI,e.initialUser,this.serializer)}Cu(e){return new AE(vg.mi,this.serializer)}Du(e){return new uI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nf.provider={build:()=>new nf};class eC extends nf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ye(this.persistence.referenceDelegate instanceof ef,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new U5(a,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new AE((a=>ef.mi(a,n)),this.serializer)}}class km{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Z_(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=WI.bind(null,this.syncEngine),await OI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new kI})()}createDatastore(e){const n=Af(e.databaseInfo.databaseId),a=(function(c){return new mI(c)})(e.databaseInfo);return(function(c,f,p,m){return new _I(c,f,p,m)})(e.authCredentials,e.appCheckCredentials,a,n)}createRemoteStore(e){return(function(a,o,c,f,p){return new EI(a,o,c,f,p)})(this.localStore,this.datastore,e.asyncQueue,(n=>Z_(this.syncEngine,n,0)),(function(){return Y_.v()?new Y_:new hI})())}createSyncEngine(e,n){return(function(o,c,f,p,m,g,_){const T=new zI(o,c,f,p,m,g);return _&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const a=Ce(n);pe(es,"RemoteStore shutting down."),a.Ea.add(5),await Rc(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}km.provider={build:()=>new km};/**
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
 */class KE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ii("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const ra="FirestoreClient";class tC{constructor(e,n,a,o,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=a,this.databaseInfo=o,this.user=en.UNAUTHENTICATED,this.clientId=og.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(a,(async f=>{pe(ra,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(a,(f=>(pe(ra,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const a=Ag(n,"Failed to shutdown persistence");e.reject(a)}})),e.promise}}async function sm(i,e){i.asyncQueue.verifyOperationInProgress(),pe(ra,"Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let a=n.initialUser;i.setCredentialChangeListener((async o=>{a.isEqual(o)||(await RE(e.localStore,o),a=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function e2(i,e){i.asyncQueue.verifyOperationInProgress();const n=await nC(i);pe(ra,"Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener((a=>K_(e.remoteStore,a))),i.setAppCheckTokenChangeListener(((a,o)=>K_(e.remoteStore,o))),i._onlineComponents=e}async function nC(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){pe(ra,"Using user provided OfflineComponentProvider");try{await sm(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===ie.FAILED_PRECONDITION||o.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;fo("Error using user provided cache. Falling back to memory cache: "+n),await sm(i,new nf)}}else pe(ra,"Using default OfflineComponentProvider"),await sm(i,new eC(void 0));return i._offlineComponents}async function $E(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(pe(ra,"Using user provided OnlineComponentProvider"),await e2(i,i._uninitializedComponentsProvider._online)):(pe(ra,"Using default OnlineComponentProvider"),await e2(i,new km))),i._onlineComponents}function rC(i){return $E(i).then((e=>e.syncEngine))}async function Mm(i){const e=await $E(i),n=e.eventManager;return n.onListen=BI.bind(null,e.syncEngine),n.onUnlisten=FI.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HI.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=GI.bind(null,e.syncEngine),n}function iC(i,e,n={}){const a=new Xi;return i.asyncQueue.enqueueAndForget((async()=>(function(c,f,p,m,g){const _=new KE({next:w=>{_.Nu(),f.enqueueAndForget((()=>LE(c,T)));const x=w.docs.has(p);!x&&w.fromCache?g.reject(new de(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&w.fromCache&&m&&m.source==="server"?g.reject(new de(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new UE(bf(p.path),_,{includeMetadataChanges:!0,qa:!0});return jE(c,T)})(await Mm(i),i.asyncQueue,e,n,a))),a.promise}/**
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
 */function XE(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const t2=new Map;/**
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
 */const WE="firestore.googleapis.com",n2=!0;class r2{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=WE,this.ssl=n2}else this.host=e.host,this.ssl=e.ssl??n2;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<j5)throw new de(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}b3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XE(e.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new de(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new de(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new de(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cf{constructor(e,n,a,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r2({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r2(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new u3;switch(a.type){case"firstParty":return new p3(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new de(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const a=t2.get(n);a&&(pe("ComponentProvider","Removing Datastore"),t2.delete(n),a.terminate())})(this),Promise.resolve()}}function aC(i,e,n,a={}){i=Kn(i,Cf);const o=To(e),c=i._getSettings(),f={...c,emulatorOptions:i._getEmulatorOptions()},p=`${e}:${n}`;o&&(z2(`https://${p}`),B2("Firestore",!0)),c.host!==WE&&c.host!==p&&fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...c,host:p,ssl:o,emulatorOptions:a};if(!$a(m,f)&&(i._setSettings(m),a.mockUserToken)){let g,_;if(typeof a.mockUserToken=="string")g=a.mockUserToken,_=en.MOCK_USER;else{g=b4(a.mockUserToken,i._app?.options.projectId);const T=a.mockUserToken.sub||a.mockUserToken.user_id;if(!T)throw new de(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new en(T)}i._authCredentials=new h3(new Vb(g,_))}}/**
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
 */class os{constructor(e,n,a){this.converter=n,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new os(this.firestore,e,this._query)}}class gt{constructor(e,n,a){this.converter=n,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,a){if(Sc(n,gt._jsonSchema))return new gt(e,a||null,new ve(at.fromString(n.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:Rt("string",gt._jsonSchemaVersion),referencePath:Rt("string")};class Wi extends os{constructor(e,n,a){super(e,n,bf(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new ve(e))}withConverter(e){return new Wi(this.firestore,e,this._path)}}function fc(i,e,...n){if(i=kt(i),jb("collection","path",e),i instanceof Cf){const a=at.fromString(e,...n);return g_(a),new Wi(i,null,a)}{if(!(i instanceof gt||i instanceof Wi))throw new de(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=i._path.child(at.fromString(e,...n));return g_(a),new Wi(i.firestore,null,a)}}function Jn(i,e,...n){if(i=kt(i),arguments.length===1&&(e=og.newId()),jb("doc","path",e),i instanceof Cf){const a=at.fromString(e,...n);return m_(a),new gt(i,null,new ve(a))}{if(!(i instanceof gt||i instanceof Wi))throw new de(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=i._path.child(at.fromString(e,...n));return m_(a),new gt(i.firestore,i instanceof Wi?i.converter:null,new ve(a))}}/**
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
 */const i2="AsyncQueue";class a2{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new CE(this,"async_queue_retry"),this._c=()=>{const a=am();a&&pe(i2,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=e;const n=am();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=am();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Xi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ro(e))throw e;pe(i2,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((a=>{throw this.nc=a,this.rc=!1,ii("INTERNAL UNHANDLED ERROR: ",s2(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=n,n}enqueueAfterDelay(e,n,a){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=xg.createAndSchedule(this,e,n,a,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&Se(47125,{Pc:s2(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,a)=>n.targetTimeMs-a.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function s2(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
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
 */function o2(i){return(function(n,a){if(typeof n!="object"||n===null)return!1;const o=n;for(const c of a)if(c in o&&typeof o[c]=="function")return!0;return!1})(i,["next","error","complete"])}class ts extends Cf{constructor(e,n,a,o){super(e,n,a,o),this.type="firestore",this._queue=new a2,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new a2(e),this._firestoreClient=void 0,await e}}}function sC(i,e){const n=typeof i=="object"?i:G2(),a=typeof i=="string"?i:$h,o=Wm(n,"firestore").getImmediate({identifier:a});if(!o._initialized){const c=v4("firestore");c&&aC(o,...c)}return o}function Ng(i){if(i._terminated)throw new de(ie.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||oC(i),i._firestoreClient}function oC(i){const e=i._freezeSettings(),n=(function(o,c,f,p){return new D3(o,c,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,XE(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(i._databaseId,i._app?.options.appId||"",i._persistenceKey,e);i._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new tC(i._authCredentials,i._appCheckCredentials,i._queue,n,i._componentsProvider&&(function(o){const c=o?._online.build();return{_offline:o?._offline.build(c),_online:c}})(i._componentsProvider))}/**
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
 */class zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zn(Kt.fromBase64String(e))}catch(n){throw new de(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zn(Kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:zn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sc(e,zn._jsonSchema))return zn.fromBase64String(e.bytes)}}zn._jsonSchemaVersion="firestore/bytes/1.0",zn._jsonSchema={type:Rt("string",zn._jsonSchemaVersion),bytes:Rt("string")};/**
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
 */class Nf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Df{constructor(e){this._methodName=e}}/**
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
 */class Er{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Er._jsonSchemaVersion}}static fromJSON(e){if(Sc(e,Er._jsonSchema))return new Er(e.latitude,e.longitude)}}Er._jsonSchemaVersion="firestore/geoPoint/1.0",Er._jsonSchema={type:Rt("string",Er._jsonSchemaVersion),latitude:Rt("number"),longitude:Rt("number")};/**
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
 */class Tr{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(a,o){if(a.length!==o.length)return!1;for(let c=0;c<a.length;++c)if(a[c]!==o[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Tr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sc(e,Tr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Tr(e.vectorValues);throw new de(ie.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tr._jsonSchemaVersion="firestore/vectorValue/1.0",Tr._jsonSchema={type:Rt("string",Tr._jsonSchemaVersion),vectorValues:Rt("object")};/**
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
 */const lC=/^__.*__$/;class cC{constructor(e,n,a){this.data=e,this.fieldMask=n,this.fieldTransforms=a}toMutation(e,n){return this.fieldMask!==null?new oa(e,this.data,this.fieldMask,n,this.fieldTransforms):new xc(e,this.data,n,this.fieldTransforms)}}class ZE{constructor(e,n,a){this.data=e,this.fieldMask=n,this.fieldTransforms=a}toMutation(e,n){return new oa(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function JE(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ac:i})}}class Dg{constructor(e,n,a,o,c,f){this.settings=e,this.databaseId=n,this.serializer=a,this.ignoreUndefinedProperties=o,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Dg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),a=this.Vc({path:n,fc:!1});return a.gc(e),a}yc(e){const n=this.path?.child(e),a=this.Vc({path:n,fc:!1});return a.Rc(),a}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return rf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(JE(this.Ac)&&lC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class uC{constructor(e,n,a){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=a||Af(e)}Cc(e,n,a,o=!1){return new Dg({Ac:e,methodName:n,Dc:a,path:Qt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Of(i){const e=i._freezeSettings(),n=Af(i._databaseId);return new uC(i._databaseId,!!e.ignoreUndefinedProperties,n)}function eT(i,e,n,a,o,c={}){const f=i.Cc(c.merge||c.mergeFields?2:0,e,n,o);Pg("Data must be an object, but it was:",f,a);const p=tT(a,f);let m,g;if(c.merge)m=new Sn(f.fieldMask),g=f.fieldTransforms;else if(c.mergeFields){const _=[];for(const T of c.mergeFields){const w=Vm(e,T,n);if(!f.contains(w))throw new de(ie.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);rT(_,w)||_.push(w)}m=new Sn(_),g=f.fieldTransforms.filter((T=>m.covers(T.field)))}else m=null,g=f.fieldTransforms;return new cC(new pn(p),m,g)}class Pf extends Df{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pf}}class Og extends Df{_toFieldTransform(e){return new r5(e.path,new cc)}isEqual(e){return e instanceof Og}}function hC(i,e,n,a){const o=i.Cc(1,e,n);Pg("Data must be an object, but it was:",o,a);const c=[],f=pn.empty();sa(a,((m,g)=>{const _=kg(e,m,n);g=kt(g);const T=o.yc(_);if(g instanceof Pf)c.push(_);else{const w=Cc(g,T);w!=null&&(c.push(_),f.set(_,w))}}));const p=new Sn(c);return new ZE(f,p,o.fieldTransforms)}function fC(i,e,n,a,o,c){const f=i.Cc(1,e,n),p=[Vm(e,a,n)],m=[o];if(c.length%2!=0)throw new de(ie.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<c.length;w+=2)p.push(Vm(e,c[w])),m.push(c[w+1]);const g=[],_=pn.empty();for(let w=p.length-1;w>=0;--w)if(!rT(g,p[w])){const x=p[w];let O=m[w];O=kt(O);const V=f.yc(x);if(O instanceof Pf)g.push(x);else{const M=Cc(O,V);M!=null&&(g.push(x),_.set(x,M))}}const T=new Sn(g);return new ZE(_,T,f.fieldTransforms)}function dC(i,e,n,a=!1){return Cc(n,i.Cc(a?4:3,e))}function Cc(i,e){if(nT(i=kt(i)))return Pg("Unsupported field value:",e,i),tT(i,e);if(i instanceof Df)return(function(a,o){if(!JE(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const c=a._toFieldTransform(o);c&&o.fieldTransforms.push(c)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(a,o){const c=[];let f=0;for(const p of a){let m=Cc(p,o.wc(f));m==null&&(m={nullValue:"NULL_VALUE"}),c.push(m),f++}return{arrayValue:{values:c}}})(i,e)}return(function(a,o){if((a=kt(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return e5(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const c=et.fromDate(a);return{timestampValue:Jh(o.serializer,c)}}if(a instanceof et){const c=new et(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Jh(o.serializer,c)}}if(a instanceof Er)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof zn)return{bytesValue:vE(o.serializer,a._byteString)};if(a instanceof gt){const c=o.databaseId,f=a.firestore._databaseId;if(!f.isEqual(c))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:gg(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Tr)return(function(f,p){return{mapValue:{fields:{[Yb]:{stringValue:Qb},[Xh]:{arrayValue:{values:f.toArray().map((g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return dg(p.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${gf(a)}`)})(i,e)}function tT(i,e){const n={};return zb(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sa(i,((a,o)=>{const c=Cc(o,e.mc(a));c!=null&&(n[a]=c)})),{mapValue:{fields:n}}}function nT(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof et||i instanceof Er||i instanceof zn||i instanceof gt||i instanceof Df||i instanceof Tr)}function Pg(i,e,n){if(!nT(n)||!Lb(n)){const a=gf(n);throw a==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+a)}}function Vm(i,e,n){if((e=kt(e))instanceof Nf)return e._internalPath;if(typeof e=="string")return kg(i,e);throw rf("Field path arguments must be of type string or ",i,!1,void 0,n)}const pC=new RegExp("[~\\*/\\[\\]]");function kg(i,e,n){if(e.search(pC)>=0)throw rf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new Nf(...e.split("."))._internalPath}catch{throw rf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function rf(i,e,n,a,o){const c=a&&!a.isEmpty(),f=o!==void 0;let p=`Function ${e}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(c||f)&&(m+=" (found",c&&(m+=` in field ${a}`),f&&(m+=` in document ${o}`),m+=")"),new de(ie.INVALID_ARGUMENT,p+i+m)}function rT(i,e){return i.some((n=>n.isEqual(e)))}/**
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
 */class iT{constructor(e,n,a,o,c){this._firestore=e,this._userDataWriter=n,this._key=a,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mC extends iT{data(){return super.data()}}function kf(i,e){return typeof e=="string"?kg(i,e):e instanceof Nf?e._internalPath:e._delegate._internalPath}/**
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
 */function gC(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new de(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mg{}class aT extends Mg{}function sT(i,e,...n){let a=[];e instanceof Mg&&a.push(e),a=a.concat(n),(function(c){const f=c.filter((m=>m instanceof Vg)).length,p=c.filter((m=>m instanceof Mf)).length;if(f>1||f>0&&p>0)throw new de(ie.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(a);for(const o of a)i=o._apply(i);return i}class Mf extends aT{constructor(e,n,a){super(),this._field=e,this._op=n,this._value=a,this.type="where"}static _create(e,n,a){return new Mf(e,n,a)}_apply(e){const n=this._parse(e);return lT(e._query,n),new os(e.firestore,e.converter,Sm(e._query,n))}_parse(e){const n=Of(e.firestore);return(function(c,f,p,m,g,_,T){let w;if(g.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new de(ie.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){c2(T,_);const O=[];for(const V of T)O.push(l2(m,c,V));w={arrayValue:{values:O}}}else w=l2(m,c,T)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||c2(T,_),w=dC(p,f,T,_==="in"||_==="not-in");return At.create(g,_,w)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ph(i,e,n){const a=e,o=kf("where",i);return Mf._create(o,a,n)}class Vg extends Mg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vg(e,n)}_parse(e){const n=this._queryConstraints.map((a=>a._parse(e))).filter((a=>a.getFilters().length>0));return n.length===1?n[0]:Zn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(o,c){let f=o;const p=c.getFlattenedFilters();for(const m of p)lT(f,m),f=Sm(f,m)})(e._query,n),new os(e.firestore,e.converter,Sm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jg extends aT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jg(e,n)}_apply(e){const n=(function(o,c,f){if(o.startAt!==null)throw new de(ie.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new de(ie.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new lc(c,f)})(e._query,this._field,this._direction);return new os(e.firestore,e.converter,(function(o,c){const f=o.explicitOrderBy.concat([c]);return new Io(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,n))}}function oT(i,e="asc"){const n=e,a=kf("orderBy",i);return jg._create(a,n)}function l2(i,e,n){if(typeof(n=kt(n))=="string"){if(n==="")throw new de(ie.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tE(e)&&n.indexOf("/")!==-1)throw new de(ie.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const a=e.path.child(at.fromString(n));if(!ve.isDocumentKey(a))throw new de(ie.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return S_(i,new ve(a))}if(n instanceof gt)return S_(i,n._key);throw new de(ie.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gf(n)}.`)}function c2(i,e){if(!Array.isArray(i)||i.length===0)throw new de(ie.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lT(i,e){const n=(function(o,c){for(const f of o)for(const p of f.getFlattenedFilters())if(c.indexOf(p.op)>=0)return p.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new de(ie.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new de(ie.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class yC{convertValue(e,n="none"){switch(ta(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ea(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const a={};return sa(e,((o,c)=>{a[o]=this.convertValue(c,n)})),a}convertVectorValue(e){const n=e.fields?.[Xh].arrayValue?.values?.map((a=>bt(a.doubleValue)));return new Tr(n)}convertGeoPoint(e){return new Er(bt(e.latitude),bt(e.longitude))}convertArray(e,n){return(e.values||[]).map((a=>this.convertValue(a,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const a=_f(e);return a==null?null:this.convertValue(a,n);case"estimate":return this.convertTimestamp(ac(e));default:return null}}convertTimestamp(e){const n=Ji(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const a=at.fromString(e);Ye(SE(a),9688,{name:e});const o=new sc(a.get(1),a.get(3)),c=new ve(a.popFirst(5));return o.isEqual(n)||ii(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
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
 */function cT(i,e,n){let a;return a=i?n&&(n.merge||n.mergeFields)?i.toFirestore(e,n):i.toFirestore(e):e,a}class Ql{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ka extends iT{constructor(e,n,a,o,c,f){super(e,n,a,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new kh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const a=this._document.data.field(kf("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ie.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ka._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ka._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ka._jsonSchema={type:Rt("string",Ka._jsonSchemaVersion),bundleSource:Rt("string","DocumentSnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class kh extends Ka{data(e={}){return super.data(e)}}class uo{constructor(e,n,a,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ql(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((a=>{e.call(n,new kh(this._firestore,this._userDataWriter,a.key,a,new Ql(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,c){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((p=>{const m=new kh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Ql(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>c||p.type!==3)).map((p=>{const m=new kh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Ql(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,_=-1;return p.type!==0&&(g=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),_=f.indexOf(p.doc.key)),{type:vC(p.type),doc:m,oldIndex:g,newIndex:_}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ie.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=uo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=og.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],a=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),a.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vC(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:i})}}/**
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
 */function ns(i){i=Kn(i,gt);const e=Kn(i.firestore,ts);return iC(Ng(e),i._key).then((n=>fT(e,i,n)))}uo._jsonSchemaVersion="firestore/querySnapshot/1.0",uo._jsonSchema={type:Rt("string",uo._jsonSchemaVersion),bundleSource:Rt("string","QuerySnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class uT extends yC{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function hT(i,e,n){i=Kn(i,gt);const a=Kn(i.firestore,ts),o=cT(i.converter,e,n);return zg(a,[eT(Of(a),"setDoc",i._key,o,i.converter!==null,n).toMutation(i._key,$n.none())])}function af(i,e,n,...a){i=Kn(i,gt);const o=Kn(i.firestore,ts),c=Of(o);let f;return f=typeof(e=kt(e))=="string"||e instanceof Nf?fC(c,"updateDoc",i._key,e,n,a):hC(c,"updateDoc",i._key,e),zg(o,[f.toMutation(i._key,$n.exists(!0))])}function Lg(i,e){const n=Kn(i.firestore,ts),a=Jn(i),o=cT(i.converter,e);return zg(n,[eT(Of(i.firestore),"addDoc",a._key,o,i.converter!==null,{}).toMutation(a._key,$n.exists(!1))]).then((()=>a))}function Ug(i,...e){i=kt(i);let n={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||o2(e[a])||(n=e[a++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(o2(e[a])){const m=e[a];e[a]=m.next?.bind(m),e[a+1]=m.error?.bind(m),e[a+2]=m.complete?.bind(m)}let c,f,p;if(i instanceof gt)f=Kn(i.firestore,ts),p=bf(i._key.path),c={next:m=>{e[a]&&e[a](fT(f,i,m))},error:e[a+1],complete:e[a+2]};else{const m=Kn(i,os);f=Kn(m.firestore,ts),p=m._query;const g=new uT(f);c={next:_=>{e[a]&&e[a](new uo(f,g,m,_))},error:e[a+1],complete:e[a+2]},gC(i._query)}return(function(g,_,T,w){const x=new KE(w),O=new UE(_,x,T);return g.asyncQueue.enqueueAndForget((async()=>jE(await Mm(g),O))),()=>{x.Nu(),g.asyncQueue.enqueueAndForget((async()=>LE(await Mm(g),O)))}})(Ng(f),p,o,c)}function zg(i,e){return(function(a,o){const c=new Xi;return a.asyncQueue.enqueueAndForget((async()=>YI(await rC(a),o,c))),c.promise})(Ng(i),e)}function fT(i,e,n){const a=n.docs.get(e._key),o=new uT(i);return new Ka(i,o,e._key,a,new Ql(n.hasPendingWrites,n.fromCache),e.converter)}function dc(){return new Og("serverTimestamp")}(function(e,n=!0){(function(o){xo=o})(wo),ho(new Xa("firestore",((a,{instanceIdentifier:o,options:c})=>{const f=a.getProvider("app").getImmediate(),p=new ts(new f3(a.getProvider("auth-internal")),new m3(f,a.getProvider("app-check-internal")),(function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new de(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sc(g.options.projectId,_)})(f,o),f);return c={useFetchStreams:n,...c},p._setSettings(c),p}),"PUBLIC").setMultipleInstances(!0)),Ki(h_,f_,e),Ki(h_,f_,"esm2020")})();var _C="firebase",bC="12.1.0";/**
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
 */Ki(_C,bC,"app");const EC={apiKey:"AIzaSyAwNVpI9pwh7lCsh1C53JH8w991gmeUbKI",authDomain:"goldinc-7ed2f.firebaseapp.com",projectId:"goldinc-7ed2f",storageBucket:"goldinc-7ed2f.firebasestorage.app",messagingSenderId:"336738370359",appId:"1:336738370359:web:27be8e3965dac5215dd0b2"},TC=F2(EC),_o=l3(),cn=sC(TC),pc=300,wC=[{id:1,name:"BEGINNERS PLAN",profitPercent:5,min:200,max:19900,duration:7,description:"Perfect for beginners starting with gold investment"},{id:2,name:"MASTERS PLAN",profitPercent:30,min:2e4,max:99999,duration:14,description:"Ideal for consistent wealth accumulation"},{id:3,name:"PREMIUM PLAN",profitPercent:50,min:1e6,max:1/0,duration:30,description:"For premium investors building a substantial portfolio"}],dT=[{type:"USDT (ERC20)",address:"0x2F549207342b44ADF00d25893580b23902f3137B"},{type:"TRON",address:"TNyKcnXh9GhANHaCgQyRdnXGmMc72ykQFC"},{type:"DOGECOIN",address:"D7whXjWwZzsXqnfZdy3rSkBtvTbyefr4d4"}],SC=({user:i})=>{const e=Eo(),[n,a]=B.useState({}),[o,c]=B.useState(!0),[f,p]=B.useState(null);return B.useEffect(()=>{(async()=>{if(i)try{const g=Jn(cn,"users",i.uid),_=await ns(g);_.exists()?a(_.data()):p("Profile data not found.")}catch(g){p("Failed to fetch profile data."),console.error(g)}c(!1)})()},[i]),o?y.jsx("div",{className:"loading",children:"Loading profile..."}):f?y.jsx("div",{className:"error-message",children:f}):y.jsxs("div",{className:"profile-container",children:[y.jsx("h2",{className:"section-title",children:"User Profile"}),y.jsxs("div",{className:"profile-grid",children:[y.jsxs("div",{className:"profile-card",children:[y.jsx("strong",{children:"Full Name:"})," ",y.jsx("span",{children:n.fullName||"N/A"})]}),y.jsxs("div",{className:"profile-card",children:[y.jsx("strong",{children:"Email:"})," ",y.jsx("span",{children:i.email})]}),y.jsxs("div",{className:"profile-card",children:[y.jsx("strong",{children:"Username:"})," ",y.jsx("span",{children:n.username||"N/A"})]}),y.jsxs("div",{className:"profile-card",children:[y.jsx("strong",{children:"Phone:"})," ",y.jsx("span",{children:n.phone||"N/A"})]}),y.jsxs("div",{className:"profile-card",children:[y.jsx("strong",{children:"Location:"})," ",y.jsx("span",{children:n.location||"N/A"})]}),y.jsxs("div",{className:"profile-card",children:[y.jsx("strong",{children:"Occupation:"})," ",y.jsx("span",{children:n.occupation||"N/A"})]})]}),y.jsxs("div",{className:"bio-card",children:[y.jsx("strong",{children:"Bio:"}),y.jsx("p",{children:n.bio||"No bio provided."})]}),y.jsx("button",{className:"btn-primary",onClick:()=>e("/edit-profile"),children:"Edit Profile"})]})},xC=({user:i})=>{const[e,n]=B.useState(null),[a,o]=B.useState(!1),c=async()=>{if(!i||!i.email){n("error");return}o(!0),n(null);try{await Y6(_o,i.email),n("success")}catch(f){console.error("Password reset error:",f),n("error")}finally{o(!1)}};return y.jsxs("div",{className:"settings-container",children:[y.jsxs("div",{className:"settings-card",children:[y.jsx("h2",{className:"section-title",children:"Account Settings"}),y.jsxs("div",{className:"setting-item",children:[y.jsx("h3",{children:"Password & Security"}),y.jsx("p",{children:"Request a password reset link to be sent to your email."}),y.jsx("button",{className:"btn-primary",onClick:c,disabled:a,children:a?"Sending...":"Reset Password"}),e==="success"&&y.jsxs("span",{className:"success-message",children:[y.jsx(ao,{style:{marginRight:"5px"}})," Password reset email sent! Check your inbox."]}),e==="error"&&y.jsxs("span",{className:"error-message",children:[y.jsx(Km,{style:{marginRight:"5px"}})," Failed to send reset email. Please try again."]})]})]}),y.jsxs("div",{className:"settings-card",children:[y.jsx("h2",{className:"section-title",children:"Notification Preferences"}),y.jsxs("div",{className:"setting-item",children:[y.jsx("p",{children:"Manage how you receive updates and alerts."}),y.jsx("button",{className:"btn-secondary",onClick:()=>alert("Notification settings update coming soon!"),children:"Configure Notifications"})]})]})]})},AC=({user:i,updateBalance:e})=>{const[n,a]=B.useState(null),[o,c]=B.useState(""),[f,p]=B.useState(null),[m,g]=B.useState(!1),[_,T]=B.useState(!1),[w,x]=B.useState(!1),[O,V]=B.useState(null),[M,U]=B.useState(0),[Y,q]=B.useState(!1),te=I=>{a(I),c(""),p(null),g(!1),T(!1),x(!1),V(null),U(1)},Z=()=>{const I=parseFloat(o);if(isNaN(I)||I<=0){V("Please enter a valid amount greater than 0");return}if(I<n.min||n.max!==1/0&&I>n.max){V(`Please enter a valid amount between $${n.min} and $${n.max===1/0?"unlimited":n.max}`);return}V(null),U(2)},J=I=>{p(I),U(3)},k=()=>{g(!0),U(4)},R=async()=>{if(!(!n||!o)){V(null);try{const I=parseFloat(o),C=n.profitPercent,D=(I*C/100).toFixed(0),ue=new Date,Re=new Date;Re.setDate(ue.getDate()+n.duration);const Q={userId:i.uid,type:"deposit",amount:I,profitPercent:`${C}%`,plan:n.name,planId:n.id,interest:`$${D}`,duration:n.duration,description:n.description,status:"completed",timestamp:dc(),startDate:et.fromDate(ue),nextPaymentDate:et.fromDate(Re),interestEarned:0,totalInterestEarned:0};await Lg(fc(cn,"transactions"),Q);const oe=Jn(cn,"users",i.uid),fe=await ns(oe);if(fe.exists()){const Ie=fe.data().balance||0,L=fe.data().goldBalance||0,ne=parseFloat(D)/pc;await af(oe,{balance:Ie+I,goldBalance:L+ne}),e(Ie+I,L+ne)}x(!0),U(0),a(null),g(!1),T(!1)}catch(I){V("Failed to process transaction. Please try again."),console.error(I)}}},N=async I=>{I.target.files[0]&&(T(!0),await R())},P=()=>{f?.address&&(navigator.clipboard.writeText(f.address),q(!0),setTimeout(()=>q(!1),2e3))};return y.jsxs("div",{className:"section-card",children:[y.jsx("h2",{className:"section-title",children:"Purchase Gold"}),O&&y.jsxs("span",{className:"error-message",children:[y.jsx(Km,{style:{marginRight:"5px"}})," ",O]}),w?y.jsxs("div",{children:[y.jsx("h3",{children:"Transaction Successful!"}),y.jsxs("span",{className:"success-message",children:[y.jsx(ao,{style:{marginRight:"5px"}})," Your deposit has been processed successfully!"]}),y.jsx("button",{className:"btn-secondary",onClick:()=>x(!1),children:"Back to Plans"})]}):M===0?y.jsxs(y.Fragment,{children:[y.jsx("p",{children:"Select a gold plan to purchase:"}),y.jsx("div",{className:"gold-plans-container",children:wC.map(I=>y.jsxs("div",{className:`gold-plan-card ${n?.id===I.id?"selected-plan":""}`,onClick:()=>te(I),children:[y.jsx(cm,{size:36,color:"#D4AF37"}),y.jsx("h3",{className:"plan-title",children:I.name}),y.jsxs("p",{className:"plan-price",children:["$",I.min,"  - ",I.max===1/0?"and above":I.max," USD"]}),y.jsxs("p",{className:"plan-description",children:[y.jsx("strong",{children:"Profit:"})," ",I.profitPercent,"% every ",I.duration," days"]}),y.jsx("p",{className:"plan-description",children:I.description})]},I.id))})]}):M===1?y.jsxs(y.Fragment,{children:[y.jsxs("h3",{children:["Selected Plan: ",n.name]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"deposit-amount",children:"Enter Deposit Amount:"}),y.jsx("input",{id:"deposit-amount",type:"number",value:o,onChange:I=>c(I.target.value),placeholder:`Enter amount between $${n.min} and $${n.max===1/0?"unlimited":n.max}`})]}),y.jsx("button",{className:"btn-primary",onClick:Z,children:"Proceed"}),y.jsx("button",{className:"btn-secondary",onClick:()=>U(0),children:"Back"})]}):M===2?y.jsxs(y.Fragment,{children:[y.jsx("h3",{children:"Select a Wallet"}),y.jsx("div",{className:"gold-plans-container",children:dT.map((I,C)=>y.jsxs("div",{className:`gold-plan-card ${f?.type===I.type?"selected-plan":""}`,onClick:()=>J(I),children:[y.jsx(cm,{size:36,color:"#D4AF37"}),y.jsx("h3",{className:"plan-title",children:I.type})]},C))}),y.jsx("button",{className:"btn-secondary",onClick:()=>U(1),children:"Back"})]}):M===3?y.jsxs(y.Fragment,{children:[y.jsxs("h3",{children:["Selected Plan: ",n.name]}),y.jsxs("p",{children:["Amount: $",o]}),y.jsxs("p",{children:["Please send exactly ",y.jsxs("strong",{children:["$",o]})," to the following address:"]}),y.jsxs("div",{className:"deposit-address",children:[y.jsx("p",{children:y.jsxs("strong",{children:[f.type," Address:"]})}),y.jsx("p",{children:f.address}),y.jsxs("button",{className:"btn-secondary",onClick:P,children:[Y?"Copied!":"Copy Address"," ",y.jsx(Qx,{style:{marginLeft:"5px"}})]})]}),y.jsx("p",{children:"After completing your transfer, click the button below to confirm."}),y.jsx("button",{className:"btn-primary",onClick:k,children:"I've Sent the Payment"}),y.jsx("button",{className:"btn-secondary",onClick:()=>U(2),children:"Choose Different Wallet"})]}):M===4?y.jsxs(y.Fragment,{children:[y.jsx("h3",{children:"Confirm Deposit"}),y.jsx("p",{children:"Upload a screenshot of the transaction (for verification, not stored):"}),y.jsx("input",{type:"file",accept:"image/*",onChange:N}),y.jsx("button",{className:"btn-secondary",onClick:()=>U(3),children:"Back"})]}):null]})},RC=({user:i,balance:e,goldBalance:n,updateBalance:a})=>{const[o,c]=B.useState(""),[f,p]=B.useState("usd"),[m,g]=B.useState(""),[_,T]=B.useState(!1),[w,x]=B.useState({text:"",type:""}),O=async()=>{if(x({text:"",type:""}),!o||!m){x({text:"Please select a wallet and enter an amount",type:"error"});return}const V=parseFloat(o);if(isNaN(V)||V<=0){x({text:"Please enter a valid amount",type:"error"});return}const M=f==="usd"?50:1;if(V<M){x({text:`Minimum withdrawal is $${M} USD or ${M}g Gold`,type:"error"});return}if(f==="usd"&&V>e){x({text:"Insufficient USD balance",type:"error"});return}if(f==="gold"&&V>n){x({text:"Insufficient gold balance",type:"error"});return}T(!0);try{const U=f==="usd"?V:V*pc,Y={userId:i.uid,type:"withdrawal",amount:U,profitPercent:f==="gold"?`${V}g`:"0g",status:"pending",walletType:m,timestamp:dc()};await Lg(fc(cn,"transactions"),Y);const q=Jn(cn,"users",i.uid),te=await ns(q);if(te.exists()){const Z=te.data().balance||0,J=te.data().goldBalance||0;await af(q,{balance:f==="usd"?Z-V:Z,goldBalance:f==="gold"?J-V:J}),a(f==="usd"?Z-V:Z,f==="gold"?J-V:J)}x({text:"Withdrawal request submitted successfully! It will be processed within 24 hours.",type:"success"}),c(""),g("")}catch(U){console.error("Error processing withdrawal:",U),x({text:"Failed to process withdrawal. Please try again.",type:"error"})}finally{T(!1)}};return y.jsxs("div",{className:"section-card",children:[y.jsx("h2",{className:"section-title",children:"Withdraw Funds"}),y.jsx("div",{className:"balance-info",children:y.jsxs("p",{children:["Available Balance: ",y.jsxs("strong",{children:["$",e.toLocaleString()," USD"]})," | ",y.jsxs("strong",{children:[n.toFixed(2),"g Gold"]})]})}),y.jsxs("div",{className:"withdraw-form",children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"withdraw-type",children:"Withdraw Type:"}),y.jsxs("select",{id:"withdraw-type",value:f,onChange:V=>{p(V.target.value),c(""),g("")},children:[y.jsx("option",{value:"usd",children:"USD"}),y.jsx("option",{value:"gold",children:"Gold"})]})]}),y.jsxs("div",{className:"form-group",children:[y.jsxs("label",{htmlFor:"withdraw-amount",children:["Amount to Withdraw ",f==="gold"?"(in grams)":"(in USD)",":"]}),y.jsx("input",{id:"withdraw-amount",type:"number",value:o,onChange:V=>c(V.target.value),placeholder:f==="usd"?"Enter USD amount":"Enter gold amount in grams"})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"destination-wallet",children:"Destination Wallet:"}),y.jsxs("select",{id:"destination-wallet",value:m,onChange:V=>g(V.target.value),children:[y.jsx("option",{value:"",children:"Select a wallet"}),dT.map((V,M)=>y.jsx("option",{value:V.type,children:V.type},M))]})]}),w.text&&y.jsxs("div",{className:w.type==="success"?"success-message":"error-message",children:[w.type==="success"?y.jsx(ao,{style:{marginRight:"5px"}}):y.jsx(Km,{style:{marginRight:"5px"}}),w.text]}),y.jsx("button",{className:"btn-primary",onClick:O,disabled:_||!o||!m,children:_?"Processing...":"Request Withdrawal"})]}),y.jsxs("div",{className:"withdrawal-info",children:[y.jsx("h4",{children:"Withdrawal Information:"}),y.jsxs("ul",{children:[y.jsx("li",{children:"Withdrawals are processed within 24 hours"}),y.jsxs("li",{children:["Gold withdrawals are converted to USD at ~$",pc,"/g"]}),y.jsx("li",{children:"Minimum withdrawal: $50 USD or 1g Gold"}),y.jsx("li",{children:"Network fees may apply"})]})]})]})},IC=({user:i})=>{const[e,n]=B.useState([]),[a,o]=B.useState(!0),[c,f]=B.useState(null);B.useEffect(()=>{if(!i)return;const m=sT(fc(cn,"transactions"),Ph("userId","==",i.uid),oT("timestamp","desc")),g=Ug(m,_=>{const T=[];_.forEach(w=>{T.push({id:w.id,...w.data()})}),n(T),o(!1)},_=>{f("Failed to load transaction history."),console.error(_),o(!1)});return()=>g()},[i]);const p=m=>{switch(m){case"completed":return"status-completed";case"processing":return"status-processing";default:return"status-pending"}};return a?y.jsx("div",{className:"section-card",children:"Loading transaction history..."}):c?y.jsx("div",{className:"section-card error-message",children:c}):y.jsxs("div",{className:"section-card",children:[y.jsx("h2",{className:"section-title",children:"Transaction History"}),e.length===0?y.jsx("p",{children:"No transactions yet."}):y.jsx("div",{className:"table-container",children:y.jsxs("table",{className:"transactions-table",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Type"}),y.jsx("th",{children:"Amount"}),y.jsx("th",{children:"Profit/Output"}),y.jsx("th",{children:"Date"}),y.jsx("th",{children:"Next Payment"}),y.jsx("th",{children:"Status"})]})}),y.jsx("tbody",{children:e.map(m=>y.jsxs("tr",{children:[y.jsxs("td",{children:[m.type==="deposit"?y.jsx(P2,{className:"icon-deposit"}):y.jsx(O2,{className:"icon-withdraw"}),m.type.charAt(0).toUpperCase()+m.type.slice(1),m.plan&&` (${m.plan})`]}),y.jsxs("td",{children:["$",m.amount.toLocaleString()]}),y.jsx("td",{children:m.interest?`${m.interest} (${m.profitPercent})`:m.profitPercent||"N/A"}),y.jsx("td",{children:m.timestamp?.toDate().toLocaleString()}),y.jsx("td",{children:m.nextPaymentDate?y.jsxs("span",{className:"next-payment",children:[y.jsx(Hx,{style:{marginRight:"5px"}}),m.nextPaymentDate.toDate().toLocaleDateString()]}):"N/A"}),y.jsx("td",{children:y.jsx("span",{className:`status-indicator ${p(m.status)}`,children:m.status.charAt(0).toUpperCase()+m.status.slice(1)})})]},m.id))})]})})]})},CC=({user:i})=>{const e=`https://yourwebsite.com/refer/${i.uid}`,[n,a]=B.useState(!1),o=()=>{navigator.clipboard.writeText(e),a(!0),setTimeout(()=>a(!1),2e3)};return y.jsxs("div",{className:"section-card",children:[y.jsx("h2",{className:"section-title",children:"Referral Program"}),y.jsx("p",{children:"Invite friends and earn rewards! Share your unique referral link."}),y.jsxs("div",{className:"referral-container",children:[y.jsx("strong",{children:"Your Referral Link:"}),y.jsx("p",{className:"referral-link",children:e}),y.jsx("button",{className:"btn-primary",onClick:o,children:n?"Copied!":"Copy Link"})]}),y.jsxs("div",{className:"referral-info",children:[y.jsx("h4",{children:"How It Works:"}),y.jsxs("ul",{children:[y.jsx("li",{children:"Share your link with friends"}),y.jsx("li",{children:"Earn 5% bonus on their first deposit"}),y.jsx("li",{children:"Track your referrals in your dashboard"})]})]})]})},NC=({user:i,updateBalance:e})=>{const[n,a]=B.useState([]),[o,c]=B.useState(!0),[f,p]=B.useState(null),[m,g]=B.useState(!1);B.useEffect(()=>{if(!i)return;const x=sT(fc(cn,"transactions"),Ph("userId","==",i.uid),Ph("type","==","deposit"),Ph("status","==","completed"),oT("timestamp","desc")),O=Ug(x,V=>{const M=[];V.forEach(U=>{M.push({id:U.id,...U.data()})}),a(M),c(!1)},V=>{p("Failed to load investments."),console.error(V),c(!1)});return()=>O()},[i]);const _=x=>{if(!x.startDate||!x.nextPaymentDate)return 0;const O=new Date,V=x.nextPaymentDate.toDate();return O>=V?x.amount*parseFloat(x.profitPercent)/100:0},T=async x=>{g(!0);try{const O=_(x);if(O<=0){p("No interest available to claim yet.");return}const V=Jn(cn,"users",i.uid),M=await ns(V);if(M.exists()){const q=M.data().balance||0,te=M.data().goldBalance||0,Z=O/pc;await af(V,{balance:q+O,goldBalance:te+Z}),e(q+O,te+Z)}const U=Jn(cn,"transactions",x.id),Y=new Date;Y.setDate(Y.getDate()+x.duration),await af(U,{nextPaymentDate:et.fromDate(Y),interestEarned:O,totalInterestEarned:(x.totalInterestEarned||0)+O}),await Lg(fc(cn,"transactions"),{userId:i.uid,type:"interest",amount:O,description:`Interest from ${x.plan}`,status:"completed",timestamp:dc()}),p(null)}catch(O){p("Failed to claim interest. Please try again."),console.error(O)}finally{g(!1)}},w=x=>x?x.toDate().toLocaleDateString():"N/A";return o?y.jsx("div",{className:"section-card",children:"Loading investments..."}):f?y.jsx("div",{className:"section-card error-message",children:f}):y.jsxs("div",{className:"section-card",children:[y.jsx("h2",{className:"section-title",children:"My Investments"}),n.length===0?y.jsx("p",{children:"No active investments yet."}):y.jsx("div",{className:"investments-container",children:n.map(x=>{const O=_(x),V=x.nextPaymentDate?x.nextPaymentDate.toDate():null,M=V?Math.ceil((V-new Date)/(1e3*60*60*24)):0;return y.jsxs("div",{className:"investment-card",children:[y.jsxs("div",{className:"investment-header",children:[y.jsx("h3",{children:x.plan}),y.jsxs("span",{className:"investment-amount",children:["$",x.amount.toLocaleString()]})]}),y.jsxs("div",{className:"investment-details",children:[y.jsxs("div",{className:"investment-detail",children:[y.jsx("span",{className:"detail-label",children:"Profit Rate:"}),y.jsx("span",{className:"detail-value",children:x.profitPercent})]}),y.jsxs("div",{className:"investment-detail",children:[y.jsx("span",{className:"detail-label",children:"Duration:"}),y.jsxs("span",{className:"detail-value",children:[x.duration," days"]})]}),y.jsxs("div",{className:"investment-detail",children:[y.jsx("span",{className:"detail-label",children:"Start Date:"}),y.jsx("span",{className:"detail-value",children:w(x.startDate)})]}),y.jsxs("div",{className:"investment-detail",children:[y.jsx("span",{className:"detail-label",children:"Next Payment:"}),y.jsx("span",{className:"detail-value",children:w(x.nextPaymentDate)})]}),y.jsxs("div",{className:"investment-detail",children:[y.jsx("span",{className:"detail-label",children:"Days Until Payment:"}),y.jsx("span",{className:"detail-value",children:M>0?M:0})]}),y.jsxs("div",{className:"investment-detail",children:[y.jsx("span",{className:"detail-label",children:"Interest Available:"}),y.jsxs("span",{className:"detail-value",children:["$",O.toFixed(2)]})]}),y.jsxs("div",{className:"investment-detail",children:[y.jsx("span",{className:"detail-label",children:"Total Interest Earned:"}),y.jsxs("span",{className:"detail-value",children:["$",(x.totalInterestEarned||0).toFixed(2)]})]})]}),O>0&&y.jsx("button",{className:"btn-primary",onClick:()=>T(x),disabled:m,children:m?"Processing...":"Claim Interest"})]},x.id)})})]})},DC=()=>{const i=Eo(),[e,n]=B.useState(null),[a,o]=B.useState(null),[c,f]=B.useState("dashboard"),[p,m]=B.useState(0),[g,_]=B.useState(0),[T,w]=B.useState(!1),[x,O]=B.useState(!0),[V,M]=B.useState(null);B.useEffect(()=>{const te=vb(_o,Z=>{if(Z){n(Z);const J=Jn(cn,"users",Z.uid),k=Ug(J,R=>{if(R.exists()){const N=R.data();o(N),m(N.balance||0),_(N.goldBalance||0),O(!1)}else M("User data not found."),O(!1)},R=>{M("Failed to load user data."),console.error(R),O(!1)});return()=>k()}else i("/login")});return()=>te()},[i]);const U=(te,Z)=>{m(te),_(Z)},Y=async()=>{try{await W6(_o),i("/login")}catch(te){console.error("Logout error:",te.message),M("Failed to logout. Please try again.")}};if(x)return y.jsx("div",{className:"loading",children:"Loading..."});if(V||!e||!a)return y.jsx("div",{className:"error-message",children:V||"Failed to load dashboard."});const q=()=>{switch(c){case"dashboard":return y.jsxs("div",{className:"overview-container",children:[y.jsxs("div",{className:"card",children:[y.jsx("h3",{children:"Account Balance"}),y.jsxs("p",{className:"metric",children:["$",p.toLocaleString()]}),y.jsx("p",{className:"subtext",children:"Available USD"})]}),y.jsxs("div",{className:"card",children:[y.jsx("h3",{children:"Gold Holdings"}),y.jsxs("p",{className:"metric",children:[g.toFixed(2),"g"]}),y.jsx("p",{className:"subtext",children:"Pure Gold"})]}),y.jsxs("div",{className:"card",children:[y.jsx("h3",{children:"Total Value"}),y.jsxs("p",{className:"metric",children:["$",(p+g*pc).toLocaleString()]}),y.jsx("p",{className:"subtext",children:"Based on current gold prices"})]}),y.jsxs("div",{className:"section-card",children:[y.jsx("h2",{className:"section-title",children:"Recent Activity"}),y.jsxs("ul",{className:"activity-list",children:[y.jsxs("li",{children:[y.jsx(ao,{className:"activity-icon"})," Account created ",y.jsx("span",{className:"activity-time",children:"1 week ago"})]}),p>0&&y.jsxs("li",{children:[y.jsx(ao,{className:"activity-icon"})," Deposit of $",p.toLocaleString()," ",y.jsx("span",{className:"activity-time",children:"Recently"})]}),g>0&&y.jsxs("li",{children:[y.jsx(ao,{className:"activity-icon"})," Purchased ",g.toFixed(2),"g of gold ",y.jsx("span",{className:"activity-time",children:"Recently"})]})]})]})]});case"deposit":return y.jsx(AC,{user:e,updateBalance:U});case"withdraw":return y.jsx(RC,{user:e,balance:p,goldBalance:g,updateBalance:U});case"history":return y.jsx(IC,{user:e});case"investments":return y.jsx(NC,{user:e,updateBalance:U});case"referral":return y.jsx(CC,{user:e});case"profile":return y.jsx(SC,{user:e});case"settings":return y.jsx(xC,{user:e});default:return null}};return y.jsxs("div",{className:"dashboard-container",children:[y.jsxs("div",{className:`sidebar ${T?"mobile-open":""}`,children:[y.jsxs("div",{className:"sidebar-header",children:[y.jsx(n4,{size:24,className:"sidebar-icon"}),y.jsx("h2",{className:"gold-text",children:"MyWallet"})]}),y.jsx("button",{className:"mobile-close-btn",onClick:()=>w(!1),children:y.jsx(Jx,{})}),y.jsxs("ul",{className:"nav-list",children:[y.jsxs("li",{className:`nav-item ${c==="dashboard"?"nav-item-active":""}`,onClick:()=>{f("dashboard"),w(!1)},children:[y.jsx(qx,{})," ",y.jsx("span",{children:"Dashboard"})]}),y.jsxs("li",{className:`nav-item ${c==="deposit"?"nav-item-active":""}`,onClick:()=>{f("deposit"),w(!1)},children:[y.jsx(P2,{})," ",y.jsx("span",{children:"Buy Gold"})]}),y.jsxs("li",{className:`nav-item ${c==="withdraw"?"nav-item-active":""}`,onClick:()=>{f("withdraw"),w(!1)},children:[y.jsx(O2,{})," ",y.jsx("span",{children:"Withdraw"})]}),y.jsxs("li",{className:`nav-item ${c==="investments"?"nav-item-active":""}`,onClick:()=>{f("investments"),w(!1)},children:[y.jsx(cm,{})," ",y.jsx("span",{children:"My Investments"})]}),y.jsxs("li",{className:`nav-item ${c==="history"?"nav-item-active":""}`,onClick:()=>{f("history"),w(!1)},children:[y.jsx(Xx,{})," ",y.jsx("span",{children:"History"})]}),y.jsxs("li",{className:`nav-item ${c==="referral"?"nav-item-active":""}`,onClick:()=>{f("referral"),w(!1)},children:[y.jsx(e4,{})," ",y.jsx("span",{children:"Referral"})]}),y.jsxs("li",{className:`nav-item ${c==="profile"?"nav-item-active":""}`,onClick:()=>{f("profile"),w(!1)},children:[y.jsx(t4,{})," ",y.jsx("span",{children:"Profile"})]}),y.jsxs("li",{className:`nav-item ${c==="settings"?"nav-item-active":""}`,onClick:()=>{f("settings"),w(!1)},children:[y.jsx(Yx,{})," ",y.jsx("span",{children:"Settings"})]})]}),y.jsxs("div",{className:"logout-btn",onClick:Y,children:[y.jsx(Zx,{})," ",y.jsx("span",{children:"Logout"})]})]}),y.jsxs("div",{className:"main-content",children:[y.jsxs("div",{className:"header",children:[y.jsxs("div",{className:"header-left",children:[y.jsx("button",{className:"mobile-menu-btn",onClick:()=>w(!0),children:y.jsx(zx,{})}),y.jsx("h1",{className:"title",children:c==="dashboard"?"Dashboard":c==="deposit"?"Buy Gold":c.charAt(0).toUpperCase()+c.slice(1)})]}),y.jsxs("span",{className:"user-info",children:["Balance: ",y.jsxs("strong",{children:["$",p.toLocaleString()]})," | Gold: ",y.jsxs("strong",{children:[g.toFixed(2),"g"]})]})]}),y.jsx("div",{className:"content-area",children:q()})]}),y.jsx("style",{jsx:!0,children:`
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
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
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
  margin-right: 15px;
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
  z-index: 90;
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
  color: #2c3e50;
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
  padding-bottom: 15px;
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
  border: 1px solid #e9ecef;
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
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  border: 1px solid #f1f3f4;
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

.plan-description {
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
  background: #f8f9fa;
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
  margin-bottom: 8px;
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
  color: #155724;
}

.status-processing {
  background: #CCE5FF;
  color: #004085;
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
  border-radius: 16px;
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
  margin: 15px 0 0 0;
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
    grid-template-columns: 1fr;
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
      `})]})},OC=()=>{const[i,e]=B.useState(""),[n,a]=B.useState(""),[o,c]=B.useState(""),f=Eo(),p=_=>_&&typeof _.fullName=="string"&&_.fullName.trim().length>1&&Array.isArray(_.wallets)&&_.wallets.length>0,m=async _=>{const T=Jn(cn,"users",_.uid),w=await ns(T),x=w.exists()?w.data():{};p(x)?f("/dashboard"):f("/profile")},g=async _=>{_.preventDefault();try{const w=(await K6(_o,n,o)).user;await m(w)}catch(T){console.error("Login error:",T.message),e("Login failed. Check your credentials.")}};return y.jsxs("div",{className:"body",children:[y.jsx(Qm,{}),y.jsxs("div",{className:"page",children:[y.jsx("h1",{className:"h1",children:"Login"}),y.jsxs("form",{onSubmit:g,className:"login-form",children:[y.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:_=>a(_.target.value),placeholder:"Enter your email"}),y.jsx("input",{className:"input",required:!0,type:"password",value:o,onChange:_=>c(_.target.value),placeholder:"Enter your password"}),y.jsx("button",{type:"submit",className:"btn btn1",children:"Login"}),y.jsxs("p",{children:["Don't have an account? ",y.jsx(ia,{to:"/signup",className:"Login-txt",children:"Signup"})]}),i&&y.jsx("span",{className:"error-text",children:i})]})]})]})},PC=()=>{const[i,e]=B.useState(""),[n,a]=B.useState(""),[o,c]=B.useState(""),[f,p]=B.useState(""),m=Eo(),g=async _=>{if(_.preventDefault(),f.length<6){e("Password must be at least 6 characters");return}try{const w=(await Q6(_o,n,f)).user;await hT(Jn(cn,"users",w.uid),{fullName:o,email:n,createdAt:new Date,wallets:[]}),sessionStorage.setItem("newSignup","true"),m("/profile")}catch(T){console.error("Signup error:",T.message),e("Signup failed. Try again.")}};return y.jsxs("div",{className:"body",children:[y.jsx(Qm,{}),y.jsxs("div",{className:"page",children:[y.jsx("h1",{className:"h1",children:"Signup"}),y.jsxs("form",{onSubmit:g,className:"signup-form",children:[y.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:_=>a(_.target.value),placeholder:"Enter your email"}),y.jsx("input",{className:"input",required:!0,type:"text",value:o,onChange:_=>c(_.target.value),placeholder:"Enter your name"}),y.jsx("input",{className:"input",required:!0,type:"password",value:f,onChange:_=>p(_.target.value),placeholder:"Enter your password"}),y.jsx("button",{type:"submit",className:"btn btn1",children:"Sign Up"}),y.jsxs("p",{children:["Already have an account? ",y.jsx(ia,{to:"/login",className:"Login-txt",children:"Login"})]}),i&&y.jsx("span",{className:"error-text",children:i})]})]})]})},kC=()=>{const[i,e]=B.useState(null),[n,a]=B.useState(null),[o,c]=B.useState(!0),[f,p]=B.useState(null),[m,g]=B.useState("USD"),[_,T]=B.useState(3e4),[w,x]=B.useState([]),[O,V]=B.useState(!1),[M,U]=B.useState(5),[Y,q]=B.useState(null),[te,Z]=B.useState("connecting"),J=B.useRef(),k=B.useRef(),R=B.useRef();B.useEffect(()=>()=>{R.current&&clearTimeout(R.current)},[]);const N=async()=>{try{if(c(!0),p(null),Z("connecting"),await new Promise(fe=>setTimeout(fe,800+Math.random()*700)),Math.random()<.1)throw new Error("API server unavailable");const Q=1950+(Math.random()*50-25),oe=parseFloat(Q.toFixed(2));J.current?(J.current.classList.add("price-updating"),setTimeout(()=>{i!==null&&a(i),e(oe),q(new Date),Z("connected"),J.current&&J.current.classList.remove("price-updating")},500)):(e(oe),q(new Date),Z("connected")),x(fe=>[...fe,{price:oe,timestamp:new Date}].slice(-20))}catch(Q){p("Failed to fetch gold prices. Please try again later."),Z("error"),console.error("Error fetching gold price:",Q),R.current&&clearTimeout(R.current),R.current=setTimeout(()=>{N()},1e4)}finally{c(!1)}};B.useEffect(()=>{n!==null&&i!==null&&Math.abs(i-n)>M&&O&&("Notification"in window&&Notification.permission==="granted"&&new Notification("Gold Price Alert",{body:`Gold price has ${i>n?"increased":"decreased"} by $${Math.abs(i-n).toFixed(2)}.`}),J.current&&(J.current.classList.add("price-alert"),setTimeout(()=>{J.current&&J.current.classList.remove("price-alert")},2e3)))},[i,n,M,O]),B.useEffect(()=>{N();const Q=setInterval(()=>{N()},_);return()=>{clearInterval(Q),R.current&&clearTimeout(R.current)}},[_,m]);const P=()=>{"Notification"in window?Notification.requestPermission().then(Q=>{V(Q==="granted"),Q!=="granted"&&alert("Please enable notifications for price alerts")}):alert("This browser does not support notifications")},I=()=>!n||i===null?0:((i-n)/n*100).toFixed(2),C=Q=>Q===null?"--":new Intl.NumberFormat("en-US",{style:"currency",currency:m,minimumFractionDigits:2}).format(Q),D=()=>{switch(te){case"connected":return{text:"Live",class:"status-live"};case"connecting":return{text:"Connecting...",class:"status-connecting"};case"error":return{text:"Connection Error",class:"status-error"};default:return{text:"Unknown",class:""}}},ue=()=>{if(w.length<2)return null;const Q=w.map(L=>L.price),oe=Math.max(...Q),fe=Math.min(...Q),Ie=oe-fe;return y.jsx("div",{className:"mini-chart",ref:k,children:w.map((L,ne)=>{if(ne===0)return null;const ce=Ie>0?(L.price-fe)/Ie*40:20,le=L.price>w[ne-1].price;return y.jsx("div",{className:`chart-bar ${le?"chart-bar-up":"chart-bar-down"}`,style:{height:`${ce}px`}},ne)})})},Re=D();return y.jsxs("div",{className:"gold-price-tracker",children:[y.jsxs("div",{className:"tracker-header",children:[y.jsxs("h2",{children:[y.jsx("span",{className:"gold-icon",children:"🥇"}),"Gold Price Tracker",y.jsxs("span",{className:`connection-status ${Re.class}`,children:["• ",Re.text]})]}),y.jsx("div",{className:"last-updated",children:Y?`Last updated: ${Y.toLocaleTimeString()}`:"Waiting for data..."})]}),o&&i===null&&y.jsxs("div",{className:"loading-state",children:[y.jsx("div",{className:"spinner"}),y.jsx("p",{children:"Loading current gold price..."})]}),f&&y.jsxs("div",{className:"error-state",children:[y.jsx("div",{className:"error-icon",children:"⚠️"}),y.jsx("p",{children:f}),y.jsx("p",{className:"retry-info",children:"Auto-retrying in 10 seconds..."}),y.jsx("button",{onClick:N,className:"retry-btn",children:"Retry Now"})]}),!o&&i!==null&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"price-display",children:[y.jsxs("div",{ref:J,className:"current-price",children:[C(i),n!==null&&y.jsxs("span",{className:`price-change ${i>=n?"positive":"negative"}`,children:[i>=n?"↗":"↘",C(Math.abs(i-n)),"(",I(),"%)"]})]}),ue()]}),y.jsxs("div",{className:"price-history",children:[y.jsx("h3",{children:"Recent Trends"}),y.jsx("div",{className:"history-bars",children:w.slice(-6).map((Q,oe)=>y.jsxs("div",{className:"history-bar",children:[y.jsx("div",{className:"bar-time",children:Q.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),y.jsx("div",{className:"bar-price",children:C(Q.price)})]},oe))})]})]}),y.jsxs("div",{className:"tracker-controls",children:[y.jsxs("div",{className:"control-group",children:[y.jsx("label",{children:"Currency:"}),y.jsxs("select",{value:m,onChange:Q=>g(Q.target.value),className:"control-select",children:[y.jsx("option",{value:"USD",children:"USD"}),y.jsx("option",{value:"EUR",children:"EUR"}),y.jsx("option",{value:"GBP",children:"GBP"}),y.jsx("option",{value:"JPY",children:"JPY"})]})]}),y.jsxs("div",{className:"control-group",children:[y.jsx("label",{children:"Refresh every:"}),y.jsxs("select",{value:_,onChange:Q=>T(Number(Q.target.value)),className:"control-select",children:[y.jsx("option",{value:1e4,children:"10 seconds"}),y.jsx("option",{value:3e4,children:"30 seconds"}),y.jsx("option",{value:6e4,children:"1 minute"}),y.jsx("option",{value:3e5,children:"5 minutes"})]})]}),y.jsx("div",{className:"control-group",children:y.jsxs("label",{className:"checkbox-label",children:[y.jsx("input",{type:"checkbox",checked:O,onChange:P}),y.jsx("span",{className:"checkmark"}),"Price alerts"]})}),O&&y.jsxs("div",{className:"control-group",children:[y.jsx("label",{children:"Alert threshold:"}),y.jsxs("select",{value:M,onChange:Q=>U(Number(Q.target.value)),className:"control-select",children:[y.jsx("option",{value:1,children:"$1.00"}),y.jsx("option",{value:5,children:"$5.00"}),y.jsx("option",{value:10,children:"$10.00"}),y.jsx("option",{value:25,children:"$25.00"})]})]})]}),y.jsx("style",{jsx:!0,children:`
        /* Gold Price Tracker Styles */
        .gold-price-tracker {
          background: linear-gradient(135deg, #1a2a3a 0%, #2c3e50 100%);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          color: white;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          max-width: 480px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        
        .gold-price-tracker::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
        }
        
        .tracker-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .tracker-header h2 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .gold-icon {
          font-size: 1.8rem;
        }
        
        .connection-status {
          font-size: 0.7rem;
          padding: 4px 8px;
          border-radius: 12px;
          margin-left: 10px;
          font-weight: 500;
        }
        
        .status-live {
          background: rgba(72, 187, 120, 0.2);
          color: #48bb78;
        }
        
        .status-connecting {
          background: rgba(246, 173, 85, 0.2);
          color: #f6ad55;
        }
        
        .status-error {
          background: rgba(245, 101, 101, 0.2);
          color: #f56565;
        }
        
        .last-updated {
          font-size: 0.85rem;
          color: #a0aec0;
        }
        
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
        }
        
        .spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255, 215, 0, 0.3);
          border-top: 3px solid #FFD700;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .error-state {
          background: rgba(220, 53, 69, 0.15);
          border: 1px solid rgba(220, 53, 69, 0.2);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          margin: 20px 0;
        }
        
        .error-icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        
        .retry-info {
          font-size: 0.9rem;
          margin: 8px 0;
          color: #a0aec0;
        }
        
        .retry-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          margin-top: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .retry-btn:hover {
          background: #bb2d3b;
          transform: translateY(-2px);
        }
        
        .price-display {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          margin: 20px 0;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 215, 0, 0.1);
        }
        
        .current-price {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 16px;
          transition: all 0.5s ease;
          background: linear-gradient(90deg, #FFD700, #DAA520, #FFD700);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShine 3s ease infinite;
        }
        
        @keyframes goldShine {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .price-updating {
          animation: pulseUpdate 0.5s ease;
        }
        
        @keyframes pulseUpdate {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .price-alert {
          animation: alertFlash 0.5s ease 4;
        }
        
        @keyframes alertFlash {
          0%, 100% { background-color: transparent; }
          50% { background-color: rgba(255, 215, 0, 0.2); }
        }
        
        .price-change {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          margin-top: 8px;
        }
        
        .price-change.positive {
          color: #48bb78;
        }
        
        .price-change.negative {
          color: #f56565;
        }
        
        .mini-chart {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 50px;
          gap: 4px;
          margin-top: 20px;
        }
        
        .chart-bar {
          width: 8px;
          border-radius: 3px 3px 0 0;
          transition: height 0.5s ease;
        }
        
        .chart-bar-up {
          background: linear-gradient(to top, #48bb78, #68d391);
        }
        
        .chart-bar-down {
          background: linear-gradient(to top, #f56565, #fc8181);
        }
        
        .price-history {
          margin: 24px 0;
        }
        
        .price-history h3 {
          font-size: 1.1rem;
          margin-bottom: 12px;
          color: #a0aec0;
        }
        
        .history-bars {
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }
        
        .history-bar {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 10px;
          text-align: center;
          flex: 1;
          min-width: 0;
          transition: transform 0.3s ease;
        }
        
        .history-bar:hover {
          transform: translateY(-5px);
          background: rgba(255, 215, 0, 0.1);
        }
        
        .bar-time {
          font-size: 0.75rem;
          color: #a0aec0;
          margin-bottom: 4px;
        }
        
        .bar-price {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .tracker-controls {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 24px;
        }
        
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .control-group label {
          font-size: 0.9rem;
          color: #a0aec0;
          font-weight: 500;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          padding-left: 30px;
          margin-bottom: 0;
        }
        
        .checkbox-label input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .checkbox-label:hover input ~ .checkmark {
          background-color: rgba(255, 255, 255, 0.15);
        }
        
        .checkbox-label input:checked ~ .checkmark {
          background-color: #FFD700;
        }
        
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }
        
        .checkbox-label input:checked ~ .checkmark:after {
          display: block;
        }
        
        .checkbox-label .checkmark:after {
          left: 7px;
          top: 3px;
          width: 5px;
          height: 10px;
          border: solid #1a2a3a;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
        
        .control-select {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 8px 12px;
          color: white;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        
        .control-select:focus {
          outline: none;
          border-color: #FFD700;
          box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
        }
        
        .control-group:last-child:nth-child(odd) {
          grid-column: 1 / -1;
        }
        
        /* Responsive Design */
        @media (max-width: 600px) {
          .gold-price-tracker {
            padding: 20px;
            border-radius: 12px;
          }
          
          .tracker-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          
          .tracker-header h2 {
            font-size: 1.3rem;
          }
          
          .last-updated {
            font-size: 0.8rem;
          }
          
          .current-price {
            font-size: 2.5rem;
          }
          
          .tracker-controls {
            grid-template-columns: 1fr;
          }
          
          .history-bars {
            overflow-x: auto;
            padding-bottom: 10px;
          }
          
          .history-bar {
            min-width: 80px;
          }
        }
        
        @media (max-width: 400px) {
          .current-price {
            font-size: 2rem;
          }
          
          .price-change {
            font-size: 0.9rem;
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: light) {
          .gold-price-tracker {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            color: #2d3748;
          }
          
          .last-updated {
            color: #718096;
          }
          
          .price-display {
            background: rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(0, 0, 0, 0.05);
          }
          
          .error-state {
            background: rgba(220, 53, 69, 0.05);
            border: 1px solid rgba(220, 53, 69, 0.1);
          }
          
          .history-bar {
            background: rgba(0, 0, 0, 0.03);
          }
          
          .control-select {
            background: rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(0, 0, 0, 0.1);
            color: #2d3748;
          }
          
          .checkmark {
            background-color: rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(0, 0, 0, 0.1);
          }
          
          .checkbox-label:hover input ~ .checkmark {
            background-color: rgba(0, 0, 0, 0.08);
          }
          
          .price-history h3 {
            color: #718096;
          }
          
          .bar-time {
            color: #718096;
          }
        }
      `})]})},MC=()=>{const i=Eo(),[e,n]=B.useState({fullName:"",username:"",location:"",dob:"",phone:"",gender:"",occupation:"",bio:"",btcWallet:"",ethWallet:"",usdtWallet:""}),[a,o]=B.useState(!0),[c,f]=B.useState(!1),[p,m]=B.useState(""),[g,_]=B.useState(""),[T,w]=B.useState(null),[x,O]=B.useState(!1),V=Y=>{const{name:q,value:te}=Y.target;n(Z=>({...Z,[q]:te}))};B.useEffect(()=>{O(!0);const Y=vb(_o,async q=>{if(!q){i("/login");return}w(q);try{const te=Jn(cn,"users",q.uid),Z=await ns(te);if(Z.exists()){const J=Z.data(),k=J.wallets&&J.wallets.find(P=>P.type==="btc")?.address||"",R=J.wallets&&J.wallets.find(P=>P.type==="eth")?.address||"",N=J.wallets&&J.wallets.find(P=>P.type==="usdt")?.address||"";n(P=>({...P,...J,btcWallet:k,ethWallet:R,usdtWallet:N}))}}catch(te){console.error("Failed to load profile:",te),m("Failed to load profile. Please try again.")}finally{o(!1)}});return()=>Y()},[i]);const M=()=>e.fullName.trim().length>1&&e.username.trim().length>1&&e.phone.trim().length>=10&&e.dob,U=async Y=>{if(Y.preventDefault(),!!T){if(!M()){m("Please fill in all required fields.");return}f(!0),m(""),_("");try{const q=Jn(cn,"users",T.uid),te=[];e.btcWallet&&te.push({type:"btc",address:e.btcWallet}),e.ethWallet&&te.push({type:"eth",address:e.ethWallet}),e.usdtWallet&&te.push({type:"usdt",address:e.usdtWallet});const Z={...e,email:T.email,wallets:te,updatedAt:dc()};delete Z.btcWallet,delete Z.ethWallet,delete Z.usdtWallet,(await ns(q)).data()?.createdAt||(Z.createdAt=dc()),await hT(q,Z,{merge:!0}),_("Profile updated successfully!"),setTimeout(()=>i("/dashboard"),1200)}catch(q){console.error("Save failed:",q),m("Could not save profile. Please try again.")}finally{f(!1)}}};return a?y.jsxs("div",{className:"loader-container",children:[y.jsx("div",{className:"spinner"}),y.jsx("p",{children:"Loading Profile..."})]}):y.jsxs("div",{className:"profile-page",children:[y.jsxs("div",{className:`profile-container ${x?"mounted":""}`,children:[y.jsx("h1",{className:"profile-title",children:"Complete Your Profile"}),y.jsx("form",{onSubmit:U,className:"profile-form",children:y.jsxs("div",{className:"form-grid",children:[["fullName","username"].map((Y,q)=>y.jsx("div",{className:"form-group animated-item",style:{animationDelay:`${q*.1}s`},children:y.jsx("input",{name:Y,type:"text",placeholder:Y==="fullName"?"Full Name *":"Username *",value:e[Y],onChange:V,required:!0,className:"form-input"})},Y)),y.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.2s"},children:y.jsx("input",{name:"location",type:"text",placeholder:"Location",value:e.location,onChange:V,className:"form-input"})}),y.jsxs("div",{className:"form-group animated-item",style:{animationDelay:"0.3s"},children:[y.jsx("label",{className:"input-label",children:"Date of Birth *"}),y.jsx("input",{name:"dob",type:"date",value:e.dob,onChange:V,className:"form-input",required:!0})]}),y.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.4s"},children:y.jsx("input",{name:"phone",type:"tel",placeholder:"Phone Number *",value:e.phone,onChange:V,required:!0,className:"form-input"})}),y.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.5s"},children:y.jsxs("select",{name:"gender",value:e.gender,onChange:V,className:"form-select",children:[y.jsx("option",{value:"",children:"Select Gender"}),y.jsx("option",{value:"Male",children:"Male"}),y.jsx("option",{value:"Female",children:"Female"}),y.jsx("option",{value:"Other",children:"Other"})]})}),y.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.6s"},children:y.jsx("input",{name:"occupation",type:"text",placeholder:"Occupation",value:e.occupation,onChange:V,className:"form-input"})}),y.jsx("div",{className:"form-group full-width animated-item",style:{animationDelay:"0.7s"},children:y.jsx("textarea",{name:"bio",placeholder:"Bio (Tell us about yourself)",value:e.bio,onChange:V,rows:3,className:"form-textarea"})}),y.jsxs("div",{className:"wallet-section full-width animated-item",style:{animationDelay:"0.8s"},children:[y.jsx("h3",{className:"wallet-title",children:"Wallet Addresses"}),["btcWallet","ethWallet","usdtWallet"].map((Y,q)=>y.jsx("div",{className:"form-group",children:y.jsx("input",{name:Y,type:"text",placeholder:Y==="btcWallet"?"BTC Wallet Address":Y==="ethWallet"?"ETH Wallet Address":"USDT Wallet Address",value:e[Y],onChange:V,className:"form-input"})},Y))]}),p&&y.jsx("div",{className:"error-message full-width animated-item",children:p}),g&&y.jsx("div",{className:"success-message full-width animated-item",children:g}),y.jsxs("div",{className:"form-actions full-width animated-item",style:{animationDelay:"0.9s"},children:[y.jsx("button",{type:"button",onClick:()=>i("/dashboard"),className:"btn-secondary",children:"Cancel"}),y.jsx("button",{type:"submit",className:"btn-primary",disabled:c||!M(),children:c?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"btn-spinner"}),"Saving..."]}):"Save Profile"})]})]})})]}),y.jsx("style",{jsx:!0,children:`
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
      `})]})},VC=()=>y.jsxs("div",{style:Eh.container,children:[y.jsx("h1",{style:Eh.heading,children:"404 - Page Not Found"}),y.jsx("p",{style:Eh.text,children:"The page you are looking for doesn't exist."}),y.jsx(ia,{to:"/",style:Eh.button,children:"Go Home"})]}),Eh={container:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#f8f9fa",color:"#333",textAlign:"center"},heading:{fontSize:"2.5rem",marginBottom:"10px"},text:{fontSize:"1.2rem",marginBottom:"20px"},button:{padding:"10px 20px",background:"#007bff",color:"#fff",borderRadius:"5px",textDecoration:"none",fontWeight:"bold"}};function jC(){return y.jsxs(y.Fragment,{children:[y.jsx(Qm,{}),y.jsx(Nx,{}),y.jsx(r4,{}),y.jsx(a4,{}),y.jsx(c4,{})]})}function LC(){return y.jsxs(jS,{children:[y.jsx(zi,{path:"/",element:y.jsx(jC,{})}),y.jsx(zi,{path:"/login",element:y.jsx(OC,{})}),y.jsx(zi,{path:"/signup",element:y.jsx(PC,{})}),y.jsx(zi,{path:"/dashboard",element:y.jsx(DC,{})}),y.jsx(zi,{path:"/profile",element:y.jsx(MC,{})}),y.jsx(zi,{path:"/stock",element:y.jsx(kC,{})}),y.jsx(zi,{path:"*",element:y.jsx(VC,{})})," "]})}Qw.createRoot(document.getElementById("root")).render(y.jsx(B.StrictMode,{children:y.jsx(sx,{children:y.jsx(LC,{})})}));
