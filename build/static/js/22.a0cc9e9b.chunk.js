(this.webpackJsonplatimi=this.webpackJsonplatimi||[]).push([[22],{538:function(e,t,a){"use strict";var n=a(0),c=a(37),s=a(605),r=a(673),i=a(671),o=a(455),l=a(105),j=a(482),d=a(674),h=a(91),m=a(42),u=a(602),b=a(3),g=function(e){var t=Object(m.g)(),a=e.otherSignIn,c=e.showForgetPassword,h=e.hideAuthMessage,g=e.showLoading,x=e.extra,O=e.signIn,p=e.token,f=e.loading,y=e.redirect,w=e.showMessage,v=e.message,N=e.allowRedirect;Object(n.useEffect)((function(){null!==p&&N&&t.push(y),w&&setTimeout((function(){h()}),3e3)}));var I=Object(b.jsx)("div",{children:Object(b.jsx)(s.a,{children:Object(b.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"Latimi Sourced"})})});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:w?1:0,marginBottom:w?20:0},children:Object(b.jsx)(r.a,{type:"error",showIcon:!0,message:v})}),Object(b.jsxs)(i.a,{layout:"vertical",name:"login-form",onFinish:function(e){g(),O(e)},children:[Object(b.jsx)(i.a.Item,{name:"username",label:"\uc544\uc774\ub514",rules:[{required:!0,message:"Please input your username"}],children:Object(b.jsx)(o.a,{prefix:Object(b.jsx)(j.a,{className:"text-primary"})})}),Object(b.jsx)(i.a.Item,{name:"password",label:Object(b.jsx)("div",{className:"".concat(c?"d-flex justify-content-between w-100 align-items-center":""),children:Object(b.jsx)("span",{children:"\ube44\ubc00\ubc88\ud638"})}),rules:[{required:!0,message:"Please input your password"}],children:Object(b.jsx)(o.a.Password,{prefix:Object(b.jsx)(d.a,{className:"text-primary"})})}),Object(b.jsx)(i.a.Item,{children:Object(b.jsx)(l.a,{type:"primary",htmlType:"submit",block:!0,loading:f,children:"\ub85c\uadf8\uc778"})}),a?I:null,x]})]})};g.defaultProps={otherSignIn:!0,showForgetPassword:!1};var x={signIn:h.e,showAuthMessage:h.c,showLoading:h.d,hideAuthMessage:h.b};t.a=Object(c.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),x)(g)},605:function(e,t,a){"use strict";var n=a(2),c=a(4),s=a(0),r=a(6),i=a.n(r),o=a(54),l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};t.a=function(e){return s.createElement(o.a,null,(function(t){var a,r=t.getPrefixCls,o=t.direction,j=e.prefixCls,d=e.type,h=void 0===d?"horizontal":d,m=e.orientation,u=void 0===m?"center":m,b=e.className,g=e.children,x=e.dashed,O=e.plain,p=l(e,["prefixCls","type","orientation","className","children","dashed","plain"]),f=r("divider",j),y=u.length>0?"-".concat(u):u,w=!!g,v=i()(f,"".concat(f,"-").concat(h),(a={},Object(c.a)(a,"".concat(f,"-with-text"),w),Object(c.a)(a,"".concat(f,"-with-text").concat(y),w),Object(c.a)(a,"".concat(f,"-dashed"),!!x),Object(c.a)(a,"".concat(f,"-plain"),!!O),Object(c.a)(a,"".concat(f,"-rtl"),"rtl"===o),a),b);return s.createElement("div",Object(n.a)({className:v},p,{role:"separator"}),g&&s.createElement("span",{className:"".concat(f,"-inner-text")},g))}))}},627:function(e,t,a){"use strict";a.r(t);var n=a(1),c=(a(0),a(538)),s=a(606),r=a(607),i=a(670),o=a(37),l=a(3),j={backgroundImage:"url(/img/others/login-main.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(o.c)((function(e){return e.theme.currentTheme}));return Object(l.jsx)("div",{className:"h-100",style:j,children:Object(l.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(l.jsx)(s.a,{justify:"center",children:Object(l.jsx)(r.a,{xs:20,sm:20,md:20,lg:7,children:Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"my-4",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo2.png":"logo-white.png"),alt:""}),Object(l.jsxs)("p",{children:["\uc544\uc774\ub514\uac00 \uc5c6\uc2b5\ub2c8\uae4c? ",Object(l.jsx)("a",{href:"/auth/register-1",children:" \ud68c\uc6d0 \uac00\uc785"})]})]}),Object(l.jsx)(s.a,{justify:"center",children:Object(l.jsx)(r.a,{xs:24,sm:24,md:20,lg:20,children:Object(l.jsx)(c.a,Object(n.a)({},e))})})]})})})})})})}}}]);
//# sourceMappingURL=22.a0cc9e9b.chunk.js.map