// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function s(s){var n,o,i,d,l;if("object"!=typeof s||null===s)throw new TypeError(t("1k7Dv",s));if(i=s.length,r(i))return i;if(o=s.shape,!e(o))throw new TypeError(t("1k7Dv",s));if(0===(n=o.length))return 0;for(i=1,l=0;l<n;l++){if(d=o[l],!r(d))throw new TypeError(t("1k7Dv",s));i*=d}return i}export{s as default};
//# sourceMappingURL=index.mjs.map
