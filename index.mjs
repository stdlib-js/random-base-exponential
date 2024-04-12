// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.1-esm/index.mjs";import{factory as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.3-esm/index.mjs";function j(e,t){return-f(1-e())/t}function u(){var f,u,g,c;if(0===arguments.length)g=l();else if(1===arguments.length&&r(arguments[0]))if(o(u=arguments[0],"prng")){if(!i(u.prng))throw new TypeError(h("0oF6u","prng",u.prng));g=u.prng}else g=l(u);else{if(!s(f=arguments[0]))throw new TypeError(h("0oF71",f));if(arguments.length>1){if(!r(u=arguments[1]))throw new TypeError(h("0oF2V",u));if(o(u,"prng")){if(!i(u.prng))throw new TypeError(h("0oF6u","prng",u.prng));g=u.prng}else g=l(u)}else g=l()}return e(c=void 0===f?function(e){if(p(e)||e<=0)return NaN;return j(g,e)}:function(){return j(g,f)},"NAME","exponential"),u&&u.prng?(e(c,"seed",null),e(c,"seedLength",null),n(c,"state",d(null),m),e(c,"stateLength",null),e(c,"byteLength",null),e(c,"toJSON",d(null)),e(c,"PRNG",g)):(t(c,"seed",(function(){return g.seed})),t(c,"seedLength",(function(){return g.seedLength})),n(c,"state",(function(){return g.state}),(function(e){g.state=e})),t(c,"stateLength",(function(){return g.stateLength})),t(c,"byteLength",(function(){return g.byteLength})),e(c,"toJSON",(function(){var e={type:"PRNG"};e.name=c.NAME,e.state=a(g.state),e.params=void 0===f?[]:[f];return e})),e(c,"PRNG",g),g=g.normalized),c}var g=u();e(g,"factory",u);export{g as default,u as factory};
//# sourceMappingURL=index.mjs.map
