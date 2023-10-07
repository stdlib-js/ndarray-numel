"use strict";var l=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=l(function(g,s){
var o=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,d=require('@stdlib/assert-is-collection/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function p(r){var e,a,i,t,n;if(typeof r!="object"||r===null)throw new TypeError(u('nullDv',r));if(i=r.length,o(i))return i;if(a=r.shape,!d(a))throw new TypeError(u('nullDv',r));if(e=a.length,e===0)return 0;for(i=1,n=0;n<e;n++){if(t=a[n],!o(t))throw new TypeError(u('nullDv',r));i*=t}return i}s.exports=p
});var f=v();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
