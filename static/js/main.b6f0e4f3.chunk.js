(this["webpackJsonpcloud-ml"]=this["webpackJsonpcloud-ml"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){"use strict";var c=n(1),a=n.n(c),i=(n(73),n(24),n(30)),s=n(22),l=n(10),r=n(19),o=n(0);t.a=function(){var e="/login";return a.a.useContext(r.a).authenticated&&(e="/profile"),Object(o.jsx)("header",{children:Object(o.jsx)("nav",{children:Object(o.jsx)("div",{className:"navbar",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"navbar-brand left ms-0 row",children:[Object(o.jsx)(l.b,{to:Object(s.a)(),className:"col-md-4 col-lg-4",children:Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{className:"logo-image",src:i.default,width:120,alt:"logo"})})}),Object(o.jsxs)(l.b,{className:"nav-link col-md-8 col-lg-8 logo-link",to:Object(s.a)(),children:[" ",Object(s.b)()," "]})]}),Object(o.jsx)("div",{className:"navbar-brand right me-0",children:Object(o.jsx)(l.b,{className:"nav-link",to:e,children:" \u041f\u0440\u043e\u0444\u0438\u043b\u044c "})})]})})})})}},,,function(e,t,n){"use strict";var c=n(1),a=n.n(c),i=(n(89),n(36),n(0));t.a=function(e){return Object(i.jsx)(a.a.Fragment,{children:Object(i.jsxs)("div",{className:"load-send row",children:[Object(i.jsx)("form",{className:"file-form col-md-12 col-lg-8 mb-1",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsxs)("label",{htmlFor:"exampleFormControlFile1",children:["\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 ",Object(i.jsx)("b",{children:".csv"})," \u0444\u0430\u0439\u043b \u0441 \u0432\u0430\u0448\u0438\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438"]}),Object(i.jsx)("input",{type:"file",className:"form-control-file",id:"exampleFormControlFile1",onChange:function(t){return e.onChange(t)}})]})}),Object(i.jsx)("button",{type:"submit",onClick:function(t){return e.onSend(t)},className:"btn button-default btn-send col-md-12 col-lg-4 ms-auto me-auto",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c"})]})})}},function(e,t,n){"use strict";var c=n(1),a=Object(c.createContext)(null);t.a=a},,,function(e,t,n){"use strict";function c(){return"/"}function a(){return"Cloud Machine Learning"}n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}))},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/brain.6c1dae5a.png"},,,,,function(e,t,n){"use strict";var c=n(1),a=n.n(c),i=(n(48),n(0));t.a=function(e){return Object(i.jsx)(a.a.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("label",{children:e.mainLabel})}),Object(i.jsxs)("div",{children:[null===e.value&&Object(i.jsx)("input",{type:"text",className:"w-100 input-window",placeholder:e.defaultValue,disabled:!0}),null!==e.value&&Object(i.jsx)("input",{type:"text",className:"w-100 input-window",value:e.value,disabled:!0})]}),void 0!==e.tipLabel&&Object(i.jsxs)("div",{className:"tip",children:[void 0!==e.tipLabelLink&&Object(i.jsx)("label",{className:"tip",children:Object(i.jsx)("a",{href:e.tipLabelLink,className:"tip-link",children:e.tipLabel})}),void 0===e.tipLabelLink&&Object(i.jsx)("label",{className:"tip",children:e.tipLabel})]})]})})}},function(e,t,n){},,,function(e,t,n){"use strict";var c=n(1),a=n.n(c),i=(n(51),n(97),n(0));t.a=function(e){return Object(i.jsx)(a.a.Fragment,{children:Object(i.jsxs)("div",{className:"image-result result-default",children:[null!==e.image&&Object(i.jsx)("img",{className:"img-result",src:e.image,alt:"ImageResult"}),null==e.image&&Object(i.jsx)("div",{className:"img-replacement",children:" \u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"})]})})}},,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";(function(e){var c=n(11),a=n(5),i=n(1),s=n.n(i),l=(n(29),n(95),n(18)),r=n(15),o=n(55),j=n(39),d=n(56),u=n(28),m=n(35),b=n(0);t.a=function(){var t=s.a.useState(null),n=Object(a.a)(t,2),i=n[0],h=n[1],O=s.a.useState(!1),x=Object(a.a)(O,2),f=x[0],p=x[1],v=s.a.useState(null),g=Object(a.a)(v,2),N=g[0],D=g[1],_=s.a.useState(1),B=Object(a.a)(_,2),k=B[0],w=B[1],L=s.a.useState({image_name:"",clusters_centers:null,clusters_labels:null,columns_names:null}),C=Object(a.a)(L,2),F=C[0],y=C[1];s.a.useEffect((function(){try{if(""===F.image_name)return;console.log(F),new Promise((function(e,t){u.a.get("".concat("http://localhost:8080/images","/").concat(F.image_name),{responseType:"arraybuffer"}).then((function(t){e(t)})).catch((function(e){t(e)}))})).then((function(t){var n=e.from(t.data,"binary").toString("base64");D("data:image/png;base64,"+n)}),(function(e){alert("".concat(e.response.status," ").concat(e.response.data,"."))}))}catch(t){console.log(t)}}),[F]);var S={mainLabel:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432",fieldName:"clusters_num",defaultValue:"1",min:"1",onChangeHandle:function(e){w(e.target.value)}},V={name:"clusters_center",text:"\u0420\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u0446\u0435\u043d\u0442\u0440\u044b \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432",onChangeHandle:function(e){e.preventDefault(),p((function(e){return!e}))}},E=[];for(var H in F.clusters_centers){var z="";for(var A in F.clusters_centers[H])z+=F.clusters_centers[H][A].toFixed(4)+" ";E.push(Object(b.jsx)(m.a,{mainLabel:"\u0426\u0435\u043d\u0442\u0440 \u043a\u043b\u0430\u0441\u0442\u0435\u0440a ".concat(H),value:z,defaultValue:""}))}return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)(r.a,{}),Object(b.jsxs)("main",{className:"container",children:[Object(b.jsx)("div",{className:"template-section",children:Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"\u041a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})}),Object(b.jsxs)("section",{className:"functions-list row mt-2 mb-3",children:[Object(b.jsx)("div",{className:"col-md-12 col-lg-6 mt-1",children:Object(b.jsxs)("div",{className:"function",children:[Object(b.jsx)("div",{className:"template-title mb-1",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),Object(b.jsx)(l.a,{onChange:function(e){void 0!==e.target.files[0]?(h(e.target.files[0]),console.log(e.target.files[0],e.target.files[0].name)):h(null)},onSend:function(e){if(e.preventDefault(),null!=i)if(k<=0)alert("\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c >=1");else{var t=new FormData;t.append("".concat(i.name),i);try{new Promise((function(e,n){u.a.post("http://localhost:8080/clusterization",t,{params:{clusters_num:k,clusters_centers:f},headers:{"Content-Type":"multipart/form-data"},responseType:"json"}).then((function(t){e(t)})).catch((function(e){n(e)}))})).then((function(e){var t=e.data;y((function(e){return Object(c.a)(Object(c.a)({},e),t)}))}),(function(e){alert("".concat(e.response.status," ").concat(e.response.data,"."))}))}catch(n){console.log(n)}}else alert("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043b \u0444\u043e\u0440\u043c\u0430\u0442\u0430 *.csv")}}),Object(b.jsx)(d.a,Object(c.a)({},S)),Object(b.jsx)(o.a,Object(c.a)({},V))]})}),Object(b.jsx)("div",{className:"col-md-12 col-lg-6 mt-1",children:Object(b.jsxs)("div",{className:"function",children:[Object(b.jsx)("div",{className:"template-title mb-1",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"}),Object(b.jsx)(j.a,{image:N}),Object(b.jsx)(m.a,Object(c.a)(Object(c.a)({},{mainLabel:"\u0418\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432",defaultValue:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0443\u0442 \u0438\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0432\u0448\u0438\u0445 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u0438",tipLabel:"\u0421\u0442\u043e\u043b\u0431\u0446\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u043c\u0438, \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f",value:null}),{},{value:F.columns_names})),Object(b.jsx)(m.a,Object(c.a)(Object(c.a)({},{mainLabel:"\u041a\u043b\u0430\u0441\u0442\u0435\u0440\u044b",defaultValue:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432",tipLabel:"\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 - \u0438\u043d\u0434\u0435\u043a\u0441 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442",value:null}),{},{value:F.clusters_labels})),0===E.length&&Object(b.jsx)(m.a,Object(c.a)(Object(c.a)({},{mainLabel:"\u0426\u0435\u043d\u0442\u0440\u044b \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432",defaultValue:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0443\u0442 \u0446\u0435\u043d\u0442\u0440\u044b \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432",value:null}),{},{value:F.clusters_centers})),E.length>0&&E]})})]})]})]})}}).call(this,n(47).Buffer)},function(e,t,n){"use strict";var c=n(1),a=n.n(c),i=(n(96),n(0));t.a=function(e){return Object(i.jsx)(a.a.Fragment,{children:Object(i.jsx)("div",{children:Object(i.jsxs)("label",{className:"checkbox-box",children:[Object(i.jsx)("div",{children:Object(i.jsx)("input",{className:"checkbox",type:"checkbox",name:e.name,onChange:function(t){return e.onChangeHandle(t)}})}),Object(i.jsx)("div",{className:"checkbox-label",children:e.text})]})})})}},function(e,t,n){"use strict";var c=n(1),a=n.n(c),i=(n(48),n(0));t.a=function(e){var t=Object(i.jsx)("input",{type:"number",className:"w-100 input-window",name:e.fieldName,placeholder:e.defaultValue,onChange:function(t){return e.onChangeHandle(t)}});return void 0!==e.min&&void 0===e.max?t=Object(i.jsx)("input",{type:"number",min:e.min,className:"w-100 input-window",name:e.fieldName,placeholder:e.defaultValue,onChange:function(t){return e.onChangeHandle(t)}}):void 0===e.min&&void 0!==e.max?t=Object(i.jsx)("input",{type:"number",max:e.max,className:"w-100 input-window",name:e.fieldName,placeholder:e.defaultValue,onChange:function(t){return e.onChangeHandle(t)}}):void 0!==e.min&&void 0!==e.max&&(t=Object(i.jsx)("input",{type:"number",max:e.max,min:e.min,className:"w-100 input-window",name:e.fieldName,placeholder:e.defaultValue,onChange:function(t){return e.onChangeHandle(t)}})),Object(i.jsx)(a.a.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("label",{children:e.mainLabel})}),Object(i.jsx)("div",{children:t}),void 0!==e.tipLabel&&Object(i.jsxs)("div",{className:"tip",children:[void 0!==e.tipLabelLink&&Object(i.jsx)("label",{className:"tip",htmlFor:e.fieldName,children:Object(i.jsx)("a",{href:e.tipLabelLink,className:"tip-link",children:e.tipLabel})}),void 0===e.tipLabelLink&&Object(i.jsx)("label",{className:"tip",htmlFor:e.fieldName,children:e.tipLabel})]})]})})}},,,,function(e,t,n){"use strict";(function(e){var c=n(6),a=n(11),i=n(9),s=n(5),l=n(1),r=n.n(l),o=(n(29),n(98),n(18)),j=n(15),d=n(28),u=n(39),m=n(62),b=n(61),h=n(0);t.a=function(){var t=r.a.useState({image_name:"",names:[],values:[]}),n=Object(s.a)(t,2),l=n[0],O=n[1],x=r.a.useState(null),f=Object(s.a)(x,2),p=f[0],v=f[1],g=r.a.useState(null),N=Object(s.a)(g,2),D=N[0],_=N[1],B=r.a.useState(null),k=Object(s.a)(B,2),w=k[0],L=k[1];r.a.useEffect((function(){try{if(""===l.image_name)return;console.log(l),new Promise((function(e,t){d.a.get("".concat("http://localhost:8080/images","/").concat(l.image_name),{responseType:"arraybuffer"}).then((function(t){e(t)})).catch((function(e){t(e)}))})).then((function(t){var n=e.from(t.data,"binary").toString("base64");_("data:image/png;base64,"+n)}),(function(e){alert("".concat(e.response.status," ").concat(e.response.data,"."))}))}catch(t){console.log(t)}}),[l]);var C=function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null!=p){e.next=4;break}return alert("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043b \u0444\u043e\u0440\u043c\u0430\u0442\u0430 *.csv"),e.abrupt("return");case 4:(n=new FormData).append("".concat(p.name),p);try{new Promise((function(e,t){d.a.post("http://localhost:8080/correlation",n,{params:{colormap:w},headers:{"Content-Type":"multipart/form-data"},responseType:"json"}).then((function(t){e(t)})).catch((function(e){t(e)}))})).then((function(e){var t=e.data;O((function(e){return Object(a.a)(Object(a.a)({},e),t)}))}),(function(e){alert("".concat(e.response.status," ").concat(e.response.data,"."))}))}catch(c){console.log(c)}case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F={mainLabel:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 colormap",fieldName:"color_map",defaultValue:"",tipLabel:"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 colormap",tipLabelLink:"https://matplotlib.org/stable/tutorials/colors/colormaps.html",onChangeHandle:function(e){L(e.target.value)}};return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)(j.a,{}),Object(h.jsxs)("main",{className:"container",children:[Object(h.jsx)("div",{className:"template-section",children:Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:"\u041a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u044f"})})}),Object(h.jsxs)("section",{className:"functions-list row mt-2 mb-3",children:[Object(h.jsx)("div",{className:"col-md-12 col-lg-6 mt-1",children:Object(h.jsxs)("div",{className:"function",children:[Object(h.jsx)("div",{className:"template-title mb-1",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),Object(h.jsx)(o.a,{onChange:function(e){void 0!==e.target.files[0]?(v(e.target.files[0]),console.log(e.target.files[0],e.target.files[0].name)):v(null)},onSend:C}),Object(h.jsx)(b.a,Object(a.a)({},F))]})}),Object(h.jsx)("div",{className:"col-md-12 col-lg-6 mt-1",children:Object(h.jsxs)("div",{className:"function",children:[Object(h.jsx)("div",{className:"template-title mb-1",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"}),Object(h.jsx)(u.a,{image:D}),Object(h.jsx)(m.a,{names:l.names,values:l.values})]})})]})]})]})}}).call(this,n(47).Buffer)},function(e,t,n){"use strict";var c=n(1),a=n.n(c),i=(n(48),n(0));t.a=function(e){return Object(i.jsx)(a.a.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("label",{children:e.mainLabel})}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"text",className:"w-100 input-window",name:e.fieldName,placeholder:e.defaultValue,onChange:function(t){return e.onChangeHandle(t)}})}),void 0!==e.tipLabel&&Object(i.jsxs)("div",{className:"tip",children:[void 0!==e.tipLabelLink&&Object(i.jsx)("label",{className:"tip",htmlFor:e.fieldName,children:Object(i.jsx)("a",{href:e.tipLabelLink,className:"tip-link",children:e.tipLabel})}),void 0===e.tipLabelLink&&Object(i.jsx)("label",{className:"tip",htmlFor:e.fieldName,children:e.tipLabel})]})]})})}},function(e,t,n){"use strict";n(52),n(51);var c=n(0);var a=function(e){var t=e.values.map((function(e){return Object(c.jsx)("div",{className:"matrix-cell",children:Object(c.jsx)("div",{className:"text",children:e})})})),n="matrix-column mt-1 ",a=2;return 12/e.size>2&&(a=Math.floor(12/e.size)),n+="col-sm-".concat(a," col-md-").concat(a," col-lg-").concat(a),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:n,children:t})})};t.a=function(e){for(var t=[],n=0;n<e.names.length;n++)t.push(Object(c.jsx)(a,{size:e.names.length,values:e.values.slice(n*e.names.length,(n+1)*e.names.length).map((function(e){return e.toFixed(3)}))},n));var i="matrix-result result-default mt-1";return 0===e.names.length&&(i+=" matrix-result-height"),Object(c.jsxs)("div",{className:i,children:[e.names.length>0&&Object(c.jsx)("div",{className:"matrix row",children:t}),0===e.names.length&&Object(c.jsx)("div",{className:"matrix-replacement",children:" \u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043c\u0430\u0442\u0440\u0438\u0446\u0430"})]})}},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){var c={"./brain.png":30,"./clusterization.png":77,"./correlation.png":78,"./data-preprocessing-cover.png":79,"./distributions.png":80,"./regression.png":81};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=i,e.exports=a,a.id=76},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/clusterization.86ce360e.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/correlation.b4dd3955.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/data-preprocessing-cover.dc0dad88.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/distributions.bcca2403.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/regression.cfe9699e.png"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(53),a=n.n(c),i=(n(70),n(10)),s=n(5),l=n(1),r=n.n(l),o=(n(71),n(4)),j=n(19),d=(n(72),[{id:1,page_link:"distribution",img_name:"distributions.png",name:"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u0447\u0430\u0441\u0442\u043e\u0442\u043d\u044b\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.",link:"https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2%D0%B5%D1%80%D0%BE%D1%8F%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9"},{id:2,page_link:"regression",img_name:"regression.png",name:"\u0420\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043f\u043e \u0432\u0430\u0448\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u043c.",link:"https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%8F_(%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0)"},{id:3,page_link:"data-preprocessing",img_name:"data-preprocessing-cover.png",name:"\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.",link:"https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B5%D0%B4%D0%B2%D0%B0%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85"},{id:4,page_link:"clusterization",img_name:"clusterization.png",name:"\u041a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b \u0432 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.",link:"https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7"},{id:5,page_link:"correlation",img_name:"correlation.png",name:"\u041a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u044f",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u044e \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.",link:"https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D1%80%D0%B5%D0%BB%D1%8F%D1%86%D0%B8%D1%8F"}]),u=n(15),m=(n(24),n(36),n(75),n(0));var b=function(e){return Object(m.jsx)("div",{className:"col-md-6 col-lg-4 mb-3",children:Object(m.jsxs)("div",{className:"product",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"mb-3",children:Object(m.jsx)(i.b,{to:e.page_link,children:Object(m.jsx)("img",{src:n(76)("./".concat(e.img_name)).default,alt:"\u041f\u0440\u0438\u043c\u0435\u0440"})})}),Object(m.jsx)("div",{className:"product-title",children:Object(m.jsx)("a",{className:"nav-link",href:e.link,children:Object(m.jsx)("b",{children:e.name})})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:e.description})]}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"mt-auto",children:Object(m.jsx)(i.b,{className:"btn button-default btn-try",to:e.page_link,type:"button",children:"\u041e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c"})})]})})};var h=function(){var e=d.map((function(e){return Object(m.jsx)(b,{id:e.id,img_name:e.img_name,name:e.name,description:e.description,link:e.link,page_link:e.page_link},e.id)}));return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(u.a,{}),Object(m.jsx)("main",{className:"container",children:Object(m.jsx)("section",{className:"products-list row",children:e})})]})},O=(n(82),n(83),n(30)),x=n(22);var f=function(){return Object(m.jsx)("header",{children:Object(m.jsx)("nav",{children:Object(m.jsx)("div",{className:"navbar",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"navbar-brand row",children:[Object(m.jsx)(i.b,{to:Object(x.a)(),className:"col-md-4 col-lg-4",children:Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("img",{className:"logo-image",src:O.default,width:150,alt:"logo"})})}),Object(m.jsxs)(i.b,{className:"nav-link col-md-8 col-lg-8 logo-link",to:Object(x.a)(),children:[" ",Object(x.b)()," "]})]})})})})})};var p=function(){var e=Object(o.m)(),t=r.a.useState(""),n=Object(s.a)(t,2),c=n[0],a=n[1],i=r.a.useState(""),l=Object(s.a)(i,2),d=l[0],u=l[1],b=r.a.useContext(j.a);return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsx)("main",{className:"container",children:Object(m.jsxs)("section",{className:"login-form mb-3",children:[Object(m.jsx)("div",{className:"title",children:Object(m.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})}),Object(m.jsxs)("form",{className:"mt-4",method:"post",children:[Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("div",{children:Object(m.jsx)("label",{children:"Email"})}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"email",className:"w-100",name:"email",required:!0,onChange:function(e){return a(e.target.value)}})}),Object(m.jsx)("div",{className:"errors",children:'\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 "Email"'})]}),Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("div",{children:Object(m.jsx)("label",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"})}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"password",className:"w-100",name:"password",required:!0,onChange:function(e){return u(e.target.value)}})}),Object(m.jsx)("div",{className:"errors",children:'\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 "\u041f\u0430\u0440\u043e\u043b\u044c"'})]}),Object(m.jsx)("div",{className:"mb-4",children:Object(m.jsx)("button",{type:"submit",onClick:function(){""!==c&&""!==d&&(e("/profile"),b.setAuthenticated(!0),console.log(b.authenticated))},className:"btn button-default btn-login",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})})]})};n(84),n(85);var v=function(){var e=Object(o.m)(),t=r.a.useContext(j.a);return Object(m.jsx)(r.a.Fragment,{children:Object(m.jsx)("div",{className:"col-md-6 col-lg-4 mb-4",children:Object(m.jsx)("button",{type:"submit",onClick:function(){return e("/login"),void t.setAuthenticated(!1)},className:"btn button-default btn-unlogin",children:"\u0412\u044b\u0439\u0442\u0438"})})})},g=(n(86),[{id:1,operation_name:"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438",input_file_name:"input.csv",output_file_name:"output.png",input_file_id:1,output_file_id:2},{id:2,operation_name:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",input_file_name:"input.csv",output_file_name:"output.csv",input_file_id:2,output_file_id:3},{id:3,operation_name:"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",input_file_name:"input.csv",output_file_name:"output.png",input_file_id:4,output_file_id:5}]);var N=function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:e.id}),Object(m.jsx)("td",{children:e.operation_name}),Object(m.jsx)("td",{children:e.input_file_name}),Object(m.jsx)("td",{children:e.output_file_name})]})};var D=function(){var e=g.map((function(e){return Object(m.jsx)(N,{id:e.id,operation_name:e.operation_name,input_file_name:e.input_file_name,output_file_name:e.output_file_name,input_file_id:e.input_file_id,output_file_id:e.output_file_id},e.id)}));return Object(m.jsxs)("table",{className:"table table-striped mb-3 col-md-8 col-lg-12",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"#"}),Object(m.jsx)("th",{scope:"col",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"}),Object(m.jsx)("th",{scope:"col",children:"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(m.jsx)("th",{scope:"col",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})]})}),Object(m.jsx)("tbody",{children:e})]})};var _=function(){return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsxs)("main",{className:"container",children:[Object(m.jsxs)("section",{className:"profile-list",children:[Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"profile-title mb-3",children:"\u042d\u0442\u043e \u0432\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(m.jsx)(v,{})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"profile-title mb-3",children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"}),Object(m.jsx)(D,{})]})]})]})};n(87);var B=function(){return Object(m.jsx)("footer",{className:"mt-auto",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{children:"\xa9 V31R, 2022"}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{className:"link",href:"https://github.com/V31R",children:"GitHub"})})]})})},k=(n(29),n(88),n(18));var w=function(){var e=r.a.useState(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(u.a,{}),Object(m.jsxs)("main",{className:"container",children:[Object(m.jsx)("div",{className:"template-section",children:Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"\u0420\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f"})})}),Object(m.jsxs)("section",{className:"functions-list row mt-2 mb-3",children:[Object(m.jsx)("div",{className:"col-md-12 col-lg-6 mt-1",children:Object(m.jsxs)("div",{className:"function",children:[Object(m.jsx)("div",{className:"template-title mb-1",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),Object(m.jsx)(k.a,{onChange:function(e){void 0!==e.target.files[0]?(c(e.target.files[0]),console.log(e.target.files[0],e.target.files[0].name)):c(null)},onSend:function(e){console.log(n)}})]})}),Object(m.jsx)("div",{className:"col-md-12 col-lg-6 mt-1",children:Object(m.jsx)("div",{className:"function",children:Object(m.jsx)("div",{className:"template-title mb-1",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})})})]})]})]})};n(90);var L=function(){var e=r.a.useState(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(u.a,{}),Object(m.jsxs)("main",{className:"container",children:[Object(m.jsx)("div",{className:"template-section",children:Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435"})})}),Object(m.jsxs)("section",{className:"functions-list row mt-2 mb-3",children:[Object(m.jsx)("div",{className:"col-md-12 col-lg-6 mt-1",children:Object(m.jsxs)("div",{className:"function",children:[Object(m.jsx)("div",{className:"template-title mb-1",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),Object(m.jsx)(k.a,{onChange:function(e){void 0!==e.target.files[0]?(c(e.target.files[0]),console.log(e.target.files[0],e.target.files[0].name)):c(null)},onSend:function(e){console.log(n)}})]})}),Object(m.jsx)("div",{className:"col-md-12 col-lg-6 mt-1",children:Object(m.jsx)("div",{className:"function",children:Object(m.jsx)("div",{className:"template-title mb-1",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})})})]})]})]})};n(91);var C=function(){var e=r.a.useState(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(u.a,{}),Object(m.jsxs)("main",{className:"container",children:[Object(m.jsx)("div",{className:"template-section",children:Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"})})}),Object(m.jsxs)("section",{className:"functions-list row mt-2 mb-3",children:[Object(m.jsx)("div",{className:"col-md-12 col-lg-6 mt-1",children:Object(m.jsxs)("div",{className:"function",children:[Object(m.jsx)("div",{className:"template-title mb-1",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),Object(m.jsx)(k.a,{onChange:function(e){void 0!==e.target.files[0]?(c(e.target.files[0]),console.log(e.target.files[0],e.target.files[0].name)):c(null)},onSend:function(e){console.log(n)}})]})}),Object(m.jsx)("div",{className:"col-md-12 col-lg-6 mt-1",children:Object(m.jsx)("div",{className:"function",children:Object(m.jsx)("div",{className:"template-title mb-1",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})})})]})]})]})},F=n(54),y=n(60);var S=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(j.a.Provider,{value:{authenticated:n,setAuthenticated:c},children:[Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",element:Object(m.jsx)(h,{})}),Object(m.jsx)(o.a,{path:"/profile",element:Object(m.jsx)(_,{})}),Object(m.jsx)(o.a,{path:"/login",element:Object(m.jsx)(p,{})}),Object(m.jsx)(o.a,{path:"/regression",element:Object(m.jsx)(w,{})}),Object(m.jsx)(o.a,{path:"/distribution",element:Object(m.jsx)(L,{})}),Object(m.jsx)(o.a,{path:"/data-preprocessing",element:Object(m.jsx)(C,{})}),Object(m.jsx)(o.a,{path:"/clusterization",element:Object(m.jsx)(F.a,{})}),Object(m.jsx)(o.a,{path:"/correlation",element:Object(m.jsx)(y.a,{})})]}),Object(m.jsx)(B,{})]})};a.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(i.a,{children:Object(m.jsx)(S,{})}))}],[[99,1,2]]]);
//# sourceMappingURL=main.b6f0e4f3.chunk.js.map