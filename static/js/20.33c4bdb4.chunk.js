(this.webpackJsonplatimi=this.webpackJsonplatimi||[]).push([[20],{594:function(e,t,c){"use strict";var s=c(0),n=c(37),a=c(2),i=c(4),r=c(6),l=c.n(r),o=c(69),j=function(e,t){var c={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(c[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(c[s[n]]=e[s[n]])}return c},d=function(e){return s.createElement(o.a,null,(function(t){var c,n=t.getPrefixCls,r=t.direction,o=e.prefixCls,d=e.type,m=void 0===d?"horizontal":d,h=e.orientation,u=void 0===h?"center":h,b=e.className,x=e.children,g=e.dashed,O=e.plain,p=j(e,["prefixCls","type","orientation","className","children","dashed","plain"]),f=n("divider",o),v=u.length>0?"-".concat(u):u,w=!!x,y=l()(f,"".concat(f,"-").concat(m),(c={},Object(i.a)(c,"".concat(f,"-with-text"),w),Object(i.a)(c,"".concat(f,"-with-text").concat(v),w),Object(i.a)(c,"".concat(f,"-dashed"),!!g),Object(i.a)(c,"".concat(f,"-plain"),!!O),Object(i.a)(c,"".concat(f,"-rtl"),"rtl"===r),c),b);return s.createElement("div",Object(a.a)({className:y},p,{role:"separator"}),x&&s.createElement("span",{className:"".concat(f,"-inner-text")},x))}))},m=c(662),h=c(660),u=c(449),b=c(103),x=c(476),g=c(663),O=c(90),p=c(42),f=c(592),v=c(3),w=function(e){var t=Object(p.g)(),c=e.otherSignIn,n=e.showForgetPassword,a=e.hideAuthMessage,i=e.showLoading,r=e.extra,l=e.signIn,o=e.token,j=e.loading,O=e.redirect,w=e.showMessage,y=e.message,N=e.allowRedirect;Object(s.useEffect)((function(){null!==o&&N&&t.push(O),w&&setTimeout((function(){a()}),3e3)}));var P=Object(v.jsx)("div",{children:Object(v.jsx)(d,{children:Object(v.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"Latimi Sourced"})})});return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(f.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:w?1:0,marginBottom:w?20:0},children:Object(v.jsx)(m.a,{type:"error",showIcon:!0,message:y})}),Object(v.jsxs)(h.a,{layout:"vertical",name:"login-form",onFinish:function(e){i(),l(e)},children:[Object(v.jsx)(h.a.Item,{name:"username",label:"\uc544\uc774\ub514",rules:[{required:!0,message:"Please input your username"}],children:Object(v.jsx)(u.a,{prefix:Object(v.jsx)(x.a,{className:"text-primary"})})}),Object(v.jsx)(h.a.Item,{name:"password",label:Object(v.jsx)("div",{className:"".concat(n?"d-flex justify-content-between w-100 align-items-center":""),children:Object(v.jsx)("span",{children:"\ube44\ubc00\ubc88\ud638"})}),rules:[{required:!0,message:"Please input your password"}],children:Object(v.jsx)(u.a.Password,{prefix:Object(v.jsx)(g.a,{className:"text-primary"})})}),Object(v.jsx)(h.a.Item,{children:Object(v.jsx)(b.a,{type:"primary",htmlType:"submit",block:!0,loading:j,children:"\ub85c\uadf8\uc778"})}),c?P:null,r]})]})};w.defaultProps={otherSignIn:!0,showForgetPassword:!1};var y={signIn:O.e,showAuthMessage:O.c,showLoading:O.d,hideAuthMessage:O.b};t.a=Object(n.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),y)(w)},596:function(e,t,c){"use strict";var s=c(214);t.a=s.a},597:function(e,t,c){"use strict";var s=c(201);t.a=s.a},651:function(e,t,c){"use strict";c.r(t);var s=c(1),n=(c(0),c(594)),a=c(596),i=c(597),r=c(37),l=c(3),o={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(r.c)((function(e){return e.theme.currentTheme}));return Object(l.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(l.jsxs)(a.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(l.jsx)(i.a,{xs:20,sm:20,md:24,lg:16,children:Object(l.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(l.jsx)(a.a,{justify:"center",children:Object(l.jsxs)(i.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsxs)("p",{children:["Don't have an account yet? ",Object(l.jsx)("a",{href:"/auth/register-2",children:"Sign Up"})]}),Object(l.jsx)("div",{className:"mt-4",children:Object(l.jsx)(n.a,Object(s.a)({},e))})]})})})}),Object(l.jsx)(i.a,{xs:0,sm:0,md:0,lg:8,children:Object(l.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:o,children:[Object(l.jsx)("div",{className:"text-right",children:Object(l.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(l.jsx)(a.a,{justify:"center",children:Object(l.jsxs)(i.a,{xs:0,sm:0,md:0,lg:20,children:[Object(l.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-18.png",alt:""}),Object(l.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(l.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(l.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(l.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(l.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=20.33c4bdb4.chunk.js.map