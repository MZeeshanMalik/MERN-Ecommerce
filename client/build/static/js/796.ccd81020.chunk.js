"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[796],{3605:function(e,i,n){n(2791);var t=n(3463),s=n(184);i.Z=function(e){var i=e.minHeight;return(0,s.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",style:{minHeight:"".concat(i||160,"px")},children:(0,s.jsx)(t.$j,{})})}},8994:function(e,i,n){var t=n(1413),s=n(9439),r=n(2791),c=n(3605),a=n(184);i.Z=function(e){var i=e.image,n=e.style,l=(0,r.useState)(!1),o=(0,s.Z)(l,2),u=o[0],d=o[1];return(0,a.jsxs)(a.Fragment,{children:[!u&&(0,a.jsx)(c.Z,{}),(0,a.jsx)("img",{src:i,alt:"item-img",style:(0,t.Z)({display:"".concat(u?"inline":"none")},n),onLoad:function(){d(!0)}})]})}},7740:function(e,i,n){n(2791);var t=n(1087),s=n(3463),r=n(184);i.Z=function(e){var i=e.pages;return(0,r.jsx)(s.aG,{className:"mb-4 ",children:i.map((function(e,i){return e.isActive?(0,r.jsx)(s.gN,{active:!0,children:e.page},i):(0,r.jsx)(s.gN,{children:(0,r.jsx)(t.Link,{to:e.link,children:e.page})},i)}))})}},6909:function(e,i,n){n(2791);var t=n(6907),s=n(184);i.Z=function(e){var i=e.title;return(0,s.jsx)(t.ql,{children:(0,s.jsxs)("title",{children:["HEXA | ",i]})})}},4879:function(e,i,n){var t=n(2791),s=n(9434),r=n(240),c=n(9621);i.Z=function(e,i){var n=(0,s.I0)(),a=(0,s.v9)((function(e){return e.categories})),l=a.allCategories,o=a.isMutation;return(0,t.useEffect)((function(){o.success?(n((0,r.tG)({limit:e,page:i})),n((0,c.D9)())):n((0,r.tG)({limit:e,page:i}))}),[n,o.success,e,i]),{allCategories:l,isMutation:o}}},3796:function(e,i,n){n.r(i),n.d(i,{default:function(){return g}});n(2791);var t=n(7740),s=n(6909),r=n(1087),c=n(3463),a=n(3605),l=n(8994),o=n(4879),u=n(184),d=function(e){var i,n=e.withSlice,t=(0,o.Z)().allCategories,s=n?null===t||void 0===t||null===(i=t.categories)||void 0===i?void 0:i.slice(0,4):null===t||void 0===t?void 0:t.categories;return(0,u.jsx)("section",{className:"categories-section",children:null!==t&&void 0!==t&&t.loading?(0,u.jsx)(a.Z,{minHeight:300}):null!==t&&void 0!==t&&t.error?(0,u.jsx)(c.bZ,{color:"danger",children:null===t||void 0===t?void 0:t.error}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(c.X2,{md:4,xs:2,children:s.map((function(e,i){return(0,u.jsx)(c.JX,{className:"mb-4",children:(0,u.jsx)(r.Link,{to:"/categories/".concat(e._id),children:(0,u.jsx)(l.Z,{image:null===e||void 0===e?void 0:e.image,style:{width:"100%",height:"auto"}})})},i)}))})})})},g=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Z,{title:"Categories"}),(0,u.jsxs)(c.W2,{className:"my-4",children:[(0,u.jsx)(t.Z,{pages:[{page:"Home",link:"/"},{page:"Categories",isActive:!0}]}),(0,u.jsx)(d,{withSlice:!1})]})]})}}}]);
//# sourceMappingURL=796.ccd81020.chunk.js.map