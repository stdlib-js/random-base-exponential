"use strict";var g=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var v=g(function(H,l){
var j=require('@stdlib/math-base-special-ln/dist');function F(a,e){return-j(1-a())/e}l.exports=F
});var p=g(function(I,y){
var i=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),f=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),G=require('@stdlib/assert-is-positive-number/dist').isPrimitive,c=require('@stdlib/assert-is-plain-object/dist'),m=require('@stdlib/assert-is-function/dist'),d=require('@stdlib/assert-has-own-property/dist'),h=require('@stdlib/utils-constant-function/dist'),J=require('@stdlib/utils-noop/dist'),s=require('@stdlib/random-base-mt19937/dist').factory,z=require('@stdlib/math-base-assert-is-nan/dist'),M=require('@stdlib/array-to-json/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),q=v();function V(){var a,e,r,t;if(arguments.length===0)r=s();else if(arguments.length===1&&c(arguments[0]))if(e=arguments[0],d(e,"prng")){if(!m(e.prng))throw new TypeError(o('0oF6u',"prng",e.prng));r=e.prng}else r=s(e);else{if(a=arguments[0],!G(a))throw new TypeError(o('0oF71',a));if(arguments.length>1){if(e=arguments[1],!c(e))throw new TypeError(o('0oF2V',e));if(d(e,"prng")){if(!m(e.prng))throw new TypeError(o('0oF6u',"prng",e.prng));r=e.prng}else r=s(e)}else r=s()}return a===void 0?t=T:t=A,i(t,"NAME","exponential"),e&&e.prng?(i(t,"seed",null),i(t,"seedLength",null),f(t,"state",h(null),J),i(t,"stateLength",null),i(t,"byteLength",null),i(t,"toJSON",h(null)),i(t,"PRNG",r)):(u(t,"seed",x),u(t,"seedLength",N),f(t,"state",R,E),u(t,"stateLength",S),u(t,"byteLength",w),i(t,"toJSON",P),i(t,"PRNG",r),r=r.normalized),t;function x(){return r.seed}function N(){return r.seedLength}function S(){return r.stateLength}function w(){return r.byteLength}function R(){return r.state}function E(n){r.state=n}function P(){var n={};return n.type="PRNG",n.name=t.NAME,n.state=M(r.state),a===void 0?n.params=[]:n.params=[a],n}function A(){return q(r,a)}function T(n){return z(n)||n<=0?NaN:q(r,n)}}y.exports=V
});var L=g(function(K,b){
var W=p(),k=W();b.exports=k
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=L(),C=p();B(O,"factory",C);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
