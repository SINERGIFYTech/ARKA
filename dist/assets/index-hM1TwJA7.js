var Tg=Object.defineProperty;var Ig=(e,t,n)=>t in e?Tg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var mt=(e,t,n)=>Ig(e,typeof t!="symbol"?t+"":t,n);function Rg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function En(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Mg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Vp={exports:{}},wl={},Wp={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),zg=Symbol.for("react.portal"),Bg=Symbol.for("react.fragment"),Dg=Symbol.for("react.strict_mode"),Ug=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),Hg=Symbol.for("react.context"),$g=Symbol.for("react.forward_ref"),Vg=Symbol.for("react.suspense"),Wg=Symbol.for("react.memo"),Qg=Symbol.for("react.lazy"),j2=Symbol.iterator;function _g(e){return e===null||typeof e!="object"?null:(e=j2&&e[j2]||e["@@iterator"],typeof e=="function"?e:null)}var Qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_p=Object.assign,Gp={};function ri(e,t,n){this.props=e,this.context=t,this.refs=Gp,this.updater=n||Qp}ri.prototype.isReactComponent={};ri.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ri.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yp(){}Yp.prototype=ri.prototype;function q0(e,t,n){this.props=e,this.context=t,this.refs=Gp,this.updater=n||Qp}var K0=q0.prototype=new Yp;K0.constructor=q0;_p(K0,ri.prototype);K0.isPureReactComponent=!0;var A2=Array.isArray,Xp=Object.prototype.hasOwnProperty,ed={current:null},Zp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Xp.call(t,r)&&!Zp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ko,type:e,key:a,ref:l,props:i,_owner:ed.current}}function Gg(e,t){return{$$typeof:ko,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function td(e){return typeof e=="object"&&e!==null&&e.$$typeof===ko}function Yg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var S2=/\/+/g;function ls(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yg(""+e.key):t.toString(36)}function aa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ko:case zg:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ls(l,0):r,A2(i)?(n="",e!=null&&(n=e.replace(S2,"$&/")+"/"),aa(i,t,n,"",function(d){return d})):i!=null&&(td(i)&&(i=Gg(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(S2,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",A2(e))for(var s=0;s<e.length;s++){a=e[s];var c=r+ls(a,s);l+=aa(a,t,n,c,i)}else if(c=_g(e),typeof c=="function")for(e=c.call(e),s=0;!(a=e.next()).done;)a=a.value,c=r+ls(a,s++),l+=aa(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Mo(e,t,n){if(e==null)return e;var r=[],i=0;return aa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Xg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},la={transition:null},Zg={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:la,ReactCurrentOwner:ed};function qp(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Mo,forEach:function(e,t,n){Mo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mo(e,function(){t++}),t},toArray:function(e){return Mo(e,function(t){return t})||[]},only:function(e){if(!td(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=ri;ae.Fragment=Bg;ae.Profiler=Ug;ae.PureComponent=q0;ae.StrictMode=Dg;ae.Suspense=Vg;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zg;ae.act=qp;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_p({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=ed.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Xp.call(t,c)&&!Zp.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:ko,type:e.type,key:i,ref:a,props:r,_owner:l}};ae.createContext=function(e){return e={$$typeof:Hg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fg,_context:e},e.Consumer=e};ae.createElement=Jp;ae.createFactory=function(e){var t=Jp.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:$g,render:e}};ae.isValidElement=td;ae.lazy=function(e){return{$$typeof:Qg,_payload:{_status:-1,_result:e},_init:Xg}};ae.memo=function(e,t){return{$$typeof:Wg,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=la.transition;la.transition={};try{e()}finally{la.transition=t}};ae.unstable_act=qp;ae.useCallback=function(e,t){return Xe.current.useCallback(e,t)};ae.useContext=function(e){return Xe.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};ae.useEffect=function(e,t){return Xe.current.useEffect(e,t)};ae.useId=function(){return Xe.current.useId()};ae.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return Xe.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};ae.useRef=function(e){return Xe.current.useRef(e)};ae.useState=function(e){return Xe.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return Xe.current.useTransition()};ae.version="18.3.1";Wp.exports=ae;var N=Wp.exports;const J=En(N),Jg=Rg({__proto__:null,default:J},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg=N,Kg=Symbol.for("react.element"),ex=Symbol.for("react.fragment"),tx=Object.prototype.hasOwnProperty,nx=qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rx={key:!0,ref:!0,__self:!0,__source:!0};function Kp(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)tx.call(t,r)&&!rx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Kg,type:e,key:a,ref:l,props:i,_owner:nx.current}}wl.Fragment=ex;wl.jsx=Kp;wl.jsxs=Kp;Vp.exports=wl;var o=Vp.exports,vc={},ef={exports:{}},ut={},tf={exports:{}},nf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,U){var H=T.length;T.push(U);e:for(;0<H;){var K=H-1>>>1,Z=T[K];if(0<i(Z,U))T[K]=U,T[H]=Z,H=K;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var U=T[0],H=T.pop();if(H!==U){T[0]=H;e:for(var K=0,Z=T.length,I=Z>>>1;K<I;){var B=2*(K+1)-1,$=T[B],Q=B+1,_=T[Q];if(0>i($,H))Q<Z&&0>i(_,$)?(T[K]=_,T[Q]=H,K=Q):(T[K]=$,T[B]=H,K=B);else if(Q<Z&&0>i(_,H))T[K]=_,T[Q]=H,K=Q;else break e}}return U}function i(T,U){var H=T.sortIndex-U.sortIndex;return H!==0?H:T.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],d=[],u=1,p=null,g=3,v=!1,y=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var U=n(d);U!==null;){if(U.callback===null)r(d);else if(U.startTime<=T)r(d),U.sortIndex=U.expirationTime,t(c,U);else break;U=n(d)}}function x(T){if(b=!1,f(T),!y)if(n(c)!==null)y=!0,q(j);else{var U=n(d);U!==null&&le(x,U.startTime-T)}}function j(T,U){y=!1,b&&(b=!1,m(w),w=-1),v=!0;var H=g;try{for(f(U),p=n(c);p!==null&&(!(p.expirationTime>U)||T&&!R());){var K=p.callback;if(typeof K=="function"){p.callback=null,g=p.priorityLevel;var Z=K(p.expirationTime<=U);U=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(c)&&r(c),f(U)}else r(c);p=n(c)}if(p!==null)var I=!0;else{var B=n(d);B!==null&&le(x,B.startTime-U),I=!1}return I}finally{p=null,g=H,v=!1}}var S=!1,k=null,w=-1,A=5,P=-1;function R(){return!(e.unstable_now()-P<A)}function M(){if(k!==null){var T=e.unstable_now();P=T;var U=!0;try{U=k(!0,T)}finally{U?L():(S=!1,k=null)}}else S=!1}var L;if(typeof h=="function")L=function(){h(M)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,te=G.port2;G.port1.onmessage=M,L=function(){te.postMessage(null)}}else L=function(){C(M,0)};function q(T){k=T,S||(S=!0,L())}function le(T,U){w=C(function(){T(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,q(j))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var U=3;break;default:U=g}var H=g;g=U;try{return T()}finally{g=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,U){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var H=g;g=T;try{return U()}finally{g=H}},e.unstable_scheduleCallback=function(T,U,H){var K=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?K+H:K):H=K,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=H+Z,T={id:u++,callback:U,priorityLevel:T,startTime:H,expirationTime:Z,sortIndex:-1},H>K?(T.sortIndex=H,t(d,T),n(c)===null&&T===n(d)&&(b?(m(w),w=-1):b=!0,le(x,H-K))):(T.sortIndex=Z,t(c,T),y||v||(y=!0,q(j))),T},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(T){var U=g;return function(){var H=g;g=U;try{return T.apply(this,arguments)}finally{g=H}}}})(nf);tf.exports=nf;var ix=tf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox=N,dt=ix;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rf=new Set,Xi={};function rr(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(Xi[e]=t,e=0;e<t.length;e++)rf.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=Object.prototype.hasOwnProperty,ax=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N2={},E2={};function lx(e){return yc.call(E2,e)?!0:yc.call(N2,e)?!1:ax.test(e)?E2[e]=!0:(N2[e]=!0,!1)}function sx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cx(e,t,n,r){if(t===null||typeof t>"u"||sx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function rd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nd,rd);Fe[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nd,rd);Fe[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nd,rd);Fe[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function id(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cx(t,n,i,r)&&(n=null),r||i===null?lx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tn=ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),bc=Symbol.for("react.profiler"),of=Symbol.for("react.provider"),af=Symbol.for("react.context"),ad=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),Cc=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),lf=Symbol.for("react.offscreen"),P2=Symbol.iterator;function hi(e){return e===null||typeof e!="object"?null:(e=P2&&e[P2]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Object.assign,ss;function Ni(e){if(ss===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ss=t&&t[1]||""}return`
`+ss+e}var cs=!1;function ds(e,t){if(!e||cs)return"";cs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,s=a.length-1;1<=l&&0<=s&&i[l]!==a[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==a[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==a[s]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{cs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ni(e):""}function dx(e){switch(e.tag){case 5:return Ni(e.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return e=ds(e.type,!1),e;case 11:return e=ds(e.type.render,!1),e;case 1:return e=ds(e.type,!0),e;default:return""}}function kc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case mr:return"Portal";case bc:return"Profiler";case od:return"StrictMode";case wc:return"Suspense";case Cc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case af:return(e.displayName||"Context")+".Consumer";case of:return(e._context.displayName||"Context")+".Provider";case ad:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ld:return t=e.displayName||null,t!==null?t:kc(e.type)||"Memo";case sn:t=e._payload,e=e._init;try{return kc(e(t))}catch{}}return null}function ux(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(t);case 8:return t===od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function px(e){var t=sf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bo(e){e._valueTracker||(e._valueTracker=px(e))}function cf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jc(e,t){var n=t.checked;return Ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function L2(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function df(e,t){t=t.checked,t!=null&&id(e,"checked",t,!1)}function Ac(e,t){df(e,t);var n=Sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sc(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function O2(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sc(e,t,n){(t!=="number"||Na(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ei=Array.isArray;function Lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function T2(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Ei(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function uf(e,t){var n=Sn(t.value),r=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function I2(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ec(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Do,ff=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Do.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fx=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(e){fx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Di[t]=Di[e]})});function hf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Di.hasOwnProperty(e)&&Di[e]?(""+t).trim():t+"px"}function mf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var hx=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(e,t){if(t){if(hx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Lc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oc=null;function sd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tc=null,Or=null,Tr=null;function R2(e){if(e=So(e)){if(typeof Tc!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Sl(t),Tc(e.stateNode,e.type,t))}}function gf(e){Or?Tr?Tr.push(e):Tr=[e]:Or=e}function xf(){if(Or){var e=Or,t=Tr;if(Tr=Or=null,R2(e),t)for(e=0;e<t.length;e++)R2(t[e])}}function vf(e,t){return e(t)}function yf(){}var us=!1;function bf(e,t,n){if(us)return e(t,n);us=!0;try{return vf(e,t,n)}finally{us=!1,(Or!==null||Tr!==null)&&(yf(),xf())}}function Ji(e,t){var n=e.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Ic=!1;if(Jt)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{Ic=!1}function mx(e,t,n,r,i,a,l,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var Ui=!1,Ea=null,Pa=!1,Rc=null,gx={onError:function(e){Ui=!0,Ea=e}};function xx(e,t,n,r,i,a,l,s,c){Ui=!1,Ea=null,mx.apply(gx,arguments)}function vx(e,t,n,r,i,a,l,s,c){if(xx.apply(this,arguments),Ui){if(Ui){var d=Ea;Ui=!1,Ea=null}else throw Error(z(198));Pa||(Pa=!0,Rc=d)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M2(e){if(ir(e)!==e)throw Error(z(188))}function yx(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return M2(i),e;if(a===r)return M2(i),t;a=a.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Cf(e){return e=yx(e),e!==null?kf(e):null}function kf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kf(e);if(t!==null)return t;e=e.sibling}return null}var jf=dt.unstable_scheduleCallback,z2=dt.unstable_cancelCallback,bx=dt.unstable_shouldYield,wx=dt.unstable_requestPaint,Ee=dt.unstable_now,Cx=dt.unstable_getCurrentPriorityLevel,cd=dt.unstable_ImmediatePriority,Af=dt.unstable_UserBlockingPriority,La=dt.unstable_NormalPriority,kx=dt.unstable_LowPriority,Sf=dt.unstable_IdlePriority,Cl=null,$t=null;function jx(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Cl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Nx,Ax=Math.log,Sx=Math.LN2;function Nx(e){return e>>>=0,e===0?32:31-(Ax(e)/Sx|0)|0}var Uo=64,Fo=4194304;function Pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Pi(s):(a&=l,a!==0&&(r=Pi(a)))}else l=n&~i,l!==0?r=Pi(l):a!==0&&(r=Pi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function Ex(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Px(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Ot(a),s=1<<l,c=i[l];c===-1?(!(s&n)||s&r)&&(i[l]=Ex(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Mc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nf(){var e=Uo;return Uo<<=1,!(Uo&4194240)&&(Uo=64),e}function ps(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function Lx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function dd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function Ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pf,ud,Lf,Of,Tf,zc=!1,Ho=[],gn=null,xn=null,vn=null,qi=new Map,Ki=new Map,un=[],Ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function B2(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ki.delete(t.pointerId)}}function gi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=So(t),t!==null&&ud(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tx(e,t,n,r,i){switch(t){case"focusin":return gn=gi(gn,e,t,n,r,i),!0;case"dragenter":return xn=gi(xn,e,t,n,r,i),!0;case"mouseover":return vn=gi(vn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return qi.set(a,gi(qi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ki.set(a,gi(Ki.get(a)||null,e,t,n,r,i)),!0}return!1}function If(e){var t=Fn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=wf(n),t!==null){e.blockedOn=t,Tf(e.priority,function(){Lf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oc=r,n.target.dispatchEvent(r),Oc=null}else return t=So(n),t!==null&&ud(t),e.blockedOn=n,!1;t.shift()}return!0}function D2(e,t,n){sa(e)&&n.delete(t)}function Ix(){zc=!1,gn!==null&&sa(gn)&&(gn=null),xn!==null&&sa(xn)&&(xn=null),vn!==null&&sa(vn)&&(vn=null),qi.forEach(D2),Ki.forEach(D2)}function xi(e,t){e.blockedOn===t&&(e.blockedOn=null,zc||(zc=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,Ix)))}function eo(e){function t(i){return xi(i,e)}if(0<Ho.length){xi(Ho[0],e);for(var n=1;n<Ho.length;n++){var r=Ho[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&xi(gn,e),xn!==null&&xi(xn,e),vn!==null&&xi(vn,e),qi.forEach(t),Ki.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)If(n),n.blockedOn===null&&un.shift()}var Ir=tn.ReactCurrentBatchConfig,Ta=!0;function Rx(e,t,n,r){var i=pe,a=Ir.transition;Ir.transition=null;try{pe=1,pd(e,t,n,r)}finally{pe=i,Ir.transition=a}}function Mx(e,t,n,r){var i=pe,a=Ir.transition;Ir.transition=null;try{pe=4,pd(e,t,n,r)}finally{pe=i,Ir.transition=a}}function pd(e,t,n,r){if(Ta){var i=Bc(e,t,n,r);if(i===null)Cs(e,t,r,Ia,n),B2(e,r);else if(Tx(i,e,t,n,r))r.stopPropagation();else if(B2(e,r),t&4&&-1<Ox.indexOf(e)){for(;i!==null;){var a=So(i);if(a!==null&&Pf(a),a=Bc(e,t,n,r),a===null&&Cs(e,t,r,Ia,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cs(e,t,r,null,n)}}var Ia=null;function Bc(e,t,n,r){if(Ia=null,e=sd(r),e=Fn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ia=e,null}function Rf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cx()){case cd:return 1;case Af:return 4;case La:case kx:return 16;case Sf:return 536870912;default:return 16}default:return 16}}var fn=null,fd=null,ca=null;function Mf(){if(ca)return ca;var e,t=fd,n=t.length,r,i="value"in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return ca=i.slice(e,1<r?1-r:void 0)}function da(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function U2(){return!1}function pt(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?$o:U2,this.isPropagationStopped=U2,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),t}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=pt(ii),Ao=Ae({},ii,{view:0,detail:0}),zx=pt(Ao),fs,hs,vi,kl=Ae({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vi&&(vi&&e.type==="mousemove"?(fs=e.screenX-vi.screenX,hs=e.screenY-vi.screenY):hs=fs=0,vi=e),fs)},movementY:function(e){return"movementY"in e?e.movementY:hs}}),F2=pt(kl),Bx=Ae({},kl,{dataTransfer:0}),Dx=pt(Bx),Ux=Ae({},Ao,{relatedTarget:0}),ms=pt(Ux),Fx=Ae({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=pt(Fx),$x=Ae({},ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vx=pt($x),Wx=Ae({},ii,{data:0}),H2=pt(Wx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gx[e])?!!t[e]:!1}function md(){return Yx}var Xx=Ae({},Ao,{key:function(e){if(e.key){var t=Qx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=da(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_x[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(e){return e.type==="keypress"?da(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?da(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zx=pt(Xx),Jx=Ae({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$2=pt(Jx),qx=Ae({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),Kx=pt(qx),e3=Ae({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),t3=pt(e3),n3=Ae({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r3=pt(n3),i3=[9,13,27,32],gd=Jt&&"CompositionEvent"in window,Fi=null;Jt&&"documentMode"in document&&(Fi=document.documentMode);var o3=Jt&&"TextEvent"in window&&!Fi,zf=Jt&&(!gd||Fi&&8<Fi&&11>=Fi),V2=" ",W2=!1;function Bf(e,t){switch(e){case"keyup":return i3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function a3(e,t){switch(e){case"compositionend":return Df(t);case"keypress":return t.which!==32?null:(W2=!0,V2);case"textInput":return e=t.data,e===V2&&W2?null:e;default:return null}}function l3(e,t){if(xr)return e==="compositionend"||!gd&&Bf(e,t)?(e=Mf(),ca=fd=fn=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zf&&t.locale!=="ko"?null:t.data;default:return null}}var s3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q2(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!s3[e.type]:t==="textarea"}function Uf(e,t,n,r){gf(r),t=Ra(t,"onChange"),0<t.length&&(n=new hd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hi=null,to=null;function c3(e){Zf(e,0)}function jl(e){var t=br(e);if(cf(t))return e}function d3(e,t){if(e==="change")return t}var Ff=!1;if(Jt){var gs;if(Jt){var xs="oninput"in document;if(!xs){var _2=document.createElement("div");_2.setAttribute("oninput","return;"),xs=typeof _2.oninput=="function"}gs=xs}else gs=!1;Ff=gs&&(!document.documentMode||9<document.documentMode)}function G2(){Hi&&(Hi.detachEvent("onpropertychange",Hf),to=Hi=null)}function Hf(e){if(e.propertyName==="value"&&jl(to)){var t=[];Uf(t,to,e,sd(e)),bf(c3,t)}}function u3(e,t,n){e==="focusin"?(G2(),Hi=t,to=n,Hi.attachEvent("onpropertychange",Hf)):e==="focusout"&&G2()}function p3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(to)}function f3(e,t){if(e==="click")return jl(t)}function h3(e,t){if(e==="input"||e==="change")return jl(t)}function m3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:m3;function no(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yc.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function Y2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function X2(e,t){var n=Y2(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Y2(n)}}function $f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vf(){for(var e=window,t=Na();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Na(e.document)}return t}function xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function g3(e){var t=Vf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$f(n.ownerDocument.documentElement,n)){if(r!==null&&xd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=X2(n,a);var l=X2(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var x3=Jt&&"documentMode"in document&&11>=document.documentMode,vr=null,Dc=null,$i=null,Uc=!1;function Z2(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uc||vr==null||vr!==Na(r)||(r=vr,"selectionStart"in r&&xd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$i&&no($i,r)||($i=r,r=Ra(Dc,"onSelect"),0<r.length&&(t=new hd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vr)))}function Vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},vs={},Wf={};Jt&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Al(e){if(vs[e])return vs[e];if(!yr[e])return e;var t=yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wf)return vs[e]=t[n];return e}var Qf=Al("animationend"),_f=Al("animationiteration"),Gf=Al("animationstart"),Yf=Al("transitionend"),Xf=new Map,J2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){Xf.set(e,t),rr(t,[e])}for(var ys=0;ys<J2.length;ys++){var bs=J2[ys],v3=bs.toLowerCase(),y3=bs[0].toUpperCase()+bs.slice(1);Pn(v3,"on"+y3)}Pn(Qf,"onAnimationEnd");Pn(_f,"onAnimationIteration");Pn(Gf,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Yf,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function q2(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vx(r,t,void 0,e),e.currentTarget=null}function Zf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break e;q2(i,s,d),a=c}else for(l=0;l<r.length;l++){if(s=r[l],c=s.instance,d=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break e;q2(i,s,d),a=c}}}if(Pa)throw e=Rc,Pa=!1,Rc=null,e}function xe(e,t){var n=t[Wc];n===void 0&&(n=t[Wc]=new Set);var r=e+"__bubble";n.has(r)||(Jf(t,e,2,!1),n.add(r))}function ws(e,t,n){var r=0;t&&(r|=4),Jf(n,e,r,t)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function ro(e){if(!e[Wo]){e[Wo]=!0,rf.forEach(function(n){n!=="selectionchange"&&(b3.has(n)||ws(n,!1,e),ws(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wo]||(t[Wo]=!0,ws("selectionchange",!1,t))}}function Jf(e,t,n,r){switch(Rf(t)){case 1:var i=Rx;break;case 4:i=Mx;break;default:i=pd}n=i.bind(null,t,n,e),i=void 0,!Ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cs(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Fn(s),l===null)return;if(c=l.tag,c===5||c===6){r=a=l;continue e}s=s.parentNode}}r=r.return}bf(function(){var d=a,u=sd(n),p=[];e:{var g=Xf.get(e);if(g!==void 0){var v=hd,y=e;switch(e){case"keypress":if(da(n)===0)break e;case"keydown":case"keyup":v=Zx;break;case"focusin":y="focus",v=ms;break;case"focusout":y="blur",v=ms;break;case"beforeblur":case"afterblur":v=ms;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=F2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Kx;break;case Qf:case _f:case Gf:v=Hx;break;case Yf:v=t3;break;case"scroll":v=zx;break;case"wheel":v=r3;break;case"copy":case"cut":case"paste":v=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=$2}var b=(t&4)!==0,C=!b&&e==="scroll",m=b?g!==null?g+"Capture":null:g;b=[];for(var h=d,f;h!==null;){f=h;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,m!==null&&(x=Ji(h,m),x!=null&&b.push(io(h,x,f)))),C)break;h=h.return}0<b.length&&(g=new v(g,y,null,n,u),p.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Oc&&(y=n.relatedTarget||n.fromElement)&&(Fn(y)||y[qt]))break e;if((v||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=d,y=y?Fn(y):null,y!==null&&(C=ir(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=d),v!==y)){if(b=F2,x="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(b=$2,x="onPointerLeave",m="onPointerEnter",h="pointer"),C=v==null?g:br(v),f=y==null?g:br(y),g=new b(x,h+"leave",v,n,u),g.target=C,g.relatedTarget=f,x=null,Fn(u)===d&&(b=new b(m,h+"enter",y,n,u),b.target=f,b.relatedTarget=C,x=b),C=x,v&&y)t:{for(b=v,m=y,h=0,f=b;f;f=sr(f))h++;for(f=0,x=m;x;x=sr(x))f++;for(;0<h-f;)b=sr(b),h--;for(;0<f-h;)m=sr(m),f--;for(;h--;){if(b===m||m!==null&&b===m.alternate)break t;b=sr(b),m=sr(m)}b=null}else b=null;v!==null&&K2(p,g,v,b,!1),y!==null&&C!==null&&K2(p,C,y,b,!0)}}e:{if(g=d?br(d):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var j=d3;else if(Q2(g))if(Ff)j=h3;else{j=p3;var S=u3}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=f3);if(j&&(j=j(e,d))){Uf(p,j,n,u);break e}S&&S(e,g,d),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&Sc(g,"number",g.value)}switch(S=d?br(d):window,e){case"focusin":(Q2(S)||S.contentEditable==="true")&&(vr=S,Dc=d,$i=null);break;case"focusout":$i=Dc=vr=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,Z2(p,n,u);break;case"selectionchange":if(x3)break;case"keydown":case"keyup":Z2(p,n,u)}var k;if(gd)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else xr?Bf(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(zf&&n.locale!=="ko"&&(xr||w!=="onCompositionStart"?w==="onCompositionEnd"&&xr&&(k=Mf()):(fn=u,fd="value"in fn?fn.value:fn.textContent,xr=!0)),S=Ra(d,w),0<S.length&&(w=new H2(w,e,null,n,u),p.push({event:w,listeners:S}),k?w.data=k:(k=Df(n),k!==null&&(w.data=k)))),(k=o3?a3(e,n):l3(e,n))&&(d=Ra(d,"onBeforeInput"),0<d.length&&(u=new H2("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=k))}Zf(p,t)})}function io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ra(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ji(e,n),a!=null&&r.unshift(io(e,a,i)),a=Ji(e,t),a!=null&&r.push(io(e,a,i))),e=e.return}return r}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function K2(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&d!==null&&(s=d,i?(c=Ji(n,a),c!=null&&l.unshift(io(n,c,s))):i||(c=Ji(n,a),c!=null&&l.push(io(n,c,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var w3=/\r\n?/g,C3=/\u0000|\uFFFD/g;function eu(e){return(typeof e=="string"?e:""+e).replace(w3,`
`).replace(C3,"")}function Qo(e,t,n){if(t=eu(t),eu(e)!==t&&n)throw Error(z(425))}function Ma(){}var Fc=null,Hc=null;function $c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,k3=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,j3=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(e){return tu.resolve(null).then(e).catch(A3)}:Vc;function A3(e){setTimeout(function(){throw e})}function ks(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),eo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);eo(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var oi=Math.random().toString(36).slice(2),Ft="__reactFiber$"+oi,oo="__reactProps$"+oi,qt="__reactContainer$"+oi,Wc="__reactEvents$"+oi,S3="__reactListeners$"+oi,N3="__reactHandles$"+oi;function Fn(e){var t=e[Ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nu(e);e!==null;){if(n=e[Ft])return n;e=nu(e)}return t}e=n,n=e.parentNode}return null}function So(e){return e=e[Ft]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Sl(e){return e[oo]||null}var Qc=[],wr=-1;function Ln(e){return{current:e}}function ye(e){0>wr||(e.current=Qc[wr],Qc[wr]=null,wr--)}function ge(e,t){wr++,Qc[wr]=e.current,e.current=t}var Nn={},Qe=Ln(Nn),rt=Ln(!1),Xn=Nn;function Hr(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function za(){ye(rt),ye(Qe)}function ru(e,t,n){if(Qe.current!==Nn)throw Error(z(168));ge(Qe,t),ge(rt,n)}function qf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,ux(e)||"Unknown",i));return Ae({},n,r)}function Ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Xn=Qe.current,ge(Qe,e),ge(rt,rt.current),!0}function iu(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=qf(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,ye(rt),ye(Qe),ge(Qe,e)):ye(rt),ge(rt,n)}var Gt=null,Nl=!1,js=!1;function Kf(e){Gt===null?Gt=[e]:Gt.push(e)}function E3(e){Nl=!0,Kf(e)}function On(){if(!js&&Gt!==null){js=!0;var e=0,t=pe;try{var n=Gt;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Gt=null,Nl=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(e+1)),jf(cd,On),i}finally{pe=t,js=!1}}return null}var Cr=[],kr=0,Da=null,Ua=0,xt=[],vt=0,Zn=null,Yt=1,Xt="";function Bn(e,t){Cr[kr++]=Ua,Cr[kr++]=Da,Da=e,Ua=t}function eh(e,t,n){xt[vt++]=Yt,xt[vt++]=Xt,xt[vt++]=Zn,Zn=e;var r=Yt;e=Xt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var a=32-Ot(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Yt=1<<32-Ot(t)+i|n<<i|r,Xt=a+e}else Yt=1<<a|n<<i|r,Xt=e}function vd(e){e.return!==null&&(Bn(e,1),eh(e,1,0))}function yd(e){for(;e===Da;)Da=Cr[--kr],Cr[kr]=null,Ua=Cr[--kr],Cr[kr]=null;for(;e===Zn;)Zn=xt[--vt],xt[vt]=null,Xt=xt[--vt],xt[vt]=null,Yt=xt[--vt],xt[vt]=null}var ct=null,st=null,we=!1,Pt=null;function th(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,st=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:Yt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,st=null,!0):!1;default:return!1}}function _c(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gc(e){if(we){var t=st;if(t){var n=t;if(!ou(e,t)){if(_c(e))throw Error(z(418));t=yn(n.nextSibling);var r=ct;t&&ou(e,t)?th(r,n):(e.flags=e.flags&-4097|2,we=!1,ct=e)}}else{if(_c(e))throw Error(z(418));e.flags=e.flags&-4097|2,we=!1,ct=e}}}function au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function _o(e){if(e!==ct)return!1;if(!we)return au(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$c(e.type,e.memoizedProps)),t&&(t=st)){if(_c(e))throw nh(),Error(z(418));for(;t;)th(e,t),t=yn(t.nextSibling)}if(au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=ct?yn(e.stateNode.nextSibling):null;return!0}function nh(){for(var e=st;e;)e=yn(e.nextSibling)}function $r(){st=ct=null,we=!1}function bd(e){Pt===null?Pt=[e]:Pt.push(e)}var P3=tn.ReactCurrentBatchConfig;function yi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var s=i.refs;l===null?delete s[a]:s[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Go(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lu(e){var t=e._init;return t(e._payload)}function rh(e){function t(m,h){if(e){var f=m.deletions;f===null?(m.deletions=[h],m.flags|=16):f.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=kn(m,h),m.index=0,m.sibling=null,m}function a(m,h,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<h?(m.flags|=2,h):f):(m.flags|=2,h)):(m.flags|=1048576,h)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,h,f,x){return h===null||h.tag!==6?(h=Os(f,m.mode,x),h.return=m,h):(h=i(h,f),h.return=m,h)}function c(m,h,f,x){var j=f.type;return j===gr?u(m,h,f.props.children,x,f.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===sn&&lu(j)===h.type)?(x=i(h,f.props),x.ref=yi(m,h,f),x.return=m,x):(x=xa(f.type,f.key,f.props,null,m.mode,x),x.ref=yi(m,h,f),x.return=m,x)}function d(m,h,f,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==f.containerInfo||h.stateNode.implementation!==f.implementation?(h=Ts(f,m.mode,x),h.return=m,h):(h=i(h,f.children||[]),h.return=m,h)}function u(m,h,f,x,j){return h===null||h.tag!==7?(h=_n(f,m.mode,x,j),h.return=m,h):(h=i(h,f),h.return=m,h)}function p(m,h,f){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Os(""+h,m.mode,f),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case zo:return f=xa(h.type,h.key,h.props,null,m.mode,f),f.ref=yi(m,null,h),f.return=m,f;case mr:return h=Ts(h,m.mode,f),h.return=m,h;case sn:var x=h._init;return p(m,x(h._payload),f)}if(Ei(h)||hi(h))return h=_n(h,m.mode,f,null),h.return=m,h;Go(m,h)}return null}function g(m,h,f,x){var j=h!==null?h.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return j!==null?null:s(m,h,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zo:return f.key===j?c(m,h,f,x):null;case mr:return f.key===j?d(m,h,f,x):null;case sn:return j=f._init,g(m,h,j(f._payload),x)}if(Ei(f)||hi(f))return j!==null?null:u(m,h,f,x,null);Go(m,f)}return null}function v(m,h,f,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(f)||null,s(h,m,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case zo:return m=m.get(x.key===null?f:x.key)||null,c(h,m,x,j);case mr:return m=m.get(x.key===null?f:x.key)||null,d(h,m,x,j);case sn:var S=x._init;return v(m,h,f,S(x._payload),j)}if(Ei(x)||hi(x))return m=m.get(f)||null,u(h,m,x,j,null);Go(h,x)}return null}function y(m,h,f,x){for(var j=null,S=null,k=h,w=h=0,A=null;k!==null&&w<f.length;w++){k.index>w?(A=k,k=null):A=k.sibling;var P=g(m,k,f[w],x);if(P===null){k===null&&(k=A);break}e&&k&&P.alternate===null&&t(m,k),h=a(P,h,w),S===null?j=P:S.sibling=P,S=P,k=A}if(w===f.length)return n(m,k),we&&Bn(m,w),j;if(k===null){for(;w<f.length;w++)k=p(m,f[w],x),k!==null&&(h=a(k,h,w),S===null?j=k:S.sibling=k,S=k);return we&&Bn(m,w),j}for(k=r(m,k);w<f.length;w++)A=v(k,m,w,f[w],x),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?w:A.key),h=a(A,h,w),S===null?j=A:S.sibling=A,S=A);return e&&k.forEach(function(R){return t(m,R)}),we&&Bn(m,w),j}function b(m,h,f,x){var j=hi(f);if(typeof j!="function")throw Error(z(150));if(f=j.call(f),f==null)throw Error(z(151));for(var S=j=null,k=h,w=h=0,A=null,P=f.next();k!==null&&!P.done;w++,P=f.next()){k.index>w?(A=k,k=null):A=k.sibling;var R=g(m,k,P.value,x);if(R===null){k===null&&(k=A);break}e&&k&&R.alternate===null&&t(m,k),h=a(R,h,w),S===null?j=R:S.sibling=R,S=R,k=A}if(P.done)return n(m,k),we&&Bn(m,w),j;if(k===null){for(;!P.done;w++,P=f.next())P=p(m,P.value,x),P!==null&&(h=a(P,h,w),S===null?j=P:S.sibling=P,S=P);return we&&Bn(m,w),j}for(k=r(m,k);!P.done;w++,P=f.next())P=v(k,m,w,P.value,x),P!==null&&(e&&P.alternate!==null&&k.delete(P.key===null?w:P.key),h=a(P,h,w),S===null?j=P:S.sibling=P,S=P);return e&&k.forEach(function(M){return t(m,M)}),we&&Bn(m,w),j}function C(m,h,f,x){if(typeof f=="object"&&f!==null&&f.type===gr&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case zo:e:{for(var j=f.key,S=h;S!==null;){if(S.key===j){if(j=f.type,j===gr){if(S.tag===7){n(m,S.sibling),h=i(S,f.props.children),h.return=m,m=h;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===sn&&lu(j)===S.type){n(m,S.sibling),h=i(S,f.props),h.ref=yi(m,S,f),h.return=m,m=h;break e}n(m,S);break}else t(m,S);S=S.sibling}f.type===gr?(h=_n(f.props.children,m.mode,x,f.key),h.return=m,m=h):(x=xa(f.type,f.key,f.props,null,m.mode,x),x.ref=yi(m,h,f),x.return=m,m=x)}return l(m);case mr:e:{for(S=f.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===f.containerInfo&&h.stateNode.implementation===f.implementation){n(m,h.sibling),h=i(h,f.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=Ts(f,m.mode,x),h.return=m,m=h}return l(m);case sn:return S=f._init,C(m,h,S(f._payload),x)}if(Ei(f))return y(m,h,f,x);if(hi(f))return b(m,h,f,x);Go(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,f),h.return=m,m=h):(n(m,h),h=Os(f,m.mode,x),h.return=m,m=h),l(m)):n(m,h)}return C}var Vr=rh(!0),ih=rh(!1),Fa=Ln(null),Ha=null,jr=null,wd=null;function Cd(){wd=jr=Ha=null}function kd(e){var t=Fa.current;ye(Fa),e._currentValue=t}function Yc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){Ha=e,wd=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(wd!==e)if(e={context:e,memoizedValue:t,next:null},jr===null){if(Ha===null)throw Error(z(308));jr=e,Ha.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return t}var Hn=null;function jd(e){Hn===null?Hn=[e]:Hn.push(e)}function oh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,jd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Ad(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ah(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kt(e,n)}return i=r.interleaved,i===null?(t.next=t,jd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kt(e,n)}function ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dd(e,n)}}function su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $a(e,t,n,r){var i=e.updateQueue;cn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,d=c.next;c.next=null,l===null?a=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==l&&(s===null?u.firstBaseUpdate=d:s.next=d,u.lastBaseUpdate=c))}if(a!==null){var p=i.baseState;l=0,u=d=c=null,s=a;do{var g=s.lane,v=s.eventTime;if((r&g)===g){u!==null&&(u=u.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,b=s;switch(g=t,v=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){p=y.call(v,p,g);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,g=typeof y=="function"?y.call(v,p,g):y,g==null)break e;p=Ae({},p,g);break e;case 2:cn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(d=u=v,c=p):u=u.next=v,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(u===null&&(c=p),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);qn|=l,e.lanes=l,e.memoizedState=p}}function cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var No={},Vt=Ln(No),ao=Ln(No),lo=Ln(No);function $n(e){if(e===No)throw Error(z(174));return e}function Sd(e,t){switch(ge(lo,t),ge(ao,e),ge(Vt,No),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ec(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ec(t,e)}ye(Vt),ge(Vt,t)}function Wr(){ye(Vt),ye(ao),ye(lo)}function lh(e){$n(lo.current);var t=$n(Vt.current),n=Ec(t,e.type);t!==n&&(ge(ao,e),ge(Vt,n))}function Nd(e){ao.current===e&&(ye(Vt),ye(ao))}var ke=Ln(0);function Va(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var As=[];function Ed(){for(var e=0;e<As.length;e++)As[e]._workInProgressVersionPrimary=null;As.length=0}var pa=tn.ReactCurrentDispatcher,Ss=tn.ReactCurrentBatchConfig,Jn=0,je=null,Oe=null,Re=null,Wa=!1,Vi=!1,so=0,L3=0;function He(){throw Error(z(321))}function Pd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function Ld(e,t,n,r,i,a){if(Jn=a,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,pa.current=e===null||e.memoizedState===null?R3:M3,e=n(r,i),Vi){a=0;do{if(Vi=!1,so=0,25<=a)throw Error(z(301));a+=1,Re=Oe=null,t.updateQueue=null,pa.current=z3,e=n(r,i)}while(Vi)}if(pa.current=Qa,t=Oe!==null&&Oe.next!==null,Jn=0,Re=Oe=je=null,Wa=!1,t)throw Error(z(300));return e}function Od(){var e=so!==0;return so=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?je.memoizedState=Re=e:Re=Re.next=e,Re}function Ct(){if(Oe===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Re===null?je.memoizedState:Re.next;if(t!==null)Re=t,Oe=e;else{if(e===null)throw Error(z(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Re===null?je.memoizedState=Re=e:Re=Re.next=e}return Re}function co(e,t){return typeof t=="function"?t(e):t}function Ns(e){var t=Ct(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=Oe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=l=null,c=null,d=a;do{var u=d.lane;if((Jn&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=p,l=r):c=c.next=p,je.lanes|=u,qn|=u}d=d.next}while(d!==null&&d!==a);c===null?l=r:c.next=s,Rt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,je.lanes|=a,qn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Es(e){var t=Ct(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);Rt(a,t.memoizedState)||(nt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function sh(){}function ch(e,t){var n=je,r=Ct(),i=t(),a=!Rt(r.memoizedState,i);if(a&&(r.memoizedState=i,nt=!0),r=r.queue,Td(ph.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,uo(9,uh.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(z(349));Jn&30||dh(n,t,i)}return i}function dh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uh(e,t,n,r){t.value=n,t.getSnapshot=r,fh(t)&&hh(e)}function ph(e,t,n){return n(function(){fh(t)&&hh(e)})}function fh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function hh(e){var t=Kt(e,1);t!==null&&Tt(t,e,1,-1)}function du(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:e},t.queue=e,e=e.dispatch=I3.bind(null,je,e),[t.memoizedState,e]}function uo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mh(){return Ct().memoizedState}function fa(e,t,n,r){var i=Dt();je.flags|=e,i.memoizedState=uo(1|t,n,void 0,r===void 0?null:r)}function El(e,t,n,r){var i=Ct();r=r===void 0?null:r;var a=void 0;if(Oe!==null){var l=Oe.memoizedState;if(a=l.destroy,r!==null&&Pd(r,l.deps)){i.memoizedState=uo(t,n,a,r);return}}je.flags|=e,i.memoizedState=uo(1|t,n,a,r)}function uu(e,t){return fa(8390656,8,e,t)}function Td(e,t){return El(2048,8,e,t)}function gh(e,t){return El(4,2,e,t)}function xh(e,t){return El(4,4,e,t)}function vh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yh(e,t,n){return n=n!=null?n.concat([e]):null,El(4,4,vh.bind(null,t,e),n)}function Id(){}function bh(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wh(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ch(e,t,n){return Jn&21?(Rt(n,t)||(n=Nf(),je.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function O3(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Ss.transition;Ss.transition={};try{e(!1),t()}finally{pe=n,Ss.transition=r}}function kh(){return Ct().memoizedState}function T3(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jh(e))Ah(t,n);else if(n=oh(e,t,n,r),n!==null){var i=Ye();Tt(n,e,r,i),Sh(n,t,r)}}function I3(e,t,n){var r=Cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jh(e))Ah(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,s=a(l,n);if(i.hasEagerState=!0,i.eagerState=s,Rt(s,l)){var c=t.interleaved;c===null?(i.next=i,jd(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=oh(e,t,i,r),n!==null&&(i=Ye(),Tt(n,e,r,i),Sh(n,t,r))}}function jh(e){var t=e.alternate;return e===je||t!==null&&t===je}function Ah(e,t){Vi=Wa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dd(e,n)}}var Qa={readContext:wt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},R3={readContext:wt,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fa(4194308,4,vh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fa(4194308,4,e,t)},useInsertionEffect:function(e,t){return fa(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=T3.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:du,useDebugValue:Id,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=du(!1),t=e[0];return e=O3.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,i=Dt();if(we){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Be===null)throw Error(z(349));Jn&30||dh(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,uu(ph.bind(null,r,a,e),[e]),r.flags|=2048,uo(9,uh.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Dt(),t=Be.identifierPrefix;if(we){var n=Xt,r=Yt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=so++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=L3++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},M3={readContext:wt,useCallback:bh,useContext:wt,useEffect:Td,useImperativeHandle:yh,useInsertionEffect:gh,useLayoutEffect:xh,useMemo:wh,useReducer:Ns,useRef:mh,useState:function(){return Ns(co)},useDebugValue:Id,useDeferredValue:function(e){var t=Ct();return Ch(t,Oe.memoizedState,e)},useTransition:function(){var e=Ns(co)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:sh,useSyncExternalStore:ch,useId:kh,unstable_isNewReconciler:!1},z3={readContext:wt,useCallback:bh,useContext:wt,useEffect:Td,useImperativeHandle:yh,useInsertionEffect:gh,useLayoutEffect:xh,useMemo:wh,useReducer:Es,useRef:mh,useState:function(){return Es(co)},useDebugValue:Id,useDeferredValue:function(e){var t=Ct();return Oe===null?t.memoizedState=e:Ch(t,Oe.memoizedState,e)},useTransition:function(){var e=Es(co)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:sh,useSyncExternalStore:ch,useId:kh,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=Ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pl={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=Cn(e),a=Zt(r,i);a.payload=t,n!=null&&(a.callback=n),t=bn(e,a,i),t!==null&&(Tt(t,e,i,r),ua(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=Cn(e),a=Zt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=bn(e,a,i),t!==null&&(Tt(t,e,i,r),ua(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),r=Cn(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=bn(e,i,r),t!==null&&(Tt(t,e,r,n),ua(t,e,r))}};function pu(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!no(n,r)||!no(i,a):!0}function Nh(e,t,n){var r=!1,i=Nn,a=t.contextType;return typeof a=="object"&&a!==null?a=wt(a):(i=it(t)?Xn:Qe.current,r=t.contextTypes,a=(r=r!=null)?Hr(e,i):Nn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pl.enqueueReplaceState(t,t.state,null)}function Zc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ad(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=wt(a):(a=it(t)?Xn:Qe.current,i.context=Hr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Xc(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Pl.enqueueReplaceState(i,i.state,null),$a(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t){try{var n="",r=t;do n+=dx(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ps(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var B3=typeof WeakMap=="function"?WeakMap:Map;function Eh(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ga||(Ga=!0,l0=r),Jc(e,t)},n}function Ph(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Jc(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new B3;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=J3.bind(null,e,t,n),t.then(e,e))}function mu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,bn(n,t,1))),n.lanes|=1),e)}var D3=tn.ReactCurrentOwner,nt=!1;function Ge(e,t,n,r){t.child=e===null?ih(t,null,n,r):Vr(t,e.child,n,r)}function xu(e,t,n,r,i){n=n.render;var a=t.ref;return Rr(t,i),r=Ld(e,t,n,r,a,i),n=Od(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(we&&n&&vd(t),t.flags|=1,Ge(e,t,r,i),t.child)}function vu(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Hd(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Lh(e,t,a,r,i)):(e=xa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(l,r)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=kn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lh(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(no(a,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,en(e,t,i)}return qc(e,t,n,r,i)}function Oh(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Sr,lt),lt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Sr,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ge(Sr,lt),lt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ge(Sr,lt),lt|=r;return Ge(e,t,i,n),t.child}function Th(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qc(e,t,n,r,i){var a=it(n)?Xn:Qe.current;return a=Hr(t,a),Rr(t,i),n=Ld(e,t,n,r,a,i),r=Od(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(we&&r&&vd(t),t.flags|=1,Ge(e,t,n,i),t.child)}function yu(e,t,n,r,i){if(it(n)){var a=!0;Ba(t)}else a=!1;if(Rr(t,i),t.stateNode===null)ha(e,t),Nh(t,n,r),Zc(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=wt(d):(d=it(n)?Xn:Qe.current,d=Hr(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||c!==d)&&fu(t,l,r,d),cn=!1;var g=t.memoizedState;l.state=g,$a(t,r,l,i),c=t.memoizedState,s!==r||g!==c||rt.current||cn?(typeof u=="function"&&(Xc(t,n,u,r),c=t.memoizedState),(s=cn||pu(t,n,s,r,g,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ah(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Nt(t.type,s),l.props=d,p=t.pendingProps,g=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=wt(c):(c=it(n)?Xn:Qe.current,c=Hr(t,c));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||g!==c)&&fu(t,l,r,c),cn=!1,g=t.memoizedState,l.state=g,$a(t,r,l,i);var y=t.memoizedState;s!==p||g!==y||rt.current||cn?(typeof v=="function"&&(Xc(t,n,v,r),y=t.memoizedState),(d=cn||pu(t,n,d,r,g,y,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Kc(e,t,n,r,a,i)}function Kc(e,t,n,r,i,a){Th(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&iu(t,n,!1),en(e,t,a);r=t.stateNode,D3.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Vr(t,e.child,null,a),t.child=Vr(t,null,s,a)):Ge(e,t,s,a),t.memoizedState=r.state,i&&iu(t,n,!0),t.child}function Ih(e){var t=e.stateNode;t.pendingContext?ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ru(e,t.context,!1),Sd(e,t.containerInfo)}function bu(e,t,n,r,i){return $r(),bd(i),t.flags|=256,Ge(e,t,n,r),t.child}var e0={dehydrated:null,treeContext:null,retryLane:0};function t0(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rh(e,t,n){var r=t.pendingProps,i=ke.current,a=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(ke,i&1),e===null)return Gc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Tl(l,r,0,null),e=_n(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=t0(n),t.memoizedState=e0,e):Rd(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return U3(e,t,l,r,s,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=kn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=kn(s,a):(a=_n(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?t0(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=e0,r}return a=e.child,e=a.sibling,r=kn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rd(e,t){return t=Tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yo(e,t,n,r){return r!==null&&bd(r),Vr(t,e.child,null,n),e=Rd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function U3(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=Ps(Error(z(422))),Yo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Tl({mode:"visible",children:r.children},i,0,null),a=_n(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Vr(t,e.child,null,l),t.child.memoizedState=t0(l),t.memoizedState=e0,a);if(!(t.mode&1))return Yo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(z(419)),r=Ps(a,r,void 0),Yo(e,t,l,r)}if(s=(l&e.childLanes)!==0,nt||s){if(r=Be,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Kt(e,i),Tt(r,e,i,-1))}return Fd(),r=Ps(Error(z(421))),Yo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=q3.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,st=yn(i.nextSibling),ct=t,we=!0,Pt=null,e!==null&&(xt[vt++]=Yt,xt[vt++]=Xt,xt[vt++]=Zn,Yt=e.id,Xt=e.overflow,Zn=t),t=Rd(t,r.children),t.flags|=4096,t)}function wu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yc(e.return,t,n)}function Ls(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Mh(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ge(e,t,r.children,n),r=ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wu(e,n,t);else if(e.tag===19)wu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(ke,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Va(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ls(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Va(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ls(t,!0,n,null,a);break;case"together":Ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ha(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function F3(e,t,n){switch(t.tag){case 3:Ih(t),$r();break;case 5:lh(t);break;case 1:it(t.type)&&Ba(t);break;case 4:Sd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(Fa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(ke,ke.current&1),t.flags|=128,null):n&t.child.childLanes?Rh(e,t,n):(ge(ke,ke.current&1),e=en(e,t,n),e!==null?e.sibling:null);ge(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,Oh(e,t,n)}return en(e,t,n)}var zh,n0,Bh,Dh;zh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};n0=function(){};Bh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(Vt.current);var a=null;switch(n){case"input":i=jc(e,i),r=jc(e,r),a=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),a=[];break;case"textarea":i=Nc(e,i),r=Nc(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ma)}Pc(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Xi.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Xi.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&xe("scroll",e),a||s===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Dh=function(e,t,n,r){n!==r&&(t.flags|=4)};function bi(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function H3(e,t,n){var r=t.pendingProps;switch(yd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return it(t.type)&&za(),$e(t),null;case 3:return r=t.stateNode,Wr(),ye(rt),ye(Qe),Ed(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(d0(Pt),Pt=null))),n0(e,t),$e(t),null;case 5:Nd(t);var i=$n(lo.current);if(n=t.type,e!==null&&t.stateNode!=null)Bh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return $e(t),null}if(e=$n(Vt.current),_o(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ft]=t,r[oo]=a,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Li.length;i++)xe(Li[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":L2(r,a),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},xe("invalid",r);break;case"textarea":T2(r,a),xe("invalid",r)}Pc(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Qo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Qo(r.textContent,s,e),i=["children",""+s]):Xi.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&xe("scroll",r)}switch(n){case"input":Bo(r),O2(r,a,!0);break;case"textarea":Bo(r),I2(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ma)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ft]=t,e[oo]=r,zh(e,t,!1,!1),t.stateNode=e;e:{switch(l=Lc(n,r),n){case"dialog":xe("cancel",e),xe("close",e),i=r;break;case"iframe":case"object":case"embed":xe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Li.length;i++)xe(Li[i],e);i=r;break;case"source":xe("error",e),i=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=r;break;case"details":xe("toggle",e),i=r;break;case"input":L2(e,r),i=jc(e,r),xe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),xe("invalid",e);break;case"textarea":T2(e,r),i=Nc(e,r),xe("invalid",e);break;default:i=r}Pc(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="style"?mf(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ff(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Zi(e,c):typeof c=="number"&&Zi(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xi.hasOwnProperty(a)?c!=null&&a==="onScroll"&&xe("scroll",e):c!=null&&id(e,a,c,l))}switch(n){case"input":Bo(e),O2(e,r,!1);break;case"textarea":Bo(e),I2(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Lr(e,!!r.multiple,a,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ma)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)Dh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=$n(lo.current),$n(Vt.current),_o(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ft]=t,(a=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Qo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=t,t.stateNode=r}return $e(t),null;case 13:if(ye(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&st!==null&&t.mode&1&&!(t.flags&128))nh(),$r(),t.flags|=98560,a=!1;else if(a=_o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(z(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(z(317));a[Ft]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),a=!1}else Pt!==null&&(d0(Pt),Pt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?Te===0&&(Te=3):Fd())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return Wr(),n0(e,t),e===null&&ro(t.stateNode.containerInfo),$e(t),null;case 10:return kd(t.type._context),$e(t),null;case 17:return it(t.type)&&za(),$e(t),null;case 19:if(ye(ke),a=t.memoizedState,a===null)return $e(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)bi(a,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Va(e),l!==null){for(t.flags|=128,bi(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(ke,ke.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ee()>_r&&(t.flags|=128,r=!0,bi(a,!1),t.lanes=4194304)}else{if(!r)if(e=Va(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!we)return $e(t),null}else 2*Ee()-a.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,bi(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ee(),t.sibling=null,n=ke.current,ge(ke,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return Ud(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function $3(e,t){switch(yd(t),t.tag){case 1:return it(t.type)&&za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wr(),ye(rt),ye(Qe),Ed(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nd(t),null;case 13:if(ye(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(ke),null;case 4:return Wr(),null;case 10:return kd(t.type._context),null;case 22:case 23:return Ud(),null;case 24:return null;default:return null}}var Xo=!1,We=!1,V3=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function r0(e,t,n){try{n()}catch(r){Se(e,t,r)}}var Cu=!1;function W3(e,t){if(Fc=Ta,e=Vf(),xd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,s=-1,c=-1,d=0,u=0,p=e,g=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(s=l+i),p!==a||r!==0&&p.nodeType!==3||(c=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===e)break t;if(g===n&&++d===i&&(s=l),g===a&&++u===r&&(c=l),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hc={focusedElem:e,selectionRange:n},Ta=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,C=y.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:Nt(t.type,b),C);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(x){Se(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return y=Cu,Cu=!1,y}function Wi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&r0(t,n,a)}i=i.next}while(i!==r)}}function Ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function i0(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uh(e){var t=e.alternate;t!==null&&(e.alternate=null,Uh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[oo],delete t[Wc],delete t[S3],delete t[N3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fh(e){return e.tag===5||e.tag===3||e.tag===4}function ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function o0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ma));else if(r!==4&&(e=e.child,e!==null))for(o0(e,t,n),e=e.sibling;e!==null;)o0(e,t,n),e=e.sibling}function a0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(a0(e,t,n),e=e.sibling;e!==null;)a0(e,t,n),e=e.sibling}var De=null,Et=!1;function an(e,t,n){for(n=n.child;n!==null;)Hh(e,t,n),n=n.sibling}function Hh(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:We||Ar(n,t);case 6:var r=De,i=Et;De=null,an(e,t,n),De=r,Et=i,De!==null&&(Et?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Et?(e=De,n=n.stateNode,e.nodeType===8?ks(e.parentNode,n):e.nodeType===1&&ks(e,n),eo(e)):ks(De,n.stateNode));break;case 4:r=De,i=Et,De=n.stateNode.containerInfo,Et=!0,an(e,t,n),De=r,Et=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&r0(n,t,l),i=i.next}while(i!==r)}an(e,t,n);break;case 1:if(!We&&(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Se(n,t,s)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,an(e,t,n),We=r):an(e,t,n);break;default:an(e,t,n)}}function ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new V3),t.forEach(function(r){var i=K3.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:De=s.stateNode,Et=!1;break e;case 3:De=s.stateNode.containerInfo,Et=!0;break e;case 4:De=s.stateNode.containerInfo,Et=!0;break e}s=s.return}if(De===null)throw Error(z(160));Hh(a,l,i),De=null,Et=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Se(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$h(t,e),t=t.sibling}function $h(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Bt(e),r&4){try{Wi(3,e,e.return),Ll(3,e)}catch(b){Se(e,e.return,b)}try{Wi(5,e,e.return)}catch(b){Se(e,e.return,b)}}break;case 1:At(t,e),Bt(e),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(At(t,e),Bt(e),r&512&&n!==null&&Ar(n,n.return),e.flags&32){var i=e.stateNode;try{Zi(i,"")}catch(b){Se(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&df(i,a),Lc(s,l);var d=Lc(s,a);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?mf(i,p):u==="dangerouslySetInnerHTML"?ff(i,p):u==="children"?Zi(i,p):id(i,u,p,d)}switch(s){case"input":Ac(i,a);break;case"textarea":uf(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Lr(i,!!a.multiple,v,!1):g!==!!a.multiple&&(a.defaultValue!=null?Lr(i,!!a.multiple,a.defaultValue,!0):Lr(i,!!a.multiple,a.multiple?[]:"",!1))}i[oo]=a}catch(b){Se(e,e.return,b)}}break;case 6:if(At(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(b){Se(e,e.return,b)}}break;case 3:if(At(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(t.containerInfo)}catch(b){Se(e,e.return,b)}break;case 4:At(t,e),Bt(e);break;case 13:At(t,e),Bt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Bd=Ee())),r&4&&ju(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(We=(d=We)||u,At(t,e),We=d):At(t,e),Bt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(W=e,u=e.child;u!==null;){for(p=W=u;W!==null;){switch(g=W,v=g.child,g.tag){case 0:case 11:case 14:case 15:Wi(4,g,g.return);break;case 1:Ar(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){Se(r,n,b)}}break;case 5:Ar(g,g.return);break;case 22:if(g.memoizedState!==null){Su(p);continue}}v!==null?(v.return=g,W=v):Su(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{i=p.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=hf("display",l))}catch(b){Se(e,e.return,b)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(b){Se(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:At(t,e),Bt(e),r&4&&ju(e);break;case 21:break;default:At(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fh(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zi(i,""),r.flags&=-33);var a=ku(e);a0(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=ku(e);o0(e,s,l);break;default:throw Error(z(161))}}catch(c){Se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Q3(e,t,n){W=e,Vh(e)}function Vh(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Xo;if(!l){var s=i.alternate,c=s!==null&&s.memoizedState!==null||We;s=Xo;var d=We;if(Xo=l,(We=c)&&!d)for(W=i;W!==null;)l=W,c=l.child,l.tag===22&&l.memoizedState!==null?Nu(i):c!==null?(c.return=l,W=c):Nu(i);for(;a!==null;)W=a,Vh(a),a=a.sibling;W=i,Xo=s,We=d}Au(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,W=a):Au(e)}}function Au(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Ll(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&cu(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&eo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}We||t.flags&512&&i0(t)}catch(g){Se(t,t.return,g)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Su(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Nu(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ll(4,t)}catch(c){Se(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Se(t,i,c)}}var a=t.return;try{i0(t)}catch(c){Se(t,a,c)}break;case 5:var l=t.return;try{i0(t)}catch(c){Se(t,l,c)}}}catch(c){Se(t,t.return,c)}if(t===e){W=null;break}var s=t.sibling;if(s!==null){s.return=t.return,W=s;break}W=t.return}}var _3=Math.ceil,_a=tn.ReactCurrentDispatcher,Md=tn.ReactCurrentOwner,bt=tn.ReactCurrentBatchConfig,de=0,Be=null,Le=null,Ue=0,lt=0,Sr=Ln(0),Te=0,po=null,qn=0,Ol=0,zd=0,Qi=null,tt=null,Bd=0,_r=1/0,Qt=null,Ga=!1,l0=null,wn=null,Zo=!1,hn=null,Ya=0,_i=0,s0=null,ma=-1,ga=0;function Ye(){return de&6?Ee():ma!==-1?ma:ma=Ee()}function Cn(e){return e.mode&1?de&2&&Ue!==0?Ue&-Ue:P3.transition!==null?(ga===0&&(ga=Nf()),ga):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Rf(e.type)),e):1}function Tt(e,t,n,r){if(50<_i)throw _i=0,s0=null,Error(z(185));jo(e,n,r),(!(de&2)||e!==Be)&&(e===Be&&(!(de&2)&&(Ol|=n),Te===4&&pn(e,Ue)),ot(e,r),n===1&&de===0&&!(t.mode&1)&&(_r=Ee()+500,Nl&&On()))}function ot(e,t){var n=e.callbackNode;Px(e,t);var r=Oa(e,e===Be?Ue:0);if(r===0)n!==null&&z2(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&z2(n),t===1)e.tag===0?E3(Eu.bind(null,e)):Kf(Eu.bind(null,e)),j3(function(){!(de&6)&&On()}),n=null;else{switch(Ef(r)){case 1:n=cd;break;case 4:n=Af;break;case 16:n=La;break;case 536870912:n=Sf;break;default:n=La}n=Jh(n,Wh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wh(e,t){if(ma=-1,ga=0,de&6)throw Error(z(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=Oa(e,e===Be?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xa(e,r);else{t=r;var i=de;de|=2;var a=_h();(Be!==e||Ue!==t)&&(Qt=null,_r=Ee()+500,Qn(e,t));do try{X3();break}catch(s){Qh(e,s)}while(!0);Cd(),_a.current=a,de=i,Le!==null?t=0:(Be=null,Ue=0,t=Te)}if(t!==0){if(t===2&&(i=Mc(e),i!==0&&(r=i,t=c0(e,i))),t===1)throw n=po,Qn(e,0),pn(e,r),ot(e,Ee()),n;if(t===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!G3(i)&&(t=Xa(e,r),t===2&&(a=Mc(e),a!==0&&(r=a,t=c0(e,a))),t===1))throw n=po,Qn(e,0),pn(e,r),ot(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Dn(e,tt,Qt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=Bd+500-Ee(),10<t)){if(Oa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vc(Dn.bind(null,e,tt,Qt),t);break}Dn(e,tt,Qt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ot(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_3(r/1960))-r,10<r){e.timeoutHandle=Vc(Dn.bind(null,e,tt,Qt),r);break}Dn(e,tt,Qt);break;case 5:Dn(e,tt,Qt);break;default:throw Error(z(329))}}}return ot(e,Ee()),e.callbackNode===n?Wh.bind(null,e):null}function c0(e,t){var n=Qi;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=Xa(e,t),e!==2&&(t=tt,tt=n,t!==null&&d0(t)),e}function d0(e){tt===null?tt=e:tt.push.apply(tt,e)}function G3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Rt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~zd,t&=~Ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Eu(e){if(de&6)throw Error(z(327));Mr();var t=Oa(e,0);if(!(t&1))return ot(e,Ee()),null;var n=Xa(e,t);if(e.tag!==0&&n===2){var r=Mc(e);r!==0&&(t=r,n=c0(e,r))}if(n===1)throw n=po,Qn(e,0),pn(e,t),ot(e,Ee()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,tt,Qt),ot(e,Ee()),null}function Dd(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(_r=Ee()+500,Nl&&On())}}function Kn(e){hn!==null&&hn.tag===0&&!(de&6)&&Mr();var t=de;de|=1;var n=bt.transition,r=pe;try{if(bt.transition=null,pe=1,e)return e()}finally{pe=r,bt.transition=n,de=t,!(de&6)&&On()}}function Ud(){lt=Sr.current,ye(Sr)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,k3(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&za();break;case 3:Wr(),ye(rt),ye(Qe),Ed();break;case 5:Nd(r);break;case 4:Wr();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:kd(r.type._context);break;case 22:case 23:Ud()}n=n.return}if(Be=e,Le=e=kn(e.current,null),Ue=lt=t,Te=0,po=null,zd=Ol=qn=0,tt=Qi=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}Hn=null}return e}function Qh(e,t){do{var n=Le;try{if(Cd(),pa.current=Qa,Wa){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wa=!1}if(Jn=0,Re=Oe=je=null,Vi=!1,so=0,Md.current=null,n===null||n.return===null){Te=1,po=t,Le=null;break}e:{var a=e,l=n.return,s=n,c=t;if(t=Ue,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=s,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=mu(l);if(v!==null){v.flags&=-257,gu(v,l,s,a,t),v.mode&1&&hu(a,d,t),t=v,c=d;var y=t.updateQueue;if(y===null){var b=new Set;b.add(c),t.updateQueue=b}else y.add(c);break e}else{if(!(t&1)){hu(a,d,t),Fd();break e}c=Error(z(426))}}else if(we&&s.mode&1){var C=mu(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),gu(C,l,s,a,t),bd(Qr(c,s));break e}}a=c=Qr(c,s),Te!==4&&(Te=2),Qi===null?Qi=[a]:Qi.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=Eh(a,c,t);su(a,m);break e;case 1:s=c;var h=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wn===null||!wn.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=Ph(a,s,t);su(a,x);break e}}a=a.return}while(a!==null)}Yh(n)}catch(j){t=j,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function _h(){var e=_a.current;return _a.current=Qa,e===null?Qa:e}function Fd(){(Te===0||Te===3||Te===2)&&(Te=4),Be===null||!(qn&268435455)&&!(Ol&268435455)||pn(Be,Ue)}function Xa(e,t){var n=de;de|=2;var r=_h();(Be!==e||Ue!==t)&&(Qt=null,Qn(e,t));do try{Y3();break}catch(i){Qh(e,i)}while(!0);if(Cd(),de=n,_a.current=r,Le!==null)throw Error(z(261));return Be=null,Ue=0,Te}function Y3(){for(;Le!==null;)Gh(Le)}function X3(){for(;Le!==null&&!bx();)Gh(Le)}function Gh(e){var t=Zh(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?Yh(e):Le=t,Md.current=null}function Yh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$3(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Le=null;return}}else if(n=H3(n,t,lt),n!==null){Le=n;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Te===0&&(Te=5)}function Dn(e,t,n){var r=pe,i=bt.transition;try{bt.transition=null,pe=1,Z3(e,t,n,r)}finally{bt.transition=i,pe=r}return null}function Z3(e,t,n,r){do Mr();while(hn!==null);if(de&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Lx(e,a),e===Be&&(Le=Be=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,Jh(La,function(){return Mr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=bt.transition,bt.transition=null;var l=pe;pe=1;var s=de;de|=4,Md.current=null,W3(e,n),$h(n,e),g3(Hc),Ta=!!Fc,Hc=Fc=null,e.current=n,Q3(n),wx(),de=s,pe=l,bt.transition=a}else e.current=n;if(Zo&&(Zo=!1,hn=e,Ya=i),a=e.pendingLanes,a===0&&(wn=null),jx(n.stateNode),ot(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ga)throw Ga=!1,e=l0,l0=null,e;return Ya&1&&e.tag!==0&&Mr(),a=e.pendingLanes,a&1?e===s0?_i++:(_i=0,s0=e):_i=0,On(),null}function Mr(){if(hn!==null){var e=Ef(Ya),t=bt.transition,n=pe;try{if(bt.transition=null,pe=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,Ya=0,de&6)throw Error(z(331));var i=de;for(de|=4,W=e.current;W!==null;){var a=W,l=a.child;if(W.flags&16){var s=a.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(W=d;W!==null;){var u=W;switch(u.tag){case 0:case 11:case 15:Wi(8,u,a)}var p=u.child;if(p!==null)p.return=u,W=p;else for(;W!==null;){u=W;var g=u.sibling,v=u.return;if(Uh(u),u===d){W=null;break}if(g!==null){g.return=v,W=g;break}W=v}}}var y=a.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}W=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,W=l;else e:for(;W!==null;){if(a=W,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Wi(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,W=m;break e}W=a.return}}var h=e.current;for(W=h;W!==null;){l=W;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,W=f;else e:for(l=h;W!==null;){if(s=W,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ll(9,s)}}catch(j){Se(s,s.return,j)}if(s===l){W=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,W=x;break e}W=s.return}}if(de=i,On(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Cl,e)}catch{}r=!0}return r}finally{pe=n,bt.transition=t}}return!1}function Pu(e,t,n){t=Qr(n,t),t=Eh(e,t,1),e=bn(e,t,1),t=Ye(),e!==null&&(jo(e,1,t),ot(e,t))}function Se(e,t,n){if(e.tag===3)Pu(e,e,n);else for(;t!==null;){if(t.tag===3){Pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=Qr(n,e),e=Ph(t,e,1),t=bn(t,e,1),e=Ye(),t!==null&&(jo(t,1,e),ot(t,e));break}}t=t.return}}function J3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ue&n)===n&&(Te===4||Te===3&&(Ue&130023424)===Ue&&500>Ee()-Bd?Qn(e,0):zd|=n),ot(e,t)}function Xh(e,t){t===0&&(e.mode&1?(t=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):t=1);var n=Ye();e=Kt(e,t),e!==null&&(jo(e,t,n),ot(e,n))}function q3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xh(e,n)}function K3(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Xh(e,n)}var Zh;Zh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,F3(e,t,n);nt=!!(e.flags&131072)}else nt=!1,we&&t.flags&1048576&&eh(t,Ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ha(e,t),e=t.pendingProps;var i=Hr(t,Qe.current);Rr(t,n),i=Ld(null,t,r,e,i,n);var a=Od();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(a=!0,Ba(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ad(t),i.updater=Pl,t.stateNode=i,i._reactInternals=t,Zc(t,r,e,n),t=Kc(null,t,r,!0,a,n)):(t.tag=0,we&&a&&vd(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ha(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=t5(r),e=Nt(r,e),i){case 0:t=qc(null,t,r,e,n);break e;case 1:t=yu(null,t,r,e,n);break e;case 11:t=xu(null,t,r,e,n);break e;case 14:t=vu(null,t,r,Nt(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),qc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),yu(e,t,r,i,n);case 3:e:{if(Ih(t),e===null)throw Error(z(387));r=t.pendingProps,a=t.memoizedState,i=a.element,ah(e,t),$a(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Qr(Error(z(423)),t),t=bu(e,t,r,n,i);break e}else if(r!==i){i=Qr(Error(z(424)),t),t=bu(e,t,r,n,i);break e}else for(st=yn(t.stateNode.containerInfo.firstChild),ct=t,we=!0,Pt=null,n=ih(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){t=en(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return lh(t),e===null&&Gc(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,$c(r,i)?l=null:a!==null&&$c(r,a)&&(t.flags|=32),Th(e,t),Ge(e,t,l,n),t.child;case 6:return e===null&&Gc(t),null;case 13:return Rh(e,t,n);case 4:return Sd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),xu(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,ge(Fa,r._currentValue),r._currentValue=l,a!==null)if(Rt(a.value,l)){if(a.children===i.children&&!rt.current){t=en(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){l=a.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Zt(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Yc(a.return,n,t),s.lanes|=n;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(z(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Yc(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rr(t,n),i=wt(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=Nt(r,t.pendingProps),i=Nt(r.type,i),vu(e,t,r,i,n);case 15:return Lh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),ha(e,t),t.tag=1,it(r)?(e=!0,Ba(t)):e=!1,Rr(t,n),Nh(t,r,i),Zc(t,r,i,n),Kc(null,t,r,!0,e,n);case 19:return Mh(e,t,n);case 22:return Oh(e,t,n)}throw Error(z(156,t.tag))};function Jh(e,t){return jf(e,t)}function e5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new e5(e,t,n,r)}function Hd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function t5(e){if(typeof e=="function")return Hd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ad)return 11;if(e===ld)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xa(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")Hd(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case gr:return _n(n.children,i,a,t);case od:l=8,i|=8;break;case bc:return e=yt(12,n,t,i|2),e.elementType=bc,e.lanes=a,e;case wc:return e=yt(13,n,t,i),e.elementType=wc,e.lanes=a,e;case Cc:return e=yt(19,n,t,i),e.elementType=Cc,e.lanes=a,e;case lf:return Tl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case of:l=10;break e;case af:l=9;break e;case ad:l=11;break e;case ld:l=14;break e;case sn:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=yt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function _n(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Tl(e,t,n,r){return e=yt(22,e,r,t),e.elementType=lf,e.lanes=n,e.stateNode={isHidden:!1},e}function Os(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Ts(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function n5(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ps(0),this.expirationTimes=ps(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ps(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $d(e,t,n,r,i,a,l,s,c){return e=new n5(e,t,n,s,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=yt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ad(a),e}function r5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qh(e){if(!e)return Nn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(it(n))return qf(e,n,t)}return t}function Kh(e,t,n,r,i,a,l,s,c){return e=$d(n,r,!0,e,i,a,l,s,c),e.context=qh(null),n=e.current,r=Ye(),i=Cn(n),a=Zt(r,i),a.callback=t??null,bn(n,a,i),e.current.lanes=i,jo(e,i,r),ot(e,r),e}function Il(e,t,n,r){var i=t.current,a=Ye(),l=Cn(i);return n=qh(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bn(i,t,l),e!==null&&(Tt(e,i,l,a),ua(e,i,l)),l}function Za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vd(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function i5(){return null}var e1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wd(e){this._internalRoot=e}Rl.prototype.render=Wd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Il(e,t,null,null)};Rl.prototype.unmount=Wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kn(function(){Il(null,e,null,null)}),t[qt]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Of();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&If(e)}};function Qd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ou(){}function o5(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=Za(l);a.call(d)}}var l=Kh(t,r,e,0,null,!1,!1,"",Ou);return e._reactRootContainer=l,e[qt]=l.current,ro(e.nodeType===8?e.parentNode:e),Kn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=Za(c);s.call(d)}}var c=$d(e,0,!1,null,null,!1,!1,"",Ou);return e._reactRootContainer=c,e[qt]=c.current,ro(e.nodeType===8?e.parentNode:e),Kn(function(){Il(t,c,n,r)}),c}function zl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var s=i;i=function(){var c=Za(l);s.call(c)}}Il(t,l,e,i)}else l=o5(n,t,e,i,r);return Za(l)}Pf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pi(t.pendingLanes);n!==0&&(dd(t,n|1),ot(t,Ee()),!(de&6)&&(_r=Ee()+500,On()))}break;case 13:Kn(function(){var r=Kt(e,1);if(r!==null){var i=Ye();Tt(r,e,1,i)}}),Vd(e,1)}};ud=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=Ye();Tt(t,e,134217728,n)}Vd(e,134217728)}};Lf=function(e){if(e.tag===13){var t=Cn(e),n=Kt(e,t);if(n!==null){var r=Ye();Tt(n,e,t,r)}Vd(e,t)}};Of=function(){return pe};Tf=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};Tc=function(e,t,n){switch(t){case"input":if(Ac(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Sl(r);if(!i)throw Error(z(90));cf(r),Ac(r,i)}}}break;case"textarea":uf(e,n);break;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}};vf=Dd;yf=Kn;var a5={usingClientEntryPoint:!1,Events:[So,br,Sl,gf,xf,Dd]},wi={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l5={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cf(e),e===null?null:e.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||i5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Cl=Jo.inject(l5),$t=Jo}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a5;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(t))throw Error(z(200));return r5(e,t,null,n)};ut.createRoot=function(e,t){if(!Qd(e))throw Error(z(299));var n=!1,r="",i=e1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$d(e,1,!1,null,null,n,!1,r,i),e[qt]=t.current,ro(e.nodeType===8?e.parentNode:e),new Wd(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Cf(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return Kn(e)};ut.hydrate=function(e,t,n){if(!Ml(t))throw Error(z(200));return zl(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!Qd(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=e1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Kh(t,null,e,1,n??null,i,!1,a,l),e[qt]=t.current,ro(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Rl(t)};ut.render=function(e,t,n){if(!Ml(t))throw Error(z(200));return zl(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(z(40));return e._reactRootContainer?(Kn(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};ut.unstable_batchedUpdates=Dd;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ml(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return zl(e,t,n,!1,r)};ut.version="18.3.1-next-f1338f8080-20240426";function t1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t1)}catch(e){console.error(e)}}t1(),ef.exports=ut;var s5=ef.exports,Tu=s5;vc.createRoot=Tu.createRoot,vc.hydrateRoot=Tu.hydrateRoot;var ze=function(){return ze=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ze.apply(this,arguments)};function fo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var c5=function(t,n,r,i){var a=r?r.call(i,t,n):void 0;if(a!==void 0)return!!a;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var l=Object.keys(t),s=Object.keys(n);if(l.length!==s.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),d=0;d<l.length;d++){var u=l[d];if(!c(u))return!1;var p=t[u],g=n[u];if(a=r?r.call(i,p,g,u):void 0,a===!1||a===void 0&&p!==g)return!1}return!0};const d5=En(c5);var ve="-ms-",Gi="-moz-",ue="-webkit-",n1="comm",Bl="rule",_d="decl",u5="@import",r1="@keyframes",p5="@layer",i1=Math.abs,Gd=String.fromCharCode,u0=Object.assign;function f5(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function o1(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function va(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function Gr(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function a1(e){return e.length}function Oi(e,t){return t.push(e),e}function h5(e,t){return e.map(t).join("")}function Iu(e,t){return e.filter(function(n){return!_t(n,t)})}var Dl=1,Yr=1,l1=0,kt=0,Pe=0,ai="";function Ul(e,t,n,r,i,a,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Dl,column:Yr,length:l,return:"",siblings:s}}function ln(e,t){return u0(Ul("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function cr(e){for(;e.root;)e=ln(e.root,{children:[e]});Oi(e,e.siblings)}function m5(){return Pe}function g5(){return Pe=kt>0?Me(ai,--kt):0,Yr--,Pe===10&&(Yr=1,Dl--),Pe}function It(){return Pe=kt<l1?Me(ai,kt++):0,Yr++,Pe===10&&(Yr=1,Dl++),Pe}function Gn(){return Me(ai,kt)}function ya(){return kt}function Fl(e,t){return Gr(ai,e,t)}function p0(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function x5(e){return Dl=Yr=1,l1=Ut(ai=e),kt=0,[]}function v5(e){return ai="",e}function Is(e){return o1(Fl(kt-1,f0(e===91?e+2:e===40?e+1:e)))}function y5(e){for(;(Pe=Gn())&&Pe<33;)It();return p0(e)>2||p0(Pe)>3?"":" "}function b5(e,t){for(;--t&&It()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return Fl(e,ya()+(t<6&&Gn()==32&&It()==32))}function f0(e){for(;It();)switch(Pe){case e:return kt;case 34:case 39:e!==34&&e!==39&&f0(Pe);break;case 40:e===41&&f0(e);break;case 92:It();break}return kt}function w5(e,t){for(;It()&&e+Pe!==57;)if(e+Pe===84&&Gn()===47)break;return"/*"+Fl(t,kt-1)+"*"+Gd(e===47?e:It())}function C5(e){for(;!p0(Gn());)It();return Fl(e,kt)}function k5(e){return v5(ba("",null,null,null,[""],e=x5(e),0,[0],e))}function ba(e,t,n,r,i,a,l,s,c){for(var d=0,u=0,p=l,g=0,v=0,y=0,b=1,C=1,m=1,h=0,f="",x=i,j=a,S=r,k=f;C;)switch(y=h,h=It()){case 40:if(y!=108&&Me(k,p-1)==58){va(k+=ne(Is(h),"&","&\f"),"&\f",i1(d?s[d-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:k+=Is(h);break;case 9:case 10:case 13:case 32:k+=y5(y);break;case 92:k+=b5(ya()-1,7);continue;case 47:switch(Gn()){case 42:case 47:Oi(j5(w5(It(),ya()),t,n,c),c);break;default:k+="/"}break;case 123*b:s[d++]=Ut(k)*m;case 125*b:case 59:case 0:switch(h){case 0:case 125:C=0;case 59+u:m==-1&&(k=ne(k,/\f/g,"")),v>0&&Ut(k)-p&&Oi(v>32?Mu(k+";",r,n,p-1,c):Mu(ne(k," ","")+";",r,n,p-2,c),c);break;case 59:k+=";";default:if(Oi(S=Ru(k,t,n,d,u,i,s,f,x=[],j=[],p,a),a),h===123)if(u===0)ba(k,t,S,S,x,a,p,s,j);else switch(g===99&&Me(k,3)===110?100:g){case 100:case 108:case 109:case 115:ba(e,S,S,r&&Oi(Ru(e,S,S,0,0,i,s,f,i,x=[],p,j),j),i,j,p,s,r?x:j);break;default:ba(k,S,S,S,[""],j,0,s,j)}}d=u=v=0,b=m=1,f=k="",p=l;break;case 58:p=1+Ut(k),v=y;default:if(b<1){if(h==123)--b;else if(h==125&&b++==0&&g5()==125)continue}switch(k+=Gd(h),h*b){case 38:m=u>0?1:(k+="\f",-1);break;case 44:s[d++]=(Ut(k)-1)*m,m=1;break;case 64:Gn()===45&&(k+=Is(It())),g=Gn(),u=p=Ut(f=k+=C5(ya())),h++;break;case 45:y===45&&Ut(k)==2&&(b=0)}}return a}function Ru(e,t,n,r,i,a,l,s,c,d,u,p){for(var g=i-1,v=i===0?a:[""],y=a1(v),b=0,C=0,m=0;b<r;++b)for(var h=0,f=Gr(e,g+1,g=i1(C=l[b])),x=e;h<y;++h)(x=o1(C>0?v[h]+" "+f:ne(f,/&\f/g,v[h])))&&(c[m++]=x);return Ul(e,t,n,i===0?Bl:s,c,d,u,p)}function j5(e,t,n,r){return Ul(e,t,n,n1,Gd(m5()),Gr(e,2,-2),0,r)}function Mu(e,t,n,r,i){return Ul(e,t,n,_d,Gr(e,0,r),Gr(e,r+1,-1),r,i)}function s1(e,t,n){switch(f5(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 4789:return Gi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Gi+e+ve+e+e;case 5936:switch(Me(e,t+11)){case 114:return ue+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ve+e+e;case 6165:return ue+e+ve+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return ue+e+ve+"flex-item-"+ne(e,/flex-|-self/g,"")+(_t(e,/flex-|baseline/)?"":ve+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ve+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ve+ne(e,"shrink","negative")+e;case 5292:return ue+e+ve+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ve+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4200:if(!_t(e,/flex-|baseline/))return ve+"grid-column-align"+Gr(e,t)+e;break;case 2592:case 3360:return ve+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,_t(r.props,/grid-\w+-end/)})?~va(e+(n=n[t].value),"span",0)?e:ve+ne(e,"-start","")+e+ve+"grid-row-span:"+(~va(n,"span",0)?_t(n,/\d+/):+_t(n,/\d+/)-+_t(e,/\d+/))+";":ve+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return _t(r.props,/grid-\w+-start/)})?e:ve+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Gi+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~va(e,"stretch",0)?s1(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,l,s,c,d){return ve+i+":"+a+d+(l?ve+i+"-span:"+(s?c:+c-+a)+d:"")+e});case 4949:if(Me(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Me(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ve+"$2box$3")+e;case 100:return ne(e,":",":"+ve)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Ja(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function A5(e,t,n,r){switch(e.type){case p5:if(e.children.length)break;case u5:case _d:return e.return=e.return||e.value;case n1:return"";case r1:return e.return=e.value+"{"+Ja(e.children,r)+"}";case Bl:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=Ja(e.children,r))?e.return=e.value+"{"+n+"}":""}function S5(e){var t=a1(e);return function(n,r,i,a){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,a)||"";return l}}function N5(e){return function(t){t.root||(t=t.return)&&e(t)}}function E5(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case _d:e.return=s1(e.value,e.length,n);return;case r1:return Ja([ln(e,{value:ne(e.value,"@","@"+ue)})],r);case Bl:if(e.length)return h5(n=e.props,function(i){switch(_t(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cr(ln(e,{props:[ne(i,/:(read-\w+)/,":"+Gi+"$1")]})),cr(ln(e,{props:[i]})),u0(e,{props:Iu(n,r)});break;case"::placeholder":cr(ln(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),cr(ln(e,{props:[ne(i,/:(plac\w+)/,":"+Gi+"$1")]})),cr(ln(e,{props:[ne(i,/:(plac\w+)/,ve+"input-$1")]})),cr(ln(e,{props:[i]})),u0(e,{props:Iu(n,r)});break}return""})}}var P5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},at={},Xr=typeof process<"u"&&at!==void 0&&(at.REACT_APP_SC_ATTR||at.SC_ATTR)||"data-styled",c1="active",d1="data-styled-version",Hl="6.1.19",Yd=`/*!sc*/
`,qa=typeof window<"u"&&typeof document<"u",L5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&at!==void 0&&at.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&at.REACT_APP_SC_DISABLE_SPEEDY!==""?at.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&at.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&at!==void 0&&at.SC_DISABLE_SPEEDY!==void 0&&at.SC_DISABLE_SPEEDY!==""&&at.SC_DISABLE_SPEEDY!=="false"&&at.SC_DISABLE_SPEEDY),O5={},$l=Object.freeze([]),Zr=Object.freeze({});function u1(e,t,n){return n===void 0&&(n=Zr),e.theme!==n.theme&&e.theme||t||n.theme}var p1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),T5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,I5=/(^-|-$)/g;function zu(e){return e.replace(T5,"-").replace(I5,"")}var R5=/(a)(d)/gi,qo=52,Bu=function(e){return String.fromCharCode(e+(e>25?39:97))};function h0(e){var t,n="";for(t=Math.abs(e);t>qo;t=t/qo|0)n=Bu(t%qo)+n;return(Bu(t%qo)+n).replace(R5,"$1-$2")}var Rs,f1=5381,Nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},h1=function(e){return Nr(f1,e)};function m1(e){return h0(h1(e)>>>0)}function M5(e){return e.displayName||e.name||"Component"}function Ms(e){return typeof e=="string"&&!0}var g1=typeof Symbol=="function"&&Symbol.for,x1=g1?Symbol.for("react.memo"):60115,z5=g1?Symbol.for("react.forward_ref"):60112,B5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},D5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},v1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},U5=((Rs={})[z5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rs[x1]=v1,Rs);function Du(e){return("type"in(t=e)&&t.type.$$typeof)===x1?v1:"$$typeof"in e?U5[e.$$typeof]:B5;var t}var F5=Object.defineProperty,H5=Object.getOwnPropertyNames,Uu=Object.getOwnPropertySymbols,$5=Object.getOwnPropertyDescriptor,V5=Object.getPrototypeOf,Fu=Object.prototype;function y1(e,t,n){if(typeof t!="string"){if(Fu){var r=V5(t);r&&r!==Fu&&y1(e,r,n)}var i=H5(t);Uu&&(i=i.concat(Uu(t)));for(var a=Du(e),l=Du(t),s=0;s<i.length;++s){var c=i[s];if(!(c in D5||n&&n[c]||l&&c in l||a&&c in a)){var d=$5(t,c);try{F5(e,c,d)}catch{}}}}return e}function er(e){return typeof e=="function"}function Xd(e){return typeof e=="object"&&"styledComponentId"in e}function Vn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function m0(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ho(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function g0(e,t,n){if(n===void 0&&(n=!1),!n&&!ho(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=g0(e[r],t[r]);else if(ho(t))for(var r in t)e[r]=g0(e[r],t[r]);return e}function Zd(e,t){Object.defineProperty(e,"toString",{value:t})}function tr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var W5=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw tr(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,l=i;l<a;l++)n+="".concat(this.tag.getRule(l)).concat(Yd);return n},e}(),wa=new Map,Ka=new Map,Ca=1,Ko=function(e){if(wa.has(e))return wa.get(e);for(;Ka.has(Ca);)Ca++;var t=Ca++;return wa.set(e,t),Ka.set(t,e),t},Q5=function(e,t){Ca=t+1,wa.set(e,t),Ka.set(t,e)},_5="style[".concat(Xr,"][").concat(d1,'="').concat(Hl,'"]'),G5=new RegExp("^".concat(Xr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Y5=function(e,t,n){for(var r,i=n.split(","),a=0,l=i.length;a<l;a++)(r=i[a])&&e.registerName(t,r)},X5=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Yd),i=[],a=0,l=r.length;a<l;a++){var s=r[a].trim();if(s){var c=s.match(G5);if(c){var d=0|parseInt(c[1],10),u=c[2];d!==0&&(Q5(u,d),Y5(e,u,c[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(s)}}},Hu=function(e){for(var t=document.querySelectorAll(_5),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Xr)!==c1&&(X5(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Z5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var b1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var c=Array.from(s.querySelectorAll("style[".concat(Xr,"]")));return c[c.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Xr,c1),r.setAttribute(d1,Hl);var l=Z5();return l&&r.setAttribute("nonce",l),n.insertBefore(r,a),r},J5=function(){function e(t){this.element=b1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var l=r[i];if(l.ownerNode===n)return l}throw tr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),q5=function(){function e(t){this.element=b1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),K5=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),$u=qa,ev={isServer:!qa,useCSSOMInjection:!L5},el=function(){function e(t,n,r){t===void 0&&(t=Zr),n===void 0&&(n={});var i=this;this.options=ze(ze({},ev),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&qa&&$u&&($u=!1,Hu(this)),Zd(this,function(){return function(a){for(var l=a.getTag(),s=l.length,c="",d=function(p){var g=function(m){return Ka.get(m)}(p);if(g===void 0)return"continue";var v=a.names.get(g),y=l.getGroup(p);if(v===void 0||!v.size||y.length===0)return"continue";var b="".concat(Xr,".g").concat(p,'[id="').concat(g,'"]'),C="";v!==void 0&&v.forEach(function(m){m.length>0&&(C+="".concat(m,","))}),c+="".concat(y).concat(b,'{content:"').concat(C,'"}').concat(Yd)},u=0;u<s;u++)d(u);return c}(i)})}return e.registerId=function(t){return Ko(t)},e.prototype.rehydrate=function(){!this.server&&qa&&Hu(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new K5(i):r?new J5(i):new q5(i)}(this.options),new W5(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ko(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ko(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ko(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),tv=/&/g,nv=/^\s*\/\/.*$/gm;function w1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=w1(n.children,t)),n})}function rv(e){var t,n,r,i=Zr,a=i.options,l=a===void 0?Zr:a,s=i.plugins,c=s===void 0?$l:s,d=function(g,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},u=c.slice();u.push(function(g){g.type===Bl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(tv,n).replace(r,d))}),l.prefix&&u.push(E5),u.push(A5);var p=function(g,v,y,b){v===void 0&&(v=""),y===void 0&&(y=""),b===void 0&&(b="&"),t=b,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var C=g.replace(nv,""),m=k5(y||v?"".concat(y," ").concat(v," { ").concat(C," }"):C);l.namespace&&(m=w1(m,l.namespace));var h=[];return Ja(m,S5(u.concat(N5(function(f){return h.push(f)})))),h};return p.hash=c.length?c.reduce(function(g,v){return v.name||tr(15),Nr(g,v.name)},f1).toString():"",p}var iv=new el,x0=rv(),C1=J.createContext({shouldForwardProp:void 0,styleSheet:iv,stylis:x0});C1.Consumer;J.createContext(void 0);function v0(){return N.useContext(C1)}var ov=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=x0);var l=r.name+a.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,a(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Zd(this,function(){throw tr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=x0),this.name+t.hash},e}(),av=function(e){return e>="A"&&e<="Z"};function Vu(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;av(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var k1=function(e){return e==null||e===!1||e===""},j1=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!k1(a)&&(Array.isArray(a)&&a.isCss||er(a)?r.push("".concat(Vu(i),":"),a,";"):ho(a)?r.push.apply(r,fo(fo(["".concat(i," {")],j1(a),!1),["}"],!1)):r.push("".concat(Vu(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in P5||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function jn(e,t,n,r){if(k1(e))return[];if(Xd(e))return[".".concat(e.styledComponentId)];if(er(e)){if(!er(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return jn(i,t,n,r)}var a;return e instanceof ov?n?(e.inject(n,r),[e.getName(r)]):[e]:ho(e)?j1(e):Array.isArray(e)?Array.prototype.concat.apply($l,e.map(function(l){return jn(l,t,n,r)})):[e.toString()]}function A1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(er(n)&&!Xd(n))return!1}return!0}var lv=h1(Hl),sv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&A1(t),this.componentId=n,this.baseHash=Nr(lv,n),this.baseStyle=r,el.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Vn(i,this.staticRulesId);else{var a=m0(jn(this.rules,t,n,r)),l=h0(Nr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(a,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=Vn(i,l),this.staticRulesId=l}else{for(var c=Nr(this.baseHash,r.hash),d="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")d+=p;else if(p){var g=m0(jn(p,t,n,r));c=Nr(c,g+u),d+=g}}if(d){var v=h0(c>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(d,".".concat(v),void 0,this.componentId)),i=Vn(i,v)}}return i},e}(),mo=J.createContext(void 0);mo.Consumer;function cv(e){var t=J.useContext(mo),n=N.useMemo(function(){return function(r,i){if(!r)throw tr(14);if(er(r)){var a=r(i);return a}if(Array.isArray(r)||typeof r!="object")throw tr(8);return i?ze(ze({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?J.createElement(mo.Provider,{value:n},e.children):null}var zs={};function dv(e,t,n){var r=Xd(e),i=e,a=!Ms(e),l=t.attrs,s=l===void 0?$l:l,c=t.componentId,d=c===void 0?function(x,j){var S=typeof x!="string"?"sc":zu(x);zs[S]=(zs[S]||0)+1;var k="".concat(S,"-").concat(m1(Hl+S+zs[S]));return j?"".concat(j,"-").concat(k):k}(t.displayName,t.parentComponentId):c,u=t.displayName,p=u===void 0?function(x){return Ms(x)?"styled.".concat(x):"Styled(".concat(M5(x),")")}(e):u,g=t.displayName&&t.componentId?"".concat(zu(t.displayName),"-").concat(t.componentId):t.componentId||d,v=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var b=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;y=function(x,j){return b(x,j)&&C(x,j)}}else y=b}var m=new sv(n,g,r?i.componentStyle:void 0);function h(x,j){return function(S,k,w){var A=S.attrs,P=S.componentStyle,R=S.defaultProps,M=S.foldedComponentIds,L=S.styledComponentId,G=S.target,te=J.useContext(mo),q=v0(),le=S.shouldForwardProp||q.shouldForwardProp,T=u1(k,te,R)||Zr,U=function($,Q,_){for(var se,ce=ze(ze({},Q),{className:void 0,theme:_}),fe=0;fe<$.length;fe+=1){var me=er(se=$[fe])?se(ce):se;for(var Ie in me)ce[Ie]=Ie==="className"?Vn(ce[Ie],me[Ie]):Ie==="style"?ze(ze({},ce[Ie]),me[Ie]):me[Ie]}return Q.className&&(ce.className=Vn(ce.className,Q.className)),ce}(A,k,T),H=U.as||G,K={};for(var Z in U)U[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&U.theme===T||(Z==="forwardedAs"?K.as=U.forwardedAs:le&&!le(Z,H)||(K[Z]=U[Z]));var I=function($,Q){var _=v0(),se=$.generateAndInjectStyles(Q,_.styleSheet,_.stylis);return se}(P,U),B=Vn(M,L);return I&&(B+=" "+I),U.className&&(B+=" "+U.className),K[Ms(H)&&!p1.has(H)?"class":"className"]=B,w&&(K.ref=w),N.createElement(H,K)}(f,x,j)}h.displayName=p;var f=J.forwardRef(h);return f.attrs=v,f.componentStyle=m,f.displayName=p,f.shouldForwardProp=y,f.foldedComponentIds=r?Vn(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=g,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(j){for(var S=[],k=1;k<arguments.length;k++)S[k-1]=arguments[k];for(var w=0,A=S;w<A.length;w++)g0(j,A[w],!0);return j}({},i.defaultProps,x):x}}),Zd(f,function(){return".".concat(f.styledComponentId)}),a&&y1(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Wu(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Qu=function(e){return Object.assign(e,{isCss:!0})};function Ve(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(er(e)||ho(e))return Qu(jn(Wu($l,fo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?jn(r):Qu(jn(Wu(r,t)))}function y0(e,t,n){if(n===void 0&&(n=Zr),!t)throw tr(1,t);var r=function(i){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return e(t,n,Ve.apply(void 0,fo([i],a,!1)))};return r.attrs=function(i){return y0(e,t,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return y0(e,t,ze(ze({},n),i))},r}var S1=function(e){return y0(dv,e)},Y=S1;p1.forEach(function(e){Y[e]=S1(e)});var uv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=A1(t),el.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var a=i(m0(jn(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&el.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function pv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ve.apply(void 0,fo([e],t,!1)),i="sc-global-".concat(m1(JSON.stringify(r))),a=new uv(r,i),l=function(c){var d=v0(),u=J.useContext(mo),p=J.useRef(d.styleSheet.allocateGSInstance(i)).current;return d.styleSheet.server&&s(p,c,d.styleSheet,u,d.stylis),J.useLayoutEffect(function(){if(!d.styleSheet.server)return s(p,c,d.styleSheet,u,d.stylis),function(){return a.removeStyles(p,d.styleSheet)}},[p,c,d.styleSheet,u,d.stylis]),null};function s(c,d,u,p,g){if(a.isStatic)a.renderStyles(c,O5,u,g);else{var v=ze(ze({},d),{theme:u1(d,p,l.defaultProps)});a.renderStyles(c,v,u,g)}}return J.memo(l)}/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},go.apply(this,arguments)}var mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mn||(mn={}));const _u="popstate";function fv(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:s}=r.location;return b0("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tl(i)}return mv(t,n,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function N1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hv(){return Math.random().toString(36).substr(2,8)}function Gu(e,t){return{usr:e.state,key:e.key,idx:t}}function b0(e,t,n,r){return n===void 0&&(n=null),go({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?li(t):t,{state:n,key:t&&t.key||r||hv()})}function tl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function li(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function mv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,s=mn.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(go({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){s=mn.Pop;let C=u(),m=C==null?null:C-d;d=C,c&&c({action:s,location:b.location,delta:m})}function g(C,m){s=mn.Push;let h=b0(b.location,C,m);d=u()+1;let f=Gu(h,d),x=b.createHref(h);try{l.pushState(f,"",x)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(x)}a&&c&&c({action:s,location:b.location,delta:1})}function v(C,m){s=mn.Replace;let h=b0(b.location,C,m);d=u();let f=Gu(h,d),x=b.createHref(h);l.replaceState(f,"",x),a&&c&&c({action:s,location:b.location,delta:0})}function y(C){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof C=="string"?C:tl(C);return h=h.replace(/ $/,"%20"),Ne(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let b={get action(){return s},get location(){return e(i,l)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(_u,p),c=C,()=>{i.removeEventListener(_u,p),c=null}},createHref(C){return t(i,C)},createURL:y,encodeLocation(C){let m=y(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:v,go(C){return l.go(C)}};return b}var Yu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yu||(Yu={}));function gv(e,t,n){return n===void 0&&(n="/"),xv(e,t,n)}function xv(e,t,n,r){let i=typeof t=="string"?li(t):t,a=Jr(i.pathname||"/",n);if(a==null)return null;let l=E1(e);vv(l);let s=null;for(let c=0;s==null&&c<l.length;++c){let d=Pv(a);s=Nv(l[c],d)}return s}function E1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,l,s)=>{let c={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(Ne(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=An([r,c.relativePath]),u=n.concat(c);a.children&&a.children.length>0&&(Ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),E1(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Av(d,a.index),routesMeta:u})};return e.forEach((a,l)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,l);else for(let c of P1(a.path))i(a,l,c)}),t}function P1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=P1(r.join("/")),s=[];return s.push(...l.map(c=>c===""?a:[a,c].join("/"))),i&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function vv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Sv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yv=/^:[\w-]+$/,bv=3,wv=2,Cv=1,kv=10,jv=-2,Xu=e=>e==="*";function Av(e,t){let n=e.split("/"),r=n.length;return n.some(Xu)&&(r+=jv),t&&(r+=wv),n.filter(i=>!Xu(i)).reduce((i,a)=>i+(yv.test(a)?bv:a===""?Cv:kv),r)}function Sv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Nv(e,t,n){let{routesMeta:r}=e,i={},a="/",l=[];for(let s=0;s<r.length;++s){let c=r[s],d=s===r.length-1,u=a==="/"?t:t.slice(a.length)||"/",p=w0({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),g=c.route;if(!p)return null;Object.assign(i,p.params),l.push({params:i,pathname:An([a,p.pathname]),pathnameBase:Iv(An([a,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(a=An([a,p.pathnameBase]))}return l}function w0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ev(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((d,u,p)=>{let{paramName:g,isOptional:v}=u;if(g==="*"){let b=s[p]||"";l=a.slice(0,a.length-b.length).replace(/(.)\/+$/,"$1")}const y=s[p];return v&&!y?d[g]=void 0:d[g]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:l,pattern:e}}function Ev(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),N1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Pv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return N1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Lv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?li(e):e;return{pathname:n?n.startsWith("/")?n:Ov(n,t):t,search:Rv(r),hash:Mv(i)}}function Ov(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function L1(e,t){let n=Tv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function O1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=li(e):(i=go({},e),Ne(!i.pathname||!i.pathname.includes("?"),Bs("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),Bs("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),Bs("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,s;if(l==null)s=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}s=p>=0?t[p]:"/"}let c=Lv(i,s),d=l&&l!=="/"&&l.endsWith("/"),u=(a||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const An=e=>e.join("/").replace(/\/\/+/g,"/"),Iv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Rv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Mv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const T1=["post","put","patch","delete"];new Set(T1);const Bv=["get",...T1];new Set(Bv);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xo.apply(this,arguments)}const Vl=N.createContext(null),I1=N.createContext(null),Tn=N.createContext(null),Wl=N.createContext(null),or=N.createContext({outlet:null,matches:[],isDataRoute:!1}),R1=N.createContext(null);function Dv(e,t){let{relative:n}=t===void 0?{}:t;Eo()||Ne(!1);let{basename:r,navigator:i}=N.useContext(Tn),{hash:a,pathname:l,search:s}=Ql(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:An([r,l])),i.createHref({pathname:c,search:s,hash:a})}function Eo(){return N.useContext(Wl)!=null}function si(){return Eo()||Ne(!1),N.useContext(Wl).location}function M1(e){N.useContext(Tn).static||N.useLayoutEffect(e)}function Uv(){let{isDataRoute:e}=N.useContext(or);return e?qv():Fv()}function Fv(){Eo()||Ne(!1);let e=N.useContext(Vl),{basename:t,future:n,navigator:r}=N.useContext(Tn),{matches:i}=N.useContext(or),{pathname:a}=si(),l=JSON.stringify(L1(i,n.v7_relativeSplatPath)),s=N.useRef(!1);return M1(()=>{s.current=!0}),N.useCallback(function(d,u){if(u===void 0&&(u={}),!s.current)return;if(typeof d=="number"){r.go(d);return}let p=O1(d,JSON.parse(l),a,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:An([t,p.pathname])),(u.replace?r.replace:r.push)(p,u.state,u)},[t,r,l,a,e])}function Ql(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=N.useContext(Tn),{matches:i}=N.useContext(or),{pathname:a}=si(),l=JSON.stringify(L1(i,r.v7_relativeSplatPath));return N.useMemo(()=>O1(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function Hv(e,t){return $v(e,t)}function $v(e,t,n,r){Eo()||Ne(!1);let{navigator:i}=N.useContext(Tn),{matches:a}=N.useContext(or),l=a[a.length-1],s=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=si(),u;if(t){var p;let C=typeof t=="string"?li(t):t;c==="/"||(p=C.pathname)!=null&&p.startsWith(c)||Ne(!1),u=C}else u=d;let g=u.pathname||"/",v=g;if(c!=="/"){let C=c.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=gv(e,{pathname:v}),b=Gv(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:An([c,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?c:An([c,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),a,n,r);return t&&b?N.createElement(Wl.Provider,{value:{location:xo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:mn.Pop}},b):b}function Vv(){let e=Jv(),t=zv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,null)}const Wv=N.createElement(Vv,null);class Qv extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(or.Provider,{value:this.props.routeContext},N.createElement(R1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _v(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(Vl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(or.Provider,{value:t},r)}function Gv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let u=l.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);u>=0||Ne(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:g,errors:v}=n,y=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||y){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,g)=>{let v,y=!1,b=null,C=null;n&&(v=s&&p.route.id?s[p.route.id]:void 0,b=p.route.errorElement||Wv,c&&(d<0&&g===0?(Kv("route-fallback"),y=!0,C=null):d===g&&(y=!0,C=p.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,g+1)),h=()=>{let f;return v?f=b:y?f=C:p.route.Component?f=N.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=u,N.createElement(_v,{match:p,routeContext:{outlet:u,matches:m,isDataRoute:n!=null},children:f})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?N.createElement(Qv,{location:n.location,revalidation:n.revalidation,component:b,error:v,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var z1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(z1||{}),B1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(B1||{});function Yv(e){let t=N.useContext(Vl);return t||Ne(!1),t}function Xv(e){let t=N.useContext(I1);return t||Ne(!1),t}function Zv(e){let t=N.useContext(or);return t||Ne(!1),t}function D1(e){let t=Zv(),n=t.matches[t.matches.length-1];return n.route.id||Ne(!1),n.route.id}function Jv(){var e;let t=N.useContext(R1),n=Xv(),r=D1();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function qv(){let{router:e}=Yv(z1.UseNavigateStable),t=D1(B1.UseNavigateStable),n=N.useRef(!1);return M1(()=>{n.current=!0}),N.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,xo({fromRouteId:t},a)))},[e,t])}const Zu={};function Kv(e,t,n){Zu[e]||(Zu[e]=!0)}function e4(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function et(e){Ne(!1)}function t4(e){let{basename:t="/",children:n=null,location:r,navigationType:i=mn.Pop,navigator:a,static:l=!1,future:s}=e;Eo()&&Ne(!1);let c=t.replace(/^\/*/,"/"),d=N.useMemo(()=>({basename:c,navigator:a,static:l,future:xo({v7_relativeSplatPath:!1},s)}),[c,s,a,l]);typeof r=="string"&&(r=li(r));let{pathname:u="/",search:p="",hash:g="",state:v=null,key:y="default"}=r,b=N.useMemo(()=>{let C=Jr(u,c);return C==null?null:{location:{pathname:C,search:p,hash:g,state:v,key:y},navigationType:i}},[c,u,p,g,v,y,i]);return b==null?null:N.createElement(Tn.Provider,{value:d},N.createElement(Wl.Provider,{children:n,value:b}))}function n4(e){let{children:t,location:n}=e;return Hv(C0(t),n)}new Promise(()=>{});function C0(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let a=[...t,i];if(r.type===N.Fragment){n.push.apply(n,C0(r.props.children,a));return}r.type!==et&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=C0(r.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nl.apply(this,arguments)}function U1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function r4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function i4(e,t){return e.button===0&&(!t||t==="_self")&&!r4(e)}const o4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],a4=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],l4="6";try{window.__reactRouterVersion=l4}catch{}const s4=N.createContext({isTransitioning:!1}),c4="startTransition",Ju=Jg[c4];function d4(e){let{basename:t,children:n,future:r,window:i}=e,a=N.useRef();a.current==null&&(a.current=fv({window:i,v5Compat:!0}));let l=a.current,[s,c]=N.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},u=N.useCallback(p=>{d&&Ju?Ju(()=>c(p)):c(p)},[c,d]);return N.useLayoutEffect(()=>l.listen(u),[l,u]),N.useEffect(()=>e4(r),[r]),N.createElement(t4,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const u4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,f4=N.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:l,state:s,target:c,to:d,preventScrollReset:u,viewTransition:p}=t,g=U1(t,o4),{basename:v}=N.useContext(Tn),y,b=!1;if(typeof d=="string"&&p4.test(d)&&(y=d,u4))try{let f=new URL(window.location.href),x=d.startsWith("//")?new URL(f.protocol+d):new URL(d),j=Jr(x.pathname,v);x.origin===f.origin&&j!=null?d=j+x.search+x.hash:b=!0}catch{}let C=Dv(d,{relative:i}),m=m4(d,{replace:l,state:s,target:c,preventScrollReset:u,relative:i,viewTransition:p});function h(f){r&&r(f),f.defaultPrevented||m(f)}return N.createElement("a",nl({},g,{href:y||C,onClick:b||a?r:h,ref:n,target:c}))}),re=N.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:l=!1,style:s,to:c,viewTransition:d,children:u}=t,p=U1(t,a4),g=Ql(c,{relative:p.relative}),v=si(),y=N.useContext(I1),{navigator:b,basename:C}=N.useContext(Tn),m=y!=null&&g4(g)&&d===!0,h=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,f=v.pathname,x=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(f=f.toLowerCase(),x=x?x.toLowerCase():null,h=h.toLowerCase()),x&&C&&(x=Jr(x,C)||x);const j=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let S=f===h||!l&&f.startsWith(h)&&f.charAt(j)==="/",k=x!=null&&(x===h||!l&&x.startsWith(h)&&x.charAt(h.length)==="/"),w={isActive:S,isPending:k,isTransitioning:m},A=S?r:void 0,P;typeof a=="function"?P=a(w):P=[a,S?"active":null,k?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let R=typeof s=="function"?s(w):s;return N.createElement(f4,nl({},p,{"aria-current":A,className:P,ref:n,style:R,to:c,viewTransition:d}),typeof u=="function"?u(w):u)});var k0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(k0||(k0={}));var qu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qu||(qu={}));function h4(e){let t=N.useContext(Vl);return t||Ne(!1),t}function m4(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:l,viewTransition:s}=t===void 0?{}:t,c=Uv(),d=si(),u=Ql(e,{relative:l});return N.useCallback(p=>{if(i4(p,n)){p.preventDefault();let g=r!==void 0?r:tl(d)===tl(u);c(e,{replace:g,state:i,preventScrollReset:a,relative:l,viewTransition:s})}},[d,c,u,r,i,n,e,a,l,s])}function g4(e,t){t===void 0&&(t={});let n=N.useContext(s4);n==null&&Ne(!1);let{basename:r}=h4(k0.useViewTransitionState),i=Ql(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Jr(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Jr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return w0(i.pathname,l)!=null||w0(i.pathname,a)!=null}var x4=typeof Element<"u",v4=typeof Map=="function",y4=typeof Set=="function",b4=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ka(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ka(e[r],t[r]))return!1;return!0}var a;if(v4&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!ka(r.value[1],t.get(r.value[0])))return!1;return!0}if(y4&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(b4&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(x4&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!ka(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var w4=function(t,n){try{return ka(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const C4=En(w4);var k4=function(e,t,n,r,i,a,l,s){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,r,i,a,l,s],u=0;c=new Error(t.replace(/%s/g,function(){return d[u++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},j4=k4;const Ku=En(j4);var F1=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(F1||{}),Ds={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},ep=Object.values(F1),Jd={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},A4=Object.entries(Jd).reduce((e,[t,n])=>(e[n]=t,e),{}),Lt="data-rh",zr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Br=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},S4=e=>{let t=Br(e,"title");const n=Br(e,zr.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=Br(e,zr.DEFAULT_TITLE);return t||r||void 0},N4=e=>Br(e,zr.ON_CHANGE_CLIENT_STATE)||(()=>{}),Us=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),E4=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let a=0;a<i.length;a+=1){const s=i[a].toLowerCase();if(e.indexOf(s)!==-1&&r[s])return n.concat(r)}}return n},[]),P4=e=>console&&typeof console.warn=="function"&&console.warn(e),Ci=(e,t,n)=>{const r={};return n.filter(i=>Array.isArray(i[e])?!0:(typeof i[e]<"u"&&P4(`Helmet: ${e} should be of type "Array". Instead found type "${typeof i[e]}"`),!1)).map(i=>i[e]).reverse().reduce((i,a)=>{const l={};a.filter(c=>{let d;const u=Object.keys(c);for(let g=0;g<u.length;g+=1){const v=u[g],y=v.toLowerCase();t.indexOf(y)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(y==="rel"&&c[y].toLowerCase()==="stylesheet")&&(d=y),t.indexOf(v)!==-1&&(v==="innerHTML"||v==="cssText"||v==="itemprop")&&(d=v)}if(!d||!c[d])return!1;const p=c[d].toLowerCase();return r[d]||(r[d]={}),l[d]||(l[d]={}),r[d][p]?!1:(l[d][p]=!0,!0)}).reverse().forEach(c=>i.push(c));const s=Object.keys(l);for(let c=0;c<s.length;c+=1){const d=s[c],u={...r[d],...l[d]};r[d]=u}return i},[]).reverse()},L4=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},O4=e=>({baseTag:E4(["href"],e),bodyAttributes:Us("bodyAttributes",e),defer:Br(e,zr.DEFER),encode:Br(e,zr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Us("htmlAttributes",e),linkTags:Ci("link",["rel","href"],e),metaTags:Ci("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Ci("noscript",["innerHTML"],e),onChangeClientState:N4(e),scriptTags:Ci("script",["src","innerHTML"],e),styleTags:Ci("style",["cssText"],e),title:S4(e),titleAttributes:Us("titleAttributes",e),prioritizeSeoTags:L4(e,zr.PRIORITIZE_SEO_TAGS)}),H1=e=>Array.isArray(e)?e.join(""):e,T4=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Fs=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(T4(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},tp=(e,t)=>({...e,[t]:void 0}),I4=["noscript","script","style"],j0=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),$1=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),R4=(e,t,n,r)=>{const i=$1(n),a=H1(t);return i?`<${e} ${Lt}="true" ${i}>${j0(a,r)}</${e}>`:`<${e} ${Lt}="true">${j0(a,r)}</${e}>`},M4=(e,t,n=!0)=>t.reduce((r,i)=>{const a=i,l=Object.keys(a).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,u)=>{const p=typeof a[u]>"u"?u:`${u}="${j0(a[u],n)}"`;return d?`${d} ${p}`:p},""),s=a.innerHTML||a.cssText||"",c=I4.indexOf(e)===-1;return`${r}<${e} ${Lt}="true" ${l}${c?"/>":`>${s}</${e}>`}`},""),V1=(e,t={})=>Object.keys(e).reduce((n,r)=>{const i=Jd[r];return n[i||r]=e[r],n},t),z4=(e,t,n)=>{const r={key:t,[Lt]:!0},i=V1(n,r);return[J.createElement("title",i,t)]},ja=(e,t)=>t.map((n,r)=>{const i={key:r,[Lt]:!0};return Object.keys(n).forEach(a=>{const s=Jd[a]||a;if(s==="innerHTML"||s==="cssText"){const c=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:c}}else i[s]=n[a]}),J.createElement(e,i)}),gt=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>z4(e,t.title,t.titleAttributes),toString:()=>R4(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>V1(t),toString:()=>$1(t)};default:return{toComponent:()=>ja(e,t),toString:()=>M4(e,t,n)}}},B4=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const i=Fs(e,Ds.meta),a=Fs(t,Ds.link),l=Fs(n,Ds.script);return{priorityMethods:{toComponent:()=>[...ja("meta",i.priority),...ja("link",a.priority),...ja("script",l.priority)],toString:()=>`${gt("meta",i.priority,r)} ${gt("link",a.priority,r)} ${gt("script",l.priority,r)}`},metaTags:i.default,linkTags:a.default,scriptTags:l.default}},D4=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:a,styleTags:l,title:s="",titleAttributes:c,prioritizeSeoTags:d}=e;let{linkTags:u,metaTags:p,scriptTags:g}=e,v={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:v,linkTags:u,metaTags:p,scriptTags:g}=B4(e)),{priority:v,base:gt("base",t,r),bodyAttributes:gt("bodyAttributes",n,r),htmlAttributes:gt("htmlAttributes",i,r),link:gt("link",u,r),meta:gt("meta",p,r),noscript:gt("noscript",a,r),script:gt("script",g,r),style:gt("style",l,r),title:gt("title",{title:s,titleAttributes:c},r)}},A0=D4,ea=[],W1=!!(typeof window<"u"&&window.document&&window.document.createElement),S0=class{constructor(e,t){mt(this,"instances",[]);mt(this,"canUseDOM",W1);mt(this,"context");mt(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?ea:this.instances,add:e=>{(this.canUseDOM?ea:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?ea:this.instances).indexOf(e);(this.canUseDOM?ea:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=A0({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},U4={},Q1=J.createContext(U4),Wn,_1=(Wn=class extends N.Component{constructor(n){super(n);mt(this,"helmetData");this.helmetData=new S0(this.props.context||{},Wn.canUseDOM)}render(){return J.createElement(Q1.Provider,{value:this.helmetData.value},this.props.children)}},mt(Wn,"canUseDOM",W1),Wn),dr=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${Lt}]`),i=[].slice.call(r),a=[];let l;return t&&t.length&&t.forEach(s=>{const c=document.createElement(e);for(const d in s)if(Object.prototype.hasOwnProperty.call(s,d))if(d==="innerHTML")c.innerHTML=s.innerHTML;else if(d==="cssText")c.styleSheet?c.styleSheet.cssText=s.cssText:c.appendChild(document.createTextNode(s.cssText));else{const u=d,p=typeof s[u]>"u"?"":s[u];c.setAttribute(d,p)}c.setAttribute(Lt,"true"),i.some((d,u)=>(l=u,c.isEqualNode(d)))?i.splice(l,1):a.push(c)}),i.forEach(s=>{var c;return(c=s.parentNode)==null?void 0:c.removeChild(s)}),a.forEach(s=>n.appendChild(s)),{oldTags:i,newTags:a}},N0=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(Lt),i=r?r.split(","):[],a=[...i],l=Object.keys(t);for(const s of l){const c=t[s]||"";n.getAttribute(s)!==c&&n.setAttribute(s,c),i.indexOf(s)===-1&&i.push(s);const d=a.indexOf(s);d!==-1&&a.splice(d,1)}for(let s=a.length-1;s>=0;s-=1)n.removeAttribute(a[s]);i.length===a.length?n.removeAttribute(Lt):n.getAttribute(Lt)!==l.join(",")&&n.setAttribute(Lt,l.join(","))},F4=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=H1(e)),N0("title",t)},np=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:a,metaTags:l,noscriptTags:s,onChangeClientState:c,scriptTags:d,styleTags:u,title:p,titleAttributes:g}=e;N0("body",r),N0("html",i),F4(p,g);const v={baseTag:dr("base",n),linkTags:dr("link",a),metaTags:dr("meta",l),noscriptTags:dr("noscript",s),scriptTags:dr("script",d),styleTags:dr("style",u)},y={},b={};Object.keys(v).forEach(C=>{const{newTags:m,oldTags:h}=v[C];m.length&&(y[C]=m),h.length&&(b[C]=v[C].oldTags)}),t&&t(),c(e,y,b)},ki=null,H4=e=>{ki&&cancelAnimationFrame(ki),e.defer?ki=requestAnimationFrame(()=>{np(e,()=>{ki=null})}):(np(e),ki=null)},$4=H4,rp=class extends N.Component{constructor(){super(...arguments);mt(this,"rendered",!1)}shouldComponentUpdate(t){return!d5(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const i=O4(t.get().map(a=>{const l={...a.props};return delete l.context,l}));_1.canUseDOM?$4(i):A0&&(r=A0(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},xc,V4=(xc=class extends N.Component{shouldComponentUpdate(e){return!C4(tp(this.props,"helmetData"),tp(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return Ku(ep.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${ep.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Ku(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return J.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:i,...a}=r.props,l=Object.keys(a).reduce((c,d)=>(c[A4[d]||d]=a[d],c),{});let{type:s}=r;switch(typeof s=="symbol"?s=s.toString():this.warnOnInvalidChildren(r,i),s){case"Symbol(react.fragment)":t=this.mapChildrenToProps(i,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,l,i);break;default:t=this.mapObjectTypeChildren(r,t,l,i);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof S0)){const i=r;r=new S0(i.context,!0),delete n.helmetData}return r?J.createElement(rp,{...n,context:r.value}):J.createElement(Q1.Consumer,null,i=>J.createElement(rp,{...n,context:i}))}},mt(xc,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),xc);const W4=Y.div`
  position: fixed;
  right: 30px;
  bottom: 25px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: block;
  border-radius: 100%;
  box-shadow: inset 0 0 0 0.1rem rgba(128, 130, 134, 0.25);
  z-index: 9999999;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0.75rem);
  transition: all 0.2s linear, margin-right 0s;

  &.progress-done {
    visibility: visible;
    transform: translateY(0);
  }

  .staco-scroll-top-icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: ${({theme:e})=>e.colors.primary}cc;
    &.v6 {
      color: ${({theme:e})=>e.colors.v6templateColor}cc;
    }
    &.defi {
      color: ${({theme:e})=>e.colors.v8Title}cc;
    }
    &.chatbot {
      color: ${({theme:e})=>e.colors.chatbotPrimary};
    }
    &.crypto {
      color: #01ffb0;
    }
    &.crypto2 {
      color: #4541fe;
    }
    &.corporate {
      color: #5ecc62;
    }
    &.crypto-token {
      color: #bfff0a;
    }
    &.nft {
      color: #5f5fff;
    }
    &.sass {
      color: #0555ff;
    }
  }

  > svg path {
    fill: none;
  }

  > svg.progress-circle path {
    stroke: ${({theme:e})=>e.colors.primary}cc;
    stroke-width: 4;
    box-sizing: border-box;
    transition: all 200ms linear;
  }

  &.v6 {
    > svg.progress-circle path {
      stroke: ${({theme:e})=>e.colors.v6templateColor}cc;
    }
  }
  &.defi {
    > svg.progress-circle path {
      stroke: ${({theme:e})=>e.colors.v8Title}cc;
    }
  }
  &.chatbot {
    > svg.progress-circle path {
      stroke: ${({theme:e})=>e.colors.chatbotPrimary}cc;
    }
  }
  &.crypto {
    > svg.progress-circle path {
      stroke: #01ffb0;
    }
  }
  &.crypto2 {
    > svg.progress-circle path {
      stroke: #4541fe;
    }
  }
  &.corporate {
    > svg.progress-circle path {
      stroke: #5ecc62;
    }
  }
  &.crypto-token {
    > svg.progress-circle path {
      stroke: #bfff0a;
    }
  }
  &.nft {
    > svg.progress-circle path {
      stroke: #5f5fff;
    }
  }
  &.sass {
    > svg.progress-circle path {
      stroke: #0555ff;
    }
  }

  @media (min-width: 1px) {
    &.progress-done {
      opacity: 1;
    }
  }
`;var G1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ip=J.createContext&&J.createContext(G1),Q4=["attr","size","title"];function _4(e,t){if(e==null)return{};var n=G4(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function G4(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rl.apply(this,arguments)}function op(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function il(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?op(Object(n),!0).forEach(function(r){Y4(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):op(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Y4(e,t,n){return t=X4(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X4(e){var t=Z4(e,"string");return typeof t=="symbol"?t:t+""}function Z4(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Y1(e){return e&&e.map((t,n)=>J.createElement(t.tag,il({key:n},t.attr),Y1(t.child)))}function nn(e){return t=>J.createElement(J4,rl({attr:il({},e.attr)},t),Y1(e.child))}function J4(e){var t=n=>{var{attr:r,size:i,title:a}=e,l=_4(e,Q4),s=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),J.createElement("svg",rl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:c,style:il(il({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&J.createElement("title",null,a),e.children)};return ip!==void 0?J.createElement(ip.Consumer,null,n=>t(n)):t(G1)}function q4(e){return nn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"},child:[]}]})(e)}function K4(e){return nn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}function ey(e){return nn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"},child:[]}]})(e)}const ty=({variant:e})=>{const t=N.useRef(null),n=N.useRef(null);N.useEffect(()=>{const i=()=>{const a=n.current.getTotalLength(),l=50;n.current.style.transition="none",n.current.style.WebkitTransition="none",n.current.style.strokeDasharray=a+" "+a,n.current.style.strokeDashoffset=a,n.current.style.transition="stroke-dashoffset 10ms linear",n.current.style.WebkitTransition="stroke-dashoffset 10ms linear";const s=document.body.scrollTop||document.documentElement.scrollTop,c=document.documentElement.scrollHeight-document.documentElement.clientHeight,d=a-s*a/c;n.current.style.strokeDashoffset=d,(document.body.scrollTop||document.documentElement.scrollTop)>=l?t.current.classList.add("progress-done"):t.current.classList.remove("progress-done")};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]);const r=i=>{i.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})};return o.jsxs(W4,{ref:t,className:`${e}`,onClick:r,children:[o.jsx("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:o.jsx("path",{ref:n,d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})}),o.jsx("div",{className:`staco-scroll-top-icon ${e}`,children:o.jsx(ey,{})})]})},ft=({pageTitle:e,scrollVariant:t,children:n})=>o.jsxs(_1,{children:[o.jsxs(V4,{children:[e?o.jsx("title",{children:e}):o.jsx("title",{children:"ARKA"}),o.jsx("link",{rel:"shortcut icon",href:"/favicon.png",type:"image/x-icon"}),o.jsx("link",{rel:"apple-touch-icon",href:"/favicon.png"}),o.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),o.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),o.jsx("link",{href:"https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",rel:"stylesheet"}),o.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",rel:"stylesheet"}),o.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap",rel:"stylesheet"}),o.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap",rel:"stylesheet"}),o.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap",rel:"stylesheet"}),o.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap",rel:"stylesheet"}),o.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",rel:"stylesheet"})]}),o.jsx("div",{className:"staco-overly-bg"}),n,o.jsx(ty,{variant:t})]}),ny=""+new URL("wave-line-Bw4TSJhK.png",import.meta.url).href,ry="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABRCAYAAAApS3MNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7Z2BcdswDEWhXgfwBtUGSTfQCNmg2iDZIN4g2UDZwO4EViZwOoHcCewNULKCThBNO7VrEbrTf3c4+iTZuQAiQIIURDRDmPnZyZ5btk5KJzmBdIjST/FMIA1O2a+i9CcnCyeFkzdlDN9DFgTGRQzgeQ2O506azhgExkV6gGcfOaeN8UJgXJSyi8i5QrmpnMB4OAUvRdGrE+ffYu4L3BgJ0h2LyPn7zn0xAve4OAWvRdnLE+c3p9wXuCE6aMdigRrmJnFPX2imZFlWu2btxLue2ETuQ9qcwLjIcHUfc0EqTmBOkQI1wWu0ixIj/T1OIA0qMG/VMRgiNcGMulLHYIjUBPGiUjEChkiNKL9Rw1pPTSA9gZvybAjYIMbYKGN4w5R0Q7hNs5ROVozk4mlEQdpFdQZ59i6MrkApvwp+t8wIRJGhrFf4d2n97DtXlxyc1E5+OdmJaLpr7+TzPR3P0t+drN0sH1neGKyys8Hxblm14evwvaDmdhKZ69/+SiBGIe27Pij5KS8k7imn/k7Pg984iOxEavf9HYF/R3y4Z0nADj6zlAoSwUapjdmuR5zhQdqagB3cbjDzPBCwgQ0zrnBNQ7ol05qAHRgtTQDud4lj/cES7rOtJQEbVJBmRkraDpXSqAjYMJXegOEr0Q9p35AdNYKH69MFARvUkLUmYAd6wwRwyn9EbzAGsWEicLslBr3BEsyiJwJm0RNAZ1jRG4wIAnRJwAblkrDeYAUPSwPlBNITuKQnAjZwv/K2ImCDmrhhlGSFU/yDigsFgfTw8AnRJYH0cOSZaWAA93tXvTFQa8kCp/gXBGdj1AhpDyMYoYzguerRW/CfBEYoCaQHRpgAgRGWBNITGAGJPAvUEBXuyAJuyzJUaohaEkiLpC22yggYoqaGh1XFMGO2gNttkfoVNDmBdEg80EEZ9YxSw8M09h7DUwMCV9TMKijLP/9IhvBxMUNfqX5eawl8okh5or+94OE74Rqe6/oy9695aVLehdzWx2tm3Qs0cld2Chl9jVcMsFEG2M62F4TwcNfDKG8njBgAI6IYPNwHVPENJk/S254iBljO2g19RuC3fVvShXD/2smKh9V+YYAzHFVClp7g94l2Y/gdtYWkfsrnXZZlB3XtQq69k/ZejnX42ql+Zlx33wMXwO1W9g++jhp3/2V8Whtc7npfaLCgttrvN+rv+N/S+jdU7ajtObjzr+AP8pFXyWNzya0AAAAASUVORK5CYII=",iy="data:image/svg+xml,%3csvg%20width='22'%20height='20'%20viewBox='0%200%2022%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_692)'%3e%3cpath%20d='M19.7324%2018.6577H11.276'%20stroke='%23F7578C'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M1.34277%201.34229V9.79866'%20stroke='%232BD9D9'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M17.0479%203.22144L7.98745%2012.5503'%20stroke='%230095FF'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_692'%3e%3crect%20width='21.0738'%20height='20'%20fill='white'%20transform='matrix(-1%200%200%201%2021.0742%200)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";Y.section`
  padding: 235px 0px 165px 0px;
  background-color: ${({theme:e})=>e.colors.bgHero};
  background-image: url(${ny});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
  overflow: hidden;
  border-radius: 0px 0px 50px 50px;
  
  .shape-img {
    position: absolute;
    z-index: -1;
    &.img-1 {
      top: 25%;
      left: 0;
    }
    &.img-2 {
      bottom: 0;
      left: 40%;
    }
    &.img-3 {
      bottom: 0;
      right: 12%;
    }
  }

  /*-- hero-content style --*/
  .hero-content-text {
    margin-bottom: 48px;
    .uig-banner-title {
      line-height: 1.35;
    }
    p {
      margin-top: 18px;
      font-size: 18px;
      line-height: 36px;
      color: ${({theme:e})=>e.colors.whiteColor};
    }
  }
  .hero-content-list {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    .list-item {
      display: flex;
      align-items: center;
      gap: 10px;
      svg {
        font-size: 18px;
        color: ${({theme:e})=>e.colors.whiteColor};
        position: relative;
        top: -6px;
      }
      p {
        font-size: 14px;
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }
  }

  /*-- hero-img style --*/
  .hero-img {
    text-align: right;
    position: relative;

    &::before {
      position: absolute;
      content: url(${ry});
      bottom: 50px;
      left: 60px;

    }

    img {
      width: 400px;
      height: 500px;
      border-radius: 200px;
    }

    .overlay {
      position: absolute;
      top: -25px;
      left: 50px;
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
  }

  .get-demo-btn {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.badgeColor2};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 120px !important;
      height: 120px !important;
      animation: rotateImg 15s infinite linear;
    }
    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        transition: 0.3s;
      }
    }
    &:hover {
      .icon img {
        transform: rotate(45deg);
      }
    }
  }

  @keyframes rotateImg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /*-- Hero-Section2 --*/
  .hero-section2 {
    min-height: 681px;
    padding-top: 245px;
  }
  .new-hoogle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 9px;
    margin-bottom: 27px;
    span {
      font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
      font-weight: 700;
      line-height: 14px;
      background: ${({theme:e})=>e.colors.badgeColor};
      border-radius: 15px;
      color: ${({theme:e})=>e.colors.whiteColor};
      padding: 8px 12px;
    }
    p {
      font-family: ${({theme:e})=>e.fonts.dmSans};
      font-size: 18px;
      font-weight: 500;
      line-height: 36px;
      color: ${({theme:e})=>e.colors.title};
      margin-top: 0px;
      position: relative;

      &:after {
        content: url(${iy});
        position: absolute;
        right: -20px;
        top: -14px;
        animation: badgeAnimate 2s infinite linear;
      }
    }
  }
  .hero-content2-text {
    .banner-title {
      margin-bottom: 16px;
      line-height: 1.3;
      & .hero-badge {
        background: ${({theme:e})=>e.colors.badgeColor2};
        border-radius: 0px 20px 0px 0px;
        margin-left: 7px;
      }
    }
    & ul {
      padding: 0;
      list-style: none;
      margin-bottom: 49px;
      & li {
        font-weight: 900;
        line-height: 36px;
        color: ${({theme:e})=>e.colors.title};
        svg {
          font-size: 18px;
          margin-right: 10px;
        }
      }
    }
  }
  .hero2-img {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    .hero2-image1 {
      position: absolute;
      left: 20px;
      top: -56px;
      background: ${({theme:e})=>e.colors.heroimg1Bg};
      border-radius: 85px 85px 0px 85px;
      padding: 17px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
    .hero2-image2 {
      position: absolute;
      left: 50px;
      top: 35%;
      background: ${({theme:e})=>e.colors.badgeColor};
      border-radius: 85px 85px 0px 85px;
      transform: rotate(-75deg);
      padding: 8px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        transform: rotate(75deg);
      }
    }
    .hero2-image3 {
      position: absolute;
      top: -50px;
      left: 60%;
      animation: jumpingDown 4.5s infinite;
    }
    .hero2-image4 {
      position: absolute;
      bottom: 100px;
      left: 100px;
      animation: jumpingUp 5s infinite;
    }
  }

  /*-- hero-section end --*/
  @media screen and (max-width: 1199px) {
    .hero-content-text {
      .uig-banner-title {
        font-size: 55px;
      }
    }
    .hero-content-text h2 {
      font-size: 55px;
      font-weight: 700;
      line-height: 80px;
    }
    .hero-img::before {
      left: 0;
    }
    .hero-img .overlay {
      left: 0px;
    }
  }
  @media screen and (max-width: 991px) {
    .hero-content {
      text-align: center;
    }
    .hero-content-text p {
      max-width: 500px;
      margin: auto;
      margin-top: 15px;
    }
    .hero-img {
      text-align: center;
      max-width: 350px;
      margin: auto;
      margin-top: 110px;
      img{
        height: auto;
        width: 100%;
      }
      .overlay {
        top: -13%;
        left: 27%;
      }
    }
    .hero-content-list {
      justify-content: center;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 150px 0px 80px;
    border-radius: 0px 0px 30px 30px;
    .hero-badge{
      &::before{
        top: -32px;
      }
    }
    .shape-img {
      width: 18%;
      &.img-2 {
        bottom: 0;
        left: -15px;
        max-width: 190px;
      }

      &.img-3 {
        bottom: 0px;
        right: -30px;
        max-width: 200px;
      }
    }
  }
`;const oy=Y.div.withConfig({shouldForwardProp:e=>e!=="animate"&&e!=="delay"})`
  opacity: 0;
  transform: translateY(48px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
  transition-delay: ${({delay:e})=>e}ms;

  ${({animate:e})=>e&&Ve`
      opacity: 1;
      transform: translateY(0);
      animation: bounceInUp 0.7s ease-out;
      animation-delay: ${({delay:t})=>t}ms;
    `}

  @keyframes bounceInUp {
    0% {
      transform: translateY(48px);
    }
    60% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`,O=({children:e,delay:t=0})=>{const[n,r]=N.useState(!1),i=N.useRef(null);return N.useEffect(()=>{const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),a.unobserve(l.target))},{threshold:.2});return i.current&&a.observe(i.current),()=>{i.current&&a.unobserve(i.current)}},[]),o.jsx(oy,{ref:i,animate:n,delay:t,children:e})},St=Ve`
  .logo-light {
    display: none;
  }

  .logo-dark {
    display: block;
  }

  .main-menu {
    .submenu {
      li a {
        color: ${({theme:e})=>e.colors.textColor};
        &:hover {
          color: ${({theme:e})=>e.colors.title};
        }
      }
    }
  }
  &.sticky {
    background-color: ${({theme:e})=>e.colors.whiteColor}99;
    box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}0d;
    backdrop-filter: blur(10px);
  }
  .main-menu {
    li a {
      color: ${({theme:e})=>e.colors.title};

      &:hover {
        color: ${({theme:e})=>e.colors.textColor};
      }

      &.active {
        color: ${({theme:e})=>e.colors.title};
      }
    }
  }
  .header-extra {
    li a {
      color: ${({theme:e})=>e.colors.title};
      &:hover {
        color: ${({theme:e})=>e.colors.textColor};
      }
    }
  }

  .dropdown-toggle {
    &::after {
      filter: none;
    }
  }

  .submenu {
    background-color: ${({theme:e})=>e.colors.whiteColor};
    box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}14;
  }
`,ay=Y.header`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;

  .logo-dark {
    display: none;
  }

  .menu-toggler {
    display: none;
  }

  &.sticky {
    position: fixed;
    background-color: ${({theme:e})=>e.colors.whiteColor}99;
    box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}0d;
    backdrop-filter: blur(10px);
    padding: 10px 0px !important;
    top: 0px;
    animation: headerAnimetion 0.3s linear;
    -webkit-animation: headerAnimetion 0.3s linear;

    .logo-light {
      display: none;
    }

    .logo-dark {
      display: block;
    }

    .menu-toggler {
      svg {
        color: ${({theme:e})=>e.colors.blackColor};
      }
    }

    .main-menu {
      li a {
        color: ${({theme:e})=>e.colors.title};
        &:hover {
          color: ${({theme:e})=>e.colors.textColor};
        }
        &.active {
          color: ${({theme:e})=>e.colors.title};
        }
      }
    }

    .header-extra {
      margin: 0;
      padding: 0;
      list-style: none;
      li a {
        color: ${({theme:e})=>e.colors.title};

        &:hover {
          color: ${({theme:e})=>e.colors.textColor};
        }
      }
    }

    .bg-skyblue-btn {
      background: ${({theme:e})=>e.colors.primary};
      color: ${({theme:e})=>e.colors.whiteColor} !important;
      position: relative;
      z-index: 0;
      span {
        color: ${({theme:e})=>e.colors.whiteColor};
      }

      &:hover {
        background: ${({theme:e})=>e.colors.primary};
        span {
          color: ${({theme:e})=>e.colors.whiteColor};
        }

        &::before {
          transform: translateX(0%);
        }
      }

      &::before {
        position: absolute;
        z-index: -1;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        background: ${({theme:e})=>e.colors.blackColor}1a;
        transform: translateX(-100%);
        transition: 0.3s;
      }
    }

    &.sass {
      .bg-white-btn {
        background: #0555ff !important;
        span {
          color: ${({theme:e})=>e.colors.whiteColor};
        }
      }
    }
  }

  &.finance {
    .logo-dark {
      display: none;
    }

    &:not(.sticky) {
      nav {
        background: ${({theme:e})=>e.colors.whiteColor}1a;
        backdrop-filter: blur(2.5px);
        border-radius: 40px;
        height: 80px;
        padding: 10px 15px 15px;
      }
    }

    .main-menu {
      .submenu {
        li a {
          color: ${({theme:e})=>e.colors.textColor};
          &:hover {
            color: ${({theme:e})=>e.colors.title};
          }
        }
      }
    }

    &.sticky {
      background: ${({theme:e})=>e.colors.whiteColor}99;
      box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}0d;
      backdrop-filter: blur(10px);

      .logo-light {
        display: none;
      }
      .logo-dark {
        display: block;
      }
      .main-menu {
        li a {
          color: ${({theme:e})=>e.colors.title};
          &:hover {
            color: ${({theme:e})=>e.colors.textColor};
          }
          &.active {
            color: ${({theme:e})=>e.colors.title};
          }
        }
      }
      .header-extra {
        li {
          a {
            color: ${({theme:e})=>e.colors.title};
            &:hover {
              color: ${({theme:e})=>e.colors.textColor};
            }
          }
          .language-dropdown {
            button {
              border: 1px solid ${({theme:e})=>e.colors.blackColor}19;
              color: ${({theme:e})=>e.colors.title};

              &::after {
                opacity: 1;
                filter: brightness(0);
              }

              img {
                filter: brightness(0);
              }
            }
          }
        }
      }
    }
  }

  &.sass {
    .main-menu {
      .submenu {
        li a {
          color: ${({theme:e})=>e.colors.textColor};
          &:hover {
            color: ${({theme:e})=>e.colors.title};
          }
        }
      }
    }
  }

  &.portfolio {
    .logo-light {
      display: none;
    }

    .logo-dark {
      display: block;
    }

    &.sticky {
      background-color: ${({theme:e})=>e.colors.whiteColor};
      box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}14;
    }

    .header-navbar-container {
      gap: 0px;
    }

    .main-menu {
      margin: auto;
      li a {
        color: ${({theme:e})=>e.colors.title};
        &:hover,
        &:focus {
          color: ${({theme:e})=>e.colors.textColor};
        }
        &.active {
          color: ${({theme:e})=>e.colors.title};
        }
      }
    }
    .header-extra {
      li a {
        color: ${({theme:e})=>e.colors.title};
        &:hover {
          color: ${({theme:e})=>e.colors.textColor};
        }
      }
    }

    .dropdown-toggle {
      &::after {
        filter: none;
      }
    }

    .submenu {
      background-color: ${({theme:e})=>e.colors.whiteColor};
      box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}14;
    }
  }

  &.defi {
    &:not(.sticky) {
      nav {
        background: rgba(46, 46, 53, 0.7);
        backdrop-filter: blur(10px);
        border-radius: 40px;
        height: 80px;
        padding: 10px 15px 15px;
      }
    }

    .main-menu {
      max-width: 450px;
      margin: auto;
      li a {
        color: ${({theme:e})=>e.colors.whiteColor};
        &:hover,
        &:focus {
          color: ${({theme:e})=>e.colors.iconColor};
        }
        &.active {
          color: ${({theme:e})=>e.colors.title};
        }
      }
    }

    .header-extra {
      li a {
        color: ${({theme:e})=>e.colors.whiteColor};
        &:hover {
          color: ${({theme:e})=>e.colors.iconColor};
        }
      }
    }
    &.sticky {
      background: transparent;
      box-shadow: none;
      backdrop-filter: none;
      .defi-header-content {
        background: rgba(46, 46, 53, 0.7);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        border-radius: 40px;
        height: 80px;
        padding: 10px 15px 15px;
      }
      .main-menu {
        li {
          a {
            color: ${({theme:e})=>e.colors.whiteColor};
          }
        }
        .submenu {
          li {
            a {
              color: ${({theme:e})=>e.colors.title};
            }
          }
        }
      }
    }
  }

  &.crypto,
  &.crypto-token,
  &.defi {
    .logo-light {
      display: block;
    }

    .logo-dark {
      display: none;
    }

    &.sticky {
      background-color: ${({theme:e})=>e.colors.whiteColor}10;
      box-shadow: none;
      border-bottom: 1px solid ${({theme:e})=>e.colors.whiteColor}05;
      backdrop-filter: blur(10px);
    }

    .main-menu {
      gap: 40px;
      margin: 0 auto;
      li {
        a {
          color: ${({theme:e})=>e.colors.whiteColor};
          padding: 15px 0px;
          &::after {
            right: -20px;
          }
          &:hover,
          &:focus {
            color: ${({theme:e})=>e.colors.whiteColor};
            opacity: 0.8;
          }
          &.active {
            color: ${({theme:e})=>e.colors.whiteColor};
          }
        }
        ul {
          li {
            a {
              color: ${({theme:e})=>e.colors.title};
            }
            &:hover {
              a {
                color: ${({theme:e})=>e.colors.title};
              }
            }
          }
        }
      }
    }

    .main-menu .submenu {
      background: #20252b !important;
      li {
        a {
          color: ${({theme:e})=>e.colors.whiteColor} !important;
          &:hover {
            color: ${({theme:e})=>e.colors.whiteColor}90 !important;
          }
        }
      }
    }

    .mega-menu-card {
      background: #20252b;
      .mega-menu-column {
        border-color: ${({theme:e})=>e.colors.whiteColor}1a;
        background: #20252b;
        &:nth-last-child(1) {
          border: none;
          background: #2b3036;
          &::after {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.15) 100%
            );
          }
          &::before {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0) 100%
            );
          }
        }
        h5 {
          color: ${({theme:e})=>e.colors.whiteColor};
        }
      }

      .more-demo-card {
        background: #2b3036;
        p {
          color: ${({theme:e})=>e.colors.whiteColor};
        }
        &::after {
          background: linear-gradient(
            180deg,
            rgba(255, 183, 202, 0.2) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        img {
          position: absolute;
          top: 21px;
          right: 20px;
          filter: brightness(0.35);
        }
      }

      &:hover {
        .mega-menu-list {
          li {
            a {
              opacity: 80%;
            }
          }
        }
      }

      .mega-menu-list {
        li {
          padding-right: 0px !important;
          a {
            color: ${({theme:e})=>e.colors.whiteColor} !important;
            &.disable {
              opacity: 100%;
            }
          }
          &.menuTabActive {
            a {
              &:hover {
                color: ${({theme:e})=>e.colors.whiteColor} !important;
              }
            }
          }
        }
      }
    }
  }

  &.header-white {
    background: ${({theme:e})=>e.colors.whiteColor};
  }

  .header-navbar-container {
    padding-left: 0;
    padding-right: 0;
    display: flex;
    align-items: center;
    gap: 60px;
  }

  .header-logo {
    padding: 0 !important;
    margin-right: 0;
    & .dark-logo {
      display: none;
    }
    & .white-logo {
      display: block;
    }
  }

  .header-navbar-content {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
  }

  &.header-white {
    .main-menu {
      & li a {
        color: ${({theme:e})=>e.colors.title};
      }
    }
    .header-extra {
      & li a {
        color: ${({theme:e})=>e.colors.title};
      }
    }
    .header-logo {
      & .white-logo {
        display: none;
      }
      & .dark-logo {
        display: block;
      }
    }
  }

  .navbar {
    padding: 0px;
  }

  &.corporate-header {
    position: relative;
    &.sticky {
      position: fixed;
    }
  }
  &.corporate {
    .main-menu {
      li {
        a {
          font-size: 15px;
        }
      }
    }
    .header-extra {
      gap: 20px;
      a {
        span {
          font-size: 15px;
          margin-left: 4px;
          min-width: max-content;
        }
      }
    }
  }

  .menu-toggler {
    border: 0;
    svg {
      font-size: 30px;
      color: ${({theme:e})=>e.colors.blackColor};
    }
    &:focus {
      box-shadow: none;
    }
  }

  /*-- main-menu style --*/
  .main-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    .megaTablinks,
    .has-submenu {
      padding-right: 15px;
      position: relative;
      &::after {
        content: ">";
        position: absolute;
        top: 16px;
        right: -5px;
        transform: rotate(90deg);
      }
    }
    ul {
      list-style: none;
    }

    li {
      position: relative;
      &:hover {
        .dropdown-toggle {
          &::after {
            transform: rotate(180deg);
          }
        }
        .submenu-box {
          animation: menuAnimetion 0.7s;
          display: block;
          transform: none;
          opacity: 1;
        }
        .submenu {
          width: 250px;
          li {
            a {
              line-height: 333%;
            }
          }
        }
      }
    }

    li a {
      color: ${({theme:e})=>e.colors.whiteColor};
      transition: 0.3s;
      padding: 15px 0px;
      font-weight: 500;
      &:hover,
      &:focus {
        color: ${({theme:e})=>e.colors.whiteColor}b2;
      }

      &.active {
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }

    .dropdown-toggle {
      &::after {
        vertical-align: 0;
        border: 0;
        content: url("../images/icons/dropdown-toggle.svg");
        transition: 0.3s;
        filter: brightness(0) invert(1);
        display: none;
      }
    }
    .submenu-box {
      position: absolute;
      transform-origin: 50% -30px;
      z-index: 100;
      opacity: 0;
      display: none;
      transform: rotateX(-15deg) translateZ(0px);
      top: 35px;
      left: -40px;
      transition: 0.5s;
      padding: 40px;
    }
    .submenu {
      top: 120%;
      left: 0;
      width: 180px;
      background: ${({theme:e})=>e.colors.whiteColor};
      border: 1px solid ${({theme:e})=>e.colors.blackColor}14;
      box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}0d;
      border-radius: 10px;
      padding: 13px 24px;
      li a {
        line-height: 36px;
        padding: 0px !important;
        &:hover {
          color: ${({theme:e})=>e.colors.primary};
        }
      }
    }
  }

  .main-menu .nft-submenu.dark {
    background: #20252b !important;
  }

  /*-- header-extra style --*/
  .header-extra {
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 0;
    padding: 0;
    list-style: none;
    li a {
      color: ${({theme:e})=>e.colors.whiteColor};
      transition: 0.3s;
      &:hover {
        color: ${({theme:e})=>e.colors.whiteColor}b2;
      }
    }
  }
  /*-- header-section end --*/

  /*-- qr code btn start --*/
  .qr-code-btn {
    position: absolute;
    right: 40px;
    &.relative {
      position: inherit;
    }
    .qr-code-btn-inner {
      position: relative;
    }
    .view-qr {
      background: #9fe870;
      border-radius: 50px;
      height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .qr-code-box {
      position: absolute;
      right: 0px;
      transform: translateY(15px);
      width: 330px;
      height: 170px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px -7.5px;
      background: #101722;
      border-radius: 20px;
      -webkit-transform: translateY(10px);
      transform: translateY(10px);
      -webkit-transition: 0.3s;
      transition: 0.3s;
      opacity: 0;
      visibility: hidden;

      .scan-qr {
        padding: 0px 7.5px;
        width: 50%;
      }
    }

    &:hover {
      .qr-code-box {
        //            display: flex;
        -webkit-transform: translateY(15px);
        transform: translateY(15px);
        opacity: 1;
        visibility: visible;
      }
    }
  }
  /*-- qr code btn end --*/

  @-webkit-keyframes headerAnimetion {
    from {
      top: -100px;
    }
    to {
      top: 0px;
    }
  }

  @keyframes headerAnimetion {
    from {
      top: -100px;
    }
    to {
      top: 0px;
    }
  }

  .nav-item {
    &.home-nav {
      position: inherit !important;
      &:hover {
        .mega-menu {
          animation: menuAnimetion 0.7s;
          display: block;
          transform: none;
          opacity: 1;
        }
      }
      a {
        &.megaTablinks {
          color: auto !important;
        }
      }
    }
  }

  .mega-menu {
    padding-top: 30px;
    background: transparent;
    top: 45px;
    left: 0px;
    width: 100%;
    transition: 0.5s;

    position: absolute;
    transform-origin: 50% -30px;
    z-index: 100;
    opacity: 0;
    display: none;
    transform: rotateX(-15deg) translateZ(0px);
  }

  .mega-menu-card {
    background: ${({theme:e})=>e.colors.whiteColor};
    border: 1px solid ${({theme:e})=>e.colors.blackColor}0d;
    box-shadow: 0px 5px 20px ${({theme:e})=>e.colors.blackColor}11;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    .mega-menu-column {
      width: 25%;
      border-right: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      padding: 21px 35px 40px 35px;
      min-height: 450px;
      background: ${({theme:e})=>e.colors.whiteColor};
      position: relative;
      &:nth-last-child(2) {
        border: none;
      }
      &:nth-last-child(1) {
        border: none;
        background: #e3e9f7;
        &::after {
          content: "";
          height: 77px;
          width: 77px;
          background: linear-gradient(
            180deg,
            rgba(5, 85, 255, 0) 0%,
            rgba(5, 85, 255, 0.15) 100%
          );
          right: 20px;
          bottom: 70px;
          position: absolute;
          border-radius: 50%;
          z-index: 0;
        }
        &::before {
          content: "";
          height: 137px;
          width: 137px;
          background: linear-gradient(
            180deg,
            rgba(5, 85, 255, 0.15) 0%,
            rgba(5, 85, 255, 0) 100%
          );
          top: 30px;
          left: 20px;
          position: absolute;
          border-radius: 50%;
          z-index: 0;
        }
      }
    }
  }

  .mega-menu-list {
    padding: 0px;
    margin: 0px;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      max-height: 56px;
      padding-right: 0px !important;
      &::after {
        display: none;
      }
      .tag {
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
        text-transform: uppercase;
        padding: 0px 8px;
        margin-left: 12px;
        border-radius: 10px;

        &.hot {
          background: #fd246a;
          color: ${({theme:e})=>e.colors.whiteColor};
        }

        &.new {
          background: ${({theme:e})=>e.colors.primary};
          color: ${({theme:e})=>e.colors.whiteColor};
        }

        &.trendy {
          background: #9fe870;
          color: ${({theme:e})=>e.colors.title};
        }
      }
      a {
        font-family: ${({theme:e})=>e.fonts.dmSans};
        font-weight: 500;
        font-size: 15px;
        line-height: 50px;
        color: ${({theme:e})=>e.colors.textColor};
        transition: 0.3s;
        &.disable {
          opacity: 70%;
        }

        &.active {
          color: ${({theme:e})=>e.colors.textColor};
        }
      }
      &.menuTabActive {
        a {
          &:hover {
            opacity: 100% !important;
            color: ${({theme:e})=>e.colors.title} !important;
          }
        }
      }
    }
  }

  .mega-menu-img {
    background: #405364;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .mega-menu-tabcontent {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    padding: 50px 40px;
  }

  .megaMenutabcontent {
    display: none;
    animation: fadeEffect 0.4s;
  }

  .more-demo-card {
    background: #faeef1;
    border-radius: 10px;
    padding: 17px 20px;
    position: relative;
    margin-top: 25px;
    p {
      color: ${({theme:e})=>e.colors.title};
      position: relative;
      z-index: 1;
      margin-bottom: 0px;
    }
    &::after {
      content: "";
      position: absolute;
      top: 12px;
      left: 8px;
      height: 33px;
      width: 33px;
      border-radius: 50%;
      background: linear-gradient(
        180deg,
        rgba(255, 183, 202, 0.5) 0%,
        rgba(250, 238, 241, 0.5) 100%
      );
      z-index: 0;
    }
    img {
      position: absolute;
      top: 21px;
      right: 20px;
    }
  }

  @keyframes fadeEffect {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes menuAnimetion {
    from {
      transform-origin: 50% -30px;
      opacity: 0;
      display: none;
      transform: rotateX(-15deg) translateZ(0px);
    }

    to {
      display: block;
      transform: none;
      opacity: 1;
    }
  }

  .submenu-has-submenu {
    position: relative;
    &::after {
      content: ">";
      font-size: 22px;
      position: absolute;
      right: 0px;
      top: 11px;
      transition: 0.3s;
      transform: rotate(0deg);
      color: ${({theme:e})=>e.colors.iconColor};
    }
    .submenu-box2 {
      position: absolute;
      transform-origin: 50% -30px;
      z-index: 100;
      opacity: 0;
      display: none;
      transform: rotateX(-15deg) translateZ(0px);
      top: -20px;
      left: 180px;
      transition: 0.5s;
      padding: 40px;
    }
    .submenu-submenu {
      list-style: none;
      margin: 0px;
      width: 250px;
      background: ${({theme:e})=>e.colors.whiteColor};
      border: 1px solid ${({theme:e})=>e.colors.blackColor}0d;
      box-shadow: 0px 5px 20px ${({theme:e})=>e.colors.blackColor}11;
      border-radius: 15px;
      padding: 13px 24px;
      li {
        line-height: 35px;
      }
    }
    &:hover {
      .submenu-box2 {
        animation: menuAnimetion 0.7s;
        display: block;
        transform: none;
        opacity: 1;
      }
      &::after {
        transform: rotate(90deg);
      }
    }
  }

  .v6-header-content {
    backdrop-filter: none !important;
    .mobile-menu {
      .navbar-toggler {
        img {
          filter: brightness(100);
        }
      }
    }
  }

  .sticky {
    .v6-header-content {
      .mobile-menu {
        .navbar-toggler {
          img {
            filter: brightness(0);
          }
        }
      }
    }
    &.defi {
      .v6-header-content {
        .mobile-menu {
          .navbar-toggler {
            img {
              filter: brightness(100) !important;
            }
          }
        }
      }
    }
  }

  .mobile-menu {
    display: none;
    .navbar-toggler {
      &:focus {
        border: none;
        outline: none;
        box-shadow: none !important;
      }
      svg {
        font-size: 26px;
      }
    }
    .btn-close {
      background-image: none;
      opacity: 1;
    }
    .offcanvas {
      transition: transform 0.6s ease-in-out;
    }

    .js-go-light {
      display: none;
      filter: brightness(0.7);
    }
    .connect-btn {
      margin-left: 20px;
      margin-right: 20px;
      img {
        filter: brightness(0.7);
        margin-right: 8px;
      }
    }
    .light-logo {
      display: none;
    }
    .dark-logo {
      display: block;
    }
  }

  .mobile-menu-body {
    background: ${({theme:e})=>e.colors.whiteColor};
    height: 100vh;
    width: 400px !important;
    padding: 10px 30px;
    .offcanvas-header {
      .btn-close {
        background: none;
        margin-right: 10px;
        margin-bottom: 10px;
        opacity: 1;
        svg {
          color: ${({theme:e})=>e.colors.blackColor};
          font-size: 32px;
        }
      }
    }
    .navbar-nav {
      text-align: center;
      padding-right: 0px !important;
    }
    .mobile-menu-logo {
      min-width: 150px;
    }
    .offcanvas-body {
      overflow-x: hidden;
      padding-top: 20px;
    }
    .mobile-navbar-menu {
      .nav-menu {
        width: 100% !important;
        li {
          .hash-has-sub {
            span {
              top: -10px !important;
            }
            a {
              border: none !important;
            }
          }
        }
      }
    }
  }

  body.dark-scheme,
  html.dark-scheme body,
  .dark {
    .navbar-toggler {
      img {
        filter: brightness(100);
      }
    }
    .mobile-menu-body {
      background: #181d22;
    }
    .light-logo {
      display: block;
    }
    .dark-logo {
      display: none;
    }
    .mobile-navbar-menu {
      .nav-menu li {
        a {
          color: ${({theme:e})=>e.colors.whiteColor};
          border-bottom: 1px solid ${({theme:e})=>e.colors.whiteColor}1a;
        }
        .hash-has-sub {
          a {
            border: none !important;
          }
        }
      }
      a {
        color: ${({theme:e})=>e.colors.whiteColor};
      }
      .connect-btn {
        color: ${({theme:e})=>e.colors.whiteColor};
        img {
          filter: brightness(100);
        }
      }
      .js-go-light {
        filter: brightness(100);
      }
      .sign-in-btn {
        span {
          color: ${({theme:e})=>e.colors.whiteColor};
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .mobile-menu {
      display: block;
    }

    .menu-toggler {
      display: block;
    }
  }

  @media only screen and (max-width: 480px) {
    .mobile-menu-body {
      padding: 10px 15px;
      width: 100% !important;
    }
    .mobile-navbar-menu .nav-buttons {
      padding-right: 0px !important;
      padding-left: 0px !important;
    }
  }

  .header-top {
    background: url(../images/bg/top-header-bg.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 111;
    .header-top-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 35px;
      .header-top-timer {
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 228px;
          width: 100%;
          gap: 30px;
          li {
            color: ${({theme:e})=>e.colors.whiteColor};
            span {
              margin-left: 4px;
            }
          }
        }
      }
      .header-top-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
      }
      p {
        margin-bottom: 0;
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }
  }

  .nav-expanded .staco-home3-canva {
    margin-top: 90px;
  }

  /* responsive style start  */

  @media screen and (max-width: 1850px) {
  }
  @media screen and (max-width: 1699px) {
  }
  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1499px) {
  }
  @media screen and (max-width: 1399px) {
    .header-extra {
      gap: 20px;
    }
  }
  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 1199px) {
    .hero-section-3-header {
      .shape-img {
        &.img-1 {
          left: 0;
        }

        &.img-2 {
          right: 0;
        }
      }
    }
    &.finance {
      .header-navbar-container {
        gap: 30px;
        .main-menu {
          gap: 15px;
        }
      }
      .header-extra {
        gap: 14px;
      }
    }
    .header-extra {
      li {
        &.header-phn-number {
          display: none;
        }
        a {
          &.bg-olive-btn {
            width: 115px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    .header-extra {
      gap: 25px;
      .btn-light-green {
        width: 130px;
      }
    }
    .header-section {
      .main-menu {
        li {
          a {
            font-size: 13px;
          }
        }
      }
      .header-extra {
        li {
          a {
            font-size: 13px;

            img {
              max-width: 18px;
            }
          }
        }
      }
    }
    .main-menu {
      gap: 25px;
    }

    .mega-menu-card {
      .mega-menu-column {
        padding: 20px;
      }
    }
    .mega-menu-list {
      li {
        a {
          font-size: 14px;
        }
        .tag {
          font-size: 11px;
          margin-left: 7px;
        }
      }
    }
    .corporate-header {
      .main-menu {
        gap: 10px;
      }
      .header-extra {
        gap: 18px;
      }
      &.header-section {
        .header-navbar-container {
          gap: 30px;
          padding: 0px 10px !important;
        }
        .header-navbar-content {
          gap: 20px;
        }
      }
    }
    .language-dropdown {
      button {
        font-size: 13px;
        width: 90px;
        height: 44px;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .header-navbar-content {
      position: fixed;
      top: 0;
      left: 0;
      width: 320px;
      height: 100%;
      background-color: black;
      padding: 30px;
      flex-direction: column;
      align-items: flex-start !important;
      justify-content: flex-start !important;
      transition: 0.3s;
      transform: translateX(-155%);
      height: 100vh;

      &.show {
        transform: translateX(0%);
      }
    }

    .main-menu {
      flex-direction: column;
      align-items: flex-start;

      li {
        position: relative;
        a {
          padding: 0px;
        }
        &:hover {
          .dropdown-toggle {
            &::after {
              transform: rotate(0deg);
            }
          }

          .submenu {
            transform: translateY(10px);
          }
        }
      }

      .submenu {
        display: none;
        position: unset;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: transparent;
        border: none;
        box-shadow: none;
        border-top: 0;
        padding: 5px 0;
        transform: translateY(10px);
        transition: 0.3s;
        opacity: 1;
        visibility: visible;

        li a {
          padding: 10px 15px;
        }

        &.show {
          display: block;
        }
      }
    }

    .header-extra {
      margin-top: 30px;
      // flex-direction: column;
      // align-items: flex-start;
    }

    &:not(.v6) {
      background: ${({theme:e})=>e.colors.whiteColor};
      padding: 15px 0px;
    }

    .logo-light {
      display: none;
    }

    .logo-dark {
      display: block !important;
    }

    &.crypto,
    &.crypto-token,
    &.defi {
      background: transparent;

      .logo-light {
        display: none;
      }

      .menu-toggler {
        img {
          filter: brightness(100);
        }
      }
    }

    &.finance {
      padding: 0;
    }

    &.mobile-menu-opened {
      &.crypto,
      &.crypto-token,
      &.defi {
        .menu-toggler {
          img {
            filter: brightness(0);
          }
        }
      }
    }

    &.v2 {
      .header-navbar-content {
        background-color: white;
        box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}14;
      }

      .dropdown-toggle {
        &::after {
          filter: none;
        }
      }

      .submenu {
        background-color: transparent;
        box-shadow: none;
      }
    }

    .qr-code-btn {
      .view-qr {
        height: 40px;
        width: 40px;
        padding: 11px;
      }
    }
    .nav-expanded .header-3-canva {
      margin-top: 85px;
    }
    .nav-expanded .header-section.v6 {
      padding: 0;
    }
    .header-section.v6.sticky .v6-header-content {
      box-shadow: none;
    }
    .nav-expanded .header-section.v6 .v6-header-content,
    .header-section.v6.sticky .v6-header-content {
      border-radius: 0;
    }
    .header-section.v6.sticky .col-md-12,
    .nav-expanded .header-section.v6 .col-md-12 {
      padding: 0 !important;
    }
    .nav-expanded {
      .header-section.defi .defi-header-content {
        background: transparent;
      }
    }

    .mobile-navbar-menu span.submenu-button::before {
      right: 26px;
    }
    .mobile-navbar-menu span.submenu-button::after {
      right: 21px;
    }

    .mobile-navbar-menu .sub-menu li {
      &:last-child {
        a {
          padding-bottom: 18px;
        }
      }
    }
    body:not(.nav-expanded) .header-section.v6:not(.sticky) {
      .logo-light {
        display: block;
      }
      .logo-dark {
        display: none !important;
      }
      .nav-expander {
        img {
          filter: brightness(0) invert(1);
        }
      }
    }

    .header-section.v6.sticky {
      box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}0d;
    }
    body:not(.nav-expanded) .header-section.v6:not(.sticky) {
      .logo-light {
        display: block;
      }
      .logo-dark {
        display: none !important;
      }
      .nav-expander {
        img {
          filter: brightness(0) invert(1);
        }
      }
    }
    .header-section.v6 {
      .v6-header-content {
        height: auto;
      }
      &.sticky {
        background: ${({theme:e})=>e.colors.whiteColor};
        padding: 0;
        .header-section.v6.v6-header-content {
          box-shadow: none;
        }
      }
    }

    .nav-expanded .header-3-canva {
      margin-top: 85px;
    }
    .nav-expanded .header-section.v6 {
      padding: 0;
    }
    .header-section.v6.sticky .v6-header-content {
      box-shadow: none;
    }
    .nav-expanded .header-section.v6 .v6-header-content,
    .header-section.v6.sticky .v6-header-content {
      border-radius: 0;
    }
    .compare-plans-table-section .compare-plans-table .table-body {
      overflow-y: auto;
    }
    .breadcrumb-sec .breadcrumb-title {
      font-size: 40px;
    }
    .header-section.v6.sticky .col-md-12,
    .nav-expanded .header-section.v6 .col-md-12 {
      padding: 0 !important;
    }
    .nav-expanded {
      .header-section.defi .defi-header-content {
        background: transparent;
      }
    }

    .header-section.v1 {
      .main-menu {
        .submenu {
          li {
            a {
              color: ${({theme:e})=>e.colors.whiteColor}b2;
            }
          }
        }
      }
      &.sticky {
        .main-menu {
          li {
            a {
              color: ${({theme:e})=>e.colors.whiteColor}b2;
            }
          }
        }
        .header-extra {
          li {
            a {
              color: ${({theme:e})=>e.colors.whiteColor};
            }
          }
        }
      }
    }

    .header-section {
      &.crypto-header {
        background: transparent;
      }
    }
    .download-wallet-btns {
      a {
        padding: 7px 12px;
        max-width: 170px;
      }
    }

    .header-section {
      &.v6.defi {
        &.sticky {
          background: ${({theme:e})=>e.colors.whiteColor}1a;
          backdrop-filter: blur(2.5px);
          & .v6-header-content {
            background: transparent;
            padding: 18px 15px 15px;
            backdrop-filter: none;
          }
        }
        .nav-expander img:nth-child(1) {
          filter: brightness(100);
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .mobile-navbar-menu .nav-menu,
    .mobile-navbar-menu .nav-buttons {
      width: 540px;
    }
    .header-top .header-top-content .header-top-timer,
    .header-top .header-top-content .header-top-left {
      display: none;
    }
    .header-top .header-top-content .header-top-right {
      padding-top: 5px;
    }
    .header-top {
      .header-top-content {
        flex-direction: column;
      }
    }
  }
  @media screen and (max-width: 575px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 374px) {
  }
  @media screen and (min-width: 768px) {
  }

  /* variant style start */
  ${({variant:e})=>e==="v1"&&Ve`
      .logo-dark {
        display: none;
      }
      .main-menu {
        .submenu {
          li a {
            color: ${({theme:t})=>t.colors.textColor};
            &:hover {
              color: ${({theme:t})=>t.colors.title};
            }
          }
        }
      }
      &.sticky {
        background-color: ${({theme:t})=>t.colors.whiteColor}99;
        box-shadow: 0px 10px 15px ${({theme:t})=>t.colors.blackColor}0d;
        backdrop-filter: blur(10px);

        .menu-toggler {
          svg {
            color: ${({theme:t})=>t.colors.blackColor};
          }
        }

        .header-extra {
          margin: 0;
          padding: 0;
          list-style: none;
          li a {
            color: ${({theme:t})=>t.colors.title};

            &:hover {
              color: ${({theme:t})=>t.colors.textColor};
            }
          }
        }
        .main-menu {
          li a {
            color: ${({theme:t})=>t.colors.title};
            &:hover {
              color: ${({theme:t})=>t.colors.textColor};
            }
          }
        }

        .dropdown-toggle {
          &::after {
            filter: none;
          }
        }
        .bg-white-btn {
          background: ${({theme:t})=>t.colors.primary};
          color: ${({theme:t})=>t.colors.whiteColor} !important;
          position: relative;
          z-index: 0;
          span {
            color: ${({theme:t})=>t.colors.whiteColor};
          }
        }
        .logo-light {
          display: none;
        }
        .logo-dark {
          display: block;
        }
      }
    `}

  ${({variant:e})=>e==="v2"&&Ve`
      ${St}
    `} 

    ${({variant:e})=>e==="app"&&Ve`
      ${St}
    `} 

  ${({variant:e})=>e==="v3"&&Ve`
      padding-top: 20px;

      ${St}
    `} 
    
  ${({variant:e})=>e==="v4"&&Ve`
      ${St}

      .header-extra {
        li a {
          color: ${({theme:t})=>t.colors.whiteColor};
          &:hover {
            color: ${({theme:t})=>t.colors.whiteColor};
          }
        }
      }
      &.sticky {
        .header-extra {
          li a {
            color: ${({theme:t})=>t.colors.title};
            &:hover {
              color: ${({theme:t})=>t.colors.textColor};
            }
          }
        }
        .talk-btn {
          background-color: ${({theme:t})=>t.colors.primary};
          &:hover,
          &:focus {
            color: ${({theme:t})=>t.colors.whiteColor} !important;
            span {
              color: ${({theme:t})=>t.colors.whiteColor};
            }
          }
        }
      }
    `} 

  ${({variant:e})=>e==="v5"&&Ve`
      top: 35px;
      padding: 15px 0px;

      ${St}

      .main-menu {
        margin: 0 auto;
      }
    `} 
  
  ${({variant:e})=>e==="main-header"&&Ve`
      ${St}

      position: absolute;
      background: ${({theme:t})=>t.colors.whiteColor};
      border: 1px solid ${({theme:t})=>t.colors.blackColor}26;
    `} 

    ${({variant:e})=>e==="chatbot"&&Ve`
      ${St}

      background: ${({theme:t})=>t.colors.whiteColor};
    `}
    

    ${({variant:e})=>e==="corporate"&&Ve`
      ${St}

      background: ${({theme:t})=>t.colors.whiteColor};
    `}
    
    ${({variant:e})=>e==="account"&&Ve`
      ${St}

      background: ${({theme:t})=>t.colors.whiteColor};
    `}
    
    ${({variant:e})=>e==="newsletter"&&Ve`
      ${St}

      background: ${({theme:t})=>t.colors.whiteColor};
    `}

    ${({variant:e})=>e==="crypto2"&&Ve`
      ${St}
    `} /* variant style end */
`,Hs=[{title:"Inicio",url:"/"},{title:"FAQS",url:"/faq"},{title:"Contacto",url:"/contacto"}],ly=""+new URL("main_demo-min-X6Z3Dadf.png",import.meta.url).href,sy=""+new URL("customer_services-min-DBdfxXD4.png",import.meta.url).href,cy=""+new URL("team_collaboration-min-DRjHPMTa.png",import.meta.url).href,dy=""+new URL("saas_landint_one-min-Doyken7-.png",import.meta.url).href,uy=""+new URL("saas_landint_two-min-BJzDzH9X.png",import.meta.url).href,py=""+new URL("app_landing-min-CYe1Pir0.png",import.meta.url).href,fy=""+new URL("corporate-min-DvLUrtNq.png",import.meta.url).href,hy=""+new URL("crypto__wallet_one-min--styF0qm.png",import.meta.url).href,my=""+new URL("crypto__wallet_two-min-CzNTdANO.png",import.meta.url).href,gy=""+new URL("crypto_token-min-tFZH5A77.png",import.meta.url).href,xy=""+new URL("defi_landing-min-DWX6yGQ9.png",import.meta.url).href,vy=""+new URL("newsletter-min-u_S2beWB.png",import.meta.url).href,yy=""+new URL("chatbot-min-BTutxw4R.png",import.meta.url).href,by=""+new URL("business-min-CroDbF5B.png",import.meta.url).href,wy=""+new URL("finance-min-B1o2MCjr.png",import.meta.url).href,Cy=""+new URL("accounting-min-vavtgYWd.png",import.meta.url).href,ky=""+new URL("portfolio-min-DTHQdixz.png",import.meta.url).href,jy="data:image/svg+xml,%3csvg%20width='60'%20height='47'%20viewBox='0%200%2060%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='60'%20height='8'%20rx='4'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20x='27'%20y='13'%20width='33'%20height='4'%20rx='2'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20y='25'%20width='60'%20height='2'%20rx='1'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20x='9'%20y='30'%20width='51'%20height='2'%20rx='1'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20x='4'%20y='35'%20width='56'%20height='2'%20rx='1'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20x='14'%20y='40'%20width='46'%20height='2'%20rx='1'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20x='10'%20y='45'%20width='50'%20height='2'%20rx='1'%20fill='white'%20fill-opacity='0.7'/%3e%3c/svg%3e",$s=[{column:1,menuList:[{title:"Main Demo",dataMenu:"mainDemo",url:"/"},{title:"Customer Service",dataMenu:"CustomerService",url:"/customer-service"},{title:"Team Collaboration",dataMenu:"Team",url:"/team-collaboration"},{title:"SaaS Landing One",dataMenu:"sass1",url:"/sass-landing"},{title:"SaaS Landing Two",dataMenu:"sass2",url:"/sass-landing-two",tag:"new"},{title:"App Landing",dataMenu:"app",url:"/app-landing"},{title:"Corporate",dataMenu:"corporate",url:"/corporate"}]},{column:2,menuList:[{title:"Crypto Wallet One",dataMenu:"cryptoWallet1",url:"/crypto-wallet-one",tag:"hot"},{title:"Crypto Wallet Two",dataMenu:"cryptoWallet2",url:"/crypto-wallet-two",tag:"trendy"},{title:"Crypto Token",dataMenu:"cryptoToken",url:"/crypto-token"},{title:"DeFi Landing",dataMenu:"defi",url:"/defi-landing",tag:"hot"},{title:"Newsletter",dataMenu:"newsletter",url:"/newsletter"},{title:"Chat Bot Landing",dataMenu:"chatbot",url:"/chatbot"},{title:"Business",dataMenu:"business",url:"/business"}]},{column:3,demoCard:{title:"More Demo",title2:"Coming Soon...",img:jy},menuList:[{title:"Finance",dataMenu:"finance",url:"/finance",tag:"trendy"},{title:"Accounting",dataMenu:"accounting",url:"/accounting"},{title:"Portfolio",dataMenu:"portfolio",url:"/portfolio"}]},{column:4,demoImgList:[{dataMenu:"mainDemo",img:ly},{dataMenu:"CustomerService",img:sy},{dataMenu:"Team",img:cy},{dataMenu:"sass1",img:dy},{dataMenu:"sass2",img:uy},{dataMenu:"app",img:py},{dataMenu:"corporate",img:fy},{dataMenu:"cryptoWallet1",img:hy},{dataMenu:"cryptoWallet2",img:my},{dataMenu:"cryptoToken",img:gy},{dataMenu:"defi",img:xy},{dataMenu:"newsletter",img:vy},{dataMenu:"chatbot",img:yy},{dataMenu:"business",img:by},{dataMenu:"finance",img:wy},{dataMenu:"accounting",img:Cy},{dataMenu:"portfolio",img:ky}]}],Ay=({megaMenuClass:e})=>(N.useEffect(()=>{if(document.querySelector(".home-nav")){let n=function(){s.forEach(c=>{c.style.display="none"})},r=function(c){const d=l.querySelector(`#${c}`);d.style.display="block"},i=function(){const c=l.querySelector("#primaryText");c.style.display="block"};const a=document.querySelectorAll(".megaTablinks"),l=document.querySelector(".mega-menu-tabcontent"),s=document.querySelectorAll(".megaMenutabcontent");a.forEach(c=>{const d=c.getAttribute("data-menu");c.addEventListener("mouseover",()=>{c.classList.add("menuTabActive"),n(),r(d)}),c.addEventListener("mouseout",()=>{c.classList.remove("menuTabActive"),n(),i()})})}},[]),o.jsx("div",{className:"mega-menu",children:o.jsx("div",{className:`mega-menu-card ${e}`,children:$s==null?void 0:$s.map((t,n)=>{var r,i;return o.jsxs("div",{className:"mega-menu-column",children:[t.menuList&&o.jsx("ul",{className:"mega-menu-list",children:(r=t.menuList)==null?void 0:r.map((a,l)=>o.jsxs("li",{className:"megaTablinks","data-menu":a.dataMenu,children:[o.jsx(re,{to:a.url,children:a.title}),a.tag&&o.jsx("div",{className:`tag ${a.tag}`,children:a.tag})]},l))}),t.demoCard&&o.jsxs("div",{className:"more-demo-card",children:[o.jsx("p",{children:t.demoCard.title}),o.jsx("p",{children:t.demoCard.title2}),o.jsx("img",{src:t.demoCard.img,alt:"img"})]}),t.demoImgList&&o.jsxs("div",{className:"mega-menu-tabcontent",children:[o.jsx("div",{id:"primaryText",className:"megaMenutabcontent",children:o.jsx("h5",{className:"wt-700 mt-3",children:"37 HTML Pages with trendy design"})}),(i=t.demoImgList)==null?void 0:i.map((a,l)=>o.jsx("div",{id:a.dataMenu,className:"megaMenutabcontent",children:o.jsx("div",{className:"mega-menu-img",children:o.jsx("img",{src:a.img,alt:""})})},l))]})]},n)})})})),Sy="data:image/svg+xml,%3csvg%20width='13'%20height='8'%20viewBox='0%200%2013%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.50012%201.49997L6.50012%206.49997L11.5001%201.49997'%20stroke='%23111111'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";Y.div`
  position: relative;
  max-width: 100px;

  &.open {
    .list {
      opacity: 1;
      visibility: visible;
      transform: scale(1) translateY(0);
    }
  }

  &:hover {
    button {
      &::after {
        top: 14px;
        transform: rotate(180deg);
      }
    }

    .list {
      opacity: 1;
      visibility: visible;
      transform: scale(1) translateY(0);
    }
  }

  button {
    background: transparent;
    border: 1px solid ${({theme:e})=>e.colors.blackColor}19;
    border-radius: 50px;
    width: 100px;
    height: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    padding: 10px 14px;
    color: ${({theme:e})=>e.colors.title};
    position: relative;

    &::after {
      content: url(${Sy});
      position: absolute;
      top: 12px;
      right: 11px;
      opacity: 0.4;
      transition: 0.3s;
    }

    img {
      width: 21px;
      height: 21px;
      border-radius: 50%;
      margin-right: 7.5px;
    }
  }

  .list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 10;
    margin-top: 10px;
    background: ${({theme:e})=>e.colors.whiteColor};
    border: 1px solid ${({theme:e})=>e.colors.blackColor}0d;
    box-shadow: 0px 5px 20px ${({theme:e})=>e.colors.blackColor}11;
    padding: 10px 0;
    transform: scale(0.75) translateY(-20px);
    opacity: 0;
    visibility: hidden;
    border-radius: 15px;
    transition: all 0.2s ease-in-out;
    width: 200px;
    height: auto;
    right: 0;
    left: unset;
    top: 130%;
    list-style: none;
    margin: 0px;
    padding: 28px 30px 30px 30px;
  }

  .list-item {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: ${({theme:e})=>e.colors.textColor} !important;
    line-height: 333%;

    &:hover {
      color: ${({theme:e})=>e.colors.title};
      background-color: transparent;
    }
    .select {
      display: none;
    }
  }

  &.finance {
    button {
      background: transparent;
      border: 1px solid ${({theme:e})=>e.colors.whiteColor}30;
      color: ${({theme:e})=>e.colors.whiteColor};
      position: relative;

      &::after {
        opacity: 1;
        filter: brightness(100);
      }

      img {
        width: 21px;
        height: 21px;
        border-radius: 50%;
        margin-right: 7.5px;
        filter: brightness(100);
      }
    }
  }
`;const Vs=[{title:"Inicio",url:"/"},{title:"FAQS",url:"/faq"},{title:"Contacto",url:"/contacto"}],Ny=Y.div`
  position: fixed;
  z-index: 99999;

  .offcanvasStaco-body {
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
      /* Safari and Chrome */
    }
  }

  .btn-close {
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .nav-menu {
    margin: 0 auto;
    padding: 0;
    padding: 0;
    list-style: none;

    li {
      overflow: hidden;
    }

    li a,
    li button {
      border-bottom: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      display: block;
      text-transform: capitalize;
      color: ${({theme:e})=>e.colors.title};
      line-height: 20px;
      padding: 16px 0;
      width: 100%;
      transition: 0.3s;
      font-weight: 500;
      font-size: 15px;
    }
    li li a,
    li li button {
      border-bottom: 1px solid transparent;
      font-size: 14px;
      color: ${({theme:e})=>e.colors.textColor};
      line-height: 20px;
      padding: 7px 20px;
    }
    li {
      position: relative;
      &.active {
        a {
          border-bottom: 1px solid transparent;
        }
        .sub-menu {
          background-color: ${({theme:e})=>e.colors.blackColor}0a;
        }
      }
    }
  }

  .dropdown-item {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      top: 19px;
      right: 26px;
      width: 2px;
      height: 12px;
      background-color: ${({theme:e})=>e.colors.iconColor};
      transition: 0.3s;
    }

    &::after {
      position: absolute;
      content: "";
      top: 24px;
      right: 21px;
      width: 12px;
      height: 2px;
      background-color: ${({theme:e})=>e.colors.iconColor};
    }

    &.submenu-opened {
      &::before {
        background-color: #0086e5;
        transform: rotate(-90deg);
      }

      &::after {
        display: none;
      }
    }
  }

  .sub-menu {
    position: relative;
    left: 0;
    width: 100%;
    height: 0;
    margin: 0;
    text-align: left;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: ${({theme:e})=>e.colors.blackColor}0a;
    transition: 0.3s;

    li a {
      border-bottom: 1px solid transparent;
    }

    &.open {
      height: auto;
      padding-top: 10px;
    }
  }

  .submenu-button {
    position: absolute;
    z-index: 99;
    right: 0;
    top: 5px;
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    width: 100%;
    cursor: pointer;
    top: 0;
    height: 50px;
    &::before,
    &::after {
      position: absolute;
      top: 24px;
      right: 21px;
      width: 20px;
      height: 2px;
      display: block;
      background: ${({theme:e})=>e.colors.iconColor};
      z-index: 2;
      content: "";
      right: 2px;
      width: 12px;
      transition: 0.3s;
    }
    &::before {
      width: 2px;
      height: 12px;
      right: 26px;
      top: 19px;
    }
    em {
      display: block;
      position: absolute;
      right: 0;
      border-radius: 4px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .submenu-button.submenu-opened {
    &::before {
      background: #0086e5;
      transform: rotate(-90deg);
    }
    &::after {
      display: none;
    }
  }

  ul ul li,
  li:hover > ul > li {
    height: auto;
  }
`,E0=""+new URL("logo-ARKA-Dh1m9UFc.png",import.meta.url).href,Ey=()=>{const[e,t]=N.useState(null),[n,r]=N.useState(null),i=l=>{t(e===l?null:l),r(null)},a=l=>{r(n===l?null:l)};return o.jsxs(Ny,{className:"offcanvas offcanvas-start",tabIndex:"-1",id:"offcanvasStaco","aria-labelledby":"offcanvasStacoLabel",children:[o.jsxs("div",{className:"offcanvas-header",children:[o.jsx("a",{className:"navbar-brand header-logo",href:"/",children:o.jsx("img",{src:E0,alt:"logo"})}),o.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),o.jsx("div",{className:"offcanvas-body offcanvasStaco-body",children:o.jsx("ul",{className:"nav-menu ",children:Vs==null?void 0:Vs.map((l,s)=>{var d,u,p;let c=!1;return((d=l.subMenus)==null?void 0:d.length)>0&&(c=!0),o.jsxs("li",{className:c?"has-submenu":"",children:[c?o.jsx("button",{className:`${c?"dropdown-item":""} ${e===s?"submenu-opened":""}`,onClick:()=>i(s),children:l.title}):o.jsx("a",{href:l.url,children:l.title}),((u=l.subMenus)==null?void 0:u.length)>0&&o.jsx("ul",{className:`sub-menu ${e===s?"open":""}`,children:(p=l.subMenus)==null?void 0:p.map((g,v)=>{var b,C,m;let y=!1;return((b=g.subMenuChilds)==null?void 0:b.length)>0&&(y=!0),o.jsxs("li",{className:y?"submenu-has-submenu":"",children:[y?o.jsx("button",{className:`${y?"dropdown-item":""} ${n===v?"submenu-opened":""}`,onClick:()=>a(v),children:g.title}):o.jsx("a",{href:g.url,children:g.title}),((C=g.subMenuChilds)==null?void 0:C.length)>0&&o.jsx("ul",{className:`sub-menu ${n===v?"open":""}`,children:(m=g.subMenuChilds)==null?void 0:m.map((h,f)=>o.jsx("li",{children:o.jsx("a",{href:h.url,children:h.title})},f))})]},v)})})]},s)})})})]})},X1=""+new URL("logo-dark-XUdCVQhT.svg",import.meta.url).href,ap=""+new URL("logo-8-De3vMMC8.svg",import.meta.url).href,Py="data:image/svg+xml,%3csvg%20width='20'%20height='16'%20viewBox='0%200%2020%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='20'%20height='2'%20fill='%23444444'/%3e%3crect%20x='8'%20y='7'%20width='12'%20height='2'%20fill='%23444444'/%3e%3crect%20x='4'%20y='14'%20width='16'%20height='2'%20fill='%23444444'/%3e%3c/svg%3e",rn=({variant:e,...t})=>{const[n,r]=N.useState(!1),[i,a]=N.useState(!1),l=N.useRef(null);let s=0;const c=()=>{const d=document.body;let u=document.documentElement.scrollTop||document.body.scrollTop;u-s>0||u==0?(l.current.classList.remove("sticky"),d.classList.remove("nav-expanded"),r(!1)):l.current.classList.add("sticky"),s=u};return N.useEffect(()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}),[]),o.jsxs(o.Fragment,{children:[o.jsx(ay,{ref:l,className:`header-section ${e} ${n?"mobile-menu-opened":""}`,variant:e,...t,children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-md-12",children:o.jsx("nav",{className:"navbar navbar-expand-lg",children:o.jsxs("div",{className:"container header-navbar-container",children:[o.jsxs(re,{className:"navbar-brand header-logo",to:"/",children:[e!="corporate"&&e!="defi"&&e!="finance"&&e!="account"&&o.jsxs(o.Fragment,{children:[o.jsx("img",{src:logo.png,alt:"logo",className:"logo-light"}),o.jsx("img",{src:logo.png,alt:"logo",className:"logo-dark"})]}),e==="defi"&&o.jsxs(o.Fragment,{children:[o.jsx("img",{src:E0,alt:"logo",className:"logo-light",width:"40%"}),o.jsx("img",{src:E0,alt:"logo",className:"logo-dark",width:"40%"})]}),e==="account"&&o.jsxs(o.Fragment,{children:[o.jsx("img",{src:ap,alt:"logo",className:"logo-light"}),o.jsx("img",{src:ap,alt:"logo",className:"logo-dark"})]})]}),o.jsx("div",{className:"menu-toggler",children:o.jsx("button",{className:"btn",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasStaco","aria-controls":"offcanvasStaco",children:o.jsx("img",{src:Py,alt:"menu"})})}),o.jsxs("div",{className:"collapse navbar-collapse header-navbar-content",children:[o.jsx("ul",{className:"navbar-nav main-menu",children:Hs==null?void 0:Hs.map((d,u)=>{var p,g,v;return o.jsxs("li",{className:d.hasMegaMenu?"nav-item home-nav":"nav-item",children:[o.jsx(re,{className:` ${d.hasMegaMenu?"nav-link megaTablinks":"nav-link"}  ${((p=d.subMenus)==null?void 0:p.length)>0?"has-submenu":""}`,to:d.url,children:d.title}),(d==null?void 0:d.hasMegaMenu)&&o.jsx(Ay,{}),((g=d.subMenus)==null?void 0:g.length)>0&&o.jsx("div",{className:"submenu-box",children:o.jsx("ul",{className:"submenu",children:(v=d.subMenus)==null?void 0:v.map((y,b)=>{var m,h,f;let C=!1;return((m=y.subMenuChilds)==null?void 0:m.length)>0&&(C=!0),o.jsxs("li",{className:C?"submenu-has-submenu":"",children:[o.jsx(re,{className:"dropdown-item",to:y.url,children:y.title}),((h=y.subMenuChilds)==null?void 0:h.length)>0&&o.jsx("div",{className:"submenu-box2",children:o.jsx("ul",{className:"submenu submenu-submenu",children:(f=y.subMenuChilds)==null?void 0:f.map((x,j)=>o.jsx("li",{children:o.jsx(re,{to:x.url,children:x.title})},j))})})]},b)})})})]},u)})}),o.jsxs("ul",{className:"header-extra",children:[e!="corporate"&&e!="defi"&&e!="finance"&&o.jsx("li",{children:o.jsx(re,{to:"/sign-in",className:`${e}`,children:"Sign in"})}),e==="defi"&&o.jsx("li",{children:o.jsxs("a",{href:"https://app.arkaltd.io/",className:"defi-header-btn btn-hov-effect dark",children:[o.jsxs("span",{className:"btn-inner",children:[o.jsx("span",{className:"btn-normal-text",children:"Abrir App"}),o.jsx("span",{className:"btn-hover-text",children:"Abrir App"})]}),o.jsx("span",{className:"round-shape"})]})}),(e==="corporate"||e==="newsletter"||e==="finance")&&o.jsx(o.Fragment,{})]})]})]})})})})})}),o.jsx(Ey,{})]})};Y.section`
  /*-- brands-section start --*/
  padding: 93px 0 0 0;
  .container {
    position: relative;
  }
  &.newslater {
    padding: 60px 20px;
    .brands-section-title {
      background: #eef2f5;
    }
  }
  &.corporate-brands-section {
    padding: 128px 0px 124px 0px;
    .brands-slider {
      display: flex;
      align-items: center;
    }
  }

  /*-- brands-section-title style --*/
  .brands-section-title {
    margin-bottom: 25px;
    text-align: center;
    &.brands-section-title-index2 {
      text-align: left;
    }
    h2 {
      font-size: 18px;
      font-weight: 800;
      line-height: 30px;
    }
    &.brands-section-title-index8 {
      text-align: left;
      position: absolute;
      left: 0px;
      top: 2px;
      background: ${({theme:e})=>e.colors.whiteColor};
      z-index: 2;
      padding-right: 30px;
    }
  }

  /*-- brands-slider style --*/
  .brands-slider {
    position: relative;
    width: 100%;
    height: 50px;
    overflow: hidden;

    &-container {
      width: calc(200px * 12);
      display: flex;
      align-items: center;
      gap: 0px;
      animation: smoothSlider 25s infinite linear;
    }
    .slider-item {
      width: 200px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &::before {
      position: absolute;
      z-index: 1;
      content: "";
      top: 0;
      left: 0;
      width: 120px;
      height: 100%;
      background: linear-gradient(
        270deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: rotate(-180deg);
    }

    &::after {
      position: absolute;
      z-index: 1;
      content: "";
      top: 0;
      right: 0;
      width: 120px;
      height: 100%;
      background: linear-gradient(
        270deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    &.sass {
      &::after {
        background: linear-gradient(
          270deg,
          #f2f6fd 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      &::before {
        background: linear-gradient(
          270deg,
          #f8fbff 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }
    &.v8 {
      height: 36px;
      &::before {
        left: 100px;
      }
      .slider-item {
        height: 36px;
        max-width: 178px;
        img {
          max-width: 105px;
        }
      }
    }

    &.newslater {
      height: 36px;
      &::before {
        left: 330px;
        background: linear-gradient(
          270deg,
          #eef2f5 0%,
          rgba(238, 242, 245, 0) 100%
        );
        transform: rotate(180deg);
      }
      &::after {
        background: linear-gradient(
          270deg,
          #eef2f5 0%,
          rgba(238, 242, 245, 0) 100%
        );
      }
      .slider-item {
        height: 36px;
        max-width: 178px;
        img {
          max-width: 105px;
        }
      }
    }
  }
  @keyframes smoothSlider {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-200px * 6));
    }
  }
  /*-- brands-section end --*/

  @media screen and (max-width: 1199px) {
    &.v8 {
      padding: 40px 20px;
      margin-bottom: 72px;
    }
    &.corporate-brands-section {
      padding: 100px 0px;
    }
  }
  @media screen and (max-width: 991px) {
    &.corporate-brands-section {
      padding: 90px 0px;
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 70px;
    &.newslater {
      padding: 40px 20px;
      .brands-section-title {
        position: inherit;
      }
    }
    &.corporate-brands-section {
      padding: 60px 0px;
    }
    &.sass {
      padding-top: 40px;
    }
    .brands-slider-container {
      gap: 50px;
    }
    .slider-item {
      width: 95px;
      height: 18px;
    }
    &.newslater::before {
      left: 0px;
    }
  }
  @media screen and (max-width: 374px) {
    .brands-section-title h2 {
      font-size: 16px;
    }
    .brands-section-title h2 {
      font-size: 16px;
    }
  }
`;const Z1=""+new URL("1-WTDuPtA3.png",import.meta.url).href,J1=""+new URL("2-JVNF_4vl.png",import.meta.url).href,q1=""+new URL("3-fVWXug74.png",import.meta.url).href,Ly="data:image/png;base64,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",Oy="data:image/png;base64,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",Ty="data:image/png;base64,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";Y.section`
  padding: 118px 0 40px 0;
  
  .feature-card {
    margin-bottom: 30px;
    padding: 30px;
    text-align: center;
    transition: 0.3s;
    border-radius: 30px;
    position: relative;
    z-index: 0;

    .feature-card-shape {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 0.3s;
      img {
        width: 100%;
        height: 100%;
      }
    }

    &-icon {
      margin-bottom: 30px;
      img {
        width: 40px;
        height: 40px;
      }
    }
    h5 {
      margin-bottom: 10px;
      font-weight: 600;
    }
  }
  .staco-hover-effect:hover .feature-card:hover .feature-card-shape,
  .staco-hover-effect:not(:hover) .feature-card.active .feature-card-shape {
    opacity: 1;
  }

  @media screen and (max-width: 1200px) {
    .feature-card {
      padding: 30px 20px 20px 20px;
    }
    .feature-card-icon {
      margin-bottom: 10px;
    }
    .feature-card-text {
      h5 {
        font-size: 18px;
      }
      p {
        font-size: 13px;
        line-height: 24px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .feature-card {
      margin-bottom: 0px;
    }
    .feature-card-text {
      max-width: 100%;
      margin: 0 auto;
      p {
        max-width: 288px;
        margin: auto;
        line-height: 26px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0px 0px 0px;
    .feature-card {
      h2 {
        margin-bottom: 5px;
      }

      p {
        font-size: 15px;
        line-height: 24px;
      }

      &-icon {
        margin-bottom: 16px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    padding: 60px 0 20px 0;
  }
  @media screen and (max-width: 480px) {
    .feature-card-icon {
      margin-bottom: 15px;

      img {
        width: 30px;
        height: 30px;
      }
    }
    .feature-card-text {
      h2 {
        margin-bottom: 5px;
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
  @media screen and (max-width: 374px) {
    .feature-card-text {
      max-width: 100%;
    }
  }
`;const Iy=Y.div`
  margin-bottom: 38px;

  p {
    margin-bottom: 5px;
  }

  &.v8 {
    p {
      color: ${({theme:e})=>e.colors.v8Title};
      font-family: ${({theme:e})=>e.fonts.dmSans};
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0.2em;
      margin-bottom: 10px;
    }
    &.title2 {
      p {
        color: ${({theme:e})=>e.colors.v8Title2};
      }
      h2 {
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }
  }

  .sub-title {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    color: ${({theme:e})=>e.colors.primary};
    letter-spacing: 0.2em;
    margin-bottom: 12px;
    display: block;
  }

  .green-color {
    color: ${({theme:e})=>e.colors.primary6Deep};
  }

  .green-lite {
    color: ${({theme:e})=>e.colors.v8Title2};
  }

  .title {
    line-height: 60px;
    font-weight: 800;
    .caveat {
      font-size: 50px;
      line-height: 50px;
    }
  }

  h6 {
    margin-top: 12px;
  }

  h5 {
    font-family: ${({theme:e})=>e.fonts.dmSans};
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    margin-top: 12px;
  }

  .love-icon {
    svg {
      color: ${({theme:e})=>e.colors.badgeColor};
    }
  }

  &.crypto {
    .sub-title {
      color: #01ffb0;
    }
    .title {
      color: ${({theme:e})=>e.colors.whiteColor};
    }
  }

  &.crypto2 {
    .sub-title {
      color: #4541fe;
    }
    .title {
      color: ${({theme:e})=>e.colors.title};
    }
  }

  &.crypto2 {
    &.title-green {
      .sub-title {
        color: #9fe870;
      }
      .title {
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }
  }

  &.corporate {
    .sub-title {
      color: #5ecc62;
    }
    .title {
      color: ${({theme:e})=>e.colors.title};
      font-size: 47px;
    }
  }

  &.sass {
    .sub-title {
      color: #0555ff;
    }
    .title {
      color: ${({theme:e})=>e.colors.title};
    }
  }

  &.defi {
    .sub-title {
      color: #37ea8e;
    }
    .title {
      color: ${({theme:e})=>e.colors.whiteColor};
      span.liniar {
        background: linear-gradient(90deg, #37ea8e 35.54%, #bdf93f 65.12%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    margin-bottom: 30px;

    h2 {
      font-size: 36px;
      line-height: 45px;
    }
    .title .caveat {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 991px) {
    h2 br {
      display: none;
    }
    .convert-visitors-slider-right .section-title h2 {
      font-size: 26px;
      margin-bottom: -20px;
    }
  }
  @media screen and (max-width: 767px) {
    .sub-title {
      font-size: 16px;
    }
    .lets-talk-text h2,
    .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2 {
      font-size: 36px;
      line-height: 45px;
    }
  }
  @media screen and (max-width: 575px) {
    .download-wallet-overlay .section-title {
      text-align: center;
    }
  }
  @media screen and (max-width: 480px) {
    .team-section .section-title {
      margin-bottom: 40px;
    }
    .team-section .section-title h3 {
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 26px;
    }
    .team-section .section-title h2 {
      font-size: 22px;
      line-height: 40px;
    }
    .crypto2-benifits-section .section-title.crypto2.text-center {
      text-align: left !important;
    }
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
`;var K1={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Un,function(){var n=document,r=n.createTextNode.bind(n);function i(I,B,$){I.style.setProperty(B,$)}function a(I,B){return I.appendChild(B)}function l(I,B,$,Q){var _=n.createElement("span");return B&&(_.className=B),$&&(!Q&&_.setAttribute("data-"+B,$),_.textContent=$),I&&a(I,_)||_}function s(I,B){return I.getAttribute("data-"+B)}function c(I,B){return!I||I.length==0?[]:I.nodeName?[I]:[].slice.call(I[0].nodeName?I:(B||n).querySelectorAll(I))}function d(I){for(var B=[];I--;)B[I]=[];return B}function u(I,B){I&&I.some(B)}function p(I){return function(B){return I[B]}}function g(I,B,$){var Q="--"+B,_=Q+"-index";u($,function(se,ce){Array.isArray(se)?u(se,function(fe){i(fe,_,ce)}):i(se,_,ce)}),i(I,Q+"-total",$.length)}var v={};function y(I,B,$){var Q=$.indexOf(I);if(Q==-1){$.unshift(I);var _=v[I];if(!_)throw new Error("plugin not loaded: "+I);u(_.depends,function(ce){y(ce,I,$)})}else{var se=$.indexOf(B);$.splice(Q,1),$.splice(se,0,I)}return $}function b(I,B,$,Q){return{by:I,depends:B,key:$,split:Q}}function C(I){return y(I,0,[]).map(p(v))}function m(I){v[I.by]=I}function h(I,B,$,Q,_){I.normalize();var se=[],ce=document.createDocumentFragment();Q&&se.push(I.previousSibling);var fe=[];return c(I.childNodes).some(function(me){if(me.tagName&&!me.hasChildNodes()){fe.push(me);return}if(me.childNodes&&me.childNodes.length){fe.push(me),se.push.apply(se,h(me,B,$,Q,_));return}var Ie=me.wholeText||"",jt=Ie.trim();if(jt.length){Ie[0]===" "&&fe.push(r(" "));var ar=$===""&&typeof Intl.Segmenter=="function";u(ar?Array.from(new Intl.Segmenter().segment(jt)).map(function(on){return on.segment}):jt.split($),function(on,Mt){Mt&&_&&fe.push(l(ce,"whitespace"," ",_));var pi=l(ce,B,on);se.push(pi),fe.push(pi)}),Ie[Ie.length-1]===" "&&fe.push(r(" "))}}),u(fe,function(me){a(ce,me)}),I.innerHTML="",a(I,ce),se}var f=0;function x(I,B){for(var $ in B)I[$]=B[$];return I}var j="words",S=b(j,f,"word",function(I){return h(I,"word",/\s+/,0,1)}),k="chars",w=b(k,[j],"char",function(I,B,$){var Q=[];return u($[j],function(_,se){Q.push.apply(Q,h(_,"char","",B.whitespace&&se))}),Q});function A(I){I=I||{};var B=I.key;return c(I.target||"[data-splitting]").map(function($){var Q=$["🍌"];if(!I.force&&Q)return Q;Q=$["🍌"]={el:$};var _=I.by||s($,"splitting");(!_||_=="true")&&(_=k);var se=C(_),ce=x({},I);return u(se,function(fe){if(fe.split){var me=fe.by,Ie=(B?"-"+B:"")+fe.key,jt=fe.split($,ce,Q);Ie&&g($,Ie,jt),Q[me]=jt,$.classList.add(me)}}),$.classList.add("splitting"),Q})}function P(I){I=I||{};var B=I.target=l();return B.innerHTML=I.content,A(I),B.outerHTML}A.html=P,A.add=m;function R(I,B,$){var Q=c(B.matching||I.children,I),_={};return u(Q,function(se){var ce=Math.round(se[$]);(_[ce]||(_[ce]=[])).push(se)}),Object.keys(_).map(Number).sort(M).map(p(_))}function M(I,B){return I-B}var L=b("lines",[j],"line",function(I,B,$){return R(I,{matching:$[j]},"offsetTop")}),G=b("items",f,"item",function(I,B){return c(B.matching||I.children,I)}),te=b("rows",f,"row",function(I,B){return R(I,B,"offsetTop")}),q=b("cols",f,"col",function(I,B){return R(I,B,"offsetLeft")}),le=b("grid",["rows","cols"]),T="layout",U=b(T,f,f,function(I,B){var $=B.rows=+(B.rows||s(I,"rows")||1),Q=B.columns=+(B.columns||s(I,"columns")||1);if(B.image=B.image||s(I,"image")||I.currentSrc||I.src,B.image){var _=c("img",I)[0];B.image=_&&(_.currentSrc||_.src)}B.image&&i(I,"background-image","url("+B.image+")");for(var se=$*Q,ce=[],fe=l(f,"cell-grid");se--;){var me=l(fe,"cell");l(me,"cell-inner"),ce.push(me)}return a(I,fe),ce}),H=b("cellRows",[T],"row",function(I,B,$){var Q=B.rows,_=d(Q);return u($[T],function(se,ce,fe){_[Math.floor(ce/(fe.length/Q))].push(se)}),_}),K=b("cellColumns",[T],"col",function(I,B,$){var Q=B.columns,_=d(Q);return u($[T],function(se,ce){_[ce%Q].push(se)}),_}),Z=b("cells",["cellRows","cellColumns"],"cell",function(I,B,$){return $[T]});return m(S),m(w),m(L),m(G),m(te),m(q),m(le),m(U),m(H),m(K),m(Z),A})})(K1);var Ry=K1.exports;const ci=En(Ry);function ur(e,t,n){return t>e?t:n<e?n:e}function ta(e){return+(e>0)-+(e<0)}function My(e){return Math.round(e*1e4)/1e4}var lp={};function zy(e){return"-"+e[0].toLowerCase()}function em(e){return lp[e]||(lp[e]=e.replace(/([A-Z])/g,zy))}function na(e,t){return!e||e.length===0?[]:e.nodeName?[e]:[].slice.call(e[0].nodeName?e:(t||document.documentElement).querySelectorAll(e))}function sp(e,t){for(var n in t)n.indexOf("_")&&e.setAttribute("data-"+em(n),t[n])}function By(e){return function(t,n){for(var r in n)r.indexOf("_")&&(e===!0||e[r])&&t.style.setProperty("--"+em(r),My(n[r]))}}var Dr,Er=[];function Dy(){Dr=0,Er.slice().forEach(function(e){return e()}),tm()}function tm(){!Dr&&Er.length&&(Dr=requestAnimationFrame(Dy))}function Uy(e){return Er.push(e),tm(),function(){Er=Er.filter(function(t){return t!==e}),!Er.length&&Dr&&(cancelAnimationFrame(Dr),Dr=0)}}function cp(e,t,n,r){return typeof e=="function"?e(t,n,r):e}function ji(){}function Fy(e){e=e||{};var t=e.onChange||ji,n=e.onHidden||ji,r=e.onShown||ji,i=e.onScroll||ji,a=e.cssProps?By(e.cssProps):ji,l=e.scrollingElement,s=l?na(l)[0]:window,c=l?na(l)[0]:document.documentElement,d=!1,u={},p=[],g,v,y;function b(){p=na(e.targets||"[data-scroll]",na(e.scope||c)[0]).map(function(j){return{element:j}})}function C(){var j=c.clientWidth,S=c.clientHeight,k=ta(-g+(g=c.scrollLeft||window.pageXOffset)),w=ta(-v+(v=c.scrollTop||window.pageYOffset)),A=c.scrollLeft/(c.scrollWidth-j||1),P=c.scrollTop/(c.scrollHeight-S||1);d=d||u.scrollDirX!==k||u.scrollDirY!==w||u.scrollPercentX!==A||u.scrollPercentY!==P,u.scrollDirX=k,u.scrollDirY=w,u.scrollPercentX=A,u.scrollPercentY=P;for(var R=!1,M=0;M<p.length;M++){var L=p[M],G=L.element,te=G,q=0,le=0;do q+=te.offsetLeft,le+=te.offsetTop,te=te.offsetParent;while(te&&te!==s);var T=G.clientHeight||G.offsetHeight||0,U=G.clientWidth||G.offsetWidth||0,H=(ur(q+U,g,g+j)-ur(q,g,g+j))/U,K=(ur(le+T,v,v+S)-ur(le,v,v+S))/T,Z=H===1?0:ta(q-g),I=K===1?0:ta(le-v),B=ur((g-(U/2+q-j/2))/(j/2),-1,1),$=ur((v-(T/2+le-S/2))/(S/2),-1,1),Q=void 0;e.offset?Q=cp(e.offset,G,L,c)<=v?1:0:(cp(e.threshold,G,L,c)||0)<H*K?Q=1:Q=0;var _=L.visible!==Q,se=L._changed||_||L.visibleX!==H||L.visibleY!==K||L.index!==M||L.elementHeight!==T||L.elementWidth!==U||L.offsetX!==q||L.offsetY!==le||L.intersectX!==L.intersectX||L.intersectY!==L.intersectY||L.viewportX!==B||L.viewportY!==$;se&&(R=!0,L._changed=!0,L._visibleChanged=_,L.visible=Q,L.elementHeight=T,L.elementWidth=U,L.index=M,L.offsetX=q,L.offsetY=le,L.visibleX=H,L.visibleY=K,L.intersectX=Z,L.intersectY=I,L.viewportX=B,L.viewportY=$,L.visible=Q)}!y&&(d||R)&&(y=Uy(m))}function m(){h(),d&&(d=!1,sp(c,{scrollDirX:u.scrollDirX,scrollDirY:u.scrollDirY}),a(c,u),i(c,u,p));for(var j=p.length,S=j-1;S>-1;S--){var k=p[S],w=k.element,A=k.visible,P=w.hasAttribute("scrollout-once")||!1;k._changed&&(k._changed=!1,a(w,k)),k._visibleChanged&&(sp(w,{scroll:A?"in":"out"}),t(w,k,c),(A?r:n)(w,k,c)),A&&(e.once||P)&&p.splice(S,1)}}function h(){y&&(y(),y=void 0)}b(),C(),m();var f=0,x=function(){f=f||setTimeout(function(){f=0,C()},0)};return window.addEventListener("resize",x),s.addEventListener("scroll",x),{index:b,update:C,teardown:function(){h(),window.removeEventListener("resize",x),s.removeEventListener("scroll",x)}}}var Hy=Fy;const di=En(Hy),Ht=({title:e,subtitle:t,alignment:n,titleMaxW:r,parentClass:i,titleMargin:a,subtitleClass:l,titleClass:s})=>(N.useEffect(()=>{ci(),di({targets:"[data-splitting]"})},[]),o.jsxs(Iy,{style:{textAlign:n,maxWidth:r,margin:a},className:i,...i==="defi"&&{"data-splitting":!0},children:[t&&o.jsx("span",{className:`sub-title ${l}`,children:t}),e&&o.jsx("h2",{className:`title ${s}`,children:e})]}));var nm={},rm={},_l={},im={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(im);var $y="Expected a function",dp=NaN,Vy="[object Symbol]",Wy=/^\s+|\s+$/g,Qy=/^[-+]0x[0-9a-f]+$/i,_y=/^0b[01]+$/i,Gy=/^0o[0-7]+$/i,Yy=parseInt,Xy=typeof Un=="object"&&Un&&Un.Object===Object&&Un,Zy=typeof self=="object"&&self&&self.Object===Object&&self,Jy=Xy||Zy||Function("return this")(),qy=Object.prototype,Ky=qy.toString,eb=Math.max,tb=Math.min,Ws=function(){return Jy.Date.now()};function nb(e,t,n){var r,i,a,l,s,c,d=0,u=!1,p=!1,g=!0;if(typeof e!="function")throw new TypeError($y);t=up(t)||0,P0(n)&&(u=!!n.leading,p="maxWait"in n,a=p?eb(up(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g);function v(S){var k=r,w=i;return r=i=void 0,d=S,l=e.apply(w,k),l}function y(S){return d=S,s=setTimeout(m,t),u?v(S):l}function b(S){var k=S-c,w=S-d,A=t-k;return p?tb(A,a-w):A}function C(S){var k=S-c,w=S-d;return c===void 0||k>=t||k<0||p&&w>=a}function m(){var S=Ws();if(C(S))return h(S);s=setTimeout(m,b(S))}function h(S){return s=void 0,g&&r?v(S):(r=i=void 0,l)}function f(){s!==void 0&&clearTimeout(s),d=0,r=c=i=s=void 0}function x(){return s===void 0?l:h(Ws())}function j(){var S=Ws(),k=C(S);if(r=arguments,i=this,c=S,k){if(s===void 0)return y(c);if(p)return s=setTimeout(m,t),v(c)}return s===void 0&&(s=setTimeout(m,t)),l}return j.cancel=f,j.flush=x,j}function P0(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function rb(e){return!!e&&typeof e=="object"}function ib(e){return typeof e=="symbol"||rb(e)&&Ky.call(e)==Vy}function up(e){if(typeof e=="number")return e;if(ib(e))return dp;if(P0(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=P0(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Wy,"");var n=_y.test(e);return n||Gy.test(e)?Yy(e.slice(2),n?2:8):Qy.test(e)?dp:+e}var ob=nb,om={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(a=i(a,r(s)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var l="";for(var s in a)t.call(a,s)&&a[s]&&(l=i(l,s));return l}function i(a,l){return l?a?a+" "+l:a+l:a}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(om);var Gl=om.exports,F={};Object.defineProperty(F,"__esModule",{value:!0});F.checkSpecKeys=F.checkNavigable=F.changeSlide=F.canUseDOM=F.canGoNext=void 0;F.clamp=am;F.swipeStart=F.swipeMove=F.swipeEnd=F.slidesOnRight=F.slidesOnLeft=F.slideHandler=F.siblingDirection=F.safePreventDefault=F.lazyStartIndex=F.lazySlidesOnRight=F.lazySlidesOnLeft=F.lazyEndIndex=F.keyHandler=F.initializedState=F.getWidth=F.getTrackLeft=F.getTrackCSS=F.getTrackAnimateCSS=F.getTotalSlides=F.getSwipeDirection=F.getSlideCount=F.getRequiredLazySlides=F.getPreClones=F.getPostClones=F.getOnDemandLazySlides=F.getNavigableIndexes=F.getHeight=F.extractObject=void 0;var ab=lb(N);function lb(e){return e&&e.__esModule?e:{default:e}}function pp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pp(Object(n),!0).forEach(function(r){sb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function am(e,t,n){return Math.max(t,Math.min(e,n))}var Yn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};F.safePreventDefault=Yn;var qd=function(t){for(var n=[],r=Kd(t),i=e2(t),a=r;a<i;a++)t.lazyLoadedList.indexOf(a)<0&&n.push(a);return n};F.getOnDemandLazySlides=qd;var cb=function(t){for(var n=[],r=Kd(t),i=e2(t),a=r;a<i;a++)n.push(a);return n};F.getRequiredLazySlides=cb;var Kd=function(t){return t.currentSlide-lm(t)};F.lazyStartIndex=Kd;var e2=function(t){return t.currentSlide+sm(t)};F.lazyEndIndex=e2;var lm=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};F.lazySlidesOnLeft=lm;var sm=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};F.lazySlidesOnRight=sm;var ol=function(t){return t&&t.offsetWidth||0};F.getWidth=ol;var t2=function(t){return t&&t.offsetHeight||0};F.getHeight=t2;var n2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,a,l;return r=t.startX-t.curX,i=t.startY-t.curY,a=Math.atan2(i,r),l=Math.round(a*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};F.getSwipeDirection=n2;var r2=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};F.canGoNext=r2;var db=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};F.extractObject=db;var ub=function(t){var n=ab.default.Children.count(t.children),r=t.listRef,i=Math.ceil(ol(r)),a=t.trackRef&&t.trackRef.node,l=Math.ceil(ol(a)),s;if(t.vertical)s=i;else{var c=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(c*=i/100),s=Math.ceil((i-c)/t.slidesToShow)}var d=r&&t2(r.querySelector('[data-index="0"]')),u=d*t.slidesToShow,p=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(p=n-1-t.initialSlide);var g=t.lazyLoadedList||[],v=qd(be(be({},t),{},{currentSlide:p,lazyLoadedList:g}));g=g.concat(v);var y={slideCount:n,slideWidth:s,listWidth:i,trackWidth:l,currentSlide:p,slideHeight:d,listHeight:u,lazyLoadedList:g};return t.autoplaying===null&&t.autoplay&&(y.autoplaying="playing"),y};F.initializedState=ub;var pb=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,a=t.infinite,l=t.index,s=t.slideCount,c=t.lazyLoad,d=t.currentSlide,u=t.centerMode,p=t.slidesToScroll,g=t.slidesToShow,v=t.useCSS,y=t.lazyLoadedList;if(n&&r)return{};var b=l,C,m,h,f={},x={},j=a?l:am(l,0,s-1);if(i){if(!a&&(l<0||l>=s))return{};l<0?b=l+s:l>=s&&(b=l-s),c&&y.indexOf(b)<0&&(y=y.concat(b)),f={animating:!0,currentSlide:b,lazyLoadedList:y,targetSlide:b},x={animating:!1,targetSlide:b}}else C=b,b<0?(C=b+s,a?s%p!==0&&(C=s-s%p):C=0):!r2(t)&&b>d?b=C=d:u&&b>=s?(b=a?s:s-1,C=a?0:s-1):b>=s&&(C=b-s,a?s%p!==0&&(C=0):C=s-g),!a&&b+g>=s&&(C=s-g),m=yo(be(be({},t),{},{slideIndex:b})),h=yo(be(be({},t),{},{slideIndex:C})),a||(m===h&&(b=C),m=h),c&&(y=y.concat(qd(be(be({},t),{},{currentSlide:b})))),v?(f={animating:!0,currentSlide:C,trackStyle:i2(be(be({},t),{},{left:m})),lazyLoadedList:y,targetSlide:j},x={animating:!1,currentSlide:C,trackStyle:vo(be(be({},t),{},{left:h})),swipeLeft:null,targetSlide:j}):f={currentSlide:C,trackStyle:vo(be(be({},t),{},{left:h})),lazyLoadedList:y,targetSlide:j};return{state:f,nextState:x}};F.slideHandler=pb;var fb=function(t,n){var r,i,a,l,s,c=t.slidesToScroll,d=t.slidesToShow,u=t.slideCount,p=t.currentSlide,g=t.targetSlide,v=t.lazyLoad,y=t.infinite;if(l=u%c!==0,r=l?0:(u-p)%c,n.message==="previous")a=r===0?c:d-r,s=p-a,v&&!y&&(i=p-a,s=i===-1?u-1:i),y||(s=g-c);else if(n.message==="next")a=r===0?c:r,s=p+a,v&&!y&&(s=(p+c)%u+r),y||(s=g+c);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,y){var b=pm(be(be({},t),{},{targetSlide:s}));s>n.currentSlide&&b==="left"?s=s-u:s<n.currentSlide&&b==="right"&&(s=s+u)}}else n.message==="index"&&(s=Number(n.index));return s};F.changeSlide=fb;var hb=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};F.keyHandler=hb;var mb=function(t,n,r){return t.target.tagName==="IMG"&&Yn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};F.swipeStart=mb;var gb=function(t,n){var r=n.scrolling,i=n.animating,a=n.vertical,l=n.swipeToSlide,s=n.verticalSwiping,c=n.rtl,d=n.currentSlide,u=n.edgeFriction,p=n.edgeDragged,g=n.onEdge,v=n.swiped,y=n.swiping,b=n.slideCount,C=n.slidesToScroll,m=n.infinite,h=n.touchObject,f=n.swipeEvent,x=n.listHeight,j=n.listWidth;if(!r){if(i)return Yn(t);a&&l&&s&&Yn(t);var S,k={},w=yo(n);h.curX=t.touches?t.touches[0].pageX:t.clientX,h.curY=t.touches?t.touches[0].pageY:t.clientY,h.swipeLength=Math.round(Math.sqrt(Math.pow(h.curX-h.startX,2)));var A=Math.round(Math.sqrt(Math.pow(h.curY-h.startY,2)));if(!s&&!y&&A>10)return{scrolling:!0};s&&(h.swipeLength=A);var P=(c?-1:1)*(h.curX>h.startX?1:-1);s&&(P=h.curY>h.startY?1:-1);var R=Math.ceil(b/C),M=n2(n.touchObject,s),L=h.swipeLength;return m||(d===0&&(M==="right"||M==="down")||d+1>=R&&(M==="left"||M==="up")||!r2(n)&&(M==="left"||M==="up"))&&(L=h.swipeLength*u,p===!1&&g&&(g(M),k.edgeDragged=!0)),!v&&f&&(f(M),k.swiped=!0),a?S=w+L*(x/j)*P:c?S=w-L*P:S=w+L*P,s&&(S=w+L*P),k=be(be({},k),{},{touchObject:h,swipeLeft:S,trackStyle:vo(be(be({},n),{},{left:S}))}),Math.abs(h.curX-h.startX)<Math.abs(h.curY-h.startY)*.8||h.swipeLength>10&&(k.swiping=!0,Yn(t)),k}};F.swipeMove=gb;var xb=function(t,n){var r=n.dragging,i=n.swipe,a=n.touchObject,l=n.listWidth,s=n.touchThreshold,c=n.verticalSwiping,d=n.listHeight,u=n.swipeToSlide,p=n.scrolling,g=n.onSwipe,v=n.targetSlide,y=n.currentSlide,b=n.infinite;if(!r)return i&&Yn(t),{};var C=c?d/s:l/s,m=n2(a,c),h={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p||!a.swipeLength)return h;if(a.swipeLength>C){Yn(t),g&&g(m);var f,x,j=b?y:v;switch(m){case"left":case"up":x=j+O0(n),f=u?L0(n,x):x,h.currentDirection=0;break;case"right":case"down":x=j-O0(n),f=u?L0(n,x):x,h.currentDirection=1;break;default:f=j}h.triggerSlideHandler=f}else{var S=yo(n);h.trackStyle=i2(be(be({},n),{},{left:S}))}return h};F.swipeEnd=xb;var cm=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,a=[];r<n;)a.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return a};F.getNavigableIndexes=cm;var L0=function(t,n){var r=cm(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var a in r){if(n<r[a]){n=i;break}i=r[a]}return n};F.checkNavigable=L0;var O0=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,a=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(a).every(function(c){if(t.vertical){if(c.offsetTop+t2(c)/2>t.swipeLeft*-1)return r=c,!1}else if(c.offsetLeft-n+ol(c)/2>t.swipeLeft*-1)return r=c,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,s=Math.abs(r.dataset.index-l)||1;return s}else return t.slidesToScroll};F.getSlideCount=O0;var Yl=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};F.checkSpecKeys=Yl;var vo=function(t){Yl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=um(t)*t.slideWidth;var a={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",c=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";a=be(be({},a),{},{WebkitTransform:l,transform:s,msTransform:c})}else t.vertical?a.top=t.left:a.left=t.left;return t.fade&&(a={opacity:1}),n&&(a.width=n),r&&(a.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?a.marginTop=t.left+"px":a.marginLeft=t.left+"px"),a};F.getTrackCSS=vo;var i2=function(t){Yl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=vo(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};F.getTrackAnimateCSS=i2;var yo=function(t){if(t.unslick)return 0;Yl(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,a=t.centerMode,l=t.slideCount,s=t.slidesToShow,c=t.slidesToScroll,d=t.slideWidth,u=t.listWidth,p=t.variableWidth,g=t.slideHeight,v=t.fade,y=t.vertical,b=0,C,m,h=0;if(v||t.slideCount===1)return 0;var f=0;if(i?(f=-Yi(t),l%c!==0&&n+c>l&&(f=-(n>l?s-(n-l):l%c)),a&&(f+=parseInt(s/2))):(l%c!==0&&n+c>l&&(f=s-l%c),a&&(f=parseInt(s/2))),b=f*d,h=f*g,y?C=n*g*-1+h:C=n*d*-1+b,p===!0){var x,j=r&&r.node;if(x=n+Yi(t),m=j&&j.childNodes[x],C=m?m.offsetLeft*-1:0,a===!0){x=i?n+Yi(t):n,m=j&&j.children[x],C=0;for(var S=0;S<x;S++)C-=j&&j.children[S]&&j.children[S].offsetWidth;C-=parseInt(t.centerPadding),C+=m&&(u-m.offsetWidth)/2}}return C};F.getTrackLeft=yo;var Yi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};F.getPreClones=Yi;var dm=function(t){return t.unslick||!t.infinite?0:t.slideCount};F.getPostClones=dm;var um=function(t){return t.slideCount===1?1:Yi(t)+t.slideCount+dm(t)};F.getTotalSlides=um;var pm=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+fm(t)?"left":"right":t.targetSlide<t.currentSlide-hm(t)?"right":"left"};F.siblingDirection=pm;var fm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,a=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(a)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};F.slidesOnRight=fm;var hm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,a=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(a)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};F.slidesOnLeft=hm;var vb=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};F.canUseDOM=vb;var Xl={};function T0(e){"@babel/helpers - typeof";return T0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T0(e)}Object.defineProperty(Xl,"__esModule",{value:!0});Xl.Track=void 0;var dn=mm(N),Qs=mm(Gl),_s=F;function mm(e){return e&&e.__esModule?e:{default:e}}function I0(){return I0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I0.apply(this,arguments)}function yb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bb(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wb(e,t,n){return t&&bb(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Cb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R0(e,t)}function R0(e,t){return R0=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},R0(e,t)}function kb(e){var t=Ab();return function(){var r=al(e),i;if(t){var a=al(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return jb(this,i)}}function jb(e,t){if(t&&(T0(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return M0(e)}function M0(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ab(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function al(e){return al=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},al(e)}function fp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fp(Object(n),!0).forEach(function(r){z0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function z0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Gs=function(t){var n,r,i,a,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(a=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-a-1&&l<=t.currentSlide+a&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var s;t.targetSlide<0?s=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?s=t.targetSlide-t.slideCount:s=t.targetSlide;var c=l===s;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":c}},Sb=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Ys=function(t,n){return t.key||n},Nb=function(t){var n,r=[],i=[],a=[],l=dn.default.Children.count(t.children),s=(0,_s.lazyStartIndex)(t),c=(0,_s.lazyEndIndex)(t);return dn.default.Children.forEach(t.children,function(d,u){var p,g={message:"children",index:u,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(u)>=0?p=d:p=dn.default.createElement("div",null);var v=Sb(Ke(Ke({},t),{},{index:u})),y=p.props.className||"",b=Gs(Ke(Ke({},t),{},{index:u}));if(r.push(dn.default.cloneElement(p,{key:"original"+Ys(p,u),"data-index":u,className:(0,Qs.default)(b,y),tabIndex:"-1","aria-hidden":!b["slick-active"],style:Ke(Ke({outline:"none"},p.props.style||{}),v),onClick:function(h){p.props&&p.props.onClick&&p.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(g)}})),t.infinite&&t.fade===!1){var C=l-u;C<=(0,_s.getPreClones)(t)&&l!==t.slidesToShow&&(n=-C,n>=s&&(p=d),b=Gs(Ke(Ke({},t),{},{index:n})),i.push(dn.default.cloneElement(p,{key:"precloned"+Ys(p,n),"data-index":n,tabIndex:"-1",className:(0,Qs.default)(b,y),"aria-hidden":!b["slick-active"],style:Ke(Ke({},p.props.style||{}),v),onClick:function(h){p.props&&p.props.onClick&&p.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(g)}}))),l!==t.slidesToShow&&(n=l+u,n<c&&(p=d),b=Gs(Ke(Ke({},t),{},{index:n})),a.push(dn.default.cloneElement(p,{key:"postcloned"+Ys(p,n),"data-index":n,tabIndex:"-1",className:(0,Qs.default)(b,y),"aria-hidden":!b["slick-active"],style:Ke(Ke({},p.props.style||{}),v),onClick:function(h){p.props&&p.props.onClick&&p.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(g)}})))}}),t.rtl?i.concat(r,a).reverse():i.concat(r,a)},Eb=function(e){Cb(n,e);var t=kb(n);function n(){var r;yb(this,n);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return r=t.call.apply(t,[this].concat(a)),z0(M0(r),"node",null),z0(M0(r),"handleRef",function(s){r.node=s}),r}return wb(n,[{key:"render",value:function(){var i=Nb(this.props),a=this.props,l=a.onMouseEnter,s=a.onMouseOver,c=a.onMouseLeave,d={onMouseEnter:l,onMouseOver:s,onMouseLeave:c};return dn.default.createElement("div",I0({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},d),i)}}]),n}(dn.default.PureComponent);Xl.Track=Eb;var Zl={};function B0(e){"@babel/helpers - typeof";return B0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B0(e)}Object.defineProperty(Zl,"__esModule",{value:!0});Zl.Dots=void 0;var ra=gm(N),Pb=gm(Gl),hp=F;function gm(e){return e&&e.__esModule?e:{default:e}}function mp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Lb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mp(Object(n),!0).forEach(function(r){Ob(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ob(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ib(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Rb(e,t,n){return t&&Ib(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Mb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D0(e,t)}function D0(e,t){return D0=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},D0(e,t)}function zb(e){var t=Ub();return function(){var r=ll(e),i;if(t){var a=ll(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Bb(this,i)}}function Bb(e,t){if(t&&(B0(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Db(e)}function Db(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ub(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ll(e){return ll=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ll(e)}var Fb=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},Hb=function(e){Mb(n,e);var t=zb(n);function n(){return Tb(this,n),t.apply(this,arguments)}return Rb(n,[{key:"clickHandler",value:function(i,a){a.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,a=i.onMouseEnter,l=i.onMouseOver,s=i.onMouseLeave,c=i.infinite,d=i.slidesToScroll,u=i.slidesToShow,p=i.slideCount,g=i.currentSlide,v=Fb({slideCount:p,slidesToScroll:d,slidesToShow:u,infinite:c}),y={onMouseEnter:a,onMouseOver:l,onMouseLeave:s},b=[],C=0;C<v;C++){var m=(C+1)*d-1,h=c?m:(0,hp.clamp)(m,0,p-1),f=h-(d-1),x=c?f:(0,hp.clamp)(f,0,p-1),j=(0,Pb.default)({"slick-active":c?g>=x&&g<=h:g===x}),S={message:"dots",index:C,slidesToScroll:d,currentSlide:g},k=this.clickHandler.bind(this,S);b=b.concat(ra.default.createElement("li",{key:C,className:j},ra.default.cloneElement(this.props.customPaging(C),{onClick:k})))}return ra.default.cloneElement(this.props.appendDots(b),Lb({className:this.props.dotsClass},y))}}]),n}(ra.default.PureComponent);Zl.Dots=Hb;var qr={};function U0(e){"@babel/helpers - typeof";return U0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U0(e)}Object.defineProperty(qr,"__esModule",{value:!0});qr.PrevArrow=qr.NextArrow=void 0;var Ur=vm(N),xm=vm(Gl),$b=F;function vm(e){return e&&e.__esModule?e:{default:e}}function sl(){return sl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(this,arguments)}function gp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gp(Object(n),!0).forEach(function(r){Vb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ym(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wb(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bm(e,t,n){return t&&Wb(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function wm(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F0(e,t)}function F0(e,t){return F0=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},F0(e,t)}function Cm(e){var t=Gb();return function(){var r=dl(e),i;if(t){var a=dl(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Qb(this,i)}}function Qb(e,t){if(t&&(U0(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _b(e)}function _b(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Gb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function dl(e){return dl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},dl(e)}var Yb=function(e){wm(n,e);var t=Cm(n);function n(){return ym(this,n),t.apply(this,arguments)}return bm(n,[{key:"clickHandler",value:function(i,a){a&&a.preventDefault(),this.props.clickHandler(i,a)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},a=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,a=null);var l={key:"0","data-role":"none",className:(0,xm.default)(i),style:{display:"block"},onClick:a},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},c;return this.props.prevArrow?c=Ur.default.cloneElement(this.props.prevArrow,cl(cl({},l),s)):c=Ur.default.createElement("button",sl({key:"0",type:"button"},l)," ","Previous"),c}}]),n}(Ur.default.PureComponent);qr.PrevArrow=Yb;var Xb=function(e){wm(n,e);var t=Cm(n);function n(){return ym(this,n),t.apply(this,arguments)}return bm(n,[{key:"clickHandler",value:function(i,a){a&&a.preventDefault(),this.props.clickHandler(i,a)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},a=this.clickHandler.bind(this,{message:"next"});(0,$b.canGoNext)(this.props)||(i["slick-disabled"]=!0,a=null);var l={key:"1","data-role":"none",className:(0,xm.default)(i),style:{display:"block"},onClick:a},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},c;return this.props.nextArrow?c=Ur.default.cloneElement(this.props.nextArrow,cl(cl({},l),s)):c=Ur.default.createElement("button",sl({key:"1",type:"button"},l)," ","Next"),c}}]),n}(Ur.default.PureComponent);qr.NextArrow=Xb;var km=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,a){return i[0]===n?(r=a,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,a=this.__entries__;i<a.length;i++){var l=a[i];n.call(r,l[1],l[0])}},t}()}(),H0=typeof window<"u"&&typeof document<"u"&&window.document===document,ul=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Zb=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ul):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Jb=2;function qb(e,t){var n=!1,r=!1,i=0;function a(){n&&(n=!1,e()),r&&s()}function l(){Zb(a)}function s(){var c=Date.now();if(n){if(c-i<Jb)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=c}return s}var Kb=20,e6=["top","right","bottom","left","width","height","size","weight"],t6=typeof MutationObserver<"u",n6=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=qb(this.refresh.bind(this),Kb)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!H0||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),t6?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!H0||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=e6.some(function(a){return!!~r.indexOf(a)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),jm=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Kr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||ul},Am=Jl(0,0,0,0);function pl(e){return parseFloat(e)||0}function xp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var a=e["border-"+i+"-width"];return r+pl(a)},0)}function r6(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var a=i[r],l=e["padding-"+a];n[a]=pl(l)}return n}function i6(e){var t=e.getBBox();return Jl(0,0,t.width,t.height)}function o6(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Am;var r=Kr(e).getComputedStyle(e),i=r6(r),a=i.left+i.right,l=i.top+i.bottom,s=pl(r.width),c=pl(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+a)!==t&&(s-=xp(r,"left","right")+a),Math.round(c+l)!==n&&(c-=xp(r,"top","bottom")+l)),!l6(e)){var d=Math.round(s+a)-t,u=Math.round(c+l)-n;Math.abs(d)!==1&&(s-=d),Math.abs(u)!==1&&(c-=u)}return Jl(i.left,i.top,s,c)}var a6=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Kr(e).SVGGraphicsElement}:function(e){return e instanceof Kr(e).SVGElement&&typeof e.getBBox=="function"}}();function l6(e){return e===Kr(e).document.documentElement}function s6(e){return H0?a6(e)?i6(e):o6(e):Am}function c6(e){var t=e.x,n=e.y,r=e.width,i=e.height,a=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(a.prototype);return jm(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function Jl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var d6=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Jl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=s6(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),u6=function(){function e(t,n){var r=c6(n);jm(this,{target:t,contentRect:r})}return e}(),p6=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new km,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Kr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new d6(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Kr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new u6(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Sm=typeof WeakMap<"u"?new WeakMap:new km,Nm=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=n6.getInstance(),r=new p6(t,n,this);Sm.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Nm.prototype[e]=function(){var t;return(t=Sm.get(this))[e].apply(t,arguments)}});var f6=function(){return typeof ul.ResizeObserver<"u"?ul.ResizeObserver:Nm}();const h6=Object.freeze(Object.defineProperty({__proto__:null,default:f6},Symbol.toStringTag,{value:"Module"})),m6=Mg(h6);Object.defineProperty(_l,"__esModule",{value:!0});_l.InnerSlider=void 0;var _e=Po(N),g6=Po(im),x6=Po(ob),v6=Po(Gl),Ce=F,y6=Xl,b6=Zl,vp=qr,w6=Po(m6);function Po(e){return e&&e.__esModule?e:{default:e}}function fl(e){"@babel/helpers - typeof";return fl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fl(e)}function hl(){return hl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hl.apply(this,arguments)}function C6(e,t){if(e==null)return{};var n=k6(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function k6(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function yp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yp(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function j6(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A6(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S6(e,t,n){return t&&A6(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function N6(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$0(e,t)}function $0(e,t){return $0=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},$0(e,t)}function E6(e){var t=L6();return function(){var r=ml(e),i;if(t){var a=ml(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return P6(this,i)}}function P6(e,t){if(t&&(fl(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ie(e)}function ie(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ml(e){return ml=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ml(e)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O6=function(e){N6(n,e);var t=E6(n);function n(r){var i;j6(this,n),i=t.call(this,r),oe(ie(i),"listRefHandler",function(l){return i.list=l}),oe(ie(i),"trackRefHandler",function(l){return i.track=l}),oe(ie(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Ce.getHeight)(l)+"px"}}),oe(ie(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,Ce.getOnDemandLazySlides)(X(X({},i.props),i.state));l.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var s=X({listRef:i.list,trackRef:i.track},i.props);i.updateState(s,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new w6.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(c){c.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,c.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),oe(ie(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),oe(ie(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var s=(0,Ce.getOnDemandLazySlides)(X(X({},i.props),i.state));s.length>0&&(i.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}i.adaptHeight();var c=X(X({listRef:i.list,trackRef:i.track},i.props),i.state),d=i.didPropsChange(l);d&&i.updateState(c,d,function(){i.state.currentSlide>=_e.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:_e.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),oe(ie(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,x6.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),oe(ie(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(i.track&&i.track.node);if(s){var c=X(X({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(c,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),oe(ie(i),"updateState",function(l,s,c){var d=(0,Ce.initializedState)(l);l=X(X(X({},l),d),{},{slideIndex:d.currentSlide});var u=(0,Ce.getTrackLeft)(l);l=X(X({},l),{},{left:u});var p=(0,Ce.getTrackCSS)(l);(s||_e.default.Children.count(i.props.children)!==_e.default.Children.count(l.children))&&(d.trackStyle=p),i.setState(d,c)}),oe(ie(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,s=0,c=[],d=(0,Ce.getPreClones)(X(X(X({},i.props),i.state),{},{slideCount:i.props.children.length})),u=(0,Ce.getPostClones)(X(X(X({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(k){c.push(k.props.style.width),l+=k.props.style.width});for(var p=0;p<d;p++)s+=c[c.length-1-p],l+=c[c.length-1-p];for(var g=0;g<u;g++)l+=c[g];for(var v=0;v<i.state.currentSlide;v++)s+=c[v];var y={width:l+"px",left:-s+"px"};if(i.props.centerMode){var b="".concat(c[i.state.currentSlide],"px");y.left="calc(".concat(y.left," + (100% - ").concat(b,") / 2 ) ")}return{trackStyle:y}}var C=_e.default.Children.count(i.props.children),m=X(X(X({},i.props),i.state),{},{slideCount:C}),h=(0,Ce.getPreClones)(m)+(0,Ce.getPostClones)(m)+C,f=100/i.props.slidesToShow*h,x=100/h,j=-x*((0,Ce.getPreClones)(m)+i.state.currentSlide)*f/100;i.props.centerMode&&(j+=(100-x*f/100)/2);var S={width:f+"%",left:j+"%"};return{slideWidth:x+"%",trackStyle:S}}),oe(ie(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],s=l.length,c=0;Array.prototype.forEach.call(l,function(d){var u=function(){return++c&&c>=s&&i.onWindowResized()};if(!d.onclick)d.onclick=function(){return d.parentNode.focus()};else{var p=d.onclick;d.onclick=function(){p(),d.parentNode.focus()}}d.onload||(i.props.lazyLoad?d.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(d.onload=u,d.onerror=function(){u(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),oe(ie(i),"progressiveLazyLoad",function(){for(var l=[],s=X(X({},i.props),i.state),c=i.state.currentSlide;c<i.state.slideCount+(0,Ce.getPostClones)(s);c++)if(i.state.lazyLoadedList.indexOf(c)<0){l.push(c);break}for(var d=i.state.currentSlide-1;d>=-(0,Ce.getPreClones)(s);d--)if(i.state.lazyLoadedList.indexOf(d)<0){l.push(d);break}l.length>0?(i.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),oe(ie(i),"slideHandler",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=i.props,d=c.asNavFor,u=c.beforeChange,p=c.onLazyLoad,g=c.speed,v=c.afterChange,y=i.state.currentSlide,b=(0,Ce.slideHandler)(X(X(X({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!s})),C=b.state,m=b.nextState;if(C){u&&u(y,C.currentSlide);var h=C.lazyLoadedList.filter(function(f){return i.state.lazyLoadedList.indexOf(f)<0});p&&h.length>0&&p(h),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),v&&v(y),delete i.animationEndCallback),i.setState(C,function(){d&&i.asNavForIndex!==l&&(i.asNavForIndex=l,d.innerSlider.slideHandler(l)),m&&(i.animationEndCallback=setTimeout(function(){var f=m.animating,x=C6(m,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:f})},10)),v&&v(C.currentSlide),delete i.animationEndCallback})},g))})}}),oe(ie(i),"changeSlide",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=X(X({},i.props),i.state),d=(0,Ce.changeSlide)(c,l);if(!(d!==0&&!d)&&(s===!0?i.slideHandler(d,s):i.slideHandler(d),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var u=i.list.querySelectorAll(".slick-current");u[0]&&u[0].focus()}}),oe(ie(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),oe(ie(i),"keyHandler",function(l){var s=(0,Ce.keyHandler)(l,i.props.accessibility,i.props.rtl);s!==""&&i.changeSlide({message:s})}),oe(ie(i),"selectHandler",function(l){i.changeSlide(l)}),oe(ie(i),"disableBodyScroll",function(){var l=function(c){c=c||window.event,c.preventDefault&&c.preventDefault(),c.returnValue=!1};window.ontouchmove=l}),oe(ie(i),"enableBodyScroll",function(){window.ontouchmove=null}),oe(ie(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var s=(0,Ce.swipeStart)(l,i.props.swipe,i.props.draggable);s!==""&&i.setState(s)}),oe(ie(i),"swipeMove",function(l){var s=(0,Ce.swipeMove)(l,X(X(X({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));s&&(s.swiping&&(i.clickable=!1),i.setState(s))}),oe(ie(i),"swipeEnd",function(l){var s=(0,Ce.swipeEnd)(l,X(X(X({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(s){var c=s.triggerSlideHandler;delete s.triggerSlideHandler,i.setState(s),c!==void 0&&(i.slideHandler(c),i.props.verticalSwiping&&i.enableBodyScroll())}}),oe(ie(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),oe(ie(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),oe(ie(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),oe(ie(i),"slickGoTo",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},s)},0))}),oe(ie(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,Ce.canGoNext)(X(X({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),oe(ie(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var s=i.state.autoplaying;if(l==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(l==="leave"){if(s==="paused"||s==="focused")return}else if(l==="blur"&&(s==="paused"||s==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),oe(ie(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var s=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(s==="hovered"||s==="playing")&&i.setState({autoplaying:"focused"}):s==="playing"&&i.setState({autoplaying:"hovered"})}),oe(ie(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),oe(ie(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),oe(ie(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),oe(ie(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),oe(ie(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),oe(ie(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),oe(ie(i),"render",function(){var l=(0,v6.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),s=X(X({},i.props),i.state),c=(0,Ce.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),d=i.props.pauseOnHover;c=X(X({},c),{},{onMouseEnter:d?i.onTrackOver:null,onMouseLeave:d?i.onTrackLeave:null,onMouseOver:d?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var u;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var p=(0,Ce.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=i.props.pauseOnDotsHover;p=X(X({},p),{},{clickHandler:i.changeSlide,onMouseEnter:g?i.onDotsLeave:null,onMouseOver:g?i.onDotsOver:null,onMouseLeave:g?i.onDotsLeave:null}),u=_e.default.createElement(b6.Dots,p)}var v,y,b=(0,Ce.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);b.clickHandler=i.changeSlide,i.props.arrows&&(v=_e.default.createElement(vp.PrevArrow,b),y=_e.default.createElement(vp.NextArrow,b));var C=null;i.props.vertical&&(C={height:i.state.listHeight});var m=null;i.props.vertical===!1?i.props.centerMode===!0&&(m={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(m={padding:i.props.centerPadding+" 0px"});var h=X(X({},C),m),f=i.props.touchMove,x={className:"slick-list",style:h,onClick:i.clickHandler,onMouseDown:f?i.swipeStart:null,onMouseMove:i.state.dragging&&f?i.swipeMove:null,onMouseUp:f?i.swipeEnd:null,onMouseLeave:i.state.dragging&&f?i.swipeEnd:null,onTouchStart:f?i.swipeStart:null,onTouchMove:i.state.dragging&&f?i.swipeMove:null,onTouchEnd:f?i.touchEnd:null,onTouchCancel:i.state.dragging&&f?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},j={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},j={className:l}),_e.default.createElement("div",j,i.props.unslick?"":v,_e.default.createElement("div",hl({ref:i.listRefHandler},x),_e.default.createElement(y6.Track,hl({ref:i.trackRefHandler},c),i.props.children)),i.props.unslick?"":y,i.props.unslick?"":u)}),i.list=null,i.track=null,i.state=X(X({},g6.default),{},{currentSlide:i.props.initialSlide,slideCount:_e.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var a=i.ssrInit();return i.state=X(X({},i.state),a),i}return S6(n,[{key:"didPropsChange",value:function(i){for(var a=!1,l=0,s=Object.keys(this.props);l<s.length;l++){var c=s[l];if(!i.hasOwnProperty(c)){a=!0;break}if(!(fl(i[c])==="object"||typeof i[c]=="function")&&i[c]!==this.props[c]){a=!0;break}}return a||_e.default.Children.count(this.props.children)!==_e.default.Children.count(i.children)}}]),n}(_e.default.Component);_l.InnerSlider=O6;var T6=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},I6=T6,R6=I6,M6=function(e){var t=/[height|width]$/;return t.test(e)},bp=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var a=e[r];r=R6(r),M6(r)&&typeof a=="number"&&(a=a+"px"),a===!0?t+=r:a===!1?t+="not "+r:t+="("+r+": "+a+")",i<n.length-1&&(t+=" and ")}),t},z6=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=bp(n),r<e.length-1&&(t+=", ")}),t):bp(e)},B6=z6,Em={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(N);function n(a){return a&&a.__esModule?a:{default:a}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(Em);var Xs,wp;function D6(){if(wp)return Xs;wp=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Xs=e,Xs}var Zs,Cp;function Pm(){if(Cp)return Zs;Cp=1;function e(r,i){var a=0,l=r.length,s;for(a;a<l&&(s=i(r[a],a),s!==!1);a++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Zs={isFunction:n,isArray:t,each:e},Zs}var Js,kp;function U6(){if(kp)return Js;kp=1;var e=D6(),t=Pm().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var a=this;this.listener=function(l){a.mql=l.currentTarget||l,a.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(a,l){if(a.equals(r))return a.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Js=n,Js}var qs,jp;function F6(){if(jp)return qs;jp=1;var e=U6(),t=Pm(),n=t.each,r=t.isFunction,i=t.isArray;function a(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return a.prototype={constructor:a,register:function(l,s,c){var d=this.queries,u=c&&this.browserIsIncapable;return d[l]||(d[l]=new e(l,u)),r(s)&&(s={match:s}),i(s)||(s=[s]),n(s,function(p){r(p)&&(p={match:p}),d[l].addHandler(p)}),this},unregister:function(l,s){var c=this.queries[l];return c&&(s?c.removeHandler(s):(c.clear(),delete this.queries[l])),this}},qs=a,qs}var Ks,Ap;function H6(){if(Ap)return Ks;Ap=1;var e=F6();return Ks=new e,Ks}(function(e){function t(w){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},t(w)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(N),r=_l,i=s(B6),a=s(Em),l=F;function s(w){return w&&w.__esModule?w:{default:w}}function c(){return c=Object.assign||function(w){for(var A=1;A<arguments.length;A++){var P=arguments[A];for(var R in P)Object.prototype.hasOwnProperty.call(P,R)&&(w[R]=P[R])}return w},c.apply(this,arguments)}function d(w,A){var P=Object.keys(w);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(w);A&&(R=R.filter(function(M){return Object.getOwnPropertyDescriptor(w,M).enumerable})),P.push.apply(P,R)}return P}function u(w){for(var A=1;A<arguments.length;A++){var P=arguments[A]!=null?arguments[A]:{};A%2?d(Object(P),!0).forEach(function(R){j(w,R,P[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(P)):d(Object(P)).forEach(function(R){Object.defineProperty(w,R,Object.getOwnPropertyDescriptor(P,R))})}return w}function p(w,A){if(!(w instanceof A))throw new TypeError("Cannot call a class as a function")}function g(w,A){for(var P=0;P<A.length;P++){var R=A[P];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(w,R.key,R)}}function v(w,A,P){return A&&g(w.prototype,A),Object.defineProperty(w,"prototype",{writable:!1}),w}function y(w,A){if(typeof A!="function"&&A!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(A&&A.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),A&&b(w,A)}function b(w,A){return b=Object.setPrototypeOf||function(R,M){return R.__proto__=M,R},b(w,A)}function C(w){var A=f();return function(){var R=x(w),M;if(A){var L=x(this).constructor;M=Reflect.construct(R,arguments,L)}else M=R.apply(this,arguments);return m(this,M)}}function m(w,A){if(A&&(t(A)==="object"||typeof A=="function"))return A;if(A!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(w)}function h(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function f(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(w){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(P){return P.__proto__||Object.getPrototypeOf(P)},x(w)}function j(w,A,P){return A in w?Object.defineProperty(w,A,{value:P,enumerable:!0,configurable:!0,writable:!0}):w[A]=P,w}var S=(0,l.canUseDOM)()&&H6(),k=function(w){y(P,w);var A=C(P);function P(R){var M;return p(this,P),M=A.call(this,R),j(h(M),"innerSliderRefHandler",function(L){return M.innerSlider=L}),j(h(M),"slickPrev",function(){return M.innerSlider.slickPrev()}),j(h(M),"slickNext",function(){return M.innerSlider.slickNext()}),j(h(M),"slickGoTo",function(L){var G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return M.innerSlider.slickGoTo(L,G)}),j(h(M),"slickPause",function(){return M.innerSlider.pause("paused")}),j(h(M),"slickPlay",function(){return M.innerSlider.autoPlay("play")}),M.state={breakpoint:null},M._responsiveMediaHandlers=[],M}return v(P,[{key:"media",value:function(M,L){S.register(M,L),this._responsiveMediaHandlers.push({query:M,handler:L})}},{key:"componentDidMount",value:function(){var M=this;if(this.props.responsive){var L=this.props.responsive.map(function(te){return te.breakpoint});L.sort(function(te,q){return te-q}),L.forEach(function(te,q){var le;q===0?le=(0,i.default)({minWidth:0,maxWidth:te}):le=(0,i.default)({minWidth:L[q-1]+1,maxWidth:te}),(0,l.canUseDOM)()&&M.media(le,function(){M.setState({breakpoint:te})})});var G=(0,i.default)({minWidth:L.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(G,function(){M.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(M){S.unregister(M.query,M.handler)})}},{key:"render",value:function(){var M=this,L,G;this.state.breakpoint?(G=this.props.responsive.filter(function(B){return B.breakpoint===M.state.breakpoint}),L=G[0].settings==="unslick"?"unslick":u(u(u({},a.default),this.props),G[0].settings)):L=u(u({},a.default),this.props),L.centerMode&&(L.slidesToScroll>1,L.slidesToScroll=1),L.fade&&(L.slidesToShow>1,L.slidesToScroll>1,L.slidesToShow=1,L.slidesToScroll=1);var te=n.default.Children.toArray(this.props.children);te=te.filter(function(B){return typeof B=="string"?!!B.trim():!!B}),L.variableWidth&&(L.rows>1||L.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),L.variableWidth=!1);for(var q=[],le=null,T=0;T<te.length;T+=L.rows*L.slidesPerRow){for(var U=[],H=T;H<T+L.rows*L.slidesPerRow;H+=L.slidesPerRow){for(var K=[],Z=H;Z<H+L.slidesPerRow&&(L.variableWidth&&te[Z].props.style&&(le=te[Z].props.style.width),!(Z>=te.length));Z+=1)K.push(n.default.cloneElement(te[Z],{key:100*T+10*H+Z,tabIndex:-1,style:{width:"".concat(100/L.slidesPerRow,"%"),display:"inline-block"}}));U.push(n.default.createElement("div",{key:10*T+H},K))}L.variableWidth?q.push(n.default.createElement("div",{key:T,style:{width:le}},U)):q.push(n.default.createElement("div",{key:T},U))}if(L==="unslick"){var I="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:I},te)}else q.length<=L.slidesToShow&&(L.unslick=!0);return n.default.createElement(r.InnerSlider,c({style:this.props.style,ref:this.innerSliderRefHandler},L),q)}}]),P}(n.default.Component);e.default=k})(rm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(rm);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(nm);const Sp=En(nm),$6=""+new URL("dotted-bg-4hL_dDVo.png",import.meta.url).href;Y.section`
  padding: 70px 0 408px 0;
  background-image: url(${$6});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;

  /*-- usability-card style --*/
  .usability-card {
    width: 100%;
    height: 600px;
    border-radius: 50px;
    background-color: ${({theme:e})=>e.colors.bgHero};
    padding: 84px;
    text-align: center;
    position: relative;
    z-index: 0;

    .shape-img {
      position: absolute;
      z-index: -1;

      &.img-1 {
        top: 0;
        left: 57px;
        width: 18%;
      }
      &.img-2 {
        bottom: 96px;
        right: 0;
        width: 17%;
      }
    }

    .section-title {
      h2 {
        color: ${({theme:e})=>e.colors.whiteColor};
        max-width: 450px;
        margin: auto;
        margin-bottom: 40px;
      }
    }

    .usability-buttons {
      margin-bottom: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      //flex-wrap: wrap;
      button {
        width: 180px;
        height: 50px;
        border-radius: 10px;
        background-color: ${({theme:e})=>e.colors.whiteColor}14;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        color: ${({theme:e})=>e.colors.whiteColor};
        transition: 0.3s;
        &:hover {
          background-color: ${({theme:e})=>e.colors.whiteColor}26;
        }
      }
    }

    .usability-content {
      .content-item {
        display: none;
        &.show {
          display: block;
        }
      }
    }
  }

  .usability-slider-nav {
    .slick-list {
      padding: 0 !important;
    }

    .slick-track {
      width: 100% !important;
      transform: translate3d(0px, 0px, 0px) !important;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;

      .slick-slide {
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 180px !important;
        height: 50px !important;
        border-radius: 10px;
        background-color: ${({theme:e})=>e.colors.whiteColor}14;

        &::before {
          position: absolute;
          z-index: -1;
          content: "";
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background-color: ${({theme:e})=>e.colors.whiteColor}26;
          opacity: 0;
          transition: 0.3s;
        }

        &.slick-current {
          &::before {
            opacity: 1;
            animation: tabAnimate 6s linear;
          }
        }
      }
    }

    .slider-item {
      width: 180px;
      height: 50px;
      border-radius: 10px;
      background-color: ${({theme:e})=>e.colors.whiteColor}14;
      display: flex !important;
      align-items: center;
      justify-content: center;
      gap: 15px;
      font-weight: 700;
      line-height: 30px;
      color: ${({theme:e})=>e.colors.whiteColor};
      transition: 0.3s;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  @keyframes tabAnimate {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  .usability-slider-for {
    margin-top: 50px;

    .slider-item {
      display: flex !important;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 991px) {
    padding: 0px 0 70px 0;
    .usability-card {
      height: 600px;
      padding: 84px 50px 20px 50px;

      &-title {
        margin-bottom: 44px;

        h2 {
          @include textStyle(40px, 700, 60px);
        }
      }

      .usability-buttons {
        margin-bottom: 50px;
        gap: 20px;
        button {
          width: 180px;
          height: 50px;
          gap: 10px;
        }
      }
    }
    .usability-slider-nav {
      .slick-track {
        .slick-slide {
          width: 175px !important;
        }
      }

      .slider-item {
        width: 175px !important;
        gap: 10px;
      }
    }
    .usability-slider-for {
      margin-top: 40px;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0px 80px;
    background-image: none;
    .usability-card {
      border-radius: 30px;
      height: auto;
      padding: 60px 25px 25px 25px;

      .section-title {
        margin-bottom: 44px;
        h2 {
          font-size: 40px;
        }
      }

      .usability-buttons {
        margin-bottom: 50px;
        gap: 20px;
        flex-wrap: wrap;

        button {
          width: 180px;
          height: 50px;
          gap: 10px;
        }
      }
    }
    .usability-slider-nav {
      max-width: 300px;
      margin: auto;
      .slick-track {
        gap: 10px;
        flex-direction: column;
        .slick-slide {
          width: 100% !important;
        }
      }

      .slider-item {
        width: 100% !important;
        gap: 10px;
        line-height: 22px;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    .usability-card {
      padding: 61px 30px 20px 30px;

      .section-title {
        margin-bottom: 20px;

        h2 {
          font-size: 36px;
          line-height: 150%;
          max-width: 308px;
          margin: auto;
        }
      }

      .usability-buttons {
        margin-bottom: 50px;
        gap: 10px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .usability-card {
      height: auto;
      padding: 61px 13px 20px 13px;
      .shape-img {
        &.img-1 {
          width: 33%;
        }
        &.img-2 {
          width: 33%;
        }
      }
    }

  }
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
    .usability-slider-nav {
      .slick-track {
        gap: 5px;
      }
    }
  }
`;Y.section`
  /*-- marketing-section start --*/
  .marketing-section {
    padding: 140px 0 0 0;
  }

  /*-- marketing-img style --*/
  .marketing-img {
    width: 100%;
    height: 420px;
    background-color: #f8f0e6;
    border-radius: 240px 240px 0px 0px;
    display: flex;
    align-items: flex-end;
    position: relative;

    > img {
      width: 400px;
      height: 380px;
      border-radius: 250px 250px 0px 0px;
    }

    &.v2 {
      background-color: #f6eafe;
      border-radius: 0px 0px 240px 240px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      > img {
        border-radius: 0 0 250px 250px;
      }
    }
    .overlay {
      img {
        width: auto;
        height: auto;
      }

      &-item {
        position: absolute;
      }
    }

    .chart {
      bottom: 0;
      left: 0;
      width: 188px;
      height: 85px;
      border-radius: 0px 45px 0px 0px;
      background-color: ${({theme:e})=>e.colors.whiteColor};
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
    }

    .emoji-icons {
      bottom: 40px;
      right: 22px;
      width: 209px;
      height: 70px;
      box-shadow: 0px 30px 50px ${({theme:e})=>e.colors.blackColor}26;
      border-radius: 35px;
      background-color: ${({theme:e})=>e.colors.whiteColor};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .star-1 {
      top: 74px;
      right: 93px;
    }
    .star-2 {
      top: 110px;
      right: 57px;
    }
    .star-3 {
      top: 135px;
      right: 119px;
    }

    .wave-shape {
      bottom: 121px;
      left: 45px;
    }

    .reduction-time {
      top: 30px;
      left: 0;
      width: 170px;
      height: 90px;
      border-radius: 0 45px 0 0;
      background-color: ${({theme:e})=>e.colors.whiteColor};
      padding: 24px 24px 24px 0;
      &-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      h2 {
        margin-bottom: 10px;
        font-size: 30px;
        line-height: 20px;
      }
      p {
        font-size: 13px;
        line-height: 20px;
        font-weight: 700;
      }
    }

    .success-rate {
      bottom: 71px;
      right: 60px;
      width: 170px;
      height: 170px;
      &-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    /* pie progress */
    .pie_progress {
      width: 130px;
      height: 130px;
      margin: auto 0;
      background-color: transparent;
      p{
        font-size: 13px;
        font-weight: 800;
      }
    }

    .pie_progress__label {
      margin-top: 0px;
    }

    .pie_progress__label h4 {
      font-size: 30px;
      color: ${({theme:e})=>e.colors.blackColor};
    }

    .pie_progress__label p {
      margin: 0;
      font-size: 13px;
      font-weight: 500;
      line-height: 20px;
    }
  }

  /*-- marketing-content style --*/
  .marketing-content {
    &-title {
      margin-bottom: 37px;
      h3 {
        text-transform: uppercase;
        font-size: 18px;
        line-height: 30px;
        color: ${({theme:e})=>e.colors.primary};
        letter-spacing: 0.2em;
        margin-bottom: 16px;
      }
    }
    &-body{
      padding-top: 4px;
    }
    .list {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        margin-top: 10px;
      }
      .list-item {
        display: flex;
        align-items: center;
        gap: 10px;
        p{
          margin-bottom: 0;
          font-size: 16px;
          font-weight: 500;
          color: ${({theme:e})=>e.colors.blackColor};
        }
        svg {
          font-size: 18px;
          color: ${({theme:e})=>e.colors.iconColor};
          position: relative;
          top: 0px;
        }
      }
    }
  }
  /*-- marketing-section end --*/

  @media screen and (max-width: 1850px) {
  }
  @media screen and (max-width: 1699px) {
  }
  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1499px) {
  }
  @media screen and (max-width: 1399px) {
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (min-width: 991px) and (max-width: 1200px) {
  }
  @media screen and (max-width: 991px) {
    .marketing-section {
      padding-top: 70px;
    }
    .marketing-img {
      width: 480px;
      height: 420px;
      margin-bottom: 40px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    .marketing-section {
      padding-top: 0px !important;
    }
    .marketing-section2{
      padding-top: 70px !important;
    }
    .marketing-content-title {
      margin-bottom: 30px;
      h3 {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 11px;
      }
      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }

    .marketing-img {
      .emoji-icons {
        padding: 10px;
        height: 48px;
        width: 145px;
      }

      .chart {
        width: 131px;
        height: 60px;
        padding: 20px 20px 0px 0px;
      }
    }
    .marketing-img {
      height: auto;

      > img {
        width: 85%;
        height: auto;
      }
    }

    .marketing-img .pie_progress__label {
      h4 {
        font-size: 20px;
        line-height: 15px;
      }

      p {
        font-size: 10px;
        line-height: 15px;
      }
    }

    .marketing-img .reduction-time {
      height: 62px;
      width: 118px;
      padding: 17px 27px 6px 0px;
      h2 {
        font-size: 20px;
        line-height: 15px;
      }
      p {
        font-size: 10px;
        line-height: 15px;
      }
    }

    .marketing-img .success-rate {
      height: 118px;
      width: 118px;
      bottom: 30px;
      right: 49px;
    }
    .marketing-img {
      .pie_progress__svg svg {
        top: 25px;
        left: 26px;
        width: 60%;
        height: 60%;
        margin: auto;
      }
    }
    .marketing-section {
      padding-top: 80px;
    }
    .marketing-img.v2 {
      width: 100%;
      margin-bottom: 42px;
    }
    /*-- marketing end --*/
  }
  @media screen and (max-width: 575px) {
    .marketing-img {
      width: 100%;
    }
  }
  @media screen and (max-width: 480px) {
    .marketing-img {
      height: auto;

      > img {
        width: 85%;
        height: auto;
      }
    }
  }
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
  @media screen and (min-width: 768px) {
    .marketing-img .success-rate {
      bottom: 71px;
      right: 30px;
    }
    .marketing-img .wave-shape {
      bottom: 121px;
      left: 0px;
    }
  }
`;const ui=Y.div`
  .section-title {
    p {
      margin-bottom: 5px;
    }
    &.v8 {
      p {
        color: ${({theme:e})=>e.colors.v8Title};
        font-family: ${({theme:e})=>e.fonts.dmSans};
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0.2em;
        margin-bottom: 10px;
      }
      &.title2 {
        p {
          color: ${({theme:e})=>e.colors.v8Title2};
        }
        h2 {
          color: ${({theme:e})=>e.colors.whiteColor};
        }
      }
    }
  }
  /*-- section-title style --*/
  .section-title {
    margin-bottom: 38px;
    .sub-title {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({theme:e})=>e.colors.primary};
      letter-spacing: 0.2em;
      margin-bottom: 12px;
      display: block;
    }
    .green-color {
      color: ${({theme:e})=>e.colors.primary6Deep};
    }
    .green-lite {
      color: ${({theme:e})=>e.colors.v8Title2};
    }
    .title {
      line-height: 60px;
      font-weight: 800;
      .caveat {
        font-size: 50px;
        line-height: 50px;
      }
    }
    h6 {
      margin-top: 12px;
    }
    h5 {
      font-family: ${({theme:e})=>e.fonts.dmSans};
      font-size: 18px;
      font-weight: 500;
      line-height: 26px;
      margin-top: 12px;
    }
    .love-icon {
      svg {
        color: ${({theme:e})=>e.colors.badgeColor};
      }
    }

    &.crypto {
      .sub-title {
        color: #01ffb0;
      }
      .title {
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }
    &.crypto2 {
      .sub-title {
        color: #4541fe;
      }
      .title {
        color: ${({theme:e})=>e.colors.title};
      }
    }
    &.crypto2 {
      &.title-green {
        .sub-title {
          color: #9fe870;
        }
        .title {
          color: ${({theme:e})=>e.colors.whiteColor};
        }
      }
    }
    &.corporate {
      .sub-title {
        color: #5ecc62;
      }
      .title {
        color: ${({theme:e})=>e.colors.title};
      }
    }
    &.sass {
      .sub-title {
        color: #0555ff;
      }
      .title {
        color: ${({theme:e})=>e.colors.title};
      }
    }
    &.defi {
      .sub-title {
        color: #37ea8e;
      }
      .title {
        color: ${({theme:e})=>e.colors.whiteColor};
        span.liniar {
          background: linear-gradient(90deg, #37ea8e 35.54%, #bdf93f 65.12%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .section-title h2 {
      font-size: 36px;
      line-height: 45px;
    }
    .section-title .title .caveat {
      font-size: 40px;
    }
    .section-title {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 991px) {
    .section-title h2 br {
      display: none;
    }
    .convert-visitors-slider-right .section-title h2 {
      font-size: 24px;
      margin-bottom: -20px;
    }
  }
  @media screen and (max-width: 767px) {
    .section-title .sub-title {
      font-size: 16px;
    }
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2 {
      font-size: 36px;
      line-height: 45px;
    }
  }
  @media screen and (max-width: 575px) {
    .download-wallet-overlay .section-title {
      text-align: center;
    }
  }
  @media screen and (max-width: 480px) {
    .team-section .section-title {
      margin-bottom: 40px;
    }
    .team-section .section-title h3 {
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 26px;
    }
    .team-section .section-title h2 {
      font-size: 20px;
      line-height: 40px;
    }
    .crypto2-benifits-section .section-title.crypto2.text-center {
      text-align: left !important;
    }
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var V0=function(e,t){return V0=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},V0(e,t)};function V6(e,t){V0(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var W6=100,Q6=100,Np=50,W0=50,Q0=50;function Ep(e){var t=e.className,n=e.counterClockwise,r=e.dashRatio,i=e.pathRadius,a=e.strokeWidth,l=e.style;return N.createElement("path",{className:t,style:Object.assign({},l,G6({pathRadius:i,dashRatio:r,counterClockwise:n})),d:_6({pathRadius:i,counterClockwise:n}),strokeWidth:a,fillOpacity:0})}function _6(e){var t=e.pathRadius,n=e.counterClockwise,r=t,i=n?1:0;return`
      M `+W0+","+Q0+`
      m 0,-`+r+`
      a `+r+","+r+" "+i+" 1 1 0,"+2*r+`
      a `+r+","+r+" "+i+" 1 1 0,-"+2*r+`
    `}function G6(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=Math.PI*2*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var Lm=function(e){V6(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return Np-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var n=this.props,r=n.value,i=n.minValue,a=n.maxValue,l=Math.min(Math.max(r,i),a);return(l-i)/(a-i)},t.prototype.render=function(){var n=this.props,r=n.circleRatio,i=n.className,a=n.classes,l=n.counterClockwise,s=n.styles,c=n.strokeWidth,d=n.text,u=this.getPathRadius(),p=this.getPathRatio();return N.createElement("svg",{className:a.root+" "+i,style:s.root,viewBox:"0 0 "+W6+" "+Q6,"data-test-id":"CircularProgressbar"},this.props.background?N.createElement("circle",{className:a.background,style:s.background,cx:W0,cy:Q0,r:Np}):null,N.createElement(Ep,{className:a.trail,counterClockwise:l,dashRatio:r,pathRadius:u,strokeWidth:c,style:s.trail}),N.createElement(Ep,{className:a.path,counterClockwise:l,dashRatio:p*r,pathRadius:u,strokeWidth:c,style:s.path}),d?N.createElement("text",{className:a.text,style:s.text,x:W0,y:Q0},d):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(N.Component);function Om(e){var t=e.rotation,n=e.strokeLinecap,r=e.textColor,i=e.textSize,a=e.pathColor,l=e.pathTransition,s=e.pathTransitionDuration,c=e.trailColor,d=e.backgroundColor,u=t==null?void 0:"rotate("+t+"turn)",p=t==null?void 0:"center center";return{root:{},path:ia({stroke:a,strokeLinecap:n,transform:u,transformOrigin:p,transition:l,transitionDuration:s==null?void 0:s+"s"}),trail:ia({stroke:c,strokeLinecap:n,transform:u,transformOrigin:p}),text:ia({fill:r,fontSize:i}),background:ia({fill:d})}}function ia(e){return Object.keys(e).forEach(function(t){e[t]==null&&delete e[t]}),e}function Tm(e){return((e*=2)<=1?e*e:--e*(2-e)+1)/2}function _0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ei(e){"@babel/helpers - typeof";return ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ei(e)}function Y6(e,t){if(ei(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Im(e){var t=Y6(e,"string");return ei(t)=="symbol"?t:t+""}function Pp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Im(r.key),r)}}function Rm(e,t,n){return t&&Pp(e.prototype,t),n&&Pp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function G0(e,t){return G0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},G0(e,t)}function Y0(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G0(e,t)}function Ti(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Mm(e,t){if(t&&(ei(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ti(e)}function ti(e){return ti=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ti(e)}var zm={exports:{}},X6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Z6=X6,J6=Z6;function Bm(){}function Dm(){}Dm.resetWarningCache=Bm;var q6=function(){function e(r,i,a,l,s,c){if(c!==J6){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Dm,resetWarningCache:Bm};return n.PropTypes=n,n};zm.exports=q6();var Um=zm.exports;function oa(e,t,n){return(t=Im(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ni=0,Ii=0,Ai=0,Fm=1e3,gl,Ri,xl=0,nr=0,ql=0,bo=typeof performance=="object"&&performance.now?performance:Date,Hm=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function o2(){return nr||(Hm(K6),nr=bo.now()+ql)}function K6(){nr=0}function wo(){this._call=this._time=this._next=null}wo.prototype=$m.prototype={constructor:wo,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?o2():+n)+(t==null?0:+t),!this._next&&Ri!==this&&(Ri?Ri._next=this:gl=this,Ri=this),this._call=e,this._time=n,X0()},stop:function(){this._call&&(this._call=null,this._time=1/0,X0())}};function $m(e,t,n){var r=new wo;return r.restart(e,t,n),r}function e7(){o2(),++ni;for(var e=gl,t;e;)(t=nr-e._time)>=0&&e._call.call(null,t),e=e._next;--ni}function Lp(){nr=(xl=bo.now())+ql,ni=Ii=0;try{e7()}finally{ni=0,n7(),nr=0}}function t7(){var e=bo.now(),t=e-xl;t>Fm&&(ql-=t,xl=e)}function n7(){for(var e,t=gl,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:gl=n);Ri=e,X0(r)}function X0(e){if(!ni){Ii&&(Ii=clearTimeout(Ii));var t=e-nr;t>24?(e<1/0&&(Ii=setTimeout(Lp,e-bo.now()-ql)),Ai&&(Ai=clearInterval(Ai))):(Ai||(xl=bo.now(),Ai=setInterval(t7,Fm)),ni=1,Hm(Lp))}}function Op(e,t,n){var r=new wo;return t=t==null?0:+t,r.restart(function(i){r.stop(),e(i+t)},t,n),r}function r7(e,t,n){var r=new wo;return r.restart(e,t,n),r}function Aa(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Aa=function(n){return typeof n}:Aa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Aa(e)}var i7=0;function o7(){return++i7}function Tp(e,t){for(var n in t)e[n]=t[n]}function a7(e){var t=!1;return function(){t||(t=!0,e.call(this))}}function l7(e){return Aa(e)==="object"&&Array.isArray(e)===!1}var s7=function(t){return+t},c7={delay:0,duration:250,ease:s7};function d7(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u7=function e(t){var n=this;d7(this,e),this.start=null,this.interrupt=null,this.end=null,t.events&&Object.keys(t.events).forEach(function(r){if(typeof t.events[r]!="function")throw new Error("Event handlers must be a function");n[r]=a7(t.events[r])})};function pr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){p7(e,i,n[i])})}return e}function p7(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f7(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h7(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m7(e,t,n){return t&&h7(e.prototype,t),e}var g7=function(){function e(t){f7(this,e),this.state=t||{}}return m7(e,[{key:"transition",value:function(n){if(Array.isArray(n)){var r=!0,i=!1,a=void 0;try{for(var l=n[Symbol.iterator](),s;!(r=(s=l.next()).done);r=!0){var c=s.value;this.parse(c)}}catch(d){i=!0,a=d}finally{try{!r&&l.return!=null&&l.return()}finally{if(i)throw a}}}else this.parse(n)}},{key:"isTransitioning",value:function(){return!!this.transitionData}},{key:"stopTransitions",value:function(){var n=this.transitionData;n&&Object.keys(n).forEach(function(r){n[r].timer.stop()})}},{key:"setState",value:function(n){typeof n=="function"?Tp(this.state,n(this.state)):Tp(this.state,n)}},{key:"parse",value:function(n){var r=this,i=pr({},n),a=new u7(i);i.events&&delete i.events;var l=pr({},c7,i.timing||{},{time:o2()});i.timing&&delete i.timing,Object.keys(i).forEach(function(s){var c=[],d=i[s];if(l7(d))Object.keys(d).forEach(function(v){var y=d[v];if(Array.isArray(y))y.length===1?c.push(r.getTween(v,y[0],s)):(r.setState(function(C){var m,h;return h={},h[s]=pr({},C[s],(m={},m[v]=y[0],m)),h}),c.push(r.getTween(v,y[1],s)));else if(typeof y=="function"){var b=function(){var m=function(f){r.setState(function(x){var j,S;return S={},S[s]=pr({},x[s],(j={},j[v]=y(f),j)),S})};return m};c.push(b)}else r.setState(function(C){var m,h;return h={},h[s]=pr({},C[s],(m={},m[v]=y,m)),h}),c.push(r.getTween(v,y,s))});else if(Array.isArray(d))if(d.length===1)c.push(r.getTween(s,d[0],null));else{var u;r.setState((u={},u[s]=d[0],u)),c.push(r.getTween(s,d[1],null))}else if(typeof d=="function"){var p=function(){var y=function(C){var m;r.setState((m={},m[s]=d(C),m))};return y};c.push(p)}else{var g;r.setState((g={},g[s]=d,g)),c.push(r.getTween(s,d,null))}r.update({stateKey:s,timing:l,tweens:c,events:a,status:0})})}},{key:"getTween",value:function(n,r,i){var a=this;return function(){var l=i?a.state[i][n]:a.state[n];if(l===r)return null;var s=a.getInterpolator(l,r,n,i),c;return i===null?c=function(u){var p;a.setState((p={},p[n]=s(u),p))}:c=function(u){a.setState(function(p){var g,v;return v={},v[i]=pr({},p[i],(g={},g[n]=s(u),g)),v})},c}}},{key:"update",value:function(n){this.transitionData||(this.transitionData={}),this.init(o7(),n)}},{key:"init",value:function(n,r){var i=this,a=r.tweens.length,l=new Array(a),s=function(g){r.status=1,r.timer.restart(c,r.timing.delay,r.timing.time),r.timing.delay<=g&&c(g-r.timing.delay)};this.transitionData[n]=r,r.timer=$m(s,0,r.timing.time);var c=function p(g){if(r.status!==1)return u();for(var v in i.transitionData){var y=i.transitionData[v];if(y.stateKey===r.stateKey){if(y.status===3)return Op(p);y.status===4?(y.status=6,y.timer.stop(),y.events.interrupt&&y.events.interrupt.call(i),delete i.transitionData[v]):+v<n&&(y.status=6,y.timer.stop(),delete i.transitionData[v])}}if(Op(function(){r.status===3&&(r.status=4,r.timer.restart(d,r.timing.delay,r.timing.time),d(g))}),r.status=2,r.events.start&&r.events.start.call(i),r.status===2){r.status=3;for(var b=-1,C=0;C<a;++C){var m=r.tweens[C]();m&&(l[++b]=m)}l.length=b+1}},d=function(g){var v=1;g<r.timing.duration?v=r.timing.ease(g/r.timing.duration):(r.timer.restart(u),r.status=5);for(var y=-1;++y<l.length;)l[y](v);r.status===5&&(r.events.end&&r.events.end.call(i),u())},u=function(){r.status=6,r.timer.stop(),delete i.transitionData[n];for(var g in i.transitionData)return;delete i.transitionData}}}]),e}();function x7(e,t,n,r){for(var i=[],a=0;a<n.length;a++)i[a]=n[a];for(var l=0;l<e.length;l++)r[e[l]]===void 0&&i.push(e[l]);return i.sort(function(s,c){var d=r[s],u=r[c],p=t[s],g=t[c];if(d!=null&&u!=null)return r[s]-r[c];if(p!=null&&g!=null)return t[s]-t[c];if(d!=null){for(var v=0;v<n.length;v++){var y=n[v];if(t[y]){if(d<r[y]&&g>t[y])return-1;if(d>r[y]&&g<t[y])return 1}}return 1}for(var b=0;b<n.length;b++){var C=n[b];if(t[C]){if(u<r[C]&&p>t[C])return 1;if(u>r[C]&&p<t[C])return-1}}return-1})}var ec="ENTER",v7="UPDATE",tc="LEAVE";function Vm(e,t){var n=+e,r=+t-n;return function(i){return n+r*i}}function Ip(e){var t=y7();return function(){var r=ti(e),i;if(t){var a=ti(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Mm(this,i)}}function y7(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var a2=function(e){Y0(n,e);var t=Ip(n);function n(r){var i;_0(this,n),i=t.call(this,r),oa(Ti(i),"animate",function(){var s=i.state,c=s.nodeKeys,d=s.nodeHash;if(!i.unmounting){for(var u=!1,p=[],g=c.length,v=0;v<g;v++){var y=c[v],b=d[y],C=b.isTransitioning();C&&(u=!0),b.type===tc&&!C?delete d[y]:p.push(y)}u||i.interval.stop(),i.setState(function(){return{nodeKeys:p,nodes:p.map(function(m){return d[m]})}})}}),oa(Ti(i),"interval",null),oa(Ti(i),"unmounting",!1);var a=r.interpolation,l=function(s){Y0(d,s);var c=Ip(d);function d(u,p){var g;return _0(this,d),g=c.call(this),oa(Ti(g),"getInterpolator",a),g.key=u,g.data=p,g.type=ec,g}return d}(g7);return i.state={Node:l,nodeKeys:[],nodeHash:{},nodes:[],data:null},i}return Rm(n,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"componentDidUpdate",value:function(i){i.data!==this.props.data&&!this.unmounting&&this.startInterval()}},{key:"startInterval",value:function(){this.interval?this.interval.restart(this.animate):this.interval=r7(this.animate)}},{key:"componentWillUnmount",value:function(){var i=this.state,a=i.nodeKeys,l=i.nodeHash;this.unmounting=!0,this.interval&&this.interval.stop(),a.forEach(function(s){l[s].stopTransitions()})}},{key:"render",value:function(){var i=this.props.children(this.state.nodes);return i&&J.Children.only(i)}}],[{key:"getDerivedStateFromProps",value:function(i,a){if(i.data!==a.data){for(var l=i.data,s=i.keyAccessor,c=i.start,d=i.enter,u=i.update,p=i.leave,g=a.Node,v=a.nodeKeys,y=a.nodeHash,b={},C=0;C<v.length;C++)b[v[C]]=C;for(var m={},h=[],f=0;f<l.length;f++){var x=l[f],j=s(x,f);if(m[j]=f,h.push(j),b[j]===void 0){var S=new g;S.key=j,S.data=x,S.type=ec,y[j]=S}}for(var k=0;k<v.length;k++){var w=v[k],A=y[w];m[w]!==void 0?(A.data=l[m[w]],A.type=v7):A.type=tc}for(var P=x7(v,b,h,m),R=0;R<P.length;R++){var M=P[R],L=y[M],G=L.data;L.type===ec?(L.setState(c(G,m[M])),L.transition(d(G,m[M]))):L.type===tc?L.transition(p(G,b[M])):L.transition(u(G,m[M]))}return{data:l,nodes:P.map(function(te){return y[te]}),nodeHash:y,nodeKeys:P}}return null}}]),n}(N.Component);a2.propTypes={};a2.defaultProps={enter:function(){},update:function(){},leave:function(){},interpolation:Vm};function b7(e){var t=w7();return function(){var r=ti(e),i;if(t){var a=ti(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Mm(this,i)}}function w7(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var C7=function(){return"$$key$$"},l2=function(e){Y0(n,e);var t=b7(n);function n(){return _0(this,n),t.apply(this,arguments)}return Rm(n,[{key:"render",value:function(){var i=this.props,a=i.show,l=i.start,s=i.enter,c=i.update,d=i.leave,u=i.interpolation,p=i.children,g=typeof l=="function"?l():l;return J.createElement(a2,{data:a?[g]:[],start:function(){return g},keyAccessor:C7,interpolation:u,enter:typeof s=="function"?s:function(){return s},update:typeof c=="function"?c:function(){return c},leave:typeof d=="function"?d:function(){return d}},function(v){if(!v[0])return null;var y=p(v[0].state);return y&&J.Children.only(y)})}}]),n}(N.Component);l2.propTypes={};l2.defaultProps={show:!0,interpolation:Vm};class s2 extends J.Component{constructor(){super(...arguments);mt(this,"interval");mt(this,"state",{isAnimated:!1})}componentDidMount(){this.props.repeat?this.interval=window.setInterval(()=>{this.setState({isAnimated:!this.state.isAnimated})},this.props.duration*1e3):this.setState({isAnimated:!this.state.isAnimated})}componentWillUnmount(){window.clearInterval(this.interval)}render(){return o.jsx(l2,{start:()=>({value:this.props.valueStart}),update:()=>({value:[this.state.isAnimated?this.props.valueEnd:this.props.valueStart],timing:{duration:this.props.duration*1e3,ease:this.props.easingFunction}}),children:({value:n})=>this.props.children(n)})}}mt(s2,"defaultProps",{valueStart:0});const k7=({TextColor:e,Percentage:t,ValueColor:n,PathColor:r,TrailColor:i})=>o.jsx(s2,{valueStart:0,valueEnd:t,duration:1.4,easingFunction:Tm,children:a=>o.jsx(Lm,{value:a,text:`${Math.round(a)}%`,strokeWidth:5,styles:Om({textColor:e,pathColor:r,trailColor:i})})}),j7="data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.5455%2011C14.5045%2014.7333%2012.7442%2021.8889%2012.7442%2025C10.2296%2019.1333%205.20031%2014.7778%203%2013.3333C10.5439%2010.4%2013.2681%203.88889%2013.6872%201C13.9387%207.93333%2019.0308%2010.5556%2021.5455%2011Z'%20stroke='%23F7578C'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",A7="data:image/svg+xml,%3csvg%20width='170'%20height='170'%20viewBox='0%200%20170%20170'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M170%2085C170%20131.944%20131.944%20170%2085%20170C38.0558%20170%203.32694e-06%20131.944%207.43094e-06%2085L1.48619e-05%203.96917e-07L85%207.82785e-06C131.944%201.19318e-05%20170%2038.0558%20170%2085Z'%20fill='white'/%3e%3c/svg%3e";function S7(e){return nn({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z"},child:[]}]})(e)}function Wm(e){return nn({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"},child:[]}]})(e)}Y.section`
  .integrate-card {
    margin-bottom: 40px;
    width: 100%;
    height: 450px;
    border-radius: 30px;
    background-color: #eaf1ff;
    padding: 70px 48px;
    position: relative;
    overflow: hidden;
    z-index: 0;
    &-header {
      margin-bottom: 34px;
      h3{
        margin-bottom: 0;
        font-weight: 800;
      }
    }
    h2 {
      font-size: 30px;
      line-height: 45px;
    }
    p {
      margin-top: 25px;
    }

    &.v2 {
      background-color: #f8f0e6;
    }

    .shape-img {
      position: absolute;
      z-index: -1;
      //bottom: 0;
      &.img-1 {
        bottom: 0;
        left: 0;
      }
      &.img-2 {
        bottom: 61px;
        right: 68px;
      }
      &.img-3 {
        bottom: 139px;
        right: 148px;
      }
      &.img-4 {
        bottom: 95px;
        left: 58px;
      }
      &.img-5 {
        bottom: 0;
        left: 150px;
      }
    }
  }

  /*-- integrate-slider style --*/
  .integrate-slider {
    width: 100%;
    height: 92px;
    position: relative;
    overflow: hidden;
    padding-top: 10px;

    &-container {
      width: calc(120px * 8);
      display: flex;
      align-items: center;
      animation: smoothSlider2 15s linear infinite;
    }

    &::before {
      position: absolute;
      z-index: 1;
      content: "";
      top: 0;
      left: 0;
      width: 220px;
      height: 100%;
      background: linear-gradient(
        90deg,
        #eaf1ff 0%,
        rgba(234, 241, 255, 0) 100%
      );
    }
    &::after {
      position: absolute;
      z-index: 1;
      content: "";
      top: 0;
      right: 0;
      width: 220px;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(234, 241, 255, 0) 0%,
        #eaf1ff 100%
      );
      transform: matrix(1, 0, 0, -1, 0, 0);
    }
    .slider-item {
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: ${({theme:e})=>e.colors.whiteColor};
        padding: 22px;
      }
    }
  }
  @keyframes smoothSlider2 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(calc(-120px * 4));
    }
  }

  @media screen and (max-width: 767px) {
    .integrate-card {
      margin-bottom: 30px;
      padding: 38px 20px;
    }
    .integrate-slider {
      &-container {
        gap: 30px;
      }

      &::before {
        width: 100px;
      }

      &::after {
        width: 100px;
      }
    }

    .integrate-card p {
      margin-top: 18px;
    }
  }
  @media screen and (max-width: 480px) {
    .integrate-card {
      padding: 30px;
      height: 420px;

      .shape-img {
        &.img-2 {
          bottom: 61px;
          right: 5%;
        }

        &.img-3 {
          bottom: 139px;
          right: 25%;
        }

        &.img-4 {
          bottom: 95px;
          left: 5%;
        }

        &.img-5 {
          bottom: 0;
          left: 30%;
        }
      }
    }
  }
  @media screen and (max-width: 374px) {
    .integrate-card h2 {
      font-size: 26px;
      line-height: 40px;
    }
  }
`;const N7=Y.section`
  /*-- Testimonail-section start --*/
  padding: 140px 0;

  /*-- testimonial-card style --*/
  .testimonial-card {
    border-radius: 50px;
    background-color: ${({theme:e})=>e.colors.bgHero};
    display: flex;
    align-items: center;
    position: relative;

    &-left,
    &-right {
      padding: 40px;
      width: 50%;
      height: 530px;
      flex: 0 0 auto;
    }

    &-left {
      text-align: center;
      position: relative;
      overflow: hidden;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({theme:e})=>e.colors.whiteColor}0a;
      }

      .shape-img {
        position: absolute;
        z-index: -1;
        &.img-1 {
          top: 49px;
          left: 0;
        }
        &.img-2 {
          bottom: 0;
          left: 96px;
        }
        &.img-3 {
          top: 40%;
          right: 0;
        }
        &.img-4 {
          top: 70px;
          right: 65px;
          .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }

      .sass-testimonials-shapes {
        .shape1 {
          position: absolute;
          left: 0px;
          top: 145px;
        }
        .shape2 {
          position: absolute;
          left: 40px;
          bottom: 71px;
          transition: 0.3s;
        }
        .shape3 {
          position: absolute;
          right: 40px;
          top: 67px;
        }
        .shape4 {
          position: absolute;
          right: 0px;
          bottom: 123px;
          z-index: 11;
          transition: 0.3s;
        }
      }
    }

    &-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .testimonial-slider-img {
      img {
        width: 270px;
        height: 350px;
        border-radius: 135px;
      }
    }

    .slider-img {
      img {
        width: 270px;
        height: 350px;
        border-radius: 135px;
      }
    }

    .slider-counter-box {
      position: absolute;
      bottom: 86px;
      right: 70px;
    }
  }

  /*-- testimonial-title style --*/
  .testimonial-title {
    margin-bottom: 40px;
    h3 {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({theme:e})=>e.colors.primary};
      letter-spacing: 0.2em;
      margin-bottom: 16px;
    }
    h2 {
      color: ${({theme:e})=>e.colors.whiteColor};
      svg {
        color: ${({theme:e})=>e.colors.badgeColor};
      }
    }
  }

  /*-- testimonial-slider style --*/
  .testimonial-slider-nav {
    .slick-list {
      padding: 0 !important;
    }

    .slick-track {
      width: 100% !important;
      transform: translate3d(0px, 0px, 0px) !important;
    }

    .slick-slide {
      position: relative;
      overflow: hidden;
      width: 270px !important;
      height: 350px !important;
      border-radius: 135px;
      background-color: ${({theme:e})=>e.colors.whiteColor}14;
      transition: 0.3s;
      display: none;
      img {
        width: 100%;
        height: 100%;
      }
      &.slick-current,
      &.slick-active {
        display: block;
      }
    }
  }

  .testimonial-slider-for {
    .slick-slide .slider-item {
      p {
        margin-bottom: 35px;
        font-size: 18px;
        line-height: 36px;
        color: ${({theme:e})=>e.colors.whiteColor};
        height: 146px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .author-info {
        color: ${({theme:e})=>e.colors.whiteColor};
        .name {
          font-weight: 700;
          margin-right: 10px;
        }
      }
      .slider-item-user {
        display: flex;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
      }
    }
  }

  .slider-info {
    position: relative;
    z-index: 10;
    width: fit-content;
    margin-top: -30px;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    .slider-arrow {
      cursor: pointer;
      svg {
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }

    .slider-counter {
      p {
        color: ${({theme:e})=>e.colors.whiteColor};
        margin-bottom: 0;
      }
    }
  }

  .testimonial-slider {
    .slider-item {
      .slider-img {
        display: none !important;
      }
      p {
        margin-bottom: 35px;
        font-size: 18px;
        font-weight: 500;
        line-height: 36px;
        color: ${({theme:e})=>e.colors.whiteColor};
      }
      h2 {
        font-size: 15px;
        font-weight: 700;
        line-height: 26px;
        color: ${({theme:e})=>e.colors.whiteColor};
      }
      h3 {
        font-size: 15px;
        font-weight: 500;
        line-height: 26px;
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }

    .slider-item-user {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .owl-nav {
      margin-top: 0;
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      gap: 50px;
      button {
        margin: 0 !important;
        svg {
          font-size: 20px;
          color: ${({theme:e})=>e.colors.whiteColor};
        }
        &:hover {
          background: transparent !important;
        }
      }
    }
  }

  .sub-title {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    color: ${({theme:e})=>e.colors.primary};
    letter-spacing: 0.2em;
    margin-bottom: 12px;
    display: block;
  }

  .love-icon {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 25px;

    svg {
      color: ${({theme:e})=>e.colors.badgeColor};
    }
  }
  /*-- Testimonail-section end --*/

  @media screen and (max-width: 1850px) {
  }
  @media screen and (max-width: 1699px) {
  }
  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1499px) {
    .testimonial-slider {
      .slider-item {
        p {
          font-size: 15px;
          line-height: 28px;
        }
      }
    }
  }
  @media screen and (max-width: 1399px) {
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (min-width: 991px) and (max-width: 1200px) {
  }
  @media screen and (max-width: 991px) {
    padding: 90px 0px;
    .testimonial-card {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      &-left,
      &-right {
        width: 100%;
        min-height: 530px;
        height: unset;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    padding: 70px 0px;
    .testimonial-card{
      border-radius: 30px;
    }
    .testimonial-slider {
      .owl-nav {
        margin-top: 0px;
        bottom: -30px;
        right: unset;
        left: 0;
        gap: 20px;
      }
    }
    .testimonial-seciton {
      padding: 60px 0px 60px;
    }
    .testimonial-card {
      .slider-counter-box {
        display: none;
        bottom: 43px;
        right: unset;
        left: 60px;
      }
      &-left {
        .shape-img {
          &img-4 {
            top: auto;
            bottom: 19px;
            left: 36px;
            right: auto;
          }
        }
      }
    }
    .testimonial-card {
      &-left {
        min-height: auto;
        padding: 50px 20px 100px 20px;
      }
      &-right {
        min-height: auto;
        padding: 42px 20px 44px 20px;
      }
    }
    .testimonial-title {
      margin-bottom: 17px;
      h3 {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 9px;
      }
      h2 {
        font-size: 32px;
        line-height: 50px;
      }
    }
    .testimonial-slider-for .slider-item p {
      font-size: 15px;
      line-height: 30px;
      margin-bottom: 23px;
    }
    .slider-info {
      margin-top: 15px;
      margin-left: auto;
      margin-right: auto;
    }

    .sub-title{
      font-size: 16px;
    }
    .love-icon{
      font-size: 36px;
    }
  }

  @media screen and (max-width: 575px) {
    
  }

  @media screen and (max-width: 480px) {
    .testimonial-card {
      &-left,
      &-right {
        padding: 30px 20px 40px;
      }

      &-left .shape-img.img-4 {
        top: 20px;
        right: 33px;
      }
    }
    .testimonial-slider-for {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .slider-info {
        position: relative;
      }
    }
  }
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
  @media screen and (min-width: 768px) {
  }
`,Rp=""+new URL("testimonial1-Ykg20YnT.png",import.meta.url).href,E7=""+new URL("testimonial2-veuUtxSu.png",import.meta.url).href,P7=""+new URL("testimonial3-ZLWnneyS.png",import.meta.url).href,L7=""+new URL("testimonial4-BTP1DRSt.png",import.meta.url).href,fr=[{id:1,image:Rp,name:"Roe Smith",designation:"Director, Growth King",review:"I must explain to you how all this mistaken. Tdea of denouncing pleasure and praising pain was born and I will give you acomplete account. Create automation scenarios with on your own servers. 😍"},{id:2,image:E7,name:"Roe Smith",designation:"Director, Growth King",review:"We use as filler text for layouts, non-readability is of great importance but because those who do not know how to pleasure rationally encounter consequences that are pleasure rationally encounter ❤️ ❤️"},{id:3,image:P7,name:"Roe Smith",designation:"Director, Growth King",review:"Making this the first true 😍 generator on the Internet. It uses a dictionary of over words, combined with a handful of model sentence structures, to generate 👏👏"},{id:4,image:L7,name:"Roe Smith",designation:"Director, Growth King",review:"Very denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, combined with a handfulso blinded by desire encounter 🥰 🤜 🤛"},{id:5,image:Rp,name:"Roe Smith",designation:"Director, Growth King",review:"Making this the first true 😍 generator on the Internet. It uses a dictionary of over words, combined with a handful of model sentence structures, to generate 👏👏"}];function O7(e){return nn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"},child:[]}]})(e)}function T7(e){return nn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"},child:[]}]})(e)}function I7(e){return nn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"},child:[]}]})(e)}function R7(e){return nn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}const M7=""+new URL("testimonial-shape1-BbJv0rfr.png",import.meta.url).href,z7=""+new URL("testimonial-shape2-DX6kTmsX.png",import.meta.url).href,B7=""+new URL("testimonial-shape3-DO88KUva.png",import.meta.url).href,D7="data:image/svg+xml,%3csvg%20width='70'%20height='70'%20viewBox='0%200%2070%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M-2.6963e-07%2035C-1.20718e-07%2015.67%2015.67%201.20718e-07%2035%202.6963e-07C54.33%204.18543e-07%2070%2015.67%2070%2035L70%2070L35%2070C15.67%2070%20-4.18543e-07%2054.33%20-2.6963e-07%2035Z'%20fill='%2300CEC9'/%3e%3ccircle%20cx='34.7158'%20cy='34.7163'%20r='25'%20fill='white'/%3e%3c/svg%3e",U7="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAARCAYAAAAsT9czAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJISURBVHgBvVSxctNgDJYc5y7HAG57x/z3bHPZCE+Au6VhoG+QZuxW3oA8ARnZkj4BZUnMFPcJ6hGwQ9wNllxYuN7FrtBvx9R2f7dM1eL/JH36JFkSgkIsq+sA4FtEOCIAkSoR34ffp0N4QCSWUOtrQE6GxTVoNAy/zUZYdBTtrtATHPPTUQVKYhTL5fRKZbPtXoeAPtRg12Ew29FLzgnMAchQBeMsozoi88WbPhGN+FmHXcuvnlekJCK4IgQPiaIkhokqUNpyulHZLmSCSOAnMZ3/I2smOKcCUeZEgzB0PXhAEHFMZZUPRO9UWM00D2+HIA/AZHJATLt7DPeIzfYqlsEZluNW/dGyep8A6aguoKwy2dBBFLlR1WbZvUv26PwvVuNMBNwjXKXQm3gpRFfhV0+UYxtNnAvhGBmZCsCDUdEYTDguKtptFfldbJqs3jrdklWd6SAMZyJu0H66kLfSyTNUc0AUb2hfYhHwVcmG2FeRXeRTFH11I4SbzwWbgfjkGdQKefm/CYKpz4n6xeq2ZKXsX5azx9elcPTnd/6+vm4VcRwQRf6WMbC8s6kv8vhOCLIy04DZ2HvsLMFOAeDzySm1x7IP50Wf7RKfl25qqqfJInAHXJk2KlYnS2ai4woRHwm4e4SJhuXqmADhtLp7ySbDNlar4OfenvmLXWt3TQZdLNyPVfVqFUa7uxZ3EB01ENdc1cnyRzYHjS3If/rcOmsQ7DBS9tpIq0X6wj044aGZQI0w1sux3CXBqlZ6UwnO+CYOcqJHl782IApGrt8/mQAAAABJRU5ErkJggg==",F7=()=>{const[e,t]=N.useState(null),[n,r]=N.useState(null);let i=N.useRef(null),a=N.useRef(null);N.useEffect(()=>{t(i),r(a)},[]);const[l,s]=N.useState(0),c={slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!1,autoplay:!0,speed:500,autoplaySpeed:6e3,infinite:!0,pauseOnHover:!1,pauseOnFocus:!1,afterChange:b=>s(b)},d={slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0,pauseOnHover:!1,pauseOnFocus:!1},u=()=>{i.slickPrev()},p=()=>{i.slickNext()},g=()=>o.jsxs("div",{className:"slider-info",children:[o.jsx("button",{className:"slider-arrow left",onClick:u,children:o.jsx(q4,{})}),o.jsx("div",{className:"slider-counter",children:o.jsxs("p",{children:[l+1,"/5"]})}),o.jsx("button",{className:"slider-arrow right",onClick:p,children:o.jsx(K4,{})})]}),v=N.useRef(null),y=N.useRef(null);return N.useEffect(()=>{const b=()=>{if(!v.current||!y.current)return;const C=window.scrollY,m=v.current.offsetTop-400;let h=(C-m)/4;h=Math.max(0,Math.min(h,45)),y.current.style.transform=C>m?`rotate(-${h}deg)`:`rotate(${h}deg)`};return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]),o.jsx(N7,{ref:v,children:o.jsx("div",{className:"container",children:o.jsx(O,{delay:250,children:o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-md-12",children:o.jsxs("div",{className:"testimonial-card",children:[o.jsxs("div",{className:"testimonial-card-left",children:[o.jsxs("div",{className:"bg-shape",children:[o.jsx("div",{className:"shape-img img-1",children:o.jsx(O,{delay:200,children:o.jsx("img",{src:M7,alt:"shape-img"})})}),o.jsx("div",{className:"shape-img img-2",children:o.jsx(O,{delay:220,children:o.jsx("img",{src:z7,alt:"shape-img"})})}),o.jsx("div",{className:"shape-img img-3",children:o.jsx(O,{delay:240,children:o.jsx("img",{src:B7,alt:"shape-img"})})}),o.jsxs("div",{className:"shape-img img-4",children:[o.jsx("img",{className:"rotate-icon",src:D7,alt:"shape-img",ref:y}),o.jsx("div",{className:"icon",children:o.jsx("img",{src:U7,alt:"shape-img"})})]})]}),o.jsx(Sp,{...d,className:"testimonial-slider-nav",asNavFor:e,ref:b=>a=b,children:fr==null?void 0:fr.map((b,C)=>o.jsx("div",{className:"slider-item",children:o.jsx("img",{src:b.image,alt:"slider-img"})},C))})]}),o.jsxs("div",{className:"testimonial-card-right",children:[o.jsx(O,{delay:250,children:o.jsxs("div",{className:"section-title",children:[o.jsx("span",{className:"sub-title",children:"Testimonials"}),o.jsxs("h2",{className:"title white-color love-icon",children:["We",o.jsx(R7,{}),"Feedback"]})]})}),o.jsxs(O,{delay:300,children:[o.jsx(Sp,{...c,className:"testimonial-slider-for",asNavFor:n,ref:b=>i=b,children:fr==null?void 0:fr.map((b,C)=>o.jsxs("div",{className:"slider-item",children:[o.jsx("p",{children:b.review}),o.jsx("div",{className:"slider-item-user",children:o.jsxs("div",{className:"author-info",children:[o.jsxs("span",{className:"name",children:[b.name,","]}),o.jsx("span",{className:"duration",children:b.designation})]})})]},C))}),o.jsx(g,{})]})]})]})})})})})})},c2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA0SURBVHgB7ZKxCQBACAPzv/8CmVZxgVioheCBnRyBBBCQtDj181HkBA2Cl9U0nkByQ9oicLuwDg6pxV3RAAAAAElFTkSuQmCC",d2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAACCAYAAABR7VzxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAaSURBVHgBpcAxAQAAAAHBp/8qLyGcSMvBnAZIGAKXumD/KQAAAABJRU5ErkJggg==",H7="data:image/svg+xml,%3csvg%20width='1919'%20height='523'%20viewBox='0%200%201919%20523'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.0615234%20521.851C0.0615234%20521.851%20305.307%20503.551%20375.135%20380.197C444.963%20256.842%20211.062%20270.255%20304.231%20388.619C397.4%20506.983%20708.732%20434.03%20780.701%20358.956C852.671%20283.882%20909.507%20187.24%20909.507%20187.24C909.507%20187.24%201103.85%20309.764%201311.81%20229.321C1519.78%20148.878%201531.19%2093.5891%201498.82%2063.2807C1466.45%2032.9724%201385.16%2074.9922%201510.65%20193.111C1636.15%20311.229%201919.24%200.686493%201919.24%200.686493'%20stroke='%23D1FDE9'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M337.175%20319.409C351.125%20319.409%20359.305%20325.856%20359.305%20336.922C359.305%20350.872%20344.872%20353.664%20344.872%20363.766H328.803C328.803%20349.431%20339.388%20347.891%20339.388%20340.481C339.388%20337.691%20338.04%20336.439%20335.155%20336.439C331.596%20336.439%20329.958%20338.843%20329.958%20344.04H313.409C313.409%20328.55%20322.165%20319.409%20337.175%20319.409ZM346.411%20378.68C346.411%20384.548%20342.369%20388.591%20336.5%20388.591C330.728%20388.591%20326.685%20384.548%20326.685%20378.68C326.685%20372.907%20330.728%20368.865%20336.5%20368.865C342.372%20368.865%20346.411%20372.907%20346.411%20378.68Z'%20stroke='%2300CEC9'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M296.65%20287.65C292.66%20280.7%20288.68%20273.75%20284.69%20266.79C284.13%20265.81%20283.57%20264.83%20283%20263.85C282.04%20262.18%20279.45%20263.68%20280.41%20265.36C284.4%20272.31%20288.38%20279.26%20292.37%20286.22C292.93%20287.2%20293.49%20288.18%20294.06%20289.16C295.02%20290.84%20297.61%20289.33%20296.65%20287.65Z'%20fill='%23D1FDE9'/%3e%3cpath%20d='M306.021%20282.97C305.541%20276.99%20305.061%20271%20304.581%20265.02C304.511%20264.16%20304.441%20263.3%20304.371%20262.44C304.221%20260.53%20301.221%20260.51%20301.371%20262.44C301.851%20268.42%20302.331%20274.4%20302.811%20280.39C302.881%20281.25%20302.951%20282.11%20303.021%20282.97C303.181%20284.88%20306.181%20284.9%20306.021%20282.97Z'%20fill='%23D1FDE9'/%3e%3cpath%20d='M286.09%20294.29C282.06%20291.65%20278.03%20289.01%20274%20286.38C273.42%20286%20272.84%20285.61%20272.25%20285.23C271.58%20284.79%20270.6%20285.1%20270.2%20285.77C269.77%20286.5%20270.06%20287.38%20270.74%20287.82C274.77%20290.46%20278.8%20293.09%20282.83%20295.73C283.41%20296.11%20283.99%20296.49%20284.58%20296.87C285.26%20297.31%20286.24%20297.01%20286.63%20296.33C287.06%20295.61%20286.77%20294.73%20286.09%20294.29Z'%20fill='%23D1FDE9'/%3e%3cpath%20d='M1485.51%2076.7537C1492.61%2080.2639%201495.15%2085.6033%201492.36%2091.2344C1488.85%2098.3349%201480.81%2096.1251%201478.26%20101.266L1470.08%2097.2229C1473.69%2089.9265%201479.47%2091.8055%201481.33%2088.0341C1482.03%2086.613%201481.66%2085.6372%201480.19%2084.911C1478.38%2084.0142%201476.94%2084.8273%201475.64%2087.4715L1467.21%2083.3101C1471.11%2075.4252%201477.87%2072.9772%201485.51%2076.7537ZM1475.29%20109.242C1473.81%20112.229%201470.74%20113.27%201467.75%20111.792C1464.82%20110.34%201463.78%20107.266%201465.25%20104.28C1466.7%20101.341%201469.78%20100.301%201472.72%20101.756C1475.71%20103.23%201476.74%20106.306%201475.29%20109.242Z'%20stroke='%2300CEC9'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M1513.77%2044.79C1516.51%2038.94%201519.24%2033.09%201521.98%2027.24C1522.32%2026.51%201522.19%2025.62%201521.44%2025.19C1520.79%2024.81%201519.73%2024.99%201519.39%2025.73C1516.65%2031.58%201513.92%2037.43%201511.18%2043.28C1510.84%2044.01%201510.97%2044.9%201511.72%2045.33C1512.37%2045.71%201513.42%2045.53%201513.77%2044.79Z'%20fill='%23D1FDE9'/%3e%3cpath%20d='M1519.29%2053.02C1525.87%2048.65%201532.46%2044.29%201539.04%2039.92C1539.99%2039.29%201540.94%2038.66%201541.89%2038.03C1543.49%2036.97%201541.99%2034.37%201540.38%2035.44C1533.8%2039.81%201527.21%2044.17%201520.63%2048.54C1519.68%2049.17%201518.73%2049.8%201517.78%2050.43C1516.18%2051.49%201517.68%2054.09%201519.29%2053.02Z'%20fill='%23D1FDE9'/%3e%3cpath%20d='M1523.91%2061.66C1529.56%2060.86%201535.22%2060.06%201540.87%2059.26C1541.67%2059.15%201542.48%2059.03%201543.28%2058.92C1544.08%2058.81%201544.52%2057.78%201544.33%2057.07C1544.09%2056.21%201543.29%2055.91%201542.48%2056.02C1536.83%2056.82%201531.17%2057.62%201525.52%2058.42C1524.72%2058.53%201523.91%2058.65%201523.11%2058.76C1522.31%2058.87%201521.87%2059.9%201522.06%2060.61C1522.3%2061.47%201523.11%2061.77%201523.91%2061.66Z'%20fill='%23D1FDE9'/%3e%3c/svg%3e";Y.section`
  padding: 92px 0 140px 0;

  &.v2 {
    padding: 132px 0 70px 0;
  }
  &.pricing-plan-faq-seciton {
    background: ${({theme:e})=>e.colors.whiteColor};
    padding: 132px 0 140px 0;
  }

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 50px;
    .faq-section-title {
      margin-bottom: 0px;
    }
  }

  /*-- faq-section-title style --*/
  .faq-section-title {
    margin-bottom: 98px;
    h3 {
      margin-bottom: 16px;
      text-transform: uppercase;
      font-size: 18px;
      color: ${({theme:e})=>e.colors.primary};
      letter-spacing: 0.2em;
    }
  }

  /*-- leave-message style --*/
  .leave-message {
    &1 {
      display: block;
    }
    &2 {
      display: none;
    }
    h2 {
      font-size: 18px;
      line-height: 30px;
      color: ${({theme:e})=>e.colors.blackColor};
    }
    h3 {
      color: ${({theme:e})=>e.colors.textColor};
    }
    .msg-btn {
      position: relative;
      .rotate-icon {
        transform: rotate(-45deg);
        transition: 0.3s;
      }
      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
      }
    }
  }

  /*-- template-accordion style --*/
  .template-accordion {
    .accordion-item {
      border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      border-radius: 15px;
      &:not(:first-child) {
        margin-top: 20px;
      }
      &:first-child {
        border-top-left-radius: 15px !important;
        border-top-right-radius: 15px !important;
      }
      &:last-child {
        border-bottom-left-radius: 15px !important;
        border-bottom-right-radius: 15px !important;
      }
      &.collapsed {
        box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}14;
      }
    }

    .accordion-header {
      border: 0 !important;
      border-radius: 15px !important;
      background-color: transparent;
    }

    .accordion-button {
      border-radius: 15px !important;
      font-size: 18px;
      font-weight: 700;
      line-height: 133.33%;
      color: ${({theme:e})=>e.colors.title};
      padding: 18px 20px 20px 50px;
      position: relative;

      &::after {
        position: absolute;
        content: url(${c2});
        top: 22px;
        left: 20px;
        width: 20px;
        height: 20px;
        border: 0 !important;
        background-image: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:not(.collapsed) {
        background-color: transparent;
        box-shadow: none;

        &::after {
          content: url(${d2});
          top: 27px;
        }
      }

      &:focus {
        box-shadow: none;
      }
    }

    .accordion-collapse.show {
      border-radius: 15px;
      box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}14;
    }

    .accordion-body {
      padding: 0 20px 20px 50px;
    }
  }

  .faq-section-4 {
    padding: 132px 0 135px 0;
    position: relative;
    z-index: 0;

    &::before {
      position: absolute;
      z-index: -1;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${H7});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
    }
    &.app-faq-section {
      &::before {
        display: none;
      }
    }
  }

  .faq-section-4-title {
    margin-bottom: 30px;
    text-align: center;
    h3 {
      margin-bottom: 16px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({theme:e})=>e.colors.primary};
    }

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      color: ${({theme:e})=>e.colors.title};
    }
  }

  .faq-section-4-tab {
    .nav.nav-tabs {
      border-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .nav-link {
      background: ${({theme:e})=>e.colors.whiteColor};
      border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      border-radius: 26px;
      padding: 12px 28px;
      font-weight: 700;
      font-size: 15px;
      line-height: 24px;
      text-align: center;
      color: ${({theme:e})=>e.colors.blackColor};
      transition: 0.3s;
      &.active {
        border: 1px solid transparent;
        background-color: #e7f1fc;
        color: ${({theme:e})=>e.colors.primary};
      }
    }

    .tab-content {
      margin-top: 50px;
    }
  }

  .faq-section-4-bottom {
    margin-top: 72px;
    text-align: center;

    h4 {
      font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({theme:e})=>e.colors.blackColor};
    }

    h5 {
      font-size: 15px;
      line-height: 30px;
      color: ${({theme:e})=>e.colors.textColor};
    }

    .text-link {
      margin: 15px auto 0;
    }
  }

  /*-- faq-section end --*/

  @media screen and (max-width: 991px) {
    &.v2 {
      padding-top: 72px;
    }
    &.pricing-plan-faq-seciton {
      padding: 70px 0px 80px;
    }
    .template-accordion {
      .accordion-button {
        &::after {
          top: 20px;
        }

        &:not(.collapsed) {
          padding-bottom: 10px;
        }
      }

      .accordion-body {
        p {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 80px;
    .leave-message {
      margin-bottom: 0px;
      text-align: center;
      &1 {
        display: none;
      }
      &2 {
        display: block;
        margin-top: 50px;
      }
      .text-link {
        margin: auto;
      }
      h3 {
        font-size: 26px;
        max-width: 375px;
        margin: auto;
      }
      .msg-btn {
        .icon {
          left: 30px;
        }
      }
    }
    .template-accordion {
      .accordion-button {
        font-size: 16px;
        line-height: 30px;
      }
    }
    .template-accordion .accordion-button::after {
      top: 24px;
    }
    .faq-section-4-title h2,
    .testimonial-section-4-title h2 {
      font-size: 32px;
      line-height: 45px;
    }
    .faq-section-4 {
      padding: 70px 0;
    }
  }
  @media screen and (max-width: 575px) {
    &.v2 {
      padding: 70px 0 60px 0;
    }

    &-header {
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    .faq-section-4-title {
      h3 {
        margin-bottom: 10px;
        @include textStyle(16px, 700, 26px);
      }

      h2 {
        @include textStyle(30px, 700, 50px);
      }
    }

    .faq-section-4-tab {
      .nav.nav-tabs {
        gap: 10px;
      }

      .nav-link {
        border-radius: 26px;
        padding: 10px 15px;
      }

      .tab-content {
        margin-top: 40px;
      }
    }

    .faq-section-4-bottom {
      margin-top: 40px;
      text-align: center;
    }
  }
`;const $7="data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30%2060C13.4315%2060%20-5.87108e-07%2046.5685%20-1.31134e-06%2030C-2.03558e-06%2013.4315%2013.4315%202.98917e-06%2030%202.26494e-06L60%209.53596e-07L60%2030C60%2046.5685%2046.5685%2060%2030%2060Z'%20fill='%2300CEC9'/%3e%3cpath%20d='M30%2053C17.2975%2053%207%2042.7026%207%2030C7%2017.2975%2017.2974%207%2030%207C42.7025%207%2053%2017.2975%2053%2030C53%2042.7025%2042.7026%2053%2030%2053Z'%20fill='white'/%3e%3c/svg%3e",V7="data:image/svg+xml,%3csvg%20width='20'%20height='18'%20viewBox='0%200%2020%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%205.70588C1%202.41176%202.8%201%205.5%201H14.5C17.2%201%2019%202.41176%2019%205.70588V12.2941C19%2015.5882%2017.2%2017%2014.5%2017H5.5'%20stroke='%23111111'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5%206.17627L11.683%208.52921C10.756%209.30098%209.235%209.30098%208.308%208.52921L5.5%206.17627'%20stroke='%23111111'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2013.2354H6.4'%20stroke='%23111111'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%209.47058H3.7'%20stroke='%23111111'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",W7=""+new URL("main-footer-bg-VOX8pJkT.png",import.meta.url).href,Q7=""+new URL("chatbot-footer-bg-BSi6-Egq.png",import.meta.url).href,_7=""+new URL("bg_footer-4ECt0ZRl.png",import.meta.url).href,Qm=""+new URL("grain-texture-DYWmYZVu.png",import.meta.url).href,G7=""+new URL("newsletter-footer-bg-BFxtV6Lv.png",import.meta.url).href,Y7=""+new URL("sass-footer-demo-bg-DfkHef0m.png",import.meta.url).href,_m=Y.footer`
  background-color: ${({theme:e})=>e.colors.bgFooter};
  position: relative;
  z-index: 0;

  &.home-footer{
    background: #191C1F;
    border: none !important;
    .footer-inner{
      border-radius: 50px 50px 0px 0px;
      background-image: url(${W7});
      background-size: cover;
      background-position: top right;
      background-repeat: no-repeat;
    }
    .footer-card{
      max-width: 320px;
    }
    .footer-widget {
      margin-bottom: 45px;
      .widget-title{
        margin-bottom: 30px;
      }
    }
  }
  &.crypto2 {
    background: ${({theme:e})=>e.colors.whiteColor};
    .footer-info {
      p {
        color: ${({theme:e})=>e.colors.textColor};
      }
    }
    .footer-widget {
      .widget-title {
        h6 {
          color: ${({theme:e})=>e.colors.title};
          font-weight: 800;
        }
      }
      .widget-list {
        li {
          a {
            color: ${({theme:e})=>e.colors.title};
          }
        }
      }
    }
    .template-badge {
      background: #4541fe;
    }
    .footer-follow {
      p {
        color: ${({theme:e})=>e.colors.textColor};
      }
      }
    }

    .footer-one-social-link{
        gap: 15px !important;
        li{
          a{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 46px;
            width: 46px;
            border-radius: 50%;
            border-radius: 46px;
            border: 2px solid rgba(255, 255, 255, 0.15);
            img{
              opacity: 1 !important;
            }
            &:hover{
              border-radius: 46px;
              border: 2px solid rgba(255, 255, 255, 0.20);
              background: rgba(255, 255, 255, 0.10);
              .social-icon{
                img{
                  transform: translateY(-24px) !important;
                }
              }
            }
          }
        }

    .footer-copyright {
      p {
        color: ${({theme:e})=>e.colors.textColor};
      }
    }
    .privacy-menu {
      li {
        a {
          color: ${({theme:e})=>e.colors.textColor};
        }
      }
    }
    .footer-bottom {
      border-top: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    }
  }

  .footer-one-menu-list{
    padding-top: 55px;
    h6{
      font-size: 16px;
    }
    ul{
      li{
        a{
          color: ${({theme:e})=>e.colors.whiteColor} !important;
          font-weight: 700;
          line-height: 150%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        ol{
          list-style: none;
          margin-bottom: 30px;
          margin-top: 25px;
          position: relative;
          padding-left: 17px;
          &.label-none{
            margin-bottom: 30px;
          }
          
          &::after{
            content: '';
            height: 95%;
            width: 2px;
            position: absolute;
            top: 3px;
            left: 1px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 2px;
          }
          li{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            .template-badge {
                border-radius: 100px;
                background-color: #f7578c;
                padding: 0px 10px;
                text-transform: uppercase;
                font-size: 13px;
                font-weight: 700;
                line-height: 25px;
                color: #ffffff;
            }
            a{
              color: ${({theme:e})=>e.colors.whiteOp80} !important;
              font-weight: 500;
              position: relative;
              &::before{
                transition: 0.3s;
              }
              &:hover{
                padding-left: 10px;
                color: ${({theme:e})=>e.colors.whiteColor} !important;
                &::before{
                  content: '';
                  height: 2px;
                  width: 10px;
                  position: absolute;
                  left: -14px;
                  background: rgba(255, 255, 255, 0.15);
                  border-radius: 0 2px 2px 0;
                } 
              }
            }
          }
        }
      }
    }
  }

  &.v2 {
    background-color: ${({theme:e})=>e.colors.bodyBG2};
    border-radius: 50px 50px 0px 0px;
    .footer-widget {
      margin-top: 0;
      .widget-title h6 {
        color: ${({theme:e})=>e.colors.title};
        font-weight: 800;
      }
      .widget-list {
        margin: 0;
        padding: 0;
        list-style: none;
        li a {
          color: ${({theme:e})=>e.colors.textColor};
          &:hover {
            color: ${({theme:e})=>e.colors.title};
          }
        }
      }
    }

    .footer-bottom {
      border-top: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    }

    .footer-copyright {
      text-align: right;
      p {
        color: ${({theme:e})=>e.colors.textColor};
      }
    }
  }

  &.v3 {
    background-color: ${({theme:e})=>e.colors.whiteColor};
    &::before {
      position: absolute;
      z-index: -1;
      content: "";
      top: 0;
      left: 0;
      width: 36.5%;
      height: 100%;
      background-color: #edf0f5;
    }

    .footer-copyright p {
      color: ${({theme:e})=>e.colors.textColor};
    }
    .footer-widget {
      margin-top: 0;
      .widget-title {
        h6 {
          font-weight: 800;
          color: ${({theme:e})=>e.colors.title};
        }
      }
      .widget-list {
        margin: 0;
        padding: 0;
        list-style: none;
        li a {
          color: ${({theme:e})=>e.colors.textColor};
          &:hover {
            color: ${({theme:e})=>e.colors.title};
          }
        }
      }
    }

    .footer-bottom {
      border-top: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    }

    .footer-copyright {
      text-align: right;
    }
  }

  &.v4 {
    &::before {
      position: absolute;
      z-index: -1;
      content: "";
      top: 0;
      left: 0;
      width: 36.5%;
      height: 100%;
      background-color: ${({theme:e})=>e.colors.whiteColor}05;
    }
    .footer-info {
      margin-bottom: 10px;
    }
    h4 {
      font-size: 18px;
      color: ${({theme:e})=>e.colors.whiteColor};
      font-weight: 600;
    }
    h5 {
      margin-top: 20px;
      font-size: 15px;
      line-height: 36px;
      color: ${({theme:e})=>e.colors.whiteColor};
      a {
        margin-left: 10px;
        background: linear-gradient(270deg, #0095ff 0.85%, #f7578c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 800;
        text-fill-color: transparent;
      }
    }
  }

  &.v6 {
    background: ${({theme:e})=>e.colors.hero6Bg};
    border-radius: 30px;
    .v6template-badge {
      background: ${({theme:e})=>e.colors.primary6Deep};
    }
  }

  &.finance-footer-container {
    max-width: 1560px;
    padding: 0px 20px;
    margin: auto;
    background-color: transparent;

    .finance-footer-section {
      background: #1f2334;
      border-radius: 30px;
    }
  }

  /*-- footer-top start --*/
  .footer-top {
    padding: 120px 0 70px 0;
    .footer-follow p {
      margin-bottom: 0;
    }
  }

  /*-- footer-info style --*/
  .footer-info {
    margin-bottom: 58px;
    .footer-logo {
      margin-bottom: 37px;
      display: block;
    }
    p {
      color: ${({theme:e})=>e.colors.whiteColor}b2;
    }
  }

  /*-- .footer-follow style --*/
  .footer-follow {
    display: flex;
    align-items: center;
    gap: 20px;
    p {
      font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
      color: ${({theme:e})=>e.colors.whiteColor};
    }
    .social-link {
      display: flex;
      align-items: center;
      gap: 20px;
      li a {
        img {
          width: 16px;
          height: 16px;
          opacity: 0.7;
          transition: 0.3s;
        }
        transition: 0.3s;
        &:hover {
          opacity: 1;
          img {
            opacity: 1;
          }
          .social-icon{
            img{
              transform: translateY(-28px);
            }
          }
        }
      }
    }
  }
  

  /*-- footer-img style --*/
  .footer-img {
    position: relative;
    a {
      position: absolute;
      top: 72px;
      left: 72px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: ${({theme:e})=>e.colors.whiteColor};
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 16px;
        color: ${({theme:e})=>e.colors.primary};
      }
    }
  }

  /*-- footer-widget style --*/
  .footer-widget {
    margin-top: 23px;
    .widget-title {
      margin-bottom: 25px;
      h6 {
        text-transform: uppercase;
        font-weight: 800;
        color: ${({theme:e})=>e.colors.whiteColor};
        margin-bottom: 0;
      }
    }

    .widget-list {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        &:not(:first-child) {
          margin-top: 20px;
        }
      }
      li a {
        color: ${({theme:e})=>e.colors.whiteColor}b2;
        transition: 0.3s;
        span {
          margin-left: 8px;
        }
        &:hover {
          color: ${({theme:e})=>e.colors.whiteColor};
        }
      }
    }
  }

  .footer-copyright {
    p {
      color: ${({theme:e})=>e.colors.textColor};
      margin-bottom: 0;
    }
  }

  /*-- footer-top end --*/

  /*-- footer-bottom start --*/
  .footer-bottom {
    border-top: 1px solid ${({theme:e})=>e.colors.borderColor};
    padding: 30px 0;
    .footer-rating {
      margin: 0;
      padding: 0;
      list-style: none;
      p {
        margin-bottom: 0;
      }
    }
  }

  /*-- social-link style --*/
  .social-link {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      a{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 46px;
        width: 46px;
        border-radius: 50%;
        border-radius: 46px;
        border: 2px solid rgba(0, 0, 0, 0.15);
        overflow: hidden;
        img{
          opacity: 1 !important;
        }
        &:hover{
          border-radius: 46px;
          border: 2px solid rgba(0, 0, 0, 0.20);
          background: transparent;
          
          .social-icon{
            img{
              transform: translateY(-28px);
            }
            &.small{
              img{
                transform: translateY(-24px);
              }
            }
          }
        }
      }
    }
    &.dark{
      a{
        border: 2px solid rgba(255, 255, 255, 0.15);
        &:hover{
          border: 2px solid rgba(255, 255, 255, 0.20);
          background: rgba(255, 255, 255, 0.15);
        }
      }
    }
    &.corporate-footer-social-link, 
    &.social-link-right{
      justify-content: flex-end;
    }
    .social-icon{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      overflow: hidden;
      height: 18px;
      transition: 0.3s;
      img{
        margin-bottom: 10px;
        transition: 0.3s;
      }
    }
  }

  

  /*-- footer-copyright style --*/
  .footer-copyright {
    p {
      color: ${({theme:e})=>e.colors.whiteColor}b2;
    }
    &.crypto-wallet-two{
      p{
        color: ${({theme:e})=>e.colors.blackColor}cc;
      }
    }
  }

  /*-- privacy-menu style --*/
  .privacy-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    margin: 0;
    padding: 0;
    list-style: none;
    li a {
      color: ${({theme:e})=>e.colors.whiteColor}b2;
      transition: 0.3s;
      &:hover {
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }
    &.crypto-wallet-two{
      li{
        a{
          color: ${({theme:e})=>e.colors.blackColor}cc;
        }
      }
    }
  }

  /*-- footer-rating style --*/
  .footer-rating {
    display: flex;
    align-items: center;
    gap: 50px;
    .list-item {
      display: flex;
      align-items: center;
      gap: 10px;
      .icon {
        img {
          width: 16px;
          height: 16px;
        }
      }
      .text {
        display: flex;
        align-items: center;
        gap: 5px;
        svg {
          font-size: 16px;
          line-height: 26px;
          color: ${({theme:e})=>e.colors.badgeColor2};
        }
        p {
          font-weight: 500;
          font-size: 15px;
          line-height: 26px;
          color: ${({theme:e})=>e.colors.whiteColor};
        }
      }
    }
  }
  /*-- footer-bottom end --*/

  &.footer6-section {
    margin-top: 124px;
    position: relative;
    background-color: ${({theme:e})=>e.colors.whiteColor};

    .footer-copyright-dark {
      p {
        color: ${({theme:e})=>e.colors.title};
      }
    }
    .footer-contact-text {
      top: 5px;
    }
    &.corporate-footer-section {
      background: #101722;
      margin-top: 0px;
      padding-top: 140px;
      .footer-copyright-dark {
        p {
          color: ${({theme:e})=>e.colors.whiteColor}cc;
          a {
            color: ${({theme:e})=>e.colors.whiteColor};
            transition: 0.3s;
          }
        }
      }
    }
  }

  .footer-contact-section {
    margin-bottom: 84px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer-contact-line {
      width: 100%;
      height: 1px;
      background: ${({theme:e})=>e.colors.blackColor}1a;
      position: absolute;
      left: 0px;
      top: 18px;
      z-index: 1;
    }
    .footer-contact {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 30px;
      margin-left: -20px;
    }
    .footer-contact-text {
      position: relative;
      z-index: 2;
      max-width: 180px;
      width: 100%;
      p {
        min-width: 100px;
        max-width: 100px;
        padding-left: 20px;
        background: ${({theme:e})=>e.colors.whiteColor};
        text-transform: uppercase;
      }
      h5 {
        font-family: ${({theme:e})=>e.fonts.dmSans};
        font-size: 18px;
        font-weight: 700;
        line-height: 36px;
        padding-left: 20px;
        min-width: max-content;
      }
    }
  }

  .footer-top6 {
    border-bottom: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    padding-bottom: 92px;
    .footer-col {
      h6 {
        font-size: 18px;
        font-weight: 600;
        line-height: 30px;
        margin-top: 35px;
        margin-bottom: 30px;
      }

      h5 {
        font-family: ${({theme:e})=>e.fonts.dmSans};
        font-size: 18px;
        font-weight: 700;
        line-height: 32px;
        margin-bottom: 37px;
        text-transform: uppercase;
      }

      ul {
        li {
          a {
            font-family: ${({theme:e})=>e.fonts.dmSans};
            color: ${({theme:e})=>e.colors.textColor};
            transition: 0.3s;
            &:hover {
              color: ${({theme:e})=>e.colors.primary};
            }
          }
        }
      }

      p {
        margin-bottom: 12px;
      }
      form {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        input {
          width: 100%;
          font-family: ${({theme:e})=>e.fonts.dmSans};
          border: 2px solid ${({theme:e})=>e.colors.blackColor}1a;
          border-radius: 25px;
          padding: 9px 21px;
          max-width: 270px;
          width: 100%;
          margin-bottom: 20px;
        }
        button {
          color: ${({theme:e})=>e.colors.whiteColor};
          background: ${({theme:e})=>e.colors.primary};
          padding: 9px 38px;
          border-radius: 25px;
        }
      }
      &.v8 {
        ul {
          li {
            padding-bottom: 10px;
            a {
              &:hover {
                color: ${({theme:e})=>e.colors.v8Title};
              }
            }
          }
        }
        form {
          button {
            background: ${({theme:e})=>e.colors.v8Title};
            transition: 0.3s;
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
      &.corporate-footer-col {
        p {
          color: ${({theme:e})=>e.colors.whiteColor}cc;
        }
        ul {
          li {
            padding-bottom: 18px;
            a {
              color: ${({theme:e})=>e.colors.whiteColor}cc;
              &:hover {
                color: #5ecc62;
              }
            }
          }
        }
        form {
          input {
            background: transparent;
            color: ${({theme:e})=>e.colors.whiteColor};
            border: 2px solid ${({theme:e})=>e.colors.whiteColor}1f;
            &::placeholder {
              color: ${({theme:e})=>e.colors.whiteColor}cc;
            }
          }
          button {
            background: #5ecc62;
            transition: 0.3s;
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }



  .text-link.v8,
  .text-link.v8:hover {
    color: ${({theme:e})=>e.colors.v8Title};
  }

  .text-link.corpotate,
  .text-link.corpotate:hover {
    color: #5ecc62;
  }

  &.v7-footer-area {
    position: fixed;
    z-index: 0;
    bottom: 0px;
    left: 0px;
    width: 100%;
  }

  .footer-section-v7 {
    background: ${({theme:e})=>e.colors.bgFooter};
    padding-top: 99px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    .footer-section-grain-texture {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }

  .footer-section-mash-gard {
    position: absolute;
    z-index: 0;
    top: 0%;
    //transform: translate(-45%, -60%);
    //    transform: translate(-50%, -50%);
    width: 827px;
    height: 566px;
  }

  .footer-v7-content {
    position: relative;
    z-index: 4;
  }

  .footer-v7-text {
    text-align: center;
    max-width: 535px;
    width: 100%;
    margin: auto;
    margin-bottom: 60px;
    h2 {
      margin-bottom: 45px;
      color: ${({theme:e})=>e.colors.whiteColor};
    }
    .leav-msg-btn {
      border-radius: 50px;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
      transition: 0.5s;
      margin: auto;
    }
  }

  .v7footer-contact-card {
    background: ${({theme:e})=>e.colors.whiteColor}0d;
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 45px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .v7footer-card-text {
      color: ${({theme:e})=>e.colors.whiteColor};
      p {
        text-transform: uppercase;
      }
      h6 {
        font-size: 18px;
        line-height: 36px;
        margin-bottom: 0;
        color: #fff;
      }
      &.text-right {
        p {
          margin-bottom: 10px;
        }
      }
    }
  }

  .v7-main-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 0px;
    .back-to-top-btn {
      margin: auto;
      .icon {
        transform: rotate(-90deg);
        font-size: 28px;
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }
    .copyright-text {
      color: ${({theme:e})=>e.colors.whiteColor}cc;
      width: 47%;
      a {
        transition: 0.3s;
        &:hover {
          color: ${({theme:e})=>e.colors.whiteColor};
        }
      }
    }
    .privacy-menu {
      width: 47%;
    }
  }

  .footer-top-section {
    padding: 75px 0px;
    background: url(../images/nft/footer-top-bg.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 50%;
      background: ${({theme:e})=>e.colors.whiteColor}0d;
    }
    .footer-top-text {
      position: relative;
      z-index: 2;
      max-width: 352px;
      &.right {
        margin-left: 240px;
      }
      p {
        font-size: 16px;
        line-height: 50px;
        font-weight: 700;
        margin-bottom: 0px;
        text-transform: uppercase;
        color: ${({theme:e})=>e.colors.whiteColor};
      }

      h3 {
        font-size: 30px;
        line-height: 50px;
        font-weight: 700;
        margin-bottom: 0px;
        color: ${({theme:e})=>e.colors.whiteColor};
        img {
          margin-left: 10px;
        }
      }
    }
  }

  .nft-footer-section {
    padding-top: 78px;
    background: ${({theme:e})=>e.colors.whiteColor};
    margin-top: 100px;
  }
  .nft-top-footer {
    margin-bottom: 54px;
  }
  .nft-footer-logo {
    .logo-dark {
      display: block;
    }

    .logo-light {
      display: none;
    }
  }
  .nft-newsletter {
    h5 {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 4px;
    }
    form {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 10px;
      input {
        background: transparent;
        padding: 8px 19px;
        height: 45px;
        border: 1px solid ${({theme:e})=>e.colors.blackColor}1f;
        border-radius: 25px;
        max-width: 300px;
        width: 100%;
      }
      button {
        width: 160px;
        height: 45px;
        font-weight: 700;
        background: #5f5fff;
        border-radius: 25px;
        color: ${({theme:e})=>e.colors.whiteColor};
        padding: 8px;
        transition: 0.3s;
        img {
          margin-left: 13px;
        }
      }
    }
  }
  .nft-footer-social-list {
    margin-top: 38px;
    ul {
      padding: 0px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 369px;
      width: 100%;
      margin-bottom: 90px;
    }
  }
  .nft-footer-menu {
    h5 {
      margin-bottom: 21px;
      font-size: 16px;
    }
    ul {
      list-style: none;
      padding: 0px;
      li {
        line-height: 40px;
        a {
          transition: 0.3s;
          &:hover {
            color: ${({theme:e})=>e.colors.title};
          }
        }
      }
    }
  }

  .nft-bottom-footer-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    ul {
      list-style: none;
      padding: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 343px;
      width: 100%;
      margin-bottom: 0px;
      gap: 20px;
      flex-wrap: wrap;
      li {
        color: ${({theme:e})=>e.colors.title};
        font-weight: 700;
        span {
          font-weight: 500;
          color: ${({theme:e})=>e.colors.textColor};
        }
      }
    }
  }
  .nft-bottom-footer {
    position: relative;
    padding: 40px 0px;
    p {
      margin-bottom: 0px;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .nft-blur-shape {
      position: absolute;
      bottom: 0px;
      z-index: 0;
      transform: translateX(50%, -50%);
      width: 100%;
      text-align: center;
    }
    .row {
      position: relative;
      z-index: 2;
    }
  }

  .footer-dropdown {
    max-width: 130px;
    width: 100%;
    margin-left: auto;
    background: ${({theme:e})=>e.colors.whiteColor};
    border: 1px solid ${({theme:e})=>e.colors.blackColor}1f;
    border-radius: 30px;
    position: relative;
    height: 45px;

    &::after {
      content: ">";
      position: absolute;
      top: 6px;
      right: 20px;
      font-size: 20px;
      transform: rotate(90deg);
    }

    select {
      padding: 2px 20px;
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      line-height: auto;
      color: ${({theme:e})=>e.colors.textColor};
      font-weight: 500;
      -webkit-appearance: none;
    }
  }

  /*-- Dark Mood --*/
  body.dark-scheme,
  html.dark-scheme body {
    .nft-footer-section {
      background: #181d22;
    }
    .nft-footer-logo {
      .logo-dark {
        display: none;
      }

      .logo-light {
        display: block;
      }
    }
    .nft-newsletter {
      form {
        input {
          background: ${({theme:e})=>e.colors.whiteColor}14;
          border: 1px solid ${({theme:e})=>e.colors.whiteColor}1f;
        }
      }
    }
    .nft-footer-menu {
      ul {
        li {
          a {
            &:hover {
              color: ${({theme:e})=>e.colors.whiteColor};
            }
          }
        }
      }
    }

    .nft-footer-menu {
      ul {
        li {
          a {
            color: ${({theme:e})=>e.colors.whiteColor}cc;
          }
        }
      }
    }
    .nft-bottom-footer {
      p {
        color: ${({theme:e})=>e.colors.whiteColor}cc;
      }
    }
    .nft-newsletter {
      p {
        color: ${({theme:e})=>e.colors.whiteColor}cc;
      }
    }
    .nft-bottom-footer-right {
      ul {
        li {
          color: ${({theme:e})=>e.colors.whiteColor};
          span {
            color: ${({theme:e})=>e.colors.whiteColor}cc;
          }
        }
      }
    }

    .footer-dropdown {
      background: #181d22;
      border: 1px solid ${({theme:e})=>e.colors.iconColor};
      background: ${({theme:e})=>e.colors.whiteColor}14;
      border: 1px solid ${({theme:e})=>e.colors.whiteColor}1f;

      select {
        color: ${({theme:e})=>e.colors.iconColor};

        option {
          background: #181d22;
        }
      }
    }
  }

  &.token-footer-section {
    background: url(${_7});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    .overlay {
      background: url(${Qm});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      height: 100%;
      .overlay2 {
        background: linear-gradient(
          180deg,
          #0d1014 0%,
          rgba(13, 16, 20, 0.8) 100%
        );
        height: 100%;
        width: 100%;
        position: relative;
        .footer-shape {
          position: absolute;
          width: 100%;
          bottom: 0px;
          left: 0px;
          text-align: center;
          z-index: 0;
        }
      }
    }
  }

  .token-footer-menu-section {
    position: relative;
    z-index: 1;
    border-top: 1px solid ${({theme:e})=>e.colors.whiteColor}1f;
    border-bottom: 1px solid ${({theme:e})=>e.colors.whiteColor}1f;
    .footer-column {
      padding-top: 73px;
      padding-bottom: 70px;
      border-right: 1px solid ${({theme:e})=>e.colors.whiteColor}1f;
      min-height: 100%;
      padding-left: 8px;
      &4 {
        border-right: none;
      }
      h5 {
        margin-bottom: 26px;
        font-family: ${({theme:e})=>e.fonts.quantico};
        color: ${({theme:e})=>e.colors.whiteColor};
        font-weight: 700;
        line-height: 167%;
        text-transform: uppercase;
      }
      ul {
        list-style: none;
        padding: 0px;
        margin: 0px;
        li {
          a {
            color: ${({theme:e})=>e.colors.whiteColor}cc;
            line-height: 240%;
            font-weight: 500;
            transition: 0.3s;
            &:hover {
              color: ${({theme:e})=>e.colors.whiteColor};
            }
          }
        }
      }
    }
  }

  .token-subscribe-section {
    border-bottom: 1px solid ${({theme:e})=>e.colors.whiteColor}1f;
    padding: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    position: relative;
    z-index: 1;
    input {
      &[type="email"] {
        background: transparent;
        overflow: hidden;
        height: 100%;
        max-width: 500px;
        width: 100%;
        border: none;
        outline: none;
        font-family: ${({theme:e})=>e.fonts.quantico};
        font-weight: 700;
        font-size: 30px;
        line-height: 167%;
        color: ${({theme:e})=>e.colors.whiteColor};
        &::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: ${({theme:e})=>e.colors.whiteColor}33;
        }

        &:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: ${({theme:e})=>e.colors.whiteColor}33;
        }

        &::-ms-input-placeholder {
          /* Microsoft Edge */
          color: ${({theme:e})=>e.colors.whiteColor}33;
        }
      }
      &[type="submit"] {
        background: #bfff0a;
        border-radius: 50px;
        max-width: 293px;
        width: 100%;
        overflow: hidden;
        color: ${({theme:e})=>e.colors.title};
        font-weight: 700;
        line-height: 26px;
        padding: 17px 20px;
        border: none;
        outline: none;
        transition: 0.3s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  .token-footer-bottom-text {
    padding: 40px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    .text {
      font-family: ${({theme:e})=>e.fonts.quantico};
      font-weight: 700;
      font-size: 100px;
      line-height: 120px;
      text-transform: uppercase;
      color: ${({theme:e})=>e.colors.whiteColor};
      span {
        position: relative;
        &.top {
          top: -70px;
          transition: 0.3s;
        }
      }
    }
  }

  &.defi-footer-section {
    background-color: transparent;
    padding-top: 30px;
    position: relative;
    overflow: hidden;
    .footer-row {
      position: relative;
      height: 70px;
      width: 100%;
      overflow: hidden;
      display: flex;
      margin-bottom: 30px;
      padding: 20px;
      z-index: 3;
      &:nth-last-child(1) {
        margin-bottom: 0px;
      }

      &::before {
        content: "";
        height: 100%;
        width: 33.5%;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 0;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(55, 234, 142, 0.2) 100%
        );
      }
      &::after {
        content: "";
        height: 100%;
        width: 66.5%;
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: 0;
        background: ${({theme:e})=>e.colors.whiteColor}0d;
      }
    }
    .footer-row-inner {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      z-index: 1;
    }
    .left {
      max-width: 270px;
      width: 100%;
      text-align: right;
      padding-right: 30px;
    }
    .right {
      padding-left: 60px;
    }
    h5 {
      text-transform: uppercase;
      margin-bottom: 0px;
      font-weight: 700;
      color: ${({theme:e})=>e.colors.whiteColor};
    }
    ul {
      list-style: none;
      padding: 0px;
      margin-bottom: 0px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 50px;
      li {
        a {
          color: ${({theme:e})=>e.colors.whiteColor}cc;

          &:hover {
            color: ${({theme:e})=>e.colors.whiteColor};
          }
        }
      }
    }
    .defi-footer-blur {
      position: absolute;
      bottom: 0px;
      z-index: 0;
      left: 22%;
    }
  }

  .defi-footer-bottom {
    position: relative;
    z-index: 1;
    padding: 10px 0px 40px 0px;
    width: 100%;
    a {
      color: ${({theme:e})=>e.colors.whiteColor}cc !important;
      font-weight: 500;
      &:hover {
        color: ${({theme:e})=>e.colors.whiteColor} !important;
      }
      i {
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        text-transform: uppercase;
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }
  }

  .chatbot-body {
    position: relative;
    z-index: 2;
  }
  &.chatbot-footer-section {
    padding-top: 90px;
    padding-bottom: 44px;
    background: url(${Q7});
    background-attachment: fixed;
    background-size: cover;
    &.newsletter-footer {
      background: ${({theme:e})=>e.colors.bgFooter};
    }
    &.sass-footer {
      background: transparent;
      padding-top: 140px;
      position: relative;
      .footer-bg {
        position: absolute;
        bottom: 0px;
        width: 100%;
      }
      .shape-img1 {
        position: absolute;
        top: 20px;
        left: 60px;
      }
      .shape-img2 {
        position: absolute;
        top: 180px;
        left: 0px;
      }
    }
  }

  .chatbot-newslater {
    margin-bottom: 90px;
    h2 {
      color: ${({theme:e})=>e.colors.whiteColor};
      max-width: 540px;
      width: 100%;
    }
    &-left,
    &-right {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 120px;
    }
  }
  .chatbot-footer-card {
    padding: 100px;
    background: ${({theme:e})=>e.colors.whiteColor}0d;
    border-radius: 30px;
    margin-bottom: 60px;
    &.newsletter {
      background: transparent;
      border-bottom: 1px solid ${({theme:e})=>e.colors.whiteColor}1a;
      padding-left: 0px;
      padding-right: 0px;
      padding-bottom: 80px;
      border-radius: 0px;
      .chatbot-footer-left {
        margin-left: auto;
      }
      .chatbot-footer-right {
        border-left: none;
        border-right: 1px solid ${({theme:e})=>e.colors.whiteColor}1a;
      }
    }
    &.crypto-wallet {
      background: transparent;
      border-bottom: 1px solid ${({theme:e})=>e.colors.whiteColor}1a;
      padding-top: 0px;
      padding-left: 0px;
      padding-right: 0px;
      padding-bottom: 80px;
      border-radius: 0px;
      .chatbot-footer-left {
        margin-left: auto;
      }
      .chatbot-footer-right {
        border-left: none;
        border-right: 1px solid ${({theme:e})=>e.colors.whiteColor}1a;
      }
    }
    &.sass {
      border-bottom: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    }
  }
  .chatbot-footer-left {
    max-width: 400px;
    width: 100%;
    h4 {
      margin-bottom: 20px;
      color: ${({theme:e})=>e.colors.whiteColor};
      max-width: 270px;
    }
    p {
      color: ${({theme:e})=>e.colors.whiteColor}cc;
      margin-bottom: 42px;
    }
    &.sass {
      h4 {
        color: ${({theme:e})=>e.colors.title};
      }
      p {
        color: ${({theme:e})=>e.colors.textColor};
      }
    }
  }
  .subscribe-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: ${({theme:e})=>e.colors.whiteColor}1a;
    border-radius: 35px;
    padding: 10px;
    max-width: 470px;
    width: 100%;
    max-height: 60px;
    &.sass {
      background: ${({theme:e})=>e.colors.whiteColor};
      border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      border-radius: 35px;
      .form-input {
        color: ${({theme:e})=>e.colors.title};
        &::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: ${({theme:e})=>e.colors.title};
        }

        &:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: ${({theme:e})=>e.colors.title};
        }

        &::-ms-input-placeholder {
          /* Microsoft Edge */
          color: ${({theme:e})=>e.colors.title};
        }
      }
      .bg-blue-btn {
        background: #0555ff;
      }
    }

    .form-input {
      color: ${({theme:e})=>e.colors.whiteColor};
      background: transparent;
      border: none;
      outline: none;
      padding: 14px;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      &::placeholder {
        color: ${({theme:e})=>e.colors.whiteColor}63;
      }
    }

    .bg-blue-btn {
      padding: 7px 33px;
      border: none;
      outline: none;
      &:hover {
        opacity: 0.8;
      }
      &.gradient-bg-btn {
        background: linear-gradient(
          90deg,
          #30d7f1 0%,
          #79fa4b 51.56%,
          #fce344 100%
        );
        color: ${({theme:e})=>e.colors.title};
      }
    }
  }
  .chatbot-footer-right {
    padding-left: 49px;
    border-left: 1px solid ${({theme:e})=>e.colors.whiteColor}1a;
  }
  .footer-menu-list {
    h5 {
      font-family: ${({theme:e})=>e.fonts.dmSans};
      font-weight: 700;
      text-transform: uppercase;
      color: ${({theme:e})=>e.colors.whiteColor};
      margin-bottom: 37px;
    }
    ul {
      list-style: none;
      padding: 0px;
      li {
        a {
          line-height: 250%;
          color: ${({theme:e})=>e.colors.whiteColor}cc;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 5px;
          &:hover {
            color: ${({theme:e})=>e.colors.whiteColor};
          }
          span {
            text-transform: uppercase;
            color: ${({theme:e})=>e.colors.whiteColor};
            background: #f7578c;
            border-radius: 10px;
            height: 20px;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            &.none {
              display: none !important;
            }
            &.crypto-badge {
              background: #01ffb0;
              color: ${({theme:e})=>e.colors.title};
            }
          }
        }
      }
    }
  }

  .chatbot-footer-bottom-left {
    max-width: 571px;
    width: 100%;
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 25px;
      list-style: none;
      padding: 0px;
      margin-bottom: 22px;
      max-width: 420px;
      width: 100%;
      flex-wrap: wrap;
      li {
        a {
          color: ${({theme:e})=>e.colors.whiteColor}cc;
          &:hover {
            color: ${({theme:e})=>e.colors.whiteColor};
          }
        }
      }
    }
    &.sass {
      ul {
        li {
          a {
            color: ${({theme:e})=>e.colors.title};
          }
        }
      }
      p {
        color: ${({theme:e})=>e.colors.textColor};
        font-weight: 500;
        span {
          color: ${({theme:e})=>e.colors.title};
          font-weight: 700;
        }
      }
    }
    p {
      margin-bottom: 13px;
      color: ${({theme:e})=>e.colors.whiteColor}80;
      font-size: 13px;
      font-weight: 400;
      line-height: 26px;
      span {
        color: ${({theme:e})=>e.colors.whiteColor};
      }
    }
  }

  .chatbot-footer-bottom-right {
    p {
      color: ${({theme:e})=>e.colors.whiteColor};
      line-height: 36px;
      font-weight: 600;
      font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};

      a {
        background: linear-gradient(270deg, #0095ff 0.85%, #f7578c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-left: 12px;
        font-weight: 800;
      }
    }
    &.sass {
      p {
        a {
          background: linear-gradient(270deg, #0555ff 0.85%, #f7578c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          margin-left: 12px;
        }
      }
    }
    &.crypto {
      p {
        a {
          background: linear-gradient(
            90deg,
            #30d7f1 0%,
            #79fa4b 51.56%,
            #fce344 100%
          );
          -webkit-background-clip: text;
          -webkit-tex-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      }
    }

    .chatbot-social {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 14px;
      margin-bottom: 71px;
      p {
        margin-bottom: 0px;
      }
    }
    .chatbot-social-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 193px;
      width: 100%;
      gap: 14px;
      a {
        filter: brightness(100);
        opacity: 70%;
        &:hover {
          opacity: 100;
        }
      }
    }

    &.sass {
      p {
        color: ${({theme:e})=>e.colors.title};
      }
      .chatbot-social-list {
        a {
          img {
            filter: brightness(0);
            opacity: 0.8;
          }
        }
      }
    }
  }
  .crypto-footer-social {
    p {
      color: ${({theme:e})=>e.colors.whiteColor};
      line-height: 36px;
      font-weight: 600;
      font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
      margin-bottom: 17px;
    }
  }
  .crypto-footer-social-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    flex-wrap: wrap;
    a {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({theme:e})=>e.colors.whiteColor}0d;
      backdrop-filter: blur(2.5px);
      border-radius: 15px;
      &:hover{
        .social-icon{
          img{
            transform: translateY(-30px);
          }
        }
      }
    }

    .social-icon{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      overflow: hidden;
      height: 20px;
      transition: 0.3s;
      img{
        margin-bottom: 10px;
        transition: 0.3s;
        max-width: 28px;
      }
    }
  }


  .chatbot-footer-bottom {
    .footer-copyright {
      color: ${({theme:e})=>e.colors.whiteColor}cc;
      font-size: 13px;
      font-weight: 400;
      line-height: 26px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-height: 48px;
      a {
        margin: 0px 5px;
        &:hover {
          color: ${({theme:e})=>e.colors.whiteColor};
        }
      }
      &.sass {
        color: ${({theme:e})=>e.colors.textColor};
        font-weight: 500;
        a {
          &:hover {
            color: ${({theme:e})=>e.colors.title};
          }
        }
      }
      &.crypto {
        color: ${({theme:e})=>e.colors.whiteColor}63;
      }
    }

    .copyright-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 210px;
      list-style: none;
      padding: 0px;
      min-height: 48px;
      li {
        width: 48px;
        height: 48px;
        overflow: hidden;
        border-right-color: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 100%;
          width: 100%;
          position: absolute;
        }
      }
    }
  }

  /*-- newsletter section --*/
  .newsletter-get-demo-section {
    background: ${({theme:e})=>e.colors.primary};
    border-radius: 30px;
    overflow: hidden;
    &.sass {
      background: #0555ff;
      overflow: visible;
    }
  }
  .newsletter-get-demo-section-inner {
    background: url(${G7});
    background-attachment: fixed;
    background-size: cover;
    background-position: left top;
    background-repeat: no-repeat;
    padding-top: 54px;
    padding-left: 69px;
    padding-right: 88px;
    .newsletter-box {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex-direction: column;
      height: 100%;
    }
    &.sass {
      background: url(${Y7});
      background-attachment: fixed;
      background-size: cover;
      background-position: left top;
      background-repeat: no-repeat;
      padding: 54px 70px;
    }
  }
  .newsletter-get-demo-left {
    padding-bottom: 63px;

    h2 {
      margin-bottom: 33px;
      color: ${({theme:e})=>e.colors.whiteColor};
    }

    a {
      font-weight: 700;
      color: ${({theme:e})=>e.colors.whiteColor};
      transition: 0.3s;
      svg {
        margin-left: 10px;
        font-size: 24px;
        transition: 0.3s;
      }
      &:hover {
        svg {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .sass-demo-shapes {
    position: relative;
    height: 100%;
    width: 100%;
    .shape1 {
      position: absolute;
      right: 132px;
      rop: 0px;
    }
    .shape2 {
      position: absolute;
      top: 32px;
      right: 0px;
    }
    .shape3 {
      position: absolute;
      bottom: 0px;
      right: 0px;
    }
    .shape4 {
      position: absolute;
      top: 0px;
      right: -100px;
    }
  }

  &.crypto-wallet-footer {
    padding-top: 135px;
    background: transparent !important;
  }

  .footer-menu-list {
    &.sass {
      h5 {
        color: ${({theme:e})=>e.colors.title};
      }
      ul {
        li {
          a {
            color: ${({theme:e})=>e.colors.textColor};
          }
        }
      }
    }
  }

  .start-free-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: ${({theme:e})=>e.colors.whiteColor};
    border-radius: 35px;
    padding: 10px;
    max-width: 470px;
    width: 100%;
    max-height: 70px;
    .form-input {
      color: ${({theme:e})=>e.colors.title};
      background: transparent;
      border: none;
      outline: none;
      padding: 14px;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
    }
    .bg-blue-btn {
      padding: 12px 40px;
      border: none;
      outline: none;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    &.v4,
    &.v4 {
      &::before {
        width: 34%;
      }
    }
  }
  @media screen and (max-width: 1399px) {
    &.v3,
    &.v4 {
      &::before {
        width: 32%;
      }
    }

    .token-footer-bottom-text .text {
      font-size: 97px;
    }
  }
  @media screen and (max-width: 1199px) {
    &.v6 {
      .footer-top {
        padding-top: 80px;
      }
    }

    &.v2 {
      .footer-widget {
        margin-top: 40px;
      }
    }

    &.v3 {
      &::before {
        display: none;
      }

      .footer-widget {
        margin-top: 40px;
      }
    }

    &.v4 {
      &::before {
        display: none;
      }

      .footer-copyright {
        margin-top: 20px;
      }
    }

    .footer-card {
      margin-bottom: 40px;
    }
    .footer-follow {
      .social-link {
        gap: 15px;
      }
    }
    .token-footer-bottom-text {
      padding: 0px;
      .text {
        font-size: 80px;
      }
    }
    .chatbot-footer-card {
      padding: 40px 30px;
    }
    .subscribe-form .bg-blue-btn {
      padding: 7px 25px;
    }
    .chatbot-footer-right {
      padding-left: 15px;
      margin-right: -5px;
      .col-md-4.col-sm-6 {
        padding-right: 0px !important;
      }
    }
    .footer-menu-list h5 {
      margin-bottom: 20px;
      font-size: 15px;
    }
    .chatbot-newslater h2 {
      font-size: 36px;
    }
  }

  @media screen and (max-width: 991px) {
    &.home-footer{
      .footer-card{
        max-width: 100%;
      }
    }
    .chatbot-footer-card.newsletter {
      .chatbot-footer-left {
        margin-left: 0;
        margin-bottom: 30px;
      }
    }
    .chatbot-footer-card.sass {
      padding-bottom: 30px;
    }
    .chatbot-footer-card.crypto-wallet {
      padding-bottom: 40px;
      .chatbot-footer-right {
        border-right: none;
        margin-top: 50px;
      }
      .chatbot-footer-left {
        margin-left: 0px;
      }
    }
    .token-footer-menu-section {
      .footer-column {
        padding-left: 0px;
      }
    }
    &.chatbot-footer-section {
      &.newsletter-footer {
        padding-top: 80px;
      }
    }
    .token-footer-bottom-text {
      .text {
        font-size: 60px;
      }
    }
    &.defi-footer-section .left {
      max-width: 200px;
    }
    &.defi-footer-section .right {
      padding-left: 0px;
    }
    &.defi-footer-section ul {
      gap: 20px;
    }
    &.defi-footer-section .footer-row {
      &::before {
        width: 30.5%;
      }
      &::after {
        width: 69.5%;
      }
    }
    .chatbot-footer-card.newsletter .chatbot-footer-right {
      border-right: none !important;
    }
    .chatbot-footer-right {
      border-left: none !important;
      margin-top: 40px;
    }
    &.footer6-section {
      margin-top: 100px;
    }

    .v7footer-contact-card{
      flex-wrap: wrap;
    }
    .v7footer-card-text{
      &.text-center{
        text-align: right !important;
      }
      &.text-right{
        text-align: center !important;
        margin: auto;
      }
    }

    .v7-main-footer{
      flex-wrap: wrap-reverse;
      .back-to-top-btn{
        display: none;
      }
      .privacy-menu{
        width: 100%;
        justify-content: center;
      }
      .copyright-text{
        width: 100%;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 767px) {
    &.home-footer{
      .footer-inner{
        border-radius: 30px 30px 0px 0px;
      }
      .footer-widget{
        margin-top: 0px !important;
        .widget-title{
          margin-bottom: 20px;
          h6{
            font-size: 15px;
          }
        }
      }
    }
    &.corporate-footer-section{
      padding-top: 80px !important;
    }
    .footer-top6{
        padding-bottom: 60px;
      }
    .footer-one-top{
      padding-bottom: 0 !important;
    }
    .footer-one-menu-list {
      ul{
        li{
          ol{
            margin-top: 5px;
            margin-bottom: 26px;
            &::after{
              top: 8px;
              height: 90%;
            }
            &.label-none{
              margin-bottom: 20px !important;
            }
          }
        }
      }
    }
    .footer1menu-list-col{
      &.one{
        ol{
          margin-bottom: 15px;
        }
      }
      &.three{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        padding-top: 10px;
        .footer-widget{
          width: 50%;
          &:nth-last-child(1){
            padding-left: 15px;
          }
        }
      }
    }
    .footer-follow{
      justify-content: center;

    }
    &.v2,
    &.v3 {
      .footer-copyright {
        margin-top: 20px;
        text-align: center;
      }
    }

    &.v4 {
      .privacy-menu {
        margin-bottom: 0;
        margin-top: 20px;
        justify-content: flex-start;
      }

      .footer-copyright {
        text-align: left;
      }
    }

    .footer-top {
      padding: 80px 0px 65px;
    }
    .footer-info {
      margin-bottom: 18px;
      .footer-logo {
        margin-bottom: 24px;
      }
    }
    .footer-card {
      margin-bottom: 0px;
    }
    .footer-widget .widget-list li a {
      line-height: 36px;
    }
    .footer-bottom {
      padding: 25px 0px 20px;
    }
    .counter-section {
      padding-top: 25px;
    }
    .chatbot-footer-left {
      h4 {
        margin: auto;
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 20px;
      }
      margin: auto !important;
      text-align: center;
    }

    .token-footer-menu-section {
      .footer-column {
        &.footer-column2 {
          border-right: none;
        }
      }
    }

    .token-footer-bottom-text .text {
      font-size: 44px;
      line-height: 200%;
    }
    .chatbot-footer-card.newsletter {
      padding-bottom: 40px;
      .chatbot-footer-right {
        margin-top: 30px;
      }
    }
    /*-- footer-widget style --*/
    .footer-widget {
      margin-top: 40px;
    }

    /*-- footer-copyright style --*/
    .footer-copyright {
      text-align: center;
    }

    /*-- privacy-menu style --*/
    .privacy-menu {
      margin-bottom: 10px;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    .privacy-menu li,
    .privacy-menu li a {
      line-height: 1;
    }

    .footer-rating {
      justify-content: center;
    }
    &.footer-section.v4 {
      .privacy-menu {
        justify-content: center;
      }
      .footer-copyright {
        text-align: center;
      }
    }

    .footer-widget .widget-list li:not(:first-child) {
      margin-top: 0px;
    }
    &.footer-section.v3 .footer-widget {
      margin-top: 30px;
    }
    .footer-widget .widget-title {
      margin-bottom: 15px;
    }

    &.footer-section.v3 .footer-bottom {
      text-align: center;
    }
    &.footer-section.v2 .social-link,
    &.footer-section.v3 .social-link {
      justify-content: center;
    }
    &.footer-section.v3 .footer-copyright {
      text-align: center;
    }

    .token-subscribe-section {
      flex-wrap: wrap;
    }
    .token-footer-bottom-text {
      .text {
        font-size: 44px;
      }
    }
    .footer-column {
      &.footer-column3,
      &.footer-column4 {
        padding-top: 0px;
      }
    }
    &.defi-footer-section {
      ul {
        flex-wrap: wrap;
        justify-content: flex-start;
        row-gap: 7px;
      }
      .footer-row-inner {
        flex-direction: column;
        justify-content: flex-start;
      }
      .left {
        text-align: left;
        padding-right: 0px;
        max-width: 100%;
      }
      .right {
        margin-right: auto;
        margin-left: 0;
      }
      h5 {
        margin-bottom: 16px;
      }
      .footer-row {
        height: auto;
      }
      .footer-row::before {
        width: 40%;
        background: ${({theme:e})=>e.colors.whiteColor}0d;
      }
      .footer-row::after {
        width: 60%;
      }
    }
    .chatbot-newslater-left,
    .jwcziW .chatbot-newslater-right {
      justify-content: center;
      text-align: center;
    }
    .chatbot-newslater-btn {
      margin: auto;
    }
    &.chatbot-footer-section {
      padding-top: 70px;
    }
    .chatbot-newslater {
      margin-bottom: 70px;
    }
    &.footer6-section {
      margin-top: 90px;
    }

    .footer-menu-list{
      padding-top: 25px;
    }
  }

  @media screen and (max-width: 575px) {
    &.v2,
    &.v3 {
      .social-link {
        margin-top: 20px;
      }
    }

    &.footer6-section {
      margin-top: 70px;
    }
    .footer-contact-section {
      .footer-contact {
        margin-left: 0px;
      }
      .footer-contact-text {
        min-width: max-content;
        p {
          padding-left: 30px;
          margin-bottom: 5px;
        }
        h5 {
          padding-left: 30px;
        }
      }
    }

    .chatbot-footer-right {
      margin-top: 30px;
    }
    .chatbot-footer-card.crypto-wallet {
      padding-bottom: 3px;
      .chatbot-footer-right {
        margin-top: 30px;
      }
    }
    .footer-info {
      margin-bottom: 40px;

      .footer-logo {
        margin-bottom: 30px;
      }
    }

    &.footer6-section .social-link.social-link-right {
      justify-content: center;
      margin-top: 20px;
    }
    &.footer-section .staco-footer-6 .footer-copyright {
      margin-top: 15px;
    }
    .meeting-anytime-card-text h2 {
      font-size: 30px;
      line-height: 44px;
    }

    &.footer-section .staco-footer-6 .footer-logo {
      display: block;
      text-align: center;
    }

    &.footer-section .staco-footer-6 .social-link {
      justify-content: center;
    }

    .token-footer-bottom-text {
      .text {
        font-size: 30px;
      }
    }

    .newsletter-get-demo-section-inner{
      padding-left: 30px;
      padding-right: 30px;
    }

    .footer-v7-text {
      margin-bottom: 30px;
      .start-free-form {
        .bg-blue-btn{
          padding: 12px 24px;
        }
      }
      h2{
        margin-bottom: 25px;
        font-size: 36px;
      }
    }

    .v7footer-contact-card{
      flex-direction: column;
      padding: 45px 20px;
      .v7footer-card-text{
        p{
          margin-bottom: 0px;
        }
        &.text-center,
        &.text-right,
        &.text-left{
          text-align: center !important;
          margin: auto;
        }
      }
    }
    
  }

  @media screen and (max-width: 430px) {
    .subscribe-form {
      flex-wrap: wrap;
      max-height: inherit;
      height: auto;
      background: transparent;
      .form-input {
        width: 100%;
        padding: 12px 25px;
        background: ${({theme:e})=>e.colors.whiteColor}1a;
        border-radius: 35px;
      }
      .bg-blue-btn {
        position: relative;
        width: 100%;
      }
    }
  }
`,X7="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20d='M4.67742%2010.2581H5.77419C5.87097%2010.2581%205.96774%2010.3548%205.96774%2010.4516V17.3548C5.96774%2017.7097%206.25806%2018%206.6129%2018H9.12903C9.48387%2018%209.77419%2017.7097%209.77419%2017.3548V10.4516C9.77419%2010.3548%209.87097%2010.2581%209.96774%2010.2581H11.7742C12.0968%2010.2581%2012.3871%2010.0323%2012.4194%209.70968L12.8387%207.19355C12.9032%206.80645%2012.5806%206.41935%2012.1935%206.41935H10.0645C9.90323%206.41935%209.77419%206.29032%209.77419%206.12903V4.51613C9.77419%204.09677%2010%203.87097%2010.4194%203.87097H12.3226C12.6774%203.87097%2012.9677%203.58064%2012.9677%203.22581V0.645161C12.9677%200.290323%2012.6774%200%2012.3226%200H10.0323C5.83871%200%205.93548%203.3871%205.93548%203.87097V6.22581C5.93548%206.32258%205.83871%206.41935%205.74194%206.41935H4.64516C4.29032%206.41935%204%206.70968%204%207.06452V9.58065C4.03226%209.96774%204.32258%2010.2581%204.67742%2010.2581Z'%20fill='white'/%3e%3c/svg%3e",Z7="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20d='M5.26673%200C5.40364%205.72895e-05%205.53908%200.0282242%205.66465%200.0827561C5.79023%200.137288%205.90328%200.217023%205.99678%200.317023L6.07279%200.409029L10.3471%206.23745L16.2935%200.293021C16.4735%200.11366%2016.715%200.00952721%2016.969%200.00177205C17.2229%20-0.0059831%2017.4703%200.0832212%2017.6609%200.251267C17.8515%200.419313%2017.971%200.653599%2017.995%200.90654C18.0191%201.15948%2017.9461%201.41211%2017.7906%201.61312L17.7076%201.70712L11.5442%207.86957L17.8066%2016.4102C17.9103%2016.5517%2017.975%2016.718%2017.9941%2016.8924C18.0132%2017.0669%2017.986%2017.2432%2017.9154%2017.4038C17.8448%2017.5644%2017.7331%2017.7036%2017.5917%2017.8075C17.4502%2017.9113%2017.284%2017.9761%2017.1096%2017.9953L17.0006%2018.0013H12.7333C12.5964%2018.0012%2012.4609%2017.9731%2012.3353%2017.9185C12.2098%2017.864%2012.0967%2017.7843%2012.0032%2017.6843L11.9272%2017.5923L7.6509%2011.7628L1.70647%2017.7083C1.5265%2017.8876%201.28501%2017.9918%201.03104%2017.9995C0.777073%2018.0073%200.529676%2017.9181%200.339096%2017.75C0.148517%2017.582%200.0290475%2017.3477%200.0049521%2017.0948C-0.0191433%2016.8418%200.0539427%2016.5892%200.209366%2016.3882L0.292372%2016.2942L6.45382%2010.1307L0.193365%201.59111C0.0896665%201.44959%200.0250275%201.28327%200.00593756%201.10885C-0.0131524%200.934443%200.0139786%200.758078%200.0846063%200.597468C0.155234%200.436858%200.266873%200.297656%200.408314%200.193838C0.549755%200.0900194%200.71602%200.0252389%200.890415%200.00600047L0.999423%200H5.26673Z'%20fill='white'/%3e%3c/svg%3e",J7="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='19'%20height='18'%20viewBox='0%200%2019%2018'%20fill='none'%3e%3cpath%20d='M0.238808%205.85448H4.27473V17.9999H0.238808V5.85448ZM2.28379%20-0.00012207C0.902457%20-0.00012207%200%200.90673%200%202.097C0%203.26279%200.876047%204.19601%202.23097%204.19601H2.2567C3.66444%204.19601%204.54112%203.26275%204.54112%202.097C4.51471%200.90673%203.66449%20-0.00012207%202.28379%20-0.00012207ZM14.1841%205.56918C12.0417%205.56918%2011.082%206.74752%2010.5466%207.57389V5.85448H6.50942C6.56287%206.99387%206.50942%2017.9999%206.50942%2017.9999H10.5466V11.217C10.5466%2010.8538%2010.573%2010.4918%2010.6792%2010.2316C10.9715%209.50637%2011.6357%208.75538%2012.7499%208.75538C14.2117%208.75538%2014.7955%209.86965%2014.7955%2011.5016V17.9998H18.832V11.0354C18.832%207.30495%2016.8411%205.56918%2014.1841%205.56918Z'%20fill='white'/%3e%3c/svg%3e",q7="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8842%204.19583C14.8842%204.79236%2014.4006%205.27583%2013.8042%205.27583C13.2078%205.27583%2012.7242%204.79236%2012.7242%204.19583C12.7242%203.5993%2013.2078%203.11583%2013.8042%203.11583C14.4007%203.11583%2014.8842%203.5993%2014.8842%204.19583ZM9%2012C7.34316%2012%206.00005%2010.6568%206.00005%209C6.00005%207.34316%207.34316%206.00005%209%206.00005C10.6568%206.00005%2012%207.34316%2012%209C12%2010.6568%2010.6568%2012%209%2012ZM9%204.37836C6.44752%204.37836%204.37836%206.44752%204.37836%209C4.37836%2011.5525%206.44752%2013.6216%209%2013.6216C11.5525%2013.6216%2013.6216%2011.5525%2013.6216%209C13.6216%206.44752%2011.5525%204.37836%209%204.37836ZM9%201.62169C11.4031%201.62169%2011.6878%201.63083%2012.6367%201.67414C13.5142%201.71422%2013.9908%201.86075%2014.3079%201.98408C14.7279%202.14734%2015.0277%202.34239%2015.3427%202.65739C15.6577%202.97225%2015.8528%203.27206%2016.0161%203.69225C16.1392%204.00936%2016.2859%204.48594%2016.326%205.36344C16.3693%206.31252%2016.3785%206.59714%2016.3785%209.00028C16.3785%2011.4034%2016.3693%2011.688%2016.326%2012.637C16.2859%2013.5145%2016.1394%2013.9911%2016.0161%2014.3082C15.8528%2014.7282%2015.6577%2015.028%2015.3427%2015.343C15.0279%2015.658%2014.7281%2015.8531%2014.3079%2016.0163C13.9908%2016.1395%2013.5142%2016.2862%2012.6367%2016.3263C11.6878%2016.3696%2011.4031%2016.3787%209%2016.3787C6.59672%2016.3787%206.31209%2016.3696%205.36316%2016.3263C4.48566%2016.2862%204.00908%2016.1397%203.69197%2016.0163C3.27192%2015.8531%202.97211%2015.658%202.65711%2015.343C2.34225%2015.0282%202.14706%2014.7284%201.9838%2014.3082C1.86061%2013.9911%201.71394%2013.5145%201.67386%2012.637C1.63055%2011.6879%201.62141%2011.4033%201.62141%209.00028C1.62141%206.59714%201.63055%206.31252%201.67386%205.36344C1.71394%204.48594%201.86047%204.00936%201.9838%203.69225C2.14706%203.2722%202.34211%202.97239%202.65711%202.65739C2.97197%202.34239%203.27178%202.14734%203.69197%201.98408C4.00908%201.86089%204.48566%201.71422%205.36316%201.67414C6.31223%201.63083%206.59686%201.62169%209%201.62169ZM9%200C6.5558%200%206.24923%200.0104063%205.28933%200.0541406C4.33139%200.097875%203.67706%200.250031%203.10472%200.4725C2.51283%200.702422%202.01094%201.01025%201.51059%201.51059C1.01025%202.01094%200.702422%202.51283%200.4725%203.10472C0.250031%203.6772%200.097875%204.33139%200.0541406%205.28933C0.0104063%206.24923%200%206.5558%200%209C0%2011.4442%200.0104063%2011.7508%200.0541406%2012.7107C0.097875%2013.6686%200.250031%2014.3228%200.4725%2014.8953C0.702422%2015.4872%201.01025%2015.9891%201.51059%2016.4894C2.01094%2016.9898%202.51283%2017.2974%203.10472%2017.5275C3.6772%2017.75%204.33139%2017.9021%205.28933%2017.9459C6.24923%2017.9896%206.5558%2018%209%2018C11.4442%2018%2011.7508%2017.9896%2012.7107%2017.9459C13.6686%2017.9021%2014.3228%2017.75%2014.8953%2017.5275C15.4872%2017.2974%2015.9891%2016.9898%2016.4894%2016.4894C16.9898%2015.9891%2017.2974%2015.4872%2017.5275%2014.8953C17.75%2014.3228%2017.9021%2013.6686%2017.9459%2012.7107C17.9896%2011.7508%2018%2011.4442%2018%209C18%206.5558%2017.9896%206.24923%2017.9459%205.28933C17.9021%204.33139%2017.75%203.6772%2017.5275%203.10472C17.2974%202.51283%2016.9898%202.01094%2016.4894%201.51059C15.9891%201.01025%2015.4872%200.702562%2014.8953%200.4725C14.3228%200.250031%2013.6686%200.097875%2012.7107%200.0541406C11.7508%200.0104063%2011.4442%200%209%200Z'%20fill='white'/%3e%3c/svg%3e",K7="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='19'%20height='18'%20viewBox='0%200%2019%2018'%20fill='none'%3e%3cpath%20d='M18.8099%206.02108C18.8099%206.02108%2018.6246%204.6485%2018.055%204.04417C17.3322%203.252%2016.5227%203.24733%2016.1515%203.20242C13.4924%203%209.50416%203%209.50416%203H9.49525C9.49525%203%205.50697%203%202.84852%203.20242C2.47731%203.24733%201.66837%203.252%200.944952%204.04417C0.375961%204.6485%200.190059%206.02108%200.190059%206.02108C0.190059%206.02108%200%207.63167%200%209.24225V10.7519C0%2012.3637%200.190059%2013.9737%200.190059%2013.9737C0.190059%2013.9737%200.375367%2015.3457%200.944952%2015.9488C1.66837%2016.741%202.61688%2016.7171%203.03976%2016.7999C4.55964%2016.9527%209.5%2017%209.5%2017C9.5%2017%2013.4924%2016.993%2016.1515%2016.7929C16.5227%2016.7462%2017.3322%2016.7416%2018.055%2015.9494C18.624%2015.3462%2018.8099%2013.9742%2018.8099%2013.9742C18.8099%2013.9742%2019%2012.3637%2019%2010.7525V9.24283C19%207.63167%2018.8099%206.02108%2018.8099%206.02108Z'%20fill='white'/%3e%3cpath%20d='M7%206.5V13.5L12.8333%2010L7%206.5Z'%20fill='black'/%3e%3c/svg%3e",Mi="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20d='M4.67742%2010.2581H5.77419C5.87097%2010.2581%205.96774%2010.3548%205.96774%2010.4516V17.3548C5.96774%2017.7097%206.25806%2018%206.6129%2018H9.12903C9.48387%2018%209.77419%2017.7097%209.77419%2017.3548V10.4516C9.77419%2010.3548%209.87097%2010.2581%209.96774%2010.2581H11.7742C12.0968%2010.2581%2012.3871%2010.0323%2012.4194%209.70968L12.8387%207.19355C12.9032%206.80645%2012.5806%206.41935%2012.1935%206.41935H10.0645C9.90323%206.41935%209.77419%206.29032%209.77419%206.12903V4.51613C9.77419%204.09677%2010%203.87097%2010.4194%203.87097H12.3226C12.6774%203.87097%2012.9677%203.58064%2012.9677%203.22581V0.645161C12.9677%200.290323%2012.6774%200%2012.3226%200H10.0323C5.83871%200%205.93548%203.3871%205.93548%203.87097V6.22581C5.93548%206.32258%205.83871%206.41935%205.74194%206.41935H4.64516C4.29032%206.41935%204%206.70968%204%207.06452V9.58065C4.03226%209.96774%204.32258%2010.2581%204.67742%2010.2581Z'%20fill='%23333333'/%3e%3c/svg%3e",zi="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20d='M5.26673%200C5.40364%205.72895e-05%205.53908%200.0282242%205.66465%200.0827561C5.79023%200.137288%205.90328%200.217023%205.99678%200.317023L6.07279%200.409029L10.3471%206.23745L16.2935%200.293021C16.4735%200.11366%2016.715%200.00952721%2016.969%200.00177205C17.2229%20-0.0059831%2017.4703%200.0832212%2017.6609%200.251267C17.8515%200.419313%2017.971%200.653599%2017.995%200.90654C18.0191%201.15948%2017.9461%201.41211%2017.7906%201.61312L17.7076%201.70712L11.5442%207.86957L17.8066%2016.4102C17.9103%2016.5517%2017.975%2016.718%2017.9941%2016.8924C18.0132%2017.0669%2017.986%2017.2432%2017.9154%2017.4038C17.8448%2017.5644%2017.7331%2017.7036%2017.5917%2017.8075C17.4502%2017.9113%2017.284%2017.9761%2017.1096%2017.9953L17.0006%2018.0013H12.7333C12.5964%2018.0012%2012.4609%2017.9731%2012.3353%2017.9185C12.2098%2017.864%2012.0967%2017.7843%2012.0032%2017.6843L11.9272%2017.5923L7.6509%2011.7628L1.70647%2017.7083C1.5265%2017.8876%201.28501%2017.9918%201.03104%2017.9995C0.777073%2018.0073%200.529676%2017.9181%200.339096%2017.75C0.148517%2017.582%200.0290475%2017.3477%200.0049521%2017.0948C-0.0191433%2016.8418%200.0539427%2016.5892%200.209366%2016.3882L0.292372%2016.2942L6.45382%2010.1307L0.193365%201.59111C0.0896665%201.44959%200.0250275%201.28327%200.00593756%201.10885C-0.0131524%200.934443%200.0139786%200.758078%200.0846063%200.597468C0.155234%200.436858%200.266873%200.297656%200.408314%200.193838C0.549755%200.0900194%200.71602%200.0252389%200.890415%200.00600047L0.999423%200H5.26673Z'%20fill='%23333333'/%3e%3c/svg%3e",ew="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='19'%20height='18'%20viewBox='0%200%2019%2018'%20fill='none'%3e%3cpath%20d='M0.238808%205.85461H4.27473V18H0.238808V5.85461ZM2.28379%200C0.902457%200%200%200.906852%200%202.09712C0%203.26292%200.876047%204.19613%202.23097%204.19613H2.2567C3.66444%204.19613%204.54112%203.26287%204.54112%202.09712C4.51471%200.906852%203.66449%200%202.28379%200ZM14.1841%205.5693C12.0417%205.5693%2011.082%206.74765%2010.5466%207.57401V5.85461H6.50942C6.56287%206.99399%206.50942%2018%206.50942%2018H10.5466V11.2172C10.5466%2010.8539%2010.573%2010.4919%2010.6792%2010.2317C10.9715%209.50649%2011.6357%208.7555%2012.7499%208.7555C14.2117%208.7555%2014.7955%209.86977%2014.7955%2011.5017V18H18.832V11.0356C18.832%207.30507%2016.8411%205.5693%2014.1841%205.5693Z'%20fill='%23333333'/%3e%3c/svg%3e",Bi="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8842%204.19583C14.8842%204.79236%2014.4006%205.27583%2013.8042%205.27583C13.2078%205.27583%2012.7242%204.79236%2012.7242%204.19583C12.7242%203.5993%2013.2078%203.11583%2013.8042%203.11583C14.4007%203.11583%2014.8842%203.5993%2014.8842%204.19583ZM9%2012C7.34316%2012%206.00005%2010.6568%206.00005%209C6.00005%207.34316%207.34316%206.00005%209%206.00005C10.6568%206.00005%2012%207.34316%2012%209C12%2010.6568%2010.6568%2012%209%2012ZM9%204.37836C6.44752%204.37836%204.37836%206.44752%204.37836%209C4.37836%2011.5525%206.44752%2013.6216%209%2013.6216C11.5525%2013.6216%2013.6216%2011.5525%2013.6216%209C13.6216%206.44752%2011.5525%204.37836%209%204.37836ZM9%201.62169C11.4031%201.62169%2011.6878%201.63083%2012.6367%201.67414C13.5142%201.71422%2013.9908%201.86075%2014.3079%201.98408C14.7279%202.14734%2015.0277%202.34239%2015.3427%202.65739C15.6577%202.97225%2015.8528%203.27206%2016.0161%203.69225C16.1392%204.00936%2016.2859%204.48594%2016.326%205.36344C16.3693%206.31252%2016.3785%206.59714%2016.3785%209.00028C16.3785%2011.4034%2016.3693%2011.688%2016.326%2012.637C16.2859%2013.5145%2016.1394%2013.9911%2016.0161%2014.3082C15.8528%2014.7282%2015.6577%2015.028%2015.3427%2015.343C15.0279%2015.658%2014.7281%2015.8531%2014.3079%2016.0163C13.9908%2016.1395%2013.5142%2016.2862%2012.6367%2016.3263C11.6878%2016.3696%2011.4031%2016.3787%209%2016.3787C6.59672%2016.3787%206.31209%2016.3696%205.36316%2016.3263C4.48566%2016.2862%204.00908%2016.1397%203.69197%2016.0163C3.27192%2015.8531%202.97211%2015.658%202.65711%2015.343C2.34225%2015.0282%202.14706%2014.7284%201.9838%2014.3082C1.86061%2013.9911%201.71394%2013.5145%201.67386%2012.637C1.63055%2011.6879%201.62141%2011.4033%201.62141%209.00028C1.62141%206.59714%201.63055%206.31252%201.67386%205.36344C1.71394%204.48594%201.86047%204.00936%201.9838%203.69225C2.14706%203.2722%202.34211%202.97239%202.65711%202.65739C2.97197%202.34239%203.27178%202.14734%203.69197%201.98408C4.00908%201.86089%204.48566%201.71422%205.36316%201.67414C6.31223%201.63083%206.59686%201.62169%209%201.62169ZM9%200C6.5558%200%206.24923%200.0104063%205.28933%200.0541406C4.33139%200.097875%203.67706%200.250031%203.10472%200.4725C2.51283%200.702422%202.01094%201.01025%201.51059%201.51059C1.01025%202.01094%200.702422%202.51283%200.4725%203.10472C0.250031%203.6772%200.097875%204.33139%200.0541406%205.28933C0.0104063%206.24923%200%206.5558%200%209C0%2011.4442%200.0104063%2011.7508%200.0541406%2012.7107C0.097875%2013.6686%200.250031%2014.3228%200.4725%2014.8953C0.702422%2015.4872%201.01025%2015.9891%201.51059%2016.4894C2.01094%2016.9898%202.51283%2017.2974%203.10472%2017.5275C3.6772%2017.75%204.33139%2017.9021%205.28933%2017.9459C6.24923%2017.9896%206.5558%2018%209%2018C11.4442%2018%2011.7508%2017.9896%2012.7107%2017.9459C13.6686%2017.9021%2014.3228%2017.75%2014.8953%2017.5275C15.4872%2017.2974%2015.9891%2016.9898%2016.4894%2016.4894C16.9898%2015.9891%2017.2974%2015.4872%2017.5275%2014.8953C17.75%2014.3228%2017.9021%2013.6686%2017.9459%2012.7107C17.9896%2011.7508%2018%2011.4442%2018%209C18%206.5558%2017.9896%206.24923%2017.9459%205.28933C17.9021%204.33139%2017.75%203.6772%2017.5275%203.10472C17.2974%202.51283%2016.9898%202.01094%2016.4894%201.51059C15.9891%201.01025%2015.4872%200.702562%2014.8953%200.4725C14.3228%200.250031%2013.6686%200.097875%2012.7107%200.0541406C11.7508%200.0104063%2011.4442%200%209%200Z'%20fill='%23333333'/%3e%3c/svg%3e",tw="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='19'%20height='18'%20viewBox='0%200%2019%2018'%20fill='none'%3e%3cpath%20d='M18.8099%206.02108C18.8099%206.02108%2018.6246%204.6485%2018.055%204.04417C17.3322%203.252%2016.5227%203.24733%2016.1515%203.20242C13.4924%203%209.50416%203%209.50416%203H9.49525C9.49525%203%205.50697%203%202.84852%203.20242C2.47731%203.24733%201.66837%203.252%200.944952%204.04417C0.375961%204.6485%200.190059%206.02108%200.190059%206.02108C0.190059%206.02108%200%207.63167%200%209.24225V10.7519C0%2012.3637%200.190059%2013.9737%200.190059%2013.9737C0.190059%2013.9737%200.375367%2015.3457%200.944952%2015.9488C1.66837%2016.741%202.61688%2016.7171%203.03976%2016.7999C4.55964%2016.9527%209.5%2017%209.5%2017C9.5%2017%2013.4924%2016.993%2016.1515%2016.7929C16.5227%2016.7462%2017.3322%2016.7416%2018.055%2015.9494C18.624%2015.3462%2018.8099%2013.9742%2018.8099%2013.9742C18.8099%2013.9742%2019%2012.3637%2019%2010.7525V9.24283C19%207.63167%2018.8099%206.02108%2018.8099%206.02108Z'%20fill='%23333333'/%3e%3cpath%20d='M7%206.5V13.5L12.8333%2010L7%206.5Z'%20fill='white'/%3e%3c/svg%3e",nc=[{title:"facebook",url:"#",img:X7,imgV2:Mi},{title:"twitter",url:"#",img:Z7,imgV2:zi},{title:"Linkdin",url:"#",img:J7,imgV2:ew},{title:"instagram",url:"#",img:q7,imgV2:Bi},{title:"dribbble",url:"#",img:K7,imgV2:tw}];Y.div`
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 100%);
    padding: 15px 30px;
    margin-top: -25px;
    margin-bottom: 30px;
    ul{
        padding: 0px;
        margin: 0;
        li{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 15px;
            padding: 7.5px 0px;
            a{
                color: ${({theme:e})=>e.colors.whiteColor};
                font-weight: 700;
            }
        }
    }

    @media screen and (max-width: 767px){
        margin-top: 0;
    }
`;Y.div`
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(0, 153, 255, 0.20) 0%, rgba(0, 153, 255, 0.04) 100%);
    h5{
        color: ${({theme:e})=>e.colors.whiteColor};
        font-weight: 700;
        line-height: 155.556%;
        margin-bottom: 22px;
    }
        form{
            input{
            border-radius: 35px;
            background: ${({theme:e})=>e.colors.whiteColor};
            height: 50px;
            width: 100%;
            border: none;
            outline: none;
            margin-bottom: 12px;
            padding: 5px 20px;
            &::placeholder{
                color: ${({theme:e})=>e.colors.title};
            }
        }
            button{
                border-radius: 25px;
                background: ${({theme:e})=>e.colors.primary};
                color: ${({theme:e})=>e.colors.whiteColor};
                font-weight: 700;
                width: 140px;
                height: 50px;
            }
        }
`;Y.section`
  padding: 132px 0 90px 0;
  background-color: ${({theme:e})=>e.colors.bgFooter};
  position: relative;
  z-index: 0;
  border-radius: 50px 50px 0px 0px;
  /* &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.colors.whiteColor}05;
  } */

  .shape-img {
    position: absolute;
    z-index: -1;
    &.img-1 {
      bottom: 0;
      right: 10%;
    }
    &.img-2 {
      bottom: 0;
      left: 10%;
    }
    &.img-3 {
      top: 0;
      left: 0;
    }
    &.img-4 {
      top: 25%;
      left: 8%;
    }
    &.img-5 {
      bottom: 20%;
      right: 5%;
    }
  }

  .pricing-section-title {
    margin-bottom: 40px;
    h3 {
      margin-bottom: 19px;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 800;
      line-height: 30px;
      color: ${({theme:e})=>e.colors.primary};
      letter-spacing: 0.2em;
    }
    h2 {
      text-transform: capitalize;
      color: ${({theme:e})=>e.colors.whiteColor};
    }
  }

  /*-- pricing-selector style --*/
  .pricing-selector {
    margin-bottom: 40px;
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    form {
      display: flex;
      align-items: center;
      gap: 20px;
      button {
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
        color: ${({theme:e})=>e.colors.whiteColor};
        span {
          color: ${({theme:e})=>e.colors.heroimg1Bg};
        }
      }
      input[type="checkbox"] {
        appearance: none;
        width: 50px;
        height: 24px;
        border-radius: 15px;
        background-color: ${({theme:e})=>e.colors.whiteColor};
        position: relative;
        cursor: pointer;
        transition: 0.3s;
        &::before {
          position: absolute;
          content: "";
          top: 5px;
          left: 5px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: ${({theme:e})=>e.colors.primary};
          transition: 0.3s;
        }
        &:checked {
          background-color: ${({theme:e})=>e.colors.primary};
          &::before {
            left: 30px;
            background-color: ${({theme:e})=>e.colors.whiteColor};
          }
        }
      }
    }
  }

  .pricing-card-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  /*-- pricing-card style --*/
  .card-tag{
      width: 100%;
      height: 90px;
      border-radius: 30px 30px 0px 0px;
      background: ${({theme:e})=>e.colors.heroimg1Bg};
      color: ${({theme:e})=>e.colors.whiteColor};
      font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
      font-size: 14px;
      font-weight: 700;
      line-height: 214.286%;
      text-transform: uppercase;
      padding: 2px 40px;
      &.none{
        opacity: 0;
        visibility: hidden;
      }
    }
  .pricing-card {
    margin-bottom: 40px;
    border-radius: 30px;
    background-color: ${({theme:e})=>e.colors.whiteColor};
    padding: 40px;
    transition: 0.3s;
    position: relative;
    margin-top: -60px;
    .pricing-card-bottom{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      a{
        color: ${({theme:e})=>e.colors.whiteColor};
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 162.5%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 25px;
        max-width: 0px;
        height: 50px;
        visibility: hidden;
        padding: 12px 15px;
        transition: 0.3s;
        overflow: hidden;
        opacity: 0;
        span{
          min-width: max-content;
        }
      }
    }
    &:hover {
      .pricing-btn {
        background-color: ${({theme:e})=>e.colors.primary};
        color: ${({theme:e})=>e.colors.whiteColor};
        transform: translateX(0px);
        svg {
          transform: rotate(-45deg);
        }
      }
      .pricing-card-bottom{
        a{
          max-width: 150px;
          width: 100%;
          visibility: visible;
          background-color: ${({theme:e})=>e.colors.primary};
          opacity: 1;
        }
      }
    }

    h2 {
      font-size: 30px;
      color: ${({theme:e})=>e.colors.title};
    }

    h3 {
      font-size: 30px;
      span {
        font-family: ${({theme:e})=>e.fonts.dmSans} !important;
        font-size: 15px;
        font-weight: 500;
        line-height: 30px;
        color: ${({theme:e})=>e.colors.textColor};
      }
    }

    &-header {
      margin-bottom: 20px;
      p {
        margin-bottom: 28px;
      }
    }

    &-title {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    &-list {
      margin-bottom: 27px;
      li {
        padding-left: 16px;
        position: relative;

        &:not(:first-child) {
          margin-top: 20px;
        }

        &::before {
          position: absolute;
          content: "";
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.20);
        }
      }
    }

    .pricing-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${({theme:e})=>e.colors.primary}4d;
      color: ${({theme:e})=>e.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateX(-30px);
      svg {
        font-size: 20px;
        transition: 0.5s;
      }
      &:hover {
        background-color: ${({theme:e})=>e.colors.primary};
        color: ${({theme:e})=>e.colors.whiteColor};
        svg {
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 72px;
    padding-bottom: 50px;
    border-radius: 30px 30px 0 0;
    .pricing-selector {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .pricing-section-title {
      margin-bottom: 20px;
      h3 {
        margin-bottom: 11px;
        font-size: 16px;
        line-height: 30px;
      }
      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
    /* .shape-img {
      &.img-2 {
        bottom: 0;
        max-width: 309px;
        left: -35px;
      }

      &.img-1 {
        bottom: 0;
        right: 0px;
        max-width: 143px;
      }
    } */
    .pricing-card {
      padding: 36px 30px 40px 30px;
      h2 {
        font-size: 24px;
      }
    }
    .pricing-card {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
`;var Gm={},Kl={};Object.defineProperty(Kl,"__esModule",{value:!0});Kl.useTypingHeadlines=void 0;const Wt=N,Mp="\0",nw=4e3,rw=50,iw=(e,t={})=>{const{isStatic:n=!1,showHeadlineInitially:r=!0,headlineInterval:i=nw,letterInterval:a=rw}=t,l=e.join(Mp),s=(0,Wt.useMemo)(()=>l.split(Mp),[l]),c=(0,Wt.useMemo)(()=>s.reduce((f,x)=>x.length>f?x.length:f,0),[s]),d=Math.max(i,c*a+2*a),u=e[0],[p,g]=(0,Wt.useState)(0),[v,y]=(0,Wt.useState)(e[0]),[b,C]=(0,Wt.useState)(r?e[0]:""),[m,h]=(0,Wt.useState)(r?void 0:b);return(0,Wt.useEffect)(()=>{const f=setInterval(()=>h(void 0),d);return()=>clearInterval(f)},[d]),(0,Wt.useEffect)(()=>{h(s[p]),y(s[p])},[s,p]),(0,Wt.useEffect)(()=>{if(n)C(u);else{const f=setInterval(()=>{C(m?x=>x.length<m.length?x+m[x.length]:(clearInterval(f),m):x=>x.length>0?x.slice(0,-1):(clearInterval(f),g(j=>j<e.length-1?j+1:0),""))},a);return()=>clearInterval(f)}},[n,e.length,m,a,u]),[b,v,u]};Kl.useTypingHeadlines=iw;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.useTypingHeadlines=void 0;var t=Kl;Object.defineProperty(e,"useTypingHeadlines",{enumerable:!0,get:function(){return t.useTypingHeadlines}})})(Gm);const ow=""+new URL("defi-banner-bg-TXSeGv3V.png",import.meta.url).href,aw=Y.section`
  background: url(${ow});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;

  .defi-banner-inner {
    background: url(${Qm});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    height: 100%;
    width: 100%;
    .overlay {
      background: linear-gradient(
        180deg,
        #0d1014 0%,
        rgba(13, 16, 20, 0.7) 50.52%,
        #0d1014 100%
      );
      padding-top: 260px;
      width: 100%;
      height: 100%;
    }
  }

  .defi-banner-text {
    text-align: center;
    max-width: 813px;
    margin: auto;

    h1 {
      margin-bottom: 30px;
      font-size: 70px;
      font-weight: 700;
      line-height: 100px;
      text-align: center;
      color: ${({theme:e})=>e.colors.whiteColor};
      .words {
        padding: 0px -7px;
      }
      .word {
        padding: 0px 6px;
      }
      .animation-text {
        padding: 0;
        margin: 0 auto !important;
        text-align: center;

        &:after {
          display: none;
        }
      }

      b {
        background: linear-gradient(90deg, #37ea8e 35.54%, #bdf93f 65.12%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 700;
        margin-top: 6px;
      }
    }

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 36px;
      text-align: center;
      color: ${({theme:e})=>e.colors.whiteColor};
      max-width: 626px;
      margin: auto;
      margin-bottom: 48px;
    }
  }

  .defi-banner-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      .defi-banner-btn-shape {
        .shape1 {
          padding: 3.5px 0px;
        }

        .shape2 {
          padding: 5px 0px;
        }

        .shape3 {
          padding: 6px 0px;
        }
      }
    }
  }
  .defi-banner-btn-shape {
    margin-right: 15px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 4px;
    .shape1 {
      width: 3px;
      padding: 6px 0px;
      background: ${({theme:e})=>e.colors.whiteColor};
      border-radius: 2px;
      transition: 0.3s;
    }
    .shape2 {
      width: 3px;
      padding: 3.5px 0px;
      background: ${({theme:e})=>e.colors.whiteColor};
      border-radius: 2px;
      transition: 0.3s;
    }
    .shape3 {
      width: 3px;
      background: ${({theme:e})=>e.colors.whiteColor};
      border-radius: 2px;
      padding: 5px 0px;
      transition: 0.3s;
    }
  }

  @media screen and (max-width: 991px) {
    .defi-banner-inner {
      .overlay {
        padding-top: 157px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    /*-- defi index start --*/
    .defi-banner-inner {
      .overlay {
        padding-top: 137px;
      }
    }
  }

  @media screen and (max-width: 575px) {
    /*-- defi index start --*/
    .defi-banner-text {
      h1 {
        font-size: 32px;
        margin-bottom: 20px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .defi-banner-text h1 {
      line-height: 120%;
    }
  }
`;Y.div`
  margin-top: 59px;
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    color: ${({theme:e})=>e.colors.whiteColor};
    text-transform: uppercase;
    margin-bottom: 9px;
  }
  .multi-chain-card {
    background: ${({theme:e})=>e.colors.whiteColor}0d;
    backdrop-filter: blur(10px);
    border-radius: 150px;
    padding: 20px 0px;
    overflow: hidden;
  }

  .multi-chain-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    &:nth-last-child(1) {
      margin-bottom: 0px;
    }
    &1 {
      animation: smoothSlider 32s infinite linear;
    }
    &2 {
      animation: smoothSlider 25s infinite linear;
    }
    &3 {
      animation: smoothSlider 15s infinite linear;
    }
    &4 {
      animation: smoothSlider 22s infinite linear;
    }
    ul {
      list-style: none;
      padding: 0px;
      margin: 0px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      li {
        margin-right: 20px;
        padding: 10px;
        background: ${({theme:e})=>e.colors.whiteColor}0d;
        border: 1px solid ${({theme:e})=>e.colors.whiteColor}14;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: max-content;
        .coin-img {
          height: 30px;
          width: 30px;
          overflow: hidden;
          border-radius: 50%;
          position: relative;
          margin-right: 9px;
          img {
            position: absolute;
            height: 100%;
            width: 100%;
            border-radius: 50%;
          }
        }
        span {
          color: ${({theme:e})=>e.colors.whiteColor}cc;
        }
      }
    }
  }
  .scrollerWrapper {
    overflow: hidden;
    *position: relative;
  }

  .scroller {
    position: relative;
    white-space: nowrap;
    display: inline-block;
    display: flex;
    align-items: center;
    .slid-content {
      display: inline-block;
      *display: inline;
      white-space: normal;
      vertical-align: middle;
    }
  }

  .multi-chain-scroller-wrapper {
    overflow: hidden;
    *position: relative;
    margin-bottom: 20px;
    &:nth-last-child(1) {
      margin-bottom: 0px;
    }
  }

  .multi-chain-scroller {
    position: relative;
    white-space: nowrap;
    display: flex;
    align-items: center;
    .multi-chain-slid-content {
      white-space: normal;
      vertical-align: middle;
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 30px;
    .multi-chain-card {
      padding: 10px 0px;
    }
    .multi-chain-list {
      margin-bottom: 10px;
      ul {
        li {
          padding: 5px;
          margin-right: 10px;
          .coin-img {
            height: 20px;
            width: 20px;
          }
        }
      }
    }
  }
`;const lw=()=>{const[e]=Gm.useTypingHeadlines(["En control","Transparencia","Fideicomiso DeFi"]);return N.useEffect(()=>{ci(),di({targets:"[data-splitting]"})},[]),o.jsx(aw,{className:"defi-banner-section",children:o.jsx("div",{className:"defi-banner-inner",children:o.jsx("div",{className:"overlay",children:o.jsx("div",{className:"container",children:o.jsx(O,{delay:200,children:o.jsxs("div",{className:"defi-banner-text",children:[o.jsxs("h1",{className:"cd-headline clip is-full-width",children:[o.jsxs("span",{"data-splitting":!0,className:"p-0",children:["Recompensas ",o.jsx("br",{}),"en una nueva dimensión"]}),o.jsx("br",{}),o.jsx("span",{className:"cd-words-wrapper animation-text",children:o.jsxs("b",{children:[" ",e," "]})})]}),o.jsx("p",{"data-splitting":!0,children:"Con ARKA DeFi Reserve, genera recompensas mensuales sin complicaciones. Sin estrés. Solo resultados."}),o.jsxs("a",{href:"#get-updates",className:"defi-banner-btn btn-hov-effect",children:[o.jsxs("div",{className:"defi-banner-btn-shape",children:[o.jsx("div",{className:"shape1"}),o.jsx("div",{className:"shape2"}),o.jsx("div",{className:"shape3"})]}),"Comienza ahora",o.jsx("span",{className:"round-shape"})]})]})})})})})})},sw=""+new URL("defi-safe-platform-bg-BTG9-WGP.png",import.meta.url).href,cw=Y.section`
  margin-top: 102px;
  background: url(${sw});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .overlay {
    background: linear-gradient(
      180deg,
      #0d1014 3.12%,
      rgba(13, 16, 20, 0.6) 48.96%,
      #0d1014 95.83%
    );
    padding-bottom: 55px;
    position: relative;
  }

  .defi-statistic-section {
    padding-top: 38px;
    padding-bottom: 133px;
  }

  .defi-statistic-card {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.10) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    //    border-image: linear-gradient(to right, #37EA8E, rgba(55, 234, 142, 0)) 30;
    border-color: #141f1e;
    border-width: 1px;
    border-style: solid;
    border-radius: 90px;
    overflow: hidden;
    padding: 40px 44px;
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      text-transform: uppercase;
      color: ${({theme:e})=>e.colors.whiteColor};
      margin-bottom: 0px;
    }
    p {
      font-size: 18px;
      margin-bottom: 0px;
      color: ${({theme:e})=>e.colors.whiteColor};
    }
  }

  .number-diy {
    display: flex;
    gap: 5px;
    .counter-text{
      margin-top: 5px;
    }
  }

  .CountUp-module_mainContainer__515y8 {
    &::before {
      background: transparent;
    }
  }

  .defi-safe-platform-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 60px;
  }
  .defi-safe-platform-img {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(13, 16, 20, 0) 100%
    );
    border-radius: 50px;
    margin-right: 19px;
    max-width: 100px;
    width: 100%;
    height: 217px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 30px 20px;
  }
  .defi-safe-platform-text {
    h4 {
      color: ${({theme:e})=>e.colors.whiteColor};
      margin-bottom: 26px;
    }
    p {
      color: ${({theme:e})=>e.colors.whiteColor}cc;
      margin-bottom: 0px;
    }
  }
  .defi-safe-platform-shape {
    .galaxy1 {
      position: absolute;
      right: 15%;
      top: 30%;
    }
    .galaxy2 {
      position: absolute;
      bottom: -424px;
      left: 0px;
    }
    .rocket {
      position: absolute;
      bottom: 20%;
      left: 40%;
    }
  }

  @media screen and (max-width: 991px) {
    .defi-safe-platform-img {
      max-width: 80px;
    }
    .overlay {
      padding-bottom: 0px;
    }
    .defi-safe-platform-content {
      margin-bottom: 30px;
    }
    .defi-statistic-section {
      padding-bottom: 70px;
      padding-top: 0px;
    }
    .defi-statistic-card {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 80px;
    .defi-safe-platform-shape {
      .galaxy2 {
        bottom: -200px;
        max-width: 300px;
      }
      .rocket {
        max-width: 150px;
      }
    }

    .defi-statistic-card {
      padding: 30px;
      h2 {
        font-size: 32px;
      }
    }
    .defi-statistic-section {
      padding-bottom: 40px;
    }
  }
`;var Si={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function dw(){if(zp)return Si;zp=1;var e=J,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(s,c,d){var u,p={},g=null,v=null;d!==void 0&&(g=""+d),c.key!==void 0&&(g=""+c.key),c.ref!==void 0&&(v=c.ref);for(u in c)r.call(c,u)&&!a.hasOwnProperty(u)&&(p[u]=c[u]);if(s&&s.defaultProps)for(u in c=s.defaultProps,c)p[u]===void 0&&(p[u]=c[u]);return{$$typeof:t,type:s,key:g,ref:v,props:p,_owner:i.current}}return Si.Fragment=n,Si.jsx=l,Si.jsxs=l,Si}dw();function es(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var uw=`@keyframes NumberResult-module_count-up__enc8k{0%{transform:translateY(0)}to{transform:translateY(-91.4%)}}.NumberResult-module_numberFrame__Uqd9g{animation:NumberResult-module_count-up__enc8k 1.5s cubic-bezier(0,0,0,1) forwards;display:flex;flex-direction:column;line-height:2}.NumberResult-module_numberStyle__-Yf3N{margin:0}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk51bWJlclJlc3VsdC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUNFLEdBQ0UsdUJBQ0YsQ0FDQSxHQUNFLDRCQUNGLENBQ0YsQ0FFQSx3Q0FLRSxpRkFBNEQsQ0FKNUQsWUFBYSxDQUNiLHFCQUFzQixDQUN0QixhQUdGLENBRUEsd0NBQ0UsUUFDRiIsImZpbGUiOiJOdW1iZXJSZXN1bHQubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgY291bnQtdXAge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05MS40JSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubnVtYmVyRnJhbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBsaW5lLWhlaWdodDogMjtcclxuXHJcbiAgYW5pbWF0aW9uOiBjb3VudC11cCAxNTAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAsIDEpIGZvcndhcmRzO1xyXG59XHJcblxyXG4ubnVtYmVyU3R5bGUge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */`;es(uw);var pw=`@keyframes NumberLoading-module_count-up__twOSr{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.NumberLoading-module_numberLoadingFrame__8PwDT{animation:NumberLoading-module_count-up__twOSr .7s cubic-bezier(1,-.05,.97,.63) infinite;display:flex;flex-direction:column;line-height:2}.NumberLoading-module_numberStyle__F0W8D{margin:0}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk51bWJlckxvYWRpbmcubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFDRSxHQUNFLHVCQUNGLENBQ0EsR0FDRSwyQkFDRixDQUNGLENBRUEsZ0RBS0Usd0ZBQXFFLENBSnJFLFlBQWEsQ0FDYixxQkFBc0IsQ0FDdEIsYUFHRixDQUVBLHlDQUNFLFFBQ0YiLCJmaWxlIjoiTnVtYmVyTG9hZGluZy5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBjb3VudC11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbn1cblxuLm51bWJlckxvYWRpbmdGcmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAyO1xuXG4gIGFuaW1hdGlvbjogY291bnQtdXAgNzAwbXMgY3ViaWMtYmV6aWVyKDEsIC0wLjA1LCAwLjk3LCAwLjYzKSBpbmZpbml0ZTtcbn1cblxuLm51bWJlclN0eWxlIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */`;es(pw);var fw=`@keyframes NumberContainer-module_appear__W3cGy{0%{opacity:0}to{opacity:1}}.NumberContainer-module_numberContainerFrame__XTz2L{animation:NumberContainer-module_appear__W3cGy .3s ease-in forwards;aspect-ratio:1/2.7;opacity:0;overflow:hidden;width:fit-content}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk51bWJlckNvbnRhaW5lci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdEQUNFLEdBQ0UsU0FDRixDQUNBLEdBQ0UsU0FDRixDQUNGLENBRUEsb0RBS0UsbUVBQXVDLENBRnZDLGtCQUFxQixDQUNyQixTQUFVLENBSFYsZUFBZ0IsQ0FDaEIsaUJBSUYiLCJmaWxlIjoiTnVtYmVyQ29udGFpbmVyLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGFwcGVhciB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLm51bWJlckNvbnRhaW5lckZyYW1lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBhc3BlY3QtcmF0aW86IDEgLyAyLjc7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogYXBwZWFyIDAuM3MgZWFzZS1pbiBmb3J3YXJkcztcbn1cbiJdfQ== */`;es(fw);var hw=`.CountUp-module_mainContainer__515y8{display:flex;width:fit-content}.CountUp-module_mainContainer__515y8:before{background:linear-gradient(0deg,hsla(0,0%,96%,0) 0,#f5f5f5);content:"";display:block;height:10px;left:0;position:fixed;top:0;width:100%;z-index:1}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvdW50VXAubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FDRSxZQUFhLENBQ2IsaUJBQ0YsQ0FFQSw0Q0FRRSwyREFJQyxDQVhELFVBQVcsQ0FNWCxhQUFjLENBRGQsV0FBWSxDQUZaLE1BQU8sQ0FGUCxjQUFlLENBQ2YsS0FBTSxDQUVOLFVBQVcsQ0FRWCxTQUNGIiwiZmlsZSI6IkNvdW50VXAubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLm1haW5Db250YWluZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHRvcCxcclxuICAgIHJnYmEoMjQ1LCAyNDUsIDI0NSwgMCkgMCUsXHJcbiAgICByZ2JhKDI0NSwgMjQ1LCAyNDUsIDEpIDEwMCVcclxuICApO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuIl19 */`;es(hw);const mw=""+new URL("icon_2-Bz7j8fJa.svg",import.meta.url).href,gw=""+new URL("icon_4-eRBr1wJp.svg",import.meta.url).href,xw=""+new URL("icon_6-B6yFErmh.svg",import.meta.url).href,vw=[{delay:200,icon:mw,title:"Ingresos estables mensuales",description:"Hasta el 5% sobre tu capital, sin depender de la volatilidad."},{delay:250,icon:gw,title:"Automatización total",description:"Nuestras patentes inteligentes gestionan todo por ti."},{delay:300,icon:xw,title:"Custodia DeFi auditada",description:"Contratos inteligentes con auditorías externas y monitoreo continuo."}],yw=""+new URL("glaxy_1-DLqY_jZ2.png",import.meta.url).href,bw=""+new URL("glaxy_2-QIPH5VUt.png",import.meta.url).href,ww=""+new URL("rocket-CFixC5qc.png",import.meta.url).href,Cw=()=>{const[e,t]=N.useState(1),[n,r]=N.useState(1),[i,a]=N.useState(1);return N.useEffect(()=>{ci(),di({targets:"[data-splitting]"});const l=()=>{const s=document.querySelector(".defi-safe-platform-content");if(s){const u=window.scrollY;let p=s.offsetTop;p=p+400;let g=(u-p)/4;const v=100;g<0&&(g=0),g>v&&(g=v),t(g)}const c=document.querySelector(".galaxy1");if(c){const u=window.scrollY;let p=c.offsetTop;p=p+400;let g=(u-p)/6;const v=100;g<0&&(g=0),g>v&&(g=v),r(g)}const d=document.querySelector(".rocket");if(d){const u=window.scrollY;let p=d.offsetTop;p=p+400;let g=-1*(u-p)/6;const v=100;g<0&&(g=0),g>v&&(g=v),a(g)}};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[e]),o.jsx(cw,{className:"defi-safe-platform-section",children:o.jsxs("div",{className:"overlay",children:[o.jsxs("div",{className:"defi-safe-platform-shape",children:[o.jsx("img",{src:yw,alt:"img",className:"galaxy1",style:{transform:`translateY(${n}px)`}}),o.jsx("img",{src:bw,alt:"img",className:"galaxy2"}),o.jsx("img",{src:ww,alt:"img",className:"rocket",style:{transform:`translateY(${i}px)`}})]}),o.jsx("div",{className:"defi-safe-platform-content-section",children:o.jsxs("div",{className:"container",children:[o.jsx(ui,{children:o.jsxs("div",{className:"section-title defi",children:[o.jsx("span",{className:"sub-title","data-splitting":!0,children:"El costo de vida sube; tu cuenta de ahorros sigue en coma."}),o.jsxs("h2",{className:"title",children:[o.jsx("span",{"data-splitting":!0,children:"Con ARKA "}),o.jsx("span",{className:"liniar",children:"Despierta"}),o.jsx("span",{"data-splitting":!0,children:" tu capital."})]})]})}),o.jsx("div",{className:"defi-safe-platform-content",children:o.jsx("div",{className:"row",children:vw.map((l,s)=>o.jsx("div",{className:"col-lg-4 col-sm-6",children:o.jsx(O,{delay:l.delay,children:o.jsxs("div",{className:"defi-safe-platform-content",children:[o.jsx("div",{className:"defi-safe-platform-img",children:o.jsx("img",{src:l.icon,alt:"icon",style:{transform:`translateY(${e}px)`}})}),o.jsxs("div",{className:"defi-safe-platform-text",children:[o.jsx("h4",{children:l.title}),o.jsx("p",{children:l.description})]})]})})},s))})})]})})]})})},kw="data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='5'%20cy='5'%20r='5'%20fill='url(%23paint0_linear_3281_873)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_3281_873'%20x1='0'%20y1='5'%20x2='10'%20y2='5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2337EA8E'/%3e%3cstop%20offset='1'%20stop-color='%2337EA8E'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",jw=Y.section`
  .defi-metaverse-card {
    padding: 100px;
    background: ${({theme:e})=>e.colors.whiteColor}0d;
    backdrop-filter: blur(25px);
    border-radius: 30px;
    margin-bottom: 50px;
    overflow: hidden;
    .blur-shape {
      position: absolute;
      top: -25px;
      left: -10px;
      height: 100%;
      width: 70%;
      z-index: -1;
    }
    .card-left-content {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      .arrow {
        min-width: 36.56px;
      }
    }
    .card-left-text {
      margin-left: 65px;
      p {
        color: ${({theme:e})=>e.colors.whiteColor}cc;
        margin-bottom: 55px;
      }
    }
  }

  .defi {
    margin-bottom: 38px;
    .sub-title {
      color: #37ea8e;
    }
    .title {
      color: ${({theme:e})=>e.colors.whiteColor};
      span.liniar {
        background: linear-gradient(90deg, #37ea8e 35.54%, #bdf93f 65.12%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }

  .metavarse-card-img {
    max-width: 311px;
    margin-left: auto;
  }

  .defi-metaverse-card2 {
    border-radius: 30px;
    overflow: hidden;
    max-width: 750px;
    width: 100%;
    margin-bottom: 50px;
    position: relative;
    .metavarse-card-bg2 {
      top: -20px;
      left: 0px;
      width: 100%;
      height: 150%;
      position: absolute;
      z-index: 0;
    }
    .overlay {
      background: rgba(13, 16, 20, 0.4);
      backdrop-filter: blur(20px);
      border-radius: 30px;
      height: 100%;
      width: 100%;
      padding: 50px 100px;
      position: relative;
      z-index: 2;
    }
    .card2-text {
      h3 {
        line-height: 167%;
        color: ${({theme:e})=>e.colors.whiteColor};
      }
      p {
        margin-bottom: 27px;
        color: ${({theme:e})=>e.colors.whiteColor}cc;
      }
      a {
        color: ${({theme:e})=>e.colors.whiteColor};
        img {
          filter: brightness(100);
          margin-left: 14px;
          transition: 0.3s;
        }
        &:hover {
          img {
            transform: rotate(-45deg);
          }
        }
      }
    }
    .card2-img {
      max-width: 170px;
      margin-left: auto;
      margin-top: 16px;
    }
  }

  .defi-metaverse-card3 {
    border-radius: 30px;
    overflow: hidden;
    max-width: 370px;
    width: 100%;
    margin-bottom: 50px;
    position: relative;
    .metavarse-card-bg3 {
      top: -20px;
      left: -77px;
      min-width: 130%;
      min-height: 125%;
      position: absolute;
      z-index: 0;
      object-fit: cover;
    }
    .overlay {
      background: rgba(77, 83, 84, 0.7);
      border-radius: 30px;
      height: 100%;
      width: 100%;
      padding: 68px 40px 45px 40px;
      position: relative;
      z-index: 1;
    }
    h3 {
      margin-bottom: 41px;
      color: ${({theme:e})=>e.colors.whiteColor};
    }
    ul {
      margin-bottom: 0px;
      list-style: url(${kw});
      li {
        color: ${({theme:e})=>e.colors.whiteColor}cc;
        line-height: 267%;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .defi-metaverse-card2 {
      .overlay {
        padding: 50px;
      }
    }
    .defi-metaverse-card3 {
      .overlay {
        padding: 40px 40px 20px 40px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .defi-metaverse-card {
      padding: 50px;
    }
    .defi-metaverse-card {
      margin-bottom: 30px;
    }
    .defi-metaverse-card2,
    .defi-metaverse-card3 {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 767px) {
    .metaverse-card .overlay {
      padding: 50px 30px;
    }
    .defi-metaverse-card2 {
      .card2-img {
        margin-right: auto;
      }
    }
    .card-left{
      .title{
        font-size: 36px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .defi-metaverse-card {
      .card-left-text {
        margin-left: 20px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .defi-metaverse-card {
      padding: 40px 30px;
    }
  }
`,Aw=""+new URL("blur-layer--zADatRX.png",import.meta.url).href,Sw="data:image/svg+xml,%3csvg%20width='39'%20height='16'%20viewBox='0%200%2039%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5586%201L37.5586%208L30.5586%2015'%20stroke='%23BDF93F'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%208H35'%20stroke='%23BDF93F'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Nw=""+new URL("object-OhbSJ2hd.png",import.meta.url).href,Ew=""+new URL("metavarse-card-bg-hoBtKWGF.jpg",import.meta.url).href,Pw=""+new URL("metavarse-card-bg3-DQhvytAB.jpg",import.meta.url).href,Ym="data:image/svg+xml,%3csvg%20width='19'%20height='16'%20viewBox='0%200%2019%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5586%201L17.5586%208L10.5586%2015'%20stroke='%23BFFF0A'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%208H16.2302'%20stroke='%23BFFF0A'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Lw=""+new URL("metavarse-img2-DnvSK-rM.png",import.meta.url).href,Ow=()=>(N.useEffect(()=>{ci(),di({targets:"[data-splitting]"})},[]),o.jsx(jw,{className:"defi-metaverse-section",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-12",children:o.jsx(O,{delay:200,children:o.jsxs("div",{className:"defi-metaverse-card",children:[o.jsx("img",{src:Aw,alt:"img",className:"blur-shape"}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-7",children:o.jsx(O,{delay:200,children:o.jsxs("div",{className:"card-left",children:[o.jsxs("div",{className:"defi","data-splitting":!0,children:[o.jsx("span",{className:"sub-title uppercase",children:"Dos vías de ingresos + garantía patrimonial"}),o.jsx("h2",{className:"title",children:"Multiplica tu capital por partida doble"})]}),o.jsxs("div",{className:"card-left-content",children:[o.jsx("a",{href:"#",children:o.jsx("img",{src:Sw,alt:"icon",className:"arrow"})}),o.jsxs("div",{className:"card-left-text",children:[o.jsx("p",{children:"Ingresos mensuales y recompensas por compartir, todo protegido por el primer Fideicomiso DeFi respaldado con bienes inmuebles."}),o.jsxs("a",{href:"#",className:"metavarse-card-btn btn-hov-effect",children:[o.jsxs("span",{className:"btn-inner",children:[o.jsx("span",{className:"btn-normal-text",children:"Conoce cómo funciona"}),o.jsx("span",{className:"btn-hover-text",children:"Conoce cómo funciona"})]}),o.jsx("span",{className:"round-shape"})]})]})]})]})})}),o.jsx("div",{className:"col-md-5",children:o.jsx("div",{className:"card-right",children:o.jsx("div",{className:"metavarse-card-img",children:o.jsx(O,{delay:300,children:o.jsx("img",{src:Nw,alt:"img"})})})})})]})]})})}),o.jsx("div",{className:"col-lg-8",children:o.jsx(O,{delay:250,children:o.jsxs("div",{className:"defi-metaverse-card2",children:[o.jsx("img",{src:Ew,alt:"img",className:"metavarse-card-bg2"}),o.jsx("div",{className:"overlay",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-7",children:o.jsxs("div",{className:"card2-text",children:[o.jsx("h3",{className:"mb-4","data-splitting":!0,children:"Rendimiento Automático"}),o.jsx("p",{children:"Gana entre 3 % y 5 % al mes Tu aporte se coloca en pools DeFi diversificados y auditados. Cobras cada 30 días sin mover un dedo."}),o.jsxs("a",{href:"#",children:["Ver Planes de aportación",o.jsx("img",{src:Ym,alt:"icon"})]})]})}),o.jsx("div",{className:"col-md-5",children:o.jsx("div",{className:"card2-img",children:o.jsx("img",{src:Lw,alt:"img"})})})]})})]})})}),o.jsx("div",{className:"col-lg-4",children:o.jsx(O,{delay:300,children:o.jsxs("div",{className:"defi-metaverse-card3",children:[o.jsx("img",{src:Pw,alt:"img",className:"metavarse-card-bg3"}),o.jsxs("div",{className:"overlay",children:[o.jsx("h3",{"data-splitting":!0,children:"Programa de Recomendación ARKA"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Disfruta, comparte y gana"}),o.jsx("li",{children:"1.5 % · referidos directos"}),o.jsx("li",{children:"1 % · contactos de tus invitados"}),o.jsx("li",{children:"0.5 % · contactos de esos referidos"})]})]})]})})})]})})})),Tw=Y.section`
  padding-top: 82px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    z-index: 23;
    bottom: 225px;
    left: 0px;
    background: linear-gradient(
      90deg,
      rgba(13, 16, 20, 0) 0%,
      rgba(55, 234, 142, 0.5) 51.56%,
      rgba(13, 16, 20, 0) 100%
    );
  }
  &::after {
    content: "";
    position: absolute;
    height: 287px;
    width: 100%;
    z-index: 22;
    bottom: -60px;
    left: 0px;
    background: rgba(13, 16, 20, 0.7);
    backdrop-filter: blur(40px);
  }
  p {
    font-size: 18px;
    line-height: 200%;
    text-align: center;
    color: ${({theme:e})=>e.colors.whiteColor}cc;
    max-width: 779px;
    margin: auto;
    margin-bottom: 55px;
  }

  .defi {
    margin-bottom: 38px;
    text-align: center;

    .sub-title {
      margin-bottom: 12px;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0.2em;
      color: #37ea8e;
      display: block;
    }
    .title {
      color: ${({theme:e})=>e.colors.whiteColor};
      span.liniar {
        background: linear-gradient(90deg, #37ea8e 35.54%, #bdf93f 65.12%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }

  .ecosystem-text {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px;
      list-style: none;
      margin-bottom: 0px;

      li {
        width: 20%;
        font-size: 18px;
        padding: 0px 12px;
        text-align: center;
        margin-bottom: 13px;
        color: ${({theme:e})=>e.colors.whiteColor};
        line-height: 30px;
      }
    }
  }
  .ecosystem-content {
    max-width: 944px;
    margin: auto;
    text-align: center;
    .globe-img {
      max-width: 450px;
      margin: auto;
      text-align: center;
      margin-top: -60px;
      position: relative;
      z-index: 1;
      border-radius: 50%;
      .cloud1 {
        position: absolute;
        top: 51px;
        left: 42px;
      }
      .cloud2 {
        position: absolute;
        top: 150px;
        left: -27px;
      }
      .cloud3 {
        position: absolute;
        top: 72px;
        right: -47px;
      }
      .cloud4 {
        position: absolute;
        top: 175px;
        right: -20px;
      }
    }
  }
  .eco-line-pc {
    display: block;
  }

  .eco-line-mobile {
    display: none;
  }

  .defi-launchapp-btn {
    width: 220px;
    height: 60px;
    background: #37ea8e;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: ${({theme:e})=>e.colors.title} !important;
    position: relative;
    overflow: hidden;
    margin: auto;
    margin-bottom: 72px;
    font-weight: 700;
    img {
      transition: 0.3s;
      margin-left: 14px;
    }
    &:hover {
      color: ${({theme:e})=>e.colors.title};
      img {
        transform: rotate(-45deg);
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .ecosystem-content {
      max-width: 755px;
    }
  }
  @media screen and (min-width: 991px) and (max-width: 1200px) {
  }
  @media screen and (max-width: 991px) {
    .ecosystem-text {
      ul {
        li {
          font-size: 13px;
        }
      }
    }
    .ecosystem-content {
      max-width: 560px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    padding-top: 50px;
    p {
      font-size: 16px;
      margin-bottom: 30px;
    }
    .ecosystem-text {
      ul {
        flex-wrap: wrap;
        justify-content: center;
        li {
          width: 50%;
          line-height: 20px;
          &:nth-child(1) {
            text-align: left;
            padding: 0px;
          }
          &:nth-child(2) {
            text-align: right;
            padding: 0px;
          }
          &:nth-child(3) {
            text-align: right;
            padding-right: 20px;
          }
          &:nth-child(4) {
            text-align: left;
            padding-left: 20px;
          }
        }
      }
    }
    .defi-launchapp-btn {
      margin-bottom: 50px;
    }
    .ecosystem-text {
      margin-bottom: -100px;
      position: relative;
      z-index: 1;
    }

    .ecosystem-text ul li {
      &:nth-child(3) {
        padding-left: 80px;
        text-align: left;
      }
      &:nth-child(4) {
        padding-right: 80px;
        text-align: right;
      }
    }
    .ecosystem-content {
      overflow: hidden;
    }
    .eco-line-pc {
      display: none;
    }

    .eco-line-mobile {
      display: block;
      position: relative;
      z-index: 0;
    }
  }
  @media screen and (max-width: 575px) {
    /*-- defi index start --*/
    .ecosystem-text ul li {
      &:nth-child(3) {
        padding-left: 30px;
      }
      &:nth-child(4) {
        padding-right: 30px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    &::after {
      height: 200px;
    }
    &::before {
      bottom: 140px;
    }
  }
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 374px) {
    .ecosystem-text ul li {
      &:nth-child(3) {
        padding: 0px 15px;
      }
      &:nth-child(4) {
        padding: 0px 15px;
      }
    }
  }
  @media screen and (min-width: 768px) {
  }
`,Iw="data:image/svg+xml,%3csvg%20width='944'%20height='229'%20viewBox='0%200%20944%20229'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%207V96.36C4%20121.56%2024.44%20142%2049.64%20142H293.35C318.56%20142%20338.99%20162.43%20338.99%20187.64V229'%20stroke='white'%20stroke-opacity='0.15'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M238%207V42.36C238%2067.57%20258.43%2088%20283.64%2088H362.35C387.56%2088%20407.99%20108.44%20407.99%20133.64V229'%20stroke='white'%20stroke-opacity='0.15'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M940%207V96.36C940%20121.57%20919.57%20142%20894.36%20142H650.64C625.43%20142%20605%20162.43%20605%20187.64V229'%20stroke='white'%20stroke-opacity='0.15'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M706.002%207V42.36C706.002%2067.57%20685.572%2088%20660.362%2088H581.652C556.442%2088%20536.012%20108.44%20536.012%20133.64V229'%20stroke='white'%20stroke-opacity='0.15'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M472.801%207V229'%20stroke='white'%20stroke-opacity='0.15'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3ccircle%20cx='4'%20cy='4'%20r='4'%20fill='white'%20fill-opacity='0.15'/%3e%3ccircle%20cx='238'%20cy='4'%20r='4'%20fill='white'%20fill-opacity='0.15'/%3e%3ccircle%20cx='473'%20cy='4'%20r='4'%20fill='white'%20fill-opacity='0.15'/%3e%3ccircle%20cx='706'%20cy='4'%20r='4'%20fill='white'%20fill-opacity='0.15'/%3e%3ccircle%20cx='940'%20cy='4'%20r='4'%20fill='white'%20fill-opacity='0.15'/%3e%3c/svg%3e",Rw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiAAAAHzCAMAAAAuFVYyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABgUExURUdwTP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VBRWkAAAAgdFJOUwAEBQ4hAiQmHAoaCREHFR0MEyMXHxAYEh4iCxRGRAg79QaMFwAADA5JREFUeNrt3d1C4sgWgNGAkIr8q7Rtz8w55/3f8gDatq3QI1IV2MX6bmauZkhcJpUYsptmuGzTZNBIv/XTxbBNm+4J0e8+frqYpF2dXaK3vbp4/me6t0v0tlcX7cu/2SV626uL7vmfE7tEb3t18bwYaS1StWeRunUxnPzzn44PvRfyy4UFiPavU9//iwSIABEgAkSACBABIkAEiASIABEgAkSACBABIkAEiASIABEgAkSACBABIkAECCACRIAIEAEiQASIABEgAgQQASJABIgAESACRIAIEAECiAARIAJEgAgQASJABIgEiAARIAJEgAgQASJABIgEiAARIAJEgAgQASJABIgEiAARIAJEgAgQASJABIgEiAARIAJEgAgQASJABIgEiAARIAJEgAgQASJABIgEiAARIAJEgAgQASJABIidIUAEiAARIAJEgAgQASJAABEgAkSACBBdA5Dhsk2TgV3cV2X2dzkgwzZtuiekLx9l9nc5IJO0q/Oj66dC+7sckOfPm+796PpaLBTZ3+WAtC+f2I+unwrt73JAuufPO/Gj66dC+7v0IrW1SO11kdrGWaQ2w0lqOz76E1Jkfxe9UWYB0vc6teB/ExBAAAEEEEAAESACRIAAAggggAACCCCAAAIIIIAAIkAEiAABBBBAAAEEEEAAAQQQQASIABEgAgQQQAABBBBAAAEEEEAAESACRIAIEEAAAQQQQAABBBBAAAFEgAgQASJAAAEEEEAAAQQQQAABBBABIkAEiAABBBBAAAEEEEAAAQQQQASIABEgAgQQQAABBBBAAAEEEEAAESACRIAIEEAAAQQQQAABBBBAAAFEgAgQASJAAAEEEEAAAQQQQAABBBABIkAEiB8aIIAAAggg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",Mw=""+new URL("globe-BaEU-V_M.png",import.meta.url).href,zw="data:image/svg+xml,%3csvg%20width='55'%20height='20'%20viewBox='0%200%2055%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40.9764%2020H0C1.19099%2016.5773%202.43562%2014.0075%203.72318%2011.0837L5.45064%208.19206L5.68133%2010.4077C8.23498%207.62339%2011.6738%203.91631%2014.4635%201.36803C20.7135%200.82618%2022.3927%200.675966%2034.1524%200C35.9442%204.02897%2038.3476%209.40987%2040.4936%2013.2618C44.5976%2014.4796%2050.0644%2016.1052%2054.1953%2017.2318C50.3326%2018.0204%2045.0697%2019.5172%2041.1534%2019.9356L40.9764%2020Z'%20fill='white'%20fill-opacity='0.8'/%3e%3c/svg%3e",Bw="data:image/svg+xml,%3csvg%20width='79'%20height='35'%20viewBox='0%200%2079%2035'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.45213%2034.8392L0%2020.3836L11.557%2012.29L21.861%200L36.7878%2015.9179L42.9328%2013.1428L51.8118%2019.8226L78.434%2028.395L69.2482%2035L3.45213%2034.8392Z'%20fill='white'%20fill-opacity='0.8'/%3e%3c/svg%3e",Dw="data:image/svg+xml,%3csvg%20width='163'%20height='45'%20viewBox='0%200%20163%2045'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M140.312%2044.995C140.312%2044.995%20121.98%2044.995%20112.095%2044.995C101.563%2044.995%2090.5126%2044.995%2079.0302%2044.995C58.5276%2044.995%2036.6382%2044.995%2013.7889%2044.995L0%2034.5226C23.0251%2026.3719%2026.5628%2025.1005%2043.0151%2018.9447C49.2362%2020.5628%2057.5327%2022.6935%2063.7437%2024.3367C70.4472%2020.8543%2079.3869%2016.201%2086.0302%2012.608L88.6633%208.62312C93.4774%206.05025%2099.9196%202.65829%20104.688%200C109.663%205.27638%20116.332%2012.3266%20121.216%2017.6884C140.296%2029.4472%20145.548%2032.3719%20162.93%2045C155.839%2044.995%20140.312%2044.995%20140.312%2044.995Z'%20fill='white'%20fill-opacity='0.8'/%3e%3c/svg%3e",Uw="data:image/svg+xml,%3csvg%20width='95'%20height='20'%20viewBox='0%200%2095%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M92.1101%2019.9715C92.1101%2019.9715%2047.3154%2019.9715%200%2019.9715C11.493%2016.9428%2025.7916%2012.8317%2039.3591%208.25065L47.5101%2010.5103C51.5405%207.8234%2056.9238%204.24875%2060.8355%201.38619C72.1149%200.78329%2074.7876%200.626632%2083.1189%200C85.4355%203.96392%2088.5402%209.25231%2090.4961%2013.4014C91.7968%2014.5407%2093.6008%2016.0266%2094.6689%2017.389C93.8856%2018.1866%2093.1308%2019.644%2092.0722%2020L92.1101%2019.9715Z'%20fill='white'%20fill-opacity='0.8'/%3e%3c/svg%3e",Fw="data:image/svg+xml,%3csvg%20width='19'%20height='16'%20viewBox='0%200%2019%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5586%201L17.5586%208L10.5586%2015'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%208H16.2302'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Hw=()=>{const e=N.useRef(null),t=N.useRef(null),n=N.useRef(null),r=()=>{const i=window.scrollY,a=e.current.getBoundingClientRect().top;let l=(i-a)/40;const s=t.current.getBoundingClientRect().top;let c=(i-s)/40;l=-l;const d=n.current.getBoundingClientRect().top;let u=(i-d)/9;e.current.style.transform=`translateX(${l}px)`,t.current.style.transform=`translateX(${c}px)`,n.current.style.transform=`rotate(${u}deg)`};return N.useEffect(()=>(ci(),di({targets:"[data-splitting]"}),window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}),[]),o.jsx(Tw,{className:"ecosystem-section",children:o.jsxs("div",{className:"container",children:[o.jsx(O,{delay:200,children:o.jsxs("div",{className:"defi","data-splitting":!0,children:[o.jsx("span",{className:"sub-title",children:"¿Cómo gano?"}),o.jsx("h2",{className:"title",children:"Ganar sin complicarte nunca fue tan real."})]})}),o.jsxs(O,{delay:250,children:[o.jsx("p",{children:"ARKA DeFi Reserve no es magia. Tu capital se conecta al ecosistema DeFi real, donde participa en pools estratégicos que generan rendimiento constante, estable y seguro. Nosotros operamos. Tú solo recibes."}),o.jsxs("a",{className:"defi-launchapp-btn btn-hov-effect dark",children:["Unirme al club ARKA",o.jsx("img",{src:Fw,alt:"icon"}),o.jsx("span",{className:"round-shape"})]})]}),o.jsx("div",{className:"ecosystem-text",children:o.jsx(O,{delay:300,children:o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(Ht,{title:"1.",subtitle:"Deposita tu capital",alignment:"center",titleMaxW:"px",titleMargin:"auto",parentClass:"defi"})}),o.jsx("li",{children:o.jsx(Ht,{title:"2.",subtitle:"Fideicomiso DeFi",alignment:"center",titleMaxW:"px",titleMargin:"auto",parentClass:"defi"})}),o.jsx("li",{children:o.jsx(Ht,{title:"3.",subtitle:"Asignación automática y transparente",alignment:"center",titleMaxW:"px",titleMargin:"auto",parentClass:"defi"})}),o.jsx("li",{children:o.jsx(Ht,{title:"4.",subtitle:"Genera y acumula recompensas",alignment:"center",titleMaxW:"px",titleMargin:"auto",parentClass:"defi"})}),o.jsx("li",{children:o.jsx(Ht,{title:"5.",subtitle:"Cobra o reinvierte",alignment:"center",titleMaxW:"px",titleMargin:"auto",parentClass:"defi"})})]})})}),o.jsx(O,{delay:300,children:o.jsxs("div",{className:"ecosystem-content",children:[o.jsxs("div",{className:"eco-line",children:[o.jsx("img",{src:Iw,alt:"img",className:"eco-line-pc"}),o.jsx("img",{src:Rw,alt:"img",className:"eco-line-mobile"})]}),o.jsxs("div",{className:"globe-img",children:[o.jsx("img",{src:Mw,alt:"img",className:"globe",ref:n}),o.jsx("img",{src:zw,alt:"img",className:"cloud1"}),o.jsx("img",{src:Bw,alt:"img",className:"cloud2",ref:t}),o.jsx("img",{src:Dw,alt:"img",className:"cloud3",ref:e}),o.jsx("img",{src:Uw,alt:"img",className:"cloud4"})]})]})})]})})},$w=Y.section`
  position: relative;
  z-index: 111;
  margin-top: -115px;
  padding-bottom: 132px;

  .defi-backed-list {
    padding-top: 10px;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      list-style: none;
      padding: 0px;
      margin: 0px;
      gap: 20px;
      li {
        max-width: 218px;
        width: 100%;
        max-height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: ${({theme:e})=>e.colors.whiteColor}0a;
        min-height: 120px;
        padding: 20px 0px;
        border-radius: 20px;
        padding: 30px;
        transition: 0.3s;
        overflow: hidden;
        &::after {
          content: "";
          width: 100%;
          top: 0%;
          position: absolute;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0.075) 49.48%,
            rgba(255, 255, 255, 0.15) 100%
          );
          transition: 0.3s;
          padding: 60px 0px;
          opacity: 0;
        }
        img {
          z-index: 1;
          position: relative;
          opacity: 0.5;
          transition: 0.3s;
        }
        &:hover {
          &::after {
            width: 100%;
            opacity: 1;
          }
          a {
            img {
              animation: imgHovEffect 200ms linear;
              transform: translateY(-111%);
              opacity: 1;
            }
          }
        }
        a {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          min-height: 30px;
          max-height: 30px;
          overflow: hidden;
          img {
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @keyframes imgHovEffect {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(-111%);
    }
  }

  @media screen and (max-width: 1199px) {
    .defi-backed-list {
      ul {
        li {
          min-height: 100px;
          max-height: 100px;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding-bottom: 100px;
  }
  @media screen and (max-width: 767px) {
    margin-top: -160px;
    padding-bottom: 75px;
  }
  @media screen and (max-width: 575px) {
    .defi-backed-list {
      ul {
        column-gap: 4%;
        li {
          width: 48%;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    margin-top: -88px;
    .defi-backed-list {
      ul {
        li {
          min-height: 70px;
          max-height: 70px;
          padding: 10px;
          a {
            min-height: 20px;
            max-height: 20px;
            img {
              width: 80px;
            }
          }
        }
      }
    }
  }
`,Vw=[{id:1,src:Z1,alt:"partners-logo"},{id:2,src:J1,alt:"partners-logo"},{id:3,src:q1,alt:"partners-logo"}],Ww=()=>o.jsx($w,{className:"defi-backed-section",children:o.jsxs("div",{className:"container",children:[o.jsx(O,{delay:200,children:o.jsx(Ht,{title:"Infraestructura Validada y Trayectoria que Respalda",subtitle:"OPERAMOS SOBRE BASES REALES",alignment:"center",parentClass:"defi"})}),o.jsx("div",{className:"defi-backed-content",children:o.jsx(O,{delay:300,children:o.jsx("div",{className:"defi-backed-list",children:o.jsx("ul",{children:Vw.map(e=>o.jsx("li",{children:o.jsxs("a",{href:"#",children:[o.jsx("img",{src:e.src,alt:e.alt}),o.jsx("img",{src:e.src,alt:e.alt})]})},e.id))})})})})]})}),Qw=Y.section`
  padding-bottom: 140px;
  .latest-articles-content {
    padding-bottom: 20px;
  }
  .latest-articles-card {
    background: ${({theme:e})=>e.colors.whiteColor}1a;
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 30px;
    .articles-img {
      img {
        width: 100%;
      }
    }
    .latest-articles-text {
      padding: 30px;
      p {
        text-transform: uppercase;
        color: ${({theme:e})=>e.colors.whiteColor}cc;
        margin-bottom: 0px;
      }
      h4 {
        margin-top: 11px;
        margin-bottom: 42px;
        color: ${({theme:e})=>e.colors.whiteColor};
      }
      .articles-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          color: ${({theme:e})=>e.colors.whiteColor}80;
        }
        a {
          opacity: 0.5;
          transition: 0.3s;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  .defi-explore-article-btn {
    padding: 15px 51px;
    background: ${({theme:e})=>e.colors.whiteColor}1a;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 275px;
    width: 100%;
    margin: auto;
    color: ${({theme:e})=>e.colors.whiteColor};
    position: relative;
    overflow: hidden;
    img {
      margin-left: 14px;
      filter: brightness(100);
      transition: 0.3s;
    }
    &:hover {
      color: ${({theme:e})=>e.colors.whiteColor};
      img {
        transform: rotate(-45deg);
      }
    }
  }

  @media screen and (max-width: 991px) {
    padding-bottom: 100px;
    .latest-articles-card {
      .latest-articles-text {
        padding: 20px;
        h4 {
          font-size: 18px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 80px;
    .latest-articles-card {
      .latest-articles-text {
        padding: 23px;
      }
    }
  }
`,_w=""+new URL("blogg_img1-B392bNb8.png",import.meta.url).href,Gw=""+new URL("blogg_img2-PgMhP1fB.png",import.meta.url).href,Yw=""+new URL("blogg_img3-CFXxyRii.png",import.meta.url).href,Xw=[{id:1,delay:200,imgSrc:_w,category:"DeFi",title:"¿Qué son los liquidity pools y cómo generan ingresos?",date:"Jun 2025",mediumLink:"/blog-details"},{id:2,delay:250,imgSrc:Gw,category:"Finanzas personales",title:"El arte de ganar sin hacer trading",date:"Jun 2025",mediumLink:"/blog-details"},{id:3,delay:300,imgSrc:Yw,category:"Oportunidad ARKA",title:"Cómo funciona ARKA DeFi Reserve en 5 pasos",date:"Jun 2025",mediumLink:"/blog-details"}],Zw=()=>(N.useEffect(()=>{ci(),di({targets:"[data-splitting]"})},[]),o.jsx(Qw,{className:"latest-articles-section",children:o.jsxs("div",{className:"container",children:[o.jsx(O,{delay:200,children:o.jsx(Ht,{title:"Educación Financiera",subtitle:"Aprende a multiplicar tu capital con ARKA",alignment:"center",parentClass:"defi"})}),o.jsx("div",{className:"latest-articles-content",children:o.jsx("div",{className:"row",children:Xw.map(e=>o.jsx("div",{className:"col-md-4 col-sm-6",children:o.jsx(O,{delay:e.delay,children:o.jsxs("div",{className:"latest-articles-card",children:[o.jsx("div",{className:"articles-img",children:o.jsx("img",{src:e.imgSrc,alt:"img"})}),o.jsxs("div",{className:"latest-articles-text",children:[o.jsx("p",{children:e.category}),o.jsx("a",{href:e.mediumLink,children:o.jsx("h4",{"data-splitting":"",children:e.title})}),o.jsxs("div",{className:"articles-footer",children:[o.jsx("p",{children:e.date}),o.jsx("a",{href:e.mediumLink,children:o.jsx("img",{src:"../images/crypto/medium.svg",alt:""})})]})]})]})})},e.id))})}),o.jsx(O,{delay:300,children:o.jsxs("a",{href:"#",className:"defi-explore-article-btn btn-hov-effect",children:["Ver todos los artículos",o.jsx("img",{src:Ym,alt:"icon"}),o.jsx("span",{className:"round-shape"})]})})]})})),Jw=Y.section`
  position: relative;

  .defi-get-updates-top {
    text-align: center;
    max-width: 912px;
    width: 100%;
    margin: auto;
    position: relative;
    z-index: 0;

    a {
      img {
        margin-bottom: 36px;
      }
    }
    .dotted-line {
      position: absolute;
      top: 0px;
      width: 100%;
      left: 0px;
      z-index: -1;
      top: -50px;
    }
  }

  .defi-get-updates-form {
    position: relative;
    z-index: 0;
    background: ${({theme:e})=>e.colors.whiteColor}1a;
    border-radius: 35px;
    max-width: 570px;
    width: 100%;
    padding: 10px;
    margin: auto;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 80%;
      border: none;
      outline: none;
      overflow: hidden;
      background: transparent;
      padding: 5px 20px;
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      color: ${({theme:e})=>e.colors.whiteColor};
      &::placeholder {
        color: ${({theme:e})=>e.colors.whiteColor}80;
      }
    }
    button {
      background: ${({theme:e})=>e.colors.whiteColor}1a;
      border-radius: 35px;
      padding: 11px 38px;
      border: none;
      outline: none;
      overflow: hidden;
      &:hover {
        opacity: 0.5s;
      }
    }
  }

  .defi-get-update-card {
    padding: 40px 30px 33px 30px;
    background: ${({theme:e})=>e.colors.whiteColor}1a;
    border-radius: 20px;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
    h5 {
      color: ${({theme:e})=>e.colors.whiteColor};
      margin-bottom: 18px;
      text-transform: uppercase;
      span {
        margin-right: 18px;
        img {
          max-width: 28px;
        }
      }
    }
    p {
      margin-bottom: 0px;
      color: ${({theme:e})=>e.colors.whiteColor}cc;
    }
  }

  @keyframes scale-up {
    to {
      transform: scale(600);
    }
  }

  @keyframes scale-down {
    from {
      transform: scale(600);
    }
    to {
      ransform: scale(0);
    }
  }

  @media screen and (max-width: 1199px) {
    .defi-get-update-card {
      padding: 20px;
      p {
        font-size: 14px;
      }
    }
  }
`,qw="data:image/svg+xml,%3csvg%20width='72'%20height='40'%20viewBox='0%200%2072%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M54.4373%200.891365C53.4345%200.0891365%2051.83%20-0.311978%2050.6267%200.289694L11.9192%2015.9331C10.3147%2016.5348%209.51249%2018.3398%2010.3147%2019.9443C10.7158%2020.7465%2011.3175%2021.3482%2011.9192%2021.5487L14.3259%2022.5515C15.1281%2022.9526%2016.1309%2022.5515%2016.532%2021.7493C16.9331%2020.9471%2016.532%2019.9443%2015.5292%2019.5432L13.9247%2018.7409L51.83%203.49861C52.0306%203.49861%2052.0306%203.49861%2052.2311%203.49861C52.4317%203.49861%2052.4317%203.69916%2052.4317%203.89972L45.6128%2036.1894C45.6128%2036.39%2045.4122%2036.5905%2045.2117%2036.7911C45.0111%2036.7911%2044.8105%2036.7911%2044.61%2036.5905L30.9721%2026.1616L44.2089%2012.7242C44.8105%2012.1226%2044.8105%2010.9192%2044.2089%2010.3175C43.6072%209.71588%2042.805%209.71588%2042.2033%2010.117L22.7493%2021.5487C21.947%2021.9499%2021.5459%2022.9526%2021.947%2023.7549C22.3481%2024.5571%2023.3509%2024.9582%2024.1532%2024.5571C24.3537%2024.5571%2024.3537%2024.3565%2024.3537%2024.3565L32.5766%2019.5432L28.5654%2023.5543C27.1615%2024.7577%2027.1615%2026.9638%2028.3649%2028.3677C28.5654%2028.5682%2028.766%2028.5682%2028.766%2028.7688L42.2033%2039.1978C43.0055%2039.7994%2043.8078%2040%2044.61%2040C45.0111%2040%2045.6128%2040%2046.0139%2039.7994C47.4178%2039.3983%2048.22%2038.195%2048.6211%2036.7911L55.4401%204.50139C56.0417%203.29805%2055.6406%201.89415%2054.4373%200.891365Z'%20fill='white'/%3e%3c/svg%3e",Kw="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='72'%20height='41'%20viewBox='0%200%2072%2041'%20fill='none'%3e%3cpath%20d='M23.0533%2022.6874C22.8614%2025.95%2025.3564%2028.6369%2028.619%2028.8288C31.8816%2028.6369%2034.3766%2025.7581%2034.1847%2022.4954C34.3766%2019.2328%2031.8816%2016.354%2028.619%2016.1621C25.3564%2016.5459%2022.8614%2019.4247%2023.0533%2022.6874ZM30.1543%2022.6874C30.1543%2024.0308%2029.3867%2025.1823%2028.4271%2025.1823C27.4675%2025.1823%2026.6998%2024.0308%2026.6998%2022.6874C26.6998%2021.3439%2027.6594%2020.1924%2028.619%2020.1924C29.5786%2020.1924%2030.1543%2021.3439%2030.1543%2022.6874Z'%20fill='white'/%3e%3cpath%20d='M41.0956%2016.3535C37.8329%2016.5454%2035.338%2019.4242%2035.5299%2022.6868C35.338%2025.9495%2037.8329%2028.6363%2041.0956%2029.0202C44.3582%2028.8283%2046.8531%2025.9495%2046.6612%2022.6868C46.8531%2019.4242%2044.3582%2016.5454%2041.0956%2016.3535ZM41.0956%2024.9899C40.136%2024.9899%2039.3683%2023.8384%2039.3683%2022.4949C39.3683%2021.1515%2040.136%2020%2041.0956%2020C42.0552%2020%2042.8228%2021.1515%2042.8228%2022.4949C42.8228%2023.8384%2042.0552%2024.9899%2041.0956%2024.9899Z'%20fill='white'/%3e%3cpath%20d='M55.2929%209.44382C55.101%209.2519%2055.101%209.05999%2055.101%209.05999C51.8384%205.02968%2047.2323%202.15089%2042.0505%200.999379C41.0909%200.615541%2039.9394%201.38322%2039.7475%202.34281C39.5556%203.30241%2040.1313%204.45392%2041.0909%204.64584C41.0909%204.64584%2041.0909%204.64584%2041.2828%204.64584C45.505%205.60544%2049.3434%207.90847%2052.0303%2011.1711C54.5252%2017.1206%2056.0606%2023.4539%2056.0606%2029.9792C53.3737%2032.4741%2050.1111%2034.2014%2046.4646%2034.7772V34.0095C46.4646%2034.0095%2046.4646%2034.0095%2046.4646%2033.8176C48.7677%2032.858%2051.0707%2031.7064%2052.9899%2029.9792C53.7576%2029.4034%2053.9495%2028.06%2053.3737%2027.2923C52.798%2026.5246%2051.4545%2026.3327%2050.6869%2026.9085C46.2727%2030.363%2040.7071%2032.0903%2034.9495%2031.8984C29.3838%2032.0903%2023.8182%2030.363%2019.404%2026.9085C18.6364%2026.3327%2017.2929%2026.3327%2016.7172%2027.2923C16.1414%2028.2519%2016.1414%2029.4034%2017.101%2029.9792C19.0202%2031.5145%2021.3232%2032.858%2023.6263%2033.8176V34.7772C19.9798%2034.2014%2016.7172%2032.4741%2014.0303%2029.9792C14.0303%2023.4539%2015.3737%2017.1206%2018.0606%2011.1711C20.5556%207.90847%2024.3939%205.79736%2028.6162%204.83776C29.5758%204.45392%2030.1515%203.49433%2029.9596%202.53473C29.7677%201.38322%2028.8081%200.80746%2027.6566%200.999379C22.4747%202.15089%2017.8687%204.83776%2014.6061%209.05999V9.2519V9.44382C10.7677%2017.1206%2010.3838%2024.0297%2010%2030.7469C10%2031.3226%2010.1919%2031.8984%2010.5758%2032.2822C14.4141%2036.3125%2019.596%2038.6155%2025.1616%2039.1913C25.7374%2039.1913%2026.1212%2038.9994%2026.505%2038.6155C26.8889%2038.2317%2027.0808%2037.8479%2027.0808%2037.2721V35.3529C32.0707%2036.5044%2037.4444%2036.5044%2042.4343%2035.3529V37.2721C42.4343%2037.8479%2042.6263%2038.2317%2043.0101%2038.6155C43.3939%2038.9994%2043.7778%2039.1913%2044.3535%2039.1913C49.9192%2038.8075%2055.2929%2036.5044%2059.1313%2032.4741C59.5151%2032.0903%2059.7071%2031.5145%2059.7071%2030.9388C59.3232%2024.0297%2058.9394%2017.1206%2055.2929%209.44382Z'%20fill='white'/%3e%3cpath%20d='M49.1494%2011.7469C49.7252%2010.7873%2049.3413%209.63579%2048.3817%209.25195C44.1595%207.33276%2039.5534%206.18124%2034.7555%206.37316C30.1494%206.18124%2025.3514%207.33276%2021.1292%209.25195C20.3615%209.63579%2019.9777%2010.7873%2020.3615%2011.7469C20.9373%2012.7065%2022.0888%2012.8984%2023.0484%2012.5146C26.6949%2010.7873%2030.7252%2010.0196%2034.7555%2010.0196C38.7858%2010.0196%2043.008%2010.7873%2046.6544%2012.5146C46.8464%2012.7065%2047.2302%2012.7065%2047.614%2012.7065C48.1898%2012.7065%2048.7656%2012.3227%2049.1494%2011.7469Z'%20fill='white'/%3e%3c/svg%3e",e9=[{id:1,iconSrc:qw,title:"Telegram",description:"SOPORTE ARKA"},{id:2,iconSrc:Kw,title:"Correo Electronico",description:"soporte@arkaltd.io"}],t9="data:image/svg+xml,%3csvg%20width='912'%20height='912'%20viewBox='0%200%20912%20912'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='456'%20cy='636'%20r='157.5'%20stroke='url(%23paint0_linear_3281_1061)'%20stroke-opacity='0.05'%20stroke-dasharray='4%204'/%3e%3ccircle%20cx='456'%20cy='576'%20r='248.5'%20stroke='url(%23paint1_linear_3281_1061)'%20stroke-opacity='0.1'%20stroke-dasharray='4%204'/%3e%3ccircle%20cx='456'%20cy='516'%20r='334.5'%20stroke='url(%23paint2_linear_3281_1061)'%20stroke-opacity='0.15'%20stroke-dasharray='4%204'/%3e%3ccircle%20cx='456'%20cy='456'%20r='455.5'%20stroke='url(%23paint3_linear_3281_1061)'%20stroke-opacity='0.4'%20stroke-dasharray='4%204'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_3281_1061'%20x1='456'%20y1='478'%20x2='456'%20y2='794'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2337EA8E'/%3e%3cstop%20offset='0.760417'%20stop-color='%230D1014'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_3281_1061'%20x1='456'%20y1='327'%20x2='456'%20y2='825'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2337EA8E'/%3e%3cstop%20offset='0.760417'%20stop-color='%230D1014'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_3281_1061'%20x1='456'%20y1='181'%20x2='456'%20y2='851'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2337EA8E'/%3e%3cstop%20offset='0.760417'%20stop-color='%230D1014'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_3281_1061'%20x1='456'%20y1='0'%20x2='456'%20y2='912'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2337EA8E'/%3e%3cstop%20offset='0.760417'%20stop-color='%230D1014'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",n9="data:image/svg+xml,%3csvg%20width='70'%20height='70'%20viewBox='0%200%2070%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='70'%20height='70'%20rx='35'%20fill='url(%23paint0_linear_3442_1424)'/%3e%3cpath%20d='M41.3922%200.562701C40.1402%200.309486%2038.8739%200.11254%2037.5788%200C22.6561%201.74437%2011%2016.7404%2011%2035C11%2053.2596%2022.6561%2068.2556%2037.5788%2070C38.8739%2069.8734%2040.1402%2069.6905%2041.3922%2069.4373C57.7251%2066.1033%2070%2051.9514%2070%2035C70%2018.0486%2057.7251%203.8967%2041.3922%200.562701Z'%20fill='url(%23paint1_linear_3442_1424)'%20fill-opacity='0.7'/%3e%3cpath%20d='M42.1688%200.742432C31.6828%204.04643%2023.8008%2018.1304%2023.8008%2035.0004C23.8008%2051.8704%2031.6828%2065.9544%2042.1688%2069.2584C58.0588%2065.9544%2070.0008%2051.8704%2070.0008%2035.0004C70.0008%2018.1304%2058.0588%204.04643%2042.1688%200.742432Z'%20fill='url(%23paint2_linear_3442_1424)'%20fill-opacity='0.7'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_3442_1424'%20x1='-0.00083845'%20y1='22.5368'%20x2='63.5973'%20y2='36.5256'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.369792'%20stop-color='%2337EA8E'/%3e%3cstop%20offset='1'%20stop-color='%2344C486'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_3442_1424'%20x1='10.9993'%20y1='22.5368'%20x2='65.3295'%20y2='32.6092'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-opacity='0.2'/%3e%3cstop%20offset='1'%20stop-color='%23BDF93F'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_3442_1424'%20x1='23.8002'%20y1='22.8015'%20x2='66.8586'%20y2='29.1877'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23BDF93F'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",r9="data:image/svg+xml,%3csvg%20width='22'%20height='19'%20viewBox='0%200%2022%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%206C1%202.5%203%201%206%201H16C19%201%2021%202.5%2021%206V13C21%2016.5%2019%2018%2016%2018H6'%20stroke='%2337EA8E'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%206.5L12.87%209C11.84%209.82%2010.15%209.82%209.12%209L6%206.5'%20stroke='%2337EA8E'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2014H7'%20stroke='%2337EA8E'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2010H4'%20stroke='%2337EA8E'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",i9=()=>{const e=n=>{const r=n.currentTarget,i=r.querySelector(".round-shape");r.classList.add("animate");let a=n.offsetX,l=n.offsetY;l<105?i.style.top="0px":l>30&&(i.style.top="210px"),i.style.left=a+"px",i.style.width="1px",i.style.height="1px"},t=n=>{const r=n.currentTarget,i=r.querySelector(".round-shape");r.classList.remove("animate");let a=n.offsetX,l=n.offsetY;l<105?i.style.top="0px":l>30&&(i.style.top="210px"),i.style.left=a+"px"};return N.useEffect(()=>{const n=document.querySelectorAll(".btn-hov-effect");return n.forEach(r=>{r.addEventListener("mouseenter",e),r.addEventListener("mouseleave",t)}),()=>{n.forEach(r=>{r.removeEventListener("mouseenter",e),r.removeEventListener("mouseleave",t)})}},[]),o.jsx(Jw,{className:"defi-get-updates-section",id:"get-updates",children:o.jsxs("div",{className:"container",children:[o.jsxs(O,{delay:200,children:[o.jsxs("div",{className:"defi-get-updates-top",children:[o.jsx("img",{src:t9,alt:"img",className:"dotted-line"}),o.jsx("a",{href:"#",className:"mb-5",children:o.jsx("img",{src:n9,alt:"img"})}),o.jsx(Ht,{title:`El mejor momento fue ayer.\r
El segundo mejor es hoy.\r
El peor... es no hacer nada.`,subtitle:"SÉ EL PRIMERO EN ENTERARTE DE NUEVAS OPORTUNIDADES DE RENDIMIENTOS",alignment:"center",titleMaxW:"520px",titleMargin:"auto",parentClass:"defi"})]}),o.jsxs("form",{className:"defi-get-updates-form",children:[o.jsx("input",{type:"text",placeholder:"Tu mejor correo electrónico"}),o.jsx("button",{type:"submit",children:o.jsx("img",{src:r9,alt:"icon"})})]})]}),o.jsx("div",{className:"defi-get-update-content",children:o.jsx("div",{className:"row",children:e9.map((n,r)=>o.jsx("div",{className:"col-lg-3 col-sm-6",children:o.jsx(O,{delay:300,children:o.jsx("a",{href:"#",children:o.jsxs("div",{className:"defi-get-update-card btn-hov-effect",children:[o.jsxs("h5",{className:"dm-sans",children:[o.jsx("span",{children:o.jsx("img",{src:n.iconSrc,alt:"icon"})}),n.title]}),o.jsx("p",{children:n.description}),o.jsx("span",{className:"round-shape"})]})})})},r))})})]})})},o9=""+new URL("footer-blur_bg-B5eRAbGH.png",import.meta.url).href,a9=[{title:"ARKA",links:[{title:"¿Qué es ARKA?",href:"#"},{title:"Cómo funciona",href:"#"},{title:"Club de recompensas",href:"#"},{title:"Plan de referidos",href:"#"},{title:"FAQs",href:"/faq"}]},{title:"Recursos",links:[{title:"Términos de servicio",href:"/terms"},{title:"Política de privacidad",href:"/privacy-policy"},{title:"Aviso legal",href:"#"},{title:"Contacto",href:"/contact-us"}]},{title:"Educación",links:[{title:"Artículos",href:"https://medium.com/arka"},{title:"Academia ARKA",href:"#"},{title:"YouTube",href:"#"}]},{title:"Redes sociales",links:[{title:"Instagram",href:"https://instagram.com/arka"},{title:"Telegram",href:"https://t.me/arka"},{title:"X (Twitter)",href:"https://x.com/arka"}]},{title:"Applications",links:[{label:"Google Play",icon:o.jsx(T7,{}),href:"#"},{label:"Apple Store",icon:o.jsx(O7,{}),href:"#"},{label:"Windows Store",icon:o.jsx(I7,{}),href:"#"}]}],l9=()=>o.jsxs(_m,{className:"defi-footer-section",children:[a9.map((e,t)=>o.jsx("div",{className:"footer-row",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"footer-row-inner",children:[o.jsx("div",{className:"left",children:o.jsx("h5",{className:"dm-sans",children:e.title})}),o.jsx("div",{className:"right",children:o.jsx("ul",{children:e.links.map((n,r)=>o.jsx("li",{children:o.jsxs("a",{href:n.href,children:[n.title&&o.jsx(o.Fragment,{children:n.title}),n.icon&&o.jsx(o.Fragment,{children:n.icon})]})},r))})})]})})},t)),o.jsx("div",{className:"defi-footer-bottom",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"footer-row-inner",children:[o.jsx("div",{className:"left",children:o.jsx("a",{href:"#",children:"© 2025 ARKA DeFi Reserve"})}),o.jsx("div",{className:"right links",children:o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("a",{href:"/terms",children:"Terms of Service"})}),o.jsx("li",{children:o.jsx("a",{href:"/privacy-policy",children:"Privacy policy"})}),o.jsx("li",{children:o.jsx("a",{href:"#",children:"Security"})})]})})]})})}),o.jsx("img",{src:o9,alt:"img",className:"defi-footer-blur"})]}),s9=()=>o.jsx(ft,{pageTitle:"ARKA - Defi Reserve",scrollVariant:"defi",children:o.jsxs("div",{className:"defi-index-bg",children:[o.jsx(rn,{variant:"defi"}),o.jsx(lw,{}),o.jsx(Cw,{}),o.jsx(Ow,{}),o.jsx(Hw,{}),o.jsx(Ww,{}),o.jsx(i9,{}),o.jsx(Zw,{}),o.jsx(l9,{})]})});Y.section`
  padding-top: 283px;
  padding-bottom: 50px;
  text-align: center;
  .v6hero-img {
    position: relative;
    max-width: 1500px;
    padding: 0px 25px;
    margin: auto;
    margin-top: -12%;
    z-index: 0;
  }
  .v7hero-section-text {
    position: relative;
    z-index: 111;
    .banner-text {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 21px;
      margin-bottom: 36px;

      .slick-list {
        padding: 0 !important;
      }

      .slick-track {
        width: 100% !important;
        transform: translate3d(0px, 0px, 0px) !important;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        max-width: 910px;
        width: 100%;
      }

      .slick-slide {
        h2 {
          font-size: 70px;
          font-weight: 700;
          line-height: 80px;
          width: max-content !important;
        }

        &.slick-current {
          .one {
            background: linear-gradient(90deg, #f7578c 2.17%, #00aaff 100%);
            background-clip: text;
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .two {
            background: linear-gradient(90deg, #00aaff 1.92%, #2bd9d9 100%);
            background-clip: text;
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .three {
            background: linear-gradient(90deg, #2bd9d9 0%, #39d393 100%);
            background-clip: text;
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
    p {
      max-width: 569px;
      margin: auto;
      text-align: center;
      font-size: 18px;
      line-height: 36px;
    }
  }
  .v6hero-section-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 58px;
    position: relative;
    z-index: 2;
    .bg-blue-btn {
      height: 60px;
    }
  }

  @media screen and (max-width: 1699px) {
    .v6hero-img {
      margin-top: -18%;
    }
  }
  @media screen and (max-width: 1199px) {
    .v7hero-section-text .banner-text h2 {
      font-size: 55px;
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 160px;
    .v7hero-section-text .banner-text h2 {
      font-size: 56px !important;
      line-height: 150% !important;
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 120px;

    .v6hero-img {
      margin-top: 0px;
    }
    .v7hero-section-text .banner-text h2 {
      font-size: 40px !important;
      line-height: 56px;
      margin-bottom: 0px !important;
    }
    .v7hero-section-text .banner-text {
      margin-bottom: 0;
    }
    .v6hero-section-btns {
      margin-top: 35px;
    }
    .v7hero-section-text {
      p{
        font-size: 14px !important;
        line-height: 150% !important;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .v7hero-section-text .banner-text {
        max-width: 420px;
        margin-bottom: 0;
        margin: auto;
        gap: 10px;
        h2 {
          font-size: 32px !important;
        }
    }
    .v6hero-section-btns {
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 480px) {
    .v7hero-section-text .banner-text .slick-track {
      display: block;
    }
    body .v7hero-section-text .banner-text h2 {
      float: none;
      width: 100%;
      margin: 0;
    }
    .v7hero-section-text .banner-text {
      margin-bottom: 16px;
      h2 {
        font-size: 28px !important;
      }
    }

    .v7hero-section-text .banner-text .slick-track {
      gap: 10px;
    }
  }
  @media screen and (max-width: 420px) {
    .v7hero-section-text .banner-text {
      h2 {
        font-size: 24px !important;
      }
    }
  }
`;function Pr(){return Pr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pr.apply(this,arguments)}function c9(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Z0(e,t)}function Z0(e,t){return Z0=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Z0(e,t)}var Xm=function(e){c9(t,e);function t(){var r;return r=e.call(this)||this,r.state={columns:[],childRefs:[],hasDistributed:!1},r}var n=t.prototype;return n.componentDidUpdate=function(){!this.state.hasDistributed&&!this.props.sequential&&this.distributeChildren()},t.getDerivedStateFromProps=function(i,a){var l=i.children,s=i.columnsCount,c=s!==a.columns.length;return a&&l===a.children&&!c?null:Pr({},t.getEqualCountColumns(l,s),{children:l,hasDistributed:!1})},n.shouldComponentUpdate=function(i){return i.children!==this.state.children||i.columnsCount!==this.props.columnsCount},n.distributeChildren=function(){var i=this,a=this.props,l=a.children,s=a.columnsCount,c=Array(s).fill(0),d=this.state.childRefs.every(function(g){return g.current.getBoundingClientRect().height});if(d){var u=Array.from({length:s},function(){return[]}),p=0;J.Children.forEach(l,function(g){if(g&&J.isValidElement(g)){var v=i.state.childRefs[p].current.getBoundingClientRect().height,y=c.indexOf(Math.min.apply(Math,c));c[y]+=v,u[y].push(g),p++}}),this.setState(function(g){return Pr({},g,{columns:u,hasDistributed:!0})})}},t.getEqualCountColumns=function(i,a){var l=Array.from({length:a},function(){return[]}),s=0,c=[];return J.Children.forEach(i,function(d){if(d&&J.isValidElement(d)){var u=J.createRef();c.push(u),l[s%a].push(J.createElement("div",{style:{display:"flex",justifyContent:"stretch"},key:s,ref:u},d)),s++}}),{columns:l,childRefs:c}},n.renderColumns=function(){var i=this.props,a=i.gutter,l=i.itemTag,s=i.itemStyle;return this.state.columns.map(function(c,d){return J.createElement(l,{key:d,style:Pr({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:a},s)},c.map(function(u){return u}))})},n.render=function(){var i=this.props,a=i.gutter,l=i.className,s=i.style,c=i.containerTag;return J.createElement(c,{style:Pr({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:a},s),className:l},this.renderColumns())},t}(J.Component);Xm.propTypes={};Xm.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{},sequential:!1};Y.section`
  max-width: 100%;
  overflow-x: hidden;
  padding-bottom: 140px;
  .portfolio-section {
    margin-top: 120px;
    margin-bottom: 57px;
    padding: 0px 55px;
    .portfolio-title {
      text-align: center;
      p {
        font-family: ${({theme:e})=>e.fonts.dmSans};
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        color: ${({theme:e})=>e.colors.primary};
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }
      .portfolio-subtitle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        h2 {
          font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
          font-size: 40px;
          font-weight: 700;
          line-height: 60px;
          color: ${({theme:e})=>e.colors.title};
          text-align: right;
        }
        h3 {
          text-align: left;
          font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
          font-size: 36px;
          font-weight: 700;
          line-height: 60px;
          color: ${({theme:e})=>e.colors.iconColor2};
          span {
            font-size: 16px;
            font-weight: 600;
            line-height: 60px;
            color: ${({theme:e})=>e.colors.title};
          }
        }
      }
    }
    .portfolio-gallery {
      margin-top: 42px;
      display: flex;
      align-items: center;
      gap: 20px;
      .portfolio-img {
        flex: 0 0 auto;
        width: 430px;
        height: 300px;
        border-radius: 10px;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    &.newsletter {
      background: ${({theme:e})=>e.colors.whiteColor};
      margin-top: 0px;
      margin-bottom: 0px;
      .portfolio-gallery {
        margin-bottom: 63px;
        .portfolio-img {
          height: auto;
          width: auto;
        }
      }
      .free-demo-btn {
        padding: 12px 20px;
        border: 2px solid rgba(0, 149, 255, 0.3);
        border-radius: 50px;
        color: ${({theme:e})=>e.colors.primary};
        background: transparent;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 230px;
        height: 60px;
        margin: auto;
        span {
          color: ${({theme:e})=>e.colors.primary};
        }
        svg {
          font-size: 24px;
          margin-left: 15px;
        }
      }
    }
  }

  .masonary-grid {
    column-count: 3;
    column-gap: 30px;

    .portfolio-gallery-card {
      width: 100%;
      break-inside: avoid;
    }
  }

  .portfolio-grid-container {
    width: 100%;
    margin: auto;
    &.row {
      margin-left: -15px;
      margin-right: -15px;
      .col-md-4 {
        padding-left: 15px !important;
        padding-right: 15px !important;
      }
    }
  }
  .portfolio-gallery-card {
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    background: transparent;
    min-height: 100px;
    height: auto;
    text-align: center;
    &2 {
      padding-top: 70px;
    }

    .portfolio-img {
      height: 100%;
      width: 100%;
      cursor: pointer;
      img {
        height: 100%;
        width: 100%;
        opacity: 1;
      }
    }

    .portfolio-details {
      position: absolute;
      left: 0px;
      padding: 15px;
      background: transparent;
      width: 100%;
    }
    .portfolio-text-card {
      background: ${({theme:e})=>e.colors.whiteColor};
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 11px 20px;
      gap: 20px;
      text-align: left;
      max-width: 92%;
      width: 100%;
      margin: auto;
      h5 {
        a {
          color: ${({theme:e})=>e.colors.title};
        }
      }
      h6 {
        font-size: 14px;
      }
      .portfolio-text-link {
        transition: 0.5s;
        .icon {
          background: ${({theme:e})=>e.colors.blackColor}1a;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            color: ${({theme:e})=>e.colors.textColor};
          }
        }
      }
      &:hover {
        .portfolio-text-link {
          transform: rotate(-45deg);
        }
      }
    }
    &:hover {
      .portfolio-details {
        bottom: 0px;
        animation-name: slideToTop;
        animation-duration: 0.6s;
      }
    }
  }

  @keyframes slideToTop {
    0% {
      bottom: -120px;
    }

    100% {
      bottom: 0px;
    }
  }

  .lb-outerContainer {
    height: 100vh !important;
    position: fixed !important;
    left: 0px !important;
    top: 0px !important;
    width: 100% !important;
    border-radius: 0px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lightbox .lb-image {
    border: none;
    border-radius: 0px;
  }
  .lb-nav {
    a {
      &.lb-next {
        opacity: 1;
        right: 30px;
        width: 20%;
        margin-right: 30px;
      }
      &.lb-prev {
        opacity: 1;
        left: 30px;
        width: 20%;
        margin-left: 30px;
      }
    }
  }

  .lb-data .lb-close {
    position: fixed;
    top: 30px;
    right: 30px;
  }

  @media screen and (max-width: 1199px) {
    padding-bottom: 80px;
    .portfolio-section .portfolio-title .portfolio-subtitle h2 {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 991px) {
    .portfolio-section {
      .portfolio-title {
        .portfolio-subtitle {
          h2,
          h3 {
            font-size: 27px;
            line-height: 45px;

            span {
              line-height: 45px;
            }
          }
        }
      }
    }
    .portfolio-section {
      &.newsletter {
        .portfolio-gallery {
          .portfolio-img {
            width: 220px;
            height: 290px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .portfolio-section {
      &.newsletter {
        .portfolio-gallery {
          .portfolio-img {
            width: 180px;
            height: 260px;
          }
        }
      }
    }
    .portfolio-grid-container {
      -webkit-column-count: 2;
      column-count: 2;
    }

    .masonary-grid{
      column-gap: 20px;
      .portfolio-gallery-card{
        margin-bottom: 20px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .portfolio-section .portfolio-title .portfolio-subtitle h2,
    .portfolio-section .portfolio-title .portfolio-subtitle h3 {
      font-size: 20px;
      line-height: 37px;

      span {
        line-height: 37px;
      }
    }
    .masonary-grid{
      column-gap: 15px;
      .portfolio-gallery-card{
        margin-bottom: 15px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .portfolio-section .portfolio-title .portfolio-subtitle h2,
    .portfolio-section .portfolio-title .portfolio-subtitle h3 {
      font-size: 18px;
      line-height: 30px;

      span {
        font-size: 13px;
        line-height: 30px;
      }
    }
    .portfolio-grid-container.row {
      margin: 0px !important;
    }
    .portfolio-grid-container {
      -webkit-column-count: 1;
      column-count: 1;
    }
    .masonary-grid{
      column-gap: 10px;
      .portfolio-gallery-card{
        margin-bottom: 10px;
      }
    }
    .load-more-btn{
      margin-top: 30px;
    }
  }
`;var Zm={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Un,function(){/**
 * VenoBox 2.1.8
 * Copyright 2013-2024 Nicola Franchini
 * @license: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 */let n,r,i,a,l,s,c,d,u,p,g,v,y,b,C,m,h,f,x,j,S,k,w,A,P,R,M,L,G,te,q,le,T,U,H,K,Z,I;const B='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">',$="</svg>",Q=B+'<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>'+$,_=B+'<path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/><path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>'+$,se=B+'<path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>'+$;let ce=0,fe=0,me=0,Ie=50,jt=!1,ar=!1,on=!1,Mt,pi=!1;const pg={bounce:["sk-bounce","sk-bounce-dot",2],chase:["sk-chase","sk-chase-dot",6],circle:["sk-circle","sk-circle-dot",12],"circle-fade":["sk-circle-fade","sk-circle-fade-dot",12],flow:["sk-flow","sk-flow-dot",3],fold:["sk-fold","sk-fold-cube",4],grid:["sk-grid","sk-grid-cube",9],plane:["sk-plane","",0],pulse:["sk-pulse","",5],swing:["sk-swing","sk-swing-dot",2],wander:["sk-wander","sk-wander-cube",3],wave:["sk-wave","sk-wave-rect",5]},fg={selector:".venobox",autoplay:!1,bgcolor:"#fff",border:"0",customClass:!1,infinigall:!1,maxWidth:"100%",navigation:!0,navKeyboard:!0,navTouch:!0,navSpeed:300,numeration:!1,overlayClose:!0,overlayColor:"rgba(23,23,23,0.95)",popup:!1,ratio:"16x9",share:!1,shareStyle:"pill",spinner:"bounce",spinColor:"#d2d2d2",titleattr:"title",titlePosition:"top",titleStyle:"bar",toolsBackground:"#1C1C1C",toolsColor:"#d2d2d2",onPreOpen:function(){return!0},onPostOpen:function(){},onPreClose:function(){return!0},onNavComplete:function(){},onContentLoaded:function(){},onInit:function(){},jQuerySelectors:!1,focusItem:!1,fitView:!1,initialScale:.9,transitionSpeed:200};function hg(E){if(!E)return"Loading...";let D='<div class="sk-center '+E[0]+'">',V=0;for(V=0;V<E[2];V++)D+='<div class="'+E[1]+'"></div>';return D+="</div>",D}function fi(E,D,V){if(Object.prototype.toString.call(E)==="[object Object]"){let ee;for(ee in E)Object.prototype.hasOwnProperty.call(E,ee)&&D.call(V,E[ee],ee,E)}else{let ee=0,he=E.length;for(ee=0;ee<he;ee++)D.call(V,E[ee],ee,E)}}function mg(E,D){let V={};return fi(E,function(ee,he){V[he]=E[he]}),fi(D,function(ee,he){V[he]=D[he]}),V}function Oo(E){return E}function To({timing:E,draw:D,duration:V}){let ee=performance.now();requestAnimationFrame(function he(Je){let qe=(Je-ee)/V;qe>1&&(qe=1);let ht=E(qe);D(ht),qe<1&&requestAnimationFrame(he)})}function gg(E){let D,V,ee,he=/(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;if(V=E.match(he),V&&V[7])D="youtube",ee=V[7];else{let Je=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;V=E.match(Je),V&&V[5]&&(D="vimeo",ee=V[5])}return{type:D,id:ee}}function xg(E){let D="",ee=decodeURIComponent(E).split("?");if(ee[1]!==void 0){let he=ee[1].split("&"),Je,qe;for(qe=0;qe<he.length;qe++)Je=he[qe].split("="),D=D+"&"+Je[0]+"="+Je[1]}return encodeURI(D)}function vg(E){return ar.innerHTML=E,ar.querySelectorAll("img")}function v2(E){if(!E)return!1;x=!0,d=E,k=!1,w=!1,P=E.getAttribute("data-maxwidth")||E.settings.maxWidth,R=E.getAttribute("data-overlay")||E.settings.overlayColor,M=E.getAttribute("data-ratio")||E.settings.ratio,L=E.hasAttribute("data-autoplay")||E.settings.autoplay,G=E.getAttribute("data-href")||E.getAttribute("href"),te=E.getAttribute("data-customclass")||E.settings.customClass,Z=E.getAttribute(E.settings.titleattr)||"",H=E.getAttribute("data-border")||E.settings.border,q=E.hasAttribute("data-fitview")||E.settings.fitView}function os(){if(!d||!document.body.classList.contains("vbox-open")||d.settings.onPreClose&&typeof d.settings.onPreClose=="function"&&d.settings.onPreClose(d,C,T,U)===!1)return!1;document.body.removeEventListener("keydown",y2),document.body.classList.remove("vbox-open"),d.settings.focusItem&&d.focus(),To({duration:200,timing:Oo,draw:function(E){A.style.opacity=1-E,E===1&&A.remove()}})}function yg(){Mn(T)}function bg(){Mn(U)}function y2(E){E.keyCode===27&&os(),I||(E.keyCode==37&&w===!0&&Mn(U),E.keyCode==39&&k===!0&&Mn(T),I=setTimeout(()=>{I=null},100))}function wg(){x=!1,c.style.opacity=0,c.innerHTML=j,Pg();let E=c.querySelector(":first-child");E.classList.add("vbox-child"),E.style.backgroundColor=d.settings.bgcolor,E.style.transform="scale("+d.settings.initialScale+")",E.style.transition="transform "+d.settings.transitionSpeed+"ms";let D=c.querySelector(".vbox-child img");D&&D.addEventListener("dragstart",function(V){V.preventDefault()}),s.scrollTo(0,0),E.style.transform="scale(1)",A.style.setProperty("--vbox-padding",H),A.style.setProperty("--vbox-max-width",P),fi(A.classList,function(V){V!=="vbox-overlay"&&A.classList.remove(V)}),te&&A.classList.add(te),q?c.classList.add("vbox-fit"):c.classList.remove("vbox-fit"),To({duration:d.settings.transitionSpeed,timing:Oo,draw:function(V){c.style.opacity=V,V===1&&y.classList.add("vbox-hidden")}}),d.settings.onContentLoaded&&typeof d.settings.onContentLoaded=="function"&&d.settings.onContentLoaded(j)}function zt(E){c.classList.contains("vbox-"+E)||wg()}function Cg(E,D){c.classList.add("vbox-loading"),j='<div class="venoratio venoratio-'+D+'"><iframe src="'+E+'"></iframe></div>',c.classList.remove("vbox-loading"),zt("animated")}function kg(E,D,V){c.classList.add("vbox-loading");let ee,he=gg(E);if(he.type=="vimeo"||he.type=="youtube"){let Je;ee=V?"?rel=0&autoplay=1":"?rel=0";let qe=ee+xg(E);he.type=="vimeo"?Je="https://player.vimeo.com/video/":he.type=="youtube"&&(Je="https://www.youtube-nocookie.com/embed/"),j='<div class="venoratio venoratio-'+D+'"><iframe webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay" frameborder="0" src="'+Je+he.id+qe+'"></iframe></div>'}else ee=V?" autoplay":"",j='<div class="venoratio venoratio-'+D+'"><video src="'+E+'"'+ee+" controls>Your browser does not support the video tag.</video></div>";c.classList.remove("vbox-loading"),zt("animated")}function jg(E){let D=document.querySelector(E);D&&(c.classList.add("vbox-loading"),j='<div class="vbox-inline">'+D.innerHTML+"</div>",c.classList.remove("vbox-loading"),zt("animated"))}function Ag(){if(m=vg(j),m.length){let E=0;fi(m,function(D){let V=D.src;const ee=new Image;ee.onload=function(){E++,E==m.length&&(c.classList.remove("vbox-loading"),zt("animated"))},ee.onerror=function(){E++,E==m.length&&(c.classList.remove("vbox-loading"),zt("animated"))},ee.src=V})}else c.classList.remove("vbox-loading"),zt("animated")}function Sg(E){c.classList.add("vbox-loading");let D=new XMLHttpRequest;D.open("GET",E,!0),D.onload=function(){j='<div class="vbox-inline">'+D.response+"</div>",Ag()},D.onerror=function(){j='<div class="vbox-inline"></div>',c.classList.remove("vbox-loading"),zt("animated")},D.send()}function Ng(E){on.onload=function(){j='<div class="vbox-child"><img src="'+E+'"></div>',c.classList.remove("vbox-loading"),zt("animated")},on.src=E}function Io(E){if(!x){let D=d.settings.navSpeed*.84;c.style.transition="margin "+D+"ms ease-out, opacity "+D+"ms ease-out",ce=fe=E.type==="touchstart"?E.touches[0].pageX:E.pageX,le=v=E.type==="touchstart"?E.touches[0].pageY:E.pageY,jt=!0}}function lr(E){if(jt){jt=!1;let D=d,V=!1;me=fe-ce,me<0&&k&&(D=T,V=!0),me>0&&w&&(D=U,V=!0),Math.abs(me)>=Ie&&V?Mn(D):(c.style.marginLeft=0,c.style.opacity=1)}}function Ro(E){if(jt&&!x){fe=E.type==="touchmove"?E.touches[0].pageX:E.pageX,v=E.type==="touchmove"?E.touches[0].pageY:E.pageY,p=fe-ce,g=v-le;let D=Math.abs(p),V=Math.abs(g);if(D>V&&D<=180){let ee=(1-D/180)*1.5;E.preventDefault(),c.style.marginLeft=p+"px",c.style.opacity=ee}}}function Eg(E){if(navigator.canShare){const V={url:E};i.insertAdjacentHTML("beforeend",'<div class="vbox-link-btn vbox-share-mobile">'+_+"</div>"),i.querySelector(".vbox-share-mobile").addEventListener("click",function(he){he.preventDefault(),navigator.share(V)})}i.insertAdjacentHTML("beforeend",'<a target="_blank" href="'+E+'" download>'+Q+"</a>"),i.insertAdjacentHTML("beforeend",'<div class="vbox-tooltip"><div class="vbox-link-btn vbox-share-copy"><span class="vbox-tooltip-text" id="myTooltip"></span>'+se+"</div ></div>"),i.querySelector(".vbox-share-copy").addEventListener("click",function(V){V.preventDefault();let ee=document.getElementById("myTooltip");navigator.clipboard.writeText(E).then(function(){ee.innerHTML='<div class="vbox-tooltip-inner">Copied</div>'},function(){console.log("copy failed")})})}function Pg(){pi?(c.classList.add("vbox-grab"),c.addEventListener("touchstart",Io,!1),c.addEventListener("touchend",lr,!1),c.addEventListener("touchmove",Ro,!1),c.addEventListener("mousedown",Io,!1),c.addEventListener("mouseup",lr,!1),c.addEventListener("mouseout",lr,!1),c.addEventListener("mousemove",Ro,!1)):(c.classList.remove("vbox-grab"),c.removeEventListener("touchstart",Io,!1),c.removeEventListener("touchend",lr,!1),c.removeEventListener("touchmove",Ro,!1),c.removeEventListener("mousedown",Io,!1),c.removeEventListener("mouseup",lr,!1),c.removeEventListener("mouseout",lr,!1),c.removeEventListener("mousemove",Ro,!1))}function b2(E){if(!E)return!1;K=E.dataset.gall,S=E.settings.numeration,h=E.settings.infinigall,i.innerHTML="";let D=E.dataset.vbtype;E.settings.share&&D!=="iframe"&&D!=="inline"&&D!=="ajax"&&Eg(E.href),f=document.querySelectorAll('.vbox-item[data-gall="'+K+'"]'),u=Array.prototype.indexOf.call(f,E),f.length<2&&(S=!1),f.length<3&&(h=!1),T=f[u+1],U=f[u-1],!T&&h&&(T=f[0]),!U&&h&&(U=f[f.length-1]),f.length>=1?(C=u+1,r.innerHTML=C+" / "+f.length):C=1,S?r.classList.remove("vbox-hidden"):r.classList.add("vbox-hidden"),Z!==""?a.classList.remove("vbox-hidden"):a.classList.add("vbox-hidden"),a.innerHTML=Z,w=!1,k=!1,(T||h)&&(k=!0),(u>0||h)&&(w=!0),pi=(w||k)&&E.settings.navTouch;let V=A.querySelector(".vbox-next"),ee=A.querySelector(".vbox-prev");w?ee.classList.remove("vbox-hidden"):ee.classList.add("vbox-hidden"),k?V.classList.remove("vbox-hidden"):V.classList.add("vbox-hidden"),E.settings.navigation||(V.classList.add("vbox-hidden"),ee.classList.add("vbox-hidden"))}function w2(E){if(!E)return!1;n.style.backgroundColor=R,b.innerHTML=hg(pg[E.settings.spinner]),A.style.setProperty("--sk-color",E.settings.spinColor),y.classList.remove("vbox-hidden"),i.classList.remove("vbox-top","vbox-bottom"),a.classList.remove("vbox-top","vbox-bottom"),E.settings.titlePosition=="top"?(a.classList.add("vbox-top"),i.classList.add("vbox-bottom")):(a.classList.add("vbox-bottom"),i.classList.add("vbox-top"));let D=E.settings.titleStyle==="bar"?"100%":"auto",V=E.settings.titleStyle==="pill"?"5em":"0",ee=E.settings.shareStyle==="bar"?"100%":"auto",he=E.settings.shareStyle==="pill"?"5em":"0",Je=E.settings.titleStyle==="transparent"?"transparent":E.settings.toolsBackground,qe=E.settings.shareStyle==="transparent"?"transparent":E.settings.toolsBackground;A.style.setProperty("--vbox-title-width",D),A.style.setProperty("--vbox-title-radius",V),A.style.setProperty("--vbox-share-width",ee),A.style.setProperty("--vbox-share-radius",he),A.style.setProperty("--vbox-tools-color",E.settings.toolsColor),A.style.setProperty("--vbox-title-background",Je),A.style.setProperty("--vbox-share-background",qe)}function C2(){if(!d)return!1;switch(d.dataset.vbtype){case"iframe":Cg(G,M);break;case"inline":jg(G);break;case"ajax":Sg(G);break;case"video":kg(G,M,L);break;default:Ng(G)}}function Mn(E){if(!E||x||!document.body.classList.contains("vbox-open"))return!1;v2(E),w2(E);const D=d.settings.navSpeed*.84;c.style.transition="margin "+D+"ms ease-out, opacity "+D+"ms ease-out",E===U&&c.classList.add("swipe-right"),E===T&&c.classList.add("swipe-left"),y.classList.remove("vbox-hidden");const V=c.style.opacity;c.classList.add("vbox-animated","vbox-loading"),Mt=c.cloneNode(!1),Mt.classList.add("cloned"),Mt.classList.remove("swipe-left","swipe-right"),Mt.style.opacity=0,Mt.style.marginLeft="0",Mt.style.marginRight="0";const ee=c;s.append(Mt),c=Mt,c.classList.remove("cloned"),b2(E),To({duration:d.settings.navSpeed,timing:Oo,draw:function(he){ee.style.opacity=V-he/V,he===1&&(ee.remove(),c.classList.remove("vbox-animated"),zt("loading"),x=!1,d.settings.onNavComplete&&typeof d.settings.onNavComplete=="function"&&d.settings.onNavComplete(d,C,T,U))}}),C2()}function as(E){if(document.body.classList.contains("vbox-open")||!E||E.settings.onPreOpen&&typeof E.settings.onPreOpen=="function"&&E.settings.onPreOpen(E)===!1)return!1;v2(E),document.body.insertAdjacentHTML("beforeend",l),document.body.classList.add("vbox-open"),A=document.querySelector(".vbox-overlay"),n=A.querySelector(".vbox-backdrop"),s=A.querySelector(".vbox-container"),c=s.querySelector(".vbox-content"),r=A.querySelector(".vbox-num"),i=A.querySelector(".vbox-share"),a=A.querySelector(".vbox-title"),y=A.querySelector(".vbox-preloader"),b=y.querySelector(".vbox-preloader-inner"),A.style.opacity=0,w2(E),b2(E),c.classList.add("vbox-animated","vbox-loading"),To({duration:200,timing:Oo,draw:function(D){A.style.opacity=D,D===1&&(c.classList.remove("vbox-animated"),x=!1,zt("loading"),d.settings.onPostOpen&&typeof d.settings.onPostOpen=="function"&&d.settings.onPostOpen(d,C,T,U))}}),C2(),E.settings.navKeyboard&&(document.body.addEventListener("keydown",y2),document.body.addEventListener("keyup",()=>{I&&(clearTimeout(I),I=null)})),document.querySelector(".vbox-prev").addEventListener("click",function(){Mn(U)}),document.querySelector(".vbox-next").addEventListener("click",function(){Mn(T)}),A.addEventListener("click",function(D){let V=document.querySelector(".vbox-close");V&&(V.contains(D.target)||V===D.target||d.settings.overlayClose&&(D.target.classList.contains("vbox-overlay")||D.target.classList.contains("vbox-content")||D.target.classList.contains("vbox-backdrop")||D.target.classList.contains("vbox-close")||D.target.classList.contains("vbox-preloader")||D.target.classList.contains("vbox-container")))&&os()})}function Lg(E,D){D.onInit&&typeof D.onInit=="function"&&D.onInit(E);let V=D.jQuerySelectors||document.querySelectorAll(D.selector);if(l='<div class="vbox-overlay"><div class="vbox-backdrop"></div>'+'<div class="vbox-preloader"><div class="vbox-preloader-inner"></div></div>'+'<div class="vbox-container"><div class="vbox-content"></div></div>'+'<div class="vbox-title"></div><div class="vbox-left-corner"><div class="vbox-num">0/0</div></div><div class="vbox-close"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="vbox-close-icon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/></svg></div>'+'<a class="vbox-next"><span>Next</span></a><a class="vbox-prev"><span>Prev</span></a>'+'<div class="vbox-share"></div>'+"</div>",ar=ar||document.createElement("div"),on=on||new Image,fi(V,function(ht){if(ht instanceof Element){if(ht.classList.contains("vbox-item"))return!0;ht.settings=D,ht.classList.add("vbox-item"),ht.addEventListener("click",function(Og){return Og.preventDefault(),ht.blur(),as(ht),!1})}}),D.popup){let ht=document.querySelector(D.popup);ht.settings=D,as(ht)}}const k2=function(E){const D={};let V=mg(fg,E||{});return D.close=os,D.next=yg,D.prev=bg,D.open=as,D.settings=V,Lg(D,V),D};return typeof jQuery=="function"&&function(E){E.fn.extend({venobox:function(D){const V=D||{};V.jQuerySelectors=this,new k2(V)}})}(jQuery),k2})})(Zm);var d9=Zm.exports;const u9=En(d9),u2=Y.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100%;
  height: 100vh;
  background: ${({theme:e})=>e.colors.whiteColor};
  overflow: hidden;

  .auth-form-section {
    background: ${({theme:e})=>e.colors.whiteColor};
    position: relative;
    max-width: 620px;
    width: 100%;
    overflow: hidden;
    padding: 25px 75px;
    min-height: 100%;
    height: 100vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .form-group {
      position: relative;
    }
    span.error {
      color: #ff0000 !important;
      position: absolute;
      right: 20px !important;
      top: 50px !important;
      font-size: 13px !important;
      left: auto !important;
      text-transform: none !important;
      min-width: max-content;
    }
    input.error {
      border-color: rgba(255, 0, 0, 0.5) !important;
    }
    input.error:focus {
      background: transparent !important;
      border: 1px solid rgba(255, 0, 0, 0.5) !important;
    }
    .progress {
      margin-top: -10px;
      height: 5px;
    }
    .suggestion {
      font-size: 13px !important;
      margin-top: 10px !important;
      margin-bottom: 15px;
    }
    &::after {
      content: "";
      height: 700px;
      width: 700px;
      background: linear-gradient(
        180deg,
        rgba(65, 152, 254, 0.1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      border-radius: 50%;
      left: -206px;
      top: 140px;
      position: absolute;
    }
    form {
      position: relative;
      z-index: 1;
    }
    h4 {
      margin-bottom: 35px;
    }
    label {
      text-transform: uppercase;
      color: ${({theme:e})=>e.colors.title};
      margin-bottom: 5px;
    }
    input {
      background: ${({theme:e})=>e.colors.whiteColor};
      border: 1px solid ${({theme:e})=>e.colors.blackColor}1f;
      border-radius: 10px;
      width: 100%;
      padding: 15px;
      margin-bottom: 21px;
      font-weight: 500;
      font-size: 15px;
      line-height: 200%;
      color: ${({theme:e})=>e.colors.title};
      &::placeholder {
        color: ${({theme:e})=>e.colors.iconColor};
      }
    }

    .form-primary-btn {
      background: ${({theme:e})=>e.colors.primary};
      border-radius: 10px;
      padding: 17px;
      width: 100%;
      font-weight: 700;
      line-height: 26px;
      color: ${({theme:e})=>e.colors.whiteColor};
    }

    .secondary-btn {
      background: ${({theme:e})=>e.colors.whiteColor};
      border: 1px solid ${({theme:e})=>e.colors.blackColor}1f;
      border-radius: 10px;
      padding: 17px;
      width: 100%;
      font-weight: 700;
      line-height: 26px;
      color: ${({theme:e})=>e.colors.title};
      margin-bottom: 20px;
      transition: 0.3s;
      img {
        margin-right: 13px;
      }
      &:hover {
        box-shadow: 0px 5px 8px ${({theme:e})=>e.colors.blackColor}14;
      }
    }

    .or-section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 26px;
      margin: 10px 0px;
      p {
        text-transform: uppercase;
      }
      &::after {
        content: "";
        height: 1px;
        background: ${({theme:e})=>e.colors.blackColor}1f;
        max-width: 70%;
        width: 100%;
      }
      &::before {
        content: "";
        height: 1px;
        background: ${({theme:e})=>e.colors.blackColor}1f;
        max-width: 70%;
        width: 100%;
      }
    }

    .auth-link {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      text-decoration: underline !important;
      color: ${({theme:e})=>e.colors.title};
      margin-bottom: 16px;
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: ${({theme:e})=>e.colors.textColor};
      margin-bottom: 47px;

      a {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        text-decoration: underline !important;
        color: ${({theme:e})=>e.colors.title};
        margin-bottom: 0px;
      }
    }
  }

  .auth-page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 125px;
    .back-link {
      font-weight: 700;
      font-size: 15px;
      line-height: 200%;
      text-align: right;
      color: ${({theme:e})=>e.colors.iconColor};
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        font-size: 24px;
        margin-right: 10px;
        color: ${({theme:e})=>e.colors.iconColor};
        path {
          font-size: 24px;
          margin-right: 10px;
          color: ${({theme:e})=>e.colors.iconColor};
        }
      }
    }
  }

  .auth-right-section {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    video {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .auth-brand-slider-section {
    position: absolute;
    padding: 54px 75px;
    z-index: 1;
    margin-top: auto;
    left: 0px;
    bottom: 0px;
    .auth-brand-slider-inner {
      max-width: 850px;
      width: 100%;
      margin-right: auto;
      overflow: hidden;
    }
    h5 {
      color: ${({theme:e})=>e.colors.whiteColor};
      margin-bottom: 29px;
      line-height: 50px;
      font-weight: 700;
    }
  }

  .auth-brand-slider {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      list-style: none;
      padding: 0px;
      flex-wrap: wrap;
      row-gap: 20px;
      li {
        margin-right: 50px;
        min-width: max-content;
        filter: brightness(100);
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .auth-page-header {
      margin-bottom: 80px;
    }
    .auth-form-section {
      max-width: 400px;
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  @media screen and (max-width: 991px) {
    .auth-brand-slider-section {
      padding: 40px 20px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    .auth-form-section {
      max-width: 100%;
      padding-left: 50px;
      padding-right: 50px;
    }
    .auth-page-header {
      margin-bottom: 50px;
    }
    .auth-right-section {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    .auth-form-section {
      padding: 20px 25px;
    }
  }
`,p9=""+new URL("auth1--v0GGPNL.svg",import.meta.url).href,f9="data:image/svg+xml,%3csvg%20width='82'%20height='22'%20viewBox='0%200%2082%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3740_2815)'%3e%3cpath%20d='M15.6493%209.405H8.822C8.646%209.405%208.503%209.548%208.503%209.724V13.0607C8.503%2013.2367%208.646%2013.3797%208.822%2013.3797H11.484V17.5267C11.484%2017.5267%2010.8863%2017.732%209.23267%2017.732C7.282%2017.732%204.55767%2017.0207%204.55767%2011.0257C4.55767%205.03067%207.39567%204.24233%2010.0577%204.24233C12.364%204.24233%2013.3577%204.64933%2013.9883%204.84367C14.1863%204.906%2014.3697%204.708%2014.3697%204.532L15.1323%201.30533C15.1323%201.22467%2015.103%201.122%2015.0113%201.056C14.7547%200.876333%2013.189%200%209.23267%200C4.675%200%200%201.93967%200%2011.2603C0%2020.581%205.35333%2021.9707%209.86333%2021.9707C13.5997%2021.9707%2015.862%2020.3757%2015.862%2020.3757C15.9537%2020.3243%2015.9647%2020.1923%2015.9647%2020.1337V9.724C15.9683%209.548%2015.8253%209.405%2015.6493%209.405ZM50.8163%201.166C50.8163%200.99%2050.677%200.843333%2050.501%200.843333H46.6583C46.4823%200.843333%2046.3393%200.986333%2046.3393%201.166V8.59467H40.348V1.166C40.348%200.99%2040.205%200.843333%2040.029%200.843333H36.1827C36.0067%200.843333%2035.8637%200.986333%2035.8637%201.166V21.2813C35.8637%2021.4573%2036.0067%2021.604%2036.1827%2021.604H40.0253C40.2013%2021.604%2040.3443%2021.461%2040.3443%2021.2813V12.6793H46.3357C46.3357%2012.6793%2046.3247%2021.2813%2046.3247%2021.285C46.3247%2021.461%2046.4677%2021.6077%2046.6437%2021.6077H50.4973C50.6733%2021.6077%2050.8127%2021.4647%2050.8163%2021.285V1.166ZM22.891%203.85733C22.891%202.47133%2021.78%201.353%2020.4123%201.353C19.0447%201.353%2017.9337%202.47133%2017.9337%203.85733C17.9337%205.23967%2019.0447%206.36167%2020.4123%206.36167C21.78%206.36167%2022.891%205.23967%2022.891%203.85733ZM22.5867%2017.05V7.766C22.5867%207.59%2022.4437%207.447%2022.2677%207.447H18.436C18.26%207.447%2018.1023%207.62667%2018.1023%207.80633V21.109C18.1023%2021.5013%2018.3443%2021.615%2018.6597%2021.615H22.1137C22.4913%2021.615%2022.5867%2021.428%2022.5867%2021.1017V17.05ZM65.5087%207.44333H61.6953C61.5193%207.44333%2061.3763%207.58633%2061.3763%207.766V17.6293C61.3763%2017.6293%2060.4083%2018.337%2059.0333%2018.337C57.6583%2018.337%2057.2917%2017.7137%2057.2917%2016.3643V7.766C57.2917%207.59%2057.1487%207.44333%2056.9727%207.44333H53.1007C52.9247%207.44333%2052.7817%207.58633%2052.7817%207.766V17.017C52.7817%2021.0173%2055.011%2021.9963%2058.08%2021.9963C60.5953%2021.9963%2062.6267%2020.6067%2062.6267%2020.6067C62.6267%2020.6067%2062.722%2021.34%2062.766%2021.4243C62.81%2021.5123%2062.9237%2021.5967%2063.0483%2021.5967L65.5123%2021.5857C65.6883%2021.5857%2065.8313%2021.4427%2065.8313%2021.263V7.75867C65.824%207.58633%2065.6847%207.44333%2065.5087%207.44333ZM74.2977%2018.3443C72.974%2018.304%2072.0757%2017.7027%2072.0757%2017.7027V11.3337C72.0757%2011.3337%2072.9593%2010.791%2074.0483%2010.6957C75.4233%2010.571%2076.747%2010.989%2076.747%2014.2633C76.7433%2017.721%2076.1493%2018.403%2074.2977%2018.3443ZM75.801%207.01067C73.634%207.01067%2072.16%207.97867%2072.16%207.97867V1.166C72.16%200.99%2072.017%200.843333%2071.841%200.843333H67.9873C67.8113%200.843333%2067.6683%200.986333%2067.6683%201.166V21.2813C67.6683%2021.4573%2067.8113%2021.604%2067.9873%2021.604H70.6603C70.7813%2021.604%2070.873%2021.5417%2070.939%2021.4317C71.005%2021.3253%2071.1003%2020.504%2071.1003%2020.504C71.1003%2020.504%2072.677%2021.9963%2075.6617%2021.9963C79.1633%2021.9963%2081.1727%2020.218%2081.1727%2014.0177C81.1727%207.81733%2077.968%207.01067%2075.801%207.01067ZM33.649%207.41033H30.767L30.7633%203.60067C30.7633%203.45767%2030.69%203.38433%2030.5213%203.38433H26.5907C26.4367%203.38433%2026.356%203.45033%2026.356%203.597V7.535C26.356%207.535%2024.387%208.01167%2024.255%208.04833C24.123%208.085%2024.024%208.20967%2024.024%208.35633V10.8313C24.024%2011.011%2024.167%2011.154%2024.343%2011.154H26.356V17.105C26.356%2021.527%2029.458%2021.9597%2031.548%2021.9597C32.505%2021.9597%2033.649%2021.6517%2033.836%2021.582C33.9497%2021.5417%2034.0157%2021.4207%2034.0157%2021.2923L34.0193%2018.5717C34.0193%2018.3957%2033.869%2018.249%2033.7003%2018.249C33.5317%2018.249%2033.1027%2018.3187%2032.659%2018.3187C31.2437%2018.3187%2030.7633%2017.6587%2030.7633%2016.808C30.7633%2015.9573%2030.7633%2011.154%2030.7633%2011.154H33.6453C33.8213%2011.154%2033.9643%2011.011%2033.9643%2010.8313V7.733C33.968%207.55333%2033.825%207.41033%2033.649%207.41033Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3740_2815'%3e%3crect%20width='81.18'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",h9=""+new URL("auth3-B4pi56zB.svg",import.meta.url).href,m9="data:image/svg+xml,%3csvg%20width='117'%20height='22'%20viewBox='0%200%20117%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3740_2829)'%3e%3cpath%20d='M14.887%202.21833C16.4674%203.102%2018.968%2012.716%2016.273%2017.545C13.9447%2021.7287%208.66103%2023.232%204.48103%2020.9037C0.297358%2018.5753%20-1.26831%2013.2623%201.12602%209.11167C1.61002%208.27567%202.33602%207.502%202.50836%207.326C2.59636%207.238%203.08036%207.54233%202.93002%207.788C2.13802%2010.56%202.51202%2012.4777%203.46536%2014.3C3.53502%2014.3403%203.87969%2014.498%203.92002%2014.3623C4.12902%208.668%207.09903%205.12233%2010.619%202.717C12.6284%202.09367%2014.304%201.892%2014.887%202.21833ZM35.985%2014.3147H24.7834C24.9264%2017.028%2027.218%2019.14%2030.0304%2019.14C32.0544%2019.14%2033.2754%2018.26%2034.1994%2017.3947C34.61%2017.017%2034.9657%2016.852%2035.3947%2016.852C36.2417%2016.852%2036.8577%2017.4533%2036.8577%2018.282C36.8577%2018.4763%2036.8064%2018.986%2036.315%2019.5103C34.6834%2021.1897%2032.63%2022%2030.0304%2022C24.8897%2022%2021.3%2018.4213%2021.3%2013.3027C21.3%208.22433%2024.9007%204.53567%2029.858%204.53567C34.181%204.53567%2037.1217%207.13533%2037.723%2011.4913C37.7927%2011.9827%2037.7927%2012.232%2037.7927%2012.5767C37.7964%2013.7463%2037.2024%2014.3147%2035.985%2014.3147ZM34.379%2011.7333C34.2727%208.96867%2032.5457%207.25267%2029.858%207.25267C27.2034%207.25267%2025.04%209.174%2024.787%2011.7333H34.379ZM48.492%204.53567C46.2407%204.53567%2044.0077%205.83%2043.1387%207.63033V6.51933C43.1387%204.796%2041.804%204.708%2041.5364%204.708C40.7444%204.708%2039.901%205.18467%2039.901%206.51933V19.9467C39.901%2021.736%2041.3237%2021.824%2041.606%2021.824C41.8884%2021.824%2043.311%2021.7323%2043.311%2019.9467V12.749C43.311%209.61767%2045.0857%207.42867%2047.6267%207.42867C50.087%207.42867%2051.286%209.04567%2051.286%2012.3677V19.9467C51.286%2021.736%2052.7087%2021.824%2052.991%2021.824C53.2734%2021.824%2054.696%2021.7323%2054.696%2019.9467V11.2933C54.696%208.02633%2053.068%204.53567%2048.492%204.53567ZM70.1364%204.708C69.348%204.708%2068.776%205.16633%2068.435%206.072L63.7674%2017.8127L59.1364%206.072C58.7734%205.15533%2058.205%204.708%2057.402%204.708C56.4597%204.708%2055.697%205.44133%2055.697%206.34333C55.697%206.567%2055.7227%206.85667%2055.9097%207.30767L61.274%2019.976C61.912%2021.505%2062.9644%2021.824%2063.7344%2021.824C64.5044%2021.824%2065.5567%2021.505%2066.1947%2019.976L71.5957%207.238C71.779%206.79067%2071.8084%206.46433%2071.8084%206.30667C71.8084%205.39733%2071.086%204.708%2070.1364%204.708ZM80.0547%204.532C84.396%204.532%2086.9884%206.96667%2086.9884%2011.0477V20.0823C86.9884%2021.7727%2085.6134%2021.824%2085.4557%2021.824C84.715%2021.824%2083.8534%2021.3693%2083.8534%2020.0823V19.2207C82.6287%2021.0137%2080.7184%2021.9633%2078.3277%2021.9633C75.3247%2021.9633%2072.296%2020.3757%2072.296%2016.83C72.296%2011.902%2078.0564%2011.22%2083.7177%2011.2127V10.8423C83.7177%208.60567%2082.2694%207.32233%2079.7467%207.32233C78.4267%207.32233%2077.2094%207.72567%2075.915%208.591C75.585%208.822%2075.2257%208.95033%2074.903%208.95033C74.1587%208.95033%2073.5757%208.35267%2073.5757%207.59C73.5757%207.03633%2073.825%206.59633%2074.3347%206.24433C75.838%205.14067%2077.873%204.53567%2080.0547%204.532ZM75.772%2016.7603C75.772%2019.063%2078.28%2019.2427%2079.05%2019.2427C81.8807%2019.2427%2083.714%2017.3837%2083.714%2014.509V13.7243H82.9954C79.8934%2013.728%2075.772%2014.0397%2075.772%2016.7603ZM95.8727%207.80633C97.3651%207.80633%2097.442%206.644%2097.442%206.413C97.442%205.72367%2097.0314%204.983%2095.8727%204.983H92.8037V1.87733C92.8037%200.491333%2091.9054%200%2091.1317%200C90.8457%200%2089.4267%200.0916667%2089.4267%201.87733V16.621C89.4267%2020.0237%2091.106%2021.824%2094.2814%2021.824C95.1027%2021.824%2095.9057%2021.6773%2096.4264%2021.4353C97.0277%2021.1347%2097.3724%2020.6433%2097.3724%2020.086C97.3724%2019.2977%2096.8004%2018.7257%2096.0121%2018.7257C95.8581%2018.7257%2095.6417%2018.7623%2095.4034%2018.832C95.1101%2018.9053%2094.9121%2018.9347%2094.6957%2018.9347C93.4051%2018.9347%2092.8%2018.0913%2092.8%2016.28V7.81L95.8727%207.80633ZM107.155%204.53567C112.332%204.53567%20116.094%208.195%20116.094%2013.233C116.094%2018.2307%20112.252%2022%20107.155%2022C104.695%2022%20102.436%2021.1237%20100.804%2019.5287C99.1581%2017.9227%2098.2524%2015.686%2098.2524%2013.233C98.2487%208.19133%20101.996%204.53567%20107.155%204.53567ZM112.545%2013.233C112.545%209.22167%20109.751%207.39567%20107.155%207.39567C104.559%207.39567%20101.765%209.22167%20101.765%2013.233C101.765%2016.1517%20103.617%2019.107%20107.155%2019.107C109.751%2019.107%20112.545%2017.2663%20112.545%2013.233Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3740_2829'%3e%3crect%20width='116.094'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",g9="data:image/svg+xml,%3csvg%20width='134'%20height='26'%20viewBox='0%200%20134%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3740_2831)'%3e%3cpath%20d='M6.656%2024.388C6.032%2025.324%204.888%2026%203.64%2026C1.612%2026%200%2024.388%200%2022.36C0%2021.372%200.416%2020.436%201.04%2019.812C1.196%2019.604%2015.6%201.82%2015.808%201.612C16.432%200.676%2017.576%200%2018.824%200C20.852%200%2022.464%201.612%2022.464%203.64C22.464%204.628%2022.048%205.564%2021.424%206.188C21.268%206.396%206.812%2024.18%206.656%2024.388ZM29.744%2014.612C30.42%2013.936%2030.784%2013.052%2030.784%2012.064C30.784%2010.036%2029.172%208.424%2027.144%208.424C25.896%208.424%2024.752%209.1%2024.128%2010.036C23.972%2010.192%2016.38%2019.552%2016.224%2019.76C15.548%2020.436%2015.184%2021.32%2015.184%2022.308C15.184%2024.336%2016.796%2025.948%2018.824%2025.948C20.072%2025.948%2021.216%2025.272%2021.84%2024.336C22.048%2024.18%2029.64%2014.82%2029.744%2014.612ZM34.06%200C32.032%200%2030.42%201.612%2030.42%203.64C30.42%205.668%2032.032%207.28%2034.06%207.28C36.088%207.28%2037.7%205.668%2037.7%203.64C37.7%201.612%2036.036%200%2034.06%200ZM3.64%200C1.612%200%200%201.612%200%203.64C0%205.668%201.612%207.28%203.64%207.28C5.668%207.28%207.28%205.668%207.28%203.64C7.28%201.612%205.616%200%203.64%200ZM48.828%2023.244H51.324V6.396H57.096V4.316H43.056V6.396H48.828V23.244ZM57.824%2023.244H60.268V16.016C60.268%2015.6%2060.32%2015.184%2060.372%2014.872C60.684%2013%2061.932%2011.7%2063.7%2011.7C64.012%2011.7%2064.272%2011.752%2064.532%2011.804V9.464C64.324%209.412%2064.116%209.36%2063.804%209.36C62.14%209.36%2060.684%2010.504%2060.06%2012.324H59.956L59.852%209.672H57.72C57.824%2010.92%2057.824%2012.324%2057.824%2013.936V23.244ZM78.416%209.672H75.92V17.992C75.92%2018.46%2075.816%2018.876%2075.712%2019.24C75.244%2020.332%2074.1%2021.476%2072.436%2021.476C70.2%2021.476%2069.42%2019.76%2069.42%2017.16V9.672H66.924V17.628C66.924%2022.412%2069.472%2023.556%2071.604%2023.556C73.996%2023.556%2075.452%2022.1%2076.076%2021.008H76.128L76.284%2023.244H78.468C78.364%2022.152%2078.364%2020.956%2078.364%2019.552V9.672H78.416ZM81.536%2022.62C82.472%2023.192%2083.876%2023.556%2085.332%2023.556C88.556%2023.556%2090.428%2021.892%2090.428%2019.5C90.428%2017.472%2089.232%2016.276%2086.84%2015.392C85.072%2014.716%2084.24%2014.196%2084.24%2013.104C84.24%2012.116%2085.072%2011.232%2086.528%2011.232C87.776%2011.232%2088.764%2011.7%2089.284%2012.012L89.908%2010.192C89.128%209.724%2087.932%209.36%2086.58%209.36C83.668%209.36%2081.9%2011.18%2081.9%2013.364C81.9%2014.976%2083.044%2016.328%2085.488%2017.212C87.308%2017.888%2088.036%2018.512%2088.036%2019.708C88.036%2020.852%2087.204%2021.736%2085.384%2021.736C84.136%2021.736%2082.836%2021.216%2082.108%2020.748L81.536%2022.62ZM94.172%206.396V9.672H92.092V11.544H94.172V18.98C94.172%2020.592%2094.432%2021.788%2095.108%2022.516C95.68%2023.192%2096.616%2023.556%2097.76%2023.556C98.696%2023.556%2099.476%2023.4%2099.944%2023.244L99.84%2021.372C99.528%2021.476%2099.06%2021.528%2098.384%2021.528C97.032%2021.528%2096.512%2020.592%2096.512%2018.876V11.544H100.048V9.672H96.512V5.772L94.172%206.396ZM117.416%2013.312H111.176V15.288H115.024V20.956C114.452%2021.216%20113.36%2021.476%20111.748%2021.476C107.328%2021.476%20104.468%2018.616%20104.468%2013.832C104.468%209.1%20107.484%206.24%20112.06%206.24C113.984%206.24%20115.232%206.604%20116.22%207.072L116.792%205.096C115.96%204.68%20114.244%204.212%20112.06%204.212C105.716%204.212%20101.816%208.32%20101.816%2013.988C101.816%2016.952%20102.804%2019.448%20104.468%2021.06C106.34%2022.828%20108.68%2023.556%20111.54%2023.556C114.088%2023.556%20116.272%2022.932%20117.364%2022.516V13.312H117.416ZM126.932%209.36C123.188%209.36%20120.172%2012.012%20120.172%2016.588C120.172%2020.904%20123.032%2023.556%20126.672%2023.556C129.948%2023.556%20133.432%2021.372%20133.432%2016.328C133.484%2012.168%20130.832%209.36%20126.932%209.36ZM126.88%2011.18C129.792%2011.18%20130.936%2014.092%20130.936%2016.38C130.936%2019.448%20129.168%2021.684%20126.828%2021.684C124.436%2021.684%20122.72%2019.448%20122.72%2016.484C122.72%2013.884%20123.968%2011.18%20126.88%2011.18Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3740_2831'%3e%3crect%20width='133.484'%20height='26'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",rc=[{icon:p9},{icon:f9},{icon:h9},{icon:m9},{icon:g9}],x9=""+new URL("sass-BV2cWO4x.mp4",import.meta.url).href,p2=()=>o.jsxs("section",{className:"auth-right-section",children:[o.jsx("video",{loop:!0,autoPlay:!0,playsInline:!0,muted:!0,children:o.jsx("source",{src:x9,type:"video/mp4"})}),o.jsx("div",{className:"auth-brand-slider-section",children:o.jsx("div",{className:"auth-brand-slider-inner",children:o.jsxs(O,{children:[o.jsx("h5",{children:"Big & Small business trusted us 😍"}),o.jsx("div",{className:"auth-brand-slider",children:o.jsx("ul",{children:rc==null?void 0:rc.map((e,t)=>o.jsx("li",{children:o.jsx("img",{src:e.icon,alt:`brand-${t+1}`})},t))})})]})})})]}),f2=({children:e})=>o.jsxs("section",{className:"auth-form-section",children:[o.jsxs("div",{className:"auth-page-header",children:[o.jsx(re,{to:"/",className:"logo",children:o.jsx(O,{delay:200,children:o.jsx("img",{src:X1,alt:"logo"})})}),o.jsx(re,{to:"/",className:"back-link",children:o.jsxs(O,{children:[o.jsx(S7,{}),"Go Back"]})})]}),o.jsx("div",{className:"auth-content",children:e})]}),Jm="data:image/svg+xml,%3csvg%20width='18'%20height='19'%20viewBox='0%200%2018%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3739_2540)'%3e%3cpath%20d='M18.0019%209.7156C18.0019%209.04678%2017.9473%208.40057%2017.8443%207.78345H9.18359V11.4426H14.1426C13.932%2012.6348%2013.2878%2013.6494%2012.3097%2014.3295V16.7059H15.2704C17.0035%2015.0516%2018.0019%2012.6057%2018.0019%209.7156Z'%20fill='%234285F4'/%3e%3cpath%20d='M9.18022%2019.0001C11.6589%2019.0001%2013.7446%2018.1584%2015.2671%2016.7061L12.3063%2014.3297C11.4827%2014.9032%2010.4219%2015.2392%209.18022%2015.2392C6.78573%2015.2392%204.75315%2013.5688%204.02466%2011.3184H0.976562V13.7642C2.48813%2016.8676%205.59395%2019.0001%209.18022%2019.0001Z'%20fill='%2334A853'/%3e%3cpath%20d='M4.02773%2011.3168C3.8421%2010.7433%203.73915%2010.131%203.73915%209.49932C3.73915%208.86765%203.84054%208.25538%204.02773%207.68187V5.23438H0.978074C0.352544%206.51709%200%207.96458%200%209.49932C0%2011.0341%200.352544%2012.4832%200.978074%2013.7643L4.02773%2011.3168Z'%20fill='%23FABB05'/%3e%3cpath%20d='M9.18178%203.75929C10.5342%203.75929%2011.7479%204.24071%2012.7041%205.18417V5.18578L15.3248%202.47496C13.7336%200.941842%2011.6589%200%209.18178%200C5.59395%200%202.48813%202.13086%200.976562%205.23425L4.02622%207.68175C4.75471%205.42973%206.78729%203.75929%209.18178%203.75929Z'%20fill='%23E94235'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3739_2540'%3e%3crect%20width='18'%20height='19'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",qm="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3739_2549)'%3e%3cpath%20d='M14.9579%200H3.04209C1.36197%200%200%201.3619%200%203.04193V14.9581C0%2016.6381%201.36197%2018%203.04209%2018H8.87722V10.6681H6.95279V8.1934H8.87722C8.87722%208.1934%208.87722%206.5762%208.87722%206.21376C8.87722%205.85157%208.80413%203.42914%2011.9043%203.42914C12.3198%203.42914%2013.3714%203.42914%2014.2007%203.42914C14.2007%204.48116%2014.2007%205.61929%2014.2007%205.94869C13.5792%205.94869%2012.8009%205.94869%2012.4828%205.94869C12.1646%205.94869%2011.8425%206.28184%2011.8425%206.52889C11.8425%206.77594%2011.8425%208.18364%2011.8425%208.18364C11.8425%208.18364%2013.8305%208.18364%2014.0888%208.18364C13.9989%209.45292%2013.8137%2010.6676%2013.8137%2010.6676H11.8312V17.9995H14.9579C16.638%2017.9995%2018%2016.6376%2018%2014.9576V3.04193C18%201.3619%2016.638%200%2014.9579%200Z'%20fill='%2337538D'/%3e%3cpath%20opacity='0.5'%20d='M14.9579%200H3.04209C1.36197%200%200%201.3619%200%203.04193V7.80344C1.98676%208.61317%204.36326%209.16233%206.95279%209.35631V8.19341H8.87722C8.87722%208.19341%208.87722%206.5762%208.87722%206.21376C8.87722%205.85158%208.80413%203.42915%2011.9043%203.42915C12.3198%203.42915%2013.3714%203.42915%2014.2007%203.42915C14.2007%204.48117%2014.2007%205.6193%2014.2007%205.94869C13.5792%205.94869%2012.8009%205.94869%2012.4828%205.94869C12.1646%205.94869%2011.8425%206.28185%2011.8425%206.5289C11.8425%206.77594%2011.8425%208.18365%2011.8425%208.18365C11.8425%208.18365%2013.8305%208.18365%2014.0888%208.18365C14.0695%208.45473%2014.046%208.72305%2014.021%208.97761C15.4613%208.70478%2016.8005%208.31731%2018%207.83523V3.04193C18%201.3619%2016.638%200%2014.9579%200Z'%20fill='url(%23paint0_linear_3739_2549)'/%3e%3cpath%20d='M15.8894%200.145176C15.5963%200.0510618%2015.2837%200%2014.9593%200H3.04346C2.71905%200%202.4064%200.0510618%202.11328%200.145176H15.8894Z'%20fill='%23B9C4D9'/%3e%3cg%20opacity='0.5'%3e%3cpath%20opacity='0.5'%20d='M8.87697%2014.614H0V14.9582C0%2016.6382%201.36197%2018.0001%203.04209%2018.0001H8.87722V14.614H8.87697Z'%20fill='%23687FAD'/%3e%3cpath%20opacity='0.5'%20d='M11.832%2014.614V18.0004H14.9587C16.6389%2018.0004%2018.0008%2016.6385%2018.0008%2014.9584V14.6143H11.832V14.614Z'%20fill='%23687FAD'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_3739_2549'%20x1='9'%20y1='0.805579'%20x2='9'%20y2='9.31587'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%238799BF'/%3e%3cstop%20offset='0.0811'%20stop-color='%238295BC'/%3e%3cstop%20offset='0.2865'%20stop-color='%23778BB5'/%3e%3cstop%20offset='1'%20stop-color='%23415C94'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_3739_2549'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",v9=()=>o.jsxs(u2,{children:[o.jsxs(f2,{children:[o.jsxs(O,{delay:200,children:[o.jsx("h2",{children:"Hi there!"}),o.jsx("h4",{className:"dm-sans",children:"Welcome to Staco 👋"})]}),o.jsxs("form",{action:"/",id:"commentForm",children:[o.jsx(O,{delay:250,children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Email address"}),o.jsx("input",{type:"email",name:"email",placeholder:"e.g.  example@mail.com",required:!0})]})}),o.jsx(O,{delay:300,children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Password"}),o.jsx("input",{type:"password",name:"password",placeholder:"********",required:!0})]})}),o.jsx(O,{delay:350,children:o.jsx("button",{type:"submit",className:"form-primary-btn",children:"Login"})}),o.jsx(O,{delay:400,children:o.jsx("div",{className:"or-section",children:o.jsx("p",{className:"mb-0",children:"or"})})}),o.jsx(O,{delay:450,children:o.jsxs("button",{className:"secondary-btn",children:[o.jsx("img",{src:Jm,alt:"icon"})," Log in with Google"]})}),o.jsx(O,{delay:500,children:o.jsxs("button",{className:"secondary-btn",children:[o.jsx("img",{src:qm,alt:"icon"})," Log in with Facebook"]})}),o.jsxs(O,{delay:550,children:[o.jsx(re,{to:"/forgot-password",className:"auth-link",children:"Forgot my password"}),o.jsxs("p",{className:"mt-3",children:["Don’t have an account ?"," ",o.jsx(re,{to:"/sign-up",children:"Register now !"})]}),o.jsxs("p",{className:"mb-0",children:["By signing in, you agree to our"," ",o.jsx(re,{to:"/terms",children:"Terms"})," &"," ",o.jsx(re,{to:"/privacy-policy",children:"Privacy Policy."})]})]})]})]}),o.jsx(p2,{})]}),y9=()=>o.jsx(ft,{pageTitle:"ARKA - Sign In",children:o.jsx(v9,{})}),b9=()=>o.jsxs(u2,{children:[o.jsxs(f2,{children:[o.jsxs(O,{delay:200,children:[o.jsx("h2",{children:"Hi there!"}),o.jsx("h4",{className:"dm-sans",children:"Get started with your free account 🎯"})]}),o.jsxs("form",{action:"#",id:"commentForm",children:[o.jsx(O,{delay:250,children:o.jsxs("button",{className:"secondary-btn",children:[o.jsx("img",{src:Jm,alt:"icon"})," Sign up with Google"]})}),o.jsx(O,{delay:300,children:o.jsxs("button",{className:"secondary-btn",children:[o.jsx("img",{src:qm,alt:"icon"})," Sign up with Facebook"]})}),o.jsx(O,{delay:350,children:o.jsx("div",{className:"or-section",children:o.jsx("p",{className:"mb-0",children:"or"})})}),o.jsx(O,{delay:350,children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Email address"}),o.jsx("input",{type:"email",name:"email",placeholder:"e.g.  example@mail.com",required:!0})]})}),o.jsx(O,{delay:400,children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Password"}),o.jsx("input",{type:"password",name:"password",placeholder:"********",required:!0,id:"inputPass"})]})}),o.jsx(O,{delay:450,children:o.jsx("div",{id:"suggestions",children:o.jsx("p",{className:"suggestion",children:"Minimum 8 characters long and containing at least one numeric, uppercase, lowercase, and special character."})})}),o.jsx(O,{delay:500,children:o.jsx("button",{type:"submit",className:"form-primary-btn",children:"Sign Up"})}),o.jsxs(O,{delay:550,children:[o.jsxs("p",{className:"mt-5",children:["Already have an account ? ",o.jsx(re,{to:"/sign-in",children:"Log in now!"})]}),o.jsxs("p",{className:"mb-0",children:["By signing up, you agree to our ",o.jsx(re,{to:"/terms",children:"Terms"}),"& ",o.jsx(re,{to:"/privacy-policy",children:"Privacy Policy."})]})]})]})]}),o.jsx(p2,{})]}),w9=()=>o.jsx(ft,{pageTitle:"ARKA - Sign Up",children:o.jsx(b9,{})}),C9=()=>o.jsxs(u2,{children:[o.jsxs(f2,{children:[o.jsxs(O,{children:[o.jsx("h2",{children:"Hi there!"}),o.jsx("h4",{className:"dm-sans",children:"Reset link will be send to your mail 📨"})]}),o.jsxs("form",{action:"/",method:"post",children:[o.jsx(O,{children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Email address"}),o.jsx("input",{type:"email",name:"email",placeholder:"e.g.  example@mail.com",required:!0})]})}),o.jsx(O,{children:o.jsx("button",{type:"submit",className:"form-primary-btn",children:"Send me reset mail"})}),o.jsx(O,{children:o.jsxs("p",{className:"mt-5",children:["Remember your password ? ",o.jsx(re,{to:"/sign-in",children:"Log in now!"})]})})]})]}),o.jsx(p2,{})]}),k9=()=>o.jsx(ft,{pageTitle:"Staco - Forget Password",children:o.jsx(C9,{})}),ic=[{title:"Products 🔥",menuList:[{title:"HR Management",url:"#"},{title:"Invoice System",url:"#"},{title:"Email Marketing",url:"#"},{title:"Web Services",url:"#"},{title:"Digital Marketing",url:"#"}]},{title:"Why Choose 🌟",menuList:[{title:"Customers",url:"#"},{title:"Why Staco?",url:"#"},{title:"Book a demo",url:"#"}]},{title:"Resources ❇️",menuList:[{title:"Latest Blog",url:"#"},{title:"Supports",url:"#"},{title:"Knowledgebase",url:"#"},{title:"FAQs",url:"#"}]},{title:"Company 💎",menuList:[{title:"About",url:"#"},{title:"What we do",url:"#"},{title:"Contact us",url:"#"},{title:"Careers",url:"#",badgeTitle:"Hiring"}]}],j9=""+new URL("footer-2-BlAoZwfg.png",import.meta.url).href,In=()=>(N.useEffect(()=>{new u9({selector:".my-video-links"})},[]),o.jsxs(_m,{className:"footer-section v3",children:[o.jsx("div",{className:"footer-top",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row justify-content-between",children:[o.jsx("div",{className:"col-lg-3 col-md-6",children:o.jsxs("div",{className:"footer-img",children:[o.jsx("img",{src:j9,alt:"footer-img"}),o.jsx("a",{className:"my-video-links",href:"https://www.youtube.com/embed/_k8RsMr82zM?si=hvUQJcwkuRaEGC3n","data-autoplay":"true","data-vbtype":"video",children:o.jsx("span",{className:"iconify","data-icon":"el:play"})})]})}),o.jsx("div",{className:"col-lg-8",children:o.jsx("div",{className:"row",children:ic==null?void 0:ic.map((e,t)=>{var n;return o.jsx("div",{className:"col-md-3 col-6",children:o.jsxs("aside",{className:"footer-widget",children:[o.jsx("div",{className:"widget-title",children:o.jsx("h6",{children:e.title})}),o.jsx("div",{className:"widget-body",children:o.jsx("ul",{className:"widget-list",children:(n=e.menuList)==null?void 0:n.map((r,i)=>o.jsx("li",{children:o.jsxs("a",{href:r.url,children:[r.title,r.badgeTitle&&o.jsx("span",{className:"template-badge",children:"Hiring"})]})},i))})})]})},t)})})})]})})}),o.jsx("div",{className:"footer-bottom",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row align-items-center",children:[o.jsx("div",{className:"col-lg-4 col-md-3 col-sm-6",children:o.jsx("a",{href:"/",className:"footer-logo",children:o.jsx("img",{src:X1,alt:"footer-logo"})})}),o.jsx("div",{className:"col-lg-4 col-md-4 col-sm-6",children:o.jsx("ul",{className:"social-link",children:nc==null?void 0:nc.map((e,t)=>o.jsx("li",{children:o.jsx("a",{href:e.url,target:"_blank",children:o.jsxs("span",{className:"social-icon",children:[o.jsx("img",{src:e.imgV2,alt:e.title}),o.jsx("img",{src:e.imgV2,alt:e.title})]})})},t))})}),o.jsx("div",{className:"col-lg-4 col-md-5",children:o.jsx("div",{className:"footer-copyright",children:o.jsxs("p",{className:"mb-0",children:["2025 ",o.jsx("a",{href:"#",children:"Staco"}),". All rights reserved."]})})})]})})})]})),A9=""+new URL("fram-4-9uJ1rdcb.svg",import.meta.url).href,S9=Y.section`
  padding: 96px 0;
  background-color: ${({theme:e})=>e.colors.bgHero};
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  position: relative;
  z-index: 0;

  &::after,
  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    height: 100%;
  }

  &::before {
    left: 0;
    width: 36%;
    background-color: ${({theme:e})=>e.colors.bgHero};
  }

  &::after {
    top: 0;
    right: 0;
    width: 63.5%;
    background-image: url(${A9});
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
  }

  .section-title {
    margin-bottom: 38px;
  }

  .building-content {
    &-text {
      margin-bottom: 34px;
    }
    h2 {
      color: #ffffff;
    }
  }

  .building-img {
    text-align: right;
  }

  @media screen and (max-width: 1200px) {
    .building-content h2 {
      font-size: 32px;
      line-height: 150%;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 70px 0 80px;
    background-size: cover;

    &::after {
      display: none;
    }

    .building-content{
      text-align: center;
    }

    .building-img {
      margin-top: 60px;
      text-align: center;
    }
  }

  @media screen and (max-width: 575px) {
    padding: 60px 0;
  }

  @media screen and (max-width: 374px) {
    .building-content h2 {
      font-size: 30px;
      line-height: 42px;
    }
  }
`,N9=""+new URL("building-img-DWk3F_Jx.svg",import.meta.url).href,Rn=()=>o.jsx(S9,{children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row align-items-center",children:[o.jsx("div",{className:"col-lg-7 col-md-8",children:o.jsxs("div",{className:"building-content",children:[o.jsx(O,{delay:200,children:o.jsx("div",{className:"section-title",children:o.jsxs("h2",{className:"title",children:["Start building a",o.jsx("br",{}),"high-performing Website"]})})}),o.jsx(O,{delay:200,children:o.jsx("a",{href:"/sign-up",className:"bg-blue-btn",children:o.jsxs("span",{className:"btn-inner",children:[o.jsx("span",{className:"btn-normal-text",children:"Get Start for Free"}),o.jsx("span",{className:"btn-hover-text",children:"Get Start for Free"})]})})})]})}),o.jsx("div",{className:"col-lg-5 col-md-4",children:o.jsx(O,{delay:200,children:o.jsx("div",{className:"building-img",children:o.jsx("img",{src:N9,alt:"building-img"})})})})]})})}),E9=Y.section`
  padding-top: 111px;
  padding-bottom: 127px;
  margin-top: 90px;

  h1 {
    margin-top: 11px;
  }

  .terms-and-service-inner {
    margin-top: 112px;
  }

  .terms-and-service-content {
    p {
      margin-bottom: 20px;
      b {
        color: ${({theme:e})=>e.colors.title};
      }
      strong {
        color: ${({theme:e})=>e.colors.title};
      }
      a {
        color: ${({theme:e})=>e.colors.primary};
      }
    }
    h4 {
      margin-bottom: 7px;
    }
  }

  .content-table-title {
    text-transform: uppercase;
    color: ${({theme:e})=>e.colors.primary};
    margin-bottom: 20px;
    img {
      margin-right: 15px;
    }
  }

  .terms-list {
    li {
      line-height: 36px;

      &:not(:first-child) {
        margin-top: 5px;
      }

      a {
        &.active,
        &:hover {
          color: ${({theme:e})=>e.colors.title};
        }
      }
    }
  }

  .terms-and-service-sidebar {
    left: inherit !important;
    ol {
      li {
        line-height: 36px;

        a {
          &.active,
          &:hover {
            color: ${({theme:e})=>e.colors.title};
          }
        }
      }
    }
  }

  .uppercase {
    text-transform: uppercase;
  }

  @media screen and (max-width: 991px) {
    padding-top: 80px;
    padding-bottom: 80px;

    .terms-and-service-inner {
      margin-top: 80px;
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 60px;
    padding-bottom: 50px;
    h1 {
      font-size: 32px;
    }

    .terms-and-service-inner {
      margin-top: 60px;
      .sidebar {
        margin-bottom: 40px;
      }
    }

    .terms-and-service-sidebar {
      position: relative !important;
      top: 0px !important;
      width: 100% !important;
    }
  }
`,P9="data:image/svg+xml,%3csvg%20width='20'%20height='17'%20viewBox='0%200%2020%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%201H19'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%206H10.47'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2011H19'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2016H10.47'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";var L9=e=>{let t=e;for(;t=t.parentElement;){const n=getComputedStyle(t,null).getPropertyValue("overflow-y");if(t===document.body)return window;if(n==="auto"||n==="scroll"||n==="overlay")return t}return window},Km=e=>e.firstChild?e.firstChild.offsetParent===e:!0,O9=(e,t)=>{let n=e,r=0;Km(t)||(r+=e.offsetTop-t.offsetTop,t=e.offsetParent,r+=-e.offsetTop);do r+=n.offsetTop,n=n.offsetParent;while(n&&n!==t);return r},T9=e=>{let t=e.parentElement;for(;t&&getComputedStyle(t,null).getPropertyValue("display")==="contents";)t=t.parentElement;return t||window},Co=null;typeof CSS<"u"&&CSS.supports&&(CSS.supports("position","sticky")?Co="sticky":CSS.supports("position","-webkit-sticky")&&(Co="-webkit-sticky"));var vl=!1;try{const e=Object.defineProperty({},"passive",{get(){vl={passive:!0}}}),t=()=>{};window.addEventListener("testPassive",t,e),window.removeEventListener("testPassive",t,e)}catch{}var oc=e=>{const{el:t,onChange:n,unsubs:r,measure:i}=e;if(t===window){const a=()=>({top:0,left:0,height:window.innerHeight,width:window.innerWidth}),l=i(a()),s=()=>{Object.assign(l,i(a())),n()};return window.addEventListener("resize",s,vl),r.push(()=>window.removeEventListener("resize",s)),l}else{const a=i(t.getBoundingClientRect()),l=()=>{Object.assign(a,i(t.getBoundingClientRect())),n()},s=new ResizeObserver(l);return s.observe(t),r.push(()=>s.disconnect()),a}},I9=e=>{const t=getComputedStyle(e,null),n=parseInt(t.getPropertyValue("padding-top"),10),r=parseInt(t.getPropertyValue("padding-bottom"),10);return{top:n,bottom:r}},R9=(e,t,n)=>{const{bottom:r,offsetBottom:i,offsetTop:a}=n,l=L9(e);let s=!1;const c=()=>{s||requestAnimationFrame(()=>{const k=p();if(k!==f)x(k);else if(k===1&&!r){const{height:w}=v,{height:A}=m;e.style.top=`${w-A-i}px`}else if(k===2){const{height:w,offsetTop:A}=v,{height:P,naturalTop:R}=C,{height:M}=m,L=Math.max(0,A+d+w-(R+M+i));if(r){const G=Math.max(0,P-M-L);e.style.bottom=`${G}px`}else e.style.top=`${L}px`}s=!1}),s=!0};let d=l===window?window.scrollY:l.scrollTop;const u=k=>{const{offsetTop:w,height:A}=v,{naturalTop:P}=C,{height:R}=m;return k+w+A>=P+R+h+i},p=()=>{const{height:k}=v,{height:w}=m;return w+a+i<=k?3:u(d)?1:2},g=l!==window&&Km(l),v=oc({el:l,onChange:c,unsubs:t,measure:({height:k,top:w})=>({height:k,offsetTop:g?w:0})}),y=T9(e),b=y===window?{top:0,bottom:0}:I9(y),C=oc({el:y,onChange:c,unsubs:t,measure:({height:k})=>({height:k-b.top-b.bottom,naturalTop:y===window?0:O9(y,l)+b.top+v.offsetTop})}),m=oc({el:e,onChange:c,unsubs:t,measure:({height:k})=>({height:k})});let h=0,f=p();const x=k=>{const w=f;if(f=k,w===2&&(h=-1),k===3){e.style.position=Co,r?e.style.bottom=`${i}px`:e.style.top=`${a}px`;return}const{height:A,offsetTop:P}=v,{height:R,naturalTop:M}=C,{height:L}=m;if(k===2)if(e.style.position="relative",h=w===0?Math.max(0,P+d-M+a):Math.max(0,P+d+A-(M+L+i)),r){const G=Math.max(0,R-L-h);e.style.bottom=`${G}px`}else e.style.top=`${h}px`;else e.style.position=Co,k===1?r?e.style.bottom=`${i}px`:e.style.top=`${A-L-i}px`:r?e.style.bottom=`${A-L-i}px`:e.style.top=`${a}px`};x(f);const j=k=>{if(k===d)return;const w=k-d;if(d=k,f===3)return;const{offsetTop:A,height:P}=v,{naturalTop:R,height:M}=C,{height:L}=m;if(w>0)if(f===0){if(k+A+a>R){const G=Math.max(0,A+d-R+a);k+A+P<=R+L+G+i?x(2):x(1)}}else f===2&&u(k)&&x(1);else if(f===1){if(A+k+P<R+M+i){const G=Math.max(0,A+d+P-(R+L+i));A+k+a>=R+G?x(2):x(0)}}else f===2&&A+k+a<R+h&&x(0)},S=l===window?()=>j(window.scrollY):()=>j(l.scrollTop);l.addEventListener("scroll",S,vl),l.addEventListener("mousewheel",S,vl),t.push(()=>l.removeEventListener("scroll",S),()=>l.removeEventListener("mousewheel",S))},M9=({offsetTop:e=0,offsetBottom:t=0,bottom:n=!1}={})=>{const[r,i]=N.useState(null);return N.useEffect(()=>{if(!r||!Co)return;const a=[];return R9(r,a,{offsetBottom:t,offsetTop:e,bottom:n}),()=>{a.forEach(l=>l())}},[r,t,e,n]),i},z9=e=>{const{offsetTop:t,offsetBottom:n,bottom:r,children:i,className:a,style:l}=e,s=M9({offsetTop:t,offsetBottom:n,bottom:r});return o.jsx("div",{className:a,style:l,ref:s,children:i})},h2=z9;const eg=({title:e,data:t,children:n})=>o.jsx(E9,{children:o.jsxs("div",{className:"container",children:[o.jsxs(O,{delay:200,children:[o.jsx("p",{className:"uppercase",children:"Last updated: 28 March 2023"}),e&&o.jsx("h1",{children:e})]}),o.jsx("div",{className:"terms-and-service-inner",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-4 ",children:o.jsx(h2,{offsetTop:20,offsetBottom:20,children:o.jsxs(O,{delay:200,children:[o.jsxs("h6",{className:"content-table-title dm-sans",children:[o.jsx("img",{src:P9,alt:"icon"})," TABLE OF CONTENTS"]}),o.jsx("ol",{className:"terms-list",children:t==null?void 0:t.map((r,i)=>o.jsx("li",{children:o.jsx("a",{href:`#${r.contentId}`,className:"list-group-item list-group-item-action",children:r.title})},i))})]})})}),o.jsx("div",{className:"col-md-8",children:o.jsxs("div",{className:"terms-and-service-content",children:[n,t==null?void 0:t.map((r,i)=>o.jsx("div",{id:r.contentId,children:o.jsxs(O,{delay:r.delay,children:[o.jsx("h4",{children:`${i+1}. ${r.title}`}),r.description&&o.jsx("div",{dangerouslySetInnerHTML:{__html:r.description}})]})},i))]})})]})})]})}),B9=[{contentId:"one",delay:200,title:"Use of Service",description:"<p>You are granted a non-exclusive, non-transferable, revocable license to use the Service for your personal or commercial use. You agree to use the Service only for lawful purposes and in a way that does not infringe on the rights of others. looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus</p>"},{contentId:"two",delay:250,title:"Your account",description:'<p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriatenes.</p> <p>Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring subscription that you choose. </p>'},{contentId:"three",delay:300,title:"Payment and Subscription",description:'<p>Some parts of the Service may require payment before access is granted. If you choose to subscribe to any of our paid services, you agree to pay all fees associated with the subscription. Payment may be made through a third-party      payment processor, and you agree to provide accurate payment information.</p> <p><strong>Taxes:</strong> If you wish to purchase any product or service made available through the Service ("<b>Purchase</b>"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your name, address, and payment information.</p> <p><strong>Charges:</strong> Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material.</p>'},{contentId:"four",delay:350,title:"Intellectual Property",description:'<p>All content on the Service, including but not limited to text, graphics, logos, images, and software, is the property of [<b>Your Company</b>] or its licensors and is protected by copyright and other intellectual property laws. You may not copy, reproduce, distribute, or create derivative works based on the content without our prior written consent. </p> <p>(i) Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("<b>Content</b>"). <br /> (ii) You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness. <br /> (iii) For any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services. </p>'},{contentId:"five",delay:400,title:"User Content",description:'<p>You are solely responsible for any content you upload, submit, or otherwise make available on the Service ("User Content"). You agree not to post User Content that is illegal, defamatory, or infringes on the rights of others. We reserve the right to remove any User Content that violates these Terms.</p>'},{contentId:"six",delay:450,title:"Limitation of Liability",description:"<p>In no event shall [Your Company] be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the Service, including but not limited to lost profits, loss of data, or any other damages, whether based on contract, tort, strict liability, or any other theory of liability.</p>"},{contentId:"seven",delay:500,title:"Termination",description:"<p>We reserve the right to terminate or suspend your access to the Service at any time, with or without cause, without prior notice or liability.</p>"},{contentId:"eight",delay:550,title:"Governing Law",description:"<p>These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions. the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that [Your Company] shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services </p>"},{contentId:"nine",delay:600,title:"Changes to Terms",description:"<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>"},{contentId:"ten",delay:650,title:"Contact Us",description:'<p>If you have any questions about these Terms, please contact us at [<a href="/contact-us">Contact page</a>].</p>'}],D9=()=>o.jsxs(eg,{title:"Terms of Service",data:B9,children:[o.jsx(O,{delay:200,children:o.jsxs("p",{children:['Welcome to [Your Company] ("',o.jsx("b",{children:"us"}),'", "',o.jsx("b",{children:"we"}),'", or "',o.jsx("b",{children:"our"}),'"). These Terms of Service ("',o.jsx("b",{children:"Terms"}),'") govern your use of our website (the "',o.jsx("b",{children:"Service"}),'") and any related products or services provided by us. By using the Service, you agree to be bound by these Terms. Some parts of the Service are billed on a subscription basis ("',o.jsx("b",{children:"Subscription(s)"}),'"). You will be billed in advance on a recurring subscription that you choose.']})}),o.jsx(O,{delay:250,children:o.jsx("p",{children:"By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service."})})]}),U9=()=>o.jsxs(ft,{pageTitle:"ARKA - Terms",children:[o.jsx(rn,{variant:"main-header"}),o.jsx(D9,{}),o.jsx(Rn,{}),o.jsx(In,{})]}),F9=[{contentId:"one",title:"Our privacy",description:"<p>At staco, we are committed to protecting your privacy and personal information. This privacy policy explains how we collect, use, and share your information when you use our services. By using our services, you agree to the terms of this privacy policy.</p> <p>We take your privacy seriously and are committed to protecting your personal information. This privacy policy explains how we collect, use, and share your information when you use our services.</p>"},{contentId:"two",title:"Information we collect",description:"<p>We may collect information about you when you use our services, such as your name, email address, postal address, phone number, and payment information. We may also collect information about your device and how you use our services, including your IP address, browser type, and operating system.</p> <p><strong>3.1</strong> We collect this information in several ways, including when you provide it to us directly, when you use our services, and when we obtain it from third-party sources. We may also use cookies and similar technologies to collect information about your browsing behavior and preferences.</p> <p><strong>3.2</strong> When you use our services, and when we obtain it from third-party sources. We may also use cookies and similar technologies to collect information about your browsing behavior.</p> <p><strong>3.3</strong> Including when you provide it to us directly, when you use our services, and when we obtain it from third-party sources. We may also use cookies and similar technologies to collect information about your browsing behavior and preferences.</p>"},{contentId:"three",title:"How we use your information",description:"<p>We use your information to provide and improve our services, to communicate with you, and to personalize your experience. Specifically, we may use your information for the following purposes:</p><ul><li>To process your transactions and provide customer support</li><li>To send you newsletters, promotions, and other marketing communications</li><li>To personalize your experience and recommend products and services based on your interests and preferences</li><li> To conduct research and analysis to improve our services and offerings</li> <li>To comply with legal and regulatory requirements</li></ul>"},{contentId:"four",title:"How we share your information",description:"<p>We may share your information with third-party service providers who help us provide our services, such as payment processors and customer support providers. We may also share your information with our partners and affiliates for marketing purposes. In some cases, we may share your information with government authorities or law enforcement agencies to comply with legal requirements or protect our rights and property.<br />We will never sell your information to third parties.</p>"},{contentId:"five",title:"How we protect your information",description:"<p>We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction. Specifically, we implement physical, technical, and administrative safeguards to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the security of your information.</p> <p> <strong>To identify:</strong> We collect this information in several ways, including when you provide it to us directly, when you use our services, and when we obtain it from third-party sources.</p><p><strong>To stay connected:</strong> When you use our services, and when we obtain it from third-party sources. We may also use cookies and similar technologies to collect information about your browsing behavior.</p> <p><strong>To get feedback:</strong> Including when you provide it to us directly, when you use our services, and when we obtain it from third-party sources. We may also use cookies and similar technologies to collect information about your browsing behavior and preferences.</p>"},{contentId:"six",title:"Your rights",description:"<p>You have certain rights regarding your personal information, including the right to access and correct your information, the right to request that we delete your information, and the right to opt-out of receiving marketing communications from us. If you wish to exercise any of these rights, please contact us at [<b>contact email</b>].</p>"},{contentId:"seven",title:"Updates to this policy",description:"<p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on our website. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>"},{contentId:"eight",title:"Contact us",description:'<p>If you have any questions about these Terms, please contact us at [<a href="/contact-us">Contact page</a>].</p>'}],H9=()=>o.jsx(eg,{title:"Privacy Policy",data:F9}),$9=()=>o.jsxs(ft,{pageTitle:"Staco - Privacy Policy",children:[o.jsx(rn,{variant:"main-header"}),o.jsx(H9,{}),o.jsx(Rn,{}),o.jsx(In,{})]}),tg=Y.section`
  margin-top: 90px;
  padding: 60px 0;
  background-color: ${({theme:e})=>e.colors.bgHero};
  position: relative;
  z-index: 0;

  .shape-img {
    position: absolute;
    z-index: -1;

    &.img-1 {
      bottom: 0;
      left: 4%;
    }

    &.img-2 {
      bottom: 0;
      left: 34%;
    }
  }

  &.blog-details-breadcrumb-section {
    height: 436px;
  }

  &.pricing-plan-breadcrumb-section {
    min-height: 580px;
    padding-top: 95px;
  }

  .pricing-plan-breadcrumb-right {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 90px;
    .best-pricing-selector form button {
      color: ${({theme:e})=>e.colors.whiteColor};
    }
  }

  .best-pricing-selector {
    margin-bottom: 40px;
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      button {
        color: ${({theme:e})=>e.colors.textColor};
        span {
          color: ${({theme:e})=>e.colors.heroimg1Bg};
        }
        &.active {
          color: ${({theme:e})=>e.colors.title};
        }
      }
      input[type="checkbox"] {
        appearance: none;
        width: 50px;
        height: 24px;
        border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
        border-radius: 15px;
        background-color: ${({theme:e})=>e.colors.whiteColor};
        position: relative;
        cursor: pointer;
        transition: 0.3s;
        &::before {
          position: absolute;
          content: "";
          top: 4px;
          left: 5px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: ${({theme:e})=>e.colors.primary}80;
          transition: 0.3s;
        }
        &:checked {
          background-color: ${({theme:e})=>e.colors.primary};
          &::before {
            left: 28px;
            background-color: ${({theme:e})=>e.colors.whiteColor};
          }
        }
      }
    }
  }

  .breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style: none;
    .breadcrumb-item {
      text-transform: uppercase;
      font-weight: 700;
      color: ${({theme:e})=>e.colors.whiteColor};
      &.active {
        color: ${({theme:e})=>e.colors.whiteColor}b2;
      }
    }
    .breadcrumb-item + .breadcrumb-item::before {
      content: ".";
      font-size: 20px;
      margin: 0px 5px;
      color: ${({theme:e})=>e.colors.whiteColor}b2;
    }
  }

  .breadcrumb-sec {
    .breadcrumb-title {
      text-transform: capitalize;
      font-size: 50px;
      color: ${({theme:e})=>e.colors.whiteColor};
      margin-bottom: 0;
    }
  }

  .breadcrumb-img {
    text-align: right;
  }

  @media screen and (max-width: 991px) {
    margin-top: 70px;

    .breadcrumb-sec .breadcrumb-title {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 767px) {
    .breadcrumb-img {
      margin-top: 40px;
    }
    .breadcrumb-section.blog-details-breadcrumb-section {
      height: 360px;
    }
    .breadcrumb-sec .breadcrumb-title {
      font-size: 40px;
      margin-top: 5px;
    }
    .breadcrumb-sec .breadcrumb-title br {
      display: none;
    }

    .pricing-plan-breadcrumb-right {
      justify-content: flex-start;
      margin-top: 40px;
    }
  }
  @media screen and (max-width: 374px) {
    h1,
    .breadcrumb-sec .breadcrumb-title {
      font-size: 35px;
      line-height: 50px;
    }
  }
`,m2="data:image/svg+xml,%3csvg%20width='197'%20height='160'%20viewBox='0%200%20197%20160'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M137.628%200C135.968%2015.4095%20132.345%2030.8505%20126.604%2046.0026C104.505%20104.31%2056.1072%20145.096%200%20160H124.601C127.335%20157.385%20130.016%20154.711%20132.64%20151.964C155.681%20127.841%20173.401%2099.6739%20185.31%2068.2521C190.355%2054.9426%20194.228%2041.382%20196.925%2027.6361L137.628%200Z'%20fill='%2300CEC9'%20fill-opacity='0.3'/%3e%3c/svg%3e",g2="data:image/svg+xml,%3csvg%20width='136'%20height='110'%20viewBox='0%200%20136%20110'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M59.1159%200.979248L0.111328%2023.4579C2.86427%2033.0697%206.20734%2042.537%2010.1374%2051.8286C18.8514%2072.4332%2030.1802%2091.5719%2043.9449%20109.003H135.115C98.0462%2083.7965%2070.5137%2045.5819%2059.1159%200.979248Z'%20fill='%23F9518C'%20fill-opacity='0.3'/%3e%3c/svg%3e",V9=""+new URL("breadcrumb-img-eI0EFVGW.svg",import.meta.url).href,ts=({title:e})=>o.jsxs(tg,{children:[o.jsxs("div",{className:"bg-shape",children:[o.jsx("div",{className:"shape-img img-1",children:o.jsx(O,{delay:300,children:o.jsx("img",{src:m2,alt:"shape"})})}),o.jsx("div",{className:"shape-img img-2",children:o.jsx(O,{delay:350,children:o.jsx("img",{src:g2,alt:"shape"})})})]}),o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row align-items-center",children:[o.jsx("div",{className:"col-md-6",children:o.jsx(O,{delay:200,children:o.jsxs("div",{className:"breadcrumb-content",children:[o.jsx("nav",{"aria-label":"breadcrumb",children:o.jsxs("ul",{className:"breadcrumb breadcrumb-list",children:[o.jsx("li",{className:"breadcrumb-item",children:o.jsx(re,{to:"/",children:"Home"})}),o.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:e})]})}),o.jsx("div",{className:"breadcrumb-sec",children:o.jsx("h1",{className:"breadcrumb-title",children:e})})]})})}),o.jsx("div",{className:"col-md-6",children:o.jsx("div",{className:"breadcrumb-img",children:o.jsx(O,{delay:250,children:o.jsx("img",{src:V9,alt:"breadcrumb-img"})})})})]})})]}),W9=Y.section`
  padding: 140px 0px;

  .latest-blog-content {
    padding-right: 20px;
  }

  @media screen and (max-width: 991px) {
    .latest-blog-content {
      padding-right: 0px;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 80px 0px 70px;
  }
`,Q9=Y.article`
  background: ${({theme:e})=>e.colors.whiteColor};
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 30px;

  .letest-blog-img {
    min-height: 220px;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .letest-blog-info {
    .letest-blog-info-inner {
      padding: 21px 29px;

      h5 {
        font-family: ${({theme:e})=>e.fonts.dmSans};
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 500;
        line-height: 30px;
        color: ${({theme:e})=>e.colors.textColor};
        letter-spacing: 0.1em;
        margin-bottom: 7px;

        span {
          color: ${({theme:e})=>e.colors.primary};
        }
      }

      h4 {
        margin-bottom: 11px;
        a {
          font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
          font-size: 18px;
          font-weight: 700;
          line-height: 30px;
          color: ${({theme:e})=>e.colors.title};
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: 0.3s;
          &:hover {
            color: ${({theme:e})=>e.colors.primary};
          }
        }
      }

      p {
        margin-bottom: 11px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      a {
        color: ${({theme:e})=>e.colors.primary};
        transition: 0.3s;
        img {
          margin-left: 11px;
        }
      }
    }
  }

  .letest-blog-catd-title {
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`,_9=({thumbnail:e,category:t,date:n,title:r,details:i,delay:a})=>o.jsx(O,{delay:a,children:o.jsxs(Q9,{children:[o.jsx(re,{to:"/blog-details",className:"letest-blog-img",children:o.jsx("img",{src:e,alt:"post thumbnail"})}),o.jsx("div",{className:"letest-blog-info",children:o.jsxs("div",{className:"letest-blog-info-inner",children:[o.jsxs("h5",{children:[o.jsx("span",{children:t})," . ",n]}),o.jsx("h4",{children:o.jsx(re,{to:"/blog-details",children:r})}),o.jsx("p",{children:i}),o.jsxs(re,{to:"/blog-details",className:"text-link",children:[o.jsx("span",{children:"Read More"}),o.jsx(Wm,{})]})]})})]})}),G9=""+new URL("blog1-Eq3AyxgG.png",import.meta.url).href,Y9=""+new URL("blog2-1i8lkabU.png",import.meta.url).href,X9=""+new URL("blog3-DzQbOfyd.png",import.meta.url).href,Z9=""+new URL("blog4-DPZPBVaY.png",import.meta.url).href,J9=""+new URL("blog5-QIJxRfVd.png",import.meta.url).href,q9=""+new URL("blog6-BVysQuWO.png",import.meta.url).href,ac=[{delay:200,thumbnail:G9,category:"Marketing",date:"23 Feb, 2023",title:"We are launching the Great Invoice solution",details:"Many desktop publishing packages and web page editors now use on the Internet repeat predefined their default."},{delay:250,thumbnail:Y9,category:"Help Desk",date:"08 Mar, 2023",title:"Grow your business with sale funnel",details:"Many desktop publishing packages and web page editors now use on the Internet repeat predefined their default."},{delay:300,thumbnail:X9,category:"SEO Marketing",date:"30 Apr, 2023",title:"Inventory management trends made easy",details:"Many desktop publishing packages and web page editors now use on the Internet repeat predefined their default."},{delay:350,thumbnail:Z9,category:"Collaboration",date:"12 Jun, 2023",title:"Manage your team virtually and simply",details:"Many desktop publishing packages and web page editors now use on the Internet repeat predefined their default."},{delay:400,thumbnail:J9,category:"Newsletter",date:"03 AUG, 2023",title:"How business automation can improve customer service",details:"Many desktop publishing packages and web page editors now use on the Internet repeat predefined their default."},{delay:450,thumbnail:q9,category:"Invoice",date:"12 Jun, 2023",title:"Make your website ranking in top ten",details:"Many desktop publishing packages and web page editors now use on the Internet repeat predefined their default."}],K9=Y.div`
  padding-top: 10px;

  .staco-pagination-list {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    li {
      min-height: 50px;
      min-width: 50px;
      border-radius: 50%;
      background: ${({theme:e})=>e.colors.whiteColor};
      border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;

      a {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: ${({theme:e})=>e.fonts.dmSans};
        font-size: 15px;
        font-weight: 500;
        line-height: 30px;
        color: ${({theme:e})=>e.colors.textColor};
        transition: 0.3s;
      }
      &:hover,
      &.active {
        border: 1px solid ${({theme:e})=>e.colors.primary};

        a {
          color: ${({theme:e})=>e.colors.primary};
        }
      }
    }
  }
`,e8="data:image/svg+xml,%3csvg%20width='8'%20height='14'%20viewBox='0%200%208%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2013.1401L0.93%207.07014L7%201.00014'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",t8="data:image/svg+xml,%3csvg%20width='8'%20height='14'%20viewBox='0%200%208%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.929688%201L6.99969%207.07L0.929688%2013.14'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",n8=()=>o.jsx(K9,{children:o.jsx(O,{delay:200,children:o.jsxs("ul",{className:"staco-pagination-list",children:[o.jsx("li",{children:o.jsx(re,{href:"#",children:o.jsx("img",{src:e8,alt:"Prev"})})}),o.jsx("li",{children:o.jsx(re,{href:"#",children:"1"})}),o.jsx("li",{className:"active",children:o.jsx(re,{href:"#",children:"2"})}),o.jsx("li",{children:o.jsx(re,{href:"#",children:"3"})}),o.jsx("li",{children:o.jsx(re,{href:"#",children:o.jsx("img",{src:t8,alt:"Next"})})})]})})}),r8=Y.aside`
  .latest-blog-section {
    padding: 140px 0px;
    .latest-blog-content {
      padding-right: 20px;
    }
  }
  .letest-blog-card {
    background: ${({theme:e})=>e.colors.whiteColor};
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 30px;
  }
  .letest-blog-search-section {
    padding: 30px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    & form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      padding: 10px 15px;
      border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      border-radius: 10px;
      & input {
        border: none;
        outline: none;
        width: 80%;
      }
    }
  }
  .categories-list {
    padding: 22px 30px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    ul {
      padding: 0;
      list-style: none;
      li {
        a {
          font-size: 16px;
          line-height: 36px;
          color: ${({theme:e})=>e.colors.textColor};
          transition: 0.3s;
          &:hover {
            color: ${({theme:e})=>e.colors.primary};
          }
        }
      }
    }
  }
  .recent-post-section {
    padding: 22px 30px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    ul {
      padding: 0;
      list-style: none;
      margin-top: 16px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 20px;
      flex-direction: column;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 19px;
        .recent-post-img {
          min-height: 80px;
          min-width: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 15px;
          img {
            height: 100%;
            width: 100%;
            border-radius: 15px;
            overflow: hidden;
            object-fit: cover;
          }
        }
        .recent-post-text {
          .blog-date {
            font-size: 14px;
            line-height: 20px;
            opacity: 0.8;
            margin-bottom: 8px;
          }
          h5 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 700;
            a {
              transition: 0.4s;
              &:hover {
                color: ${({theme:e})=>e.colors.primary};
              }
            }
          }
        }
      }
    }
  }
  .post-tags-section {
    padding: 22px 30px 30px 30px;
    ul {
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 10px;
      & li {
        border-radius: 25px;
        transition: 0.3s;
        display: inline-block;
        & a {
          font-size: 14px;
          font-style: italic;
          transition: 0.3s;
          height: 45px;
          line-height: 45px;
          background: ${({theme:e})=>e.colors.whiteColor}1a;
          border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
          border-radius: 25px;
          display: block;
          padding: 0 20px;
          &:hover {
            color: ${({theme:e})=>e.colors.primary};
            border: 1px solid ${({theme:e})=>e.colors.primary};
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .latest-blog-section .latest-blog-content {
      padding-right: 0px;
    }
  }
  @media screen and (max-width: 767px) {
    .latest-blog-section {
      padding: 80px 0px 70px;
    }
    .post-tags-section ul li {
      padding: 11px 15px;
    }
  }
`,lc=[{id:1,name:"Marketing",count:3},{id:2,name:"Newsletter",count:12},{id:3,name:"Collaboration",count:5},{id:4,name:"SEO Marketing",count:2},{id:5,name:"Invoice",count:4},{id:6,name:"Help Desk",count:2}],i8="data:image/png;base64,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",o8=""+new URL("recent-post-img2-BcF9_DUu.png",import.meta.url).href,a8=""+new URL("recent-post-img3-DLsT9NMP.png",import.meta.url).href,l8="data:image/png;base64,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",sc=[{id:1,date:"13 MAR, 2023",title:"We are launching the Great Invoice",thumbnail:i8},{id:2,date:"25 MAR, 2023",title:"Inventory management trends made easy",thumbnail:o8},{id:3,date:"06 Apr, 2023",title:"Make your website ranking in top ten",thumbnail:a8},{id:4,date:"30 Aug, 2023",title:"Grow your business with sale funnel",thumbnail:l8}],cc=["seo","email","marketplace","networking","invoice"],s8="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.65%2014.3C11.3227%2014.3%2014.3%2011.3227%2014.3%207.65C14.3%203.97731%2011.3227%201%207.65%201C3.97731%201%201%203.97731%201%207.65C1%2011.3227%203.97731%2014.3%207.65%2014.3Z'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.9996%2015.0001L13.5996%2013.6001'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ng=()=>o.jsx(r8,{children:o.jsx(O,{children:o.jsxs("div",{className:"letest-blog-card",children:[o.jsx("div",{className:"letest-blog-search-section",children:o.jsxs("form",{action:"/",method:"post",children:[o.jsx("input",{type:"search",name:"post-search",id:"post-search",placeholder:"Search here ..."}),o.jsx("button",{children:o.jsx("img",{src:s8,alt:"Search"})})]})}),o.jsx(O,{delay:200,children:o.jsxs("div",{className:"categories-list",children:[o.jsx("h4",{className:"letest-blog-catd-title",children:"Categories"}),o.jsx("ul",{children:lc==null?void 0:lc.map(e=>o.jsx("li",{children:o.jsx(re,{to:"/blog-details",children:`${e.name} (${e.count})`})},e.id))})]})}),o.jsx(O,{delay:250,children:o.jsxs("div",{className:"recent-post-section",children:[o.jsx("h4",{className:"letest-blog-catd-title",children:"Recent Post"}),o.jsx("ul",{children:sc==null?void 0:sc.map(e=>o.jsxs("li",{children:[o.jsx(re,{to:"/blog-details",className:"recent-post-img",children:o.jsx("img",{src:e.thumbnail,alt:"post thumbnail"})}),o.jsxs("div",{className:"recent-post-text",children:[o.jsx("h6",{children:e.date}),o.jsx("h5",{children:o.jsx(re,{to:"/blog-details",children:e.title})})]})]},e.id))})]})}),o.jsx(O,{delay:250,children:o.jsxs("div",{className:"post-tags-section",children:[o.jsx("h4",{className:"letest-blog-catd-title",children:"Post Tags"}),o.jsx("ul",{children:cc==null?void 0:cc.map((e,t)=>o.jsx("li",{children:o.jsx(re,{to:"/blog-details",children:e})},t))})]})})]})})}),c8=()=>o.jsx(W9,{children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row g-4",children:[o.jsxs("div",{className:"col-lg-8",children:[o.jsx("div",{className:"latest-blog-content",children:o.jsx("div",{className:"row",children:ac==null?void 0:ac.map((e,t)=>o.jsx("div",{className:"col-md-6",children:o.jsx(_9,{...e})},t))})}),o.jsx(n8,{})]}),o.jsx("div",{className:"col-lg-4",children:o.jsx(h2,{offsetTop:20,offsetBottom:20,children:o.jsx(ng,{})})})]})})}),d8=()=>o.jsx(ft,{pageTitle:"ARKA - Blog",children:o.jsxs("div",{className:"bg-gray",children:[o.jsx(rn,{variant:"main-header"}),o.jsx(ts,{title:"Latest Blogs"}),o.jsx(c8,{}),o.jsx(Rn,{}),o.jsx(In,{})]})}),u8=Y.section`
  /* Breadcrumb section style start */
  .breadcrumb-section {
    margin-top: 90px;
    padding: 60px 0;
    background-color: ${({theme:e})=>e.colors.bgHero};
    position: relative;
    z-index: 0;

    .shape-img {
      position: absolute;
      z-index: -1;

      &.img-1 {
        bottom: 0;
        left: 4%;
      }

      &.img-2 {
        bottom: 0;
        left: 34%;
      }
    }

    &.blog-details-breadcrumb-section {
      height: 436px;
    }
    &.pricing-plan-breadcrumb-section {
      min-height: 580px;
      padding-top: 95px;
    }
  }
  .breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style: none;
    .breadcrumb-item {
      text-transform: uppercase;
      font-weight: 700;
      color: ${({theme:e})=>e.colors.whiteColor};

      &.active {
        color: ${({theme:e})=>e.colors.whiteColor}b2;
      }

      &:not(:first-child)::before {
        content: ".";
        font-size: 20px;
        margin: 0px 5px;
        color: #6c757d;
      }
    }
  }
  .breadcrumb-sec {
    .breadcrumb-title {
      text-transform: capitalize;
      font-size: 50px;
      color: ${({theme:e})=>e.colors.whiteColor};
      margin-bottom: 0;
      margin-top: 30px;
    }
  }
  .breadcrumb-img {
    text-align: right;
  }
  .blog-details-section {
    margin-top: -110px;
    padding-bottom: 140px;
    position: relative;
    z-index: 111;
  }
  .blog-details-content {
    background: ${({theme:e})=>e.colors.whiteColor};
    border-radius: 15px;
    margin-right: 20px;
    .blog-details-img {
      border-radius: 15px 15px 0px 0px;
      height: 430px;
      width: 100%;
      overflow: hidden;
      margin-bottom: 6px;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
  .blog-details-inner {
    padding: 30px;
    .blog-details-info-list {
      margin-bottom: 27px;
      ul {
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 28px;
        li {
          text-transform: uppercase;
          a {
            color: ${({theme:e})=>e.colors.primary};
          }

          span {
            margin-right: 12px;
          }
        }
      }
    }
    .blog-details-headline {
      font-size: 18px;
      font-weight: 500;
      line-height: 30px;
      color: ${({theme:e})=>e.colors.title};
      margin-bottom: 20px;
    }
    .blog-text-title {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      margin-bottom: 8px;
    }
    .blog-quotation-section {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 28px;
      margin-top: 42px;
      margin-bottom: 47px;
      .quotation-icon {
        min-width: 20px;
        img {
          width: 100%;
        }
      }
      h4 {
        font-weight: 500;
        line-height: 40px;
        font-family: ${({theme:e})=>e.fonts.dmSans};
        font-style: italic;
      }
    }
    .blog-text-list {
      padding: 0;
      list-style: none;
      li {
        position: relative;
        padding-left: 22px;
        padding-bottom: 8px;
        &:last-child {
          padding-bottom: 0;
        }
        &:before {
          content: "";
          height: 8px;
          width: 8px;
          border-radius: 50%;
          background: rgba(0, 206, 201, 0.4);
          position: absolute;
          left: 0px;
          top: 12px;
        }
      }
    }
    .blog-tag-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 47px;
      ul {
        margin-bottom: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 10px;
        li {
          padding: 7px 22px;
          border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
          border-radius: 25px;
          transition: 0.3s;
          &:hover {
            color: ${({theme:e})=>e.colors.primary};
            border: 1px solid ${({theme:e})=>e.colors.primary};
            transition: 0.3s;
          }
        }
      }
      button {
        padding: 8px 21px;
        display: flex;
        align-items: center;
        column-gap: 12px;
        background: ${({theme:e})=>e.colors.blackColor}0d;
        border-radius: 25px;
        color: ${({theme:e})=>e.colors.textColor};
      }
    }
  }
  .blog-previous-next-section {
    margin: 60px 0px;
    margin-bottom: 40px;
    margin-right: 20px;
    .blog-card {
      background: ${({theme:e})=>e.colors.whiteColor};
      border-radius: 15px;
      padding: 18px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 19px;
      margin-bottom: 20px;
      .blog-card-img {
        min-width: 100px;
        min-height: 80px;
        overflow: hidden;
        border-radius: 10px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .blog-card-text {
        max-width: 213px;
        width: 100%;
        a {
          font-size: 15px;
          font-weight: 500;
          line-height: 30px;
          color: ${({theme:e})=>e.colors.primary};
        }
        h6 {
          a {
            font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
            font-size: 15px;
            font-weight: 700;
            line-height: 24px;
            color: ${({theme:e})=>e.colors.title};
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      &.justify-right {
        justify-content: flex-end;
        flex-direction: row-reverse;
        .blog-card-text {
          text-align: right;
          margin-left: auto;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .breadcrumb-section {
      margin-top: 70px;
    }
    .breadcrumb-sec .breadcrumb-title {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 767px) {
    .breadcrumb-img {
      margin-top: 40px;
    }
    .breadcrumb-section.blog-details-breadcrumb-section {
      height: 360px;
    }
    .breadcrumb-sec .breadcrumb-title {
      font-size: 40px;
      margin-top: 5px;
    }
    .breadcrumb-sec .breadcrumb-title br {
      display: none;
    }
  }
  @media screen and (max-width: 374px) {
    h1,
    .breadcrumb-sec .breadcrumb-title {
      font-size: 35px;
      line-height: 50px;
    }
  }
  /* Breadcrumb section style end */

  @media screen and (max-width: 1199px) {
    .blog-details-inner {
      .blog-tag-section {
        ul {
          li {
            padding: 4px 16px;
          }
        }

        button {
          padding: 5px 16px;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    .blog-details-content,
    .blog-previous-next-section,
    .blog-comment-section,
    .comment-writing-section {
      margin-right: 0px;
    }
  }
  @media screen and (max-width: 767px) {
    .blog-details-inner {
      .blog-details-headline {
        font-size: 15px;
        line-height: 26px;
      }
    }
    .blog-details-section {
      padding-bottom: 50px;
    }
    .breadcrumb-section.blog-details-breadcrumb-section {
      height: 360px;
    }
    .blog-details-section {
      margin-top: -80px;
    }
    .blog-details-inner {
      .blog-details-headline {
        font-size: 16px;
        line-height: 28px;
      }

      .blog-quotation-section h4 {
        font-size: 16px;
        line-height: 28px;
      }

      .blog-details-info-list {
        margin-bottom: 15px;

        ul {
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .blog-details-section {
      margin-top: -50px;
    }
  }
`,p8=Y.div`
  /* comment section style start */
  .blog-comment-section {
    background: ${({theme:e})=>e.colors.blackColor}0a;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 60px;
    margin-right: 20px;
    background: ${({theme:e})=>e.colors.whiteColor};
    overflow: hidden;
    h4 {
      padding-left: 30px;
      padding-top: 34px;
    }

    .reply-comment-block {
      padding-left: 80px;
      border-bottom: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      background: #e3e6e8ff;
    }
    .main-comment-block {
      border-bottom: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    }
    .blog-comment-block {
      background: ${({theme:e})=>e.colors.whiteColor};
      padding: 34px 30px 25px 30px;
      .comment-people-section {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 14px;
        .comment-people-img {
          height: 50px;
          width: 50px;
        }
        .comment-people-text {
          span {
            display: block;
          }
          .author-name {
            font-weight: 700;
            color: ${({theme:e})=>e.colors.title};
          }
          .blog-date {
            font-size: 14px;
          }
        }
      }
      .comment-content {
        padding-left: 64px;
        p {
          margin-top: 13px;
          margin-bottom: 16px;
        }
        button {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 9px;
          color: ${({theme:e})=>e.colors.title};
          text-transform: uppercase;
          font-weight: 500;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .blog-comment-section .reply-comment-block {
      padding-left: 40px;
    }
  }
  /* comment section style end */

  /* leave comment section style start */
  .comment-writing-section {
    border-radius: 15px;
    overflow: hidden;
    background: ${({theme:e})=>e.colors.whiteColor};
    padding: 30px;
    margin-right: 20px;
    h4 {
      margin-bottom: 27px;
    }
    .comment-writing-form {
      .comment-writing-input-section {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        margin-bottom: 20px;
        label {
          color: ${({theme:e})=>e.colors.title};
          margin-bottom: 5px;
          text-transform: uppercase;
        }
        input {
          width: 100%;
          height: 50px;
          border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
          border-radius: 10px;
          padding: 10px 15px;
          font-size: 15px;
          font-weight: 500;
          line-height: 30px;
          color: ${({theme:e})=>e.colors.textColor};
        }
        textarea {
          min-height: 120px;
          border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
          border-radius: 10px;
          padding: 10px 15px;
          font-size: 15px;
          font-weight: 500;
          line-height: 30px;
          width: 100%;
          resize: none;
        }
      }
      button {
        margin-top: 10px;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .blog-details-content,
    .blog-previous-next-section,
    .blog-comment-section,
    .comment-writing-section {
      margin-right: 0px;
    }
    .comment-writing-section {
      margin-bottom: 50px;
    }
  }
  /* leave comment section style end */
`,f8="data:image/png;base64,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",h8="data:image/png;base64,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",m8="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAL6UExURUdwTP69r/68r9V8JAgeg+qqnP6+sfGvpOeonPe3rOmpnP22qOipnP67r/29r/y3p+Smmvy6rc95IuqpneeqnOipnPq7sOemmuammf24rPy5q+Wmm+eom/e2qvK0p+mpnc54H/65rPa3qhEidw0mgAkcfSIzZuurnuiomvGypuiom+Onl898KP++r/6/suurm/2/ss56J+qqnM9wIO+vo++vovu/r/CwpOammv29r+6uoeammtB6JrJ1TfWfYOSlmve5rc96Js13Iieon+mpnCcbFOionO2sn+6toOenm+qqnc54IOeom+anmuuqns54Hs13Geurnv67rs12Fvq7r+iom813HM12E/6+svu2qM55Ivu5rPu8sOyrnv27rv2+scx1EPGvofq8sP25q/e1p/m6rv26rPm1qPy9sf23qc55JPu3qf65q++vo/2+svq2qeurn/azps13G/q3qva3q/i4rLKGa/++rvW1qf24qvWypfi2qf66rbGFauqpnfu4q8x1CyUZEq2CaP69sNB6IrOHbPGypf68r/OzpikeF6+EabWJbbSIbO+uodB6JclyDTcqJM11Dfy9sPCxpMx1DTIoIzsuKKh+ZZZxWtB5HOKEEuKpkC0jHXxcSFM9Ms+cgI9sVp53X+qpnNt9ET4zLdB1CL1rDZt0XHhYRopnUoBgTLaPdtKgleSsofmymPu2dHdiXMOHYuueZ9R5ESAXErKEc8KQdNiljG1TQmdQQcaVeXNWQ0s3LFtCNoRjT0Q6NYxxafixWtJ4Ce2snPejY8h0GuGpnuOMKFBFQNZ6Br6OgPagMO60qLdpD+SLHUo9NruFZ8CJbBoSDnVYRbyOcOatmZ13ZNCajLqLb6J5Yqx/boVkUvS+s+qvollJQuCOOKGEe+6eXdCKUfKhNtSEJmdZUsCZkNqahPesgcyMbvSgYvqna9OTecJwFfexoPmrR/axj/qvaOqmiaB3beWmfKRcELhhD8N4MLSCZeiypa97XsiVh6+CcrSDc841PQsAAABDdFJOUwDfkCAekM8QICDPz79gIJCQwOCvcM+fYOCfcKDfYN+AoN+QDxQaB+/v7+9AQO+vQO/AzxCQYEDP4IDfz69g72DfgJA6nNAUAAAEdklEQVRIx4XWd1wTZxgH8AAtWgtSUOuoe3XvPW37AYJCRVOoRGxQkIIQAjTmZOQacniQCWnIKoZAyt5TNri17r1q9957134+fd+7y+VNcujvn/xxzzdPns+bu+d4PJ9MfvSRx+ffqVLlzQ9dPO8m3nUzacFTWVkVFSUlgOTlbd0qe37xtdX9QVFRek8iS029dWI0eVoOn4vEJU+Ept++1k0q3s9CSLJfMJe4cdUqlrR1nazb9cHuNpakp/v7jj0l3E2OqCOoWLreY0l64CQvMSPcTQ4aIlyxf9TuIhIvMyPSTdrMygh3Pv+iPTk5eQMgkkCPOSLdJNLQh5IIZd2udppIkHlmxiDkV+WZPpREqHfHQQLNHPY85qJkTNl3Bm2jfucYSx6YypDbYlDiUKrVdlQcBPNvYMx9TJOVCOHrLUq7w2Gwq2EnpdrcdSyVIsAkSSQJj9FNPEiWRT1kqxpy1FnMZoPFXPc3PJg4miRJEkKpJi95kHftJ63Wy401LVVNVc3jBvMAOEyKGAFJSkiAh3MLQtbyo65YbBqNrZEgiMYawnp2dFjGtDEaKfIkIHM9CL9mtAa3jgxqNJqqIYKwjfRDAo0RJKk4wQ/+Lk+ys6WZJAfP4jjeNIjjw/9Uy5g2kBiLi4un8lYAsjImniUXnU2YTkdiJIZjuKb/rx0ypo3RWFoKSTAYBSWv8nOcTYRWR+KthAbDtKfPqWRMGxEgpYD484IQshoQ/pGqRowkidZLOpzsPzVQWAhIYmpinEhUSiWQN8ub8C8063SYs3UYI/Hq06pCaBJBRCIa+fHivUmU/l+rlqxprdZqz53P28yS1xhzL0LeYEiU/sJ4y9j4SEtztSoXEqlMAQk0AkHpNk5y8cqoYczgIM7n5m4GRipVKCABSCAQbOPdwUE2XSWcNqduIBcllKHILA6ij7lM6rTVm1TQpKFGLhf48Z72JEyb/2zWSzsKClgCTEpiCiTyUOQoEaK/SmA6F2HaKFJSUiDx583kJDs1OAlIARwGGKk0kzZiuTyY+luyZDVLMFLrJmnZ0szMfEU+IGI5uP2f4CAV3ae02t9KaAJMdjYgIIAsAvfLAh/yS8+f6yrLanuP/vxTLt0GEsqIxSHw2epJ9vUcOlHf8HvvHw219YdP/NjZQRMhbcRiam0EMeRtQPZ9XHm4COR4eXlDPfisr/y0swMO4yKzqSfM3SzJ6anc+6Zpo8lkKocxmaCuPdopBQSYLcAwu2kaQ+I/3LvRN0VFh/Z0pFFkS/5s1wP2Lpp8UrSOI0B9tgcQISCL2AU4nb5fjr88USp/EFJt5iHLApIvG+DVNVyp/UoITQi6YKYA8t33aNXrTF6B6f0Wkpu9V2X41wfWMEV0HZVYKm/th8J7WT4U3n3AuxIkms43vgLO042Wxkaz5dHr12/fLwzhWvzPhqHfyxRTych4bg7360XAwljPUlhM5ZmACd9iAhayICODqS8re/Cea74rBbwYtt2VMpiwFx6+/ivZ8iVLl91AZdnSJct9r/8Pf8EqxKuhseoAAAAASUVORK5CYII=",dc=[{avatar:f8,author:"Lisa Harrih",date:"24 FEB, 2023 08:56 PM",text:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",replies:[{avatar:h8,author:"Marina Murtaja",date:"06 MAR, 2023 16:03 AM",text:"If you are going to use a passage of you need to be sure"}]},{avatar:m8,author:"Robert Smith",date:"30 May, 2023 12:50 AM",text:"But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of, you need to be sure there isn't anything."}],Bp="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.93481%201C6.03097%201%202.87109%203.95187%202.87109%207.59173C2.87109%207.79972%202.8791%207.99972%202.9031%208.19971C3.61507%207.73573%204.47103%207.47176%205.399%207.47176C7.8309%207.47176%209.79882%209.31165%209.79882%2011.5836C9.79882%2012.5355%209.44684%2013.4155%208.85486%2014.1115C9.20685%2014.1595%209.56683%2014.1835%209.93481%2014.1835L13.2867%2016.1754C13.8547%2016.5194%2014.5666%2016.0554%2014.4866%2015.3914L14.1746%2012.8635C15.8866%2011.6636%2016.9985%209.75164%2016.9985%207.59173C16.9985%205.13583%2015.5586%202.99193%2013.4147%201.85597'%20stroke='%23111111'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.90393%208.19987C3.6159%207.73589%204.47186%207.47192%205.39982%207.47192C7.83173%207.47192%209.79965%209.31181%209.79965%2011.5837C9.79965%2012.5357%209.44767%2013.4157%208.85569%2014.1116C8.06372%2015.0716%206.80777%2015.6876%205.39982%2015.6876L3.31191%2016.9275C2.95992%2017.1435%202.51194%2016.8475%202.55994%2016.4395L2.75993%2014.8636C1.68797%2014.1197%201%2012.9277%201%2011.5837C1%2011.3437%201.024%2011.1117%201.064%2010.8878'%20stroke='%23111111'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",g8=()=>o.jsxs(p8,{children:[o.jsx(O,{children:o.jsxs("div",{className:"blog-comment-section",children:[o.jsx("h4",{children:"Comments"}),dc==null?void 0:dc.map((e,t)=>{var n;return o.jsxs("div",{className:e.class,children:[o.jsxs("div",{className:"blog-comment-block",children:[o.jsxs("div",{className:"comment-people-section",children:[o.jsx("div",{className:"comment-people-img",children:o.jsx("img",{src:e.avatar,alt:"avatar"})}),o.jsxs("div",{className:"comment-people-text",children:[o.jsx("span",{className:"author-name",children:e.author}),o.jsx("span",{className:"blog-date",children:e.date})]})]}),o.jsxs("div",{className:"comment-content",children:[o.jsx("p",{children:e.text}),o.jsxs("button",{children:[o.jsx("img",{src:Bp,alt:"Reply"}),"Reply"]})]})]}),(n=e.replies)==null?void 0:n.map((r,i)=>o.jsx("div",{className:"reply-comment-block",children:o.jsxs("div",{className:"blog-comment-block",children:[o.jsxs("div",{className:"comment-people-section",children:[o.jsx("div",{className:"comment-people-img",children:o.jsx("img",{src:r.avatar,alt:"avatar"})}),o.jsxs("div",{className:"comment-people-text",children:[o.jsx("span",{className:"author-name",children:r.author}),o.jsx("span",{className:"blog-date",children:r.date})]})]}),o.jsxs("div",{className:"comment-content",children:[o.jsx("p",{children:r.text}),o.jsxs("button",{children:[o.jsx("img",{src:Bp,alt:"Reply"}),"Reply"]})]})]})},i))]},t)})]})}),o.jsx(O,{children:o.jsxs("div",{className:"comment-writing-section",children:[o.jsx("h4",{children:"Leave a Comment"}),o.jsx("div",{className:"comment-writing-form",children:o.jsx("form",{children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-6",children:o.jsxs("div",{className:"comment-writing-input-section",children:[o.jsx("label",{children:"Your Name *"}),o.jsx("input",{type:"text",placeholder:"e.g.  Roe Smith"})]})}),o.jsx("div",{className:"col-md-6",children:o.jsxs("div",{className:"comment-writing-input-section",children:[o.jsx("label",{children:"Email Address *"}),o.jsx("input",{type:"text",placeholder:"e.g.  example@mail.com"})]})}),o.jsx("div",{className:"col-md-12",children:o.jsxs("div",{className:"comment-writing-input-section",children:[o.jsx("label",{children:"Website"}),o.jsx("input",{type:"text",placeholder:"e.g.  website.com"})]})}),o.jsx("div",{className:"col-md-12",children:o.jsxs("div",{className:"comment-writing-input-section",children:[o.jsx("label",{children:"Comment *"}),o.jsx("textarea",{placeholder:"Type your comment"})]})}),o.jsx("div",{className:"col-md-12",children:o.jsx("button",{className:"template-btn primary-bg",children:o.jsxs("span",{className:"btn-inner",children:[o.jsx("span",{className:"btn-normal-text",children:"Submit Comment"}),o.jsx("span",{className:"btn-hover-text",children:"Submit Comment"})]})})})]})})})]})})]}),x8="data:image/svg+xml,%3csvg%20width='16'%20height='18'%20viewBox='0%200%2016%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.9094%206.09093C13.1143%206.09093%2014.0912%205.1141%2014.0912%203.90911C14.0912%202.70413%2013.1143%201.72729%2011.9094%201.72729C10.7044%201.72729%209.72754%202.70413%209.72754%203.90911C9.72754%205.1141%2010.7044%206.09093%2011.9094%206.09093Z'%20stroke='%23444444'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.18182%2011.182C4.3868%2011.182%205.36364%2010.2052%205.36364%209.00018C5.36364%207.79519%204.3868%206.81836%203.18182%206.81836C1.97683%206.81836%201%207.79519%201%209.00018C1%2010.2052%201.97683%2011.182%203.18182%2011.182Z'%20stroke='%23444444'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.9094%2016.2726C13.1143%2016.2726%2014.0912%2015.2957%2014.0912%2014.0908C14.0912%2012.8858%2013.1143%2011.9089%2011.9094%2011.9089C10.7044%2011.9089%209.72754%2012.8858%209.72754%2014.0908C9.72754%2015.2957%2010.7044%2016.2726%2011.9094%2016.2726Z'%20stroke='%23444444'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.07227%2010.0911L10.0177%2013.0002'%20stroke='%23444444'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.0177%205L5.07227%207.90909'%20stroke='%23444444'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",v8="data:image/png;base64,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",y8=""+new URL("blog-next-img-zdc0RtBv.png",import.meta.url).href,b8=""+new URL("blog-details-img-CHWw4fOH.png",import.meta.url).href,w8="data:image/svg+xml,%3csvg%20width='20'%20height='22'%20viewBox='0%200%2020%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.17%207.58003V14.42C19.17%2015.54%2018.57%2016.58%2017.6%2017.15L11.66%2020.58C10.69%2021.14%209.49%2021.14%208.51%2020.58L2.57%2017.15C1.6%2016.59%201%2015.55%201%2014.42V7.58003C1%206.46003%201.6%205.41999%202.57%204.84999L8.51%201.42C9.48%200.86%2010.68%200.86%2011.66%201.42L17.6%204.84999C18.57%205.41999%2019.17%206.45003%2019.17%207.58003Z'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.0898%2010.0001C11.3766%2010.0001%2012.4198%208.95687%2012.4198%207.67004C12.4198%206.38322%2011.3766%205.34009%2010.0898%205.34009C8.80294%205.34009%207.75977%206.38322%207.75977%207.67004C7.75977%208.95687%208.80294%2010.0001%2010.0898%2010.0001Z'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.0898%2015.6601C14.0898%2013.8601%2012.2998%2012.4001%2010.0898%2012.4001C7.87984%2012.4001%206.08984%2013.8601%206.08984%2015.6601'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",C8="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.3701%207.87988H16.6201'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.37988%207.87988L6.12988%208.62988L8.37988%206.37988'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.3701%2014.8799H16.6201'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.37988%2014.8799L6.12988%2015.6299L8.37988%2013.3799'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%2021H14C19%2021%2021%2019%2021%2014V8C21%203%2019%201%2014%201H8C3%201%201%203%201%208V14C1%2019%203%2021%208%2021Z'%20stroke='%23999999'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",k8="data:image/svg+xml,%3csvg%20width='20'%20height='22'%20viewBox='0%200%2020%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.75%204.5C5.34%204.5%205%204.16%205%203.75V0.75C5%200.34%205.34%200%205.75%200C6.16%200%206.5%200.34%206.5%200.75V3.75C6.5%204.16%206.16%204.5%205.75%204.5Z'%20fill='%23999999'/%3e%3cpath%20d='M13.75%204.5C13.34%204.5%2013%204.16%2013%203.75V0.75C13%200.34%2013.34%200%2013.75%200C14.16%200%2014.5%200.34%2014.5%200.75V3.75C14.5%204.16%2014.16%204.5%2013.75%204.5Z'%20fill='%23999999'/%3e%3cpath%20d='M6.25%2013.2498C6.12%2013.2498%205.99%2013.2198%205.87%2013.1698C5.74%2013.1198%205.64%2013.0498%205.54%2012.9598C5.36%2012.7698%205.25%2012.5198%205.25%2012.2498C5.25%2012.1198%205.28%2011.9898%205.33%2011.8698C5.38%2011.7498%205.45%2011.6398%205.54%2011.5398C5.64%2011.4498%205.74%2011.3798%205.87%2011.3298C6.23%2011.1798%206.68%2011.2598%206.96%2011.5398C7.14%2011.7298%207.25%2011.9898%207.25%2012.2498C7.25%2012.3098%207.24%2012.3798%207.23%2012.4498C7.22%2012.5098%207.2%2012.5698%207.17%2012.6298C7.15%2012.6898%207.12%2012.7498%207.08%2012.8098C7.05%2012.8598%207%2012.9098%206.96%2012.9598C6.77%2013.1398%206.51%2013.2498%206.25%2013.2498Z'%20fill='%23999999'/%3e%3cpath%20d='M9.75%2013.2499C9.62%2013.2499%209.49%2013.2199%209.37%2013.1699C9.24%2013.1199%209.14%2013.0499%209.04%2012.9599C8.86%2012.7699%208.75%2012.5199%208.75%2012.2499C8.75%2012.1199%208.78%2011.9899%208.83%2011.8699C8.88%2011.7499%208.95%2011.6399%209.04%2011.5399C9.14%2011.4499%209.24%2011.3799%209.37%2011.3299C9.73%2011.1699%2010.18%2011.2599%2010.46%2011.5399C10.64%2011.7299%2010.75%2011.9899%2010.75%2012.2499C10.75%2012.3099%2010.74%2012.3799%2010.73%2012.4499C10.72%2012.5099%2010.7%2012.5699%2010.67%2012.6299C10.65%2012.6899%2010.62%2012.7499%2010.58%2012.8099C10.55%2012.8599%2010.5%2012.9099%2010.46%2012.9599C10.27%2013.1399%2010.01%2013.2499%209.75%2013.2499Z'%20fill='%23999999'/%3e%3cpath%20d='M13.25%2013.2499C13.12%2013.2499%2012.99%2013.2199%2012.87%2013.1699C12.74%2013.1199%2012.64%2013.0499%2012.54%2012.9599C12.5%2012.9099%2012.46%2012.8599%2012.42%2012.8099C12.38%2012.7499%2012.35%2012.6899%2012.33%2012.6299C12.3%2012.5699%2012.28%2012.5099%2012.27%2012.4499C12.26%2012.3799%2012.25%2012.3099%2012.25%2012.2499C12.25%2011.9899%2012.36%2011.7299%2012.54%2011.5399C12.64%2011.4499%2012.74%2011.3799%2012.87%2011.3299C13.24%2011.1699%2013.68%2011.2599%2013.96%2011.5399C14.14%2011.7299%2014.25%2011.9899%2014.25%2012.2499C14.25%2012.3099%2014.24%2012.3799%2014.23%2012.4499C14.22%2012.5099%2014.2%2012.5699%2014.17%2012.6299C14.15%2012.6899%2014.12%2012.7499%2014.08%2012.8099C14.05%2012.8599%2014%2012.9099%2013.96%2012.9599C13.77%2013.1399%2013.51%2013.2499%2013.25%2013.2499Z'%20fill='%23999999'/%3e%3cpath%20d='M6.25%2016.7502C6.12%2016.7502%205.99%2016.7202%205.87%2016.6702C5.75%2016.6202%205.64%2016.5502%205.54%2016.4602C5.36%2016.2702%205.25%2016.0102%205.25%2015.7502C5.25%2015.6202%205.28%2015.4902%205.33%2015.3702C5.38%2015.2402%205.45%2015.1302%205.54%2015.0402C5.91%2014.6702%206.59%2014.6702%206.96%2015.0402C7.14%2015.2302%207.25%2015.4902%207.25%2015.7502C7.25%2016.0102%207.14%2016.2702%206.96%2016.4602C6.77%2016.6402%206.51%2016.7502%206.25%2016.7502Z'%20fill='%23999999'/%3e%3cpath%20d='M9.75%2016.7502C9.49%2016.7502%209.23%2016.6402%209.04%2016.4602C8.86%2016.2702%208.75%2016.0102%208.75%2015.7502C8.75%2015.6202%208.78%2015.4902%208.83%2015.3702C8.88%2015.2402%208.95%2015.1302%209.04%2015.0402C9.41%2014.6702%2010.09%2014.6702%2010.46%2015.0402C10.55%2015.1302%2010.62%2015.2402%2010.67%2015.3702C10.72%2015.4902%2010.75%2015.6202%2010.75%2015.7502C10.75%2016.0102%2010.64%2016.2702%2010.46%2016.4602C10.27%2016.6402%2010.01%2016.7502%209.75%2016.7502Z'%20fill='%23999999'/%3e%3cpath%20d='M13.25%2016.7499C12.99%2016.7499%2012.73%2016.6399%2012.54%2016.4599C12.45%2016.3699%2012.38%2016.2599%2012.33%2016.1299C12.28%2016.0099%2012.25%2015.8799%2012.25%2015.7499C12.25%2015.6199%2012.28%2015.4899%2012.33%2015.3699C12.38%2015.2399%2012.45%2015.1299%2012.54%2015.0399C12.77%2014.8099%2013.12%2014.6999%2013.44%2014.7699C13.51%2014.7799%2013.57%2014.7999%2013.63%2014.8299C13.69%2014.8499%2013.75%2014.8799%2013.81%2014.9199C13.86%2014.9499%2013.91%2014.9999%2013.96%2015.0399C14.14%2015.2299%2014.25%2015.4899%2014.25%2015.7499C14.25%2016.0099%2014.14%2016.2699%2013.96%2016.4599C13.77%2016.6399%2013.51%2016.7499%2013.25%2016.7499Z'%20fill='%23999999'/%3e%3cpath%20d='M18.25%208.58984H1.25C0.84%208.58984%200.5%208.24984%200.5%207.83984C0.5%207.42984%200.84%207.08984%201.25%207.08984H18.25C18.66%207.08984%2019%207.42984%2019%207.83984C19%208.24984%2018.66%208.58984%2018.25%208.58984Z'%20fill='%23999999'/%3e%3cpath%20d='M13.75%2021.5H5.75C2.1%2021.5%200%2019.4%200%2015.75V7.25C0%203.6%202.1%201.5%205.75%201.5H13.75C17.4%201.5%2019.5%203.6%2019.5%207.25V15.75C19.5%2019.4%2017.4%2021.5%2013.75%2021.5ZM5.75%203C2.89%203%201.5%204.39%201.5%207.25V15.75C1.5%2018.61%202.89%2020%205.75%2020H13.75C16.61%2020%2018%2018.61%2018%2015.75V7.25C18%204.39%2016.61%203%2013.75%203H5.75Z'%20fill='%23999999'/%3e%3c/svg%3e",j8="data:image/svg+xml,%3csvg%20width='20'%20height='95'%20viewBox='0%200%2020%2095'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='25'%20width='20'%20height='70'%20rx='10'%20fill='%23F7578C'/%3e%3cpath%20d='M0%200V15L7.5%207.5V0H0Z'%20fill='%23F7578C'/%3e%3cpath%20d='M12.5%200V15L20%207.5V0H12.5Z'%20fill='%23F7578C'/%3e%3c/svg%3e",A8=""+new URL("blog-details-sub-img1-B9fGwTU5.png",import.meta.url).href,S8=""+new URL("blog-details-sub-img2-DL5u_p-U.png",import.meta.url).href,N8=()=>o.jsxs(u8,{children:[o.jsxs("section",{className:"breadcrumb-section blog-details-breadcrumb-section",children:[o.jsxs("div",{className:"bg-shape",children:[o.jsx("div",{className:"shape-img img-1",children:o.jsx(O,{children:o.jsx("img",{src:m2,alt:"shape"})})}),o.jsx("div",{className:"shape-img img-2",children:o.jsx(O,{children:o.jsx("img",{src:g2,alt:"shape"})})})]}),o.jsx("div",{className:"container",children:o.jsx("div",{className:"row align-items-center",children:o.jsx("div",{className:"col-md-12",children:o.jsx(O,{children:o.jsxs("div",{className:"breadcrumb-content",children:[o.jsx("nav",{"aria-label":"breadcrumb",children:o.jsxs("ul",{className:"breadcrumb breadcrumb-list",children:[o.jsx("li",{className:"breadcrumb-item",children:o.jsx(re,{to:"/",children:"Home"})}),o.jsx("li",{className:"breadcrumb-item",children:o.jsx(re,{to:"/blog",children:"Latest Blogs"})}),o.jsx("li",{className:"breadcrumb-item active",children:"Blog Details"})]})}),o.jsx("div",{className:"breadcrumb-sec",children:o.jsxs("h1",{className:"breadcrumb-title",children:["We are launching the Great ",o.jsx("br",{}),"Invoice solution"]})})]})})})})})]}),o.jsx("section",{className:"blog-details-section",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row",children:[o.jsxs("div",{className:"col-lg-8",children:[o.jsxs("div",{className:"blog-details-content",children:[o.jsx(O,{children:o.jsx("div",{className:"blog-details-img",children:o.jsx("img",{src:b8,alt:"img"})})}),o.jsxs("div",{className:"blog-details-inner",children:[o.jsx("div",{className:"blog-details-info-list",children:o.jsx(O,{children:o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("span",{children:o.jsx("img",{src:w8,alt:"icon"})}),"By - ",o.jsx(re,{to:"#",children:"Leo Martiz"})]}),o.jsxs("li",{children:[o.jsx("span",{children:o.jsx("img",{src:C8,alt:"icon"})}),o.jsx(re,{to:"#",children:"Marketing"})]}),o.jsxs("li",{children:[o.jsx("span",{children:o.jsx("img",{src:k8,alt:"icon"})}),"23 Feb, 2022"]})]})})}),o.jsx(O,{children:o.jsx("p",{className:"blog-details-headline",children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock a Latin professor."})}),o.jsx(O,{children:o.jsx("p",{className:"blog-text",children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."})}),o.jsx(O,{children:o.jsx("h5",{className:"blog-text-title mt-5",children:"Grow your business"})}),o.jsx(O,{children:o.jsx("p",{className:"blog-text mb-4",children:"Richard McClintock, a Latin professor at Hampden-Sydney College There are many variations of passages of available, but the majority have suffered alteration in some form."})}),o.jsx(O,{children:o.jsx("p",{className:"blog-text",children:"Injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing. making it over 2000 years old."})}),o.jsx(O,{children:o.jsxs("div",{className:"blog-quotation-section",children:[o.jsx("div",{className:"quotation-icon",children:o.jsx("img",{src:j8,alt:"icon"})}),o.jsx("h4",{children:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure."})]})}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-sm-6 mb-4",children:o.jsx(O,{children:o.jsx("img",{src:A8,alt:"img"})})}),o.jsx("div",{className:"col-sm-6 mb-4",children:o.jsx(O,{children:o.jsx("img",{src:S8,alt:"img"})})})]}),o.jsx(O,{children:o.jsx("h5",{className:"blog-text-title mt-5",children:"Why you should take this plan"})}),o.jsx(O,{children:o.jsx("p",{className:"blog-text",children:"Randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing. making it over 2000 years old. have suffered alteration."})}),o.jsx(O,{children:o.jsxs("ul",{className:"blog-text-list",children:[o.jsx("li",{children:"Unlimited meeting"}),o.jsx("li",{children:"Up to 500 Attendees"}),o.jsx("li",{children:"3 Hours limit"}),o.jsx("li",{children:"10 whiteboards"})]})}),o.jsx(O,{children:o.jsxs("div",{className:"blog-tag-section",children:[o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(re,{to:"#",children:"seo"})}),o.jsx("li",{children:o.jsx(re,{to:"#",children:"marketing"})}),o.jsx("li",{children:o.jsx(re,{to:"#",children:"invoice"})}),o.jsx("li",{children:o.jsx(re,{to:"#",children:"payment"})})]}),o.jsxs("button",{children:[o.jsx("img",{src:x8,alt:"icon"}),"Share"]})]})})]})]}),o.jsx("div",{className:"blog-previous-next-section",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-sm-6",children:o.jsx(O,{children:o.jsxs("div",{className:"blog-card",children:[o.jsx("a",{href:"/blog-details",className:"blog-card-img",children:o.jsx("img",{src:v8,alt:"img"})}),o.jsxs("div",{className:"blog-card-text",children:[o.jsx("a",{href:"/blog-details",children:"Previous"}),o.jsx("h6",{children:o.jsx("a",{href:"/blog-details",children:"Inventory management trends made easy"})})]})]})})}),o.jsx("div",{className:"col-sm-6",children:o.jsx(O,{children:o.jsxs("div",{className:"blog-card justify-right",children:[o.jsx("a",{href:"/blog-details",className:"blog-card-img",children:o.jsx("img",{src:y8,alt:"img"})}),o.jsxs("div",{className:"blog-card-text",children:[o.jsx("a",{href:"/blog-details",children:"Next"}),o.jsx("h6",{children:o.jsx("a",{href:"/blog-details",children:"Make your website ranking in top ten"})})]})]})})})]})}),o.jsx(g8,{})]}),o.jsx("div",{className:"col-lg-4",children:o.jsx(h2,{offsetTop:20,offsetBottom:20,children:o.jsx(ng,{})})})]})})})]}),E8=()=>o.jsx(ft,{pageTitle:"ARKA - Blog Details",children:o.jsxs("div",{className:"bg-gray",children:[o.jsx(rn,{variant:"main-header"}),o.jsx(N8,{}),o.jsx(Rn,{}),o.jsx(In,{})]})});var rg={exports:{}};(function(e,t){(function(r,i){e.exports=i(N)})(typeof self<"u"?self:Un,function(n){return function(r){var i={};function a(l){if(i[l])return i[l].exports;var s=i[l]={i:l,l:!1,exports:{}};return r[l].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=r,a.c=i,a.d=function(l,s,c){a.o(l,s)||Object.defineProperty(l,s,{enumerable:!0,get:c})},a.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},a.t=function(l,s){if(1&s&&(l=a(l)),8&s||4&s&&typeof l=="object"&&l&&l.__esModule)return l;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:l}),2&s&&typeof l!="string")for(var d in l)a.d(c,d,(function(u){return l[u]}).bind(null,d));return c},a.n=function(l){var s=l&&l.__esModule?function(){return l.default}:function(){return l};return a.d(s,"a",s),s},a.o=function(l,s){return Object.prototype.hasOwnProperty.call(l,s)},a.p="",a(a.s=3)}([function(r,i){r.exports=n},function(r,i,a){function l(m){return(l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f})(m)}function s(m,h){if(!(m instanceof h))throw new TypeError("Cannot call a class as a function")}function c(m,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(h&&h.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),h&&d(m,h)}function d(m,h){return(d=Object.setPrototypeOf||function(x,j){return x.__proto__=j,x})(m,h)}function u(m){var h=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var x,j=g(m);if(h){var S=g(this).constructor;x=Reflect.construct(j,arguments,S)}else x=j.apply(this,arguments);return p(this,x)}}function p(m,h){return!h||l(h)!=="object"&&typeof h!="function"?function(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}(m):h}function g(m){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(f){return f.__proto__||Object.getPrototypeOf(f)})(m)}var v=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(i,"__esModule",{value:!0}),i.Background=i.Parallax=void 0;var y=v(a(0)),b=function(m){c(f,m);var h=u(f);function f(){return s(this,f),h.apply(this,arguments)}return f}(y.default.Component);i.Parallax=b;var C=function(m){c(f,m);var h=u(f);function f(){return s(this,f),h.apply(this,arguments)}return f}(y.default.Component);i.Background=C},function(r,i,a){Object.defineProperty(i,"__esModule",{value:!0}),i.canUseDOM=i.getNodeHeight=i.isScrolledIntoView=i.getWindowHeight=void 0,i.getWindowHeight=function(l){if(!l)return 0;var s=window,c=document,d=c.documentElement,u=c.getElementsByTagName("body")[0];return s.innerHeight||d.clientHeight||u.clientHeight},i.isScrolledIntoView=function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,c=arguments.length>2?arguments[2]:void 0;if(!c)return!1;var d=l.getBoundingClientRect().top-s,u=l.getBoundingClientRect().bottom+s;return d<=i.getWindowHeight(c)&&u>=0},i.getNodeHeight=function(l,s){return l?s&&"clientHeight"in s?s.clientHeight:i.getWindowHeight(l):0},i.canUseDOM=function(){return!(typeof window>"u"||!window.document||!window.document.createElement)}},function(r,i,a){var l=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(i,"__esModule",{value:!0}),i.Background=i.Parallax=void 0;var s=l(a(4));i.Parallax=s.default;var c=l(a(7));i.Background=c.default},function(r,i,a){function l(x){return(l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S})(x)}function s(x,j){for(var S=0;S<j.length;S++){var k=j[S];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(x,k.key,k)}}function c(x,j){return(c=Object.setPrototypeOf||function(k,w){return k.__proto__=w,k})(x,j)}function d(x){var j=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var k,w=p(x);if(j){var A=p(this).constructor;k=Reflect.construct(w,arguments,A)}else k=w.apply(this,arguments);return u(this,k)}}function u(x,j){return!j||l(j)!=="object"&&typeof j!="function"?function(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}(x):j}function p(x){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(S){return S.__proto__||Object.getPrototypeOf(S)})(x)}var g=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(i,"__esModule",{value:!0});var v=g(a(0)),y=a(1),b=a(5),C=a(2),m=g(a(6)),h={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},f=function(x){(function(w,A){if(typeof A!="function"&&A!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(A&&A.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),A&&c(w,A)})(S,x);var j=d(S);function S(k){var w;return function(P,R){if(!(P instanceof R))throw new TypeError("Cannot call a class as a function")}(this,S),(w=j.call(this,k)).onWindowResize=function(){w.parentHeight=C.getNodeHeight(w.canUseDOM,w.parent),w.updatePosition()},w.onWindowLoad=function(){w.updatePosition()},w.onScroll=function(){if(w.canUseDOM){var A=Date.now();A-w.timestamp>=10&&C.isScrolledIntoView(w.node,100,w.canUseDOM)&&(window.requestAnimationFrame(w.updatePosition),w.timestamp=A)}},w.onContentMount=function(A){w.content=A},w.updatePosition=function(){if(w.content){var A=!1;w.contentHeight=w.content.getBoundingClientRect().height,w.contentWidth=w.node.getBoundingClientRect().width,w.img&&w.img.naturalWidth/w.img.naturalHeight<w.contentWidth/w.getImageHeight()&&(A=!0);var P=b.getRelativePosition(w.node,w.canUseDOM),R=!!w.img,M=w.bg&&w.state.splitChildren.bgChildren.length>0;R&&w.setImagePosition(P,A),M&&w.setBackgroundPosition(P),R||M||w.setState({percentage:P})}},w.state={bgImage:k.bgImage,bgImageSrcSet:k.bgImageSrcSet,bgImageSizes:k.bgImageSizes,imgStyle:h,bgStyle:Object.assign(Object.assign({},h),k.bgStyle),percentage:0,splitChildren:b.getSplitChildren(k)},w.canUseDOM=C.canUseDOM(),w.node=null,w.content=null,w.bgImageLoaded=!1,w.bgImageRef=void 0,w.parent=k.parent,w.parentHeight=C.getNodeHeight(w.canUseDOM,w.parent),w.timestamp=Date.now(),w.isDynamicBlur=b.getHasDynamicBlur(k.blur),w}return function(w,A,P){return A&&s(w.prototype,A),P&&s(w,P),w}(S,[{key:"componentDidMount",value:function(){var w=this.props.parent,A=this.state,P=A.bgImage,R=A.bgImageSrcSet,M=A.bgImageSizes;this.parent=w||document,this.addListeners(),P?this.loadImage(P,R,M):this.updatePosition()}},{key:"componentDidUpdate",value:function(w){var A=this.props,P=A.parent,R=A.bgImage,M=A.bgImageSrcSet,L=A.bgImageSizes,G=this.state.bgImage;w.parent!==P&&(this.removeListeners(this.parent),this.parent=P,P&&this.addListeners()),this.parentHeight=C.getNodeHeight(this.canUseDOM,this.parent),G!==R&&this.loadImage(R,M,L)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(w){var A=this.props,P=A.disabled,R=A.strength,M=Object.assign({},this.state.bgStyle);if(!P){var L="translate3d(-50%, ".concat((R<0?R:0)-R*w,"px, 0)");M.WebkitTransform=L,M.transform=L}this.setState({bgStyle:M,percentage:w})}},{key:"setImagePosition",value:function(w){var A=arguments.length>1&&arguments[1]!==void 0&&arguments[1],P=this.props,R=P.disabled,M=P.strength,L=P.blur,G=A?"auto":"".concat(this.getImageHeight(),"px"),te=A?"".concat(this.contentWidth,"px"):"auto",q=Object.assign(Object.assign({},this.state.imgStyle),{height:G,width:te});if(!R){var le=M<0,T=(le?M:0)-M*w,U="translate3d(-50%, ".concat(T,"px, 0)"),H="none";L&&(H="blur(".concat(b.getBlurValue(this.isDynamicBlur,L,w),"px)")),q.WebkitTransform=U,q.transform=U,q.WebkitFilter=H,q.filter=H}this.setState({imgStyle:q,percentage:w})}},{key:"getImageHeight",value:function(){var w=this.props.strength,A=(w<0?2.5:1)*Math.abs(w);return Math.floor(this.contentHeight+A)}},{key:"loadImage",value:function(w,A,P){var R=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(M){R.setState({bgImage:w,bgImageSrcSet:A,bgImageSizes:P},function(){return R.updatePosition()}),R.props.onLoad&&R.props.onLoad(M)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=w,this.bgImageRef.srcset=A||"",this.bgImageRef.sizes=P||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(w){this.canUseDOM&&(w&&w.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var w=this,A=this.props,P=A.className,R=A.style,M=A.bgClassName,L=A.contentClassName,G=A.bgImageAlt,te=A.renderLayer,q=A.bgImageStyle,le=A.lazy,T=this.state,U=T.bgImage,H=T.bgImageSrcSet,K=T.bgImageSizes,Z=T.percentage,I=T.imgStyle,B=T.bgStyle,$=T.splitChildren;return v.default.createElement("div",{className:"react-parallax ".concat(P),style:Object.assign({position:"relative",overflow:"hidden"},R),ref:function(_){w.node=_}},U?v.default.createElement("img",{className:M,src:U,srcSet:H,sizes:K,ref:function(_){w.img=_},alt:G,style:Object.assign(Object.assign({},I),q),loading:le?"lazy":"eager"}):null,te?te(-(Z-1)):null,$.bgChildren.length>0?v.default.createElement("div",{className:"react-parallax-background-children",ref:function(_){w.bg=_},style:B},$.bgChildren):null,v.default.createElement(m.default,{onMount:this.onContentMount,className:L},$.children))}}],[{key:"getDerivedStateFromProps",value:function(w){return{splitChildren:b.getSplitChildren(w)}}}]),S}(y.Parallax);f.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},i.default=f},function(r,i,a){function l(d){return(l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p})(d)}Object.defineProperty(i,"__esModule",{value:!0}),i.setBlur=i.getBlurValue=i.getHasDynamicBlur=i.getSplitChildren=i.getRelativePosition=i.getPercentage=void 0;var s=a(0),c=a(2);i.getPercentage=function(d,u,p){return(p-d)/(u-d)||0},i.getRelativePosition=function(d,u){if(!u)return 0;var p=d.getBoundingClientRect(),g=p.top,v=p.height,y=c.getNodeHeight(u),b=v>y?v:y,C=Math.round(g>b?b:g);return i.getPercentage(0,b,C)},i.getSplitChildren=function(d){var u=[],p=s.Children.toArray(d.children);return p.forEach(function(g,v){var y=g;y.type&&y.type.isParallaxBackground&&(u=u.concat(p.splice(v,1)))}),{bgChildren:u,children:p}},i.getHasDynamicBlur=function(d){return l(d)==="object"&&d.min!==void 0&&d.max!==void 0},i.getBlurValue=function(d,u,p){return d?u.min+(1-p)*u.max:u},i.setBlur=function(d,u){d.style.webkitFilter="blur(".concat(u,"px)"),d.style.filter="blur(".concat(u,"px)")}},function(r,i,a){var l=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(i,"__esModule",{value:!0});var s=l(a(0));i.default=function(d){var u=d.children,p=d.onMount,g=d.className;return s.default.createElement("div",{ref:function(y){return p(y)},className:g||"react-parallax-content",style:{position:"relative"}},u)}},function(r,i,a){function l(C){return(l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h})(C)}function s(C,m){if(!(C instanceof m))throw new TypeError("Cannot call a class as a function")}function c(C,m){for(var h=0;h<m.length;h++){var f=m[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(C,f.key,f)}}function d(C,m){return(d=Object.setPrototypeOf||function(f,x){return f.__proto__=x,f})(C,m)}function u(C){var m=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var f,x=g(C);if(m){var j=g(this).constructor;f=Reflect.construct(x,arguments,j)}else f=x.apply(this,arguments);return p(this,f)}}function p(C,m){return!m||l(m)!=="object"&&typeof m!="function"?function(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}(C):m}function g(C){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(h){return h.__proto__||Object.getPrototypeOf(h)})(C)}var v=this&&this.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(i,"__esModule",{value:!0});var y=v(a(0)),b=function(C){(function(x,j){if(typeof j!="function"&&j!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(j&&j.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),j&&d(x,j)})(h,C);var m=u(h);function h(){return s(this,h),m.apply(this,arguments)}return function(x,j,S){return j&&c(x.prototype,j),x}(h,[{key:"render",value:function(){var x=this.props,j=x.className,S=x.children;return y.default.createElement("div",{className:"react-parallax-background ".concat(j)},S)}}]),h}(a(1).Background);b.defaultProps={className:""},b.isParallaxBackground=!0,i.default=b}])})})(rg);var P8=rg.exports;const L8=Y.section`
  /*-- index2-statistics-section start --*/
  .index2-statistics-section {
    background: transparent;
    border-top: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    border-bottom: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    height: auto;
    margin-bottom: 135px;
    margin-top: 135px;
    position: relative;
    z-index: 0;
    & .index2-statistics-content {
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100%;
      padding: 77.5px 0;
      position: relative;
      z-index: 0;
    }
    .react-parallax-bgimage {
      width: auto !important;
    }
  }
  .statistics-text {
    & h2 {
      color: ${({theme:e})=>e.colors.primary};
    }
    & p {
      font-size: 18px;
      font-weight: 500;
      line-height: 40px;
      color: ${({theme:e})=>e.colors.title};
    }
    &.v6 {
      h2,
      p {
        color: ${({theme:e})=>e.colors.v6templateColor};
      }
    }
  }
  /*-- index2-statistics-section End --*/
  @media screen and (max-width: 1199px) {
    .index2-statistics-section {
      min-height: auto;
    }
    .index2-statistics-section .index2-statistics-content {
      min-height: auto;
      padding: 60px 20px;
    }
    .statistics-text h2 {
      font-size: 30px;
      line-height: 35px;
    }
  }
  @media screen and (max-width: 767px) {
    /*-- brands-section End --*/
    .index2-statistics-section {
      margin-bottom: 70px;
    }
  }
  @media screen and (max-width: 575px) {
    .statistics-text {
      text-align: center;
    }
  }
`,O8=""+new URL("vector-map-CSE3vr5l.svg",import.meta.url).href,T8=({parallaxTextClass:e})=>{const t=N.useRef(null);return N.useEffect(()=>{let n=0;function r(){n==0&&document.querySelectorAll(".counter").forEach(l=>{var s=l.innerText;l.innerText="0";const c=()=>{let d=+l.getAttribute("datatarget");d>999&&(d=d/1e3),s=+l.innerText;let u=d/1e3;s<d&&(l.innerText=`${Math.ceil(s+u)}`,setTimeout(c,1))};c()})}const i=()=>{if(!t.current)return;const a=window.scrollY,l=t.current.offsetTop-400;a>l&&a<l+window.innerHeight?(r(),n++):n=0};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),o.jsx(L8,{ref:t,children:o.jsx(P8.Parallax,{className:"index2-statistics-section",bgImage:O8,bgImageAlt:"map",strength:200,children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"index2-statistics-content",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-lg-5 col-md-4 md-mb-30",children:o.jsx(O,{delay:200,children:o.jsxs("div",{className:`statistics-text ${e}`,children:[o.jsx("h2",{children:o.jsx("span",{className:"counter",datatarget:"200",children:"200"})}),o.jsx("p",{children:"Countries Worldwide"})]})})}),o.jsx("div",{className:"col-lg-4 col-md-4 md-mb-30",children:o.jsx(O,{delay:230,children:o.jsxs("div",{className:`statistics-text ${e}`,children:[o.jsxs("h2",{children:[o.jsx("span",{className:"counter",datatarget:"156",children:"156"}),"K"]}),o.jsx("p",{children:"Registered User"})]})})}),o.jsx("div",{className:"col-lg-3 col-md-4",children:o.jsx(O,{delay:260,children:o.jsxs("div",{className:`statistics-text ${e}`,children:[o.jsxs("h2",{children:[o.jsx("span",{className:"counter",datatarget:"23",children:"23"}),"K"]}),o.jsx("p",{children:"Small & Big Companies"})]})})})]})})})})})},I8=Y.section`
  padding: 140px 0 0;
  .users-list {
    margin-bottom: 13px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    padding: 0px;
    li {
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ffffff;
      margin-left: -6px;
      height: 36px;
      width: 36px;
      border: 2px solid ${({theme:e})=>e.colors.borderColor2};
      &:nth-child(1) {
        margin: 0px;
      }
      button {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: rgba(0, 149, 255, 0.3019607843);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
      }
    }
  }

  .customer-content {
    &-text {
      h2 {
        margin-bottom: 37px;
      }
      p {
        margin-bottom: 15px;
      }
      .text-link {
        margin-top: 40px;
      }
    }
  }

  @media screen and (max-width: 991px) {
    margin-bottom: -30px;
    padding-bottom: 0;
    .customer-content{
      margin-top: 40px;
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: -40px;
    padding-bottom: 0;
    padding-top: 80px;
    .customer-content{
      margin-top: 30px;
    }

    .customer-content-text h2 {
      margin-bottom: 18px;
      font-size: 32px;
      font-weight: 700;
      line-height: 45px;
    }
    .customer-content-text p {
      margin-bottom: 15px;
    }
    .customer-content-text .text-link {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 575px) {
    padding: 60px 0 0 0;
    margin-bottom: -50px;
  }

  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
`,R8="data:image/png;base64,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",M8="data:image/png;base64,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",z8="data:image/png;base64,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",B8=[R8,M8,z8],D8=""+new URL("customer-img-DFG5jztA.svg",import.meta.url).href,U8="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='5'%20width='12'%20height='2'%20fill='%230095FF'/%3e%3crect%20x='7'%20width='12'%20height='2'%20transform='rotate(90%207%200)'%20fill='%230095FF'/%3e%3c/svg%3e",F8=()=>o.jsx(I8,{children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row align-items-center",children:[o.jsx("div",{className:"col-lg-5",children:o.jsx("div",{className:"customer-img",children:o.jsx(O,{delay:200,children:o.jsx("img",{src:D8,alt:"customer-img"})})})}),o.jsx("div",{className:"col-lg-7",children:o.jsx(O,{delay:250,children:o.jsxs("div",{className:"customer-content",children:[o.jsxs("ul",{className:"users-list",children:[B8.map((e,t)=>o.jsx("li",{children:o.jsx("a",{href:"#",children:o.jsx("img",{src:e,alt:`user-img-${t}`})})},t)),o.jsx("li",{children:o.jsx("button",{children:o.jsx("img",{src:U8,alt:"add-user"})})})]}),o.jsxs("div",{className:"customer-content-text",children:[o.jsx(ui,{children:o.jsx("div",{className:"section-title",children:o.jsxs("h2",{className:"title mb-0",children:["People using",o.jsx("span",{className:"marketing-badge",children:"Starco"})," with full satisfaction"]})})}),o.jsx("p",{children:"We use as filler text for layouts, non-readability is of great importancebut because those who do not know how to pursue pleasure."}),o.jsx("p",{children:"Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain. know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves."}),o.jsxs("a",{href:"#",className:"text-link",children:[o.jsx("span",{children:"View Case Studies"}),o.jsx(Wm,{})]})]})]})})})]})})}),H8=Y.section`
  padding: 0;
  .about-feature-title {
    margin-bottom: 50px;
    h3 {
      margin-bottom: 17px;
      font-weight: 700;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${({theme:e})=>e.colors.primary};
    }
  }

  .about-feature-tab {
    .react-tabs__tab-list {
      margin: 0 0 45px;
      border-bottom: 0;
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .react-tabs__tab {
      padding: 10px 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      border-radius: 26px;
      font-weight: 700;
      color: ${({theme:e})=>e.colors.blackColor};
      transition: 0.3s;

      &--selected {
        border: 1px solid #e7f1fc;
        background-color: #e7f1fc;
        color: ${({theme:e})=>e.colors.primary};
      }
    }

    .about-feature-tab-content {
      h4 {
        margin-bottom: 20px;
        color: ${({theme:e})=>e.colors.title};
      }
      p {
        color: ${({theme:e})=>e.colors.textColor};
        margin-bottom: 0px;
      }

      .list {
        padding: 0;
        list-style: none;
        margin-top: 40px;
        display: flex;
        align-items: center;
        gap: 75px;
        .list-item {
          display: flex;
          align-items: center;
          gap: 14px;
          img {
            width: 50px;
            height: 50px;
            padding: 15px;
            border: 1px solid ${({theme:e})=>e.colors.primary}4d;
            border-radius: 10px;
          }
          p {
            margin-bottom: 0;
            color: ${({theme:e})=>e.colors.blackColor};
          }
        }
      }
    }
  }

  .about-feature-img {
    position: relative;
    .overlay-item {
      position: absolute;

      &.reduction-time {
        top: 10px;
        left: 0;
      }

      &.success-rate {
        bottom: 30px;
        right: 30px;
      }

      &.wave-shape {
        top: 50%;
        left: -50px;
        transform: translateY(-50%);
      }
    }

    .reduction-time {
      width: 170px;
      height: 90px;
      border-radius: 0 45px 0 0;
      background-color: ${({theme:e})=>e.colors.whiteColor};
      padding: 24px 24px 24px 0;
      &-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      h3 {
        margin-bottom: 10px;
        line-height: 20px;
      }
      p {
        font-size: 13px;
        font-weight: 500;
        line-height: 20px;
      }
    }

    .success-rate {
      width: 170px;
      height: 170px;
      &-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    /* pie progress */
    .pie_progress {
      width: 130px;
      height: 130px;
      margin: auto 0;
      background-color: transparent;
    }

    .pie_progress__label {
      margin-top: 0px;
    }

    .pie_progress__label h3 {
      margin-bottom: 0;
      line-height: 1.1;
      color: ${({theme:e})=>e.colors.blackColor};
    }

    .pie_progress__label p {
      margin: 0;
      font-size: 13px;
      font-weight: 500;
      line-height: 20px;
    }
  }
  /*-- about-feature-section end --*/

  @media screen and (max-width: 1199px) {
    .about-feature-tab .tab-body-list {
      gap: 25px;
    }
  }
  @media screen and (max-width: 991px) {
    .about-feature-img {
      margin-top: 40px;
      width: -moz-fit-content;
      width: fit-content;
    }
    .about-feature-img .success-rate {
      max-width: 130px;
      max-height: 130px;
    }
    .about-feature-img .pie_progress {
      width: 110px;
      height: 110px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .benefits-img-bg .about-feature-img .overlay-item.success-rate {
      bottom: 10px;
      right: 0px;
    }
  }
  @media screen and (max-width: 767px) {
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-title h2 {
      font-size: 36px;
      line-height: 45px;
    }
  }
  @media screen and (max-width: 575px) {
    .about-feature-title {
      margin-bottom: 40px;
    }
    .about-feature-title h3 {
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 30px;
    }
    .about-feature-title h2 {
      font-size: 30px;
      line-height: 50px;
    }
  }
  @media screen and (max-width: 480px) {
    .about-feature-title h2 {
      font-size: 24px;
      line-height: 40px;
    }
    .about-feature-tab .nav.nav-tabs {
      gap: 12px;
    }
    .about-feature-tab .nav.nav-tabs .nav-link {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
    .about-feature-tab .nav.nav-tabs .nav-link .text {
      display: none;
    }
    .about-feature-tab .tab-content {
      margin-top: 40px;
    }
    .about-feature-tab .about-feature-tab-content .list {
      margin-top: 30px;
      gap: 20px;
      flex-direction: column;
      align-items: flex-start;
    }
    .benefits-img-bg .about-feature-img .overlay-item.success-rate {
      bottom: 10px;
      right: 0px;
    }
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
`;function x2(e){return t=>!!t.type&&t.type.tabsRole===e}const Lo=x2("Tab"),ns=x2("TabList"),rs=x2("TabPanel");function $8(e){return Lo(e)||ns(e)||rs(e)}function J0(e,t){return N.Children.map(e,n=>n===null?null:$8(n)?t(n):n.props&&n.props.children&&typeof n.props.children=="object"?N.cloneElement(n,Object.assign({},n.props,{children:J0(n.props.children,t)})):n)}function yl(e,t){return N.Children.forEach(e,n=>{n!==null&&(Lo(n)||rs(n)?t(n):n.props&&n.props.children&&typeof n.props.children=="object"&&(ns(n)&&t(n),yl(n.props.children,t)))})}function ig(e,t,n){let r,i=0,a=0,l=!1;const s=[],c=e[t];return yl(c,d=>{ns(d)&&(d.props&&d.props.children&&typeof d.props.children=="object"&&yl(d.props.children,u=>s.push(u)),l&&(r=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),l=!0),Lo(d)?((!l||s.indexOf(d)===-1)&&(r=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),i++):rs(d)&&a++}),!r&&i!==a&&(r=new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${n}\`. Received ${i} 'Tab' and ${a} 'TabPanel'.`)),r}function V8(e,t,n,r,i){const a=e[t],l=i||t;let s=null;return a&&typeof a!="function"?s=new Error(`Invalid ${r} \`${l}\` of type \`${typeof a}\` supplied to \`${n}\`, expected \`function\`.`):e.selectedIndex!=null&&a==null&&(s=new Error(`The ${r} \`${l}\` is marked as required in \`${n}\`, but its value is \`undefined\` or \`null\`.
\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will make the tabs not do anything, as \`selectedIndex\` indicates that you want to handle the selected tab yourself.
If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`)),s}function W8(e,t,n,r,i){const a=e[t],l=i||t;let s=null;if(a!=null&&typeof a!="number")s=new Error(`Invalid ${r} \`${l}\` of type \`${typeof a}\` supplied to \`${n}\`, expected \`number\`.`);else if(e.defaultIndex!=null&&a!=null)return new Error(`The ${r} \`${l}\` cannot be used together with \`defaultIndex\` in \`${n}\`.
Either remove \`${l}\` to let \`${n}\` handle the selected tab internally or remove \`defaultIndex\` to handle it yourself.`);return s}function og(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=og(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function is(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=og(e))&&(r&&(r+=" "),r+=t);return r}function ag(e){let t=0;return yl(e,n=>{Lo(n)&&t++}),t}const Q8=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function _8(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function lg(e){return e&&"getAttribute"in e}function Dp(e){return lg(e)&&e.getAttribute("data-rttab")}function zn(e){return lg(e)&&e.getAttribute("aria-disabled")==="true"}let bl;function G8(e){const t=e||(typeof window<"u"?window:void 0);try{bl=!!(typeof t<"u"&&t.document&&t.document.activeElement)}catch{bl=!1}}const Y8={className:"react-tabs",focus:!1},X8={children:ig},Z8=e=>{Um.checkPropTypes(X8,e,"prop","UncontrolledTabs");let t=N.useRef([]),n=N.useRef([]);const r=N.useRef();function i(f,x){if(f<0||f>=d())return;const{onSelect:j,selectedIndex:S}=e;j(f,S,x)}function a(f){const x=d();for(let j=f+1;j<x;j++)if(!zn(u(j)))return j;for(let j=0;j<f;j++)if(!zn(u(j)))return j;return f}function l(f){let x=f;for(;x--;)if(!zn(u(x)))return x;for(x=d();x-- >f;)if(!zn(u(x)))return x;return f}function s(){const f=d();for(let x=0;x<f;x++)if(!zn(u(x)))return x;return null}function c(){let f=d();for(;f--;)if(!zn(u(f)))return f;return null}function d(){const{children:f}=e;return ag(f)}function u(f){return t.current[`tabs-${f}`]}function p(){let f=0;const{children:x,disabledTabClassName:j,focus:S,forceRenderTabPanel:k,selectedIndex:w,selectedTabClassName:A,selectedTabPanelClassName:P,environment:R}=e;n.current=n.current||[];let M=n.current.length-d();const L=N.useId();for(;M++<0;)n.current.push(`${L}${n.current.length}`);return J0(x,G=>{let te=G;if(ns(G)){let q=0,le=!1;bl==null&&G8(R);const T=R||(typeof window<"u"?window:void 0);bl&&T&&(le=J.Children.toArray(G.props.children).filter(Lo).some((U,H)=>T.document.activeElement===u(H))),te=N.cloneElement(G,{children:J0(G.props.children,U=>{const H=`tabs-${q}`,K=w===q,Z={tabRef:I=>{t.current[H]=I},id:n.current[q],selected:K,focus:K&&(S||le)};return A&&(Z.selectedClassName=A),j&&(Z.disabledClassName=j),q++,N.cloneElement(U,Z)})})}else if(rs(G)){const q={id:n.current[f],selected:w===f};k&&(q.forceRender=k),P&&(q.selectedClassName=P),f++,te=N.cloneElement(G,q)}return te})}function g(f){const{direction:x,disableUpDownKeys:j,disableLeftRightKeys:S}=e;if(y(f.target)){let{selectedIndex:k}=e,w=!1,A=!1;(f.code==="Space"||f.keyCode===32||f.code==="Enter"||f.keyCode===13)&&(w=!0,A=!1,v(f)),!S&&(f.keyCode===37||f.code==="ArrowLeft")||!j&&(f.keyCode===38||f.code==="ArrowUp")?(x==="rtl"?k=a(k):k=l(k),w=!0,A=!0):!S&&(f.keyCode===39||f.code==="ArrowRight")||!j&&(f.keyCode===40||f.code==="ArrowDown")?(x==="rtl"?k=l(k):k=a(k),w=!0,A=!0):f.keyCode===35||f.code==="End"?(k=c(),w=!0,A=!0):(f.keyCode===36||f.code==="Home")&&(k=s(),w=!0,A=!0),w&&f.preventDefault(),A&&i(k,f)}}function v(f){let x=f.target;do if(y(x)){if(zn(x))return;const j=[].slice.call(x.parentNode.children).filter(Dp).indexOf(x);i(j,f);return}while((x=x.parentNode)!=null)}function y(f){if(!Dp(f))return!1;let x=f.parentElement;do{if(x===r.current)return!0;if(x.getAttribute("data-rttabs"))break;x=x.parentElement}while(x);return!1}const b=Object.assign({},Y8,e),{className:C,domRef:m}=b,h=_8(b,Q8);return J.createElement("div",Object.assign({},h,{className:is(C),onClick:v,onKeyDown:g,ref:f=>{r.current=f,m&&m(f)},"data-rttabs":!0}),p())},J8=["children","defaultFocus","defaultIndex","focusTabOnClick","onSelect"];function q8(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}const K8=0,Sa=1,eC={children:ig,onSelect:V8,selectedIndex:W8},tC={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},nC=e=>e.selectedIndex===null?Sa:K8,sg=e=>{Um.checkPropTypes(eC,e,"prop","Tabs");const t=Object.assign({},tC,e),{children:n,defaultFocus:r,defaultIndex:i,focusTabOnClick:a,onSelect:l}=t,s=q8(t,J8),[c,d]=N.useState(r),[u]=N.useState(nC(s)),[p,g]=N.useState(u===Sa?i||0:null);if(N.useEffect(()=>{d(!1)},[]),u===Sa){const b=ag(n);N.useEffect(()=>{if(p!=null){const C=Math.max(0,b-1);g(Math.min(p,C))}},[b])}const v=(b,C,m)=>{typeof l=="function"&&l(b,C,m)===!1||(a&&d(!0),u===Sa&&g(b))};let y=Object.assign({},e,s);return y.focus=c,y.onSelect=v,p!=null&&(y.selectedIndex=p),delete y.defaultFocus,delete y.defaultIndex,delete y.focusTabOnClick,J.createElement(Z8,y,n)};sg.tabsRole="Tabs";const rC=["children","className"];function iC(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}const oC={className:"react-tabs__tab-list"},cg=e=>{const t=Object.assign({},oC,e),{children:n,className:r}=t,i=iC(t,rC);return J.createElement("ul",Object.assign({},i,{className:is(r),role:"tablist"}),n)};cg.tabsRole="TabList";const aC=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];function lC(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}const uc="react-tabs__tab",sC={className:uc,disabledClassName:`${uc}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${uc}--selected`},dg=e=>{let t=N.useRef();const n=Object.assign({},sC,e),{children:r,className:i,disabled:a,disabledClassName:l,focus:s,id:c,selected:d,selectedClassName:u,tabIndex:p,tabRef:g}=n,v=lC(n,aC);return N.useEffect(()=>{d&&s&&t.current.focus()},[d,s]),J.createElement("li",Object.assign({},v,{className:is(i,{[u]:d,[l]:a}),ref:y=>{t.current=y,g&&g(y)},role:"tab",id:`tab${c}`,"aria-selected":d?"true":"false","aria-disabled":a?"true":"false","aria-controls":`panel${c}`,tabIndex:p||(d?"0":null),"data-rttab":!0}),r)};dg.tabsRole="Tab";const cC=["children","className","forceRender","id","selected","selectedClassName"];function dC(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}const Up="react-tabs__tab-panel",uC={className:Up,forceRender:!1,selectedClassName:`${Up}--selected`},ug=e=>{const t=Object.assign({},uC,e),{children:n,className:r,forceRender:i,id:a,selected:l,selectedClassName:s}=t,c=dC(t,cC);return J.createElement("div",Object.assign({},c,{className:is(r,{[s]:l}),role:"tabpanel",id:`panel${a}`,"aria-labelledby":`tab${a}`}),i||l?n:null)};ug.tabsRole="TabPanel";const pc="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%208.98V8C1%203%203%201%208%201H14C19%201%2021%203%2021%208V14C21%2019%2019%2021%2014%2021H13'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%209.99998L17.01%204.97998H13'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.01%204.97998V8.98998'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10%2015.15V17.85C10%2020.1%209.1%2021%206.85%2021H4.15C1.9%2021%201%2020.1%201%2017.85V15.15C1%2012.9%201.9%2012%204.15%2012H6.85C9.1%2012%2010%2012.9%2010%2015.15Z'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",fc="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.91%205.03003C17.91%206.42003%2019.29%208.63003%2019.57%2011.18'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.44%2011.23C2.7%208.68996%204.06%206.47996%206.04%205.07996'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7.14%2019.8C8.3%2020.39%209.62%2020.72%2011.01%2020.72C12.35%2020.72%2013.61%2020.42%2014.74%2019.87'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.01%206.56C12.5453%206.56%2013.79%205.31535%2013.79%203.78C13.79%202.24465%2012.5453%201%2011.01%201C9.47464%201%208.23%202.24465%208.23%203.78C8.23%205.31535%209.47464%206.56%2011.01%206.56Z'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.78%2018.78C5.31535%2018.78%206.56%2017.5353%206.56%2016C6.56%2014.4646%205.31535%2013.22%203.78%2013.22C2.24465%2013.22%201%2014.4646%201%2016C1%2017.5353%202.24465%2018.78%203.78%2018.78Z'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.12%2018.78C19.6553%2018.78%2020.9%2017.5353%2020.9%2016C20.9%2014.4646%2019.6553%2013.22%2018.12%2013.22C16.5846%2013.22%2015.34%2014.4646%2015.34%2016C15.34%2017.5353%2016.5846%2018.78%2018.12%2018.78Z'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",hr=[{title:"Our Mission",subtitle:"Company Mission",description:"We use as filler text for layouts, non-readability is of great importancebut because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain. combined with a handful of model sentence structures, to generate.",featerList:[{title:"Responsibility and Sustainability",icon:pc},{title:"Competitive Intelligence",icon:fc}]},{title:"Our Vission",subtitle:"Company Vission",description:"We use as filler text for layouts, non-readability is of great importancebut because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain. combined with a handful of model sentence structures, to generate.",featerList:[{title:"Responsibility and Sustainability",icon:pc},{title:"Competitive Intelligence",icon:fc}]},{title:"Our Goal",subtitle:"Company Goal",description:"We use as filler text for layouts, non-readability is of great importancebut because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain. combined with a handful of model sentence structures, to generate.",featerList:[{title:"Responsibility and Sustainability",icon:pc},{title:"Competitive Intelligence",icon:fc}]}],pC=""+new URL("about-feature-EYJbF41R.png",import.meta.url).href,fC="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='96'%20height='37'%20fill='none'%3e%3cpath%20stroke='%23F7578C'%20stroke-linecap='round'%20stroke-width='2'%20d='M79.998%201c3.5%203.867%2011.16%2014.142%2013.811%2024.307%202.762%2011.049-6.629%206.63-9.391%204.972-2.21-1.326-22.65-18.599-32.594-27.07C56.06%207.262%2064.31%2018.348%2063.425%2030.28c-.552%2010.496-9.391%203.867-12.153%201.105S34.146%2012.601%2030.279%207.077c6.63%2010.496%2011.154%2018.915%209.391%2025.964-.552%201.842-2.762%204.64-7.181%201.105C26.965%2029.726%209.287%2013.706%201%203.762'/%3e%3c/svg%3e",hC=()=>o.jsx(H8,{className:"about-feature-section",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-md-12",children:o.jsx(O,{delay:200,children:o.jsx(ui,{children:o.jsxs("div",{className:"section-title md-mb-40",children:[o.jsx("span",{className:"sub-title",children:"About us"}),o.jsxs("h2",{className:"title",children:["Most useful ",o.jsx("span",{className:"marketing-badge",children:"features"}),o.jsx("br",{}),"You must need"]})]})})})})}),o.jsxs("div",{className:"row justify-content-between",children:[o.jsx("div",{className:"col-xxl-5 col-xl-6 col-lg-7",children:o.jsx(O,{children:o.jsx("div",{className:"about-feature-tab",children:o.jsxs(sg,{children:[o.jsx(cg,{children:hr==null?void 0:hr.map((e,t)=>o.jsx(dg,{children:e.title},t))}),hr==null?void 0:hr.map((e,t)=>{var n;return o.jsxs(ug,{className:"about-feature-tab-content",children:[o.jsx("h4",{children:e.subtitle}),o.jsx("p",{children:e.description}),o.jsx("ul",{className:"list",children:(n=e.featerList)==null?void 0:n.map((r,i)=>o.jsx("li",{children:o.jsxs("div",{className:"list-item",children:[o.jsx("img",{src:r.icon,alt:"icon"}),o.jsx("p",{children:r.title})]})},i))})]},t)})]})})})}),o.jsx("div",{className:"col-lg-5",children:o.jsx(O,{children:o.jsxs("div",{className:"about-feature-img",children:[o.jsx("img",{src:pC,alt:"about-feature-img"}),o.jsx("div",{className:"overlay",children:o.jsxs("div",{className:"overlay",children:[o.jsxs("div",{className:"overlay-item reduction-time",children:[o.jsxs("div",{className:"reduction-time-top",children:[o.jsxs("h3",{children:[o.jsx("span",{className:"counter","data-target":40,children:"40"}),"%"]}),o.jsx("img",{src:j7,alt:"star"})]}),o.jsx("p",{children:"Reduction in time"})]}),o.jsxs("div",{className:"overlay-item success-rate",children:[o.jsx("img",{className:"rotate-icon",src:A7,alt:"icon"}),o.jsx("div",{className:"success-rate-content",children:o.jsxs("div",{className:"progress pie_progress",children:[o.jsx(k7,{Text:"Success rate",TextColor:"#444444",Percentage:92,ValueColor:"#000000",PathColor:"#00CEC9",TrailColor:"rgba(0, 206, 201, 0.2)"}),o.jsx("p",{children:"Success rate"})]})})]}),o.jsx("div",{className:"overlay-item wave-shape",children:o.jsx("img",{src:fC,alt:"shape"})})]})})]})})})]})]})}),mC=Y.section`
  padding: 0px 0 110px 0;

  .team-card {
    width: fit-content;
    margin: 0 auto 30px;
    padding: 25px 25px 20px 25px;
    background: ${({theme:e})=>e.colors.whiteColor};
    border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    border-radius: 135px 135px 30px 30px;
    &-img {
      margin-bottom: 25px;
      img {
        max-width: 100%;
        width: 220px;
        height: 220px;
        border-radius: 50%;
      }
    }
    &-info {
      margin-bottom: 20px;
      text-align: center;
      h5 {
        font-weight: 700;
      }
      p {
        color: ${({theme:e})=>e.colors.textColor};
      }
    }
  }

  .team-social-link {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    li a {
      opacity: 0.5;
      transition: 0.3s;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media screen and (max-width: 575px) {
    padding: 30px 0;
  }
`,gC=""+new URL("team1-CvtXDeR1.png",import.meta.url).href,xC=""+new URL("team2-DF8h5MT0.png",import.meta.url).href,vC=""+new URL("team3-Ce-lE-7R.png",import.meta.url).href,yC=""+new URL("team4-BLtDaTtj.png",import.meta.url).href,hc=[{delay:200,name:"Susan Coleman",designation:"Founder",avatar:gC,socialLinks:[{icon:Mi,url:"#"},{icon:zi,url:"#"},{icon:Bi,url:"#"}]},{delay:250,name:"Shirley Maki",designation:"Co Founder",avatar:xC,socialLinks:[{icon:Mi,url:"#"},{icon:zi,url:"#"},{icon:Bi,url:"#"}]},{delay:300,name:"Debra Cavender",designation:"Web Developer",avatar:vC,socialLinks:[{icon:Mi,url:"#"},{icon:zi,url:"#"},{icon:Bi,url:"#"}]},{delay:350,name:"Vicky O. Harrell",designation:"UI Designer",avatar:yC,socialLinks:[{icon:Mi,url:"#"},{icon:zi,url:"#"},{icon:Bi,url:"#"}]}],bC=()=>o.jsx(mC,{children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-md-12",children:o.jsx(O,{delay:250,children:o.jsx(Ht,{title:"Meet the crew",subtitle:"Team members",alignment:"center"})})})}),o.jsx("div",{className:"row",children:hc==null?void 0:hc.map((e,t)=>{var n;return o.jsx("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6",children:o.jsx(O,{delay:e.delay,children:o.jsxs("div",{className:"team-card",children:[o.jsx("div",{className:"team-card-img",children:o.jsx("img",{src:e.avatar,alt:`team-img-${t}`})}),o.jsxs("div",{className:"team-card-info",children:[o.jsx("h5",{children:e.name}),o.jsx("p",{children:e.designation})]}),o.jsx("ul",{className:"team-social-link",children:(n=e.socialLinks)==null?void 0:n.map((r,i)=>o.jsx("li",{children:o.jsx("a",{href:r.url,children:o.jsx("img",{src:r.icon,alt:"social-icon"})})},i))})]})})},t)})})]})}),wC=()=>o.jsxs(ft,{pageTitle:"ARKA - About us",children:[o.jsx(rn,{variant:"main-header"}),o.jsx(ts,{title:"About Us"}),o.jsx(F8,{}),o.jsx(T8,{}),o.jsx(hC,{}),o.jsx(F7,{}),o.jsx(bC,{}),o.jsx(Rn,{}),o.jsx(In,{})]}),CC=Y.section`
  padding: 130px 0 90px 0;

  .service-content {
    margin-bottom: 40px;
    h3 {
      margin-bottom: 8px;
      text-transform: uppercase;
      font-size: 15px;
      line-height: 26px;
      color: ${({theme:e})=>e.colors.primary};
    }
    h2 {
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 0;
    }

    &-title {
      margin-bottom: 19px;
    }

    &-list {
      padding: 0;
      list-style: none;
      li {
        color: ${({theme:e})=>e.colors.textColor};
        padding-left: 20px;
        position: relative;
        &:not(:first-child) {
          margin-top: 10px;
        }
        &::before {
          position: absolute;
          content: "";
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: ${({theme:e})=>e.colors.primary}80;
        }
        &::after {
          position: absolute;
          content: "";
          top: calc(50% + 2px);
          left: 0;
          transform: translateY(-50%) rotate(45deg);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 2px 2px 0 0 ${({theme:e})=>e.colors.primary}4d;
        }
      }
    }

    &.item-1 {
      h3 {
        color: ${({theme:e})=>e.colors.primary};
      }
      .service-content-list li::before {
        background-color: ${({theme:e})=>e.colors.primary}80;
      }
      .service-content-list li::after {
        box-shadow: 2px 2px 0 0 ${({theme:e})=>e.colors.primary}4d;
      }
    }
    &.item-2 {
      h3 {
        color: ${({theme:e})=>e.colors.iconColor2};
      }
      .service-content-list li::before {
        background-color: ${({theme:e})=>e.colors.iconColor2}80;
      }
      .service-content-list li::after {
        box-shadow: 2px 2px 0 0 ${({theme:e})=>e.colors.iconColor2}4d;
      }
    }
    &.item-3 {
      h3 {
        color: ${({theme:e})=>e.colors.badgeColor};
      }
      .service-content-list li::before {
        background-color: ${({theme:e})=>e.colors.badgeColor}80;
      }
      .service-content-list li::after {
        box-shadow: 2px 2px 0 0 ${({theme:e})=>e.colors.badgeColor}4d;
      }
    }
    &.item-4 {
      h3 {
        color: ${({theme:e})=>e.colors.heroimg1Bg};
      }
      .service-content-list li::before {
        background-color: ${({theme:e})=>e.colors.heroimg1Bg}80;
      }
      .service-content-list li::after {
        box-shadow: 2px 2px 0 0 ${({theme:e})=>e.colors.heroimg1Bg}4d;
      }
    }
  }

  @media screen and (max-width: 767px) {
    &.service-section {
      padding: 75px 0 30px 0;
    }
  }
`,kC=[{delay:200,title:"Email Marketing",subtitle1:"Quickly integrate with",subtitle2:"Email APIs",contentList:["Email campaign","Create mail","Email automation","Email analytics","E-commerce campaigns"]},{delay:250,title:"Project management",subtitle1:"Manage project easy",subtitle2:"and fast ever",contentList:["Meeting and chat","Video webinar","Online class storage","Conference rooms","Modernize meeting"]},{delay:300,title:"Team Collaboration",subtitle1:"Connect your team",subtitle2:"virtually",contentList:["Multiple mailboxes","Collaborate teammates","Multichannel communication","Automation","Private notes"]},{delay:350,title:"IT & Delp Desk",subtitle1:"Award-winning customer",subtitle2:"support tool",contentList:["Real-time chat","Recurring checklists","Multiple assignees","Time tracking","Automate repetitive"]}],jC=()=>o.jsx(CC,{className:"service-section",children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"row",children:kC.map((e,t)=>o.jsx("div",{className:"col-lg-3 col-md-6 col-sm-6",children:o.jsx(O,{delay:e.delay,children:o.jsxs("div",{className:`service-content item-${t+1}`,children:[o.jsxs("div",{className:"service-content-title",children:[o.jsx("h3",{children:e.title}),o.jsx("h2",{children:e.subtitle1}),o.jsx("h2",{children:e.subtitle2})]}),o.jsx("ul",{className:"service-content-list",children:e.contentList.map((n,r)=>o.jsx("li",{children:n},r))})]})})},t))})})}),AC=Y.section`
  padding: 112px 0;
  background-color: ${({theme:e})=>e.colors.blueGray};

  .skills-content {
    &-text {
      margin-bottom: 45px;
    }
    h5 {
      margin-bottom: 16px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-weight: 700;
      color: ${({theme:e})=>e.colors.primary};
    }
    h2 {
      color: ${({theme:e})=>e.colors.title};
    }
    p {
      margin-top: 22px;
      color: ${({theme:e})=>e.colors.textColor};
      margin-bottom: 0;
    }
  }
  .progress-inner {
    height: 80%;
    width: 80%;
    margin: 0 auto;
  }
  .skills-status {
    display: flex;
    align-items: center;
    gap: 70px;

    .skills-item {
      text-align: center;
      p {
        margin-top: 18px;
        text-align: center;
        text-transform: uppercase;
        color: ${({theme:e})=>e.colors.title};
      }
    }

    .pie_progress {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      background-color: transparent;
    }

    .pie_progress__label {
      margin-top: 0px;
    }

    .pie_progress__label h4 {
      margin-bottom: 0;
      font-weight: 600;
      color: ${({theme:e})=>e.colors.title};
      letter-spacing: 0.01em;
    }
  }

  @media screen and (max-width: 1850px) {
  }
  @media screen and (max-width: 1699px) {
  }
  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1499px) {
  }
  @media screen and (max-width: 1399px) {
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (min-width: 991px) and (max-width: 1200px) {
  }
  @media screen and (max-width: 991px) {
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    .skills-content {
      &-text {
        margin-bottom: 25px;
      }

      h3 {
        margin-bottom: 10px;
        @include textStyle(16px, 700, 30px);
      }

      h2 {
        @include textStyle(32px, 700, 45px);
      }
    }
  }
  @media screen and (max-width: 575px) {
    padding: 72px 0 80px;
    .skills-status {
      gap: 50px;

      .skills-item {
        text-align: center;

        p {
          margin-top: 18px;
        }
      }

      .pie_progress {
        width: 80px;
        height: 80px;
      }

      .pie_progress__label h4 {
        @include textStyle(16px, 600, 26px);
      }
    }
  }
  @media screen and (max-width: 480px) {
    .skills-status {
      gap: 20px;

      .skills-item {
        text-align: center;
        p {
          margin-top: 15px;
        }
      }
      .pie_progress {
        width: 60px;
        height: 60px;
      }
    }
  }
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
  @media screen and (min-width: 768px) {
  }
`,mc=[{skill:"Wordpress",percentage:96,color:"#0095FF"},{skill:"Javascript",percentage:72,color:"#FEC458"},{skill:"React js",percentage:88,color:"#00CEC9"}],SC=""+new URL("skills-img-OsKJe2Kn.svg",import.meta.url).href,NC=()=>o.jsx(AC,{className:"skills-section",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row align-items-center justify-content-between",children:[o.jsx("div",{className:"col-lg-6",children:o.jsxs("div",{className:"skills-content",children:[o.jsx(O,{delay:200,children:o.jsx(ui,{children:o.jsxs("div",{className:"section-title",children:[o.jsx("span",{className:"sub-title",children:"Our Skills"}),o.jsxs("h2",{className:"title",children:["We’re Innovators ",o.jsx("br",{}),"& Marketing Experts"]}),o.jsx("p",{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. but also the leap into electronic typesetting."})]})})}),o.jsx(O,{delay:250,children:o.jsx("div",{className:"skills-status",children:mc==null?void 0:mc.map((e,t)=>o.jsxs("div",{className:"skills-item",children:[o.jsx("div",{className:"progress-inner",children:o.jsx(s2,{valueStart:0,valueEnd:e.percentage,duration:1.4,easingFunction:Tm,children:n=>o.jsx(Lm,{value:n,text:`${Math.round(n)}%`,strokeWidth:5,styles:Om({textColor:"#000",pathColor:e.color,trailColor:"${({ theme }) => theme.colors.whiteColor}"})})})}),o.jsx("p",{children:e.skill})]},t))})})]})}),o.jsx("div",{className:"col-lg-5",children:o.jsx("div",{className:"skills-img",children:o.jsx(O,{delay:200,children:o.jsx("img",{src:SC,alt:"skills-img"})})})})]})})}),EC=Y.section`
  padding: 130px 0;

  .core-feature-title {
    h3 {
      margin-bottom: 16px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-size: 18px;
      line-height: 30px;
      color: ${({theme:e})=>e.colors.primary};
    }
    p {
      margin-top: 30px;
    }
  }

  .core-feature-actions {
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .core-feature-item {
    margin-bottom: 30px;
    max-width: 88%;
    margin-left: auto;
    &-icon {
      margin-bottom: 30px;
      img {
        width: 72px;
        height: 72px;
      }
    }
    h5 {
      margin-bottom: 10px;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 1199px) {
    .core-feature-item {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 991px) {
    .core-feature-content {
      margin-bottom: 40px;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 60px 0 40px 0px;
    .core-feature-title {
      h3 {
        margin-bottom: 5px;
        @include textStyle(16px, 700, 30px);
      }

      h2 {
        @include textStyle(32px, 700, 45px);
      }
    }
    .core-feature-actions {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
`,PC="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M72%2036.2001C72%2062.2333%2056.1104%2073.3216%2037.2414%2071.8753C27.8069%2071.1522%203.6996e-07%2058.3766%200%2036.2001C-3.6996e-07%2014.0236%2032.4058%201.62031%2037.2414%200.524835C52.1379%20-2.84986%2072%2010.1668%2072%2036.2001Z'%20fill='%230095FF'%20fill-opacity='0.2'/%3e%3cpath%20d='M25.463%2041.0557L30.0244%2045.6171C33.2279%2048.8206%2034.3221%2048.7679%2037.4861%2045.6171L44.8291%2038.274C47.3867%2035.7165%2048.0327%2034.0158%2044.8291%2030.8123L40.2677%2026.2509C36.8533%2022.8365%2035.3636%2023.6934%2032.806%2026.2509L25.463%2033.594C22.3122%2036.758%2022.0485%2037.6412%2025.463%2041.0557Z'%20stroke='%230095FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M45.8046%2042.6772L44.9346%2044.1142C43.7085%2046.1576%2044.6577%2047.8319%2047.0439%2047.8319C49.43%2047.8319%2050.3792%2046.1576%2049.1532%2044.1142L48.2831%2042.6772C47.5976%2041.5435%2046.477%2041.5435%2045.8046%2042.6772Z'%20stroke='%230095FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M23.1294%2036.6789C30.4593%2034.6883%2038.1847%2034.6223%2045.5409%2036.5076L46.2001%2036.6789'%20stroke='%230095FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",LC="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M63.6072%2054.0613C48.0478%2076.0023%2028.5543%2076.0299%2014.1398%2063.7464C6.93259%2057.6046%20-7.94804%2030.5316%205.30621%2011.8411C18.5605%20-6.84934%2052.2136%201.69958%2056.7839%203.61187C70.8631%209.50287%2079.1665%2032.1203%2063.6072%2054.0613Z'%20fill='%23FEC458'%20fill-opacity='0.2'/%3e%3cpath%20d='M33.1373%2042.2724H28.3347C24.0644%2042.2724%2023%2041.208%2023%2036.9377V29.3347C23%2025.0644%2024.0644%2024%2028.3347%2024H41.6779C45.9483%2024%2047.0127%2025.0644%2047.0127%2029.3347'%20stroke='%23FEC458'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M33.1372%2048V42.2725'%20stroke='%23FEC458'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M23%2037.2036H33.1373'%20stroke='%23FEC458'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.0063%2048H33.1373'%20stroke='%23FEC458'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48.3433%2037.0137V44.2492C48.3433%2047.2524%2047.5956%2048%2044.5925%2048H40.0941C37.0909%2048%2036.3433%2047.2524%2036.3433%2044.2492V37.0137C36.3433%2034.0106%2037.0909%2033.2629%2040.0941%2033.2629H44.5925C47.5956%2033.2629%2048.3433%2034.0106%2048.3433%2037.0137Z'%20stroke='%23FEC458'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M42.3173%2043.9197H42.3287'%20stroke='%23FEC458'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",OC="data:image/svg+xml,%3csvg%20width='73'%20height='72'%20viewBox='0%200%2073%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M69.4381%2047.0957C59.49%2071.8846%2040.5587%2076.5494%2023.6621%2068.1738C15.2139%2063.9859%20-5.61885%2041.5075%202.85551%2020.3911C11.3299%20-0.725397%2046.0371%20-0.516549%2050.9275%200.233866C65.9928%202.54558%2079.3863%2022.3068%2069.4381%2047.0957Z'%20fill='%2300CEC9'%20fill-opacity='0.2'/%3e%3cpath%20d='M33.4%2042V34.8L31%2037.2'%20stroke='%2300CEC9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M33.3999%2034.8L35.7999%2037.2'%20stroke='%2300CEC9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M49%2033.6V39.6C49%2045.6%2046.6%2048%2040.6%2048H33.4C27.4%2048%2025%2045.6%2025%2039.6V32.4C25%2026.4%2027.4%2024%2033.4%2024H39.4'%20stroke='%2300CEC9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48.9999%2033.6H44.1999C40.5999%2033.6%2039.3999%2032.4%2039.3999%2028.8V24L48.9999%2033.6Z'%20stroke='%2300CEC9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",TC="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M59.3307%2058.7485C40.4359%2077.7548%2021.1912%2074.5871%208.94457%2060.1563C2.82125%2052.941%20-7.50091%2023.9034%208.59468%207.71282C24.6903%20-8.4778%2056.5278%205.43695%2060.7304%208.06479C73.6768%2016.1601%2078.2256%2039.7421%2059.3307%2058.7485Z'%20fill='%23F7578C'%20fill-opacity='0.2'/%3e%3cpath%20d='M48%2028.6C48%2029.7495%2047.4569%2030.7726%2046.6232%2031.4295C46.0169%2031.9095%2045.2464%2032.2%2044.4%2032.2C42.4043%2032.2%2040.8%2030.5958%2040.8%2028.6C40.8%2027.7537%2041.0906%2026.9958%2041.5706%2026.3768H41.5832C42.2274%2025.5432%2043.2506%2025%2044.4%2025C46.3958%2025%2048%2026.6042%2048%2028.6Z'%20stroke='%23F7578C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M31.2%2028.6C31.2%2030.5958%2029.5958%2032.2%2027.6%2032.2C26.7537%2032.2%2025.9958%2031.9095%2025.3768%2031.4295C24.5432%2030.7726%2024%2029.7495%2024%2028.6C24%2026.6042%2025.6042%2025%2027.6%2025C28.7495%2025%2029.7726%2025.5432%2030.4295%2026.3768C30.9095%2026.9958%2031.2%2027.7537%2031.2%2028.6Z'%20stroke='%23F7578C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48%2045.4C48%2047.3958%2046.3958%2049%2044.4%2049C43.2506%2049%2042.2274%2048.4569%2041.5832%2047.6232H41.5706C41.0906%2047.0169%2040.8%2046.2464%2040.8%2045.4C40.8%2043.4043%2042.4043%2041.8%2044.4%2041.8C45.2464%2041.8%2046.0043%2042.0906%2046.6232%2042.5706V42.5832C47.4569%2043.2274%2048%2044.2506%2048%2045.4Z'%20stroke='%23F7578C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M31.2%2045.4C31.2%2046.2464%2030.9095%2047.0043%2030.4295%2047.6232C29.7726%2048.4695%2028.7495%2049%2027.6%2049C25.6042%2049%2024%2047.3958%2024%2045.4C24%2044.2506%2024.5432%2043.2274%2025.3768%2042.5832V42.5706C25.9832%2042.0906%2026.7537%2041.8%2027.6%2041.8C29.5958%2041.8%2031.2%2043.4043%2031.2%2045.4Z'%20stroke='%23F7578C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48%2037C48%2039.0211%2047.5074%2040.9032%2046.6232%2042.5705C46.0168%2042.0905%2045.2463%2041.8%2044.4%2041.8C42.4042%2041.8%2040.8%2043.4042%2040.8%2045.4C40.8%2046.2463%2041.0905%2047.0042%2041.5705%2047.6232C39.9032%2048.5074%2038.0211%2049%2036%2049C33.9916%2049%2032.0968%2048.5074%2030.4295%2047.6232C30.9095%2047.0168%2031.2%2046.2463%2031.2%2045.4C31.2%2043.4042%2029.5958%2041.8%2027.6%2041.8C26.7537%2041.8%2025.9958%2042.0905%2025.3768%2042.5705C24.4926%2040.9032%2024%2039.0211%2024%2037C24%2034.9916%2024.4926%2033.0968%2025.3768%2031.4295C25.9958%2031.9095%2026.7537%2032.2%2027.6%2032.2C29.5958%2032.2%2031.2%2030.5958%2031.2%2028.6C31.2%2027.7537%2030.9095%2026.9958%2030.4295%2026.3768C32.0968%2025.4926%2033.9916%2025%2036%2025C38.0211%2025%2039.9032%2025.4926%2041.5705%2026.3768C41.0905%2026.9832%2040.8%2027.7537%2040.8%2028.6C40.8%2030.5958%2042.4042%2032.2%2044.4%2032.2C45.2463%2032.2%2046.0042%2031.9095%2046.6232%2031.4295C47.5074%2033.0968%2048%2034.9916%2048%2037Z'%20stroke='%23F7578C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",IC=[{delay:200,iconSrc:PC,title:"Unlimited Colors",description:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default."},{delay:250,iconSrc:LC,title:"Fully Responsive",description:"Desktop publishing packages and web page editors now use as their model and a search."},{delay:300,iconSrc:OC,title:"One Click Demo",description:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default."},{delay:350,iconSrc:TC,title:"Elementor",description:"Desktop publishing packages and web page editors now use as their model and a search."}],RC="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.3%2019H12.7C17.2%2019%2019%2017.2%2019%2012.7V7.3C19%202.8%2017.2%201%2012.7%201H7.3C2.8%201%201%202.8%201%207.3V12.7C1%2017.2%202.8%2019%207.3%2019Z'%20stroke='%23111111'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10%201V19'%20stroke='%23111111'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%207.75H10'%20stroke='%23111111'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10%2012.25H19'%20stroke='%23111111'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",MC="data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30%2060C13.4315%2060%20-5.87108e-07%2046.5685%20-1.31134e-06%2030C-2.03558e-06%2013.4315%2013.4315%202.98917e-06%2030%202.26494e-06L60%209.53596e-07L60%2030C60%2046.5685%2046.5685%2060%2030%2060Z'%20fill='%2300CEC9'/%3e%3cpath%20d='M30%2053C17.2975%2053%207%2042.7026%207%2030C7%2017.2975%2017.2974%207%2030%207C42.7025%207%2053%2017.2975%2053%2030C53%2042.7025%2042.7026%2053%2030%2053Z'%20fill='white'/%3e%3c/svg%3e",zC=()=>{const e=N.useRef(null),t=N.useRef(null);return N.useEffect(()=>{const n=()=>{if(!e.current||!t.current)return;const r=window.scrollY,i=e.current.offsetTop-200;let a=(r-i)/4;a=Math.max(0,Math.min(a,45)),t.current.style.transform=r>i?`rotate(-${a}deg)`:`rotate(${a}deg)`};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),o.jsx(EC,{className:"core-feature-section",ref:e,children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row justify-content-between",children:[o.jsx("div",{className:"col-lg-5",children:o.jsxs("div",{className:"core-feature-content",children:[o.jsx(O,{delay:200,children:o.jsx(ui,{children:o.jsxs("div",{className:"section-title",children:[o.jsx("span",{className:"sub-title",children:"Core feature"}),o.jsxs("h2",{className:"title xl-mb-40 md-mb-20",children:["We Provide",o.jsx("br",{}),"Our Best Service"]}),o.jsx("p",{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. but also the leap into electronic typesetting."})]})})}),o.jsx(O,{delay:250,children:o.jsxs("div",{className:"core-feature-actions",children:[o.jsxs("a",{href:"#",className:"text-link",children:[o.jsx("span",{children:"View Case Studies"}),o.jsx("span",{className:"iconify","data-icon":"akar-icons:arrow-right"})]}),o.jsxs("a",{href:"#",className:"rotate-icon-btn",children:[o.jsx("img",{className:"rotate-icon",src:MC,alt:"layout-icon",ref:t}),o.jsx("span",{className:"icon",children:o.jsx("img",{src:RC,alt:"shape-layout-icon"})})]})]})})]})}),o.jsx("div",{className:"col-lg-7",children:o.jsx("div",{className:"row",children:IC.map((n,r)=>o.jsx("div",{className:"col-md-6",children:o.jsx(O,{delay:n.delay,children:o.jsxs("div",{className:"core-feature-item",children:[o.jsx("div",{className:"core-feature-item-icon",children:o.jsx("img",{src:n.iconSrc,alt:"core-feature-icon"})}),o.jsxs("div",{className:"core-feature-item-text",children:[o.jsx("h5",{children:n.title}),o.jsx("p",{children:n.description})]})]})})},r))})})]})})})},BC=()=>o.jsxs(ft,{pageTitle:"Staco - Our Services",children:[o.jsx(rn,{variant:"main-header"}),o.jsx(ts,{title:"Our Services"}),o.jsx(jC,{}),o.jsx(NC,{}),o.jsx(zC,{}),o.jsx(Rn,{}),o.jsx(In,{})]}),DC=Y.section`
  padding: 130px 0 65px 0;

  .contact-img {
    margin-right: 50px;
    position: relative;
    > img {
      width: 100%;
    }
    .overlay-item {
      position: absolute;

      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &.shape-1 {
        bottom: 130px;
        right: 0;
        .icon {
          img {
            width: 42px;
            height: 36px;
          }
        }
      }
      &.shape-2 {
        bottom: 0;
        left: 186px;
        .icon {
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  .contact-content {
    &-title {
      margin-bottom: 35px;
    }
    h3 {
      margin-bottom: 15px;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${({theme:e})=>e.colors.primary};
    }
  }

  .form-input {
    display: flex;
    flex-direction: column;
    gap: 5px;
    label {
      font-weight: 500;
      font-size: 15px;
      line-height: 30px;
      text-transform: uppercase;
      color: ${({theme:e})=>e.colors.title};
    }
    input,
    textarea {
      border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      border-radius: 10px;
      padding: 10px 15px;
      font-weight: 500;
      font-size: 15px;
      line-height: 28px;
      color: ${({theme:e})=>e.colors.title};
      transition: 0.3s;
    }
    textarea {
      resize: none;
    }
  }

  .form-input-between {
    display: flex;
    align-items: center;
    gap: 30px;
    .form-input {
      width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0 30px 0;

    .contact-content {
      &-title {
        margin-bottom: 20px;
      }

      h3 {
        margin-bottom: 8px;
        font-size: 16px;
      }

      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
  }

  @media screen and (max-width: 575px) {
    .form-input-between {
      gap: 0px;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 480px) {
    .contact-img {
      .overlay-item {
        &.shape-1 {
          bottom: 60px;
          right: 0;

          img {
            width: 100px;
          }

          .icon {
            img {
              width: 30px;
              height: auto;
            }
          }
        }

        &.shape-2 {
          bottom: 0;
          left: 80px;

          img {
            width: 60px;
          }

          .icon {
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 374px) {
    .contact-content h2 {
      font-size: 30px;
      line-height: 42px;
    }
  }
`,UC=""+new URL("contact-img-ddrmva_K.png",import.meta.url).href,FC="data:image/svg+xml,%3csvg%20width='170'%20height='170'%20viewBox='0%200%20170%20170'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%200H85C131.944%200%20170%2038.0558%20170%2085C170%20131.944%20131.944%20170%2085%20170C38.0558%20170%200%20131.944%200%2085V0Z'%20fill='white'/%3e%3cpath%20d='M0.5%200.5H85C131.668%200.5%20169.5%2038.3319%20169.5%2085C169.5%20131.668%20131.668%20169.5%2085%20169.5C38.3319%20169.5%200.5%20131.668%200.5%2085V0.5Z'%20stroke='black'%20stroke-opacity='0.1'/%3e%3ccircle%20cx='85'%20cy='85'%20r='68'%20fill='%2300CEC9'%20fill-opacity='0.5'/%3e%3c/svg%3e",HC="data:image/svg+xml,%3csvg%20width='83'%20height='83'%20viewBox='0%200%2083%2083'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M41.3081%2082.6162C18.4943%2082.6162%20-8.0841e-07%2064.1219%20-1.80563e-06%2041.3081L-3.61127e-06%20-1.52588e-05L41.3081%20-1.70644e-05C64.1219%20-1.80616e-05%2082.6162%2018.4943%2082.6162%2041.3081C82.6162%2064.1219%2064.1219%2082.6162%2041.3081%2082.6162Z'%20fill='white'/%3e%3cpath%20d='M41.3081%2082.1162C18.7704%2082.1162%200.499999%2063.8458%200.499998%2041.3081L0.499996%200.499985L41.3081%200.499983C63.8458%200.499982%2082.1162%2018.7704%2082.1162%2041.3081C82.1162%2063.8458%2063.8458%2082.1162%2041.3081%2082.1162Z'%20stroke='black'%20stroke-opacity='0.1'/%3e%3ccircle%20cx='41.7163'%20cy='41.7161'%20r='33'%20fill='%23F9518C'%20fill-opacity='0.5'/%3e%3c/svg%3e",$C="data:image/svg+xml,%3csvg%20width='44'%20height='38'%20viewBox='0%200%2044%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%2011.5C1%204.15%205.2%201%2011.5%201H32.5C38.8%201%2043%204.15%2043%2011.5V26.2C43%2033.55%2038.8%2036.7%2032.5%2036.7H11.5'%20stroke='%23292D32'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M32.5%2012.55L25.927%2017.8C23.764%2019.522%2020.215%2019.522%2018.052%2017.8L11.5%2012.55'%20stroke='%23292D32'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2028.3H13.6'%20stroke='%23292D32'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2019.8999H7.3'%20stroke='%23292D32'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",VC="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2017.33C21%2017.69%2020.9199%2018.06%2020.7496%2018.42C20.5794%2018.78%2020.359%2019.12%2020.0686%2019.44C19.5779%2019.98%2019.0371%2020.37%2018.4261%2020.62C17.8252%2020.87%2017.1743%2021%2016.4732%2021C15.4517%2021%2014.36%2020.76%2013.2083%2020.27C12.0566%2019.78%2010.9049%2019.12%209.76314%2018.29C8.61142%2017.45%207.51978%2016.52%206.47822%2015.49C5.44667%2014.45%204.51527%2013.36%203.68403%2012.22C2.86279%2011.08%202.2018%209.94%201.72108%208.81C1.24036%207.67%201%206.58%201%205.54C1%204.86%201.12018%204.21%201.36054%203.61C1.6009%203%201.98147%202.44%202.51227%201.94C3.15323%201.31%203.85428%201%204.59539%201C4.87581%201%205.15623%201.06%205.40661%201.18C5.667%201.3%205.89735%201.48%206.07762%201.74L8.4011%205.01C8.58137%205.26%208.71157%205.49%208.8017%205.71C8.89184%205.92%208.94191%206.13%208.94191%206.32C8.94191%206.56%208.87181%206.8%208.7316%207.03C8.6014%207.26%208.41112%207.5%208.17076%207.74L7.40961%208.53C7.29945%208.64%207.24937%208.77%207.24937%208.93C7.24937%209.01%207.25939%209.08%207.27942%209.16C7.30946%209.24%207.33951%209.3%207.35954%209.36C7.53981%209.69%207.85028%2010.12%208.29094%2010.64C8.74161%2011.16%209.22233%2011.69%209.74311%2012.22C10.2839%2012.75%2010.8047%2013.24%2011.3355%2013.69C11.8563%2014.13%2012.2869%2014.43%2012.6274%2014.61C12.6775%2014.63%2012.7376%2014.66%2012.8077%2014.69C12.8878%2014.72%2012.968%2014.73%2013.0581%2014.73C13.2283%2014.73%2013.3585%2014.67%2013.4687%2014.56L14.2298%2013.81C14.4802%2013.56%2014.7206%2013.37%2014.9509%2013.25C15.1813%2013.11%2015.4116%2013.04%2015.662%2013.04C15.8523%2013.04%2016.0526%2013.08%2016.2729%2013.17C16.4932%2013.26%2016.7236%2013.39%2016.974%2013.56L20.2889%2015.91C20.5493%2016.09%2020.7296%2016.3%2020.8398%2016.55C20.9399%2016.8%2021%2017.05%2021%2017.33Z'%20stroke='%23292D32'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3cpath%20d='M19.0269%203H14.2197M19.0269%203V7.8V3Z'%20stroke='%23292D32'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",WC=()=>o.jsx(DC,{children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row g-4",children:[o.jsx("div",{className:"col-lg-6",children:o.jsx(O,{delay:200,children:o.jsxs("div",{className:"contact-img",children:[o.jsx("img",{src:UC,alt:"contact-img"}),o.jsxs("div",{className:"overlay-item shape-1",children:[o.jsx("img",{src:FC,alt:"shape-img"}),o.jsx("div",{className:"icon",children:o.jsx("img",{src:$C,alt:"icon"})})]}),o.jsxs("div",{className:"overlay-item shape-2",children:[o.jsx("img",{src:HC,alt:"shape-img"}),o.jsx("div",{className:"icon",children:o.jsx("img",{src:VC,alt:"icon"})})]})]})})}),o.jsx("div",{className:"col-lg-6",children:o.jsxs("div",{className:"contact-content",children:[o.jsx(O,{children:o.jsx(Ht,{subtitle:"Say Hello!",title:"We'd pleased to hear"})}),o.jsx(O,{children:o.jsx("div",{className:"contact-content-body",children:o.jsxs("form",{action:"/",method:"post",children:[o.jsxs("div",{className:"form-input-between",children:[o.jsxs("div",{className:"form-input mb-20",children:[o.jsx("label",{htmlFor:"user-name",children:"Your Name *"}),o.jsx("input",{type:"text",name:"user-name",id:"user-name",placeholder:"e.g. Roe Smith",required:!0})]}),o.jsxs("div",{className:"form-input mb-20",children:[o.jsx("label",{htmlFor:"email-address",children:"Email Address *"}),o.jsx("input",{type:"email",name:"email-address",id:"email-address",placeholder:"e.g. example@mail.com",required:!0})]})]}),o.jsxs("div",{className:"form-input-between",children:[o.jsxs("div",{className:"form-input mb-20",children:[o.jsx("label",{htmlFor:"phone-number",children:"Phone Number"}),o.jsx("input",{type:"text",name:"phone-number",id:"phone-number",placeholder:"e.g. +55 695 6965"})]}),o.jsxs("div",{className:"form-input mb-20",children:[o.jsx("label",{htmlFor:"website",children:"Website"}),o.jsx("input",{type:"text",name:"website",id:"website",placeholder:"e.g. website.com"})]})]}),o.jsxs("div",{className:"form-input mb-30",children:[o.jsx("label",{htmlFor:"message",children:"Message *"}),o.jsx("textarea",{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Type your message",required:!0})]}),o.jsx("div",{className:"item-button",children:o.jsx("input",{type:"submit",className:"template-btn primary-bg",value:"Submit Message"})})]})})})]})})]})})}),QC=Y.section`
  padding: 65px 0 130px 0;

  .map-content {
    border-radius: 30px;
    overflow: hidden;
    position: relative;
  }

  .contact-map {
    width: 100%;
    height: 450px;
    iframe {
      width: 100%;
    }
  }

  .map-info-card {
    position: absolute;
    z-index: 1;
    top: 30px;
    left: 30px;
    width: 350px;
    height: 390px;
    padding: 30px;
    background-color: ${({theme:e})=>e.colors.whiteColor};
    border-radius: 20px;

    .list {
      padding: 0;
      list-style: none;
      margin: 0;
      height: 100%;
      overflow-y: auto;
      -ms-overflow-style: none;
      /* Internet Explorer 10+ */
      scrollbar-width: none;
      transition: width 0.3s;

      &::-webkit-scrollbar {
        display: none;
        /* Safari and Chrome */
      }
      li {
        &:not(:first-child) {
          margin-top: 10px;
        }
      }

      .list-item {
        display: flex;
        gap: 19px;
        .list-icon {
          flex: 0 0 auto;
        }
        img {
          width: 20px;
          height: 20px;
        }
        h4 {
          font-size: 15px;
          line-height: 45px;
          margin-bottom: 0;
        }
        p {
          margin-bottom: 0;
        }
      }

      .list-icon {
        line-height: 45px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 30px 0 80px;
  }

  @media screen and (max-width: 575px) {
    .map-info-card {
      position: absolute;
      z-index: 1;
      top: 30px;
      left: 30px;
      width: 80%;
      height: calc(100% - 60px);
      padding: 20px;
    }
  }
`,_C="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%208.00002V14C21%2016.5%2020.5%2018.25%2019.38%2019.38L13%2013L20.73%205.27002C20.91%206.06002%2021%206.96002%2021%208.00002Z'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20.73%205.27L5.26999%2020.73C2.25999%2020.04%201%2017.96%201%2014V8C1%203%203%201%208%201H14C17.96%201%2020.04%202.26%2020.73%205.27Z'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19.38%2019.38C18.25%2020.5%2016.5%2021%2014%2021H8.00003C6.96003%2021%206.06002%2020.91%205.27002%2020.73L13%2013L19.38%2019.38Z'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.24002%206.97997C5.92002%204.04997%2010.32%204.04997%2011%206.97997C11.39%208.69997%2010.31%2010.16%209.36001%2011.06C8.67001%2011.72%207.58003%2011.72%206.88003%2011.06C5.93003%2010.16%204.84002%208.69997%205.24002%206.97997Z'%20stroke='%230095FF'%20stroke-width='1.5'/%3e%3cpath%20d='M8.0946%207.69995H8.10359'%20stroke='%230095FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",GC="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.97%2017.33C20.97%2017.69%2020.89%2018.06%2020.72%2018.42C20.55%2018.78%2020.33%2019.12%2020.04%2019.44C19.55%2019.98%2019.01%2020.37%2018.4%2020.62C17.8%2020.87%2017.15%2021%2016.45%2021C15.43%2021%2014.34%2020.76%2013.19%2020.27C12.04%2019.78%2010.89%2019.12%209.75%2018.29C8.6%2017.45%207.51%2016.52%206.47%2015.49C5.44%2014.45%204.51%2013.36%203.68%2012.22C2.86%2011.08%202.2%209.94%201.72%208.81C1.24%207.67%201%206.58%201%205.54C1%204.86%201.12%204.21%201.36%203.61C1.6%203%201.98%202.44%202.51%201.94C3.15%201.31%203.85%201%204.59%201C4.87%201%205.15%201.06%205.4%201.18C5.66%201.3%205.89%201.48%206.07%201.74L8.39%205.01C8.57%205.26%208.7%205.49%208.79%205.71C8.88%205.92%208.93%206.13%208.93%206.32C8.93%206.56%208.86%206.8%208.72%207.03C8.59%207.26%208.4%207.5%208.16%207.74L7.4%208.53C7.29%208.64%207.24%208.77%207.24%208.93C7.24%209.01%207.25%209.08%207.27%209.16C7.3%209.24%207.33%209.3%207.35%209.36C7.53%209.69%207.84%2010.12%208.28%2010.64C8.73%2011.16%209.21%2011.69%209.73%2012.22C10.27%2012.75%2010.79%2013.24%2011.32%2013.69C11.84%2014.13%2012.27%2014.43%2012.61%2014.61C12.66%2014.63%2012.72%2014.66%2012.79%2014.69C12.87%2014.72%2012.95%2014.73%2013.04%2014.73C13.21%2014.73%2013.34%2014.67%2013.45%2014.56L14.21%2013.81C14.46%2013.56%2014.7%2013.37%2014.93%2013.25C15.16%2013.11%2015.39%2013.04%2015.64%2013.04C15.83%2013.04%2016.03%2013.08%2016.25%2013.17C16.47%2013.26%2016.7%2013.39%2016.95%2013.56L20.26%2015.91C20.52%2016.09%2020.7%2016.3%2020.81%2016.55C20.91%2016.8%2020.97%2017.05%2020.97%2017.33Z'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3cpath%20d='M19%203H14.2M19%203V7.8V3Z'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",YC="data:image/svg+xml,%3csvg%20width='22'%20height='20'%20viewBox='0%200%2022%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%206.5C1%203%203%201.5%206%201.5H16C19%201.5%2021%203%2021%206.5V13.5C21%2017%2019%2018.5%2016%2018.5H6'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%207L12.87%209.5C11.84%2010.32%2010.15%2010.32%209.12%209.5L6%207'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2014.5H7'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2010.5H4'%20stroke='%230095FF'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",gc=[{icon:_C,title:"Staco HQ",address:"Stact Inc, 06 Highley St, Victoria, New York"},{icon:GC,title:"Call Us",phoneNumbers:["Mobile: (+61) - 1990 - 6886","Hotline: 1800 - 1102"]},{icon:YC,title:"Mail Us",emails:["Info: ask@domain.com","Support: hello@domain.com"]}],XC=()=>o.jsx(QC,{children:o.jsx(O,{children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-md-12",children:o.jsxs("div",{className:"map-content",children:[o.jsx(O,{delay:200,children:o.jsx("div",{className:"map-info-card",children:o.jsx("ul",{className:"list",children:gc==null?void 0:gc.map((e,t)=>{var n,r;return o.jsx("li",{children:o.jsxs("div",{className:"list-item",children:[o.jsx("div",{className:"list-icon",children:o.jsx("img",{src:e.icon,alt:"icon"})}),o.jsxs("div",{className:"list-text",children:[o.jsx("h4",{children:e.title}),e.address&&o.jsx("p",{children:e.address}),e.phoneNumbers&&((n=e.phoneNumbers)==null?void 0:n.map((i,a)=>o.jsx("p",{children:i},a))),e.emails&&((r=e.emails)==null?void 0:r.map((i,a)=>o.jsx("p",{children:i},a)))]})]})},t)})})})}),o.jsx("div",{className:"contact-map",children:o.jsx("iframe",{title:"Google Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1920687732654!2d-73.99508162358559!3d40.73579903615768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25918cb2e440f%3A0x74373698b80cbf25!2sThe%20Victoria!5e0!3m2!1sen!2sbd!4v1704783943061!5m2!1sen!2sbd",width:"600",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})})})})})}),ZC=()=>o.jsxs(ft,{pageTitle:"ARKA - Contact Us",children:[o.jsx(rn,{variant:"main-header"}),o.jsx(ts,{title:"Contact Us"}),o.jsx(WC,{}),o.jsx(XC,{}),o.jsx(Rn,{}),o.jsx(In,{})]}),JC=()=>o.jsxs(tg,{className:"breadcrumb-section pricing-plan-breadcrumb-section",children:[o.jsxs("div",{className:"bg-shape",children:[o.jsx("div",{className:"shape-img img-1",children:o.jsx("img",{src:m2,alt:"shape"})}),o.jsx("div",{className:"shape-img img-2",children:o.jsx("img",{src:g2,alt:"shape"})})]}),o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row align-items-center",children:[o.jsx("div",{className:"col-md-6",children:o.jsxs("div",{className:"breadcrumb-content",children:[o.jsx("nav",{"aria-label":"breadcrumb",children:o.jsxs("ul",{className:"breadcrumb breadcrumb-list",children:[o.jsx("li",{className:"breadcrumb-item",children:o.jsx(re,{to:"/",children:"Home"})}),o.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Pricing Plans"})]})}),o.jsx("div",{className:"breadcrumb-sec",children:o.jsx("h1",{className:"breadcrumb-title",children:"Pricing Plans"})})]})}),o.jsx("div",{className:"col-md-6",children:o.jsx("div",{className:"pricing-plan-breadcrumb-right",children:o.jsx("div",{className:"best-pricing-selector",children:o.jsxs("form",{action:"/",method:"post",children:[o.jsx("button",{type:"button",className:"best-pricing-monthly-btn",children:"Monthly"}),o.jsx("input",{type:"checkbox",name:"best-pricing-selector",id:"best-pricing-selector"}),o.jsxs("button",{type:"button",className:"best-pricing-yearly-btn",children:["Yearly ",o.jsx("span",{children:"(20% Off)"})]})]})})})})]})})]}),qC=Y.section`
  background: transparent;
  margin-top: -300px;
  position: relative;
  z-index: 2;
  padding-bottom: 100px;

  .pricing-plan-breadcrumb-right {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 90px;
    .best-pricing-selector form button {
      color: ${({theme:e})=>e.colors.whiteColor};
    }
  }

  .pricing-plan-card {
    background: ${({theme:e})=>e.colors.whiteColor};
    border-radius: 15px;
    padding: 46px 40px;
    position: relative;
    min-height: 100%;
    &::before {
      content: "";
      border-radius: 15px 15px 0px 0px;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 15px;
    }
    &.free-card {
      &::before {
        background: rgba(14, 195, 107, 0.3);
      }
    }
    &.growth-card {
      &::before {
        background: rgba(0, 206, 201, 0.3);
      }
    }
    &.business-card {
      &::before {
        background: rgba(249, 81, 140, 0.3);
      }
    }

    .best-pricing-card-body {
      .list {
        margin-top: 27px;
        padding: 0;
        list-style: none;

        li {
          position: relative;
          padding-left: 16px;
          padding-bottom: 6px;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: ${({theme:e})=>e.colors.blackColor}1f;
            top: 15px;
          }

          &:not(:first-child) {
            margin-top: 10px;
          }
        }
      }
    }

    &.active {
      .best-pricing-card-body {
        height: auto;
      }
      .pricing-plan-card-content.right {
        height: auto;
      }
    }
  }

  .pricing-plan-card-header {
    h6{
      font-weight: 800;
    }
    &.free {
      h6 {
        color: ${({theme:e})=>e.colors.iconColor2};
      }
    }
    &.growth {
      h6 {
        color: ${({theme:e})=>e.colors.heroimg1Bg};
      }
    }
    &.business {
      h6 {
        color: ${({theme:e})=>e.colors.badgeColor};
      }
    }
    &.enterprise {
      h6 {
        color: ${({theme:e})=>e.colors.primary};
      }
    }
    h6 {
      text-transform: uppercase;
      span {
        color: ${({theme:e})=>e.colors.title};
        margin-left: 18px;
      }
    }
    h3 {
      margin-top: 35px;
      span {
        font-family: ${({theme:e})=>e.fonts.dmSans};
        font-size: 15px;
        font-weight: 500;
        line-height: 26px;
      }
    }
  }

  .pricing-plan-card-content {
    &.right {
      text-align: center;
      max-width: 220px;
      margin-left: auto;
      .pricing-plan-img {
        position: relative;
        bottom: -96px;
      }
    }
  }

  .pricing-plan-show-btn {
    color: ${({theme:e})=>e.colors.primary};
    width: 190px;
    text-align: left;
    padding-left: 36px;
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: 0.3s;
    display: none;
    position: relative;
    &:hover {
      color: ${({theme:e})=>e.colors.title};
      &::before {
        color: ${({theme:e})=>e.colors.title};
      }
    }
    &::before {
      content: "+";
      font-size: 20px;
      min-height: 24px;
      min-width: 26px;
      position: absolute;
      left: 0px;
      border-radius: 50%;
      color: ${({theme:e})=>e.colors.whiteColor};
      background: ${({theme:e})=>e.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
    }
    &.active {
      &::before {
        content: "-";
      }
    }
  }

  .best-pricing-btn {
    max-width: 100%;
    width: 100%;
    font-weight: 800;
    height: 60px;
    border: 1px solid ${({theme:e})=>e.colors.primary}4d;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme:e})=>e.colors.primary};
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 0;
    .icon {
      transition: 0.3s;
      margin-left: 15px;
    }
    &::before {
      position: absolute;
      z-index: -1;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      background-color: ${({theme:e})=>e.colors.primary};
      transform: translateX(-100%);
      transition: 0.3s;
    }
    &:hover {
      border: 1px solid ${({theme:e})=>e.colors.primary};
      color: ${({theme:e})=>e.colors.whiteColor};
      &::before {
        transform: translateX(0%);
      }
      .icon {
        transform: rotate(-45deg);
        filter: brightness(100) sepia(1) hue-rotate(-120deg) grayscale(100%)
          contrast(5);
      }
    }
    &.active {
      border: 1px solid ${({theme:e})=>e.colors.primary};
      color: ${({theme:e})=>e.colors.whiteColor};
      background: ${({theme:e})=>e.colors.primary};
      .icon {
        transform: rotate(-45deg);
        filter: brightness(100) sepia(1) hue-rotate(-120deg) grayscale(100%)
          contrast(5);
      }
    }
  }

  @media screen and (max-width: 991px) {
    .pricing-plan-card {
      padding-bottom: 10px;
      padding-top: 25px;
    }
    .pricing-plan-card-content {
      &.right {
        margin-left: 0px;
        margin-right: auto;

        .pricing-plan-img {
          bottom: 0px;
          margin-top: 20px;
        }
      }
    }
    .pricing-plan-card-header h3 {
      font-size: 23px;
      margin-top: 5px;
    }
    .faq-seciton.pricing-plan-faq-seciton {
      padding: 70px 0px 80px;
    }
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
    .pricing-plan-card {
      padding-bottom: 30px;
    }
    .pricing-plan-card-content.right {
      height: 0px;
      overflow: hidden;
      transition: 0.5s;
    }
    .pricing-plan-breadcrumb-right {
      justify-content: flex-start;
      margin-top: 40px;
    }
  }
`,KC=[{type:"Free",description:"Create your first call for free",price:"It's free",trial:"Always Free for 5 personal",btnClass:"",btnText:"Start Free",features:["Unlimited meeting","Up to 100 Attendees","40 minute limit","3 whiteboards","Group chat & file sharing","Add auto captions","Share templates with team members","Video heatmaps"]},{type:"Growth",description:"Team in a growing company",price:"$99 /month",trial:"Try 7 days free, Cancel anytime",btnClass:"active",btnText:"Get Start",features:["Unlimited meeting","Up to 2000 Attendees","250 minute limit","10 whiteboards","Group chat & file sharing","Add auto captions","Share templates with team members","Easily integrate with other tools","Legendary email support","Video heatmaps"]},{type:"Business",description:"Big company choose this",price:"$250 /month",trial:"Try 7 days free, Cancel anytime",btnClass:"",btnText:"Get Start",features:["Unlimited meeting","Up to 5000+ Attendees","8800 minute limit","99 whiteboards","Group chat & file sharing","Add auto captions","Share templates with team members","Easily integrate with other tools","Legendary email support","SSO & automated provisioning","Marketing integrations","Video heatmaps"]}],Fp="data:image/svg+xml,%3csvg%20width='19'%20height='16'%20viewBox='0%200%2019%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5586%201L17.5586%208L10.5586%2015'%20stroke='%230095FF'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%208H16.2302'%20stroke='%230095FF'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ek=""+new URL("pricing-plan-img-D_DucS0a.png",import.meta.url).href,tk=()=>o.jsx(qC,{className:"pricing-plan-section",children:o.jsxs("div",{className:"container",children:[o.jsx(O,{delay:200,children:o.jsx("div",{className:"row",children:KC.map((e,t)=>o.jsx("div",{className:`col-lg-4 col-md-6 mb-5 ${e.type.toLowerCase()}-card`,children:o.jsxs("div",{className:`pricing-plan-card ${e.type.toLowerCase()}-card`,children:[o.jsxs("div",{className:`pricing-plan-card-header ${e.type.toLowerCase()}`,children:[o.jsxs("h6",{children:[e.type,e.type==="Growth"&&o.jsx("span",{children:"Popular 💎"})]}),o.jsx("p",{children:e.description}),o.jsxs("h3",{children:[e.price,e.price!=="It's free"&&o.jsx("span",{children:"/month"})]}),o.jsx("p",{children:e.trial})]}),o.jsx("button",{className:`pricing-plan-show-btn pricing-plan-show-btn${t+1}`,children:"View plan features"}),o.jsxs("div",{className:"best-pricing-card-body",children:[o.jsxs("button",{className:`best-pricing-btn ${e.btnClass}`,children:[e.btnText,o.jsx("span",{className:"icon",children:o.jsx("img",{src:Fp,alt:"icon"})})]}),o.jsx("ul",{className:"list",children:e.features.map((n,r)=>o.jsx("li",{children:n},r))})]})]})},t))})}),o.jsx(O,{delay:300,children:o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-lg-12 col-md-6 mb-5",children:o.jsx("div",{className:"pricing-plan-card enterprise-card",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-lg-4",children:o.jsx("div",{className:"pricing-plan-card-content",children:o.jsxs("div",{className:"pricing-plan-card-header enterprise ✨",children:[o.jsx("h6",{children:"Enterprise ✨"}),o.jsx("p",{children:"Custom Plan for your big Business"}),o.jsxs("h3",{children:["Starting at $999 ",o.jsx("span",{children:"/month"})]}),o.jsx("p",{children:"Try 7 days free, Cancel anytime"})]})})}),o.jsxs("div",{className:"col-lg-4",children:[o.jsx("button",{className:"pricing-plan-show-btn pricing-plan-show-btn4",children:"View plan features"}),o.jsx("div",{className:"pricing-plan-card-content",children:o.jsx("div",{className:"best-pricing-card-body m-0",children:o.jsxs("ul",{className:"list m-0",children:[o.jsxs("li",{className:"list-item",children:["All from ",o.jsx("b",{children:"Groth"})," & ",o.jsx("b",{children:"Business Plan"})]}),o.jsx("li",{className:"list-item",children:"Unlimited Attendees"}),o.jsx("li",{className:"list-item",children:"No time limit"}),o.jsx("li",{className:"list-item",children:"100+ whiteboards"}),o.jsx("li",{className:"list-item",children:"Unlimited storage"})]})})})]}),o.jsx("div",{className:"col-lg-4",children:o.jsxs("div",{className:"pricing-plan-card-content right",children:[o.jsxs("button",{className:"best-pricing-btn",children:["Lets Talk",o.jsx("span",{className:"icon",children:o.jsx("img",{src:Fp,alt:"icon"})})]}),o.jsx("div",{className:"pricing-plan-img",children:o.jsx("img",{src:ek,alt:"img"})})]})})]})})})})})]})}),nk=Y.section`
  /* margin-top: 90px;
  margin-bottom: 115px; */
  margin: 0;
  background: ${({theme:e})=>e.colors.blueGray};
  .case-studies-left {
    max-width: 496px;
    width: 100%;
    padding: 125px 0px 140px 0px;
    h2 {
      font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
      font-size: 40px;
      font-weight: 800;
      line-height: 60px;
      color: ${({theme:e})=>e.colors.title};
      margin-bottom: 35px;
    }
  }

  .case-studies-brands {
    display: flex;
    align-items: center;
    justify-content: center;
    .case-studies-item {
      width: 50%;
      padding-top: 60px;
      border-left: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      border-right: 1px solid ${({theme:e})=>e.colors.blackColor}26;
      min-height: 550px;
      max-height: 585px;
      position: relative;
      overflow: hidden;
      &::before {
        content: "";
        height: 200px;
        width: 100%;
        position: absolute;
        background: linear-gradient(
          180deg,
          #eeeffb 0%,
          rgba(238, 239, 251, 0) 100%
        );
        top: 0px;
        left: 0px;
        z-index: 2;
      }
      &::after {
        content: "";
        height: 200px;
        width: 100%;
        position: absolute;
        background: linear-gradient(
          180deg,
          rgba(238, 239, 251, 0) 0%,
          #eeeffb 100%
        );
        bottom: 0px;
        left: 0px;
        z-index: 2;
      }
      &:nth-last-child(1) {
        border-left: none;
      }
      ul {
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        overflow: hidden;
        &.slide-top {
          animation: SlideTop 10s infinite linear;
        }
        &.slide-bottom {
          animation: SlideBottom 10s infinite linear;
        }
        li {
          min-height: 24px;
          margin-bottom: 85px;
        }
      }
    }
  }

  @keyframes SlideTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes SlideBottom {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  @media screen and (max-width: 1199px) {
    .case-studies-left h2 {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 991px) {
    .case-studies-left h2 {
      font-size: 27px;
      line-height: 45px;
      margin-bottom: 25px;
    }

    .case-studies-brands .case-studies-item {
      min-height: 455px;
      max-height: 455px;

      ul {
        padding: 0px 30px;

        li {
          margin-bottom: 60px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .case-studies-left {
      padding: 70px 0px;
    }
  }
  @media screen and (max-width: 480px) {
    .case-studies-left h2 {
      font-size: 24px;
    }
  }
`,rk="data:image/png;base64,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",ik="data:image/png;base64,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",ok="data:image/png;base64,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",ak="data:image/png;base64,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",Hp=[{link:"#",image:Z1},{link:"#",image:J1},{link:"#",image:q1},{link:"#",image:Ly},{link:"#",image:Ty}],$p=[{link:"#",image:Oy},{link:"#",image:rk},{link:"#",image:ik},{link:"#",image:ok},{link:"#",image:ak}],lk=()=>{const e=N.useRef(null),t=N.useRef(null);return N.useEffect(()=>{const n=()=>{if(!e.current||!t.current)return;const r=window.scrollY,i=e.current.offsetTop-200;let a=(r-i)/4;a=Math.max(0,Math.min(a,45)),t.current.style.transform=r>i?`rotate(-${a}deg)`:`rotate(${a}deg)`};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),o.jsx(nk,{className:"m-0",ref:e,children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-6",children:o.jsx(O,{delay:200,children:o.jsxs("div",{className:"case-studies-left",children:[o.jsxs("h2",{children:["50,000 + ",o.jsx("br",{}),"Small and big Business Trusted us 😍"]}),o.jsxs("a",{href:"#",className:"text-link mb-4",children:[o.jsx("span",{children:"View Case Studies"}),o.jsx("span",{className:"iconify","data-icon":"akar-icons:arrow-right"})]}),o.jsxs("a",{href:"#",className:"msg-btn rotate-icon-btn",children:[o.jsx("img",{className:"rotate-icon",src:$7,alt:"mail-us",ref:t}),o.jsx("span",{className:"icon",children:o.jsx("img",{src:V7,alt:"msg"})})]})]})})}),o.jsx("div",{className:"col-md-6",children:o.jsx(O,{delay:300,children:o.jsx("div",{className:"case-studies-right",children:o.jsxs("div",{className:"case-studies-brands",children:[o.jsxs("div",{className:"case-studies-item",children:[o.jsx("ul",{className:"slide-top",children:Hp.map((n,r)=>o.jsx("li",{children:o.jsx("a",{href:n.link,children:o.jsx("img",{src:n.image,alt:"brands"})})},r))}),o.jsx("ul",{className:"slide-top",children:Hp.map((n,r)=>o.jsx("li",{children:o.jsx("a",{href:n.link,children:o.jsx("img",{src:n.image,alt:"brands"})})},r))})]}),o.jsxs("div",{className:"case-studies-item",children:[o.jsx("ul",{className:"slide-bottom",children:$p.map((n,r)=>o.jsx("li",{children:o.jsx("a",{href:n.link,children:o.jsx("img",{src:n.image,alt:"brands"})})},r))}),o.jsx("ul",{className:"slide-bottom",children:$p.map((n,r)=>o.jsx("li",{children:o.jsx("a",{href:n.link,children:o.jsx("img",{src:n.image,alt:"brands"})})},r))})]})]})})})})]})})})},sk=Y.section`
  padding: 92px 0 140px 0;
  &.pricing-plan-faq-seciton {
    background: ${({theme:e})=>e.colors.whiteColor};
    padding: 132px 0 140px 0;
  }

  .faq-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 50px;
    .faq-section-title {
      margin-bottom: 0px;
    }
  }

  .accordion-item {
    border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
    border-radius: 15px;
    margin-top: 20px;
    &:first-child {
      border-top-left-radius: 15px !important;
      border-top-right-radius: 15px !important;
    }
    &:last-child {
      border-bottom-left-radius: 15px !important;
      border-bottom-right-radius: 15px !important;
    }

    &.collapsed {
      box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}14;
    }
  }

  .accordion-header {
    border: 0 !important;
    border-radius: 15px !important;
    background-color: transparent;
  }

  .accordion-button {
    border-radius: 15px !important;
    font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: ${({theme:e})=>e.colors.title};
    padding: 18px 20px 20px 50px;
    position: relative;

    &::after {
      position: absolute;
      content: url(${c2});
      top: 22px;
      left: 20px;
      width: 20px;
      height: 20px;
      border: 0 !important;
      background-image: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:not(.collapsed) {
      background-color: transparent;
      box-shadow: none;

      &::after {
        content: url(${d2});
      }
    }

    &:focus {
      box-shadow: none;
    }
  }

  .accordion-collapse.show {
    border-radius: 15px;
    box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}14;
  }

  .accordion-body {
    padding: 0 20px 20px 50px;
  }

  @media screen and (max-width: 991px) {
    padding-top: 40px;
    padding-bottom: 80px;
    &.v2 {
      padding-top: 72px;
    }
    &.pricing-plan-faq-seciton {
      padding: 70px 0px 80px;
    }

    .section-title .title {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
  @media screen and (max-width: 767px) {
    &.v2 {
      padding: 70px 0 60px 0;
    }

    .faq-section-header {
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;
    }
  }
`;Y.div`
  /*-- template-accordion style --*/
  border: 1px solid ${({theme:e})=>e.colors.blackColor}26;
  border-radius: 15px;
  margin-top: 20px;
  &:first-child {
    border-top-left-radius: 15px !important;
    border-top-right-radius: 15px !important;
  }
  &:last-child {
    border-bottom-left-radius: 15px !important;
    border-bottom-right-radius: 15px !important;
  }
  &.collapsed {
    //  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.08);
  }

  .accordion-header {
    border: 0 !important;
    border-radius: 15px !important;
    background-color: transparent;
  }

  .accordion-button {
    border-radius: 15px !important;
    font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: ${({theme:e})=>e.colors.title};
    padding: 18px 20px 20px 50px;
    position: relative;

    &::after {
      position: absolute;
      content: url(${c2});
      top: 22px;
      left: 20px;
      width: 20px;
      height: 20px;
      border: 0 !important;
      background-image: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:not(.collapsed) {
      background-color: transparent;
      box-shadow: none;

      &::after {
        content: url(${d2});
      }
    }

    &:focus {
      box-shadow: none;
    }
  }

  .accordion-collapse.collapse.show {
    border-radius: 15px;
    box-shadow: 0px 10px 15px ${({theme:e})=>e.colors.blackColor}14;
  }

  .accordion-body {
    padding: 0 20px 20px 50px;
  }

  @media screen and (max-width: 991px) {
    .benefits-faq .template-accordion .accordion-button {
      padding: 16px 0px;
    }
    .benefits-faq .template-accordion .accordion-button::after {
      top: 20px;
    }
    .benefits-faq .template-accordion .accordion-button:not(.collapsed) {
      padding-bottom: 10px;
    }
    .benefits-faq .template-accordion .accordion-body p {
      font-size: 12px;
      line-height: 22px;
    }
  }
  @media screen and (max-width: 767px) {
    .template-accordion .accordion-button {
      font-size: 16px;
      line-height: 30px;
    }
    .template-accordion .accordion-button::after {
      top: 24px;
    }
  }
`;const ck=""+new URL("faq-icon-X4wNuP-J.svg",import.meta.url).href,dk=[{question:"What is Startco ?",answer:"We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences."},{question:"Is it possible to integrate plugin ?",answer:"We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences."},{question:"Does it support crypto payment ?",answer:"We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences."},{question:"When it will come ?",answer:"We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences."}],uk=[{question:"How can I create a call ?",answer:"We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences."},{question:"How long I can continue free Plan ?",answer:"We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences."},{question:"Does it support crypto payment ?",answer:"We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences."},{question:"How long I can continue free Plan ?",answer:"We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences."}],pk=()=>{const[e,t]=N.useState(null),[n,r]=N.useState(null),i=l=>{t(e===l?null:l)},a=l=>{r(n===l?null:l)};return o.jsx(sk,{className:"faq-seciton pricing-plan-faq-seciton",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-md-12",children:o.jsxs("div",{className:"faq-section-header",children:[o.jsx(O,{delay:200,children:o.jsx(ui,{children:o.jsxs("div",{className:"section-title mb-0 md-mb-30",children:[o.jsx("span",{className:"sub-title",children:"Questions & answers"}),o.jsxs("h2",{className:"title mb-0",children:["Frequently",o.jsx("span",{className:"marketing-badge",children:"asked"}),o.jsx("br",{}),"Questions"]})]})})}),o.jsx("div",{className:"faq-header-right",children:o.jsx(O,{delay:250,children:o.jsx("img",{src:ck,alt:"icon"})})})]})})}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-6",children:o.jsx(O,{delay:300,children:o.jsx("div",{className:"accordion template-accordion",id:"accordionExample",children:dk.map((l,s)=>o.jsxs("div",{className:"accordion-item",children:[o.jsx("h2",{className:"accordion-header",id:`heading${s}`,children:o.jsx("button",{className:`accordion-button ${e===s?"":"collapsed"}`,type:"button",onClick:()=>i(s),children:l.question})}),o.jsx("div",{id:`collapse${s}`,className:`accordion-collapse ${e===s?"show":"collapse"}`,children:o.jsx("div",{className:"accordion-body",children:o.jsx("p",{children:l.answer})})})]},s))})})}),o.jsx("div",{className:"col-md-6",children:o.jsx(O,{delay:350,children:o.jsx("div",{className:"accordion template-accordion",id:"accordionExample",children:uk.map((l,s)=>o.jsxs("div",{className:"accordion-item",children:[o.jsx("h2",{className:"accordion-header",id:`heading${s}`,children:o.jsx("button",{className:`accordion-button ${n===s?"":"collapsed"}`,type:"button",onClick:()=>a(s),children:l.question})}),o.jsx("div",{id:`collapse${s}`,className:`accordion-collapse ${n===s?"show":"collapse"}`,children:o.jsx("div",{className:"accordion-body",children:o.jsx("p",{children:l.answer})})})]},s))})})})]})]})})},fk=[{feature:"Unified Workforce Directory",basic:"Basic",advances:"Advances",unlimited:"Unlimited"},{feature:"Unified Analytics",basic:"5",advances:"100",unlimited:"5000+"},{feature:"Whiteboards",basic:"-",advances:"Unlimited",unlimited:"Unlimited"},{feature:"Group chat & file sharing",basic:"-",advances:"✓",unlimited:"✓"},{feature:"Add auto captions",basic:"✓",advances:"✓",unlimited:"✓"},{feature:"Share templates with team members",basic:"✓",advances:"✓",unlimited:"✓"},{feature:"Marketing integrations",basic:"1000",advances:"25000",unlimited:"50000"},{feature:"Storage",basic:"",advances:"",unlimited:""},{feature:"Included Media",basic:"10",advances:"500",unlimited:"5000"},{feature:"Bandwidth",basic:"2",advances:"10",unlimited:"25"},{feature:"Channels",basic:"100",advances:"2000",unlimited:"Unlimited"},{feature:"Archived Media",basic:"-",advances:"-",unlimited:"50"},{feature:"Shared contacts",basic:"10",advances:"30",unlimited:"✓"},{feature:"International wires",basic:"-",advances:"100",unlimited:"Unlimited"},{feature:"Integrations",basic:"",advances:"",unlimited:""},{feature:"Email",basic:"-",advances:"500",unlimited:"5000"},{feature:"Slack",basic:"✓",advances:"✓",unlimited:"✓"},{feature:"Google Contacts",basic:"✓",advances:"✓",unlimited:"✓"},{feature:"Microsoft Edge",basic:"-",advances:"✓",unlimited:"✓"},{feature:"HubSpot CRM",basic:"-",advances:"✓",unlimited:"✓"},{feature:"Call Share",basic:"-",advances:"✓",unlimited:"✓"},{feature:"SMS via Zapier",basic:"✓",advances:"✓",unlimited:"✓"},{feature:"WooCommerce",basic:"✓",advances:"✓",unlimited:"✓"},{feature:"Support",basic:"",advances:"",unlimited:""},{feature:"Email support",basic:"✓",advances:"✓",unlimited:"✓"},{feature:"Priority support",basic:"-",advances:"✓",unlimited:"✓"},{feature:"Dedicated account manager",basic:"-",advances:"✓",unlimited:"✓"}],hk=Y.section`
  background: ${({theme:e})=>e.colors.whiteColor};
  padding-top: 115px;
  padding-bottom: 140px;

  .compare-plans-title {
    margin-bottom: 45px;
  }

  .compare-plans-table-section {
    .compare-plans-table {
      width: 100%;
      overflow-x: hidden;

      .table-header-sticky {
        background: ${({theme:e})=>e.colors.whiteColor};
        width: 100% !important;
        top: 0px !important;
        transition: 0.3s;

        &.sticky {
          position: fixed;
          z-index: 111;
          left: 0;
        }
      }

      ol {
        padding: 0;
        list-style: none;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        overflow: hidden;
        border-bottom: 1px solid ${({theme:e})=>e.colors.blackColor}26;
        margin: 0;
        li {
          padding-bottom: 10px;
          vertical-align: bottom;
          width: 18%;
          min-width: 210px;
          margin-top: 33px;
          padding: 0px 30px 10px 30px;
          padding-top: 11px;
          display: block;
          &:nth-child(1) {
            width: 46%;
            padding-left: 0px;
          }

          &:nth-last-child(2) {
            background: rgba(0, 0, 0, 0.03);
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          }

          h5 {
            font-family: ${({theme:e})=>e.fonts.dmSans};
            text-transform: uppercase;
            span {
              text-transform: lowercase;
              font-size: 12px;
              margin-left: 13px;
            }
          }

          button {
            max-width: 150px;
            width: 100%;
            height: 40px;
            border: 2px solid rgba(0, 149, 255, 0.3);
            border-radius: 50px;
            font-weight: 700;
            color: ${({theme:e})=>e.colors.primary};
            transition: 0.3s;
            position: relative;
            overflow: hidden;
            z-index: 0;
            margin: 10px 0px;

            &::before {
              position: absolute;
              z-index: -1;
              content: "";
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 50px;
              background-color: ${({theme:e})=>e.colors.primary};
              transform: translateX(-100%);
              transition: 0.3s;
            }

            &:hover {
              border: 2px solid ${({theme:e})=>e.colors.primary};
              color: ${({theme:e})=>e.colors.whiteColor};

              &::before {
                transform: translateX(0%);
              }
            }
          }
        }
      }

      .table-body {
        margin-top: 0;
        ul {
          padding: 0;
          list-style: none;
          margin: 0;
          li {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 50px;
            b {
              padding-bottom: 10px;
              padding-top: 33px;
              color: ${({theme:e})=>e.colors.title};
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  .pricing-table-row {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        &:nth-child(1) {
          width: 46%;
          min-width: 210px;
          padding-left: 0px;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        &:nth-child(2) {
          width: 18%;
          min-width: 210px;
          padding: 10px 30px;
        }
        &:nth-child(3) {
          width: 18%;
          min-width: 210px;
          padding: 10px 30px;
          background: rgba(0, 0, 0, 0.03);
        }
        &:nth-child(4) {
          width: 18%;
          min-width: 210px;
          padding: 10px 30px;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .compare-plans-title {
      margin-bottom: 20px;
    }
    .compare-plans-table-section .compare-plans-table .table-body {
      overflow-y: auto;
    }
    .compare-plans-table-section {
      .compare-plans-title {
        margin-bottom: 0px;
      }

      .compare-plans-table {
        ol {
          li {
            min-width: 33%;
            max-width: 33%;
            padding: 15px;
            margin-top: 0px;
            background: transparent;

            &:nth-child(1) {
              display: none;
            }

            &:nth-last-child(2) {
              background: transparent;
            }

            &.active {
              background: rgba(0, 0, 0, 0.03);
            }
          }
        }

        .table-body {
          .table-col2,
          .table-col3,
          .table-col4 {
            background: rgba(0, 0, 0, 0.03);
            border-bottom-right-radius: 15px;
            border-bottom-left-radius: 15px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 80px;
    padding-top: 70px;
    .compare-plans-table-section .compare-plans-table .table-body .table-col1 {
      width: 50%;
    }
    .compare-plans-table-section .compare-plans-table .table-body ul {
      padding-right: 10px;
    }
  }

  @media screen and (max-width: 575px) {
    .compare-plans-table-section {
      .compare-plans-table {
        ol {
          li {
            h5 {
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              flex-direction: column;

              & span {
                margin-left: 0px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .compare-plans-table-section {
      .compare-plans-table {
        ol {
          li {
            button {
              height: 30px;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
`,mk=()=>{const e=N.useRef(null),t=N.useRef(null);return N.useEffect(()=>{const n=()=>{const i=t.current.getBoundingClientRect().top,a=e.current.offsetHeight,l=t.current.offsetHeight;i<=a&&i+l>a?e.current.classList.add("sticky"):e.current.classList.remove("sticky")};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),o.jsxs(hk,{children:[o.jsx(O,{delay:200,children:o.jsx("div",{className:"container",children:o.jsx("h3",{className:"compare-plans-title",children:"Compare all plans"})})}),o.jsx("div",{className:"compare-plans-content",children:o.jsx("div",{className:"compare-plans-table-section",children:o.jsxs("div",{className:"compare-plans-table",children:[o.jsx("div",{ref:e,className:"table-header-sticky",children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"table-header thead-first",children:o.jsxs("ol",{children:[o.jsx("li",{children:o.jsx("h6",{children:"Basic features"})}),o.jsxs("li",{className:"pricingPlanTablinks",children:[o.jsx("h6",{children:"Free"}),o.jsx("button",{onClick:()=>console.log("Start Free clicked"),children:"Start Free"})]}),o.jsxs("li",{className:"pricingPlanTablinks",children:[o.jsxs("h6",{children:["Growth ",o.jsx("span",{children:"$99 /mo"})]}),o.jsx("button",{onClick:()=>console.log("Get Started - Growth clicked"),children:"Get Started"})]}),o.jsxs("li",{className:"pricingPlanTablinks",children:[o.jsxs("h6",{children:["Business ",o.jsx("span",{children:"$250 /mo"})]}),o.jsx("button",{onClick:()=>console.log("Get Started - Business clicked"),children:"Get Started"})]})]})})})}),o.jsx("div",{className:"container",children:o.jsx("div",{ref:t,className:"table-body",children:o.jsx("div",{className:"pricing-table-row",children:fk.map((n,r)=>o.jsxs("ul",{children:[o.jsx("li",{children:n.feature}),o.jsx("li",{children:n.basic}),o.jsx("li",{children:n.advances}),o.jsx("li",{children:n.unlimited})]},r))})})})]})})})]})},gk=()=>o.jsx(ft,{pageTitle:"Staco - Pricing Plan",children:o.jsxs("div",{className:"bg-gray",children:[o.jsx(rn,{variant:"main-header"}),o.jsx(JC,{}),o.jsx(tk,{}),o.jsx(mk,{}),o.jsx(lk,{}),o.jsx(pk,{}),o.jsx(Rn,{}),o.jsx(In,{})]})}),xk=()=>o.jsx(ft,{pageTitle:"ARKA - Error",children:o.jsxs("div",{className:"error-page",children:[o.jsx("div",{className:"mb-3 text-center",children:o.jsx("h4",{children:"404 - Page Not Found"})}),o.jsx(re,{to:"/",className:"template-btn",children:"Go to Homepage"})]})}),vk=()=>{const{pathname:e}=si();return N.useEffect(()=>{window.scrollTo(0,0)},[e]),null},yk=()=>o.jsxs(d4,{children:[o.jsx(vk,{}),o.jsxs(n4,{children:[o.jsx(et,{path:"/",element:o.jsx(s9,{})}),o.jsx(et,{path:"/about-us",element:o.jsx(wC,{})}),o.jsx(et,{path:"/our-services",element:o.jsx(BC,{})}),o.jsx(et,{path:"/pricing-plan",element:o.jsx(gk,{})}),o.jsx(et,{path:"/sign-in",element:o.jsx(y9,{})}),o.jsx(et,{path:"/sign-up",element:o.jsx(w9,{})}),o.jsx(et,{path:"/forgot-password",element:o.jsx(k9,{})}),o.jsx(et,{path:"/terms",element:o.jsx(U9,{})}),o.jsx(et,{path:"/privacy-policy",element:o.jsx($9,{})}),o.jsx(et,{path:"/blog",element:o.jsx(d8,{})}),o.jsx(et,{path:"/blog-details",element:o.jsx(E8,{})}),o.jsx(et,{path:"/contact-us",element:o.jsx(ZC,{})}),o.jsx(et,{path:"*",element:o.jsx(xk,{})})]})]}),bk={fonts:{body:"'Inter', sans-serif",dmSans:"'DM Sans', sans-serif",montserratAlternates:"'Montserrat Alternates', sans-serif",PlusJakartaSans:"'Plus Jakarta Sans', sans-serif;",jost:"'Jost', sans-serif",firaCode:"'Fira Code', sans-serif",caveat:"'Caveat', sans-serif",quantico:"'Quantico', sans-serif"},colors:{whiteColor:" #ffffff",whiteOp70:"#ffffffb2",whiteOp80:"rgba(255, 255, 255, 0.80)",blackColor:"#000000",primary:"#0095ff",title:"#111111",textColor:"#444444",bgHero:"#242549",bgFooter:"#191c1f",borderColor:"#d9d9d91a",borderColor2:"#f5eef4",badgeColor:"#f7578c",badgeColor2:"#fec458",iconColor:"#999999",iconColor2:"#0ec36b",bgDropdown:"#ebeff9",bodyBG2:"#ECEFF1",heroimg1Bg:"#00CEC9",home5HeroBg:"#F0F5FF",hero6Bg:"#1F2334",cardBg:"#F9F1FF",liteblue:"#B3E1EC",offwhite:"#E2D08E",litepink:"#F7C8EC",liteviolet:"#A6A6B9",blueGray:"#EEEFFB",btnColor:"#FFDA54",btnTextColor:"#050038",v6BG:"#ECF1F1",primary6:"#B2EDA1",primary6Deep:"#44C486",v6templateColor:"#004D42",aeroBlue:"#D1FDE9",v8Title:"#0DAC81",v8Title2:"#AAEF69",v8SeconderyColor:"#1A7870",chatbotPrimary:"#041646",chatbotGreen:"#061C23",chatbotGray:"#F7F5F2",templateDark:"#0D1014"}},wk=pv`
/*-- reset style start --*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: ${({theme:e})=>e.fonts.dmSans};
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  color: ${({theme:e})=>e.colors.textColor};
  background-color: ${({theme:e})=>e.colors.whiteColor};
  overflow-x: hidden;
}
.body-container{
  overflow-x: hidden;
}
body::-webkit-scrollbar {
  width: 10px;
}
body::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 43px;
}
body::-webkit-scrollbar-thumb {
  background: #D0D2D3;
  border-radius: 43px;
}

.dm-sans {
  font-family: ${({theme:e})=>e.fonts.dmSans} !important;
}

.plus-jakarta-sans {
  font-family: ${({theme:e})=>e.fonts.PlusJakartaSans} !important;
}

.caveat {
  font-family: ${({theme:e})=>e.fonts.caveat} !important;
}

.quantico {
  font-family: ${({theme:e})=>e.fonts.quantico} !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
  font-weight: 800;
  letter-spacing: 0;
  color: ${({theme:e})=>e.colors.title};
  line-height: 1.46;
}

h1 {
  font-size: 60px;
}

h2 {
  font-size: 48px;
}

h3 {
  font-size: 30px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 18px;
  font-weight: 500;
}

h6 {
  font-size: 15px;
  font-weight: 500;
}

.wt-400 {
  font-weight: 400 !important;
}

.wt-500 {
  font-weight: 500 !important;
}

.wt-600 {
  font-weight: 600 !important;
}

.wt-700 {
  font-weight: 700 !important;
}

.mb-40 {
  margin-bottom: 40px;
}

.ml-12 {
  margin-left: 12px;
}

.mx-auto {
  margin: 0px auto;
}

.p-0 {
  padding: 0px !important;
}

.m-0 {
  margin: 0px !important;
}

.uppercase {
  text-transform: uppercase !important;
}

.flex {
  display: flex;
}

.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-start {
  justify-content: flex-start;
}

.justify-between {
  justify-content: space-between;
}

.justify-end {
  justify-content: flex-end;
}

.no-border {
  border: none !important;
}

*:focus {
  outline: none;
}

img {
  max-width: 100%;
}

.bg-gray {
  background: ${({theme:e})=>e.colors.bodyBG2};
}

body .mt--60 {
  margin-top: -60px;
}

.xl-mb-10 {
  margin-bottom: 10px;
}

.xl-mb-20 {
  margin-bottom: 20px;
}

.xl-mb-25 {
  margin-bottom: 25px;
}

.xl-mb-30 {
  margin-bottom: 30px !important;
}

.xl-mb-40 {
  margin-bottom: 40px !important;
}

.xl-pl-0 {
  padding-left: 0;
}

.max-w-100 {
  max-width: 100% !important;
}

::-moz-selection {
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.whiteColor};
}

::selection {
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.whiteColor};
}

.row-gap50 {
  row-gap: 50px;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.offer-text {
  margin-top: 28px;
  font-family: ${({theme:e})=>e.fonts.dmSans};
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  color: ${({theme:e})=>e.colors.iconColor2};
}

.title{
    line-height: 135% !important;
}

.pr-0{
    padding-right: 0px !important;
}

.bg-none {
  background: transparent !important;
}

a,
.btn,
button {
  text-decoration: none !important;
  color: inherit;
  cursor: pointer;
}
a:hover,
.btn:hover,
button:hover {
  text-decoration: none;
  color: inherit;
}
a:focus,
.btn:focus,
button:focus {
  text-decoration: none;
  color: inherit;
  outline: none;
  border: none;
}

button,
input[type=submit] {
  cursor: pointer;
}

button {
  border-radius: 0;
  border: 0;
  background-color: transparent;
}

.btn {
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
}

.vbox-overlay {
  z-index: 99999999;
}

.fadeIn{
  opacity: 1;
  animation: fadeInAnimetion 0.6s linear;
  &s1{
    animation: fadeInAnimetion 1s linear;
  }
}
@keyframes fadeInAnimetion {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(0.99998);
  }
}

/*-- custom bootstrap style start --*/
@media (min-width: 1400px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1210px !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  .custom-container {
    max-width: 1370px !important;
    margin: auto;
  }
  .marketplace-container {
    max-width: 1411px !important;
    margin: auto;
  }
}
/*-- custom bootstrap style end --*/
/*-- color style --*/
.color-template {
  color: ${({theme:e})=>e.colors.primary} !important;
}

/*-- bg color style start --*/
.bg-primay {
  background-color: ${({theme:e})=>e.colors.primary};
}

.white-color {
  color: ${({theme:e})=>e.colors.whiteColor};
}

.body-color {
  color: ${({theme:e})=>e.colors.textColor};
}

.bg-aero-blue {
  background-color: ${({theme:e})=>e.colors.aeroBlue};
}

.green-color {
  color: ${({theme:e})=>e.colors.primary6Deep};
}

.check-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.max-width-570 {
  max-width: 570px;
}

.z-index-3 {
  position: relative;
  z-index: 3 !important;
}

/*-- bg color style end --*/
/*-- Lib custom Start --*/
.row {
  margin: 0px -15px !important;
}

.col-xxl-1,
.col-xxl-2,
.col-xxl-3,
.col-xxl-4,
.col-xxl-5,
.col-xxl-6,
.col-xxl-7,
.col-xxl-8,
.col-xxl-9,
.col-xxl-10,
.col-xxl-11,
.col-xxl-12,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
  padding: 0px 15px !important;
}

/*-- Lib custom End --*/
/*-- Dark Mood --*/
body.dark-scheme,
html.dark-scheme body {
  color: ${({theme:e})=>e.colors.iconColor};
}
body.dark-scheme h1,
body.dark-scheme h2,
body.dark-scheme h3,
body.dark-scheme h4,
body.dark-scheme h5,
body.dark-scheme h6,
html.dark-scheme body h1,
html.dark-scheme body h2,
html.dark-scheme body h3,
html.dark-scheme body h4,
html.dark-scheme body h5,
html.dark-scheme body h6 {
  color: ${({theme:e})=>e.colors.whiteColor};
}

/*-- reset style end --*/
.CircularProgressbar .CircularProgressbar-text{
  color: ${({theme:e})=>e.colors.title};
  text-align: center;
  font-family: ${({theme:e})=>e.fonts.PlusJakartaSans};
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
}

.skills-content{
    .CircularProgressbar .CircularProgressbar-trail {
      stroke: ${({theme:e})=>e.colors.whiteColor} !important;
  }
}
.CircularProgressbar .CircularProgressbar-text{
  fill: ${({theme:e})=>e.colors.title} !important;
}
.progress.pie_progress{
  position: relative;
  p{
    position: absolute;
    bottom: 5px;
    width: 100%;
    text-align: center;
  }
}

.rotate-icon-btn {
  transition: 0.3s;
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
}
.rotate-icon-btn .rotate-icon {
  transition: 0.3s;
  position: relative;
  z-index: 1;
}
.rotate-icon-btn .icon {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50px;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rotate-icon {
  transition: 0.3s;
}
.staco-overly-bg {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: ${({theme:e})=>e.colors.blackColor}80;
	z-index: 999;
	opacity: 0;
	visibility: hidden;
	transition: all 0.3s ease-in;
  }
  

/*--------------------------------
05. Utilities style
--------------------------------*/
.wt-500{
  font-weight: 500 !important;
}
.wt-600{
  font-weight: 600 !important;
}
.wt-700{
  font-weight: 700 !important;
}
.wt-800{
  font-weight: 800 !important;
}
/*-- margin style --*/
.mb-20 {
  margin-bottom: 20px;
}

.mb-30 {
  margin-bottom: 30px;
}

//headline animated css


.cd-words-wrapper {
    display: inline-block;
    position: relative;
    text-align: left;
  }
  .cd-words-wrapper b {
    display: inline-block;
    position: absolute;
    white-space: nowrap;
    left: 0;
    top: 0;
  }
  .cd-words-wrapper b.is-visible {
    position: relative;
  }

  .cd-headline.clip b{
    position: relative;
  }

  .cd-headline.slide .cd-words-wrapper {
    overflow: hidden;
    vertical-align: top;
  }
  .cd-headline.slide b {
    opacity: 0;
    top: 0.2em;
  }

  .cd-headline.slide b.is-visible {
    top: 0;
    opacity: 1;
    animation: slide-in 0.6s;
  }
  .cd-headline.slide b.is-hidden {
    animation: slide-out 0.6s;
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    60% {
      opacity: 1;
      transform: translateY(20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    60% {
      opacity: 0;
      transform: translateY(120%);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }

  .cd-headline.loading-bar span {
    display: inline-block;
    padding: 0.2em 0;
}
.cd-headline.loading-bar .cd-words-wrapper {
    overflow: hidden;
    vertical-align: top;
}
.cd-headline.loading-bar .cd-words-wrapper::after {
    /* loading bar */
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 0;
    background: #0096a7;
    z-index: 2;
    transition: width 0.3s -0.1s;
}
.cd-headline.loading-bar .cd-words-wrapper.is-loading::after {
    width: 100%;
    transition: width 3s;
}
.cd-headline.loading-bar b {
    top: 0.2em;
    opacity: 0;
    transition: opacity 0.3s;

    &::after{
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      height: 8px;
      background: ${({theme:e})=>e.colors.primary6};
    }
}

.cd-headline.loading-bar b.is-visible {
    opacity: 1;
    top: 0;

    &::after{
      width: 100%;
      animation: lineAnimate 3s ease-in-out;
    }
}

@keyframes lineAnimate {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

//splitting css
.splitting {
    //  color: saturate(lighten(#182952,55%),60%);
    .char {
      transition: transform 0.5s cubic-bezier(0.3, 0, 0.3, 1),
        opacity 0.5s linear;
      transition-delay: calc(30ms * var(--char-index));
    }

    &[data-scroll="out"] .char {
      opacity: 0.1;
      transform: translateY(0.25em);
    }
  }
  .splitting-mark {
    display: none;
  }

  /* ---------------------------------- */
  /* Recommended styles for Splitting */
  .splitting .word,
  .splitting .char {
    display: inline-block;
  }

  /* Psuedo-element chars */
  .splitting .char {
    position: relative;
  }

  .splitting .char::before,
  .splitting .char::after {
    content: attr(data-char);
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    transition: inherit;
    user-select: none;
  }

  /* Expanded CSS Variables */

  .splitting {
    /* The center word index */
    --word-center: calc((var(--word-total) - 1) / 2);

    /* The center character index */
    --char-center: calc((var(--char-total) - 1) / 2);

    /* The center character index */
    --line-center: calc((var(--line-total) - 1) / 2);
  }

  .splitting .word {
    /* Pecent (0-1) of the word's position */
    --word-percent: calc(var(--word-index) / var(--word-total));

    /* Pecent (0-1) of the line's position */
    --line-percent: calc(var(--line-index) / var(--line-total));
  }

  .splitting .char {
    /* Percent (0-1) of the char's position */
    --char-percent: calc(var(--char-index) / var(--char-total));

    /* Offset from center, positive & negative */
    --char-offset: calc(var(--char-index) - var(--char-center));

    /* Absolute distance from center, only positive */
    --distance: calc(
      (var(--char-offset) * var(--char-offset)) / var(--char-center)
    );

    /* Distance from center where -1 is the far left, 0 is center, 1 is far right */
    --distance-sine: calc(var(--char-offset) / var(--char-center));

    /* Distance from center where 1 is far left/far right, 0 is center */
    --distance-percent: calc((var(--distance) / var(--char-center)));
  }

  @media (max-width: 768px){
    body{
      font-size: 15px;
    }
    h2{
      font-size: 36px;
    }
    .btn-inner{
      min-width: max-content !important;
    }
    .btn-olive-deep{
      max-width: 180px;
    }
  }

`;vc.createRoot(document.getElementById("root")).render(o.jsx(J.StrictMode,{children:o.jsxs(cv,{theme:bk,children:[o.jsx(wk,{}),o.jsx(yk,{})]})}));
