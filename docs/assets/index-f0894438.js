function xg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pp={exports:{}},ka={},Tp={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=Symbol.for("react.element"),Ig=Symbol.for("react.portal"),kg=Symbol.for("react.fragment"),Cg=Symbol.for("react.strict_mode"),Og=Symbol.for("react.profiler"),bg=Symbol.for("react.provider"),Ag=Symbol.for("react.context"),Dg=Symbol.for("react.forward_ref"),$g=Symbol.for("react.suspense"),Mg=Symbol.for("react.memo"),jg=Symbol.for("react.lazy"),ud=Symbol.iterator;function Ng(e){return e===null||typeof e!="object"?null:(e=ud&&e[ud]||e["@@iterator"],typeof e=="function"?e:null)}var xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ip=Object.assign,kp={};function Or(e,t,n){this.props=e,this.context=t,this.refs=kp,this.updater=n||xp}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cp(){}Cp.prototype=Or.prototype;function Nu(e,t,n){this.props=e,this.context=t,this.refs=kp,this.updater=n||xp}var Lu=Nu.prototype=new Cp;Lu.constructor=Nu;Ip(Lu,Or.prototype);Lu.isPureReactComponent=!0;var cd=Array.isArray,Op=Object.prototype.hasOwnProperty,Ru={current:null},bp={key:!0,ref:!0,__self:!0,__source:!0};function Ap(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Op.call(t,r)&&!bp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ni,type:e,key:o,ref:a,props:i,_owner:Ru.current}}function Lg(e,t){return{$$typeof:Ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ni}function Rg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dd=/\/+/g;function Rs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rg(""+e.key):t.toString(36)}function bo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ni:case Ig:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Rs(a,0):r,cd(i)?(n="",e!=null&&(n=e.replace(dd,"$&/")+"/"),bo(i,t,n,"",function(d){return d})):i!=null&&(zu(i)&&(i=Lg(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(dd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",cd(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Rs(o,s);a+=bo(o,t,n,l,i)}else if(l=Ng(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Rs(o,s++),a+=bo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function eo(e,t,n){if(e==null)return e;var r=[],i=0;return bo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function zg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Ao={transition:null},Fg={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:Ru};function Dp(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!zu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Or;H.Fragment=kg;H.Profiler=Og;H.PureComponent=Nu;H.StrictMode=Cg;H.Suspense=$g;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fg;H.act=Dp;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ip({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ru.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Op.call(t,l)&&!bp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Ni,type:e.type,key:i,ref:o,props:r,_owner:a}};H.createContext=function(e){return e={$$typeof:Ag,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bg,_context:e},e.Consumer=e};H.createElement=Ap;H.createFactory=function(e){var t=Ap.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Dg,render:e}};H.isValidElement=zu;H.lazy=function(e){return{$$typeof:jg,_payload:{_status:-1,_result:e},_init:zg}};H.memo=function(e,t){return{$$typeof:Mg,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Ao.transition;Ao.transition={};try{e()}finally{Ao.transition=t}};H.unstable_act=Dp;H.useCallback=function(e,t){return Be.current.useCallback(e,t)};H.useContext=function(e){return Be.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};H.useEffect=function(e,t){return Be.current.useEffect(e,t)};H.useId=function(){return Be.current.useId()};H.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Be.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};H.useRef=function(e){return Be.current.useRef(e)};H.useState=function(e){return Be.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Be.current.useTransition()};H.version="18.3.1";Tp.exports=H;var F=Tp.exports;const lt=Ep(F),fd=xg({__proto__:null,default:lt},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg=F,Ug=Symbol.for("react.element"),Wg=Symbol.for("react.fragment"),Hg=Object.prototype.hasOwnProperty,Vg=Bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xg={key:!0,ref:!0,__self:!0,__source:!0};function $p(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Hg.call(t,r)&&!Xg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ug,type:e,key:o,ref:a,props:i,_owner:Vg.current}}ka.Fragment=Wg;ka.jsx=$p;ka.jsxs=$p;Pp.exports=ka;var P=Pp.exports,Pl={},Mp={exports:{}},rt={},jp={exports:{}},Np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,L){var B=k.length;k.push(L);e:for(;0<B;){var V=B-1>>>1,Q=k[V];if(0<i(Q,L))k[V]=L,k[B]=Q,B=V;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var L=k[0],B=k.pop();if(B!==L){k[0]=B;e:for(var V=0,Q=k.length,Re=Q>>>1;V<Re;){var te=2*(V+1)-1,Kt=k[te],Ke=te+1,Rt=k[Ke];if(0>i(Kt,B))Ke<Q&&0>i(Rt,Kt)?(k[V]=Rt,k[Ke]=B,V=Ke):(k[V]=Kt,k[te]=B,V=te);else if(Ke<Q&&0>i(Rt,B))k[V]=Rt,k[Ke]=B,V=Ke;else break e}}return L}function i(k,L){var B=k.sortIndex-L.sortIndex;return B!==0?B:k.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],d=[],g=1,y=null,p=3,w=!1,m=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(k){for(var L=n(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=k)r(d),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(d)}}function c(k){if(E=!1,u(k),!m)if(n(l)!==null)m=!0,z(v);else{var L=n(d);L!==null&&U(c,L.startTime-k)}}function v(k,L){m=!1,E&&(E=!1,h(T),T=-1),w=!0;var B=p;try{for(u(L),y=n(l);y!==null&&(!(y.expirationTime>L)||k&&!O());){var V=y.callback;if(typeof V=="function"){y.callback=null,p=y.priorityLevel;var Q=V(y.expirationTime<=L);L=e.unstable_now(),typeof Q=="function"?y.callback=Q:y===n(l)&&r(l),u(L)}else r(l);y=n(l)}if(y!==null)var Re=!0;else{var te=n(d);te!==null&&U(c,te.startTime-L),Re=!1}return Re}finally{y=null,p=B,w=!1}}var S=!1,_=null,T=-1,b=5,$=-1;function O(){return!(e.unstable_now()-$<b)}function x(){if(_!==null){var k=e.unstable_now();$=k;var L=!0;try{L=_(!0,k)}finally{L?D():(S=!1,_=null)}}else S=!1}var D;if(typeof f=="function")D=function(){f(x)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,R=j.port2;j.port1.onmessage=x,D=function(){R.postMessage(null)}}else D=function(){I(x,0)};function z(k){_=k,S||(S=!0,D())}function U(k,L){T=I(function(){k(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){m||w||(m=!0,z(v))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var B=p;p=L;try{return k()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,L){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var B=p;p=k;try{return L()}finally{p=B}},e.unstable_scheduleCallback=function(k,L,B){var V=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?V+B:V):B=V,k){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=B+Q,k={id:g++,callback:L,priorityLevel:k,startTime:B,expirationTime:Q,sortIndex:-1},B>V?(k.sortIndex=B,t(d,k),n(l)===null&&k===n(d)&&(E?(h(T),T=-1):E=!0,U(c,B-V))):(k.sortIndex=Q,t(l,k),m||w||(m=!0,z(v))),k},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(k){var L=p;return function(){var B=p;p=L;try{return k.apply(this,arguments)}finally{p=B}}}})(Np);jp.exports=Np;var Qg=jp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg=F,nt=Qg;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lp=new Set,pi={};function Wn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(pi[e]=t,e=0;e<t.length;e++)Lp.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,Gg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pd={},md={};function Kg(e){return Tl.call(md,e)?!0:Tl.call(pd,e)?!1:Gg.test(e)?md[e]=!0:(pd[e]=!0,!1)}function qg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zg(e,t,n,r){if(t===null||typeof t>"u"||qg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function Bu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fu,Bu);De[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fu,Bu);De[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fu,Bu);De[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uu(e,t,n,r){var i=De.hasOwnProperty(t)?De[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zg(t,n,i,r)&&(n=null),r||i===null?Kg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=Yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Wu=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),zp=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),Vu=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),Fp=Symbol.for("react.offscreen"),hd=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=hd&&e[hd]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,zs;function Zr(e){if(zs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zs=t&&t[1]||""}return`
`+zs+e}var Fs=!1;function Bs(e,t){if(!e||Fs)return"";Fs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Fs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zr(e):""}function Jg(e){switch(e.tag){case 5:return Zr(e.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return e=Bs(e.type,!1),e;case 11:return e=Bs(e.type.render,!1),e;case 1:return e=Bs(e.type,!0),e;default:return""}}function Cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Kn:return"Portal";case xl:return"Profiler";case Wu:return"StrictMode";case Il:return"Suspense";case kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zp:return(e.displayName||"Context")+".Consumer";case Rp:return(e._context.displayName||"Context")+".Provider";case Hu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vu:return t=e.displayName||null,t!==null?t:Cl(e.type)||"Memo";case nn:t=e._payload,e=e._init;try{return Cl(e(t))}catch{}}return null}function ev(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cl(t);case 8:return t===Wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tv(e){var t=Bp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=tv(e))}function Up(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wp(e,t){t=t.checked,t!=null&&Uu(e,"checked",t,!1)}function bl(e,t){Wp(e,t);var n=yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Al(e,t.type,n):t.hasOwnProperty("defaultValue")&&Al(e,t.type,yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Al(e,t,n){(t!=="number"||Ko(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jr=Array.isArray;function ur(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Jr(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yn(n)}}function Hp(e,t){var n=yn(t.value),r=yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,Xp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nv=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(e){nv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ri[t]=ri[e]})});function Qp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ri.hasOwnProperty(e)&&ri[e]?(""+t).trim():t+"px"}function Yp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var rv=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(rv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function jl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nl=null;function Xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ll=null,cr=null,dr=null;function wd(e){if(e=zi(e)){if(typeof Ll!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Da(t),Ll(e.stateNode,e.type,t))}}function Gp(e){cr?dr?dr.push(e):dr=[e]:cr=e}function Kp(){if(cr){var e=cr,t=dr;if(dr=cr=null,wd(e),t)for(e=0;e<t.length;e++)wd(t[e])}}function qp(e,t){return e(t)}function Zp(){}var Us=!1;function Jp(e,t,n){if(Us)return e(t,n);Us=!0;try{return qp(e,t,n)}finally{Us=!1,(cr!==null||dr!==null)&&(Zp(),Kp())}}function hi(e,t){var n=e.stateNode;if(n===null)return null;var r=Da(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Rl=!1;if(Vt)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Rl=!1}function iv(e,t,n,r,i,o,a,s,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var ii=!1,qo=null,Zo=!1,zl=null,ov={onError:function(e){ii=!0,qo=e}};function av(e,t,n,r,i,o,a,s,l){ii=!1,qo=null,iv.apply(ov,arguments)}function sv(e,t,n,r,i,o,a,s,l){if(av.apply(this,arguments),ii){if(ii){var d=qo;ii=!1,qo=null}else throw Error(A(198));Zo||(Zo=!0,zl=d)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function em(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _d(e){if(Hn(e)!==e)throw Error(A(188))}function lv(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _d(i),e;if(o===r)return _d(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function tm(e){return e=lv(e),e!==null?nm(e):null}function nm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nm(e);if(t!==null)return t;e=e.sibling}return null}var rm=nt.unstable_scheduleCallback,Ed=nt.unstable_cancelCallback,uv=nt.unstable_shouldYield,cv=nt.unstable_requestPaint,ge=nt.unstable_now,dv=nt.unstable_getCurrentPriorityLevel,Qu=nt.unstable_ImmediatePriority,im=nt.unstable_UserBlockingPriority,Jo=nt.unstable_NormalPriority,fv=nt.unstable_LowPriority,om=nt.unstable_IdlePriority,Ca=null,$t=null;function pv(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Ca,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:gv,mv=Math.log,hv=Math.LN2;function gv(e){return e>>>=0,e===0?32:31-(mv(e)/hv|0)|0}var io=64,oo=4194304;function ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ea(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ei(s):(o&=a,o!==0&&(r=ei(o)))}else a=n&~i,a!==0?r=ei(a):o!==0&&(r=ei(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),i=1<<n,r|=e[n],t&=~i;return r}function vv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-_t(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=vv(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function am(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function Ws(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function Sv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_t(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Yu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function sm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lm,Gu,um,cm,dm,Bl=!1,ao=[],un=null,cn=null,dn=null,gi=new Map,vi=new Map,on=[],wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function Br(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=zi(t),t!==null&&Gu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _v(e,t,n,r,i){switch(t){case"focusin":return un=Br(un,e,t,n,r,i),!0;case"dragenter":return cn=Br(cn,e,t,n,r,i),!0;case"mouseover":return dn=Br(dn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return gi.set(o,Br(gi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,Br(vi.get(o)||null,e,t,n,r,i)),!0}return!1}function fm(e){var t=On(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=em(n),t!==null){e.blockedOn=t,dm(e.priority,function(){um(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Nl=r,n.target.dispatchEvent(r),Nl=null}else return t=zi(n),t!==null&&Gu(t),e.blockedOn=n,!1;t.shift()}return!0}function Td(e,t,n){Do(e)&&n.delete(t)}function Ev(){Bl=!1,un!==null&&Do(un)&&(un=null),cn!==null&&Do(cn)&&(cn=null),dn!==null&&Do(dn)&&(dn=null),gi.forEach(Td),vi.forEach(Td)}function Ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,Ev)))}function yi(e){function t(i){return Ur(i,e)}if(0<ao.length){Ur(ao[0],e);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&Ur(un,e),cn!==null&&Ur(cn,e),dn!==null&&Ur(dn,e),gi.forEach(t),vi.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)fm(n),n.blockedOn===null&&on.shift()}var fr=Gt.ReactCurrentBatchConfig,ta=!0;function Pv(e,t,n,r){var i=q,o=fr.transition;fr.transition=null;try{q=1,Ku(e,t,n,r)}finally{q=i,fr.transition=o}}function Tv(e,t,n,r){var i=q,o=fr.transition;fr.transition=null;try{q=4,Ku(e,t,n,r)}finally{q=i,fr.transition=o}}function Ku(e,t,n,r){if(ta){var i=Ul(e,t,n,r);if(i===null)Js(e,t,r,na,n),Pd(e,r);else if(_v(i,e,t,n,r))r.stopPropagation();else if(Pd(e,r),t&4&&-1<wv.indexOf(e)){for(;i!==null;){var o=zi(i);if(o!==null&&lm(o),o=Ul(e,t,n,r),o===null&&Js(e,t,r,na,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Js(e,t,r,null,n)}}var na=null;function Ul(e,t,n,r){if(na=null,e=Xu(r),e=On(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=em(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return na=e,null}function pm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dv()){case Qu:return 1;case im:return 4;case Jo:case fv:return 16;case om:return 536870912;default:return 16}default:return 16}}var sn=null,qu=null,$o=null;function mm(){if($o)return $o;var e,t=qu,n=t.length,r,i="value"in sn?sn.value:sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return $o=i.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function xd(){return!1}function it(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?so:xd,this.isPropagationStopped=xd,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=it(br),Ri=fe({},br,{view:0,detail:0}),xv=it(Ri),Hs,Vs,Wr,Oa=fe({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(Hs=e.screenX-Wr.screenX,Vs=e.screenY-Wr.screenY):Vs=Hs=0,Wr=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Vs}}),Id=it(Oa),Iv=fe({},Oa,{dataTransfer:0}),kv=it(Iv),Cv=fe({},Ri,{relatedTarget:0}),Xs=it(Cv),Ov=fe({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=it(Ov),Av=fe({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dv=it(Av),$v=fe({},br,{data:0}),kd=it($v),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nv[e])?!!t[e]:!1}function Ju(){return Lv}var Rv=fe({},Ri,{key:function(e){if(e.key){var t=Mv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zv=it(Rv),Fv=fe({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=it(Fv),Bv=fe({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),Uv=it(Bv),Wv=fe({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=it(Wv),Vv=fe({},Oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=it(Vv),Qv=[9,13,27,32],ec=Vt&&"CompositionEvent"in window,oi=null;Vt&&"documentMode"in document&&(oi=document.documentMode);var Yv=Vt&&"TextEvent"in window&&!oi,hm=Vt&&(!ec||oi&&8<oi&&11>=oi),Od=String.fromCharCode(32),bd=!1;function gm(e,t){switch(e){case"keyup":return Qv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function Gv(e,t){switch(e){case"compositionend":return vm(t);case"keypress":return t.which!==32?null:(bd=!0,Od);case"textInput":return e=t.data,e===Od&&bd?null:e;default:return null}}function Kv(e,t){if(Zn)return e==="compositionend"||!ec&&gm(e,t)?(e=mm(),$o=qu=sn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hm&&t.locale!=="ko"?null:t.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qv[e.type]:t==="textarea"}function ym(e,t,n,r){Gp(r),t=ra(t,"onChange"),0<t.length&&(n=new Zu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ai=null,Si=null;function Zv(e){Om(e,0)}function ba(e){var t=tr(e);if(Up(t))return e}function Jv(e,t){if(e==="change")return t}var Sm=!1;if(Vt){var Qs;if(Vt){var Ys="oninput"in document;if(!Ys){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),Ys=typeof Dd.oninput=="function"}Qs=Ys}else Qs=!1;Sm=Qs&&(!document.documentMode||9<document.documentMode)}function $d(){ai&&(ai.detachEvent("onpropertychange",wm),Si=ai=null)}function wm(e){if(e.propertyName==="value"&&ba(Si)){var t=[];ym(t,Si,e,Xu(e)),Jp(Zv,t)}}function ey(e,t,n){e==="focusin"?($d(),ai=t,Si=n,ai.attachEvent("onpropertychange",wm)):e==="focusout"&&$d()}function ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ba(Si)}function ny(e,t){if(e==="click")return ba(t)}function ry(e,t){if(e==="input"||e==="change")return ba(t)}function iy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:iy;function wi(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tl.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function Md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jd(e,t){var n=Md(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Md(n)}}function _m(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_m(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Em(){for(var e=window,t=Ko();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ko(e.document)}return t}function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function oy(e){var t=Em(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_m(n.ownerDocument.documentElement,n)){if(r!==null&&tc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=jd(n,o);var a=jd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ay=Vt&&"documentMode"in document&&11>=document.documentMode,Jn=null,Wl=null,si=null,Hl=!1;function Nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||Jn==null||Jn!==Ko(r)||(r=Jn,"selectionStart"in r&&tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),si&&wi(si,r)||(si=r,r=ra(Wl,"onSelect"),0<r.length&&(t=new Zu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Gs={},Pm={};Vt&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Aa(e){if(Gs[e])return Gs[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pm)return Gs[e]=t[n];return e}var Tm=Aa("animationend"),xm=Aa("animationiteration"),Im=Aa("animationstart"),km=Aa("transitionend"),Cm=new Map,Ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){Cm.set(e,t),Wn(t,[e])}for(var Ks=0;Ks<Ld.length;Ks++){var qs=Ld[Ks],sy=qs.toLowerCase(),ly=qs[0].toUpperCase()+qs.slice(1);wn(sy,"on"+ly)}wn(Tm,"onAnimationEnd");wn(xm,"onAnimationIteration");wn(Im,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(km,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));function Rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sv(r,t,void 0,e),e.currentTarget=null}function Om(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Rd(i,s,d),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,d=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Rd(i,s,d),o=l}}}if(Zo)throw e=zl,Zo=!1,zl=null,e}function re(e,t){var n=t[Gl];n===void 0&&(n=t[Gl]=new Set);var r=e+"__bubble";n.has(r)||(bm(t,e,2,!1),n.add(r))}function Zs(e,t,n){var r=0;t&&(r|=4),bm(n,e,r,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function _i(e){if(!e[uo]){e[uo]=!0,Lp.forEach(function(n){n!=="selectionchange"&&(uy.has(n)||Zs(n,!1,e),Zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,Zs("selectionchange",!1,t))}}function bm(e,t,n,r){switch(pm(t)){case 1:var i=Pv;break;case 4:i=Tv;break;default:i=Ku}n=i.bind(null,t,n,e),i=void 0,!Rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Js(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=On(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Jp(function(){var d=o,g=Xu(n),y=[];e:{var p=Cm.get(e);if(p!==void 0){var w=Zu,m=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":w=zv;break;case"focusin":m="focus",w=Xs;break;case"focusout":m="blur",w=Xs;break;case"beforeblur":case"afterblur":w=Xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Uv;break;case Tm:case xm:case Im:w=bv;break;case km:w=Hv;break;case"scroll":w=xv;break;case"wheel":w=Xv;break;case"copy":case"cut":case"paste":w=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Cd}var E=(t&4)!==0,I=!E&&e==="scroll",h=E?p!==null?p+"Capture":null:p;E=[];for(var f=d,u;f!==null;){u=f;var c=u.stateNode;if(u.tag===5&&c!==null&&(u=c,h!==null&&(c=hi(f,h),c!=null&&E.push(Ei(f,c,u)))),I)break;f=f.return}0<E.length&&(p=new w(p,m,null,n,g),y.push({event:p,listeners:E}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==Nl&&(m=n.relatedTarget||n.fromElement)&&(On(m)||m[Xt]))break e;if((w||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,w?(m=n.relatedTarget||n.toElement,w=d,m=m?On(m):null,m!==null&&(I=Hn(m),m!==I||m.tag!==5&&m.tag!==6)&&(m=null)):(w=null,m=d),w!==m)){if(E=Id,c="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(E=Cd,c="onPointerLeave",h="onPointerEnter",f="pointer"),I=w==null?p:tr(w),u=m==null?p:tr(m),p=new E(c,f+"leave",w,n,g),p.target=I,p.relatedTarget=u,c=null,On(g)===d&&(E=new E(h,f+"enter",m,n,g),E.target=u,E.relatedTarget=I,c=E),I=c,w&&m)t:{for(E=w,h=m,f=0,u=E;u;u=Xn(u))f++;for(u=0,c=h;c;c=Xn(c))u++;for(;0<f-u;)E=Xn(E),f--;for(;0<u-f;)h=Xn(h),u--;for(;f--;){if(E===h||h!==null&&E===h.alternate)break t;E=Xn(E),h=Xn(h)}E=null}else E=null;w!==null&&zd(y,p,w,E,!1),m!==null&&I!==null&&zd(y,I,m,E,!0)}}e:{if(p=d?tr(d):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var v=Jv;else if(Ad(p))if(Sm)v=ry;else{v=ty;var S=ey}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(v=ny);if(v&&(v=v(e,d))){ym(y,v,n,g);break e}S&&S(e,p,d),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&Al(p,"number",p.value)}switch(S=d?tr(d):window,e){case"focusin":(Ad(S)||S.contentEditable==="true")&&(Jn=S,Wl=d,si=null);break;case"focusout":si=Wl=Jn=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,Nd(y,n,g);break;case"selectionchange":if(ay)break;case"keydown":case"keyup":Nd(y,n,g)}var _;if(ec)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Zn?gm(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(hm&&n.locale!=="ko"&&(Zn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Zn&&(_=mm()):(sn=g,qu="value"in sn?sn.value:sn.textContent,Zn=!0)),S=ra(d,T),0<S.length&&(T=new kd(T,e,null,n,g),y.push({event:T,listeners:S}),_?T.data=_:(_=vm(n),_!==null&&(T.data=_)))),(_=Yv?Gv(e,n):Kv(e,n))&&(d=ra(d,"onBeforeInput"),0<d.length&&(g=new kd("onBeforeInput","beforeinput",null,n,g),y.push({event:g,listeners:d}),g.data=_))}Om(y,t)})}function Ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ra(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=hi(e,n),o!=null&&r.unshift(Ei(e,o,i)),o=hi(e,t),o!=null&&r.push(Ei(e,o,i))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,d=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&d!==null&&(s=d,i?(l=hi(n,o),l!=null&&a.unshift(Ei(n,l,s))):i||(l=hi(n,o),l!=null&&a.push(Ei(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var cy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Fd(e){return(typeof e=="string"?e:""+e).replace(cy,`
`).replace(dy,"")}function co(e,t,n){if(t=Fd(t),Fd(e)!==t&&n)throw Error(A(425))}function ia(){}var Vl=null,Xl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,fy=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(e){return Bd.resolve(null).then(e).catch(my)}:Yl;function my(e){setTimeout(function(){throw e})}function el(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yi(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ar,Pi="__reactProps$"+Ar,Xt="__reactContainer$"+Ar,Gl="__reactEvents$"+Ar,hy="__reactListeners$"+Ar,gy="__reactHandles$"+Ar;function On(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ud(e);e!==null;){if(n=e[Dt])return n;e=Ud(e)}return t}e=n,n=e.parentNode}return null}function zi(e){return e=e[Dt]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Da(e){return e[Pi]||null}var Kl=[],nr=-1;function _n(e){return{current:e}}function oe(e){0>nr||(e.current=Kl[nr],Kl[nr]=null,nr--)}function ee(e,t){nr++,Kl[nr]=e.current,e.current=t}var Sn={},Le=_n(Sn),Xe=_n(!1),Nn=Sn;function vr(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function oa(){oe(Xe),oe(Le)}function Wd(e,t,n){if(Le.current!==Sn)throw Error(A(168));ee(Le,t),ee(Xe,n)}function Am(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,ev(e)||"Unknown",i));return fe({},n,r)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,Nn=Le.current,ee(Le,e),ee(Xe,Xe.current),!0}function Hd(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Am(e,t,Nn),r.__reactInternalMemoizedMergedChildContext=e,oe(Xe),oe(Le),ee(Le,e)):oe(Xe),ee(Xe,n)}var Bt=null,$a=!1,tl=!1;function Dm(e){Bt===null?Bt=[e]:Bt.push(e)}function vy(e){$a=!0,Dm(e)}function En(){if(!tl&&Bt!==null){tl=!0;var e=0,t=q;try{var n=Bt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,$a=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(e+1)),rm(Qu,En),i}finally{q=t,tl=!1}}return null}var rr=[],ir=0,sa=null,la=0,at=[],st=0,Ln=null,Ut=1,Wt="";function kn(e,t){rr[ir++]=la,rr[ir++]=sa,sa=e,la=t}function $m(e,t,n){at[st++]=Ut,at[st++]=Wt,at[st++]=Ln,Ln=e;var r=Ut;e=Wt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var o=32-_t(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ut=1<<32-_t(t)+i|n<<i|r,Wt=o+e}else Ut=1<<o|n<<i|r,Wt=e}function nc(e){e.return!==null&&(kn(e,1),$m(e,1,0))}function rc(e){for(;e===sa;)sa=rr[--ir],rr[ir]=null,la=rr[--ir],rr[ir]=null;for(;e===Ln;)Ln=at[--st],at[st]=null,Wt=at[--st],at[st]=null,Ut=at[--st],at[st]=null}var et=null,Je=null,se=!1,wt=null;function Mm(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Je=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Ut,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,Je=null,!0):!1;default:return!1}}function ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if(se){var t=Je;if(t){var n=t;if(!Vd(e,t)){if(ql(e))throw Error(A(418));t=fn(n.nextSibling);var r=et;t&&Vd(e,t)?Mm(r,n):(e.flags=e.flags&-4097|2,se=!1,et=e)}}else{if(ql(e))throw Error(A(418));e.flags=e.flags&-4097|2,se=!1,et=e}}}function Xd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function fo(e){if(e!==et)return!1;if(!se)return Xd(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=Je)){if(ql(e))throw jm(),Error(A(418));for(;t;)Mm(e,t),t=fn(t.nextSibling)}if(Xd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=et?fn(e.stateNode.nextSibling):null;return!0}function jm(){for(var e=Je;e;)e=fn(e.nextSibling)}function yr(){Je=et=null,se=!1}function ic(e){wt===null?wt=[e]:wt.push(e)}var yy=Gt.ReactCurrentBatchConfig;function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qd(e){var t=e._init;return t(e._payload)}function Nm(e){function t(h,f){if(e){var u=h.deletions;u===null?(h.deletions=[f],h.flags|=16):u.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=gn(h,f),h.index=0,h.sibling=null,h}function o(h,f,u){return h.index=u,e?(u=h.alternate,u!==null?(u=u.index,u<f?(h.flags|=2,f):u):(h.flags|=2,f)):(h.flags|=1048576,f)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,u,c){return f===null||f.tag!==6?(f=ll(u,h.mode,c),f.return=h,f):(f=i(f,u),f.return=h,f)}function l(h,f,u,c){var v=u.type;return v===qn?g(h,f,u.props.children,c,u.key):f!==null&&(f.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===nn&&Qd(v)===f.type)?(c=i(f,u.props),c.ref=Hr(h,f,u),c.return=h,c):(c=Bo(u.type,u.key,u.props,null,h.mode,c),c.ref=Hr(h,f,u),c.return=h,c)}function d(h,f,u,c){return f===null||f.tag!==4||f.stateNode.containerInfo!==u.containerInfo||f.stateNode.implementation!==u.implementation?(f=ul(u,h.mode,c),f.return=h,f):(f=i(f,u.children||[]),f.return=h,f)}function g(h,f,u,c,v){return f===null||f.tag!==7?(f=Mn(u,h.mode,c,v),f.return=h,f):(f=i(f,u),f.return=h,f)}function y(h,f,u){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ll(""+f,h.mode,u),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case to:return u=Bo(f.type,f.key,f.props,null,h.mode,u),u.ref=Hr(h,null,f),u.return=h,u;case Kn:return f=ul(f,h.mode,u),f.return=h,f;case nn:var c=f._init;return y(h,c(f._payload),u)}if(Jr(f)||zr(f))return f=Mn(f,h.mode,u,null),f.return=h,f;po(h,f)}return null}function p(h,f,u,c){var v=f!==null?f.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return v!==null?null:s(h,f,""+u,c);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case to:return u.key===v?l(h,f,u,c):null;case Kn:return u.key===v?d(h,f,u,c):null;case nn:return v=u._init,p(h,f,v(u._payload),c)}if(Jr(u)||zr(u))return v!==null?null:g(h,f,u,c,null);po(h,u)}return null}function w(h,f,u,c,v){if(typeof c=="string"&&c!==""||typeof c=="number")return h=h.get(u)||null,s(f,h,""+c,v);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case to:return h=h.get(c.key===null?u:c.key)||null,l(f,h,c,v);case Kn:return h=h.get(c.key===null?u:c.key)||null,d(f,h,c,v);case nn:var S=c._init;return w(h,f,u,S(c._payload),v)}if(Jr(c)||zr(c))return h=h.get(u)||null,g(f,h,c,v,null);po(f,c)}return null}function m(h,f,u,c){for(var v=null,S=null,_=f,T=f=0,b=null;_!==null&&T<u.length;T++){_.index>T?(b=_,_=null):b=_.sibling;var $=p(h,_,u[T],c);if($===null){_===null&&(_=b);break}e&&_&&$.alternate===null&&t(h,_),f=o($,f,T),S===null?v=$:S.sibling=$,S=$,_=b}if(T===u.length)return n(h,_),se&&kn(h,T),v;if(_===null){for(;T<u.length;T++)_=y(h,u[T],c),_!==null&&(f=o(_,f,T),S===null?v=_:S.sibling=_,S=_);return se&&kn(h,T),v}for(_=r(h,_);T<u.length;T++)b=w(_,h,T,u[T],c),b!==null&&(e&&b.alternate!==null&&_.delete(b.key===null?T:b.key),f=o(b,f,T),S===null?v=b:S.sibling=b,S=b);return e&&_.forEach(function(O){return t(h,O)}),se&&kn(h,T),v}function E(h,f,u,c){var v=zr(u);if(typeof v!="function")throw Error(A(150));if(u=v.call(u),u==null)throw Error(A(151));for(var S=v=null,_=f,T=f=0,b=null,$=u.next();_!==null&&!$.done;T++,$=u.next()){_.index>T?(b=_,_=null):b=_.sibling;var O=p(h,_,$.value,c);if(O===null){_===null&&(_=b);break}e&&_&&O.alternate===null&&t(h,_),f=o(O,f,T),S===null?v=O:S.sibling=O,S=O,_=b}if($.done)return n(h,_),se&&kn(h,T),v;if(_===null){for(;!$.done;T++,$=u.next())$=y(h,$.value,c),$!==null&&(f=o($,f,T),S===null?v=$:S.sibling=$,S=$);return se&&kn(h,T),v}for(_=r(h,_);!$.done;T++,$=u.next())$=w(_,h,T,$.value,c),$!==null&&(e&&$.alternate!==null&&_.delete($.key===null?T:$.key),f=o($,f,T),S===null?v=$:S.sibling=$,S=$);return e&&_.forEach(function(x){return t(h,x)}),se&&kn(h,T),v}function I(h,f,u,c){if(typeof u=="object"&&u!==null&&u.type===qn&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case to:e:{for(var v=u.key,S=f;S!==null;){if(S.key===v){if(v=u.type,v===qn){if(S.tag===7){n(h,S.sibling),f=i(S,u.props.children),f.return=h,h=f;break e}}else if(S.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===nn&&Qd(v)===S.type){n(h,S.sibling),f=i(S,u.props),f.ref=Hr(h,S,u),f.return=h,h=f;break e}n(h,S);break}else t(h,S);S=S.sibling}u.type===qn?(f=Mn(u.props.children,h.mode,c,u.key),f.return=h,h=f):(c=Bo(u.type,u.key,u.props,null,h.mode,c),c.ref=Hr(h,f,u),c.return=h,h=c)}return a(h);case Kn:e:{for(S=u.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===u.containerInfo&&f.stateNode.implementation===u.implementation){n(h,f.sibling),f=i(f,u.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=ul(u,h.mode,c),f.return=h,h=f}return a(h);case nn:return S=u._init,I(h,f,S(u._payload),c)}if(Jr(u))return m(h,f,u,c);if(zr(u))return E(h,f,u,c);po(h,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,u),f.return=h,h=f):(n(h,f),f=ll(u,h.mode,c),f.return=h,h=f),a(h)):n(h,f)}return I}var Sr=Nm(!0),Lm=Nm(!1),ua=_n(null),ca=null,or=null,oc=null;function ac(){oc=or=ca=null}function sc(e){var t=ua.current;oe(ua),e._currentValue=t}function Jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){ca=e,oc=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(oc!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(ca===null)throw Error(A(308));or=e,ca.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var bn=null;function lc(e){bn===null?bn=[e]:bn.push(e)}function Rm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rn=!1;function uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,lc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yu(e,n)}}function Yd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function da(e,t,n,r){var i=e.updateQueue;rn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,d=l.next;l.next=null,a===null?o=d:a.next=d,a=l;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=l))}if(o!==null){var y=i.baseState;a=0,g=d=l=null,s=o;do{var p=s.lane,w=s.eventTime;if((r&p)===p){g!==null&&(g=g.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,E=s;switch(p=t,w=n,E.tag){case 1:if(m=E.payload,typeof m=="function"){y=m.call(w,y,p);break e}y=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=E.payload,p=typeof m=="function"?m.call(w,y,p):m,p==null)break e;y=fe({},y,p);break e;case 2:rn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else w={eventTime:w,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=w,l=y):g=g.next=w,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(g===null&&(l=y),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);zn|=a,e.lanes=a,e.memoizedState=y}}function Gd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Fi={},Mt=_n(Fi),Ti=_n(Fi),xi=_n(Fi);function An(e){if(e===Fi)throw Error(A(174));return e}function cc(e,t){switch(ee(xi,t),ee(Ti,e),ee(Mt,Fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$l(t,e)}oe(Mt),ee(Mt,t)}function wr(){oe(Mt),oe(Ti),oe(xi)}function Fm(e){An(xi.current);var t=An(Mt.current),n=$l(t,e.type);t!==n&&(ee(Ti,e),ee(Mt,n))}function dc(e){Ti.current===e&&(oe(Mt),oe(Ti))}var ce=_n(0);function fa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function fc(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var No=Gt.ReactCurrentDispatcher,rl=Gt.ReactCurrentBatchConfig,Rn=0,de=null,we=null,Pe=null,pa=!1,li=!1,Ii=0,Sy=0;function $e(){throw Error(A(321))}function pc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function mc(e,t,n,r,i,o){if(Rn=o,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,No.current=e===null||e.memoizedState===null?Py:Ty,e=n(r,i),li){o=0;do{if(li=!1,Ii=0,25<=o)throw Error(A(301));o+=1,Pe=we=null,t.updateQueue=null,No.current=xy,e=n(r,i)}while(li)}if(No.current=ma,t=we!==null&&we.next!==null,Rn=0,Pe=we=de=null,pa=!1,t)throw Error(A(300));return e}function hc(){var e=Ii!==0;return Ii=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?de.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function pt(){if(we===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Pe===null?de.memoizedState:Pe.next;if(t!==null)Pe=t,we=e;else{if(e===null)throw Error(A(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Pe===null?de.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function ki(e,t){return typeof t=="function"?t(e):t}function il(e){var t=pt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=we,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,d=o;do{var g=d.lane;if((Rn&g)===g)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var y={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(s=l=y,a=r):l=l.next=y,de.lanes|=g,zn|=g}d=d.next}while(d!==null&&d!==o);l===null?a=r:l.next=s,Tt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,de.lanes|=o,zn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ol(e){var t=pt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Tt(o,t.memoizedState)||(Ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bm(){}function Um(e,t){var n=de,r=pt(),i=t(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ve=!0),r=r.queue,gc(Vm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Ci(9,Hm.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(A(349));Rn&30||Wm(n,t,i)}return i}function Wm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hm(e,t,n,r){t.value=n,t.getSnapshot=r,Xm(t)&&Qm(e)}function Vm(e,t,n){return n(function(){Xm(t)&&Qm(e)})}function Xm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Qm(e){var t=Qt(e,1);t!==null&&Et(t,e,1,-1)}function Kd(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},t.queue=e,e=e.dispatch=Ey.bind(null,de,e),[t.memoizedState,e]}function Ci(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ym(){return pt().memoizedState}function Lo(e,t,n,r){var i=It();de.flags|=e,i.memoizedState=Ci(1|t,n,void 0,r===void 0?null:r)}function Ma(e,t,n,r){var i=pt();r=r===void 0?null:r;var o=void 0;if(we!==null){var a=we.memoizedState;if(o=a.destroy,r!==null&&pc(r,a.deps)){i.memoizedState=Ci(t,n,o,r);return}}de.flags|=e,i.memoizedState=Ci(1|t,n,o,r)}function qd(e,t){return Lo(8390656,8,e,t)}function gc(e,t){return Ma(2048,8,e,t)}function Gm(e,t){return Ma(4,2,e,t)}function Km(e,t){return Ma(4,4,e,t)}function qm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zm(e,t,n){return n=n!=null?n.concat([e]):null,Ma(4,4,qm.bind(null,t,e),n)}function vc(){}function Jm(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function eh(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function th(e,t,n){return Rn&21?(Tt(n,t)||(n=am(),de.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function wy(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=rl.transition;rl.transition={};try{e(!1),t()}finally{q=n,rl.transition=r}}function nh(){return pt().memoizedState}function _y(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rh(e))ih(t,n);else if(n=Rm(e,t,n,r),n!==null){var i=Fe();Et(n,e,r,i),oh(n,t,r)}}function Ey(e,t,n){var r=hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rh(e))ih(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Tt(s,a)){var l=t.interleaved;l===null?(i.next=i,lc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Rm(e,t,i,r),n!==null&&(i=Fe(),Et(n,e,r,i),oh(n,t,r))}}function rh(e){var t=e.alternate;return e===de||t!==null&&t===de}function ih(e,t){li=pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yu(e,n)}}var ma={readContext:ft,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},Py={readContext:ft,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:qd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4194308,4,qm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=It();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_y.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:Kd,useDebugValue:vc,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=Kd(!1),t=e[0];return e=wy.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=It();if(se){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Ie===null)throw Error(A(349));Rn&30||Wm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,qd(Vm.bind(null,r,o,e),[e]),r.flags|=2048,Ci(9,Hm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=It(),t=Ie.identifierPrefix;if(se){var n=Wt,r=Ut;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ii++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ty={readContext:ft,useCallback:Jm,useContext:ft,useEffect:gc,useImperativeHandle:Zm,useInsertionEffect:Gm,useLayoutEffect:Km,useMemo:eh,useReducer:il,useRef:Ym,useState:function(){return il(ki)},useDebugValue:vc,useDeferredValue:function(e){var t=pt();return th(t,we.memoizedState,e)},useTransition:function(){var e=il(ki)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Bm,useSyncExternalStore:Um,useId:nh,unstable_isNewReconciler:!1},xy={readContext:ft,useCallback:Jm,useContext:ft,useEffect:gc,useImperativeHandle:Zm,useInsertionEffect:Gm,useLayoutEffect:Km,useMemo:eh,useReducer:ol,useRef:Ym,useState:function(){return ol(ki)},useDebugValue:vc,useDeferredValue:function(e){var t=pt();return we===null?t.memoizedState=e:th(t,we.memoizedState,e)},useTransition:function(){var e=ol(ki)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Bm,useSyncExternalStore:Um,useId:nh,unstable_isNewReconciler:!1};function yt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function eu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ja={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=hn(e),o=Ht(r,i);o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(Et(t,e,i,r),jo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=hn(e),o=Ht(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(Et(t,e,i,r),jo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=hn(e),i=Ht(n,r);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,r),t!==null&&(Et(t,e,r,n),jo(t,e,r))}};function Zd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!wi(n,r)||!wi(i,o):!0}function ah(e,t,n){var r=!1,i=Sn,o=t.contextType;return typeof o=="object"&&o!==null?o=ft(o):(i=Qe(t)?Nn:Le.current,r=t.contextTypes,o=(r=r!=null)?vr(e,i):Sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ja,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Jd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ja.enqueueReplaceState(t,t.state,null)}function tu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},uc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ft(o):(o=Qe(t)?Nn:Le.current,i.context=vr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(eu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ja.enqueueReplaceState(i,i.state,null),da(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _r(e,t){try{var n="",r=t;do n+=Jg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function al(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Iy=typeof WeakMap=="function"?WeakMap:Map;function sh(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ga||(ga=!0,fu=r),nu(e,t)},n}function lh(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){nu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){nu(e,t),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ef(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Iy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Fy.bind(null,e,t,n),t.then(e,e))}function tf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var ky=Gt.ReactCurrentOwner,Ve=!1;function ze(e,t,n,r){t.child=e===null?Lm(t,null,n,r):Sr(t,e.child,n,r)}function rf(e,t,n,r,i){n=n.render;var o=t.ref;return pr(t,i),r=mc(e,t,n,r,o,i),n=hc(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(se&&n&&nc(t),t.flags|=1,ze(e,t,r,i),t.child)}function of(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!xc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,uh(e,t,o,r,i)):(e=Bo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:wi,n(a,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function uh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(wi(o,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return ru(e,t,n,r,i)}function ch(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(sr,qe),qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(sr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(sr,qe),qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(sr,qe),qe|=r;return ze(e,t,i,n),t.child}function dh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ru(e,t,n,r,i){var o=Qe(n)?Nn:Le.current;return o=vr(t,o),pr(t,i),n=mc(e,t,n,r,o,i),r=hc(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(se&&r&&nc(t),t.flags|=1,ze(e,t,n,i),t.child)}function af(e,t,n,r,i){if(Qe(n)){var o=!0;aa(t)}else o=!1;if(pr(t,i),t.stateNode===null)Ro(e,t),ah(t,n,r),tu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=ft(d):(d=Qe(n)?Nn:Le.current,d=vr(t,d));var g=n.getDerivedStateFromProps,y=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==d)&&Jd(t,a,r,d),rn=!1;var p=t.memoizedState;a.state=p,da(t,r,a,i),l=t.memoizedState,s!==r||p!==l||Xe.current||rn?(typeof g=="function"&&(eu(t,n,g,r),l=t.memoizedState),(s=rn||Zd(t,n,s,r,p,l,d))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,zm(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:yt(t.type,s),a.props=d,y=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ft(l):(l=Qe(n)?Nn:Le.current,l=vr(t,l));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==y||p!==l)&&Jd(t,a,r,l),rn=!1,p=t.memoizedState,a.state=p,da(t,r,a,i);var m=t.memoizedState;s!==y||p!==m||Xe.current||rn?(typeof w=="function"&&(eu(t,n,w,r),m=t.memoizedState),(d=rn||Zd(t,n,d,r,p,m,l)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=l,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return iu(e,t,n,r,o,i)}function iu(e,t,n,r,i,o){dh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Hd(t,n,!1),Yt(e,t,o);r=t.stateNode,ky.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Sr(t,e.child,null,o),t.child=Sr(t,null,s,o)):ze(e,t,s,o),t.memoizedState=r.state,i&&Hd(t,n,!0),t.child}function fh(e){var t=e.stateNode;t.pendingContext?Wd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wd(e,t.context,!1),cc(e,t.containerInfo)}function sf(e,t,n,r,i){return yr(),ic(i),t.flags|=256,ze(e,t,n,r),t.child}var ou={dehydrated:null,treeContext:null,retryLane:0};function au(e){return{baseLanes:e,cachePool:null,transitions:null}}function ph(e,t,n){var r=t.pendingProps,i=ce.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ce,i&1),e===null)return Zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ra(a,r,0,null),e=Mn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=au(n),t.memoizedState=ou,e):yc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Cy(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=gn(s,o):(o=Mn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?au(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ou,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yc(e,t){return t=Ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,r){return r!==null&&ic(r),Sr(t,e.child,null,n),e=yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=al(Error(A(422))),mo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ra({mode:"visible",children:r.children},i,0,null),o=Mn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Sr(t,e.child,null,a),t.child.memoizedState=au(a),t.memoizedState=ou,o);if(!(t.mode&1))return mo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(A(419)),r=al(o,r,void 0),mo(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ve||s){if(r=Ie,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),Et(r,e,i,-1))}return Tc(),r=al(Error(A(421))),mo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=By.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Je=fn(i.nextSibling),et=t,se=!0,wt=null,e!==null&&(at[st++]=Ut,at[st++]=Wt,at[st++]=Ln,Ut=e.id,Wt=e.overflow,Ln=t),t=yc(t,r.children),t.flags|=4096,t)}function lf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jl(e.return,t,n)}function sl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function mh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ze(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lf(e,n,t);else if(e.tag===19)lf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sl(t,!0,n,null,o);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oy(e,t,n){switch(t.tag){case 3:fh(t),yr();break;case 5:Fm(t);break;case 1:Qe(t.type)&&aa(t);break;case 4:cc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(ua,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?ph(e,t,n):(ee(ce,ce.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);ee(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,ch(e,t,n)}return Yt(e,t,n)}var hh,su,gh,vh;hh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};su=function(){};gh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,An(Mt.current);var o=null;switch(n){case"input":i=Ol(e,i),r=Ol(e,r),o=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),o=[];break;case"textarea":i=Dl(e,i),r=Dl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ia)}Ml(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(pi.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var l=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==s&&(l!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(pi.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&re("scroll",e),o||s===l||(o=[])):(o=o||[]).push(d,l))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};vh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function by(e,t,n){var r=t.pendingProps;switch(rc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Qe(t.type)&&oa(),Me(t),null;case 3:return r=t.stateNode,wr(),oe(Xe),oe(Le),fc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wt!==null&&(hu(wt),wt=null))),su(e,t),Me(t),null;case 5:dc(t);var i=An(xi.current);if(n=t.type,e!==null&&t.stateNode!=null)gh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Me(t),null}if(e=An(Mt.current),fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dt]=t,r[Pi]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<ti.length;i++)re(ti[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":gd(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":yd(r,o),re("invalid",r)}Ml(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&co(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&co(r.textContent,s,e),i=["children",""+s]):pi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&re("scroll",r)}switch(n){case"input":no(r),vd(r,o,!0);break;case"textarea":no(r),Sd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ia)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Dt]=t,e[Pi]=r,hh(e,t,!1,!1),t.stateNode=e;e:{switch(a=jl(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<ti.length;i++)re(ti[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":gd(e,r),i=Ol(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),re("invalid",e);break;case"textarea":yd(e,r),i=Dl(e,r),re("invalid",e);break;default:i=r}Ml(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Yp(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xp(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&mi(e,l):typeof l=="number"&&mi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(pi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&re("scroll",e):l!=null&&Uu(e,o,l,a))}switch(n){case"input":no(e),vd(e,r,!1);break;case"textarea":no(e),Sd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ur(e,!!r.multiple,o,!1):r.defaultValue!=null&&ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)vh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=An(xi.current),An(Mt.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(o=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&co(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return Me(t),null;case 13:if(oe(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Je!==null&&t.mode&1&&!(t.flags&128))jm(),yr(),t.flags|=98560,o=!1;else if(o=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Dt]=t}else yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),o=!1}else wt!==null&&(hu(wt),wt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?_e===0&&(_e=3):Tc())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return wr(),su(e,t),e===null&&_i(t.stateNode.containerInfo),Me(t),null;case 10:return sc(t.type._context),Me(t),null;case 17:return Qe(t.type)&&oa(),Me(t),null;case 19:if(oe(ce),o=t.memoizedState,o===null)return Me(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Vr(o,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=fa(e),a!==null){for(t.flags|=128,Vr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ce,ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&ge()>Er&&(t.flags|=128,r=!0,Vr(o,!1),t.lanes=4194304)}else{if(!r)if(e=fa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!se)return Me(t),null}else 2*ge()-o.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,Vr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ge(),t.sibling=null,n=ce.current,ee(ce,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return Pc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Ay(e,t){switch(rc(t),t.tag){case 1:return Qe(t.type)&&oa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),oe(Xe),oe(Le),fc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return dc(t),null;case 13:if(oe(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ce),null;case 4:return wr(),null;case 10:return sc(t.type._context),null;case 22:case 23:return Pc(),null;case 24:return null;default:return null}}var ho=!1,Ne=!1,Dy=typeof WeakSet=="function"?WeakSet:Set,N=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function lu(e,t,n){try{n()}catch(r){me(e,t,r)}}var uf=!1;function $y(e,t){if(Vl=ta,e=Em(),tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,d=0,g=0,y=e,p=null;t:for(;;){for(var w;y!==n||i!==0&&y.nodeType!==3||(s=a+i),y!==o||r!==0&&y.nodeType!==3||(l=a+r),y.nodeType===3&&(a+=y.nodeValue.length),(w=y.firstChild)!==null;)p=y,y=w;for(;;){if(y===e)break t;if(p===n&&++d===i&&(s=a),p===o&&++g===r&&(l=a),(w=y.nextSibling)!==null)break;y=p,p=y.parentNode}y=w}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xl={focusedElem:e,selectionRange:n},ta=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var E=m.memoizedProps,I=m.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?E:yt(t.type,E),I);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var u=t.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(c){me(t,t.return,c)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return m=uf,uf=!1,m}function ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&lu(t,n,o)}i=i.next}while(i!==r)}}function Na(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function uu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yh(e){var t=e.alternate;t!==null&&(e.alternate=null,yh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[Pi],delete t[Gl],delete t[hy],delete t[gy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sh(e){return e.tag===5||e.tag===3||e.tag===4}function cf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ia));else if(r!==4&&(e=e.child,e!==null))for(cu(e,t,n),e=e.sibling;e!==null;)cu(e,t,n),e=e.sibling}function du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(du(e,t,n),e=e.sibling;e!==null;)du(e,t,n),e=e.sibling}var Ce=null,St=!1;function Zt(e,t,n){for(n=n.child;n!==null;)wh(e,t,n),n=n.sibling}function wh(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Ca,n)}catch{}switch(n.tag){case 5:Ne||ar(n,t);case 6:var r=Ce,i=St;Ce=null,Zt(e,t,n),Ce=r,St=i,Ce!==null&&(St?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(St?(e=Ce,n=n.stateNode,e.nodeType===8?el(e.parentNode,n):e.nodeType===1&&el(e,n),yi(e)):el(Ce,n.stateNode));break;case 4:r=Ce,i=St,Ce=n.stateNode.containerInfo,St=!0,Zt(e,t,n),Ce=r,St=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&lu(n,t,a),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Ne&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){me(n,t,s)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Zt(e,t,n),Ne=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function df(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dy),t.forEach(function(r){var i=Uy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ce=s.stateNode,St=!1;break e;case 3:Ce=s.stateNode.containerInfo,St=!0;break e;case 4:Ce=s.stateNode.containerInfo,St=!0;break e}s=s.return}if(Ce===null)throw Error(A(160));wh(o,a,i),Ce=null,St=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){me(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_h(t,e),t=t.sibling}function _h(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),xt(e),r&4){try{ui(3,e,e.return),Na(3,e)}catch(E){me(e,e.return,E)}try{ui(5,e,e.return)}catch(E){me(e,e.return,E)}}break;case 1:gt(t,e),xt(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(gt(t,e),xt(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var i=e.stateNode;try{mi(i,"")}catch(E){me(e,e.return,E)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Wp(i,o),jl(s,a);var d=jl(s,o);for(a=0;a<l.length;a+=2){var g=l[a],y=l[a+1];g==="style"?Yp(i,y):g==="dangerouslySetInnerHTML"?Xp(i,y):g==="children"?mi(i,y):Uu(i,g,y,d)}switch(s){case"input":bl(i,o);break;case"textarea":Hp(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?ur(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?ur(i,!!o.multiple,o.defaultValue,!0):ur(i,!!o.multiple,o.multiple?[]:"",!1))}i[Pi]=o}catch(E){me(e,e.return,E)}}break;case 6:if(gt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(E){me(e,e.return,E)}}break;case 3:if(gt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yi(t.containerInfo)}catch(E){me(e,e.return,E)}break;case 4:gt(t,e),xt(e);break;case 13:gt(t,e),xt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_c=ge())),r&4&&df(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(d=Ne)||g,gt(t,e),Ne=d):gt(t,e),xt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(N=e,g=e.child;g!==null;){for(y=N=g;N!==null;){switch(p=N,w=p.child,p.tag){case 0:case 11:case 14:case 15:ui(4,p,p.return);break;case 1:ar(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(E){me(r,n,E)}}break;case 5:ar(p,p.return);break;case 22:if(p.memoizedState!==null){pf(y);continue}}w!==null?(w.return=p,N=w):pf(y)}g=g.sibling}e:for(g=null,y=e;;){if(y.tag===5){if(g===null){g=y;try{i=y.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=y.stateNode,l=y.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Qp("display",a))}catch(E){me(e,e.return,E)}}}else if(y.tag===6){if(g===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(E){me(e,e.return,E)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:gt(t,e),xt(e),r&4&&df(e);break;case 21:break;default:gt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sh(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mi(i,""),r.flags&=-33);var o=cf(e);du(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=cf(e);cu(e,s,a);break;default:throw Error(A(161))}}catch(l){me(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function My(e,t,n){N=e,Eh(e)}function Eh(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ho;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ne;s=ho;var d=Ne;if(ho=a,(Ne=l)&&!d)for(N=i;N!==null;)a=N,l=a.child,a.tag===22&&a.memoizedState!==null?mf(i):l!==null?(l.return=a,N=l):mf(i);for(;o!==null;)N=o,Eh(o),o=o.sibling;N=i,ho=s,Ne=d}ff(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):ff(e)}}function ff(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||Na(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Gd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var y=g.dehydrated;y!==null&&yi(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ne||t.flags&512&&uu(t)}catch(p){me(t,t.return,p)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function pf(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function mf(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Na(4,t)}catch(l){me(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){me(t,i,l)}}var o=t.return;try{uu(t)}catch(l){me(t,o,l)}break;case 5:var a=t.return;try{uu(t)}catch(l){me(t,a,l)}}}catch(l){me(t,t.return,l)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var jy=Math.ceil,ha=Gt.ReactCurrentDispatcher,Sc=Gt.ReactCurrentOwner,dt=Gt.ReactCurrentBatchConfig,X=0,Ie=null,Se=null,be=0,qe=0,sr=_n(0),_e=0,Oi=null,zn=0,La=0,wc=0,ci=null,He=null,_c=0,Er=1/0,zt=null,ga=!1,fu=null,mn=null,go=!1,ln=null,va=0,di=0,pu=null,zo=-1,Fo=0;function Fe(){return X&6?ge():zo!==-1?zo:zo=ge()}function hn(e){return e.mode&1?X&2&&be!==0?be&-be:yy.transition!==null?(Fo===0&&(Fo=am()),Fo):(e=q,e!==0||(e=window.event,e=e===void 0?16:pm(e.type)),e):1}function Et(e,t,n,r){if(50<di)throw di=0,pu=null,Error(A(185));Li(e,n,r),(!(X&2)||e!==Ie)&&(e===Ie&&(!(X&2)&&(La|=n),_e===4&&an(e,be)),Ye(e,r),n===1&&X===0&&!(t.mode&1)&&(Er=ge()+500,$a&&En()))}function Ye(e,t){var n=e.callbackNode;yv(e,t);var r=ea(e,e===Ie?be:0);if(r===0)n!==null&&Ed(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ed(n),t===1)e.tag===0?vy(hf.bind(null,e)):Dm(hf.bind(null,e)),py(function(){!(X&6)&&En()}),n=null;else{switch(sm(r)){case 1:n=Qu;break;case 4:n=im;break;case 16:n=Jo;break;case 536870912:n=om;break;default:n=Jo}n=bh(n,Ph.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ph(e,t){if(zo=-1,Fo=0,X&6)throw Error(A(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=ea(e,e===Ie?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ya(e,r);else{t=r;var i=X;X|=2;var o=xh();(Ie!==e||be!==t)&&(zt=null,Er=ge()+500,$n(e,t));do try{Ry();break}catch(s){Th(e,s)}while(1);ac(),ha.current=o,X=i,Se!==null?t=0:(Ie=null,be=0,t=_e)}if(t!==0){if(t===2&&(i=Fl(e),i!==0&&(r=i,t=mu(e,i))),t===1)throw n=Oi,$n(e,0),an(e,r),Ye(e,ge()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ny(i)&&(t=ya(e,r),t===2&&(o=Fl(e),o!==0&&(r=o,t=mu(e,o))),t===1))throw n=Oi,$n(e,0),an(e,r),Ye(e,ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Cn(e,He,zt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=_c+500-ge(),10<t)){if(ea(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yl(Cn.bind(null,e,He,zt),t);break}Cn(e,He,zt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-_t(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jy(r/1960))-r,10<r){e.timeoutHandle=Yl(Cn.bind(null,e,He,zt),r);break}Cn(e,He,zt);break;case 5:Cn(e,He,zt);break;default:throw Error(A(329))}}}return Ye(e,ge()),e.callbackNode===n?Ph.bind(null,e):null}function mu(e,t){var n=ci;return e.current.memoizedState.isDehydrated&&($n(e,t).flags|=256),e=ya(e,t),e!==2&&(t=He,He=n,t!==null&&hu(t)),e}function hu(e){He===null?He=e:He.push.apply(He,e)}function Ny(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~wc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function hf(e){if(X&6)throw Error(A(327));mr();var t=ea(e,0);if(!(t&1))return Ye(e,ge()),null;var n=ya(e,t);if(e.tag!==0&&n===2){var r=Fl(e);r!==0&&(t=r,n=mu(e,r))}if(n===1)throw n=Oi,$n(e,0),an(e,t),Ye(e,ge()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,He,zt),Ye(e,ge()),null}function Ec(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Er=ge()+500,$a&&En())}}function Fn(e){ln!==null&&ln.tag===0&&!(X&6)&&mr();var t=X;X|=1;var n=dt.transition,r=q;try{if(dt.transition=null,q=1,e)return e()}finally{q=r,dt.transition=n,X=t,!(X&6)&&En()}}function Pc(){qe=sr.current,oe(sr)}function $n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fy(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(rc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oa();break;case 3:wr(),oe(Xe),oe(Le),fc();break;case 5:dc(r);break;case 4:wr();break;case 13:oe(ce);break;case 19:oe(ce);break;case 10:sc(r.type._context);break;case 22:case 23:Pc()}n=n.return}if(Ie=e,Se=e=gn(e.current,null),be=qe=t,_e=0,Oi=null,wc=La=zn=0,He=ci=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}bn=null}return e}function Th(e,t){do{var n=Se;try{if(ac(),No.current=ma,pa){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pa=!1}if(Rn=0,Pe=we=de=null,li=!1,Ii=0,Sc.current=null,n===null||n.return===null){_e=1,Oi=t,Se=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=be,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,g=s,y=g.tag;if(!(g.mode&1)&&(y===0||y===11||y===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=tf(a);if(w!==null){w.flags&=-257,nf(w,a,s,o,t),w.mode&1&&ef(o,d,t),t=w,l=d;var m=t.updateQueue;if(m===null){var E=new Set;E.add(l),t.updateQueue=E}else m.add(l);break e}else{if(!(t&1)){ef(o,d,t),Tc();break e}l=Error(A(426))}}else if(se&&s.mode&1){var I=tf(a);if(I!==null){!(I.flags&65536)&&(I.flags|=256),nf(I,a,s,o,t),ic(_r(l,s));break e}}o=l=_r(l,s),_e!==4&&(_e=2),ci===null?ci=[o]:ci.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=sh(o,l,t);Yd(o,h);break e;case 1:s=l;var f=o.type,u=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(mn===null||!mn.has(u)))){o.flags|=65536,t&=-t,o.lanes|=t;var c=lh(o,s,t);Yd(o,c);break e}}o=o.return}while(o!==null)}kh(n)}catch(v){t=v,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function xh(){var e=ha.current;return ha.current=ma,e===null?ma:e}function Tc(){(_e===0||_e===3||_e===2)&&(_e=4),Ie===null||!(zn&268435455)&&!(La&268435455)||an(Ie,be)}function ya(e,t){var n=X;X|=2;var r=xh();(Ie!==e||be!==t)&&(zt=null,$n(e,t));do try{Ly();break}catch(i){Th(e,i)}while(1);if(ac(),X=n,ha.current=r,Se!==null)throw Error(A(261));return Ie=null,be=0,_e}function Ly(){for(;Se!==null;)Ih(Se)}function Ry(){for(;Se!==null&&!uv();)Ih(Se)}function Ih(e){var t=Oh(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?kh(e):Se=t,Sc.current=null}function kh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ay(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Se=null;return}}else if(n=by(n,t,qe),n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);_e===0&&(_e=5)}function Cn(e,t,n){var r=q,i=dt.transition;try{dt.transition=null,q=1,zy(e,t,n,r)}finally{dt.transition=i,q=r}return null}function zy(e,t,n,r){do mr();while(ln!==null);if(X&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Sv(e,o),e===Ie&&(Se=Ie=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,bh(Jo,function(){return mr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dt.transition,dt.transition=null;var a=q;q=1;var s=X;X|=4,Sc.current=null,$y(e,n),_h(n,e),oy(Xl),ta=!!Vl,Xl=Vl=null,e.current=n,My(n),cv(),X=s,q=a,dt.transition=o}else e.current=n;if(go&&(go=!1,ln=e,va=i),o=e.pendingLanes,o===0&&(mn=null),pv(n.stateNode),Ye(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ga)throw ga=!1,e=fu,fu=null,e;return va&1&&e.tag!==0&&mr(),o=e.pendingLanes,o&1?e===pu?di++:(di=0,pu=e):di=0,En(),null}function mr(){if(ln!==null){var e=sm(va),t=dt.transition,n=q;try{if(dt.transition=null,q=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,va=0,X&6)throw Error(A(331));var i=X;for(X|=4,N=e.current;N!==null;){var o=N,a=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var d=s[l];for(N=d;N!==null;){var g=N;switch(g.tag){case 0:case 11:case 15:ui(8,g,o)}var y=g.child;if(y!==null)y.return=g,N=y;else for(;N!==null;){g=N;var p=g.sibling,w=g.return;if(yh(g),g===d){N=null;break}if(p!==null){p.return=w,N=p;break}N=w}}}var m=o.alternate;if(m!==null){var E=m.child;if(E!==null){m.child=null;do{var I=E.sibling;E.sibling=null,E=I}while(E!==null)}}N=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,N=a;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ui(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,N=h;break e}N=o.return}}var f=e.current;for(N=f;N!==null;){a=N;var u=a.child;if(a.subtreeFlags&2064&&u!==null)u.return=a,N=u;else e:for(a=f;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Na(9,s)}}catch(v){me(s,s.return,v)}if(s===a){N=null;break e}var c=s.sibling;if(c!==null){c.return=s.return,N=c;break e}N=s.return}}if(X=i,En(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Ca,e)}catch{}r=!0}return r}finally{q=n,dt.transition=t}}return!1}function gf(e,t,n){t=_r(n,t),t=sh(e,t,1),e=pn(e,t,1),t=Fe(),e!==null&&(Li(e,1,t),Ye(e,t))}function me(e,t,n){if(e.tag===3)gf(e,e,n);else for(;t!==null;){if(t.tag===3){gf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=_r(n,e),e=lh(t,e,1),t=pn(t,e,1),e=Fe(),t!==null&&(Li(t,1,e),Ye(t,e));break}}t=t.return}}function Fy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(be&n)===n&&(_e===4||_e===3&&(be&130023424)===be&&500>ge()-_c?$n(e,0):wc|=n),Ye(e,t)}function Ch(e,t){t===0&&(e.mode&1?(t=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):t=1);var n=Fe();e=Qt(e,t),e!==null&&(Li(e,t,n),Ye(e,n))}function By(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ch(e,n)}function Uy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Ch(e,n)}var Oh;Oh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,Oy(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,se&&t.flags&1048576&&$m(t,la,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ro(e,t),e=t.pendingProps;var i=vr(t,Le.current);pr(t,n),i=mc(null,t,r,e,i,n);var o=hc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(o=!0,aa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uc(t),i.updater=ja,t.stateNode=i,i._reactInternals=t,tu(t,r,e,n),t=iu(null,t,r,!0,o,n)):(t.tag=0,se&&o&&nc(t),ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Hy(r),e=yt(r,e),i){case 0:t=ru(null,t,r,e,n);break e;case 1:t=af(null,t,r,e,n);break e;case 11:t=rf(null,t,r,e,n);break e;case 14:t=of(null,t,r,yt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),ru(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),af(e,t,r,i,n);case 3:e:{if(fh(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,zm(e,t),da(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=_r(Error(A(423)),t),t=sf(e,t,r,n,i);break e}else if(r!==i){i=_r(Error(A(424)),t),t=sf(e,t,r,n,i);break e}else for(Je=fn(t.stateNode.containerInfo.firstChild),et=t,se=!0,wt=null,n=Lm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===i){t=Yt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return Fm(t),e===null&&Zl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ql(r,i)?a=null:o!==null&&Ql(r,o)&&(t.flags|=32),dh(e,t),ze(e,t,a,n),t.child;case 6:return e===null&&Zl(t),null;case 13:return ph(e,t,n);case 4:return cc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),rf(e,t,r,i,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ee(ua,r._currentValue),r._currentValue=a,o!==null)if(Tt(o.value,a)){if(o.children===i.children&&!Xe.current){t=Yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ht(-1,n&-n),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?l.next=l:(l.next=g.next,g.next=l),d.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Jl(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(A(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Jl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,pr(t,n),i=ft(i),r=r(i),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,i=yt(r,t.pendingProps),i=yt(r.type,i),of(e,t,r,i,n);case 15:return uh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),Ro(e,t),t.tag=1,Qe(r)?(e=!0,aa(t)):e=!1,pr(t,n),ah(t,r,i),tu(t,r,i,n),iu(null,t,r,!0,e,n);case 19:return mh(e,t,n);case 22:return ch(e,t,n)}throw Error(A(156,t.tag))};function bh(e,t){return rm(e,t)}function Wy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Wy(e,t,n,r)}function xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hy(e){if(typeof e=="function")return xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hu)return 11;if(e===Vu)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")xc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qn:return Mn(n.children,i,o,t);case Wu:a=8,i|=8;break;case xl:return e=ut(12,n,t,i|2),e.elementType=xl,e.lanes=o,e;case Il:return e=ut(13,n,t,i),e.elementType=Il,e.lanes=o,e;case kl:return e=ut(19,n,t,i),e.elementType=kl,e.lanes=o,e;case Fp:return Ra(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rp:a=10;break e;case zp:a=9;break e;case Hu:a=11;break e;case Vu:a=14;break e;case nn:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=ut(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Mn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Ra(e,t,n,r){return e=ut(22,e,r,t),e.elementType=Fp,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function ul(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ws(0),this.expirationTimes=Ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ws(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ic(e,t,n,r,i,o,a,s,l){return e=new Vy(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uc(o),e}function Xy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ah(e){if(!e)return Sn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Am(e,n,t)}return t}function Dh(e,t,n,r,i,o,a,s,l){return e=Ic(n,r,!0,e,i,o,a,s,l),e.context=Ah(null),n=e.current,r=Fe(),i=hn(n),o=Ht(r,i),o.callback=t??null,pn(n,o,i),e.current.lanes=i,Li(e,i,r),Ye(e,r),e}function za(e,t,n,r){var i=t.current,o=Fe(),a=hn(i);return n=Ah(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(i,t,a),e!==null&&(Et(e,i,a,o),jo(e,i,a)),a}function Sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kc(e,t){vf(e,t),(e=e.alternate)&&vf(e,t)}function Qy(){return null}var $h=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cc(e){this._internalRoot=e}Fa.prototype.render=Cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));za(e,t,null,null)};Fa.prototype.unmount=Cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){za(null,e,null,null)}),t[Xt]=null}};function Fa(e){this._internalRoot=e}Fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=cm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&fm(e)}};function Oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yf(){}function Yy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Sa(a);o.call(d)}}var a=Dh(t,r,e,0,null,!1,!1,"",yf);return e._reactRootContainer=a,e[Xt]=a.current,_i(e.nodeType===8?e.parentNode:e),Fn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=Sa(l);s.call(d)}}var l=Ic(e,0,!1,null,null,!1,!1,"",yf);return e._reactRootContainer=l,e[Xt]=l.current,_i(e.nodeType===8?e.parentNode:e),Fn(function(){za(t,l,n,r)}),l}function Ua(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Sa(a);s.call(l)}}za(t,a,e,i)}else a=Yy(n,t,e,i,r);return Sa(a)}lm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ei(t.pendingLanes);n!==0&&(Yu(t,n|1),Ye(t,ge()),!(X&6)&&(Er=ge()+500,En()))}break;case 13:Fn(function(){var r=Qt(e,1);if(r!==null){var i=Fe();Et(r,e,1,i)}}),kc(e,1)}};Gu=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Fe();Et(t,e,134217728,n)}kc(e,134217728)}};um=function(e){if(e.tag===13){var t=hn(e),n=Qt(e,t);if(n!==null){var r=Fe();Et(n,e,t,r)}kc(e,t)}};cm=function(){return q};dm=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Ll=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Da(r);if(!i)throw Error(A(90));Up(r),bl(r,i)}}}break;case"textarea":Hp(e,n);break;case"select":t=n.value,t!=null&&ur(e,!!n.multiple,t,!1)}};qp=Ec;Zp=Fn;var Gy={usingClientEntryPoint:!1,Events:[zi,tr,Da,Gp,Kp,Ec]},Xr={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ky={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tm(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||Qy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{Ca=vo.inject(Ky),$t=vo}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oc(t))throw Error(A(200));return Xy(e,t,null,n)};rt.createRoot=function(e,t){if(!Oc(e))throw Error(A(299));var n=!1,r="",i=$h;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ic(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,_i(e.nodeType===8?e.parentNode:e),new Cc(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=tm(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return Fn(e)};rt.hydrate=function(e,t,n){if(!Ba(t))throw Error(A(200));return Ua(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!Oc(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=$h;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Dh(t,null,e,1,n??null,i,!1,o,a),e[Xt]=t.current,_i(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fa(t)};rt.render=function(e,t,n){if(!Ba(t))throw Error(A(200));return Ua(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(A(40));return e._reactRootContainer?(Fn(function(){Ua(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};rt.unstable_batchedUpdates=Ec;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ba(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Ua(e,t,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function Mh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mh)}catch(e){console.error(e)}}Mh(),Mp.exports=rt;var jh=Mp.exports,Sf=jh;Pl.createRoot=Sf.createRoot,Pl.hydrateRoot=Sf.hydrateRoot;var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},xe.apply(this,arguments)};function Pr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function qy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ie="-ms-",fi="-moz-",K="-webkit-",Nh="comm",Wa="rule",bc="decl",Zy="@import",Lh="@keyframes",Jy="@layer",Rh=Math.abs,Ac=String.fromCharCode,gu=Object.assign;function e1(e,t){return Te(e,0)^45?(((t<<2^Te(e,0))<<2^Te(e,1))<<2^Te(e,2))<<2^Te(e,3):0}function zh(e){return e.trim()}function Ft(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function Uo(e,t,n){return e.indexOf(t,n)}function Te(e,t){return e.charCodeAt(t)|0}function Tr(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function Fh(e){return e.length}function ni(e,t){return t.push(e),e}function t1(e,t){return e.map(t).join("")}function wf(e,t){return e.filter(function(n){return!Ft(n,t)})}var Ha=1,xr=1,Bh=0,mt=0,ve=0,Dr="";function Va(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ha,column:xr,length:a,return:"",siblings:s}}function tn(e,t){return gu(Va("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Qn(e){for(;e.root;)e=tn(e.root,{children:[e]});ni(e,e.siblings)}function n1(){return ve}function r1(){return ve=mt>0?Te(Dr,--mt):0,xr--,ve===10&&(xr=1,Ha--),ve}function Pt(){return ve=mt<Bh?Te(Dr,mt++):0,xr++,ve===10&&(xr=1,Ha++),ve}function jn(){return Te(Dr,mt)}function Wo(){return mt}function Xa(e,t){return Tr(Dr,e,t)}function vu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function i1(e){return Ha=xr=1,Bh=kt(Dr=e),mt=0,[]}function o1(e){return Dr="",e}function cl(e){return zh(Xa(mt-1,yu(e===91?e+2:e===40?e+1:e)))}function a1(e){for(;(ve=jn())&&ve<33;)Pt();return vu(e)>2||vu(ve)>3?"":" "}function s1(e,t){for(;--t&&Pt()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return Xa(e,Wo()+(t<6&&jn()==32&&Pt()==32))}function yu(e){for(;Pt();)switch(ve){case e:return mt;case 34:case 39:e!==34&&e!==39&&yu(ve);break;case 40:e===41&&yu(e);break;case 92:Pt();break}return mt}function l1(e,t){for(;Pt()&&e+ve!==47+10;)if(e+ve===42+42&&jn()===47)break;return"/*"+Xa(t,mt-1)+"*"+Ac(e===47?e:Pt())}function u1(e){for(;!vu(jn());)Pt();return Xa(e,mt)}function c1(e){return o1(Ho("",null,null,null,[""],e=i1(e),0,[0],e))}function Ho(e,t,n,r,i,o,a,s,l){for(var d=0,g=0,y=a,p=0,w=0,m=0,E=1,I=1,h=1,f=0,u="",c=i,v=o,S=r,_=u;I;)switch(m=f,f=Pt()){case 40:if(m!=108&&Te(_,y-1)==58){Uo(_+=W(cl(f),"&","&\f"),"&\f",Rh(d?s[d-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:_+=cl(f);break;case 9:case 10:case 13:case 32:_+=a1(m);break;case 92:_+=s1(Wo()-1,7);continue;case 47:switch(jn()){case 42:case 47:ni(d1(l1(Pt(),Wo()),t,n,l),l);break;default:_+="/"}break;case 123*E:s[d++]=kt(_)*h;case 125*E:case 59:case 0:switch(f){case 0:case 125:I=0;case 59+g:h==-1&&(_=W(_,/\f/g,"")),w>0&&kt(_)-y&&ni(w>32?Ef(_+";",r,n,y-1,l):Ef(W(_," ","")+";",r,n,y-2,l),l);break;case 59:_+=";";default:if(ni(S=_f(_,t,n,d,g,i,s,u,c=[],v=[],y,o),o),f===123)if(g===0)Ho(_,t,S,S,c,o,y,s,v);else switch(p===99&&Te(_,3)===110?100:p){case 100:case 108:case 109:case 115:Ho(e,S,S,r&&ni(_f(e,S,S,0,0,i,s,u,i,c=[],y,v),v),i,v,y,s,r?c:v);break;default:Ho(_,S,S,S,[""],v,0,s,v)}}d=g=w=0,E=h=1,u=_="",y=a;break;case 58:y=1+kt(_),w=m;default:if(E<1){if(f==123)--E;else if(f==125&&E++==0&&r1()==125)continue}switch(_+=Ac(f),f*E){case 38:h=g>0?1:(_+="\f",-1);break;case 44:s[d++]=(kt(_)-1)*h,h=1;break;case 64:jn()===45&&(_+=cl(Pt())),p=jn(),g=y=kt(u=_+=u1(Wo())),f++;break;case 45:m===45&&kt(_)==2&&(E=0)}}return o}function _f(e,t,n,r,i,o,a,s,l,d,g,y){for(var p=i-1,w=i===0?o:[""],m=Fh(w),E=0,I=0,h=0;E<r;++E)for(var f=0,u=Tr(e,p+1,p=Rh(I=a[E])),c=e;f<m;++f)(c=zh(I>0?w[f]+" "+u:W(u,/&\f/g,w[f])))&&(l[h++]=c);return Va(e,t,n,i===0?Wa:s,l,d,g,y)}function d1(e,t,n,r){return Va(e,t,n,Nh,Ac(n1()),Tr(e,2,-2),0,r)}function Ef(e,t,n,r,i){return Va(e,t,n,bc,Tr(e,0,r),Tr(e,r+1,-1),r,i)}function Uh(e,t,n){switch(e1(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return fi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+fi+e+ie+e+e;case 5936:switch(Te(e,t+11)){case 114:return K+e+ie+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+ie+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+ie+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+ie+e+e;case 6165:return K+e+ie+"flex-"+e+e;case 5187:return K+e+W(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+ie+"flex-$1$2")+e;case 5443:return K+e+ie+"flex-item-"+W(e,/flex-|-self/g,"")+(Ft(e,/flex-|baseline/)?"":ie+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return K+e+ie+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+ie+W(e,"shrink","negative")+e;case 5292:return K+e+ie+W(e,"basis","preferred-size")+e;case 6060:return K+"box-"+W(e,"-grow","")+K+e+ie+W(e,"grow","positive")+e;case 4554:return K+W(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!Ft(e,/flex-|baseline/))return ie+"grid-column-align"+Tr(e,t)+e;break;case 2592:case 3360:return ie+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Ft(r.props,/grid-\w+-end/)})?~Uo(e+(n=n[t].value),"span",0)?e:ie+W(e,"-start","")+e+ie+"grid-row-span:"+(~Uo(n,"span",0)?Ft(n,/\d+/):+Ft(n,/\d+/)-+Ft(e,/\d+/))+";":ie+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ft(r.props,/grid-\w+-start/)})?e:ie+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(Te(e,t+1)){case 109:if(Te(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+fi+(Te(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Uo(e,"stretch",0)?Uh(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,d){return ie+i+":"+o+d+(a?ie+i+"-span:"+(s?l:+l-+o)+d:"")+e});case 4949:if(Te(e,t+6)===121)return W(e,":",":"+K)+e;break;case 6444:switch(Te(e,Te(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(Te(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+ie+"$2box$3")+e;case 100:return W(e,":",":"+ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function wa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function f1(e,t,n,r){switch(e.type){case Jy:if(e.children.length)break;case Zy:case bc:return e.return=e.return||e.value;case Nh:return"";case Lh:return e.return=e.value+"{"+wa(e.children,r)+"}";case Wa:if(!kt(e.value=e.props.join(",")))return""}return kt(n=wa(e.children,r))?e.return=e.value+"{"+n+"}":""}function p1(e){var t=Fh(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function m1(e){return function(t){t.root||(t=t.return)&&e(t)}}function h1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case bc:e.return=Uh(e.value,e.length,n);return;case Lh:return wa([tn(e,{value:W(e.value,"@","@"+K)})],r);case Wa:if(e.length)return t1(n=e.props,function(i){switch(Ft(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qn(tn(e,{props:[W(i,/:(read-\w+)/,":"+fi+"$1")]})),Qn(tn(e,{props:[i]})),gu(e,{props:wf(n,r)});break;case"::placeholder":Qn(tn(e,{props:[W(i,/:(plac\w+)/,":"+K+"input-$1")]})),Qn(tn(e,{props:[W(i,/:(plac\w+)/,":"+fi+"$1")]})),Qn(tn(e,{props:[W(i,/:(plac\w+)/,ie+"input-$1")]})),Qn(tn(e,{props:[i]})),gu(e,{props:wf(n,r)});break}return""})}}var Wh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ir=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Hh="active",Vh="data-styled-version",Qa="6.1.19",Dc=`/*!sc*/
`,_a=typeof window<"u"&&typeof document<"u",g1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),v1={},Ya=Object.freeze([]),kr=Object.freeze({});function Xh(e,t,n){return n===void 0&&(n=kr),e.theme!==n.theme&&e.theme||t||n.theme}var Qh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),y1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,S1=/(^-|-$)/g;function Pf(e){return e.replace(y1,"-").replace(S1,"")}var w1=/(a)(d)/gi,yo=52,Tf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Su(e){var t,n="";for(t=Math.abs(e);t>yo;t=t/yo|0)n=Tf(t%yo)+n;return(Tf(t%yo)+n).replace(w1,"$1-$2")}var dl,Yh=5381,lr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Gh=function(e){return lr(Yh,e)};function $c(e){return Su(Gh(e)>>>0)}function _1(e){return e.displayName||e.name||"Component"}function fl(e){return typeof e=="string"&&!0}var Kh=typeof Symbol=="function"&&Symbol.for,qh=Kh?Symbol.for("react.memo"):60115,E1=Kh?Symbol.for("react.forward_ref"):60112,P1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},T1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x1=((dl={})[E1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dl[qh]=Zh,dl);function xf(e){return("type"in(t=e)&&t.type.$$typeof)===qh?Zh:"$$typeof"in e?x1[e.$$typeof]:P1;var t}var I1=Object.defineProperty,k1=Object.getOwnPropertyNames,If=Object.getOwnPropertySymbols,C1=Object.getOwnPropertyDescriptor,O1=Object.getPrototypeOf,kf=Object.prototype;function Jh(e,t,n){if(typeof t!="string"){if(kf){var r=O1(t);r&&r!==kf&&Jh(e,r,n)}var i=k1(t);If&&(i=i.concat(If(t)));for(var o=xf(e),a=xf(t),s=0;s<i.length;++s){var l=i[s];if(!(l in T1||n&&n[l]||a&&l in a||o&&l in o)){var d=C1(t,l);try{I1(e,l,d)}catch{}}}}return e}function Bn(e){return typeof e=="function"}function Mc(e){return typeof e=="object"&&"styledComponentId"in e}function Dn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ea(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function bi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function wu(e,t,n){if(n===void 0&&(n=!1),!n&&!bi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=wu(e[r],t[r]);else if(bi(t))for(var r in t)e[r]=wu(e[r],t[r]);return e}function jc(e,t){Object.defineProperty(e,"toString",{value:t})}function Un(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var b1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Un(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(Dc);return n},e}(),Vo=new Map,Pa=new Map,Xo=1,So=function(e){if(Vo.has(e))return Vo.get(e);for(;Pa.has(Xo);)Xo++;var t=Xo++;return Vo.set(e,t),Pa.set(t,e),t},A1=function(e,t){Xo=t+1,Vo.set(e,t),Pa.set(t,e)},D1="style[".concat(Ir,"][").concat(Vh,'="').concat(Qa,'"]'),$1=new RegExp("^".concat(Ir,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),M1=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},j1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Dc),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match($1);if(l){var d=0|parseInt(l[1],10),g=l[2];d!==0&&(A1(g,d),M1(e,g,l[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(s)}}},Cf=function(e){for(var t=document.querySelectorAll(D1),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ir)!==Hh&&(j1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function N1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Ir,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ir,Hh),r.setAttribute(Vh,Qa);var a=N1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},L1=function(){function e(t){this.element=e0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Un(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),R1=function(){function e(t){this.element=e0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),z1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Of=_a,F1={isServer:!_a,useCSSOMInjection:!g1},Ta=function(){function e(t,n,r){t===void 0&&(t=kr),n===void 0&&(n={});var i=this;this.options=xe(xe({},F1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&_a&&Of&&(Of=!1,Cf(this)),jc(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",d=function(y){var p=function(h){return Pa.get(h)}(y);if(p===void 0)return"continue";var w=o.names.get(p),m=a.getGroup(y);if(w===void 0||!w.size||m.length===0)return"continue";var E="".concat(Ir,".g").concat(y,'[id="').concat(p,'"]'),I="";w!==void 0&&w.forEach(function(h){h.length>0&&(I+="".concat(h,","))}),l+="".concat(m).concat(E,'{content:"').concat(I,'"}').concat(Dc)},g=0;g<s;g++)d(g);return l}(i)})}return e.registerId=function(t){return So(t)},e.prototype.rehydrate=function(){!this.server&&_a&&Cf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(xe(xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new z1(i):r?new L1(i):new R1(i)}(this.options),new b1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(So(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(So(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(So(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),B1=/&/g,U1=/^\s*\/\/.*$/gm;function t0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=t0(n.children,t)),n})}function W1(e){var t,n,r,i=e===void 0?kr:e,o=i.options,a=o===void 0?kr:o,s=i.plugins,l=s===void 0?Ya:s,d=function(p,w,m){return m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(t):p},g=l.slice();g.push(function(p){p.type===Wa&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(B1,n).replace(r,d))}),a.prefix&&g.push(h1),g.push(f1);var y=function(p,w,m,E){w===void 0&&(w=""),m===void 0&&(m=""),E===void 0&&(E="&"),t=E,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var I=p.replace(U1,""),h=c1(m||w?"".concat(m," ").concat(w," { ").concat(I," }"):I);a.namespace&&(h=t0(h,a.namespace));var f=[];return wa(h,p1(g.concat(m1(function(u){return f.push(u)})))),f};return y.hash=l.length?l.reduce(function(p,w){return w.name||Un(15),lr(p,w.name)},Yh).toString():"",y}var H1=new Ta,_u=W1(),n0=lt.createContext({shouldForwardProp:void 0,styleSheet:H1,stylis:_u});n0.Consumer;lt.createContext(void 0);function Eu(){return F.useContext(n0)}var r0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=_u);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,jc(this,function(){throw Un(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=_u),this.name+t.hash},e}(),V1=function(e){return e>="A"&&e<="Z"};function bf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;V1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var i0=function(e){return e==null||e===!1||e===""},o0=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!i0(o)&&(Array.isArray(o)&&o.isCss||Bn(o)?r.push("".concat(bf(i),":"),o,";"):bi(o)?r.push.apply(r,Pr(Pr(["".concat(i," {")],o0(o),!1),["}"],!1)):r.push("".concat(bf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Wh||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function vn(e,t,n,r){if(i0(e))return[];if(Mc(e))return[".".concat(e.styledComponentId)];if(Bn(e)){if(!Bn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return vn(i,t,n,r)}var o;return e instanceof r0?n?(e.inject(n,r),[e.getName(r)]):[e]:bi(e)?o0(e):Array.isArray(e)?Array.prototype.concat.apply(Ya,e.map(function(a){return vn(a,t,n,r)})):[e.toString()]}function a0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bn(n)&&!Mc(n))return!1}return!0}var X1=Gh(Qa),Q1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&a0(t),this.componentId=n,this.baseHash=lr(X1,n),this.baseStyle=r,Ta.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Dn(i,this.staticRulesId);else{var o=Ea(vn(this.rules,t,n,r)),a=Su(lr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=Dn(i,a),this.staticRulesId=a}else{for(var l=lr(this.baseHash,r.hash),d="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")d+=y;else if(y){var p=Ea(vn(y,t,n,r));l=lr(l,p+g),d+=p}}if(d){var w=Su(l>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(d,".".concat(w),void 0,this.componentId)),i=Dn(i,w)}}return i},e}(),Ai=lt.createContext(void 0);Ai.Consumer;function Y1(e){var t=lt.useContext(Ai),n=F.useMemo(function(){return function(r,i){if(!r)throw Un(14);if(Bn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Un(8);return i?xe(xe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?lt.createElement(Ai.Provider,{value:n},e.children):null}var pl={};function G1(e,t,n){var r=Mc(e),i=e,o=!fl(e),a=t.attrs,s=a===void 0?Ya:a,l=t.componentId,d=l===void 0?function(c,v){var S=typeof c!="string"?"sc":Pf(c);pl[S]=(pl[S]||0)+1;var _="".concat(S,"-").concat($c(Qa+S+pl[S]));return v?"".concat(v,"-").concat(_):_}(t.displayName,t.parentComponentId):l,g=t.displayName,y=g===void 0?function(c){return fl(c)?"styled.".concat(c):"Styled(".concat(_1(c),")")}(e):g,p=t.displayName&&t.componentId?"".concat(Pf(t.displayName),"-").concat(t.componentId):t.componentId||d,w=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var E=i.shouldForwardProp;if(t.shouldForwardProp){var I=t.shouldForwardProp;m=function(c,v){return E(c,v)&&I(c,v)}}else m=E}var h=new Q1(n,p,r?i.componentStyle:void 0);function f(c,v){return function(S,_,T){var b=S.attrs,$=S.componentStyle,O=S.defaultProps,x=S.foldedComponentIds,D=S.styledComponentId,j=S.target,R=lt.useContext(Ai),z=Eu(),U=S.shouldForwardProp||z.shouldForwardProp,k=Xh(_,R,O)||kr,L=function(Kt,Ke,Rt){for(var Rr,Pn=xe(xe({},Ke),{className:void 0,theme:Rt}),Ls=0;Ls<Kt.length;Ls+=1){var Zi=Bn(Rr=Kt[Ls])?Rr(Pn):Rr;for(var qt in Zi)Pn[qt]=qt==="className"?Dn(Pn[qt],Zi[qt]):qt==="style"?xe(xe({},Pn[qt]),Zi[qt]):Zi[qt]}return Ke.className&&(Pn.className=Dn(Pn.className,Ke.className)),Pn}(b,_,k),B=L.as||j,V={};for(var Q in L)L[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&L.theme===k||(Q==="forwardedAs"?V.as=L.forwardedAs:U&&!U(Q,B)||(V[Q]=L[Q]));var Re=function(Kt,Ke){var Rt=Eu(),Rr=Kt.generateAndInjectStyles(Ke,Rt.styleSheet,Rt.stylis);return Rr}($,L),te=Dn(x,D);return Re&&(te+=" "+Re),L.className&&(te+=" "+L.className),V[fl(B)&&!Qh.has(B)?"class":"className"]=te,T&&(V.ref=T),F.createElement(B,V)}(u,c,v)}f.displayName=y;var u=lt.forwardRef(f);return u.attrs=w,u.componentStyle=h,u.displayName=y,u.shouldForwardProp=m,u.foldedComponentIds=r?Dn(i.foldedComponentIds,i.styledComponentId):"",u.styledComponentId=p,u.target=r?i.target:e,Object.defineProperty(u,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?function(v){for(var S=[],_=1;_<arguments.length;_++)S[_-1]=arguments[_];for(var T=0,b=S;T<b.length;T++)wu(v,b[T],!0);return v}({},i.defaultProps,c):c}}),jc(u,function(){return".".concat(u.styledComponentId)}),o&&Jh(u,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),u}function Af(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Df=function(e){return Object.assign(e,{isCss:!0})};function Ct(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Bn(e)||bi(e))return Df(vn(Af(Ya,Pr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?vn(r):Df(vn(Af(r,t)))}function Pu(e,t,n){if(n===void 0&&(n=kr),!t)throw Un(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Ct.apply(void 0,Pr([i],o,!1)))};return r.attrs=function(i){return Pu(e,t,xe(xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Pu(e,t,xe(xe({},n),i))},r}var s0=function(e){return Pu(G1,e)},C=s0;Qh.forEach(function(e){C[e]=s0(e)});var K1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=a0(t),Ta.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ea(vn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ta.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function q1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ct.apply(void 0,Pr([e],t,!1)),i="sc-global-".concat($c(JSON.stringify(r))),o=new K1(r,i),a=function(l){var d=Eu(),g=lt.useContext(Ai),y=lt.useRef(d.styleSheet.allocateGSInstance(i)).current;return d.styleSheet.server&&s(y,l,d.styleSheet,g,d.stylis),lt.useLayoutEffect(function(){if(!d.styleSheet.server)return s(y,l,d.styleSheet,g,d.stylis),function(){return o.removeStyles(y,d.styleSheet)}},[y,l,d.styleSheet,g,d.stylis]),null};function s(l,d,g,y,p){if(o.isStatic)o.renderStyles(l,v1,g,p);else{var w=xe(xe({},d),{theme:Xh(d,y,a.defaultProps)});o.renderStyles(l,w,g,p)}}return lt.memo(a)}function l0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ea(Ct.apply(void 0,Pr([e],t,!1))),i=$c(r);return new r0(i,r)}const Z1={colors:{primary:"#8856D9",secondary:"#FF4136",sea:"#A9C7C7",white:"#FFF",grey:"#8C96A0",darkgrey:"#30373F",background:"#1B1F22"},media:{large:"(max-width: 1200px)",medium:"(max-width: 900px)",small:"(max-width: 600px)"}},J1=q1`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  *:focus-visible {
    border-radius: 4px;
    outline: 2px solid ${({theme:e})=>e.colors.primary};
  }

  html {
    box-sizing: border-box;
    font-family: Rubik, Roboto, sans-serif;
    font-size: 62.5%; // 1 rem = 10px

    @media ${({theme:e})=>e.media.large} {
      font-size: 56.25%; // 1 rem = 9px
    }

    @media ${({theme:e})=>e.media.medium} {
      font-size: 50%; // 1 rem = 8px
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
`,eS=l0`
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`,tS=C.div`
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({theme:e})=>e.colors.white};
    background-color: ${({theme:e})=>e.colors.background};
`,nS={App:tS},Vn=C.div`
    max-width: 142rem;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
`,Ee=C.div`
    display: flex;
    flex-direction: ${({direction:e})=>e||"row"};
    justify-content: ${({justify:e})=>e||"flex-start"};
    align-items: ${({align:e})=>e||"stretch"};
    flex-wrap: ${({wrap:e})=>e||"nowrap"};
    gap: ${({gap:e})=>e||"0px"};
`,rS=C.header`
    width: 100%;
    position: absolute;
    top: 0;
    padding: 4rem 0;
    z-index: 10;
`,iS=C(Ee)`
    @media ${({theme:e})=>e.media.medium} {
        flex-direction: column;

        ${Ee} {
            gap: 1rem;
        }
    }
`,$f={Header:rS,HeaderWrapper:iS};var pe={},Nc={},Bi={},Ui={},u0="Expected a function",Mf=0/0,oS="[object Symbol]",aS=/^\s+|\s+$/g,sS=/^[-+]0x[0-9a-f]+$/i,lS=/^0b[01]+$/i,uS=/^0o[0-7]+$/i,cS=parseInt,dS=typeof Ji=="object"&&Ji&&Ji.Object===Object&&Ji,fS=typeof self=="object"&&self&&self.Object===Object&&self,pS=dS||fS||Function("return this")(),mS=Object.prototype,hS=mS.toString,gS=Math.max,vS=Math.min,ml=function(){return pS.Date.now()};function yS(e,t,n){var r,i,o,a,s,l,d=0,g=!1,y=!1,p=!0;if(typeof e!="function")throw new TypeError(u0);t=jf(t)||0,xa(n)&&(g=!!n.leading,y="maxWait"in n,o=y?gS(jf(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p);function w(S){var _=r,T=i;return r=i=void 0,d=S,a=e.apply(T,_),a}function m(S){return d=S,s=setTimeout(h,t),g?w(S):a}function E(S){var _=S-l,T=S-d,b=t-_;return y?vS(b,o-T):b}function I(S){var _=S-l,T=S-d;return l===void 0||_>=t||_<0||y&&T>=o}function h(){var S=ml();if(I(S))return f(S);s=setTimeout(h,E(S))}function f(S){return s=void 0,p&&r?w(S):(r=i=void 0,a)}function u(){s!==void 0&&clearTimeout(s),d=0,r=l=i=s=void 0}function c(){return s===void 0?a:f(ml())}function v(){var S=ml(),_=I(S);if(r=arguments,i=this,l=S,_){if(s===void 0)return m(l);if(y)return s=setTimeout(h,t),w(l)}return s===void 0&&(s=setTimeout(h,t)),a}return v.cancel=u,v.flush=c,v}function SS(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(u0);return xa(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),yS(e,t,{leading:r,maxWait:t,trailing:i})}function xa(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function wS(e){return!!e&&typeof e=="object"}function _S(e){return typeof e=="symbol"||wS(e)&&hS.call(e)==oS}function jf(e){if(typeof e=="number")return e;if(_S(e))return Mf;if(xa(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=xa(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(aS,"");var n=lS.test(e);return n||uS.test(e)?cS(e.slice(2),n?2:8):sS.test(e)?Mf:+e}var ES=SS,Wi={};Object.defineProperty(Wi,"__esModule",{value:!0});Wi.addPassiveEventListener=function(t,n,r){var i=function(){var o=!1;try{var a=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,a)}catch{}return o}();t.addEventListener(n,r,i?{passive:!0}:!1)};Wi.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r)};Object.defineProperty(Ui,"__esModule",{value:!0});var PS=ES,TS=IS(PS),xS=Wi;function IS(e){return e&&e.__esModule?e:{default:e}}var kS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,TS.default)(t,n)},le={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=kS(function(i){le.scrollHandler(t)},n);le.scrollSpyContainers.push(t),(0,xS.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return le.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=le.scrollSpyContainers[le.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(le.currentPositionX(t),le.currentPositionY(t))})},addStateHandler:function(t){le.spySetState.push(t)},addSpyHandler:function(t,n){var r=le.scrollSpyContainers[le.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(le.currentPositionX(n),le.currentPositionY(n))},updateStates:function(){le.spySetState.forEach(function(t){return t()})},unmount:function(t,n){le.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),le.spySetState&&le.spySetState.length&&le.spySetState.indexOf(t)>-1&&le.spySetState.splice(le.spySetState.indexOf(t),1),document.removeEventListener("scroll",le.scrollHandler)},update:function(){return le.scrollSpyContainers.forEach(function(t){return le.scrollHandler(t)})}};Ui.default=le;var $r={},Hi={};Object.defineProperty(Hi,"__esModule",{value:!0});var CS=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,i=r?"#"+r:"",o=window&&window.location,a=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},OS=function(){return window.location.hash.replace(/^#/,"")},bS=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},AS=function(t){return getComputedStyle(t).position!=="static"},hl=function(t,n){for(var r=t.offsetTop,i=t.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},DS=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(AS(t)){if(n.offsetParent!==t){var i=function(g){return g===t||g===document},o=hl(n,i),a=o.offsetTop,s=o.offsetParent;if(s!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var l=function(g){return g===document};return hl(n,l).offsetTop-hl(t,l).offsetTop};Hi.default={updateHash:CS,getHash:OS,filterElementInContainer:bS,scrollOffset:DS};var Ga={},Lc={};Object.defineProperty(Lc,"__esModule",{value:!0});Lc.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var Rc={};Object.defineProperty(Rc,"__esModule",{value:!0});var $S=Wi,MS=["mousedown","mousewheel","touchmove","keydown"];Rc.default={subscribe:function(t){return typeof document<"u"&&MS.forEach(function(n){return(0,$S.addPassiveEventListener)(document,n,t)})}};var Vi={};Object.defineProperty(Vi,"__esModule",{value:!0});var Tu={registered:{},scrollEvent:{register:function(t,n){Tu.registered[t]=n},remove:function(t){Tu.registered[t]=null}}};Vi.default=Tu;Object.defineProperty(Ga,"__esModule",{value:!0});var jS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},NS=Hi;Ka(NS);var LS=Lc,Nf=Ka(LS),RS=Rc,zS=Ka(RS),FS=Vi,Ot=Ka(FS);function Ka(e){return e&&e.__esModule?e:{default:e}}var c0=function(t){return Nf.default[t.smooth]||Nf.default.defaultEasing},BS=function(t){return typeof t=="function"?t:function(){return t}},US=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},xu=function(){return US()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),d0=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},f0=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},p0=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},WS=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},HS=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},VS=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){Ot.default.registered.end&&Ot.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,n);xu.call(window,o);return}Ot.default.registered.end&&Ot.default.registered.end(i.to,i.target,i.currentPosition)},zc=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},Xi=function(t,n,r,i){if(n.data=n.data||d0(),window.clearTimeout(n.data.delayTimeout),zS.default.subscribe(function(){n.data.cancel=!0}),zc(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?f0(n):p0(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Ot.default.registered.end&&Ot.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=BS(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var o=c0(n),a=VS.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Ot.default.registered.begin&&Ot.default.registered.begin(n.data.to,n.data.target),xu.call(window,a)},n.delay);return}Ot.default.registered.begin&&Ot.default.registered.begin(n.data.to,n.data.target),xu.call(window,a)},qa=function(t){return t=jS({},t),t.data=t.data||d0(),t.absolute=!0,t},XS=function(t){Xi(0,qa(t))},QS=function(t,n){Xi(t,qa(n))},YS=function(t){t=qa(t),zc(t),Xi(t.horizontal?WS(t):HS(t),t)},GS=function(t,n){n=qa(n),zc(n);var r=n.horizontal?f0(n):p0(n);Xi(t+r,n)};Ga.default={animateTopScroll:Xi,getAnimationType:c0,scrollToTop:XS,scrollToBottom:YS,scrollTo:QS,scrollMore:GS};Object.defineProperty($r,"__esModule",{value:!0});var KS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qS=Hi,ZS=Fc(qS),JS=Ga,ew=Fc(JS),tw=Vi,wo=Fc(tw);function Fc(e){return e&&e.__esModule?e:{default:e}}var _o={},Lf=void 0;$r.default={unmount:function(){_o={}},register:function(t,n){_o[t]=n},unregister:function(t){delete _o[t]},get:function(t){return _o[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return Lf=t},getActiveLink:function(){return Lf},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=KS({},n,{absolute:!1});var i=n.containerId,o=n.container,a=void 0;i?a=document.getElementById(i):o&&o.nodeType?a=o:a=document,n.absolute=!0;var s=n.horizontal,l=ZS.default.scrollOffset(a,r,s)+(n.offset||0);if(!n.smooth){wo.default.registered.begin&&wo.default.registered.begin(t,r),a===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):a.scrollTop=l,wo.default.registered.end&&wo.default.registered.end(t,r);return}ew.default.animateTopScroll(l,n,t,r)}};var m0={exports:{}},nw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rw=nw,iw=rw;function h0(){}function g0(){}g0.resetWarningCache=h0;var ow=function(){function e(r,i,o,a,s,l){if(l!==iw){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:g0,resetWarningCache:h0};return n.PropTypes=n,n};m0.exports=ow();var Za=m0.exports,Ja={};Object.defineProperty(Ja,"__esModule",{value:!0});var aw=Hi,gl=sw(aw);function sw(e){return e&&e.__esModule?e:{default:e}}var lw={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,i=r.get(t);if(i&&(n||t!==r.getActiveLink())){var o=this.containers[t]||document;r.scrollTo(t,{container:o})}},getHash:function(){return gl.default.getHash()},changeHash:function(t,n){this.isInitialized()&&gl.default.getHash()!==t&&gl.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Ja.default=lw;Object.defineProperty(Bi,"__esModule",{value:!0});var Eo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uw=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),cw=F,Rf=Qi(cw),dw=Ui,Po=Qi(dw),fw=$r,pw=Qi(fw),mw=Za,ae=Qi(mw),hw=Ja,Jt=Qi(hw);function Qi(e){return e&&e.__esModule?e:{default:e}}function gw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vw(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function yw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var zf={to:ae.default.string.isRequired,containerId:ae.default.string,container:ae.default.object,activeClass:ae.default.string,activeStyle:ae.default.object,spy:ae.default.bool,horizontal:ae.default.bool,smooth:ae.default.oneOfType([ae.default.bool,ae.default.string]),offset:ae.default.number,delay:ae.default.number,isDynamic:ae.default.bool,onClick:ae.default.func,duration:ae.default.oneOfType([ae.default.number,ae.default.func]),absolute:ae.default.bool,onSetActive:ae.default.func,onSetInactive:ae.default.func,ignoreCancelEvents:ae.default.bool,hashSpy:ae.default.bool,saveHashHistory:ae.default.bool,spyThrottle:ae.default.number};Bi.default=function(e,t){var n=t||pw.default,r=function(o){yw(a,o);function a(s){gw(this,a);var l=vw(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return i.call(l),l.state={active:!1},l}return uw(a,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,d=this.props.container;return l&&!d?document.getElementById(l):d&&d.nodeType?d:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();Po.default.isMounted(l)||Po.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(Jt.default.isMounted()||Jt.default.mount(n),Jt.default.mapContainer(this.props.to,l)),Po.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){Po.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var d={};this.state&&this.state.active?d=Eo({},this.props.style,this.props.activeStyle):d=Eo({},this.props.style);var g=Eo({},this.props);for(var y in zf)g.hasOwnProperty(y)&&delete g[y];return g.className=l,g.style=d,g.onClick=this.handleClick,Rf.default.createElement(e,g)}}]),a}(Rf.default.PureComponent),i=function(){var a=this;this.scrollTo=function(s,l){n.scrollTo(s,Eo({},a.state,l))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(s,l){var d=a.getScrollSpyContainer();if(!(Jt.default.isMounted()&&!Jt.default.isInitialized())){var g=a.props.horizontal,y=a.props.to,p=null,w=void 0,m=void 0;if(g){var E=0,I=0,h=0;if(d.getBoundingClientRect){var f=d.getBoundingClientRect();h=f.left}if(!p||a.props.isDynamic){if(p=n.get(y),!p)return;var u=p.getBoundingClientRect();E=u.left-h+s,I=E+u.width}var c=s-a.props.offset;w=c>=Math.floor(E)&&c<Math.floor(I),m=c<Math.floor(E)||c>=Math.floor(I)}else{var v=0,S=0,_=0;if(d.getBoundingClientRect){var T=d.getBoundingClientRect();_=T.top}if(!p||a.props.isDynamic){if(p=n.get(y),!p)return;var b=p.getBoundingClientRect();v=b.top-_+l,S=v+b.height}var $=l-a.props.offset;w=$>=Math.floor(v)&&$<Math.floor(S),m=$<Math.floor(v)||$>=Math.floor(S)}var O=n.getActiveLink();if(m){if(y===O&&n.setActiveLink(void 0),a.props.hashSpy&&Jt.default.getHash()===y){var x=a.props.saveHashHistory,D=x===void 0?!1:x;Jt.default.changeHash("",D)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(y,p))}if(w&&(O!==y||a.state.active===!1)){n.setActiveLink(y);var j=a.props.saveHashHistory,R=j===void 0?!1:j;a.props.hashSpy&&Jt.default.changeHash(y,R),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(y,p))}}}};return r.propTypes=zf,r.defaultProps={offset:0},r};Object.defineProperty(Nc,"__esModule",{value:!0});var Sw=F,Ff=v0(Sw),ww=Bi,_w=v0(ww);function v0(e){return e&&e.__esModule?e:{default:e}}function Ew(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Pw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Tw=function(e){Pw(t,e);function t(){var n,r,i,o;Ew(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return o=(r=(i=Bf(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),i),i.render=function(){return Ff.default.createElement("a",i.props,i.props.children)},r),Bf(i,o)}return t}(Ff.default.Component);Nc.default=(0,_w.default)(Tw);var Bc={};Object.defineProperty(Bc,"__esModule",{value:!0});var xw=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Iw=F,Uf=y0(Iw),kw=Bi,Cw=y0(kw);function y0(e){return e&&e.__esModule?e:{default:e}}function Ow(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bw(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Aw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Dw=function(e){Aw(t,e);function t(){return Ow(this,t),bw(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return xw(t,[{key:"render",value:function(){return Uf.default.createElement("input",this.props,this.props.children)}}]),t}(Uf.default.Component);Bc.default=(0,Cw.default)(Dw);var Uc={},es={};Object.defineProperty(es,"__esModule",{value:!0});var $w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mw=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),jw=F,Wf=ts(jw),Nw=jh;ts(Nw);var Lw=$r,Hf=ts(Lw),Rw=Za,Vf=ts(Rw);function ts(e){return e&&e.__esModule?e:{default:e}}function zw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fw(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Bw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}es.default=function(e){var t=function(n){Bw(r,n);function r(i){zw(this,r);var o=Fw(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return Mw(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Hf.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){Hf.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return Wf.default.createElement(e,$w({},this.props,{parentBindings:this.childBindings}))}}]),r}(Wf.default.Component);return t.propTypes={name:Vf.default.string,id:Vf.default.string},t};Object.defineProperty(Uc,"__esModule",{value:!0});var Xf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uw=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ww=F,Qf=Wc(Ww),Hw=es,Vw=Wc(Hw),Xw=Za,Yf=Wc(Xw);function Wc(e){return e&&e.__esModule?e:{default:e}}function Qw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yw(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Gw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var S0=function(e){Gw(t,e);function t(){return Qw(this,t),Yw(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Uw(t,[{key:"render",value:function(){var r=this,i=Xf({},this.props);return i.parentBindings&&delete i.parentBindings,Qf.default.createElement("div",Xf({},i,{ref:function(a){r.props.parentBindings.domNode=a}}),this.props.children)}}]),t}(Qf.default.Component);S0.propTypes={name:Yf.default.string,id:Yf.default.string};Uc.default=(0,Vw.default)(S0);var vl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gf=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Kf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Zf(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var To=F,Tn=Ui,yl=$r,ue=Za,en=Ja,Jf={to:ue.string.isRequired,containerId:ue.string,container:ue.object,activeClass:ue.string,spy:ue.bool,smooth:ue.oneOfType([ue.bool,ue.string]),offset:ue.number,delay:ue.number,isDynamic:ue.bool,onClick:ue.func,duration:ue.oneOfType([ue.number,ue.func]),absolute:ue.bool,onSetActive:ue.func,onSetInactive:ue.func,ignoreCancelEvents:ue.bool,hashSpy:ue.bool,spyThrottle:ue.number},Kw={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||yl,i=function(a){Zf(s,a);function s(l){Kf(this,s);var d=qf(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return o.call(d),d.state={active:!1},d}return Gf(s,[{key:"getScrollSpyContainer",value:function(){var d=this.props.containerId,g=this.props.container;return d?document.getElementById(d):g&&g.nodeType?g:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var d=this.getScrollSpyContainer();Tn.isMounted(d)||Tn.mount(d,this.props.spyThrottle),this.props.hashSpy&&(en.isMounted()||en.mount(r),en.mapContainer(this.props.to,d)),this.props.spy&&Tn.addStateHandler(this.stateHandler),Tn.addSpyHandler(this.spyHandler,d),this.setState({container:d})}}},{key:"componentWillUnmount",value:function(){Tn.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var d="";this.state&&this.state.active?d=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():d=this.props.className;var g=vl({},this.props);for(var y in Jf)g.hasOwnProperty(y)&&delete g[y];return g.className=d,g.onClick=this.handleClick,To.createElement(t,g)}}]),s}(To.Component),o=function(){var s=this;this.scrollTo=function(l,d){r.scrollTo(l,vl({},s.state,d))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.stateHandler=function(){r.getActiveLink()!==s.props.to&&(s.state!==null&&s.state.active&&s.props.onSetInactive&&s.props.onSetInactive(),s.setState({active:!1}))},this.spyHandler=function(l){var d=s.getScrollSpyContainer();if(!(en.isMounted()&&!en.isInitialized())){var g=s.props.to,y=null,p=0,w=0,m=0;if(d.getBoundingClientRect){var E=d.getBoundingClientRect();m=E.top}if(!y||s.props.isDynamic){if(y=r.get(g),!y)return;var I=y.getBoundingClientRect();p=I.top-m+l,w=p+I.height}var h=l-s.props.offset,f=h>=Math.floor(p)&&h<Math.floor(w),u=h<Math.floor(p)||h>=Math.floor(w),c=r.getActiveLink();if(u)return g===c&&r.setActiveLink(void 0),s.props.hashSpy&&en.getHash()===g&&en.changeHash(),s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive()),Tn.updateStates();if(f&&c!==g)return r.setActiveLink(g),s.props.hashSpy&&en.changeHash(g),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(g)),Tn.updateStates()}}};return i.propTypes=Jf,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Zf(i,r);function i(o){Kf(this,i);var a=qf(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return a.childBindings={domNode:null},a}return Gf(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;yl.unregister(this.props.name)}},{key:"registerElems",value:function(a){yl.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return To.createElement(t,vl({},this.props,{parentBindings:this.childBindings}))}}]),i}(To.Component);return n.propTypes={name:ue.string,id:ue.string},n}},qw=Kw;Object.defineProperty(pe,"__esModule",{value:!0});pe.Helpers=pe.ScrollElement=pe.ScrollLink=A0=pe.animateScroll=pe.scrollSpy=pe.Events=pe.scroller=pe.Element=pe.Button=b0=pe.Link=void 0;var Zw=Nc,w0=Lt(Zw),Jw=Bc,_0=Lt(Jw),e_=Uc,E0=Lt(e_),t_=$r,P0=Lt(t_),n_=Vi,T0=Lt(n_),r_=Ui,x0=Lt(r_),i_=Ga,I0=Lt(i_),o_=Bi,k0=Lt(o_),a_=es,C0=Lt(a_),s_=qw,O0=Lt(s_);function Lt(e){return e&&e.__esModule?e:{default:e}}var b0=pe.Link=w0.default;pe.Button=_0.default;pe.Element=E0.default;pe.scroller=P0.default;pe.Events=T0.default;pe.scrollSpy=x0.default;var A0=pe.animateScroll=I0.default;pe.ScrollLink=k0.default;pe.ScrollElement=C0.default;pe.Helpers=O0.default;pe.default={Link:w0.default,Button:_0.default,Element:E0.default,scroller:P0.default,Events:T0.default,scrollSpy:x0.default,animateScroll:I0.default,ScrollLink:k0.default,ScrollElement:C0.default,Helpers:O0.default};const l_=C.nav`
    visibility: ${({visible:e})=>e?"visible":"hidden"};
    transform: translateX(${({visible:e})=>e?"0":-1e3}px);
    transition: all 0.25s ease-in-out;
`,u_=C.ul`
    list-style: none;
    text-transform: uppercase;
`,c_=C(b0)`
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;
    color: ${({theme:e})=>e.colors.white};
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({theme:e})=>e.colors.primary};
    }
`,Sl={Nav:l_,LinkList:u_,NavLink:c_},d_=["editions","controller","about","explore","news","faq"],D0=({visible:e=!0})=>{const t=d_.map(n=>P.jsx("li",{role:"menuitem",children:P.jsx(Sl.NavLink,{to:n,children:n})},n));return P.jsx(Sl.Nav,{visible:e?e.toString():void 0,children:P.jsx(Ee,{as:Sl.LinkList,gap:"3rem",wrap:"wrap",role:"menu",children:t})})},f_=C.button`
    width: 25px;
    height: 16px;
    position: relative;
    cursor: pointer;
    background: none;
    border: none;
    z-index: 100;

    &:hover > span {
        width: 12px;

        &::before,
        &::after {
            width: 25px;
        }
    }
`,p_=C.span`
    width: ${({active:e})=>e?12:25}px;
    height: 2px;
    display: block;
    position: relative;
    background: ${({theme:e})=>e.colors.white};
    transition: width 0.2s ease-in-out;

    &::before,
    &::after {
      content: '';
      width: ${({active:e})=>`${e?25:12}px`};
      height: 2px;
      display: block;
      position: absolute;
      background: ${({theme:e})=>e.colors.white};
      transition: width 0.2s ease-in-out;
    }

    &::before {
      top: -7px;
      left: 0;
    }

    &::after {
      top: 7px;
      left: 0;
    }
  }
`,ep={BurgerBtn:f_,Lines:p_},m_=({active:e=!1,callback:t})=>P.jsx(ep.BurgerBtn,{onClick:t,"aria-label":"navigation-menu",children:P.jsx(ep.Lines,{active:e?e.toString():void 0})}),h_=C(Ee)`
    & > span {
        font-size: 1.6rem;
        color: ${({theme:e})=>e.colors.grey};
    }

    @media ${({theme:e})=>e.media.medium} {
        align-self: center;
        flex-direction: column;
    }
`,g_=C.div`
    min-width: 5.5rem;
    text-align: center;

    & > div {
        font-size: 4rem;
        font-weight: 700;
        color: ${({theme:e})=>e.colors.sea};
    }

    & > span {
        font-size: 1.6rem;
        color: ${({theme:e})=>e.colors.grey};
    }
`,xo={Timer:h_,TimerItem:g_},v_=e=>{const[t,n]=F.useState(e);return F.useEffect(()=>{const r=setInterval(()=>{n(i=>i===0?(clearInterval(r),0):i-1)},1e3);return()=>{clearInterval(r)}},[]),t},y_=({initialTime:e})=>{const t=v_(e),n=a=>{const s=Math.floor(a/3600),l=Math.floor(a%3600/60),d=a%60;return{hours:s,minutes:l,secs:d}},{hours:r,minutes:i,secs:o}=n(t);return P.jsxs(xo.Timer,{align:"center",gap:"1.9rem",children:[P.jsx("span",{children:"Release"}),P.jsxs(Ee,{justify:"space-between",gap:"0.5rem",children:[P.jsxs(xo.TimerItem,{children:[P.jsx("div",{children:r}),P.jsx("span",{children:"H"})]}),P.jsxs(xo.TimerItem,{children:[P.jsx("div",{children:i}),P.jsx("span",{children:"M"})]}),P.jsxs(xo.TimerItem,{children:[P.jsx("div",{children:o}),P.jsx("span",{children:"S"})]})]})]})},S_=()=>{const[e,t]=F.useState(!1),n=()=>{t(!e)};return P.jsx($f.Header,{children:P.jsx(Vn,{children:P.jsxs($f.HeaderWrapper,{justify:"space-between",gap:"3rem",children:[P.jsxs(Ee,{align:"flex-start",gap:"5rem",wrap:"wrap",children:[P.jsx(m_,{callback:n,active:e}),P.jsx(D0,{visible:e})]}),P.jsx(y_,{initialTime:86399})]})})})},w_="/game-promo/assets/footer-29fd2a4a.webp",__="/game-promo/assets/footer-2x-29f23764.webp",E_=C.footer`
    padding-top: 15rem;
    padding-bottom: 1rem;
    text-align: center;
    background: url(${w_}) no-repeat right top;

    nav > ul {
        justify-content: center;
    }

    @media (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 2) {
        background: url(${__}) no-repeat right top;
    }
`,P_=C.p`
    margin-top: 5rem;
    margin-bottom: 3.8rem;
    color: ${({theme:e})=>e.colors.grey};
    font-size: 1.6rem;
`,T_=C.img`
    margin-bottom: 2rem;
`,x_=C.div`
    margin-bottom: 1.3rem;
`,I_=C.small`
    font-size: 1.6rem;
    color: ${({theme:e})=>e.colors.grey};

    & > a {
        text-decoration: none;
        color: ${({theme:e})=>e.colors.primary};
    }
`,Qr={Footer:E_,FooterInfo:P_,FooterImg:T_,FooterYear:x_,FooterCopy:I_},k_="data:image/webp;base64,UklGRmwDAABXRUJQVlA4WAoAAAAQAAAALQAAIgAAQUxQSJkBAAABkHPbtrG94vfn2LaNyrZtVLZt23byVDEq27adVLZ5793Fcx+diJgABC9eKwGSB/PL3q4FJLk/7O6cS5L7wrx8okhuyieLZpKUPVtd5GIZl4CFFo4UcR4YafuXUxanC7sj4ZwfnVwWcws46yuHsCQBZ/w8h6zNwprIuoMIM49/Euhs+tByTTz6XxvbaSBn28FTB9SOQbg5u59Q9HsaQELZdpOcvWdO7l01qmElX+l6nzQMeDpVqy2f6fvl2nyWdIPOfaPn6cFTbOa9oueLC+c0Sf7pD2DYZ2oaRfLG1ArAYBtJrbRRRwfnADDBxb+5MJ1W/XF9DQCIme2DvD46IwBUWm0srFmGVtMgFkBCra1f6X1jTHoAqLLos6H9PGrYvlVGisbOR6r/xnazEgBUX3qXpNHKkD9mpEba4xbyzTf6PwmUHX+X3ubKhCxwN3SeuLyV7dakR/T5fmph+M1UpvGknaeuXz+0tlfRYTZqrW2fZpWLRfiDbYZURpnPTpMERBrTfNtPG9WJVskgsbrz0pgTXVJAbEzDHAgVAFZQOCCsAQAAcAsAnQEqLgAjAD6RPpdIpaMiISqqqLASCWwGKADzl7eux0b5QOjg37M1IQHiS9IDzF/sb+sHvO+iXyVetA9AD9gOsk/cP0mCZmVE4EnhFrGoZrJfpxNaZ1FfT81hSkju2JCwAAD+/W5J64jbPvx1qtkOH//QcPaePv+QQKRPnPslP+g4f0HD39b//SlJMxfgmJ06YE3dDXUpiWePP+vOe786dp/TWuIDnRR4Pp5tNQAVgcZjM46a86Z15ftIGd5twDZh3vY6D4vMr1U7n51fmZcTnF4OxSUfZySmX4Efect8QOSef5KPXRFR0FnXMbecTPhZ1GnFQIfBj6/2zkUj/51h+NIDREHhLpurQN3inV7tJSX6PGlSLISuDYISsuW5qsJ+TK69BP4QGfga6zq3ZH5m2AqAGJ3NbLT2vskFoyKYjv5VNndYH/7Khv4lHphrTOmBz8eejwFvePKmar/2rgxpMD5LeOF6tS14KbmQlY1qPoBOVaKiNHcLGxphdPlDz/5yiPb/bCnz/XhXT3IZF7evhv3L/6MC/t07jWXtQj//q64sMG+CnPOAAAA=",C_="data:image/webp;base64,UklGRsQKAABXRUJQVlA4WAoAAAAQAAAAWwAARQAAQUxQSAsGAAANmRWI6H8Q4AgEkvbn3iEiUgMIwv+5g4gJSF+2NjtqtG3bGbFcOoGEUN3e3/fe3f/eeK+yCNIuE7EhQFQpGxAREyBdt2X59OnxDqtsnbUxDVkBA8crUzUhjONLX7JhR+3KWG95ClNSUlKZrCqYHa0EoDDSOTaS0zIOpVjjuF4LBbFYYwAhjQIAOScn2QV+f9fb4NmWPJxymXJTNesCZxiqdpbCusTFelmT87YlBP/8PMS7qKuDAGJjTyLT+PmQ1+Zs/eD5n9P4bVyRsjjr/VwAbpj5tz97mL6l1RjH0G7a04iz21/9Ym8/9Suh6ThvNk1tpjm9Ml95s9vFPq9CnMdl++h8VR2Or3AYu91T+DKuQi453WNuq2qczmD45veNLqsAJS4kKYQk5+QUN43lWdcAhMKULNEF4PSt+UU9Latwy/yVftEOcT1I6BqgQAyvx5slkV01j1VU1hvkjECrcNs8BefTWqGkmlXen7LeBJLZYg2VbqJFmVdAWW8iAsZ6i8p6RU94/0qkt5AheKx2Bux6LfN2c1ytadjvP69W3//06dO7ECbo99KDPoXxXSgBpN+njIa2Sd+BD3pali3eSkrQS/EYf/bTZ7xDd1cfv53M5k0AKS7mvp/+7Pofi4IrYhDzFEvnrlJWxKS0FSUpqrOpQsIPXtV1jlo+feWuMnyNsgLjEfZuA4lJsql+elh+HHIWbGLKICkWt50W0bs7VZCqNXX4NqpCAIGhIuF7VM45nudvX52tKrqRLCKhIQTLzJiHooqkgIjxcWndbbwDbMwJCjG4tRJqK6mICJFlIk4JBJAqQVlFB1eyr/gt3DXAshxOxTaBbqVMoSVC7o8opDBERIaJ2JBYjoXN8WXOXVvRJe+h0EVVRSyunFW8r8K0XDKuqsYToKqMa1XIsuVEUmpNWWmYpa7Oma6BLFN/UNtUuDJOUbvN/ebr4ZJvtt2//xWlqh2uHiyMqZohAgjB1fzvv6vdArCNpWkWKJRxORUBJW9tqAyN0yVj2/BtIlzWRRVaGmZFVYc0LCBnjcvjl5cWQLcj/e//Sqi8AZRIAZQxZ0LTNQ3TMBa9BLCJBCiIoMAyihbqWktZ6qqpvhxwdn//979s4Oo6jQMxXiuxIGbVHJyFOhG4dp4IV5MCIEgUUUXD4GIUXHMpORPOu+3w2WO7P3750nqcJQXyNAnqtttInBJgTIz+uosyxFz0aedM6RPokdzh5bAJF4BA2W+qT8/3uDz0tvaG1FIGQkuzyOdc9m9JWVS1I5CywjbNku2L6rxscWWJnTycun9bvuLjfx52ux3FIQKhca7k//633fo3lDGlIrvHENIxg3dimb9+jkvd2SvyqQq0jLTg2sNYtx6oG41KA4RQDK6WnBZtrVUCYNu2j3UviSEMAMp6Jk2Lfdr/Px5hrylqyWS03oLk8DLGtnZ8XYrf+t1+05SXDPOgRmTop4XvPAAFK+mrr70Lf5qHL1XepnRJt93Uj61mhVK2gCqISK8ocZruW1DTLtkPuRCSYQBQAgGKKFJy5byPgpcnbbtjumB+8tNPn1NKSyy+dQBI8UbRKC3woMbS8WVcuA4Wr0nxOo8lF/3pL/LLAlQ83O/9oiqlANTV2i8FhMukb4AG46U6ZAEnZlw/J5DUbAgu4nX3+fnDL7om5yIDzoZc8B3JNhuRl36cpa4trs+nnnm7qSucZpzleUDrnSpzWAADUlGFQAWqogi1t9N0yZounI7FEK5fIhEoMBGL4koGliGLM947T2pcQSmiKEUKihTZ75rw6XDJBW+e+9rh+nI6Weuqh33s54I36qxKphjHyqosLKwAlIUAhNrQMV5iy2aAKhP0VUoKhfdKxAXfMUJJioCMYTAbQ0yW5pBjxk2VSFHGCUTuw17GKeK7FiiJgGGUQbiYF/COgKWcUSIFQSExCzhYUuaC93o62PDhSWTqz1yZhjm5+v6RME7ybtIUqeoULgAqJQswFyFCQyAo3vs0aDbYbytXUswz4hiT4ceHivupvDtZBODcKSs5V04pGFYWrGkaUjLuftP3TVf7YSirglmECffL4gk/KgBWUDggkgQAAFAaAJ0BKlwARgA+MRKHQqIhDVVnABABglsCHABj0mB/APwA7Zaw/IfxL/cr+69DXtt22/bX++5ixxr/n/yu/1Xuv/nPsA/JPsC/pP/ff5T+zP9V7gHmA/lH81/3H+J9oj+3eyL0AP5//W+sK9Aj9gPSm/6//A+B39qv2p+A3+Wf1T/y9YAa4NnPeALS7bux61TMHhfcgdz3P0giBahL8HrLiIt1nRPh+Dcgs04MXacf+jkizk9TRlzqg7TwRFrYuupPJEbkpwDzFBE/UyCNd/ysLx0MOro6D/C9AAD+9pHA9uW1g8x3Wg8XLnNZYdaFvW56F9a/uPMSGicpvJ6Jkx1zx7rqzKwvXCQN1PaxnVm9t8m4XPAsEvqn/2b64deOAvXfTpRLRGqb8Ksr30Y+usmicwjTAAK1GwIJS1Yja/e8Av3LfjsijN7cfh+WBVzvuZK6cLqLE6K4grTzfIWYFgLv9Avf4sed1VX2w5HZCh2ZsTi6uwpMm8n2cIPLlOuMkmfu5Dzd/ovhd07Y5j1YGCqbNgz2O5f2NAyuUP/t0b1jXqOBdLZ2TbpjQT/I0vVJ1vrpjAUtEJJhB+uI9Q8ws25u2tuLDsyCjfXGamMiHdFMhpRrQRqsbdQnTV0tCWgnEUDLMl4v6yDqR1iMksVGE2BbqJH4gnA0HlT9FOBrpq3koU/MNsw0gDujhMPuA9cW/6nyE22zOGLGfcRdhSkifnWePybUHp8A4KuZee6Cd9oNsI87imAlGJMik63CaLlR77loB48JOw6gUBTKVk320xNy/oBaf3ZbdDNck+Ej0zYyTVqerXIv6naWslOuX/Z8ymeX/EfXMLdrShJBIQxmLxh42P8EiucuzUhM+SE9QTJHv/jojbjN4rEjzawmyFyhGOQW+LRA0iVHiwnqjt+cuZEGWvhOzQO/0Hcfcy8xEbtGMr1aHF0T5qJ59Ef0iXBEl2wIuO/OC462X35QK5ITbMHlFb3NSDaIUp4aCjRuOs6eRVslIv6EezHUdF/IAZzlKEDhon1cFBolGEwNwjR9UCrECeMtChi9qSvQ27G+iF4PxMBpOvIzaG4eq1rfH2U2X3Q4rjbYSSS1wNNNsoTi0ixBRK8XKc5TUmUgV1ZM0ihEx4Od27PM/0CLwyZOXuNQMgk1i7qrDy8dV5EbdKAptUBeWE+7NM6vJb4UwHUpMCkL0HAng2A90hVnzUZxwK+slI1bdHcWejELIoToaaOYmYXIU6DqKGs8jSsxkKwApctBEv9DHOMf+wcChchb/sWAOQqlhPvHp+922ENdJtnqWQE6DUCNnjhIWVHRdxuVaEdq37T/qpTKbS7PMTGQhfZrfJaqI38Al7vuMnN/51yJJBt/E7L80oprQBPwuwbc0F3VKGKuDwYC7KPldbej1THxrmWMnHK9I5ON+ompTTHu186zxd/uO4HpJUjKZDk5SJEvht9X2Ymn66IC+BYAeZZjJzeA67Ns/yPZQyZlXapC7Qamd0f5/2lEKAiEhNBvrPP9OwmfzMP//vW6i/KV0agD/rsUjL3xzIimuvOfhu/9wAAAAA==",O_=()=>P.jsx(Qr.Footer,{children:P.jsxs(Vn,{children:[P.jsx(D0,{}),P.jsx(Qr.FooterInfo,{children:"Download of this product is subject to the PlayStation Network Terms of Service and our Software Usage Terms plus any specific additional conditions applying to this product. If you do not wish to accept these terms, do not download this product. See Terms of Service for more important information."}),P.jsx(Qr.FooterImg,{src:k_,srcSet:`${C_} 2x`,alt:"ps-logo",width:"45",height:"35"}),P.jsx(Qr.FooterYear,{children:"2025"}),P.jsxs(Qr.FooterCopy,{children:["Developed by"," ",P.jsx("a",{href:"https://github.com/larbra",target:"_blank",children:"Kirill lar"})]})]})}),b_=C.div`
    max-width: 47rem;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 1rem 2rem;
    z-index: 999;
    opacity: ${({opened:e})=>e?1:0};
    visibility: ${({opened:e})=>e?"visible":"hidden"};
    background-color: ${({theme:e})=>e.colors.background};
    background-repeat: no-repeat;
    background-position: top;
    background-image: url(${({img:e})=>e});
    border-radius: 1.2rem;
    border: 1px solid ${({theme:e})=>e.colors.darkgrey};
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;

    button {
        margin-top: 1.9rem;
        width: 100%;
    }

    @media ${({theme:e})=>e.media.large} {
        padding: 0.5rem 2rem;
    }

    @media (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 2) {
        background-image: url(${({img2x:e})=>e});
    }
`,A_=C.div`
    width: 15px;
    text-align: center;
    margin-left: auto;
    margin-bottom: 2rem;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }

    @media ${({theme:e})=>e.media.large} {
        margin-bottom: 1rem;
    }
`,D_=C.h3`
    margin-bottom: 1rem;
    color: #8856d9;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;

    @media ${({theme:e})=>e.media.large} {
        margin-bottom: 0.5rem;
    }
`,$_=C.div`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
`,M_=C.div`
    margin-bottom: 1.7rem;
    width: 100%;

    @media ${({theme:e})=>e.media.large} {
        margin-bottom: 1rem;
    }
`,$0=C.label`
    display: block;
    margin-bottom: 0.7rem;
    font-size: 1rem;
    text-transform: uppercase;
`,M0=C.input.attrs(({type:e})=>({type:e||"text"}))`
    width: ${({type:e})=>e==="checkbox"?"auto":100}%;
    padding: 1.4rem 1.6rem;
    color: ${({theme:e})=>e.colors.white};
    border: none;
    border-radius: 6px;
    background: ${({theme:e})=>e.colors.darkgrey};

    @media ${({theme:e})=>e.media.large} {
        padding: 1rem 1.2rem;
    }
`,j_=C(Ee)`
    margin-bottom: 1.7rem;
    position: relative;

    @media ${({theme:e})=>e.media.large} {
        margin-bottom: 1rem;
    }
`,N_=C.span`
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    border-radius: 6px;
    background-color: ${({theme:e})=>e.colors.darkgrey};
`,L_=C(M0)`
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;

    &:checked {
        & + span {
            &::before {
                content: '✔';
            }
        }
    }
`,R_=C($0)`
    margin-bottom: 0;
    span {
        color: #ff4136;
        font-weight: 700;
        text-decoration-line: underline;
    }
`,z_=C.p`
    margin-bottom: 1.3rem;
    color: #d9d9d9;
    font-size: 1rem;
`,F_=C.span`
    font-size: 1.4rem;
    font-weight: 500;
`,B_=C.span`
    font-size: 2rem;
    font-weight: 500;
`,U_=C.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    opacity: 0.7;
    visibility: ${({opened:e})=>e?"visible":"hidden"};
    background-color: ${({theme:e})=>e.colors.background};
    transition: all 0.15s ease-in-out;
`,ne={Overlay:U_,Modal:b_,ModalClose:A_,ModalTitle:D_,ModalEdition:$_,FormGroup:M_,Label:$0,Input:M0,CheckboxContainer:j_,Check:N_,ModalCheckbox:L_,CheckLabel:R_,ModalDescription:z_,SummaDescription:F_,TotalSumma:B_},W_=C.button`
    display: block;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({theme:e})=>e.colors.white};
    cursor: pointer;
    border: none;
    border-radius: 6px;
    transition: all 0.2s;

    ${({size:e})=>e==="big"&&Ct`
                font-size: 1.6rem;
                padding: 1.4rem 1.9rem;
            `||e==="medium"&&Ct`
                font-size: 1.6rem;
                padding: 1.1rem 3.6rem;
            `||e==="small"&&Ct`
                font-size: 1.3rem;
                padding: 0.7rem 1.8rem;
            `}

    ${({color:e})=>e==="primary"&&Ct`
                background-color: ${({theme:t})=>t.colors.primary};
            `||e==="secondary"&&Ct`
                background-color: ${({theme:t})=>t.colors.secondary};
            `||e==="dark"&&Ct`
                background-color: ${({theme:t})=>t.colors.darkgrey};
            `}

    &:hover {
        filter: brightness(1.2);
        transform: translateY(-0.3rem);
        box-shadow: 0 1.5rem 1rem rgb(0 0 0 / 20%);
    }

    &:active,
    &:focus {
        outline: 0;
        filter: brightness(1.1);
        transform: translateY(-0.1rem);
        box-shadow: 0 0.75rem 0.5rem rgb(0 0 0 / 20%);
    }
`,H_={Button:W_},Mr=({title:e,size:t="medium",color:n="primary",callback:r,...i})=>P.jsx(H_.Button,{size:t,color:n,onClick:r,...i,children:e}),V_="/game-promo/assets/modal-fab9be73.webp",X_="/game-promo/assets/modal-2x-dc684193.webp",Q_=({opened:e=!1,currentEdition:{edition:t,price:n},onCloseModal:r})=>P.jsxs(P.Fragment,{children:[P.jsx(ne.Overlay,{onClick:r,opened:e?e.toString():void 0}),P.jsxs(ne.Modal,{opened:e?e.toString():void 0,img:V_,img2x:X_,children:[P.jsx(ne.ModalClose,{onClick:r,children:"x"}),P.jsxs("div",{children:[P.jsx(ne.ModalTitle,{children:"God of War Ragnarök"}),P.jsx(ne.ModalEdition,{children:t})]}),P.jsxs("form",{children:[P.jsxs(ne.FormGroup,{children:[P.jsx(ne.Label,{htmlFor:"card",children:"credit card:"}),P.jsx(ne.Input,{id:"card",name:"card",required:!0,placeholder:"0000 0000 0000 0000"})]}),P.jsxs(Ee,{justify:"space-between",gap:"1rem",children:[P.jsxs(ne.FormGroup,{children:[P.jsx(ne.Label,{htmlFor:"expire",children:"expire:"}),P.jsx(ne.Input,{id:"expire",name:"expire",required:!0,placeholder:"mm/yy"})]}),P.jsxs(ne.FormGroup,{children:[P.jsx(ne.Label,{htmlFor:"cvv",children:"cvv:"}),P.jsx(ne.Input,{type:"password",name:"cvv",id:"cvv",required:!0,placeholder:"***"})]})]}),P.jsxs(ne.FormGroup,{children:[P.jsx(ne.Label,{htmlFor:"instant",children:"instant:"}),P.jsx(ne.Input,{id:"instant",name:"instant",required:!0,placeholder:"enter instant"})]}),P.jsxs(ne.CheckboxContainer,{as:ne.FormGroup,gap:"1.2rem",align:"center",children:[P.jsx(ne.ModalCheckbox,{type:"checkbox",id:"agreement",name:"agreement",required:!0}),P.jsx(ne.Check,{}),P.jsxs(ne.CheckLabel,{htmlFor:"agreement",children:["I agree with the ",P.jsx("span",{children:"rules"})," of the site"]})]}),P.jsx(ne.ModalDescription,{children:"Download of this product is subject to the PlayStation Network Terms of Service and our Software Usage Terms plus any specific additional conditions applying to this product. If you do not wish to accept these terms, do not download this product. See Terms of Service for more important information."}),P.jsxs(Ee,{justify:"space-between",align:"center",children:[P.jsx(ne.SummaDescription,{children:"YOUR TOTAL SUMMA:"}),P.jsxs(ne.TotalSumma,{children:[n,"$"]})]}),P.jsx(Mr,{type:"submit",title:"buy game"})]})]})]}),Y_=C.button`
    position: fixed;
    padding: 8px 16px;
    right: 3rem;
    bottom: 3rem;
    font-size: 22px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({theme:e})=>e.colors.white};

    &:hover {
        opacity: 0.8;
    }
`,G_={GoTopBtn:Y_},K_=()=>{const[e,t]=F.useState(!1);return F.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>200?t(!0):t(!1)})},[]),P.jsx(P.Fragment,{children:e&&P.jsx(G_.GoTopBtn,{onClick:()=>A0.scrollToTop({duration:0}),children:"↑"})})},q_="/game-promo/assets/bg-b59dc2c9.webp",Z_="/game-promo/assets/bg-2x-3ad4c3e7.webp",J_="/game-promo/assets/snow-5e353014.webp",eE=C.section`
    padding-top: 23rem;
    min-height: 77rem;
    position: relative;

    &::before,
    &::after {
        content: '';
        width: 136.3rem;
        height: 76.5rem;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
    }

    &::before {
        background: url(${q_}) center/cover no-repeat;
    }

    &::after {
        background: url(${J_}) center/cover no-repeat;
        opacity: 0.1;
    }

    @media ${({theme:e})=>e.media.small} {
        button {
            margin: 0 auto;
        }
    }

    @media (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 2) {
        &::before {
            background: url(${Z_}) center/cover no-repeat;
        }
    }
`,tE=C(Vn)`
    position: relative;
    z-index: 10;
    animation: ${eS} 1.2s ease-in-out;
`,nE=C.div`
    max-width: 53.8rem;

    @media ${({theme:e})=>e.media.small} {
        max-width: 100%;
        text-align: center;
    }
`,rE=C.h1`
    margin-bottom: 2.6rem;
    font-size: 10rem;
    font-weight: 600;
    line-height: 10rem;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    @media ${({theme:e})=>e.media.small} {
        font-size: 6rem;
        line-height: 6rem;
    }
`,iE=C.p`
    margin-bottom: 5rem;
    font-size: 1.8rem;
    color: ${({theme:e})=>e.colors.sea};
`,Yr={Main:eE,MainContainer:tE,MainWrapper:nE,MainTitle:rE,MainDescription:iE},oE=({onClickBuyNow:e})=>P.jsx(Yr.Main,{children:P.jsx(Yr.MainContainer,{children:P.jsxs(Yr.MainWrapper,{children:[P.jsx(Yr.MainTitle,{children:"God of War Ragnarök"}),P.jsx(Yr.MainDescription,{children:"Taking place three years following the events of the previous game, Fimbulwinter, a great winter that spans three summers, is drawing to a close which will begin the prophesied Ragnarök."}),P.jsx(Mr,{title:"buy now",callback:()=>e("standard edition",19.99)})]})})});function aE(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function sE(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var lE=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(sE(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=aE(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),je="-ms-",Ia="-moz-",Y="-webkit-",j0="comm",Hc="rule",Vc="decl",uE="@import",N0="@keyframes",cE="@layer",dE=Math.abs,ns=String.fromCharCode,fE=Object.assign;function pE(e,t){return Oe(e,0)^45?(((t<<2^Oe(e,0))<<2^Oe(e,1))<<2^Oe(e,2))<<2^Oe(e,3):0}function L0(e){return e.trim()}function mE(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function Iu(e,t){return e.indexOf(t)}function Oe(e,t){return e.charCodeAt(t)|0}function Di(e,t,n){return e.slice(t,n)}function bt(e){return e.length}function Xc(e){return e.length}function Io(e,t){return t.push(e),e}function hE(e,t){return e.map(t).join("")}var rs=1,Cr=1,R0=0,Ge=0,ye=0,jr="";function is(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:rs,column:Cr,length:a,return:""}}function Gr(e,t){return fE(is("",null,null,"",null,null,0),e,{length:-e.length},t)}function gE(){return ye}function vE(){return ye=Ge>0?Oe(jr,--Ge):0,Cr--,ye===10&&(Cr=1,rs--),ye}function tt(){return ye=Ge<R0?Oe(jr,Ge++):0,Cr++,ye===10&&(Cr=1,rs++),ye}function jt(){return Oe(jr,Ge)}function Qo(){return Ge}function Yi(e,t){return Di(jr,e,t)}function $i(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z0(e){return rs=Cr=1,R0=bt(jr=e),Ge=0,[]}function F0(e){return jr="",e}function Yo(e){return L0(Yi(Ge-1,ku(e===91?e+2:e===40?e+1:e)))}function yE(e){for(;(ye=jt())&&ye<33;)tt();return $i(e)>2||$i(ye)>3?"":" "}function SE(e,t){for(;--t&&tt()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return Yi(e,Qo()+(t<6&&jt()==32&&tt()==32))}function ku(e){for(;tt();)switch(ye){case e:return Ge;case 34:case 39:e!==34&&e!==39&&ku(ye);break;case 40:e===41&&ku(e);break;case 92:tt();break}return Ge}function wE(e,t){for(;tt()&&e+ye!==47+10;)if(e+ye===42+42&&jt()===47)break;return"/*"+Yi(t,Ge-1)+"*"+ns(e===47?e:tt())}function _E(e){for(;!$i(jt());)tt();return Yi(e,Ge)}function EE(e){return F0(Go("",null,null,null,[""],e=z0(e),0,[0],e))}function Go(e,t,n,r,i,o,a,s,l){for(var d=0,g=0,y=a,p=0,w=0,m=0,E=1,I=1,h=1,f=0,u="",c=i,v=o,S=r,_=u;I;)switch(m=f,f=tt()){case 40:if(m!=108&&Oe(_,y-1)==58){Iu(_+=G(Yo(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:_+=Yo(f);break;case 9:case 10:case 13:case 32:_+=yE(m);break;case 92:_+=SE(Qo()-1,7);continue;case 47:switch(jt()){case 42:case 47:Io(PE(wE(tt(),Qo()),t,n),l);break;default:_+="/"}break;case 123*E:s[d++]=bt(_)*h;case 125*E:case 59:case 0:switch(f){case 0:case 125:I=0;case 59+g:h==-1&&(_=G(_,/\f/g,"")),w>0&&bt(_)-y&&Io(w>32?np(_+";",r,n,y-1):np(G(_," ","")+";",r,n,y-2),l);break;case 59:_+=";";default:if(Io(S=tp(_,t,n,d,g,i,s,u,c=[],v=[],y),o),f===123)if(g===0)Go(_,t,S,S,c,o,y,s,v);else switch(p===99&&Oe(_,3)===110?100:p){case 100:case 108:case 109:case 115:Go(e,S,S,r&&Io(tp(e,S,S,0,0,i,s,u,i,c=[],y),v),i,v,y,s,r?c:v);break;default:Go(_,S,S,S,[""],v,0,s,v)}}d=g=w=0,E=h=1,u=_="",y=a;break;case 58:y=1+bt(_),w=m;default:if(E<1){if(f==123)--E;else if(f==125&&E++==0&&vE()==125)continue}switch(_+=ns(f),f*E){case 38:h=g>0?1:(_+="\f",-1);break;case 44:s[d++]=(bt(_)-1)*h,h=1;break;case 64:jt()===45&&(_+=Yo(tt())),p=jt(),g=y=bt(u=_+=_E(Qo())),f++;break;case 45:m===45&&bt(_)==2&&(E=0)}}return o}function tp(e,t,n,r,i,o,a,s,l,d,g){for(var y=i-1,p=i===0?o:[""],w=Xc(p),m=0,E=0,I=0;m<r;++m)for(var h=0,f=Di(e,y+1,y=dE(E=a[m])),u=e;h<w;++h)(u=L0(E>0?p[h]+" "+f:G(f,/&\f/g,p[h])))&&(l[I++]=u);return is(e,t,n,i===0?Hc:s,l,d,g)}function PE(e,t,n){return is(e,t,n,j0,ns(gE()),Di(e,2,-2),0)}function np(e,t,n,r){return is(e,t,n,Vc,Di(e,0,r),Di(e,r+1,-1),r)}function hr(e,t){for(var n="",r=Xc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function TE(e,t,n,r){switch(e.type){case cE:if(e.children.length)break;case uE:case Vc:return e.return=e.return||e.value;case j0:return"";case N0:return e.return=e.value+"{"+hr(e.children,r)+"}";case Hc:e.value=e.props.join(",")}return bt(n=hr(e.children,r))?e.return=e.value+"{"+n+"}":""}function xE(e){var t=Xc(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function IE(e){return function(t){t.root||(t=t.return)&&e(t)}}var kE=function(t,n,r){for(var i=0,o=0;i=o,o=jt(),i===38&&o===12&&(n[r]=1),!$i(o);)tt();return Yi(t,Ge)},CE=function(t,n){var r=-1,i=44;do switch($i(i)){case 0:i===38&&jt()===12&&(n[r]=1),t[r]+=kE(Ge-1,n,r);break;case 2:t[r]+=Yo(i);break;case 4:if(i===44){t[++r]=jt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ns(i)}while(i=tt());return t},OE=function(t,n){return F0(CE(z0(t),n))},rp=new WeakMap,bE=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!rp.get(r))&&!i){rp.set(t,!0);for(var o=[],a=OE(n,o),s=r.props,l=0,d=0;l<a.length;l++)for(var g=0;g<s.length;g++,d++)t.props[d]=o[l]?a[l].replace(/&\f/g,s[g]):s[g]+" "+a[l]}}},AE=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function B0(e,t){switch(pE(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+Ia+e+je+e+e;case 6828:case 4268:return Y+e+je+e+e;case 6165:return Y+e+je+"flex-"+e+e;case 5187:return Y+e+G(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+je+"flex-$1$2")+e;case 5443:return Y+e+je+"flex-item-"+G(e,/flex-|-self/,"")+e;case 4675:return Y+e+je+"flex-line-pack"+G(e,/align-content|flex-|-self/,"")+e;case 5548:return Y+e+je+G(e,"shrink","negative")+e;case 5292:return Y+e+je+G(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+G(e,"-grow","")+Y+e+je+G(e,"grow","positive")+e;case 4554:return Y+G(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bt(e)-1-t>6)switch(Oe(e,t+1)){case 109:if(Oe(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+Ia+(Oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Iu(e,"stretch")?B0(G(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Oe(e,t+1)!==115)break;case 6444:switch(Oe(e,bt(e)-3-(~Iu(e,"!important")&&10))){case 107:return G(e,":",":"+Y)+e;case 101:return G(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Y+(Oe(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+je+"$2box$3")+e}break;case 5936:switch(Oe(e,t+11)){case 114:return Y+e+je+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+je+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+je+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Y+e+je+e+e}return e}var DE=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Vc:t.return=B0(t.value,t.length);break;case N0:return hr([Gr(t,{value:G(t.value,"@","@"+Y)})],i);case Hc:if(t.length)return hE(t.props,function(o){switch(mE(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return hr([Gr(t,{props:[G(o,/:(read-\w+)/,":"+Ia+"$1")]})],i);case"::placeholder":return hr([Gr(t,{props:[G(o,/:(plac\w+)/,":"+Y+"input-$1")]}),Gr(t,{props:[G(o,/:(plac\w+)/,":"+Ia+"$1")]}),Gr(t,{props:[G(o,/:(plac\w+)/,je+"input-$1")]})],i)}return""})}},$E=[DE],ME=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(E){var I=E.getAttribute("data-emotion");I.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var i=t.stylisPlugins||$E,o={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(E){for(var I=E.getAttribute("data-emotion").split(" "),h=1;h<I.length;h++)o[I[h]]=!0;s.push(E)});var l,d=[bE,AE];{var g,y=[TE,IE(function(E){g.insert(E)})],p=xE(d.concat(i,y)),w=function(I){return hr(EE(I),p)};l=function(I,h,f,u){g=f,w(I?I+"{"+h.styles+"}":h.styles),u&&(m.inserted[h.name]=!0)}}var m={key:n,sheet:new lE({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return m.sheet.hydrate(s),m},U0={exports:{}},Z={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke=typeof Symbol=="function"&&Symbol.for,Qc=ke?Symbol.for("react.element"):60103,Yc=ke?Symbol.for("react.portal"):60106,os=ke?Symbol.for("react.fragment"):60107,as=ke?Symbol.for("react.strict_mode"):60108,ss=ke?Symbol.for("react.profiler"):60114,ls=ke?Symbol.for("react.provider"):60109,us=ke?Symbol.for("react.context"):60110,Gc=ke?Symbol.for("react.async_mode"):60111,cs=ke?Symbol.for("react.concurrent_mode"):60111,ds=ke?Symbol.for("react.forward_ref"):60112,fs=ke?Symbol.for("react.suspense"):60113,jE=ke?Symbol.for("react.suspense_list"):60120,ps=ke?Symbol.for("react.memo"):60115,ms=ke?Symbol.for("react.lazy"):60116,NE=ke?Symbol.for("react.block"):60121,LE=ke?Symbol.for("react.fundamental"):60117,RE=ke?Symbol.for("react.responder"):60118,zE=ke?Symbol.for("react.scope"):60119;function ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qc:switch(e=e.type,e){case Gc:case cs:case os:case ss:case as:case fs:return e;default:switch(e=e&&e.$$typeof,e){case us:case ds:case ms:case ps:case ls:return e;default:return t}}case Yc:return t}}}function W0(e){return ot(e)===cs}Z.AsyncMode=Gc;Z.ConcurrentMode=cs;Z.ContextConsumer=us;Z.ContextProvider=ls;Z.Element=Qc;Z.ForwardRef=ds;Z.Fragment=os;Z.Lazy=ms;Z.Memo=ps;Z.Portal=Yc;Z.Profiler=ss;Z.StrictMode=as;Z.Suspense=fs;Z.isAsyncMode=function(e){return W0(e)||ot(e)===Gc};Z.isConcurrentMode=W0;Z.isContextConsumer=function(e){return ot(e)===us};Z.isContextProvider=function(e){return ot(e)===ls};Z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qc};Z.isForwardRef=function(e){return ot(e)===ds};Z.isFragment=function(e){return ot(e)===os};Z.isLazy=function(e){return ot(e)===ms};Z.isMemo=function(e){return ot(e)===ps};Z.isPortal=function(e){return ot(e)===Yc};Z.isProfiler=function(e){return ot(e)===ss};Z.isStrictMode=function(e){return ot(e)===as};Z.isSuspense=function(e){return ot(e)===fs};Z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===os||e===cs||e===ss||e===as||e===fs||e===jE||typeof e=="object"&&e!==null&&(e.$$typeof===ms||e.$$typeof===ps||e.$$typeof===ls||e.$$typeof===us||e.$$typeof===ds||e.$$typeof===LE||e.$$typeof===RE||e.$$typeof===zE||e.$$typeof===NE)};Z.typeOf=ot;U0.exports=Z;var FE=U0.exports,H0=FE,BE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},UE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},V0={};V0[H0.ForwardRef]=BE;V0[H0.Memo]=UE;var WE=!0;function X0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Kc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||WE===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Q0=function(t,n,r){Kc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function HE(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var VE=/[A-Z]|^ms/g,XE=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Y0=function(t){return t.charCodeAt(1)===45},ip=function(t){return t!=null&&typeof t!="boolean"},wl=qy(function(e){return Y0(e)?e:e.replace(VE,"-$&").toLowerCase()}),op=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(XE,function(r,i,o){return At={name:i,styles:o,next:At},i})}return Wh[t]!==1&&!Y0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Mi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return At={name:n.name,styles:n.styles,next:At},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)At={name:r.name,styles:r.styles,next:At},r=r.next;var i=n.styles+";";return i}return QE(e,t,n)}case"function":{if(e!==void 0){var o=At,a=n(e);return At=o,Mi(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function QE(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Mi(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":ip(a)&&(r+=wl(o)+":"+op(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)ip(a[s])&&(r+=wl(o)+":"+op(o,a[s])+";");else{var l=Mi(e,t,a);switch(o){case"animation":case"animationName":{r+=wl(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var ap=/label:\s*([^\s;\n{]+)\s*(;|$)/g,At,qc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";At=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Mi(r,n,a)):o+=a[0];for(var s=1;s<t.length;s++)o+=Mi(r,n,t[s]),i&&(o+=a[s]);ap.lastIndex=0;for(var l="",d;(d=ap.exec(o))!==null;)l+="-"+d[1];var g=HE(o)+l;return{name:g,styles:o,next:At}},YE=function(t){return t()},GE=fd["useInsertionEffect"]?fd["useInsertionEffect"]:!1,G0=GE||YE,Zc={}.hasOwnProperty,K0=F.createContext(typeof HTMLElement<"u"?ME({key:"css"}):null);K0.Provider;var q0=function(t){return F.forwardRef(function(n,r){var i=F.useContext(K0);return t(n,i,r)})},Z0=F.createContext({}),Cu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",KE=function(t,n){var r={};for(var i in n)Zc.call(n,i)&&(r[i]=n[i]);return r[Cu]=t,r},qE=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Kc(n,r,i),G0(function(){return Q0(n,r,i)}),null},ZE=q0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Cu],o=[r],a="";typeof e.className=="string"?a=X0(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var s=qc(o,void 0,F.useContext(Z0));a+=t.key+"-"+s.name;var l={};for(var d in e)Zc.call(e,d)&&d!=="css"&&d!==Cu&&(l[d]=e[d]);return l.ref=n,l.className=a,F.createElement(F.Fragment,null,F.createElement(qE,{cache:t,serialized:s,isStringTag:typeof i=="string"}),F.createElement(i,l))}),JE=ZE,e2=P.Fragment;function he(e,t,n){return Zc.call(t,"css")?P.jsx(JE,KE(e,t),n):P.jsx(e,t,n)}function J0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return qc(t)}var M=function(){var t=J0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},t2=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var a=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))a=e(o);else{a="";for(var s in o)o[s]&&s&&(a&&(a+=" "),a+=s)}break}default:a=o}a&&(i&&(i+=" "),i+=a)}}return i};function n2(e,t,n){var r=[],i=X0(e,r,n);return r.length<2?n:i+t(r)}var r2=function(t){var n=t.cache,r=t.serializedArr;return G0(function(){for(var i=0;i<r.length;i++)Q0(n,r[i],!1)}),null},_l=q0(function(e,t){var n=!1,r=[],i=function(){for(var d=arguments.length,g=new Array(d),y=0;y<d;y++)g[y]=arguments[y];var p=qc(g,t.registered);return r.push(p),Kc(t,p,!1),t.key+"-"+p.name},o=function(){for(var d=arguments.length,g=new Array(d),y=0;y<d;y++)g[y]=arguments[y];return n2(t.registered,i,t2(g))},a={css:i,cx:o,theme:F.useContext(Z0)},s=e.children(a);return n=!0,F.createElement(F.Fragment,null,F.createElement(r2,{cache:t,serializedArr:r}),s)}),i2=Object.defineProperty,o2=(e,t,n)=>t in e?i2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ko=(e,t,n)=>(o2(e,typeof t!="symbol"?t+"":t,n),n),Ou=new Map,Co=new WeakMap,sp=0,a2=void 0;function s2(e){return e?(Co.has(e)||(sp+=1,Co.set(e,sp.toString())),Co.get(e)):"0"}function l2(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?s2(e.root):e[t]}`).toString()}function u2(e){let t=l2(e),n=Ou.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(a=>{a.forEach(s=>{var l;const d=s.isIntersecting&&i.some(g=>s.intersectionRatio>=g);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=d),(l=r.get(s.target))==null||l.forEach(g=>{g(d,s)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Ou.set(t,n)}return n}function eg(e,t,n={},r=a2){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:o,elements:a}=u2(n);let s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(a.delete(e),o.unobserve(e)),a.size===0&&(o.disconnect(),Ou.delete(i))}}function c2(e){return typeof e.children!="function"}var lp=class extends F.Component{constructor(e){super(e),ko(this,"node",null),ko(this,"_unobserveCb",null),ko(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),ko(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),c2(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=eg(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:m}=this.state;return e({inView:w,entry:m,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:a,skip:s,trackVisibility:l,delay:d,initialInView:g,fallbackInView:y,...p}=this.props;return F.createElement(t||"div",{ref:this.handleNode,...p},e)}};function tg({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:a,initialInView:s,fallbackInView:l,onChange:d}={}){var g;const[y,p]=F.useState(null),w=F.useRef(),[m,E]=F.useState({inView:!!s,entry:void 0});w.current=d,F.useEffect(()=>{if(a||!y)return;let u;return u=eg(y,(c,v)=>{E({inView:c,entry:v}),w.current&&w.current(c,v),v.isIntersecting&&o&&u&&(u(),u=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{u&&u()}},[Array.isArray(e)?e.toString():e,y,i,r,o,a,n,l,t]);const I=(g=m.entry)==null?void 0:g.target,h=F.useRef();!y&&I&&!o&&!a&&h.current!==I&&(h.current=I,E({inView:!!s,entry:void 0}));const f=[p,m.inView,m.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var ng={exports:{}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc=Symbol.for("react.element"),ed=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),gs=Symbol.for("react.strict_mode"),vs=Symbol.for("react.profiler"),ys=Symbol.for("react.provider"),Ss=Symbol.for("react.context"),d2=Symbol.for("react.server_context"),ws=Symbol.for("react.forward_ref"),_s=Symbol.for("react.suspense"),Es=Symbol.for("react.suspense_list"),Ps=Symbol.for("react.memo"),Ts=Symbol.for("react.lazy"),f2=Symbol.for("react.offscreen"),rg;rg=Symbol.for("react.module.reference");function ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Jc:switch(e=e.type,e){case hs:case vs:case gs:case _s:case Es:return e;default:switch(e=e&&e.$$typeof,e){case d2:case Ss:case ws:case Ts:case Ps:case ys:return e;default:return t}}case ed:return t}}}J.ContextConsumer=Ss;J.ContextProvider=ys;J.Element=Jc;J.ForwardRef=ws;J.Fragment=hs;J.Lazy=Ts;J.Memo=Ps;J.Portal=ed;J.Profiler=vs;J.StrictMode=gs;J.Suspense=_s;J.SuspenseList=Es;J.isAsyncMode=function(){return!1};J.isConcurrentMode=function(){return!1};J.isContextConsumer=function(e){return ht(e)===Ss};J.isContextProvider=function(e){return ht(e)===ys};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jc};J.isForwardRef=function(e){return ht(e)===ws};J.isFragment=function(e){return ht(e)===hs};J.isLazy=function(e){return ht(e)===Ts};J.isMemo=function(e){return ht(e)===Ps};J.isPortal=function(e){return ht(e)===ed};J.isProfiler=function(e){return ht(e)===vs};J.isStrictMode=function(e){return ht(e)===gs};J.isSuspense=function(e){return ht(e)===_s};J.isSuspenseList=function(e){return ht(e)===Es};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===hs||e===vs||e===gs||e===_s||e===Es||e===f2||typeof e=="object"&&e!==null&&(e.$$typeof===Ts||e.$$typeof===Ps||e.$$typeof===ys||e.$$typeof===Ss||e.$$typeof===ws||e.$$typeof===rg||e.getModuleId!==void 0)};J.typeOf=ht;ng.exports=J;var p2=ng.exports;M`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;M`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;M`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;M`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;M`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;M`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;M`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;M`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;M`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;M`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;M`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;M`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;M`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const m2=M`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,h2=M`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,g2=M`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,v2=M`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,y2=M`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,td=M`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S2=M`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,w2=M`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_2=M`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E2=M`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P2=M`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T2=M`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,x2=M`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function I2({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=td,iterationCount:i=1}){return J0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function k2(e){return e==null}function C2(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ig(e,t){return n=>n?e():t()}function ji(e){return ig(e,()=>null)}function bu(e){return ji(()=>({opacity:0}))(e)}const Gi=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:a=td,triggerOnce:s=!1,className:l,style:d,childClassName:g,childStyle:y,children:p,onVisibilityChange:w}=e,m=F.useMemo(()=>I2({keyframes:a,duration:i}),[i,a]);return k2(p)?null:C2(p)?he(b2,{...e,animationStyles:m,children:String(p)}):p2.isFragment(p)?he(og,{...e,animationStyles:m}):he(e2,{children:F.Children.map(p,(E,I)=>{if(!F.isValidElement(E))return null;const h=r+(t?I*i*n:0);switch(E.type){case"ol":case"ul":return he(_l,{children:({cx:f})=>he(E.type,{...E.props,className:f(l,E.props.className),style:Object.assign({},d,E.props.style),children:he(Gi,{...e,children:E.props.children})})});case"li":return he(lp,{threshold:o,triggerOnce:s,onChange:w,children:({inView:f,ref:u})=>he(_l,{children:({cx:c})=>he(E.type,{...E.props,ref:u,className:c(g,E.props.className),css:ji(()=>m)(f),style:Object.assign({},y,E.props.style,bu(!f),{animationDelay:h+"ms"})})})});default:return he(lp,{threshold:o,triggerOnce:s,onChange:w,children:({inView:f,ref:u})=>he("div",{ref:u,className:l,css:ji(()=>m)(f),style:Object.assign({},d,bu(!f),{animationDelay:h+"ms"}),children:he(_l,{children:({cx:c})=>he(E.type,{...E.props,className:c(g,E.props.className),style:Object.assign({},y,E.props.style)})})})})}})})},O2={display:"inline-block",whiteSpace:"pre"},b2=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:a=0,triggerOnce:s=!1,className:l,style:d,children:g,onVisibilityChange:y}=e,{ref:p,inView:w}=tg({triggerOnce:s,threshold:a,onChange:y});return ig(()=>he("div",{ref:p,className:l,style:Object.assign({},d,O2),children:g.split("").map((m,E)=>he("span",{css:ji(()=>t)(w),style:{animationDelay:i+E*o*r+"ms"},children:m},E))}),()=>he(og,{...e,children:g}))(n)},og=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:a,onVisibilityChange:s}=e,{ref:l,inView:d}=tg({triggerOnce:r,threshold:n,onChange:s});return he("div",{ref:l,className:i,css:ji(()=>t)(d),style:Object.assign({},o,bu(!d)),children:a})},A2=M`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,D2=M`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$2=M`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,M2=M`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,j2=M`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,N2=M`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,L2=M`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,R2=M`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,z2=M`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,F2=M`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;function B2(e,t){switch(t){case"down":return e?L2:D2;case"left":return e?R2:$2;case"right":return e?z2:M2;case"up":return e?F2:j2;default:return e?N2:A2}}const ag=e=>{const{direction:t,reverse:n=!1,...r}=e,i=F.useMemo(()=>B2(n,t),[t,n]);return he(Gi,{keyframes:i,...r})},U2=M`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,W2=M`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,H2=M`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,V2=M`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,X2=M`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Q2=M`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Y2=M`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,G2=M`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,K2=M`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,q2=M`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Z2=M`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,J2=M`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,eP=M`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function tP(e,t,n){switch(n){case"bottom-left":return t?W2:h2;case"bottom-right":return t?H2:g2;case"down":return e?t?X2:y2:t?V2:v2;case"left":return e?t?Y2:S2:t?Q2:td;case"right":return e?t?K2:_2:t?G2:w2;case"top-left":return t?q2:E2;case"top-right":return t?Z2:P2;case"up":return e?t?eP:x2:t?J2:T2;default:return t?U2:m2}}const nP=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,o=F.useMemo(()=>tP(t,r,n),[t,n,r]);return he(Gi,{keyframes:o,...i})};M`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;M`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;M`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;M`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;M`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;M`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;const rP=M`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;M`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;M`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;const iP=e=>he(Gi,{keyframes:rP,...e});M`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;M`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;M`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;M`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;M`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;M`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;M`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;M`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;M`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;M`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;M`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;M`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;M`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;M`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;M`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;M`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;M`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;M`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const oP=M`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,aP=M`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,sP=M`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,lP=M`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,uP=M`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,cP=M`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,dP=M`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,fP=M`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,pP=M`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,mP=M`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function hP(e,t){switch(t){case"down":return e?dP:aP;case"left":return e?fP:sP;case"right":return e?pP:lP;case"up":return e?mP:uP;default:return e?cP:oP}}const sg=e=>{const{direction:t,reverse:n=!1,...r}=e,i=F.useMemo(()=>hP(n,t),[t,n]);return he(Gi,{keyframes:i,...r})},up="/game-promo/assets/card-standard-197ed42c.webp",cp="/game-promo/assets/card-standard-2x-6f70da67.webp",gP="/game-promo/assets/card-deluxe-59c12d01.webp",vP="/game-promo/assets/card-deluxe-2x-84012387.webp",yP=[{edition:"Standard Edition",platform:"PS5",img:up,img2x:cp,info:["Offline play enabled","Remote Play supported","Trigger effect required"],price:19.99},{edition:"Standard Edition",platform:"PS4",img:up,img2x:cp,info:["Offline play enabled","Remote Play supported","Trigger effect required"],price:18.99},{edition:"Digital Deluxe Edition",platform:"PS5",img:gP,img2x:vP,info:["All features of Standard Edition","Darkdale Armour","Official digital soundtrack"],price:29.99}],SP="/game-promo/assets/pc-771ac0ec.webp",wP="/game-promo/assets/pc-2x-356d46be.webp",_P="/game-promo/assets/ps-eb19c1c5.webp",EP="/game-promo/assets/ps-2x-e6f29fa3.webp",PP="/game-promo/assets/bg-card-ps-2c19455d.webp",TP="/game-promo/assets/bg-card-ps-2x-7511a338.webp",xP="/game-promo/assets/bg-card-pc-80e41d8b.webp",IP="/game-promo/assets/bg-card-pc-2x-434037d4.webp",Kr={pc:{platform:"pc",title:"Here are the God of War (PC) System Requirements",img:SP,img2x:wP,bgCard:xP,bgCard2x:IP,characteristics:["minimum","recommended"],min:{cpu:"Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",ram:"8 GB",os:"Windows 10 64-bit",videocard:"NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)","pixel shader":5.1,"vertex shader":5.1,"free disk space":"70 GB","dedicated video ram":"4 GB",price:15.99},max:{cpu:"Intel Core i7-4770 (4 core 3.4 GHz) or AMD Ryzen 5 1500X (4 core 3.5 GHz)",ram:"16 GB",os:"Windows 10 64-bit",videocard:"NVIDIA GTX 1060 (6 GB) or AMD RX 580 (8 GB)","pixel shader":5.1,"vertex shader":5.1,"free disk space":"70 GB","dedicated video ram":"6 GB or higher",price:15.99}},ps:{platform:"ps",title:"God of War for PS4",img:_P,img2x:EP,bgCard:PP,bgCard2x:TP,characteristics:["standard","limited"],min:{platform:"PS4",premiere:"20.4.2018",publisher:"Sony Interactive Entertainment Europe",Species:"Action, Adventure",Voice:"English, Polish, Russian",languages:"English, Dutch, Polish, Russian, Turkish",price:15.99},max:{platform:"PS4",premiere:"20.4.2018",publisher:"Sony Interactive Entertainment Europe",Species:"Action, Adventure",Voice:"English, Polish, Russian",languages:"English, Dutch, Polish, Russian, Turkish",extras:"Exclusive Artbook, In-Game Skins Pack",availability:"Limited Quantity",price:18.99}}},kP="/game-promo/assets/news1-30e4d5ff.webp",CP="/game-promo/assets/news1-2x-2f303a50.webp",OP="/game-promo/assets/news2-95d4bfd2.webp",bP="/game-promo/assets/news2-2x-b0ce47ee.webp",AP="/game-promo/assets/news3-b8e8a92e.webp",DP="/game-promo/assets/news3-2x-4a5ea0f0.webp",$P="/game-promo/assets/news4-9120ad6a.webp",MP="/game-promo/assets/news4-2x-eed73799.webp",jP=[{date:"16/10/2022",title:"is the final chapter in an epic story. See the new video",img:kP,img2x:CP,description:"The highly anticipated game God of War: Ragnarok will debut in just over twenty days. On this occasion, representatives of the Santa Monica studio together with Sony decided to releasea new trailer dedicated to the epic history of Kratos andAtreus - in this way we have received confirmation thatRagnarok is the final chapter of the adventures of the god ofwar."},{date:"18/10/2022",title:"major release update confirmed",img:OP,img2x:bP,description:"Following the completion of the game's production, the focus has shifted to refining and expanding the player's journey through the realms of Norse mythology. This update is poised to capitalize on the cutting-edge capabilities of the PlayStation 5, harnessing its power to deliver stunning visuals, immersive environments, and seamless combat dynamics."},{date:"20/10/2022",title:"will receive a large update on release",img:AP,img2x:DP,description:"God of War: Ragnarok is fast approaching. No wonder that we have been regularlyreceiving new information and materials related to the title in recent times.Last week, a trailer presenting the possibilities of the game on PlayStation 5hit the network , and a little earlier we learned that the work on the production was completed . Meanwhile, it turns out thatupcoming sequel to the adventures of Kratos and Atreus will receive a major update on release"},{date:"23/10/2022",title:"is officially one of the largest PS4 games by size",img:$P,img2x:MP,description:"Digital distribution enthusiasts need to get ready for tons of downloads. The second adventure of Kratos and Atreus in the High North from the premiere will occupy nearly 120GB - when deciding to buy a title from PlayStation Store, it is worth planning your download wisely to start the game on the day of the premiere."}],NP=[{question:"When is the next God of War coming out?",answer:"God of War Ragnarök will release on November 9, 2022. To get the latest updates on release timing, make sure you follow Santa Monica Studio on Twitter, Instagram and Facebook!"},{question:"Will God of War Ragnarök have an upgrade path?",answer:'Yes, "God of War Ragnarök" will have an upgrade path, allowing players to enhance their gameplay experience and potentially improve their characters abilities and equipment.'},{question:"What is God of War about??",answer:"First era (Greek mythology) God of War was first released in North America on March 22, 2005, for the PlayStation 2. After ten years in the service of the Olympian gods, Spartan soldier Kratos is tasked by Athena to find Pandora's box, the key to defeating Ares, the God of War, who is running amok through Athens."}],Nr=C.h2`
    font-size: 4rem;
    font-weight: 600;
    text-align: center;
    color: ${({theme:e})=>e.colors.white};
`,LP=C.section`
    padding-top: 8rem;
`,RP=C(Nr)`
    margin-bottom: 3.5rem;
`,dp={Editions:LP,EditionsHeading:RP},zP=C.div`
    padding: 1.7rem;
    border-radius: 6px;
    background: linear-gradient(180deg, #141615 0%, ${({theme:e})=>e.colors.background} 100%);

    & > button {
        margin-left: auto;
    }
`,FP=C.img`
    margin-bottom: 2rem;
    border-radius: 6px;
    object-fit: cover;
`,BP=C.h3`
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
`,UP=C.div`
    margin-bottom: 3rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({theme:e})=>e.colors.sea};
`,WP=C.ul`
    margin-bottom: 0.6rem;
    list-style: none;
`,HP=C.li`
    color: ${({theme:e})=>e.colors.grey};
    font-size: 1.4rem;

    &:not(:last-child) {
        margin-bottom: 1.2rem;
    }
`,VP=C.div`
    margin-bottom: 1.4rem;
    text-align: right;
    font-size: 1.9rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.white};
`,xn={EditionCard:zP,Image:FP,Title:BP,Subtitle:UP,Info:WP,InfoItem:HP,Price:VP},XP=({card:e,onClickBuyNow:t})=>{const n=e.info.map((r,i)=>P.jsx(xn.InfoItem,{children:r},i));return P.jsxs(xn.EditionCard,{children:[P.jsx(xn.Image,{src:e.img,srcSet:`${e.img2x} 2x`,alt:e.edition,width:"316",height:"173"}),P.jsx(xn.Title,{children:e.edition}),P.jsx(xn.Subtitle,{children:e.platform}),P.jsx(xn.Info,{children:n}),P.jsxs(xn.Price,{children:[e.price,"$"]}),P.jsx(Mr,{title:"buy now",size:"small",callback:()=>t(e.edition,e.price)})]})},QP=({onClickBuyNow:e})=>{const t=yP.map((n,r)=>P.jsx(XP,{onClickBuyNow:e,card:n},r));return P.jsx(dp.Editions,{id:"editions",children:P.jsxs(Vn,{children:[P.jsx(dp.EditionsHeading,{children:"Editions"}),P.jsx(Ee,{justify:"center",wrap:"wrap",gap:"1.5rem",children:P.jsx(ag,{direction:"left",duration:600,triggerOnce:!0,cascade:!0,children:t})})]})})},YP=l0`
    0% {
        transform: translateY(-2rem);
    }
    100% {
        transform: translateY(0);
    }
`,GP=C.section`
    padding-top: 6rem;
`,KP=C(Nr)`
    margin-bottom: 2rem;
`,qP=C(Ee)`
    @media ${({theme:e})=>e.media.medium} {
        flex-direction: column;
        align-items: center;
        gap: 7.5rem;
    }
`,ZP=C.div`
    max-width: 42.5rem;
`,JP=C.p`
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: ${({theme:e})=>e.colors.sea};

    &:not(:last-child) {
        margin-bottom: 2.2rem;
    }
`,e3=C.span`
    color: ${({theme:e})=>e.colors.primary};
`,t3=C.span`
    color: ${({theme:e})=>e.colors.secondary};
`,n3=C.div`
    font-size: 3rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.white};
`,r3=C(sg)`
    position: relative;

    &::before {
        content: '';
        width: 194px;
        height: 119px;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(79, 96, 152, 0.8);
        filter: blur(75px);
    }

    @media ${({theme:e})=>e.media.medium} {
        order: -1;
    }
`,i3=C.img`
    animation: ${YP} 1.5s infinite linear alternate;
`,vt={DualSense:GP,DualSenseHeading:KP,DualSenseWrapper:qP,DualSenseInfo:ZP,DualSenseDescription:JP,GameName:e3,Discount:t3,Price:n3,ImageWrapper:r3,DualSenseImage:i3},o3="/game-promo/assets/dual-fc7a3f21.webp",a3="/game-promo/assets/dual-2x-739ef62d.webp",s3=({onClickBuyNow:e})=>P.jsx(vt.DualSense,{id:"controller",children:P.jsxs(Vn,{children:[P.jsx(vt.DualSenseHeading,{children:"DualSense"}),P.jsxs(vt.DualSenseWrapper,{justify:"center",gap:"15rem",children:[P.jsx(nP,{direction:"left",duration:600,triggerOnce:!0,children:P.jsxs(vt.DualSenseInfo,{children:[P.jsxs(vt.DualSenseDescription,{children:["You can also buy an exclusive controller with the"," ",P.jsx(vt.GameName,{children:"God of War Ragnarok"})," theme for PS5"]}),P.jsxs(vt.DualSenseDescription,{children:["If you purchase a controller and a game (any edition), you will receive a ",P.jsx(vt.Discount,{children:"15%"})," discount on two items."]}),P.jsxs(Ee,{align:"center",gap:"3.3rem",children:[P.jsx(vt.Price,{children:"35.99$"}),P.jsx(Mr,{title:"buy dualsense with a game",color:"secondary",size:"big",callback:()=>e("Controller with Digital Deluxe Edition",35.99)})]})]})}),P.jsx(vt.ImageWrapper,{duration:600,triggerOnce:!0,children:P.jsx(vt.DualSenseImage,{src:o3,srcSet:`${a3} 2x`,alt:"dual-sense",width:"340",height:"309"})})]})]})}),l3=C.section`
    padding-top: 6rem;
`,u3=C(Nr)`
    margin-bottom: 3.2rem;
`,c3=C.div`
    position: relative;

    ${({playing:e})=>e&&Ct`
            ${lg} {
                opacity: 0;
                &:hover {
                    opacity: 1;
                }
            }
        `}
`,lg=C.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);

    & > button {
        margin: 0 auto;
    }
`,d3=C.div`
    margin-bottom: 2.9rem;
    font-size: 5rem;
    font-weight: 500;
    line-height: 3rem;
    white-space: nowrap;

	@media ${({theme:e})=>e.media.small} {
		margin-bottom: 1rem;
		font-size: 3rem;
	}
`,f3=C.video`
    width: 100%;
    height: auto;
`,Yn={About:l3,AboutHeading:u3,VideoWrapper:c3,VideoInfo:lg,VideoTitle:d3,Video:f3},p3="/game-promo/assets/trailer-9424fb52.mp4",m3="/game-promo/assets/bg-video-4486cfd0.webp",h3=()=>{const[e,t]=F.useState(!1),n=F.useRef(null),r=()=>{const i=n.current;i&&(e?i.pause():i.play(),t(!e))};return P.jsx(Yn.About,{id:"about",children:P.jsxs(sg,{duration:500,triggerOnce:!0,children:[P.jsx(Yn.AboutHeading,{children:"About Game"}),P.jsxs(Yn.VideoWrapper,{playing:e?e.toString():"",children:[P.jsxs(Yn.VideoInfo,{children:[P.jsx(Yn.VideoTitle,{children:"Watch the Trailer"}),P.jsx(Mr,{onClick:r,title:e?"pause":"play",color:"dark"})]}),P.jsx(Yn.Video,{ref:n,src:p3,poster:m3})]})]})})},g3=C.section`
    padding-top: 8.8rem;
    overflow: hidden;
`,v3=C(Nr)`
    margin-bottom: 3.2rem;
`,fp={Explore:g3,ExploreHeading:v3},y3=C.div`
    margin-bottom: 4.4rem;

    ${Ee} {
        @media ${({theme:e})=>e.media.large} {
            gap: 2rem;
        }
    }
`,S3=C.h3`
    position: relative;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    z-index: 2;
`,w3=C(Ee)`
    position: relative;
    margin-bottom: 3rem;
    z-index: 10;
`,_3=C.span`
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({edition:e,current:t,theme:n})=>e===t?n.colors.white:n.colors.grey};

    &::first-letter {
        text-transform: uppercase;
    }
`,E3=C.div`
    width: 5.4rem;
    height: 2.6rem;
    position: relative;
    background-color: ${({theme:e})=>e.colors.darkgrey};
    border-radius: 1.2rem;
`,ug=C.span`
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary};
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;
`,P3=C.input.attrs(()=>({type:"checkbox"}))`
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0;
    cursor: pointer;
    z-index: 2;

    &:checked + ${ug} {
        color: red;
        transform: translateX(2.8rem);
    }
`,T3=C(Ee)`
    text-align: center;
`,x3=C.div`
    width: 35rem;
    height: 35rem;
    position: relative;
    border-radius: 1.2rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${({bg:e})=>e});

    &::before {
        content: '';
        width: 6.1rem;
        height: 14rem;
        display: block;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, -50%);
        filter: blur(7.5rem);
        opacity: 0.8;
        background: ${({theme:e})=>e.colors.secondary};
    }

    @media (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 2) {
        background-image: url(${({bg2x:e})=>e});
    }
`,I3=C.img`
    max-width: unset;
    position: absolute;
    bottom: 0;
    left: 0;

    @media ${({theme:e})=>e.media.large} {
        max-width: 100%;
    }
`,k3=C.div`
    max-width: 60rem;
    width: 100%;
    align-self: flex-end;
    order: ${({order:e})=>e};
`,C3=C.ul`
    list-style: none;
    text-align: left;
    min-height: 34rem;
`,O3=C.li`
    font-size: 1.5rem;
    text-transform: uppercase;
    line-height: 3.6rem;

    & > span:first-child {
        color: ${({theme:e})=>e.colors.primary};
    }
`,We={ExploreItem:y3,ExploreTitle:S3,Switch:w3,CurrentEdition:_3,SwitchControl:E3,Knob:ug,Checkbox:P3,ImageWrapper:T3,ImageInner:x3,Image:I3,Description:k3,EditionList:C3,EditionItem:O3},b3=({platform:e,title:t,img:n,img2x:r,bgCard:i,bgCard2x:o,characteristics:a,edition:s,data:l,onChangeCurrentEdition:d,onClickBuyNow:g})=>{const y=Object.entries(l).map(([w,m],E)=>P.jsxs(We.EditionItem,{children:[P.jsx("span",{children:w}),P.jsxs("span",{children:[": ",m]})]},E)),p=w=>{d(e,w.currentTarget.checked)};return P.jsxs(We.ExploreItem,{children:[P.jsx(We.ExploreTitle,{children:t}),P.jsxs(We.Switch,{justify:"center",align:"center",gap:"1.5rem",children:[P.jsx(We.CurrentEdition,{edition:"min",current:s,children:a[0]}),P.jsxs(We.SwitchControl,{children:[P.jsx(We.Checkbox,{onChange:p,checked:s==="max","aria-label":"switch-editions"}),P.jsx(We.Knob,{})]}),P.jsx(We.CurrentEdition,{edition:"max",current:s,children:a[1]})]}),P.jsxs(Ee,{justify:"center",gap:"5rem",wrap:"wrap",children:[P.jsx(We.ImageWrapper,{align:"flex-end",children:P.jsx(We.ImageInner,{bg:i,bg2x:o,children:P.jsx(We.Image,{src:n,srcSet:`${r} 2x`,alt:e})})}),P.jsxs(We.Description,{order:e==="ps"?-1:0,children:[P.jsx(We.EditionList,{children:y}),P.jsx(Mr,{title:"buy now",color:"secondary",size:"small",callback:()=>g(`${e} edition`,l.price)})]})]})]})},A3=({onClickBuyNow:e})=>{const[t,n]=F.useState({pc:{edition:"min",data:Kr.pc.min},ps:{edition:"min",data:Kr.ps.min}}),r=(o,a)=>{n({...t,[o]:{...t[o],edition:a?"max":"min",data:a?Kr[o].max:Kr[o].min}})},i=Object.values(Kr).map((o,a)=>P.jsx(b3,{platform:o.platform,title:o.title,img:o.img,img2x:o.img2x,bgCard:o.bgCard,bgCard2x:o.bgCard2x,onChangeCurrentEdition:(s,l)=>r(s,l),characteristics:o.characteristics,edition:t[o.platform].edition,data:t[o.platform].data,onClickBuyNow:e},a));return P.jsx(iP,{duration:700,triggerOnce:!0,children:i})},D3=({onClickBuyNow:e})=>P.jsx(fp.Explore,{id:"explore",children:P.jsxs(Vn,{children:[P.jsx(fp.ExploreHeading,{children:"Explore the God of War series"}),P.jsx(A3,{onClickBuyNow:e})]})}),$3=C.section`
    padding-top: 6rem;
`,M3=C(Nr)`
    margin-bottom: 3rem;
`,pp={News:$3,NewsHeading:M3};var cg={},dg={},fg={},xs={},Ae={};Object.defineProperty(Ae,"__esModule",{value:!0});Ae.TraceDirectionKey=Ae.Direction=Ae.Axis=void 0;var Au;Ae.TraceDirectionKey=Au;(function(e){e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE",e.NONE="NONE"})(Au||(Ae.TraceDirectionKey=Au={}));var Du;Ae.Direction=Du;(function(e){e.TOP="TOP",e.LEFT="LEFT",e.RIGHT="RIGHT",e.BOTTOM="BOTTOM",e.NONE="NONE"})(Du||(Ae.Direction=Du={}));var $u;Ae.Axis=$u;(function(e){e.X="x",e.Y="y"})($u||(Ae.Axis=$u={}));Object.defineProperty(xs,"__esModule",{value:!0});xs.calculateDirection=j3;var El=Ae;function j3(e){var t,n=El.TraceDirectionKey.NEGATIVE,r=El.TraceDirectionKey.POSITIVE,i=e[e.length-1],o=e[e.length-2]||0;return e.every(function(a){return a===0})?El.TraceDirectionKey.NONE:(t=i>o?r:n,i===0&&(t=o<0?r:n),t)}var Is={},ct={};Object.defineProperty(ct,"__esModule",{value:!0});ct.resolveAxisDirection=ct.getDirectionValue=ct.getDirectionKey=ct.getDifference=void 0;var Ze=Ae,N3=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Object.keys(t).toString();switch(n){case Ze.TraceDirectionKey.POSITIVE:return Ze.TraceDirectionKey.POSITIVE;case Ze.TraceDirectionKey.NEGATIVE:return Ze.TraceDirectionKey.NEGATIVE;default:return Ze.TraceDirectionKey.NONE}};ct.getDirectionKey=N3;var L3=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t[t.length-1]||0};ct.getDirectionValue=L3;var R3=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Math.abs(t-n)};ct.getDifference=R3;var z3=function(t,n){var r=Ze.Direction.LEFT,i=Ze.Direction.RIGHT,o=Ze.Direction.NONE;return t===Ze.Axis.Y&&(r=Ze.Direction.BOTTOM,i=Ze.Direction.TOP),n===Ze.TraceDirectionKey.NEGATIVE&&(o=r),n===Ze.TraceDirectionKey.POSITIVE&&(o=i),o};ct.resolveAxisDirection=z3;Object.defineProperty(Is,"__esModule",{value:!0});Is.calculateDirectionDelta=B3;var F3=Ae,qr=ct;function B3(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=e.length,r=n-1,i=F3.TraceDirectionKey.NONE;r>=0;r--){var o=e[r],a=(0,qr.getDirectionKey)(o),s=(0,qr.getDirectionValue)(o[a]),l=e[r-1]||{},d=(0,qr.getDirectionKey)(l),g=(0,qr.getDirectionValue)(l[d]),y=(0,qr.getDifference)(s,g);if(y>=t){i=a;break}else i=d}return i}var ks={};Object.defineProperty(ks,"__esModule",{value:!0});ks.calculateDuration=U3;function U3(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e?t-e:0}var nd={};Object.defineProperty(nd,"__esModule",{value:!0});nd.calculateMovingPosition=W3;function W3(e){if("changedTouches"in e){var t=e.changedTouches&&e.changedTouches[0];return{x:t&&t.clientX,y:t&&t.clientY}}return{x:e.clientX,y:e.clientY}}var rd={},Cs={};Object.defineProperty(Cs,"__esModule",{value:!0});Cs.updateTrace=H3;function H3(e,t){var n=e[e.length-1];return n!==t&&e.push(t),e}var Os={},bs={};Object.defineProperty(bs,"__esModule",{value:!0});bs.calculateTraceDirections=V3;var Oo=Ae;function mp(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V3(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=[],n=Oo.TraceDirectionKey.POSITIVE,r=Oo.TraceDirectionKey.NEGATIVE,i=0,o=[],a=Oo.TraceDirectionKey.NONE;i<e.length;i++){var s=e[i],l=e[i-1];if(o.length){var d=s>l?n:r;a===Oo.TraceDirectionKey.NONE&&(a=d),d===a?o.push(s):(t.push(mp({},a,o.slice())),o=[],o.push(s),a=d)}else s!==0&&(a=s>0?n:r),o.push(s)}return o.length&&t.push(mp({},a,o)),t}Object.defineProperty(Os,"__esModule",{value:!0});Os.resolveDirection=K3;var X3=xs,Q3=bs,Y3=Is,hp=ct,G3=Ae;function K3(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G3.Axis.X,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n){var r=(0,Q3.calculateTraceDirections)(e),i=(0,Y3.calculateDirectionDelta)(r,n);return(0,hp.resolveAxisDirection)(t,i)}var o=(0,X3.calculateDirection)(e);return(0,hp.resolveAxisDirection)(t,o)}var As={};Object.defineProperty(As,"__esModule",{value:!0});As.calculateVelocity=q3;function q3(e,t,n){var r=Math.sqrt(e*e+t*t);return r/(n||1)}Object.defineProperty(rd,"__esModule",{value:!0});rd.calculatePosition=eT;var gp=Cs,vp=Os,Z3=ks,J3=As,yp=Ae;function eT(e,t){var n=e.start,r=e.x,i=e.y,o=e.traceX,a=e.traceY,s=t.rotatePosition,l=t.directionDelta,d=s.x-r,g=i-s.y,y=Math.abs(d),p=Math.abs(g);(0,gp.updateTrace)(o,d),(0,gp.updateTrace)(a,g);var w=(0,vp.resolveDirection)(o,yp.Axis.X,l),m=(0,vp.resolveDirection)(a,yp.Axis.Y,l),E=(0,Z3.calculateDuration)(n,Date.now()),I=(0,J3.calculateVelocity)(y,p,E);return{absX:y,absY:p,deltaX:d,deltaY:g,directionX:w,directionY:m,duration:E,positionX:s.x,positionY:s.y,velocity:I}}var Ds={};Object.defineProperty(Ds,"__esModule",{value:!0});Ds.checkIsMoreThanSingleTouches=void 0;var tT=function(t){return!!(t.touches&&t.touches.length>1)};Ds.checkIsMoreThanSingleTouches=tT;var Ki={},$s={};Object.defineProperty($s,"__esModule",{value:!0});$s.createOptions=nT;function nT(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.defineProperty(e,"passive",{get:function(){return this.isPassiveSupported=!0,!0},enumerable:!0}),e}Object.defineProperty(Ki,"__esModule",{value:!0});Ki.checkIsPassiveSupported=iT;Ki.noop=void 0;var rT=$s;function iT(e){if(typeof e=="boolean")return e;var t={isPassiveSupported:e};try{var n=(0,rT.createOptions)(t);window.addEventListener("checkIsPassiveSupported",Mu,n),window.removeEventListener("checkIsPassiveSupported",Mu,n)}catch{}return t.isPassiveSupported}var Mu=function(){};Ki.noop=Mu;var Ms={};Object.defineProperty(Ms,"__esModule",{value:!0});Ms.checkIsTouchEventsSupported=void 0;function ju(e){"@babel/helpers - typeof";return ju=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ju(e)}var oT=function(){return(typeof window>"u"?"undefined":ju(window))==="object"&&("ontouchstart"in window||!!window.navigator.maxTouchPoints)};Ms.checkIsTouchEventsSupported=oT;var js={};Object.defineProperty(js,"__esModule",{value:!0});js.getInitialState=void 0;function Sp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function aT(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sp(Object(n),!0).forEach(function(r){sT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sT(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var lT=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return aT({x:0,y:0,start:0,isSwiping:!1,traceX:[],traceY:[]},t)};js.getInitialState=lT;var Ns={};Object.defineProperty(Ns,"__esModule",{value:!0});Ns.getInitialProps=void 0;function wp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function uT(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wp(Object(n),!0).forEach(function(r){cT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cT(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var dT=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return uT({element:null,target:null,delta:10,directionDelta:0,rotationAngle:0,mouseTrackingEnabled:!1,touchTrackingEnabled:!0,preventDefaultTouchmoveEvent:!1,preventTrackingOnMouseleave:!1},t)};Ns.getInitialProps=dT;var id={};Object.defineProperty(id,"__esModule",{value:!0});id.getOptions=fT;function fT(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return e?{passive:!1}:{}}var od={};Object.defineProperty(od,"__esModule",{value:!0});od.rotateByAngle=pT;function pT(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(t===0)return e;var n=e.x,r=e.y,i=Math.PI/180*t,o=n*Math.cos(i)+r*Math.sin(i),a=r*Math.cos(i)-n*Math.sin(i);return{x:o,y:a}}(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=xs;Object.keys(t).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===t[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return t[u]}})});var n=Is;Object.keys(n).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===n[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return n[u]}})});var r=ks;Object.keys(r).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===r[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return r[u]}})});var i=nd;Object.keys(i).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===i[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return i[u]}})});var o=rd;Object.keys(o).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===o[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return o[u]}})});var a=bs;Object.keys(a).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===a[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return a[u]}})});var s=As;Object.keys(s).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===s[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return s[u]}})});var l=Ds;Object.keys(l).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===l[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return l[u]}})});var d=Ki;Object.keys(d).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===d[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return d[u]}})});var g=Ms;Object.keys(g).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===g[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return g[u]}})});var y=ct;Object.keys(y).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===y[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return y[u]}})});var p=$s;Object.keys(p).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===p[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return p[u]}})});var w=js;Object.keys(w).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===w[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return w[u]}})});var m=Ns;Object.keys(m).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===m[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return m[u]}})});var E=id;Object.keys(E).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===E[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return E[u]}})});var I=Os;Object.keys(I).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===I[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return I[u]}})});var h=od;Object.keys(h).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===h[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return h[u]}})});var f=Cs;Object.keys(f).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===f[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return f[u]}})})})(fg);(function(e){function t(p){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},t(p)}Object.defineProperty(e,"__esModule",{value:!0});var n={};e.default=void 0;var r=a(fg),i=Ae;Object.keys(i).forEach(function(p){p==="default"||p==="__esModule"||Object.prototype.hasOwnProperty.call(n,p)||p in e&&e[p]===i[p]||Object.defineProperty(e,p,{enumerable:!0,get:function(){return i[p]}})});function o(p){if(typeof WeakMap!="function")return null;var w=new WeakMap,m=new WeakMap;return(o=function(I){return I?m:w})(p)}function a(p,w){if(!w&&p&&p.__esModule)return p;if(p===null||t(p)!=="object"&&typeof p!="function")return{default:p};var m=o(w);if(m&&m.has(p))return m.get(p);var E={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in p)if(h!=="default"&&Object.prototype.hasOwnProperty.call(p,h)){var f=I?Object.getOwnPropertyDescriptor(p,h):null;f&&(f.get||f.set)?Object.defineProperty(E,h,f):E[h]=p[h]}return E.default=p,m&&m.set(p,E),E}function s(p,w){if(!(p instanceof w))throw new TypeError("Cannot call a class as a function")}function l(p,w){for(var m=0;m<w.length;m++){var E=w[m];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(p,E.key,E)}}function d(p,w,m){return w&&l(p.prototype,w),m&&l(p,m),Object.defineProperty(p,"prototype",{writable:!1}),p}function g(p,w,m){return w in p?Object.defineProperty(p,w,{value:m,enumerable:!0,configurable:!0,writable:!0}):p[w]=m,p}var y=function(){function p(w){s(this,p),g(this,"state",void 0),g(this,"props",void 0),this.state=r.getInitialState(),this.props=r.getInitialProps(w),this.handleSwipeStart=this.handleSwipeStart.bind(this),this.handleSwipeMove=this.handleSwipeMove.bind(this),this.handleSwipeEnd=this.handleSwipeEnd.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}return d(p,[{key:"init",value:function(){this.setupTouchListeners(),this.setupMouseListeners()}},{key:"update",value:function(m){var E=this.props,I=Object.assign({},E,m);if(E.element!==I.element||E.target!==I.target){this.destroy(),this.props=I,this.init();return}this.props=I,(E.mouseTrackingEnabled!==I.mouseTrackingEnabled||E.preventTrackingOnMouseleave!==I.preventTrackingOnMouseleave)&&(this.cleanupMouseListeners(),I.mouseTrackingEnabled?this.setupMouseListeners():this.cleanupMouseListeners()),E.touchTrackingEnabled!==I.touchTrackingEnabled&&(this.cleanupTouchListeners(),I.touchTrackingEnabled?this.setupTouchListeners():this.cleanupTouchListeners())}},{key:"destroy",value:function(){this.cleanupMouseListeners(),this.cleanupTouchListeners(),this.state=r.getInitialState(),this.props=r.getInitialProps()}},{key:"setupTouchListeners",value:function(){var m=this.props,E=m.element,I=m.target,h=m.touchTrackingEnabled;if(E&&h){var f=I||E,u=r.checkIsPassiveSupported(),c=r.getOptions(u);f.addEventListener("touchstart",this.handleSwipeStart,c),f.addEventListener("touchmove",this.handleSwipeMove,c),f.addEventListener("touchend",this.handleSwipeEnd,c)}}},{key:"cleanupTouchListeners",value:function(){var m=this.props,E=m.element,I=m.target,h=I||E;h&&(h.removeEventListener("touchstart",this.handleSwipeStart),h.removeEventListener("touchmove",this.handleSwipeMove),h.removeEventListener("touchend",this.handleSwipeEnd))}},{key:"setupMouseListeners",value:function(){var m=this.props,E=m.element,I=m.mouseTrackingEnabled,h=m.preventTrackingOnMouseleave;I&&E&&(E.addEventListener("mousedown",this.handleMouseDown),E.addEventListener("mousemove",this.handleMouseMove),E.addEventListener("mouseup",this.handleMouseUp),h&&E.addEventListener("mouseleave",this.handleMouseLeave))}},{key:"cleanupMouseListeners",value:function(){var m=this.props.element;m&&(m.removeEventListener("mousedown",this.handleMouseDown),m.removeEventListener("mousemove",this.handleMouseMove),m.removeEventListener("mouseup",this.handleMouseUp),m.removeEventListener("mouseleave",this.handleMouseLeave))}},{key:"getEventData",value:function(m){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{directionDelta:0},I=this.props.rotationAngle,h=E.directionDelta,f=r.calculateMovingPosition(m),u=r.rotateByAngle(f,I);return r.calculatePosition(this.state,{rotatePosition:u,directionDelta:h})}},{key:"handleSwipeStart",value:function(m){if(!r.checkIsMoreThanSingleTouches(m)){var E=this.props.rotationAngle,I=r.calculateMovingPosition(m),h=r.rotateByAngle(I,E),f=h.x,u=h.y;this.state=r.getInitialState({isSwiping:!1,start:Date.now(),x:f,y:u})}}},{key:"handleSwipeMove",value:function(m){var E=this.state,I=E.x,h=E.y,f=E.isSwiping;if(!(!I||!h||r.checkIsMoreThanSingleTouches(m))){var u=this.props.directionDelta||0,c=this.getEventData(m,{directionDelta:u}),v=c.absX,S=c.absY,_=c.deltaX,T=c.deltaY,b=c.directionX,$=c.directionY,O=c.duration,x=c.velocity,D=this.props,j=D.delta,R=D.preventDefaultTouchmoveEvent,z=D.onSwipeStart,U=D.onSwiping;m.cancelable&&R&&m.preventDefault(),!(v<Number(j)&&S<Number(j)&&!f)&&(z&&!f&&z(m,{deltaX:_,deltaY:T,absX:v,absY:S,directionX:b,directionY:$,duration:O,velocity:x}),this.state.isSwiping=!0,U&&U(m,{deltaX:_,deltaY:T,absX:v,absY:S,directionX:b,directionY:$,duration:O,velocity:x}))}}},{key:"handleSwipeEnd",value:function(m){var E=this.props,I=E.onSwiped,h=E.onTap;if(this.state.isSwiping){var f=this.props.directionDelta||0,u=this.getEventData(m,{directionDelta:f});I&&I(m,u)}else{var c=this.getEventData(m);h&&h(m,c)}this.state=r.getInitialState()}},{key:"handleMouseDown",value:function(m){var E=this.props.target;E?E===m.target&&this.handleSwipeStart(m):this.handleSwipeStart(m)}},{key:"handleMouseMove",value:function(m){this.handleSwipeMove(m)}},{key:"handleMouseUp",value:function(m){var E=this.state.isSwiping,I=this.props.target;I?(I===m.target||E)&&this.handleSwipeEnd(m):this.handleSwipeEnd(m)}},{key:"handleMouseLeave",value:function(m){var E=this.state.isSwiping;E&&this.handleSwipeEnd(m)}}],[{key:"isTouchEventsSupported",value:function(){return r.checkIsTouchEventsSupported()}}]),p}();e.default=y})(dg);var pg={},Nt={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Modifiers=e.Classnames=e.AutoplayDirection=e.ControlsStrategy=e.AutoPlayStrategy=e.AnimationType=e.EventType=void 0,function(t){t.ACTION="action",t.INIT="init",t.RESIZE="resize",t.UPDATE="update"}(e.EventType||(e.EventType={})),function(t){t.FADEOUT="fadeout",t.SLIDE="slide"}(e.AnimationType||(e.AnimationType={})),function(t){t.DEFAULT="default",t.ALL="all",t.ACTION="action",t.NONE="none"}(e.AutoPlayStrategy||(e.AutoPlayStrategy={})),function(t){t.DEFAULT="default",t.ALTERNATE="alternate",t.RESPONSIVE="responsive"}(e.ControlsStrategy||(e.ControlsStrategy={})),function(t){t.RTL="rtl",t.LTR="ltr"}(e.AutoplayDirection||(e.AutoplayDirection={})),function(t){t.ANIMATED="animated animated-out fadeOut",t.ROOT="alice-carousel",t.WRAPPER="alice-carousel__wrapper",t.STAGE="alice-carousel__stage",t.STAGE_ITEM="alice-carousel__stage-item",t.DOTS="alice-carousel__dots",t.DOTS_ITEM="alice-carousel__dots-item",t.PLAY_BTN="alice-carousel__play-btn",t.PLAY_BTN_ITEM="alice-carousel__play-btn-item",t.PLAY_BTN_WRAPPER="alice-carousel__play-btn-wrapper",t.SLIDE_INFO="alice-carousel__slide-info",t.SLIDE_INFO_ITEM="alice-carousel__slide-info-item",t.BUTTON_PREV="alice-carousel__prev-btn",t.BUTTON_PREV_WRAPPER="alice-carousel__prev-btn-wrapper",t.BUTTON_PREV_ITEM="alice-carousel__prev-btn-item",t.BUTTON_NEXT="alice-carousel__next-btn",t.BUTTON_NEXT_WRAPPER="alice-carousel__next-btn-wrapper",t.BUTTON_NEXT_ITEM="alice-carousel__next-btn-item"}(e.Classnames||(e.Classnames={})),function(t){t.ACTIVE="__active",t.INACTIVE="__inactive",t.CLONED="__cloned",t.CUSTOM="__custom",t.PAUSE="__pause",t.SEPARATOR="__separator",t.SSR="__ssr",t.TARGET="__target"}(e.Modifiers||(e.Modifiers={}))})(Nt);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.defaultProps=void 0;var t=Nt;e.defaultProps={activeIndex:0,animationDuration:400,animationEasingFunction:"ease",animationType:t.AnimationType.SLIDE,autoHeight:!1,autoWidth:!1,autoPlay:!1,autoPlayControls:!1,autoPlayDirection:t.AutoplayDirection.LTR,autoPlayInterval:400,autoPlayStrategy:t.AutoPlayStrategy.DEFAULT,children:void 0,controlsStrategy:t.ControlsStrategy.DEFAULT,disableButtonsControls:!1,disableDotsControls:!1,disableSlideInfo:!0,infinite:!1,innerWidth:void 0,items:void 0,keyboardNavigation:!1,mouseTracking:!1,name:"",paddingLeft:0,paddingRight:0,responsive:void 0,swipeDelta:20,swipeExtraPadding:200,ssrSilentMode:!0,touchTracking:!0,touchMoveDefaultEvents:!0,onInitialized:function(){},onResized:function(){},onResizeEvent:void 0,onSlideChange:function(){},onSlideChanged:function(){}}})(pg);var mg={},hg={},Lr={},ad={},sd={},ld={};(function(e){var t=function(){return(t=Object.assign||function(i){for(var o,a=1,s=arguments.length;a<s;a++)for(var l in o=arguments[a])Object.prototype.hasOwnProperty.call(o,l)&&(i[l]=o[l]);return i}).apply(this,arguments)},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.mapPositionCoords=e.mapPartialCoords=void 0,function(i){return i.map(function(o){return{width:o.width,position:0}})}),r=(e.mapPartialCoords=n,function(i,o){return o===void 0&&(o=0),i.map(function(a){return a.position>o?t(t({},a),{position:o}):a})});e.mapPositionCoords=r})(ld);var qi={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isVerticalTouchmoveDetected=e.getFadeoutAnimationPosition=e.getFadeoutAnimationIndex=e.getSwipeTouchendIndex=e.getSwipeTouchendPosition=e.getSwipeTransformationCursor=e.getTransformationItemIndex=e.getSwipeShiftValue=e.getItemCoords=e.getIsLeftDirection=e.shouldRecalculateSwipePosition=e.getSwipeLimitMax=e.getSwipeLimitMin=e.shouldCancelSlideAnimation=e.shouldRecalculateSlideIndex=e.getUpdateSlidePositionIndex=e.getActiveIndex=e.getStartIndex=e.getShiftIndex=void 0;var t=function(c,v){return(c=c===void 0?0:c)+(v=v===void 0?0:v)},n=(e.getShiftIndex=t,function(c,v){if(c===void 0&&(c=0),v=v===void 0?0:v){if(v<=c)return v-1;if(0<c)return c}return 0}),r=(e.getStartIndex=n,function(_){var v=_.startIndex,v=v===void 0?0:v,S=_.itemsCount,_=_.infinite;return _!==void 0&&_?v:(0,e.getStartIndex)(v,S===void 0?0:S)}),i=(e.getActiveIndex=r,function(c,v){return c<0?v-1:v<=c?0:c}),o=(e.getUpdateSlidePositionIndex=i,function(c,v){return c<0||v<=c}),a=(e.shouldRecalculateSlideIndex=o,function(c,v){return c<0||v<=c}),s=(e.shouldCancelSlideAnimation=a,function(_,b){var S=_.itemsOffset,_=_.transformationSet,_=_===void 0?[]:_,T=b.infinite,b=b.swipeExtraPadding;return T?(_[S===void 0?0:S]||{}).position:(T=(_[0]||{}).width,Math.min(b===void 0?0:b,T===void 0?0:T))}),l=(e.getSwipeLimitMin=s,function(O,_){var S=_.infinite,_=_.swipeExtraPadding,_=_===void 0?0:_,T=O.itemsCount,b=O.itemsOffset,$=O.itemsInSlide,$=$===void 0?1:$,O=O.transformationSet,O=O===void 0?[]:O;return S?(O[(T===void 0?1:T)+(0,e.getShiftIndex)($,b===void 0?0:b)]||{}).position||0:(0,e.getItemCoords)(-$,O).position+_}),d=(e.getSwipeLimitMax=l,function(c,v,S){return-v<=c||Math.abs(c)>=S}),g=(e.shouldRecalculateSwipePosition=d,function(c){return(c=c===void 0?0:c)<0}),y=(e.getIsLeftDirection=g,function(c,v){return(v=v===void 0?[]:v).slice(c=c===void 0?0:c)[0]||{position:0,width:0}}),p=(e.getItemCoords=y,function(c,v){return c===void 0&&(c=0),v===void 0&&(v=[]),(0,e.getItemCoords)(c,v).position}),w=(e.getSwipeShiftValue=p,function(c,v){return v===void 0&&(v=0),(c=c===void 0?[]:c).findIndex(function(S){return S.position>=Math.abs(v)})}),m=(e.getTransformationItemIndex=w,function(c,v,S){return c===void 0&&(c=[]),v===void 0&&(v=0),S===void 0&&(S=0),c=(0,e.getTransformationItemIndex)(c,v),(0,e.getIsLeftDirection)(S)?c:c-1}),E=(e.getSwipeTransformationCursor=m,function(O,D,x){x===void 0&&(x=0);var _=O.infinite,T=O.autoWidth,b=O.isStageContentPartial,$=O.swipeAllowedPositionMax,O=O.transformationSet,x=(0,e.getSwipeTransformationCursor)(O,x,D),D=(0,e.getItemCoords)(x,O).position;if(!_){if(T&&b)return 0;if($<D)return-$}return-D}),I=(e.getSwipeTouchendPosition=E,function(c,D){var S=D.transformationSet,_=D.itemsInSlide,T=D.itemsOffset,b=D.itemsCount,$=D.infinite,O=D.isStageContentPartial,x=D.activeIndex,D=D.translate3d;return $||!O&&D!==Math.abs(c)?(O=(0,e.getTransformationItemIndex)(S,c),$?O<(D=(0,e.getShiftIndex)(_,T))?b-_-T+O:D+b<=O?O-(D+b):O-D:O):x}),h=(e.getSwipeTouchendIndex=I,function(_){var v=_.infinite,S=_.activeIndex,_=_.itemsInSlide;return v?S+_:S}),f=(e.getFadeoutAnimationIndex=h,function(c,_){var S=_.activeIndex,_=_.stageWidth;return c<S?(S-c)*-_||0:(c-S)*_||0}),u=(e.getFadeoutAnimationPosition=f,function(c,v,S){return c<(S=S===void 0?0:S)||c<.1*v});e.isVerticalTouchmoveDetected=u})(qi);(function(e){var t=function(){return(t=Object.assign||function(x){for(var D,j=1,R=arguments.length;j<R;j++)for(var z in D=arguments[j])Object.prototype.hasOwnProperty.call(D,z)&&(x[z]=D[z]);return x}).apply(this,arguments)},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.getItemsInSlide=e.canUseDOM=e.getTransformMatrix=e.getTranslateXProperty=e.getTouchmoveTranslatePosition=e.getTranslate3dProperty=e.getRenderStageItemStyles=e.getRenderStageStyles=e.getTransitionProperty=e.getRenderWrapperStyles=e.animate=e.shouldHandleResizeEvent=e.getElementFirstChild=e.getElementCursor=e.getAutoheightProperty=e.getElementDimensions=e.getItemWidth=e.createDefaultTransformationSet=e.createAutowidthTransformationSet=e.isElement=e.createClones=e.getItemsOffset=e.getItemsCount=e.getSlides=void 0,ld),r=qi,i=function(j){var D=j.children,j=j.items;return D?D.length?D:[D]:j===void 0?[]:j},o=(e.getSlides=i,function(x){return(0,e.getSlides)(x).length}),a=(e.getItemsCount=o,function(R){var D=R.infinite,j=R.paddingRight,R=R.paddingLeft;return D&&(R||j)?1:0}),s=(e.getItemsOffset=a,function(x){var D,j,R,z,U=(0,e.getSlides)(x);return x.infinite?(D=(0,e.getItemsCount)(x),z=(0,e.getItemsOffset)(x),x=(0,e.getItemsInSlide)(D,x),R=Math.min(x,D)+z,j=U.slice(0,R),R=U.slice(-R),z&&x===D&&(z=U[0],x=U.slice(-1)[0],R.unshift(x),j.push(z)),R.concat(U,j)):U}),l=(e.createClones=s,function(x){try{return x instanceof Element||x instanceof HTMLDocument}catch{return!1}}),d=(e.isElement=l,function(x,D,j){D===void 0&&(D=0),j===void 0&&(j=!1);var R=0,z=!0,U=[];return(0,e.isElement)(x)&&(U=Array.from((x==null?void 0:x.children)||[]).reduce(function(k,te,Q){var V=0,Q=Q-1,Re=k[Q],te=p(te==null?void 0:te.firstChild).width,te=te===void 0?0:te;return z=(R+=te)<=D,Re&&(V=Q==0?Re.width:Re.width+Re.position),k.push({position:V,width:te}),k},[]),j||(U=z?(0,n.mapPartialCoords)(U):(x=R-D,(0,n.mapPositionCoords)(U,x)))),{coords:U,content:R,partial:z}}),g=(e.createAutowidthTransformationSet=d,function(x,D,j,R){R===void 0&&(R=!1);var z=0,U=!0,k=[],L=(0,e.getItemWidth)(D,j);return k=x.reduce(function(B,V,te){var Re=0,te=B[te-1];return U=(z+=L)<=D,te&&(Re=L+te.position||0),B.push({width:L,position:Re}),B},[]),{coords:k=R?k:U?(0,n.mapPartialCoords)(k):(j=z-D,(0,n.mapPositionCoords)(k,j)),content:z,partial:U}}),y=(e.createDefaultTransformationSet=g,function(x,D){return 0<D?x/D:x});function p(x){return x&&x.getBoundingClientRect?{width:(x=x.getBoundingClientRect()).width,height:x.height}:{width:0,height:0}}e.getItemWidth=y,e.getElementDimensions=p;var w=function(x,R,z){var R=(0,e.getElementCursor)(R,z),z=(0,e.getElementFirstChild)(x,R);if((0,e.isElement)(z))return x=window.getComputedStyle(z),R=parseFloat(x.marginTop),x=parseFloat(x.marginBottom),Math.ceil(z.offsetHeight+R+x)},m=(e.getAutoheightProperty=w,function(x,R){var j=R.activeIndex,R=R.itemsInSlide;return x.infinite?j+R+(0,e.getItemsOffset)(x):j}),E=(e.getElementCursor=m,function(x,D){return x=x&&x.children||[],x[D]&&x[D].firstChild||null});function I(x,D,j){return(D=D===void 0?{}:D).width!==(j=j===void 0?{}:j).width}function h(x,z){var z=z||{},j=z.position,j=j===void 0?0:j,R=z.animationDuration,R=R===void 0?0:R,z=z.animationEasingFunction,z=z===void 0?"ease":z;return x&&(0,e.isElement)(x)&&(x.style.transition="transform ".concat(R,"ms ").concat(z," 0ms"),x.style.transform="translate3d(".concat(j,"px, 0, 0)")),x}e.getElementFirstChild=E,e.shouldHandleResizeEvent=I,e.animate=h;var f=function(x,D,j){var U=x||{},R=U.paddingLeft,z=U.paddingRight,k=U.autoHeight,U=U.animationDuration,k=k?(0,e.getAutoheightProperty)(j,x,D):void 0;return{height:k,transition:k?"height ".concat(U,"ms"):void 0,paddingLeft:"".concat(R,"px"),paddingRight:"".concat(z,"px")}},u=(e.getRenderWrapperStyles=f,function(j){var j=j||{},D=j.animationDuration,j=j.animationEasingFunction,j=j===void 0?"ease":j;return"transform ".concat(D===void 0?0:D,"ms ").concat(j," 0ms")}),c=(e.getTransitionProperty=u,function(x,D){return x=(x||{}).translate3d,x="translate3d(".concat(-(x===void 0?0:x),"px, 0, 0)"),t(t({},D),{transform:x})}),v=(e.getRenderStageStyles=c,function(x,U){var k=U.transformationSet,j=U.fadeoutAnimationIndex,R=U.fadeoutAnimationPosition,z=U.fadeoutAnimationProcessing,U=U.animationDuration,k=(k[x]||{}).width;return z&&j===x?{transform:"translateX(".concat(R,"px)"),animationDuration:"".concat(U,"ms"),width:"".concat(k,"px")}:{width:k}}),S=(e.getRenderStageItemStyles=v,function(x,k){var j=x,R=k.infinite,z=k.itemsOffset,U=k.itemsInSlide,k=k.transformationSet;return((k===void 0?[]:k)[j=R?x+(0,r.getShiftIndex)(U===void 0?0:U,z===void 0?0:z):j]||{}).position||0}),_=(e.getTranslate3dProperty=S,function(x,D){return-(D-Math.floor(x))});function T(x){return x=b(x),x=x&&x[4]||"",Number(x)}function b(x){return x&&(0,e.isElement)(x)&&window.getComputedStyle(x).transform.match(/(-?[0-9.]+)/g)||[]}e.getTouchmoveTranslatePosition=_,e.getTranslateXProperty=T,e.getTransformMatrix=b;var $=function(){var x;try{return!!((x=window==null?void 0:window.document)!=null&&x.createElement)}catch{return!1}},O=(e.canUseDOM=$,function(x,L){var j,R=1,z=L.responsive,U=L.autoWidth,k=L.infinite,L=L.innerWidth;return U!==void 0&&U?k!==void 0&&k?x:R:(z&&(U=Object.keys(z)).length&&(L||(0,e.canUseDOM)())&&(j=L===void 0?window.innerWidth:L,U.forEach(function(B){var V;Number(B)<=j&&(V=(B=z[B]).items,B=B.itemsFit,R=(B===void 0?"fill":B)==="contain"?V:Math.min(V,x))})),R||1)});e.getItemsInSlide=O})(sd);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateInitialState=e.getIsStageContentPartial=e.concatClassnames=void 0;var t=sd,n=qi,r=function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return a.filter(Boolean).join(" ")},i=(e.concatClassnames=r,function(a,s,l){return s===void 0&&(s=0),l===void 0&&(l=0),!(a=a!==void 0&&a)&&l<=s}),o=(e.getIsStageContentPartial=i,function(T,s,l){l===void 0&&(l=(0,t.canUseDOM)());var d,g,y=T.animationDuration,y=y===void 0?0:y,p=T.infinite,p=p!==void 0&&p,w=T.autoPlay,w=w!==void 0&&w,m=T.autoWidth,m=m!==void 0&&m,E=(0,t.createClones)(T),I=(0,t.getTransitionProperty)(),h=(0,t.getItemsCount)(T),f=(0,t.getItemsOffset)(T),u=(0,t.getItemsInSlide)(h,T),c=(0,n.getStartIndex)(T.activeIndex,h),c=(0,n.getActiveIndex)({startIndex:c,itemsCount:h,infinite:p}),v=(0,t.getElementDimensions)(s).width,S=(g=(s=(m?(d=(s=(0,t.createAutowidthTransformationSet)(s,v,p)).coords,g=s.content,s):(d=(s=(0,t.createDefaultTransformationSet)(E,v,u,p)).coords,g=s.content,s)).partial,g),(0,n.getItemCoords)(-u,d=d).position),_=(0,n.getSwipeLimitMin)({itemsOffset:f,transformationSet:d},T),T=(0,n.getSwipeLimitMax)({itemsCount:h,itemsOffset:f,itemsInSlide:u,transformationSet:d},T),b=(0,n.getSwipeShiftValue)(h,d);return{activeIndex:c,autoWidth:m,animationDuration:y,clones:E,infinite:p,itemsCount:h,itemsInSlide:u,itemsOffset:f,translate3d:(0,t.getTranslate3dProperty)(c,{itemsInSlide:u,itemsOffset:f,transformationSet:d,autoWidth:m,infinite:p}),stageWidth:v,stageContentWidth:g,initialStageHeight:0,isStageContentPartial:s,isAutoPlaying:w,isAutoPlayCanceledOnAction:!1,transformationSet:d,transition:I,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1,swipeLimitMin:_,swipeLimitMax:T,swipeAllowedPositionMax:S,swipeShiftValue:b,canUseDom:l}});e.calculateInitialState=o})(ad);var gg={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isClonedItem=e.isTargetItem=e.isActiveItem=e.getRenderStageItemClasses=void 0;var t=Nt,n=ad,r=qi,i=function(m,w){m===void 0&&(m=0);var g=w.fadeoutAnimationIndex,y=(0,e.isActiveItem)(m,w)?t.Modifiers.ACTIVE:"",p=(0,e.isClonedItem)(m,w)?t.Modifiers.CLONED:"",w=(0,e.isTargetItem)(m,w)?t.Modifiers.TARGET:"",m=m===g?t.Classnames.ANIMATED:"";return(0,n.concatClassnames)(t.Classnames.STAGE_ITEM,y,p,w,m)},o=(e.getRenderStageItemClasses=i,function(l,m){l===void 0&&(l=0);var g=m.activeIndex,y=m.itemsInSlide,p=m.itemsOffset,w=m.infinite,m=m.autoWidth,E=(0,r.getShiftIndex)(y,p);return m&&w?l-E===g+p:(m=g+E,w?m<=l&&l<m+y:g<=l&&l<m)}),a=(e.isActiveItem=o,function(l,w){l===void 0&&(l=0);var g=w.activeIndex,m=w.itemsInSlide,y=w.itemsOffset,p=w.infinite,w=w.autoWidth,m=(0,r.getShiftIndex)(m,y);return p?w&&p?l-m===g+y:l===g+m:l===g}),s=(e.isTargetItem=a,function(l,m){l===void 0&&(l=0);var g=m.itemsInSlide,y=m.itemsOffset,p=m.itemsCount,w=m.infinite,m=m.autoWidth;return!!w&&(m&&w?l<g||p-1+g<l:l<(m=(0,r.getShiftIndex)(g,y))||p-1+m<l)});e.isClonedItem=s})(gg);var vg={};(function(e){function t(n,r){r===void 0&&(r=0);function i(){o&&(clearTimeout(o),o=void 0)}var o=void 0;return[function(){for(var a=this,s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];i(),o=window.setTimeout(function(){n.apply(a,s),o=void 0},r)},i]}Object.defineProperty(e,"__esModule",{value:!0}),e.debounce=void 0,e.debounce=t})(vg);var yg={};(function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]}Object.defineProperty(e,"__esModule",{value:!0}),e.debug=void 0,e.debug=t})(yg);var Sg={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getSlideItemInfo=e.getSlideInfo=e.getSlideIndexForMultipleItems=e.getSlideIndexForNonMultipleItems=e.getActiveSlideDotsLength=e.getActiveSlideIndex=void 0;var t=function(s,g){var g=g||{},y=g.activeIndex,d=g.itemsInSlide,g=g.itemsCount,y=y+d;return d===1?(0,e.getSlideIndexForNonMultipleItems)(y,d,g):(0,e.getSlideIndexForMultipleItems)(y,d,g,s)},n=(e.getActiveSlideIndex=t,function(s,l){var d;return l===void 0&&(l=1),(s=s===void 0?0:s)&&l?(d=Math.floor(s/l),s%l==0?d-1:d):0}),r=(e.getActiveSlideDotsLength=n,function(s,l,d){return s<l?d-l:d<s?0:s-1}),i=(e.getSlideIndexForNonMultipleItems=r,function(s,l,d,g){var y=(0,e.getActiveSlideDotsLength)(d,l);return s===d+l?0:g||s<l&&s!==0?y:s===0?d%l==0?y:y-1:0<l?Math.floor(s/l)-1:0}),o=(e.getSlideIndexForMultipleItems=i,function(s,l){return l===void 0&&(l=0),s=(s=s===void 0?0:s)+1,s<1?s=l:l<s&&(s=1),{item:s,itemsCount:l}}),a=(e.getSlideInfo=o,function(l){var l=l||{},d=l.itemsInSlide,g=l.activeIndex,y=l.infinite,p=l.itemsCount;return l.isStageContentPartial?{isPrevSlideDisabled:!0,isNextSlideDisabled:!0}:{isPrevSlideDisabled:y===!1&&g===0,isNextSlideDisabled:y===!1&&p-d<=g}});e.getSlideItemInfo=a})(Sg);var wg={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.shouldCancelAutoPlayOnHover=e.shouldCancelAutoPlayOnAction=e.getItemIndexForDotNavigation=e.checkIsTheLastDotIndex=e.getDotsNavigationLength=e.hasDotForEachSlide=e.isStrategy=e.shouldDisableButtons=e.shouldDisableDots=e.shouldDisableControls=void 0;var t=Nt;function n(m,h){var m=(m||{}).controlsStrategy,h=h||{},E=h.itemsInSlide,I=h.itemsCount,h=h.autoWidth;if((0,e.isStrategy)(m,t.ControlsStrategy.RESPONSIVE))return!h&&E===I}function r(p,w){return p.disableDotsControls||n(p,w)}function i(p,w){return p.disableButtonsControls||!p.infinite&&n(p,w)}e.shouldDisableControls=n,e.shouldDisableDots=r,e.shouldDisableButtons=i;var o=function(p,w){return p===void 0&&(p=""),w===void 0&&(w=""),!!(p&&p.includes(w))},a=(e.isStrategy=o,function(p,w){return p||(0,e.isStrategy)(w,t.ControlsStrategy.ALTERNATE)}),s=(e.hasDotForEachSlide=a,function(p,w,m){return p===void 0&&(p=0),w===void 0&&(w=1),(m=m!==void 0&&m)?p:Number(w)!==0&&Math.ceil(p/w)||0}),l=(e.getDotsNavigationLength=s,function(p,w,m){return!w&&p===m-1}),d=(e.checkIsTheLastDotIndex=l,function(p,w,m,E){return(w?m-E:p*E)||0}),g=(e.getItemIndexForDotNavigation=d,function(p){return(p=p===void 0?"":p)===t.AutoPlayStrategy.ACTION||p===t.AutoPlayStrategy.ALL}),y=(e.shouldCancelAutoPlayOnAction=g,function(p){return(p=p===void 0?"":p)===t.AutoPlayStrategy.DEFAULT||p===t.AutoPlayStrategy.ALL});e.shouldCancelAutoPlayOnHover=y})(wg);(function(e){var t=Object.create?function(r,i,o,a){a===void 0&&(a=o);var s=Object.getOwnPropertyDescriptor(i,o);s&&("get"in s?i.__esModule:!s.writable&&!s.configurable)||(s={enumerable:!0,get:function(){return i[o]}}),Object.defineProperty(r,a,s)}:function(r,i,o,a){r[a=a===void 0?o:a]=i[o]},n=function(r,i){for(var o in r)o==="default"||Object.prototype.hasOwnProperty.call(i,o)||t(i,r,o)};Object.defineProperty(e,"__esModule",{value:!0}),n(ad,e),n(sd,e),n(gg,e),n(vg,e),n(qi,e),n(yg,e),n(Sg,e),n(wg,e),n(ld,e)})(Lr);(function(e){var t=function(a){return a&&a.__esModule?a:{default:a}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.SlideInfo=void 0,t(F)),r=Nt,i=Lr,o=function(l){var d=l.activeIndex,s=l.itemsCount,l=l.renderSlideInfo,d=(0,i.getSlideInfo)(d,s).item;return typeof l=="function"?n.default.createElement("div",{className:r.Classnames.SLIDE_INFO},l({item:d,itemsCount:s})):(l=(0,i.concatClassnames)(r.Classnames.SLIDE_INFO_ITEM,r.Modifiers.SEPARATOR),n.default.createElement("div",{className:r.Classnames.SLIDE_INFO},n.default.createElement("span",{className:r.Classnames.SLIDE_INFO_ITEM},d),n.default.createElement("span",{className:l},"/"),n.default.createElement("span",{className:r.Classnames.SLIDE_INFO_ITEM},s)))};e.SlideInfo=o})(hg);var _g={};(function(e){var t=function(i){return i&&i.__esModule?i:{default:i}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.StageItem=void 0,t(F)),r=function(s){var o=s.item,a=s.className,s=s.styles;return n.default.createElement("li",{style:s,className:a},o)};e.StageItem=r})(_g);var Eg={};(function(e){var t=function(a){return a&&a.__esModule?a:{default:a}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.DotsNavigation=void 0,t(F)),r=Nt,i=Lr,o=function(I){var s=I.state,l=I.onClick,d=I.onMouseEnter,g=I.onMouseLeave,y=I.controlsStrategy,p=I.renderDotsItem,w=s.itemsCount,m=s.itemsInSlide,E=s.infinite,I=s.autoWidth,h=s.activeIndex,f=(0,i.getSlideItemInfo)(s).isNextSlideDisabled,u=(0,i.hasDotForEachSlide)(I,y),c=(0,i.getDotsNavigationLength)(w,m,u);return n.default.createElement("ul",{className:r.Classnames.DOTS},Array.from({length:w}).map(function(v,S){var _,T,b;if(S<c)return T=(0,i.checkIsTheLastDotIndex)(S,!!E,c),_=(0,i.getItemIndexForDotNavigation)(S,T,w,m),T=(0,i.getActiveSlideIndex)(f,s),u&&((T=h)<0?T=w-1:w<=h&&(T=0),_=S),T=T===S?r.Modifiers.ACTIVE:"",b=p?r.Modifiers.CUSTOM:"",b=(0,i.concatClassnames)(r.Classnames.DOTS_ITEM,T,b),n.default.createElement("li",{key:"dot-item-".concat(S),onMouseEnter:d,onMouseLeave:g,onClick:function(){return l(_)},className:b},p&&p({isActive:!!T,activeIndex:S}))}))};e.DotsNavigation=o})(Eg);var Pg={};(function(e){var t=function(a){return a&&a.__esModule?a:{default:a}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.PlayPauseButton=void 0,t(F)),r=Nt,i=Lr,o=function(d){var s=d.isPlaying,l=d.onClick,d=d.renderPlayPauseButton;return typeof d=="function"?n.default.createElement("div",{className:r.Classnames.PLAY_BTN,onClick:l},d({isPlaying:s})):(d=s?r.Modifiers.PAUSE:"",s=(0,i.concatClassnames)(r.Classnames.PLAY_BTN_ITEM,d),n.default.createElement("div",{className:r.Classnames.PLAY_BTN},n.default.createElement("div",{className:r.Classnames.PLAY_BTN_WRAPPER},n.default.createElement("div",{onClick:l,className:s}))))};e.PlayPauseButton=o})(Pg);var Tg={};(function(e){var t=function(a){return a&&a.__esModule?a:{default:a}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.PrevNextButton=void 0,t(F)),r=Nt,i=Lr,o=function(p){var s,l=p.name,d=p.isDisabled,g=p.onClick,y=p.renderPrevButton,p=p.renderNextButton;return typeof y=="function"?n.default.createElement("div",{className:r.Classnames.BUTTON_PREV,onClick:g},y({isDisabled:d})):typeof p=="function"?n.default.createElement("div",{className:r.Classnames.BUTTON_NEXT,onClick:g},p({isDisabled:d})):(p=(y=l==="prev")?"<":">",l=y?r.Classnames.BUTTON_PREV:r.Classnames.BUTTON_NEXT,s=y?r.Classnames.BUTTON_PREV_WRAPPER:r.Classnames.BUTTON_NEXT_WRAPPER,y=y?r.Classnames.BUTTON_PREV_ITEM:r.Classnames.BUTTON_NEXT_ITEM,d=d?r.Modifiers.INACTIVE:"",y=(0,i.concatClassnames)(y,d),n.default.createElement("div",{className:l},n.default.createElement("div",{className:s},n.default.createElement("p",{className:y,onClick:function(w){return g(w)}},n.default.createElement("span",{"data-area":p})))))};e.PrevNextButton=o})(Tg);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.PrevNextButton=e.PlayPauseButton=e.DotsNavigation=e.StageItem=e.SlideInfo=void 0;var t=hg,n=(Object.defineProperty(e,"SlideInfo",{enumerable:!0,get:function(){return t.SlideInfo}}),_g),r=(Object.defineProperty(e,"StageItem",{enumerable:!0,get:function(){return n.StageItem}}),Eg),i=(Object.defineProperty(e,"DotsNavigation",{enumerable:!0,get:function(){return r.DotsNavigation}}),Pg),o=(Object.defineProperty(e,"PlayPauseButton",{enumerable:!0,get:function(){return i.PlayPauseButton}}),Tg);Object.defineProperty(e,"PrevNextButton",{enumerable:!0,get:function(){return o.PrevNextButton}})})(mg);(function(e){var t=function(){var h=function(f,u){return(h=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(c,v){c.__proto__=v}:function(c,v){for(var S in v)Object.prototype.hasOwnProperty.call(v,S)&&(c[S]=v[S])}))(f,u)};return function(f,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");function c(){this.constructor=f}h(f,u),f.prototype=u===null?Object.create(u):(c.prototype=u.prototype,new c)}}(),n=function(){return(n=Object.assign||function(h){for(var f,u=1,c=arguments.length;u<c;u++)for(var v in f=arguments[u])Object.prototype.hasOwnProperty.call(f,v)&&(h[v]=f[v]);return h}).apply(this,arguments)},r=Object.create?function(h,f,u,c){c===void 0&&(c=u);var v=Object.getOwnPropertyDescriptor(f,u);v&&("get"in v?f.__esModule:!v.writable&&!v.configurable)||(v={enumerable:!0,get:function(){return f[u]}}),Object.defineProperty(h,c,v)}:function(h,f,u,c){h[c=c===void 0?u:c]=f[u]},i=Object.create?function(h,f){Object.defineProperty(h,"default",{enumerable:!0,value:f})}:function(h,f){h.default=f},o=function(h){if(h&&h.__esModule)return h;var f={};if(h!=null)for(var u in h)u!=="default"&&Object.prototype.hasOwnProperty.call(h,u)&&r(f,h,u);return i(f,h),f},a=function(h,f){for(var u in h)u==="default"||Object.prototype.hasOwnProperty.call(f,u)||r(f,h,u)},s=function(h,f,u,c){return new(u=u||Promise)(function(v,S){function _($){try{b(c.next($))}catch(O){S(O)}}function T($){try{b(c.throw($))}catch(O){S(O)}}function b($){var O;$.done?v($.value):((O=$.value)instanceof u?O:new u(function(x){x(O)})).then(_,T)}b((c=c.apply(h,f||[])).next())})},l=function(h,f){var u,c,v,S={label:0,sent:function(){if(1&v[0])throw v[1];return v[1]},trys:[],ops:[]},_={next:T(0),throw:T(1),return:T(2)};return typeof Symbol=="function"&&(_[Symbol.iterator]=function(){return this}),_;function T(b){return function($){var O=[b,$];if(u)throw new TypeError("Generator is already executing.");for(;S;)try{if(u=1,c&&(v=2&O[0]?c.return:O[0]?c.throw||((v=c.return)&&v.call(c),0):c.next)&&!(v=v.call(c,O[1])).done)return v;switch(c=0,(O=v?[2&O[0],v.value]:O)[0]){case 0:case 1:v=O;break;case 4:return S.label++,{value:O[1],done:!1};case 5:S.label++,c=O[1],O=[0];continue;case 7:O=S.ops.pop(),S.trys.pop();continue;default:if(!(v=0<(v=S.trys).length&&v[v.length-1])&&(O[0]===6||O[0]===2)){S=0;continue}if(O[0]===3&&(!v||O[1]>v[0]&&O[1]<v[3]))S.label=O[1];else if(O[0]===6&&S.label<v[1])S.label=v[1],v=O;else{if(!(v&&S.label<v[2])){v[2]&&S.ops.pop(),S.trys.pop();continue}S.label=v[2],S.ops.push(O)}}O=f.call(h,S)}catch(x){O=[6,x],c=0}finally{u=v=0}if(5&O[0])throw O[1];return{value:O[0]?O[1]:void 0,done:!0}}}},d=function(h){return h&&h.__esModule?h:{default:h}},g=(Object.defineProperty(e,"__esModule",{value:!0}),d(F)),y=d(dg),p=pg,w=o(mg),m=o(Lr),E=Nt,I=(a(Nt,e),function(h){function f(u){var c=h.call(this,u)||this;return c.swipeListener=null,c._handleKeyboardEvents=function(v){switch(v.code){case"Space":return c.props.autoPlay&&c._handlePlayPauseToggle();case"ArrowLeft":return c.slidePrev(v);case"ArrowRight":return c.slideNext(v)}},c._handleBeforeSlideEnd=function(v){return s(c,void 0,void 0,function(){var S,_,T;return l(this,function(b){switch(b.label){case 0:return _=this.state,T=_.activeIndex,S=_.itemsCount,_=_.fadeoutAnimationProcessing,m.shouldRecalculateSlideIndex(T,S)?(T=m.getUpdateSlidePositionIndex(T,S),[4,this._handleUpdateSlidePosition(T)]):[3,2];case 1:return b.sent(),[3,4];case 2:return _?[4,this.setState({fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})]:[3,4];case 3:b.sent(),b.label=4;case 4:return this._handleSlideChanged(v),[2]}})})},c._handleMouseEnter=function(){var v=c.props.autoPlayStrategy;m.shouldCancelAutoPlayOnHover(v)&&c.state.isAutoPlaying&&(c.isHovered=!0,c._handlePause())},c._handleMouseLeave=function(){c.state.isAutoPlaying&&(c.isHovered=!1,c._handlePlay())},c._handlePause=function(){c._clearAutoPlayTimeout()},c._handlePlayPauseToggle=function(){return s(c,void 0,void 0,function(){var v;return l(this,function(S){switch(S.label){case 0:return v=this.state.isAutoPlaying,this.hasUserAction=!0,[4,this.setState({isAutoPlaying:!v,isAutoPlayCanceledOnAction:!0})];case 1:return S.sent(),v?this._handlePause():this._handlePlay(),[2]}})})},c._setRootComponentRef=function(v){return c.rootElement=v},c._setStageComponentRef=function(v){return c.stageComponent=v},c._renderStageItem=function(v,S){var _=m.getRenderStageItemStyles(S,c.state),T=m.getRenderStageItemClasses(S,c.state);return g.default.createElement(w.StageItem,{styles:_,className:T,key:"stage-item-".concat(S),item:v})},c._renderSlideInfo=function(){var v=c.props.renderSlideInfo,_=c.state,S=_.activeIndex,_=_.itemsCount;return g.default.createElement(w.SlideInfo,{itemsCount:_,activeIndex:S,renderSlideInfo:v})},c.state=m.calculateInitialState(u,null),c.isHovered=!1,c.isAnimationDisabled=!1,c.isTouchMoveProcessStarted=!1,c.cancelTouchAnimations=!1,c.hasUserAction=!1,c.rootElement=null,c.rootComponentDimensions={},c.stageComponent=null,c.startTouchmovePosition=void 0,c.slideTo=c.slideTo.bind(c),c.slidePrev=c.slidePrev.bind(c),c.slideNext=c.slideNext.bind(c),c._handleTouchmove=c._handleTouchmove.bind(c),c._handleTouchend=c._handleTouchend.bind(c),c._handleDotClick=c._handleDotClick.bind(c),c._handleResize=c._handleResize.bind(c),u=m.debounce(c._handleResize,100),c._handleResizeDebounced=u[0],c._cancelResizeDebounced=u[1],c}return t(f,h),f.prototype.componentDidMount=function(){return s(this,void 0,void 0,function(){return l(this,function(u){switch(u.label){case 0:return[4,this._setInitialState()];case 1:return u.sent(),this._addEventListeners(),this._setupSwipeHandlers(),this.props.autoPlay&&this._handlePlay(),[2]}})})},f.prototype.componentDidUpdate=function(u,c){var k=this.props,v=k.activeIndex,S=k.animationDuration,_=k.autoWidth,T=k.children,b=k.infinite,$=k.items,O=k.paddingLeft,x=k.paddingRight,D=k.responsive,j=k.swipeExtraPadding,R=k.mouseTracking,z=k.swipeDelta,U=k.touchTracking,k=k.touchMoveDefaultEvents;T&&u.children!==T?(T=c.activeIndex,c=n(n({},this.props),{activeIndex:T}),this._updateComponent(c)):u.autoWidth!==_||u.infinite!==b||u.items!==$||u.paddingLeft!==O||u.paddingRight!==x||u.responsive!==D||u.swipeExtraPadding!==j?this._updateComponent():(u.animationDuration!==S&&this.setState({animationDuration:S}),u.activeIndex!==v&&this.slideTo(v,E.EventType.UPDATE)),u.swipeDelta===z&&u.mouseTracking===R&&u.touchTracking===U&&u.touchMoveDefaultEvents===k||this._updateSwipeProps(),this.props.keyboardNavigation!==u.keyboardNavigation&&this._updateEventListeners()},f.prototype.componentWillUnmount=function(){this._cancelResizeDebounced(),this._cancelTimeoutAnimations(),this._removeEventListeners()},Object.defineProperty(f.prototype,"eventObject",{get:function(){var c=this.state,u=c.itemsInSlide,c=c.activeIndex,S=m.getSlideItemInfo(this.state),v=S.isNextSlideDisabled,S=S.isPrevSlideDisabled;return{item:c,slide:m.getActiveSlideIndex(v,this.state),itemsInSlide:u,isNextSlideDisabled:v,isPrevSlideDisabled:S,type:E.EventType.ACTION}},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"isFadeoutAnimationAllowed",{get:function(){var u=this.state.itemsInSlide,_=this.props,c=_.animationType,v=_.paddingLeft,S=_.paddingRight,_=_.autoWidth;return u===1&&c===E.AnimationType.FADEOUT&&!(v||S||_)},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"touchmovePosition",{get:function(){return this.startTouchmovePosition!==void 0?this.startTouchmovePosition:this.state.translate3d},enumerable:!1,configurable:!0}),f.prototype.slideTo=function(u,c){var v,S,_;u===void 0&&(u=0),this._handlePause(),this.isFadeoutAnimationAllowed?(v=m.getUpdateSlidePositionIndex(u,this.state.itemsCount),S=m.getFadeoutAnimationPosition(v,this.state),_=m.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:v,fadeoutAnimationIndex:_,fadeoutAnimationPosition:S,eventType:c})):this._handleSlideTo({activeIndex:u,eventType:c})},f.prototype.slidePrev=function(S){this._handlePause(),S&&S.isTrusted&&(this.hasUserAction=!0);var c,v,S=this.state.activeIndex-1;this.isFadeoutAnimationAllowed?(c=-this.state.stageWidth,v=m.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:S,fadeoutAnimationIndex:v,fadeoutAnimationPosition:c})):this._handleSlideTo({activeIndex:S})},f.prototype.slideNext=function(S){this._handlePause(),S&&S.isTrusted&&(this.hasUserAction=!0);var c,v,S=this.state.activeIndex+1;this.isFadeoutAnimationAllowed?(c=this.state.stageWidth,v=m.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:S,fadeoutAnimationIndex:v,fadeoutAnimationPosition:c})):this._handleSlideTo({activeIndex:S})},f.prototype._addEventListeners=function(){window.addEventListener("resize",this._handleResizeDebounced),this.props.keyboardNavigation&&window.addEventListener("keyup",this._handleKeyboardEvents)},f.prototype._removeEventListeners=function(){this.swipeListener&&this.swipeListener.destroy(),window.removeEventListener("resize",this._handleResizeDebounced),window.removeEventListener("keyup",this._handleKeyboardEvents)},f.prototype._updateEventListeners=function(){this.props.keyboardNavigation?window.addEventListener("keyup",this._handleKeyboardEvents):window.removeEventListener("keyup",this._handleKeyboardEvents)},f.prototype._handleResize=function(u){return s(this,void 0,void 0,function(){var c,v,S;return l(this,function(_){switch(_.label){case 0:return v=this.props.onResizeEvent,S=m.getElementDimensions(this.rootElement),(v||m.shouldHandleResizeEvent)(u,this.rootComponentDimensions,S)?(this._cancelTimeoutAnimations(),this.rootComponentDimensions=S,v=this.state,S=v.itemsCount,c=v.isAutoPlaying,v=m.getUpdateSlidePositionIndex(this.state.activeIndex,S),S=m.calculateInitialState(n(n({},this.props),{activeIndex:v}),this.stageComponent),v=m.getTranslate3dProperty(S.activeIndex,S),S=n(n({},S),{translate3d:v,isAutoPlaying:c}),m.animate(this.stageComponent,{position:-v}),[4,this.setState(S)]):[3,2];case 1:_.sent(),this._handleResized(),this.isAnimationDisabled=!1,c&&this._handlePlay(),_.label=2;case 2:return[2]}})})},f.prototype._handleTouchmove=function(u,T){var v=T.absY,S=T.absX,_=T.deltaX,T=this.props.swipeDelta,D=this.state,b=D.swipeShiftValue,$=D.swipeLimitMin,O=D.swipeLimitMax,x=D.infinite,D=D.fadeoutAnimationProcessing;if(this.hasUserAction=!0,!(D||!this.isTouchMoveProcessStarted&&m.isVerticalTouchmoveDetected(S,v,T))){this.isTouchMoveProcessStarted||(this._cancelTimeoutAnimations(),this._setTouchmovePosition(),this.isAnimationDisabled=!0,this.isTouchMoveProcessStarted=!0,this._handleSlideChange());var j=m.getTouchmoveTranslatePosition(_,this.touchmovePosition);if(x===!1)return $<j||j<-O?void 0:void m.animate(this.stageComponent,{position:j});if(m.shouldRecalculateSwipePosition(j,$,O))try{(function R(){m.getIsLeftDirection(_)?j+=b:j+=-b,m.shouldRecalculateSwipePosition(j,$,O)&&R()})()}catch(R){m.debug(R)}m.animate(this.stageComponent,{position:j})}},f.prototype._handleTouchend=function(u,T){var v,S,_,T=T.deltaX;this._clearTouchmovePosition(),this.isTouchMoveProcessStarted&&(this.isTouchMoveProcessStarted=!1,v=this.state.animationDuration,S=this.props.animationEasingFunction,_=m.getTranslateXProperty(this.stageComponent),T=m.getSwipeTouchendPosition(this.state,T,_),m.animate(this.stageComponent,{position:T,animationDuration:v,animationEasingFunction:S}),this._handleBeforeTouchEnd(T))},f.prototype._handleBeforeTouchEnd=function(u){var c=this,v=this.state.animationDuration;this.touchEndTimeoutId=window.setTimeout(function(){return s(c,void 0,void 0,function(){var S,_,T,b=this;return l(this,function($){switch($.label){case 0:return S=m.getSwipeTouchendIndex(u,this.state),_=m.getTranslate3dProperty(S,this.state),m.animate(this.stageComponent,{position:-_}),T=m.getTransitionProperty(),[4,this.setState({activeIndex:S,translate3d:_,transition:T})];case 1:return $.sent(),requestAnimationFrame(function(){return b._handleSlideChanged()}),[2]}})})},v)},f.prototype._handleSlideTo=function(u){var S=u.activeIndex,c=S===void 0?0:S,S=u.fadeoutAnimationIndex,v=S===void 0?null:S,S=u.fadeoutAnimationPosition,_=S===void 0?null:S,T=u.eventType;return s(this,void 0,void 0,function(){var b,$,O,x,D=this;return l(this,function(j){switch(j.label){case 0:return $=this.props,O=$.infinite,$=$.animationEasingFunction,b=this.state,x=b.itemsCount,b=b.animationDuration,this.isAnimationDisabled||this.state.activeIndex===c||!O&&m.shouldCancelSlideAnimation(c,x)?[2]:(this.isAnimationDisabled=!0,this._cancelTimeoutAnimations(),this._handleSlideChange(T),O=!1,x=m.getTranslate3dProperty(c,this.state),$=v!==null&&_!==null?(O=!0,m.getTransitionProperty()):m.getTransitionProperty({animationDuration:b,animationEasingFunction:$}),[4,this.setState({activeIndex:c,transition:$,translate3d:x,animationDuration:b,fadeoutAnimationIndex:v,fadeoutAnimationPosition:_,fadeoutAnimationProcessing:O})]);case 1:return j.sent(),this.slideEndTimeoutId=window.setTimeout(function(){return D._handleBeforeSlideEnd(T)},b),[2]}})})},f.prototype._handleUpdateSlidePosition=function(u){return s(this,void 0,void 0,function(){var c,v,S;return l(this,function(_){switch(_.label){case 0:return c=this.state.animationDuration,v=m.getTranslate3dProperty(u,this.state),S=m.getTransitionProperty({animationDuration:0}),[4,this.setState({activeIndex:u,translate3d:v,transition:S,animationDuration:c,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})];case 1:return _.sent(),[2]}})})},f.prototype._handleResized=function(){this.props.onResized&&this.props.onResized(n(n({},this.eventObject),{type:E.EventType.RESIZE}))},f.prototype._handleSlideChange=function(u){this.props.onSlideChange&&(u=u?n(n({},this.eventObject),{type:u}):this.eventObject,this.props.onSlideChange(u))},f.prototype._handleSlideChanged=function(u){return s(this,void 0,void 0,function(){var c,v,S,_;return l(this,function(T){switch(T.label){case 0:return v=this.state,c=v.isAutoPlaying,v=v.isAutoPlayCanceledOnAction,S=this.props,_=S.autoPlayStrategy,S=S.onSlideChanged,m.shouldCancelAutoPlayOnAction(_)&&this.hasUserAction&&!v?[4,this.setState({isAutoPlayCanceledOnAction:!0,isAutoPlaying:!1})]:[3,2];case 1:return T.sent(),[3,3];case 2:c&&this._handlePlay(),T.label=3;case 3:return this.isAnimationDisabled=!1,S&&(_=u?n(n({},this.eventObject),{type:u}):this.eventObject,S(_)),[2]}})})},f.prototype._handleDotClick=function(u){this.hasUserAction=!0,this.slideTo(u)},f.prototype._handlePlay=function(){this._setAutoPlayInterval()},f.prototype._cancelTimeoutAnimations=function(){this._clearAutoPlayTimeout(),this._clearSlideEndTimeout(),this.clearTouchendTimeout()},f.prototype._clearAutoPlayTimeout=function(){window.clearTimeout(this.autoPlayTimeoutId),this.autoPlayTimeoutId=void 0},f.prototype._clearSlideEndTimeout=function(){clearTimeout(this.slideEndTimeoutId),this.slideEndTimeoutId=void 0},f.prototype.clearTouchendTimeout=function(){clearTimeout(this.touchEndTimeoutId),this.touchEndTimeoutId=void 0},f.prototype._clearTouchmovePosition=function(){this.startTouchmovePosition=void 0},f.prototype._setTouchmovePosition=function(){var u=m.getTranslateXProperty(this.stageComponent);this.startTouchmovePosition=-u},f.prototype._setInitialState=function(){return s(this,void 0,void 0,function(){var u;return l(this,function(c){switch(c.label){case 0:return u=m.calculateInitialState(this.props,this.stageComponent),this.rootComponentDimensions=m.getElementDimensions(this.rootElement),[4,this.setState(u)];case 1:return c.sent(),this.props.onInitialized&&this.props.onInitialized(n(n({},this.eventObject),{type:E.EventType.INIT})),[2]}})})},f.prototype._setAutoPlayInterval=function(){var u=this,v=this.props,c=v.autoPlayDirection,v=v.autoPlayInterval;this.autoPlayTimeoutId=window.setTimeout(function(){u.isHovered||(c===E.AutoplayDirection.RTL?u.slidePrev():u.slideNext())},v)},f.prototype._setupSwipeHandlers=function(){this.swipeListener=new y.default({element:this.rootElement,delta:this.props.swipeDelta,onSwiping:this._handleTouchmove,onSwiped:this._handleTouchend,rotationAngle:5,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents,preventTrackingOnMouseleave:!0}),this.swipeListener.init()},f.prototype._updateComponent=function(u){var c=this;u===void 0&&(u=this.props),this._cancelTimeoutAnimations(),this.isAnimationDisabled=!1,this.state.isAutoPlaying&&this._handlePlay(),this.setState({clones:m.createClones(u)}),requestAnimationFrame(function(){c.setState(m.calculateInitialState(u,c.stageComponent))})},f.prototype._updateSwipeProps=function(){this.swipeListener&&this.swipeListener.update({delta:this.props.swipeDelta,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents})},f.prototype._renderDotsNavigation=function(){var c=this.props,u=c.renderDotsItem,c=c.controlsStrategy;return g.default.createElement(w.DotsNavigation,{state:this.state,onClick:this._handleDotClick,renderDotsItem:u,controlsStrategy:c})},f.prototype._renderPrevButton=function(){var u=this.props.renderPrevButton,c=m.getSlideItemInfo(this.state).isPrevSlideDisabled;return g.default.createElement(w.PrevNextButton,{name:"prev",onClick:this.slidePrev,isDisabled:c,renderPrevButton:u})},f.prototype._renderNextButton=function(){var u=this.props.renderNextButton,c=m.getSlideItemInfo(this.state).isNextSlideDisabled;return g.default.createElement(w.PrevNextButton,{name:"next",onClick:this.slideNext,isDisabled:c,renderNextButton:u})},f.prototype._renderPlayPauseButton=function(){var u=this.props.renderPlayPauseButton,c=this.state.isAutoPlaying;return g.default.createElement(w.PlayPauseButton,{isPlaying:c,onClick:this._handlePlayPauseToggle,renderPlayPauseButton:u})},f.prototype.render=function(){var b=this.state,_=b.translate3d,u=b.clones,T=b.transition,b=b.canUseDom,c=m.shouldDisableDots(this.props,this.state),v=m.shouldDisableButtons(this.props,this.state),S=m.getRenderWrapperStyles(this.props,this.state,this.stageComponent),_=m.getRenderStageStyles({translate3d:_},{transition:T}),T=this.props.ssrSilentMode||b?"":E.Modifiers.SSR,b=m.concatClassnames(E.Classnames.ROOT,T);return g.default.createElement("div",{className:b},g.default.createElement("div",{ref:this._setRootComponentRef},g.default.createElement("div",{style:S,className:E.Classnames.WRAPPER,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave},g.default.createElement("ul",{style:_,className:E.Classnames.STAGE,ref:this._setStageComponentRef},u.map(this._renderStageItem)))),c?null:this._renderDotsNavigation(),v?null:this._renderPrevButton(),v?null:this._renderNextButton(),this.props.disableSlideInfo?null:this._renderSlideInfo(),this.props.autoPlayControls?this._renderPlayPauseButton():null)},f.defaultProps=p.defaultProps,f}(g.default.PureComponent));e.default=I})(cg);const mT=Ep(cg);const hT=C.div`
    max-width: 61.5rem;
    width: 100%;
    padding: 2rem;
    border-radius: 6px;
    background-color: #141615;
    transition: background-color 0.25s ease-in-out;

    &:hover {
        background-color: ${({theme:e})=>e.colors.darkgrey};
    }

    @media ${({theme:e})=>e.media.small} {
        max-width: 40rem;
        min-height: 63rem;
    }
`,gT=C(Ee)`
    @media ${({theme:e})=>e.media.small} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,vT=C.h3`
    margin-bottom: 1.6rem;
    font-size: 1.9rem;
    font-weight: 600;
    text-transform: uppercase;
`,yT=C.span`
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({theme:e})=>e.colors.primary};
`,ST=C.span`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7rem;
    color: ${({theme:e})=>e.colors.grey};
`,wT=C.p`
    max-width: 25.6rem;
    font-size: 12px;
    line-height: 1.7rem;
    color: ${({theme:e})=>e.colors.grey};

    @media ${({theme:e})=>e.media.small} {
        max-width: 100%;
    }
`,_T=C.img``,In={NewsSlide:hT,NewsContent:gT,NewsTitle:vT,GameName:yT,Date:ST,NewsDescription:wT,NewsImage:_T},ET=({item:e})=>P.jsxs(In.NewsSlide,{children:[P.jsxs(Ee,{justify:"space-between",children:[P.jsx(In.GameName,{children:"God of War Ragnarok"}),P.jsx(In.Date,{children:e.date})]}),P.jsx(In.NewsTitle,{children:e.title}),P.jsxs(In.NewsContent,{gap:"2.4rem",children:[P.jsx(In.NewsImage,{src:e.img,srcSet:`${e.img2x} 2x`,alt:e.title,width:"278",height:"249"}),P.jsx(In.NewsDescription,{children:e.description})]})]}),PT=({data:e})=>{const t=e.map((n,r)=>P.jsx(ET,{item:n,"data-value":r+1},r));return P.jsx(mT,{items:t,autoWidth:!0,autoPlay:!0,autoPlayStrategy:"none",autoPlayInterval:2e3,animationDuration:1500,animationType:"fadeout",mouseTracking:!0,disableDotsControls:!0,infinite:!0,keyboardNavigation:!0})},TT=()=>P.jsxs(pp.News,{id:"news",children:[P.jsx(pp.NewsHeading,{children:"News"}),P.jsx(PT,{data:jP})]}),xT=C.section`
    padding-top: 10rem;
`,IT=C(Nr)`
    margin-bottom: 3.7rem;
`,_p={FAQ:xT,FAQHeading:IT},kT=C.div`
    transition: transform 0.4s ease-in-out;
    transform: translate(0);
    border-bottom: 2px solid ${({theme:e})=>e.colors.primary};

    margin-bottom: 1.8rem;
`,CT=C(Ee)`
    width: 100%;
    margin-bottom: 1rem;
    cursor: pointer;
`,OT=C.p`
    text-align: left;
    font-size: 1.7rem;
    font-weight: 600;
`,bT=C.span`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.darkgrey};

    &::before {
        font-size: 2.5rem;
        content: '+';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(${({active:e})=>e?45:0}deg);
        transition: transform 0.3s ease-in-out;
    }

    &:hover {
        background-color: ${({theme:e})=>e.colors.grey};
    }
`,AT=C.div`
    padding-bottom: 1rem;
`,DT=C.p`
    max-height: ${({active:e})=>e?150:0}px;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
`,Gn={AccordionItem:kT,AccordionHeader:CT,Question:OT,Plus:bT,AccordionContent:AT,Answer:DT},$T=({item:e})=>{const[t,n]=F.useState(!1),r=()=>{n(!t)};return P.jsxs(Gn.AccordionItem,{children:[P.jsxs(Gn.AccordionHeader,{onClick:r,justify:"space-between",align:"center",children:[P.jsx(Gn.Question,{children:e.question}),P.jsx(Gn.Plus,{active:t?t.toString():void 0,"aria-label":"toggle-answer"})]}),P.jsx(Gn.AccordionContent,{children:P.jsx(Gn.Answer,{active:t?t.toString():void 0,children:e.answer})})]})},MT=({data:e})=>{const t=e.map((n,r)=>P.jsx($T,{item:n},r));return P.jsx(ag,{direction:"left",duration:400,triggerOnce:!0,cascade:!0,children:t})},jT=()=>P.jsx(_p.FAQ,{id:"faq",children:P.jsxs(Vn,{children:[P.jsx(_p.FAQHeading,{children:"FAQ"}),P.jsx(MT,{data:NP})]})}),NT=({onClickBuyNow:e})=>P.jsxs("main",{children:[P.jsx(oE,{onClickBuyNow:e}),P.jsx(QP,{onClickBuyNow:e}),P.jsx(s3,{onClickBuyNow:e}),P.jsx(h3,{}),P.jsx(D3,{onClickBuyNow:e}),P.jsx(TT,{}),P.jsx(jT,{})]}),LT=()=>{const[e,t]=F.useState(!1),[n,r]=F.useState({edition:"",price:0}),i=(a,s)=>{r({edition:a,price:s}),t(!0)},o=()=>{t(!1)};return P.jsxs(nS.App,{children:[P.jsx(Q_,{opened:e,currentEdition:n,onCloseModal:o}),P.jsx(S_,{}),P.jsx(NT,{onClickBuyNow:i}),P.jsx(O_,{}),P.jsx(K_,{})]})};Pl.createRoot(document.getElementById("root")).render(P.jsxs(Y1,{theme:Z1,children:[P.jsx(J1,{}),P.jsx(LT,{})]}));
