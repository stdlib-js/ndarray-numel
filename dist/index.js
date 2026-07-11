"use strict";var l=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var v=l(function(g,s){
var o=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,d=require('@stdlib/assert-is-collection/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function p(r){var e,i,a,t,n;if(typeof r!="object"||r===null)throw new TypeError(u('1k7Dv',r));if(a=r.length,o(a))return a;if(i=r.shape,!d(i))throw new TypeError(u('1k7Dv',r));if(e=i.length,e===0)return 0;for(a=1,n=0;n<e;n++){if(t=i[n],!o(t))throw new TypeError(u('1k7Dv',r));a*=t}return a}s.exports=p
});var f=v();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
