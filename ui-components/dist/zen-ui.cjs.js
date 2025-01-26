"use strict";function r(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var t,e={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/t=e,function(){var r={}.hasOwnProperty;function e(){for(var r="",t=0;t<arguments.length;t++){var e=arguments[t];e&&(r=o(r,n(e)))}return r}function n(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return e.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var n="";for(var a in t)r.call(t,a)&&t[a]&&(n=o(n,a));return n}function o(r,t){return t?r?r+" "+t:r+t:r}t.exports?(e.default=e,t.exports=e):window.classNames=e}();var n=r(e.exports);const o={primary:"w-[200px] h-[50px] border rounded-lg text-white bg-dark-blue hover:bg-white hover:text-dark-blue",secondary:"w-[200px] h-[50px] border rounded-lg hover:bg-dark-blue hover:text-white"};exports.Button=({children:r,variant:t="primary"})=>React.createElement("button",{className:n(o[t])},r||"Button");
