"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[178],{1921:function(e,n,r){r(2791);var i=r(7425),t=r(3463),a=r(184);n.Z=function(e){var n=e.head,r=e.loading,s=e.toggleCreateModal;return(0,a.jsxs)("div",{className:"dashboard-head d-flex align-items-center justify-content-between mb-4",children:[(0,a.jsxs)("h4",{className:"mb-0 d-flex align-items-center",children:[(0,a.jsx)("span",{children:n}),r&&(0,a.jsx)(t.$j,{size:"sm",className:"ms-2"})]}),s&&(0,a.jsx)(i.nmH,{onClick:s,size:40})]})}},6768:function(e,n,r){r.d(n,{Z:function(){return c}});r(2791);var i,t=r(6615),a=r(168),s=r(82),l=r(5764),d=s.ZP.div(i||(i=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 10;\n  ","\n  display:  ",";\n"])),l.Y,(function(e){return!e.active&&"none"})),o=r(184),c=function(e){var n=e.active;return(0,o.jsx)(d,{active:n,children:(0,o.jsx)(t.Z,{color:"#f3f3f3"})})}},6909:function(e,n,r){r(2791);var i=r(6907),t=r(184);n.Z=function(e){var n=e.title;return(0,t.jsx)(i.ql,{children:(0,t.jsxs)("title",{children:["HEXA | ",n]})})}},4397:function(e,n,r){r(2791);var i=r(3463),t=r(7290),a=r(184);n.Z=function(e){var n,r,s=e.allItems,l=e.handlePagination,d=e.children;return(0,a.jsxs)("div",{className:"paginate-table",children:[(0,a.jsx)(i.iA,{responsive:!0,striped:!0,size:"sm",children:d}),(0,a.jsx)(t.Z,{pageNumbers:null===s||void 0===s||null===(n=s.paginationStatus)||void 0===n?void 0:n.numOfPages,currentPage:null===s||void 0===s||null===(r=s.paginationStatus)||void 0===r?void 0:r.currentPage,handlePagination:l})]})}},7290:function(e,n,r){r(2791);var i=r(6048),t=r.n(i),a=r(184);n.Z=function(e){var n=e.pageNumbers,r=void 0===n?0:n,i=e.handlePagination,s=e.currentPage,l=void 0===s?0:s;return(0,a.jsx)(a.Fragment,{children:r>1&&(0,a.jsx)(t(),{forcePage:l-1,breakLabel:"...",nextLabel:">>",onPageChange:function(e){i(e.selected+1)},marginPagesDisplayed:2,pageRangeDisplayed:2,pageCount:r,previousLabel:"<<",containerClassName:"pagination justify-content-center p-3",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})})}},3327:function(e,n,r){r.d(n,{Z:function(){return o}});r(2791);var i,t=r(1564),a=r(3463),s=r(168),l=r(82).ZP.div(i||(i=(0,s.Z)(["\n  cursor: pointer;\n  transition: all 0.5s;\n  background-color: white;\n  padding: 10px 5px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  &:hover {\n    background-color: rgb(247 247 247/1);\n  }\n"]))),d=r(184),o=function(e){var n=e.Icon,r=e.name,i=e.linkUrl,s=e.handleClick,o=(0,d.jsxs)(l,{id:"UncontrolledTooltip-".concat(r),onClick:s||null,children:[(0,d.jsx)("span",{className:"sidebar-link-icon",children:(0,d.jsx)(n,{size:21})}),(0,d.jsx)(a.vg,{className:"sidebar-link-tooltip",placement:"right",target:"UncontrolledTooltip-".concat(r),children:r})]});return i?(0,d.jsx)(t.J,{to:i,style:{cursor:"pointer"},children:o}):(0,d.jsx)(d.Fragment,{children:o})}},232:function(e,n,r){r(2791);var i=r(184);n.Z=function(e){var n=e.children;return(0,i.jsx)("aside",{className:"bg-light rounded d-flex flex-column gap-2 p-2 position-sticky top-0 start-0",children:n})}},7339:function(e,n,r){var i=r(9434),t=r(2791),a=r(3259),s=r(7837);n.Z=function(e,n){var r=(0,i.I0)(),l=(0,i.v9)((function(e){return e.orders})),d=l.allOrders,o=l.isMutation;return(0,t.useEffect)((function(){o.success?(r((0,a.zk)({limit:e,page:n})),r((0,s.D9)())):r((0,a.zk)({limit:e,page:n}))}),[r,o.success,e,n]),{allOrders:d,isMutation:o}}},4059:function(e,n,r){r(2791);var i=r(3463),t=r(3327),a=r(9434),s=r(5907),l=r(232),d=r(7425),o=r(6355),c=r(6856),u=r(184);n.Z=function(e){var n=e.children,r=(0,a.I0)();return(0,u.jsx)(i.W2,{className:"py-4",children:(0,u.jsxs)(i.X2,{className:"position-relative",children:[(0,u.jsx)(i.JX,{lg:1,md:2,xs:2,children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(t.Z,{Icon:c.ytV,name:"Products",linkUrl:"/admin/products"}),(0,u.jsx)(t.Z,{Icon:c._ng,name:"Users",linkUrl:"/admin/users"}),(0,u.jsx)(t.Z,{Icon:o.nO,name:"Orders",linkUrl:"/admin/orders"}),(0,u.jsx)(t.Z,{Icon:d.I7B,name:"Coupons",linkUrl:"/admin/coupons"}),(0,u.jsx)(t.Z,{Icon:c.pNz,name:"Categories",linkUrl:"/admin/categories"}),(0,u.jsx)(t.Z,{Icon:c.mxp,name:"Banners",linkUrl:"/admin/banners"}),(0,u.jsx)(t.Z,{Icon:c.lE7,name:"Logout",handleClick:function(){return r((0,s.kS)())}})]})}),(0,u.jsx)(i.JX,{lg:11,md:10,xs:10,className:"bg-light p-3 rounded",children:n})]})})}},8178:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var i=r(9439),t=r(2791),a=r(6856),s=r(1087),l=r(3463),d=r(1921),o=r(6768),c=r(6909),u=r(4397),h=(r(7290),r(7339)),x=r(9434),p=r(3259),m=function(){var e=(0,x.I0)();return{handleUpdateOrderToPaid:function(n){e((0,p.LC)(n))},handleUpdateOrderToDelivered:function(n){e((0,p.JF)(n))},handleDeleteOrder:function(n){e((0,p.wH)(n))}}},g=r(4059),j=r(184),f=function(){var e,n=(0,t.useState)(1),r=(0,i.Z)(n,2),x=r[0],p=r[1],f=(0,h.Z)(5,x),v=f.allOrders,k=f.isMutation,C=m(),Z=C.handleDeleteOrder,N=C.handleUpdateOrderToDelivered,b=C.handleUpdateOrderToPaid;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c.Z,{title:"Orders"}),(0,j.jsx)(g.Z,{children:(0,j.jsxs)("section",{className:"Orders-section",children:[(0,j.jsx)(o.Z,{active:null===k||void 0===k?void 0:k.loading}),(0,j.jsx)(d.Z,{head:"Orders",loading:v.loading}),v.loading||(null===(e=v.orders)||void 0===e?void 0:e.length)>0?(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(u.Z,{allItems:v,handlePagination:function(e){p(e)},children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"Order ID"}),(0,j.jsx)("th",{children:"User"}),(0,j.jsx)("th",{children:"Created At"}),(0,j.jsx)("th",{children:"Payment Method"}),(0,j.jsx)("th",{children:"Paid Status"}),(0,j.jsx)("th",{children:"Delivered Status"}),(0,j.jsx)("th",{children:"Delete"})]})}),(0,j.jsx)("tbody",{children:v.orders.map((function(e){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{style:{fontSize:"11px"},children:(0,j.jsx)(s.Link,{to:"/orders/".concat(e._id),children:e._id})}),(0,j.jsx)("td",{style:{fontSize:"11px"},children:e.user}),(0,j.jsx)("td",{style:{fontSize:"13px"},children:new Date(e.createdAt).toLocaleDateString()}),(0,j.jsx)("td",{children:"cash"===e.paymentMethod?(0,j.jsx)(l.Ct,{color:"primary",className:"rounded",children:e.paymentMethod}):(0,j.jsx)(l.Ct,{color:"info",className:"rounded",children:e.paymentMethod})}),(0,j.jsx)("td",{children:e.isPaid?(0,j.jsx)(l.Ct,{color:"success",className:"rounded",children:"Paid"}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(l.vg,{placement:"top",target:"UncontrolledTooltipPaid",children:"Update Order To Paid"}),(0,j.jsx)(l.Ct,{id:"UncontrolledTooltipPaid",style:{cursor:"pointer"},color:"danger",className:"rounded",onClick:function(){return b(e._id)},children:"Unpaid"})]})}),(0,j.jsx)("td",{children:e.isDelivered?(0,j.jsx)(l.Ct,{color:"success",className:"rounded",children:"Delivered"}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(l.vg,{placement:"top",target:"UncontrolledTooltipDelivered",children:"Update Order To Delivered"}),(0,j.jsx)(l.Ct,{id:"UncontrolledTooltipDelivered",style:{cursor:"pointer"},color:"danger",className:"rounded",onClick:function(){return N(e._id)},children:"In progress"})]})}),(0,j.jsx)("td",{children:(0,j.jsx)(a.ZkW,{color:"red",size:25,onClick:function(){return Z(e._id)}})})]},e._id)}))})]})}):(0,j.jsx)(l.bZ,{children:"No orders Added Yet !"})]})})]})}}}]);
//# sourceMappingURL=178.82ca3c33.chunk.js.map