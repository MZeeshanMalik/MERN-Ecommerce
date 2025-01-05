"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[411],{7740:function(e,s,t){t(2791);var i=t(1087),n=t(3463),r=t(184);s.Z=function(e){var s=e.pages;return(0,r.jsx)(n.aG,{className:"mb-4 ",children:s.map((function(e,s){return e.isActive?(0,r.jsx)(n.gN,{active:!0,children:e.page},s):(0,r.jsx)(n.gN,{children:(0,r.jsx)(i.Link,{to:e.link,children:e.page})},s)}))})}},6909:function(e,s,t){t(2791);var i=t(6907),n=t(184);s.Z=function(e){var s=e.title;return(0,n.jsx)(i.ql,{children:(0,n.jsxs)("title",{children:["HEXA | ",s]})})}},2411:function(e,s,t){t.r(s);var i=t(4942),n=t(1413),r=t(9439),a=t(2791),l=t(3463),d=t(6909),o=t(9434),c=t(7689),h=t(4856),u=t(7740),p=t(7328),x=t(1394),m=t(4391),j=t(3259),f=t(7837),g=t(184);s.default=function(){var e,s,t,v,y,C=(0,o.I0)(),I=(0,c.s0)(),A=(0,x.Z)().userCart,b=(0,a.useState)(localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{detailedAddress:"",city:"",phone:"",postalCode:""}),N=(0,r.Z)(b,2),P=N[0],_=N[1],k=function(e){_((0,n.Z)((0,n.Z)({},P),{},(0,i.Z)({},e.target.name,e.target.value)))},Z=(0,a.useState)(null),D=(0,r.Z)(Z,2),S=D[0],w=D[1],z=function(e){w(e)},J=(0,o.v9)((function(e){return e.orders})),X=J.isMutation,H=J.sessionUrl;return(0,a.useEffect)((function(){X.loading||X.success&&(H?(C((0,f.D9)()),window.location.href=H,C((0,f.rR)())):(C((0,f.D9)()),setTimeout((function(){return window.location.href="/orders"}),1e3)))}),[X,C,I,H]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.Z,{title:"Checkout"}),(0,g.jsxs)(l.W2,{className:"py-4",children:[(0,g.jsx)(u.Z,{pages:[{page:"Home",link:"/"},{page:"Cart",link:"/cart"},{page:"Checkout",isActive:!0}]}),(0,g.jsxs)(l.X2,{children:[(0,g.jsxs)(l.JX,{md:7,children:[(0,g.jsx)("h3",{className:"mb-3",children:"Shipping Address"}),(0,g.jsxs)(l.l0,{children:[(0,g.jsxs)(l.cw,{children:[(0,g.jsx)(l.__,{for:"address",children:"Address In Details"}),(0,g.jsx)(l.II,{id:"address",name:"detailedAddress",placeholder:"Address In Details",type:"text",value:P.detailedAddress,onChange:k})]}),(0,g.jsxs)(l.cw,{children:[(0,g.jsx)(l.__,{for:"city",children:"City"}),(0,g.jsx)(l.II,{id:"city",name:"city",placeholder:"City",type:"text",value:P.city,onChange:k})]}),(0,g.jsxs)(l.cw,{children:[(0,g.jsx)(l.__,{for:"phone",children:"Phone Number"}),(0,g.jsx)(l.II,{id:"phone",name:"phone",placeholder:"Phone Number",type:"text",value:P.phone,onChange:k})]}),(0,g.jsxs)(l.cw,{children:[(0,g.jsx)(l.__,{for:"postalCode",children:"Postal Code"}),(0,g.jsx)(l.II,{id:"postalCode",name:"postalCode",placeholder:"Postal Code",type:"text",value:P.postalCode,onChange:k})]})]})]}),(0,g.jsxs)(l.JX,{md:4,children:[(0,g.jsx)("h3",{className:"mb-3",children:"Payment Method"}),(0,g.jsxs)("div",{className:"bg-light p-3",children:[(0,g.jsxs)("div",{className:"d-flex flex-column gap-2 ",children:[(0,g.jsx)("h5",{children:"Price"}),(0,g.jsxs)("span",{style:{fontFamily:"sans-serif",textDecoration:null!==(e=A.cart)&&void 0!==e&&e.totalPriceAfterCouponDiscount?"line-through":"none",color:null!==(s=A.cart)&&void 0!==s&&s.totalPriceAfterCouponDiscount?"gray":"black"},children:["Cart Subtotal : $",null===(t=A.cart)||void 0===t?void 0:t.totalPrice]}),(null===(v=A.cart)||void 0===v?void 0:v.totalPriceAfterCouponDiscount)>0&&(0,g.jsxs)("span",{children:[" ","Cart Subtotal After Discount : $",null===(y=A.cart)||void 0===y?void 0:y.totalPriceAfterCouponDiscount]})]}),(0,g.jsx)("hr",{}),(0,g.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,g.jsx)("h5",{children:"Payment"}),(0,g.jsxs)(l.l0,{className:"d-flex flex-column gap-2",onSubmit:function(e){var s;if(e.preventDefault(),P.detailedAddress&&P.city&&P.phone&&P.postalCode){if(localStorage.setItem("shippingAddress",JSON.stringify(P)),C((0,p.Hy)(P)),(null===(s=A.cart)||void 0===s?void 0:s.cartItems.length)<1)return(0,h.Z)("Your cart is empty","error"),void setTimeout((function(){I("/cart")}),1e3);var t;if(S){if("cash"===S)C((0,j.Du)({cartId:null===(t=A.cart)||void 0===t?void 0:t._id,body:{shippingAddress:P}}));else if("card"===S){var i;C((0,j.j6)({cartId:null===(i=A.cart)||void 0===i?void 0:i._id,shippingAddress:P}))}}else(0,h.Z)("Please select a payment method","error")}else(0,h.Z)("Please fill all shipping address field","error")},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(l.II,{onChange:function(e){z(e.target.value)},type:"radio",id:"cash",value:"cash",name:"payment"})," ",(0,g.jsx)(l.__,{children:"Cash on delivery"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(l.II,{onChange:function(e){z(e.target.value)},type:"radio",id:"card",value:"card",name:"payment"})," ",(0,g.jsx)(l.__,{children:"Credit Card"})]}),(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:m,alt:"payments-img"})}),X.loading?(0,g.jsx)(l.zx,{size:"sm",block:!0,color:"primary",disabled:!0,className:"mt-3",children:(0,g.jsx)(l.$j,{size:"sm"})}):(0,g.jsx)(l.zx,{size:"sm",block:!0,color:"primary",type:"submit",className:"mt-3",children:"Place Order"})]})]})]})]})]})]})]})}}}]);
//# sourceMappingURL=411.33ffe274.chunk.js.map