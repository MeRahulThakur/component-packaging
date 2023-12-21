"use strict";var e=require("react"),r=require("styled-components");!function(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===t&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".btn{\n  background-color: blueviolet;\n  color: white;\n}");"function"==typeof SuppressedError&&SuppressedError;const t=r.input`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":e.success?"#067d68":"#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`,o=r.div`
  font-size: 14px;
  color: ${e=>e.disabled?"#e4e3ea":"#080808"};
  padding-bottom: 6px;
`,n=r.div`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`,l=r.p`
  margin: 0px;
  color: ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808"};
`;exports.Button=({label:r})=>e.createElement("button",{className:"btn"},r),exports.Input=r=>{var{id:a,disabled:s,label:d,message:c,error:i,success:p,onChange:u,placeholder:b}=r,m=function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)r.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]])}return t}(r,["id","disabled","label","message","error","success","onChange","placeholder"]);return e.createElement(e.Fragment,null,e.createElement(o,null,e.createElement(l,{disabled:s,error:i},d)),e.createElement(t,Object.assign({id:a,type:"text",onChange:u,disabled:s,error:i,success:p,placeholder:b},m)),e.createElement(n,null,e.createElement(l,{error:i},c)))};
//# sourceMappingURL=index.js.map
