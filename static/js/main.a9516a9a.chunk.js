(this["webpackJsonpgb-emu"]=this["webpackJsonpgb-emu"]||[]).push([[0],{11:function(e,c,n){"use strict";n.r(c);var t=n(1),r=n.n(t),a=n(3),o=n.n(a),d=(n(9),n(4));function f(e){return e.toString(16)}function s(e){return parseInt(e,16)}function i(e){var c="number"===typeof e?f(e):e;switch(c.length){case 0:return"0000";case 1:return"000".concat(c);case 2:return"00".concat(c);case 3:return"0".concat(c);case 4:return c;default:throw new Error("Invalid number passed to zeropad")}}function b(e,c,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{instruction:e,length:c,cycles:n,flags:t,operand:r}}var l=[],u=[];function h(e,c,n){switch(e.operand){case"A":case"H":return"$".concat(i(n),"    ").concat(e.instruction,",").concat(e.operand,"\n");case"d16":return"$".concat(i(n),"    ").concat(e.instruction,",$").concat(f(c[n+2])).concat(f(c[n+1]),"\n");default:return"$".concat(i(n),"    ").concat(e.instruction," \n")}}l[0]=b("NOP",1,4),l[33]=b("LD HL",3,12,void 0,"d16"),l[49]=b("LD SP",3,12,void 0,"d16"),l[50]=b("LD (HL-)",1,8,void 0,"A"),l[175]=b("XOR A",1,4,{Z:"flip"}),l[203]=b("PREFIX CB",1,4),u[124]=b("BIT 7",2,8,{Z:"flip",N:"reset",H:"set"},"H");for(var g=function(e){for(var c="",n=0;n<e.length;){var t=e[n];switch(t){case s("0x00"):var r=l[t];c+=h(r,e,n),n+=r.length;break;case s("0x21"):var a=l[t];c+=h(a,e,n),n+=a.length;break;case s("0x31"):var o=l[t];c+=h(o,e,n),n+=o.length;break;case s("0x32"):var d=l[t];c+=h(d,e,n),n+=d.length;break;case s("0xaf"):var f=l[t];c+=h(f,e,n),n+=f.length;break;case s("0xcb"):var b=l[t],g=u[e[n+b.length]];c+=g?h(g,e,n):"$".concat(i(n),"    Unknown opcode \n"),n+=b.length;break;default:c+="$".concat(i(n),"    Unknown opcode \n"),n++}}return c},j="31 fe ff af 21 ff 9f 32 cb 7c 20 fb 21 26 ff 0e 11 3e 80 32 e2 0c 3e f3 e2 32 3e 77 77 3e fc e0 47 11 04 01 21 10 80 1a cd 95 00 cd 96 00 13 7b fe 34 20 f3 11 d8 00 06 08 1a 13 22 23 05 20 f9 3e 19 ea 10 99 21 2f 99 0e 0c 3d 28 08 32 0d 20 f9 2e 0f 18 f3 67 3e 64 57 e0 42 3e 91 e0 40 04 1e 02 0e 0c f0 44 fe 90 20 fa 0d 20 f7 1d 20 f2 0e 13 24 7c 1e 83 fe 62 28 06 1e c1 fe 64 20 06 7b e2 0c 3e 87 e2 f0 42 90 e0 42 15 20 d2 05 20 4f 16 20 18 cb 4f 06 04 c5 cb 11 17 c1 cb 11 17 05 20 f5 22 23 22 23 c9 ce ed 66 66 cc 0d 00 0b 03 73 00 83 00 0c 00 0d 00 08 11 1f 88 89 00 0e dc cc 6e e6 dd dd d9 99 bb bb 67 63 6e 0e ec cc dd dc 99 9f bb b9 33 3e 3c 42 b9 a5 b9 a5 42 3c 21 04 01 11 a8 00 1a 13 be 20 fe 23 7d fe 34 20 f5 06 19 78 86 23 05 20 fb 86 20 fe 3e 01 e0 50",v=new Uint8Array(256),p=0;p<j.length;p+=3)v[p/3]=s("".concat(j[p]).concat(j[p+1]));var x=v,O=n(0);var w=function(){var e=Object(t.useState)(x),c=Object(d.a)(e,2),n=c[0],r=c[1];return console.log(n),window.bootCode=n,Object(O.jsxs)(t.Fragment,{children:[Object(O.jsxs)("div",{className:"screen-container",children:[Object(O.jsx)("canvas",{height:144,width:160}),n?Object(O.jsx)("span",{children:"bootcode loaded"}):Object(O.jsxs)(t.Fragment,{children:[Object(O.jsx)("span",{children:"drop the bootcode here"}),Object(O.jsx)("input",{type:"file",onChange:function(e){if(e.target.files.length){var c=new FileReader;c.onload=function(e){r(new Uint8Array(e.target.result))},c.readAsArrayBuffer(e.target.files[0])}}})]})]}),Object(O.jsx)("div",{className:"bootcode-container",children:Object(O.jsx)("code",{children:Object(O.jsx)("pre",{children:g(n)})})})]})};o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))},9:function(e,c,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.a9516a9a.chunk.js.map