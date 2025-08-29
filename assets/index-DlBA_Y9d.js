(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function qT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var gm={exports:{}},Vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x1;function FT(){if(x1)return Vl;x1=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,c){var d=null;if(c!==void 0&&(d=""+c),o.key!==void 0&&(d=""+o.key),"key"in o){c={};for(var m in o)m!=="key"&&(c[m]=o[m])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:d,ref:o!==void 0?o:null,props:c}}return Vl.Fragment=e,Vl.jsx=n,Vl.jsxs=n,Vl}var S1;function HT(){return S1||(S1=1,gm.exports=FT()),gm.exports}var p=HT(),ym={exports:{}},Ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A1;function GT(){if(A1)return Ae;A1=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,z={};function q(O,te,ce){this.props=O,this.context=te,this.refs=z,this.updater=ce||D}q.prototype.isReactComponent={},q.prototype.setState=function(O,te){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,te,"setState")},q.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function K(){}K.prototype=q.prototype;function ie(O,te,ce){this.props=O,this.context=te,this.refs=z,this.updater=ce||D}var ne=ie.prototype=new K;ne.constructor=ie,U(ne,q.prototype),ne.isPureReactComponent=!0;var le=Array.isArray,se={H:null,A:null,T:null,S:null,V:null},me=Object.prototype.hasOwnProperty;function V(O,te,ce,re,ye,Ce){return ce=Ce.ref,{$$typeof:r,type:O,key:te,ref:ce!==void 0?ce:null,props:Ce}}function A(O,te){return V(O.type,te,void 0,void 0,void 0,O.props)}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function M(O){var te={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ce){return te[ce]})}var C=/\/+/g;function j(O,te){return typeof O=="object"&&O!==null&&O.key!=null?M(""+O.key):te.toString(36)}function N(){}function rt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(te){O.status==="pending"&&(O.status="fulfilled",O.value=te)},function(te){O.status==="pending"&&(O.status="rejected",O.reason=te)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function qe(O,te,ce,re,ye){var Ce=typeof O;(Ce==="undefined"||Ce==="boolean")&&(O=null);var we=!1;if(O===null)we=!0;else switch(Ce){case"bigint":case"string":case"number":we=!0;break;case"object":switch(O.$$typeof){case r:case e:we=!0;break;case b:return we=O._init,qe(we(O._payload),te,ce,re,ye)}}if(we)return ye=ye(O),we=re===""?"."+j(O,0):re,le(ye)?(ce="",we!=null&&(ce=we.replace(C,"$&/")+"/"),qe(ye,te,ce,"",function($n){return $n})):ye!=null&&(R(ye)&&(ye=A(ye,ce+(ye.key==null||O&&O.key===ye.key?"":(""+ye.key).replace(C,"$&/")+"/")+we)),te.push(ye)),1;we=0;var Ot=re===""?".":re+":";if(le(O))for(var tt=0;tt<O.length;tt++)re=O[tt],Ce=Ot+j(re,tt),we+=qe(re,te,ce,Ce,ye);else if(tt=S(O),typeof tt=="function")for(O=tt.call(O),tt=0;!(re=O.next()).done;)re=re.value,Ce=Ot+j(re,tt++),we+=qe(re,te,ce,Ce,ye);else if(Ce==="object"){if(typeof O.then=="function")return qe(rt(O),te,ce,re,ye);throw te=String(O),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return we}function $(O,te,ce){if(O==null)return O;var re=[],ye=0;return qe(O,re,"","",function(Ce){return te.call(ce,Ce,ye++)}),re}function oe(O){if(O._status===-1){var te=O._result;te=te(),te.then(function(ce){(O._status===0||O._status===-1)&&(O._status=1,O._result=ce)},function(ce){(O._status===0||O._status===-1)&&(O._status=2,O._result=ce)}),O._status===-1&&(O._status=0,O._result=te)}if(O._status===1)return O._result.default;throw O._result}var fe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ve(){}return Ae.Children={map:$,forEach:function(O,te,ce){$(O,function(){te.apply(this,arguments)},ce)},count:function(O){var te=0;return $(O,function(){te++}),te},toArray:function(O){return $(O,function(te){return te})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ae.Component=q,Ae.Fragment=n,Ae.Profiler=o,Ae.PureComponent=ie,Ae.StrictMode=s,Ae.Suspense=g,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(O){return se.H.useMemoCache(O)}},Ae.cache=function(O){return function(){return O.apply(null,arguments)}},Ae.cloneElement=function(O,te,ce){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var re=U({},O.props),ye=O.key,Ce=void 0;if(te!=null)for(we in te.ref!==void 0&&(Ce=void 0),te.key!==void 0&&(ye=""+te.key),te)!me.call(te,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&te.ref===void 0||(re[we]=te[we]);var we=arguments.length-2;if(we===1)re.children=ce;else if(1<we){for(var Ot=Array(we),tt=0;tt<we;tt++)Ot[tt]=arguments[tt+2];re.children=Ot}return V(O.type,ye,void 0,void 0,Ce,re)},Ae.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},Ae.createElement=function(O,te,ce){var re,ye={},Ce=null;if(te!=null)for(re in te.key!==void 0&&(Ce=""+te.key),te)me.call(te,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ye[re]=te[re]);var we=arguments.length-2;if(we===1)ye.children=ce;else if(1<we){for(var Ot=Array(we),tt=0;tt<we;tt++)Ot[tt]=arguments[tt+2];ye.children=Ot}if(O&&O.defaultProps)for(re in we=O.defaultProps,we)ye[re]===void 0&&(ye[re]=we[re]);return V(O,Ce,void 0,void 0,null,ye)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(O){return{$$typeof:m,render:O}},Ae.isValidElement=R,Ae.lazy=function(O){return{$$typeof:b,_payload:{_status:-1,_result:O},_init:oe}},Ae.memo=function(O,te){return{$$typeof:y,type:O,compare:te===void 0?null:te}},Ae.startTransition=function(O){var te=se.T,ce={};se.T=ce;try{var re=O(),ye=se.S;ye!==null&&ye(ce,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(Ve,fe)}catch(Ce){fe(Ce)}finally{se.T=te}},Ae.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},Ae.use=function(O){return se.H.use(O)},Ae.useActionState=function(O,te,ce){return se.H.useActionState(O,te,ce)},Ae.useCallback=function(O,te){return se.H.useCallback(O,te)},Ae.useContext=function(O){return se.H.useContext(O)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(O,te){return se.H.useDeferredValue(O,te)},Ae.useEffect=function(O,te,ce){var re=se.H;if(typeof ce=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(O,te)},Ae.useId=function(){return se.H.useId()},Ae.useImperativeHandle=function(O,te,ce){return se.H.useImperativeHandle(O,te,ce)},Ae.useInsertionEffect=function(O,te){return se.H.useInsertionEffect(O,te)},Ae.useLayoutEffect=function(O,te){return se.H.useLayoutEffect(O,te)},Ae.useMemo=function(O,te){return se.H.useMemo(O,te)},Ae.useOptimistic=function(O,te){return se.H.useOptimistic(O,te)},Ae.useReducer=function(O,te,ce){return se.H.useReducer(O,te,ce)},Ae.useRef=function(O){return se.H.useRef(O)},Ae.useState=function(O){return se.H.useState(O)},Ae.useSyncExternalStore=function(O,te,ce){return se.H.useSyncExternalStore(O,te,ce)},Ae.useTransition=function(){return se.H.useTransition()},Ae.version="19.1.1",Ae}var R1;function dp(){return R1||(R1=1,ym.exports=GT()),ym.exports}var k=dp();const Qs=qT(k);var vm={exports:{}},kl={},_m={exports:{}},Em={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C1;function YT(){return C1||(C1=1,(function(r){function e($,oe){var fe=$.length;$.push(oe);e:for(;0<fe;){var Ve=fe-1>>>1,O=$[Ve];if(0<o(O,oe))$[Ve]=oe,$[fe]=O,fe=Ve;else break e}}function n($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var oe=$[0],fe=$.pop();if(fe!==oe){$[0]=fe;e:for(var Ve=0,O=$.length,te=O>>>1;Ve<te;){var ce=2*(Ve+1)-1,re=$[ce],ye=ce+1,Ce=$[ye];if(0>o(re,fe))ye<O&&0>o(Ce,re)?($[Ve]=Ce,$[ye]=fe,Ve=ye):($[Ve]=re,$[ce]=fe,Ve=ce);else if(ye<O&&0>o(Ce,fe))$[Ve]=Ce,$[ye]=fe,Ve=ye;else break e}}return oe}function o($,oe){var fe=$.sortIndex-oe.sortIndex;return fe!==0?fe:$.id-oe.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();r.unstable_now=function(){return d.now()-m}}var g=[],y=[],b=1,x=null,S=3,D=!1,U=!1,z=!1,q=!1,K=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function le($){for(var oe=n(y);oe!==null;){if(oe.callback===null)s(y);else if(oe.startTime<=$)s(y),oe.sortIndex=oe.expirationTime,e(g,oe);else break;oe=n(y)}}function se($){if(z=!1,le($),!U)if(n(g)!==null)U=!0,me||(me=!0,j());else{var oe=n(y);oe!==null&&qe(se,oe.startTime-$)}}var me=!1,V=-1,A=5,R=-1;function M(){return q?!0:!(r.unstable_now()-R<A)}function C(){if(q=!1,me){var $=r.unstable_now();R=$;var oe=!0;try{e:{U=!1,z&&(z=!1,ie(V),V=-1),D=!0;var fe=S;try{t:{for(le($),x=n(g);x!==null&&!(x.expirationTime>$&&M());){var Ve=x.callback;if(typeof Ve=="function"){x.callback=null,S=x.priorityLevel;var O=Ve(x.expirationTime<=$);if($=r.unstable_now(),typeof O=="function"){x.callback=O,le($),oe=!0;break t}x===n(g)&&s(g),le($)}else s(g);x=n(g)}if(x!==null)oe=!0;else{var te=n(y);te!==null&&qe(se,te.startTime-$),oe=!1}}break e}finally{x=null,S=fe,D=!1}oe=void 0}}finally{oe?j():me=!1}}}var j;if(typeof ne=="function")j=function(){ne(C)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,rt=N.port2;N.port1.onmessage=C,j=function(){rt.postMessage(null)}}else j=function(){K(C,0)};function qe($,oe){V=K(function(){$(r.unstable_now())},oe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function($){$.callback=null},r.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<$?Math.floor(1e3/$):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function($){switch(S){case 1:case 2:case 3:var oe=3;break;default:oe=S}var fe=S;S=oe;try{return $()}finally{S=fe}},r.unstable_requestPaint=function(){q=!0},r.unstable_runWithPriority=function($,oe){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var fe=S;S=$;try{return oe()}finally{S=fe}},r.unstable_scheduleCallback=function($,oe,fe){var Ve=r.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?Ve+fe:Ve):fe=Ve,$){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=fe+O,$={id:b++,callback:oe,priorityLevel:$,startTime:fe,expirationTime:O,sortIndex:-1},fe>Ve?($.sortIndex=fe,e(y,$),n(g)===null&&$===n(y)&&(z?(ie(V),V=-1):z=!0,qe(se,fe-Ve))):($.sortIndex=O,e(g,$),U||D||(U=!0,me||(me=!0,j()))),$},r.unstable_shouldYield=M,r.unstable_wrapCallback=function($){var oe=S;return function(){var fe=S;S=oe;try{return $.apply(this,arguments)}finally{S=fe}}}})(Em)),Em}var I1;function QT(){return I1||(I1=1,_m.exports=YT()),_m.exports}var bm={exports:{}},Xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1;function KT(){if(N1)return Xt;N1=1;var r=dp();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)y+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(g,y,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:g,containerInfo:y,implementation:b}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Xt.createPortal=function(g,y){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return c(g,y,null,b)},Xt.flushSync=function(g){var y=d.T,b=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=y,s.p=b,s.d.f()}},Xt.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},Xt.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Xt.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var b=y.as,x=m(b,y.crossOrigin),S=typeof y.integrity=="string"?y.integrity:void 0,D=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;b==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:D}):b==="script"&&s.d.X(g,{crossOrigin:x,integrity:S,fetchPriority:D,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Xt.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var b=m(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},Xt.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var b=y.as,x=m(b,y.crossOrigin);s.d.L(g,b,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Xt.preloadModule=function(g,y){if(typeof g=="string")if(y){var b=m(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},Xt.requestFormReset=function(g){s.d.r(g)},Xt.unstable_batchedUpdates=function(g,y){return g(y)},Xt.useFormState=function(g,y,b){return d.H.useFormState(g,y,b)},Xt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Xt.version="19.1.1",Xt}var D1;function $T(){if(D1)return bm.exports;D1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),bm.exports=KT(),bm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1;function XT(){if(O1)return kl;O1=1;var r=QT(),e=dp(),n=$T();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function d(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function g(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===a)return m(h),t;if(f===l)return m(h),i;f=f.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=f;else{for(var E=!1,T=h.child;T;){if(T===a){E=!0,a=h,l=f;break}if(T===l){E=!0,l=h,a=f;break}T=T.sibling}if(!E){for(T=f.child;T;){if(T===a){E=!0,a=f,l=h;break}if(T===l){E=!0,l=f,a=h;break}T=T.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),C=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=C&&t[C]||t["@@iterator"],typeof t=="function"?t:null)}var N=Symbol.for("react.client.reference");function rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===N?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case q:return"Profiler";case z:return"StrictMode";case se:return"Suspense";case me:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case ne:return(t.displayName||"Context")+".Provider";case ie:return(t._context.displayName||"Context")+".Consumer";case le:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return i=t.displayName||null,i!==null?i:rt(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return rt(t(i))}catch{}}return null}var qe=Array.isArray,$=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},Ve=[],O=-1;function te(t){return{current:t}}function ce(t){0>O||(t.current=Ve[O],Ve[O]=null,O--)}function re(t,i){O++,Ve[O]=t.current,t.current=i}var ye=te(null),Ce=te(null),we=te(null),Ot=te(null);function tt(t,i){switch(re(we,i),re(Ce,t),re(ye,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Z0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Z0(i),t=J0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ce(ye),re(ye,t)}function $n(){ce(ye),ce(Ce),ce(we)}function lr(t){t.memoizedState!==null&&re(Ot,t);var i=ye.current,a=J0(i,t.type);i!==a&&(re(Ce,t),re(ye,a))}function Ti(t){Ce.current===t&&(ce(ye),ce(Ce)),Ot.current===t&&(ce(Ot),Nl._currentValue=fe)}var as=Object.prototype.hasOwnProperty,os=r.unstable_scheduleCallback,ls=r.unstable_cancelCallback,Ro=r.unstable_shouldYield,Rc=r.unstable_requestPaint,wn=r.unstable_now,pd=r.unstable_getCurrentPriorityLevel,Co=r.unstable_ImmediatePriority,aa=r.unstable_UserBlockingPriority,cs=r.unstable_NormalPriority,gd=r.unstable_LowPriority,oa=r.unstable_IdlePriority,Io=r.log,Cc=r.unstable_setDisableYieldValue,ut=null,Ge=null;function hn(t){if(typeof Io=="function"&&Cc(t),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(ut,t)}catch{}}var Kt=Math.clz32?Math.clz32:us,Ic=Math.log,yd=Math.LN2;function us(t){return t>>>=0,t===0?32:31-(Ic(t)/yd|0)|0}var hs=256,ds=4194304;function Ln(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function la(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,f=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~f,l!==0?h=Ln(l):(E&=T,E!==0?h=Ln(E):a||(a=T&~t,a!==0&&(h=Ln(a))))):(T=l&~f,T!==0?h=Ln(T):E!==0?h=Ln(E):a||(a=l&~t,a!==0&&(h=Ln(a)))),h===0?0:i!==0&&i!==h&&(i&f)===0&&(f=h&-h,a=i&-i,f>=a||f===32&&(a&4194048)!==0)?i:h}function fs(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function No(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Do(){var t=hs;return hs<<=1,(hs&4194048)===0&&(hs=256),t}function Oo(){var t=ds;return ds<<=1,(ds&62914560)===0&&(ds=4194304),t}function wi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function xi(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Mo(t,i,a,l,h,f){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,H=t.hiddenUpdates;for(a=E&~a;0<a;){var X=31-Kt(a),J=1<<X;T[X]=0,I[X]=-1;var G=H[X];if(G!==null)for(H[X]=null,X=0;X<G.length;X++){var Y=G[X];Y!==null&&(Y.lane&=-536870913)}a&=~J}l!==0&&Xn(t,l,0),f!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=f&~(E&~i))}function Xn(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Kt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Po(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Kt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function cr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ca(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ur(){var t=oe.p;return t!==0?t:(t=window.event,t===void 0?32:v1(t.type))}function Nc(t,i){var a=oe.p;try{return oe.p=t,i()}finally{oe.p=a}}var st=Math.random().toString(36).slice(2),St="__reactFiber$"+st,vt="__reactProps$"+st,xn="__reactContainer$"+st,Vo="__reactEvents$"+st,vd="__reactListeners$"+st,hr="__reactHandles$"+st,Dc="__reactResources$"+st,ms="__reactMarker$"+st;function dr(t){delete t[St],delete t[vt],delete t[Vo],delete t[vd],delete t[hr]}function Si(t){var i=t[St];if(i)return i;for(var a=t.parentNode;a;){if(i=a[xn]||a[St]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=i1(t);t!==null;){if(a=t[St])return a;t=i1(t)}return i}t=a,a=t.parentNode}return null}function Wn(t){if(t=t[St]||t[xn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function Zn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function tn(t){var i=t[Dc];return i||(i=t[Dc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function mt(t){t[ms]=!0}var ko=new Set,ua={};function Un(t,i){Ai(t,i),Ai(t+"Capture",i)}function Ai(t,i){for(ua[t]=i,t=0;t<i.length;t++)ko.add(i[t])}var Oc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mc={},ps={};function Pc(t){return as.call(ps,t)?!0:as.call(Mc,t)?!1:Oc.test(t)?ps[t]=!0:(Mc[t]=!0,!1)}function fr(t,i,a){if(Pc(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function Jn(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Ut(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var gs,Vc;function Ri(t){if(gs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);gs=i&&i[1]||"",Vc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gs+t+Vc}var ha=!1;function da(t,i){if(!t||ha)return"";ha=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(Y){var G=Y}Reflect.construct(t,[],J)}else{try{J.call()}catch(Y){G=Y}t.call(J.prototype)}}else{try{throw Error()}catch(Y){G=Y}(J=t())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(Y){if(Y&&G&&typeof Y.stack=="string")return[Y.stack,G.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),E=f[0],T=f[1];if(E&&T){var I=E.split(`
`),H=T.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<H.length&&!H[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===H.length)for(l=I.length-1,h=H.length-1;1<=l&&0<=h&&I[l]!==H[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==H[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==H[h]){var X=`
`+I[l].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=l&&0<=h);break}}}finally{ha=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ri(a):""}function jo(t){switch(t.tag){case 26:case 27:case 5:return Ri(t.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 15:return da(t.type,!1);case 11:return da(t.type.render,!1);case 1:return da(t.type,!0);case 31:return Ri("Activity");default:return""}}function fa(t){try{var i="";do i+=jo(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function nn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lo(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _d(t){var i=Lo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,f=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,f.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ma(t){t._valueTracker||(t._valueTracker=_d(t))}function Uo(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Lo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ys(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ed=/[\n"\\]/g;function _t(t){return t.replace(Ed,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function dn(t,i,a,l,h,f,E,T){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+nn(i)):t.value!==""+nn(i)&&(t.value=""+nn(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?mr(t,E,nn(i)):a!=null?mr(t,E,nn(a)):l!=null&&t.removeAttribute("value"),h==null&&f!=null&&(t.defaultChecked=!!f),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+nn(T):t.removeAttribute("name")}function vs(t,i,a,l,h,f,E,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),i!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||i!=null))return;a=a!=null?""+nn(a):"",i=i!=null?""+nn(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function mr(t,i,a){i==="number"&&ys(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ci(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+nn(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Ke(t,i,a){if(i!=null&&(i=""+nn(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+nn(a):""}function _s(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(qe(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=nn(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Sn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Es=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kc(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Es.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function zo(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&kc(t,h,l)}else for(var f in i)i.hasOwnProperty(f)&&kc(t,f,i[f])}function Bo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Td=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pa(t){return Td.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ii=null;function An(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ni=null,Di=null;function qo(t){var i=Wn(t);if(i&&(t=i.stateNode)){var a=t[vt]||null;e:switch(t=i.stateNode,i.type){case"input":if(dn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[vt]||null;if(!h)throw Error(s(90));dn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Uo(l)}break e;case"textarea":Ke(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Ci(t,!!a.multiple,i,!1)}}}var ei=!1;function jc(t,i,a){if(ei)return t(i,a);ei=!0;try{var l=t(i);return l}finally{if(ei=!1,(Ni!==null||Di!==null)&&(Nu(),Ni&&(i=Ni,t=Di,Di=Ni=null,qo(i),t)))for(i=0;i<t.length;i++)qo(t[i])}}function bs(t,i){var a=t.stateNode;if(a===null)return null;var l=a[vt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rn=!1;if(zn)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Rn=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Rn=!1}var ti=null,pr=null,Oi=null;function Fo(){if(Oi)return Oi;var t,i=pr,a=i.length,l,h="value"in ti?ti.value:ti.textContent,f=h.length;for(t=0;t<a&&i[t]===h[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===h[f-l];l++);return Oi=h.slice(t,1<l?1-l:void 0)}function ni(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ii(){return!0}function Ho(){return!1}function Mt(t){function i(a,l,h,f,E){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=E,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ii:Ho,this.isPropagationStopped=Ho,this}return b(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),i}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ga=Mt(Fe),ws=b({},Fe,{view:0,detail:0}),Lc=Mt(ws),ya,va,ri,xs=b({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ri&&(ri&&t.type==="mousemove"?(ya=t.screenX-ri.screenX,va=t.screenY-ri.screenY):va=ya=0,ri=t),ya)},movementY:function(t){return"movementY"in t?t.movementY:va}}),Cn=Mt(xs),Uc=b({},xs,{dataTransfer:0}),wd=Mt(Uc),Ss=b({},ws,{relatedTarget:0}),_a=Mt(Ss),Go=b({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),Ea=Mt(Go),zc=b({},Fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ba=Mt(zc),xd=b({},Fe,{data:0}),Yo=Mt(xd),As={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qo(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=qc[t])?!!i[t]:!1}function Rs(){return Qo}var Fc=b({},ws,{key:function(t){if(t.key){var i=As[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ni(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bc[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(t){return t.type==="keypress"?ni(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ni(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ta=Mt(Fc),Hc=b({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Mt(Hc),Mi=b({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),Gc=Mt(Mi),Yc=b({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qc=Mt(Yc),Kc=b({},xs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wa=Mt(Kc),rn=b({},Fe,{newState:0,oldState:0}),$c=Mt(rn),Xc=[9,13,27,32],si=zn&&"CompositionEvent"in window,u=null;zn&&"documentMode"in document&&(u=document.documentMode);var v=zn&&"TextEvent"in window&&!u,_=zn&&(!si||u&&8<u&&11>=u),w=" ",B=!1;function Q(t,i){switch(t){case"keyup":return Xc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ke=!1;function At(t,i){switch(t){case"compositionend":return ae(i);case"keypress":return i.which!==32?null:(B=!0,w);case"textInput":return t=i.data,t===w&&B?null:t;default:return null}}function je(t,i){if(ke)return t==="compositionend"||!si&&Q(t,i)?(t=Fo(),Oi=pr=ti=null,ke=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Pt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Pt[t.type]:i==="textarea"}function Pi(t,i,a,l){Ni?Di?Di.push(l):Di=[l]:Ni=l,i=ku(i,"onChange"),0<i.length&&(a=new ga("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var zt=null,ai=null;function $o(t){Q0(t,0)}function Wc(t){var i=Zn(t);if(Uo(i))return t}function mg(t,i){if(t==="change")return i}var pg=!1;if(zn){var Sd;if(zn){var Ad="oninput"in document;if(!Ad){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),Ad=typeof gg.oninput=="function"}Sd=Ad}else Sd=!1;pg=Sd&&(!document.documentMode||9<document.documentMode)}function yg(){zt&&(zt.detachEvent("onpropertychange",vg),ai=zt=null)}function vg(t){if(t.propertyName==="value"&&Wc(ai)){var i=[];Pi(i,ai,t,An(t)),jc($o,i)}}function vb(t,i,a){t==="focusin"?(yg(),zt=i,ai=a,zt.attachEvent("onpropertychange",vg)):t==="focusout"&&yg()}function _b(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wc(ai)}function Eb(t,i){if(t==="click")return Wc(i)}function bb(t,i){if(t==="input"||t==="change")return Wc(i)}function Tb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var fn=typeof Object.is=="function"?Object.is:Tb;function Xo(t,i){if(fn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!as.call(i,h)||!fn(t[h],i[h]))return!1}return!0}function _g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eg(t,i){var a=_g(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_g(a)}}function bg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?bg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Tg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ys(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ys(t.document)}return i}function Rd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var wb=zn&&"documentMode"in document&&11>=document.documentMode,xa=null,Cd=null,Wo=null,Id=!1;function wg(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Id||xa==null||xa!==ys(l)||(l=xa,"selectionStart"in l&&Rd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wo&&Xo(Wo,l)||(Wo=l,l=ku(Cd,"onSelect"),0<l.length&&(i=new ga("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=xa)))}function Cs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Sa={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},Nd={},xg={};zn&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);function Is(t){if(Nd[t])return Nd[t];if(!Sa[t])return t;var i=Sa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in xg)return Nd[t]=i[a];return t}var Sg=Is("animationend"),Ag=Is("animationiteration"),Rg=Is("animationstart"),xb=Is("transitionrun"),Sb=Is("transitionstart"),Ab=Is("transitioncancel"),Cg=Is("transitionend"),Ig=new Map,Dd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dd.push("scrollEnd");function Bn(t,i){Ig.set(t,i),Un(i,[t])}var Ng=new WeakMap;function In(t,i){if(typeof t=="object"&&t!==null){var a=Ng.get(t);return a!==void 0?a:(i={value:t,source:i,stack:fa(i)},Ng.set(t,i),i)}return{value:t,source:i,stack:fa(i)}}var Nn=[],Aa=0,Od=0;function Zc(){for(var t=Aa,i=Od=Aa=0;i<t;){var a=Nn[i];Nn[i++]=null;var l=Nn[i];Nn[i++]=null;var h=Nn[i];Nn[i++]=null;var f=Nn[i];if(Nn[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}f!==0&&Dg(a,h,f)}}function Jc(t,i,a,l){Nn[Aa++]=t,Nn[Aa++]=i,Nn[Aa++]=a,Nn[Aa++]=l,Od|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Md(t,i,a,l){return Jc(t,i,a,l),eu(t)}function Ra(t,i){return Jc(t,null,null,i),eu(t)}function Dg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,f=t.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(h=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,h&&i!==null&&(h=31-Kt(a),t=f.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),f):null}function eu(t){if(50<Tl)throw Tl=0,zf=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ca={};function Rb(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,i,a,l){return new Rb(t,i,a,l)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,i){var a=t.alternate;return a===null?(a=mn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Og(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function tu(t,i,a,l,h,f){var E=0;if(l=t,typeof t=="function")Pd(t)&&(E=1);else if(typeof t=="string")E=IT(t,a,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=mn(31,a,i,h),t.elementType=R,t.lanes=f,t;case U:return Ns(a.children,h,f,i);case z:E=8,h|=24;break;case q:return t=mn(12,a,i,h|2),t.elementType=q,t.lanes=f,t;case se:return t=mn(13,a,i,h),t.elementType=se,t.lanes=f,t;case me:return t=mn(19,a,i,h),t.elementType=me,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K:case ne:E=10;break e;case ie:E=9;break e;case le:E=11;break e;case V:E=14;break e;case A:E=16,l=null;break e}E=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=mn(E,a,i,h),i.elementType=t,i.type=l,i.lanes=f,i}function Ns(t,i,a,l){return t=mn(7,t,l,i),t.lanes=a,t}function Vd(t,i,a){return t=mn(6,t,null,i),t.lanes=a,t}function kd(t,i,a){return i=mn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Ia=[],Na=0,nu=null,iu=0,Dn=[],On=0,Ds=null,ki=1,ji="";function Os(t,i){Ia[Na++]=iu,Ia[Na++]=nu,nu=t,iu=i}function Mg(t,i,a){Dn[On++]=ki,Dn[On++]=ji,Dn[On++]=Ds,Ds=t;var l=ki;t=ji;var h=32-Kt(l)-1;l&=~(1<<h),a+=1;var f=32-Kt(i)+h;if(30<f){var E=h-h%5;f=(l&(1<<E)-1).toString(32),l>>=E,h-=E,ki=1<<32-Kt(i)+h|a<<h|l,ji=f+t}else ki=1<<f|a<<h|l,ji=t}function jd(t){t.return!==null&&(Os(t,1),Mg(t,1,0))}function Ld(t){for(;t===nu;)nu=Ia[--Na],Ia[Na]=null,iu=Ia[--Na],Ia[Na]=null;for(;t===Ds;)Ds=Dn[--On],Dn[On]=null,ji=Dn[--On],Dn[On]=null,ki=Dn[--On],Dn[On]=null}var sn=null,ht=null,Be=!1,Ms=null,oi=!1,Ud=Error(s(519));function Ps(t){var i=Error(s(418,""));throw el(In(i,t)),Ud}function Pg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[St]=t,i[vt]=l,a){case"dialog":De("cancel",i),De("close",i);break;case"iframe":case"object":case"embed":De("load",i);break;case"video":case"audio":for(a=0;a<xl.length;a++)De(xl[a],i);break;case"source":De("error",i);break;case"img":case"image":case"link":De("error",i),De("load",i);break;case"details":De("toggle",i);break;case"input":De("invalid",i),vs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ma(i);break;case"select":De("invalid",i);break;case"textarea":De("invalid",i),_s(i,l.value,l.defaultValue,l.children),ma(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||W0(i.textContent,a)?(l.popover!=null&&(De("beforetoggle",i),De("toggle",i)),l.onScroll!=null&&De("scroll",i),l.onScrollEnd!=null&&De("scrollend",i),l.onClick!=null&&(i.onclick=ju),i=!0):i=!1,i||Ps(t)}function Vg(t){for(sn=t.return;sn;)switch(sn.tag){case 5:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:sn=sn.return}}function Zo(t){if(t!==sn)return!1;if(!Be)return Vg(t),Be=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||nm(t.type,t.memoizedProps)),a=!a),a&&ht&&Ps(t),Vg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){ht=Fn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}ht=null}}else i===27?(i=ht,Dr(t.type)?(t=am,am=null,ht=t):ht=i):ht=sn?Fn(t.stateNode.nextSibling):null;return!0}function Jo(){ht=sn=null,Be=!1}function kg(){var t=Ms;return t!==null&&(ln===null?ln=t:ln.push.apply(ln,t),Ms=null),t}function el(t){Ms===null?Ms=[t]:Ms.push(t)}var zd=te(null),Vs=null,Li=null;function gr(t,i,a){re(zd,i._currentValue),i._currentValue=a}function Ui(t){t._currentValue=zd.current,ce(zd)}function Bd(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function qd(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var f=h.dependencies;if(f!==null){var E=h.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=h;for(var I=0;I<i.length;I++)if(T.context===i[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Bd(f.return,a,t),l||(E=null);break e}f=T.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(s(341));E.lanes|=a,f=E.alternate,f!==null&&(f.lanes|=a),Bd(E,a,t),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===t){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function tl(t,i,a,l){t=null;for(var h=i,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var T=h.type;fn(h.pendingProps.value,E.value)||(t!==null?t.push(T):t=[T])}}else if(h===Ot.current){if(E=h.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Nl):t=[Nl])}h=h.return}t!==null&&qd(i,t,a,l),i.flags|=262144}function ru(t){for(t=t.firstContext;t!==null;){if(!fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ks(t){Vs=t,Li=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $t(t){return jg(Vs,t)}function su(t,i){return Vs===null&&ks(t),jg(t,i)}function jg(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Li===null){if(t===null)throw Error(s(308));Li=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Li=Li.next=i;return a}var Cb=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},Ib=r.unstable_scheduleCallback,Nb=r.unstable_NormalPriority,Ct={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fd(){return{controller:new Cb,data:new Map,refCount:0}}function nl(t){t.refCount--,t.refCount===0&&Ib(Nb,function(){t.controller.abort()})}var il=null,Hd=0,Da=0,Oa=null;function Db(t,i){if(il===null){var a=il=[];Hd=0,Da=Qf(),Oa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Hd++,i.then(Lg,Lg),i}function Lg(){if(--Hd===0&&il!==null){Oa!==null&&(Oa.status="fulfilled");var t=il;il=null,Da=0,Oa=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Ob(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Ug=$.S;$.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Db(t,i),Ug!==null&&Ug(t,i)};var js=te(null);function Gd(){var t=js.current;return t!==null?t:nt.pooledCache}function au(t,i){i===null?re(js,js.current):re(js,i.pool)}function zg(){var t=Gd();return t===null?null:{parent:Ct._currentValue,pool:t}}var rl=Error(s(460)),Bg=Error(s(474)),ou=Error(s(542)),Yd={then:function(){}};function qg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function lu(){}function Fg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(lu,lu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gg(t),t;default:if(typeof i.status=="string")i.then(lu,lu);else{if(t=nt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gg(t),t}throw sl=i,rl}}var sl=null;function Hg(){if(sl===null)throw Error(s(459));var t=sl;return sl=null,t}function Gg(t){if(t===rl||t===ou)throw Error(s(483))}var yr=!1;function Qd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function vr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _r(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ye&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=eu(t),Dg(t,null,a),i}return Jc(t,l,i,a),eu(t)}function al(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Po(t,a)}}function $d(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?h=f=E:f=f.next=E,a=a.next}while(a!==null);f===null?h=f=i:f=f.next=i}else h=f=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Xd=!1;function ol(){if(Xd){var t=Oa;if(t!==null)throw t}}function ll(t,i,a,l){Xd=!1;var h=t.updateQueue;yr=!1;var f=h.firstBaseUpdate,E=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,H=I.next;I.next=null,E===null?f=H:E.next=H,E=I;var X=t.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==E&&(T===null?X.firstBaseUpdate=H:T.next=H,X.lastBaseUpdate=I))}if(f!==null){var J=h.baseState;E=0,X=H=I=null,T=f;do{var G=T.lane&-536870913,Y=G!==T.lane;if(Y?(Le&G)===G:(l&G)===G){G!==0&&G===Da&&(Xd=!0),X!==null&&(X=X.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Te=t,ve=T;G=i;var We=a;switch(ve.tag){case 1:if(Te=ve.payload,typeof Te=="function"){J=Te.call(We,J,G);break e}J=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=ve.payload,G=typeof Te=="function"?Te.call(We,J,G):Te,G==null)break e;J=b({},J,G);break e;case 2:yr=!0}}G=T.callback,G!==null&&(t.flags|=64,Y&&(t.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[G]:Y.push(G))}else Y={lane:G,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(H=X=Y,I=J):X=X.next=Y,E|=G;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;Y=T,T=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);X===null&&(I=J),h.baseState=I,h.firstBaseUpdate=H,h.lastBaseUpdate=X,f===null&&(h.shared.lanes=0),Rr|=E,t.lanes=E,t.memoizedState=J}}function Yg(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Qg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Yg(a[t],i)}var Ma=te(null),cu=te(0);function Kg(t,i){t=Yi,re(cu,t),re(Ma,i),Yi=t|i.baseLanes}function Wd(){re(cu,Yi),re(Ma,Ma.current)}function Zd(){Yi=cu.current,ce(Ma),ce(cu)}var Er=0,Re=null,$e=null,Et=null,uu=!1,Pa=!1,Ls=!1,hu=0,cl=0,Va=null,Mb=0;function pt(){throw Error(s(321))}function Jd(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!fn(t[a],i[a]))return!1;return!0}function ef(t,i,a,l,h,f){return Er=f,Re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$.H=t===null||t.memoizedState===null?Dy:Oy,Ls=!1,f=a(l,h),Ls=!1,Pa&&(f=Xg(i,a,l,h)),$g(t),f}function $g(t){$.H=yu;var i=$e!==null&&$e.next!==null;if(Er=0,Et=$e=Re=null,uu=!1,cl=0,Va=null,i)throw Error(s(300));t===null||Vt||(t=t.dependencies,t!==null&&ru(t)&&(Vt=!0))}function Xg(t,i,a,l){Re=t;var h=0;do{if(Pa&&(Va=null),cl=0,Pa=!1,25<=h)throw Error(s(301));if(h+=1,Et=$e=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}$.H=zb,f=i(a,l)}while(Pa);return f}function Pb(){var t=$.H,i=t.useState()[0];return i=typeof i.then=="function"?ul(i):i,t=t.useState()[0],($e!==null?$e.memoizedState:null)!==t&&(Re.flags|=1024),i}function tf(){var t=hu!==0;return hu=0,t}function nf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function rf(t){if(uu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}uu=!1}Er=0,Et=$e=Re=null,Pa=!1,cl=hu=0,Va=null}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Re.memoizedState=Et=t:Et=Et.next=t,Et}function bt(){if($e===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var i=Et===null?Re.memoizedState:Et.next;if(i!==null)Et=i,$e=t;else{if(t===null)throw Re.alternate===null?Error(s(467)):Error(s(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Et===null?Re.memoizedState=Et=t:Et=Et.next=t}return Et}function sf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(t){var i=cl;return cl+=1,Va===null&&(Va=[]),t=Fg(Va,t,i),i=Re,(Et===null?i.memoizedState:Et.next)===null&&(i=i.alternate,$.H=i===null||i.memoizedState===null?Dy:Oy),t}function du(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ul(t);if(t.$$typeof===ne)return $t(t)}throw Error(s(438,String(t)))}function af(t){var i=null,a=Re.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=sf(),Re.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=M;return i.index++,a}function zi(t,i){return typeof i=="function"?i(t):i}function fu(t){var i=bt();return of(i,$e,t)}function of(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,f=l.pending;if(f!==null){if(h!==null){var E=h.next;h.next=f.next,f.next=E}i.baseQueue=h=f,l.pending=null}if(f=t.baseState,h===null)t.memoizedState=f;else{i=h.next;var T=E=null,I=null,H=i,X=!1;do{var J=H.lane&-536870913;if(J!==H.lane?(Le&J)===J:(Er&J)===J){var G=H.revertLane;if(G===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),J===Da&&(X=!0);else if((Er&G)===G){H=H.next,G===Da&&(X=!0);continue}else J={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},I===null?(T=I=J,E=f):I=I.next=J,Re.lanes|=G,Rr|=G;J=H.action,Ls&&a(f,J),f=H.hasEagerState?H.eagerState:a(f,J)}else G={lane:J,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},I===null?(T=I=G,E=f):I=I.next=G,Re.lanes|=J,Rr|=J;H=H.next}while(H!==null&&H!==i);if(I===null?E=f:I.next=T,!fn(f,t.memoizedState)&&(Vt=!0,X&&(a=Oa,a!==null)))throw a;t.memoizedState=f,t.baseState=E,t.baseQueue=I,l.lastRenderedState=f}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function lf(t){var i=bt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,f=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do f=t(f,E.action),E=E.next;while(E!==h);fn(f,i.memoizedState)||(Vt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,l]}function Wg(t,i,a){var l=Re,h=bt(),f=Be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=i();var E=!fn(($e||h).memoizedState,a);E&&(h.memoizedState=a,Vt=!0),h=h.queue;var T=ey.bind(null,l,h,t);if(hl(2048,8,T,[t]),h.getSnapshot!==i||E||Et!==null&&Et.memoizedState.tag&1){if(l.flags|=2048,ka(9,mu(),Jg.bind(null,l,h,a,i),null),nt===null)throw Error(s(349));f||(Er&124)!==0||Zg(l,i,a)}return a}function Zg(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Re.updateQueue,i===null?(i=sf(),Re.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Jg(t,i,a,l){i.value=a,i.getSnapshot=l,ty(i)&&ny(t)}function ey(t,i,a){return a(function(){ty(i)&&ny(t)})}function ty(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!fn(t,a)}catch{return!0}}function ny(t){var i=Ra(t,2);i!==null&&_n(i,t,2)}function cf(t){var i=an();if(typeof t=="function"){var a=t;if(t=a(),Ls){hn(!0);try{a()}finally{hn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:t},i}function iy(t,i,a,l){return t.baseState=a,of(t,$e,typeof l=="function"?l:zi)}function Vb(t,i,a,l,h){if(gu(t))throw Error(s(485));if(t=i.action,t!==null){var f={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){f.listeners.push(E)}};$.T!==null?a(!0):f.isTransition=!1,l(f),a=i.pending,a===null?(f.next=i.pending=f,ry(i,f)):(f.next=a.next,i.pending=a.next=f)}}function ry(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var f=$.T,E={};$.T=E;try{var T=a(h,l),I=$.S;I!==null&&I(E,T),sy(t,i,T)}catch(H){uf(t,i,H)}finally{$.T=f}}else try{f=a(h,l),sy(t,i,f)}catch(H){uf(t,i,H)}}function sy(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ay(t,i,l)},function(l){return uf(t,i,l)}):ay(t,i,a)}function ay(t,i,a){i.status="fulfilled",i.value=a,oy(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,ry(t,a)))}function uf(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,oy(i),i=i.next;while(i!==l)}t.action=null}function oy(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ly(t,i){return i}function cy(t,i){if(Be){var a=nt.formState;if(a!==null){e:{var l=Re;if(Be){if(ht){t:{for(var h=ht,f=oi;h.nodeType!==8;){if(!f){h=null;break t}if(h=Fn(h.nextSibling),h===null){h=null;break t}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ht=Fn(h.nextSibling),l=h.data==="F!";break e}}Ps(l)}l=!1}l&&(i=a[0])}}return a=an(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ly,lastRenderedState:i},a.queue=l,a=Cy.bind(null,Re,l),l.dispatch=a,l=cf(!1),f=pf.bind(null,Re,!1,l.queue),l=an(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=Vb.bind(null,Re,h,f,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function uy(t){var i=bt();return hy(i,$e,t)}function hy(t,i,a){if(i=of(t,i,ly)[0],t=fu(zi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ul(i)}catch(E){throw E===rl?ou:E}else l=i;i=bt();var h=i.queue,f=h.dispatch;return a!==i.memoizedState&&(Re.flags|=2048,ka(9,mu(),kb.bind(null,h,a),null)),[l,f,t]}function kb(t,i){t.action=i}function dy(t){var i=bt(),a=$e;if(a!==null)return hy(i,a,t);bt(),i=i.memoizedState,a=bt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function ka(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Re.updateQueue,i===null&&(i=sf(),Re.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function mu(){return{destroy:void 0,resource:void 0}}function fy(){return bt().memoizedState}function pu(t,i,a,l){var h=an();l=l===void 0?null:l,Re.flags|=t,h.memoizedState=ka(1|i,mu(),a,l)}function hl(t,i,a,l){var h=bt();l=l===void 0?null:l;var f=h.memoizedState.inst;$e!==null&&l!==null&&Jd(l,$e.memoizedState.deps)?h.memoizedState=ka(i,f,a,l):(Re.flags|=t,h.memoizedState=ka(1|i,f,a,l))}function my(t,i){pu(8390656,8,t,i)}function py(t,i){hl(2048,8,t,i)}function gy(t,i){return hl(4,2,t,i)}function yy(t,i){return hl(4,4,t,i)}function vy(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function _y(t,i,a){a=a!=null?a.concat([t]):null,hl(4,4,vy.bind(null,i,t),a)}function hf(){}function Ey(t,i){var a=bt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Jd(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function by(t,i){var a=bt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Jd(i,l[1]))return l[0];if(l=t(),Ls){hn(!0);try{t()}finally{hn(!1)}}return a.memoizedState=[l,i],l}function df(t,i,a){return a===void 0||(Er&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=x0(),Re.lanes|=t,Rr|=t,a)}function Ty(t,i,a,l){return fn(a,i)?a:Ma.current!==null?(t=df(t,a,l),fn(t,i)||(Vt=!0),t):(Er&42)===0?(Vt=!0,t.memoizedState=a):(t=x0(),Re.lanes|=t,Rr|=t,i)}function wy(t,i,a,l,h){var f=oe.p;oe.p=f!==0&&8>f?f:8;var E=$.T,T={};$.T=T,pf(t,!1,i,a);try{var I=h(),H=$.S;if(H!==null&&H(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var X=Ob(I,l);dl(t,i,X,vn(t))}else dl(t,i,l,vn(t))}catch(J){dl(t,i,{then:function(){},status:"rejected",reason:J},vn())}finally{oe.p=f,$.T=E}}function jb(){}function ff(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=xy(t).queue;wy(t,h,i,fe,a===null?jb:function(){return Sy(t),a(l)})}function xy(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:fe},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Sy(t){var i=xy(t).next.queue;dl(t,i,{},vn())}function mf(){return $t(Nl)}function Ay(){return bt().memoizedState}function Ry(){return bt().memoizedState}function Lb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=vn();t=vr(a);var l=_r(i,t,a);l!==null&&(_n(l,i,a),al(l,i,a)),i={cache:Fd()},t.payload=i;return}i=i.return}}function Ub(t,i,a){var l=vn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gu(t)?Iy(i,a):(a=Md(t,i,a,l),a!==null&&(_n(a,t,l),Ny(a,i,l)))}function Cy(t,i,a){var l=vn();dl(t,i,a,l)}function dl(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gu(t))Iy(i,h);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var E=i.lastRenderedState,T=f(E,a);if(h.hasEagerState=!0,h.eagerState=T,fn(T,E))return Jc(t,i,h,0),nt===null&&Zc(),!1}catch{}finally{}if(a=Md(t,i,h,l),a!==null)return _n(a,t,l),Ny(a,i,l),!0}return!1}function pf(t,i,a,l){if(l={lane:2,revertLane:Qf(),action:l,hasEagerState:!1,eagerState:null,next:null},gu(t)){if(i)throw Error(s(479))}else i=Md(t,a,l,2),i!==null&&_n(i,t,2)}function gu(t){var i=t.alternate;return t===Re||i!==null&&i===Re}function Iy(t,i){Pa=uu=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Ny(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Po(t,a)}}var yu={readContext:$t,use:du,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt},Dy={readContext:$t,use:du,useCallback:function(t,i){return an().memoizedState=[t,i===void 0?null:i],t},useContext:$t,useEffect:my,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,pu(4194308,4,vy.bind(null,i,t),a)},useLayoutEffect:function(t,i){return pu(4194308,4,t,i)},useInsertionEffect:function(t,i){pu(4,2,t,i)},useMemo:function(t,i){var a=an();i=i===void 0?null:i;var l=t();if(Ls){hn(!0);try{t()}finally{hn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=an();if(a!==void 0){var h=a(i);if(Ls){hn(!0);try{a(i)}finally{hn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=Ub.bind(null,Re,t),[l.memoizedState,t]},useRef:function(t){var i=an();return t={current:t},i.memoizedState=t},useState:function(t){t=cf(t);var i=t.queue,a=Cy.bind(null,Re,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(t,i){var a=an();return df(a,t,i)},useTransition:function(){var t=cf(!1);return t=wy.bind(null,Re,t.queue,!0,!1),an().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Re,h=an();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),nt===null)throw Error(s(349));(Le&124)!==0||Zg(l,i,a)}h.memoizedState=a;var f={value:a,getSnapshot:i};return h.queue=f,my(ey.bind(null,l,f,t),[t]),l.flags|=2048,ka(9,mu(),Jg.bind(null,l,f,a,i),null),a},useId:function(){var t=an(),i=nt.identifierPrefix;if(Be){var a=ji,l=ki;a=(l&~(1<<32-Kt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=hu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=Mb++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:mf,useFormState:cy,useActionState:cy,useOptimistic:function(t){var i=an();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=pf.bind(null,Re,!0,a),a.dispatch=i,[t,i]},useMemoCache:af,useCacheRefresh:function(){return an().memoizedState=Lb.bind(null,Re)}},Oy={readContext:$t,use:du,useCallback:Ey,useContext:$t,useEffect:py,useImperativeHandle:_y,useInsertionEffect:gy,useLayoutEffect:yy,useMemo:by,useReducer:fu,useRef:fy,useState:function(){return fu(zi)},useDebugValue:hf,useDeferredValue:function(t,i){var a=bt();return Ty(a,$e.memoizedState,t,i)},useTransition:function(){var t=fu(zi)[0],i=bt().memoizedState;return[typeof t=="boolean"?t:ul(t),i]},useSyncExternalStore:Wg,useId:Ay,useHostTransitionStatus:mf,useFormState:uy,useActionState:uy,useOptimistic:function(t,i){var a=bt();return iy(a,$e,t,i)},useMemoCache:af,useCacheRefresh:Ry},zb={readContext:$t,use:du,useCallback:Ey,useContext:$t,useEffect:py,useImperativeHandle:_y,useInsertionEffect:gy,useLayoutEffect:yy,useMemo:by,useReducer:lf,useRef:fy,useState:function(){return lf(zi)},useDebugValue:hf,useDeferredValue:function(t,i){var a=bt();return $e===null?df(a,t,i):Ty(a,$e.memoizedState,t,i)},useTransition:function(){var t=lf(zi)[0],i=bt().memoizedState;return[typeof t=="boolean"?t:ul(t),i]},useSyncExternalStore:Wg,useId:Ay,useHostTransitionStatus:mf,useFormState:dy,useActionState:dy,useOptimistic:function(t,i){var a=bt();return $e!==null?iy(a,$e,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:af,useCacheRefresh:Ry},ja=null,fl=0;function vu(t){var i=fl;return fl+=1,ja===null&&(ja=[]),Fg(ja,t,i)}function ml(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function _u(t,i){throw i.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function My(t){var i=t._init;return i(t._payload)}function Py(t){function i(L,P){if(t){var F=L.deletions;F===null?(L.deletions=[P],L.flags|=16):F.push(P)}}function a(L,P){if(!t)return null;for(;P!==null;)i(L,P),P=P.sibling;return null}function l(L){for(var P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function h(L,P){return L=Vi(L,P),L.index=0,L.sibling=null,L}function f(L,P,F){return L.index=F,t?(F=L.alternate,F!==null?(F=F.index,F<P?(L.flags|=67108866,P):F):(L.flags|=67108866,P)):(L.flags|=1048576,P)}function E(L){return t&&L.alternate===null&&(L.flags|=67108866),L}function T(L,P,F,W){return P===null||P.tag!==6?(P=Vd(F,L.mode,W),P.return=L,P):(P=h(P,F),P.return=L,P)}function I(L,P,F,W){var de=F.type;return de===U?X(L,P,F.props.children,W,F.key):P!==null&&(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===A&&My(de)===P.type)?(P=h(P,F.props),ml(P,F),P.return=L,P):(P=tu(F.type,F.key,F.props,null,L.mode,W),ml(P,F),P.return=L,P)}function H(L,P,F,W){return P===null||P.tag!==4||P.stateNode.containerInfo!==F.containerInfo||P.stateNode.implementation!==F.implementation?(P=kd(F,L.mode,W),P.return=L,P):(P=h(P,F.children||[]),P.return=L,P)}function X(L,P,F,W,de){return P===null||P.tag!==7?(P=Ns(F,L.mode,W,de),P.return=L,P):(P=h(P,F),P.return=L,P)}function J(L,P,F){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Vd(""+P,L.mode,F),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return F=tu(P.type,P.key,P.props,null,L.mode,F),ml(F,P),F.return=L,F;case D:return P=kd(P,L.mode,F),P.return=L,P;case A:var W=P._init;return P=W(P._payload),J(L,P,F)}if(qe(P)||j(P))return P=Ns(P,L.mode,F,null),P.return=L,P;if(typeof P.then=="function")return J(L,vu(P),F);if(P.$$typeof===ne)return J(L,su(L,P),F);_u(L,P)}return null}function G(L,P,F,W){var de=P!==null?P.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return de!==null?null:T(L,P,""+F,W);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return F.key===de?I(L,P,F,W):null;case D:return F.key===de?H(L,P,F,W):null;case A:return de=F._init,F=de(F._payload),G(L,P,F,W)}if(qe(F)||j(F))return de!==null?null:X(L,P,F,W,null);if(typeof F.then=="function")return G(L,P,vu(F),W);if(F.$$typeof===ne)return G(L,P,su(L,F),W);_u(L,F)}return null}function Y(L,P,F,W,de){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return L=L.get(F)||null,T(P,L,""+W,de);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return L=L.get(W.key===null?F:W.key)||null,I(P,L,W,de);case D:return L=L.get(W.key===null?F:W.key)||null,H(P,L,W,de);case A:var Ie=W._init;return W=Ie(W._payload),Y(L,P,F,W,de)}if(qe(W)||j(W))return L=L.get(F)||null,X(P,L,W,de,null);if(typeof W.then=="function")return Y(L,P,F,vu(W),de);if(W.$$typeof===ne)return Y(L,P,F,su(P,W),de);_u(P,W)}return null}function Te(L,P,F,W){for(var de=null,Ie=null,pe=P,_e=P=0,jt=null;pe!==null&&_e<F.length;_e++){pe.index>_e?(jt=pe,pe=null):jt=pe.sibling;var ze=G(L,pe,F[_e],W);if(ze===null){pe===null&&(pe=jt);break}t&&pe&&ze.alternate===null&&i(L,pe),P=f(ze,P,_e),Ie===null?de=ze:Ie.sibling=ze,Ie=ze,pe=jt}if(_e===F.length)return a(L,pe),Be&&Os(L,_e),de;if(pe===null){for(;_e<F.length;_e++)pe=J(L,F[_e],W),pe!==null&&(P=f(pe,P,_e),Ie===null?de=pe:Ie.sibling=pe,Ie=pe);return Be&&Os(L,_e),de}for(pe=l(pe);_e<F.length;_e++)jt=Y(pe,L,_e,F[_e],W),jt!==null&&(t&&jt.alternate!==null&&pe.delete(jt.key===null?_e:jt.key),P=f(jt,P,_e),Ie===null?de=jt:Ie.sibling=jt,Ie=jt);return t&&pe.forEach(function(kr){return i(L,kr)}),Be&&Os(L,_e),de}function ve(L,P,F,W){if(F==null)throw Error(s(151));for(var de=null,Ie=null,pe=P,_e=P=0,jt=null,ze=F.next();pe!==null&&!ze.done;_e++,ze=F.next()){pe.index>_e?(jt=pe,pe=null):jt=pe.sibling;var kr=G(L,pe,ze.value,W);if(kr===null){pe===null&&(pe=jt);break}t&&pe&&kr.alternate===null&&i(L,pe),P=f(kr,P,_e),Ie===null?de=kr:Ie.sibling=kr,Ie=kr,pe=jt}if(ze.done)return a(L,pe),Be&&Os(L,_e),de;if(pe===null){for(;!ze.done;_e++,ze=F.next())ze=J(L,ze.value,W),ze!==null&&(P=f(ze,P,_e),Ie===null?de=ze:Ie.sibling=ze,Ie=ze);return Be&&Os(L,_e),de}for(pe=l(pe);!ze.done;_e++,ze=F.next())ze=Y(pe,L,_e,ze.value,W),ze!==null&&(t&&ze.alternate!==null&&pe.delete(ze.key===null?_e:ze.key),P=f(ze,P,_e),Ie===null?de=ze:Ie.sibling=ze,Ie=ze);return t&&pe.forEach(function(BT){return i(L,BT)}),Be&&Os(L,_e),de}function We(L,P,F,W){if(typeof F=="object"&&F!==null&&F.type===U&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case S:e:{for(var de=F.key;P!==null;){if(P.key===de){if(de=F.type,de===U){if(P.tag===7){a(L,P.sibling),W=h(P,F.props.children),W.return=L,L=W;break e}}else if(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===A&&My(de)===P.type){a(L,P.sibling),W=h(P,F.props),ml(W,F),W.return=L,L=W;break e}a(L,P);break}else i(L,P);P=P.sibling}F.type===U?(W=Ns(F.props.children,L.mode,W,F.key),W.return=L,L=W):(W=tu(F.type,F.key,F.props,null,L.mode,W),ml(W,F),W.return=L,L=W)}return E(L);case D:e:{for(de=F.key;P!==null;){if(P.key===de)if(P.tag===4&&P.stateNode.containerInfo===F.containerInfo&&P.stateNode.implementation===F.implementation){a(L,P.sibling),W=h(P,F.children||[]),W.return=L,L=W;break e}else{a(L,P);break}else i(L,P);P=P.sibling}W=kd(F,L.mode,W),W.return=L,L=W}return E(L);case A:return de=F._init,F=de(F._payload),We(L,P,F,W)}if(qe(F))return Te(L,P,F,W);if(j(F)){if(de=j(F),typeof de!="function")throw Error(s(150));return F=de.call(F),ve(L,P,F,W)}if(typeof F.then=="function")return We(L,P,vu(F),W);if(F.$$typeof===ne)return We(L,P,su(L,F),W);_u(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,P!==null&&P.tag===6?(a(L,P.sibling),W=h(P,F),W.return=L,L=W):(a(L,P),W=Vd(F,L.mode,W),W.return=L,L=W),E(L)):a(L,P)}return function(L,P,F,W){try{fl=0;var de=We(L,P,F,W);return ja=null,de}catch(pe){if(pe===rl||pe===ou)throw pe;var Ie=mn(29,pe,null,L.mode);return Ie.lanes=W,Ie.return=L,Ie}finally{}}}var La=Py(!0),Vy=Py(!1),Mn=te(null),li=null;function br(t){var i=t.alternate;re(It,It.current&1),re(Mn,t),li===null&&(i===null||Ma.current!==null||i.memoizedState!==null)&&(li=t)}function ky(t){if(t.tag===22){if(re(It,It.current),re(Mn,t),li===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(li=t)}}else Tr()}function Tr(){re(It,It.current),re(Mn,Mn.current)}function Bi(t){ce(Mn),li===t&&(li=null),ce(It)}var It=te(0);function Eu(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||sm(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function gf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:b({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yf={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=vn(),h=vr(l);h.payload=i,a!=null&&(h.callback=a),i=_r(t,h,l),i!==null&&(_n(i,t,l),al(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=vn(),h=vr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=_r(t,h,l),i!==null&&(_n(i,t,l),al(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=vn(),l=vr(a);l.tag=2,i!=null&&(l.callback=i),i=_r(t,l,a),i!==null&&(_n(i,t,a),al(i,t,a))}};function jy(t,i,a,l,h,f,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,E):i.prototype&&i.prototype.isPureReactComponent?!Xo(a,l)||!Xo(h,f):!0}function Ly(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&yf.enqueueReplaceState(i,i.state,null)}function Us(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=b({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var bu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Uy(t){bu(t)}function zy(t){console.error(t)}function By(t){bu(t)}function Tu(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function qy(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function vf(t,i,a){return a=vr(a),a.tag=3,a.payload={element:null},a.callback=function(){Tu(t,i)},a}function Fy(t){return t=vr(t),t.tag=3,t}function Hy(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var f=l.value;t.payload=function(){return h(f)},t.callback=function(){qy(i,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){qy(i,a,l),typeof h!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function Bb(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&tl(i,a,h,!0),a=Mn.current,a!==null){switch(a.tag){case 13:return li===null?qf():a.alternate===null&&dt===0&&(dt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Yd?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Hf(t,l,h)),!1;case 22:return a.flags|=65536,l===Yd?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Hf(t,l,h)),!1}throw Error(s(435,a.tag))}return Hf(t,l,h),qf(),!1}if(Be)return i=Mn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Ud&&(t=Error(s(422),{cause:l}),el(In(t,a)))):(l!==Ud&&(i=Error(s(423),{cause:l}),el(In(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=In(l,a),h=vf(t.stateNode,l,h),$d(t,h),dt!==4&&(dt=2)),!1;var f=Error(s(520),{cause:l});if(f=In(f,a),bl===null?bl=[f]:bl.push(f),dt!==4&&(dt=2),i===null)return!0;l=In(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=vf(a.stateNode,l,t),$d(a,t),!1;case 1:if(i=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Cr===null||!Cr.has(f))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Fy(h),Hy(h,t,a,l),$d(a,h),!1}a=a.return}while(a!==null);return!1}var Gy=Error(s(461)),Vt=!1;function Bt(t,i,a,l){i.child=t===null?Vy(i,null,a,l):La(i,t.child,a,l)}function Yy(t,i,a,l,h){a=a.render;var f=i.ref;if("ref"in l){var E={};for(var T in l)T!=="ref"&&(E[T]=l[T])}else E=l;return ks(i),l=ef(t,i,a,E,f,h),T=tf(),t!==null&&!Vt?(nf(t,i,h),qi(t,i,h)):(Be&&T&&jd(i),i.flags|=1,Bt(t,i,l,h),i.child)}function Qy(t,i,a,l,h){if(t===null){var f=a.type;return typeof f=="function"&&!Pd(f)&&f.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=f,Ky(t,i,f,l,h)):(t=tu(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(f=t.child,!Af(t,h)){var E=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(E,l)&&t.ref===i.ref)return qi(t,i,h)}return i.flags|=1,t=Vi(f,l),t.ref=i.ref,t.return=i,i.child=t}function Ky(t,i,a,l,h){if(t!==null){var f=t.memoizedProps;if(Xo(f,l)&&t.ref===i.ref)if(Vt=!1,i.pendingProps=l=f,Af(t,h))(t.flags&131072)!==0&&(Vt=!0);else return i.lanes=t.lanes,qi(t,i,h)}return _f(t,i,a,l,h)}function $y(t,i,a){var l=i.pendingProps,h=l.children,f=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=f!==null?f.baseLanes|a:a,t!==null){for(h=i.child=t.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;i.childLanes=f&~l}else i.childLanes=0,i.child=null;return Xy(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&au(i,f!==null?f.cachePool:null),f!==null?Kg(i,f):Wd(),ky(i);else return i.lanes=i.childLanes=536870912,Xy(t,i,f!==null?f.baseLanes|a:a,a)}else f!==null?(au(i,f.cachePool),Kg(i,f),Tr(),i.memoizedState=null):(t!==null&&au(i,null),Wd(),Tr());return Bt(t,i,h,a),i.child}function Xy(t,i,a,l){var h=Gd();return h=h===null?null:{parent:Ct._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&au(i,null),Wd(),ky(i),t!==null&&tl(t,i,l,!0),null}function wu(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function _f(t,i,a,l,h){return ks(i),a=ef(t,i,a,l,void 0,h),l=tf(),t!==null&&!Vt?(nf(t,i,h),qi(t,i,h)):(Be&&l&&jd(i),i.flags|=1,Bt(t,i,a,h),i.child)}function Wy(t,i,a,l,h,f){return ks(i),i.updateQueue=null,a=Xg(i,l,a,h),$g(t),l=tf(),t!==null&&!Vt?(nf(t,i,f),qi(t,i,f)):(Be&&l&&jd(i),i.flags|=1,Bt(t,i,a,f),i.child)}function Zy(t,i,a,l,h){if(ks(i),i.stateNode===null){var f=Ca,E=a.contextType;typeof E=="object"&&E!==null&&(f=$t(E)),f=new a(l,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yf,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=l,f.state=i.memoizedState,f.refs={},Qd(i),E=a.contextType,f.context=typeof E=="object"&&E!==null?$t(E):Ca,f.state=i.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(gf(i,a,E,l),f.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(E=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),E!==f.state&&yf.enqueueReplaceState(f,f.state,null),ll(i,l,f,h),ol(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){f=i.stateNode;var T=i.memoizedProps,I=Us(a,T);f.props=I;var H=f.context,X=a.contextType;E=Ca,typeof X=="object"&&X!==null&&(E=$t(X));var J=a.getDerivedStateFromProps;X=typeof J=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,X||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||H!==E)&&Ly(i,f,l,E),yr=!1;var G=i.memoizedState;f.state=G,ll(i,l,f,h),ol(),H=i.memoizedState,T||G!==H||yr?(typeof J=="function"&&(gf(i,a,J,l),H=i.memoizedState),(I=yr||jy(i,a,I,l,G,H,E))?(X||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),f.props=l,f.state=H,f.context=E,l=I):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{f=i.stateNode,Kd(t,i),E=i.memoizedProps,X=Us(a,E),f.props=X,J=i.pendingProps,G=f.context,H=a.contextType,I=Ca,typeof H=="object"&&H!==null&&(I=$t(H)),T=a.getDerivedStateFromProps,(H=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E!==J||G!==I)&&Ly(i,f,l,I),yr=!1,G=i.memoizedState,f.state=G,ll(i,l,f,h),ol();var Y=i.memoizedState;E!==J||G!==Y||yr||t!==null&&t.dependencies!==null&&ru(t.dependencies)?(typeof T=="function"&&(gf(i,a,T,l),Y=i.memoizedState),(X=yr||jy(i,a,X,l,G,Y,I)||t!==null&&t.dependencies!==null&&ru(t.dependencies))?(H||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,Y,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,Y,I)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Y),f.props=l,f.state=Y,f.context=I,l=X):(typeof f.componentDidUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=1024),l=!1)}return f=l,wu(t,i),l=(i.flags&128)!==0,f||l?(f=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,t!==null&&l?(i.child=La(i,t.child,null,h),i.child=La(i,null,a,h)):Bt(t,i,a,h),i.memoizedState=f.state,t=i.child):t=qi(t,i,h),t}function Jy(t,i,a,l){return Jo(),i.flags|=256,Bt(t,i,a,l),i.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(t){return{baseLanes:t,cachePool:zg()}}function Tf(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Pn),t}function e0(t,i,a){var l=i.pendingProps,h=!1,f=(i.flags&128)!==0,E;if((E=f)||(E=t!==null&&t.memoizedState===null?!1:(It.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Be){if(h?br(i):Tr(),Be){var T=ht,I;if(I=T){e:{for(I=T,T=oi;I.nodeType!==8;){if(!T){T=null;break e}if(I=Fn(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(i.memoizedState={dehydrated:T,treeContext:Ds!==null?{id:ki,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},I=mn(18,null,null,0),I.stateNode=T,I.return=i,i.child=I,sn=i,ht=null,I=!0):I=!1}I||Ps(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return sm(T)?i.lanes=32:i.lanes=536870912,null;Bi(i)}return T=l.children,l=l.fallback,h?(Tr(),h=i.mode,T=xu({mode:"hidden",children:T},h),l=Ns(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=bf(a),h.childLanes=Tf(t,E,a),i.memoizedState=Ef,l):(br(i),wf(i,T))}if(I=t.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(f)i.flags&256?(br(i),i.flags&=-257,i=xf(t,i,a)):i.memoizedState!==null?(Tr(),i.child=t.child,i.flags|=128,i=null):(Tr(),h=l.fallback,T=i.mode,l=xu({mode:"visible",children:l.children},T),h=Ns(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,La(i,t.child,null,a),l=i.child,l.memoizedState=bf(a),l.childLanes=Tf(t,E,a),i.memoizedState=Ef,i=h);else if(br(i),sm(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var H=E.dgst;E=H,l=Error(s(419)),l.stack="",l.digest=E,el({value:l,source:null,stack:null}),i=xf(t,i,a)}else if(Vt||tl(t,i,a,!1),E=(a&t.childLanes)!==0,Vt||E){if(E=nt,E!==null&&(l=a&-a,l=(l&42)!==0?1:cr(l),l=(l&(E.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Ra(t,l),_n(E,t,l),Gy;T.data==="$?"||qf(),i=xf(t,i,a)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,ht=Fn(T.nextSibling),sn=i,Be=!0,Ms=null,oi=!1,t!==null&&(Dn[On++]=ki,Dn[On++]=ji,Dn[On++]=Ds,ki=t.id,ji=t.overflow,Ds=i),i=wf(i,l.children),i.flags|=4096);return i}return h?(Tr(),h=l.fallback,T=i.mode,I=t.child,H=I.sibling,l=Vi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,H!==null?h=Vi(H,h):(h=Ns(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=bf(a):(I=T.cachePool,I!==null?(H=Ct._currentValue,I=I.parent!==H?{parent:H,pool:H}:I):I=zg(),T={baseLanes:T.baseLanes|a,cachePool:I}),h.memoizedState=T,h.childLanes=Tf(t,E,a),i.memoizedState=Ef,l):(br(i),a=t.child,t=a.sibling,a=Vi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=a,i.memoizedState=null,a)}function wf(t,i){return i=xu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function xu(t,i){return t=mn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function xf(t,i,a){return La(i,t.child,null,a),t=wf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function t0(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Bd(t.return,i,a)}function Sf(t,i,a,l,h){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=a,f.tailMode=h)}function n0(t,i,a){var l=i.pendingProps,h=l.revealOrder,f=l.tail;if(Bt(t,i,l.children,a),l=It.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t0(t,a,i);else if(t.tag===19)t0(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(re(It,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Eu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Sf(i,!1,h,a,f);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Eu(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Sf(i,!0,a,null,f);break;case"together":Sf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Rr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(tl(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Vi(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Vi(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Af(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ru(t)))}function qb(t,i,a){switch(i.tag){case 3:tt(i,i.stateNode.containerInfo),gr(i,Ct,t.memoizedState.cache),Jo();break;case 27:case 5:lr(i);break;case 4:tt(i,i.stateNode.containerInfo);break;case 10:gr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(br(i),i.flags|=128,null):(a&i.child.childLanes)!==0?e0(t,i,a):(br(i),t=qi(t,i,a),t!==null?t.sibling:null);br(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(tl(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return n0(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(It,It.current),l)break;return null;case 22:case 23:return i.lanes=0,$y(t,i,a);case 24:gr(i,Ct,t.memoizedState.cache)}return qi(t,i,a)}function i0(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Vt=!0;else{if(!Af(t,a)&&(i.flags&128)===0)return Vt=!1,qb(t,i,a);Vt=(t.flags&131072)!==0}else Vt=!1,Be&&(i.flags&1048576)!==0&&Mg(i,iu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Pd(l)?(t=Us(l,t),i.tag=1,i=Zy(null,i,l,t,a)):(i.tag=0,i=_f(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===le){i.tag=11,i=Yy(null,i,l,t,a);break e}else if(h===V){i.tag=14,i=Qy(null,i,l,t,a);break e}}throw i=rt(l)||l,Error(s(306,i,""))}}return i;case 0:return _f(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Us(l,i.pendingProps),Zy(t,i,l,h,a);case 3:e:{if(tt(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var f=i.memoizedState;h=f.element,Kd(t,i),ll(i,l,null,a);var E=i.memoizedState;if(l=E.cache,gr(i,Ct,l),l!==f.cache&&qd(i,[Ct],a,!0),ol(),l=E.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=Jy(t,i,l,a);break e}else if(l!==h){h=In(Error(s(424)),i),el(h),i=Jy(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ht=Fn(t.firstChild),sn=i,Be=!0,Ms=null,oi=!0,a=Vy(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Jo(),l===h){i=qi(t,i,a);break e}Bt(t,i,l,a)}i=i.child}return i;case 26:return wu(t,i),t===null?(a=o1(i.type,null,i.pendingProps,null))?i.memoizedState=a:Be||(a=i.type,t=i.pendingProps,l=Lu(we.current).createElement(a),l[St]=i,l[vt]=t,Ft(l,a,t),mt(l),i.stateNode=l):i.memoizedState=o1(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return lr(i),t===null&&Be&&(l=i.stateNode=r1(i.type,i.pendingProps,we.current),sn=i,oi=!0,h=ht,Dr(i.type)?(am=h,ht=Fn(l.firstChild)):ht=h),Bt(t,i,i.pendingProps.children,a),wu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Be&&((h=l=ht)&&(l=gT(l,i.type,i.pendingProps,oi),l!==null?(i.stateNode=l,sn=i,ht=Fn(l.firstChild),oi=!1,h=!0):h=!1),h||Ps(i)),lr(i),h=i.type,f=i.pendingProps,E=t!==null?t.memoizedProps:null,l=f.children,nm(h,f)?l=null:E!==null&&nm(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=ef(t,i,Pb,null,null,a),Nl._currentValue=h),wu(t,i),Bt(t,i,l,a),i.child;case 6:return t===null&&Be&&((t=a=ht)&&(a=yT(a,i.pendingProps,oi),a!==null?(i.stateNode=a,sn=i,ht=null,t=!0):t=!1),t||Ps(i)),null;case 13:return e0(t,i,a);case 4:return tt(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=La(i,null,l,a):Bt(t,i,l,a),i.child;case 11:return Yy(t,i,i.type,i.pendingProps,a);case 7:return Bt(t,i,i.pendingProps,a),i.child;case 8:return Bt(t,i,i.pendingProps.children,a),i.child;case 12:return Bt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,gr(i,i.type,l.value),Bt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,ks(i),h=$t(h),l=l(h),i.flags|=1,Bt(t,i,l,a),i.child;case 14:return Qy(t,i,i.type,i.pendingProps,a);case 15:return Ky(t,i,i.type,i.pendingProps,a);case 19:return n0(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=xu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Vi(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return $y(t,i,a);case 24:return ks(i),l=$t(Ct),t===null?(h=Gd(),h===null&&(h=nt,f=Fd(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=a),h=f),i.memoizedState={parent:l,cache:h},Qd(i),gr(i,Ct,h)):((t.lanes&a)!==0&&(Kd(t,i),ll(i,null,null,a),ol()),h=t.memoizedState,f=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),gr(i,Ct,l)):(l=f.cache,gr(i,Ct,l),l!==h.cache&&qd(i,[Ct],a,!0))),Bt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Fi(t){t.flags|=4}function r0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!d1(i)){if(i=Mn.current,i!==null&&((Le&4194048)===Le?li!==null:(Le&62914560)!==Le&&(Le&536870912)===0||i!==li))throw sl=Yd,Bg;t.flags|=8192}}function Su(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Oo():536870912,t.lanes|=i,qa|=i)}function pl(t,i){if(!Be)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ot(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function Fb(t,i,a){var l=i.pendingProps;switch(Ld(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(i),null;case 1:return ot(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ui(Ct),$n(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zo(i)?Fi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kg())),ot(i),null;case 26:return a=i.memoizedState,t===null?(Fi(i),a!==null?(ot(i),r0(i,a)):(ot(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Fi(i),ot(i),r0(i,a)):(ot(i),i.flags&=-16777217):(t.memoizedProps!==l&&Fi(i),ot(i),i.flags&=-16777217),null;case 27:Ti(i),a=we.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Fi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ot(i),null}t=ye.current,Zo(i)?Pg(i):(t=r1(h,l,a),i.stateNode=t,Fi(i))}return ot(i),null;case 5:if(Ti(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Fi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ot(i),null}if(t=ye.current,Zo(i))Pg(i);else{switch(h=Lu(we.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[St]=i,t[vt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Ft(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Fi(i)}}return ot(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Fi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=we.current,Zo(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=sn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[St]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||W0(t.nodeValue,a)),t||Ps(i)}else t=Lu(t).createTextNode(l),t[St]=i,i.stateNode=t}return ot(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Zo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[St]=i}else Jo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ot(i),h=!1}else h=kg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Bi(i),i):(Bi(i),null)}if(Bi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),Su(i,i.updateQueue),ot(i),null;case 4:return $n(),t===null&&Wf(i.stateNode.containerInfo),ot(i),null;case 10:return Ui(i.type),ot(i),null;case 19:if(ce(It),h=i.memoizedState,h===null)return ot(i),null;if(l=(i.flags&128)!==0,f=h.rendering,f===null)if(l)pl(h,!1);else{if(dt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(f=Eu(t),f!==null){for(i.flags|=128,pl(h,!1),t=f.updateQueue,i.updateQueue=t,Su(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Og(a,t),a=a.sibling;return re(It,It.current&1|2),i.child}t=t.sibling}h.tail!==null&&wn()>Cu&&(i.flags|=128,l=!0,pl(h,!1),i.lanes=4194304)}else{if(!l)if(t=Eu(f),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,Su(i,t),pl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Be)return ot(i),null}else 2*wn()-h.renderingStartTime>Cu&&a!==536870912&&(i.flags|=128,l=!0,pl(h,!1),i.lanes=4194304);h.isBackwards?(f.sibling=i.child,i.child=f):(t=h.last,t!==null?t.sibling=f:i.child=f,h.last=f)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=wn(),i.sibling=null,t=It.current,re(It,l?t&1|2:t&1),i):(ot(i),null);case 22:case 23:return Bi(i),Zd(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ot(i),i.subtreeFlags&6&&(i.flags|=8192)):ot(i),a=i.updateQueue,a!==null&&Su(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&ce(js),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ui(Ct),ot(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Hb(t,i){switch(Ld(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ui(Ct),$n(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ti(i),null;case 13:if(Bi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Jo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ce(It),null;case 4:return $n(),null;case 10:return Ui(i.type),null;case 22:case 23:return Bi(i),Zd(),t!==null&&ce(js),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ui(Ct),null;case 25:return null;default:return null}}function s0(t,i){switch(Ld(i),i.tag){case 3:Ui(Ct),$n();break;case 26:case 27:case 5:Ti(i);break;case 4:$n();break;case 13:Bi(i);break;case 19:ce(It);break;case 10:Ui(i.type);break;case 22:case 23:Bi(i),Zd(),t!==null&&ce(js);break;case 24:Ui(Ct)}}function gl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var f=a.create,E=a.inst;l=f(),E.destroy=l}a=a.next}while(a!==h)}}catch(T){et(i,i.return,T)}}function wr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var f=h.next;l=f;do{if((l.tag&t)===t){var E=l.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,h=i;var I=a,H=T;try{H()}catch(X){et(h,I,X)}}}l=l.next}while(l!==f)}}catch(X){et(i,i.return,X)}}function a0(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Qg(i,a)}catch(l){et(t,t.return,l)}}}function o0(t,i,a){a.props=Us(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){et(t,i,l)}}function yl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){et(t,i,h)}}function ci(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){et(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){et(t,i,h)}else a.current=null}function l0(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){et(t,t.return,h)}}function Rf(t,i,a){try{var l=t.stateNode;hT(l,t.type,a,i),l[vt]=i}catch(h){et(t,t.return,h)}}function c0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Dr(t.type)||t.tag===4}function Cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Dr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ju));else if(l!==4&&(l===27&&Dr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(If(t,i,a),t=t.sibling;t!==null;)If(t,i,a),t=t.sibling}function Au(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Dr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Au(t,i,a),t=t.sibling;t!==null;)Au(t,i,a),t=t.sibling}function u0(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ft(i,l,a),i[St]=t,i[vt]=a}catch(f){et(t,t.return,f)}}var Hi=!1,gt=!1,Nf=!1,h0=typeof WeakSet=="function"?WeakSet:Set,kt=null;function Gb(t,i){if(t=t.containerInfo,em=Hu,t=Tg(t),Rd(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var E=0,T=-1,I=-1,H=0,X=0,J=t,G=null;t:for(;;){for(var Y;J!==a||h!==0&&J.nodeType!==3||(T=E+h),J!==f||l!==0&&J.nodeType!==3||(I=E+l),J.nodeType===3&&(E+=J.nodeValue.length),(Y=J.firstChild)!==null;)G=J,J=Y;for(;;){if(J===t)break t;if(G===a&&++H===h&&(T=E),G===f&&++X===l&&(I=E),(Y=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=Y}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(tm={focusedElem:t,selectionRange:a},Hu=!1,kt=i;kt!==null;)if(i=kt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,kt=t;else for(;kt!==null;){switch(i=kt,f=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=i,h=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var Te=Us(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(Te,f),l.__reactInternalSnapshotBeforeUpdate=t}catch(ve){et(a,a.return,ve)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)rm(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rm(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,kt=t;break}kt=i.return}}function d0(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:xr(t,a),l&4&&gl(5,a);break;case 1:if(xr(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(E){et(a,a.return,E)}else{var h=Us(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){et(a,a.return,E)}}l&64&&a0(a),l&512&&yl(a,a.return);break;case 3:if(xr(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Qg(t,i)}catch(E){et(a,a.return,E)}}break;case 27:i===null&&l&4&&u0(a);case 26:case 5:xr(t,a),i===null&&l&4&&l0(a),l&512&&yl(a,a.return);break;case 12:xr(t,a);break;case 13:xr(t,a),l&4&&p0(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=eT.bind(null,a),vT(t,a))));break;case 22:if(l=a.memoizedState!==null||Hi,!l){i=i!==null&&i.memoizedState!==null||gt,h=Hi;var f=gt;Hi=l,(gt=i)&&!f?Sr(t,a,(a.subtreeFlags&8772)!==0):xr(t,a),Hi=h,gt=f}break;case 30:break;default:xr(t,a)}}function f0(t){var i=t.alternate;i!==null&&(t.alternate=null,f0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&dr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var at=null,on=!1;function Gi(t,i,a){for(a=a.child;a!==null;)m0(t,i,a),a=a.sibling}function m0(t,i,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:gt||ci(a,i),Gi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gt||ci(a,i);var l=at,h=on;Dr(a.type)&&(at=a.stateNode,on=!1),Gi(t,i,a),Al(a.stateNode),at=l,on=h;break;case 5:gt||ci(a,i);case 6:if(l=at,h=on,at=null,Gi(t,i,a),at=l,on=h,at!==null)if(on)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(a.stateNode)}catch(f){et(a,i,f)}else try{at.removeChild(a.stateNode)}catch(f){et(a,i,f)}break;case 18:at!==null&&(on?(t=at,n1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Pl(t)):n1(at,a.stateNode));break;case 4:l=at,h=on,at=a.stateNode.containerInfo,on=!0,Gi(t,i,a),at=l,on=h;break;case 0:case 11:case 14:case 15:gt||wr(2,a,i),gt||wr(4,a,i),Gi(t,i,a);break;case 1:gt||(ci(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&o0(a,i,l)),Gi(t,i,a);break;case 21:Gi(t,i,a);break;case 22:gt=(l=gt)||a.memoizedState!==null,Gi(t,i,a),gt=l;break;default:Gi(t,i,a)}}function p0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Pl(t)}catch(a){et(i,i.return,a)}}function Yb(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new h0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new h0),i;default:throw Error(s(435,t.tag))}}function Df(t,i){var a=Yb(t);i.forEach(function(l){var h=tT.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function pn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],f=t,E=i,T=E;e:for(;T!==null;){switch(T.tag){case 27:if(Dr(T.type)){at=T.stateNode,on=!1;break e}break;case 5:at=T.stateNode,on=!1;break e;case 3:case 4:at=T.stateNode.containerInfo,on=!0;break e}T=T.return}if(at===null)throw Error(s(160));m0(f,E,h),at=null,on=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)g0(i,t),i=i.sibling}var qn=null;function g0(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pn(i,t),gn(t),l&4&&(wr(3,t,t.return),gl(3,t),wr(5,t,t.return));break;case 1:pn(i,t),gn(t),l&512&&(gt||a===null||ci(a,a.return)),l&64&&Hi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=qn;if(pn(i,t),gn(t),l&512&&(gt||a===null||ci(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":f=h.getElementsByTagName("title")[0],(!f||f[ms]||f[St]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(l),h.head.insertBefore(f,h.querySelector("head > title"))),Ft(f,l,a),f[St]=t,mt(f),l=f;break e;case"link":var E=u1("link","href",h).get(l+(a.href||""));if(E){for(var T=0;T<E.length;T++)if(f=E[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(T,1);break t}}f=h.createElement(l),Ft(f,l,a),h.head.appendChild(f);break;case"meta":if(E=u1("meta","content",h).get(l+(a.content||""))){for(T=0;T<E.length;T++)if(f=E[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(T,1);break t}}f=h.createElement(l),Ft(f,l,a),h.head.appendChild(f);break;default:throw Error(s(468,l))}f[St]=t,mt(f),l=f}t.stateNode=l}else h1(h,t.type,t.stateNode);else t.stateNode=c1(h,l,t.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?h1(h,t.type,t.stateNode):c1(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Rf(t,t.memoizedProps,a.memoizedProps)}break;case 27:pn(i,t),gn(t),l&512&&(gt||a===null||ci(a,a.return)),a!==null&&l&4&&Rf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(pn(i,t),gn(t),l&512&&(gt||a===null||ci(a,a.return)),t.flags&32){h=t.stateNode;try{Sn(h,"")}catch(Y){et(t,t.return,Y)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Rf(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Nf=!0);break;case 6:if(pn(i,t),gn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(Y){et(t,t.return,Y)}}break;case 3:if(Bu=null,h=qn,qn=Uu(i.containerInfo),pn(i,t),qn=h,gn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Pl(i.containerInfo)}catch(Y){et(t,t.return,Y)}Nf&&(Nf=!1,y0(t));break;case 4:l=qn,qn=Uu(t.stateNode.containerInfo),pn(i,t),gn(t),qn=l;break;case 12:pn(i,t),gn(t);break;case 13:pn(i,t),gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jf=wn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Df(t,l)));break;case 22:h=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,H=Hi,X=gt;if(Hi=H||h,gt=X||I,pn(i,t),gt=X,Hi=H,gn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||I||Hi||gt||zs(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(f=I.stateNode,h)E=f.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=I.stateNode;var J=I.memoizedProps.style,G=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(Y){et(I,I.return,Y)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(Y){et(I,I.return,Y)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Df(t,a))));break;case 19:pn(i,t),gn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Df(t,l)));break;case 30:break;case 21:break;default:pn(i,t),gn(t)}}function gn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(c0(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,f=Cf(t);Au(t,f,h);break;case 5:var E=a.stateNode;a.flags&32&&(Sn(E,""),a.flags&=-33);var T=Cf(t);Au(t,T,E);break;case 3:case 4:var I=a.stateNode.containerInfo,H=Cf(t);If(t,H,I);break;default:throw Error(s(161))}}catch(X){et(t,t.return,X)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function y0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;y0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function xr(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)d0(t,i.alternate,i),i=i.sibling}function zs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:wr(4,i,i.return),zs(i);break;case 1:ci(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&o0(i,i.return,a),zs(i);break;case 27:Al(i.stateNode);case 26:case 5:ci(i,i.return),zs(i);break;case 22:i.memoizedState===null&&zs(i);break;case 30:zs(i);break;default:zs(i)}t=t.sibling}}function Sr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,f=i,E=f.flags;switch(f.tag){case 0:case 11:case 15:Sr(h,f,a),gl(4,f);break;case 1:if(Sr(h,f,a),l=f,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(H){et(l,l.return,H)}if(l=f,h=l.updateQueue,h!==null){var T=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)Yg(I[h],T)}catch(H){et(l,l.return,H)}}a&&E&64&&a0(f),yl(f,f.return);break;case 27:u0(f);case 26:case 5:Sr(h,f,a),a&&l===null&&E&4&&l0(f),yl(f,f.return);break;case 12:Sr(h,f,a);break;case 13:Sr(h,f,a),a&&E&4&&p0(h,f);break;case 22:f.memoizedState===null&&Sr(h,f,a),yl(f,f.return);break;case 30:break;default:Sr(h,f,a)}i=i.sibling}}function Of(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&nl(a))}function Mf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&nl(t))}function ui(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)v0(t,i,a,l),i=i.sibling}function v0(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ui(t,i,a,l),h&2048&&gl(9,i);break;case 1:ui(t,i,a,l);break;case 3:ui(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&nl(t)));break;case 12:if(h&2048){ui(t,i,a,l),t=i.stateNode;try{var f=i.memoizedProps,E=f.id,T=f.onPostCommit;typeof T=="function"&&T(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){et(i,i.return,I)}}else ui(t,i,a,l);break;case 13:ui(t,i,a,l);break;case 23:break;case 22:f=i.stateNode,E=i.alternate,i.memoizedState!==null?f._visibility&2?ui(t,i,a,l):vl(t,i):f._visibility&2?ui(t,i,a,l):(f._visibility|=2,Ua(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Of(E,i);break;case 24:ui(t,i,a,l),h&2048&&Mf(i.alternate,i);break;default:ui(t,i,a,l)}}function Ua(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var f=t,E=i,T=a,I=l,H=E.flags;switch(E.tag){case 0:case 11:case 15:Ua(f,E,T,I,h),gl(8,E);break;case 23:break;case 22:var X=E.stateNode;E.memoizedState!==null?X._visibility&2?Ua(f,E,T,I,h):vl(f,E):(X._visibility|=2,Ua(f,E,T,I,h)),h&&H&2048&&Of(E.alternate,E);break;case 24:Ua(f,E,T,I,h),h&&H&2048&&Mf(E.alternate,E);break;default:Ua(f,E,T,I,h)}i=i.sibling}}function vl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:vl(a,l),h&2048&&Of(l.alternate,l);break;case 24:vl(a,l),h&2048&&Mf(l.alternate,l);break;default:vl(a,l)}i=i.sibling}}var _l=8192;function za(t){if(t.subtreeFlags&_l)for(t=t.child;t!==null;)_0(t),t=t.sibling}function _0(t){switch(t.tag){case 26:za(t),t.flags&_l&&t.memoizedState!==null&&DT(qn,t.memoizedState,t.memoizedProps);break;case 5:za(t);break;case 3:case 4:var i=qn;qn=Uu(t.stateNode.containerInfo),za(t),qn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=_l,_l=16777216,za(t),_l=i):za(t));break;default:za(t)}}function E0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function El(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,T0(l,t)}E0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)b0(t),t=t.sibling}function b0(t){switch(t.tag){case 0:case 11:case 15:El(t),t.flags&2048&&wr(9,t,t.return);break;case 3:El(t);break;case 12:El(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ru(t)):El(t);break;default:El(t)}}function Ru(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,T0(l,t)}E0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:wr(8,i,i.return),Ru(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Ru(i));break;default:Ru(i)}t=t.sibling}}function T0(t,i){for(;kt!==null;){var a=kt;switch(a.tag){case 0:case 11:case 15:wr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:nl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,kt=l;else e:for(a=t;kt!==null;){l=kt;var h=l.sibling,f=l.return;if(f0(l),l===a){kt=null;break e}if(h!==null){h.return=f,kt=h;break e}kt=f}}}var Qb={getCacheForType:function(t){var i=$t(Ct),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},Kb=typeof WeakMap=="function"?WeakMap:Map,Ye=0,nt=null,Ne=null,Le=0,Qe=0,yn=null,Ar=!1,Ba=!1,Pf=!1,Yi=0,dt=0,Rr=0,Bs=0,Vf=0,Pn=0,qa=0,bl=null,ln=null,kf=!1,jf=0,Cu=1/0,Iu=null,Cr=null,qt=0,Ir=null,Fa=null,Ha=0,Lf=0,Uf=null,w0=null,Tl=0,zf=null;function vn(){if((Ye&2)!==0&&Le!==0)return Le&-Le;if($.T!==null){var t=Da;return t!==0?t:Qf()}return ur()}function x0(){Pn===0&&(Pn=(Le&536870912)===0||Be?Do():536870912);var t=Mn.current;return t!==null&&(t.flags|=32),Pn}function _n(t,i,a){(t===nt&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)&&(Ga(t,0),Nr(t,Le,Pn,!1)),xi(t,a),((Ye&2)===0||t!==nt)&&(t===nt&&((Ye&2)===0&&(Bs|=a),dt===4&&Nr(t,Le,Pn,!1)),hi(t))}function S0(t,i,a){if((Ye&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||fs(t,i),h=l?Wb(t,i):Ff(t,i,!0),f=l;do{if(h===0){Ba&&!l&&Nr(t,i,0,!1);break}else{if(a=t.current.alternate,f&&!$b(a)){h=Ff(t,i,!1),f=!1;continue}if(h===2){if(f=i,t.errorRecoveryDisabledLanes&f)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var T=t;h=bl;var I=T.current.memoizedState.isDehydrated;if(I&&(Ga(T,E).flags|=256),E=Ff(T,E,!1),E!==2){if(Pf&&!I){T.errorRecoveryDisabledLanes|=f,Bs|=f,h=4;break e}f=ln,ln=h,f!==null&&(ln===null?ln=f:ln.push.apply(ln,f))}h=E}if(f=!1,h!==2)continue}}if(h===1){Ga(t,0),Nr(t,i,0,!0);break}e:{switch(l=t,f=h,f){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Nr(l,i,Pn,!Ar);break e;case 2:ln=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=jf+300-wn(),10<h)){if(Nr(l,i,Pn,!Ar),la(l,0,!0)!==0)break e;l.timeoutHandle=e1(A0.bind(null,l,a,ln,Iu,kf,i,Pn,Bs,qa,Ar,f,2,-0,0),h);break e}A0(l,a,ln,Iu,kf,i,Pn,Bs,qa,Ar,f,0,-0,0)}}break}while(!0);hi(t)}function A0(t,i,a,l,h,f,E,T,I,H,X,J,G,Y){if(t.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Il={stylesheets:null,count:0,unsuspend:NT},_0(i),J=OT(),J!==null)){t.cancelPendingCommit=J(M0.bind(null,t,i,f,a,l,h,E,T,I,X,1,G,Y)),Nr(t,f,E,!H);return}M0(t,i,f,a,l,h,E,T,I)}function $b(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],f=h.getSnapshot;h=h.value;try{if(!fn(f(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(t,i,a,l){i&=~Vf,i&=~Bs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var f=31-Kt(h),E=1<<f;l[f]=-1,h&=~E}a!==0&&Xn(t,a,i)}function Nu(){return(Ye&6)===0?(wl(0),!1):!0}function Bf(){if(Ne!==null){if(Qe===0)var t=Ne.return;else t=Ne,Li=Vs=null,rf(t),ja=null,fl=0,t=Ne;for(;t!==null;)s0(t.alternate,t),t=t.return;Ne=null}}function Ga(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,fT(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Bf(),nt=t,Ne=a=Vi(t.current,null),Le=i,Qe=0,yn=null,Ar=!1,Ba=fs(t,i),Pf=!1,qa=Pn=Vf=Bs=Rr=dt=0,ln=bl=null,kf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Kt(l),f=1<<h;i|=t[h],l&=~f}return Yi=i,Zc(),a}function R0(t,i){Re=null,$.H=yu,i===rl||i===ou?(i=Hg(),Qe=3):i===Bg?(i=Hg(),Qe=4):Qe=i===Gy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,yn=i,Ne===null&&(dt=1,Tu(t,In(i,t.current)))}function C0(){var t=$.H;return $.H=yu,t===null?yu:t}function I0(){var t=$.A;return $.A=Qb,t}function qf(){dt=4,Ar||(Le&4194048)!==Le&&Mn.current!==null||(Ba=!0),(Rr&134217727)===0&&(Bs&134217727)===0||nt===null||Nr(nt,Le,Pn,!1)}function Ff(t,i,a){var l=Ye;Ye|=2;var h=C0(),f=I0();(nt!==t||Le!==i)&&(Iu=null,Ga(t,i)),i=!1;var E=dt;e:do try{if(Qe!==0&&Ne!==null){var T=Ne,I=yn;switch(Qe){case 8:Bf(),E=6;break e;case 3:case 2:case 9:case 6:Mn.current===null&&(i=!0);var H=Qe;if(Qe=0,yn=null,Ya(t,T,I,H),a&&Ba){E=0;break e}break;default:H=Qe,Qe=0,yn=null,Ya(t,T,I,H)}}Xb(),E=dt;break}catch(X){R0(t,X)}while(!0);return i&&t.shellSuspendCounter++,Li=Vs=null,Ye=l,$.H=h,$.A=f,Ne===null&&(nt=null,Le=0,Zc()),E}function Xb(){for(;Ne!==null;)N0(Ne)}function Wb(t,i){var a=Ye;Ye|=2;var l=C0(),h=I0();nt!==t||Le!==i?(Iu=null,Cu=wn()+500,Ga(t,i)):Ba=fs(t,i);e:do try{if(Qe!==0&&Ne!==null){i=Ne;var f=yn;t:switch(Qe){case 1:Qe=0,yn=null,Ya(t,i,f,1);break;case 2:case 9:if(qg(f)){Qe=0,yn=null,D0(i);break}i=function(){Qe!==2&&Qe!==9||nt!==t||(Qe=7),hi(t)},f.then(i,i);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:qg(f)?(Qe=0,yn=null,D0(i)):(Qe=0,yn=null,Ya(t,i,f,7));break;case 5:var E=null;switch(Ne.tag){case 26:E=Ne.memoizedState;case 5:case 27:var T=Ne;if(!E||d1(E)){Qe=0,yn=null;var I=T.sibling;if(I!==null)Ne=I;else{var H=T.return;H!==null?(Ne=H,Du(H)):Ne=null}break t}}Qe=0,yn=null,Ya(t,i,f,5);break;case 6:Qe=0,yn=null,Ya(t,i,f,6);break;case 8:Bf(),dt=6;break e;default:throw Error(s(462))}}Zb();break}catch(X){R0(t,X)}while(!0);return Li=Vs=null,$.H=l,$.A=h,Ye=a,Ne!==null?0:(nt=null,Le=0,Zc(),dt)}function Zb(){for(;Ne!==null&&!Ro();)N0(Ne)}function N0(t){var i=i0(t.alternate,t,Yi);t.memoizedProps=t.pendingProps,i===null?Du(t):Ne=i}function D0(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=Wy(a,i,i.pendingProps,i.type,void 0,Le);break;case 11:i=Wy(a,i,i.pendingProps,i.type.render,i.ref,Le);break;case 5:rf(i);default:s0(a,i),i=Ne=Og(i,Yi),i=i0(a,i,Yi)}t.memoizedProps=t.pendingProps,i===null?Du(t):Ne=i}function Ya(t,i,a,l){Li=Vs=null,rf(i),ja=null,fl=0;var h=i.return;try{if(Bb(t,h,i,a,Le)){dt=1,Tu(t,In(a,t.current)),Ne=null;return}}catch(f){if(h!==null)throw Ne=h,f;dt=1,Tu(t,In(a,t.current)),Ne=null;return}i.flags&32768?(Be||l===1?t=!0:Ba||(Le&536870912)!==0?t=!1:(Ar=t=!0,(l===2||l===9||l===3||l===6)&&(l=Mn.current,l!==null&&l.tag===13&&(l.flags|=16384))),O0(i,t)):Du(i)}function Du(t){var i=t;do{if((i.flags&32768)!==0){O0(i,Ar);return}t=i.return;var a=Fb(i.alternate,i,Yi);if(a!==null){Ne=a;return}if(i=i.sibling,i!==null){Ne=i;return}Ne=i=t}while(i!==null);dt===0&&(dt=5)}function O0(t,i){do{var a=Hb(t.alternate,t);if(a!==null){a.flags&=32767,Ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ne=t;return}Ne=t=a}while(t!==null);dt=6,Ne=null}function M0(t,i,a,l,h,f,E,T,I){t.cancelPendingCommit=null;do Ou();while(qt!==0);if((Ye&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(f=i.lanes|i.childLanes,f|=Od,Mo(t,a,f,E,T,I),t===nt&&(Ne=nt=null,Le=0),Fa=i,Ir=t,Ha=a,Lf=f,Uf=h,w0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nT(cs,function(){return L0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=$.T,$.T=null,h=oe.p,oe.p=2,E=Ye,Ye|=4;try{Gb(t,i,a)}finally{Ye=E,oe.p=h,$.T=l}}qt=1,P0(),V0(),k0()}}function P0(){if(qt===1){qt=0;var t=Ir,i=Fa,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=$.T,$.T=null;var l=oe.p;oe.p=2;var h=Ye;Ye|=4;try{g0(i,t);var f=tm,E=Tg(t.containerInfo),T=f.focusedElem,I=f.selectionRange;if(E!==T&&T&&T.ownerDocument&&bg(T.ownerDocument.documentElement,T)){if(I!==null&&Rd(T)){var H=I.start,X=I.end;if(X===void 0&&(X=H),"selectionStart"in T)T.selectionStart=H,T.selectionEnd=Math.min(X,T.value.length);else{var J=T.ownerDocument||document,G=J&&J.defaultView||window;if(G.getSelection){var Y=G.getSelection(),Te=T.textContent.length,ve=Math.min(I.start,Te),We=I.end===void 0?ve:Math.min(I.end,Te);!Y.extend&&ve>We&&(E=We,We=ve,ve=E);var L=Eg(T,ve),P=Eg(T,We);if(L&&P&&(Y.rangeCount!==1||Y.anchorNode!==L.node||Y.anchorOffset!==L.offset||Y.focusNode!==P.node||Y.focusOffset!==P.offset)){var F=J.createRange();F.setStart(L.node,L.offset),Y.removeAllRanges(),ve>We?(Y.addRange(F),Y.extend(P.node,P.offset)):(F.setEnd(P.node,P.offset),Y.addRange(F))}}}}for(J=[],Y=T;Y=Y.parentNode;)Y.nodeType===1&&J.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var W=J[T];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Hu=!!em,tm=em=null}finally{Ye=h,oe.p=l,$.T=a}}t.current=i,qt=2}}function V0(){if(qt===2){qt=0;var t=Ir,i=Fa,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=$.T,$.T=null;var l=oe.p;oe.p=2;var h=Ye;Ye|=4;try{d0(t,i.alternate,i)}finally{Ye=h,oe.p=l,$.T=a}}qt=3}}function k0(){if(qt===4||qt===3){qt=0,Rc();var t=Ir,i=Fa,a=Ha,l=w0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?qt=5:(qt=0,Fa=Ir=null,j0(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Cr=null),ca(a),i=i.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ut,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=$.T,h=oe.p,oe.p=2,$.T=null;try{for(var f=t.onRecoverableError,E=0;E<l.length;E++){var T=l[E];f(T.value,{componentStack:T.stack})}}finally{$.T=i,oe.p=h}}(Ha&3)!==0&&Ou(),hi(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===zf?Tl++:(Tl=0,zf=t):Tl=0,wl(0)}}function j0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,nl(i)))}function Ou(t){return P0(),V0(),k0(),L0()}function L0(){if(qt!==5)return!1;var t=Ir,i=Lf;Lf=0;var a=ca(Ha),l=$.T,h=oe.p;try{oe.p=32>a?32:a,$.T=null,a=Uf,Uf=null;var f=Ir,E=Ha;if(qt=0,Fa=Ir=null,Ha=0,(Ye&6)!==0)throw Error(s(331));var T=Ye;if(Ye|=4,b0(f.current),v0(f,f.current,E,a),Ye=T,wl(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{oe.p=h,$.T=l,j0(t,i)}}function U0(t,i,a){i=In(a,i),i=vf(t.stateNode,i,2),t=_r(t,i,2),t!==null&&(xi(t,2),hi(t))}function et(t,i,a){if(t.tag===3)U0(t,t,a);else for(;i!==null;){if(i.tag===3){U0(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Cr===null||!Cr.has(l))){t=In(a,t),a=Fy(2),l=_r(i,a,2),l!==null&&(Hy(a,l,i,t),xi(l,2),hi(l));break}}i=i.return}}function Hf(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Kb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Pf=!0,h.add(a),t=Jb.bind(null,t,i,a),i.then(t,t))}function Jb(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,nt===t&&(Le&a)===a&&(dt===4||dt===3&&(Le&62914560)===Le&&300>wn()-jf?(Ye&2)===0&&Ga(t,0):Vf|=a,qa===Le&&(qa=0)),hi(t)}function z0(t,i){i===0&&(i=Oo()),t=Ra(t,i),t!==null&&(xi(t,i),hi(t))}function eT(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),z0(t,a)}function tT(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),z0(t,a)}function nT(t,i){return os(t,i)}var Mu=null,Qa=null,Gf=!1,Pu=!1,Yf=!1,qs=0;function hi(t){t!==Qa&&t.next===null&&(Qa===null?Mu=Qa=t:Qa=Qa.next=t),Pu=!0,Gf||(Gf=!0,rT())}function wl(t,i){if(!Yf&&Pu){Yf=!0;do for(var a=!1,l=Mu;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var f=0;else{var E=l.suspendedLanes,T=l.pingedLanes;f=(1<<31-Kt(42|t)+1)-1,f&=h&~(E&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,H0(l,f))}else f=Le,f=la(l,l===nt?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||fs(l,f)||(a=!0,H0(l,f));l=l.next}while(a);Yf=!1}}function iT(){B0()}function B0(){Pu=Gf=!1;var t=0;qs!==0&&(dT()&&(t=qs),qs=0);for(var i=wn(),a=null,l=Mu;l!==null;){var h=l.next,f=q0(l,i);f===0?(l.next=null,a===null?Mu=h:a.next=h,h===null&&(Qa=a)):(a=l,(t!==0||(f&3)!==0)&&(Pu=!0)),l=h}wl(t)}function q0(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var E=31-Kt(f),T=1<<E,I=h[E];I===-1?((T&a)===0||(T&l)!==0)&&(h[E]=No(T,i)):I<=i&&(t.expiredLanes|=T),f&=~T}if(i=nt,a=Le,a=la(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ls(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||fs(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&ls(l),ca(a)){case 2:case 8:a=aa;break;case 32:a=cs;break;case 268435456:a=oa;break;default:a=cs}return l=F0.bind(null,t),a=os(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&ls(l),t.callbackPriority=2,t.callbackNode=null,2}function F0(t,i){if(qt!==0&&qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ou()&&t.callbackNode!==a)return null;var l=Le;return l=la(t,t===nt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(S0(t,l,i),q0(t,wn()),t.callbackNode!=null&&t.callbackNode===a?F0.bind(null,t):null)}function H0(t,i){if(Ou())return null;S0(t,i,!0)}function rT(){mT(function(){(Ye&6)!==0?os(Co,iT):B0()})}function Qf(){return qs===0&&(qs=Do()),qs}function G0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pa(""+t)}function Y0(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function sT(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var f=G0((h[vt]||null).action),E=l.submitter;E&&(i=(i=E[vt]||null)?G0(i.formAction):E.getAttribute("formAction"),i!==null&&(f=i,E=null));var T=new ga("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qs!==0){var I=E?Y0(h,E):new FormData(h);ff(a,{pending:!0,data:I,method:h.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=E?Y0(h,E):new FormData(h),ff(a,{pending:!0,data:I,method:h.method,action:f},f,I))},currentTarget:h}]})}}for(var Kf=0;Kf<Dd.length;Kf++){var $f=Dd[Kf],aT=$f.toLowerCase(),oT=$f[0].toUpperCase()+$f.slice(1);Bn(aT,"on"+oT)}Bn(Sg,"onAnimationEnd"),Bn(Ag,"onAnimationIteration"),Bn(Rg,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(xb,"onTransitionRun"),Bn(Sb,"onTransitionStart"),Bn(Ab,"onTransitionCancel"),Bn(Cg,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Un("onBeforeInput",["compositionend","keypress","textInput","paste"]),Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function Q0(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var f=void 0;if(i)for(var E=l.length-1;0<=E;E--){var T=l[E],I=T.instance,H=T.currentTarget;if(T=T.listener,I!==f&&h.isPropagationStopped())break e;f=T,h.currentTarget=H;try{f(h)}catch(X){bu(X)}h.currentTarget=null,f=I}else for(E=0;E<l.length;E++){if(T=l[E],I=T.instance,H=T.currentTarget,T=T.listener,I!==f&&h.isPropagationStopped())break e;f=T,h.currentTarget=H;try{f(h)}catch(X){bu(X)}h.currentTarget=null,f=I}}}}function De(t,i){var a=i[Vo];a===void 0&&(a=i[Vo]=new Set);var l=t+"__bubble";a.has(l)||(K0(i,t,2,!1),a.add(l))}function Xf(t,i,a){var l=0;i&&(l|=4),K0(a,t,l,i)}var Vu="_reactListening"+Math.random().toString(36).slice(2);function Wf(t){if(!t[Vu]){t[Vu]=!0,ko.forEach(function(a){a!=="selectionchange"&&(lT.has(a)||Xf(a,!1,t),Xf(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Vu]||(i[Vu]=!0,Xf("selectionchange",!1,i))}}function K0(t,i,a,l){switch(v1(i)){case 2:var h=VT;break;case 8:h=kT;break;default:h=hm}a=h.bind(null,i,a,t),h=void 0,!Rn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Zf(t,i,a,l,h){var f=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var T=l.stateNode.containerInfo;if(T===h)break;if(E===4)for(E=l.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;T!==null;){if(E=Si(T),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){l=f=E;continue e}T=T.parentNode}}l=l.return}jc(function(){var H=f,X=An(a),J=[];e:{var G=Ig.get(t);if(G!==void 0){var Y=ga,Te=t;switch(t){case"keypress":if(ni(a)===0)break e;case"keydown":case"keyup":Y=Ta;break;case"focusin":Te="focus",Y=_a;break;case"focusout":Te="blur",Y=_a;break;case"beforeblur":case"afterblur":Y=_a;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Gc;break;case Sg:case Ag:case Rg:Y=Ea;break;case Cg:Y=Qc;break;case"scroll":case"scrollend":Y=Lc;break;case"wheel":Y=wa;break;case"copy":case"cut":case"paste":Y=ba;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Ko;break;case"toggle":case"beforetoggle":Y=$c}var ve=(i&4)!==0,We=!ve&&(t==="scroll"||t==="scrollend"),L=ve?G!==null?G+"Capture":null:G;ve=[];for(var P=H,F;P!==null;){var W=P;if(F=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||F===null||L===null||(W=bs(P,L),W!=null&&ve.push(Sl(P,W,F))),We)break;P=P.return}0<ve.length&&(G=new Y(G,Te,null,a,X),J.push({event:G,listeners:ve}))}}if((i&7)===0){e:{if(G=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",G&&a!==Ii&&(Te=a.relatedTarget||a.fromElement)&&(Si(Te)||Te[xn]))break e;if((Y||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,Y?(Te=a.relatedTarget||a.toElement,Y=H,Te=Te?Si(Te):null,Te!==null&&(We=c(Te),ve=Te.tag,Te!==We||ve!==5&&ve!==27&&ve!==6)&&(Te=null)):(Y=null,Te=H),Y!==Te)){if(ve=Cn,W="onMouseLeave",L="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(ve=Ko,W="onPointerLeave",L="onPointerEnter",P="pointer"),We=Y==null?G:Zn(Y),F=Te==null?G:Zn(Te),G=new ve(W,P+"leave",Y,a,X),G.target=We,G.relatedTarget=F,W=null,Si(X)===H&&(ve=new ve(L,P+"enter",Te,a,X),ve.target=F,ve.relatedTarget=We,W=ve),We=W,Y&&Te)t:{for(ve=Y,L=Te,P=0,F=ve;F;F=Ka(F))P++;for(F=0,W=L;W;W=Ka(W))F++;for(;0<P-F;)ve=Ka(ve),P--;for(;0<F-P;)L=Ka(L),F--;for(;P--;){if(ve===L||L!==null&&ve===L.alternate)break t;ve=Ka(ve),L=Ka(L)}ve=null}else ve=null;Y!==null&&$0(J,G,Y,ve,!1),Te!==null&&We!==null&&$0(J,We,Te,ve,!0)}}e:{if(G=H?Zn(H):window,Y=G.nodeName&&G.nodeName.toLowerCase(),Y==="select"||Y==="input"&&G.type==="file")var de=mg;else if(Rt(G))if(pg)de=bb;else{de=_b;var Ie=vb}else Y=G.nodeName,!Y||Y.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?H&&Bo(H.elementType)&&(de=mg):de=Eb;if(de&&(de=de(t,H))){Pi(J,de,a,X);break e}Ie&&Ie(t,G,H),t==="focusout"&&H&&G.type==="number"&&H.memoizedProps.value!=null&&mr(G,"number",G.value)}switch(Ie=H?Zn(H):window,t){case"focusin":(Rt(Ie)||Ie.contentEditable==="true")&&(xa=Ie,Cd=H,Wo=null);break;case"focusout":Wo=Cd=xa=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,wg(J,a,X);break;case"selectionchange":if(wb)break;case"keydown":case"keyup":wg(J,a,X)}var pe;if(si)e:{switch(t){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else ke?Q(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(_&&a.locale!=="ko"&&(ke||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&ke&&(pe=Fo()):(ti=X,pr="value"in ti?ti.value:ti.textContent,ke=!0)),Ie=ku(H,_e),0<Ie.length&&(_e=new Yo(_e,t,null,a,X),J.push({event:_e,listeners:Ie}),pe?_e.data=pe:(pe=ae(a),pe!==null&&(_e.data=pe)))),(pe=v?At(t,a):je(t,a))&&(_e=ku(H,"onBeforeInput"),0<_e.length&&(Ie=new Yo("onBeforeInput","beforeinput",null,a,X),J.push({event:Ie,listeners:_e}),Ie.data=pe)),sT(J,t,H,a,X)}Q0(J,i)})}function Sl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function ku(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=bs(t,a),h!=null&&l.unshift(Sl(t,h,f)),h=bs(t,i),h!=null&&l.push(Sl(t,h,f))),t.tag===3)return l;t=t.return}return[]}function Ka(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $0(t,i,a,l,h){for(var f=i._reactName,E=[];a!==null&&a!==l;){var T=a,I=T.alternate,H=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||H===null||(I=H,h?(H=bs(a,f),H!=null&&E.unshift(Sl(a,H,I))):h||(H=bs(a,f),H!=null&&E.push(Sl(a,H,I)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var cT=/\r\n?/g,uT=/\u0000|\uFFFD/g;function X0(t){return(typeof t=="string"?t:""+t).replace(cT,`
`).replace(uT,"")}function W0(t,i){return i=X0(i),X0(t)===i}function ju(){}function Xe(t,i,a,l,h,f){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Sn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Sn(t,""+l);break;case"className":Jn(t,"class",l);break;case"tabIndex":Jn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(t,a,l);break;case"style":zo(t,l,f);break;case"data":if(i!=="object"){Jn(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=pa(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(i!=="input"&&Xe(t,i,"name",h.name,h,null),Xe(t,i,"formEncType",h.formEncType,h,null),Xe(t,i,"formMethod",h.formMethod,h,null),Xe(t,i,"formTarget",h.formTarget,h,null)):(Xe(t,i,"encType",h.encType,h,null),Xe(t,i,"method",h.method,h,null),Xe(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=pa(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=ju);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=pa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":De("beforetoggle",t),De("toggle",t),fr(t,"popover",l);break;case"xlinkActuate":Ut(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bd.get(a)||a,fr(t,a,l))}}function Jf(t,i,a,l,h,f){switch(a){case"style":zo(t,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Sn(t,l):(typeof l=="number"||typeof l=="bigint")&&Sn(t,""+l);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ju);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ua.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),f=t[vt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(i,f,h),typeof l=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):fr(t,a,l)}}}function Ft(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",t),De("load",t);var l=!1,h=!1,f;for(f in a)if(a.hasOwnProperty(f)){var E=a[f];if(E!=null)switch(f){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,f,E,a,null)}}h&&Xe(t,i,"srcSet",a.srcSet,a,null),l&&Xe(t,i,"src",a.src,a,null);return;case"input":De("invalid",t);var T=f=E=h=null,I=null,H=null;for(l in a)if(a.hasOwnProperty(l)){var X=a[l];if(X!=null)switch(l){case"name":h=X;break;case"type":E=X;break;case"checked":I=X;break;case"defaultChecked":H=X;break;case"value":f=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,i));break;default:Xe(t,i,l,X,a,null)}}vs(t,f,T,I,H,E,h,!1),ma(t);return;case"select":De("invalid",t),l=E=f=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":f=T;break;case"defaultValue":E=T;break;case"multiple":l=T;default:Xe(t,i,h,T,a,null)}i=f,a=E,t.multiple=!!l,i!=null?Ci(t,!!l,i,!1):a!=null&&Ci(t,!!l,a,!0);return;case"textarea":De("invalid",t),f=h=l=null;for(E in a)if(a.hasOwnProperty(E)&&(T=a[E],T!=null))switch(E){case"value":l=T;break;case"defaultValue":h=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xe(t,i,E,T,a,null)}_s(t,l,h,f),ma(t);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xe(t,i,I,l,a,null)}return;case"dialog":De("beforetoggle",t),De("toggle",t),De("cancel",t),De("close",t);break;case"iframe":case"object":De("load",t);break;case"video":case"audio":for(l=0;l<xl.length;l++)De(xl[l],t);break;case"image":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"embed":case"source":case"link":De("error",t),De("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in a)if(a.hasOwnProperty(H)&&(l=a[H],l!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,H,l,a,null)}return;default:if(Bo(i)){for(X in a)a.hasOwnProperty(X)&&(l=a[X],l!==void 0&&Jf(t,i,X,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xe(t,i,T,l,a,null))}function hT(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,E=null,T=null,I=null,H=null,X=null;for(Y in a){var J=a[Y];if(a.hasOwnProperty(Y)&&J!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":I=J;default:l.hasOwnProperty(Y)||Xe(t,i,Y,null,l,J)}}for(var G in l){var Y=l[G];if(J=a[G],l.hasOwnProperty(G)&&(Y!=null||J!=null))switch(G){case"type":f=Y;break;case"name":h=Y;break;case"checked":H=Y;break;case"defaultChecked":X=Y;break;case"value":E=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,i));break;default:Y!==J&&Xe(t,i,G,Y,l,J)}}dn(t,E,T,I,H,X,f,h);return;case"select":Y=E=T=G=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":Y=I;default:l.hasOwnProperty(f)||Xe(t,i,f,null,l,I)}for(h in l)if(f=l[h],I=a[h],l.hasOwnProperty(h)&&(f!=null||I!=null))switch(h){case"value":G=f;break;case"defaultValue":T=f;break;case"multiple":E=f;default:f!==I&&Xe(t,i,h,f,l,I)}i=T,a=E,l=Y,G!=null?Ci(t,!!a,G,!1):!!l!=!!a&&(i!=null?Ci(t,!!a,i,!0):Ci(t,!!a,a?[]:"",!1));return;case"textarea":Y=G=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(t,i,T,null,l,h)}for(E in l)if(h=l[E],f=a[E],l.hasOwnProperty(E)&&(h!=null||f!=null))switch(E){case"value":G=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==f&&Xe(t,i,E,h,l,f)}Ke(t,G,Y);return;case"option":for(var Te in a)if(G=a[Te],a.hasOwnProperty(Te)&&G!=null&&!l.hasOwnProperty(Te))switch(Te){case"selected":t.selected=!1;break;default:Xe(t,i,Te,null,l,G)}for(I in l)if(G=l[I],Y=a[I],l.hasOwnProperty(I)&&G!==Y&&(G!=null||Y!=null))switch(I){case"selected":t.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Xe(t,i,I,G,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in a)G=a[ve],a.hasOwnProperty(ve)&&G!=null&&!l.hasOwnProperty(ve)&&Xe(t,i,ve,null,l,G);for(H in l)if(G=l[H],Y=a[H],l.hasOwnProperty(H)&&G!==Y&&(G!=null||Y!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Xe(t,i,H,G,l,Y)}return;default:if(Bo(i)){for(var We in a)G=a[We],a.hasOwnProperty(We)&&G!==void 0&&!l.hasOwnProperty(We)&&Jf(t,i,We,void 0,l,G);for(X in l)G=l[X],Y=a[X],!l.hasOwnProperty(X)||G===Y||G===void 0&&Y===void 0||Jf(t,i,X,G,l,Y);return}}for(var L in a)G=a[L],a.hasOwnProperty(L)&&G!=null&&!l.hasOwnProperty(L)&&Xe(t,i,L,null,l,G);for(J in l)G=l[J],Y=a[J],!l.hasOwnProperty(J)||G===Y||G==null&&Y==null||Xe(t,i,J,G,l,Y)}var em=null,tm=null;function Lu(t){return t.nodeType===9?t:t.ownerDocument}function Z0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function nm(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var im=null;function dT(){var t=window.event;return t&&t.type==="popstate"?t===im?!1:(im=t,!0):(im=null,!1)}var e1=typeof setTimeout=="function"?setTimeout:void 0,fT=typeof clearTimeout=="function"?clearTimeout:void 0,t1=typeof Promise=="function"?Promise:void 0,mT=typeof queueMicrotask=="function"?queueMicrotask:typeof t1<"u"?function(t){return t1.resolve(null).then(t).catch(pT)}:e1;function pT(t){setTimeout(function(){throw t})}function Dr(t){return t==="head"}function n1(t,i){var a=i,l=0,h=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<l&&8>l){a=l;var E=t.ownerDocument;if(a&1&&Al(E.documentElement),a&2&&Al(E.body),a&4)for(a=E.head,Al(a),E=a.firstChild;E;){var T=E.nextSibling,I=E.nodeName;E[ms]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=T}}if(h===0){t.removeChild(f),Pl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=f}while(a);Pl(i)}function rm(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rm(a),dr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function gT(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ms])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Fn(t.nextSibling),t===null)break}return null}function yT(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Fn(t.nextSibling),t===null))return null;return t}function sm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function vT(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Fn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var am=null;function i1(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function r1(t,i,a){switch(i=Lu(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Al(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);dr(t)}var Vn=new Map,s1=new Set;function Uu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=oe.d;oe.d={f:_T,r:ET,D:bT,C:TT,L:wT,m:xT,X:AT,S:ST,M:RT};function _T(){var t=Qi.f(),i=Nu();return t||i}function ET(t){var i=Wn(t);i!==null&&i.tag===5&&i.type==="form"?Sy(i):Qi.r(t)}var $a=typeof document>"u"?null:document;function a1(t,i,a){var l=$a;if(l&&typeof i=="string"&&i){var h=_t(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),s1.has(h)||(s1.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Ft(i,"link",t),mt(i),l.head.appendChild(i)))}}function bT(t){Qi.D(t),a1("dns-prefetch",t,null)}function TT(t,i){Qi.C(t,i),a1("preconnect",t,i)}function wT(t,i,a){Qi.L(t,i,a);var l=$a;if(l&&t&&i){var h='link[rel="preload"][as="'+_t(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+_t(a.imageSizes)+'"]')):h+='[href="'+_t(t)+'"]';var f=h;switch(i){case"style":f=Xa(t);break;case"script":f=Wa(t)}Vn.has(f)||(t=b({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Vn.set(f,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Rl(f))||i==="script"&&l.querySelector(Cl(f))||(i=l.createElement("link"),Ft(i,"link",t),mt(i),l.head.appendChild(i)))}}function xT(t,i){Qi.m(t,i);var a=$a;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(t)+'"]',f=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Wa(t)}if(!Vn.has(f)&&(t=b({rel:"modulepreload",href:t},i),Vn.set(f,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Cl(f)))return}l=a.createElement("link"),Ft(l,"link",t),mt(l),a.head.appendChild(l)}}}function ST(t,i,a){Qi.S(t,i,a);var l=$a;if(l&&t){var h=tn(l).hoistableStyles,f=Xa(t);i=i||"default";var E=h.get(f);if(!E){var T={loading:0,preload:null};if(E=l.querySelector(Rl(f)))T.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Vn.get(f))&&om(t,a);var I=E=l.createElement("link");mt(I),Ft(I,"link",t),I._p=new Promise(function(H,X){I.onload=H,I.onerror=X}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,zu(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:T},h.set(f,E)}}}function AT(t,i){Qi.X(t,i);var a=$a;if(a&&t){var l=tn(a).hoistableScripts,h=Wa(t),f=l.get(h);f||(f=a.querySelector(Cl(h)),f||(t=b({src:t,async:!0},i),(i=Vn.get(h))&&lm(t,i),f=a.createElement("script"),mt(f),Ft(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function RT(t,i){Qi.M(t,i);var a=$a;if(a&&t){var l=tn(a).hoistableScripts,h=Wa(t),f=l.get(h);f||(f=a.querySelector(Cl(h)),f||(t=b({src:t,async:!0,type:"module"},i),(i=Vn.get(h))&&lm(t,i),f=a.createElement("script"),mt(f),Ft(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function o1(t,i,a,l){var h=(h=we.current)?Uu(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Xa(a.href),a=tn(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Xa(a.href);var f=tn(h).hoistableStyles,E=f.get(t);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,E),(f=h.querySelector(Rl(t)))&&!f._p&&(E.instance=f,E.state.loading=5),Vn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vn.set(t,a),f||CT(h,t,a,E.state))),i&&l===null)throw Error(s(528,""));return E}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Wa(a),a=tn(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Xa(t){return'href="'+_t(t)+'"'}function Rl(t){return'link[rel="stylesheet"]['+t+"]"}function l1(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function CT(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ft(i,"link",a),mt(i),t.head.appendChild(i))}function Wa(t){return'[src="'+_t(t)+'"]'}function Cl(t){return"script[async]"+t}function c1(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+_t(a.href)+'"]');if(l)return i.instance=l,mt(l),l;var h=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),mt(l),Ft(l,"style",h),zu(l,a.precedence,t),i.instance=l;case"stylesheet":h=Xa(a.href);var f=t.querySelector(Rl(h));if(f)return i.state.loading|=4,i.instance=f,mt(f),f;l=l1(a),(h=Vn.get(h))&&om(l,h),f=(t.ownerDocument||t).createElement("link"),mt(f);var E=f;return E._p=new Promise(function(T,I){E.onload=T,E.onerror=I}),Ft(f,"link",l),i.state.loading|=4,zu(f,a.precedence,t),i.instance=f;case"script":return f=Wa(a.src),(h=t.querySelector(Cl(f)))?(i.instance=h,mt(h),h):(l=a,(h=Vn.get(f))&&(l=b({},a),lm(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),mt(h),Ft(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,zu(l,a.precedence,t));return i.instance}function zu(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,f=h,E=0;E<l.length;E++){var T=l[E];if(T.dataset.precedence===i)f=T;else if(f!==h)break}f?f.parentNode.insertBefore(t,f.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function om(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function lm(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Bu=null;function u1(t,i,a){if(Bu===null){var l=new Map,h=Bu=new Map;h.set(a,l)}else h=Bu,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var f=a[h];if(!(f[ms]||f[St]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var E=f.getAttribute(i)||"";E=t+E;var T=l.get(E);T?T.push(f):l.set(E,[f])}}return l}function h1(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function IT(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function d1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Il=null;function NT(){}function DT(t,i,a){if(Il===null)throw Error(s(475));var l=Il;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Xa(a.href),f=t.querySelector(Rl(h));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=qu.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=f,mt(f);return}f=t.ownerDocument||t,a=l1(a),(h=Vn.get(h))&&om(a,h),f=f.createElement("link"),mt(f);var E=f;E._p=new Promise(function(T,I){E.onload=T,E.onerror=I}),Ft(f,"link",a),i.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=qu.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function OT(){if(Il===null)throw Error(s(475));var t=Il;return t.stylesheets&&t.count===0&&cm(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&cm(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function qu(){if(this.count--,this.count===0){if(this.stylesheets)cm(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fu=null;function cm(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fu=new Map,i.forEach(MT,t),Fu=null,qu.call(t))}function MT(t,i){if(!(i.state.loading&4)){var a=Fu.get(t);if(a)var l=a.get(null);else{a=new Map,Fu.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var E=h[f];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),f=a.get(E)||l,f===l&&a.set(null,h),a.set(E,h),this.count++,l=qu.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),f?f.parentNode.insertBefore(h,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Nl={$$typeof:ne,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function PT(t,i,a,l,h,f,E,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.hiddenUpdates=wi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function f1(t,i,a,l,h,f,E,T,I,H,X,J){return t=new PT(t,i,a,E,T,I,H,J),i=1,f===!0&&(i|=24),f=mn(3,null,null,i),t.current=f,f.stateNode=t,i=Fd(),i.refCount++,t.pooledCache=i,i.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:i},Qd(f),t}function m1(t){return t?(t=Ca,t):Ca}function p1(t,i,a,l,h,f){h=m1(h),l.context===null?l.context=h:l.pendingContext=h,l=vr(i),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=_r(t,l,i),a!==null&&(_n(a,t,i),al(a,t,i))}function g1(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function um(t,i){g1(t,i),(t=t.alternate)&&g1(t,i)}function y1(t){if(t.tag===13){var i=Ra(t,67108864);i!==null&&_n(i,t,67108864),um(t,67108864)}}var Hu=!0;function VT(t,i,a,l){var h=$.T;$.T=null;var f=oe.p;try{oe.p=2,hm(t,i,a,l)}finally{oe.p=f,$.T=h}}function kT(t,i,a,l){var h=$.T;$.T=null;var f=oe.p;try{oe.p=8,hm(t,i,a,l)}finally{oe.p=f,$.T=h}}function hm(t,i,a,l){if(Hu){var h=dm(l);if(h===null)Zf(t,i,l,Gu,a),_1(t,l);else if(LT(h,t,i,a,l))l.stopPropagation();else if(_1(t,l),i&4&&-1<jT.indexOf(t)){for(;h!==null;){var f=Wn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var E=Ln(f.pendingLanes);if(E!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var I=1<<31-Kt(E);T.entanglements[1]|=I,E&=~I}hi(f),(Ye&6)===0&&(Cu=wn()+500,wl(0))}}break;case 13:T=Ra(f,2),T!==null&&_n(T,f,2),Nu(),um(f,2)}if(f=dm(l),f===null&&Zf(t,i,l,Gu,a),f===h)break;h=f}h!==null&&l.stopPropagation()}else Zf(t,i,l,null,a)}}function dm(t){return t=An(t),fm(t)}var Gu=null;function fm(t){if(Gu=null,t=Si(t),t!==null){var i=c(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=d(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Gu=t,null}function v1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pd()){case Co:return 2;case aa:return 8;case cs:case gd:return 32;case oa:return 268435456;default:return 32}default:return 32}}var mm=!1,Or=null,Mr=null,Pr=null,Dl=new Map,Ol=new Map,Vr=[],jT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _1(t,i){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(i.pointerId)}}function Ml(t,i,a,l,h,f){return t===null||t.nativeEvent!==f?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},i!==null&&(i=Wn(i),i!==null&&y1(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function LT(t,i,a,l,h){switch(i){case"focusin":return Or=Ml(Or,t,i,a,l,h),!0;case"dragenter":return Mr=Ml(Mr,t,i,a,l,h),!0;case"mouseover":return Pr=Ml(Pr,t,i,a,l,h),!0;case"pointerover":var f=h.pointerId;return Dl.set(f,Ml(Dl.get(f)||null,t,i,a,l,h)),!0;case"gotpointercapture":return f=h.pointerId,Ol.set(f,Ml(Ol.get(f)||null,t,i,a,l,h)),!0}return!1}function E1(t){var i=Si(t.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=d(a),i!==null){t.blockedOn=i,Nc(t.priority,function(){if(a.tag===13){var l=vn();l=cr(l);var h=Ra(a,l);h!==null&&_n(h,a,l),um(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=dm(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Ii=l,a.target.dispatchEvent(l),Ii=null}else return i=Wn(a),i!==null&&y1(i),t.blockedOn=a,!1;i.shift()}return!0}function b1(t,i,a){Yu(t)&&a.delete(i)}function UT(){mm=!1,Or!==null&&Yu(Or)&&(Or=null),Mr!==null&&Yu(Mr)&&(Mr=null),Pr!==null&&Yu(Pr)&&(Pr=null),Dl.forEach(b1),Ol.forEach(b1)}function Qu(t,i){t.blockedOn===i&&(t.blockedOn=null,mm||(mm=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,UT)))}var Ku=null;function T1(t){Ku!==t&&(Ku=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ku===t&&(Ku=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(fm(l||a)===null)continue;break}var f=Wn(a);f!==null&&(t.splice(i,3),i-=3,ff(f,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Pl(t){function i(I){return Qu(I,t)}Or!==null&&Qu(Or,t),Mr!==null&&Qu(Mr,t),Pr!==null&&Qu(Pr,t),Dl.forEach(i),Ol.forEach(i);for(var a=0;a<Vr.length;a++){var l=Vr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Vr.length&&(a=Vr[0],a.blockedOn===null);)E1(a),a.blockedOn===null&&Vr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],f=a[l+1],E=h[vt]||null;if(typeof f=="function")E||T1(a);else if(E){var T=null;if(f&&f.hasAttribute("formAction")){if(h=f,E=f[vt]||null)T=E.formAction;else if(fm(h)!==null)continue}else T=E.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),T1(a)}}}function pm(t){this._internalRoot=t}$u.prototype.render=pm.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=vn();p1(a,l,t,i,null,null)},$u.prototype.unmount=pm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;p1(t.current,2,null,t,null,null),Nu(),i[xn]=null}};function $u(t){this._internalRoot=t}$u.prototype.unstable_scheduleHydration=function(t){if(t){var i=ur();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Vr.length&&i!==0&&i<Vr[a].priority;a++);Vr.splice(a,0,t),a===0&&E1(t)}};var w1=e.version;if(w1!=="19.1.1")throw Error(s(527,w1,"19.1.1"));oe.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var zT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{ut=Xu.inject(zT),Ge=Xu}catch{}}return kl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Uy,f=zy,E=By,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=f1(t,1,!1,null,null,a,l,h,f,E,T,null),t[xn]=i.current,Wf(t),new pm(i)},kl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",f=Uy,E=zy,T=By,I=null,H=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(H=a.formState)),i=f1(t,1,!0,i,a??null,l,h,f,E,T,I,H),i.context=m1(null),a=i.current,l=vn(),l=cr(l),h=vr(l),h.callback=null,_r(a,h,l),a=l,i.current.lanes=a,xi(i,a),hi(i),t[xn]=i.current,Wf(t),new $u(i)},kl.version="19.1.1",kl}var M1;function WT(){if(M1)return vm.exports;M1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vm.exports=XT(),vm.exports}var ZT=WT();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var P1="popstate";function JT(r={}){function e(s,o){let{pathname:c,search:d,hash:m}=s.location;return km("",{pathname:c,search:d,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:Xl(o)}return t4(e,n,null,r)}function lt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function _i(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function e4(){return Math.random().toString(36).substring(2,10)}function V1(r,e){return{usr:r.state,key:r.key,idx:e}}function km(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?go(e):e,state:n,key:e&&e.key||s||e4()}}function Xl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function go(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function t4(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:c=!1}=s,d=o.history,m="POP",g=null,y=b();y==null&&(y=0,d.replaceState({...d.state,idx:y},""));function b(){return(d.state||{idx:null}).idx}function x(){m="POP";let q=b(),K=q==null?null:q-y;y=q,g&&g({action:m,location:z.location,delta:K})}function S(q,K){m="PUSH";let ie=km(z.location,q,K);y=b()+1;let ne=V1(ie,y),le=z.createHref(ie);try{d.pushState(ne,"",le)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;o.location.assign(le)}c&&g&&g({action:m,location:z.location,delta:1})}function D(q,K){m="REPLACE";let ie=km(z.location,q,K);y=b();let ne=V1(ie,y),le=z.createHref(ie);d.replaceState(ne,"",le),c&&g&&g({action:m,location:z.location,delta:0})}function U(q){return n4(q)}let z={get action(){return m},get location(){return r(o,d)},listen(q){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(P1,x),g=q,()=>{o.removeEventListener(P1,x),g=null}},createHref(q){return e(o,q)},createURL:U,encodeLocation(q){let K=U(q);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:S,replace:D,go(q){return d.go(q)}};return z}function n4(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),lt(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Xl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function y_(r,e,n="/"){return i4(r,e,n,!1)}function i4(r,e,n,s){let o=typeof e=="string"?go(e):e,c=Zi(o.pathname||"/",n);if(c==null)return null;let d=v_(r);r4(d);let m=null;for(let g=0;m==null&&g<d.length;++g){let y=p4(c);m=f4(d[g],y,s)}return m}function v_(r,e=[],n=[],s="",o=!1){let c=(d,m,g=o,y)=>{let b={relativePath:y===void 0?d.path||"":y,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(s)&&g)return;lt(b.relativePath.startsWith(s),`Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(s.length)}let x=Xi([s,b.relativePath]),S=n.concat(b);d.children&&d.children.length>0&&(lt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),v_(d.children,e,S,x,g)),!(d.path==null&&!d.index)&&e.push({path:x,score:h4(x,d.index),routesMeta:S})};return r.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))c(d,m);else for(let g of __(d.path))c(d,m,!0,g)}),e}function __(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(s.length===0)return o?[c,""]:[c];let d=__(s.join("/")),m=[];return m.push(...d.map(g=>g===""?c:[c,g].join("/"))),o&&m.push(...d),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function r4(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:d4(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var s4=/^:[\w-]+$/,a4=3,o4=2,l4=1,c4=10,u4=-2,k1=r=>r==="*";function h4(r,e){let n=r.split("/"),s=n.length;return n.some(k1)&&(s+=u4),e&&(s+=o4),n.filter(o=>!k1(o)).reduce((o,c)=>o+(s4.test(c)?a4:c===""?l4:c4),s)}function d4(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function f4(r,e,n=!1){let{routesMeta:s}=r,o={},c="/",d=[];for(let m=0;m<s.length;++m){let g=s[m],y=m===s.length-1,b=c==="/"?e:e.slice(c.length)||"/",x=vh({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},b),S=g.route;if(!x&&y&&n&&!s[s.length-1].route.index&&(x=vh({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!x)return null;Object.assign(o,x.params),d.push({params:o,pathname:Xi([c,x.pathname]),pathnameBase:_4(Xi([c,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(c=Xi([c,x.pathnameBase]))}return d}function vh(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=m4(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let c=o[0],d=c.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,{paramName:b,isOptional:x},S)=>{if(b==="*"){let U=m[S]||"";d=c.slice(0,c.length-U.length).replace(/(.)\/+$/,"$1")}const D=m[S];return x&&!D?y[b]=void 0:y[b]=(D||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:d,pattern:r}}function m4(r,e=!1,n=!0){_i(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,g)=>(s.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function p4(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _i(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Zi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function g4(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?go(r):r;return{pathname:n?n.startsWith("/")?n:y4(n,e):e,search:E4(s),hash:b4(o)}}function y4(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Tm(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function v4(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function E_(r){let e=v4(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function b_(r,e,n,s=!1){let o;typeof r=="string"?o=go(r):(o={...r},lt(!o.pathname||!o.pathname.includes("?"),Tm("?","pathname","search",o)),lt(!o.pathname||!o.pathname.includes("#"),Tm("#","pathname","hash",o)),lt(!o.search||!o.search.includes("#"),Tm("#","search","hash",o)));let c=r===""||o.pathname==="",d=c?"/":o.pathname,m;if(d==null)m=n;else{let x=e.length-1;if(!s&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),x-=1;o.pathname=S.join("/")}m=x>=0?e[x]:"/"}let g=g4(o,m),y=d&&d!=="/"&&d.endsWith("/"),b=(c||d===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(y||b)&&(g.pathname+="/"),g}var Xi=r=>r.join("/").replace(/\/\/+/g,"/"),_4=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),E4=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,b4=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function T4(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var T_=["POST","PUT","PATCH","DELETE"];new Set(T_);var w4=["GET",...T_];new Set(w4);var yo=k.createContext(null);yo.displayName="DataRouter";var qh=k.createContext(null);qh.displayName="DataRouterState";k.createContext(!1);var w_=k.createContext({isTransitioning:!1});w_.displayName="ViewTransition";var x4=k.createContext(new Map);x4.displayName="Fetchers";var S4=k.createContext(null);S4.displayName="Await";var bi=k.createContext(null);bi.displayName="Navigation";var dc=k.createContext(null);dc.displayName="Location";var ir=k.createContext({outlet:null,matches:[],isDataRoute:!1});ir.displayName="Route";var fp=k.createContext(null);fp.displayName="RouteError";function A4(r,{relative:e}={}){lt(fc(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=k.useContext(bi),{hash:o,pathname:c,search:d}=mc(r,{relative:e}),m=c;return n!=="/"&&(m=c==="/"?n:Xi([n,c])),s.createHref({pathname:m,search:d,hash:o})}function fc(){return k.useContext(dc)!=null}function na(){return lt(fc(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(dc).location}var x_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function S_(r){k.useContext(bi).static||k.useLayoutEffect(r)}function vo(){let{isDataRoute:r}=k.useContext(ir);return r?U4():R4()}function R4(){lt(fc(),"useNavigate() may be used only in the context of a <Router> component.");let r=k.useContext(yo),{basename:e,navigator:n}=k.useContext(bi),{matches:s}=k.useContext(ir),{pathname:o}=na(),c=JSON.stringify(E_(s)),d=k.useRef(!1);return S_(()=>{d.current=!0}),k.useCallback((g,y={})=>{if(_i(d.current,x_),!d.current)return;if(typeof g=="number"){n.go(g);return}let b=b_(g,JSON.parse(c),o,y.relative==="path");r==null&&e!=="/"&&(b.pathname=b.pathname==="/"?e:Xi([e,b.pathname])),(y.replace?n.replace:n.push)(b,y.state,y)},[e,n,c,o,r])}k.createContext(null);function mc(r,{relative:e}={}){let{matches:n}=k.useContext(ir),{pathname:s}=na(),o=JSON.stringify(E_(n));return k.useMemo(()=>b_(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function C4(r,e){return A_(r,e)}function A_(r,e,n,s){lt(fc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=k.useContext(bi),{matches:c}=k.useContext(ir),d=c[c.length-1],m=d?d.params:{},g=d?d.pathname:"/",y=d?d.pathnameBase:"/",b=d&&d.route;{let K=b&&b.path||"";R_(g,!b||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let x=na(),S;if(e){let K=typeof e=="string"?go(e):e;lt(y==="/"||K.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${K.pathname}" was given in the \`location\` prop.`),S=K}else S=x;let D=S.pathname||"/",U=D;if(y!=="/"){let K=y.replace(/^\//,"").split("/");U="/"+D.replace(/^\//,"").split("/").slice(K.length).join("/")}let z=y_(r,{pathname:U});_i(b||z!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),_i(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=M4(z&&z.map(K=>Object.assign({},K,{params:Object.assign({},m,K.params),pathname:Xi([y,o.encodeLocation?o.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?y:Xi([y,o.encodeLocation?o.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),c,n,s);return e&&q?k.createElement(dc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},q):q}function I4(){let r=L4(),e=T4(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",r),d=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:c},"ErrorBoundary")," or"," ",k.createElement("code",{style:c},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:o},n):null,d)}var N4=k.createElement(I4,null),D4=class extends k.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?k.createElement(ir.Provider,{value:this.props.routeContext},k.createElement(fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function O4({routeContext:r,match:e,children:n}){let s=k.useContext(yo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),k.createElement(ir.Provider,{value:r},n)}function M4(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,c=n?.errors;if(c!=null){let g=o.findIndex(y=>y.route.id&&c?.[y.route.id]!==void 0);lt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let d=!1,m=-1;if(n)for(let g=0;g<o.length;g++){let y=o[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=g),y.route.id){let{loaderData:b,errors:x}=n,S=y.route.loader&&!b.hasOwnProperty(y.route.id)&&(!x||x[y.route.id]===void 0);if(y.route.lazy||S){d=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((g,y,b)=>{let x,S=!1,D=null,U=null;n&&(x=c&&y.route.id?c[y.route.id]:void 0,D=y.route.errorElement||N4,d&&(m<0&&b===0?(R_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,U=null):m===b&&(S=!0,U=y.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,b+1)),q=()=>{let K;return x?K=D:S?K=U:y.route.Component?K=k.createElement(y.route.Component,null):y.route.element?K=y.route.element:K=g,k.createElement(O4,{match:y,routeContext:{outlet:g,matches:z,isDataRoute:n!=null},children:K})};return n&&(y.route.ErrorBoundary||y.route.errorElement||b===0)?k.createElement(D4,{location:n.location,revalidation:n.revalidation,component:D,error:x,children:q(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):q()},null)}function mp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P4(r){let e=k.useContext(yo);return lt(e,mp(r)),e}function V4(r){let e=k.useContext(qh);return lt(e,mp(r)),e}function k4(r){let e=k.useContext(ir);return lt(e,mp(r)),e}function pp(r){let e=k4(r),n=e.matches[e.matches.length-1];return lt(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function j4(){return pp("useRouteId")}function L4(){let r=k.useContext(fp),e=V4("useRouteError"),n=pp("useRouteError");return r!==void 0?r:e.errors?.[n]}function U4(){let{router:r}=P4("useNavigate"),e=pp("useNavigate"),n=k.useRef(!1);return S_(()=>{n.current=!0}),k.useCallback(async(o,c={})=>{_i(n.current,x_),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...c}))},[r,e])}var j1={};function R_(r,e,n){!e&&!j1[r]&&(j1[r]=!0,_i(!1,n))}k.memo(z4);function z4({routes:r,future:e,state:n}){return A_(r,void 0,n,e)}function Lr(r){lt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function B4({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:c=!1}){lt(!fc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),m=k.useMemo(()=>({basename:d,navigator:o,static:c,future:{}}),[d,o,c]);typeof n=="string"&&(n=go(n));let{pathname:g="/",search:y="",hash:b="",state:x=null,key:S="default"}=n,D=k.useMemo(()=>{let U=Zi(g,d);return U==null?null:{location:{pathname:U,search:y,hash:b,state:x,key:S},navigationType:s}},[d,g,y,b,x,S,s]);return _i(D!=null,`<Router basename="${d}"> is not able to match the URL "${g}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:k.createElement(bi.Provider,{value:m},k.createElement(dc.Provider,{children:e,value:D}))}function q4({children:r,location:e}){return C4(jm(r),e)}function jm(r,e=[]){let n=[];return k.Children.forEach(r,(s,o)=>{if(!k.isValidElement(s))return;let c=[...e,o];if(s.type===k.Fragment){n.push.apply(n,jm(s.props.children,c));return}lt(s.type===Lr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),lt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=jm(s.props.children,c)),n.push(d)}),n}var sh="get",ah="application/x-www-form-urlencoded";function Fh(r){return r!=null&&typeof r.tagName=="string"}function F4(r){return Fh(r)&&r.tagName.toLowerCase()==="button"}function H4(r){return Fh(r)&&r.tagName.toLowerCase()==="form"}function G4(r){return Fh(r)&&r.tagName.toLowerCase()==="input"}function Y4(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Q4(r,e){return r.button===0&&(!e||e==="_self")&&!Y4(r)}var Wu=null;function K4(){if(Wu===null)try{new FormData(document.createElement("form"),0),Wu=!1}catch{Wu=!0}return Wu}var $4=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wm(r){return r!=null&&!$4.has(r)?(_i(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ah}"`),null):r}function X4(r,e){let n,s,o,c,d;if(H4(r)){let m=r.getAttribute("action");s=m?Zi(m,e):null,n=r.getAttribute("method")||sh,o=wm(r.getAttribute("enctype"))||ah,c=new FormData(r)}else if(F4(r)||G4(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||m.getAttribute("action");if(s=g?Zi(g,e):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||sh,o=wm(r.getAttribute("formenctype"))||wm(m.getAttribute("enctype"))||ah,c=new FormData(m,r),!K4()){let{name:y,type:b,value:x}=r;if(b==="image"){let S=y?`${y}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else y&&c.append(y,x)}}else{if(Fh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=sh,s=null,o=ah,d=r}return c&&o==="text/plain"&&(d=c,c=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function W4(r,e,n){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&Zi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function Z4(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function J4(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function ew(r,e,n){let s=await Promise.all(r.map(async o=>{let c=e.routes[o.route.id];if(c){let d=await Z4(c,n);return d.links?d.links():[]}return[]}));return rw(s.flat(1).filter(J4).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function L1(r,e,n,s,o,c){let d=(g,y)=>n[y]?g.route.id!==n[y].route.id:!0,m=(g,y)=>n[y].pathname!==g.pathname||n[y].route.path?.endsWith("*")&&n[y].params["*"]!==g.params["*"];return c==="assets"?e.filter((g,y)=>d(g,y)||m(g,y)):c==="data"?e.filter((g,y)=>{let b=s.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(d(g,y)||m(g,y))return!0;if(g.route.shouldRevalidate){let x=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function tw(r,e,{includeHydrateFallback:n}={}){return nw(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function nw(r){return[...new Set(r)]}function iw(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function rw(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let c=JSON.stringify(iw(o));return n.has(c)||(n.add(c),s.push({key:c,link:o})),s},[])}function C_(){let r=k.useContext(yo);return gp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function sw(){let r=k.useContext(qh);return gp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var yp=k.createContext(void 0);yp.displayName="FrameworkContext";function I_(){let r=k.useContext(yp);return gp(r,"You must render this element inside a <HydratedRouter> element"),r}function aw(r,e){let n=k.useContext(yp),[s,o]=k.useState(!1),[c,d]=k.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:y,onMouseLeave:b,onTouchStart:x}=e,S=k.useRef(null);k.useEffect(()=>{if(r==="render"&&d(!0),r==="viewport"){let z=K=>{K.forEach(ie=>{d(ie.isIntersecting)})},q=new IntersectionObserver(z,{threshold:.5});return S.current&&q.observe(S.current),()=>{q.disconnect()}}},[r]),k.useEffect(()=>{if(s){let z=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(z)}}},[s]);let D=()=>{o(!0)},U=()=>{o(!1),d(!1)};return n?r!=="intent"?[c,S,{}]:[c,S,{onFocus:jl(m,D),onBlur:jl(g,U),onMouseEnter:jl(y,D),onMouseLeave:jl(b,U),onTouchStart:jl(x,D)}]:[!1,S,{}]}function jl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function ow({page:r,...e}){let{router:n}=C_(),s=k.useMemo(()=>y_(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?k.createElement(cw,{page:r,matches:s,...e}):null}function lw(r){let{manifest:e,routeModules:n}=I_(),[s,o]=k.useState([]);return k.useEffect(()=>{let c=!1;return ew(r,e,n).then(d=>{c||o(d)}),()=>{c=!0}},[r,e,n]),s}function cw({page:r,matches:e,...n}){let s=na(),{manifest:o,routeModules:c}=I_(),{basename:d}=C_(),{loaderData:m,matches:g}=sw(),y=k.useMemo(()=>L1(r,e,g,o,s,"data"),[r,e,g,o,s]),b=k.useMemo(()=>L1(r,e,g,o,s,"assets"),[r,e,g,o,s]),x=k.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let U=new Set,z=!1;if(e.forEach(K=>{let ie=o.routes[K.route.id];!ie||!ie.hasLoader||(!y.some(ne=>ne.route.id===K.route.id)&&K.route.id in m&&c[K.route.id]?.shouldRevalidate||ie.hasClientLoader?z=!0:U.add(K.route.id))}),U.size===0)return[];let q=W4(r,d,"data");return z&&U.size>0&&q.searchParams.set("_routes",e.filter(K=>U.has(K.route.id)).map(K=>K.route.id).join(",")),[q.pathname+q.search]},[d,m,s,o,y,e,r,c]),S=k.useMemo(()=>tw(b,o),[b,o]),D=lw(b);return k.createElement(k.Fragment,null,x.map(U=>k.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...n})),S.map(U=>k.createElement("link",{key:U,rel:"modulepreload",href:U,...n})),D.map(({key:U,link:z})=>k.createElement("link",{key:U,nonce:n.nonce,...z})))}function uw(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var N_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{N_&&(window.__reactRouterVersion="7.8.1")}catch{}function hw({basename:r,children:e,window:n}){let s=k.useRef();s.current==null&&(s.current=JT({window:n,v5Compat:!0}));let o=s.current,[c,d]=k.useState({action:o.action,location:o.location}),m=k.useCallback(g=>{k.startTransition(()=>d(g))},[d]);return k.useLayoutEffect(()=>o.listen(m),[o,m]),k.createElement(B4,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:o})}var D_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,is=k.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:c,replace:d,state:m,target:g,to:y,preventScrollReset:b,viewTransition:x,...S},D){let{basename:U}=k.useContext(bi),z=typeof y=="string"&&D_.test(y),q,K=!1;if(typeof y=="string"&&z&&(q=y,N_))try{let R=new URL(window.location.href),M=y.startsWith("//")?new URL(R.protocol+y):new URL(y),C=Zi(M.pathname,U);M.origin===R.origin&&C!=null?y=C+M.search+M.hash:K=!0}catch{_i(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ie=A4(y,{relative:o}),[ne,le,se]=aw(s,S),me=pw(y,{replace:d,state:m,target:g,preventScrollReset:b,relative:o,viewTransition:x});function V(R){e&&e(R),R.defaultPrevented||me(R)}let A=k.createElement("a",{...S,...se,href:q||ie,onClick:K||c?e:V,ref:uw(D,le),target:g,"data-discover":!z&&n==="render"?"true":void 0});return ne&&!z?k.createElement(k.Fragment,null,A,k.createElement(ow,{page:ie})):A});is.displayName="Link";var dw=k.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:c,to:d,viewTransition:m,children:g,...y},b){let x=mc(d,{relative:y.relative}),S=na(),D=k.useContext(qh),{navigator:U,basename:z}=k.useContext(bi),q=D!=null&&Ew(x)&&m===!0,K=U.encodeLocation?U.encodeLocation(x).pathname:x.pathname,ie=S.pathname,ne=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;n||(ie=ie.toLowerCase(),ne=ne?ne.toLowerCase():null,K=K.toLowerCase()),ne&&z&&(ne=Zi(ne,z)||ne);const le=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let se=ie===K||!o&&ie.startsWith(K)&&ie.charAt(le)==="/",me=ne!=null&&(ne===K||!o&&ne.startsWith(K)&&ne.charAt(K.length)==="/"),V={isActive:se,isPending:me,isTransitioning:q},A=se?e:void 0,R;typeof s=="function"?R=s(V):R=[s,se?"active":null,me?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let M=typeof c=="function"?c(V):c;return k.createElement(is,{...y,"aria-current":A,className:R,ref:b,style:M,to:d,viewTransition:m},typeof g=="function"?g(V):g)});dw.displayName="NavLink";var fw=k.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:c,method:d=sh,action:m,onSubmit:g,relative:y,preventScrollReset:b,viewTransition:x,...S},D)=>{let U=vw(),z=_w(m,{relative:y}),q=d.toLowerCase()==="get"?"get":"post",K=typeof m=="string"&&D_.test(m),ie=ne=>{if(g&&g(ne),ne.defaultPrevented)return;ne.preventDefault();let le=ne.nativeEvent.submitter,se=le?.getAttribute("formmethod")||d;U(le||ne.currentTarget,{fetcherKey:e,method:se,navigate:n,replace:o,state:c,relative:y,preventScrollReset:b,viewTransition:x})};return k.createElement("form",{ref:D,method:q,action:z,onSubmit:s?g:ie,...S,"data-discover":!K&&r==="render"?"true":void 0})});fw.displayName="Form";function mw(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function O_(r){let e=k.useContext(yo);return lt(e,mw(r)),e}function pw(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:c,viewTransition:d}={}){let m=vo(),g=na(),y=mc(r,{relative:c});return k.useCallback(b=>{if(Q4(b,e)){b.preventDefault();let x=n!==void 0?n:Xl(g)===Xl(y);m(r,{replace:x,state:s,preventScrollReset:o,relative:c,viewTransition:d})}},[g,m,y,n,s,e,r,o,c,d])}var gw=0,yw=()=>`__${String(++gw)}__`;function vw(){let{router:r}=O_("useSubmit"),{basename:e}=k.useContext(bi),n=j4();return k.useCallback(async(s,o={})=>{let{action:c,method:d,encType:m,formData:g,body:y}=X4(s,e);if(o.navigate===!1){let b=o.fetcherKey||yw();await r.fetch(b,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||d,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||d,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function _w(r,{relative:e}={}){let{basename:n}=k.useContext(bi),s=k.useContext(ir);lt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),c={...mc(r||".",{relative:e})},d=na();if(r==null){c.search=d.search;let m=new URLSearchParams(c.search),g=m.getAll("index");if(g.some(b=>b==="")){m.delete("index"),g.filter(x=>x).forEach(x=>m.append("index",x));let b=m.toString();c.search=b?`?${b}`:""}}return(!r||r===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Xi([n,c.pathname])),Xl(c)}function Ew(r,{relative:e}={}){let n=k.useContext(w_);lt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=O_("useViewTransitionState"),o=mc(r,{relative:e});if(!n.isTransitioning)return!1;let c=Zi(n.currentLocation.pathname,s)||n.currentLocation.pathname,d=Zi(n.nextLocation.pathname,s)||n.nextLocation.pathname;return vh(o.pathname,d)!=null||vh(o.pathname,c)!=null}function vp(){return k.useEffect(()=>{const r=document.getElementById("hamburger"),e=document.getElementById("nav-links"),n=document.getElementById("close-btn"),s=()=>e.classList.add("active"),o=()=>e.classList.remove("active"),c=d=>{e.classList.contains("active")&&!e.contains(d.target)&&!r.contains(d.target)&&e.classList.remove("active")};return r.addEventListener("click",s),n.addEventListener("click",o),document.addEventListener("click",c),()=>{r.removeEventListener("click",s),n.removeEventListener("click",o),document.removeEventListener("click",c)}},[]),p.jsx("div",{className:"header",children:p.jsxs("nav",{className:"navbar",children:[p.jsx("h1",{children:"Gold Corps Inc"}),p.jsxs("div",{className:"hamburger",id:"hamburger",children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]}),p.jsxs("div",{className:"nav-links",id:"nav-links",children:[p.jsx("button",{className:"close-btn",id:"close-btn",children:"×"}),p.jsx("div",{className:"search-container",children:p.jsx("input",{placeholder:"Search...",className:"search-bar",type:"search"})}),p.jsx("a",{className:"a",href:"#",children:"Home"}),p.jsx("a",{className:"a",href:"#about",children:"About us"}),p.jsx("a",{className:"a",href:"#contact",children:"Contact us"}),p.jsx("a",{className:"a",href:"#services",children:"Our services"}),p.jsx(is,{to:"/stock",children:p.jsx("a",{className:"a",href:"#stock",children:"Stock prices"})}),p.jsx("a",{className:"a",href:"#team",children:"Our team"}),p.jsx("a",{href:"#testimonial",children:"Testimonial"})]})]})})}const bw="/Gold-corps-final/assets/image-1-Picsart-AiImageEnhancer-BcMqKlvr.jpeg",Tw="/Gold-corps-final/assets/image-2-BqTb_Qtz.jpeg",ww="/Gold-corps-final/assets/image-3-Mfy9IzQb.jpeg",xw="/Gold-corps-final/assets/image-4-BooAjJhm.jpeg";function Sw(){const r=[bw,Tw,ww,xw],[e,n]=k.useState(0);return k.useEffect(()=>{const s=setInterval(()=>{n(o=>(o+1)%r.length)},5e3);return()=>clearInterval(s)},[r.length]),p.jsxs("div",{className:"hero",children:[p.jsx("div",{className:"hero-slide active",style:{backgroundImage:`url(${r[e]})`,backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 1s ease-in-out"}}),p.jsxs("div",{className:"hero-overlay",children:[p.jsx("h2",{children:"Gold Corps - Your Premium Investment Partner"}),p.jsx("p",{children:"Empowering you to grow wealth with confidence."}),p.jsx(is,{to:"/signup",children:p.jsx("button",{className:"btn btn1",children:"signup"})}),p.jsx("button",{className:"btn",children:"Subscribe to our newsletter"})]})]})}var M_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},U1=Qs.createContext&&Qs.createContext(M_),Aw=["attr","size","title"];function Rw(r,e){if(r==null)return{};var n=Cw(r,e),s,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(o=0;o<c.length;o++)s=c[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(n[s]=r[s])}return n}function Cw(r,e){if(r==null)return{};var n={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;n[s]=r[s]}return n}function _h(){return _h=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},_h.apply(this,arguments)}function z1(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,s)}return n}function Eh(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z1(Object(n),!0).forEach(function(s){Iw(r,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):z1(Object(n)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))})}return r}function Iw(r,e,n){return e=Nw(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function Nw(r){var e=Dw(r,"string");return typeof e=="symbol"?e:e+""}function Dw(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var s=n.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function P_(r){return r&&r.map((e,n)=>Qs.createElement(e.tag,Eh({key:n},e.attr),P_(e.child)))}function Je(r){return e=>Qs.createElement(Ow,_h({attr:Eh({},r.attr)},e),P_(r.child))}function Ow(r){var e=n=>{var{attr:s,size:o,title:c}=r,d=Rw(r,Aw),m=o||n.size||"1em",g;return n.className&&(g=n.className),r.className&&(g=(g?g+" ":"")+r.className),Qs.createElement("svg",_h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,d,{className:g,style:Eh(Eh({color:r.color||n.color},n.style),r.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&Qs.createElement("title",null,c),r.children)};return U1!==void 0?Qs.createElement(U1.Consumer,null,n=>e(n)):e(M_)}function Mw(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M341.28 22.78L254 123.75l63.156-33.656 4.438-2.375 4.437 2.405 18.314 9.938-3.063-77.282zM129.814 46.563l24.375 130.407 88.718-47.282-113.094-83.125zM321.53 108.97L83.345 235.905 192.156 293.5l237.47-125.75-108.095-58.78zm42.75 44.686l25.595 13.03-197.313 103.94-66.875-35.688 25.344-13.407 41.532 22.19 171.72-90.064zm92.19 18.22l9.092 24.03 26.22-22.656-35.313-1.375zm-15.783 11.155L199.47 310.78l-5.782 83.376L465.75 249.344l-25.063-66.313zm-334.562 19.564L16.562 226.78l36.876 19.564 6.093-16.28 1.25-3.314 3.126-1.656 42.22-22.5zm-34.438 48.312l-28.812 77 131.844 70.156 6.155-89.375-109.188-57.78zm335.344 50.875l-174.25 92.75 54.907 103.44L325.5 358.093l142.47 26.625-60.94-82.94zm-300.717 81.064l-19.438 44.812L144 402.876l-37.688-20.032z"},child:[]}]})(r)}function Pw(r){return Je({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(r)}function Vw(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(r)}function kw(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(r)}function jw(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(r)}function Lw(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(r)}function Wl(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(r)}function no(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(r)}function Uw(r){return Je({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(r)}function zw(r){return Je({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(r)}function Bw(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(r)}function Lm(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"},child:[]}]})(r)}function qw(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},child:[]}]})(r)}function _p(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(r)}function Fw(r){return Je({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"},child:[]}]})(r)}function V_(r){return Je({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(r)}function Hw(r){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(r)}function Gw(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(r)}function k_(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z"},child:[]}]})(r)}function Yw(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function j_(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"},child:[]}]})(r)}function Qw(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(r)}function Kw(r){return Je({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function $w(r){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function Xw(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function Hh(r){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(r)}function Ww(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(r)}function Zw(){return p.jsx("section",{id:"about",className:"about-section",children:p.jsxs("div",{className:"about-container",children:[p.jsxs("div",{className:"about-block",children:[p.jsx(Mw,{className:"about-icon"}),p.jsx("h2",{children:"Our Business"}),p.jsxs("p",{children:["Gold Corps stands at the pinnacle of global investment, bridging ",p.jsx("strong",{children:"gold, copper, agriculture, and cryptocurrency"})," into one unmatched portfolio. We operate in the world’s most lucrative and resource-rich regions, strategically positioned for ",p.jsx("strong",{children:"maximum profitability and sustainable impact"}),". Our assets are not just high-margin — they are ",p.jsx("strong",{children:"legacy-grade"}),", designed to deliver value for decades."]})]}),p.jsxs("div",{className:"about-block",children:[p.jsx(Wl,{className:"about-icon"}),p.jsx("h2",{children:"Our Strategy"}),p.jsxs("p",{children:["We think beyond quarters — ",p.jsx("strong",{children:"we think in generations"}),". Every move is backed by deep market intelligence, cutting-edge technology, and a relentless pursuit of excellence. From ",p.jsx("strong",{children:"exploring new mining frontiers"}),"to ",p.jsx("strong",{children:"pioneering next-generation crypto opportunities"}),", Goldvest invests where innovation meets stability. We build wealth that lasts, while ensuring our growth model is ",p.jsx("strong",{children:"ethical, sustainable, and future-proof"}),"."]})]}),p.jsxs("div",{className:"about-block",children:[p.jsx(Hh,{className:"about-icon"}),p.jsx("h2",{children:"Our Purpose"}),p.jsxs("p",{children:["Gold Corps is on a mission to become ",p.jsx("strong",{children:"the world’s most respected investment powerhouse"})," — measured not just by profits, but by the trust and prosperity we bring to our stakeholders. We are led by visionaries, powered by innovators, and grounded in principles that protect both people and the planet."]}),p.jsx("blockquote",{children:"Own the finest assets. Employ the brightest minds. Deliver unmatched returns. Leave a legacy worth its weight in gold."})]})]})})}const Jw=[{icon:p.jsx(Hh,{}),label:"Trusted Users",value:3e3,sub:"Investors Worldwide",desc:"Thousands of satisfied clients entrust us with their gold, copper, and diversified investments every day."},{icon:p.jsx(kw,{}),label:"Employees",value:5e3,sub:"Global Workforce",desc:"Our dedicated professionals operate at the highest standards, driving innovation and performance."},{icon:p.jsx(Fw,{}),label:"Countries",value:6,sub:"Active Markets",desc:"A truly global footprint, giving investors exposure to the world’s most lucrative mining and trading hubs."},{icon:p.jsx(Wl,{}),label:"Growth",value:80,sub:"Annual Increase (%)",desc:"Sustained double-digit growth powered by strategic expansion and long-term asset value creation."}];function ex(){return k.useEffect(()=>{document.querySelectorAll(".stat-value").forEach(e=>{const n=+e.getAttribute("data-target");let s=0;const o=()=>{const c=n/60;s<n?(s+=c,e.innerText=Math.ceil(s)+(e.dataset.percent?"%":"+"),setTimeout(o,20)):e.innerText=n+(e.dataset.percent?"%":"+")};o()})},[]),p.jsxs("section",{className:"stats-section",id:"services",children:[p.jsxs("div",{className:"stats-header",children:[p.jsx("h1",{className:"stats-title",children:"A Legacy of Trust. A Future of Growth."}),p.jsxs("p",{className:"stats-intro",children:["At ",p.jsx("span",{className:"gold-text",children:"Gold Corps"}),", we don’t just invest — we shape industries. From precious metals and global commodities to cutting-edge crypto and sustainable agriculture, we are redefining wealth creation on a global scale. Our unmatched portfolio and elite team ensure exceptional returns for investors while building lasting value for communities worldwide."]})]}),p.jsx("div",{className:"stats-container",children:Jw.map((r,e)=>p.jsxs("div",{className:"stat-card",children:[p.jsx("div",{className:"stat-icon",children:r.icon}),p.jsx("h2",{className:"stat-value shimmer","data-target":r.value,"data-percent":r.label==="Growth"?"true":"",children:"0"}),p.jsx("p",{className:"stat-label",children:r.label}),p.jsx("span",{className:"stat-sub",children:r.sub}),p.jsx("p",{className:"stat-desc",children:r.desc})]},e))})]})}const tx=[{icon:p.jsx(Hh,{}),label:"Trusted Investors",value:3e3,suffix:"+",sub:"Global investor community placing trust in our strategy",desc:"Thousands of investors choose Goldfinance for long-term capital growth, risk-controlled exposure, and diversified access across assets."},{icon:p.jsx(Wl,{}),label:"Employees",value:5e3,suffix:"",sub:"Experienced professionals powering global operations",desc:"A world-class team of geologists, traders, engineers and compliance experts committed to delivering measurable results."},{icon:p.jsx(V_,{}),label:"Countries",value:6,suffix:"+",sub:"Strategic, jurisdiction-diverse footprint",desc:"Operations and partnerships across high-potential regions to capture premium resources and market access."},{icon:p.jsx(Wl,{}),label:"Annual Growth",value:80,suffix:"%",sub:"Sustained expansion through disciplined execution",desc:"Strong historical performance driven by portfolio quality and careful capital allocation."}],nx=["Global Mining Consortium","Frontier Capital Partners","AgriGrowth International","CryptoBridge Labs","Sustainable Resources Alliance"],Fs=[{quote:"Goldfinance helped me diversify into real assets and crypto with clarity and confidence. Their team is responsive and deeply knowledgeable.",name:"Maria J. Finck",title:"Business Owner"},{quote:"From first contact to steady returns, Goldfinance delivered tangible results. Their approach is conservative where it must be, bold where it counts.",name:"Hajime Omuro",title:"Operations Manager"},{quote:"I recommend Goldfinance for any investor looking to combine sustainability with performance—transparent and trustworthy.",name:"James G. Wyatt",title:"Entrepreneur"}];function ix(r=".stat-value",e=1200){k.useEffect(()=>{const n=document.querySelectorAll(r);n.length&&n.forEach(s=>{const o=parseFloat(s.getAttribute("data-target"))||0,c=s.getAttribute("data-suffix")||"",d=performance.now(),m=g=>{const y=Math.min((g-d)/e,1),b=Math.floor(y*o);s.textContent=`${b.toLocaleString()}${c}`,y<1?requestAnimationFrame(m):s.textContent=`${o.toLocaleString()}${c}`};requestAnimationFrame(m)})},[r,e])}function rx(){const[r,e]=k.useState(0);k.useEffect(()=>{const c=setInterval(()=>e(d=>(d+1)%Fs.length),6e3);return()=>clearInterval(c)},[]),ix(".stat-value",1200);const[n,s]=k.useState(""),o=c=>{c.preventDefault(),alert(`Thanks — we'll reach out to ${n}`),s("")};return p.jsxs("main",{className:"gold-landing",children:[p.jsx("header",{className:"hero-section",children:p.jsxs("div",{className:"hero-inner",children:[p.jsx("h1",{className:"hero-title",id:"team",children:"Gold Corps — Building Enduring Wealth Across Gold, Copper, Agriculture & Crypto"}),p.jsx("p",{className:"hero-sub",children:"Trusted by thousands across six countries, we blend resource expertise, trading precision, and sustainable practices to generate high-quality, long-term returns."}),p.jsxs("div",{className:"hero-cta",children:[p.jsx(is,{to:"/signup",children:p.jsx("button",{className:"btn btn-primary",children:" Get Started"})}),p.jsxs("button",{className:"btn btn-outline",children:[p.jsx(Yw,{})," Watch Overview"]})]}),p.jsxs("div",{className:"hero-stats",children:[p.jsxs("div",{className:"stat-inline",children:[p.jsx("span",{className:"big",children:"6+"}),p.jsx("span",{className:"label",children:"Countries"})]}),p.jsxs("div",{className:"stat-inline",children:[p.jsx("span",{className:"big",children:"3,000+"}),p.jsx("span",{className:"label",children:"Investors"})]}),p.jsxs("div",{className:"stat-inline",children:[p.jsx("span",{className:"big",children:"80%"}),p.jsx("span",{className:"label",children:"Recent Growth"})]})]})]})}),p.jsx("section",{className:"partners-section",children:p.jsxs("div",{className:"container",children:[p.jsxs("h2",{children:[p.jsx(Pw,{className:"icon"})," Partner Companies & Recognitions"]}),p.jsx("p",{className:"muted",children:"Goldfinance is recognized for innovation, transparency, and bridging traditional finance with the digital future. Our partners and award bodies span investment, sustainability and technology sectors."}),p.jsx("ul",{className:"partner-list",children:nx.map((c,d)=>p.jsxs("li",{className:"partner-item",children:[p.jsx("span",{className:"dot"})," ",c]},d))})]})}),p.jsx("section",{className:"why-section",children:p.jsxs("div",{className:"container split",children:[p.jsxs("div",{className:"col",children:[p.jsxs("h2",{children:[p.jsx(Hw,{className:"icon"})," Why Choose Goldfinance"]}),p.jsx("p",{className:"muted",children:"We combine disciplined capital allocation, deep technical knowledge, and a relentless focus on risk management — all aimed at creating durable capital appreciation and measurable social benefit."}),p.jsxs("div",{className:"features-grid",children:[p.jsxs("div",{className:"feature",children:[p.jsx("h3",{children:"Tailored Solutions"}),p.jsx("p",{children:"Personalised investment strategies aligned with your objectives and timeline."})]}),p.jsxs("div",{className:"feature",children:[p.jsx("h3",{children:"Long-term Partnership"}),p.jsx("p",{children:"We invest alongside our clients and prioritize stability through cycles."})]}),p.jsxs("div",{className:"feature",children:[p.jsx("h3",{children:"Active Opportunity Sourcing"}),p.jsx("p",{children:"Proprietary pipelines and global partnerships deliver differentiated deal flow."})]}),p.jsxs("div",{className:"feature",children:[p.jsx("h3",{children:"24/7 Investor Support"}),p.jsx("p",{children:"Dedicated teams that act decisively whenever the market presents opportunity or risk."})]})]})]}),p.jsxs("aside",{className:"col panel",children:[p.jsx("h3",{children:"Tailored for You"}),p.jsx("p",{children:"The deeper we understand your goals and constraints, the smarter we can allocate capital on your behalf — harvesting superior returns while managing downside exposure."}),p.jsxs("div",{className:"panel-list",children:[p.jsxs("div",{children:[p.jsx("strong",{children:"In Your Corner"}),p.jsx("p",{children:"We stand with investors through market cycles — protection and growth combined."})]}),p.jsxs("div",{children:[p.jsx("strong",{children:"We Do the Work"}),p.jsx("p",{children:"Expert media buying and deal execution so your capital works efficiently."})]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Round-the-clock"}),p.jsx("p",{children:"Support across timezones and fast response for critical needs."})]})]})]})]})}),p.jsx("section",{className:"how-section",children:p.jsxs("div",{className:"container",children:[p.jsxs("h2",{children:[p.jsx(Wl,{className:"icon"})," How It Works — Simple, Transparent, Profitable"]}),p.jsxs("ol",{className:"steps",children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Refer & Qualify"})," — Invite new investors who deposit $100 or more."]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Acquisition"})," — Our affiliate & media teams deploy targeted campaigns ($20–$40 per qualified lead)."]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Profit Split"})," — A properly qualified referral generates $60–$80 in net value; volume scales returns."]})]}),p.jsxs("div",{className:"mini-case",children:[p.jsx("strong",{children:"Example (25 referrals)"}),p.jsxs("div",{className:"case-grid",children:[p.jsxs("div",{children:[p.jsx("span",{className:"case-number",children:"$2,000"}),p.jsx("div",{className:"case-label",children:"Estimated Expense"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"case-number",children:"$6,000–$8,000"}),p.jsx("div",{className:"case-label",children:"Projected Profit"})]})]})]}),p.jsx("p",{className:"muted small",children:"Affiliate success requires marketing expertise, a tested funnel and an operating budget — all of which we provide through our partners and proven teams."})]})}),p.jsx("section",{className:"stats-section",children:p.jsxs("div",{className:"container",children:[p.jsxs("h2",{children:[p.jsx(V_,{className:"icon"})," Key Metrics & Performance"]}),p.jsx("p",{className:"muted",children:"Performance that proves our strategy — clear metrics, transparent reporting."}),p.jsx("div",{className:"stats-grid",children:tx.map((c,d)=>p.jsxs("div",{className:"stat-card",children:[p.jsx("div",{className:"stat-icon",children:c.icon}),p.jsx("div",{className:"stat-value shimmer","data-target":c.value,"data-suffix":c.suffix,"aria-label":`${c.value}${c.suffix}`,children:"0"}),p.jsx("div",{className:"stat-label",children:c.label}),p.jsx("div",{className:"stat-sub",children:c.sub}),p.jsx("div",{className:"stat-desc muted",children:c.desc})]},d))})]})}),p.jsx("section",{className:"miners-section",children:p.jsxs("div",{className:"container split",children:[p.jsxs("div",{className:"col",children:[p.jsx("h2",{children:"Our Miners — Reliability & Consistency"}),p.jsx("p",{className:"muted",children:"Since 2022, our mining and operations teams have consistently met investor obligations and optimized output across multiple sites. With five years of on-the-ground experience in asset development and day-to-day operations, our teams are trained for safe, high-quality production."}),p.jsxs("ul",{className:"miner-list",children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Operational Excellence"})," — Rigid maintenance and safety regimes ensure uptime and reliability."]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Local Partnerships"})," — Working with communities and regulators to ensure sustainable outcomes."]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Transparent Payments"})," — Reliable payouts and investor reporting are built into our processes."]})]})]}),p.jsxs("aside",{className:"col panel",children:[p.jsx("h3",{children:"Geographic Reach"}),p.jsxs("div",{className:"geo-grid",children:[p.jsxs("div",{children:[p.jsx("strong",{children:"Latham"}),p.jsx("span",{className:"muted",children:" — Headquarters"})]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Africa"}),p.jsx("span",{className:"muted",children:" — Resource operations"})]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Asia"}),p.jsx("span",{className:"muted",children:" — Development & trading"})]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Europe"}),p.jsx("span",{className:"muted",children:" — Finance & compliance"})]}),p.jsxs("div",{children:[p.jsx("strong",{children:"CIS"}),p.jsx("span",{className:"muted",children:" — Strategic partnerships"})]})]})]})]})}),p.jsx("section",{className:"testimonials-section",children:p.jsxs("div",{className:"container",children:[p.jsxs("h2",{children:[p.jsx(Hh,{className:"icon",id:"testimonial"})," Investor Testimonials"]}),p.jsxs("div",{className:"test-carousel",children:[p.jsx("button",{className:"carousel-arrow left",onClick:()=>e(c=>(c-1+Fs.length)%Fs.length),"aria-label":"Previous testimonial",children:p.jsx(Uw,{})}),p.jsxs("article",{className:"testimonial-card","aria-live":"polite",children:[p.jsxs("blockquote",{children:["“",Fs[r].quote,"”"]}),p.jsxs("cite",{children:["— ",Fs[r].name,", ",p.jsx("span",{className:"muted",children:Fs[r].title})]})]}),p.jsx("button",{className:"carousel-arrow right",onClick:()=>e(c=>(c+1)%Fs.length),"aria-label":"Next testimonial",children:p.jsx(zw,{})})]})]})}),p.jsx("section",{className:"cta-section",id:"contact",children:p.jsxs("div",{className:"container cta-panel",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Let's Work Together"}),p.jsx("p",{className:"muted",children:"Our sustainability-driven business plan blends responsible mining, ethical trading, and long-term investor value. Join a select group of investors building something that lasts."})]}),p.jsxs("form",{className:"cta-form",onSubmit:o,children:[p.jsx("label",{htmlFor:"email",className:"visually-hidden",children:"Email address"}),p.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",value:n,required:!0,onChange:c=>s(c.target.value)}),p.jsx("button",{className:"btn btn-primary",type:"submit",children:"Get a Quote"})]})]})}),p.jsxs("footer",{className:"site-footer",children:[p.jsxs("div",{className:"container footer-grid",children:[p.jsxs("div",{children:[p.jsx("h4",{children:"Goldfinance"}),p.jsx("p",{className:"muted small",children:"Multi-asset investing across gold, copper, agriculture & crypto."})]}),p.jsxs("div",{children:[p.jsx("h5",{children:"Company"}),p.jsxs("ul",{children:[p.jsx("li",{children:"About"}),p.jsx("li",{children:"Leadership"}),p.jsx("li",{children:"Careers"}),p.jsx("li",{children:"Contact"})]})]}),p.jsxs("div",{children:[p.jsx("h5",{children:"Resources"}),p.jsxs("ul",{children:[p.jsx("li",{children:"FAQ"}),p.jsx("li",{children:"Pricing Plans"}),p.jsx("li",{children:"Legal Notice"}),p.jsx("li",{children:"Privacy Policy"})]})]})]}),p.jsx("div",{className:"footer-bottom",children:p.jsxs("small",{children:["© ",new Date().getFullYear()," Goldfinance. All rights reserved."]})})]})]})}const sx=()=>{};var B1={};/**
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
 */const L_=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},ax=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];e[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],d=r[n++],m=r[n++],g=((o&7)<<18|(c&63)<<12|(d&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const c=r[n++],d=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|d&63)}}return e.join("")},U_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],d=o+1<r.length,m=d?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,b=c>>2,x=(c&3)<<4|m>>4;let S=(m&15)<<2|y>>6,D=y&63;g||(D=64,d||(S=64)),s.push(n[b],n[x],n[S],n[D])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(L_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ax(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const x=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||m==null||y==null||x==null)throw new ox;const S=c<<2|m>>4;if(s.push(S),y!==64){const D=m<<4&240|y>>2;if(s.push(D),x!==64){const U=y<<6&192|x;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class ox extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lx=function(r){const e=L_(r);return U_.encodeByteArray(e,!0)},bh=function(r){return lx(r).replace(/\./g,"")},z_=function(r){try{return U_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ux=()=>cx().__FIREBASE_DEFAULTS__,hx=()=>{if(typeof process>"u"||typeof B1>"u")return;const r=B1.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},dx=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&z_(r[1]);return e&&JSON.parse(e)},Gh=()=>{try{return sx()||ux()||hx()||dx()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},B_=r=>Gh()?.emulatorHosts?.[r],fx=r=>{const e=B_(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},q_=()=>Gh()?.config,F_=r=>Gh()?.[`_${r}`];/**
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
 */class mx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function _o(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function H_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function px(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[bh(JSON.stringify(n)),bh(JSON.stringify(d)),""].join(".")}const Hl={};function gx(){const r={prod:[],emulator:[]};for(const e of Object.keys(Hl))Hl[e]?r.emulator.push(e):r.prod.push(e);return r}function yx(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let q1=!1;function G_(r,e){if(typeof window>"u"||typeof document>"u"||!_o(window.location.host)||Hl[r]===e||Hl[r]||q1)return;Hl[r]=e;function n(S){return`__firebase__banner__${S}`}const s="__firebase__banner",c=gx().prod.length>0;function d(){const S=document.getElementById(s);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function g(S,D){S.setAttribute("width","24"),S.setAttribute("id",D),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{q1=!0,d()},S}function b(S,D){S.setAttribute("id",D),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function x(){const S=yx(s),D=n("text"),U=document.getElementById(D)||document.createElement("span"),z=n("learnmore"),q=document.getElementById(z)||document.createElement("a"),K=n("preprendIcon"),ie=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ne=S.element;m(ne),b(q,z);const le=y();g(ie,K),ne.append(ie,U,q,le),document.body.appendChild(ne)}c?(U.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
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
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function _x(){const r=Gh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ex(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bx(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Tx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wx(){const r=en();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function xx(){return!_x()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sx(){try{return typeof indexedDB=="object"}catch{return!1}}function Ax(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const Rx="FirebaseError";class rr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Rx,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pc.prototype.create)}}class pc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],d=c?Cx(c,s):"Error",m=`${this.serviceName}: ${d} (${o}).`;return new rr(o,m,s)}}function Cx(r,e){return r.replace(Ix,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Ix=/\{\$([^}]+)}/g;function Nx(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function $s(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const c=r[o],d=e[o];if(F1(c)&&F1(d)){if(!$s(c,d))return!1}else if(c!==d)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function F1(r){return r!==null&&typeof r=="object"}/**
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
 */function gc(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ll(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,c]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function Ul(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function Dx(r,e){const n=new Ox(r,e);return n.subscribe.bind(n)}class Ox{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Mx(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=xm),o.error===void 0&&(o.error=xm),o.complete===void 0&&(o.complete=xm);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mx(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function xm(){}/**
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
 */function Dt(r){return r&&r._delegate?r._delegate:r}class Xs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hs="[DEFAULT]";/**
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
 */class Px{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mx;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kx(e))try{this.getOrInitializeService({instanceIdentifier:Hs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(e=Hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hs){return this.instances.has(e)}getOptions(e=Hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,d]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&d.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&e(c,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vx(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Hs){return this.component?this.component.multipleInstances?e:Hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vx(r){return r===Hs?void 0:r}function kx(r){return r.instantiationMode==="EAGER"}/**
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
 */class jx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Px(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const Lx={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},Ux=Oe.INFO,zx={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},Bx=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=zx[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ep{constructor(e){this.name=e,this._logLevel=Ux,this._logHandler=Bx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const qx=(r,e)=>e.some(n=>r instanceof n);let H1,G1;function Fx(){return H1||(H1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hx(){return G1||(G1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y_=new WeakMap,Um=new WeakMap,Q_=new WeakMap,Sm=new WeakMap,bp=new WeakMap;function Gx(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{n(Fr(r.result)),o()},d=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Y_.set(n,r)}).catch(()=>{}),bp.set(e,r),e}function Yx(r){if(Um.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{n(),o()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});Um.set(r,e)}let zm={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Um.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Q_.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Qx(r){zm=r(zm)}function Kx(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Am(this),e,...n);return Q_.set(s,e.sort?e.sort():[e]),Fr(s)}:Hx().includes(r)?function(...e){return r.apply(Am(this),e),Fr(Y_.get(this))}:function(...e){return Fr(r.apply(Am(this),e))}}function $x(r){return typeof r=="function"?Kx(r):(r instanceof IDBTransaction&&Yx(r),qx(r,Fx())?new Proxy(r,zm):r)}function Fr(r){if(r instanceof IDBRequest)return Gx(r);if(Sm.has(r))return Sm.get(r);const e=$x(r);return e!==r&&(Sm.set(r,e),bp.set(e,r)),e}const Am=r=>bp.get(r);function Xx(r,e,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const d=indexedDB.open(r,e),m=Fr(d);return s&&d.addEventListener("upgradeneeded",g=>{s(Fr(d.result),g.oldVersion,g.newVersion,Fr(d.transaction),g)}),n&&d.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{c&&g.addEventListener("close",()=>c()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const Wx=["get","getKey","getAll","getAllKeys","count"],Zx=["put","add","delete","clear"],Rm=new Map;function Y1(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Rm.get(e))return Rm.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=Zx.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Wx.includes(n)))return;const c=async function(d,...m){const g=this.transaction(d,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&g.done]))[0]};return Rm.set(e,c),c}Qx(r=>({...r,get:(e,n,s)=>Y1(e,n)||r.get(e,n,s),has:(e,n)=>!!Y1(e,n)||r.has(e,n)}));/**
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
 */class Jx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function eS(r){return r.getComponent()?.type==="VERSION"}const Bm="@firebase/app",Q1="0.14.1";/**
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
 */const Ji=new Ep("@firebase/app"),tS="@firebase/app-compat",nS="@firebase/analytics-compat",iS="@firebase/analytics",rS="@firebase/app-check-compat",sS="@firebase/app-check",aS="@firebase/auth",oS="@firebase/auth-compat",lS="@firebase/database",cS="@firebase/data-connect",uS="@firebase/database-compat",hS="@firebase/functions",dS="@firebase/functions-compat",fS="@firebase/installations",mS="@firebase/installations-compat",pS="@firebase/messaging",gS="@firebase/messaging-compat",yS="@firebase/performance",vS="@firebase/performance-compat",_S="@firebase/remote-config",ES="@firebase/remote-config-compat",bS="@firebase/storage",TS="@firebase/storage-compat",wS="@firebase/firestore",xS="@firebase/ai",SS="@firebase/firestore-compat",AS="firebase",RS="12.1.0";/**
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
 */const qm="[DEFAULT]",CS={[Bm]:"fire-core",[tS]:"fire-core-compat",[iS]:"fire-analytics",[nS]:"fire-analytics-compat",[sS]:"fire-app-check",[rS]:"fire-app-check-compat",[aS]:"fire-auth",[oS]:"fire-auth-compat",[lS]:"fire-rtdb",[cS]:"fire-data-connect",[uS]:"fire-rtdb-compat",[hS]:"fire-fn",[dS]:"fire-fn-compat",[fS]:"fire-iid",[mS]:"fire-iid-compat",[pS]:"fire-fcm",[gS]:"fire-fcm-compat",[yS]:"fire-perf",[vS]:"fire-perf-compat",[_S]:"fire-rc",[ES]:"fire-rc-compat",[bS]:"fire-gcs",[TS]:"fire-gcs-compat",[wS]:"fire-fst",[SS]:"fire-fst-compat",[xS]:"fire-vertex","fire-js":"fire-js",[AS]:"fire-js-all"};/**
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
 */const Th=new Map,IS=new Map,Fm=new Map;function K1(r,e){try{r.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function lo(r){const e=r.name;if(Fm.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;Fm.set(e,r);for(const n of Th.values())K1(n,r);for(const n of IS.values())K1(n,r);return!0}function Tp(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function En(r){return r==null?!1:r.settings!==void 0}/**
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
 */const NS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hr=new pc("app","Firebase",NS);/**
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
 */class DS{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Eo=RS;function K_(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:qm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Hr.create("bad-app-name",{appName:String(o)});if(n||(n=q_()),!n)throw Hr.create("no-options");const c=Th.get(o);if(c){if($s(n,c.options)&&$s(s,c.config))return c;throw Hr.create("duplicate-app",{appName:o})}const d=new jx(o);for(const g of Fm.values())d.addComponent(g);const m=new DS(n,s,d);return Th.set(o,m),m}function $_(r=qm){const e=Th.get(r);if(!e&&r===qm&&q_())return K_();if(!e)throw Hr.create("no-app",{appName:r});return e}function Gr(r,e,n){let s=CS[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const d=[`Unable to register library "${s}" with version "${e}":`];o&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(d.join(" "));return}lo(new Xs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const OS="firebase-heartbeat-database",MS=1,Zl="firebase-heartbeat-store";let Cm=null;function X_(){return Cm||(Cm=Xx(OS,MS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Zl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Hr.create("idb-open",{originalErrorMessage:r.message})})),Cm}async function PS(r){try{const n=(await X_()).transaction(Zl),s=await n.objectStore(Zl).get(W_(r));return await n.done,s}catch(e){if(e instanceof rr)Ji.warn(e.message);else{const n=Hr.create("idb-get",{originalErrorMessage:e?.message});Ji.warn(n.message)}}}async function $1(r,e){try{const s=(await X_()).transaction(Zl,"readwrite");await s.objectStore(Zl).put(e,W_(r)),await s.done}catch(n){if(n instanceof rr)Ji.warn(n.message);else{const s=Hr.create("idb-set",{originalErrorMessage:n?.message});Ji.warn(s.message)}}}function W_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const VS=1024,kS=30;class jS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new US(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=X1();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>kS){const o=zS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ji.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=X1(),{heartbeatsToSend:n,unsentEntries:s}=LS(this._heartbeatsCache.heartbeats),o=bh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ji.warn(e),""}}}function X1(){return new Date().toISOString().substring(0,10)}function LS(r,e=VS){const n=[];let s=r.slice();for(const o of r){const c=n.find(d=>d.agent===o.agent);if(c){if(c.dates.push(o.date),W1(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),W1(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class US{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sx()?Ax().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PS(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function W1(r){return bh(JSON.stringify({version:2,heartbeats:r})).length}function zS(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function BS(r){lo(new Xs("platform-logger",e=>new Jx(e),"PRIVATE")),lo(new Xs("heartbeat",e=>new jS(e),"PRIVATE")),Gr(Bm,Q1,r),Gr(Bm,Q1,"esm2020"),Gr("fire-js","")}BS("");function Z_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qS=Z_,J_=new pc("auth","Firebase",Z_());/**
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
 */const wh=new Ep("@firebase/auth");function FS(r,...e){wh.logLevel<=Oe.WARN&&wh.warn(`Auth (${Eo}): ${r}`,...e)}function oh(r,...e){wh.logLevel<=Oe.ERROR&&wh.error(`Auth (${Eo}): ${r}`,...e)}/**
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
 */function jn(r,...e){throw xp(r,...e)}function Gn(r,...e){return xp(r,...e)}function wp(r,e,n){const s={...qS(),[e]:n};return new pc("auth","Firebase",s).create(e,{appName:r.name})}function Wi(r){return wp(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HS(r,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&jn(r,"argument-error"),wp(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xp(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return J_.create(r,...e)}function Ee(r,e,...n){if(!r)throw xp(e,...n)}function Ki(r){const e="INTERNAL ASSERTION FAILED: "+r;throw oh(e),new Error(e)}function er(r,e){r||Ki(e)}/**
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
 */function Hm(){return typeof self<"u"&&self.location?.href||""}function GS(){return Z1()==="http:"||Z1()==="https:"}function Z1(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function YS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GS()||bx()||"connection"in navigator)?navigator.onLine:!0}function QS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class yc{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=vx()||Tx()}get(){return YS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sp(r,e){er(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class e2{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $S=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],XS=new yc(3e4,6e4);function sr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ar(r,e,n,s,o={}){return t2(r,o,async()=>{let c={},d={};s&&(e==="GET"?d=s:c={body:JSON.stringify(s)});const m=gc({key:r.config.apiKey,...d}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:g,...c};return Ex()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&_o(r.emulatorConfig.host)&&(y.credentials="include"),e2.fetch()(await n2(r,r.config.apiHost,n,m),y)})}async function t2(r,e,n){r._canInitEmulator=!1;const s={...KS,...e};try{const o=new ZS(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Zu(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const m=c.ok?d.errorMessage:d.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zu(r,"credential-already-in-use",d);if(g==="EMAIL_EXISTS")throw Zu(r,"email-already-in-use",d);if(g==="USER_DISABLED")throw Zu(r,"user-disabled",d);const b=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw wp(r,b,y);jn(r,b)}}catch(o){if(o instanceof rr)throw o;jn(r,"network-request-failed",{message:String(o)})}}async function vc(r,e,n,s,o={}){const c=await ar(r,e,n,s,o);return"mfaPendingCredential"in c&&jn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function n2(r,e,n,s){const o=`${e}${n}?${s}`,c=r,d=c.config.emulator?Sp(r.config,o):`${r.config.apiScheme}://${o}`;return $S.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function WS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gn(this.auth,"network-request-failed")),XS.get())})}}function Zu(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Gn(r,e,s);return o.customData._tokenResponse=n,o}function J1(r){return r!==void 0&&r.enterprise!==void 0}class JS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return WS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eA(r,e){return ar(r,"GET","/v2/recaptchaConfig",sr(r,e))}/**
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
 */async function tA(r,e){return ar(r,"POST","/v1/accounts:delete",e)}async function xh(r,e){return ar(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nA(r,e=!1){const n=Dt(r),s=await n.getIdToken(e),o=Ap(s);Ee(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,d=c?.sign_in_provider;return{claims:o,token:s,authTime:Gl(Im(o.auth_time)),issuedAtTime:Gl(Im(o.iat)),expirationTime:Gl(Im(o.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Im(r){return Number(r)*1e3}function Ap(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return oh("JWT malformed, contained fewer than 3 sections"),null;try{const o=z_(n);return o?JSON.parse(o):(oh("Failed to decode base64 JWT payload"),null)}catch(o){return oh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function ev(r){const e=Ap(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rr&&iA(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function iA({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class rA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gl(this.lastLoginAt),this.creationTime=Gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sh(r){const e=r.auth,n=await r.getIdToken(),s=await Jl(r,xh(e,{idToken:n}));Ee(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const c=o.providerUserInfo?.length?i2(o.providerUserInfo):[],d=aA(r.providerData,c),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!d?.length,y=m?g:!1,b={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Gm(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,b)}async function sA(r){const e=Dt(r);await Sh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aA(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function i2(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function oA(r,e){const n=await t2(r,{},async()=>{const s=gc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,d=await n2(r,o,"/v1/token",`key=${c}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&_o(r.emulatorConfig.host)&&(g.credentials="include"),e2.fetch()(d,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lA(r,e){return ar(r,"POST","/v2/accounts:revokeToken",sr(r,e))}/**
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
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ev(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const n=ev(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await oA(e,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,d=new io;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),o&&(Ee(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),c&&(Ee(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return Ki("not implemented")}}/**
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
 */function jr(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Hn{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new rA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Gm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Jl(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Sh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(Wi(this.auth));const e=await this.getIdToken();return await Jl(this,tA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,d=n.photoURL??void 0,m=n.tenantId??void 0,g=n._redirectEventId??void 0,y=n.createdAt??void 0,b=n.lastLoginAt??void 0,{uid:x,emailVerified:S,isAnonymous:D,providerData:U,stsTokenManager:z}=n;Ee(x&&z,e,"internal-error");const q=io.fromJSON(this.name,z);Ee(typeof x=="string",e,"internal-error"),jr(s,e.name),jr(o,e.name),Ee(typeof S=="boolean",e,"internal-error"),Ee(typeof D=="boolean",e,"internal-error"),jr(c,e.name),jr(d,e.name),jr(m,e.name),jr(g,e.name),jr(y,e.name),jr(b,e.name);const K=new Hn({uid:x,auth:e,email:o,emailVerified:S,displayName:s,isAnonymous:D,photoURL:d,phoneNumber:c,tenantId:m,stsTokenManager:q,createdAt:y,lastLoginAt:b});return U&&Array.isArray(U)&&(K.providerData=U.map(ie=>({...ie}))),g&&(K._redirectEventId=g),K}static async _fromIdTokenResponse(e,n,s=!1){const o=new io;o.updateFromServerResponse(n);const c=new Hn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Sh(c),c}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Ee(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?i2(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!c?.length,m=new io;m.updateFromIdToken(s);const g=new Hn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:d}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Gm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(g,y),g}}/**
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
 */const tv=new Map;function $i(r){er(r instanceof Function,"Expected a class definition");let e=tv.get(r);return e?(er(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,tv.set(r,e),e)}/**
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
 */class r2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}r2.type="NONE";const nv=r2;/**
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
 */function lh(r,e,n){return`firebase:${r}:${e}:${n}`}class ro{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=lh(this.userKey,o.apiKey,c),this.fullPersistenceKey=lh("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xh(this.auth,{idToken:e}).catch(()=>{});return n?Hn._fromGetAccountInfoResponse(this.auth,n,e):null}return Hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ro($i(nv),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||$i(nv);const d=lh(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const b=await y._get(d);if(b){let x;if(typeof b=="string"){const S=await xh(e,{idToken:b}).catch(()=>{});if(!S)break;x=await Hn._fromGetAccountInfoResponse(e,S,b)}else x=Hn._fromJSON(e,b);y!==c&&(m=x),c=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new ro(c,e,s):(c=g[0],m&&await c._set(d,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(d)}catch{}})),new ro(c,e,s))}}/**
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
 */function iv(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(l2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(s2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(u2(e))return"Blackberry";if(h2(e))return"Webos";if(a2(e))return"Safari";if((e.includes("chrome/")||o2(e))&&!e.includes("edge/"))return"Chrome";if(c2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function s2(r=en()){return/firefox\//i.test(r)}function a2(r=en()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function o2(r=en()){return/crios\//i.test(r)}function l2(r=en()){return/iemobile/i.test(r)}function c2(r=en()){return/android/i.test(r)}function u2(r=en()){return/blackberry/i.test(r)}function h2(r=en()){return/webos/i.test(r)}function Rp(r=en()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function cA(r=en()){return Rp(r)&&!!window.navigator?.standalone}function uA(){return wx()&&document.documentMode===10}function d2(r=en()){return Rp(r)||c2(r)||h2(r)||u2(r)||/windows phone/i.test(r)||l2(r)}/**
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
 */function f2(r,e=[]){let n;switch(r){case"Browser":n=iv(en());break;case"Worker":n=`${iv(en())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Eo}/${s}`}/**
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
 */class hA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((d,m)=>{try{const g=e(c);d(g)}catch(g){m(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function dA(r,e={}){return ar(r,"GET","/v2/passwordPolicy",sr(r,e))}/**
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
 */const fA=6;class mA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??fA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class pA{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rv(this),this.idTokenSubscription=new rv(this),this.beforeStateQueue=new hA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=J_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$i(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ro.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xh(this,{idToken:e}),s=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(En(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,d=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===d)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sh(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(Wi(this));const n=e?Dt(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(Wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(Wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($i(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dA(this),n=new mA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pc("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await lA(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$i(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await ro.create(this,[$i(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(m,this,"internal-error"),m.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,s,o);return()=>{d=!0,g()}}else{const g=e.addObserver(n);return()=>{d=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&FS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function or(r){return Dt(r)}class rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dx(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gA(r){Yh=r}function m2(r){return Yh.loadJS(r)}function yA(){return Yh.recaptchaEnterpriseScript}function vA(){return Yh.gapiScript}function _A(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class EA{constructor(){this.enterprise=new bA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class bA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const TA="recaptcha-enterprise",p2="NO_RECAPTCHA";class wA{constructor(e){this.type=TA,this.auth=or(e)}async verify(e="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,m)=>{eA(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new JS(g);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,d(y.siteKey)}}).catch(g=>{m(g)})})}function o(c,d,m){const g=window.grecaptcha;J1(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:e}).then(y=>{d(y)}).catch(()=>{d(p2)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new EA().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{s(this.auth).then(m=>{if(!n&&J1(window.grecaptcha))o(m,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let g=yA();g.length!==0&&(g+=m),m2(g).then(()=>{o(m,c,d)}).catch(y=>{d(y)})}}).catch(m=>{d(m)})})}}async function sv(r,e,n,s=!1,o=!1){const c=new wA(r);let d;if(o)d=p2;else try{d=await c.verify(n)}catch{d=await c.verify(n,!0)}const m={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:d}):Object.assign(m,{captchaResponse:d}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Ah(r,e,n,s,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await sv(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await sv(r,e,n,n==="getOobCode");return s(r,d)}else return Promise.reject(c)})}/**
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
 */function xA(r,e){const n=Tp(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if($s(c,e??{}))return o;jn(o,"already-initialized")}return n.initialize({options:e})}function SA(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map($i);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function AA(r,e,n){const s=or(r);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,c=g2(e),{host:d,port:m}=RA(e),g=m===null?"":`:${m}`,y={url:`${c}//${d}${g}/`},b=Object.freeze({host:d,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee($s(y,s.config.emulator)&&$s(b,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=b,s.settings.appVerificationDisabledForTesting=!0,_o(d)?(H_(`${c}//${d}${g}`),G_("Auth",!0)):CA()}function g2(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function RA(r){const e=g2(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:av(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:av(d)}}}function av(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function CA(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Cp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ki("not implemented")}_getIdTokenResponse(e){return Ki("not implemented")}_linkToIdToken(e,n){return Ki("not implemented")}_getReauthenticationResolver(e){return Ki("not implemented")}}async function IA(r,e){return ar(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function NA(r,e){return vc(r,"POST","/v1/accounts:signInWithPassword",sr(r,e))}async function DA(r,e){return ar(r,"POST","/v1/accounts:sendOobCode",sr(r,e))}async function OA(r,e){return DA(r,e)}/**
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
 */async function MA(r,e){return vc(r,"POST","/v1/accounts:signInWithEmailLink",sr(r,e))}async function PA(r,e){return vc(r,"POST","/v1/accounts:signInWithEmailLink",sr(r,e))}/**
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
 */class ec extends Cp{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new ec(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ec(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ah(e,n,"signInWithPassword",NA);case"emailLink":return MA(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ah(e,s,"signUpPassword",IA);case"emailLink":return PA(e,{idToken:n,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function so(r,e){return vc(r,"POST","/v1/accounts:signInWithIdp",sr(r,e))}/**
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
 */const VA="http://localhost";class Ws extends Cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...c}=n;if(!s||!o)return null;const d=new Ws(s,o);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return so(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,so(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,so(e,n)}buildRequest(){const e={requestUri:VA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gc(n)}return e}}/**
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
 */function kA(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jA(r){const e=Ll(Ul(r)).link,n=e?Ll(Ul(e)).deep_link_id:null,s=Ll(Ul(r)).deep_link_id;return(s?Ll(Ul(s)).link:null)||s||n||e||r}class Ip{constructor(e){const n=Ll(Ul(e)),s=n.apiKey??null,o=n.oobCode??null,c=kA(n.mode??null);Ee(s&&o&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=jA(e);try{return new Ip(n)}catch{return null}}}/**
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
 */class bo{constructor(){this.providerId=bo.PROVIDER_ID}static credential(e,n){return ec._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ip.parseLink(n);return Ee(s,"argument-error"),ec._fromEmailAndCode(e,s.code,s.tenantId)}}bo.PROVIDER_ID="password";bo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Np{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _c extends Np{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ur extends _c{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
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
 */class fi extends _c{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ws._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return fi.credential(n,s)}catch{return null}}}fi.GOOGLE_SIGN_IN_METHOD="google.com";fi.PROVIDER_ID="google.com";/**
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
 */class zr extends _c{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
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
 */class Br extends _c{constructor(){super("twitter.com")}static credential(e,n){return Ws._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Br.credential(n,s)}catch{return null}}}Br.TWITTER_SIGN_IN_METHOD="twitter.com";Br.PROVIDER_ID="twitter.com";/**
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
 */async function LA(r,e){return vc(r,"POST","/v1/accounts:signUp",sr(r,e))}/**
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
 */class Zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const c=await Hn._fromIdTokenResponse(e,s,o),d=ov(s);return new Zs({user:c,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=ov(s);return new Zs({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function ov(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Rh extends rr{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Rh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Rh(e,n,s,o)}}function y2(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Rh._fromErrorAndOperation(r,c,e,s):c})}async function UA(r,e,n=!1){const s=await Jl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Zs._forOperation(r,"link",s)}/**
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
 */async function zA(r,e,n=!1){const{auth:s}=r;if(En(s.app))return Promise.reject(Wi(s));const o="reauthenticate";try{const c=await Jl(r,y2(s,o,e,r),n);Ee(c.idToken,s,"internal-error");const d=Ap(c.idToken);Ee(d,s,"internal-error");const{sub:m}=d;return Ee(r.uid===m,s,"user-mismatch"),Zs._forOperation(r,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&jn(s,"user-mismatch"),c}}/**
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
 */async function v2(r,e,n=!1){if(En(r.app))return Promise.reject(Wi(r));const s="signIn",o=await y2(r,s,e),c=await Zs._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(c.user),c}async function BA(r,e){return v2(or(r),e)}/**
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
 */async function _2(r){const e=or(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qA(r,e,n){const s=or(r);await Ah(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",OA)}async function FA(r,e,n){if(En(r.app))return Promise.reject(Wi(r));const s=or(r),d=await Ah(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LA).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&_2(r),g}),m=await Zs._fromIdTokenResponse(s,"signIn",d);return await s._updateCurrentUser(m.user),m}function HA(r,e,n){return En(r.app)?Promise.reject(Wi(r)):BA(Dt(r),bo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&_2(r),s})}function GA(r,e,n,s){return Dt(r).onIdTokenChanged(e,n,s)}function YA(r,e,n){return Dt(r).beforeAuthStateChanged(e,n)}function E2(r,e,n,s){return Dt(r).onAuthStateChanged(e,n,s)}function QA(r){return Dt(r).signOut()}const Ch="__sak";/**
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
 */class b2{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ch,"1"),this.storage.removeItem(Ch),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const KA=1e3,$A=10;class T2 extends b2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=d2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,m,g)=>{this.notifyListeners(d,g)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);uA()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,$A):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},KA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}T2.type="LOCAL";const XA=T2;/**
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
 */class w2 extends b2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}w2.type="SESSION";const x2=w2;/**
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
 */function WA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Qh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:c}=n.data,d=this.handlersMap[o];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(d).map(async y=>y(n.origin,c)),g=await WA(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qh.receivers=[];/**
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
 */function Dp(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class ZA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,d;return new Promise((m,g)=>{const y=Dp("",20);o.port1.start();const b=setTimeout(()=>{g(new Error("unsupported_event"))},s);d={messageChannel:o,onMessage(x){const S=x;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(S.data.response);break;default:clearTimeout(b),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function mi(){return window}function JA(r){mi().location.href=r}/**
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
 */function S2(){return typeof mi().WorkerGlobalScope<"u"&&typeof mi().importScripts=="function"}async function e6(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function t6(){return navigator?.serviceWorker?.controller||null}function n6(){return S2()?self:null}/**
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
 */const A2="firebaseLocalStorageDb",i6=1,Ih="firebaseLocalStorage",R2="fbase_key";class Ec{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kh(r,e){return r.transaction([Ih],e?"readwrite":"readonly").objectStore(Ih)}function r6(){const r=indexedDB.deleteDatabase(A2);return new Ec(r).toPromise()}function Ym(){const r=indexedDB.open(A2,i6);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ih,{keyPath:R2})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ih)?e(s):(s.close(),await r6(),e(await Ym()))})})}async function lv(r,e,n){const s=Kh(r,!0).put({[R2]:e,value:n});return new Ec(s).toPromise()}async function s6(r,e){const n=Kh(r,!1).get(e),s=await new Ec(n).toPromise();return s===void 0?null:s.value}function cv(r,e){const n=Kh(r,!0).delete(e);return new Ec(n).toPromise()}const a6=800,o6=3;class C2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ym(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>o6)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qh._getInstance(n6()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await e6(),!this.activeServiceWorker)return;this.sender=new ZA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||t6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ym();return await lv(e,Ch,"1"),await cv(e,Ch),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>lv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>s6(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Kh(o,!1).getAll();return new Ec(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),a6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}C2.type="LOCAL";const l6=C2;new yc(3e4,6e4);/**
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
 */function I2(r,e){return e?$i(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Op extends Cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return so(e,this._buildIdpRequest())}_linkToIdToken(e,n){return so(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return so(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function c6(r){return v2(r.auth,new Op(r),r.bypassAuthState)}function u6(r){const{auth:e,user:n}=r;return Ee(n,e,"internal-error"),zA(n,new Op(r),r.bypassAuthState)}async function h6(r){const{auth:e,user:n}=r;return Ee(n,e,"internal-error"),UA(n,new Op(r),r.bypassAuthState)}/**
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
 */class N2{constructor(e,n,s,o,c=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:d,type:m}=e;if(d){this.reject(d);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return c6;case"linkViaPopup":case"linkViaRedirect":return h6;case"reauthViaPopup":case"reauthViaRedirect":return u6;default:jn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const d6=new yc(2e3,1e4);async function D2(r,e,n){if(En(r.app))return Promise.reject(Gn(r,"operation-not-supported-in-this-environment"));const s=or(r);HS(r,e,Np);const o=I2(s,n);return new Gs(s,"signInViaPopup",e,o).executeNotNull()}class Gs extends N2{constructor(e,n,s,o,c){super(e,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=Dp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,d6.get())};e()}}Gs.currentPopupAction=null;/**
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
 */const f6="pendingRedirect",ch=new Map;class m6 extends N2{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ch.get(this.auth._key());if(!e){try{const s=await p6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ch.set(this.auth._key(),e)}return this.bypassAuthState||ch.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p6(r,e){const n=v6(e),s=y6(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function g6(r,e){ch.set(r._key(),e)}function y6(r){return $i(r._redirectPersistence)}function v6(r){return lh(f6,r.config.apiKey,r.name)}async function _6(r,e,n=!1){if(En(r.app))return Promise.reject(Wi(r));const s=or(r),o=I2(s,e),d=await new m6(s,o,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const E6=600*1e3;class b6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!O2(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Gn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=E6&&this.cachedEventUids.clear(),this.cachedEventUids.has(uv(e))}saveEventToCache(e){this.cachedEventUids.add(uv(e)),this.lastProcessedEventTime=Date.now()}}function uv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function O2({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function T6(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O2(r);default:return!1}}/**
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
 */async function w6(r,e={}){return ar(r,"GET","/v1/projects",e)}/**
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
 */const x6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,S6=/^https?/;async function A6(r){if(r.config.emulator)return;const{authorizedDomains:e}=await w6(r);for(const n of e)try{if(R6(n))return}catch{}jn(r,"unauthorized-domain")}function R6(r){const e=Hm(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!S6.test(n))return!1;if(x6.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const C6=new yc(3e4,6e4);function hv(){const r=mi().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function I6(r){return new Promise((e,n)=>{function s(){hv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hv(),n(Gn(r,"network-request-failed"))},timeout:C6.get()})}if(mi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(mi().gapi?.load)s();else{const o=_A("iframefcb");return mi()[o]=()=>{gapi.load?s():n(Gn(r,"network-request-failed"))},m2(`${vA()}?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw uh=null,e})}let uh=null;function N6(r){return uh=uh||I6(r),uh}/**
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
 */const D6=new yc(5e3,15e3),O6="__/auth/iframe",M6="emulator/auth/iframe",P6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k6(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Sp(e,M6):`https://${r.config.authDomain}/${O6}`,s={apiKey:e.apiKey,appName:r.name,v:Eo},o=V6.get(r.config.apiHost);o&&(s.eid=o);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${gc(s).slice(1)}`}async function j6(r){const e=await N6(r),n=mi().gapi;return Ee(n,r,"internal-error"),e.open({where:document.body,url:k6(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:P6,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const d=Gn(r,"network-request-failed"),m=mi().setTimeout(()=>{c(d)},D6.get());function g(){mi().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{c(d)})}))}/**
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
 */const L6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U6=500,z6=600,B6="_blank",q6="http://localhost";class dv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F6(r,e,n,s=U6,o=z6){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...L6,width:s.toString(),height:o.toString(),top:c,left:d},y=en().toLowerCase();n&&(m=o2(y)?B6:n),s2(y)&&(e=e||q6,g.scrollbars="yes");const b=Object.entries(g).reduce((S,[D,U])=>`${S}${D}=${U},`,"");if(cA(y)&&m!=="_self")return H6(e||"",m),new dv(null);const x=window.open(e||"",m,b);Ee(x,r,"popup-blocked");try{x.focus()}catch{}return new dv(x)}function H6(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const G6="__/auth/handler",Y6="emulator/auth/handler",Q6=encodeURIComponent("fac");async function fv(r,e,n,s,o,c){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Eo,eventId:o};if(e instanceof Np){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",Nx(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,x]of Object.entries({}))d[b]=x}if(e instanceof _c){const b=e.getScopes().filter(x=>x!=="");b.length>0&&(d.scopes=b.join(","))}r.tenantId&&(d.tid=r.tenantId);const m=d;for(const b of Object.keys(m))m[b]===void 0&&delete m[b];const g=await r._getAppCheckToken(),y=g?`#${Q6}=${encodeURIComponent(g)}`:"";return`${K6(r)}?${gc(m).slice(1)}${y}`}function K6({config:r}){return r.emulator?Sp(r,Y6):`https://${r.authDomain}/${G6}`}/**
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
 */const Nm="webStorageSupport";class $6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=x2,this._completeRedirectFn=_6,this._overrideRedirectResult=g6}async _openPopup(e,n,s,o){er(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await fv(e,n,s,Hm(),o);return F6(e,c,Dp())}async _openRedirect(e,n,s,o){await this._originValidation(e);const c=await fv(e,n,s,Hm(),o);return JA(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(er(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await j6(e),s=new b6(e);return n.register("authEvent",o=>(Ee(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nm,{type:Nm},o=>{const c=o?.[0]?.[Nm];c!==void 0&&n(!!c),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return d2()||a2()||Rp()}}const X6=$6;var mv="@firebase/auth",pv="1.11.0";/**
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
 */class W6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Z6(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J6(r){lo(new Xs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:m}=s.options;Ee(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:d,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f2(r)},y=new pA(s,o,c,g);return SA(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),lo(new Xs("auth-internal",e=>{const n=or(e.getProvider("auth").getImmediate());return(s=>new W6(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gr(mv,pv,Z6(r)),Gr(mv,pv,"esm2020")}/**
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
 */const e3=300,t3=F_("authIdTokenMaxAge")||e3;let gv=null;const n3=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>t3)return;const o=n?.token;gv!==o&&(gv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function i3(r=$_()){const e=Tp(r,"auth");if(e.isInitialized())return e.getImmediate();const n=xA(r,{popupRedirectResolver:X6,persistence:[l6,XA,x2]}),s=F_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=n3(c.toString());YA(n,d,()=>d(n.currentUser)),GA(n,m=>d(m))}}const o=B_("auth");return o&&AA(n,`http://${o}`),n}function r3(){return document.getElementsByTagName("head")?.[0]??document}gA({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const c=Gn("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",r3().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J6("Browser");var yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,M2;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,A){function R(){}R.prototype=A.prototype,V.D=A.prototype,V.prototype=new R,V.prototype.constructor=V,V.C=function(M,C,j){for(var N=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)N[rt-2]=arguments[rt];return A.prototype[C].apply(M,N)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,A,R){R||(R=0);var M=Array(16);if(typeof A=="string")for(var C=0;16>C;++C)M[C]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(C=0;16>C;++C)M[C]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=V.g[0],R=V.g[1],C=V.g[2];var j=V.g[3],N=A+(j^R&(C^j))+M[0]+3614090360&4294967295;A=R+(N<<7&4294967295|N>>>25),N=j+(C^A&(R^C))+M[1]+3905402710&4294967295,j=A+(N<<12&4294967295|N>>>20),N=C+(R^j&(A^R))+M[2]+606105819&4294967295,C=j+(N<<17&4294967295|N>>>15),N=R+(A^C&(j^A))+M[3]+3250441966&4294967295,R=C+(N<<22&4294967295|N>>>10),N=A+(j^R&(C^j))+M[4]+4118548399&4294967295,A=R+(N<<7&4294967295|N>>>25),N=j+(C^A&(R^C))+M[5]+1200080426&4294967295,j=A+(N<<12&4294967295|N>>>20),N=C+(R^j&(A^R))+M[6]+2821735955&4294967295,C=j+(N<<17&4294967295|N>>>15),N=R+(A^C&(j^A))+M[7]+4249261313&4294967295,R=C+(N<<22&4294967295|N>>>10),N=A+(j^R&(C^j))+M[8]+1770035416&4294967295,A=R+(N<<7&4294967295|N>>>25),N=j+(C^A&(R^C))+M[9]+2336552879&4294967295,j=A+(N<<12&4294967295|N>>>20),N=C+(R^j&(A^R))+M[10]+4294925233&4294967295,C=j+(N<<17&4294967295|N>>>15),N=R+(A^C&(j^A))+M[11]+2304563134&4294967295,R=C+(N<<22&4294967295|N>>>10),N=A+(j^R&(C^j))+M[12]+1804603682&4294967295,A=R+(N<<7&4294967295|N>>>25),N=j+(C^A&(R^C))+M[13]+4254626195&4294967295,j=A+(N<<12&4294967295|N>>>20),N=C+(R^j&(A^R))+M[14]+2792965006&4294967295,C=j+(N<<17&4294967295|N>>>15),N=R+(A^C&(j^A))+M[15]+1236535329&4294967295,R=C+(N<<22&4294967295|N>>>10),N=A+(C^j&(R^C))+M[1]+4129170786&4294967295,A=R+(N<<5&4294967295|N>>>27),N=j+(R^C&(A^R))+M[6]+3225465664&4294967295,j=A+(N<<9&4294967295|N>>>23),N=C+(A^R&(j^A))+M[11]+643717713&4294967295,C=j+(N<<14&4294967295|N>>>18),N=R+(j^A&(C^j))+M[0]+3921069994&4294967295,R=C+(N<<20&4294967295|N>>>12),N=A+(C^j&(R^C))+M[5]+3593408605&4294967295,A=R+(N<<5&4294967295|N>>>27),N=j+(R^C&(A^R))+M[10]+38016083&4294967295,j=A+(N<<9&4294967295|N>>>23),N=C+(A^R&(j^A))+M[15]+3634488961&4294967295,C=j+(N<<14&4294967295|N>>>18),N=R+(j^A&(C^j))+M[4]+3889429448&4294967295,R=C+(N<<20&4294967295|N>>>12),N=A+(C^j&(R^C))+M[9]+568446438&4294967295,A=R+(N<<5&4294967295|N>>>27),N=j+(R^C&(A^R))+M[14]+3275163606&4294967295,j=A+(N<<9&4294967295|N>>>23),N=C+(A^R&(j^A))+M[3]+4107603335&4294967295,C=j+(N<<14&4294967295|N>>>18),N=R+(j^A&(C^j))+M[8]+1163531501&4294967295,R=C+(N<<20&4294967295|N>>>12),N=A+(C^j&(R^C))+M[13]+2850285829&4294967295,A=R+(N<<5&4294967295|N>>>27),N=j+(R^C&(A^R))+M[2]+4243563512&4294967295,j=A+(N<<9&4294967295|N>>>23),N=C+(A^R&(j^A))+M[7]+1735328473&4294967295,C=j+(N<<14&4294967295|N>>>18),N=R+(j^A&(C^j))+M[12]+2368359562&4294967295,R=C+(N<<20&4294967295|N>>>12),N=A+(R^C^j)+M[5]+4294588738&4294967295,A=R+(N<<4&4294967295|N>>>28),N=j+(A^R^C)+M[8]+2272392833&4294967295,j=A+(N<<11&4294967295|N>>>21),N=C+(j^A^R)+M[11]+1839030562&4294967295,C=j+(N<<16&4294967295|N>>>16),N=R+(C^j^A)+M[14]+4259657740&4294967295,R=C+(N<<23&4294967295|N>>>9),N=A+(R^C^j)+M[1]+2763975236&4294967295,A=R+(N<<4&4294967295|N>>>28),N=j+(A^R^C)+M[4]+1272893353&4294967295,j=A+(N<<11&4294967295|N>>>21),N=C+(j^A^R)+M[7]+4139469664&4294967295,C=j+(N<<16&4294967295|N>>>16),N=R+(C^j^A)+M[10]+3200236656&4294967295,R=C+(N<<23&4294967295|N>>>9),N=A+(R^C^j)+M[13]+681279174&4294967295,A=R+(N<<4&4294967295|N>>>28),N=j+(A^R^C)+M[0]+3936430074&4294967295,j=A+(N<<11&4294967295|N>>>21),N=C+(j^A^R)+M[3]+3572445317&4294967295,C=j+(N<<16&4294967295|N>>>16),N=R+(C^j^A)+M[6]+76029189&4294967295,R=C+(N<<23&4294967295|N>>>9),N=A+(R^C^j)+M[9]+3654602809&4294967295,A=R+(N<<4&4294967295|N>>>28),N=j+(A^R^C)+M[12]+3873151461&4294967295,j=A+(N<<11&4294967295|N>>>21),N=C+(j^A^R)+M[15]+530742520&4294967295,C=j+(N<<16&4294967295|N>>>16),N=R+(C^j^A)+M[2]+3299628645&4294967295,R=C+(N<<23&4294967295|N>>>9),N=A+(C^(R|~j))+M[0]+4096336452&4294967295,A=R+(N<<6&4294967295|N>>>26),N=j+(R^(A|~C))+M[7]+1126891415&4294967295,j=A+(N<<10&4294967295|N>>>22),N=C+(A^(j|~R))+M[14]+2878612391&4294967295,C=j+(N<<15&4294967295|N>>>17),N=R+(j^(C|~A))+M[5]+4237533241&4294967295,R=C+(N<<21&4294967295|N>>>11),N=A+(C^(R|~j))+M[12]+1700485571&4294967295,A=R+(N<<6&4294967295|N>>>26),N=j+(R^(A|~C))+M[3]+2399980690&4294967295,j=A+(N<<10&4294967295|N>>>22),N=C+(A^(j|~R))+M[10]+4293915773&4294967295,C=j+(N<<15&4294967295|N>>>17),N=R+(j^(C|~A))+M[1]+2240044497&4294967295,R=C+(N<<21&4294967295|N>>>11),N=A+(C^(R|~j))+M[8]+1873313359&4294967295,A=R+(N<<6&4294967295|N>>>26),N=j+(R^(A|~C))+M[15]+4264355552&4294967295,j=A+(N<<10&4294967295|N>>>22),N=C+(A^(j|~R))+M[6]+2734768916&4294967295,C=j+(N<<15&4294967295|N>>>17),N=R+(j^(C|~A))+M[13]+1309151649&4294967295,R=C+(N<<21&4294967295|N>>>11),N=A+(C^(R|~j))+M[4]+4149444226&4294967295,A=R+(N<<6&4294967295|N>>>26),N=j+(R^(A|~C))+M[11]+3174756917&4294967295,j=A+(N<<10&4294967295|N>>>22),N=C+(A^(j|~R))+M[2]+718787259&4294967295,C=j+(N<<15&4294967295|N>>>17),N=R+(j^(C|~A))+M[9]+3951481745&4294967295,V.g[0]=V.g[0]+A&4294967295,V.g[1]=V.g[1]+(C+(N<<21&4294967295|N>>>11))&4294967295,V.g[2]=V.g[2]+C&4294967295,V.g[3]=V.g[3]+j&4294967295}s.prototype.u=function(V,A){A===void 0&&(A=V.length);for(var R=A-this.blockSize,M=this.B,C=this.h,j=0;j<A;){if(C==0)for(;j<=R;)o(this,V,j),j+=this.blockSize;if(typeof V=="string"){for(;j<A;)if(M[C++]=V.charCodeAt(j++),C==this.blockSize){o(this,M),C=0;break}}else for(;j<A;)if(M[C++]=V[j++],C==this.blockSize){o(this,M),C=0;break}}this.h=C,this.o+=A},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var A=1;A<V.length-8;++A)V[A]=0;var R=8*this.o;for(A=V.length-8;A<V.length;++A)V[A]=R&255,R/=256;for(this.u(V),V=Array(16),A=R=0;4>A;++A)for(var M=0;32>M;M+=8)V[R++]=this.g[A]>>>M&255;return V};function c(V,A){var R=m;return Object.prototype.hasOwnProperty.call(R,V)?R[V]:R[V]=A(V)}function d(V,A){this.h=A;for(var R=[],M=!0,C=V.length-1;0<=C;C--){var j=V[C]|0;M&&j==A||(R[C]=j,M=!1)}this.g=R}var m={};function g(V){return-128<=V&&128>V?c(V,function(A){return new d([A|0],0>A?-1:0)}):new d([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return x;if(0>V)return q(y(-V));for(var A=[],R=1,M=0;V>=R;M++)A[M]=V/R|0,R*=4294967296;return new d(A,0)}function b(V,A){if(V.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(V.charAt(0)=="-")return q(b(V.substring(1),A));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(A,8)),M=x,C=0;C<V.length;C+=8){var j=Math.min(8,V.length-C),N=parseInt(V.substring(C,C+j),A);8>j?(j=y(Math.pow(A,j)),M=M.j(j).add(y(N))):(M=M.j(R),M=M.add(y(N)))}return M}var x=g(0),S=g(1),D=g(16777216);r=d.prototype,r.m=function(){if(z(this))return-q(this).m();for(var V=0,A=1,R=0;R<this.g.length;R++){var M=this.i(R);V+=(0<=M?M:4294967296+M)*A,A*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(U(this))return"0";if(z(this))return"-"+q(this).toString(V);for(var A=y(Math.pow(V,6)),R=this,M="";;){var C=le(R,A).g;R=K(R,C.j(A));var j=((0<R.g.length?R.g[0]:R.h)>>>0).toString(V);if(R=C,U(R))return j+M;for(;6>j.length;)j="0"+j;M=j+M}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function U(V){if(V.h!=0)return!1;for(var A=0;A<V.g.length;A++)if(V.g[A]!=0)return!1;return!0}function z(V){return V.h==-1}r.l=function(V){return V=K(this,V),z(V)?-1:U(V)?0:1};function q(V){for(var A=V.g.length,R=[],M=0;M<A;M++)R[M]=~V.g[M];return new d(R,~V.h).add(S)}r.abs=function(){return z(this)?q(this):this},r.add=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],M=0,C=0;C<=A;C++){var j=M+(this.i(C)&65535)+(V.i(C)&65535),N=(j>>>16)+(this.i(C)>>>16)+(V.i(C)>>>16);M=N>>>16,j&=65535,N&=65535,R[C]=N<<16|j}return new d(R,R[R.length-1]&-2147483648?-1:0)};function K(V,A){return V.add(q(A))}r.j=function(V){if(U(this)||U(V))return x;if(z(this))return z(V)?q(this).j(q(V)):q(q(this).j(V));if(z(V))return q(this.j(q(V)));if(0>this.l(D)&&0>V.l(D))return y(this.m()*V.m());for(var A=this.g.length+V.g.length,R=[],M=0;M<2*A;M++)R[M]=0;for(M=0;M<this.g.length;M++)for(var C=0;C<V.g.length;C++){var j=this.i(M)>>>16,N=this.i(M)&65535,rt=V.i(C)>>>16,qe=V.i(C)&65535;R[2*M+2*C]+=N*qe,ie(R,2*M+2*C),R[2*M+2*C+1]+=j*qe,ie(R,2*M+2*C+1),R[2*M+2*C+1]+=N*rt,ie(R,2*M+2*C+1),R[2*M+2*C+2]+=j*rt,ie(R,2*M+2*C+2)}for(M=0;M<A;M++)R[M]=R[2*M+1]<<16|R[2*M];for(M=A;M<2*A;M++)R[M]=0;return new d(R,0)};function ie(V,A){for(;(V[A]&65535)!=V[A];)V[A+1]+=V[A]>>>16,V[A]&=65535,A++}function ne(V,A){this.g=V,this.h=A}function le(V,A){if(U(A))throw Error("division by zero");if(U(V))return new ne(x,x);if(z(V))return A=le(q(V),A),new ne(q(A.g),q(A.h));if(z(A))return A=le(V,q(A)),new ne(q(A.g),A.h);if(30<V.g.length){if(z(V)||z(A))throw Error("slowDivide_ only works with positive integers.");for(var R=S,M=A;0>=M.l(V);)R=se(R),M=se(M);var C=me(R,1),j=me(M,1);for(M=me(M,2),R=me(R,2);!U(M);){var N=j.add(M);0>=N.l(V)&&(C=C.add(R),j=N),M=me(M,1),R=me(R,1)}return A=K(V,C.j(A)),new ne(C,A)}for(C=x;0<=V.l(A);){for(R=Math.max(1,Math.floor(V.m()/A.m())),M=Math.ceil(Math.log(R)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),j=y(R),N=j.j(A);z(N)||0<N.l(V);)R-=M,j=y(R),N=j.j(A);U(j)&&(j=S),C=C.add(j),V=K(V,N)}return new ne(C,V)}r.A=function(V){return le(this,V).h},r.and=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],M=0;M<A;M++)R[M]=this.i(M)&V.i(M);return new d(R,this.h&V.h)},r.or=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],M=0;M<A;M++)R[M]=this.i(M)|V.i(M);return new d(R,this.h|V.h)},r.xor=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],M=0;M<A;M++)R[M]=this.i(M)^V.i(M);return new d(R,this.h^V.h)};function se(V){for(var A=V.g.length+1,R=[],M=0;M<A;M++)R[M]=V.i(M)<<1|V.i(M-1)>>>31;return new d(R,V.h)}function me(V,A){var R=A>>5;A%=32;for(var M=V.g.length-R,C=[],j=0;j<M;j++)C[j]=0<A?V.i(j+R)>>>A|V.i(j+R+1)<<32-A:V.i(j+R);return new d(C,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,M2=s,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=b,Yr=d}).apply(typeof yv<"u"?yv:typeof self<"u"?self:typeof window<"u"?window:{});var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var P2,zl,V2,hh,Qm,k2,j2,L2;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,v,_){return u==Array.prototype||u==Object.prototype||(u[v]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ju=="object"&&Ju];for(var v=0;v<u.length;++v){var _=u[v];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(u,v){if(v)e:{var _=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var B=u[w];if(!(B in _))break e;_=_[B]}u=u[u.length-1],w=_[u],v=v(w),v!=w&&v!=null&&e(_,u,{configurable:!0,writable:!0,value:v})}}function c(u,v){u instanceof String&&(u+="");var _=0,w=!1,B={next:function(){if(!w&&_<u.length){var Q=_++;return{value:v(Q,u[Q]),done:!1}}return w=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}o("Array.prototype.values",function(u){return u||function(){return c(this,function(v,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},m=this||self;function g(u){var v=typeof u;return v=v!="object"?v:u?Array.isArray(u)?"array":v:"null",v=="array"||v=="object"&&typeof u.length=="number"}function y(u){var v=typeof u;return v=="object"&&u!=null||v=="function"}function b(u,v,_){return u.call.apply(u.bind,arguments)}function x(u,v,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,w),u.apply(v,B)}}return function(){return u.apply(v,arguments)}}function S(u,v,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:x,S.apply(null,arguments)}function D(u,v){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function U(u,v){function _(){}_.prototype=v.prototype,u.aa=v.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,B,Q){for(var ae=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)ae[ke-2]=arguments[ke];return v.prototype[B].apply(w,ae)}}function z(u){const v=u.length;if(0<v){const _=Array(v);for(let w=0;w<v;w++)_[w]=u[w];return _}return[]}function q(u,v){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(g(w)){const B=u.length||0,Q=w.length||0;u.length=B+Q;for(let ae=0;ae<Q;ae++)u[B+ae]=w[ae]}else u.push(w)}}class K{constructor(v,_){this.i=v,this.j=_,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function ie(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=m.navigator;return u&&(u=u.userAgent)?u:""}function le(u){return le[" "](u),u}le[" "]=function(){};var se=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function me(u,v,_){for(const w in u)v.call(_,u[w],w,u)}function V(u,v){for(const _ in u)v.call(void 0,u[_],_,u)}function A(u){const v={};for(const _ in u)v[_]=u[_];return v}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(u,v){let _,w;for(let B=1;B<arguments.length;B++){w=arguments[B];for(_ in w)u[_]=w[_];for(let Q=0;Q<R.length;Q++)_=R[Q],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function C(u){var v=1;u=u.split(":");const _=[];for(;0<v&&u.length;)_.push(u.shift()),v--;return u.length&&_.push(u.join(":")),_}function j(u){m.setTimeout(()=>{throw u},0)}function N(){var u=Ve;let v=null;return u.g&&(v=u.g,u.g=u.g.next,u.g||(u.h=null),v.next=null),v}class rt{constructor(){this.h=this.g=null}add(v,_){const w=qe.get();w.set(v,_),this.h?this.h.next=w:this.g=w,this.h=w}}var qe=new K(()=>new $,u=>u.reset());class ${constructor(){this.next=this.g=this.h=null}set(v,_){this.h=v,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,fe=!1,Ve=new rt,O=()=>{const u=m.Promise.resolve(void 0);oe=()=>{u.then(te)}};var te=()=>{for(var u;u=N();){try{u.h.call(u.g)}catch(_){j(_)}var v=qe;v.j(u),100>v.h&&(v.h++,u.next=v.g,v.g=u)}fe=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(u,v){this.type=u,this.g=this.target=v,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var ye=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var u=!1,v=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};m.addEventListener("test",_,v),m.removeEventListener("test",_,v)}catch{}return u})();function Ce(u,v){if(re.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=v,v=u.relatedTarget){if(se){e:{try{le(v.nodeName);var B=!0;break e}catch{}B=!1}B||(v=null)}}else _=="mouseover"?v=u.fromElement:_=="mouseout"&&(v=u.toElement);this.relatedTarget=v,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:we[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}U(Ce,re);var we={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),tt=0;function $n(u,v,_,w,B){this.listener=u,this.proxy=null,this.src=v,this.type=_,this.capture=!!w,this.ha=B,this.key=++tt,this.da=this.fa=!1}function lr(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ti(u){this.src=u,this.g={},this.h=0}Ti.prototype.add=function(u,v,_,w,B){var Q=u.toString();u=this.g[Q],u||(u=this.g[Q]=[],this.h++);var ae=os(u,v,w,B);return-1<ae?(v=u[ae],_||(v.fa=!1)):(v=new $n(v,this.src,Q,!!w,B),v.fa=_,u.push(v)),v};function as(u,v){var _=v.type;if(_ in u.g){var w=u.g[_],B=Array.prototype.indexOf.call(w,v,void 0),Q;(Q=0<=B)&&Array.prototype.splice.call(w,B,1),Q&&(lr(v),u.g[_].length==0&&(delete u.g[_],u.h--))}}function os(u,v,_,w){for(var B=0;B<u.length;++B){var Q=u[B];if(!Q.da&&Q.listener==v&&Q.capture==!!_&&Q.ha==w)return B}return-1}var ls="closure_lm_"+(1e6*Math.random()|0),Ro={};function Rc(u,v,_,w,B){if(Array.isArray(v)){for(var Q=0;Q<v.length;Q++)Rc(u,v[Q],_,w,B);return null}return _=Cc(_),u&&u[Ot]?u.K(v,_,y(w)?!!w.capture:!1,B):wn(u,v,_,!1,w,B)}function wn(u,v,_,w,B,Q){if(!v)throw Error("Invalid event type");var ae=y(B)?!!B.capture:!!B,ke=oa(u);if(ke||(u[ls]=ke=new Ti(u)),_=ke.add(v,_,w,ae,Q),_.proxy)return _;if(w=pd(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)ye||(B=ae),B===void 0&&(B=!1),u.addEventListener(v.toString(),w,B);else if(u.attachEvent)u.attachEvent(cs(v.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function pd(){function u(_){return v.call(u.src,u.listener,_)}const v=gd;return u}function Co(u,v,_,w,B){if(Array.isArray(v))for(var Q=0;Q<v.length;Q++)Co(u,v[Q],_,w,B);else w=y(w)?!!w.capture:!!w,_=Cc(_),u&&u[Ot]?(u=u.i,v=String(v).toString(),v in u.g&&(Q=u.g[v],_=os(Q,_,w,B),-1<_&&(lr(Q[_]),Array.prototype.splice.call(Q,_,1),Q.length==0&&(delete u.g[v],u.h--)))):u&&(u=oa(u))&&(v=u.g[v.toString()],u=-1,v&&(u=os(v,_,w,B)),(_=-1<u?v[u]:null)&&aa(_))}function aa(u){if(typeof u!="number"&&u&&!u.da){var v=u.src;if(v&&v[Ot])as(v.i,u);else{var _=u.type,w=u.proxy;v.removeEventListener?v.removeEventListener(_,w,u.capture):v.detachEvent?v.detachEvent(cs(_),w):v.addListener&&v.removeListener&&v.removeListener(w),(_=oa(v))?(as(_,u),_.h==0&&(_.src=null,v[ls]=null)):lr(u)}}}function cs(u){return u in Ro?Ro[u]:Ro[u]="on"+u}function gd(u,v){if(u.da)u=!0;else{v=new Ce(v,this);var _=u.listener,w=u.ha||u.src;u.fa&&aa(u),u=_.call(w,v)}return u}function oa(u){return u=u[ls],u instanceof Ti?u:null}var Io="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cc(u){return typeof u=="function"?u:(u[Io]||(u[Io]=function(v){return u.handleEvent(v)}),u[Io])}function ut(){ce.call(this),this.i=new Ti(this),this.M=this,this.F=null}U(ut,ce),ut.prototype[Ot]=!0,ut.prototype.removeEventListener=function(u,v,_,w){Co(this,u,v,_,w)};function Ge(u,v){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=v.type||v,typeof v=="string")v=new re(v,u);else if(v instanceof re)v.target=v.target||u;else{var B=v;v=new re(w,u),M(v,B)}if(B=!0,_)for(var Q=_.length-1;0<=Q;Q--){var ae=v.g=_[Q];B=hn(ae,w,!0,v)&&B}if(ae=v.g=u,B=hn(ae,w,!0,v)&&B,B=hn(ae,w,!1,v)&&B,_)for(Q=0;Q<_.length;Q++)ae=v.g=_[Q],B=hn(ae,w,!1,v)&&B}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var u=this.i,v;for(v in u.g){for(var _=u.g[v],w=0;w<_.length;w++)lr(_[w]);delete u.g[v],u.h--}}this.F=null},ut.prototype.K=function(u,v,_,w){return this.i.add(String(u),v,!1,_,w)},ut.prototype.L=function(u,v,_,w){return this.i.add(String(u),v,!0,_,w)};function hn(u,v,_,w){if(v=u.i.g[String(v)],!v)return!0;v=v.concat();for(var B=!0,Q=0;Q<v.length;++Q){var ae=v[Q];if(ae&&!ae.da&&ae.capture==_){var ke=ae.listener,At=ae.ha||ae.src;ae.fa&&as(u.i,ae),B=ke.call(At,w)!==!1&&B}}return B&&!w.defaultPrevented}function Kt(u,v,_){if(typeof u=="function")_&&(u=S(u,_));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:m.setTimeout(u,v||0)}function Ic(u){u.g=Kt(()=>{u.g=null,u.i&&(u.i=!1,Ic(u))},u.l);const v=u.h;u.h=null,u.m.apply(null,v)}class yd extends ce{constructor(v,_){super(),this.m=v,this.l=_,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:Ic(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(u){ce.call(this),this.h=u,this.g={}}U(us,ce);var hs=[];function ds(u){me(u.g,function(v,_){this.g.hasOwnProperty(_)&&aa(v)},u),u.g={}}us.prototype.N=function(){us.aa.N.call(this),ds(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ln=m.JSON.stringify,la=m.JSON.parse,fs=class{stringify(u){return m.JSON.stringify(u,void 0)}parse(u){return m.JSON.parse(u,void 0)}};function No(){}No.prototype.h=null;function Do(u){return u.h||(u.h=u.i())}function Oo(){}var wi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xi(){re.call(this,"d")}U(xi,re);function Mo(){re.call(this,"c")}U(Mo,re);var Xn={},Po=null;function cr(){return Po=Po||new ut}Xn.La="serverreachability";function ca(u){re.call(this,Xn.La,u)}U(ca,re);function ur(u){const v=cr();Ge(v,new ca(v))}Xn.STAT_EVENT="statevent";function Nc(u,v){re.call(this,Xn.STAT_EVENT,u),this.stat=v}U(Nc,re);function st(u){const v=cr();Ge(v,new Nc(v,u))}Xn.Ma="timingevent";function St(u,v){re.call(this,Xn.Ma,u),this.size=v}U(St,re);function vt(u,v){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){u()},v)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function Vo(u,v,_,w,B,Q){u.info(function(){if(u.g)if(Q)for(var ae="",ke=Q.split("&"),At=0;At<ke.length;At++){var je=ke[At].split("=");if(1<je.length){var Pt=je[0];je=je[1];var Rt=Pt.split("_");ae=2<=Rt.length&&Rt[1]=="type"?ae+(Pt+"="+je+"&"):ae+(Pt+"=redacted&")}}else ae=null;else ae=Q;return"XMLHTTP REQ ("+w+") [attempt "+B+"]: "+v+`
`+_+`
`+ae})}function vd(u,v,_,w,B,Q,ae){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+B+"]: "+v+`
`+_+`
`+Q+" "+ae})}function hr(u,v,_,w){u.info(function(){return"XMLHTTP TEXT ("+v+"): "+ms(u,_)+(w?" "+w:"")})}function Dc(u,v){u.info(function(){return"TIMEOUT: "+v})}xn.prototype.info=function(){};function ms(u,v){if(!u.g)return v;if(!v)return null;try{var _=JSON.parse(v);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var B=w[1];if(Array.isArray(B)&&!(1>B.length)){var Q=B[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ae=1;ae<B.length;ae++)B[ae]=""}}}}return Ln(_)}catch{return v}}var dr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wn;function Zn(){}U(Zn,No),Zn.prototype.g=function(){return new XMLHttpRequest},Zn.prototype.i=function(){return{}},Wn=new Zn;function tn(u,v,_,w){this.j=u,this.i=v,this.l=_,this.R=w||1,this.U=new us(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mt}function mt(){this.i=null,this.g="",this.h=!1}var ko={},ua={};function Un(u,v,_){u.L=1,u.v=_s(dn(v)),u.m=_,u.P=!0,Ai(u,null)}function Ai(u,v){u.F=Date.now(),ps(u),u.A=dn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),qo(_.i,"t",w),u.C=0,_=u.j.J,u.h=new mt,u.g=Qc(u.j,_?v:null,!u.m),0<u.O&&(u.M=new yd(S(u.Y,u,u.g),u.O)),v=u.U,_=u.g,w=u.ca;var B="readystatechange";Array.isArray(B)||(B&&(hs[0]=B.toString()),B=hs);for(var Q=0;Q<B.length;Q++){var ae=Rc(_,B[Q],w||v.handleEvent,!1,v.h||v);if(!ae)break;v.g[ae.key]=ae}v=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,v)):(u.u="GET",u.g.ea(u.A,u.u,null,v)),ur(),Vo(u.i,u.u,u.A,u.l,u.R,u.m)}tn.prototype.ca=function(u){u=u.target;const v=this.M;v&&Cn(u)==3?v.j():this.Y(u)},tn.prototype.Y=function(u){try{if(u==this.g)e:{const Rt=Cn(this.g);var v=this.g.Ba();const Pi=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Uc(this.g)))){this.J||Rt!=4||v==7||(v==8||0>=Pi?ur(3):ur(2)),fr(this);var _=this.g.Z();this.X=_;t:if(Oc(this)){var w=Uc(this.g);u="";var B=w.length,Q=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),Jn(this);var ae="";break t}this.h.i=new m.TextDecoder}for(v=0;v<B;v++)this.h.h=!0,u+=this.h.i.decode(w[v],{stream:!(Q&&v==B-1)});w.length=0,this.h.g+=u,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=_==200,vd(this.i,this.u,this.A,this.l,this.R,Rt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,At=this.g;if((ke=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(ke)){var je=ke;break t}}je=null}if(_=je)hr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gs(this,_);else{this.o=!1,this.s=3,st(12),Ut(this),Jn(this);break e}}if(this.P){_=!0;let zt;for(;!this.J&&this.C<ae.length;)if(zt=Mc(this,ae),zt==ua){Rt==4&&(this.s=4,st(14),_=!1),hr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==ko){this.s=4,st(15),hr(this.i,this.l,ae,"[Invalid Chunk]"),_=!1;break}else hr(this.i,this.l,zt,null),gs(this,zt);if(Oc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||ae.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)hr(this.i,this.l,ae,"[Invalid Chunked Response]"),Ut(this),Jn(this);else if(0<ae.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),Rs(Pt),Pt.M=!0,st(11))}}else hr(this.i,this.l,ae,null),gs(this,ae);Rt==4&&Ut(this),this.o&&!this.J&&(Rt==4?Hc(this.j,this):(this.o=!1,ps(this)))}else wd(this.g),_==400&&0<ae.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Ut(this),Jn(this)}}}catch{}finally{}};function Oc(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Mc(u,v){var _=u.C,w=v.indexOf(`
`,_);return w==-1?ua:(_=Number(v.substring(_,w)),isNaN(_)?ko:(w+=1,w+_>v.length?ua:(v=v.slice(w,w+_),u.C=w+_,v)))}tn.prototype.cancel=function(){this.J=!0,Ut(this)};function ps(u){u.S=Date.now()+u.I,Pc(u,u.I)}function Pc(u,v){if(u.B!=null)throw Error("WatchDog timer not null");u.B=vt(S(u.ba,u),v)}function fr(u){u.B&&(m.clearTimeout(u.B),u.B=null)}tn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Dc(this.i,this.A),this.L!=2&&(ur(),st(17)),Ut(this),this.s=2,Jn(this)):Pc(this,this.S-u)};function Jn(u){u.j.G==0||u.J||Hc(u.j,u)}function Ut(u){fr(u);var v=u.M;v&&typeof v.ma=="function"&&v.ma(),u.M=null,ds(u.U),u.g&&(v=u.g,u.g=null,v.abort(),v.ma())}function gs(u,v){try{var _=u.j;if(_.G!=0&&(_.g==u||jo(_.h,u))){if(!u.K&&jo(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(v)}catch{w=null}if(Array.isArray(w)&&w.length==3){var B=w;if(B[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Ta(_),Ea(_);else break e;Qo(_),st(18)}}else _.za=B[1],0<_.za-_.T&&37500>B[2]&&_.F&&_.v==0&&!_.C&&(_.C=vt(S(_.Za,_),6e3));if(1>=da(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Mi(_,11)}else if((u.K||_.g==u)&&Ta(_),!ie(v))for(B=_.Da.g.parse(v),v=0;v<B.length;v++){let je=B[v];if(_.T=je[0],je=je[1],_.G==2)if(je[0]=="c"){_.K=je[1],_.ia=je[2];const Pt=je[3];Pt!=null&&(_.la=Pt,_.j.info("VER="+_.la));const Rt=je[4];Rt!=null&&(_.Aa=Rt,_.j.info("SVER="+_.Aa));const Pi=je[5];Pi!=null&&typeof Pi=="number"&&0<Pi&&(w=1.5*Pi,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const zt=u.g;if(zt){const ai=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var Q=w.h;Q.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(fa(Q,Q.h),Q.h=null))}if(w.D){const $o=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;$o&&(w.ya=$o,Ke(w.I,w.D,$o))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var ae=u;if(w.qa=Yc(w,w.J?w.ia:null,w.W),ae.K){nn(w.h,ae);var ke=ae,At=w.L;At&&(ke.I=At),ke.B&&(fr(ke),ps(ke)),w.g=ae}else qc(w);0<_.i.length&&ba(_)}else je[0]!="stop"&&je[0]!="close"||Mi(_,7);else _.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Mi(_,7):Go(_):je[0]!="noop"&&_.l&&_.l.ta(je),_.v=0)}}ur(4)}catch{}}var Vc=class{constructor(u,v){this.g=u,this.map=v}};function Ri(u){this.l=u||10,m.PerformanceNavigationTiming?(u=m.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ha(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function da(u){return u.h?1:u.g?u.g.size:0}function jo(u,v){return u.h?u.h==v:u.g?u.g.has(v):!1}function fa(u,v){u.g?u.g.add(v):u.h=v}function nn(u,v){u.h&&u.h==v?u.h=null:u.g&&u.g.has(v)&&u.g.delete(v)}Ri.prototype.cancel=function(){if(this.i=Lo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Lo(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let v=u.i;for(const _ of u.g.values())v=v.concat(_.D);return v}return z(u.i)}function _d(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var v=[],_=u.length,w=0;w<_;w++)v.push(u[w]);return v}v=[],_=0;for(w in u)v[_++]=u[w];return v}function ma(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var v=[];u=u.length;for(var _=0;_<u;_++)v.push(_);return v}v=[],_=0;for(const w in u)v[_++]=w;return v}}}function Uo(u,v){if(u.forEach&&typeof u.forEach=="function")u.forEach(v,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,v,void 0);else for(var _=ma(u),w=_d(u),B=w.length,Q=0;Q<B;Q++)v.call(void 0,w[Q],_&&_[Q],u)}var ys=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ed(u,v){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),B=null;if(0<=w){var Q=u[_].substring(0,w);B=u[_].substring(w+1)}else Q=u[_];v(Q,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function _t(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _t){this.h=u.h,vs(this,u.j),this.o=u.o,this.g=u.g,mr(this,u.s),this.l=u.l;var v=u.i,_=new Ii;_.i=v.i,v.g&&(_.g=new Map(v.g),_.h=v.h),Ci(this,_),this.m=u.m}else u&&(v=String(u).match(ys))?(this.h=!1,vs(this,v[1]||"",!0),this.o=Sn(v[2]||""),this.g=Sn(v[3]||"",!0),mr(this,v[4]),this.l=Sn(v[5]||"",!0),Ci(this,v[6]||"",!0),this.m=Sn(v[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}_t.prototype.toString=function(){var u=[],v=this.j;v&&u.push(Es(v,zo,!0),":");var _=this.g;return(_||v=="file")&&(u.push("//"),(v=this.o)&&u.push(Es(v,zo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Es(_,_.charAt(0)=="/"?bd:Bo,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Es(_,pa)),u.join("")};function dn(u){return new _t(u)}function vs(u,v,_){u.j=_?Sn(v,!0):v,u.j&&(u.j=u.j.replace(/:$/,""))}function mr(u,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);u.s=v}else u.s=null}function Ci(u,v,_){v instanceof Ii?(u.i=v,jc(u.i,u.h)):(_||(v=Es(v,Td)),u.i=new Ii(v,u.h))}function Ke(u,v,_){u.i.set(v,_)}function _s(u){return Ke(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Sn(u,v){return u?v?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Es(u,v,_){return typeof u=="string"?(u=encodeURI(u).replace(v,kc),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function kc(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var zo=/[#\/\?@]/g,Bo=/[#\?:]/g,bd=/[#\?]/g,Td=/[#\?@]/g,pa=/#/g;function Ii(u,v){this.h=this.g=null,this.i=u||null,this.j=!!v}function An(u){u.g||(u.g=new Map,u.h=0,u.i&&Ed(u.i,function(v,_){u.add(decodeURIComponent(v.replace(/\+/g," ")),_)}))}r=Ii.prototype,r.add=function(u,v){An(this),this.i=null,u=ei(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(v),this.h+=1,this};function Ni(u,v){An(u),v=ei(u,v),u.g.has(v)&&(u.i=null,u.h-=u.g.get(v).length,u.g.delete(v))}function Di(u,v){return An(u),v=ei(u,v),u.g.has(v)}r.forEach=function(u,v){An(this),this.g.forEach(function(_,w){_.forEach(function(B){u.call(v,B,w,this)},this)},this)},r.na=function(){An(this);const u=Array.from(this.g.values()),v=Array.from(this.g.keys()),_=[];for(let w=0;w<v.length;w++){const B=u[w];for(let Q=0;Q<B.length;Q++)_.push(v[w])}return _},r.V=function(u){An(this);let v=[];if(typeof u=="string")Di(this,u)&&(v=v.concat(this.g.get(ei(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)v=v.concat(u[_])}return v},r.set=function(u,v){return An(this),this.i=null,u=ei(this,u),Di(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[v]),this.h+=1,this},r.get=function(u,v){return u?(u=this.V(u),0<u.length?String(u[0]):v):v};function qo(u,v,_){Ni(u,v),0<_.length&&(u.i=null,u.g.set(ei(u,v),z(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],v=Array.from(this.g.keys());for(var _=0;_<v.length;_++){var w=v[_];const Q=encodeURIComponent(String(w)),ae=this.V(w);for(w=0;w<ae.length;w++){var B=Q;ae[w]!==""&&(B+="="+encodeURIComponent(String(ae[w]))),u.push(B)}}return this.i=u.join("&")};function ei(u,v){return v=String(v),u.j&&(v=v.toLowerCase()),v}function jc(u,v){v&&!u.j&&(An(u),u.i=null,u.g.forEach(function(_,w){var B=w.toLowerCase();w!=B&&(Ni(this,w),qo(this,B,_))},u)),u.j=v}function bs(u,v){const _=new xn;if(m.Image){const w=new Image;w.onload=D(Rn,_,"TestLoadImage: loaded",!0,v,w),w.onerror=D(Rn,_,"TestLoadImage: error",!1,v,w),w.onabort=D(Rn,_,"TestLoadImage: abort",!1,v,w),w.ontimeout=D(Rn,_,"TestLoadImage: timeout",!1,v,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else v(!1)}function zn(u,v){const _=new xn,w=new AbortController,B=setTimeout(()=>{w.abort(),Rn(_,"TestPingServer: timeout",!1,v)},1e4);fetch(u,{signal:w.signal}).then(Q=>{clearTimeout(B),Q.ok?Rn(_,"TestPingServer: ok",!0,v):Rn(_,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(B),Rn(_,"TestPingServer: error",!1,v)})}function Rn(u,v,_,w,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),w(_)}catch{}}function Ts(){this.g=new fs}function ti(u,v,_){const w=_||"";try{Uo(u,function(B,Q){let ae=B;y(B)&&(ae=Ln(B)),v.push(w+Q+"="+encodeURIComponent(ae))})}catch(B){throw v.push(w+"type="+encodeURIComponent("_badmap")),B}}function pr(u){this.l=u.Ub||null,this.j=u.eb||!1}U(pr,No),pr.prototype.g=function(){return new Oi(this.l,this.j)},pr.prototype.i=(function(u){return function(){return u}})({});function Oi(u,v){ut.call(this),this.D=u,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Oi,ut),r=Oi.prototype,r.open=function(u,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=v,this.readyState=1,ii(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(v.body=u),(this.D||m).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var v=u.value?u.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!u.done}))&&(this.response=this.responseText+=v)}u.done?ni(this):ii(this),this.readyState==3&&Fo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,ni(this))},r.Qa=function(u){this.g&&(this.response=u,ni(this))},r.ga=function(){this.g&&ni(this)};function ni(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ii(u)}r.setRequestHeader=function(u,v){this.u.append(u,v)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],v=this.h.entries();for(var _=v.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=v.next();return u.join(`\r
`)};function ii(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ho(u){let v="";return me(u,function(_,w){v+=w,v+=":",v+=_,v+=`\r
`}),v}function Mt(u,v,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Ho(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Ke(u,v,_))}function Fe(u){ut.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Fe,ut);var ga=/^https?$/i,ws=["POST","PUT"];r=Fe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,v,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);v=v?v.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wn.g(),this.v=this.o?Do(this.o):Do(Wn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(v,String(u),!0),this.B=!1}catch(Q){Lc(this,Q);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var B in w)_.set(B,w[B]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const Q of w.keys())_.set(Q,w.get(Q));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(Q=>Q.toLowerCase()=="content-type"),B=m.FormData&&u instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ws,v,void 0))||w||B||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ae]of _)this.g.setRequestHeader(Q,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xs(this),this.u=!0,this.g.send(u),this.u=!1}catch(Q){Lc(this,Q)}};function Lc(u,v){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=v,u.m=5,ya(u),ri(u)}function ya(u){u.A||(u.A=!0,Ge(u,"complete"),Ge(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ge(this,"complete"),Ge(this,"abort"),ri(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),Fe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?va(this):this.bb())},r.bb=function(){va(this)};function va(u){if(u.h&&typeof d<"u"&&(!u.v[1]||Cn(u)!=4||u.Z()!=2)){if(u.u&&Cn(u)==4)Kt(u.Ea,0,u);else if(Ge(u,"readystatechange"),Cn(u)==4){u.h=!1;try{const ae=u.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var _;if(!(_=v)){var w;if(w=ae===0){var B=String(u.D).match(ys)[1]||null;!B&&m.self&&m.self.location&&(B=m.self.location.protocol.slice(0,-1)),w=!ga.test(B?B.toLowerCase():"")}_=w}if(_)Ge(u,"complete"),Ge(u,"success");else{u.m=6;try{var Q=2<Cn(u)?u.g.statusText:""}catch{Q=""}u.l=Q+" ["+u.Z()+"]",ya(u)}}finally{ri(u)}}}}function ri(u,v){if(u.g){xs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,v||Ge(u,"ready");try{_.onreadystatechange=w}catch{}}}function xs(u){u.I&&(m.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Cn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var v=this.g.responseText;return u&&v.indexOf(u)==0&&(v=v.substring(u.length)),la(v)}};function Uc(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function wd(u){const v={};u=(u.g&&2<=Cn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(ie(u[w]))continue;var _=C(u[w]);const B=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const Q=v[B]||[];v[B]=Q,Q.push(_)}V(v,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(u,v,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||v}function _a(u){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,u),this.cb=Ss("retryDelaySeedMs",1e4,u),this.Wa=Ss("forwardChannelMaxRetries",2,u),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(u&&u.concurrentRequestLimit),this.Da=new Ts,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=_a.prototype,r.la=8,r.G=1,r.connect=function(u,v,_,w){st(0),this.W=u,this.H=v||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Yc(this,null,this.W),ba(this)};function Go(u){if(zc(u),u.G==3){var v=u.U++,_=dn(u.I);if(Ke(_,"SID",u.K),Ke(_,"RID",v),Ke(_,"TYPE","terminate"),As(u,_),v=new tn(u,u.j,v),v.L=2,v.v=_s(dn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(v.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=v.v,_=!0),_||(v.g=Qc(v.j,null),v.g.ea(v.v)),v.F=Date.now(),ps(v)}Gc(u)}function Ea(u){u.g&&(Rs(u),u.g.cancel(),u.g=null)}function zc(u){Ea(u),u.u&&(m.clearTimeout(u.u),u.u=null),Ta(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&m.clearTimeout(u.s),u.s=null)}function ba(u){if(!ha(u.h)&&!u.s){u.s=!0;var v=u.Ga;oe||O(),fe||(oe(),fe=!0),Ve.add(v,u),u.B=0}}function xd(u,v){return da(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=v.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=vt(S(u.Ga,u,v),Ko(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const B=new tn(this,this.j,u);let Q=this.o;if(this.S&&(Q?(Q=A(Q),M(Q,this.S)):Q=this.S),this.m!==null||this.O||(B.H=Q,Q=null),this.P)e:{for(var v=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(v+=w,4096<v){v=_;break e}if(v===4096||_===this.i.length-1){v=_+1;break e}}v=1e3}else v=1e3;v=Bc(this,B,v),_=dn(this.I),Ke(_,"RID",u),Ke(_,"CVER",22),this.D&&Ke(_,"X-HTTP-Session-Id",this.D),As(this,_),Q&&(this.O?v="headers="+encodeURIComponent(String(Ho(Q)))+"&"+v:this.m&&Mt(_,this.m,Q)),fa(this.h,B),this.Ua&&Ke(_,"TYPE","init"),this.P?(Ke(_,"$req",v),Ke(_,"SID","null"),B.T=!0,Un(B,_,null)):Un(B,_,v),this.G=2}}else this.G==3&&(u?Yo(this,u):this.i.length==0||ha(this.h)||Yo(this))};function Yo(u,v){var _;v?_=v.l:_=u.U++;const w=dn(u.I);Ke(w,"SID",u.K),Ke(w,"RID",_),Ke(w,"AID",u.T),As(u,w),u.m&&u.o&&Mt(w,u.m,u.o),_=new tn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),v&&(u.i=v.D.concat(u.i)),v=Bc(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),fa(u.h,_),Un(_,w,v)}function As(u,v){u.H&&me(u.H,function(_,w){Ke(v,w,_)}),u.l&&Uo({},function(_,w){Ke(v,w,_)})}function Bc(u,v,_){_=Math.min(u.i.length,_);var w=u.l?S(u.l.Na,u.l,u):null;e:{var B=u.i;let Q=-1;for(;;){const ae=["count="+_];Q==-1?0<_?(Q=B[0].g,ae.push("ofs="+Q)):Q=0:ae.push("ofs="+Q);let ke=!0;for(let At=0;At<_;At++){let je=B[At].g;const Pt=B[At].map;if(je-=Q,0>je)Q=Math.max(0,B[At].g-100),ke=!1;else try{ti(Pt,ae,"req"+je+"_")}catch{w&&w(Pt)}}if(ke){w=ae.join("&");break e}}}return u=u.i.splice(0,_),v.D=u,w}function qc(u){if(!u.g&&!u.u){u.Y=1;var v=u.Fa;oe||O(),fe||(oe(),fe=!0),Ve.add(v,u),u.v=0}}function Qo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=vt(S(u.Fa,u),Ko(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Fc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=vt(S(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Ea(this),Fc(this))};function Rs(u){u.A!=null&&(m.clearTimeout(u.A),u.A=null)}function Fc(u){u.g=new tn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var v=dn(u.qa);Ke(v,"RID","rpc"),Ke(v,"SID",u.K),Ke(v,"AID",u.T),Ke(v,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ke(v,"TO",u.ja),Ke(v,"TYPE","xmlhttp"),As(u,v),u.m&&u.o&&Mt(v,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=_s(dn(v)),_.m=null,_.P=!0,Ai(_,u)}r.Za=function(){this.C!=null&&(this.C=null,Ea(this),Qo(this),st(19))};function Ta(u){u.C!=null&&(m.clearTimeout(u.C),u.C=null)}function Hc(u,v){var _=null;if(u.g==v){Ta(u),Rs(u),u.g=null;var w=2}else if(jo(u.h,v))_=v.D,nn(u.h,v),w=1;else return;if(u.G!=0){if(v.o)if(w==1){_=v.m?v.m.length:0,v=Date.now()-v.F;var B=u.B;w=cr(),Ge(w,new St(w,_)),ba(u)}else qc(u);else if(B=v.s,B==3||B==0&&0<v.X||!(w==1&&xd(u,v)||w==2&&Qo(u)))switch(_&&0<_.length&&(v=u.h,v.i=v.i.concat(_)),B){case 1:Mi(u,5);break;case 4:Mi(u,10);break;case 3:Mi(u,6);break;default:Mi(u,2)}}}function Ko(u,v){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*v}function Mi(u,v){if(u.j.info("Error code "+v),v==2){var _=S(u.fb,u),w=u.Xa;const B=!w;w=new _t(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||vs(w,"https"),_s(w),B?bs(w.toString(),_):zn(w.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(v),Gc(u),zc(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Gc(u){if(u.G=0,u.ka=[],u.l){const v=Lo(u.h);(v.length!=0||u.i.length!=0)&&(q(u.ka,v),q(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function Yc(u,v,_){var w=_ instanceof _t?dn(_):new _t(_);if(w.g!="")v&&(w.g=v+"."+w.g),mr(w,w.s);else{var B=m.location;w=B.protocol,v=v?v+"."+B.hostname:B.hostname,B=+B.port;var Q=new _t(null);w&&vs(Q,w),v&&(Q.g=v),B&&mr(Q,B),_&&(Q.l=_),w=Q}return _=u.D,v=u.ya,_&&v&&Ke(w,_,v),Ke(w,"VER",u.la),As(u,w),w}function Qc(u,v,_){if(v&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=u.Ca&&!u.pa?new Fe(new pr({eb:_})):new Fe(u.pa),v.Ha(u.J),v}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kc(){}r=Kc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function wa(){}wa.prototype.g=function(u,v){return new rn(u,v)};function rn(u,v){ut.call(this),this.g=new _a(v),this.l=u,this.h=v&&v.messageUrlParams||null,u=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(u?u["X-WebChannel-Content-Type"]=v.messageContentType:u={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(u?u["X-WebChannel-Client-Profile"]=v.va:u={"X-WebChannel-Client-Profile":v.va}),this.g.S=u,(u=v&&v.Sb)&&!ie(u)&&(this.g.m=u),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!ie(v)&&(this.g.D=v,u=this.h,u!==null&&v in u&&(u=this.h,v in u&&delete u[v])),this.j=new si(this)}U(rn,ut),rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){Go(this.g)},rn.prototype.o=function(u){var v=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Ln(u),u=_);v.i.push(new Vc(v.Ya++,u)),v.G==3&&ba(v)},rn.prototype.N=function(){this.g.l=null,delete this.j,Go(this.g),delete this.g,rn.aa.N.call(this)};function $c(u){xi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var v=u.__sm__;if(v){e:{for(const _ in v){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,v=v!==null&&u in v?v[u]:void 0),this.data=v}else this.data=u}U($c,xi);function Xc(){Mo.call(this),this.status=1}U(Xc,Mo);function si(u){this.g=u}U(si,Kc),si.prototype.ua=function(){Ge(this.g,"a")},si.prototype.ta=function(u){Ge(this.g,new $c(u))},si.prototype.sa=function(u){Ge(this.g,new Xc)},si.prototype.ra=function(){Ge(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,L2=function(){return new wa},j2=function(){return cr()},k2=Xn,Qm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},dr.NO_ERROR=0,dr.TIMEOUT=8,dr.HTTP_ERROR=6,hh=dr,Si.COMPLETE="complete",V2=Si,Oo.EventType=wi,wi.OPEN="a",wi.CLOSE="b",wi.ERROR="c",wi.MESSAGE="d",ut.prototype.listen=ut.prototype.K,zl=Oo,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,P2=Fe}).apply(typeof Ju<"u"?Ju:typeof self<"u"?self:typeof window<"u"?window:{});const vv="@firebase/firestore",_v="4.9.0";/**
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
 */class Zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");/**
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
 */let To="12.0.0";/**
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
 */const Js=new Ep("@firebase/firestore");function Za(){return Js.logLevel}function he(r,...e){if(Js.logLevel<=Oe.DEBUG){const n=e.map(Mp);Js.debug(`Firestore (${To}): ${r}`,...n)}}function tr(r,...e){if(Js.logLevel<=Oe.ERROR){const n=e.map(Mp);Js.error(`Firestore (${To}): ${r}`,...n)}}function co(r,...e){if(Js.logLevel<=Oe.WARN){const n=e.map(Mp);Js.warn(`Firestore (${To}): ${r}`,...n)}}function Mp(r){if(typeof r=="string")return r;try{/**
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
 */function be(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,U2(r,s,n)}function U2(r,e,n){let s=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw tr(s),new Error(s)}function He(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||U2(e,o,s)}function Se(r,e){return r}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class z2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Zt.UNAUTHENTICATED)))}shutdown(){}}class a3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class o3{constructor(e){this.t=e,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let c=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Qr,e.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const g=c;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Qr)}}),0),d()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new z2(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Zt(e)}}class l3{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class c3{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new l3(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ev{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u3{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,En(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const s=c=>{c.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,he("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const o=c=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ev(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ev(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function h3(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Pp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=h3(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=e.charAt(o[c]%62))}return s}}function Me(r,e){return r<e?-1:r>e?1:0}function Km(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),c=e.charAt(s);if(o!==c)return Dm(o)===Dm(c)?Me(o,c):Dm(o)?1:-1}return Me(r.length,e.length)}const d3=55296,f3=57343;function Dm(r){const e=r.charCodeAt(0);return e>=d3&&e<=f3}function uo(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
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
 */const bv="__name__";class di{constructor(e,n,s){n===void 0?n=0:n>e.length&&be(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&be(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof di?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const c=di.compareSegments(e.get(o),n.get(o));if(c!==0)return c}return Me(e.length,n.length)}static compareSegments(e,n){const s=di.isNumericId(e),o=di.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?di.extractNumericId(e).compare(di.extractNumericId(n)):Km(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yr.fromString(e.substring(4,e.length-2))}}class it extends di{construct(e,n,s){return new it(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new it(n)}static emptyPath(){return new it([])}}const m3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends di{construct(e,n,s){return new Gt(e,n,s)}static isValidIdentifier(e){return m3.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bv}static keyField(){return new Gt([bv])}static fromServerFormat(e){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new ue(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let d=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ue(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ue(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(d=!d,o++):m!=="."||d?(s+=m,o++):(c(),o++)}if(c(),d)throw new ue(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gt(n)}static emptyPath(){return new Gt([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(it.fromString(e))}static fromName(e){return new ge(it.fromString(e).popFirst(5))}static empty(){return new ge(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return it.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new it(e.slice()))}}/**
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
 */function B2(r,e,n){if(!n)throw new ue(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function p3(r,e,n,s){if(e===!0&&s===!0)throw new ue(Z.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Tv(r){if(!ge.isDocumentKey(r))throw new ue(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function wv(r){if(ge.isDocumentKey(r))throw new ue(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function q2(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function $h(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":be(12329,{type:typeof r})}function Yn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ue(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$h(r);throw new ue(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
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
 */function xt(r,e){const n={typeString:r};return e&&(n.value=e),n}function bc(r,e){if(!q2(r))throw new ue(Z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const d=r[s];if(o&&typeof d!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&d!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new ue(Z.INVALID_ARGUMENT,n);return!0}/**
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
 */const xv=-62135596800,Sv=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Sv);return new Ze(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xv)throw new ue(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sv}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bc(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:xt("string",Ze._jsonSchemaVersion),seconds:xt("number"),nanoseconds:xt("number")};/**
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
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new Ze(0,0))}static max(){return new xe(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const tc=-1;function g3(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=xe.fromTimestamp(s===1e9?new Ze(n+1,0):new Ze(n,s));return new $r(o,ge.empty(),e)}function y3(r){return new $r(r.readTime,r.key,tc)}class $r{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new $r(xe.min(),ge.empty(),tc)}static max(){return new $r(xe.max(),ge.empty(),tc)}}function v3(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(r.documentKey,e.documentKey),n!==0?n:Me(r.largestBatchId,e.largestBatchId))}/**
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
 */const _3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class E3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function wo(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==_3)throw r;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ee(((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof ee?n:ee.resolve(n)}catch(n){return ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):ee.reject(n)}static resolve(e){return new ee(((n,s)=>{n(e)}))}static reject(e){return new ee(((n,s)=>{s(e)}))}static waitFor(e){return new ee(((n,s)=>{let o=0,c=0,d=!1;e.forEach((m=>{++o,m.next((()=>{++c,d&&c===o&&n()}),(g=>s(g)))})),d=!0,c===o&&n()}))}static or(e){let n=ee.resolve(!1);for(const s of e)n=n.next((o=>o?ee.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,c)=>{s.push(n.call(this,o,c))})),this.waitFor(s)}static mapArray(e,n){return new ee(((s,o)=>{const c=e.length,d=new Array(c);let m=0;for(let g=0;g<c;g++){const y=g;n(e[y]).next((b=>{d[y]=b,++m,m===c&&s(d)}),(b=>o(b)))}}))}static doWhile(e,n){return new ee(((s,o)=>{const c=()=>{e()===!0?n().next((()=>{c()}),o):s()};c()}))}}function b3(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Xh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xh.ce=-1;/**
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
 */const Vp=-1;function Wh(r){return r==null}function Nh(r){return r===0&&1/r==-1/0}function T3(r){return typeof r=="number"&&Number.isInteger(r)&&!Nh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const F2="";function w3(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=Av(e)),e=x3(r.get(n),e);return Av(e)}function x3(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":n+="";break;case F2:n+="";break;default:n+=c}}return n}function Av(r){return r+F2+""}/**
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
 */function Rv(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function rs(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function H2(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ct{constructor(e,n){this.comparator=e,this.root=n||Ht.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eh(this.root,e,this.comparator,!1)}getReverseIterator(){return new eh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eh(this.root,e,this.comparator,!0)}}class eh{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&o&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,n,s,o,c){this.key=e,this.value=n,this.color=s??Ht.RED,this.left=o??Ht.EMPTY,this.right=c??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,c){return new Ht(e??this.key,n??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const c=s(e,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(e,n,s),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Ht.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,n,s,o,c){return this}insert(e,n,s){return new Ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Nt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cv(this.data.getIterator())}getIteratorFrom(e){return new Cv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Nt(this.comparator);return n.data=e,n}}class Cv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bn{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new bn([])}unionWith(e){let n=new Nt(Gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new bn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class G2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new G2("Invalid base64 string: "+c):c}})(e);return new Qt(n)}static fromUint8Array(e){const n=(function(o){let c="";for(let d=0;d<o.length;++d)c+=String.fromCharCode(o[d]);return c})(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const S3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(r){if(He(!!r,39018),typeof r=="string"){let e=0;const n=S3.exec(r);if(He(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:yt(r.seconds),nanos:yt(r.nanos)}}function yt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Wr(r){return typeof r=="string"?Qt.fromBase64String(r):Qt.fromUint8Array(r)}/**
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
 */const Y2="server_timestamp",Q2="__type__",K2="__previous_value__",$2="__local_write_time__";function kp(r){return(r?.mapValue?.fields||{})[Q2]?.stringValue===Y2}function Zh(r){const e=r.mapValue.fields[K2];return kp(e)?Zh(e):e}function nc(r){const e=Xr(r.mapValue.fields[$2].timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class A3{constructor(e,n,s,o,c,d,m,g,y,b){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=b}}const Dh="(default)";class ic{constructor(e,n){this.projectId=e,this.database=n||Dh}static empty(){return new ic("","")}get isDefaultDatabase(){return this.database===Dh}isEqual(e){return e instanceof ic&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const X2="__type__",R3="__max__",th={mapValue:{}},W2="__vector__",Oh="value";function Zr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?kp(r)?4:I3(r)?9007199254740991:C3(r)?10:11:be(28295,{value:r})}function Ei(r,e){if(r===e)return!0;const n=Zr(r);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return nc(r).isEqual(nc(e));case 3:return(function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const d=Xr(o.timestampValue),m=Xr(c.timestampValue);return d.seconds===m.seconds&&d.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,c){return Wr(o.bytesValue).isEqual(Wr(c.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,c){return yt(o.geoPointValue.latitude)===yt(c.geoPointValue.latitude)&&yt(o.geoPointValue.longitude)===yt(c.geoPointValue.longitude)})(r,e);case 2:return(function(o,c){if("integerValue"in o&&"integerValue"in c)return yt(o.integerValue)===yt(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const d=yt(o.doubleValue),m=yt(c.doubleValue);return d===m?Nh(d)===Nh(m):isNaN(d)&&isNaN(m)}return!1})(r,e);case 9:return uo(r.arrayValue.values||[],e.arrayValue.values||[],Ei);case 10:case 11:return(function(o,c){const d=o.mapValue.fields||{},m=c.mapValue.fields||{};if(Rv(d)!==Rv(m))return!1;for(const g in d)if(d.hasOwnProperty(g)&&(m[g]===void 0||!Ei(d[g],m[g])))return!1;return!0})(r,e);default:return be(52216,{left:r})}}function rc(r,e){return(r.values||[]).find((n=>Ei(n,e)))!==void 0}function ho(r,e){if(r===e)return 0;const n=Zr(r),s=Zr(e);if(n!==s)return Me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(r.booleanValue,e.booleanValue);case 2:return(function(c,d){const m=yt(c.integerValue||c.doubleValue),g=yt(d.integerValue||d.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return Iv(r.timestampValue,e.timestampValue);case 4:return Iv(nc(r),nc(e));case 5:return Km(r.stringValue,e.stringValue);case 6:return(function(c,d){const m=Wr(c),g=Wr(d);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(c,d){const m=c.split("/"),g=d.split("/");for(let y=0;y<m.length&&y<g.length;y++){const b=Me(m[y],g[y]);if(b!==0)return b}return Me(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(c,d){const m=Me(yt(c.latitude),yt(d.latitude));return m!==0?m:Me(yt(c.longitude),yt(d.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Nv(r.arrayValue,e.arrayValue);case 10:return(function(c,d){const m=c.fields||{},g=d.fields||{},y=m[Oh]?.arrayValue,b=g[Oh]?.arrayValue,x=Me(y?.values?.length||0,b?.values?.length||0);return x!==0?x:Nv(y,b)})(r.mapValue,e.mapValue);case 11:return(function(c,d){if(c===th.mapValue&&d===th.mapValue)return 0;if(c===th.mapValue)return 1;if(d===th.mapValue)return-1;const m=c.fields||{},g=Object.keys(m),y=d.fields||{},b=Object.keys(y);g.sort(),b.sort();for(let x=0;x<g.length&&x<b.length;++x){const S=Km(g[x],b[x]);if(S!==0)return S;const D=ho(m[g[x]],y[b[x]]);if(D!==0)return D}return Me(g.length,b.length)})(r.mapValue,e.mapValue);default:throw be(23264,{he:n})}}function Iv(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Me(r,e);const n=Xr(r),s=Xr(e),o=Me(n.seconds,s.seconds);return o!==0?o:Me(n.nanos,s.nanos)}function Nv(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const c=ho(n[o],s[o]);if(c)return c}return Me(n.length,s.length)}function fo(r){return $m(r)}function $m(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=Xr(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return Wr(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return ge.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const c of n.values||[])o?o=!1:s+=",",s+=$m(c);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const d of s)c?c=!1:o+=",",o+=`${d}:${$m(n.fields[d])}`;return o+"}"})(r.mapValue):be(61005,{value:r})}function dh(r){switch(Zr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zh(r);return e?16+dh(e):16;case 5:return 2*r.stringValue.length;case 6:return Wr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,c)=>o+dh(c)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return rs(s.fields,((c,d)=>{o+=c.length+dh(d)})),o})(r.mapValue);default:throw be(13486,{value:r})}}function Dv(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Xm(r){return!!r&&"integerValue"in r}function jp(r){return!!r&&"arrayValue"in r}function Ov(r){return!!r&&"nullValue"in r}function Mv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function fh(r){return!!r&&"mapValue"in r}function C3(r){return(r?.mapValue?.fields||{})[X2]?.stringValue===W2}function Yl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return rs(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Yl(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yl(r.arrayValue.values[n]);return e}return{...r}}function I3(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===R3}/**
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
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!fh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yl(n)}setAll(e){let n=Gt.emptyPath(),s={},o=[];e.forEach(((d,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=m.popLast()}d?s[m.lastSegment()]=Yl(d):o.push(m.lastSegment())}));const c=this.getFieldsMap(n);this.applyChanges(c,s,o)}delete(e){const n=this.field(e.popLast());fh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ei(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];fh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){rs(n,((o,c)=>e[o]=c));for(const o of s)delete e[o]}clone(){return new un(Yl(this.value))}}function Z2(r){const e=[];return rs(r.fields,((n,s)=>{const o=new Gt([n]);if(fh(s)){const c=Z2(s.mapValue).fields;if(c.length===0)e.push(o);else for(const d of c)e.push(o.child(d))}else e.push(o)})),new bn(e)}/**
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
 */class Jt{constructor(e,n,s,o,c,d,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=c,this.data=d,this.documentState=m}static newInvalidDocument(e){return new Jt(e,0,xe.min(),xe.min(),xe.min(),un.empty(),0)}static newFoundDocument(e,n,s,o){return new Jt(e,1,n,xe.min(),s,o,0)}static newNoDocument(e,n){return new Jt(e,2,n,xe.min(),xe.min(),un.empty(),0)}static newUnknownDocument(e,n){return new Jt(e,3,n,xe.min(),xe.min(),un.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mh{constructor(e,n){this.position=e,this.inclusive=n}}function Pv(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const c=e[o],d=r.position[o];if(c.field.isKeyField()?s=ge.comparator(ge.fromName(d.referenceValue),n.key):s=ho(d,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vv(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Ei(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class sc{constructor(e,n="asc"){this.field=e,this.dir=n}}function N3(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class J2{}class wt extends J2{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new O3(e,n,s):n==="array-contains"?new V3(e,s):n==="in"?new k3(e,s):n==="not-in"?new j3(e,s):n==="array-contains-any"?new L3(e,s):new wt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new M3(e,s):new P3(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ho(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends J2{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Kn(e,n)}matches(e){return eE(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function eE(r){return r.op==="and"}function tE(r){return D3(r)&&eE(r)}function D3(r){for(const e of r.filters)if(e instanceof Kn)return!1;return!0}function Wm(r){if(r instanceof wt)return r.field.canonicalString()+r.op.toString()+fo(r.value);if(tE(r))return r.filters.map((e=>Wm(e))).join(",");{const e=r.filters.map((n=>Wm(n))).join(",");return`${r.op}(${e})`}}function nE(r,e){return r instanceof wt?(function(s,o){return o instanceof wt&&s.op===o.op&&s.field.isEqual(o.field)&&Ei(s.value,o.value)})(r,e):r instanceof Kn?(function(s,o){return o instanceof Kn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((c,d,m)=>c&&nE(d,o.filters[m])),!0):!1})(r,e):void be(19439)}function iE(r){return r instanceof wt?(function(n){return`${n.field.canonicalString()} ${n.op} ${fo(n.value)}`})(r):r instanceof Kn?(function(n){return n.op.toString()+" {"+n.getFilters().map(iE).join(" ,")+"}"})(r):"Filter"}class O3 extends wt{constructor(e,n,s){super(e,n,s),this.key=ge.fromName(s.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class M3 extends wt{constructor(e,n){super(e,"in",n),this.keys=rE("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class P3 extends wt{constructor(e,n){super(e,"not-in",n),this.keys=rE("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function rE(r,e){return(e.arrayValue?.values||[]).map((n=>ge.fromName(n.referenceValue)))}class V3 extends wt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jp(n)&&rc(n.arrayValue,this.value)}}class k3 extends wt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rc(this.value.arrayValue,n)}}class j3 extends wt{constructor(e,n){super(e,"not-in",n)}matches(e){if(rc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!rc(this.value.arrayValue,n)}}class L3 extends wt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jp(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>rc(this.value.arrayValue,s)))}}/**
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
 */class U3{constructor(e,n=null,s=[],o=[],c=null,d=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=d,this.endAt=m,this.Te=null}}function kv(r,e=null,n=[],s=[],o=null,c=null,d=null){return new U3(r,e,n,s,o,c,d)}function Lp(r){const e=Se(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Wm(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),Wh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>fo(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>fo(s))).join(",")),e.Te=n}return e.Te}function Up(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!N3(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!nE(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Vv(r.startAt,e.startAt)&&Vv(r.endAt,e.endAt)}function Zm(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class So{constructor(e,n=null,s=[],o=[],c=null,d="F",m=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=d,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function z3(r,e,n,s,o,c,d,m){return new So(r,e,n,s,o,c,d,m)}function Jh(r){return new So(r)}function jv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function sE(r){return r.collectionGroup!==null}function Ql(r){const e=Se(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let m=new Nt(Gt.comparator);return d.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(e).forEach((c=>{n.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new sc(c,s))})),n.has(Gt.keyField().canonicalString())||e.Ie.push(new sc(Gt.keyField(),s))}return e.Ie}function pi(r){const e=Se(r);return e.Ee||(e.Ee=B3(e,Ql(r))),e.Ee}function B3(r,e){if(r.limitType==="F")return kv(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const c=o.dir==="desc"?"asc":"desc";return new sc(o.field,c)}));const n=r.endAt?new Mh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Mh(r.startAt.position,r.startAt.inclusive):null;return kv(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Jm(r,e){const n=r.filters.concat([e]);return new So(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function ep(r,e,n){return new So(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function ed(r,e){return Up(pi(r),pi(e))&&r.limitType===e.limitType}function aE(r){return`${Lp(pi(r))}|lt:${r.limitType}`}function Ja(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>iE(o))).join(", ")}]`),Wh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>fo(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>fo(o))).join(",")),`Target(${s})`})(pi(r))}; limitType=${r.limitType})`}function td(r,e){return e.isFoundDocument()&&(function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ge.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(r,e)&&(function(s,o){for(const c of Ql(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(d,m,g){const y=Pv(d,m,g);return d.inclusive?y<=0:y<0})(s.startAt,Ql(s),o)||s.endAt&&!(function(d,m,g){const y=Pv(d,m,g);return d.inclusive?y>=0:y>0})(s.endAt,Ql(s),o))})(r,e)}function q3(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function oE(r){return(e,n)=>{let s=!1;for(const o of Ql(r)){const c=F3(o,e,n);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function F3(r,e,n){const s=r.field.isKeyField()?ge.comparator(e.key,n.key):(function(c,d,m){const g=d.data.field(c),y=m.data.field(c);return g!==null&&y!==null?ho(g,y):be(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return be(19790,{direction:r.dir})}}/**
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
 */class ia{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],e))return void(o[c]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,((n,s)=>{for(const[o,c]of s)e(o,c)}))}isEmpty(){return H2(this.inner)}size(){return this.innerSize}}/**
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
 */const H3=new ct(ge.comparator);function nr(){return H3}const lE=new ct(ge.comparator);function Bl(...r){let e=lE;for(const n of r)e=e.insert(n.key,n);return e}function cE(r){let e=lE;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Ys(){return Kl()}function uE(){return Kl()}function Kl(){return new ia((r=>r.toString()),((r,e)=>r.isEqual(e)))}const G3=new ct(ge.comparator),Y3=new Nt(ge.comparator);function Pe(...r){let e=Y3;for(const n of r)e=e.add(n);return e}const Q3=new Nt(Me);function K3(){return Q3}/**
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
 */function zp(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nh(e)?"-0":e}}function hE(r){return{integerValue:""+r}}function $3(r,e){return T3(e)?hE(e):zp(r,e)}/**
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
 */class nd{constructor(){this._=void 0}}function X3(r,e,n){return r instanceof ac?(function(o,c){const d={fields:{[Q2]:{stringValue:Y2},[$2]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&kp(c)&&(c=Zh(c)),c&&(d.fields[K2]=c),{mapValue:d}})(n,e):r instanceof oc?fE(r,e):r instanceof lc?mE(r,e):(function(o,c){const d=dE(o,c),m=Lv(d)+Lv(o.Ae);return Xm(d)&&Xm(o.Ae)?hE(m):zp(o.serializer,m)})(r,e)}function W3(r,e,n){return r instanceof oc?fE(r,e):r instanceof lc?mE(r,e):n}function dE(r,e){return r instanceof Ph?(function(s){return Xm(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class ac extends nd{}class oc extends nd{constructor(e){super(),this.elements=e}}function fE(r,e){const n=pE(e);for(const s of r.elements)n.some((o=>Ei(o,s)))||n.push(s);return{arrayValue:{values:n}}}class lc extends nd{constructor(e){super(),this.elements=e}}function mE(r,e){let n=pE(e);for(const s of r.elements)n=n.filter((o=>!Ei(o,s)));return{arrayValue:{values:n}}}class Ph extends nd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Lv(r){return yt(r.integerValue||r.doubleValue)}function pE(r){return jp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Z3{constructor(e,n){this.field=e,this.transform=n}}function J3(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof oc&&o instanceof oc||s instanceof lc&&o instanceof lc?uo(s.elements,o.elements,Ei):s instanceof Ph&&o instanceof Ph?Ei(s.Ae,o.Ae):s instanceof ac&&o instanceof ac})(r.transform,e.transform)}class eR{constructor(e,n){this.version=e,this.transformResults=n}}class Qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class id{}function gE(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new vE(r.key,Qn.none()):new Tc(r.key,r.data,Qn.none());{const n=r.data,s=un.empty();let o=new Nt(Gt.comparator);for(let c of e.fields)if(!o.has(c)){let d=n.field(c);d===null&&c.length>1&&(c=c.popLast(),d=n.field(c)),d===null?s.delete(c):s.set(c,d),o=o.add(c)}return new ss(r.key,s,new bn(o.toArray()),Qn.none())}}function tR(r,e,n){r instanceof Tc?(function(o,c,d){const m=o.value.clone(),g=zv(o.fieldTransforms,c,d.transformResults);m.setAll(g),c.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(r,e,n):r instanceof ss?(function(o,c,d){if(!mh(o.precondition,c))return void c.convertToUnknownDocument(d.version);const m=zv(o.fieldTransforms,c,d.transformResults),g=c.data;g.setAll(yE(o)),g.setAll(m),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()})(r,e,n):(function(o,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,n)}function $l(r,e,n,s){return r instanceof Tc?(function(c,d,m,g){if(!mh(c.precondition,d))return m;const y=c.value.clone(),b=Bv(c.fieldTransforms,g,d);return y.setAll(b),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof ss?(function(c,d,m,g){if(!mh(c.precondition,d))return m;const y=Bv(c.fieldTransforms,g,d),b=d.data;return b.setAll(yE(c)),b.setAll(y),d.convertToFoundDocument(d.version,b).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((x=>x.field)))})(r,e,n,s):(function(c,d,m){return mh(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):m})(r,e,n)}function nR(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),c=dE(s.transform,o||null);c!=null&&(n===null&&(n=un.empty()),n.set(s.field,c))}return n||null}function Uv(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&uo(s,o,((c,d)=>J3(c,d)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Tc extends id{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ss extends id{constructor(e,n,s,o,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function yE(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function zv(r,e,n){const s=new Map;He(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const c=r[o],d=c.transform,m=e.data.field(c.field);s.set(c.field,W3(d,m,n[o]))}return s}function Bv(r,e,n){const s=new Map;for(const o of r){const c=o.transform,d=n.data.field(o.field);s.set(o.field,X3(c,d,e))}return s}class vE extends id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iR extends id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rR{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(e.key)&&tR(c,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=$l(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=$l(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=uE();return this.mutations.forEach((o=>{const c=e.get(o.key),d=c.overlayedDocument;let m=this.applyToLocalView(d,c.mutatedFields);m=n.has(o.key)?null:m;const g=gE(d,m);g!==null&&s.set(o.key,g),d.isValidDocument()||d.convertToNoDocument(xe.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,((n,s)=>Uv(n,s)))&&uo(this.baseMutations,e.baseMutations,((n,s)=>Uv(n,s)))}}class Bp{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){He(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return G3})();const c=e.mutations;for(let d=0;d<c.length;d++)o=o.insert(c[d].key,s[d].version);return new Bp(e,n,s,o)}}/**
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
 */class sR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Tt,Ue;function oR(r){switch(r){case Z.OK:return be(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return be(15467,{code:r})}}function _E(r){if(r===void 0)return tr("GRPC error has no .code"),Z.UNKNOWN;switch(r){case Tt.OK:return Z.OK;case Tt.CANCELLED:return Z.CANCELLED;case Tt.UNKNOWN:return Z.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return Z.INTERNAL;case Tt.UNAVAILABLE:return Z.UNAVAILABLE;case Tt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Tt.NOT_FOUND:return Z.NOT_FOUND;case Tt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Tt.ABORTED:return Z.ABORTED;case Tt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Tt.DATA_LOSS:return Z.DATA_LOSS;default:return be(39323,{code:r})}}(Ue=Tt||(Tt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function lR(){return new TextEncoder}/**
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
 */const cR=new Yr([4294967295,4294967295],0);function qv(r){const e=lR().encode(r),n=new M2;return n.update(e),new Uint8Array(n.digest())}function Fv(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new Yr([n,s],0),new Yr([o,c],0)]}class qp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ql(`Invalid padding: ${n}`);if(s<0)throw new ql(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ql(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ql(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Yr.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(Yr.fromNumber(s)));return o.compare(cR)===1&&(o=new Yr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=qv(e),[s,o]=Fv(n);for(let c=0;c<this.hashCount;c++){const d=this.ye(s,o,c);if(!this.we(d))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),d=new qp(c,o,n);return s.forEach((m=>d.insert(m))),d}insert(e){if(this.ge===0)return;const n=qv(e),[s,o]=Fv(n);for(let c=0;c<this.hashCount;c++){const d=this.ye(s,o,c);this.Se(d)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ql extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rd{constructor(e,n,s,o,c){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,wc.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new rd(xe.min(),o,new ct(Me),nr(),Pe())}}class wc{constructor(e,n,s,o,c){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new wc(s,n,Pe(),Pe(),Pe())}}/**
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
 */class ph{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class EE{constructor(e,n){this.targetId=e,this.Ce=n}}class bE{constructor(e,n,s=Qt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Hv{constructor(){this.ve=0,this.Fe=Gv(),this.Me=Qt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),n=Pe(),s=Pe();return this.Fe.forEach(((o,c)=>{switch(c){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:be(38017,{changeType:c})}})),new wc(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=Gv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class uR{constructor(e){this.Ge=e,this.ze=new Map,this.je=nr(),this.Je=nh(),this.He=nh(),this.Ye=new ct(Me)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:be(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const c=o.target;if(Zm(c))if(s===0){const d=new ge(c.path);this.et(n,d,Jt.newNoDocument(d,xe.min()))}else He(s===1,20013,{expectedCount:s});else{const d=this._t(n);if(d!==s){const m=this.ut(e),g=m?this.ct(m,e,d):1;if(g!==0){this.it(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=n;let d,m;try{d=Wr(s).toUint8Array()}catch(g){if(g instanceof G2)return co("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new qp(d,o,c)}catch(g){return co(g instanceof ql?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((c=>{const d=this.Ge.ht(),m=`projects/${d.projectId}/databases/${d.database}/documents/${c.path.canonicalString()}`;e.mightContain(m)||(this.et(n,c,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((c,d)=>{const m=this.ot(d);if(m){if(c.current&&Zm(m.target)){const g=new ge(m.target.path);this.It(g).has(d)||this.Et(d,g)||this.et(d,g,Jt.newNoDocument(g,e))}c.Be&&(n.set(d,c.ke()),c.qe())}}));let s=Pe();this.He.forEach(((c,d)=>{let m=!0;d.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(c))})),this.je.forEach(((c,d)=>d.setReadTime(e)));const o=new rd(e,n,this.Ye,this.je,s);return this.je=nr(),this.Je=nh(),this.He=nh(),this.Ye=new ct(Me),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Hv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Nt(Me),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Nt(Me),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hv),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function nh(){return new ct(ge.comparator)}function Gv(){return new ct(ge.comparator)}const hR={asc:"ASCENDING",desc:"DESCENDING"},dR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fR={and:"AND",or:"OR"};class mR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tp(r,e){return r.useProto3Json||Wh(e)?e:{value:e}}function Vh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function pR(r,e){return Vh(r,e.toTimestamp())}function gi(r){return He(!!r,49232),xe.fromTimestamp((function(n){const s=Xr(n);return new Ze(s.seconds,s.nanos)})(r))}function Fp(r,e){return np(r,e).canonicalString()}function np(r,e){const n=(function(o){return new it(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function wE(r){const e=it.fromString(r);return He(CE(e),10190,{key:e.toString()}),e}function ip(r,e){return Fp(r.databaseId,e.path)}function Om(r,e){const n=wE(e);if(n.get(1)!==r.databaseId.projectId)throw new ue(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ue(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ge(SE(n))}function xE(r,e){return Fp(r.databaseId,e)}function gR(r){const e=wE(r);return e.length===4?it.emptyPath():SE(e)}function rp(r){return new it(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function SE(r){return He(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Yv(r,e,n){return{name:ip(r,e),fields:n.value.mapValue.fields}}function yR(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:be(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],c=(function(y,b){return y.useProto3Json?(He(b===void 0||typeof b=="string",58123),Qt.fromBase64String(b||"")):(He(b===void 0||b instanceof Buffer||b instanceof Uint8Array,16193),Qt.fromUint8Array(b||new Uint8Array))})(r,e.targetChange.resumeToken),d=e.targetChange.cause,m=d&&(function(y){const b=y.code===void 0?Z.UNKNOWN:_E(y.code);return new ue(b,y.message||"")})(d);n=new bE(s,o,c,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Om(r,s.document.name),c=gi(s.document.updateTime),d=s.document.createTime?gi(s.document.createTime):xe.min(),m=new un({mapValue:{fields:s.document.fields}}),g=Jt.newFoundDocument(o,c,d,m),y=s.targetIds||[],b=s.removedTargetIds||[];n=new ph(y,b,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Om(r,s.document),c=s.readTime?gi(s.readTime):xe.min(),d=Jt.newNoDocument(o,c),m=s.removedTargetIds||[];n=new ph([],m,d.key,d)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Om(r,s.document),c=s.removedTargetIds||[];n=new ph([],c,o,null)}else{if(!("filter"in e))return be(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,d=new aR(o,c),m=s.targetId;n=new EE(m,d)}}return n}function vR(r,e){let n;if(e instanceof Tc)n={update:Yv(r,e.key,e.value)};else if(e instanceof vE)n={delete:ip(r,e.key)};else if(e instanceof ss)n={update:Yv(r,e.key,e.data),updateMask:RR(e.fieldMask)};else{if(!(e instanceof iR))return be(16599,{Vt:e.type});n={verify:ip(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(c,d){const m=d.transform;if(m instanceof ac)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof oc)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof lc)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ph)return{fieldPath:d.field.canonicalString(),increment:m.Ae};throw be(20930,{transform:d.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(o,c){return c.updateTime!==void 0?{updateTime:pR(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:be(27497)})(r,e.precondition)),n}function _R(r,e){return r&&r.length>0?(He(e!==void 0,14353),r.map((n=>(function(o,c){let d=o.updateTime?gi(o.updateTime):gi(c);return d.isEqual(xe.min())&&(d=gi(c)),new eR(d,o.transformResults||[])})(n,e)))):[]}function ER(r,e){return{documents:[xE(r,e.path)]}}function bR(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=xE(r,o);const c=(function(y){if(y.length!==0)return RE(Kn.create(y,"and"))})(e.filters);c&&(n.structuredQuery.where=c);const d=(function(y){if(y.length!==0)return y.map((b=>(function(S){return{field:eo(S.field),direction:xR(S.dir)}})(b)))})(e.orderBy);d&&(n.structuredQuery.orderBy=d);const m=tp(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:o}}function TR(r){let e=gR(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){He(s===1,65062);const b=n.from[0];b.allDescendants?o=b.collectionId:e=e.child(b.collectionId)}let c=[];n.where&&(c=(function(x){const S=AE(x);return S instanceof Kn&&tE(S)?S.getFilters():[S]})(n.where));let d=[];n.orderBy&&(d=(function(x){return x.map((S=>(function(U){return new sc(to(U.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(S)))})(n.orderBy));let m=null;n.limit&&(m=(function(x){let S;return S=typeof x=="object"?x.value:x,Wh(S)?null:S})(n.limit));let g=null;n.startAt&&(g=(function(x){const S=!!x.before,D=x.values||[];return new Mh(D,S)})(n.startAt));let y=null;return n.endAt&&(y=(function(x){const S=!x.before,D=x.values||[];return new Mh(D,S)})(n.endAt)),z3(e,o,d,c,m,"F",g,y)}function wR(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function AE(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=to(n.unaryFilter.field);return wt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=to(n.unaryFilter.field);return wt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=to(n.unaryFilter.field);return wt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=to(n.unaryFilter.field);return wt.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}})(r):r.fieldFilter!==void 0?(function(n){return wt.create(to(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return Kn.create(n.compositeFilter.filters.map((s=>AE(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return be(1026)}})(n.compositeFilter.op))})(r):be(30097,{filter:r})}function xR(r){return hR[r]}function SR(r){return dR[r]}function AR(r){return fR[r]}function eo(r){return{fieldPath:r.canonicalString()}}function to(r){return Gt.fromServerFormat(r.fieldPath)}function RE(r){return r instanceof wt?(function(n){if(n.op==="=="){if(Mv(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NAN"}};if(Ov(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mv(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NAN"}};if(Ov(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(n.field),op:SR(n.op),value:n.value}}})(r):r instanceof Kn?(function(n){const s=n.getFilters().map((o=>RE(o)));return s.length===1?s[0]:{compositeFilter:{op:AR(n.op),filters:s}}})(r):be(54877,{filter:r})}function RR(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function CE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class qr{constructor(e,n,s,o,c=xe.min(),d=xe.min(),m=Qt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class CR{constructor(e){this.yt=e}}function IR(r){const e=TR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ep(e,e.limit,"L"):e}/**
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
 */class NR{constructor(){this.Cn=new DR}addToCollectionParentIndex(e,n){return this.Cn.add(n),ee.resolve()}getCollectionParents(e,n){return ee.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ee.resolve()}deleteFieldIndex(e,n){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,n){return ee.resolve()}getDocumentsMatchingTarget(e,n){return ee.resolve(null)}getIndexType(e,n){return ee.resolve(0)}getFieldIndexes(e,n){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,n){return ee.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return ee.resolve($r.min())}updateCollectionGroup(e,n,s){return ee.resolve()}updateIndexEntries(e,n){return ee.resolve()}}class DR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Nt(it.comparator),c=!o.has(s);return this.index[n]=o.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Nt(it.comparator)).toArray()}}/**
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
 */const Qv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},IE=41943040;class cn{static withCacheSize(e){return new cn(e,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */cn.DEFAULT_COLLECTION_PERCENTILE=10,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,cn.DEFAULT=new cn(IE,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),cn.DISABLED=new cn(-1,0,0);/**
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
 */class mo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new mo(0)}static cr(){return new mo(-1)}}/**
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
 */const Kv="LruGarbageCollector",OR=1048576;function $v([r,e],[n,s]){const o=Me(r,n);return o===0?Me(e,s):o}class MR{constructor(e){this.Ir=e,this.buffer=new Nt($v),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();$v(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class PR{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(Kv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){xo(n)?he(Kv,"Ignoring IndexedDB error during garbage collection: ",n):await wo(n)}await this.Vr(3e5)}))}}class VR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return ee.resolve(Xh.ce);const s=new MR(n);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Qv)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qv):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,c,d,m,g,y;const b=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,d=Date.now(),this.nthSequenceNumber(e,o)))).next((x=>(s=x,m=Date.now(),this.removeTargets(e,s,n)))).next((x=>(c=x,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((x=>(y=Date.now(),Za()<=Oe.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-b}ms
	Determined least recently used ${o} in `+(m-d)+`ms
	Removed ${c} targets in `+(g-m)+`ms
	Removed ${x} documents in `+(y-g)+`ms
Total Duration: ${y-b}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:x}))))}}function kR(r,e){return new VR(r,e)}/**
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
 */class jR{constructor(){this.changes=new ia((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ee.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class LR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class UR{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&$l(s.mutation,o,bn.empty(),Ze.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Pe()){const o=Ys();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((c=>{let d=Bl();return c.forEach(((m,g)=>{d=d.insert(m,g.overlayedDocument)})),d}))))}getOverlayedDocuments(e,n){const s=Ys();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Pe())))}populateOverlays(e,n,s){const o=[];return s.forEach((c=>{n.has(c)||o.push(c)})),this.documentOverlayCache.getOverlays(e,o).next((c=>{c.forEach(((d,m)=>{n.set(d,m)}))}))}computeViews(e,n,s,o){let c=nr();const d=Kl(),m=(function(){return Kl()})();return n.forEach(((g,y)=>{const b=s.get(y.key);o.has(y.key)&&(b===void 0||b.mutation instanceof ss)?c=c.insert(y.key,y):b!==void 0?(d.set(y.key,b.mutation.getFieldMask()),$l(b.mutation,y,b.mutation.getFieldMask(),Ze.now())):d.set(y.key,bn.empty())})),this.recalculateAndSaveOverlays(e,c).next((g=>(g.forEach(((y,b)=>d.set(y,b))),n.forEach(((y,b)=>m.set(y,new LR(b,d.get(y)??null)))),m)))}recalculateAndSaveOverlays(e,n){const s=Kl();let o=new ct(((d,m)=>d-m)),c=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((d=>{for(const m of d)m.keys().forEach((g=>{const y=n.get(g);if(y===null)return;let b=s.get(g)||bn.empty();b=m.applyToLocalView(y,b),s.set(g,b);const x=(o.get(m.batchId)||Pe()).add(g);o=o.insert(m.batchId,x)}))})).next((()=>{const d=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,b=g.value,x=uE();b.forEach((S=>{if(!c.has(S)){const D=gE(n.get(S),s.get(S));D!==null&&x.set(S,D),c=c.add(S)}})),d.push(this.documentOverlayCache.saveOverlays(e,y,x))}return ee.waitFor(d)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return(function(d){return ge.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((c=>{const d=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-c.size):ee.resolve(Ys());let m=tc,g=c;return d.next((y=>ee.forEach(y,((b,x)=>(m<x.largestBatchId&&(m=x.largestBatchId),c.get(b)?ee.resolve():this.remoteDocumentCache.getEntry(e,b).next((S=>{g=g.insert(b,S)}))))).next((()=>this.populateOverlays(e,y,c))).next((()=>this.computeViews(e,g,y,Pe()))).next((b=>({batchId:m,changes:cE(b)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next((s=>{let o=Bl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const c=n.collectionGroup;let d=Bl();return this.indexManager.getCollectionParents(e,c).next((m=>ee.forEach(m,(g=>{const y=(function(x,S){return new So(S,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(n,g.child(c));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((b=>{b.forEach(((x,S)=>{d=d.insert(x,S)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,o)))).next((d=>{c.forEach(((g,y)=>{const b=y.getKey();d.get(b)===null&&(d=d.insert(b,Jt.newInvalidDocument(b)))}));let m=Bl();return d.forEach(((g,y)=>{const b=c.get(g);b!==void 0&&$l(b.mutation,y,bn.empty(),Ze.now()),td(n,y)&&(m=m.insert(g,y))})),m}))}}/**
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
 */class zR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ee.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:gi(o.createTime)}})(n)),ee.resolve()}getNamedQuery(e,n){return ee.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:IR(o.bundledQuery),readTime:gi(o.readTime)}})(n)),ee.resolve()}}/**
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
 */class BR{constructor(){this.overlays=new ct(ge.comparator),this.qr=new Map}getOverlay(e,n){return ee.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ys();return ee.forEach(n,(o=>this.getOverlay(e,o).next((c=>{c!==null&&s.set(o,c)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,c)=>{this.St(e,n,c)})),ee.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,n,s){const o=Ys(),c=n.length+1,d=new ge(n.child("")),m=this.overlays.getIteratorFrom(d);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&g.largestBatchId>s&&o.set(g.getKey(),g)}return ee.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let c=new ct(((y,b)=>y-b));const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let b=c.get(y.largestBatchId);b===null&&(b=Ys(),c=c.insert(y.largestBatchId,b)),b.set(y.getKey(),y)}}const m=Ys(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,b)=>m.set(y,b))),!(m.size()>=o)););return ee.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const d=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new sR(n,s));let c=this.qr.get(n);c===void 0&&(c=Pe(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
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
 */class qR{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ee.resolve()}}/**
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
 */class Hp{constructor(){this.Qr=new Nt(Lt.$r),this.Ur=new Nt(Lt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Lt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Lt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new ge(new it([])),s=new Lt(n,e),o=new Lt(n,e+1),c=[];return this.Ur.forEachInRange([s,o],(d=>{this.Gr(d),c.push(d.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ge(new it([])),s=new Lt(n,e),o=new Lt(n,e+1);let c=Pe();return this.Ur.forEachInRange([s,o],(d=>{c=c.add(d.key)})),c}containsKey(e){const n=new Lt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Lt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ge.comparator(e.key,n.key)||Me(e.Yr,n.Yr)}static Kr(e,n){return Me(e.Yr,n.Yr)||ge.comparator(e.key,n.key)}}/**
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
 */class FR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Nt(Lt.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new rR(c,n,s,o);this.mutationQueue.push(d);for(const m of o)this.Zr=this.Zr.add(new Lt(m.key,c)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return ee.resolve(d)}lookupMutationBatch(e,n){return ee.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),c=o<0?0:o;return ee.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?Vp:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Lt(n,0),o=new Lt(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,o],(d=>{const m=this.Xr(d.Yr);c.push(m)})),ee.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Nt(Me);return n.forEach((o=>{const c=new Lt(o,0),d=new Lt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,d],(m=>{s=s.add(m.Yr)}))})),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let c=s;ge.isDocumentKey(c)||(c=c.child(""));const d=new Lt(new ge(c),0);let m=new Nt(Me);return this.Zr.forEachWhile((g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(g.Yr)),!0)}),d),ee.resolve(this.ti(m))}ti(e){const n=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){He(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(n.mutations,(o=>{const c=new Lt(o.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Lt(n,0),o=this.Zr.firstAfterOrEqual(s);return ee.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HR{constructor(e){this.ri=e,this.docs=(function(){return new ct(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),c=o?o.size:0,d=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ee.resolve(s?s.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(e,n){let s=nr();return n.forEach((o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():Jt.newInvalidDocument(o))})),ee.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let c=nr();const d=n.path,m=new ge(d.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:b}}=g.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||v3(y3(b),s)<=0||(o.has(b.key)||td(n,b))&&(c=c.insert(b.key,b.mutableCopy()))}return ee.resolve(c)}getAllFromCollectionGroup(e,n,s,o){be(9500)}ii(e,n){return ee.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new GR(this)}getSize(e){return ee.resolve(this.size)}}class GR extends jR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),ee.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class YR{constructor(e){this.persistence=e,this.si=new ia((n=>Lp(n)),Up),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.oi=0,this._i=new Hp,this.targetCount=0,this.ai=mo.ur()}forEachTarget(e,n){return this.si.forEach(((s,o)=>n(o))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),ee.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new mo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ee.resolve()}updateTargetData(e,n){return this.Pr(n),ee.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,n,s){let o=0;const c=[];return this.si.forEach(((d,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(d),c.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),ee.waitFor(c).next((()=>o))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return ee.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),ee.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach((d=>{c.push(o.markPotentiallyOrphaned(e,d))})),ee.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ee.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return ee.resolve(s)}containsKey(e,n){return ee.resolve(this._i.containsKey(n))}}/**
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
 */class NE{constructor(e,n){this.ui={},this.overlays={},this.ci=new Xh(0),this.li=!1,this.li=!0,this.hi=new qR,this.referenceDelegate=e(this),this.Pi=new YR(this),this.indexManager=new NR,this.remoteDocumentCache=(function(o){return new HR(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new CR(n),this.Ii=new zR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new FR(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){he("MemoryPersistence","Starting transaction:",e);const o=new QR(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((c=>this.referenceDelegate.di(o).next((()=>c)))).toPromise().then((c=>(o.raiseOnCommittedEvent(),c)))}Ai(e,n){return ee.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class QR extends E3{constructor(e){super(),this.currentSequenceNumber=e}}class Gp{constructor(e){this.persistence=e,this.Ri=new Hp,this.Vi=null}static mi(e){return new Gp(e)}get fi(){if(this.Vi)return this.Vi;throw be(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ee.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((c=>this.fi.add(c.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,(s=>{const o=ge.fromPath(s);return this.gi(e,o).next((c=>{c||n.removeEntry(o,xe.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return ee.or([()=>ee.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class kh{constructor(e,n){this.persistence=e,this.pi=new ia((s=>w3(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=kR(this,n)}static mi(e,n){return new kh(e,n)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return ee.forEach(this.pi,((s,o)=>this.br(e,s,o).next((c=>c?ee.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.ii(e,(d=>this.br(e,d,n).next((m=>{m||(s++,c.removeEntry(d,xe.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ee.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ee.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=dh(e.data.value)),n}br(e,n,s){return ee.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return ee.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Yp{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Pe(),o=Pe();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new Yp(e,n.fromCache,s,o)}}/**
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
 */class KR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $R{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return xx()?8:b3(en())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const c={result:null};return this.ys(e,n).next((d=>{c.result=d})).next((()=>{if(!c.result)return this.ws(e,n,o,s).next((d=>{c.result=d}))})).next((()=>{if(c.result)return;const d=new KR;return this.Ss(e,n,d).next((m=>{if(c.result=m,this.Vs)return this.bs(e,n,d,m.size)}))})).next((()=>c.result))}bs(e,n,s,o){return s.documentReadCount<this.fs?(Za()<=Oe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Ja(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(Za()<=Oe.DEBUG&&he("QueryEngine","Query:",Ja(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Za()<=Oe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Ja(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pi(n))):ee.resolve())}ys(e,n){if(jv(n))return ee.resolve(null);let s=pi(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=ep(n,null,"F"),s=pi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const d=Pe(...c);return this.ps.getDocuments(e,d).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const y=this.Ds(n,m);return this.Cs(n,y,d,g.readTime)?this.ys(e,ep(n,null,"F")):this.vs(e,y,n,g)}))))})))))}ws(e,n,s,o){return jv(n)||o.isEqual(xe.min())?ee.resolve(null):this.ps.getDocuments(e,s).next((c=>{const d=this.Ds(n,c);return this.Cs(n,d,s,o)?ee.resolve(null):(Za()<=Oe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ja(n)),this.vs(e,d,n,g3(o,tc)).next((m=>m)))}))}Ds(e,n){let s=new Nt(oE(e));return n.forEach(((o,c)=>{td(e,c)&&(s=s.add(c))})),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(e,n,s){return Za()<=Oe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Ja(n)),this.ps.getDocumentsMatchingQuery(e,n,$r.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((c=>(n.forEach((d=>{c=c.insert(d.key,d)})),c)))}}/**
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
 */const Qp="LocalStore",XR=3e8;class WR{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new ct(Me),this.xs=new ia((c=>Lp(c)),Up),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function ZR(r,e,n,s){return new WR(r,e,n,s)}async function DE(r,e){const n=Se(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((c=>(o=c,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((c=>{const d=[],m=[];let g=Pe();for(const y of o){d.push(y.batchId);for(const b of y.mutations)g=g.add(b.key)}for(const y of c){m.push(y.batchId);for(const b of y.mutations)g=g.add(b.key)}return n.localDocuments.getDocuments(s,g).next((y=>({Ls:y,removedBatchIds:d,addedBatchIds:m})))}))}))}function JR(r,e){const n=Se(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,g,y,b){const x=y.batch,S=x.keys();let D=ee.resolve();return S.forEach((U=>{D=D.next((()=>b.getEntry(g,U))).next((z=>{const q=y.docVersions.get(U);He(q!==null,48541),z.version.compareTo(q)<0&&(x.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),b.addEntry(z)))}))})),D.next((()=>m.mutationQueue.removeMutationBatch(g,x)))})(n,s,e,c).next((()=>c.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Pe();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(g=g.add(m.batch.mutations[y].key));return g})(e)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function OE(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function e5(r,e){const n=Se(r),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const d=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];e.targetChanges.forEach(((b,x)=>{const S=o.get(x);if(!S)return;m.push(n.Pi.removeMatchingKeys(c,b.removedDocuments,x).next((()=>n.Pi.addMatchingKeys(c,b.addedDocuments,x))));let D=S.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(x)!==null?D=D.withResumeToken(Qt.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):b.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(b.resumeToken,s)),o=o.insert(x,D),(function(z,q,K){return z.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=XR?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(S,D,b)&&m.push(n.Pi.updateTargetData(c,D))}));let g=nr(),y=Pe();if(e.documentUpdates.forEach((b=>{e.resolvedLimboDocuments.has(b)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(c,b))})),m.push(t5(c,d,e.documentUpdates).next((b=>{g=b.ks,y=b.qs}))),!s.isEqual(xe.min())){const b=n.Pi.getLastRemoteSnapshotVersion(c).next((x=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s)));m.push(b)}return ee.waitFor(m).next((()=>d.apply(c))).next((()=>n.localDocuments.getLocalViewOfDocuments(c,g,y))).next((()=>g))})).then((c=>(n.Ms=o,c)))}function t5(r,e,n){let s=Pe(),o=Pe();return n.forEach((c=>s=s.add(c))),e.getEntries(r,s).next((c=>{let d=nr();return n.forEach(((m,g)=>{const y=c.get(m);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(xe.min())?(e.removeEntry(m,g.readTime),d=d.insert(m,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),d=d.insert(m,g)):he(Qp,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",g.version)})),{ks:d,qs:o}}))}function n5(r,e){const n=Se(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Vp),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function i5(r,e){const n=Se(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,e).next((c=>c?(o=c,ee.resolve(o)):n.Pi.allocateTargetId(s).next((d=>(o=new qr(e,d,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function sp(r,e,n){const s=Se(r),o=s.Ms.get(e),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,(d=>s.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!xo(d))throw d;he(Qp,`Failed to update sequence numbers for target ${e}: ${d}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Xv(r,e,n){const s=Se(r);let o=xe.min(),c=Pe();return s.persistence.runTransaction("Execute query","readwrite",(d=>(function(g,y,b){const x=Se(g),S=x.xs.get(b);return S!==void 0?ee.resolve(x.Ms.get(S)):x.Pi.getTargetData(y,b)})(s,d,pi(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(d,m.targetId).next((g=>{c=g}))})).next((()=>s.Fs.getDocumentsMatchingQuery(d,e,n?o:xe.min(),n?c:Pe()))).next((m=>(r5(s,q3(e),m),{documents:m,Qs:c})))))}function r5(r,e,n){let s=r.Os.get(e)||xe.min();n.forEach(((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),r.Os.set(e,s)}class Wv{constructor(){this.activeTargetIds=K3()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class s5{constructor(){this.Mo=new Wv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Wv,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class a5{Oo(e){}shutdown(){}}/**
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
 */const Zv="ConnectivityMonitor";class Jv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he(Zv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he(Zv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ih=null;function ap(){return ih===null?ih=(function(){return 268435456+Math.round(2147483648*Math.random())})():ih++,"0x"+ih.toString(16)}/**
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
 */const Mm="RestConnection",o5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class l5{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Dh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,c){const d=ap(),m=this.zo(e,n.toUriEncodedString());he(Mm,`Sending RPC '${e}' ${d}:`,m,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,c);const{host:y}=new URL(m),b=_o(y);return this.Jo(e,m,g,s,b).then((x=>(he(Mm,`Received RPC '${e}' ${d}: `,x),x)),(x=>{throw co(Mm,`RPC '${e}' ${d} failed with error: `,x,"url: ",m,"request:",s),x}))}Ho(e,n,s,o,c,d){return this.Go(e,n,s,o,c)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+To})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,c)=>e[c]=o)),s&&s.headers.forEach(((o,c)=>e[c]=o))}zo(e,n){const s=o5[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class c5{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Wt="WebChannelConnection";class u5 extends l5{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,c){const d=ap();return new Promise(((m,g)=>{const y=new P2;y.setWithCredentials(!0),y.listenOnce(V2.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case hh.NO_ERROR:const x=y.getResponseJson();he(Wt,`XHR for RPC '${e}' ${d} received:`,JSON.stringify(x)),m(x);break;case hh.TIMEOUT:he(Wt,`RPC '${e}' ${d} timed out`),g(new ue(Z.DEADLINE_EXCEEDED,"Request time out"));break;case hh.HTTP_ERROR:const S=y.getStatus();if(he(Wt,`RPC '${e}' ${d} failed with status:`,S,"response text:",y.getResponseText()),S>0){let D=y.getResponseJson();Array.isArray(D)&&(D=D[0]);const U=D?.error;if(U&&U.status&&U.message){const z=(function(K){const ie=K.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(ie)>=0?ie:Z.UNKNOWN})(U.status);g(new ue(z,U.message))}else g(new ue(Z.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ue(Z.UNAVAILABLE,"Connection failed."));break;default:be(9055,{l_:e,streamId:d,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{he(Wt,`RPC '${e}' ${d} completed.`)}}));const b=JSON.stringify(o);he(Wt,`RPC '${e}' ${d} sending request:`,o),y.send(n,"POST",b,s,15)}))}T_(e,n,s){const o=ap(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=L2(),m=j2(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const b=c.join("");he(Wt,`Creating RPC '${e}' stream ${o}: ${b}`,g);const x=d.createWebChannel(b,g);this.I_(x);let S=!1,D=!1;const U=new c5({Yo:q=>{D?he(Wt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(S||(he(Wt,`Opening RPC '${e}' stream ${o} transport.`),x.open(),S=!0),he(Wt,`RPC '${e}' stream ${o} sending:`,q),x.send(q))},Zo:()=>x.close()}),z=(q,K,ie)=>{q.listen(K,(ne=>{try{ie(ne)}catch(le){setTimeout((()=>{throw le}),0)}}))};return z(x,zl.EventType.OPEN,(()=>{D||(he(Wt,`RPC '${e}' stream ${o} transport opened.`),U.o_())})),z(x,zl.EventType.CLOSE,(()=>{D||(D=!0,he(Wt,`RPC '${e}' stream ${o} transport closed`),U.a_(),this.E_(x))})),z(x,zl.EventType.ERROR,(q=>{D||(D=!0,co(Wt,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),U.a_(new ue(Z.UNAVAILABLE,"The operation could not be completed")))})),z(x,zl.EventType.MESSAGE,(q=>{if(!D){const K=q.data[0];He(!!K,16349);const ie=K,ne=ie?.error||ie[0]?.error;if(ne){he(Wt,`RPC '${e}' stream ${o} received error:`,ne);const le=ne.status;let se=(function(A){const R=Tt[A];if(R!==void 0)return _E(R)})(le),me=ne.message;se===void 0&&(se=Z.INTERNAL,me="Unknown error status: "+le+" with message "+ne.message),D=!0,U.a_(new ue(se,me)),x.close()}else he(Wt,`RPC '${e}' stream ${o} received:`,K),U.u_(K)}})),z(m,k2.STAT_EVENT,(q=>{q.stat===Qm.PROXY?he(Wt,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===Qm.NOPROXY&&he(Wt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{U.__()}),0),U}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Pm(){return typeof document<"u"?document:null}/**
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
 */function sd(r){return new mR(r,!0)}/**
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
 */class ME{constructor(e,n,s=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const e_="PersistentStream";class PE{constructor(e,n,s,o,c,d,m,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ME(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new ue(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(e_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(he(e_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class h5 extends PE{constructor(e,n,s,o,c,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,d),this.serializer=c}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=yR(this.serializer,e),s=(function(c){if(!("targetChange"in c))return xe.min();const d=c.targetChange;return d.targetIds&&d.targetIds.length?xe.min():d.readTime?gi(d.readTime):xe.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=rp(this.serializer),n.addTarget=(function(c,d){let m;const g=d.target;if(m=Zm(g)?{documents:ER(c,g)}:{query:bR(c,g).ft},m.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){m.resumeToken=TE(c,d.resumeToken);const y=tp(c,d.expectedCount);y!==null&&(m.expectedCount=y)}else if(d.snapshotVersion.compareTo(xe.min())>0){m.readTime=Vh(c,d.snapshotVersion.toTimestamp());const y=tp(c,d.expectedCount);y!==null&&(m.expectedCount=y)}return m})(this.serializer,e);const s=wR(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=rp(this.serializer),n.removeTarget=e,this.q_(n)}}class d5 extends PE{constructor(e,n,s,o,c,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,d),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=_R(e.writeResults,e.commitTime),s=gi(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=rp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>vR(this.serializer,s)))};this.q_(n)}}/**
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
 */class f5{}class m5 extends f5{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ue(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Go(e,np(n,s),o,c,d))).catch((c=>{throw c.name==="FirebaseError"?(c.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(Z.UNKNOWN,c.toString())}))}Ho(e,n,s,o,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,m])=>this.connection.Ho(e,np(n,s),o,d,m,c))).catch((d=>{throw d.name==="FirebaseError"?(d.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ue(Z.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class p5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(tr(n),this.aa=!1):he("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ea="RemoteStore";class g5{constructor(e,n,s,o,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((d=>{s.enqueueAndForget((async()=>{ra(this)&&(he(ea,"Restarting streams for network reachability change."),await(async function(g){const y=Se(g);y.Ea.add(4),await xc(y),y.Ra.set("Unknown"),y.Ea.delete(4),await ad(y)})(this))}))})),this.Ra=new p5(s,o)}}async function ad(r){if(ra(r))for(const e of r.da)await e(!0)}async function xc(r){for(const e of r.da)await e(!1)}function VE(r,e){const n=Se(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Wp(n)?Xp(n):Ao(n).O_()&&$p(n,e))}function Kp(r,e){const n=Se(r),s=Ao(n);n.Ia.delete(e),s.O_()&&kE(n,e),n.Ia.size===0&&(s.O_()?s.L_():ra(n)&&n.Ra.set("Unknown"))}function $p(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ao(r).Y_(e)}function kE(r,e){r.Va.Ue(e),Ao(r).Z_(e)}function Xp(r){r.Va=new uR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Ao(r).start(),r.Ra.ua()}function Wp(r){return ra(r)&&!Ao(r).x_()&&r.Ia.size>0}function ra(r){return Se(r).Ea.size===0}function jE(r){r.Va=void 0}async function y5(r){r.Ra.set("Online")}async function v5(r){r.Ia.forEach(((e,n)=>{$p(r,e)}))}async function _5(r,e){jE(r),Wp(r)?(r.Ra.ha(e),Xp(r)):r.Ra.set("Unknown")}async function E5(r,e,n){if(r.Ra.set("Online"),e instanceof bE&&e.state===2&&e.cause)try{await(async function(o,c){const d=c.cause;for(const m of c.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,d),o.Ia.delete(m),o.Va.removeTarget(m))})(r,e)}catch(s){he(ea,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await jh(r,s)}else if(e instanceof ph?r.Va.Ze(e):e instanceof EE?r.Va.st(e):r.Va.tt(e),!n.isEqual(xe.min()))try{const s=await OE(r.localStore);n.compareTo(s)>=0&&await(function(c,d){const m=c.Va.Tt(d);return m.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const b=c.Ia.get(y);b&&c.Ia.set(y,b.withResumeToken(g.resumeToken,d))}})),m.targetMismatches.forEach(((g,y)=>{const b=c.Ia.get(g);if(!b)return;c.Ia.set(g,b.withResumeToken(Qt.EMPTY_BYTE_STRING,b.snapshotVersion)),kE(c,g);const x=new qr(b.target,g,y,b.sequenceNumber);$p(c,x)})),c.remoteSyncer.applyRemoteEvent(m)})(r,n)}catch(s){he(ea,"Failed to raise snapshot:",s),await jh(r,s)}}async function jh(r,e,n){if(!xo(e))throw e;r.Ea.add(1),await xc(r),r.Ra.set("Offline"),n||(n=()=>OE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{he(ea,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await ad(r)}))}function LE(r,e){return e().catch((n=>jh(r,n,e)))}async function od(r){const e=Se(r),n=Jr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Vp;for(;b5(e);)try{const o=await n5(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,T5(e,o)}catch(o){await jh(e,o)}UE(e)&&zE(e)}function b5(r){return ra(r)&&r.Ta.length<10}function T5(r,e){r.Ta.push(e);const n=Jr(r);n.O_()&&n.X_&&n.ea(e.mutations)}function UE(r){return ra(r)&&!Jr(r).x_()&&r.Ta.length>0}function zE(r){Jr(r).start()}async function w5(r){Jr(r).ra()}async function x5(r){const e=Jr(r);for(const n of r.Ta)e.ea(n.mutations)}async function S5(r,e,n){const s=r.Ta.shift(),o=Bp.from(s,e,n);await LE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await od(r)}async function A5(r,e){e&&Jr(r).X_&&await(async function(s,o){if((function(d){return oR(d)&&d!==Z.ABORTED})(o.code)){const c=s.Ta.shift();Jr(s).B_(),await LE(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o))),await od(s)}})(r,e),UE(r)&&zE(r)}async function t_(r,e){const n=Se(r);n.asyncQueue.verifyOperationInProgress(),he(ea,"RemoteStore received new credentials");const s=ra(n);n.Ea.add(3),await xc(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ad(n)}async function R5(r,e){const n=Se(r);e?(n.Ea.delete(2),await ad(n)):e||(n.Ea.add(2),await xc(n),n.Ra.set("Unknown"))}function Ao(r){return r.ma||(r.ma=(function(n,s,o){const c=Se(n);return c.sa(),new h5(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:y5.bind(null,r),t_:v5.bind(null,r),r_:_5.bind(null,r),H_:E5.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Wp(r)?Xp(r):r.Ra.set("Unknown")):(await r.ma.stop(),jE(r))}))),r.ma}function Jr(r){return r.fa||(r.fa=(function(n,s,o){const c=Se(n);return c.sa(),new d5(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:w5.bind(null,r),r_:A5.bind(null,r),ta:x5.bind(null,r),na:S5.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await od(r)):(await r.fa.stop(),r.Ta.length>0&&(he(ea,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Zp{constructor(e,n,s,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,c){const d=Date.now()+s,m=new Zp(e,n,d,o,c);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jp(r,e){if(tr("AsyncQueue",`${e}: ${r}`),xo(r))return new ue(Z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class ao{static emptySet(e){return new ao(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ge.comparator(n.key,s.key):(n,s)=>ge.comparator(n.key,s.key),this.keyedMap=Bl(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class n_{constructor(){this.ga=new ct(ge.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):be(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class po{constructor(e,n,s,o,c,d,m,g,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,c){const d=[];return n.forEach((m=>{d.push({type:0,doc:m})})),new po(e,n,ao.emptySet(n),d,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ed(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class C5{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class I5{constructor(){this.queries=i_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Se(n),c=o.queries;o.queries=i_(),c.forEach(((d,m)=>{for(const g of m.Sa)g.onError(s)}))})(this,new ue(Z.ABORTED,"Firestore shutting down"))}}function i_(){return new ia((r=>aE(r)),ed)}async function BE(r,e){const n=Se(r);let s=3;const o=e.query;let c=n.queries.get(o);c?!c.ba()&&e.Da()&&(s=2):(c=new C5,s=e.Da()?0:1);try{switch(s){case 0:c.wa=await n.onListen(o,!0);break;case 1:c.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(d){const m=Jp(d,`Initialization of query '${Ja(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,c),c.Sa.push(e),e.va(n.onlineState),c.wa&&e.Fa(c.wa)&&eg(n)}async function qE(r,e){const n=Se(r),s=e.query;let o=3;const c=n.queries.get(s);if(c){const d=c.Sa.indexOf(e);d>=0&&(c.Sa.splice(d,1),c.Sa.length===0?o=e.Da()?0:1:!c.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function N5(r,e){const n=Se(r);let s=!1;for(const o of e){const c=o.query,d=n.queries.get(c);if(d){for(const m of d.Sa)m.Fa(o)&&(s=!0);d.wa=o}}s&&eg(n)}function D5(r,e,n){const s=Se(r),o=s.queries.get(e);if(o)for(const c of o.Sa)c.onError(n);s.queries.delete(e)}function eg(r){r.Ca.forEach((e=>{e.next()}))}var op,r_;(r_=op||(op={})).Ma="default",r_.Cache="cache";class FE{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==op.Cache}}/**
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
 */class HE{constructor(e){this.key=e}}class GE{constructor(e){this.key=e}}class O5{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pe(),this.mutatedKeys=Pe(),this.eu=oE(e),this.tu=new ao(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new n_,o=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,d=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((b,x)=>{const S=o.get(b),D=td(this.query,x)?x:null,U=!!S&&this.mutatedKeys.has(S.key),z=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let q=!1;S&&D?S.data.isEqual(D.data)?U!==z&&(s.track({type:3,doc:D}),q=!0):this.su(S,D)||(s.track({type:2,doc:D}),q=!0,(g&&this.eu(D,g)>0||y&&this.eu(D,y)<0)&&(m=!0)):!S&&D?(s.track({type:0,doc:D}),q=!0):S&&!D&&(s.track({type:1,doc:S}),q=!0,(g||y)&&(m=!0)),q&&(D?(d=d.add(D),c=z?c.add(b):c.delete(b)):(d=d.delete(b),c=c.delete(b)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const b=this.query.limitType==="F"?d.last():d.first();d=d.delete(b.key),c=c.delete(b.key),s.track({type:1,doc:b})}return{tu:d,iu:s,Cs:m,mutatedKeys:c}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const d=e.iu.ya();d.sort(((b,x)=>(function(D,U){const z=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{Rt:q})}};return z(D)-z(U)})(b.type,x.type)||this.eu(b.doc,x.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,y=g!==this.Za;return this.Za=g,d.length!==0||y?{snapshot:new po(this.query,e.tu,c,d,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new n_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Pe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new GE(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new HE(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Pe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const tg="SyncEngine";class M5{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class P5{constructor(e){this.key=e,this.hu=!1}}class V5{constructor(e,n,s,o,c,d){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new ia((m=>aE(m)),ed),this.Iu=new Map,this.Eu=new Set,this.du=new ct(ge.comparator),this.Au=new Map,this.Ru=new Hp,this.Vu={},this.mu=new Map,this.fu=mo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function k5(r,e,n=!0){const s=WE(r);let o;const c=s.Tu.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.lu()):o=await YE(s,e,n,!0),o}async function j5(r,e){const n=WE(r);await YE(n,e,!0,!1)}async function YE(r,e,n,s){const o=await i5(r.localStore,pi(e)),c=o.targetId,d=r.sharedClientState.addLocalQueryTarget(c,n);let m;return s&&(m=await L5(r,e,c,d==="current",o.resumeToken)),r.isPrimaryClient&&n&&VE(r.remoteStore,o),m}async function L5(r,e,n,s,o){r.pu=(x,S,D)=>(async function(z,q,K,ie){let ne=q.view.ru(K);ne.Cs&&(ne=await Xv(z.localStore,q.query,!1).then((({documents:V})=>q.view.ru(V,ne))));const le=ie&&ie.targetChanges.get(q.targetId),se=ie&&ie.targetMismatches.get(q.targetId)!=null,me=q.view.applyChanges(ne,z.isPrimaryClient,le,se);return a_(z,q.targetId,me.au),me.snapshot})(r,x,S,D);const c=await Xv(r.localStore,e,!0),d=new O5(e,c.Qs),m=d.ru(c.documents),g=wc.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=d.applyChanges(m,r.isPrimaryClient,g);a_(r,n,y.au);const b=new M5(e,n,d);return r.Tu.set(e,b),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),y.snapshot}async function U5(r,e,n){const s=Se(r),o=s.Tu.get(e),c=s.Iu.get(o.targetId);if(c.length>1)return s.Iu.set(o.targetId,c.filter((d=>!ed(d,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await sp(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Kp(s.remoteStore,o.targetId),lp(s,o.targetId)})).catch(wo)):(lp(s,o.targetId),await sp(s.localStore,o.targetId,!0))}async function z5(r,e){const n=Se(r),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Kp(n.remoteStore,s.targetId))}async function B5(r,e,n){const s=K5(r);try{const o=await(function(d,m){const g=Se(d),y=Ze.now(),b=m.reduce(((D,U)=>D.add(U.key)),Pe());let x,S;return g.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let U=nr(),z=Pe();return g.Ns.getEntries(D,b).next((q=>{U=q,U.forEach(((K,ie)=>{ie.isValidDocument()||(z=z.add(K))}))})).next((()=>g.localDocuments.getOverlayedDocuments(D,U))).next((q=>{x=q;const K=[];for(const ie of m){const ne=nR(ie,x.get(ie.key).overlayedDocument);ne!=null&&K.push(new ss(ie.key,ne,Z2(ne.value.mapValue),Qn.exists(!0)))}return g.mutationQueue.addMutationBatch(D,y,K,m)})).next((q=>{S=q;const K=q.applyToLocalDocumentSet(x,z);return g.documentOverlayCache.saveOverlays(D,q.batchId,K)}))})).then((()=>({batchId:S.batchId,changes:cE(x)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(d,m,g){let y=d.Vu[d.currentUser.toKey()];y||(y=new ct(Me)),y=y.insert(m,g),d.Vu[d.currentUser.toKey()]=y})(s,o.batchId,n),await Sc(s,o.changes),await od(s.remoteStore)}catch(o){const c=Jp(o,"Failed to persist write");n.reject(c)}}async function QE(r,e){const n=Se(r);try{const s=await e5(n.localStore,e);e.targetChanges.forEach(((o,c)=>{const d=n.Au.get(c);d&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.hu=!0:o.modifiedDocuments.size>0?He(d.hu,14607):o.removedDocuments.size>0&&(He(d.hu,42227),d.hu=!1))})),await Sc(n,s,e)}catch(s){await wo(s)}}function s_(r,e,n){const s=Se(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((c,d)=>{const m=d.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(d,m){const g=Se(d);g.onlineState=m;let y=!1;g.queries.forEach(((b,x)=>{for(const S of x.Sa)S.va(m)&&(y=!0)})),y&&eg(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function q5(r,e,n){const s=Se(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),c=o&&o.key;if(c){let d=new ct(ge.comparator);d=d.insert(c,Jt.newNoDocument(c,xe.min()));const m=Pe().add(c),g=new rd(xe.min(),new Map,new ct(Me),d,m);await QE(s,g),s.du=s.du.remove(c),s.Au.delete(e),ng(s)}else await sp(s.localStore,e,!1).then((()=>lp(s,e,n))).catch(wo)}async function F5(r,e){const n=Se(r),s=e.batch.batchId;try{const o=await JR(n.localStore,e);$E(n,s,null),KE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Sc(n,o)}catch(o){await wo(o)}}async function H5(r,e,n){const s=Se(r);try{const o=await(function(d,m){const g=Se(d);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let b;return g.mutationQueue.lookupMutationBatch(y,m).next((x=>(He(x!==null,37113),b=x.keys(),g.mutationQueue.removeMutationBatch(y,x)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,b,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,b))).next((()=>g.localDocuments.getDocuments(y,b)))}))})(s.localStore,e);$E(s,e,n),KE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Sc(s,o)}catch(o){await wo(o)}}function KE(r,e){(r.mu.get(e)||[]).forEach((n=>{n.resolve()})),r.mu.delete(e)}function $E(r,e,n){const s=Se(r);let o=s.Vu[s.currentUser.toKey()];if(o){const c=o.get(e);c&&(n?c.reject(n):c.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function lp(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||XE(r,s)}))}function XE(r,e){r.Eu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(Kp(r.remoteStore,n),r.du=r.du.remove(e),r.Au.delete(n),ng(r))}function a_(r,e,n){for(const s of n)s instanceof HE?(r.Ru.addReference(s.key,e),G5(r,s)):s instanceof GE?(he(tg,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||XE(r,s.key)):be(19791,{wu:s})}function G5(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(he(tg,"New document in limbo: "+n),r.Eu.add(s),ng(r))}function ng(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new ge(it.fromString(e)),s=r.fu.next();r.Au.set(s,new P5(n)),r.du=r.du.insert(n,s),VE(r.remoteStore,new qr(pi(Jh(n.path)),s,"TargetPurposeLimboResolution",Xh.ce))}}async function Sc(r,e,n){const s=Se(r),o=[],c=[],d=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,g)=>{d.push(s.pu(g,e,n).then((y=>{if((y||n)&&s.isPrimaryClient){const b=y?!y.fromCache:n?.targetChanges.get(g.targetId)?.current;s.sharedClientState.updateQueryState(g.targetId,b?"current":"not-current")}if(y){o.push(y);const b=Yp.As(g.targetId,y);c.push(b)}})))})),await Promise.all(d),s.Pu.H_(o),await(async function(g,y){const b=Se(g);try{await b.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>ee.forEach(y,(S=>ee.forEach(S.Es,(D=>b.persistence.referenceDelegate.addReference(x,S.targetId,D))).next((()=>ee.forEach(S.ds,(D=>b.persistence.referenceDelegate.removeReference(x,S.targetId,D)))))))))}catch(x){if(!xo(x))throw x;he(Qp,"Failed to update sequence numbers: "+x)}for(const x of y){const S=x.targetId;if(!x.fromCache){const D=b.Ms.get(S),U=D.snapshotVersion,z=D.withLastLimboFreeSnapshotVersion(U);b.Ms=b.Ms.insert(S,z)}}})(s.localStore,c))}async function Y5(r,e){const n=Se(r);if(!n.currentUser.isEqual(e)){he(tg,"User change. New user:",e.toKey());const s=await DE(n.localStore,e);n.currentUser=e,(function(c,d){c.mu.forEach((m=>{m.forEach((g=>{g.reject(new ue(Z.CANCELLED,d))}))})),c.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Sc(n,s.Ls)}}function Q5(r,e){const n=Se(r),s=n.Au.get(e);if(s&&s.hu)return Pe().add(s.key);{let o=Pe();const c=n.Iu.get(e);if(!c)return o;for(const d of c){const m=n.Tu.get(d);o=o.unionWith(m.view.nu)}return o}}function WE(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=QE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Q5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=q5.bind(null,e),e.Pu.H_=N5.bind(null,e.eventManager),e.Pu.yu=D5.bind(null,e.eventManager),e}function K5(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=F5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=H5.bind(null,e),e}class Lh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return ZR(this.persistence,new $R,e.initialUser,this.serializer)}Cu(e){return new NE(Gp.mi,this.serializer)}Du(e){return new s5}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lh.provider={build:()=>new Lh};class $5 extends Lh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof kh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new PR(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?cn.withCacheSize(this.cacheSizeBytes):cn.DEFAULT;return new NE((s=>kh.mi(s,n)),this.serializer)}}class cp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>s_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Y5.bind(null,this.syncEngine),await R5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new I5})()}createDatastore(e){const n=sd(e.databaseInfo.databaseId),s=(function(c){return new u5(c)})(e.databaseInfo);return(function(c,d,m,g){return new m5(c,d,m,g)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,c,d,m){return new g5(s,o,c,d,m)})(this.localStore,this.datastore,e.asyncQueue,(n=>s_(this.syncEngine,n,0)),(function(){return Jv.v()?new Jv:new a5})())}createSyncEngine(e,n){return(function(o,c,d,m,g,y,b){const x=new V5(o,c,d,m,g,y);return b&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Se(n);he(ea,"RemoteStore shutting down."),s.Ea.add(5),await xc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}cp.provider={build:()=>new cp};/**
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
 */class ZE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const es="FirestoreClient";class X5{constructor(e,n,s,o,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Zt.UNAUTHENTICATED,this.clientId=Pp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async d=>{he(es,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(s,(d=>(he(es,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Jp(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Vm(r,e){r.asyncQueue.verifyOperationInProgress(),he(es,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await DE(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function o_(r,e){r.asyncQueue.verifyOperationInProgress();const n=await W5(r);he(es,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>t_(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>t_(e.remoteStore,o))),r._onlineComponents=e}async function W5(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){he(es,"Using user provided OfflineComponentProvider");try{await Vm(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;co("Error using user provided cache. Falling back to memory cache: "+n),await Vm(r,new Lh)}}else he(es,"Using default OfflineComponentProvider"),await Vm(r,new $5(void 0));return r._offlineComponents}async function JE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(he(es,"Using user provided OnlineComponentProvider"),await o_(r,r._uninitializedComponentsProvider._online)):(he(es,"Using default OnlineComponentProvider"),await o_(r,new cp))),r._onlineComponents}function Z5(r){return JE(r).then((e=>e.syncEngine))}async function up(r){const e=await JE(r),n=e.eventManager;return n.onListen=k5.bind(null,e.syncEngine),n.onUnlisten=U5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=j5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=z5.bind(null,e.syncEngine),n}function J5(r,e,n={}){const s=new Qr;return r.asyncQueue.enqueueAndForget((async()=>(function(c,d,m,g,y){const b=new ZE({next:S=>{b.Nu(),d.enqueueAndForget((()=>qE(c,x)));const D=S.docs.has(m);!D&&S.fromCache?y.reject(new ue(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&S.fromCache&&g&&g.source==="server"?y.reject(new ue(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),x=new FE(Jh(m.path),b,{includeMetadataChanges:!0,qa:!0});return BE(c,x)})(await up(r),r.asyncQueue,e,n,s))),s.promise}/**
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
 */function eb(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const l_=new Map;/**
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
 */const tb="firestore.googleapis.com",c_=!0;class u_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tb,this.ssl=c_}else this.host=e.host,this.ssl=e.ssl??c_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=IE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<OR)throw new ue(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}p3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eb(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ld{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new s3;switch(s.type){case"firstParty":return new c3(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=l_.get(n);s&&(he("ComponentProvider","Removing Datastore"),l_.delete(n),s.terminate())})(this),Promise.resolve()}}function eC(r,e,n,s={}){r=Yn(r,ld);const o=_o(e),c=r._getSettings(),d={...c,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${n}`;o&&(H_(`https://${m}`),G_("Firestore",!0)),c.host!==tb&&c.host!==m&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...c,host:m,ssl:o,emulatorOptions:s};if(!$s(g,d)&&(r._setSettings(g),s.mockUserToken)){let y,b;if(typeof s.mockUserToken=="string")y=s.mockUserToken,b=Zt.MOCK_USER;else{y=px(s.mockUserToken,r._app?.options.projectId);const x=s.mockUserToken.sub||s.mockUserToken.user_id;if(!x)throw new ue(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new Zt(x)}r._authCredentials=new a3(new z2(y,b))}}/**
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
 */class sa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new sa(this.firestore,e,this._query)}}class ft{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(bc(n,ft._jsonSchema))return new ft(e,s||null,new ge(it.fromString(n.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:xt("string",ft._jsonSchemaVersion),referencePath:xt("string")};class Kr extends sa{constructor(e,n,s){super(e,n,Jh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new ge(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function cc(r,e,...n){if(r=Dt(r),B2("collection","path",e),r instanceof ld){const s=it.fromString(e,...n);return wv(s),new Kr(r,null,s)}{if(!(r instanceof ft||r instanceof Kr))throw new ue(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...n));return wv(s),new Kr(r.firestore,null,s)}}function Tn(r,e,...n){if(r=Dt(r),arguments.length===1&&(e=Pp.newId()),B2("doc","path",e),r instanceof ld){const s=it.fromString(e,...n);return Tv(s),new ft(r,null,new ge(s))}{if(!(r instanceof ft||r instanceof Kr))throw new ue(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...n));return Tv(s),new ft(r.firestore,r instanceof Kr?r.converter:null,new ge(s))}}/**
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
 */const h_="AsyncQueue";class d_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ME(this,"async_queue_retry"),this._c=()=>{const s=Pm();s&&he(h_,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Pm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Pm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Qr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!xo(e))throw e;he(h_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,tr("INTERNAL UNHANDLED ERROR: ",f_(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=Zp.createAndSchedule(this,e,n,s,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&be(47125,{Pc:f_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function f_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function m_(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const c of s)if(c in o&&typeof o[c]=="function")return!0;return!1})(r,["next","error","complete"])}class ta extends ld{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new d_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new d_(e),this._firestoreClient=void 0,await e}}}function tC(r,e){const n=typeof r=="object"?r:$_(),s=typeof r=="string"?r:Dh,o=Tp(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=fx("firestore");c&&eC(o,...c)}return o}function ig(r){if(r._terminated)throw new ue(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||nC(r),r._firestoreClient}function nC(r){const e=r._freezeSettings(),n=(function(o,c,d,m){return new A3(o,c,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,eb(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new X5(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const c=o?._online.build();return{_offline:o?._offline.build(c),_online:c}})(r._componentsProvider))}/**
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
 */class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(Qt.fromBase64String(e))}catch(n){throw new ue(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kn(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bc(e,kn._jsonSchema))return kn.fromBase64String(e.bytes)}}kn._jsonSchemaVersion="firestore/bytes/1.0",kn._jsonSchema={type:xt("string",kn._jsonSchemaVersion),bytes:xt("string")};/**
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
 */class cd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ud{constructor(e){this._methodName=e}}/**
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
 */class yi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yi._jsonSchemaVersion}}static fromJSON(e){if(bc(e,yi._jsonSchema))return new yi(e.latitude,e.longitude)}}yi._jsonSchemaVersion="firestore/geoPoint/1.0",yi._jsonSchema={type:xt("string",yi._jsonSchemaVersion),latitude:xt("number"),longitude:xt("number")};/**
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
 */class vi{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bc(e,vi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new vi(e.vectorValues);throw new ue(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vi._jsonSchemaVersion="firestore/vectorValue/1.0",vi._jsonSchema={type:xt("string",vi._jsonSchemaVersion),vectorValues:xt("object")};/**
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
 */const iC=/^__.*__$/;class rC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tc(e,this.data,n,this.fieldTransforms)}}class nb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ib(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{Ac:r})}}class rg{constructor(e,n,s,o,c,d){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new rg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Uh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ib(this.Ac)&&iC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class sC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||sd(e)}Cc(e,n,s,o=!1){return new rg({Ac:e,methodName:n,Dc:s,path:Gt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hd(r){const e=r._freezeSettings(),n=sd(r._databaseId);return new sC(r._databaseId,!!e.ignoreUndefinedProperties,n)}function rb(r,e,n,s,o,c={}){const d=r.Cc(c.merge||c.mergeFields?2:0,e,n,o);ag("Data must be an object, but it was:",d,s);const m=sb(s,d);let g,y;if(c.merge)g=new bn(d.fieldMask),y=d.fieldTransforms;else if(c.mergeFields){const b=[];for(const x of c.mergeFields){const S=hp(e,x,n);if(!d.contains(S))throw new ue(Z.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);ob(b,S)||b.push(S)}g=new bn(b),y=d.fieldTransforms.filter((x=>g.covers(x.field)))}else g=null,y=d.fieldTransforms;return new rC(new un(m),g,y)}class dd extends ud{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dd}}class sg extends ud{_toFieldTransform(e){return new Z3(e.path,new ac)}isEqual(e){return e instanceof sg}}function aC(r,e,n,s){const o=r.Cc(1,e,n);ag("Data must be an object, but it was:",o,s);const c=[],d=un.empty();rs(s,((g,y)=>{const b=og(e,g,n);y=Dt(y);const x=o.yc(b);if(y instanceof dd)c.push(b);else{const S=Ac(y,x);S!=null&&(c.push(b),d.set(b,S))}}));const m=new bn(c);return new nb(d,m,o.fieldTransforms)}function oC(r,e,n,s,o,c){const d=r.Cc(1,e,n),m=[hp(e,s,n)],g=[o];if(c.length%2!=0)throw new ue(Z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<c.length;S+=2)m.push(hp(e,c[S])),g.push(c[S+1]);const y=[],b=un.empty();for(let S=m.length-1;S>=0;--S)if(!ob(y,m[S])){const D=m[S];let U=g[S];U=Dt(U);const z=d.yc(D);if(U instanceof dd)y.push(D);else{const q=Ac(U,z);q!=null&&(y.push(D),b.set(D,q))}}const x=new bn(y);return new nb(b,x,d.fieldTransforms)}function lC(r,e,n,s=!1){return Ac(n,r.Cc(s?4:3,e))}function Ac(r,e){if(ab(r=Dt(r)))return ag("Unsupported field value:",e,r),sb(r,e);if(r instanceof ud)return(function(s,o){if(!ib(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const c=[];let d=0;for(const m of s){let g=Ac(m,o.wc(d));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),d++}return{arrayValue:{values:c}}})(r,e)}return(function(s,o){if((s=Dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return $3(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Ze.fromDate(s);return{timestampValue:Vh(o.serializer,c)}}if(s instanceof Ze){const c=new Ze(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Vh(o.serializer,c)}}if(s instanceof yi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof kn)return{bytesValue:TE(o.serializer,s._byteString)};if(s instanceof ft){const c=o.databaseId,d=s.firestore._databaseId;if(!d.isEqual(c))throw o.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Fp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof vi)return(function(d,m){return{mapValue:{fields:{[X2]:{stringValue:W2},[Oh]:{arrayValue:{values:d.toArray().map((y=>{if(typeof y!="number")throw m.Sc("VectorValues must only contain numeric values.");return zp(m.serializer,y)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${$h(s)}`)})(r,e)}function sb(r,e){const n={};return H2(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(r,((s,o)=>{const c=Ac(o,e.mc(s));c!=null&&(n[s]=c)})),{mapValue:{fields:n}}}function ab(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ze||r instanceof yi||r instanceof kn||r instanceof ft||r instanceof ud||r instanceof vi)}function ag(r,e,n){if(!ab(n)||!q2(n)){const s=$h(n);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function hp(r,e,n){if((e=Dt(e))instanceof cd)return e._internalPath;if(typeof e=="string")return og(r,e);throw Uh("Field path arguments must be of type string or ",r,!1,void 0,n)}const cC=new RegExp("[~\\*/\\[\\]]");function og(r,e,n){if(e.search(cC)>=0)throw Uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new cd(...e.split("."))._internalPath}catch{throw Uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Uh(r,e,n,s,o){const c=s&&!s.isEmpty(),d=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(c||d)&&(g+=" (found",c&&(g+=` in field ${s}`),d&&(g+=` in document ${o}`),g+=")"),new ue(Z.INVALID_ARGUMENT,m+r+g)}function ob(r,e){return r.some((n=>n.isEqual(e)))}/**
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
 */class lb{constructor(e,n,s,o,c){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uC extends lb{data(){return super.data()}}function fd(r,e){return typeof e=="string"?og(r,e):e instanceof cd?e._internalPath:e._delegate._internalPath}/**
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
 */function hC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ue(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lg{}class cb extends lg{}function ub(r,e,...n){let s=[];e instanceof lg&&s.push(e),s=s.concat(n),(function(c){const d=c.filter((g=>g instanceof cg)).length,m=c.filter((g=>g instanceof md)).length;if(d>1||d>0&&m>0)throw new ue(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class md extends cb{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new md(e,n,s)}_apply(e){const n=this._parse(e);return db(e._query,n),new sa(e.firestore,e.converter,Jm(e._query,n))}_parse(e){const n=hd(e.firestore);return(function(c,d,m,g,y,b,x){let S;if(y.isKeyField()){if(b==="array-contains"||b==="array-contains-any")throw new ue(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${b}' queries on documentId().`);if(b==="in"||b==="not-in"){g_(x,b);const U=[];for(const z of x)U.push(p_(g,c,z));S={arrayValue:{values:U}}}else S=p_(g,c,x)}else b!=="in"&&b!=="not-in"&&b!=="array-contains-any"||g_(x,b),S=lC(m,d,x,b==="in"||b==="not-in");return wt.create(y,b,S)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gh(r,e,n){const s=e,o=fd("where",r);return md._create(o,s,n)}class cg extends lg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cg(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:Kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(o,c){let d=o;const m=c.getFlattenedFilters();for(const g of m)db(d,g),d=Jm(d,g)})(e._query,n),new sa(e.firestore,e.converter,Jm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ug extends cb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ug(e,n)}_apply(e){const n=(function(o,c,d){if(o.startAt!==null)throw new ue(Z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ue(Z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sc(c,d)})(e._query,this._field,this._direction);return new sa(e.firestore,e.converter,(function(o,c){const d=o.explicitOrderBy.concat([c]);return new So(o.path,o.collectionGroup,d,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,n))}}function hb(r,e="asc"){const n=e,s=fd("orderBy",r);return ug._create(s,n)}function p_(r,e,n){if(typeof(n=Dt(n))=="string"){if(n==="")throw new ue(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sE(e)&&n.indexOf("/")!==-1)throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(it.fromString(n));if(!ge.isDocumentKey(s))throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Dv(r,new ge(s))}if(n instanceof ft)return Dv(r,n._key);throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$h(n)}.`)}function g_(r,e){if(!Array.isArray(r)||r.length===0)throw new ue(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function db(r,e){const n=(function(o,c){for(const d of o)for(const m of d.getFlattenedFilters())if(c.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ue(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class dC{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw be(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return rs(e,((o,c)=>{s[o]=this.convertValue(c,n)})),s}convertVectorValue(e){const n=e.fields?.[Oh].arrayValue?.values?.map((s=>yt(s.doubleValue)));return new vi(n)}convertGeoPoint(e){return new yi(yt(e.latitude),yt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Zh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(nc(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=it.fromString(e);He(CE(s),9688,{name:e});const o=new ic(s.get(1),s.get(3)),c=new ge(s.popFirst(5));return o.isEqual(n)||tr(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
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
 */function fb(r,e,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,s}class Fl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ks extends lb{constructor(e,n,s,o,c,d){super(e,n,s,o,d),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(fd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ks._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ks._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ks._jsonSchema={type:xt("string",Ks._jsonSchemaVersion),bundleSource:xt("string","DocumentSnapshot"),bundleName:xt("string"),bundle:xt("string")};class yh extends Ks{data(e={}){return super.data(e)}}class oo{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Fl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new yh(this._firestore,this._userDataWriter,s.key,s,new Fl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ue(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,c){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((m=>{const g=new yh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Fl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>c||m.type!==3)).map((m=>{const g=new yh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Fl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,b=-1;return m.type!==0&&(y=d.indexOf(m.doc.key),d=d.delete(m.doc.key)),m.type!==1&&(d=d.add(m.doc),b=d.indexOf(m.doc.key)),{type:fC(m.type),doc:g,oldIndex:y,newIndex:b}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be(61501,{type:r})}}/**
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
 */function ts(r){r=Yn(r,ft);const e=Yn(r.firestore,ta);return J5(ig(e),r._key).then((n=>pb(e,r,n)))}oo._jsonSchemaVersion="firestore/querySnapshot/1.0",oo._jsonSchema={type:xt("string",oo._jsonSchemaVersion),bundleSource:xt("string","QuerySnapshot"),bundleName:xt("string"),bundle:xt("string")};class mb extends dC{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function zh(r,e,n){r=Yn(r,ft);const s=Yn(r.firestore,ta),o=fb(r.converter,e,n);return fg(s,[rb(hd(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Qn.none())])}function Bh(r,e,n,...s){r=Yn(r,ft);const o=Yn(r.firestore,ta),c=hd(o);let d;return d=typeof(e=Dt(e))=="string"||e instanceof cd?oC(c,"updateDoc",r._key,e,n,s):aC(c,"updateDoc",r._key,e),fg(o,[d.toMutation(r._key,Qn.exists(!0))])}function hg(r,e){const n=Yn(r.firestore,ta),s=Tn(r),o=fb(r.converter,e);return fg(n,[rb(hd(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Qn.exists(!1))]).then((()=>s))}function dg(r,...e){r=Dt(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||m_(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(m_(e[s])){const g=e[s];e[s]=g.next?.bind(g),e[s+1]=g.error?.bind(g),e[s+2]=g.complete?.bind(g)}let c,d,m;if(r instanceof ft)d=Yn(r.firestore,ta),m=Jh(r._key.path),c={next:g=>{e[s]&&e[s](pb(d,r,g))},error:e[s+1],complete:e[s+2]};else{const g=Yn(r,sa);d=Yn(g.firestore,ta),m=g._query;const y=new mb(d);c={next:b=>{e[s]&&e[s](new oo(d,y,g,b))},error:e[s+1],complete:e[s+2]},hC(r._query)}return(function(y,b,x,S){const D=new ZE(S),U=new FE(b,D,x);return y.asyncQueue.enqueueAndForget((async()=>BE(await up(y),U))),()=>{D.Nu(),y.asyncQueue.enqueueAndForget((async()=>qE(await up(y),U)))}})(ig(d),m,o,c)}function fg(r,e){return(function(s,o){const c=new Qr;return s.asyncQueue.enqueueAndForget((async()=>B5(await Z5(s),o,c))),c.promise})(ig(r),e)}function pb(r,e,n){const s=n.docs.get(e._key),o=new mb(r);return new Ks(r,o,e._key,s,new Fl(n.hasPendingWrites,n.fromCache),e.converter)}function uc(){return new sg("serverTimestamp")}(function(e,n=!0){(function(o){To=o})(Eo),lo(new Xs("firestore",((s,{instanceIdentifier:o,options:c})=>{const d=s.getProvider("app").getImmediate(),m=new ta(new o3(s.getProvider("auth-internal")),new u3(d,s.getProvider("app-check-internal")),(function(y,b){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ue(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ic(y.options.projectId,b)})(d,o),d);return c={useFetchStreams:n,...c},m._setSettings(c),m}),"PUBLIC").setMultipleInstances(!0)),Gr(vv,_v,e),Gr(vv,_v,"esm2020")})();var mC="firebase",pC="12.1.0";/**
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
 */Gr(mC,pC,"app");const gC={apiKey:"AIzaSyAwNVpI9pwh7lCsh1C53JH8w991gmeUbKI",authDomain:"goldinc-7ed2f.firebaseapp.com",projectId:"goldinc-7ed2f",storageBucket:"goldinc-7ed2f.firebasestorage.app",messagingSenderId:"336738370359",appId:"1:336738370359:web:27be8e3965dac5215dd0b2"},yC=K_(gC),ns=i3(),Yt=tC(yC),hc=300,vC=[{id:1,name:"BEGINNERS PLAN",profitPercent:5,min:200,max:19900,duration:7,description:"Perfect for beginners starting with gold investment"},{id:2,name:"MASTERS PLAN",profitPercent:30,min:2e4,max:99999,duration:14,description:"Ideal for consistent wealth accumulation"},{id:3,name:"PREMIUM PLAN",profitPercent:50,min:1e5,max:1/0,duration:30,description:"For premium investors building a substantial portfolio"}],gb=[{type:"USDT (ERC20)",address:"0x2F549207342b44ADF00d25893580b23902f3137B"},{type:"TRON",address:"TNyKcnXh9GhANHaCgQyRdnXGmMc72ykQFC"},{type:"DODGECOIN",address:"D7whXjWwZzsXqnfZdy3rSkBtvTbyefr4d4"}],_C=({user:r})=>{const e=vo(),[n,s]=k.useState({}),[o,c]=k.useState(!0),[d,m]=k.useState(null);return k.useEffect(()=>{(async()=>{if(r)try{const y=Tn(Yt,"users",r.uid),b=await ts(y);b.exists()?s(b.data()):m("Profile data not found.")}catch(y){m("Failed to fetch profile data."),console.error(y)}c(!1)})()},[r]),o?p.jsx("div",{className:"loading",children:"Loading profile..."}):d?p.jsx("div",{className:"error-message",children:d}):p.jsxs("div",{className:"profile-container",children:[p.jsx("h2",{className:"section-title",children:"User Profile"}),p.jsxs("div",{className:"profile-grid",children:[p.jsxs("div",{className:"profile-card",children:[p.jsx("strong",{children:"Full Name:"})," ",p.jsx("span",{children:n.fullName||"N/A"})]}),p.jsxs("div",{className:"profile-card",children:[p.jsx("strong",{children:"Email:"})," ",p.jsx("span",{children:r.email})]}),p.jsxs("div",{className:"profile-card",children:[p.jsx("strong",{children:"Username:"})," ",p.jsx("span",{children:n.username||"N/A"})]}),p.jsxs("div",{className:"profile-card",children:[p.jsx("strong",{children:"Phone:"})," ",p.jsx("span",{children:n.phone||"N/A"})]}),p.jsxs("div",{className:"profile-card",children:[p.jsx("strong",{children:"Location:"})," ",p.jsx("span",{children:n.location||"N/A"})]}),p.jsxs("div",{className:"profile-card",children:[p.jsx("strong",{children:"Occupation:"})," ",p.jsx("span",{children:n.occupation||"N/A"})]})]}),p.jsxs("div",{className:"bio-card",children:[p.jsx("strong",{children:"Bio:"}),p.jsx("p",{children:n.bio||"No bio provided."})]}),p.jsx("button",{className:"btn-primary",onClick:()=>e("/edit-profile"),children:"Edit Profile"})]})},EC=({user:r})=>{const[e,n]=k.useState(null),[s,o]=k.useState(!1),c=async()=>{if(!r||!r.email){n("error");return}o(!0),n(null);try{await qA(ns,r.email),n("success")}catch(d){console.error("Password reset error:",d),n("error")}finally{o(!1)}};return p.jsxs("div",{className:"settings-container",children:[p.jsxs("div",{className:"settings-card",children:[p.jsx("h2",{className:"section-title",children:"Account Settings"}),p.jsxs("div",{className:"setting-item",children:[p.jsx("h3",{children:"Password & Security"}),p.jsx("p",{children:"Request a password reset link to be sent to your email."}),p.jsx("button",{className:"btn-primary",onClick:c,disabled:s,children:s?"Sending...":"Reset Password"}),e==="success"&&p.jsxs("span",{className:"success-message",children:[p.jsx(no,{style:{marginRight:"5px"}})," Password reset email sent! Check your inbox."]}),e==="error"&&p.jsxs("span",{className:"error-message",children:[p.jsx(_p,{style:{marginRight:"5px"}})," Failed to send reset email. Please try again."]})]})]}),p.jsxs("div",{className:"settings-card",children:[p.jsx("h2",{className:"section-title",children:"Notification Preferences"}),p.jsxs("div",{className:"setting-item",children:[p.jsx("p",{children:"Manage how you receive updates and alerts."}),p.jsx("button",{className:"btn-secondary",onClick:()=>alert("Notification settings update coming soon!"),children:"Configure Notifications"})]})]})]})},bC=({user:r,updateBalance:e})=>{const[n,s]=k.useState(null),[o,c]=k.useState(""),[d,m]=k.useState(null),[g,y]=k.useState(!1),[b,x]=k.useState(!1),[S,D]=k.useState(!1),[U,z]=k.useState(null),[q,K]=k.useState(0),[ie,ne]=k.useState(!1),le=C=>{s(C),c(""),m(null),y(!1),x(!1),D(!1),z(null),K(1)},se=()=>{const C=parseFloat(o);if(isNaN(C)||C<=0){z("Please enter a valid amount greater than 0");return}if(C<n.min||n.max!==1/0&&C>n.max){z(`Please enter a valid amount between $${n.min} and $${n.max===1/0?"unlimited":n.max}`);return}z(null),K(2)},me=C=>{m(C),K(3)},V=()=>{y(!0),K(4)},A=async()=>{if(!(!n||!o)){z(null);try{const C=parseFloat(o),j=n.profitPercent,N=(C*j/100).toFixed(0),rt=new Date,qe=new Date;qe.setDate(rt.getDate()+n.duration);const $={userId:r.uid,type:"deposit",amount:C,profitPercent:`${j}%`,plan:n.name,planId:n.id,interest:`$${N}`,duration:n.duration,description:n.description,status:"completed",timestamp:uc(),startDate:Ze.fromDate(rt),nextPaymentDate:Ze.fromDate(qe),interestEarned:0,totalInterestEarned:0};await hg(cc(Yt,"transactions"),$);const oe=Tn(Yt,"users",r.uid),fe=await ts(oe);if(fe.exists()){const Ve=fe.data().balance||0,O=fe.data().goldBalance||0,te=parseFloat(N)/hc;await Bh(oe,{balance:Ve+C,goldBalance:O+te}),e(Ve+C,O+te)}D(!0),K(0),s(null),y(!1),x(!1)}catch(C){z("Failed to process transaction. Please try again."),console.error(C)}}},R=async C=>{C.target.files[0]&&(x(!0),await A())},M=()=>{d?.address&&(navigator.clipboard.writeText(d.address),ne(!0),setTimeout(()=>ne(!1),2e3))};return p.jsxs("div",{className:"section-card",children:[p.jsx("h2",{className:"section-title",children:"Purchase Gold"}),U&&p.jsxs("span",{className:"error-message",children:[p.jsx(_p,{style:{marginRight:"5px"}})," ",U]}),S?p.jsxs("div",{children:[p.jsx("h3",{children:"Transaction Successful!"}),p.jsxs("span",{className:"success-message",children:[p.jsx(no,{style:{marginRight:"5px"}})," Your deposit has been processed successfully!"]}),p.jsx("button",{className:"btn-secondary",onClick:()=>D(!1),children:"Back to Plans"})]}):q===0?p.jsxs(p.Fragment,{children:[p.jsx("p",{children:"Select a gold plan to purchase:"}),p.jsx("div",{className:"gold-plans-container",children:vC.map(C=>p.jsxs("div",{className:`gold-plan-card ${n?.id===C.id?"selected-plan":""}`,onClick:()=>le(C),children:[p.jsx(Lm,{size:36,color:"#D4AF37"}),p.jsx("h3",{className:"plan-title",children:C.name}),p.jsxs("p",{className:"plan-price",children:["$",C.min,"  - ",C.max===1/0?"and above":C.max," USD"]}),p.jsxs("p",{className:"plan-description",children:[p.jsx("strong",{children:"Profit:"})," ",C.profitPercent,"% every ",C.duration," days"]}),p.jsx("p",{className:"plan-description",children:C.description})]},C.id))})]}):q===1?p.jsxs(p.Fragment,{children:[p.jsxs("h3",{children:["Selected Plan: ",n.name]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"deposit-amount",children:"Enter Deposit Amount:"}),p.jsx("input",{id:"deposit-amount",type:"number",value:o,onChange:C=>c(C.target.value),placeholder:`Enter amount between $${n.min} and $${n.max===1/0?"unlimited":n.max}`})]}),p.jsx("button",{className:"btn-primary",onClick:se,children:"Proceed"}),p.jsx("button",{className:"btn-secondary",onClick:()=>K(0),children:"Back"})]}):q===2?p.jsxs(p.Fragment,{children:[p.jsx("h3",{children:"Select a Wallet"}),p.jsx("div",{className:"gold-plans-container",children:gb.map((C,j)=>p.jsxs("div",{className:`gold-plan-card ${d?.type===C.type?"selected-plan":""}`,onClick:()=>me(C),children:[p.jsx(Lm,{size:36,color:"#D4AF37"}),p.jsx("h3",{className:"plan-title",children:C.type})]},j))}),p.jsx("button",{className:"btn-secondary",onClick:()=>K(1),children:"Back"})]}):q===3?p.jsxs(p.Fragment,{children:[p.jsxs("h3",{children:["Selected Plan: ",n.name]}),p.jsxs("p",{children:["Amount: $",o]}),p.jsxs("p",{children:["Please send exactly ",p.jsxs("strong",{children:["$",o]})," to the following address:"]}),p.jsxs("div",{className:"deposit-address",children:[p.jsx("p",{children:p.jsxs("strong",{children:[d.type," Address:"]})}),p.jsx("p",{children:d.address}),p.jsxs("button",{className:"btn-secondary",onClick:M,children:[ie?"Copied!":"Copy Address"," ",p.jsx(qw,{style:{marginLeft:"5px"}})]})]}),p.jsx("p",{children:"After completing your transfer, click the button below to confirm."}),p.jsx("button",{className:"btn-primary",onClick:V,children:"I've Sent the Payment"}),p.jsx("button",{className:"btn-secondary",onClick:()=>K(2),children:"Choose Different Wallet"})]}):q===4?p.jsxs(p.Fragment,{children:[p.jsx("h3",{children:"Confirm Deposit"}),p.jsx("p",{children:"Upload a screenshot of the transaction (for verification, not stored):"}),p.jsx("input",{type:"file",accept:"image/*",onChange:R}),p.jsx("button",{className:"btn-secondary",onClick:()=>K(3),children:"Back"})]}):null]})},TC=({user:r,balance:e,goldBalance:n,updateBalance:s})=>{const[o,c]=k.useState(""),[d,m]=k.useState("usd"),[g,y]=k.useState(""),[b,x]=k.useState(!1),[S,D]=k.useState({text:"",type:""}),U=async()=>{if(D({text:"",type:""}),!o||!g){D({text:"Please select a wallet and enter an amount",type:"error"});return}const z=parseFloat(o);if(isNaN(z)||z<=0){D({text:"Please enter a valid amount",type:"error"});return}const q=d==="usd"?50:1;if(z<q){D({text:`Minimum withdrawal is $${q} USD or ${q}g Gold`,type:"error"});return}if(d==="usd"&&z>e){D({text:"Insufficient USD balance",type:"error"});return}if(d==="gold"&&z>n){D({text:"Insufficient gold balance",type:"error"});return}x(!0);try{const K=d==="usd"?z:z*hc,ie={userId:r.uid,type:"withdrawal",amount:K,profitPercent:d==="gold"?`${z}g`:"0g",status:"pending",walletType:g,timestamp:uc()};await hg(cc(Yt,"transactions"),ie);const ne=Tn(Yt,"users",r.uid),le=await ts(ne);if(le.exists()){const se=le.data().balance||0,me=le.data().goldBalance||0;await Bh(ne,{balance:d==="usd"?se-z:se,goldBalance:d==="gold"?me-z:me}),s(d==="usd"?se-z:se,d==="gold"?me-z:me)}D({text:"Withdrawal request submitted successfully! It will be processed within 24 hours.",type:"success"}),c(""),y("")}catch(K){console.error("Error processing withdrawal:",K),D({text:"Failed to process withdrawal. Please try again.",type:"error"})}finally{x(!1)}};return p.jsxs("div",{className:"section-card",children:[p.jsx("h2",{className:"section-title",children:"Withdraw Funds"}),p.jsx("div",{className:"balance-info",children:p.jsxs("p",{children:["Available Balance: ",p.jsxs("strong",{children:["$",e.toLocaleString()," USD"]})," | ",p.jsxs("strong",{children:[n.toFixed(2),"g Gold"]})]})}),p.jsxs("div",{className:"withdraw-form",children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"withdraw-type",children:"Withdraw Type:"}),p.jsxs("select",{id:"withdraw-type",value:d,onChange:z=>{m(z.target.value),c(""),y("")},children:[p.jsx("option",{value:"usd",children:"USD"}),p.jsx("option",{value:"gold",children:"Gold"})]})]}),p.jsxs("div",{className:"form-group",children:[p.jsxs("label",{htmlFor:"withdraw-amount",children:["Amount to Withdraw ",d==="gold"?"(in grams)":"(in USD)",":"]}),p.jsx("input",{id:"withdraw-amount",type:"number",value:o,onChange:z=>c(z.target.value),placeholder:d==="usd"?"Enter USD amount":"Enter gold amount in grams"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"destination-wallet",children:"Destination Wallet:"}),p.jsxs("select",{id:"destination-wallet",value:g,onChange:z=>y(z.target.value),children:[p.jsx("option",{value:"",children:"Select a wallet"}),gb.map((z,q)=>p.jsx("option",{value:z.type,children:z.type},q))]})]}),S.text&&p.jsxs("div",{className:S.type==="success"?"success-message":"error-message",children:[S.type==="success"?p.jsx(no,{style:{marginRight:"5px"}}):p.jsx(_p,{style:{marginRight:"5px"}}),S.text]}),p.jsx("button",{className:"btn-primary",onClick:U,disabled:b||!o||!g,children:b?"Processing...":"Request Withdrawal"})]}),p.jsxs("div",{className:"withdrawal-info",children:[p.jsx("h4",{children:"Withdrawal Information:"}),p.jsxs("ul",{children:[p.jsx("li",{children:"Withdrawals are processed within 24 hours"}),p.jsxs("li",{children:["Gold withdrawals are converted to USD at ~$",hc,"/g"]}),p.jsx("li",{children:"Minimum withdrawal: $50 USD or 1g Gold"}),p.jsx("li",{children:"Network fees may apply"})]})]})]})},wC=({user:r})=>{const[e,n]=k.useState([]),[s,o]=k.useState(!0),[c,d]=k.useState(null);k.useEffect(()=>{if(!r)return;const g=ub(cc(Yt,"transactions"),gh("userId","==",r.uid),hb("timestamp","desc")),y=dg(g,b=>{const x=[];b.forEach(S=>{x.push({id:S.id,...S.data()})}),n(x),o(!1)},b=>{d("Failed to load transaction history."),console.error(b),o(!1)});return()=>y()},[r]);const m=g=>{switch(g){case"completed":return"status-completed";case"processing":return"status-processing";default:return"status-pending"}};return s?p.jsx("div",{className:"section-card",children:"Loading transaction history..."}):c?p.jsx("div",{className:"section-card error-message",children:c}):p.jsxs("div",{className:"section-card",children:[p.jsx("h2",{className:"section-title",children:"Transaction History"}),e.length===0?p.jsx("p",{children:"No transactions yet."}):p.jsx("div",{className:"table-container",children:p.jsxs("table",{className:"transactions-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Type"}),p.jsx("th",{children:"Amount"}),p.jsx("th",{children:"Profit/Output"}),p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Next Payment"}),p.jsx("th",{children:"Status"})]})}),p.jsx("tbody",{children:e.map(g=>p.jsxs("tr",{children:[p.jsxs("td",{children:[g.type==="deposit"?p.jsx(j_,{className:"icon-deposit"}):p.jsx(k_,{className:"icon-withdraw"}),g.type.charAt(0).toUpperCase()+g.type.slice(1),g.plan&&` (${g.plan})`]}),p.jsxs("td",{children:["$",g.amount.toLocaleString()]}),p.jsx("td",{children:g.interest?`${g.interest} (${g.profitPercent})`:g.profitPercent||"N/A"}),p.jsx("td",{children:g.timestamp?.toDate().toLocaleString()}),p.jsx("td",{children:g.nextPaymentDate?p.jsxs("span",{className:"next-payment",children:[p.jsx(jw,{style:{marginRight:"5px"}}),g.nextPaymentDate.toDate().toLocaleDateString()]}):"N/A"}),p.jsx("td",{children:p.jsx("span",{className:`status-indicator ${m(g.status)}`,children:g.status.charAt(0).toUpperCase()+g.status.slice(1)})})]},g.id))})]})})]})},xC=({user:r})=>{const e=`https://yourwebsite.com/refer/${r.uid}`,[n,s]=k.useState(!1),o=()=>{navigator.clipboard.writeText(e),s(!0),setTimeout(()=>s(!1),2e3)};return p.jsxs("div",{className:"section-card",children:[p.jsx("h2",{className:"section-title",children:"Referral Program"}),p.jsx("p",{children:"Invite friends and earn rewards! Share your unique referral link."}),p.jsxs("div",{className:"referral-container",children:[p.jsx("strong",{children:"Your Referral Link:"}),p.jsx("p",{className:"referral-link",children:e}),p.jsx("button",{className:"btn-primary",onClick:o,children:n?"Copied!":"Copy Link"})]}),p.jsxs("div",{className:"referral-info",children:[p.jsx("h4",{children:"How It Works:"}),p.jsxs("ul",{children:[p.jsx("li",{children:"Share your link with friends"}),p.jsx("li",{children:"Earn 5% bonus on their first deposit"}),p.jsx("li",{children:"Track your referrals in your dashboard"})]})]})]})},SC=({user:r,updateBalance:e})=>{const[n,s]=k.useState([]),[o,c]=k.useState(!0),[d,m]=k.useState(null),[g,y]=k.useState(!1);k.useEffect(()=>{if(!r)return;const D=ub(cc(Yt,"transactions"),gh("userId","==",r.uid),gh("type","==","deposit"),gh("status","==","completed"),hb("timestamp","desc")),U=dg(D,z=>{const q=[];z.forEach(K=>{q.push({id:K.id,...K.data()})}),s(q),c(!1)},z=>{m("Failed to load investments."),console.error(z),c(!1)});return()=>U()},[r]);const b=D=>{if(!D.startDate||!D.nextPaymentDate)return 0;const U=new Date,z=D.nextPaymentDate.toDate();return U>=z?D.amount*parseFloat(D.profitPercent)/100:0},x=async D=>{y(!0);try{const U=b(D);if(U<=0){m("No interest available to claim yet.");return}const z=Tn(Yt,"users",r.uid),q=await ts(z);if(q.exists()){const ne=q.data().balance||0,le=q.data().goldBalance||0,se=U/hc;await Bh(z,{balance:ne+U,goldBalance:le+se}),e(ne+U,le+se)}const K=Tn(Yt,"transactions",D.id),ie=new Date;ie.setDate(ie.getDate()+D.duration),await Bh(K,{nextPaymentDate:Ze.fromDate(ie),interestEarned:U,totalInterestEarned:(D.totalInterestEarned||0)+U}),await hg(cc(Yt,"transactions"),{userId:r.uid,type:"interest",amount:U,description:`Interest from ${D.plan}`,status:"completed",timestamp:uc()}),m(null)}catch(U){m("Failed to claim interest. Please try again."),console.error(U)}finally{y(!1)}},S=D=>D?D.toDate().toLocaleDateString():"N/A";return o?p.jsx("div",{className:"section-card",children:"Loading investments..."}):d?p.jsx("div",{className:"section-card error-message",children:d}):p.jsxs("div",{className:"section-card",children:[p.jsx("h2",{className:"section-title",children:"My Investments"}),n.length===0?p.jsx("p",{children:"No active investments yet."}):p.jsx("div",{className:"investments-container",children:n.map(D=>{const U=b(D),z=D.nextPaymentDate?D.nextPaymentDate.toDate():null,q=z?Math.ceil((z-new Date)/(1e3*60*60*24)):0;return p.jsxs("div",{className:"investment-card",children:[p.jsxs("div",{className:"investment-header",children:[p.jsx("h3",{children:D.plan}),p.jsxs("span",{className:"investment-amount",children:["$",D.amount.toLocaleString()]})]}),p.jsxs("div",{className:"investment-details",children:[p.jsxs("div",{className:"investment-detail",children:[p.jsx("span",{className:"detail-label",children:"Profit Rate:"}),p.jsx("span",{className:"detail-value",children:D.profitPercent})]}),p.jsxs("div",{className:"investment-detail",children:[p.jsx("span",{className:"detail-label",children:"Duration:"}),p.jsxs("span",{className:"detail-value",children:[D.duration," days"]})]}),p.jsxs("div",{className:"investment-detail",children:[p.jsx("span",{className:"detail-label",children:"Start Date:"}),p.jsx("span",{className:"detail-value",children:S(D.startDate)})]}),p.jsxs("div",{className:"investment-detail",children:[p.jsx("span",{className:"detail-label",children:"Next Payment:"}),p.jsx("span",{className:"detail-value",children:S(D.nextPaymentDate)})]}),p.jsxs("div",{className:"investment-detail",children:[p.jsx("span",{className:"detail-label",children:"Days Until Payment:"}),p.jsx("span",{className:"detail-value",children:q>0?q:0})]}),p.jsxs("div",{className:"investment-detail",children:[p.jsx("span",{className:"detail-label",children:"Interest Available:"}),p.jsxs("span",{className:"detail-value",children:["$",U.toFixed(2)]})]}),p.jsxs("div",{className:"investment-detail",children:[p.jsx("span",{className:"detail-label",children:"Total Interest Earned:"}),p.jsxs("span",{className:"detail-value",children:["$",(D.totalInterestEarned||0).toFixed(2)]})]})]}),U>0&&p.jsx("button",{className:"btn-primary",onClick:()=>x(D),disabled:g,children:g?"Processing...":"Claim Interest"})]},D.id)})})]})},AC=()=>{const r=vo(),[e,n]=k.useState(null),[s,o]=k.useState(null),[c,d]=k.useState("dashboard"),[m,g]=k.useState(0),[y,b]=k.useState(0),[x,S]=k.useState(!1),[D,U]=k.useState(!0),[z,q]=k.useState(null);k.useEffect(()=>{const le=E2(ns,se=>{if(se){n(se);const me=Tn(Yt,"users",se.uid),V=dg(me,A=>{if(A.exists()){const R=A.data();o(R),g(R.balance||0),b(R.goldBalance||0),U(!1)}else q("User data not found."),U(!1)},A=>{q("Failed to load user data."),console.error(A),U(!1)});return()=>V()}else r("/login")});return()=>le()},[r]);const K=(le,se)=>{g(le),b(se)},ie=async()=>{try{await QA(ns),r("/login")}catch(le){console.error("Logout error:",le.message),q("Failed to logout. Please try again.")}};if(D)return p.jsx("div",{className:"loading",children:"Loading..."});if(z||!e||!s)return p.jsx("div",{className:"error-message",children:z||"Failed to load dashboard."});const ne=()=>{switch(c){case"dashboard":return p.jsxs("div",{className:"overview-container",children:[p.jsxs("div",{className:"card",children:[p.jsx("h3",{children:"Account Balance"}),p.jsxs("p",{className:"metric",children:["$",m.toLocaleString()]}),p.jsx("p",{className:"subtext",children:"Available USD"})]}),p.jsxs("div",{className:"card",children:[p.jsx("h3",{children:"Gold Holdings"}),p.jsxs("p",{className:"metric",children:[y.toFixed(2),"g"]}),p.jsx("p",{className:"subtext",children:"Pure Gold"})]}),p.jsxs("div",{className:"card",children:[p.jsx("h3",{children:"Total Value"}),p.jsxs("p",{className:"metric",children:["$",(m+y*hc).toLocaleString()]}),p.jsx("p",{className:"subtext",children:"Based on current gold prices"})]}),p.jsxs("div",{className:"section-card",children:[p.jsx("h2",{className:"section-title",children:"Recent Activity"}),p.jsxs("ul",{className:"activity-list",children:[p.jsxs("li",{children:[p.jsx(no,{className:"activity-icon"})," Account created ",p.jsx("span",{className:"activity-time",children:"1 week ago"})]}),m>0&&p.jsxs("li",{children:[p.jsx(no,{className:"activity-icon"})," Deposit of $",m.toLocaleString()," ",p.jsx("span",{className:"activity-time",children:"Recently"})]}),y>0&&p.jsxs("li",{children:[p.jsx(no,{className:"activity-icon"})," Purchased ",y.toFixed(2),"g of gold ",p.jsx("span",{className:"activity-time",children:"Recently"})]})]})]})]});case"deposit":return p.jsx(bC,{user:e,updateBalance:K});case"withdraw":return p.jsx(TC,{user:e,balance:m,goldBalance:y,updateBalance:K});case"history":return p.jsx(wC,{user:e});case"investments":return p.jsx(SC,{user:e,updateBalance:K});case"referral":return p.jsx(xC,{user:e});case"profile":return p.jsx(_C,{user:e});case"settings":return p.jsx(EC,{user:e});default:return null}};return p.jsxs("div",{className:"dashboard-container",children:[p.jsxs("div",{className:`sidebar ${x?"mobile-open":""}`,children:[p.jsxs("div",{className:"sidebar-header",children:[p.jsx(Ww,{size:24,className:"sidebar-icon"}),p.jsx("h2",{className:"gold-text",children:"MyWallet"})]}),p.jsx("button",{className:"mobile-close-btn",onClick:()=>S(!1),children:p.jsx(Kw,{})}),p.jsxs("ul",{className:"nav-list",children:[p.jsxs("li",{className:`nav-item ${c==="dashboard"?"nav-item-active":""}`,onClick:()=>{d("dashboard"),S(!1)},children:[p.jsx(Lw,{})," ",p.jsx("span",{children:"Dashboard"})]}),p.jsxs("li",{className:`nav-item ${c==="deposit"?"nav-item-active":""}`,onClick:()=>{d("deposit"),S(!1)},children:[p.jsx(j_,{})," ",p.jsx("span",{children:"Buy Gold"})]}),p.jsxs("li",{className:`nav-item ${c==="withdraw"?"nav-item-active":""}`,onClick:()=>{d("withdraw"),S(!1)},children:[p.jsx(k_,{})," ",p.jsx("span",{children:"Withdraw"})]}),p.jsxs("li",{className:`nav-item ${c==="investments"?"nav-item-active":""}`,onClick:()=>{d("investments"),S(!1)},children:[p.jsx(Lm,{})," ",p.jsx("span",{children:"My Investments"})]}),p.jsxs("li",{className:`nav-item ${c==="history"?"nav-item-active":""}`,onClick:()=>{d("history"),S(!1)},children:[p.jsx(Gw,{})," ",p.jsx("span",{children:"History"})]}),p.jsxs("li",{className:`nav-item ${c==="referral"?"nav-item-active":""}`,onClick:()=>{d("referral"),S(!1)},children:[p.jsx($w,{})," ",p.jsx("span",{children:"Referral"})]}),p.jsxs("li",{className:`nav-item ${c==="profile"?"nav-item-active":""}`,onClick:()=>{d("profile"),S(!1)},children:[p.jsx(Xw,{})," ",p.jsx("span",{children:"Profile"})]}),p.jsxs("li",{className:`nav-item ${c==="settings"?"nav-item-active":""}`,onClick:()=>{d("settings"),S(!1)},children:[p.jsx(Bw,{})," ",p.jsx("span",{children:"Settings"})]})]}),p.jsxs("div",{className:"logout-btn",onClick:ie,children:[p.jsx(Qw,{})," ",p.jsx("span",{children:"Logout"})]})]}),p.jsxs("div",{className:"main-content",children:[p.jsxs("div",{className:"header",children:[p.jsxs("div",{className:"header-left",children:[p.jsx("button",{className:"mobile-menu-btn",onClick:()=>S(!0),children:p.jsx(Vw,{})}),p.jsx("h1",{className:"title",children:c==="dashboard"?"Dashboard":c==="deposit"?"Buy Gold":c.charAt(0).toUpperCase()+c.slice(1)})]}),p.jsxs("span",{className:"user-info",children:["Balance: ",p.jsxs("strong",{children:["$",m.toLocaleString()]})," | Gold: ",p.jsxs("strong",{children:[y.toFixed(2),"g"]})]})]}),p.jsx("div",{className:"content-area",children:ne()})]}),p.jsx("style",{jsx:!0,children:`
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
      `})]})};function yb(r){return Je({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(r)}const RC=()=>{const[r,e]=k.useState(""),[n,s]=k.useState(""),[o,c]=k.useState(""),d=vo(),m=x=>x&&typeof x.fullName=="string"&&x.fullName.trim().length>1&&Array.isArray(x.wallets)&&x.wallets.length>0,g=async x=>{const S=Tn(Yt,"users",x.uid),D=await ts(S),U=D.exists()?D.data():{};m(U)?d("/dashboard"):d("/profile")},y=async x=>{x.preventDefault();try{const D=(await HA(ns,n,o)).user;await g(D)}catch(S){console.error("Login error:",S.message),e("Login failed. Check your credentials.")}},b=async()=>{const x=new fi;try{const D=(await D2(ns,x)).user,U=Tn(Yt,"users",D.uid);(await ts(U)).exists()||await zh(U,{fullName:D.displayName||"",email:D.email,createdAt:new Date,wallets:[]}),await g(D)}catch(S){console.error("Google login error:",S.message),e("Google login failed. Try again.")}};return p.jsxs("div",{className:"body",children:[p.jsx(vp,{}),p.jsxs("div",{className:"page",children:[p.jsx("h1",{className:"h1",children:"Login"}),p.jsxs("form",{onSubmit:y,className:"login-form",children:[p.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:x=>s(x.target.value),placeholder:"Enter your email"}),p.jsx("input",{className:"input",required:!0,type:"password",value:o,onChange:x=>c(x.target.value),placeholder:"Enter your password"}),p.jsx("button",{type:"submit",className:"btn btn1",children:"Login"}),p.jsxs("button",{type:"button",className:"google-btn",onClick:b,children:[p.jsx(yb,{className:"google-icon"})," Login with Google"]}),p.jsxs("p",{children:["Don't have an account? ",p.jsx(is,{to:"/signup",className:"Login-txt",children:"Signup"})]}),r&&p.jsx("span",{className:"error-text",children:r})]})]})]})},CC=()=>{const[r,e]=k.useState(""),[n,s]=k.useState(""),[o,c]=k.useState(""),[d,m]=k.useState(""),g=vo(),y=async x=>{if(x.preventDefault(),d.length<6){e("Password must be at least 6 characters");return}try{const D=(await FA(ns,n,d)).user;await zh(Tn(Yt,"users",D.uid),{fullName:o,email:n,createdAt:new Date,wallets:[]}),sessionStorage.setItem("newSignup","true"),g("/profile")}catch(S){console.error("Signup error:",S.message),e("Signup failed. Try again.")}},b=async()=>{const x=new fi;try{const D=(await D2(ns,x)).user;await zh(Tn(Yt,"users",D.uid),{fullName:D.displayName||"",email:D.email,createdAt:new Date,wallets:[]},{merge:!0}),sessionStorage.setItem("newSignup","true"),g("/profile")}catch(S){console.error("Google signup error:",S.message),e("Google signup failed. Try again.")}};return p.jsxs("div",{className:"body",children:[p.jsx(vp,{}),p.jsxs("div",{className:"page",children:[p.jsx("h1",{className:"h1",children:"Signup"}),p.jsxs("form",{onSubmit:y,className:"signup-form",children:[p.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:x=>s(x.target.value),placeholder:"Enter your email"}),p.jsx("input",{className:"input",required:!0,type:"text",value:o,onChange:x=>c(x.target.value),placeholder:"Enter your name"}),p.jsx("input",{className:"input",required:!0,type:"password",value:d,onChange:x=>m(x.target.value),placeholder:"Enter your password"}),p.jsx("button",{type:"submit",className:"btn btn1",children:"Sign Up"}),p.jsxs("button",{type:"button",className:"google-btn",onClick:b,children:[p.jsx(yb,{className:"google-icon"})," Signup with Google"]}),p.jsxs("p",{children:["Already have an account? ",p.jsx(is,{to:"/login",className:"Login-txt",children:"Login"})]}),r&&p.jsx("span",{className:"error-text",children:r})]})]})]})},IC=()=>{const[r,e]=k.useState(0),[n,s]=k.useState(0),[o,c]=k.useState(!0),[d,m]=k.useState(null),[g,y]=k.useState("USD"),[b,x]=k.useState(3e4),[S,D]=k.useState([]),[U,z]=k.useState(!1),[q,K]=k.useState(5),[ie,ne]=k.useState(new Date),le=k.useRef(),se=k.useRef(),me=async()=>{try{c(!0),m(null);const C=1950+(Math.random()*50-25),j=parseFloat(C.toFixed(2));le.current&&(le.current.classList.add("price-updating"),setTimeout(()=>{s(r),e(j),ne(new Date),le.current&&le.current.classList.remove("price-updating")},500)),D(N=>[...N,{price:j,timestamp:new Date}].slice(-20))}catch(C){m("Failed to fetch gold prices. Please try again later."),console.error("Error fetching gold price:",C)}finally{c(!1)}};k.useEffect(()=>{n&&Math.abs(r-n)>q&&U&&("Notification"in window&&Notification.permission==="granted"&&new Notification("Gold Price Alert",{body:`Gold price has ${r>n?"increased":"decreased"} by $${Math.abs(r-n).toFixed(2)}.`}),le.current&&(le.current.classList.add("price-alert"),setTimeout(()=>{le.current&&le.current.classList.remove("price-alert")},2e3)))},[r,n,q,U]),k.useEffect(()=>{me();const C=setInterval(()=>{me()},b);return()=>clearInterval(C)},[b,g]);const V=()=>{"Notification"in window&&Notification.requestPermission().then(C=>{z(C==="granted")})},A=()=>n?((r-n)/n*100).toFixed(2):0,R=C=>new Intl.NumberFormat("en-US",{style:"currency",currency:g,minimumFractionDigits:2}).format(C),M=()=>{if(S.length<2)return null;const C=S.map(qe=>qe.price),j=Math.max(...C),N=Math.min(...C),rt=j-N;return p.jsx("div",{className:"mini-chart",ref:se,children:S.map((qe,$)=>{if($===0)return null;const oe=rt>0?(qe.price-N)/rt*40:20,fe=qe.price>S[$-1].price;return p.jsx("div",{className:`chart-bar ${fe?"chart-bar-up":"chart-bar-down"}`,style:{height:`${oe}px`}},$)})})};return p.jsxs("div",{className:"gold-price-tracker",children:[p.jsxs("div",{className:"tracker-header",children:[p.jsxs("h2",{children:[p.jsx("span",{className:"gold-icon",children:"🥇"}),"Gold Price Tracker"]}),p.jsxs("div",{className:"last-updated",children:["Last updated: ",ie.toLocaleTimeString()]})]}),o&&p.jsxs("div",{className:"loading-state",children:[p.jsx("div",{className:"spinner"}),p.jsx("p",{children:"Loading current gold price..."})]}),d&&p.jsxs("div",{className:"error-state",children:[p.jsx("div",{className:"error-icon",children:"⚠️"}),p.jsx("p",{children:d}),p.jsx("button",{onClick:me,className:"retry-btn",children:"Retry"})]}),!o&&!d&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"price-display",children:[p.jsxs("div",{ref:le,className:"current-price",children:[R(r),n&&p.jsxs("span",{className:`price-change ${r>=n?"positive":"negative"}`,children:[r>=n?"↗":"↘",R(Math.abs(r-n)),"(",A(),"%)"]})]}),M()]}),p.jsxs("div",{className:"price-history",children:[p.jsx("h3",{children:"Recent Trends"}),p.jsx("div",{className:"history-bars",children:S.slice(-6).map((C,j)=>p.jsxs("div",{className:"history-bar",children:[p.jsx("div",{className:"bar-time",children:C.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),p.jsx("div",{className:"bar-price",children:R(C.price)})]},j))})]})]}),p.jsxs("div",{className:"tracker-controls",children:[p.jsxs("div",{className:"control-group",children:[p.jsx("label",{children:"Currency:"}),p.jsxs("select",{value:g,onChange:C=>y(C.target.value),className:"control-select",children:[p.jsx("option",{value:"USD",children:"USD"}),p.jsx("option",{value:"EUR",children:"EUR"}),p.jsx("option",{value:"GBP",children:"GBP"}),p.jsx("option",{value:"JPY",children:"JPY"})]})]}),p.jsxs("div",{className:"control-group",children:[p.jsx("label",{children:"Refresh every:"}),p.jsxs("select",{value:b,onChange:C=>x(Number(C.target.value)),className:"control-select",children:[p.jsx("option",{value:1e4,children:"10 seconds"}),p.jsx("option",{value:3e4,children:"30 seconds"}),p.jsx("option",{value:6e4,children:"1 minute"}),p.jsx("option",{value:3e5,children:"5 minutes"})]})]}),p.jsx("div",{className:"control-group",children:p.jsxs("label",{children:[p.jsx("input",{type:"checkbox",checked:U,onChange:V}),"Price alerts"]})}),U&&p.jsxs("div",{className:"control-group",children:[p.jsx("label",{children:"Alert threshold:"}),p.jsxs("select",{value:q,onChange:C=>K(Number(C.target.value)),className:"control-select",children:[p.jsx("option",{value:1,children:"$1.00"}),p.jsx("option",{value:5,children:"$5.00"}),p.jsx("option",{value:10,children:"$10.00"}),p.jsx("option",{value:25,children:"$25.00"})]})]})]}),p.jsx("style",{jsx:!0,children:`
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
          
          .price-history h3 {
            color: #718096;
          }
          
          .bar-time {
            color: #718096;
          }
        }
      `})]})},NC=()=>{const r=vo(),[e,n]=k.useState({fullName:"",username:"",location:"",dob:"",phone:"",gender:"",occupation:"",bio:"",btcWallet:"",ethWallet:"",usdtWallet:""}),[s,o]=k.useState(!0),[c,d]=k.useState(!1),[m,g]=k.useState(""),[y,b]=k.useState(""),[x,S]=k.useState(null),[D,U]=k.useState(!1),z=ie=>{const{name:ne,value:le}=ie.target;n(se=>({...se,[ne]:le}))};k.useEffect(()=>{U(!0);const ie=E2(ns,async ne=>{if(!ne){r("/login");return}S(ne);try{const le=Tn(Yt,"users",ne.uid),se=await ts(le);if(se.exists()){const me=se.data(),V=me.wallets&&me.wallets.find(M=>M.type==="btc")?.address||"",A=me.wallets&&me.wallets.find(M=>M.type==="eth")?.address||"",R=me.wallets&&me.wallets.find(M=>M.type==="usdt")?.address||"";n(M=>({...M,...me,btcWallet:V,ethWallet:A,usdtWallet:R}))}}catch(le){console.error("Failed to load profile:",le),g("Failed to load profile. Please try again.")}finally{o(!1)}});return()=>ie()},[r]);const q=()=>e.fullName.trim().length>1&&e.username.trim().length>1&&e.phone.trim().length>=10&&e.dob,K=async ie=>{if(ie.preventDefault(),!!x){if(!q()){g("Please fill in all required fields.");return}d(!0),g(""),b("");try{const ne=Tn(Yt,"users",x.uid),le=[];e.btcWallet&&le.push({type:"btc",address:e.btcWallet}),e.ethWallet&&le.push({type:"eth",address:e.ethWallet}),e.usdtWallet&&le.push({type:"usdt",address:e.usdtWallet});const se={...e,email:x.email,wallets:le,updatedAt:uc()};delete se.btcWallet,delete se.ethWallet,delete se.usdtWallet,(await ts(ne)).data()?.createdAt||(se.createdAt=uc()),await zh(ne,se,{merge:!0}),b("Profile updated successfully!"),setTimeout(()=>r("/dashboard"),1200)}catch(ne){console.error("Save failed:",ne),g("Could not save profile. Please try again.")}finally{d(!1)}}};return s?p.jsxs("div",{className:"loader-container",children:[p.jsx("div",{className:"spinner"}),p.jsx("p",{children:"Loading Profile..."})]}):p.jsxs("div",{className:"profile-page",children:[p.jsxs("div",{className:`profile-container ${D?"mounted":""}`,children:[p.jsx("h1",{className:"profile-title",children:"Complete Your Profile"}),p.jsx("form",{onSubmit:K,className:"profile-form",children:p.jsxs("div",{className:"form-grid",children:[["fullName","username"].map((ie,ne)=>p.jsx("div",{className:"form-group animated-item",style:{animationDelay:`${ne*.1}s`},children:p.jsx("input",{name:ie,type:"text",placeholder:ie==="fullName"?"Full Name *":"Username *",value:e[ie],onChange:z,required:!0,className:"form-input"})},ie)),p.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.2s"},children:p.jsx("input",{name:"location",type:"text",placeholder:"Location",value:e.location,onChange:z,className:"form-input"})}),p.jsxs("div",{className:"form-group animated-item",style:{animationDelay:"0.3s"},children:[p.jsx("label",{className:"input-label",children:"Date of Birth *"}),p.jsx("input",{name:"dob",type:"date",value:e.dob,onChange:z,className:"form-input",required:!0})]}),p.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.4s"},children:p.jsx("input",{name:"phone",type:"tel",placeholder:"Phone Number *",value:e.phone,onChange:z,required:!0,className:"form-input"})}),p.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.5s"},children:p.jsxs("select",{name:"gender",value:e.gender,onChange:z,className:"form-select",children:[p.jsx("option",{value:"",children:"Select Gender"}),p.jsx("option",{value:"Male",children:"Male"}),p.jsx("option",{value:"Female",children:"Female"}),p.jsx("option",{value:"Other",children:"Other"})]})}),p.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.6s"},children:p.jsx("input",{name:"occupation",type:"text",placeholder:"Occupation",value:e.occupation,onChange:z,className:"form-input"})}),p.jsx("div",{className:"form-group full-width animated-item",style:{animationDelay:"0.7s"},children:p.jsx("textarea",{name:"bio",placeholder:"Bio (Tell us about yourself)",value:e.bio,onChange:z,rows:3,className:"form-textarea"})}),p.jsxs("div",{className:"wallet-section full-width animated-item",style:{animationDelay:"0.8s"},children:[p.jsx("h3",{className:"wallet-title",children:"Wallet Addresses"}),["btcWallet","ethWallet","usdtWallet"].map((ie,ne)=>p.jsx("div",{className:"form-group",children:p.jsx("input",{name:ie,type:"text",placeholder:ie==="btcWallet"?"BTC Wallet Address":ie==="ethWallet"?"ETH Wallet Address":"USDT Wallet Address",value:e[ie],onChange:z,className:"form-input"})},ie))]}),m&&p.jsx("div",{className:"error-message full-width animated-item",children:m}),y&&p.jsx("div",{className:"success-message full-width animated-item",children:y}),p.jsxs("div",{className:"form-actions full-width animated-item",style:{animationDelay:"0.9s"},children:[p.jsx("button",{type:"button",onClick:()=>r("/dashboard"),className:"btn-secondary",children:"Cancel"}),p.jsx("button",{type:"submit",className:"btn-primary",disabled:c||!q(),children:c?p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"btn-spinner"}),"Saving..."]}):"Save Profile"})]})]})})]}),p.jsx("style",{jsx:!0,children:`
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
      `})]})},DC=()=>p.jsxs("div",{style:rh.container,children:[p.jsx("h1",{style:rh.heading,children:"404 - Page Not Found"}),p.jsx("p",{style:rh.text,children:"The page you are looking for doesn't exist."}),p.jsx(is,{to:"/",style:rh.button,children:"Go Home"})]}),rh={container:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#f8f9fa",color:"#333",textAlign:"center"},heading:{fontSize:"2.5rem",marginBottom:"10px"},text:{fontSize:"1.2rem",marginBottom:"20px"},button:{padding:"10px 20px",background:"#007bff",color:"#fff",borderRadius:"5px",textDecoration:"none",fontWeight:"bold"}};function OC(){return p.jsxs(p.Fragment,{children:[p.jsx(vp,{}),p.jsx(Sw,{}),p.jsx(Zw,{}),p.jsx(ex,{}),p.jsx(rx,{})]})}function MC(){return p.jsx(hw,{basename:"/GoldcCorps",children:p.jsxs(q4,{children:[p.jsx(Lr,{path:"/",element:p.jsx(OC,{})}),p.jsx(Lr,{path:"/login",element:p.jsx(RC,{})}),p.jsx(Lr,{path:"/signup",element:p.jsx(CC,{})}),p.jsx(Lr,{path:"/dashboard",element:p.jsx(AC,{})}),p.jsx(Lr,{path:"/profile",element:p.jsx(NC,{})}),p.jsx(Lr,{path:"/stock",element:p.jsx(IC,{})}),p.jsx(Lr,{path:"*",element:p.jsx(DC,{})})," "]})})}ZT.createRoot(document.getElementById("root")).render(p.jsx(k.StrictMode,{children:p.jsx(MC,{})}));
