(this.webpackJsonplatimi=this.webpackJsonplatimi||[]).push([[22,25],{594:function(e,t,a){"use strict";var n=a(0),c=a(37),s=a(2),r=a(4),i=a(6),o=a.n(i),l=a(69),j=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},d=function(e){return n.createElement(l.a,null,(function(t){var a,c=t.getPrefixCls,i=t.direction,l=e.prefixCls,d=e.type,u=void 0===d?"horizontal":d,h=e.orientation,m=void 0===h?"center":h,b=e.className,g=e.children,x=e.dashed,O=e.plain,p=j(e,["prefixCls","type","orientation","className","children","dashed","plain"]),f=c("divider",l),y=m.length>0?"-".concat(m):m,w=!!g,v=o()(f,"".concat(f,"-").concat(u),(a={},Object(r.a)(a,"".concat(f,"-with-text"),w),Object(r.a)(a,"".concat(f,"-with-text").concat(y),w),Object(r.a)(a,"".concat(f,"-dashed"),!!x),Object(r.a)(a,"".concat(f,"-plain"),!!O),Object(r.a)(a,"".concat(f,"-rtl"),"rtl"===i),a),b);return n.createElement("div",Object(s.a)({className:v},p,{role:"separator"}),g&&n.createElement("span",{className:"".concat(f,"-inner-text")},g))}))},u=a(662),h=a(660),m=a(449),b=a(103),g=a(476),x=a(663),O=a(90),p=a(42),f=a(592),y=a(3),w=function(e){var t=Object(p.g)(),a=e.otherSignIn,c=e.showForgetPassword,s=e.hideAuthMessage,r=e.showLoading,i=e.extra,o=e.signIn,l=e.token,j=e.loading,O=e.redirect,w=e.showMessage,v=e.message,N=e.allowRedirect;Object(n.useEffect)((function(){null!==l&&N&&t.push(O),w&&setTimeout((function(){s()}),3e3)}));var I=Object(y.jsx)("div",{children:Object(y.jsx)(d,{children:Object(y.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"Latimi Sourced"})})});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(f.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:w?1:0,marginBottom:w?20:0},children:Object(y.jsx)(u.a,{type:"error",showIcon:!0,message:v})}),Object(y.jsxs)(h.a,{layout:"vertical",name:"login-form",onFinish:function(e){r(),o(e)},children:[Object(y.jsx)(h.a.Item,{name:"username",label:"\uc544\uc774\ub514",rules:[{required:!0,message:"Please input your username"}],children:Object(y.jsx)(m.a,{prefix:Object(y.jsx)(g.a,{className:"text-primary"})})}),Object(y.jsx)(h.a.Item,{name:"password",label:Object(y.jsx)("div",{className:"".concat(c?"d-flex justify-content-between w-100 align-items-center":""),children:Object(y.jsx)("span",{children:"\ube44\ubc00\ubc88\ud638"})}),rules:[{required:!0,message:"Please input your password"}],children:Object(y.jsx)(m.a.Password,{prefix:Object(y.jsx)(x.a,{className:"text-primary"})})}),Object(y.jsx)(h.a.Item,{children:Object(y.jsx)(b.a,{type:"primary",htmlType:"submit",block:!0,loading:j,children:"\ub85c\uadf8\uc778"})}),a?I:null,i]})]})};w.defaultProps={otherSignIn:!0,showForgetPassword:!1};var v={signIn:O.e,showAuthMessage:O.c,showLoading:O.d,hideAuthMessage:O.b};t.a=Object(c.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),v)(w)},616:function(e,t,a){"use strict";a.r(t);var n=a(1),c=(a(0),a(594)),s=a(596),r=a(597),i=a(659),o=a(37),l=a(3),j={backgroundImage:"url(/img/others/login-main.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(o.c)((function(e){return e.theme.currentTheme}));return Object(l.jsx)("div",{className:"h-100",style:j,children:Object(l.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(l.jsx)(s.a,{justify:"center",children:Object(l.jsx)(r.a,{xs:20,sm:20,md:20,lg:7,children:Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"my-4",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo2.png":"logo-white.png"),alt:""}),Object(l.jsxs)("p",{children:["\uc544\uc774\ub514\uac00 \uc5c6\uc2b5\ub2c8\uae4c? ",Object(l.jsx)("a",{href:"/auth/register-1",children:" \ud68c\uc6d0 \uac00\uc785"})]})]}),Object(l.jsx)(s.a,{justify:"center",children:Object(l.jsx)(r.a,{xs:24,sm:24,md:20,lg:20,children:Object(l.jsx)(c.a,Object(n.a)({},e))})})]})})})})})})}},650:function(e,t,a){"use strict";a.r(t);a(0);var n=a(616),c=a(3);t.default=function(){return Object(c.jsx)(n.default,{allowRedirect:!0})}}}]);
//# sourceMappingURL=22.5bfd7606.chunk.js.map