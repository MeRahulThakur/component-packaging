"use strict";var e=require("react"),r=require("styled-components");function o(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]])}return o}"function"==typeof SuppressedError&&SuppressedError;const t=r.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${e=>"small"===e.size?"7px 25px 8px":"medium"===e.size?"9px 30px 11px":"14px 30px 16px"};
  color: ${e=>e.primary?"#1b116e":"#ffffff"};
  background-color: ${e=>e.primary?"#6bedb5":"#1b116e"};
  opacity: ${e=>e.disabled?.5:1};
  &:hover {
    background-color: ${e=>e.primary?"#55bd90":"#6bedb5"};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${e=>"small"===e.size?"5px 23px 6px":"medium"===e.size?"7px 28px 9px":"12px 28px 14px"};
  }
`,i=r.input`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":e.success?"#067d68":"#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`,p=r.div`
  font-size: 14px;
  color: ${e=>e.disabled?"#e4e3ea":"#080808"};
  padding-bottom: 6px;
`,a=r.div`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`,l=r.p`
  margin: 0px;
  color: ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808"};
`;exports.Button=r=>{var{size:i,primary:p,disabled:a,text:l,onClick:d}=r,s=o(r,["size","primary","disabled","text","onClick"]);return e.createElement(t,Object.assign({type:"button",onClick:d,primary:p,disabled:a,size:i},s),l)},exports.Input=r=>{var{id:t,disabled:d,label:s,message:n,error:c,success:b,onChange:x,placeholder:u}=r,m=o(r,["id","disabled","label","message","error","success","onChange","placeholder"]);return e.createElement(e.Fragment,null,e.createElement(p,null,e.createElement(l,{disabled:d,error:c},s)),e.createElement(i,Object.assign({id:t,type:"text",onChange:x,disabled:d,error:c,success:b,placeholder:u},m)),e.createElement(a,null,e.createElement(l,{error:c},n)))};
//# sourceMappingURL=index.js.map
