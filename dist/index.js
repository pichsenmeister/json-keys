!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.JsonKeys=r():t.JsonKeys=r()}(this,(function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r){function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u=function(t){var r=Object.prototype.toString.call(t);return"[object Object]"===r||"[object Array]"===r},i=function t(r,e,n){if(Array.isArray(r))r.forEach((function(r,o){var u=0===n.length?o.toString():"".concat(n,".").concat(o.toString());e.push("".concat(u)),t(r,e,u)}));else for(var u in r){var i=0===n.length?u:"".concat(n,".").concat(u);e.push("".concat(i)),"object"===o(r[u])&&t(r[u],e,i)}},c=function(t){if(!u(t))throw new Error("invalid JSON");var r=[];return function t(r,e){if(Array.isArray(r))r.forEach((function(r){return t(r,e)}));else for(var n in r)e.push(n),"object"===o(r[n])&&t(r[n],e)}(t,r),r};t.exports={keys:c,uniqueKeys:function(t){return e(new Set(c(t)))},paths:function(t){if(!u(t))throw new Error("invalid JSON");var r=[];return i(t,r,""),r},hasKey:function(t,r){var e=[];return i(t,e,""),e.some((function(t){return t.toLowerCase().indexOf(r.toLowerCase())>=0}))}}}])}));
//# sourceMappingURL=index.js.map