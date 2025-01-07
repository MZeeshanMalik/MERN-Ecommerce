"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[685],{1921:function(n,e,i){i(2791);var a=i(7425),r=i(3463),t=i(184);e.Z=function(n){var e=n.head,i=n.loading,l=n.toggleCreateModal;return(0,t.jsxs)("div",{className:"dashboard-head d-flex align-items-center justify-content-between mb-4",children:[(0,t.jsxs)("h4",{className:"mb-0 d-flex align-items-center",children:[(0,t.jsx)("span",{children:e}),i&&(0,t.jsx)(r.$j,{size:"sm",className:"ms-2"})]}),l&&(0,t.jsx)(a.nmH,{onClick:l,size:40})]})}},3605:function(n,e,i){i(2791);var a=i(3463),r=i(184);e.Z=function(n){var e=n.minHeight;return(0,r.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",style:{minHeight:"".concat(e||160,"px")},children:(0,r.jsx)(a.$j,{})})}},8994:function(n,e,i){var a=i(1413),r=i(9439),t=i(2791),l=i(3605),s=i(184);e.Z=function(n){var e=n.image,i=n.style,o=(0,t.useState)(!1),c=(0,r.Z)(o,2),d=c[0],u=c[1];return(0,s.jsxs)(s.Fragment,{children:[!d&&(0,s.jsx)(l.Z,{}),(0,s.jsx)("img",{src:e,alt:"item-img",style:(0,a.Z)({display:"".concat(d?"inline":"none")},i),onLoad:function(){u(!0)}})]})}},6768:function(n,e,i){i.d(e,{Z:function(){return d}});i(2791);var a,r=i(6615),t=i(168),l=i(82),s=i(5764),o=l.ZP.div(a||(a=(0,t.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 10;\n  ","\n  display:  ",";\n"])),s.Y,(function(n){return!n.active&&"none"})),c=i(184),d=function(n){var e=n.active;return(0,c.jsx)(o,{active:e,children:(0,c.jsx)(r.Z,{color:"#f3f3f3"})})}},6909:function(n,e,i){i(2791);var a=i(6907),r=i(184);e.Z=function(n){var e=n.title;return(0,r.jsx)(a.ql,{children:(0,r.jsxs)("title",{children:["HEXA | ",e]})})}},3327:function(n,e,i){i.d(e,{Z:function(){return c}});i(2791);var a,r=i(1564),t=i(3463),l=i(168),s=i(82).ZP.div(a||(a=(0,l.Z)(["\n  cursor: pointer;\n  transition: all 0.5s;\n  background-color: white;\n  padding: 10px 5px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  &:hover {\n    background-color: rgb(247 247 247/1);\n  }\n"]))),o=i(184),c=function(n){var e=n.Icon,i=n.name,a=n.linkUrl,l=n.handleClick,c=(0,o.jsxs)(s,{id:"UncontrolledTooltip-".concat(i),onClick:l||null,children:[(0,o.jsx)("span",{className:"sidebar-link-icon",children:(0,o.jsx)(e,{size:21})}),(0,o.jsx)(t.vg,{className:"sidebar-link-tooltip",placement:"right",target:"UncontrolledTooltip-".concat(i),children:i})]});return a?(0,o.jsx)(r.J,{to:a,style:{cursor:"pointer"},children:c}):(0,o.jsx)(o.Fragment,{children:c})}},232:function(n,e,i){i(2791);var a=i(184);e.Z=function(n){var e=n.children;return(0,a.jsx)("aside",{className:"bg-light rounded d-flex flex-column gap-2 p-2 position-sticky top-0 start-0",children:e})}},578:function(n,e,i){var a=i(2791),r=i(9434),t=i(2813),l=i(6998);e.Z=function(){var n=(0,r.I0)(),e=(0,r.v9)((function(n){return n.banners})),i=e.allBanners,s=e.isMutation;return(0,a.useEffect)((function(){s.success?(n((0,t.Ej)()),n((0,l.D9)())):n((0,t.Ej)())}),[n,s.success]),{allBanners:i,isMutation:s}}},4059:function(n,e,i){i(2791);var a=i(3463),r=i(3327),t=i(9434),l=i(5907),s=i(232),o=i(7425),c=i(6355),d=i(6856),u=i(184);e.Z=function(n){var e=n.children,i=(0,t.I0)();return(0,u.jsx)(a.W2,{className:"py-4",children:(0,u.jsxs)(a.X2,{className:"position-relative",children:[(0,u.jsx)(a.JX,{lg:1,md:2,xs:2,children:(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(r.Z,{Icon:d.ytV,name:"Products",linkUrl:"/admin/products"}),(0,u.jsx)(r.Z,{Icon:d._ng,name:"Users",linkUrl:"/admin/users"}),(0,u.jsx)(r.Z,{Icon:c.nO,name:"Orders",linkUrl:"/admin/orders"}),(0,u.jsx)(r.Z,{Icon:o.I7B,name:"Coupons",linkUrl:"/admin/coupons"}),(0,u.jsx)(r.Z,{Icon:d.pNz,name:"Categories",linkUrl:"/admin/categories"}),(0,u.jsx)(r.Z,{Icon:d.mxp,name:"Banners",linkUrl:"/admin/banners"}),(0,u.jsx)(r.Z,{Icon:d.lE7,name:"Logout",handleClick:function(){return i((0,l.kS)())}})]})}),(0,u.jsx)(a.JX,{lg:11,md:10,xs:10,className:"bg-light p-3 rounded",children:e})]})})}},1685:function(n,e,i){i.r(e),i.d(e,{default:function(){return B}});var a,r=i(9439),t=i(2791),l=i(3463),s=i(6856),o=i(8994),c=i(168),d=i(82),u=i(5764),x=d.ZP.div(a||(a=(0,c.Z)(["\n  position: relative;\n\n  .remove-icon {\n    cursor: pointer;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    background: rgba(0, 0, 0, 0.7);\n    color: whitesmoke;\n    border-radius: 100%;\n    padding: 10px;\n\n    ","\n  }\n"])),u.Y),g=i(184),m=function(n){var e=n.imgUrl,i=n.handleDeleteBanner;return(0,g.jsxs)(x,{className:"p-1",style:{background:"#dddddd"},children:[(0,g.jsx)("div",{className:"remove-icon",onClick:i,children:(0,g.jsx)(s.XPx,{size:20})}),(0,g.jsx)(o.Z,{image:e,style:{maxWidth:"100%",height:"auto",objectFit:"contain"}})]})},h=i(6768),j=i(6909),f=i(578),p=i(4059),v=i(1921),Z=function(n){var e=n.modalState,i=n.toggle,a=n.ModalHead,r=n.handleChangeImage,t=n.handleCreateBanner;return(0,g.jsxs)(l.u_,{isOpen:e,toggle:i,centered:!0,children:[(0,g.jsx)(l.xB,{toggle:i,children:a}),(0,g.jsx)(l.fe,{children:(0,g.jsx)(l.II,{name:"image",type:"file",accept:"image/*",onChange:r})}),(0,g.jsxs)(l.mz,{children:[(0,g.jsx)(l.zx,{color:"info",onClick:function(){t(),i()},children:"Upload"}),(0,g.jsx)(l.zx,{color:"primary",onClick:i,children:"Cancel"})]})]})},b=i(9434),k=i(2813),C=i(4856),I=function(){var n=(0,b.I0)(),e=(0,t.useState)(null),i=(0,r.Z)(e,2),a=i[0],l=i[1];return{handleChangeImage:function(n){l(n.target.files[0])},handleCreateBanner:function(){var e=new FormData;a?(e.set("image",a),n((0,k.Ik)({image:a})),l(null)):(0,C.Z)("Please select image","error")},handleDeleteBanner:function(e){n((0,k.H_)(e))}}},B=function(){var n,e,i=(0,f.Z)(),a=i.allBanners,s=i.isMutation,o=(0,t.useState)(!1),c=(0,r.Z)(o,2),d=c[0],u=c[1],x=function(){return u(!d)},b=I(),k=b.handleChangeImage,C=b.handleCreateBanner,B=b.handleDeleteBanner;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j.Z,{title:"Banners"}),(0,g.jsx)(p.Z,{children:(0,g.jsxs)("section",{className:"Banners-section",children:[(0,g.jsx)(h.Z,{active:null===s||void 0===s?void 0:s.loading}),(0,g.jsx)(v.Z,{head:"Banners",toggleCreateModal:x,loading:a.loading}),(0,g.jsx)(Z,{ModalHead:"Upload Banner Image",handleChangeImage:k,handleCreateBanner:C,modalState:d,toggle:x}),a.loading||(null===(n=a.banners)||void 0===n?void 0:n.length)>0?(0,g.jsx)(l.X2,{lg:3,md:2,xs:1,children:null===(e=a.banners)||void 0===e?void 0:e.map((function(n,e){return(0,g.jsx)(l.JX,{className:"mb-3",children:(0,g.jsx)(m,{imgUrl:null===n||void 0===n?void 0:n.image,handleDeleteBanner:function(){return B(n._id)}})},e)}))}):(0,g.jsx)(l.bZ,{children:"No Banners Added Yet !"})]})})]})}}}]);
//# sourceMappingURL=685.884e20c0.chunk.js.map